-- ============================================
-- A1 COURSE PROGRESS TRACKING
-- ============================================

-- Main progress table for A1 course
CREATE TABLE IF NOT EXISTS a1_progress (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  unit_id INTEGER NOT NULL CHECK (unit_id >= 1 AND unit_id <= 60),
  status TEXT DEFAULT 'in_progress' CHECK (status IN ('not_started', 'in_progress', 'completed', 'abandoned')),
  exercises_completed INTEGER DEFAULT 0,
  exercises_total INTEGER DEFAULT 0,
  accuracy_percentage DECIMAL(5,2) DEFAULT 0,
  time_spent_minutes INTEGER DEFAULT 0,
  started_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  completed_at TIMESTAMP WITH TIME ZONE,
  last_activity TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  
  UNIQUE(user_id, unit_id)
);

-- Individual exercise results
CREATE TABLE IF NOT EXISTS a1_exercise_results (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  unit_id INTEGER NOT NULL CHECK (unit_id >= 1 AND unit_id <= 60),
  exercise_id TEXT NOT NULL,
  exercise_type TEXT NOT NULL,
  is_correct BOOLEAN NOT NULL,
  time_spent_seconds INTEGER,
  attempt_number INTEGER DEFAULT 1,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Unit completion milestones
CREATE TABLE IF NOT EXISTS a1_milestones (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  unit_id INTEGER NOT NULL,
  milestone_type TEXT NOT NULL CHECK (milestone_type IN ('unit_completed', 'perfect_score', 'streak_10')),
  achieved_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  
  UNIQUE(user_id, unit_id, milestone_type)
);

-- Enable RLS
ALTER TABLE a1_progress ENABLE ROW LEVEL SECURITY;
ALTER TABLE a1_exercise_results ENABLE ROW LEVEL SECURITY;
ALTER TABLE a1_milestones ENABLE ROW LEVEL SECURITY;

-- RLS Policies for a1_progress
CREATE POLICY "Users can view their own a1 progress"
  ON a1_progress FOR SELECT
  USING (auth.uid() = user_id);

CREATE POLICY "Users can insert their own a1 progress"
  ON a1_progress FOR INSERT
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update their own a1 progress"
  ON a1_progress FOR UPDATE
  USING (auth.uid() = user_id);

-- RLS Policies for a1_exercise_results
CREATE POLICY "Users can view their own a1 exercise results"
  ON a1_exercise_results FOR SELECT
  USING (auth.uid() = user_id);

CREATE POLICY "Users can insert their own a1 exercise results"
  ON a1_exercise_results FOR INSERT
  WITH CHECK (auth.uid() = user_id);

-- RLS Policies for a1_milestones
CREATE POLICY "Users can view their own a1 milestones"
  ON a1_milestones FOR SELECT
  USING (auth.uid() = user_id);

CREATE POLICY "System can insert a1 milestones"
  ON a1_milestones FOR INSERT
  WITH CHECK (auth.uid() = user_id);

-- Function to update a1_progress on exercise result
CREATE OR REPLACE FUNCTION update_a1_progress_on_exercise()
RETURNS TRIGGER AS $$
DECLARE
  total_exercises INTEGER;
  correct_exercises INTEGER;
  accuracy DECIMAL(5,2);
BEGIN
  -- Get exercise count for unit
  SELECT COUNT(*) INTO total_exercises
  FROM a1_exercise_results
  WHERE user_id = NEW.user_id AND unit_id = NEW.unit_id;

  SELECT COUNT(*) INTO correct_exercises
  FROM a1_exercise_results
  WHERE user_id = NEW.user_id AND unit_id = NEW.unit_id AND is_correct = true;

  accuracy := CASE WHEN total_exercises > 0 
    THEN ROUND((correct_exercises::DECIMAL / total_exercises) * 100, 2)
    ELSE 0
  END;

  -- Upsert progress record
  INSERT INTO a1_progress (user_id, unit_id, exercises_completed, exercises_total, accuracy_percentage, last_activity)
  VALUES (NEW.user_id, NEW.unit_id, correct_exercises, total_exercises, accuracy, NOW())
  ON CONFLICT (user_id, unit_id) DO UPDATE SET
    exercises_completed = EXCLUDED.exercises_completed,
    exercises_total = EXCLUDED.exercises_total,
    accuracy_percentage = EXCLUDED.accuracy_percentage,
    last_activity = NOW(),
    status = CASE WHEN EXCLUDED.exercises_completed = EXCLUDED.exercises_total AND EXCLUDED.exercises_total > 0
      THEN 'completed'
      ELSE 'in_progress'
    END,
    completed_at = CASE WHEN EXCLUDED.exercises_completed = EXCLUDED.exercises_total AND EXCLUDED.exercises_total > 0
      THEN NOW()
      ELSE NULL
    END;

  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Trigger to auto-update progress
CREATE TRIGGER update_a1_progress_on_exercise_result
  AFTER INSERT ON a1_exercise_results
  FOR EACH ROW
  EXECUTE FUNCTION update_a1_progress_on_exercise();

-- Indexes for performance
CREATE INDEX idx_a1_progress_user_id ON a1_progress(user_id);
CREATE INDEX idx_a1_progress_unit_id ON a1_progress(unit_id);
CREATE INDEX idx_a1_exercise_results_user_unit ON a1_exercise_results(user_id, unit_id);
CREATE INDEX idx_a1_exercise_results_created_at ON a1_exercise_results(created_at);
CREATE INDEX idx_a1_milestones_user_id ON a1_milestones(user_id);

-- Comments
COMMENT ON TABLE a1_progress IS 'Aggregated progress tracking for A1 course units';
COMMENT ON TABLE a1_exercise_results IS 'Individual exercise attempt results for A1 course';
COMMENT ON TABLE a1_milestones IS 'Achievement milestones unlocked by students in A1 course';
