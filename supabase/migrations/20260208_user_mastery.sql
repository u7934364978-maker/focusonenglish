-- Table to track mastery per concept
CREATE TABLE IF NOT EXISTS user_mastery (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
    concept_tag TEXT NOT NULL,
    mastery_score NUMERIC(4,3) DEFAULT 0.0, -- 0.0 to 1.0
    attempts_count INTEGER DEFAULT 0,
    success_count INTEGER DEFAULT 0,
    last_attempt_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    UNIQUE(user_id, concept_tag)
);

-- Enable RLS
ALTER TABLE user_mastery ENABLE ROW LEVEL SECURITY;

-- Policies
CREATE POLICY "Users can view their own mastery"
    ON user_mastery FOR SELECT
    USING (auth.uid() = user_id);

-- Function to update mastery
CREATE OR REPLACE FUNCTION update_concept_mastery(
    p_user_id UUID,
    p_concept_tags TEXT[],
    p_success BOOLEAN
) RETURNS VOID AS $$
DECLARE
    tag TEXT;
    v_increment INTEGER := CASE WHEN p_success THEN 1 ELSE 0 END;
BEGIN
    FOREACH tag IN ARRAY p_concept_tags
    LOOP
        INSERT INTO user_mastery (user_id, concept_tag, attempts_count, success_count, mastery_score, last_attempt_at, updated_at)
        VALUES (p_user_id, tag, 1, v_increment, CASE WHEN p_success THEN 0.1 ELSE 0.0 END, NOW(), NOW())
        ON CONFLICT (user_id, concept_tag) DO UPDATE SET
            attempts_count = user_mastery.attempts_count + 1,
            success_count = user_mastery.success_count + v_increment,
            -- Mastery score calculation: Simple moving average or similar
            mastery_score = LEAST(1.0, (user_mastery.success_count + v_increment)::NUMERIC / (user_mastery.attempts_count + 1)::NUMERIC),
            last_attempt_at = NOW(),
            updated_at = NOW();
    END LOOP;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;
