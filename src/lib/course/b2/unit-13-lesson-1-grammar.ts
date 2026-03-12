/**
 * Unidad 13 B2 — Lección 1: Gramática (Modals: must, have to, need to, needn't)
 * 18 ejercicios (B2: más vocabulario y complejidad que B1)
 */

import { Exercise } from '@/lib/exercise-generator';

const LESSON_TITLE = '[[Grammar|Gramática]]: [[Modals (must, have to, need to, needn\'t)|Modals (must, have to, need to, needn\'t)]]';
const INSTRUCTIONS = 'Elige la opción correcta o completa el espacio con el modal adecuado.';

export const UNIT_13_LESSON_1_GRAMMAR: Exercise[] = [
  {
    id: 'b2-u13-l1-g1',
    type: 'fill-blank',
    level: 'B2',
    topic: 'Modals (must, have to, need to, needn\'t)',
    difficulty: 'medium',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS,
      questions: [
        {
          question:
            'You ____ pay your bills on time if you want to avoid late fees.',
          options: ['must', 'needn\'t', 'don\'t have to'],
          correctAnswer: 'must',
          acceptableAnswers: ['must', 'have to', 'need to'],
          explanation:
            'Obligación fuerte: "must" o "have to" para pagar a tiempo.',
          points: 2,
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'b2-u13-l1-g2',
    type: 'multiple-choice',
    level: 'B2',
    topic: 'Modals (must, have to, need to, needn\'t)',
    difficulty: 'medium',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS,
      questions: [
        {
          question:
            'Employees ____ wear a uniform at this bank. It\'s company policy.',
          options: ['must', 'needn\'t', 'don\'t need to'],
          correctAnswer: 'must',
          explanation:
            'Obligación externa (norma de la empresa) → "must" o "have to".',
          points: 2,
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'b2-u13-l1-g3',
    type: 'fill-blank',
    level: 'B2',
    topic: 'Modals (must, have to, need to, needn\'t)',
    difficulty: 'medium',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS,
      questions: [
        {
          question:
            'You ____ worry about the transfer; I\'ve already paid it.',
          options: ['needn\'t', 'must', 'have to'],
          correctAnswer: 'needn\'t',
          acceptableAnswers: ['needn\'t', 'don\'t need to', 'don\'t have to'],
          explanation:
            'Ausencia de necesidad: "needn\'t" o "don\'t need to" cuando ya está hecho.',
          points: 2,
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'b2-u13-l1-g4',
    type: 'multiple-choice',
    level: 'B2',
    topic: 'Modals (must, have to, need to, needn\'t)',
    difficulty: 'medium',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS,
      questions: [
        {
          question:
            'To open a savings account, you ____ provide proof of identity.',
          options: ['need to', 'needn\'t', 'mustn\'t'],
          correctAnswer: 'need to',
          explanation:
            'Necesidad: "need to" indica que es necesario para lograr algo.',
          points: 2,
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'b2-u13-l1-g5',
    type: 'fill-blank',
    level: 'B2',
    topic: 'Modals (must, have to, need to, needn\'t)',
    difficulty: 'medium',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS,
      questions: [
        {
          question:
            'We ____ declare any amount under €10,000 at customs.',
          options: ['needn\'t', 'must', 'have to'],
          correctAnswer: 'needn\'t',
          acceptableAnswers: ['needn\'t', 'don\'t need to', 'don\'t have to'],
          explanation:
            'No hay obligación de declarar cantidades menores.',
          points: 2,
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'b2-u13-l1-g6',
    type: 'multiple-choice',
    level: 'B2',
    topic: 'Modals (must, have to, need to, needn\'t)',
    difficulty: 'medium',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS,
      questions: [
        {
          question:
            'Investors ____ do their research before putting money into a new venture.',
          options: ['must', 'needn\'t', 'don\'t have to'],
          correctAnswer: 'must',
          explanation:
            'Consejo fuerte / obligación lógica: "must" o "have to".',
          points: 2,
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'b2-u13-l1-g7',
    type: 'fill-blank',
    level: 'B2',
    topic: 'Modals (must, have to, need to, needn\'t)',
    difficulty: 'medium',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS,
      questions: [
        {
          question:
            'She ____ work overtime last week because of the audit.',
          options: ['had to', 'must', 'need to'],
          correctAnswer: 'had to',
          acceptableAnswers: ['had to'],
          explanation:
            'Obligación en el pasado: solo "had to" (must no tiene pasado).',
          points: 2,
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'b2-u13-l1-g8',
    type: 'multiple-choice',
    level: 'B2',
    topic: 'Modals (must, have to, need to, needn\'t)',
    difficulty: 'medium',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS,
      questions: [
        {
          question:
            'You ____ rush. The meeting doesn\'t start until 3 pm.',
          options: ['needn\'t', 'must', 'have to'],
          correctAnswer: 'needn\'t',
          explanation:
            'No es necesario apurarse; hay tiempo suficiente.',
          points: 2,
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'b2-u13-l1-g9',
    type: 'fill-blank',
    level: 'B2',
    topic: 'Modals (must, have to, need to, needn\'t)',
    difficulty: 'medium',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS,
      questions: [
        {
          question:
            'Borrowers ____ repay the loan within 24 months.',
          options: ['must', 'needn\'t', 'don\'t need to'],
          correctAnswer: 'must',
          acceptableAnswers: ['must', 'have to', 'need to'],
          explanation:
            'Obligación contractual: devolver el préstamo en el plazo acordado.',
          points: 2,
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'b2-u13-l1-g10',
    type: 'multiple-choice',
    level: 'B2',
    topic: 'Modals (must, have to, need to, needn\'t)',
    difficulty: 'medium',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS,
      questions: [
        {
          question:
            'If you\'ve already paid, you ____ pay again.',
          options: ['needn\'t', 'must', 'have to'],
          correctAnswer: 'needn\'t',
          explanation:
            'No hay necesidad de pagar dos veces.',
          points: 2,
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'b2-u13-l1-g11',
    type: 'fill-blank',
    level: 'B2',
    topic: 'Modals (must, have to, need to, needn\'t)',
    difficulty: 'medium',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS,
      questions: [
        {
          question:
            'Taxpayers ____ file their returns by the end of April.',
          options: ['must', 'needn\'t', 'don\'t have to'],
          correctAnswer: 'must',
          acceptableAnswers: ['must', 'have to', 'need to'],
          explanation:
            'Obligación legal: presentar la declaración de impuestos.',
          points: 2,
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'b2-u13-l1-g12',
    type: 'multiple-choice',
    level: 'B2',
    topic: 'Modals (must, have to, need to, needn\'t)',
    difficulty: 'medium',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS,
      questions: [
        {
          question:
            'We ____ book in advance. There are always free tables.',
          options: ['needn\'t', 'must', 'have to'],
          correctAnswer: 'needn\'t',
          explanation:
            'No es necesario reservar; siempre hay mesas libres.',
          points: 2,
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'b2-u13-l1-g13',
    type: 'fill-blank',
    level: 'B2',
    topic: 'Modals (must, have to, need to, needn\'t)',
    difficulty: 'medium',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS,
      questions: [
        {
          question:
            'To get a mortgage, you ____ show proof of income.',
          options: ['need to', 'needn\'t', 'mustn\'t'],
          correctAnswer: 'need to',
          acceptableAnswers: ['need to', 'must', 'have to'],
          explanation:
            'Requisito: es necesario demostrar ingresos para una hipoteca.',
          points: 2,
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'b2-u13-l1-g14',
    type: 'multiple-choice',
    level: 'B2',
    topic: 'Modals (must, have to, need to, needn\'t)',
    difficulty: 'medium',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS,
      questions: [
        {
          question:
            'You ____ tell anyone your PIN. Keep it secret.',
          options: ['mustn\'t', 'needn\'t', 'don\'t have to'],
          correctAnswer: 'mustn\'t',
          explanation:
            'Prohibición: "mustn\'t" = no debes, está prohibido.',
          points: 2,
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'b2-u13-l1-g15',
    type: 'fill-blank',
    level: 'B2',
    topic: 'Modals (must, have to, need to, needn\'t)',
    difficulty: 'medium',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS,
      questions: [
        {
          question:
            'Companies ____ keep accurate financial records by law.',
          options: ['have to', 'needn\'t', 'don\'t need to'],
          correctAnswer: 'have to',
          acceptableAnswers: ['have to', 'must'],
          explanation:
            'Obligación legal: "have to" es común para normas externas.',
          points: 2,
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'b2-u13-l1-g16',
    type: 'multiple-choice',
    level: 'B2',
    topic: 'Modals (must, have to, need to, needn\'t)',
    difficulty: 'medium',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS,
      questions: [
        {
          question:
            'You ____ bring cash. They accept cards everywhere.',
          options: ['needn\'t', 'must', 'have to'],
          correctAnswer: 'needn\'t',
          explanation:
            'No es necesario llevar efectivo; aceptan tarjetas.',
          points: 2,
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'b2-u13-l1-g17',
    type: 'fill-blank',
    level: 'B2',
    topic: 'Modals (must, have to, need to, needn\'t)',
    difficulty: 'medium',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS,
      questions: [
        {
          question:
            'Before investing, you ____ understand the risks involved.',
          options: ['need to', 'needn\'t', 'mustn\'t'],
          correctAnswer: 'need to',
          acceptableAnswers: ['need to', 'must', 'have to'],
          explanation:
            'Necesidad de entender los riesgos antes de invertir.',
          points: 2,
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'b2-u13-l1-g18',
    type: 'multiple-choice',
    level: 'B2',
    topic: 'Modals (must, have to, need to, needn\'t)',
    difficulty: 'medium',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS,
      questions: [
        {
          question:
            'I ____ go to the bank yesterday to sort out my account.',
          options: ['had to', 'must', 'need to'],
          correctAnswer: 'had to',
          explanation:
            'Obligación en pasado: "had to" (must no tiene forma de pasado).',
          points: 2,
        },
      ],
    },
    topicName: 'Grammar',
  },
];
