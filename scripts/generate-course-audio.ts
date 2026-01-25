// ============================================
// GENERADOR DE AUDIOS PARA CURSO B2
// Genera todos los audios necesarios con voces naturales
// ============================================

// Cargar variables de entorno
import * as dotenv from 'dotenv';
dotenv.config({ path: '.env.local' });

import {
  generateReadingAudio,
  generateConversationAudio,
  generateInstructionAudio,
  VOICE_IDS,
  getUsageInfo,
} from '../src/lib/text-to-speech';
import { ALL_MODULES } from '../src/lib/course-data-b2';
import * as path from 'path';

// Mapeo de tipos de ejercicio a tipos de voz
const EXERCISE_VOICE_MAP: { [key: string]: string } = {
  listening: VOICE_IDS.british_female, // Rachel - British Female
  reading: VOICE_IDS.british_male, // British Male Professional
  speaking: VOICE_IDS.american_female, // Bella - American Female
  instruction: VOICE_IDS.narrator, // Josh - Narrator
  conversation: VOICE_IDS.young_female, // Freya - Young Female
};

interface AudioToGenerate {
  lessonId: string;
  exerciseId: string;
  text: string;
  voiceId: string;
  outputPath: string;
  type: 'listening' | 'reading' | 'conversation' | 'instruction';
}

/**
 * Recopila todos los audios que necesitan generarse
 */
function collectAudiosToGenerate(): AudioToGenerate[] {
  const audios: AudioToGenerate[] = [];

  // Iterar por todos los módulos y lecciones
  ALL_MODULES.forEach((module) => {
    module.lessons.forEach((lesson) => {
      lesson.exercises.forEach((exercise) => {
        // LISTENING EXERCISES
        if (exercise.type === 'listening' && 'audioUrl' in exercise) {
          const listeningEx = exercise as any;
          
          if (listeningEx.transcript) {
            const outputPath = path.join(
              process.cwd(),
              'public',
              listeningEx.audioUrl
            );

            audios.push({
              lessonId: lesson.id,
              exerciseId: exercise.id,
              text: listeningEx.transcript,
              voiceId: VOICE_IDS.british_female,
              outputPath,
              type: 'listening',
            });
          }
        }

        // SPEAKING/PRONUNCIATION EXERCISES (generar modelos de audio)
        if ((exercise.type === 'speaking' || exercise.type === 'pronunciation') && 'targetText' in exercise) {
          const speakingEx = exercise as any;
          
          if (speakingEx.targetText && speakingEx.modelAudioUrl) {
            const outputPath = path.join(
              process.cwd(),
              'public',
              speakingEx.modelAudioUrl
            );

            audios.push({
              lessonId: lesson.id,
              exerciseId: exercise.id,
              text: speakingEx.targetText,
              voiceId: VOICE_IDS.american_female,
              outputPath,
              type: 'instruction',
            });
          }
        }
      });
    });
  });

  return audios;
}

/**
 * Genera todos los audios
 */
async function generateAllAudios() {
  console.log('🎙️  GENERADOR DE AUDIOS PARA CURSO B2');
  console.log('=====================================\n');

  // Verificar uso de la API
  console.log('📊 Verificando uso de la API...');
  const usage = await getUsageInfo();
  
  if (usage) {
    console.log(`   Caracteres usados: ${usage.character_count || 0} / ${usage.character_limit || 'ilimitado'}`);
    console.log(`   Plan: ${usage.subscription?.tier || 'Free'}\n`);
  }

  // Recopilar audios
  const audios = collectAudiosToGenerate();
  console.log(`📝 Total de audios a generar: ${audios.length}\n`);

  // Generar cada audio
  let successCount = 0;
  let errorCount = 0;

  for (let i = 0; i < audios.length; i++) {
    const audio = audios[i];
    const progress = ((i + 1) / audios.length * 100).toFixed(1);

    console.log(`\n[${i + 1}/${audios.length}] (${progress}%) Generando audio:`);
    console.log(`   Lección: ${audio.lessonId}`);
    console.log(`   Ejercicio: ${audio.exerciseId}`);
    console.log(`   Tipo: ${audio.type}`);
    console.log(`   Tamaño texto: ${audio.text.length} caracteres`);

    try {
      let success = false;

      // Usar la función apropiada según el tipo
      switch (audio.type) {
        case 'listening':
        case 'conversation':
          success = await generateConversationAudio(
            audio.text,
            audio.voiceId,
            audio.outputPath
          );
          break;
        case 'reading':
          success = await generateReadingAudio(
            audio.text,
            audio.voiceId,
            audio.outputPath
          );
          break;
        case 'instruction':
          success = await generateInstructionAudio(
            audio.text,
            audio.voiceId,
            audio.outputPath
          );
          break;
      }

      if (success) {
        successCount++;
        console.log(`   ✅ Generado exitosamente`);
      } else {
        errorCount++;
        console.log(`   ❌ Error al generar`);
      }

      // Pequeña pausa entre peticiones para no saturar la API
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
  console.log(`✅ Exitosos: ${successCount}`);
  console.log(`❌ Errores: ${errorCount}`);
  console.log(`📁 Total: ${audios.length}`);
  console.log(`📈 Tasa de éxito: ${((successCount / audios.length) * 100).toFixed(1)}%`);
  console.log('\n✨ Proceso completado!\n');

  // Verificar uso final
  const finalUsage = await getUsageInfo();
  if (finalUsage) {
    console.log('📊 Uso final de la API:');
    console.log(`   Caracteres usados: ${finalUsage.character_count || 0} / ${finalUsage.character_limit || 'ilimitado'}`);
  }
}

/**
 * Genera un solo audio de prueba
 */
async function generateTestAudio() {
  console.log('🎙️  Generando audio de prueba...\n');

  const testText = `Welcome to Focus English B2 Exam Preparation Course. 
  This course is designed to help you master the Cambridge B2 First exam. 
  You will learn advanced grammar structures, sophisticated vocabulary, 
  and develop all four language skills: reading, writing, listening, and speaking.`;

  const outputPath = path.join(
    process.cwd(),
    'public',
    'audio',
    'test-audio.mp3'
  );

  const success = await generateInstructionAudio(
    testText,
    VOICE_IDS.narrator,
    outputPath
  );

  if (success) {
    console.log('\n✅ Audio de prueba generado exitosamente!');
    console.log(`   Ubicación: ${outputPath}`);
    console.log('\n   Puedes reproducirlo en: http://localhost:3000/audio/test-audio.mp3');
  } else {
    console.error('\n❌ Error generando audio de prueba');
  }
}

// Ejecutar según el argumento
const command = process.argv[2];

if (command === 'test') {
  generateTestAudio();
} else if (command === 'all') {
  generateAllAudios();
} else {
  console.log('🎙️  GENERADOR DE AUDIOS - CURSO B2');
  console.log('=====================================\n');
  console.log('Uso:');
  console.log('  npm run generate-audio test  - Generar audio de prueba');
  console.log('  npm run generate-audio all   - Generar todos los audios\n');
  console.log('Antes de ejecutar:');
  console.log('  1. Configura ELEVENLABS_API_KEY en .env');
  console.log('  2. Asegúrate de tener créditos en tu cuenta de ElevenLabs\n');
}
