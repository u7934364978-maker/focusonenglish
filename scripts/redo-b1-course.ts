import fs from 'fs';
import path from 'path';
import dotenv from 'dotenv';
import OpenAI from 'openai';

dotenv.config();

const API_KEY = process.env.OPENAI_API_KEY;
if (!API_KEY) {
  console.error('❌ OPENAI_API_KEY not found in .env');
  process.exit(1);
}

const openai = new OpenAI({ apiKey: API_KEY });

const SYLLABUS = [
  { id: 1, theme: "Daily Routine & Life", grammar: "Present Simple/Continuous review" },
  { id: 2, theme: "Memories & The Past", grammar: "Past Simple/Continuous" },
  { id: 3, theme: "Personal Experiences", grammar: "Present Perfect Simple" },
  { id: 4, theme: "Travel & Transportation", grammar: "Present Perfect vs Past Simple" },
  { id: 5, theme: "Future Plans & Intentions", grammar: "Will vs Going to" },
  { id: 6, theme: "Work & Professions", grammar: "Gerunds & Infinitives" },
  { id: 7, theme: "Education & Learning", grammar: "Modals of obligation/permission" },
  { id: 8, theme: "Health & Physical Care", grammar: "Modals for advice & possibility" },
  { id: 9, theme: "Food & Restaurants", grammar: "Countable/Uncountable, Quantifiers" },
  { id: 10, theme: "Shopping & Services", grammar: "Comparatives & Superlatives" },
  { id: 11, theme: "Entertainment & Hobbies", grammar: "Defining Relative Clauses" },
  { id: 12, theme: "Nature & The Environment", grammar: "Passive Voice: Present/Past" },
  { id: 13, theme: "Technology & Communication", grammar: "Zero & First Conditionals" },
  { id: 14, theme: "People & Personality", grammar: "Used to / Would" },
  { id: 15, theme: "Places & Housing", grammar: "Prepositions of place/movement" },
  { id: 16, theme: "Media & News", grammar: "Reported Speech: Statements" },
  { id: 17, theme: "Sports & Competition", grammar: "Present Perfect Continuous" },
  { id: 18, theme: "Art & Literature", grammar: "Past Perfect Simple" },
  { id: 19, theme: "Culture & Customs", grammar: "Articles & Quantifiers" },
  { id: 20, theme: "Society & Rules", grammar: "Modals of deduction" },
  { id: 21, theme: "The Modern World", grammar: "Second Conditional" },
  { id: 22, theme: "Crime & Justice", grammar: "Passive Voice: All tenses" },
  { id: 23, theme: "Science & Discovery", grammar: "Reported Speech: Questions" },
  { id: 24, theme: "Feelings & Emotions", grammar: "Question tags" },
  { id: 25, theme: "Fashion & Style", grammar: "Relative Clauses: Non-defining" },
  { id: 26, theme: "Natural Disasters", grammar: "Third Conditional" },
  { id: 27, theme: "Success & Achievement", grammar: "Future Continuous & Perfect" },
  { id: 28, theme: "Music & Festivals", grammar: "Conditionals: Mixed" },
  { id: 29, theme: "Global Challenges", grammar: "Causative: Have/Get something done" },
  { id: 30, theme: "Review & Final Assessment", grammar: "Comprehensive review" }
];

const EXERCISE_TYPES = [
  'multiple-choice',
  'fill-blank',
  'sentence-building',
  'flashcard'
];

async function generateExercisesForUnit(unitId: number) {
  const unit = SYLLABUS.find(u => u.id === unitId);
  if (!unit) return;

  console.log(`🚀 Generating 50 exercises for Unit ${unitId}: ${unit.theme}...`);
  
  const exercises: any[] = [];
  const batchSize = 5; // Generate in batches to avoid token limits and stay focused

  for (let i = 0; i < 10; i++) {
    const type = EXERCISE_TYPES[i % EXERCISE_TYPES.length];
    const prompt = `
      Create 5 unique English learning exercises for B1 level.
      UNIT: ${unitId}
      THEME: ${unit.theme}
      GRAMMAR FOCUS: ${unit.grammar}
      EXERCISE TYPE: ${type}
      
      CRITICAL INSTRUCTION:
      - Every single English word in the exercise content (prompts, questions, options, examples, flashcard fronts) MUST follow the syntax [[word|translation]] for word-by-word translation. 
      - Example: "[[This|Esta]] [[is|es]] [[a|una]] [[test|prueba]]."
      - Topics must be neutral, professional, and educational.
      - Each exercise MUST include a "transcript" field with the FULL English text (no brackets) for audio generation.
      - Each exercise MUST include an "audioUrl" field with the path "audio/b1/unit-${unitId}/e${exercises.length + 1}.mp3" (increment properly).
      
      The response must be a JSON object with an "exercises" array.
      Each exercise must have:
      - type: "${type}"
      - level: "B1"
      - topic: "${unit.theme}"
      - difficulty: "medium"
      - transcript: "Clean English text for audio"
      - audioUrl: "audio/b1/unit-${unitId}/e..."
      - content: { 
          // for multiple-choice/fill-blank:
          prompt: "...", 
          options: ["...", "..."], 
          answerIndex: 0,
          explanation: "In Spanish...",
          // for flashcard:
          items: [{ front: "[[word|translation]]", back: "Spanish", example: "[[Example|Ejemplo]]...", pronunciation: "...", explanation: "..." }],
          // for sentence-building:
          words: ["[[Word1|...]]", "[[Word2|...]]"],
          correctOrder: ["Word1", "Word2"] 
        }
    `;

    try {
      const response = await openai.chat.completions.create({
        model: "gpt-4o",
        messages: [{ role: "system", content: "You are a helpful English teacher assistant. You output only valid JSON. You ensure every English word is translated using [[word|translation]] syntax." }, { role: "user", content: prompt }],
        response_format: { type: "json_object" }
      });

      const data = JSON.parse(response.choices[0].message.content || '{"exercises":[]}');
      const batch = data.exercises.map((ex: any, index: number) => {
        const exerciseIndex = exercises.length + index + 1;
        return {
          ...ex,
          id: `b1-u${unitId}-e${exerciseIndex}`,
          audioUrl: `audio/b1/unit-${unitId}/e${exerciseIndex}.mp3`,
          topicName: exerciseIndex <= 25 ? 'Vocabulary' : 'Grammar'
        };
      });
      
      exercises.push(...batch);
      console.log(`  ✅ Generated ${exercises.length}/50 exercises...`);
    } catch (error) {
      console.error(`  ❌ Error in batch ${i}:`, error);
    }
  }

  const fileContent = `
import { Exercise } from '@/lib/exercise-generator';

export const UNIT_${unitId}_EXERCISES: Exercise[] = ${JSON.stringify(exercises, null, 2)};
`;

  const outputPath = path.join(process.cwd(), `src/lib/course/b1/unit-${unitId}.ts`);
  fs.writeFileSync(outputPath, fileContent);
  console.log(`✅ Saved Unit ${unitId} to ${outputPath}`);
}

async function main() {
  const arg = process.argv[2];
  if (arg && arg.includes('-')) {
    const [start, end] = arg.split('-').map(Number);
    for (let i = start; i <= end; i++) {
      await generateExercisesForUnit(i);
    }
  } else if (arg) {
    const targetUnit = parseInt(arg);
    await generateExercisesForUnit(targetUnit);
  } else {
    // For now, let's just do one unit as a test if no arg
    await generateExercisesForUnit(1);
  }
}

main().catch(console.error);
