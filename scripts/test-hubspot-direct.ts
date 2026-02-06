
import dotenv from 'dotenv';
import fetch from 'node-fetch';

dotenv.config();

const HUBSPOT_TOKEN = process.env.HUBSPOT_ACCESS_TOKEN || process.env.HUBSPOT_API_KEY;

async function testHubSpot() {
  console.log('--- Probando Conexión HubSpot ---');
  
  if (!HUBSPOT_TOKEN) {
    console.error('❌ Error: No se encontró HUBSPOT_ACCESS_TOKEN en el archivo .env');
    return;
  }

  console.log('1. Probando autenticación...');
  const authResponse = await fetch('https://api.hubapi.com/crm/v3/objects/contacts?limit=1', {
    headers: {
      Authorization: `Bearer ${HUBSPOT_TOKEN}`,
      'Content-Type': 'application/json'
    }
  });

  if (!authResponse.ok) {
    const error = await authResponse.json();
    console.error('❌ Error de autenticación:', error);
    return;
  }
  console.log('✅ Autenticación exitosa.');

  console.log('2. Intentando crear un Ticket de prueba...');
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
        hs_pipeline: 'default',
        hs_pipeline_stage: '1'
      }
    })
  });

  const ticketData = await ticketResponse.json() as any;
  if (!ticketResponse.ok) {
    console.error('❌ Error al crear ticket:', ticketData);
    console.log('\n💡 Sugerencia: Verifica si el pipeline "default" y el stage "1" existen en tu cuenta.');
  } else {
    console.log('✅ Ticket creado con éxito. ID:', ticketData.id);
    console.log('🔗 Búscalo en HubSpot en Service > Tickets');
  }
}

testHubSpot().catch(console.error);
