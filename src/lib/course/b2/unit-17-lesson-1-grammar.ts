/**
 * Unidad 17 B2 — Lección 1: Gramática (Modal passive, have something done)
 * 18 ejercicios (B2: más vocabulario y complejidad que B1)
 */

import { Exercise } from '@/lib/exercise-generator';

const LESSON_TITLE =
  '[[Grammar|Gramática]]: [[Modal passive, have something done|Modal passive, have something done]]';
const INSTRUCTIONS =
  'Elige la forma correcta de modal passive (must be done, should have been done) o have something done.';

export const UNIT_17_LESSON_1_GRAMMAR: Exercise[] = [
  {
    id: 'b2-u17-l1-g1',
    type: 'grammar',
    level: 'B2',
    topic: 'Modal passive, have something done',
    difficulty: 'medium',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS,
      grammarPoint: 'must be + past participle = obligación en presente',
      questions: [
        {
          id: 'g1-q1',
          type: 'fill-blank',
          question:
            'All samples ____ before they can be used in the experiment.',
          options: ['must be tested', 'must have been tested', 'must be testing'],
          correctAnswer: 'must be tested',
          acceptableAnswers: ['must be tested'],
          explanation:
            'Obligación: las muestras deben ser probadas antes de usarlas. Modal passive en presente.',
          points: 2,
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'b2-u17-l1-g2',
    type: 'grammar',
    level: 'B2',
    topic: 'Modal passive, have something done',
    difficulty: 'medium',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS,
      grammarPoint: 'should have been + past participle = crítica sobre el pasado',
      questions: [
        {
          id: 'g2-q1',
          type: 'fill-blank',
          question:
            'The results ____ earlier. We lost valuable time because of the delay.',
          options: [
            'should have been published',
            'should be published',
            'should have published',
          ],
          correctAnswer: 'should have been published',
          acceptableAnswers: ['should have been published'],
          explanation:
            'Crítica sobre el pasado: los resultados debieron publicarse antes.',
          points: 2,
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'b2-u17-l1-g3',
    type: 'grammar',
    level: 'B2',
    topic: 'Modal passive, have something done',
    difficulty: 'medium',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS,
      grammarPoint: 'have something done = hacer que alguien haga algo por ti',
      questions: [
        {
          id: 'g3-q1',
          type: 'fill-blank',
          question:
            'We ____ the equipment serviced by a specialist last month.',
          options: ['had', 'have', 'got'],
          correctAnswer: 'had',
          acceptableAnswers: ['had', 'got'],
          explanation:
            'Have something done: "had the equipment serviced" = hicimos que un especialista lo revisara.',
          points: 2,
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'b2-u17-l1-g4',
    type: 'grammar',
    level: 'B2',
    topic: 'Modal passive, have something done',
    difficulty: 'medium',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS,
      grammarPoint: 'can be + past participle = posibilidad en pasiva',
      questions: [
        {
          id: 'g4-q1',
          type: 'multiple-choice',
          question:
            'The hypothesis ____ with further research.',
          options: [
            'can be verified',
            'can verify',
            'can be verifying',
          ],
          correctAnswer: 'can be verified',
          explanation:
            'Posibilidad pasiva: la hipótesis puede ser verificada con más investigación.',
          points: 2,
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'b2-u17-l1-g5',
    type: 'grammar',
    level: 'B2',
    topic: 'Modal passive, have something done',
    difficulty: 'medium',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS,
      grammarPoint: 'have something done en presente',
      questions: [
        {
          id: 'g5-q1',
          type: 'fill-blank',
          question:
            'The lab ____ its air filters replaced every six months.',
          options: ['has', 'have', 'gets'],
          correctAnswer: 'has',
          acceptableAnswers: ['has', 'gets'],
          explanation:
            'Have something done: "has its air filters replaced" = hace que le reemplacen los filtros.',
          points: 2,
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'b2-u17-l1-g6',
    type: 'grammar',
    level: 'B2',
    topic: 'Modal passive, have something done',
    difficulty: 'medium',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS,
      grammarPoint: 'might have been + past participle = posibilidad en pasado',
      questions: [
        {
          id: 'g6-q1',
          type: 'fill-blank',
          question:
            'The data ____ incorrectly. We need to run the analysis again.',
          options: [
            'might have been recorded',
            'might be recorded',
            'might have recorded',
          ],
          correctAnswer: 'might have been recorded',
          acceptableAnswers: ['might have been recorded'],
          explanation:
            'Posibilidad en pasado: es posible que los datos se hayan registrado mal.',
          points: 2,
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'b2-u17-l1-g7',
    type: 'grammar',
    level: 'B2',
    topic: 'Modal passive, have something done',
    difficulty: 'medium',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS,
      grammarPoint: 'ought to have been + past participle',
      questions: [
        {
          id: 'g7-q1',
          type: 'fill-blank',
          question:
            'The safety protocols ____ before the experiment started.',
          options: [
            'ought to have been reviewed',
            'ought to be reviewed',
            'ought to have reviewed',
          ],
          correctAnswer: 'ought to have been reviewed',
          acceptableAnswers: ['ought to have been reviewed'],
          explanation:
            'Obligación incumplida en el pasado: los protocolos debieron revisarse antes.',
          points: 2,
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'b2-u17-l1-g8',
    type: 'grammar',
    level: 'B2',
    topic: 'Modal passive, have something done',
    difficulty: 'medium',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS,
      grammarPoint: 'have something done (futuro)',
      questions: [
        {
          id: 'g8-q1',
          type: 'multiple-choice',
          question:
            'We\'re going to ____ the samples analysed at an independent lab.',
          options: [
            'have',
            'make',
            'let',
          ],
          correctAnswer: 'have',
          explanation:
            'Have something done: "have the samples analysed" = hacer que analicen las muestras.',
          points: 2,
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'b2-u17-l1-g9',
    type: 'grammar',
    level: 'B2',
    topic: 'Modal passive, have something done',
    difficulty: 'medium',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS,
      grammarPoint: 'need to be + past participle',
      questions: [
        {
          id: 'g9-q1',
          type: 'fill-blank',
          question:
            'These chemicals ____ in a secure container.',
          options: [
            'need to be stored',
            'need to store',
            'need being stored',
          ],
          correctAnswer: 'need to be stored',
          acceptableAnswers: ['need to be stored'],
          explanation:
            'Necesidad pasiva: los productos químicos necesitan ser almacenados de forma segura.',
          points: 2,
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'b2-u17-l1-g10',
    type: 'grammar',
    level: 'B2',
    topic: 'Modal passive, have something done',
    difficulty: 'medium',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS,
      grammarPoint: 'could have been + past participle',
      questions: [
        {
          id: 'g10-q1',
          type: 'fill-blank',
          question:
            'The breakthrough ____ years ago if we had had better funding.',
          options: [
            'could have been achieved',
            'could be achieved',
            'could have achieved',
          ],
          correctAnswer: 'could have been achieved',
          acceptableAnswers: ['could have been achieved'],
          explanation:
            'Posibilidad no realizada en el pasado: el avance podría haberse logrado antes.',
          points: 2,
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'b2-u17-l1-g11',
    type: 'grammar',
    level: 'B2',
    topic: 'Modal passive, have something done',
    difficulty: 'medium',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS,
      grammarPoint: 'get something done (alternativa informal)',
      questions: [
        {
          id: 'g11-q1',
          type: 'multiple-choice',
          question:
            'I need to ____ my laptop repaired. The battery doesn\'t hold a charge.',
          options: [
            'get',
            'make',
            'let',
          ],
          correctAnswer: 'get',
          explanation:
            '"Get something done" es similar a "have something done": hacer que reparen el portátil.',
          points: 2,
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'b2-u17-l1-g12',
    type: 'grammar',
    level: 'B2',
    topic: 'Modal passive, have something done',
    difficulty: 'medium',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS,
      grammarPoint: 'must have been + past participle',
      questions: [
        {
          id: 'g12-q1',
          type: 'fill-blank',
          question:
            'The specimen ____ under controlled conditions. The results are too consistent.',
          options: [
            'must have been preserved',
            'must be preserved',
            'must have preserved',
          ],
          correctAnswer: 'must have been preserved',
          acceptableAnswers: ['must have been preserved'],
          explanation:
            'Deducción en pasado: los resultados indican que la muestra debió preservarse correctamente.',
          points: 2,
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'b2-u17-l1-g13',
    type: 'grammar',
    level: 'B2',
    topic: 'Modal passive, have something done',
    difficulty: 'medium',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS,
      grammarPoint: 'should be + past participle',
      questions: [
        {
          id: 'g13-q1',
          type: 'fill-blank',
          question:
            'All findings ____ in a peer-reviewed journal.',
          options: [
            'should be published',
            'should have been published',
            'should publish',
          ],
          correctAnswer: 'should be published',
          acceptableAnswers: ['should be published'],
          explanation:
            'Recomendación en presente: los hallazgos deberían publicarse en una revista revisada.',
          points: 2,
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'b2-u17-l1-g14',
    type: 'grammar',
    level: 'B2',
    topic: 'Modal passive, have something done',
    difficulty: 'medium',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS,
      grammarPoint: 'have something done (negativo)',
      questions: [
        {
          id: 'g14-q1',
          type: 'multiple-choice',
          question:
            'We haven\'t ____ the software updated yet. It\'s still running the old version.',
          options: [
            'had',
            'have',
            'got',
          ],
          correctAnswer: 'had',
          explanation:
            'Have something done en presente perfecto negativo: no hemos hecho que actualicen el software.',
          points: 2,
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'b2-u17-l1-g15',
    type: 'grammar',
    level: 'B2',
    topic: 'Modal passive, have something done',
    difficulty: 'medium',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS,
      grammarPoint: 'may have been + past participle',
      questions: [
        {
          id: 'g15-q1',
          type: 'fill-blank',
          question:
            'The contamination ____ during the transfer. We\'re investigating.',
          options: [
            'may have been introduced',
            'may be introduced',
            'may have introduced',
          ],
          correctAnswer: 'may have been introduced',
          acceptableAnswers: ['may have been introduced'],
          explanation:
            'Posibilidad en pasado: la contaminación pudo haberse introducido durante el traslado.',
          points: 2,
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'b2-u17-l1-g16',
    type: 'grammar',
    level: 'B2',
    topic: 'Modal passive, have something done',
    difficulty: 'medium',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS,
      grammarPoint: 'have to be + past participle',
      questions: [
        {
          id: 'g16-q1',
          type: 'fill-blank',
          question:
            'All procedures ____ by the ethics committee before we can proceed.',
          options: [
            'have to be approved',
            'have to approve',
            'have to been approved',
          ],
          correctAnswer: 'have to be approved',
          acceptableAnswers: ['have to be approved'],
          explanation:
            'Obligación externa: los procedimientos tienen que ser aprobados por el comité.',
          points: 2,
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'b2-u17-l1-g17',
    type: 'grammar',
    level: 'B2',
    topic: 'Modal passive, have something done',
    difficulty: 'medium',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS,
      grammarPoint: 'have something done (pregunta)',
      questions: [
        {
          id: 'g17-q1',
          type: 'multiple-choice',
          question:
            'How often do you ____ your lab equipment calibrated?',
          options: [
            'have',
            'make',
            'let',
          ],
          correctAnswer: 'have',
          explanation:
            'Have something done en pregunta: ¿con qué frecuencia haces calibrar el equipo?',
          points: 2,
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'b2-u17-l1-g18',
    type: 'grammar',
    level: 'B2',
    topic: 'Modal passive, have something done',
    difficulty: 'medium',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS,
      grammarPoint: 'Resumen: modal passive y have something done',
      questions: [
        {
          id: 'g18-q1',
          type: 'fill-blank',
          question:
            'The research ____ by next Friday. The deadline is strict.',
          options: [
            'must be completed',
            'must have been completed',
            'must complete',
          ],
          correctAnswer: 'must be completed',
          acceptableAnswers: ['must be completed'],
          explanation:
            'Obligación en presente/futuro: la investigación debe completarse antes del viernes.',
          points: 2,
        },
      ],
    },
    topicName: 'Grammar',
  },
];
