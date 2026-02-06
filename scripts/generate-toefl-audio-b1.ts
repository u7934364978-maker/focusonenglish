
import * as dotenv from 'dotenv';
dotenv.config({ path: '.env.local' });

import {
  generateConversationAudio,
  generateInstructionAudio,
  generateOpenAISpeech,
  VOICE_IDS,
  getUsageInfo,
} from '../src/lib/text-to-speech';
import { TOEFL_COURSES } from '../src/lib/toefl-units';
import { UnitData } from '../src/types/premium-course';
import * as path from 'path';
import * as fs from 'fs';

interface AudioToGenerate {
  lessonId: string;
  exerciseId: string;
  text: string;
  voiceId: string;
  outputPath: string;
  type: 'listening' | 'reading' | 'conversation' | 'instruction';
}

async function generateWithFallback(audio: AudioToGenerate): Promise<boolean> {
  if (fs.existsSync(audio.outputPath)) {
    console.log(`   ⏭️ Skip: ${path.basename(audio.outputPath)}`);
    return true;
  }

  let success = false;
  console.log(`   Generating: ${audio.exerciseId} (${audio.text.substring(0, 30)}...)`);
  
  try {
    const dir = path.dirname(audio.outputPath);
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }

    // Try ElevenLabs
    success = await generateConversationAudio(audio.text, audio.voiceId, audio.outputPath);
    
    // If ElevenLabs fails, fallback to OpenAI
    if (!success) {
      console.log(`   ⚠️ Falling back to OpenAI for: ${audio.exerciseId}`);
      // Use 'shimmer' or 'alloy' for general fallback
      success = await generateOpenAISpeech(audio.text, 'shimmer', audio.outputPath);
    }

    return success;
  } catch (error) {
    console.error(`   ❌ Error: ${error}`);
    // One more attempt with OpenAI if exception occurred
    try {
        success = await generateOpenAISpeech(audio.text, 'shimmer', audio.outputPath);
        return success;
    } catch (e) {
        return false;
    }
  }
}

async function main() {
  const startWeek = 1;
  const endWeek = 5;
  const level = 'b1';

  console.log(`🎙️  Generating TOEFL ${level.toUpperCase()} Audios (Weeks ${startWeek}-${endWeek})`);
  
  const usage = await getUsageInfo();
  if (usage) {
    console.log(`📊 Usage: ${usage.character_count || 0} / ${usage.character_limit || 'unknown'}\n`);
  }

  const audios: AudioToGenerate[] = [];

  const b1Course = TOEFL_COURSES.find(c => c.id === `toefl-${level}`);
  if (!b1Course) {
    console.error('Course not found');
    return;
  }

  const targetedUnits = b1Course.units.filter((u: any) => {
      const unitId = (u as UnitData).course.unit_id;
      const weekNum = parseInt(unitId.split('-w')[1]);
      return weekNum >= startWeek && weekNum <= endWeek;
  });

  targetedUnits.forEach((unit: any) => {
    const unitData = unit as UnitData;
    unitData.blocks.forEach(block => {
      block.content.forEach((content: any) => {
        const text = content.transcript || content.tts_en || content.stimulus_en;
        const type = content.block_type || content.type || '';
        
        if (text && (type.includes('listening') || type.includes('speaking') || type.includes('conversation'))) {
          const unitId = unitData.course.unit_id;
          const intId = content.interaction_id || 'q';
          const audioPath = content.audioUrl || `audio/toefl/${unitId}-${intId}.mp3`;
          const outputPath = path.join(process.cwd(), 'public', audioPath);
          
          let voiceId = VOICE_IDS.british_female;
          if (type.includes('speaking')) voiceId = VOICE_IDS.american_female;
          if (type.includes('conversation')) voiceId = VOICE_IDS.young_female;

          audios.push({
            lessonId: unitId,
            exerciseId: intId,
            text: text as string,
            voiceId,
            outputPath,
            type: 'listening'
          });
        }
      });
    });
  });

  console.log(`📝 Total audios to check/generate: ${audios.length}\n`);

  let successCount = 0;
  for (let i = 0; i < audios.length; i++) {
    const success = await generateWithFallback(audios[i]);
    if (success) successCount++;
    // Small delay
    await new Promise(r => setTimeout(r, 200));
  }

  console.log(`\n✅ Finished: ${successCount}/${audios.length} audios ready.`);
}

main().catch(console.error);
