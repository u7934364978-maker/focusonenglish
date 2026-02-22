// ============================================
// GENERADOR DE AUDIOS PARA CURSO A1
// Genera audios para ejercicios de escucha y pronunciación
// ============================================

import * as dotenv from 'dotenv';
dotenv.config({ path: '.env.local' });

import {
  generateReadingAudio,
  generateConversationAudio,
  generateInstructionAudio,
  generateOpenAISpeech,
  VOICE_IDS,
  getUsageInfo,
} from '../src/lib/text-to-speech';
import * as path from 'path';
import * as fs from 'fs';

// Voice Profiles for A1 Course
const A1_VOICES = {
  sarah: VOICE_IDS.american_female, // Sarah - Female voice for dialogues
  john: VOICE_IDS.british_male, // John - Male voice for dialogues
  narrator: VOICE_IDS.narrator, // Narrator - Neutral voice for instructions
};

interface AudioToGenerate {
  unitId: string;
  exerciseId: string;
  text: string;
  voiceId: string;
  voiceName: string;
  outputPath: string;
  type: 'listening' | 'reading' | 'conversation' | 'instruction';
  characterCount: number;
}

interface CostTracker {
  totalCharacters: number;
  elevenLabsCharacters: number;
  openAICharacters: number;
  audioCount: number;
  startTime: Date;
  endTime?: Date;
}

const costTracker: CostTracker = {
  totalCharacters: 0,
  elevenLabsCharacters: 0,
  openAICharacters: 0,
  audioCount: 0,
  startTime: new Date(),
};

/**
 * Genera el audio usando ElevenLabs con fallback a OpenAI
 */
async function generateWithFallback(audio: AudioToGenerate): Promise<{ success: boolean; provider: 'elevenlabs' | 'openai' | 'skipped' }> {
  // Si el archivo ya existe, saltar
  if (fs.existsSync(audio.outputPath)) {
    console.log(`   ⏭️ El archivo ya existe: ${path.basename(audio.outputPath)}`);
    return { success: true, provider: 'skipped' };
  }

  let success = false;
  let provider: 'elevenlabs' | 'openai' = 'elevenlabs';

  // Intentar con ElevenLabs primero
  console.log(`   🎙️ Generando con ${audio.voiceName} (${audio.type})...`);
  try {
    switch (audio.type) {
      case 'listening':
      case 'conversation':
        success = await generateConversationAudio(audio.text, audio.voiceId, audio.outputPath);
        break;
      case 'reading':
        success = await generateReadingAudio(audio.text, audio.voiceId, audio.outputPath);
        break;
      default:
        success = await generateInstructionAudio(audio.text, audio.voiceId, audio.outputPath);
    }
    
    if (success) {
      costTracker.elevenLabsCharacters += audio.characterCount;
    }
  } catch (e) {
    console.log(`   ⚠️ ElevenLabs falló: ${e instanceof Error ? e.message : String(e)}`);
  }

  // Fallback a OpenAI si falla ElevenLabs
  if (!success) {
    console.log(`   🔄 Usando FALLBACK: OpenAI TTS...`);
    const openAIVoice = audio.voiceName === 'Sarah' ? 'nova' : audio.voiceName === 'John' ? 'onyx' : 'shimmer';
    success = await generateOpenAISpeech(audio.text, openAIVoice, audio.outputPath);
    provider = 'openai';
    
    if (success) {
      costTracker.openAICharacters += audio.characterCount;
    }
  }

  if (success) {
    costTracker.totalCharacters += audio.characterCount;
    costTracker.audioCount++;
  }

  return { success, provider: success ? provider : 'skipped' };
}

/**
 * Load A1 unit JSON file
 */
function loadUnitData(unitNumber: number): any {
  const unitPath = path.join(
    process.cwd(),
    'src',
    'content',
    'cursos',
    'ingles-a1',
    `unit${unitNumber}.json`
  );

  if (!fs.existsSync(unitPath)) {
    console.log(`⚠️ Unit file not found: unit${unitNumber}.json`);
    return null;
  }

  const content = fs.readFileSync(unitPath, 'utf-8');
  return JSON.parse(content);
}

/**
 * Identify exercises that need audio in A1 units
 * For now, we'll generate sample audio for demonstration
 */
