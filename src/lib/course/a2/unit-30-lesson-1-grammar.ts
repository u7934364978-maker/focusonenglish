/**
 * Unidad 30 — Lección 1: Gramática (Module 3 Review)
 * 15 ejercicios: repaso futuro, condicionales, have to, could
 */

import { Exercise } from '@/lib/exercise-generator';

const LESSON_TITLE = '[[Module 3|Módulo 3]]: [[Review|Repaso]]';
const INSTRUCTIONS_FILL = 'Elige la forma correcta.';
const INSTRUCTIONS_MULTIPLE = 'Elige la frase o la forma correcta.';
const INSTRUCTIONS_ORDER = 'Ordena las palabras para formar una oración correcta.';
const INSTRUCTIONS_TF = 'Indica si la afirmación es verdadera o falsa.';

export const UNIT_30_LESSON_1_GRAMMAR: Exercise[] = [
  {
    id: 'a2-u30-l1-g1',
    type: 'fill-blank',
    level: 'A2',
    topic: 'Module 3 Review',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_FILL,
      questions: [
        {
          question: '[[I|Yo]] ____ ____ [[visit|visitar]] [[my|mi]] [[family|familia]] [[next week|la próxima semana]].',
          options: ['[[am going to|voy a]]', '[[will|podré]]', '[[am visiting|estoy visitando]]'],
          correctAnswer: 'am going to',
          explanation: '[[Plan|Plan]] [[already|ya]] [[decided|decidido]] → [[going to|voy a]].',
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a2-u30-l1-g2',
    type: 'fill-blank',
    level: 'A2',
    topic: 'Module 3 Review',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_FILL,
      questions: [
        {
          question: '[[If|Si]] [[it|va]] ____ [[rains|llueve]], [[I|yo]] [[will stay|me quedaré]] [[at|en]] [[home|casa]].',
          options: ['[[rains|llueve]]', '[[will rain|lloverá]]', '[[rained|llovió]]'],
          correctAnswer: 'rains',
          explanation: '[[First conditional|Primer condicional]]: [[If|Si]] + [[Present Simple|presente simple]].',
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a2-u30-l1-g3',
    type: 'fill-blank',
    level: 'A2',
    topic: 'Module 3 Review',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_FILL,
      questions: [
        {
          question: '[[If|Si]] [[you|tú]] ____ [[heat|calientas]] [[water|agua]], [[it|ella]] [[boils|hierve]].',
          options: ['[[heat|calientas]]', '[[will heat|calentarás]]', '[[heated|calentaste]]'],
          correctAnswer: 'heat',
          explanation: '[[Zero conditional|Condicional cero]]: [[general|hecho]] [[fact|general]] → [[present|presente]] + [[present|presente]].',
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a2-u30-l1-g4',
    type: 'fill-blank',
    level: 'A2',
    topic: 'Module 3 Review',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_FILL,
      questions: [
        {
          question: '[[I|Yo]] ____ ____ [[get up|levantarme]] [[early|temprano]] [[tomorrow|mañana]].',
          options: ['[[have to|tengo que]]', '[[could|podía]]', '[[will|podré]]'],
          correctAnswer: 'have to',
          explanation: '[[Obligation|Obligación]] → [[have to|tengo que]].',
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a2-u30-l1-g5',
    type: 'fill-blank',
    level: 'A2',
    topic: 'Module 3 Review',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_FILL,
      questions: [
        {
          question: '____ ____ ____ ____ ____ ____ ____ [[pass|pasar]] [[the salt|la sal]], [[please|por favor]]?',
          options: ['[[Could you|Podrías]]', '[[Can you|Puedes]]', '[[Do you|Haces]]'],
          correctAnswer: 'Could you',
          explanation: '[[Polite request|Petición cortés]] → [[Could you...?|¿Podrías...?]]',
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a2-u30-l1-g6',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Module 3 Review',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_MULTIPLE,
      questions: [
        {
          question: '[[Which|Cuál]] [[sentence|frase]] [[uses|usa]] [[going to|voy a]] [[for|para]] [[a|una]] [[plan|plan]]?',
          options: [
            '[[I am going to|Voy a]] [[travel|viajar]] [[to|a]] [[Spain|España]] [[in August|en agosto]].',
            '[[I will|Voy a]] [[travel|viajar]] [[to|a]] [[Spain|España]] [[in August|en agosto]].',
            '[[I travel|Viajo]] [[to|a]] [[Spain|España]] [[in August|en agosto]].',
          ],
          correctAnswer: 0,
          explanation: '[[Going to|Voy a]] = [[plan|plan]] [[or|o]] [[intention|intención]].',
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a2-u30-l1-g7',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Module 3 Review',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_MULTIPLE,
      questions: [
        {
          question: '[[First|Primer]] [[conditional|condicional]] [[structure|estructura]]:',
          options: [
            '[[If|Si]] + [[Present Simple|presente simple]], [[will|will]] + [[infinitive|infinitivo]]',
            '[[If|Si]] + [[Past Simple|pasado simple]], [[would|would]] + [[infinitive|infinitivo]]',
            '[[If|Si]] + [[Present Simple|presente simple]], [[Present Simple|presente simple]]',
          ],
          correctAnswer: 0,
          explanation: '[[First conditional|Primer condicional]]: [[If|Si]] + [[present|presente]], [[will|will]] + [[infinitive|infinitivo]].',
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a2-u30-l1-g8',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Module 3 Review',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_MULTIPLE,
      questions: [
        {
          question: '[[Zero|Condicional]] [[conditional|cero]] [[is|es]] [[used|usado]] [[for|para]] ____.',
          options: ['[[general facts|hechos generales]] [[and|y]] [[routines|rutinas]]', '[[future|futuro]] [[plans|planes]]', '[[past|pasado]] [[events|eventos]]'],
          correctAnswer: 0,
          explanation: '[[Zero conditional|Condicional cero]] = [[general|hecho]] [[fact|general]]: [[If|Si]] + [[present|presente]], [[present|presente]].',
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a2-u30-l1-g9',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Module 3 Review',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_MULTIPLE,
      questions: [
        {
          question: '"[[Don\'t have to|No tener que]]" [[means|significa]] ____.',
          options: ['[[no obligation|sin obligación]]', '[[prohibition|prohibición]]', '[[strong obligation|obligación fuerte]]'],
          correctAnswer: 0,
          explanation: '[[Don\'t have to|No tener que]] = [[optional|opcional]], [[not necessary|no necesario]].',
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a2-u30-l1-g10',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Module 3 Review',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_MULTIPLE,
      questions: [
        {
          question: '[[Which|Cuál]] [[is|es]] [[more|más]] [[polite|educado]]?',
          options: ['[[Could you|Podrías]] [[help|ayudar]] [[me|me]]?', '[[Can you|Puedes]] [[help|ayudar]] [[me|me]]?', '[[Help me|Ayúdame]]!'],
          correctAnswer: 0,
          explanation: '[[Could you|¿Podrías]] = [[more|más]] [[polite|educada]] [[than|que]] [[Can you|¿Puedes]].',
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a2-u30-l1-g11',
    type: 'sentence-building',
    level: 'A2',
    topic: 'Module 3 Review',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_ORDER,
      correctSentence: '[[If|Si]] [[it|va]] [[rains|llueve]], [[I|yo]] [[will stay|me quedaré]] [[at|en]] [[home|casa]].',
      words: ['[[If|Si]]', '[[it|va]]', '[[rains|llueve]]', ',', '[[I|yo]]', '[[will stay|me quedaré]]', '[[at|en]]', '[[home|casa]].'],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a2-u30-l1-g12',
    type: 'sentence-building',
    level: 'A2',
    topic: 'Module 3 Review',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_ORDER,
      correctSentence: '[[I|Yo]] [[have to|tengo que]] [[get up|levantarme]] [[early|temprano]] [[tomorrow|mañana]].',
      words: ['[[I|Yo]]', '[[have to|tengo que]]', '[[get up|levantarme]]', '[[early|temprano]]', '[[tomorrow|mañana]].'],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a2-u30-l1-g13',
    type: 'sentence-building',
    level: 'A2',
    topic: 'Module 3 Review',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_ORDER,
      correctSentence: '[[Could you|Podrías]] [[pass|pasar]] [[me|me]] [[the|el]] [[water|agua]], [[please|por favor]]?',
      words: ['[[Could you|Podrías]]', '[[pass|pasar]]', '[[me|me]]', '[[the|el]]', '[[water|agua]]', ',', '[[please|por favor]]?'],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a2-u30-l1-g14',
    type: 'true-false',
    level: 'A2',
    topic: 'Module 3 Review',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_TF,
      questions: [
        {
          question: '[[Module 3|Módulo 3]] [[includes|incluye]] [[going to|voy a]], [[will|will]], [[Present Continuous|presente continuo]] [[for|para]] [[future|futuro]], [[conditionals|condicionales]], [[have to|have to]] [[and|y]] [[could|could]].',
          options: ['[[True|Verdadero]]', '[[False|Falso]]'],
          correctAnswer: 'True',
          explanation: '[[True|Verdadero]]. [[Module|Módulo]] [[3|3]] [[covers|cubre]] [[all|todos]] [[these|estos]] [[topics|temas]].',
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a2-u30-l1-g15',
    type: 'true-false',
    level: 'A2',
    topic: 'Module 3 Review',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_TF,
      questions: [
        {
          question: '[[Zero|Condicional]] [[conditional|cero]] [[uses|usa]] [[will|will]] [[in|en]] [[the|la]] [[result|resultado]] [[clause|oración]].',
          options: ['[[True|Verdadero]]', '[[False|Falso]]'],
          correctAnswer: 'False',
          explanation: '[[False|Falso]]. [[Zero|Condicional]] [[conditional|cero]] [[uses|usa]] [[present|presente]] + [[present|presente]], [[no|sin]] [[will|will]].',
        },
      ],
    },
    topicName: 'Grammar',
  },
];
