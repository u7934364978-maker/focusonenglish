/**
 * GENERADOR DE AUDIOS PARA DUOLINGO A1 - UNIT 1 (MJS)
 * Procesa el JSON de la unidad y genera archivos MP3 para todo el texto en inglés.
 */

import * as fs from 'fs';
import * as path from 'path';
import * as crypto from 'crypto';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';

dotenv.config({ path: '.env.local' });

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const UNIT_PATH = path.join(process.cwd(), 'src/content/cursos/duolingo-a1/unit1.json');
const AUDIO_DIR = path.join(process.cwd(), 'public/audio/duolingo-a1');
const AUDIO_BASE_URL = '/audio/duolingo-a1';

const ELEVENLABS_API_KEY = process.env.ELEVENLABS_API_KEY;

if (!ELEVENLABS_API_KEY) {
  console.error('❌ ELEVENLABS_API_KEY no encontrada en .env.local');
  process.exit(1);
}

// Voice IDs
const VOICES = [
  '21m00Tcm4TlvDq8ikWAM', // Rachel
  'ErXwobaYiN019PkySvjV', // Antoni
  'EXAVITQu4vr4xnSDxMaL', // Bella
  'jsCqWAovK2LkecY7zXl4', // Freya
];

let voiceIndex = 0;
function getNextVoice() {
  const voice = VOICES[voiceIndex];
  voiceIndex = (voiceIndex + 1) % VOICES.length;
  return voice;
}

async function generateSpeech(text, voiceId, outputPath) {
  try {
    const url = `https://api.elevenlabs.io/v1/text-to-speech/${voiceId}`;
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Accept': 'audio/mpeg',
        'Content-Type': 'application/json',
        'xi-api-key': ELEVENLABS_API_KEY,
      },
      body: JSON.stringify({
        text,
        model_id: 'eleven_multilingual_v2',
        voice_settings: {
          stability: 0.5,
          similarity_boost: 0.75,
        },
      }),
    });

    if (!response.ok) {
      const errorData = await response.text();
      console.error(`❌ Error de ElevenLabs: ${response.status} - ${errorData}`);
      return false;
    }

    const arrayBuffer = await response.arrayBuffer();
    fs.writeFileSync(outputPath, Buffer.from(arrayBuffer));
    console.log(`✅ Audio guardado: ${outputPath}`);
    return true;
  } catch (error) {
    console.error(`❌ Error de red: ${error.message}`);
    return false;
  }
}

async function processUnit() {
  console.log('🎙️ Iniciando generación de audios para Unit 1...');

  if (!fs.existsSync(UNIT_PATH)) {
    console.error(`❌ No se encontró el archivo: ${UNIT_PATH}`);
    return;
  }

  const unit = JSON.parse(fs.readFileSync(UNIT_PATH, 'utf-8'));

  if (!fs.existsSync(AUDIO_DIR)) {
    fs.mkdirSync(AUDIO_DIR, { recursive: true });
  }

  async function traverse(obj) {
    if (!obj || typeof obj !== 'object') return;

    if (Array.isArray(obj)) {
      for (const item of obj) {
        await traverse(item);
      }
      return;
    }

    const textToSpeak = obj.tts_en || obj.stimulus_en;
    
    if (textToSpeak && typeof textToSpeak === 'string') {
      const hash = crypto.createHash('md5').update(textToSpeak).digest('hex');
      const filename = `${hash}.mp3`;
      const outputPath = path.join(AUDIO_DIR, filename);
      const audioUrl = `${AUDIO_BASE_URL}/${filename}`;

      if (!fs.existsSync(outputPath)) {
        console.log(`🔊 Generando: "${textToSpeak}"`);
        const success = await generateSpeech(textToSpeak, getNextVoice(), outputPath);
        if (success) {
          obj.audioUrl = audioUrl;
        }
        // Delay to avoid rate limiting
        await new Promise(resolve => setTimeout(resolve, 1000));
      } else {
        console.log(`⏩ Saltando (ya existe): "${textToSpeak}"`);
        obj.audioUrl = audioUrl;
      }
    }

    for (const key in obj) {
      if (key !== 'tts_en' && key !== 'stimulus_en') {
        await traverse(obj[key]);
      }
    }
  }

  await traverse(unit);

  fs.writeFileSync(UNIT_PATH, JSON.stringify(unit, null, 2));
  console.log('✅ Proceso completado. JSON actualizado con audioUrls.');
}

processUnit().catch(console.error);
