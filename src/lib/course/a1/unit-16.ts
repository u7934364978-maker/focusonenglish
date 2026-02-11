import { Exercise } from '@/lib/exercise-generator';

export const UNIT_16_EXERCISES: Exercise[] = [
  {
    id: 'a1-u16-e1',
    type: 'multiple-choice',
    level: 'A1',
    topic: 'Weather',
    topicName: 'Sunny or Rainy?',
    difficulty: 'easy',
    content: {
      title: 'El clima hoy',
      instructions: '¿Cómo se dice "soleado" en inglés?',
      questions: [
        {
          id: 'q1',
          question: 'Today is very ________.',
          options: ['sunny', 'rainy', 'snowy'],
          correctAnswer: 0,
          explanation: '"Sunny" viene de "sun" (sol). Significa soleado.'
        }
      ]
    }
  },
  {
    id: 'a1-u16-e2',
    type: 'flashcard',
    level: 'A1',
    topic: 'Weather',
    topicName: 'Sunny or Rainy?',
    difficulty: 'easy',
    content: {
      items: [
        {
          front: 'Lluvia',
          back: 'Rain',
          example: 'I like the rain.',
          pronunciation: '/reɪn/',
          explanation: '"Rain" es lluvia. Es común en otoño.'
        }
      ]
    } as any
  },
  {
    id: 'a1-u16-e3',
    type: 'sentence-building',
    level: 'A1',
    topic: 'Weather',
    topicName: 'Sunny or Rainy?',
    difficulty: 'easy',
    content: {
      title: 'Está lloviendo',
      instructions: 'Ordena las palabras para decir "Está lloviendo".',
      sentences: [
        {
          id: 's1',
          words: ['raining', 'is', 'It'],
          correctSentence: 'It is raining',
          translation: 'Está lloviendo.',
          hint: 'Empieza con "It".',
          explanation: 'Usamos "It is" para hablar del clima en inglés.'
        }
      ]
    } as any
  },
  {
    id: 'a1-u16-e4',
    type: 'matching',
    level: 'A1',
    topic: 'Weather',
    topicName: 'Sunny or Rainy?',
    difficulty: 'easy',
    content: {
      title: 'Tipos de Clima',
      instructions: 'Une cada palabra del clima con su traducción.',
      pairs: [
        { id: 'p1', left: 'Sun', right: 'Sol' },
        { id: 'p2', left: 'Cloud', right: 'Nube' },
        { id: 'p3', left: 'Wind', right: 'Viento' },
        { id: 'p4', left: 'Snow', right: 'Nieve' },
        { id: 'p5', left: 'Storm', right: 'Tormenta' }
      ],
      explanation: 'Estas son las palabras básicas para describir el tiempo.'
    } as any
  },
  {
    id: 'a1-u16-e5',
    type: 'speaking-analysis',
    level: 'A1',
    topic: 'Weather',
    topicName: 'Sunny or Rainy?',
    difficulty: 'easy',
    content: {
      title: 'Pronunciación: Sunny',
      instructions: 'Di la palabra para "soleado".',
      questions: [
        {
          id: 'q1',
          text: 'Sunny',
          phonetic: '/ˈsʌn.i/',
          translation: 'Soleado',
          explanation: 'La "u" suena como una "a" corta y seca.'
        }
      ]
    } as any
  },
  {
    id: 'a1-u16-e6',
    type: 'fill-blank',
    level: 'A1',
    topic: 'Weather',
    topicName: 'Sunny or Rainy?',
    difficulty: 'easy',
    content: {
      title: 'Cielo nublado',
      instructions: 'Completa con la palabra para "nube".',
      questions: [
        {
          id: 'q1',
          question: 'I see a white ________ in the sky.',
          correctAnswer: 'cloud',
          explanation: '"Cloud" significa nube. Muchas nubes hacen un día "cloudy".'
        }
      ]
    } as any
  },
  {
    id: 'a1-u16-e7',
    type: 'multiple-choice',
    level: 'A1',
    topic: 'Weather',
    topicName: 'Sunny or Rainy?',
    difficulty: 'easy',
    content: {
      title: 'Día de nieve',
      instructions: '¿Qué palabra significa "nevado"?',
      questions: [
        {
          id: 'q1',
          question: 'The mountain is ________.',
          options: ['snowy', 'hot', 'dry'],
          correctAnswer: 0,
          explanation: '"Snowy" describe un lugar cubierto de nieve.'
        }
      ]
    }
  },
  {
    id: 'a1-u16-e8',
    type: 'sentence-building',
    level: 'A1',
    topic: 'Weather',
    topicName: 'Sunny or Rainy?',
    difficulty: 'easy',
    content: {
      title: 'Hace calor',
      instructions: 'Ordena para decir "Hace calor hoy".',
      sentences: [
        {
          id: 's1',
          words: ['today', 'hot', 'is', 'It'],
          correctSentence: 'It is hot today',
          translation: 'Hace calor hoy.',
          hint: 'Empieza con "It".',
          explanation: '"Hot" significa calor o caliente.'
        }
      ]
    } as any
  },
  {
    id: 'a1-u16-e9',
    type: 'flashcard',
    level: 'A1',
    topic: 'Weather',
    topicName: 'Sunny or Rainy?',
    difficulty: 'easy',
    content: {
      items: [
        {
          front: 'Frío',
          back: 'Cold',
          example: 'It is cold in winter.',
          pronunciation: '/koʊld/',
          explanation: '"Cold" significa frío. ¡No lo confundas con "caldo"!'
        }
      ]
    } as any
  },
  {
    id: 'a1-u16-e10',
    type: 'multiple-choice',
    level: 'A1',
    topic: 'Weather',
    topicName: 'Sunny or Rainy?',
    difficulty: 'easy',
    content: {
      title: 'Mucho viento',
      instructions: '¿Cómo se dice "ventoso"?',
      questions: [
        {
          id: 'q1',
          question: 'Hold your hat! It is ________.',
          options: ['windy', 'calm', 'sunny'],
          correctAnswer: 0,
          explanation: '"Windy" viene de "wind" (viento).'
        }
      ]
    }
  },
  {
    id: 'a1-u16-e11',
    type: 'fill-blank',
    level: 'A1',
    topic: 'Weather',
    topicName: 'Sunny or Rainy?',
    difficulty: 'medium',
    content: {
      title: 'Invierno',
      instructions: 'Escribe la palabra para "frío".',
      questions: [
        {
          id: 'q1',
          question: 'I am ________. I need a jacket.',
          correctAnswer: 'cold',
          explanation: 'Usamos "I am cold" para decir "tengo frío".'
        }
      ]
    } as any
  },
  {
    id: 'a1-u16-e12',
    type: 'matching',
    level: 'A1',
    topic: 'Weather',
    topicName: 'Sunny or Rainy?',
    difficulty: 'medium',
    content: {
      title: 'Estados del Clima',
      instructions: 'Une cada adjetivo del clima con su traducción.',
      pairs: [
        { id: 'p1', left: 'Cloudy', right: 'Nublado' },
        { id: 'p2', left: 'Rainy', right: 'Lluvioso' },
        { id: 'p3', left: 'Foggy', right: 'Con niebla' },
        { id: 'p4', left: 'Clear', right: 'Despejado' },
        { id: 'p5', left: 'Dry', right: 'Seco' }
      ],
      explanation: 'Estos adjetivos nos ayudan a dar más detalles sobre el tiempo.'
    } as any
  },
  {
    id: 'a1-u16-e13',
    type: 'speaking-analysis',
    level: 'A1',
    topic: 'Weather',
    topicName: 'Sunny or Rainy?',
    difficulty: 'easy',
    content: {
      title: 'Pronunciación: Rain',
      instructions: 'Di la palabra para "lluvia".',
      questions: [
        {
          id: 'q1',
          text: 'Rain',
          phonetic: '/reɪn/',
          translation: 'Lluvia',
          explanation: 'La combinación "ai" suena como "ei".'
        }
      ]
    } as any
  },
  {
    id: 'a1-u16-e14',
    type: 'sentence-building',
    level: 'A1',
    topic: 'Weather',
    topicName: 'Sunny or Rainy?',
    difficulty: 'medium',
    content: {
      title: 'Mañana nublada',
      instructions: 'Ordena para decir "Está nublado esta mañana".',
      sentences: [
        {
          id: 's1',
          words: ['morning', 'this', 'cloudy', 'is', 'It'],
          correctSentence: 'It is cloudy this morning',
          translation: 'Está nublado esta mañana.',
          hint: 'Empieza con "It".',
          explanation: '"This morning" significa esta mañana.'
        }
      ]
    } as any
  },
  {
    id: 'a1-u16-e15',
    type: 'multiple-choice',
    level: 'A1',
    topic: 'Weather',
    topicName: 'Sunny or Rainy?',
    difficulty: 'medium',
    content: {
      title: 'Niebla en la ciudad',
      instructions: '¿Qué palabra significa "con niebla"?',
      questions: [
        {
          id: 'q1',
          question: 'I can\'t see! It is ________.',
          options: ['foggy', 'clear', 'warm'],
          correctAnswer: 0,
          explanation: '"Foggy" viene de "fog" (niebla).'
        }
      ]
    }
  },
  {
    id: 'a1-u16-e16',
    type: 'flashcard',
    level: 'A1',
    topic: 'Weather',
    topicName: 'Sunny or Rainy?',
    difficulty: 'easy',
    content: {
      items: [
        {
          front: 'Tormenta',
          back: 'Storm',
          example: 'The storm is loud.',
          pronunciation: '/stɔːrm/',
          explanation: '"Storm" es tormenta. Puede incluir truenos y relámpagos.'
        }
      ]
    } as any
  },
  {
    id: 'a1-u16-e17',
    type: 'fill-blank',
    level: 'A1',
    topic: 'Weather',
    topicName: 'Sunny or Rainy?',
    difficulty: 'medium',
    content: {
      title: 'Día de viento',
      instructions: 'Escribe la palabra para "viento".',
      questions: [
        {
          id: 'q1',
          question: 'The ________ is very strong.',
          correctAnswer: 'wind',
          explanation: '"Wind" es el sustantivo viento.'
        }
      ]
    } as any
  },
  {
    id: 'a1-u16-e18',
    type: 'matching',
    level: 'A1',
    topic: 'Weather',
    topicName: 'Sunny or Rainy?',
    difficulty: 'medium',
    content: {
      title: 'Temperaturas',
      instructions: 'Une cada temperatura con su traducción.',
      pairs: [
        { id: 'p1', left: 'Warm', right: 'Cálido' },
        { id: 'p2', left: 'Cool', right: 'Fresco' },
        { id: 'p3', left: 'Freezing', right: 'Helado/Congelado' },
        { id: 'p4', left: 'Boiling', right: 'Hirviendo/Muy caluroso' },
        { id: 'p5', left: 'Mild', right: 'Templado' }
      ],
      explanation: 'Estas palabras describen diferentes niveles de temperatura.'
    } as any
  },
  {
    id: 'a1-u16-e19',
    type: 'multiple-choice',
    level: 'A1',
    topic: 'Weather',
    topicName: 'Sunny or Rainy?',
    difficulty: 'medium',
    content: {
      title: 'Clima cálido',
      instructions: '¿Cómo se dice "agradablemente cálido"?',
      questions: [
        {
          id: 'q1',
          question: 'The weather is ________ today.',
          options: ['warm', 'freezing', 'dark'],
          correctAnswer: 0,
          explanation: '"Warm" es cálido, ni muy frío ni muy caliente.'
        }
      ]
    }
  },
  {
    id: 'a1-u16-e20',
    type: 'speaking-analysis',
    level: 'A1',
    topic: 'Weather',
    topicName: 'Sunny or Rainy?',
    difficulty: 'medium',
    content: {
      title: 'Pronunciación: Storm',
      instructions: 'Di la palabra para "tormenta".',
      questions: [
        {
          id: 'q1',
          text: 'Storm',
          phonetic: '/stɔːrm/',
          translation: 'Tormenta',
          explanation: 'Asegúrate de pronunciar la "r" suavemente.'
        }
      ]
    } as any
  },
  {
    id: 'a1-u16-e21',
    type: 'fill-blank',
    level: 'A1',
    topic: 'Weather',
    topicName: 'Sunny or Rainy?',
    difficulty: 'medium',
    content: {
      title: 'Día templado',
      instructions: 'Escribe la palabra para "templado".',
      questions: [
        {
          id: 'q1',
          question: 'It is a ________ spring day.',
          answer: 'mild',
          explanation: '"Mild" describe un clima suave o templado.'
        }
      ]
    } as any
  },
  {
    id: 'a1-u16-e22',
    type: 'sentence-building',
    level: 'A1',
    topic: 'Weather',
    topicName: 'Sunny or Rainy?',
    difficulty: 'medium',
    content: {
      title: 'Hace mucho frío',
      instructions: 'Ordena para decir "Hace mucho frío afuera".',
      sentences: [
        {
          id: 's1',
          words: ['outside', 'cold', 'very', 'is', 'It'],
          correctSentence: 'It is very cold outside',
          translation: 'Hace mucho frío afuera.',
          hint: 'Empieza con "It".',
          explanation: '"Outside" significa afuera.'
        }
      ]
    } as any
  },
  {
    id: 'a1-u16-e23',
    type: 'multiple-choice',
    level: 'A1',
    topic: 'Weather',
    topicName: 'Sunny or Rainy?',
    difficulty: 'hard',
    content: {
      title: 'Cielo despejado',
      instructions: '¿Qué palabra significa "despejado"?',
      questions: [
        {
          id: 'q1',
          question: 'The sky is ________. I can see the moon.',
          options: ['clear', 'cloudy', 'stormy'],
          correctAnswer: 0,
          explanation: '"Clear" significa despejado, sin nubes.'
        }
      ]
    }
  },
  {
    id: 'a1-u16-e24',
    type: 'matching',
    level: 'A1',
    topic: 'Weather',
    topicName: 'Sunny or Rainy?',
    difficulty: 'hard',
    content: {
      title: 'Vocabulario del Cielo',
      instructions: 'Une cada elemento con su traducción.',
      pairs: [
        { id: 'p1', left: 'Rainbow', right: 'Arcoíris' },
        { id: 'p2', left: 'Thunder', right: 'Trueno' },
        { id: 'p3', left: 'Lightning', right: 'Relámpago' },
        { id: 'p4', left: 'Ice', right: 'Hielo' },
        { id: 'p5', left: 'Sky', right: 'Cielo' }
      ],
      explanation: 'Palabras relacionadas con fenómenos atmosféricos.'
    } as any
  },
  {
    id: 'a1-u16-e25',
    type: 'fill-blank',
    level: 'A1',
    topic: 'Weather',
    topicName: 'Sunny or Rainy?',
    difficulty: 'hard',
    content: {
      title: 'El arcoíris',
      instructions: 'Escribe la palabra para "arcoíris".',
      questions: [
        {
          id: 'q1',
          question: 'Look! There is a ________.',
          answer: 'rainbow',
          explanation: '"Rainbow" se forma después de la lluvia cuando sale el sol.'
        }
      ]
    } as any
  },
  {
    id: 'a1-u16-e26',
    type: 'multiple-choice',
    level: 'A1',
    topic: 'Weather',
    topicName: 'Sunny or Rainy?',
    difficulty: 'hard',
    content: {
      title: 'Relámpagos',
      instructions: '¿Qué palabra significa "relámpago"?',
      questions: [
        {
          id: 'q1',
          question: 'I saw a flash of ________.',
          options: ['lightning', 'thunder', 'rain'],
          correctAnswer: 0,
          explanation: '"Lightning" es el destello de luz de la tormenta.'
        }
      ]
    }
  },
  {
    id: 'a1-u16-e27',
    type: 'flashcard',
    level: 'A1',
    topic: 'Weather',
    topicName: 'Sunny or Rainy?',
    difficulty: 'medium',
    content: {
      items: [
        {
          front: 'Trueno',
          back: 'Thunder',
          example: 'The thunder scared me.',
          pronunciation: '/ˈθʌn.dər/',
          explanation: '"Thunder" es el sonido que sigue al relámpago.'
        }
      ]
    } as any
  },
  {
    id: 'a1-u16-e28',
    type: 'sentence-building',
    level: 'A1',
    topic: 'Weather',
    topicName: 'Sunny or Rainy?',
    difficulty: 'hard',
    content: {
      title: 'Mañana despejada',
      instructions: 'Ordena para decir "Será un día despejado".',
      sentences: [
        {
          id: 's1',
          words: ['day', 'clear', 'a', 'be', 'will', 'It'],
          correctSentence: 'It will be a clear day',
          translation: 'Será un día despejado.',
          hint: 'Empieza con "It".',
          explanation: 'Usamos "will be" para hablar del futuro.'
        }
      ]
    } as any
  },
  {
    id: 'a1-u16-e29',
    type: 'matching',
    level: 'A1',
    topic: 'Weather',
    topicName: 'Sunny or Rainy?',
    difficulty: 'hard',
    content: {
      title: 'Fenómenos Naturales',
      instructions: 'Une cada fenómeno con su traducción.',
      pairs: [
        { id: 'p1', left: 'Hurricane', right: 'Huracán' },
        { id: 'p2', left: 'Flood', right: 'Inundación' },
        { id: 'p3', left: 'Drought', right: 'Sequía' },
        { id: 'p4', left: 'Tsunami', right: 'Tsunami' },
        { id: 'p5', left: 'Tornado', right: 'Tornado' }
      ],
      explanation: 'Palabras para fenómenos meteorológicos extremos.'
    } as any
  },
  {
    id: 'a1-u16-e30',
    type: 'multiple-choice',
    level: 'A1',
    topic: 'Weather',
    topicName: 'Sunny or Rainy?',
    difficulty: 'hard',
    content: {
      title: 'Mucha agua',
      instructions: '¿Qué palabra significa "inundación"?',
      questions: [
        {
          id: 'q1',
          question: 'The rain caused a ________.',
          options: ['flood', 'drought', 'storm'],
          correctAnswer: 0,
          explanation: '"Flood" es cuando hay demasiada agua.'
        }
      ]
    }
  },
  {
    id: 'a1-u16-e31',
    type: 'fill-blank',
    level: 'A1',
    topic: 'Weather',
    topicName: 'Sunny or Rainy?',
    difficulty: 'hard',
    content: {
      title: 'Sin lluvia',
      instructions: 'Escribe la palabra para "sequía".',
      questions: [
        {
          id: 'q1',
          question: 'There is a ________ because of no rain.',
          answer: 'drought',
          explanation: '"Drought" es un periodo largo sin lluvia.'
        }
      ]
    } as any
  },
  {
    id: 'a1-u16-e32',
    type: 'speaking-analysis',
    level: 'A1',
    topic: 'Weather',
    topicName: 'Sunny or Rainy?',
    difficulty: 'hard',
    content: {
      title: 'Pronunciación: Lightning',
      instructions: 'Di la palabra para "relámpago".',
      questions: [
        {
          id: 'q1',
          text: 'Lightning',
          phonetic: '/ˈlaɪt.nɪŋ/',
          translation: 'Relámpago',
          explanation: 'La "gh" es muda.'
        }
      ]
    } as any
  },
  {
    id: 'a1-u16-e33',
    type: 'multiple-choice',
    level: 'A1',
    topic: 'Weather',
    topicName: 'Sunny or Rainy?',
    difficulty: 'medium',
    content: {
      title: 'Cielo oscuro',
      instructions: '¿Qué palabra significa "oscuro"?',
      questions: [
        {
          id: 'q1',
          question: 'The sky is ________. It will rain.',
          options: ['dark', 'bright', 'blue'],
          correctAnswer: 0,
          explanation: '"Dark" es oscuro.'
        }
      ]
    }
  },
  {
    id: 'a1-u16-e34',
    type: 'flashcard',
    level: 'A1',
    topic: 'Weather',
    topicName: 'Sunny or Rainy?',
    difficulty: 'medium',
    content: {
      items: [
        {
          front: 'Brillante',
          back: 'Bright',
          example: 'The sun is bright.',
          pronunciation: '/braɪt/',
          explanation: '"Bright" significa brillante o luminoso.'
        }
      ]
    } as any
  },
  {
    id: 'a1-u16-e35',
    type: 'sentence-building',
    level: 'A1',
    topic: 'Weather',
    topicName: 'Sunny or Rainy?',
    difficulty: 'hard',
    content: {
      title: 'Día luminoso',
      instructions: 'Ordena para decir "Es un día soleado y brillante".',
      sentences: [
        {
          id: 's1',
          words: ['day', 'bright', 'sunny', 'and', 'a', 'is', 'It'],
          correctSentence: 'It is a sunny and bright day',
          translation: 'Es un día soleado y brillante.',
          hint: 'Empieza con "It".',
          explanation: 'Usamos "and" para unir dos adjetivos.'
        }
      ]
    } as any
  },
  {
    id: 'a1-u16-e36',
    type: 'matching',
    level: 'A1',
    topic: 'Weather',
    topicName: 'Sunny or Rainy?',
    difficulty: 'medium',
    content: {
      title: 'Ropa para el Clima',
      instructions: 'Une la prenda con el clima adecuado.',
      pairs: [
        { id: 'p1', left: 'Umbrella', right: 'Rain' },
        { id: 'p2', left: 'Sunglasses', right: 'Sun' },
        { id: 'p3', left: 'Scarf', right: 'Cold' },
        { id: 'p4', left: 'T-shirt', right: 'Hot' },
        { id: 'p5', left: 'Gloves', right: 'Snow' }
      ],
      explanation: 'Diferentes accesorios y ropa según el tiempo que haga.'
    } as any
  },
  {
    id: 'a1-u16-e37',
    type: 'fill-blank',
    level: 'A1',
    topic: 'Weather',
    topicName: 'Sunny or Rainy?',
    difficulty: 'medium',
    content: {
      title: 'Protección solar',
      instructions: 'Escribe la palabra para "sol".',
      questions: [
        {
          id: 'q1',
          question: 'The ________ is very strong today.',
          answer: 'sun',
          explanation: '"Sun" es sol. Protégete de él.'
        }
      ]
    } as any
  },
  {
    id: 'a1-u16-e38',
    type: 'multiple-choice',
    level: 'A1',
    topic: 'Weather',
    topicName: 'Sunny or Rainy?',
    difficulty: 'medium',
    content: {
      title: 'Paraguas',
      instructions: '¿Qué necesitas cuando llueve?',
      questions: [
        {
          id: 'q1',
          question: 'I need an ________.',
          options: ['umbrella', 'apple', 'orange'],
          correctAnswer: 0,
          explanation: '"Umbrella" es paraguas.'
        }
      ]
    }
  },
  {
    id: 'a1-u16-e39',
    type: 'flashcard',
    level: 'A1',
    topic: 'Weather',
    topicName: 'Sunny or Rainy?',
    difficulty: 'easy',
    content: {
      items: [
        {
          front: 'Gafas de sol',
          back: 'Sunglasses',
          example: 'I wear sunglasses.',
          pronunciation: '/ˈsʌnˌɡlæs.ɪz/',
          explanation: '"Sunglasses" es una palabra compuesta de "sun" (sol) y "glasses" (gafas).'
        }
      ]
    } as any
  },
  {
    id: 'a1-u16-e40',
    type: 'sentence-building',
    level: 'A1',
    topic: 'Weather',
    topicName: 'Sunny or Rainy?',
    difficulty: 'medium',
    content: {
      title: '¿Cómo está el tiempo?',
      instructions: 'Ordena para preguntar "¿Cómo está el clima?".',
      sentences: [
        {
          id: 's1',
          words: ['weather', 'the', 'is', 'How'],
          correctSentence: 'How is the weather',
          translation: '¿Cómo está el clima?',
          hint: 'Empieza con "How".',
          explanation: 'Esta es la pregunta estándar para saber el tiempo.'
        }
      ]
    } as any
  },
  {
    id: 'a1-u16-e41',
    type: 'fill-blank',
    level: 'A1',
    topic: 'Weather',
    topicName: 'Sunny or Rainy?',
    difficulty: 'hard',
    content: {
      title: 'Pregunta sobre el clima',
      instructions: 'Completa la pregunta sobre el clima.',
      questions: [
        {
          id: 'q1',
          question: 'What ________ the weather like today?',
          correctAnswer: 'is',
          explanation: '"What is the weather like?" es otra forma común de preguntar por el tiempo.'
        }
      ]
    } as any
  },
  {
    id: 'a1-u16-e42',
    type: 'matching',
    level: 'A1',
    topic: 'Weather',
    topicName: 'Sunny or Rainy?',
    difficulty: 'hard',
    content: {
      title: 'Preguntas y Respuestas',
      instructions: 'Une la pregunta con su respuesta lógica.',
      pairs: [
        { id: 'p1', left: 'Is it sunny?', right: 'Yes, it is.' },
        { id: 'p2', left: 'Do you need an umbrella?', right: 'Yes, it is raining.' },
        { id: 'p3', left: 'How is the weather?', right: 'It is very hot.' },
        { id: 'p4', left: 'Is it snowing?', right: 'No, it is warm.' },
        { id: 'p5', left: 'Is there a storm?', right: 'Yes, I hear thunder.' }
      ],
      explanation: 'Conversaciones básicas sobre el tiempo.'
    } as any
  },
  {
    id: 'a1-u16-e43',
    type: 'multiple-choice',
    level: 'A1',
    topic: 'Weather',
    topicName: 'Sunny or Rainy?',
    difficulty: 'medium',
    content: {
      title: 'Pronóstico',
      instructions: '¿Qué significa "pronóstico"?',
      questions: [
        {
          id: 'q1',
          question: 'Check the weather ________.',
          options: ['forecast', 'history', 'news'],
          correctAnswer: 0,
          explanation: '"Forecast" es el pronóstico o predicción del tiempo.'
        }
      ]
    }
  },
  {
    id: 'a1-u16-e44',
    type: 'speaking-analysis',
    level: 'A1',
    topic: 'Weather',
    topicName: 'Sunny or Rainy?',
    difficulty: 'medium',
    content: {
      title: 'Pronunciación: Forecast',
      instructions: 'Di la palabra para "pronóstico".',
      questions: [
        {
          id: 'q1',
          text: 'Forecast',
          phonetic: '/ˈfɔːr.kæst/',
          translation: 'Pronóstico',
          explanation: 'Acentúa la primera sílaba: "FORE-cast".'
        }
      ]
    } as any
  },
  {
    id: 'a1-u16-e45',
    type: 'fill-blank',
    level: 'A1',
    topic: 'Weather',
    topicName: 'Sunny or Rainy?',
    difficulty: 'hard',
    content: {
      title: 'Predicción',
      instructions: 'Escribe la palabra para "pronóstico".',
      questions: [
        {
          id: 'q1',
          question: 'The ________ says it will snow.',
          correctAnswer: 'forecast',
          explanation: '"Forecast" se usa para predicciones oficiales.'
        }
      ]
    } as any
  },
  {
    id: 'a1-u16-e46',
    type: 'multiple-choice',
    level: 'A1',
    topic: 'Weather',
    topicName: 'Sunny or Rainy?',
    difficulty: 'medium',
    content: {
      title: 'Cielo azul',
      instructions: '¿Cómo se dice "azul" en inglés?',
      questions: [
        {
          id: 'q1',
          question: 'The sky is ________ today.',
          options: ['blue', 'green', 'red'],
          correctAnswer: 0,
          explanation: '"Blue" es azul, el color típico de un cielo despejado.'
        }
      ]
    }
  },
  {
    id: 'a1-u16-e47',
    type: 'flashcard',
    level: 'A1',
    topic: 'Weather',
    topicName: 'Sunny or Rainy?',
    difficulty: 'easy',
    content: {
      items: [
        {
          front: 'Gris',
          back: 'Grey',
          example: 'The clouds are grey.',
          pronunciation: '/ɡreɪ/',
          explanation: '"Grey" (o "Gray" en EE.UU.) es el color de las nubes de lluvia.'
        }
      ]
    } as any
  },
  {
    id: 'a1-u16-e48',
    type: 'matching',
    level: 'A1',
    topic: 'Weather',
    topicName: 'Sunny or Rainy?',
    difficulty: 'hard',
    content: {
      title: 'Resumen del Clima',
      instructions: 'Une cada término con su descripción.',
      pairs: [
        { id: 'p1', left: 'Sun', right: 'Yellow and hot' },
        { id: 'p2', left: 'Rain', right: 'Water from the sky' },
        { id: 'p3', left: 'Snow', right: 'White and cold' },
        { id: 'p4', left: 'Cloud', right: 'White or grey in the sky' },
        { id: 'p5', left: 'Wind', right: 'Moving air' }
      ],
      explanation: 'Descripciones básicas de los elementos del clima.'
    } as any
  },
  {
    id: 'a1-u16-e49',
    type: 'fill-blank',
    level: 'A1',
    topic: 'Weather',
    topicName: 'Sunny or Rainy?',
    difficulty: 'hard',
    content: {
      title: 'Mañana fría',
      instructions: 'Completa con la forma correcta de "estar".',
      questions: [
        {
          id: 'q1',
          question: 'It ________ very cold this morning.',
          correctAnswer: 'is',
          explanation: 'Usamos el verbo "to be" (is) para describir el clima actual.'
        }
      ]
    } as any
  },
  {
    id: 'a1-u16-e50',
    type: 'multiple-choice',
    level: 'A1',
    topic: 'Weather',
    topicName: 'Sunny or Rainy?',
    difficulty: 'hard',
    content: {
      title: 'Repaso Final',
      instructions: '¿Qué palabra NO describe el clima?',
      questions: [
        {
          id: 'q1',
          question: 'Which word is NOT about weather?',
          options: ['apple', 'sunny', 'windy'],
          correctAnswer: 0,
          explanation: '"Apple" (manzana) es una fruta, no tiene que ver con el tiempo.'
        }
      ]
    }
  }
];
