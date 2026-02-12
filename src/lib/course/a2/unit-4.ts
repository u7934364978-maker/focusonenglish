import { Exercise } from '@/lib/exercise-generator';

export const UNIT_4_EXERCISES: Exercise[] = [
  // --- SUB-TOPIC 1: Rooms & Types of Houses (1-10) ---
  {
    id: 'a2-u4-e1',
    type: 'flashcard',
    level: 'A2',
    topic: 'Home & Furniture',
    topicName: 'Home & Furniture',
    difficulty: 'easy',
    content: {
      items: [
        {
          front: 'Pasillo',
          back: 'Hall / Hallway',
          example: 'Leave your umbrella in the hall.',
          pronunciation: '/hɔːl/',
          explanation: 'El área de entrada o conector entre habitaciones.'
        }
      ]
    } as any
  },
  {
    id: 'a2-u4-e2',
    type: 'matching',
    level: 'A2',
    topic: 'Home & Furniture',
    topicName: 'Home & Furniture',
    difficulty: 'easy',
    content: {
      title: 'Rooms in the house',
      instructions: 'Une la habitación con su traducción.',
      pairs: [
        { id: '1', left: 'Kitchen', right: 'Cocina' },
        { id: '2', left: 'Living room', right: 'Salón / Cuarto de estar' },
        { id: '3', left: 'Dining room', right: 'Comedor' },
        { id: '4', left: 'Bedroom', right: 'Dormitorio' },
        { id: '5', left: 'Bathroom', right: 'Baño' }
      ],
      explanation: 'Habitaciones principales de una casa.'
    } as any
  },
  {
    id: 'a2-u4-e3',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Home & Furniture',
    topicName: 'Home & Furniture',
    difficulty: 'easy',
    content: {
      title: 'Where do you...?',
      instructions: 'Elige la habitación correcta.',
      questions: [
        {
          id: 'q1',
          question: 'Where do you usually cook?',
          options: ['In the bathroom', 'In the kitchen', 'In the bedroom'],
          correctAnswer: 1,
          explanation: 'Cocinamos en la cocina (kitchen).'
        }
      ]
    }
  },
  {
    id: 'a2-u4-e4',
    type: 'fill-blank',
    level: 'A2',
    topic: 'Home & Furniture',
    topicName: 'Home & Furniture',
    difficulty: 'easy',
    content: {
      title: 'House types',
      instructions: 'Completa con la palabra adecuada.',
      questions: [
        {
          id: 'q1',
          text: 'I live in a small ___ on the third floor.',
          correctAnswer: 'flat',
          explanation: '"Flat" (o "apartment") es una vivienda en un edificio.'
        }
      ]
    }
  },
  {
    id: 'a2-u4-e5',
    type: 'sentence-building',
    level: 'A2',
    topic: 'Home & Furniture',
    topicName: 'Home & Furniture',
    difficulty: 'medium',
    content: {
      title: 'Describing my home',
      instructions: 'Ordena las palabras.',
      sentences: [
        {
          id: 's1',
          words: ['My', 'house', 'has', 'two', 'bedrooms', '.'],
          correctSentence: 'My house has two bedrooms.',
          translation: 'Mi casa tiene dos dormitorios.',
          hint: 'Usa el verbo "has".',
          explanation: 'Estructura básica de descripción de propiedad.',
          points: 10
        }
      ]
    } as any
  },
  {
    id: 'a2-u4-e6',
    type: 'flashcard',
    level: 'A2',
    topic: 'Home & Furniture',
    topicName: 'Home & Furniture',
    difficulty: 'easy',
    content: {
      items: [
        {
          front: 'Sótano',
          back: 'Basement',
          example: 'We store old things in the basement.',
          pronunciation: '/ˈbeɪsmənt/',
          explanation: 'La parte de la casa que está bajo el nivel del suelo.'
        }
      ]
    } as any
  },
  {
    id: 'a2-u4-e7',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Home & Furniture',
    topicName: 'Home & Furniture',
    difficulty: 'medium',
    content: {
      title: 'Garden vs Yard',
      instructions: 'Elige la opción correcta.',
      questions: [
        {
          id: 'q1',
          question: 'The area outside with grass and flowers is the ___.',
          options: ['roof', 'garden', 'wall'],
          correctAnswer: 1,
          explanation: 'El jardín es el "garden".'
        }
      ]
    }
  },
  {
    id: 'a2-u4-e8',
    type: 'speaking-analysis',
    level: 'A2',
    topic: 'Home & Furniture',
    topicName: 'Home & Furniture',
    difficulty: 'easy',
    content: {
      title: 'Pronunciation: Kitchen',
      instructions: 'Di "Kitchen".',
      questions: [
        {
          id: 'q1',
          text: 'Kitchen',
          correctAnswer: 'Kitchen',
          explanation: 'No confundir con "Chicken" (pollo).'
        }
      ]
    }
  },
  {
    id: 'a2-u4-e9',
    type: 'fill-blank',
    level: 'A2',
    topic: 'Home & Furniture',
    topicName: 'Home & Furniture',
    difficulty: 'medium',
    content: {
      title: 'Attic',
      instructions: 'Completa con la palabra.',
      questions: [
        {
          id: 'q1',
          text: 'The room at the very top of the house is the ___.',
          correctAnswer: 'attic',
          explanation: 'El ático o desván es el "attic".'
        }
      ]
    }
  },
  {
    id: 'a2-u4-e10',
    type: 'sentence-building',
    level: 'A2',
    topic: 'Home & Furniture',
    topicName: 'Home & Furniture',
    difficulty: 'medium',
    content: {
      title: 'Location in house',
      instructions: 'Ordena las palabras.',
      sentences: [
        {
          id: 's1',
          words: ['The', 'living', 'room', 'is', 'downstairs', '.'],
          correctSentence: 'The living room is downstairs.',
          translation: 'El salón está abajo.',
          hint: 'Downstairs significa en la planta baja.',
          explanation: 'Usamos "downstairs" y "upstairs" para niveles de la casa.',
          points: 10
        }
      ]
    } as any
  },

  // --- SUB-TOPIC 2: Furniture & Objects (11-20) ---
  {
    id: 'a2-u4-e11',
    type: 'flashcard',
    level: 'A2',
    topic: 'Home & Furniture',
    topicName: 'Home & Furniture',
    difficulty: 'easy',
    content: {
      items: [
        {
          front: 'Estantería',
          back: 'Shelf / Bookshelf',
          example: 'Put the books on the shelf.',
          pronunciation: '/ʃelf/',
          explanation: 'Mueble para colocar objetos o libros.'
        }
      ]
    } as any
  },
  {
    id: 'a2-u4-e12',
    type: 'matching',
    level: 'A2',
    topic: 'Home & Furniture',
    topicName: 'Home & Furniture',
    difficulty: 'easy',
    content: {
      title: 'Basic Furniture',
      instructions: 'Une el mueble con su traducción.',
      pairs: [
        { id: '1', left: 'Armchair', right: 'Sillón' },
        { id: '2', left: 'Cupboard', right: 'Armario de cocina' },
        { id: '3', left: 'Wardrobe', right: 'Armario (para ropa)' },
        { id: '4', left: 'Mirror', right: 'Espejo' },
        { id: '5', left: 'Curtains', right: 'Cortinas' }
      ],
      explanation: 'Vocabulario esencial de muebles.'
    } as any
  },
  {
    id: 'a2-u4-e13',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Home & Furniture',
    topicName: 'Home & Furniture',
    difficulty: 'easy',
    content: {
      title: 'Furniture Use',
      instructions: 'Elige el objeto correcto.',
      questions: [
        {
          id: 'q1',
          question: 'Where do you keep your clothes?',
          options: ['In the cupboard', 'In the wardrobe', 'In the fridge'],
          correctAnswer: 1,
          explanation: 'La ropa se guarda en el "wardrobe".'
        }
      ]
    }
  },
  {
    id: 'a2-u4-e14',
    type: 'fill-blank',
    level: 'A2',
    topic: 'Home & Furniture',
    topicName: 'Home & Furniture',
    difficulty: 'medium',
    content: {
      title: 'Kitchen appliances',
      instructions: 'Completa con el nombre del electrodoméstico.',
      questions: [
        {
          id: 'q1',
          text: 'Keep the milk in the ___.',
          correctAnswer: 'fridge',
          explanation: 'La leche se guarda en la nevera (fridge).'
        }
      ]
    }
  },
  {
    id: 'a2-u4-e15',
    type: 'sentence-building',
    level: 'A2',
    topic: 'Home & Furniture',
    topicName: 'Home & Furniture',
    difficulty: 'medium',
    content: {
      title: 'Furniture position',
      instructions: 'Ordena.',
      sentences: [
        {
          id: 's1',
          words: ['There', 'is', 'a', 'mirror', 'in', 'the', 'bathroom', '.'],
          correctSentence: 'There is a mirror in the bathroom.',
          translation: 'Hay un espejo en el baño.',
          hint: 'Usa "There is" para indicar existencia.',
          explanation: 'Estructura estándar para describir el contenido de una habitación.',
          points: 10
        }
      ]
    } as any
  },
  {
    id: 'a2-u4-e16',
    type: 'flashcard',
    level: 'A2',
    topic: 'Home & Furniture',
    topicName: 'Home & Furniture',
    difficulty: 'easy',
    content: {
      items: [
        {
          front: 'Alfombra',
          back: 'Carpet / Rug',
          example: 'We have a blue carpet in the bedroom.',
          pronunciation: '/ˈkɑːpɪt/',
          explanation: '"Carpet" suele cubrir todo el suelo, "Rug" es una alfombra pequeña.'
        }
      ]
    } as any
  },
  {
    id: 'a2-u4-e17',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Home & Furniture',
    topicName: 'Home & Furniture',
    difficulty: 'medium',
    content: {
      title: 'In the living room',
      instructions: '¿Qué objeto NO suele estar en el salón?',
      questions: [
        {
          id: 'q1',
          question: 'Which one is NOT in the living room?',
          options: ['Sofa', 'Armchair', 'Shower'],
          correctAnswer: 2,
          explanation: 'La ducha (shower) está en el baño.'
        }
      ]
    }
  },
  {
    id: 'a2-u4-e18',
    type: 'speaking-analysis',
    level: 'A2',
    topic: 'Home & Furniture',
    topicName: 'Home & Furniture',
    difficulty: 'medium',
    content: {
      title: 'Pronunciation: Wardrobe',
      instructions: 'Di "Wardrobe".',
      questions: [
        {
          id: 'q1',
          text: 'Wardrobe',
          correctAnswer: 'Wardrobe',
          explanation: 'Se pronuncia /ˈwɔːdrəʊb/.'
        }
      ]
    }
  },
  {
    id: 'a2-u4-e19',
    type: 'fill-blank',
    level: 'A2',
    topic: 'Home & Furniture',
    topicName: 'Home & Furniture',
    difficulty: 'medium',
    content: {
      title: 'At the table',
      instructions: 'Completa con el mueble.',
      questions: [
        {
          id: 'q1',
          text: 'Please sit down on that ___.',
          correctAnswer: 'chair',
          explanation: 'Nos sentamos en la silla (chair).'
        }
      ]
    }
  },
  {
    id: 'a2-u4-e20',
    type: 'sentence-building',
    level: 'A2',
    topic: 'Home & Furniture',
    topicName: 'Home & Furniture',
    difficulty: 'hard',
    content: {
      title: 'New furniture',
      instructions: 'Ordena.',
      sentences: [
        {
          id: 's1',
          words: ['We', 'need', 'to', 'buy', 'a', 'new', 'sofa', '.'],
          correctSentence: 'We need to buy a new sofa.',
          translation: 'Necesitamos comprar un sofá nuevo.',
          hint: 'Empieza con "We".',
          explanation: 'Uso del infinitivo "to buy" tras el verbo "need".',
          points: 15
        }
      ]
    } as any
  },

  // --- SUB-TOPIC 3: There is / There are (21-30) ---
  {
    id: 'a2-u4-e21',
    type: 'flashcard',
    level: 'A2',
    topic: 'Home & Furniture',
    topicName: 'Home & Furniture',
    difficulty: 'easy',
    content: {
      items: [
        {
          front: 'Hay (singular)',
          back: 'There is',
          example: 'There is a bed in the room.',
          pronunciation: '/ðeər ɪz/',
          explanation: 'Usado para un solo objeto.'
        }
      ]
    } as any
  },
  {
    id: 'a2-u4-e22',
    type: 'flashcard',
    level: 'A2',
    topic: 'Home & Furniture',
    topicName: 'Home & Furniture',
    difficulty: 'easy',
    content: {
      items: [
        {
          front: 'Hay (plural)',
          back: 'There are',
          example: 'There are two chairs in the kitchen.',
          pronunciation: '/ðeər ɑː/',
          explanation: 'Usado para dos o más objetos.'
        }
      ]
    } as any
  },
  {
    id: 'a2-u4-e23',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Home & Furniture',
    topicName: 'Home & Furniture',
    difficulty: 'easy',
    content: {
      title: 'There is vs There are',
      instructions: 'Elige la forma correcta.',
      questions: [
        {
          id: 'q1',
          question: '___ some books on the table.',
          options: ['There is', 'There are', 'There'],
          correctAnswer: 1,
          explanation: 'Como "books" es plural, usamos "There are".'
        }
      ]
    }
  },
  {
    id: 'a2-u4-e24',
    type: 'fill-blank',
    level: 'A2',
    topic: 'Home & Furniture',
    topicName: 'Home & Furniture',
    difficulty: 'medium',
    content: {
      title: 'Negative existence',
      instructions: 'Completa con la forma negativa (isn\'t/aren\'t).',
      questions: [
        {
          id: 'q1',
          text: 'There ___ any windows in the basement.',
          correctAnswer: "aren't",
          explanation: '"Windows" es plural, por lo que la negación es "aren\'t" (are not).'
        }
      ]
    }
  },
  {
    id: 'a2-u4-e25',
    type: 'sentence-building',
    level: 'A2',
    topic: 'Home & Furniture',
    topicName: 'Home & Furniture',
    difficulty: 'medium',
    content: {
      title: 'Asking about existence',
      instructions: 'Ordena para formar una pregunta.',
      sentences: [
        {
          id: 's1',
          words: ['Is', 'there', 'a', 'garage', 'in', 'your', 'house', '?'],
          correctSentence: 'Is there a garage in your house?',
          translation: '¿Hay un garaje en tu casa?',
          hint: 'Empieza con "Is there".',
          explanation: 'Invertimos el orden para hacer preguntas.',
          points: 10
        }
      ]
    } as any
  },
  {
    id: 'a2-u4-e26',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Home & Furniture',
    topicName: 'Home & Furniture',
    difficulty: 'medium',
    content: {
      title: 'Any in questions',
      instructions: 'Elige la opción correcta.',
      questions: [
        {
          id: 'q1',
          question: 'Are there ___ paintings on the wall?',
          options: ['a', 'some', 'any'],
          correctAnswer: 2,
          explanation: 'Usamos "any" para preguntas y negaciones en plural.'
        }
      ]
    }
  },
  {
    id: 'a2-u4-e27',
    type: 'speaking-analysis',
    level: 'A2',
    topic: 'Home & Furniture',
    topicName: 'Home & Furniture',
    difficulty: 'easy',
    content: {
      title: 'Pronunciation: There are',
      instructions: 'Di "There are some flowers in the garden".',
      questions: [
        {
          id: 'q1',
          text: 'There are some flowers in the garden',
          correctAnswer: 'There are some flowers in the garden',
          explanation: 'Une "There" y "are" al hablar.'
        }
      ]
    }
  },
  {
    id: 'a2-u4-e28',
    type: 'fill-blank',
    level: 'A2',
    topic: 'Home & Furniture',
    topicName: 'Home & Furniture',
    difficulty: 'hard',
    content: {
      title: 'Mixed Existence',
      instructions: 'Completa.',
      questions: [
        {
          id: 'q1',
          text: 'There ___ only one bathroom in my flat.',
          correctAnswer: 'is',
          explanation: '"Only one" indica singular.'
        }
      ]
    }
  },
  {
    id: 'a2-u4-e29',
    type: 'matching',
    level: 'A2',
    topic: 'Home & Furniture',
    topicName: 'Home & Furniture',
    difficulty: 'medium',
    content: {
      title: 'Short answers',
      instructions: 'Une la pregunta con la respuesta corta.',
      pairs: [
        { id: '1', left: 'Is there a TV?', right: 'Yes, there is.' },
        { id: '2', left: 'Are there any chairs?', right: 'No, there aren\'t.' },
        { id: '3', left: 'Is there a cat?', right: 'No, there isn\'t.' },
        { id: '4', left: 'Are there three beds?', right: 'Yes, there are.' }
      ],
      explanation: 'Respuestas cortas estándar para There is/are.'
    } as any
  },
  {
    id: 'a2-u4-e30',
    type: 'sentence-building',
    level: 'A2',
    topic: 'Home & Furniture',
    topicName: 'Home & Furniture',
    difficulty: 'hard',
    content: {
      title: 'Plural existence',
      instructions: 'Ordena.',
      sentences: [
        {
          id: 's1',
          words: ['There', 'are', 'not', 'any', 'books', 'on', 'the', 'shelf', '.'],
          correctSentence: 'There are not any books on the shelf.',
          translation: 'No hay ningún libro en la estantería.',
          hint: 'Usa "any" para negación plural.',
          explanation: 'Estructura negativa: There are + not + any + sustantivo plural.',
          points: 15
        }
      ]
    } as any
  },

  // --- SUB-TOPIC 4: Prepositions of Place (31-40) ---
  {
    id: 'a2-u4-e31',
    type: 'flashcard',
    level: 'A2',
    topic: 'Home & Furniture',
    topicName: 'Home & Furniture',
    difficulty: 'easy',
    content: {
      items: [
        {
          front: 'Encima de / Sobre',
          back: 'On',
          example: 'The keys are on the table.',
          pronunciation: '/ɒn/',
          explanation: 'Indica contacto con una superficie.'
        }
      ]
    } as any
  },
  {
    id: 'a2-u4-e32',
    type: 'matching',
    level: 'A2',
    topic: 'Home & Furniture',
    topicName: 'Home & Furniture',
    difficulty: 'easy',
    content: {
      title: 'Location prepositions',
      instructions: 'Une la preposición con su significado.',
      pairs: [
        { id: '1', left: 'In', right: 'Dentro de' },
        { id: '2', left: 'Under', right: 'Debajo de' },
        { id: '3', left: 'Next to', right: 'Al lado de' },
        { id: '4', left: 'Between', right: 'Entre (dos cosas)' },
        { id: '5', left: 'Opposite', right: 'Enfrente de' }
      ],
      explanation: 'Preposiciones básicas de lugar.'
    } as any
  },
  {
    id: 'a2-u4-e33',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Home & Furniture',
    topicName: 'Home & Furniture',
    difficulty: 'medium',
    content: {
      title: 'Where is it?',
      instructions: 'Elige la preposición correcta.',
      questions: [
        {
          id: 'q1',
          question: 'The lamp is ___ the bed and the desk.',
          options: ['between', 'under', 'in'],
          correctAnswer: 0,
          explanation: 'Usamos "between" cuando algo está en medio de dos cosas.'
        }
      ]
    }
  },
  {
    id: 'a2-u4-e34',
    type: 'fill-blank',
    level: 'A2',
    topic: 'Home & Furniture',
    topicName: 'Home & Furniture',
    difficulty: 'medium',
    content: {
      title: 'In front of vs Behind',
      instructions: 'Completa con la preposición opuesta a "behind".',
      questions: [
        {
          id: 'q1',
          text: 'The car is ___ the house.',
          correctAnswer: 'in front of',
          explanation: '"In front of" significa delante de.'
        }
      ]
    }
  },
  {
    id: 'a2-u4-e35',
    type: 'sentence-building',
    level: 'A2',
    topic: 'Home & Furniture',
    topicName: 'Home & Furniture',
    difficulty: 'medium',
    content: {
      title: 'Object location',
      instructions: 'Ordena.',
      sentences: [
        {
          id: 's1',
          words: ['The', 'cat', 'is', 'under', 'the', 'sofa', '.'],
          correctSentence: 'The cat is under the sofa.',
          translation: 'El gato está debajo del sofá.',
          hint: 'Empieza con "The cat".',
          explanation: 'Estructura: El objeto + is + preposición + lugar.',
          points: 10
        }
      ]
    } as any
  },
  {
    id: 'a2-u4-e36',
    type: 'flashcard',
    level: 'A2',
    topic: 'Home & Furniture',
    topicName: 'Home & Furniture',
    difficulty: 'easy',
    content: {
      items: [
        {
          front: 'Cerca de',
          back: 'Near',
          example: 'My house is near the park.',
          pronunciation: '/nɪə/',
          explanation: 'Indica proximidad.'
        }
      ]
    } as any
  },
  {
    id: 'a2-u4-e37',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Home & Furniture',
    topicName: 'Home & Furniture',
    difficulty: 'medium',
    content: {
      title: 'Above vs On',
      instructions: 'Elige la correcta.',
      questions: [
        {
          id: 'q1',
          question: 'The picture is ___ the fireplace (no contact).',
          options: ['on', 'above', 'in'],
          correctAnswer: 1,
          explanation: 'Usamos "above" cuando algo está por encima sin contacto.'
        }
      ]
    }
  },
  {
    id: 'a2-u4-e38',
    type: 'speaking-analysis',
    level: 'A2',
    topic: 'Home & Furniture',
    topicName: 'Home & Furniture',
    difficulty: 'medium',
    content: {
      title: 'Pronunciation: Opposite',
      instructions: 'Di "Opposite".',
      questions: [
        {
          id: 'q1',
          text: 'Opposite',
          correctAnswer: 'Opposite',
          explanation: 'Se pronuncia /ˈɒpəzɪt/.'
        }
      ]
    }
  },
  {
    id: 'a2-u4-e39',
    type: 'fill-blank',
    level: 'A2',
    topic: 'Home & Furniture',
    topicName: 'Home & Furniture',
    difficulty: 'hard',
    content: {
      title: 'Next to synonym',
      instructions: 'Completa con un sinónimo de "next to" que empieza por b.',
      questions: [
        {
          id: 'q1',
          text: 'The chair is ___ the window.',
          correctAnswer: 'by',
          explanation: '"By" puede usarse como sinónimo de "next to" o "beside".'
        }
      ]
    }
  },
  {
    id: 'a2-u4-e40',
    type: 'sentence-building',
    level: 'A2',
    topic: 'Home & Furniture',
    topicName: 'Home & Furniture',
    difficulty: 'hard',
    content: {
      title: 'Complex location',
      instructions: 'Ordena.',
      sentences: [
        {
          id: 's1',
          words: ['The', 'remote', 'control', 'is', 'next', 'to', 'the', 'TV', '.'],
          correctSentence: 'The remote control is next to the TV.',
          translation: 'El mando a distancia está al lado de la tele.',
          hint: 'Mando es "remote control".',
          explanation: 'Uso de la preposición compuesta "next to".',
          points: 15
        }
      ]
    } as any
  },

  // --- SUB-TOPIC 5: Review & Mix (41-50) ---
  {
    id: 'a2-u4-e41',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Home & Furniture',
    topicName: 'Home & Furniture',
    difficulty: 'medium',
    content: {
      title: 'Review: Room functions',
      instructions: 'Elige.',
      questions: [
        {
          id: 'q1',
          question: 'Where do people sleep?',
          options: ['In the dining room', 'In the bedroom', 'In the hall'],
          correctAnswer: 1,
          explanation: 'Dormimos en el dormitorio (bedroom).'
        }
      ]
    }
  },
  {
    id: 'a2-u4-e42',
    type: 'fill-blank',
    level: 'A2',
    topic: 'Home & Furniture',
    topicName: 'Home & Furniture',
    difficulty: 'medium',
    content: {
      title: 'Review: Appliances',
      instructions: 'Completa.',
      questions: [
        {
          id: 'q1',
          text: 'We cook the food in the ___ or the microwave.',
          correctAnswer: 'oven',
          explanation: 'Cocinamos en el horno (oven).'
        }
      ]
    }
  },
  {
    id: 'a2-u4-e43',
    type: 'sentence-building',
    level: 'A2',
    topic: 'Home & Furniture',
    topicName: 'Home & Furniture',
    difficulty: 'medium',
    content: {
      title: 'Review: There are plural',
      instructions: 'Ordena.',
      sentences: [
        {
          id: 's1',
          words: ['There', 'are', 'three', 'posters', 'on', 'the', 'wall', '.'],
          correctSentence: 'There are three posters on the wall.',
          translation: 'Hay tres pósteres en la pared.',
          hint: 'Pared es "wall".',
          explanation: 'Estructura afirmativa plural.',
          points: 10
        }
      ]
    } as any
  },
  {
    id: 'a2-u4-e44',
    type: 'speaking-analysis',
    level: 'A2',
    topic: 'Home & Furniture',
    topicName: 'Home & Furniture',
    difficulty: 'hard',
    content: {
      title: 'Pronunciation: Furniture mix',
      instructions: 'Di "There is an armchair in the corner".',
      questions: [
        {
          id: 'q1',
          text: 'There is an armchair in the corner',
          correctAnswer: 'There is an armchair in the corner',
          explanation: 'Une "is" y "an" al hablar.'
        }
      ]
    }
  },
  {
    id: 'a2-u4-e45',
    type: 'matching',
    level: 'A2',
    topic: 'Home & Furniture',
    topicName: 'Home & Furniture',
    difficulty: 'medium',
    content: {
      title: 'Home Objects Mix',
      instructions: 'Une el objeto con su lugar habitual.',
      pairs: [
        { id: '1', left: 'Pillow', right: 'Bed' },
        { id: '2', left: 'Towel', right: 'Bathroom' },
        { id: '3', left: 'Fork', right: 'Dining room' },
        { id: '4', left: 'Cushion', right: 'Sofa' }
      ],
      explanation: 'Objetos comunes y su ubicación.'
    } as any
  },
  {
    id: 'a2-u4-e46',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Home & Furniture',
    topicName: 'Home & Furniture',
    difficulty: 'medium',
    content: {
      title: 'Review: Negative There is',
      instructions: 'Elige.',
      questions: [
        {
          id: 'q1',
          question: '___ a garden in my new flat.',
          options: ["There isn't", "There aren't", "There not"],
          correctAnswer: 0,
          explanation: 'Como "garden" es singular, usamos "There isn\'t".'
        }
      ]
    }
  },
  {
    id: 'a2-u4-e47',
    type: 'fill-blank',
    level: 'A2',
    topic: 'Home & Furniture',
    topicName: 'Home & Furniture',
    difficulty: 'hard',
    content: {
      title: 'Review: Prepositions',
      instructions: 'Completa.',
      questions: [
        {
          id: 'q1',
          text: 'The carpet is ___ the floor.',
          correctAnswer: 'on',
          explanation: 'La alfombra está sobre el suelo.'
        }
      ]
    }
  },
  {
    id: 'a2-u4-e48',
    type: 'sentence-building',
    level: 'A2',
    topic: 'Home & Furniture',
    topicName: 'Home & Furniture',
    difficulty: 'hard',
    content: {
      title: 'Review: Question structure',
      instructions: 'Ordena.',
      sentences: [
        {
          id: 's1',
          words: ['Are', 'there', 'any', 'chairs', 'in', 'the', 'kitchen', '?'],
          correctSentence: 'Are there any chairs in the kitchen?',
          translation: '¿Hay algunas sillas en la cocina?',
          hint: 'Pregunta plural.',
          explanation: 'Orden correcto para preguntas plurales con existence.',
          points: 10
        }
      ]
    } as any
  },
  {
    id: 'a2-u4-e49',
    type: 'speaking-analysis',
    level: 'A2',
    topic: 'Home & Furniture',
    topicName: 'Home & Furniture',
    difficulty: 'medium',
    content: {
      title: 'Pronunciation: Dining room',
      instructions: 'Di "We eat in the dining room".',
      questions: [
        {
          id: 'q1',
          text: 'We eat in the dining room',
          correctAnswer: 'We eat in the dining room',
          explanation: 'Asegúrate de pronunciar la "ng" de "dining".'
        }
      ]
    }
  },
  {
    id: 'a2-u4-e50',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Home & Furniture',
    topicName: 'Home & Furniture',
    difficulty: 'easy',
    content: {
      title: 'Final home check',
      instructions: 'Elige el objeto para mirarse.',
      questions: [
        {
          id: 'q1',
          question: 'What do you use to see yourself?',
          options: ['A mirror', 'A window', 'A table'],
          correctAnswer: 0,
          explanation: 'Usamos el espejo (mirror) para vernos.'
        }
      ]
    }
  }
];
