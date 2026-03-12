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
        '[[Describe a cultural festival or event. Include:|Describe un festival o evento cultural. Incluye:]]\n[[- people who take part|- personas que participan]]\n[[- places where it happens|- lugares donde tiene lugar]]\n[[- things which make it special|- cosas que lo hacen especial]]',
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
            '[[The festival ____ we celebrate every August is the most important event of the year.|El festival ____ que celebramos cada agosto es el evento más importante del año.]]',
          options: ['[[which|que]]', '[[who|quien]]', '[[where|donde]]'],
          correctAnswer: '[[which|que]]',
          acceptableAnswers: ['[[which|que]]', '[[that|que]]'],
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
      prompt:
        '[[Use "must have" to express the same idea.|Usa "must have" para expresar la misma idea.]]',
      expressionHint: '[[They must have signed the contract.|They must have signed the contract.]]',
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
        "[[Write two sentences about obligations in your life:|Escribe dos oraciones sobre obligaciones en tu vida:]]\n[[- something you have to do|- algo que tienes que hacer]]\n[[- something you needn't do|- algo que no necesitas hacer]]",
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
            "[[She ____ missed the meeting. I saw her in the conference room at 9 am.|Ella ____ no puede haber faltado a la reunión. La vi en la sala de conferencias a las 9.]]",
          options: ["[[can't have|no puede haber]]", '[[must have|debe haber]]', '[[might have|podría haber]]'],
          correctAnswer: "[[can't have|no puede haber]]",
          acceptableAnswers: ["[[can't have|no puede haber]]"],
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
        '[[I grew up in a small village. The village is famous for its traditional dances.|Crecí en un pueblo pequeño. El pueblo es famoso por sus bailes tradicionales.]]',
      expressionHint: '[[Usa: "The village, which ... , is ..."|Usa: "The village, which ... , is ..."]]',
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
        "[[Finish these sentences:|Completa estas oraciones:]]\n[[1. The person who...|1. La persona que...]]\n[[2. The deal must have...|2. El acuerdo debe haber...]]\n[[3. You needn't...|3. No necesitas...]]",
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
            '[[The writer ____ novels explore identity won an important prize.|El escritor ____ cuyas novelas exploran la identidad ganó un premio importante.]]',
          options: ['[[whose|cuyo/cuya]]', '[[who|quien]]', '[[which|que]]'],
          correctAnswer: '[[whose|cuyo/cuya]]',
          acceptableAnswers: ['[[whose|cuyo/cuya]]'],
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
        '[[Write an introduction to an article about a cultural festival or a successful business. Use vocabulary from units 11-14.|Escribe la introducción de un artículo sobre un festival cultural o un negocio exitoso. Usa vocabulario de las unidades 11-14.]]',
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
        '[[Explain why cultural heritage, which includes festivals and traditions, should be preserved.|Explica por qué el patrimonio cultural, que incluye festivales y tradiciones, debería preservarse.]]',
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
            '[[She ____ work overtime last week because of the audit.|Tuvo que ____ trabajar horas extra la semana pasada por la auditoría.]]',
          options: ['[[had to|tuvo que]]', '[[must|debe]]', '[[need to|necesita]]'],
          correctAnswer: '[[had to|tuvo que]]',
          acceptableAnswers: ['[[had to|tuvo que]]'],
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
      prompt:
        '[[Start with: "The documentary..."|Empieza con: "The documentary..."]]',
      expressionHint: '[[The documentary shown late at night explores social media.|The documentary shown late at night explores social media.]]',
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
        '[[Write three sentences about culture or business:|Escribe tres oraciones sobre cultura o negocios:]]\n[[- one with "who"|- una con "who"]]\n[[- one with "which/that"|- una con "which/that"]]\n[[- one with "must have" or "might have"|- una con "must have" o "might have"]]',
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
            '[[You ____ tell anyone your PIN. Keep it secret.|No ____ decir tu PIN a nadie. Guárdalo en secreto.]]',
          options: ['[[mustn\'t|no debes]]', '[[needn\'t|no necesitas]]', '[[don\'t have to|no tienes que]]'],
          correctAnswer: '[[mustn\'t|no debes]]',
          acceptableAnswers: ['[[mustn\'t|no debes]]'],
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
        '[[Explain how someone can save money to attend a festival, concert, or cultural event. Use vocabulary: budget, savings, target, prioritise.|Explica cómo alguien puede ahorrar dinero para asistir a un festival, concierto o evento cultural. Usa vocabulario: budget, savings, target, prioritise.]]',
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
        "[[Use must have, might have, and can't have to speculate about what happened in a business negotiation.|Usa must have, might have y can't have para especular sobre qué pasó en una negociación empresarial.]]",
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
            '[[The tickets ____ online are cheaper than the ones at the cinema.|Las entradas ____ compradas online son más baratas que las del cine.]]',
          options: ['[[bought|compradas]]', '[[which bought|incorrecto]]', '[[buying|comprando]]'],
          correctAnswer: '[[bought|compradas]]',
          acceptableAnswers: ['[[bought|compradas]]'],
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
        '[[Write a short conclusion explaining why both cultural experiences and good financial planning are important in life.|Escribe una breve conclusión explicando por qué tanto las experiencias culturales como una buena planificación financiera son importantes en la vida.]]',
      targetLength: '40-60 palabras',
    },
    topicName: 'Writing',
  },
];
