import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import * as dotenv from 'dotenv';

dotenv.config({ path: '.env.local' });

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const CONTENT_DIR = path.join(__dirname, '../src/content/cursos/ingles-a1');
const PUBLIC_DIR = path.join(__dirname, '../public');
const AUDIO_OUTPUT_DIR = 'audio/courses/ingles-a1/expansion';

const VOICE_ID = 'EXAVITQu4vr4xnSDxMaL'; // Bella (American Female)

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

function getInteractionText(interaction) {
  if (interaction.type === 'multiple_choice' && interaction.prompt_es?.startsWith('Traduce:')) {
    // For translation MCQs, the first option is usually the correct English translation
    return interaction.options?.[0]?.text || '';
  }
  
  if (interaction.stimulus_en) return interaction.stimulus_en;
  if (interaction.text) return interaction.text;
  
  // Fallback to prompt_es if it looks like English (rare in this course for non-listening)
  if (interaction.prompt_es && !interaction.prompt_es.includes('Traduce') && /^[a-zA-Z\s,.\?!]+$/.test(interaction.prompt_es)) {
    return interaction.prompt_es;
  }
  
  return '';
}

async function main() {
  console.log('🎙️  Generating missing A1 Expansion audio files...');

  const files = fs.readdirSync(CONTENT_DIR).filter(f => f.endsWith('.json'));
  let totalGenerated = 0;

  for (const file of files) {
    const filePath = path.join(CONTENT_DIR, file);
    const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));
    let modified = false;

    const processInteractions = async (obj) => {
      if (!obj || typeof obj !== 'object') return;

      if (obj.interaction_id?.includes('_EXP_') && !obj.audioUrl) {
        const textToSpeak = getInteractionText(obj);
        
        if (textToSpeak && textToSpeak.length > 1) {
          const fileName = `${obj.interaction_id.toLowerCase()}.mp3`;
          const outputPath = path.join(PUBLIC_DIR, AUDIO_OUTPUT_DIR, fileName);
          const publicUrl = `/${AUDIO_OUTPUT_DIR}/${fileName}`;

          console.log(`Generating for ${obj.interaction_id} in ${file}: "${textToSpeak}"`);
          
          try {
            const success = await generateSpeech(textToSpeak, VOICE_ID, outputPath);
            if (success) {
              obj.audioUrl = publicUrl;
              modified = true;
              totalGenerated++;
            }
          } catch (e) {
            console.error(`  ❌ Error generating for ${obj.interaction_id}: ${e.message}`);
          }
          
          // Small delay
          await new Promise(r => setTimeout(r, 300));
        }
      }

      for (const value of Object.values(obj)) {
        if (typeof value === 'object') {
          await processInteractions(value);
        }
      }
    };

    await processInteractions(data);

    if (modified) {
      fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
      console.log(`✅ Updated ${file}`);
    }
  }

  console.log(`\n✨ Finished! Total expansion audios generated: ${totalGenerated}`);
}

main().catch(console.error);
