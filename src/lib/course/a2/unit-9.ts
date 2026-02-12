import { Exercise } from '@/lib/exercise-generator';

export const UNIT_9_EXERCISES: Exercise[] = [
  // --- SUB-TOPIC 1: Clothes Vocabulary (1-10) ---
  {
    id: 'a2-u9-e1',
    type: 'flashcard',
    level: 'A2',
    topic: 'Shopping & Clothes',
    topicName: 'Shopping & Clothes',
    difficulty: 'easy',
    content: {
      items: [
        {
          front: 'Prenda de ropa',
          back: 'Item of clothing / Garment',
          example: 'She bought a new item of clothing.',
          pronunciation: '/ˈaɪtəm əv ˈkləʊðɪŋ/',
          explanation: 'Término general para cualquier pieza de ropa.'
        }
      ]
    } as any
  },
  {
    id: 'a2-u9-e2',
    type: 'matching',
    level: 'A2',
    topic: 'Shopping & Clothes',
    topicName: 'Shopping & Clothes',
    difficulty: 'easy',
    content: {
      title: 'Common Clothes',
      instructions: 'Une la prenda con su traducción.',
      pairs: [
        { id: '1', left: 'Trousers / Pants', right: 'Pantalones' },
        { id: '2', left: 'Skirt', right: 'Falda' },
        { id: '3', left: 'Suit', right: 'Traje' },
        { id: '4', left: 'Jumper / Sweater', right: 'Jersey / Suéter' },
        { id: '5', left: 'Trainers / Sneakers', right: 'Zapatillas de deporte' }
      ],
      explanation: 'Vocabulario básico de ropa.'
    } as any
  },
  {
    id: 'a2-u9-e3',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Shopping & Clothes',
    topicName: 'Shopping & Clothes',
    difficulty: 'easy',
    content: {
      title: 'Wearing vs Carrying',
      instructions: 'Elige el verbo correcto.',
      questions: [
        {
          id: 'q1',
          question: 'Today, I am ___ a blue shirt.',
          options: ['wearing', 'carrying', 'having'],
          correctAnswer: 0,
          explanation: 'Usamos "wear" para la ropa que llevamos puesta.'
        }
      ]
    }
  },
  {
    id: 'a2-u9-e4',
    type: 'fill-blank',
    level: 'A2',
    topic: 'Shopping & Clothes',
    topicName: 'Shopping & Clothes',
    difficulty: 'easy',
    content: {
      title: 'Accessories',
      instructions: 'Completa.',
      questions: [
        {
          id: 'q1',
          text: 'He wears a ___ around his neck when it is cold.',
          correctAnswer: 'scarf',
          explanation: 'La bufanda es el "scarf".'
        }
      ]
    }
  },
  {
    id: 'a2-u9-e5',
    type: 'sentence-building',
    level: 'A2',
    topic: 'Shopping & Clothes',
    topicName: 'Shopping & Clothes',
    difficulty: 'medium',
    content: {
      title: 'Describing what someone wears',
      instructions: 'Ordena las palabras.',
      sentences: [
        {
          id: 's1',
          words: ['She', 'is', 'wearing', 'a', 'beautiful', 'red', 'dress', '.'],
          correctSentence: 'She is wearing a beautiful red dress.',
          translation: 'Ella lleva puesto un hermoso vestido rojo.',
          hint: 'Adjetivo opinión + color.',
          explanation: 'El orden de adjetivos suele ser opinión antes que color.',
          points: 10
        }
      ]
    } as any
  },
  {
    id: 'a2-u9-e6',
    type: 'flashcard',
    level: 'A2',
    topic: 'Shopping & Clothes',
    topicName: 'Shopping & Clothes',
    difficulty: 'easy',
    content: {
      items: [
        {
          front: 'Probador',
          back: 'Fitting room / Changing room',
          example: 'Where is the fitting room?',
          pronunciation: '/ˈfɪtɪŋ ruːm/',
          explanation: 'El lugar donde te pruebas la ropa en una tienda.'
        }
      ]
    } as any
  },
  {
    id: 'a2-u9-e7',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Shopping & Clothes',
    topicName: 'Shopping & Clothes',
    difficulty: 'medium',
    content: {
      title: 'Try on',
      instructions: 'Elige la opción correcta.',
      questions: [
        {
          id: 'q1',
          question: 'Can I ___ these jeans on?',
          options: ['try', 'wear', 'put'],
          correctAnswer: 0,
          explanation: '"Try on" significa probarse ropa.'
        }
      ]
    }
  },
  {
    id: 'a2-u9-e8',
    type: 'speaking-analysis',
    level: 'A2',
    topic: 'Shopping & Clothes',
    topicName: 'Shopping & Clothes',
    difficulty: 'easy',
    content: {
      title: 'Pronunciation: Trousers',
      instructions: 'Di "Trousers".',
      questions: [
        {
          id: 'q1',
          text: 'Trousers',
          correctAnswer: 'Trousers',
          explanation: 'La "ou" suena como /aʊ/.'
        }
      ]
    }
  },
  {
    id: 'a2-u9-e9',
    type: 'fill-blank',
    level: 'A2',
    topic: 'Shopping & Clothes',
    topicName: 'Shopping & Clothes',
    difficulty: 'medium',
    content: {
      title: 'Sizes',
      instructions: 'Completa.',
      questions: [
        {
          id: 'q1',
          text: 'Do you have this in a larger ___?',
          correctAnswer: 'size',
          explanation: 'La talla es el "size".'
        }
      ]
    }
  },
  {
    id: 'a2-u9-e10',
    type: 'sentence-building',
    level: 'A2',
    topic: 'Shopping & Clothes',
    topicName: 'Shopping & Clothes',
    difficulty: 'medium',
    content: {
      title: 'Shopping request',
      instructions: 'Ordena.',
      sentences: [
        {
          id: 's1',
          words: ['I', 'am', 'looking', 'for', 'a', 'new', 'coat', '.'],
          correctSentence: 'I am looking for a new coat.',
          translation: 'Estoy buscando un abrigo nuevo.',
          hint: 'Usa "looking for".',
          explanation: '"Looking for" significa buscar.',
          points: 10
        }
      ]
    } as any
  },

  // --- SUB-TOPIC 2: Comparatives (11-20) ---
  {
    id: 'a2-u9-e11',
    type: 'flashcard',
    level: 'A2',
    topic: 'Shopping & Clothes',
    topicName: 'Shopping & Clothes',
    difficulty: 'easy',
    content: {
      items: [
        {
          front: 'Más barato que',
          back: 'Cheaper than',
          example: 'This shirt is cheaper than that one.',
          pronunciation: '/ˈtʃiːpə ðæn/',
          explanation: 'Comparativo de adjetivos cortos: adjetivo + er + than.'
        }
      ]
    } as any
  },
  {
    id: 'a2-u9-e12',
    type: 'matching',
    level: 'A2',
    topic: 'Shopping & Clothes',
    topicName: 'Shopping & Clothes',
    difficulty: 'easy',
    content: {
      title: 'Comparative adjectives',
      instructions: 'Une el adjetivo con su forma comparativa.',
      pairs: [
        { id: '1', left: 'Small', right: 'Smaller' },
        { id: '2', left: 'Big', right: 'Bigger' },
        { id: '3', left: 'Happy', right: 'Happier' },
        { id: '4', left: 'Nice', right: 'Nicer' }
      ],
      explanation: 'Reglas de formación de comparativos cortos.'
    } as any
  },
  {
    id: 'a2-u9-e13',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Shopping & Clothes',
    topicName: 'Shopping & Clothes',
    difficulty: 'medium',
    content: {
      title: 'Long adjectives',
      instructions: 'Elige la forma comparativa correcta.',
      questions: [
        {
          id: 'q1',
          question: 'This dress is ___ than the other one.',
          options: ['expensiver', 'more expensive', 'most expensive'],
          correctAnswer: 1,
          explanation: 'Para adjetivos largos, usamos "more" + adjetivo.'
        }
      ]
    }
  },
  {
    id: 'a2-u9-e14',
    type: 'fill-blank',
    level: 'A2',
    topic: 'Shopping & Clothes',
    topicName: 'Shopping & Clothes',
    difficulty: 'medium',
    content: {
      title: 'Irregular comparatives',
      instructions: 'Completa con el comparativo de "good".',
      questions: [
        {
          id: 'q1',
          text: 'This coat is ___ than the old one.',
          correctAnswer: 'better',
          explanation: '"Better" es el comparativo de "good".'
        }
      ]
    }
  },
  {
    id: 'a2-u9-e15',
    type: 'sentence-building',
    level: 'A2',
    topic: 'Shopping & Clothes',
    topicName: 'Shopping & Clothes',
    difficulty: 'medium',
    content: {
      title: 'Building comparisons',
      instructions: 'Ordena las palabras.',
      sentences: [
        {
          id: 's1',
          words: ['The', 'red', 'shoes', 'are', 'nicer', 'than', 'the', 'black', 'ones', '.'],
          correctSentence: 'The red shoes are nicer than the black ones.',
          translation: 'Los zapatos rojos son más bonitos que los negros.',
          hint: 'Empieza con "The red shoes".',
          explanation: 'Estructura comparativa completa.',
          points: 10
        }
      ]
    } as any
  },
  {
    id: 'a2-u9-e16',
    type: 'flashcard',
    level: 'A2',
    topic: 'Shopping & Clothes',
    topicName: 'Shopping & Clothes',
    difficulty: 'easy',
    content: {
      items: [
        {
          front: 'Peor que',
          back: 'Worse than',
          example: 'The service here is worse than yesterday.',
          pronunciation: '/wɜːs ðæn/',
          explanation: 'Comparativo irregular de "bad".'
        }
      ]
    } as any
  },
  {
    id: 'a2-u9-e17',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Shopping & Clothes',
    topicName: 'Shopping & Clothes',
    difficulty: 'medium',
    content: {
      title: 'More vs -er',
      instructions: 'Elige la correcta.',
      questions: [
        {
          id: 'q1',
          question: 'This shop is ___ than the supermarket.',
          options: ['more modern', 'moderner', 'most modern'],
          correctAnswer: 0,
          explanation: '"Modern" es un adjetivo de dos sílabas que suele usar "more".'
        }
      ]
    }
  },
  {
    id: 'a2-u9-e18',
    type: 'speaking-analysis',
    level: 'A2',
    topic: 'Shopping & Clothes',
    topicName: 'Shopping & Clothes',
    difficulty: 'medium',
    content: {
      title: 'Pronunciation: Better',
      instructions: 'Di "It is better than I expected".',
      questions: [
        {
          id: 'q1',
          text: 'It is better than I expected',
          correctAnswer: 'It is better than I expected',
          explanation: 'La "tt" de "better" suena como una "d" suave en inglés americano.'
        }
      ]
    }
  },
  {
    id: 'a2-u9-e19',
    type: 'fill-blank',
    level: 'A2',
    topic: 'Shopping & Clothes',
    topicName: 'Shopping & Clothes',
    difficulty: 'hard',
    content: {
      title: 'As ... as',
      instructions: 'Completa la comparación de igualdad.',
      questions: [
        {
          id: 'q1',
          text: 'This bag is ___ expensive as that one.',
          correctAnswer: 'as',
          explanation: 'Usamos "as + adjetivo + as" para indicar igualdad.'
        }
      ]
    }
  },
  {
    id: 'a2-u9-e20',
    type: 'sentence-building',
    level: 'A2',
    topic: 'Shopping & Clothes',
    topicName: 'Shopping & Clothes',
    difficulty: 'hard',
    content: {
      title: 'Complex comparison',
      instructions: 'Ordena.',
      sentences: [
        {
          id: 's1',
          words: ['Online', 'shopping', 'is', 'easier', 'than', 'going', 'to', 'shops', '.'],
          correctSentence: 'Online shopping is easier than going to shops.',
          translation: 'Comprar online es más fácil que ir a las tiendas.',
          hint: 'Easier es el comparativo.',
          explanation: 'Comparación de dos actividades.',
          points: 15
        }
      ]
    } as any
  },

  // --- SUB-TOPIC 3: Shopping Transactions (21-30) ---
  {
    id: 'a2-u9-e21',
    type: 'flashcard',
    level: 'A2',
    topic: 'Shopping & Clothes',
    topicName: 'Shopping & Clothes',
    difficulty: 'easy',
    content: {
      items: [
        {
          front: 'Rebajas',
          back: 'Sales',
          example: 'I bought this during the January sales.',
          pronunciation: '/seɪlz/',
          explanation: 'Periodo en el que las tiendas bajan los precios.'
        }
      ]
    } as any
  },
  {
    id: 'a2-u9-e22',
    type: 'matching',
    level: 'A2',
    topic: 'Shopping & Clothes',
    topicName: 'Shopping & Clothes',
    difficulty: 'easy',
    content: {
      title: 'In the shop',
      instructions: 'Une el término con su significado.',
      pairs: [
        { id: '1', left: 'Customer', right: 'Cliente' },
        { id: '2', left: 'Shop assistant', right: 'Dependiente/a' },
        { id: '3', left: 'Cash desk / Till', right: 'Caja' },
        { id: '4', left: 'Receipt', right: 'Recibo / Ticket de compra' }
      ],
      explanation: 'Personas y lugares en una tienda.'
    } as any
  },
  {
    id: 'a2-u9-e23',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Shopping & Clothes',
    topicName: 'Shopping & Clothes',
    difficulty: 'medium',
    content: {
      title: 'How much?',
      instructions: 'Elige la pregunta de precio.',
      questions: [
        {
          id: 'q1',
          question: '___ is this T-shirt?',
          options: ['How much', 'How many', 'What price'],
          correctAnswer: 0,
          explanation: 'Usamos "How much" para preguntar por el precio.'
        }
      ]
    }
  },
  {
    id: 'a2-u9-e24',
    type: 'fill-blank',
    level: 'A2',
    topic: 'Shopping & Clothes',
    topicName: 'Shopping & Clothes',
    difficulty: 'medium',
    content: {
      title: 'Returns',
      instructions: 'Completa.',
      questions: [
        {
          id: 'q1',
          text: 'I would like a ___ for this broken item.',
          correctAnswer: 'refund',
          explanation: '"Refund" es la devolución del dinero.'
        }
      ]
    }
  },
  {
    id: 'a2-u9-e25',
    type: 'sentence-building',
    level: 'A2',
    topic: 'Shopping & Clothes',
    topicName: 'Shopping & Clothes',
    difficulty: 'medium',
    content: {
      title: 'Payment method',
      instructions: 'Ordena.',
      sentences: [
        {
          id: 's1',
          words: ['Can', 'I', 'pay', 'by', 'credit', 'card', '?'],
          correctSentence: 'Can I pay by credit card?',
          translation: '¿Puedo pagar con tarjeta de crédito?',
          hint: 'Empieza con "Can".',
          explanation: 'Pregunta común en el momento del pago.',
          points: 10
        }
      ]
    } as any
  },
  {
    id: 'a2-u9-e26',
    type: 'flashcard',
    level: 'A2',
    topic: 'Shopping & Clothes',
    topicName: 'Shopping & Clothes',
    difficulty: 'easy',
    content: {
      items: [
        {
          front: 'Descuento',
          back: 'Discount',
          example: 'Can I get a student discount?',
          pronunciation: '/ˈdɪskaʊnt/',
          explanation: 'Una reducción en el precio.'
        }
      ]
    } as any
  },
  {
    id: 'a2-u9-e27',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Shopping & Clothes',
    topicName: 'Shopping & Clothes',
    difficulty: 'medium',
    content: {
      title: 'Change',
      instructions: 'Elige la correcta.',
      questions: [
        {
          id: 'q1',
          question: 'Here is your ___ and your receipt.',
          options: ['change', 'money', 'rest'],
          correctAnswer: 0,
          explanation: '"Change" es la vuelta (dinero que sobra).'
        }
      ]
    }
  },
  {
    id: 'a2-u9-e28',
    type: 'speaking-analysis',
    level: 'A2',
    topic: 'Shopping & Clothes',
    topicName: 'Shopping & Clothes',
    difficulty: 'medium',
    content: {
      title: 'Pronunciation: Receipt',
      instructions: 'Di "Receipt".',
      questions: [
        {
          id: 'q1',
          text: 'Receipt',
          correctAnswer: 'Receipt',
          explanation: 'La "p" es muda: /rɪˈsiːt/.'
        }
      ]
    }
  },
  {
    id: 'a2-u9-e29',
    type: 'fill-blank',
    level: 'A2',
    topic: 'Shopping & Clothes',
    topicName: 'Shopping & Clothes',
    difficulty: 'hard',
    content: {
      title: 'Trolley vs Basket',
      instructions: 'Completa.',
      questions: [
        {
          id: 'q1',
          text: 'I have too many things for a basket, I need a ___ .',
          correctAnswer: 'trolley',
          explanation: 'El carrito de la compra es el "trolley" (o "cart").'
        }
      ]
    }
  },
  {
    id: 'a2-u9-e30',
    type: 'sentence-building',
    level: 'A2',
    topic: 'Shopping & Clothes',
    topicName: 'Shopping & Clothes',
    difficulty: 'hard',
    content: {
      title: 'Helping a customer',
      instructions: 'Ordena.',
      sentences: [
        {
          id: 's1',
          words: ['How', 'can', 'I', 'help', 'you', 'today', '?'],
          correctSentence: 'How can I help you today?',
          translation: '¿Cómo le puedo ayudar hoy?',
          hint: 'Pregunta del dependiente.',
          explanation: 'Frase estándar de atención al cliente.',
          points: 15
        }
      ]
    } as any
  },

  // --- SUB-TOPIC 4: Superlatives (31-40) ---
  {
    id: 'a2-u9-e31',
    type: 'flashcard',
    level: 'A2',
    topic: 'Shopping & Clothes',
    topicName: 'Shopping & Clothes',
    difficulty: 'easy',
    content: {
      items: [
        {
          front: 'El más barato',
          back: 'The cheapest',
          example: 'This is the cheapest shop in town.',
          pronunciation: '/ðə ˈtʃiːpɪst/',
          explanation: 'Superlativo de adjetivos cortos: the + adjetivo + est.'
        }
      ]
    } as any
  },
  {
    id: 'a2-u9-e32',
    type: 'matching',
    level: 'A2',
    topic: 'Shopping & Clothes',
    topicName: 'Shopping & Clothes',
    difficulty: 'easy',
    content: {
      title: 'Superlative adjectives',
      instructions: 'Une el adjetivo con su forma superlativa.',
      pairs: [
        { id: '1', left: 'Large', right: 'The largest' },
        { id: '2', left: 'Funny', right: 'The funniest' },
        { id: '3', left: 'Hot', right: 'The hottest' },
        { id: '4', left: 'Fast', right: 'The fastest' }
      ],
      explanation: 'Reglas de formación de superlativos cortos.'
    } as any
  },
  {
    id: 'a2-u9-e33',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Shopping & Clothes',
    topicName: 'Shopping & Clothes',
    difficulty: 'medium',
    content: {
      title: 'Long superlatives',
      instructions: 'Elige la forma superlativa correcta.',
      questions: [
        {
          id: 'q1',
          question: 'This is ___ watch in the world.',
          options: ['the most expensive', 'the expensivest', 'more expensive'],
          correctAnswer: 0,
          explanation: 'Para adjetivos largos usamos "the most" + adjetivo.'
        }
      ]
    }
  },
  {
    id: 'a2-u9-e34',
    type: 'fill-blank',
    level: 'A2',
    topic: 'Shopping & Clothes',
    topicName: 'Shopping & Clothes',
    difficulty: 'medium',
    content: {
      title: 'Irregular superlatives',
      instructions: 'Completa con el superlativo de "bad".',
      questions: [
        {
          id: 'q1',
          text: 'That was the ___ film I have ever seen.',
          correctAnswer: 'worst',
          explanation: '"Worst" es el superlativo de "bad".'
        }
      ]
    }
  },
  {
    id: 'a2-u9-e35',
    type: 'sentence-building',
    level: 'A2',
    topic: 'Shopping & Clothes',
    topicName: 'Shopping & Clothes',
    difficulty: 'medium',
    content: {
      title: 'Building superlatives',
      instructions: 'Ordena.',
      sentences: [
        {
          id: 's1',
          words: ['Mount', 'Everest', 'is', 'the', 'highest', 'mountain', '.'],
          correctSentence: 'Mount Everest is the highest mountain.',
          translation: 'El Monte Everest es la montaña más alta.',
          hint: 'Usa "the highest".',
          explanation: 'Estructura superlativa completa.',
          points: 10
        }
      ]
    } as any
  },
  {
    id: 'a2-u9-e36',
    type: 'flashcard',
    level: 'A2',
    topic: 'Shopping & Clothes',
    topicName: 'Shopping & Clothes',
    difficulty: 'easy',
    content: {
      items: [
        {
          front: 'El mejor',
          back: 'The best',
          example: 'He is the best player in the team.',
          pronunciation: '/ðə best/',
          explanation: 'Superlativo irregular de "good".'
        }
      ]
    } as any
  },
  {
    id: 'a2-u9-e37',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Shopping & Clothes',
    topicName: 'Shopping & Clothes',
    difficulty: 'medium',
    content: {
      title: 'Superlative in context',
      instructions: 'Elige.',
      questions: [
        {
          id: 'q1',
          question: 'Is this the ___ dress in the shop?',
          options: ['nicest', 'nicer', 'nice'],
          correctAnswer: 0,
          explanation: 'Al comparar con todos en un grupo (la tienda), usamos el superlativo.'
        }
      ]
    }
  },
  {
    id: 'a2-u9-e38',
    type: 'speaking-analysis',
    level: 'A2',
    topic: 'Shopping & Clothes',
    topicName: 'Shopping & Clothes',
    difficulty: 'medium',
    content: {
      title: 'Pronunciation: The worst',
      instructions: 'Di "It was the worst day".',
      questions: [
        {
          id: 'q1',
          text: 'It was the worst day',
          correctAnswer: 'It was the worst day',
          explanation: 'Recuerda que "worst" termina en "t".'
        }
      ]
    }
  },
  {
    id: 'a2-u9-e39',
    type: 'fill-blank',
    level: 'A2',
    topic: 'Shopping & Clothes',
    topicName: 'Shopping & Clothes',
    difficulty: 'hard',
    content: {
      title: 'Most interesting',
      instructions: 'Completa con el superlativo de "interesting".',
      questions: [
        {
          id: 'q1',
          text: 'This is the ___ book I have read.',
          correctAnswer: 'most interesting',
          explanation: 'Adjetivo largo en superlativo.'
        }
      ]
    }
  },
  {
    id: 'a2-u9-e40',
    type: 'sentence-building',
    level: 'A2',
    topic: 'Shopping & Clothes',
    topicName: 'Shopping & Clothes',
    difficulty: 'hard',
    content: {
      title: 'Comparative and Superlative mix',
      instructions: 'Ordena.',
      sentences: [
        {
          id: 's1',
          words: ['This', 'laptop', 'is', 'better', 'but', 'that', 'one', 'is', 'the', 'cheapest', '.'],
          correctSentence: 'This laptop is better but that one is the cheapest.',
          translation: 'Este portátil es mejor pero ese es el más barato.',
          hint: 'Manten el orden.',
          explanation: 'Uso de ambas formas comparativas en una oración.',
          points: 15
        }
      ]
    } as any
  },

  // --- SUB-TOPIC 5: Review & Mix (41-50) ---
  {
    id: 'a2-u9-e41',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Shopping & Clothes',
    topicName: 'Shopping & Clothes',
    difficulty: 'medium',
    content: {
      title: 'Review: Items of clothing',
      instructions: '¿Cuál no es una prenda?',
      questions: [
        {
          id: 'q1',
          question: 'Which one is NOT clothing?',
          options: ['Jeans', 'Socks', 'Wallet'],
          correctAnswer: 2,
          explanation: 'La cartera (wallet) es un accesorio, no una prenda de ropa.'
        }
      ]
    }
  },
  {
    id: 'a2-u9-e42',
    type: 'fill-blank',
    level: 'A2',
    topic: 'Shopping & Clothes',
    topicName: 'Shopping & Clothes',
    difficulty: 'medium',
    content: {
      title: 'Review: Comparative spelling',
      instructions: 'Completa.',
      questions: [
        {
          id: 'q1',
          text: 'My new phone is ___ than my old one. (heavy)',
          correctAnswer: 'heavier',
          explanation: 'Cambiamos "y" por "i" + "er".'
        }
      ]
    }
  },
  {
    id: 'a2-u9-e43',
    type: 'sentence-building',
    level: 'A2',
    topic: 'Shopping & Clothes',
    topicName: 'Shopping & Clothes',
    difficulty: 'medium',
    content: {
      title: 'Review: Superlative rule',
      instructions: 'Ordena.',
      sentences: [
        {
          id: 's1',
          words: ['He', 'is', 'the', 'tallest', 'boy', 'in', 'the', 'class', '.'],
          correctSentence: 'He is the tallest boy in the class.',
          translation: 'Él es el chico más alto de la clase.',
          hint: 'Usa "the tallest".',
          explanation: 'Superlativo de un adjetivo corto.',
          points: 10
        }
      ]
    } as any
  },
  {
    id: 'a2-u9-e44',
    type: 'speaking-analysis',
    level: 'A2',
    topic: 'Shopping & Clothes',
    topicName: 'Shopping & Clothes',
    difficulty: 'hard',
    content: {
      title: 'Pronunciation: Expensive',
      instructions: 'Di "It is more expensive than I thought".',
      questions: [
        {
          id: 'q1',
          text: 'It is more expensive than I thought',
          correctAnswer: 'It is more expensive than I thought',
          explanation: 'Acento en "pen": ex-PEN-sive.'
        }
      ]
    }
  },
  {
    id: 'a2-u9-e45',
    type: 'matching',
    level: 'A2',
    topic: 'Shopping & Clothes',
    topicName: 'Shopping & Clothes',
    difficulty: 'medium',
    content: {
      title: 'Adjective degrees',
      instructions: 'Une el adjetivo con su superlativo.',
      pairs: [
        { id: '1', left: 'Good', right: 'The best' },
        { id: '2', left: 'Bad', right: 'The worst' },
        { id: '3', left: 'Far', right: 'The farthest / furthest' },
        { id: '4', left: 'Many', right: 'The most' }
      ],
      explanation: 'Superlativos irregulares y de cantidad.'
    } as any
  },
  {
    id: 'a2-u9-e46',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Shopping & Clothes',
    topicName: 'Shopping & Clothes',
    difficulty: 'medium',
    content: {
      title: 'Review: Shopping questions',
      instructions: '¿Qué pregunta el dependiente?',
      questions: [
        {
          id: 'q1',
          question: 'Would you like anything ___?',
          options: ['else', 'more', 'other'],
          correctAnswer: 0,
          explanation: '"Anything else" significa "algo más".'
        }
      ]
    }
  },
  {
    id: 'a2-u9-e47',
    type: 'fill-blank',
    level: 'A2',
    topic: 'Shopping & Clothes',
    topicName: 'Shopping & Clothes',
    difficulty: 'hard',
    content: {
      title: 'Review: Comparative irregular',
      instructions: 'Completa.',
      questions: [
        {
          id: 'q1',
          text: 'Today is ___ than yesterday. (bad)',
          correctAnswer: 'worse',
          explanation: 'Pasado comparativo de "bad".'
        }
      ]
    }
  },
  {
    id: 'a2-u9-e48',
    type: 'sentence-building',
    level: 'A2',
    topic: 'Shopping & Clothes',
    topicName: 'Shopping & Clothes',
    difficulty: 'hard',
    content: {
      title: 'Review: Shopping experience',
      instructions: 'Ordena.',
      sentences: [
        {
          id: 's1',
          words: ['This', 'is', 'the', 'best', 'shop', 'for', 'trainers', '.'],
          correctSentence: 'This is the best shop for trainers.',
          translation: 'Esta es la mejor tienda para zapatillas.',
          hint: 'Usa "the best".',
          explanation: 'Opinión superlativa sobre un comercio.',
          points: 10
        }
      ]
    } as any
  },
  {
    id: 'a2-u9-e49',
    type: 'speaking-analysis',
    level: 'A2',
    topic: 'Shopping & Clothes',
    topicName: 'Shopping & Clothes',
    difficulty: 'medium',
    content: {
      title: 'Pronunciation: Changing room',
      instructions: 'Di "Where is the changing room?".',
      questions: [
        {
          id: 'q1',
          text: 'Where is the changing room?',
          correctAnswer: 'Where is the changing room?',
          explanation: 'La "ch" suena como en chocolate.'
        }
      ]
    }
  },
  {
    id: 'a2-u9-e50',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Shopping & Clothes',
    topicName: 'Shopping & Clothes',
    difficulty: 'easy',
    content: {
      title: 'Final clothes check',
      instructions: '¿Qué va en los pies?',
      questions: [
        {
          id: 'q1',
          question: 'What do you wear on your feet?',
          options: ['Gloves', 'Socks', 'Hats'],
          correctAnswer: 1,
          explanation: 'Llevamos los calcetines (socks) en los pies.'
        }
      ]
    }
  }
];
