/**
 * Unidad 16 — Lección 2: Vocabulario (Past Continuous, actividades en progreso)
 * 15 ejercicios
 */

import { Exercise } from '@/lib/exercise-generator';

const LESSON_TITLE = '[[Vocabulary|Vocabulario]]: [[Past Continuous|Pasado Continuo]], [[activities in progress|actividades en progreso]]';
const INSTRUCTIONS_MC = 'Elige la palabra correcta para cada definición o frase.';
const INSTRUCTIONS_MATCH = 'Relaciona cada palabra en inglés con su traducción.';
const INSTRUCTIONS_FILL = 'Completa la frase con la palabra correcta del recuadro.';

export const UNIT_16_LESSON_2_VOCABULARY: Exercise[] = [
  {
    id: 'a2-u16-l2-v1',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Past Continuous',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_MC,
      questions: [
        {
          question: '[[What|Qué]] [[auxiliary|auxiliar]] [[do|usamos]] [[we|nosotros]] [[use|usar]] [[with|con]] "[[I|Yo]]" [[in|en]] Past Continuous?',
          options: ['[[were|estaban]]', '[[was|estaba]]', '[[am|soy]]'],
          correctAnswer: 1,
          explanation: '[[I|Yo]]/[[he|él]]/[[she|ella]]/[[it|él]] + [[was|estaba]] + [[-ing|-ando]].',
        },
      ],
    },
    topicName: 'Vocabulary',
  },
  {
    id: 'a2-u16-l2-v2',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Past Continuous',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_MC,
      questions: [
        {
          question: '[[What|Qué]] [[auxiliary|auxiliar]] [[do|usamos]] [[we|nosotros]] [[use|usar]] [[with|con]] "[[they|ellos]]" [[in|en]] Past Continuous?',
          options: ['[[was|estaba]]', '[[were|estaban]]', '[[are|son]]'],
          correctAnswer: 1,
          explanation: '[[We|Nosotros]]/[[you|tú]]/[[they|ellos]] + [[were|estaban]] + [[-ing|-ando]].',
        },
      ],
    },
    topicName: 'Vocabulary',
  },
  {
    id: 'a2-u16-l2-v3',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Past Continuous',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_MC,
      questions: [
        {
          question: '[[What|Qué]] [[word|palabra]] [[means|significa]] "estaba viendo"?',
          options: ['[[was watching|estaba viendo]]', '[[watched|vió]]', '[[watching|viendo]]'],
          correctAnswer: 0,
          explanation: '[[Was watching|Estaba viendo]] = Past Continuous.',
        },
      ],
    },
    topicName: 'Vocabulary',
  },
  {
    id: 'a2-u16-l2-v4',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Past Continuous',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_MC,
      questions: [
        {
          question: '[[What|Qué]] [[does|significa]] Past Continuous [[mean|significar]]?',
          options: ['[[action|acción]] [[finished|terminada]] [[in|en]] [[the|el]] [[past|pasado]]', '[[action|acción]] [[in|en]] [[progress|progreso]] [[at|en]] [[a|un]] [[specific|específico]] [[time|momento]] [[in|en]] [[the|el]] [[past|pasado]]', '[[action|acción]] [[in|en]] [[the|el]] [[future|futuro]]', '[[habit|costumbre]] [[in|en]] [[the|el]] [[present|presente]]'],
          correctAnswer: 1,
          explanation: 'Past Continuous = [[action|acción]] [[in|en]] [[progress|progreso]] [[at|en]] [[past|pasado]] [[time|momento]].',
        },
      ],
    },
    topicName: 'Vocabulary',
  },
  {
    id: 'a2-u16-l2-v5',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Past Continuous',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_MC,
      questions: [
        {
          question: '"[[I|Yo]] ____ [[reading|leyendo]] [[at|a]] [[8pm|las 8]]" [[needs|necesita]]:',
          options: ['[[was|estaba]]', '[[were|estaban]]', '[[am|soy]]'],
          correctAnswer: 0,
          explanation: '[[I|Yo]] + [[was|estaba]] + [[-ing|-ando]].',
        },
      ],
    },
    topicName: 'Vocabulary',
  },
  {
    id: 'a2-u16-l2-v6',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Past Continuous',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_MC,
      questions: [
        {
          question: '[[What|Qué]] [[word|palabra]] [[means|significa]] "estaban jugando"?',
          options: ['[[was playing|estaba jugando]]', '[[were playing|estaban jugando]]', '[[played|jugaron]]'],
          correctAnswer: 1,
          explanation: '[[They|Ellos]]/[[we|nosotros]] + [[were playing|estaban jugando]].',
        },
      ],
    },
    topicName: 'Vocabulary',
  },
  {
    id: 'a2-u16-l2-v7',
    type: 'matching',
    level: 'A2',
    topic: 'Past Continuous',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_MATCH,
      pairs: [
        { id: 'p1', left: '[[Was watching|Estaba viendo]]', right: 'Estaba viendo' },
        { id: 'p2', left: '[[Were playing|Estaban jugando]]', right: 'Estaban jugando' },
        { id: 'p3', left: '[[Was cooking|Estaba cocinando]]', right: 'Estaba cocinando' },
        { id: 'p4', left: '[[Were studying|Estaban estudiando]]', right: 'Estaban estudiando' },
      ],
    },
    topicName: 'Vocabulary',
  },
  {
    id: 'a2-u16-l2-v8',
    type: 'matching',
    level: 'A2',
    topic: 'Past Continuous',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_MATCH,
      pairs: [
        { id: 'p1', left: '[[At 8pm|A las 8]]', right: 'A las 8' },
        { id: 'p2', left: '[[At that moment|En ese momento]]', right: 'En ese momento' },
        { id: 'p3', left: '[[When|Cuando]]', right: 'Cuando' },
        { id: 'p4', left: '[[While|Mientras]]', right: 'Mientras' },
      ],
    },
    topicName: 'Vocabulary',
  },
  {
    id: 'a2-u16-l2-v9',
    type: 'fill-blank',
    level: 'A2',
    topic: 'Past Continuous',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_FILL,
      questions: [
        {
          question: '[[I|Yo]] ____ [[watching|viendo]] [[TV|televisión]] [[at|a]] [[8pm|las 8]].',
          options: ['[[was|estaba]]', '[[were|estaban]]', '[[am|soy]]'],
          correctAnswer: 'was',
          explanation: '[[I|Yo]] + [[was|estaba]] + [[-ing|-ando]].',
        },
      ],
    },
    topicName: 'Vocabulary',
  },
  {
    id: 'a2-u16-l2-v10',
    type: 'fill-blank',
    level: 'A2',
    topic: 'Past Continuous',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_FILL,
      questions: [
        {
          question: '[[They|Ellos]] ____ [[playing|jugando]] [[football|fútbol]] [[when|cuando]] [[it|él]] [[rained|llovió]].',
          options: ['[[was|estaba]]', '[[were|estaban]]', '[[are|son]]'],
          correctAnswer: 'were',
          explanation: '[[They|Ellos]] + [[were|estaban]] + [[-ing|-ando]].',
        },
      ],
    },
    topicName: 'Vocabulary',
  },
  {
    id: 'a2-u16-l2-v11',
    type: 'fill-blank',
    level: 'A2',
    topic: 'Past Continuous',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_FILL,
      questions: [
        {
          question: '[[She|Ella]] ____ [[cooking|cocinando]] [[dinner|cena]] [[at|a]] [[that|ese]] [[moment|momento]].',
          options: ['[[was|estaba]]', '[[were|estaban]]', '[[is|es]]'],
          correctAnswer: 'was',
          explanation: '[[She|Ella]] + [[was|estaba]] + [[-ing|-ando]].',
        },
      ],
    },
    topicName: 'Vocabulary',
  },
  {
    id: 'a2-u16-l2-v12',
    type: 'fill-blank',
    level: 'A2',
    topic: 'Past Continuous',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_FILL,
      questions: [
        {
          question: '[[We|Nosotros]] ____ [[studying|estudiando]] [[when|cuando]] [[the|el]] [[teacher|profesor]] [[arrived|llegó]].',
          options: ['[[was|estaba]]', '[[were|estaban]]', '[[are|son]]'],
          correctAnswer: 'were',
          explanation: '[[We|Nosotros]] + [[were|estaban]] + [[-ing|-ando]].',
        },
      ],
    },
    topicName: 'Vocabulary',
  },
  {
    id: 'a2-u16-l2-v13',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Past Continuous',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_MC,
      questions: [
        {
          question: '[[What|Qué]] [[suffix|sufijo]] [[do|añadimos]] [[we|nosotros]] [[add|añadir]] [[to|al]] [[verbs|verbos]] [[in|en]] Past Continuous?',
          options: ['[[-ed|-ed]]', '[[-ing|-ando]]', '[[-s|-s]]', '[[-er|-er]]'],
          correctAnswer: 1,
          explanation: 'Past Continuous = [[was/were|was/were]] + [[verb|verbo]] + [[-ing|-ando]].',
        },
      ],
    },
    topicName: 'Vocabulary',
  },
  {
    id: 'a2-u16-l2-v14',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Past Continuous',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_MC,
      questions: [
        {
          question: '"[[At 8pm|A las 8]]" [[suggests|sugiere]] [[we|nosotros]] [[use|usamos]]:',
          options: ['[[Present Simple|Presente Simple]]', '[[Past Continuous|Pasado Continuo]]', '[[Future|Futuro]]', '[[Present Perfect|Presente Perfecto]]'],
          correctAnswer: 1,
          explanation: '[[Specific|Específico]] [[time|momento]] [[in|en]] [[the|el]] [[past|pasado]] → Past Continuous.',
        },
      ],
    },
    topicName: 'Vocabulary',
  },
  {
    id: 'a2-u16-l2-v15',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Past Continuous',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_MC,
      questions: [
        {
          question: '[[What|Qué]] [[is|es]] [[the|la]] [[correct|correcta]] [[form|forma]]? "[[He|Él]] ____ ____ [[TV|televisión]] [[at|a]] [[9pm|las 9]]."',
          options: ['[[was|estaba]] [[watching|viendo]]', '[[were|estaban]] [[watching|viendo]]', '[[watched|vió]]', '[[is|es]] [[watching|viendo]]'],
          correctAnswer: 0,
          explanation: '[[He|Él]] + [[was|estaba]] + [[watching|viendo]].',
        },
      ],
    },
    topicName: 'Vocabulary',
  },
];
