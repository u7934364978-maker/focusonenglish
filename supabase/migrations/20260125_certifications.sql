-- ============================================
-- TABLA: certifications
-- Almacena los certificados y resultados de exámenes oficiales simulados
-- ============================================

CREATE TABLE IF NOT EXISTS certifications (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES users(id) ON DELETE CASCADE,
  level TEXT NOT NULL, -- A1, A2, B1, B2, C1, C2
  exam_type TEXT NOT NULL, -- Cambridge, TOEFL, IELTS, Oxford, Internal
  score INTEGER,
  issued_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  certificate_url TEXT, -- Path to generated certificate or ID
  metadata JSONB DEFAULT '{}'::jsonb, -- Información adicional del examen
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Índices
CREATE INDEX IF NOT EXISTS idx_certifications_user_id ON certifications(user_id);
CREATE INDEX IF NOT EXISTS idx_certifications_level ON certifications(level);

-- Habilitar RLS
ALTER TABLE certifications ENABLE ROW LEVEL SECURITY;

-- Políticas
DROP POLICY IF EXISTS "Users can view their own certifications" ON certifications;
CREATE POLICY "Users can view their own certifications" ON certifications
  FOR SELECT USING (auth.uid()::text = user_id::text);

-- Solo el sistema/admin puede insertar (en una app real)
-- Pero para el MVP permitiremos que el usuario guarde su resultado
DROP POLICY IF EXISTS "Users can insert their own results" ON certifications;
CREATE POLICY "Users can insert their own results" ON certifications
  FOR INSERT WITH CHECK (auth.uid()::text = user_id::text);

-- Comentario descriptivo
COMMENT ON TABLE certifications IS 'Almacena los certificados y resultados de exámenes oficiales simulados de los usuarios';
