/**
 * Unidad 10 — Lección 1: Gramática (Daily Routines & Time)
 * Present simple con hora (get up at 7), What time do you...?, at + time, adverbios de frecuencia.
 * 15 ejercicios: 5 fill-blank, 5 multiple-choice, 3 sentence-building, 2 true-false
 */

import { Exercise } from '@/lib/exercise-generator';

const LESSON_TITLE = 'Rutinas diarias y hora: presente simple y What time...?';
const TOPIC = 'Daily Routines & Time';

const INSTRUCTIONS_FILL = 'Completa la frase con la palabra correcta.';
const INSTRUCTIONS_MC = 'Elige la opción correcta.';
const INSTRUCTIONS_ORDER = 'Ordena las palabras para formar una oración correcta.';
const INSTRUCTIONS_TF = 'Indica si la afirmación es verdadera o falsa.';

export const UNIT_10_LESSON_1_GRAMMAR: Exercise[] = [
  // ─── 1–5: fill-blank (at + time, get up, do/does) ───────────────────────────
  {
    id: 'a1-u10-l1-g1',
    type: 'fill-blank',
    level: 'A1',
    topic: TOPIC,
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_FILL,
      questions: [{
        question: '[[I|Yo]] [[get|me]] [[up|levanto]] ____ [[seven|siete]] [[o\'clock|en punto]].',
        options: ['[[at|a]]', '[[in|a]]', '[[on|en]]'],
        correctAnswer: '[[at|a]]',
        explanation: 'Con la hora usamos "at": at seven o\'clock.',
      }],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a1-u10-l1-g2',
    type: 'fill-blank',
    level: 'A1',
    topic: TOPIC,
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_FILL,
      questions: [{
        question: '[[He|Él]] ____ [[up|se]] [[at|a]] [[half|y]] [[past|media]] [[seven|siete]].',
        options: ['[[gets|levanta]]', '[[get|levantar]]', '[[getting|levantando]]'],
        correctAnswer: '[[gets|levanta]]',
        explanation: 'Con he/she/it el presente simple añade -s: he gets up.',
      }],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a1-u10-l1-g3',
    type: 'fill-blank',
    level: 'A1',
    topic: TOPIC,
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_FILL,
      questions: [{
        question: '[[What|A]] [[time|qué]] ____ [[do|(auxiliar)]] [[you|tú]] [[have|tomas]] [[breakfast|desayuno]]?',
        options: ['[[do|(auxiliar)]]', '[[does|(auxiliar)]]', '[[are|eres]]'],
        correctAnswer: '[[do|(auxiliar)]]',
        explanation: 'What time do you...? Con "you" usamos "do".',
      }],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a1-u10-l1-g4',
    type: 'fill-blank',
    level: 'A1',
    topic: TOPIC,
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_FILL,
      questions: [{
        question: '[[She|Ella]] [[always|siempre]] ____ [[lunch|almuerza]] [[at|a]] [[one|la una]].',
        options: ['[[have|tener]]', '[[has|almuerza]]', '[[having|almorzando]]'],
        correctAnswer: '[[has|almuerza]]',
        explanation: 'Con she usamos has: she has lunch.',
      }],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a1-u10-l1-g5',
    type: 'fill-blank',
    level: 'A1',
    topic: TOPIC,
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_FILL,
      questions: [{
        question: '[[I|Yo]] ____ [[to|a]] [[bed|la cama]] [[at|a]] [[ten|diez]] [[o\'clock|en punto]].',
        options: ['[[go|voy]]', '[[goes|va]]', '[[going|yendo]]'],
        correctAnswer: '[[go|voy]]',
        explanation: 'I go to bed. Con "I" no añadimos -s.',
      }],
    },
    topicName: 'Grammar',
  },

  // ─── 6–10: multiple-choice ───────────────────────────────────────────────
  {
    id: 'a1-u10-l1-g6',
    type: 'multiple-choice',
    level: 'A1',
    topic: TOPIC,
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_MC,
      questions: [{
        question: '[[Which|Qué]] [[preposition|preposición]] [[with|con]] [[the|la]] [[time|hora]]?',
        options: ['[[at|a]]', '[[in|en]]', '[[on|en]]'],
        correctAnswer: 0,
        explanation: 'At + hora: at 7 o\'clock, at half past eight.',
      }],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a1-u10-l1-g7',
    type: 'multiple-choice',
    level: 'A1',
    topic: TOPIC,
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_MC,
      questions: [{
        question: '[[My|Mi]] [[brother|hermano]] ____ [[up|se]] [[at|a]] [[six|las seis]].',
        options: ['[[get|levantar]]', '[[gets|levanta]]', '[[getting|levantando]]'],
        correctAnswer: 1,
        explanation: 'My brother = he, por tanto gets up.',
      }],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a1-u10-l1-g8',
    type: 'multiple-choice',
    level: 'A1',
    topic: TOPIC,
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_MC,
      questions: [{
        question: '[[What|A]] [[time|qué]] ____ [[does|(auxiliar)]] [[she|ella]] [[go|ir]] [[to|a]] [[work|trabajo]]?',
        options: ['[[do|(auxiliar)]]', '[[does|(auxiliar)]]', '[[is|es]]'],
        correctAnswer: 1,
        explanation: 'What time does she...? Con she usamos does.',
      }],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a1-u10-l1-g9',
    type: 'multiple-choice',
    level: 'A1',
    topic: TOPIC,
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_MC,
      questions: [{
        question: '[[I|Yo]] [[usually|normalmente]] ____ [[breakfast|desayuno]] [[at|a]] [[eight|las ocho]].',
        options: ['[[have|tomo]]', '[[has|toma]]', '[[having|tomando]]'],
        correctAnswer: 0,
        explanation: 'I have breakfast. Con "I" usamos have.',
      }],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a1-u10-l1-g10',
    type: 'multiple-choice',
    level: 'A1',
    topic: TOPIC,
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_MC,
      questions: [{
        question: '[[We|Nosotros]] ____ [[dinner|cenamos]] [[at|a]] [[half|y]] [[past|media]] [[eight|ocho]].',
        options: ['[[have|cenamos]]', '[[has|cena]]', '[[having|cenando]]'],
        correctAnswer: 0,
        explanation: 'We have dinner. Con "we" usamos have.',
      }],
    },
    topicName: 'Grammar',
  },

  // ─── 11–13: sentence-building ────────────────────────────────────────────
  {
    id: 'a1-u10-l1-g11',
    type: 'sentence-building',
    level: 'A1',
    topic: TOPIC,
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_ORDER,
      correctSentence: '[[I|Yo]] [[get|me]] [[up|levanto]] [[at|a]] [[seven|siete]] [[o\'clock|en punto]].',
      words: ['[[I|Yo]]', '[[get|me]]', '[[up|levanto]]', '[[at|a]]', '[[seven|siete]]', '[[o\'clock|en punto]].'],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a1-u10-l1-g12',
    type: 'sentence-building',
    level: 'A1',
    topic: TOPIC,
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_ORDER,
      correctSentence: '[[What|A]] [[time|qué]] [[do|(auxiliar)]] [[you|tú]] [[have|tomas]] [[breakfast|desayuno]]?',
      words: ['[[What|A]]', '[[time|qué]]', '[[do|(auxiliar)]]', '[[you|tú]]', '[[have|tomas]]', '[[breakfast|desayuno]]?'],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a1-u10-l1-g13',
    type: 'sentence-building',
    level: 'A1',
    topic: TOPIC,
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_ORDER,
      correctSentence: '[[She|Ella]] [[goes|va]] [[to|a]] [[work|trabajo]] [[at|a]] [[nine|nueve]] [[o\'clock|en punto]].',
      words: ['[[She|Ella]]', '[[goes|va]]', '[[to|a]]', '[[work|trabajo]]', '[[at|a]]', '[[nine|nueve]]', '[[o\'clock|en punto]].'],
    },
    topicName: 'Grammar',
  },

  // ─── 14–15: true-false ───────────────────────────────────────────────────
  {
    id: 'a1-u10-l1-g14',
    type: 'true-false',
    level: 'A1',
    topic: TOPIC,
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_TF,
      questions: [{
        question: '[[We|Se]] [[use|usa]] "[[at|a]]" [[before|antes de]] [[the|la]] [[time|hora]] [[in|en]] [[English|inglés]] [[(at 7 o\'clock)|(a las 7)]].',
        correctAnswer: true,
        explanation: 'Sí. At seven o\'clock, at half past eight.',
      }],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a1-u10-l1-g15',
    type: 'true-false',
    level: 'A1',
    topic: TOPIC,
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_TF,
      questions: [{
        question: '[[With|Con]] [[he/she/it|he/she/it]] [[we|se]] [[add|añade]] [[-s| -s]] [[to|al]] [[the|el]] [[verb|verbo]] [[in|en]] [[present|presente]] [[simple|simple]] [[(he gets up)|(he gets up)]].',
        correctAnswer: true,
        explanation: 'Sí. He gets up, she has breakfast.',
      }],
    },
    topicName: 'Grammar',
  },
];