function collectA1AudiosToGenerate(startUnit: number = 1, endUnit: number = 30): AudioToGenerate[] {
  const audios: AudioToGenerate[] = [];

  for (let unitNum = startUnit; unitNum <= endUnit; unitNum++) {
    const unitData = loadUnitData(unitNum);
    if (!unitData) continue;

    const unitId = unitData.course.unit_id;
    const unitTitle = unitData.course.unit_title;

    // Generate 5 sample audio files per unit for demonstration
    // In real implementation, these would be extracted from actual exercises
    const sampleTexts = [
      {
        text: `Welcome to Unit ${unitNum}: ${unitTitle}. Let's practice listening and pronunciation.`,
        voice: 'narrator',
        type: 'instruction' as const,
        id: 'intro',
      },
      {
        text: `Hello! My name is Sarah. I'm here to help you learn English.`,
        voice: 'sarah',
        type: 'conversation' as const,
        id: 'sarah_intro',
      },
      {
        text: `Good morning! I'm John. Nice to meet you.`,
        voice: 'john',
        type: 'conversation' as const,
        id: 'john_intro',
      },
      {
        text: `Listen carefully and repeat after me. This is a listening exercise.`,
        voice: 'narrator',
        type: 'listening' as const,
        id: 'listening_1',
      },
      {
        text: `Great job! You're making excellent progress. Keep practicing!`,
        voice: 'sarah',
        type: 'instruction' as const,
        id: 'encouragement',
      },
    ];

    sampleTexts.forEach((sample) => {
      const voiceId = sample.voice === 'sarah' ? A1_VOICES.sarah 
                    : sample.voice === 'john' ? A1_VOICES.john 
                    : A1_VOICES.narrator;
      
      const outputPath = path.join(
        process.cwd(),
        'public',
        'audio',
        'a1',
        `unit${unitNum}`,
        `${unitId}_${sample.id}.mp3`
      );

      audios.push({
        unitId,
        exerciseId: sample.id,
        text: sample.text,
        voiceId,
        voiceName: sample.voice.charAt(0).toUpperCase() + sample.voice.slice(1),
        outputPath,
        type: sample.type,
        characterCount: sample.text.length,
      });
    });
  }

  return audios;
}

/**
 * Print cost estimation
 */
function printCostEstimation(audios: AudioToGenerate[]) {
  const totalChars = audios.reduce((sum, audio) => sum + audio.characterCount, 0);
  
  // ElevenLabs pricing (approximate)
  // Free tier: 10,000 chars/month
  // Creator: $5/month for 30,000 chars
  // Pro: $22/month for 100,000 chars
  const elevenLabsCostPer1000 = 0.18; // $0.18 per 1,000 characters (Pro tier average)
  const elevenLabsEstimatedCost = (totalChars / 1000) * elevenLabsCostPer1000;

  // OpenAI TTS pricing
  // tts-1: $15 per 1M characters
  const openAICostPer1000 = 0.015; // $0.015 per 1,000 characters
  const openAIEstimatedCost = (totalChars / 1000) * openAICostPer1000;

  console.log('\n💰 ESTIMACIÓN DE COSTOS');
  console.log('========================');
  console.log(`Total de caracteres: ${totalChars.toLocaleString()}`);
  console.log(`Total de audios: ${audios.length}`);
  console.log(`\nElevenLabs (Primary):`);
  console.log(`  Costo estimado: $${elevenLabsEstimatedCost.toFixed(2)} USD`);
  console.log(`  Plan recomendado: ${totalChars > 100000 ? 'Independent ($99/500k)' : totalChars > 30000 ? 'Pro ($22/100k)' : 'Creator ($5/30k)'}`);
  console.log(`\nOpenAI TTS (Fallback):`);
  console.log(`  Costo estimado: $${openAIEstimatedCost.toFixed(2)} USD`);
  console.log(`  Modelo: tts-1\n`);
}

/**
 * Print final cost report
 */
function printCostReport() {
  costTracker.endTime = new Date();
  const duration = (costTracker.endTime.getTime() - costTracker.startTime.getTime()) / 1000;

  const elevenLabsCost = (costTracker.elevenLabsCharacters / 1000) * 0.18;
  const openAICost = (costTracker.openAICharacters / 1000) * 0.015;
  const totalCost = elevenLabsCost + openAICost;

  console.log('\n\n💰 REPORTE DE COSTOS FINAL');
  console.log('===========================');
  console.log(`Tiempo de ejecución: ${duration.toFixed(1)}s`);
  console.log(`Total de audios generados: ${costTracker.audioCount}`);
  console.log(`\nCaracteres procesados:`);
  console.log(`  ElevenLabs: ${costTracker.elevenLabsCharacters.toLocaleString()} chars`);
  console.log(`  OpenAI: ${costTracker.openAICharacters.toLocaleString()} chars`);
  console.log(`  Total: ${costTracker.totalCharacters.toLocaleString()} chars`);
  console.log(`\nCosto real:`);
  console.log(`  ElevenLabs: $${elevenLabsCost.toFixed(2)} USD`);
  console.log(`  OpenAI: $${openAICost.toFixed(2)} USD`);
  console.log(`  Total: $${totalCost.toFixed(2)} USD`);
  console.log(`\nPromedio por audio: $${(totalCost / costTracker.audioCount).toFixed(4)} USD`);
}

