/**
 * Unidad 30 — Lección 2: Vocabulario (Module 3 Review)
 * 15 ejercicios: repaso vocabulario futuro, condicionales, have to, could
 */

import { Exercise } from '@/lib/exercise-generator';

const LESSON_TITLE = '[[Vocabulary|Vocabulario]]: [[Module 3|Módulo 3]] [[Review|Repaso]]';
const INSTRUCTIONS_MC = 'Elige la palabra correcta para cada definición o frase.';
const INSTRUCTIONS_MATCH = 'Relaciona cada palabra en inglés con su traducción.';
const INSTRUCTIONS_FILL = 'Completa la frase con la palabra correcta del recuadro.';

export const UNIT_30_LESSON_2_VOCABULARY: Exercise[] = [
  {
    id: 'a2-u30-l2-v1',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Module 3 Review',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_MC,
      questions: [
        {
          question: '"[[Plan|Plan]]" [[means|significa]] ____.',
          options: ['[[something|algo]] [[you|tú]] [[intend|pretendes]] [[to|a]] [[do|hacer]] [[in|en]] [[the|el]] [[future|futuro]]', '[[something|algo]] [[you|tú]] [[did|hiciste]] [[yesterday|ayer]]', '[[something|algo]] [[you|tú]] [[are doing|estás haciendo]] [[now|ahora]]'],
          correctAnswer: 0,
          explanation: '[[Plan|Plan]] = [[intention|intención]] [[for|para]] [[the|el]] [[future|futuro]].',
        },
      ],
    },
    topicName: 'Vocabulary',
  },
  {
    id: 'a2-u30-l2-v2',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Module 3 Review',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_MC,
      questions: [
        {
          question: '"[[Obligation|Obligación]]" [[means|significa]] ____.',
          options: ['[[something|algo]] [[you|tú]] [[must|debes]] [[do|hacer]]', '[[something|algo]] [[optional|opcional]]', '[[something|algo]] [[you|tú]] [[can|puedes]] [[choose|elegir]]'],
          correctAnswer: 0,
          explanation: '[[Obligation|Obligación]] = [[have to|tener que]] [[do|hacer]] [[something|algo]].',
        },
      ],
    },
    topicName: 'Vocabulary',
  },
  {
    id: 'a2-u30-l2-v3',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Module 3 Review',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_MC,
      questions: [
        {
          question: '"[[Condition|Condición]]" [[in|en]] [[conditionals|condicionales]] [[means|significa]] ____.',
          options: ['[[something|algo]] [[that|que]] [[must|debe]] [[happen|ocurrir]] [[first|primero]] [[for|para]] [[the|el]] [[result|resultado]]', '[[the|el]] [[result|resultado]]', '[[the|el]] [[past|pasado]]'],
          correctAnswer: 0,
          explanation: '[[Condition|Condición]] = [[if|si]] [[clause|oración]]: [[what|qué]] [[must|debe]] [[happen|ocurrir]] [[first|primero]].',
        },
      ],
    },
    topicName: 'Vocabulary',
  },
  {
    id: 'a2-u30-l2-v4',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Module 3 Review',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_MC,
      questions: [
        {
          question: '"[[Polite|Educado]]" [[request|petición]] [[uses|usa]] ____.',
          options: ['[[Could you...?|¿Podrías...?]]', '[[Do it!|¡Hazlo!]]', '[[Give me|Dame]]'],
          correctAnswer: 0,
          explanation: '[[Could you|¿Podrías]] = [[polite|educada]] [[request|petición]].',
        },
      ],
    },
    topicName: 'Vocabulary',
  },
  {
    id: 'a2-u30-l2-v5',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Module 3 Review',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_MC,
      questions: [
        {
          question: '"[[Prediction|Predicción]]" [[means|significa]] ____.',
          options: ['[[saying|decir]] [[what|qué]] [[will|va]] [[happen|a ocurrir]] [[in|en]] [[the|el]] [[future|futuro]]', '[[saying|decir]] [[what|qué]] [[happened|ocurrió]] [[in|en]] [[the|el]] [[past|pasado]]', '[[asking|preguntar]] [[a|una]] [[question|pregunta]]'],
          correctAnswer: 0,
          explanation: '[[Prediction|Predicción]] = [[going to|voy a]] [[or|o]] [[will|will]] [[for|para]] [[future|futuro]].',
        },
      ],
    },
    topicName: 'Vocabulary',
  },
  {
    id: 'a2-u30-l2-v6',
    type: 'matching',
    level: 'A2',
    topic: 'Module 3 Review',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_MATCH,
      pairs: [
        { id: 'p1', left: '[[Going to|Voy a]]', right: 'Voy a (plan)' },
        { id: 'p2', left: '[[Will|Will]]', right: 'Will (predicción/promesa)' },
        { id: 'p3', left: '[[Have to|Tener que]]', right: 'Tener que (obligación)' },
        { id: 'p4', left: '[[Could|Podía/Podría]]', right: 'Podía/Podría' },
      ],
    },
    topicName: 'Vocabulary',
  },
  {
    id: 'a2-u30-l2-v7',
    type: 'matching',
    level: 'A2',
    topic: 'Module 3 Review',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_MATCH,
      pairs: [
        { id: 'p1', left: '[[First conditional|Primer condicional]]', right: 'Si + presente, will' },
        { id: 'p2', left: '[[Zero conditional|Condicional cero]]', right: 'Si + presente, presente' },
        { id: 'p3', left: '[[Plan|Plan]]', right: 'Plan' },
        { id: 'p4', left: '[[Obligation|Obligación]]', right: 'Obligación' },
      ],
    },
    topicName: 'Vocabulary',
  },
  {
    id: 'a2-u30-l2-v8',
    type: 'fill-blank',
    level: 'A2',
    topic: 'Module 3 Review',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_FILL,
      questions: [
        {
          question: '[[I|Yo]] ____ ____ [[work|trabajar]] [[tomorrow|mañana]]. [[I|Yo]] [[have|tengo]] [[a|una]] [[meeting|reunión]].',
          options: ['[[have to|tengo que]]', '[[could|podía]]', '[[will|podré]]'],
          correctAnswer: 'have to',
          explanation: '[[Obligation|Obligación]] → [[have to|tengo que]].',
        },
      ],
    },
    topicName: 'Vocabulary',
  },
  {
    id: 'a2-u30-l2-v9',
    type: 'fill-blank',
    level: 'A2',
    topic: 'Module 3 Review',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_FILL,
      questions: [
        {
          question: '[[If|Si]] [[it|va]] ____ [[rains|llueve]], [[I|yo]] [[will take|cogeré]] [[an|un]] [[umbrella|paraguas]].',
          options: ['[[rains|llueve]]', '[[will rain|lloverá]]', '[[rained|llovió]]'],
          correctAnswer: 'rains',
          explanation: '[[First conditional|Primer condicional]]: [[If|Si]] + [[Present Simple|presente simple]].',
        },
      ],
    },
    topicName: 'Vocabulary',
  },
  {
    id: 'a2-u30-l2-v10',
    type: 'fill-blank',
    level: 'A2',
    topic: 'Module 3 Review',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_FILL,
      questions: [
        {
          question: '[[Could you|Podrías]] ____ [[me|me]] [[the|el]] [[salt|sal]], [[please|por favor]]?',
          options: ['[[pass|pasar]]', '[[help|ayudar]]', '[[open|abrir]]'],
          correctAnswer: 'pass',
          explanation: '[[Pass the salt|Pasar la sal]] = [[polite|educada]] [[request|petición]].',
        },
      ],
    },
    topicName: 'Vocabulary',
  },
  {
    id: 'a2-u30-l2-v11',
    type: 'fill-blank',
    level: 'A2',
    topic: 'Module 3 Review',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_FILL,
      questions: [
        {
          question: '[[I|Yo]] ____ ____ [[going to|a]] [[stay|quedarme]] [[at|en]] [[home|casa]] [[tonight|esta noche]].',
          options: ['[[am|estoy]]', '[[is|está]]', '[[are|están]]'],
          correctAnswer: 'am',
          explanation: '[[Plan|Plan]] → [[I|Yo]] + [[am going to|voy a]].',
        },
      ],
    },
    topicName: 'Vocabulary',
  },
  {
    id: 'a2-u30-l2-v12',
    type: 'fill-blank',
    level: 'A2',
    topic: 'Module 3 Review',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_FILL,
      questions: [
        {
          question: '[[When|Cuando]] [[I|yo]] [[was|era]] [[young|joven]], [[I|yo]] ____ ____ [[swim|nadar]] [[very well|muy bien]].',
          options: ['[[could|podía]]', '[[can|puedo]]', '[[will|podré]]'],
          correctAnswer: 'could',
          explanation: '[[Past ability|Habilidad pasada]] → [[could|podía]].',
        },
      ],
    },
    topicName: 'Vocabulary',
  },
  {
    id: 'a2-u30-l2-v13',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Module 3 Review',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_MC,
      questions: [
        {
          question: '"[[Don\'t have to|No tener que]]" [[means|significa]] ____.',
          options: ['[[no obligation|sin obligación]]', '[[prohibition|prohibición]]', '[[must|debe]]'],
          correctAnswer: 0,
          explanation: '[[Don\'t have to|No tener que]] = [[optional|opcional]], [[not necessary|no necesario]].',
        },
      ],
    },
    topicName: 'Vocabulary',
  },
  {
    id: 'a2-u30-l2-v14',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Module 3 Review',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_MC,
      questions: [
        {
          question: '[[Which|Cuál]] [[sentence|frase]] [[is|es]] [[correct|correcta]] [[for|para]] [[First|Primer]] [[conditional|condicional]]?',
          options: [
            '[[If|Si]] [[it|va]] [[rains|llueve]], [[I|yo]] [[will stay|me quedaré]] [[at|en]] [[home|casa]].',
            '[[If|Si]] [[it|va]] [[rained|lloviera]], [[I|yo]] [[would stay|me quedaría]] [[at|en]] [[home|casa]].',
            '[[If|Si]] [[it|va]] [[rains|llueve]], [[I|yo]] [[stay|me quedo]] [[at|en]] [[home|casa]].',
          ],
          correctAnswer: 0,
          explanation: '[[First conditional|Primer condicional]]: [[If|Si]] + [[present|presente]], [[will|will]] + [[infinitive|infinitivo]].',
        },
      ],
    },
    topicName: 'Vocabulary',
  },
  {
    id: 'a2-u30-l2-v15',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Module 3 Review',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_MC,
      questions: [
        {
          question: '[[Which|Cuál]] [[sentence|frase]] [[is|es]] [[correct|correcta]] [[for|para]] [[Zero|Condicional]] [[conditional|cero]]?',
          options: [
            '[[If|Si]] [[you|tú]] [[heat|calientas]] [[water|agua]], [[it|ella]] [[boils|hierve]].',
            '[[If|Si]] [[you|tú]] [[heat|calientas]] [[water|agua]], [[it|ella]] [[will boil|hervirá]].',
            '[[If|Si]] [[you|tú]] [[heated|calentaste]] [[water|agua]], [[it|ella]] [[boiled|hirvió]].',
          ],
          correctAnswer: 0,
          explanation: '[[Zero conditional|Condicional cero]]: [[general|hecho]] [[fact|general]] → [[present|presente]] + [[present|presente]].',
        },
      ],
    },
    topicName: 'Vocabulary',
  },
];
