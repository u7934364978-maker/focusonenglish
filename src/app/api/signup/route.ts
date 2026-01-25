import { NextRequest, NextResponse } from 'next/server';


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
    'a1': 'A1 Principiante',
    'a2': 'A2 Elemental',
    'b1': 'B1 Intermedio',
    'b2': 'B2 Intermedio Alto',
    'c1': 'C1 Avanzado',
    'c2': 'C2 Maestría'
  };

  // Mapear cursos a formato legible
  const courseMap: { [key: string]: string } = {
    'trabajo': 'Inglés para Trabajar',
    'viajes': 'Inglés para Viajar',
    'examenes': 'Preparar Exámenes'
  };

  // Construir propiedades del contacto
  const properties: { [key: string]: string } = {
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
    const mappedLevel = levelMap[data.currentLevel];
    if (mappedLevel) {
      properties.current_level = mappedLevel;
    }
  }

  // Añadir curso e información en un solo campo de texto (message)
  let fullMessage = '';
  if (data.courseInterest) {
    const courseName = courseMap[data.courseInterest] || data.courseInterest;
    fullMessage += `Curso de interés: ${courseName}\n\n`;
  }
  if (data.message && data.message.trim() !== '') {
    fullMessage += `Mensaje: ${data.message}`;
  }
  
  if (fullMessage.trim()) {
    properties.message = fullMessage.trim();
  }

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

    return await updateResponse.json();
  }

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

  return await createResponse.json();
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
      error: 'Hubo un problema al procesar tu inscripción. Por favor, inténtalo de nuevo o contáctanos directamente.'
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
