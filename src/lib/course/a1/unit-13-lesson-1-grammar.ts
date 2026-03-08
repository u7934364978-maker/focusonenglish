/**
 * Unidad 13 — Lección 1: Gramática (Daily Routine)
 * Adverbios de secuencia (First, Then, After that) con Present Simple.
 * 15 ejercicios: 5 fill-blank, 5 multiple-choice, 3 sentence-building, 2 true-false
 */

import { Exercise } from '@/lib/exercise-generator';

const LESSON_TITLE = 'Rutina diaria: First, Then, After that';
const TOPIC = 'Daily Routine';

const INSTRUCTIONS_FILL = 'Completa la frase con la palabra correcta.';
const INSTRUCTIONS_MC = 'Elige la opción correcta.';
const INSTRUCTIONS_ORDER = 'Ordena las palabras para formar una oración correcta.';
const INSTRUCTIONS_TF = 'Indica si la afirmación es verdadera o falsa.';

export const UNIT_13_LESSON_1_GRAMMAR: Exercise[] = [
  {
    id: 'a1-u13-l1-g1',
    type: 'fill-blank',
    level: 'A1',
    topic: TOPIC,
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_FILL,
      questions: [{
        question: '____ [[I|yo]] [[wake|me]] [[up|levanto]] [[at|a]] [[seven|siete]].',
        options: ['[[First|Primero]]', '[[Then|Luego]]', '[[After that|Después]]'],
        correctAnswer: '[[First|Primero]]',
        explanation: 'First = primero, para empezar la secuencia.',
      }],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a1-u13-l1-g2',
    type: 'fill-blank',
    level: 'A1',
    topic: TOPIC,
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_FILL,
      questions: [{
        question: '[[First|Primero]] [[I|yo]] [[brush|me]] [[my|lavo los]] [[teeth|dientes]]. ____ [[I|yo]] [[have|tomo]] [[breakfast|desayuno]].',
        options: ['[[Then|Luego]]', '[[First|Primero]]', '[[After that|Después de eso]]'],
        correctAnswer: '[[Then|Luego]]',
        explanation: 'Then = luego, siguiente paso.',
      }],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a1-u13-l1-g3',
    type: 'fill-blank',
    level: 'A1',
    topic: TOPIC,
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_FILL,
      questions: [{
        question: '[[I|Yo]] ____ [[up|me]] [[at|a]] [[half|y]] [[past|media]] [[six|seis]].',
        options: ['[[wake|levanto]]', '[[wakes|levanta]]', '[[waking|levantando]]'],
        correctAnswer: '[[wake|levanto]]',
        explanation: 'I wake up. Con "I" el verbo sin -s.',
      }],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a1-u13-l1-g4',
    type: 'fill-blank',
    level: 'A1',
    topic: TOPIC,
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_FILL,
      questions: [{
        question: '[[After that|Después]] ____ [[I|yo]] [[go|voy]] [[to|a]] [[work|trabajo]].',
        options: ['[[I|yo]]', '[[he|él]]', '[[they|ellos]]'],
        correctAnswer: '[[I|yo]]',
        explanation: 'After that I go to work.',
      }],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a1-u13-l1-g5',
    type: 'fill-blank',
    level: 'A1',
    topic: TOPIC,
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_FILL,
      questions: [{
        question: '[[She|Ella]] ____ [[to|a]] [[bed|la cama]] [[at|a]] [[ten|diez]] [[o\'clock|en punto]].',
        options: ['[[goes|va]]', '[[go|ir]]', '[[going|yendo]]'],
        correctAnswer: '[[goes|va]]',
        explanation: 'She goes to bed. Go to bed = irse a la cama.',
      }],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a1-u13-l1-g6',
    type: 'multiple-choice',
    level: 'A1',
    topic: TOPIC,
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_MC,
      questions: [{
        question: '[[Which|Cuál]] [[word|palabra]] [[comes|va]] [[first|primero]] [[in|en]] [[a|una]] [[routine|rutina]]?',
        options: ['[[Then|Then]]', '[[First|First]]', '[[After that|After that]]'],
        correctAnswer: 1,
        explanation: 'First = primero en la secuencia.',
      }],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a1-u13-l1-g7',
    type: 'multiple-choice',
    level: 'A1',
    topic: TOPIC,
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_MC,
      questions: [{
        question: '[[First|Primero]] [[I|yo]] [[get|me]] [[up|levanto]]. ____ [[I|yo]] [[brush|me]] [[my|lavo los]] [[teeth|dientes]].',
        options: ['[[Then|Luego]]', '[[First|Primero]]', '[[Last|Último]]'],
        correctAnswer: 0,
        explanation: 'Then = luego, siguiente paso.',
      }],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a1-u13-l1-g8',
    type: 'multiple-choice',
    level: 'A1',
    topic: TOPIC,
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_MC,
      questions: [{
        question: '[[He|Él]] ____ [[breakfast|desayuno]] [[at|a]] [[eight|ocho]].',
        options: ['[[have|tomar]]', '[[has|toma]]', '[[having|tomando]]'],
        correctAnswer: 1,
        explanation: 'He has breakfast. Have → has en 3.ª persona.',
      }],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a1-u13-l1-g9',
    type: 'multiple-choice',
    level: 'A1',
    topic: TOPIC,
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_MC,
      questions: [{
        question: '[[After that|Después]] [[we|nosotros]] ____ [[home|casa]].',
        options: ['[[go|vamos a]]', '[[goes|va a]]', '[[going|yendo a]]'],
        correctAnswer: 0,
        explanation: 'We go home. Con we/usamos go.',
      }],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a1-u13-l1-g10',
    type: 'multiple-choice',
    level: 'A1',
    topic: TOPIC,
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_MC,
      questions: [{
        question: '[[I|Yo]] ____ [[my|me]] [[teeth|lavo los dientes]] [[every|todas las]] [[morning|mañanas]].',
        options: ['[[brush|lavo]]', '[[brushes|lava]]', '[[brushing|lavando]]'],
        correctAnswer: 0,
        explanation: 'I brush my teeth. Brush = cepillar.',
      }],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a1-u13-l1-g11',
    type: 'sentence-building',
    level: 'A1',
    topic: TOPIC,
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_ORDER,
      correctSentence: '[[First|Primero]] [[I|yo]] [[wake up|me levanto]]. [[Then|Luego]] [[I|yo]] [[have breakfast|desayuno]].',
      words: ['[[First|Primero]]', '[[I|yo]]', '[[wake up|me levanto]].', '[[Then|Luego]]', '[[I|yo]]', '[[have breakfast|desayuno]].'],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a1-u13-l1-g12',
    type: 'sentence-building',
    level: 'A1',
    topic: TOPIC,
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_ORDER,
      correctSentence: '[[After that|Después]] [[I|yo]] [[go|voy]] [[to|a]] [[work|trabajo]].',
      words: ['[[After that|Después]]', '[[I|yo]]', '[[go|voy]]', '[[to|a]]', '[[work|trabajo]].'],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a1-u13-l1-g13',
    type: 'sentence-building',
    level: 'A1',
    topic: TOPIC,
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_ORDER,
      correctSentence: '[[She|Ella]] [[goes|va]] [[to bed|a la cama]] [[at|a]] [[ten|diez]] [[o\'clock|en punto]].',
      words: ['[[She|Ella]]', '[[goes|va]]', '[[to bed|a la cama]]', '[[at|a]]', '[[ten|diez]]', '[[o\'clock|en punto]].'],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a1-u13-l1-g14',
    type: 'true-false',
    level: 'A1',
    topic: TOPIC,
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_TF,
      questions: [{
        question: '[[We|Se]] [[use|usan]] [[First|First]], [[Then|Then]] [[and|y]] [[After that|After that]] [[to|para]] [[order|ordenar]] [[the|los]] [[steps|pasos]] [[of|de]] [[a|una]] [[routine|rutina]].',
        correctAnswer: true,
        explanation: 'Sí. First, Then, After that ordenan la rutina.',
      }],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a1-u13-l1-g15',
    type: 'true-false',
    level: 'A1',
    topic: TOPIC,
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_TF,
      questions: [{
        question: '[["Go to bed"|"Go to bed"]] [[means|significa]] [[go to sleep|irse a dormir]] [[or|o]] [[get into bed|meterse en la cama]].',
        correctAnswer: true,
        explanation: 'Go to bed = irse a la cama.',
      }],
    },
    topicName: 'Grammar',
  },
];
