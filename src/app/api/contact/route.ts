import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';
import { Resend } from 'resend';

export const runtime = 'nodejs';

// Initialize clients
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY || '';
const resendApiKey = process.env.RESEND_API_KEY || '';
const adminEmail = process.env.ADMIN_EMAIL || 'info@focus-on-english.com';

const resend = resendApiKey ? new Resend(resendApiKey) : null;
const hubspotApiKey = process.env.HUBSPOT_API_KEY || process.env.HUBSPOT_ACCESS_TOKEN || '';

/**
 * Helper to make requests to HubSpot API
 */
async function hubspotRequest(endpoint: string, method: string = 'GET', body?: Record<string, unknown>) {
  if (!hubspotApiKey) {
    console.error('HubSpot API key not configured');
    return null;
  }

  try {
    const response = await fetch(`https://api.hubapi.com${endpoint}`, {
      method,
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${hubspotApiKey}`,
      },
      body: body ? JSON.stringify(body) : undefined,
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.error(`HubSpot API error (${endpoint}):`, errorData);
      return null;
    }

    // Some endpoints return 204 No Content
    if (response.status === 204) {
      return { success: true };
    }

    return await response.json();
  } catch (error) {
    console.error(`HubSpot request exception (${endpoint}):`, error);
    return null;
  }
}

/**
 * Sync contact with HubSpot
 */
async function syncHubSpotContact(email: string, firstName: string, lastName: string, phone?: string) {
  // 1. Search for existing contact
  const searchResult = await hubspotRequest('/crm/v3/objects/contacts/search', 'POST', {
    filterGroups: [
      {
        filters: [
          {
            propertyName: 'email',
            operator: 'EQ',
            value: email,
          },
        ],
      },
    ],
  });

  const properties = {
    email,
    firstname: firstName,
    lastname: lastName,
    phone: phone || '',
  };

  if (searchResult?.results?.length > 0) {
    // Update existing
    const contactId = searchResult.results[0].id;
    await hubspotRequest(`/crm/v3/objects/contacts/${contactId}`, 'PATCH', { properties });
    return contactId;
  } else {
    // Create new
    const createResult = await hubspotRequest('/crm/v3/objects/contacts', 'POST', {
      properties: {
        ...properties,
        hs_lead_status: 'NEW',
        lifecyclestage: 'lead',
      },
    });
    return createResult?.id;
  }
}

/**
 * Create a support ticket in HubSpot
 */
async function createHubSpotTicket(subject: string, content: string) {
  const ticketResult = await hubspotRequest('/crm/v3/objects/tickets', 'POST', {
    properties: {
      subject,
      content,
      hs_pipeline: 'default',
      hs_pipeline_stage: '1', // "New" stage in many default setups
    },
  });
  return ticketResult?.id;
}

/**
 * Associate a ticket with a contact
 */
async function associateTicketWithContact(ticketId: string, contactId: string) {
  return await hubspotRequest(
    `/crm/v3/objects/tickets/${ticketId}/associations/contacts/${contactId}/228`,
    'PUT'
  );
}

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

    // HubSpot Integration (Async, don't block the response)
    // Using a separate try-catch to ensure form submission succeeds even if HubSpot fails
    try {
      console.warn(`Starting HubSpot sync for: ${email}`);
      const contactId = await syncHubSpotContact(email, firstName, lastName, phone);
      
      if (contactId) {
        const ticketId = await createHubSpotTicket(subject, message);
        if (ticketId) {
          await associateTicketWithContact(ticketId, contactId);
          console.warn(`Successfully created HubSpot ticket ${ticketId} for contact ${contactId}`);
        }
      }
    } catch (hubspotError) {
      console.error('HubSpot integration error:', hubspotError);
      // We don't return error here because we want the main flow to continue
    }

    // Send emails if Resend is configured
    if (resend) {
      try {
        console.warn(`Intentando enviar consulta de contacto para: ${email}`);
        // Send auto-reply to user
        const userEmail = await resend.emails.send({
          from: 'Focus English <hola@updates.focus-on-english.com>',
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

        if (userEmail.error) {
          console.error('Error de Resend al enviar auto-reply:', userEmail.error);
        }

        // Send notification to admin
        const adminNotify = await resend.emails.send({
          from: 'Focus English System <sistema@updates.focus-on-english.com>',
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

        if (adminNotify.error) {
          console.error('Error de Resend al notificar al admin:', adminNotify.error);
        }
      } catch (emailError) {
        console.error('Excepción al enviar correos de contacto:', emailError);
      }
    } else {
      console.warn('RESEND_API_KEY no configurada. Saltando envío de correos de contacto.');
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
