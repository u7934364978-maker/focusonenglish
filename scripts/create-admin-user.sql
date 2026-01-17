-- ============================================
-- CREAR USUARIO ADMINISTRADOR
-- ============================================

-- Insertar usuario admin en la tabla users
-- Password: Admin2026! (hasheado con bcrypt)
INSERT INTO users (
  id,
  email,
  name,
  password_hash,
  email_verified,
  created_at,
  updated_at
) VALUES (
  gen_random_uuid(),
  'admin@focus-on-english.com',
  'Administrador',
  '$2a$12$LQv3c1yqBWVHxkd0LHAkCOYz6TtxMQJqhN8/LewY5eDPBJJqvwPLy', -- Password: Admin2026!
  NOW(),
  NOW(),
  NOW()
) ON CONFLICT (email) DO UPDATE SET
  password_hash = '$2a$12$LQv3c1yqBWVHxkd0LHAkCOYz6TtxMQJqhN8/LewY5eDPBJJqvwPLy',
  updated_at = NOW();

-- Crear perfil de usuario admin
INSERT INTO user_profiles (
  user_id,
  email,
  name,
  role,
  subscription_status,
  subscription_plan,
  created_at
) 
SELECT 
  id,
  'admin@focus-on-english.com',
  'Administrador',
  'admin',
  'active',
  'premium',
  NOW()
FROM users 
WHERE email = 'admin@focus-on-english.com'
ON CONFLICT (user_id) DO UPDATE SET
  role = 'admin',
  subscription_status = 'active',
  subscription_plan = 'premium';

-- Verificar usuario creado
SELECT 
  u.id,
  u.email,
  u.name,
  u.email_verified,
  up.role,
  up.subscription_status
FROM users u
LEFT JOIN user_profiles up ON u.id = up.user_id
WHERE u.email = 'admin@focus-on-english.com';
