import OpenAI from 'openai';
import * as fs from 'fs';
import * as path from 'path';
import { C2_CURRICULUM_MAPPING } from '../src/lib/c2-units/curriculum';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

async function generateBlock(unitId: number, blockNum: number, topic: string, grammar: string, skill: string) {
  const prompt = `
    You are an expert English teacher specializing in Cambridge C2 Proficiency (CPE).
    Generate 10 high-quality C2-level exercises/questions for Unit ${unitId}, Block ${blockNum}.
    Topic: ${topic}
    Grammar Focus: ${grammar}
    Primary Skill: ${skill}

    The exercises must be strictly C2 level (sophisticated vocabulary, complex structures).
    
    Return ONLY a JSON object with a "questions" key containing an array of 10 question objects.
    Each object must follow this structure:
    {
      "id": "c2-u${unitId}-b${blockNum}-q[1-10]",
      "type": "multiple-choice" | "fill-blank" | "key-word-transformation",
      "question": "The question text",
      "options": ["Option A", "Option B", "Option C", "Option D"], // Only for multiple-choice
      "correctAnswer": "The correct answer string",
      "explanation": "Brief explanation in Spanish",
      "points": 1,
      "sentence": "Original sentence", // Only for key-word-transformation
      "keyWord": "KEY WORD", // Only for key-word-transformation
      "startOfAnswer": "Start of..." // Only for key-word-transformation
    }

    Vary the types within the block. 
    Ensure you return exactly 10 questions in the array.
  `;

  let attempts = 0;
  while (attempts < 3) {
    try {
      const response = await openai.chat.completions.create({
        model: "gpt-4o",
        messages: [
          { role: "system", content: "You are a helpful assistant that generates educational content in JSON format." },
          { role: "user", content: prompt }
        ],
        response_format: { type: "json_object" }
      });

      const content = response.choices[0].message.content;
      if (!content) throw new Error("No content received from OpenAI");
      
      const parsed = JSON.parse(content);
      const questions = parsed.questions || parsed.exercises || Object.values(parsed).find(v => Array.isArray(v));
      
      if (Array.isArray(questions) && questions.length > 0) {
        return questions;
      }
      attempts++;
    } catch (e) {
      console.error(`Attempt ${attempts + 1} failed for Unit ${unitId} Block ${blockNum}: ${e}`);
      attempts++;
    }
  }
  throw new Error(`Failed to generate valid questions for Unit ${unitId} Block ${blockNum} after 3 attempts`);
}

async function generateUnit(unitId: number) {
  const mapping = C2_CURRICULUM_MAPPING.find(m => m.unit === unitId);
  if (!mapping) return;

  const targetPath = path.join(process.cwd(), `src/lib/c2-units/unit-${unitId}.ts`);
  if (fs.existsSync(targetPath)) {
      console.log(`Skipping Unit ${unitId}: File already exists.`);
      return;
  }

  console.log(`Generating Unit ${unitId}: ${mapping.title}...`);
  
  const blocks = [];
  for (let b = 1; b <= 10; b++) {
    console.log(`  - Block ${b}/10...`);
    const questions = await generateBlock(unitId, b, mapping.topic, mapping.grammar.join(', '), mapping.skills[b % mapping.skills.length]);
    
    const block = {
      id: `c2-u${unitId}-b${b}`,
      type: b % 2 === 0 ? 'grammar' : 'vocabulary',
      title: `Block ${b}: ${mapping.title} - Part ${b}`,
      explanation: `Advanced practice for ${mapping.title}`,
      questions: questions
    };
    blocks.push(block);
  }

  const fileContent = `
import { Exercise } from '../exercise-types';
import { createC2Unit } from './utils';

${blocks.map((b, i) => `export const C2_U${unitId}_BLOCK${i + 1}: Exercise = ${JSON.stringify(b, null, 2)};`).join('\n\n')}

export const C2_UNIT_${unitId} = createC2Unit(
  'c2-u${unitId}',
  '${mapping.title}',
  'Advanced C2 level practice on ${mapping.topic}.',
  ${JSON.stringify(mapping.skills)},
  [
    ${blocks.map((_, i) => `C2_U${unitId}_BLOCK${i + 1}`).join(', ')}
  ]
);
`;

  fs.writeFileSync(targetPath, fileContent);
}

async function main() {
    const start = parseInt(process.argv[2]) || 1;
    const end = parseInt(process.argv[3]) || start;

    for (let i = start; i <= end; i++) {
        await generateUnit(i).catch(e => console.error(`Error in Unit ${i}:`, e));
    }
}

main().catch(console.error);
