import fs from 'fs';
import dotenv from 'dotenv';
import { ExerciseGenerator } from '../src/lib/ai/exercise-generator';
import { ExerciseType } from '../src/lib/exercise-types';

dotenv.config();

const API_KEY = process.env.OPENAI_API_KEY;
if (!API_KEY) {
  console.error('❌ OPENAI_API_KEY not found in .env');
  process.exit(1);
}

const OUTPUT_FILE = 'src/lib/course/a1/unit-2.ts';
const TARGET_COUNT = 60;

const TOPICS = [
  { name: 'Hobbies and free time', keywords: ['hobby', 'free time', 'play', 'watch', 'listen', 'reading'] },
  { name: 'Basic sports', keywords: ['football', 'tennis', 'swim', 'run', 'basketball'] },
  { name: 'Food and drink', keywords: ['apple', 'water', 'coffee', 'pizza', 'breakfast', 'lunch', 'dinner'] },
  { name: 'Shops and shopping', keywords: ['supermarket', 'buy', 'price', 'money', 'shop'] },
  { name: 'Weather', keywords: ['sunny', 'rainy', 'hot', 'cold', 'weather'] },
  { name: 'Animals and pets', keywords: ['dog', 'cat', 'bird', 'pet', 'fish'] }
];

const EXERCISE_TYPES: ExerciseType[] = [
  'multiple-choice',
  'fill-blank',
  'sentence-building',
  'matching'
];

const generator = new ExerciseGenerator(API_KEY, { model: 'gpt-4o', temperature: 0.8 });

async function main() {
  console.log(`🚀 Starting generation of ${TARGET_COUNT} exercises for Unit 2...`);
  
  const allExercises: any[] = [
    // Keep initial manually created exercises for quality
    {
      "id": "a1-u2-e1",
      "type": "multiple-choice",
      "level": "A1",
      "topic": "Nationalities",
      "difficulty": "medium",
      "content": {
        "title": "[[Where|De dónde]] [[are|eres]] [[you|tú]] [[from|de]]?",
        "instructions": "[[Choose|Elige]] [[the|la]] [[correct|correcta]] [[nationality|nacionalidad]].",
        "questions": [
          {
            "question": "[[I|Yo]] [[am|soy]] [[from|de]] [[Spain|España]]. [[I|Yo]] [[am|soy]] (_____).",
            "options": [
              "[[Spanish|Español]]",
              "[[France|Francia]]",
              "[[Mexico|México]]"
            ],
            "correctAnswer": 0,
            "explanation": "[[Spanish|Español]] [[is|es]] [[the|la]] [[nationality|nacionalidad]] [[for|para]] [[Spain|España]]."
          }
        ]
      },
      "topicName": "Vocabulary"
    }
  ];

  let currentCount = allExercises.length;

  while (currentCount < TARGET_COUNT) {
    const topic = TOPICS[currentCount % TOPICS.length];
    const exerciseType = EXERCISE_TYPES[Math.floor(Math.random() * EXERCISE_TYPES.length)];

    try {
      console.log(`[${currentCount + 1}/${TARGET_COUNT}] Generating ${exerciseType} for ${topic.name}...`);
      
      const generated = await generator.generateExercise({
        exerciseType: exerciseType,
        level: 'A1',
        difficulty: 'easy',
        topic: topic.name,
        topicKeywords: topic.keywords,
        customPrompt: `
          FOCUS: ${topic.name}
          KEYWORDS: ${topic.keywords.join(', ')}
          
          STRICT A1 LEVEL.
          ALL English text in transcripts, questions, and options MUST follow the [[English|Spanish]] format.
          Example: "[[Hello|Hola]]".
          Explanation MUST be in Spanish.
          For multiple-choice, use indices (0, 1, 2) for correctAnswer if it's a single question format.
        `
      });

      allExercises.push({
        ...generated,
        id: `a1-u2-gen-${currentCount}`
      });
      currentCount++;
    } catch (error: any) {
      console.error(`❌ Error: ${error.message}`);
      await new Promise(resolve => setTimeout(resolve, 2000));
    }
  }

  const fileContent = `import { Exercise } from '@/lib/exercise-generator';

export const UNIT_2_EXERCISES: Exercise[] = ${JSON.stringify(allExercises, null, 2)};
`;

  fs.writeFileSync(OUTPUT_FILE, fileContent);
  console.log(`✅ Finished! ${currentCount} exercises saved to ${OUTPUT_FILE}`);
}

main().catch(console.error);
