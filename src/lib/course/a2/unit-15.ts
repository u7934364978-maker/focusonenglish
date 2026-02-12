import { Exercise } from '@/lib/exercise-generator';

export const UNIT_15_EXERCISES: Exercise[] = [
  // --- SUB-TOPIC 1: Weather & Nature (1-10) ---
  {
    id: 'a2-u15-e1',
    type: 'flashcard',
    level: 'A2',
    topic: 'Nature & Environment',
    topicName: 'Nature & Environment',
    difficulty: 'easy',
    content: {
      items: [
        {
          front: 'Medio ambiente',
          back: 'Environment',
          example: 'We must protect the environment.',
          pronunciation: '/ɪnˈvaɪrənmənt/',
          explanation: 'El mundo natural que nos rodea.'
        }
      ]
    } as any
  },
  {
    id: 'a2-u15-e2',
    type: 'matching',
    level: 'A2',
    topic: 'Nature & Environment',
    topicName: 'Nature & Environment',
    difficulty: 'easy',
    content: {
      title: 'Weather conditions',
      instructions: 'Une el clima con su traducción.',
      pairs: [
        { id: '1', left: 'Foggy', right: 'Con niebla' },
        { id: '2', left: 'Stormy', right: 'Tormentoso' },
        { id: '3', left: 'Freezing', right: 'Helado' },
        { id: '4', left: 'Humid', right: 'Húmedo' },
        { id: '5', left: 'Chilly', right: 'Fresco / Frío' }
      ],
      explanation: 'Vocabulario avanzado del clima.'
    } as any
  },
  {
    id: 'a2-u15-e3',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Nature & Environment',
    topicName: 'Nature & Environment',
    difficulty: 'easy',
    content: {
      title: 'The Sky',
      instructions: 'Elige.',
      questions: [
        {
          id: 'q1',
          question: 'The sun rises in the ___ .',
          options: ['east', 'west', 'south'],
          correctAnswer: 0,
          explanation: 'El sol sale por el este (east).'
        }
      ]
    }
  },
  {
    id: 'a2-u15-e4',
    type: 'fill-blank',
    level: 'A2',
    topic: 'Nature & Environment',
    topicName: 'Nature & Environment',
    difficulty: 'easy',
    content: {
      title: 'Natural wonders',
      instructions: 'Completa.',
      questions: [
        {
          id: 'q1',
          text: 'The Amazon is a very large ___ in South America.',
          correctAnswer: 'rainforest',
          explanation: '"Rainforest" significa selva tropical.'
        }
      ]
    }
  },
  {
    id: 'a2-u15-e5',
    type: 'sentence-building',
    level: 'A2',
    topic: 'Nature & Environment',
    topicName: 'Nature & Environment',
    difficulty: 'medium',
    content: {
      title: 'The weather today',
      instructions: 'Ordena.',
      sentences: [
        {
          id: 's1',
          words: ['It', 'is', 'getting', 'very', 'cold', 'tonight', '.'],
          correctSentence: 'It is getting very cold tonight.',
          translation: 'Se está poniendo muy frío esta noche.',
          hint: 'Usa "getting".',
          explanation: 'Uso de "get + adjetivo" para cambios de estado.',
          points: 10
        }
      ]
    } as any
  },
  {
    id: 'a2-u15-e6',
    type: 'flashcard',
    level: 'A2',
    topic: 'Nature & Environment',
    topicName: 'Nature & Environment',
    difficulty: 'easy',
    content: {
      items: [
        {
          front: 'Paisaje',
          back: 'Scenery / Landscape',
          example: 'The scenery in the mountains is beautiful.',
          pronunciation: '/ˈsiːnəri/',
          explanation: 'La vista natural de un lugar.'
        }
      ]
    } as any
  },
  {
    id: 'a2-u15-e7',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Nature & Environment',
    topicName: 'Nature & Environment',
    difficulty: 'medium',
    content: {
      title: 'Water features',
      instructions: 'Elige.',
      questions: [
        {
          id: 'q1',
          question: 'A large area of water surrounded by land is a ___ .',
          options: ['lake', 'river', 'sea'],
          correctAnswer: 0,
          explanation: 'Un lago (lake) está rodeado de tierra.'
        }
      ]
    }
  },
  {
    id: 'a2-u15-e8',
    type: 'speaking-analysis',
    level: 'A2',
    topic: 'Nature & Environment',
    topicName: 'Nature & Environment',
    difficulty: 'easy',
    content: {
      title: 'Pronunciation: Environment',
      instructions: 'Di "Protect the environment".',
      questions: [
        {
          id: 'q1',
          text: 'Protect the environment',
          correctAnswer: 'Protect the environment',
          explanation: 'Se pronuncia /ɪnˈvaɪrənmənt/, la "n" después de la "i" es suave.'
        }
      ]
    }
  },
  {
    id: 'a2-u15-e9',
    type: 'fill-blank',
    level: 'A2',
    topic: 'Nature & Environment',
    topicName: 'Nature & Environment',
    difficulty: 'medium',
    content: {
      title: 'In the mountains',
      instructions: 'Completa.',
      questions: [
        {
          id: 'q1',
          text: 'There is still ___ on top of the mountain.',
          correctAnswer: 'snow',
          explanation: 'Nieve (snow) en la cima.'
        }
      ]
    }
  },
  {
    id: 'a2-u15-e10',
    type: 'sentence-building',
    level: 'A2',
    topic: 'Nature & Environment',
    topicName: 'Nature & Environment',
    difficulty: 'medium',
    content: {
      title: 'Thunderstorm',
      instructions: 'Ordena.',
      sentences: [
        {
          id: 's1',
          words: ['I', 'heard', 'thunder', 'and', 'saw', 'lightning', '.'],
          correctSentence: 'I heard thunder and saw lightning.',
          translation: 'Oí truenos y vi relámpagos.',
          hint: 'Usa el pasado.',
          explanation: 'Thunder (trueno) se oye, lightning (relámpago) se ve.',
          points: 10
        }
      ]
    } as any
  },

  // --- SUB-TOPIC 2: Be going to - Intentions & Predictions (11-20) ---
  {
    id: 'a2-u15-e11',
    type: 'flashcard',
    level: 'A2',
    topic: 'Nature & Environment',
    topicName: 'Nature & Environment',
    difficulty: 'easy',
    content: {
      items: [
        {
          front: 'Ir a... (Planes)',
          back: 'Be going to',
          example: 'I am going to plant a tree.',
          pronunciation: '/n/a/',
          explanation: 'Usamos "be going to" para planes futuros e intenciones.'
        }
      ]
    } as any
  },
  {
    id: 'a2-u15-e12',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Nature & Environment',
    topicName: 'Nature & Environment',
    difficulty: 'medium',
    content: {
      title: 'Evidence-based prediction',
      instructions: 'Elige.',
      questions: [
        {
          id: 'q1',
          question: 'Look at those black clouds! It ___ rain.',
          options: ['is going to', 'goes to', 'going to'],
          correctAnswer: 0,
          explanation: 'Predicción basada en evidencia visual (nubes negras).'
        }
      ]
    }
  },
  {
    id: 'a2-u15-e13',
    type: 'fill-blank',
    level: 'A2',
    topic: 'Nature & Environment',
    topicName: 'Nature & Environment',
    difficulty: 'medium',
    content: {
      title: 'My intention',
      instructions: 'Completa con "be going to".',
      questions: [
        {
          id: 'q1',
          text: 'Next year, I ___ (buy) an electric car.',
          correctAnswer: 'am going to buy',
          explanation: 'Es una intención o plan personal.'
        }
      ]
    }
  },
  {
    id: 'a2-u15-e14',
    type: 'sentence-building',
    level: 'A2',
    topic: 'Nature & Environment',
    topicName: 'Nature & Environment',
    difficulty: 'medium',
    content: {
      title: 'Cleaning up',
      instructions: 'Ordena.',
      sentences: [
        {
          id: 's1',
          words: ['They', 'are', 'going', 'to', 'clean', 'the', 'beach', '.'],
          correctSentence: 'They are going to clean the beach.',
          translation: 'Ellos van a limpiar la playa.',
          hint: 'Usa "going to".',
          explanation: 'Estructura de intención futura.',
          points: 10
        }
      ]
    } as any
  },
  {
    id: 'a2-u15-e15',
    type: 'matching',
    level: 'A2',
    topic: 'Nature & Environment',
    topicName: 'Nature & Environment',
    difficulty: 'medium',
    content: {
      title: 'Be going to: Forms',
      instructions: 'Une el sujeto con la forma correcta.',
      pairs: [
        { id: '1', left: 'I', right: 'am going to' },
        { id: '2', left: 'He / She / It', right: 'is going to' },
        { id: '3', left: 'We / You / They', right: 'are going to' }
      ],
      explanation: 'Conjugación del verbo "to be" en la estructura.'
    } as any
  },
  {
    id: 'a2-u15-e16',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Nature & Environment',
    topicName: 'Nature & Environment',
    difficulty: 'medium',
    content: {
      title: 'Questions with going to',
      instructions: 'Elige la pregunta correcta.',
      questions: [
        {
          id: 'q1',
          question: '___ you going to recycle these bottles?',
          options: ['Are', 'Do', 'Is'],
          correctAnswer: 0,
          explanation: 'La pregunta empieza con el verbo "to be".'
        }
      ]
    }
  },
  {
    id: 'a2-u15-e17',
    type: 'speaking-analysis',
    level: 'A2',
    topic: 'Nature & Environment',
    topicName: 'Nature & Environment',
    difficulty: 'medium',
    content: {
      title: 'Pronunciation: Going to',
      instructions: 'Di "It is going to be sunny".',
      questions: [
        {
          id: 'q1',
          text: 'It is going to be sunny',
          correctAnswer: 'It is going to be sunny',
          explanation: 'En lenguaje coloquial se suele oir "gonna", pero aquí practicamos la forma completa.'
        }
      ]
    }
  },
  {
    id: 'a2-u15-e18',
    type: 'fill-blank',
    level: 'A2',
    topic: 'Nature & Environment',
    topicName: 'Nature & Environment',
    difficulty: 'hard',
    content: {
      title: 'Negative intention',
      instructions: 'Completa en negativo.',
      questions: [
        {
          id: 'q1',
          text: 'I ___ (not/waste) water anymore.',
          correctAnswer: "am not going to waste",
          explanation: 'Negación de una intención.'
        }
      ]
    }
  },
  {
    id: 'a2-u15-e19',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Nature & Environment',
    topicName: 'Nature & Environment',
    difficulty: 'hard',
    content: {
      title: 'Prediction evidence',
      instructions: '¿Cuál es la mejor predicción?',
      questions: [
        {
          id: 'q1',
          question: 'The climber is very close to the top! He ___ reach it soon.',
          options: ['is going to', 'will', 'is'],
          correctAnswer: 0,
          explanation: 'Usamos "going to" porque vemos que está cerca.'
        }
      ]
    }
  },
  {
    id: 'a2-u15-e20',
    type: 'sentence-building',
    level: 'A2',
    topic: 'Nature & Environment',
    topicName: 'Nature & Environment',
    difficulty: 'hard',
    content: {
      title: 'Future changes',
      instructions: 'Ordena.',
      sentences: [
        {
          id: 's1',
          words: ['Global', 'warming', 'is', 'going', 'to', 'change', 'our', 'lives', '.'],
          correctSentence: 'Global warming is going to change our lives.',
          translation: 'El calentamiento global va a cambiar nuestras vidas.',
          hint: 'Usa "global warming".',
          explanation: 'Predicción sobre el medio ambiente.',
          points: 15
        }
      ]
    } as any
  },

  // --- SUB-TOPIC 3: Sustainability & Recycling (21-30) ---
  {
    id: 'a2-u15-e21',
    type: 'flashcard',
    level: 'A2',
    topic: 'Nature & Environment',
    topicName: 'Nature & Environment',
    difficulty: 'easy',
    content: {
      items: [
        {
          front: 'Basura / Desechos',
          back: 'Rubbish / Waste',
          example: 'Don\'t throw rubbish on the street.',
          pronunciation: '/ˈrʌbɪʃ/',
          explanation: '"Rubbish" es común en UK, "Trash" en USA.'
        }
      ]
    } as any
  },
  {
    id: 'a2-u15-e22',
    type: 'matching',
    level: 'A2',
    topic: 'Nature & Environment',
    topicName: 'Nature & Environment',
    difficulty: 'easy',
    content: {
      title: 'Recycling materials',
      instructions: 'Une el material con su traducción.',
      pairs: [
        { id: '1', left: 'Cardboard', right: 'Cartón' },
        { id: '2', left: 'Glass', right: 'Vidrio' },
        { id: '3', left: 'Plastic', right: 'Plástico' },
        { id: '4', left: 'Metal', right: 'Metal' }
      ],
      explanation: 'Materiales que podemos reciclar.'
    } as any
  },
  {
    id: 'a2-u15-e23',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Nature & Environment',
    topicName: 'Nature & Environment',
    difficulty: 'medium',
    content: {
      title: 'Eco-actions',
      instructions: 'Elige el verbo correcto.',
      questions: [
        {
          id: 'q1',
          question: 'We should ___ paper to save trees.',
          options: ['recycle', 'throw', 'burn'],
          correctAnswer: 0,
          explanation: 'Debemos reciclar (recycle) el papel.'
        }
      ]
    }
  },
  {
    id: 'a2-u15-e24',
    type: 'fill-blank',
    level: 'A2',
    topic: 'Nature & Environment',
    topicName: 'Nature & Environment',
    difficulty: 'medium',
    content: {
      title: 'Save energy',
      instructions: 'Completa.',
      questions: [
        {
          id: 'q1',
          text: 'Turn off the ___ when you leave the room.',
          correctAnswer: 'lights',
          explanation: 'Apagar las luces para ahorrar energía.'
        }
      ]
    }
  },
  {
    id: 'a2-u15-e25',
    type: 'sentence-building',
    level: 'A2',
    topic: 'Nature & Environment',
    topicName: 'Nature & Environment',
    difficulty: 'medium',
    content: {
      title: 'Plastic bags',
      instructions: 'Ordena.',
      sentences: [
        {
          id: 's1',
          words: ['I', 'am', 'going', 'to', 'stop', 'using', 'plastic', 'bags', '.'],
          correctSentence: 'I am going to stop using plastic bags.',
          translation: 'Voy a dejar de usar bolsas de plástico.',
          hint: 'Usa "stop using".',
          explanation: 'Una intención ecológica.',
          points: 10
        }
      ]
    } as any
  },
  {
    id: 'a2-u15-e26',
    type: 'flashcard',
    level: 'A2',
    topic: 'Nature & Environment',
    topicName: 'Nature & Environment',
    difficulty: 'easy',
    content: {
      items: [
        {
          front: 'Energía solar',
          back: 'Solar power',
          example: 'Solar power is good for the environment.',
          pronunciation: '/ˈsəʊlə ˈpaʊə/',
          explanation: 'Energía obtenida del sol.'
        }
      ]
    } as any
  },
  {
    id: 'a2-u15-e27',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Nature & Environment',
    topicName: 'Nature & Environment',
    difficulty: 'medium',
    content: {
      title: 'Pollution',
      instructions: 'Elige.',
      questions: [
        {
          id: 'q1',
          question: 'Factories cause a lot of air ___ .',
          options: ['pollution', 'cleanliness', 'nature'],
          correctAnswer: 0,
          explanation: 'La contaminación se dice "pollution".'
        }
      ]
    }
  },
  {
    id: 'a2-u15-e28',
    type: 'speaking-analysis',
    level: 'A2',
    topic: 'Nature & Environment',
    topicName: 'Nature & Environment',
    difficulty: 'medium',
    content: {
      title: 'Pronunciation: Recycle',
      instructions: 'Di "I recycle everything".',
      questions: [
        {
          id: 'q1',
          text: 'I recycle everything',
          correctAnswer: 'I recycle everything',
          explanation: 'Se pronuncia /ˌriːˈsaɪkl/.'
        }
      ]
    }
  },
  {
    id: 'a2-u15-e29',
    type: 'fill-blank',
    level: 'A2',
    topic: 'Nature & Environment',
    topicName: 'Nature & Environment',
    difficulty: 'hard',
    content: {
      title: 'Reuse',
      instructions: 'Completa.',
      questions: [
        {
          id: 'q1',
          text: 'You can ___ this glass jar to store food.',
          correctAnswer: 'reuse',
          explanation: 'Reutilizar (reuse).'
        }
      ]
    }
  },
  {
    id: 'a2-u15-e30',
    type: 'sentence-building',
    level: 'A2',
    topic: 'Nature & Environment',
    topicName: 'Nature & Environment',
    difficulty: 'hard',
    content: {
      title: 'Eco-friendly',
      instructions: 'Ordena.',
      sentences: [
        {
          id: 's1',
          words: ['We', 'want', 'to', 'live', 'a', 'more', 'eco-friendly', 'life', '.'],
          correctSentence: 'We want to live a more eco-friendly life.',
          translation: 'Queremos vivir una vida más ecológica.',
          hint: 'Usa "eco-friendly".',
          explanation: 'Adjetivo para lo que respeta el medio ambiente.',
          points: 15
        }
      ]
    } as any
  },

  // --- SUB-TOPIC 4: Animals & Habitats (31-40) ---
  {
    id: 'a2-u15-e31',
    type: 'flashcard',
    level: 'A2',
    topic: 'Nature & Environment',
    topicName: 'Nature & Environment',
    difficulty: 'easy',
    content: {
      items: [
        {
          front: 'Vida salvaje',
          back: 'Wildlife',
          example: 'Australia has unique wildlife.',
          pronunciation: '/ˈwaɪldlaɪf/',
          explanation: 'Animales que viven en libertad.'
        }
      ]
    } as any
  },
  {
    id: 'a2-u15-e32',
    type: 'matching',
    level: 'A2',
    topic: 'Nature & Environment',
    topicName: 'Nature & Environment',
    difficulty: 'easy',
    content: {
      title: 'Animal Habitats',
      instructions: 'Une el animal con su hábitat.',
      pairs: [
        { id: '1', left: 'Shark', right: 'Ocean' },
        { id: '2', left: 'Monkey', right: 'Jungle' },
        { id: '3', left: 'Camel', right: 'Desert' },
        { id: '4', left: 'Polar bear', right: 'Arctic' }
      ],
      explanation: 'Donde viven los animales.'
    } as any
  },
  {
    id: 'a2-u15-e33',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Nature & Environment',
    topicName: 'Nature & Environment',
    difficulty: 'medium',
    content: {
      title: 'Endangered species',
      instructions: 'Elige.',
      questions: [
        {
          id: 'q1',
          question: 'An animal that might disappear soon is ___ .',
          options: ['endangered', 'dangerous', 'common'],
          correctAnswer: 0,
          explanation: '"Endangered" significa en peligro de extinción.'
        }
      ]
    }
  },
  {
    id: 'a2-u15-e34',
    type: 'fill-blank',
    level: 'A2',
    topic: 'Nature & Environment',
    topicName: 'Nature & Environment',
    difficulty: 'medium',
    content: {
      title: 'Mammals',
      instructions: 'Completa.',
      questions: [
        {
          id: 'q1',
          text: 'The blue ___ is the largest animal in the world.',
          correctAnswer: 'whale',
          explanation: 'La ballena (whale).'
        }
      ]
    }
  },
  {
    id: 'a2-u15-e35',
    type: 'sentence-building',
    level: 'A2',
    topic: 'Nature & Environment',
    topicName: 'Nature & Environment',
    difficulty: 'medium',
    content: {
      title: 'Going to the zoo',
      instructions: 'Ordena para formar una pregunta.',
      sentences: [
        {
          id: 's1',
          words: ['Are', 'you', 'going', 'to', 'visit', 'the', 'zoo', '?'],
          correctSentence: 'Are you going to visit the zoo?',
          translation: '¿Vas a visitar el zoo?',
          hint: 'Empieza con "Are".',
          explanation: 'Pregunta sobre un plan futuro.',
          points: 10
        }
      ]
    } as any
  },
  {
    id: 'a2-u15-e36',
    type: 'flashcard',
    level: 'A2',
    topic: 'Nature & Environment',
    topicName: 'Nature & Environment',
    difficulty: 'easy',
    content: {
      items: [
        {
          front: 'Pluma',
          back: 'Feather',
          example: 'Birds have many feathers.',
          pronunciation: '/ˈfeðə/',
          explanation: 'Lo que cubre el cuerpo de los pájaros.'
        }
      ]
    } as any
  },
  {
    id: 'a2-u15-e37',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Nature & Environment',
    topicName: 'Nature & Environment',
    difficulty: 'medium',
    content: {
      title: 'Insects',
      instructions: 'Elige el insecto.',
      questions: [
        {
          id: 'q1',
          question: 'A small insect with colorful wings is a ___ .',
          options: ['butterfly', 'lion', 'eagle'],
          correctAnswer: 0,
          explanation: 'Mariposa se dice "butterfly".'
        }
      ]
    }
  },
  {
    id: 'a2-u15-e38',
    type: 'speaking-analysis',
    level: 'A2',
    topic: 'Nature & Environment',
    topicName: 'Nature & Environment',
    difficulty: 'medium',
    content: {
      title: 'Pronunciation: Wildlife',
      instructions: 'Di "I love watching wildlife".',
      questions: [
        {
          id: 'q1',
          text: 'I love watching wildlife',
          correctAnswer: 'I love watching wildlife',
          explanation: 'Se pronuncia /ˈwaɪldlaɪf/.'
        }
      ]
    }
  },
  {
    id: 'a2-u15-e39',
    type: 'fill-blank',
    level: 'A2',
    topic: 'Nature & Environment',
    topicName: 'Nature & Environment',
    difficulty: 'hard',
    content: {
      title: 'Nests',
      instructions: 'Completa.',
      questions: [
        {
          id: 'q1',
          text: 'Birds build their ___ in trees.',
          correctAnswer: 'nests',
          explanation: 'Nidos se dice "nests".'
        }
      ]
    }
  },
  {
    id: 'a2-u15-e40',
    type: 'sentence-building',
    level: 'A2',
    topic: 'Nature & Environment',
    topicName: 'Nature & Environment',
    difficulty: 'hard',
    content: {
      title: 'Helping animals',
      instructions: 'Ordena.',
      sentences: [
        {
          id: 's1',
          words: ['We', 'are', 'going', 'to', 'save', 'the', 'pandas', '.'],
          correctSentence: 'We are going to save the pandas.',
          translation: 'Vamos a salvar a los pandas.',
          hint: 'Usa "going to".',
          explanation: 'Expresa una intención colectiva.',
          points: 15
        }
      ]
    } as any
  },

  // --- SUB-TOPIC 5: Review & Mix (41-50) ---
  {
    id: 'a2-u15-e41',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Nature & Environment',
    topicName: 'Nature & Environment',
    difficulty: 'medium',
    content: {
      title: 'Review: Weather',
      instructions: 'Elige.',
      questions: [
        {
          id: 'q1',
          question: 'Be careful! The road is ___ because of the ice.',
          options: ['slippery', 'dry', 'warm'],
          correctAnswer: 0,
          explanation: '"Slippery" significa resbaladizo.'
        }
      ]
    }
  },
  {
    id: 'a2-u15-e42',
    type: 'fill-blank',
    level: 'A2',
    topic: 'Nature & Environment',
    topicName: 'Nature & Environment',
    difficulty: 'medium',
    content: {
      title: 'Review: Prediction',
      instructions: 'Completa.',
      questions: [
        {
          id: 'q1',
          text: 'The sun is out. It ___ be a beautiful day. (be)',
          correctAnswer: 'is going to',
          explanation: 'Predicción basada en el sol actual.'
        }
      ]
    }
  },
  {
    id: 'a2-u15-e43',
    type: 'sentence-building',
    level: 'A2',
    topic: 'Nature & Environment',
    topicName: 'Nature & Environment',
    difficulty: 'medium',
    content: {
      title: 'Review: Recycling',
      instructions: 'Ordena.',
      sentences: [
        {
          id: 's1',
          words: ['Are', 'you', 'going', 'to', 'recycle', 'the', 'glass', '?'],
          correctSentence: 'Are you going to recycle the glass?',
          translation: '¿Vas a reciclar el vidrio?',
          hint: 'Pregunta de intención.',
          explanation: 'Estructura interrogativa.',
          points: 10
        }
      ]
    } as any
  },
  {
    id: 'a2-u15-e44',
    type: 'speaking-analysis',
    level: 'A2',
    topic: 'Nature & Environment',
    topicName: 'Nature & Environment',
    difficulty: 'hard',
    content: {
      title: 'Pronunciation: Scenery',
      instructions: 'Di "The scenery is amazing".',
      questions: [
        {
          id: 'q1',
          text: 'The scenery is amazing',
          correctAnswer: 'The scenery is amazing',
          explanation: 'Se pronuncia /ˈsiːnəri/.'
        }
      ]
    }
  },
  {
    id: 'a2-u15-e45',
    type: 'matching',
    level: 'A2',
    topic: 'Nature & Environment',
    topicName: 'Nature & Environment',
    difficulty: 'medium',
    content: {
      title: 'Nature Mix',
      instructions: 'Une.',
      pairs: [
        { id: '1', left: 'Forest', right: 'Trees' },
        { id: '2', left: 'Beach', right: 'Sand' },
        { id: '3', left: 'Desert', right: 'Cactus' },
        { id: '4', left: 'Mountain', right: 'Rock' }
      ],
      explanation: 'Elementos típicos de cada paisaje.'
    } as any
  },
  {
    id: 'a2-u15-e46',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Nature & Environment',
    topicName: 'Nature & Environment',
    difficulty: 'medium',
    content: {
      title: 'Review: Waste',
      instructions: 'Elige.',
      questions: [
        {
          id: 'q1',
          question: 'We should not ___ water.',
          options: ['waste', 'save', 'drink'],
          correctAnswer: 0,
          explanation: '"Waste" significa malgastar.'
        }
      ]
    }
  },
  {
    id: 'a2-u15-e47',
    type: 'fill-blank',
    level: 'A2',
    topic: 'Nature & Environment',
    topicName: 'Nature & Environment',
    difficulty: 'hard',
    content: {
      title: 'Review: Climate change',
      instructions: 'Completa.',
      questions: [
        {
          id: 'q1',
          text: '___ change is a big problem for the Earth.',
          correctAnswer: 'Climate',
          explanation: 'Cambio climático se dice "Climate change".'
        }
      ]
    }
  },
  {
    id: 'a2-u15-e48',
    type: 'sentence-building',
    level: 'A2',
    topic: 'Nature & Environment',
    topicName: 'Nature & Environment',
    difficulty: 'hard',
    content: {
      title: 'Review: Negative prediction',
      instructions: 'Ordena.',
      sentences: [
        {
          id: 's1',
          words: ['The', 'weather', 'is', 'not', 'going', 'to', 'improve', 'today', '.'],
          correctSentence: 'The weather is not going to improve today.',
          translation: 'El tiempo no va a mejorar hoy.',
          hint: 'Usa "improve".',
          explanation: 'Predicción negativa.',
          points: 15
        }
      ]
    } as any
  },
  {
    id: 'a2-u15-e49',
    type: 'speaking-analysis',
    level: 'A2',
    topic: 'Nature & Environment',
    topicName: 'Nature & Environment',
    difficulty: 'medium',
    content: {
      title: 'Pronunciation: Lightning',
      instructions: 'Di "There was a lot of lightning".',
      questions: [
        {
          id: 'q1',
          text: 'There was a lot of lightning',
          correctAnswer: 'There was a lot of lightning',
          explanation: 'Se pronuncia /ˈlaɪtnɪŋ/.'
        }
      ]
    }
  },
  {
    id: 'a2-u15-e50',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Nature & Environment',
    topicName: 'Nature & Environment',
    difficulty: 'easy',
    content: {
      title: 'Final nature check',
      instructions: '¿Cómo ayudamos al planeta?',
      questions: [
        {
          id: 'q1',
          question: 'To help the planet, we should ___ more.',
          options: ['recycle', 'consume', 'drive'],
          correctAnswer: 0,
          explanation: 'Reciclar ayuda al planeta.'
        }
      ]
    }
  }
];
