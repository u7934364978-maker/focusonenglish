import fs from 'fs';
import path from 'path';
import dotenv from 'dotenv';
import { A1_REDESIGN_SYLLABUS } from '../src/lib/a1-redesign-curriculum';
import { ExerciseGenerator } from '../src/lib/ai/exercise-generator';
import { ExerciseType } from '../src/lib/exercise-types';

dotenv.config();

const API_KEY = process.env.OPENAI_API_KEY;
if (!API_KEY) {
  console.error('❌ OPENAI_API_KEY not found in .env');
  process.exit(1);
}

const OUTPUT_FILE = 'src/lib/generated-a1-unit1-exercises.ts';
const EXERCISES_TO_GENERATE = parseInt(process.argv[2]) || 300;
const UNIT_ID = 1;

// Scenario Matrix Dimensions
const CONTEXTS = ['Business', 'Casual', 'Formal', 'Travel', 'Shopping', 'Academic'];
const LOCATIONS = ['London', 'New York', 'Madrid', 'Tokyo', 'Paris', 'Mexico City', 'Berlin'];
const PERSONAS = [
  'a student meeting a teacher',
  'a tourist asking a receptionist',
  'two business colleagues introducing themselves',
  'a shop assistant talking to a customer',
  'a person at an airport immigration desk',
  'friends at a coffee shop',
  'a manager introducing a new employee'
];

const EXERCISE_TYPES: ExerciseType[] = [
  'multiple-choice',
  'fill-blank',
  'sentence-building',
  'word-search',
  'crossword'
];

class UniquenessTracker {
  hashes = new Set<string>();

  isUnique(content: any): boolean {
    const hash = this.generateHash(content);
    if (this.hashes.has(hash)) return false;
    this.hashes.add(hash);
    return true;
  }

  private generateHash(content: any): string {
    const str = JSON.stringify(content);
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
      hash = ((hash << 5) - hash) + str.charCodeAt(i);
      hash |= 0;
    }
    return hash.toString(36);
  }
}

const tracker = new UniquenessTracker();
const generator = new ExerciseGenerator(API_KEY, { model: 'gpt-4o', temperature: 0.8 });

async function main() {
  const unitDef = A1_REDESIGN_SYLLABUS.find(u => u.id === UNIT_ID);
  if (!unitDef) {
    console.error(`❌ Unit ${UNIT_ID} not found`);
    return;
  }

  // Load existing exercises if any
  let allExercises: any[] = [];
  if (fs.existsSync(OUTPUT_FILE)) {
    const fileContent = fs.readFileSync(OUTPUT_FILE, 'utf-8');
    const match = fileContent.match(/\[[\s\S]*\]/);
    if (match) {
      try {
        allExercises = JSON.parse(match[0]);
        allExercises.forEach(ex => tracker.isUnique(ex.content)); // Populate tracker
        console.log(`📦 Loaded ${allExercises.length} existing exercises`);
      } catch (e) {
        console.warn('⚠️ Could not parse existing exercises, starting fresh');
      }
    }
  }

  const targetTotal = EXERCISES_TO_GENERATE;
  let generatedCount = allExercises.length;

  console.log(`🚀 Starting generation of ${targetTotal - generatedCount} more exercises (Target: ${targetTotal})`);

  while (generatedCount < targetTotal) {
    const topic = unitDef.topics[generatedCount % unitDef.topics.length];
    const context = CONTEXTS[Math.floor(Math.random() * CONTEXTS.length)];
    const location = LOCATIONS[Math.floor(Math.random() * LOCATIONS.length)];
    const persona = PERSONAS[Math.floor(Math.random() * PERSONAS.length)];
    const exerciseType = EXERCISE_TYPES[Math.floor(Math.random() * EXERCISE_TYPES.length)];

    const customPrompt = `
      SCENARIO: ${persona} in ${location} (${context} setting).
      FOCUS: ${topic.name}.
      KEYWORDS to use: ${topic.keywords.join(', ')}.
      
      CRITICAL INSTRUCTIONS:
      1. Create a COMPLETELY UNIQUE scenario. 
      2. Use diverse names and situations.
      3. Ensure the exercise is STRICTLY A1 level (absolute beginner).
      4. Avoid repetitive sentence patterns like "I am John". Use "My name is...", "This is...", "Nice to meet you...", etc.
      5. The explanation MUST be in Spanish and be very helpful.
      ${exerciseType === 'sentence-building' ? '6. For sentence-building: ensure the "words" array contains EXACTLY the same words as the "correctOrder" but shuffled.' : ''}
    `;

    try {
      console.log(`[${generatedCount + 1}/${EXERCISES_TO_GENERATE}] Generating ${exerciseType} for ${topic.name}...`);
      
      const generated = await generator.generateExercise({
        exerciseType: exerciseType,
        level: 'A1',
        difficulty: 'easy',
        topic: topic.name,
        topicKeywords: topic.keywords,
        customPrompt: customPrompt
      });

      if (tracker.isUnique(generated.content)) {
        allExercises.push({
          ...generated,
          id: `a1-u1-gen-${generatedCount}`,
          topicId: topic.id
        });
        generatedCount++;
        
        // Save periodically to avoid losing data
        if (generatedCount % 10 === 0) {
          saveToFile(allExercises);
        }
      } else {
        console.warn(`⚠️ Duplicate detected, retrying...`);
      }
    } catch (error: any) {
      console.error(`❌ Error: ${error.message}`);
      await new Promise(resolve => setTimeout(resolve, 2000)); // Cool down
    }
  }

  saveToFile(allExercises);
  console.log(`✅ Finished! ${generatedCount} exercises saved to ${OUTPUT_FILE}`);
}

function saveToFile(exercises: any[]) {
  const content = `
/**
 * GENERATED EXERCISES FOR A1 UNIT 1
 * Total: ${exercises.length}
 */
export const GENERATED_A1_UNIT1_EXERCISES = ${JSON.stringify(exercises, null, 2)};
`;
  fs.writeFileSync(OUTPUT_FILE, content);
}

main().catch(console.error);
