/**
 * Unidad 40 — Lección 1: Gramática (Module 4 Review)
 * 15 ejercicios: repaso mixto de going to, will, present continuous, hope to, would like to, dream of, when/as soon as, zero conditional
 */

import { Exercise } from '@/lib/exercise-generator';

const LESSON_TITLE = "[[Module 4 Review|Repaso Módulo 4]]: [[Grammar|Gramática]]";
const INSTRUCTIONS = 'Completa con la forma correcta o elige la opción correcta.';

export const UNIT_40_LESSON_1_GRAMMAR: Exercise[] = [
  {
    id: 'a2-u40-l1-g1',
    type: 'fill-blank',
    level: 'A2',
    topic: 'Module 4 Review',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS,
      questions: [
        {
          question: '[[I|Yo]] ____ ____ ____ [[travel|viajar]] [[to|a]] [[Japan|Japón]] [[next|el próximo]] [[year|año]].',
          options: ['[[am going to|voy a]]', '[[will|will]]', '[[go to|ir a]]'],
          correctAnswer: 'am going to',
          explanation: "[[Going to|Going to]] [[for|para]] [[plans|planes]] [[and|y]] [[intentions|intenciones]] [[already|ya]] [[decided|decididas]].",
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a2-u40-l1-g2',
    type: 'fill-blank',
    level: 'A2',
    topic: 'Module 4 Review',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS,
      questions: [
        {
          question: '[[I|Yo]] ____ ____ ____ [[help|ayudar]] [[you|te]] [[with|con]] [[that|eso]].',
          options: ['[[will|will]]', '[[am going to|voy a]]', '[[help|help]]'],
          correctAnswer: 'will',
          explanation: "[[Will|Will]] [[for|para]] [[offers|ofertas]]: [[I'll help you|Te ayudaré]].",
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a2-u40-l1-g3',
    type: 'fill-blank',
    level: 'A2',
    topic: 'Module 4 Review',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS,
      questions: [
        {
          question: '[[She|Ella]] ____ ____ [[flying|volando]] [[to|a]] [[Paris|París]] [[on|el]] [[Friday|viernes]].',
          options: ['[[is flying|está volando]]', '[[will fly|fly]]', '[[flies|flies]]'],
          correctAnswer: 'is flying',
          explanation: "[[Present Continuous|Present Continuous]] [[for|para]] [[fixed|arreglos]] [[arrangements|fijos]] [[in|en]] [[the|el]] [[future|futuro]].",
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a2-u40-l1-g4',
    type: 'fill-blank',
    level: 'A2',
    topic: 'Module 4 Review',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS,
      questions: [
        {
          question: '[[I|Yo]] ____ ____ ____ [[visit|visitar]] [[Japan|Japón]] [[one|algún]] [[day|día]].',
          options: ['[[hope to|espero]]', '[[would like to|me gustaría]]', '[[dream of|sueño con]]'],
          correctAnswer: 'hope to',
          explanation: "[[Hope to|Espero]] + [[infinitive|infinitivo]] = [[hope|esperanza]].",
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a2-u40-l1-g5',
    type: 'fill-blank',
    level: 'A2',
    topic: 'Module 4 Review',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS,
      questions: [
        {
          question: '[[I|Yo]] ____ ____ ____ ____ [[become|convertirme]] [[a|en]] [[doctor|médico]].',
          options: ['[[would like to|me gustaría]]', '[[hope to|espero]]', '[[dream of|sueño con]]'],
          correctAnswer: 'would like to',
          explanation: "[[Would like to|Me gustaría]] + [[infinitive|infinitivo]] = [[polite|educada]] [[wish|deseo]].",
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a2-u40-l1-g6',
    type: 'fill-blank',
    level: 'A2',
    topic: 'Module 4 Review',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS,
      questions: [
        {
          question: '[[She|Ella]] ____ ____ ____ [[travelling|viajar]] [[around|por]] [[the|el]] [[world|mundo]].',
          options: ['[[dreams of|sueña con]]', '[[hopes to|espera]]', '[[would like to|le gustaría]]'],
          correctAnswer: 'dreams of',
          explanation: "[[Dream of|Sueño con]] + [[gerund|gerundio]] = [[dream|sueño]].",
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a2-u40-l1-g7',
    type: 'fill-blank',
    level: 'A2',
    topic: 'Module 4 Review',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS,
      questions: [
        {
          question: '[[I|Yo]] [[will|te]] ____ [[you|llamaré]] ____ [[I|yo]] [[arrive|llegue]].',
          options: ['[[call|llamar]]', '[[when|cuando]]', '[[calling|llamando]]'],
          correctAnswer: 'call',
          explanation: "[[Main clause|Oración principal]]: [[future|futuro]]; [[time clause|subordinada temporal]]: [[present|presente]].",
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a2-u40-l1-g8',
    type: 'fill-blank',
    level: 'A2',
    topic: 'Module 4 Review',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS,
      questions: [
        {
          question: '____ [[I|yo]] [[finish|termine]] [[my|mi]] [[homework|deberes]], [[I|yo]] [[will|veré]] [[watch|ver]] [[TV|la tele]].',
          options: ['[[As soon as|Tan pronto como]]', '[[When|Cuando]]', '[[After|Después]]'],
          correctAnswer: 'As soon as',
          explanation: "[[As soon as|Tan pronto como]] = [[immediately|inmediatamente]] [[after|después]].",
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a2-u40-l1-g9',
    type: 'fill-blank',
    level: 'A2',
    topic: 'Module 4 Review',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS,
      questions: [
        {
          question: '[[If|Si]] [[you|tú]] ____ [[water|agua]], [[it|ella]] [[boils|hierve]].',
          options: ['[[heat|calientas]]', '[[boil|hervir]]', '[[heats|calienta]]'],
          correctAnswer: 'heat',
          explanation: "[[Zero conditional|Zero conditional]]: [[if|si]] + [[present|presente]], [[present|presente]] [[for|para]] [[general|general]] [[truths|verdades]].",
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a2-u40-l1-g10',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Module 4 Review',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: 'Elige la opción correcta.',
      questions: [
        {
          question: '[[I|Yo]] ____ [[rain|llover]] [[tomorrow|mañana]].',
          options: ['[[think it will|creo que]]', '[[think it|creo eso]]', '[[will think|pensaré]]'],
          correctAnswer: 0,
          explanation: "[[Will|Will]] [[for|para]] [[predictions|predicciones]] [[about|sobre]] [[weather|tiempo]].",
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a2-u40-l1-g11',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Module 4 Review',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: 'Elige la opción correcta.',
      questions: [
        {
          question: '[[I|Yo]] ____ ____ ____ [[call|llamar]] [[you|te]] [[tomorrow|mañana]].',
          options: ['[[will|will]]', '[[am going to|voy a]]', '[[call|call]]'],
          correctAnswer: 0,
          explanation: "[[Will|Will]] [[for|para]] [[promises|promesas]]: [[I'll call you|Te llamaré]].",
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a2-u40-l1-g12',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Module 4 Review',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: 'Elige la opción correcta.',
      questions: [
        {
          question: '[[I|Yo]] ____ [[need|necesito]] [[to|a]] ____ [[a|un]] [[flight|vuelo]] [[to|a]] [[Paris|París]].',
          options: ['[[book|reservar]]', '[[buy|comprar]]', '[[take|tomar]]'],
          correctAnswer: 0,
          explanation: "[[Book|Reservar]] [[a|un]] [[flight|vuelo]] = [[make|hacer]] [[a|una]] [[reservation|reserva]].",
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a2-u40-l1-g13',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Module 4 Review',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: 'Elige la opción correcta.',
      questions: [
        {
          question: '[[When|Cuando]] [[she|ella]] ____ [[arrives|llegue]], [[we|nosotros]] [[will|empezaremos]] [[start|empezar]].',
          options: ['[[arrives|llegue]]', '[[will arrive|llegará]]', '[[arrived|llegó]]'],
          correctAnswer: 0,
          explanation: "[[After when|Después de when]]: [[present|presente]] [[simple|simple]].",
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a2-u40-l1-g14',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Module 4 Review',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: 'Elige la opción correcta.',
      questions: [
        {
          question: '[[If|Si]] [[it|ello]] [[rains|llueve]], [[the|la]] [[ground|tierra]] ____ [[wet|mojada]].',
          options: ['[[gets|se pone]]', '[[will get|se pondrá]]', '[[get|poner]]'],
          correctAnswer: 0,
          explanation: "[[Zero conditional|Zero conditional]]: [[both|ambas]] [[clauses|oraciones]] [[in|en]] [[present|presente]] [[simple|simple]].",
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a2-u40-l1-g15',
    type: 'fill-blank',
    level: 'A2',
    topic: 'Module 4 Review',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS,
      questions: [
        {
          question: '[[We|Nosotros]] ____ ____ ____ [[go|ir]] [[to|a]] [[the|la]] [[beach|playa]] [[next|el próximo]] [[Sunday|domingo]].',
          options: ['[[are going to|vamos a]]', '[[will|will]]', '[[go|go]]'],
          correctAnswer: 'are going to',
          explanation: "[[Going to|Going to]] [[for|para]] [[planned|planeados]] [[plans|planes]].",
        },
      ],
    },
    topicName: 'Grammar',
  },
];
