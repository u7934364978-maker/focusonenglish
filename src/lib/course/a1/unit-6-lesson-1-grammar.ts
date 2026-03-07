/**
 * Unidad 6 — Lección 1: Gramática (adjetivos posesivos + posesivo 's)
 * 15 ejercicios: 5 fill-blank, 5 multiple-choice, 3 sentence-building, 2 true-false
 */

import { Exercise } from '@/lib/exercise-generator';

const LESSON_TITLE = "Familia y posesivos: adjetivos y 's";
const TOPIC = 'Family & Possessives';

const INSTRUCTIONS_FILL = "Elige el adjetivo posesivo correcto para cada frase.";
const INSTRUCTIONS_MULTIPLE = "Elige la forma posesiva correcta o la oración correcta.";
const INSTRUCTIONS_ORDER = "Ordena las palabras para formar una oración correcta.";
const INSTRUCTIONS_TF = "Indica si la afirmación es verdadera o falsa.";

export const UNIT_6_LESSON_1_GRAMMAR: Exercise[] = [
  // ─── 1–5: fill-blank (adjetivo posesivo) ──────────────────────────────────
  {
    id: 'a1-u6-l1-g1',
    type: 'fill-blank',
    level: 'A1',
    topic: TOPIC,
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_FILL,
      questions: [{
        question: '[[This|Este]] ____ [[is|es]] [[my|mi]] [[book|libro]].',
        options: ['[[is|es]]', '[[are|son]]', '[[am|soy]]'],
        correctAnswer: '[[is|es]]',
        explanation: 'Con "this" usamos "is". El posesivo "my" ya está en la frase.',
      }],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a1-u6-l1-g2',
    type: 'fill-blank',
    level: 'A1',
    topic: TOPIC,
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_FILL,
      questions: [{
        question: '____ [[mother|madre]] [[lives|vive]] [[in|en]] [[Madrid|Madrid]].',
        options: ['[[My|Mi]]', '[[Your|Tu]]', '[[His|Su]]', '[[Her|Su]]'],
        correctAnswer: '[[My|Mi]]',
        explanation: '"My" corresponde a "I" (yo).',
      }],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a1-u6-l1-g3',
    type: 'fill-blank',
    level: 'A1',
    topic: TOPIC,
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_FILL,
      questions: [{
        question: '[[That|Esa]] [[is|es]] ____ [[sister|hermana]].',
        options: ['[[his|su]]', '[[her|su]]', '[[their|su]]', '[[our|nuestra]]'],
        correctAnswer: '[[her|su]]',
        explanation: '"Her" se usa para "she" (ella).',
      }],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a1-u6-l1-g4',
    type: 'fill-blank',
    level: 'A1',
    topic: TOPIC,
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_FILL,
      questions: [{
        question: '____ [[grandfather|abuelo]] [[is|es]] [[seventy|setenta]] [[years|años]] [[old|de edad]].',
        options: ['[[Our|Nuestro]]', '[[Their|Su]]', '[[Your|Tu]]', '[[My|Mi]]'],
        correctAnswer: '[[Our|Nuestro]]',
        explanation: '"Our" corresponde a "we" (nosotros).',
      }],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a1-u6-l1-g5',
    type: 'fill-blank',
    level: 'A1',
    topic: TOPIC,
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_FILL,
      questions: [{
        question: '[[They|Ellos]] [[love|aman]] ____ [[parents|padres]].',
        options: ['[[their|su]]', '[[our|nuestros]]', '[[your|tu]]', '[[his|su]]'],
        correctAnswer: '[[their|su]]',
        explanation: '"Their" corresponde a "they" (ellos).',
      }],
    },
    topicName: 'Grammar',
  },

  // ─── 6–10: multiple-choice ───────────────────────────────────────────────
  {
    id: 'a1-u6-l1-g6',
    type: 'multiple-choice',
    level: 'A1',
    topic: TOPIC,
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_MULTIPLE,
      questions: [{
        question: '[[Which|Cuál]] [[sentence|oración]] [[is|es]] [[correct|correcta]]?',
        options: [
          '[[That is Tom\'s sister.|Esa es la hermana de Tom.]]',
          '[[That is Tom sister.|Esa es Tom hermana.]]',
          '[[That is Toms sister.|Esa es Toms hermana.]]',
        ],
        correctAnswer: 0,
        explanation: 'El posesivo se forma con nombre + apóstrofe + s: Tom\'s.',
      }],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a1-u6-l1-g7',
    type: 'multiple-choice',
    level: 'A1',
    topic: TOPIC,
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_MULTIPLE,
      questions: [{
        question: '[[Choose|Elige]] [[the|la]] [[correct|correcta]] [[form|forma]] [[for|para]] "[[la hermana de Ana|Ana\'s sister]]":',
        options: [
          '[[Ana\'s sister|la hermana de Ana]]',
          '[[Ana sister|Ana hermana]]',
          '[[Anas sister|Anas hermana]]',
        ],
        correctAnswer: 0,
        explanation: 'Posesivo \'s: nombre + \'s + sustantivo.',
      }],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a1-u6-l1-g8',
    type: 'multiple-choice',
    level: 'A1',
    topic: TOPIC,
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_MULTIPLE,
      questions: [{
        question: '[[He|Él]] [[has|tiene]] [[a|un]] [[brother|hermano]]. ____ [[brother|hermano]] [[is|es]] [[tall|alto]].',
        options: ['[[His|Su]]', '[[Her|Su]]', '[[Their|Su]]', '[[Our|Nuestro]]'],
        correctAnswer: 0,
        explanation: '"His" es el posesivo de "he".',
      }],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a1-u6-l1-g9',
    type: 'multiple-choice',
    level: 'A1',
    topic: TOPIC,
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_MULTIPLE,
      questions: [{
        question: '[[What|Qué]] [[is|es]] [[correct|correcto]]?',
        options: [
          '[[My father\'s car|El coche de mi padre]]',
          '[[My fathers car|Mi padre coche]]',
          '[[My father car|Mi padre coche]]',
        ],
        correctAnswer: 0,
        explanation: 'Posesivo \'s: father\'s = de (mi) padre.',
      }],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a1-u6-l1-g10',
    type: 'multiple-choice',
    level: 'A1',
    topic: TOPIC,
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_MULTIPLE,
      questions: [{
        question: '[[We|Nosotros]] [[have|tenemos]] [[a|una]] [[grandmother|abuela]]. ____ [[grandmother|abuela]] [[lives|vive]] [[here|aquí]].',
        options: ['[[Our|Nuestra]]', '[[Their|Su]]', '[[Your|Tu]]', '[[My|Mi]]'],
        correctAnswer: 0,
        explanation: '"Our" es el posesivo de "we".',
      }],
    },
    topicName: 'Grammar',
  },

  // ─── 11–13: sentence-building ────────────────────────────────────────────
  {
    id: 'a1-u6-l1-g11',
    type: 'sentence-building',
    level: 'A1',
    topic: TOPIC,
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_ORDER,
      correctSentence: "[[That|Esa]] [[is|es]] [[Tom's|de Tom]] [[sister|hermana]].",
      words: ["[[Tom's|de Tom]]", '[[sister|hermana]].', '[[That|Esa]]', '[[is|es]]'],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a1-u6-l1-g12',
    type: 'sentence-building',
    level: 'A1',
    topic: TOPIC,
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_ORDER,
      correctSentence: '[[Her|Su]] [[brother|hermano]] [[is|es]] [[tall|alto]].',
      words: ['[[tall|alto]].', '[[Her|Su]]', '[[brother|hermano]]', '[[is|es]]'],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a1-u6-l1-g13',
    type: 'sentence-building',
    level: 'A1',
    topic: TOPIC,
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_ORDER,
      correctSentence: '[[Our|Nuestra]] [[grandmother|abuela]] [[lives|vive]] [[here|aquí]].',
      words: ['[[here|aquí]].', '[[Our|Nuestra]]', '[[grandmother|abuela]]', '[[lives|vive]]'],
    },
    topicName: 'Grammar',
  },

  // ─── 14–15: true-false ───────────────────────────────────────────────────
  {
    id: 'a1-u6-l1-g14',
    type: 'true-false',
    level: 'A1',
    topic: TOPIC,
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_TF,
      questions: [{
        question: "[[We use 's after a name to show possession.|Usamos 's después de un nombre para mostrar posesión.]]",
        options: ['[[True|Verdadero]]', '[[False|Falso]]'],
        correctAnswer: 'True',
        explanation: 'Correcto: Tom\'s sister = la hermana de Tom.',
      }],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a1-u6-l1-g15',
    type: 'true-false',
    level: 'A1',
    topic: TOPIC,
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_TF,
      questions: [{
        question: "[['Your' is the possessive for 'she'.|'Your' es el posesivo de 'she'.]]",
        options: ['[[True|Verdadero]]', '[[False|Falso]]'],
        correctAnswer: 'False',
        explanation: 'Falso. "Your" es para "you"; "her" es para "she".',
      }],
    },
    topicName: 'Grammar',
  },
];
