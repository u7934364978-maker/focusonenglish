// ============================================
// SERVICIO DE EMAIL
// Gestión de envío de emails con Resend
// ============================================

import { Resend } from 'resend';

// Solo inicializar Resend si la API key está disponible
const resend = process.env.RESEND_API_KEY 
  ? new Resend(process.env.RESEND_API_KEY)
  : null;

/**
 * Enviar email de recuperación de contraseña
 */
export async function sendPasswordResetEmail(
  email: string,
  resetToken: string,
  userName: string
): Promise<boolean> {
  // Si Resend no está configurado, simular éxito en desarrollo
  if (!resend) {
    console.warn('Resend not configured, skipping email send');
    return process.env.NODE_ENV === 'development';
  }

  try {
    const resetUrl = `${process.env.NEXTAUTH_URL}/reset-password?token=${resetToken}`;

    const { data, error } = await resend.emails.send({
      from: 'Focus English <noreply@focus-on-english.com>',
      to: [email],
      subject: 'Recupera tu contraseña - Focus English',
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <meta charset="utf-8">
            <style>
              body {
                font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
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
                border-top: none;
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
              .footer {
                background: #f3f4f6;
                padding: 20px;
                text-align: center;
                font-size: 12px;
                color: #6b7280;
                border-radius: 0 0 10px 10px;
                border: 1px solid #e5e7eb;
                border-top: none;
              }
              .warning {
                background: #fef3c7;
                border-left: 4px solid #f59e0b;
                padding: 15px;
                margin: 20px 0;
                border-radius: 4px;
              }
            </style>
          </head>
          <body>
            <div class="header">
              <h1 style="margin: 0; font-size: 28px;">🔐 Focus English</h1>
              <p style="margin: 10px 0 0 0; opacity: 0.9;">Recuperación de contraseña</p>
            </div>
            
            <div class="content">
              <h2 style="color: #1f2937; margin-top: 0;">Hola ${userName},</h2>
              
              <p style="font-size: 16px; color: #4b5563;">
                Hemos recibido una solicitud para restablecer tu contraseña de Focus English.
              </p>
              
              <p style="font-size: 16px; color: #4b5563;">
                Haz clic en el siguiente botón para crear una nueva contraseña:
              </p>
              
              <div style="text-align: center; margin: 30px 0;">
                <a href="${resetUrl}" class="button">
                  Restablecer Contraseña
                </a>
              </div>
              
              <p style="font-size: 14px; color: #6b7280;">
                O copia y pega este enlace en tu navegador:
              </p>
              <p style="font-size: 12px; color: #2563eb; word-break: break-all; background: white; padding: 10px; border-radius: 4px;">
                ${resetUrl}
              </p>
              
              <div class="warning">
                <strong>⚠️ Importante:</strong>
                <ul style="margin: 10px 0; padding-left: 20px;">
                  <li>Este enlace expirará en <strong>1 hora</strong></li>
                  <li>Solo puedes usarlo una vez</li>
                  <li>Si no solicitaste este cambio, ignora este email</li>
                </ul>
              </div>
              
              <p style="font-size: 14px; color: #6b7280; margin-top: 30px;">
                ¿Tienes problemas? Contáctanos en <a href="mailto:soporte@focus-on-english.com" style="color: #2563eb;">soporte@focus-on-english.com</a>
              </p>
            </div>
            
            <div class="footer">
              <p style="margin: 0 0 10px 0;">
                © ${new Date().getFullYear()} Focus English. Todos los derechos reservados.
              </p>
              <p style="margin: 0;">
                Este email fue enviado a ${email}
              </p>
            </div>
          </body>
        </html>
      `,
    });

    if (error) {
      console.error('❌ Error enviando email:', error);
      return false;
    }

    console.log('✅ Email de recuperación enviado:', data?.id);
    return true;
  } catch (error) {
    console.error('❌ Error en sendPasswordResetEmail:', error);
    return false;
  }
}

/**
 * Enviar email de confirmación de cambio de contraseña
 */
export async function sendPasswordChangedEmail(
  email: string,
  userName: string
): Promise<boolean> {
  // Si Resend no está configurado, simular éxito en desarrollo
  if (!resend) {
    console.warn('Resend not configured, skipping email send');
    return process.env.NODE_ENV === 'development';
  }

  try {
    const { data, error } = await resend.emails.send({
      from: 'Focus English <noreply@focus-on-english.com>',
      to: [email],
      subject: '✅ Tu contraseña ha sido actualizada - Focus English',
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <meta charset="utf-8">
            <style>
              body {
                font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
                line-height: 1.6;
                color: #333;
                max-width: 600px;
                margin: 0 auto;
                padding: 20px;
              }
              .header {
                background: linear-gradient(135deg, #10b981 0%, #059669 100%);
                color: white;
                padding: 30px;
                text-align: center;
                border-radius: 10px 10px 0 0;
              }
              .content {
                background: #f9fafb;
                padding: 30px;
                border: 1px solid #e5e7eb;
                border-top: none;
              }
              .alert {
                background: #fee2e2;
                border-left: 4px solid #ef4444;
                padding: 15px;
                margin: 20px 0;
                border-radius: 4px;
              }
              .footer {
                background: #f3f4f6;
                padding: 20px;
                text-align: center;
                font-size: 12px;
                color: #6b7280;
                border-radius: 0 0 10px 10px;
                border: 1px solid #e5e7eb;
                border-top: none;
              }
            </style>
          </head>
          <body>
            <div class="header">
              <h1 style="margin: 0; font-size: 28px;">✅ Focus English</h1>
              <p style="margin: 10px 0 0 0; opacity: 0.9;">Contraseña actualizada</p>
            </div>
            
            <div class="content">
              <h2 style="color: #1f2937; margin-top: 0;">Hola ${userName},</h2>
              
              <p style="font-size: 16px; color: #4b5563;">
                Tu contraseña ha sido actualizada correctamente.
              </p>
              
              <p style="font-size: 16px; color: #4b5563;">
                Ya puedes iniciar sesión con tu nueva contraseña en:
              </p>
              
              <p style="text-align: center; margin: 20px 0;">
                <a href="${process.env.NEXTAUTH_URL}/login" style="display: inline-block; background: #10b981; color: white; padding: 12px 30px; text-decoration: none; border-radius: 6px; font-weight: 600;">
                  Iniciar Sesión
                </a>
              </p>
              
              <div class="alert">
                <strong>🔒 ¿No fuiste tú?</strong>
                <p style="margin: 10px 0 0 0;">
                  Si no realizaste este cambio, tu cuenta puede estar comprometida. 
                  Contacta inmediatamente a nuestro equipo de soporte en 
                  <a href="mailto:soporte@focus-on-english.com" style="color: #ef4444;">soporte@focus-on-english.com</a>
                </p>
              </div>
              
              <p style="font-size: 14px; color: #6b7280; margin-top: 30px;">
                <strong>Consejos de seguridad:</strong>
              </p>
              <ul style="font-size: 14px; color: #6b7280;">
                <li>No compartas tu contraseña con nadie</li>
                <li>Usa una contraseña única y fuerte</li>
                <li>Actualiza tu contraseña regularmente</li>
              </ul>
            </div>
            
            <div class="footer">
              <p style="margin: 0 0 10px 0;">
                © ${new Date().getFullYear()} Focus English. Todos los derechos reservados.
              </p>
              <p style="margin: 0;">
                Este email fue enviado a ${email}
              </p>
            </div>
          </body>
        </html>
      `,
    });

    if (error) {
      console.error('❌ Error enviando email:', error);
      return false;
    }

    console.log('✅ Email de confirmación enviado:', data?.id);
    return true;
  } catch (error) {
    console.error('❌ Error en sendPasswordChangedEmail:', error);
    return false;
  }
}

export default {
  sendPasswordResetEmail,
  sendPasswordChangedEmail,
};
