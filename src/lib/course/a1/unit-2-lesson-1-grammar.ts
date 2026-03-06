/**
 * Unidad 2 — Lección 1: Gramática (verbo to be con He/She/It/We/They)
 * 15 ejercicios: 5 completar huecos, 5 elección múltiple, 3 ordenar oración, 2 verdadero/falso
 * Título de lección: "Verb To Be"
 */

import { Exercise } from '@/lib/exercise-generator';

const LESSON_TITLE = 'Verb To Be';
const INSTRUCTIONS_FILL = 'Elige la forma correcta del verbo to be (is o are) para cada frase.';
const INSTRUCTIONS_MULTIPLE = 'Elige la frase o la forma correcta.';
const INSTRUCTIONS_ORDER = 'Ordena las palabras para formar una oración correcta.';
const INSTRUCTIONS_TF = 'Indica si la afirmación es verdadera o falsa.';

export const UNIT_2_LESSON_1_GRAMMAR: Exercise[] = [
  // ─── 1–5: Completar huecos (opciones) ─────────────────────────────────────
  {
    id: 'a1-u2-l1-g1',
    type: 'fill-blank',
    level: 'A1',
    topic: 'Verb To Be',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_FILL,
      questions: [
        {
          question: '[[He|Él]] ____ [[my|mi]] [[brother|hermano]].',
          options: ['is', 'are'],
          correctAnswer: 'is',
          explanation: '[[With|Con]] "[[He|Él]]" [[we|nosotros]] [[always|siempre]] [[use|usamos]] "[[is|es/está]]".',
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a1-u2-l1-g2',
    type: 'fill-blank',
    level: 'A1',
    topic: 'Verb To Be',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_FILL,
      questions: [
        {
          question: '[[She|Ella]] ____ [[a|una]] [[teacher|profesora]].',
          options: ['is', 'are'],
          correctAnswer: 'is',
          explanation: '[[With|Con]] "[[She|Ella]]" [[we|nosotros]] [[use|usamos]] "[[is|es/está]]".',
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a1-u2-l1-g3',
    type: 'fill-blank',
    level: 'A1',
    topic: 'Verb To Be',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_FILL,
      questions: [
        {
          question: '[[We|Nosotros]] ____ [[friends|amigos]].',
          options: ['is', 'are'],
          correctAnswer: 'are',
          explanation: '[[With|Con]] "[[We|Nosotros]]" [[we|nosotros]] [[use|usamos]] "[[are|somos/estamos]]".',
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a1-u2-l1-g4',
    type: 'fill-blank',
    level: 'A1',
    topic: 'Verb To Be',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_FILL,
      questions: [
        {
          question: '[[They|Ellos]] ____ [[from|de]] [[France|Francia]].',
          options: ['is', 'are'],
          correctAnswer: 'are',
          explanation: '[[With|Con]] "[[They|Ellos]]" [[we|nosotros]] [[use|usamos]] "[[are|son/están]]".',
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a1-u2-l1-g5',
    type: 'fill-blank',
    level: 'A1',
    topic: 'Verb To Be',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_FILL,
      questions: [
        {
          question: '[[It|Eso]] ____ [[a|un]] [[book|libro]].',
          options: ['is', 'are'],
          correctAnswer: 'is',
          explanation: '[[With|Con]] "[[It|Eso/Él/Ella]]" (cosa o animal) [[we|nosotros]] [[use|usamos]] "[[is|es/está]]".',
        },
      ],
    },
    topicName: 'Grammar',
  },

  // ─── 6–10: Elección múltiple (gramática) ───────────────────────────────────
  {
    id: 'a1-u2-l1-g6',
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
            '[[He|Él]] [[are|son]] [[a|un]] [[doctor|médico]].',
            '[[He|Él]] [[is|es]] [[a|un]] [[doctor|médico]].',
            '[[He|Él]] [[am|soy]] [[a|un]] [[doctor|médico]].',
          ],
          correctAnswer: 1,
          explanation: '[[He|Él]] + [[is|es]] = [[forma correcta|forma correcta]]. [[He|Él]] → [[is|es/está]].',
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a1-u2-l1-g7',
    type: 'multiple-choice',
    level: 'A1',
    topic: 'Verb To Be',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_MULTIPLE,
      questions: [
        {
          question: '[[Choose|Elige]] [[the|la]] [[correct|correcta]] [[form|forma]] [[of|del]] "[[to be|ser/estar]]" [[for|para]] "[[She|Ella]]":',
          options: ['[[am|soy]]', '[[are|eres/somos]]', '[[is|es/está]]'],
          correctAnswer: 2,
          explanation: '[[She|Ella]] → [[is|es/está]]. [[She is|Ella es]] [[the|la]] [[correct|forma correcta]].',
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a1-u2-l1-g8',
    type: 'multiple-choice',
    level: 'A1',
    topic: 'Verb To Be',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_MULTIPLE,
      questions: [
        {
          question: '[[Which|Cuál]] [[is|es]] [[correct|correcta]]?',
          options: [
            '[[They|Ellos]] [[is|es]] [[students|estudiantes]].',
            '[[They|Ellos]] [[am|soy]] [[students|estudiantes]].',
            '[[They|Ellos]] [[are|son]] [[students|estudiantes]].',
          ],
          correctAnswer: 2,
          explanation: '[[With|Con]] "[[They|Ellos]]" [[we|nosotros]] [[use|usamos]] "[[are|son]]", [[not|no]] "[[is|es]]".',
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a1-u2-l1-g9',
    type: 'multiple-choice',
    level: 'A1',
    topic: 'Verb To Be',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_MULTIPLE,
      questions: [
        {
          question: '[[Complete|Completa]]: "[[We|Nosotros]] ____ [[happy|felices]]."',
          options: ['[[is|es]]', '[[are|somos]]', '[[am|soy]]'],
          correctAnswer: 1,
          explanation: '[[We|Nosotros]] [[are|somos]] [[happy|felices]]. [[We|Nosotros]] → [[are|somos/estamos]].',
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a1-u2-l1-g10',
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
            '[[It|Eso]] [[are|son]] [[a|un]] [[cat|gato]].',
            '[[It|Eso]] [[is|es]] [[a|un]] [[cat|gato]].',
            '[[It|Eso]] [[am|soy]] [[a|un]] [[cat|gato]].',
          ],
          correctAnswer: 1,
          explanation: '[[It|Eso/Él/Ella]] → [[is|es/está]]. [[It is|Es]] [[the|la]] [[correct|forma correcta]] [[for|para]] [[things|cosas]] [[and|y]] [[animals|animales]].',
        },
      ],
    },
    topicName: 'Grammar',
  },

  // ─── 11–13: Ordenar palabras (oración) ─────────────────────────────────────
  {
    id: 'a1-u2-l1-g11',
    type: 'sentence-building',
    level: 'A1',
    topic: 'Verb To Be',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_ORDER,
      correctSentence: '[[She|Ella]] [[is|es]] [[from|de]] [[Italy|Italia]].',
      words: ['[[is|es]]', '[[She|Ella]]', '[[from|de]]', '[[Italy|Italia]].'],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a1-u2-l1-g12',
    type: 'sentence-building',
    level: 'A1',
    topic: 'Verb To Be',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_ORDER,
      correctSentence: '[[They|Ellos]] [[are|son]] [[my|mis]] [[friends|amigos]].',
      words: ['[[are|son]]', '[[They|Ellos]]', '[[friends|amigos]].', '[[my|mis]]'],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a1-u2-l1-g13',
    type: 'sentence-building',
    level: 'A1',
    topic: 'Verb To Be',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_ORDER,
      correctSentence: '[[He|Él]] [[is|es]] [[a|un]] [[good|buen]] [[student|estudiante]].',
      words: ['[[is|es]]', '[[He|Él]]', '[[student|estudiante]].', '[[a|un]]', '[[good|buen]]'],
    },
    topicName: 'Grammar',
  },

  // ─── 14–15: Verdadero / Falso (forma) ──────────────────────────────────────
  {
    id: 'a1-u2-l1-g14',
    type: 'true-false',
    level: 'A1',
    topic: 'Verb To Be',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_TF,
      questions: [
        {
          question: '"[[She|Ella]] [[are|son]] [[a|una]] [[nurse|enfermera]]" [[is|es]] [[a|una]] [[correct|correcta]] [[sentence|frase]] [[in|en]] [[English|inglés]].',
          options: ['[[True|Verdadero]]', '[[False|Falso]]'],
          correctAnswer: 'False',
          explanation: '[[False|Falso]]. [[With|Con]] "[[She|Ella]]" [[we|nosotros]] [[use|usamos]] "[[is|es]]", [[not|no]] "[[are|son]]". [[Correct|Correcto]]: "[[She is|Ella es]] [[a|una]] [[nurse|enfermera]]".',
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a1-u2-l1-g15',
    type: 'true-false',
    level: 'A1',
    topic: 'Verb To Be',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_TF,
      questions: [
        {
          question: '"[[They|Ellos]] [[are|son]] [[from|de]] [[Spain|España]]" [[is|es]] [[correct|correcta]] [[in|en]] [[English|inglés]].',
          options: ['[[True|Verdadero]]', '[[False|Falso]]'],
          correctAnswer: 'True',
          explanation: '[[True|Verdadero]]. [[They|Ellos]] + [[are|son]] + [[from|de]] + [[place|lugar]] [[is|es]] [[correct|correcto]].',
        },
      ],
    },
    topicName: 'Grammar',
  },
];
