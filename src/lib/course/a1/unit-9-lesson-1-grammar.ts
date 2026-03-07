/**
 * Unidad 9 — Lección 1: Gramática (Jobs & Occupations)
 * to be con profesiones (I am a teacher); a/an con trabajos; Where do you work?
 * 15 ejercicios: 5 fill-blank, 5 multiple-choice, 3 sentence-building, 2 true-false
 */

import { Exercise } from '@/lib/exercise-generator';

const LESSON_TITLE = 'Profesiones: to be, a/an y Where do you work?';
const TOPIC = 'Jobs & Occupations';

const INSTRUCTIONS_FILL = 'Completa la frase con la palabra correcta.';
const INSTRUCTIONS_MC = 'Elige la opción correcta.';
const INSTRUCTIONS_ORDER = 'Ordena las palabras para formar una oración correcta.';
const INSTRUCTIONS_TF = 'Indica si la afirmación es verdadera o falsa.';

export const UNIT_9_LESSON_1_GRAMMAR: Exercise[] = [
  // ─── 1–5: fill-blank (a/an, to be, profesión) ────────────────────────────
  {
    id: 'a1-u9-l1-g1',
    type: 'fill-blank',
    level: 'A1',
    topic: TOPIC,
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_FILL,
      questions: [{
        question: '[[I|Yo]] ____ [[a|un]] [[teacher|profesor]].',
        options: ['[[am|soy]]', '[[is|es]]', '[[are|son]]'],
        correctAnswer: '[[am|soy]]',
        explanation: 'I am a teacher. Con "I" usamos "am".',
      }],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a1-u9-l1-g2',
    type: 'fill-blank',
    level: 'A1',
    topic: TOPIC,
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_FILL,
      questions: [{
        question: '[[She|Ella]] [[is|es]] ____ [[engineer|ingeniera]].',
        options: ['[[a|una]]', '[[an|una]]', '[[the|la]]'],
        correctAnswer: '[[an|una]]',
        explanation: 'Ante vocal (engineer) usamos "an".',
      }],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a1-u9-l1-g3',
    type: 'fill-blank',
    level: 'A1',
    topic: TOPIC,
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_FILL,
      questions: [{
        question: '[[He|Él]] ____ [[a|un]] [[doctor|médico]].',
        options: ['[[am|soy]]', '[[is|es]]', '[[are|son]]'],
        correctAnswer: '[[is|es]]',
        explanation: 'He is a doctor. Con "he" usamos "is".',
      }],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a1-u9-l1-g4',
    type: 'fill-blank',
    level: 'A1',
    topic: TOPIC,
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_FILL,
      questions: [{
        question: '[[My|Mi]] [[brother|hermano]] [[is|es]] ____ [[teacher|profesor]].',
        options: ['[[a|un]]', '[[an|un]]', '[[the|el]]'],
        correctAnswer: '[[a|un]]',
        explanation: 'Ante consonante (teacher) usamos "a".',
      }],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a1-u9-l1-g5',
    type: 'fill-blank',
    level: 'A1',
    topic: TOPIC,
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_FILL,
      questions: [{
        question: '[[Where|Dónde]] ____ [[you|tú]] [[work|trabajas]]?',
        options: ['[[do|(auxiliar)]]', '[[does|(auxiliar)]]', '[[are|eres]]'],
        correctAnswer: '[[do|(auxiliar)]]',
        explanation: 'Where do you work? Con "you" usamos "do".',
      }],
    },
    topicName: 'Grammar',
  },

  // ─── 6–10: multiple-choice ───────────────────────────────────────────────
  {
    id: 'a1-u9-l1-g6',
    type: 'multiple-choice',
    level: 'A1',
    topic: TOPIC,
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_MC,
      questions: [{
        question: '[[Which|Cuál]] [[article|artículo]] [[before|antes de]] [[engineer|ingeniero]]?',
        options: ['[[a|un]]', '[[an|un]]', '[[the|el]]'],
        correctAnswer: 1,
        explanation: 'Engineer empieza por vocal: an engineer.',
      }],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a1-u9-l1-g7',
    type: 'multiple-choice',
    level: 'A1',
    topic: TOPIC,
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_MC,
      questions: [{
        question: '[[Which|Cuál]] [[article|artículo]] [[before|antes de]] [[doctor|médico]]?',
        options: ['[[a|un]]', '[[an|un]]', '[[the|el]]'],
        correctAnswer: 0,
        explanation: 'Doctor empieza por consonante: a doctor.',
      }],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a1-u9-l1-g8',
    type: 'multiple-choice',
    level: 'A1',
    topic: TOPIC,
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_MC,
      questions: [{
        question: '[[They|Ellos]] ____ [[students|estudiantes]].',
        options: ['[[am|soy]]', '[[is|es]]', '[[are|son]]'],
        correctAnswer: 2,
        explanation: 'Con "they" usamos "are".',
      }],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a1-u9-l1-g9',
    type: 'multiple-choice',
    level: 'A1',
    topic: TOPIC,
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_MC,
      questions: [{
        question: '[[Where|Dónde]] ____ [[does|trabaja]] [[she|ella]] [[work|trabajar]]?',
        options: ['[[do|(auxiliar)]]', '[[does|(auxiliar)]]', '[[is|es]]'],
        correctAnswer: 1,
        explanation: 'Where does she work? Con "she" usamos "does".',
      }],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a1-u9-l1-g10',
    type: 'multiple-choice',
    level: 'A1',
    topic: TOPIC,
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_MC,
      questions: [{
        question: '[[I|Yo]] [[work|trabajo]] ____ [[a|en]] [[school|una escuela]].',
        options: ['[[in|en]]', '[[at|en]]', '[[on|en]]'],
        correctAnswer: 0,
        explanation: 'I work in a school. "In" para lugares.',
      }],
    },
    topicName: 'Grammar',
  },

  // ─── 11–13: sentence-building ────────────────────────────────────────────
  {
    id: 'a1-u9-l1-g11',
    type: 'sentence-building',
    level: 'A1',
    topic: TOPIC,
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_ORDER,
      correctSentence: '[[I|Yo]] [[am|soy]] [[a|un]] [[teacher|profesor]].',
      words: ['[[I|Yo]]', '[[am|soy]]', '[[a|un]]', '[[teacher|profesor]].'],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a1-u9-l1-g12',
    type: 'sentence-building',
    level: 'A1',
    topic: TOPIC,
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_ORDER,
      correctSentence: '[[Where|Dónde]] [[do|(auxiliar)]] [[you|tú]] [[work|trabajas]]?',
      words: ['[[Where|Dónde]]', '[[do|(auxiliar)]]', '[[you|tú]]', '[[work|trabajas]]?'],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a1-u9-l1-g13',
    type: 'sentence-building',
    level: 'A1',
    topic: TOPIC,
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_ORDER,
      correctSentence: '[[She|Ella]] [[works|trabaja]] [[in|en]] [[a|un]] [[hospital|hospital]].',
      words: ['[[She|Ella]]', '[[works|trabaja]]', '[[in|en]]', '[[a|un]]', '[[hospital|hospital]].'],
    },
    topicName: 'Grammar',
  },

  // ─── 14–15: true-false ───────────────────────────────────────────────────
  {
    id: 'a1-u9-l1-g14',
    type: 'true-false',
    level: 'A1',
    topic: TOPIC,
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_TF,
      questions: [{
        question: '[[We|Se]] [[use|usa]] "[[a|un]]" [[before|antes de]] [[professions|profesiones]] [[that|que]] [[start|empiezan]] [[with|con]] [[a|una]] [[consonant|consonante]] [[in|en]] [[English|inglés]].',
        correctAnswer: true,
        explanation: 'Sí. A teacher, a doctor.',
      }],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a1-u9-l1-g15',
    type: 'true-false',
    level: 'A1',
    topic: TOPIC,
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_TF,
      questions: [{
        question: '[[We|Se]] [[ask|pregunta]] "[[Where do you work?|¿Dónde trabajas?]]" [[to|para]] [[know|saber]] [[the|el]] [[place|lugar]] [[of|de]] [[work|trabajo]].',
        correctAnswer: true,
        explanation: 'Sí. Where do you work?',
      }],
    },
    topicName: 'Grammar',
  },
];
