/**
 * Unidad 46 — Lección 1: Gramática (Comparing Places: Adjectives)
 * 15 ejercicios: Noisy, quiet, modern - comparativos de lugares
 */

import { Exercise } from '@/lib/exercise-generator';

const LESSON_TITLE = '[[Comparing Places|Comparar lugares]]: [[Adjectives|Adjetivos]]';
const INSTRUCTIONS = 'Completa con el adjetivo correcto o elige la opción correcta.';

export const UNIT_46_LESSON_1_GRAMMAR: Exercise[] = [
  {
    id: 'a2-u46-l1-g1',
    type: 'fill-blank',
    level: 'A2',
    topic: 'Comparing Places: Adjectives',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS,
      questions: [
        {
          question: '[[London|Londres]] [[is|es]] ____ [[than|que]] [[my|mi]] [[village|pueblo]].',
          options: ['[[noisier|más ruidoso]]', '[[quieter|más tranquilo]]', '[[moderner|más moderno]]'],
          correctAnswer: 'noisier',
          explanation: "[[Noisy|Ruidoso]] → [[noisier|más ruidoso]] [[for|para]] [[comparisons|comparaciones]].",
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a2-u46-l1-g2',
    type: 'fill-blank',
    level: 'A2',
    topic: 'Comparing Places: Adjectives',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS,
      questions: [
        {
          question: '[[The|La]] [[countryside|campo]] [[is|es]] ____ [[than|que]] [[the|la]] [[city|ciudad]].',
          options: ['[[quieter|más tranquilo]]', '[[noisier|más ruidoso]]', '[[busier|más ocupado]]'],
          correctAnswer: 'quieter',
          explanation: "[[Quiet|Tranquilo]] → [[quieter|más tranquilo]] [[for|para]] [[comparisons|comparaciones]].",
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a2-u46-l1-g3',
    type: 'fill-blank',
    level: 'A2',
    topic: 'Comparing Places: Adjectives',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS,
      questions: [
        {
          question: '[[Tokyo|Tokio]] [[is|es]] ____ [[than|que]] [[most|la mayoría]] [[cities|ciudades]].',
          options: ['[[more modern|más moderno]]', '[[moderner|más moderno]]', '[[most modern|el más moderno]]'],
          correctAnswer: 'more modern',
          explanation: "[[Modern|Moderno]] = [[long|adjetivo largo]] → [[more modern|más moderno]].",
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a2-u46-l1-g4',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Comparing Places: Adjectives',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: 'Elige la opción correcta.',
      questions: [
        {
          question: '[[New York|Nueva York]] [[is|es]] ____ [[than|que]] [[Boston|Boston]].',
          options: ['[[busier|más ocupado]]', '[[more busy|más ocupado]]', '[[busyer|más ocupado]]'],
          correctAnswer: 0,
          explanation: "[[Busy|Ocupado]] → [[busier|más ocupado]] ([[y|y]] → [[ier|ier]]).",
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a2-u46-l1-g5',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Comparing Places: Adjectives',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: 'Elige la opción correcta.',
      questions: [
        {
          question: '[[The|La]] [[beach|playa]] [[is|es]] ____ [[than|que]] [[the|el]] [[city|centro]].',
          options: ['[[cleaner|más limpio]]', '[[more clean|más limpio]]', '[[cleanest|el más limpio]]'],
          correctAnswer: 0,
          explanation: "[[Clean|Limpio]] → [[cleaner|más limpio]] ([[short|adjetivo corto]]).",
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a2-u46-l1-g6',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Comparing Places: Adjectives',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: 'Elige la opción correcta.',
      questions: [
        {
          question: '[[Paris|París]] [[is|es]] ____ [[than|que]] [[my|mi]] [[town|pueblo]].',
          options: ['[[more expensive|más caro]]', '[[expensiver|más caro]]', '[[most expensive|el más caro]]'],
          correctAnswer: 0,
          explanation: "[[Expensive|Caro]] = [[long|adjetivo largo]] → [[more expensive|más caro]].",
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a2-u46-l1-g7',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Comparing Places: Adjectives',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: 'Elige la opción correcta.',
      questions: [
        {
          question: '[[The|El]] [[village|pueblo]] [[is|es]] ____ [[than|que]] [[the|la]] [[city|ciudad]].',
          options: ['[[safer|más seguro]]', '[[more safe|más seguro]]', '[[safest|el más seguro]]'],
          correctAnswer: 0,
          explanation: "[[Safe|Seguro]] → [[safer|más seguro]] ([[e|e]] + [[r|r]]).",
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a2-u46-l1-g8',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Comparing Places: Adjectives',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: 'Elige la opción correcta.',
      questions: [
        {
          question: '[[Barcelona|Barcelona]] [[is|es]] ____ [[than|que]] [[many|muchas]] [[cities|ciudades]].',
          options: ['[[more beautiful|más bonito]]', '[[beautifuller|más bonito]]', '[[beautifuler|más bonito]]'],
          correctAnswer: 0,
          explanation: "[[Beautiful|Bonito]] = [[long|adjetivo largo]] → [[more beautiful|más bonito]].",
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a2-u46-l1-g9',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Comparing Places: Adjectives',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: 'Elige la opción correcta.',
      questions: [
        {
          question: '[[The|El]] [[centre|centro]] [[is|es]] ____ [[than|que]] [[the|los]] [[suburbs|suburbios]].',
          options: ['[[more crowded|más concurrido]]', '[[crowdeder|más concurrido]]', '[[crowder|más concurrido]]'],
          correctAnswer: 0,
          explanation: "[[Crowded|Concurrido]] = [[long|adjetivo largo]] → [[more crowded|más concurrido]].",
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a2-u46-l1-g10',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Comparing Places: Adjectives',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: 'Elige la opción correcta.',
      questions: [
        {
          question: '[[Life|La vida]] [[in|en]] [[the|el]] [[country|campo]] [[is|es]] ____ [[than|que]] [[in|en]] [[the|la]] [[city|ciudad]].',
          options: ['[[slower|más lenta]]', '[[more slow|más lenta]]', '[[slowest|la más lenta]]'],
          correctAnswer: 0,
          explanation: "[[Slow|Lento]] → [[slower|más lento]] ([[short|adjetivo corto]]).",
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a2-u46-l1-g11',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Comparing Places: Adjectives',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: 'Elige la opción correcta.',
      questions: [
        {
          question: '[[Singapore|Singapur]] [[is|es]] ____ [[than|que]] [[my|mi]] [[country|país]].',
          options: ['[[more developed|más desarrollado]]', '[[developeder|más desarrollado]]', '[[developedest|el más desarrollado]]'],
          correctAnswer: 0,
          explanation: "[[Developed|Desarrollado]] = [[long|adjetivo largo]] → [[more developed|más desarrollado]].",
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a2-u46-l1-g12',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Comparing Places: Adjectives',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: 'Elige la opción correcta.',
      questions: [
        {
          question: '[[The|El]] [[air|aire]] [[in|en]] [[the|las]] [[mountains|montañas]] [[is|es]] ____ [[than|que]] [[in|en]] [[the|la]] [[city|ciudad]].',
          options: ['[[fresher|más fresco]]', '[[more fresh|más fresco]]', '[[freshest|el más fresco]]'],
          correctAnswer: 0,
          explanation: "[[Fresh|Fresco]] → [[fresher|más fresco]] ([[short|adjetivo corto]]).",
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a2-u46-l1-g13',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Comparing Places: Adjectives',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: 'Elige la opción correcta.',
      questions: [
        {
          question: '[[Traffic|El tráfico]] [[in|en]] [[the|la]] [[city|ciudad]] [[is|es]] ____ [[than|que]] [[in|en]] [[the|el]] [[countryside|campo]].',
          options: ['[[heavier|más pesado]]', '[[more heavy|más pesado]]', '[[heaviest|el más pesado]]'],
          correctAnswer: 0,
          explanation: "[[Heavy|Pesado]] → [[heavier|más pesado]] ([[y|y]] → [[ier|ier]]).",
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a2-u46-l1-g14',
    type: 'fill-blank',
    level: 'A2',
    topic: 'Comparing Places: Adjectives',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS,
      questions: [
        {
          question: '[[This|Esta]] [[area|zona]] [[is|es]] ____ [[than|que]] [[downtown|el centro]].',
          options: ['[[greener|más verde]]', '[[more green|más verde]]', '[[greenest|la más verde]]'],
          correctAnswer: 'greener',
          explanation: "[[Green|Verde]] → [[greener|más verde]] ([[short|adjetivo corto]]).",
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a2-u46-l1-g15',
    type: 'fill-blank',
    level: 'A2',
    topic: 'Comparing Places: Adjectives',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS,
      questions: [
        {
          question: '[[The|Los]] [[streets|calles]] [[here|aquí]] [[are|son]] ____ [[than|que]] [[in|en]] [[the|el]] [[centre|centro]].',
          options: ['[[wider|más anchas]]', '[[more wide|más anchas]]', '[[widest|las más anchas]]'],
          correctAnswer: 'wider',
          explanation: "[[Wide|Ancho]] → [[wider|más ancho]] ([[e|e]] + [[r|r]]).",
        },
      ],
    },
    topicName: 'Grammar',
  },
];
