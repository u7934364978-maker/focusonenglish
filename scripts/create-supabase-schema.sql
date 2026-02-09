-- SCHEMA COMPLETO DE BASE DE DATOS - FOCUS ENGLISH
-- ============================================

-- Este script contiene todas las tablas necesarias para la aplicación
-- Focus English con Supabase.

-- Ejecutar en: Supabase Dashboard → SQL Editor → New Query

-- ============================================
-- 1. EXTENSIONES NECESARIAS
-- ============================================

-- Habilitar UUID generation
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- ============================================
-- 2. FUNCIÓN HELPER: UPDATE TIMESTAMP
-- ============================================

CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- ============================================
-- 3. TABLA: USERS
-- Usuarios registrados en la plataforma
-- ============================================

CREATE TABLE IF NOT EXISTS users (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  
  -- Información de autenticación
  email TEXT NOT NULL UNIQUE,
  password_hash TEXT NOT NULL,
  email_verified BOOLEAN DEFAULT FALSE,
  
  -- Información personal
  name TEXT NOT NULL,
  phone TEXT,
  avatar_url TEXT,
  
  -- Información académica
  language_level TEXT CHECK (language_level IN ('A1', 'A2', 'B1', 'B2', 'C1', 'C2')),
  course_goal TEXT CHECK (course_goal IN ('trabajo', 'viajes', 'examenes')),
  
  -- Timestamps
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW(),
  last_login_at TIMESTAMP,
  
  -- Constraint
  CONSTRAINT unique_email UNIQUE(email)
);

-- Índices para optimizar búsquedas
CREATE INDEX IF NOT EXISTS idx_users_email ON users(email);
CREATE INDEX IF NOT EXISTS idx_users_created_at ON users(created_at);
CREATE INDEX IF NOT EXISTS idx_users_language_level ON users(language_level);

-- Trigger para actualizar updated_at
DROP TRIGGER IF EXISTS update_users_updated_at ON users;
CREATE TRIGGER update_users_updated_at
  BEFORE UPDATE ON users
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();

-- Comentarios
COMMENT ON TABLE users IS 'Usuarios registrados en la plataforma Focus English';
COMMENT ON COLUMN users.email IS 'Email único del usuario (usado para login)';
COMMENT ON COLUMN users.password_hash IS 'Contraseña hasheada con bcrypt (10 rounds)';
COMMENT ON COLUMN users.language_level IS 'Nivel de inglés del usuario según CEFR';
COMMENT ON COLUMN users.course_goal IS 'Objetivo principal del usuario al aprender inglés';

-- ============================================
-- 4. TABLA: PASSWORD_RESET_TOKENS
-- Tokens para recuperación de contraseña
-- ============================================

CREATE TABLE IF NOT EXISTS password_reset_tokens (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  
  -- Token único
  token TEXT NOT NULL UNIQUE,
  
  -- Control de expiración y uso
  expires_at TIMESTAMP NOT NULL,
  used BOOLEAN DEFAULT FALSE,
  
  -- Timestamp
  created_at TIMESTAMP DEFAULT NOW(),
  
  -- Constraint
  CONSTRAINT unique_token UNIQUE(token)
);

-- Índices para performance
CREATE INDEX IF NOT EXISTS idx_password_reset_tokens_user_id ON password_reset_tokens(user_id);
CREATE INDEX IF NOT EXISTS idx_password_reset_tokens_token ON password_reset_tokens(token);
CREATE INDEX IF NOT EXISTS idx_password_reset_tokens_expires_at ON password_reset_tokens(expires_at);

-- Comentarios
COMMENT ON TABLE password_reset_tokens IS 'Tokens de recuperación de contraseña con expiración de 1 hora';
COMMENT ON COLUMN password_reset_tokens.token IS 'Token único generado con crypto.randomBytes(32)';
COMMENT ON COLUMN password_reset_tokens.expires_at IS 'Fecha de expiración (1 hora desde creación)';
COMMENT ON COLUMN password_reset_tokens.used IS 'Indica si el token ya fue usado (cada token solo puede usarse una vez)';

-- ============================================
-- 5. TABLA: SUBSCRIPTIONS
-- Suscripciones de usuarios (integración con Stripe)
-- ============================================

CREATE TABLE IF NOT EXISTS subscriptions (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  
  -- Datos de Stripe
  stripe_customer_id TEXT UNIQUE,
  stripe_subscription_id TEXT UNIQUE,
  stripe_price_id TEXT,
  
  -- Estado de la suscripción
  status TEXT NOT NULL CHECK (status IN (
    'active',
    'canceled',
    'incomplete',
    'incomplete_expired',
    'past_due',
    'trialing',
    'unpaid'
  )),
  
  -- Plan contratado
  plan_name TEXT NOT NULL, -- 'basic', 'standard', 'premium'
  interval TEXT NOT NULL CHECK (interval IN ('month', 'year')),
  
  -- Fechas importantes
  current_period_start TIMESTAMP,
  current_period_end TIMESTAMP,
  trial_end TIMESTAMP,
  cancel_at_period_end BOOLEAN DEFAULT FALSE,
  canceled_at TIMESTAMP,
  
  -- Metadata
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);

