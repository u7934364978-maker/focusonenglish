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
  { id: 1, theme: "Personal Identity & Social Trends", grammar: "Present Simple vs Present Continuous (Review & B1 complexity)" },
  { id: 2, theme: "Life Stories & Biographies", grammar: "Past Simple vs Past Continuous" },
  { id: 3, theme: "Personal Achievements & Experiences", grammar: "Present Perfect Simple (Life experiences)" },
  { id: 4, theme: "Travel Adventures & Mishaps", grammar: "Present Perfect vs Past Simple" },
  { id: 5, theme: "Technology & The Digital Age", grammar: "Future Forms: Will, Going to, Present Continuous for Future" },
  { id: 6, theme: "The Working World", grammar: "Gerunds and Infinitives (Verb patterns)" },
  { id: 7, theme: "Education & Lifelong Learning", grammar: "Modals of Obligation, Necessity & Permission (Must, Have to, Should, Can)" },
  { id: 8, theme: "Health & Modern Lifestyles", grammar: "Modals for Advice, Possibility & Ability" },
  { id: 9, theme: "Food Culture & Sustainability", grammar: "Countable/Uncountable Nouns & Complex Quantifiers" },
  { id: 10, theme: "Consumer Society & Shopping", grammar: "Comparatives & Superlatives (including 'as...as', 'the...the...')" },
  { id: 11, theme: "Entertainment & Media", grammar: "Defining Relative Clauses" },
  { id: 12, theme: "Environmental Challenges", grammar: "The Passive Voice (Present Simple & Past Simple)" },
  { id: 13, theme: "Innovation & Inventions", grammar: "Zero & First Conditionals" },
  { id: 14, theme: "People, Character & Personalities", grammar: "Used to and Would (Past habits)" },
  { id: 15, theme: "Urban Life, Places & Housing", grammar: "Prepositions of Place, Movement & Time (B1 Level)" },
  { id: 16, theme: "Global News & Reporting", grammar: "Reported Speech (Statements)" },
  { id: 17, theme: "Sports & Healthy Habits", grammar: "Present Perfect Continuous" },
  { id: 18, theme: "Art, Literature & Creativity", grammar: "Past Perfect Simple" },
  { id: 19, theme: "Traditions & Cultural Diversity", grammar: "Articles (A/An, The, Zero Article) & Advanced Quantifiers" },
  { id: 20, theme: "Law, Order & Social Rules", grammar: "Modals of Deduction (Must, Might, Can't)" },
  { id: 21, theme: "Speculating about the Future & Society", grammar: "Second Conditional" },
  { id: 22, theme: "History & Turning Points", grammar: "The Passive Voice (All Tenses review)" },
  { id: 23, theme: "Scientific Breakthroughs", grammar: "Reported Speech (Questions & Commands)" },
  { id: 24, theme: "Emotional Intelligence & Feelings", grammar: "Question Tags & Indirect Questions" },
  { id: 25, theme: "Fashion & Self-Expression", grammar: "Non-Defining Relative Clauses" },
  { id: 26, theme: "Natural Disasters & Emergencies", grammar: "Third Conditional" },
  { id: 27, theme: "Success, Ambition & Money", grammar: "Future Continuous & Future Perfect" },
  { id: 28, theme: "Music & Global Festivals", grammar: "Mixed Conditionals (Introductory B1 level)" },
  { id: 29, theme: "Social Responsibility & Ethics", grammar: "Causative: Have/Get something done" },
  { id: 30, theme: "Course Synthesis & Final Review", grammar: "Comprehensive Review of B1 Grammar & Vocabulary" }
];

const EXERCISE_TYPES = [
  'multiple-choice',
  'fill-blank',
  'sentence-building'
];

