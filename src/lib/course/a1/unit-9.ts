import { Exercise } from '@/lib/exercise-generator';

/**
 * Unit 9: Food
 */

export const UNIT_9_EXERCISES: Exercise[] = [
  {
    id: 'a1-u9-e1',
    type: 'multiple-choice',
    level: 'A1',
    topic: 'Food',
    topicName: 'Foodie Life',
    difficulty: 'easy',
    content: {
      title: 'Me gusta la pizza',
      instructions: '¿Cómo se dice "Me gusta la pizza" en inglés?',
      questions: [
        {
          id: 'q1',
          question: 'I ________ pizza.',
          options: ['like', 'want', 'drink'],
          correctAnswer: 0,
          explanation: 'Usamos "like" para expresar gustos personales.'
        }
      ]
    }
  },
  {
    id: 'a1-u9-e2',
    type: 'flashcard',
    level: 'A1',
    topic: 'Food',
    topicName: 'Foodie Life',
    difficulty: 'easy',
    content: {
      items: [
        {
          front: 'Manzana',
          back: 'Apple',
          example: 'I eat an apple.',
          pronunciation: '/ˈæp.əl/',
          explanation: '"Apple" es una de las frutas más comunes en inglés.'
        }
      ]
    } as any
  },
  {
    id: 'a1-u9-e3',
    type: 'sentence-building',
    level: 'A1',
    topic: 'Food',
    topicName: 'Foodie Life',
    difficulty: 'easy',
    content: {
      title: 'No me gusta el café',
      instructions: 'Ordena las palabras para decir "No me gusta el café".',
      sentences: [
        {
          id: 's1',
          words: ['coffee', 'like', "don't", 'I'],
          correctSentence: "I don't like coffee",
          translation: 'No me gusta el café.',
          hint: 'Empieza con "I".',
          explanation: 'Para negar gustos usamos "don\'t like".'
        }
      ]
    } as any
  },
  {
    id: 'a1-u9-e4',
    type: 'matching',
    level: 'A1',
    topic: 'Food',
    topicName: 'Foodie Life',
    difficulty: 'easy',
    content: {
      title: 'Vocabulario de Frutas',
      instructions: 'Une cada fruta con su traducción al inglés.',
      pairs: [
        { id: 'p1', left: 'Plátano', right: 'Banana' },
        { id: 'p2', left: 'Naranja', right: 'Orange' },
        { id: 'p3', left: 'Fresa', right: 'Strawberry' },
        { id: 'p4', left: 'Uva', right: 'Grape' },
        { id: 'p5', left: 'Piña', right: 'Pineapple' }
      ],
      explanation: 'Este vocabulario básico de frutas te ayudará a pedir comida saludable.'
    } as any
  },
  {
    id: 'a1-u9-e5',
    type: 'speaking-analysis',
    level: 'A1',
    topic: 'Food',
    topicName: 'Foodie Life',
    difficulty: 'easy',
    content: {
      title: 'Pronunciación: Chocolate',
      instructions: 'Di la palabra para "chocolate".',
      questions: [
        {
          id: 'q1',
          text: 'Chocolate',
          phonetic: '/ˈtʃɒk.lət/',
          translation: 'Chocolate',
          explanation: 'Cuidado: aunque se escribe igual que en español, se pronuncia muy diferente.'
        }
      ]
    } as any
  },
  {
    id: 'a1-u9-e6',
    type: 'fill-blank',
    level: 'A1',
    topic: 'Food',
    topicName: 'Foodie Life',
    difficulty: 'easy',
    content: {
      title: 'Pan y mantequilla',
      instructions: 'Completa la frase con la palabra para "pan".',
      questions: [
        {
          id: 'q1',
          question: 'I like ________ and butter.',
          answer: 'bread',
          explanation: '"Bread" es pan. Es un alimento básico en muchos países.'
        }
      ]
    } as any
  },
  {
    id: 'a1-u9-e7',
    type: 'multiple-choice',
    level: 'A1',
    topic: 'Food',
    topicName: 'Foodie Life',
    difficulty: 'easy',
    content: {
      title: 'Bebida común',
      instructions: '¿Cuál de estos es una bebida?',
      questions: [
        {
          id: 'q1',
          question: 'I drink ________.',
          options: ['water', 'cheese', 'meat'],
          correctAnswer: 0,
          explanation: '"Water" es agua. El verbo "drink" se usa solo para líquidos.'
        }
      ]
    }
  },
  {
    id: 'a1-u9-e8',
    type: 'sentence-building',
    level: 'A1',
    topic: 'Food',
    topicName: 'Foodie Life',
    difficulty: 'easy',
    content: {
      title: '¿Te gusta el queso?',
      instructions: 'Ordena las palabras para preguntar "¿Te gusta el queso?".',
      sentences: [
        {
          id: 's1',
          words: ['cheese', 'like', 'you', 'Do'],
          correctSentence: 'Do you like cheese',
          translation: '¿Te gusta el queso?',
          hint: 'Empieza con "Do".',
          explanation: 'Para hacer preguntas en presente usamos el auxiliar "Do".'
        }
      ]
    } as any
  },
  {
    id: 'a1-u9-e9',
    type: 'flashcard',
    level: 'A1',
    topic: 'Food',
    topicName: 'Foodie Life',
    difficulty: 'easy',
    content: {
      items: [
        {
          front: 'Leche',
          back: 'Milk',
          example: 'I drink milk.',
          pronunciation: '/mɪlk/',
          explanation: '"Milk" es leche, esencial para muchos desayunos.'
        }
      ]
    } as any
  },
  {
    id: 'a1-u9-e10',
    type: 'multiple-choice',
    level: 'A1',
    topic: 'Food',
    topicName: 'Foodie Life',
    difficulty: 'easy',
    content: {
      title: 'Carne',
      instructions: '¿Cómo se dice "carne" en general?',
      questions: [
        {
          id: 'q1',
          question: 'I eat ________.',
          options: ['meat', 'tea', 'sugar'],
          correctAnswer: 0,
          explanation: '"Meat" es el término general para la carne.'
        }
      ]
    }
  },
  {
    id: 'a1-u9-e11',
    type: 'fill-blank',
    level: 'A1',
    topic: 'Food',
    topicName: 'Foodie Life',
    difficulty: 'medium',
    content: {
      title: 'Me encanta el huevo',
      instructions: 'Escribe la palabra para "huevo".',
      questions: [
        {
          id: 'q1',
          question: 'I eat an ________ for breakfast.',
          answer: 'egg',
          explanation: 'Usamos "an" antes de "egg" porque empieza por vocal.'
        }
      ]
    } as any
  },
  {
    id: 'a1-u9-e12',
    type: 'matching',
    level: 'A1',
    topic: 'Food',
    topicName: 'Foodie Life',
    difficulty: 'easy',
    content: {
      title: 'Comida básica',
      instructions: 'Relaciona cada alimento con su nombre en inglés.',
      pairs: [
        { id: 'p1', left: 'Arroz', right: 'Rice' },
        { id: 'p2', left: 'Pollo', right: 'Chicken' },
        { id: 'p3', left: 'Pescado', right: 'Fish' },
        { id: 'p4', left: 'Huevo', right: 'Egg' },
        { id: 'p5', left: 'Sopa', right: 'Soup' }
      ],
      explanation: 'Estos son alimentos fundamentales que encontrarás en cualquier menú.'
    } as any
  },
  {
    id: 'a1-u9-e13',
    type: 'speaking-analysis',
    level: 'A1',
    topic: 'Food',
    topicName: 'Foodie Life',
    difficulty: 'easy',
    content: {
      title: 'Pronunciación: Banana',
      instructions: 'Di la palabra para "plátano".',
      questions: [
        {
          id: 'q1',
          text: 'Banana',
          phonetic: '/bəˈnɑː.nə/',
          translation: 'Plátano',
          explanation: 'La sílaba tónica es la segunda: ba-NA-na.'
        }
      ]
    } as any
  },
  {
    id: 'a1-u9-e14',
    type: 'sentence-building',
    level: 'A1',
    topic: 'Food',
    topicName: 'Foodie Life',
    difficulty: 'medium',
    content: {
      title: 'Ella come ensalada',
      instructions: 'Ordena las palabras para decir "Ella come ensalada".',
      sentences: [
        {
          id: 's1',
          words: ['salad', 'eats', 'She'],
          correctSentence: 'She eats salad',
          translation: 'Ella come ensalada.',
          hint: 'Empieza con "She".',
          explanation: 'En tercera persona (he, she, it), añadimos una "s" al verbo: "eats".'
        }
      ]
    } as any
  },
  {
    id: 'a1-u9-e15',
    type: 'multiple-choice',
    level: 'A1',
    topic: 'Food',
    topicName: 'Foodie Life',
    difficulty: 'easy',
    content: {
      title: 'Vegetales',
      instructions: '¿Qué es una "carrot"?',
      questions: [
        {
          id: 'q1',
          question: 'A carrot is a ________.',
          options: ['vegetable', 'fruit', 'drink'],
          correctAnswer: 0,
          explanation: '"Carrot" es zanahoria, un tipo de vegetal.'
        }
      ]
    }
  },
  {
    id: 'a1-u9-e16',
    type: 'flashcard',
    level: 'A1',
    topic: 'Food',
    topicName: 'Foodie Life',
    difficulty: 'easy',
    content: {
      items: [
        {
          front: 'Tomate',
          back: 'Tomato',
          example: 'I like tomato soup.',
          pronunciation: '/təˈmɑː.təʊ/',
          explanation: 'El tomate es versátil: se usa en ensaladas, salsas y sopas.'
        }
      ]
    } as any
  },
  {
    id: 'a1-u9-e17',
    type: 'fill-blank',
    level: 'A1',
    topic: 'Food',
    topicName: 'Foodie Life',
    difficulty: 'medium',
    content: {
      title: 'Té caliente',
      instructions: 'Escribe la palabra para "té".',
      questions: [
        {
          id: 'q1',
          question: 'I want hot ________.',
          answer: 'tea',
          explanation: '"Tea" es una de las bebidas más populares en el Reino Unido.'
        }
      ]
    } as any
  },
  {
    id: 'a1-u9-e18',
    type: 'matching',
    level: 'A1',
    topic: 'Food',
    topicName: 'Foodie Life',
    difficulty: 'medium',
    content: {
      title: 'Bebidas y Lácteos',
      instructions: 'Une cada producto con su nombre en inglés.',
      pairs: [
        { id: 'p1', left: 'Queso', right: 'Cheese' },
        { id: 'p2', left: 'Mantequilla', right: 'Butter' },
        { id: 'p3', left: 'Yogur', right: 'Yogurt' },
        { id: 'p4', left: 'Jugo', right: 'Juice' },
        { id: 'p5', left: 'Café', right: 'Coffee' }
      ],
      explanation: 'Estos términos son muy útiles para la hora del desayuno.'
    } as any
  },
  {
    id: 'a1-u9-e19',
    type: 'multiple-choice',
    level: 'A1',
    topic: 'Food',
    topicName: 'Foodie Life',
    difficulty: 'medium',
    content: {
      title: 'No me gusta el pescado',
      instructions: '¿Cómo se dice "No me gusta el pescado"?',
      questions: [
        {
          id: 'q1',
          question: 'I ________ fish.',
          options: ["don't like", 'no like', 'like not'],
          correctAnswer: 0,
          explanation: 'La estructura correcta para negar gustos es "don\'t like".'
        }
      ]
    }
  },
  {
    id: 'a1-u9-e20',
    type: 'speaking-analysis',
    level: 'A1',
    topic: 'Food',
    topicName: 'Foodie Life',
    difficulty: 'easy',
    content: {
      title: 'Pronunciación: Salad',
      instructions: 'Di la palabra para "ensalada".',
      questions: [
        {
          id: 'q1',
          text: 'Salad',
          phonetic: '/ˈsæl.əd/',
          translation: 'Ensalada',
          explanation: 'La primera "a" es abierta y la segunda es casi imperceptible.'
        }
      ]
    } as any
  },
  {
    id: 'a1-u9-e21',
    type: 'sentence-building',
    level: 'A1',
    topic: 'Food',
    topicName: 'Foodie Life',
    difficulty: 'medium',
    content: {
      title: 'Él quiere agua',
      instructions: 'Ordena las palabras para decir "Él quiere agua".',
      sentences: [
        {
          id: 's1',
          words: ['water', 'wants', 'He'],
          correctSentence: 'He wants water',
          translation: 'Él quiere agua.',
          hint: 'Empieza con "He".',
          explanation: 'Añadimos "s" al verbo "want" en tercera persona: "wants".'
        }
      ]
    } as any
  },
  {
    id: 'a1-u9-e22',
    type: 'flashcard',
    level: 'A1',
    topic: 'Food',
    topicName: 'Foodie Life',
    difficulty: 'easy',
    content: {
      items: [
        {
          front: 'Dulce',
          back: 'Sweet',
          example: 'Candy is sweet.',
          pronunciation: '/swiːt/',
          explanation: '"Sweet" describe sabores como el de la miel o el azúcar.'
        }
      ]
    } as any
  },
  {
    id: 'a1-u9-e23',
    type: 'fill-blank',
    level: 'A1',
    topic: 'Food',
    topicName: 'Foodie Life',
    difficulty: 'medium',
    content: {
      title: 'Pescado fresco',
      instructions: 'Escribe la palabra para "pescado".',
      questions: [
        {
          id: 'q1',
          question: 'I like fresh ________.',
          answer: 'fish',
          explanation: '"Fish" se refiere tanto al animal vivo como al alimento.'
        }
      ]
    } as any
  },
  {
    id: 'a1-u9-e24',
    type: 'multiple-choice',
    level: 'A1',
    topic: 'Food',
    topicName: 'Foodie Life',
    difficulty: 'easy',
    content: {
      title: '¿Qué es un "sandwich"?',
      instructions: '¿Cuál es la traducción correcta?',
      questions: [
        {
          id: 'q1',
          question: 'I eat a sandwich.',
          options: ['Un sándwich/emparedado', 'Una ensalada', 'Una sopa'],
          correctAnswer: 0,
          explanation: '"Sandwich" es una palabra que usamos casi igual en español.'
        }
      ]
    }
  },
  {
    id: 'a1-u9-e25',
    type: 'matching',
    level: 'A1',
    topic: 'Food',
    topicName: 'Foodie Life',
    difficulty: 'medium',
    content: {
      title: 'Sabores y Tipos',
      instructions: 'Une cada palabra con su significado.',
      pairs: [
        { id: 'p1', left: 'Salty', right: 'Salado' },
        { id: 'p2', left: 'Sweet', right: 'Dulce' },
        { id: 'p3', left: 'Spicy', right: 'Picante' },
        { id: 'p4', left: 'Bitter', right: 'Amargo' },
        { id: 'p5', left: 'Sour', right: 'Ácido/Agrio' }
      ],
      explanation: 'Saber los sabores básicos te ayudará a describir lo que comes.'
    } as any
  },
  {
    id: 'a1-u9-e26',
    type: 'speaking-analysis',
    level: 'A1',
    topic: 'Food',
    topicName: 'Foodie Life',
    difficulty: 'medium',
    content: {
      title: 'Pronunciación: Pizza',
      instructions: 'Di la palabra "pizza".',
      questions: [
        {
          id: 'q1',
          text: 'Pizza',
          phonetic: '/ˈpiːt.sə/',
          translation: 'Pizza',
          explanation: 'Se pronuncia con un sonido de "ts" en el medio.'
        }
      ]
    } as any
  },
  {
    id: 'a1-u9-e27',
    type: 'sentence-building',
    level: 'A1',
    topic: 'Food',
    topicName: 'Foodie Life',
    difficulty: 'hard',
    content: {
      title: '¿Quieres comer?',
      instructions: 'Ordena las palabras para preguntar "¿Quieres comer?".',
      sentences: [
        {
          id: 's1',
          words: ['eat', 'to', 'want', 'you', 'Do'],
          correctSentence: 'Do you want to eat',
          translation: '¿Quieres comer?',
          hint: 'Empieza con "Do".',
          explanation: 'Usamos "want to" seguido de un verbo en infinitivo para expresar deseo.'
        }
      ]
    } as any
  },
  {
    id: 'a1-u9-e28',
    type: 'multiple-choice',
    level: 'A1',
    topic: 'Food',
    topicName: 'Foodie Life',
    difficulty: 'easy',
    content: {
      title: '¿Vino o Cerveza?',
      instructions: '¿Cómo se dice "cerveza"?',
      questions: [
        {
          id: 'q1',
          question: 'I drink ________.',
          options: ['beer', 'wine', 'water'],
          correctAnswer: 0,
          explanation: '"Beer" es cerveza. Recuerda consumirla con moderación.'
        }
      ]
    }
  },
  {
    id: 'a1-u9-e29',
    type: 'flashcard',
    level: 'A1',
    topic: 'Food',
    topicName: 'Foodie Life',
    difficulty: 'medium',
    content: {
      items: [
        {
          front: 'Cena',
          back: 'Dinner',
          example: 'Dinner is at 8:00 PM.',
          pronunciation: '/ˈdɪn.ər/',
          explanation: '"Dinner" es generalmente la comida más importante de la tarde/noche.'
        }
      ]
    } as any
  },
  {
    id: 'a1-u9-e30',
    type: 'fill-blank',
    level: 'A1',
    topic: 'Food',
    topicName: 'Foodie Life',
    difficulty: 'hard',
    content: {
      title: 'Me gusta el helado',
      instructions: 'Escribe la palabra para "helado".',
      questions: [
        {
          id: 'q1',
          question: 'I love ________ for dessert.',
          answer: 'ice cream',
          explanation: '"Ice cream" es helado. Literalmente "crema de hielo".'
        }
      ]
    } as any
  },
  {
    id: 'a1-u9-e31',
    type: 'multiple-choice',
    level: 'A1',
    topic: 'Food',
    topicName: 'Foodie Life',
    difficulty: 'medium',
    content: {
      title: 'Comida sana',
      instructions: '¿Cuál de estos es saludable?',
      questions: [
        {
          id: 'q1',
          question: '________ is healthy.',
          options: ['Salad', 'Cake', 'Soda'],
          correctAnswer: 0,
          explanation: 'La ensalada (salad) es generalmente la opción más saludable.'
        }
      ]
    }
  },
  {
    id: 'a1-u9-e32',
    type: 'matching',
    level: 'A1',
    topic: 'Food',
    topicName: 'Foodie Life',
    difficulty: 'medium',
    content: {
      title: 'Comidas del día',
      instructions: 'Relaciona cada comida con su traducción.',
      pairs: [
        { id: 'p1', left: 'Breakfast', right: 'Desayuno' },
        { id: 'p2', left: 'Lunch', right: 'Almuerzo' },
        { id: 'p3', left: 'Dinner', right: 'Cena' },
        { id: 'p4', left: 'Snack', right: 'Merienda/Aperitivo' },
        { id: 'p5', left: 'Dessert', right: 'Postre' }
      ],
      explanation: 'Conocer las comidas del día te ayudará a organizar tus horarios.'
    } as any
  },
  {
    id: 'a1-u9-e33',
    type: 'speaking-analysis',
    level: 'A1',
    topic: 'Food',
    topicName: 'Foodie Life',
    difficulty: 'medium',
    content: {
      title: 'Pronunciación: Chicken',
      instructions: 'Di la palabra para "pollo".',
      questions: [
        {
          id: 'q1',
          text: 'Chicken',
          phonetic: '/ˈtʃɪk.ɪn/',
          translation: 'Pollo',
          explanation: 'Asegúrate de pronunciar bien el sonido "ch" inicial.'
        }
      ]
    } as any
  },
  {
    id: 'a1-u9-e34',
    type: 'sentence-building',
    level: 'A1',
    topic: 'Food',
    topicName: 'Foodie Life',
    difficulty: 'medium',
    content: {
      title: 'Necesito una manzana',
      instructions: 'Ordena las palabras para decir "Necesito una manzana".',
      sentences: [
        {
          id: 's1',
          words: ['apple', 'an', 'need', 'I'],
          correctSentence: 'I need an apple',
          translation: 'Necesito una manzana.',
          hint: 'Empieza con "I".',
          explanation: 'Usamos "an" porque "apple" empieza con sonido de vocal.'
        }
      ]
    } as any
  },
  {
    id: 'a1-u9-e35',
    type: 'flashcard',
    level: 'A1',
    topic: 'Food',
    topicName: 'Foodie Life',
    difficulty: 'easy',
    content: {
      items: [
        {
          front: 'Patata/Papa',
          back: 'Potato',
          example: 'I like mashed potatoes.',
          pronunciation: '/pəˈteɪ.təʊ/',
          explanation: 'La patata es un tubérculo muy común en todo el mundo.'
        }
      ]
    } as any
  },
  {
    id: 'a1-u9-e36',
    type: 'multiple-choice',
    level: 'A1',
    topic: 'Food',
    topicName: 'Foodie Life',
    difficulty: 'medium',
    content: {
      title: 'Condimentos',
      instructions: '¿Qué es "salt"?',
      questions: [
        {
          id: 'q1',
          question: 'I add ________ to my food.',
          options: ['salt', 'juice', 'milk'],
          correctAnswer: 0,
          explanation: '"Salt" es sal. ¡No pongas demasiada!'
        }
      ]
    }
  },
  {
    id: 'a1-u9-e37',
    type: 'fill-blank',
    level: 'A1',
    topic: 'Food',
    topicName: 'Foodie Life',
    difficulty: 'medium',
    content: {
      title: 'Pastel de cumpleaños',
      instructions: 'Escribe la palabra para "pastel".',
      questions: [
        {
          id: 'q1',
          question: 'I eat ________ on my birthday.',
          answer: 'cake',
          explanation: '"Cake" es tarta o pastel, típico de celebraciones.'
        }
      ]
    } as any
  },
  {
    id: 'a1-u9-e38',
    type: 'matching',
    level: 'A1',
    topic: 'Food',
    topicName: 'Foodie Life',
    difficulty: 'medium',
    content: {
      title: 'Cubiertos y Vajilla',
      instructions: 'Une cada objeto con su nombre en inglés.',
      pairs: [
        { id: 'p1', left: 'Fork', right: 'Tenedor' },
        { id: 'p2', left: 'Knife', right: 'Cuchillo' },
        { id: 'p3', left: 'Spoon', right: 'Cuchara' },
        { id: 'p4', left: 'Plate', right: 'Plato' },
        { id: 'p5', left: 'Glass', right: 'Vaso' }
      ],
      explanation: 'Saber los nombres de los cubiertos es vital para comer fuera.'
    } as any
  },
  {
    id: 'a1-u9-e39',
    type: 'speaking-analysis',
    level: 'A1',
    topic: 'Food',
    topicName: 'Foodie Life',
    difficulty: 'easy',
    content: {
      title: 'Pronunciación: Meat',
      instructions: 'Di la palabra para "carne".',
      questions: [
        {
          id: 'q1',
          text: 'Meat',
          phonetic: '/miːt/',
          translation: 'Carne',
          explanation: 'La "ea" suena como una "i" larga.'
        }
      ]
    } as any
  },
  {
    id: 'a1-u9-e40',
    type: 'sentence-building',
    level: 'A1',
    topic: 'Food',
    topicName: 'Foodie Life',
    difficulty: 'medium',
    content: {
      title: '¿Tienes hambre?',
      instructions: 'Ordena las palabras para preguntar "¿Tienes hambre?".',
      sentences: [
        {
          id: 's1',
          words: ['hungry', 'you', 'Are'],
          correctSentence: 'Are you hungry',
          translation: '¿Tienes hambre?',
          hint: 'Empieza con "Are".',
          explanation: 'En inglés no "tenemos" hambre, sino que "estamos" hambrientos (Are you hungry?).'
        }
      ]
    } as any
  },
  {
    id: 'a1-u9-e41',
    type: 'multiple-choice',
    level: 'A1',
    topic: 'Food',
    topicName: 'Foodie Life',
    difficulty: 'medium',
    content: {
      title: '¿Tienes sed?',
      instructions: '¿Cómo se dice "sediento"?',
      questions: [
        {
          id: 'q1',
          question: 'I am ________.',
          options: ['thirsty', 'hungry', 'angry'],
          correctAnswer: 0,
          explanation: '"Thirsty" significa tener sed. ¡Bebe un poco de agua!'
        }
      ]
    }
  },
  {
    id: 'a1-u9-e42',
    type: 'flashcard',
    level: 'A1',
    topic: 'Food',
    topicName: 'Foodie Life',
    difficulty: 'medium',
    content: {
      items: [
        {
          front: 'Sopa',
          back: 'Soup',
          example: 'I like tomato soup.',
          pronunciation: '/suːp/',
          explanation: '"Soup" es una comida reconfortante, ideal para el frío.'
        }
      ]
    } as any
  },
  {
    id: 'a1-u9-e43',
    type: 'fill-blank',
    level: 'A1',
    topic: 'Food',
    topicName: 'Foodie Life',
    difficulty: 'hard',
    content: {
      title: 'Comiendo fuera',
      instructions: 'Escribe la palabra para "restaurante".',
      questions: [
        {
          id: 'q1',
          question: 'We eat at a ________.',
          answer: 'restaurant',
          explanation: '"Restaurant" se escribe casi igual que en español, pero fíjate en la "u".'
        }
      ]
    } as any
  },
  {
    id: 'a1-u9-e44',
    type: 'multiple-choice',
    level: 'A1',
    topic: 'Food',
    topicName: 'Foodie Life',
    difficulty: 'medium',
    content: {
      title: 'El menú',
      instructions: '¿Qué pides para ver qué hay de comer?',
      questions: [
        {
          id: 'q1',
          question: 'The ________, please.',
          options: ['menu', 'food', 'water'],
          correctAnswer: 0,
          explanation: 'Pedimos "the menu" para elegir nuestros platos.'
        }
      ]
    }
  },
  {
    id: 'a1-u9-e45',
    type: 'matching',
    level: 'A1',
    topic: 'Food',
    topicName: 'Foodie Life',
    difficulty: 'medium',
    content: {
      title: 'En el restaurante',
      instructions: 'Relaciona cada término con su traducción.',
      pairs: [
        { id: 'p1', left: 'The bill', right: 'La cuenta' },
        { id: 'p2', left: 'The menu', right: 'El menú' },
        { id: 'p3', left: 'The waiter', right: 'El camarero' },
        { id: 'p4', left: 'The tip', right: 'La propina' },
        { id: 'p5', left: 'The table', right: 'La mesa' }
      ],
      explanation: 'Estos términos son esenciales para desenvolverse en un restaurante.'
    } as any
  },
  {
    id: 'a1-u9-e46',
    type: 'speaking-analysis',
    level: 'A1',
    topic: 'Food',
    topicName: 'Foodie Life',
    difficulty: 'medium',
    content: {
      title: 'Pronunciación: Sugar',
      instructions: 'Di la palabra para "azúcar".',
      questions: [
        {
          id: 'q1',
          text: 'Sugar',
          phonetic: '/ˈʃʊɡ.ər/',
          translation: 'Azúcar',
          explanation: 'La "s" inicial suena como "sh" (/ʃ/).'
        }
      ]
    } as any
  },
  {
    id: 'a1-u9-e47',
    type: 'sentence-building',
    level: 'A1',
    topic: 'Food',
    topicName: 'Foodie Life',
    difficulty: 'hard',
    content: {
      title: 'Quiero una hamburguesa',
      instructions: 'Ordena las palabras para decir "Quiero una hamburguesa".',
      sentences: [
        {
          id: 's1',
          words: ['burger', 'a', 'want', 'I'],
          correctSentence: 'I want a burger',
          translation: 'Quiero una hamburguesa.',
          hint: 'Empieza con "I".',
          explanation: '"Burger" es la forma corta y común de "hamburger".'
        }
      ]
    } as any
  },
  {
    id: 'a1-u9-e48',
    type: 'multiple-choice',
    level: 'A1',
    topic: 'Food',
    topicName: 'Foodie Life',
    difficulty: 'easy',
    content: {
      title: 'Comida rápida',
      instructions: '¿Qué es "fast food"?',
      questions: [
        {
          id: 'q1',
          question: 'Pizza is ________.',
          options: ['fast food', 'fruit', 'drink'],
          correctAnswer: 0,
          explanation: '"Fast food" significa comida rápida.'
        }
      ]
    }
  },
  {
    id: 'a1-u9-e49',
    type: 'flashcard',
    level: 'A1',
    topic: 'Food',
    topicName: 'Foodie Life',
    difficulty: 'medium',
    content: {
      items: [
        {
          front: 'Delicioso',
          back: 'Delicious',
          example: 'The cake is delicious.',
          pronunciation: '/dɪˈlɪʃ.əs/',
          explanation: 'Usa esta palabra para elogiar la comida que te gusta.'
        }
      ]
    } as any
  },
  {
    id: 'a1-u9-e50',
    type: 'fill-blank',
    level: 'A1',
    topic: 'Food',
    topicName: 'Foodie Life',
    difficulty: 'hard',
    content: {
      title: 'La cuenta, por favor',
      instructions: 'Completa con la palabra para "la cuenta".',
      questions: [
        {
          id: 'q1',
          question: 'Can I have the ________, please?',
          answer: 'bill',
          explanation: '"Bill" es la cuenta en el Reino Unido (en EE.UU. se suele decir "check").'
        }
      ]
    } as any
  }
];
