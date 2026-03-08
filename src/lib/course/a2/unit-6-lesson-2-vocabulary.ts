/**
 * Unidad 6 — Lección 2: Vocabulario (Superlativos)
 * 15 ejercicios
 */

import { Exercise } from '@/lib/exercise-generator';

const LESSON_TITLE = '[[Vocabulary|Vocabulario]]: [[Superlatives|Superlativos]]';
const INSTRUCTIONS_MC = 'Elige la palabra correcta para cada definición o frase.';
const INSTRUCTIONS_MATCH = 'Relaciona cada adjetivo con su forma superlativa.';
const INSTRUCTIONS_FILL = 'Completa la frase con la forma superlativa correcta.';

export const UNIT_6_LESSON_2_VOCABULARY: Exercise[] = [
  {
    id: 'a2-u6-l2-v1',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Superlatives',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_MC,
      questions: [
        {
          question: '[[What|Cuál]] [[is|es]] [[the|el]] [[superlative|superlativo]] [[of|de]] "[[big|grande]]"?',
          options: ['[[biggest|más grande]]', '[[bigest|más grande]]', '[[the most big|el más grande]]'],
          correctAnswer: 0,
          explanation: '[[Big|Grande]] → [[the biggest|el más grande]]. [[Double|Doble]] [[consonant|consonante]] + -est.',
        },
      ],
    },
    topicName: 'Vocabulary',
  },
  {
    id: 'a2-u6-l2-v2',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Superlatives',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_MC,
      questions: [
        {
          question: '[[What|Cuál]] [[is|es]] [[the|el]] [[superlative|superlativo]] [[of|de]] "[[expensive|caro]]"?',
          options: ['[[expensivest|más caro]]', '[[the most expensive|el más caro]]', '[[expensiver|más caro]]'],
          correctAnswer: 1,
          explanation: '[[Long adjectives|Adjetivos largos]]: [[the most|el más]] + [[adjective|adjetivo]].',
        },
      ],
    },
    topicName: 'Vocabulary',
  },
  {
    id: 'a2-u6-l2-v3',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Superlatives',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_MC,
      questions: [
        {
          question: '[[What|Cuál]] [[is|es]] [[the|el]] [[superlative|superlativo]] [[of|de]] "[[good|bueno]]"?',
          options: ['[[goodest|el mejor]]', '[[the best|el mejor]]', '[[the most good|el más bueno]]'],
          correctAnswer: 1,
          explanation: '[[Good|Bueno]] [[is|es]] [[irregular|irregular]]: [[the best|el mejor]].',
        },
      ],
    },
    topicName: 'Vocabulary',
  },
  {
    id: 'a2-u6-l2-v4',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Superlatives',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_MC,
      questions: [
        {
          question: '[[What|Cuál]] [[is|es]] [[the|el]] [[superlative|superlativo]] [[of|de]] "[[bad|malo]]"?',
          options: ['[[baddest|el peor]]', '[[the worst|el peor]]', '[[the most bad|el más malo]]'],
          correctAnswer: 1,
          explanation: '[[Bad|Malo]] [[is|es]] [[irregular|irregular]]: [[the worst|el peor]].',
        },
      ],
    },
    topicName: 'Vocabulary',
  },
  {
    id: 'a2-u6-l2-v5',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Superlatives',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_MC,
      questions: [
        {
          question: '[[What|Qué]] [[word|palabra]] [[completes|complete]] [[the|la]] [[sentence|frase]]? "[[This|Este]] [[is|es]] ____ [[building|edificio]] [[in|en]] [[the|la]] [[city|ciudad]]." ([[tall|alto]])',
          options: ['[[tall|alto]]', '[[the tallest|el más alto]]', '[[tallest|más alto]]'],
          correctAnswer: 1,
          explanation: '[[Tall|Alto]] → [[the tallest|el más alto]]. [[Use|Usa]] [[the|el]] [[before|antes]] [[superlative|superlativo]].',
        },
      ],
    },
    topicName: 'Vocabulary',
  },
  {
    id: 'a2-u6-l2-v6',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Superlatives',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_MC,
      questions: [
        {
          question: '"[[The|El]] ____ [[day|día]] [[of|de]] [[the|el]] [[year|año]]" [[means|significa]] "[[el día más caliente del año|el día más caliente del año]]".',
          options: ['[[hot|caliente]]', '[[hottest|más caliente]]', '[[the hottest|el más caliente]]'],
          correctAnswer: 2,
          explanation: '[[Hot|Caliente]] → [[the hottest|el más caliente]]. [[Use|Usa]] [[of|de]] [[for|para]] [[group|grupo]].',
        },
      ],
    },
    topicName: 'Vocabulary',
  },
  {
    id: 'a2-u6-l2-v7',
    type: 'matching',
    level: 'A2',
    topic: 'Superlatives',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_MATCH,
      pairs: [
        { id: 'p1', left: '[[tall|alto]]', right: '[[the tallest|el más alto]]' },
        { id: 'p2', left: '[[big|grande]]', right: '[[the biggest|el más grande]]' },
        { id: 'p3', left: '[[cold|frío]]', right: '[[the coldest|el más frío]]' },
        { id: 'p4', left: '[[hot|caliente]]', right: '[[the hottest|el más caliente]]' },
      ],
    },
    topicName: 'Vocabulary',
  },
  {
    id: 'a2-u6-l2-v8',
    type: 'matching',
    level: 'A2',
    topic: 'Superlatives',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_MATCH,
      pairs: [
        { id: 'p1', left: '[[interesting|interesante]]', right: '[[the most interesting|el más interesante]]' },
        { id: 'p2', left: '[[expensive|caro]]', right: '[[the most expensive|el más caro]]' },
        { id: 'p3', left: '[[good|bueno]]', right: '[[the best|el mejor]]' },
        { id: 'p4', left: '[[bad|malo]]', right: '[[the worst|el peor]]' },
      ],
    },
    topicName: 'Vocabulary',
  },
  {
    id: 'a2-u6-l2-v9',
    type: 'fill-blank',
    level: 'A2',
    topic: 'Superlatives',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_FILL,
      questions: [
        {
          question: '[[She|Ella]] [[is|es]] ____ [[student|estudiante]] [[in|en]] [[the|la]] [[class|clase]]. ([[intelligent|inteligente]])',
          options: ['[[intelligent|inteligente]]', '[[the most intelligent|la más inteligente]]', '[[intelligenter|más inteligente]]'],
          correctAnswer: '[[the most intelligent|la más inteligente]]',
          explanation: '[[Long adjectives|Adjetivos largos]]: [[the most|el más]] + [[adjective|adjetivo]].',
        },
      ],
    },
    topicName: 'Vocabulary',
  },
  {
    id: 'a2-u6-l2-v10',
    type: 'fill-blank',
    level: 'A2',
    topic: 'Superlatives',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_FILL,
      questions: [
        {
          question: '[[This|Este]] [[is|es]] ____ [[room|habitación]] [[in|en]] [[the|el]] [[hotel|hotel]]. ([[small|pequeño]])',
          options: ['[[small|pequeño]]', '[[the smallest|la más pequeña]]', '[[smaller|más pequeño]]'],
          correctAnswer: '[[the smallest|la más pequeña]]',
          explanation: '[[Small|Pequeño]] → [[the smallest|el más pequeño]]. [[Short adjectives|Adjetivos cortos]]: [[the|el]] + -est.',
        },
      ],
    },
    topicName: 'Vocabulary',
  },
  {
    id: 'a2-u6-l2-v11',
    type: 'fill-blank',
    level: 'A2',
    topic: 'Superlatives',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_FILL,
      questions: [
        {
          question: '[[He|Él]] [[is|es]] ____ [[runner|corredor]] [[of|de]] [[all|todos]] [[the|los]] [[students|estudiantes]]. ([[fast|rápido]])',
          options: ['[[fast|rápido]]', '[[the fastest|el más rápido]]', '[[fastest|más rápido]]'],
          correctAnswer: '[[the fastest|el más rápido]]',
          explanation: '[[Fast|Rápido]] → [[the fastest|el más rápido]]. [[Use|Usa]] [[of|de]] [[for|para]] [[group|grupo]].',
        },
      ],
    },
    topicName: 'Vocabulary',
  },
  {
    id: 'a2-u6-l2-v12',
    type: 'fill-blank',
    level: 'A2',
    topic: 'Superlatives',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_FILL,
      questions: [
        {
          question: '[[This|Este]] [[is|es]] ____ [[film|película]] [[I|yo]] [[have ever|he jamás]] [[seen|visto]]. ([[beautiful|hermoso]])',
          options: ['[[beautiful|hermoso]]', '[[the most beautiful|la más hermosa]]', '[[beautifulest|más hermosa]]'],
          correctAnswer: '[[the most beautiful|la más hermosa]]',
          explanation: '[[Long adjectives|Adjetivos largos]]: [[the most|el más]] + [[adjective|adjetivo]].',
        },
      ],
    },
    topicName: 'Vocabulary',
  },
  {
    id: 'a2-u6-l2-v13',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Superlatives',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_MC,
      questions: [
        {
          question: '[[What|Qué]] [[is|es]] [[the|la]] [[correct|correcta]] [[form|forma]]? "[[This|Este]] ____ [[book|libro]] [[in|en]] [[the|la]] [[library|biblioteca]]." ([[old|viejo]])',
          options: ['[[is the old|es el viejo]]', '[[is the oldest|es el más viejo]]', '[[is oldest|es más viejo]]'],
          correctAnswer: 1,
          explanation: '[[Old|Viejo]] → [[the oldest|el más viejo]]. [[Short adjectives|Adjetivos cortos]]: [[the|el]] + -est.',
        },
      ],
    },
    topicName: 'Vocabulary',
  },
  {
    id: 'a2-u6-l2-v14',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Superlatives',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_MC,
      questions: [
        {
          question: '[[What|Qué]] [[word|palabra]] [[completes|complete]] [[the|la]] [[sentence|frase]]? "[[She|Ella]] [[is|es]] ____ [[of|de]] [[all|todas]] [[my|mis]] [[sisters|hermanas]]." ([[young|joven]])',
          options: ['[[young|joven]]', '[[the youngest|la más joven]]', '[[younger|más joven]]'],
          correctAnswer: 1,
          explanation: '[[Young|Joven]] → [[the youngest|la más joven]]. [[Use|Usa]] [[of|de]] [[for|para]] [[group|grupo]].',
        },
      ],
    },
    topicName: 'Vocabulary',
  },
  {
    id: 'a2-u6-l2-v15',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Superlatives',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_MC,
      questions: [
        {
          question: '[[What|Qué]] [[word|palabra]] [[completes|complete]] [[the|la]] [[sentence|frase]]? "[[It|Es]] ____ [[place|lugar]] [[in|en]] [[the|el]] [[world|mundo]]." ([[amazing|asombroso]])',
          options: ['[[amazing|asombroso]]', '[[the most amazing|el más asombroso]]', '[[amazingest|más asombroso]]'],
          correctAnswer: 1,
          explanation: '[[Long adjectives|Adjetivos largos]]: [[the most|el más]] + [[adjective|adjetivo]].',
        },
      ],
    },
    topicName: 'Vocabulary',
  },
];
