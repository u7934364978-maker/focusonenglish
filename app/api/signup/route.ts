import { NextRequest, NextResponse } from 'next/server';

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

  // Propiedades del contacto en HubSpot
  const properties = {
    firstname: data.firstName,
    lastname: data.lastName,
    email: data.email,
    phone: data.phone || '',
    // Campos personalizados - debes crear estas propiedades en HubSpot
    course_interest: data.courseInterest,
    current_level: data.currentLevel || 'unknown',
    message: data.message || '',
    // Campos adicionales de seguimiento
    lifecyclestage: 'lead',
    lead_source: 'Website - Signup Form',
    hs_lead_status: 'NEW'
  };

  // Endpoint de HubSpot para crear/actualizar contactos
  const hubspotUrl = 'https://api.hubapi.com/crm/v3/objects/contacts';

  const response = await fetch(hubspotUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${accessToken}`
    },
    body: JSON.stringify({ properties })
  });

  if (!response.ok) {
    const errorData = await response.json();
    console.error('Error de HubSpot:', errorData);
    throw new Error(`Error al crear contacto en HubSpot: ${errorData.message || response.statusText}`);
  }

  return await response.json();
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

    // Respuesta exitosa
    return NextResponse.json({
      success: true,
      message: '¡Gracias por tu inscripción! Te contactaremos pronto.',
      contactId: hubspotResponse.id
    }, { status: 200 });

  } catch (error) {
    console.error('Error en signup:', error);
    
    return NextResponse.json({
      success: false,
      error: error instanceof Error ? error.message : 'Error desconocido al procesar la inscripción'
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
