import { Exercise } from '@/lib/exercise-generator';

export const UNIT_21_EXERCISES: Exercise[] = [
  // --- SUB-TOPIC 1: Stages of Life (1-12) ---
  {
    id: 'a2-u21-e1',
    type: 'flashcard',
    level: 'A2',
    topic: 'Life Stages',
    topicName: 'Life Stages',
    difficulty: 'easy',
    content: {
      items: [
        {
          front: 'Infancia',
          back: 'Childhood',
          example: 'I had a very happy childhood.',
          pronunciation: '/ˈtʃaɪldhʊd/',
          explanation: 'El periodo de tiempo en que eres niño.'
        }
      ]
    } as any
  },
  {
    id: 'a2-u21-e2',
    type: 'matching',
    level: 'A2',
    topic: 'Life Stages',
    topicName: 'Life Stages',
    difficulty: 'easy',
    content: {
      title: 'Life Periods',
      instructions: 'Une la etapa con su traducción.',
      pairs: [
        { id: '1', left: 'Baby / Infant', right: 'Bebé' },
        { id: '2', left: 'Toddler', right: 'Niño pequeño (1-3 años)' },
        { id: '3', left: 'Teenager', right: 'Adolescente' },
        { id: '4', left: 'Adult', right: 'Adulto' },
        { id: '5', left: 'Elderly', right: 'Anciano / Persona mayor' }
      ],
      explanation: 'Las diferentes etapas del crecimiento humano.'
    } as any
  },
  {
    id: 'a2-u21-e3',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Life Stages',
    topicName: 'Life Stages',
    difficulty: 'easy',
    content: {
      title: 'Growth',
      instructions: 'Elige la opción correcta.',
      questions: [
        {
          id: 'q1',
          question: 'A person between 13 and 19 years old is a ___ .',
          options: ['teenager', 'toddler', 'adult'],
          correctAnswer: 0,
          explanation: 'Un adolescente (teenager) tiene entre 13 (thirteen) y 19 (nineteen) años.'
        }
      ]
    }
  },
  {
    id: 'a2-u21-e4',
    type: 'fill-blank',
    level: 'A2',
    topic: 'Life Stages',
    topicName: 'Life Stages',
    difficulty: 'easy',
    content: {
      title: 'Life Beginnings',
      instructions: 'Completa la frase.',
      questions: [
        {
          id: 'q1',
          text: 'She was ___ in a small village in 1995.',
          correctAnswer: 'born',
          explanation: '"To be born" significa nacer.'
        }
      ]
    }
  },
  {
    id: 'a2-u21-e5',
    type: 'sentence-building',
    level: 'A2',
    topic: 'Life Stages',
    topicName: 'Life Stages',
    difficulty: 'medium',
    content: {
      title: 'Growing up',
      instructions: 'Ordena la frase.',
      sentences: [
        {
          id: 's1',
          words: ['He', 'grew', 'up', 'in', 'New', 'York', '.'],
          correctSentence: 'He grew up in New York.',
          translation: 'Él creció en Nueva York.',
          hint: 'Usa el pasado de "grow".',
          explanation: '"Grow up" es el phrasal verb para crecer (de niño a adulto).',
          points: 10
        }
      ]
    } as any
  },
  {
    id: 'a2-u21-e6',
    type: 'flashcard',
    level: 'A2',
    topic: 'Life Stages',
    topicName: 'Life Stages',
    difficulty: 'easy',
    content: {
      items: [
        {
          front: 'Jubilación',
          back: 'Retirement',
          example: 'He is looking forward to his retirement.',
          pronunciation: '/rɪˈtaɪəmənt/',
          explanation: 'Cuando dejas de trabajar por la edad.'
        }
      ]
    } as any
  },
  {
    id: 'a2-u21-e7',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Life Stages',
    topicName: 'Life Stages',
    difficulty: 'medium',
    content: {
      title: 'Age groups',
      instructions: 'Elige la opción correcta.',
      questions: [
        {
          id: 'q1',
          question: 'People in their 40s and 50s are ___ .',
          options: ['middle-aged', 'elderly', 'young adults'],
          correctAnswer: 0,
          explanation: '"Middle-aged" se refiere a la mediana edad.'
        }
      ]
    }
  },
  {
    id: 'a2-u21-e8',
    type: 'speaking-analysis',
    level: 'A2',
    topic: 'Life Stages',
    topicName: 'Life Stages',
    difficulty: 'easy',
    content: {
      title: 'Pronunciation: Childhood',
      instructions: 'Di "In my childhood".',
      questions: [
        {
          id: 'q1',
          text: 'In my childhood',
          correctAnswer: 'In my childhood',
          explanation: 'Pronuncia "child" como /tʃaɪld/.'
        }
      ]
    }
  },
  {
    id: 'a2-u21-e9',
    type: 'fill-blank',
    level: 'A2',
    topic: 'Life Stages',
    topicName: 'Life Stages',
    difficulty: 'medium',
    content: {
      title: 'School stage',
      instructions: 'Completa la frase.',
      questions: [
        {
          id: 'q1',
          text: 'When I was at ___ school, I loved art.',
          correctAnswer: 'primary',
          explanation: '"Primary school" es la escuela primaria.'
        }
      ]
    }
  },
  {
    id: 'a2-u21-e10',
    type: 'sentence-building',
    level: 'A2',
    topic: 'Life Stages',
    topicName: 'Life Stages',
    difficulty: 'medium',
    content: {
      title: 'Leaving home',
      instructions: 'Ordena la frase.',
      sentences: [
        {
          id: 's1',
          words: ['Many', 'young', 'adults', 'leave', 'home', 'at', 'eighteen', '.'],
          correctSentence: 'Many young adults leave home at eighteen.',
          translation: 'Muchos adultos jóvenes se van de casa a los dieciocho.',
          hint: 'Usa "young adults".',
          explanation: 'Descripción de una etapa vital común.',
          points: 10
        }
      ]
    } as any
  },
  {
    id: 'a2-u21-e11',
    type: 'matching',
    level: 'A2',
    topic: 'Life Stages',
    topicName: 'Life Stages',
    difficulty: 'medium',
    content: {
      title: 'Age Adjectives',
      instructions: 'Une el adjetivo con su significado.',
      pairs: [
        { id: '1', left: 'Adolescent', right: 'A teenager' },
        { id: '2', left: 'Mature', right: 'Behaving like an adult' },
        { id: '3', left: 'Infantile', right: 'Behaving like a baby' },
        { id: '4', left: 'Elderly', right: 'Polite way to say old' }
      ],
      explanation: 'Adjetivos para describir el comportamiento según la edad.'
    } as any
  },
  {
    id: 'a2-u21-e12',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Life Stages',
    topicName: 'Life Stages',
    difficulty: 'hard',
    content: {
      title: 'Life events',
      instructions: 'Elige la opción correcta.',
      questions: [
        {
          id: 'q1',
          question: 'After university, she decided to ___ and have children.',
          options: ['settle down', 'grow up', 'born'],
          correctAnswer: 0,
          explanation: '"Settle down" significa establecerse o sentar la cabeza.'
        }
      ]
    }
  },

  // --- SUB-TOPIC 2: Used to - Past Habits (13-24) ---
  {
    id: 'a2-u21-e13',
    type: 'flashcard',
    level: 'A2',
    topic: 'Life Stages',
    topicName: 'Life Stages',
    difficulty: 'easy',
    content: {
      items: [
        {
          front: 'Solía...',
          back: 'Used to...',
          example: 'I used to play with dolls when I was little.',
          pronunciation: '/ˈjuːst tə/',
          explanation: 'Usamos "used to" para hábitos o estados pasados que ya no ocurren.'
        }
      ]
    } as any
  },
  {
    id: 'a2-u21-e14',
    type: 'matching',
    level: 'A2',
    topic: 'Life Stages',
    topicName: 'Life Stages',
    difficulty: 'easy',
    content: {
      title: 'Used to forms',
      instructions: 'Une la forma con su tipo de frase.',
      pairs: [
        { id: '1', left: 'Used to', right: 'Affirmative' },
        { id: '2', left: 'Didn’t use to', right: 'Negative' },
        { id: '3', left: 'Did you use to...?', right: 'Question' }
      ],
      explanation: '¡Atención! En negativas e interrogativas pierde la "d".'
    } as any
  },
  {
    id: 'a2-u21-e15',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Life Stages',
    topicName: 'Life Stages',
    difficulty: 'medium',
    content: {
      title: 'Past habits',
      instructions: 'Elige la opción correcta.',
      questions: [
        {
          id: 'q1',
          question: 'When I was a child, I ___ have long hair.',
          options: ['used to', 'use to', 'did used to'],
          correctAnswer: 0,
          explanation: 'Frase afirmativa: "used to".'
        }
      ]
    }
  },
  {
    id: 'a2-u21-e16',
    type: 'fill-blank',
    level: 'A2',
    topic: 'Life Stages',
    topicName: 'Life Stages',
    difficulty: 'medium',
    content: {
      title: 'Negative habit',
      instructions: 'Completa en negativo.',
      questions: [
        {
          id: 'q1',
          text: 'I ___ (not/use to) like vegetables, but now I do.',
          correctAnswer: "didn't use to",
          explanation: 'En negativo usamos "didn’t use to" (sin la d en use).'
        }
      ]
    }
  },
  {
    id: 'a2-u21-e17',
    type: 'sentence-building',
    level: 'A2',
    topic: 'Life Stages',
    topicName: 'Life Stages',
    difficulty: 'medium',
    content: {
      title: 'Past vs Present',
      instructions: 'Ordena la frase.',
      sentences: [
        {
          id: 's1',
          words: ['We', 'used', 'to', 'live', 'in', 'London', '.'],
          correctSentence: 'We used to live in London.',
          translation: 'Solíamos vivir en Londres.',
          hint: 'Hábito pasado.',
          explanation: 'Indica que ya no viven allí.',
          points: 10
        }
      ]
    } as any
  },
  {
    id: 'a2-u21-e18',
    type: 'flashcard',
    level: 'A2',
    topic: 'Life Stages',
    topicName: 'Life Stages',
    difficulty: 'easy',
    content: {
      items: [
        {
          front: '¿Solías...?',
          back: 'Did you use to...?',
          example: 'Did you use to watch cartoons?',
          pronunciation: '/n/a/',
          explanation: 'Estructura de pregunta para hábitos pasados.'
        }
      ]
    } as any
  },
  {
    id: 'a2-u21-e19',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Life Stages',
    topicName: 'Life Stages',
    difficulty: 'medium',
    content: {
      title: 'Questions with Used to',
      instructions: 'Elige la pregunta correcta.',
      questions: [
        {
          id: 'q1',
          question: '___ to school by bus?',
          options: ['Did you use to go', 'Did you used to go', 'Used you to go'],
          correctAnswer: 0,
          explanation: 'En preguntas usamos el auxiliar "did" y "use to" (sin d).'
        }
      ]
    }
  },
  {
    id: 'a2-u21-e20',
    type: 'speaking-analysis',
    level: 'A2',
    topic: 'Life Stages',
    topicName: 'Life Stages',
    difficulty: 'easy',
    content: {
      title: 'Pronunciation: Used to',
      instructions: 'Di "I used to swim every day".',
      questions: [
        {
          id: 'q1',
          text: 'I used to swim every day',
          correctAnswer: 'I used to swim every day',
          explanation: '"Used to" se pronuncia /ˈjuːst tə/, la "d" suena como "t" al unirse.'
        }
      ]
    }
  },
  {
    id: 'a2-u21-e21',
    type: 'fill-blank',
    level: 'A2',
    topic: 'Life Stages',
    topicName: 'Life Stages',
    difficulty: 'hard',
    content: {
      title: 'Past State',
      instructions: 'Completa la frase.',
      questions: [
        {
          id: 'q1',
          text: 'My grandfather ___ (use to) be a pilot.',
          correctAnswer: 'used to',
          explanation: 'Estado pasado permanente.'
        }
      ]
    }
  },
  {
    id: 'a2-u21-e22',
    type: 'sentence-building',
    level: 'A2',
    topic: 'Life Stages',
    topicName: 'Life Stages',
    difficulty: 'medium',
    content: {
      title: 'Childhood hobby',
      instructions: 'Ordena la frase.',
      sentences: [
        {
          id: 's1',
          words: ['I', 'didn’t', 'use', 'to', 'play', 'video', 'games', '.'],
          correctSentence: 'I didn’t use to play video games.',
          translation: 'No solía jugar a videojuegos.',
          hint: 'Negativo.',
          explanation: 'Estructura negativa correcta.',
          points: 10
        }
      ]
    } as any
  },
  {
    id: 'a2-u21-e23',
    type: 'matching',
    level: 'A2',
    topic: 'Life Stages',
    topicName: 'Life Stages',
    difficulty: 'medium',
    content: {
      title: 'Used to vs Past Simple',
      instructions: 'Une la frase con su significado.',
      pairs: [
        { id: '1', left: 'I used to smoke', right: 'I don’t smoke now' },
        { id: '2', left: 'I smoked yesterday', right: 'Specific one-time event' },
        { id: '3', left: 'I didn’t use to exercise', right: 'I exercise now' },
        { id: '4', left: 'I didn’t exercise on Monday', right: 'Specific past negative' }
      ],
      explanation: 'Diferencia entre hábito pasado y evento puntual.'
    } as any
  },
  {
    id: 'a2-u21-e24',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Life Stages',
    topicName: 'Life Stages',
    difficulty: 'hard',
    content: {
      title: 'Grammar Check',
      instructions: '¿Cuál es correcta?',
      questions: [
        {
          id: 'q1',
          question: '___ you ___ have a pet when you were little?',
          options: ['Did / use to', 'Did / used to', 'Were / use to'],
          correctAnswer: 0,
          explanation: 'Auxiliar Did + sujeto + use to.'
        }
      ]
    }
  },

  // --- SUB-TOPIC 3: Important Life Events (25-36) ---
  {
    id: 'a2-u21-e25',
    type: 'flashcard',
    level: 'A2',
    topic: 'Life Stages',
    topicName: 'Life Stages',
    difficulty: 'easy',
    content: {
      items: [
        {
          front: 'Graduarse',
          back: 'Graduate',
          example: 'I graduated from university in 2020.',
          pronunciation: '/ˈɡrædʒueɪt/',
          explanation: 'Terminar con éxito los estudios.'
        }
      ]
    } as any
  },
  {
    id: 'a2-u21-e26',
    type: 'matching',
    level: 'A2',
    topic: 'Life Stages',
    topicName: 'Life Stages',
    difficulty: 'easy',
    content: {
      title: 'Milestones',
      instructions: 'Une el evento con su traducción.',
      pairs: [
        { id: '1', left: 'Get married', right: 'Casarse' },
        { id: '2', left: 'Get a job', right: 'Conseguir trabajo' },
        { id: '3', left: 'Have a baby', right: 'Tener un bebé' },
        { id: '4', left: 'Buy a house', right: 'Comprar una casa' },
        { id: '5', left: 'Retire', right: 'Jubilarse' }
      ],
      explanation: 'Acontecimientos importantes en la vida.'
    } as any
  },
  {
    id: 'a2-u21-e27',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Life Stages',
    topicName: 'Life Stages',
    difficulty: 'easy',
    content: {
      title: 'Schooling',
      instructions: 'Elige la opción correcta.',
      questions: [
        {
          id: 'q1',
          question: 'In many countries, children ___ school at age five.',
          options: ['start', 'finish', 'graduate'],
          correctAnswer: 0,
          explanation: 'Empiezan (start) la escuela a los cinco.'
        }
      ]
    }
  },
  {
    id: 'a2-u21-e28',
    type: 'fill-blank',
    level: 'A2',
    topic: 'Life Stages',
    topicName: 'Life Stages',
    difficulty: 'easy',
    content: {
      title: 'Independence',
      instructions: 'Completa la frase.',
      questions: [
        {
          id: 'q1',
          text: 'I learned to ___ a car when I was seventeen.',
          correctAnswer: 'drive',
          explanation: '"Drive a car" es conducir.'
        }
      ]
    }
  },
  {
    id: 'a2-u21-e29',
    type: 'sentence-building',
    level: 'A2',
    topic: 'Life Stages',
    topicName: 'Life Stages',
    difficulty: 'medium',
    content: {
      title: 'Big life change',
      instructions: 'Ordena la frase.',
      sentences: [
        {
          id: 's1',
          words: ['They', 'got', 'married', 'last', 'summer', '.'],
          correctSentence: 'They got married last summer.',
          translation: 'Se casaron el verano pasado.',
          hint: 'Pasado de "get".',
          explanation: 'Uso de "get married" para la acción de casarse.',
          points: 10
        }
      ]
    } as any
  },
  {
    id: 'a2-u21-e30',
    type: 'flashcard',
    level: 'A2',
    topic: 'Life Stages',
    topicName: 'Life Stages',
    difficulty: 'easy',
    content: {
      items: [
        {
          front: 'Mudar de casa',
          back: 'Move house',
          example: 'We are moving house next month.',
          pronunciation: '/muːv haʊs/',
          explanation: 'Cambiar de domicilio.'
        }
      ]
    } as any
  },
  {
    id: 'a2-u21-e31',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Life Stages',
    topicName: 'Life Stages',
    difficulty: 'medium',
    content: {
      title: 'Life stages',
      instructions: 'Elige el verbo correcto.',
      questions: [
        {
          id: 'q1',
          question: 'He is 65 years old and he is going to ___ next year.',
          options: ['retire', 'graduate', 'grow up'],
          correctAnswer: 0,
          explanation: '"Retire" (jubilarse) es lo habitual a esa edad.'
        }
      ]
    }
  },
  {
    id: 'a2-u21-e32',
    type: 'speaking-analysis',
    level: 'A2',
    topic: 'Life Stages',
    topicName: 'Life Stages',
    difficulty: 'easy',
    content: {
      title: 'Pronunciation: Graduate',
      instructions: 'Di "I want to graduate".',
      questions: [
        {
          id: 'q1',
          text: 'I want to graduate',
          correctAnswer: 'I want to graduate',
          explanation: 'La terminación "-ate" en el verbo se pronuncia /eɪt/.'
        }
      ]
    }
  },
  {
    id: 'a2-u21-e33',
    type: 'fill-blank',
    level: 'A2',
    topic: 'Life Stages',
    topicName: 'Life Stages',
    difficulty: 'medium',
    content: {
      title: 'First job',
      instructions: 'Completa.',
      questions: [
        {
          id: 'q1',
          text: 'She got her first ___ after university.',
          correctAnswer: 'job',
          explanation: '"Got her first job" significa consiguió su primer trabajo.'
        }
      ]
    }
  },
  {
    id: 'a2-u21-e34',
    type: 'sentence-building',
    level: 'A2',
    topic: 'Life Stages',
    topicName: 'Life Stages',
    difficulty: 'medium',
    content: {
      title: 'Future plans',
      instructions: 'Ordena la frase.',
      sentences: [
        {
          id: 's1',
          words: ['We', 'want', 'to', 'buy', 'a', 'house', 'soon', '.'],
          correctSentence: 'We want to buy a house soon.',
          translation: 'Queremos comprar una casa pronto.',
          hint: 'Usa "want to".',
          explanation: 'Planificación de un evento vital.',
          points: 10
        }
      ]
    } as any
  },
  {
    id: 'a2-u21-e35',
    type: 'matching',
    level: 'A2',
    topic: 'Life Stages',
    topicName: 'Life Stages',
    difficulty: 'medium',
    content: {
      title: 'Verb-Noun collocations',
      instructions: 'Une el verbo con el nombre correcto.',
      pairs: [
        { id: '1', left: 'Take', right: 'an exam' },
        { id: '2', left: 'Fall', right: 'in love' },
        { id: '3', left: 'Start', right: 'a family' },
        { id: '4', left: 'Pass', right: 'your driving test' }
      ],
      explanation: 'Combinaciones comunes de palabras.'
    } as any
  },
  {
    id: 'a2-u21-e36',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Life Stages',
    topicName: 'Life Stages',
    difficulty: 'hard',
    content: {
      title: 'Academic Life',
      instructions: 'Elige la opción correcta.',
      questions: [
        {
          id: 'q1',
          question: 'To get a degree, you must ___ from university.',
          options: ['graduate', 'leave', 'start'],
          correctAnswer: 0,
          explanation: 'Necesitas graduarte (graduate) para obtener el título (degree).'
        }
      ]
    }
  },

  // --- SUB-TOPIC 4: Relationships & Families (37-45) ---
  {
    id: 'a2-u21-e37',
    type: 'flashcard',
    level: 'A2',
    topic: 'Life Stages',
    topicName: 'Life Stages',
    difficulty: 'easy',
    content: {
      items: [
        {
          front: 'Pareja / Socio',
          back: 'Partner',
          example: 'I live with my partner.',
          pronunciation: '/ˈpɑːtnə/',
          explanation: 'Persona con la que compartes tu vida.'
        }
      ]
    } as any
  },
  {
    id: 'a2-u21-e38',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Life Stages',
    topicName: 'Life Stages',
    difficulty: 'medium',
    content: {
      title: 'Family relations',
      instructions: 'Elige la palabra correcta.',
      questions: [
        {
          id: 'q1',
          question: 'If you are not married, you are ___ .',
          options: ['single', 'coupled', 'together'],
          correctAnswer: 0,
          explanation: '"Single" significa soltero/a.'
        }
      ]
    }
  },
  {
    id: 'a2-u21-e39',
    type: 'fill-blank',
    level: 'A2',
    topic: 'Life Stages',
    topicName: 'Life Stages',
    difficulty: 'medium',
    content: {
      title: 'Meeting someone',
      instructions: 'Completa la frase.',
      questions: [
        {
          id: 'q1',
          text: 'They ___ in love when they were at university.',
          correctAnswer: 'fell',
          explanation: 'Pasado de "fall". "Fall in love" es enamorarse.'
        }
      ]
    }
  },
  {
    id: 'a2-u21-e40',
    type: 'sentence-building',
    level: 'A2',
    topic: 'Life Stages',
    topicName: 'Life Stages',
    difficulty: 'medium',
    content: {
      title: 'Having kids',
      instructions: 'Ordena la frase.',
      sentences: [
        {
          id: 's1',
          words: ['They', 'want', 'to', 'start', 'a', 'family', 'next', 'year', '.'],
          correctSentence: 'They want to start a family next year.',
          translation: 'Quieren formar una familia el año que viene.',
          hint: 'Usa "start a family".',
          explanation: '"Start a family" es la expresión para tener hijos por primera vez.',
          points: 10
        }
      ]
    } as any
  },
  {
    id: 'a2-u21-e41',
    type: 'matching',
    level: 'A2',
    topic: 'Life Stages',
    topicName: 'Life Stages',
    difficulty: 'medium',
    content: {
      title: 'Relationships',
      instructions: 'Une los opuestos.',
      pairs: [
        { id: '1', left: 'Single', right: 'Married' },
        { id: '2', left: 'Fall in love', right: 'Break up' },
        { id: '3', left: 'Get together', right: 'Separate' },
        { id: '4', left: 'Birth', right: 'Death' }
      ],
      explanation: 'Pares de conceptos opuestos en el ciclo vital.'
    } as any
  },
  {
    id: 'a2-u21-e42',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Life Stages',
    topicName: 'Life Stages',
    difficulty: 'medium',
    content: {
      title: 'Ending a relationship',
      instructions: 'Elige la opción correcta.',
      questions: [
        {
          id: 'q1',
          question: 'After ten years of marriage, they decided to get a ___ .',
          options: ['divorce', 'wedding', 'partner'],
          correctAnswer: 0,
          explanation: '"Divorce" es el divorcio.'
        }
      ]
    }
  },
  {
    id: 'a2-u21-e43',
    type: 'speaking-analysis',
    level: 'A2',
    topic: 'Life Stages',
    topicName: 'Life Stages',
    difficulty: 'medium',
    content: {
      title: 'Pronunciation: Partner',
      instructions: 'Di "This is my partner".',
      questions: [
        {
          id: 'q1',
          text: 'This is my partner',
          correctAnswer: 'This is my partner',
          explanation: 'Pronuncia "partner" como /ˈpɑːtnə/.'
        }
      ]
    }
  },
  {
    id: 'a2-u21-e44',
    type: 'fill-blank',
    level: 'A2',
    topic: 'Life Stages',
    topicName: 'Life Stages',
    difficulty: 'hard',
    content: {
      title: 'Relatives',
      instructions: 'Completa la frase.',
      questions: [
        {
          id: 'q1',
          text: 'All my ___ came to the wedding.',
          correctAnswer: 'relatives',
          explanation: '"Relatives" son los parientes o familiares.'
        }
      ]
    }
  },
  {
    id: 'a2-u21-e45',
    type: 'sentence-building',
    level: 'A2',
    topic: 'Life Stages',
    topicName: 'Life Stages',
    difficulty: 'hard',
    content: {
      title: 'Breaking up',
      instructions: 'Ordena la frase.',
      sentences: [
        {
          id: 's1',
          words: ['Why', 'did', 'they', 'break', 'up', 'last', 'month', '?'],
          correctSentence: 'Why did they break up last month?',
          translation: '¿Por qué rompieron el mes pasado?',
          hint: 'Usa "break up".',
          explanation: '"Break up" es romper una relación.',
          points: 10
        }
      ]
    } as any
  },

  // --- SUB-TOPIC 5: Review & Mixed Practice (46-50) ---
  {
    id: 'a2-u21-e46',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Life Stages',
    topicName: 'Life Stages',
    difficulty: 'medium',
    content: {
      title: 'Mixed Review',
      instructions: 'Elige la opción correcta.',
      questions: [
        {
          id: 'q1',
          question: 'I ___ have much money when I was a student.',
          options: ["didn't use to", "didn't used to", "not used to"],
          correctAnswer: 0,
          explanation: 'Negativo de Used to: didn’t use to.'
        }
      ]
    }
  },
  {
    id: 'a2-u21-e47',
    type: 'fill-blank',
    level: 'A2',
    topic: 'Life Stages',
    topicName: 'Life Stages',
    difficulty: 'medium',
    content: {
      title: 'Stages review',
      instructions: 'Completa.',
      questions: [
        {
          id: 'q1',
          text: 'A ___ is a child who is learning to walk.',
          correctAnswer: 'toddler',
          explanation: '"Toddler" es un niño pequeño que está empezando a andar.'
        }
      ]
    }
  },
  {
    id: 'a2-u21-e48',
    type: 'sentence-building',
    level: 'A2',
    topic: 'Life Stages',
    topicName: 'Life Stages',
    difficulty: 'medium',
    content: {
      title: 'Past Habit Review',
      instructions: 'Ordena la frase.',
      sentences: [
        {
          id: 's1',
          words: ['Did', 'you', 'use', 'to', 'wear', 'a', 'uniform', '?'],
          correctSentence: 'Did you use to wear a uniform?',
          translation: '¿Solías llevar uniforme?',
          hint: 'Pregunta.',
          explanation: 'Interrogativa de Used to.',
          points: 10
        }
      ]
    } as any
  },
  {
    id: 'a2-u21-e49',
    type: 'matching',
    level: 'A2',
    topic: 'Life Stages',
    topicName: 'Life Stages',
    difficulty: 'medium',
    content: {
      title: 'Life Review',
      instructions: 'Une el evento con la etapa típica.',
      pairs: [
        { id: '1', left: 'Learn to speak', right: 'Infancy' },
        { id: '2', left: 'Go to prom', right: 'Adolescence' },
        { id: '3', left: 'Buy a first car', right: 'Young Adulthood' },
        { id: '4', left: 'Become a grandparent', right: 'Elderly age' }
      ],
      explanation: 'Relación entre eventos y etapas de la vida.'
    } as any
  },
  {
    id: 'a2-u21-e50',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Life Stages',
    topicName: 'Life Stages',
    difficulty: 'hard',
    content: {
      title: 'Final Challenge',
      instructions: 'Elige la opción correcta.',
      questions: [
        {
          id: 'q1',
          question: 'I ___ go to the park every day in my ___ .',
          options: ['used to / childhood', 'use to / adult', 'did use to / toddler'],
          correctAnswer: 0,
          explanation: 'Combinación de hábito pasado y etapa vital.'
        }
      ]
    }
  }
];
