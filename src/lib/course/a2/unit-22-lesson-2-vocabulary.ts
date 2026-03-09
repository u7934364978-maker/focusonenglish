/**
 * Unidad 22 — Lección 2: Vocabulario (tiempo, resultados, consecuencias)
 * 15 ejercicios
 */

import { Exercise } from '@/lib/exercise-generator';

const LESSON_TITLE = '[[Vocabulary|Vocabulario]]: [[Weather|Tiempo]], [[Results|Resultados]] [[&|y]] [[Consequences|Consecuencias]]';
const INSTRUCTIONS_MC = 'Elige la palabra correcta para cada definición o frase.';
const INSTRUCTIONS_MATCH = 'Relaciona cada palabra en inglés con su traducción.';
const INSTRUCTIONS_FILL = 'Completa la frase con la palabra correcta del recuadro.';

export const UNIT_22_LESSON_2_VOCABULARY: Exercise[] = [
  {
    id: 'a2-u22-l2-v1',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Going to Predictions',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_MC,
      questions: [
        {
          question: '"[[Rain|Llover]]" [[means|significa]] ____.',
          options: ['[[water|agua]] [[falling|caer]] [[from|desde]] [[the|el]] [[sky|cielo]]', '[[sun|sol]] [[shining|brillando]]', '[[snow|nieve]] [[falling|caer]]'],
          correctAnswer: 0,
          explanation: '[[Rain|Lluvia]] = [[water|agua]] [[from|desde]] [[clouds|nubes]].',
        },
      ],
    },
    topicName: 'Vocabulary',
  },
  {
    id: 'a2-u22-l2-v2',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Going to Predictions',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_MC,
      questions: [
        {
          question: '"[[Clouds|Nubes]]" [[are|son]] ____.',
          options: ['[[white|blancas]] [[or|o]] [[grey|grises]] [[shapes|formas]] [[in|en]] [[the|el]] [[sky|cielo]]', '[[stars|estrellas]]', '[[the|el]] [[sun|sol]]'],
          correctAnswer: 0,
          explanation: '[[Clouds|Nubes]] = [[often|a menudo]] [[mean|significan]] [[rain|lluvia]] [[is coming|está por llegar]].',
        },
      ],
    },
    topicName: 'Vocabulary',
  },
  {
    id: 'a2-u22-l2-v3',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Going to Predictions',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_MC,
      questions: [
        {
          question: '"[[Fall|Caer]]" [[means|significa]] ____.',
          options: ['[[drop|dejar caer]] [[down|abajo]] [[because of|por]] [[gravity|gravedad]]', '[[run|correr]]', '[[jump|saltar]]'],
          correctAnswer: 0,
          explanation: '[[Fall|Caer]] = [[move|moverse]] [[down|hacia abajo]] [[suddenly|de repente]].',
        },
      ],
    },
    topicName: 'Vocabulary',
  },
  {
    id: 'a2-u22-l2-v4',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Going to Predictions',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_MC,
      questions: [
        {
          question: '"[[Win|Ganar]]" [[means|significa]] ____.',
          options: ['[[be|ser]] [[successful|exitoso]] [[in|en]] [[a|una]] [[competition|competición]] [[or|o]] [[game|juego]]', '[[lose|perder]]', '[[play|jugar]]'],
          correctAnswer: 0,
          explanation: '[[Win|Ganar]] = [[get|conseguir]] [[first|primero]] [[place|lugar]] [[in|en]] [[a|una]] [[game|juego]] [[or|o]] [[race|carrera]].',
        },
      ],
    },
    topicName: 'Vocabulary',
  },
  {
    id: 'a2-u22-l2-v5',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Going to Predictions',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_MC,
      questions: [
        {
          question: '"[[I\'m sure|Estoy seguro]]" [[means|significa]] ____.',
          options: ['[[I|Yo]] [[am|estoy]] [[certain|seguro]] [[that|de que]] [[something|algo]] [[will happen|va a pasar]]', '[[I|Yo]] [[don\'t know|no sé]]', '[[Maybe|Quizás]]'],
          correctAnswer: 0,
          explanation: '"[[I\'m sure|Estoy seguro]]" [[introduces|introduce]] [[strong|fuerte]] [[predictions|predicciones]].',
        },
      ],
    },
    topicName: 'Vocabulary',
  },
  {
    id: 'a2-u22-l2-v6',
    type: 'matching',
    level: 'A2',
    topic: 'Going to Predictions',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_MATCH,
      pairs: [
        { id: 'p1', left: '[[Rain|Llover]]', right: 'Llover' },
        { id: 'p2', left: '[[Clouds|Nubes]]', right: 'Nubes' },
        { id: 'p3', left: '[[Fall|Caer]]', right: 'Caer' },
        { id: 'p4', left: '[[Win|Ganar]]', right: 'Ganar' },
      ],
    },
    topicName: 'Vocabulary',
  },
  {
    id: 'a2-u22-l2-v7',
    type: 'matching',
    level: 'A2',
    topic: 'Going to Predictions',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_MATCH,
      pairs: [
        { id: 'p1', left: '[[Prediction|Predicción]]', right: 'Predicción' },
        { id: 'p2', left: '[[Evidence|Evidencia]]', right: 'Evidencia' },
        { id: 'p3', left: '[[Result|Resultado]]', right: 'Resultado' },
        { id: 'p4', left: '[[Consequence|Consecuencia]]', right: 'Consecuencia' },
      ],
    },
    topicName: 'Vocabulary',
  },
  {
    id: 'a2-u22-l2-v8',
    type: 'fill-blank',
    level: 'A2',
    topic: 'Going to Predictions',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_FILL,
      questions: [
        {
          question: '[[Look|Mira]] [[at|a]] [[the|las]] ____! [[It|Va]] [[is going to|a]] [[rain|llover]].',
          options: ['[[clouds|nubes]]', '[[sun|sol]]', '[[stars|estrellas]]'],
          correctAnswer: 'clouds',
          explanation: '[[Clouds|Nubes]] = [[evidence|evidencia]] [[of|de]] [[rain|lluvia]] [[coming|por llegar]].',
        },
      ],
    },
    topicName: 'Vocabulary',
  },
  {
    id: 'a2-u22-l2-v9',
    type: 'fill-blank',
    level: 'A2',
    topic: 'Going to Predictions',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_FILL,
      questions: [
        {
          question: '[[I think|Creo]] [[they|ellos]] [[are going to|van a]] ____ [[the|el]] [[match|partido]]. [[They|Ellos]] [[are|son]] [[playing|jugando]] [[well|bien]].',
          options: ['[[win|ganar]]', '[[lose|perder]]', '[[draw|empatar]]'],
          correctAnswer: 'win',
          explanation: '[[Win|Ganar]] = [[be|ser]] [[successful|exitoso]] [[in|en]] [[a|una]] [[match|partido]].',
        },
      ],
    },
    topicName: 'Vocabulary',
  },
  {
    id: 'a2-u22-l2-v10',
    type: 'fill-blank',
    level: 'A2',
    topic: 'Going to Predictions',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_FILL,
      questions: [
        {
          question: '[[Be careful|Ten cuidado]]! [[That|Ese]] [[cup|vaso]] [[is going to|va a]] ____ [[off|de]] [[the|la]] [[table|mesa]].',
          options: ['[[fall|caer]]', '[[run|correr]]', '[[jump|saltar]]'],
          correctAnswer: 'fall',
          explanation: '[[Fall|Caer]] = [[drop|dejar caer]] [[down|abajo]].',
        },
      ],
    },
    topicName: 'Vocabulary',
  },
  {
    id: 'a2-u22-l2-v11',
    type: 'fill-blank',
    level: 'A2',
    topic: 'Going to Predictions',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_FILL,
      questions: [
        {
          question: '[[I\'m sure|Estoy seguro]] [[she|ella]] [[is going to|va a]] ____ [[the|el]] [[exam|examen]]. [[She|Ella]] [[studies|estudia]] [[hard|mucho]].',
          options: ['[[pass|aprobar]]', '[[fail|suspender]]', '[[miss|perder]]'],
          correctAnswer: 'pass',
          explanation: '[[Pass|Aprobar]] = [[succeed|tener éxito]] [[in|en]] [[an|un]] [[exam|examen]].',
        },
      ],
    },
    topicName: 'Vocabulary',
  },
  {
    id: 'a2-u22-l2-v12',
    type: 'fill-blank',
    level: 'A2',
    topic: 'Going to Predictions',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_FILL,
      questions: [
        {
          question: '[[The|El]] [[sky|cielo]] [[is|está]] [[dark|oscuro]]. [[It|Va]] [[is going to|a]] ____ [[soon|pronto]].',
          options: ['[[rain|llover]]', '[[snow|nevar]]', '[[shine|brillar]]'],
          correctAnswer: 'rain',
          explanation: '[[Dark sky|Cielo oscuro]] = [[evidence|evidencia]] [[of|de]] [[rain|lluvia]].',
        },
      ],
    },
    topicName: 'Vocabulary',
  },
  {
    id: 'a2-u22-l2-v13',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Going to Predictions',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_MC,
      questions: [
        {
          question: '"[[Storm|Tormenta]]" [[means|significa]] ____.',
          options: ['[[bad|mal]] [[weather|tiempo]] [[with|con]] [[rain|lluvia]], [[wind|viento]] [[and|y]] [[thunder|truenos]]', '[[sunny|soleado]] [[day|día]]', '[[cold|frío]] [[night|noche]]'],
          correctAnswer: 0,
          explanation: '[[Storm|Tormenta]] = [[strong|fuerte]] [[weather|tiempo]] [[with|con]] [[rain|lluvia]] [[and|y]] [[wind|viento]].',
        },
      ],
    },
    topicName: 'Vocabulary',
  },
  {
    id: 'a2-u22-l2-v14',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Going to Predictions',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_MC,
      questions: [
        {
          question: '[[What|Qué]] [[word|palabra]] [[completes|complete]] [[the|la]] [[sentence|frase]]? "[[I think|Creo]] [[he|él]] ____ ____ ____ [[get|conseguir]] [[the|el]] [[job|trabajo]]."',
          options: ['[[is going to|va a]]', '[[are going to|van a]]', '[[am going to|voy a]]'],
          correctAnswer: 0,
          explanation: '[[He|Él]] + [[is going to|va a]] + [[infinitive|infinitivo]].',
        },
      ],
    },
    topicName: 'Vocabulary',
  },
  {
    id: 'a2-u22-l2-v15',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Going to Predictions',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_MC,
      questions: [
        {
          question: '"[[Evidence|Evidencia]]" [[means|significa]] ____.',
          options: ['[[something|algo]] [[that|que]] [[shows|muestra]] [[or|o]] [[proves|prueba]] [[that|que]] [[something|algo]] [[is true|es verdad]]', '[[a guess|una suposición]]', '[[a plan|un plan]]'],
          correctAnswer: 0,
          explanation: '[[Evidence|Evidencia]] = [[signs|señales]] [[we can see|que podemos ver]] [[to make|para hacer]] [[predictions|predicciones]].',
        },
      ],
    },
    topicName: 'Vocabulary',
  },
];
