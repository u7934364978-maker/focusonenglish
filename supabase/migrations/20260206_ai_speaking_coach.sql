-- AI Speaking Coach Tables
-- Created: 2026-02-06

-- 1. AI Speaking Sessions
CREATE TABLE IF NOT EXISTS ai_speaking_sessions (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  scenario_id VARCHAR(100) NOT NULL,
  tutor_id VARCHAR(100) NOT NULL,
  level VARCHAR(10) NOT NULL, -- 'A1', 'A2', 'B1', 'B2', 'C1', 'C2'
  status VARCHAR(20) DEFAULT 'in_progress', -- 'in_progress', 'completed'
  summary TEXT, -- Final session summary for memory
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 2. AI Speaking History (Messages & Periodic Feedback)
CREATE TABLE IF NOT EXISTS ai_speaking_history (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  session_id UUID NOT NULL REFERENCES ai_speaking_sessions(id) ON DELETE CASCADE,
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  role VARCHAR(20) NOT NULL, -- 'user', 'assistant', 'system_feedback'
  content TEXT NOT NULL,
  feedback JSONB, -- Stores metrics like { "pronunciation": 85, "fluency": 70, "corrections": [] }
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- RLS POLICIES
ALTER TABLE ai_speaking_sessions ENABLE ROW LEVEL SECURITY;
ALTER TABLE ai_speaking_history ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can manage their own speaking sessions"
  ON ai_speaking_sessions FOR ALL
  USING (auth.uid() = user_id);

CREATE POLICY "Users can manage their own speaking history"
  ON ai_speaking_history FOR ALL
  USING (auth.uid() = user_id);

-- Trigger for updated_at
CREATE TRIGGER update_ai_speaking_sessions_updated_at
  BEFORE UPDATE ON ai_speaking_sessions
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();
