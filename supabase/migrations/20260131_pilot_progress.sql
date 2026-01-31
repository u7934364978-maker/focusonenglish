-- ============================================
-- PILOT COURSE PROGRESS
-- ============================================

CREATE TABLE IF NOT EXISTS pilot_progress (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  unit_id TEXT NOT NULL,
  current_lesson_id TEXT,
  completed_lessons JSONB DEFAULT '[]'::jsonb,
  scores JSONB DEFAULT '{}'::jsonb,
  last_updated TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  
  -- Ensure unique progress per user and unit
  UNIQUE(user_id, unit_id)
);

-- Enable RLS
ALTER TABLE pilot_progress ENABLE ROW LEVEL SECURITY;

-- RLS Policies
CREATE POLICY "Users can view their own pilot progress"
  ON pilot_progress FOR SELECT
  USING (auth.uid() = user_id);

CREATE POLICY "Users can insert their own pilot progress"
  ON pilot_progress FOR INSERT
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update their own pilot progress"
  ON pilot_progress FOR UPDATE
  USING (auth.uid() = user_id);

-- Trigger to update last_updated
CREATE OR REPLACE FUNCTION update_pilot_progress_timestamp()
RETURNS TRIGGER AS $$
BEGIN
  NEW.last_updated = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER update_pilot_progress_last_updated
  BEFORE UPDATE ON pilot_progress
  FOR EACH ROW
  EXECUTE FUNCTION update_pilot_progress_timestamp();

-- Comments
COMMENT ON TABLE pilot_progress IS 'Tracks progress for the pilot English course units';