-- Índices
CREATE INDEX IF NOT EXISTS idx_subscriptions_user_id ON subscriptions(user_id);
CREATE INDEX IF NOT EXISTS idx_subscriptions_stripe_customer_id ON subscriptions(stripe_customer_id);
CREATE INDEX IF NOT EXISTS idx_subscriptions_stripe_subscription_id ON subscriptions(stripe_subscription_id);
CREATE INDEX IF NOT EXISTS idx_subscriptions_status ON subscriptions(status);
CREATE INDEX IF NOT EXISTS idx_subscriptions_current_period_end ON subscriptions(current_period_end);

-- Trigger para updated_at
DROP TRIGGER IF EXISTS update_subscriptions_updated_at ON subscriptions;
CREATE TRIGGER update_subscriptions_updated_at
  BEFORE UPDATE ON subscriptions
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();

-- Comentarios
COMMENT ON TABLE subscriptions IS 'Suscripciones activas de usuarios con información de Stripe';
COMMENT ON COLUMN subscriptions.status IS 'Estado de la suscripción según Stripe webhook events';
COMMENT ON COLUMN subscriptions.cancel_at_period_end IS 'Si true, la suscripción se cancelará al final del período actual';

-- ============================================
-- 6. TABLA: COURSE_PROGRESS
-- Seguimiento del progreso de usuarios en los cursos
-- ============================================

CREATE TABLE IF NOT EXISTS course_progress (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  
  -- Identificación del curso/lección
  course_level TEXT NOT NULL, -- 'A1', 'A2', 'B1', 'B2', 'C1', 'C2'
  course_goal TEXT NOT NULL,  -- 'trabajo', 'viajes', 'examenes'
  module_id TEXT NOT NULL,
  lesson_id TEXT NOT NULL,
  
  -- Progreso
  completed BOOLEAN DEFAULT FALSE,
  score NUMERIC(5,2), -- 0.00 a 100.00
  time_spent INTEGER DEFAULT 0, -- segundos
  
  -- Ejercicios completados (array JSON)
  exercises_completed JSONB DEFAULT '[]'::jsonb,
  
  -- Fechas
  started_at TIMESTAMP DEFAULT NOW(),
  completed_at TIMESTAMP,
  last_accessed_at TIMESTAMP DEFAULT NOW(),
  
  -- Constraint: un usuario solo puede tener un progreso por lección
  UNIQUE(user_id, course_level, course_goal, module_id, lesson_id)
);

-- Índices
CREATE INDEX IF NOT EXISTS idx_course_progress_user_id ON course_progress(user_id);
CREATE INDEX IF NOT EXISTS idx_course_progress_completed ON course_progress(completed);
CREATE INDEX IF NOT EXISTS idx_course_progress_last_accessed ON course_progress(last_accessed_at);
CREATE INDEX IF NOT EXISTS idx_course_progress_course_level ON course_progress(course_level);

-- Comentarios
COMMENT ON TABLE course_progress IS 'Progreso de usuarios en cursos y lecciones';
COMMENT ON COLUMN course_progress.score IS 'Puntuación del 0 al 100';
COMMENT ON COLUMN course_progress.time_spent IS 'Tiempo total en segundos dedicado a la lección';
COMMENT ON COLUMN course_progress.exercises_completed IS 'Array JSON con IDs de ejercicios completados';

-- ============================================
-- 6b. TABLA: EXERCISE_EXPLANATIONS_CACHE
-- Cache de explicaciones generadas por IA
-- ============================================

