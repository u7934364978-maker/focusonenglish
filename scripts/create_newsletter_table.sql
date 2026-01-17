-- Script SQL para crear la tabla de suscriptores del newsletter
-- Ejecutar este script en el SQL Editor de Supabase

-- Crear tabla para suscriptores del newsletter
CREATE TABLE IF NOT EXISTS newsletter_subscribers (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  email VARCHAR(255) UNIQUE NOT NULL,
  subscribed_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  source VARCHAR(50) DEFAULT 'home_banner',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Crear índice para búsquedas rápidas por email
CREATE INDEX IF NOT EXISTS idx_newsletter_email ON newsletter_subscribers(email);

-- Crear índice para búsquedas por fecha
CREATE INDEX IF NOT EXISTS idx_newsletter_subscribed_at ON newsletter_subscribers(subscribed_at);

-- Habilitar Row Level Security
ALTER TABLE newsletter_subscribers ENABLE ROW LEVEL SECURITY;

-- Política para permitir inserciones públicas (para el formulario)
CREATE POLICY "Allow public inserts" ON newsletter_subscribers
  FOR INSERT
  TO anon
  WITH CHECK (true);

-- Política para permitir que usuarios autenticados vean todos los registros
CREATE POLICY "Allow authenticated users to view all" ON newsletter_subscribers
  FOR SELECT
  TO authenticated
  USING (true);

-- Política para permitir que el servicio role haga todo
CREATE POLICY "Service role has full access" ON newsletter_subscribers
  TO service_role
  USING (true)
  WITH CHECK (true);

-- Comentarios descriptivos
COMMENT ON TABLE newsletter_subscribers IS 'Almacena emails de usuarios interesados en recibir notificaciones sobre el lanzamiento de cursos';
COMMENT ON COLUMN newsletter_subscribers.email IS 'Email del suscriptor (único)';
COMMENT ON COLUMN newsletter_subscribers.subscribed_at IS 'Fecha y hora de suscripción';
COMMENT ON COLUMN newsletter_subscribers.source IS 'Origen de la suscripción (ej: home_banner, blog_post, etc.)';
