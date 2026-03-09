/**
 * Unidad 22 — Lección 1: Gramática (Going to Predictions)
 * 15 ejercicios: going to para predicciones basadas en evidencia
 */

import { Exercise } from '@/lib/exercise-generator';

const LESSON_TITLE = '[[Going to|Voy a]]: [[Predictions|Predicciones]]';
const INSTRUCTIONS_FILL = 'Elige la forma correcta de [[going to|voy a]] para predicciones.';
const INSTRUCTIONS_MULTIPLE = 'Elige la frase o la forma correcta.';
const INSTRUCTIONS_ORDER = 'Ordena las palabras para formar una oración correcta.';
const INSTRUCTIONS_TF = 'Indica si la afirmación es verdadera o falsa.';

export const UNIT_22_LESSON_1_GRAMMAR: Exercise[] = [
  {
    id: 'a2-u22-l1-g1',
    type: 'fill-blank',
    level: 'A2',
    topic: 'Going to Predictions',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_FILL,
      questions: [
        {
          question: '[[Look|Mira]] [[at|a]] [[the|las]] [[clouds|nubes]]! [[It|Va]] ____ [[rain|llover]].',
          options: ['[[is going to|va a]]', '[[are going to|van a]]', '[[am going to|voy a]]'],
          correctAnswer: 'is going to',
          explanation: '[[Prediction|Predicción]] [[based on|basada en]] [[evidence|evidencia]]: [[clouds|nubes]] → [[rain|lluvia]]. [[It|Va]] + [[is going to|a]].',
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a2-u22-l1-g2',
    type: 'fill-blank',
    level: 'A2',
    topic: 'Going to Predictions',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_FILL,
      questions: [
        {
          question: '[[Be careful|Ten cuidado]]! [[That|Ese]] [[cup|vaso]] ____ [[fall|caer]].',
          options: ['[[is going to|va a]]', '[[are going to|van a]]', '[[am going to|voy a]]'],
          correctAnswer: 'is going to',
          explanation: '[[Prediction|Predicción]] [[based on|basada en]] [[what we see|lo que vemos]]: [[the cup|el vaso]] [[is|está]] [[near|cerca]] [[the edge|del borde]].',
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a2-u22-l1-g3',
    type: 'fill-blank',
    level: 'A2',
    topic: 'Going to Predictions',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_FILL,
      questions: [
        {
          question: '[[I think|Creo]] [[they|ellos]] ____ [[win|ganar]] [[the|el]] [[match|partido]].',
          options: ['[[is going to|va a]]', '[[are going to|van a]]', '[[am going to|voy a]]'],
          correctAnswer: 'are going to',
          explanation: '[[Prediction|Predicción]] [[with|con]] "[[I think|creo]]": [[they|ellos]] + [[are going to|van a]].',
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a2-u22-l1-g4',
    type: 'fill-blank',
    level: 'A2',
    topic: 'Going to Predictions',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_FILL,
      questions: [
        {
          question: '[[She|Ella]] ____ [[pass|aprobar]] [[the|el]] [[exam|examen]]. [[She|Ella]] [[studies|estudia]] [[hard|mucho]].',
          options: ['[[is going to|va a]]', '[[are going to|van a]]', '[[am going to|voy a]]'],
          correctAnswer: 'is going to',
          explanation: '[[Prediction|Predicción]] [[based on|basada en]] [[evidence|evidencia]]: [[she studies hard|estudia mucho]] → [[will pass|aprobará]].',
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a2-u22-l1-g5',
    type: 'fill-blank',
    level: 'A2',
    topic: 'Going to Predictions',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_FILL,
      questions: [
        {
          question: '[[I\'m sure|Estoy seguro]] [[he|él]] ____ [[get|conseguir]] [[the|el]] [[job|trabajo]].',
          options: ['[[is going to|va a]]', '[[are going to|van a]]', '[[am going to|voy a]]'],
          correctAnswer: 'is going to',
          explanation: '[[Prediction|Predicción]] [[with|con]] "[[I\'m sure|estoy seguro]]": [[he|él]] + [[is going to|va a]].',
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a2-u22-l1-g6',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Going to Predictions',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_MULTIPLE,
      questions: [
        {
          question: '[[When|Cuándo]] [[do|usamos]] [[we|nosotros]] [[use|usamos]] "[[going to|voy a]]" [[for|para]] [[predictions|predicciones]]?',
          options: [
            '[[When|Cuando]] [[we|nosotros]] [[have|tenemos]] [[evidence|evidencia]] [[or|o]] [[signs|señales]] [[that|que]] [[something|algo]] [[will happen|va a pasar]]',
            '[[When|Cuando]] [[we|nosotros]] [[make|hacemos]] [[plans|planes]] [[only|solo]]',
            '[[When|Cuando]] [[we|nosotros]] [[talk|hablamos]] [[about|sobre]] [[the past|el pasado]]',
          ],
          correctAnswer: 0,
          explanation: '"[[Going to|Voy a]]" [[for|para]] [[predictions|predicciones]] = [[evidence|evidencia]] [[or|o]] [[signs|señales]] [[we can see|que podemos ver]].',
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a2-u22-l1-g7',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Going to Predictions',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_MULTIPLE,
      questions: [
        {
          question: '"[[Look at the clouds! It\'s going to rain|Mira las nubes! Va a llover]]" [[—|—]] [[this is|esto es]] ____.',
          options: ['[[a plan|un plan]]', '[[a prediction|una predicción]] [[based on|basada en]] [[evidence|evidencia]]', '[[a promise|una promesa]]'],
          correctAnswer: 1,
          explanation: '[[Clouds|Nubes]] = [[evidence|evidencia]] [[that|de que]] [[rain|lluvia]] [[is coming|está por llegar]].',
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a2-u22-l1-g8',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Going to Predictions',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_MULTIPLE,
      questions: [
        {
          question: '[[Which|Cuál]] [[phrase|frase]] [[expresses|expresa]] [[a prediction|una predicción]]?',
          options: [
            '[[It|Va]] [[is going to|a]] [[rain|llover]] [[tomorrow|mañana]].',
            '[[I|Yo]] [[went|fui]] [[to|a]] [[the|el]] [[shop|tienda]] [[yesterday|ayer]].',
            '[[She|Ella]] [[studies|estudia]] [[every day|cada día]].',
          ],
          correctAnswer: 0,
          explanation: '"[[It is going to rain|Va a llover]]" [[expresses|expresa]] [[a prediction|una predicción]] [[about|sobre]] [[the weather|el tiempo]].',
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a2-u22-l1-g9',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Going to Predictions',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_MULTIPLE,
      questions: [
        {
          question: '[[Complete|Completa]]: "[[I think|Creo]] [[the|el]] [[team|equipo]] ____ ____ [[win|ganar]]."',
          options: ['[[is going to|va a]]', '[[are going to|van a]]', '[[am going to|voy a]]'],
          correctAnswer: 1,
          explanation: '[[The team|El equipo]] = [[they|ellos]] → [[are going to|van a]].',
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a2-u22-l1-g10',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Going to Predictions',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_MULTIPLE,
      questions: [
        {
          question: '[[Which|Cuál]] [[word|palabra]] [[often|a menudo]] [[introduces|introduce]] [[predictions|predicciones]]?',
          options: ['[[I think|Creo]]', '[[Yesterday|Ayer]]', '[[Always|Siempre]]'],
          correctAnswer: 0,
          explanation: '"[[I think|Creo]]" [[and|y]] "[[I\'m sure|Estoy seguro]]" [[often|a menudo]] [[introduce|introducen]] [[predictions|predicciones]].',
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a2-u22-l1-g11',
    type: 'sentence-building',
    level: 'A2',
    topic: 'Going to Predictions',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_ORDER,
      correctSentence: '[[Look|Mira]] [[at|a]] [[the|las]] [[clouds|nubes]]! [[It|Va]] [[is going to|a]] [[rain|llover]].',
      words: ['[[Look|Mira]]', '[[at|a]]', '[[the|las]]', '[[clouds|nubes]]!', '[[It|Va]]', '[[is going to|a]]', '[[rain|llover]].'],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a2-u22-l1-g12',
    type: 'sentence-building',
    level: 'A2',
    topic: 'Going to Predictions',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_ORDER,
      correctSentence: '[[I think|Creo]] [[they|ellos]] [[are going to|van a]] [[win|ganar]] [[the|el]] [[match|partido]].',
      words: ['[[I think|Creo]]', '[[they|ellos]]', '[[are going to|van a]]', '[[win|ganar]]', '[[the|el]]', '[[match|partido]].'],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a2-u22-l1-g13',
    type: 'sentence-building',
    level: 'A2',
    topic: 'Going to Predictions',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_ORDER,
      correctSentence: '[[Be careful|Ten cuidado]]! [[That|Ese]] [[cup|vaso]] [[is going to|va a]] [[fall|caer]].',
      words: ['[[Be careful|Ten cuidado]]!', '[[That|Ese]]', '[[cup|vaso]]', '[[is going to|va a]]', '[[fall|caer]].'],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a2-u22-l1-g14',
    type: 'true-false',
    level: 'A2',
    topic: 'Going to Predictions',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_TF,
      questions: [
        {
          question: '"[[Going to|Voy a]]" [[can|puede]] [[be|ser]] [[used|usado]] [[for|para]] [[predictions|predicciones]] [[based on|basadas en]] [[evidence|evidencia]].',
          options: ['[[True|Verdadero]]', '[[False|Falso]]'],
          correctAnswer: 'True',
          explanation: '[[True|Verdadero]]. [[Going to|Voy a]] [[for|para]] [[predictions|predicciones]] = [[evidence|evidencia]] [[we can see|que podemos ver]].',
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a2-u22-l1-g15',
    type: 'true-false',
    level: 'A2',
    topic: 'Going to Predictions',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_TF,
      questions: [
        {
          question: '"[[It|Va]] [[are going to|van a]] [[rain|llover]]" [[is|es]] [[correct|correcto]] [[in|en]] [[English|inglés]].',
          options: ['[[True|Verdadero]]', '[[False|Falso]]'],
          correctAnswer: 'False',
          explanation: '[[False|Falso]]. [[Correct|Correcto]]: "[[It is going to rain|Va a llover]]". [[It|Va]] + [[is going to|a]].',
        },
      ],
    },
    topicName: 'Grammar',
  },
];
