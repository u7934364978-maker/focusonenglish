/**
 * Unidad 15 B2 — Lección 1: Gramática (Repaso 11–14: relative clauses, modals, modal deduction)
 * 18 ejercicios (B2: más vocabulario y complejidad que B1)
 */

import { Exercise } from '@/lib/exercise-generator';

const LESSON_TITLE = '[[Grammar|Gramática]]: [[Repaso 11–14|Repaso 11–14]]';
const INSTRUCTIONS =
  'Repaso de oraciones de relativo, modales (must, have to, need to, needn\'t) y modales de deducción (must have, might have, can\'t have).';

export const UNIT_15_LESSON_1_GRAMMAR: Exercise[] = [
  {
    id: 'b2-u15-l1-g1',
    type: 'grammar',
    level: 'B2',
    topic: 'Repaso 11–14',
    difficulty: 'medium',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS,
      grammarPoint: 'Relative clauses: who/which/that/where',
      questions: [
        {
          id: 'g1-q1',
          type: 'fill-blank',
          question:
            'The festival ____ takes place every summer attracts thousands of visitors.',
          options: ['which', 'who', 'where'],
          correctAnswer: 'which',
          acceptableAnswers: ['which', 'that'],
          explanation:
            'Con cosas (festival) usamos "which" o "that" en defining relative clauses.',
          points: 2,
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'b2-u15-l1-g2',
    type: 'grammar',
    level: 'B2',
    topic: 'Repaso 11–14',
    difficulty: 'medium',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS,
      grammarPoint: 'Modals: must, have to, need to',
      questions: [
        {
          id: 'g2-q1',
          type: 'fill-blank',
          question:
            'You ____ pay your bills on time if you want to avoid late fees.',
          options: ['must', 'needn\'t', 'don\'t have to'],
          correctAnswer: 'must',
          acceptableAnswers: ['must', 'have to', 'need to'],
          explanation: 'Obligación fuerte: pagar a tiempo.',
          points: 2,
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'b2-u15-l1-g3',
    type: 'grammar',
    level: 'B2',
    topic: 'Repaso 11–14',
    difficulty: 'medium',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS,
      grammarPoint: 'Modal verbs of deduction',
      questions: [
        {
          id: 'g3-q1',
          type: 'fill-blank',
          question:
            'She ____ missed the meeting. I saw her in the office at 9 am.',
          options: ["can't have", 'must have', 'might have'],
          correctAnswer: "can't have",
          acceptableAnswers: ["can't have"],
          explanation:
            'Imposibilidad: la vi en la oficina, así que no pudo haber faltado.',
          points: 2,
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'b2-u15-l1-g4',
    type: 'grammar',
    level: 'B2',
    topic: 'Repaso 11–14',
    difficulty: 'medium',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS,
      grammarPoint: 'Non-defining relative clauses',
      questions: [
        {
          id: 'g4-q1',
          type: 'multiple-choice',
          question:
            'My brother, ____ lives in Canada, is coming to visit us next month.',
          options: ['who', 'which', 'that'],
          correctAnswer: 'who',
          explanation:
            'Non-defining con personas: "who" entre comas. "That" no se usa en non-defining.',
          points: 2,
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'b2-u15-l1-g5',
    type: 'grammar',
    level: 'B2',
    topic: 'Repaso 11–14',
    difficulty: 'medium',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS,
      grammarPoint: 'needn\'t / don\'t need to',
      questions: [
        {
          id: 'g5-q1',
          type: 'fill-blank',
          question:
            'You ____ worry about the transfer; I\'ve already paid it.',
          options: ['needn\'t', 'must', 'have to'],
          correctAnswer: 'needn\'t',
          acceptableAnswers: ['needn\'t', 'don\'t need to', 'don\'t have to'],
          explanation: 'Ausencia de necesidad: ya está pagado.',
          points: 2,
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'b2-u15-l1-g6',
    type: 'grammar',
    level: 'B2',
    topic: 'Repaso 11–14',
    difficulty: 'medium',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS,
      grammarPoint: 'Relative clauses: whose',
      questions: [
        {
          id: 'g6-q1',
          type: 'fill-blank',
          question:
            'The writer ____ novels explore identity won an important prize.',
          options: ['whose', 'who', 'which'],
          correctAnswer: 'whose',
          acceptableAnswers: ['whose'],
          explanation: '"Whose" expresa posesión: son sus novelas.',
          points: 2,
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'b2-u15-l1-g7',
    type: 'grammar',
    level: 'B2',
    topic: 'Repaso 11–14',
    difficulty: 'medium',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS,
      grammarPoint: 'Modal verbs of deduction: must have',
      questions: [
        {
          id: 'g7-q1',
          type: 'fill-blank',
          question:
            'The deal ____ been successful. Both companies have announced the partnership.',
          options: ['must have', 'might have', "can't have"],
          correctAnswer: 'must have',
          acceptableAnswers: ['must have'],
          explanation: 'Certeza: el anuncio indica que el acuerdo fue exitoso.',
          points: 2,
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'b2-u15-l1-g8',
    type: 'grammar',
    level: 'B2',
    topic: 'Repaso 11–14',
    difficulty: 'medium',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS,
      grammarPoint: 'had to (obligación en pasado)',
      questions: [
        {
          id: 'g8-q1',
          type: 'fill-blank',
          question:
            'She ____ work overtime last week because of the audit.',
          options: ['had to', 'must', 'need to'],
          correctAnswer: 'had to',
          acceptableAnswers: ['had to'],
          explanation: 'Obligación en pasado: solo "had to" (must no tiene pasado).',
          points: 2,
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'b2-u15-l1-g9',
    type: 'grammar',
    level: 'B2',
    topic: 'Repaso 11–14',
    difficulty: 'medium',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS,
      grammarPoint: 'Relative clauses: where',
      questions: [
        {
          id: 'g9-q1',
          type: 'fill-blank',
          question:
            'We went back to the city ____ we first met during the Erasmus programme.',
          options: ['where', 'which', 'when'],
          correctAnswer: 'where',
          acceptableAnswers: ['where'],
          explanation: 'Lugar donde nos conocimos → "where".',
          points: 2,
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'b2-u15-l1-g10',
    type: 'grammar',
    level: 'B2',
    topic: 'Repaso 11–14',
    difficulty: 'medium',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS,
      grammarPoint: 'Reduced relative clauses',
      questions: [
        {
          id: 'g10-q1',
          type: 'multiple-choice',
          question:
            'The actor ____ in the new series is from my hometown.',
          options: ['starring', 'who is starring', 'who starring'],
          correctAnswer: 'starring',
          explanation:
            'Forma reducida de "the actor who is starring" → "the actor starring".',
          points: 2,
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'b2-u15-l1-g11',
    type: 'grammar',
    level: 'B2',
    topic: 'Repaso 11–14',
    difficulty: 'medium',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS,
      grammarPoint: 'might have (posibilidad en pasado)',
      questions: [
        {
          id: 'g11-q1',
          type: 'fill-blank',
          question:
            'The client ____ changed their mind. They haven\'t responded for a week.',
          options: ['might have', 'must have', "can't have"],
          correctAnswer: 'might have',
          acceptableAnswers: ['might have', 'may have'],
          explanation: 'Posibilidad: no hay certeza.',
          points: 2,
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'b2-u15-l1-g12',
    type: 'grammar',
    level: 'B2',
    topic: 'Repaso 11–14',
    difficulty: 'medium',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS,
      grammarPoint: 'mustn\'t (prohibición)',
      questions: [
        {
          id: 'g12-q1',
          type: 'fill-blank',
          question:
            'You ____ tell anyone your PIN. Keep it secret.',
          options: ['mustn\'t', 'needn\'t', 'don\'t have to'],
          correctAnswer: 'mustn\'t',
          acceptableAnswers: ['mustn\'t'],
          explanation: 'Prohibición: "mustn\'t" = no debes.',
          points: 2,
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'b2-u15-l1-g13',
    type: 'grammar',
    level: 'B2',
    topic: 'Repaso 11–14',
    difficulty: 'medium',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS,
      grammarPoint: 'Omisión del relativo (object)',
      questions: [
        {
          id: 'g13-q1',
          type: 'multiple-choice',
          question:
            'In which sentence can the relative pronoun be omitted?',
          options: [
            'The film (which) we watched last night was hilarious.',
            'The singer who wrote this song is from Brazil.',
            'The festival which takes place in August is famous.',
          ],
          correctAnswer: 'The film (which) we watched last night was hilarious.',
          explanation:
            'Cuando el relativo es objeto ("which we watched"), se puede omitir.',
          points: 2,
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'b2-u15-l1-g14',
    type: 'grammar',
    level: 'B2',
    topic: 'Repaso 11–14',
    difficulty: 'medium',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS,
      grammarPoint: 'need to (necesidad)',
      questions: [
        {
          id: 'g14-q1',
          type: 'fill-blank',
          question:
            'To open a savings account, you ____ provide proof of identity.',
          options: ['need to', 'needn\'t', 'mustn\'t'],
          correctAnswer: 'need to',
          acceptableAnswers: ['need to', 'must', 'have to'],
          explanation: 'Necesidad: es necesario para abrir la cuenta.',
          points: 2,
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'b2-u15-l1-g15',
    type: 'grammar',
    level: 'B2',
    topic: 'Repaso 11–14',
    difficulty: 'medium',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS,
      grammarPoint: 'can\'t have (imposibilidad)',
      questions: [
        {
          id: 'g15-q1',
          type: 'fill-blank',
          question:
            'He ____ forgotten the presentation. He prepared it for three weeks.',
          options: ["can't have", 'must have', 'might have'],
          correctAnswer: "can't have",
          acceptableAnswers: ["can't have"],
          explanation: 'Imposibilidad: lo preparó durante tres semanas.',
          points: 2,
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'b2-u15-l1-g16',
    type: 'grammar',
    level: 'B2',
    topic: 'Repaso 11–14',
    difficulty: 'medium',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS,
      grammarPoint: 'Defining vs non-defining',
      questions: [
        {
          id: 'g16-q1',
          type: 'multiple-choice',
          question:
            'Students who study regularly tend to get better results.',
          options: ['Defining relative clause', 'Non-defining relative clause'],
          correctAnswer: 'Defining relative clause',
          explanation:
            'La cláusula define qué estudiantes; no lleva comas.',
          points: 2,
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'b2-u15-l1-g17',
    type: 'grammar',
    level: 'B2',
    topic: 'Repaso 11–14',
    difficulty: 'medium',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS,
      grammarPoint: 'Reduced relative: -ed participle',
      questions: [
        {
          id: 'g17-q1',
          type: 'fill-blank',
          question:
            'The tickets ____ online are cheaper than the ones at the cinema.',
          options: ['bought', 'which bought', 'buying'],
          correctAnswer: 'bought',
          acceptableAnswers: ['bought'],
          explanation:
            'Reducción de "tickets which are bought online" → "tickets bought online".',
          points: 2,
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'b2-u15-l1-g18',
    type: 'grammar',
    level: 'B2',
    topic: 'Repaso 11–14',
    difficulty: 'medium',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS,
      grammarPoint: 'Resumen repaso',
      questions: [
        {
          id: 'g18-q1',
          type: 'fill-blank',
          question:
            'The investors ____ been impressed. They\'ve decided to increase their funding.',
          options: ['must have', 'might have', "can't have"],
          correctAnswer: 'must have',
          acceptableAnswers: ['must have'],
          explanation:
            'Certeza: aumentar la financiación indica que quedaron impresionados.',
          points: 2,
        },
      ],
    },
    topicName: 'Grammar',
  },
];
