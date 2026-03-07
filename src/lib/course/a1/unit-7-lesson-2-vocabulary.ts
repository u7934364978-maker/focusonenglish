/**
 * Unidad 7 — Lección 2: Vocabulario (colores y descripciones físicas)
 * 15 ejercicios: 6 multiple-choice, 4 matching, 3 fill-blank, 2 multiple-choice contexto
 */

import { Exercise } from '@/lib/exercise-generator';

const LESSON_TITLE = 'Vocabulario: colores y rasgos físicos';
const TOPIC = 'Colors & Physical Descriptions';

const INSTRUCTIONS_MC = 'Elige la palabra correcta para cada definición o contexto.';
const INSTRUCTIONS_MATCH = 'Relaciona cada palabra en inglés con su significado en español.';
const INSTRUCTIONS_FILL = 'Completa la frase con la palabra correcta.';
const INSTRUCTIONS_CTX = 'Elige la palabra correcta para la situación.';

export const UNIT_7_LESSON_2_VOCABULARY: Exercise[] = [
  // ─── 1–6: multiple-choice (colores y rasgos físicos) ───────────────────────
  {
    id: 'a1-u7-l2-v1',
    type: 'multiple-choice',
    level: 'A1',
    topic: TOPIC,
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_MC,
      questions: [{
        question: '[[What|Qué]] [[color|color]] [[is|es]] [[the|el]] [[sky|cielo]] [[on|en]] [[a|un]] [[sunny|soleado]] [[day|día]]?',
        options: ['[[red|rojo]]', '[[blue|azul]]', '[[green|verde]]', '[[yellow|amarillo]]'],
        correctAnswer: 1,
        explanation: 'The sky is blue.',
      }],
    },
    topicName: 'Vocabulary',
  },
  {
    id: 'a1-u7-l2-v2',
    type: 'multiple-choice',
    level: 'A1',
    topic: TOPIC,
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_MC,
      questions: [{
        question: '[[The|La]] [[opposite|opuesto]] [[of|de]] [[tall|alto]] [[is|es]] ____.',
        options: ['[[young|joven]]', '[[short|bajo]]', '[[old|mayor]]', '[[long|largo]]'],
        correctAnswer: 1,
        explanation: 'Short = bajo (altura).',
      }],
    },
    topicName: 'Vocabulary',
  },
  {
    id: 'a1-u7-l2-v3',
    type: 'multiple-choice',
    level: 'A1',
    topic: TOPIC,
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_MC,
      questions: [{
        question: '[[We|Se]] [[use|usa]] ____ [[to|para]] [[describe|describir]] [[hair|pelo]] [[length|longitud]].',
        options: ['[[tall|alto]]', '[[long|largo]]', '[[old|viejo]]', '[[blue|azul]]'],
        correctAnswer: 1,
        explanation: 'Long hair = pelo largo.',
      }],
    },
    topicName: 'Vocabulary',
  },
  {
    id: 'a1-u7-l2-v4',
    type: 'multiple-choice',
    level: 'A1',
    topic: TOPIC,
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_MC,
      questions: [{
        question: '[[The|El]] [[opposite|opuesto]] [[of|de]] [[young|joven]] [[is|es]] ____.',
        options: ['[[short|bajo]]', '[[tall|alto]]', '[[old|mayor]]', '[[long|largo]]'],
        correctAnswer: 2,
        explanation: 'Old = mayor, viejo.',
      }],
    },
    topicName: 'Vocabulary',
  },
  {
    id: 'a1-u7-l2-v5',
    type: 'multiple-choice',
    level: 'A1',
    topic: TOPIC,
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_MC,
      questions: [{
        question: '[[What|Qué]] [[word|palabra]] [[describes|describe]] [[the|el]] [[colour|color]] [[of|de]] [[grass|hierba]]?',
        options: ['[[red|rojo]]', '[[blue|azul]]', '[[green|verde]]', '[[yellow|amarillo]]'],
        correctAnswer: 2,
        explanation: 'Grass is green.',
      }],
    },
    topicName: 'Vocabulary',
  },
  {
    id: 'a1-u7-l2-v6',
    type: 'multiple-choice',
    level: 'A1',
    topic: TOPIC,
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_MC,
      questions: [{
        question: '[[Brown|Castaño]] [[hair|pelo]] [[is|es]] ____ [[in|en]] [[Spanish|español]].',
        options: ['[[rubio|blonde]]', '[[castaño|brown]]', '[[negro|black]]', '[[pelirrojo|red]]'],
        correctAnswer: 1,
        explanation: 'Brown = castaño (pelo).',
      }],
    },
    topicName: 'Vocabulary',
  },

  // ─── 7–10: matching ──────────────────────────────────────────────────────
  {
    id: 'a1-u7-l2-v7',
    type: 'matching',
    level: 'A1',
    topic: TOPIC,
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_MATCH,
      pairs: [
        { id: 'p1', left: '[[tall|alto]]', right: 'alto (altura)' },
        { id: 'p2', left: '[[short|bajo]]', right: 'bajo (altura)' },
        { id: 'p3', left: '[[young|joven]]', right: 'joven' },
        { id: 'p4', left: '[[old|mayor]]', right: 'mayor, viejo' },
        { id: 'p5', left: '[[long|largo]]', right: 'largo' },
      ],
    },
    topicName: 'Vocabulary',
  },
  {
    id: 'a1-u7-l2-v8',
    type: 'matching',
    level: 'A1',
    topic: TOPIC,
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_MATCH,
      pairs: [
        { id: 'p1', left: '[[red|rojo]]', right: 'rojo' },
        { id: 'p2', left: '[[blue|azul]]', right: 'azul' },
        { id: 'p3', left: '[[green|verde]]', right: 'verde' },
        { id: 'p4', left: '[[yellow|amarillo]]', right: 'amarillo' },
        { id: 'p5', left: '[[black|negro]]', right: 'negro' },
      ],
    },
    topicName: 'Vocabulary',
  },
  {
    id: 'a1-u7-l2-v9',
    type: 'matching',
    level: 'A1',
    topic: TOPIC,
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_MATCH,
      pairs: [
        { id: 'p1', left: '[[white|blanco]]', right: 'blanco' },
        { id: 'p2', left: '[[brown|marrón]]', right: 'marrón, castaño' },
        { id: 'p3', left: '[[hair|pelo]]', right: 'pelo' },
        { id: 'p4', left: '[[eyes|ojos]]', right: 'ojos' },
        { id: 'p5', left: '[[dark|oscuro]]', right: 'oscuro' },
      ],
    },
    topicName: 'Vocabulary',
  },
  {
    id: 'a1-u7-l2-v10',
    type: 'matching',
    level: 'A1',
    topic: TOPIC,
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_MATCH,
      pairs: [
        { id: 'p1', left: '[[She has long hair.|Ella tiene el pelo largo.]]', right: 'Ella tiene el pelo largo.' },
        { id: 'p2', left: '[[He is tall.|Él es alto.]]', right: 'Él es alto.' },
        { id: 'p3', left: '[[Her eyes are blue.|Sus ojos son azules.]]', right: 'Sus ojos son azules.' },
        { id: 'p4', left: '[[My brother is young.|Mi hermano es joven.]]', right: 'Mi hermano es joven.' },
        { id: 'p5', left: '[[The car is red.|El coche es rojo.]]', right: 'El coche es rojo.' },
      ],
    },
    topicName: 'Vocabulary',
  },

  // ─── 11–13: fill-blank ───────────────────────────────────────────────────
  {
    id: 'a1-u7-l2-v11',
    type: 'fill-blank',
    level: 'A1',
    topic: TOPIC,
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_FILL,
      questions: [{
        question: '[[She|Ella]] [[has|tiene]] ____ [[hair|pelo]]. [[It|Es]] [[is|es]] [[not|no]] [[short|corto]].',
        options: ['[[long|largo]]', '[[tall|alto]]', '[[old|viejo]]', '[[blue|azul]]'],
        correctAnswer: '[[long|largo]]',
        explanation: 'Long hair = pelo largo.',
      }],
    },
    topicName: 'Vocabulary',
  },
  {
    id: 'a1-u7-l2-v12',
    type: 'fill-blank',
    level: 'A1',
    topic: TOPIC,
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_FILL,
      questions: [{
        question: '[[My|Mi]] [[grandfather|abuelo]] [[is|es]] ____. [[He|Él]] [[is|es]] [[seventy|setenta]] [[years|años]] [[old|de edad]].',
        options: ['[[young|joven]]', '[[tall|alto]]', '[[old|mayor]]', '[[short|bajo]]'],
        correctAnswer: '[[old|mayor]]',
        explanation: 'Old = mayor (edad).',
      }],
    },
    topicName: 'Vocabulary',
  },
  {
    id: 'a1-u7-l2-v13',
    type: 'fill-blank',
    level: 'A1',
    topic: TOPIC,
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_FILL,
      questions: [{
        question: '[[His|Sus]] ____ [[are|son]] [[green|verdes]].',
        options: ['[[hair|pelo]]', '[[eyes|ojos]]', '[[hand|mano]]', '[[face|cara]]'],
        correctAnswer: '[[eyes|ojos]]',
        explanation: 'Eyes = ojos. His eyes are green.',
      }],
    },
    topicName: 'Vocabulary',
  },

  // ─── 14–15: multiple-choice contexto ──────────────────────────────────────
  {
    id: 'a1-u7-l2-v14',
    type: 'multiple-choice',
    level: 'A1',
    topic: TOPIC,
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_CTX,
      questions: [{
        question: '[[You|Tú]] [[describe|describes]] [[a|una]] [[person|persona]] [[who|que]] [[is|es]] [[not|no]] [[short|baja]]. [[She|Ella]] ____.',
        options: ['[[is short|es baja]]', '[[is tall|es alta]]', '[[is old|es mayor]]', '[[is young|es joven]]'],
        correctAnswer: 1,
        explanation: 'Si no es short (baja), es tall (alta).',
      }],
    },
    topicName: 'Vocabulary',
  },
  {
    id: 'a1-u7-l2-v15',
    type: 'multiple-choice',
    level: 'A1',
    topic: TOPIC,
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_CTX,
      questions: [{
        question: '[[You|Tú]] [[say|dices]] [[the|el]] [[colour|color]] [[of|del]] [[snow|nieve]]. [[It|Es]] ____.',
        options: ['[[red|rojo]]', '[[blue|azul]]', '[[white|blanco]]', '[[black|negro]]'],
        correctAnswer: 2,
        explanation: 'Snow is white.',
      }],
    },
    topicName: 'Vocabulary',
  },
];
