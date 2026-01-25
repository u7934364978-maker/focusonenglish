// ============================================
// EJERCICIOS DE FALLBACK
// ============================================
// Ejercicios de ejemplo para usar cuando la API de OpenAI no está disponible

import { GeneratedExercise, ExerciseType, DifficultyLevel, CEFRLevel, GenerateExerciseRequest } from '@/lib/exercise-types';

/**
 * Ejercicios de ejemplo por tipo y nivel (Biblioteca ampliada para evitar repeticiones)
 */
const FALLBACK_LIBRARY: Record<string, any[]> = {
  // ============================================
  // EJERCICIOS ESPECIALES PARA A1 (PRINCIPIANTES ABSOLUTOS)
  // ============================================
  'multiple-choice-a1': [
    {
      title: 'Greetings and Introductions',
      instructions: 'Choose the correct word to complete the sentence.',
      questions: [
        {
          id: 'q1',
          question: 'Hello! My name ___ Maria.',
          options: ['is', 'am', 'are', 'be'],
          correctAnswer: 'is',
          explanation: 'Usamos "is" con "My name" (tercera persona singular).',
          translation: 'Hola! Mi nombre ___ María.',
          visualHint: '👋'
        },
        {
          id: 'q2',
          question: 'Nice to ___ you!',
          options: ['meet', 'meeting', 'meets', 'met'],
          correctAnswer: 'meet',
          explanation: 'La expresión es "Nice to meet you" (Encantado de conocerte).',
          translation: 'Encantado de ___ te!',
          visualHint: '🤝'
        },
        {
          id: 'q3',
          question: 'What is ___ name?',
          options: ['you', 'your', 'yours', 'my'],
          correctAnswer: 'your',
          explanation: '"Your" es el posesivo de "you" (tu/su).',
          translation: '¿Cuál es ___ nombre?',
          visualHint: '❓'
        },
        {
          id: 'q4',
          question: 'I ___ from Spain.',
          options: ['am', 'is', 'are', 'be'],
          correctAnswer: 'am',
          explanation: 'Usamos "am" con "I" (yo).',
          translation: 'Yo ___ de España.',
          visualHint: '🇪🇸'
        },
        {
          id: 'q5',
          question: 'How ___ you?',
          options: ['are', 'is', 'am', 'do'],
          correctAnswer: 'are',
          explanation: 'Usamos "are" con "you" (tú/usted).',
          translation: '¿Cómo ___ tú?',
          visualHint: '😊'
        }
      ]
    },
    {
      title: 'Colors and Objects',
      instructions: 'Choose the correct color or object.',
      questions: [
        {
          id: 'q1',
          question: 'The apple is ___.',
          options: ['red', 'blue', 'yellow', 'green'],
          correctAnswer: 'red',
          explanation: 'Las manzanas típicamente son rojas.',
          translation: 'La manzana es ___.',
          visualHint: '🍎'
        },
        {
          id: 'q2',
          question: 'The sky is ___.',
          options: ['blue', 'red', 'black', 'green'],
          correctAnswer: 'blue',
          explanation: 'El cielo es azul.',
          translation: 'El cielo es ___.',
          visualHint: '☁️'
        },
        {
          id: 'q3',
          question: 'This is a ___.',
          options: ['book', 'cat', 'car', 'house'],
          correctAnswer: 'book',
          explanation: 'La imagen muestra un libro.',
          translation: 'Esto es un ___.',
          visualHint: '📚'
        },
        {
          id: 'q4',
          question: 'I have a ___ car.',
          options: ['black', 'blue', 'red', 'white'],
          correctAnswer: 'red',
          explanation: 'Cualquier color es correcto, pero "red" es la respuesta del ejemplo.',
          translation: 'Yo tengo un coche ___.',
          visualHint: '🚗'
        },
        {
          id: 'q5',
          question: 'The ___ is yellow.',
          options: ['sun', 'moon', 'star', 'cloud'],
          correctAnswer: 'sun',
          explanation: 'El sol es amarillo.',
          translation: 'El ___ es amarillo.',
          visualHint: '☀️'
        }
      ]
    },
    {
      title: 'Family Members',
      instructions: 'Choose the correct family member.',
      questions: [
        {
          id: 'q1',
          question: 'My father\'s wife is my ___.',
          options: ['mother', 'sister', 'aunt', 'grandmother'],
          correctAnswer: 'mother',
          explanation: 'La esposa de tu padre es tu madre.',
          translation: 'La esposa de mi padre es mi ___.',
          visualHint: '👨‍👩‍👧'
        },
        {
          id: 'q2',
          question: 'My mother\'s son is my ___.',
          options: ['brother', 'father', 'uncle', 'cousin'],
          correctAnswer: 'brother',
          explanation: 'El hijo de tu madre es tu hermano.',
          translation: 'El hijo de mi madre es mi ___.',
          visualHint: '👦'
        },
        {
          id: 'q3',
          question: 'My parents\' daughter is my ___.',
          options: ['sister', 'mother', 'aunt', 'cousin'],
          correctAnswer: 'sister',
          explanation: 'La hija de tus padres es tu hermana.',
          translation: 'La hija de mis padres es mi ___.',
          visualHint: '👧'
        },
        {
          id: 'q4',
          question: 'My father\'s father is my ___.',
          options: ['grandfather', 'uncle', 'brother', 'father'],
          correctAnswer: 'grandfather',
          explanation: 'El padre de tu padre es tu abuelo.',
          translation: 'El padre de mi padre es mi ___.',
          visualHint: '👴'
        },
        {
          id: 'q5',
          question: 'I am my parents\' ___.',
          options: ['child', 'parent', 'friend', 'teacher'],
          correctAnswer: 'child',
          explanation: 'Tú eres el hijo/hija de tus padres.',
          translation: 'Yo soy el ___ de mis padres.',
          visualHint: '👶'
        }
      ]
    },
    {
      title: 'Numbers and Counting',
      instructions: 'Choose the correct number.',
      questions: [
        {
          id: 'q1',
          question: 'I have ___ hands.',
          options: ['two', 'one', 'three', 'four'],
          correctAnswer: 'two',
          explanation: 'Las personas tienen dos manos.',
          translation: 'Yo tengo ___ manos.',
          visualHint: '✋✋'
        },
        {
          id: 'q2',
          question: 'A week has ___ days.',
          options: ['seven', 'five', 'six', 'eight'],
          correctAnswer: 'seven',
          explanation: 'Una semana tiene siete días.',
          translation: 'Una semana tiene ___ días.',
          visualHint: '📅'
        },
        {
          id: 'q3',
          question: '___ plus two equals five.',
          options: ['three', 'one', 'four', 'two'],
          correctAnswer: 'three',
          explanation: '3 + 2 = 5',
          translation: '___ más dos es igual a cinco.',
          visualHint: '➕'
        },
        {
          id: 'q4',
          question: 'I have ___ eyes.',
          options: ['two', 'one', 'three', 'four'],
          correctAnswer: 'two',
          explanation: 'Las personas tienen dos ojos.',
          translation: 'Yo tengo ___ ojos.',
          visualHint: '👀'
        },
        {
          id: 'q5',
          question: 'Ten minus five equals ___.',
          options: ['five', 'three', 'four', 'six'],
          correctAnswer: 'five',
          explanation: '10 - 5 = 5',
          translation: 'Diez menos cinco es igual a ___.',
          visualHint: '➖'
        }
      ]
    },
    {
      title: 'Food and Drinks',
      instructions: 'Choose the correct food or drink.',
      questions: [
        {
          id: 'q1',
          question: 'I drink ___ in the morning.',
          options: ['coffee', 'pizza', 'rice', 'chicken'],
          correctAnswer: 'coffee',
          explanation: 'El café es una bebida común por la mañana.',
          translation: 'Yo bebo ___ por la mañana.',
          visualHint: '☕'
        },
        {
          id: 'q2',
          question: 'An ___ is a fruit.',
          options: ['apple', 'egg', 'bread', 'cheese'],
          correctAnswer: 'apple',
          explanation: 'La manzana es una fruta.',
          translation: 'Una ___ es una fruta.',
          visualHint: '🍎'
        },
        {
          id: 'q3',
          question: 'I eat ___ for breakfast.',
          options: ['bread', 'water', 'juice', 'milk'],
          correctAnswer: 'bread',
          explanation: 'El pan es una comida común para el desayuno.',
          translation: 'Yo como ___ para el desayuno.',
          visualHint: '🍞'
        },
        {
          id: 'q4',
          question: '___ is white and comes from cows.',
          options: ['milk', 'water', 'juice', 'coffee'],
          correctAnswer: 'milk',
          explanation: 'La leche es blanca y viene de las vacas.',
          translation: '___ es blanca y viene de las vacas.',
          visualHint: '🥛'
        },
        {
          id: 'q5',
          question: 'I like to eat ___.',
          options: ['pizza', 'rain', 'sun', 'moon'],
          correctAnswer: 'pizza',
          explanation: 'La pizza es una comida.',
          translation: 'Me gusta comer ___.',
          visualHint: '🍕'
        }
      ]
    }
  ],
  'multiple-choice': [
    {
      title: 'Mixed Conditionals Practice',
      instructions: 'Choose the correct answer to complete each conditional sentence.',
      questions: [
        {
          id: 'q1',
          question: 'If I _____ harder last year, I would have better job opportunities now.',
          options: ['A) studied', 'B) had studied', 'C) would study', 'D) would have studied'],
          correctAnswer: 'B',
          explanation: 'Condicional mixto (tipo 3 + tipo 2). La condición pasada (had studied) afecta el resultado presente.'
        },
        {
          id: 'q2',
          question: 'She would be fluent in English now if she _____ speaking it at home.',
          options: ['A) practiced', 'B) had practiced', 'C) would practice', 'D) practices'],
          correctAnswer: 'B',
          explanation: 'Acción pasada (had practiced) con efecto en el presente (would be).'
        }
      ]
    },
    {
      title: 'Business English: Meetings',
      instructions: 'Select the most appropriate professional expression.',
      questions: [
        {
          id: 'q1',
          question: 'Could we _____ the meeting to next Tuesday?',
          options: ['A) put off', 'B) call off', 'C) set up', 'D) bring up'],
          correctAnswer: 'A',
          explanation: '"Put off" significa posponer.'
        }
      ]
    }
  ],
  'fill-blank': [
    {
      title: 'Present Perfect vs Past Simple',
      instructions: 'Fill in the blanks with the correct form of the verb.',
      questions: [
        {
          id: 'q1',
          question: 'I _____ (visit) Paris three times in my life.',
          correctAnswer: 'have visited',
          explanation: 'Experiencias de vida sin tiempo específico.'
        }
      ]
    },
    {
      title: 'Passive Voice Practice',
      instructions: 'Complete the sentences using the passive form.',
      questions: [
        {
          id: 'q1',
          question: 'The bridge _____ (build) in 1924.',
          correctAnswer: 'was built',
          explanation: 'Pasado simple pasivo (was/were + participio).'
        }
      ]
    }
  ],
  'reading-comprehension': [
    {
      title: 'The Rise of Remote Work',
      text: `The COVID-19 pandemic has fundamentally changed the way we work. Many companies have discovered that employees can be productive when working from home.`,
      questions: [
        {
          id: 'q1',
          question: 'How has the pandemic affected work?',
          options: ['A) No change', 'B) Changed fundamentally', 'C) Made it harder', 'D) Stopped work'],
          correctAnswer: 'B',
          explanation: 'El texto dice "fundamentally changed the way we work".'
        }
      ]
    }
  ],
  'writing-analysis': [
    {
      title: 'Task Achievement Practice',
      instructions: 'Write a short paragraph about your hobbies.',
      questions: [
        {
          id: 'q1',
          question: 'Explain what you like doing in your free time and why.',
          correctAnswer: 'A natural description of personal interests and hobbies.',
          explanation: 'Ensure you use present simple and connectors like "because" or "also".'
        }
      ]
    }
  ]
};

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
        explanation: 'Condicional mixto: la acción pasada (had practiced) tiene efecto en el presente (would be).'
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
    instructions: 'Fill in the blanks with the correct form of the verb in parentheses.',
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
    instructions: 'Complete the second sentence so that it means the same as the first, using the key word.',
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
    instructions: 'Indicate whether the following statements are true or false.',
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
        explanation: 'Este es un ejercicio de demostración.'
      }
    ]
  },

  'speaking-analysis': {
    title: 'Speaking Practice',
    instructions: 'Record your response to the following question. Speak for about 1-2 minutes.',
    questions: [
      {
        id: 'sq1',
        prompt: 'Introduce yourself. Tell me your name, where you are from, and what you like to do in your free time.',
        hints: [
          'Start with: "Hello, my name is..."',
          'Talk about your hobbies or interests',
          'Speak clearly and at a natural pace'
        ],
        targetWords: ['name', 'from', 'like', 'free time', 'hobby', 'enjoy'],
        expectedResponse: 'A natural self-introduction including name, origin, and hobbies'
      },
      {
        id: 'sq2',
        prompt: 'Describe your daily routine. What do you usually do in the morning, afternoon, and evening?',
        hints: [
          'Use time expressions: "in the morning", "at night"',
          'Use present simple: "I wake up", "I go to work"',
          'Describe activities in order'
        ],
        targetWords: ['wake up', 'breakfast', 'work', 'lunch', 'dinner', 'sleep'],
        expectedResponse: 'A description of daily activities with time expressions'
      },
      {
        id: 'sq3',
        prompt: 'Talk about a place you would like to visit. Why would you like to go there?',
        hints: [
          'Name the place clearly',
          'Give 2-3 reasons why you want to visit',
          'Use "I would like to..." or "I want to..."'
        ],
        targetWords: ['visit', 'because', 'interesting', 'culture', 'food', 'people'],
        expectedResponse: 'Description of a place with reasons for wanting to visit'
      }
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
      { word: 'thought', phonetic: '/θɔːt/', tip: 'La "th" se pronuncia con la lengua entre los dientes.' },
      { word: 'through', phonetic: '/θruː/', tip: 'Similar a "thought" pero con el sonido /uː/ al final.' },
      { word: 'although', phonetic: '/ɔːlˈðəʊ/', tip: 'La "th" aquí es sonora, como en "the".' }
    ]
  }
};

/**
 * Genera un ejercicio de fallback
 */
export function generateFallbackExercise(request: GenerateExerciseRequest): GeneratedExercise {
  const type = request.exerciseType;
  const level = request.level;
  
  // Para nivel A1, usar ejercicios especiales con traducciones y emojis
  let library;
  if (level === 'A1' && type === 'multiple-choice') {
    library = FALLBACK_LIBRARY['multiple-choice-a1'] || FALLBACK_LIBRARY['multiple-choice'];
  } else {
    library = FALLBACK_LIBRARY[type] || FALLBACK_LIBRARY['multiple-choice'];
  }
  
  // Selección aleatoria de la biblioteca para evitar repeticiones
  const randomIndex = Math.floor(Math.random() * library.length);
  const selectedContent = library[randomIndex];
  
  return {
    id: generateFallbackId(),
    type: request.exerciseType,
    category: getCategory(request.exerciseType),
    topic: request.topic || 'General Practice',
    difficulty: request.difficulty || 'medium',
    level: request.level || 'B2',
    content: selectedContent,
    createdAt: new Date(),
    estimatedTime: 5,
    isFallback: true
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
