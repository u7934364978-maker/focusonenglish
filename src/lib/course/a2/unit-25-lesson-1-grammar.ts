/**
 * Unidad 25 — Lección 1: Gramática (Future Contrast: going to vs will vs Present Continuous)
 * 15 ejercicios: cuándo usar cada forma
 */

import { Exercise } from '@/lib/exercise-generator';

const LESSON_TITLE = '[[Future Contrast|Contraste de Futuro]]: [[going to|ir a]] vs [[will|will]] vs [[Present Continuous|Presente Continuo]]';
const INSTRUCTIONS_FILL = 'Elige la forma correcta para expresar el futuro.';
const INSTRUCTIONS_MULTIPLE = 'Elige la frase o la forma correcta.';
const INSTRUCTIONS_ORDER = 'Ordena las palabras para formar una oración correcta.';
const INSTRUCTIONS_TF = 'Indica si la afirmación es verdadera o falsa.';

export const UNIT_25_LESSON_1_GRAMMAR: Exercise[] = [
  {
    id: 'a2-u25-l1-g1',
    type: 'fill-blank',
    level: 'A2',
    topic: 'Future Contrast',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_FILL,
      questions: [
        {
          question: '[[I|Yo]] ____ [[stay|quedarme]] [[at|en]] [[home|casa]] [[if|si]] [[it|ello]] [[rains|llueve]] [[tomorrow|mañana]].',
          options: ['[[will|will]]', '[[am going to|voy a]]', '[[am staying|me quedo]]'],
          correctAnswer: 'will',
          explanation: '[[Will|Will]] [[for|para]] [[spontaneous|espontáneas]] [[decisions|decisiones]] [[or|o]] [[predictions|predicciones]] [[based on|basadas en]] [[condition|condición]].',
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a2-u25-l1-g2',
    type: 'fill-blank',
    level: 'A2',
    topic: 'Future Contrast',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_FILL,
      questions: [
        {
          question: '[[She|Ella]] ____ [[fly|volar]] [[to|a]] [[London|Londres]] [[next|el próximo]] [[month|mes]]. [[She|Ella]] [[already|ya]] [[has|tiene]] [[the|el]] [[ticket|billete]].',
          options: ['[[will|will]]', '[[is going to|va a]]', '[[is flying|vuela]]'],
          correctAnswer: 'is going to',
          explanation: '[[Going to|Ir a]] [[for|para]] [[plans|planes]] [[already|ya]] [[decided|decididos]] [[with|con]] [[evidence|evidencia]].',
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a2-u25-l1-g3',
    type: 'fill-blank',
    level: 'A2',
    topic: 'Future Contrast',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_FILL,
      questions: [
        {
          question: '[[We|Nosotros]] ____ [[meeting|quedando]] [[John|John]] [[at|a]] [[3|tres]] [[o\'clock|en punto]] [[tomorrow|mañana]]. [[It\'s|Está]] [[fixed|fijado]].',
          options: ['[[will|will]]', '[[are going to|vamos a]]', '[[are|estamos]]'],
          correctAnswer: 'are',
          explanation: '[[Present Continuous|Presente Continuo]] [[for|para]] [[fixed|fijados]] [[arrangements|compromisos]] [[and|y]] [[appointments|citas]].',
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a2-u25-l1-g4',
    type: 'fill-blank',
    level: 'A2',
    topic: 'Future Contrast',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_FILL,
      questions: [
        {
          question: '[[Look|Mira]]! [[The|El]] [[sky|cielo]] [[is|está]] [[dark|oscuro]]. [[It|Ello]] ____ [[rain|llover]] [[soon|pronto]].',
          options: ['[[will|will]]', '[[is going to|va a]]', '[[is raining|está lloviendo]]'],
          correctAnswer: 'is going to',
          explanation: '[[Going to|Ir a]] [[for|para]] [[predictions|predicciones]] [[based on|basadas en]] [[present|presente]] [[evidence|evidencia]].',
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a2-u25-l1-g5',
    type: 'fill-blank',
    level: 'A2',
    topic: 'Future Contrast',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_FILL,
      questions: [
        {
          question: '[[I|Yo]] ____ [[help|ayudar]] [[you|te]] [[with|con]] [[that|eso]]. [[Don\'t|No]] [[worry|te preocupes]].',
          options: ['[[will|will]]', '[[am going to|voy a]]', '[[am helping|estoy ayudando]]'],
          correctAnswer: 'will',
          explanation: '[[Will|Will]] [[for|para]] [[instant|instantáneas]] [[decisions|decisiones]] [[or|o]] [[offers|ofertas]] [[made|hechas]] [[at|en]] [[the|el]] [[moment|momento]] [[of|de]] [[speaking|hablar]].',
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a2-u25-l1-g6',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Future Contrast',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_MULTIPLE,
      questions: [
        {
          question: '[[When|Cuándo]] [[do|usamos]] [[we|nosotros]] [[use|usamos]] [[going to|ir a]]?',
          options: [
            '[[For|Para]] [[plans|planes]] [[already|ya]] [[decided|decididos]] [[or|o]] [[predictions|predicciones]] [[with|con]] [[evidence|evidencia]]',
            '[[For|Para]] [[fixed|fijadas]] [[appointments|citas]] [[only|solo]]',
            '[[For|Para]] [[spontaneous|espontáneas]] [[offers|ofertas]] [[only|solo]]',
          ],
          correctAnswer: 0,
          explanation: '[[Going to|Ir a]] = [[plans|planes]] [[decided|decididos]] [[or|o]] [[predictions|predicciones]] [[with|con]] [[evidence|evidencia]].',
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a2-u25-l1-g7',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Future Contrast',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_MULTIPLE,
      questions: [
        {
          question: '[[When|Cuándo]] [[do|usamos]] [[we|nosotros]] [[use|usamos]] [[will|will]]?',
          options: [
            '[[For|Para]] [[fixed|fijadas]] [[appointments|citas]] [[only|solo]]',
            '[[For|Para]] [[spontaneous|espontáneas]] [[decisions|decisiones]], [[offers|ofertas]], [[predictions|predicciones]] [[without|sin]] [[evidence|evidencia]]',
            '[[For|Para]] [[plans|planes]] [[with|con]] [[tickets|billetes]]',
          ],
          correctAnswer: 1,
          explanation: '[[Will|Will]] = [[spontaneous|espontáneo]], [[offers|ofertas]], [[predictions|predicciones]] [[without|sin]] [[evidence|evidencia]].',
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a2-u25-l1-g8',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Future Contrast',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_MULTIPLE,
      questions: [
        {
          question: '[[Which|Cuál]] [[sentence|frase]] [[uses|usa]] [[Present Continuous|Presente Continuo]] [[correctly|correctamente]] [[for|para]] [[future|futuro]]?',
          options: [
            '[[I\'m meeting|Quedo]] [[the|el]] [[doctor|médico]] [[at|a]] [[10|diez]] [[tomorrow|mañana]].',
            '[[I\'ll meet|Quedaré]] [[the|el]] [[doctor|médico]] [[at|a]] [[10|diez]] [[tomorrow|mañana]].',
            '[[I\'m going to meet|Voy a quedar]] [[the|el]] [[doctor|médico]] [[at|a]] [[10|diez]] [[tomorrow|mañana]].',
          ],
          correctAnswer: 0,
          explanation: '[[Fixed|Fijada]] [[appointment|cita]] → [[Present Continuous|Presente Continuo]]: [[I\'m meeting|Quedo]].',
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a2-u25-l1-g9',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Future Contrast',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_MULTIPLE,
      questions: [
        {
          question: '"[[I\'ll help you|Te ayudaré]]" [[is|es]] [[correct|correcto]] [[when|cuando]] ____.',
          options: [
            '[[you|tú]] [[decide|decides]] [[at|en]] [[the|el]] [[moment|momento]] [[of|de]] [[speaking|hablar]]',
            '[[you|tú]] [[planned|planificaste]] [[it|ello]] [[before|antes]]',
            '[[you|tú]] [[have|tienes]] [[a|una]] [[fixed|fijada]] [[appointment|cita]]',
          ],
          correctAnswer: 0,
          explanation: '[[Will|Will]] = [[instant|instantánea]] [[decision|decisión]] [[or|o]] [[offer|oferta]].',
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a2-u25-l1-g10',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Future Contrast',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_MULTIPLE,
      questions: [
        {
          question: '[[Complete|Completa]]: "[[She|Ella]] ____ ____ ____ [[study|estudiar]] [[medicine|medicina]] [[next year|el próximo año]]." [[(plan|(plan]] [[decided|decidido]] [[before|antes)]]',
          options: ['[[is going to|va a]]', '[[will|will]]', '[[is studying|está estudiando]]'],
          correctAnswer: 0,
          explanation: '[[Plan|Plan]] [[decided|decidido]] [[before|antes]] → [[going to|ir a]].',
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a2-u25-l1-g11',
    type: 'sentence-building',
    level: 'A2',
    topic: 'Future Contrast',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_ORDER,
      correctSentence: '[[If|Si]] [[it|ello]] [[rains|llueve]], [[I|yo]] [[will|will]] [[stay|quedarme]] [[at|en]] [[home|casa]].',
      words: ['[[If|Si]]', '[[it|ello]]', '[[rains|llueve]]', '[[I|yo]]', '[[will|will]]', '[[stay|quedarme]]', '[[at|en]]', '[[home|casa]].'],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a2-u25-l1-g12',
    type: 'sentence-building',
    level: 'A2',
    topic: 'Future Contrast',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_ORDER,
      correctSentence: '[[She|Ella]] [[is meeting|queda]] [[the|el]] [[dentist|dentista]] [[at|a]] [[3|tres]] [[o\'clock|en punto]] [[tomorrow|mañana]].',
      words: ['[[She|Ella]]', '[[is meeting|queda]]', '[[the|el]]', '[[dentist|dentista]]', '[[at|a]]', '[[3|tres]]', '[[o\'clock|en punto]]', '[[tomorrow|mañana]].'],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a2-u25-l1-g13',
    type: 'sentence-building',
    level: 'A2',
    topic: 'Future Contrast',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_ORDER,
      correctSentence: '[[I|Yo]] [[am going to|voy a]] [[visit|visitar]] [[my|mi]] [[parents|padres]] [[next|el próximo]] [[weekend|fin de semana]].',
      words: ['[[I|Yo]]', '[[am going to|voy a]]', '[[visit|visitar]]', '[[my|mi]]', '[[parents|padres]]', '[[next|el próximo]]', '[[weekend|fin de semana]].'],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a2-u25-l1-g14',
    type: 'true-false',
    level: 'A2',
    topic: 'Future Contrast',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_TF,
      questions: [
        {
          question: '[[Present Continuous|Presente Continuo]] [[is|es]] [[used|usado]] [[for|para]] [[fixed|fijados]] [[arrangements|compromisos]] [[like|como]] [[appointments|citas]] [[and|y]] [[meetings|reuniones]].',
          options: ['[[True|Verdadero]]', '[[False|Falso]]'],
          correctAnswer: 'True',
          explanation: '[[True|Verdadero]]. [[I\'m meeting John at 3|Quedo con John a las 3]] = [[fixed|fijado]] [[arrangement|compromiso]].',
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a2-u25-l1-g15',
    type: 'true-false',
    level: 'A2',
    topic: 'Future Contrast',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_TF,
      questions: [
        {
          question: '[[We|Nosotros]] [[use|usamos]] [[will|will]] [[for|para]] [[plans|planes]] [[that|que]] [[we|nosotros]] [[already|ya]] [[decided|decidimos]] [[with|con]] [[evidence|evidencia]] [[like|como]] [[tickets|billetes]].',
          options: ['[[True|Verdadero]]', '[[False|Falso]]'],
          correctAnswer: 'False',
          explanation: '[[False|Falso]]. [[Plans|Planes]] [[with|con]] [[evidence|evidencia]] → [[going to|ir a]] [[or|o]] [[Present Continuous|Presente Continuo]].',
        },
      ],
    },
    topicName: 'Grammar',
  },
];