async function generateExercisesForUnit(unitId: number) {
  const unit = SYLLABUS.find(u => u.id === unitId);
  if (!unit) return;

  console.log(`🚀 Generating 50 PROFESSIONAL exercises for Unit ${unitId}: ${unit.theme}...`);
  
  const exercises: any[] = [];
  const totalExercises = 50;
  const batchSize = 5;
  const totalBatches = totalExercises / batchSize;

  for (let i = 0; i < totalBatches; i++) {
    const type = EXERCISE_TYPES[i % EXERCISE_TYPES.length];
    const prompt = `
      Create ${batchSize} high-quality, professional English learning exercises for REAL B1 level (Intermediate).
      UNIT: ${unitId}
      THEME: ${unit.theme}
      GRAMMAR FOCUS: ${unit.grammar}
      EXERCISE TYPE: ${type}
      
      PEDAGOGICAL STANDARDS:
      - This is NOT for beginners. Use B1 vocabulary and structures (CEFR standards).
      - Avoid simple sentences. Use subordination, connectors (however, although, despite), and natural phrasing.
      - Context: Use professional, academic, or realistic adult social contexts.
      - Purpose: Test functional use of English in the given theme/grammar, not just vocabulary.
      
      STRICT FORMATTING RULES:
      1. CRITICAL: Every single English word MUST have its own translation brackets. 
         - CORRECT: [[I|Yo]] [[work|trabajo]] [[from|desde]] [[home|casa]].
         - INCORRECT: [[I work|Yo trabajo]] [[from home|desde casa]].
         - INCORRECT: [[to|trabajar]] [[work|desde]]. (Translations must match the English word exactly).
      2. GAPS: For "multiple-choice" and "fill-blank", you MUST use exactly "_______" (seven underscores) in the question text.
      3. CRITICAL: The correct answer MUST NOT appear in the question text for multiple-choice/fill-blank. Use the gap.
      4. OPTIONS: Keep options concise. If the gap is for a verb, the option should be the verb form. Every option must also use [[word|translation]] syntax.
      5. SENTENCE BUILDING: 'words' must be an array of strings, each string being one bracketed pair [[word|translation]]. 
      6. Spanish Only: Titles, instructions, and explanations MUST be in Spanish.
      7. Explanations: Provide a brief pedagogical note in Spanish explaining the grammar or vocabulary choice.
      8. Transcript: Include a clean "transcript" field (no brackets, no translations, includes correct word instead of gap) for audio.
      
      JSON STRUCTURE EXAMPLE (STRICT):
      {
        "exercises": [
          {
            "type": "multiple-choice",
            "level": "B1",
            "topic": "${unit.theme}",
            "difficulty": "medium",
            "transcript": "I am working hard these days.",
            "content": {
              "title": "Spanish Title",
              "instructions": "Spanish Instructions",
              "questions": [
                {
                  "question": "[[I|Yo]] _______ [[working|trabajando]] [[hard|duro]] [[these|estos]] [[days|días]].",
                  "options": ["[[am|estoy]]", "[[do|hago]]"],
                  "correctAnswer": 0,
                  "explanation": "Uso del presente continuo para acciones temporales."
                }
              ]
            }
          },
          {
            "type": "sentence-building",
            "level": "B1",
            "topic": "${unit.theme}",
            "difficulty": "medium",
            "transcript": "She is looking for a new job.",
            "content": {
              "title": "Construcción de oraciones",
              "instructions": "Ordena las palabras para formar una oración correcta.",
              "correctSentence": "[[She|Ella]] [[is|está]] [[looking|buscando]] [[for|por]] [[a|un]] [[new|nuevo]] [[job|trabajo]].",
              "words": ["[[looking|buscando]]", "[[She|Ella]]", "[[job|trabajo]]", "[[for|por]]", "[[is|está]]", "[[a|un]]"],
              "explanation": "Estructura del presente continuo: Sujeto + am/is/are + verbo-ing."
            }
          }
        ]
      }
    `;

    try {
      const response = await openai.chat.completions.create({
        model: "gpt-4o",
        messages: [
          { role: "system", content: "You are an expert English Professor specializing in B1 level curriculum. You output only valid JSON. You follow translation syntax [[word|translation]] for ALL English text. For 'sentence-building' type, DO NOT use a 'questions' array; put 'correctSentence', 'words', and 'explanation' directly inside 'content'." },
          { role: "user", content: prompt }
        ],
        response_format: { type: "json_object" }
      });

      const data = JSON.parse(response.choices[0].message.content || '{"exercises":[]}');
      const batch = data.exercises.map((ex: any, index: number) => {
        const exerciseIndex = exercises.length + index + 1;
        const audioUrl = `audio/b1/unit-${unitId}/e${exerciseIndex}.mp3`;
        
        // Fix sentence-building structure if GPT still puts it in questions
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
          id: `b1-u${unitId}-e${exerciseIndex}`,
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
    await generateExercisesForUnit(1);
  }
}

main().catch(console.error);
