/**
 * Unidad 24 — Lección 1: Gramática (Present Continuous for Future)
 * 15 ejercicios: planes ya fijados, citas, reuniones
 */

import { Exercise } from '@/lib/exercise-generator';

const LESSON_TITLE = '[[Present Continuous|Presente Continuo]] [[for|para]] [[Future|Futuro]]';
const INSTRUCTIONS_FILL = 'Elige la forma correcta del Present Continuous para planes futuros.';
const INSTRUCTIONS_MULTIPLE = 'Elige la frase o la forma correcta.';
const INSTRUCTIONS_ORDER = 'Ordena las palabras para formar una oración correcta.';
const INSTRUCTIONS_TF = 'Indica si la afirmación es verdadera o falsa.';

export const UNIT_24_LESSON_1_GRAMMAR: Exercise[] = [
  {
    id: 'a2-u24-l1-g1',
    type: 'fill-blank',
    level: 'A2',
    topic: 'Present Continuous Future',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_FILL,
      questions: [
        {
          question: '[[I|Yo]] ____ [[meeting|quedando]] [[John|John]] [[tomorrow|mañana]] [[at|a]] [[3|tres]] [[o\'clock|en punto]].',
          options: ['[[am|estoy]]', '[[is|está]]', '[[are|están]]'],
          correctAnswer: 'am',
          explanation: '[[I|Yo]] + [[am|estoy]] + [[-ing|ing]] [[for|para]] [[fixed|fijados]] [[plans|planes]].',
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a2-u24-l1-g2',
    type: 'fill-blank',
    level: 'A2',
    topic: 'Present Continuous Future',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_FILL,
      questions: [
        {
          question: '[[She|Ella]] ____ [[flying|volando]] [[to|a]] [[Paris|París]] [[next|el próximo]] [[week|semana]].',
          options: ['[[am|estoy]]', '[[is|está]]', '[[are|están]]'],
          correctAnswer: 'is',
          explanation: '[[She|Ella]] + [[is|está]] + [[-ing|ing]] [[for|para]] [[arranged|organizados]] [[plans|planes]].',
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a2-u24-l1-g3',
    type: 'fill-blank',
    level: 'A2',
    topic: 'Present Continuous Future',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_FILL,
      questions: [
        {
          question: '[[They|Ellos]] ____ [[having|teniendo]] [[dinner|cena]] [[with|con]] [[us|nosotros]] [[on|el]] [[Friday|viernes]].',
          options: ['[[am|estoy]]', '[[is|está]]', '[[are|están]]'],
          correctAnswer: 'are',
          explanation: '[[They|Ellos]] + [[are|están]] + [[-ing|ing]] [[for|para]] [[fixed|fijados]] [[plans|planes]].',
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a2-u24-l1-g4',
    type: 'fill-blank',
    level: 'A2',
    topic: 'Present Continuous Future',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_FILL,
      questions: [
        {
          question: '[[I|Yo]] ____ [[meeting|quedando]] [[the|el]] [[dentist|dentista]] [[at|a]] [[10|diez]] [[in|por]] [[the|la]] [[morning|mañana]].',
          options: ['[[am|estoy]]', '[[is|está]]', '[[are|están]]'],
          correctAnswer: 'am',
          explanation: '[[Appointment|cita]] = [[fixed|fijada]] [[plan|plan]] → [[Present Continuous|Presente Continuo]].',
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a2-u24-l1-g5',
    type: 'fill-blank',
    level: 'A2',
    topic: 'Present Continuous Future',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_FILL,
      questions: [
        {
          question: '[[We|Nosotros]] ____ [[playing|jugando]] [[tennis|tenis]] [[with|con]] [[them|ellos]] [[this|este]] [[weekend|fin de semana]].',
          options: ['[[am|estoy]]', '[[is|está]]', '[[are|están]]'],
          correctAnswer: 'are',
          explanation: '[[We|Nosotros]] + [[are|estamos]] + [[-ing|ing]] [[for|para]] [[arranged|organizados]] [[plans|planes]].',
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a2-u24-l1-g6',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Present Continuous Future',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_MULTIPLE,
      questions: [
        {
          question: '[[When|Cuándo]] [[do|usamos]] [[we|nosotros]] [[use|usamos]] [[Present Continuous|Presente Continuo]] [[for|para]] [[future|futuro]]?',
          options: [
            '[[When|Cuando]] [[we|nosotros]] [[have|tenemos]] [[fixed|fijados]] [[or|o]] [[arranged|organizados]] [[plans|planes]] [[and|y]] [[appointments|citas]]',
            '[[When|Cuando]] [[we|nosotros]] [[make|hacemos]] [[spontaneous|espontáneas]] [[predictions|predicciones]]',
            '[[When|Cuando]] [[we|nosotros]] [[talk|hablamos]] [[about|sobre]] [[the past|el pasado]]',
          ],
          correctAnswer: 0,
          explanation: '[[Present Continuous|Presente Continuo]] [[for|para]] [[future|futuro]] = [[fixed|fijados]] [[plans|planes]] [[and|y]] [[appointments|citas]].',
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a2-u24-l1-g7',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Present Continuous Future',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_MULTIPLE,
      questions: [
        {
          question: '"[[I\'m meeting John tomorrow|Quedo con John mañana]]" [[means|significa]] ____.',
          options: [
            '[[the|el]] [[plan|plan]] [[is|está]] [[already|ya]] [[arranged|organizado]]',
            '[[I|Yo]] [[might|podría]] [[meet|quedar]] [[him|con él]]',
            '[[I|Yo]] [[met|quedé]] [[him|con él]] [[yesterday|ayer]]',
          ],
          correctAnswer: 0,
          explanation: '[[Present Continuous|Presente Continuo]] [[for|para]] [[future|futuro]] = [[fixed|fijado]] [[plan|plan]].',
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a2-u24-l1-g8',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Present Continuous Future',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_MULTIPLE,
      questions: [
        {
          question: '[[Which|Cuál]] [[sentence|frase]] [[is|es]] [[correct|correcta]]?',
          options: [
            '[[I|Yo]] [[am meeting|quedo]] [[John|John]] [[tomorrow|mañana]].',
            '[[I|Yo]] [[meet|quedo]] [[John|John]] [[tomorrow|mañana]].',
            '[[I|Yo]] [[will meet|quedaré]] [[John|John]] [[tomorrow|mañana]].',
          ],
          correctAnswer: 0,
          explanation: '[[Fixed|Fijado]] [[plan|plan]] → [[Present Continuous|Presente Continuo]]: [[am meeting|quedo]].',
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a2-u24-l1-g9',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Present Continuous Future',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_MULTIPLE,
      questions: [
        {
          question: '[[What|Qué]] [[time|tiempo]] [[words|palabras]] [[often|a menudo]] [[go|van]] [[with|con]] [[Present Continuous|Presente Continuo]] [[for|para]] [[future|futuro]]?',
          options: ['[[tomorrow|mañana]], [[next week|la próxima semana]], [[on Friday|el viernes]]', '[[yesterday|ayer]], [[last week|la semana pasada]]', '[[always|siempre]], [[usually|normalmente]]'],
          correctAnswer: 0,
          explanation: '[[Future|Futuros]] [[time|tiempo]] [[markers|marcadores]]: [[tomorrow|mañana]], [[next week|la próxima semana]], [[on Monday|el lunes]].',
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a2-u24-l1-g10',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Present Continuous Future',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_MULTIPLE,
      questions: [
        {
          question: '[[Complete|Completa]]: "[[What time|A qué hora]] ____ ____ ____ ____ [[meeting|quedando]] [[him|con él]]?"',
          options: ['[[are you|estás]]', '[[is you|está]]', '[[am you|estoy]]'],
          correctAnswer: 0,
          explanation: '[[Question|Pregunta]]: [[What time are you meeting him?|¿A qué hora quedas con él?]]',
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a2-u24-l1-g11',
    type: 'sentence-building',
    level: 'A2',
    topic: 'Present Continuous Future',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_ORDER,
      correctSentence: '[[I|Yo]] [[am meeting|quedo]] [[John|John]] [[tomorrow|mañana]] [[at|a]] [[3|tres]] [[o\'clock|en punto]].',
      words: ['[[I|Yo]]', '[[am meeting|quedo]]', '[[John|John]]', '[[tomorrow|mañana]]', '[[at|a]]', '[[3|tres]]', '[[o\'clock|en punto]].'],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a2-u24-l1-g12',
    type: 'sentence-building',
    level: 'A2',
    topic: 'Present Continuous Future',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_ORDER,
      correctSentence: '[[She|Ella]] [[is flying|vuela]] [[to|a]] [[Paris|París]] [[next week|la próxima semana]].',
      words: ['[[She|Ella]]', '[[is flying|vuela]]', '[[to|a]]', '[[Paris|París]]', '[[next week|la próxima semana]].'],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a2-u24-l1-g13',
    type: 'sentence-building',
    level: 'A2',
    topic: 'Present Continuous Future',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_ORDER,
      correctSentence: '[[They|Ellos]] [[are having|tienen]] [[dinner|cena]] [[with|con]] [[us|nosotros]] [[on Friday|el viernes]].',
      words: ['[[They|Ellos]]', '[[are having|tienen]]', '[[dinner|cena]]', '[[with|con]]', '[[us|nosotros]]', '[[on Friday|el viernes]].'],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a2-u24-l1-g14',
    type: 'true-false',
    level: 'A2',
    topic: 'Present Continuous Future',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_TF,
      questions: [
        {
          question: '[[Present Continuous|Presente Continuo]] [[can|puede]] [[be|ser]] [[used|usado]] [[for|para]] [[fixed|fijados]] [[future|futuros]] [[plans|planes]] [[and|y]] [[appointments|citas]].',
          options: ['[[True|Verdadero]]', '[[False|Falso]]'],
          correctAnswer: 'True',
          explanation: '[[True|Verdadero]]. [[I\'m meeting John tomorrow|Quedo con John mañana]] = [[fixed|fijado]] [[plan|plan]].',
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a2-u24-l1-g15',
    type: 'true-false',
    level: 'A2',
    topic: 'Present Continuous Future',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_TF,
      questions: [
        {
          question: '"[[She|Ella]] [[are meeting|quedan]] [[him|con él]] [[tomorrow|mañana]]" [[is|es]] [[correct|correcto]] [[in|en]] [[English|inglés]].',
          options: ['[[True|Verdadero]]', '[[False|Falso]]'],
          correctAnswer: 'False',
          explanation: '[[False|Falso]]. [[Correct|Correcto]]: "[[She is meeting him tomorrow|Ella queda con él mañana]]". [[She|Ella]] + [[is|está]].',
        },
      ],
    },
    topicName: 'Grammar',
  },
];
