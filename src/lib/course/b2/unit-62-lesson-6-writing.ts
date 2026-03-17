/**
 * Unidad 62 B2 — Lección 6: Expresión escrita (Vocabulary Power B2+: Phrasal Verbs & Collocations)
 * 12 ejercicios (B2+: práctica escrita con vocabulario de examen)
 */

import { Exercise } from '@/lib/exercise-generator';

const LESSON_TITLE = '[[Writing|Expresión escrita]]';

export const UNIT_62_LESSON_6_WRITING: Exercise[] = [
  {
    id: 'b2-u62-l6-w1',
    type: 'writing',
    level: 'B2',
    topic: 'vocab-power-b2-plus',
    difficulty: 'medium',
    content: {
      title: LESSON_TITLE,
      instructions:
        'Escribe 3–4 frases sobre cómo te preparas para un examen. Usa: put off, set up, stick to.',
      prompt:
        '[[Write about how you prepare for an exam. Use: put off, set up, stick to.|Escribe sobre cómo te preparas para un examen. Usa: put off, set up, stick to.]]',
      targetLength: '3-4 frases',
    },
    topicName: 'Writing',
  },
  {
    id: 'b2-u62-l6-w2',
    type: 'fill-blank',
    level: 'B2',
    topic: 'vocab-power-b2-plus',
    difficulty: 'medium',
    content: {
      title: LESSON_TITLE,
      instructions: 'Completa con el phrasal verb correcto.',
      questions: [
        {
          question:
            'You should not ____ ____ revision until the last minute.',
          options: [
            '[[put off|aplazar]]',
            '[[take off|despegar]]',
            '[[turn off|apagar]]',
          ],
          correctAnswer: 'put off',
          acceptableAnswers: ['put off'],
          explanation: '[[Put off = posponer|Put off = posponer]].',
        },
      ],
    },
    topicName: 'Writing',
  },
  {
    id: 'b2-u62-l6-w3',
    type: 'writing',
    level: 'B2',
    topic: 'vocab-power-b2-plus',
    difficulty: 'medium',
    content: {
      title: LESSON_TITLE,
      instructions:
        'Reescribe usando una colocación natural: The traffic was very big.',
      prompt:
        '[[Rewrite the sentence using a natural collocation: The traffic was very big.|Reescribe la oración usando una colocación natural: The traffic was very big.]]',
      expressionHint: '[[Usa: heavy traffic|Usa: heavy traffic]]',
      targetLength: '1 frase',
    },
    topicName: 'Writing',
  },
  {
    id: 'b2-u62-l6-w4',
    type: 'fill-blank',
    level: 'B2',
    topic: 'vocab-power-b2-plus',
    difficulty: 'medium',
    content: {
      title: LESSON_TITLE,
      instructions: 'Completa con la colocación correcta.',
      questions: [
        {
          question: 'It is important to ____ steady progress.',
          options: [
            '[[make|hacer]]',
            '[[do|hacer]]',
            '[[take|tomar]]',
          ],
          correctAnswer: 'make',
          acceptableAnswers: ['make'],
          explanation: '[[Make steady progress|Make steady progress es la colocación correcta]].',
        },
      ],
    },
    topicName: 'Writing',
  },
  {
    id: 'b2-u62-l6-w5',
    type: 'writing',
    level: 'B2',
    topic: 'vocab-power-b2-plus',
    difficulty: 'medium',
    content: {
      title: LESSON_TITLE,
      instructions:
        'Escribe 2–3 frases usando: heavy traffic, strong opinion, key role.',
      prompt:
        '[[Write two or three sentences using: heavy traffic, strong opinion, key role.|Escribe dos o tres frases usando: heavy traffic, strong opinion, key role.]]',
      targetLength: '2-3 frases',
    },
    topicName: 'Writing',
  },
  {
    id: 'b2-u62-l6-w6',
    type: 'fill-blank',
    level: 'B2',
    topic: 'vocab-power-b2-plus',
    difficulty: 'medium',
    content: {
      title: LESSON_TITLE,
      instructions: 'Completa con el phrasal verb correcto.',
      questions: [
        {
          question:
            'If you don\'t understand a word, ____ it ____ in the dictionary.',
          options: [
            '[[look / up|buscar]]',
            '[[take / up|empezar]]',
            '[[get / up|levantarse]]',
          ],
          correctAnswer: 'look / up',
          acceptableAnswers: ['look / up', 'look up'],
          explanation: '[[Look up = buscar en un diccionario|Look up = buscar en un diccionario]].',
        },
      ],
    },
    topicName: 'Writing',
  },
  {
    id: 'b2-u62-l6-w7',
    type: 'writing',
    level: 'B2',
    topic: 'vocab-power-b2-plus',
    difficulty: 'medium',
    content: {
      title: LESSON_TITLE,
      instructions:
        'Escribe la introducción (40–60 palabras) de un essay sobre buenos hábitos de estudio. Usa: set up, stick to, make progress.',
      prompt:
        '[[Write an introduction to an essay about good study habits. Use: set up, stick to, make progress.|Escribe la introducción de un essay sobre buenos hábitos de estudio. Usa: set up, stick to, make progress.]]',
      writingType: 'article',
      targetLength: '40-60 palabras',
    },
    topicName: 'Writing',
  },
  {
    id: 'b2-u62-l6-w8',
    type: 'fill-blank',
    level: 'B2',
    topic: 'vocab-power-b2-plus',
    difficulty: 'medium',
    content: {
      title: LESSON_TITLE,
      instructions: 'Completa con la opción correcta.',
      questions: [
        {
          question:
            'The teacher asked the class to ____ responsibility for their own learning.',
          options: [
            '[[take|asumir]]',
            '[[make|hacer]]',
            '[[do|hacer]]',
          ],
          correctAnswer: 'take',
          acceptableAnswers: ['take'],
          explanation: '[[Take responsibility es la colocación natural|Take responsibility es la colocación natural]].',
        },
      ],
    },
    topicName: 'Writing',
  },
  {
    id: 'b2-u62-l6-w9',
    type: 'writing',
    level: 'B2',
    topic: 'vocab-power-b2-plus',
    difficulty: 'medium',
    content: {
      title: LESSON_TITLE,
      instructions:
        'Escribe 3 frases con estos phrasal verbs: give up, take up, come across.',
      prompt:
        '[[Write three sentences using: give up, take up, come across.|Escribe tres frases usando: give up, take up, come across.]]',
      targetLength: '3 frases',
    },
    topicName: 'Writing',
  },
  {
    id: 'b2-u62-l6-w10',
    type: 'fill-blank',
    level: 'B2',
    topic: 'vocab-power-b2-plus',
    difficulty: 'medium',
    content: {
      title: LESSON_TITLE,
      instructions: 'Completa con la colocación correcta.',
      questions: [
        {
          question: 'Learning vocabulary plays a ____ role in language exams.',
          options: [
            '[[key|clave]]',
            '[[big|grande]]',
            '[[strong|fuerte]]',
          ],
          correctAnswer: 'key',
          acceptableAnswers: ['key'],
          explanation: '[[Play a key role|Play a key role es la colocación correcta]].',
        },
      ],
    },
    topicName: 'Writing',
  },
  {
    id: 'b2-u62-l6-w11',
    type: 'writing',
    level: 'B2',
    topic: 'vocab-power-b2-plus',
    difficulty: 'medium',
    content: {
      title: LESSON_TITLE,
      instructions:
        'Escribe 60–80 palabras explicando por qué las collocations son importantes para escribir buenos essays.',
      prompt:
        '[[Explain why collocations are important for writing good essays.|Explica por qué las colocaciones son importantes para escribir buenos essays.]]',
      targetLength: '60-80 palabras',
    },
    topicName: 'Writing',
  },
  {
    id: 'b2-u62-l6-w12',
    type: 'writing',
    level: 'B2',
    topic: 'vocab-power-b2-plus',
    difficulty: 'medium',
    content: {
      title: LESSON_TITLE,
      instructions:
        'Escribe 2–3 frases describiendo cómo el vocabulario de esta unidad puede ayudarte en la parte Use of English de un examen B2.',
      prompt:
        '[[Describe how the vocabulary from this unit can help you in the Use of English part of a B2 exam.|Describe cómo el vocabulario de esta unidad puede ayudarte en la parte Use of English de un examen B2.]]',
      targetLength: '2-3 frases',
    },
    topicName: 'Writing',
  },
];

