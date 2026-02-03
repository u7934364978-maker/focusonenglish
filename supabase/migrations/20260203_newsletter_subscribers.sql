-- Create table for newsletter subscribers
CREATE TABLE IF NOT EXISTS newsletter_subscribers (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  email VARCHAR(255) UNIQUE NOT NULL,
  subscribed_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  source VARCHAR(50) DEFAULT 'home_banner',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create index for fast searches by email
CREATE INDEX IF NOT EXISTS idx_newsletter_email ON newsletter_subscribers(email);

-- Create index for searches by date
CREATE INDEX IF NOT EXISTS idx_newsletter_subscribed_at ON newsletter_subscribers(subscribed_at);

-- Enable Row Level Security
ALTER TABLE newsletter_subscribers ENABLE ROW LEVEL SECURITY;

-- Policy to allow public inserts (for the form)
CREATE POLICY "Allow public inserts" ON newsletter_subscribers
  FOR INSERT
  TO anon
  WITH CHECK (true);

-- Policy to allow authenticated users to view all (for admin dashboard)
CREATE POLICY "Allow authenticated users to view all" ON newsletter_subscribers
  FOR SELECT
  TO authenticated
  USING (true);

-- Policy to allow service role full access
CREATE POLICY "Service role has full access" ON newsletter_subscribers
  TO service_role
  USING (true)
  WITH CHECK (true);

-- Descriptive comments
COMMENT ON TABLE newsletter_subscribers IS 'Almacena emails de usuarios interesados en recibir notificaciones sobre el lanzamiento de cursos';
COMMENT ON COLUMN newsletter_subscribers.email IS 'Email del suscriptor (único)';
COMMENT ON COLUMN newsletter_subscribers.subscribed_at IS 'Fecha y hora de suscripción';
COMMENT ON COLUMN newsletter_subscribers.source IS 'Origen de la suscripción (ej: home_banner, blog_post, etc.)';
