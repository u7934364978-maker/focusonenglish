/**
 * Unidad 41 — Lección 1: Gramática (Present Perfect: Life Experiences)
 * 15 ejercicios: I have been to... para experiencias de vida
 */

import { Exercise } from '@/lib/exercise-generator';

const LESSON_TITLE = "[[Present Perfect|Presente Perfecto]]: [[Life Experiences|Experiencias de vida]]";
const INSTRUCTIONS = 'Completa con la forma correcta del Present Perfect o elige la opción correcta.';

export const UNIT_41_LESSON_1_GRAMMAR: Exercise[] = [
  {
    id: 'a2-u41-l1-g1',
    type: 'fill-blank',
    level: 'A2',
    topic: 'Present Perfect: Life Experiences',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS,
      questions: [
        {
          question: '[[I|Yo]] ____ ____ ____ [[to|a]] [[Paris|París]] [[twice|dos veces]].',
          options: ['[[have been|he estado]]', '[[has been|ha estado]]', '[[went|fui]]'],
          correctAnswer: 'have been',
          explanation: "[[I have been to|He estado en]] = [[experience|experiencia]] [[in|en]] [[life|vida]].",
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a2-u41-l1-g2',
    type: 'fill-blank',
    level: 'A2',
    topic: 'Present Perfect: Life Experiences',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS,
      questions: [
        {
          question: '[[She|Ella]] ____ ____ ____ [[to|a]] [[Japan|Japón]] [[three|tres]] [[times|veces]].',
          options: ['[[have been|he estado]]', '[[has been|ha estado]]', '[[was|estuvo]]'],
          correctAnswer: 'has been',
          explanation: "[[She has been to|Ella ha estado en]] = [[third person|tercera persona]].",
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a2-u41-l1-g3',
    type: 'fill-blank',
    level: 'A2',
    topic: 'Present Perfect: Life Experiences',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS,
      questions: [
        {
          question: '[[We|Nosotros]] ____ ____ [[Italian|italiana]] [[food|comida]] [[many|muchas]] [[times|veces]].',
          options: ['[[have tried|hemos probado]]', '[[has tried|ha probado]]', '[[tried|probamos]]'],
          correctAnswer: 'have tried',
          explanation: "[[We have tried|Hemos probado]] = [[plural|plural]] [[subject|sujeto]].",
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a2-u41-l1-g4',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Present Perfect: Life Experiences',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: 'Elige la opción correcta.',
      questions: [
        {
          question: '[[Have|¿]] [[you|tú]] ____ ____ [[to|a]] [[London|Londres]]?',
          options: ['[[ever been|alguna vez estado]]', '[[never been|nunca estado]]', '[[went|fuiste]]'],
          correctAnswer: 0,
          explanation: "[[Have you ever been to|¿Has estado alguna vez en]] = [[question|pregunta]] [[about|sobre]] [[experience|experiencia]].",
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a2-u41-l1-g5',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Present Perfect: Life Experiences',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: 'Elige la opción correcta.',
      questions: [
        {
          question: '[[He|Él]] ____ ____ ____ [[sushi|sushi]] [[before|antes]].',
          options: ['[[has never eaten|nunca ha comido]]', '[[have never eaten|nunca he comido]]', '[[never ate|nunca comió]]'],
          correctAnswer: 0,
          explanation: "[[He has never eaten|Él nunca ha comido]] = [[negative|negativa]] [[experience|experiencia]].",
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a2-u41-l1-g6',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Present Perfect: Life Experiences',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: 'Elige la opción correcta.',
      questions: [
        {
          question: '[[They|Ellos]] ____ ____ [[the|el]] [[Eiffel Tower|Torre Eiffel]].',
          options: ['[[have seen|han visto]]', '[[has seen|ha visto]]', '[[saw|vieron]]'],
          correctAnswer: 0,
          explanation: "[[They have seen|Ellos han visto]] = [[plural|plural]] [[subject|sujeto]].",
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a2-u41-l1-g7',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Present Perfect: Life Experiences',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: 'Elige la opción correcta.',
      questions: [
        {
          question: '[[I|Yo]] ____ ____ ____ [[a|un]] [[concert|concierto]] [[before|antes]].',
          options: ['[[have never been to|nunca he estado en]]', '[[has never been to|nunca ha estado en]]', '[[never went to|nunca fui a]]'],
          correctAnswer: 0,
          explanation: "[[I have never been to|Nunca he estado en]] = [[first person|primera persona]].",
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a2-u41-l1-g8',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Present Perfect: Life Experiences',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: 'Elige la opción correcta.',
      questions: [
        {
          question: '[[My|Mi]] [[sister|hermana]] ____ ____ [[snow|nieve]] [[in|en]] [[her|su]] [[life|vida]].',
          options: ['[[has never seen|nunca ha visto]]', '[[have never seen|nunca he visto]]', '[[never saw|nunca vio]]'],
          correctAnswer: 0,
          explanation: "[[My sister has never seen|Mi hermana nunca ha visto]] = [[third person|tercera persona]].",
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a2-u41-l1-g9',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Present Perfect: Life Experiences',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: 'Elige la opción correcta.',
      questions: [
        {
          question: '[[We|Nosotros]] ____ ____ [[many|muchos]] [[countries|países]] [[together|juntos]].',
          options: ['[[have visited|hemos visitado]]', '[[has visited|ha visitado]]', '[[visited|visitamos]]'],
          correctAnswer: 0,
          explanation: "[[We have visited|Hemos visitado]] = [[plural|plural]].",
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a2-u41-l1-g10',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Present Perfect: Life Experiences',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: 'Elige la opción correcta.',
      questions: [
        {
          question: '[[She|Ella]] ____ ____ ____ [[New York|Nueva York]] [[last|el pasado]] [[year|año]].',
          options: ['[[has been to|ha estado en]]', '[[went to|fue a]]', '[[have been to|he estado en]]'],
          correctAnswer: 0,
          explanation: "[[Has been to|Ha estado en]] = [[experience|experiencia]] [[without|sin]] [[specific|fecha]] [[date|específica]].",
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a2-u41-l1-g11',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Present Perfect: Life Experiences',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: 'Elige la opción correcta.',
      questions: [
        {
          question: '[[Have|¿]] [[you|tú]] ____ [[Chinese|china]] [[food|comida]]?',
          options: ['[[ever tried|alguna vez probado]]', '[[never tried|nunca probado]]', '[[tried|probaste]]'],
          correctAnswer: 0,
          explanation: "[[Have you ever tried|¿Has probado alguna vez]] = [[question|pregunta]].",
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a2-u41-l1-g12',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Present Perfect: Life Experiences',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: 'Elige la opción correcta.',
      questions: [
        {
          question: '[[I|Yo]] ____ ____ [[ten|diez]] [[different|diferentes]] [[countries|países]].',
          options: ['[[have visited|he visitado]]', '[[has visited|ha visitado]]', '[[visited|visité]]'],
          correctAnswer: 0,
          explanation: "[[I have visited|He visitado]] = [[first person|primera persona]].",
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a2-u41-l1-g13',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Present Perfect: Life Experiences',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: 'Elige la opción correcta.',
      questions: [
        {
          question: '[[They|Ellos]] ____ ____ ____ [[to|a]] [[Australia|Australia]] [[yet|aún]].',
          options: ["[[haven't been|no han estado]]", "[[hasn't been|no ha estado]]", "[[didn't go|no fueron]]"],
          correctAnswer: 0,
          explanation: "[[They haven't been to|No han estado en]] = [[negative|negativa]] [[with|con]] [[yet|aún]].",
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a2-u41-l1-g14',
    type: 'fill-blank',
    level: 'A2',
    topic: 'Present Perfect: Life Experiences',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS,
      questions: [
        {
          question: '[[Have|¿]] [[you|tú]] ____ ____ [[to|a]] [[Spain|España]]?',
          options: ['[[ever been|alguna vez estado]]', '[[never been|nunca estado]]', '[[been|estado]]'],
          correctAnswer: 'ever been',
          explanation: "[[Have you ever been to|¿Has estado alguna vez en]] = [[question|pregunta]].",
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a2-u41-l1-g15',
    type: 'fill-blank',
    level: 'A2',
    topic: 'Present Perfect: Life Experiences',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS,
      questions: [
        {
          question: '[[He|Él]] ____ ____ ____ [[to|a]] [[the|el]] [[beach|playa]] [[many|muchas]] [[times|veces]] [[this|este]] [[year|año]].',
          options: ['[[has been|ha estado]]', '[[have been|he estado]]', '[[went|fue]]'],
          correctAnswer: 'has been',
          explanation: "[[He has been to|Él ha estado en]] = [[third person|tercera persona]].",
        },
      ],
    },
    topicName: 'Grammar',
  },
];
