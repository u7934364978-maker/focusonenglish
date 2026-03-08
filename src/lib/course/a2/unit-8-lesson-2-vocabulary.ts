/**
 * Unidad 8 — Lección 2: Vocabulario (Preposiciones de tiempo)
 * 15 ejercicios
 */

import { Exercise } from '@/lib/exercise-generator';

const LESSON_TITLE = '[[Vocabulary|Vocabulario]]: [[Prepositions of Time|Preposiciones de tiempo]]';
const INSTRUCTIONS_MC = 'Elige la preposición correcta para cada frase.';
const INSTRUCTIONS_MATCH = 'Relaciona cada expresión de tiempo con su preposición correcta.';
const INSTRUCTIONS_FILL = 'Completa la frase con la preposición correcta: at, on, in.';

export const UNIT_8_LESSON_2_VOCABULARY: Exercise[] = [
  {
    id: 'a2-u8-l2-v1',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Prepositions of Time',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_MC,
      questions: [
        {
          question: '[[What|Qué]] [[preposition|preposición]] [[do we use|usamos]] [[for|para]] [[specific|hora]] [[time|específica]]?',
          options: ['[[at|a]]', '[[on|en]]', '[[in|en]]'],
          correctAnswer: 0,
          explanation: '[[At|A]] = [[at 7 o\'clock|a las 7 en punto]], [[at noon|a mediodía]], [[at midnight|a medianoche]].',
        },
      ],
    },
    topicName: 'Vocabulary',
  },
  {
    id: 'a2-u8-l2-v2',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Prepositions of Time',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_MC,
      questions: [
        {
          question: '[[What|Qué]] [[preposition|preposición]] [[do we use|usamos]] [[for|para]] [[days|días]] [[of|de]] [[the|la]] [[week|semana]]?',
          options: ['[[at|a]]', '[[on|en]]', '[[in|en]]'],
          correctAnswer: 1,
          explanation: '[[On|En]] = [[on Monday|el lunes]], [[on Saturday|el sábado]].',
        },
      ],
    },
    topicName: 'Vocabulary',
  },
  {
    id: 'a2-u8-l2-v3',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Prepositions of Time',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_MC,
      questions: [
        {
          question: '[[What|Qué]] [[preposition|preposición]] [[do we use|usamos]] [[for|para]] [[months|meses]]?',
          options: ['[[at|a]]', '[[on|en]]', '[[in|en]]'],
          correctAnswer: 2,
          explanation: '[[In|En]] = [[in January|en enero]], [[in December|en diciembre]].',
        },
      ],
    },
    topicName: 'Vocabulary',
  },
  {
    id: 'a2-u8-l2-v4',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Prepositions of Time',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_MC,
      questions: [
        {
          question: '"[[At|A]] [[night|noche]]" [[means|significa]] ____.',
          options: ['[[during|durante]] [[the|la]] [[night|noche]]', '[[on|en]] [[Monday|lunes]]', '[[in|en]] [[January|enero]]'],
          correctAnswer: 0,
          explanation: '[[At night|Por la noche]] = [[during the night|durante la noche]]. [[Exception|Excepción]]: [[we say|decimos]] [[at night|por la noche]], [[not|no]] [[in night|en noche]].',
        },
      ],
    },
    topicName: 'Vocabulary',
  },
  {
    id: 'a2-u8-l2-v5',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Prepositions of Time',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_MC,
      questions: [
        {
          question: '[[What|Qué]] [[word|palabra]] [[completes|complete]] [[the|la]] [[sentence|frase]]? "[[The|La]] [[shop|tienda]] [[opens|abre]] ____ [[9|9]] [[am|de la mañana]]."',
          options: ['[[at|a]]', '[[on|en]]', '[[in|en]]'],
          correctAnswer: 0,
          explanation: '[[At|A]] = [[specific|específico]] [[time|hora]]. [[At 9 am|A las 9 de la mañana]].',
        },
      ],
    },
    topicName: 'Vocabulary',
  },
  {
    id: 'a2-u8-l2-v6',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Prepositions of Time',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_MC,
      questions: [
        {
          question: '"[[I|Yo]] ____ [[Christmas Day|el día de Navidad]]" [[needs|necesita]] [[which|cuál]] [[preposition|preposición]]?',
          options: ['[[at|a]]', '[[on|en]]', '[[in|en]]'],
          correctAnswer: 1,
          explanation: '[[On|En]] = [[specific|fechas]] [[dates|específicas]]: [[on Christmas Day|el día de Navidad]].',
        },
      ],
    },
    topicName: 'Vocabulary',
  },
  {
    id: 'a2-u8-l2-v7',
    type: 'matching',
    level: 'A2',
    topic: 'Prepositions of Time',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_MATCH,
      pairs: [
        { id: 'p1', left: '[[7 o\'clock|7 en punto]]', right: '[[at|a]]' },
        { id: 'p2', left: '[[Monday|lunes]]', right: '[[on|en]]' },
        { id: 'p3', left: '[[January|enero]]', right: '[[in|en]]' },
        { id: 'p4', left: '[[midnight|medianoche]]', right: '[[at|a]]' },
      ],
    },
    topicName: 'Vocabulary',
  },
  {
    id: 'a2-u8-l2-v8',
    type: 'matching',
    level: 'A2',
    topic: 'Prepositions of Time',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_MATCH,
      pairs: [
        { id: 'p1', left: '[[the morning|la mañana]]', right: '[[in|en]]' },
        { id: 'p2', left: '[[Christmas Day|el día de Navidad]]', right: '[[on|en]]' },
        { id: 'p3', left: '[[2024|2024]]', right: '[[in|en]]' },
        { id: 'p4', left: '[[noon|mediodía]]', right: '[[at|a]]' },
      ],
    },
    topicName: 'Vocabulary',
  },
  {
    id: 'a2-u8-l2-v9',
    type: 'fill-blank',
    level: 'A2',
    topic: 'Prepositions of Time',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_FILL,
      questions: [
        {
          question: '[[I|Yo]] [[go|voy]] [[to|a]] [[bed|cama]] ____ [[11|11]] [[pm|de la noche]].',
          options: ['[[at|a]]', '[[on|en]]', '[[in|en]]'],
          correctAnswer: '[[at|a]]',
          explanation: '[[At|A]] = [[specific|específico]] [[time|hora]]. [[At 11 pm|A las 11 de la noche]].',
        },
      ],
    },
    topicName: 'Vocabulary',
  },
  {
    id: 'a2-u8-l2-v10',
    type: 'fill-blank',
    level: 'A2',
    topic: 'Prepositions of Time',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_FILL,
      questions: [
        {
          question: '[[We|Nosotros]] [[have|tenemos]] [[English|inglés]] ____ [[Tuesday|martes]] [[and|y]] [[Thursday|jueves]].',
          options: ['[[at|a]]', '[[on|en]]', '[[in|en]]'],
          correctAnswer: '[[on|en]]',
          explanation: '[[On|En]] = [[days|días]]. [[On Tuesday|El martes]], [[on Thursday|el jueves]].',
        },
      ],
    },
    topicName: 'Vocabulary',
  },
  {
    id: 'a2-u8-l2-v11',
    type: 'fill-blank',
    level: 'A2',
    topic: 'Prepositions of Time',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_FILL,
      questions: [
        {
          question: '[[The|El]] [[course|curso]] [[starts|empieza]] ____ [[September|septiembre]].',
          options: ['[[at|a]]', '[[on|en]]', '[[in|en]]'],
          correctAnswer: '[[in|en]]',
          explanation: '[[In|En]] = [[months|meses]]. [[In September|En septiembre]].',
        },
      ],
    },
    topicName: 'Vocabulary',
  },
  {
    id: 'a2-u8-l2-v12',
    type: 'fill-blank',
    level: 'A2',
    topic: 'Prepositions of Time',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_FILL,
      questions: [
        {
          question: '[[I|Yo]] [[like|me gusta]] [[to|a]] [[read|leer]] ____ [[the|la]] [[evening|noche]].',
          options: ['[[at|a]]', '[[on|en]]', '[[in|en]]'],
          correctAnswer: '[[in|en]]',
          explanation: '[[In|En]] = [[in the evening|por la noche]], [[in the afternoon|por la tarde]].',
        },
      ],
    },
    topicName: 'Vocabulary',
  },
  {
    id: 'a2-u8-l2-v13',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Prepositions of Time',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_MC,
      questions: [
        {
          question: '[[What|Qué]] [[preposition|preposición]] [[do we use|usamos]] [[for|para]] "[[the weekend|el fin de semana]]"?',
          options: ['[[at|a]]', '[[on|en]]', '[[in|en]]'],
          correctAnswer: 0,
          explanation: '[[At|A]] = [[at the weekend|el fin de semana]]. [[British|Británico]] [[English|inglés]]. [[American|Americano]]: [[on the weekend|el fin de semana]].',
        },
      ],
    },
    topicName: 'Vocabulary',
  },
  {
    id: 'a2-u8-l2-v14',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Prepositions of Time',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_MC,
      questions: [
        {
          question: '[[What|Qué]] [[word|palabra]] [[completes|complete]] [[the|la]] [[sentence|frase]]? "[[My|Mi]] [[birthday|cumpleaños]] [[is|es]] ____ [[the|el]] [[5th|5]] [[of|de]] [[May|mayo]]."',
          options: ['[[at|a]]', '[[on|en]]', '[[in|en]]'],
          correctAnswer: 1,
          explanation: '[[On|En]] = [[specific|fechas]] [[dates|específicas]]. [[On the 5th of May|El 5 de mayo]].',
        },
      ],
    },
    topicName: 'Vocabulary',
  },
  {
    id: 'a2-u8-l2-v15',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Prepositions of Time',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_MC,
      questions: [
        {
          question: '[[What|Qué]] [[word|palabra]] [[completes|complete]] [[the|la]] [[sentence|frase]]? "[[I|Yo]] [[was born|nací]] ____ [[winter|invierno]]."',
          options: ['[[at|a]]', '[[on|en]]', '[[in|en]]'],
          correctAnswer: 2,
          explanation: '[[In|En]] = [[seasons|estaciones]]. [[In winter|En invierno]], [[in summer|en verano]].',
        },
      ],
    },
    topicName: 'Vocabulary',
  },
];
