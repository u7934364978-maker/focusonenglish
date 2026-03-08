/**
 * Unidad 5 — Lección 1: Gramática (Comparativos)
 * 15 ejercicios: -er, more, than
 */

import { Exercise } from '@/lib/exercise-generator';

const LESSON_TITLE = '[[Comparatives|Comparativos]]: [[-er|más]], [[more|más]], [[than|que]]';
const INSTRUCTIONS_FILL = 'Elige la forma comparativa correcta para cada frase.';
const INSTRUCTIONS_MULTIPLE = 'Elige la frase o la forma correcta.';
const INSTRUCTIONS_ORDER = 'Ordena las palabras para formar una oración correcta.';
const INSTRUCTIONS_TF = 'Indica si la afirmación es verdadera o falsa.';

export const UNIT_5_LESSON_1_GRAMMAR: Exercise[] = [
  {
    id: 'a2-u5-l1-g1',
    type: 'fill-blank',
    level: 'A2',
    topic: 'Comparatives',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_FILL,
      questions: [
        {
          question: '[[My|Mi]] [[brother|hermano]] [[is|es]] ____ [[than|que]] [[me|yo]]. ([[tall|alto]])',
          options: ['tall', 'taller', 'tallest'],
          correctAnswer: 'taller',
          explanation: '[[Short adjectives|Adjetivos cortos]]: [[add|añade]] -er. [[Tall|Alto]] → [[taller|más alto]].',
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a2-u5-l1-g2',
    type: 'fill-blank',
    level: 'A2',
    topic: 'Comparatives',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_FILL,
      questions: [
        {
          question: '[[This|Este]] [[book|libro]] [[is|es]] ____ [[than|que]] [[that|ese]] [[one|uno]]. ([[interesting|interesante]])',
          options: ['interesting', 'more interesting', 'most interesting'],
          correctAnswer: 'more interesting',
          explanation: '[[Long adjectives|Adjetivos largos]]: [[use|usa]] [[more|más]] + [[adjective|adjetivo]].',
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a2-u5-l1-g3',
    type: 'fill-blank',
    level: 'A2',
    topic: 'Comparatives',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_FILL,
      questions: [
        {
          question: '[[Summer|Verano]] [[is|es]] ____ [[than|que]] [[winter|invierno]]. ([[hot|caliente]])',
          options: ['hot', 'hotter', 'hottest'],
          correctAnswer: 'hotter',
          explanation: '[[Hot|Caliente]]: [[double|doble]] [[consonant|consonante]] + -er → [[hotter|más caliente]].',
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a2-u5-l1-g4',
    type: 'fill-blank',
    level: 'A2',
    topic: 'Comparatives',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_FILL,
      questions: [
        {
          question: '[[My|Mi]] [[car|coche]] [[is|es]] ____ [[than|que]] [[yours|el tuyo]]. ([[expensive|caro]])',
          options: ['expensive', 'more expensive', 'expensiver'],
          correctAnswer: 'more expensive',
          explanation: '[[Expensive|Caro]]: [[3+ syllables|3+ sílabas]] → [[more expensive|más caro]].',
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a2-u5-l1-g5',
    type: 'fill-blank',
    level: 'A2',
    topic: 'Comparatives',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_FILL,
      questions: [
        {
          question: '[[She|Ella]] [[runs|corre]] ____ [[than|que]] [[me|yo]]. ([[fast|rápido]])',
          options: ['fast', 'faster', 'fastest'],
          correctAnswer: 'faster',
          explanation: '[[Fast|Rápido]]: [[add|añade]] -er → [[faster|más rápido]].',
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a2-u5-l1-g6',
    type: 'fill-blank',
    level: 'A2',
    topic: 'Comparatives',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_FILL,
      questions: [
        {
          question: '[[This|Este]] [[film|película]] [[is|es]] ____ [[than|que]] [[the|la]] [[other|otra]]. ([[good|bueno]])',
          options: ['good', 'gooder', 'better'],
          correctAnswer: 'better',
          explanation: '[[Good|Bueno]]: [[irregular|irregular]] → [[better|mejor]].',
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a2-u5-l1-g7',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Comparatives',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_MULTIPLE,
      questions: [
        {
          question: '[[Which|Cuál]] [[sentence|frase]] [[is|es]] [[correct|correcta]]?',
          options: [
            '[[This|Este]] [[room|habitación]] [[is|es]] [[big|grande]] [[than|que]] [[that|esa]].',
            '[[This|Este]] [[room|habitación]] [[is|es]] [[bigger|más grande]] [[than|que]] [[that|esa]].',
            '[[This|Este]] [[room|habitación]] [[is|es]] [[more big|más grande]] [[than|que]] [[that|esa]].',
          ],
          correctAnswer: 1,
          explanation: '[[Big|Grande]]: [[double|doble]] [[consonant|consonante]] + -er → [[bigger|más grande]].',
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a2-u5-l1-g8',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Comparatives',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_MULTIPLE,
      questions: [
        {
          question: '[[Which|Cuál]] [[word|palabra]] [[do|usamos]] [[we|nosotros]] [[use|usar]] [[to|para]] [[compare|comparar]]?',
          options: ['[[that|ese]]', '[[than|que]]', '[[then|entonces]]'],
          correctAnswer: 1,
          explanation: '[[Than|Que]] [[connects|conecta]] [[the|los]] [[two|dos]] [[things|cosas]] [[we|que]] [[compare|comparamos]].',
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a2-u5-l1-g9',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Comparatives',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_MULTIPLE,
      questions: [
        {
          question: '[[Complete|Completa]]: "[[This|Este]] [[test|examen]] [[is|es]] ____ [[than|que]] [[the|el]] [[last|último]]." ([[difficult|difícil]])',
          options: ['[[difficulter|más difícil]]', '[[more difficult|más difícil]]', '[[difficulter|más difícil]]'],
          correctAnswer: 1,
          explanation: '[[Difficult|Difícil]]: [[long adjective|adjetivo largo]] → [[more difficult|más difícil]].',
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a2-u5-l1-g10',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Comparatives',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_MULTIPLE,
      questions: [
        {
          question: '[[What|Cuál]] [[is|es]] [[the|el]] [[comparative|comparativo]] [[of|de]] "[[bad|malo]]"?',
          options: ['[[badder|más malo]]', '[[more bad|más malo]]', '[[worse|peor]]'],
          correctAnswer: 2,
          explanation: '[[Bad|Malo]]: [[irregular|irregular]] → [[worse|peor]].',
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a2-u5-l1-g11',
    type: 'sentence-building',
    level: 'A2',
    topic: 'Comparatives',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_ORDER,
      correctSentence: '[[My|Mi]] [[sister|hermana]] [[is|es]] [[taller|más alta]] [[than|que]] [[me|yo]].',
      words: ['[[My|Mi]]', '[[sister|hermana]]', '[[is|es]]', '[[taller|más alta]]', '[[than|que]]', '[[me|yo]].'],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a2-u5-l1-g12',
    type: 'sentence-building',
    level: 'A2',
    topic: 'Comparatives',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_ORDER,
      correctSentence: '[[This|Este]] [[film|película]] [[is|es]] [[more interesting|más interesante]] [[than|que]] [[that|esa]].',
      words: ['[[This|Este]]', '[[film|película]]', '[[is|es]]', '[[more interesting|más interesante]]', '[[than|que]]', '[[that|esa]].'],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a2-u5-l1-g13',
    type: 'sentence-building',
    level: 'A2',
    topic: 'Comparatives',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_ORDER,
      correctSentence: '[[London|Londres]] [[is|es]] [[bigger|más grande]] [[than|que]] [[Madrid|Madrid]].',
      words: ['[[London|Londres]]', '[[is|es]]', '[[bigger|más grande]]', '[[than|que]]', '[[Madrid|Madrid]].'],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a2-u5-l1-g14',
    type: 'true-false',
    level: 'A2',
    topic: 'Comparatives',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_TF,
      questions: [
        {
          question: '"[[More|Más]] [[big|grande]]" [[is|es]] [[correct|correcto]] [[for|para]] [[the|el]] [[comparative|comparativo]] [[of|de]] "[[big|grande]]" [[in|en]] [[English|inglés]].',
          options: ['[[True|Verdadero]]', '[[False|Falso]]'],
          correctAnswer: 'False',
          explanation: '[[False|Falso]]. [[Big|Grande]] → [[bigger|más grande]], [[not|no]] "[[more big|más grande]]".',
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a2-u5-l1-g15',
    type: 'true-false',
    level: 'A2',
    topic: 'Comparatives',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_TF,
      questions: [
        {
          question: '"[[Than|Que]]" [[is|es]] [[used|usado]] [[to|para]] [[connect|conectar]] [[two|dos]] [[things|cosas]] [[we|que]] [[compare|comparamos]] [[in|en]] [[English|inglés]].',
          options: ['[[True|Verdadero]]', '[[False|Falso]]'],
          correctAnswer: 'True',
          explanation: '[[True|Verdadero]]. [[Than|Que]] = [[connector|conector]] [[in|en]] [[comparatives|comparativos]].',
        },
      ],
    },
    topicName: 'Grammar',
  },
];
