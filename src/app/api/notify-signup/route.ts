import { NextRequest, NextResponse } from 'next/server';


export const runtime = 'edge';
// Tipos para el formulario de notificación
interface NotifySignupData {
  email: string;
  source?: string;
  interest?: string;
}

// Función para crear un contacto de early access en HubSpot
async function createEarlyAccessContact(data: NotifySignupData) {
  const accessToken = process.env.HUBSPOT_ACCESS_TOKEN;
  
  if (!accessToken) {
    throw new Error('HubSpot Access Token no configurado');
  }

  // Construir propiedades del contacto
  const properties: { [key: string]: string } = {
    email: data.email,
    lifecyclestage: 'lead',
    hs_lead_status: 'NEW',
    // Campo personalizado para indicar que es de la página de coming soon
    signup_source: data.source || 'coming-soon-page',
    interest_type: data.interest || 'early-access'
  };

  // Añadir mensaje descriptivo
  properties.message = `Registro de early access desde la página de Coming Soon.\nFuente: ${data.source || 'coming-soon-page'}\nInterés: ${data.interest || 'early-access'}\nFecha: ${new Date().toLocaleDateString('es-ES')}`;

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

    return { ...await updateResponse.json(), action: 'updated' };
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

  return { ...await createResponse.json(), action: 'created' };
}

// Handler POST para el formulario de notificación
export async function POST(request: NextRequest) {
  try {
    const body = await request.json() as NotifySignupData;

    // Validación básica
    if (!body.email) {
      return NextResponse.json(
        { error: 'Email es requerido' },
        { status: 400 }
      );
    }

    // Validar formato de email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(body.email)) {
      return NextResponse.json(
        { error: 'Formato de email inválido' },
        { status: 400 }
      );
    }

    // Crear/actualizar contacto en HubSpot
    const hubspotResponse = await createEarlyAccessContact(body);

    // Respuesta exitosa
    return NextResponse.json({
      success: true,
      message: '¡Perfecto! Te notificaremos cuando lancemos.',
      contactId: hubspotResponse.id,
      action: hubspotResponse.action
    }, { status: 200 });

  } catch (error) {
    console.error('Error en notify-signup:', error);
    
    const errorMessage = error instanceof Error ? error.message : 'Error desconocido';
    
    // Manejo especial para duplicados
    if (errorMessage.includes('already has that value') || errorMessage.includes('duplicate')) {
      return NextResponse.json({
        success: true,
        message: '¡Ya estás en nuestra lista! Te avisaremos cuando lancemos.',
        warning: 'Email ya registrado'
      }, { status: 200 });
    }
    
    return NextResponse.json({
      success: false,
      error: 'No pudimos registrar tu email. Por favor, inténtalo de nuevo.'
    }, { status: 500 });
  }
}

// Permitir OPTIONS para CORS
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
