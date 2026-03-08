/**
 * Unidad 2 — Lección 2: Vocabulario (verbos regulares, expresiones de tiempo pasado)
 * 15 ejercicios
 */

import { Exercise } from '@/lib/exercise-generator';

const LESSON_TITLE = '[[Vocabulary|Vocabulario]]: [[Regular Verbs|verbos regulares]], [[Past Time|tiempo pasado]]';
const INSTRUCTIONS_MC = 'Elige la palabra correcta para cada definición o frase.';
const INSTRUCTIONS_MATCH = 'Relaciona cada palabra en inglés con su traducción.';
const INSTRUCTIONS_FILL = 'Completa la frase con la palabra correcta.';

export const UNIT_2_LESSON_2_VOCABULARY: Exercise[] = [
  {
    id: 'a2-u2-l2-v1',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Past Simple',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_MC,
      questions: [
        {
          question: '[[What|Qué]] [[is|es]] [[the|la]] [[past|pasado]] [[of|de]] "[[walk|caminar]]"?',
          options: ['[[walk|camino]]', '[[walked|caminé]]', '[[walking|caminando]]'],
          correctAnswer: 1,
          explanation: '[[Walk|Caminar]] → [[walked|caminé]]. [[Regular verb|Verbo regular]]: [[add|añade]] -ed.',
        },
      ],
    },
    topicName: 'Vocabulary',
  },
  {
    id: 'a2-u2-l2-v2',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Past Simple',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_MC,
      questions: [
        {
          question: '[[What|Qué]] [[is|es]] [[the|la]] [[past|pasado]] [[of|de]] "[[visit|visitar]]"?',
          options: ['[[visit|visito]]', '[[visited|visité]]', '[[visiting|visitando]]'],
          correctAnswer: 1,
          explanation: '[[Visit|Visitar]] → [[visited|visité]].',
        },
      ],
    },
    topicName: 'Vocabulary',
  },
  {
    id: 'a2-u2-l2-v3',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Past Simple',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_MC,
      questions: [
        {
          question: '[[What|Qué]] [[word|palabra]] [[means|significa]] "ayer"?',
          options: ['[[tomorrow|mañana]]', '[[yesterday|ayer]]', '[[today|hoy]]'],
          correctAnswer: 1,
          explanation: '[[Yesterday|Ayer]] = [[the|el]] [[day|día]] [[before|antes]] [[today|hoy]].',
        },
      ],
    },
    topicName: 'Vocabulary',
  },
  {
    id: 'a2-u2-l2-v4',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Past Simple',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_MC,
      questions: [
        {
          question: '[[What|Qué]] [[word|palabra]] [[means|significa]] "la semana pasada"?',
          options: ['[[next week|próxima semana]]', '[[last week|la semana pasada]]', '[[this week|esta semana]]'],
          correctAnswer: 1,
          explanation: '[[Last week|La semana pasada]] = [[the|la]] [[week|semana]] [[before|antes]] [[this one|esta]].',
        },
      ],
    },
    topicName: 'Vocabulary',
  },
  {
    id: 'a2-u2-l2-v5',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Past Simple',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_MC,
      questions: [
        {
          question: '"[[Two days ago|Hace dos días]]" [[means|significa]]:',
          options: ['[[in|en]] [[two days|dos días]]', '[[two days|dos días]] [[before|antes]] [[now|ahora]]', '[[today|hoy]]'],
          correctAnswer: 1,
          explanation: '[[Ago|Hace]] = [[before|antes]] [[now|ahora]]. [[Two days ago|Hace dos días]] = [[two days|dos días]] [[before|antes]].',
        },
      ],
    },
    topicName: 'Vocabulary',
  },
  {
    id: 'a2-u2-l2-v6',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Past Simple',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_MC,
      questions: [
        {
          question: '[[What|Qué]] [[is|es]] [[the|la]] [[past|pasado]] [[of|de]] "[[play|jugar]]"?',
          options: ['[[play|juego]]', '[[played|jugué]]', '[[playing|jugando]]'],
          correctAnswer: 1,
          explanation: '[[Play|Jugar]] → [[played|jugué]].',
        },
      ],
    },
    topicName: 'Vocabulary',
  },
  {
    id: 'a2-u2-l2-v7',
    type: 'matching',
    level: 'A2',
    topic: 'Past Simple',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_MATCH,
      pairs: [
        { id: 'p1', left: '[[Walked|Caminé]]', right: 'Caminé' },
        { id: 'p2', left: '[[Visited|Visité]]', right: 'Visité' },
        { id: 'p3', left: '[[Played|Jugué]]', right: 'Jugué' },
        { id: 'p4', left: '[[Finished|Terminé]]', right: 'Terminé' },
      ],
    },
    topicName: 'Vocabulary',
  },
  {
    id: 'a2-u2-l2-v8',
    type: 'matching',
    level: 'A2',
    topic: 'Past Simple',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_MATCH,
      pairs: [
        { id: 'p1', left: '[[Yesterday|Ayer]]', right: 'Ayer' },
        { id: 'p2', left: '[[Last week|La semana pasada]]', right: 'La semana pasada' },
        { id: 'p3', left: '[[Last night|Anoche]]', right: 'Anoche' },
        { id: 'p4', left: '[[Ago|Hace]]', right: 'Hace (tiempo)' },
      ],
    },
    topicName: 'Vocabulary',
  },
  {
    id: 'a2-u2-l2-v9',
    type: 'fill-blank',
    level: 'A2',
    topic: 'Past Simple',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_FILL,
      questions: [
        {
          question: '[[I|Yo]] ____ [[to|a]] [[the|el]] [[cinema|cine]] [[yesterday|ayer]].',
          options: ['[[walked|caminé]]', '[[visited|visité]]', '[[played|jugué]]'],
          correctAnswer: '[[walked|caminé]]',
          explanation: '[[Walk|Caminar]] → [[walked|caminé]]. [[Context|Contexto]]: [[going|ir]] [[to|a]] [[cinema|cine]] [[on foot|a pie]].',
        },
      ],
    },
    topicName: 'Vocabulary',
  },
  {
    id: 'a2-u2-l2-v10',
    type: 'fill-blank',
    level: 'A2',
    topic: 'Past Simple',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_FILL,
      questions: [
        {
          question: '[[She|Ella]] ____ [[her|su]] [[friends|amigos]] [[last week|la semana pasada]].',
          options: ['[[walked|caminó]]', '[[visited|visitó]]', '[[finished|terminó]]'],
          correctAnswer: '[[visited|visitó]]',
          explanation: '[[Visit|Visitar]] → [[visited|visitó]]. [[Visit friends|Visitar amigos]].',
        },
      ],
    },
    topicName: 'Vocabulary',
  },
  {
    id: 'a2-u2-l2-v11',
    type: 'fill-blank',
    level: 'A2',
    topic: 'Past Simple',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_FILL,
      questions: [
        {
          question: '[[We|Nosotros]] ____ [[football|fútbol]] [[yesterday|ayer]].',
          options: ['[[walked|caminamos]]', '[[visited|visitamos]]', '[[played|jugamos]]'],
          correctAnswer: '[[played|jugamos]]',
          explanation: '[[Play|Jugar]] → [[played|jugamos]]. [[Play football|Jugar fútbol]].',
        },
      ],
    },
    topicName: 'Vocabulary',
  },
  {
    id: 'a2-u2-l2-v12',
    type: 'fill-blank',
    level: 'A2',
    topic: 'Past Simple',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_FILL,
      questions: [
        {
          question: '[[He|Él]] ____ [[his|su]] [[homework|deberes]] [[an hour ago|hace una hora]].',
          options: ['[[walked|caminó]]', '[[visited|visitó]]', '[[finished|terminó]]'],
          correctAnswer: '[[finished|terminó]]',
          explanation: '[[Finish|Terminar]] → [[finished|terminó]]. [[Finish homework|Terminar deberes]].',
        },
      ],
    },
    topicName: 'Vocabulary',
  },
  {
    id: 'a2-u2-l2-v13',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Past Simple',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_MC,
      questions: [
        {
          question: '[[What|Qué]] [[word|palabra]] [[completes|complete]] [[the|la]] [[sentence|frase]]? "[[I|Yo]] ____ [[TV|televisión]] [[last night|anoche]]."',
          options: ['[[watch|veo]]', '[[watched|vi]]', '[[watching|viendo]]'],
          correctAnswer: 1,
          explanation: '[[Watch|Ver]] → [[watched|vi]]. [[With|Con]] [[last night|anoche]] [[we|nosotros]] [[use|usamos]] Past Simple.',
        },
      ],
    },
    topicName: 'Vocabulary',
  },
  {
    id: 'a2-u2-l2-v14',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Past Simple',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_MC,
      questions: [
        {
          question: '[[What|Qué]] [[word|palabra]] [[completes|complete]] [[the|la]] [[sentence|frase]]? "[[They|Ellos]] ____ [[the|el]] [[film|película]] [[yesterday|ayer]]."',
          options: ['[[enjoy|disfrutaron]]', '[[enjoyed|disfrutaron]]', '[[enjoying|disfrutando]]'],
          correctAnswer: 1,
          explanation: '[[Enjoy|Disfrutar]] → [[enjoyed|disfrutaron]].',
        },
      ],
    },
    topicName: 'Vocabulary',
  },
  {
    id: 'a2-u2-l2-v15',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Past Simple',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_MC,
      questions: [
        {
          question: '[[What|Qué]] [[is|es]] [[the|la]] [[past|pasado]] [[of|de]] "[[cook|cocinar]]"?',
          options: ['[[cook|cocino]]', '[[cooked|cociné]]', '[[cooking|cocinando]]'],
          correctAnswer: 1,
          explanation: '[[Cook|Cocinar]] → [[cooked|cociné]]. [[Regular verb|Verbo regular]].',
        },
      ],
    },
    topicName: 'Vocabulary',
  },
];
