import fs from 'fs';
import path from 'path';
import OpenAI from 'openai';
import dotenv from 'dotenv';

dotenv.config({ path: '.env.local' });

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY || '',
});

async function generate(text, fileName) {
  const outputPath = path.join(process.cwd(), 'public/audio', fileName);
  console.log(`Generating ${fileName}...`);
  try {
    const mp3 = await openai.audio.speech.create({
      model: "tts-1",
      voice: "alloy",
      input: text,
    });
    const buffer = Buffer.from(await mp3.arrayBuffer());
    fs.mkdirSync(path.dirname(outputPath), { recursive: true });
    fs.writeFileSync(outputPath, buffer);
    console.log(`✅ Success: ${outputPath}`);
  } catch (e) {
    console.error(`❌ Failed: ${e.message}`);
  }
}

async function run() {
  await generate('Correct!', 'correct.mp3');
  await generate('Wrong answer, try again.', 'wrong.mp3');
}

run();
