import fs from 'fs';
import path from 'path';
import dotenv from 'dotenv';
import { A1_REDESIGN_SYLLABUS } from '../src/lib/a1-redesign-curriculum';
import { ExerciseGenerator } from '../src/lib/ai/exercise-generator';
import { generateMixedExerciseSpecs, ExerciseSpec } from '../src/lib/mixed-exercise-generator';

dotenv.config();

const API_KEY = process.env.OPENAI_API_KEY;
if (!API_KEY) {
  console.error('❌ OPENAI_API_KEY not found in .env');
  process.exit(1);
}

const COURSE_DIR = 'src/content/cursos/ingles-a1';
const EXERCISES_PER_UNIT = 500;

// Simple Global Vocabulary Tracker to pass to AI as negative constraints if needed
class GlobalVocabTracker {
  usedWords: Record<string, number> = {};
  
  track(text: string) {
    const words = text.toLowerCase().match(/\b[a-z]{3,}\b/g) || [];
    words.forEach(w => {
      this.usedWords[w] = (this.usedWords[w] || 0) + 1;
    });
  }

  getOverusedWords() {
    return Object.entries(this.usedWords)
      .filter(([_, count]) => count > 20)
      .map(([word]) => word);
  }
}

const tracker = new GlobalVocabTracker();
const generator = new ExerciseGenerator(API_KEY, { model: 'gpt-4o', temperature: 0.8 });

async function generateUnit(unitId: number) {
  const unitDef = A1_REDESIGN_SYLLABUS.find(u => u.id === unitId);
  if (!unitDef) return;

  console.log(`🚀 Generating Unit ${unitId}: ${unitDef.title}`);

  const blocks: any[] = [];
  const exercises: any[] = [];

  // 1. Generate specifications for the unit
  // We distribute the 500 exercises among the unit's topics
  const exercisesPerTopic = Math.floor(EXERCISES_PER_UNIT / unitDef.topics.length);

  for (const topic of unitDef.topics) {
    console.log(`  📝 Generating exercises for topic: ${topic.name}`);
    
    for (let i = 0; i < exercisesPerTopic; i++) {
      // Create a specific request for this topic
      const spec: ExerciseSpec = {
        type: selectRandomType(topic.category),
        category: topic.category as any,
        topic: topic.id,
        topicName: topic.name,
        topicKeywords: topic.keywords,
        difficulty: 'easy'
      };

      try {
        const overused = tracker.getOverusedWords();
        const customPrompt = overused.length > 0 
          ? `AVOID using these words too much as they have been used many times already: ${overused.slice(0, 30).join(', ')}.`
          : '';

        const generated = await generator.generateExercise({
          exerciseType: spec.type,
          level: 'A1',
          difficulty: 'easy',
          topic: topic.name,
          topicKeywords: topic.keywords,
          customPrompt: customPrompt
        });

        const exerciseData = {
          interaction_id: `U${unitId}_T${topic.id}_I${i}`,
          ...generated.content,
          mastery_tag: spec.category
        };

        exercises.push(exerciseData);
        tracker.track(JSON.stringify(exerciseData));
        
        if (i % 10 === 0) console.log(`    ✅ Generated ${i}/${exercisesPerTopic} for ${topic.name}`);
      } catch (error: any) {
        console.error(`    ❌ Error generating exercise:`, error.message);
      }
    }
  }

  // Shuffle exercises to ensure mixing
  const shuffled = exercises.sort(() => Math.random() - 0.5);

  const unitData = {
    course: {
      language_ui: "es-ES",
      target_language: "en",
      level: "A1",
      unit_id: `U${unitId}`,
      unit_title: unitDef.title,
      total_duration_minutes: 120
    },
    blocks: [
      {
        block_id: `B${unitId}`,
        title: unitDef.title,
        content: shuffled
      }
    ]
  };

  const filePath = path.join(COURSE_DIR, `unit${unitId}.json`);
  fs.writeFileSync(filePath, JSON.stringify(unitData, null, 2));
  console.log(`✅ Unit ${unitId} saved to ${filePath}`);
}

function selectRandomType(category: string): any {
  const typesMap: Record<string, string[]> = {
    grammar: ['multiple-choice', 'fill-blank', 'sentence-building'],
    vocabulary: ['multiple-choice', 'fill-blank', 'multiple-choice-cloze'],
    speaking: ['multiple-choice'],
    reading: ['multiple-choice'],
    'exam-practice': ['multiple-choice', 'fill-blank']
  };

  const options = typesMap[category] || ['multiple-choice'];
  return options[Math.floor(Math.random() * options.length)];
}

async function main() {
  const startUnit = parseInt(process.argv[2]) || 1;
  const endUnit = parseInt(process.argv[3]) || startUnit;

  for (let id = startUnit; id <= endUnit; id++) {
    await generateUnit(id);
  }
}

main().catch(console.error);
