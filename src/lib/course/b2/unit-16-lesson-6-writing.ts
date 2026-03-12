/**
 * Unidad 16 B2 — Lección 6: Expresión escrita (Technology)
 * 18 ejercicios (B2: más vocabulario y complejidad que B1)
 */

import { Exercise } from '@/lib/exercise-generator';

const LESSON_TITLE = '[[Writing|Expresión escrita]]';

export const UNIT_16_LESSON_6_WRITING: Exercise[] = [
  {
    id: 'b2-u16-l6-w1',
    type: 'writing',
    level: 'B2',
    topic: 'Technology',
    difficulty: 'medium',
    content: {
      title: LESSON_TITLE,
      instructions:
        'Escribe 3–4 frases describiendo cómo se usa la tecnología en tu vida usando al menos 2 estructuras pasivas.',
      prompt:
        'Describe how technology is used in your daily life. Use passive voice (e.g. is used, was invented, has been changed).',
      targetLevel: 'B2',
      writingType: 'description',
      targetLength: '3-4 frases',
    },
    topicName: 'Writing',
  },
  {
    id: 'b2-u16-l6-w2',
    type: 'fill-blank',
    level: 'B2',
    topic: 'Technology',
    difficulty: 'medium',
    content: {
      title: LESSON_TITLE,
      instructions: 'Completa con la forma pasiva correcta (present simple).',
      questions: [
        {
          question:
            'Millions of emails ____ every day.',
          options: ['are sent', 'is sent', 'send'],
          correctAnswer: 'are sent',
          acceptableAnswers: ['are sent'],
          explanation:
            'Present simple passive: be + past participle. "Emails" es plural → "are sent".',
        },
      ],
    },
    topicName: 'Writing',
  },
  {
    id: 'b2-u16-l6-w3',
    type: 'writing',
    level: 'B2',
    topic: 'Technology',
    difficulty: 'medium',
    content: {
      title: LESSON_TITLE,
      instructions:
        'Transforma a pasiva: "They released the software last year."',
      prompt: 'Use passive voice.',
      expressionHint: 'The software was released last year.',
      targetLength: '1 frase',
    },
    topicName: 'Writing',
  },
  {
    id: 'b2-u16-l6-w4',
    type: 'writing',
    level: 'B2',
    topic: 'Technology',
    difficulty: 'medium',
    content: {
      title: LESSON_TITLE,
      instructions:
        'Escribe 2 frases sobre tecnología: una en present simple passive y otra en present perfect passive.',
      prompt:
        'Write two sentences about technology using:\n- present simple passive\n- present perfect passive',
      targetLength: '2 frases',
    },
    topicName: 'Writing',
  },
  {
    id: 'b2-u16-l6-w5',
    type: 'fill-blank',
    level: 'B2',
    topic: 'Technology',
    difficulty: 'medium',
    content: {
      title: LESSON_TITLE,
      instructions: 'Completa con la forma pasiva correcta (past simple).',
      questions: [
        {
          question:
            'The first smartphone ____ in 2007.',
          options: ['was released', 'were released', 'released'],
          correctAnswer: 'was released',
          acceptableAnswers: ['was released'],
          explanation:
            'Past simple passive: was + past participle.',
        },
      ],
    },
    topicName: 'Writing',
  },
  {
    id: 'b2-u16-l6-w6',
    type: 'writing',
    level: 'B2',
    topic: 'Technology',
    difficulty: 'medium',
    content: {
      title: LESSON_TITLE,
      instructions:
        'Escribe un breve párrafo (3–4 frases) sobre un invento tecnológico y su impacto. Usa pasivas.',
      prompt:
        'Describe a technological invention and its impact. Use passive structures (was invented, is used, has been changed).',
      targetLength: '3-4 frases',
    },
    topicName: 'Writing',
  },
  {
    id: 'b2-u16-l6-w7',
    type: 'writing',
    level: 'B2',
    topic: 'Technology',
    difficulty: 'medium',
    content: {
      title: LESSON_TITLE,
      instructions:
        'Completa las frases con ideas propias usando pasivas.',
      prompt:
        'Finish these sentences:\n1. The internet was...\n2. Data is now...\n3. Many jobs have been...',
      targetLength: '3-4 frases',
    },
    topicName: 'Writing',
  },
  {
    id: 'b2-u16-l6-w8',
    type: 'fill-blank',
    level: 'B2',
    topic: 'Technology',
    difficulty: 'medium',
    content: {
      title: LESSON_TITLE,
      instructions: 'Completa con la forma pasiva correcta (present continuous).',
      questions: [
        {
          question:
            'A new app ____ by our team at the moment.',
          options: ['is being developed', 'is developed', 'develops'],
          correctAnswer: 'is being developed',
          acceptableAnswers: ['is being developed'],
          explanation:
            'Present continuous passive: am/is/are + being + past participle.',
        },
      ],
    },
    topicName: 'Writing',
  },
  {
    id: 'b2-u16-l6-w9',
    type: 'writing',
    level: 'B2',
    topic: 'Technology',
    difficulty: 'medium',
    content: {
      title: LESSON_TITLE,
      instructions:
        'Escribe la introducción de un artículo (40–60 palabras) sobre los beneficios de la tecnología.',
      prompt:
        'Write an introduction to an article about the benefits of technology. Use vocabulary: innovation, automation, communication, access.',
      writingType: 'article',
      targetLength: '40-60 palabras',
    },
    topicName: 'Writing',
  },
  {
    id: 'b2-u16-l6-w10',
    type: 'writing',
    level: 'B2',
    topic: 'Technology',
    difficulty: 'medium',
    content: {
      title: LESSON_TITLE,
      instructions:
        'Escribe 2–3 frases explicando por qué es importante la ciberseguridad.',
      prompt:
        'Explain why cybersecurity, which protects our data, is important in the modern world.',
      targetLength: '2-3 frases',
    },
    topicName: 'Writing',
  },
  {
    id: 'b2-u16-l6-w11',
    type: 'fill-blank',
    level: 'B2',
    topic: 'Technology',
    difficulty: 'medium',
    content: {
      title: LESSON_TITLE,
      instructions: 'Completa con la forma pasiva correcta (future).',
      questions: [
        {
          question:
            'The new feature ____ in the next update.',
          options: ['will be included', 'will include', 'is included'],
          correctAnswer: 'will be included',
          acceptableAnswers: ['will be included'],
          explanation:
            'Future passive: will + be + past participle.',
        },
      ],
    },
    topicName: 'Writing',
  },
  {
    id: 'b2-u16-l6-w12',
    type: 'writing',
    level: 'B2',
    topic: 'Technology',
    difficulty: 'medium',
    content: {
      title: LESSON_TITLE,
      instructions:
        'Transforma a pasiva: "They are developing a new app."',
      prompt: 'Use present continuous passive.',
      expressionHint: 'A new app is being developed.',
      targetLength: '1 frase',
    },
    topicName: 'Writing',
  },
  {
    id: 'b2-u16-l6-w13',
    type: 'writing',
    level: 'B2',
    topic: 'Technology',
    difficulty: 'medium',
    content: {
      title: LESSON_TITLE,
      instructions:
        'Escribe 3 frases con pasivas en distintos tiempos: present simple, past simple, present perfect.',
      prompt:
        'Write three sentences about technology using:\n- present simple passive\n- past simple passive\n- present perfect passive',
      targetLength: '3 frases',
    },
    topicName: 'Writing',
  },
  {
    id: 'b2-u16-l6-w14',
    type: 'fill-blank',
    level: 'B2',
    topic: 'Technology',
    difficulty: 'medium',
    content: {
      title: LESSON_TITLE,
      instructions: 'Completa con la forma pasiva correcta (present perfect).',
      questions: [
        {
          question:
            'The software ____ by thousands of users since its launch.',
          options: ['has been downloaded', 'have been downloaded', 'was downloaded'],
          correctAnswer: 'has been downloaded',
          acceptableAnswers: ['has been downloaded'],
          explanation:
            'Present perfect passive: has/have + been + past participle. "Software" es singular.',
        },
      ],
    },
    topicName: 'Writing',
  },
  {
    id: 'b2-u16-l6-w15',
    type: 'writing',
    level: 'B2',
    topic: 'Technology',
    difficulty: 'medium',
    content: {
      title: LESSON_TITLE,
      instructions:
        'Escribe un breve texto (aprox. 60–80 palabras) sobre cómo ha cambiado la tecnología la forma de trabajar.',
      prompt:
        'Explain how technology has changed the way we work. Use passive structures and vocabulary: automation, remote work, communication, data.',
      targetLength: '60-80 palabras',
    },
    topicName: 'Writing',
  },
  {
    id: 'b2-u16-l6-w16',
    type: 'writing',
    level: 'B2',
    topic: 'Technology',
    difficulty: 'medium',
    content: {
      title: LESSON_TITLE,
      instructions:
        'Escribe 2–3 frases aconsejando cómo proteger los datos personales online.',
      prompt:
        'Give advice on how to protect personal data online. Use vocabulary: password, backup, cybersecurity, update.',
      targetLength: '2-3 frases',
    },
    topicName: 'Writing',
  },
  {
    id: 'b2-u16-l6-w17',
    type: 'fill-blank',
    level: 'B2',
    topic: 'Technology',
    difficulty: 'medium',
    content: {
      title: LESSON_TITLE,
      instructions: 'Completa con la forma pasiva correcta (past perfect).',
      questions: [
        {
          question:
            'The data ____ before the server crashed.',
          options: ['had been backed up', 'has been backed up', 'was backed up'],
          correctAnswer: 'had been backed up',
          acceptableAnswers: ['had been backed up'],
          explanation:
            'Past perfect passive: had + been + past participle.',
        },
      ],
    },
    topicName: 'Writing',
  },
  {
    id: 'b2-u16-l6-w18',
    type: 'writing',
    level: 'B2',
    topic: 'Technology',
    difficulty: 'medium',
    content: {
      title: LESSON_TITLE,
      instructions:
        'Redacta la conclusión de un artículo (40–60 palabras) sobre el futuro de la tecnología.',
      prompt:
        'Write a short conclusion about the future of technology. Use passive voice where appropriate.',
      targetLength: '40-60 palabras',
    },
    topicName: 'Writing',
  },
];
