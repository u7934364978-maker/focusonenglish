/**
 * Unidad 23 — Lección 2: Vocabulario (promesas, ofertas, predicciones espontáneas)
 * 15 ejercicios
 */

import { Exercise } from '@/lib/exercise-generator';

const LESSON_TITLE = '[[Vocabulary|Vocabulario]]: [[Promises|Promesas]], [[Offers|Ofertas]] [[&|y]] [[Predictions|Predicciones]]';
const INSTRUCTIONS_MC = 'Elige la palabra correcta para cada definición o frase.';
const INSTRUCTIONS_MATCH = 'Relaciona cada palabra en inglés con su traducción.';
const INSTRUCTIONS_FILL = 'Completa la frase con la palabra correcta del recuadro.';

export const UNIT_23_LESSON_2_VOCABULARY: Exercise[] = [
  {
    id: 'a2-u23-l2-v1',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Will/Won\'t',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_MC,
      questions: [
        {
          question: '"[[Promise|Promesa]]" [[means|significa]] ____.',
          options: ['[[something|algo]] [[you|tú]] [[say|dices]] [[you|que]] [[will|volverá]] [[definitely|definitivamente]] [[do|hacer]]', '[[a question|una pregunta]]', '[[a suggestion|una sugerencia]]'],
          correctAnswer: 0,
          explanation: '[[Promise|Promesa]] = [[commitment|compromiso]] [[to|de]] [[do|hacer]] [[something|algo]].',
        },
      ],
    },
    topicName: 'Vocabulary',
  },
  {
    id: 'a2-u23-l2-v2',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Will/Won\'t',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_MC,
      questions: [
        {
          question: '"[[Offer|Oferta]]" [[means|significa]] ____.',
          options: ['[[to|a]] [[say|decir]] [[you|que]] [[will|volverá]] [[do|hacer]] [[something|algo]] [[for|para]] [[someone|alguien]]', '[[to refuse|rechazar]]', '[[to ask|preguntar]]'],
          correctAnswer: 0,
          explanation: '[[Offer|Oferta]] = [[I will help you|Te ayudaré]] [[when|cuando]] [[someone|alguien]] [[needs|necesita]] [[help|ayuda]].',
        },
      ],
    },
    topicName: 'Vocabulary',
  },
  {
    id: 'a2-u23-l2-v3',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Will/Won\'t',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_MC,
      questions: [
        {
          question: '"[[I promise|Lo prometo]]" [[means|significa]] ____.',
          options: ['[[I|Yo]] [[will|volverá]] [[definitely|definitivamente]] [[do|hacer]] [[it|eso]]', '[[maybe|quizás]]', '[[I|Yo]] [[don\'t know|no sé]]'],
          correctAnswer: 0,
          explanation: '"[[I promise|Lo prometo]]" [[strengthens|refuerza]] [[a promise|una promesa]].',
        },
      ],
    },
    topicName: 'Vocabulary',
  },
  {
    id: 'a2-u23-l2-v4',
    type: 'matching',
    level: 'A2',
    topic: 'Will/Won\'t',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_MATCH,
      pairs: [
        { id: 'p1', left: '[[Promise|Promesa]]', right: 'Promesa' },
        { id: 'p2', left: '[[Offer|Oferta]]', right: 'Oferta' },
        { id: 'p3', left: '[[Help|Ayudar]]', right: 'Ayudar' },
        { id: 'p4', left: '[[Forget|Olvidar]]', right: 'Olvidar' },
      ],
    },
    topicName: 'Vocabulary',
  },
  {
    id: 'a2-u23-l2-v5',
    type: 'matching',
    level: 'A2',
    topic: 'Will/Won\'t',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_MATCH,
      pairs: [
        { id: 'p1', left: '[[Probably|Probablemente]]', right: 'Probablemente' },
        { id: 'p2', left: '[[Definitely|Definitivamente]]', right: 'Definitivamente' },
        { id: 'p3', left: '[[Maybe|Quizás]]', right: 'Quizás' },
        { id: 'p4', left: '[[Certainly|Ciertamente]]', right: 'Ciertamente' },
      ],
    },
    topicName: 'Vocabulary',
  },
  {
    id: 'a2-u23-l2-v6',
    type: 'fill-blank',
    level: 'A2',
    topic: 'Will/Won\'t',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_FILL,
      questions: [
        {
          question: '[[I|Yo]] ____ [[help|ayudar]] [[you|te]] [[with|con]] [[your|tu]] [[homework|deberes]]. [[I promise|Lo prometo]].',
          options: ['[[will|volverá]]', '[[won\'t|no]]', '[[would|volvería]]'],
          correctAnswer: 'will',
          explanation: '[[Offer|Oferta]]: [[I will help you|Te ayudaré]].',
        },
      ],
    },
    topicName: 'Vocabulary',
  },
  {
    id: 'a2-u23-l2-v7',
    type: 'fill-blank',
    level: 'A2',
    topic: 'Will/Won\'t',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_FILL,
      questions: [
        {
          question: '[[I|Yo]] ____ [[tell|decir]] [[anyone|a nadie]] [[your|tu]] [[secret|secreto]]. [[I promise|Lo prometo]].',
          options: ['[[will|volverá]]', '[[won\'t|no]]', '[[would|volvería]]'],
          correctAnswer: 'won\'t',
          explanation: '[[Promise|Promesa]] [[negative|negativa]]: [[I won\'t tell|No diré]].',
        },
      ],
    },
    topicName: 'Vocabulary',
  },
  {
    id: 'a2-u23-l2-v8',
    type: 'fill-blank',
    level: 'A2',
    topic: 'Will/Won\'t',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_FILL,
      questions: [
        {
          question: '____ [[I|yo]] [[open|abrir]] [[the|la]] [[door|puerta]] [[for|para]] [[you|te]]?',
          options: ['[[Shall|¿Debería]]', '[[Will|¿Volverá]]', '[[Would|¿Volvería]]'],
          correctAnswer: 'Shall',
          explanation: '[[Offer|Oferta]]: "[[Shall I open the door?|¿Abro la puerta?]]" [[or|o]] "[[I will open it|La abriré]]".',
        },
      ],
    },
    topicName: 'Vocabulary',
  },
  {
    id: 'a2-u23-l2-v9',
    type: 'fill-blank',
    level: 'A2',
    topic: 'Will/Won\'t',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_FILL,
      questions: [
        {
          question: '[[They|Ellos]] ____ [[probably|probablemente]] [[arrive|llegar]] [[late|tarde]].',
          options: ['[[will|volverá]]', '[[won\'t|no]]', '[[would|volvería]]'],
          correctAnswer: 'will',
          explanation: '[[Prediction|Predicción]] [[with|con]] "[[probably|probablemente]]".',
        },
      ],
    },
    topicName: 'Vocabulary',
  },
  {
    id: 'a2-u23-l2-v10',
    type: 'fill-blank',
    level: 'A2',
    topic: 'Will/Won\'t',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_FILL,
      questions: [
        {
          question: '[[Don\'t worry|No te preocupes]]. [[I|Yo]] ____ ____ [[wait|esperar]] [[for|para]] [[you|te]].',
          options: ['[[will|volverá]]', '[[won\'t|no]]', '[[would|volvería]]'],
          correctAnswer: 'will',
          explanation: '[[Promise|Promesa]]: [[I will wait|Esperaré]] [[for you|por ti]].',
        },
      ],
    },
    topicName: 'Vocabulary',
  },
  {
    id: 'a2-u23-l2-v11',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Will/Won\'t',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_MC,
      questions: [
        {
          question: '"[[Don\'t worry|No te preocupes]]" [[is|es]] [[often|a menudo]] [[followed by|seguido de]] ____.',
          options: ['[[a promise|una promesa]] [[or|o]] [[reassurance|tranquilidad]]', '[[a question|una pregunta]]', '[[a complaint|una queja]]'],
          correctAnswer: 0,
          explanation: '"[[Don\'t worry|No te preocupes]]" [[is|es]] [[often|a menudo]] [[followed by|seguido de]] "[[I will help you|Te ayudaré]]" [[or|o]] "[[I will wait|Esperaré]]".',
        },
      ],
    },
    topicName: 'Vocabulary',
  },
  {
    id: 'a2-u23-l2-v12',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Will/Won\'t',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_MC,
      questions: [
        {
          question: '[[What|Qué]] [[word|palabra]] [[completes|complete]] [[the|la]] [[sentence|frase]]? "[[I|Yo]] ____ [[call|llamar]] [[you|te]] [[tomorrow|mañana]]."',
          options: ['[[will|volverá]]', '[[won\'t|no]]', '[[would|volvería]]'],
          correctAnswer: 0,
          explanation: '[[Promise|Promesa]]: [[I will call you|Te llamaré]] [[tomorrow|mañana]].',
        },
      ],
    },
    topicName: 'Vocabulary',
  },
  {
    id: 'a2-u23-l2-v13',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Will/Won\'t',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_MC,
      questions: [
        {
          question: '"[[Spontaneous|Espontánea]]" [[prediction|predicción]] [[means|significa]] ____.',
          options: ['[[a prediction|una predicción]] [[made|hecha]] [[at|en]] [[the|el]] [[moment|momento]] [[of|de]] [[speaking|hablar]]', '[[a planned|una planificada]] [[prediction|predicción]]', '[[a past|una pasada]] [[prediction|predicción]]'],
          correctAnswer: 0,
          explanation: '[[Spontaneous|Espontánea]] = [[not planned|no planificada]], [[at the moment|en el momento]].',
        },
      ],
    },
    topicName: 'Vocabulary',
  },
  {
    id: 'a2-u23-l2-v14',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Will/Won\'t',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_MC,
      questions: [
        {
          question: '"[[I\'ll|Yo]]" [[is|es]] [[the|la]] [[short form|forma corta]] [[of|de]] ____.',
          options: ['[[I will|yo volverá]]', '[[I would|yo volvería]]', '[[I won\'t|no volverá]]'],
          correctAnswer: 0,
          explanation: '[[I will|Yo volverá]] = [[I\'ll|yo]] ([[contraction|contracción]]).',
        },
      ],
    },
    topicName: 'Vocabulary',
  },
  {
    id: 'a2-u23-l2-v15',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Will/Won\'t',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_MC,
      questions: [
        {
          question: '[[What|Qué]] [[word|palabra]] [[completes|complete]] [[the|la]] [[sentence|frase]]? "[[She|Ella]] ____ ____ [[be|estar]] [[late|tarde]]. [[She|Ella]] [[always|siempre]] [[is|está]]."',
          options: ['[[will|volverá]]', '[[won\'t|no]]', '[[would|volvería]]'],
          correctAnswer: 0,
          explanation: '[[Prediction|Predicción]] [[based on|basada en]] [[habit|costumbre]]: [[she will probably be late|probablemente llegará tarde]].',
        },
      ],
    },
    topicName: 'Vocabulary',
  },
];
