/**
 * Unidad 3 — Lección 1: Gramática (verbo to be: negativa e interrogativa)
 * 15 ejercicios: 5 completar huecos, 5 elección múltiple, 3 ordenar oración, 2 verdadero/falso
 * Título de lección: "Verbo to be: negativa e interrogativa"
 */

import { Exercise } from '@/lib/exercise-generator';

const LESSON_TITLE = 'Verbo to be: negativa e interrogativa';
const INSTRUCTIONS_FILL = 'Elige la forma negativa o interrogativa correcta del verbo to be para cada frase.';
const INSTRUCTIONS_MULTIPLE = 'Elige la frase o la forma correcta.';
const INSTRUCTIONS_ORDER = 'Ordena las palabras para formar una oración correcta.';
const INSTRUCTIONS_TF = 'Indica si la afirmación es verdadera o falsa.';

export const UNIT_3_LESSON_1_GRAMMAR: Exercise[] = [
  // ─── 1–5: Completar huecos (negativa / interrogativa) ─────────────────────
  {
    id: 'a1-u3-l1-g1',
    type: 'fill-blank',
    level: 'A1',
    topic: 'Verb To Be',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_FILL,
      questions: [
        {
          question: '[[I|Yo]] ____ [[tired|cansado]]. [[I|Yo]] [[am|estoy]] [[fine|bien]].',
          options: ["[[am not|no estoy]]", "[[isn't|no está]]", "[[aren't|no están]]"],
          correctAnswer: "[[am not|no estoy]]",
          explanation: '[[With|Con]] "[[I|Yo]]" [[we|nosotros]] [[use|usamos]] "[[am not|no estoy]]" [[for|para]] [[negative|negación]].',
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a1-u3-l1-g2',
    type: 'fill-blank',
    level: 'A1',
    topic: 'Verb To Be',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_FILL,
      questions: [
        {
          question: '[[She|Ella]] ____ [[sad|triste]]. [[She|Ella]] [[is|está]] [[happy|feliz]].',
          options: ["[[am not|no estoy]]", "[[isn't|no está]]", "[[aren't|no están]]"],
          correctAnswer: "[[isn't|no está]]",
          explanation: '[[With|Con]] "[[she|ella]]" [[we|nosotros]] [[use|usamos]] "[[isn\'t|no está]]" ([[is not|is not]]).',
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a1-u3-l1-g3',
    type: 'fill-blank',
    level: 'A1',
    topic: 'Verb To Be',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_FILL,
      questions: [
        {
          question: '[[They|Ellos]] ____ [[hungry|hambrientos]]. [[They|Ellos]] [[just|acaban]] [[ate|de comer]].',
          options: ["[[am not|no estoy]]", "[[isn't|no está]]", "[[aren't|no están]]"],
          correctAnswer: "[[aren't|no están]]",
          explanation: '[[With|Con]] "[[they|ellos]]" [[we|nosotros]] [[use|usamos]] "[[aren\'t|no están]]" ([[are not|are not]]).',
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a1-u3-l1-g4',
    type: 'fill-blank',
    level: 'A1',
    topic: 'Verb To Be',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_FILL,
      questions: [
        {
          question: '____ [[you|tú]] [[angry|enfadado]]? [[Yes|Sí]], [[I|yo]] [[am|estoy]].',
          options: ["[[Is|Está]]", "[[Am|Estoy]]", "[[Are|Estás]]"],
          correctAnswer: "[[Are|Estás]]",
          explanation: '[[Questions|Preguntas]] [[with|con]] "[[you|tú]]": [[Are|Estás]] + [[you|tú]] + [[adjective|adjetivo]]?',
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a1-u3-l1-g5',
    type: 'fill-blank',
    level: 'A1',
    topic: 'Verb To Be',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_FILL,
      questions: [
        {
          question: "____ [[he|él]] [[bored|aburrido]]? [[No|No]], [[he|él]] [[isn't|no está]].",
          options: ["[[Are|Están]]", "[[Is|Está]]", "[[Am|Estoy]]"],
          correctAnswer: "[[Is|Está]]",
          explanation: '[[Questions|Preguntas]] [[with|con]] "[[he|él]]": [[Is|Está]] + [[he|él]] + [[adjective|adjetivo]]?',
        },
      ],
    },
    topicName: 'Grammar',
  },

  // ─── 6–10: Elección múltiple (gramática) ────────────────────────────────────
  {
    id: 'a1-u3-l1-g6',
    type: 'multiple-choice',
    level: 'A1',
    topic: 'Verb To Be',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_MULTIPLE,
      questions: [
        {
          question: '[[Which|Cuál]] [[sentence|frase]] [[is|es]] [[correct|correcta]]?',
          options: [
            '[[I|Yo]] [[not am|no estoy]] [[scared|asustado]].',
            '[[I|Yo]] [[am not|no estoy]] [[scared|asustado]].',
            '[[I|Yo]] [[isn\'t|no está]] [[scared|asustado]].',
          ],
          correctAnswer: 1,
          explanation: '[[Correct|Correcto]]: "[[I am not|Yo no estoy]]" — [[the|la]] [[negative|negación]] [[of|de]] "[[I am|Yo estoy]]" [[is|es]] "[[I am not|Yo no estoy]]".',
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a1-u3-l1-g7',
    type: 'multiple-choice',
    level: 'A1',
    topic: 'Verb To Be',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_MULTIPLE,
      questions: [
        {
          question: '[[Choose|Elige]] [[the|la]] [[correct|correcta]] [[question|pregunta]] [[for|para]] "[[She|Ella]] [[is|está]] [[excited|emocionada]]":',
          options: [
            '[[Are|Están]] [[she|ella]] [[excited|emocionada]]?',
            '[[Am|Estoy]] [[she|ella]] [[excited|emocionada]]?',
            '[[Is|Está]] [[she|ella]] [[excited|emocionada]]?',
          ],
          correctAnswer: 2,
          explanation: '[[With|Con]] "[[she|ella]]" [[questions|preguntas]] [[use|usan]] "[[Is|Está]]" [[at|al]] [[the beginning|principio]].',
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a1-u3-l1-g8',
    type: 'multiple-choice',
    level: 'A1',
    topic: 'Verb To Be',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_MULTIPLE,
      questions: [
        {
          question: '[[Which|Cuál]] [[is|es]] [[the|la]] [[short|corta]] [[answer|respuesta]] [[for|para]] "[[Are|Estás]] [[you|tú]] [[hungry|hambriento]]?" ([[no|no]])?',
          options: [
            '[[No, I am not.|No, no estoy.]]',
            '[[No, I isn\'t.|No, no está.]]',
            '[[No, I aren\'t.|No, no están.]]',
          ],
          correctAnswer: 0,
          explanation: '"[[No, I am not.|No, no estoy.]]" — [[short|corta]] [[negative|negativa]] [[answer|respuesta]] [[for|para]] "[[I|yo]]".',
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a1-u3-l1-g9',
    type: 'multiple-choice',
    level: 'A1',
    topic: 'Verb To Be',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_MULTIPLE,
      questions: [
        {
          question: '[[Complete|Completa]]: "[[We|Nosotros]] ____ [[cold|fríos]]. [[We|Nosotros]] [[are|estamos]] [[warm|calientes]]."',
          options: ['[[are not|no estamos]]', '[[is not|no está]]', '[[am not|no estoy]]'],
          correctAnswer: 0,
          explanation: '[[We|Nosotros]] → [[are not|no estamos]] ([[contraction|contracción]]: [[aren\'t|no están]]).',
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a1-u3-l1-g10',
    type: 'multiple-choice',
    level: 'A1',
    topic: 'Verb To Be',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_MULTIPLE,
      questions: [
        {
          question: '[[Which|Cuál]] [[sentence|frase]] [[is|es]] [[correct|correcta]]?',
          options: [
            '[[Is|Está]] [[they|ellos]] [[tired|cansados]]?',
            '[[Am|Estoy]] [[they|ellos]] [[tired|cansados]]?',
            '[[Are|Están]] [[they|ellos]] [[tired|cansados]]?',
          ],
          correctAnswer: 2,
          explanation: '"[[They|Ellos]]" → [[question|pregunta]] [[with|con]] "[[Are|Están]]": [[Are|Están]] [[they|ellos]] + [[adjective|adjetivo]]?',
        },
      ],
    },
    topicName: 'Grammar',
  },

  // ─── 11–13: Ordenar palabras (oración) ──────────────────────────────────────
  {
    id: 'a1-u3-l1-g11',
    type: 'sentence-building',
    level: 'A1',
    topic: 'Verb To Be',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_ORDER,
      correctSentence: '[[I|Yo]] [[am not|no estoy]] [[sad|triste]].',
      words: ['[[am not|no estoy]]', '[[I|Yo]]', '[[sad|triste]].'],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a1-u3-l1-g12',
    type: 'sentence-building',
    level: 'A1',
    topic: 'Verb To Be',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_ORDER,
      correctSentence: '[[Is|Está]] [[she|ella]] [[happy|feliz]]?',
      words: ['[[she|ella]]', '[[Is|Está]]', '[[happy|feliz]]?'],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a1-u3-l1-g13',
    type: 'sentence-building',
    level: 'A1',
    topic: 'Verb To Be',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_ORDER,
      correctSentence: '[[They|Ellos]] [[are not|no están]] [[hungry|hambrientos]].',
      words: ['[[are not|no están]]', '[[They|Ellos]]', '[[hungry|hambrientos]].'],
    },
    topicName: 'Grammar',
  },

  // ─── 14–15: Verdadero / Falso (forma) ───────────────────────────────────────
  {
    id: 'a1-u3-l1-g14',
    type: 'true-false',
    level: 'A1',
    topic: 'Verb To Be',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_TF,
      questions: [
        {
          question: '"[[She|Ella]] [[am not|no estoy]] [[tired|cansada]]" [[is|es]] [[a|una]] [[correct|correcta]] [[sentence|frase]] [[in|en]] [[English|inglés]].',
          options: ['[[True|Verdadero]]', '[[False|Falso]]'],
          correctAnswer: 'False',
          explanation: '[[False|Falso]]. [[With|Con]] "[[she|ella]]" [[we|nosotros]] [[use|usamos]] "[[isn\'t|no está]]", [[not|no]] "[[am not|no estoy]]". [[Correct|Correcto]]: "[[She isn\'t tired.|Ella no está cansada.]]"',
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a1-u3-l1-g15',
    type: 'true-false',
    level: 'A1',
    topic: 'Verb To Be',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_TF,
      questions: [
        {
          question: '"[[Are|Estás]] [[you|tú]] [[angry|enfadado]]?" [[is|es]] [[correct|correcta]] [[in|en]] [[English|inglés]].',
          options: ['[[True|Verdadero]]', '[[False|Falso]]'],
          correctAnswer: 'True',
          explanation: '[[True|Verdadero]]. [[Are|Estás]] + [[you|tú]] + [[adjective|adjetivo]]? [[is|es]] [[the|la]] [[correct|correcta]] [[structure|estructura]] [[for|para]] [[questions|preguntas]] [[with|con]] "[[you|tú]]".',
        },
      ],
    },
    topicName: 'Grammar',
  },
];
