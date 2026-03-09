/**
 * Unidad 50 — Lección 1: Gramática (Module 5 Review)
 * 15 ejercicios: Repaso Present Perfect, comparativos, superlativos
 */

import { Exercise } from '@/lib/exercise-generator';

const LESSON_TITLE = '[[Module 5 Review|Repaso Módulo 5]]';
const INSTRUCTIONS = 'Elige la opción correcta (Present Perfect, comparativos, superlativos).';

export const UNIT_50_LESSON_1_GRAMMAR: Exercise[] = [
  {
    id: 'a2-u50-l1-g1',
    type: 'fill-blank',
    level: 'A2',
    topic: 'Module 5 Review',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS,
      questions: [
        {
          question: '[[I|Yo]] ____ ____ ____ [[to|a]] [[Japan|Japón]] [[twice|dos veces]].',
          options: ['[[have been|he estado]]', '[[went|fui]]', '[[was|estuve]]'],
          correctAnswer: 'have been',
          explanation: "[[Present Perfect|Presente Perfecto]] = [[life|experiencias de]] [[experiences|vida]].",
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a2-u50-l1-g2',
    type: 'fill-blank',
    level: 'A2',
    topic: 'Module 5 Review',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS,
      questions: [
        {
          question: '[[She|Ella]] ____ ____ ____ [[lunch|almuerzo]].',
          options: ['[[has just had|acaba de comer]]', '[[has already had|ya ha comido]]', '[[had just|acabó de]]'],
          correctAnswer: 'has just had',
          explanation: "[[Just|Just]] = [[very recently|muy recientemente]].",
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a2-u50-l1-g3',
    type: 'fill-blank',
    level: 'A2',
    topic: 'Module 5 Review',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS,
      questions: [
        {
          question: '[[We|Nosotros]] ____ ____ ____ [[here|aquí]] ____ [[five|cinco]] [[years|años]].',
          options: ['[[have lived|hemos vivido]] ... [[for|durante]]', '[[lived|vivimos]] ... [[for|durante]]', '[[have lived|hemos vivido]] ... [[since|desde]]'],
          correctAnswer: 'have lived for',
          explanation: "[[For|For]] + [[period|período]] [[of time|de tiempo]].",
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a2-u50-l1-g4',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Module 5 Review',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: 'Elige la opción correcta.',
      questions: [
        {
          question: '[[Paris|París]] [[is|es]] ____ [[than|que]] [[my|mi]] [[town|pueblo]].',
          options: ['[[more expensive|más caro]]', '[[expensiver|más caro]]', '[[most expensive|el más caro]]'],
          correctAnswer: 0,
          explanation: "[[Comparative|Comparativo]]: [[expensive|caro]] → [[more expensive|más caro]].",
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a2-u50-l1-g5',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Module 5 Review',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: 'Elige la opción correcta.',
      questions: [
        {
          question: '[[Mount Everest|El Monte Everest]] [[is|es]] ____ ____ ____ [[mountain|montaña]] [[in|en]] [[the world|el mundo]].',
          options: ['[[the highest|la más alta]]', '[[the most high|la más alta]]', '[[higher|más alta]]'],
          correctAnswer: 0,
          explanation: "[[Superlative|Superlativo]]: [[high|alto]] → [[the highest|el más alto]].",
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a2-u50-l1-g6',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Module 5 Review',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: 'Elige la opción correcta.',
      questions: [
        {
          question: '[[I|Yo]] ____ ____ ____ [[sushi|sushi]] [[in|en]] [[my|mi]] [[life|vida]].',
          options: ['[[have never eaten|nunca he comido]]', '[[never ate|nunca comí]]', '[[did not eat|no comí]]'],
          correctAnswer: 0,
          explanation: "[[Present Perfect|Presente Perfecto]] + [[never|never]] = [[life|experiencia de]] [[experience|vida]].",
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a2-u50-l1-g7',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Module 5 Review',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: 'Elige la opción correcta.',
      questions: [
        {
          question: '[[When|Cuándo]] ____ [[you|tú]] ____ [[to|a]] [[Italy|Italia]]?',
          options: ['[[did|]] ... [[go|ir]]', '[[have|]] ... [[been|estado]]', '[[do|]] ... [[go|ir]]'],
          correctAnswer: 0,
          explanation: "[[When|Cuando]] = [[specific|momento específico]] → [[Past Simple|Pasado Simple]].",
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a2-u50-l1-g8',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Module 5 Review',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: 'Elige la opción correcta.',
      questions: [
        {
          question: '[[The|El]] ____ ____ ____ ____ ____ ____ [[was|fue]] [[delayed|retrasado]].',
          options: ['[[flight|vuelo]]', '[[trip|viaje]]', '[[journey|viaje]]'],
          correctAnswer: 0,
          explanation: "[[Flight|Vuelo]] [[can be|puede ser]] [[delayed|retrasado]].",
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a2-u50-l1-g9',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Module 5 Review',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: 'Elige la opción correcta.',
      questions: [
        {
          question: '[[Life|La vida]] [[in|en]] [[the|el]] [[country|campo]] [[is|es]] ____ [[than|que]] [[in|en]] [[the|la]] [[city|ciudad]].',
          options: ['[[quieter|más tranquila]]', '[[more quiet|más tranquila]]', '[[quietest|la más tranquila]]'],
          correctAnswer: 0,
          explanation: "[[Comparative|Comparativo]]: [[quiet|tranquilo]] → [[quieter|más tranquilo]].",
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a2-u50-l1-g10',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Module 5 Review',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: 'Elige la opción correcta.',
      questions: [
        {
          question: '[[Have|¿]] [[you|tú]] ____ [[your|tu]] [[homework|deberes]] ____?',
          options: ['[[finished|terminado]] ... [[yet|aún]]', '[[finished|terminado]] ... [[already|ya]]', '[[finished|terminado]] ... [[just|acabo]]'],
          correctAnswer: 0,
          explanation: "[[Yet|Yet]] [[in|en]] [[questions|preguntas]] = [[until now|hasta ahora]].",
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a2-u50-l1-g11',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Module 5 Review',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: 'Elige la opción correcta.',
      questions: [
        {
          question: '[[This|Esta]] [[is|es]] ____ ____ ____ [[restaurant|restaurante]] [[in|en]] [[town|la ciudad]].',
          options: ['[[the best|el mejor]]', '[[the goodest|el mejor]]', '[[the most good|el mejor]]'],
          correctAnswer: 0,
          explanation: "[[Superlative|Superlativo]]: [[good|bueno]] → [[the best|el mejor]] ([[irregular|irregular]]).",
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a2-u50-l1-g12',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Module 5 Review',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: 'Elige la opción correcta.',
      questions: [
        {
          question: '[[He|Él]] ____ ____ ____ [[here|aquí]] ____ [[March|marzo]].',
          options: ['[[has lived|ha vivido]] ... [[since|desde]]', '[[lived|vivió]] ... [[since|desde]]', '[[has lived|ha vivido]] ... [[for|durante]]'],
          correctAnswer: 0,
          explanation: "[[Since|Since]] + [[point|punto]] [[in time|en el tiempo]].",
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a2-u50-l1-g13',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Module 5 Review',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: 'Elige la opción correcta.',
      questions: [
        {
          question: '[[We|Nosotros]] ____ ____ ____ ____ ____ ____ [[to|a]] [[Paris|París]] [[last|el pasado]] [[summer|verano]].',
          options: ['[[had a great|tuvimos un gran]] [[trip|viaje]]', '[[had a great|tuvimos un gran]] [[flight|vuelo]]', '[[had a great|tuvimos un gran]] [[journey|viaje]]'],
          correctAnswer: 0,
          explanation: "[[Trip|Viaje]] = [[whole|toda]] [[experience|la experiencia]] [[including|incluyendo]] [[destination|destino]].",
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a2-u50-l1-g14',
    type: 'fill-blank',
    level: 'A2',
    topic: 'Module 5 Review',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS,
      questions: [
        {
          question: '[[Tokyo|Tokio]] [[is|es]] ____ ____ ____ ____ ____ ____ [[city|ciudad]] [[in|en]] [[the world|el mundo]].',
          options: ['[[one of the most expensive|una de las más caras]]', '[[one of the expensivest|una de las más caras]]', '[[one of the more expensive|una de las más caras]]'],
          correctAnswer: 'one of the most expensive',
          explanation: "[[One of the most|Una de las más]] + [[adjective|adjetivo]] = [[superlative|superlativo]].",
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a2-u50-l1-g15',
    type: 'fill-blank',
    level: 'A2',
    topic: 'Module 5 Review',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS,
      questions: [
        {
          question: '[[The|El]] ____ ____ ____ ____ ____ ____ [[from|de]] [[Madrid|Madrid]] [[to|a]] [[Valencia|Valencia]] [[takes|tarda]] [[3|3]] [[hours|horas]].',
          options: ['[[journey|viaje]]', '[[trip|viaje]]', '[[flight|vuelo]]'],
          correctAnswer: 'journey',
          explanation: "[[Journey|Viaje]] = [[the travel|el trayecto]] [[from A to B|de A a B]].",
        },
      ],
    },
    topicName: 'Grammar',
  },
];
