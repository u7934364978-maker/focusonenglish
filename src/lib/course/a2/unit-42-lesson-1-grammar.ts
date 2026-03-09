/**
 * Unidad 42 — Lección 1: Gramática (Present Perfect: Ever & Never)
 * 15 ejercicios: preguntas sobre experiencias con ever y never
 */

import { Exercise } from '@/lib/exercise-generator';

const LESSON_TITLE = "[[Present Perfect|Presente Perfecto]]: [[Ever & Never|Ever y Never]]";
const INSTRUCTIONS = 'Completa con ever, never o la forma correcta del Present Perfect.';

export const UNIT_42_LESSON_1_GRAMMAR: Exercise[] = [
  {
    id: 'a2-u42-l1-g1',
    type: 'fill-blank',
    level: 'A2',
    topic: 'Present Perfect: Ever & Never',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS,
      questions: [
        {
          question: '[[Have|¿]] [[you|tú]] ____ [[been|estado]] [[to|en]] [[New York|Nueva York]]?',
          options: ['[[ever|alguna vez]]', '[[never|nunca]]', '[[already|ya]]'],
          correctAnswer: 'ever',
          explanation: "[[Have you ever been to|¿Has estado alguna vez en]] = [[question|pregunta]] [[about|sobre]] [[experience|experiencia]].",
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a2-u42-l1-g2',
    type: 'fill-blank',
    level: 'A2',
    topic: 'Present Perfect: Ever & Never',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS,
      questions: [
        {
          question: '[[I|Yo]] ____ ____ ____ [[sushi|sushi]] [[in|en]] [[my|mi]] [[life|vida]].',
          options: ['[[have never eaten|nunca he comido]]', '[[has never eaten|nunca ha comido]]', '[[never ate|nunca comí]]'],
          correctAnswer: 'have never eaten',
          explanation: "[[I have never eaten|Nunca he comido]] = [[negative|negativa]] [[experience|experiencia]].",
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a2-u42-l1-g3',
    type: 'fill-blank',
    level: 'A2',
    topic: 'Present Perfect: Ever & Never',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS,
      questions: [
        {
          question: '[[Has|¿]] [[she|ella]] ____ [[tried|probado]] [[Indian|india]] [[food|comida]]?',
          options: ['[[ever|alguna vez]]', '[[never|nunca]]', '[[yet|aún]]'],
          correctAnswer: 'ever',
          explanation: "[[Has she ever tried|¿Ha probado alguna vez]] = [[question|pregunta]].",
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a2-u42-l1-g4',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Present Perfect: Ever & Never',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: 'Elige la opción correcta.',
      questions: [
        {
          question: '[[Have|¿]] [[you|tú]] ____ [[seen|visto]] [[the|el]] [[Northern Lights|aurora boreal]]?',
          options: ['[[ever|alguna vez]]', '[[never|nunca]]', '[[already|ya]]'],
          correctAnswer: 0,
          explanation: "[[Ever|Ever]] [[in|en]] [[questions|preguntas]] [[means|significa]] [[at any time|en algún momento]].",
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a2-u42-l1-g5',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Present Perfect: Ever & Never',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: 'Elige la opción correcta.',
      questions: [
        {
          question: '[[He|Él]] ____ ____ ____ [[to|en]] [[a|un]] [[football|fútbol]] [[match|partido]].',
          options: ['[[has never been|nunca ha estado]]', '[[have never been|nunca he estado]]', '[[never went|nunca fue]]'],
          correctAnswer: 0,
          explanation: "[[He has never been to|Nunca ha estado en]] = [[third person|tercera persona]].",
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a2-u42-l1-g6',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Present Perfect: Ever & Never',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: 'Elige la opción correcta.',
      questions: [
        {
          question: '[[Have|¿]] [[they|ellos]] ____ [[met|conocido]] [[a|un]] [[famous|famoso]] [[person|persona]]?',
          options: ['[[ever|alguna vez]]', '[[never|nunca]]', '[[yet|aún]]'],
          correctAnswer: 0,
          explanation: "[[Ever|Ever]] [[in|en]] [[yes/no|sí/no]] [[questions|preguntas]].",
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a2-u42-l1-g7',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Present Perfect: Ever & Never',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: 'Elige la opción correcta.',
      questions: [
        {
          question: '[[We|Nosotros]] ____ ____ ____ [[that|esa]] [[film|película]].',
          options: ["[[have never seen|nunca hemos visto]]", "[[has never seen|nunca ha visto]]", "[[never saw|nunca vimos]]"],
          correctAnswer: 0,
          explanation: "[[We have never seen|Nunca hemos visto]] = [[plural|plural]].",
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a2-u42-l1-g8',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Present Perfect: Ever & Never',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: 'Elige la opción correcta.',
      questions: [
        {
          question: '[[Has|¿]] [[your|tu]] [[brother|hermano]] ____ [[ridden|montado]] [[a|una]] [[horse|caballo]]?',
          options: ['[[ever|alguna vez]]', '[[never|nunca]]', '[[already|ya]]'],
          correctAnswer: 0,
          explanation: "[[Has he ever ridden|¿Ha montado alguna vez]] = [[question|pregunta]].",
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a2-u42-l1-g9',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Present Perfect: Ever & Never',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: 'Elige la opción correcta.',
      questions: [
        {
          question: '[[I|Yo]] ____ ____ ____ [[a|un]] [[hot|caliente]] [[air|aire]] [[balloon|globo]].',
          options: ['[[have never flown in|nunca he volado en]]', '[[has never flown in|nunca ha volado en]]', '[[never flew in|nunca volé en]]'],
          correctAnswer: 0,
          explanation: "[[I have never flown in|Nunca he volado en]] = [[first person|primera persona]].",
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a2-u42-l1-g10',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Present Perfect: Ever & Never',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: 'Elige la opción correcta.',
      questions: [
        {
          question: '[[Have|¿]] [[you|tú]] ____ [[heard|oído]] [[of|de]] [[that|esa]] [[band|banda]]?',
          options: ['[[ever|alguna vez]]', '[[never|nunca]]', '[[yet|aún]]'],
          correctAnswer: 0,
          explanation: "[[Have you ever heard of|¿Has oído alguna vez hablar de]] = [[question|pregunta]].",
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a2-u42-l1-g11',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Present Perfect: Ever & Never',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: 'Elige la opción correcta.',
      questions: [
        {
          question: '[[She|Ella]] ____ ____ ____ [[alone|sola]] [[abroad|en el extranjero]].',
          options: ['[[has never travelled|nunca ha viajado]]', '[[have never travelled|nunca he viajado]]', '[[never travelled|nunca viajó]]'],
          correctAnswer: 0,
          explanation: "[[She has never travelled|Nunca ha viajado]] = [[third person|tercera persona]].",
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a2-u42-l1-g12',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Present Perfect: Ever & Never',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: 'Elige la opción correcta.',
      questions: [
        {
          question: '[[Have|¿]] [[you|tú]] ____ [[eaten|comido]] [[snails|caracoles]]?',
          options: ['[[ever|alguna vez]]', '[[never|nunca]]', '[[already|ya]]'],
          correctAnswer: 0,
          explanation: "[[Ever|Ever]] [[goes|va]] [[before|antes]] [[the|del]] [[past participle|participio pasado]].",
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a2-u42-l1-g13',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Present Perfect: Ever & Never',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: 'Elige la opción correcta.',
      questions: [
        {
          question: '[[They|Ellos]] ____ ____ ____ [[a|un]] [[real|real]] [[snowstorm|tormenta de nieve]].',
          options: ["[[have never experienced|nunca han experimentado]]", "[[has never experienced|nunca ha experimentado]]", "[[never experienced|nunca experimentaron]]"],
          correctAnswer: 0,
          explanation: "[[They have never experienced|Nunca han experimentado]] = [[plural|plural]].",
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a2-u42-l1-g14',
    type: 'fill-blank',
    level: 'A2',
    topic: 'Present Perfect: Ever & Never',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS,
      questions: [
        {
          question: '[[Has|¿]] [[he|él]] ____ [[spoken|hablado]] [[to|con]] [[a|un]] [[celebrity|celebridad]]?',
          options: ['[[ever|alguna vez]]', '[[never|nunca]]', '[[already|ya]]'],
          correctAnswer: 'ever',
          explanation: "[[Has he ever spoken to|¿Ha hablado alguna vez con]] = [[question|pregunta]].",
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a2-u42-l1-g15',
    type: 'fill-blank',
    level: 'A2',
    topic: 'Present Perfect: Ever & Never',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS,
      questions: [
        {
          question: '[[No|No]], [[I|yo]] ____ ____ ____ [[that|esa]] [[restaurant|restaurante]].',
          options: ["[[have never been to|nunca he estado en]]", "[[has never been to|nunca ha estado en]]", "[[never went to|nunca fui a]]"],
          correctAnswer: 'have never been to',
          explanation: "[[I have never been to|Nunca he estado en]] = [[negative|negativa]] [[answer|respuesta]].",
        },
      ],
    },
    topicName: 'Grammar',
  },
];
