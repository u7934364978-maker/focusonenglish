/**
 * Unidad 15 — Lección 2: Vocabulario (Present Perfect vs Past Simple, marcadores de tiempo)
 * 15 ejercicios
 */

import { Exercise } from '@/lib/exercise-generator';

const LESSON_TITLE = '[[Vocabulary|Vocabulario]]: [[Present Perfect|Presente Perfecto]] vs [[Past Simple|Pasado Simple]], [[time markers|marcadores de tiempo]]';
const INSTRUCTIONS_MC = 'Elige la palabra correcta para cada definición o frase.';
const INSTRUCTIONS_MATCH = 'Relaciona cada palabra en inglés con su traducción.';
const INSTRUCTIONS_FILL = 'Completa la frase con la palabra correcta del recuadro.';

export const UNIT_15_LESSON_2_VOCABULARY: Exercise[] = [
  {
    id: 'a2-u15-l2-v1',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Present Perfect vs Past Simple',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_MC,
      questions: [
        {
          question: '[[What|Qué]] [[time marker|marcador]] [[do|usamos]] [[we|nosotros]] [[use|usar]] [[with|con]] [[Past Simple|Pasado Simple]]?',
          options: ['[[yet|aún]]', '[[yesterday|ayer]]', '[[already|ya]]'],
          correctAnswer: 1,
          explanation: '[[Yesterday|Ayer]] = [[finished|terminado]] [[time|tiempo]], [[use|usamos]] Past Simple.',
        },
      ],
    },
    topicName: 'Vocabulary',
  },
  {
    id: 'a2-u15-l2-v2',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Present Perfect vs Past Simple',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_MC,
      questions: [
        {
          question: '[[What|Qué]] [[time marker|marcador]] [[do|usamos]] [[we|nosotros]] [[use|usar]] [[with|con]] [[Present Perfect|Presente Perfecto]]?',
          options: ['[[yesterday|ayer]]', '[[last week|la semana pasada]]', '[[ever|alguna vez]]'],
          correctAnswer: 2,
          explanation: '[[Ever|Alguna vez]] = [[unspecified|no especificado]] [[time|tiempo]], [[use|usamos]] Present Perfect.',
        },
      ],
    },
    topicName: 'Vocabulary',
  },
  {
    id: 'a2-u15-l2-v3',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Present Perfect vs Past Simple',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_MC,
      questions: [
        {
          question: '"[[Last week|La semana pasada]]" [[goes|va]] [[with|con]]:',
          options: ['[[Present Perfect|Presente Perfecto]]', '[[Past Simple|Pasado Simple]]', '[[Future|Futuro]]'],
          correctAnswer: 1,
          explanation: '[[Last week|La semana pasada]] = [[specific|específico]] [[past|pasado]] [[time|tiempo]] → Past Simple.',
        },
      ],
    },
    topicName: 'Vocabulary',
  },
  {
    id: 'a2-u15-l2-v4',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Present Perfect vs Past Simple',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_MC,
      questions: [
        {
          question: '"[[Have you ever...?|¿Has... alguna vez?]]" [[uses|usa]]:',
          options: ['[[Past Simple|Pasado Simple]]', '[[Present Perfect|Presente Perfecto]]', '[[Present Simple|Presente Simple]]'],
          correctAnswer: 1,
          explanation: '[[Ever|Alguna vez]] = [[experience|experiencia]] [[in|en]] [[life|vida]] → Present Perfect.',
        },
      ],
    },
    topicName: 'Vocabulary',
  },
  {
    id: 'a2-u15-l2-v5',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Present Perfect vs Past Simple',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_MC,
      questions: [
        {
          question: '[[What|Qué]] [[word|palabra]] [[means|significa]] "hace dos años"?',
          options: ['[[two years ago|hace dos años]]', '[[in two years|en dos años]]', '[[two years|dos años]] [[later|después]]'],
          correctAnswer: 0,
          explanation: '[[Ago|Hace]] = [[before|antes]] [[now|ahora]], [[use|usamos]] Past Simple.',
        },
      ],
    },
    topicName: 'Vocabulary',
  },
  {
    id: 'a2-u15-l2-v6',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Present Perfect vs Past Simple',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_MC,
      questions: [
        {
          question: '"[[I|Yo]] ____ [[went|fui]] [[to|a]] [[Paris|París]] [[in|en]] [[2020|2020]]" [[needs|necesita]] [[Past Simple|Pasado Simple]] [[because|porque]]:',
          options: ['[[we|nosotros]] [[have|tenemos]] [[specific|específica]] [[date|fecha]]', '[[we|nosotros]] [[have|tenemos]] [[no|ninguna]] [[time|tiempo]]', '[[we|nosotros]] [[use|usamos]] [[ever|alguna vez]]'],
          correctAnswer: 0,
          explanation: '[[Specific|Específica]] [[date|fecha]] ([[2020|2020]]) → Past Simple.',
        },
      ],
    },
    topicName: 'Vocabulary',
  },
  {
    id: 'a2-u15-l2-v7',
    type: 'matching',
    level: 'A2',
    topic: 'Present Perfect vs Past Simple',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_MATCH,
      pairs: [
        { id: 'p1', left: '[[Yesterday|Ayer]]', right: 'Ayer' },
        { id: 'p2', left: '[[Last week|La semana pasada]]', right: 'La semana pasada' },
        { id: 'p3', left: '[[Ever|Alguna vez]]', right: 'Alguna vez' },
        { id: 'p4', left: '[[Never|Nunca]]', right: 'Nunca' },
      ],
    },
    topicName: 'Vocabulary',
  },
  {
    id: 'a2-u15-l2-v8',
    type: 'matching',
    level: 'A2',
    topic: 'Present Perfect vs Past Simple',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_MATCH,
      pairs: [
        { id: 'p1', left: '[[Ago|Hace]]', right: 'Hace (tiempo)' },
        { id: 'p2', left: '[[In|En]] [[+ year|+ año]]', right: 'En + año' },
        { id: 'p3', left: '[[When|Cuándo]]', right: 'Cuándo' },
        { id: 'p4', left: '[[How long|Cuánto tiempo]]', right: 'Cuánto tiempo' },
      ],
    },
    topicName: 'Vocabulary',
  },
  {
    id: 'a2-u15-l2-v9',
    type: 'fill-blank',
    level: 'A2',
    topic: 'Present Perfect vs Past Simple',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_FILL,
      questions: [
        {
          question: '[[I|Yo]] [[went|fui]] [[to|a]] [[London|Londres]] ____.',
          options: ['[[yesterday|ayer]]', '[[ever|alguna vez]]', '[[already|ya]]'],
          correctAnswer: 'yesterday',
          explanation: '[[Yesterday|Ayer]] → Past Simple. [[Ever|Alguna vez]] → Present Perfect.',
        },
      ],
    },
    topicName: 'Vocabulary',
  },
  {
    id: 'a2-u15-l2-v10',
    type: 'fill-blank',
    level: 'A2',
    topic: 'Present Perfect vs Past Simple',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_FILL,
      questions: [
        {
          question: '[[Have|Has]] [[you|tú]] ____ [[been|estado]] [[to|en]] [[Japan|Japón]]?',
          options: ['[[ever|alguna vez]]', '[[yesterday|ayer]]', '[[last week|la semana pasada]]'],
          correctAnswer: 'ever',
          explanation: '[[Ever|Alguna vez]] → Present Perfect [[for|para]] [[experience|experiencia]].',
        },
      ],
    },
    topicName: 'Vocabulary',
  },
  {
    id: 'a2-u15-l2-v11',
    type: 'fill-blank',
    level: 'A2',
    topic: 'Present Perfect vs Past Simple',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_FILL,
      questions: [
        {
          question: '[[She|Ella]] [[visited|visitó]] [[her|su]] [[grandmother|abuela]] ____.',
          options: ['[[last week|la semana pasada]]', '[[ever|alguna vez]]', '[[already|ya]]'],
          correctAnswer: 'last week',
          explanation: '[[Last week|La semana pasada]] → Past Simple.',
        },
      ],
    },
    topicName: 'Vocabulary',
  },
  {
    id: 'a2-u15-l2-v12',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Present Perfect vs Past Simple',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_MC,
      questions: [
        {
          question: '[[What|Qué]] [[tense|tiempo]] [[for|para]] "[[I|Yo]] ____ [[bought|compré]] [[this|esta]] [[car|coche]] [[three years ago|hace tres años]]"?',
          options: ['[[Present Perfect|Presente Perfecto]]', '[[Past Simple|Pasado Simple]]', '[[Future|Futuro]]'],
          correctAnswer: 1,
          explanation: '[[Ago|Hace]] = [[finished|terminado]] [[time|tiempo]] → Past Simple.',
        },
      ],
    },
    topicName: 'Vocabulary',
  },
  {
    id: 'a2-u15-l2-v13',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Present Perfect vs Past Simple',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_MC,
      questions: [
        {
          question: '"[[When|Cuándo]]" [[usually|normalmente]] [[introduces|introduce]]:',
          options: ['[[Present Perfect|Presente Perfecto]]', '[[Past Simple|Pasado Simple]]', '[[Future|Futuro]]'],
          correctAnswer: 1,
          explanation: '[[When|Cuándo]] + [[specific|específico]] [[time|tiempo]] → Past Simple.',
        },
      ],
    },
    topicName: 'Vocabulary',
  },
  {
    id: 'a2-u15-l2-v14',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Present Perfect vs Past Simple',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_MC,
      questions: [
        {
          question: '[[What|Qué]] [[is|es]] [[the|la]] [[correct|correcta]] [[form|forma]]? "[[I|Yo]] ____ [[have|he]] ____ [[seen|visto]] [[that|esa]] [[film|película]]."',
          options: ['[[ever|alguna vez]]', '[[yesterday|ayer]]', '[[last night|anoche]]'],
          correctAnswer: 0,
          explanation: '[[Ever|Alguna vez]] = [[experience|experiencia]] → Present Perfect.',
        },
      ],
    },
    topicName: 'Vocabulary',
  },
  {
    id: 'a2-u15-l2-v15',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Present Perfect vs Past Simple',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_MC,
      questions: [
        {
          question: '[[What|Qué]] [[time markers|marcadores]] [[go|van]] [[with|con]] [[Present Perfect|Presente Perfecto]]?',
          options: ['[[yesterday|ayer]], [[last week|la semana pasada]], [[ago|hace]]', '[[ever|alguna vez]], [[never|nunca]], [[already|ya]], [[yet|aún]]', '[[tomorrow|mañana]], [[next week|próxima semana]]', '[[in|en]] [[2020|2020]], [[last month|el mes pasado]]'],
          correctAnswer: 1,
          explanation: '[[Ever|Alguna vez]], [[never|nunca]], [[already|ya]], [[yet|aún]] = [[Present Perfect|Presente Perfecto]] [[markers|marcadores]].',
        },
      ],
    },
    topicName: 'Vocabulary',
  },
];
