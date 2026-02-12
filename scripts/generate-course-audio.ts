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
  generateOpenAISpeech,
  VOICE_IDS,
  getUsageInfo,
} from '../src/lib/text-to-speech';
import { ALL_MODULES } from '../src/lib/course-data-b2';
import { TOEFL_COURSES } from '../src/lib/toefl-units';
import { B1_COURSE } from '../src/lib/course/b1';
import type { Module, Lesson, Exercise } from '../src/lib/exercise-types';
import { UnitData, PremiumInteraction, PremiumBlock } from '../src/types/premium-course';
import * as path from 'path';
import * as fs from 'fs';

/**
 * Genera el audio usando ElevenLabs con fallback a OpenAI
 */
async function generateWithFallback(audio: AudioToGenerate): Promise<boolean> {
  // Si el archivo ya existe y no estamos forzando, saltar
  if (fs.existsSync(audio.outputPath)) {
    console.log(`   ⏭️ El archivo ya existe: ${path.basename(audio.outputPath)}`);
    return true;
  }

  let success = false;
  
  // Intentar con ElevenLabs primero
  console.log(`   Attempting ElevenLabs with voice: ${audio.voiceId}...`);
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
  } catch (e) {
    console.log(`   ⚠️ ElevenLabs falló: ${e instanceof Error ? e.message : String(e)}`);
  }

  // Fallback a OpenAI si falla ElevenLabs
  if (!success) {
    console.log(`   🔄 Usando FALLBACK: OpenAI TTS (Voice: shimmer)...`);
    success = await generateOpenAISpeech(audio.text, 'shimmer', audio.outputPath);
  }

  return success;
}

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
  
  // 1. Process Legacy/Standard Courses
  const allAvailableModules = [...(ALL_MODULES as any[])];

  allAvailableModules.forEach((module: any) => {
    const lessons = module.lessons || module.units || [];
    lessons.forEach((lesson: any) => {
      if (!lesson.exercises) return;
      lesson.exercises.forEach((exercise: any) => {
        // LISTENING EXERCISES
        if (((exercise.type as any) === 'listening' || (exercise.type as any) === 'listening-comprehension') && 'audioUrl' in exercise) {
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

        // SPEAKING/PRONUNCIATION EXERCISES
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

  // 1.5 Process B1 Course
  B1_COURSE.units.forEach((unit: any) => {
    unit.exercises.forEach((exercise: any) => {
      if (exercise.transcript && exercise.audioUrl) {
        const outputPath = path.join(process.cwd(), 'public', exercise.audioUrl);
        
        // Ensure directory exists
        const dir = path.dirname(outputPath);
        if (!fs.existsSync(dir)) {
          fs.mkdirSync(dir, { recursive: true });
        }

        audios.push({
          lessonId: `b1-u${unit.id}`,
          exerciseId: exercise.id,
          text: exercise.transcript,
          voiceId: VOICE_IDS.british_female, // Default for B1
          outputPath,
          type: 'listening',
        });
      }
    });
  });

  // 2. Process TOEFL Courses (Premium Structure)
  TOEFL_COURSES.forEach(course => {
    course.units.forEach((unit: any) => {
      const unitData = unit as UnitData;
      unitData.blocks.forEach(block => {
        block.content.forEach((content: any) => {
          // Check for audioUrl and transcript/tts_en
          if (content.audioUrl && (content.transcript || content.tts_en || content.stimulus_en)) {
            const outputPath = path.join(process.cwd(), 'public', content.audioUrl);
            
            // Choose voice based on type
            let voiceId = VOICE_IDS.narrator;
            const type = content.block_type || content.type || '';
            if (type.includes('listening')) voiceId = VOICE_IDS.british_female;
            if (type.includes('speaking')) voiceId = VOICE_IDS.american_female;
            if (type.includes('conversation')) voiceId = VOICE_IDS.young_female;

            audios.push({
              lessonId: unitData.course.unit_id,
              exerciseId: content.interaction_id || 'unknown',
              text: (content.transcript || content.tts_en || content.stimulus_en) as string,
              voiceId,
              outputPath,
              type: 'listening'
            });
          } else if ((content.block_type || content.type || '').includes('listening') || (content.block_type || content.type || '').includes('speaking')) {
              // Automatically assign audioUrl if missing but text exists
              const text = content.transcript || content.tts_en || content.stimulus_en;
              if (text && !content.audioUrl) {
                  const unitId = unitData.course.unit_id;
                  const intId = content.interaction_id || 'q';
                  const audioPath = `audio/toefl/${unitId}-${intId}.mp3`;
                  const outputPath = path.join(process.cwd(), 'public', audioPath);
                  
                  let voiceId = VOICE_IDS.narrator;
                  const type = content.block_type || content.type || '';
                  if (type.includes('listening')) voiceId = VOICE_IDS.british_female;
                  if (type.includes('speaking')) voiceId = VOICE_IDS.american_female;

                  audios.push({
                    lessonId: unitId,
                    exerciseId: intId,
                    text: text as string,
                    voiceId,
                    outputPath,
                    type: 'listening'
                  });
                  
                  // In a real scenario we'd want to save this back to the file, 
                  // but for now we just generate it so it can be used.
              }
          }
          
          // Check for video scenes with tts_en
          if (content.video?.scenes) {
            content.video.scenes.forEach((scene: any) => {
              if (scene.audioUrl && scene.tts_en) {
                const outputPath = path.join(process.cwd(), 'public', scene.audioUrl);
                audios.push({
                  lessonId: unitData.course.unit_id,
                  exerciseId: scene.scene_id,
                  text: scene.tts_en,
                  voiceId: VOICE_IDS.young_female,
                  outputPath,
                  type: 'conversation'
                });
              }
            });
          }
        });
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
      // Usar la función con fallback
      const success = await generateWithFallback(audio);

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

  const success = await generateWithFallback({
    lessonId: 'test',
    exerciseId: 'test',
    text: testText,
    voiceId: VOICE_IDS.narrator,
    outputPath: outputPath,
    type: 'instruction'
  });

  if (success) {
    console.log('\n✅ Audio de prueba generado exitosamente!');
    console.log(`   Ubicación: ${outputPath}`);
    console.log('\n   Puedes reproducirlo en: http://localhost:3000/audio/test-audio.mp3');
  } else {
    console.error('\n❌ Error generando audio de prueba');
  }
}

/**
 * Genera audios para una unidad específica
 */
async function generateUnitAudios(unitId: string) {
  console.log(`🎙️  GENERADOR DE AUDIOS - UNIDAD ${unitId}`);
  console.log('=====================================\n');

  // Recopilar todos los audios
  const allAudios = collectAudiosToGenerate();
  
  // Filtrar por unidad
  const audios = allAudios.filter(a => a.lessonId === unitId || a.lessonId === `b1-u${unitId}`);
  
  if (audios.length === 0) {
    console.log(`⚠️ No se encontraron audios para la unidad ${unitId}`);
    return;
  }

  console.log(`📝 Total de audios a generar para la unidad ${unitId}: ${audios.length}\n`);

  let successCount = 0;
  let errorCount = 0;

  for (let i = 0; i < audios.length; i++) {
    const audio = audios[i];
    console.log(`\n[${i + 1}/${audios.length}] Generando: ${audio.exerciseId}`);
    
    try {
      const success = await generateWithFallback(audio);
      if (success) successCount++;
      else errorCount++;
    } catch (e) {
      errorCount++;
      console.error(`   ❌ Error: ${e}`);
    }
  }

  console.log(`\n✅ Completado: ${successCount} exitosos, ${errorCount} errores.`);
}

// Ejecutar según el argumento
const command = process.argv[2];
const arg2 = process.argv[3];

if (command === 'test') {
  generateTestAudio();
} else if (command === 'all') {
  generateAllAudios();
} else if (command === 'unit' && arg2) {
  generateUnitAudios(arg2);
} else {
  console.log('🎙️  GENERADOR DE AUDIOS - CURSO B2');
  console.log('=====================================\n');
  console.log('Uso:');
  console.log('  npm run generate-audio test     - Generar audio de prueba');
  console.log('  npm run generate-audio all      - Generar todos los audios');
  console.log('  npm run generate-audio unit 1   - Generar audios para la unidad 1\n');
  console.log('Antes de ejecutar:');
  console.log('  1. Configura ELEVENLABS_API_KEY en .env');
  console.log('  2. Asegúrate de tener créditos en tu cuenta de ElevenLabs\n');
}