/**
 * Generate all A1 audios
 */
async function generateA1Audios(startUnit: number = 1, endUnit: number = 30) {
  console.log('🎙️  GENERADOR DE AUDIOS PARA CURSO A1');
  console.log('======================================\n');
  console.log(`Unidades a procesar: ${startUnit} - ${endUnit}\n`);

  // Verificar uso de la API de ElevenLabs
  console.log('📊 Verificando uso de ElevenLabs API...');
  const usage = await getUsageInfo();
  
  if (usage) {
    console.log(`   Caracteres usados: ${usage.character_count || 0} / ${usage.character_limit || 'ilimitado'}`);
    console.log(`   Plan: ${usage.subscription?.tier || 'Free'}\n`);
  }

  // Recopilar audios a generar
  const audios = collectA1AudiosToGenerate(startUnit, endUnit);
  console.log(`📝 Total de audios a generar: ${audios.length}\n`);

  // Mostrar estimación de costos
  printCostEstimation(audios);

  // Confirmar antes de continuar
  console.log('⚠️  ATENCIÓN: Este proceso consumirá créditos de API.');
  console.log('   Presiona Ctrl+C para cancelar o espera 3 segundos para continuar...\n');
  
  await new Promise((resolve) => setTimeout(resolve, 3000));

  // Generar cada audio
  let successCount = 0;
  let errorCount = 0;
  let skippedCount = 0;

  for (let i = 0; i < audios.length; i++) {
    const audio = audios[i];
    const progress = ((i + 1) / audios.length * 100).toFixed(1);

    console.log(`\n[${i + 1}/${audios.length}] (${progress}%)`);
    console.log(`   Unidad: ${audio.unitId}`);
    console.log(`   Voz: ${audio.voiceName}`);
    console.log(`   Tipo: ${audio.type}`);
    console.log(`   Caracteres: ${audio.characterCount}`);

    try {
      const result = await generateWithFallback(audio);

      if (result.success) {
        if (result.provider === 'skipped') {
          skippedCount++;
        } else {
          successCount++;
          console.log(`   ✅ Generado con ${result.provider === 'elevenlabs' ? 'ElevenLabs' : 'OpenAI'}`);
        }
      } else {
        errorCount++;
        console.log(`   ❌ Error al generar`);
      }

      // Pequeña pausa entre peticiones
      await new Promise((resolve) => setTimeout(resolve, 500));
    } catch (error) {
      errorCount++;
      console.error(`   ❌ Error: ${error}`);
    }
  }

  // Resumen final
  console.log('\n\n=====================================');
  console.log('📊 RESUMEN DE GENERACIÓN');
  console.log('=====================================');
  console.log(`✅ Generados: ${successCount}`);
  console.log(`⏭️ Ya existían: ${skippedCount}`);
  console.log(`❌ Errores: ${errorCount}`);
  console.log(`📁 Total: ${audios.length}`);
  console.log(`📈 Tasa de éxito: ${((successCount / audios.length) * 100).toFixed(1)}%`);

  // Reporte de costos
  printCostReport();

  // Verificar uso final
  const finalUsage = await getUsageInfo();
  if (finalUsage) {
    console.log('\n📊 Uso final de ElevenLabs API:');
    console.log(`   Caracteres usados: ${finalUsage.character_count || 0} / ${finalUsage.character_limit || 'ilimitado'}`);
  }

  console.log('\n✨ Proceso completado!\n');
}

/**
 * Genera un solo audio de prueba
 */
