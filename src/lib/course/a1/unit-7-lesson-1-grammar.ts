/**
 * Unidad 7 — Lección 1: Gramática (colores y descripciones físicas)
 * Adjetivos delante del nombre; to be + adjetivo; have got para pelo/ojos.
 * 15 ejercicios: 5 fill-blank, 5 multiple-choice, 3 sentence-building, 2 true-false
 */

import { Exercise } from '@/lib/exercise-generator';

const LESSON_TITLE = "Colors & Physical Descriptions: Adjectives and have got";
const TOPIC = 'Colors & Physical Descriptions';

const INSTRUCTIONS_FILL = 'Completa la frase con el adjetivo o la forma correcta.';
const INSTRUCTIONS_MC = 'Elige la opción correcta.';
const INSTRUCTIONS_ORDER = 'Ordena las palabras para formar una oración correcta.';
const INSTRUCTIONS_TF = 'Indica si la afirmación es verdadera o falsa.';

export const UNIT_7_LESSON_1_GRAMMAR: Exercise[] = [
  // ─── 1–5: fill-blank (adjetivo / to be / have got) ───────────────────────
  {
    id: 'a1-u7-l1-g1',
    type: 'fill-blank',
    level: 'A1',
    topic: TOPIC,
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_FILL,
      questions: [{
        question: '[[She|Ella]] ____ [[tall|alta]].',
        options: ['[[is|es]]', '[[are|son]]', '[[am|soy]]'],
        correctAnswer: '[[is|es]]',
        explanation: 'Con "she" usamos "is". To be + adjetivo para describir.',
      }],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a1-u7-l1-g2',
    type: 'fill-blank',
    level: 'A1',
    topic: TOPIC,
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_FILL,
      questions: [{
        question: '[[He|Él]] ____ [[got|tiene]] [[long|largo]] [[brown|castaño]] [[hair|pelo]].',
        options: ['[[has|tiene]]', '[[have|tener]]', '[[is|es]]'],
        correctAnswer: '[[has|tiene]]',
        explanation: 'Con "he" usamos "has got" para pelo y ojos.',
      }],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a1-u7-l1-g3',
    type: 'fill-blank',
    level: 'A1',
    topic: TOPIC,
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_FILL,
      questions: [{
        question: '[[My|Mi]] [[car|coche]] ____ [[red|rojo]].',
        options: ['[[is|es]]', '[[are|son]]', '[[am|soy]]'],
        correctAnswer: '[[is|es]]',
        explanation: 'To be + color: The car is red.',
      }],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a1-u7-l1-g4',
    type: 'fill-blank',
    level: 'A1',
    topic: TOPIC,
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_FILL,
      questions: [{
        question: '[[She|Ella]] [[is|es]] ____ [[for|para]] [[her|su]] [[age|edad]].',
        options: ['[[young|joven]]', '[[tall|alta]]', '[[short|baja]]', '[[old|mayor]]'],
        correctAnswer: '[[young|joven]]',
        explanation: 'Adjetivo va después de "to be": She is young.',
      }],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a1-u7-l1-g5',
    type: 'fill-blank',
    level: 'A1',
    topic: TOPIC,
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_FILL,
      questions: [{
        question: '[[They|Ellos]] ____ [[blue|azules]] [[eyes|ojos]].',
        options: ['[[have|tienen]]', '[[has|tiene]]', '[[is|es]]'],
        correctAnswer: '[[have|tienen]]',
        explanation: 'Con "they" usamos "have" para ojos: They have blue eyes.',
      }],
    },
    topicName: 'Grammar',
  },

  // ─── 6–10: multiple-choice ───────────────────────────────────────────────
  {
    id: 'a1-u7-l1-g6',
    type: 'multiple-choice',
    level: 'A1',
    topic: TOPIC,
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_MC,
      questions: [{
        question: '[[Which|Cuál]] [[sentence|oración]] [[is|es]] [[correct|correcta]]?',
        options: ['[[She|Ella]] [[has|tiene]] [[long|largo]] [[hair|pelo]].', '[[She|Ella]] [[has|tiene]] [[hair|pelo]] [[long|largo]].', '[[She|Ella]] [[is|es]] [[long|largo]] [[hair|pelo]].'],
        correctAnswer: 0,
        explanation: 'Have got + adjetivo + sustantivo: long hair.',
      }],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a1-u7-l1-g7',
    type: 'multiple-choice',
    level: 'A1',
    topic: TOPIC,
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_MC,
      questions: [{
        question: '[[Where|Dónde]] [[do|van]] [[adjectives|adjetivos]] [[go|van]] [[in|en]] [[English|inglés]]?',
        options: ['[[After|Después]] [[the|del]] [[noun|sustantivo]].', '[[Before|Antes]] [[the|del]] [[noun|sustantivo]].', '[[At|Al]] [[the|final]] [[end|final]].'],
        correctAnswer: 1,
        explanation: 'En inglés el adjetivo va antes del sustantivo.',
      }],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a1-u7-l1-g8',
    type: 'multiple-choice',
    level: 'A1',
    topic: TOPIC,
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_MC,
      questions: [{
        question: '[[Choose|Elige]] [[the|la]] [[correct|correcta]] [[word|palabra]]: [[He|Él]] ____ [[short|corto]] [[black|negro]] [[hair|pelo]].',
        options: ['[[has|tiene]]', '[[is|es]]', '[[have|tener]]'],
        correctAnswer: 0,
        explanation: 'Have/has got para pelo: He has short black hair.',
      }],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a1-u7-l1-g9',
    type: 'multiple-choice',
    level: 'A1',
    topic: TOPIC,
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_MC,
      questions: [{
        question: '[[The|El]] [[sky|cielo]] ____ [[blue|azul]].',
        options: ['[[is|es]]', '[[are|son]]', '[[have|tiene]]'],
        correctAnswer: 0,
        explanation: 'To be + color para cosas: The sky is blue.',
      }],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a1-u7-l1-g10',
    type: 'multiple-choice',
    level: 'A1',
    topic: TOPIC,
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_MC,
      questions: [{
        question: '[[She|Ella]] ____ [[green|verdes]] [[eyes|ojos]].',
        options: ['[[has|tiene]]', '[[is|es]]', '[[are|son]]'],
        correctAnswer: 0,
        explanation: 'Have/has got para ojos: She has green eyes.',
      }],
    },
    topicName: 'Grammar',
  },

  // ─── 11–13: sentence-building ────────────────────────────────────────────
  {
    id: 'a1-u7-l1-g11',
    type: 'sentence-building',
    level: 'A1',
    topic: TOPIC,
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_ORDER,
      correctSentence: '[[He|Él]] [[is|es]] [[tall|alto]].',
      words: ['[[He|Él]]', '[[is|es]]', '[[tall|alto]].'],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a1-u7-l1-g12',
    type: 'sentence-building',
    level: 'A1',
    topic: TOPIC,
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_ORDER,
      correctSentence: '[[She|Ella]] [[has|tiene]] [[long|largo]] [[brown|castaño]] [[hair|pelo]].',
      words: ['[[She|Ella]]', '[[has|tiene]]', '[[long|largo]]', '[[brown|castaño]]', '[[hair|pelo]].'],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a1-u7-l1-g13',
    type: 'sentence-building',
    level: 'A1',
    topic: TOPIC,
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_ORDER,
      correctSentence: '[[The|El]] [[car|coche]] [[is|es]] [[blue|azul]].',
      words: ['[[The|El]]', '[[car|coche]]', '[[is|es]]', '[[blue|azul]].'],
    },
    topicName: 'Grammar',
  },

  // ─── 14–15: true-false ───────────────────────────────────────────────────
  {
    id: 'a1-u7-l1-g14',
    type: 'true-false',
    level: 'A1',
    topic: TOPIC,
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_TF,
      questions: [{
        question: '[[In|En]] [[English|inglés]] [[we|se]] [[put|ponemos]] [[adjectives|adjetivos]] [[before|antes]] [[nouns|sustantivos]].',
        correctAnswer: true,
        explanation: 'Sí. Ejemplo: a red car, long hair.',
      }],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a1-u7-l1-g15',
    type: 'true-false',
    level: 'A1',
    topic: TOPIC,
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_TF,
      questions: [{
        question: '[[We|Se]] [[use|usa]] [[have got|tener]] [[for|para]] [[hair|pelo]] [[and|y]] [[eyes|ojos]] [[in|en]] [[descriptions|descripciones]].',
        correctAnswer: true,
        explanation: 'Sí. She has got long hair. He has got blue eyes.',
      }],
    },
    topicName: 'Grammar',
  },
];
