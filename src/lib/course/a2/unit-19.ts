import { Exercise } from '@/lib/exercise-generator';

export const UNIT_19_EXERCISES: Exercise[] = [
  // --- SUB-TOPIC 1: Animals & Wildlife (1-12) ---
  {
    id: 'a2-u19-e1',
    type: 'flashcard',
    level: 'A2',
    topic: 'Nature & Environment',
    topicName: 'Nature & Environment',
    difficulty: 'easy',
    content: {
      items: [
        {
          front: 'Animales salvajes',
          back: 'Wild animals',
          example: 'Lions and tigers are wild animals.',
          pronunciation: '/waɪld ˈænɪməlz/',
          explanation: 'Animales que viven en libertad.'
        }
      ]
    } as any
  },
  {
    id: 'a2-u19-e2',
    type: 'matching',
    level: 'A2',
    topic: 'Nature & Environment',
    topicName: 'Nature & Environment',
    difficulty: 'easy',
    content: {
      title: 'Common Animals',
      instructions: 'Une el animal con su traducción.',
      pairs: [
        { id: '1', left: 'Elephant', right: 'Elefante' },
        { id: '2', left: 'Giraffe', right: 'Jirafa' },
        { id: '3', left: 'Monkey', right: 'Mono' },
        { id: '4', left: 'Shark', right: 'Tiburón' },
        { id: '5', left: 'Whale', right: 'Ballena' }
      ],
      explanation: 'Vocabulario básico de animales.'
    } as any
  },
  {
    id: 'a2-u19-e3',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Nature & Environment',
    topicName: 'Nature & Environment',
    difficulty: 'easy',
    content: {
      title: 'Farm Animals',
      instructions: 'Elige la opción correcta.',
      questions: [
        {
          id: 'q1',
          question: 'A ___ gives us milk.',
          options: ['cow', 'pig', 'chicken'],
          correctAnswer: 0,
          explanation: 'La vaca (cow) nos da leche.'
        }
      ]
    }
  },
  {
    id: 'a2-u19-e4',
    type: 'fill-blank',
    level: 'A2',
    topic: 'Nature & Environment',
    topicName: 'Nature & Environment',
    difficulty: 'easy',
    content: {
      title: 'Pets',
      instructions: 'Completa la frase.',
      questions: [
        {
          id: 'q1',
          text: 'Many people have a ___ as a pet because they are loyal.',
          correctAnswer: 'dog',
          explanation: 'El perro (dog) es la mascota más común.'
        }
      ]
    }
  },
  {
    id: 'a2-u19-e5',
    type: 'sentence-building',
    level: 'A2',
    topic: 'Nature & Environment',
    topicName: 'Nature & Environment',
    difficulty: 'medium',
    content: {
      title: 'Wildlife description',
      instructions: 'Ordena la frase.',
      sentences: [
        {
          id: 's1',
          words: ['Eagles', 'are', 'birds', 'that', 'can', 'fly', 'high', '.'],
          correctSentence: 'Eagles are birds that can fly high.',
          translation: 'Las águilas son aves que pueden volar alto.',
          hint: 'Usa "birds".',
          explanation: 'Uso de un pronombre relativo simple en una descripción.',
          points: 10
        }
      ]
    } as any
  },
  {
    id: 'a2-u19-e6',
    type: 'flashcard',
    level: 'A2',
    topic: 'Nature & Environment',
    topicName: 'Nature & Environment',
    difficulty: 'easy',
    content: {
      items: [
        {
          front: 'Insectos',
          back: 'Insects',
          example: 'Bees are very important insects.',
          pronunciation: '/ˈɪnsekts/',
          explanation: 'Pequeños animales con seis patas.'
        }
      ]
    } as any
  },
  {
    id: 'a2-u19-e7',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Nature & Environment',
    topicName: 'Nature & Environment',
    difficulty: 'medium',
    content: {
      title: 'Animal habitats',
      instructions: 'Elige la opción correcta.',
      questions: [
        {
          id: 'q1',
          question: 'Penguins live in the ___ .',
          options: ['Antarctic', 'Jungle', 'Desert'],
          correctAnswer: 0,
          explanation: 'Los pingüinos viven en la Antártida.'
        }
      ]
    }
  },
  {
    id: 'a2-u19-e8',
    type: 'speaking-analysis',
    level: 'A2',
    topic: 'Nature & Environment',
    topicName: 'Nature & Environment',
    difficulty: 'easy',
    content: {
      title: 'Pronunciation: Giraffe',
      instructions: 'Di "The giraffe is very tall".',
      questions: [
        {
          id: 'q1',
          text: 'The giraffe is very tall',
          correctAnswer: 'The giraffe is very tall',
          explanation: 'La acentuación en "giraffe" recae en la segunda sílaba: /dʒɪˈrɑːf/.'
        }
      ]
    }
  },
  {
    id: 'a2-u19-e9',
    type: 'fill-blank',
    level: 'A2',
    topic: 'Nature & Environment',
    topicName: 'Nature & Environment',
    difficulty: 'medium',
    content: {
      title: 'Sea creatures',
      instructions: 'Completa la frase.',
      questions: [
        {
          id: 'q1',
          text: 'The ___ is the largest animal in the ocean.',
          correctAnswer: 'whale',
          explanation: 'La ballena (whale) es el animal más grande.'
        }
      ]
    }
  },
  {
    id: 'a2-u19-e10',
    type: 'sentence-building',
    level: 'A2',
    topic: 'Nature & Environment',
    topicName: 'Nature & Environment',
    difficulty: 'medium',
    content: {
      title: 'Dangerous animals',
      instructions: 'Ordena la frase.',
      sentences: [
        {
          id: 's1',
          words: ['Sharks', 'live', 'in', 'the', 'deep', 'ocean', '.'],
          correctSentence: 'Sharks live in the deep ocean.',
          translation: 'Los tiburones viven en el océano profundo.',
          hint: 'Usa "deep".',
          explanation: 'Adjetivo antes del nombre.',
          points: 10
        }
      ]
    } as any
  },
  {
    id: 'a2-u19-e11',
    type: 'matching',
    level: 'A2',
    topic: 'Nature & Environment',
    topicName: 'Nature & Environment',
    difficulty: 'medium',
    content: {
      title: 'Animal Groups',
      instructions: 'Une el grupo con sus miembros.',
      pairs: [
        { id: '1', left: 'Mammals', right: 'Dogs, Cats, Humans' },
        { id: '2', left: 'Reptiles', right: 'Snakes, Lizards' },
        { id: '3', left: 'Birds', right: 'Parrots, Eagles' },
        { id: '4', left: 'Fish', right: 'Salmon, Tuna' }
      ],
      explanation: 'Clasificación básica de animales.'
    } as any
  },
  {
    id: 'a2-u19-e12',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Nature & Environment',
    topicName: 'Nature & Environment',
    difficulty: 'hard',
    content: {
      title: 'Endangered Species',
      instructions: 'Elige la opción correcta.',
      questions: [
        {
          id: 'q1',
          question: 'Pandas are ___ animals, so we must protect them.',
          options: ['endangered', 'wild', 'dangerous'],
          correctAnswer: 0,
          explanation: '"Endangered" significa en peligro de extinción.'
        }
      ]
    }
  },

  // --- SUB-TOPIC 2: Nature & Landscapes (13-24) ---
  {
    id: 'a2-u19-e13',
    type: 'flashcard',
    level: 'A2',
    topic: 'Nature & Environment',
    topicName: 'Nature & Environment',
    difficulty: 'easy',
    content: {
      items: [
        {
          front: 'Bosque',
          back: 'Forest / Wood',
          example: 'We went for a walk in the forest.',
          pronunciation: '/ˈfɒrɪst/',
          explanation: 'Un área grande con muchos árboles.'
        }
      ]
    } as any
  },
  {
    id: 'a2-u19-e14',
    type: 'matching',
    level: 'A2',
    topic: 'Nature & Environment',
    topicName: 'Nature & Environment',
    difficulty: 'easy',
    content: {
      title: 'Landscape features',
      instructions: 'Une el lugar con su traducción.',
      pairs: [
        { id: '1', left: 'Mountain', right: 'Montaña' },
        { id: '2', left: 'River', right: 'Río' },
        { id: '3', left: 'Lake', right: 'Lago' },
        { id: '4', left: 'Desert', right: 'Desierto' },
        { id: '5', left: 'Island', right: 'Isla' }
      ],
      explanation: 'Vocabulario de geografía física.'
    } as any
  },
  {
    id: 'a2-u19-e15',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Nature & Environment',
    topicName: 'Nature & Environment',
    difficulty: 'easy',
    content: {
      title: 'Water flow',
      instructions: 'Elige la opción correcta.',
      questions: [
        {
          id: 'q1',
          question: 'A ___ is water falling from a high place.',
          options: ['waterfall', 'lake', 'pond'],
          correctAnswer: 0,
          explanation: '"Waterfall" es una catarata o cascada.'
        }
      ]
    }
  },
  {
    id: 'a2-u19-e16',
    type: 'fill-blank',
    level: 'A2',
    topic: 'Nature & Environment',
    topicName: 'Nature & Environment',
    difficulty: 'easy',
    content: {
      title: 'Flora',
      instructions: 'Completa la frase.',
      questions: [
        {
          id: 'q1',
          text: 'In autumn, the ___ fall from the trees.',
          correctAnswer: 'leaves',
          explanation: 'Las hojas (leaves) caen en otoño.'
        }
      ]
    }
  },
  {
    id: 'a2-u19-e17',
    type: 'sentence-building',
    level: 'A2',
    topic: 'Nature & Environment',
    topicName: 'Nature & Environment',
    difficulty: 'medium',
    content: {
      title: 'The coast',
      instructions: 'Ordena la frase.',
      sentences: [
        {
          id: 's1',
          words: ['The', 'cliffs', 'by', 'the', 'sea', 'are', 'very', 'high', '.'],
          correctSentence: 'The cliffs by the sea are very high.',
          translation: 'Los acantilados junto al mar son muy altos.',
          hint: 'Usa "cliffs".',
          explanation: '"Cliffs" son acantilados.',
          points: 10
        }
      ]
    } as any
  },
  {
    id: 'a2-u19-e18',
    type: 'flashcard',
    level: 'A2',
    topic: 'Nature & Environment',
    topicName: 'Nature & Environment',
    difficulty: 'easy',
    content: {
      items: [
        {
          front: 'Valle',
          back: 'Valley',
          example: 'The village is in a beautiful valley.',
          pronunciation: '/ˈvæli/',
          explanation: 'Terreno bajo entre montañas.'
        }
      ]
    } as any
  },
  {
    id: 'a2-u19-e19',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Nature & Environment',
    topicName: 'Nature & Environment',
    difficulty: 'medium',
    content: {
      title: 'Plants',
      instructions: 'Elige la opción correcta.',
      questions: [
        {
          id: 'q1',
          question: 'Bees collect pollen from ___ .',
          options: ['flowers', 'grass', 'sand'],
          correctAnswer: 0,
          explanation: 'Las abejas van a las flores (flowers).'
        }
      ]
    }
  },
  {
    id: 'a2-u19-e20',
    type: 'speaking-analysis',
    level: 'A2',
    topic: 'Nature & Environment',
    topicName: 'Nature & Environment',
    difficulty: 'easy',
    content: {
      title: 'Pronunciation: Mountain',
      instructions: 'Di "Let\'s climb the mountain".',
      questions: [
        {
          id: 'q1',
          text: "Let's climb the mountain",
          correctAnswer: "Let's climb the mountain",
          explanation: 'Pronuncia "mountain" como /ˈmaʊntɪn/.'
        }
      ]
    }
  },
  {
    id: 'a2-u19-e21',
    type: 'fill-blank',
    level: 'A2',
    topic: 'Nature & Environment',
    topicName: 'Nature & Environment',
    difficulty: 'medium',
    content: {
      title: 'Geography',
      instructions: 'Completa.',
      questions: [
        {
          id: 'q1',
          text: 'The Sahara is the most famous ___ in the world.',
          correctAnswer: 'desert',
          explanation: 'El Sáhara es un desierto (desert).'
        }
      ]
    }
  },
  {
    id: 'a2-u19-e22',
    type: 'sentence-building',
    level: 'A2',
    topic: 'Nature & Environment',
    topicName: 'Nature & Environment',
    difficulty: 'medium',
    content: {
      title: 'Hiking',
      instructions: 'Ordena la frase.',
      sentences: [
        {
          id: 's1',
          words: ['We', 'went', 'hiking', 'in', 'the', 'hills', '.'],
          correctSentence: 'We went hiking in the hills.',
          translation: 'Fuimos a hacer senderismo por las colinas.',
          hint: 'Usa "hills".',
          explanation: '"Hills" son colinas o cerros.' ,
          points: 10
        }
      ]
    } as any
  },
  {
    id: 'a2-u19-e23',
    type: 'matching',
    level: 'A2',
    topic: 'Nature & Environment',
    topicName: 'Nature & Environment',
    difficulty: 'medium',
    content: {
      title: 'Nature elements',
      instructions: 'Une el elemento con su descripción.',
      pairs: [
        { id: '1', left: 'Coast', right: 'Where the land meets the sea' },
        { id: '2', left: 'Stream', right: 'A very small river' },
        { id: '3', left: 'Peak', right: 'The top of a mountain' },
        { id: '4', left: 'Path', right: 'Where you walk in the forest' }
      ],
      explanation: 'Vocabulario detallado de la naturaleza.'
    } as any
  },
  {
    id: 'a2-u19-e24',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Nature & Environment',
    topicName: 'Nature & Environment',
    difficulty: 'hard',
    content: {
      title: 'The Earth',
      instructions: 'Elige la opción correcta.',
      questions: [
        {
          id: 'q1',
          question: 'The ___ is the line where the earth meets the sky.',
          options: ['horizon', 'beach', 'plain'],
          correctAnswer: 0,
          explanation: 'El horizonte (horizon).'
        }
      ]
    }
  },

  // --- SUB-TOPIC 3: The Environment & Sustainability (25-36) ---
  {
    id: 'a2-u19-e25',
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
          explanation: 'Todo lo que nos rodea.'
        }
      ]
    } as any
  },
  {
    id: 'a2-u19-e26',
    type: 'matching',
    level: 'A2',
    topic: 'Nature & Environment',
    topicName: 'Nature & Environment',
    difficulty: 'easy',
    content: {
      title: 'Eco-vocabulary',
      instructions: 'Une la palabra con su traducción.',
      pairs: [
        { id: '1', left: 'Recycle', right: 'Reciclar' },
        { id: '2', left: 'Pollution', right: 'Contaminación' },
        { id: '3', left: 'Global warming', right: 'Calentamiento global' },
        { id: '4', left: 'Waste', right: 'Desperdicio / Basura' },
        { id: '5', left: 'Save energy', right: 'Ahorrar energía' }
      ],
      explanation: 'Términos relacionados con la ecología.'
    } as any
  },
  {
    id: 'a2-u19-e27',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Nature & Environment',
    topicName: 'Nature & Environment',
    difficulty: 'easy',
    content: {
      title: 'Recycling',
      instructions: 'Elige la opción correcta.',
      questions: [
        {
          id: 'q1',
          question: 'You should put plastic bottles in the ___ .',
          options: ['recycling bin', 'bag', 'river'],
          correctAnswer: 0,
          explanation: '"Recycling bin" es el contenedor de reciclaje.'
        }
      ]
    }
  },
  {
    id: 'a2-u19-e28',
    type: 'fill-blank',
    level: 'A2',
    topic: 'Nature & Environment',
    topicName: 'Nature & Environment',
    difficulty: 'easy',
    content: {
      title: 'Pollution',
      instructions: 'Completa la frase.',
      questions: [
        {
          id: 'q1',
          text: 'Cars cause a lot of air ___ in big cities.',
          correctAnswer: 'pollution',
          explanation: 'Contaminación del aire (air pollution).'
        }
      ]
    }
  },
  {
    id: 'a2-u19-e29',
    type: 'sentence-building',
    level: 'A2',
    topic: 'Nature & Environment',
    topicName: 'Nature & Environment',
    difficulty: 'medium',
    content: {
      title: 'Protecting the planet',
      instructions: 'Ordena la frase.',
      sentences: [
        {
          id: 's1',
          words: ['We', 'need', 'to', 'save', 'the', 'planet', '.'],
          correctSentence: 'We need to save the planet.',
          translation: 'Necesitamos salvar el planeta.',
          hint: 'Usa "save".',
          explanation: 'Verbo común en contextos ecológicos.',
          points: 10
        }
      ]
    } as any
  },
  {
    id: 'a2-u19-e30',
    type: 'flashcard',
    level: 'A2',
    topic: 'Nature & Environment',
    topicName: 'Nature & Environment',
    difficulty: 'easy',
    content: {
      items: [
        {
          front: 'Energías renovables',
          back: 'Renewable energy',
          example: 'Solar power is a type of renewable energy.',
          pronunciation: '/rɪˈnjuːəbl ˈenədʒi/',
          explanation: 'Energía que no se agota.'
        }
      ]
    } as any
  },
  {
    id: 'a2-u19-e31',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Nature & Environment',
    topicName: 'Nature & Environment',
    difficulty: 'medium',
    content: {
      title: 'Plastic usage',
      instructions: 'Elige la mejor opción.',
      questions: [
        {
          id: 'q1',
          question: 'Try to ___ using plastic bags.',
          options: ['avoid', 'enjoy', 'start'],
          correctAnswer: 0,
          explanation: '"Avoid" significa evitar.'
        }
      ]
    }
  },
  {
    id: 'a2-u19-e32',
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
          explanation: 'Asegúrate de pronunciar la "n" suave: /ɪnˈvaɪrənmənt/.'
        }
      ]
    }
  },
  {
    id: 'a2-u19-e33',
    type: 'fill-blank',
    level: 'A2',
    topic: 'Nature & Environment',
    topicName: 'Nature & Environment',
    difficulty: 'medium',
    content: {
      title: 'Green habits',
      instructions: 'Completa.',
      questions: [
        {
          id: 'q1',
          text: 'Always turn ___ the lights when you leave a room.',
          correctAnswer: 'off',
          explanation: '"Turn off" es apagar.'
        }
      ]
    }
  },
  {
    id: 'a2-u19-e34',
    type: 'sentence-building',
    level: 'A2',
    topic: 'Nature & Environment',
    topicName: 'Nature & Environment',
    difficulty: 'medium',
    content: {
      title: 'Recycling habits',
      instructions: 'Ordena la frase.',
      sentences: [
        {
          id: 's1',
          words: ['Do', 'you', 'recycle', 'paper', 'and', 'glass', '?'],
          correctSentence: 'Do you recycle paper and glass?',
          translation: '¿Reciclas papel y vidrio?',
          hint: 'Pregunta.',
          explanation: 'Pregunta sobre hábitos en presente simple.',
          points: 10
        }
      ]
    } as any
  },
  {
    id: 'a2-u19-e35',
    type: 'matching',
    level: 'A2',
    topic: 'Nature & Environment',
    topicName: 'Nature & Environment',
    difficulty: 'medium',
    content: {
      title: 'Eco-actions',
      instructions: 'Une la acción con su beneficio.',
      pairs: [
        { id: '1', left: 'Plant a tree', right: 'Helps the air' },
        { id: '2', left: 'Pick up litter', right: 'Cleans the park' },
        { id: '3', left: 'Walk to school', right: 'Saves petrol' },
        { id: '4', left: 'Use a reusable bottle', right: 'Reduces plastic waste' }
      ],
      explanation: 'Acciones positivas para el medio ambiente.'
    } as any
  },
  {
    id: 'a2-u19-e36',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Nature & Environment',
    topicName: 'Nature & Environment',
    difficulty: 'hard',
    content: {
      title: 'Climate Change',
      instructions: 'Elige la opción correcta.',
      questions: [
        {
          id: 'q1',
          question: 'The ice is ___ because of global warming.',
          options: ['melting', 'freezing', 'burning'],
          correctAnswer: 0,
          explanation: '"Melting" es derretirse.'
        }
      ]
    }
  },

  // --- SUB-TOPIC 4: First Conditional (If + Present, Will + Verb) (37-45) ---
  {
    id: 'a2-u19-e37',
    type: 'flashcard',
    level: 'A2',
    topic: 'Nature & Environment',
    topicName: 'Nature & Environment',
    difficulty: 'easy',
    content: {
      items: [
        {
          front: 'Si llueve, me quedaré en casa',
          back: 'If it rains, I will stay at home',
          example: 'If it is sunny, we will go to the beach.',
          pronunciation: '/n/a/',
          explanation: 'El primer condicional se usa para posibilidades reales en el futuro.'
        }
      ]
    } as any
  },
  {
    id: 'a2-u19-e38',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Nature & Environment',
    topicName: 'Nature & Environment',
    difficulty: 'medium',
    content: {
      title: 'Conditional structure',
      instructions: 'Elige la forma correcta.',
      questions: [
        {
          id: 'q1',
          question: 'If we ___ the forest, the animals will lose their homes.',
          options: ['destroy', 'will destroy', 'destroys'],
          correctAnswer: 0,
          explanation: 'Después de "if" usamos el presente simple.'
        }
      ]
    }
  },
  {
    id: 'a2-u19-e39',
    type: 'fill-blank',
    level: 'A2',
    topic: 'Nature & Environment',
    topicName: 'Nature & Environment',
    difficulty: 'medium',
    content: {
      title: 'Future result',
      instructions: 'Completa con la forma de futuro.',
      questions: [
        {
          id: 'q1',
          text: 'If you recycle, you ___ (help) the planet.',
          correctAnswer: 'will help',
          explanation: 'Usamos "will" para el resultado futuro.'
        }
      ]
    }
  },
  {
    id: 'a2-u19-e40',
    type: 'sentence-building',
    level: 'A2',
    topic: 'Nature & Environment',
    topicName: 'Nature & Environment',
    difficulty: 'medium',
    content: {
      title: 'Climate prediction',
      instructions: 'Ordena la frase.',
      sentences: [
        {
          id: 's1',
          words: ['If', 'it', 'is', 'hot', ',', 'I', 'will', 'go', 'swimming', '.'],
          correctSentence: 'If it is hot, I will go swimming.',
          translation: 'Si hace calor, iré a nadar.',
          hint: 'Usa la coma.',
          explanation: 'Si la frase empieza con "if", ponemos una coma antes de la segunda parte.',
          points: 10
        }
      ]
    } as any
  },
  {
    id: 'a2-u19-e41',
    type: 'matching',
    level: 'A2',
    topic: 'Nature & Environment',
    topicName: 'Nature & Environment',
    difficulty: 'medium',
    content: {
      title: 'Conditional parts',
      instructions: 'Une la condición con su resultado lógico.',
      pairs: [
        { id: '1', left: 'If we save water', right: 'we will have enough for summer' },
        { id: '2', left: 'If it snows', right: 'children will build a snowman' },
        { id: '3', left: 'If you plant seeds', right: 'flowers will grow' },
        { id: '4', left: 'If the sea rises', right: 'some islands will disappear' }
      ],
      explanation: 'Práctica de causa y efecto en el futuro.'
    } as any
  },
  {
    id: 'a2-u19-e42',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Nature & Environment',
    topicName: 'Nature & Environment',
    difficulty: 'medium',
    content: {
      title: 'Negative Conditionals',
      instructions: 'Elige la opción correcta.',
      questions: [
        {
          id: 'q1',
          question: 'If you ___ hurry, you will miss the bus.',
          options: ['don’t', 'won’t', 'aren’t'],
          correctAnswer: 0,
          explanation: 'Negativo del presente simple tras "if".'
        }
      ]
    }
  },
  {
    id: 'a2-u19-e43',
    type: 'speaking-analysis',
    level: 'A2',
    topic: 'Nature & Environment',
    topicName: 'Nature & Environment',
    difficulty: 'medium',
    content: {
      title: 'Pronunciation: Will',
      instructions: 'Di "I will help you".',
      questions: [
        {
          id: 'q1',
          text: 'I will help you',
          correctAnswer: 'I will help you',
          explanation: 'Pronuncia "will" con una "i" corta /wɪl/.'
        }
      ]
    }
  },
  {
    id: 'a2-u19-e44',
    type: 'fill-blank',
    level: 'A2',
    topic: 'Nature & Environment',
    topicName: 'Nature & Environment',
    difficulty: 'hard',
    content: {
      title: 'Unless',
      instructions: 'Completa con la forma correcta.',
      questions: [
        {
          id: 'q1',
          text: 'The plants will die unless you ___ (water) them.',
          correctAnswer: 'water',
          explanation: '"Unless" funciona como "if not", requiere presente simple.'
        }
      ]
    }
  },
  {
    id: 'a2-u19-e45',
    type: 'sentence-building',
    level: 'A2',
    topic: 'Nature & Environment',
    topicName: 'Nature & Environment',
    difficulty: 'hard',
    content: {
      title: 'Conditional Question',
      instructions: 'Ordena la pregunta.',
      sentences: [
        {
          id: 's1',
          words: ['What', 'will', 'you', 'do', 'if', 'it', 'rains', '?'],
          correctSentence: 'What will you do if it rains?',
          translation: '¿Qué harás si llueve?',
          hint: 'Empieza con "What".',
          explanation: 'Estructura de pregunta en el primer condicional.',
          points: 10
        }
      ]
    } as any
  },

  // --- SUB-TOPIC 5: Review & Mixed Practice (46-50) ---
  {
    id: 'a2-u19-e46',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Nature & Environment',
    topicName: 'Nature & Environment',
    difficulty: 'medium',
    content: {
      title: 'Mixed Review',
      instructions: 'Elige la opción correcta.',
      questions: [
        {
          id: 'q1',
          question: 'We should protect the ___ of these rare birds.',
          options: ['habitat', 'house', 'city'],
          correctAnswer: 0,
          explanation: '"Habitat" es el entorno natural de un animal.'
        }
      ]
    }
  },
  {
    id: 'a2-u19-e47',
    type: 'fill-blank',
    level: 'A2',
    topic: 'Nature & Environment',
    topicName: 'Nature & Environment',
    difficulty: 'medium',
    content: {
      title: 'Conditional review',
      instructions: 'Completa.',
      questions: [
        {
          id: 'q1',
          text: 'If we recycle more, there ___ (be) less waste.',
          correctAnswer: 'will be',
          explanation: 'Resultado futuro en el primer condicional.'
        }
      ]
    }
  },
  {
    id: 'a2-u19-e48',
    type: 'sentence-building',
    level: 'A2',
    topic: 'Nature & Environment',
    topicName: 'Nature & Environment',
    difficulty: 'medium',
    content: {
      title: 'Animal description',
      instructions: 'Ordena la frase.',
      sentences: [
        {
          id: 's1',
          words: ['The', 'lion', 'is', 'the', 'king', 'of', ' the', 'jungle', '.'],
          correctSentence: 'The lion is the king of the jungle.',
          translation: 'El león es el rey de la selva.',
          hint: 'Usa "king".',
          explanation: 'Frase hecha muy común.',
          points: 10
        }
      ]
    } as any
  },
  {
    id: 'a2-u19-e49',
    type: 'matching',
    level: 'A2',
    topic: 'Nature & Environment',
    topicName: 'Nature & Environment',
    difficulty: 'medium',
    content: {
      title: 'Nature Review',
      instructions: 'Une el animal con su grupo.',
      pairs: [
        { id: '1', left: 'Snake', right: 'Reptile' },
        { id: '2', left: 'Eagle', right: 'Bird' },
        { id: '3', left: 'Tiger', right: 'Mammal' },
        { id: '4', left: 'Bee', right: 'Insect' }
      ],
      explanation: 'Repaso de categorías animales.'
    } as any
  },
  {
    id: 'a2-u19-e50',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Nature & Environment',
    topicName: 'Nature & Environment',
    difficulty: 'hard',
    content: {
      title: 'Final Challenge',
      instructions: 'Elige la opción correcta.',
      questions: [
        {
          id: 'q1',
          question: '___ you help me if I ___ with the cleaning?',
          options: ['Will / help', 'Do / help', 'Will / helped'],
          correctAnswer: 0,
          explanation: 'Estructura de primer condicional: Will + base verb / Present Simple.'
        }
      ]
    }
  }
];
