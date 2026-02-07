import * as fs from 'fs';
import * as path from 'path';
import * as dotenv from 'dotenv';
import { generateOpenAISpeech } from '../src/lib/text-to-speech';

dotenv.config({ path: '.env.local' });

const A1_CONTENT_PATH = 'src/content/cursos/ingles-a1';
const AUDIO_OUTPUT_DIR = 'public/audio/courses/ingles-a1/expansion';

async function run() {
  // Generate system audios first
  const systemAudios = [
    { text: 'Correct!', fileName: 'correct.mp3' },
    { text: 'Wrong answer, try again.', fileName: 'wrong.mp3' }
  ];

  for (const sys of systemAudios) {
    const outputPath = path.join(process.cwd(), 'public/audio', sys.fileName);
    if (!fs.existsSync(outputPath)) {
      console.log(`Generating system audio: ${sys.fileName}`);
      await generateOpenAISpeech(sys.text, 'alloy', outputPath);
    }
  }

  const files = fs.readdirSync(A1_CONTENT_PATH).filter(f => f.endsWith('.json'));
  
  let totalGenerated = 0;

  for (const file of files) {
    const filePath = path.join(A1_CONTENT_PATH, file);
    const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));
    const unitId = file.replace('.json', '');
    let modified = false;

    if (!data.blocks) continue;

    for (const block of data.blocks) {
      if (!block.content) continue;

      for (const interaction of block.content) {
        // Only process expansion exercises or those without audio
        if (interaction.interaction_id?.includes('_EXP_')) {
          // Identify text to speak
          // For expansion MCQs, prompt_es often contains the English sentence to complete
          let textToSpeak = '';
          
          if (interaction.type === 'multiple_choice') {
            textToSpeak = interaction.prompt_es;
          } else if (interaction.stimulus_en) {
            textToSpeak = interaction.stimulus_en;
          }

          if (textToSpeak && !interaction.audioUrl) {
            const fileName = `${interaction.interaction_id}.mp3`.toLowerCase();
            const outputPath = path.join(process.cwd(), AUDIO_OUTPUT_DIR, fileName);
            const publicPath = `/${AUDIO_OUTPUT_DIR}/${fileName}`;

            console.log(`Generating audio for ${interaction.interaction_id}: "${textToSpeak}"`);
            
            const success = await generateOpenAISpeech(textToSpeak, 'alloy', outputPath);
            
            if (success) {
              interaction.audioUrl = publicPath;
              modified = true;
              totalGenerated++;
            }
          }
        }
      }
    }

    if (modified) {
      fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
      console.log(`Updated ${file} with new audio URLs.`);
    }
  }

  console.log(`\nFinished! Total audios generated: ${totalGenerated}`);
}

run().catch(console.error);
