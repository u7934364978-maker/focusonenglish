/**
 * Unidad 10 — Lección 2: Vocabulario (rutinas diarias y la hora)
 * get up, have breakfast, go to work, go to bed, morning, afternoon, evening, o'clock, half past.
 * 15 ejercicios: 6 multiple-choice, 4 matching, 3 fill-blank, 2 multiple-choice contexto
 */

import { Exercise } from '@/lib/exercise-generator';

const LESSON_TITLE = 'Vocabulario: rutinas diarias y la hora';
const TOPIC = 'Daily Routines & Time';

const INSTRUCTIONS_MC = 'Elige la palabra correcta.';
const INSTRUCTIONS_MATCH = 'Relaciona la expresión con su significado o momento del día.';
const INSTRUCTIONS_FILL = 'Completa la frase con la palabra correcta.';
const INSTRUCTIONS_CTX = 'Elige la opción correcta para la situación.';

export const UNIT_10_LESSON_2_VOCABULARY: Exercise[] = [
  // ─── 1–6: multiple-choice ──────────────────────────────────────────────────
  {
    id: 'a1-u10-l2-v1',
    type: 'multiple-choice',
    level: 'A1',
    topic: TOPIC,
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_MC,
      questions: [{
        question: '[[You|Tú]] ____ [[at|a]] [[seven|siete]] [[in|por]] [[the|la]] [[morning|mañana]]. [[You|Te]] [[leave|dejas]] [[the|la]] [[bed|cama]].',
        options: ['[[get up|te levantas]]', '[[go to bed|te acuestas]]', '[[have lunch|almuerzas]]'],
        correctAnswer: 0,
        explanation: 'Get up = levantarse.',
      }],
    },
    topicName: 'Vocabulary',
  },
  {
    id: 'a1-u10-l2-v2',
    type: 'multiple-choice',
    level: 'A1',
    topic: TOPIC,
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_MC,
      questions: [{
        question: '[[The|La]] ____ [[is|es]] [[from|de]] [[12|12]] [[to|a]] [[about|unas]] [[5|5]] [[pm|pm]]. [[After|luego]] [[lunch|comida]].',
        options: ['[[morning|mañana]]', '[[afternoon|tarde]]', '[[evening|noche (temprano)]]'],
        correctAnswer: 1,
        explanation: 'Afternoon = tarde (12–17h aprox.).',
      }],
    },
    topicName: 'Vocabulary',
  },
  {
    id: 'a1-u10-l2-v3',
    type: 'multiple-choice',
    level: 'A1',
    topic: TOPIC,
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_MC,
      questions: [{
        question: '[[At|A]] [[seven|siete]] ____ [[=|=]] [[7:00|7:00]].',
        options: ['[[o\'clock|en punto]]', '[[half past|y media]]', '[[quarter|y cuarto]]'],
        correctAnswer: 0,
        explanation: 'Seven o\'clock = las siete en punto.',
      }],
    },
    topicName: 'Vocabulary',
  },
  {
    id: 'a1-u10-l2-v4',
    type: 'multiple-choice',
    level: 'A1',
    topic: TOPIC,
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_MC,
      questions: [{
        question: '[[I|Yo]] ____ [[at|a]] [[ten|diez]] [[at|por]] [[night|noche]]. [[I|Me]] [[sleep|duermo]].',
        options: ['[[get up|me levanto]]', '[[go to work|voy a trabajar]]', '[[go to bed|me acuesto]]'],
        correctAnswer: 2,
        explanation: 'Go to bed = irse a la cama.',
      }],
    },
    topicName: 'Vocabulary',
  },
  {
    id: 'a1-u10-l2-v5',
    type: 'multiple-choice',
    level: 'A1',
    topic: TOPIC,
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_MC,
      questions: [{
        question: '[[Half|Y]] ____ [[eight|media]] [[=|=]] [[8:30|8:30]].',
        options: ['[[o\'clock|en punto]]', '[[past|pasadas]]', '[[past eight|y media (las ocho)]]'],
        correctAnswer: 2,
        explanation: 'Half past eight = las ocho y media.',
      }],
    },
    topicName: 'Vocabulary',
  },
  {
    id: 'a1-u10-l2-v6',
    type: 'multiple-choice',
    level: 'A1',
    topic: TOPIC,
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_MC,
      questions: [{
        question: '[[I|Yo]] ____ [[at|a]] [[eight|las ocho]]. [[I|Tomo]] [[breakfast|desayuno]] [[in|por]] [[the|la]] [[morning|mañana]].',
        options: ['[[have breakfast|desayuno]]', '[[have dinner|ceno]]', '[[go to bed|me acuesto]]'],
        correctAnswer: 0,
        explanation: 'Have breakfast = desayunar.',
      }],
    },
    topicName: 'Vocabulary',
  },

  // ─── 7–10: matching ──────────────────────────────────────────────────────
  {
    id: 'a1-u10-l2-v7',
    type: 'matching',
    level: 'A1',
    topic: TOPIC,
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_MATCH,
      pairs: [
        { id: 'p1', left: '[[get up|levantarse]]', right: '[[morning|mañana]]' },
        { id: 'p2', left: '[[have lunch|almorzar]]', right: '[[afternoon|tarde]]' },
        { id: 'p3', left: '[[have dinner|cenar]]', right: '[[evening|noche]]' },
        { id: 'p4', left: '[[go to bed|acostarse]]', right: '[[night|noche]]' },
        { id: 'p5', left: '[[go to work|ir a trabajar]]', right: '[[morning|mañana]]' },
      ],
    },
    topicName: 'Vocabulary',
  },
  {
    id: 'a1-u10-l2-v8',
    type: 'matching',
    level: 'A1',
    topic: TOPIC,
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: 'Relaciona la hora en inglés con su significado.',
      pairs: [
        { id: 'p1', left: '[[seven o\'clock|siete en punto]]', right: '7:00' },
        { id: 'p2', left: '[[half past seven|siete y media]]', right: '7:30' },
        { id: 'p3', left: '[[twelve o\'clock|doce en punto]]', right: '12:00' },
        { id: 'p4', left: '[[half past three|tres y media]]', right: '3:30' },
        { id: 'p5', left: '[[nine o\'clock|nueve en punto]]', right: '9:00' },
      ],
    },
    topicName: 'Vocabulary',
  },
  {
    id: 'a1-u10-l2-v9',
    type: 'matching',
    level: 'A1',
    topic: TOPIC,
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: 'Relaciona la expresión con su traducción.',
      pairs: [
        { id: 'p1', left: '[[get up|levantarse]]', right: 'Levantarse' },
        { id: 'p2', left: '[[have breakfast|desayunar]]', right: 'Desayunar' },
        { id: 'p3', left: '[[go to work|ir a trabajar]]', right: 'Ir a trabajar' },
        { id: 'p4', left: '[[go to bed|acostarse]]', right: 'Acostarse' },
        { id: 'p5', left: '[[have dinner|cenar]]', right: 'Cenar' },
      ],
    },
    topicName: 'Vocabulary',
  },
  {
    id: 'a1-u10-l2-v10',
    type: 'matching',
    level: 'A1',
    topic: TOPIC,
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_MATCH,
      pairs: [
        { id: 'p1', left: '[[always|siempre]]', right: '[[100%|100%]]' },
        { id: 'p2', left: '[[usually|normalmente]]', right: '[[most of the time|casi siempre]]' },
        { id: 'p3', left: '[[sometimes|a veces]]', right: '[[not always|no siempre]]' },
        { id: 'p4', left: '[[never|nunca]]', right: '[[0%|0%]]' },
        { id: 'p5', left: '[[every day|todos los días]]', right: '[[daily|diario]]' },
      ],
    },
    topicName: 'Vocabulary',
  },

  // ─── 11–13: fill-blank ───────────────────────────────────────────────────
  {
    id: 'a1-u10-l2-v11',
    type: 'fill-blank',
    level: 'A1',
    topic: TOPIC,
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_FILL,
      questions: [{
        question: '[[I|Yo]] [[get|me]] ____ [[at|a]] [[seven|siete]] [[o\'clock|en punto]].',
        options: ['[[up|levanto]]', '[[to|a]]', '[[in|en]]'],
        correctAnswer: 'up',
        acceptableAnswers: ['up'],
        explanation: 'Get up = levantarse.',
      }],
    },
    topicName: 'Vocabulary',
  },
  {
    id: 'a1-u10-l2-v12',
    type: 'fill-blank',
    level: 'A1',
    topic: TOPIC,
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_FILL,
      questions: [{
        question: '[[She|Ella]] ____ [[to|a]] [[work|trabajo]] [[at|a]] [[nine|nueve]].',
        options: ['[[goes|va]]', '[[go|ir]]', '[[going|yendo]]'],
        correctAnswer: 'goes',
        acceptableAnswers: ['goes'],
        explanation: 'She goes to work.',
      }],
    },
    topicName: 'Vocabulary',
  },
  {
    id: 'a1-u10-l2-v13',
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
        correctAnswer: 'do',
        acceptableAnswers: ['do'],
        explanation: 'What time do you have breakfast?',
      }],
    },
    topicName: 'Vocabulary',
  },

  // ─── 14–15: multiple-choice contexto ──────────────────────────────────────
  {
    id: 'a1-u10-l2-v14',
    type: 'multiple-choice',
    level: 'A1',
    topic: TOPIC,
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_CTX,
      questions: [{
        question: '[[Someone|Alguien]] [[asks|pregunta]] "[[What time do you get up?|¿A qué hora te levantas?]]". [[You|Tú]] [[say|dices]]: ____.',
        options: ['[[I get up at seven.|Me levanto a las siete.]]', '[[I am seven.|Tengo siete.]]', '[[I have seven.|Tengo siete.]]'],
        correctAnswer: 0,
        explanation: 'I get up at [time].',
      }],
    },
    topicName: 'Vocabulary',
  },
  {
    id: 'a1-u10-l2-v15',
    type: 'multiple-choice',
    level: 'A1',
    topic: TOPIC,
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_CTX,
      questions: [{
        question: '[[You|Tú]] [[want|quieres]] [[to|preguntar]] [[ask|preguntar]] [[when|cuándo]] [[someone|alguien]] [[eats|toma]] [[breakfast|desayuno]]. [[You|Tú]] ____.',
        options: ['[[say|dices]] "[[What time is it?|¿Qué hora es?]]"', '[[say|dices]] "[[What time do you have breakfast?|¿A qué hora desayunas?]]"', '[[say|dices]] "[[Do you have breakfast?|¿Desayunas?]]"'],
        correctAnswer: 1,
        explanation: 'What time do you have breakfast?',
      }],
    },
    topicName: 'Vocabulary',
  },
];
