/**
 * Unidad 12 — Lección 1: Gramática (Days of the Week)
 * Preposición on con días; Present Simple para hábitos.
 * 15 ejercicios: 5 fill-blank, 5 multiple-choice, 3 sentence-building, 2 true-false
 */

import { Exercise } from '@/lib/exercise-generator';

const LESSON_TITLE = 'Días de la semana: on + día y presente simple';
const TOPIC = 'Days of the Week';

const INSTRUCTIONS_FILL = 'Completa la frase con la palabra correcta.';
const INSTRUCTIONS_MC = 'Elige la opción correcta.';
const INSTRUCTIONS_ORDER = 'Ordena las palabras para formar una oración correcta.';
const INSTRUCTIONS_TF = 'Indica si la afirmación es verdadera o falsa.';

export const UNIT_12_LESSON_1_GRAMMAR: Exercise[] = [
  {
    id: 'a1-u12-l1-g1',
    type: 'fill-blank',
    level: 'A1',
    topic: TOPIC,
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_FILL,
      questions: [{
        question: '[[I|Yo]] [[work|trabajo]] ____ [[Monday|lunes]].',
        options: ['[[on|el]]', '[[at|a]]', '[[in|en]]'],
        correctAnswer: '[[on|el]]',
        explanation: 'Con días de la semana usamos "on": on Monday.',
      }],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a1-u12-l1-g2',
    type: 'fill-blank',
    level: 'A1',
    topic: TOPIC,
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_FILL,
      questions: [{
        question: '[[She|Ella]] ____ [[English|inglés]] [[on|los]] [[Tuesdays|martes]].',
        options: ['[[teaches|enseña]]', '[[teach|enseñar]]', '[[teaching|enseñando]]'],
        correctAnswer: '[[teaches|enseña]]',
        explanation: 'Con she/he/it el presente simple añade -s: she teaches.',
      }],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a1-u12-l1-g3',
    type: 'fill-blank',
    level: 'A1',
    topic: TOPIC,
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_FILL,
      questions: [{
        question: '[[What|Qué]] ____ [[do|(auxiliar)]] [[you|tú]] [[do|haces]] [[on|los]] [[Saturdays|sábados]]?',
        options: ['[[do|(auxiliar)]]', '[[does|(auxiliar)]]', '[[are|eres]]'],
        correctAnswer: '[[do|(auxiliar)]]',
        explanation: 'What do you do on...? Con "you" usamos do.',
      }],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a1-u12-l1-g4',
    type: 'fill-blank',
    level: 'A1',
    topic: TOPIC,
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_FILL,
      questions: [{
        question: '[[I|Yo]] [[don\'t|no]] ____ [[work|trabajo]] [[on|el]] [[Sunday|domingo]].',
        options: ['[[work|trabajo]]', '[[works|trabaja]]', '[[working|trabajando]]'],
        correctAnswer: '[[work|trabajo]]',
        explanation: 'Tras don\'t usamos el verbo en infinitivo sin to: I don\'t work.',
      }],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a1-u12-l1-g5',
    type: 'fill-blank',
    level: 'A1',
    topic: TOPIC,
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_FILL,
      questions: [{
        question: '[[We|Nosotros]] [[rest|descansamos]] ____ [[the|el]] [[weekend|fin de semana]].',
        options: ['[[on|en]]', '[[at|a]]', '[[in|en]]'],
        correctAnswer: '[[on|en]]',
        explanation: 'On the weekend = el fin de semana.',
      }],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a1-u12-l1-g6',
    type: 'multiple-choice',
    level: 'A1',
    topic: TOPIC,
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_MC,
      questions: [{
        question: '[[He|Él]] ____ [[football|fútbol]] [[on|los]] [[Fridays|viernes]].',
        options: ['[[play|jugar]]', '[[plays|juega]]', '[[playing|jugando]]'],
        correctAnswer: 1,
        explanation: 'He plays. Tercera persona añade -s.',
      }],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a1-u12-l1-g7',
    type: 'multiple-choice',
    level: 'A1',
    topic: TOPIC,
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_MC,
      questions: [{
        question: '[[On|El]] ____ [[I|yo]] [[have|tengo]] [[class|clase]].',
        options: ['[[Wednesday|miércoles]]', '[[weekend|fin de semana]]', '[[morning|mañana]]'],
        correctAnswer: 0,
        explanation: 'On Wednesday = el miércoles.',
      }],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a1-u12-l1-g8',
    type: 'multiple-choice',
    level: 'A1',
    topic: TOPIC,
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_MC,
      questions: [{
        question: '[[Do|¿]] [[you|tú]] ____ [[on|los]] [[Thursdays|jueves]]?',
        options: ['[[study|estudias]]', '[[studies|estudia]]', '[[studying|estudiando]]'],
        correctAnswer: 0,
        explanation: 'Do you study...? Con "you" el verbo va en infinitivo.',
      }],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a1-u12-l1-g9',
    type: 'multiple-choice',
    level: 'A1',
    topic: TOPIC,
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_MC,
      questions: [{
        question: '[[Weekdays|Entre semana]] ____ [[Monday|lunes]] [[to|a]] [[Friday|viernes]].',
        options: ['[[is|es]]', '[[are|son]]', '[[be|ser]]'],
        correctAnswer: 1,
        explanation: 'Weekdays are Monday to Friday.',
      }],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a1-u12-l1-g10',
    type: 'multiple-choice',
    level: 'A1',
    topic: TOPIC,
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_MC,
      questions: [{
        question: '[[I|Yo]] ____ [[shopping|compras]] [[on|el]] [[Saturday|sábado]].',
        options: ['[[go|voy de]]', '[[goes|va de]]', '[[going|yendo de]]'],
        correctAnswer: 0,
        explanation: 'I go shopping. Go + shopping = ir de compras.',
      }],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a1-u12-l1-g11',
    type: 'sentence-building',
    level: 'A1',
    topic: TOPIC,
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_ORDER,
      correctSentence: '[[I|Yo]] [[work|trabajo]] [[on|los]] [[Mondays|lunes]].',
      words: ['[[I|Yo]]', '[[work|trabajo]]', '[[on|los]]', '[[Mondays|lunes]].'],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a1-u12-l1-g12',
    type: 'sentence-building',
    level: 'A1',
    topic: TOPIC,
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_ORDER,
      correctSentence: '[[What|Qué]] [[do|(auxiliar)]] [[you|tú]] [[do|haces]] [[on|el]] [[Sunday|domingo]]?',
      words: ['[[What|Qué]]', '[[do|(auxiliar)]]', '[[you|tú]]', '[[do|haces]]', '[[on|el]]', '[[Sunday|domingo]]?'],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a1-u12-l1-g13',
    type: 'sentence-building',
    level: 'A1',
    topic: TOPIC,
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_ORDER,
      correctSentence: '[[She|Ella]] [[has|tiene]] [[class|clase]] [[on|los]] [[Tuesdays|martes]].',
      words: ['[[She|Ella]]', '[[has|tiene]]', '[[class|clase]]', '[[on|los]]', '[[Tuesdays|martes]].'],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a1-u12-l1-g14',
    type: 'true-false',
    level: 'A1',
    topic: TOPIC,
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_TF,
      questions: [{
        question: '[[We|Se]] [[use|usa]] [[the|la]] [[preposition|preposición]] "[[on|on]]" [[with|con]] [[days|días]] [[of|de]] [[the|la]] [[week|semana]] [[(on Monday)|(on Monday)]].',
        correctAnswer: true,
        explanation: 'On Monday, on Tuesday, on the weekend.',
      }],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a1-u12-l1-g15',
    type: 'true-false',
    level: 'A1',
    topic: TOPIC,
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_TF,
      questions: [{
        question: '[[The|El]] [[weekend|fin de semana]] [[is|son]] [[Saturday|sábado]] [[and|y]] [[Sunday|domingo]].',
        correctAnswer: true,
        explanation: 'Weekend = sábado y domingo.',
      }],
    },
    topicName: 'Grammar',
  },
];
