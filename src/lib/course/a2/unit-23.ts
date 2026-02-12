import { Exercise } from '@/lib/exercise-generator';

export const UNIT_23_EXERCISES: Exercise[] = [
  // --- SUB-TOPIC 1: Kitchen Verbs & Actions (1-12) ---
  {
    id: 'a2-u23-e1',
    type: 'flashcard',
    level: 'A2',
    topic: 'Cooking & Recipes',
    topicName: 'Cooking & Recipes',
    difficulty: 'easy',
    content: {
      items: [
        {
          front: 'Picar / Cortar en trozos',
          back: 'Chop',
          example: 'Chop the onions into small pieces.',
          pronunciation: '/tʃɒp/',
          explanation: 'Cortar algo con un cuchillo.'
        }
      ]
    } as any
  },
  {
    id: 'a2-u23-e2',
    type: 'matching',
    level: 'A2',
    topic: 'Cooking & Recipes',
    topicName: 'Cooking & Recipes',
    difficulty: 'easy',
    content: {
      title: 'Cooking Actions',
      instructions: 'Une el verbo con su traducción.',
      pairs: [
        { id: '1', left: 'Boil', right: 'Hervir' },
        { id: '2', left: 'Fry', right: 'Freír' },
        { id: '3', left: 'Bake', right: 'Hornear' },
        { id: '4', left: 'Stir', right: 'Remover' },
        { id: '5', left: 'Peel', right: 'Pelar' }
      ],
      explanation: 'Verbos básicos de cocina.'
    } as any
  },
  {
    id: 'a2-u23-e3',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Cooking & Recipes',
    topicName: 'Cooking & Recipes',
    difficulty: 'easy',
    content: {
      title: 'Making Tea',
      instructions: 'Elige la opción correcta.',
      questions: [
        {
          id: 'q1',
          question: 'First, you need to ___ some water.',
          options: ['boil', 'bake', 'fry'],
          correctAnswer: 0,
          explanation: 'Para el té hay que hervir (boil) agua.'
        }
      ]
    }
  },
  {
    id: 'a2-u23-e4',
    type: 'fill-blank',
    level: 'A2',
    topic: 'Cooking & Recipes',
    topicName: 'Cooking & Recipes',
    difficulty: 'easy',
    content: {
      title: 'Preparing Vegetables',
      instructions: 'Completa la frase.',
      questions: [
        {
          id: 'q1',
          text: 'Please ___ the potatoes before you cook them.',
          correctAnswer: 'peel',
          explanation: '"Peel" significa pelar.'
        }
      ]
    }
  },
  {
    id: 'a2-u23-e5',
    type: 'sentence-building',
    level: 'A2',
    topic: 'Cooking & Recipes',
    topicName: 'Cooking & Recipes',
    difficulty: 'medium',
    content: {
      title: 'Cooking Pasta',
      instructions: 'Ordena la frase.',
      sentences: [
        {
          id: 's1',
          words: ['Cook', 'the', 'pasta', 'in', 'boiling', 'water', '.'],
          correctSentence: 'Cook the pasta in boiling water.',
          translation: 'Cocina la pasta en agua hirviendo.',
          hint: 'Usa "boiling".',
          explanation: 'Instrucción básica de receta.',
          points: 10
        }
      ]
    } as any
  },
  {
    id: 'a2-u23-e6',
    type: 'flashcard',
    level: 'A2',
    topic: 'Cooking & Recipes',
    topicName: 'Cooking & Recipes',
    difficulty: 'easy',
    content: {
      items: [
        {
          front: 'Asar',
          back: 'Roast',
          example: 'We are going to roast a chicken.',
          pronunciation: '/rəʊst/',
          explanation: 'Cocinar carne o verduras en el horno.'
        }
      ]
    } as any
  },
  {
    id: 'a2-u23-e7',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Cooking & Recipes',
    topicName: 'Cooking & Recipes',
    difficulty: 'medium',
    content: {
      title: 'Adding ingredients',
      instructions: 'Elige el verbo.',
      questions: [
        {
          id: 'q1',
          question: '___ some salt and pepper to the soup.',
          options: ['Add', 'Cut', 'Bake'],
          correctAnswer: 0,
          explanation: '"Add" es añadir.'
        }
      ]
    }
  },
  {
    id: 'a2-u23-e8',
    type: 'speaking-analysis',
    level: 'A2',
    topic: 'Cooking & Recipes',
    topicName: 'Cooking & Recipes',
    difficulty: 'easy',
    content: {
      title: 'Pronunciation: Stir',
      instructions: 'Di "Stir the sauce".',
      questions: [
        {
          id: 'q1',
          text: 'Stir the sauce',
          correctAnswer: 'Stir the sauce',
          explanation: 'Pronuncia "stir" como /stɜːr/.'
        }
      ]
    }
  },
  {
    id: 'a2-u23-e9',
    type: 'fill-blank',
    level: 'A2',
    topic: 'Cooking & Recipes',
    topicName: 'Cooking & Recipes',
    difficulty: 'medium',
    content: {
      title: 'Baking',
      instructions: 'Completa.',
      questions: [
        {
          id: 'q1',
          text: 'I am going to ___ a chocolate cake.',
          correctAnswer: 'bake',
          explanation: 'Para pasteles y pan usamos "bake" (hornear).'
        }
      ]
    }
  },
  {
    id: 'a2-u23-e10',
    type: 'sentence-building',
    level: 'A2',
    topic: 'Cooking & Recipes',
    topicName: 'Cooking & Recipes',
    difficulty: 'medium',
    content: {
      title: 'Recipe step',
      instructions: 'Ordena la frase.',
      sentences: [
        {
          id: 's1',
          words: ['Mix', 'the', 'eggs', 'with', 'the', 'sugar', '.'],
          correctSentence: 'Mix the eggs with the sugar.',
          translation: 'Mezcla los huevos con el azúcar.',
          hint: 'Usa "Mix".',
          explanation: '"Mix" es mezclar.',
          points: 10
        }
      ]
    } as any
  },
  {
    id: 'a2-u23-e11',
    type: 'matching',
    level: 'A2',
    topic: 'Cooking & Recipes',
    topicName: 'Cooking & Recipes',
    difficulty: 'medium',
    content: {
      title: 'Ways of Cooking',
      instructions: 'Une el método con el lugar.',
      pairs: [
        { id: '1', left: 'Bake / Roast', right: 'In the oven' },
        { id: '2', left: 'Fry', right: 'In a pan with oil' },
        { id: '3', left: 'Boil', right: 'In a pot with water' },
        { id: '4', left: 'Grill', right: 'Under or over high heat' }
      ],
      explanation: 'Diferentes formas de cocinar alimentos.'
    } as any
  },
  {
    id: 'a2-u23-e12',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Cooking & Recipes',
    topicName: 'Cooking & Recipes',
    difficulty: 'hard',
    content: {
      title: 'Recipe Vocabulary',
      instructions: 'Elige la opción correcta.',
      questions: [
        {
          id: 'q1',
          question: '___ the butter in a pan before adding the flour.',
          options: ['Melt', 'Chop', 'Bake'],
          correctAnswer: 0,
          explanation: '"Melt" es derretir.'
        }
      ]
    }
  },

  // --- SUB-TOPIC 2: Quantifiers (Much, Many, A lot of) (13-24) ---
  {
    id: 'a2-u23-e13',
    type: 'flashcard',
    level: 'A2',
    topic: 'Cooking & Recipes',
    topicName: 'Cooking & Recipes',
    difficulty: 'easy',
    content: {
      items: [
        {
          front: 'Mucho / Muchos',
          back: 'A lot of',
          example: 'I have a lot of apples.',
          pronunciation: '/ə lɒt əv/',
          explanation: '"A lot of" se usa para contables e incontables, sobre todo en afirmativo.'
        }
      ]
    } as any
  },
  {
    id: 'a2-u23-e14',
    type: 'matching',
    level: 'A2',
    topic: 'Cooking & Recipes',
    topicName: 'Cooking & Recipes',
    difficulty: 'easy',
    content: {
      title: 'Much vs Many',
      instructions: 'Une el cuantificador con su tipo de sustantivo.',
      pairs: [
        { id: '1', left: 'Many', right: 'Countable (plural)' },
        { id: '2', left: 'Much', right: 'Uncountable' },
        { id: '3', left: 'A lot of', right: 'Both' }
      ],
      explanation: 'Regla básica de cuantificadores.'
    } as any
  },
  {
    id: 'a2-u23-e15',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Cooking & Recipes',
    topicName: 'Cooking & Recipes',
    difficulty: 'medium',
    content: {
      title: 'Quantities',
      instructions: 'Elige la opción correcta.',
      questions: [
        {
          id: 'q1',
          question: 'How ___ milk do we need?',
          options: ['much', 'many', 'a lot'],
          correctAnswer: 0,
          explanation: 'Milk is uncountable, so we use "much".'
        }
      ]
    }
  },
  {
    id: 'a2-u23-e16',
    type: 'fill-blank',
    level: 'A2',
    topic: 'Cooking & Recipes',
    topicName: 'Cooking & Recipes',
    difficulty: 'medium',
    content: {
      title: 'Countable plural',
      instructions: 'Completa con much o many.',
      questions: [
        {
          id: 'q1',
          text: 'How ___ eggs should I add?',
          correctAnswer: 'many',
          explanation: 'Eggs are countable plural.'
        }
      ]
    }
  },
  {
    id: 'a2-u23-e17',
    type: 'sentence-building',
    level: 'A2',
    topic: 'Cooking & Recipes',
    topicName: 'Cooking & Recipes',
    difficulty: 'medium',
    content: {
      title: 'Ingredient check',
      instructions: 'Ordena la frase.',
      sentences: [
        {
          id: 's1',
          words: ['We', 'have', 'a', 'lot', 'of', 'flour', '.'],
          correctSentence: 'We have a lot of flour.',
          translation: 'Tenemos mucha harina.',
          hint: 'Frase afirmativa.',
          explanation: '"A lot of" es perfecto para afirmativas.',
          points: 10
        }
      ]
    } as any
  },
  {
    id: 'a2-u23-e18',
    type: 'flashcard',
    level: 'A2',
    topic: 'Cooking & Recipes',
    topicName: 'Cooking & Recipes',
    difficulty: 'easy',
    content: {
      items: [
        {
          front: 'Un poco (incontable)',
          back: 'A little',
          example: 'Add a little sugar.',
          pronunciation: '/ə ˈlɪtl/',
          explanation: 'Se usa con sustantivos incontables.'
        }
      ]
    } as any
  },
  {
    id: 'a2-u23-e19',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Cooking & Recipes',
    topicName: 'Cooking & Recipes',
    difficulty: 'medium',
    content: {
      title: 'A few vs A little',
      instructions: 'Elige la opción correcta.',
      questions: [
        {
          id: 'q1',
          question: 'I only need ___ tomatoes for the salad.',
          options: ['a few', 'a little', 'much'],
          correctAnswer: 0,
          explanation: 'Tomatoes are countable plural, so we use "a few".'
        }
      ]
    }
  },
  {
    id: 'a2-u23-e20',
    type: 'speaking-analysis',
    level: 'A2',
    topic: 'Cooking & Recipes',
    topicName: 'Cooking & Recipes',
    difficulty: 'easy',
    content: {
      title: 'Pronunciation: Many',
      instructions: 'Di "How many eggs?".',
      questions: [
        {
          id: 'q1',
          text: 'How many eggs?',
          correctAnswer: 'How many eggs?',
          explanation: 'Pronuncia "many" como /ˈmeni/.'
        }
      ]
    }
  },
  {
    id: 'a2-u23-e21',
    type: 'fill-blank',
    level: 'A2',
    topic: 'Cooking & Recipes',
    topicName: 'Cooking & Recipes',
    difficulty: 'hard',
    content: {
      title: 'Negative quantifier',
      instructions: 'Completa.',
      questions: [
        {
          id: 'q1',
          text: 'There isn’t ___ butter left.',
          correctAnswer: 'much',
          explanation: 'Usamos "much" en negativas con incontables.'
        }
      ]
    }
  },
  {
    id: 'a2-u23-e22',
    type: 'sentence-building',
    level: 'A2',
    topic: 'Cooking & Recipes',
    topicName: 'Cooking & Recipes',
    difficulty: 'medium',
    content: {
      title: 'Healthy habit',
      instructions: 'Ordena la frase.',
      sentences: [
        {
          id: 's1',
          words: ['Don’t', 'eat', 'too', 'much', 'sugar', '.'],
          correctSentence: 'Don’t eat too much sugar.',
          translation: 'No comas demasiada azúcar.',
          hint: 'Usa "too much".',
          explanation: '"Too much" indica exceso en incontables.',
          points: 10
        }
      ]
    } as any
  },
  {
    id: 'a2-u23-e23',
    type: 'matching',
    level: 'A2',
    topic: 'Cooking & Recipes',
    topicName: 'Cooking & Recipes',
    difficulty: 'medium',
    content: {
      title: 'Quantifier Mix',
      instructions: 'Une el sustantivo con el cuantificador correcto.',
      pairs: [
        { id: '1', left: 'Water', right: 'Much / A little' },
        { id: '2', left: 'Biscuits', right: 'Many / A few' },
        { id: '3', left: 'Honey', right: 'Much / A little' },
        { id: '4', left: 'Apples', right: 'Many / A few' }
      ],
      explanation: 'Práctica de contables e incontables.'
    } as any
  },
  {
    id: 'a2-u23-e24',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Cooking & Recipes',
    topicName: 'Cooking & Recipes',
    difficulty: 'hard',
    content: {
      title: 'Correct Quantifier',
      instructions: '¿Cuál es correcta?',
      questions: [
        {
          id: 'q1',
          question: 'We don’t have ___ vegetables for the soup.',
          options: ['many', 'much', 'a little'],
          correctAnswer: 0,
          explanation: '"Vegetables" es contable plural.'
        }
      ]
    }
  },

  // --- SUB-TOPIC 3: Ingredients & Equipment (25-36) ---
  {
    id: 'a2-u23-e25',
    type: 'flashcard',
    level: 'A2',
    topic: 'Cooking & Recipes',
    topicName: 'Cooking & Recipes',
    difficulty: 'easy',
    content: {
      items: [
        {
          front: 'Sartén',
          back: 'Frying pan',
          example: 'Put some oil in the frying pan.',
          pronunciation: '/ˈfraɪɪŋ pæn/',
          explanation: 'Utensilio para freír.'
        }
      ]
    } as any
  },
  {
    id: 'a2-u23-e26',
    type: 'matching',
    level: 'A2',
    topic: 'Cooking & Recipes',
    topicName: 'Cooking & Recipes',
    difficulty: 'easy',
    content: {
      title: 'Kitchen Tools',
      instructions: 'Une el objeto con su traducción.',
      pairs: [
        { id: '1', left: 'Knife', right: 'Cuchillo' },
        { id: '2', left: 'Spoon', right: 'Cuchara' },
        { id: '3', left: 'Fork', right: 'Tenedor' },
        { id: '4', left: 'Bowl', right: 'Bol / Cuenco' },
        { id: '5', left: 'Oven', right: 'Horno' }
      ],
      explanation: 'Vocabulario básico de utensilios.'
    } as any
  },
  {
    id: 'a2-u23-e27',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Cooking & Recipes',
    topicName: 'Cooking & Recipes',
    difficulty: 'easy',
    content: {
      title: 'The Recipe',
      instructions: 'Elige la opción correcta.',
      questions: [
        {
          id: 'q1',
          question: 'Check the ___ to see how to make the cake.',
          options: ['recipe', 'menu', 'bill'],
          correctAnswer: 0,
          explanation: '"Recipe" es la receta.'
        }
      ]
    }
  },
  {
    id: 'a2-u23-e28',
    type: 'fill-blank',
    level: 'A2',
    topic: 'Cooking & Recipes',
    topicName: 'Cooking & Recipes',
    difficulty: 'easy',
    content: {
      title: 'Flavoring',
      instructions: 'Completa la frase.',
      questions: [
        {
          id: 'q1',
          text: 'Don’t forget to add ___ and pepper.',
          correctAnswer: 'salt',
          explanation: 'Sal (salt) y pimienta.'
        }
      ]
    }
  },
  {
    id: 'a2-u23-e29',
    type: 'sentence-building',
    level: 'A2',
    topic: 'Cooking & Recipes',
    topicName: 'Cooking & Recipes',
    difficulty: 'medium',
    content: {
      title: 'Kitchen appliance',
      instructions: 'Ordena la frase.',
      sentences: [
        {
          id: 's1',
          words: ['Put', 'the', 'milk', 'in', 'the', 'fridge', '.'],
          correctSentence: 'Put the milk in the fridge.',
          translation: 'Pon la leche en la nevera.',
          hint: 'Usa "fridge".',
          explanation: '"Fridge" es la nevera/frigorífico.',
          points: 10
        }
      ]
    } as any
  },
  {
    id: 'a2-u23-e30',
    type: 'flashcard',
    level: 'A2',
    topic: 'Cooking & Recipes',
    topicName: 'Cooking & Recipes',
    difficulty: 'easy',
    content: {
      items: [
        {
          front: 'Ingredientes',
          back: 'Ingredients',
          example: 'Do we have all the ingredients?',
          pronunciation: '/ɪnˈɡriːdiənts/',
          explanation: 'Las cosas necesarias para hacer un plato.'
        }
      ]
    } as any
  },
  {
    id: 'a2-u23-e31',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Cooking & Recipes',
    topicName: 'Cooking & Recipes',
    difficulty: 'medium',
    content: {
      title: 'Measuring',
      instructions: 'Elige la unidad correcta.',
      questions: [
        {
          id: 'q1',
          question: 'We need 200 ___ of sugar.',
          options: ['grams', 'liters', 'meters'],
          correctAnswer: 0,
          explanation: 'El azúcar se mide en gramos (grams).'
        }
      ]
    }
  },
  {
    id: 'a2-u23-e32',
    type: 'speaking-analysis',
    level: 'A2',
    topic: 'Cooking & Recipes',
    topicName: 'Cooking & Recipes',
    difficulty: 'easy',
    content: {
      title: 'Pronunciation: Knife',
      instructions: 'Di "I need a knife".',
      questions: [
        {
          id: 'q1',
          text: 'I need a knife',
          correctAnswer: 'I need a knife',
          explanation: 'La "k" es muda: /naɪf/.'
        }
      ]
    }
  },
  {
    id: 'a2-u23-e33',
    type: 'fill-blank',
    level: 'A2',
    topic: 'Cooking & Recipes',
    topicName: 'Cooking & Recipes',
    difficulty: 'medium',
    content: {
      title: 'Cooking pot',
      instructions: 'Completa.',
      questions: [
        {
          id: 'q1',
          text: 'Fill the ___ with water to boil the pasta.',
          correctAnswer: 'pot',
          explanation: '"Pot" (o saucepan) es la olla.'
        }
      ]
    }
  },
  {
    id: 'a2-u23-e34',
    type: 'sentence-building',
    level: 'A2',
    topic: 'Cooking & Recipes',
    topicName: 'Cooking & Recipes',
    difficulty: 'medium',
    content: {
      title: 'Shopping list',
      instructions: 'Ordena la frase.',
      sentences: [
        {
          id: 's1',
          words: ['We', 'need', 'a', 'new', 'microwave', '.'],
          correctSentence: 'We need a new microwave.',
          translation: 'Necesitamos un microondas nuevo.',
          hint: 'Usa "microwave".',
          explanation: 'Aparato de cocina común.',
          points: 10
        }
      ]
    } as any
  },
  {
    id: 'a2-u23-e35',
    type: 'matching',
    level: 'A2',
    topic: 'Cooking & Recipes',
    topicName: 'Cooking & Recipes',
    difficulty: 'medium',
    content: {
      title: 'Containers',
      instructions: 'Une el alimento con su contenedor típico.',
      pairs: [
        { id: '1', left: 'A carton of', right: 'Milk / Juice' },
        { id: '2', left: 'A tin of', right: 'Tuna / Soup' },
        { id: '3', left: 'A packet of', right: 'Biscuits / Pasta' },
        { id: '4', left: 'A jar of', right: 'Honey / Jam' }
      ],
      explanation: 'Vocabulario de envases.'
    } as any
  },
  {
    id: 'a2-u23-e36',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Cooking & Recipes',
    topicName: 'Cooking & Recipes',
    difficulty: 'hard',
    content: {
      title: 'Heat level',
      instructions: 'Elige la opción correcta.',
      questions: [
        {
          id: 'q1',
          question: 'Cook the steak over a high ___ .',
          options: ['heat', 'fire', 'hot'],
          correctAnswer: 0,
          explanation: '"High heat" es fuego alto.'
        }
      ]
    }
  },

  // --- SUB-TOPIC 4: Food Descriptions & Taste (37-45) ---
  {
    id: 'a2-u23-e37',
    type: 'flashcard',
    level: 'A2',
    topic: 'Cooking & Recipes',
    topicName: 'Cooking & Recipes',
    difficulty: 'easy',
    content: {
      items: [
        {
          front: 'Picante',
          back: 'Spicy',
          example: 'I love spicy food.',
          pronunciation: '/ˈspaɪsi/',
          explanation: 'Comida que produce ardor en la boca.'
        }
      ]
    } as any
  },
  {
    id: 'a2-u23-e38',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Cooking & Recipes',
    topicName: 'Cooking & Recipes',
    difficulty: 'medium',
    content: {
      title: 'Tastes',
      instructions: 'Elige el sabor.',
      questions: [
        {
          id: 'q1',
          question: 'Lemons are very ___ .',
          options: ['sour', 'sweet', 'salty'],
          correctAnswer: 0,
          explanation: '"Sour" es agrio o ácido.'
        }
      ]
    }
  },
  {
    id: 'a2-u23-e39',
    type: 'fill-blank',
    level: 'A2',
    topic: 'Cooking & Recipes',
    topicName: 'Cooking & Recipes',
    difficulty: 'medium',
    content: {
      title: 'Sweetness',
      instructions: 'Completa la frase.',
      questions: [
        {
          id: 'q1',
          text: 'This cake is too ___ . How much sugar did you add?',
          correctAnswer: 'sweet',
          explanation: '"Sweet" es dulce.'
        }
      ]
    }
  },
  {
    id: 'a2-u23-e40',
    type: 'sentence-building',
    level: 'A2',
    topic: 'Cooking & Recipes',
    topicName: 'Cooking & Recipes',
    difficulty: 'medium',
    content: {
      title: 'Opinion on food',
      instructions: 'Ordena la frase.',
      sentences: [
        {
          id: 's1',
          words: ['This', 'soup', 'tastes', 'delicious', '.'],
          correctSentence: 'This soup tastes delicious.',
          translation: 'Esta sopa sabe deliciosa.',
          hint: 'Usa "tastes".',
          explanation: '"Taste" como verbo significa "saber a".',
          points: 10
        }
      ]
    } as any
  },
  {
    id: 'a2-u23-e41',
    type: 'matching',
    level: 'A2',
    topic: 'Cooking & Recipes',
    topicName: 'Cooking & Recipes',
    difficulty: 'medium',
    content: {
      title: 'Food Textures',
      instructions: 'Une el adjetivo con su descripción.',
      pairs: [
        { id: '1', left: 'Crunchy', right: 'Hard and makes a noise' },
        { id: '2', left: 'Soft', right: 'Easy to press or cut' },
        { id: '3', left: 'Smooth', right: 'Without any lumps (grumos)' },
        { id: '4', left: 'Fresh', right: 'Recently made or picked' }
      ],
      explanation: 'Adjetivos para describir la textura.'
    } as any
  },
  {
    id: 'a2-u23-e42',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Cooking & Recipes',
    topicName: 'Cooking & Recipes',
    difficulty: 'medium',
    content: {
      title: 'Saltiness',
      instructions: 'Elige la opción correcta.',
      questions: [
        {
          id: 'q1',
          question: 'The chips are too ___ . I need some water.',
          options: ['salty', 'bitter', 'sweet'],
          correctAnswer: 0,
          explanation: '"Salty" es salado.'
        }
      ]
    }
  },
  {
    id: 'a2-u23-e43',
    type: 'speaking-analysis',
    level: 'A2',
    topic: 'Cooking & Recipes',
    topicName: 'Cooking & Recipes',
    difficulty: 'medium',
    content: {
      title: 'Pronunciation: Delicious',
      instructions: 'Di "This is delicious".',
      questions: [
        {
          id: 'q1',
          text: 'This is delicious',
          correctAnswer: 'This is delicious',
          explanation: 'Pronuncia "delicious" como /dɪˈlɪʃəs/.'
        }
      ]
    }
  },
  {
    id: 'a2-u23-e44',
    type: 'fill-blank',
    level: 'A2',
    topic: 'Cooking & Recipes',
    topicName: 'Cooking & Recipes',
    difficulty: 'hard',
    content: {
      title: 'Bitterness',
      instructions: 'Completa la frase.',
      questions: [
        {
          id: 'q1',
          text: 'Dark chocolate can be a bit ___ .',
          correctAnswer: 'bitter',
          explanation: '"Bitter" es amargo.'
        }
      ]
    }
  },
  {
    id: 'a2-u23-e45',
    type: 'sentence-building',
    level: 'A2',
    topic: 'Cooking & Recipes',
    topicName: 'Cooking & Recipes',
    difficulty: 'hard',
    content: {
      title: 'Healthy eating',
      instructions: 'Ordena la frase.',
      sentences: [
        {
          id: 's1',
          words: ['I', 'prefer', 'fresh', 'vegetables', 'to', 'frozen', 'ones', '.'],
          correctSentence: 'I prefer fresh vegetables to frozen ones.',
          translation: 'Prefiero las verduras frescas a las congeladas.',
          hint: 'Usa "prefer ... to".',
          explanation: 'Estructura para expresar preferencias.',
          points: 10
        }
      ]
    } as any
  },

  // --- SUB-TOPIC 5: Review & Mixed Practice (46-50) ---
  {
    id: 'a2-u23-e46',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Cooking & Recipes',
    topicName: 'Cooking & Recipes',
    difficulty: 'medium',
    content: {
      title: 'Mixed Review',
      instructions: 'Elige la opción correcta.',
      questions: [
        {
          id: 'q1',
          question: '___ the potatoes in a large pot.',
          options: ['Boil', 'Bake', 'Grill'],
          correctAnswer: 0,
          explanation: 'Las patatas se suelen hervir (boil).'
        }
      ]
    }
  },
  {
    id: 'a2-u23-e47',
    type: 'fill-blank',
    level: 'A2',
    topic: 'Cooking & Recipes',
    topicName: 'Cooking & Recipes',
    difficulty: 'medium',
    content: {
      title: 'Quantifier review',
      instructions: 'Completa.',
      questions: [
        {
          id: 'q1',
          text: 'How ___ onions do we have left?',
          correctAnswer: 'many',
          explanation: '"Onions" es contable plural.'
        }
      ]
    }
  },
  {
    id: 'a2-u23-e48',
    type: 'sentence-building',
    level: 'A2',
    topic: 'Cooking & Recipes',
    topicName: 'Cooking & Recipes',
    difficulty: 'medium',
    content: {
      title: 'Recipe review',
      instructions: 'Ordena la frase.',
      sentences: [
        {
          id: 's1',
          words: ['Add', 'a', 'little', 'oil', 'to', 'the', 'pan', '.'],
          correctSentence: 'Add a little oil to the pan.',
          translation: 'Añade un poco de aceite a la sartén.',
          hint: 'Usa "a little".',
          explanation: 'Aceite es incontable.',
          points: 10
        }
      ]
    } as any
  },
  {
    id: 'a2-u23-e49',
    type: 'matching',
    level: 'A2',
    topic: 'Cooking & Recipes',
    topicName: 'Cooking & Recipes',
    difficulty: 'medium',
    content: {
      title: 'Kitchen Review',
      instructions: 'Une el verbo con el objeto.',
      pairs: [
        { id: '1', left: 'Bake', right: 'A cake' },
        { id: '2', left: 'Roast', right: 'A chicken' },
        { id: '3', left: 'Chop', right: 'Onions' },
        { id: '4', left: 'Stir', right: 'The soup' }
      ],
      explanation: 'Combinaciones comunes de verbos y alimentos.'
    } as any
  },
  {
    id: 'a2-u23-e50',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Cooking & Recipes',
    topicName: 'Cooking & Recipes',
    difficulty: 'hard',
    content: {
      title: 'Final Challenge',
      instructions: 'Elige la opción correcta.',
      questions: [
        {
          id: 'q1',
          question: 'We have ___ of time, but not ___ food.',
          options: ['a lot / much', 'many / much', 'much / a lot'],
          correctAnswer: 0,
          explanation: '"A lot of time" (afirmativo) y "much food" (negativo e incontable).'
        }
      ]
    }
  }
];
