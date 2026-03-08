/**
 * Unidad 3 — Lección 1: Gramática (Past Simple verbos irregulares)
 * 15 ejercicios: went, saw, had, made, write-wrote, buy-bought
 */

import { Exercise } from '@/lib/exercise-generator';

const LESSON_TITLE = '[[Past Simple|Pasado Simple]]: [[Irregular Verbs|verbos irregulares]]';
const INSTRUCTIONS_FILL = 'Elige la forma correcta del verbo irregular en pasado para cada frase.';
const INSTRUCTIONS_MULTIPLE = 'Elige la frase o la forma correcta.';
const INSTRUCTIONS_ORDER = 'Ordena las palabras para formar una oración correcta.';
const INSTRUCTIONS_TF = 'Indica si la afirmación es verdadera o falsa.';

export const UNIT_3_LESSON_1_GRAMMAR: Exercise[] = [
  {
    id: 'a2-u3-l1-g1',
    type: 'fill-blank',
    level: 'A2',
    topic: 'Past Simple Irregular',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_FILL,
      questions: [
        {
          question: '[[I|Yo]] ____ [[to|a]] [[the|el]] [[cinema|cine]] [[yesterday|ayer]].',
          options: ['go', 'went', 'gone'],
          correctAnswer: 'went',
          explanation: '[[Go|Ir]] → [[went|fui]]. [[Irregular verb|Verbo irregular]].',
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a2-u3-l1-g2',
    type: 'fill-blank',
    level: 'A2',
    topic: 'Past Simple Irregular',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_FILL,
      questions: [
        {
          question: '[[She|Ella]] ____ [[a|una]] [[film|película]] [[last night|anoche]].',
          options: ['see', 'saw', 'seen'],
          correctAnswer: 'saw',
          explanation: '[[See|Ver]] → [[saw|vi]]. [[Irregular verb|Verbo irregular]].',
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a2-u3-l1-g3',
    type: 'fill-blank',
    level: 'A2',
    topic: 'Past Simple Irregular',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_FILL,
      questions: [
        {
          question: '[[We|Nosotros]] ____ [[a|una]] [[great|genial]] [[time|tiempo]] [[at|en]] [[the|la]] [[party|fiesta]].',
          options: ['have', 'had', 'having'],
          correctAnswer: 'had',
          explanation: '[[Have|Tener]] → [[had|tuvimos]]. [[Irregular verb|Verbo irregular]].',
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a2-u3-l1-g4',
    type: 'fill-blank',
    level: 'A2',
    topic: 'Past Simple Irregular',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_FILL,
      questions: [
        {
          question: '[[He|Él]] ____ [[a|una]] [[cake|tarta]] [[for|para]] [[his|su]] [[birthday|cumpleaños]].',
          options: ['make', 'made', 'making'],
          correctAnswer: 'made',
          explanation: '[[Make|Hacer]] → [[made|hizo]]. [[Irregular verb|Verbo irregular]].',
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a2-u3-l1-g5',
    type: 'fill-blank',
    level: 'A2',
    topic: 'Past Simple Irregular',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_FILL,
      questions: [
        {
          question: '[[I|Yo]] ____ [[a|una]] [[letter|carta]] [[to|a]] [[my|mi]] [[friend|amigo]] [[last week|la semana pasada]].',
          options: ['write', 'wrote', 'written'],
          correctAnswer: 'wrote',
          explanation: '[[Write|Escribir]] → [[wrote|escribí]]. [[Irregular verb|Verbo irregular]].',
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a2-u3-l1-g6',
    type: 'fill-blank',
    level: 'A2',
    topic: 'Past Simple Irregular',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_FILL,
      questions: [
        {
          question: '[[She|Ella]] ____ [[a|un]] [[new|nuevo]] [[dress|vestido]] [[yesterday|ayer]].',
          options: ['buy', 'bought', 'buying'],
          correctAnswer: 'bought',
          explanation: '[[Buy|Comprar]] → [[bought|compró]]. [[Irregular verb|Verbo irregular]].',
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a2-u3-l1-g7',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Past Simple Irregular',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_MULTIPLE,
      questions: [
        {
          question: '[[Which|Cuál]] [[sentence|frase]] [[is|es]] [[correct|correcta]]?',
          options: [
            '[[I|Yo]] [[go|fui]] [[to|a]] [[London|Londres]] [[last year|el año pasado]].',
            '[[I|Yo]] [[went|fui]] [[to|a]] [[London|Londres]] [[last year|el año pasado]].',
            '[[I|Yo]] [[gone|fui]] [[to|a]] [[London|Londres]] [[last year|el año pasado]].',
          ],
          correctAnswer: 1,
          explanation: '[[Go|Ir]] → [[went|fui]] [[in|en]] [[Past Simple|Pasado Simple]].',
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a2-u3-l1-g8',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Past Simple Irregular',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_MULTIPLE,
      questions: [
        {
          question: '[[What|Cuál]] [[is|es]] [[the|el]] [[past|pasado]] [[of|de]] "[[buy|comprar]]"?',
          options: ['[[buyed|compré]]', '[[bought|compró]]', '[[buied|compré]]'],
          correctAnswer: 1,
          explanation: '[[Buy|Comprar]] → [[bought|compró]]. [[Irregular verb|Verbo irregular]].',
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a2-u3-l1-g9',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Past Simple Irregular',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_MULTIPLE,
      questions: [
        {
          question: '[[What|Cuál]] [[is|es]] [[the|el]] [[past|pasado]] [[of|de]] "[[write|escribir]]"?',
          options: ['[[writed|escribí]]', '[[wrote|escribí]]', '[[written|escrito]]'],
          correctAnswer: 1,
          explanation: '[[Write|Escribir]] → [[wrote|escribí]]. [[Irregular verb|Verbo irregular]].',
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a2-u3-l1-g10',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Past Simple Irregular',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_MULTIPLE,
      questions: [
        {
          question: '[[Complete|Completa]]: "[[They|Ellos]] ____ [[a|un]] [[film|película]] [[yesterday|ayer]]."',
          options: ['[[saw|vieron]]', '[[see|ven]]', '[[seen|visto]]'],
          correctAnswer: 0,
          explanation: '[[See|Ver]] → [[saw|vi/vieron]] [[in|en]] [[Past Simple|Pasado Simple]].',
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a2-u3-l1-g11',
    type: 'sentence-building',
    level: 'A2',
    topic: 'Past Simple Irregular',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_ORDER,
      correctSentence: '[[I|Yo]] [[went|fui]] [[to|a]] [[the|el]] [[shop|tienda]] [[yesterday|ayer]].',
      words: ['[[went|fui]]', '[[I|Yo]]', '[[to|a]]', '[[the|el]]', '[[shop|tienda]]', '[[yesterday|ayer]].'],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a2-u3-l1-g12',
    type: 'sentence-building',
    level: 'A2',
    topic: 'Past Simple Irregular',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_ORDER,
      correctSentence: '[[She|Ella]] [[bought|compró]] [[a|un]] [[new|nuevo]] [[book|libro]] [[last week|la semana pasada]].',
      words: ['[[bought|compró]]', '[[She|Ella]]', '[[a|un]]', '[[new|nuevo]]', '[[book|libro]]', '[[last week|la semana pasada]].'],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a2-u3-l1-g13',
    type: 'sentence-building',
    level: 'A2',
    topic: 'Past Simple Irregular',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_ORDER,
      correctSentence: '[[He|Él]] [[made|hizo]] [[a|una]] [[delicious|deliciosa]] [[dinner|cena]] [[last night|anoche]].',
      words: ['[[made|hizo]]', '[[He|Él]]', '[[a|una]]', '[[delicious|deliciosa]]', '[[dinner|cena]]', '[[last night|anoche]].'],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a2-u3-l1-g14',
    type: 'true-false',
    level: 'A2',
    topic: 'Past Simple Irregular',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_TF,
      questions: [
        {
          question: '"[[I|Yo]] [[goed|fui]] [[to|a]] [[school|escuela]] [[yesterday|ayer]]" [[is|es]] [[correct|correcto]] [[in|en]] [[English|inglés]].',
          options: ['[[True|Verdadero]]', '[[False|Falso]]'],
          correctAnswer: 'False',
          explanation: '[[False|Falso]]. [[Go|Ir]] → [[went|fui]], [[not|no]] "[[goed|fui]]". [[Irregular verb|Verbo irregular]].',
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a2-u3-l1-g15',
    type: 'true-false',
    level: 'A2',
    topic: 'Past Simple Irregular',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_TF,
      questions: [
        {
          question: '"[[Buy|Comprar]]" [[past|pasado]] [[is|es]] "[[bought|compró]]" [[in|en]] [[English|inglés]].',
          options: ['[[True|Verdadero]]', '[[False|Falso]]'],
          correctAnswer: 'True',
          explanation: '[[True|Verdadero]]. [[Buy|Comprar]] → [[bought|compró]]. [[Irregular verb|Verbo irregular]].',
        },
      ],
    },
    topicName: 'Grammar',
  },
];
