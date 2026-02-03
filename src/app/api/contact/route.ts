import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';
import { Resend } from 'resend';

export const runtime = 'edge';

// Initialize clients
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY || '';
const resendApiKey = process.env.RESEND_API_KEY || '';
const adminEmail = process.env.ADMIN_EMAIL || 'info@focus-on-english.com';

const resend = resendApiKey ? new Resend(resendApiKey) : null;

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { firstName, lastName, email, phone, subject, message } = body;

    // Basic validation
    if (!firstName || !lastName || !email || !subject || !message) {
      return NextResponse.json(
        { error: 'Faltan campos obligatorios' },
        { status: 400 }
      );
    }

    if (!email.includes('@')) {
      return NextResponse.json(
        { error: 'Email inválido' },
        { status: 400 }
      );
    }

    // Initialize Supabase
    if (!supabaseUrl || !supabaseServiceKey) {
      console.error('Supabase not configured');
      return NextResponse.json(
        { error: 'Configuración de base de datos incompleta' },
        { status: 500 }
      );
    }

    const supabase = createClient(supabaseUrl, supabaseServiceKey);

    // Insert into contact_inquiries
    const { data, error } = await supabase
      .from('contact_inquiries')
      .insert([
        { 
          first_name: firstName,
          last_name: lastName,
          email: email.toLowerCase().trim(),
          phone: phone || null,
          subject,
          message,
          created_at: new Date().toISOString()
        }
      ])
      .select();

    if (error) {
      console.error('Supabase error:', error);
      return NextResponse.json(
        { error: `Error al guardar la consulta: ${error.message}` },
        { status: 500 }
      );
    }

    // Send emails if Resend is configured
    if (resend) {
      try {
        // Send auto-reply to user
        await resend.emails.send({
          from: 'Focus English <no-reply@focus-on-english.com>',
          to: [email],
          subject: 'Hemos recibido tu consulta - Focus English',
          html: `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e5e7eb; border-radius: 12px;">
              <h2 style="color: #FF6B6B;">¡Hola ${firstName}!</h2>
              <p>Gracias por ponerte en contacto con nosotros.</p>
              <p>Hemos recibido correctamente tu consulta sobre "<strong>${subject}</strong>". Nuestro equipo la revisará y te responderá en un plazo máximo de <strong>72 horas</strong>.</p>
              <p>Si tu consulta es urgente, también puedes contactarnos vía WhatsApp a través de nuestra web.</p>
              <p>Atentamente,<br />El equipo de Focus English</p>
              <hr style="border: 0; border-top: 1px solid #eee; margin: 20px 0;" />
              <p style="font-size: 12px; color: #666; text-align: center;">Focus English - Cursos de Inglés Especializados</p>
            </div>
          `
        });

        // Send notification to admin
        await resend.emails.send({
          from: 'Focus English System <system@focus-on-english.com>',
          to: [adminEmail],
          subject: `📩 Nueva consulta: ${subject}`,
          html: `
            <div style="font-family: Arial, sans-serif; padding: 20px;">
              <h2>Nueva consulta recibida</h2>
              <p><strong>Nombre:</strong> ${firstName} ${lastName}</p>
              <p><strong>Email:</strong> ${email}</p>
              <p><strong>Teléfono:</strong> ${phone || 'No proporcionado'}</p>
              <p><strong>Asunto:</strong> ${subject}</p>
              <p><strong>Mensaje:</strong></p>
              <div style="background: #f4f4f4; padding: 15px; border-radius: 8px;">
                ${message.replace(/\n/g, '<br />')}
              </div>
              <p><strong>Fecha:</strong> ${new Date().toLocaleString('es-ES')}</p>
            </div>
          `
        });
      } catch (emailError) {
        console.error('Error sending emails:', emailError);
      }
    }

    return NextResponse.json({ 
      success: true,
      message: 'Consulta recibida correctamente. Te responderemos en breve.',
      data 
    });

  } catch (error) {
    console.error('Contact API error:', error);
    return NextResponse.json(
      { error: 'Error al procesar la solicitud' },
      { status: 500 }
    );
  }
}
