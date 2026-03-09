/**
 * Unidad 43 — Lección 1: Gramática (Present Perfect: Just, Already, Yet)
 * 15 ejercicios: Acciones recientes con just, already, yet
 */

import { Exercise } from '@/lib/exercise-generator';

const LESSON_TITLE = "[[Present Perfect|Presente Perfecto]]: [[Just, Already, Yet|Just, Already, Yet]]";
const INSTRUCTIONS = 'Completa con just, already o yet, o elige la opción correcta.';

export const UNIT_43_LESSON_1_GRAMMAR: Exercise[] = [
  {
    id: 'a2-u43-l1-g1',
    type: 'fill-blank',
    level: 'A2',
    topic: 'Present Perfect: Just, Already, Yet',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS,
      questions: [
        {
          question: '[[I|Yo]] ____ ____ ____ [[lunch|almuerzo]].',
          options: ['[[have just had|acabo de comer]]', '[[have already had|ya he comido]]', '[[have had yet|he comido aún]]'],
          correctAnswer: 'have just had',
          explanation: "[[Just|Just]] = [[very recently|muy recientemente]], [[a moment ago|hace un momento]].",
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a2-u43-l1-g2',
    type: 'fill-blank',
    level: 'A2',
    topic: 'Present Perfect: Just, Already, Yet',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS,
      questions: [
        {
          question: '[[She|Ella]] ____ ____ [[finished|terminado]] [[her|su]] [[homework|deberes]].',
          options: ['[[has already|ya ha]]', '[[has just|acaba de]]', '[[has yet|ha aún]]'],
          correctAnswer: 'has already',
          explanation: "[[Already|Already]] = [[before|antes]] [[expected|de lo esperado]].",
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a2-u43-l1-g3',
    type: 'fill-blank',
    level: 'A2',
    topic: 'Present Perfect: Just, Already, Yet',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS,
      questions: [
        {
          question: '[[Have|¿]] [[you|tú]] [[had|tomado]] [[your|tu]] [[breakfast|desayuno]] ____?',
          options: ['[[yet|aún]]', '[[already|ya]]', '[[just|acabo]]'],
          correctAnswer: 'yet',
          explanation: "[[Yet|Yet]] [[in|en]] [[questions|preguntas]] = [[until now|hasta ahora]].",
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a2-u43-l1-g4',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Present Perfect: Just, Already, Yet',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: 'Elige la opción correcta.',
      questions: [
        {
          question: '[[He|Él]] ____ ____ ____ [[arrived|llegado]].',
          options: ['[[has just|acaba de]]', '[[has already|ya ha]]', '[[has yet|ha aún]]'],
          correctAnswer: 0,
          explanation: "[[Just|Just]] = [[very recently|muy recientemente]].",
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a2-u43-l1-g5',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Present Perfect: Just, Already, Yet',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: 'Elige la opción correcta.',
      questions: [
        {
          question: '[[We|Nosotros]] ____ ____ ____ [[the|la]] [[report|informe]].',
          options: ['[[have already finished|ya hemos terminado]]', '[[have just finished|acabamos de terminar]]', '[[have finished yet|hemos terminado aún]]'],
          correctAnswer: 0,
          explanation: "[[Already|Already]] = [[before|antes]] [[expected|de lo esperado]].",
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a2-u43-l1-g6',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Present Perfect: Just, Already, Yet',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: 'Elige la opción correcta.',
      questions: [
        {
          question: '[[I|Yo]] ____ ____ ____ [[the|la]] [[email|correo]] ____.',
          options: ['[[have not sent|no he enviado]] ... [[yet|aún]]', '[[have not sent|no he enviado]] ... [[already|ya]]', '[[have not sent|no he enviado]] ... [[just|acabo]]'],
          correctAnswer: 0,
          explanation: "[[Yet|Yet]] [[in|en]] [[negatives|negativas]] = [[until now|hasta ahora]].",
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a2-u43-l1-g7',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Present Perfect: Just, Already, Yet',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: 'Elige la opción correcta.',
      questions: [
        {
          question: '[[They|Ellos]] ____ ____ ____ [[left|marchado]].',
          options: ['[[have just|acaban de]]', '[[have already|ya han]]', '[[have yet|han aún]]'],
          correctAnswer: 0,
          explanation: "[[Just|Just]] = [[very recently|muy recientemente]].",
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a2-u43-l1-g8',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Present Perfect: Just, Already, Yet',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: 'Elige la opción correcta.',
      questions: [
        {
          question: '[[Has|¿]] [[she|ella]] ____ [[the|la]] [[news|noticias]] ____?',
          options: ['[[heard|oído]] ... [[yet|aún]]', '[[heard|oído]] ... [[already|ya]]', '[[heard|oído]] ... [[just|acabo]]'],
          correctAnswer: 0,
          explanation: "[[Yet|Yet]] [[at|al]] [[end|final]] [[of|de]] [[questions|preguntas]].",
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a2-u43-l1-g9',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Present Perfect: Just, Already, Yet',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: 'Elige la opción correcta.',
      questions: [
        {
          question: '[[I|Yo]] ____ ____ ____ [[the|la]] [[book|libro]] [[twice|dos veces]].',
          options: ['[[have already read|ya he leído]]', '[[have just read|acabo de leer]]', '[[have read yet|he leído aún]]'],
          correctAnswer: 0,
          explanation: "[[Already|Already]] = [[before|antes]] [[expected|de lo esperado]].",
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a2-u43-l1-g10',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Present Perfect: Just, Already, Yet',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: 'Elige la opción correcta.',
      questions: [
        {
          question: '[[He|Él]] ____ ____ ____ [[woken up|despertado]].',
          options: ['[[has just|acaba de]]', '[[has already|ya ha]]', '[[has yet|ha aún]]'],
          correctAnswer: 0,
          explanation: "[[Just|Just]] = [[very recently|muy recientemente]].",
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a2-u43-l1-g11',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Present Perfect: Just, Already, Yet',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: 'Elige la opción correcta.',
      questions: [
        {
          question: '[[We|Nosotros]] ____ ____ ____ [[the|la]] [[meeting|reunión]] ____.',
          options: ['[[have not had|no hemos tenido]] ... [[yet|aún]]', '[[have not had|no hemos tenido]] ... [[already|ya]]', '[[have not had|no hemos tenido]] ... [[just|acabo]]'],
          correctAnswer: 0,
          explanation: "[[Yet|Yet]] [[in|en]] [[negatives|negativas]] = [[until now|hasta ahora]].",
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a2-u43-l1-g12',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Present Perfect: Just, Already, Yet',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: 'Elige la opción correcta.',
      questions: [
        {
          question: '[[My|Mi]] [[sister|hermana]] ____ ____ ____ [[from|de]] [[work|trabajo]].',
          options: ['[[has just come|acaba de llegar]]', '[[has already come|ya ha llegado]]', '[[has come yet|ha llegado aún]]'],
          correctAnswer: 0,
          explanation: "[[Just|Just]] = [[very recently|muy recientemente]].",
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a2-u43-l1-g13',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Present Perfect: Just, Already, Yet',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: 'Elige la opción correcta.',
      questions: [
        {
          question: '[[Have|¿]] [[you|tú]] ____ [[dinner|cena]] ____?',
          options: ['[[had|cenado]] ... [[yet|aún]]', '[[had|cenado]] ... [[already|ya]]', '[[had|cenado]] ... [[just|acabo]]'],
          correctAnswer: 0,
          explanation: "[[Yet|Yet]] [[in|en]] [[questions|preguntas]] = [[until now|hasta ahora]].",
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a2-u43-l1-g14',
    type: 'fill-blank',
    level: 'A2',
    topic: 'Present Perfect: Just, Already, Yet',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS,
      questions: [
        {
          question: '[[I|Yo]] ____ ____ ____ ____ [[the|la]] [[door|puerta]].',
          options: ['[[have just closed|acabo de cerrar]]', '[[have already closed|ya he cerrado]]', '[[have closed yet|he cerrado aún]]'],
          correctAnswer: 'have just closed',
          explanation: "[[Just|Just]] = [[very recently|muy recientemente]].",
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a2-u43-l1-g15',
    type: 'fill-blank',
    level: 'A2',
    topic: 'Present Perfect: Just, Already, Yet',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS,
      questions: [
        {
          question: '[[They|Ellos]] [[have not|no han]] [[finished|terminado]] [[their|su]] [[packing|equipaje]] ____.',
          options: ['[[yet|aún]]', '[[already|ya]]', '[[just|acabo]]'],
          correctAnswer: 'yet',
          explanation: "[[Yet|Yet]] [[in|en]] [[negatives|negativas]] = [[until now|hasta ahora]].",
        },
      ],
    },
    topicName: 'Grammar',
  },
];
