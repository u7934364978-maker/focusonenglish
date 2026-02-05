import { NextRequest, NextResponse } from 'next/server';
import { sendWelcomeEmail } from '@/lib/email-service';


export const runtime = 'edge';
// Tipos para el formulario de signup
interface SignupFormData {
  firstName: string;
  lastName: string;
  email: string;
  phone?: string;
  courseInterest: string;
  currentLevel?: string;
  message?: string;
}

// Función para crear o actualizar un contacto en HubSpot
async function createHubSpotContact(data: SignupFormData) {
  const accessToken = process.env.HUBSPOT_ACCESS_TOKEN;
  
  if (!accessToken) {
    throw new Error('HubSpot Access Token no configurado');
  }

  // Mapear niveles del formulario a los valores de HubSpot
  const levelMap: { [key: string]: string } = {
    'a1': 'A1',
    'a2': 'A2',
    'b1': 'B1',
    'b2': 'B2',
    'c1': 'C1',
    'c2': 'C2'
  };

  // Mapear cursos a formato legible
  const courseMap: { [key: string]: string } = {
    'premium-monthly': 'Plan Premium Mensual',
    'premium-yearly': 'Plan Premium Anual',
    'basic-monthly': 'Plan Básico Mensual',
    'basic-yearly': 'Plan Básico Anual',
    'travel-pilot': 'Piloto: Inglés para Viajes',
    'trabajo': 'Inglés para Trabajar',
    'viajes': 'Inglés para Viajar',
    'examenes': 'Preparar Exámenes'
  };

  // Construir propiedades del contacto
  const properties: { [key: string]: any } = {
    firstname: data.firstName,
    lastname: data.lastName,
    email: data.email,
    lifecyclestage: 'lead',
    hs_lead_status: 'NEW'
  };

  // Añadir teléfono si existe
  if (data.phone) {
    properties.phone = data.phone;
  }

  // Añadir nivel solo si se seleccionó uno (no vacío)
  if (data.currentLevel && data.currentLevel !== '') {
    const mappedLevel = levelMap[data.currentLevel.toLowerCase()];
    if (mappedLevel) {
      properties.current_level = mappedLevel;
    }
  }

  // Añadir curso de interés
  if (data.courseInterest) {
    const courseName = courseMap[data.courseInterest] || data.courseInterest;
    properties.course_interest = courseName;
  }

  // Si hay un mensaje, lo añadiremos después de crear/actualizar el contacto
  const messageToSave = data.message && data.message.trim() !== '' ? data.message : null;

  // Primero intentar buscar si el contacto existe por email
  const searchUrl = `https://api.hubapi.com/crm/v3/objects/contacts/search`;
  const searchResponse = await fetch(searchUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${accessToken}`
    },
    body: JSON.stringify({
      filterGroups: [{
        filters: [{
          propertyName: 'email',
          operator: 'EQ',
          value: data.email
        }]
      }]
    })
  });

  if (!searchResponse.ok) {
    const errorData = await searchResponse.json().catch(() => ({}));
    console.error('Error al buscar contacto en HubSpot:', errorData);
    throw new Error(`Error HubSpot (Search): ${errorData.message || searchResponse.statusText}`);
  }

  let contactResult;
  const searchData = await searchResponse.json();
  
  // Si el contacto existe, actualizarlo
  if (searchData.results && searchData.results.length > 0) {
    const contactId = searchData.results[0].id;
    const updateUrl = `https://api.hubapi.com/crm/v3/objects/contacts/${contactId}`;
    
    const updateResponse = await fetch(updateUrl, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${accessToken}`
      },
      body: JSON.stringify({ properties })
    });

    if (!updateResponse.ok) {
      const errorData = await updateResponse.json();
      console.error('Error al actualizar contacto en HubSpot:', errorData);
      throw new Error(`Error al actualizar contacto en HubSpot: ${errorData.message || updateResponse.statusText}`);
    }

    contactResult = await updateResponse.json();
  } else {
    // Si no existe, crear uno nuevo
    const createUrl = 'https://api.hubapi.com/crm/v3/objects/contacts';
    const createResponse = await fetch(createUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${accessToken}`
      },
      body: JSON.stringify({ properties })
    });

    if (!createResponse.ok) {
      const errorData = await createResponse.json();
      console.error('Error al crear contacto en HubSpot:', errorData);
      throw new Error(`Error al crear contacto en HubSpot: ${errorData.message || createResponse.statusText}`);
    }

    contactResult = await createResponse.json();
  }

  // Si hay mensaje, guardarlo como nota asociada al contacto
  if (messageToSave && contactResult.id) {
    try {
      await fetch('https://api.hubapi.com/crm/v3/objects/notes', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${accessToken}`
        },
        body: JSON.stringify({
          properties: {
            hs_note_body: `Mensaje desde formulario de registro:\n\n${messageToSave}`,
            hs_timestamp: new Date().toISOString()
          },
          associations: [
            {
              to: { id: contactResult.id },
              types: [
                {
                  associationCategory: 'HUBSPOT_DEFINED',
                  associationTypeId: 202 // Note to Contact
                }
              ]
            }
          ]
        })
      });
    } catch (noteError) {
      console.error('Error al guardar nota en HubSpot (no crítico):', noteError);
      // No lanzamos error para no fallar el registro principal
    }
  }

  return contactResult;
}

// Handler POST para el formulario de signup
export async function POST(request: NextRequest) {
  try {
    const body = await request.json() as SignupFormData;

    // Validación básica
    if (!body.email || !body.firstName || !body.lastName || !body.courseInterest) {
      return NextResponse.json(
        { error: 'Faltan campos requeridos: nombre, apellido, email y curso' },
        { status: 400 }
      );
    }

    // Validar formato de email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(body.email)) {
      return NextResponse.json(
        { error: 'Email inválido' },
        { status: 400 }
      );
    }

    // Crear contacto en HubSpot
    const hubspotResponse = await createHubSpotContact(body);

    // INTENTO DE EMAIL DE PRUEBA (Para diagnosticar Resend)
    try {
      console.log('🧪 Iniciando prueba de email para:', body.email);
      await sendWelcomeEmail({
        email: body.email,
        name: body.firstName,
        planName: 'Interés en Focus English',
      });
    } catch (emailError) {
      console.error('❌ Error en prueba de email durante signup:', emailError);
    }

    // Respuesta exitosa
    return NextResponse.json({
      success: true,
      message: '¡Gracias por tu inscripción! Te contactaremos pronto.',
      contactId: hubspotResponse.id,
      action: 'created'
    }, { status: 200 });

  } catch (error) {
    console.error('Error en signup:', error);
    
    // Si el error es por contacto duplicado, dar un mensaje más amigable
    const errorMessage = error instanceof Error ? error.message : 'Error desconocido';
    
    if (errorMessage.includes('already has that value') || errorMessage.includes('duplicate')) {
      return NextResponse.json({
        success: true,
        message: '¡Gracias! Ya tienes una cuenta con nosotros. Actualizaremos tu información y te contactaremos pronto.',
        warning: 'Email ya registrado - información actualizada'
      }, { status: 200 });
    }
    
    return NextResponse.json({
      success: false,
      error: errorMessage || 'Hubo un problema al procesar tu inscripción. Por favor, inténtalo de nuevo o contáctanos directamente.'
    }, { status: 500 });
  }
}

// Permitir OPTIONS para CORS (si es necesario)
export async function OPTIONS() {
  return NextResponse.json({}, { 
    status: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type'
    }
  });
}
