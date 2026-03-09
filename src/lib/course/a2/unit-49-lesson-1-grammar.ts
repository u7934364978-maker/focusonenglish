/**
 * Unidad 49 — Lección 1: Gramática (Transport & Travel Experiences)
 * 15 ejercicios: Flight, journey, trip
 */

import { Exercise } from '@/lib/exercise-generator';

const LESSON_TITLE = '[[Transport & Travel Experiences|Transporte y experiencias de viaje]]';
const INSTRUCTIONS = 'Completa con la palabra correcta (flight, journey, trip) o elige la opción correcta.';

export const UNIT_49_LESSON_1_GRAMMAR: Exercise[] = [
  {
    id: 'a2-u49-l1-g1',
    type: 'fill-blank',
    level: 'A2',
    topic: 'Transport & Travel Experiences',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS,
      questions: [
        {
          question: '[[Our|Nuestro]] ____ [[to|a]] [[London|Londres]] [[took|tardó]] [[three|tres]] [[hours|horas]].',
          options: ['[[flight|vuelo]]', '[[journey|viaje]]', '[[trip|viaje]]'],
          correctAnswer: 'flight',
          explanation: "[[Flight|Vuelo]] = [[by plane|en avión]] [[specifically|específicamente]].",
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a2-u49-l1-g2',
    type: 'fill-blank',
    level: 'A2',
    topic: 'Transport & Travel Experiences',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS,
      questions: [
        {
          question: '[[We|Nosotros]] [[had|tuvimos]] [[a|un]] ____ ____ ____ [[to|a]] [[Paris|París]] [[last|el pasado]] [[month|mes]].',
          options: ['[[wonderful trip|viaje maravilloso]]', '[[wonderful flight|vuelo maravilloso]]', '[[wonderful journey|viaje maravilloso]]'],
          correctAnswer: 'wonderful trip',
          explanation: "[[Trip|Viaje]] = [[whole|toda]] [[experience|la experiencia]] [[including|incluyendo]] [[destination|destino]].",
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a2-u49-l1-g3',
    type: 'fill-blank',
    level: 'A2',
    topic: 'Transport & Travel Experiences',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS,
      questions: [
        {
          question: '[[The|El]] ____ ____ ____ ____ ____ [[was|fue]] [[very|muy]] [[long|larga]].',
          options: ['[[train journey|viaje en tren]]', '[[train flight|vuelo en tren]]', '[[train trip|viaje en tren]]'],
          correctAnswer: 'train journey',
          explanation: "[[Journey|Viaje]] = [[the act|el acto]] [[of travelling|de viajar]] [[from A to B|de A a B]].",
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a2-u49-l1-g4',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Transport & Travel Experiences',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: 'Elige la opción correcta.',
      questions: [
        {
          question: '[[I|Yo]] ____ ____ ____ [[many|muchos]] [[countries|países]] [[by|en]] [[plane|avión]].',
          options: ['[[have visited|he visitado]]', '[[visited|visitaron]]', '[[visit|visito]]'],
          correctAnswer: 0,
          explanation: "[[Present Perfect|Presente Perfecto]] = [[life|experiencias de]] [[experiences|vida]].",
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a2-u49-l1-g5',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Transport & Travel Experiences',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: 'Elige la opción correcta.',
      questions: [
        {
          question: '[[The|El]] ____ [[was|fue]] [[delayed|retrasado]] [[by|por]] [[two|dos]] [[hours|horas]].',
          options: ['[[flight|vuelo]]', '[[trip|viaje]]', '[[journey|viaje]]'],
          correctAnswer: 0,
          explanation: "[[Flight|Vuelo]] [[can be|puede ser]] [[delayed|retrasado]].",
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a2-u49-l1-g6',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Transport & Travel Experiences',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: 'Elige la opción correcta.',
      questions: [
        {
          question: '[[We|Nosotros]] ____ ____ ____ ____ ____ ____ [[to|a]] [[the|el]] [[airport|aeropuerto]] [[by|en]] [[taxi|taxi]].',
          options: ['[[went|fuimos]]', '[[have gone|hemos ido]]', '[[go|vamos]]'],
          correctAnswer: 0,
          explanation: "[[Past Simple|Pasado Simple]] = [[specific|momento específico]] [[in the past|en el pasado]].",
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a2-u49-l1-g7',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Transport & Travel Experiences',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: 'Elige la opción correcta.',
      questions: [
        {
          question: '[[Have|¿]] [[you|tú]] ____ ____ ____ ____ ____ ____ [[before|antes]]?',
          options: ['[[ever been on|alguna vez estado en]] [[a cruise|un crucero]]', '[[ever been on|alguna vez estado en]] [[a flight|un vuelo]]', '[[ever been on|alguna vez estado en]] [[a journey|un viaje]]'],
          correctAnswer: 0,
          explanation: "[[Cruise|Crucero]] = [[common|común]] [[travel|experiencia de]] [[experience|viaje]].",
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a2-u49-l1-g8',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Transport & Travel Experiences',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: 'Elige la opción correcta.',
      questions: [
        {
          question: '[[I|Yo]] ____ ____ ____ ____ ____ ____ [[to|a]] [[work|trabajo]] [[every|cada]] [[day|día]].',
          options: ['[[take the bus|tomo el autobús]]', '[[took the bus|tomé el autobús]]', '[[have taken the bus|he tomado el autobús]]'],
          correctAnswer: 0,
          explanation: "[[Present Simple|Presente Simple]] = [[habit|hábito]] [[routine|rutina]].",
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a2-u49-l1-g9',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Transport & Travel Experiences',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: 'Elige la opción correcta.',
      questions: [
        {
          question: '[[The|El]] ____ ____ ____ ____ ____ ____ [[was|fue]] [[amazing|increíble]] — [[we|nosotros]] [[saw|vimos]] [[so many|tantos]] [[places|lugares]].',
          options: ['[[road trip|viaje por carretera]]', '[[road flight|vuelo por carretera]]', '[[road journey|viaje por carretera]]'],
          correctAnswer: 0,
          explanation: "[[Road trip|Viaje por carretera]] = [[trip|viaje]] [[by car|en coche]].",
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a2-u49-l1-g10',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Transport & Travel Experiences',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: 'Elige la opción correcta.',
      questions: [
        {
          question: '[[She|Ella]] ____ ____ ____ ____ ____ ____ [[to|a]] [[Tokyo|Tokio]] [[last|el pasado]] [[year|año]].',
          options: ['[[took a flight|tomó un vuelo]]', '[[took a trip|hizo un viaje]]', '[[took a journey|hizo un viaje]]'],
          correctAnswer: 0,
          explanation: "[[Took a flight|Tomó un vuelo]] = [[went by plane|fue en avión]].",
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a2-u49-l1-g11',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Transport & Travel Experiences',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: 'Elige la opción correcta.',
      questions: [
        {
          question: '[[How long|Cuánto]] ____ ____ ____ ____ ____ ____ [[to|a]] [[get|llegar]] [[there|allí]]?',
          options: ['[[does it take|tarda]]', '[[did it take|tardó]]', '[[has it taken|ha tardado]]'],
          correctAnswer: 0,
          explanation: "[[How long does it take|Cuánto tarda]] = [[general|pregunta general]] [[question|sobre tiempo]].",
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a2-u49-l1-g12',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Transport & Travel Experiences',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: 'Elige la opción correcta.',
      questions: [
        {
          question: '[[We|Nosotros]] ____ ____ ____ ____ ____ ____ [[the|el]] [[ferry|ferry]] [[to|a]] [[the|la]] [[island|isla]].',
          options: ['[[took|tomamos]]', '[[have taken|hemos tomado]]', '[[take|tomamos]]'],
          correctAnswer: 0,
          explanation: "[[Past Simple|Pasado Simple]] = [[specific|viaje específico]] [[trip|en el pasado]].",
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a2-u49-l1-g13',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Transport & Travel Experiences',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: 'Elige la opción correcta.',
      questions: [
        {
          question: '[[I|Yo]] ____ ____ ____ ____ ____ ____ [[train|tren]] [[before|antes]].',
          options: ['[[have never travelled by|nunca he viajado en]]', '[[never travelled by|nunca viajé en]]', '[[never travel by|nunca viajo en]]'],
          correctAnswer: 0,
          explanation: "[[Present Perfect|Presente Perfecto]] + [[never|never]] = [[life|experiencia de]] [[experience|vida]].",
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a2-u49-l1-g14',
    type: 'fill-blank',
    level: 'A2',
    topic: 'Transport & Travel Experiences',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS,
      questions: [
        {
          question: '[[The|El]] ____ [[from|de]] [[Madrid|Madrid]] [[to|a]] [[Barcelona|Barcelona]] [[is|es]] [[about|unas]] [[3|3]] [[hours|horas]].',
          options: ['[[journey|viaje]]', '[[trip|viaje]]', '[[flight|vuelo]]'],
          correctAnswer: 'journey',
          explanation: "[[Journey|Viaje]] = [[the travel|el trayecto]] [[itself|en sí]] [[from A to B|de A a B]].",
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a2-u49-l1-g15',
    type: 'fill-blank',
    level: 'A2',
    topic: 'Transport & Travel Experiences',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS,
      questions: [
        {
          question: '[[We|Nosotros]] [[are|estamos]] [[going on|yendo de]] [[a|un]] [[business|negocios]] ____ [[next|el próximo]] [[week|semana]].',
          options: ['[[trip|viaje]]', '[[flight|vuelo]]', '[[journey|viaje]]'],
          correctAnswer: 'trip',
          explanation: "[[Business trip|Viaje de negocios]] = [[common|expresión común]] [[expression|en inglés]].",
        },
      ],
    },
    topicName: 'Grammar',
  },
];
