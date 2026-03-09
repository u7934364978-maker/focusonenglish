/**
 * Unidad 27 — Lección 2: Vocabulario (verdades generales, hechos científicos)
 * 15 ejercicios
 */

import { Exercise } from '@/lib/exercise-generator';

const LESSON_TITLE = '[[Vocabulary|Vocabulario]]: [[General Truths|Verdades Generales]] [[&|y]] [[Scientific Facts|Hechos Científicos]]';
const INSTRUCTIONS_MC = 'Elige la palabra correcta para cada definición o frase.';
const INSTRUCTIONS_MATCH = 'Relaciona cada palabra en inglés con su traducción.';
const INSTRUCTIONS_FILL = 'Completa la frase con la palabra correcta del recuadro.';

export const UNIT_27_LESSON_2_VOCABULARY: Exercise[] = [
  {
    id: 'a2-u27-l2-v1',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Zero Conditional',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_MC,
      questions: [
        {
          question: '"[[General truth|Verdad general]]" [[means|significa]] ____.',
          options: ['[[something|algo]] [[that|que]] [[is|es]] [[always|siempre]] [[true|verdadero]] [[for|para]] [[everyone|todos]]', '[[a personal|una personal]] [[opinion|opinión]]', '[[a future|una futura]] [[prediction|predicción]]'],
          correctAnswer: 0,
          explanation: '[[General truth|Verdad general]] = [[fact|hecho]] [[that|que]] [[is|es]] [[always|siempre]] [[true|verdadero]].',
        },
      ],
    },
    topicName: 'Vocabulary',
  },
  {
    id: 'a2-u27-l2-v2',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Zero Conditional',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_MC,
      questions: [
        {
          question: '"[[Scientific fact|Hecho científico]]" [[means|significa]] ____.',
          options: ['[[something|algo]] [[proven|probado]] [[by|por]] [[science|ciencia]] [[that|que]] [[is|es]] [[always|siempre]] [[true|verdadero]]', '[[a guess|una suposición]]', '[[a theory|una teoría]] [[not|no]] [[proven|probada]]'],
          correctAnswer: 0,
          explanation: '[[Scientific fact|Hecho científico]] = [[proven|probado]] [[by|por]] [[science|ciencia]].',
        },
      ],
    },
    topicName: 'Vocabulary',
  },
  {
    id: 'a2-u27-l2-v3',
    type: 'matching',
    level: 'A2',
    topic: 'Zero Conditional',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_MATCH,
      pairs: [
        { id: 'p1', left: '[[To heat|Calentar]]', right: 'Calentar' },
        { id: 'p2', left: '[[To boil|Hervir]]', right: 'Hervir' },
        { id: 'p3', left: '[[To freeze|Congelar]]', right: 'Congelar' },
        { id: 'p4', left: '[[To melt|Derretir]]', right: 'Derretir' },
      ],
    },
    topicName: 'Vocabulary',
  },
  {
    id: 'a2-u27-l2-v4',
    type: 'matching',
    level: 'A2',
    topic: 'Zero Conditional',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_MATCH,
      pairs: [
        { id: 'p1', left: '[[To mix|Mezclar]]', right: 'Mezclar' },
        { id: 'p2', left: '[[Ground|Suelo]]', right: 'Suelo' },
        { id: 'p3', left: '[[Wet|Mojado]]', right: 'Mojado' },
        { id: 'p4', left: '[[Ice|Hielo]]', right: 'Hielo' },
      ],
    },
    topicName: 'Vocabulary',
  },
  {
    id: 'a2-u27-l2-v5',
    type: 'fill-blank',
    level: 'A2',
    topic: 'Zero Conditional',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_FILL,
      questions: [
        {
          question: '[[If you heat water|Si calientas agua]], [[it|él]] ____ [[boils|hierve]].',
          options: ['[[boils|hierve]]', '[[will boil|hervirá]]', '[[boiled|hirvió]]'],
          correctAnswer: 'boils',
          explanation: '[[Zero Conditional|Condicional Cero]]: [[Present Simple|Presente Simple]] [[in both|en ambas]] [[clauses|oraciones]].',
        },
      ],
    },
    topicName: 'Vocabulary',
  },
  {
    id: 'a2-u27-l2-v6',
    type: 'fill-blank',
    level: 'A2',
    topic: 'Zero Conditional',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_FILL,
      questions: [
        {
          question: '[[If you mix|Si mezclas]] [[red|rojo]] ____ [[blue|azul]], [[you|tú]] [[get|obtienes]] [[purple|morado]].',
          options: ['[[and|y]]', '[[or|o]]', '[[with|con]]'],
          correctAnswer: 'and',
          explanation: '[[Mix red and blue|Mezclar rojo y azul]] = [[get|obtener]] [[purple|morado]].',
        },
      ],
    },
    topicName: 'Vocabulary',
  },
  {
    id: 'a2-u27-l2-v7',
    type: 'fill-blank',
    level: 'A2',
    topic: 'Zero Conditional',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_FILL,
      questions: [
        {
          question: '[[If water|Si el agua]] ____ [[freezes|se congela]], [[it|él]] [[turns|se convierte]] [[into|en]] [[ice|hielo]].',
          options: ['[[freezes|se congela]]', '[[will freeze|se congelará]]', '[[froze|se congeló]]'],
          correctAnswer: 'freezes',
          explanation: '[[Water freezes|El agua se congela]] [[at|a]] [[0°C|0°C]].',
        },
      ],
    },
    topicName: 'Vocabulary',
  },
  {
    id: 'a2-u27-l2-v8',
    type: 'fill-blank',
    level: 'A2',
    topic: 'Zero Conditional',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_FILL,
      questions: [
        {
          question: '[[If it rains|Si llueve]], [[the ground|el suelo]] ____ ____.',
          options: ['[[gets wet|se moja]]', '[[will get wet|se mojará]]', '[[got wet|se mojó]]'],
          correctAnswer: 'gets wet',
          explanation: '[[Zero Conditional|Condicional Cero]]: [[general|general]] [[truth|verdad]].',
        },
      ],
    },
    topicName: 'Vocabulary',
  },
  {
    id: 'a2-u27-l2-v9',
    type: 'fill-blank',
    level: 'A2',
    topic: 'Zero Conditional',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_FILL,
      questions: [
        {
          question: '[[If you put|Si pones]] [[ice|hielo]] ____ ____ ____, [[it|él]] [[melts|se derrite]].',
          options: ['[[in the sun|al sol]]', '[[in the fridge|en la nevera]]', '[[in the freezer|en el congelador]]'],
          correctAnswer: 'in the sun',
          explanation: '[[Ice melts|El hielo se derrite]] [[in|en]] [[the sun|el sol]].',
        },
      ],
    },
    topicName: 'Vocabulary',
  },
  {
    id: 'a2-u27-l2-v10',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Zero Conditional',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_MC,
      questions: [
        {
          question: '"[[To boil|Hervir]]" [[means|significa]] ____.',
          options: ['[[when|cuando]] [[water|agua]] [[reaches|alcanza]] [[100°C|100°C]] [[and|y]] [[bubbles|burbujea]]', '[[when|cuando]] [[water|agua]] [[freezes|se congela]]', '[[when|cuando]] [[water|agua]] [[evaporates|se evapora]]'],
          correctAnswer: 0,
          explanation: '[[Boil|Hervir]] = [[100°C|100°C]] [[for|para]] [[water|agua]].',
        },
      ],
    },
    topicName: 'Vocabulary',
  },
  {
    id: 'a2-u27-l2-v11',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Zero Conditional',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_MC,
      questions: [
        {
          question: '[[What|Qué]] [[word|palabra]] [[completes|complete]] [[the|la]] [[sentence|frase]]? "[[If you heat water|Si calientas agua]], [[it|él]] ____."',
          options: ['[[boils|hierve]]', '[[will boil|hervirá]]', '[[boiled|hirvió]]'],
          correctAnswer: 0,
          explanation: '[[Zero Conditional|Condicional Cero]]: [[boils|hierve]].',
        },
      ],
    },
    topicName: 'Vocabulary',
  },
  {
    id: 'a2-u27-l2-v12',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Zero Conditional',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_MC,
      questions: [
        {
          question: '"[[To freeze|Congelar]]" [[means|significa]] ____.',
          options: ['[[to turn|convertirse]] [[into|en]] [[ice|hielo]] [[when|cuando]] [[very|muy]] [[cold|frío]]', '[[to turn|convertirse]] [[into|en]] [[steam|vapor]]', '[[to mix|mezclar]] [[with|con]] [[something|algo]]'],
          correctAnswer: 0,
          explanation: '[[Freeze|Congelar]] = [[water|agua]] → [[ice|hielo]] [[at|a]] [[0°C|0°C]].',
        },
      ],
    },
    topicName: 'Vocabulary',
  },
  {
    id: 'a2-u27-l2-v13',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Zero Conditional',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_MC,
      questions: [
        {
          question: '"[[To melt|Derretir]]" [[means|significa]] ____.',
          options: ['[[when|cuando]] [[ice|hielo]] [[or|o]] [[snow|nieve]] [[turns|se convierte]] [[into|en]] [[water|agua]]', '[[when|cuando]] [[water|agua]] [[boils|hierve]]', '[[when|cuando]] [[water|agua]] [[freezes|se congela]]'],
          correctAnswer: 0,
          explanation: '[[Melt|Derretir]] = [[ice|hielo]] → [[water|agua]] [[when|cuando]] [[warm|caliente]].',
        },
      ],
    },
    topicName: 'Vocabulary',
  },
  {
    id: 'a2-u27-l2-v14',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Zero Conditional',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_MC,
      questions: [
        {
          question: '[[What|Qué]] [[word|palabra]] [[completes|complete]] [[the|la]] [[sentence|frase]]? "[[If you mix|Si mezclas]] [[red|rojo]] [[and|y]] [[blue|azul]], [[you|tú]] ____ [[purple|morado]]."',
          options: ['[[get|obtienes]]', '[[will get|obtendrás]]', '[[got|obtuviste]]'],
          correctAnswer: 0,
          explanation: '[[Zero Conditional|Condicional Cero]]: [[get|obtienes]].',
        },
      ],
    },
    topicName: 'Vocabulary',
  },
  {
    id: 'a2-u27-l2-v15',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Zero Conditional',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_MC,
      questions: [
        {
          question: '"[[To turn into|Convertirse en]]" [[means|significa]] ____.',
          options: ['[[to become|convertirse]] [[something else|en algo más]]', '[[to stay|permanecer]] [[the same|igual]]', '[[to disappear|desaparecer]]'],
          correctAnswer: 0,
          explanation: '[[Turn into|Convertirse en]] = [[water|agua]] [[turns into|se convierte en]] [[ice|hielo]].',
        },
      ],
    },
    topicName: 'Vocabulary',
  },
];
