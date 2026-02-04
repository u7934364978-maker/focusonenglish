const { createClient } = require('@supabase/supabase-js');
const { Resend } = require('resend');
const dotenv = require('dotenv');
const path = require('path');

// Load environment variables from .env.local
dotenv.config({ path: path.resolve(process.cwd(), '.env.local') });

async function verifyMarketingFeatures() {
  console.log('🚀 Iniciando verificación final de características de marketing...\n');

  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
  const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY || '';
  const resendApiKey = process.env.RESEND_API_KEY || '';
  const adminEmail = process.env.ADMIN_EMAIL || 'info@focus-on-english.com';

  if (!supabaseUrl || !supabaseServiceKey || !resendApiKey) {
    console.error('❌ Error: Faltan variables de entorno necesarias.');
    console.log({
      supabaseUrl: !!supabaseUrl,
      supabaseServiceKey: !!supabaseServiceKey,
      resendApiKey: !!resendApiKey
    });
    process.exit(1);
  }

  const supabase = createClient(supabaseUrl, supabaseServiceKey);
  const resend = new Resend(resendApiKey);

  const testEmail = `test-${Date.now()}@example.com`;

  // 1. Probar Newsletter
  console.log('--- 1. Probando Newsletter ---');
  try {
    // Supabase
    const { data: newsData, error: newsError } = await supabase
      .from('newsletter_subscribers')
      .insert([{ 
        email: testEmail, 
        source: 'verification_test',
        subscribed_at: new Date().toISOString()
      }])
      .select();

    if (newsError) throw newsError;
    console.log('✅ Registro en Supabase (newsletter) exitoso');

    // Resend
    console.log('📧 Intentando enviar email de newsletter via Resend (a lramlo2026@gmail.com)...');
    const { data: resendData, error: resendError } = await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: ['lramlo2026@gmail.com'],
      subject: '🧪 Test Verificación: Newsletter',
      html: `<p>Este es un test de verificación para el sistema de newsletter.</p><p>Email registrado: ${testEmail}</p>`
    });

    if (resendError) {
      console.error('❌ Error de Resend (newsletter):', resendError);
    } else {
      console.log('✅ Email de newsletter enviado. ID:', resendData?.id);
    }
  } catch (err) {
    console.error('❌ Fallo en test de newsletter:', err.message);
  }

  // 2. Probar Formulario de Contacto
  console.log('\n--- 2. Probando Formulario de Contacto ---');
  try {
    // Supabase
    const { data: contactData, error: contactError } = await supabase
      .from('contact_inquiries')
      .insert([{
        first_name: 'Test',
        last_name: 'Zencoder',
        email: testEmail,
        subject: 'Verificación del sistema',
        message: 'Este es un mensaje de prueba automático para verificar el funcionamiento del formulario de contacto.',
        created_at: new Date().toISOString()
      }])
      .select();

    if (contactError) throw contactError;
    console.log('✅ Registro en Supabase (contacto) exitoso');

    // Resend
    console.log('📧 Intentando enviar email de contacto via Resend...');
    const { data: resendContactData, error: resendContactError } = await resend.emails.send({
      from: 'Focus English <no-reply@focus-on-english.com>',
      to: [adminEmail],
      subject: '🧪 Test Verificación: Formulario de Contacto',
      html: `<p>Nueva consulta de test.</p><p>Email: ${testEmail}</p><p>Mensaje: Test de verificación final.</p>`
    });

    if (resendContactError) {
      console.error('❌ Error de Resend (contacto):', resendContactError);
    } else {
      console.log('✅ Email de contacto enviado. ID:', resendContactData?.id);
    }
  } catch (err) {
    console.error('❌ Fallo en test de contacto:', err.message);
  }

  console.log('\n--- Resumen ---');
  console.log('Si los IDs de Resend aparecieron arriba, el sistema está enviando correos correctamente.');
  console.log(`Por favor, verifica la bandeja de entrada de ${adminEmail}.`);
}

verifyMarketingFeatures();
