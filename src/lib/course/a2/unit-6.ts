import { Exercise } from '@/lib/exercise-generator';

export const UNIT_6_EXERCISES: Exercise[] = [
  // --- SUB-TOPIC 1: Food & Drink Vocabulary (1-10) ---
  {
    id: 'a2-u6-e1',
    type: 'flashcard',
    level: 'A2',
    topic: 'Eating Out',
    topicName: 'Eating Out',
    difficulty: 'easy',
    content: {
      items: [
        {
          front: 'Menú / Carta',
          back: 'Menu',
          example: 'Can I see the menu, please?',
          pronunciation: '/ˈmenjuː/',
          explanation: 'La lista de platos disponibles en un restaurante.'
        }
      ]
    } as any
  },
  {
    id: 'a2-u6-e2',
    type: 'matching',
    level: 'A2',
    topic: 'Eating Out',
    topicName: 'Eating Out',
    difficulty: 'easy',
    content: {
      title: 'Food Categories',
      instructions: 'Une la categoría con el ejemplo.',
      pairs: [
        { id: '1', left: 'Vegetables', right: 'Carrots' },
        { id: '2', left: 'Fruit', right: 'Apple' },
        { id: '3', left: 'Meat', right: 'Beef' },
        { id: '4', left: 'Dairy', right: 'Cheese' },
        { id: '5', left: 'Beverages', right: 'Orange juice' }
      ],
      explanation: 'Grupos básicos de alimentos.'
    } as any
  },
  {
    id: 'a2-u6-e3',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Eating Out',
    topicName: 'Eating Out',
    difficulty: 'easy',
    content: {
      title: 'Ordering food',
      instructions: 'Elige la frase correcta para pedir.',
      questions: [
        {
          id: 'q1',
          question: '___ I have a glass of water, please?',
          options: ['Could', 'Do', 'Am'],
          correctAnswer: 0,
          explanation: 'Usamos "Could I have..." para pedir de forma educada.'
        }
      ]
    }
  },
  {
    id: 'a2-u6-e4',
    type: 'fill-blank',
    level: 'A2',
    topic: 'Eating Out',
    topicName: 'Eating Out',
    difficulty: 'easy',
    content: {
      title: 'Main course',
      instructions: 'Completa con la palabra.',
      questions: [
        {
          id: 'q1',
          text: 'The biggest part of the meal is the ___ course.',
          correctAnswer: 'main',
          explanation: 'El plato principal se llama "main course".'
        }
      ]
    }
  },
  {
    id: 'a2-u6-e5',
    type: 'sentence-building',
    level: 'A2',
    topic: 'Eating Out',
    topicName: 'Eating Out',
    difficulty: 'medium',
    content: {
      title: 'Asking for the bill',
      instructions: 'Ordena las palabras.',
      sentences: [
        {
          id: 's1',
          words: ['Could', 'we', 'have', 'the', 'bill', 'please', '?'],
          correctSentence: 'Could we have the bill please?',
          translation: '¿Podría traernos la cuenta, por favor?',
          hint: 'Empieza con "Could".',
          explanation: '"Bill" es la cuenta en el Reino Unido (en EE. UU. se usa "check").',
          points: 10
        }
      ]
    } as any
  },
  {
    id: 'a2-u6-e6',
    type: 'flashcard',
    level: 'A2',
    topic: 'Eating Out',
    topicName: 'Eating Out',
    difficulty: 'easy',
    content: {
      items: [
        {
          front: 'Camarero/a',
          back: 'Waiter / Waitress',
          example: 'The waiter is coming to our table.',
          pronunciation: '/ˈweɪtə/',
          explanation: '"Waiter" para hombre, "Waitress" para mujer (o "server" para ambos).'
        }
      ]
    } as any
  },
  {
    id: 'a2-u6-e7',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Eating Out',
    topicName: 'Eating Out',
    difficulty: 'medium',
    content: {
      title: 'Dessert',
      instructions: 'Elige la opción correcta.',
      questions: [
        {
          id: 'q1',
          question: 'Something sweet at the end of a meal is a ___.',
          options: ['desert', 'dessert', 'dinner'],
          correctAnswer: 1,
          explanation: '"Dessert" (con doble s) es el postre. "Desert" es desierto.'
        }
      ]
    }
  },
  {
    id: 'a2-u6-e8',
    type: 'speaking-analysis',
    level: 'A2',
    topic: 'Eating Out',
    topicName: 'Eating Out',
    difficulty: 'easy',
    content: {
      title: 'Pronunciation: Menu',
      instructions: 'Di "Menu".',
      questions: [
        {
          id: 'q1',
          text: 'Menu',
          correctAnswer: 'Menu',
          explanation: 'Se pronuncia /ˈmenjuː/, con una "i" suave antes de la "u".'
        }
      ]
    }
  },
  {
    id: 'a2-u6-e9',
    type: 'fill-blank',
    level: 'A2',
    topic: 'Eating Out',
    topicName: 'Eating Out',
    difficulty: 'medium',
    content: {
      title: 'Starters',
      instructions: 'Completa.',
      questions: [
        {
          id: 'q1',
          text: 'We would like some soup for ___ , please.',
          correctAnswer: 'starters',
          explanation: 'Los entrantes se llaman "starters" (o "appetizers").'
        }
      ]
    }
  },
  {
    id: 'a2-u6-e10',
    type: 'sentence-building',
    level: 'A2',
    topic: 'Eating Out',
    topicName: 'Eating Out',
    difficulty: 'medium',
    content: {
      title: 'Ready to order',
      instructions: 'Ordena.',
      sentences: [
        {
          id: 's1',
          words: ['Are', 'you', 'ready', 'to', 'order', '?'],
          correctSentence: 'Are you ready to order?',
          translation: '¿Están listos para pedir?',
          hint: 'Empieza con "Are".',
          explanation: 'Pregunta típica del camarero.',
          points: 10
        }
      ]
    } as any
  },

  // --- SUB-TOPIC 2: Countable & Uncountable Food (11-20) ---
  {
    id: 'a2-u6-e11',
    type: 'flashcard',
    level: 'A2',
    topic: 'Eating Out',
    topicName: 'Eating Out',
    difficulty: 'easy',
    content: {
      items: [
        {
          front: 'Contable',
          back: 'Countable',
          example: 'An apple, two apples.',
          pronunciation: '/ˈkaʊntəbəl/',
          explanation: 'Sustantivos que se pueden contar y tienen plural.'
        }
      ]
    } as any
  },
  {
    id: 'a2-u6-e12',
    type: 'flashcard',
    level: 'A2',
    topic: 'Eating Out',
    topicName: 'Eating Out',
    difficulty: 'easy',
    content: {
      items: [
        {
          front: 'Incontable',
          back: 'Uncountable',
          example: 'Milk, rice, sugar.',
          pronunciation: '/ʌnˈkaʊntəbəl/',
          explanation: 'Sustantivos que no tienen plural y no se pueden contar individualmente.'
        }
      ]
    } as any
  },
  {
    id: 'a2-u6-e13',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Eating Out',
    topicName: 'Eating Out',
    difficulty: 'medium',
    content: {
      title: 'Countable or Uncountable?',
      instructions: 'Elige la opción correcta.',
      questions: [
        {
          id: 'q1',
          question: 'Which word is UNCOUNTABLE?',
          options: ['Egg', 'Banana', 'Water'],
          correctAnswer: 2,
          explanation: 'Los líquidos como el agua son incontables.'
        }
      ]
    }
  },
  {
    id: 'a2-u6-e14',
    type: 'fill-blank',
    level: 'A2',
    topic: 'Eating Out',
    topicName: 'Eating Out',
    difficulty: 'medium',
    content: {
      title: 'Many vs Much',
      instructions: 'Completa con "many" o "much".',
      questions: [
        {
          id: 'q1',
          text: 'How ___ milk do we have?',
          correctAnswer: 'much',
          explanation: 'Usamos "much" para sustantivos incontables.'
        }
      ]
    }
  },
  {
    id: 'a2-u6-e15',
    type: 'sentence-building',
    level: 'A2',
    topic: 'Eating Out',
    topicName: 'Eating Out',
    difficulty: 'medium',
    content: {
      title: 'Asking for quantity',
      instructions: 'Ordena las palabras.',
      sentences: [
        {
          id: 's1',
          words: ['How', 'many', 'tomatoes', 'do', 'we', 'need', '?'],
          correctSentence: 'How many tomatoes do we need?',
          translation: '¿Cuántos tomates necesitamos?',
          hint: 'Tomates es contable.',
          explanation: 'Usamos "How many" para sustantivos contables en plural.',
          points: 10
        }
      ]
    } as any
  },
  {
    id: 'a2-u6-e16',
    type: 'flashcard',
    level: 'A2',
    topic: 'Eating Out',
    topicName: 'Eating Out',
    difficulty: 'easy',
    content: {
      items: [
        {
          front: 'Un poco de / Algo de',
          back: 'Some',
          example: 'I would like some juice.',
          pronunciation: '/sʌm/',
          explanation: 'Usado en oraciones afirmativas con incontables y plurales.'
        }
      ]
    } as any
  },
  {
    id: 'a2-u6-e17',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Eating Out',
    topicName: 'Eating Out',
    difficulty: 'medium',
    content: {
      title: 'Some vs Any',
      instructions: 'Elige la correcta.',
      questions: [
        {
          id: 'q1',
          question: "We don't have ___ bread left.",
          options: ['some', 'any', 'a'],
          correctAnswer: 1,
          explanation: 'Usamos "any" en oraciones negativas.'
        }
      ]
    }
  },
  {
    id: 'a2-u6-e18',
    type: 'speaking-analysis',
    level: 'A2',
    topic: 'Eating Out',
    topicName: 'Eating Out',
    difficulty: 'medium',
    content: {
      title: 'Pronunciation: Uncountable',
      instructions: 'Di "Uncountable".',
      questions: [
        {
          id: 'q1',
          text: 'Uncountable',
          correctAnswer: 'Uncountable',
          explanation: 'El acento va en la segunda sílaba: un-COUN-ta-ble.'
        }
      ]
    }
  },
  {
    id: 'a2-u6-e19',
    type: 'fill-blank',
    level: 'A2',
    topic: 'Eating Out',
    topicName: 'Eating Out',
    difficulty: 'hard',
    content: {
      title: 'Mixed quantities',
      instructions: 'Completa.',
      questions: [
        {
          id: 'q1',
          text: 'Would you like ___ coffee?',
          correctAnswer: 'some',
          explanation: 'Usamos "some" en preguntas cuando estamos ofreciendo algo.'
        }
      ]
    }
  },
  {
    id: 'a2-u6-e20',
    type: 'sentence-building',
    level: 'A2',
    topic: 'Eating Out',
    topicName: 'Eating Out',
    difficulty: 'hard',
    content: {
      title: 'Shopping list',
      instructions: 'Ordena.',
      sentences: [
        {
          id: 's1',
          words: ['I', 'need', 'to', 'buy', 'some', 'eggs', 'and', 'sugar', '.'],
          correctSentence: 'I need to buy some eggs and sugar.',
          translation: 'Necesito comprar algunos huevos y azúcar.',
          hint: 'Usa "some" para ambos.',
          explanation: '"Some" funciona tanto con contables plurales (eggs) como incontables (sugar).',
          points: 15
        }
      ]
    } as any
  },

  // --- SUB-TOPIC 3: At the Restaurant (21-30) ---
  {
    id: 'a2-u6-e21',
    type: 'flashcard',
    level: 'A2',
    topic: 'Eating Out',
    topicName: 'Eating Out',
    difficulty: 'easy',
    content: {
      items: [
        {
          front: 'Reservar una mesa',
          back: 'To book a table',
          example: 'I want to book a table for four.',
          pronunciation: '/tʊ bʊk ə ˈteɪbəl/',
          explanation: '"Book" como verbo significa reservar.'
        }
      ]
    } as any
  },
  {
    id: 'a2-u6-e22',
    type: 'matching',
    level: 'A2',
    topic: 'Eating Out',
    topicName: 'Eating Out',
    difficulty: 'easy',
    content: {
      title: 'Restaurant actions',
      instructions: 'Une la acción con su traducción.',
      pairs: [
        { id: '1', left: 'Order food', right: 'Pedir la comida' },
        { id: '2', left: 'Pay the bill', right: 'Pagar la cuenta' },
        { id: '3', left: 'Leave a tip', right: 'Dejar propina' },
        { id: '4', left: 'Recommendation', right: 'Recomendación' }
      ],
      explanation: 'Acciones habituales en un restaurante.'
    } as any
  },
  {
    id: 'a2-u6-e23',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Eating Out',
    topicName: 'Eating Out',
    difficulty: 'medium',
    content: {
      title: 'Waiter questions',
      instructions: '¿Qué pregunta el camarero?',
      questions: [
        {
          id: 'q1',
          question: '___ you like a dessert?',
          options: ['Would', 'Do', 'Are'],
          correctAnswer: 0,
          explanation: 'Usamos "Would you like..." para ofrecer algo educadamente.'
        }
      ]
    }
  },
  {
    id: 'a2-u6-e24',
    type: 'fill-blank',
    level: 'A2',
    topic: 'Eating Out',
    topicName: 'Eating Out',
    difficulty: 'medium',
    content: {
      title: 'Reservations',
      instructions: 'Completa.',
      questions: [
        {
          id: 'q1',
          text: 'I have a ___ for 8:00 PM under the name of Smith.',
          correctAnswer: 'reservation',
          explanation: 'Sustantivo derivado de "reserve".'
        }
      ]
    }
  },
  {
    id: 'a2-u6-e25',
    type: 'sentence-building',
    level: 'A2',
    topic: 'Eating Out',
    topicName: 'Eating Out',
    difficulty: 'medium',
    content: {
      title: 'Polite request',
      instructions: 'Ordena.',
      sentences: [
        {
          id: 's1',
          words: ['I', 'would', 'like', 'the', 'chicken', 'please', '.'],
          correctSentence: 'I would like the chicken please.',
          translation: 'Quisiera el pollo, por favor.',
          hint: 'Usa "would like".',
          explanation: 'Forma estándar y educada de pedir comida.',
          points: 10
        }
      ]
    } as any
  },
  {
    id: 'a2-u6-e26',
    type: 'flashcard',
    level: 'A2',
    topic: 'Eating Out',
    topicName: 'Eating Out',
    difficulty: 'easy',
    content: {
      items: [
        {
          front: 'Delicioso / Rico',
          back: 'Delicious / Tasty',
          example: 'The pasta was delicious.',
          pronunciation: '/dɪˈlɪʃəs/',
          explanation: 'Adjetivos para describir comida con buen sabor.'
        }
      ]
    } as any
  },
  {
    id: 'a2-u6-e27',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Eating Out',
    topicName: 'Eating Out',
    difficulty: 'medium',
    content: {
      title: 'Ways to cook',
      instructions: 'Elige la correcta.',
      questions: [
        {
          id: 'q1',
          question: 'Potatoes cooked in hot oil are ___.',
          options: ['fried', 'boiled', 'grilled'],
          correctAnswer: 0,
          explanation: '"Fried" significa frito.'
        }
      ]
    }
  },
  {
    id: 'a2-u6-e28',
    type: 'speaking-analysis',
    level: 'A2',
    topic: 'Eating Out',
    topicName: 'Eating Out',
    difficulty: 'easy',
    content: {
      title: 'Pronunciation: Waitress',
      instructions: 'Di "Waitress".',
      questions: [
        {
          id: 'q1',
          text: 'Waitress',
          correctAnswer: 'Waitress',
          explanation: 'Se pronuncia /ˈweɪtrəs/.'
        }
      ]
    }
  },
  {
    id: 'a2-u6-e29',
    type: 'fill-blank',
    level: 'A2',
    topic: 'Eating Out',
    topicName: 'Eating Out',
    difficulty: 'hard',
    content: {
      title: 'Restaurant feedback',
      instructions: 'Completa.',
      questions: [
        {
          id: 'q1',
          text: 'Everything was great, keep the ___ .',
          correctAnswer: 'change',
          explanation: '"Keep the change" significa "quédese con el cambio" (propina).'
        }
      ]
    }
  },
  {
    id: 'a2-u6-e30',
    type: 'sentence-building',
    level: 'A2',
    topic: 'Eating Out',
    topicName: 'Eating Out',
    difficulty: 'hard',
    content: {
      title: 'Booking a table',
      instructions: 'Ordena las palabras.',
      sentences: [
        {
          id: 's1',
          words: ['We', 'want', 'to', 'book', 'a', 'table', 'for', 'two', '.'],
          correctSentence: 'We want to book a table for two.',
          translation: 'Queremos reservar una mesa para dos.',
          hint: 'Usa "for two".',
          explanation: 'Frase común para reservas telefónicas.',
          points: 15
        }
      ]
    } as any
  },

  // --- SUB-TOPIC 4: Describing Food (31-40) ---
  {
    id: 'a2-u6-e31',
    type: 'flashcard',
    level: 'A2',
    topic: 'Eating Out',
    topicName: 'Eating Out',
    difficulty: 'easy',
    content: {
      items: [
        {
          front: 'Picante',
          back: 'Spicy / Hot',
          example: 'I love spicy Mexican food.',
          pronunciation: '/ˈspaɪsi/',
          explanation: 'Comida con especias fuertes o chile.'
        }
      ]
    } as any
  },
  {
    id: 'a2-u6-e32',
    type: 'matching',
    level: 'A2',
    topic: 'Eating Out',
    topicName: 'Eating Out',
    difficulty: 'easy',
    content: {
      title: 'Flavors',
      instructions: 'Une el sabor con su traducción.',
      pairs: [
        { id: '1', left: 'Sweet', right: 'Dulce' },
        { id: '2', left: 'Salty', right: 'Salado' },
        { id: '3', left: 'Sour', right: 'Ácido / Agrio' },
        { id: '4', left: 'Bitter', right: 'Amargo' }
      ],
      explanation: 'Los sabores básicos.'
    } as any
  },
  {
    id: 'a2-u6-e33',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Eating Out',
    topicName: 'Eating Out',
    difficulty: 'medium',
    content: {
      title: 'How is the food?',
      instructions: 'Elige el adjetivo.',
      questions: [
        {
          id: 'q1',
          question: 'This lemon is very ___.',
          options: ['sweet', 'sour', 'salty'],
          correctAnswer: 1,
          explanation: 'Los limones son ácidos (sour).'
        }
      ]
    }
  },
  {
    id: 'a2-u6-e34',
    type: 'fill-blank',
    level: 'A2',
    topic: 'Eating Out',
    topicName: 'Eating Out',
    difficulty: 'medium',
    content: {
      title: 'Cooking methods',
      instructions: 'Completa.',
      questions: [
        {
          id: 'q1',
          text: '___ eggs are healthier than fried eggs.',
          correctAnswer: 'boiled',
          explanation: '"Boiled" significa hervido o cocido.'
        }
      ]
    }
  },
  {
    id: 'a2-u6-e35',
    type: 'sentence-building',
    level: 'A2',
    topic: 'Eating Out',
    topicName: 'Eating Out',
    difficulty: 'medium',
    content: {
      title: 'Opinion on dish',
      instructions: 'Ordena.',
      sentences: [
        {
          id: 's1',
          words: ['This', 'soup', 'is', 'a', 'bit', 'too', 'salty', '.'],
          correctSentence: 'This soup is a bit too salty.',
          translation: 'Esta sopa está un poco demasiado salada.',
          hint: 'Usa "too salty".',
          explanation: '"Too" indica un exceso negativo.',
          points: 10
        }
      ]
    } as any
  },
  {
    id: 'a2-u6-e36',
    type: 'flashcard',
    level: 'A2',
    topic: 'Eating Out',
    topicName: 'Eating Out',
    difficulty: 'easy',
    content: {
      items: [
        {
          front: 'Crudo',
          back: 'Raw',
          example: 'Sushi is made with raw fish.',
          pronunciation: '/rɔː/',
          explanation: 'Comida que no ha sido cocinada.'
        }
      ]
    } as any
  },
  {
    id: 'a2-u6-e37',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Eating Out',
    topicName: 'Eating Out',
    difficulty: 'medium',
    content: {
      title: 'Meat cooking',
      instructions: 'Elige.',
      questions: [
        {
          id: 'q1',
          question: 'I like my steak well ___.',
          options: ['done', 'made', 'cooked'],
          correctAnswer: 0,
          explanation: '"Well done" es el término para carne muy hecha.'
        }
      ]
    }
  },
  {
    id: 'a2-u6-e38',
    type: 'speaking-analysis',
    level: 'A2',
    topic: 'Eating Out',
    topicName: 'Eating Out',
    difficulty: 'medium',
    content: {
      title: 'Pronunciation: Spicy',
      instructions: 'Di "I don\'t like spicy food".',
      questions: [
        {
          id: 'q1',
          text: "I don't like spicy food",
          correctAnswer: "I don't like spicy food",
          explanation: 'Pronuncia la "y" final de "spicy" claramente.'
        }
      ]
    }
  },
  {
    id: 'a2-u6-e39',
    type: 'fill-blank',
    level: 'A2',
    topic: 'Eating Out',
    topicName: 'Eating Out',
    difficulty: 'hard',
    content: {
      title: 'Healthy eating',
      instructions: 'Completa.',
      questions: [
        {
          id: 'q1',
          text: 'I prefer ___ vegetables to fried ones.',
          correctAnswer: 'steamed',
          explanation: '"Steamed" significa al vapor.'
        }
      ]
    }
  },
  {
    id: 'a2-u6-e40',
    type: 'sentence-building',
    level: 'A2',
    topic: 'Eating Out',
    topicName: 'Eating Out',
    difficulty: 'hard',
    content: {
      title: 'Favorite flavor',
      instructions: 'Ordena.',
      sentences: [
        {
          id: 's1',
          words: ['I', 'love', 'the', 'bitter', 'taste', 'of', 'coffee', '.'],
          correctSentence: 'I love the bitter taste of coffee.',
          translation: 'Me encanta el sabor amargo del café.',
          hint: 'Amargo es "bitter".',
          explanation: 'Estructura para describir un gusto específico.',
          points: 15
        }
      ]
    } as any
  },

  // --- SUB-TOPIC 5: Review & Mix (41-50) ---
  {
    id: 'a2-u6-e41',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Eating Out',
    topicName: 'Eating Out',
    difficulty: 'medium',
    content: {
      title: 'Review: Countable plural',
      instructions: 'Elige.',
      questions: [
        {
          id: 'q1',
          question: 'There are ___ apples in the fridge.',
          options: ['some', 'much', 'any'],
          correctAnswer: 0,
          explanation: 'Usamos "some" para afirmativas con contables en plural.'
        }
      ]
    }
  },
  {
    id: 'a2-u6-e42',
    type: 'fill-blank',
    level: 'A2',
    topic: 'Eating Out',
    topicName: 'Eating Out',
    difficulty: 'medium',
    content: {
      title: 'Review: Any in negative',
      instructions: 'Completa.',
      questions: [
        {
          id: 'q1',
          text: "We don't have ___ sugar for the coffee.",
          correctAnswer: 'any',
          explanation: 'Usamos "any" tras una negación con un incontable (sugar).'
        }
      ]
    }
  },
  {
    id: 'a2-u6-e43',
    type: 'sentence-building',
    level: 'A2',
    topic: 'Eating Out',
    topicName: 'Eating Out',
    difficulty: 'medium',
    content: {
      title: 'Review: Could request',
      instructions: 'Ordena.',
      sentences: [
        {
          id: 's1',
          words: ['Could', 'I', 'have', 'the', 'menu', 'again', 'please', '?'],
          correctSentence: 'Could I have the menu again please?',
          translation: '¿Podría traerme el menú otra vez, por favor?',
          hint: 'Empieza con "Could".',
          explanation: 'Petición educada en el restaurante.',
          points: 10
        }
      ]
    } as any
  },
  {
    id: 'a2-u6-e44',
    type: 'speaking-analysis',
    level: 'A2',
    topic: 'Eating Out',
    topicName: 'Eating Out',
    difficulty: 'hard',
    content: {
      title: 'Pronunciation: Reservation',
      instructions: 'Di "I have a reservation for tonight".',
      questions: [
        {
          id: 'q1',
          text: 'I have a reservation for tonight',
          correctAnswer: 'I have a reservation for tonight',
          explanation: 'El acento va en la "va": re-ser-VA-tion.'
        }
      ]
    }
  },
  {
    id: 'a2-u6-e45',
    type: 'matching',
    level: 'A2',
    topic: 'Eating Out',
    topicName: 'Eating Out',
    difficulty: 'medium',
    content: {
      title: 'Food Mix',
      instructions: 'Une el tipo de comida con su método de cocción habitual.',
      pairs: [
        { id: '1', left: 'Chips', right: 'Fried' },
        { id: '2', left: 'Rice', right: 'Boiled' },
        { id: '3', left: 'Salad', right: 'Raw' },
        { id: '4', left: 'Pizza', right: 'Baked' }
      ],
      explanation: 'Relación entre alimentos y cocina.'
    } as any
  },
  {
    id: 'a2-u6-e46',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Eating Out',
    topicName: 'Eating Out',
    difficulty: 'medium',
    content: {
      title: 'Review: How much',
      instructions: 'Elige.',
      questions: [
        {
          id: 'q1',
          question: '___ is the bill?',
          options: ['How many', 'How much', 'How'],
          correctAnswer: 1,
          explanation: 'Usamos "How much" para preguntar por el precio (dinero es incontable).'
        }
      ]
    }
  },
  {
    id: 'a2-u6-e47',
    type: 'fill-blank',
    level: 'A2',
    topic: 'Eating Out',
    topicName: 'Eating Out',
    difficulty: 'hard',
    content: {
      title: 'Review: Order',
      instructions: 'Completa.',
      questions: [
        {
          id: 'q1',
          text: 'I would like to ___ the steak.',
          correctAnswer: 'order',
          explanation: 'Verbo para pedir en un restaurante.'
        }
      ]
    }
  },
  {
    id: 'a2-u6-e48',
    type: 'sentence-building',
    level: 'A2',
    topic: 'Eating Out',
    topicName: 'Eating Out',
    difficulty: 'hard',
    content: {
      title: 'Review: Questions',
      instructions: 'Ordena.',
      sentences: [
        {
          id: 's1',
          words: ['Do', 'you', 'have', 'any', 'vegetarian', 'dishes', '?'],
          correctSentence: 'Do you have any vegetarian dishes?',
          translation: '¿Tienen algunos platos vegetarianos?',
          hint: 'Usa "any".',
          explanation: 'Pregunta común sobre preferencias dietéticas.',
          points: 10
        }
      ]
    } as any
  },
  {
    id: 'a2-u6-e49',
    type: 'speaking-analysis',
    level: 'A2',
    topic: 'Eating Out',
    topicName: 'Eating Out',
    difficulty: 'medium',
    content: {
      title: 'Pronunciation: Tasty',
      instructions: 'Di "This soup is very tasty".',
      questions: [
        {
          id: 'q1',
          text: 'This soup is very tasty',
          correctAnswer: 'This soup is very tasty',
          explanation: '"Tasty" es un sinónimo común de delicioso.'
        }
      ]
    }
  },
  {
    id: 'a2-u6-e50',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Eating Out',
    topicName: 'Eating Out',
    difficulty: 'easy',
    content: {
      title: 'Final food check',
      instructions: '¿Qué se bebe?',
      questions: [
        {
          id: 'q1',
          question: 'Which one is a drink?',
          options: ['Rice', 'Soda', 'Chicken'],
          correctAnswer: 1,
          explanation: 'La soda es una bebida (drink).'
        }
      ]
    }
  }
];
