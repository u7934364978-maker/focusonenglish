// ============================================
// TEST DE RESEND - ENVÍO DE EMAIL DE PRUEBA
// ============================================

require('dotenv').config();
const { Resend } = require('resend');

async function testResend() {
  console.log('🧪 Probando configuración de Resend...\n');

  // Verificar que existe la API key
  if (!process.env.RESEND_API_KEY) {
    console.error('❌ Error: RESEND_API_KEY no está configurado en .env');
    process.exit(1);
  }

  console.log('✅ API Key encontrada:', process.env.RESEND_API_KEY.substring(0, 10) + '...');

  const resend = new Resend(process.env.RESEND_API_KEY);

  try {
    console.log('\n📧 Enviando email de prueba...');

    const { data, error } = await resend.emails.send({
      from: 'Focus English <onboarding@resend.dev>',
      to: ['pcsnh9gwgv@privaterelay.appleid.com'], // Tu email real de Resend
      subject: '✅ Test de Recuperación de Contraseña - Focus English',
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <style>
              body {
                font-family: Arial, sans-serif;
                line-height: 1.6;
                color: #333;
                max-width: 600px;
                margin: 0 auto;
                padding: 20px;
              }
              .header {
                background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                color: white;
                padding: 30px;
                text-align: center;
                border-radius: 10px 10px 0 0;
              }
              .content {
                background: #f9fafb;
                padding: 30px;
                border: 1px solid #e5e7eb;
              }
              .success {
                background: #d1fae5;
                border-left: 4px solid #10b981;
                padding: 15px;
                margin: 20px 0;
                border-radius: 4px;
              }
              .button {
                display: inline-block;
                background: #2563eb;
                color: white;
                padding: 12px 30px;
                text-decoration: none;
                border-radius: 6px;
                font-weight: 600;
                margin: 20px 0;
              }
            </style>
          </head>
          <body>
            <div class="header">
              <h1 style="margin: 0;">🎉 Focus English</h1>
              <p style="margin: 10px 0 0 0;">Sistema de recuperación de contraseña</p>
            </div>
            
            <div class="content">
              <h2 style="color: #1f2937;">¡Sistema configurado correctamente!</h2>
              
              <div class="success">
                <strong>✅ Éxito:</strong> Tu sistema de envío de emails está funcionando perfectamente.
              </div>
              
              <p>Este es un email de prueba del sistema de recuperación de contraseña de Focus English.</p>
              
              <h3>Características implementadas:</h3>
              <ul>
                <li>✅ Generación de tokens seguros (256 bits)</li>
                <li>✅ Envío de emails con Resend</li>
                <li>✅ Expiración automática (1 hora)</li>
                <li>✅ Uso único de tokens</li>
                <li>✅ Diseño profesional HTML/CSS</li>
              </ul>
              
              <p style="text-align: center;">
                <a href="http://localhost:3000/cuenta/recuperar" class="button">
                  Probar Recuperación de Contraseña
                </a>
              </p>
              
              <p style="color: #6b7280; font-size: 14px; margin-top: 30px;">
                <strong>Próximo paso:</strong> Crear la tabla de tokens en Supabase y probar el flujo completo.
              </p>
            </div>
          </body>
        </html>
      `,
    });

    if (error) {
      console.error('\n❌ Error enviando email:', error);
      process.exit(1);
    }

    console.log('\n✅ Email enviado exitosamente!');
    console.log('📧 Email ID:', data.id);
    console.log('\n🎉 Resend está configurado correctamente!');
    console.log('\n📝 Próximos pasos:');
    console.log('   1. Revisa tu email (puede tardar 1-2 minutos)');
    console.log('   2. Verifica que llegó correctamente');
    console.log('   3. Crear tabla en Supabase');
    console.log('   4. Probar flujo completo en http://localhost:3000/cuenta/recuperar');
  } catch (err) {
    console.error('\n❌ Error:', err.message);
    process.exit(1);
  }
}

testResend();
