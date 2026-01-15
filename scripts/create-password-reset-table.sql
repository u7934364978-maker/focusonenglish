-- ============================================
-- TABLA: PASSWORD RESET TOKENS
-- Gestión de tokens de recuperación de contraseña
-- ============================================

-- Crear tabla de tokens de recuperación
CREATE TABLE IF NOT EXISTS password_reset_tokens (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  token TEXT NOT NULL UNIQUE,
  expires_at TIMESTAMP NOT NULL,
  used BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMP DEFAULT NOW(),
  
  -- Índices para optimizar búsquedas
  CONSTRAINT unique_token UNIQUE(token)
);

-- Índices para performance
CREATE INDEX idx_password_reset_tokens_user_id ON password_reset_tokens(user_id);
CREATE INDEX idx_password_reset_tokens_token ON password_reset_tokens(token);
CREATE INDEX idx_password_reset_tokens_expires_at ON password_reset_tokens(expires_at);

-- Política de seguridad Row Level Security (RLS)
ALTER TABLE password_reset_tokens ENABLE ROW LEVEL SECURITY;

-- Solo el sistema puede leer/escribir tokens (no usuarios directamente)
CREATE POLICY "Tokens solo accesibles por sistema"
  ON password_reset_tokens
  FOR ALL
  USING (false);

-- Comentarios descriptivos
COMMENT ON TABLE password_reset_tokens IS 'Tokens de recuperación de contraseña con expiración de 1 hora';
COMMENT ON COLUMN password_reset_tokens.token IS 'Token único generado con crypto.randomBytes(32)';
COMMENT ON COLUMN password_reset_tokens.expires_at IS 'Fecha de expiración (1 hora desde creación)';
COMMENT ON COLUMN password_reset_tokens.used IS 'Indica si el token ya fue usado (cada token solo puede usarse una vez)';

-- ============================================
-- FUNCIÓN: LIMPIAR TOKENS EXPIRADOS
-- Elimina automáticamente tokens antiguos y expirados
-- ============================================

CREATE OR REPLACE FUNCTION cleanup_expired_tokens()
RETURNS void AS $$
BEGIN
  DELETE FROM password_reset_tokens
  WHERE expires_at < NOW() OR used = TRUE;
  
  RAISE NOTICE 'Tokens expirados eliminados';
END;
$$ LANGUAGE plpgsql;

-- Crear un cron job (requiere extensión pg_cron)
-- Ejecutar limpieza diaria a las 3:00 AM
-- SELECT cron.schedule('cleanup-expired-tokens', '0 3 * * *', 'SELECT cleanup_expired_tokens()');

-- ============================================
-- EJEMPLOS DE USO
-- ============================================

-- Ver todos los tokens activos
-- SELECT 
--   pt.id,
--   pt.token,
--   pt.expires_at,
--   pt.used,
--   pt.created_at,
--   u.email,
--   u.name
-- FROM password_reset_tokens pt
-- JOIN users u ON u.id = pt.user_id
-- WHERE pt.used = FALSE AND pt.expires_at > NOW()
-- ORDER BY pt.created_at DESC;

-- Limpiar manualmente tokens expirados
-- SELECT cleanup_expired_tokens();

-- ============================================
-- VERIFICACIÓN
-- ============================================

-- Verificar que la tabla se creó correctamente
SELECT 
  table_name, 
  column_name, 
  data_type,
  is_nullable
FROM information_schema.columns
WHERE table_name = 'password_reset_tokens'
ORDER BY ordinal_position;
