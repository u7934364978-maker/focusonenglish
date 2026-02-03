import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';
import { Resend } from 'resend';

export const runtime = 'nodejs';

// Initialize Supabase client
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY || '';
const resendApiKey = process.env.RESEND_API_KEY || '';
const adminEmail = process.env.ADMIN_EMAIL || 'info@focus-on-english.com';

const resend = resendApiKey ? new Resend(resendApiKey) : null;

export async function POST(request: NextRequest) {
  try {
    const { email } = await request.json();

    // Validate email
    if (!email || !email.includes('@')) {
      return NextResponse.json(
        { error: 'Email inválido' },
        { status: 400 }
      );
    }

    // Initialize Supabase only if credentials are available
    if (supabaseUrl && supabaseServiceKey) {
      const supabase = createClient(supabaseUrl, supabaseServiceKey);

      // Check if table exists and insert
      const { data, error } = await supabase
        .from('newsletter_subscribers')
        .insert([
          { 
            email: email.toLowerCase().trim(),
            subscribed_at: new Date().toISOString(),
            source: 'home_banner'
          }
        ])
        .select();

      if (error) {
        // Log the error with details
        console.error('Supabase error details:', {
          message: error.message,
          details: error.details,
          hint: error.hint,
          code: error.code
        });
        
        // Return error to user so we can debug
        return NextResponse.json({ 
          success: false,
          error: `Error al guardar: ${error.message}`,
          details: error.details || 'No additional details',
          hint: error.hint || 'No hint available'
        }, { status: 500 });
      }

      // Send emails if Resend is configured
      if (resend) {
        try {
          // Send thank you email to user
          await resend.emails.send({
            from: 'Focus English <no-reply@focus-on-english.com>',
            to: [email],
            subject: '¡Gracias por tu interés en Focus English! 🚀',
            html: `
              <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e5e7eb; border-radius: 12px;">
                <h2 style="color: #FF6B6B;">¡Hola!</h2>
                <p>Muchas gracias por inscribirte para recibir el aviso de lanzamiento de nuestros cursos en <strong>Focus English</strong>.</p>
                <p>Te informaremos muy pronto sobre la fecha oficial de lanzamiento y las promociones especiales para los primeros inscritos.</p>
                <p>Mientras tanto, te invitamos a explorar nuestro blog donde encontrarás recursos gratuitos y guías para mejorar tu inglés:</p>
                <p style="text-align: center; margin: 30px 0;">
                  <a href="https://www.focus-on-english.com/blog" style="background: linear-gradient(to right, #FF6B6B, #FF8E53); color: white; padding: 12px 24px; text-decoration: none; border-radius: 8px; font-weight: bold;">Explorar el Blog</a>
                </p>
                <p>¡Seguimos en contacto!</p>
                <hr style="border: 0; border-top: 1px solid #eee; margin: 20px 0;" />
                <p style="font-size: 12px; color: #666; text-align: center;">Focus English - Cursos de Inglés Especializados</p>
              </div>
            `
          });

          // Send notification email to admin
          await resend.emails.send({
            from: 'Focus English System <system@focus-on-english.com>',
            to: [adminEmail],
            subject: '🔔 Nuevo suscriptor al aviso de lanzamiento',
            html: `
              <div style="font-family: Arial, sans-serif; padding: 20px;">
                <h2>Nuevo lead de lanzamiento</h2>
                <p>Un usuario se ha suscrito al aviso de lanzamiento desde el banner de la home.</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Fecha:</strong> ${new Date().toLocaleString('es-ES')}</p>
              </div>
            `
          });
        } catch (emailError) {
          console.error('Error sending emails:', emailError);
          // We don't return error here because the user was already saved to Supabase
        }
      }

      return NextResponse.json({ 
        success: true,
        message: '¡Gracias! Te avisaremos cuando lancemos los cursos.',
        data 
      });
    } else {
      // No Supabase configured, return error
      console.error('Supabase not configured - missing env variables');
      
      return NextResponse.json({ 
        success: false,
        error: 'Configuración de base de datos incompleta',
        details: `URL: ${supabaseUrl ? 'configured' : 'missing'}, Key: ${supabaseServiceKey ? 'configured' : 'missing'}`
      }, { status: 500 });
    }

  } catch (error) {
    console.error('Newsletter API error:', error);
    return NextResponse.json(
      { error: 'Error al procesar la solicitud' },
      { status: 500 }
    );
  }
}
