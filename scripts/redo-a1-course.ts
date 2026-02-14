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
  { id: 1, theme: "Greetings & Personal Info", grammar: "To Be (Positive), Basic Greetings" },
  { id: 2, theme: "Coffee Break & Orders", grammar: "Expressing Desires (I want), Plurals" },
  { id: 3, theme: "My Family & Friends", grammar: "Possessive Adjectives (my, your, his, her)" },
  { id: 4, theme: "Daily Routine", grammar: "Present Simple (I work, I sleep)" },
  { id: 5, theme: "Numbers & Counting", grammar: "Numbers 1-100, Quantifiers (some, any)" },
  { id: 6, theme: "Colors & Descriptions", grammar: "Adjectives, Colors" },
  { id: 7, theme: "Time & Days", grammar: "Days of the week, Prepositions of time (in, on, at)" },
  { id: 8, theme: "Daily Grind", grammar: "Present Simple (Third person -s)" },
  { id: 9, theme: "Food & Drink", grammar: "Countable/Uncountable (Basic)" },
  { id: 10, theme: "Clothing & Fashion", grammar: "Present Continuous (I am wearing)" },
  { id: 11, theme: "My Job & Workplace", grammar: "Jobs, Workplace vocabulary" },
  { id: 12, theme: "In the City", grammar: "Prepositions of place, Directions" },
  { id: 13, theme: "Movement & Actions", grammar: "Action verbs, Present Continuous" },
  { id: 14, theme: "Feelings & Emotions", grammar: "Adjectives of emotion" },
  { id: 15, theme: "Animals & Nature", grammar: "Common animals, basic nature" },
  { id: 16, theme: "Weather", grammar: "Weather conditions" },
  { id: 17, theme: "Technology & Gadgets", grammar: "Tech devices, Basic verbs" },
  { id: 18, theme: "The Human Body", grammar: "Parts of the face and body" },
  { id: 19, theme: "Abilities", grammar: "Can / Can't" },
  { id: 20, theme: "Home & Furniture", grammar: "House vocabulary, There is / There are" },
  { id: 21, theme: "Transportation", grammar: "Transport methods, travel" },
  { id: 22, theme: "Health", grammar: "Common ailments, body parts" },
  { id: 23, theme: "Shopping", grammar: "Money, Prices, Demonstratives (this, that, these, those)" },
  { id: 24, theme: "Hobbies & Interests", grammar: "Like / Love / Hate + -ing" },
  { id: 25, theme: "Past Memories", grammar: "Was / Were" },
  { id: 26, theme: "Future Plans", grammar: "Going to (Future)" },
  { id: 27, theme: "Comparisons", grammar: "Basic Comparatives (short adjectives)" },
  { id: 28, theme: "Sports", grammar: "Sports vocabulary, Play/Go/Do" },
  { id: 29, theme: "Holidays", grammar: "Travel and holiday activities" },
  { id: 30, theme: "Course Synthesis", grammar: "Review of A1 grammar and vocabulary" }
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

  console.log(`🚀 Generating 50 PROFESSIONAL exercises for A1 Unit ${unitId}: ${unit.theme}...`);
  
  const exercises: any[] = [];
  const totalExercises = 50;
  const batchSize = 5;
  const totalBatches = totalExercises / batchSize;

  for (let i = 0; i < totalBatches; i++) {
    const type = EXERCISE_TYPES[i % EXERCISE_TYPES.length];
    const prompt = `
      Create ${batchSize} high-quality, professional English learning exercises for REAL A1 level (Beginner).
      UNIT: ${unitId}
      THEME: ${unit.theme}
      GRAMMAR FOCUS: ${unit.grammar}
      EXERCISE TYPE: ${type}
      
      PEDAGOGICAL STANDARDS:
      - This is for beginners (A1). Use simple vocabulary and structures.
      - Context: Use professional, academic, or realistic adult social contexts.
      - Purpose: Test functional use of English in the given theme/grammar.
      
      STRICT FORMATTING RULES:
      1. CRITICAL: Every single English word or phrase in questions, options, flashcards, etc., MUST have its own translation brackets. 
         - CORRECT: [[I|Yo]] [[work|trabajo]] [[from|desde]] [[home|casa]].
         - INCORRECT: [[I work|Yo trabajo]] [[from home|desde casa]].
      2. GAPS: For "multiple-choice" and "fill-blank", you MUST use exactly "_______" (seven underscores) in the question text.
      3. CRITICAL: The gap "_______" MUST represent the core grammar point or vocabulary being tested.
      4. OPTIONS: Keep options concise. Every option must also use [[word|translation]] syntax.
      5. SENTENCE BUILDING: 'words' must be an array of strings, each string being one bracketed pair [[word|translation]]. 
      6. FLASHCARDS: For 'flashcard' type, content must have an 'items' array. Each item has 'front' (English with brackets) and 'back' (Spanish translation).
      7. Spanish Only: Titles, instructions, and explanations MUST be in Spanish.
      8. Explanations: Provide a brief pedagogical note in Spanish explaining the grammar or vocabulary choice.
      9. Transcript: Include a clean "transcript" field (no brackets, no translations) for audio.
      
      JSON STRUCTURE EXAMPLE (STRICT):
      {
        "exercises": [
          {
            "type": "multiple-choice",
            "level": "A1",
            "topic": "${unit.theme}",
            "difficulty": "easy",
            "transcript": "I am a teacher.",
            "content": {
              "title": "Título en Español",
              "instructions": "Instrucciones en Español",
              "questions": [
                {
                  "question": "[[I|Yo]] [[am|soy]] [[a|un]] _______.",
                  "options": ["[[teacher|profesor]]", "[[book|libro]]"],
                  "correctAnswer": 0,
                  "explanation": "Identificación de profesiones con el verbo To Be."
                }
              ]
            }
          },
          {
            "type": "flashcard",
            "level": "A1",
            "topic": "${unit.theme}",
            "difficulty": "easy",
            "transcript": "Hello, my name is John.",
            "content": {
              "title": "Vocabulario clave",
              "instructions": "Aprende estas palabras.",
              "items": [
                { "front": "[[Hello|Hola]]", "back": "Hola" },
                { "front": "[[Name|Nombre]]", "back": "Nombre" }
              ]
            }
          }
        ]
      }
    `;

    try {
      const response = await openai.chat.completions.create({
        model: "gpt-4o-mini",
        messages: [
          { role: "system", content: "You are an expert English Professor specializing in A1 level curriculum. You output only valid JSON. You follow translation syntax [[word|translation]] for ALL English text. For 'sentence-building' type, DO NOT use a 'questions' array; put 'correctSentence', 'words', and 'explanation' directly inside 'content'. For 'flashcard', use the 'items' structure." },
          { role: "user", content: prompt }
        ],
        response_format: { type: "json_object" }
      });

      const data = JSON.parse(response.choices[0].message.content || '{"exercises":[]}');
      const batch = data.exercises.map((ex: any, index: number) => {
        const exerciseIndex = exercises.length + index + 1;
        const audioUrl = `audio/a1/unit-${unitId}/e${exerciseIndex}.mp3`;
        
        if (ex.type === 'sentence-building' && ex.content.questions && ex.content.questions[0]) {
          const q = ex.content.questions[0];
          ex.content.correctSentence = q.correctSentence || (q.sentenceParts ? q.sentenceParts.join(' ') : "");
          ex.content.words = q.words || q.sentenceParts || [];
          ex.content.explanation = q.explanation || ex.content.explanation;
          delete ex.content.questions;
        }

        if (ex.content.questions && ex.content.questions[0]) {
          ex.content.questions[0].audio = audioUrl;
        } else {
          ex.content.audio = audioUrl;
        }
        
        return {
          ...ex,
          id: `a1-u${unitId}-e${exerciseIndex}`,
          level: "A1",
          audioUrl: audioUrl,
          topicName: exerciseIndex <= 25 ? 'Vocabulary' : 'Grammar'
        };
      });
      
      exercises.push(...batch);
      console.log(`  ✅ Generated ${exercises.length}/50...`);
    } catch (error) {
      console.error(`  ❌ Error in batch ${i}:`, error);
    }
  }

  const fileContent = `
import { Exercise } from '@/lib/exercise-generator';

export const UNIT_${unitId}_EXERCISES: Exercise[] = ${JSON.stringify(exercises, null, 2)};
`;

  const outputPath = path.join(process.cwd(), `src/lib/course/a1/unit-${unitId}.ts`);
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
    await generateExercisesForUnit(1);
  }
}

main().catch(console.error);
