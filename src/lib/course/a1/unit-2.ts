import { Exercise } from '@/lib/exercise-generator';

export const UNIT_2_EXERCISES: Exercise[] = [
  {
    id: 'a1-u2-e1',
    type: 'multiple-choice',
    level: 'A1',
    topic: 'Drinks',
    topicName: 'Coffee Break',
    difficulty: 'easy',
    content: {
      title: 'Bebidas básicas',
      instructions: '¿Cómo se dice "café" en inglés?',
      questions: [
        {
          id: 'q1',
          question: '¿Cuál es la traducción de "Café"?',
          options: ['Tea', 'Coffee', 'Milk'],
          correctAnswer: 1,
          explanation: '"Coffee" es café. "Tea" es té.'
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
          example: 'I want a cup of tea, please.',
          pronunciation: '/tiː/'
        }
      ]
    } as any
  },
  {
    id: 'a1-u2-e3',
    type: 'sentence-building',
    level: 'A1',
    topic: 'Wants',
    topicName: 'Coffee Break',
    difficulty: 'easy',
    content: {
      title: 'Yo quiero...',
      instructions: 'Ordena las palabras para decir "I want coffee".',
      sentences: [
        {
          id: 's1',
          words: ['coffee', 'I', 'want'],
          correctSentence: 'I want coffee',
          translation: 'Yo quiero café.',
          hint: 'Empieza con el sujeto "I".'
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
      instructions: 'Elige la palabra correcta para el agua.',
      questions: [
        {
          id: 'q1',
          question: 'I want ________, please.',
          options: ['water', 'juice', 'soda'],
          correctAnswer: 0,
          explanation: '"Water" significa agua.'
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
      title: 'Pronunciación: Coffee',
      instructions: 'Di "Coffee" claramente.',
      questions: [
        {
          id: 'q1',
          text: 'Coffee',
          correctAnswer: 'Coffee',
          explanation: 'La "ee" final suena como una "i" larga.'
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
      title: 'Vocabulario de bebidas',
      instructions: 'Une el español con el inglés.',
      pairs: [
        { id: '1', left: 'Leche', right: 'Milk' },
        { id: '2', left: 'Zumo / Jugo', right: 'Juice' },
        { id: '3', left: 'Azúcar', right: 'Sugar' }
      ]
    } as any
  },
  {
    id: 'a1-u2-e7',
    type: 'fill-blank',
    level: 'A1',
    topic: 'Wants',
    topicName: 'Coffee Break',
    difficulty: 'easy',
    content: {
      title: 'Completar la frase',
      instructions: 'Escribe la palabra que falta para decir "Yo quiero".',
      questions: [
        {
          id: 'q1',
          text: 'I ___ milk.',
          correctAnswer: 'want',
          explanation: '"Want" es el verbo querer.'
        }
      ]
    }
  },
  {
    id: 'a1-u2-e8',
    type: 'multiple-choice',
    level: 'A1',
    topic: 'Drinks',
    topicName: 'Coffee Break',
    difficulty: 'easy',
    content: {
      title: '¿Té o café?',
      instructions: '¿Qué palabra significa "té"?',
      questions: [
        {
          id: 'q1',
          question: 'Do you want ________?',
          options: ['beer', 'tea', 'wine'],
          correctAnswer: 1,
          explanation: '"Tea" es la traducción de té.'
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
          front: 'Por favor',
          back: 'Please',
          example: 'Coffee, please.',
          pronunciation: '/pliːz/'
        }
      ]
    } as any
  },
  {
    id: 'a1-u2-e10',
    type: 'sentence-building',
    level: 'A1',
    topic: 'Wants',
    topicName: 'Coffee Break',
    difficulty: 'easy',
    content: {
      title: 'Té, por favor',
      instructions: 'Ordena para decir "Tea, please".',
      sentences: [
        {
          id: 's1',
          words: ['please', 'Tea', ','],
          correctSentence: 'Tea, please',
          translation: 'Té, por favor.',
          hint: 'La cortesía va al final.'
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
      title: 'Leche fría',
      instructions: '¿Cómo se dice leche?',
      questions: [
        {
          id: 'q1',
          question: 'I want ________.',
          options: ['milk', 'bread', 'apple'],
          correctAnswer: 0,
          explanation: '"Milk" es leche.'
        }
      ]
    }
  },
  {
    id: 'a1-u2-e12',
    type: 'speaking-analysis',
    level: 'A1',
    topic: 'Wants',
    topicName: 'Coffee Break',
    difficulty: 'easy',
    content: {
      title: 'Pronunciación: I want',
      instructions: 'Di "I want water".',
      questions: [
        {
          id: 'q1',
          text: 'I want water',
          correctAnswer: 'I want water',
          explanation: 'Pronuncia la "w" de water como una "u".'
        }
      ]
    }
  },
  {
    id: 'a1-u2-e13',
    type: 'matching',
    level: 'A1',
    topic: 'Drinks',
    topicName: 'Coffee Break',
    difficulty: 'easy',
    content: {
      title: 'Más bebidas',
      instructions: 'Une las parejas.',
      pairs: [
        { id: '1', left: 'Agua', right: 'Water' },
        { id: '2', left: 'Café', right: 'Coffee' },
        { id: '3', left: 'Té', right: 'Tea' }
      ]
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
      instructions: 'Escribe "sugar" (azúcar).',
      questions: [
        {
          id: 'q1',
          text: 'Coffee with ___',
          correctAnswer: 'sugar',
          explanation: '"Sugar" es azúcar.'
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
      title: 'Zumo de naranja',
      instructions: '¿Qué es "juice"?',
      questions: [
        {
          id: 'q1',
          question: 'Orange ________.',
          options: ['juice', 'water', 'tea'],
          correctAnswer: 0,
          explanation: '"Juice" es zumo o jugo.'
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
          front: 'Con',
          back: 'With',
          example: 'Coffee with milk.',
          pronunciation: '/wɪð/'
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
      title: 'Café con leche',
      instructions: 'Ordena para decir "Coffee with milk".',
      sentences: [
        {
          id: 's1',
          words: ['milk', 'with', 'Coffee'],
          correctSentence: 'Coffee with milk',
          translation: 'Café con leche.',
          hint: '"With" significa "con".'
        }
      ]
    } as any
  },
  {
    id: 'a1-u2-e18',
    type: 'multiple-choice',
    level: 'A1',
    topic: 'Wants',
    topicName: 'Coffee Break',
    difficulty: 'easy',
    content: {
      title: 'Yo quiero agua',
      instructions: 'Traduce "Yo quiero agua".',
      questions: [
        {
          id: 'q1',
          question: '¿Cómo se dice "Yo quiero agua"?',
          options: ['I want tea', 'I want water', 'I am water'],
          correctAnswer: 1,
          explanation: '"I want water" es la traducción correcta.'
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
      title: 'Pronunciación: Please',
      instructions: 'Di "Please" (por favor).',
      questions: [
        {
          id: 'q1',
          text: 'Please',
          correctAnswer: 'Please',
          explanation: 'La "s" suena suave.'
        }
      ]
    }
  },
  {
    id: 'a1-u2-e20',
    type: 'matching',
    level: 'A1',
    topic: 'Wants',
    topicName: 'Coffee Break',
    difficulty: 'easy',
    content: {
      title: 'Acciones y objetos',
      instructions: 'Une las palabras.',
      pairs: [
        { id: '1', left: 'Quiero', right: 'Want' },
        { id: '2', left: 'Gracias', right: 'Thanks' },
        { id: '3', left: 'Hola', right: 'Hello' }
      ]
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
      title: 'Té con leche',
      instructions: 'Completa con "with".',
      questions: [
        {
          id: 'q1',
          text: 'Tea ___ milk.',
          correctAnswer: 'with',
          explanation: '"With" une los ingredientes.'
        }
      ]
    }
  },
  {
    id: 'a1-u2-e22',
    type: 'multiple-choice',
    level: 'A1',
    topic: 'Drinks',
    topicName: 'Coffee Break',
    difficulty: 'easy',
    content: {
      title: 'Sin azúcar',
      instructions: '¿Qué palabra falta?',
      questions: [
        {
          id: 'q1',
          question: 'I want coffee ________ sugar.',
          options: ['no', 'without', 'with'],
          correctAnswer: 1,
          explanation: '"Without" significa sin.'
        }
      ]
    }
  },
  {
    id: 'a1-u2-e23',
    type: 'flashcard',
    level: 'A1',
    topic: 'Drinks',
    topicName: 'Coffee Break',
    difficulty: 'easy',
    content: {
      items: [
        {
          front: 'Sin',
          back: 'Without',
          example: 'Tea without sugar.',
          pronunciation: '/wɪˈðaʊt/'
        }
      ]
    } as any
  },
  {
    id: 'a1-u2-e24',
    type: 'sentence-building',
    level: 'A1',
    topic: 'Wants',
    topicName: 'Coffee Break',
    difficulty: 'easy',
    content: {
      title: 'Quiero zumo',
      instructions: 'Ordena las palabras.',
      sentences: [
        {
          id: 's1',
          words: ['juice', 'want', 'I'],
          correctSentence: 'I want juice',
          translation: 'Yo quiero zumo.',
          hint: 'Sujeto + Verbo + Objeto.'
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
      title: '¿Frío o caliente?',
      instructions: '¿Cómo se dice "caliente"?',
      questions: [
        {
          id: 'q1',
          question: 'I want ________ coffee.',
          options: ['cold', 'hot', 'big'],
          correctAnswer: 1,
          explanation: '"Hot" es caliente.'
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
      title: 'Pronunciación: Water',
      instructions: 'Di "Water".',
      questions: [
        {
          id: 'q1',
          text: 'Water',
          correctAnswer: 'Water',
          explanation: 'Suena como "uó-ter".'
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
      title: 'Temperaturas',
      instructions: 'Une los opuestos.',
      pairs: [
        { id: '1', left: 'Caliente', right: 'Hot' },
        { id: '2', left: 'Frío', right: 'Cold' },
        { id: '3', left: 'Agua', right: 'Water' }
      ]
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
      title: 'Café caliente',
      instructions: 'Escribe "hot".',
      questions: [
        {
          id: 'q1',
          text: 'I want ___ tea.',
          correctAnswer: 'hot',
          explanation: '"Hot" va antes del objeto.'
        }
      ]
    }
  },
  {
    id: 'a1-u2-e29',
    type: 'multiple-choice',
    level: 'A1',
    topic: 'Drinks',
    topicName: 'Coffee Break',
    difficulty: 'easy',
    content: {
      title: 'Agua fría',
      instructions: '¿Cómo se dice "frío"?',
      questions: [
        {
          id: 'q1',
          question: 'I want ________ water.',
          options: ['hot', 'cold', 'small'],
          correctAnswer: 1,
          explanation: '"Cold" es frío.'
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
          front: 'Caliente',
          back: 'Hot',
          example: 'Hot coffee.',
          pronunciation: '/hɒt/'
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
      title: 'Zumo frío',
      instructions: 'Ordena las palabras.',
      sentences: [
        {
          id: 's1',
          words: ['juice', 'cold', 'I', 'want'],
          correctSentence: 'I want cold juice',
          translation: 'Quiero zumo frío.',
          hint: 'El adjetivo va antes del nombre.'
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
      title: 'Una taza de...',
      instructions: '¿Qué es "cup"?',
      questions: [
        {
          id: 'q1',
          question: 'A ________ of coffee.',
          options: ['glass', 'cup', 'bottle'],
          correctAnswer: 1,
          explanation: '"Cup" es taza.'
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
      title: 'Pronunciación: Milk',
      instructions: 'Di "Milk".',
      questions: [
        {
          id: 'q1',
          text: 'Milk',
          correctAnswer: 'Milk',
          explanation: 'La "l" es clara.'
        }
      ]
    }
  },
  {
    id: 'a1-u2-e34',
    type: 'matching',
    level: 'A1',
    topic: 'Drinks',
    topicName: 'Coffee Break',
    difficulty: 'easy',
    content: {
      title: 'Recipientes',
      instructions: 'Une las parejas.',
      pairs: [
        { id: '1', left: 'Taza', right: 'Cup' },
        { id: '2', left: 'Vaso', right: 'Glass' },
        { id: '3', left: 'Botella', right: 'Bottle' }
      ]
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
      title: 'Un vaso de agua',
      instructions: 'Escribe "glass" (vaso).',
      questions: [
        {
          id: 'q1',
          text: 'A ___ of water.',
          correctAnswer: 'glass',
          explanation: '"Glass" es para bebidas frías.'
        }
      ]
    }
  },
  {
    id: 'a1-u2-e36',
    type: 'multiple-choice',
    level: 'A1',
    topic: 'Drinks',
    topicName: 'Coffee Break',
    difficulty: 'easy',
    content: {
      title: '¿Quieres té?',
      instructions: 'Completa la pregunta.',
      questions: [
        {
          id: 'q1',
          question: 'Do you ________ tea?',
          options: ['want', 'am', 'is'],
          correctAnswer: 0,
          explanation: 'Usamos "want" para preguntar qué desea alguien.'
        }
      ]
    }
  },
  {
    id: 'a1-u2-e37',
    type: 'flashcard',
    level: 'A1',
    topic: 'Drinks',
    topicName: 'Coffee Break',
    difficulty: 'easy',
    content: {
      items: [
        {
          front: 'Vaso',
          back: 'Glass',
          example: 'A glass of water.',
          pronunciation: '/ɡlɑːs/'
        }
      ]
    } as any
  },
  {
    id: 'a1-u2-e38',
    type: 'sentence-building',
    level: 'A1',
    topic: 'Wants',
    topicName: 'Coffee Break',
    difficulty: 'easy',
    content: {
      title: '¿Quieres café?',
      instructions: 'Ordena la pregunta.',
      sentences: [
        {
          id: 's1',
          words: ['want', 'coffee', 'you', 'Do', '?'],
          correctSentence: 'Do you want coffee?',
          translation: '¿Quieres café?',
          hint: '"Do" empieza la pregunta.'
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
      title: 'Té de limón',
      instructions: '¿Qué es "lemon"?',
      questions: [
        {
          id: 'q1',
          question: 'Tea with ________.',
          options: ['sugar', 'lemon', 'milk'],
          correctAnswer: 1,
          explanation: '"Lemon" es limón.'
        }
      ]
    }
  },
  {
    id: 'a1-u2-e40',
    type: 'speaking-analysis',
    level: 'A1',
    topic: 'Drinks',
    topicName: 'Coffee Break',
    difficulty: 'easy',
    content: {
      title: 'Pronunciación: Sugar',
      instructions: 'Di "Sugar".',
      questions: [
        {
          id: 'q1',
          text: 'Sugar',
          correctAnswer: 'Sugar',
          explanation: 'La "s" suena como "sh".'
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
      title: 'Complementos',
      instructions: 'Une las palabras.',
      pairs: [
        { id: '1', left: 'Limón', right: 'Lemon' },
        { id: '2', left: 'Hielo', right: 'Ice' },
        { id: '3', left: 'Cuchara', right: 'Spoon' }
      ]
    } as any
  },
  {
    id: 'a1-u2-e42',
    type: 'fill-blank',
    level: 'A1',
    topic: 'Drinks',
    topicName: 'Coffee Break',
    difficulty: 'easy',
    content: {
      title: 'Con hielo',
      instructions: 'Escribe "ice" (hielo).',
      questions: [
        {
          id: 'q1',
          text: 'Water with ___',
          correctAnswer: 'ice',
          explanation: '"Ice" es hielo.'
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
      title: '¿Mucho o poco?',
      instructions: '¿Qué significa "small"?',
      questions: [
        {
          id: 'q1',
          question: 'A ________ coffee.',
          options: ['big', 'small', 'hot'],
          correctAnswer: 1,
          explanation: '"Small" es pequeño.'
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
          front: 'Grande',
          back: 'Big',
          example: 'A big glass of water.',
          pronunciation: '/bɪɡ/'
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
      title: 'Un café grande',
      instructions: 'Ordena las palabras.',
      sentences: [
        {
          id: 's1',
          words: ['coffee', 'a', 'want', 'I', 'big'],
          correctSentence: 'I want a big coffee',
          translation: 'Quiero un café grande.',
          hint: '"A" significa un/una.'
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
      title: '¿Algo más?',
      instructions: '¿Cómo se dice "gracias"?',
      questions: [
        {
          id: 'q1',
          question: 'Persona A: Coffee? \nPersona B: Yes, ________.',
          options: ['please', 'thanks', 'hello'],
          correctAnswer: 1,
          explanation: '"Thanks" es gracias.'
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
      title: 'Pronunciación: Ice',
      instructions: 'Di "Ice".',
      questions: [
        {
          id: 'q1',
          text: 'Ice',
          correctAnswer: 'Ice',
          explanation: 'Suena como "áis".'
        }
      ]
    }
  },
  {
    id: 'a1-u2-e48',
    type: 'matching',
    level: 'A1',
    topic: 'Drinks',
    topicName: 'Coffee Break',
    difficulty: 'easy',
    content: {
      title: 'Tamaños',
      instructions: 'Une los opuestos.',
      pairs: [
        { id: '1', left: 'Grande', right: 'Big' },
        { id: '2', left: 'Pequeño', right: 'Small' },
        { id: '3', left: 'Taza', right: 'Cup' }
      ]
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
      title: 'No, gracias',
      instructions: 'Escribe "thanks".',
      questions: [
        {
          id: 'q1',
          text: 'No, ___',
          correctAnswer: 'thanks',
          explanation: '"Thanks" es la forma corta de "thank you".'
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
      title: 'Resumen de bebidas',
      instructions: '¿Cuál de estos NO es una bebida?',
      questions: [
        {
          id: 'q1',
          question: '¿Cuál NO es una bebida?',
          options: ['Milk', 'Water', 'Table'],
          correctAnswer: 2,
          explanation: '"Table" es mesa, no es una bebida.'
        }
      ]
    }
  }
];
