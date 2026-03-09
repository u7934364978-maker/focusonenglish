/**
 * Unidad 15 — Lección 1: Gramática (Present Perfect vs Past Simple)
 * 15 ejercicios: contraste entre ambos tiempos
 */

import { Exercise } from '@/lib/exercise-generator';

const LESSON_TITLE = '[[Present Perfect|Presente Perfecto]] [[vs|vs]] [[Past Simple|Pasado Simple]]';
const INSTRUCTIONS_FILL = 'Elige el tiempo correcto (Present Perfect o Past Simple) para cada frase.';
const INSTRUCTIONS_MULTIPLE = 'Elige la frase o la forma correcta.';
const INSTRUCTIONS_ORDER = 'Ordena las palabras para formar una oración correcta.';
const INSTRUCTIONS_TF = 'Indica si la afirmación es verdadera o falsa.';

export const UNIT_15_LESSON_1_GRAMMAR: Exercise[] = [
  {
    id: 'a2-u15-l1-g1',
    type: 'fill-blank',
    level: 'A2',
    topic: 'Present Perfect vs Past Simple',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_FILL,
      questions: [
        {
          question: '[[I|Yo]] ____ [[went|fui]] [[to|a]] [[Paris|París]] [[last year|el año pasado]].',
          options: ['[[have|he]]', '[[went|fui]]', '[[go|ir]]'],
          correctAnswer: 'went',
          explanation: '[[Past Simple|Pasado Simple]] [[with|con]] [[last year|el año pasado]] = [[specific|específico]] [[time|tiempo]].',
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a2-u15-l1-g2',
    type: 'fill-blank',
    level: 'A2',
    topic: 'Present Perfect vs Past Simple',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_FILL,
      questions: [
        {
          question: '[[I|Yo]] ____ [[been|estado]] [[to|a]] [[Paris|París]]. [[It|Eso]] [[was|fue]] [[amazing|increíble]].',
          options: ['[[have|he]]', '[[had|había]]', '[[went|fui]]'],
          correctAnswer: 'have',
          explanation: '[[Present Perfect|Presente Perfecto]] [[for|para]] [[experience|experiencia]] [[without|sin]] [[specific|específico]] [[time|tiempo]].',
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a2-u15-l1-g3',
    type: 'fill-blank',
    level: 'A2',
    topic: 'Present Perfect vs Past Simple',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_FILL,
      questions: [
        {
          question: '[[She|Ella]] ____ [[saw|vió]] [[him|él]] [[yesterday|ayer]].',
          options: ['[[have|he]]', '[[has|ha]]', '[[saw|vió]]'],
          correctAnswer: 'saw',
          explanation: '[[Past Simple|Pasado Simple]] [[with|con]] [[yesterday|ayer]] = [[specific|específico]] [[time|tiempo]].',
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a2-u15-l1-g4',
    type: 'fill-blank',
    level: 'A2',
    topic: 'Present Perfect vs Past Simple',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_FILL,
      questions: [
        {
          question: '[[Have|¿Has]] [[you|tú]] ____ [[been|estado]] [[to|a]] [[Japan|Japón]]?',
          options: ['[[ever|alguna vez]]', '[[yesterday|ayer]]', '[[last week|la semana pasada]]'],
          correctAnswer: 'ever',
          explanation: '[[Ever|Alguna vez]] [[with|con]] [[Present Perfect|Presente Perfecto]] [[for|para]] [[experiences|experiencias]].',
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a2-u15-l1-g5',
    type: 'fill-blank',
    level: 'A2',
    topic: 'Present Perfect vs Past Simple',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_FILL,
      questions: [
        {
          question: '[[I|Yo]] ____ [[bought|compré]] [[this|este]] [[car|coche]] [[two years ago|hace dos años]].',
          options: ['[[have|he]]', '[[bought|compré]]', '[[buy|comprar]]'],
          correctAnswer: 'bought',
          explanation: '[[Past Simple|Pasado Simple]] [[with|con]] "[[ago|hace]]" = [[finished|terminado]] [[time|tiempo]].',
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a2-u15-l1-g6',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Present Perfect vs Past Simple',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_MULTIPLE,
      questions: [
        {
          question: '[[Which|Cuál]] [[sentence|frase]] [[is|es]] [[correct|correcta]]?',
          options: [
            '[[I|Yo]] [[have gone|he ido]] [[to|a]] [[London|Londres]] [[yesterday|ayer]].',
            '[[I|Yo]] [[went|fui]] [[to|a]] [[London|Londres]] [[yesterday|ayer]].',
            '[[I|Yo]] [[go|voy]] [[to|a]] [[London|Londres]] [[yesterday|ayer]].',
          ],
          correctAnswer: 1,
          explanation: '[[Yesterday|Ayer]] = [[Past Simple|Pasado Simple]]; [[Present Perfect|Presente Perfecto]] [[not|no]] [[with|con]] [[specific|específico]] [[time|tiempo]].',
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a2-u15-l1-g7',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Present Perfect vs Past Simple',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_MULTIPLE,
      questions: [
        {
          question: '[[Choose|Elige]] [[the|la]] [[correct|correcta]] [[sentence|frase]] [[for|para]] [[experience|experiencia]] [[without|sin]] [[specific|específico]] [[time|tiempo]]:',
          options: [
            '[[I|Yo]] [[went|fui]] [[to|a]] [[Italy|Italia]].',
            '[[I|Yo]] [[have been|he estado]] [[to|a]] [[Italy|Italia]].',
            '[[I|Yo]] [[go|voy]] [[to|a]] [[Italy|Italia]].',
          ],
          correctAnswer: 1,
          explanation: '[[Present Perfect|Presente Perfecto]] [[for|para]] [[life experience|experiencia de vida]] [[without|sin]] [[when|cuándo]].',
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a2-u15-l1-g8',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Present Perfect vs Past Simple',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_MULTIPLE,
      questions: [
        {
          question: '[[What|Qué]] [[time markers|marcadores temporales]] [[go|van]] [[with|con]] [[Past Simple|Pasado Simple]]?',
          options: [
            '[[yesterday|ayer]], [[last week|la semana pasada]], [[ago|hace]]',
            '[[ever|alguna vez]], [[never|nunca]], [[just|acabar de]]',
            '[[tomorrow|mañana]], [[next week|la próxima semana]]',
          ],
          correctAnswer: 0,
          explanation: '[[Past Simple|Pasado Simple]]: [[yesterday|ayer]], [[last week|la semana pasada]], [[ago|hace]], [[in 2020|en 2020]].',
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a2-u15-l1-g9',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Present Perfect vs Past Simple',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_MULTIPLE,
      questions: [
        {
          question: '[[Complete|Completa]]: "[[I|Yo]] ____ [[saw|vió]] [[him|él]] [[last Monday|el lunes pasado]]."',
          options: ['[[have|he]]', '[[saw|vió]]', '[[see|ver]]'],
          correctAnswer: 1,
          explanation: '[[Last Monday|El lunes pasado]] = [[Past Simple|Pasado Simple]]. [[I saw him|Lo vi]].',
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a2-u15-l1-g10',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Present Perfect vs Past Simple',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_MULTIPLE,
      questions: [
        {
          question: '[[Which|Cuál]] [[sentence|frase]] [[is|es]] [[correct|correcta]]?',
          options: [
            '[[Have|¿Has]] [[you|tú]] [[ever|alguna vez]] [[been|estado]] [[to|a]] [[Spain|España]]?',
            '[[Did|¿]] [[you|tú]] [[ever|alguna vez]] [[go|ir]] [[to|a]] [[Spain|España]]?',
            '[[Do|¿]] [[you|tú]] [[ever|alguna vez]] [[go|ir]] [[to|a]] [[Spain|España]]?',
          ],
          correctAnswer: 0,
          explanation: '[[Ever|Alguna vez]] [[with|con]] [[Present Perfect|Presente Perfecto]] [[for|para]] [[experiences|experiencias]].',
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a2-u15-l1-g11',
    type: 'sentence-building',
    level: 'A2',
    topic: 'Present Perfect vs Past Simple',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_ORDER,
      correctSentence: '[[I|Yo]] [[went|fui]] [[to|a]] [[Paris|París]] [[last year|el año pasado]].',
      words: ['[[I|Yo]]', '[[went|fui]]', '[[to|a]]', '[[Paris|París]]', '[[last year|el año pasado]].'],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a2-u15-l1-g12',
    type: 'sentence-building',
    level: 'A2',
    topic: 'Present Perfect vs Past Simple',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_ORDER,
      correctSentence: '[[I|Yo]] [[have|he]] [[been|estado]] [[to|a]] [[Paris|París]] [[before|antes]].',
      words: ['[[I|Yo]]', '[[have|he]]', '[[been|estado]]', '[[to|a]]', '[[Paris|París]]', '[[before|antes]].'],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a2-u15-l1-g13',
    type: 'sentence-building',
    level: 'A2',
    topic: 'Present Perfect vs Past Simple',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_ORDER,
      correctSentence: '[[She|Ella]] [[saw|vió]] [[him|él]] [[yesterday|ayer]].',
      words: ['[[She|Ella]]', '[[saw|vió]]', '[[him|él]]', '[[yesterday|ayer]].'],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a2-u15-l1-g14',
    type: 'true-false',
    level: 'A2',
    topic: 'Present Perfect vs Past Simple',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_TF,
      questions: [
        {
          question: '[[Present Perfect|Presente Perfecto]] [[is|es]] [[used|usado]] [[for|para]] [[specific|específico]] [[past|pasado]] [[time|tiempo]] [[like|como]] [[yesterday|ayer]].',
          options: ['[[True|Verdadero]]', '[[False|Falso]]'],
          correctAnswer: 'False',
          explanation: '[[False|Falso]]. [[Past Simple|Pasado Simple]] [[for|para]] [[specific|específico]] [[time|tiempo]]. [[Present Perfect|Presente Perfecto]] [[for|para]] [[experience|experiencia]] [[or|o]] [[recent|reciente]] [[action|acción]].',
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a2-u15-l1-g15',
    type: 'true-false',
    level: 'A2',
    topic: 'Present Perfect vs Past Simple',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_TF,
      questions: [
        {
          question: '"[[Ever|Alguna vez]]" [[and|y]] "[[never|nunca]]" [[are|son]] [[used|usados]] [[with|con]] [[Present Perfect|Presente Perfecto]], [[not|no]] [[Past Simple|Pasado Simple]].',
          options: ['[[True|Verdadero]]', '[[False|Falso]]'],
          correctAnswer: 'True',
          explanation: '[[True|Verdadero]]. [[Ever|Alguna vez]] [[and|y]] [[never|nunca]] [[with|con]] [[Present Perfect|Presente Perfecto]] [[for|para]] [[experiences|experiencias]].',
        },
      ],
    },
    topicName: 'Grammar',
  },
];
