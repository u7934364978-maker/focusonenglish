/**
 * Unidad 35 — Lección 1: Gramática (Travel Plans & Bookings)
 * 15 ejercicios: vocabulario de viajes, reservas, vuelos
 */

import { Exercise } from '@/lib/exercise-generator';

const LESSON_TITLE = '[[Grammar|Gramática]]: [[Travel|Viajes]] [[Plans|Planes]] [[&|y]] [[Bookings|Reservas]]';
const INSTRUCTIONS = 'Completa con la palabra correcta o elige la opción correcta.';

export const UNIT_35_LESSON_1_GRAMMAR: Exercise[] = [
  {
    id: 'a2-u35-l1-g1',
    type: 'fill-blank',
    level: 'A2',
    topic: 'Travel Plans & Bookings',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS,
      questions: [
        {
          question: '[[I|Yo]] [[need|necesito]] [[to|a]] ____ [[a|un]] [[flight|vuelo]] [[to|a]] [[Paris|París]].',
          options: ['[[book|reservar]]', '[[buy|comprar]]', '[[take|tomar]]'],
          correctAnswer: 'book',
          explanation: "[[Book|Reservar]] [[a|un]] [[flight|vuelo]] = [[make|hacer]] [[a|una]] [[reservation|reserva]].",
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a2-u35-l1-g2',
    type: 'fill-blank',
    level: 'A2',
    topic: 'Travel Plans & Bookings',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS,
      questions: [
        {
          question: '[[The|El]] ____ [[leaves|sale]] [[at|a]] [[10|10]] [[o\'clock|en punto]] [[in|por]] [[the|la]] [[morning|mañana]].',
          options: ['[[flight|vuelo]]', '[[train|tren]]', '[[bus|autobús]]'],
          correctAnswer: 'flight',
          explanation: "[[Flight|Vuelo]] [[leaves|sale]] = [[departs|parte]].",
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a2-u35-l1-g3',
    type: 'fill-blank',
    level: 'A2',
    topic: 'Travel Plans & Bookings',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS,
      questions: [
        {
          question: '[[We|Nosotros]] [[have|tenemos]] [[a|una]] ____ [[at|en]] [[the|el]] [[Hilton|Hilton]] [[Hotel|Hotel]].',
          options: ['[[booking|reserva]]', '[[ticket|billete]]', '[[passport|pasaporte]]'],
          correctAnswer: 'booking',
          explanation: "[[Booking|Reserva]] [[at|en]] [[hotel|hotel]].",
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a2-u35-l1-g4',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Travel Plans & Bookings',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: 'Elige la opción correcta.',
      questions: [
        {
          question: '[[I|Yo]] [[need|necesito]] [[my|mi]] ____ [[to|para]] [[travel|viajar]] [[abroad|al extranjero]].',
          options: ['[[ticket|billete]]', '[[passport|pasaporte]]', '[[luggage|equipaje]]'],
          correctAnswer: 1,
          explanation: "[[Passport|Pasaporte]] [[for|para]] [[international|internacional]] [[travel|viajes]].",
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a2-u35-l1-g5',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Travel Plans & Bookings',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: 'Elige la opción correcta.',
      questions: [
        {
          question: '[[What|Qué]] ____ [[is|es]] [[your|tu]] [[flight|vuelo]]?',
          options: ['[[time|hora]]', '[[gate|puerta]]', '[[number|número]]'],
          correctAnswer: 0,
          explanation: "[[What time|Qué hora]] = [[flight|vuelo]] [[departure|salida]].",
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a2-u35-l1-g6',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Travel Plans & Bookings',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: 'Elige la opción correcta.',
      questions: [
        {
          question: '[[We|Nosotros]] [[are going to|vamos a]] ____ [[a|un]] [[hotel|hotel]] [[in|en]] [[the|el]] [[centre|centro]].',
          options: ['[[stay|quedarnos]]', '[[visit|visitar]]', '[[book|reservar]]'],
          correctAnswer: 0,
          explanation: "[[Stay at|Quedarse en]] [[a|un]] [[hotel|hotel]].",
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a2-u35-l1-g7',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Travel Plans & Bookings',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: 'Elige la opción correcta.',
      questions: [
        {
          question: '[[The|El]] ____ [[arrives|llega]] [[at|a]] [[platform|andén]] [[5|5]].',
          options: ['[[flight|vuelo]]', '[[train|tren]]', '[[car|coche]]'],
          correctAnswer: 1,
          explanation: "[[Train|Tren]] [[arrives|llega]] [[at|a]] [[platform|andén]].",
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a2-u35-l1-g8',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Travel Plans & Bookings',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: 'Elige la opción correcta.',
      questions: [
        {
          question: '[[I|Yo]] [[would like|me gustaría]] [[to|a]] ____ [[a|una]] [[single|individual]] [[room|habitación]].',
          options: ['[[book|reservar]]', '[[buy|comprar]]', '[[see|ver]]'],
          correctAnswer: 0,
          explanation: "[[Book|Reservar]] [[a|una]] [[room|habitación]].",
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a2-u35-l1-g9',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Travel Plans & Bookings',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: 'Elige la opción correcta.',
      questions: [
        {
          question: '[[Please|Por favor]] ____ [[your|tu]] [[luggage|equipaje]] [[at|en]] [[the|el]] [[counter|mostrador]].',
          options: ['[[leave|deja]]', '[[check in|factura]]', '[[take|lleva]]'],
          correctAnswer: 1,
          explanation: "[[Check in|Facturar]] [[luggage|equipaje]] [[at|en]] [[airport|aeropuerto]].",
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a2-u35-l1-g10',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Travel Plans & Bookings',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: 'Elige la opción correcta.',
      questions: [
        {
          question: '[[Our|Nuestro]] ____ [[is|es]] [[at|a]] [[3|3]] [[pm|pm]].',
          options: ['[[departure|salida]]', '[[arrival|llegada]]', '[[booking|reserva]]'],
          correctAnswer: 0,
          explanation: "[[Departure|Salida]] = [[when|cuando]] [[flight|vuelo]] [[leaves|sale]].",
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a2-u35-l1-g11',
    type: 'fill-blank',
    level: 'A2',
    topic: 'Travel Plans & Bookings',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS,
      questions: [
        {
          question: '[[I|Yo]] [[need|necesito]] [[to|a]] ____ [[my|mi]] [[ticket|billete]] [[online|online]].',
          options: ['[[print|imprimir]]', '[[buy|comprar]]', '[[show|mostrar]]'],
          correctAnswer: 'print',
          explanation: "[[Print|Imprimir]] [[ticket|billete]] [[before|antes]] [[travel|viaje]].",
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a2-u35-l1-g12',
    type: 'fill-blank',
    level: 'A2',
    topic: 'Travel Plans & Bookings',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS,
      questions: [
        {
          question: '[[The|El]] ____ [[is|es]] [[delayed|retrasado]] [[by|por]] [[2|2]] [[hours|horas]].',
          options: ['[[flight|vuelo]]', '[[train|tren]]', '[[bus|autobús]]'],
          correctAnswer: 'flight',
          explanation: "[[Flight|Vuelo]] [[delayed|retrasado]].",
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a2-u35-l1-g13',
    type: 'fill-blank',
    level: 'A2',
    topic: 'Travel Plans & Bookings',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS,
      questions: [
        {
          question: '[[We|Nosotros]] [[are|estamos]] ____ [[for|para]] [[2|2]] [[weeks|semanas]].',
          options: ['[[travelling|viajando]]', '[[staying|quedándonos]]', '[[going|yendo]]'],
          correctAnswer: 'travelling',
          explanation: "[[Travelling|Viajando]] [[for|durante]] [[2|2]] [[weeks|semanas]].",
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a2-u35-l1-g14',
    type: 'fill-blank',
    level: 'A2',
    topic: 'Travel Plans & Bookings',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS,
      questions: [
        {
          question: '[[Do|¿]] [[you|tienes]] [[have|una]] ____ [[ticket|billete]]?',
          options: ['[[one-way|solo ida]]', '[[return|ida y vuelta]]', '[[round-trip|ida y vuelta]]'],
          correctAnswer: 'one-way',
          explanation: "[[One-way|Solo ida]] [[or|o]] [[return|ida y vuelta]].",
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a2-u35-l1-g15',
    type: 'fill-blank',
    level: 'A2',
    topic: 'Travel Plans & Bookings',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS,
      questions: [
        {
          question: '[[Your|Tu]] ____ ____ [[is|es]] [[24|24]]. [[Please|Por favor]] [[go|ve]] [[to|a]] [[boarding|embarque]].',
          options: ['[[gate number|número de puerta]]', '[[flight number|número de vuelo]]', '[[seat number|número de asiento]]'],
          correctAnswer: 'gate number',
          explanation: "[[Gate number|Número de puerta]] [[for|para]] [[boarding|embarque]].",
        },
      ],
    },
    topicName: 'Grammar',
  },
];
