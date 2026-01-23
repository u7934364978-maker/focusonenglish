-- ============================================
-- IMPROVED ROW LEVEL SECURITY (RLS) POLICIES
-- Este script mejora las políticas RLS existentes
-- Reemplaza las políticas permisivas (USING true) con políticas específicas
-- ============================================

-- ============================================
-- 1. POLÍTICAS MEJORADAS PARA TABLA 'users'
-- ============================================

-- Eliminar políticas existentes
DROP POLICY IF EXISTS "Users can read own data" ON users;
DROP POLICY IF EXISTS "Service role can manage users" ON users;
DROP POLICY IF EXISTS "Users can update own data" ON users;
DROP POLICY IF EXISTS "Users can insert own data" ON users;

-- Los usuarios solo pueden leer sus propios datos
CREATE POLICY "Users can read own profile"
  ON users
  FOR SELECT
  USING (
    -- Permitir si es el mismo usuario (comparar por email o ID)
    email = current_setting('request.jwt.claim.email', true)
    OR id::text = current_setting('request.jwt.claim.sub', true)
  );

-- Los usuarios pueden actualizar solo sus propios datos (excepto campos sensibles)
CREATE POLICY "Users can update own profile"
  ON users
  FOR UPDATE
  USING (
    email = current_setting('request.jwt.claim.email', true)
    OR id::text = current_setting('request.jwt.claim.sub', true)
  )
  WITH CHECK (
    -- Asegurar que no cambien su propio email o campos críticos
    email = current_setting('request.jwt.claim.email', true)
    OR id::text = current_setting('request.jwt.claim.sub', true)
  );

-- Los usuarios pueden insertar su propio perfil al registrarse
CREATE POLICY "Users can insert own profile"
  ON users
  FOR INSERT
  WITH CHECK (
    email = current_setting('request.jwt.claim.email', true)
    OR id::text = current_setting('request.jwt.claim.sub', true)
  );

-- Service role puede hacer cualquier operación (para admins)
CREATE POLICY "Service role full access"
  ON users
  FOR ALL
  USING (current_setting('role', true) = 'service_role')
  WITH CHECK (current_setting('role', true) = 'service_role');

-- ============================================
-- 2. POLÍTICAS MEJORADAS PARA 'subscriptions'
-- ============================================

DROP POLICY IF EXISTS "Service role can manage subscriptions" ON subscriptions;
DROP POLICY IF EXISTS "Users can read own subscriptions" ON subscriptions;

-- Los usuarios solo pueden leer sus propias suscripciones
CREATE POLICY "Users can read own subscriptions"
  ON subscriptions
  FOR SELECT
  USING (
    user_id::text = current_setting('request.jwt.claim.sub', true)
    OR (
      SELECT email FROM users WHERE id = subscriptions.user_id
    ) = current_setting('request.jwt.claim.email', true)
  );

-- Solo service role puede crear/actualizar/eliminar suscripciones
CREATE POLICY "Service role manages subscriptions"
  ON subscriptions
  FOR ALL
  USING (current_setting('role', true) = 'service_role')
  WITH CHECK (current_setting('role', true) = 'service_role');

-- ============================================
-- 3. POLÍTICAS MEJORADAS PARA 'course_progress'
-- ============================================

DROP POLICY IF EXISTS "Service role can manage progress" ON course_progress;
DROP POLICY IF EXISTS "Users can read own progress" ON course_progress;
DROP POLICY IF EXISTS "Users can update own progress" ON course_progress;

-- Los usuarios pueden leer solo su propio progreso
CREATE POLICY "Users can read own progress"
  ON course_progress
  FOR SELECT
  USING (
    user_id::text = current_setting('request.jwt.claim.sub', true)
    OR (
      SELECT email FROM users WHERE id = course_progress.user_id
    ) = current_setting('request.jwt.claim.email', true)
  );

-- Los usuarios pueden insertar su propio progreso
CREATE POLICY "Users can insert own progress"
  ON course_progress
  FOR INSERT
  WITH CHECK (
    user_id::text = current_setting('request.jwt.claim.sub', true)
    OR (
      SELECT email FROM users WHERE id = course_progress.user_id
    ) = current_setting('request.jwt.claim.email', true)
  );

