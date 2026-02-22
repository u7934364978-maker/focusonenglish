-- Unit Star System
-- Created: 2026-02-22
-- Award Bronze/Silver/Gold stars based on unit performance

-- Create user_progress table for tracking unit completion and stars
CREATE TABLE IF NOT EXISTS user_progress (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  course_id VARCHAR(100) NOT NULL,
  unit_id VARCHAR(100) NOT NULL,
  completed_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  total_exercises INTEGER NOT NULL DEFAULT 0,
  correct_exercises INTEGER NOT NULL DEFAULT 0,
  accuracy_percentage INTEGER NOT NULL DEFAULT 0,
  unit_stars VARCHAR(20), -- 'bronze', 'silver', 'gold', or null
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  UNIQUE(user_id, course_id, unit_id)
);

-- Indexes for performance
CREATE INDEX IF NOT EXISTS idx_user_progress_user_id ON user_progress(user_id);
CREATE INDEX IF NOT EXISTS idx_user_progress_course_unit ON user_progress(course_id, unit_id);
CREATE INDEX IF NOT EXISTS idx_user_progress_stars ON user_progress(unit_stars);

-- RLS Policies
ALTER TABLE user_progress ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can view their own progress"
  ON user_progress FOR SELECT
  USING (auth.uid() = user_id);

CREATE POLICY "Users can view all progress for leaderboard"
  ON user_progress FOR SELECT
  USING (true);

CREATE POLICY "Users can insert their own progress"
  ON user_progress FOR INSERT
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update their own progress"
  ON user_progress FOR UPDATE
  USING (auth.uid() = user_id);

-- Trigger for updated_at
CREATE TRIGGER update_user_progress_updated_at
  BEFORE UPDATE ON user_progress
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();

-- Function to calculate and save unit stars
CREATE OR REPLACE FUNCTION calculate_unit_stars(
  p_accuracy_percentage INTEGER
) RETURNS VARCHAR(20) AS $$
BEGIN
  IF p_accuracy_percentage >= 95 THEN
    RETURN 'gold';
  ELSIF p_accuracy_percentage >= 80 THEN
    RETURN 'silver';
  ELSIF p_accuracy_percentage >= 60 THEN
    RETURN 'bronze';
  ELSE
    RETURN NULL;
  END IF;
END;
$$ LANGUAGE plpgsql IMMUTABLE;

-- RPC function to complete unit with stars
CREATE OR REPLACE FUNCTION complete_unit_with_stars(
  p_user_id UUID,
  p_course_id VARCHAR(100),
  p_unit_id VARCHAR(100),
  p_total_exercises INTEGER,
  p_correct_exercises INTEGER
) RETURNS TABLE (
  unit_stars VARCHAR(20),
  accuracy_percentage INTEGER,
  is_new_record BOOLEAN
) AS $$
DECLARE
  v_accuracy INTEGER;
  v_stars VARCHAR(20);
  v_existing_accuracy INTEGER;
  v_is_new BOOLEAN;
BEGIN
  -- Calculate accuracy percentage
  v_accuracy := CASE 
    WHEN p_total_exercises > 0 THEN ROUND((p_correct_exercises::DECIMAL / p_total_exercises) * 100)
    ELSE 0
  END;
  
  -- Calculate star rating
  v_stars := calculate_unit_stars(v_accuracy);
  
  -- Check for existing progress
  SELECT accuracy_percentage INTO v_existing_accuracy
  FROM user_progress
  WHERE user_id = p_user_id 
    AND course_id = p_course_id 
    AND unit_id = p_unit_id;
  
  -- Determine if this is a new or better record
  v_is_new := v_existing_accuracy IS NULL OR v_accuracy > v_existing_accuracy;
  
  -- Insert or update progress (only if new record or better performance)
  IF v_is_new THEN
    INSERT INTO user_progress (
      user_id,
      course_id,
      unit_id,
      total_exercises,
      correct_exercises,
      accuracy_percentage,
      unit_stars
    ) VALUES (
      p_user_id,
      p_course_id,
      p_unit_id,
      p_total_exercises,
      p_correct_exercises,
      v_accuracy,
      v_stars
    )
    ON CONFLICT (user_id, course_id, unit_id) 
    DO UPDATE SET
      total_exercises = EXCLUDED.total_exercises,
      correct_exercises = EXCLUDED.correct_exercises,
      accuracy_percentage = EXCLUDED.accuracy_percentage,
      unit_stars = EXCLUDED.unit_stars,
      completed_at = NOW(),
      updated_at = NOW();
  END IF;
  
  -- Return the results
  RETURN QUERY
  SELECT v_stars, v_accuracy, v_is_new;
END;
$$ LANGUAGE plpgsql;
