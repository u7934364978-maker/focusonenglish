import { Exercise } from '@/lib/exercise-generator';

export const UNIT_22_EXERCISES: Exercise[] = [
  // --- SUB-TOPIC 1: City Life & Places (1-12) ---
  {
    id: 'a2-u22-e1',
    type: 'flashcard',
    level: 'A2',
    topic: 'City vs Country',
    topicName: 'City vs Country',
    difficulty: 'easy',
    content: {
      items: [
        {
          front: 'Rascacielos',
          back: 'Skyscraper',
          example: 'New York is famous for its skyscrapers.',
          pronunciation: '/ˈskaɪskreɪpə/',
          explanation: 'Un edificio muy alto.'
        }
      ]
    } as any
  },
  {
    id: 'a2-u22-e2',
    type: 'matching',
    level: 'A2',
    topic: 'City vs Country',
    topicName: 'City vs Country',
    difficulty: 'easy',
    content: {
      title: 'City Places',
      instructions: 'Une el lugar con su traducción.',
      pairs: [
        { id: '1', left: 'Subway / Metro', right: 'Metro' },
        { id: '2', left: 'Square', right: 'Plaza' },
        { id: '3', left: 'Sidewalk / Pavement', right: 'Acera' },
        { id: '4', left: 'Bridge', right: 'Puente' },
        { id: '5', left: 'Traffic light', right: 'Semáforo' }
      ],
      explanation: 'Elementos comunes en una ciudad.'
    } as any
  },
  {
    id: 'a2-u22-e3',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'City vs Country',
    topicName: 'City vs Country',
    difficulty: 'easy',
    content: {
      title: 'Crowds',
      instructions: 'Elige la opción correcta.',
      questions: [
        {
          id: 'q1',
          question: 'The city center is always very ___ on Saturdays.',
          options: ['crowded', 'empty', 'quiet'],
          correctAnswer: 0,
          explanation: '"Crowded" significa lleno de gente.'
        }
      ]
    }
  },
  {
    id: 'a2-u22-e4',
    type: 'fill-blank',
    level: 'A2',
    topic: 'City vs Country',
    topicName: 'City vs Country',
    difficulty: 'easy',
    content: {
      title: 'Traffic',
      instructions: 'Completa la frase.',
      questions: [
        {
          id: 'q1',
          text: 'There is a huge traffic ___ on the main road.',
          correctAnswer: 'jam',
          explanation: '"Traffic jam" es un atasco o embotellamiento.'
        }
      ]
    }
  },
  {
    id: 'a2-u22-e5',
    type: 'sentence-building',
    level: 'A2',
    topic: 'City vs Country',
    topicName: 'City vs Country',
    difficulty: 'medium',
    content: {
      title: 'Public Transport',
      instructions: 'Ordena la frase.',
      sentences: [
        {
          id: 's1',
          words: ['The', 'metro', 'is', 'faster', 'than', 'the', 'bus', '.'],
          correctSentence: 'The metro is faster than the bus.',
          translation: 'El metro es más rápido que el autobús.',
          hint: 'Usa el comparativo.',
          explanation: 'Estructura comparativa: adjetivo-er + than.',
          points: 10
        }
      ]
    } as any
  },
  {
    id: 'a2-u22-e6',
    type: 'flashcard',
    level: 'A2',
    topic: 'City vs Country',
    topicName: 'City vs Country',
    difficulty: 'easy',
    content: {
      items: [
        {
          front: 'Contaminación',
          back: 'Pollution',
          example: 'Air pollution is a problem in big cities.',
          pronunciation: '/pəˈluːʃən/',
          explanation: 'Sustancias dañinas en el aire o agua.'
        }
      ]
    } as any
  },
  {
    id: 'a2-u22-e7',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'City vs Country',
    topicName: 'City vs Country',
    difficulty: 'medium',
    content: {
      title: 'Noise',
      instructions: 'Elige la opción correcta.',
      questions: [
        {
          id: 'q1',
          question: 'Big cities are much ___ than small towns.',
          options: ['noisier', 'noise', 'noisiest'],
          correctAnswer: 0,
          explanation: 'Comparativo de "noisy" -> "noisier".'
        }
      ]
    }
  },
  {
    id: 'a2-u22-e8',
    type: 'speaking-analysis',
    level: 'A2',
    topic: 'City vs Country',
    topicName: 'City vs Country',
    difficulty: 'easy',
    content: {
      title: 'Pronunciation: Skyscraper',
      instructions: 'Di "Look at that skyscraper".',
      questions: [
        {
          id: 'q1',
          text: 'Look at that skyscraper',
          correctAnswer: 'Look at that skyscraper',
          explanation: 'Pronuncia "sky" /skaɪ/ y "scraper" /ˈskreɪpə/.'
        }
      ]
    }
  },
  {
    id: 'a2-u22-e9',
    type: 'fill-blank',
    level: 'A2',
    topic: 'City vs Country',
    topicName: 'City vs Country',
    difficulty: 'medium',
    content: {
      title: 'Urban life',
      instructions: 'Completa la frase.',
      questions: [
        {
          id: 'q1',
          text: 'The ___ of living is higher in the city.',
          correctAnswer: 'cost',
          explanation: '"Cost of living" es el coste de la vida.'
        }
      ]
    }
  },
  {
    id: 'a2-u22-e10',
    type: 'sentence-building',
    level: 'A2',
    topic: 'City vs Country',
    topicName: 'City vs Country',
    difficulty: 'medium',
    content: {
      title: 'Getting around',
      instructions: 'Ordena la frase.',
      sentences: [
        {
          id: 's1',
          words: ['Cities', 'are', 'more', 'exciting', 'than', 'villages', '.'],
          correctSentence: 'Cities are more exciting than villages.',
          translation: 'Las ciudades son más emocionantes que los pueblos.',
          hint: 'Usa "more".',
          explanation: 'Comparativo con adjetivos largos.',
          points: 10
        }
      ]
    } as any
  },
  {
    id: 'a2-u22-e11',
    type: 'matching',
    level: 'A2',
    topic: 'City vs Country',
    topicName: 'City vs Country',
    difficulty: 'medium',
    content: {
      title: 'City Adjectives',
      instructions: 'Une el adjetivo con su opuesto.',
      pairs: [
        { id: '1', left: 'Modern', right: 'Ancient / Old' },
        { id: '2', left: 'Safe', right: 'Dangerous' },
        { id: '3', left: 'Clean', right: 'Dirty' },
        { id: '4', left: 'Lively', right: 'Dull / Boring' }
      ],
      explanation: 'Pares de adjetivos para describir ciudades.'
    } as any
  },
  {
    id: 'a2-u22-e12',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'City vs Country',
    topicName: 'City vs Country',
    difficulty: 'hard',
    content: {
      title: 'City features',
      instructions: 'Elige la opción correcta.',
      questions: [
        {
          id: 'q1',
          question: 'Madrid has a very efficient public ___ system.',
          options: ['transport', 'moving', 'street'],
          correctAnswer: 0,
          explanation: '"Public transport" es el transporte público.'
        }
      ]
    }
  },

  // --- SUB-TOPIC 2: Country Life & Nature (13-24) ---
  {
    id: 'a2-u22-e13',
    type: 'flashcard',
    level: 'A2',
    topic: 'City vs Country',
    topicName: 'City vs Country',
    difficulty: 'easy',
    content: {
      items: [
        {
          front: 'Campo / Paisaje',
          back: 'Countryside',
          example: 'We love walking in the countryside.',
          pronunciation: '/ˈkʌntrisaɪd/',
          explanation: 'La zona rural fuera de ciudades y pueblos.'
        }
      ]
    } as any
  },
  {
    id: 'a2-u22-e14',
    type: 'matching',
    level: 'A2',
    topic: 'City vs Country',
    topicName: 'City vs Country',
    difficulty: 'easy',
    content: {
      title: 'Rural Places',
      instructions: 'Une el lugar con su traducción.',
      pairs: [
        { id: '1', left: 'Farm', right: 'Granja' },
        { id: '2', left: 'Field', right: 'Campo (de cultivo/pasto)' },
        { id: '3', left: 'Path', right: 'Sendero / Camino' },
        { id: '4', left: 'Cottage', right: 'Casa de campo / Casita' },
        { id: '5', left: 'Village', right: 'Pueblo' }
      ],
      explanation: 'Elementos del entorno rural.'
    } as any
  },
  {
    id: 'a2-u22-e15',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'City vs Country',
    topicName: 'City vs Country',
    difficulty: 'easy',
    content: {
      title: 'Fresh air',
      instructions: 'Elige la opción correcta.',
      questions: [
        {
          id: 'q1',
          question: 'The air in the country is ___ than in the city.',
          options: ['fresher', 'fresh', 'more fresh'],
          correctAnswer: 0,
          explanation: 'Comparativo de "fresh" -> "fresher".'
        }
      ]
    }
  },
  {
    id: 'a2-u22-e16',
    type: 'fill-blank',
    level: 'A2',
    topic: 'City vs Country',
    topicName: 'City vs Country',
    difficulty: 'easy',
    content: {
      title: 'Quiet life',
      instructions: 'Completa la frase.',
      questions: [
        {
          id: 'q1',
          text: 'The countryside is very ___ and relaxing.',
          correctAnswer: 'peaceful',
          explanation: '"Peaceful" significa tranquilo o pacífico.'
        }
      ]
    }
  },
  {
    id: 'a2-u22-e17',
    type: 'sentence-building',
    level: 'A2',
    topic: 'City vs Country',
    topicName: 'City vs Country',
    difficulty: 'medium',
    content: {
      title: 'Rural living',
      instructions: 'Ordena la frase.',
      sentences: [
        {
          id: 's1',
          words: ['Life', 'is', 'slower', 'in', 'the', 'country', '.'],
          correctSentence: 'Life is slower in the country.',
          translation: 'La vida es más lenta en el campo.',
          hint: 'Usa el comparativo de "slow".',
          explanation: 'Adjetivo corto + -er.',
          points: 10
        }
      ]
    } as any
  },
  {
    id: 'a2-u22-e18',
    type: 'flashcard',
    level: 'A2',
    topic: 'City vs Country',
    topicName: 'City vs Country',
    difficulty: 'easy',
    content: {
      items: [
        {
          front: 'Vida silvestre',
          back: 'Wildlife',
          example: 'You can see a lot of wildlife here.',
          pronunciation: '/ˈwaɪldlaɪf/',
          explanation: 'Animales y plantas en su estado natural.'
        }
      ]
    } as any
  },
  {
    id: 'a2-u22-e19',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'City vs Country',
    topicName: 'City vs Country',
    difficulty: 'medium',
    content: {
      title: 'Scenery',
      instructions: 'Elige la opción correcta.',
      questions: [
        {
          id: 'q1',
          question: 'The ___ in the mountains is beautiful.',
          options: ['scenery', 'scene', 'viewing'],
          correctAnswer: 0,
          explanation: '"Scenery" se refiere al paisaje natural.'
        }
      ]
    }
  },
  {
    id: 'a2-u22-e20',
    type: 'speaking-analysis',
    level: 'A2',
    topic: 'City vs Country',
    topicName: 'City vs Country',
    difficulty: 'easy',
    content: {
      title: 'Pronunciation: Countryside',
      instructions: 'Di "I love the countryside".',
      questions: [
        {
          id: 'q1',
          text: 'I love the countryside',
          correctAnswer: 'I love the countryside',
          explanation: 'Pronuncia "country" como /ˈkʌntri/.'
        }
      ]
    }
  },
  {
    id: 'a2-u22-e21',
    type: 'fill-blank',
    level: 'A2',
    topic: 'City vs Country',
    topicName: 'City vs Country',
    difficulty: 'hard',
    content: {
      title: 'The farm',
      instructions: 'Completa la frase.',
      questions: [
        {
          id: 'q1',
          text: 'The farmer grows ___ in these fields.',
          correctAnswer: 'crops',
          explanation: '"Crops" son las cosechas o cultivos.'
        }
      ]
    }
  },
  {
    id: 'a2-u22-e22',
    type: 'sentence-building',
    level: 'A2',
    topic: 'City vs Country',
    topicName: 'City vs Country',
    difficulty: 'medium',
    content: {
      title: 'Walking',
      instructions: 'Ordena la frase.',
      sentences: [
        {
          id: 's1',
          words: ['We', 'often', 'go', 'for', 'long', 'walks', '.'],
          correctSentence: 'We often go for long walks.',
          translation: 'A menudo damos largos paseos.',
          hint: 'Usa "often".',
          explanation: 'Actividad típica del campo.',
          points: 10
        }
      ]
    } as any
  },
  {
    id: 'a2-u22-e23',
    type: 'matching',
    level: 'A2',
    topic: 'City vs Country',
    topicName: 'City vs Country',
    difficulty: 'medium',
    content: {
      title: 'Nature Mix',
      instructions: 'Une la palabra con su definición.',
      pairs: [
        { id: '1', left: 'Hill', right: 'A small mountain' },
        { id: '2', left: 'Wood', right: 'An area with many trees' },
        { id: '3', left: 'Stream', right: 'A very small river' },
        { id: '4', left: 'Path', right: 'A small way for walking' }
      ],
      explanation: 'Vocabulario de la naturaleza.'
    } as any
  },
  {
    id: 'a2-u22-e24',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'City vs Country',
    topicName: 'City vs Country',
    difficulty: 'hard',
    content: {
      title: 'Isolation',
      instructions: 'Elige la opción correcta.',
      questions: [
        {
          id: 'q1',
          question: 'Living in the country can be a bit ___ if you don’t have a car.',
          options: ['lonely', 'busy', 'crowded'],
          correctAnswer: 0,
          explanation: '"Lonely" significa solitario.'
        }
      ]
    }
  },

  // --- SUB-TOPIC 3: Comparatives (Review & More) (25-36) ---
  {
    id: 'a2-u22-e25',
    type: 'flashcard',
    level: 'A2',
    topic: 'City vs Country',
    topicName: 'City vs Country',
    difficulty: 'easy',
    content: {
      items: [
        {
          front: 'Mejor que / Peor que',
          back: 'Better than / Worse than',
          example: 'The air here is better than in London.',
          pronunciation: '/ˈbetə ðæn/ /wɜːs ðæn/',
          explanation: 'Comparativos irregulares de "good" y "bad".'
        }
      ]
    } as any
  },
  {
    id: 'a2-u22-e26',
    type: 'matching',
    level: 'A2',
    topic: 'City vs Country',
    topicName: 'City vs Country',
    difficulty: 'easy',
    content: {
      title: 'Comparative Forms',
      instructions: 'Une el adjetivo con su comparativo.',
      pairs: [
        { id: '1', left: 'Big', right: 'Bigger' },
        { id: '2', left: 'Safe', right: 'Safer' },
        { id: '3', left: 'Heavy', right: 'Heavier' },
        { id: '4', left: 'Bad', right: 'Worse' },
        { id: '5', left: 'Expensive', right: 'More expensive' }
      ],
      explanation: 'Diferentes reglas de formación de comparativos.'
    } as any
  },
  {
    id: 'a2-u22-e27',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'City vs Country',
    topicName: 'City vs Country',
    difficulty: 'medium',
    content: {
      title: 'Comparison',
      instructions: 'Elige la opción correcta.',
      questions: [
        {
          id: 'q1',
          question: 'My house is ___ than yours.',
          options: ['smaller', 'small', 'more small'],
          correctAnswer: 0,
          explanation: 'Adjetivo corto: +er.'
        }
      ]
    }
  },
  {
    id: 'a2-u22-e28',
    type: 'fill-blank',
    level: 'A2',
    topic: 'City vs Country',
    topicName: 'City vs Country',
    difficulty: 'medium',
    content: {
      title: 'Irregular Comparative',
      instructions: 'Escribe el comparativo de (far).',
      questions: [
        {
          id: 'q1',
          text: 'The airport is ___ than I thought.',
          correctAnswer: 'farther',
          explanation: '"Far" tiene dos comparativos: "farther" (distancia) o "further" (tiempo/grado).'
        }
      ]
    }
  },
  {
    id: 'a2-u22-e29',
    type: 'sentence-building',
    level: 'A2',
    topic: 'City vs Country',
    topicName: 'City vs Country',
    difficulty: 'medium',
    content: {
      title: 'Price comparison',
      instructions: 'Ordena la frase.',
      sentences: [
        {
          id: 's1',
          words: ['London', 'is', 'more', 'expensive', 'than', 'Madrid', '.'],
          correctSentence: 'London is more expensive than Madrid.',
          translation: 'Londres es más caro que Madrid.',
          hint: 'Usa "more".',
          explanation: 'Comparativo con adjetivo de 3 sílabas.',
          points: 10
        }
      ]
    } as any
  },
  {
    id: 'a2-u22-e30',
    type: 'flashcard',
    level: 'A2',
    topic: 'City vs Country',
    topicName: 'City vs Country',
    difficulty: 'medium',
    content: {
      items: [
        {
          front: 'Tan... como...',
          back: 'As... as...',
          example: 'Paris is as beautiful as Rome.',
          pronunciation: '/əz... əz/',
          explanation: 'Usamos "as... as" para comparar cosas iguales.'
        }
      ]
    } as any
  },
  {
    id: 'a2-u22-e31',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'City vs Country',
    topicName: 'City vs Country',
    difficulty: 'medium',
    content: {
      title: 'Equality',
      instructions: 'Elige la opción correcta.',
      questions: [
        {
          id: 'q1',
          question: 'The train is ___ the bus.',
          options: ['as expensive as', 'expensive as', 'as expensive than'],
          correctAnswer: 0,
          explanation: 'Estructura as + adjetivo + as.'
        }
      ]
    }
  },
  {
    id: 'a2-u22-e32',
    type: 'speaking-analysis',
    level: 'A2',
    topic: 'City vs Country',
    topicName: 'City vs Country',
    difficulty: 'easy',
    content: {
      title: 'Pronunciation: Worse',
      instructions: 'Di "It is worse than before".',
      questions: [
        {
          id: 'q1',
          text: 'It is worse than before',
          correctAnswer: 'It is worse than before',
          explanation: 'Pronuncia "worse" como /wɜːs/.'
        }
      ]
    }
  },
  {
    id: 'a2-u22-e33',
    type: 'fill-blank',
    level: 'A2',
    topic: 'City vs Country',
    topicName: 'City vs Country',
    difficulty: 'hard',
    content: {
      title: 'Negative Comparison',
      instructions: 'Completa.',
      questions: [
        {
          id: 'q1',
          text: 'This village is not ___ interesting as that city.',
          correctAnswer: 'as',
          explanation: 'En negativo: not as... as.'
        }
      ]
    }
  },
  {
    id: 'a2-u22-e34',
    type: 'sentence-building',
    level: 'A2',
    topic: 'City vs Country',
    topicName: 'City vs Country',
    difficulty: 'medium',
    content: {
      title: 'Health comparison',
      instructions: 'Ordena la frase.',
      sentences: [
        {
          id: 's1',
          words: ['Walking', 'is', 'better', 'than', 'driving', '.'],
          correctSentence: 'Walking is better than driving.',
          translation: 'Caminar es mejor que conducir.',
          hint: 'Comparativo de "good".',
          explanation: 'Comparando dos actividades.',
          points: 10
        }
      ]
    } as any
  },
  {
    id: 'a2-u22-e35',
    type: 'matching',
    level: 'A2',
    topic: 'City vs Country',
    topicName: 'City vs Country',
    difficulty: 'medium',
    content: {
      title: 'Comparison Mix',
      instructions: 'Une las frases con su sentido.',
      pairs: [
        { id: '1', left: 'It’s larger than...', right: 'Different size' },
        { id: '2', left: 'It’s as large as...', right: 'Same size' },
        { id: '3', left: 'It’s the largest...', right: 'Superlative' },
        { id: '4', left: 'It’s not as large as...', right: 'One is smaller' }
      ],
      explanation: 'Diferentes formas de comparar.'
    } as any
  },
  {
    id: 'a2-u22-e36',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'City vs Country',
    topicName: 'City vs Country',
    difficulty: 'hard',
    content: {
      title: 'Complex Comparison',
      instructions: 'Elige la opción gramaticalmente correcta.',
      questions: [
        {
          id: 'q1',
          question: 'The traffic here is much ___ than in my hometown.',
          options: ['worse', 'badder', 'more bad'],
          correctAnswer: 0,
          explanation: 'Comparativo de "bad" es "worse".'
        }
      ]
    }
  },

  // --- SUB-TOPIC 4: Contrasting Lifestyles (37-45) ---
  {
    id: 'a2-u22-e37',
    type: 'flashcard',
    level: 'A2',
    topic: 'City vs Country',
    topicName: 'City vs Country',
    difficulty: 'easy',
    content: {
      items: [
        {
          front: 'Estilo de vida',
          back: 'Lifestyle',
          example: 'I prefer a quiet lifestyle.',
          pronunciation: '/ˈlaɪfstaɪl/',
          explanation: 'La forma en que vive una persona.'
        }
      ]
    } as any
  },
  {
    id: 'a2-u22-e38',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'City vs Country',
    topicName: 'City vs Country',
    difficulty: 'medium',
    content: {
      title: 'Preferences',
      instructions: 'Elige la opción correcta.',
      questions: [
        {
          id: 'q1',
          question: 'I’d rather live in the city because there is more ___ .',
          options: ['entertainment', 'pollution', 'silence'],
          correctAnswer: 0,
          explanation: '"Entertainment" (entretenimiento) es una ventaja de la ciudad.'
        }
      ]
    }
  },
  {
    id: 'a2-u22-e39',
    type: 'fill-blank',
    level: 'A2',
    topic: 'City vs Country',
    topicName: 'City vs Country',
    difficulty: 'medium',
    content: {
      title: 'Convenience',
      instructions: 'Completa la frase.',
      questions: [
        {
          id: 'q1',
          text: 'Shops are very ___ in the city center.',
          correctAnswer: 'convenient',
          explanation: '"Convenient" significa cómodo o práctico.'
        }
      ]
    }
  },
  {
    id: 'a2-u22-e40',
    type: 'sentence-building',
    level: 'A2',
    topic: 'City vs Country',
    topicName: 'City vs Country',
    difficulty: 'medium',
    content: {
      title: 'City vs Country opinion',
      instructions: 'Ordena la frase.',
      sentences: [
        {
          id: 's1',
          words: ['The', 'country', 'is', 'more', 'relaxing', 'than', ' the', 'city', '.'],
          correctSentence: 'The country is more relaxing than the city.',
          translation: 'El campo es más relajante que la ciudad.',
          hint: 'Usa "more".',
          explanation: 'Comparativo de superioridad.',
          points: 10
        }
      ]
    } as any
  },
  {
    id: 'a2-u22-e41',
    type: 'matching',
    level: 'A2',
    topic: 'City vs Country',
    topicName: 'City vs Country',
    difficulty: 'medium',
    content: {
      title: 'Pros and Cons',
      instructions: 'Une la ventaja con el lugar.',
      pairs: [
        { id: '1', left: 'Fresh air', right: 'Country' },
        { id: '2', left: 'Nightlife', right: 'City' },
        { id: '3', left: 'Quiet', right: 'Country' },
        { id: '4', left: 'Job opportunities', right: 'City' }
      ],
      explanation: 'Ventajas de cada entorno.'
    } as any
  },
  {
    id: 'a2-u22-e42',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'City vs Country',
    topicName: 'City vs Country',
    difficulty: 'medium',
    content: {
      title: 'Moving',
      instructions: 'Elige la opción correcta.',
      questions: [
        {
          id: 'q1',
          question: 'We decided to move ___ from the city.',
          options: ['away', 'out', 'off'],
          correctAnswer: 0,
          explanation: '"Move away" significa mudarse lejos.'
        }
      ]
    }
  },
  {
    id: 'a2-u22-e43',
    type: 'speaking-analysis',
    level: 'A2',
    topic: 'City vs Country',
    topicName: 'City vs Country',
    difficulty: 'medium',
    content: {
      title: 'Pronunciation: Lifestyle',
      instructions: 'Di "I prefer the urban lifestyle".',
      questions: [
        {
          id: 'q1',
          text: 'I prefer the urban lifestyle',
          correctAnswer: 'I prefer the urban lifestyle',
          explanation: 'Pronuncia "urban" como /ˈɜːbən/.'
        }
      ]
    }
  },
  {
    id: 'a2-u22-e44',
    type: 'fill-blank',
    level: 'A2',
    topic: 'City vs Country',
    topicName: 'City vs Country',
    difficulty: 'hard',
    content: {
      title: 'Atmosphere',
      instructions: 'Completa la frase.',
      questions: [
        {
          id: 'q1',
          text: 'This small town has a very ___ atmosphere.',
          correctAnswer: 'friendly',
          explanation: '"Friendly" significa amigable.'
        }
      ]
    }
  },
  {
    id: 'a2-u22-e45',
    type: 'sentence-building',
    level: 'A2',
    topic: 'City vs Country',
    topicName: 'City vs Country',
    difficulty: 'hard',
    content: {
      title: 'Commuting',
      instructions: 'Ordena la frase.',
      sentences: [
        {
          id: 's1',
          words: ['I', 'commute', 'to', 'the', 'city', 'by', 'train', '.'],
          correctSentence: 'I commute to the city by train.',
          translation: 'Viajo a diario a la ciudad en tren.',
          hint: 'Usa "commute".',
          explanation: '"Commute" es viajar diariamente al trabajo.',
          points: 10
        }
      ]
    } as any
  },

  // --- SUB-TOPIC 5: Review & Mixed Practice (46-50) ---
  {
    id: 'a2-u22-e46',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'City vs Country',
    topicName: 'City vs Country',
    difficulty: 'medium',
    content: {
      title: 'Mixed Review',
      instructions: 'Elige la opción correcta.',
      questions: [
        {
          id: 'q1',
          question: 'The traffic is ___ in the morning than in the evening.',
          options: ['worse', 'badder', 'worst'],
          correctAnswer: 0,
          explanation: 'Comparativo de "bad".'
        }
      ]
    }
  },
  {
    id: 'a2-u22-e47',
    type: 'fill-blank',
    level: 'A2',
    topic: 'City vs Country',
    topicName: 'City vs Country',
    difficulty: 'medium',
    content: {
      title: 'Urban review',
      instructions: 'Completa.',
      questions: [
        {
          id: 'q1',
          text: 'You should walk on the ___ , not in the street.',
          correctAnswer: 'sidewalk',
          explanation: '"Sidewalk" (o pavement) es la acera.'
        }
      ]
    }
  },
  {
    id: 'a2-u22-e48',
    type: 'sentence-building',
    level: 'A2',
    topic: 'City vs Country',
    topicName: 'City vs Country',
    difficulty: 'medium',
    content: {
      title: 'Comparison review',
      instructions: 'Ordena la frase.',
      sentences: [
        {
          id: 's1',
          words: ['This', 'park', 'is', 'not', 'as', 'big', 'as', 'that', 'one', '.'],
          correctSentence: 'This park is not as big as that one.',
          translation: 'Este parque no es tan grande como aquel.',
          hint: 'Usa "as... as".',
          explanation: 'Comparativa de igualdad en negativo.',
          points: 10
        }
      ]
    } as any
  },
  {
    id: 'a2-u22-e49',
    type: 'matching',
    level: 'A2',
    topic: 'City vs Country',
    topicName: 'City vs Country',
    difficulty: 'medium',
    content: {
      title: 'Place Review',
      instructions: 'Une el lugar con su descripción.',
      pairs: [
        { id: '1', left: 'Cottage', right: 'A small house in the country' },
        { id: '2', left: 'Skyscraper', right: 'A very tall building' },
        { id: '3', left: 'Square', right: 'An open area in a city' },
        { id: '4', left: 'Field', right: 'Area for farming' }
      ],
      explanation: 'Repaso de vocabulario de lugares.'
    } as any
  },
  {
    id: 'a2-u22-e50',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'City vs Country',
    topicName: 'City vs Country',
    difficulty: 'hard',
    content: {
      title: 'Final Challenge',
      instructions: 'Elige la opción correcta.',
      questions: [
        {
          id: 'q1',
          question: 'Life in the country is ___ but ___ than in the city.',
          options: ['quieter / healthier', 'quietest / healthy', 'more quiet / healthiest'],
          correctAnswer: 0,
          explanation: 'Dos comparativos cortos con -er.'
        }
      ]
    }
  }
];
