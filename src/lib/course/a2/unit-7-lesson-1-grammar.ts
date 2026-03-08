/**
 * Unidad 7 — Lección 1: Gramática (Adverbios de modo)
 * 15 ejercicios: quickly, slowly, well, badly, -ly
 */

import { Exercise } from '@/lib/exercise-generator';

const LESSON_TITLE = '[[Adverbs of Manner|Adverbios de modo]]: [[quickly|rápidamente]], [[slowly|lentamente]], [[well|bien]], [[badly|mal]], [[-ly|-ly]]';
const INSTRUCTIONS_FILL = 'Elige el adverbio de modo correcto para cada frase.';
const INSTRUCTIONS_MULTIPLE = 'Elige la frase o la forma correcta.';
const INSTRUCTIONS_ORDER = 'Ordena las palabras para formar una oración correcta.';
const INSTRUCTIONS_TF = 'Indica si la afirmación es verdadera o falsa.';

export const UNIT_7_LESSON_1_GRAMMAR: Exercise[] = [
  {
    id: 'a2-u7-l1-g1',
    type: 'fill-blank',
    level: 'A2',
    topic: 'Adverbs of Manner',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_FILL,
      questions: [
        {
          question: '[[She|Ella]] [[runs|corre]] ____. ([[quick|rápido]])',
          options: ['quick', 'quickly', 'quicker'],
          correctAnswer: 'quickly',
          explanation: '[[Adverbs of manner|Adverbios de modo]]: [[adjective|adjetivo]] + -ly. [[Quick|Rápido]] → [[quickly|rápidamente]].',
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a2-u7-l1-g2',
    type: 'fill-blank',
    level: 'A2',
    topic: 'Adverbs of Manner',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_FILL,
      questions: [
        {
          question: '[[He|Él]] [[speaks|habla]] ____ [[because|porque]] [[he|él]] [[is|está]] [[tired|cansado]]. ([[slow|lento]])',
          options: ['slow', 'slowly', 'slower'],
          correctAnswer: 'slowly',
          explanation: '[[Slow|Lento]] → [[slowly|lentamente]]. [[Adverb|Adverbio]] [[modifies|modifica]] [[verb|verbo]] [[speaks|habla]].',
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a2-u7-l1-g3',
    type: 'fill-blank',
    level: 'A2',
    topic: 'Adverbs of Manner',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_FILL,
      questions: [
        {
          question: '[[She|Ella]] [[sings|canta]] ____. ([[good|bueno]])',
          options: ['good', 'well', 'goodly'],
          correctAnswer: 'well',
          explanation: '[[Good|Bueno]] [[is|es]] [[irregular|irregular]]: [[adverb|adverbio]] = [[well|bien]], [[not|no]] "[[goodly|buenamente]]".',
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a2-u7-l1-g4',
    type: 'fill-blank',
    level: 'A2',
    topic: 'Adverbs of Manner',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_FILL,
      questions: [
        {
          question: '[[He|Él]] [[played|jugó]] ____ [[in|en]] [[the|el]] [[match|partido]]. ([[bad|malo]])',
          options: ['bad', 'badly', 'badder'],
          correctAnswer: 'badly',
          explanation: '[[Bad|Malo]] → [[badly|mal]]. [[Adverb|Adverbio]] [[modifies|modifica]] [[played|jugó]].',
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a2-u7-l1-g5',
    type: 'fill-blank',
    level: 'A2',
    topic: 'Adverbs of Manner',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_FILL,
      questions: [
        {
          question: '[[They|Ellos]] [[work|trabajan]] ____. ([[careful|cuidadoso]])',
          options: ['careful', 'carefully', 'carefuller'],
          correctAnswer: 'carefully',
          explanation: '[[Careful|Cuidadoso]] → [[carefully|cuidadosamente]]. [[Adjective|Adjetivo]] [[ending|terminado]] [[in|en]] -ful: [[add|añade]] -ly.',
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a2-u7-l1-g6',
    type: 'fill-blank',
    level: 'A2',
    topic: 'Adverbs of Manner',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_FILL,
      questions: [
        {
          question: '[[She|Ella]] [[answered|respondió]] ____ [[the|la]] [[question|pregunta]]. ([[correct|correcto]])',
          options: ['correct', 'correctly', 'correcter'],
          correctAnswer: 'correctly',
          explanation: '[[Correct|Correcto]] → [[correctly|correctamente]]. [[Adjective|Adjetivo]] + -ly.',
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a2-u7-l1-g7',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Adverbs of Manner',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_MULTIPLE,
      questions: [
        {
          question: '[[Which|Cuál]] [[sentence|frase]] [[is|es]] [[correct|correcta]]?',
          options: [
            '[[She|Ella]] [[drives|conduce]] [[quick|rápido]].',
            '[[She|Ella]] [[drives|conduce]] [[quickly|rápidamente]].',
            '[[She|Ella]] [[drives|conduce]] [[quicklier|más rápido]].',
          ],
          correctAnswer: 1,
          explanation: '[[We use|Usamos]] [[adverb|adverbio]] [[to|para]] [[modify|modificar]] [[verb|verbo]]: [[quickly|rápidamente]], [[not|no]] [[adjective|adjetivo]] [[quick|rápido]].',
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a2-u7-l1-g8',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Adverbs of Manner',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_MULTIPLE,
      questions: [
        {
          question: '[[What|Cuál]] [[is|es]] [[the|el]] [[adverb|adverbio]] [[of|de]] "[[good|bueno]]"?',
          options: ['[[goodly|buenamente]]', '[[well|bien]]', '[[good|bueno]]'],
          correctAnswer: 1,
          explanation: '[[Good|Bueno]] [[is|es]] [[irregular|irregular]]: [[adverb|adverbio]] = [[well|bien]].',
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a2-u7-l1-g9',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Adverbs of Manner',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_MULTIPLE,
      questions: [
        {
          question: '[[Complete|Completa]]: "[[He|Él]] [[speaks|habla]] ____ [[English|inglés]]." ([[fluent|fluido]])',
          options: ['[[fluent|fluido]]', '[[fluently|con fluidez]]', '[[fluenter|más fluido]]'],
          correctAnswer: 1,
          explanation: '[[Fluent|Fluido]] → [[fluently|con fluidez]]. [[Adjective|Adjetivo]] + -ly.',
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a2-u7-l1-g10',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Adverbs of Manner',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_MULTIPLE,
      questions: [
        {
          question: '[[Where|Dónde]] [[do we put|ponemos]] [[adverbs of manner|adverbios de modo]] [[in|en]] [[a|una]] [[sentence|frase]]?',
          options: ['[[at|al]] [[the|el]] [[beginning|principio]]', '[[after|después]] [[the|del]] [[verb|verbo]] [[or|o]] [[object|objeto]]', '[[before|antes]] [[the|del]] [[subject|sujeto]]'],
          correctAnswer: 1,
          explanation: '[[Adverbs of manner|Adverbios de modo]] [[usually|normalmente]] [[go|van]] [[after|después]] [[the|del]] [[verb|verbo]] [[or|o]] [[object|objeto]].',
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a2-u7-l1-g11',
    type: 'sentence-building',
    level: 'A2',
    topic: 'Adverbs of Manner',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_ORDER,
      correctSentence: '[[She|Ella]] [[speaks|habla]] [[English|inglés]] [[fluently|con fluidez]].',
      words: ['[[speaks|habla]]', '[[She|Ella]]', '[[English|inglés]]', '[[fluently|con fluidez]].'],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a2-u7-l1-g12',
    type: 'sentence-building',
    level: 'A2',
    topic: 'Adverbs of Manner',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_ORDER,
      correctSentence: '[[He|Él]] [[drove|condujo]] [[very|muy]] [[slowly|lentamente]] [[through|por]] [[the|la]] [[town|ciudad]].',
      words: ['[[drove|condujo]]', '[[He|Él]]', '[[very|muy]]', '[[slowly|lentamente]]', '[[through|por]]', '[[the|la]]', '[[town|ciudad]].'],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a2-u7-l1-g13',
    type: 'sentence-building',
    level: 'A2',
    topic: 'Adverbs of Manner',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_ORDER,
      correctSentence: '[[They|Ellos]] [[worked|trabajaron]] [[very|muy]] [[hard|duro]] [[yesterday|ayer]].',
      words: ['[[worked|trabajaron]]', '[[They|Ellos]]', '[[very|muy]]', '[[hard|duro]]', '[[yesterday|ayer]].'],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a2-u7-l1-g14',
    type: 'true-false',
    level: 'A2',
    topic: 'Adverbs of Manner',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_TF,
      questions: [
        {
          question: '"[[She|Ella]] [[sings|canta]] [[good|bueno]]" [[is|es]] [[correct|correcto]] [[in|en]] [[English|inglés]].',
          options: ['[[True|Verdadero]]', '[[False|Falso]]'],
          correctAnswer: 'False',
          explanation: '[[False|Falso]]. [[We need|Necesitamos]] [[well|bien]], [[not|no]] [[good|bueno]]. [[Good|Bueno]] [[is|es]] [[adjective|adjetivo]]; [[well|bien]] [[is|es]] [[adverb|adverbio]].',
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a2-u7-l1-g15',
    type: 'true-false',
    level: 'A2',
    topic: 'Adverbs of Manner',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_TF,
      questions: [
        {
          question: '[[Most|La mayoría]] [[adverbs|adverbios]] [[of|de]] [[manner|modo]] [[are|son]] [[formed|formados]] [[by|añadiendo]] [[adding|por]] -ly [[to|a]] [[the|el]] [[adjective|adjetivo]].',
          options: ['[[True|Verdadero]]', '[[False|Falso]]'],
          correctAnswer: 'True',
          explanation: '[[True|Verdadero]]. [[Quick|Rápido]] → [[quickly|rápidamente]], [[slow|lento]] → [[slowly|lentamente]]. [[Exceptions|Excepciones]]: [[good|bueno]] → [[well|bien]], [[hard|duro]] [[stays|queda]] [[hard|duro]].',
        },
      ],
    },
    topicName: 'Grammar',
  },
];
