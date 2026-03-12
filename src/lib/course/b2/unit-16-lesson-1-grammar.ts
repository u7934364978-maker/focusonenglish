/**
 * Unidad 16 B2 — Lección 1: Gramática (Passive: all tenses)
 * 18 ejercicios (B2: más vocabulario y complejidad que B1)
 */

import { Exercise } from '@/lib/exercise-generator';

const LESSON_TITLE = '[[Grammar|Gramática]]: [[Passive (all tenses)|Passive (all tenses)]]';
const INSTRUCTIONS =
  'Elige la forma pasiva correcta según el tiempo verbal indicado.';

export const UNIT_16_LESSON_1_GRAMMAR: Exercise[] = [
  {
    id: 'b2-u16-l1-g1',
    type: 'grammar',
    level: 'B2',
    topic: 'Passive (all tenses)',
    difficulty: 'medium',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS,
      grammarPoint: 'Present simple passive',
      questions: [
        {
          id: 'g1-q1',
          type: 'fill-blank',
          question:
            'Millions of emails ____ every day.',
          options: ['are sent', 'is sent', 'send'],
          correctAnswer: 'are sent',
          acceptableAnswers: ['are sent'],
          explanation:
            'Present simple passive: be + past participle. "Emails" es plural → "are sent".',
          points: 2,
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'b2-u16-l1-g2',
    type: 'grammar',
    level: 'B2',
    topic: 'Passive (all tenses)',
    difficulty: 'medium',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS,
      grammarPoint: 'Past simple passive',
      questions: [
        {
          id: 'g2-q1',
          type: 'fill-blank',
          question:
            'The first smartphone ____ in 2007.',
          options: ['was released', 'were released', 'released'],
          correctAnswer: 'was released',
          acceptableAnswers: ['was released'],
          explanation:
            'Past simple passive: was/were + past participle. "Smartphone" es singular → "was released".',
          points: 2,
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'b2-u16-l1-g3',
    type: 'grammar',
    level: 'B2',
    topic: 'Passive (all tenses)',
    difficulty: 'medium',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS,
      grammarPoint: 'Present continuous passive',
      questions: [
        {
          id: 'g3-q1',
          type: 'fill-blank',
          question:
            'A new app ____ by our team at the moment.',
          options: ['is being developed', 'is developed', 'develops'],
          correctAnswer: 'is being developed',
          acceptableAnswers: ['is being developed'],
          explanation:
            'Present continuous passive: am/is/are + being + past participle.',
          points: 2,
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'b2-u16-l1-g4',
    type: 'grammar',
    level: 'B2',
    topic: 'Passive (all tenses)',
    difficulty: 'medium',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS,
      grammarPoint: 'Present perfect passive',
      questions: [
        {
          id: 'g4-q1',
          type: 'fill-blank',
          question:
            'The software ____ by thousands of users since its launch.',
          options: ['has been downloaded', 'have been downloaded', 'was downloaded'],
          correctAnswer: 'has been downloaded',
          acceptableAnswers: ['has been downloaded'],
          explanation:
            'Present perfect passive: has/have + been + past participle. "Software" es singular → "has been".',
          points: 2,
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'b2-u16-l1-g5',
    type: 'grammar',
    level: 'B2',
    topic: 'Passive (all tenses)',
    difficulty: 'medium',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS,
      grammarPoint: 'Future passive',
      questions: [
        {
          id: 'g5-q1',
          type: 'fill-blank',
          question:
            'The new feature ____ in the next update.',
          options: ['will be included', 'will include', 'is included'],
          correctAnswer: 'will be included',
          acceptableAnswers: ['will be included'],
          explanation:
            'Future passive: will + be + past participle.',
          points: 2,
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'b2-u16-l1-g6',
    type: 'grammar',
    level: 'B2',
    topic: 'Passive (all tenses)',
    difficulty: 'medium',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS,
      grammarPoint: 'Past perfect passive',
      questions: [
        {
          id: 'g6-q1',
          type: 'fill-blank',
          question:
            'The data ____ before the server crashed.',
          options: ['had been backed up', 'has been backed up', 'was backed up'],
          correctAnswer: 'had been backed up',
          acceptableAnswers: ['had been backed up'],
          explanation:
            'Past perfect passive: had + been + past participle (acción anterior a otra en el pasado).',
          points: 2,
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'b2-u16-l1-g7',
    type: 'grammar',
    level: 'B2',
    topic: 'Passive (all tenses)',
    difficulty: 'medium',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS,
      grammarPoint: 'Present simple passive',
      questions: [
        {
          id: 'g7-q1',
          type: 'fill-blank',
          question:
            'Personal information ____ securely on our servers.',
          options: ['is stored', 'are stored', 'stores'],
          correctAnswer: 'is stored',
          acceptableAnswers: ['is stored'],
          explanation:
            '"Information" es incontable → singular → "is stored".',
          points: 2,
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'b2-u16-l1-g8',
    type: 'grammar',
    level: 'B2',
    topic: 'Passive (all tenses)',
    difficulty: 'medium',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS,
      grammarPoint: 'Past continuous passive',
      questions: [
        {
          id: 'g8-q1',
          type: 'fill-blank',
          question:
            'The website ____ when we tried to access it yesterday.',
          options: ['was being updated', 'was updated', 'is being updated'],
          correctAnswer: 'was being updated',
          acceptableAnswers: ['was being updated'],
          explanation:
            'Past continuous passive: was/were + being + past participle.',
          points: 2,
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'b2-u16-l1-g9',
    type: 'grammar',
    level: 'B2',
    topic: 'Passive (all tenses)',
    difficulty: 'medium',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS,
      grammarPoint: 'Present perfect passive',
      questions: [
        {
          id: 'g9-q1',
          type: 'fill-blank',
          question:
            'Many jobs ____ by automation in recent years.',
          options: ['have been replaced', 'has been replaced', 'were replaced'],
          correctAnswer: 'have been replaced',
          acceptableAnswers: ['have been replaced'],
          explanation:
            '"Jobs" es plural → "have been replaced". "In recent years" indica present perfect.',
          points: 2,
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'b2-u16-l1-g10',
    type: 'grammar',
    level: 'B2',
    topic: 'Passive (all tenses)',
    difficulty: 'medium',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS,
      grammarPoint: 'Future passive with going to',
      questions: [
        {
          id: 'g10-q1',
          type: 'fill-blank',
          question:
            'The old system ____ by a more efficient one next month.',
          options: ['is going to be replaced', 'is going to replace', 'will replace'],
          correctAnswer: 'is going to be replaced',
          acceptableAnswers: ['is going to be replaced'],
          explanation:
            'Future passive: is/are + going to + be + past participle.',
          points: 2,
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'b2-u16-l1-g11',
    type: 'grammar',
    level: 'B2',
    topic: 'Passive (all tenses)',
    difficulty: 'medium',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS,
      grammarPoint: 'Past simple passive',
      questions: [
        {
          id: 'g11-q1',
          type: 'fill-blank',
          question:
            'The first computer virus ____ in 1986.',
          options: ['was created', 'was create', 'created'],
          correctAnswer: 'was created',
          acceptableAnswers: ['was created'],
          explanation:
            'Past simple passive: was + past participle.',
          points: 2,
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'b2-u16-l1-g12',
    type: 'grammar',
    level: 'B2',
    topic: 'Passive (all tenses)',
    difficulty: 'medium',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS,
      grammarPoint: 'Present simple passive',
      questions: [
        {
          id: 'g12-q1',
          type: 'fill-blank',
          question:
            'Updates ____ automatically every night.',
          options: ['are installed', 'is installed', 'install'],
          correctAnswer: 'are installed',
          acceptableAnswers: ['are installed'],
          explanation:
            '"Updates" es plural → "are installed".',
          points: 2,
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'b2-u16-l1-g13',
    type: 'grammar',
    level: 'B2',
    topic: 'Passive (all tenses)',
    difficulty: 'medium',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS,
      grammarPoint: 'Present perfect passive',
      questions: [
        {
          id: 'g13-q1',
          type: 'fill-blank',
          question:
            'The bug ____ by our developers. You can use the app now.',
          options: ['has been fixed', 'have been fixed', 'was fixed'],
          correctAnswer: 'has been fixed',
          acceptableAnswers: ['has been fixed'],
          explanation:
            'Present perfect: resultado reciente (ya puedes usar la app).',
          points: 2,
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'b2-u16-l1-g14',
    type: 'grammar',
    level: 'B2',
    topic: 'Passive (all tenses)',
    difficulty: 'medium',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS,
      grammarPoint: 'Past simple passive',
      questions: [
        {
          id: 'g14-q1',
          type: 'fill-blank',
          question:
            'The internet ____ for military purposes in the 1960s.',
          options: ['was developed', 'was develop', 'developed'],
          correctAnswer: 'was developed',
          acceptableAnswers: ['was developed'],
          explanation:
            'Past simple passive: was + past participle.',
          points: 2,
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'b2-u16-l1-g15',
    type: 'grammar',
    level: 'B2',
    topic: 'Passive (all tenses)',
    difficulty: 'medium',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS,
      grammarPoint: 'Present continuous passive',
      questions: [
        {
          id: 'g15-q1',
          type: 'fill-blank',
          question:
            'Your password ____. Please wait a moment.',
          options: ['is being reset', 'is reset', 'resets'],
          correctAnswer: 'is being reset',
          acceptableAnswers: ['is being reset'],
          explanation:
            'Present continuous passive: acción en curso ahora.',
          points: 2,
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'b2-u16-l1-g16',
    type: 'grammar',
    level: 'B2',
    topic: 'Passive (all tenses)',
    difficulty: 'medium',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS,
      grammarPoint: 'Future passive',
      questions: [
        {
          id: 'g16-q1',
          type: 'fill-blank',
          question:
            'The new devices ____ to customers by the end of the year.',
          options: ['will be delivered', 'will deliver', 'are delivered'],
          correctAnswer: 'will be delivered',
          acceptableAnswers: ['will be delivered'],
          explanation:
            'Future passive: will + be + past participle.',
          points: 2,
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'b2-u16-l1-g17',
    type: 'grammar',
    level: 'B2',
    topic: 'Passive (all tenses)',
    difficulty: 'medium',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS,
      grammarPoint: 'Past perfect passive',
      questions: [
        {
          id: 'g17-q1',
          type: 'fill-blank',
          question:
            'The files ____ by the time we realised the problem.',
          options: ['had already been deleted', 'have already been deleted', 'were already deleted'],
          correctAnswer: 'had already been deleted',
          acceptableAnswers: ['had already been deleted'],
          explanation:
            'Past perfect: acción completada antes de "we realised".',
          points: 2,
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'b2-u16-l1-g18',
    type: 'grammar',
    level: 'B2',
    topic: 'Passive (all tenses)',
    difficulty: 'medium',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS,
      grammarPoint: 'Resumen: passive en distintos tiempos',
      questions: [
        {
          id: 'g18-q1',
          type: 'fill-blank',
          question:
            'Artificial intelligence ____ in many industries today.',
          options: ['is being used', 'is used', 'uses'],
          correctAnswer: 'is being used',
          acceptableAnswers: ['is being used', 'is used'],
          explanation:
            'Ambas son correctas: "is used" (habitud) o "is being used" (en curso). "Is being used" enfatiza progreso actual.',
          points: 2,
        },
      ],
    },
    topicName: 'Grammar',
  },
];
