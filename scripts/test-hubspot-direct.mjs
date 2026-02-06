
import dotenv from 'dotenv';
import fetch from 'node-fetch';

dotenv.config();

const HUBSPOT_TOKEN = process.env.HUBSPOT_ACCESS_TOKEN || process.env.HUBSPOT_API_KEY;

async function testHubSpot() {
  console.log('--- Probando Conexión HubSpot (JS Mode) ---');
  
  if (!HUBSPOT_TOKEN) {
    console.error('❌ Error: No se encontró HUBSPOT_ACCESS_TOKEN en el archivo .env');
    return;
  }

  console.log('1. Probando autenticación...');
  try {
    const authResponse = await fetch('https://api.hubapi.com/crm/v3/objects/contacts?limit=1', {
      headers: {
        Authorization: `Bearer ${HUBSPOT_TOKEN}`,
        'Content-Type': 'application/json'
      }
    });

    if (!authResponse.ok) {
      const error = await authResponse.json();
      console.error('❌ Error de autenticación:', JSON.stringify(error, null, 2));
      return;
    }
    console.log('✅ Autenticación exitosa.');
  } catch (e) {
    console.error('❌ Error de red/petición:', e.message);
    return;
  }

  console.log('2. Intentando crear un Ticket de prueba...');
  try {
    const ticketResponse = await fetch('https://api.hubapi.com/crm/v3/objects/tickets', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${HUBSPOT_TOKEN}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        properties: {
          subject: 'Ticket de Prueba - Focus English System',
          content: 'Este es un ticket de prueba para verificar la integración.',
          hs_pipeline: '0',
          hs_pipeline_stage: '4498894073'
        }
      })
    });

    const ticketData = await ticketResponse.json();
    if (!ticketResponse.ok) {
      console.error('❌ Error al crear ticket:', JSON.stringify(ticketData, null, 2));
      console.log('\n💡 Sugerencia: Si el error menciona "property not found", verifica los nombres internos de hs_pipeline y hs_pipeline_stage.');
    } else {
      console.log('✅ Ticket creado con éxito. ID:', ticketData.id);
      console.log('🔗 Búscalo en HubSpot en Service > Tickets');
    }
  } catch (e) {
    console.error('❌ Error inesperado:', e.message);
  }
}

testHubSpot();
