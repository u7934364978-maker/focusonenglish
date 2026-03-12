/**
 * Unidad 14 B2 — Lección 6: Expresión escrita (Business)
 * 18 ejercicios (B2: más vocabulario y complejidad que B1)
 */

import { Exercise } from '@/lib/exercise-generator';

const LESSON_TITLE = '[[Writing|Expresión escrita]]';

export const UNIT_14_LESSON_6_WRITING: Exercise[] = [
  {
    id: 'b2-u14-l6-w1',
    type: 'writing',
    level: 'B2',
    topic: 'Business',
    difficulty: 'medium',
    content: {
      title: LESSON_TITLE,
      instructions:
        'Escribe 3–4 frases describiendo una situación empresarial usando al menos 2 modales de deducción (must have, might have, can\'t have).',
      prompt:
        'Describe a business situation (e.g. a successful deal, a failed project). Use modal verbs of deduction to speculate about what happened.',
      targetLevel: 'B2',
      writingType: 'description',
      targetLength: '3-4 frases',
    },
    topicName: 'Writing',
  },
  {
    id: 'b2-u14-l6-w2',
    type: 'fill-blank',
    level: 'B2',
    topic: 'Business',
    difficulty: 'medium',
    content: {
      title: LESSON_TITLE,
      instructions:
        'Completa con el modal de deducción correcto: must have, might have o can\'t have.',
      questions: [
        {
          question:
            'The client ____ changed their mind. They were very positive in our last meeting.',
          options: ['might have', 'must have', "can't have"],
          correctAnswer: 'might have',
          acceptableAnswers: ['might have', 'may have'],
          explanation:
            'Posibilidad: no hay certeza; "might have" expresa que es posible que hayan cambiado de opinión.',
        },
      ],
    },
    topicName: 'Writing',
  },
  {
    id: 'b2-u14-l6-w3',
    type: 'writing',
    level: 'B2',
    topic: 'Business',
    difficulty: 'medium',
    content: {
      title: LESSON_TITLE,
      instructions:
        'Reescribe la frase usando un modal de deducción en pasado.',
      prompt:
        'Rewrite: "I\'m sure they signed the contract." → Use "must have"',
      expressionHint: 'They must have signed the contract.',
      targetLength: '1 frase',
    },
    topicName: 'Writing',
  },
  {
    id: 'b2-u14-l6-w4',
    type: 'writing',
    level: 'B2',
    topic: 'Business',
    difficulty: 'medium',
    content: {
      title: LESSON_TITLE,
      instructions:
        'Escribe 2 frases especulando sobre por qué una empresa tuvo éxito o fracasó. Usa must have y can\'t have.',
      prompt:
        'Write two sentences speculating about a company\'s success or failure using modal verbs of deduction.',
      targetLength: '2 frases',
    },
    topicName: 'Writing',
  },
  {
    id: 'b2-u14-l6-w5',
    type: 'fill-blank',
    level: 'B2',
    topic: 'Business',
    difficulty: 'medium',
    content: {
      title: LESSON_TITLE,
      instructions: 'Completa con el modal de deducción correcto.',
      questions: [
        {
          question:
            'The CEO ____ received our proposal. I sent it to her personal email yesterday.',
          options: ['must have', 'might have', "can't have"],
          correctAnswer: 'must have',
          acceptableAnswers: ['must have'],
          explanation:
            'Certeza lógica: si lo envié ayer a su email personal, es muy probable que lo haya recibido.',
        },
      ],
    },
    topicName: 'Writing',
  },
  {
    id: 'b2-u14-l6-w6',
    type: 'writing',
    level: 'B2',
    topic: 'Business',
    difficulty: 'medium',
    content: {
      title: LESSON_TITLE,
      instructions:
        'Escribe un breve párrafo (3–4 frases) sobre una fusión o adquisición empresarial. Incluye al menos una deducción con must have o might have.',
      prompt:
        'Describe a merger or acquisition. Speculate about why it happened and what the consequences might be.',
      targetLength: '3-4 frases',
    },
    topicName: 'Writing',
  },
  {
    id: 'b2-u14-l6-w7',
    type: 'writing',
    level: 'B2',
    topic: 'Business',
    difficulty: 'medium',
    content: {
      title: LESSON_TITLE,
      instructions:
        'Completa las frases con ideas propias usando modales de deducción.',
      prompt:
        'Finish these sentences:\n1. The negotiations must have...\n2. The investors might have...\n3. She can\'t have...',
      targetLength: '3-4 frases',
    },
    topicName: 'Writing',
  },
  {
    id: 'b2-u14-l6-w8',
    type: 'fill-blank',
    level: 'B2',
    topic: 'Business',
    difficulty: 'medium',
    content: {
      title: LESSON_TITLE,
      instructions:
        'Completa con must have, might have o can\'t have.',
      questions: [
        {
          question:
            'They ____ reached a deal. Both sides have announced the partnership.',
          options: ['must have', 'might have', "can't have"],
          correctAnswer: 'must have',
          acceptableAnswers: ['must have'],
          explanation:
            'Certeza: si ambas partes han anunciado la asociación, es evidente que llegaron a un acuerdo.',
        },
      ],
    },
    topicName: 'Writing',
  },
  {
    id: 'b2-u14-l6-w9',
    type: 'writing',
    level: 'B2',
    topic: 'Business',
    difficulty: 'medium',
    content: {
      title: LESSON_TITLE,
      instructions:
        'Escribe la introducción de un artículo (40–60 palabras) sobre el éxito de una startup.',
      prompt:
        'Write an introduction to an article about a successful startup. Use vocabulary such as: funding, investors, market share, strategy.',
      writingType: 'article',
      targetLength: '40-60 palabras',
    },
    topicName: 'Writing',
  },
  {
    id: 'b2-u14-l6-w10',
    type: 'writing',
    level: 'B2',
    topic: 'Business',
    difficulty: 'medium',
    content: {
      title: LESSON_TITLE,
      instructions:
        'Escribe 2–3 frases explicando por qué es importante la planificación en los negocios.',
      prompt:
        'Explain why careful planning, which many startups overlook, is essential for business success.',
      targetLength: '2-3 frases',
    },
    topicName: 'Writing',
  },
  {
    id: 'b2-u14-l6-w11',
    type: 'fill-blank',
    level: 'B2',
    topic: 'Business',
    difficulty: 'medium',
    content: {
      title: LESSON_TITLE,
      instructions: 'Completa con el modal adecuado.',
      questions: [
        {
          question:
            'He ____ forgotten the meeting. He\'s the most organised person in the company.',
          options: ["can't have", 'must have', 'might have'],
          correctAnswer: "can't have",
          acceptableAnswers: ["can't have"],
          explanation:
            'Imposibilidad: siendo la persona más organizada, es muy improbable que haya olvidado la reunión.',
        },
      ],
    },
    topicName: 'Writing',
  },
  {
    id: 'b2-u14-l6-w12',
    type: 'writing',
    level: 'B2',
    topic: 'Business',
    difficulty: 'medium',
    content: {
      title: LESSON_TITLE,
      instructions:
        'Transforma la frase usando un modal de deducción: "It\'s impossible that they missed the deadline."',
      prompt:
        'Use "can\'t have" to express the same idea.',
      expressionHint: 'They can\'t have missed the deadline.',
      targetLength: '1 frase',
    },
    topicName: 'Writing',
  },
  {
    id: 'b2-u14-l6-w13',
    type: 'writing',
    level: 'B2',
    topic: 'Business',
    difficulty: 'medium',
    content: {
      title: LESSON_TITLE,
      instructions:
        'Escribe 3 frases con modales de deducción sobre una situación empresarial (una con must have, otra con might have y otra con can\'t have).',
      prompt:
        'Write three sentences about a business situation using:\n- must have (certainty)\n- might have (possibility)\n- can\'t have (impossibility)',
      targetLength: '3 frases',
    },
    topicName: 'Writing',
  },
  {
    id: 'b2-u14-l6-w14',
    type: 'fill-blank',
    level: 'B2',
    topic: 'Business',
    difficulty: 'medium',
    content: {
      title: LESSON_TITLE,
      instructions: 'Completa con must have, might have o can\'t have.',
      questions: [
        {
          question:
            'The budget ____ been approved. The board hasn\'t met yet this month.',
          options: ["can't have", 'must have', 'might have'],
          correctAnswer: "can't have",
          acceptableAnswers: ["can't have"],
          explanation:
            'Imposibilidad: si la junta no se ha reunido este mes, no pueden haber aprobado el presupuesto.',
        },
      ],
    },
    topicName: 'Writing',
  },
  {
    id: 'b2-u14-l6-w15',
    type: 'writing',
    level: 'B2',
    topic: 'Business',
    difficulty: 'medium',
    content: {
      title: LESSON_TITLE,
      instructions:
        'Escribe un breve texto (aprox. 60–80 palabras) sobre las ventajas de una fusión empresarial.',
      prompt:
        'Explain the advantages of a merger between two companies. Consider market share, funding, and expansion.',
      targetLength: '60-80 palabras',
    },
    topicName: 'Writing',
  },
  {
    id: 'b2-u14-l6-w16',
    type: 'writing',
    level: 'B2',
    topic: 'Business',
    difficulty: 'medium',
    content: {
      title: LESSON_TITLE,
      instructions:
        'Escribe 2–3 frases aconsejando a un emprendedor sobre cómo atraer inversores.',
      prompt:
        'Give advice to an entrepreneur who wants to attract investors. Use vocabulary: pitch, funding, strategy, market research.',
      targetLength: '2-3 frases',
    },
    topicName: 'Writing',
  },
  {
    id: 'b2-u14-l6-w17',
    type: 'fill-blank',
    level: 'B2',
    topic: 'Business',
    difficulty: 'medium',
    content: {
      title: LESSON_TITLE,
      instructions: 'Completa con el modal correcto.',
      questions: [
        {
          question:
            'The competitor ____ launched a new product. Their sales have increased by 50%.',
          options: ['must have', 'might have', "can't have"],
          correctAnswer: 'must have',
          acceptableAnswers: ['must have'],
          explanation:
            'Certeza: un aumento del 50% en ventas sugiere fuertemente que han lanzado un nuevo producto.',
        },
      ],
    },
    topicName: 'Writing',
  },
  {
    id: 'b2-u14-l6-w18',
    type: 'writing',
    level: 'B2',
    topic: 'Business',
    difficulty: 'medium',
    content: {
      title: LESSON_TITLE,
      instructions:
        'Redacta la conclusión de un artículo (40–60 palabras) sobre por qué algunas startups fracasan.',
      prompt:
        'Write a short conclusion explaining why some startups fail despite having good ideas. Use modal verbs of deduction where appropriate.',
      targetLength: '40-60 palabras',
    },
    topicName: 'Writing',
  },
];
