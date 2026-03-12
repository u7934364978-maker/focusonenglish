/**
 * Unidad 18 B2 — Lección 1: Gramática (So, such, too, enough)
 * 18 ejercicios (B2: más vocabulario y complejidad que B1)
 */

import { Exercise } from '@/lib/exercise-generator';

const LESSON_TITLE =
  '[[Grammar|Gramática]]: [[So, such, too, enough|So, such, too, enough]]';
const INSTRUCTIONS =
  'Elige la forma correcta: so, such, too o enough según el contexto.';

export const UNIT_18_LESSON_1_GRAMMAR: Exercise[] = [
  {
    id: 'b2-u18-l1-g1',
    type: 'grammar',
    level: 'B2',
    topic: 'So, such, too, enough',
    difficulty: 'medium',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS,
      grammarPoint: 'so + adjective = tan + adjetivo',
      questions: [
        {
          id: 'g1-q1',
          type: 'fill-blank',
          question:
            'The pasta was ____ delicious that I had a second helping.',
          options: ['so', 'such', 'too'],
          correctAnswer: 'so',
          acceptableAnswers: ['so'],
          explanation:
            'So + adjective: "so delicious" = tan delicioso. Se usa "that" para la consecuencia.',
          points: 2,
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'b2-u18-l1-g2',
    type: 'grammar',
    level: 'B2',
    topic: 'So, such, too, enough',
    difficulty: 'medium',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS,
      grammarPoint: 'such + (a/an) + noun = tan + sustantivo',
      questions: [
        {
          id: 'g2-q1',
          type: 'fill-blank',
          question:
            'It was ____ good meal that we stayed for dessert.',
          options: ['such a', 'so a', 'too a'],
          correctAnswer: 'such a',
          acceptableAnswers: ['such a'],
          explanation:
            'Such a + noun: "such a good meal" = tan buena comida. Con sustantivo contable singular.',
          points: 2,
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'b2-u18-l1-g3',
    type: 'grammar',
    level: 'B2',
    topic: 'So, such, too, enough',
    difficulty: 'medium',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS,
      grammarPoint: 'too + adjective = demasiado + adjetivo',
      questions: [
        {
          id: 'g3-q1',
          type: 'fill-blank',
          question:
            'The soup was ____ hot to eat. I had to wait for it to cool down.',
          options: ['too', 'so', 'enough'],
          correctAnswer: 'too',
          acceptableAnswers: ['too'],
          explanation:
            'Too + adjective: "too hot" = demasiado caliente. Implica que no se pudo comer.',
          points: 2,
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'b2-u18-l1-g4',
    type: 'grammar',
    level: 'B2',
    topic: 'So, such, too, enough',
    difficulty: 'medium',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS,
      grammarPoint: 'adjective + enough = suficiente',
      questions: [
        {
          id: 'g4-q1',
          type: 'multiple-choice',
          question:
            'The cake wasn\'t sweet ____ for my taste. I prefer more sugar.',
          options: ['enough', 'too', 'so'],
          correctAnswer: 'enough',
          explanation:
            'Adjective + enough: "wasn\'t sweet enough" = no era lo bastante dulce.',
          points: 2,
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'b2-u18-l1-g5',
    type: 'grammar',
    level: 'B2',
    topic: 'So, such, too, enough',
    difficulty: 'medium',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS,
      grammarPoint: 'so many + plural noun',
      questions: [
        {
          id: 'g5-q1',
          type: 'fill-blank',
          question:
            'There were ____ many choices on the menu that I couldn\'t decide.',
          options: ['so', 'such', 'too'],
          correctAnswer: 'so',
          acceptableAnswers: ['so'],
          explanation:
            'So many + plural: "so many choices" = tantas opciones. "Many" va con plural.',
          points: 2,
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'b2-u18-l1-g6',
    type: 'grammar',
    level: 'B2',
    topic: 'So, such, too, enough',
    difficulty: 'medium',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS,
      grammarPoint: 'so much + uncountable noun',
      questions: [
        {
          id: 'g6-q1',
          type: 'fill-blank',
          question:
            'The restaurant had ____ much salt in the food that I was thirsty all night.',
          options: ['so', 'such', 'too'],
          correctAnswer: 'so',
          acceptableAnswers: ['so'],
          explanation:
            'So much + uncountable: "so much salt" = tanta sal. "Much" va con incontables.',
          points: 2,
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'b2-u18-l1-g7',
    type: 'grammar',
    level: 'B2',
    topic: 'So, such, too, enough',
    difficulty: 'medium',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS,
      grammarPoint: 'too + adjective + to infinitive',
      questions: [
        {
          id: 'g7-q1',
          type: 'fill-blank',
          question:
            'The coffee was ____ strong to drink without milk.',
          options: ['too', 'so', 'enough'],
          correctAnswer: 'too',
          acceptableAnswers: ['too'],
          explanation:
            'Too + adjective + to: "too strong to drink" = demasiado fuerte para beber.',
          points: 2,
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'b2-u18-l1-g8',
    type: 'grammar',
    level: 'B2',
    topic: 'So, such, too, enough',
    difficulty: 'medium',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS,
      grammarPoint: 'enough + noun',
      questions: [
        {
          id: 'g8-q1',
          type: 'multiple-choice',
          question:
            'We didn\'t have ____ time to order dessert. The restaurant was closing.',
          options: ['enough', 'too', 'so'],
          correctAnswer: 'enough',
          explanation:
            'Enough + noun: "enough time" = suficiente tiempo. "Enough" va antes del sustantivo.',
          points: 2,
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'b2-u18-l1-g9',
    type: 'grammar',
    level: 'B2',
    topic: 'So, such, too, enough',
    difficulty: 'medium',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS,
      grammarPoint: 'such + uncountable/plural (no a/an)',
      questions: [
        {
          id: 'g9-q1',
          type: 'fill-blank',
          question:
            'We had ____ wonderful food at the restaurant that we went back the next week.',
          options: ['such', 'so', 'too'],
          correctAnswer: 'such',
          acceptableAnswers: ['such'],
          explanation:
            'Such + noun (sin a/an con incontables): "such wonderful food" = tan buena comida.',
          points: 2,
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'b2-u18-l1-g10',
    type: 'grammar',
    level: 'B2',
    topic: 'So, such, too, enough',
    difficulty: 'medium',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS,
      grammarPoint: 'so + adverb',
      questions: [
        {
          id: 'g10-q1',
          type: 'fill-blank',
          question:
            'The chef prepared the dish ____ quickly that we couldn\'t believe it.',
          options: ['so', 'such', 'too'],
          correctAnswer: 'so',
          acceptableAnswers: ['so'],
          explanation:
            'So + adverb: "so quickly" = tan rápido. Con adverbios usamos "so", no "such".',
          points: 2,
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'b2-u18-l1-g11',
    type: 'grammar',
    level: 'B2',
    topic: 'So, such, too, enough',
    difficulty: 'medium',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS,
      grammarPoint: 'too + adverb',
      questions: [
        {
          id: 'g11-q1',
          type: 'multiple-choice',
          question:
            'The waiter served us ____ slowly. We were waiting for over an hour.',
          options: ['too', 'so', 'enough'],
          correctAnswer: 'too',
          explanation:
            'Too + adverb: "too slowly" = demasiado despacio. Expresa negatividad.',
          points: 2,
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'b2-u18-l1-g12',
    type: 'grammar',
    level: 'B2',
    topic: 'So, such, too, enough',
    difficulty: 'medium',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS,
      grammarPoint: 'enough + to infinitive',
      questions: [
        {
          id: 'g12-q1',
          type: 'fill-blank',
          question:
            'The portion was big ____ to share between two people.',
          options: ['enough', 'too', 'so'],
          correctAnswer: 'enough',
          acceptableAnswers: ['enough'],
          explanation:
            'Adjective + enough + to: "big enough to share" = lo bastante grande para compartir.',
          points: 2,
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'b2-u18-l1-g13',
    type: 'grammar',
    level: 'B2',
    topic: 'So, such, too, enough',
    difficulty: 'medium',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS,
      grammarPoint: 'such a + adjective + noun',
      questions: [
        {
          id: 'g13-q1',
          type: 'fill-blank',
          question:
            'It was ____ expensive restaurant that we could only afford to go once a year.',
          options: ['such an', 'so an', 'too an'],
          correctAnswer: 'such an',
          acceptableAnswers: ['such an'],
          explanation:
            'Such a/an + adjective + noun: "such an expensive restaurant" = un restaurante tan caro.',
          points: 2,
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'b2-u18-l1-g14',
    type: 'grammar',
    level: 'B2',
    topic: 'So, such, too, enough',
    difficulty: 'medium',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS,
      grammarPoint: 'too + noun',
      questions: [
        {
          id: 'g14-q1',
          type: 'multiple-choice',
          question:
            'There was ____ sugar in the cake. It was almost inedible.',
          options: ['too much', 'so much', 'enough'],
          correctAnswer: 'too much',
          explanation:
            'Too much + uncountable: "too much sugar" = demasiado azúcar. Expresa exceso negativo.',
          points: 2,
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'b2-u18-l1-g15',
    type: 'grammar',
    level: 'B2',
    topic: 'So, such, too, enough',
    difficulty: 'medium',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS,
      grammarPoint: 'so + adjective (sin that)',
      questions: [
        {
          id: 'g15-q1',
          type: 'fill-blank',
          question:
            'The wine was ____ good! We ordered another bottle.',
          options: ['so', 'such', 'too'],
          correctAnswer: 'so',
          acceptableAnswers: ['so'],
          explanation:
            'So + adjective (exclamación): "so good!" = ¡tan bueno! No necesita "that".',
          points: 2,
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'b2-u18-l1-g16',
    type: 'grammar',
    level: 'B2',
    topic: 'So, such, too, enough',
    difficulty: 'medium',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS,
      grammarPoint: 'so few + plural',
      questions: [
        {
          id: 'g16-q1',
          type: 'fill-blank',
          question:
            'There were ____ few vegetarian options that I had to ask for something special.',
          options: ['so', 'such', 'too'],
          correctAnswer: 'so',
          acceptableAnswers: ['so'],
          explanation:
            'So few + plural: "so few options" = tan pocas opciones. "Few" con plural contable.',
          points: 2,
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'b2-u18-l1-g17',
    type: 'grammar',
    level: 'B2',
    topic: 'So, such, too, enough',
    difficulty: 'medium',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS,
      grammarPoint: 'not enough + noun',
      questions: [
        {
          id: 'g17-q1',
          type: 'multiple-choice',
          question:
            'There wasn\'t ____ seating for everyone. Some people had to stand.',
          options: ['enough', 'too', 'so'],
          correctAnswer: 'enough',
          explanation:
            'Not enough + noun: "wasn\'t enough seating" = no había suficiente asientos.',
          points: 2,
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'b2-u18-l1-g18',
    type: 'grammar',
    level: 'B2',
    topic: 'So, such, too, enough',
    difficulty: 'medium',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS,
      grammarPoint: 'Resumen: so, such, too, enough',
      questions: [
        {
          id: 'g18-q1',
          type: 'fill-blank',
          question:
            'The service was ____ fast that we finished our meal in less than an hour.',
          options: ['so', 'such', 'too'],
          correctAnswer: 'so',
          acceptableAnswers: ['so'],
          explanation:
            'So + adjective + that: "so fast that" = tan rápido que. Consecuencia positiva.',
          points: 2,
        },
      ],
    },
    topicName: 'Grammar',
  },
];