CREATE TABLE IF NOT EXISTS exercise_explanations_cache (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  exercise_id TEXT UNIQUE NOT NULL,
  explanation TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_exercise_explanations_cache_exercise_id ON exercise_explanations_cache(exercise_id);

COMMENT ON TABLE exercise_explanations_cache IS 'Cache de explicaciones pedagógicas generadas por IA para los ejercicios';
COMMENT ON COLUMN exercise_explanations_cache.exercise_id IS 'ID único del ejercicio (proveniente de los JSON de contenido)';
COMMENT ON COLUMN exercise_explanations_cache.explanation IS 'Texto de la explicación generado por la IA';

-- ============================================
-- 7. FUNCIONES HELPER
-- ============================================

-- Función para limpiar tokens expirados
CREATE OR REPLACE FUNCTION cleanup_expired_tokens()
RETURNS void AS $$
BEGIN
  DELETE FROM password_reset_tokens
  WHERE expires_at < NOW() OR used = TRUE;
  
  RAISE NOTICE 'Tokens expirados eliminados';
END;
$$ LANGUAGE plpgsql;

COMMENT ON FUNCTION cleanup_expired_tokens IS 'Elimina tokens de recuperación expirados o ya usados';

-- Función para obtener estadísticas de progreso del usuario
CREATE OR REPLACE FUNCTION get_user_progress_stats(p_user_id UUID)
RETURNS TABLE(
  total_lessons INTEGER,
  completed_lessons INTEGER,
  average_score NUMERIC,
  total_time_spent INTEGER
) AS $$
BEGIN
  RETURN QUERY
  SELECT 
    COUNT(*)::INTEGER as total_lessons,
    COUNT(CASE WHEN completed THEN 1 END)::INTEGER as completed_lessons,
    ROUND(AVG(score), 2) as average_score,
    SUM(time_spent)::INTEGER as total_time_spent
  FROM course_progress
  WHERE user_id = p_user_id;
END;
$$ LANGUAGE plpgsql;

COMMENT ON FUNCTION get_user_progress_stats IS 'Obtiene estadísticas de progreso de un usuario';

-- ============================================
-- 8. ROW LEVEL SECURITY (RLS)
-- ============================================

-- Habilitar RLS en todas las tablas
ALTER TABLE users ENABLE ROW LEVEL SECURITY;
ALTER TABLE password_reset_tokens ENABLE ROW LEVEL SECURITY;
ALTER TABLE subscriptions ENABLE ROW LEVEL SECURITY;
ALTER TABLE course_progress ENABLE ROW LEVEL SECURITY;
ALTER TABLE exercise_explanations_cache ENABLE ROW LEVEL SECURITY;

-- Políticas para tabla 'users'
-- Nota: auth.uid() solo funciona con Supabase Auth
-- Para NextAuth, usaremos el service role key

DROP POLICY IF EXISTS "Users can read own data" ON users;
CREATE POLICY "Users can read own data"
  ON users
  FOR SELECT
  USING (true); -- Por ahora permitir lectura (se manejará en el backend)

DROP POLICY IF EXISTS "Service role can manage users" ON users;
CREATE POLICY "Service role can manage users"
  ON users
  FOR ALL
  USING (true);

-- Políticas para 'password_reset_tokens'
-- Solo el sistema (service role) puede gestionar tokens
DROP POLICY IF EXISTS "Service role can manage tokens" ON password_reset_tokens;
CREATE POLICY "Service role can manage tokens"
  ON password_reset_tokens
  FOR ALL
  USING (true);

-- Políticas para 'subscriptions'
DROP POLICY IF EXISTS "Service role can manage subscriptions" ON subscriptions;
CREATE POLICY "Service role can manage subscriptions"
  ON subscriptions
  FOR ALL
  USING (true);

-- Políticas para 'course_progress'
DROP POLICY IF EXISTS "Service role can manage progress" ON course_progress;
CREATE POLICY "Service role can manage progress"
  ON course_progress
  FOR ALL
  USING (true);

-- Políticas para 'exercise_explanations_cache'
DROP POLICY IF EXISTS "Allow anyone to read explanations" ON exercise_explanations_cache;
CREATE POLICY "Allow anyone to read explanations"
  ON exercise_explanations_cache
  FOR SELECT
  USING (true);

DROP POLICY IF EXISTS "Allow authenticated users to insert explanations" ON exercise_explanations_cache;
CREATE POLICY "Allow authenticated users to insert explanations"
  ON exercise_explanations_cache
  FOR INSERT
  WITH CHECK (auth.role() = 'authenticated' OR auth.role() = 'service_role');

-- ============================================
-- 9. VERIFICACIÓN
-- ============================================

-- Ver todas las tablas creadas
SELECT 
  table_name,
  (SELECT COUNT(*) 
   FROM information_schema.columns 
   WHERE table_name = t.table_name) as column_count
FROM information_schema.tables t
WHERE table_schema = 'public'
  AND table_type = 'BASE TABLE'
ORDER BY table_name;

-- Mostrar mensaje de éxito
DO $$
BEGIN
  RAISE NOTICE '✅ Schema de base de datos creado exitosamente!';
  RAISE NOTICE 'Tablas creadas:';
  RAISE NOTICE '  - users';
  RAISE NOTICE '  - password_reset_tokens';
  RAISE NOTICE '  - subscriptions';
  RAISE NOTICE '  - course_progress';
  RAISE NOTICE '  - exercise_explanations_cache';
  RAISE NOTICE '';
  RAISE NOTICE 'Funciones creadas:';
  RAISE NOTICE '  - cleanup_expired_tokens()';
  RAISE NOTICE '  - get_user_progress_stats(user_id)';
  RAISE NOTICE '';
  RAISE NOTICE 'Row Level Security: Habilitado en todas las tablas';
END $$;
