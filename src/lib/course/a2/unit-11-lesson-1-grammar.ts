/**
 * Unidad 11 — Lección 1: Gramática (Present Perfect Introduction)
 * 15 ejercicios: have/has + past participle, been, seen, eaten, gone
 */

import { Exercise } from '@/lib/exercise-generator';

const LESSON_TITLE = '[[Present Perfect|Presente Perfecto]]: [[Introduction|Introducción]]';
const INSTRUCTIONS_FILL = 'Elige la forma correcta del Present Perfect (have/has + past participle).';
const INSTRUCTIONS_MULTIPLE = 'Elige la frase o la forma correcta.';
const INSTRUCTIONS_ORDER = 'Ordena las palabras para formar una oración correcta.';
const INSTRUCTIONS_TF = 'Indica si la afirmación es verdadera o falsa.';

export const UNIT_11_LESSON_1_GRAMMAR: Exercise[] = [
  {
    id: 'a2-u11-l1-g1',
    type: 'fill-blank',
    level: 'A2',
    topic: 'Present Perfect',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_FILL,
      questions: [
        {
          question: '[[I|Yo]] ____ [[been|estado]] [[to|a]] [[Paris|París]].',
          options: ['[[have|he]]', '[[has|ha]]', '[[had|tuve]]'],
          correctAnswer: 'have',
          explanation: '[[With|Con]] "[[I|Yo]]" [[we|nosotros]] [[use|usamos]] "[[have|he]]" + [[past participle|participio pasado]].',
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a2-u11-l1-g2',
    type: 'fill-blank',
    level: 'A2',
    topic: 'Present Perfect',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_FILL,
      questions: [
        {
          question: '[[She|Ella]] ____ [[seen|visto]] [[that|esa]] [[film|película]].',
          options: ['[[have|he]]', '[[has|ha]]', '[[had|tuve]]'],
          correctAnswer: 'has',
          explanation: '[[With|Con]] "[[she|ella]]" [[we|nosotros]] [[use|usamos]] "[[has|ha]]" + [[past participle|participio pasado]].',
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a2-u11-l1-g3',
    type: 'fill-blank',
    level: 'A2',
    topic: 'Present Perfect',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_FILL,
      questions: [
        {
          question: '[[They|Ellos]] ____ [[eaten|comido]] [[lunch|comida]] [[already|ya]].',
          options: ['[[have|han]]', '[[has|ha]]', '[[had|habían]]'],
          correctAnswer: 'have',
          explanation: '[[With|Con]] "[[they|ellos]]" [[we|nosotros]] [[use|usamos]] "[[have|han]]" + [[past participle|participio pasado]].',
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a2-u11-l1-g4',
    type: 'fill-blank',
    level: 'A2',
    topic: 'Present Perfect',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_FILL,
      questions: [
        {
          question: '[[He|Él]] ____ [[gone|ido]] [[to|a]] [[the|el]] [[supermarket|supermercado]].',
          options: ['[[have|han]]', '[[has|ha]]', '[[had|había]]'],
          correctAnswer: 'has',
          explanation: '[[With|Con]] "[[he|él]]" [[we|nosotros]] [[use|usamos]] "[[has|ha]]" + [[past participle|participio pasado]].',
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a2-u11-l1-g5',
    type: 'fill-blank',
    level: 'A2',
    topic: 'Present Perfect',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_FILL,
      questions: [
        {
          question: '[[We|Nosotros]] ____ [[been|estado]] [[to|a]] [[London|Londres]] [[twice|dos veces]].',
          options: ['[[have|hemos]]', '[[has|ha]]', '[[had|habíamos]]'],
          correctAnswer: 'have',
          explanation: '[[With|Con]] "[[we|nosotros]]" [[we|nosotros]] [[use|usamos]] "[[have|hemos]]" + [[past participle|participio pasado]].',
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a2-u11-l1-g6',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Present Perfect',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_MULTIPLE,
      questions: [
        {
          question: '[[Which|Cuál]] [[sentence|frase]] [[is|es]] [[correct|correcta]]?',
          options: [
            '[[I|Yo]] [[have|he]] [[been|estado]] [[to|a]] [[Italy|Italia]].',
            '[[I|Yo]] [[has|ha]] [[been|estado]] [[to|a]] [[Italy|Italia]].',
            '[[I|Yo]] [[had|tuve]] [[been|estado]] [[to|a]] [[Italy|Italia]].',
          ],
          correctAnswer: 0,
          explanation: '[[I|Yo]] + [[have|he]] + [[past participle|participio pasado]].',
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a2-u11-l1-g7',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Present Perfect',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_MULTIPLE,
      questions: [
        {
          question: '[[Choose|Elige]] [[the|la]] [[correct|correcta]] [[form|forma]] [[for|para]] "[[She|Ella]] ____ [[seen|visto]] [[the|la]] [[film|película]]."',
          options: ['[[have|han]]', '[[has|ha]]', '[[had|había]]'],
          correctAnswer: 1,
          explanation: '[[She|Ella]] + [[has|ha]] + [[past participle|participio pasado]].',
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a2-u11-l1-g8',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Present Perfect',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_MULTIPLE,
      questions: [
        {
          question: '[[What|Cuál]] [[is|es]] [[the|el]] [[past participle|participio pasado]] [[of|de]] "[[go|ir]]"?',
          options: ['[[went|fue]]', '[[gone|ido]]', '[[going|yendo]]'],
          correctAnswer: 1,
          explanation: '[[Go|Ir]] → [[went|fue]] (Past Simple), [[gone|ido]] (Past Participle).',
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a2-u11-l1-g9',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Present Perfect',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_MULTIPLE,
      questions: [
        {
          question: '[[Complete|Completa]]: "[[I|Yo]] ____ [[eaten|comido]] [[breakfast|desayuno]]."',
          options: ['[[have|he]]', '[[has|ha]]', '[[had|tuve]]'],
          correctAnswer: 0,
          explanation: '[[I|Yo]] + [[have|he]] + [[eaten|comido]].',
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a2-u11-l1-g10',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Present Perfect',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_MULTIPLE,
      questions: [
        {
          question: '[[Which|Cuál]] [[sentence|frase]] [[is|es]] [[correct|correcta]]?',
          options: [
            '[[He|Él]] [[have|han]] [[gone|ido]] [[home|casa]].',
            '[[He|Él]] [[has|ha]] [[gone|ido]] [[home|casa]].',
            '[[He|Él]] [[go|ir]] [[home|casa]].',
          ],
          correctAnswer: 1,
          explanation: '[[He|Él]] + [[has|ha]] + [[past participle|participio pasado]].',
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a2-u11-l1-g11',
    type: 'sentence-building',
    level: 'A2',
    topic: 'Present Perfect',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_ORDER,
      correctSentence: '[[I|Yo]] [[have|he]] [[been|estado]] [[to|a]] [[Paris|París]].',
      words: ['[[I|Yo]]', '[[have|he]]', '[[been|estado]]', '[[to|a]]', '[[Paris|París]].'],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a2-u11-l1-g12',
    type: 'sentence-building',
    level: 'A2',
    topic: 'Present Perfect',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_ORDER,
      correctSentence: '[[She|Ella]] [[has|ha]] [[seen|visto]] [[that|esa]] [[film|película]].',
      words: ['[[She|Ella]]', '[[has|ha]]', '[[seen|visto]]', '[[that|esa]]', '[[film|película]].'],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a2-u11-l1-g13',
    type: 'sentence-building',
    level: 'A2',
    topic: 'Present Perfect',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_ORDER,
      correctSentence: '[[They|Ellos]] [[have|han]] [[eaten|comido]] [[lunch|comida]].',
      words: ['[[They|Ellos]]', '[[have|han]]', '[[eaten|comido]]', '[[lunch|comida]].'],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a2-u11-l1-g14',
    type: 'true-false',
    level: 'A2',
    topic: 'Present Perfect',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_TF,
      questions: [
        {
          question: '[[Present Perfect|Presente Perfecto]] [[uses|usa]] [[have|he]] [[or|o]] [[has|ha]] + [[past participle|participio pasado]].',
          options: ['[[True|Verdadero]]', '[[False|Falso]]'],
          correctAnswer: 'True',
          explanation: '[[True|Verdadero]]. [[Structure|Estructura]]: [[have/has|he/ha]] + [[past participle|participio pasado]].',
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a2-u11-l1-g15',
    type: 'true-false',
    level: 'A2',
    topic: 'Present Perfect',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_TF,
      questions: [
        {
          question: '"[[I|Yo]] [[has|ha]] [[been|estado]] [[to|a]] [[Spain|España]]" [[is|es]] [[correct|correcto]] [[in|en]] [[English|inglés]].',
          options: ['[[True|Verdadero]]', '[[False|Falso]]'],
          correctAnswer: 'False',
          explanation: '[[False|Falso]]. [[Correct|Correcto]]: "[[I have been|He estado]]". [[I|Yo]] [[uses|usa]] [[have|he]], [[not|no]] [[has|ha]].',
        },
      ],
    },
    topicName: 'Grammar',
  },
];
