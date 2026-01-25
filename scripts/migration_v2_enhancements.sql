-- Migration: Enhancements for Smart Exercise Generator
-- Phase 1: Error Memory and Gamification Stats

-- 1. Create user_errors table
CREATE TABLE IF NOT EXISTS user_errors (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES users(id) ON DELETE CASCADE,
  category TEXT NOT NULL, -- grammar, vocabulary, etc.
  topic TEXT NOT NULL,    -- e.g., "Present Perfect"
  error_type TEXT,        -- "spelling", "grammar", "vocabulary"
  wrong_answer TEXT,      -- The incorrect input from user
  correct_answer TEXT,    -- The expected correct answer
  count INTEGER DEFAULT 1,
  last_seen TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Index for performance when fetching errors for prompts
CREATE INDEX IF NOT EXISTS idx_user_errors_user_category ON user_errors(user_id, category);

-- 2. Update user_stats with gamification fields
ALTER TABLE user_stats 
ADD COLUMN IF NOT EXISTS current_streak INTEGER DEFAULT 0,
ADD COLUMN IF NOT EXISTS last_practice_date DATE;

-- 3. RLS Policies for user_errors
ALTER TABLE user_errors ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "Users can view their own errors" ON user_errors;
CREATE POLICY "Users can view their own errors" ON user_errors
  FOR SELECT USING (auth.uid()::text = user_id::text);

DROP POLICY IF EXISTS "Users can insert their own errors" ON user_errors;
CREATE POLICY "Users can insert their own errors" ON user_errors
  FOR INSERT WITH CHECK (auth.uid()::text = user_id::text);

DROP POLICY IF EXISTS "Users can update their own errors" ON user_errors;
CREATE POLICY "Users can update their own errors" ON user_errors
  FOR UPDATE USING (auth.uid()::text = user_id::text);
