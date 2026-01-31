-- Innovative Methodologies Persistence Tables
-- Created: 2026-01-30

-- 1. ABP: Project Progress
CREATE TABLE IF NOT EXISTS methodology_project_progress (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  project_id VARCHAR(100) NOT NULL,
  status VARCHAR(20) DEFAULT 'not_started', -- 'not_started', 'in_progress', 'completed'
  last_accessed TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  UNIQUE(user_id, project_id)
);

-- 2. ABP: Task Progress
CREATE TABLE IF NOT EXISTS methodology_task_progress (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  project_id VARCHAR(100) NOT NULL,
  task_id VARCHAR(100) NOT NULL,
  completed BOOLEAN DEFAULT FALSE,
  completed_at TIMESTAMP WITH TIME ZONE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  UNIQUE(user_id, project_id, task_id)
);

-- 3. Micro-lessons Progress
CREATE TABLE IF NOT EXISTS methodology_micro_lesson_progress (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  lesson_id VARCHAR(100) NOT NULL,
  completed BOOLEAN DEFAULT FALSE,
  xp_earned INTEGER DEFAULT 0,
  completed_at TIMESTAMP WITH TIME ZONE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  UNIQUE(user_id, lesson_id)
);

-- 4. AR Vocabulary Progress
CREATE TABLE IF NOT EXISTS methodology_ar_vocabulary (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  word_id VARCHAR(100) NOT NULL,
  learned BOOLEAN DEFAULT FALSE,
  learned_at TIMESTAMP WITH TIME ZONE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  UNIQUE(user_id, word_id)
);

-- 5. Unified Methodology Stats
CREATE TABLE IF NOT EXISTS methodology_stats (
  user_id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  ai_conversations_count INTEGER DEFAULT 0,
  ai_total_minutes INTEGER DEFAULT 0,
  ai_average_fluency FLOAT DEFAULT 0.0,
  pronunciation_practices_count INTEGER DEFAULT 0,
  pronunciation_average_score FLOAT DEFAULT 0.0,
  social_clubs_joined INTEGER DEFAULT 0,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- RLS POLICIES

-- Enable RLS
ALTER TABLE methodology_project_progress ENABLE ROW LEVEL SECURITY;
ALTER TABLE methodology_task_progress ENABLE ROW LEVEL SECURITY;
ALTER TABLE methodology_micro_lesson_progress ENABLE ROW LEVEL SECURITY;
ALTER TABLE methodology_ar_vocabulary ENABLE ROW LEVEL SECURITY;
ALTER TABLE methodology_stats ENABLE ROW LEVEL SECURITY;

-- Project Progress Policies
CREATE POLICY "Users can manage their own project progress" 
  ON methodology_project_progress FOR ALL 
  USING (auth.uid() = user_id);

-- Task Progress Policies
CREATE POLICY "Users can manage their own task progress" 
  ON methodology_task_progress FOR ALL 
  USING (auth.uid() = user_id);

-- Micro-lesson Policies
CREATE POLICY "Users can manage their own lesson progress" 
  ON methodology_micro_lesson_progress FOR ALL 
  USING (auth.uid() = user_id);

-- AR Vocabulary Policies
CREATE POLICY "Users can manage their own AR vocabulary" 
  ON methodology_ar_vocabulary FOR ALL 
  USING (auth.uid() = user_id);

-- Stats Policies
CREATE POLICY "Users can manage their own methodology stats" 
  ON methodology_stats FOR ALL 
  USING (auth.uid() = user_id);

-- Helper to update methodology_stats timestamp
CREATE TRIGGER update_methodology_stats_updated_at
  BEFORE UPDATE ON methodology_stats
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();
