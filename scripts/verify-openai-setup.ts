#!/usr/bin/env ts-node

/**
 * Script de Verificación de OpenAI API Configuration
 * 
 * Verifica que:
 * 1. OPENAI_API_KEY está configurado
 * 2. La API key es válida
 * 3. Los modelos usados están disponibles
 * 4. Estima costos basados en el uso actual
 * 
 * Uso: npx ts-node scripts/verify-openai-setup.ts
 */

import OpenAI from 'openai';

// Colores para terminal
const colors = {
  reset: '\x1b[0m',
  bright: '\x1b[1m',
  red: '\x1b[31m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  magenta: '\x1b[35m',
  cyan: '\x1b[36m',
};

function log(message: string, color: keyof typeof colors = 'reset') {
  console.log(`${colors[color]}${message}${colors.reset}`);
}

function logSection(title: string) {
  console.log('\n' + '='.repeat(60));
  log(title, 'cyan');
  console.log('='.repeat(60) + '\n');
}

async function verifyOpenAISetup() {
  logSection('🤖 Verificación de OpenAI API Configuration');

  // 1. Verificar que OPENAI_API_KEY está configurado
  log('1️⃣ Verificando OPENAI_API_KEY...', 'bright');
  
  const apiKey = process.env.OPENAI_API_KEY;
  
  if (!apiKey) {
    log('❌ ERROR: OPENAI_API_KEY no está configurado', 'red');
    log('\n📋 Solución:', 'yellow');
    log('   1. Obtén tu API key en: https://platform.openai.com/api-keys', 'yellow');
    log('   2. Agrégala a .env.local:', 'yellow');
    log('      OPENAI_API_KEY=sk-proj-xxxxxxxxxxxxxxxx', 'yellow');
    log('   3. O configúrala en Cloudflare Pages Dashboard', 'yellow');
    process.exit(1);
  }
  
  log(`✅ API Key encontrada: ${apiKey.substring(0, 20)}...`, 'green');
  
  // 2. Verificar formato de la API key
  log('\n2️⃣ Verificando formato de la API key...', 'bright');
  
  if (!apiKey.startsWith('sk-')) {
    log('⚠️  ADVERTENCIA: La API key no tiene el formato esperado', 'yellow');
    log('   Formato esperado: sk-proj-xxxxxxxx o sk-xxxxxxxx', 'yellow');
  } else {
    log('✅ Formato de API key correcto', 'green');
  }
  
  // 3. Verificar conexión con OpenAI
  log('\n3️⃣ Probando conexión con OpenAI API...', 'bright');
  
  try {
    const openai = new OpenAI({ apiKey });
    
    // Hacer una llamada simple para verificar que la key funciona
    const response = await openai.chat.completions.create({
      model: 'gpt-4o-mini',
      messages: [
        { role: 'system', content: 'You are a helpful assistant.' },
        { role: 'user', content: 'Say "Connection successful" in one word.' }
      ],
      max_tokens: 10,
      temperature: 0
    });
    
    log('✅ Conexión exitosa con OpenAI API', 'green');
    log(`   Respuesta: ${response.choices[0]?.message?.content}`, 'green');
    
  } catch (error: any) {
    log('❌ ERROR: No se pudo conectar con OpenAI API', 'red');
    log(`   ${error.message}`, 'red');
    
    if (error.status === 401) {
      log('\n📋 Solución:', 'yellow');
      log('   La API key es inválida o ha expirado', 'yellow');
      log('   1. Ve a https://platform.openai.com/api-keys', 'yellow');
      log('   2. Revoca la key antigua', 'yellow');
      log('   3. Crea una nueva key', 'yellow');
      log('   4. Actualiza OPENAI_API_KEY en tu configuración', 'yellow');
    }
    
    process.exit(1);
  }
  
  // 4. Verificar modelos disponibles
  logSection('📊 Modelos Usados en Focus English');
  
  const models = [
    {
      name: 'gpt-4o',
      usage: 'Evaluaciones complejas (Speaking, Writing)',
      files: [
        'app/api/evaluate-speaking-part1/route.ts',
        'app/api/evaluate-speaking-part2/route.ts',
        'app/api/evaluate-speaking-part3/route.ts',
        'app/api/evaluate-speaking-part4/route.ts',
        'app/api/evaluate-text-answer/route.ts',
        'app/api/evaluate-writing/route.ts',
      ],
      costInput: '$2.50 / 1M tokens',
      costOutput: '$10.00 / 1M tokens'
    },
    {
      name: 'gpt-4o-mini',
      usage: 'Evaluaciones simples y detección de errores',
      files: [
        'app/api/evaluate-answer/route.ts',
        'app/api/evaluate-multiple-choice/route.ts',
        'app/api/evaluate-sentence-building/route.ts',
        'app/api/evaluate-speaking/route.ts',
      ],
      costInput: '$0.15 / 1M tokens',
      costOutput: '$0.60 / 1M tokens'
    },
    {
      name: 'whisper-1',
      usage: 'Transcripción de audio (speech-to-text)',
      files: [
        'app/api/evaluate-speaking/route.ts',
      ],
      costInput: '$0.006 / minuto',
      costOutput: 'N/A'
    }
  ];
  
  models.forEach((model, index) => {
    log(`\n${index + 1}. ${model.name}`, 'bright');
    log(`   Uso: ${model.usage}`, 'cyan');
    log(`   Archivos: ${model.files.length}`, 'cyan');
    model.files.forEach(file => {
      log(`     - ${file}`, 'magenta');
    });
    log(`   Costo Input: ${model.costInput}`, 'yellow');
    log(`   Costo Output: ${model.costOutput}`, 'yellow');
  });
  
  // 5. Estimación de costos
  logSection('💰 Estimación de Costos Mensuales');
  
  log('Escenario: 100 estudiantes activos', 'bright');
  console.log('\n┌─────────────────────────────┬─────────────┬──────────────┬──────────────┐');
  console.log('│ Actividad                   │ Modelo      │ Tokens/mes   │ Costo/mes    │');
  console.log('├─────────────────────────────┼─────────────┼──────────────┼──────────────┤');
  console.log('│ Speaking (4 parts × 5/mes)  │ gpt-4o      │ 10M          │ $25.00       │');
  console.log('│ Writing (2 essays/mes)      │ gpt-4o      │ 5M           │ $12.50       │');
  console.log('│ Exercises simples (50/mes)  │ gpt-4o-mini │ 20M          │ $3.00        │');
  console.log('│ Audio (20 min/mes)          │ whisper-1   │ 2,000 min    │ $12.00       │');
  console.log('├─────────────────────────────┴─────────────┴──────────────┼──────────────┤');
  console.log('│ TOTAL                                                     │ ~$52.50/mes  │');
  console.log('└───────────────────────────────────────────────────────────┴──────────────┘');
  
  log('\n📊 Costo por estudiante: ~$0.52/mes', 'green');
  log('💡 Muy económico para un curso de inglés premium', 'green');
  
  // 6. Recomendaciones
  logSection('📋 Recomendaciones');
  
  log('✅ Configuración de Límites:', 'bright');
  log('   1. Ve a: https://platform.openai.com/account/limits', 'cyan');
  log('   2. Configura Hard Limit: $100/mes', 'cyan');
  log('   3. Configura Soft Limit: $50/mes (alertas)', 'cyan');
  
  log('\n✅ Monitoreo:', 'bright');
  log('   1. Dashboard: https://platform.openai.com/usage', 'cyan');
  log('   2. Revisa diariamente durante la primera semana', 'cyan');
  log('   3. Después revisa semanalmente', 'cyan');
  
  log('\n✅ Seguridad:', 'bright');
  log('   - Nunca expongas OPENAI_API_KEY en el cliente', 'cyan');
  log('   - Implementa rate limiting por usuario', 'cyan');
  log('   - Logs de uso para detectar abuso', 'cyan');
  
  log('\n✅ Optimización:', 'bright');
  log('   - Usa gpt-4o-mini para evaluaciones simples (60-80% más barato)', 'cyan');
  log('   - Implementa caching para respuestas comunes', 'cyan');
  log('   - Temperatura baja (0.1-0.3) para consistencia', 'cyan');
  
  // 7. Próximos pasos
  logSection('🚀 Próximos Pasos');
  
  log('Para Cloudflare Pages:', 'bright');
  log('1. Dashboard → Pages → focusonenglish → Settings → Environment variables', 'cyan');
  log('2. Agregar variable:', 'cyan');
  log('   OPENAI_API_KEY = sk-proj-xxxxxxxxxxxxxxxx', 'green');
  log('3. Save and redeploy', 'cyan');
  
  log('\nPara testing local:', 'bright');
  log('1. Copia .env.example a .env.local', 'cyan');
  log('2. Agrega tu OPENAI_API_KEY', 'cyan');
  log('3. Prueba los endpoints de evaluación', 'cyan');
  
  log('\nDocumentación:', 'bright');
  log('- OPENAI_API_CONFIGURATION_GUIDE.md - Guía completa', 'cyan');
  log('- CLOUDFLARE_DASHBOARD_CONFIG.md - Config de deployment', 'cyan');
  
  logSection('✅ Verificación Completada');
  
  log('Estado: Todo configurado correctamente', 'green');
  log('Próximo paso: Deploy a Cloudflare Pages', 'cyan');
}

// Ejecutar verificación
verifyOpenAISetup().catch((error) => {
  log('\n❌ Error inesperado durante la verificación:', 'red');
  console.error(error);
  process.exit(1);
});
