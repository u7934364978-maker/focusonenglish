/**
 * Unidad 15 B2 — Lección 6: Expresión escrita (Repaso 11–14)
 * 18 ejercicios (B2: más vocabulario y complejidad que B1)
 */

import { Exercise } from '@/lib/exercise-generator';

const LESSON_TITLE = '[[Writing|Expresión escrita]]';

export const UNIT_15_LESSON_6_WRITING: Exercise[] = [
  {
    id: 'b2-u15-l6-w1',
    type: 'writing',
    level: 'B2',
    topic: 'Review',
    difficulty: 'medium',
    content: {
      title: LESSON_TITLE,
      instructions:
        'Escribe 3–4 frases describiendo un festival o evento cultural usando al menos 2 oraciones de relativo (who, which, where).',
      prompt:
        'Describe a cultural festival or event. Include:\n- people who take part\n- places where it happens\n- things which make it special',
      targetLevel: 'B2',
      writingType: 'description',
      targetLength: '3-4 frases',
    },
    topicName: 'Writing',
  },
  {
    id: 'b2-u15-l6-w2',
    type: 'fill-blank',
    level: 'B2',
    topic: 'Review',
    difficulty: 'medium',
    content: {
      title: LESSON_TITLE,
      instructions: 'Completa con el relativo correcto: who, which, where o whose.',
      questions: [
        {
          question:
            'The festival ____ we celebrate every August is the most important event of the year.',
          options: ['which', 'who', 'where'],
          correctAnswer: 'which',
          acceptableAnswers: ['which', 'that'],
          explanation:
            'Se refiere al festival (cosa) en una defining relative clause → "which" o "that".',
        },
      ],
    },
    topicName: 'Writing',
  },
  {
    id: 'b2-u15-l6-w3',
    type: 'writing',
    level: 'B2',
    topic: 'Review',
    difficulty: 'medium',
    content: {
      title: LESSON_TITLE,
      instructions:
        'Reescribe la frase usando un modal de deducción: "I\'m sure they signed the contract."',
      prompt: 'Use "must have" to express the same idea.',
      expressionHint: 'They must have signed the contract.',
      targetLength: '1 frase',
    },
    topicName: 'Writing',
  },
  {
    id: 'b2-u15-l6-w4',
    type: 'writing',
    level: 'B2',
    topic: 'Review',
    difficulty: 'medium',
    content: {
      title: LESSON_TITLE,
      instructions:
        'Escribe 2 frases: una con "have to" y otra con "needn\'t" sobre obligaciones en tu vida.',
      prompt:
        'Write two sentences about obligations in your life:\n- something you have to do\n- something you needn\'t do',
      targetLength: '2 frases',
    },
    topicName: 'Writing',
  },
  {
    id: 'b2-u15-l6-w5',
    type: 'fill-blank',
    level: 'B2',
    topic: 'Review',
    difficulty: 'medium',
    content: {
      title: LESSON_TITLE,
      instructions: 'Completa con must have, might have o can\'t have.',
      questions: [
        {
          question:
            'She ____ missed the meeting. I saw her in the conference room at 9 am.',
          options: ["can't have", 'must have', 'might have'],
          correctAnswer: "can't have",
          acceptableAnswers: ["can't have"],
          explanation:
            'Imposibilidad: la vi en la sala de reuniones, así que no pudo haber faltado.',
        },
      ],
    },
    topicName: 'Writing',
  },
  {
    id: 'b2-u15-l6-w6',
    type: 'writing',
    level: 'B2',
    topic: 'Review',
    difficulty: 'medium',
    content: {
      title: LESSON_TITLE,
      instructions:
        'Une las dos frases en una usando una non-defining relative clause.',
      prompt:
        'I grew up in a small village. The village is famous for its traditional dances.',
      expressionHint: 'Usa: "The village, which ... , is ..."',
      targetLength: '1-2 frases',
    },
    topicName: 'Writing',
  },
  {
    id: 'b2-u15-l6-w7',
    type: 'writing',
    level: 'B2',
    topic: 'Review',
    difficulty: 'medium',
    content: {
      title: LESSON_TITLE,
      instructions:
        'Completa las frases con ideas propias usando oraciones de relativo y modales.',
      prompt:
        'Finish these sentences:\n1. The person who...\n2. The deal must have...\n3. You needn\'t...',
      targetLength: '3-4 frases',
    },
    topicName: 'Writing',
  },
  {
    id: 'b2-u15-l6-w8',
    type: 'fill-blank',
    level: 'B2',
    topic: 'Review',
    difficulty: 'medium',
    content: {
      title: LESSON_TITLE,
      instructions: 'Completa con who, which, where o whose.',
      questions: [
        {
          question:
            'The writer ____ novels explore identity won an important prize.',
          options: ['whose', 'who', 'which'],
          correctAnswer: 'whose',
          acceptableAnswers: ['whose'],
          explanation: '"Whose" expresa posesión: son sus novelas.',
        },
      ],
    },
    topicName: 'Writing',
  },
  {
    id: 'b2-u15-l6-w9',
    type: 'writing',
    level: 'B2',
    topic: 'Review',
    difficulty: 'medium',
    content: {
      title: LESSON_TITLE,
      instructions:
        'Escribe la introducción de un artículo (40–60 palabras) sobre un festival cultural o un negocio exitoso.',
      prompt:
        'Write an introduction to an article about a cultural festival or a successful business. Use vocabulary from units 11-14.',
      writingType: 'article',
      targetLength: '40-60 palabras',
    },
    topicName: 'Writing',
  },
  {
    id: 'b2-u15-l6-w10',
    type: 'writing',
    level: 'B2',
    topic: 'Review',
    difficulty: 'medium',
    content: {
      title: LESSON_TITLE,
      instructions:
        'Escribe 2–3 frases explicando por qué es importante preservar las tradiciones culturales.',
      prompt:
        'Explain why cultural heritage, which includes festivals and traditions, should be preserved.',
      targetLength: '2-3 frases',
    },
    topicName: 'Writing',
  },
  {
    id: 'b2-u15-l6-w11',
    type: 'fill-blank',
    level: 'B2',
    topic: 'Review',
    difficulty: 'medium',
    content: {
      title: LESSON_TITLE,
      instructions: 'Completa con had to, must o need to.',
      questions: [
        {
          question:
            'She ____ work overtime last week because of the audit.',
          options: ['had to', 'must', 'need to'],
          correctAnswer: 'had to',
          acceptableAnswers: ['had to'],
          explanation:
            'Obligación en pasado: solo "had to" (must no tiene pasado).',
        },
      ],
    },
    topicName: 'Writing',
  },
  {
    id: 'b2-u15-l6-w12',
    type: 'writing',
    level: 'B2',
    topic: 'Review',
    difficulty: 'medium',
    content: {
      title: LESSON_TITLE,
      instructions:
        'Reescribe usando una cláusula de relativo reducida: "The documentary which is shown late at night explores social media."',
      prompt: 'Start with: "The documentary..."',
      expressionHint: 'The documentary shown late at night explores social media.',
      targetLength: '1 frase',
    },
    topicName: 'Writing',
  },
  {
    id: 'b2-u15-l6-w13',
    type: 'writing',
    level: 'B2',
    topic: 'Review',
    difficulty: 'medium',
    content: {
      title: LESSON_TITLE,
      instructions:
        'Escribe 3 frases: una con who, una con which/that y una con must have o might have.',
      prompt:
        'Write three sentences about culture or business:\n- one with "who"\n- one with "which/that"\n- one with "must have" or "might have"',
      targetLength: '3 frases',
    },
    topicName: 'Writing',
  },
  {
    id: 'b2-u15-l6-w14',
    type: 'fill-blank',
    level: 'B2',
    topic: 'Review',
    difficulty: 'medium',
    content: {
      title: LESSON_TITLE,
      instructions: 'Completa con mustn\'t, needn\'t o don\'t have to.',
      questions: [
        {
          question:
            'You ____ tell anyone your PIN. Keep it secret.',
          options: ['mustn\'t', 'needn\'t', 'don\'t have to'],
          correctAnswer: 'mustn\'t',
          acceptableAnswers: ['mustn\'t'],
          explanation: 'Prohibición: "mustn\'t" = no debes.',
        },
      ],
    },
    topicName: 'Writing',
  },
  {
    id: 'b2-u15-l6-w15',
    type: 'writing',
    level: 'B2',
    topic: 'Review',
    difficulty: 'medium',
    content: {
      title: LESSON_TITLE,
      instructions:
        'Escribe un breve texto (aprox. 60–80 palabras) sobre cómo ahorrar para una experiencia cultural.',
      prompt:
        'Explain how someone can save money to attend a festival, concert, or cultural event. Use vocabulary: budget, savings, target, prioritise.',
      targetLength: '60-80 palabras',
    },
    topicName: 'Writing',
  },
  {
    id: 'b2-u15-l6-w16',
    type: 'writing',
    level: 'B2',
    topic: 'Review',
    difficulty: 'medium',
    content: {
      title: LESSON_TITLE,
      instructions:
        'Escribe 2–3 frases especulando sobre qué pudo haber pasado en una negociación empresarial.',
      prompt:
        'Use must have, might have, and can\'t have to speculate about what happened in a business negotiation.',
      targetLength: '2-3 frases',
    },
    topicName: 'Writing',
  },
  {
    id: 'b2-u15-l6-w17',
    type: 'fill-blank',
    level: 'B2',
    topic: 'Review',
    difficulty: 'medium',
    content: {
      title: LESSON_TITLE,
      instructions: 'Completa con la forma reducida correcta (-ing o -ed).',
      questions: [
        {
          question:
            'The tickets ____ online are cheaper than the ones at the cinema.',
          options: ['bought', 'which bought', 'buying'],
          correctAnswer: 'bought',
          acceptableAnswers: ['bought'],
          explanation:
            'Reducción de "tickets which are bought online" → "tickets bought online".',
        },
      ],
    },
    topicName: 'Writing',
  },
  {
    id: 'b2-u15-l6-w18',
    type: 'writing',
    level: 'B2',
    topic: 'Review',
    difficulty: 'medium',
    content: {
      title: LESSON_TITLE,
      instructions:
        'Redacta la conclusión de un artículo (40–60 palabras) sobre la importancia de la cultura y los negocios.',
      prompt:
        'Write a short conclusion explaining why both cultural experiences and good financial planning are important in life.',
      targetLength: '40-60 palabras',
    },
    topicName: 'Writing',
  },
];
