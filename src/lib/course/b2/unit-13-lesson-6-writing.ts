/**
 * Unidad 13 B2 — Lección 6: Expresión escrita (Money)
 * 18 ejercicios (B2: más vocabulario y complejidad que B1)
 */

import { Exercise } from '@/lib/exercise-generator';

const LESSON_TITLE = '[[Writing|Expresión escrita]]';

export const UNIT_13_LESSON_6_WRITING: Exercise[] = [
  {
    id: 'b2-u13-l6-w1',
    type: 'writing',
    level: 'B2',
    topic: 'Money',
    difficulty: 'medium',
    content: {
      title: LESSON_TITLE,
      instructions:
        'Escribe 3–4 frases describiendo qué debes hacer para gestionar tu dinero bien. Usa must, have to o need to.',
      prompt:
        "[[Describe what you must/have to/need to do to manage your money well. Include at least one example with needn't.|Describe qué debes/tienes que/necesitas hacer para gestionar bien tu dinero. Incluye al menos un ejemplo con needn't.]]",
      targetLength: '3-4 frases',
    },
    topicName: 'Writing',
  },
  {
    id: 'b2-u13-l6-w2',
    type: 'fill-blank',
    level: 'B2',
    topic: 'Money',
    difficulty: 'medium',
    content: {
      title: LESSON_TITLE,
      instructions: 'Completa con must, have to, need to o needn\'t.',
      questions: [
        {
          question:
            '[[You ____ pay your bills on time if you want to avoid late fees.|Debes ____ pagar tus facturas a tiempo si quieres evitar recargos por demora.]]',
          options: ['[[must|debe]]', '[[needn\'t|no necesitas]]', '[[don\'t have to|no tienes que]]'],
          correctAnswer: '[[must|debe]]',
          acceptableAnswers: ['[[must|debe]]', '[[have to|tener que]]', '[[need to|necesitar]]'],
          explanation:
            'Obligación fuerte: pagar a tiempo para evitar recargos.',
        },
      ],
    },
    topicName: 'Writing',
  },
  {
    id: 'b2-u13-l6-w3',
    type: 'writing',
    level: 'B2',
    topic: 'Money',
    difficulty: 'medium',
    content: {
      title: LESSON_TITLE,
      instructions:
        'Reescribe la frase usando needn\'t: "It is not necessary to bring cash."',
      prompt:
        '[[Rewrite: "It is not necessary to bring cash." Start with: "You..."|Reescribe: "No es necesario llevar efectivo." Empieza con: "You..."]]',
      expressionHint: "[[Usa: \"You needn't...\" o \"You don't need to...\"|Usa: \"You needn't...\" o \"You don't need to...\"]]",
      targetLength: '1 frase',
    },
    topicName: 'Writing',
  },
  {
    id: 'b2-u13-l6-w4',
    type: 'writing',
    level: 'B2',
    topic: 'Money',
    difficulty: 'medium',
    content: {
      title: LESSON_TITLE,
      instructions:
        'Escribe 2 frases sobre obligaciones financieras que tienes (o que la gente tiene). Usa must, have to o need to.',
      prompt:
        '[[Write two sentences about financial obligations (yours or people in general). Use must, have to or need to.|Escribe dos oraciones sobre obligaciones financieras (tuyas o de la gente en general). Usa must, have to o need to.]]',
      targetLength: '2 frases',
    },
    topicName: 'Writing',
  },
  {
    id: 'b2-u13-l6-w5',
    type: 'fill-blank',
    level: 'B2',
    topic: 'Money',
    difficulty: 'medium',
    content: {
      title: LESSON_TITLE,
      instructions: 'Completa con el modal correcto.',
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
    id: 'b2-u13-l6-w6',
    type: 'writing',
    level: 'B2',
    topic: 'Money',
    difficulty: 'medium',
    content: {
      title: LESSON_TITLE,
      instructions:
        'Escribe un breve párrafo (3–4 frases) dando consejos para ahorrar. Usa must, have to, need to y needn\'t.',
      prompt:
        "[[Give advice on how to save money. Use at least one example of each: must/have to, need to, and needn't.|Da consejos sobre cómo ahorrar dinero. Usa al menos un ejemplo de cada uno: must/have to, need to y needn't.]]",
      targetLength: '3-4 frases',
    },
    topicName: 'Writing',
  },
  {
    id: 'b2-u13-l6-w7',
    type: 'writing',
    level: 'B2',
    topic: 'Money',
    difficulty: 'medium',
    content: {
      title: LESSON_TITLE,
      instructions:
        'Completa las frases con ideas propias usando modales.',
      prompt:
        "[[Finish these sentences:|Completa estas oraciones:]]\n[[1. To open a bank account, you must/have to...|1. Para abrir una cuenta bancaria, debes/tienes que...]]\n[[2. When you are in debt, you need to...|2. Cuando tienes deudas, necesitas...]]\n[[3. You needn't... if you want to save money.|3. No necesitas... si quieres ahorrar dinero.]]",
      targetLength: '3 frases',
    },
    topicName: 'Writing',
  },
  {
    id: 'b2-u13-l6-w8',
    type: 'fill-blank',
    level: 'B2',
    topic: 'Money',
    difficulty: 'medium',
    content: {
      title: LESSON_TITLE,
      instructions: 'Completa con must, mustn\'t, needn\'t o don\'t have to.',
      questions: [
        {
          question:
            '[[You ____ tell anyone your PIN. Keep it secret.|No ____ decir tu PIN a nadie. Guárdalo en secreto.]]',
          options: ['[[mustn\'t|no debes]]', '[[needn\'t|no necesitas]]', '[[don\'t have to|no tienes que]]'],
          correctAnswer: '[[mustn\'t|no debes]]',
          acceptableAnswers: ['[[mustn\'t|no debes]]'],
          explanation:
            'Prohibición: no debes decir tu PIN a nadie.',
        },
      ],
    },
    topicName: 'Writing',
  },
  {
    id: 'b2-u13-l6-w9',
    type: 'writing',
    level: 'B2',
    topic: 'Money',
    difficulty: 'medium',
    content: {
      title: LESSON_TITLE,
      instructions:
        'Escribe la introducción de un artículo (40–60 palabras) sobre la importancia de ahorrar.',
      prompt:
        '[[Write an introduction to an article about why saving money is important. Use must, have to or need to at least once.|Escribe la introducción de un artículo sobre por qué ahorrar dinero es importante. Usa must, have to o need to al menos una vez.]]',
      writingType: 'article',
      targetLength: '40-60 palabras',
    },
    topicName: 'Writing',
  },
  {
    id: 'b2-u13-l6-w10',
    type: 'writing',
    level: 'B2',
    topic: 'Money',
    difficulty: 'medium',
    content: {
      title: LESSON_TITLE,
      instructions:
        'Escribe 2–3 frases explicando qué no es necesario hacer cuando gestionas bien tu dinero.',
      prompt:
        "[[Explain what you needn't do (or don't have to do) when you manage your money well.|Explica qué no necesitas hacer (o no tienes que hacer) cuando gestionas bien tu dinero.]]",
      targetLength: '2-3 frases',
    },
    topicName: 'Writing',
  },
  {
    id: 'b2-u13-l6-w11',
    type: 'fill-blank',
    level: 'B2',
    topic: 'Money',
    difficulty: 'medium',
    content: {
      title: LESSON_TITLE,
      instructions: 'Completa con el modal adecuado.',
      questions: [
        {
          question:
            '[[To get a mortgage, you ____ show proof of income.|Para obtener una hipoteca, ____ demostrar prueba de ingresos.]]',
          options: ['[[need to|necesitas]]', '[[needn\'t|no necesitas]]', '[[mustn\'t|no debes]]'],
          correctAnswer: '[[need to|necesitas]]',
          acceptableAnswers: ['[[need to|necesitas]]', '[[must|debes]]', '[[have to|tienes que]]'],
          explanation:
            'Necesidad: es requisito demostrar ingresos para una hipoteca.',
        },
      ],
    },
    topicName: 'Writing',
  },
  {
    id: 'b2-u13-l6-w12',
    type: 'writing',
    level: 'B2',
    topic: 'Money',
    difficulty: 'medium',
    content: {
      title: LESSON_TITLE,
      instructions:
        'Convierte esta frase usando needn\'t: "It is not necessary to worry."',
      prompt:
        "[[Rewrite: \"It is not necessary to worry.\" Use needn't or don't need to.|Reescribe: \"No es necesario preocuparse.\" Usa needn't o don't need to.]]",
      expressionHint: "[[You needn't worry. / You don't need to worry.|You needn't worry. / You don't need to worry.]]",
      targetLength: '1 frase',
    },
    topicName: 'Writing',
  },
  {
    id: 'b2-u13-l6-w13',
    type: 'writing',
    level: 'B2',
    topic: 'Money',
    difficulty: 'medium',
    content: {
      title: LESSON_TITLE,
      instructions:
        'Escribe 3 ejemplos: una obligación (must/have to), una necesidad (need to) y una ausencia de necesidad (needn\'t).',
      prompt:
        "[[Write three sentences about money:|Escribe tres oraciones sobre dinero:]]\n[[- one with must or have to (obligation)|- una con must o have to (obligación)]]\n[[- one with need to (necessity)|- una con need to (necesidad)]]\n[[- one with needn't (no necessity)|- una con needn't (sin necesidad)]]",
      targetLength: '3 frases',
    },
    topicName: 'Writing',
  },
  {
    id: 'b2-u13-l6-w14',
    type: 'fill-blank',
    level: 'B2',
    topic: 'Money',
    difficulty: 'medium',
    content: {
      title: LESSON_TITLE,
      instructions: 'Completa con must, have to, need to o needn\'t.',
      questions: [
        {
          question:
            "[[You ____ rush. The meeting doesn't start until 3 pm.|No ____ apurarte. La reunión no empieza hasta las 15:00.]]",
          options: ['[[needn\'t|no necesitas]]', '[[must|debes]]', '[[have to|tienes que]]'],
          correctAnswer: '[[needn\'t|no necesitas]]',
          acceptableAnswers: ['[[needn\'t|no necesitas]]', '[[don\'t need to|no necesitas]]', '[[don\'t have to|no tienes que]]'],
          explanation:
            'No es necesario apurarse; hay tiempo suficiente.',
        },
      ],
    },
    topicName: 'Writing',
  },
  {
    id: 'b2-u13-l6-w15',
    type: 'writing',
    level: 'B2',
    topic: 'Money',
    difficulty: 'medium',
    content: {
      title: LESSON_TITLE,
      instructions:
        'Escribe un breve texto (60–80 palabras) sobre cómo ahorraste dinero en una ocasión.',
      prompt:
        "[[Describe a time when you saved money. Explain what you had to do, what you needn't have bought, and what you learned.|Describe una ocasión en la que ahorraste dinero. Explica qué tuviste que hacer, qué no necesitabas haber comprado y qué aprendiste.]]",
      targetLength: '60-80 palabras',
    },
    topicName: 'Writing',
  },
  {
    id: 'b2-u13-l6-w16',
    type: 'writing',
    level: 'B2',
    topic: 'Money',
    difficulty: 'medium',
    content: {
      title: LESSON_TITLE,
      instructions:
        'Escribe 2–3 frases aconsejando a alguien que quiere empezar a ahorrar.',
      prompt:
        "[[Give advice to someone who wants to start saving. Use must, have to, need to and needn't.|Da consejos a alguien que quiere empezar a ahorrar. Usa must, have to, need to y needn't.]]",
      targetLength: '2-3 frases',
    },
    topicName: 'Writing',
  },
  {
    id: 'b2-u13-l6-w17',
    type: 'fill-blank',
    level: 'B2',
    topic: 'Money',
    difficulty: 'medium',
    content: {
      title: LESSON_TITLE,
      instructions: 'Completa con el modal correcto.',
      questions: [
        {
          question:
            '[[Companies ____ keep accurate financial records by law.|Las empresas ____ deben mantener registros financieros precisos por ley.]]',
          options: ['[[have to|tienen que]]', '[[needn\'t|no necesitan]]', '[[don\'t need to|no necesitan]]'],
          correctAnswer: '[[have to|tienen que]]',
          acceptableAnswers: ['[[have to|tienen que]]', '[[must|deben]]'],
          explanation:
            'Obligación legal: las empresas deben mantener registros precisos.',
        },
      ],
    },
    topicName: 'Writing',
  },
  {
    id: 'b2-u13-l6-w18',
    type: 'writing',
    level: 'B2',
    topic: 'Money',
    difficulty: 'medium',
    content: {
      title: LESSON_TITLE,
      instructions:
        'Redacta la conclusión de un artículo (40–60 palabras) sobre por qué es importante gestionar el dinero bien.',
      prompt:
        "[[Write a short conclusion explaining why managing money well is important. Use at least one modal (must, have to, need to, needn't).|Escribe una breve conclusión explicando por qué gestionar bien el dinero es importante. Usa al menos un modal (must, have to, need to, needn't).]]",
      targetLength: '40-60 palabras',
    },
    topicName: 'Writing',
  },
];
