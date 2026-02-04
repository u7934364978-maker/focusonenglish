// ============================================
// TEXT-TO-SPEECH SERVICE - ELEVENLABS INTEGRATION
// Sistema de generación de audio con voces naturales
// ============================================

import * as fs from 'fs';
import * as path from 'path';

import OpenAI from 'openai';

// Configuración de OpenAI
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY || '',
});

/**
 * Genera audio a partir de texto usando OpenAI
 */
export async function generateOpenAISpeech(
  text: string,
  voice: 'alloy' | 'echo' | 'fable' | 'onyx' | 'nova' | 'shimmer' = 'alloy',
  outputPath: string
): Promise<boolean> {
  try {
    if (!process.env.OPENAI_API_KEY) {
      throw new Error('OPENAI_API_KEY no está configurado');
    }

    const mp3 = await openai.audio.speech.create({
      model: "tts-1",
      voice: voice,
      input: text,
    });

    const buffer = Buffer.from(await mp3.arrayBuffer());

    // Crear el directorio si no existe
    const dir = path.dirname(outputPath);
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }

    fs.writeFileSync(outputPath, buffer);
    console.log(`✅ Audio OpenAI generado: ${outputPath}`);
    return true;
  } catch (error) {
    console.error(`❌ Error OpenAI TTS: ${error}`);
    return false;
  }
}

// Voice IDs de ElevenLabs (voces profesionales en inglés)
export const VOICE_IDS = {
  // Voces británicas
  british_male: 'cgSgspJ2msm6clMCkdW9', // British Male - Professional
  british_female: '21m00Tcm4TlvDq8ikWAM', // British Female - Rachel
  
  // Voces americanas
  american_male: 'ErXwobaYiN019PkySvjV', // American Male - Antoni
  american_female: 'EXAVITQu4vr4xnSDxMaL', // American Female - Bella
  
  // Voces australianas
  australian_male: 'bIHbv24MWmeRgasZH58o', // Australian Male - Will
  australian_female: 'ThT5KcBeYPX3keUQqHPh', // Australian Female - Dorothy
  
  // Voces adicionales
  narrator: 'TxGEqnHWrfWFTfGW9XjX', // Narrator - Josh
  young_female: 'jsCqWAovK2LkecY7zXl4', // Young Female - Freya
  young_male: 'onwK4e9ZLuTAKqWW03F9', // Young Male - Daniel
};

// Modelos de voz disponibles
export const VOICE_MODELS = {
  multilingual_v2: 'eleven_multilingual_v2', // Alta calidad, multi-idioma
  turbo_v2: 'eleven_turbo_v2', // Rápido y eficiente
  monolingual: 'eleven_monolingual_v1', // Solo inglés, muy natural
};

// Configuración de voz
interface VoiceSettings {
  stability: number; // 0-1 (0 = más variable, 1 = más estable)
  similarity_boost: number; // 0-1 (qué tan similar a la voz original)
  style?: number; // 0-1 (énfasis en estilo)
  use_speaker_boost?: boolean; // Mejora la claridad del hablante
}

// Configuración por defecto
const DEFAULT_SETTINGS: VoiceSettings = {
  stability: 0.5,
  similarity_boost: 0.75,
  style: 0.0,
  use_speaker_boost: true,
};

/**
 * Genera audio a partir de texto usando ElevenLabs
 * @param text Texto a convertir en audio
 * @param voiceId ID de la voz (de VOICE_IDS)
 * @param outputPath Ruta donde guardar el archivo de audio
 * @param settings Configuración de voz personalizada
 */
