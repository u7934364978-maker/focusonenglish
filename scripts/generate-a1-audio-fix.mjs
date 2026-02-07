import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import * as dotenv from 'dotenv';

dotenv.config({ path: '.env.local' });

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const CONTENT_DIR = path.join(__dirname, '../src/content/cursos/ingles-a1');
const PUBLIC_DIR = path.join(__dirname, '../public');

// We use the functions from the lib if possible, but for simplicity in a standalone script
// we can implement a basic version or import them if the environment allows.
// Since it's a .mjs script, importing from .ts might be tricky without ts-node.
// Let's use a simplified fetch-based approach similar to what's in src/lib/text-to-speech.ts

const VOICE_IDS = {
  american_female: 'EXAVITQu4vr4xnSDxMaL', // Bella
  british_female: '21m00Tcm4TlvDq8ikWAM', // Rachel
};

async function generateSpeech(text, voiceId, outputPath) {
  const apiKey = process.env.ELEVENLABS_API_KEY;
  if (!apiKey) throw new Error('ELEVENLABS_API_KEY missing');

  const response = await fetch(`https://api.elevenlabs.io/v1/text-to-speech/${voiceId}`, {
    method: 'POST',
    headers: {
      'Accept': 'audio/mpeg',
      'Content-Type': 'application/json',
      'xi-api-key': apiKey,
    },
    body: JSON.stringify({
      text,
      model_id: 'eleven_multilingual_v2',
      voice_settings: { stability: 0.5, similarity_boost: 0.75 }
    }),
  });

  if (!response.ok) {
    const error = await response.text();
    throw new Error(`ElevenLabs error: ${response.status} - ${error}`);
  }

  const buffer = Buffer.from(await response.arrayBuffer());
  const dir = path.dirname(outputPath);
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(outputPath, buffer);
  return true;
}

async function generateOpenAISpeech(text, outputPath) {
  const apiKey = process.env.OPENAI_API_KEY;
  if (!apiKey) throw new Error('OPENAI_API_KEY missing');

  const response = await fetch('https://api.openai.com/v1/audio/speech', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${apiKey}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      model: 'tts-1',
      voice: 'shimmer',
      input: text,
    }),
  });

  if (!response.ok) {
    const error = await response.text();
    throw new Error(`OpenAI error: ${response.status} - ${error}`);
  }

  const buffer = Buffer.from(await response.arrayBuffer());
  const dir = path.dirname(outputPath);
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(outputPath, buffer);
  return true;
}

function findAudioInteractions(obj, results = []) {
  if (!obj || typeof obj !== 'object') return results;

  if (obj.type === 'audio_player' && obj.audioUrl && obj.text) {
    results.push({
      url: obj.audioUrl,
      text: obj.text
    });
  }

  for (const value of Object.values(obj)) {
    if (typeof value === 'object') {
      findAudioInteractions(value, results);
    }
  }
  return results;
}

async function main() {
  console.log('🎙️  Generating missing A1 audio files...');

  const files = fs.readdirSync(CONTENT_DIR).filter(f => f.endsWith('.json'));
  const audioMap = new Map();

  for (const file of files) {
    const content = JSON.parse(fs.readFileSync(path.join(CONTENT_DIR, file), 'utf8'));
    const interactions = findAudioInteractions(content);
    interactions.forEach(i => audioMap.set(i.url, i.text));
  }

  console.log(`Found ${audioMap.size} unique audio references.`);

  let successCount = 0;
  let skipCount = 0;
  let errorCount = 0;

  const entries = Array.from(audioMap.entries());

  for (let i = 0; i < entries.length; i++) {
    const [url, text] = entries[i];
    const relativePath = url.startsWith('/') ? url.slice(1) : url;
    const outputPath = path.join(PUBLIC_DIR, relativePath);

    if (fs.existsSync(outputPath)) {
      skipCount++;
      continue;
    }

    console.log(`[${i + 1}/${entries.length}] Generating: "${text}" -> ${url}`);

    try {
      let success = false;
      try {
        success = await generateSpeech(text, VOICE_IDS.american_female, outputPath);
      } catch (e) {
        console.warn(`   ⚠️ ElevenLabs failed, trying OpenAI: ${e.message}`);
        success = await generateOpenAISpeech(text, outputPath);
      }

      if (success) {
        successCount++;
        console.log('   ✅ Success');
      } else {
        errorCount++;
        console.log('   ❌ Failed');
      }
      
      // Delay to avoid rate limiting
      await new Promise(r => setTimeout(r, 500));
    } catch (e) {
      errorCount++;
      console.error(`   ❌ Fatal error for "${text}": ${e.message}`);
    }
  }

  console.log('\n--- Final Summary ---');
  console.log(`✅ Generated: ${successCount}`);
  console.log(`⏭️ Skipped: ${skipCount}`);
  console.log(`❌ Errors: ${errorCount}`);
}

main().catch(console.error);
