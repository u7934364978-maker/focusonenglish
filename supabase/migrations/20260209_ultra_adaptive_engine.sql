-- Ultra-Intelligent Adaptive Engine Tables
-- Tracking deep session metrics for Stuck/Boredom detection and Cross-level progress

CREATE TABLE IF NOT EXISTS public.user_ultra_state (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
    
    -- Current progress metrics
    current_level TEXT DEFAULT 'A1',
    current_complexity INTEGER DEFAULT 1,
    
    -- Performance metrics (used for Boredom/Stuck detection)
    accuracy_streak INTEGER DEFAULT 0, -- Positive for correct, negative for incorrect
    avg_response_time_ms INTEGER DEFAULT 0,
    total_exercises_completed INTEGER DEFAULT 0,
    
    -- State flags
    is_stuck BOOLEAN DEFAULT FALSE,
    is_bored BOOLEAN DEFAULT FALSE,
    
    -- JSONB for extensible session data (e.g. current skill distribution)
    session_data JSONB DEFAULT '{}'::jsonb,
    
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    UNIQUE(user_id)
);

-- Enable RLS
ALTER TABLE public.user_ultra_state ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can manage their own ultra state" 
ON public.user_ultra_state 
FOR ALL 
USING (auth.uid() = user_id)
WITH CHECK (auth.uid() = user_id);

-- Helper function to update state with rolling averages
CREATE OR REPLACE FUNCTION update_ultra_state(
    p_user_id UUID,
    p_is_correct BOOLEAN,
    p_response_time INTEGER,
    p_complexity INTEGER,
    p_level TEXT
) RETURNS VOID AS $$
DECLARE
    v_streak INTEGER;
    v_stuck BOOLEAN;
    v_bored BOOLEAN;
BEGIN
    -- Calculate new streak
    SELECT 
        CASE 
            WHEN p_is_correct AND accuracy_streak >= 0 THEN accuracy_streak + 1
            WHEN p_is_correct AND accuracy_streak < 0 THEN 1
            WHEN NOT p_is_correct AND accuracy_streak <= 0 THEN accuracy_streak - 1
            ELSE -1
        END INTO v_streak
    FROM user_ultra_state WHERE user_id = p_user_id;

    -- Default if row doesn't exist
    IF v_streak IS NULL THEN
        v_streak := CASE WHEN p_is_correct THEN 1 ELSE -1 END;
    END IF;

    -- Detect Stuck (3 consecutive fails)
    v_stuck := (v_streak <= -3);
    
    -- Detect Boredom (5 consecutive correct + fast response time < 5s)
    v_bored := (v_streak >= 5 AND p_response_time < 5000);

    INSERT INTO user_ultra_state (
        user_id, accuracy_streak, avg_response_time_ms, 
        current_complexity, current_level, is_stuck, is_bored,
        total_exercises_completed
    )
    VALUES (
        p_user_id, v_streak, p_response_time, 
        p_complexity, p_level, v_stuck, v_bored, 1
    )
    ON CONFLICT (user_id) DO UPDATE SET
        accuracy_streak = v_streak,
        avg_response_time_ms = (user_ultra_state.avg_response_time_ms * 0.7 + p_response_time * 0.3)::INTEGER,
        current_complexity = p_complexity,
        current_level = p_level,
        is_stuck = v_stuck,
        is_bored = v_bored,
        total_exercises_completed = user_ultra_state.total_exercises_completed + 1,
        updated_at = NOW();
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;
