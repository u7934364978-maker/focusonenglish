import { Exercise } from '@/lib/exercise-generator';

export const UNIT_7_EXERCISES: Exercise[] = [
  // --- SUB-TOPIC 1: Past Simple: be (was/were) (1-10) ---
  {
    id: 'a2-u7-e1',
    type: 'flashcard',
    level: 'A2',
    topic: 'Past Memories',
    topicName: 'Past Memories',
    difficulty: 'easy',
    content: {
      items: [
        {
          front: 'Estaba / Era (singular)',
          back: 'Was',
          example: 'I was at home yesterday.',
          pronunciation: '/wɒz/',
          explanation: 'Pasado del verbo "to be" para I, He, She, It.'
        }
      ]
    } as any
  },
  {
    id: 'a2-u7-e2',
    type: 'flashcard',
    level: 'A2',
    topic: 'Past Memories',
    topicName: 'Past Memories',
    difficulty: 'easy',
    content: {
      items: [
        {
          front: 'Estaban / Eran (plural)',
          back: 'Were',
          example: 'They were happy at the party.',
          pronunciation: '/wɜː/',
          explanation: 'Pasado del verbo "to be" para You, We, They.'
        }
      ]
    } as any
  },
  {
    id: 'a2-u7-e3',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Past Memories',
    topicName: 'Past Memories',
    difficulty: 'easy',
    content: {
      title: 'Was vs Were',
      instructions: 'Elige la forma correcta.',
      questions: [
        {
          id: 'q1',
          question: 'Where ___ you last night?',
          options: ['was', 'were', 'am'],
          correctAnswer: 1,
          explanation: 'Para "you", siempre usamos "were" en el pasado.'
        }
      ]
    }
  },
  {
    id: 'a2-u7-e4',
    type: 'fill-blank',
    level: 'A2',
    topic: 'Past Memories',
    topicName: 'Past Memories',
    difficulty: 'easy',
    content: {
      title: 'Past states',
      instructions: 'Completa con "was" o "were".',
      questions: [
        {
          id: 'q1',
          text: 'She ___ a teacher 10 years ago.',
          correctAnswer: 'was',
          explanation: 'Para "she", el pasado de to be es "was".'
        }
      ]
    }
  },
  {
    id: 'a2-u7-e5',
    type: 'sentence-building',
    level: 'A2',
    topic: 'Past Memories',
    topicName: 'Past Memories',
    difficulty: 'medium',
    content: {
      title: 'Building past sentences',
      instructions: 'Ordena las palabras.',
      sentences: [
        {
          id: 's1',
          words: ['We', 'were', 'at', 'the', 'beach', 'last', 'Sunday', '.'],
          correctSentence: 'We were at the beach last Sunday.',
          translation: 'Estuvimos en la playa el domingo pasado.',
          hint: 'Empieza con "We".',
          explanation: 'Estructura: Sujeto + were + lugar + tiempo.',
          points: 10
        }
      ]
    } as any
  },
  {
    id: 'a2-u7-e6',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Past Memories',
    topicName: 'Past Memories',
    difficulty: 'medium',
    content: {
      title: 'Negative was/were',
      instructions: 'Elige la forma negativa correcta.',
      questions: [
        {
          id: 'q1',
          question: 'The film ___ very good.',
          options: ["wasn't", "weren't", "not was"],
          correctAnswer: 0,
          explanation: '"The film" es singular, usamos "wasn\'t".'
        }
      ]
    }
  },
  {
    id: 'a2-u7-e7',
    type: 'matching',
    level: 'A2',
    topic: 'Past Memories',
    topicName: 'Past Memories',
    difficulty: 'easy',
    content: {
      title: 'Time expressions for the past',
      instructions: 'Une la expresión con su traducción.',
      pairs: [
        { id: '1', left: 'Yesterday', right: 'Ayer' },
        { id: '2', left: 'Last week', right: 'La semana pasada' },
        { id: '3', left: 'A month ago', right: 'Hace un mes' },
        { id: '4', left: 'When I was a child', right: 'Cuando era niño/a' }
      ],
      explanation: 'Marcadores temporales habituales para el pasado.'
    } as any
  },
  {
    id: 'a2-u7-e8',
    type: 'speaking-analysis',
    level: 'A2',
    topic: 'Past Memories',
    topicName: 'Past Memories',
    difficulty: 'easy',
    content: {
      title: 'Pronunciation: Were',
      instructions: 'Di "We were there".',
      questions: [
        {
          id: 'q1',
          text: 'We were there',
          correctAnswer: 'We were there',
          explanation: '"Were" se pronuncia /wɜː/, similar a "word" sin la "d".'
        }
      ]
    }
  },
  {
    id: 'a2-u7-e9',
    type: 'fill-blank',
    level: 'A2',
    topic: 'Past Memories',
    topicName: 'Past Memories',
    difficulty: 'medium',
    content: {
      title: 'Questions with was/were',
      instructions: 'Completa la pregunta.',
      questions: [
        {
          id: 'q1',
          text: '___ the exam difficult?',
          correctAnswer: 'Was',
          explanation: 'Pregunta singular sobre el examen.'
        }
      ]
    }
  },
  {
    id: 'a2-u7-e10',
    type: 'sentence-building',
    level: 'A2',
    topic: 'Past Memories',
    topicName: 'Past Memories',
    difficulty: 'medium',
    content: {
      title: 'Past question building',
      instructions: 'Ordena.',
      sentences: [
        {
          id: 's1',
          words: ['Why', 'were', 'you', 'late', 'this', 'morning', '?'],
          correctSentence: 'Why were you late this morning?',
          translation: '¿Por qué llegaste tarde esta mañana?',
          hint: 'Empieza con "Why".',
          explanation: 'Estructura: Why + were + sujeto + adjetivo.',
          points: 10
        }
      ]
    } as any
  },

  // --- SUB-TOPIC 2: Past Simple: Regular Verbs (11-20) ---
  {
    id: 'a2-u7-e11',
    type: 'flashcard',
    level: 'A2',
    topic: 'Past Memories',
    topicName: 'Past Memories',
    difficulty: 'easy',
    content: {
      items: [
        {
          front: 'Verbos regulares (pasado)',
          back: '-ed ending',
          example: 'Walk -> Walked, Cook -> Cooked',
          pronunciation: '/-t/, /-d/, or /-ɪd/',
          explanation: 'Añadimos "-ed" al infinitivo para formar el pasado.'
        }
      ]
    } as any
  },
  {
    id: 'a2-u7-e12',
    type: 'matching',
    level: 'A2',
    topic: 'Past Memories',
    topicName: 'Past Memories',
    difficulty: 'easy',
    content: {
      title: 'Regular past forms',
      instructions: 'Une el infinitivo con su pasado.',
      pairs: [
        { id: '1', left: 'Visit', right: 'Visited' },
        { id: '2', left: 'Watch', right: 'Watched' },
        { id: '3', left: 'Listen', right: 'Listened' },
        { id: '4', left: 'Play', right: 'Played' },
        { id: '5', left: 'Dance', right: 'Danced' }
      ],
      explanation: 'Formación estándar del pasado regular.'
    } as any
  },
  {
    id: 'a2-u7-e13',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Past Memories',
    topicName: 'Past Memories',
    difficulty: 'medium',
    content: {
      title: 'Spelling rules -ed',
      instructions: 'Elige la forma correcta.',
      questions: [
        {
          id: 'q1',
          question: 'Pasado de "Stop":',
          options: ['Stoped', 'Stopped', 'Stopt'],
          correctAnswer: 1,
          explanation: 'Doblamos la consonante final en verbos cortos (consonante-vocal-consonante).'
        }
      ]
    }
  },
  {
    id: 'a2-u7-e14',
    type: 'fill-blank',
    level: 'A2',
    topic: 'Past Memories',
    topicName: 'Past Memories',
    difficulty: 'medium',
    content: {
      title: 'Past actions',
      instructions: 'Escribe el verbo en pasado simple.',
      questions: [
        {
          id: 'q1',
          text: 'Yesterday, I ___ to my grandmother. (talk)',
          correctAnswer: 'talked',
          explanation: 'Verbo regular: añadimos "-ed".'
        }
      ]
    }
  },
  {
    id: 'a2-u7-e15',
    type: 'sentence-building',
    level: 'A2',
    topic: 'Past Memories',
    topicName: 'Past Memories',
    difficulty: 'medium',
    content: {
      title: 'Building past actions',
      instructions: 'Ordena.',
      sentences: [
        {
          id: 's1',
          words: ['He', 'studied', 'a', 'lot', 'for', 'the', 'test', '.'],
          correctSentence: 'He studied a lot for the test.',
          translation: 'Él estudió mucho para el examen.',
          hint: 'Pasado de "study".',
          explanation: 'En verbos que terminan en consonante + y, cambiamos la "y" por "i" + "ed".',
          points: 10
        }
      ]
    } as any
  },
  {
    id: 'a2-u7-e16',
    type: 'speaking-analysis',
    level: 'A2',
    topic: 'Past Memories',
    topicName: 'Past Memories',
    difficulty: 'hard',
    content: {
      title: 'Pronunciation: -ed endings',
      instructions: 'Di "Visited".',
      questions: [
        {
          id: 'q1',
          text: 'Visited',
          correctAnswer: 'Visited',
          explanation: 'Cuando el verbo termina en "t" o "d", el "-ed" suena como /-ɪd/.'
        }
      ]
    }
  },
  {
    id: 'a2-u7-e17',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Past Memories',
    topicName: 'Past Memories',
    difficulty: 'medium',
    content: {
      title: 'Did for questions',
      instructions: 'Elige la opción correcta.',
      questions: [
        {
          id: 'q1',
          question: '___ you watch the game yesterday?',
          options: ['Do', 'Did', 'Were'],
          correctAnswer: 1,
          explanation: 'Usamos "Did" como auxiliar de pasado para todos los verbos excepto "to be".'
        }
      ]
    }
  },
  {
    id: 'a2-u7-e18',
    type: 'fill-blank',
    level: 'A2',
    topic: 'Past Memories',
    topicName: 'Past Memories',
    difficulty: 'hard',
    content: {
      title: 'Didn\'t for negative',
      instructions: 'Completa con la forma negativa.',
      questions: [
        {
          id: 'q1',
          text: 'I ___ the dinner last night. (not cook)',
          correctAnswer: "didn't cook",
          explanation: 'Auxiliar "didn\'t" + verbo en infinitivo.'
        }
      ]
    }
  },
  {
    id: 'a2-u7-e19',
    type: 'matching',
    level: 'A2',
    topic: 'Past Memories',
    topicName: 'Past Memories',
    difficulty: 'medium',
    content: {
      title: 'Irregular or Regular?',
      instructions: 'Une el verbo con su categoría.',
      pairs: [
        { id: '1', left: 'Wait', right: 'Regular (-ed)' },
        { id: '2', left: 'Finish', right: 'Regular (-ed)' },
        { id: '3', left: 'Go', right: 'Irregular' },
        { id: '4', left: 'See', right: 'Irregular' }
      ],
      explanation: 'Diferencia básica entre tipos de verbos en pasado.'
    } as any
  },
  {
    id: 'a2-u7-e20',
    type: 'sentence-building',
    level: 'A2',
    topic: 'Past Memories',
    topicName: 'Past Memories',
    difficulty: 'hard',
    content: {
      title: 'Past negative sentence',
      instructions: 'Ordena las palabras.',
      sentences: [
        {
          id: 's1',
          words: ['They', 'did', 'not', 'arrive', 'on', 'time', '.'],
          correctSentence: 'They did not arrive on time.',
          translation: 'Ellos no llegaron a tiempo.',
          hint: 'Usa "did not".',
          explanation: 'Estructura: Sujeto + did + not + verbo infinitivo + complemento.',
          points: 15
        }
      ]
    } as any
  },

  // --- SUB-TOPIC 3: Past Simple: Irregular Verbs (21-30) ---
  {
    id: 'a2-u7-e21',
    type: 'flashcard',
    level: 'A2',
    topic: 'Past Memories',
    topicName: 'Past Memories',
    difficulty: 'easy',
    content: {
      items: [
        {
          front: 'Fui / Fue (pasado de go)',
          back: 'Went',
          example: 'We went to Paris last year.',
          pronunciation: '/went/',
          explanation: 'Pasado irregular del verbo "to go".'
        }
      ]
    } as any
  },
  {
    id: 'a2-u7-e22',
    type: 'matching',
    level: 'A2',
    topic: 'Past Memories',
    topicName: 'Past Memories',
    difficulty: 'easy',
    content: {
      title: 'Common Irregular Verbs',
      instructions: 'Une el infinitivo con su pasado irregular.',
      pairs: [
        { id: '1', left: 'Go', right: 'Went' },
        { id: '2', left: 'See', right: 'Saw' },
        { id: '3', left: 'Eat', right: 'Ate' },
        { id: '4', left: 'Buy', right: 'Bought' },
        { id: '5', left: 'Drink', right: 'Drank' }
      ],
      explanation: 'Verbos irregulares muy frecuentes.'
    } as any
  },
  {
    id: 'a2-u7-e23',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Past Memories',
    topicName: 'Past Memories',
    difficulty: 'medium',
    content: {
      title: 'Irregular forms',
      instructions: 'Elige la forma correcta.',
      questions: [
        {
          id: 'q1',
          question: 'I ___ a new car last month.',
          options: ['buyed', 'bought', 'buy'],
          correctAnswer: 1,
          explanation: '"Bought" es el pasado irregular de "buy".'
        }
      ]
    }
  },
  {
    id: 'a2-u7-e24',
    type: 'fill-blank',
    level: 'A2',
    topic: 'Past Memories',
    topicName: 'Past Memories',
    difficulty: 'medium',
    content: {
      title: 'Past experience',
      instructions: 'Escribe el pasado irregular de "see".',
      questions: [
        {
          id: 'q1',
          text: 'We ___ a great movie yesterday.',
          correctAnswer: 'saw',
          explanation: '"Saw" es el pasado de "see".'
        }
      ]
    }
  },
  {
    id: 'a2-u7-e25',
    type: 'sentence-building',
    level: 'A2',
    topic: 'Past Memories',
    topicName: 'Past Memories',
    difficulty: 'medium',
    content: {
      title: 'Irregular past sentence',
      instructions: 'Ordena.',
      sentences: [
        {
          id: 's1',
          words: ['I', 'ate', 'a', 'pizza', 'for', 'lunch', '.'],
          correctSentence: 'I ate a pizza for lunch.',
          translation: 'Comí una pizza para el almuerzo.',
          hint: 'Pasado de "eat".',
          explanation: '"Ate" se pronuncia igual que el número 8 (eight).',
          points: 10
        }
      ]
    } as any
  },
  {
    id: 'a2-u7-e26',
    type: 'flashcard',
    level: 'A2',
    topic: 'Past Memories',
    topicName: 'Past Memories',
    difficulty: 'easy',
    content: {
      items: [
        {
          front: 'Tuve / Tenía (pasado de have)',
          back: 'Had',
          example: 'I had a dog when I was little.',
          pronunciation: '/hæd/',
          explanation: 'Pasado irregular del verbo "to have".'
        }
      ]
    } as any
  },
  {
    id: 'a2-u7-e27',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Past Memories',
    topicName: 'Past Memories',
    difficulty: 'medium',
    content: {
      title: 'Make vs Do in past',
      instructions: 'Elige la correcta.',
      questions: [
        {
          id: 'q1',
          question: 'I ___ my homework after school.',
          options: ['made', 'did', 'doed'],
          correctAnswer: 1,
          explanation: 'El pasado de "do" es "did".'
        }
      ]
    }
  },
  {
    id: 'a2-u7-e28',
    type: 'speaking-analysis',
    level: 'A2',
    topic: 'Past Memories',
    topicName: 'Past Memories',
    difficulty: 'medium',
    content: {
      title: 'Pronunciation: Bought',
      instructions: 'Di "Bought".',
      questions: [
        {
          id: 'q1',
          text: 'Bought',
          correctAnswer: 'Bought',
          explanation: 'La "gh" es muda, se pronuncia /bɔːt/.'
        }
      ]
    }
  },
  {
    id: 'a2-u7-e29',
    type: 'fill-blank',
    level: 'A2',
    topic: 'Past Memories',
    topicName: 'Past Memories',
    difficulty: 'hard',
    content: {
      title: 'Irregular mix',
      instructions: 'Completa con el pasado de "give".',
      questions: [
        {
          id: 'q1',
          text: 'She ___ me a present for my birthday.',
          correctAnswer: 'gave',
          explanation: '"Gave" es el pasado de "give".'
        }
      ]
    }
  },
  {
    id: 'a2-u7-e30',
    type: 'sentence-building',
    level: 'A2',
    topic: 'Past Memories',
    topicName: 'Past Memories',
    difficulty: 'hard',
    content: {
      title: 'Complex irregular past',
      instructions: 'Ordena las palabras.',
      sentences: [
        {
          id: 's1',
          words: ['We', 'went', 'to', 'the', 'museum', 'and', 'saw', 'old', 'paintings', '.'],
          correctSentence: 'We went to the museum and saw old paintings.',
          translation: 'Fuimos al museo y vimos pinturas antiguas.',
          hint: 'Usa "and" para unir dos acciones.',
          explanation: 'Mantenemos ambos verbos en pasado simple.',
          points: 15
        }
      ]
    } as any
  },

  // --- SUB-TOPIC 4: Questions & Negatives (31-40) ---
  {
    id: 'a2-u7-e31',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Past Memories',
    topicName: 'Past Memories',
    difficulty: 'medium',
    content: {
      title: 'Question structure',
      instructions: 'Elige la pregunta correcta.',
      questions: [
        {
          id: 'q1',
          question: '¿Cómo preguntas si alguien comió?',
          options: ['Did you ate?', 'Did you eat?', 'Do you eat?'],
          correctAnswer: 1,
          explanation: 'Tras "Did", el verbo principal debe ir en infinitivo.'
        }
      ]
    }
  },
  {
    id: 'a2-u7-e32',
    type: 'fill-blank',
    level: 'A2',
    topic: 'Past Memories',
    topicName: 'Past Memories',
    difficulty: 'medium',
    content: {
      title: 'Negative past',
      instructions: 'Completa.',
      questions: [
        {
          id: 'q1',
          text: "I ___ go to the party because I was tired.",
          correctAnswer: "didn't",
          explanation: 'Negación en pasado simple.'
        }
      ]
    }
  },
  {
    id: 'a2-u7-e33',
    type: 'sentence-building',
    level: 'A2',
    topic: 'Past Memories',
    topicName: 'Past Memories',
    difficulty: 'medium',
    content: {
      title: 'Past question building',
      instructions: 'Ordena.',
      sentences: [
        {
          id: 's1',
          words: ['What', 'did', 'you', 'do', 'last', 'weekend', '?'],
          correctSentence: 'What did you do last weekend?',
          translation: '¿Qué hiciste el fin de semana pasado?',
          hint: 'Empieza con "What".',
          explanation: 'Estructura: What + did + sujeto + verbo.',
          points: 10
        }
      ]
    } as any
  },
  {
    id: 'a2-u7-e34',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Past Memories',
    topicName: 'Past Memories',
    difficulty: 'medium',
    content: {
      title: 'Short answers past',
      instructions: 'Elige la respuesta correcta.',
      questions: [
        {
          id: 'q1',
          question: 'Did they like the music?',
          options: ['Yes, they liked', 'Yes, they did', 'Yes, they do'],
          correctAnswer: 1,
          explanation: 'En respuestas cortas repetimos el auxiliar "did".'
        }
      ]
    }
  },
  {
    id: 'a2-u7-e35',
    type: 'speaking-analysis',
    level: 'A2',
    topic: 'Past Memories',
    topicName: 'Past Memories',
    difficulty: 'medium',
    content: {
      title: 'Pronunciation: Didn\'t',
      instructions: 'Di "I didn\'t see you".',
      questions: [
        {
          id: 'q1',
          text: "I didn't see you",
          correctAnswer: "I didn't see you",
          explanation: 'La primera "d" de "didn\'t" es fuerte, la segunda es más suave.'
        }
      ]
    }
  },
  {
    id: 'a2-u7-e36',
    type: 'fill-blank',
    level: 'A2',
    topic: 'Past Memories',
    topicName: 'Past Memories',
    difficulty: 'hard',
    content: {
      title: 'Complex past question',
      instructions: 'Completa con la palabra faltante.',
      questions: [
        {
          id: 'q1',
          text: 'Where ___ they go on holiday last year?',
          correctAnswer: 'did',
          explanation: 'Auxiliar para preguntas de pasado.'
        }
      ]
    }
  },
  {
    id: 'a2-u7-e37',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Past Memories',
    topicName: 'Past Memories',
    difficulty: 'medium',
    content: {
      title: 'Be vs other verbs',
      instructions: 'Elige la correcta.',
      questions: [
        {
          id: 'q1',
          question: '___ you happy yesterday?',
          options: ['Did', 'Were', 'Was'],
          correctAnswer: 1,
          explanation: 'Con el verbo "to be" no usamos el auxiliar "did".'
        }
      ]
    }
  },
  {
    id: 'a2-u7-e38',
    type: 'sentence-building',
    level: 'A2',
    topic: 'Past Memories',
    topicName: 'Past Memories',
    difficulty: 'hard',
    content: {
      title: 'Mixed past building',
      instructions: 'Ordena.',
      sentences: [
        {
          id: 's1',
          words: ['We', 'did', 'not', 'have', 'any', 'money', '.'],
          correctSentence: 'We did not have any money.',
          translation: 'No teníamos nada de dinero.',
          hint: 'Usa "did not".',
          explanation: 'Pasado negativo de "have".',
          points: 15
        }
      ]
    } as any
  },
  {
    id: 'a2-u7-e39',
    type: 'matching',
    level: 'A2',
    topic: 'Past Memories',
    topicName: 'Past Memories',
    difficulty: 'medium',
    content: {
      title: 'Questions and Answers',
      instructions: 'Une la pregunta con su respuesta.',
      pairs: [
        { id: '1', left: 'Where were you?', right: 'At home.' },
        { id: '2', left: 'What did you eat?', right: 'Pizza.' },
        { id: '3', left: 'Was it cold?', right: 'Yes, it was.' },
        { id: '4', left: 'Did you sleep well?', right: 'No, I didn\'t.' }
      ],
      explanation: 'Pares de comunicación en pasado.'
    } as any
  },
  {
    id: 'a2-u7-e40',
    type: 'speaking-analysis',
    level: 'A2',
    topic: 'Past Memories',
    topicName: 'Past Memories',
    difficulty: 'hard',
    content: {
      title: 'Pronunciation: Past question',
      instructions: 'Di "Did you have a good time?".',
      questions: [
        {
          id: 'q1',
          text: 'Did you have a good time?',
          correctAnswer: 'Did you have a good time?',
          explanation: 'Une "Did" y "you" casi como una sola palabra: /dɪdju/.'
        }
      ]
    }
  },

  // --- SUB-TOPIC 5: Review & Mix (41-50) ---
  {
    id: 'a2-u7-e41',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Past Memories',
    topicName: 'Past Memories',
    difficulty: 'medium',
    content: {
      title: 'Review: Regular past',
      instructions: 'Elige.',
      questions: [
        {
          id: 'q1',
          question: 'He ___ the door.',
          options: ['opened', 'opens', 'opening'],
          correctAnswer: 0,
          explanation: 'Acción completada en el pasado.'
        }
      ]
    }
  },
  {
    id: 'a2-u7-e42',
    type: 'fill-blank',
    level: 'A2',
    topic: 'Past Memories',
    topicName: 'Past Memories',
    difficulty: 'medium',
    content: {
      title: 'Review: Irregular go',
      instructions: 'Completa.',
      questions: [
        {
          id: 'q1',
          text: 'They ___ to the cinema last night.',
          correctAnswer: 'went',
          explanation: 'Pasado de "go".'
        }
      ]
    }
  },
  {
    id: 'a2-u7-e43',
    type: 'sentence-building',
    level: 'A2',
    topic: 'Past Memories',
    topicName: 'Past Memories',
    difficulty: 'medium',
    content: {
      title: 'Review: Was negative',
      instructions: 'Ordena.',
      sentences: [
        {
          id: 's1',
          words: ['The', 'food', 'was', 'not', 'very', 'good', '.'],
          correctSentence: 'The food was not very good.',
          translation: 'La comida no estaba muy buena.',
          hint: 'Usa "was not".',
          explanation: 'Opinión sobre el pasado con "to be".',
          points: 10
        }
      ]
    } as any
  },
  {
    id: 'a2-u7-e44',
    type: 'speaking-analysis',
    level: 'A2',
    topic: 'Past Memories',
    topicName: 'Past Memories',
    difficulty: 'hard',
    content: {
      title: 'Pronunciation: Drank',
      instructions: 'Di "I drank a lot of water".',
      questions: [
        {
          id: 'q1',
          text: 'I drank a lot of water',
          correctAnswer: 'I drank a lot of water',
          explanation: '"Drank" es el pasado de "drink".'
        }
      ]
    }
  },
  {
    id: 'a2-u7-e45',
    type: 'matching',
    level: 'A2',
    topic: 'Past Memories',
    topicName: 'Past Memories',
    difficulty: 'medium',
    content: {
      title: 'Past Time Mix',
      instructions: 'Une el infinitivo con el pasado.',
      pairs: [
        { id: '1', left: 'Become', right: 'Became' },
        { id: '2', left: 'Begin', right: 'Began' },
        { id: '3', left: 'Break', right: 'Broke' },
        { id: '4', left: 'Bring', right: 'Brought' }
      ],
      explanation: 'Más verbos irregulares para memorizar.'
    } as any
  },
  {
    id: 'a2-u7-e46',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Past Memories',
    topicName: 'Past Memories',
    difficulty: 'medium',
    content: {
      title: 'Review: Ago',
      instructions: 'Elige.',
      questions: [
        {
          id: 'q1',
          question: 'We met three years ___.',
          options: ['last', 'ago', 'before'],
          correctAnswer: 1,
          explanation: '"Ago" se usa después de un periodo de tiempo para indicar cuánto hace que ocurrió.'
        }
      ]
    }
  },
  {
    id: 'a2-u7-e47',
    type: 'fill-blank',
    level: 'A2',
    topic: 'Past Memories',
    topicName: 'Past Memories',
    difficulty: 'hard',
    content: {
      title: 'Review: Question auxiliary',
      instructions: 'Completa.',
      questions: [
        {
          id: 'q1',
          text: 'What time ___ you arrive?',
          correctAnswer: 'did',
          explanation: 'Auxiliar de pasado.'
        }
      ]
    }
  },
  {
    id: 'a2-u7-e48',
    type: 'sentence-building',
    level: 'A2',
    topic: 'Past Memories',
    topicName: 'Past Memories',
    difficulty: 'hard',
    content: {
      title: 'Review: Long past sentence',
      instructions: 'Ordena.',
      sentences: [
        {
          id: 's1',
          words: ['I', 'saw', 'my', 'old', 'friend', 'in', 'the', 'street', 'yesterday', '.'],
          correctSentence: 'I saw my old friend in the street yesterday.',
          translation: 'Vi a mi viejo amigo en la calle ayer.',
          hint: 'Usa "yesterday" al final.',
          explanation: 'Estructura narrativa en pasado simple.',
          points: 15
        }
      ]
    } as any
  },
  {
    id: 'a2-u7-e49',
    type: 'speaking-analysis',
    level: 'A2',
    topic: 'Past Memories',
    topicName: 'Past Memories',
    difficulty: 'medium',
    content: {
      title: 'Pronunciation: Was born',
      instructions: 'Di "I was born in 1995".',
      questions: [
        {
          id: 'q1',
          text: 'I was born in 1995',
          correctAnswer: 'I was born in 1995',
          explanation: 'Decimos los años por parejas: nineteen ninety-five.'
        }
      ]
    }
  },
  {
    id: 'a2-u7-e50',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Past Memories',
    topicName: 'Past Memories',
    difficulty: 'easy',
    content: {
      title: 'Final past check',
      instructions: '¿Cuál es el pasado de "write"?',
      questions: [
        {
          id: 'q1',
          question: 'Pasado de write:',
          options: ['writed', 'wrote', 'written'],
          correctAnswer: 1,
          explanation: '"Wrote" es el pasado de "write".'
        }
      ]
    }
  }
];
