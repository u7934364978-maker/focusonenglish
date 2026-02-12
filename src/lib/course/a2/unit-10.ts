import { Exercise } from '@/lib/exercise-generator';

export const UNIT_10_EXERCISES: Exercise[] = [
  // --- SUB-TOPIC 1: Neighborhood Places (1-10) ---
  {
    id: 'a2-u10-e1',
    type: 'flashcard',
    level: 'A2',
    topic: 'My Neighborhood',
    topicName: 'My Neighborhood',
    difficulty: 'easy',
    content: {
      items: [
        {
          front: 'Barrio / Vecindario',
          back: 'Neighborhood',
          example: 'I live in a quiet neighborhood.',
          pronunciation: '/ˈneɪbəhʊd/',
          explanation: 'La zona de la ciudad donde vives.'
        }
      ]
    } as any
  },
  {
    id: 'a2-u10-e2',
    type: 'matching',
    level: 'A2',
    topic: 'My Neighborhood',
    topicName: 'My Neighborhood',
    difficulty: 'easy',
    content: {
      title: 'Local Places',
      instructions: 'Une el lugar con su traducción.',
      pairs: [
        { id: '1', left: 'Bakery', right: 'Panadería' },
        { id: '2', left: 'Pharmacy / Chemist\'s', right: 'Farmacia' },
        { id: '3', left: 'Town Hall', right: 'Ayuntamiento' },
        { id: '4', left: 'Square', right: 'Plaza' },
        { id: '5', left: 'Library', right: 'Biblioteca' }
      ],
      explanation: 'Edificios y lugares comunes en un barrio.'
    } as any
  },
  {
    id: 'a2-u10-e3',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'My Neighborhood',
    topicName: 'My Neighborhood',
    difficulty: 'easy',
    content: {
      title: 'Where do you go?',
      instructions: 'Elige el lugar correcto.',
      questions: [
        {
          id: 'q1',
          question: 'Where can you borrow books?',
          options: ['At the bookshop', 'At the library', 'At the museum'],
          correctAnswer: 1,
          explanation: 'En la "library" los libros se prestan; en la "bookshop" se compran.'
        }
      ]
    }
  },
  {
    id: 'a2-u10-e4',
    type: 'fill-blank',
    level: 'A2',
    topic: 'My Neighborhood',
    topicName: 'My Neighborhood',
    difficulty: 'easy',
    content: {
      title: 'Buying bread',
      instructions: 'Completa.',
      questions: [
        {
          id: 'q1',
          text: 'I buy fresh bread at the ___ every morning.',
          correctAnswer: 'bakery',
          explanation: 'La panadería es la "bakery".'
        }
      ]
    }
  },
  {
    id: 'a2-u10-e5',
    type: 'sentence-building',
    level: 'A2',
    topic: 'My Neighborhood',
    topicName: 'My Neighborhood',
    difficulty: 'medium',
    content: {
      title: 'There is in the neighborhood',
      instructions: 'Ordena las palabras.',
      sentences: [
        {
          id: 's1',
          words: ['There', 'is', 'a', 'new', 'park', 'near', 'my', 'house', '.'],
          correctSentence: 'There is a new park near my house.',
          translation: 'Hay un parque nuevo cerca de mi casa.',
          hint: 'Empieza con "There is".',
          explanation: 'Estructura para describir servicios del barrio.',
          points: 10
        }
      ]
    } as any
  },
  {
    id: 'a2-u10-e6',
    type: 'flashcard',
    level: 'A2',
    topic: 'My Neighborhood',
    topicName: 'My Neighborhood',
    difficulty: 'easy',
    content: {
      items: [
        {
          front: 'Comisaría de policía',
          back: 'Police station',
          example: 'The police station is in the town center.',
          pronunciation: '/pəˈliːs ˈsteɪʃən/',
          explanation: 'Oficina central de la policía local.'
        }
      ]
    } as any
  },
  {
    id: 'a2-u10-e7',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'My Neighborhood',
    topicName: 'My Neighborhood',
    difficulty: 'medium',
    content: {
      title: 'City facilities',
      instructions: 'Elige la opción correcta.',
      questions: [
        {
          id: 'q1',
          question: 'Where do you go if you feel sick?',
          options: ['To the health center', 'To the gym', 'To the post office'],
          correctAnswer: 0,
          explanation: 'Vamos al centro de salud (health center).'
        }
      ]
    }
  },
  {
    id: 'a2-u10-e8',
    type: 'speaking-analysis',
    level: 'A2',
    topic: 'My Neighborhood',
    topicName: 'My Neighborhood',
    difficulty: 'easy',
    content: {
      title: 'Pronunciation: Neighborhood',
      instructions: 'Di "Neighborhood".',
      questions: [
        {
          id: 'q1',
          text: 'Neighborhood',
          correctAnswer: 'Neighborhood',
          explanation: 'Se pronuncia /ˈneɪbəhʊd/.'
        }
      ]
    }
  },
  {
    id: 'a2-u10-e9',
    type: 'fill-blank',
    level: 'A2',
    topic: 'My Neighborhood',
    topicName: 'My Neighborhood',
    difficulty: 'medium',
    content: {
      title: 'The Square',
      instructions: 'Completa.',
      questions: [
        {
          id: 'q1',
          text: 'The children are playing in the main ___ .',
          correctAnswer: 'square',
          explanation: 'La plaza principal es la "main square".'
        }
      ]
    }
  },
  {
    id: 'a2-u10-e10',
    type: 'sentence-building',
    level: 'A2',
    topic: 'My Neighborhood',
    topicName: 'My Neighborhood',
    difficulty: 'medium',
    content: {
      title: 'Asking for location',
      instructions: 'Ordena.',
      sentences: [
        {
          id: 's1',
          words: ['Where', 'is', 'the', 'nearest', 'post', 'office', '?'],
          correctSentence: 'Where is the nearest post office?',
          translation: '¿Dónde está la oficina de correos más cercana?',
          hint: 'Usa "nearest".',
          explanation: 'Pregunta muy útil para orientarse.',
          points: 10
        }
      ]
    } as any
  },

  // --- SUB-TOPIC 2: Past Simple vs Past Continuous (11-20) ---
  {
    id: 'a2-u10-e11',
    type: 'flashcard',
    level: 'A2',
    topic: 'My Neighborhood',
    topicName: 'My Neighborhood',
    difficulty: 'easy',
    content: {
      items: [
        {
          front: 'Pasado Continuo',
          back: 'Was / Were + -ing',
          example: 'I was walking in the park.',
          pronunciation: '/wɒz ˈwɔːkɪŋ/',
          explanation: 'Indica una acción que estaba ocurriendo en un momento del pasado.'
        }
      ]
    } as any
  },
  {
    id: 'a2-u10-e12',
    type: 'matching',
    level: 'A2',
    topic: 'My Neighborhood',
    topicName: 'My Neighborhood',
    difficulty: 'easy',
    content: {
      title: 'Past forms',
      instructions: 'Une el infinitivo con su pasado continuo (I).',
      pairs: [
        { id: '1', left: 'Read', right: 'Was reading' },
        { id: '2', left: 'Sleep', right: 'Was sleeping' },
        { id: '3', left: 'Run', right: 'Was running' },
        { id: '4', left: 'Study', right: 'Was studying' }
      ],
      explanation: 'Formación del pasado continuo para la primera persona.'
    } as any
  },
  {
    id: 'a2-u10-e13',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'My Neighborhood',
    topicName: 'My Neighborhood',
    difficulty: 'medium',
    content: {
      title: 'When vs While',
      instructions: 'Elige la opción correcta.',
      questions: [
        {
          id: 'q1',
          question: 'The phone rang ___ I was having dinner.',
          options: ['when', 'while', 'during'],
          correctAnswer: 1,
          explanation: 'Usamos "while" seguido del pasado continuo para acciones largas.'
        }
      ]
    }
  },
  {
    id: 'a2-u10-e14',
    type: 'fill-blank',
    level: 'A2',
    topic: 'My Neighborhood',
    topicName: 'My Neighborhood',
    difficulty: 'medium',
    content: {
      title: 'Past Continuous negative',
      instructions: 'Completa con la forma negativa.',
      questions: [
        {
          id: 'q1',
          text: 'They ___ listening to me. (not be)',
          correctAnswer: "weren't",
          explanation: 'Negación plural en pasado continuo.'
        }
      ]
    }
  },
  {
    id: 'a2-u10-e15',
    type: 'sentence-building',
    level: 'A2',
    topic: 'My Neighborhood',
    topicName: 'My Neighborhood',
    difficulty: 'medium',
    content: {
      title: 'Interrupted actions',
      instructions: 'Ordena las palabras.',
      sentences: [
        {
          id: 's1',
          words: ['I', 'was', 'sleeping', 'when', 'you', 'called', '.'],
          correctSentence: 'I was sleeping when you called.',
          translation: 'Estaba durmiendo cuando llamaste.',
          hint: 'Usa "when".',
          explanation: 'Estructura típica: Acción larga (Past Cont) + when + Acción corta (Past Simple).',
          points: 10
        }
      ]
    } as any
  },
  {
    id: 'a2-u10-e16',
    type: 'flashcard',
    level: 'A2',
    topic: 'My Neighborhood',
    topicName: 'My Neighborhood',
    difficulty: 'easy',
    content: {
      items: [
        {
          front: 'Pasado Simple vs Continuo',
          back: 'Short action vs Long action',
          example: 'He arrived (simple) while we were eating (cont).',
          pronunciation: '/n/a/',
          explanation: 'El continuo sirve de trasfondo a la acción del simple.'
        }
      ]
    } as any
  },
  {
    id: 'a2-u10-e17',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'My Neighborhood',
    topicName: 'My Neighborhood',
    difficulty: 'medium',
    content: {
      title: 'Continuous questions',
      instructions: 'Elige la pregunta correcta.',
      questions: [
        {
          id: 'q1',
          question: 'What ___ you doing at 8 PM yesterday?',
          options: ['did', 'were', 'was'],
          correctAnswer: 1,
          explanation: 'Pregunta en pasado continuo para "you".'
        }
      ]
    }
  },
  {
    id: 'a2-u10-e18',
    type: 'speaking-analysis',
    level: 'A2',
    topic: 'My Neighborhood',
    topicName: 'My Neighborhood',
    difficulty: 'medium',
    content: {
      title: 'Pronunciation: While',
      instructions: 'Di "While I was waiting...".',
      questions: [
        {
          id: 'q1',
          text: 'While I was waiting',
          correctAnswer: 'While I was waiting',
          explanation: 'Pronuncia la "i" de "while" de forma larga: /waɪl/.'
        }
      ]
    }
  },
  {
    id: 'a2-u10-e19',
    type: 'fill-blank',
    level: 'A2',
    topic: 'My Neighborhood',
    topicName: 'My Neighborhood',
    difficulty: 'hard',
    content: {
      title: 'Mixed Past',
      instructions: 'Completa con la forma correcta.',
      questions: [
        {
          id: 'q1',
          text: 'It ___ raining when we left the house. (be)',
          correctAnswer: 'was',
          explanation: '"It was raining" (Past Continuous).'
        }
      ]
    }
  },
  {
    id: 'a2-u10-e20',
    type: 'sentence-building',
    level: 'A2',
    topic: 'My Neighborhood',
    topicName: 'My Neighborhood',
    difficulty: 'hard',
    content: {
      title: 'Action in progress',
      instructions: 'Ordena.',
      sentences: [
        {
          id: 's1',
          words: ['She', 'was', 'reading', 'a', 'book', 'in', 'the', 'library', '.'],
          correctSentence: 'She was reading a book in the library.',
          translation: 'Ella estaba leyendo un libro en la biblioteca.',
          hint: 'Past Continuous.',
          explanation: 'Descripción de una acción progresiva en el pasado.',
          points: 15
        }
      ]
    } as any
  },

  // --- SUB-TOPIC 3: Prepositions of Place in Neighborhood (21-30) ---
  {
    id: 'a2-u10-e21',
    type: 'flashcard',
    level: 'A2',
    topic: 'My Neighborhood',
    topicName: 'My Neighborhood',
    difficulty: 'easy',
    content: {
      items: [
        {
          front: 'En la esquina de',
          back: 'On the corner of',
          example: 'The bank is on the corner of the street.',
          pronunciation: '/ɒn ðə ˈkɔːnər əv/',
          explanation: 'Ubicación exacta en un cruce.'
        }
      ]
    } as any
  },
  {
    id: 'a2-u10-e22',
    type: 'matching',
    level: 'A2',
    topic: 'My Neighborhood',
    topicName: 'My Neighborhood',
    difficulty: 'easy',
    content: {
      title: 'City Prepositions',
      instructions: 'Une la preposición con su significado.',
      pairs: [
        { id: '1', left: 'Opposite', right: 'Enfrente de' },
        { id: '2', left: 'Next to', right: 'Al lado de' },
        { id: '3', left: 'Between', right: 'Entre' },
        { id: '4', left: 'Behind', right: 'Detrás de' }
      ],
      explanation: 'Para indicar dónde están los edificios.'
    } as any
  },
  {
    id: 'a2-u10-e23',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'My Neighborhood',
    topicName: 'My Neighborhood',
    difficulty: 'medium',
    content: {
      title: 'Location in the neighborhood',
      instructions: 'Elige la preposición correcta.',
      questions: [
        {
          id: 'q1',
          question: 'The pharmacy is ___ the supermarket.',
          options: ['next to', 'in', 'on'],
          correctAnswer: 0,
          explanation: 'Usamos "next to" para decir al lado.'
        }
      ]
    }
  },
  {
    id: 'a2-u10-e24',
    type: 'fill-blank',
    level: 'A2',
    topic: 'My Neighborhood',
    topicName: 'My Neighborhood',
    difficulty: 'medium',
    content: {
      title: 'Giving directions review',
      instructions: 'Completa.',
      questions: [
        {
          id: 'q1',
          text: 'The cinema is ___ the square and the park.',
          correctAnswer: 'between',
          explanation: '"Between" indica posición en medio de dos lugares.'
        }
      ]
    }
  },
  {
    id: 'a2-u10-e25',
    type: 'sentence-building',
    level: 'A2',
    topic: 'My Neighborhood',
    topicName: 'My Neighborhood',
    difficulty: 'medium',
    content: {
      title: 'Neighborhood map',
      instructions: 'Ordena.',
      sentences: [
        {
          id: 's1',
          words: ['The', 'school', 'is', 'opposite', ' the', 'hospital', '.'],
          correctSentence: 'The school is opposite the hospital.',
          translation: 'La escuela está enfrente del hospital.',
          hint: 'Usa "opposite".',
          explanation: 'Indicación de ubicación cara a cara.',
          points: 10
        }
      ]
    } as any
  },
  {
    id: 'a2-u10-e26',
    type: 'flashcard',
    level: 'A2',
    topic: 'My Neighborhood',
    topicName: 'My Neighborhood',
    difficulty: 'easy',
    content: {
      items: [
        {
          front: 'Lejos de',
          back: 'Far from',
          example: 'The airport is far from here.',
          pronunciation: '/fɑː frɒm/',
          explanation: 'Indica gran distancia.'
        }
      ]
    } as any
  },
  {
    id: 'a2-u10-e27',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'My Neighborhood',
    topicName: 'My Neighborhood',
    difficulty: 'medium',
    content: {
      title: 'Proximity',
      instructions: 'Elige.',
      questions: [
        {
          id: 'q1',
          question: 'Is your house ___ the station?',
          options: ['near', 'next', 'by'],
          correctAnswer: 0,
          explanation: '"Near" significa cerca.'
        }
      ]
    }
  },
  {
    id: 'a2-u10-e28',
    type: 'speaking-analysis',
    level: 'A2',
    topic: 'My Neighborhood',
    topicName: 'My Neighborhood',
    difficulty: 'medium',
    content: {
      title: 'Pronunciation: Opposite',
      instructions: 'Di "The bank is opposite the park".',
      questions: [
        {
          id: 'q1',
          text: 'The bank is opposite the park',
          correctAnswer: 'The bank is opposite the park',
          explanation: 'En "opposite", el acento está al principio.'
        }
      ]
    }
  },
  {
    id: 'a2-u10-e29',
    type: 'fill-blank',
    level: 'A2',
    topic: 'My Neighborhood',
    topicName: 'My Neighborhood',
    difficulty: 'hard',
    content: {
      title: 'Corner position',
      instructions: 'Completa la preposición.',
      questions: [
        {
          id: 'q1',
          text: 'The coffee shop is ___ the corner.',
          correctAnswer: 'on',
          explanation: 'Usamos "on the corner".'
        }
      ]
    }
  },
  {
    id: 'a2-u10-e30',
    type: 'sentence-building',
    level: 'A2',
    topic: 'My Neighborhood',
    topicName: 'My Neighborhood',
    difficulty: 'hard',
    content: {
      title: 'Detailed location',
      instructions: 'Ordena.',
      sentences: [
        {
          id: 's1',
          words: ['There', 'is', ' a', 'bakery', 'next', 'to', 'the', 'library', '.'],
          correctSentence: 'There is a bakery next to the library.',
          translation: 'Hay una panadería al lado de la biblioteca.',
          hint: 'Usa "next to".',
          explanation: 'Estructura combinada de existencia y ubicación.',
          points: 15
        }
      ]
    } as any
  },

  // --- SUB-TOPIC 4: Neighborhood Adjectives (31-40) ---
  {
    id: 'a2-u10-e31',
    type: 'flashcard',
    level: 'A2',
    topic: 'My Neighborhood',
    topicName: 'My Neighborhood',
    difficulty: 'easy',
    content: {
      items: [
        {
          front: 'Ruidoso',
          back: 'Noisy',
          example: 'The city center is very noisy.',
          pronunciation: '/ˈnɔɪzi/',
          explanation: 'Lugar con mucho ruido o sonido.'
        }
      ]
    } as any
  },
  {
    id: 'a2-u10-e32',
    type: 'matching',
    level: 'A2',
    topic: 'My Neighborhood',
    topicName: 'My Neighborhood',
    difficulty: 'easy',
    content: {
      title: 'City Adjectives',
      instructions: 'Une el adjetivo con su opuesto.',
      pairs: [
        { id: '1', left: 'Quiet', right: 'Noisy' },
        { id: '2', left: 'Safe', right: 'Dangerous' },
        { id: '3', left: 'Clean', right: 'Dirty' },
        { id: '4', left: 'Modern', right: 'Old / Ancient' }
      ],
      explanation: 'Adjetivos para describir lugares.'
    } as any
  },
  {
    id: 'a2-u10-e33',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'My Neighborhood',
    topicName: 'My Neighborhood',
    difficulty: 'medium',
    content: {
      title: 'Safe neighborhood',
      instructions: 'Elige.',
      questions: [
        {
          id: 'q1',
          question: 'I like living here because it is very ___.',
          options: ['dangerous', 'safe', 'dirty'],
          correctAnswer: 1,
          explanation: '"Safe" significa seguro.'
        }
      ]
    }
  },
  {
    id: 'a2-u10-e34',
    type: 'fill-blank',
    level: 'A2',
    topic: 'My Neighborhood',
    topicName: 'My Neighborhood',
    difficulty: 'medium',
    content: {
      title: 'Noisy traffic',
      instructions: 'Completa.',
      questions: [
        {
          id: 'q1',
          text: 'There is a lot of traffic, it is very ___ here.',
          correctAnswer: 'noisy',
          explanation: 'El tráfico genera ruido (noisy).'
        }
      ]
    }
  },
  {
    id: 'a2-u10-e35',
    type: 'sentence-building',
    level: 'A2',
    topic: 'My Neighborhood',
    topicName: 'My Neighborhood',
    difficulty: 'medium',
    content: {
      title: 'Describing the street',
      instructions: 'Ordena.',
      sentences: [
        {
          id: 's1',
          words: ['The', 'streets', 'are', 'clean', 'and', 'wide', '.'],
          correctSentence: 'The streets are clean and wide.',
          translation: 'Las calles están limpias y son anchas.',
          hint: 'Anchas es "wide".',
          explanation: 'Uso de dos adjetivos positivos.',
          points: 10
        }
      ]
    } as any
  },
  {
    id: 'a2-u10-e36',
    type: 'flashcard',
    level: 'A2',
    topic: 'My Neighborhood',
    topicName: 'My Neighborhood',
    difficulty: 'easy',
    content: {
      items: [
        {
          front: 'Abarrotado / Lleno de gente',
          back: 'Crowded',
          example: 'The square is crowded today.',
          pronunciation: '/ˈkraʊdɪd/',
          explanation: 'Con muchísima gente.'
        }
      ]
    } as any
  },
  {
    id: 'a2-u10-e37',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'My Neighborhood',
    topicName: 'My Neighborhood',
    difficulty: 'medium',
    content: {
      title: 'Modern city',
      instructions: 'Elige.',
      questions: [
        {
          id: 'q1',
          question: 'A city with new buildings is ___.',
          options: ['ancient', 'modern', 'ugly'],
          correctAnswer: 1,
          explanation: 'Los edificios nuevos definen una ciudad moderna.'
        }
      ]
    }
  },
  {
    id: 'a2-u10-e38',
    type: 'speaking-analysis',
    level: 'A2',
    topic: 'My Neighborhood',
    topicName: 'My Neighborhood',
    difficulty: 'medium',
    content: {
      title: 'Pronunciation: Dangerous',
      instructions: 'Di "Dangerous".',
      questions: [
        {
          id: 'q1',
          text: 'Dangerous',
          correctAnswer: 'Dangerous',
          explanation: 'Se pronuncia /ˈdeɪndʒərəs/.'
        }
      ]
    }
  },
  {
    id: 'a2-u10-e39',
    type: 'fill-blank',
    level: 'A2',
    topic: 'My Neighborhood',
    topicName: 'My Neighborhood',
    difficulty: 'hard',
    content: {
      title: 'Quiet area',
      instructions: 'Completa con el adjetivo.',
      questions: [
        {
          id: 'q1',
          text: 'I love my village, it is very ___ .',
          correctAnswer: 'quiet',
          explanation: '"Quiet" significa tranquilo o silencioso.'
        }
      ]
    }
  },
  {
    id: 'a2-u10-e40',
    type: 'sentence-building',
    level: 'A2',
    topic: 'My Neighborhood',
    topicName: 'My Neighborhood',
    difficulty: 'hard',
    content: {
      title: 'Negative description',
      instructions: 'Ordena.',
      sentences: [
        {
          id: 's1',
          words: ['My', 'old', 'neighborhood', 'was', 'very', 'dangerous', '.'],
          correctSentence: 'My old neighborhood was very dangerous.',
          translation: 'Mi antiguo barrio era muy peligroso.',
          hint: 'Usa "was".',
          explanation: 'Descripción de un estado pasado.',
          points: 15
        }
      ]
    } as any
  },

  // --- SUB-TOPIC 5: Review & Mix (41-50) ---
  {
    id: 'a2-u10-e41',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'My Neighborhood',
    topicName: 'My Neighborhood',
    difficulty: 'medium',
    content: {
      title: 'Review: Post office',
      instructions: 'Elige.',
      questions: [
        {
          id: 'q1',
          question: 'Where can you send a letter?',
          options: ['At the bank', 'At the post office', 'At the library'],
          correctAnswer: 1,
          explanation: 'Enviamos cartas en "post office".'
        }
      ]
    }
  },
  {
    id: 'a2-u10-e42',
    type: 'fill-blank',
    level: 'A2',
    topic: 'My Neighborhood',
    topicName: 'My Neighborhood',
    difficulty: 'medium',
    content: {
      title: 'Review: Past Cont',
      instructions: 'Completa.',
      questions: [
        {
          id: 'q1',
          text: 'I ___ walking home when I saw you.',
          correctAnswer: 'was',
          explanation: 'Auxiliar para el pasado continuo.'
        }
      ]
    }
  },
  {
    id: 'a2-u10-e43',
    type: 'sentence-building',
    level: 'A2',
    topic: 'My Neighborhood',
    topicName: 'My Neighborhood',
    difficulty: 'medium',
    content: {
      title: 'Review: Location',
      instructions: 'Ordena.',
      sentences: [
        {
          id: 's1',
          words: ['The', 'pharmacy', 'is', 'next', 'to', 'the', 'bank', '.'],
          correctSentence: 'The pharmacy is next to the bank.',
          translation: 'La farmacia está al lado del banco.',
          hint: 'Usa "next to".',
          explanation: 'Indicar ubicación básica.',
          points: 10
        }
      ]
    } as any
  },
  {
    id: 'a2-u10-e44',
    type: 'speaking-analysis',
    level: 'A2',
    topic: 'My Neighborhood',
    topicName: 'My Neighborhood',
    difficulty: 'hard',
    content: {
      title: 'Pronunciation: Crowded',
      instructions: 'Di "The bus was very crowded".',
      questions: [
        {
          id: 'q1',
          text: 'The bus was very crowded',
          correctAnswer: 'The bus was very crowded',
          explanation: '"Crowded" se pronuncia /ˈkraʊdɪd/.'
        }
      ]
    }
  },
  {
    id: 'a2-u10-e45',
    type: 'matching',
    level: 'A2',
    topic: 'My Neighborhood',
    topicName: 'My Neighborhood',
    difficulty: 'medium',
    content: {
      title: 'Places Mix',
      instructions: 'Une el lugar con lo que haces allí.',
      pairs: [
        { id: '1', left: 'Cinema', right: 'Watch a movie' },
        { id: '2', left: 'Restaurant', right: 'Eat food' },
        { id: '3', left: 'Gym', right: 'Exercise' },
        { id: '4', left: 'Museum', right: 'See art' }
      ],
      explanation: 'Actividades y lugares urbanos.'
    } as any
  },
  {
    id: 'a2-u10-e46',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'My Neighborhood',
    topicName: 'My Neighborhood',
    difficulty: 'medium',
    content: {
      title: 'Review: While',
      instructions: 'Elige.',
      questions: [
        {
          id: 'q1',
          question: 'He was cooking ___ she was working.',
          options: ['when', 'while', 'at'],
          correctAnswer: 1,
          explanation: 'Usamos "while" para dos acciones continuas simultáneas.'
        }
      ]
    }
  },
  {
    id: 'a2-u10-e47',
    type: 'fill-blank',
    level: 'A2',
    topic: 'My Neighborhood',
    topicName: 'My Neighborhood',
    difficulty: 'hard',
    content: {
      title: 'Review: Opposite',
      instructions: 'Completa.',
      questions: [
        {
          id: 'q1',
          text: 'What is the opposite of clean?',
          correctAnswer: 'dirty',
          explanation: 'Limpio vs Sucio.'
        }
      ]
    }
  },
  {
    id: 'a2-u10-e48',
    type: 'sentence-building',
    level: 'A2',
    topic: 'My Neighborhood',
    topicName: 'My Neighborhood',
    difficulty: 'hard',
    content: {
      title: 'Review: Long description',
      instructions: 'Ordena.',
      sentences: [
        {
          id: 's1',
          words: ['I', 'was', 'living', 'in', 'London', 'when', 'I', 'was', 'younger', '.'],
          correctSentence: 'I was living in London when I was younger.',
          translation: 'Yo vivía en Londres cuando era más joven.',
          hint: 'Usa "was living".',
          explanation: 'Uso del pasado continuo para periodos de tiempo en el pasado.',
          points: 10
        }
      ]
    } as any
  },
  {
    id: 'a2-u10-e49',
    type: 'speaking-analysis',
    level: 'A2',
    topic: 'My Neighborhood',
    topicName: 'My Neighborhood',
    difficulty: 'medium',
    content: {
      title: 'Pronunciation: Chemist\'s',
      instructions: 'Di "Go to the chemist\'s".',
      questions: [
        {
          id: 'q1',
          text: "Go to the chemist's",
          correctAnswer: "Go to the chemist's",
          explanation: '"Chemist\'s" es un sinónimo de farmacia en el Reino Unido.'
        }
      ]
    }
  },
  {
    id: 'a2-u10-e50',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'My Neighborhood',
    topicName: 'My Neighborhood',
    difficulty: 'easy',
    content: {
      title: 'Final neighborhood check',
      instructions: '¿Dónde está el alcalde?',
      questions: [
        {
          id: 'q1',
          question: 'Where does the Mayor work?',
          options: ['At the Town Hall', 'At the park', 'At the school'],
          correctAnswer: 0,
          explanation: 'El alcalde trabaja en el ayuntamiento (Town Hall).'
        }
      ]
    }
  }
];
