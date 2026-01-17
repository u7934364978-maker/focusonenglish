// ============================================
// EJERCICIOS DE FALLBACK
// ============================================
// Ejercicios de ejemplo para usar cuando la API de OpenAI no está disponible

import { GeneratedExercise, ExerciseType, DifficultyLevel, CEFRLevel } from '@/lib/exercise-types';

/**
 * Genera un ID único para ejercicios de fallback
 */
function generateFallbackId(): string {
  return `fallback_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
}

/**
 * Ejercicios de ejemplo por tipo
 */
const FALLBACK_EXERCISES: Record<ExerciseType, any> = {
  'multiple-choice': {
    title: 'Mixed Conditionals Practice',
    instructions: 'Choose the correct answer to complete each conditional sentence.',
    questions: [
      {
        id: 'q1',
        question: 'If I _____ harder last year, I would have better job opportunities now.',
        options: [
          'A) studied',
          'B) had studied',
          'C) would study',
          'D) would have studied'
        ],
        correctAnswer: 'B',
        explanation: 'This is a mixed conditional (type 3 + type 2). The past condition (had studied) affects the present result (would have).'
      },
      {
        id: 'q2',
        question: 'She would be fluent in English now if she _____ speaking it at home.',
        options: [
          'A) practiced',
          'B) had practiced',
          'C) would practice',
          'D) practices'
        ],
        correctAnswer: 'B',
        explanation: 'Mixed conditional: the past action (had practiced) has an effect on the present (would be).'
      },
      {
        id: 'q3',
        question: 'If they _____ more careful with their finances, they wouldn\'t be in debt now.',
        options: [
          'A) were',
          'B) had been',
          'C) would be',
          'D) are'
        ],
        correctAnswer: 'B',
        explanation: 'The lack of care in the past (had been) causes the present situation (wouldn\'t be).'
      },
      {
        id: 'q4',
        question: 'I _____ that job offer if I had known about the working conditions.',
        options: [
          'A) wouldn\'t accept',
          'B) wouldn\'t have accepted',
          'C) won\'t accept',
          'D) don\'t accept'
        ],
        correctAnswer: 'B',
        explanation: 'Type 3 conditional: hypothetical past situation (had known) with past result (wouldn\'t have accepted).'
      }
    ]
  },

  'fill-blank': {
    title: 'Present Perfect vs Past Simple',
    instructions: 'Fill in the blanks with the correct form of the verb in parentheses.',
    questions: [
      {
        id: 'q1',
        question: 'I _____ (visit) Paris three times in my life.',
        correctAnswer: 'have visited',
        explanation: 'Present Perfect is used for life experiences without a specific time.'
      },
      {
        id: 'q2',
        question: 'She _____ (go) to London last summer.',
        correctAnswer: 'went',
        explanation: 'Past Simple is used with a specific time in the past (last summer).'
      },
      {
        id: 'q3',
        question: 'They _____ (not/finish) the project yet.',
        correctAnswer: 'haven\'t finished',
        explanation: 'Present Perfect with "yet" indicates an action not completed until now.'
      },
      {
        id: 'q4',
        question: 'When _____ you _____ (learn) to drive?',
        correctAnswer: 'did/learn',
        explanation: 'Past Simple with "when" asks about the specific moment of a past action.'
      }
    ]
  },

  'key-word-transformation': {
    title: 'Key Word Transformation',
    instructions: 'Complete the second sentence so that it means the same as the first, using the key word.',
    transformations: [
      {
        sentence: 'It\'s a pity I can\'t speak French.',
        keyWord: 'WISH',
        correctAnswer: 'I wish I could speak French',
        explanation: 'Wish + Past Simple to express wishes about the present.'
      },
      {
        sentence: 'She started learning English five years ago.',
        keyWord: 'BEEN',
        correctAnswer: 'She has been learning English for five years',
        explanation: 'Present Perfect Continuous with "for" indicates duration from a point in the past.'
      },
      {
        sentence: 'The coffee was too hot to drink.',
        keyWord: 'SO',
        correctAnswer: 'The coffee was so hot (that) I couldn\'t drink it',
        explanation: 'So + adjective + that transforms "too + adjective + to infinitive".'
      }
    ]
  },

  'reading-comprehension': {
    title: 'The Rise of Remote Work',
    text: `The COVID-19 pandemic has fundamentally changed the way we work. What started as a temporary measure to keep businesses running during lockdowns has evolved into a permanent shift in workplace culture. Many companies have discovered that employees can be just as productive, if not more so, when working from home.

However, this transition hasn't been without its challenges. While remote work offers flexibility and eliminates commuting time, it can also lead to feelings of isolation and difficulty in separating work from personal life. Companies are now grappling with how to maintain team cohesion and company culture in a distributed workforce.

Looking ahead, experts predict that a hybrid model—combining office and remote work—will become the norm. This approach aims to provide the best of both worlds: the flexibility of remote work with the collaboration benefits of in-person interaction.`,
    questions: [
      {
        id: 'q1',
        question: 'According to the text, remote work initially began as:',
        options: [
          'A) A permanent solution',
          'B) A temporary measure',
          'C) An experiment',
          'D) A company policy'
        ],
        correctAnswer: 'B',
        explanation: 'The text clearly states "started as a temporary measure".'
      },
      {
        id: 'q2',
        question: 'One challenge of remote work mentioned is:',
        options: [
          'A) Lower productivity',
          'B) Higher costs',
          'C) Feelings of isolation',
          'D) Technical difficulties'
        ],
        correctAnswer: 'C',
        explanation: 'The text mentions "feelings of isolation" as one of the challenges.'
      },
      {
        id: 'q3',
        question: 'The future of work is predicted to be:',
        options: [
          'A) Fully remote',
          'B) Fully in-office',
          'C) A hybrid model',
          'D) Uncertain'
        ],
        correctAnswer: 'C',
        explanation: 'The text predicts that "a hybrid model... will become the norm".'
      }
    ]
  },

  // Tipos básicos para otros tipos de ejercicios
  'true-false': {
    title: 'English Grammar Facts',
    instructions: 'Indicate whether the following statements are true or false.',
    questions: [
      {
        id: 'q1',
        statement: 'The present perfect is used to talk about completed actions at a specific time in the past.',
        correctAnswer: false,
        explanation: 'False. The Present Perfect is NOT used with specific times in the past.'
      },
      {
        id: 'q2',
        statement: 'Modal verbs are followed by the infinitive without "to".',
        correctAnswer: true,
        explanation: 'True. Modal verbs (can, could, should, etc.) are followed by the infinitive without "to".'
      }
    ]
  },

  'word-formation': {
    title: 'Word Formation: Professional Development',
    instructions: 'Use the word given in capitals at the end of each line to form a word that fits in the gap.',
    text: `Building a successful career requires careful (1. PLAN)_____ and continuous (2. DEVELOP)_____. Many professionals find that maintaining a positive (3. THINK)_____ is essential for growth. It's important to be (4. FLEX)_____ and adapt to changing workplace demands. Those who show (5. CREATE)_____ in problem-solving often achieve greater (6. SUCCESS)_____. However, it's also (7. ESSENCE)_____ to maintain work-life balance and avoid (8. EXHAUST)_____.`,
    questions: [
      {
        id: 'q1',
        gapNumber: 1,
        baseWord: 'PLAN',
        correctAnswer: 'planning',
        acceptableAnswers: ['planning'],
        explanation: 'Need noun/gerund form: "careful planning" (the process of making plans).',
        wordType: 'noun/gerund',
        transformation: 'verb → noun (-ing)',
        points: 1
      },
      {
        id: 'q2',
        gapNumber: 2,
        baseWord: 'DEVELOP',
        correctAnswer: 'development',
        acceptableAnswers: ['development'],
        explanation: 'Need noun form: "continuous development" (the process of developing).',
        wordType: 'noun',
        transformation: 'verb → noun (-ment)',
        points: 1
      },
      {
        id: 'q3',
        gapNumber: 3,
        baseWord: 'THINK',
        correctAnswer: 'mindset',
        acceptableAnswers: ['mindset', 'thinking'],
        explanation: 'Need noun form: "positive mindset/thinking" (way of thinking).',
        wordType: 'noun',
        transformation: 'verb → noun (compound/gerund)',
        points: 1
      },
      {
        id: 'q4',
        gapNumber: 4,
        baseWord: 'FLEX',
        correctAnswer: 'flexible',
        acceptableAnswers: ['flexible'],
        explanation: 'Need adjective form: "be flexible" (able to change easily).',
        wordType: 'adjective',
        transformation: 'noun → adjective (-ible)',
        points: 1
      },
      {
        id: 'q5',
        gapNumber: 5,
        baseWord: 'CREATE',
        correctAnswer: 'creativity',
        acceptableAnswers: ['creativity'],
        explanation: 'Need noun form: "show creativity" (the quality of being creative).',
        wordType: 'noun',
        transformation: 'verb → noun (-ivity)',
        points: 1
      },
      {
        id: 'q6',
        gapNumber: 6,
        baseWord: 'SUCCESS',
        correctAnswer: 'success',
        acceptableAnswers: ['success'],
        explanation: 'Already a noun: "achieve success" (no transformation needed).',
        wordType: 'noun',
        transformation: 'noun → noun (no change)',
        points: 1
      },
      {
        id: 'q7',
        gapNumber: 7,
        baseWord: 'ESSENCE',
        correctAnswer: 'essential',
        acceptableAnswers: ['essential'],
        explanation: 'Need adjective form: "essential to maintain" (absolutely necessary).',
        wordType: 'adjective',
        transformation: 'noun → adjective (-tial)',
        points: 1
      },
      {
        id: 'q8',
        gapNumber: 8,
        baseWord: 'EXHAUST',
        correctAnswer: 'exhaustion',
        acceptableAnswers: ['exhaustion'],
        explanation: 'Need noun form: "avoid exhaustion" (extreme tiredness).',
        wordType: 'noun',
        transformation: 'verb → noun (-ion)',
        points: 1
      }
    ],
    focusAreas: ['Noun formation', 'Adjective formation', 'Suffix patterns', 'Word transformation']
  },

  'multiple-choice-cloze': {
    title: 'Text Completion',
    text: 'Learning a new language can be ___(1)___ but rewarding. It requires ___(2)___ and dedication.',
    instructions: 'Choose the correct word for each gap.',
    questions: [
      {
        id: 'q1',
        options: ['A) easy', 'B) challenging', 'C) boring', 'D) simple'],
        correctAnswer: 'B',
        explanation: '"But rewarding" indicates contrast, so "challenging" is the best option.'
      },
      {
        id: 'q2',
        options: ['A) luck', 'B) money', 'C) patience', 'D) time'],
        correctAnswer: 'C',
        explanation: '"Patience" fits best with the context of learning a language.'
      }
    ]
  },

  'sentence-building': {
    title: 'Sentence Building',
    instructions: 'Put the words in order to form correct sentences.',
    questions: [
      {
        id: 'q1',
        words: ['have', 'I', 'been', 'learning', 'English', 'for', 'two', 'years'],
        correctAnswer: 'I have been learning English for two years',
        explanation: 'Present Perfect Continuous: Subject + have/has + been + verb-ing'
      }
    ]
  },

  'listening-comprehension': {
    title: 'Listening Exercise',
    instructions: 'This is a practice exercise. In the full version you would listen to an audio.',
    questions: [
      {
        id: 'q1',
        question: 'What is the main topic?',
        options: ['A) Travel', 'B) Education', 'C) Technology', 'D) Sports'],
        correctAnswer: 'B',
        explanation: 'This is a demonstration exercise.'
      }
    ]
  },

  'speaking-analysis': {
    title: 'Speaking Practice',
    instructions: 'Prepare a 2-minute response on the following topic.',
    topic: 'Describe a memorable experience from your childhood.',
    criteria: [
      'Vocabulary range',
      'Grammatical accuracy',
      'Fluency and coherence',
      'Pronunciation'
    ]
  },

  'writing-analysis': {
    title: 'Writing Task',
    instructions: 'Write a 250-word essay on the following topic.',
    topic: 'The advantages and disadvantages of social media',
    criteria: [
      'Task achievement',
      'Coherence and cohesion',
      'Lexical resource',
      'Grammatical range and accuracy'
    ]
  },

  'pronunciation-practice': {
    title: 'Pronunciation Exercise',
    instructions: 'Practice the pronunciation of the following words.',
    words: [
      { word: 'thought', phonetic: '/θɔːt/', tip: 'The "th" is pronounced with the tongue between the teeth.' },
      { word: 'through', phonetic: '/θruː/', tip: 'Similar to "thought" but with the /uː/ sound at the end.' },
      { word: 'although', phonetic: '/ɔːlˈðəʊ/', tip: 'The "th" here is voiced, like in "the".' }
    ]
  }
};

/**
 * Genera un ejercicio de fallback
 */
export function generateFallbackExercise(
  type: ExerciseType,
  topic: string = 'General Practice',
  difficulty: DifficultyLevel = 'medium',
  level: CEFRLevel = 'B2'
): GeneratedExercise {
  const exerciseData = FALLBACK_EXERCISES[type] || FALLBACK_EXERCISES['multiple-choice'];
  
  return {
    id: generateFallbackId(),
    type,
    category: getCategory(type),
    topic,
    difficulty,
    level,
    content: exerciseData,
    createdAt: new Date(),
    estimatedTime: 5,
    isFallback: true // Marca para identificar ejercicios de fallback
  };
}

/**
 * Determina la categoría basada en el tipo
 */
function getCategory(type: ExerciseType): string {
  const categoryMap: Record<ExerciseType, string> = {
    'multiple-choice': 'grammar',
    'fill-blank': 'grammar',
    'true-false': 'grammar',
    'key-word-transformation': 'grammar',
    'word-formation': 'vocabulary',
    'multiple-choice-cloze': 'vocabulary',
    'sentence-building': 'grammar',
    'reading-comprehension': 'reading',
    'listening-comprehension': 'listening',
    'speaking-analysis': 'speaking',
    'writing-analysis': 'writing',
    'pronunciation-practice': 'pronunciation'
  };
  
  return categoryMap[type] || 'exam-practice';
}

/**
 * Verifica si los fallbacks están activos
 */
export function shouldUseFallback(): boolean {
  // Usar fallback si no hay API key configurada
  return !process.env.OPENAI_API_KEY && !process.env.GEMINI_API_KEY;
}

export default {
  generateFallbackExercise,
  shouldUseFallback
};