export async function generateSpeech(
  text: string,
  voiceId: string,
  outputPath: string,
  settings: VoiceSettings = DEFAULT_SETTINGS
): Promise<boolean> {
  try {
    const apiKey = process.env.ELEVENLABS_API_KEY;

    if (!apiKey) {
      throw new Error('ELEVENLABS_API_KEY no está configurado en .env');
    }

    // Construir la URL de la API
    const url = `https://api.elevenlabs.io/v1/text-to-speech/${voiceId}`;

    // Payload de la petición
    const payload = {
      text: text,
      model_id: VOICE_MODELS.multilingual_v2,
      voice_settings: settings,
    };

    // Hacer la petición a ElevenLabs
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Accept': 'audio/mpeg',
        'Content-Type': 'application/json',
        'xi-api-key': apiKey,
      },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      const errorData = await response.text();
      throw new Error(`ElevenLabs API error: ${response.status} - ${errorData}`);
    }

    // Obtener el audio como buffer
    const audioBuffer = await response.arrayBuffer();

    // Crear el directorio si no existe
    const dir = path.dirname(outputPath);
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }

    // Guardar el archivo
    fs.writeFileSync(outputPath, Buffer.from(audioBuffer));

    console.log(`✅ Audio generado: ${outputPath}`);
    console.log(`   Tamaño: ${(audioBuffer.byteLength / 1024).toFixed(2)} KB`);
    console.log(`   Voz: ${voiceId}`);

    return true;
  } catch (error) {
    console.error(`❌ Error generando audio: ${error}`);
    return false;
  }
}

/**
 * Genera audio con configuración específica para lectura de textos académicos
 */
export async function generateReadingAudio(
  text: string,
  voiceId: string,
  outputPath: string
): Promise<boolean> {
  const settings: VoiceSettings = {
    stability: 0.7, // Más estable para lectura
    similarity_boost: 0.8,
    style: 0.0,
    use_speaker_boost: true,
  };

  return generateSpeech(text, voiceId, outputPath, settings);
}

/**
 * Genera audio con configuración específica para conversaciones/diálogos
 */
export async function generateConversationAudio(
  text: string,
  voiceId: string,
  outputPath: string
): Promise<boolean> {
  const settings: VoiceSettings = {
    stability: 0.3, // Más variable para conversación natural
    similarity_boost: 0.75,
    style: 0.5, // Más énfasis en estilo
    use_speaker_boost: true,
  };

  return generateSpeech(text, voiceId, outputPath, settings);
}

/**
 * Genera audio con configuración específica para instrucciones/pronunciación
 */
export async function generateInstructionAudio(
  text: string,
  voiceId: string,
  outputPath: string
): Promise<boolean> {
  const settings: VoiceSettings = {
    stability: 0.9, // Muy estable y claro
    similarity_boost: 0.85,
    style: 0.0,
    use_speaker_boost: true,
  };

  return generateSpeech(text, voiceId, outputPath, settings);
}

/**
 * Obtiene información de uso de la API
 */
export async function getUsageInfo(): Promise<any> {
  try {
    const apiKey = process.env.ELEVENLABS_API_KEY;

    if (!apiKey) {
      throw new Error('ELEVENLABS_API_KEY no está configurado');
    }

    const response = await fetch('https://api.elevenlabs.io/v1/user', {
      headers: {
        'xi-api-key': apiKey,
      },
    });

    if (!response.ok) {
      throw new Error(`Error obteniendo información: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('❌ Error obteniendo información de uso:', error);
    return null;
  }
}

/**
 * Lista todas las voces disponibles
 */
export async function listAvailableVoices(): Promise<any[]> {
  try {
    const apiKey = process.env.ELEVENLABS_API_KEY;

    if (!apiKey) {
      throw new Error('ELEVENLABS_API_KEY no está configurado');
    }

    const response = await fetch('https://api.elevenlabs.io/v1/voices', {
      headers: {
        'xi-api-key': apiKey,
      },
    });

    if (!response.ok) {
      throw new Error(`Error listando voces: ${response.status}`);
    }

    const data = await response.json();
    return data.voices;
  } catch (error) {
    console.error('❌ Error listando voces:', error);
    return [];
  }
}

// Exportar todo
export default {
  generateSpeech,
  generateOpenAISpeech,
  generateReadingAudio,
  generateConversationAudio,
  generateInstructionAudio,
  getUsageInfo,
  listAvailableVoices,
  VOICE_IDS,
  VOICE_MODELS,
};
