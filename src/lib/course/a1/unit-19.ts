import { Exercise } from '@/lib/exercise-generator';

/**
 * Unit 19: Action
 */

export const UNIT_19_EXERCISES: Exercise[] = [
  {
    id: 'a1-u19-e1',
    type: 'matching',
    level: 'A1',
    topic: 'Action',
    topicName: 'Action!',
    difficulty: 'easy',
    content: {
      title: 'Verbos de acción básicos',
      instructions: 'Relaciona los verbos con su significado en español.',
      pairs: [
        { id: 'p1', left: 'Swim', right: 'Nadar' },
        { id: 'p2', left: 'Run', right: 'Correr' },
        { id: 'p3', left: 'Jump', right: 'Saltar' },
        { id: 'p4', left: 'Sing', right: 'Cantar' },
        { id: 'p5', left: 'Dance', right: 'Bailar' }
      ],
      explanation: 'Estos verbos describen acciones físicas comunes.'
    } as any
  },
  {
    id: 'a1-u19-e2',
    type: 'multiple-choice',
    level: 'A1',
    topic: 'Action',
    topicName: 'Action!',
    difficulty: 'easy',
    content: {
      title: 'Habilidades',
      instructions: 'Traduce: Yo puedo nadar.',
      questions: [
        {
          id: 'q1',
          question: 'Yo puedo nadar.',
          options: ['I can swim', "I can't swim", 'I am swim'],
          correctAnswer: 0,
          explanation: "Usamos 'can' para expresar habilidades físicas."
        }
      ]
    }
  },
  {
    id: 'a1-u19-e3',
    type: 'fill-blank',
    level: 'A1',
    topic: 'Action',
    topicName: 'Action!',
    difficulty: 'easy',
    content: {
      title: 'Incapacidad',
      instructions: 'Completa con la forma negativa de "can".',
      questions: [
        {
          id: 'q1',
          question: "I _________ fly.",
          correctAnswer: "can't",
          explanation: "'Can't' es la contracción de 'cannot' y expresa incapacidad."
        }
      ]
    } as any
  },
  {
    id: 'a1-u19-e4',
    type: 'flashcard',
    level: 'A1',
    topic: 'Action',
    topicName: 'Action!',
    difficulty: 'easy',
    content: {
      items: [
        {
          front: 'Cantar',
          back: 'Sing',
          example: 'I can sing well.',
          pronunciation: '/sɪŋ/',
          explanation: '"Sing" es cantar. La "g" final es suave.'
        }
      ]
    } as any
  },
  {
    id: 'a1-u19-e5',
    type: 'sentence-building',
    level: 'A1',
    topic: 'Action',
    topicName: 'Action!',
    difficulty: 'easy',
    content: {
      title: 'Puedo bailar',
      instructions: 'Ordena las palabras para decir "Yo puedo bailar".',
      sentences: [
        {
          id: 's1',
          words: ['dance', 'can', 'I'],
          correctSentence: 'I can dance',
          translation: 'Yo puedo bailar.',
          explanation: 'La estructura es Sujeto + can + Verbo.'
        }
      ]
    } as any
  },
  {
    id: 'a1-u19-e6',
    type: 'speaking-analysis',
    level: 'A1',
    topic: 'Action',
    topicName: 'Action!',
    difficulty: 'easy',
    content: {
      title: 'Pronunciación: Can',
      instructions: 'Di la palabra para "poder".',
      questions: [
        {
          id: 'q1',
          text: 'Can',
          phonetic: '/kæn/',
          translation: 'Poder',
          explanation: 'La "a" es corta y abierta.'
        }
      ]
    } as any
  },
  {
    id: 'a1-u19-e7',
    type: 'matching',
    level: 'A1',
    topic: 'Action',
    topicName: 'Action!',
    difficulty: 'easy',
    content: {
      title: 'Más habilidades',
      instructions: 'Relaciona las habilidades con su traducción.',
      pairs: [
        { id: 'p1', left: 'Cook', right: 'Cocinar' },
        { id: 'p2', left: 'Drive', right: 'Conducir' },
        { id: 'p3', left: 'Speak', right: 'Hablar' },
        { id: 'p4', left: 'Draw', right: 'Dibujar' },
        { id: 'p5', left: 'Write', right: 'Escribir' }
      ],
      explanation: 'Verbos para talentos o capacidades aprendidas.'
    } as any
  },
  {
    id: 'a1-u19-e8',
    type: 'multiple-choice',
    level: 'A1',
    topic: 'Action',
    topicName: 'Action!',
    difficulty: 'easy',
    content: {
      title: 'Cocina',
      instructions: 'Él puede cocinar muy bien.',
      questions: [
        {
          id: 'q1',
          question: 'He can cook very well.',
          options: ['Él puede cocinar muy bien.', 'Él no sabe cocinar.', 'Él quiere cocinar.'],
          correctAnswer: 0,
          explanation: "'Can' no cambia su forma según el sujeto."
        }
      ]
    }
  },
  {
    id: 'a1-u19-e9',
    type: 'fill-blank',
    level: 'A1',
    topic: 'Action',
    topicName: 'Action!',
    difficulty: 'medium',
    content: {
      title: 'Idiomas',
      instructions: 'Completa con la palabra para "hablar".',
      questions: [
        {
          id: 'q1',
          question: 'She can _________ English.',
          correctAnswer: 'speak',
          explanation: "'Speak' se usa para la habilidad de comunicarse en un idioma."
        }
      ]
    } as any
  },
  {
    id: 'a1-u19-e10',
    type: 'flashcard',
    level: 'A1',
    topic: 'Action',
    topicName: 'Action!',
    difficulty: 'easy',
    content: {
      items: [
        {
          front: 'Conducir',
          back: 'Drive',
          example: 'I can drive a car.',
          pronunciation: '/draɪv/',
          explanation: '"Drive" se usa para coches, camiones y autobuses.'
        }
      ]
    } as any
  },
  {
    id: 'a1-u19-e11',
    type: 'sentence-building',
    level: 'A1',
    topic: 'Action',
    topicName: 'Action!',
    difficulty: 'medium',
    content: {
      title: 'Pregunta de habilidad',
      instructions: 'Ordena para preguntar "¿Puedes conducir?".',
      sentences: [
        {
          id: 's1',
          words: ['drive', 'you', 'Can'],
          correctSentence: 'Can you drive',
          translation: '¿Puedes conducir?',
          explanation: 'Para preguntas, invertimos el orden: Can + Sujeto + Verbo.'
        }
      ]
    } as any
  },
  {
    id: 'a1-u19-e12',
    type: 'matching',
    level: 'A1',
    topic: 'Action',
    topicName: 'Action!',
    difficulty: 'medium',
    content: {
      title: 'Instrumentos y Deportes',
      instructions: 'Relaciona la acción con su traducción.',
      pairs: [
        { id: 'p1', left: 'Play the guitar', right: 'Tocar la guitarra' },
        { id: 'p2', left: 'Play tennis', right: 'Jugar al tenis' },
        { id: 'p3', left: 'Play the piano', right: 'Tocar el piano' },
        { id: 'p4', left: 'Play soccer', right: 'Jugar al fútbol' },
        { id: 'p5', left: 'Play chess', right: 'Jugar al ajedrez' }
      ],
      explanation: "Usamos 'the' con instrumentos, pero no con deportes."
    } as any
  },
  {
    id: 'a1-u19-e13',
    type: 'multiple-choice',
    level: 'A1',
    topic: 'Action',
    topicName: 'Action!',
    difficulty: 'medium',
    content: {
      title: 'Talento musical',
      instructions: '¿Qué significa esta frase?',
      questions: [
        {
          id: 'q1',
          question: 'I can play the piano.',
          options: ['Yo puedo tocar el piano.', 'Yo tengo un piano.', 'Yo toco el piano.'],
          correctAnswer: 0,
          explanation: "Recordamos que 'play' significa tanto 'tocar' (instrumentos) como 'jugar' (deportes)."
        }
      ]
    }
  },
  {
    id: 'a1-u19-e14',
    type: 'fill-blank',
    level: 'A1',
    topic: 'Action',
    topicName: 'Action!',
    difficulty: 'medium',
    content: {
      title: 'Deportes',
      instructions: 'Escribe la palabra que falta.',
      questions: [
        {
          id: 'q1',
          question: 'Can you _________ soccer?',
          correctAnswer: 'play',
          explanation: "Usamos 'play' para deportes que usan pelota o son competitivos."
        }
      ]
    } as any
  },
  {
    id: 'a1-u19-e15',
    type: 'speaking-analysis',
    level: 'A1',
    topic: 'Action',
    topicName: 'Action!',
    difficulty: 'medium',
    content: {
      title: 'Pronunciación: Guitar',
      instructions: 'Di la palabra para "guitarra".',
      questions: [
        {
          id: 'q1',
          text: 'Guitar',
          phonetic: '/ɡɪˈtɑːr/',
          translation: 'Guitarra',
          explanation: 'El acento recae en la segunda sílaba.'
        }
      ]
    } as any
  },
  {
    id: 'a1-u19-e16',
    type: 'matching',
    level: 'A1',
    topic: 'Action',
    topicName: 'Action!',
    difficulty: 'medium',
    content: {
      title: 'Adverbios de acción',
      instructions: 'Relaciona cómo se realiza la acción.',
      pairs: [
        { id: 'p1', left: 'Fast', right: 'Rápido' },
        { id: 'p2', left: 'Slowly', right: 'Lentamente' },
        { id: 'p3', left: 'Well', right: 'Bien' },
        { id: 'p4', left: 'Badly', right: 'Mal' },
        { id: 'p5', left: 'High', right: 'Alto' }
      ],
      explanation: 'Estos adverbios describen la calidad o velocidad de la acción.'
    } as any
  },
  {
    id: 'a1-u19-e17',
    type: 'multiple-choice',
    level: 'A1',
    topic: 'Action',
    topicName: 'Action!',
    difficulty: 'medium',
    content: {
      title: 'Velocidad',
      instructions: 'Traduce: Él puede correr rápido.',
      questions: [
        {
          id: 'q1',
          question: 'Él puede correr rápido.',
          options: ['He can run fast', "He can't run fast", 'He is run fast'],
          correctAnswer: 0,
          explanation: "'Fast' es un adverbio que describe la velocidad de 'run'."
        }
      ]
    }
  },
  {
    id: 'a1-u19-e18',
    type: 'fill-blank',
    level: 'A1',
    topic: 'Action',
    topicName: 'Action!',
    difficulty: 'medium',
    content: {
      title: 'Canto hermoso',
      instructions: 'Completa: Ella puede cantar bien.',
      questions: [
        {
          id: 'q1',
          question: 'She can sing _________.',
          correctAnswer: 'well',
          explanation: "Usamos 'well' (bien) para describir cómo canta ella."
        }
      ]
    } as any
  },
  {
    id: 'a1-u19-e19',
    type: 'flashcard',
    level: 'A1',
    topic: 'Action',
    topicName: 'Action!',
    difficulty: 'medium',
    content: {
      items: [
        {
          front: 'Lentamente',
          back: 'Slowly',
          example: 'I swim slowly.',
          pronunciation: '/ˈsloʊli/',
          explanation: '"Slowly" es el adverbio de "slow".'
        }
      ]
    } as any
  },
  {
    id: 'a1-u19-e20',
    type: 'sentence-building',
    level: 'A1',
    topic: 'Action',
    topicName: 'Action!',
    difficulty: 'hard',
    content: {
      title: 'No puedo saltar alto',
      instructions: 'Ordena para decir "No puedo saltar alto".',
      sentences: [
        {
          id: 's1',
          words: ['high', 'jump', "can't", 'I'],
          correctSentence: "I can't jump high",
          translation: 'No puedo saltar alto.',
          explanation: "La negación 'can't' va después del sujeto."
        }
      ]
    } as any
  },
  {
    id: 'a1-u19-e21',
    type: 'matching',
    level: 'A1',
    topic: 'Action',
    topicName: 'Action!',
    difficulty: 'medium',
    content: {
      title: 'Peticiones y Permisos',
      instructions: 'Relaciona las frases con su traducción.',
      pairs: [
        { id: 'p1', left: 'Can I help you?', right: '¿Puedo ayudarte?' },
        { id: 'p2', left: 'Can I come in?', right: '¿Puedo entrar?' },
        { id: 'p3', left: 'Can you wait?', right: '¿Puedes esperar?' },
        { id: 'p4', left: 'Can I go?', right: '¿Puedo irme?' },
        { id: 'p5', left: 'Can you hear?', right: '¿Puedes oír?' }
      ],
      explanation: "'Can' también se usa para ofrecer ayuda o pedir permiso."
    } as any
  },
  {
    id: 'a1-u19-e22',
    type: 'multiple-choice',
    level: 'A1',
    topic: 'Action',
    topicName: 'Action!',
    difficulty: 'medium',
    content: {
      title: 'Petición de entrada',
      instructions: '¿Cómo pedirías permiso para entrar?',
      questions: [
        {
          id: 'q1',
          question: 'Can I come in?',
          options: ['¿Puedo entrar?', '¿Quieres entrar?', '¿Debo entrar?'],
          correctAnswer: 0,
          explanation: "'Can I...' es una forma común y educada de pedir permiso."
        }
      ]
    }
  },
  {
    id: 'a1-u19-e23',
    type: 'fill-blank',
    level: 'A1',
    topic: 'Action',
    topicName: 'Action!',
    difficulty: 'medium',
    content: {
      title: 'Ayuda',
      instructions: 'Escribe el verbo para "ayudar".',
      questions: [
        {
          id: 'q1',
          question: 'Can I _________ you?',
          correctAnswer: 'help',
          explanation: '"Help" es ayudar. Muy útil en situaciones de servicio.'
        }
      ]
    } as any
  },
  {
    id: 'a1-u19-e24',
    type: 'speaking-analysis',
    level: 'A1',
    topic: 'Action',
    topicName: 'Action!',
    difficulty: 'medium',
    content: {
      title: 'Pronunciación: Help',
      instructions: 'Di la palabra para "ayudar".',
      questions: [
        {
          id: 'q1',
          text: 'Help',
          phonetic: '/help/',
          translation: 'Ayudar',
          explanation: 'Asegúrate de pronunciar la "l" y la "p" claramente.'
        }
      ]
    } as any
  },
  {
    id: 'a1-u19-e25',
    type: 'matching',
    level: 'A1',
    topic: 'Action',
    topicName: 'Action!',
    difficulty: 'medium',
    content: {
      title: 'Verbos de los sentidos',
      instructions: 'Relaciona el verbo sensorial.',
      pairs: [
        { id: 'p1', left: 'See', right: 'Ver' },
        { id: 'p2', left: 'Hear', right: 'Oír' },
        { id: 'p3', left: 'Touch', right: 'Tocar' },
        { id: 'p4', left: 'Smell', right: 'Oler' },
        { id: 'p5', left: 'Feel', right: 'Sentir' }
      ],
      explanation: "Es muy común usar 'can' con los verbos de los sentidos en inglés."
    } as any
  },
  {
    id: 'a1-u19-e26',
    type: 'multiple-choice',
    level: 'A1',
    topic: 'Action',
    topicName: 'Action!',
    difficulty: 'medium',
    content: {
      title: 'Oído',
      instructions: 'No puedo oírte.',
      questions: [
        {
          id: 'q1',
          question: "I can't hear you.",
          options: ['No puedo oírte.', 'No puedo verte.', 'No puedo tocarte.'],
          correctAnswer: 0,
          explanation: "'Hear' es el sentido del oído."
        }
      ]
    }
  },
  {
    id: 'a1-u19-e27',
    type: 'fill-blank',
    level: 'A1',
    topic: 'Action',
    topicName: 'Action!',
    difficulty: 'medium',
    content: {
      title: 'Visión',
      instructions: '¿Puedes ver la montaña?',
      questions: [
        {
          id: 'q1',
          question: 'Can you _________ the mountain?',
          correctAnswer: 'see',
          explanation: '"See" es la capacidad física de ver.'
        }
      ]
    } as any
  },
  {
    id: 'a1-u19-e28',
    type: 'flashcard',
    level: 'A1',
    topic: 'Action',
    topicName: 'Action!',
    difficulty: 'easy',
    content: {
      items: [
        {
          front: 'Oler',
          back: 'Smell',
          example: 'I can smell coffee.',
          pronunciation: '/smel/',
          explanation: '"Smell" es oler. ¡El café huele bien!'
        }
      ]
    } as any
  },
  {
    id: 'a1-u19-e29',
    type: 'sentence-building',
    level: 'A1',
    topic: 'Action',
    topicName: 'Action!',
    difficulty: 'hard',
    content: {
      title: '¿Puedes oír eso?',
      instructions: 'Ordena para preguntar "¿Puedes oír eso?".',
      sentences: [
        {
          id: 's1',
          words: ['that', 'hear', 'you', 'Can'],
          correctSentence: 'Can you hear that',
          translation: '¿Puedes oír eso?',
          explanation: 'Estructura de pregunta: Can + Sujeto + Verbo + Complemento.'
        }
      ]
    } as any
  },
  {
    id: 'a1-u19-e30',
    type: 'matching',
    level: 'A1',
    topic: 'Action',
    topicName: 'Action!',
    difficulty: 'medium',
    content: {
      title: 'Acciones físicas complejas',
      instructions: 'Relaciona la acción.',
      pairs: [
        { id: 'p1', left: 'Climb', right: 'Escalar' },
        { id: 'p2', left: 'Fix', right: 'Arreglar' },
        { id: 'p3', left: 'Carry', right: 'Llevar/Cargar' },
        { id: 'p4', left: 'Catch', right: 'Atrapar' },
        { id: 'p5', left: 'Remember', right: 'Recordar' }
      ],
      explanation: 'Verbos para acciones físicas y mentales más específicas.'
    } as any
  },
  {
    id: 'a1-u19-e31',
    type: 'multiple-choice',
    level: 'A1',
    topic: 'Action',
    topicName: 'Action!',
    difficulty: 'medium',
    content: {
      title: 'Arreglar cosas',
      instructions: '¿Qué significa "He can fix cars"?',
      questions: [
        {
          id: 'q1',
          question: 'He can fix cars.',
          options: ['Él puede arreglar coches.', 'Él vende coches.', 'Él conduce coches.'],
          correctAnswer: 0,
          explanation: "'Fix' significa reparar o arreglar algo que no funciona."
        }
      ]
    }
  },
  {
    id: 'a1-u19-e32',
    type: 'fill-blank',
    level: 'A1',
    topic: 'Action',
    topicName: 'Action!',
    difficulty: 'medium',
    content: {
      title: 'Carga pesada',
      instructions: 'No puedo llevar esta caja.',
      questions: [
        {
          id: 'q1',
          question: "I can't _________ this box.",
          correctAnswer: 'carry',
          explanation: '"Carry" se refiere a llevar algo soportando su peso.'
        }
      ]
    } as any
  },
  {
    id: 'a1-u19-e33',
    type: 'speaking-analysis',
    level: 'A1',
    topic: 'Action',
    topicName: 'Action!',
    difficulty: 'medium',
    content: {
      title: 'Pronunciación: Remember',
      instructions: 'Di la palabra para "recordar".',
      questions: [
        {
          id: 'q1',
          text: 'Remember',
          phonetic: '/rɪˈmembər/',
          translation: 'Recordar',
          explanation: 'Pon el acento en la segunda sílaba: re-MEM-ber.'
        }
      ]
    } as any
  },
  {
    id: 'a1-u19-e34',
    type: 'matching',
    level: 'A1',
    topic: 'Action',
    topicName: 'Action!',
    difficulty: 'medium',
    content: {
      title: 'Ocio y Hobbies',
      instructions: 'Relaciona el hobby.',
      pairs: [
        { id: 'p1', left: 'Paint', right: 'Pintar' },
        { id: 'p2', left: 'Bake', right: 'Hornear' },
        { id: 'p3', left: 'Ski', right: 'Esquiar' },
        { id: 'p4', left: 'Skate', right: 'Patinar' },
        { id: 'p5', left: 'Read', right: 'Leer' }
      ],
      explanation: 'Más habilidades para disfrutar de tu tiempo libre.'
    } as any
  },
  {
    id: 'a1-u19-e35',
    type: 'multiple-choice',
    level: 'A1',
    topic: 'Action',
    topicName: 'Action!',
    difficulty: 'medium',
    content: {
      title: 'Hornear',
      instructions: 'My sister can bake cakes.',
      questions: [
        {
          id: 'q1',
          question: 'My sister can bake cakes.',
          options: ['Mi hermana puede hornear pasteles.', 'Mi hermana cocina pasteles.', 'Mi hermana come pasteles.'],
          correctAnswer: 0,
          explanation: "'Bake' es cocinar específicamente en el horno."
        }
      ]
    }
  },
  {
    id: 'a1-u19-e36',
    type: 'fill-blank',
    level: 'A1',
    topic: 'Action',
    topicName: 'Action!',
    difficulty: 'medium',
    content: {
      title: 'Lectura',
      instructions: '¿Puedes leer esto?',
      questions: [
        {
          id: 'q1',
          question: 'Can you _________ this?',
          correctAnswer: 'read',
          explanation: '"Read" es leer. Una habilidad esencial.'
        }
      ]
    } as any
  },
  {
    id: 'a1-u19-e37',
    type: 'flashcard',
    level: 'A1',
    topic: 'Action',
    topicName: 'Action!',
    difficulty: 'medium',
    content: {
      items: [
        {
          front: 'Pintar',
          back: 'Paint',
          example: 'I can paint a house.',
          pronunciation: '/peɪnt/',
          explanation: '"Paint" es pintar. También se usa para la pintura misma.'
        }
      ]
    } as any
  },
  {
    id: 'a1-u19-e38',
    type: 'sentence-building',
    level: 'A1',
    topic: 'Action',
    topicName: 'Action!',
    difficulty: 'hard',
    content: {
      title: 'Puedo esquiar bien',
      instructions: 'Ordena para decir "Puedo esquiar bien".',
      sentences: [
        {
          id: 's1',
          words: ['well', 'ski', 'can', 'I'],
          correctSentence: 'I can ski well',
          translation: 'Puedo esquiar bien.',
          explanation: 'Estructura: Sujeto + can + Verbo + Adverbio.'
        }
      ]
    } as any
  },
  {
    id: 'a1-u19-e39',
    type: 'matching',
    level: 'A1',
    topic: 'Action',
    topicName: 'Action!',
    difficulty: 'medium',
    content: {
      title: 'Acciones diarias',
      instructions: 'Relaciona la acción diaria.',
      pairs: [
        { id: 'p1', left: 'Walk', right: 'Caminar' },
        { id: 'p2', left: 'Stand', right: 'Estar de pie' },
        { id: 'p3', left: 'Sit', right: 'Sentarse' },
        { id: 'p4', left: 'Wait', right: 'Esperar' },
        { id: 'p5', left: 'Stop', right: 'Parar' }
      ],
      explanation: 'Acciones básicas que realizamos constantemente.'
    } as any
  },
  {
    id: 'a1-u19-e40',
    type: 'multiple-choice',
    level: 'A1',
    topic: 'Action',
    topicName: 'Action!',
    difficulty: 'medium',
    content: {
      title: 'Esperar',
      instructions: '¿Puedes esperar aquí?',
      questions: [
        {
          id: 'q1',
          question: 'Can you wait here?',
          options: ['¿Puedes esperar aquí?', '¿Quieres venir aquí?', '¿Ves esto aquí?'],
          correctAnswer: 0,
          explanation: "'Wait' es esperar."
        }
      ]
    }
  },
  {
    id: 'a1-u19-e41',
    type: 'fill-blank',
    level: 'A1',
    topic: 'Action',
    topicName: 'Action!',
    difficulty: 'medium',
    content: {
      title: 'Parar',
      instructions: 'No puedo parar.',
      questions: [
        {
          id: 'q1',
          question: "I can't _________.",
          correctAnswer: 'stop',
          explanation: '"Stop" es detenerse o parar.'
        }
      ]
    } as any
  },
  {
    id: 'a1-u19-e42',
    type: 'speaking-analysis',
    level: 'A1',
    topic: 'Action',
    topicName: 'Action!',
    difficulty: 'medium',
    content: {
      title: 'Pronunciación: Walk',
      instructions: 'Di la palabra para "caminar".',
      questions: [
        {
          id: 'q1',
          text: 'Walk',
          phonetic: '/wɔːk/',
          translation: 'Caminar',
          explanation: 'La "l" es muda. Suena como "uok".'
        }
      ]
    } as any
  },
  {
    id: 'a1-u19-e43',
    type: 'matching',
    level: 'A1',
    topic: 'Action',
    topicName: 'Action!',
    difficulty: 'medium',
    content: {
      title: 'Verbos biológicos',
      instructions: 'Relaciona la función biológica.',
      pairs: [
        { id: 'p1', left: 'Breathe', right: 'Respirar' },
        { id: 'p2', left: 'Smile', right: 'Sonreír' },
        { id: 'p3', left: 'Laugh', right: 'Reír' },
        { id: 'p4', left: 'Cry', right: 'Llorar' },
        { id: 'p5', left: 'Sleep', right: 'Dormir' }
      ],
      explanation: 'Acciones que nuestro cuerpo realiza naturalmente.'
    } as any
  },
  {
    id: 'a1-u19-e44',
    type: 'multiple-choice',
    level: 'A1',
    topic: 'Action',
    topicName: 'Action!',
    difficulty: 'medium',
    content: {
      title: 'Sueño',
      instructions: 'No puedo dormir.',
      questions: [
        {
          id: 'q1',
          question: "I can't sleep.",
          options: ['No puedo dormir.', 'No puedo llorar.', 'No puedo reír.'],
          correctAnswer: 0,
          explanation: "'Sleep' es dormir."
        }
      ]
    }
  },
  {
    id: 'a1-u19-e45',
    type: 'fill-blank',
    level: 'A1',
    topic: 'Action',
    topicName: 'Action!',
    difficulty: 'medium',
    content: {
      title: 'Sonrisa',
      instructions: '¿Puedes sonreír?',
      questions: [
        {
          id: 'q1',
          question: 'Can you _________?',
          correctAnswer: 'smile',
          explanation: '"Smile" es sonreír.'
        }
      ]
    } as any
  },
  {
    id: 'a1-u19-e46',
    type: 'flashcard',
    level: 'A1',
    topic: 'Action',
    topicName: 'Action!',
    difficulty: 'medium',
    content: {
      items: [
        {
          front: 'Reír',
          back: 'Laugh',
          example: 'I can laugh with you.',
          pronunciation: '/læf/',
          explanation: '"Laugh" es reír. La terminación "gh" suena como "f".'
        }
      ]
    } as any
  },
  {
    id: 'a1-u19-e47',
    type: 'sentence-building',
    level: 'A1',
    topic: 'Action',
    topicName: 'Action!',
    difficulty: 'hard',
    content: {
      title: 'No puedo respirar',
      instructions: 'Ordena para decir "No puedo respirar".',
      sentences: [
        {
          id: 's1',
          words: ['breathe', "can't", 'I'],
          correctSentence: "I can't breathe",
          translation: 'No puedo respirar.',
          explanation: 'Estructura negativa simple.'
        }
      ]
    } as any
  },
  {
    id: 'a1-u19-e48',
    type: 'multiple-choice',
    level: 'A1',
    topic: 'Action',
    topicName: 'Action!',
    difficulty: 'medium',
    content: {
      title: 'Pregunta general',
      instructions: '¿Qué puedes hacer?',
      questions: [
        {
          id: 'q1',
          question: 'What can you do?',
          options: ['¿Qué puedes hacer?', '¿Cómo puedes hacer?', '¿Dónde puedes hacer?'],
          correctAnswer: 0,
          explanation: "'What' significa 'qué'."
        }
      ]
    }
  },
  {
    id: 'a1-u19-e49',
    type: 'fill-blank',
    level: 'A1',
    topic: 'Action',
    topicName: 'Action!',
    difficulty: 'medium',
    content: {
      title: 'Respuesta afirmativa',
      instructions: 'Completa la respuesta corta: "Yes, I _________".',
      questions: [
        {
          id: 'q1',
          question: 'Yes, I _________.',
          correctAnswer: 'can',
          explanation: "En las respuestas cortas, usamos el auxiliar 'can'."
        }
      ]
    } as any
  },
  {
    id: 'a1-u19-e50',
    type: 'matching',
    level: 'A1',
    topic: 'Action',
    topicName: 'Action!',
    difficulty: 'hard',
    content: {
      title: 'Repaso Final',
      instructions: 'Relaciona los verbos más importantes.',
      pairs: [
        { id: 'p1', left: 'Can', right: 'Poder' },
        { id: 'p2', left: "Can't", right: 'No poder' },
        { id: 'p3', left: 'Skill', right: 'Habilidad' },
        { id: 'p4', left: 'Action', right: 'Acción' },
        { id: 'p5', left: 'Ability', right: 'Capacidad' }
      ],
      explanation: 'Conceptos clave de esta unidad sobre habilidades y acciones.'
    } as any
  }
];
