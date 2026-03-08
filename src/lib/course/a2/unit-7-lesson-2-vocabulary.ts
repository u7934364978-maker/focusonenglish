/**
 * Unidad 7 — Lección 2: Vocabulario (Adverbios de modo)
 * 15 ejercicios
 */

import { Exercise } from '@/lib/exercise-generator';

const LESSON_TITLE = '[[Vocabulary|Vocabulario]]: [[Adverbs of Manner|Adverbios de modo]]';
const INSTRUCTIONS_MC = 'Elige la palabra correcta para cada definición o frase.';
const INSTRUCTIONS_MATCH = 'Relaciona cada adjetivo con su adverbio de modo.';
const INSTRUCTIONS_FILL = 'Completa la frase con el adverbio correcto.';

export const UNIT_7_LESSON_2_VOCABULARY: Exercise[] = [
  {
    id: 'a2-u7-l2-v1',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Adverbs of Manner',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_MC,
      questions: [
        {
          question: '[[What|Cuál]] [[is|es]] [[the|el]] [[adverb|adverbio]] [[of|de]] "[[quick|rápido]]"?',
          options: ['[[quick|rápido]]', '[[quickly|rápidamente]]', '[[quicker|más rápido]]'],
          correctAnswer: 1,
          explanation: '[[Quick|Rápido]] → [[quickly|rápidamente]]. [[Add|Añade]] -ly.',
        },
      ],
    },
    topicName: 'Vocabulary',
  },
  {
    id: 'a2-u7-l2-v2',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Adverbs of Manner',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_MC,
      questions: [
        {
          question: '[[What|Cuál]] [[is|es]] [[the|el]] [[adverb|adverbio]] [[of|de]] "[[careful|cuidadoso]]"?',
          options: ['[[careful|cuidadoso]]', '[[carefully|cuidadosamente]]', '[[carefuller|más cuidadoso]]'],
          correctAnswer: 1,
          explanation: '[[Careful|Cuidadoso]] → [[carefully|cuidadosamente]]. [[Adjective|Adjetivo]] + -ly.',
        },
      ],
    },
    topicName: 'Vocabulary',
  },
  {
    id: 'a2-u7-l2-v3',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Adverbs of Manner',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_MC,
      questions: [
        {
          question: '[[What|Cuál]] [[is|es]] [[the|el]] [[adverb|adverbio]] [[of|de]] "[[beautiful|hermoso]]"?',
          options: ['[[beautiful|hermoso]]', '[[beautifully|hermosamente]]', '[[beautifuller|más hermoso]]'],
          correctAnswer: 1,
          explanation: '[[Beautiful|Hermoso]] → [[beautifully|hermosamente]]. [[Adjective|Adjetivo]] + -ly.',
        },
      ],
    },
    topicName: 'Vocabulary',
  },
  {
    id: 'a2-u7-l2-v4',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Adverbs of Manner',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_MC,
      questions: [
        {
          question: '[[What|Cuál]] [[is|es]] [[the|el]] [[adverb|adverbio]] [[of|de]] "[[happy|feliz]]"?',
          options: ['[[happy|feliz]]', '[[happily|felizmente]]', '[[happilier|más feliz]]'],
          correctAnswer: 1,
          explanation: '[[Happy|Feliz]] → [[happily|felizmente]]. [[Change|Cambia]] -y [[to|a]] -i + -ly.',
        },
      ],
    },
    topicName: 'Vocabulary',
  },
  {
    id: 'a2-u7-l2-v5',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Adverbs of Manner',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_MC,
      questions: [
        {
          question: '[[What|Qué]] [[word|palabra]] [[completes|complete]] [[the|la]] [[sentence|frase]]? "[[She|Ella]] [[drew|dibujó]] ____." ([[beautiful|hermoso]])',
          options: ['[[beautiful|hermoso]]', '[[beautifully|hermosamente]]', '[[beautifuller|más hermoso]]'],
          correctAnswer: 1,
          explanation: '[[Adverb|Adverbio]] [[modifies|modifica]] [[verb|verbo]] [[drew|dibujó]]: [[beautifully|hermosamente]].',
        },
      ],
    },
    topicName: 'Vocabulary',
  },
  {
    id: 'a2-u7-l2-v6',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Adverbs of Manner',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_MC,
      questions: [
        {
          question: '"[[He|Él]] [[played|jugó]] ____" [[means|significa]] "[[Jugó mal|Jugó mal]]".',
          options: ['[[good|bien]]', '[[well|bien]]', '[[badly|mal]]'],
          correctAnswer: 2,
          explanation: '[[Badly|Mal]] = [[poorly|mal]]. [[Bad|Malo]] → [[badly|mal]] [[as|como]] [[adverb|adverbio]].',
        },
      ],
    },
    topicName: 'Vocabulary',
  },
  {
    id: 'a2-u7-l2-v7',
    type: 'matching',
    level: 'A2',
    topic: 'Adverbs of Manner',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_MATCH,
      pairs: [
        { id: 'p1', left: '[[quick|rápido]]', right: '[[quickly|rápidamente]]' },
        { id: 'p2', left: '[[slow|lento]]', right: '[[slowly|lentamente]]' },
        { id: 'p3', left: '[[careful|cuidadoso]]', right: '[[carefully|cuidadosamente]]' },
        { id: 'p4', left: '[[quiet|tranquilo]]', right: '[[quietly|tranquilamente]]' },
      ],
    },
    topicName: 'Vocabulary',
  },
  {
    id: 'a2-u7-l2-v8',
    type: 'matching',
    level: 'A2',
    topic: 'Adverbs of Manner',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_MATCH,
      pairs: [
        { id: 'p1', left: '[[good|bueno]]', right: '[[well|bien]]' },
        { id: 'p2', left: '[[bad|malo]]', right: '[[badly|mal]]' },
        { id: 'p3', left: '[[fluent|fluido]]', right: '[[fluently|con fluidez]]' },
        { id: 'p4', left: '[[easy|fácil]]', right: '[[easily|fácilmente]]' },
      ],
    },
    topicName: 'Vocabulary',
  },
  {
    id: 'a2-u7-l2-v9',
    type: 'fill-blank',
    level: 'A2',
    topic: 'Adverbs of Manner',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_FILL,
      questions: [
        {
          question: '[[Please|Por favor]] [[speak|habla]] ____ [[in|en]] [[the|la]] [[library|biblioteca]]. ([[quiet|tranquilo]])',
          options: ['[[quiet|tranquilo]]', '[[quietly|tranquilamente]]', '[[quieter|más tranquilo]]'],
          correctAnswer: '[[quietly|tranquilamente]]',
          explanation: '[[Quiet|Tranquilo]] → [[quietly|tranquilamente]]. [[Adverb|Adverbio]] [[modifies|modifica]] [[speak|habla]].',
        },
      ],
    },
    topicName: 'Vocabulary',
  },
  {
    id: 'a2-u7-l2-v10',
    type: 'fill-blank',
    level: 'A2',
    topic: 'Adverbs of Manner',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_FILL,
      questions: [
        {
          question: '[[She|Ella]] [[passed|pasó]] [[the|el]] [[exam|examen]] ____. ([[easy|fácil]])',
          options: ['[[easy|fácil]]', '[[easily|fácilmente]]', '[[easier|más fácil]]'],
          correctAnswer: '[[easily|fácilmente]]',
          explanation: '[[Easy|Fácil]] → [[easily|fácilmente]]. [[Change|Cambia]] -y [[to|a]] -i + -ly.',
        },
      ],
    },
    topicName: 'Vocabulary',
  },
  {
    id: 'a2-u7-l2-v11',
    type: 'fill-blank',
    level: 'A2',
    topic: 'Adverbs of Manner',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_FILL,
      questions: [
        {
          question: '[[He|Él]] [[answered|respondió]] ____ [[all|todas]] [[the|las]] [[questions|preguntas]]. ([[correct|correcto]])',
          options: ['[[correct|correcto]]', '[[correctly|correctamente]]', '[[correcter|más correcto]]'],
          correctAnswer: '[[correctly|correctamente]]',
          explanation: '[[Correct|Correcto]] → [[correctly|correctamente]]. [[Adjective|Adjetivo]] + -ly.',
        },
      ],
    },
    topicName: 'Vocabulary',
  },
  {
    id: 'a2-u7-l2-v12',
    type: 'fill-blank',
    level: 'A2',
    topic: 'Adverbs of Manner',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_FILL,
      questions: [
        {
          question: '[[They|Ellos]] [[danced|bailaron]] ____ [[at|en]] [[the|la]] [[party|fiesta]]. ([[beautiful|hermoso]])',
          options: ['[[beautiful|hermoso]]', '[[beautifully|hermosamente]]', '[[beautifuller|más hermoso]]'],
          correctAnswer: '[[beautifully|hermosamente]]',
          explanation: '[[Beautiful|Hermoso]] → [[beautifully|hermosamente]]. [[Adverb|Adverbio]] [[modifies|modifica]] [[danced|bailaron]].',
        },
      ],
    },
    topicName: 'Vocabulary',
  },
  {
    id: 'a2-u7-l2-v13',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Adverbs of Manner',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_MC,
      questions: [
        {
          question: '[[What|Qué]] [[is|es]] [[the|la]] [[correct|correcta]] [[form|forma]]? "[[She|Ella]] ____ [[speaks|habla]] [[English|inglés]]." ([[fluent|fluido]])',
          options: ['[[fluent|fluido]]', '[[fluently|con fluidez]]', '[[fluenter|más fluido]]'],
          correctAnswer: 1,
          explanation: '[[Fluent|Fluido]] → [[fluently|con fluidez]]. [[Adverb|Adverbio]] [[modifies|modifica]] [[speaks|habla]].',
        },
      ],
    },
    topicName: 'Vocabulary',
  },
  {
    id: 'a2-u7-l2-v14',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Adverbs of Manner',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_MC,
      questions: [
        {
          question: '[[What|Qué]] [[word|palabra]] [[completes|complete]] [[the|la]] [[sentence|frase]]? "[[He|Él]] [[works|trabaja]] ____ [[every|cada]] [[day|día]]." ([[hard|duro]])',
          options: ['[[hard|duro]]', '[[hardly|apenas]]', '[[harder|más duro]]'],
          correctAnswer: 0,
          explanation: '[[Hard|Duro]] [[is|es]] [[same|igual]] [[as|como]] [[adjective|adjetivo]] [[and|y]] [[adverb|adverbio]]. [[Not|No]] "[[hardly|apenas]]" ([[different|diferente]] [[meaning|significado]]).',
        },
      ],
    },
    topicName: 'Vocabulary',
  },
  {
    id: 'a2-u7-l2-v15',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Adverbs of Manner',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_MC,
      questions: [
        {
          question: '[[What|Qué]] [[word|palabra]] [[completes|complete]] [[the|la]] [[sentence|frase]]? "[[The|El]] [[child|niño]] [[behaved|se comportó]] ____." ([[good|bueno]])',
          options: ['[[good|bueno]]', '[[well|bien]]', '[[goodly|buenamente]]'],
          correctAnswer: 1,
          explanation: '[[Good|Bueno]] → [[well|bien]] [[as|como]] [[adverb|adverbio]]. [[Well|Bien]] [[modifies|modifica]] [[behaved|se comportó]].',
        },
      ],
    },
    topicName: 'Vocabulary',
  },
];
