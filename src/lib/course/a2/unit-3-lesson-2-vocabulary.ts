/**
 * Unidad 3 — Lección 2: Vocabulario (verbos irregulares: go-went, see-saw, have-had, make-made, write-wrote, buy-bought)
 * 15 ejercicios
 */

import { Exercise } from '@/lib/exercise-generator';

const LESSON_TITLE = '[[Vocabulary|Vocabulario]]: [[Irregular Verbs|verbos irregulares]]';
const INSTRUCTIONS_MC = 'Elige la palabra correcta para cada definición o frase.';
const INSTRUCTIONS_MATCH = 'Relaciona cada verbo en presente con su forma en pasado.';
const INSTRUCTIONS_FILL = 'Completa la frase con la forma correcta del verbo.';

export const UNIT_3_LESSON_2_VOCABULARY: Exercise[] = [
  {
    id: 'a2-u3-l2-v1',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Past Simple Irregular',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_MC,
      questions: [
        {
          question: '[[What|Cuál]] [[is|es]] [[the|el]] [[past|pasado]] [[of|de]] "[[go|ir]]"?',
          options: ['[[goed|fui]]', '[[went|fui]]', '[[gone|ido]]'],
          correctAnswer: 1,
          explanation: '[[Go|Ir]] → [[went|fui]]. [[Irregular verb|Verbo irregular]].',
        },
      ],
    },
    topicName: 'Vocabulary',
  },
  {
    id: 'a2-u3-l2-v2',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Past Simple Irregular',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_MC,
      questions: [
        {
          question: '[[What|Cuál]] [[is|es]] [[the|el]] [[past|pasado]] [[of|de]] "[[see|ver]]"?',
          options: ['[[seed|vi]]', '[[saw|vi]]', '[[seen|visto]]'],
          correctAnswer: 1,
          explanation: '[[See|Ver]] → [[saw|vi]]. [[Irregular verb|Verbo irregular]].',
        },
      ],
    },
    topicName: 'Vocabulary',
  },
  {
    id: 'a2-u3-l2-v3',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Past Simple Irregular',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_MC,
      questions: [
        {
          question: '[[What|Cuál]] [[is|es]] [[the|el]] [[past|pasado]] [[of|de]] "[[have|tener]]"?',
          options: ['[[haved|tuve]]', '[[had|tuve]]', '[[haded|tuve]]'],
          correctAnswer: 1,
          explanation: '[[Have|Tener]] → [[had|tuve]]. [[Irregular verb|Verbo irregular]].',
        },
      ],
    },
    topicName: 'Vocabulary',
  },
  {
    id: 'a2-u3-l2-v4',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Past Simple Irregular',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_MC,
      questions: [
        {
          question: '[[What|Cuál]] [[is|es]] [[the|el]] [[past|pasado]] [[of|de]] "[[make|hacer]]"?',
          options: ['[[maked|hizo]]', '[[made|hizo]]', '[[maded|hizo]]'],
          correctAnswer: 1,
          explanation: '[[Make|Hacer]] → [[made|hizo]]. [[Irregular verb|Verbo irregular]].',
        },
      ],
    },
    topicName: 'Vocabulary',
  },
  {
    id: 'a2-u3-l2-v5',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Past Simple Irregular',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_MC,
      questions: [
        {
          question: '[[What|Cuál]] [[word|palabra]] [[completes|complete]] [[the|la]] [[sentence|frase]]? "[[I|Yo]] ____ [[to|a]] [[Paris|París]] [[last summer|el verano pasado]]."',
          options: ['[[go|voy]]', '[[went|fui]]', '[[gone|ido]]'],
          correctAnswer: 1,
          explanation: '[[Go|Ir]] → [[went|fui]] [[in|en]] [[Past Simple|Pasado Simple]].',
        },
      ],
    },
    topicName: 'Vocabulary',
  },
  {
    id: 'a2-u3-l2-v6',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Past Simple Irregular',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_MC,
      questions: [
        {
          question: '"[[She|Ella]] ____ [[a|un]] [[beautiful|hermoso]] [[film|película]]" [[means|significa]] "[[Ella|Ella]] [[vió|vió]] [[una película hermosa|una película hermosa]]".',
          options: ['[[see|ve]]', '[[saw|vió]]', '[[seen|visto]]'],
          correctAnswer: 1,
          explanation: '[[See|Ver]] → [[saw|vió]] [[in|en]] [[Past Simple|Pasado Simple]].',
        },
      ],
    },
    topicName: 'Vocabulary',
  },
  {
    id: 'a2-u3-l2-v7',
    type: 'matching',
    level: 'A2',
    topic: 'Past Simple Irregular',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_MATCH,
      pairs: [
        { id: 'p1', left: '[[go|ir]]', right: '[[went|fui]]' },
        { id: 'p2', left: '[[see|ver]]', right: '[[saw|vi]]' },
        { id: 'p3', left: '[[have|tener]]', right: '[[had|tuve]]' },
        { id: 'p4', left: '[[make|hacer]]', right: '[[made|hice]]' },
      ],
    },
    topicName: 'Vocabulary',
  },
  {
    id: 'a2-u3-l2-v8',
    type: 'matching',
    level: 'A2',
    topic: 'Past Simple Irregular',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_MATCH,
      pairs: [
        { id: 'p1', left: '[[write|escribir]]', right: '[[wrote|escribí]]' },
        { id: 'p2', left: '[[buy|comprar]]', right: '[[bought|compré]]' },
        { id: 'p3', left: '[[go|ir]]', right: '[[went|fui]]' },
        { id: 'p4', left: '[[see|ver]]', right: '[[saw|vi]]' },
      ],
    },
    topicName: 'Vocabulary',
  },
  {
    id: 'a2-u3-l2-v9',
    type: 'fill-blank',
    level: 'A2',
    topic: 'Past Simple Irregular',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_FILL,
      questions: [
        {
          question: '[[We|Nosotros]] ____ [[a|una]] [[great|genial]] [[time|tiempo]] [[at|en]] [[the|la]] [[beach|playa]] [[yesterday|ayer]].',
          options: ['[[have|tener]]', '[[had|tuvimos]]', '[[has|tiene]]'],
          correctAnswer: '[[had|tuvimos]]',
          explanation: '[[Have|Tener]] → [[had|tuvimos]] [[in|en]] [[Past Simple|Pasado Simple]].',
        },
      ],
    },
    topicName: 'Vocabulary',
  },
  {
    id: 'a2-u3-l2-v10',
    type: 'fill-blank',
    level: 'A2',
    topic: 'Past Simple Irregular',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_FILL,
      questions: [
        {
          question: '[[My|Mi]] [[mother|madre]] ____ [[a|una]] [[cake|tarta]] [[for|para]] [[my|cumpleaños]] [[birthday|cumpleaños]].',
          options: ['[[make|hacer]]', '[[made|hizo]]', '[[makes|hace]]'],
          correctAnswer: '[[made|hizo]]',
          explanation: '[[Make|Hacer]] → [[made|hizo]] [[in|en]] [[Past Simple|Pasado Simple]].',
        },
      ],
    },
    topicName: 'Vocabulary',
  },
  {
    id: 'a2-u3-l2-v11',
    type: 'fill-blank',
    level: 'A2',
    topic: 'Past Simple Irregular',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_FILL,
      questions: [
        {
          question: '[[I|Yo]] ____ [[a|una]] [[letter|carta]] [[to|a]] [[my|mi]] [[grandmother|abuela]] [[last month|el mes pasado]].',
          options: ['[[write|escribir]]', '[[wrote|escribí]]', '[[writes|escribe]]'],
          correctAnswer: '[[wrote|escribí]]',
          explanation: '[[Write|Escribir]] → [[wrote|escribí]] [[in|en]] [[Past Simple|Pasado Simple]].',
        },
      ],
    },
    topicName: 'Vocabulary',
  },
  {
    id: 'a2-u3-l2-v12',
    type: 'fill-blank',
    level: 'A2',
    topic: 'Past Simple Irregular',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_FILL,
      questions: [
        {
          question: '[[She|Ella]] ____ [[a|un]] [[new|nuevo]] [[phone|teléfono]] [[yesterday|ayer]].',
          options: ['[[buy|comprar]]', '[[bought|compró]]', '[[buys|compra]]'],
          correctAnswer: '[[bought|compró]]',
          explanation: '[[Buy|Comprar]] → [[bought|compró]] [[in|en]] [[Past Simple|Pasado Simple]].',
        },
      ],
    },
    topicName: 'Vocabulary',
  },
  {
    id: 'a2-u3-l2-v13',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Past Simple Irregular',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_MC,
      questions: [
        {
          question: '[[What|Qué]] [[is|es]] [[the|la]] [[correct|correcta]] [[form|forma]]? "[[They|Ellos]] ____ [[to|a]] [[the|el]] [[museum|museo]] [[last Saturday|el sábado pasado]]."',
          options: ['[[go|van]]', '[[went|fueron]]', '[[going|yendo]]'],
          correctAnswer: 1,
          explanation: '[[Go|Ir]] → [[went|fueron]] [[in|en]] [[Past Simple|Pasado Simple]].',
        },
      ],
    },
    topicName: 'Vocabulary',
  },
  {
    id: 'a2-u3-l2-v14',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Past Simple Irregular',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_MC,
      questions: [
        {
          question: '[[What|Qué]] [[word|palabra]] [[completes|complete]] [[the|la]] [[sentence|frase]]? "[[He|Él]] ____ [[a|un]] [[mistake|error]] [[in|en]] [[the|el]] [[exam|examen]]."',
          options: ['[[make|hacer]]', '[[made|hizo]]', '[[making|haciendo]]'],
          correctAnswer: 1,
          explanation: '[[Make|Hacer]] → [[made|hizo]] [[in|en]] [[Past Simple|Pasado Simple]].',
        },
      ],
    },
    topicName: 'Vocabulary',
  },
  {
    id: 'a2-u3-l2-v15',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Past Simple Irregular',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_MC,
      questions: [
        {
          question: '[[What|Qué]] [[word|palabra]] [[completes|complete]] [[the|la]] [[sentence|frase]]? "[[I|Yo]] ____ [[my|mi]] [[friend|amigo]] [[at|en]] [[the|el]] [[station|estación]] [[yesterday|ayer]]."',
          options: ['[[see|ver]]', '[[saw|vi]]', '[[seen|visto]]'],
          correctAnswer: 1,
          explanation: '[[See|Ver]] → [[saw|vi]] [[in|en]] [[Past Simple|Pasado Simple]].',
        },
      ],
    },
    topicName: 'Vocabulary',
  },
];
