-- Migration: Adaptive A2 Course Database Schema
-- Description: Adds difficulty to course_exercises and tracks user adaptive progress.

-- 1. Add difficulty column to course_exercises
ALTER TABLE public.course_exercises 
ADD COLUMN IF NOT EXISTS difficulty INTEGER CHECK (difficulty BETWEEN 1 AND 4);

-- 2. Create user_adaptive_state table
CREATE TABLE IF NOT EXISTS public.user_adaptive_state (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
    course_id TEXT NOT NULL, -- 'a2-english'
    current_difficulty INTEGER DEFAULT 1 CHECK (current_difficulty BETWEEN 1 AND 4),
    consecutive_correct INTEGER DEFAULT 0,
    completed_exercise_ids TEXT[] DEFAULT '{}',
    last_topic_id INTEGER DEFAULT 1,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    UNIQUE(user_id, course_id)
);

-- 3. Enable RLS
ALTER TABLE public.user_adaptive_state ENABLE ROW LEVEL SECURITY;

-- 4. Policies
DROP POLICY IF EXISTS "Users can manage their own adaptive state" ON public.user_adaptive_state;
CREATE POLICY "Users can manage their own adaptive state" 
ON public.user_adaptive_state 
FOR ALL 
USING (auth.uid() = user_id)
WITH CHECK (auth.uid() = user_id);

-- 5. Add index for performance
CREATE INDEX IF NOT EXISTS idx_user_adaptive_state_user_course ON public.user_adaptive_state(user_id, course_id);
