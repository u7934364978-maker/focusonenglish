-- ============================================
-- SRS (SPACED REPETITION SYSTEM) SCHEMA
-- ============================================

-- Table to store SRS items for each user
CREATE TABLE IF NOT EXISTS user_srs (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    
    -- Item identification (e.g., word, phrase, grammar rule)
    item_id TEXT NOT NULL,
    item_type TEXT NOT NULL, -- 'vocabulary', 'grammar', 'phrase'
    content JSONB NOT NULL, -- Store front/back content for rendering
    
    -- SM-2 Algorithm variables
    iterations INTEGER DEFAULT 0,
    interval INTEGER DEFAULT 0, -- in days
    easiness_factor NUMERIC(4,2) DEFAULT 2.50,
    
    -- Review dates
    last_review_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    next_review_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    
    -- Timestamps
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),

    -- Unique constraint per user/item
    UNIQUE(user_id, item_id)
);

-- Indices for performance
CREATE INDEX IF NOT EXISTS idx_user_srs_user_id ON user_srs(user_id);
CREATE INDEX IF NOT EXISTS idx_user_srs_next_review ON user_srs(next_review_at);
CREATE INDEX IF NOT EXISTS idx_user_srs_item_id ON user_srs(item_id);

-- Function to update an SRS item based on performance (SM-2 Algorithm)
-- quality: 0-5 (0=again, 3=hard, 4=good, 5=easy)
CREATE OR REPLACE FUNCTION update_srs_item(
    p_user_id UUID,
    p_item_id TEXT,
    p_quality INTEGER
) RETURNS user_srs AS $$
DECLARE
    v_item user_srs;
    v_new_interval INTEGER;
    v_new_ef NUMERIC(4,2);
    v_new_iterations INTEGER;
BEGIN
    -- Get current item state or initialize if new
    SELECT * INTO v_item FROM user_srs 
    WHERE user_id = p_user_id AND item_id = p_item_id;
    
    IF NOT FOUND THEN
        v_item.iterations := 0;
        v_item.easiness_factor := 2.5;
        v_item.interval := 0;
    END IF;

    -- SM-2 logic
    IF p_quality >= 3 THEN
        -- Correct response
        IF v_item.iterations = 0 THEN
            v_new_interval := 1;
        ELSIF v_item.iterations = 1 THEN
            v_new_interval := 6;
        ELSE
            v_new_interval := CEIL(v_item.interval * v_item.easiness_factor);
        END IF;
        
        v_new_iterations := v_item.iterations + 1;
    ELSE
        -- Incorrect response
        v_new_iterations := 0;
        v_new_interval := 1;
    END IF;

    -- Update Easiness Factor
    -- EF' := EF + (0.1 - (5 - quality) * (0.08 + (5 - quality) * 0.02))
    v_new_ef := v_item.easiness_factor + (0.1 - (5 - p_quality) * (0.08 + (5 - p_quality) * 0.02));
    IF v_new_ef < 1.3 THEN v_new_ef := 1.3; END IF;

    -- Update the record
    INSERT INTO user_srs (
        user_id, item_id, iterations, interval, easiness_factor, last_review_at, next_review_at
    ) VALUES (
        p_user_id, p_item_id, v_new_iterations, v_new_interval, v_new_ef, NOW(), NOW() + (v_new_interval || ' days')::INTERVAL
    )
    ON CONFLICT (user_id, item_id) DO UPDATE SET
        iterations = EXCLUDED.iterations,
        interval = EXCLUDED.interval,
        easiness_factor = EXCLUDED.easiness_factor,
        last_review_at = EXCLUDED.last_review_at,
        next_review_at = EXCLUDED.next_review_at,
        updated_at = NOW();

    SELECT * INTO v_item FROM user_srs WHERE user_id = p_user_id AND item_id = p_item_id;
    RETURN v_item;
END;
$$ LANGUAGE plpgsql;
