/**
 * Unidad 6 — Lección 1: Gramática (Superlativos)
 * 15 ejercicios: -est, the most, in, of
 */

import { Exercise } from '@/lib/exercise-generator';

const LESSON_TITLE = '[[Superlatives|Superlativos]]: [[-est|-est]], [[the most|el más]], [[in|en]], [[of|de]]';
const INSTRUCTIONS_FILL = 'Elige la forma superlativa correcta para cada frase.';
const INSTRUCTIONS_MULTIPLE = 'Elige la frase o la forma correcta.';
const INSTRUCTIONS_ORDER = 'Ordena las palabras para formar una oración correcta.';
const INSTRUCTIONS_TF = 'Indica si la afirmación es verdadera o falsa.';

export const UNIT_6_LESSON_1_GRAMMAR: Exercise[] = [
  {
    id: 'a2-u6-l1-g1',
    type: 'fill-blank',
    level: 'A2',
    topic: 'Superlatives',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_FILL,
      questions: [
        {
          question: '[[Mount Everest|El Monte Everest]] [[is|es]] ____ [[mountain|montaña]] [[in|en]] [[the|el]] [[world|mundo]]. ([[high|alto]])',
          options: ['[[high|alto]]', '[[higher|más alto]]', '[[the highest|el más alto]]'],
          correctAnswer: 'the highest',
          explanation: '[[Short adjectives|Adjetivos cortos]]: [[the|el]] + -est. [[High|Alto]] → [[the highest|el más alto]].',
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a2-u6-l1-g2',
    type: 'fill-blank',
    level: 'A2',
    topic: 'Superlatives',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_FILL,
      questions: [
        {
          question: '[[She|Ella]] [[is|es]] ____ [[student|estudiante]] [[in|en]] [[the|la]] [[class|clase]]. ([[intelligent|inteligente]])',
          options: ['[[intelligent|inteligente]]', '[[more intelligent|más inteligente]]', '[[the most intelligent|el más inteligente]]'],
          correctAnswer: 'the most intelligent',
          explanation: '[[Long adjectives|Adjetivos largos]]: [[the most|el más]] + [[adjective|adjetivo]].',
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a2-u6-l1-g3',
    type: 'fill-blank',
    level: 'A2',
    topic: 'Superlatives',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_FILL,
      questions: [
        {
          question: '[[This|Este]] [[is|es]] ____ [[day|día]] [[of|de]] [[the|la]] [[year|año]]. ([[cold|frío]])',
          options: ['[[cold|frío]]', '[[colder|más frío]]', '[[the coldest|el más frío]]'],
          correctAnswer: 'the coldest',
          explanation: '[[Cold|Frío]] → [[the coldest|el más frío]]. [[Use|Usa]] [[in|en]] [[or|o]] [[of|de]].',
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a2-u6-l1-g4',
    type: 'fill-blank',
    level: 'A2',
    topic: 'Superlatives',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_FILL,
      questions: [
        {
          question: '[[He|Él]] [[is|es]] ____ [[boy|chico]] [[in|en]] [[the|el]] [[school|colegio]]. ([[tall|alto]])',
          options: ['[[tall|alto]]', '[[taller|más alto]]', '[[the tallest|el más alto]]'],
          correctAnswer: 'the tallest',
          explanation: '[[Tall|Alto]] → [[the tallest|el más alto]]. [[Short adjectives|Adjetivos cortos]]: [[the|el]] + -est.',
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a2-u6-l1-g5',
    type: 'fill-blank',
    level: 'A2',
    topic: 'Superlatives',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_FILL,
      questions: [
        {
          question: '[[This|Esta]] [[is|es]] ____ [[book|libro]] [[I|yo]] [[have ever|he jamás]] [[read|leído]]. ([[interesting|interesante]])',
          options: ['[[interesting|interesante]]', '[[more interesting|más interesante]]', '[[the most interesting|el más interesante]]'],
          correctAnswer: 'the most interesting',
          explanation: '[[Long adjectives|Adjetivos largos]]: [[the most|el más]] + [[adjective|adjetivo]].',
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a2-u6-l1-g6',
    type: 'fill-blank',
    level: 'A2',
    topic: 'Superlatives',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_FILL,
      questions: [
        {
          question: '[[July|Julio]] [[is|es]] ____ [[month|mes]] [[of|de]] [[the|el]] [[year|año]]. ([[hot|caliente]])',
          options: ['[[hot|caliente]]', '[[hotter|más caliente]]', '[[the hottest|el más caliente]]'],
          correctAnswer: 'the hottest',
          explanation: '[[Hot|Caliente]]: [[double|doble]] [[consonant|consonante]] + -est → [[the hottest|el más caliente]].',
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a2-u6-l1-g7',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Superlatives',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_MULTIPLE,
      questions: [
        {
          question: '[[Which|Cuál]] [[sentence|frase]] [[is|es]] [[correct|correcta]]?',
          options: [
            '[[She|Ella]] [[is|es]] [[the|la]] [[tall|alta]] [[in|en]] [[the|la]] [[class|clase]].',
            '[[She|Ella]] [[is|es]] [[the tallest|la más alta]] [[in|en]] [[the|la]] [[class|clase]].',
            '[[She|Ella]] [[is|es]] [[tallest|más alta]] [[in|en]] [[the|la]] [[class|clase]].',
          ],
          correctAnswer: 1,
          explanation: '[[Superlative|Superlativo]]: [[the|el/la]] + -est. [[Use|Usa]] [[in|en]] [[for|para]] [[place|lugar]].',
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a2-u6-l1-g8',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Superlatives',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_MULTIPLE,
      questions: [
        {
          question: '[[What|Cuál]] [[preposition|preposición]] [[do we use|usamos]] [[with|con]] [[superlatives|superlativos]] [[for|para]] [[place|lugar]]?',
          options: ['[[at|en]]', '[[in|en]] [[or|o]] [[of|de]]', '[[on|en]]'],
          correctAnswer: 1,
          explanation: '[[We use|Usamos]] [[in|en]] [[for|para]] [[place|lugar]] ([[in the class|en la clase]]) [[or|o]] [[of|de]] [[for|para]] [[group|grupo]] ([[of the year|del año]]).',
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a2-u6-l1-g9',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Superlatives',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_MULTIPLE,
      questions: [
        {
          question: '[[Complete|Completa]]: "[[This|Este]] [[is|es]] ____ [[film|película]] [[I|yo]] [[have ever|he jamás]] [[seen|visto]]." ([[good|bueno]])',
          options: ['[[the good|el bueno]]', '[[the best|la mejor]]', '[[the most good|el más bueno]]'],
          correctAnswer: 1,
          explanation: '[[Good|Bueno]] [[is|es]] [[irregular|irregular]]: [[good|bueno]] → [[the best|el mejor]].',
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a2-u6-l1-g10',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Superlatives',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_MULTIPLE,
      questions: [
        {
          question: '[[Complete|Completa]]: "[[He|Él]] [[is|es]] ____ [[of|de]] [[all|todos]] [[my|mis]] [[friends|amigos]]." ([[bad|malo]])',
          options: ['[[the bad|el malo]]', '[[the worst|el peor]]', '[[the most bad|el más malo]]'],
          correctAnswer: 1,
          explanation: '[[Bad|Malo]] [[is|es]] [[irregular|irregular]]: [[bad|malo]] → [[the worst|el peor]].',
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a2-u6-l1-g11',
    type: 'sentence-building',
    level: 'A2',
    topic: 'Superlatives',
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
    id: 'a2-u6-l1-g12',
    type: 'sentence-building',
    level: 'A2',
    topic: 'Superlatives',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_ORDER,
      correctSentence: '[[This|Este]] [[is|es]] [[the most expensive|el más caro]] [[car|coche]] [[in|en]] [[the|el]] [[shop|tienda]].',
      words: ['[[is|es]]', '[[This|Este]]', '[[the most expensive|el más caro]]', '[[car|coche]]', '[[in|en]]', '[[the|el]]', '[[shop|tienda]].'],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a2-u6-l1-g13',
    type: 'sentence-building',
    level: 'A2',
    topic: 'Superlatives',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_ORDER,
      correctSentence: '[[December|Diciembre]] [[is|es]] [[the coldest|el más frío]] [[month|mes]] [[of|de]] [[the|el]] [[year|año]].',
      words: ['[[is|es]]', '[[December|Diciembre]]', '[[the coldest|el más frío]]', '[[month|mes]]', '[[of|de]]', '[[the|el]]', '[[year|año]].'],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a2-u6-l1-g14',
    type: 'true-false',
    level: 'A2',
    topic: 'Superlatives',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_TF,
      questions: [
        {
          question: '"[[She|Ella]] [[is|es]] [[tallest|más alta]] [[in|en]] [[the|la]] [[class|clase]]" [[is|es]] [[correct|correcto]] [[in|en]] [[English|inglés]].',
          options: ['[[True|Verdadero]]', '[[False|Falso]]'],
          correctAnswer: 'False',
          explanation: '[[False|Falso]]. [[We need|Necesitamos]] [[the|el/la]] [[before|antes]] [[tallest|más alta]]: [[the tallest|la más alta]].',
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a2-u6-l1-g15',
    type: 'true-false',
    level: 'A2',
    topic: 'Superlatives',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_TF,
      questions: [
        {
          question: '[[We use|Usamos]] [[in|en]] [[or|o]] [[of|de]] [[with|con]] [[superlatives|superlativos]] [[to|para]] [[show|mostrar]] [[place|lugar]] [[or|o]] [[group|grupo]].',
          options: ['[[True|Verdadero]]', '[[False|Falso]]'],
          correctAnswer: 'True',
          explanation: '[[True|Verdadero]]. [[In the world|En el mundo]], [[of the year|del año]].',
        },
      ],
    },
    topicName: 'Grammar',
  },
];
