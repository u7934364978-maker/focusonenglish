/**
 * Unidad 8 — Lección 1: Gramática (Preposiciones de tiempo)
 * 15 ejercicios: at, on, in
 */

import { Exercise } from '@/lib/exercise-generator';

const LESSON_TITLE = '[[Prepositions of Time|Preposiciones de tiempo]]: [[at|a]], [[on|en]], [[in|en]]';
const INSTRUCTIONS_FILL = 'Elige la preposición de tiempo correcta (at, on, in) para cada frase.';
const INSTRUCTIONS_MULTIPLE = 'Elige la frase o la forma correcta.';
const INSTRUCTIONS_ORDER = 'Ordena las palabras para formar una oración correcta.';
const INSTRUCTIONS_TF = 'Indica si la afirmación es verdadera o falsa.';

export const UNIT_8_LESSON_1_GRAMMAR: Exercise[] = [
  {
    id: 'a2-u8-l1-g1',
    type: 'fill-blank',
    level: 'A2',
    topic: 'Prepositions of Time',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_FILL,
      questions: [
        {
          question: '[[I|Yo]] [[get up|me levanto]] ____ [[7|7]] [[o\'clock|en punto]] [[every|cada]] [[morning|mañana]].',
          options: ['[[at|a]]', '[[on|en]]', '[[in|en]]'],
          correctAnswer: 'at',
          explanation: '[[At|A]] = [[specific|específico]] [[time|hora]]: [[at 7 o\'clock|a las 7 en punto]].',
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a2-u8-l1-g2',
    type: 'fill-blank',
    level: 'A2',
    topic: 'Prepositions of Time',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_FILL,
      questions: [
        {
          question: '[[I|Yo]] [[have|tengo]] [[a|una]] [[meeting|reunión]] ____ [[Monday|lunes]].',
          options: ['[[at|a]]', '[[on|en]]', '[[in|en]]'],
          correctAnswer: 'on',
          explanation: '[[On|En]] = [[days|días]] [[of|de]] [[the|la]] [[week|semana]]: [[on Monday|el lunes]].',
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a2-u8-l1-g3',
    type: 'fill-blank',
    level: 'A2',
    topic: 'Prepositions of Time',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_FILL,
      questions: [
        {
          question: '[[We|Nosotros]] [[go|vamos]] [[on|de]] [[holiday|vacaciones]] ____ [[August|agosto]].',
          options: ['[[at|a]]', '[[on|en]]', '[[in|en]]'],
          correctAnswer: 'in',
          explanation: '[[In|En]] = [[months|meses]], [[years|años]], [[seasons|estaciones]]: [[in August|en agosto]].',
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a2-u8-l1-g4',
    type: 'fill-blank',
    level: 'A2',
    topic: 'Prepositions of Time',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_FILL,
      questions: [
        {
          question: '[[The|El]] [[film|película]] [[starts|empieza]] ____ [[midnight|medianoche]].',
          options: ['[[at|a]]', '[[on|en]]', '[[in|en]]'],
          correctAnswer: 'at',
          explanation: '[[At|A]] = [[midnight|medianoche]], [[noon|mediodía]], [[night|noche]]: [[at midnight|a medianoche]].',
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a2-u8-l1-g5',
    type: 'fill-blank',
    level: 'A2',
    topic: 'Prepositions of Time',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_FILL,
      questions: [
        {
          question: '[[My|Mi]] [[birthday|cumpleaños]] [[is|es]] ____ [[the|el]] [[15th|15]] [[of|de]] [[March|marzo]].',
          options: ['[[at|a]]', '[[on|en]]', '[[in|en]]'],
          correctAnswer: 'on',
          explanation: '[[On|En]] = [[specific|fechas]] [[dates|específicas]]: [[on the 15th of March|el 15 de marzo]].',
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a2-u8-l1-g6',
    type: 'fill-blank',
    level: 'A2',
    topic: 'Prepositions of Time',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_FILL,
      questions: [
        {
          question: '[[I|Yo]] [[was born|nací]] ____ [[1990|1990]].',
          options: ['[[at|a]]', '[[on|en]]', '[[in|en]]'],
          correctAnswer: 'in',
          explanation: '[[In|En]] = [[years|años]]: [[in 1990|en 1990]].',
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a2-u8-l1-g7',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Prepositions of Time',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_MULTIPLE,
      questions: [
        {
          question: '[[Which|Cuál]] [[sentence|frase]] [[is|es]] [[correct|correcta]]?',
          options: [
            '[[I|Yo]] [[wake up|me despierto]] [[at|a]] [[6|6]] [[o\'clock|en punto]].',
            '[[I|Yo]] [[wake up|me despierto]] [[on|en]] [[6|6]] [[o\'clock|en punto]].',
            '[[I|Yo]] [[wake up|me despierto]] [[in|en]] [[6|6]] [[o\'clock|en punto]].',
          ],
          correctAnswer: 0,
          explanation: '[[At|A]] = [[specific|específico]] [[time|hora]]. [[At 6 o\'clock|A las 6 en punto]].',
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a2-u8-l1-g8',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Prepositions of Time',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_MULTIPLE,
      questions: [
        {
          question: '[[What|Qué]] [[preposition|preposición]] [[do we use|usamos]] [[for|para]] [[days|días]]?',
          options: ['[[at|a]]', '[[on|en]]', '[[in|en]]'],
          correctAnswer: 1,
          explanation: '[[On|En]] = [[days|días]]: [[on Monday|el lunes]], [[on Saturday|el sábado]].',
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a2-u8-l1-g9',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Prepositions of Time',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_MULTIPLE,
      questions: [
        {
          question: '[[Complete|Completa]]: "[[I|Yo]] [[have|tengo]] [[lunch|cena]] ____ [[noon|mediodía]]."',
          options: ['[[at|a]]', '[[on|en]]', '[[in|en]]'],
          correctAnswer: 0,
          explanation: '[[At|A]] = [[noon|mediodía]], [[midnight|medianoche]], [[night|noche]].',
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a2-u8-l1-g10',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Prepositions of Time',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_MULTIPLE,
      questions: [
        {
          question: '[[Complete|Completa]]: "[[We|Nosotros]] [[meet|nos reunimos]] ____ [[the|el]] [[morning|mañana]]."',
          options: ['[[at|a]]', '[[on|en]]', '[[in|en]]'],
          correctAnswer: 2,
          explanation: '[[In|En]] = [[morning|mañana]], [[afternoon|tarde]], [[evening|noche]]: [[in the morning|por la mañana]].',
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a2-u8-l1-g11',
    type: 'sentence-building',
    level: 'A2',
    topic: 'Prepositions of Time',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_ORDER,
      correctSentence: '[[I|Yo]] [[have|tengo]] [[breakfast|desayuno]] [[at|a]] [[8|8]] [[o\'clock|en punto]] [[in|por]] [[the|la]] [[morning|mañana]].',
      words: ['[[have|tengo]]', '[[I|Yo]]', '[[breakfast|desayuno]]', '[[at|a]]', '[[8|8]]', '[[o\'clock|en punto]]', '[[in|por]]', '[[the|la]]', '[[morning|mañana]].'],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a2-u8-l1-g12',
    type: 'sentence-building',
    level: 'A2',
    topic: 'Prepositions of Time',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_ORDER,
      correctSentence: '[[The|La]] [[meeting|reunión]] [[is|es]] [[on|el]] [[Friday|viernes]] [[at|a]] [[3|3]] [[pm|de la tarde]].',
      words: ['[[is|es]]', '[[The|La]]', '[[meeting|reunión]]', '[[on|el]]', '[[Friday|viernes]]', '[[at|a]]', '[[3|3]]', '[[pm|de la tarde]].'],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a2-u8-l1-g13',
    type: 'sentence-building',
    level: 'A2',
    topic: 'Prepositions of Time',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_ORDER,
      correctSentence: '[[We|Nosotros]] [[go|vamos]] [[to|a]] [[the|la]] [[beach|playa]] [[in|en]] [[summer|verano]].',
      words: ['[[go|vamos]]', '[[We|Nosotros]]', '[[to|a]]', '[[the|la]]', '[[beach|playa]]', '[[in|en]]', '[[summer|verano]].'],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a2-u8-l1-g14',
    type: 'true-false',
    level: 'A2',
    topic: 'Prepositions of Time',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_TF,
      questions: [
        {
          question: '"[[I|Yo]] [[have|tengo]] [[dinner|cena]] [[on|en]] [[7|7]] [[o\'clock|en punto]]" [[is|es]] [[correct|correcto]] [[in|en]] [[English|inglés]].',
          options: ['[[True|Verdadero]]', '[[False|Falso]]'],
          correctAnswer: 'False',
          explanation: '[[False|Falso]]. [[We use|Usamos]] [[at|a]] [[for|para]] [[time|hora]]: [[at 7 o\'clock|a las 7 en punto]], [[not|no]] [[on|en]].',
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a2-u8-l1-g15',
    type: 'true-false',
    level: 'A2',
    topic: 'Prepositions of Time',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_TF,
      questions: [
        {
          question: '[[We use|Usamos]] [[in|en]] [[for|para]] [[months|meses]], [[years|años]], [[and|y]] [[seasons|estaciones]].',
          options: ['[[True|Verdadero]]', '[[False|Falso]]'],
          correctAnswer: 'True',
          explanation: '[[True|Verdadero]]. [[In January|En enero]], [[in 2024|en 2024]], [[in summer|en verano]].',
        },
      ],
    },
    topicName: 'Grammar',
  },
];
