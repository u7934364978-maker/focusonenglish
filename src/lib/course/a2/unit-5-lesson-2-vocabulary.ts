/**
 * Unidad 5 — Lección 2: Vocabulario (Comparativos)
 * 15 ejercicios
 */

import { Exercise } from '@/lib/exercise-generator';

const LESSON_TITLE = '[[Vocabulary|Vocabulario]]: [[Comparatives|Comparativos]]';
const INSTRUCTIONS_MC = 'Elige la forma comparativa correcta.';
const INSTRUCTIONS_MATCH = 'Relaciona cada adjetivo con su forma comparativa.';
const INSTRUCTIONS_FILL = 'Completa la frase con la forma comparativa correcta.';

export const UNIT_5_LESSON_2_VOCABULARY: Exercise[] = [
  {
    id: 'a2-u5-l2-v1',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Comparatives',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_MC,
      questions: [
        {
          question: '[[What|Cuál]] [[is|es]] [[the|el]] [[comparative|comparativo]] [[of|de]] "[[tall|alto]]"?',
          options: ['[[taller|más alto]]', '[[more tall|más alto]]', '[[tallest|el más alto]]'],
          correctAnswer: 0,
          explanation: '[[Tall|Alto]]: [[short adjective|adjetivo corto]] → [[taller|más alto]].',
        },
      ],
    },
    topicName: 'Vocabulary',
  },
  {
    id: 'a2-u5-l2-v2',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Comparatives',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_MC,
      questions: [
        {
          question: '[[What|Cuál]] [[is|es]] [[the|el]] [[comparative|comparativo]] [[of|de]] "[[beautiful|hermoso]]"?',
          options: ['[[beautifuler|más hermoso]]', '[[more beautiful|más hermoso]]', '[[beautifuller|más hermoso]]'],
          correctAnswer: 1,
          explanation: '[[Beautiful|Hermoso]]: [[long adjective|adjetivo largo]] → [[more beautiful|más hermoso]].',
        },
      ],
    },
    topicName: 'Vocabulary',
  },
  {
    id: 'a2-u5-l2-v3',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Comparatives',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_MC,
      questions: [
        {
          question: '[[What|Cuál]] [[word|palabra]] [[completes|complete]] [[the|la]] [[sentence|frase]]? "[[This|Este]] [[box|caja]] [[is|es]] ____ [[than|que]] [[that|esa]]."',
          options: ['[[heavy|pesado]]', '[[heavier|más pesado]]', '[[heaviest|el más pesado]]'],
          correctAnswer: 1,
          explanation: '[[Heavy|Pesado]]: [[consonant|consonante]] + y → [[heavier|más pesado]].',
        },
      ],
    },
    topicName: 'Vocabulary',
  },
  {
    id: 'a2-u5-l2-v4',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Comparatives',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_MC,
      questions: [
        {
          question: '[[What|Cuál]] [[is|es]] [[the|el]] [[comparative|comparativo]] [[of|de]] "[[good|bueno]]"?',
          options: ['[[gooder|más bueno]]', '[[more good|más bueno]]', '[[better|mejor]]'],
          correctAnswer: 2,
          explanation: '[[Good|Bueno]]: [[irregular|irregular]] → [[better|mejor]].',
        },
      ],
    },
    topicName: 'Vocabulary',
  },
  {
    id: 'a2-u5-l2-v5',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Comparatives',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_MC,
      questions: [
        {
          question: '[[What|Cuál]] [[is|es]] [[the|el]] [[comparative|comparativo]] [[of|de]] "[[bad|malo]]"?',
          options: ['[[badder|más malo]]', '[[worse|peor]]', '[[more bad|más malo]]'],
          correctAnswer: 1,
          explanation: '[[Bad|Malo]]: [[irregular|irregular]] → [[worse|peor]].',
        },
      ],
    },
    topicName: 'Vocabulary',
  },
  {
    id: 'a2-u5-l2-v6',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Comparatives',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_MC,
      questions: [
        {
          question: '"[[This|Este]] [[room|habitación]] [[is|es]] ____ [[than|que]] [[that|esa]]" - [[complete|completa]] [[with|con]] [[big|grande]].',
          options: ['[[big|grande]]', '[[bigger|más grande]]', '[[more big|más grande]]'],
          correctAnswer: 1,
          explanation: '[[Big|Grande]]: [[double|doble]] [[consonant|consonante]] + -er → [[bigger|más grande]].',
        },
      ],
    },
    topicName: 'Vocabulary',
  },
  {
    id: 'a2-u5-l2-v7',
    type: 'matching',
    level: 'A2',
    topic: 'Comparatives',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_MATCH,
      pairs: [
        { id: 'p1', left: '[[tall|alto]]', right: '[[taller|más alto]]' },
        { id: 'p2', left: '[[big|grande]]', right: '[[bigger|más grande]]' },
        { id: 'p3', left: '[[good|bueno]]', right: '[[better|mejor]]' },
        { id: 'p4', left: '[[bad|malo]]', right: '[[worse|peor]]' },
      ],
    },
    topicName: 'Vocabulary',
  },
  {
    id: 'a2-u5-l2-v8',
    type: 'matching',
    level: 'A2',
    topic: 'Comparatives',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_MATCH,
      pairs: [
        { id: 'p1', left: '[[interesting|interesante]]', right: '[[more interesting|más interesante]]' },
        { id: 'p2', left: '[[expensive|caro]]', right: '[[more expensive|más caro]]' },
        { id: 'p3', left: '[[hot|caliente]]', right: '[[hotter|más caliente]]' },
        { id: 'p4', left: '[[fast|rápido]]', right: '[[faster|más rápido]]' },
      ],
    },
    topicName: 'Vocabulary',
  },
  {
    id: 'a2-u5-l2-v9',
    type: 'fill-blank',
    level: 'A2',
    topic: 'Comparatives',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_FILL,
      questions: [
        {
          question: '[[My|Mi]] [[phone|teléfono]] [[is|es]] ____ [[than|que]] [[yours|el tuyo]]. ([[new|nuevo]])',
          options: ['[[new|nuevo]]', '[[newer|más nuevo]]', '[[more new|más nuevo]]'],
          correctAnswer: '[[newer|más nuevo]]',
          explanation: '[[New|Nuevo]]: [[add|añade]] -er → [[newer|más nuevo]].',
        },
      ],
    },
    topicName: 'Vocabulary',
  },
  {
    id: 'a2-u5-l2-v10',
    type: 'fill-blank',
    level: 'A2',
    topic: 'Comparatives',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_FILL,
      questions: [
        {
          question: '[[This|Este]] [[exercise|ejercicio]] [[is|es]] ____ [[than|que]] [[the|el]] [[last|último]]. ([[difficult|difícil]])',
          options: ['[[difficult|difícil]]', '[[more difficult|más difícil]]', '[[difficulter|más difícil]]'],
          correctAnswer: '[[more difficult|más difícil]]',
          explanation: '[[Difficult|Difícil]]: [[long adjective|adjetivo largo]] → [[more difficult|más difícil]].',
        },
      ],
    },
    topicName: 'Vocabulary',
  },
  {
    id: 'a2-u5-l2-v11',
    type: 'fill-blank',
    level: 'A2',
    topic: 'Comparatives',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_FILL,
      questions: [
        {
          question: '[[She|Ella]] [[is|es]] ____ [[than|que]] [[her|su]] [[sister|hermana]]. ([[young|joven]])',
          options: ['[[young|joven]]', '[[younger|más joven]]', '[[more young|más joven]]'],
          correctAnswer: '[[younger|más joven]]',
          explanation: '[[Young|Joven]]: [[add|añade]] -er → [[younger|más joven]].',
        },
      ],
    },
    topicName: 'Vocabulary',
  },
  {
    id: 'a2-u5-l2-v12',
    type: 'fill-blank',
    level: 'A2',
    topic: 'Comparatives',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_FILL,
      questions: [
        {
          question: '[[Today|Hoy]] [[is|es]] ____ [[than|que]] [[yesterday|ayer]]. ([[cold|frío]])',
          options: ['[[cold|frío]]', '[[colder|más frío]]', '[[more cold|más frío]]'],
          correctAnswer: '[[colder|más frío]]',
          explanation: '[[Cold|Frío]]: [[add|añade]] -er → [[colder|más frío]].',
        },
      ],
    },
    topicName: 'Vocabulary',
  },
  {
    id: 'a2-u5-l2-v13',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Comparatives',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_MC,
      questions: [
        {
          question: '[[When|Cuándo]] [[do|usamos]] [[we|nosotros]] [[use|usar]] "[[more|más]]" + [[adjective|adjetivo]]?',
          options: ['[[For|Para]] [[short|adjetivos cortos]] [[adjectives|adjetivos]] (1-2 [[syllables|sílabas]])', '[[For|Para]] [[long|adjetivos largos]] [[adjectives|adjetivos]] (3+ [[syllables|sílabas]])', '[[For|Para]] [[all|todos]] [[adjectives|adjetivos]]'],
          correctAnswer: 1,
          explanation: '[[Long adjectives|Adjetivos largos]]: [[use|usa]] [[more|más]] + [[adjective|adjetivo]].',
        },
      ],
    },
    topicName: 'Vocabulary',
  },
  {
    id: 'a2-u5-l2-v14',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Comparatives',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_MC,
      questions: [
        {
          question: '[[What|Cuál]] [[is|es]] [[the|el]] [[comparative|comparativo]] [[of|de]] "[[far|lejos]]"?',
          options: ['[[farer|más lejos]]', '[[more far|más lejos]]', '[[further|más lejos]] / [[farther|más lejos]]'],
          correctAnswer: 2,
          explanation: '[[Far|Lejos]]: [[irregular|irregular]] → [[further|más lejos]] / [[farther|más lejos]].',
        },
      ],
    },
    topicName: 'Vocabulary',
  },
  {
    id: 'a2-u5-l2-v15',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Comparatives',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_MC,
      questions: [
        {
          question: '[[What|Cuál]] [[word|palabra]] [[connects|conecta]] [[the|los]] [[two|dos]] [[things|cosas]] [[in|en]] [[a|una]] [[comparative|comparativa]] [[sentence|frase]]?',
          options: ['[[that|ese]]', '[[than|que]]', '[[then|entonces]]'],
          correctAnswer: 1,
          explanation: '[[Than|Que]] [[connects|conecta]] [[the|los]] [[two|dos]] [[things|cosas]] [[we|que]] [[compare|comparamos]].',
        },
      ],
    },
    topicName: 'Vocabulary',
  },
];
