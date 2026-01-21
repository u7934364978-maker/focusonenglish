-- ============================================
-- ACTUALIZAR CONTRASEÑA DE ADMINISTRADOR
-- ============================================

-- Actualizar el hash de contraseña con uno compatible
UPDATE users 
SET 
  password_hash = '$2b$12$hALb4at/gWl.PhuEtdosneeVESvz.D.JxtvltViBelZF9qW/S8rzq',
  updated_at = NOW()
WHERE email = 'admin@focus-on-english.com';

-- Verificar actualización
SELECT 
  id,
  email,
  name,
  substring(password_hash, 1, 20) as password_hash_preview,
  updated_at
FROM users
WHERE email = 'admin@focus-on-english.com';

-- ============================================
-- CREDENCIALES:
-- Email: admin@focus-on-english.com
-- Password: Admin2026!
-- ============================================
