-- Spaced Repetition System (SRS) cards for A1 course
-- Stores SM-2 algorithm state per user per exercise, persisted server-side

CREATE TABLE IF NOT EXISTS a1_srs_cards (
  id             UUID         DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id        UUID         NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  exercise_id    TEXT         NOT NULL,
  topic          TEXT         NOT NULL DEFAULT '',
  interval       INTEGER      NOT NULL DEFAULT 1,        -- days until next review
  repetitions    INTEGER      NOT NULL DEFAULT 0,        -- successful reviews in a row
  ease_factor    NUMERIC(4,2) NOT NULL DEFAULT 2.50,     -- SM-2 ease factor (min 1.3)
  next_review_at TIMESTAMPTZ  NOT NULL DEFAULT NOW(),    -- when the card is due
  last_quality   INTEGER      NOT NULL DEFAULT 0,        -- last SM-2 quality score (0-5)
  created_at     TIMESTAMPTZ  NOT NULL DEFAULT NOW(),
  updated_at     TIMESTAMPTZ  NOT NULL DEFAULT NOW(),

  UNIQUE (user_id, exercise_id)
);

CREATE INDEX IF NOT EXISTS idx_a1_srs_user_due
  ON a1_srs_cards (user_id, next_review_at);

CREATE INDEX IF NOT EXISTS idx_a1_srs_user_topic
  ON a1_srs_cards (user_id, topic);

ALTER TABLE a1_srs_cards ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users manage own SRS cards"
  ON a1_srs_cards FOR ALL
  USING (auth.uid() = user_id)
  WITH CHECK (auth.uid() = user_id);

-- Admin read-all policy (uses service role key on server — this is belt-and-suspenders)
CREATE POLICY "Service role full access to SRS cards"
  ON a1_srs_cards FOR ALL
  TO service_role
  USING (true)
  WITH CHECK (true);
