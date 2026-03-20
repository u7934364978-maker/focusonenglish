/**
 * Generador de audios para ejercicios B2 de tipo `pronunciation`.
 *
 * Convencion:
 *  - URL esperada en UI: /audio/b2-speaking/<exercise.id>.mp3
 *  - Archivo real en disco: public/audio/b2-speaking/<exercise.id>.mp3
 *
 * Uso (ejemplo):
 *  npx ts-node --esm scripts/generate-b2-speaking-audios.ts --from 61 --to 100
 */

import * as dotenv from 'dotenv';
dotenv.config({ path: '.env.local' });

import * as fs from 'fs';
import * as path from 'path';

import { generateInstructionAudio, generateOpenAISpeech, VOICE_IDS } from '../src/lib/text-to-speech';

const args = process.argv.slice(2);
const getArg = (name: string, fallback: string) => {
  const idx = args.indexOf(name);
  if (idx === -1) return fallback;
  return args[idx + 1] ?? fallback;
};

const fromUnit = Number(getArg('--from', '61'));
const toUnit = Number(getArg('--to', '100'));

function extractEnglishFromMarkup(s: string): string {
  // [[English|Spanish]] -> English
  let out = s.replace(/\[\[([^|\]]+)\|[^\]]+\]\]/g, '$1');
  // [[English]] -> English (si existe)
  out = out.replace(/\[\[([^|\]]+)\]\]/g, '$1');
  return out.trim();
}

function looksLikeBlankOrPlaceholder(s: string): boolean {
  // Skip placeholders like "____" or bracketed tokens.
  return s.includes('____') || s.includes('[') || s.includes(']');
}

async function generateWithFallback(text: string, outputPath: string) {
  // ElevenLabs first
  let ok = await generateInstructionAudio(text, VOICE_IDS.american_female, outputPath);
  if (!ok) {
    // Fallback to OpenAI TTS
    ok = await generateOpenAISpeech(text, 'shimmer', outputPath);
  }
  return ok;
}

async function main() {
  const audioRelBase = 'audio/b2-speaking';
  const publicDir = path.join(process.cwd(), 'public');

  let generated = 0;
  let skipped = 0;
  let failed = 0;

  console.log(`🎙️ Generando audios B2 pronunciation para unidades ${fromUnit}..${toUnit}`);

  for (let unitId = fromUnit; unitId <= toUnit; unitId++) {
    const unitModulePath = `../src/lib/course/b2/unit-${unitId}.ts`;
    try {
      // CommonJS require para evitar problemas de resolución ESM con imports sin extensión.
      // eslint-disable-next-line @typescript-eslint/no-var-requires
      const unitModule: any = require(unitModulePath);
      const exportName = `UNIT_${String(unitId)}_EXERCISES`;
      const exercises: any[] =
        unitModule[exportName] || unitModule[`UNIT_${unitId}_EXERCISES`] || unitModule.default || [];

      // Debug/verification logs (small, for early detection)
      const total = Array.isArray(exercises) ? exercises.length : 0;
      const pronunCount = Array.isArray(exercises)
        ? exercises.filter((e: any) => e?.type === 'pronunciation').length
        : 0;
      console.log(`- [unit ${unitId}] totalExercises=${total} pronunciation=${pronunCount}`);

      for (const ex of exercises) {
      if (ex?.type !== 'pronunciation') continue;
      if (!ex?.id) continue;

      const targetTextRaw: string | undefined = ex?.content?.targetText;
      if (!targetTextRaw) {
        skipped++;
        continue;
      }

      const englishText = extractEnglishFromMarkup(String(targetTextRaw));
      if (!englishText || looksLikeBlankOrPlaceholder(englishText)) {
        skipped++;
        continue;
      }

      const audioRel = `${audioRelBase}/${ex.id}.mp3`;
      const outputPath = path.join(publicDir, audioRel);

      if (fs.existsSync(outputPath)) {
        skipped++;
        continue;
      }

      try {
        console.log(`- [unit ${unitId}] ${ex.id}`);
        const ok = await generateWithFallback(englishText, outputPath);
        if (ok) generated++;
        else failed++;
      } catch (e) {
        console.error(`❌ Error generando ${ex.id}:`, e);
        failed++;
      }
    }
    } catch (e) {
      // If some units don't exist or can't be imported, just skip.
      console.error(`❌ Import fallido para unit ${unitId}:`, e);
      continue;
    }
  }

  console.log(`\nResumen: generados=${generated}, saltados=${skipped}, fallidos=${failed}`);
  process.exit(failed > 0 ? 1 : 0);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});

