/**
 * Unidad 18 — Lección 1: Gramática (For & Since)
 * 15 ejercicios: for + duración, since + punto en el tiempo
 */

import { Exercise } from '@/lib/exercise-generator';

const LESSON_TITLE = '[[For|Durante]] [[and|y]] [[Since|Desde]]';
const INSTRUCTIONS_FILL = 'Elige "for" o "since" para cada frase.';
const INSTRUCTIONS_MULTIPLE = 'Elige la frase o la forma correcta.';
const INSTRUCTIONS_ORDER = 'Ordena las palabras para formar una oración correcta.';
const INSTRUCTIONS_TF = 'Indica si la afirmación es verdadera o falsa.';

export const UNIT_18_LESSON_1_GRAMMAR: Exercise[] = [
  {
    id: 'a2-u18-l1-g1',
    type: 'fill-blank',
    level: 'A2',
    topic: 'For and Since',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_FILL,
      questions: [
        {
          question: '[[I|Yo]] [[have|he]] [[lived|vivido]] [[here|aquí]] ____ [[two years|dos años]].',
          options: ['[[for|durante]]', '[[since|desde]]', '[[ago|hace]]'],
          correctAnswer: 'for',
          explanation: '[[For|Durante]] + [[duration|duración]] ([[two years|dos años]], [[a week|una semana]]).',
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a2-u18-l1-g2',
    type: 'fill-blank',
    level: 'A2',
    topic: 'For and Since',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_FILL,
      questions: [
        {
          question: '[[She|Ella]] [[has|ha]] [[worked|trabajado]] [[here|aquí]] ____ [[2020|2020]].',
          options: ['[[for|durante]]', '[[since|desde]]', '[[ago|hace]]'],
          correctAnswer: 'since',
          explanation: '[[Since|Desde]] + [[point|punto]] [[in|en]] [[time|tiempo]] ([[2020|2020]], [[Monday|lunes]]).',
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a2-u18-l1-g3',
    type: 'fill-blank',
    level: 'A2',
    topic: 'For and Since',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_FILL,
      questions: [
        {
          question: '[[They|Ellos]] [[have|han]] [[been|estado]] [[married|casados]] ____ [[ten years|diez años]].',
          options: ['[[for|durante]]', '[[since|desde]]', '[[ago|hace]]'],
          correctAnswer: 'for',
          explanation: '[[For|Durante]] + [[duration|duración]]: [[ten years|diez años]] = [[how long|cuánto tiempo]].',
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a2-u18-l1-g4',
    type: 'fill-blank',
    level: 'A2',
    topic: 'For and Since',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_FILL,
      questions: [
        {
          question: '[[He|Él]] [[has|ha]] [[known|conocido]] [[her|ella]] ____ [[last summer|el verano pasado]].',
          options: ['[[for|durante]]', '[[since|desde]]', '[[ago|hace]]'],
          correctAnswer: 'since',
          explanation: '[[Since|Desde]] + [[point|punto]]: [[last summer|el verano pasado]] = [[when|cuándo]] [[it started|empezó]].',
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a2-u18-l1-g5',
    type: 'fill-blank',
    level: 'A2',
    topic: 'For and Since',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_FILL,
      questions: [
        {
          question: '[[We|Nosotros]] [[have|hemos]] [[waited|esperado]] ____ [[a long time|mucho tiempo]].',
          options: ['[[for|durante]]', '[[since|desde]]', '[[ago|hace]]'],
          correctAnswer: 'for',
          explanation: '[[For|Durante]] + [[a long time|mucho tiempo]] = [[duration|duración]].',
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a2-u18-l1-g6',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'For and Since',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_MULTIPLE,
      questions: [
        {
          question: '[[Which|Cuál]] [[sentence|frase]] [[is|es]] [[correct|correcta]]?',
          options: [
            '[[I|Yo]] [[have|he]] [[lived|vivido]] [[here|aquí]] [[for|durante]] [[three years|tres años]].',
            '[[I|Yo]] [[have|he]] [[lived|vivido]] [[here|aquí]] [[since|desde]] [[three years|tres años]].',
            '[[I|Yo]] [[have|he]] [[lived|vivido]] [[here|aquí]] [[for|durante]] [[2021|2021]].',
          ],
          correctAnswer: 0,
          explanation: '[[For|Durante]] + [[duration|duración]] ([[three years|tres años]]); [[since|desde]] + [[point|punto]] ([[2021|2021]]).',
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a2-u18-l1-g7',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'For and Since',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_MULTIPLE,
      questions: [
        {
          question: '[[Choose|Elige]] [[the|la]] [[correct|correcta]] [[word|palabra]]: "[[She|Ella]] [[has|ha]] [[worked|trabajado]] ____ [[January|enero]]."',
          options: ['[[for|durante]]', '[[since|desde]]', '[[ago|hace]]'],
          correctAnswer: 1,
          explanation: '[[Since|Desde]] + [[January|enero]] = [[point|punto]] [[in|en]] [[time|tiempo]].',
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a2-u18-l1-g8',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'For and Since',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_MULTIPLE,
      questions: [
        {
          question: '[[What|Qué]] [[do|usamos]] [[we|nosotros]] [[use|usar]] [[with|con]] [[duration|duración]] [[like|como]] [[a week|una semana]]?',
          options: ['[[for|durante]]', '[[since|desde]]', '[[ago|hace]]'],
          correctAnswer: 0,
          explanation: '[[For|Durante]] + [[duration|duración]]: [[a week|una semana]], [[two months|dos meses]], [[years|años]].',
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a2-u18-l1-g9',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'For and Since',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_MULTIPLE,
      questions: [
        {
          question: '[[Complete|Completa]]: "[[I|Yo]] [[have|he]] [[known|conocido]] [[him|él]] ____ [[I|yo]] [[was|fui]] [[a child|un niño]]."',
          options: ['[[for|durante]]', '[[since|desde]]', '[[ago|hace]]'],
          correctAnswer: 1,
          explanation: '[[Since|Desde]] + [[clause|oración]] = [[point|punto]] [[when|cuando]] [[it started|empezó]].',
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a2-u18-l1-g10',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'For and Since',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_MULTIPLE,
      questions: [
        {
          question: '[[Which|Cuál]] [[sentence|frase]] [[is|es]] [[correct|correcta]]?',
          options: [
            '[[They|Ellos]] [[have|han]] [[lived|vivido]] [[here|aquí]] [[since|desde]] [[five years|cinco años]].',
            '[[They|Ellos]] [[have|han]] [[lived|vivido]] [[here|aquí]] [[for|durante]] [[five years|cinco años]].',
            '[[They|Ellos]] [[have|han]] [[lived|vivido]] [[here|aquí]] [[for|durante]] [[2019|2019]].',
          ],
          correctAnswer: 1,
          explanation: '[[For|Durante]] + [[five years|cinco años]] ([[duration|duración]]); [[since|desde]] + [[2019|2019]] ([[point|punto]]).',
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a2-u18-l1-g11',
    type: 'sentence-building',
    level: 'A2',
    topic: 'For and Since',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_ORDER,
      correctSentence: '[[I|Yo]] [[have|he]] [[lived|vivido]] [[here|aquí]] [[for|durante]] [[two years|dos años]].',
      words: ['[[I|Yo]]', '[[have|he]]', '[[lived|vivido]]', '[[here|aquí]]', '[[for|durante]]', '[[two years|dos años]].'],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a2-u18-l1-g12',
    type: 'sentence-building',
    level: 'A2',
    topic: 'For and Since',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_ORDER,
      correctSentence: '[[She|Ella]] [[has|ha]] [[worked|trabajado]] [[here|aquí]] [[since|desde]] [[2020|2020]].',
      words: ['[[She|Ella]]', '[[has|ha]]', '[[worked|trabajado]]', '[[here|aquí]]', '[[since|desde]]', '[[2020|2020]].'],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a2-u18-l1-g13',
    type: 'sentence-building',
    level: 'A2',
    topic: 'For and Since',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_ORDER,
      correctSentence: '[[They|Ellos]] [[have|han]] [[been|estado]] [[married|casados]] [[for|durante]] [[ten years|diez años]].',
      words: ['[[They|Ellos]]', '[[have|han]]', '[[been|estado]]', '[[married|casados]]', '[[for|durante]]', '[[ten years|diez años]].'],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a2-u18-l1-g14',
    type: 'true-false',
    level: 'A2',
    topic: 'For and Since',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_TF,
      questions: [
        {
          question: '"[[For|Durante]]" [[is|es]] [[used|usado]] [[with|con]] [[duration|duración]] [[and|y]] "[[since|desde]]" [[with|con]] [[point|punto]] [[in|en]] [[time|tiempo]].',
          options: ['[[True|Verdadero]]', '[[False|Falso]]'],
          correctAnswer: 'True',
          explanation: '[[True|Verdadero]]. [[For|Durante]] = [[how long|cuánto tiempo]]; [[since|desde]] = [[when|cuándo]] [[it started|empezó]].',
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a2-u18-l1-g15',
    type: 'true-false',
    level: 'A2',
    topic: 'For and Since',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_TF,
      questions: [
        {
          question: '"[[I|Yo]] [[have|he]] [[lived|vivido]] [[here|aquí]] [[since|desde]] [[three years|tres años]]" [[is|es]] [[correct|correcto]].',
          options: ['[[True|Verdadero]]', '[[False|Falso]]'],
          correctAnswer: 'False',
          explanation: '[[False|Falso]]. [[Correct|Correcto]]: "[[for three years|durante tres años]]" ([[duration|duración]]) [[or|o]] "[[since 2021|desde 2021]]" ([[point|punto]]).',
        },
      ],
    },
    topicName: 'Grammar',
  },
];
