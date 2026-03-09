/**
 * Unidad 13 — Lección 1: Gramática (Present Perfect Already & Yet)
 * 15 ejercicios: I have already..., I haven't...yet
 */

import { Exercise } from '@/lib/exercise-generator';

const LESSON_TITLE = '[[Present Perfect|Presente Perfecto]]: [[Already|ya]] [[and|y]] [[Yet|aún]]';
const INSTRUCTIONS_FILL = 'Elige la palabra correcta (already/yet) para cada frase.';
const INSTRUCTIONS_MULTIPLE = 'Elige la frase o la forma correcta.';
const INSTRUCTIONS_ORDER = 'Ordena las palabras para formar una oración correcta.';
const INSTRUCTIONS_TF = 'Indica si la afirmación es verdadera o falsa.';

export const UNIT_13_LESSON_1_GRAMMAR: Exercise[] = [
  {
    id: 'a2-u13-l1-g1',
    type: 'fill-blank',
    level: 'A2',
    topic: 'Present Perfect Already Yet',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_FILL,
      questions: [
        {
          question: '[[I|Yo]] [[have|he]] ____ [[finished|terminado]] [[my|mi]] [[homework|deberes]].',
          options: ['[[already|ya]]', '[[yet|aún]]', '[[ever|alguna vez]]'],
          correctAnswer: 'already',
          explanation: '[[Already|Ya]] [[in|en]] [[affirmative|afirmativas]]: [[I have already...|Ya he...]]',
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a2-u13-l1-g2',
    type: 'fill-blank',
    level: 'A2',
    topic: 'Present Perfect Already Yet',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_FILL,
      questions: [
        {
          question: '[[I|Yo]] [[haven\'t|no he]] ____ [[done|hecho]] [[the|los]] [[shopping|compras]].',
          options: ['[[already|ya]]', '[[yet|aún]]', '[[ever|alguna vez]]'],
          correctAnswer: 'yet',
          explanation: '[[Yet|Aún]] [[in|en]] [[negative|negativas]]: [[I haven\'t...yet|Aún no he...]]',
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a2-u13-l1-g3',
    type: 'fill-blank',
    level: 'A2',
    topic: 'Present Perfect Already Yet',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_FILL,
      questions: [
        {
          question: '[[Has|¿Ha]] [[she|ella]] ____ [[cleaned|limpiado]] [[her|su]] [[room|habitación]]?',
          options: ['[[already|ya]]', '[[yet|aún]]', '[[never|nunca]]'],
          correctAnswer: 'yet',
          explanation: '[[Yet|Aún]] [[in|en]] [[questions|preguntas]]: [[Has she...yet?|¿Ha... aún?]]',
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a2-u13-l1-g4',
    type: 'fill-blank',
    level: 'A2',
    topic: 'Present Perfect Already Yet',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_FILL,
      questions: [
        {
          question: '[[He|Él]] [[has|ha]] ____ [[eaten|comido]] [[breakfast|desayuno]].',
          options: ['[[already|ya]]', '[[yet|aún]]', '[[never|nunca]]'],
          correctAnswer: 'already',
          explanation: '[[Already|Ya]] = [[before|antes]] [[now|ahora]]; [[emphasises|enfatiza]] [[completion|completado]].',
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a2-u13-l1-g5',
    type: 'fill-blank',
    level: 'A2',
    topic: 'Present Perfect Already Yet',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_FILL,
      questions: [
        {
          question: '[[Have|¿Has]] [[you|tú]] ____ [[washed|lavado]] [[the|los]] [[dishes|platos]]?',
          options: ['[[already|ya]]', '[[yet|aún]]', '[[never|nunca]]'],
          correctAnswer: 'yet',
          explanation: '[[Yet|Aún]] [[at|al]] [[end|final]] [[of|de]] [[questions|preguntas]] [[expecting|esperando]] [[yes|sí]] [[or|o]] [[no|no]].',
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a2-u13-l1-g6',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Present Perfect Already Yet',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_MULTIPLE,
      questions: [
        {
          question: '[[Which|Cuál]] [[sentence|frase]] [[is|es]] [[correct|correcta]]?',
          options: [
            '[[I|Yo]] [[have|he]] [[already|ya]] [[done|hecho]] [[it|eso]].',
            '[[I|Yo]] [[have|he]] [[yet|aún]] [[done|hecho]] [[it|eso]].',
            '[[I|Yo]] [[have|he]] [[done|hecho]] [[already|ya]] [[it|eso]].',
          ],
          correctAnswer: 0,
          explanation: '[[Already|Ya]] [[between|entre]] [[have|he]] [[and|y]] [[past participle|participio pasado]].',
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a2-u13-l1-g7',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Present Perfect Already Yet',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_MULTIPLE,
      questions: [
        {
          question: '[[Choose|Elige]] [[the|la]] [[correct|correcta]] [[position|posición]] [[for|para]] "[[yet|aún]]" [[in|en]] [[negative|negativas]].',
          options: [
            '[[At|Al]] [[the|al]] [[end|final]] [[of|de]] [[the|la]] [[sentence|frase]]',
            '[[Before|Antes]] [[the|del]] [[verb|verbo]]',
            '[[At|Al]] [[the|al]] [[beginning|principio]]',
          ],
          correctAnswer: 0,
          explanation: '[[I haven\'t finished yet|Aún no he terminado]]. [[Yet|Aún]] [[at|al]] [[end|final]].',
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a2-u13-l1-g8',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Present Perfect Already Yet',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_MULTIPLE,
      questions: [
        {
          question: '[[What|Qué]] [[does|significa]] "[[already|ya]]" [[mean|significar]]?',
          options: [
            '[[Before|Antes]] [[now|ahora]] [[or|o]] [[sooner than expected|antes de lo esperado]]',
            '[[Not|No]] [[until|hasta]] [[now|ahora]]',
            '[[At|En]] [[any|algún]] [[time|momento]]',
          ],
          correctAnswer: 0,
          explanation: '[[Already|Ya]] = [[before now|antes de ahora]] [[or|o]] [[sooner than expected|antes de lo esperado]].',
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a2-u13-l1-g9',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Present Perfect Already Yet',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_MULTIPLE,
      questions: [
        {
          question: '[[Complete|Completa]]: "[[She|Ella]] ____ [[hasn\'t|no ha]] ____ [[called|llamado]]."',
          options: ['[[already|ya]]', '[[yet|aún]]', '[[ever|alguna vez]]'],
          correctAnswer: 1,
          explanation: '[[Yet|Aún]] [[in|en]] [[negative|negativas]] [[at|al]] [[end|final]].',
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a2-u13-l1-g10',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Present Perfect Already Yet',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_MULTIPLE,
      questions: [
        {
          question: '[[Which|Cuál]] [[sentence|frase]] [[is|es]] [[correct|correcta]]?',
          options: [
            '[[I|Yo]] [[haven\'t|no he]] [[yet|aún]] [[finished|terminado]].',
            '[[I|Yo]] [[haven\'t|no he]] [[finished|terminado]] [[yet|aún]].',
            '[[I|Yo]] [[yet|aún]] [[haven\'t|no he]] [[finished|terminado]].',
          ],
          correctAnswer: 1,
          explanation: '[[Yet|Aún]] [[at|al]] [[end|final]] [[of|de]] [[negative|negativas]].',
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a2-u13-l1-g11',
    type: 'sentence-building',
    level: 'A2',
    topic: 'Present Perfect Already Yet',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_ORDER,
      correctSentence: '[[I|Yo]] [[have|he]] [[already|ya]] [[finished|terminado]] [[my|mi]] [[homework|deberes]].',
      words: ['[[I|Yo]]', '[[have|he]]', '[[already|ya]]', '[[finished|terminado]]', '[[my|mi]]', '[[homework|deberes]].'],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a2-u13-l1-g12',
    type: 'sentence-building',
    level: 'A2',
    topic: 'Present Perfect Already Yet',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_ORDER,
      correctSentence: '[[I|Yo]] [[haven\'t|no he]] [[done|hecho]] [[the|las]] [[shopping|compras]] [[yet|aún]].',
      words: ['[[I|Yo]]', '[[haven\'t|no he]]', '[[done|hecho]]', '[[the|las]]', '[[shopping|compras]]', '[[yet|aún]].'],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a2-u13-l1-g13',
    type: 'sentence-building',
    level: 'A2',
    topic: 'Present Perfect Already Yet',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_ORDER,
      correctSentence: '[[Has|¿Ha]] [[she|ella]] [[cleaned|limpiado]] [[her|su]] [[room|habitación]] [[yet|aún]]?',
      words: ['[[Has|¿Ha]]', '[[she|ella]]', '[[cleaned|limpiado]]', '[[her|su]]', '[[room|habitación]]', '[[yet|aún]]?'],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a2-u13-l1-g14',
    type: 'true-false',
    level: 'A2',
    topic: 'Present Perfect Already Yet',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_TF,
      questions: [
        {
          question: '"[[Already|Ya]]" [[is|es]] [[used|usado]] [[in|en]] [[affirmative|afirmativas]] [[and|y]] "[[yet|aún]]" [[in|en]] [[negative|negativas]] [[and|y]] [[questions|preguntas]].',
          options: ['[[True|Verdadero]]', '[[False|Falso]]'],
          correctAnswer: 'True',
          explanation: '[[True|Verdadero]]. [[Already|Ya]] = [[affirmative|afirmativas]]; [[yet|aún]] = [[negative|negativas]] [[and|y]] [[questions|preguntas]].',
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a2-u13-l1-g15',
    type: 'true-false',
    level: 'A2',
    topic: 'Present Perfect Already Yet',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_TF,
      questions: [
        {
          question: '"[[I|Yo]] [[have|he]] [[yet|aún]] [[finished|terminado]]" [[is|es]] [[correct|correcto]] [[for|para]] [[affirmative|afirmativas]].',
          options: ['[[True|Verdadero]]', '[[False|Falso]]'],
          correctAnswer: 'False',
          explanation: '[[False|Falso]]. [[For|Para]] [[affirmative|afirmativas]] [[use|usa]] "[[already|ya]]": [[I have already finished|Ya he terminado]].',
        },
      ],
    },
    topicName: 'Grammar',
  },
];
