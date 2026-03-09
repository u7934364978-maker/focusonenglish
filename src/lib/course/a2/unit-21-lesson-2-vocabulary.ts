/**
 * Unidad 21 — Lección 2: Vocabulario (Planes de viaje, vacaciones, trabajo, estudios)
 * 15 ejercicios
 */

import { Exercise } from '@/lib/exercise-generator';

const LESSON_TITLE = '[[Vocabulary|Vocabulario]]: [[Plans|Planes]] [[&|y]] [[Intentions|Intenciones]]';
const INSTRUCTIONS_MC = 'Elige la palabra correcta para cada definición o frase.';
const INSTRUCTIONS_MATCH = 'Relaciona cada palabra en inglés con su traducción.';
const INSTRUCTIONS_FILL = 'Completa la frase con la palabra correcta del recuadro.';

export const UNIT_21_LESSON_2_VOCABULARY: Exercise[] = [
  {
    id: 'a2-u21-l2-v1',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Going to',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_MC,
      questions: [
        {
          question: '"[[Plan|Plan]]" [[means|significa]] ____.',
          options: ['[[something|algo]] [[you|tú]] [[intend|pretendes]] [[to|a]] [[do|hacer]]', '[[something|algo]] [[you|tú]] [[did|hiciste]] [[yesterday|ayer]]', '[[something|algo]] [[you|tú]] [[are doing|estás haciendo]] [[now|ahora]]'],
          correctAnswer: 0,
          explanation: '[[Plan|Plan]] = [[intention|intención]] [[to|de]] [[do|hacer]] [[something|algo]] [[in|en]] [[the|el]] [[future|futuro]].',
        },
      ],
    },
    topicName: 'Vocabulary',
  },
  {
    id: 'a2-u21-l2-v2',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Going to',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_MC,
      questions: [
        {
          question: '"[[Holiday|Vacaciones]]" [[in|en]] [[British|británico]] [[English|inglés]] [[means|significa]] ____.',
          options: ['[[vacation|vacaciones]]', '[[a|un]] [[day|día]] [[off|libre]]', '[[work|trabajo]]'],
          correctAnswer: 0,
          explanation: '[[Holiday|Vacaciones]] = [[vacation|vacaciones]] ([[US|EE.UU.]]).',
        },
      ],
    },
    topicName: 'Vocabulary',
  },
  {
    id: 'a2-u21-l2-v3',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Going to',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_MC,
      questions: [
        {
          question: '[[What|Qué]] [[word|palabra]] [[completes|complete]] [[the|la]] [[sentence|frase]]? "[[I|Yo]] [[am going to|voy a]] ____ [[to|a]] [[university|universidad]] [[next year|el próximo año]]."',
          options: ['[[go|ir]]', '[[went|fui]]', '[[going|yendo]]'],
          correctAnswer: 0,
          explanation: '[[After|Después]] [[of|de]] "[[going to|voy a]]" [[we|nosotros]] [[use|usamos]] [[infinitive|infinitivo]]: [[go|ir]].',
        },
      ],
    },
    topicName: 'Vocabulary',
  },
  {
    id: 'a2-u21-l2-v4',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Going to',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_MC,
      questions: [
        {
          question: '"[[Study|Estudiar]]" [[means|significa]] ____.',
          options: ['[[learn|aprender]] [[by|mediante]] [[reading|leyendo]] [[or|o]] [[attending|asistiendo]] [[classes|clases]]', '[[teach|enseñar]]', '[[work|trabajar]]'],
          correctAnswer: 0,
          explanation: '[[Study|Estudiar]] = [[to learn|aprender]] [[at|en]] [[school|escuela]] [[or|o]] [[university|universidad]].',
        },
      ],
    },
    topicName: 'Vocabulary',
  },
  {
    id: 'a2-u21-l2-v5',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Going to',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_MC,
      questions: [
        {
          question: '[[What|Qué]] [[word|palabra]] [[completes|complete]] [[the|la]] [[sentence|frase]]? "[[She|Ella]] [[is going to|va a]] ____ [[a|un]] [[new|nuevo]] [[job|trabajo]]."',
          options: ['[[look for|buscar]]', '[[looked for|buscó]]', '[[looking for|buscando]]'],
          correctAnswer: 0,
          explanation: '[[Going to|Voy a]] + [[infinitive|infinitivo]]: [[look for|buscar]].',
        },
      ],
    },
    topicName: 'Vocabulary',
  },
  {
    id: 'a2-u21-l2-v6',
    type: 'matching',
    level: 'A2',
    topic: 'Going to',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_MATCH,
      pairs: [
        { id: 'p1', left: '[[Plan|Plan]]', right: 'Plan' },
        { id: 'p2', left: '[[Intention|Intención]]', right: 'Intención' },
        { id: 'p3', left: '[[Holiday|Vacaciones]]', right: 'Vacaciones' },
        { id: 'p4', left: '[[Travel|Viajar]]', right: 'Viajar' },
      ],
    },
    topicName: 'Vocabulary',
  },
  {
    id: 'a2-u21-l2-v7',
    type: 'matching',
    level: 'A2',
    topic: 'Going to',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_MATCH,
      pairs: [
        { id: 'p1', left: '[[Study|Estudiar]]', right: 'Estudiar' },
        { id: 'p2', left: '[[Work|Trabajar]]', right: 'Trabajar' },
        { id: 'p3', left: '[[Visit|Visitar]]', right: 'Visitar' },
        { id: 'p4', left: '[[Move|Mudarse]]', right: 'Mudarse' },
      ],
    },
    topicName: 'Vocabulary',
  },
  {
    id: 'a2-u21-l2-v8',
    type: 'fill-blank',
    level: 'A2',
    topic: 'Going to',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_FILL,
      questions: [
        {
          question: '[[I|Yo]] [[am going to|voy a]] ____ [[to|a]] [[the|el]] [[beach|playa]] [[this|este]] [[summer|verano]].',
          options: ['[[travel|viajar]]', '[[go|ir]]', '[[visit|visitar]]'],
          correctAnswer: 'go',
          explanation: '[[Go to the beach|Ir a la playa]] = [[common|común]] [[expression|expresión]] [[for|para]] [[holiday|vacaciones]].',
        },
      ],
    },
    topicName: 'Vocabulary',
  },
  {
    id: 'a2-u21-l2-v9',
    type: 'fill-blank',
    level: 'A2',
    topic: 'Going to',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_FILL,
      questions: [
        {
          question: '[[She|Ella]] [[is going to|va a]] ____ [[English|inglés]] [[at|en]] [[university|universidad]].',
          options: ['[[study|estudiar]]', '[[work|trabajar]]', '[[travel|viajar]]'],
          correctAnswer: 'study',
          explanation: '[[Study|Estudiar]] = [[learn|aprender]] [[at|en]] [[school|escuela]] [[or|o]] [[university|universidad]].',
        },
      ],
    },
    topicName: 'Vocabulary',
  },
  {
    id: 'a2-u21-l2-v10',
    type: 'fill-blank',
    level: 'A2',
    topic: 'Going to',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_FILL,
      questions: [
        {
          question: '[[They|Ellos]] [[are going to|van a]] ____ [[their|sus]] [[grandparents|abuelos]] [[next|el próximo]] [[month|mes]].',
          options: ['[[visit|visitar]]', '[[study|estudiar]]', '[[work|trabajar]]'],
          correctAnswer: 'visit',
          explanation: '[[Visit|Visitar]] = [[go to see|ir a ver]] [[someone|alguien]].',
        },
      ],
    },
    topicName: 'Vocabulary',
  },
  {
    id: 'a2-u21-l2-v11',
    type: 'fill-blank',
    level: 'A2',
    topic: 'Going to',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_FILL,
      questions: [
        {
          question: '[[We|Nosotros]] [[are going to|vamos a]] ____ [[a|una]] [[new|nueva]] [[flat|piso]] [[next year|el próximo año]].',
          options: ['[[move|mudarnos]]', '[[travel|viajar]]', '[[study|estudiar]]'],
          correctAnswer: 'move',
          explanation: '[[Move|Mudarse]] = [[change|cambiar]] [[home|casa]].',
        },
      ],
    },
    topicName: 'Vocabulary',
  },
  {
    id: 'a2-u21-l2-v12',
    type: 'fill-blank',
    level: 'A2',
    topic: 'Going to',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_FILL,
      questions: [
        {
          question: '[[He|Él]] [[is going to|va a]] ____ [[a|un]] [[new|nuevo]] [[car|coche]] [[soon|pronto]].',
          options: ['[[buy|comprar]]', '[[visit|visitar]]', '[[study|estudiar]]'],
          correctAnswer: 'buy',
          explanation: '[[Buy|Comprar]] = [[get|conseguir]] [[something|algo]] [[by|pagando]] [[money|dinero]].',
        },
      ],
    },
    topicName: 'Vocabulary',
  },
  {
    id: 'a2-u21-l2-v13',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Going to',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_MC,
      questions: [
        {
          question: '"[[Next week|La próxima semana]]" [[refers to|se refiere a]] ____.',
          options: ['[[the|la]] [[future|futuro]]', '[[the|el]] [[past|pasado]]', '[[now|ahora]]'],
          correctAnswer: 0,
          explanation: '[[Next week|La próxima semana]] = [[future|futuro]] [[time|tiempo]] [[marker|marcador]].',
        },
      ],
    },
    topicName: 'Vocabulary',
  },
  {
    id: 'a2-u21-l2-v14',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Going to',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_MC,
      questions: [
        {
          question: '[[What|Qué]] [[word|palabra]] [[completes|complete]] [[the|la]] [[sentence|frase]]? "[[I|Yo]] [[am going to|voy a]] ____ [[for|para]] [[a|un]] [[new|nuevo]] [[job|trabajo]]."',
          options: ['[[apply|solicitar]]', '[[applied|solicitó]]', '[[applying|solicitando]]'],
          correctAnswer: 0,
          explanation: '[[Apply for|Solicitar]] = [[ask|pedir]] [[for|para]] [[a|un]] [[job|trabajo]].',
        },
      ],
    },
    topicName: 'Vocabulary',
  },
  {
    id: 'a2-u21-l2-v15',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Going to',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_MC,
      questions: [
        {
          question: '"[[This weekend|Este fin de semana]]" [[means|significa]] ____.',
          options: ['[[Saturday|sábado]] [[and|y]] [[Sunday|domingo]] [[of|de]] [[this|esta]] [[week|semana]]', '[[next|próximo]] [[Saturday|sábado]]', '[[last|pasado]] [[weekend|fin de semana]]'],
          correctAnswer: 0,
          explanation: '[[This weekend|Este fin de semana]] = [[the|el]] [[coming|próximo]] [[Saturday|sábado]] [[and|y]] [[Sunday|domingo]].',
        },
      ],
    },
    topicName: 'Vocabulary',
  },
];