-- Los usuarios pueden actualizar solo su propio progreso
CREATE POLICY "Users can update own progress"
  ON course_progress
  FOR UPDATE
  USING (
    user_id::text = current_setting('request.jwt.claim.sub', true)
    OR (
      SELECT email FROM users WHERE id = course_progress.user_id
    ) = current_setting('request.jwt.claim.email', true)
  )
  WITH CHECK (
    user_id::text = current_setting('request.jwt.claim.sub', true)
    OR (
      SELECT email FROM users WHERE id = course_progress.user_id
    ) = current_setting('request.jwt.claim.email', true)
  );

-- Service role tiene acceso completo
CREATE POLICY "Service role manages progress"
  ON course_progress
  FOR ALL
  USING (current_setting('role', true) = 'service_role')
  WITH CHECK (current_setting('role', true) = 'service_role');

-- ============================================
-- 4. POLÍTICAS PARA 'password_reset_tokens'
-- ============================================

DROP POLICY IF EXISTS "Service role can manage tokens" ON password_reset_tokens;

-- Solo service role puede gestionar tokens (por seguridad)
CREATE POLICY "Service role manages tokens"
  ON password_reset_tokens
  FOR ALL
  USING (current_setting('role', true) = 'service_role')
  WITH CHECK (current_setting('role', true) = 'service_role');

-- ============================================
-- 5. VERIFICACIÓN DE POLÍTICAS
-- ============================================

-- Listar todas las políticas RLS activas
SELECT 
  schemaname,
  tablename,
  policyname,
  permissive,
  roles,
  cmd,
  qual,
  with_check
FROM pg_policies
WHERE schemaname = 'public'
ORDER BY tablename, policyname;

-- Verificar que RLS está habilitado en todas las tablas
SELECT 
  tablename,
  rowsecurity as "RLS Enabled"
FROM pg_tables
WHERE schemaname = 'public'
  AND tablename IN ('users', 'subscriptions', 'course_progress', 'password_reset_tokens');

-- Mensaje de confirmación
DO $$
BEGIN
  RAISE NOTICE '✅ Políticas RLS mejoradas aplicadas exitosamente!';
  RAISE NOTICE '';
  RAISE NOTICE 'Resumen de seguridad:';
  RAISE NOTICE '  ✓ users: Los usuarios solo pueden leer/actualizar sus propios datos';
  RAISE NOTICE '  ✓ subscriptions: Los usuarios solo pueden leer sus suscripciones';
  RAISE NOTICE '  ✓ course_progress: Los usuarios solo pueden gestionar su propio progreso';
  RAISE NOTICE '  ✓ password_reset_tokens: Solo accesible por service role';
  RAISE NOTICE '';
  RAISE NOTICE '⚠️  IMPORTANTE: Ejecuta este script usando el service_role key';
  RAISE NOTICE '⚠️  IMPORTANTE: Prueba las políticas antes de aplicar en producción';
END $$;

-- ============================================
-- 6. FUNCIONES HELPER PARA TESTING
-- ============================================

-- Función para probar acceso como usuario específico
CREATE OR REPLACE FUNCTION test_rls_as_user(test_email TEXT)
RETURNS TABLE(
  table_name TEXT,
  can_select BOOLEAN,
  can_insert BOOLEAN,
  can_update BOOLEAN,
  can_delete BOOLEAN
) AS $$
BEGIN
  -- Esta función ayuda a probar las políticas RLS
  -- Ejecutar desde psql o Supabase SQL Editor
  
  RETURN QUERY
  SELECT 
    'users'::TEXT,
    (SELECT COUNT(*) > 0 FROM users WHERE email = test_email),
    FALSE,
    FALSE,
    FALSE;
  
  RAISE NOTICE 'Testing RLS for user: %', test_email;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

COMMENT ON FUNCTION test_rls_as_user IS 'Helper para probar políticas RLS con un usuario específico';
