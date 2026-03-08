/**
 * Unidad 4 — Lección 1: Gramática (Wh-questions en Past Simple)
 * 15 ejercicios: What/Where/When/Who/Why/How did...?
 */

import { Exercise } from '@/lib/exercise-generator';

const LESSON_TITLE = '[[Wh-questions|Preguntas Wh]] [[in|en]] [[Past Simple|Pasado Simple]]';
const INSTRUCTIONS_FILL = 'Elige la palabra interrogativa correcta (What/Where/When/Who/Why/How) para cada pregunta.';
const INSTRUCTIONS_MULTIPLE = 'Elige la pregunta o la forma correcta.';
const INSTRUCTIONS_ORDER = 'Ordena las palabras para formar una pregunta correcta.';
const INSTRUCTIONS_TF = 'Indica si la afirmación es verdadera o falsa.';

export const UNIT_4_LESSON_1_GRAMMAR: Exercise[] = [
  {
    id: 'a2-u4-l1-g1',
    type: 'fill-blank',
    level: 'A2',
    topic: 'Wh-questions Past',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_FILL,
      questions: [
        {
          question: '____ [[did|hizo]] [[you|tú]] [[do|hacer]] [[yesterday|ayer]]?',
          options: ['What', 'Where', 'Who'],
          correctAnswer: 'What',
          explanation: '[[What|Qué]] = [[asks|pregunta]] [[about|sobre]] [[action|acción]] [[or|o]] [[thing|cosa]].',
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a2-u4-l1-g2',
    type: 'fill-blank',
    level: 'A2',
    topic: 'Wh-questions Past',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_FILL,
      questions: [
        {
          question: '____ [[did|fue]] [[you|tú]] [[go|ir]] [[last weekend|el fin de semana pasado]]?',
          options: ['What', 'Where', 'When'],
          correctAnswer: 'Where',
          explanation: '[[Where|Dónde]] = [[asks|pregunta]] [[about|sobre]] [[place|lugar]].',
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a2-u4-l1-g3',
    type: 'fill-blank',
    level: 'A2',
    topic: 'Wh-questions Past',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_FILL,
      questions: [
        {
          question: '____ [[did|fue]] [[she|ella]] [[leave|irse]]?',
          options: ['What', 'Where', 'When'],
          correctAnswer: 'When',
          explanation: '[[When|Cuándo]] = [[asks|pregunta]] [[about|sobre]] [[time|tiempo]].',
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a2-u4-l1-g4',
    type: 'fill-blank',
    level: 'A2',
    topic: 'Wh-questions Past',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_FILL,
      questions: [
        {
          question: '____ [[did|vió]] [[you|tú]] [[see|ver]] [[at|en]] [[the|el]] [[party|fiesta]]?',
          options: ['What', 'Where', 'Who'],
          correctAnswer: 'Who',
          explanation: '[[Who|Quién]] = [[asks|pregunta]] [[about|sobre]] [[person|persona]].',
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a2-u4-l1-g5',
    type: 'fill-blank',
    level: 'A2',
    topic: 'Wh-questions Past',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_FILL,
      questions: [
        {
          question: '____ [[did|por qué]] [[he|él]] [[leave|irse]] [[early|temprano]]?',
          options: ['What', 'Why', 'When'],
          correctAnswer: 'Why',
          explanation: '[[Why|Por qué]] = [[asks|pregunta]] [[about|sobre]] [[reason|razón]].',
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a2-u4-l1-g6',
    type: 'fill-blank',
    level: 'A2',
    topic: 'Wh-questions Past',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_FILL,
      questions: [
        {
          question: '____ [[did|qué tan]] [[the|el]] [[exam|examen]] [[go|ir]]?',
          options: ['What', 'How', 'Where'],
          correctAnswer: 'How',
          explanation: '[[How|Cómo]] = [[asks|pregunta]] [[about|sobre]] [[manner|manera]] [[or|o]] [[degree|grado]].',
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a2-u4-l1-g7',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Wh-questions Past',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_MULTIPLE,
      questions: [
        {
          question: '[[Which|Cuál]] [[question|pregunta]] [[is|es]] [[correct|correcta]] [[to|para]] [[ask|preguntar]] [[about|sobre]] [[a|un]] [[place|lugar]]?',
          options: [
            '[[What|Qué]] [[did|hizo]] [[you|tú]] [[do|hacer]]?',
            '[[Where|Dónde]] [[did|fue]] [[you|tú]] [[go|ir]]?',
            '[[Who|Quién]] [[did|vió]] [[you|tú]] [[see|ver]]?',
          ],
          correctAnswer: 1,
          explanation: '[[Where|Dónde]] [[asks|pregunta]] [[about|sobre]] [[place|lugar]].',
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a2-u4-l1-g8',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Wh-questions Past',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_MULTIPLE,
      questions: [
        {
          question: '[[Complete|Completa]]: "____ [[did|compraste]] [[you|tú]] [[buy|comprar]] [[at|en]] [[the|la]] [[shop|tienda]]?"',
          options: ['[[Where|Dónde]]', '[[What|Qué]]', '[[When|Cuándo]]'],
          correctAnswer: 1,
          explanation: '[[What|Qué]] [[asks|pregunta]] [[about|sobre]] [[the|la]] [[thing|cosa]] [[bought|comprada]].',
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a2-u4-l1-g9',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Wh-questions Past',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_MULTIPLE,
      questions: [
        {
          question: '[[Which|Cuál]] [[word|palabra]] [[asks|pregunta]] [[about|sobre]] [[reason|razón]]?',
          options: ['[[What|Qué]]', '[[Why|Por qué]]', '[[When|Cuándo]]'],
          correctAnswer: 1,
          explanation: '[[Why|Por qué]] = [[reason|razón]].',
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a2-u4-l1-g10',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Wh-questions Past',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_MULTIPLE,
      questions: [
        {
          question: '[[Complete|Completa]]: "____ [[did|cuándo]] [[they|ellos]] [[arrive|llegar]]?"',
          options: ['[[What|Qué]]', '[[Where|Dónde]]', '[[When|Cuándo]]'],
          correctAnswer: 2,
          explanation: '[[When|Cuándo]] [[asks|pregunta]] [[about|sobre]] [[time|tiempo]].',
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a2-u4-l1-g11',
    type: 'sentence-building',
    level: 'A2',
    topic: 'Wh-questions Past',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_ORDER,
      correctSentence: '[[What|Qué]] [[did|hizo]] [[you|tú]] [[do|hacer]] [[yesterday|ayer]]?',
      words: ['[[What|Qué]]', '[[did|hizo]]', '[[you|tú]]', '[[do|hacer]]', '[[yesterday|ayer]]?'],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a2-u4-l1-g12',
    type: 'sentence-building',
    level: 'A2',
    topic: 'Wh-questions Past',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_ORDER,
      correctSentence: '[[Where|Dónde]] [[did|fue]] [[she|ella]] [[go|ir]] [[last summer|el verano pasado]]?',
      words: ['[[Where|Dónde]]', '[[did|fue]]', '[[she|ella]]', '[[go|ir]]', '[[last summer|el verano pasado]]?'],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a2-u4-l1-g13',
    type: 'sentence-building',
    level: 'A2',
    topic: 'Wh-questions Past',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_ORDER,
      correctSentence: '[[Why|Por qué]] [[did|hizo]] [[he|él]] [[leave|irse]] [[early|temprano]]?',
      words: ['[[Why|Por qué]]', '[[did|hizo]]', '[[he|él]]', '[[leave|irse]]', '[[early|temprano]]?'],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a2-u4-l1-g14',
    type: 'true-false',
    level: 'A2',
    topic: 'Wh-questions Past',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_TF,
      questions: [
        {
          question: '"[[What|Qué]] [[did|hizo]] [[you|tú]] [[do|hacer]]?" [[uses|usa]] [[the|el]] [[correct|correcto]] [[structure|estructura]] [[for|para]] [[Wh-questions|preguntas Wh]] [[in|en]] [[Past Simple|Pasado Simple]].',
          options: ['[[True|Verdadero]]', '[[False|Falso]]'],
          correctAnswer: 'True',
          explanation: '[[True|Verdadero]]. [[Structure|Estructura]]: [[Wh-word|palabra Wh]] + [[did|hizo]] + [[subject|sujeto]] + [[base verb|verbo base]].',
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a2-u4-l1-g15',
    type: 'true-false',
    level: 'A2',
    topic: 'Wh-questions Past',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_TF,
      questions: [
        {
          question: '"[[Where|Dónde]] [[you|tú]] [[did|hizo]] [[go|ir]]?" [[is|es]] [[correct|correcto]] [[in|en]] [[English|inglés]].',
          options: ['[[True|Verdadero]]', '[[False|Falso]]'],
          correctAnswer: 'False',
          explanation: '[[False|Falso]]. [[Correct|Correcto]]: "[[Where did you go|Dónde fuiste]]?" [[Did|Did]] [[comes|va]] [[after|después]] [[Wh-word|palabra Wh]].',
        },
      ],
    },
    topicName: 'Grammar',
  },
];
