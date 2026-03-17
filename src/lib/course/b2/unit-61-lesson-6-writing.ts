/**
 * Unidad 61 B2 — Lección 6: Expresión escrita (Grammar Boost B2+: Modal Deduction & Conditionals)
 * 14 ejercicios (B2+: práctica escrita guiada)
 */

import { Exercise } from '@/lib/exercise-generator';

const LESSON_TITLE = '[[Writing|Expresión escrita]]';

export const UNIT_61_LESSON_6_WRITING: Exercise[] = [
  {
    id: 'b2-u61-l6-w1',
    type: 'writing',
    level: 'B2',
    topic: 'grammar-boost-b2-plus',
    difficulty: 'medium',
    content: {
      title: LESSON_TITLE,
      instructions:
        'Escribe 3–4 frases describiendo una situación en la que llegaste tarde. Usa: must have, might have, can\'t have.',
      prompt:
        '[[Describe a situation where you were late. Use: must have, might have, can\'t have.|Describe una situación en la que llegaste tarde. Usa: must have, might have, can\'t have.]]',
      targetLength: '3-4 frases',
    },
    topicName: 'Writing',
  },
  {
    id: 'b2-u61-l6-w2',
    type: 'fill-blank',
    level: 'B2',
    topic: 'grammar-boost-b2-plus',
    difficulty: 'medium',
    content: {
      title: LESSON_TITLE,
      instructions: 'Completa con la forma correcta (third conditional).',
      questions: [
        {
          question:
            '[[If we|Si nosotros]] ____ ____ ____ [[earlier|antes]], [[we|nosotros]] ____ ____ ____ [[the flight|el vuelo]].',
          options: [
            '[[had left / wouldn\'t have missed|hubiéramos salido / no habríamos perdido]]',
            '[[left / wouldn\'t miss|salimos / no perderíamos]]',
            '[[have left / didn\'t miss|hemos salido / no perdimos]]',
          ],
          correctAnswer: 'had left / wouldn\'t have missed',
          acceptableAnswers: ['had left / wouldn\'t have missed'],
          explanation:
            '[[Third conditional|Tercer condicional: If + past perfect, would have + participle]].',
        },
      ],
    },
    topicName: 'Writing',
  },
  {
    id: 'b2-u61-l6-w3',
    type: 'writing',
    level: 'B2',
    topic: 'grammar-boost-b2-plus',
    difficulty: 'medium',
    content: {
      title: LESSON_TITLE,
      instructions:
        'Reescribe usando mixed conditional: I didn\'t save money. Now I\'m stressed about bills.',
      prompt:
        '[[Rewrite using mixed conditional: I didn\'t save money. Now I\'m stressed about bills.|Reescribe usando condicional mixto: No ahorré dinero. Ahora estoy estresado por las facturas.]]',
      expressionHint:
        '[[Usa: If I had saved money, I wouldn\'t be stressed now.|Usa: If I had saved money, I wouldn\'t be stressed now.]]',
      targetLength: '1-2 frases',
    },
    topicName: 'Writing',
  },
  {
    id: 'b2-u61-l6-w4',
    type: 'fill-blank',
    level: 'B2',
    topic: 'grammar-boost-b2-plus',
    difficulty: 'medium',
    content: {
      title: LESSON_TITLE,
      instructions: 'Completa con el modal de deducción correcto.',
      questions: [
        {
          question:
            '[[He|Él]] ____ ____ ____ [[the instructions|las instrucciones]] — [[he did everything wrong|lo hizo todo mal]].',
          options: [
            '[[can\'t have understood|no puede haber entendido]]',
            '[[must have understood|debe haber entendido]]',
            '[[might have understood|podría haber entendido]]',
          ],
          correctAnswer: 'can\'t have understood',
          acceptableAnswers: ["can't have understood"],
          explanation:
            '[[Can\'t have + participle = negative deduction in the past|Can\'t have + participio = deducción negativa en el pasado]].',
        },
      ],
    },
    topicName: 'Writing',
  },
  {
    id: 'b2-u61-l6-w5',
    type: 'writing',
    level: 'B2',
    topic: 'grammar-boost-b2-plus',
    difficulty: 'medium',
    content: {
      title: LESSON_TITLE,
      instructions:
        'Escribe 2–3 frases dando consejos en el pasado. Usa: should have + participle.',
      prompt:
        '[[Give advice about past actions using should have + participle.|Da consejos sobre acciones pasadas usando should have + participle.]]',
      targetLength: '2-3 frases',
    },
    topicName: 'Writing',
  },
  {
    id: 'b2-u61-l6-w6',
    type: 'fill-blank',
    level: 'B2',
    topic: 'grammar-boost-b2-plus',
    difficulty: 'medium',
    content: {
      title: LESSON_TITLE,
      instructions: 'Completa con la forma correcta (second conditional).',
      questions: [
        {
          question:
            '[[If I|Si yo]] ____ [[more free time|más tiempo libre]], [[I|yo]] ____ ____ [[a new language|un nuevo idioma]].',
          options: [
            '[[had / would learn|tuviera / aprendería]]',
            '[[have / will learn|tengo / aprenderé]]',
            '[[had / learned|tuviera / aprendí]]',
          ],
          correctAnswer: 'had / would learn',
          acceptableAnswers: ['had / would learn'],
          explanation:
            '[[Second conditional|Segundo condicional: If + past simple, would + infinitive]].',
        },
      ],
    },
    topicName: 'Writing',
  },
  {
    id: 'b2-u61-l6-w7',
    type: 'writing',
    level: 'B2',
    topic: 'grammar-boost-b2-plus',
    difficulty: 'medium',
    content: {
      title: LESSON_TITLE,
      instructions:
        'Escribe 3 oraciones con: must have, might have, can\'t have sobre un compañero de trabajo.',
      prompt:
        '[[Write three sentences using must have, might have, can\'t have about a colleague.|Escribe tres oraciones usando must have, might have, can\'t have sobre un compañero de trabajo.]]',
      targetLength: '3 frases',
    },
    topicName: 'Writing',
  },
  {
    id: 'b2-u61-l6-w8',
    type: 'fill-blank',
    level: 'B2',
    topic: 'grammar-boost-b2-plus',
    difficulty: 'medium',
    content: {
      title: LESSON_TITLE,
      instructions: 'Completa con la forma correcta (mixed conditional).',
      questions: [
        {
          question:
            '[[If she had studied abroad|Si ella hubiera estudiado en el extranjero]], [[she|ella]] ____ ____ [[more international friends now|más amigos internacionales ahora]].',
          options: [
            '[[would have|tendría]]',
            '[[would have had|habría tenido]]',
            '[[has|tiene]]',
          ],
          correctAnswer: 'would have',
          acceptableAnswers: ['would have'],
          explanation:
            '[[Mixed conditional with present result|Condicional mixto con resultado en presente]].',
        },
      ],
    },
    topicName: 'Writing',
  },
  {
    id: 'b2-u61-l6-w9',
    type: 'writing',
    level: 'B2',
    topic: 'grammar-boost-b2-plus',
    difficulty: 'medium',
    content: {
      title: LESSON_TITLE,
      instructions:
        'Escribe la introducción (40–60 palabras) de un texto sobre errores y segundas oportunidades. Usa: third conditional y mixed conditional.',
      prompt:
        '[[Write an introduction about mistakes and second chances. Use third and mixed conditional.|Escribe una introducción sobre errores y segundas oportunidades. Usa tercer y condicional mixto.]]',
      writingType: 'article',
      targetLength: '40-60 palabras',
    },
    topicName: 'Writing',
  },
  {
    id: 'b2-u61-l6-w10',
    type: 'fill-blank',
    level: 'B2',
    topic: 'grammar-boost-b2-plus',
    difficulty: 'medium',
    content: {
      title: LESSON_TITLE,
      instructions: 'Completa con la forma correcta (modal de deducción).',
      questions: [
        {
          question:
            '[[They|Ellos]] ____ ____ ____ [[lost|perdido]] [[the documents|los documentos]] — [[they look very worried|parecen muy preocupados]].',
          options: [
            '[[must have|deben haber]]',
            '[[might have|podrían haber]]',
            '[[can\'t have|no pueden haber]]',
          ],
          correctAnswer: 'must have',
          acceptableAnswers: ['must have'],
          explanation:
            '[[Must have + participle = strong deduction|Must have + participio = deducción fuerte]].',
        },
      ],
    },
    topicName: 'Writing',
  },
  {
    id: 'b2-u61-l6-w11',
    type: 'writing',
    level: 'B2',
    topic: 'grammar-boost-b2-plus',
    difficulty: 'medium',
    content: {
      title: LESSON_TITLE,
      instructions:
        'Escribe 2–3 frases comparando second conditional y third conditional. Da ejemplos.',
      prompt:
        '[[Compare second conditional and third conditional. Give examples.|Compara segundo condicional y tercer condicional. Da ejemplos.]]',
      targetLength: '2-3 frases',
    },
    topicName: 'Writing',
  },
  {
    id: 'b2-u61-l6-w12',
    type: 'fill-blank',
    level: 'B2',
    topic: 'grammar-boost-b2-plus',
    difficulty: 'medium',
    content: {
      title: LESSON_TITLE,
      instructions: 'Completa con la forma correcta.',
      questions: [
        {
          question:
            '[[If you had told me|Si me lo hubieras dicho]], [[I|yo]] ____ ____ ____ [[you|a ti]].',
          options: [
            '[[would have helped|te habría ayudado]]',
            '[[will help|te ayudaré]]',
            '[[helped|ayudé]]',
          ],
          correctAnswer: 'would have helped',
          acceptableAnswers: ['would have helped'],
          explanation:
            '[[Third conditional: If + past perfect, would have + participle|Tercer condicional: If + past perfect, would have + participio]].',
        },
      ],
    },
    topicName: 'Writing',
  },
  {
    id: 'b2-u61-l6-w13',
    type: 'writing',
    level: 'B2',
    topic: 'grammar-boost-b2-plus',
    difficulty: 'medium',
    content: {
      title: LESSON_TITLE,
      instructions:
        'Redacta 60–80 palabras sobre una decisión importante que tomaste. Usa: must have, should have, third conditional.',
      prompt:
        '[[Write about an important decision you made. Use: must have, should have, third conditional.|Redacta sobre una decisión importante que tomaste. Usa: must have, should have, tercer condicional.]]',
      targetLength: '60-80 palabras',
    },
    topicName: 'Writing',
  },
  {
    id: 'b2-u61-l6-w14',
    type: 'writing',
    level: 'B2',
    topic: 'grammar-boost-b2-plus',
    difficulty: 'medium',
    content: {
      title: LESSON_TITLE,
      instructions:
        'Escribe 2–3 frases explicando cómo estos patrones te ayudan en exámenes oficiales (Use of English, writing).',
      prompt:
        '[[Explain how modal deduction and conditionals help you in official exams.|Explica cómo la deducción modal y los condicionales te ayudan en exámenes oficiales.]]',
      targetLength: '2-3 frases',
    },
    topicName: 'Writing',
  },
];

