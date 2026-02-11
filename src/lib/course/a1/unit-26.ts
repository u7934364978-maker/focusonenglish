import { Exercise } from '@/lib/exercise-generator';

export const UNIT_26_EXERCISES: Exercise[] = [
  {
    id: 'a1-u26-e1',
    type: 'matching',
    level: 'A1',
    topic: 'Past Simple',
    topicName: 'Did you?',
    difficulty: 'easy',
    content: {
      title: 'Verbos Regulares en Pasado',
      instructions: 'Relaciona el verbo en presente con su forma regular en pasado (-ed).',
      pairs: [
        { id: 'p1', left: 'Work', right: 'Worked' },
        { id: 'p2', left: 'Play', right: 'Played' },
        { id: 'p3', left: 'Watch', right: 'Watched' },
        { id: 'p4', left: 'Study', right: 'Studied' },
        { id: 'p5', left: 'Listen', right: 'Listened' }
      ],
      explanation: 'Para formar el pasado de los verbos regulares, generalmente añadimos "-ed" al final del verbo.'
    } as any
  },
  {
    id: 'a1-u26-e2',
    type: 'multiple-choice',
    level: 'A1',
    topic: 'Past Simple',
    topicName: 'Did you?',
    difficulty: 'easy',
    content: {
      title: 'Yo trabajé ayer',
      instructions: 'Traduce: Yo trabajé ayer.',
      questions: [
        {
          id: 'q1',
          question: 'I ________ yesterday.',
          options: ['worked', 'work', 'working'],
          correctAnswer: 0,
          explanation: "Añadimos '-ed' al verbo 'work' para indicar que la acción ocurrió en el pasado."
        }
      ]
    }
  },
  {
    id: 'a1-u26-e3',
    type: 'fill-blank',
    level: 'A1',
    topic: 'Past Simple',
    topicName: 'Did you?',
    difficulty: 'easy',
    content: {
      title: 'Estudiar inglés',
      instructions: 'Escribe el pasado del verbo "study" (cuidado con la "y").',
      questions: [
        {
          id: 'q1',
          question: 'She ________ English last night.',
          correctAnswer: 'studied',
          explanation: "Cuando un verbo termina en consonante + 'y', cambiamos la 'y' por 'i' antes de añadir '-ed'."
        }
      ]
    } as any
  },
  {
    id: 'a1-u26-e4',
    type: 'flashcard',
    level: 'A1',
    topic: 'Past Simple',
    topicName: 'Did you?',
    difficulty: 'easy',
    content: {
      items: [
        {
          front: 'Anoche',
          back: 'Last night',
          example: 'I watched a movie last night.',
          pronunciation: '/læst naɪt/',
          explanation: '"Last night" se usa para referirse a la noche del día anterior.'
        }
      ]
    } as any
  },
  {
    id: 'a1-u26-e5',
    type: 'sentence-building',
    level: 'A1',
    topic: 'Past Simple',
    topicName: 'Did you?',
    difficulty: 'easy',
    content: {
      title: 'Jugamos al fútbol',
      instructions: 'Ordena para decir "Nosotros jugamos al fútbol el sábado".',
      sentences: [
        {
          id: 's1',
          words: ['Saturday', 'on', 'soccer', 'played', 'We'],
          correctSentence: 'We played soccer on Saturday',
          translation: 'Nosotros jugamos al fútbol el sábado.',
          explanation: 'La estructura es Sujeto + Verbo en pasado + Complemento + Tiempo.'
        }
      ]
    } as any
  },
  {
    id: 'a1-u26-e6',
    type: 'speaking-analysis',
    level: 'A1',
    topic: 'Past Simple',
    topicName: 'Did you?',
    difficulty: 'easy',
    content: {
      title: 'Pronunciación: Played',
      instructions: 'Di la palabra para "jugué/jugamos".',
      questions: [
        {
          id: 'q1',
          text: 'Played',
          phonetic: '/pleɪd/',
          translation: 'Jugué / Jugamos',
          explanation: 'La "ed" suena como una "d" suave al final, no se pronuncia la "e".'
        }
      ]
    } as any
  },
  {
    id: 'a1-u26-e7',
    type: 'matching',
    level: 'A1',
    topic: 'Past Simple',
    topicName: 'Did you?',
    difficulty: 'easy',
    content: {
      title: 'Verbos Irregulares Comunes (1)',
      instructions: 'Relaciona el presente con su forma irregular en pasado.',
      pairs: [
        { id: 'p1', left: 'Go', right: 'Went' },
        { id: 'p2', left: 'Eat', right: 'Ate' },
        { id: 'p3', left: 'Drink', right: 'Drank' },
        { id: 'p4', left: 'See', right: 'Saw' },
        { id: 'p5', left: 'Have', right: 'Had' }
      ],
      explanation: 'Los verbos irregulares no siguen la regla de "-ed" y deben memorizarse.'
    } as any
  },
  {
    id: 'a1-u26-e8',
    type: 'multiple-choice',
    level: 'A1',
    topic: 'Past Simple',
    topicName: 'Did you?',
    difficulty: 'easy',
    content: {
      title: 'Fui al cine',
      instructions: '¿Cuál es el pasado de "go"?',
      questions: [
        {
          id: 'q1',
          question: 'I ________ to the cinema last week.',
          options: ['went', 'goed', 'go'],
          correctAnswer: 0,
          explanation: "'Went' es la forma irregular de pasado del verbo 'go'."
        }
      ]
    }
  },
  {
    id: 'a1-u26-e9',
    type: 'fill-blank',
    level: 'A1',
    topic: 'Past Simple',
    topicName: 'Did you?',
    difficulty: 'medium',
    content: {
      title: 'Comer pizza',
      instructions: 'Escribe el pasado del verbo "eat".',
      questions: [
        {
          id: 'q1',
          question: 'We ________ pizza for dinner.',
          correctAnswer: 'ate',
          explanation: '"Ate" es el pasado irregular de "eat".'
        }
      ]
    } as any
  },
  {
    id: 'a1-u26-e10',
    type: 'flashcard',
    level: 'A1',
    topic: 'Past Simple',
    topicName: 'Did you?',
    difficulty: 'easy',
    content: {
      items: [
        {
          front: 'Vio / Vi',
          back: 'Saw',
          example: 'I saw you at the park.',
          pronunciation: '/sɔː/',
          explanation: '"Saw" es el pasado del verbo "see" (ver).'
        }
      ]
    } as any
  },
  {
    id: 'a1-u26-e11',
    type: 'sentence-building',
    level: 'A1',
    topic: 'Past Simple',
    topicName: 'Did you?',
    difficulty: 'medium',
    content: {
      title: 'Ella bebió agua',
      instructions: 'Ordena para decir "Ella bebió un poco de agua".',
      sentences: [
        {
          id: 's1',
          words: ['water', 'some', 'drank', 'She'],
          correctSentence: 'She drank some water',
          translation: 'Ella bebió un poco de agua.',
          explanation: '"Drank" es el pasado irregular de "drink".'
        }
      ]
    } as any
  },
  {
    id: 'a1-u26-e12',
    type: 'matching',
    level: 'A1',
    topic: 'Past Simple',
    topicName: 'Did you?',
    difficulty: 'medium',
    content: {
      title: 'Negación con "Didn\'t"',
      instructions: 'Relaciona la afirmación con su negación. ¡Fíjate en el verbo!',
      pairs: [
        { id: 'p1', left: 'I worked', right: 'I didn\'t work' },
        { id: 'p2', left: 'I went', right: 'I didn\'t go' },
        { id: 'p3', left: 'I ate', right: 'I didn\'t eat' },
        { id: 'p4', left: 'I studied', right: 'I didn\'t study' },
        { id: 'p5', left: 'I saw', right: 'I didn\'t see' }
      ],
      explanation: "Para negar en pasado usamos 'didn't' seguido del verbo en su forma base (presente)."
    } as any
  },
  {
    id: 'a1-u26-e13',
    type: 'multiple-choice',
    level: 'A1',
    topic: 'Past Simple',
    topicName: 'Did you?',
    difficulty: 'medium',
    content: {
      title: 'No fui a la fiesta',
      instructions: '¿Cuál es la forma correcta?',
      questions: [
        {
          id: 'q1',
          question: "I ________ to the party.",
          options: ["didn't go", "didn't went", "not went"],
          correctAnswer: 0,
          explanation: "Después de 'didn't', el verbo siempre vuelve a su forma base (go)."
        }
      ]
    }
  },
  {
    id: 'a1-u26-e14',
    type: 'fill-blank',
    level: 'A1',
    topic: 'Past Simple',
    topicName: 'Did you?',
    difficulty: 'medium',
    content: {
      title: 'No vi la tele',
      instructions: 'Completa con la negación y el verbo "watch".',
      questions: [
        {
          id: 'q1',
          question: "He ________ ________ TV last night.",
          correctAnswer: "didn't watch",
          explanation: "Usamos 'didn't' para la negación y el verbo en presente."
        }
      ]
    } as any
  },
  {
    id: 'a1-u26-e15',
    type: 'speaking-analysis',
    level: 'A1',
    topic: 'Past Simple',
    topicName: 'Did you?',
    difficulty: 'medium',
    content: {
      title: 'Pronunciación: Didn\'t',
      instructions: 'Di la palabra para "no" en pasado.',
      questions: [
        {
          id: 'q1',
          text: "Didn't",
          phonetic: '/ˈdɪdnt/',
          translation: 'No (pasado)',
          explanation: 'La primera "d" es clara y la terminación es muy rápida.'
        }
      ]
    } as any
  },
  {
    id: 'a1-u26-e16',
    type: 'matching',
    level: 'A1',
    topic: 'Past Simple',
    topicName: 'Did you?',
    difficulty: 'medium',
    content: {
      title: 'Preguntas con "Did"',
      instructions: 'Relaciona la pregunta con su traducción.',
      pairs: [
        { id: 'p1', left: 'Did you work?', right: '¿Trabajaste?' },
        { id: 'p2', left: 'Did you go?', right: '¿Fuiste?' },
        { id: 'p3', left: 'Did you eat?', right: '¿Comiste?' },
        { id: 'p4', left: 'Did you study?', right: '¿Estudiaste?' },
        { id: 'p5', left: 'Did you see it?', right: '¿Lo viste?' }
      ],
      explanation: "Para preguntar en pasado usamos 'Did' al principio y el verbo en su forma base."
    } as any
  },
  {
    id: 'a1-u26-e17',
    type: 'multiple-choice',
    level: 'A1',
    topic: 'Past Simple',
    topicName: 'Did you?',
    difficulty: 'medium',
    content: {
      title: '¿Viste la película?',
      instructions: '¿Cómo preguntarías si vio la película?',
      questions: [
        {
          id: 'q1',
          question: '________ you ________ the movie?',
          options: ['Did / see', 'Did / saw', 'Do / see'],
          correctAnswer: 0,
          explanation: "Usamos 'Did' para preguntar y el verbo en forma base 'see'."
        }
      ]
    }
  },
  {
    id: 'a1-u26-e18',
    type: 'fill-blank',
    level: 'A1',
    topic: 'Past Simple',
    topicName: 'Did you?',
    difficulty: 'medium',
    content: {
      title: 'Pregunta de viaje',
      instructions: 'Escribe la palabra para preguntar en pasado.',
      questions: [
        {
          id: 'q1',
          question: '________ they go to London?',
          correctAnswer: 'Did',
          explanation: '"Did" es el auxiliar para todas las personas en el pasado simple.'
        }
      ]
    } as any
  },
  {
    id: 'a1-u26-e19',
    type: 'flashcard',
    level: 'A1',
    topic: 'Past Simple',
    topicName: 'Did you?',
    difficulty: 'medium',
    content: {
      items: [
        {
          front: '¿Entendiste?',
          back: 'Did you understand?',
          example: 'Did you understand the lesson?',
          pronunciation: '/dɪd juː ˌʌndərˈstænd/',
          explanation: 'Pregunta común usando el auxiliar "Did".'
        }
      ]
    } as any
  },
  {
    id: 'a1-u26-e20',
    type: 'sentence-building',
    level: 'A1',
    topic: 'Past Simple',
    topicName: 'Did you?',
    difficulty: 'hard',
    content: {
      title: '¿Qué comiste?',
      instructions: 'Ordena para preguntar "¿Qué comiste tú?".',
      sentences: [
        {
          id: 's1',
          words: ['eat', 'you', 'did', 'What'],
          correctSentence: 'What did you eat',
          translation: '¿Qué comiste tú?',
          explanation: 'Estructura: Word + did + Sujeto + Verbo.'
        }
      ]
    } as any
  },
  {
    id: 'a1-u26-e21',
    type: 'matching',
    level: 'A1',
    topic: 'Past Simple',
    topicName: 'Did you?',
    difficulty: 'medium',
    content: {
      title: 'Verbos Irregulares (2)',
      instructions: 'Más verbos comunes en pasado.',
      pairs: [
        { id: 'p1', left: 'Buy', right: 'Bought' },
        { id: 'p2', left: 'Do', right: 'Did' },
        { id: 'p3', left: 'Get', right: 'Got' },
        { id: 'p4', left: 'Say', right: 'Said' },
        { id: 'p5', left: 'Make', right: 'Made' }
      ],
      explanation: 'Verbos fundamentales que cambian completamente en pasado.'
    } as any
  },
  {
    id: 'a1-u26-e22',
    type: 'multiple-choice',
    level: 'A1',
    topic: 'Past Simple',
    topicName: 'Did you?',
    difficulty: 'medium',
    content: {
      title: 'Compré un regalo',
      instructions: 'Traduce: Compré un regalo.',
      questions: [
        {
          id: 'q1',
          question: 'I ________ a present.',
          options: ['bought', 'buyed', 'buy'],
          correctAnswer: 0,
          explanation: "'Bought' es el pasado irregular de 'buy'."
        }
      ]
    }
  },
  {
    id: 'a1-u26-e23',
    type: 'fill-blank',
    level: 'A1',
    topic: 'Past Simple',
    topicName: 'Did you?',
    difficulty: 'medium',
    content: {
      title: 'Dijo hola',
      instructions: 'Escribe el pasado del verbo "say".',
      questions: [
        {
          id: 'q1',
          question: 'He ________ hello to me.',
          correctAnswer: 'said',
          explanation: '"Said" es el pasado de "say". Se pronuncia como "sed".'
        }
      ]
    } as any
  },
  {
    id: 'a1-u26-e24',
    type: 'speaking-analysis',
    level: 'A1',
    topic: 'Past Simple',
    topicName: 'Did you?',
    difficulty: 'medium',
    content: {
      title: 'Pronunciación: Bought',
      instructions: 'Di la palabra para "compré".',
      questions: [
        {
          id: 'q1',
          text: 'Bought',
          phonetic: '/bɔːt/',
          translation: 'Compré',
          explanation: 'La "ough" suena como una "o" larga y la "gh" es muda.'
        }
      ]
    } as any
  },
  {
    id: 'a1-u26-e25',
    type: 'matching',
    level: 'A1',
    topic: 'Past Simple',
    topicName: 'Did you?',
    difficulty: 'medium',
    content: {
      title: 'Respuestas Cortas',
      instructions: 'Une la pregunta con su respuesta corta.',
      pairs: [
        { id: 'p1', left: 'Did you work?', right: 'Yes, I did.' },
        { id: 'p2', left: 'Did he go?', right: 'No, he didn\'t.' },
        { id: 'p3', left: 'Did they eat?', right: 'Yes, they did.' },
        { id: 'p4', left: 'Did it rain?', right: 'No, it didn\'t.' },
        { id: 'p5', left: 'Did we win?', right: 'Yes, we did.' }
      ],
      explanation: "En las respuestas cortas usamos 'did' o 'didn't' para todos los verbos de acción."
    } as any
  },
  {
    id: 'a1-u26-e26',
    type: 'multiple-choice',
    level: 'A1',
    topic: 'Past Simple',
    topicName: 'Did you?',
    difficulty: 'medium',
    content: {
      title: 'Respuesta afirmativa',
      instructions: 'Did you study? ________.',
      questions: [
        {
          id: 'q1',
          question: 'Did you study? ________.',
          options: ['Yes, I did', 'Yes, I studied', 'Yes, I do'],
          correctAnswer: 0,
          explanation: "La respuesta corta más común es 'Yes, I did'."
        }
      ]
    }
  },
  {
    id: 'a1-u26-e27',
    type: 'fill-blank',
    level: 'A1',
    topic: 'Past Simple',
    topicName: 'Did you?',
    difficulty: 'medium',
    content: {
      title: 'Respuesta negativa',
      instructions: 'Completa: No, no lo hice.',
      questions: [
        {
          id: 'q1',
          question: "Did you go? No, I ________.",
          correctAnswer: "didn't",
          explanation: "Usamos 'didn't' para la respuesta corta negativa."
        }
      ]
    } as any
  },
  {
    id: 'a1-u26-e28',
    type: 'flashcard',
    level: 'A1',
    topic: 'Past Simple',
    topicName: 'Did you?',
    difficulty: 'medium',
    content: {
      items: [
        {
          front: 'Hice mi tarea',
          back: 'I did my homework',
          example: 'I did my homework yesterday.',
          pronunciation: '/aɪ dɪd maɪ ˈhoʊmwɜːrk/',
          explanation: '"Did" es tanto el auxiliar como el pasado del verbo "do".'
        }
      ]
    } as any
  },
  {
    id: 'a1-u26-e29',
    type: 'sentence-building',
    level: 'A1',
    topic: 'Past Simple',
    topicName: 'Did you?',
    difficulty: 'hard',
    content: {
      title: 'No compramos nada',
      instructions: 'Ordena para decir "Nosotros no compramos nada".',
      sentences: [
        {
          id: 's1',
          words: ['anything', 'buy', "didn't", 'We'],
          correctSentence: "We didn't buy anything",
          translation: 'Nosotros no compramos nada.',
          explanation: 'En oraciones negativas usamos "anything" para decir nada.'
        }
      ]
    } as any
  },
  {
    id: 'a1-u26-e30',
    type: 'matching',
    level: 'A1',
    topic: 'Past Simple',
    topicName: 'Did you?',
    difficulty: 'medium',
    content: {
      title: 'Más Verbos Regulares',
      instructions: 'Une el presente con el pasado.',
      pairs: [
        { id: 'p1', left: 'Visit', right: 'Visited' },
        { id: 'p2', left: 'Live', right: 'Lived' },
        { id: 'p3', left: 'Love', right: 'Loved' },
        { id: 'p4', left: 'Help', right: 'Helped' },
        { id: 'p5', left: 'Cook', right: 'Cooked' }
      ],
      explanation: 'Si el verbo termina en "e", solo añadimos la "d".'
    } as any
  },
  {
    id: 'a1-u26-e31',
    type: 'multiple-choice',
    level: 'A1',
    topic: 'Past Simple',
    topicName: 'Did you?',
    difficulty: 'medium',
    content: {
      title: 'Viví en Madrid',
      instructions: 'I ________ in Madrid in 2010.',
      questions: [
        {
          id: 'q1',
          question: 'I ________ in Madrid in 2010.',
          options: ['lived', 'live', 'living'],
          correctAnswer: 0,
          explanation: "'Live' termina en 'e', así que solo añadimos 'd'."
        }
      ]
    }
  },
  {
    id: 'a1-u26-e32',
    type: 'fill-blank',
    level: 'A1',
    topic: 'Past Simple',
    topicName: 'Did you?',
    difficulty: 'medium',
    content: {
      title: 'Ayudar a mamá',
      instructions: 'Escribe el pasado de "help".',
      questions: [
        {
          id: 'q1',
          question: 'I ________ my mother yesterday.',
          correctAnswer: 'helped',
          explanation: '"Help" es un verbo regular.'
        }
      ]
    } as any
  },
  {
    id: 'a1-u26-e33',
    type: 'speaking-analysis',
    level: 'A1',
    topic: 'Past Simple',
    topicName: 'Did you?',
    difficulty: 'medium',
    content: {
      title: 'Pronunciación: Cooked',
      instructions: 'Di la palabra para "cociné".',
      questions: [
        {
          id: 'q1',
          text: 'Cooked',
          phonetic: '/kʊkt/',
          translation: 'Cociné',
          explanation: 'La "ed" suena como una "t" seca.'
        }
      ]
    } as any
  },
  {
    id: 'a1-u26-e34',
    type: 'matching',
    level: 'A1',
    topic: 'Past Simple',
    topicName: 'Did you?',
    difficulty: 'medium',
    content: {
      title: 'Preguntas con "When"',
      instructions: 'Relaciona la pregunta con el tiempo.',
      pairs: [
        { id: 'p1', left: 'When did you arrive?', right: 'At 5:00' },
        { id: 'p2', left: 'When did he leave?', right: 'Ten minutes ago' },
        { id: 'p3', left: 'When did you see her?', right: 'Yesterday' },
        { id: 'p4', left: 'When did they study?', right: 'Last night' },
        { id: 'p5', left: 'When did it start?', right: 'Two hours ago' }
      ],
      explanation: 'Usamos "When" para preguntar por el momento específico del pasado.'
    } as any
  },
  {
    id: 'a1-u26-e35',
    type: 'multiple-choice',
    level: 'A1',
    topic: 'Past Simple',
    topicName: 'Did you?',
    difficulty: 'medium',
    content: {
      title: 'Llegada',
      instructions: 'When ________ you ________?',
      questions: [
        {
          id: 'q1',
          question: 'When ________ you ________?',
          options: ['did / arrive', 'did / arrived', 'do / arrive'],
          correctAnswer: 0,
          explanation: "La estructura de pregunta es: When + did + Sujeto + Verbo base."
        }
      ]
    }
  },
  {
    id: 'a1-u26-e36',
    type: 'fill-blank',
    level: 'A1',
    topic: 'Past Simple',
    topicName: 'Did you?',
    difficulty: 'medium',
    content: {
      title: '¿Cuándo empezaste?',
      instructions: 'Escribe la palabra para "¿Cuándo?".',
      questions: [
        {
          id: 'q1',
          question: '________ did you start?',
          correctAnswer: 'When',
          explanation: '"When" se usa para preguntar por el tiempo.'
        }
      ]
    } as any
  },
  {
    id: 'a1-u26-e37',
    type: 'flashcard',
    level: 'A1',
    topic: 'Past Simple',
    topicName: 'Did you?',
    difficulty: 'medium',
    content: {
      items: [
        {
          front: 'Se fue / Se marchó',
          back: 'Left',
          example: 'She left an hour ago.',
          pronunciation: '/left/',
          explanation: '"Left" es el pasado irregular del verbo "leave" (irse / dejar).'
        }
      ]
    } as any
  },
  {
    id: 'a1-u26-e38',
    type: 'sentence-building',
    level: 'A1',
    topic: 'Past Simple',
    topicName: 'Did you?',
    difficulty: 'hard',
    content: {
      title: '¿Dónde fuiste?',
      instructions: 'Ordena para preguntar "¿A dónde fuiste el verano pasado?".',
      sentences: [
        {
          id: 's1',
          words: ['summer', 'last', 'go', 'you', 'did', 'Where'],
          correctSentence: 'Where did you go last summer',
          translation: '¿A dónde fuiste el verano pasado?',
          explanation: 'Estructura completa de pregunta con expresión de tiempo.'
        }
      ]
    } as any
  },
  {
    id: 'a1-u26-e39',
    type: 'matching',
    level: 'A1',
    topic: 'Past Simple',
    topicName: 'Did you?',
    difficulty: 'hard',
    content: {
      title: 'Repaso de Pasados Irregulares',
      instructions: 'Relaciona para reforzar.',
      pairs: [
        { id: 'p1', left: 'Take', right: 'Took' },
        { id: 'p2', left: 'Write', right: 'Wrote' },
        { id: 'p3', left: 'Read', right: 'Read (se pronuncia red)' },
        { id: 'p4', left: 'Find', right: 'Found' },
        { id: 'p5', left: 'Know', right: 'Knew' }
      ],
      explanation: 'El verbo "read" se escribe igual en pasado pero cambia su pronunciación.'
    } as any
  },
  {
    id: 'a1-u26-e40',
    type: 'multiple-choice',
    level: 'A1',
    topic: 'Past Simple',
    topicName: 'Did you?',
    difficulty: 'hard',
    content: {
      title: 'Escribí una carta',
      instructions: 'I ________ a letter to my friend.',
      questions: [
        {
          id: 'q1',
          question: 'I ________ a letter to my friend.',
          options: ['wrote', 'writed', 'write'],
          correctAnswer: 0,
          explanation: "'Wrote' es el pasado irregular de 'write'."
        }
      ]
    }
  },
  {
    id: 'a1-u26-e41',
    type: 'fill-blank',
    level: 'A1',
    topic: 'Past Simple',
    topicName: 'Did you?',
    difficulty: 'hard',
    content: {
      title: 'Tomar el tren',
      instructions: 'Escribe el pasado de "take".',
      questions: [
        {
          id: 'q1',
          question: 'We ________ the train to the city.',
          correctAnswer: 'took',
          explanation: '"Took" es el pasado de "take".'
        }
      ]
    } as any
  },
  {
    id: 'a1-u26-e42',
    type: 'speaking-analysis',
    level: 'A1',
    topic: 'Past Simple',
    topicName: 'Did you?',
    difficulty: 'hard',
    content: {
      title: 'Pronunciación: Read (pasado)',
      instructions: 'Di la palabra para "leí".',
      questions: [
        {
          id: 'q1',
          text: 'Read',
          phonetic: '/red/',
          translation: 'Leí',
          explanation: 'Aunque se escribe igual que el presente, suena como el color rojo: "red".'
        }
      ]
    } as any
  },
  {
    id: 'a1-u26-e43',
    type: 'matching',
    level: 'A1',
    topic: 'Past Simple',
    topicName: 'Did you?',
    difficulty: 'hard',
    content: {
      title: 'Resumen de Auxiliares',
      instructions: 'Une la función con la palabra.',
      pairs: [
        { id: 'p1', left: 'Afirmación regular', right: '-ed' },
        { id: 'p2', left: 'Negación', right: 'didn\'t' },
        { id: 'p3', left: 'Pregunta', right: 'did' },
        { id: 'p4', left: 'Respuesta sí', right: 'Yes, I did' },
        { id: 'p5', left: 'Respuesta no', right: 'No, I didn\'t' }
      ],
      explanation: 'Las piezas clave para construir el pasado simple en inglés.'
    } as any
  },
  {
    id: 'a1-u26-e44',
    type: 'multiple-choice',
    level: 'A1',
    topic: 'Past Simple',
    topicName: 'Did you?',
    difficulty: 'hard',
    content: {
      title: '¿Te gustó?',
      instructions: '________ you ________ the food?',
      questions: [
        {
          id: 'q1',
          question: '________ you ________ the food?',
          options: ['Did / like', 'Did / liked', 'Do / like'],
          correctAnswer: 0,
          explanation: "Recordamos: Did + Sujeto + Verbo base."
        }
      ]
    }
  },
  {
    id: 'a1-u26-e45',
    type: 'fill-blank',
    level: 'A1',
    topic: 'Past Simple',
    topicName: 'Did you?',
    difficulty: 'hard',
    content: {
      title: 'No lo encontré',
      instructions: 'Completa: No encontré mis llaves.',
      questions: [
        {
          id: 'q1',
          question: "I ________ find my keys.",
          correctAnswer: "didn't",
          explanation: "Usamos 'didn't' para todas las negaciones en pasado simple."
        }
      ]
    } as any
  },
  {
    id: 'a1-u26-e46',
    type: 'flashcard',
    level: 'A1',
    topic: 'Past Simple',
    topicName: 'Did you?',
    difficulty: 'hard',
    content: {
      items: [
        {
          front: 'Sabía / Conocía',
          back: 'Knew',
          example: 'I knew the answer.',
          pronunciation: '/nuː/',
          explanation: '"Knew" es el pasado de "know". La "k" es muda.'
        }
      ]
    } as any
  },
  {
    id: 'a1-u26-e47',
    type: 'sentence-building',
    level: 'A1',
    topic: 'Past Simple',
    topicName: 'Did you?',
    difficulty: 'hard',
    content: {
      title: 'Hice un pastel',
      instructions: 'Ordena para decir "Yo hice un pastel delicioso".',
      sentences: [
        {
          id: 's1',
          words: ['cake', 'delicious', 'a', 'made', 'I'],
          correctSentence: 'I made a delicious cake',
          translation: 'Yo hice un pastel delicioso.',
          explanation: '"Made" es el pasado de "make" (fabricar / crear).'
        }
      ]
    } as any
  },
  {
    id: 'a1-u26-e48',
    type: 'multiple-choice',
    level: 'A1',
    topic: 'Past Simple',
    topicName: 'Did you?',
    difficulty: 'hard',
    content: {
      title: '¿Dónde vivían ellos?',
      instructions: '¿Cuál es la pregunta correcta?',
      questions: [
        {
          id: 'q1',
          question: 'Where ________ they ________?',
          options: ['did / live', 'did / lived', 'do / lived'],
          correctAnswer: 0,
          explanation: "Estructura de pregunta con 'Where'."
        }
      ]
    }
  },
  {
    id: 'a1-u26-e49',
    type: 'fill-blank',
    level: 'A1',
    topic: 'Past Simple',
    topicName: 'Did you?',
    difficulty: 'hard',
    content: {
      title: 'Lo hice',
      instructions: 'Completa: Sí, lo hice.',
      questions: [
        {
          id: 'q1',
          question: 'Yes, I ________.',
          correctAnswer: 'did',
          explanation: 'Respuesta corta afirmativa.'
        }
      ]
    } as any
  },
  {
    id: 'a1-u26-e50',
    type: 'matching',
    level: 'A1',
    topic: 'Past Simple',
    topicName: 'Did you?',
    difficulty: 'hard',
    content: {
      title: 'Repaso Final de la Unidad',
      instructions: 'Relaciona las frases finales.',
      pairs: [
        { id: 'p1', left: 'I worked hard', right: 'Trabajé duro' },
        { id: 'p2', left: 'She went home', right: 'Ella se fue a casa' },
        { id: 'p3', left: 'We ate well', right: 'Comimos bien' },
        { id: 'p4', left: 'Did you study?', right: '¿Estudiaste?' },
        { id: 'p5', left: 'They didn\'t see', right: 'Ellos no vieron' }
      ],
      explanation: 'Resumen de los puntos clave del pasado simple en inglés.'
    } as any
  }
];
