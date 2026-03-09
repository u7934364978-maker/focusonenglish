/**
 * Unidad 45 — Lección 1: Gramática (Present Perfect vs Past Simple)
 * 15 ejercicios: General vs específico
 */

import { Exercise } from '@/lib/exercise-generator';

const LESSON_TITLE = "[[Present Perfect vs Past Simple|Presente Perfecto vs Pasado Simple]]";
const INSTRUCTIONS = 'Elige el tiempo verbal correcto (Present Perfect o Past Simple).';

export const UNIT_45_LESSON_1_GRAMMAR: Exercise[] = [
  {
    id: 'a2-u45-l1-g1',
    type: 'fill-blank',
    level: 'A2',
    topic: 'Present Perfect vs Past Simple',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS,
      questions: [
        {
          question: '[[I|Yo]] ____ ____ ____ [[to|a]] [[Paris|París]] [[many|muchas]] [[times|veces]].',
          options: ['[[have been|he estado]]', '[[went|fui]]', '[[was|estuve]]'],
          correctAnswer: 'have been',
          explanation: "[[Present Perfect|Presente Perfecto]] = [[general|experiencia general]] [[experience|en la vida]].",
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a2-u45-l1-g2',
    type: 'fill-blank',
    level: 'A2',
    topic: 'Present Perfect vs Past Simple',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS,
      questions: [
        {
          question: '[[I|Yo]] ____ [[to|a]] [[Paris|París]] [[last|el pasado]] [[year|año]].',
          options: ['[[have been|he estado]]', '[[went|fui]]', '[[have gone|he ido]]'],
          correctAnswer: 'went',
          explanation: "[[Past Simple|Pasado Simple]] = [[specific|momento específico]] [[time|en el tiempo]] ([[last year|el año pasado]]).",
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a2-u45-l1-g3',
    type: 'fill-blank',
    level: 'A2',
    topic: 'Present Perfect vs Past Simple',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS,
      questions: [
        {
          question: '[[She|Ella]] ____ ____ [[that|esa]] [[film|película]] [[three|tres]] [[times|veces]].',
          options: ['[[has seen|ha visto]]', '[[saw|vió]]', '[[see|ve]]'],
          correctAnswer: 'has seen',
          explanation: "[[Present Perfect|Presente Perfecto]] = [[general|experiencia general]] [[experience|en la vida]].",
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a2-u45-l1-g4',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Present Perfect vs Past Simple',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: 'Elige la opción correcta.',
      questions: [
        {
          question: '[[She|Ella]] ____ [[that|esa]] [[film|película]] [[yesterday|ayer]].',
          options: ['[[saw|vió]]', '[[has seen|ha visto]]', '[[see|ve]]'],
          correctAnswer: 0,
          explanation: "[[Past Simple|Pasado Simple]] = [[specific|momento específico]] ([[yesterday|ayer]]).",
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a2-u45-l1-g5',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Present Perfect vs Past Simple',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: 'Elige la opción correcta.',
      questions: [
        {
          question: '[[Have|¿]] [[you|tú]] ____ [[to|a]] [[Japan|Japón]]?',
          options: ['[[ever been|alguna vez estado]]', '[[ever went|alguna vez fuiste]]', '[[went ever|fuiste alguna vez]]'],
          correctAnswer: 0,
          explanation: "[[Present Perfect|Presente Perfecto]] = [[general|experiencia general]] [[question|pregunta]].",
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a2-u45-l1-g6',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Present Perfect vs Past Simple',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: 'Elige la opción correcta.',
      questions: [
        {
          question: '[[When|Cuándo]] ____ [[you|tú]] ____ [[to|a]] [[Japan|Japón]]?',
          options: ['[[did|]] ... [[go|ir]]', '[[have|]] ... [[been|estado]]', '[[do|]] ... [[go|ir]]'],
          correctAnswer: 0,
          explanation: "[[Past Simple|Pasado Simple]] = [[specific|momento específico]] [[when|cuándo]].",
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a2-u45-l1-g7',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Present Perfect vs Past Simple',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: 'Elige la opción correcta.',
      questions: [
        {
          question: '[[I|Yo]] ____ ____ ____ [[sushi|sushi]] [[before|antes]].',
          options: ['[[have never tried|nunca he probado]]', '[[never tried|nunca probé]]', '[[did not try|no probé]]'],
          correctAnswer: 0,
          explanation: "[[Present Perfect|Presente Perfecto]] = [[general|experiencia general]] [[in life|en la vida]].",
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a2-u45-l1-g8',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Present Perfect vs Past Simple',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: 'Elige la opción correcta.',
      questions: [
        {
          question: '[[He|Él]] ____ [[born|nacido]] [[in|en]] [[1990|1990]].',
          options: ['[[was|fue]]', '[[has been|ha sido]]', '[[is|es]]'],
          correctAnswer: 0,
          explanation: "[[Past Simple|Pasado Simple]] = [[specific|fecha específica]] [[date|en el pasado]].",
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a2-u45-l1-g9',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Present Perfect vs Past Simple',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: 'Elige la opción correcta.',
      questions: [
        {
          question: '[[We|Nosotros]] ____ ____ [[each other|el uno al otro]] [[for|durante]] [[ten|diez]] [[years|años]].',
          options: ['[[have known|hemos conocido]]', '[[knew|conocimos]]', '[[know|conocemos]]'],
          correctAnswer: 0,
          explanation: "[[Present Perfect|Presente Perfecto]] + [[for|for]] = [[duration|duración]] [[until now|hasta ahora]].",
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a2-u45-l1-g10',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Present Perfect vs Past Simple',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: 'Elige la opción correcta.',
      questions: [
        {
          question: '[[We|Nosotros]] ____ [[each other|el uno al otro]] [[at|en]] [[university|universidad]] [[in|en]] [[2015|2015]].',
          options: ['[[met|conocimos]]', '[[have met|hemos conocido]]', '[[meet|conocemos]]'],
          correctAnswer: 0,
          explanation: "[[Past Simple|Pasado Simple]] = [[specific|momento específico]] ([[2015|2015]]).",
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a2-u45-l1-g11',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Present Perfect vs Past Simple',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: 'Elige la opción correcta.',
      questions: [
        {
          question: '[[They|Ellos]] ____ ____ ____ [[the|la]] [[news|noticias]] ____.',
          options: ['[[have just heard|acaban de oír]]', '[[just heard|acaban de oír]]', '[[hear just|oyen acabo]]'],
          correctAnswer: 0,
          explanation: "[[Present Perfect|Presente Perfecto]] + [[just|just]] = [[recent|acción reciente]].",
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a2-u45-l1-g12',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Present Perfect vs Past Simple',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: 'Elige la opción correcta.',
      questions: [
        {
          question: '[[Shakespeare|Shakespeare]] ____ [[many|muchas]] [[plays|obras]] [[of|de]] [[theatre|teatro]].',
          options: ['[[wrote|escribió]]', '[[has written|ha escrito]]', '[[writes|escribe]]'],
          correctAnswer: 0,
          explanation: "[[Past Simple|Pasado Simple]] = [[dead|persona fallecida]] [[person|en el pasado]].",
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a2-u45-l1-g13',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Present Perfect vs Past Simple',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: 'Elige la opción correcta.',
      questions: [
        {
          question: '[[I|Yo]] ____ ____ ____ [[my|mi]] [[keys|llaves]] [[yet|aún]].',
          options: ['[[have not found|no he encontrado]]', '[[did not find|no encontré]]', '[[do not find|no encuentro]]'],
          correctAnswer: 0,
          explanation: "[[Present Perfect|Presente Perfecto]] + [[yet|yet]] = [[until now|hasta ahora]].",
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a2-u45-l1-g14',
    type: 'fill-blank',
    level: 'A2',
    topic: 'Present Perfect vs Past Simple',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS,
      questions: [
        {
          question: '[[I|Yo]] ____ ____ ____ [[to|a]] [[the|el]] [[cinema|cine]] [[last|la pasada]] [[week|semana]].',
          options: ['[[went|fui]]', '[[have been|he estado]]', '[[have gone|he ido]]'],
          correctAnswer: 'went',
          explanation: "[[Past Simple|Pasado Simple]] = [[specific|momento específico]] ([[last week|la pasada semana]]).",
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a2-u45-l1-g15',
    type: 'fill-blank',
    level: 'A2',
    topic: 'Present Perfect vs Past Simple',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS,
      questions: [
        {
          question: '[[She|Ella]] ____ ____ ____ [[in|en]] [[this|esta]] [[city|ciudad]] ____ [[2018|2018]].',
          options: ['[[has lived|ha vivido]] ... [[since|desde]]', '[[lived|vivió]] ... [[since|desde]]', '[[has lived|ha vivido]] ... [[for|durante]]'],
          correctAnswer: 'has lived since',
          explanation: "[[Present Perfect|Presente Perfecto]] + [[since|since]] = [[duration|duración]] [[from point|desde un punto]].",
        },
      ],
    },
    topicName: 'Grammar',
  },
];
