/**
 * Unidad 18 B2 — Lección 6: Expresión escrita (Food and drink)
 * 18 ejercicios (B2: más vocabulario y complejidad que B1)
 */

import { Exercise } from '@/lib/exercise-generator';

const LESSON_TITLE = '[[Writing|Expresión escrita]]';

export const UNIT_18_LESSON_6_WRITING: Exercise[] = [
  {
    id: 'b2-u18-l6-w1',
    type: 'writing',
    level: 'B2',
    topic: 'Food and drink',
    difficulty: 'medium',
    content: {
      title: LESSON_TITLE,
      instructions:
        'Escribe 3–4 frases describiendo una experiencia en un restaurante usando so, such, too y enough.',
      prompt:
        'Describe a restaurant experience. Use so, such, too and enough (e.g. "The food was so good that...", "The portion was big enough to...").',
      targetLevel: 'B2',
      writingType: 'description',
      targetLength: '3-4 frases',
    },
    topicName: 'Writing',
  },
  {
    id: 'b2-u18-l6-w2',
    type: 'fill-blank',
    level: 'B2',
    topic: 'Food and drink',
    difficulty: 'medium',
    content: {
      title: LESSON_TITLE,
      instructions:
        'Completa con so, such, too o enough.',
      questions: [
        {
          question:
            'The pasta was ____ delicious that I had a second helping.',
          options: ['so', 'such', 'too'],
          correctAnswer: 'so',
          acceptableAnswers: ['so'],
          explanation:
            'So + adjective: "so delicious" = tan delicioso. Se usa "that" para la consecuencia.',
        },
      ],
    },
    topicName: 'Writing',
  },
  {
    id: 'b2-u18-l6-w3',
    type: 'writing',
    level: 'B2',
    topic: 'Food and drink',
    difficulty: 'medium',
    content: {
      title: LESSON_TITLE,
      instructions:
        'Reescribe la frase usando such: "The meal was very good. We stayed for dessert."',
      prompt:
        'Combine into one sentence using "such a... that"',
      expressionHint: 'It was such a good meal that we stayed for dessert.',
      targetLength: '1 frase',
    },
    topicName: 'Writing',
  },
  {
    id: 'b2-u18-l6-w4',
    type: 'writing',
    level: 'B2',
    topic: 'Food and drink',
    difficulty: 'medium',
    content: {
      title: LESSON_TITLE,
      instructions:
        'Escribe 2 frases: una con "too + adjective" y otra con "adjective + enough".',
      prompt:
        'Write two sentences about food using:\n- too + adjective (e.g. too salty)\n- adjective + enough (e.g. sweet enough)',
      targetLength: '2 frases',
    },
    topicName: 'Writing',
  },
  {
    id: 'b2-u18-l6-w5',
    type: 'fill-blank',
    level: 'B2',
    topic: 'Food and drink',
    difficulty: 'medium',
    content: {
      title: LESSON_TITLE,
      instructions: 'Completa con so, such o too.',
      questions: [
        {
          question:
            'The soup was ____ hot to eat. I had to wait for it to cool down.',
          options: ['too', 'so', 'such'],
          correctAnswer: 'too',
          acceptableAnswers: ['too'],
          explanation:
            'Too + adjective: "too hot" = demasiado caliente. Implica que no se pudo comer.',
        },
      ],
    },
    topicName: 'Writing',
  },
  {
    id: 'b2-u18-l6-w6',
    type: 'writing',
    level: 'B2',
    topic: 'Food and drink',
    difficulty: 'medium',
    content: {
      title: LESSON_TITLE,
      instructions:
        'Escribe un breve párrafo (3–4 frases) sobre tu restaurante favorito. Incluye al menos una estructura con so, such, too o enough.',
      prompt:
        'Describe your favourite restaurant. Use vocabulary: menu, portion, starter, main course, dessert.',
      targetLength: '3-4 frases',
    },
    topicName: 'Writing',
  },
  {
    id: 'b2-u18-l6-w7',
    type: 'writing',
    level: 'B2',
    topic: 'Food and drink',
    difficulty: 'medium',
    content: {
      title: LESSON_TITLE,
      instructions:
        'Completa las frases con ideas propias usando so, such, too o enough.',
      prompt:
        'Finish these sentences:\n1. The restaurant had so many...\n2. The coffee was too...\n3. The portion wasn\'t big enough to...',
      targetLength: '3-4 frases',
    },
    topicName: 'Writing',
  },
  {
    id: 'b2-u18-l6-w8',
    type: 'fill-blank',
    level: 'B2',
    topic: 'Food and drink',
    difficulty: 'medium',
    content: {
      title: LESSON_TITLE,
      instructions:
        'Completa con enough, too o so.',
      questions: [
        {
          question:
            'The cake wasn\'t sweet ____ for my taste. I prefer more sugar.',
          options: ['enough', 'too', 'so'],
          correctAnswer: 'enough',
          acceptableAnswers: ['enough'],
          explanation:
            'Adjective + enough: "wasn\'t sweet enough" = no era lo bastante dulce.',
        },
      ],
    },
    topicName: 'Writing',
  },
  {
    id: 'b2-u18-l6-w9',
    type: 'writing',
    level: 'B2',
    topic: 'Food and drink',
    difficulty: 'medium',
    content: {
      title: LESSON_TITLE,
      instructions:
        'Escribe la introducción de un artículo (40–60 palabras) sobre la dieta mediterránea.',
      prompt:
        'Write an introduction to an article about the Mediterranean diet. Use vocabulary: fresh, vegetables, olive oil, healthy.',
      writingType: 'article',
      targetLength: '40-60 palabras',
    },
    topicName: 'Writing',
  },
  {
    id: 'b2-u18-l6-w10',
    type: 'writing',
    level: 'B2',
    topic: 'Food and drink',
    difficulty: 'medium',
    content: {
      title: LESSON_TITLE,
      instructions:
        'Escribe 2–3 frases explicando por qué es importante leer el menú antes de pedir.',
      prompt:
        'Explain why it\'s important to read the menu carefully before ordering. Consider allergens, portions, and prices.',
      targetLength: '2-3 frases',
    },
    topicName: 'Writing',
  },
  {
    id: 'b2-u18-l6-w11',
    type: 'fill-blank',
    level: 'B2',
    topic: 'Food and drink',
    difficulty: 'medium',
    content: {
      title: LESSON_TITLE,
      instructions: 'Completa con so many o so much.',
      questions: [
        {
          question:
            'There were ____ many choices on the menu that I couldn\'t decide.',
          options: ['so', 'such', 'too'],
          correctAnswer: 'so',
          acceptableAnswers: ['so'],
          explanation:
            'So many + plural: "so many choices" = tantas opciones.',
        },
      ],
    },
    topicName: 'Writing',
  },
  {
    id: 'b2-u18-l6-w12',
    type: 'writing',
    level: 'B2',
    topic: 'Food and drink',
    difficulty: 'medium',
    content: {
      title: LESSON_TITLE,
      instructions:
        'Transforma la frase usando too: "The coffee was very strong. I couldn\'t drink it without milk."',
      prompt:
        'Use "too... to"',
      expressionHint: 'The coffee was too strong to drink without milk.',
      targetLength: '1 frase',
    },
    topicName: 'Writing',
  },
  {
    id: 'b2-u18-l6-w13',
    type: 'writing',
    level: 'B2',
    topic: 'Food and drink',
    difficulty: 'medium',
    content: {
      title: LESSON_TITLE,
      instructions:
        'Escribe 3 frases: una con so, otra con such y otra con enough.',
      prompt:
        'Write three sentences about food or restaurants using:\n- so + adjective (e.g. so delicious)\n- such a + noun (e.g. such a good meal)\n- enough (e.g. big enough to share)',
      targetLength: '3 frases',
    },
    topicName: 'Writing',
  },
  {
    id: 'b2-u18-l6-w14',
    type: 'fill-blank',
    level: 'B2',
    topic: 'Food and drink',
    difficulty: 'medium',
    content: {
      title: LESSON_TITLE,
      instructions: 'Completa con such a o such an.',
      questions: [
        {
          question:
            'It was ____ expensive restaurant that we could only afford to go once a year.',
          options: ['such an', 'so an', 'too an'],
          correctAnswer: 'such an',
          acceptableAnswers: ['such an'],
          explanation:
            'Such a/an + adjective + noun: "such an expensive restaurant" = un restaurante tan caro.',
        },
      ],
    },
    topicName: 'Writing',
  },
  {
    id: 'b2-u18-l6-w15',
    type: 'writing',
    level: 'B2',
    topic: 'Food and drink',
    difficulty: 'medium',
    content: {
      title: LESSON_TITLE,
      instructions:
        'Escribe un breve texto (aprox. 60–80 palabras) sobre las ventajas de cocinar en casa.',
      prompt:
        'Explain the advantages of cooking at home. Use vocabulary: recipe, ingredients, portion, healthy.',
      targetLength: '60-80 palabras',
    },
    topicName: 'Writing',
  },
  {
    id: 'b2-u18-l6-w16',
    type: 'writing',
    level: 'B2',
    topic: 'Food and drink',
    difficulty: 'medium',
    content: {
      title: LESSON_TITLE,
      instructions:
        'Escribe 2–3 frases dando consejos a alguien que va a un restaurante por primera vez.',
      prompt:
        'Give advice to someone eating at a restaurant for the first time. Use: place an order, book a table, tip.',
      targetLength: '2-3 frases',
    },
    topicName: 'Writing',
  },
  {
    id: 'b2-u18-l6-w17',
    type: 'fill-blank',
    level: 'B2',
    topic: 'Food and drink',
    difficulty: 'medium',
    content: {
      title: LESSON_TITLE,
      instructions: 'Completa con la forma correcta.',
      questions: [
        {
          question:
            'We didn\'t have ____ time to order dessert. The restaurant was closing.',
          options: ['enough', 'too', 'so'],
          correctAnswer: 'enough',
          acceptableAnswers: ['enough'],
          explanation:
            'Enough + noun: "enough time" = suficiente tiempo.',
        },
      ],
    },
    topicName: 'Writing',
  },
  {
    id: 'b2-u18-l6-w18',
    type: 'writing',
    level: 'B2',
    topic: 'Food and drink',
    difficulty: 'medium',
    content: {
      title: LESSON_TITLE,
      instructions:
        'Redacta la conclusión de un artículo (40–60 palabras) sobre por qué la comida local es mejor que la cadena de restaurantes.',
      prompt:
        'Write a short conclusion explaining why local food is better than chain restaurants. Use so, such, too or enough where appropriate.',
      targetLength: '40-60 palabras',
    },
    topicName: 'Writing',
  },
];
