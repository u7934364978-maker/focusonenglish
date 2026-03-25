CREATE TABLE IF NOT EXISTS podcast_progress (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  episode_id VARCHAR(100) NOT NULL,
  progress_seconds INTEGER NOT NULL DEFAULT 0,
  completed BOOLEAN NOT NULL DEFAULT FALSE,
  completed_at TIMESTAMP WITH TIME ZONE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  UNIQUE(user_id, episode_id)
);

CREATE INDEX IF NOT EXISTS idx_podcast_progress_user_id ON podcast_progress(user_id);
CREATE INDEX IF NOT EXISTS idx_podcast_progress_episode_id ON podcast_progress(episode_id);

ALTER TABLE podcast_progress ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can view their own podcast progress"
  ON podcast_progress FOR SELECT
  USING (auth.uid() = user_id);

CREATE POLICY "Users can insert their own podcast progress"
  ON podcast_progress FOR INSERT
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update their own podcast progress"
  ON podcast_progress FOR UPDATE
  USING (auth.uid() = user_id);

CREATE TRIGGER update_podcast_progress_updated_at
  BEFORE UPDATE ON podcast_progress
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();
