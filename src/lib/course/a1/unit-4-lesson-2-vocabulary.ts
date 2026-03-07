/**
 * Unidad 4 — Lección 2: Vocabulario (números, objetos de clase y colores)
 * 15 ejercicios: 6 elección múltiple, 4 emparejamiento, 3 completar huecos, 2 elección múltiple en contexto
 * Título de lección: "Vocabulario: números, objetos y colores"
 */

import { Exercise } from '@/lib/exercise-generator';

const LESSON_TITLE = 'Vocabulario: números, objetos y colores';
const INSTRUCTIONS_MULTIPLE = 'Elige la opción correcta.';
const INSTRUCTIONS_MATCHING = 'Empareja cada palabra en inglés con su traducción al español.';
const INSTRUCTIONS_FILL = 'Elige la palabra correcta para completar la frase.';

export const UNIT_4_LESSON_2_VOCABULARY: Exercise[] = [
  // ─── 1–6: Elección múltiple ───────────────────────────────────────────────
  {
    id: 'a1-u4-l2-v1',
    type: 'multiple-choice',
    level: 'A1',
    topic: 'Numbers',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_MULTIPLE,
      questions: [
        {
          question: '[[Which number comes after "three"?|¿Qué número sigue al "tres"?]]',
          options: [
            '[[two|dos]]',
            '[[four|cuatro]]',
            '[[five|cinco]]',
          ],
          correctAnswer: 1,
          explanation: '[[The numbers one to five are:|Los números del uno al cinco son:]] [[one|uno]], [[two|dos]], [[three|tres]], [[four|cuatro]], [[five|cinco]].',
        },
      ],
    },
    topicName: 'Vocabulary',
  },
  {
    id: 'a1-u4-l2-v2',
    type: 'multiple-choice',
    level: 'A1',
    topic: 'Numbers',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_MULTIPLE,
      questions: [
        {
          question: '[[Which number comes before "nine"?|¿Qué número va antes del "nueve"?]]',
          options: [
            '[[six|seis]]',
            '[[seven|siete]]',
            '[[eight|ocho]]',
          ],
          correctAnswer: 2,
          explanation: '[[The numbers six to ten are:|Los números del seis al diez son:]] [[six|seis]], [[seven|siete]], [[eight|ocho]], [[nine|nueve]], [[ten|diez]].',
        },
      ],
    },
    topicName: 'Vocabulary',
  },
  {
    id: 'a1-u4-l2-v3',
    type: 'multiple-choice',
    level: 'A1',
    topic: 'Classroom Objects',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_MULTIPLE,
      questions: [
        {
          question: '[[What do you use to write in a notebook?|¿Qué usas para escribir en un cuaderno?]]',
          options: [
            '[[a ruler|una regla]]',
            '[[a book|un libro]]',
            '[[a pen|un bolígrafo]]',
          ],
          correctAnswer: 2,
          explanation: '[[A pen|Un bolígrafo]] [[is used|se usa]] [[to write|para escribir]].',
        },
      ],
    },
    topicName: 'Vocabulary',
  },
  {
    id: 'a1-u4-l2-v4',
    type: 'multiple-choice',
    level: 'A1',
    topic: 'Classroom Objects',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_MULTIPLE,
      questions: [
        {
          question: '[[What do you use to remove pencil marks?|¿Qué usas para borrar marcas de lápiz?]]',
          options: [
            '[[a bag|una mochila]]',
            '[[an eraser|una goma]]',
            '[[a desk|un escritorio]]',
          ],
          correctAnswer: 1,
          explanation: '[[An eraser|Una goma]] [[is used|se usa]] [[to remove|para borrar]] [[pencil marks|marcas de lápiz]].',
        },
      ],
    },
    topicName: 'Vocabulary',
  },
  {
    id: 'a1-u4-l2-v5',
    type: 'multiple-choice',
    level: 'A1',
    topic: 'Colors',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_MULTIPLE,
      questions: [
        {
          question: '[[What color is the sky on a clear day?|¿De qué color es el cielo en un día despejado?]]',
          options: [
            '[[red|rojo]]',
            '[[green|verde]]',
            '[[blue|azul]]',
          ],
          correctAnswer: 2,
          explanation: '[[The sky|El cielo]] [[is|es]] [[blue|azul]] [[on a clear day|en un día despejado]].',
        },
      ],
    },
    topicName: 'Vocabulary',
  },
  {
    id: 'a1-u4-l2-v6',
    type: 'multiple-choice',
    level: 'A1',
    topic: 'Colors',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_MULTIPLE,
      questions: [
        {
          question: '[[What color is the sun?|¿De qué color es el sol?]]',
          options: [
            '[[black|negro]]',
            '[[yellow|amarillo]]',
            '[[white|blanco]]',
          ],
          correctAnswer: 1,
          explanation: '[[The sun|El sol]] [[is|es]] [[yellow|amarillo]].',
        },
      ],
    },
    topicName: 'Vocabulary',
  },

  // ─── 7–10: Emparejamiento ─────────────────────────────────────────────────
  {
    id: 'a1-u4-l2-v7',
    type: 'matching',
    level: 'A1',
    topic: 'Numbers',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_MATCHING,
      pairs: [
        { id: '1', left: '[[one|uno]]', right: 'uno' },
        { id: '2', left: '[[two|dos]]', right: 'dos' },
        { id: '3', left: '[[three|tres]]', right: 'tres' },
        { id: '4', left: '[[four|cuatro]]', right: 'cuatro' },
        { id: '5', left: '[[five|cinco]]', right: 'cinco' },
      ],
    },
    topicName: 'Vocabulary',
  },
  {
    id: 'a1-u4-l2-v8',
    type: 'matching',
    level: 'A1',
    topic: 'Numbers',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_MATCHING,
      pairs: [
        { id: '1', left: '[[six|seis]]', right: 'seis' },
        { id: '2', left: '[[seven|siete]]', right: 'siete' },
        { id: '3', left: '[[eight|ocho]]', right: 'ocho' },
        { id: '4', left: '[[nine|nueve]]', right: 'nueve' },
        { id: '5', left: '[[ten|diez]]', right: 'diez' },
      ],
    },
    topicName: 'Vocabulary',
  },
  {
    id: 'a1-u4-l2-v9',
    type: 'matching',
    level: 'A1',
    topic: 'Classroom Objects',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_MATCHING,
      pairs: [
        { id: '1', left: '[[pen|bolígrafo]]', right: 'bolígrafo' },
        { id: '2', left: '[[book|libro]]', right: 'libro' },
        { id: '3', left: '[[ruler|regla]]', right: 'regla' },
        { id: '4', left: '[[eraser|goma]]', right: 'goma' },
        { id: '5', left: '[[bag|mochila]]', right: 'mochila' },
      ],
    },
    topicName: 'Vocabulary',
  },
  {
    id: 'a1-u4-l2-v10',
    type: 'matching',
    level: 'A1',
    topic: 'Colors',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_MATCHING,
      pairs: [
        { id: '1', left: '[[red|rojo]]', right: 'rojo' },
        { id: '2', left: '[[blue|azul]]', right: 'azul' },
        { id: '3', left: '[[green|verde]]', right: 'verde' },
        { id: '4', left: '[[yellow|amarillo]]', right: 'amarillo' },
        { id: '5', left: '[[black|negro]]', right: 'negro' },
      ],
    },
    topicName: 'Vocabulary',
  },

  // ─── 11–13: Completar huecos ──────────────────────────────────────────────
  {
    id: 'a1-u4-l2-v11',
    type: 'fill-blank',
    level: 'A1',
    topic: 'Numbers',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_FILL,
      questions: [
        {
          question: '[[There are|Hay]] ____ [[books|libros]] [[on|en]] [[the desk|el escritorio]]. (7)',
          options: ['[[six|seis]]', '[[seven|siete]]', '[[eight|ocho]]'],
          correctAnswer: '[[seven|siete]]',
          explanation: '[[Seven|Siete]] = 7.',
        },
      ],
    },
    topicName: 'Vocabulary',
  },
  {
    id: 'a1-u4-l2-v12',
    type: 'fill-blank',
    level: 'A1',
    topic: 'Classroom Objects',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_FILL,
      questions: [
        {
          question: '[[I measure|Mido]] [[the paper|el papel]] [[with|con]] ____ .',
          options: ['[[a pen|un bolígrafo]]', '[[a ruler|una regla]]', '[[an eraser|una goma]]'],
          correctAnswer: '[[a ruler|una regla]]',
          explanation: '[[A ruler|Una regla]] [[is used|se usa]] [[to measure|para medir]].',
        },
      ],
    },
    topicName: 'Vocabulary',
  },
  {
    id: 'a1-u4-l2-v13',
    type: 'fill-blank',
    level: 'A1',
    topic: 'Colors',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_FILL,
      questions: [
        {
          question: '[[The grass|La hierba]] [[is|es]] ____ .',
          options: ['[[red|roja]]', '[[blue|azul]]', '[[green|verde]]'],
          correctAnswer: '[[green|verde]]',
          explanation: '[[The grass|La hierba]] [[is green|es verde]].',
        },
      ],
    },
    topicName: 'Vocabulary',
  },

  // ─── 14–15: Elección múltiple en contexto ────────────────────────────────
  {
    id: 'a1-u4-l2-v14',
    type: 'multiple-choice',
    level: 'A1',
    topic: 'Numbers',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_MULTIPLE,
      questions: [
        {
          question: '[[Which sentence is correct?|¿Qué frase es correcta?]]',
          options: [
            '[[There are ten pen on the desk.|Hay diez bolígrafos en el escritorio.]]',
            '[[There are ten pens on the desk.|Hay diez bolígrafos en el escritorio.]]',
            '[[There are ten pens in the bag.|Hay diez bolígrafos en la mochila.]]',
          ],
          correctAnswer: 1,
          explanation: '"[[ten pens|diez bolígrafos]]" [[is correct|es correcto]]: [[number + plural noun|número + sustantivo plural]].',
        },
      ],
    },
    topicName: 'Vocabulary',
  },
  {
    id: 'a1-u4-l2-v15',
    type: 'multiple-choice',
    level: 'A1',
    topic: 'Colors',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_MULTIPLE,
      questions: [
        {
          question: '[[Which description is correct?|¿Qué descripción es correcta?]]',
          options: [
            '[[It is a black eraser.|Es una goma negra.]]',
            '[[It is a black erasers.|Es una gomas negras.]]',
            '[[It is an black eraser.|Es una goma negra.]]',
          ],
          correctAnswer: 0,
          explanation: '"[[It is a black eraser.|Es una goma negra.]]" [[uses|usa]] [[the correct article|el artículo correcto]] "[[a|una]]" and [[singular noun|sustantivo singular]].',
        },
      ],
    },
    topicName: 'Vocabulary',
  },
];
