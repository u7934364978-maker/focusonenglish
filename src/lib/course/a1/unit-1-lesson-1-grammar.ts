/**
 * Unidad 1 — Lección 1: Gramática (verbo to be con I y You)
 * 15 ejercicios: 5 completar huecos, 5 elección múltiple, 3 ordenar oración, 2 verdadero/falso
 * Título de lección: "Verbo to be"
 */

import { Exercise } from '@/lib/exercise-generator';

const LESSON_TITLE = 'Verbo to be';
const INSTRUCTIONS_FILL = 'Elige la forma correcta del verbo to be (am, are o is) para cada frase.';
const INSTRUCTIONS_MULTIPLE = 'Elige la frase o la forma correcta.';
const INSTRUCTIONS_ORDER = 'Ordena las palabras para formar una oración correcta.';
const INSTRUCTIONS_TF = 'Indica si la afirmación es verdadera o falsa.';

export const UNIT_1_LESSON_1_GRAMMAR: Exercise[] = [
  // ─── 1–5: Completar huecos (opciones) ─────────────────────────────────────
  {
    id: 'a1-u1-l1-g1',
    type: 'fill-blank',
    level: 'A1',
    topic: 'Verb To Be',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_FILL,
      questions: [
        {
          question: '[[I|Yo]] ____ [[Maria|María]].',
          options: ['am', 'are', 'is'],
          correctAnswer: 'am',
          explanation: '[[With|Con]] "[[I|Yo]]" [[we|nosotros]] [[always|siempre]] [[use|usamos]] "[[am|soy/estoy]]".',
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a1-u1-l1-g2',
    type: 'fill-blank',
    level: 'A1',
    topic: 'Verb To Be',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_FILL,
      questions: [
        {
          question: '[[I|Yo]] ____ [[a|un]] [[student|estudiante]].',
          options: ['am', 'are', 'is'],
          correctAnswer: 'am',
          explanation: '[[Correct|Correcto]]: "[[I|Yo]] [[am|soy]] [[a|un]] [[student|estudiante]]".',
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a1-u1-l1-g3',
    type: 'fill-blank',
    level: 'A1',
    topic: 'Verb To Be',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_FILL,
      questions: [
        {
          question: '[[You|Tú]] ____ [[my|mi]] [[friend|amigo]].',
          options: ['am', 'are', 'is'],
          correctAnswer: 'are',
          explanation: '[[With|Con]] "[[you|tú]]" [[we|nosotros]] [[use|usamos]] "[[are|eres/estás]]".',
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a1-u1-l1-g4',
    type: 'fill-blank',
    level: 'A1',
    topic: 'Verb To Be',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_FILL,
      questions: [
        {
          question: '[[I|Yo]] ____ [[from|de]] [[Madrid|Madrid]].',
          options: ['am', 'are', 'is'],
          correctAnswer: 'am',
          explanation: '[[I|Yo]] [[am|soy]] [[from|de]] [[Madrid|Madrid]] = [[I am from Madrid|Soy de Madrid]].',
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a1-u1-l1-g5',
    type: 'fill-blank',
    level: 'A1',
    topic: 'Verb To Be',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_FILL,
      questions: [
        {
          question: '[[You|Tú]] ____ [[twenty-five|veinticinco]] [[years|años]] [[old|de edad]].',
          options: ['am', 'are', 'is'],
          correctAnswer: 'are',
          explanation: '[[We|Nosotros]] [[say|decimos]] "[[You are|Tú tienes]] ... [[years old|años]]".',
        },
      ],
    },
    topicName: 'Grammar',
  },

  // ─── 6–10: Elección múltiple (gramática) ───────────────────────────────────
  {
    id: 'a1-u1-l1-g6',
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
            '[[I|Yo]] [[am|soy]] [[twenty|veinte]] [[years old|años]].',
            '[[I|Yo]] [[twenty|veinte]] [[am|soy]] [[years old|años]].',
            '[[I|Yo]] [[years old|años]] [[am|soy]] [[twenty|veinte]].',
          ],
          correctAnswer: 0,
          explanation: '[[Correct|Correcto]]: [[I am|Yo tengo]] + [[number|número]] + [[years old|años]].',
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a1-u1-l1-g7',
    type: 'multiple-choice',
    level: 'A1',
    topic: 'Verb To Be',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_MULTIPLE,
      questions: [
        {
          question: '[[Choose|Elige]] [[the|la]] [[correct|correcta]] [[form|forma]] [[for|para]] "[[My name is|Mi nombre es]]...":',
          options: [
            '[[My|Mi]] [[name|nombre]] [[am|soy]] [[Carlos|Carlos]].',
            '[[My|Mi]] [[name|nombre]] [[is|es]] [[Carlos|Carlos]].',
            '[[My|Mi]] [[name|nombre]] [[are|eres]] [[Carlos|Carlos]].',
          ],
          correctAnswer: 1,
          explanation: '[[We|Nosotros]] [[say|decimos]] "[[My name is|Mi nombre es]]" + [[name|nombre]].',
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a1-u1-l1-g8',
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
            '[[You|Tú]] [[is|es]] [[from|de]] [[Spain|España]].',
            '[[You|Tú]] [[are|eres]] [[from|de]] [[Spain|España]].',
            '[[You|Tú]] [[am|soy]] [[from|de]] [[Spain|España]].',
          ],
          correctAnswer: 1,
          explanation: '[[With|Con]] "[[you|tú]]" [[we|nosotros]] [[use|usamos]] "[[are|eres]]", [[not|no]] "[[is|es]]" [[or|ni]] "[[am|soy]]".',
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a1-u1-l1-g9',
    type: 'multiple-choice',
    level: 'A1',
    topic: 'Verb To Be',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_MULTIPLE,
      questions: [
        {
          question: '[[Complete|Completa]]: "[[I|Yo]] ____ [[a|una]] [[teacher|profesora]]."',
          options: ['[[am|soy]]', '[[is|es]]', '[[are|eres]]'],
          correctAnswer: 0,
          explanation: '[[I|Yo]] [[am|soy]] [[a|una]] [[teacher|profesora]]. [[I|Yo]] → [[am|soy]].',
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a1-u1-l1-g10',
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
            '[[You|Tú]] [[are|eres]] [[my|mi]] [[friend|amigo]].',
            '[[You|Tú]] [[am|soy]] [[my|mi]] [[friend|amigo]].',
            '[[You|Tú]] [[is|es]] [[my|mi]] [[friend|amigo]].',
          ],
          correctAnswer: 0,
          explanation: '[[You|Tú]] [[are|eres]] = [[forma correcta|forma correcta]] [[for|para]] "[[you|tú]]".',
        },
      ],
    },
    topicName: 'Grammar',
  },

  // ─── 11–13: Ordenar palabras (oración) ─────────────────────────────────────
  {
    id: 'a1-u1-l1-g11',
    type: 'sentence-building',
    level: 'A1',
    topic: 'Verb To Be',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_ORDER,
      correctSentence: '[[My|Mi]] [[name|nombre]] [[is|es]] [[Ana|Ana]].',
      words: ['[[name|nombre]]', '[[My|Mi]]', '[[is|es]]', '[[Ana|Ana]].'],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a1-u1-l1-g12',
    type: 'sentence-building',
    level: 'A1',
    topic: 'Verb To Be',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_ORDER,
      correctSentence: '[[I|Yo]] [[am|soy]] [[from|de]] [[Barcelona|Barcelona]].',
      words: ['[[am|soy]]', '[[I|Yo]]', '[[from|de]]', '[[Barcelona|Barcelona]].'],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a1-u1-l1-g13',
    type: 'sentence-building',
    level: 'A1',
    topic: 'Verb To Be',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_ORDER,
      correctSentence: '[[I|Yo]] [[am|tengo]] [[thirty|treinta]] [[years|años]] [[old|de edad]].',
      words: ['[[am|tengo]]', '[[I|Yo]]', '[[years|años]]', '[[thirty|treinta]]', '[[old|de edad]].'],
    },
    topicName: 'Grammar',
  },

  // ─── 14–15: Verdadero / Falso (forma) ──────────────────────────────────────
  {
    id: 'a1-u1-l1-g14',
    type: 'true-false',
    level: 'A1',
    topic: 'Verb To Be',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_TF,
      questions: [
        {
          question: '"[[You|Tú]] [[am|soy]] [[my|mi]] [[teacher|profesor]]" [[is|es]] [[a|una]] [[correct|correcta]] [[sentence|frase]] [[in|en]] [[English|inglés]].',
          options: ['[[True|Verdadero]]', '[[False|Falso]]'],
          correctAnswer: 'False',
          explanation: '[[False|Falso]]. [[With|Con]] "[[you|tú]]" [[we|nosotros]] [[use|usamos]] "[[are|eres]]", [[not|no]] "[[am|soy]]". [[Correct|Correcto]]: "[[You are|Tú eres]] [[my|mi]] [[teacher|profesor]]".',
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a1-u1-l1-g15',
    type: 'true-false',
    level: 'A1',
    topic: 'Verb To Be',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_TF,
      questions: [
        {
          question: '"[[I|Yo]] [[am|soy]] [[from|de]] [[Spain|España]]" [[is|es]] [[correct|correcta]] [[in|en]] [[English|inglés]].',
          options: ['[[True|Verdadero]]', '[[False|Falso]]'],
          correctAnswer: 'True',
          explanation: '[[True|Verdadero]]. [[I|Yo]] + [[am|soy]] + [[from|de]] + [[place|lugar]] [[is|es]] [[correct|correcto]].',
        },
      ],
    },
    topicName: 'Grammar',
  },
];
