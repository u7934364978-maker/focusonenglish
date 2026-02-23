-- A1 Progress Tracking Tables
CREATE TABLE IF NOT EXISTS a1_progress (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  unit_id INTEGER NOT NULL,
  status TEXT DEFAULT 'in_progress',
  exercises_completed INTEGER DEFAULT 0,
  exercises_total INTEGER DEFAULT 0,
  accuracy_percentage DECIMAL(5,2) DEFAULT 0,
  time_spent_minutes INTEGER DEFAULT 0,
  started_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  completed_at TIMESTAMP WITH TIME ZONE,
  last_activity TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  UNIQUE(user_id, unit_id)
);

CREATE TABLE IF NOT EXISTS a1_exercise_results (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  unit_id INTEGER NOT NULL,
  exercise_id TEXT NOT NULL,
  exercise_type TEXT NOT NULL,
  is_correct BOOLEAN NOT NULL,
  time_spent_seconds INTEGER,
  attempt_number INTEGER DEFAULT 1,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS a1_milestones (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  unit_id INTEGER NOT NULL,
  milestone_type TEXT NOT NULL,
  achieved_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  UNIQUE(user_id, unit_id, milestone_type)
);

ALTER TABLE a1_progress ENABLE ROW LEVEL SECURITY;
ALTER TABLE a1_exercise_results ENABLE ROW LEVEL SECURITY;
ALTER TABLE a1_milestones ENABLE ROW LEVEL SECURITY;

CREATE POLICY "a1_progress_select" ON a1_progress FOR SELECT USING (auth.uid() = user_id);
CREATE POLICY "a1_progress_insert" ON a1_progress FOR INSERT WITH CHECK (auth.uid() = user_id);
CREATE POLICY "a1_progress_update" ON a1_progress FOR UPDATE USING (auth.uid() = user_id);

CREATE POLICY "a1_exercise_select" ON a1_exercise_results FOR SELECT USING (auth.uid() = user_id);
CREATE POLICY "a1_exercise_insert" ON a1_exercise_results FOR INSERT WITH CHECK (auth.uid() = user_id);

CREATE POLICY "a1_milestone_select" ON a1_milestones FOR SELECT USING (auth.uid() = user_id);
CREATE POLICY "a1_milestone_insert" ON a1_milestones FOR INSERT WITH CHECK (auth.uid() = user_id);

CREATE OR REPLACE FUNCTION update_a1_progress_on_exercise()
RETURNS TRIGGER AS $$
DECLARE
  total_exercises INTEGER;
  correct_exercises INTEGER;
  accuracy DECIMAL(5,2);
BEGIN
  SELECT COUNT(*) INTO total_exercises FROM a1_exercise_results WHERE user_id = NEW.user_id AND unit_id = NEW.unit_id;
  SELECT COUNT(*) INTO correct_exercises FROM a1_exercise_results WHERE user_id = NEW.user_id AND unit_id = NEW.unit_id AND is_correct = true;
  accuracy := CASE WHEN total_exercises > 0 THEN ROUND((correct_exercises::DECIMAL / total_exercises) * 100, 2) ELSE 0 END;
  
  INSERT INTO a1_progress (user_id, unit_id, exercises_completed, exercises_total, accuracy_percentage, last_activity)
  VALUES (NEW.user_id, NEW.unit_id, correct_exercises, total_exercises, accuracy, NOW())
  ON CONFLICT (user_id, unit_id) DO UPDATE SET
    exercises_completed = EXCLUDED.exercises_completed,
    exercises_total = EXCLUDED.exercises_total,
    accuracy_percentage = EXCLUDED.accuracy_percentage,
    last_activity = NOW();
  
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER update_a1_progress_on_exercise_result AFTER INSERT ON a1_exercise_results FOR EACH ROW EXECUTE FUNCTION update_a1_progress_on_exercise();

CREATE INDEX idx_a1_progress_user ON a1_progress(user_id);
CREATE INDEX idx_a1_progress_unit ON a1_progress(unit_id);
CREATE INDEX idx_a1_exercise_user_unit ON a1_exercise_results(user_id, unit_id);
CREATE INDEX idx_a1_milestone_user ON a1_milestones(user_id);
