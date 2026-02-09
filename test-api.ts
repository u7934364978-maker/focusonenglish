import OpenAI from 'openai';
import dotenv from 'dotenv';
dotenv.config();

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

async function test() {
  const models = ["gpt-4o-mini", "gpt-4o", "gpt-3.5-turbo"];
  for (const model of models) {
    console.log(`Testing model: ${model}`);
    try {
      const response = await openai.chat.completions.create({
        model: model,
        messages: [{ role: "user", content: "Say hello" }],
      });
      console.log(`  Success: ${response.choices[0].message.content}`);
      return;
    } catch (error: any) {
      console.error(`  Failed: ${error.message}`);
    }
  }
}

test();
