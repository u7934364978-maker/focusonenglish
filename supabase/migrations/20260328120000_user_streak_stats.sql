-- Racha diaria + XP del día (sesión del curso A1 / gamificación ligera)
-- Fechas en UTC (DATE) para comparar días de forma estable.

CREATE TABLE IF NOT EXISTS user_streak_stats (
  user_id            UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  streak_current     INTEGER      NOT NULL DEFAULT 0,
  last_streak_date   DATE,
  today_xp           INTEGER      NOT NULL DEFAULT 0,
  xp_day             DATE,
  created_at         TIMESTAMPTZ  NOT NULL DEFAULT NOW(),
  updated_at         TIMESTAMPTZ  NOT NULL DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_user_streak_stats_updated
  ON user_streak_stats (updated_at DESC);

ALTER TABLE user_streak_stats ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users read own streak stats"
  ON user_streak_stats FOR SELECT
  USING (auth.uid() = user_id);

CREATE POLICY "Users upsert own streak stats"
  ON user_streak_stats FOR INSERT
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users update own streak stats"
  ON user_streak_stats FOR UPDATE
  USING (auth.uid() = user_id)
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Service role full access user streak stats"
  ON user_streak_stats FOR ALL
  TO service_role
  USING (true)
  WITH CHECK (true);
