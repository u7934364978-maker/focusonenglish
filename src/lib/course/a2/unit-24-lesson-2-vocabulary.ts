/**
 * Unidad 24 — Lección 2: Vocabulario (citas, reuniones, eventos)
 * 15 ejercicios
 */

import { Exercise } from '@/lib/exercise-generator';

const LESSON_TITLE = '[[Vocabulary|Vocabulario]]: [[Appointments|Citas]], [[Meetings|Reuniones]] [[&|y]] [[Events|Eventos]]';
const INSTRUCTIONS_MC = 'Elige la palabra correcta para cada definición o frase.';
const INSTRUCTIONS_MATCH = 'Relaciona cada palabra en inglés con su traducción.';
const INSTRUCTIONS_FILL = 'Completa la frase con la palabra correcta del recuadro.';

export const UNIT_24_LESSON_2_VOCABULARY: Exercise[] = [
  {
    id: 'a2-u24-l2-v1',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Present Continuous Future',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_MC,
      questions: [
        {
          question: '"[[Appointment|cita]]" [[means|significa]] ____.',
          options: ['[[a|una]] [[fixed|fijada]] [[time|hora]] [[to|para]] [[meet|quedar]] [[someone|alguien]] [[or|o]] [[go|ir]] [[somewhere|algún sitio]]', '[[a plan|un plan]] [[that|que]] [[might|podría]] [[happen|pasar]]', '[[a past|una pasada]] [[meeting|reunión]]'],
          correctAnswer: 0,
          explanation: '[[Appointment|cita]] = [[fixed|fijada]] [[arrangement|quedada]] [[e.g.|ej.]] [[dentist|dentista]], [[doctor|médico]].',
        },
      ],
    },
    topicName: 'Vocabulary',
  },
  {
    id: 'a2-u24-l2-v2',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Present Continuous Future',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_MC,
      questions: [
        {
          question: '"[[Meeting|Reunión]]" [[means|significa]] ____.',
          options: ['[[an|una]] [[event|evento]] [[where|donde]] [[people|gente]] [[come|vienes]] [[together|juntos]] [[to|para]] [[discuss|discutir]] [[something|algo]]', '[[a party|una fiesta]]', '[[a holiday|unas vacaciones]]'],
          correctAnswer: 0,
          explanation: '[[Meeting|Reunión]] = [[formal|formal]] [[or|o]] [[informal|informal]] [[gathering|encuentro]].',
        },
      ],
    },
    topicName: 'Vocabulary',
  },
  {
    id: 'a2-u24-l2-v3',
    type: 'matching',
    level: 'A2',
    topic: 'Present Continuous Future',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_MATCH,
      pairs: [
        { id: 'p1', left: '[[Appointment|cita]]', right: 'Cita' },
        { id: 'p2', left: '[[Meeting|Reunión]]', right: 'Reunión' },
        { id: 'p3', left: '[[Event|Evento]]', right: 'Evento' },
        { id: 'p4', left: '[[Diary|Agenda]]', right: 'Agenda' },
      ],
    },
    topicName: 'Vocabulary',
  },
  {
    id: 'a2-u24-l2-v4',
    type: 'matching',
    level: 'A2',
    topic: 'Present Continuous Future',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_MATCH,
      pairs: [
        { id: 'p1', left: '[[At 3 o\'clock|A las 3 en punto]]', right: 'A las 3 en punto' },
        { id: 'p2', left: '[[Tomorrow|Mañana]]', right: 'Mañana' },
        { id: 'p3', left: '[[Next week|La próxima semana]]', right: 'La próxima semana' },
        { id: 'p4', left: '[[On Friday|El viernes]]', right: 'El viernes' },
      ],
    },
    topicName: 'Vocabulary',
  },
  {
    id: 'a2-u24-l2-v5',
    type: 'fill-blank',
    level: 'A2',
    topic: 'Present Continuous Future',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_FILL,
      questions: [
        {
          question: '[[I|Yo]] [[am having|tengo]] [[a|una]] ____ [[with|con]] [[the|el]] [[dentist|dentista]] [[at|a]] [[10|diez]] [[in|por]] [[the|la]] [[morning|mañana]].',
          options: ['[[appointment|cita]]', '[[meeting|reunión]]', '[[party|fiesta]]'],
          correctAnswer: 'appointment',
          explanation: '[[Dentist|Dentista]] = [[appointment|cita]] [[at|a]] [[a|una]] [[specific|específica]] [[time|hora]].',
        },
      ],
    },
    topicName: 'Vocabulary',
  },
  {
    id: 'a2-u24-l2-v6',
    type: 'fill-blank',
    level: 'A2',
    topic: 'Present Continuous Future',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_FILL,
      questions: [
        {
          question: '[[We|Nosotros]] [[are having|tenemos]] [[dinner|cena]] ____ [[our|nuestros]] [[parents|padres]] [[on|el]] [[Saturday|sábado]].',
          options: ['[[with|con]]', '[[at|en]]', '[[for|para]]'],
          correctAnswer: 'with',
          explanation: '[[Have dinner with|Cenar con]] = [[eat|comer]] [[with|con]] [[someone|alguien]].',
        },
      ],
    },
    topicName: 'Vocabulary',
  },
  {
    id: 'a2-u24-l2-v7',
    type: 'fill-blank',
    level: 'A2',
    topic: 'Present Continuous Future',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_FILL,
      questions: [
        {
          question: '[[She|Ella]] [[is flying|vuela]] ____ [[Paris|París]] [[next|el próximo]] [[week|semana]].',
          options: ['[[to|a]]', '[[at|en]]', '[[for|para]]'],
          correctAnswer: 'to',
          explanation: '[[Fly to|Volar a]] = [[travel|viajar]] [[by|en]] [[plane|avión]] [[to|a]] [[a|un]] [[place|lugar]].',
        },
      ],
    },
    topicName: 'Vocabulary',
  },
  {
    id: 'a2-u24-l2-v8',
    type: 'fill-blank',
    level: 'A2',
    topic: 'Present Continuous Future',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_FILL,
      questions: [
        {
          question: '[[What time|A qué hora]] ____ ____ [[meeting|quedando]] [[him|con él]]?',
          options: ['[[are you|estás]]', '[[is you|está]]', '[[am you|estoy]]'],
          correctAnswer: 'are you',
          explanation: '[[What time are you meeting him?|¿A qué hora quedas con él?]]',
        },
      ],
    },
    topicName: 'Vocabulary',
  },
  {
    id: 'a2-u24-l2-v9',
    type: 'fill-blank',
    level: 'A2',
    topic: 'Present Continuous Future',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_FILL,
      questions: [
        {
          question: '[[I|Yo]] [[am playing|juego]] ____ [[tennis|tenis]] [[with|con]] [[my|mi]] [[friend|amigo]] [[at|a]] [[5|cinco]] [[pm|de la tarde]].',
          options: ['[[tennis|tenis]]', '[[football|fútbol]]', '[[basketball|baloncesto]]'],
          correctAnswer: 'tennis',
          explanation: '[[Play tennis|Jugar al tenis]] = [[fixed|fijado]] [[plan|plan]].',
        },
      ],
    },
    topicName: 'Vocabulary',
  },
  {
    id: 'a2-u24-l2-v10',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Present Continuous Future',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_MC,
      questions: [
        {
          question: '"[[Diary|Agenda]]" [[means|significa]] ____.',
          options: ['[[a|una]] [[book|libro]] [[or|o]] [[app|app]] [[where|donde]] [[you|tú]] [[write|escribes]] [[your|tus]] [[plans|planes]] [[and|y]] [[appointments|citas]]', '[[a story|una historia]]', '[[a letter|una carta]]'],
          correctAnswer: 0,
          explanation: '[[Diary|Agenda]] = [[schedule|horario]] [[of|de]] [[plans|planes]] [[and|y]] [[appointments|citas]].',
        },
      ],
    },
    topicName: 'Vocabulary',
  },
  {
    id: 'a2-u24-l2-v11',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Present Continuous Future',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_MC,
      questions: [
        {
          question: '[[What|Qué]] [[word|palabra]] [[completes|complete]] [[the|la]] [[sentence|frase]]? "[[I|Yo]] [[am|estoy]] ____ [[John|John]] [[tomorrow|mañana]]."',
          options: ['[[meeting|quedando]]', '[[meet|quedar]]', '[[met|quedé]]'],
          correctAnswer: 0,
          explanation: '[[Present Continuous|Presente Continuo]] [[for|para]] [[future|futuro]]: [[am meeting|quedo]].',
        },
      ],
    },
    topicName: 'Vocabulary',
  },
  {
    id: 'a2-u24-l2-v12',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Present Continuous Future',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_MC,
      questions: [
        {
          question: '"[[Full diary|Agenda llena]]" [[means|significa]] ____.',
          options: ['[[many|muchas]] [[plans|planes]] [[and|y]] [[appointments|citas]]', '[[no|ningún]] [[plan|plan]]', '[[one|una]] [[appointment|cita]]'],
          correctAnswer: 0,
          explanation: '[[Full diary|Agenda llena]] = [[busy|ocupado]] [[schedule|horario]].',
        },
      ],
    },
    topicName: 'Vocabulary',
  },
  {
    id: 'a2-u24-l2-v13',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Present Continuous Future',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_MC,
      questions: [
        {
          question: '"[[O\'clock|En punto]]" [[means|significa]] ____.',
          options: ['[[exactly|exactamente]] [[that|esa]] [[hour|hora]]', '[[approximately|aproximadamente]]', '[[late|tarde]]'],
          correctAnswer: 0,
          explanation: '[[At 3 o\'clock|A las 3 en punto]] = [[exactly|exactamente]] [[3|tres]].',
        },
      ],
    },
    topicName: 'Vocabulary',
  },
  {
    id: 'a2-u24-l2-v14',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Present Continuous Future',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_MC,
      questions: [
        {
          question: '[[What|Qué]] [[word|palabra]] [[completes|complete]] [[the|la]] [[sentence|frase]]? "[[She|Ella]] [[is|está]] ____ [[to|a]] [[Paris|París]] [[next week|la próxima semana]]."',
          options: ['[[flying|volando]]', '[[fly|volar]]', '[[flew|voló]]'],
          correctAnswer: 0,
          explanation: '[[Present Continuous|Presente Continuo]] [[for|para]] [[future|futuro]]: [[is flying|vuela]].',
        },
      ],
    },
    topicName: 'Vocabulary',
  },
  {
    id: 'a2-u24-l2-v15',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Present Continuous Future',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_MC,
      questions: [
        {
          question: '"[[Fixed plan|Plan fijado]]" [[means|significa]] ____.',
          options: ['[[a plan|un plan]] [[that|que]] [[is|está]] [[already|ya]] [[arranged|organizado]] [[and|y]] [[confirmed|confirmado]]', '[[a|un]] [[maybe|quizás]] [[plan|plan]]', '[[a|un]] [[past|pasado]] [[plan|plan]]'],
          correctAnswer: 0,
          explanation: '[[Fixed|Fijado]] = [[arranged|organizado]] [[and|y]] [[confirmed|confirmado]].',
        },
      ],
    },
    topicName: 'Vocabulary',
  },
];
