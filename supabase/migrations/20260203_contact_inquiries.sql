-- Create table for contact inquiries
CREATE TABLE IF NOT EXISTS contact_inquiries (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  first_name VARCHAR(100) NOT NULL,
  last_name VARCHAR(100) NOT NULL,
  email VARCHAR(255) NOT NULL,
  phone VARCHAR(50),
  subject VARCHAR(100) NOT NULL,
  message TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  processed BOOLEAN DEFAULT FALSE
);

-- Enable Row Level Security
ALTER TABLE contact_inquiries ENABLE ROW LEVEL SECURITY;

-- Policy to allow public inserts (for the contact form)
CREATE POLICY "Allow public inserts" ON contact_inquiries
  FOR INSERT
  TO anon
  WITH CHECK (true);

-- Policy to allow authenticated users to view all (for admin dashboard)
CREATE POLICY "Allow authenticated users to view all" ON contact_inquiries
  FOR SELECT
  TO authenticated
  USING (true);

-- Policy to allow service role full access
CREATE POLICY "Service role has full access" ON contact_inquiries
  TO service_role
  USING (true)
  WITH CHECK (true);

-- Descriptive comments
COMMENT ON TABLE contact_inquiries IS 'Almacena las consultas enviadas a través del formulario de contacto';
COMMENT ON COLUMN contact_inquiries.first_name IS 'Nombre del usuario';
COMMENT ON COLUMN contact_inquiries.last_name IS 'Apellidos del usuario';
COMMENT ON COLUMN contact_inquiries.email IS 'Email de contacto';
COMMENT ON COLUMN contact_inquiries.phone IS 'Teléfono (opcional)';
COMMENT ON COLUMN contact_inquiries.subject IS 'Asunto de la consulta';
COMMENT ON COLUMN contact_inquiries.message IS 'Mensaje o consulta detallada';
