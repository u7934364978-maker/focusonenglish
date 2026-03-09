/**
 * Unidad 13 — Lección 2: Vocabulario (Already/Yet, tareas y obligaciones)
 * 15 ejercicios
 */

import { Exercise } from '@/lib/exercise-generator';

const LESSON_TITLE = '[[Vocabulary|Vocabulario]]: [[Already|ya]], [[Yet|aún]], [[tasks|tareas]], [[obligations|obligaciones]]';
const INSTRUCTIONS_MC = 'Elige la palabra correcta para cada definición o frase.';
const INSTRUCTIONS_MATCH = 'Relaciona cada palabra en inglés con su traducción.';
const INSTRUCTIONS_FILL = 'Completa la frase con la palabra correcta del recuadro.';

export const UNIT_13_LESSON_2_VOCABULARY: Exercise[] = [
  {
    id: 'a2-u13-l2-v1',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Present Perfect Already Yet',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_MC,
      questions: [
        {
          question: '[[What|Qué]] [[word|palabra]] [[means|significa]] "ya" [[in|en]] [[affirmative|afirmativas]]?',
          options: ['[[yet|aún]]', '[[already|ya]]', '[[ever|alguna vez]]'],
          correctAnswer: 1,
          explanation: '[[Already|Ya]] = [[something|algo]] [[done|hecho]] [[before|antes]] [[now|ahora]].',
        },
      ],
    },
    topicName: 'Vocabulary',
  },
  {
    id: 'a2-u13-l2-v2',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Present Perfect Already Yet',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_MC,
      questions: [
        {
          question: '[[What|Qué]] [[word|palabra]] [[means|significa]] "aún no" [[in|en]] [[negative|negativas]]?',
          options: ['[[already|ya]]', '[[yet|aún]]', '[[never|nunca]]'],
          correctAnswer: 1,
          explanation: '[[Yet|Aún]] [[in|en]] [[negative|negativas]]: [[I haven\'t done it yet|Aún no lo he hecho]].',
        },
      ],
    },
    topicName: 'Vocabulary',
  },
  {
    id: 'a2-u13-l2-v3',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Present Perfect Already Yet',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_MC,
      questions: [
        {
          question: '[[What|Qué]] [[word|palabra]] [[means|significa]] "tarea"?',
          options: ['[[task|tarea]]', '[[job|trabajo]]', '[[work|trabajo]]'],
          correctAnswer: 0,
          explanation: '[[Task|Tarea]] = [[something|algo]] [[you|tú]] [[must|debes]] [[do|hacer]].',
        },
      ],
    },
    topicName: 'Vocabulary',
  },
  {
    id: 'a2-u13-l2-v4',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Present Perfect Already Yet',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_MC,
      questions: [
        {
          question: '[[What|Qué]] [[word|palabra]] [[means|significa]] "obligación"?',
          options: ['[[obligation|obligación]]', '[[option|opción]]', '[[idea|idea]]'],
          correctAnswer: 0,
          explanation: '[[Obligation|Obligación]] = [[something|algo]] [[you|tú]] [[must|debes]] [[do|hacer]].',
        },
      ],
    },
    topicName: 'Vocabulary',
  },
  {
    id: 'a2-u13-l2-v5',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Present Perfect Already Yet',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_MC,
      questions: [
        {
          question: '[[What|Qué]] [[word|palabra]] [[completes|complete]] [[the|la]] [[sentence|frase]]? "[[I|Yo]] [[have|he]] ____ [[finished|terminado]] [[my|mi]] [[homework|deberes]]."',
          options: ['[[yet|aún]]', '[[already|ya]]', '[[never|nunca]]'],
          correctAnswer: 1,
          explanation: '[[Already|Ya]] [[goes|va]] [[in|en]] [[affirmative|afirmativas]] [[before|antes]] [[the|el]] [[past participle|participio pasado]].',
        },
      ],
    },
    topicName: 'Vocabulary',
  },
  {
    id: 'a2-u13-l2-v6',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Present Perfect Already Yet',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_MC,
      questions: [
        {
          question: '[[What|Qué]] [[word|palabra]] [[completes|complete]] [[the|la]] [[sentence|frase]]? "[[Have|Has]] [[you|tú]] ____ [[done|hecho]] [[the|los]] [[washing|lavado]]?"',
          options: ['[[already|ya]]', '[[yet|aún]]', '[[never|nunca]]'],
          correctAnswer: 1,
          explanation: '[[Yet|Aún]] [[in|en]] [[questions|preguntas]]: [[Have you...yet?|¿Ya has...?]]',
        },
      ],
    },
    topicName: 'Vocabulary',
  },
  {
    id: 'a2-u13-l2-v7',
    type: 'matching',
    level: 'A2',
    topic: 'Present Perfect Already Yet',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_MATCH,
      pairs: [
        { id: 'p1', left: '[[Already|Ya]]', right: 'Ya' },
        { id: 'p2', left: '[[Yet|Aún]]', right: 'Aún' },
        { id: 'p3', left: '[[Task|Tarea]]', right: 'Tarea' },
        { id: 'p4', left: '[[Obligation|Obligación]]', right: 'Obligación' },
      ],
    },
    topicName: 'Vocabulary',
  },
  {
    id: 'a2-u13-l2-v8',
    type: 'matching',
    level: 'A2',
    topic: 'Present Perfect Already Yet',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_MATCH,
      pairs: [
        { id: 'p1', left: '[[Finished|Terminado]]', right: 'Terminado' },
        { id: 'p2', left: '[[Done|Hecho]]', right: 'Hecho' },
        { id: 'p3', left: '[[Cleaned|Limpiado]]', right: 'Limpiado' },
        { id: 'p4', left: '[[Paid|Pagado]]', right: 'Pagado' },
      ],
    },
    topicName: 'Vocabulary',
  },
  {
    id: 'a2-u13-l2-v9',
    type: 'fill-blank',
    level: 'A2',
    topic: 'Present Perfect Already Yet',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_FILL,
      questions: [
        {
          question: '[[I|Yo]] [[have|he]] ____ [[cleaned|limpiado]] [[my|mi]] [[room|habitación]].',
          options: ['[[already|ya]]', '[[yet|aún]]', '[[never|nunca]]'],
          correctAnswer: 'already',
          explanation: '[[Already|Ya]] [[in|en]] [[affirmative|afirmativas]].',
        },
      ],
    },
    topicName: 'Vocabulary',
  },
  {
    id: 'a2-u13-l2-v10',
    type: 'fill-blank',
    level: 'A2',
    topic: 'Present Perfect Already Yet',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_FILL,
      questions: [
        {
          question: '[[She|Ella]] [[hasn\'t|no ha]] ____ [[paid|pagado]] [[the|la]] [[bill|factura]].',
          options: ['[[already|ya]]', '[[yet|aún]]', '[[ever|alguna vez]]'],
          correctAnswer: 'yet',
          explanation: '[[Yet|Aún]] [[in|en]] [[negative|negativas]].',
        },
      ],
    },
    topicName: 'Vocabulary',
  },
  {
    id: 'a2-u13-l2-v11',
    type: 'fill-blank',
    level: 'A2',
    topic: 'Present Perfect Already Yet',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_FILL,
      questions: [
        {
          question: '[[Have|Has]] [[you|tú]] ____ [[done|hecho]] [[your|tus]] [[chores|tareas]]?',
          options: ['[[already|ya]]', '[[yet|aún]]', '[[never|nunca]]'],
          correctAnswer: 'yet',
          explanation: '[[Yet|Aún]] [[in|en]] [[questions|preguntas]].',
        },
      ],
    },
    topicName: 'Vocabulary',
  },
  {
    id: 'a2-u13-l2-v12',
    type: 'fill-blank',
    level: 'A2',
    topic: 'Present Perfect Already Yet',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_FILL,
      questions: [
        {
          question: '[[We|Nosotros]] [[have|hemos]] ____ [[finished|terminado]] [[all|todas]] [[our|nuestras]] [[tasks|tareas]].',
          options: ['[[already|ya]]', '[[yet|aún]]', '[[ever|alguna vez]]'],
          correctAnswer: 'already',
          explanation: '[[Already|Ya]] = [[completed|completado]] [[before|antes]] [[now|ahora]].',
        },
      ],
    },
    topicName: 'Vocabulary',
  },
  {
    id: 'a2-u13-l2-v13',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Present Perfect Already Yet',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_MC,
      questions: [
        {
          question: '[[What|Qué]] [[word|palabra]] [[means|significa]] "tareas domésticas"?',
          options: ['[[chores|tareas domésticas]]', '[[jobs|trabajos]]', '[[games|juegos]]'],
          correctAnswer: 0,
          explanation: '[[Chores|Tareas domésticas]] = [[cleaning|limpiar]], [[washing|lavar]], [[etc|etc]].',
        },
      ],
    },
    topicName: 'Vocabulary',
  },
  {
    id: 'a2-u13-l2-v14',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Present Perfect Already Yet',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_MC,
      questions: [
        {
          question: '"[[I|Yo]] [[have|he]] ____ [[done|hecho]] [[it|ello]]" [[means|significa]] "[[Ya|Ya]] [[lo|lo]] [[he|he]] [[hecho|hecho]]".',
          options: ['[[yet|aún]]', '[[already|ya]]', '[[never|nunca]]'],
          correctAnswer: 1,
          explanation: '[[Already|Ya]] [[emphasises|enfatiza]] [[completion|completado]].',
        },
      ],
    },
    topicName: 'Vocabulary',
  },
  {
    id: 'a2-u13-l2-v15',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Present Perfect Already Yet',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_MC,
      questions: [
        {
          question: '[[What|Qué]] [[word|palabra]] [[completes|complete]] [[the|la]] [[sentence|frase]]? "[[I|Yo]] [[haven\'t|no he]] ____ [[called|llamado]] [[her|a ella]]."',
          options: ['[[already|ya]]', '[[yet|aún]]', '[[ever|alguna vez]]'],
          correctAnswer: 1,
          explanation: '[[Yet|Aún]] [[at|al]] [[end|final]] [[of|de]] [[negative|negativas]].',
        },
      ],
    },
    topicName: 'Vocabulary',
  },
];
