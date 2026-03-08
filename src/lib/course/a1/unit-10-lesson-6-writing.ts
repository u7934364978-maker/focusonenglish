/**
 * Unidad 10 — Lección 6: Expresión escrita
 * 15 ejercicios: fill-blank, sentence-building, writing guiada y libre (rutinas y hora).
 */

import { Exercise } from '@/lib/exercise-generator';

const LESSON_TITLE = 'Expresión escrita';
const TOPIC = 'Daily Routines & Time';

export const UNIT_10_LESSON_6_WRITING: Exercise[] = [
  // ─── 1–5: fill-blank (at + time, get up, have breakfast, do/does) ──────────
  {
    id: 'a1-u10-l6-w1',
    type: 'fill-blank',
    level: 'A1',
    topic: TOPIC,
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: 'Completa la frase. Con la hora usamos ____.',
      questions: [{
        question: '[[I|Yo]] [[get|me]] [[up|levanto]] ____ [[seven|siete]] [[o\'clock|en punto]].',
        options: ['[[at|a]]', '[[in|a]]', '[[on|en]]'],
        correctAnswer: 'at',
        acceptableAnswers: ['at'],
        explanation: 'At + hora: at seven o\'clock.',
      }],
    },
    topicName: 'Writing',
  },
  {
    id: 'a1-u10-l6-w2',
    type: 'fill-blank',
    level: 'A1',
    topic: TOPIC,
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: 'Completa con la forma correcta del verbo. Con "he" usamos ____.',
      questions: [{
        question: '[[He|Él]] ____ [[up|se]] [[at|a]] [[six|seis]] [[o\'clock|en punto]].',
        options: ['[[gets|levanta]]', '[[get|levantar]]', '[[getting|levantando]]'],
        correctAnswer: 'gets',
        acceptableAnswers: ['gets'],
        explanation: 'He gets up.',
      }],
    },
    topicName: 'Writing',
  },
  {
    id: 'a1-u10-l6-w3',
    type: 'fill-blank',
    level: 'A1',
    topic: TOPIC,
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: 'Completa la pregunta. Con "you" usamos ____.',
      questions: [{
        question: '[[What|A]] [[time|qué]] ____ [[do|(auxiliar)]] [[you|tú]] [[have|tomas]] [[breakfast|desayuno]]?',
        options: ['[[do|(auxiliar)]]', '[[does|(auxiliar)]]', '[[are|eres]]'],
        correctAnswer: 'do',
        acceptableAnswers: ['do'],
        explanation: 'What time do you have breakfast?',
      }],
    },
    topicName: 'Writing',
  },
  {
    id: 'a1-u10-l6-w4',
    type: 'fill-blank',
    level: 'A1',
    topic: TOPIC,
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: 'Completa con "have" o "has". Con "she" usamos ____.',
      questions: [{
        question: '[[She|Ella]] ____ [[breakfast|desayuno]] [[at|a]] [[half|y]] [[past|media]] [[eight|ocho]].',
        options: ['[[have|tener]]', '[[has|toma]]', '[[having|tomando]]'],
        correctAnswer: 'has',
        acceptableAnswers: ['has'],
        explanation: 'She has breakfast.',
      }],
    },
    topicName: 'Writing',
  },
  {
    id: 'a1-u10-l6-w5',
    type: 'fill-blank',
    level: 'A1',
    topic: TOPIC,
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: 'Completa con "go" o "goes". Con "I" usamos ____.',
      questions: [{
        question: '[[I|Yo]] ____ [[to|a]] [[bed|cama]] [[at|a]] [[ten|diez]] [[o\'clock|en punto]].',
        options: ['[[go|voy]]', '[[goes|va]]', '[[going|yendo]]'],
        correctAnswer: 'go',
        acceptableAnswers: ['go'],
        explanation: 'I go to bed.',
      }],
    },
    topicName: 'Writing',
  },

  // ─── 6–8: sentence-building ───────────────────────────────────────────────
  {
    id: 'a1-u10-l6-w6',
    type: 'sentence-building',
    level: 'A1',
    topic: TOPIC,
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: 'Ordena las palabras y escribe la oración correcta.',
      correctSentence: '[[I|Yo]] [[get|me]] [[up|levanto]] [[at|a]] [[seven|siete]] [[o\'clock|en punto]].',
      words: ['[[I|Yo]]', '[[get|me]]', '[[up|levanto]]', '[[at|a]]', '[[seven|siete]]', '[[o\'clock|en punto]].'],
    },
    topicName: 'Writing',
  },
  {
    id: 'a1-u10-l6-w7',
    type: 'sentence-building',
    level: 'A1',
    topic: TOPIC,
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: 'Ordena las palabras y escribe la oración correcta.',
      correctSentence: '[[What|A]] [[time|qué]] [[do|(auxiliar)]] [[you|tú]] [[have|tomas]] [[breakfast|desayuno]]?',
      words: ['[[What|A]]', '[[time|qué]]', '[[do|(auxiliar)]]', '[[you|tú]]', '[[have|tomas]]', '[[breakfast|desayuno]]?'],
    },
    topicName: 'Writing',
  },
  {
    id: 'a1-u10-l6-w8',
    type: 'sentence-building',
    level: 'A1',
    topic: TOPIC,
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: 'Ordena las palabras y escribe la oración correcta.',
      correctSentence: '[[She|Ella]] [[goes|va]] [[to|a]] [[work|trabajo]] [[at|a]] [[nine|nueve]] [[o\'clock|en punto]].',
      words: ['[[She|Ella]]', '[[goes|va]]', '[[to|a]]', '[[work|trabajo]]', '[[at|a]]', '[[nine|nueve]]', '[[o\'clock|en punto]].'],
    },
    topicName: 'Writing',
  },

  // ─── 9–12: writing guiada ─────────────────────────────────────────────────
  {
    id: 'a1-u10-l6-w9',
    type: 'writing',
    level: 'A1',
    topic: TOPIC,
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: 'Escribe una frase diciendo a qué hora te levantas. Usa: I get up at … o\'clock.',
      prompt: '[[I|Yo]] ____ ____ ____ [[o\'clock|en punto]].',
      minWords: 6,
      maxWords: 10,
    },
    topicName: 'Writing',
  },
  {
    id: 'a1-u10-l6-w10',
    type: 'writing',
    level: 'A1',
    topic: TOPIC,
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: 'Escribe una frase diciendo a qué hora desayunas. Usa: I have breakfast at …',
      prompt: '[[I|Yo]] ____ ____ ____.',
      minWords: 5,
      maxWords: 10,
    },
    topicName: 'Writing',
  },
  {
    id: 'a1-u10-l6-w11',
    type: 'writing',
    level: 'A1',
    topic: TOPIC,
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: 'Escribe dos frases: a qué hora te levantas y a qué hora vas a trabajar o al colegio. Usa: I get up at … I go to work/school at …',
      prompt: '____. ____.',
      minWords: 10,
      maxWords: 18,
    },
    topicName: 'Writing',
  },
  {
    id: 'a1-u10-l6-w12',
    type: 'writing',
    level: 'A1',
    topic: TOPIC,
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: 'Escribe la pregunta "What time do you get up?" y tu respuesta en una frase.',
      prompt: '____? ____.',
      minWords: 8,
      maxWords: 14,
    },
    topicName: 'Writing',
  },

  // ─── 13–15: writing libre ─────────────────────────────────────────────────
  {
    id: 'a1-u10-l6-w13',
    type: 'writing',
    level: 'A1',
    topic: TOPIC,
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: 'Escribe un párrafo corto (4–6 frases) sobre tu rutina por la mañana: a qué hora te levantas, desayunas y vas a trabajar o al colegio. Usa I get up at …, I have breakfast at …, I go to work/school at …',
      prompt: '[[Describe your morning routine|Describe tu rutina de mañana]]: [[get up|levantarse]], [[breakfast|desayuno]], [[go to work/school|ir a trabajar/colegio]].',
      minWords: 25,
      maxWords: 55,
    },
    topicName: 'Writing',
  },
  {
    id: 'a1-u10-l6-w14',
    type: 'writing',
    level: 'A1',
    topic: TOPIC,
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: 'Escribe 4–6 frases sobre tu día: hora de levantarte, desayuno, trabajo/colegio, comida, cena y hora de acostarte. Usa at + hora (at seven o\'clock, at half past seven).',
      prompt: '[[Your day with times|Tu día con horarios]]: [[get up|levantarse]], [[breakfast|desayuno]], [[lunch|comida]], [[dinner|cena]], [[go to bed|acostarse]].',
      minWords: 28,
      maxWords: 60,
    },
    topicName: 'Writing',
  },
  {
    id: 'a1-u10-l6-w15',
    type: 'writing',
    level: 'A1',
    topic: TOPIC,
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: 'Escribe un párrafo corto (4–6 frases) describiendo la rutina de un familiar o amigo: a qué hora se levanta, desayuna, trabaja/estudia y se acuesta. Usa He/She gets up at …, He/She has breakfast at …, He/She goes to work at …, He/She goes to bed at …',
      prompt: '[[Routine of a person you know|Rutina de una persona que conoces]]: [[get up|levantarse]], [[breakfast|desayuno]], [[work|trabajo]], [[go to bed|acostarse]].',
      minWords: 30,
      maxWords: 65,
    },
    topicName: 'Writing',
  },
];
