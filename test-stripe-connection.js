#!/usr/bin/env node

/**
 * Script de Verificación de Stripe
 * 
 * Este script verifica que tu configuración de Stripe esté correcta
 * tanto en modo TEST como en PRODUCCIÓN
 * 
 * Uso:
 *   node test-stripe-connection.js
 */

const https = require('https');

// Colores para la consola
const colors = {
  reset: '\x1b[0m',
  bright: '\x1b[1m',
  green: '\x1b[32m',
  red: '\x1b[31m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  cyan: '\x1b[36m',
};

function log(message, color = colors.reset) {
  console.log(`${color}${message}${colors.reset}`);
}

function logSuccess(message) {
  log(`✅ ${message}`, colors.green);
}

function logError(message) {
  log(`❌ ${message}`, colors.red);
}

function logWarning(message) {
  log(`⚠️  ${message}`, colors.yellow);
}

function logInfo(message) {
  log(`ℹ️  ${message}`, colors.cyan);
}

function logHeader(message) {
  console.log('');
  log('='.repeat(60), colors.bright);
  log(message, colors.bright);
  log('='.repeat(60), colors.bright);
  console.log('');
}

async function testStripeKey(apiKey, keyType) {
  return new Promise((resolve) => {
    if (!apiKey) {
      logError(`${keyType}: No se encontró la clave`);
      resolve(false);
      return;
    }

    const isTestKey = apiKey.includes('_test_');
    const isLiveKey = apiKey.includes('_live_');

    logInfo(`${keyType}: ${apiKey.substring(0, 15)}...`);
    
    if (isTestKey) {
      log('  Modo: TEST', colors.yellow);
    } else if (isLiveKey) {
      log('  Modo: PRODUCCIÓN', colors.green);
    } else {
      logWarning('  Modo: DESCONOCIDO');
    }

    // Hacer una petición simple a Stripe para verificar la clave
    const options = {
      hostname: 'api.stripe.com',
      path: '/v1/balance',
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${apiKey}`
      }
    };

    const req = https.request(options, (res) => {
      let data = '';

      res.on('data', (chunk) => {
        data += chunk;
      });

      res.on('end', () => {
        if (res.statusCode === 200) {
          logSuccess(`  ✓ Clave válida y funcional`);
          const balance = JSON.parse(data);
          logInfo(`  Balance disponible: ${balance.available[0].amount / 100} ${balance.available[0].currency.toUpperCase()}`);
          resolve(true);
        } else {
          logError(`  ✗ Error al validar la clave (Status: ${res.statusCode})`);
          try {
            const error = JSON.parse(data);
            logError(`  Error: ${error.error.message}`);
          } catch (e) {
            logError(`  Error: ${data}`);
          }
          resolve(false);
        }
      });
    });

    req.on('error', (error) => {
      logError(`  ✗ Error de conexión: ${error.message}`);
      resolve(false);
    });

    req.end();
  });
}

async function testWebhookEndpoint(url) {
  return new Promise((resolve) => {
    logInfo(`Probando webhook endpoint: ${url}`);

    const urlObj = new URL(url);
    const options = {
      hostname: urlObj.hostname,
      path: urlObj.pathname,
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Stripe-Signature': 'test_signature'
      }
    };

    const req = https.request(options, (res) => {
      if (res.statusCode === 200 || res.statusCode === 400 || res.statusCode === 401) {
        logSuccess('  ✓ Webhook endpoint accesible');
        logInfo(`  Status: ${res.statusCode}`);
        resolve(true);
      } else if (res.statusCode === 404) {
        logError('  ✗ Webhook endpoint no encontrado (404)');
        resolve(false);
      } else {
        logWarning(`  Respuesta inesperada: ${res.statusCode}`);
        resolve(true);
      }
    });

    req.on('error', (error) => {
      logError(`  ✗ Error al conectar: ${error.message}`);
      resolve(false);
    });

    req.write(JSON.stringify({ test: true }));
    req.end();
  });
}

async function checkEnvironmentVariables() {
  logHeader('1. VERIFICANDO VARIABLES DE ENTORNO');

  const requiredVars = {
    'STRIPE_SECRET_KEY': process.env.STRIPE_SECRET_KEY,
    'NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY': process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY,
    'STRIPE_WEBHOOK_SECRET': process.env.STRIPE_WEBHOOK_SECRET,
    'NEXT_PUBLIC_SITE_URL': process.env.NEXT_PUBLIC_SITE_URL
  };

  let allPresent = true;

  for (const [key, value] of Object.entries(requiredVars)) {
    if (value) {
      if (key.includes('SECRET') || key.includes('KEY')) {
        logSuccess(`${key}: ${value.substring(0, 15)}...`);
      } else {
        logSuccess(`${key}: ${value}`);
      }
    } else {
      logError(`${key}: NO CONFIGURADA`);
      allPresent = false;
    }
  }

  if (!allPresent) {
    console.log('');
    logWarning('Algunas variables no están configuradas.');
    logInfo('Para cargar variables localmente, crea un archivo .env.local con:');
    console.log('');
    console.log('  STRIPE_SECRET_KEY=sk_test_...');
    console.log('  NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_...');
    console.log('  STRIPE_WEBHOOK_SECRET=whsec_...');
    console.log('  NEXT_PUBLIC_SITE_URL=http://localhost:3000');
    console.log('');
  }

  return allPresent;
}

async function testStripeKeys() {
  logHeader('2. PROBANDO CONEXIÓN CON STRIPE');

  const secretKey = process.env.STRIPE_SECRET_KEY;
  const publishableKey = process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY;

  if (!secretKey || !publishableKey) {
    logError('No se pueden probar las claves porque no están configuradas');
    return false;
  }

  const secretKeyValid = await testStripeKey(secretKey, 'Secret Key');
  console.log('');
  
  // Verificar publishable key
  logInfo(`Publishable Key: ${publishableKey.substring(0, 15)}...`);
  const isTestPK = publishableKey.includes('_test_');
  const isLivePK = publishableKey.includes('_live_');
  
  if (isTestPK) {
    log('  Modo: TEST', colors.yellow);
  } else if (isLivePK) {
    log('  Modo: PRODUCCIÓN', colors.green);
  }

  // Verificar que ambas claves sean del mismo tipo
  const secretKeyType = secretKey.includes('_test_') ? 'test' : 'live';
  const publishableKeyType = publishableKey.includes('_test_') ? 'test' : 'live';

  if (secretKeyType !== publishableKeyType) {
    console.log('');
    logError('¡ADVERTENCIA! Secret Key y Publishable Key son de tipos diferentes');
    logError(`Secret Key: ${secretKeyType}`);
    logError(`Publishable Key: ${publishableKeyType}`);
    return false;
  } else {
    logSuccess('✓ Ambas claves son del mismo tipo');
  }

  return secretKeyValid;
}

async function testWebhook() {
  logHeader('3. VERIFICANDO WEBHOOK ENDPOINT');

  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;
  
  if (!siteUrl) {
    logError('NEXT_PUBLIC_SITE_URL no está configurada');
    return false;
  }

  const webhookUrl = `${siteUrl}/api/webhooks/stripe`;
  const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET;

  if (webhookSecret) {
    logInfo(`Webhook Secret: ${webhookSecret.substring(0, 15)}...`);
  } else {
    logWarning('STRIPE_WEBHOOK_SECRET no configurada');
  }

  return await testWebhookEndpoint(webhookUrl);
}

function showNextSteps(varsOk, stripeOk, webhookOk) {
  logHeader('RESUMEN Y PRÓXIMOS PASOS');

  const allOk = varsOk && stripeOk && webhookOk;

  if (allOk) {
    logSuccess('¡TODO ESTÁ CONFIGURADO CORRECTAMENTE! 🎉');
    console.log('');
    logInfo('Próximos pasos:');
    console.log('  1. Ejecutar: npm run dev');
    console.log('  2. Ir a: http://localhost:3000/signup');
    console.log('  3. Probar con tarjeta: 4242 4242 4242 4242');
    console.log('');
  } else {
    logWarning('Hay algunos problemas que resolver:');
    console.log('');

    if (!varsOk) {
      logError('✗ Variables de entorno faltantes');
      logInfo('  Solución: Crear archivo .env.local con las variables necesarias');
    }

    if (!stripeOk) {
      logError('✗ Claves de Stripe inválidas');
      logInfo('  Solución: Verificar claves en https://dashboard.stripe.com/apikeys');
    }

    if (!webhookOk) {
      logError('✗ Webhook endpoint no accesible');
      logInfo('  Solución: Asegurarse de que la aplicación esté desplegada');
    }

    console.log('');
    logInfo('Consulta la guía completa en: GUIA_STRIPE_TEST_Y_PRODUCCION.md');
  }

  console.log('');
  logHeader('RECURSOS ÚTILES');
  console.log('  📚 Stripe Dashboard: https://dashboard.stripe.com');
  console.log('  🧪 Tarjetas de prueba: https://stripe.com/docs/testing');
  console.log('  📖 Documentación: https://stripe.com/docs');
  console.log('  💬 Soporte: https://support.stripe.com');
  console.log('');
}

// Ejecutar tests
async function main() {
  console.clear();
  log('╔════════════════════════════════════════════════════════════╗', colors.bright);
  log('║        VERIFICADOR DE CONFIGURACIÓN DE STRIPE             ║', colors.bright);
  log('║                  Focus English                             ║', colors.bright);
  log('╚════════════════════════════════════════════════════════════╝', colors.bright);
  console.log('');

  const varsOk = await checkEnvironmentVariables();
  const stripeOk = varsOk ? await testStripeKeys() : false;
  const webhookOk = varsOk ? await testWebhook() : false;

  showNextSteps(varsOk, stripeOk, webhookOk);
}

// Manejo de errores no capturados
process.on('unhandledRejection', (error) => {
  console.error('');
  logError('Error no manejado:');
  console.error(error);
  process.exit(1);
});

// Ejecutar
main().catch((error) => {
  console.error('');
  logError('Error fatal:');
  console.error(error);
  process.exit(1);
});
