/**
 * Unidad 14 — Lección 2: Vocabulario (Just, acciones recientes)
 * 15 ejercicios
 */

import { Exercise } from '@/lib/exercise-generator';

const LESSON_TITLE = '[[Vocabulary|Vocabulario]]: [[Just|acabar de]], [[recent|reciente]], [[actions|acciones]]';
const INSTRUCTIONS_MC = 'Elige la palabra correcta para cada definición o frase.';
const INSTRUCTIONS_MATCH = 'Relaciona cada palabra en inglés con su traducción.';
const INSTRUCTIONS_FILL = 'Completa la frase con la palabra correcta del recuadro.';

export const UNIT_14_LESSON_2_VOCABULARY: Exercise[] = [
  {
    id: 'a2-u14-l2-v1',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Present Perfect Just',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_MC,
      questions: [
        {
          question: '[[What|Qué]] [[word|palabra]] [[means|significa]] "acabar de" [[for|para]] [[recent|recientes]] [[actions|acciones]]?',
          options: ['[[already|ya]]', '[[just|acabar de]]', '[[yet|aún]]'],
          correctAnswer: 1,
          explanation: '[[Just|Acabar de]] = [[a|un]] [[moment|momento]] [[ago|atrás]], [[very|muy]] [[recent|reciente]].',
        },
      ],
    },
    topicName: 'Vocabulary',
  },
  {
    id: 'a2-u14-l2-v2',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Present Perfect Just',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_MC,
      questions: [
        {
          question: '[[What|Qué]] [[word|palabra]] [[means|significa]] "reciente"?',
          options: ['[[old|viejo]]', '[[recent|reciente]]', '[[future|futuro]]'],
          correctAnswer: 1,
          explanation: '[[Recent|Reciente]] = [[happened|pasó]] [[a|un]] [[short|poco]] [[time|tiempo]] [[ago|atrás]].',
        },
      ],
    },
    topicName: 'Vocabulary',
  },
  {
    id: 'a2-u14-l2-v3',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Present Perfect Just',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_MC,
      questions: [
        {
          question: '"[[I|Yo]] [[have|he]] ____ [[arrived|llegado]]" [[means|significa]] "[[Acabo|Acabo]] [[de|de]] [[llegar|llegar]]".',
          options: ['[[already|ya]]', '[[just|acabar de]]', '[[yet|aún]]'],
          correctAnswer: 1,
          explanation: '[[Just|Acabar de]] [[emphasises|enfatiza]] [[very|muy]] [[recent|reciente]].',
        },
      ],
    },
    topicName: 'Vocabulary',
  },
  {
    id: 'a2-u14-l2-v4',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Present Perfect Just',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_MC,
      questions: [
        {
          question: '[[What|Qué]] [[word|palabra]] [[means|significa]] "llegar"?',
          options: ['[[leave|salir]]', '[[arrive|llegar]]', '[[go|ir]]'],
          correctAnswer: 1,
          explanation: '[[Arrive|Llegar]] = [[reach|alcanzar]] [[a|un]] [[place|lugar]].',
        },
      ],
    },
    topicName: 'Vocabulary',
  },
  {
    id: 'a2-u14-l2-v5',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Present Perfect Just',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_MC,
      questions: [
        {
          question: '[[What|Qué]] [[word|palabra]] [[completes|complete]] [[the|la]] [[sentence|frase]]? "[[She|Ella]] [[has|ha]] ____ [[finished|terminado]] [[her|su]] [[lunch|comida]]."',
          options: ['[[yet|aún]]', '[[just|acabar de]]', '[[never|nunca]]'],
          correctAnswer: 1,
          explanation: '[[Just|Acabar de]] = [[very|muy]] [[recent|reciente]], [[a|un]] [[moment|momento]] [[ago|atrás]].',
        },
      ],
    },
    topicName: 'Vocabulary',
  },
  {
    id: 'a2-u14-l2-v6',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Present Perfect Just',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_MC,
      questions: [
        {
          question: '[[What|Qué]] [[word|palabra]] [[means|significa]] "hace un momento"?',
          options: ['[[just now|acabo de]]', '[[a moment ago|hace un momento]]', '[[tomorrow|mañana]]'],
          correctAnswer: 1,
          explanation: '[[A moment ago|Hace un momento]] = [[just|acabar de]], [[very|muy]] [[recent|reciente]].',
        },
      ],
    },
    topicName: 'Vocabulary',
  },
  {
    id: 'a2-u14-l2-v7',
    type: 'matching',
    level: 'A2',
    topic: 'Present Perfect Just',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_MATCH,
      pairs: [
        { id: 'p1', left: '[[Just|Acabar de]]', right: 'Acabar de' },
        { id: 'p2', left: '[[Recent|Reciente]]', right: 'Reciente' },
        { id: 'p3', left: '[[Arrived|Llegado]]', right: 'Llegado' },
        { id: 'p4', left: '[[Finished|Terminado]]', right: 'Terminado' },
      ],
    },
    topicName: 'Vocabulary',
  },
  {
    id: 'a2-u14-l2-v8',
    type: 'matching',
    level: 'A2',
    topic: 'Present Perfect Just',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_MATCH,
      pairs: [
        { id: 'p1', left: '[[Woken up|Despertado]]', right: 'Despertado' },
        { id: 'p2', left: '[[Left|Salido]]', right: 'Salido' },
        { id: 'p3', left: '[[Heard|Oído]]', right: 'Oído' },
        { id: 'p4', left: '[[Received|Recibido]]', right: 'Recibido' },
      ],
    },
    topicName: 'Vocabulary',
  },
  {
    id: 'a2-u14-l2-v9',
    type: 'fill-blank',
    level: 'A2',
    topic: 'Present Perfect Just',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_FILL,
      questions: [
        {
          question: '[[I|Yo]] [[have|he]] ____ [[arrived|llegado]] [[home|casa]].',
          options: ['[[just|acabar de]]', '[[already|ya]]', '[[yet|aún]]'],
          correctAnswer: 'just',
          explanation: '[[Just|Acabar de]] = [[very|muy]] [[recent|reciente]].',
        },
      ],
    },
    topicName: 'Vocabulary',
  },
  {
    id: 'a2-u14-l2-v10',
    type: 'fill-blank',
    level: 'A2',
    topic: 'Present Perfect Just',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_FILL,
      questions: [
        {
          question: '[[She|Ella]] [[has|ha]] ____ [[woken up|despertado]].',
          options: ['[[just|acabar de]]', '[[yet|aún]]', '[[never|nunca]]'],
          correctAnswer: 'just',
          explanation: '[[Just|Acabar de]] [[for|para]] [[recent|recientes]] [[actions|acciones]].',
        },
      ],
    },
    topicName: 'Vocabulary',
  },
  {
    id: 'a2-u14-l2-v11',
    type: 'fill-blank',
    level: 'A2',
    topic: 'Present Perfect Just',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_FILL,
      questions: [
        {
          question: '[[He|Él]] [[has|ha]] ____ [[received|recibido]] [[the|el]] [[email|email]].',
          options: ['[[already|ya]]', '[[just|acabar de]]', '[[yet|aún]]'],
          correctAnswer: 'just',
          explanation: '[[Just|Acabar de]] = [[a|un]] [[moment|momento]] [[ago|atrás]].',
        },
      ],
    },
    topicName: 'Vocabulary',
  },
  {
    id: 'a2-u14-l2-v12',
    type: 'fill-blank',
    level: 'A2',
    topic: 'Present Perfect Just',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_FILL,
      questions: [
        {
          question: '[[We|Nosotros]] [[have|hemos]] ____ [[heard|oído]] [[the|las]] [[news|noticias]].',
          options: ['[[just|acabar de]]', '[[yet|aún]]', '[[ever|alguna vez]]'],
          correctAnswer: 'just',
          explanation: '[[Just|Acabar de]] [[emphasises|enfatiza]] [[recent|reciente]].',
        },
      ],
    },
    topicName: 'Vocabulary',
  },
  {
    id: 'a2-u14-l2-v13',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Present Perfect Just',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_MC,
      questions: [
        {
          question: '[[Where|Dónde]] [[does|va]] [[just|acabar de]] [[go|ir]] [[in|en]] [[the|la]] [[sentence|frase]]?',
          options: ['[[at|al]] [[end|final]]', '[[between|entre]] [[have|have]] [[and|y]] [[past participle|participio pasado]]', '[[at|al]] [[beginning|principio]]', '[[never|nunca]] [[in|en]] [[Present Perfect|Presente Perfecto]]'],
          correctAnswer: 1,
          explanation: '[[Just|Acabar de]] [[goes|va]] [[between|entre]] [[have/has|have/has]] [[and|y]] [[past participle|participio pasado]].',
        },
      ],
    },
    topicName: 'Vocabulary',
  },
  {
    id: 'a2-u14-l2-v14',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Present Perfect Just',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_MC,
      questions: [
        {
          question: '"[[I|Yo]] [[have|he]] ____ [[left|salido]]" [[means|significa]] "[[Acabo|Acabo]] [[de|de]] [[salir|salir]]".',
          options: ['[[yet|aún]]', '[[just|acabar de]]', '[[already|ya]]'],
          correctAnswer: 1,
          explanation: '[[Just|Acabar de]] = [[very|muy]] [[recent|reciente]] [[action|acción]].',
        },
      ],
    },
    topicName: 'Vocabulary',
  },
  {
    id: 'a2-u14-l2-v15',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Present Perfect Just',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_MC,
      questions: [
        {
          question: '[[What|Qué]] [[is|es]] [[the|la]] [[difference|diferencia]] [[between|entre]] "[[just|acabar de]]" [[and|y]] "[[already|ya]]"?',
          options: ['[[No|Ninguna]] [[difference|diferencia]]', '[[Just|Acabar de]] = [[very|muy]] [[recent|reciente]], [[already|ya]] = [[before|antes]] [[now|ahora]]', '[[Just|Acabar de]] = [[negative|negativo]], [[already|ya]] = [[positive|positivo]]', '[[Just|Acabar de]] = [[future|futuro]], [[already|ya]] = [[past|pasado]]'],
          correctAnswer: 1,
          explanation: '[[Just|Acabar de]] [[emphasises|enfatiza]] [[a|un]] [[moment|momento]] [[ago|atrás]]; [[already|ya]] = [[completed|completado]] [[before|antes]] [[now|ahora]].',
        },
      ],
    },
    topicName: 'Vocabulary',
  },
];
