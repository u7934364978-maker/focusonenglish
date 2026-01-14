#!/usr/bin/env node

// Script de prueba para la integración de HubSpot
const API_URL = 'https://3001-iyluchd8pqw5yat3s82m0-5185f4aa.sandbox.novita.ai/api/signup';

const testData = {
  firstName: "Test",
  lastName: "Usuario",
  email: "test-hubspot@focusenglish.com",
  phone: "+34 600 123 456",
  courseInterest: "trabajo",
  currentLevel: "b2",
  message: "Esta es una prueba de la integración con HubSpot CRM"
};

console.log('🧪 Probando integración de HubSpot...\n');
console.log('📋 Datos a enviar:', JSON.stringify(testData, null, 2));
console.log('\n🚀 Enviando solicitud...\n');

fetch(API_URL, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(testData)
})
  .then(response => response.json())
  .then(data => {
    console.log('✅ Respuesta recibida:\n');
    console.log(JSON.stringify(data, null, 2));
    
    if (data.success) {
      console.log('\n🎉 ¡ÉXITO! El contacto se creó en HubSpot');
      console.log(`📊 Contact ID: ${data.contactId}`);
      console.log('\n🔗 Verifica en HubSpot:');
      console.log('https://app-eu1.hubspot.com/contacts/147592708/contacts');
      console.log('\n✨ Busca el email: test-hubspot@focusenglish.com');
    } else {
      console.log('\n❌ ERROR: La solicitud falló');
      console.log('Mensaje:', data.error || data.message);
    }
  })
  .catch(error => {
    console.error('\n💥 Error al hacer la solicitud:');
    console.error(error.message);
  });
