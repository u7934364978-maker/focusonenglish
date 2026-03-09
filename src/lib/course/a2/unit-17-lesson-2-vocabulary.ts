/**
 * Unidad 17 — Lección 2: Vocabulario (Past Simple + Past Continuous, when/while, story connectors)
 * 15 ejercicios
 */

import { Exercise } from '@/lib/exercise-generator';

const LESSON_TITLE = '[[Vocabulary|Vocabulario]]: [[Past Simple|Pasado Simple]] [[+||]] [[Past Continuous|Pasado Continuo]], [[when/while|cuando/mientras]], [[story connectors|conectores narrativos]]';
const INSTRUCTIONS_MC = 'Elige la palabra correcta para cada definición o frase.';
const INSTRUCTIONS_MATCH = 'Relaciona cada palabra en inglés con su traducción.';
const INSTRUCTIONS_FILL = 'Completa la frase con la palabra correcta del recuadro.';

export const UNIT_17_LESSON_2_VOCABULARY: Exercise[] = [
  {
    id: 'a2-u17-l2-v1',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Past Simple Past Continuous',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_MC,
      questions: [
        {
          question: '[[What|Qué]] [[word|palabra]] [[introduces|introduce]] [[a|una]] [[short|corta]] [[interrupting|interrumpida]] [[action|acción]]?',
          options: ['[[while|mientras]]', '[[when|cuando]]', '[[during|durante]]'],
          correctAnswer: 1,
          explanation: '[[When|Cuando]] [[often|a menudo]] [[introduces|introduce]] [[the|la]] [[short|corta]] [[action|acción]] [[that|que]] [[interrupts|interrumpe]].',
        },
      ],
    },
    topicName: 'Vocabulary',
  },
  {
    id: 'a2-u17-l2-v2',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Past Simple Past Continuous',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_MC,
      questions: [
        {
          question: '[[What|Qué]] [[word|palabra]] [[introduces|introduce]] [[a|una]] [[long|larga]] [[action|acción]] [[in|en]] [[progress|progreso]]?',
          options: ['[[when|cuando]]', '[[while|mientras]]', '[[then|entonces]]'],
          correctAnswer: 1,
          explanation: '[[While|Mientras]] + [[Past Continuous|Pasado Continuo]] = [[action|acción]] [[in|en]] [[progress|progreso]].',
        },
      ],
    },
    topicName: 'Vocabulary',
  },
  {
    id: 'a2-u17-l2-v3',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Past Simple Past Continuous',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_MC,
      questions: [
        {
          question: '[[What|Qué]] [[word|palabra]] [[means|significa]] "de repente"?',
          options: ['[[suddenly|de repente]]', '[[then|entonces]]', '[[finally|finalmente]]'],
          correctAnswer: 0,
          explanation: '[[Suddenly|De repente]] = [[unexpected|inesperado]] [[change|cambio]].',
        },
      ],
    },
    topicName: 'Vocabulary',
  },
  {
    id: 'a2-u17-l2-v4',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Past Simple Past Continuous',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_MC,
      questions: [
        {
          question: '[[What|Qué]] [[word|palabra]] [[means|significa]] "entonces" [[in|en]] [[a|una]] [[story|historia]]?',
          options: ['[[suddenly|de repente]]', '[[then|entonces]]', '[[at first|al principio]]'],
          correctAnswer: 1,
          explanation: '[[Then|Entonces]] = [[next|siguiente]] [[in|en]] [[sequence|secuencia]].',
        },
      ],
    },
    topicName: 'Vocabulary',
  },
  {
    id: 'a2-u17-l2-v5',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Past Simple Past Continuous',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_MC,
      questions: [
        {
          question: '[[What|Qué]] [[word|palabra]] [[means|significa]] "al principio"?',
          options: ['[[at first|al principio]]', '[[finally|finalmente]]', '[[suddenly|de repente]]'],
          correctAnswer: 0,
          explanation: '[[At first|Al principio]] = [[at|al]] [[the|el]] [[beginning|principio]].',
        },
      ],
    },
    topicName: 'Vocabulary',
  },
  {
    id: 'a2-u17-l2-v6',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Past Simple Past Continuous',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_MC,
      questions: [
        {
          question: '[[What|Qué]] [[word|palabra]] [[means|significa]] "finalmente"?',
          options: ['[[at first|al principio]]', '[[finally|finalmente]]', '[[then|entonces]]'],
          correctAnswer: 1,
          explanation: '[[Finally|Finalmente]] = [[at|al]] [[the|el]] [[end|final]].',
        },
      ],
    },
    topicName: 'Vocabulary',
  },
  {
    id: 'a2-u17-l2-v7',
    type: 'matching',
    level: 'A2',
    topic: 'Past Simple Past Continuous',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_MATCH,
      pairs: [
        { id: 'p1', left: '[[When|Cuando]]', right: 'Cuando' },
        { id: 'p2', left: '[[While|Mientras]]', right: 'Mientras' },
        { id: 'p3', left: '[[Suddenly|De repente]]', right: 'De repente' },
        { id: 'p4', left: '[[Then|Entonces]]', right: 'Entonces' },
      ],
    },
    topicName: 'Vocabulary',
  },
  {
    id: 'a2-u17-l2-v8',
    type: 'matching',
    level: 'A2',
    topic: 'Past Simple Past Continuous',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_MATCH,
      pairs: [
        { id: 'p1', left: '[[At first|Al principio]]', right: 'Al principio' },
        { id: 'p2', left: '[[Finally|Finalmente]]', right: 'Finalmente' },
        { id: 'p3', left: '[[Interrupt|Interrumpir]]', right: 'Interrumpir' },
        { id: 'p4', left: '[[In progress|En progreso]]', right: 'En progreso' },
      ],
    },
    topicName: 'Vocabulary',
  },
  {
    id: 'a2-u17-l2-v9',
    type: 'fill-blank',
    level: 'A2',
    topic: 'Past Simple Past Continuous',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_FILL,
      questions: [
        {
          question: '[[I|Yo]] ____ [[walking|caminando]] [[when|cuando]] [[I|yo]] [[saw|vi]] [[him|él]].',
          options: ['[[was|estaba]]', '[[were|estaban]]', '[[am|soy]]'],
          correctAnswer: 'was',
          explanation: '[[I|Yo]] + [[was|estaba]] + [[-ing|-ando]] = [[long|larga]] [[action|acción]].',
        },
      ],
    },
    topicName: 'Vocabulary',
  },
  {
    id: 'a2-u17-l2-v10',
    type: 'fill-blank',
    level: 'A2',
    topic: 'Past Simple Past Continuous',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_FILL,
      questions: [
        {
          question: '[[While|Mientras]] ____ [[was|estaba]] [[sleeping|durmiendo]], [[the|el]] [[phone|teléfono]] [[rang|sonó]].',
          options: ['[[I|yo]]', '[[they|ellos]]', '[[you|tú]]'],
          correctAnswer: 'I',
          explanation: '[[I|Yo]] + [[was|estaba]] + [[-ing|-ando]].',
        },
      ],
    },
    topicName: 'Vocabulary',
  },
  {
    id: 'a2-u17-l2-v11',
    type: 'fill-blank',
    level: 'A2',
    topic: 'Past Simple Past Continuous',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_FILL,
      questions: [
        {
          question: '[[They|Ellos]] ____ [[having|teniendo]] [[dinner|cena]] [[when|cuando]] [[we|nosotros]] [[arrived|llegamos]].',
          options: ['[[were|estaban]]', '[[was|estaba]]', '[[had|tuvieron]]'],
          correctAnswer: 'were',
          explanation: '[[They|Ellos]] + [[were|estaban]] + [[-ing|-ando]].',
        },
      ],
    },
    topicName: 'Vocabulary',
  },
  {
    id: 'a2-u17-l2-v12',
    type: 'fill-blank',
    level: 'A2',
    topic: 'Past Simple Past Continuous',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_FILL,
      questions: [
        {
          question: '[[Suddenly|De repente]] ____ [[started|empezó]] [[to|a]] [[rain|llover]].',
          options: ['[[it|él]]', '[[they|ellos]]', '[[we|nosotros]]'],
          correctAnswer: 'it',
          explanation: '[[Suddenly|De repente]] [[it|él]] [[started|empezó]] = [[common|común]] [[expression|expresión]].',
        },
      ],
    },
    topicName: 'Vocabulary',
  },
  {
    id: 'a2-u17-l2-v13',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Past Simple Past Continuous',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_MC,
      questions: [
        {
          question: '[[What|Qué]] [[tense|tiempo]] [[do|usamos]] [[we|nosotros]] [[use|usar]] [[for|para]] [[short|corta]] [[interrupting|interrumpida]] [[action|acción]]?',
          options: ['[[Past Continuous|Pasado Continuo]]', '[[Past Simple|Pasado Simple]]', '[[Present Perfect|Presente Perfecto]]'],
          correctAnswer: 1,
          explanation: '[[Short|Corta]] [[action|acción]] = [[Past Simple|Pasado Simple]]; [[long|larga]] = [[Past Continuous|Pasado Continuo]].',
        },
      ],
    },
    topicName: 'Vocabulary',
  },
  {
    id: 'a2-u17-l2-v14',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Past Simple Past Continuous',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_MC,
      questions: [
        {
          question: '"[[At that moment|En ese momento]]" [[suggests|sugiere]] [[we|nosotros]] [[use|usamos]]:',
          options: ['[[Present Simple|Presente Simple]]', '[[Past Continuous|Pasado Continuo]]', '[[Future|Futuro]]'],
          correctAnswer: 1,
          explanation: '[[Specific|Específico]] [[moment|momento]] [[in|en]] [[the|el]] [[past|pasado]] → Past Continuous.',
        },
      ],
    },
    topicName: 'Vocabulary',
  },
  {
    id: 'a2-u17-l2-v15',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Past Simple Past Continuous',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_MC,
      questions: [
        {
          question: '[[What|Qué]] [[is|es]] [[the|el]] [[correct|correcto]] [[order|orden]] [[for|para]] [[story|historia]] [[connectors|conectores]]?',
          options: ['[[At first|Al principio]] → [[Then|Entonces]] → [[Suddenly|De repente]] → [[Finally|Finalmente]]', '[[Finally|Finalmente]] → [[At first|Al principio]]', '[[Suddenly|De repente]] → [[At first|Al principio]]'],
          correctAnswer: 0,
          explanation: '[[Typical|Típico]] [[story|historia]] [[sequence|secuencia]]: [[beginning|principio]] → [[middle|medio]] → [[event|evento]] → [[end|final]].',
        },
      ],
    },
    topicName: 'Vocabulary',
  },
];
