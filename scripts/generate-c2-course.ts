import OpenAI from 'openai';
import * as fs from 'fs';
import * as path from 'path';
import { C2_CURRICULUM_MAPPING } from '../src/lib/c2-units/curriculum';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

const LESSON_TYPE_MAP: Record<number, { type: string; title: string; exerciseTypes: string; instructions: string }> = {
  1: {
    type: 'grammar',
    title: 'Grammar Input & Presentation',
    exerciseTypes: '"key-word-transformation" | "fill-blank" | "error-identification"',
    instructions: 'Focus on key-word transformations, fill-in-the-blank with complex structures, and error identification. Use sophisticated C2 grammar structures.',
  },
  2: {
    type: 'grammar-context',
    title: 'Grammar in Context / Collocations',
    exerciseTypes: '"open-cloze" | "multiple-choice-cloze" | "fill-blank"',
    instructions: 'Focus on open-cloze, sentence completion with collocations, and grammar in authentic context. Test lexical-grammatical awareness at C2 level.',
  },
  3: {
    type: 'reading',
    title: 'Reading Comprehension (C2 Text)',
    exerciseTypes: '"gapped-text" | "multiple-matching" | "multiple-choice-cloze"',
    instructions: 'Focus on gapped-text insertion, multiple-matching, and reading-based multiple choice. Use sophisticated, authentic text at C2 level.',
  },
  4: {
    type: 'listening',
    title: 'Listening / Discourse Management',
    exerciseTypes: '"multiple-choice" | "fill-blank" | "multiple-matching"',
    instructions: 'Simulate listening-based exercises: gap-fill from a transcript, multiple-choice comprehension, and matching speakers to opinions. Reflect authentic C2 listening discourse.',
  },
  5: {
    type: 'writing',
    title: 'Writing Practice (Genre-specific)',
    exerciseTypes: '"writing-analysis" | "paraphrasing" | "fill-blank"',
    instructions: 'Focus on writing-analysis (identifying good/weak writing), paraphrasing complex sentences, and summary-writing tasks. All at C2 sophistication.',
  },
  6: {
    type: 'speaking',
    title: 'Speaking / Review / Integration',
    exerciseTypes: '"speaking-analysis" | "multiple-choice" | "key-word-transformation"',
    instructions: 'Focus on speaking-analysis prompts, review multiple-choice consolidation, and transformation mix. Integrate all skills practiced in the unit.',
  },
};

async function generateBlock(unitId: number, blockNum: number, topic: string, grammar: string, lessonType: typeof LESSON_TYPE_MAP[number]) {
  const prompt = `
    You are an expert English teacher specializing in Cambridge C2 Proficiency (CPE).
    Generate 10 high-quality C2-level exercises/questions for Unit ${unitId}, Block ${blockNum}.
    Topic: ${topic}
    Grammar Focus: ${grammar}
    Lesson Type: ${lessonType.title}

    ${lessonType.instructions}
    
    Return ONLY a JSON object with a "questions" key containing an array of 10 question objects.
    Each object must follow this structure:
    {
      "id": "c2-u${unitId}-b${blockNum}-q[1-10]",
      "type": ${lessonType.exerciseTypes},
      "question": "The question text",
      "options": ["Option A", "Option B", "Option C", "Option D"], // Only for multiple-choice and multiple-choice-cloze
      "correctAnswer": "The correct answer string",
      "explanation": "Brief explanation in Spanish",
      "points": 1,
      "sentence": "Original sentence", // Only for key-word-transformation and paraphrasing
      "keyWord": "KEY WORD", // Only for key-word-transformation
      "startOfAnswer": "Start of..." // Only for key-word-transformation
    }

    Use the allowed exercise types for this lesson block.
    Vary the types within the block.
    Ensure you return exactly 10 questions in the array.
    All content must be strictly C2 level (sophisticated vocabulary, complex structures, authentic register).
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
  for (let b = 1; b <= 6; b++) {
    const lessonType = LESSON_TYPE_MAP[b];
    console.log(`  - Block ${b}/6 (${lessonType.type})...`);
    const questions = await generateBlock(unitId, b, mapping.topic, mapping.grammar.join(', '), lessonType);
    
    const block = {
      id: `c2-u${unitId}-b${b}`,
      type: lessonType.type,
      title: `Block ${b}: ${lessonType.title}`,
      explanation: `${lessonType.title} practice for ${mapping.title}`,
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
