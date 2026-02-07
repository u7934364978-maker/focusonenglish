import fs from 'fs';
import path from 'path';
import dotenv from 'dotenv';
import { A2_FULL_SYLLABUS } from '../src/lib/a2-syllabus';
import { ExerciseGenerator } from '../src/lib/ai/exercise-generator';
import { ExerciseType } from '../src/lib/exercise-types';

dotenv.config();

const API_KEY = process.env.OPENAI_API_KEY;
if (!API_KEY) {
  console.error('❌ OPENAI_API_KEY not found in .env');
  process.exit(1);
}

const SOURCE_FILE = '/var/folders/kw/z3z8k8194jj3pkb1rrq91ptc0000gn/T/zencoder/pasted/files/20260207153357-yme74j.txt';
const OUTPUT_DIR = 'scripts/generated-a2-batches';
const EXERCISES_PER_UNIT = 50;

if (!fs.existsSync(OUTPUT_DIR)) {
  fs.mkdirSync(OUTPUT_DIR, { recursive: true });
}

const EXERCISE_TYPES: ExerciseType[] = [
  'multiple-choice',
  'fill-blank',
  'sentence-building',
  'speaking-analysis',
  'word-search',
  'crossword',
  'reading-comprehension',
  'pronunciation-practice'
];

const generator = new ExerciseGenerator(API_KEY, { model: 'gpt-4o', temperature: 0.7 });

async function main() {
  const batchStart = parseInt(process.argv[2]) || 1;
  const batchEnd = parseInt(process.argv[3]) || batchStart + 4; // Default 5 units

  console.log(`🚀 Starting generation for Units ${batchStart} to ${batchEnd}`);
  
  // Load source material for context
  const sourceContent = fs.readFileSync(SOURCE_FILE, 'utf-8');
  // We take a chunk of source content to provide as context without overwhelming the prompt
  const sourceContext = sourceContent.substring(0, 5000); 

  for (let unitId = batchStart; unitId <= batchEnd; unitId++) {
    const unit = A2_FULL_SYLLABUS.find(u => u.id === unitId);
    if (!unit) {
      console.warn(`⚠️ Unit ${unitId} not found in syllabus`);
      continue;
    }

    const unitFile = path.join(OUTPUT_DIR, `unit-${unitId}.json`);
    let unitExercises: any[] = [];
    
    if (fs.existsSync(unitFile)) {
      console.log(`📦 Unit ${unitId} already exists, skipping...`);
      continue;
    }

    console.log(`\n--- Unit ${unitId}: ${unit.title} ---`);

    for (let i = 0; i < EXERCISES_PER_UNIT; i++) {
      const exerciseType = EXERCISE_TYPES[i % EXERCISE_TYPES.length];
      
      const customPrompt = `
        UNIT: ${unit.title} (A2 Level)
        THEME: ${unit.theme}
        GRAMMAR: ${unit.grammar.join(', ')}
        VOCABULARY: ${unit.vocabulary.join(', ')}
        
        SOURCE MATERIAL CONTEXT:
        ${sourceContext}
        
        INSTRUCTIONS:
        1. Create a COMPLETELY UNIQUE exercise based on the theme and grammar.
        2. Use variants of examples or vocabulary found in the source material context.
        3. Ensure the level is STRICTLY A2 (Elementary).
        4. The explanation MUST be in Spanish.
        5. Return a high-quality exercise with at least 5-8 questions/items.
      `;

      try {
        console.log(`[Unit ${unitId} - ${i + 1}/${EXERCISES_PER_UNIT}] Generating ${exerciseType}...`);
        
        const generated = await generator.generateExercise({
          exerciseType: exerciseType,
          level: 'A2',
          difficulty: 'medium',
          topic: unit.title,
          topicKeywords: [...unit.grammar, ...unit.vocabulary],
          customPrompt: customPrompt
        });

        unitExercises.push({
          ...generated,
          unitId: unitId,
          moduleId: unit.module,
          lessonId: `a2-m${unit.module}-l${unitId}`,
          id: `a2-m${unit.module}-l${unitId}-ex${i + 1}`
        });

        // Save after each exercise to avoid loss
        fs.writeFileSync(unitFile, JSON.stringify(unitExercises, null, 2));
      } catch (error: any) {
        console.error(`❌ Error in Unit ${unitId} Ex ${i + 1}: ${error.message}`);
        i--; // Retry
        await new Promise(resolve => setTimeout(resolve, 5000));
      }
    }
    
    console.log(`✅ Unit ${unitId} completed!`);
  }

  console.log(`\n✨ Batch ${batchStart}-${batchEnd} finished!`);
}

main().catch(console.error);
