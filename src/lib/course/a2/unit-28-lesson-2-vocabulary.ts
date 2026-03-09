/**
 * Unidad 28 — Lección 2: Vocabulario (obligaciones, reglas, necesidad)
 * 15 ejercicios
 */

import { Exercise } from '@/lib/exercise-generator';

const LESSON_TITLE = '[[Vocabulary|Vocabulario]]: [[Obligations|Obligaciones]], [[Rules|Reglas]] [[&|y]] [[Necessity|Necesidad]]';
const INSTRUCTIONS_MC = 'Elige la palabra correcta para cada definición o frase.';
const INSTRUCTIONS_MATCH = 'Relaciona cada palabra en inglés con su traducción.';
const INSTRUCTIONS_FILL = 'Completa la frase con la palabra correcta del recuadro.';

export const UNIT_28_LESSON_2_VOCABULARY: Exercise[] = [
  {
    id: 'a2-u28-l2-v1',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Have to',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_MC,
      questions: [
        {
          question: '"[[Obligation|Obligación]]" [[means|significa]] ____.',
          options: ['[[something|algo]] [[you|tú]] [[must|debes]] [[do|hacer]] [[because|porque]] [[it|él]] [[is|es]] [[required|requerido]]', '[[something|algo]] [[optional|opcional]]', '[[a suggestion|una sugerencia]]'],
          correctAnswer: 0,
          explanation: '[[Obligation|Obligación]] = [[have to|tener que]] [[do|hacer]] [[something|algo]].',
        },
      ],
    },
    topicName: 'Vocabulary',
  },
  {
    id: 'a2-u28-l2-v2',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Have to',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_MC,
      questions: [
        {
          question: '"[[Optional|Opcional]]" [[means|significa]] ____.',
          options: ['[[not|no]] [[required|requerido]], [[you|tú]] [[can|puedes]] [[choose|elegir]]', '[[obligatory|obligatorio]]', '[[forbidden|prohibido]]'],
          correctAnswer: 0,
          explanation: '[[Optional|Opcional]] = [[don\'t have to|no tener que]], [[your choice|tu elección]].',
        },
      ],
    },
    topicName: 'Vocabulary',
  },
  {
    id: 'a2-u28-l2-v3',
    type: 'matching',
    level: 'A2',
    topic: 'Have to',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_MATCH,
      pairs: [
        { id: 'p1', left: '[[Obligation|Obligación]]', right: 'Obligación' },
        { id: 'p2', left: '[[Rule|Regla]]', right: 'Regla' },
        { id: 'p3', left: '[[Uniform|Uniforme]]', right: 'Uniforme' },
        { id: 'p4', left: '[[Required|Requerido]]', right: 'Requerido' },
      ],
    },
    topicName: 'Vocabulary',
  },
  {
    id: 'a2-u28-l2-v4',
    type: 'matching',
    level: 'A2',
    topic: 'Have to',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_MATCH,
      pairs: [
        { id: 'p1', left: '[[To wear|Llevar puesto]]', right: 'Llevar puesto' },
        { id: 'p2', left: '[[Bill|Factura]]', right: 'Factura' },
        { id: 'p3', left: '[[Necessary|Necesario]]', right: 'Necesario' },
        { id: 'p4', left: '[[Tie|Corbata]]', right: 'Corbata' },
      ],
    },
    topicName: 'Vocabulary',
  },
  {
    id: 'a2-u28-l2-v5',
    type: 'fill-blank',
    level: 'A2',
    topic: 'Have to',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_FILL,
      questions: [
        {
          question: '[[I|Yo]] ____ ____ ____ ____ [[go|ir]] [[to work|al trabajo]] [[tomorrow|mañana]].',
          options: ['[[have to|tengo que]]', '[[has to|tiene que]]', '[[don\'t have to|no tengo que]]'],
          correctAnswer: 'have to',
          explanation: '[[I|Yo]] + [[have to|tener que]].',
        },
      ],
    },
    topicName: 'Vocabulary',
  },
  {
    id: 'a2-u28-l2-v6',
    type: 'fill-blank',
    level: 'A2',
    topic: 'Have to',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_FILL,
      questions: [
        {
          question: '[[She|Ella]] ____ ____ ____ ____ [[wear|llevar]] [[a uniform|un uniforme]] [[at work|en el trabajo]].',
          options: ['[[has to|tiene que]]', '[[have to|tiene que]]', '[[doesn\'t have to|no tiene que]]'],
          correctAnswer: 'has to',
          explanation: '[[She|Ella]] + [[has to|tiene que]].',
        },
      ],
    },
    topicName: 'Vocabulary',
  },
  {
    id: 'a2-u28-l2-v7',
    type: 'fill-blank',
    level: 'A2',
    topic: 'Have to',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_FILL,
      questions: [
        {
          question: '[[You|Tú]] ____ ____ ____ ____ ____ ____ [[wear|llevar]] [[a tie|una corbata]] [[today|hoy]]. [[(optional)|(opcional)]]',
          options: ['[[don\'t have to|no tienes que]]', '[[have to|tienes que]]', '[[doesn\'t have to|no tiene que]]'],
          correctAnswer: "don't have to",
          explanation: '[[Optional|Opcional]] → [[don\'t have to|no tener que]].',
        },
      ],
    },
    topicName: 'Vocabulary',
  },
  {
    id: 'a2-u28-l2-v8',
    type: 'fill-blank',
    level: 'A2',
    topic: 'Have to',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_FILL,
      questions: [
        {
          question: '[[Students|Los estudiantes]] ____ ____ ____ ____ ____ ____ [[wear|llevar]] [[uniforms|uniformes]] [[at|en]] [[this school|esta escuela]].',
          options: ['[[have to|tienen que]]', '[[has to|tiene que]]', '[[don\'t have to|no tienen que]]'],
          correctAnswer: 'have to',
          explanation: '[[Students|Estudiantes]] = [[they|ellos]] → [[have to|tienen que]].',
        },
      ],
    },
    topicName: 'Vocabulary',
  },
  {
    id: 'a2-u28-l2-v9',
    type: 'fill-blank',
    level: 'A2',
    topic: 'Have to',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_FILL,
      questions: [
        {
          question: '[[He|Él]] ____ ____ ____ ____ ____ ____ [[pay|pagar]] [[the bill|la factura]] [[today|hoy]]. [[(optional)|(opcional)]]',
          options: ['[[doesn\'t have to|no tiene que]]', '[[don\'t have to|no tiene que]]', '[[has to|tiene que]]'],
          correctAnswer: "doesn't have to",
          explanation: '[[He|Él]] + [[doesn\'t have to|no tiene que]].',
        },
      ],
    },
    topicName: 'Vocabulary',
  },
  {
    id: 'a2-u28-l2-v10',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Have to',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_MC,
      questions: [
        {
          question: '"[[Uniform|Uniforme]]" [[means|significa]] ____.',
          options: ['[[special|especial]] [[clothes|ropa]] [[that|que]] [[people|gente]] [[must|debe]] [[wear|llevar]] [[at|en]] [[work|trabajo]] [[or|o]] [[school|escuela]]', '[[casual|casual]] [[clothes|ropa]]', '[[party|fiesta]] [[clothes|ropa]]'],
          correctAnswer: 0,
          explanation: '[[Uniform|Uniforme]] = [[same|misma]] [[clothes|ropa]] [[for|para]] [[everyone|todos]].',
        },
      ],
    },
    topicName: 'Vocabulary',
  },
  {
    id: 'a2-u28-l2-v11',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Have to',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_MC,
      questions: [
        {
          question: '[[What|Qué]] [[word|palabra]] [[completes|complete]] [[the|la]] [[sentence|frase]]? "[[I|Yo]] ____ ____ ____ ____ [[go|ir]] [[to work|al trabajo]] [[tomorrow|mañana]]."',
          options: ['[[have to|tengo que]]', '[[has to|tiene que]]', '[[don\'t have to|no tengo que]]'],
          correctAnswer: 0,
          explanation: '[[I|Yo]] + [[have to|tener que]].',
        },
      ],
    },
    topicName: 'Vocabulary',
  },
  {
    id: 'a2-u28-l2-v12',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Have to',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_MC,
      questions: [
        {
          question: '"[[Rule|Regla]]" [[means|significa]] ____.',
          options: ['[[something|algo]] [[you|tú]] [[must|debes]] [[or|o]] [[must not|no debes]] [[do|hacer]]', '[[a suggestion|una sugerencia]]', '[[an option|una opción]]'],
          correctAnswer: 0,
          explanation: '[[Rule|Regla]] = [[obligation|obligación]] [[or|o]] [[prohibition|prohibición]].',
        },
      ],
    },
    topicName: 'Vocabulary',
  },
  {
    id: 'a2-u28-l2-v13',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Have to',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_MC,
      questions: [
        {
          question: '"[[Required|Requerido]]" [[means|significa]] ____.',
          options: ['[[necessary|necesario]], [[you|tú]] [[must|debes]] [[do|hacer]] [[it|él]]', '[[optional|opcional]]', '[[forbidden|prohibido]]'],
          correctAnswer: 0,
          explanation: '[[Required|Requerido]] = [[have to|tener que]] [[do|hacer]] [[it|él]].',
        },
      ],
    },
    topicName: 'Vocabulary',
  },
  {
    id: 'a2-u28-l2-v14',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Have to',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_MC,
      questions: [
        {
          question: '[[What|Qué]] [[word|palabra]] [[completes|complete]] [[the|la]] [[sentence|frase]]? "[[She|Ella]] ____ ____ ____ ____ [[wear|llevar]] [[a uniform|un uniforme]]."',
          options: ['[[has to|tiene que]]', '[[have to|tiene que]]', '[[doesn\'t have to|no tiene que]]'],
          correctAnswer: 0,
          explanation: '[[She|Ella]] + [[has to|tiene que]].',
        },
      ],
    },
    topicName: 'Vocabulary',
  },
  {
    id: 'a2-u28-l2-v15',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Have to',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_MC,
      questions: [
        {
          question: '"[[Necessary|Necesario]]" [[means|significa]] ____.',
          options: ['[[something|algo]] [[you|tú]] [[must|debes]] [[do|hacer]] [[because|porque]] [[it|él]] [[is|es]] [[important|importante]]', '[[something|algo]] [[optional|opcional]]', '[[something|algo]] [[impossible|imposible]]'],
          correctAnswer: 0,
          explanation: '[[Necessary|Necesario]] = [[have to|tener que]] [[do|hacer]] [[it|él]].',
        },
      ],
    },
    topicName: 'Vocabulary',
  },
];