async function generateTestAudio() {
  console.log('🎙️  Generando audio de prueba A1...\n');

  const testTexts = [
    {
      text: `Hello! Welcome to Focus English A1 course. I'm Sarah, and I'll be helping you learn English.`,
      voice: 'nova',
      name: 'Sarah',
      path: 'audio/a1/test/test-sarah.mp3',
    },
    {
      text: `Good morning! My name is John. I'm from London, and I'm excited to be your teacher.`,
      voice: 'onyx',
      name: 'John',
      path: 'audio/a1/test/test-john.mp3',
    },
    {
      text: `Welcome to Unit 1. In this lesson, you will learn basic greetings and introductions.`,
      voice: 'shimmer',
      name: 'Narrator',
      path: 'audio/a1/test/test-narrator.mp3',
    },
  ];

  let successCount = 0;

  for (const test of testTexts) {
    const outputPath = path.join(process.cwd(), 'public', test.path);
    
    console.log(`\nGenerando audio de prueba: ${test.name}`);
    console.log(`   Voz: ${test.voice}`);
    console.log(`   Texto: "${test.text.substring(0, 50)}..."`);

    const success = await generateOpenAISpeech(test.text, test.voice as any, outputPath);

    if (success) {
      successCount++;
      console.log(`   ✅ Audio generado: ${test.path}`);
      console.log(`   🔗 URL: http://localhost:3000/${test.path}`);
    } else {
      console.error(`   ❌ Error generando audio de ${test.name}`);
    }
  }

  console.log(`\n\n📊 Resumen: ${successCount}/${testTexts.length} audios de prueba generados`);
  
  if (successCount === testTexts.length) {
    console.log('\n✅ Todos los audios de prueba se generaron correctamente!');
    console.log('\n🎧 Puedes probarlos en:');
    testTexts.forEach(test => {
      console.log(`   - http://localhost:3000/${test.path}`);
    });
  }
}

/**
 * List units and their status
 */
function listUnits() {
  console.log('📚 UNIDADES A1 DISPONIBLES');
  console.log('===========================\n');

  for (let i = 1; i <= 60; i++) {
    const unitData = loadUnitData(i);
    if (unitData) {
      const audioDir = path.join(process.cwd(), 'public', 'audio', 'a1', `unit${i}`);
      const hasAudio = fs.existsSync(audioDir);
      const audioCount = hasAudio ? fs.readdirSync(audioDir).filter(f => f.endsWith('.mp3')).length : 0;
      
      const status = audioCount >= 5 ? '✅' : audioCount > 0 ? '⚠️' : '❌';
      console.log(`${status} Unit ${i.toString().padStart(2)}: ${unitData.course.unit_title} (${audioCount}/5 audios)`);
    }
  }

  console.log('\n📊 Leyenda:');
  console.log('   ✅ = 5 audios completos');
  console.log('   ⚠️ = Audios parciales');
  console.log('   ❌ = Sin audios\n');
}

// Ejecutar según el comando
const command = process.argv[2];
const arg1 = process.argv[3];

if (command === 'test') {
  generateTestAudio();
} else if (command === 'units') {
  const startUnit = arg1 ? parseInt(arg1) : 1;
  const endUnit = process.argv[4] ? parseInt(process.argv[4]) : 30;
  generateA1Audios(startUnit, endUnit);
} else if (command === 'list') {
  listUnits();
} else {
  console.log('🎙️  GENERADOR DE AUDIOS - CURSO A1');
  console.log('===================================\n');
  console.log('Uso:');
  console.log('  npm run generate-audio:a1 test              - Generar 3 audios de prueba');
  console.log('  npm run generate-audio:a1 list              - Listar estado de unidades');
  console.log('  npm run generate-audio:a1 units [start end] - Generar audios de unidades');
  console.log('\nEjemplos:');
  console.log('  npm run generate-audio:a1 units 1 10   - Genera audios para unidades 1-10');
  console.log('  npm run generate-audio:a1 units 1 30   - Genera audios para unidades 1-30');
  console.log('\nVoces configuradas:');
  console.log('  🎙️ Sarah (Female)   - American accent, conversational');
  console.log('  🎙️ John (Male)      - British accent, professional');
  console.log('  🎙️ Narrator (Neutral) - Clear, instructional\n');
  console.log('Antes de ejecutar:');
  console.log('  1. Configura ELEVENLABS_API_KEY en .env.local');
  console.log('  2. Configura OPENAI_API_KEY en .env.local (fallback)');
  console.log('  3. Verifica que tienes créditos suficientes\n');
  console.log('💰 Costo estimado para Units 1-30:');
  console.log('  ElevenLabs: ~$2.70 (150 audios, ~15,000 caracteres)');
  console.log('  OpenAI TTS: ~$0.23 (si se usa como fallback)\n');
}
