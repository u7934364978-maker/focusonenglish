/**
 * Unidad 4 — Lección 2: Vocabulario (Wh-questions: What, Where, When, Who, Why, How)
 * 15 ejercicios
 */

import { Exercise } from '@/lib/exercise-generator';

const LESSON_TITLE = '[[Vocabulary|Vocabulario]]: [[Wh-questions|Preguntas Wh]]';
const INSTRUCTIONS_MC = 'Elige la palabra interrogativa correcta para cada situación.';
const INSTRUCTIONS_MATCH = 'Relaciona cada pregunta Wh con su uso.';
const INSTRUCTIONS_FILL = 'Completa la pregunta con la palabra correcta.';

export const UNIT_4_LESSON_2_VOCABULARY: Exercise[] = [
  {
    id: 'a2-u4-l2-v1',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Wh-questions Past',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_MC,
      questions: [
        {
          question: '[[What|Qué]] [[word|palabra]] [[do|usamos]] [[we|nosotros]] [[use|usar]] [[to|para]] [[ask|preguntar]] [[about|sobre]] [[an|una]] [[action|acción]]?',
          options: ['[[Where|Dónde]]', '[[What|Qué]]', '[[Who|Quién]]'],
          correctAnswer: 1,
          explanation: '[[What|Qué]] = [[action|acción]] [[or|o]] [[thing|cosa]].',
        },
      ],
    },
    topicName: 'Vocabulary',
  },
  {
    id: 'a2-u4-l2-v2',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Wh-questions Past',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_MC,
      questions: [
        {
          question: '[[What|Qué]] [[word|palabra]] [[asks|pregunta]] [[about|sobre]] [[place|lugar]]?',
          options: ['[[What|Qué]]', '[[Where|Dónde]]', '[[When|Cuándo]]'],
          correctAnswer: 1,
          explanation: '[[Where|Dónde]] = [[place|lugar]].',
        },
      ],
    },
    topicName: 'Vocabulary',
  },
  {
    id: 'a2-u4-l2-v3',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Wh-questions Past',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_MC,
      questions: [
        {
          question: '[[What|Qué]] [[word|palabra]] [[asks|pregunta]] [[about|sobre]] [[time|tiempo]]?',
          options: ['[[Where|Dónde]]', '[[When|Cuándo]]', '[[Why|Por qué]]'],
          correctAnswer: 1,
          explanation: '[[When|Cuándo]] = [[time|tiempo]].',
        },
      ],
    },
    topicName: 'Vocabulary',
  },
  {
    id: 'a2-u4-l2-v4',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Wh-questions Past',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_MC,
      questions: [
        {
          question: '[[What|Qué]] [[word|palabra]] [[asks|pregunta]] [[about|sobre]] [[person|persona]]?',
          options: ['[[What|Qué]]', '[[Who|Quién]]', '[[Where|Dónde]]'],
          correctAnswer: 1,
          explanation: '[[Who|Quién]] = [[person|persona]].',
        },
      ],
    },
    topicName: 'Vocabulary',
  },
  {
    id: 'a2-u4-l2-v5',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Wh-questions Past',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_MC,
      questions: [
        {
          question: '[[What|Qué]] [[word|palabra]] [[asks|pregunta]] [[about|sobre]] [[reason|razón]]?',
          options: ['[[When|Cuándo]]', '[[Why|Por qué]]', '[[How|Cómo]]'],
          correctAnswer: 1,
          explanation: '[[Why|Por qué]] = [[reason|razón]].',
        },
      ],
    },
    topicName: 'Vocabulary',
  },
  {
    id: 'a2-u4-l2-v6',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Wh-questions Past',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_MC,
      questions: [
        {
          question: '[[What|Qué]] [[word|palabra]] [[asks|pregunta]] [[about|sobre]] [[manner|manera]] [[or|o]] [[way|forma]]?',
          options: ['[[What|Qué]]', '[[Where|Dónde]]', '[[How|Cómo]]'],
          correctAnswer: 2,
          explanation: '[[How|Cómo]] = [[manner|manera]] [[or|o]] [[way|forma]].',
        },
      ],
    },
    topicName: 'Vocabulary',
  },
  {
    id: 'a2-u4-l2-v7',
    type: 'matching',
    level: 'A2',
    topic: 'Wh-questions Past',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_MATCH,
      pairs: [
        { id: 'p1', left: '[[What|Qué]]', right: 'Acción o cosa' },
        { id: 'p2', left: '[[Where|Dónde]]', right: 'Lugar' },
        { id: 'p3', left: '[[When|Cuándo]]', right: 'Tiempo' },
        { id: 'p4', left: '[[Who|Quién]]', right: 'Persona' },
      ],
    },
    topicName: 'Vocabulary',
  },
  {
    id: 'a2-u4-l2-v8',
    type: 'matching',
    level: 'A2',
    topic: 'Wh-questions Past',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_MATCH,
      pairs: [
        { id: 'p1', left: '[[Why|Por qué]]', right: 'Razón' },
        { id: 'p2', left: '[[How|Cómo]]', right: 'Manera o forma' },
        { id: 'p3', left: '[[What|Qué]]', right: 'Acción' },
        { id: 'p4', left: '[[Where|Dónde]]', right: 'Lugar' },
      ],
    },
    topicName: 'Vocabulary',
  },
  {
    id: 'a2-u4-l2-v9',
    type: 'fill-blank',
    level: 'A2',
    topic: 'Wh-questions Past',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_FILL,
      questions: [
        {
          question: '____ [[did|hizo]] [[you|tú]] [[buy|comprar]] [[at|en]] [[the|la]] [[market|mercado]]?',
          options: ['[[What|Qué]]', '[[Where|Dónde]]', '[[When|Cuándo]]'],
          correctAnswer: '[[What|Qué]]',
          explanation: '[[What|Qué]] [[asks|pregunta]] [[about|sobre]] [[the|la]] [[thing|cosa]] [[bought|comprada]].',
        },
      ],
    },
    topicName: 'Vocabulary',
  },
  {
    id: 'a2-u4-l2-v10',
    type: 'fill-blank',
    level: 'A2',
    topic: 'Wh-questions Past',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_FILL,
      questions: [
        {
          question: '____ [[did|fue]] [[they|ellos]] [[meet|encontrarse]] [[yesterday|ayer]]?',
          options: ['[[What|Qué]]', '[[Where|Dónde]]', '[[Who|Quién]]'],
          correctAnswer: '[[Where|Dónde]]',
          explanation: '[[Where|Dónde]] [[asks|pregunta]] [[about|sobre]] [[place|lugar]].',
        },
      ],
    },
    topicName: 'Vocabulary',
  },
  {
    id: 'a2-u4-l2-v11',
    type: 'fill-blank',
    level: 'A2',
    topic: 'Wh-questions Past',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_FILL,
      questions: [
        {
          question: '____ [[did|vió]] [[she|ella]] [[see|ver]] [[at|en]] [[the|el]] [[concert|concierto]]?',
          options: ['[[What|Qué]]', '[[Where|Dónde]]', '[[Who|Quién]]'],
          correctAnswer: '[[Who|Quién]]',
          explanation: '[[Who|Quién]] [[asks|pregunta]] [[about|sobre]] [[person|persona]].',
        },
      ],
    },
    topicName: 'Vocabulary',
  },
  {
    id: 'a2-u4-l2-v12',
    type: 'fill-blank',
    level: 'A2',
    topic: 'Wh-questions Past',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_FILL,
      questions: [
        {
          question: '____ [[did|por qué]] [[he|él]] [[not|no]] [[come|venir]] [[to|a]] [[the|la]] [[party|fiesta]]?',
          options: ['[[What|Qué]]', '[[Why|Por qué]]', '[[When|Cuándo]]'],
          correctAnswer: '[[Why|Por qué]]',
          explanation: '[[Why|Por qué]] [[asks|pregunta]] [[about|sobre]] [[reason|razón]].',
        },
      ],
    },
    topicName: 'Vocabulary',
  },
  {
    id: 'a2-u4-l2-v13',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Wh-questions Past',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_MC,
      questions: [
        {
          question: '[[What|Qué]] [[is|es]] [[the|la]] [[correct|correcta]] [[question|pregunta]] [[for|para]] "[[I went to Paris|Fui a París]]"?',
          options: ['[[What|Qué]] [[did|hizo]] [[you|tú]] [[go|ir]]?', '[[Where|Dónde]] [[did|fue]] [[you|tú]] [[go|ir]]?', '[[When|Cuándo]] [[did|fue]] [[you|tú]] [[go|ir]]?'],
          correctAnswer: 1,
          explanation: '[[Where|Dónde]] [[asks|pregunta]] [[about|sobre]] [[place|lugar]] ([[Paris|París]]).',
        },
      ],
    },
    topicName: 'Vocabulary',
  },
  {
    id: 'a2-u4-l2-v14',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Wh-questions Past',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_MC,
      questions: [
        {
          question: '[[What|Qué]] [[is|es]] [[the|la]] [[correct|correcta]] [[question|pregunta]] [[for|para]] "[[I saw Maria|Vi a María]]"?',
          options: ['[[What|Qué]] [[did|vió]] [[you|tú]] [[see|ver]]?', '[[Who|Quién]] [[did|vió]] [[you|tú]] [[see|ver]]?', '[[Where|Dónde]] [[did|vió]] [[you|tú]] [[see|ver]]?'],
          correctAnswer: 1,
          explanation: '[[Who|Quién]] [[asks|pregunta]] [[about|sobre]] [[person|persona]] ([[Maria|María]]).',
        },
      ],
    },
    topicName: 'Vocabulary',
  },
  {
    id: 'a2-u4-l2-v15',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Wh-questions Past',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_MC,
      questions: [
        {
          question: '[[What|Qué]] [[question|pregunta]] [[asks|pregunta]] [[about|sobre]] [[how|qué tan]] [[well|bien]] [[something|algo]] [[went|fue]]?',
          options: ['[[What|Qué]] [[did|hizo]] [[you|tú]] [[do|hacer]]?', '[[How|Cómo]] [[did|fue]] [[it|él]] [[go|ir]]?', '[[Where|Dónde]] [[did|fue]] [[you|tú]] [[go|ir]]?'],
          correctAnswer: 1,
          explanation: '[[How|Cómo]] [[did it go|cómo fue]] = [[asks|pregunta]] [[about|sobre]] [[result|resultado]] [[or|o]] [[manner|manera]].',
        },
      ],
    },
    topicName: 'Vocabulary',
  },
];
