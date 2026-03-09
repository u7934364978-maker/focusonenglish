/**
 * Unidad 19 — Lección 2: Vocabulario (How questions, frequency/quantity/duration)
 * 15 ejercicios
 */

import { Exercise } from '@/lib/exercise-generator';

const LESSON_TITLE = '[[Vocabulary|Vocabulario]]: [[How questions|Preguntas con How]], [[frequency|frecuencia]], [[quantity|cantidad]], [[duration|duración]]';
const INSTRUCTIONS_MC = 'Elige la palabra correcta para cada definición o frase.';
const INSTRUCTIONS_MATCH = 'Relaciona cada palabra en inglés con su traducción.';
const INSTRUCTIONS_FILL = 'Completa la frase con la palabra correcta del recuadro.';

export const UNIT_19_LESSON_2_VOCABULARY: Exercise[] = [
  {
    id: 'a2-u19-l2-v1',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'How Questions',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_MC,
      questions: [
        {
          question: '[[What|Qué]] [[question|pregunta]] [[asks|pregunta]] [[about|sobre]] [[frequency|frecuencia]]?',
          options: ['[[How much|Cuánto]]', '[[How often|Con qué frecuencia]]', '[[How long|Cuánto tiempo]]'],
          correctAnswer: 1,
          explanation: '[[How often|Con qué frecuencia]] = [[frequency|frecuencia]] ([[once a week|una vez a la semana]]).',
        },
      ],
    },
    topicName: 'Vocabulary',
  },
  {
    id: 'a2-u19-l2-v2',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'How Questions',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_MC,
      questions: [
        {
          question: '[[What|Qué]] [[question|pregunta]] [[asks|pregunta]] [[about|sobre]] [[duration|duración]]?',
          options: ['[[How often|Con qué frecuencia]]', '[[How long|Cuánto tiempo]]', '[[How much|Cuánto]]'],
          correctAnswer: 1,
          explanation: '[[How long|Cuánto tiempo]] = [[duration|duración]] ([[for two hours|durante dos horas]]).',
        },
      ],
    },
    topicName: 'Vocabulary',
  },
  {
    id: 'a2-u19-l2-v3',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'How Questions',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_MC,
      questions: [
        {
          question: '[[What|Qué]] [[question|pregunta]] [[asks|pregunta]] [[about|sobre]] [[quantity|cantidad]] [[of|de]] [[uncountable|no contables]] [[nouns|sustantivos]]?',
          options: ['[[How many|Cuántos]]', '[[How much|Cuánto]]', '[[How long|Cuánto tiempo]]'],
          correctAnswer: 1,
          explanation: '[[How much|Cuánto]] + [[uncountable|no contables]] ([[water|agua]], [[money|dinero]]).',
        },
      ],
    },
    topicName: 'Vocabulary',
  },
  {
    id: 'a2-u19-l2-v4',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'How Questions',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_MC,
      questions: [
        {
          question: '[[What|Qué]] [[question|pregunta]] [[asks|pregunta]] [[about|sobre]] [[quantity|cantidad]] [[of|de]] [[countable|contables]] [[nouns|sustantivos]]?',
          options: ['[[How much|Cuánto]]', '[[How many|Cuántos]]', '[[How long|Cuánto tiempo]]'],
          correctAnswer: 1,
          explanation: '[[How many|Cuántos]] + [[countable|contables]] ([[books|libros]], [[apples|manzanas]]).',
        },
      ],
    },
    topicName: 'Vocabulary',
  },
  {
    id: 'a2-u19-l2-v5',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'How Questions',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_MC,
      questions: [
        {
          question: '"[[How often|Con qué frecuencia]] [[do|haces]] [[you|tú]] [[exercise|ejercicio]]?" [[asks|pregunta]] [[about|sobre]]:',
          options: ['[[quantity|cantidad]]', '[[frequency|frecuencia]]', '[[duration|duración]]'],
          correctAnswer: 1,
          explanation: '[[How often|Con qué frecuencia]] = [[how many times|cuántas veces]] [[per|por]] [[period|período]].',
        },
      ],
    },
    topicName: 'Vocabulary',
  },
  {
    id: 'a2-u19-l2-v6',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'How Questions',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_MC,
      questions: [
        {
          question: '"[[How long|Cuánto tiempo]] [[have|has]] [[you|tú]] [[lived|vivido]] [[here|aquí]]?" [[asks|pregunta]] [[about|sobre]]:',
          options: ['[[frequency|frecuencia]]', '[[duration|duración]]', '[[quantity|cantidad]]'],
          correctAnswer: 1,
          explanation: '[[How long|Cuánto tiempo]] = [[duration|duración]] ([[for five years|durante cinco años]]).',
        },
      ],
    },
    topicName: 'Vocabulary',
  },
  {
    id: 'a2-u19-l2-v7',
    type: 'matching',
    level: 'A2',
    topic: 'How Questions',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_MATCH,
      pairs: [
        { id: 'p1', left: '[[How often|Con qué frecuencia]]', right: 'Con qué frecuencia' },
        { id: 'p2', left: '[[How long|Cuánto tiempo]]', right: 'Cuánto tiempo' },
        { id: 'p3', left: '[[How much|Cuánto]]', right: 'Cuánto' },
        { id: 'p4', left: '[[How many|Cuántos]]', right: 'Cuántos' },
      ],
    },
    topicName: 'Vocabulary',
  },
  {
    id: 'a2-u19-l2-v8',
    type: 'matching',
    level: 'A2',
    topic: 'How Questions',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_MATCH,
      pairs: [
        { id: 'p1', left: '[[Once a week|Una vez a la semana]]', right: 'Una vez a la semana' },
        { id: 'p2', left: '[[For two hours|Durante dos horas]]', right: 'Durante dos horas' },
        { id: 'p3', left: '[[A lot|Mucho]]', right: 'Mucho' },
        { id: 'p4', left: '[[Three times|Tres veces]]', right: 'Tres veces' },
      ],
    },
    topicName: 'Vocabulary',
  },
  {
    id: 'a2-u19-l2-v9',
    type: 'fill-blank',
    level: 'A2',
    topic: 'How Questions',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_FILL,
      questions: [
        {
          question: '____ ____ [[do|haces]] [[you|tú]] [[go|ir]] [[to|a]] [[the|el]] [[gym|gimnasio]]?',
          options: ['[[How often|Con qué frecuencia]]', '[[How long|Cuánto tiempo]]', '[[How much|Cuánto]]'],
          correctAnswer: 'How often',
          explanation: '[[How often|Con qué frecuencia]] = [[frequency|frecuencia]].',
        },
      ],
    },
    topicName: 'Vocabulary',
  },
  {
    id: 'a2-u19-l2-v10',
    type: 'fill-blank',
    level: 'A2',
    topic: 'How Questions',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_FILL,
      questions: [
        {
          question: '____ ____ [[have|has]] [[you|tú]] [[lived|vivido]] [[here|aquí]]?',
          options: ['[[How often|Con qué frecuencia]]', '[[How long|Cuánto tiempo]]', '[[How much|Cuánto]]'],
          correctAnswer: 'How long',
          explanation: '[[How long|Cuánto tiempo]] = [[duration|duración]].',
        },
      ],
    },
    topicName: 'Vocabulary',
  },
  {
    id: 'a2-u19-l2-v11',
    type: 'fill-blank',
    level: 'A2',
    topic: 'How Questions',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_FILL,
      questions: [
        {
          question: '____ ____ [[water|agua]] [[do|bebes]] [[you|tú]] [[drink|beber]] [[a|al]] [[day|día]]?',
          options: ['[[How much|Cuánto]]', '[[How many|Cuántos]]', '[[How long|Cuánto tiempo]]'],
          correctAnswer: 'How much',
          explanation: '[[How much|Cuánto]] + [[uncountable|no contables]] ([[water|agua]]).',
        },
      ],
    },
    topicName: 'Vocabulary',
  },
  {
    id: 'a2-u19-l2-v12',
    type: 'fill-blank',
    level: 'A2',
    topic: 'How Questions',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_FILL,
      questions: [
        {
          question: '____ ____ [[books|libros]] [[have|has]] [[you|tú]] [[read|leído]] [[this|este]] [[year|año]]?',
          options: ['[[How much|Cuánto]]', '[[How many|Cuántos]]', '[[How long|Cuánto tiempo]]'],
          correctAnswer: 'How many',
          explanation: '[[How many|Cuántos]] + [[countable|contables]] ([[books|libros]]).',
        },
      ],
    },
    topicName: 'Vocabulary',
  },
  {
    id: 'a2-u19-l2-v13',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'How Questions',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_MC,
      questions: [
        {
          question: '[[What|Qué]] [[answer|respuesta]] [[is|es]] [[typical|típica]] [[for|para]] "[[How often|Con qué frecuencia]]"?',
          options: ['[[For two hours|Durante dos horas]]', '[[Once a week|Una vez a la semana]]', '[[Five euros|Cinco euros]]'],
          correctAnswer: 1,
          explanation: '[[How often|Con qué frecuencia]] → [[once a week|una vez a la semana]], [[twice a day|dos veces al día]].',
        },
      ],
    },
    topicName: 'Vocabulary',
  },
  {
    id: 'a2-u19-l2-v14',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'How Questions',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_MC,
      questions: [
        {
          question: '[[What|Qué]] [[answer|respuesta]] [[is|es]] [[typical|típica]] [[for|para]] "[[How long|Cuánto tiempo]]"?',
          options: ['[[Three times|Tres veces]]', '[[For five years|Durante cinco años]]', '[[A lot|Mucho]]'],
          correctAnswer: 1,
          explanation: '[[How long|Cuánto tiempo]] → [[for five years|durante cinco años]], [[since 2020|desde 2020]].',
        },
      ],
    },
    topicName: 'Vocabulary',
  },
  {
    id: 'a2-u19-l2-v15',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'How Questions',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_MC,
      questions: [
        {
          question: '"[[How much|Cuánto]] ____ [[do|tienes]] [[you|tú]] [[have|tener]]?" [[needs|necesita]] [[which|cuál]] [[noun|sustantivo]]?',
          options: ['[[books|libros]]', '[[money|dinero]]', '[[apples|manzanas]]'],
          correctAnswer: 1,
          explanation: '[[How much|Cuánto]] + [[uncountable|no contables]] ([[money|dinero]]).',
        },
      ],
    },
    topicName: 'Vocabulary',
  },
];
