/**
 * Unidad 25 — Lección 2: Vocabulario (planes, predicciones, futuro)
 * 15 ejercicios
 */

import { Exercise } from '@/lib/exercise-generator';

const LESSON_TITLE = '[[Vocabulary|Vocabulario]]: [[Plans|Planes]], [[Predictions|Predicciones]] [[&|y]] [[Future|Futuro]]';
const INSTRUCTIONS_MC = 'Elige la palabra correcta para cada definición o frase.';
const INSTRUCTIONS_MATCH = 'Relaciona cada palabra en inglés con su traducción.';
const INSTRUCTIONS_FILL = 'Completa la frase con la palabra correcta del recuadro.';

export const UNIT_25_LESSON_2_VOCABULARY: Exercise[] = [
  {
    id: 'a2-u25-l2-v1',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Future Contrast',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_MC,
      questions: [
        {
          question: '"[[Prediction|Predicción]]" [[means|significa]] ____.',
          options: ['[[something|algo]] [[you|tú]] [[think|piensas]] [[will|will]] [[happen|pasar]] [[in|en]] [[the|el]] [[future|futuro]]', '[[a|un]] [[past|pasado]] [[event|evento]]', '[[a|un]] [[fixed|fijado]] [[appointment|cita]]'],
          correctAnswer: 0,
          explanation: '[[Prediction|Predicción]] = [[guess|suposición]] [[about|sobre]] [[future|futuro]].',
        },
      ],
    },
    topicName: 'Vocabulary',
  },
  {
    id: 'a2-u25-l2-v2',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Future Contrast',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_MC,
      questions: [
        {
          question: '"[[Spontaneous|Espontáneo]]" [[means|significa]] ____.',
          options: ['[[decided|decidido]] [[at|en]] [[the|el]] [[moment|momento]] [[without|sin]] [[planning|planificar]]', '[[planned|planificado]] [[before|antes]]', '[[fixed|fijado]] [[in|en]] [[diary|agenda]]'],
          correctAnswer: 0,
          explanation: '[[Spontaneous|Espontáneo]] = [[instant|instantáneo]], [[not|no]] [[planned|planificado]].',
        },
      ],
    },
    topicName: 'Vocabulary',
  },
  {
    id: 'a2-u25-l2-v3',
    type: 'matching',
    level: 'A2',
    topic: 'Future Contrast',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_MATCH,
      pairs: [
        { id: 'p1', left: '[[Prediction|Predicción]]', right: 'Predicción' },
        { id: 'p2', left: '[[Evidence|Evidencia]]', right: 'Evidencia' },
        { id: 'p3', left: '[[Arrangement|Compromiso]]', right: 'Compromiso' },
        { id: 'p4', left: '[[Offer|Oferta]]', right: 'Oferta' },
      ],
    },
    topicName: 'Vocabulary',
  },
  {
    id: 'a2-u25-l2-v4',
    type: 'matching',
    level: 'A2',
    topic: 'Future Contrast',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_MATCH,
      pairs: [
        { id: 'p1', left: '[[Soon|Pronto]]', right: 'Pronto' },
        { id: 'p2', left: '[[Next month|El próximo mes]]', right: 'El próximo mes' },
        { id: 'p3', left: '[[Next year|El próximo año]]', right: 'El próximo año' },
        { id: 'p4', left: '[[Next weekend|El próximo fin de semana]]', right: 'El próximo fin de semana' },
      ],
    },
    topicName: 'Vocabulary',
  },
  {
    id: 'a2-u25-l2-v5',
    type: 'fill-blank',
    level: 'A2',
    topic: 'Future Contrast',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_FILL,
      questions: [
        {
          question: '[[Look|Mira]]! [[The|El]] [[sky|cielo]] [[is|está]] [[dark|oscuro]]. [[It|Ello]] ____ ____ ____ [[rain|llover]] [[soon|pronto]].',
          options: ['[[is going to|va a]]', '[[will|will]]', '[[is raining|está lloviendo]]'],
          correctAnswer: 'is going to',
          explanation: '[[Evidence|Evidencia]] [[(dark sky|(cielo oscuro)]] → [[going to|ir a]].',
        },
      ],
    },
    topicName: 'Vocabulary',
  },
  {
    id: 'a2-u25-l2-v6',
    type: 'fill-blank',
    level: 'A2',
    topic: 'Future Contrast',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_FILL,
      questions: [
        {
          question: '[[I|Yo]] ____ [[help|ayudar]] [[you|te]] [[with|con]] [[your|tu]] [[bags|bolsas]]. [[Let|Deja]] [[me|me]] [[do|hacer]] [[it|eso]].',
          options: ['[[will|will]]', '[[am going to|voy a]]', '[[am helping|estoy ayudando]]'],
          correctAnswer: 'will',
          explanation: '[[Spontaneous|Espontánea]] [[offer|oferta]] → [[will|will]].',
        },
      ],
    },
    topicName: 'Vocabulary',
  },
  {
    id: 'a2-u25-l2-v7',
    type: 'fill-blank',
    level: 'A2',
    topic: 'Future Contrast',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_FILL,
      questions: [
        {
          question: '[[We|Nosotros]] ____ ____ ____ [[fly|volar]] [[to|a]] [[Spain|España]] [[in|en]] [[August|agosto]]. [[We|Nosotros]] [[have|tenemos]] [[the|los]] [[tickets|billetes]].',
          options: ['[[are going to|vamos a]]', '[[will|will]]', '[[are flying|estamos volando]]'],
          correctAnswer: 'are going to',
          explanation: '[[Plan|Plan]] [[with|con]] [[evidence|evidencia]] [[(tickets|(billetes)]] → [[going to|ir a]].',
        },
      ],
    },
    topicName: 'Vocabulary',
  },
  {
    id: 'a2-u25-l2-v8',
    type: 'fill-blank',
    level: 'A2',
    topic: 'Future Contrast',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_FILL,
      questions: [
        {
          question: '[[She|Ella]] ____ ____ [[the|el]] [[doctor|médico]] [[at|a]] [[10|diez]] [[tomorrow|mañana]]. [[It\'s|Está]] [[in|en]] [[her|su]] [[diary|agenda]].',
          options: ['[[is meeting|queda]]', '[[will meet|quedará]]', '[[is going to meet|va a quedar]]'],
          correctAnswer: 'is meeting',
          explanation: '[[Fixed|Fijada]] [[appointment|cita]] → [[Present Continuous|Presente Continuo]].',
        },
      ],
    },
    topicName: 'Vocabulary',
  },
  {
    id: 'a2-u25-l2-v9',
    type: 'fill-blank',
    level: 'A2',
    topic: 'Future Contrast',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_FILL,
      questions: [
        {
          question: '[[I|Yo]] ____ ____ ____ [[study|estudiar]] [[hard|duro]] [[for|para]] [[the|el]] [[exam|examen]]. [[I|Yo]] [[decided|decidí]] [[last|la pasada]] [[week|semana]].',
          options: ['[[am going to|voy a]]', '[[will|will]]', '[[am studying|estoy estudiando]]'],
          correctAnswer: 'am going to',
          explanation: '[[Plan|Plan]] [[decided|decidido]] [[before|antes]] → [[going to|ir a]].',
        },
      ],
    },
    topicName: 'Vocabulary',
  },
  {
    id: 'a2-u25-l2-v10',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Future Contrast',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_MC,
      questions: [
        {
          question: '"[[Evidence|Evidencia]]" [[means|significa]] ____.',
          options: ['[[something|algo]] [[you|tú]] [[can|puedes]] [[see|ver]] [[or|o]] [[know|saber]] [[that|que]] [[supports|apoya]] [[a|una]] [[prediction|predicción]]', '[[a|un]] [[guess|suposición]]', '[[a|un]] [[spontaneous|espontáneo]] [[decision|decisión]]'],
          correctAnswer: 0,
          explanation: '[[Evidence|Evidencia]] = [[proof|prueba]], [[sign|señal]] [[that|que]] [[something|algo]] [[will|will]] [[happen|pasar]].',
        },
      ],
    },
    topicName: 'Vocabulary',
  },
  {
    id: 'a2-u25-l2-v11',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Future Contrast',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_MC,
      questions: [
        {
          question: '[[What|Qué]] [[word|palabra]] [[completes|complete]] [[the|la]] [[sentence|frase]]? "[[I|Yo]] ____ ____ ____ [[visit|visitar]] [[my|mi]] [[parents|padres]] [[next week|la próxima semana]]."',
          options: ['[[am going to|voy a]]', '[[will|will]]', '[[am visiting|estoy visitando]]'],
          correctAnswer: 0,
          explanation: '[[Plan|Plan]] [[decided|decidido]] [[before|antes]] → [[am going to|voy a]].',
        },
      ],
    },
    topicName: 'Vocabulary',
  },
  {
    id: 'a2-u25-l2-v12',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Future Contrast',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_MC,
      questions: [
        {
          question: '"[[Fixed arrangement|Compromiso fijado]]" [[means|significa]] ____.',
          options: ['[[a|un]] [[plan|plan]] [[already|ya]] [[confirmed|confirmado]] [[with|con]] [[time|hora]] [[and|y]] [[place|lugar]]', '[[a|un]] [[maybe|quizás]] [[plan|plan]]', '[[a|una]] [[spontaneous|espontánea]] [[decision|decisión]]'],
          correctAnswer: 0,
          explanation: '[[Fixed|Fijado]] = [[confirmed|confirmado]], [[in|en]] [[diary|agenda]].',
        },
      ],
    },
    topicName: 'Vocabulary',
  },
  {
    id: 'a2-u25-l2-v13',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Future Contrast',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_MC,
      questions: [
        {
          question: '"[[Ticket|Billete]]" [[in|en]] [[this|este]] [[context|contexto]] [[means|significa]] ____.',
          options: ['[[proof|prueba]] [[of|de]] [[a|un]] [[planned|planificado]] [[trip|viaje]]', '[[a|un]] [[piece|pedazo]] [[of|de]] [[paper|papel]]', '[[a|un]] [[gift|regalo]]'],
          correctAnswer: 0,
          explanation: '[[Ticket|Billete]] = [[evidence|evidencia]] [[of|de]] [[plan|plan]] [[for|para]] [[travel|viaje]].',
        },
      ],
    },
    topicName: 'Vocabulary',
  },
  {
    id: 'a2-u25-l2-v14',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Future Contrast',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_MC,
      questions: [
        {
          question: '[[What|Qué]] [[word|palabra]] [[completes|complete]] [[the|la]] [[sentence|frase]]? "[[They|Ellos]] ____ ____ [[dinner|cena]] [[with|con]] [[us|nosotros]] [[on|el]] [[Friday|viernes]]."',
          options: ['[[are having|tienen]]', '[[will have|tendrán]]', '[[are going to have|van a tener]]'],
          correctAnswer: 0,
          explanation: '[[Fixed|Fijado]] [[arrangement|compromiso]] → [[Present Continuous|Presente Continuo]]: [[are having|tienen]].',
        },
      ],
    },
    topicName: 'Vocabulary',
  },
  {
    id: 'a2-u25-l2-v15',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Future Contrast',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_MC,
      questions: [
        {
          question: '"[[Instant decision|Decisión instantánea]]" [[means|significa]] ____.',
          options: ['[[deciding|decidir]] [[at|en]] [[the|el]] [[moment|momento]] [[of|de]] [[speaking|hablar]] [[without|sin]] [[planning|planificar]]', '[[a|un]] [[planned|planificado]] [[decision|decisión]]', '[[a|una]] [[fixed|fijada]] [[appointment|cita]]'],
          correctAnswer: 0,
          explanation: '[[Instant|Instantánea]] = [[spontaneous|espontánea]] → [[use|usar]] [[will|will]].',
        },
      ],
    },
    topicName: 'Vocabulary',
  },
];
