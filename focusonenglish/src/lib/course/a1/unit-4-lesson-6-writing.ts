/**
 * Unidad 4 — Lección 6: Expresión escrita
 * 15 ejercicios: 5 completar frases, 3 ordenar y escribir oración, 4 redacción guiada (1–3 frases), 3 redacción libre (4–6 frases)
 */

import { Exercise } from '@/lib/exercise-generator';

const LESSON_TITLE = 'Expresión escrita';

export const UNIT_4_LESSON_6_WRITING: Exercise[] = [
  // ─── 1–5: Completar frases (por escrito) ───────────────────────────────────
  {
    id: 'a1-u4-l6-w1',
    type: 'fill-blank',
    level: 'A1',
    topic: 'Articles and Plurals',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: 'Completa la frase con "a" o "an".',
      questions: [
        {
          question: '[[This|Esto]] [[is|es]] ____ [[pencil.|lápiz.]]',
          correctAnswer: 'a',
          acceptableAnswers: ['a'],
          explanation: '[[Use|Usa]] "[[a|un]]" [[before|antes de]] [[consonant|consonante]]: "[[a pencil|un lápiz]]".',
        },
      ],
    },
    topicName: 'Writing',
  },
  {
    id: 'a1-u4-l6-w2',
    type: 'fill-blank',
    level: 'A1',
    topic: 'Articles and Plurals',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: 'Completa la frase con "a" o "an".',
      questions: [
        {
          question: '[[That|Eso]] [[is|es]] ____ [[eraser.|goma.]]',
          correctAnswer: 'an',
          acceptableAnswers: ['an'],
          explanation: '[[Use|Usa]] "[[an|una]]" [[before|antes de]] [[vowel|vocal]]: "[[an eraser|una goma]]".',
        },
      ],
    },
    topicName: 'Writing',
  },
  {
    id: 'a1-u4-l6-w3',
    type: 'fill-blank',
    level: 'A1',
    topic: 'Articles and Plurals',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: 'Escribe el plural del objeto entre paréntesis.',
      questions: [
        {
          question: '[[These|Estos]] [[are|son]] ____ . (book)',
          correctAnswer: 'books',
          acceptableAnswers: ['books'],
          explanation: '[[Regular|Regular]] [[plural|plural]]: [[book|libro]] → [[books|libros]] (+s).',
        },
      ],
    },
    topicName: 'Writing',
  },
  {
    id: 'a1-u4-l6-w4',
    type: 'fill-blank',
    level: 'A1',
    topic: 'Articles and Plurals',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: 'Completa con el demostrativo correcto: "this", "that", "these" o "those".',
      questions: [
        {
          question: '____ [[are|son]] [[my|mis]] [[pens.|bolígrafos.]] ([[Near me.|Cerca de mí.]])',
          correctAnswer: 'These',
          acceptableAnswers: ['These', 'these'],
          explanation: '"[[These|Estos]]" [[is|se usa]] [[for|para]] [[plural|plural]] [[near|cerca]]: "[[These are my pens.|Estos son mis bolígrafos.]]"',
        },
      ],
    },
    topicName: 'Writing',
  },
  {
    id: 'a1-u4-l6-w5',
    type: 'fill-blank',
    level: 'A1',
    topic: 'Articles and Plurals',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: 'Completa con el demostrativo correcto: "this", "that", "these" o "those".',
      questions: [
        {
          question: '____ [[is|es]] [[a|una]] [[ruler.|regla.]] ([[Far away.|Lejos de mí.]])',
          correctAnswer: 'That',
          acceptableAnswers: ['That', 'that'],
          explanation: '"[[That|Eso]]" [[is|se usa]] [[for|para]] [[singular|singular]] [[far|lejos]]: "[[That is a ruler.|Eso es una regla.]]"',
        },
      ],
    },
    topicName: 'Writing',
  },

  // ─── 6–8: Ordenar palabras y escribir oración ──────────────────────────────
  {
    id: 'a1-u4-l6-w6',
    type: 'sentence-building',
    level: 'A1',
    topic: 'Articles and Plurals',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: 'Ordena las palabras y escribe la frase en el recuadro.',
      correctSentence: '[[This|Esto]] [[is|es]] [[a|un]] [[blue|azul]] [[pen.|bolígrafo.]]',
      words: ['[[a|un]]', '[[This|Esto]]', '[[pen.|bolígrafo.]]', '[[is|es]]', '[[blue|azul]]'],
    },
    topicName: 'Writing',
  },
  {
    id: 'a1-u4-l6-w7',
    type: 'sentence-building',
    level: 'A1',
    topic: 'Articles and Plurals',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: 'Ordena las palabras para formar una frase correcta.',
      correctSentence: '[[Those|Esos]] [[are|son]] [[red|rojos]] [[books.|libros.]]',
      words: ['[[books.|libros.]]', '[[Those|Esos]]', '[[red|rojos]]', '[[are|son]]'],
    },
    topicName: 'Writing',
  },
  {
    id: 'a1-u4-l6-w8',
    type: 'sentence-building',
    level: 'A1',
    topic: 'Articles and Plurals',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: 'Ordena las palabras.',
      correctSentence: '[[That|Eso]] [[is|es]] [[an|un]] [[orange|naranja]] [[eraser.|goma.]]',
      words: ['[[an|un]]', '[[orange|naranja]]', '[[That|Eso]]', '[[eraser.|goma.]]', '[[is|es]]'],
    },
    topicName: 'Writing',
  },

  // ─── 9–12: Redacción corta guiada (1–3 frases) ──────────────────────────────
  {
    id: 'a1-u4-l6-w9',
    type: 'writing',
    level: 'A1',
    topic: 'Articles and Plurals',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: 'Escribe una frase sobre un objeto del aula usando "This is a/an...". Escribe 1 o 2 frases.',
      prompt: '[[This|Esto]] [[is|es]] [[a/an|un/una]] ____.',
      minWords: 3,
      maxWords: 15,
    },
    topicName: 'Writing',
  },
  {
    id: 'a1-u4-l6-w10',
    type: 'writing',
    level: 'A1',
    topic: 'Articles and Plurals',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: 'Escribe dos frases: una sobre un objeto cercano ("This is...") y otra sobre un objeto lejano ("That is..."). Usa 1 o 2 frases.',
      prompt: '[[This|Esto]] [[is|es]] ____. [[That|Eso]] [[is|es]] ____.',
      minWords: 5,
      maxWords: 20,
    },
    topicName: 'Writing',
  },
  {
    id: 'a1-u4-l6-w11',
    type: 'writing',
    level: 'A1',
    topic: 'Articles and Plurals',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: 'Escribe dos frases sobre objetos del aula: una en singular y otra en plural. Menciona colores. Escribe 2 o 3 frases.',
      prompt: '[[This|Esto]] [[is|es]] [[a/an|un/una]] [[color|color]] ____. [[These|Estos]] [[are|son]] ____ ____.',
      minWords: 8,
      maxWords: 25,
    },
    topicName: 'Writing',
  },
  {
    id: 'a1-u4-l6-w12',
    type: 'writing',
    level: 'A1',
    topic: 'Articles and Plurals',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: 'Describe tres objetos que ves en tu escritorio. Usa demostrativo, artículo y color. Escribe 3 frases.',
      prompt: '[[This|Esto]] / [[That|Eso]] [[is|es]] [[a/an|un/una]] ____ ____. [[These|Estos]] / [[Those|Esos]] [[are|son]] ____ ____.',
      minWords: 10,
      maxWords: 30,
    },
    topicName: 'Writing',
  },

  // ─── 13–15: Redacción libre corta (4–6 frases) ──────────────────────────────
  {
    id: 'a1-u4-l6-w13',
    type: 'writing',
    level: 'A1',
    topic: 'Articles and Plurals',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: 'Describe tu estuche o mochila. Menciona qué objetos hay, los colores y si son muchos o pocos. Usa 4 o 6 frases con "this/that/these/those" y artículos "a/an".',
      prompt: '[[My|Mi]] [[pencil case|estuche]] / [[bag|mochila]]: [[Write about the objects inside|Escribe sobre los objetos que hay dentro]].',
      minWords: 25,
      maxWords: 60,
    },
    topicName: 'Writing',
  },
  {
    id: 'a1-u4-l6-w14',
    type: 'writing',
    level: 'A1',
    topic: 'Articles and Plurals',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: 'Imagina que describes tu aula de inglés. Menciona objetos cerca y lejos, en singular y plural, con sus colores. Escribe 4 o 6 frases.',
      prompt: '[[My|Mi]] [[English classroom|aula de inglés]]: [[Describe the objects around you|Describe los objetos alrededor]].',
      minWords: 25,
      maxWords: 60,
    },
    topicName: 'Writing',
  },
  {
    id: 'a1-u4-l6-w15',
    type: 'writing',
    level: 'A1',
    topic: 'Articles and Plurals',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: 'Escribe un párrafo sobre los objetos del aula de un amigo imaginario. Describe colores y cantidades. Usa demostrativos, artículos y plurales. Escribe 4 o 6 frases con al menos dos negativas.',
      prompt: '[[My friend\'s classroom|El aula de mi amigo]]: [[Describe the objects, colors and quantities|Describe objetos, colores y cantidades]].',
      minWords: 30,
      maxWords: 70,
    },
    topicName: 'Writing',
  },
];
