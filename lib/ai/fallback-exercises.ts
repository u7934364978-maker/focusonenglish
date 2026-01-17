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
    instructions: 'Elige la respuesta correcta para completar cada oración condicional.',
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
        explanation: 'Esta es una oración condicional mixta (tipo 3 + tipo 2). La condición pasada (had studied) afecta el resultado presente (would have).'
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
        explanation: 'Mixed conditional: la acción pasada (had practiced) tiene efecto en el presente (would be).'
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
        explanation: 'La falta de cuidado en el pasado (had been) causa la situación presente (wouldn\'t be).'
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
        explanation: 'Condicional tipo 3: situación hipotética pasada (had known) con resultado pasado (wouldn\'t have accepted).'
      }
    ]
  },

  'fill-blank': {
    title: 'Present Perfect vs Past Simple',
    instructions: 'Completa los espacios en blanco con la forma correcta del verbo entre paréntesis.',
    questions: [
      {
        id: 'q1',
        question: 'I _____ (visit) Paris three times in my life.',
        correctAnswer: 'have visited',
        explanation: 'Present Perfect se usa para experiencias de vida sin tiempo específico.'
      },
      {
        id: 'q2',
        question: 'She _____ (go) to London last summer.',
        correctAnswer: 'went',
        explanation: 'Past Simple se usa con un tiempo específico en el pasado (last summer).'
      },
      {
        id: 'q3',
        question: 'They _____ (not/finish) the project yet.',
        correctAnswer: 'haven\'t finished',
        explanation: 'Present Perfect con "yet" indica una acción no completada hasta ahora.'
      },
      {
        id: 'q4',
        question: 'When _____ you _____ (learn) to drive?',
        correctAnswer: 'did/learn',
        explanation: 'Past Simple con "when" pregunta por el momento específico de una acción pasada.'
      }
    ]
  },

  'key-word-transformation': {
    title: 'Key Word Transformation',
    instructions: 'Completa la segunda oración para que signifique lo mismo que la primera, usando la palabra clave.',
    transformations: [
      {
        sentence: 'It\'s a pity I can\'t speak French.',
        keyWord: 'WISH',
        correctAnswer: 'I wish I could speak French',
        explanation: 'Wish + Past Simple para expresar deseos sobre el presente.'
      },
      {
        sentence: 'She started learning English five years ago.',
        keyWord: 'BEEN',
        correctAnswer: 'She has been learning English for five years',
        explanation: 'Present Perfect Continuous con "for" indica duración desde un punto en el pasado.'
      },
      {
        sentence: 'The coffee was too hot to drink.',
        keyWord: 'SO',
        correctAnswer: 'The coffee was so hot (that) I couldn\'t drink it',
        explanation: 'So + adjective + that transforma "too + adjective + to infinitive".'
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
        explanation: 'El texto dice claramente "started as a temporary measure".'
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
        explanation: 'El texto menciona "feelings of isolation" como uno de los desafíos.'
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
        explanation: 'El texto predice que "a hybrid model... will become the norm".'
      }
    ]
  },

  // Tipos básicos para otros tipos de ejercicios
  'true-false': {
    title: 'English Grammar Facts',
    instructions: 'Indica si las siguientes afirmaciones son verdaderas o falsas.',
    questions: [
      {
        id: 'q1',
        statement: 'The present perfect is used to talk about completed actions at a specific time in the past.',
        correctAnswer: false,
        explanation: 'Falso. El Present Perfect NO se usa con tiempos específicos en el pasado.'
      },
      {
        id: 'q2',
        statement: 'Modal verbs are followed by the infinitive without "to".',
        correctAnswer: true,
        explanation: 'Verdadero. Los verbos modales (can, could, should, etc.) van seguidos del infinitivo sin "to".'
      }
    ]
  },

  'word-formation': {
    title: 'Word Formation Practice',
    instructions: 'Forma la palabra correcta a partir de la palabra entre paréntesis.',
    questions: [
      {
        id: 'q1',
        question: 'The _____ (decide) was difficult to make.',
        correctAnswer: 'decision',
        explanation: 'Se necesita un sustantivo. "Decide" (verbo) → "decision" (sustantivo).'
      },
      {
        id: 'q2',
        question: 'She\'s very _____ (create) when it comes to solving problems.',
        correctAnswer: 'creative',
        explanation: 'Se necesita un adjetivo. "Create" (verbo) → "creative" (adjetivo).'
      }
    ]
  },

  'multiple-choice-cloze': {
    title: 'Text Completion',
    text: 'Learning a new language can be ___(1)___ but rewarding. It requires ___(2)___ and dedication.',
    instructions: 'Elige la palabra correcta para cada espacio.',
    questions: [
      {
        id: 'q1',
        options: ['A) easy', 'B) challenging', 'C) boring', 'D) simple'],
        correctAnswer: 'B',
        explanation: '"But rewarding" indica contraste, entonces "challenging" es la mejor opción.'
      },
      {
        id: 'q2',
        options: ['A) luck', 'B) money', 'C) patience', 'D) time'],
        correctAnswer: 'C',
        explanation: '"Patience" encaja mejor con el contexto de aprender un idioma.'
      }
    ]
  },

  'sentence-building': {
    title: 'Sentence Building',
    instructions: 'Ordena las palabras para formar oraciones correctas.',
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
    instructions: 'Este es un ejercicio de práctica. En la versión completa escucharías un audio.',
    questions: [
      {
        id: 'q1',
        question: 'What is the main topic?',
        options: ['A) Travel', 'B) Education', 'C) Technology', 'D) Sports'],
        correctAnswer: 'B',
        explanation: 'Este es un ejercicio de demostración.'
      }
    ]
  },

  'speaking-analysis': {
    title: 'Speaking Practice',
    instructions: 'Prepara una respuesta de 2 minutos sobre el siguiente tema.',
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
    instructions: 'Escribe un ensayo de 250 palabras sobre el siguiente tema.',
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
    instructions: 'Practica la pronunciación de las siguientes palabras.',
    words: [
      { word: 'thought', phonetic: '/θɔːt/', tip: 'La "th" se pronuncia con la lengua entre los dientes.' },
      { word: 'through', phonetic: '/θruː/', tip: 'Similar a "thought" pero con el sonido /uː/ al final.' },
      { word: 'although', phonetic: '/ɔːlˈðəʊ/', tip: 'La "th" aquí es sonora, como en "the".' }
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
