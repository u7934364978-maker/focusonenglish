/**
 * Unidad 18 — Lección 2: Vocabulario (For & Since, time periods)
 * 15 ejercicios
 */

import { Exercise } from '@/lib/exercise-generator';

const LESSON_TITLE = '[[Vocabulary|Vocabulario]]: [[For|Durante]] [[&||]] [[Since|Desde]], [[time periods|períodos de tiempo]]';
const INSTRUCTIONS_MC = 'Elige la palabra correcta para cada definición o frase.';
const INSTRUCTIONS_MATCH = 'Relaciona cada palabra en inglés con su traducción.';
const INSTRUCTIONS_FILL = 'Completa la frase con la palabra correcta del recuadro.';

export const UNIT_18_LESSON_2_VOCABULARY: Exercise[] = [
  {
    id: 'a2-u18-l2-v1',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'For Since',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_MC,
      questions: [
        {
          question: '[[What|Qué]] [[word|palabra]] [[do|usamos]] [[we|nosotros]] [[use|usar]] [[with|con]] [[a|una]] [[duration|duración]] [[of|de]] [[time|tiempo]]?',
          options: ['[[since|desde]]', '[[for|durante]]', '[[ago|hace]]'],
          correctAnswer: 1,
          explanation: '[[For|Durante]] + [[duration|duración]]: [[for two years|durante dos años]].',
        },
      ],
    },
    topicName: 'Vocabulary',
  },
  {
    id: 'a2-u18-l2-v2',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'For Since',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_MC,
      questions: [
        {
          question: '[[What|Qué]] [[word|palabra]] [[do|usamos]] [[we|nosotros]] [[use|usar]] [[with|con]] [[a|un]] [[starting point|punto de inicio]]?',
          options: ['[[for|durante]]', '[[since|desde]]', '[[during|durante]]'],
          correctAnswer: 1,
          explanation: '[[Since|Desde]] + [[starting point|punto de inicio]]: [[since 2020|desde 2020]].',
        },
      ],
    },
    topicName: 'Vocabulary',
  },
  {
    id: 'a2-u18-l2-v3',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'For Since',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_MC,
      questions: [
        {
          question: '"[[I|Yo]] [[have|he]] [[lived|vivido]] ____ [[two years|dos años]]" [[needs|necesita]]:',
          options: ['[[since|desde]]', '[[for|durante]]', '[[ago|hace]]'],
          correctAnswer: 1,
          explanation: '[[For|Durante]] + [[duration|duración]] ([[two years|dos años]]).',
        },
      ],
    },
    topicName: 'Vocabulary',
  },
  {
    id: 'a2-u18-l2-v4',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'For Since',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_MC,
      questions: [
        {
          question: '"[[I|Yo]] [[have|he]] [[known|conocido]] [[her|a ella]] ____ [[March|marzo]]" [[needs|necesita]]:',
          options: ['[[for|durante]]', '[[since|desde]]', '[[during|durante]]'],
          correctAnswer: 1,
          explanation: '[[Since|Desde]] + [[starting point|punto de inicio]] ([[March|marzo]]).',
        },
      ],
    },
    topicName: 'Vocabulary',
  },
  {
    id: 'a2-u18-l2-v5',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'For Since',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_MC,
      questions: [
        {
          question: '[[What|Qué]] [[word|palabra]] [[means|significa]] "durante" [[in|en]] "[[durante dos horas|during two hours]]"?',
          options: ['[[for|durante]]', '[[since|desde]]', '[[during|durante]]'],
          correctAnswer: 0,
          explanation: '[[For|Durante]] = [[duration|duración]] [[in|en]] Present Perfect.',
        },
      ],
    },
    topicName: 'Vocabulary',
  },
  {
    id: 'a2-u18-l2-v6',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'For Since',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_MC,
      questions: [
        {
          question: '[[What|Qué]] [[word|palabra]] [[means|significa]] "desde" [[in|en]] "[[desde 2019|since 2019]]"?',
          options: ['[[for|durante]]', '[[since|desde]]', '[[from|desde]]'],
          correctAnswer: 1,
          explanation: '[[Since|Desde]] = [[starting point|punto de inicio]] [[in|en]] Present Perfect.',
        },
      ],
    },
    topicName: 'Vocabulary',
  },
  {
    id: 'a2-u18-l2-v7',
    type: 'matching',
    level: 'A2',
    topic: 'For Since',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_MATCH,
      pairs: [
        { id: 'p1', left: '[[For|Durante]]', right: 'Durante' },
        { id: 'p2', left: '[[Since|Desde]]', right: 'Desde' },
        { id: 'p3', left: '[[Duration|Duración]]', right: 'Duración' },
        { id: 'p4', left: '[[Starting point|Punto de inicio]]', right: 'Punto de inicio' },
      ],
    },
    topicName: 'Vocabulary',
  },
  {
    id: 'a2-u18-l2-v8',
    type: 'matching',
    level: 'A2',
    topic: 'For Since',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_MATCH,
      pairs: [
        { id: 'p1', left: '[[For two years|Durante dos años]]', right: 'Durante dos años' },
        { id: 'p2', left: '[[Since March|Desde marzo]]', right: 'Desde marzo' },
        { id: 'p3', left: '[[For a long time|Durante mucho tiempo]]', right: 'Durante mucho tiempo' },
        { id: 'p4', left: '[[Since last week|Desde la semana pasada]]', right: 'Desde la semana pasada' },
      ],
    },
    topicName: 'Vocabulary',
  },
  {
    id: 'a2-u18-l2-v9',
    type: 'fill-blank',
    level: 'A2',
    topic: 'For Since',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_FILL,
      questions: [
        {
          question: '[[I|Yo]] [[have|he]] [[lived|vivido]] [[here|aquí]] ____ [[five years|cinco años]].',
          options: ['[[for|durante]]', '[[since|desde]]', '[[during|durante]]'],
          correctAnswer: 'for',
          explanation: '[[For|Durante]] + [[duration|duración]] ([[five years|cinco años]]).',
        },
      ],
    },
    topicName: 'Vocabulary',
  },
  {
    id: 'a2-u18-l2-v10',
    type: 'fill-blank',
    level: 'A2',
    topic: 'For Since',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_FILL,
      questions: [
        {
          question: '[[She|Ella]] [[has|ha]] [[worked|trabajado]] ____ [[three months|tres meses]].',
          options: ['[[for|durante]]', '[[since|desde]]', '[[during|durante]]'],
          correctAnswer: 'for',
          explanation: '[[For|Durante]] + [[duration|duración]] ([[three months|tres meses]]).',
        },
      ],
    },
    topicName: 'Vocabulary',
  },
  {
    id: 'a2-u18-l2-v11',
    type: 'fill-blank',
    level: 'A2',
    topic: 'For Since',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_FILL,
      questions: [
        {
          question: '[[We|Nosotros]] [[have|hemos]] [[known|conocido]] [[each other|el uno al otro]] ____ [[2020|2020]].',
          options: ['[[for|durante]]', '[[since|desde]]', '[[during|durante]]'],
          correctAnswer: 'since',
          explanation: '[[Since|Desde]] + [[starting point|punto de inicio]] ([[2020|2020]]).',
        },
      ],
    },
    topicName: 'Vocabulary',
  },
  {
    id: 'a2-u18-l2-v12',
    type: 'fill-blank',
    level: 'A2',
    topic: 'For Since',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_FILL,
      questions: [
        {
          question: '[[He|Él]] [[has|ha]] [[been|estado]] [[ill|enfermo]] ____ [[last Monday|el lunes pasado]].',
          options: ['[[for|durante]]', '[[since|desde]]', '[[during|durante]]'],
          correctAnswer: 'since',
          explanation: '[[Since|Desde]] + [[starting point|punto de inicio]] ([[last Monday|el lunes pasado]]).',
        },
      ],
    },
    topicName: 'Vocabulary',
  },
  {
    id: 'a2-u18-l2-v13',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'For Since',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_MC,
      questions: [
        {
          question: '[[What|Qué]] [[do|usamos]] [[we|nosotros]] [[use|usar]] [[after|después]] [[for|durante]]?',
          options: ['[[a|un]] [[date|fecha]] [[or|o]] [[point|punto]]', '[[a|una]] [[duration|duración]] [[like|como]] [[two years|dos años]]', '[[a|un]] [[verb|verbo]]'],
          correctAnswer: 1,
          explanation: '[[For|Durante]] + [[duration|duración]]: [[for two years|durante dos años]], [[for a week|durante una semana]].',
        },
      ],
    },
    topicName: 'Vocabulary',
  },
  {
    id: 'a2-u18-l2-v14',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'For Since',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_MC,
      questions: [
        {
          question: '[[What|Qué]] [[do|usamos]] [[we|nosotros]] [[use|usar]] [[after|después]] [[since|desde]]?',
          options: ['[[a|una]] [[duration|duración]] [[like|como]] [[two hours|dos horas]]', '[[a|un]] [[starting point|punto de inicio]] [[like|como]] [[March|marzo]] [[or|o]] [[2020|2020]]', '[[a|un]] [[future|futuro]] [[date|fecha]]'],
          correctAnswer: 1,
          explanation: '[[Since|Desde]] + [[starting point|punto de inicio]]: [[since March|desde marzo]], [[since last year|desde el año pasado]].',
        },
      ],
    },
    topicName: 'Vocabulary',
  },
  {
    id: 'a2-u18-l2-v15',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'For Since',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_MC,
      questions: [
        {
          question: '"[[I|Yo]] [[have|he]] [[lived|vivido]] ____ [[two years|dos años]]" [[is|es]] [[correct|correcta]] [[with|con]]:',
          options: ['[[since|desde]]', '[[for|durante]]', '[[ago|hace]]'],
          correctAnswer: 1,
          explanation: '[[For|Durante]] + [[duration|duración]] ([[two years|dos años]]).',
        },
      ],
    },
    topicName: 'Vocabulary',
  },
];
