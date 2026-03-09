/**
 * Unidad 10 — Lección 1: Gramática (Repaso Módulo 1)
 * 15 ejercicios: mix de unidades 1-9
 */

import { Exercise } from '@/lib/exercise-generator';

const LESSON_TITLE = '[[Grammar|Gramática]]: [[Module 1 Review|Repaso Módulo 1]]';
const INSTRUCTIONS_FILL = 'Elige la forma correcta para cada frase.';
const INSTRUCTIONS_MULTIPLE = 'Elige la frase o la forma correcta.';
const INSTRUCTIONS_ORDER = 'Ordena las palabras para formar una oración correcta.';
const INSTRUCTIONS_TF = 'Indica si la afirmación es verdadera o falsa.';

export const UNIT_10_LESSON_1_GRAMMAR: Exercise[] = [
  {
    id: 'a2-u10-l1-g1',
    type: 'fill-blank',
    level: 'A2',
    topic: 'Module 1 Review',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_FILL,
      questions: [
        {
          question: '[[I|Yo]] ____ [[to|a]] [[the|el]] [[park|parque]] [[yesterday|ayer]]. ([[walk|caminar]])',
          options: ['[[walk|andar]]', '[[walked|anduve]]', '[[walking|andando]]'],
          correctAnswer: 'walked',
          explanation: '[[Past Simple|Pasado Simple]] [[regular|regular]]: [[walk|Caminar]] → [[walked|caminé]].',
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a2-u10-l1-g2',
    type: 'fill-blank',
    level: 'A2',
    topic: 'Module 1 Review',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_FILL,
      questions: [
        {
          question: '[[She|Ella]] ____ [[to|a]] [[London|Londres]] [[last year|el año pasado]]. ([[go|ir]])',
          options: ['[[go|ir]]', '[[went|fui]]', '[[gone|ido]]'],
          correctAnswer: 'went',
          explanation: '[[Go|Ir]] → [[went|fui]]. [[Irregular verb|Verbo irregular]].',
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a2-u10-l1-g3',
    type: 'fill-blank',
    level: 'A2',
    topic: 'Module 1 Review',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_FILL,
      questions: [
        {
          question: '[[My|Mi]] [[brother|hermano]] [[is|es]] ____ [[than|que]] [[me|yo]]. ([[tall|alto]])',
          options: ['[[tall|alto]]', '[[taller|más alto]]', '[[tallest|el más alto]]'],
          correctAnswer: 'taller',
          explanation: '[[Comparatives|Comparativos]]: [[tall|alto]] → [[taller|más alto]].',
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a2-u10-l1-g4',
    type: 'fill-blank',
    level: 'A2',
    topic: 'Module 1 Review',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_FILL,
      questions: [
        {
          question: '[[She|Ella]] [[is|es]] ____ [[girl|chica]] [[in|en]] [[the|la]] [[class|clase]]. ([[tall|alto]])',
          options: ['[[tall|alto]]', '[[taller|más alto]]', '[[the tallest|el más alto]]'],
          correctAnswer: 'the tallest',
          explanation: '[[Superlatives|Superlativos]]: [[the tallest|la más alta]].',
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a2-u10-l1-g5',
    type: 'fill-blank',
    level: 'A2',
    topic: 'Module 1 Review',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_FILL,
      questions: [
        {
          question: '[[She|Ella]] [[speaks|habla]] [[English|inglés]] ____. ([[fluent|fluido]])',
          options: ['[[fluent|fluido]]', '[[fluently|con fluidez]]', '[[fluenter|(incorrecto)]]'],
          correctAnswer: 'fluently',
          explanation: '[[Adverbs of manner|Adverbios de modo]]: [[fluent|fluido]] → [[fluently|con fluidez]].',
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a2-u10-l1-g6',
    type: 'fill-blank',
    level: 'A2',
    topic: 'Module 1 Review',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_FILL,
      questions: [
        {
          question: '[[I|Yo]] [[get up|me levanto]] ____ [[7|7]] [[o\'clock|en punto]] [[every|cada]] [[morning|mañana]].',
          options: ['[[at|a]]', '[[on|en]]', '[[in|en]]'],
          correctAnswer: 'at',
          explanation: '[[Prepositions of time|Preposiciones de tiempo]]: [[at|a]] = [[specific|específico]] [[time|hora]].',
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a2-u10-l1-g7',
    type: 'fill-blank',
    level: 'A2',
    topic: 'Module 1 Review',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_FILL,
      questions: [
        {
          question: '[[She|Ella]] ____ [[into|en]] [[the|la]] [[room|habitación]] [[and|y]] [[closed|cerró]] [[the|la]] [[door|puerta]].',
          options: ['[[go|ir]]', '[[went|fui]]', '[[going|yendo]]'],
          correctAnswer: 'went',
          explanation: '[[Go|Ir]] → [[went|fui]]. [[Into|En]] = [[preposition of movement|preposición de movimiento]].',
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a2-u10-l1-g8',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Module 1 Review',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_MULTIPLE,
      questions: [
        {
          question: '[[Which|Cuál]] [[question|pregunta]] [[is|es]] [[correct|correcta]]?',
          options: [
            '[[What|Qué]] [[did|hizo]] [[you|tú]] [[do|hacer]] [[yesterday|ayer]]?',
            '[[What|Qué]] [[you|tú]] [[did|hizo]] [[do|hacer]] [[yesterday|ayer]]?',
            '[[Did|¿]] [[what|qué]] [[you|tú]] [[do|hacer]] [[yesterday|ayer]]?',
          ],
          correctAnswer: 0,
          explanation: '[[Wh-questions|Preguntas Wh]]: [[Wh-word|palabra Wh]] + [[did|hizo]] + [[subject|sujeto]] + [[verb|verbo]].',
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a2-u10-l1-g9',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Module 1 Review',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_MULTIPLE,
      questions: [
        {
          question: '[[Complete|Completa]]: "[[I|Yo]] ____ ____ ____ [[the|el]] [[car|coche]] [[and|y]] [[walked|caminé]] [[away|lejos]]."',
          options: ['[[got|salió]] [[out of|de]]', '[[got|entró]] [[into|en]]', '[[went|fue]] [[through|a través de]]'],
          correctAnswer: 0,
          explanation: '[[Get out of|Salir de]] = [[leave|dejar]] [[a|un]] [[vehicle|vehículo]].',
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a2-u10-l1-g10',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Module 1 Review',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_MULTIPLE,
      questions: [
        {
          question: '[[What|Qué]] [[preposition|preposición]] [[do we use|usamos]] [[for|para]] [[Monday|lunes]]?',
          options: ['[[at|a]]', '[[on|en]]', '[[in|en]]'],
          correctAnswer: 1,
          explanation: '[[On|En]] = [[days|días]]. [[On Monday|El lunes]].',
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a2-u10-l1-g11',
    type: 'sentence-building',
    level: 'A2',
    topic: 'Module 1 Review',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_ORDER,
      correctSentence: '[[I|Yo]] [[went|fui]] [[to|a]] [[the|el]] [[cinema|cine]] [[yesterday|ayer]].',
      words: ['[[went|fui]]', '[[I|Yo]]', '[[to|a]]', '[[the|el]]', '[[cinema|cine]]', '[[yesterday|ayer]].'],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a2-u10-l1-g12',
    type: 'sentence-building',
    level: 'A2',
    topic: 'Module 1 Review',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_ORDER,
      correctSentence: '[[She|Ella]] [[is|es]] [[the tallest|la más alta]] [[girl|chica]] [[in|en]] [[the|la]] [[class|clase]].',
      words: ['[[is|es]]', '[[She|Ella]]', '[[the tallest|la más alta]]', '[[girl|chica]]', '[[in|en]]', '[[the|la]]', '[[class|clase]].'],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a2-u10-l1-g13',
    type: 'sentence-building',
    level: 'A2',
    topic: 'Module 1 Review',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_ORDER,
      correctSentence: '[[I|Yo]] [[have|tengo]] [[breakfast|desayuno]] [[at|a]] [[8|8]] [[o\'clock|en punto]] [[in|por]] [[the|la]] [[morning|mañana]].',
      words: ['[[have|tengo]]', '[[I|Yo]]', '[[breakfast|desayuno]]', '[[at|a]]', '[[8|8]]', '[[o\'clock|en punto]]', '[[in|por]]', '[[the|la]]', '[[morning|mañana]].'],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a2-u10-l1-g14',
    type: 'true-false',
    level: 'A2',
    topic: 'Module 1 Review',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_TF,
      questions: [
        {
          question: '"[[She|Ella]] [[sings|canta]] [[good|bueno]]" [[is|es]] [[correct|correcto]] [[in|en]] [[English|inglés]].',
          options: ['[[True|Verdadero]]', '[[False|Falso]]'],
          correctAnswer: 'False',
          explanation: '[[False|Falso]]. [[We need|Necesitamos]] [[well|bien]], [[not|no]] [[good|bueno]]. [[Adverb|Adverbio]] [[modifies|modifica]] [[verb|verbo]].',
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a2-u10-l1-g15',
    type: 'true-false',
    level: 'A2',
    topic: 'Module 1 Review',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_TF,
      questions: [
        {
          question: '[[We use|Usamos]] "[[through|a través de]]" [[for|para]] [[walking|caminar]] [[inside|dentro]] [[a|un]] [[forest|bosque]] [[and|y]] "[[across|a través de]]" [[for|para]] [[crossing|cruzar]] [[a|una]] [[street|calle]].',
          options: ['[[True|Verdadero]]', '[[False|Falso]]'],
          correctAnswer: 'True',
          explanation: '[[True|Verdadero]]. [[Through|A través de]] = [[inside|dentro]]; [[across|a través de]] = [[over|sobre]] [[surface|superficie]].',
        },
      ],
    },
    topicName: 'Grammar',
  },
];
