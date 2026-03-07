/**
 * Unidad 4 — Lección 1: Gramática (artículos, plurales y demostrativos)
 * 15 ejercicios: 5 completar huecos, 5 elección múltiple, 3 ordenar oración, 2 verdadero/falso
 * Título de lección: "Artículos, plurales y demostrativos"
 */

import { Exercise } from '@/lib/exercise-generator';

const LESSON_TITLE = 'Artículos, plurales y demostrativos';
const INSTRUCTIONS_FILL = 'Elige el artículo, plural o demostrativo correcto para completar la frase.';
const INSTRUCTIONS_MULTIPLE = 'Elige la forma o frase correcta.';
const INSTRUCTIONS_ORDER = 'Ordena las palabras para formar una oración correcta.';
const INSTRUCTIONS_TF = 'Indica si la afirmación es verdadera o falsa.';

export const UNIT_4_LESSON_1_GRAMMAR: Exercise[] = [
  // ─── 1–5: Completar huecos ────────────────────────────────────────────────
  {
    id: 'a1-u4-l1-g1',
    type: 'fill-blank',
    level: 'A1',
    topic: 'Articles and Plurals',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_FILL,
      questions: [
        {
          question: '[[This|Esto]] [[is|es]] ____ [[book|libro]].',
          options: ['[[a|un]]', '[[an|un]]', '[[the|el]]'],
          correctAnswer: '[[a|un]]',
          explanation: '[[We use|Usamos]] "[[a|un]]" [[before|antes de]] [[consonant sounds|sonidos consonánticos]]: [[a book|un libro]].',
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a1-u4-l1-g2',
    type: 'fill-blank',
    level: 'A1',
    topic: 'Articles and Plurals',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_FILL,
      questions: [
        {
          question: '[[This|Esto]] [[is|es]] ____ [[eraser|goma]].',
          options: ['[[a|un]]', '[[an|una]]', '[[the|la]]'],
          correctAnswer: '[[an|una]]',
          explanation: '[[We use|Usamos]] "[[an|una]]" [[before|antes de]] [[vowel sounds|sonidos vocálicos]]: [[an eraser|una goma]].',
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a1-u4-l1-g3',
    type: 'fill-blank',
    level: 'A1',
    topic: 'Articles and Plurals',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_FILL,
      questions: [
        {
          question: '[[I have|Tengo]] [[two|dos]] ____ [[on|en]] [[my|mi]] [[desk|escritorio]].',
          options: ['[[pen|bolígrafo]]', '[[pens|bolígrafos]]', '[[penes|bolígrafos]]'],
          correctAnswer: '[[pens|bolígrafos]]',
          explanation: '[[The plural of|El plural de]] "[[pen|bolígrafo]]" [[is|es]] "[[pens|bolígrafos]]" ([[add|añade]] -s).',
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a1-u4-l1-g4',
    type: 'fill-blank',
    level: 'A1',
    topic: 'Articles and Plurals',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_FILL,
      questions: [
        {
          question: '____ [[is|es]] [[my|mi]] [[bag|mochila]]. ([[near|cerca]])',
          options: ['[[This|Esta]]', '[[That|Esa]]', '[[These|Estas]]'],
          correctAnswer: '[[This|Esta]]',
          explanation: '"[[This|Esta]]" [[refers to|se refiere a]] [[something|algo]] [[near|cerca]]; [[singular|singular]].',
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a1-u4-l1-g5',
    type: 'fill-blank',
    level: 'A1',
    topic: 'Articles and Plurals',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_FILL,
      questions: [
        {
          question: '____ [[are|son]] [[my|mis]] [[books|libros]]. ([[near|cerca]])',
          options: ['[[This|Este]]', '[[That|Ese]]', '[[These|Estos]]'],
          correctAnswer: '[[These|Estos]]',
          explanation: '"[[These|Estos]]" [[refers to|se refiere a]] [[things|cosas]] [[near|cerca]]; plural.',
        },
      ],
    },
    topicName: 'Grammar',
  },

  // ─── 6–10: Elección múltiple ─────────────────────────────────────────────
  {
    id: 'a1-u4-l1-g6',
    type: 'multiple-choice',
    level: 'A1',
    topic: 'Articles and Plurals',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_MULTIPLE,
      questions: [
        {
          question: '[[Which|Cuál]] [[is correct|es correcto]]?',
          options: [
            '[[She has a apple.|Ella tiene una manzana.]]',
            '[[She has an apple.|Ella tiene una manzana.]]',
            '[[She has the apple.|Ella tiene la manzana.]]',
          ],
          correctAnswer: 1,
          explanation: '"[[apple|manzana]]" [[starts with|empieza por]] [[a vowel sound|sonido vocálico]], [[so|entonces]] [[use|usa]] "[[an|una]]".',
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a1-u4-l1-g7',
    type: 'multiple-choice',
    level: 'A1',
    topic: 'Articles and Plurals',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_MULTIPLE,
      questions: [
        {
          question: '[[Choose|Elige]] [[the correct|la correcta]] [[demonstrative|demostrativo]] ([[singular, near|singular, cerca]]):',
          options: [
            '[[This is a ruler.|Esto es una regla.]]',
            '[[These is a ruler.|Estas es una regla.]]',
            '[[Those is a ruler.|Esas es una regla.]]',
          ],
          correctAnswer: 0,
          explanation: '"[[This|Esto]]" [[is|es]] [[singular|singular]] [[and|y]] [[near|cerca]]. [[Correct|Correcto]]: [[This is a ruler.|Esto es una regla.]]',
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a1-u4-l1-g8',
    type: 'multiple-choice',
    level: 'A1',
    topic: 'Articles and Plurals',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_MULTIPLE,
      questions: [
        {
          question: '[[Choose|Elige]] [[the correct|el correcto]] ([[plural, far|lejos]]):',
          options: [
            '[[This are pens.|Esto son bolígrafos.]]',
            '[[That are pens.|Eso son bolígrafos.]]',
            '[[Those are pens.|Esos son bolígrafos.]]',
          ],
          correctAnswer: 2,
          explanation: '"[[Those|Esos]]" [[is|es]] plural [[and|y]] [[far|lejos]]. [[Correct|Correcto]]: [[Those are pens.|Esos son bolígrafos.]]',
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a1-u4-l1-g9',
    type: 'multiple-choice',
    level: 'A1',
    topic: 'Articles and Plurals',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_MULTIPLE,
      questions: [
        {
          question: '[[What is|Cuál es]] [[the plural|el plural]] [[of|de]] "[[book|libro]]"?',
          options: ['[[books|libros]]', '[[bookes|libros]]', '[[bookies|libros]]'],
          correctAnswer: 0,
          explanation: '[[Regular plurals|Los plurales regulares]] [[add|añaden]] -s: [[book|libro]] → [[books|libros]].',
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a1-u4-l1-g10',
    type: 'multiple-choice',
    level: 'A1',
    topic: 'Articles and Plurals',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_MULTIPLE,
      questions: [
        {
          question: '[[Which|Cuál]] [[sentence|frase]] [[is correct|es correcta]]?',
          options: [
            '[[I see a orange on the table.|Veo una naranja en la mesa.]]',
            '[[I see an orange on the table.|Veo una naranja en la mesa.]]',
            '[[I see the orange on the table.|Veo la naranja en la mesa.]]',
          ],
          correctAnswer: 1,
          explanation: '"[[orange|naranja]]" [[starts with|empieza por]] [[a vowel|una vocal]], [[so|entonces]] [[use|usa]] "[[an|una]]".',
        },
      ],
    },
    topicName: 'Grammar',
  },

  // ─── 11–13: Ordenar palabras ─────────────────────────────────────────────
  {
    id: 'a1-u4-l1-g11',
    type: 'sentence-building',
    level: 'A1',
    topic: 'Articles and Plurals',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_ORDER,
      correctSentence: '[[This|Esto]] [[is|es]] [[a|un]] [[desk|escritorio]].',
      words: ['[[is|es]]', '[[This|Esto]]', '[[a|un]]', '[[desk|escritorio]].'],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a1-u4-l1-g12',
    type: 'sentence-building',
    level: 'A1',
    topic: 'Articles and Plurals',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_ORDER,
      correctSentence: '[[These|Estos]] [[are|son]] [[pens|bolígrafos]].',
      words: ['[[are|son]]', '[[These|Estos]]', '[[pens|bolígrafos]].'],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a1-u4-l1-g13',
    type: 'sentence-building',
    level: 'A1',
    topic: 'Articles and Plurals',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_ORDER,
      correctSentence: '[[That|Eso]] [[is|es]] [[an|una]] [[eraser|goma]].',
      words: ['[[is|es]]', '[[That|Eso]]', '[[an|una]]', '[[eraser|goma]].'],
    },
    topicName: 'Grammar',
  },

  // ─── 14–15: Verdadero / Falso ─────────────────────────────────────────────
  {
    id: 'a1-u4-l1-g14',
    type: 'true-false',
    level: 'A1',
    topic: 'Articles and Plurals',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_TF,
      questions: [
        {
          question: '[[We say "a eraser" because eraser starts with a vowel.|Decimos "a eraser" porque eraser empieza por vocal.]]',
          options: ['[[True|Verdadero]]', '[[False|Falso]]'],
          correctAnswer: 'False',
          explanation: '[[False|Falso]]. [[Eraser|Goma]] [[starts with|empieza por]] [[a vowel sound|sonido vocálico]], [[so|entonces]] [[we say|decimos]] "[[an eraser|una goma]]", [[not|no]] "[[a eraser|una goma]]".',
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a1-u4-l1-g15',
    type: 'true-false',
    level: 'A1',
    topic: 'Articles and Plurals',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_TF,
      questions: [
        {
          question: '[[These are books" is the correct plural of "This is a book".|"These are books" es el plural correcto de "This is a book".]]',
          options: ['[[True|Verdadero]]', '[[False|Falso]]'],
          correctAnswer: 'True',
          explanation: '[[True|Verdadero]]. [[This → These|Este → Estos]] ([[near, plural|cerca]]) [[and|y]] [[book → books|libro → libros]] ([[regular plural|regular]]).',
        },
      ],
    },
    topicName: 'Grammar',
  },
];
