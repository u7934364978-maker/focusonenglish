import { Exercise } from '@/lib/exercise-generator';

/**
 * Unit 2: Drinks and Coffee Break
 */
export const UNIT_2_EXERCISES: Exercise[] = [
  {
    id: 'a1-u2-e1',
    type: 'multiple-choice',
    level: 'A1',
    topic: 'Drinks',
    topicName: 'Coffee Break',
    difficulty: 'easy',
    content: {
      title: 'Quiero un café',
      instructions: '¿Cómo se dice "café" en inglés?',
      questions: [
        {
          id: 'q1',
          question: 'I want a ________.',
          options: ['coffee', 'tea', 'water'],
          correctAnswer: 0,
          explanation: '"Coffee" es la traducción de café.'
        }
      ]
    }
  },
  {
    id: 'a1-u2-e2',
    type: 'flashcard',
    level: 'A1',
    topic: 'Drinks',
    topicName: 'Coffee Break',
    difficulty: 'easy',
    content: {
      items: [
        {
          front: 'Té',
          back: 'Tea',
          example: 'I want tea, please.',
          pronunciation: '/tiː/',
          explanation: '"Tea" se pronuncia como la letra "T" en inglés.'
        }
      ]
    } as any
  },
  {
    id: 'a1-u2-e3',
    type: 'sentence-building',
    level: 'A1',
    topic: 'Verbs',
    topicName: 'Coffee Break',
    difficulty: 'easy',
    content: {
      title: 'Yo quiero',
      instructions: 'Ordena las palabras para traducir "Yo quiero café".',
      sentences: [
        {
          id: 's1',
          words: ['coffee', 'want', 'I'],
          correctSentence: 'I want coffee',
          translation: 'Yo quiero café.',
          hint: 'Sujeto + Verbo + Objeto.',
          explanation: 'En inglés, el verbo "want" (querer) no cambia para la primera persona "I".'
        }
      ]
    } as any
  },
  {
    id: 'a1-u2-e4',
    type: 'multiple-choice',
    level: 'A1',
    topic: 'Drinks',
    topicName: 'Coffee Break',
    difficulty: 'easy',
    content: {
      title: 'Agua, por favor',
      instructions: '¿Cuál es la palabra para "agua"?',
      questions: [
        {
          id: 'q1',
          question: 'Please, I want ________.',
          options: ['milk', 'water', 'juice'],
          correctAnswer: 1,
          explanation: '"Water" es agua. La pronunciación varía entre el inglés británico y americano.'
        }
      ]
    }
  },
  {
    id: 'a1-u2-e5',
    type: 'speaking-analysis',
    level: 'A1',
    topic: 'Drinks',
    topicName: 'Coffee Break',
    difficulty: 'easy',
    content: {
      title: 'Pronunciación: Please',
      instructions: 'Di la palabra para "por favor".',
      questions: [
        {
          id: 'q1',
          text: 'Please',
          correctAnswer: 'Please',
          explanation: 'La "ea" suena como una "i" larga y la "s" final suena como una "z" suave.'
        }
      ]
    }
  },
  {
    id: 'a1-u2-e6',
    type: 'matching',
    level: 'A1',
    topic: 'Drinks',
    topicName: 'Coffee Break',
    difficulty: 'easy',
    content: {
      title: 'Bebidas básicas',
      instructions: 'Une el español con el inglés.',
      pairs: [
        { id: '1', left: 'Café', right: 'Coffee' },
        { id: '2', left: 'Té', right: 'Tea' },
        { id: '3', left: 'Agua', right: 'Water' },
        { id: '4', left: 'Leche', right: 'Milk' },
        { id: '5', left: 'Jugo / Zumo', right: 'Juice' }
      ],
      explanation: 'Estas son las bebidas más comunes que pedirás en una cafetería.'
    } as any
  },
  {
    id: 'a1-u2-e7',
    type: 'fill-blank',
    level: 'A1',
    topic: 'Drinks',
    topicName: 'Coffee Break',
    difficulty: 'easy',
    content: {
      title: 'Leche',
      instructions: 'Escribe la palabra para "leche".',
      questions: [
        {
          id: 'q1',
          text: 'Coffee with ___.',
          correctAnswer: 'milk',
          explanation: '"Milk" significa leche.'
        }
      ]
    }
  },
  {
    id: 'a1-u2-e8',
    type: 'multiple-choice',
    level: 'A1',
    topic: 'Verbs',
    topicName: 'Coffee Break',
    difficulty: 'easy',
    content: {
      title: 'Tú quieres',
      instructions: '¿Cómo se dice "Tú quieres" en inglés?',
      questions: [
        {
          id: 'q1',
          question: '________ want tea.',
          options: ['You', 'I', 'He'],
          correctAnswer: 0,
          explanation: '"You" es el pronombre para tú o usted.'
        }
      ]
    }
  },
  {
    id: 'a1-u2-e9',
    type: 'flashcard',
    level: 'A1',
    topic: 'Drinks',
    topicName: 'Coffee Break',
    difficulty: 'easy',
    content: {
      items: [
        {
          front: 'Azúcar',
          back: 'Sugar',
          example: 'I want coffee with sugar.',
          pronunciation: '/ˈʃʊɡ.ər/',
          explanation: 'La "s" inicial suena como "sh".'
        }
      ]
    } as any
  },
  {
    id: 'a1-u2-e10',
    type: 'sentence-building',
    level: 'A1',
    topic: 'Drinks',
    topicName: 'Coffee Break',
    difficulty: 'easy',
    content: {
      title: 'Con leche',
      instructions: 'Ordena para decir "Té con leche".',
      sentences: [
        {
          id: 's1',
          words: ['milk', 'with', 'Tea'],
          correctSentence: 'Tea with milk',
          translation: 'Té con leche.',
          hint: 'Usa "with" para decir "con".',
          explanation: '"With" es la preposición que significa "con".'
        }
      ]
    } as any
  },
  {
    id: 'a1-u2-e11',
    type: 'multiple-choice',
    level: 'A1',
    topic: 'Drinks',
    topicName: 'Coffee Break',
    difficulty: 'easy',
    content: {
      title: 'Azúcar o no',
      instructions: '¿Cuál es la palabra para "sin"?',
      questions: [
        {
          id: 'q1',
          question: 'Coffee ________ sugar, please.',
          options: ['with', 'without', 'and'],
          correctAnswer: 1,
          explanation: '"Without" significa sin.'
        }
      ]
    }
  },
  {
    id: 'a1-u2-e12',
    type: 'speaking-analysis',
    level: 'A1',
    topic: 'Drinks',
    topicName: 'Coffee Break',
    difficulty: 'easy',
    content: {
      title: 'Pronunciación: Coffee',
      instructions: 'Di la palabra para "café".',
      questions: [
        {
          id: 'q1',
          text: 'Coffee',
          correctAnswer: 'Coffee',
          explanation: 'Asegúrate de acentuar la primera sílaba: CO-ffee.'
        }
      ]
    }
  },
  {
    id: 'a1-u2-e13',
    type: 'matching',
    level: 'A1',
    topic: 'Modifiers',
    topicName: 'Coffee Break',
    difficulty: 'easy',
    content: {
      title: 'Complementos',
      instructions: 'Une las parejas de palabras.',
      pairs: [
        { id: '1', left: 'Con', right: 'With' },
        { id: '2', left: 'Sin', right: 'Without' },
        { id: '3', left: 'Azúcar', right: 'Sugar' },
        { id: '4', left: 'Caliente', right: 'Hot' },
        { id: '5', left: 'Frío', right: 'Cold' }
      ],
      explanation: 'Estos adjetivos y preposiciones te permiten personalizar tu pedido.'
    } as any
  },
  {
    id: 'a1-u2-e14',
    type: 'fill-blank',
    level: 'A1',
    topic: 'Drinks',
    topicName: 'Coffee Break',
    difficulty: 'easy',
    content: {
      title: 'Con azúcar',
      instructions: 'Escribe la palabra para "azúcar".',
      questions: [
        {
          id: 'q1',
          text: 'Coffee with ___.',
          correctAnswer: 'sugar',
          explanation: '"Sugar" significa azúcar.'
        }
      ]
    }
  },
  {
    id: 'a1-u2-e15',
    type: 'multiple-choice',
    level: 'A1',
    topic: 'Drinks',
    topicName: 'Coffee Break',
    difficulty: 'easy',
    content: {
      title: 'Caliente',
      instructions: '¿Cómo se dice "caliente"?',
      questions: [
        {
          id: 'q1',
          question: 'I want a ________ tea.',
          options: ['hot', 'cold', 'big'],
          correctAnswer: 0,
          explanation: '"Hot" significa caliente.'
        }
      ]
    }
  },
  {
    id: 'a1-u2-e16',
    type: 'flashcard',
    level: 'A1',
    topic: 'Drinks',
    topicName: 'Coffee Break',
    difficulty: 'easy',
    content: {
      items: [
        {
          front: 'Frío',
          back: 'Cold',
          example: 'I want cold water.',
          pronunciation: '/koʊld/',
          explanation: '"Cold" es el opuesto de "hot".'
        }
      ]
    } as any
  },
  {
    id: 'a1-u2-e17',
    type: 'sentence-building',
    level: 'A1',
    topic: 'Drinks',
    topicName: 'Coffee Break',
    difficulty: 'easy',
    content: {
      title: 'Agua fría',
      instructions: 'Ordena para decir "Yo quiero agua fría".',
      sentences: [
        {
          id: 's1',
          words: ['water', 'cold', 'want', 'I'],
          correctSentence: 'I want cold water',
          translation: 'Yo quiero agua fría.',
          hint: 'En inglés el adjetivo (cold) va antes del nombre (water).',
          explanation: 'En inglés, los adjetivos suelen preceder al sustantivo que describen.'
        }
      ]
    } as any
  },
  {
    id: 'a1-u2-e18',
    type: 'multiple-choice',
    level: 'A1',
    topic: 'Drinks',
    topicName: 'Coffee Break',
    difficulty: 'easy',
    content: {
      title: 'Una taza',
      instructions: '¿Cuál es la palabra para "taza"?',
      questions: [
        {
          id: 'q1',
          question: 'A ________ of coffee.',
          options: ['glass', 'cup', 'plate'],
          correctAnswer: 1,
          explanation: '"Cup" es una taza, usualmente para bebidas calientes.'
        }
      ]
    }
  },
  {
    id: 'a1-u2-e19',
    type: 'speaking-analysis',
    level: 'A1',
    topic: 'Drinks',
    topicName: 'Coffee Break',
    difficulty: 'easy',
    content: {
      title: 'Pronunciación: Water',
      instructions: 'Di la palabra para "agua".',
      questions: [
        {
          id: 'q1',
          text: 'Water',
          correctAnswer: 'Water',
          explanation: 'En inglés americano, la "t" suena casi como una "r" suave.'
        }
      ]
    }
  },
  {
    id: 'a1-u2-e20',
    type: 'matching',
    level: 'A1',
    topic: 'Containers',
    topicName: 'Coffee Break',
    difficulty: 'easy',
    content: {
      title: 'Recipientes',
      instructions: 'Une las palabras.',
      pairs: [
        { id: '1', left: 'Taza', right: 'Cup' },
        { id: '2', left: 'Vaso', right: 'Glass' },
        { id: '3', left: 'Botella', right: 'Bottle' },
        { id: '4', left: 'Plato', right: 'Plate' },
        { id: '5', left: 'Bolsa', right: 'Bag' }
      ],
      explanation: 'Diferentes bebidas requieren diferentes recipientes.'
    } as any
  },
  {
    id: 'a1-u2-e21',
    type: 'fill-blank',
    level: 'A1',
    topic: 'Drinks',
    topicName: 'Coffee Break',
    difficulty: 'easy',
    content: {
      title: 'Un vaso de...',
      instructions: 'Escribe la palabra para "vaso".',
      questions: [
        {
          id: 'q1',
          text: 'A ___ of water.',
          correctAnswer: 'glass',
          explanation: '"Glass" es un vaso, típicamente de vidrio.'
        }
      ]
    }
  },
  {
    id: 'a1-u2-e22',
    type: 'multiple-choice',
    level: 'A1',
    topic: 'Politeness',
    topicName: 'Coffee Break',
    difficulty: 'easy',
    content: {
      title: 'Gracias',
      instructions: '¿Cómo se dice "gracias"?',
      questions: [
        {
          id: 'q1',
          question: 'Coffee, ________.',
          options: ['thanks', 'please', 'hello'],
          correctAnswer: 0,
          explanation: '"Thanks" o "Thank you" se usa para agradecer.'
        }
      ]
    }
  },
  {
    id: 'a1-u2-e23',
    type: 'flashcard',
    level: 'A1',
    topic: 'Politeness',
    topicName: 'Coffee Break',
    difficulty: 'easy',
    content: {
      items: [
        {
          front: 'De nada',
          back: "You're welcome",
          example: 'Thank you! - You\'re welcome.',
          pronunciation: '/jʊər ˈwel.kəm/',
          explanation: 'Es la respuesta estándar a "Thank you".'
        }
      ]
    } as any
  },
  {
    id: 'a1-u2-e24',
    type: 'sentence-building',
    level: 'A1',
    topic: 'Politeness',
    topicName: 'Coffee Break',
    difficulty: 'easy',
    content: {
      title: 'Por favor',
      instructions: 'Ordena para decir "Té, por favor".',
      sentences: [
        {
          id: 's1',
          words: ['please', 'Tea', ','],
          correctSentence: 'Tea, please',
          translation: 'Té, por favor.',
          hint: 'La cortesía va al final.',
          explanation: 'Añadir "please" al final hace que tu pedido sea mucho más educado.'
        }
      ]
    } as any
  },
  {
    id: 'a1-u2-e25',
    type: 'multiple-choice',
    level: 'A1',
    topic: 'Drinks',
    topicName: 'Coffee Break',
    difficulty: 'easy',
    content: {
      title: 'Jugo de naranja',
      instructions: '¿Cómo se dice "naranja"?',
      questions: [
        {
          id: 'q1',
          question: '________ juice, please.',
          options: ['Apple', 'Orange', 'Lemon'],
          correctAnswer: 1,
          explanation: '"Orange" significa naranja.'
        }
      ]
    }
  },
  {
    id: 'a1-u2-e26',
    type: 'speaking-analysis',
    level: 'A1',
    topic: 'Drinks',
    topicName: 'Coffee Break',
    difficulty: 'easy',
    content: {
      title: 'Pronunciación: Milk',
      instructions: 'Di la palabra para "leche".',
      questions: [
        {
          id: 'q1',
          text: 'Milk',
          correctAnswer: 'Milk',
          explanation: 'Pronuncia la "l" y la "k" final con claridad.'
        }
      ]
    }
  },
  {
    id: 'a1-u2-e27',
    type: 'matching',
    level: 'A1',
    topic: 'Drinks',
    topicName: 'Coffee Break',
    difficulty: 'easy',
    content: {
      title: 'Frutas para jugo',
      instructions: 'Une la fruta con su nombre en inglés.',
      pairs: [
        { id: '1', left: 'Naranja', right: 'Orange' },
        { id: '2', left: 'Manzana', right: 'Apple' },
        { id: '3', left: 'Limón', right: 'Lemon' },
        { id: '4', left: 'Fresa', right: 'Strawberry' },
        { id: '5', left: 'Plátano', right: 'Banana' }
      ],
      explanation: 'Saber los nombres de las frutas te ayuda a pedir diferentes tipos de jugos.'
    } as any
  },
  {
    id: 'a1-u2-e28',
    type: 'fill-blank',
    level: 'A1',
    topic: 'Drinks',
    topicName: 'Coffee Break',
    difficulty: 'easy',
    content: {
      title: 'Té caliente',
      instructions: 'Escribe la palabra que falta para traducir "té caliente".',
      questions: [
        {
          id: 'q1',
          text: 'I want ___ tea.',
          correctAnswer: 'hot',
          explanation: '"Hot" significa caliente.'
        }
      ]
    }
  },
  {
    id: 'a1-u2-e29',
    type: 'multiple-choice',
    level: 'A1',
    topic: 'Politeness',
    topicName: 'Coffee Break',
    difficulty: 'easy',
    content: {
      title: 'Lo siento',
      instructions: '¿Cómo se dice "lo siento"?',
      questions: [
        {
          id: 'q1',
          question: '________, no sugar.',
          options: ['Sorry', 'Thanks', 'Welcome'],
          correctAnswer: 0,
          explanation: '"Sorry" se usa para disculparse.'
        }
      ]
    }
  },
  {
    id: 'a1-u2-e30',
    type: 'flashcard',
    level: 'A1',
    topic: 'Drinks',
    topicName: 'Coffee Break',
    difficulty: 'easy',
    content: {
      items: [
        {
          front: 'Hielo',
          back: 'Ice',
          example: 'Water with ice, please.',
          pronunciation: '/aɪs/',
          explanation: 'La "c" suena como una "s".'
        }
      ]
    } as any
  },
  {
    id: 'a1-u2-e31',
    type: 'sentence-building',
    level: 'A1',
    topic: 'Drinks',
    topicName: 'Coffee Break',
    difficulty: 'easy',
    content: {
      title: 'Café solo',
      instructions: 'Ordena para decir "Café negro".',
      sentences: [
        {
          id: 's1',
          words: ['coffee', 'Black'],
          correctSentence: 'Black coffee',
          translation: 'Café negro.',
          hint: 'El color va primero.',
          explanation: 'En muchos países se pide "black coffee" para referirse al café sin leche.'
        }
      ]
    } as any
  },
  {
    id: 'a1-u2-e32',
    type: 'multiple-choice',
    level: 'A1',
    topic: 'Drinks',
    topicName: 'Coffee Break',
    difficulty: 'easy',
    content: {
      title: '¿Dulce?',
      instructions: '¿Qué palabra significa "dulce"?',
      questions: [
        {
          id: 'q1',
          question: 'The juice is ________.',
          options: ['sweet', 'sour', 'bitter'],
          correctAnswer: 0,
          explanation: '"Sweet" significa dulce.'
        }
      ]
    }
  },
  {
    id: 'a1-u2-e33',
    type: 'speaking-analysis',
    level: 'A1',
    topic: 'Drinks',
    topicName: 'Coffee Break',
    difficulty: 'easy',
    content: {
      title: 'Pronunciación: Sugar',
      instructions: 'Di la palabra para "azúcar".',
      questions: [
        {
          id: 'q1',
          text: 'Sugar',
          correctAnswer: 'Sugar',
          explanation: 'Recuerda que la "s" suena como "sh".'
        }
      ]
    }
  },
  {
    id: 'a1-u2-e34',
    type: 'matching',
    level: 'A1',
    topic: 'Politeness',
    topicName: 'Coffee Break',
    difficulty: 'easy',
    content: {
      title: 'Cortesía social',
      instructions: 'Une la expresión con su significado.',
      pairs: [
        { id: '1', left: 'Please', right: 'Por favor' },
        { id: '2', left: 'Thank you', right: 'Gracias' },
        { id: '3', left: 'You are welcome', right: 'De nada' },
        { id: '4', left: 'Sorry', right: 'Lo siento' },
        { id: '5', left: 'Excuse me', right: 'Disculpe' }
      ],
      explanation: 'Ser cortés es vital en la cultura de habla inglesa.'
    } as any
  },
  {
    id: 'a1-u2-e35',
    type: 'fill-blank',
    level: 'A1',
    topic: 'Drinks',
    topicName: 'Coffee Break',
    difficulty: 'easy',
    content: {
      title: 'Con hielo',
      instructions: 'Escribe la palabra para "hielo".',
      questions: [
        {
          id: 'q1',
          text: 'Water with ___.',
          correctAnswer: 'ice',
          explanation: '"Ice" significa hielo.'
        }
      ]
    }
  },
  {
    id: 'a1-u2-e36',
    type: 'multiple-choice',
    level: 'A1',
    topic: 'Verbs',
    topicName: 'Coffee Break',
    difficulty: 'easy',
    content: {
      title: 'Él quiere',
      instructions: '¿Cómo cambia "want" para "Él"?',
      questions: [
        {
          id: 'q1',
          question: 'He ________ coffee.',
          options: ['want', 'wants', 'wanting'],
          correctAnswer: 1,
          explanation: 'Para la tercera persona del singular (He/She/It), añadimos una "s" al verbo en presente.'
        }
      ]
    }
  },
  {
    id: 'a1-u2-e37',
    type: 'flashcard',
    level: 'A1',
    topic: 'Verbs',
    topicName: 'Coffee Break',
    difficulty: 'easy',
    content: {
      items: [
        {
          front: 'Ella quiere',
          back: 'She wants',
          example: 'She wants tea.',
          pronunciation: '/ʃi wɒnts/',
          explanation: 'No olvides la "s" final en "wants".'
        }
      ]
    } as any
  },
  {
    id: 'a1-u2-e38',
    type: 'sentence-building',
    level: 'A1',
    topic: 'Verbs',
    topicName: 'Coffee Break',
    difficulty: 'easy',
    content: {
      title: 'Ella quiere agua',
      instructions: 'Ordena para decir "Ella quiere agua".',
      sentences: [
        {
          id: 's1',
          words: ['water', 'wants', 'She'],
          correctSentence: 'She wants water',
          translation: 'Ella quiere agua.',
          hint: 'Añade la "s" al verbo.',
          explanation: 'Usamos "wants" porque el sujeto es "She".'
        }
      ]
    } as any
  },
  {
    id: 'a1-u2-e39',
    type: 'multiple-choice',
    level: 'A1',
    topic: 'Drinks',
    topicName: 'Coffee Break',
    difficulty: 'easy',
    content: {
      title: 'Té con limón',
      instructions: '¿Qué es "lemon"?',
      questions: [
        {
          id: 'q1',
          question: 'Tea with ________.',
          options: ['sugar', 'lemon', 'milk'],
          correctAnswer: 1,
          explanation: '"Lemon" significa limón.'
        }
      ]
    }
  },
  {
    id: 'a1-u2-e40',
    type: 'speaking-analysis',
    level: 'A1',
    topic: 'Politeness',
    topicName: 'Coffee Break',
    difficulty: 'easy',
    content: {
      title: 'Pronunciación: Thank you',
      instructions: 'Di "gracias" en inglés.',
      questions: [
        {
          id: 'q1',
          text: 'Thank you',
          correctAnswer: 'Thank you',
          explanation: 'La "th" se pronuncia colocando la lengua entre los dientes.'
        }
      ]
    }
  },
  {
    id: 'a1-u2-e41',
    type: 'matching',
    level: 'A1',
    topic: 'Drinks',
    topicName: 'Coffee Break',
    difficulty: 'easy',
    content: {
      title: 'Combinaciones',
      instructions: 'Une el pedido en inglés con su traducción.',
      pairs: [
        { id: '1', left: 'Black coffee', right: 'Café solo' },
        { id: '2', left: 'Tea with milk', right: 'Té con leche' },
        { id: '3', left: 'Orange juice', right: 'Jugo de naranja' },
        { id: '4', left: 'Cold water', right: 'Agua fría' },
        { id: '5', left: 'Coffee with sugar', right: 'Café con azúcar' }
      ],
      explanation: 'Aprender frases completas te dará más confianza al pedir.'
    } as any
  },
  {
    id: 'a1-u2-e42',
    type: 'fill-blank',
    level: 'A1',
    topic: 'Verbs',
    topicName: 'Coffee Break',
    difficulty: 'easy',
    content: {
      title: 'Él quiere té',
      instructions: 'Escribe la forma correcta del verbo "want" para "Él".',
      questions: [
        {
          id: 'q1',
          text: 'He ___ tea.',
          correctAnswer: 'wants',
          explanation: 'La tercera persona requiere la "s" final en el verbo.'
        }
      ]
    }
  },
  {
    id: 'a1-u2-e43',
    type: 'multiple-choice',
    level: 'A1',
    topic: 'Drinks',
    topicName: 'Coffee Break',
    difficulty: 'easy',
    content: {
      title: 'Bebida gaseosa',
      instructions: '¿Cómo se dice "refresco" o "soda"?',
      questions: [
        {
          id: 'q1',
          question: 'I want a ________.',
          options: ['soda', 'coffee', 'milk'],
          correctAnswer: 0,
          explanation: '"Soda" se usa para refrescos en general.'
        }
      ]
    }
  },
  {
    id: 'a1-u2-e44',
    type: 'flashcard',
    level: 'A1',
    topic: 'Drinks',
    topicName: 'Coffee Break',
    difficulty: 'easy',
    content: {
      items: [
        {
          front: 'Mucho',
          back: 'A lot',
          example: 'I want a lot of sugar.',
          pronunciation: '/ə lɒt/',
          explanation: 'Se usa para expresar cantidad.'
        }
      ]
    } as any
  },
  {
    id: 'a1-u2-e45',
    type: 'sentence-building',
    level: 'A1',
    topic: 'Drinks',
    topicName: 'Coffee Break',
    difficulty: 'easy',
    content: {
      title: 'Un poco de...',
      instructions: 'Ordena para decir "Un poco de leche".',
      sentences: [
        {
          id: 's1',
          words: ['milk', 'little', 'A'],
          correctSentence: 'A little milk',
          translation: 'Un poco de leche.',
          hint: 'Usa "A little" para cantidad.',
          explanation: '"A little" se usa con cosas incontables como la leche.'
        }
      ]
    } as any
  },
  {
    id: 'a1-u2-e46',
    type: 'multiple-choice',
    level: 'A1',
    topic: 'Drinks',
    topicName: 'Coffee Break',
    difficulty: 'easy',
    content: {
      title: 'Cerveza (Adultos)',
      instructions: '¿Cómo se dice "cerveza"?',
      questions: [
        {
          id: 'q1',
          question: 'A ________, please.',
          options: ['beer', 'wine', 'water'],
          correctAnswer: 0,
          explanation: '"Beer" es cerveza.'
        }
      ]
    }
  },
  {
    id: 'a1-u2-e47',
    type: 'speaking-analysis',
    level: 'A1',
    topic: 'Drinks',
    topicName: 'Coffee Break',
    difficulty: 'easy',
    content: {
      title: 'Pronunciación: Soda',
      instructions: 'Di la palabra para "refresco".',
      questions: [
        {
          id: 'q1',
          text: 'Soda',
          correctAnswer: 'Soda',
          explanation: 'Se pronuncia muy similar al español, pero con la "o" más cerrada.'
        }
      ]
    }
  },
  {
    id: 'a1-u2-e48',
    type: 'matching',
    level: 'A1',
    topic: 'Adjectives',
    topicName: 'Coffee Break',
    difficulty: 'easy',
    content: {
      title: 'Sabores y Estados',
      instructions: 'Une cada adjetivo con su significado.',
      pairs: [
        { id: '1', left: 'Sweet', right: 'Dulce' },
        { id: '2', left: 'Bitter', right: 'Amargo' },
        { id: '3', left: 'Hot', right: 'Caliente' },
        { id: '4', left: 'Cold', right: 'Frío' },
        { id: '5', left: 'Delicious', right: 'Delicioso' }
      ],
      explanation: 'Estos términos te ayudan a describir la calidad de lo que estás bebiendo.'
    } as any
  },
  {
    id: 'a1-u2-e49',
    type: 'fill-blank',
    level: 'A1',
    topic: 'Drinks',
    topicName: 'Coffee Break',
    difficulty: 'easy',
    content: {
      title: 'Vino (Adultos)',
      instructions: 'Escribe la palabra para "vino".',
      questions: [
        {
          id: 'q1',
          text: 'Red ___.',
          correctAnswer: 'wine',
          explanation: '"Wine" significa vino. "Red wine" es vino tinto.'
        }
      ]
    }
  },
  {
    id: 'a1-u2-e50',
    type: 'multiple-choice',
    level: 'A1',
    topic: 'Drinks',
    topicName: 'Coffee Break',
    difficulty: 'easy',
    content: {
      title: 'Resumen',
      instructions: '¿Cuál es el pedido más educado?',
      questions: [
        {
          id: 'q1',
          question: 'Cómo pedir un café:',
          options: ['I want coffee, please.', 'Coffee now.', 'I want coffee without sugar.'],
          correctAnswer: 0,
          explanation: 'Usar "please" es fundamental para la cortesía.'
        }
      ]
    }
  }
];
