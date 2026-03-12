/**
 * Unidad 19 B2 — Lección 6: Expresión escrita (Sport)
 * 18 ejercicios (B2: más vocabulario y complejidad que B1)
 */

import { Exercise } from '@/lib/exercise-generator';

const LESSON_TITLE = '[[Writing|Expresión escrita]]';

export const UNIT_19_LESSON_6_WRITING: Exercise[] = [
  {
    id: 'b2-u19-l6-w1',
    type: 'writing',
    level: 'B2',
    topic: 'Sport',
    difficulty: 'medium',
    content: {
      title: LESSON_TITLE,
      instructions:
        'Escribe 3–4 frases comparando dos deportes usando comparativos y superlativos avanzados.',
      prompt:
        'Compare two sports. Use: the more... the more, far/much + comparative, as... as, or one of the most.',
      targetLevel: 'B2',
      writingType: 'description',
      targetLength: '3-4 frases',
    },
    topicName: 'Writing',
  },
  {
    id: 'b2-u19-l6-w2',
    type: 'fill-blank',
    level: 'B2',
    topic: 'Sport',
    difficulty: 'medium',
    content: {
      title: LESSON_TITLE,
      instructions: 'Completa con la forma correcta del comparativo o superlativo.',
      questions: [
        {
          question:
            '____ more you train, ____ fit you become.',
          options: ['The / the', 'More / more', 'The most / the most'],
          correctAnswer: 'The / the',
          acceptableAnswers: ['The / the'],
          explanation:
            'The more... the more: cuanto más... más. Doble comparativo para correlación.',
        },
      ],
    },
    topicName: 'Writing',
  },
  {
    id: 'b2-u19-l6-w3',
    type: 'writing',
    level: 'B2',
    topic: 'Sport',
    difficulty: 'medium',
    content: {
      title: LESSON_TITLE,
      instructions: 'Reescribe la frase usando "by far" + superlativo.',
      prompt:
        'Rewrite: "He is the best player." → Add emphasis with "by far"',
      expressionHint: 'He is by far the best player.',
      targetLength: '1 frase',
    },
    topicName: 'Writing',
  },
  {
    id: 'b2-u19-l6-w4',
    type: 'writing',
    level: 'B2',
    topic: 'Sport',
    difficulty: 'medium',
    content: {
      title: LESSON_TITLE,
      instructions:
        'Escribe 2 frases: una con "as... as" y otra con "not as... as".',
      prompt:
        'Write two sentences about sport using "as... as" (equality) and "not as... as" (inequality).',
      targetLength: '2 frases',
    },
    topicName: 'Writing',
  },
  {
    id: 'b2-u19-l6-w5',
    type: 'fill-blank',
    level: 'B2',
    topic: 'Sport',
    difficulty: 'medium',
    content: {
      title: LESSON_TITLE,
      instructions: 'Completa con far, much, slightly o by far.',
      questions: [
        {
          question:
            'She runs ____ faster than she did last year.',
          options: ['far', 'more', 'the most'],
          correctAnswer: 'far',
          acceptableAnswers: ['far', 'much'],
          explanation:
            'Far/much + comparative: enfatiza la diferencia.',
        },
      ],
    },
    topicName: 'Writing',
  },
  {
    id: 'b2-u19-l6-w6',
    type: 'writing',
    level: 'B2',
    topic: 'Sport',
    difficulty: 'medium',
    content: {
      title: LESSON_TITLE,
      instructions:
        'Escribe un breve párrafo (3–4 frases) sobre una competición o partido. Incluye al menos un comparativo o superlativo avanzado.',
      prompt:
        'Describe a competition or match. Use: the more... the more, far/much + comparative, by far the best, or one of the most.',
      targetLength: '3-4 frases',
    },
    topicName: 'Writing',
  },
  {
    id: 'b2-u19-l6-w7',
    type: 'writing',
    level: 'B2',
    topic: 'Sport',
    difficulty: 'medium',
    content: {
      title: LESSON_TITLE,
      instructions: 'Completa las frases con ideas propias usando comparativos o superlativos.',
      prompt:
        'Finish these sentences:\n1. The more you... the more...\n2. ... is by far the most...\n3. ... is less... than...',
      targetLength: '3-4 frases',
    },
    topicName: 'Writing',
  },
  {
    id: 'b2-u19-l6-w8',
    type: 'fill-blank',
    level: 'B2',
    topic: 'Sport',
    difficulty: 'medium',
    content: {
      title: LESSON_TITLE,
      instructions: 'Completa con la forma correcta.',
      questions: [
        {
          question:
            'Barcelona is one of ____ most popular football clubs in the world.',
          options: ['the', 'a', '—'],
          correctAnswer: 'the',
          acceptableAnswers: ['the'],
          explanation:
            'One of the + superlative + plural: "the" es obligatorio.',
        },
      ],
    },
    topicName: 'Writing',
  },
  {
    id: 'b2-u19-l6-w9',
    type: 'writing',
    level: 'B2',
    topic: 'Sport',
    difficulty: 'medium',
    content: {
      title: LESSON_TITLE,
      instructions:
        'Escribe la introducción de un artículo (40–60 palabras) sobre la importancia del entrenamiento en el deporte.',
      prompt:
        'Write an introduction to an article about why training is important in sport. Use vocabulary: endurance, qualify, performance, consistency.',
      writingType: 'article',
      targetLength: '40-60 palabras',
    },
    topicName: 'Writing',
  },
  {
    id: 'b2-u19-l6-w10',
    type: 'writing',
    level: 'B2',
    topic: 'Sport',
    difficulty: 'medium',
    content: {
      title: LESSON_TITLE,
      instructions:
        'Escribe 2–3 frases explicando por qué el descanso es tan importante como el entrenamiento.',
      prompt:
        'Explain why rest is important for athletes. Use "as... as" or "no less important than".',
      targetLength: '2-3 frases',
    },
    topicName: 'Writing',
  },
  {
    id: 'b2-u19-l6-w11',
    type: 'fill-blank',
    level: 'B2',
    topic: 'Sport',
    difficulty: 'medium',
    content: {
      title: LESSON_TITLE,
      instructions: 'Completa con la forma correcta.',
      questions: [
        {
          question:
            'That was ____ match I have ever watched.',
          options: ['the best', 'the better', 'best'],
          correctAnswer: 'the best',
          acceptableAnswers: ['the best'],
          explanation:
            'Superlative + ever: el mejor que he visto jamás. "The best... I have ever watched".',
        },
      ],
    },
    topicName: 'Writing',
  },
  {
    id: 'b2-u19-l6-w12',
    type: 'writing',
    level: 'B2',
    topic: 'Sport',
    difficulty: 'medium',
    content: {
      title: LESSON_TITLE,
      instructions:
        'Transforma la frase usando "less... than": "Swimming is not as dangerous as rock climbing."',
      prompt:
        'Use "less... than" to express the same idea.',
      expressionHint: 'Swimming is less dangerous than rock climbing.',
      targetLength: '1 frase',
    },
    topicName: 'Writing',
  },
  {
    id: 'b2-u19-l6-w13',
    type: 'writing',
    level: 'B2',
    topic: 'Sport',
    difficulty: 'medium',
    content: {
      title: LESSON_TITLE,
      instructions:
        'Escribe 3 frases: una con "the more... the more", otra con "far/much + comparative" y otra con "one of the most".',
      prompt:
        'Write three sentences about sport using:\n- the more... the more\n- far or much + comparative\n- one of the most + superlative',
      targetLength: '3 frases',
    },
    topicName: 'Writing',
  },
  {
    id: 'b2-u19-l6-w14',
    type: 'fill-blank',
    level: 'B2',
    topic: 'Sport',
    difficulty: 'medium',
    content: {
      title: LESSON_TITLE,
      instructions: 'Completa con la forma correcta.',
      questions: [
        {
          question:
            'Of the two runners, Maria is ____.',
          options: ['the faster', 'the fastest', 'faster'],
          correctAnswer: 'the faster',
          acceptableAnswers: ['the faster'],
          explanation:
            'Of the two: el comparativo con "the" cuando se comparan exactamente dos.',
        },
      ],
    },
    topicName: 'Writing',
  },
  {
    id: 'b2-u19-l6-w15',
    type: 'writing',
    level: 'B2',
    topic: 'Sport',
    difficulty: 'medium',
    content: {
      title: LESSON_TITLE,
      instructions:
        'Escribe un breve texto (aprox. 60–80 palabras) sobre las ventajas de los deportes de equipo.',
      prompt:
        'Explain the advantages of team sports. Use comparatives (more/less, as... as) and vocabulary: teamwork, qualify, championship, referee.',
      targetLength: '60-80 palabras',
    },
    topicName: 'Writing',
  },
  {
    id: 'b2-u19-l6-w16',
    type: 'writing',
    level: 'B2',
    topic: 'Sport',
    difficulty: 'medium',
    content: {
      title: LESSON_TITLE,
      instructions:
        'Escribe 2–3 frases aconsejando a un atleta sobre cómo mejorar. Usa "the more... the more".',
      prompt:
        'Give advice to an athlete. Use "the more... the more" (e.g. "The more you practice, the more confident you become").',
      targetLength: '2-3 frases',
    },
    topicName: 'Writing',
  },
  {
    id: 'b2-u19-l6-w17',
    type: 'fill-blank',
    level: 'B2',
    topic: 'Sport',
    difficulty: 'medium',
    content: {
      title: LESSON_TITLE,
      instructions: 'Completa con la forma correcta.',
      questions: [
        {
          question:
            'Extreme sports are becoming ____ popular among young people.',
          options: ['increasingly', 'more and more', 'the most'],
          correctAnswer: 'increasingly',
          acceptableAnswers: ['increasingly'],
          explanation:
            'Increasingly + adjective: cada vez más popular.',
        },
      ],
    },
    topicName: 'Writing',
  },
  {
    id: 'b2-u19-l6-w18',
    type: 'writing',
    level: 'B2',
    topic: 'Sport',
    difficulty: 'medium',
    content: {
      title: LESSON_TITLE,
      instructions:
        'Redacta la conclusión de un artículo (40–60 palabras) sobre por qué el deporte es importante para la salud.',
      prompt:
        'Write a short conclusion explaining why sport is important for health. Use comparatives or superlatives where appropriate.',
      targetLength: '40-60 palabras',
    },
    topicName: 'Writing',
  },
];
