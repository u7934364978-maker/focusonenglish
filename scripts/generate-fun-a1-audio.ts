import * as fs from 'fs';
import * as path from 'path';
import * as crypto from 'crypto';
import * as dotenv from 'dotenv';
dotenv.config({ path: '.env.local' });

import { generateSpeech, VOICE_IDS } from '../src/lib/text-to-speech';

const COURSE_DIR = path.join(process.cwd(), 'src/content/cursos/ingles-a1');
const AUDIO_BASE_DIR = path.join(process.cwd(), 'public/audio/courses/ingles-a1/shared');

/**
 * Get hash of text (must match python get_audio_path)
 */
function getHash(text: string): string {
  const cleanText = text.trim().toLowerCase();
  return crypto.createHash('md5').update(cleanText).digest('hex');
}

/**
 * Collect unique texts from all 100 units
 */
function collectUniqueTexts(): Set<string> {
  const uniqueTexts = new Set<string>();
  
  for (let i = 1; i <= 60; i++) {
    const filePath = path.join(COURSE_DIR, `unit${i}.json`);
    if (fs.existsSync(filePath)) {
      const data = JSON.parse(fs.readFileSync(filePath, 'utf-8'));
      data.blocks.forEach((block: any) => {
        block.content.forEach((item: any) => {
          if (item.stimulus_en) {
            uniqueTexts.add(item.stimulus_en);
          }
        });
      });
    }
  }
  
  return uniqueTexts;
}

async function main() {
  console.log('🎙️  GENERADOR DE AUDIOS COMPARTIDOS A1');
  console.log('=====================================\n');

  if (!fs.existsSync(AUDIO_BASE_DIR)) {
    fs.mkdirSync(AUDIO_BASE_DIR, { recursive: true });
  }

  const texts = collectUniqueTexts();
  console.log(`📝 Textos únicos encontrados: ${texts.size}\n`);

  const textList = Array.from(texts);
  let successCount = 0;
  let skippedCount = 0;

  for (let i = 0; i < textList.length; i++) {
    const text = textList[i];
    const hash = crypto.createHash('md5').update(text.trim().toLowerCase()).digest('hex');
    const outputPath = path.join(AUDIO_BASE_DIR, `${hash}.mp3`);

    if (fs.existsSync(outputPath)) {
      skippedCount++;
      continue;
    }

    console.log(`[${i + 1}/${textList.length}] Generando: "${text}"`);
    
    // Using American Female (Bella) for A1 for clarity
    const success = await generateSpeech(text, VOICE_IDS.american_female, outputPath);
    
    if (success) {
      successCount++;
    }

    // Rate limiting to avoid API throttling
    await new Promise(resolve => setTimeout(resolve, 300));
  }

  console.log('\n✅ Proceso completado');
  console.log(`   Generados: ${successCount}`);
  console.log(`   Omitidos (ya existen): ${skippedCount}`);
}

main().catch(console.error);
