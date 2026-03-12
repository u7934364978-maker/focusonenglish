/**
 * Unidad 12 B2 — Lección 6: Expresión escrita (Entertainment)
 * 18 ejercicios (B2: más vocabulario y complejidad que B1)
 */

import { Exercise } from '@/lib/exercise-generator';

const LESSON_TITLE = '[[Writing|Expresión escrita]]';

export const UNIT_12_LESSON_6_WRITING: Exercise[] = [
  {
    id: 'b2-u12-l6-w1',
    type: 'writing',
    level: 'B2',
    topic: 'Entertainment',
    difficulty: 'medium',
    content: {
      title: LESSON_TITLE,
      instructions:
        'Escribe una reseña corta (70–90 palabras) de una serie que uses para practicar inglés.',
      prompt:
        'Write a short review of a series which you watch to improve your English. Include:\n- what the series is about\n- what you like or dislike about it\n- why you would or would not recommend it to other learners',
      writingType: 'review',
      targetLength: '70-90 palabras',
    },
    topicName: 'Writing',
  },
  {
    id: 'b2-u12-l6-w2',
    type: 'fill-blank',
    level: 'B2',
    topic: 'Entertainment',
    difficulty: 'medium',
    content: {
      title: LESSON_TITLE,
      instructions:
        'Completa con una cláusula de relativo reducida (-ing / -ed) en contexto de entretenimiento.',
      questions: [
        {
          question:
            'The series ____ on a small budget became a surprise hit.',
          options: ['made', 'which made', 'making'],
          correctAnswer: 'made',
          acceptableAnswers: ['made'],
          explanation:
            'Reducción de "series which was made on a small budget" → "series made on a small budget".',
        },
      ],
    },
    topicName: 'Writing',
  },
  {
    id: 'b2-u12-l6-w3',
    type: 'writing',
    level: 'B2',
    topic: 'Entertainment',
    difficulty: 'medium',
    content: {
      title: LESSON_TITLE,
      instructions:
        'Une estas frases en una sola usando una cláusula de relativo reducida.',
      prompt:
        'The actor is very popular. He appears in a series about doctors.\nWrite one sentence using a reduced relative clause.',
      expressionHint: 'actor appearing in a series about doctors',
      targetLength: '1 frase',
    },
    topicName: 'Writing',
  },
  {
    id: 'b2-u12-l6-w4',
    type: 'writing',
    level: 'B2',
    topic: 'Entertainment',
    difficulty: 'medium',
    content: {
      title: LESSON_TITLE,
      instructions:
        'Describe 2–3 escenas de una película que recuerdes bien, usando al menos una cláusula reducida por frase.',
      prompt:
        'Describe two or three scenes from a film which you remember clearly. Use at least one reduced relative clause in each sentence (for example: "the scene filmed on the beach").',
      targetLength: '3-4 frases',
    },
    topicName: 'Writing',
  },
  {
    id: 'b2-u12-l6-w5',
    type: 'fill-blank',
    level: 'B2',
    topic: 'Entertainment',
    difficulty: 'medium',
    content: {
      title: LESSON_TITLE,
      instructions: 'Completa con la forma reducida correcta.',
      questions: [
        {
          question:
            'The fans ____ for hours outside the stadium were given free tickets.',
          options: ['waiting', 'who waiting', 'which wait'],
          correctAnswer: 'waiting',
          acceptableAnswers: ['waiting'],
          explanation:
            'Reducción de "fans who were waiting" → "fans waiting".',
        },
      ],
    },
    topicName: 'Writing',
  },
  {
    id: 'b2-u12-l6-w6',
    type: 'writing',
    level: 'B2',
    topic: 'Entertainment',
    difficulty: 'medium',
    content: {
      title: LESSON_TITLE,
      instructions:
        'Escribe un breve texto (60–80 palabras) sobre cómo han cambiado tus hábitos de ocio en los últimos años.',
      prompt:
        'Explain how your entertainment habits have changed over the last few years (for example, cinema vs streaming, social media, concerts).',
      targetLength: '60-80 palabras',
    },
    topicName: 'Writing',
  },
  {
    id: 'b2-u12-l6-w7',
    type: 'writing',
    level: 'B2',
    topic: 'Entertainment',
    difficulty: 'medium',
    content: {
      title: LESSON_TITLE,
      instructions:
        'Escribe 3–4 frases dando consejos para usar el streaming de forma saludable.',
      prompt:
        'Give advice to a friend who spends too many hours binge-watching series. Use expressions like "instead of", "which can be", "so that".',
      targetLength: '3-4 frases',
    },
    topicName: 'Writing',
  },
  {
    id: 'b2-u12-l6-w8',
    type: 'fill-blank',
    level: 'B2',
    topic: 'Entertainment',
    difficulty: 'medium',
    content: {
      title: LESSON_TITLE,
      instructions: 'Completa con "who", "which", "where" u omitiendo el relativo si es posible.',
      questions: [
        {
          question:
            'The platform ____ I use most offers films in original version with subtitles.',
          options: ['which', 'who', 'where'],
          correctAnswer: 'which',
          acceptableAnswers: ['which', 'that'],
          explanation:
            'Se trata de una cosa (platform) → "which/that"; aquí no usamos "where" porque se habla del servicio, no del lugar físico.',
        },
      ],
    },
    topicName: 'Writing',
  },
  {
    id: 'b2-u12-l6-w9',
    type: 'writing',
    level: 'B2',
    topic: 'Entertainment',
    difficulty: 'medium',
    content: {
      title: LESSON_TITLE,
      instructions:
        'Redacta la introducción de un artículo (40–60 palabras) sobre si el cine tradicional sobrevivirá a las plataformas de streaming.',
      prompt:
        'Write an introduction for an article about whether cinemas will survive in the age of streaming.',
      writingType: 'article',
      targetLength: '40-60 palabras',
    },
    topicName: 'Writing',
  },
  {
    id: 'b2-u12-l6-w10',
    type: 'writing',
    level: 'B2',
    topic: 'Entertainment',
    difficulty: 'medium',
    content: {
      title: LESSON_TITLE,
      instructions:
        'Escribe 2–3 frases comparando dos series usando vocabulario de entretenimiento.',
      prompt:
        'Compare two series you have watched recently, using adjectives like "gripping", "predictable", "thought-provoking", "light-hearted".',
      targetLength: '2-3 frases',
    },
    topicName: 'Writing',
  },
  {
    id: 'b2-u12-l6-w11',
    type: 'fill-blank',
    level: 'B2',
    topic: 'Entertainment',
    difficulty: 'medium',
    content: {
      title: LESSON_TITLE,
      instructions: 'Completa con el relativo adecuado.',
      questions: [
        {
          question:
            'The critic ____ review I read online recommended the film strongly.',
          options: ['whose', 'who', 'which'],
          correctAnswer: 'whose',
          acceptableAnswers: ['whose'],
          explanation:
            '"Whose review" indica posesión: la reseña de ese crítico.',
        },
      ],
    },
    topicName: 'Writing',
  },
  {
    id: 'b2-u12-l6-w12',
    type: 'writing',
    level: 'B2',
    topic: 'Entertainment',
    difficulty: 'medium',
    content: {
      title: LESSON_TITLE,
      instructions:
        'Une estas frases en una sola usando una cláusula no reducida o reducida.',
      prompt:
        'There is a documentary. It focuses on social media addiction.\nWrite one sentence using a relative clause (for example: "a documentary which focuses on social media addiction").',
      targetLength: '1 frase',
    },
    topicName: 'Writing',
  },
  {
    id: 'b2-u12-l6-w13',
    type: 'writing',
    level: 'B2',
    topic: 'Entertainment',
    difficulty: 'medium',
    content: {
      title: LESSON_TITLE,
      instructions:
        'Escribe 3 frases con cláusulas reducidas sobre tu propia experiencia con conciertos o festivales.',
      prompt:
        'Write three sentences using reduced relative clauses about concerts or festivals you have attended (for example: "The concert held in the park was unforgettable").',
      targetLength: '3 frases',
    },
    topicName: 'Writing',
  },
  {
    id: 'b2-u12-l6-w14',
    type: 'fill-blank',
    level: 'B2',
    topic: 'Entertainment',
    difficulty: 'medium',
    content: {
      title: LESSON_TITLE,
      instructions:
        'Completa con una forma reducida o con la cláusula completa si no puede reducirse.',
      questions: [
        {
          question:
            'The show ____ late at night attracts a very specific audience.',
          options: ['broadcast', 'which broadcast', 'who is broadcast'],
          correctAnswer: 'broadcast',
          acceptableAnswers: ['broadcast'],
          explanation:
            'Reducción de "show which is broadcast late at night" → "show broadcast late at night".',
        },
      ],
    },
    topicName: 'Writing',
  },
  {
    id: 'b2-u12-l6-w15',
    type: 'writing',
    level: 'B2',
    topic: 'Entertainment',
    difficulty: 'medium',
    content: {
      title: LESSON_TITLE,
      instructions:
        'Escribe la conclusión de una reseña (40–60 palabras) sobre una película que recomiendas.',
      prompt:
        'Write a short conclusion to a review of a film you recommend, summarising why it is worth watching.',
      writingType: 'review',
      targetLength: '40-60 palabras',
    },
    topicName: 'Writing',
  },
  {
    id: 'b2-u12-l6-w16',
    type: 'writing',
    level: 'B2',
    topic: 'Entertainment',
    difficulty: 'medium',
    content: {
      title: LESSON_TITLE,
      instructions:
        'Escribe 2–3 frases sobre cómo el entretenimiento puede ayudar a conocer otras culturas.',
      prompt:
        'Explain how films, series and documentaries which show different cultures can change our opinions and stereotypes.',
      targetLength: '2-3 frases',
    },
    topicName: 'Writing',
  },
  {
    id: 'b2-u12-l6-w17',
    type: 'fill-blank',
    level: 'B2',
    topic: 'Entertainment',
    difficulty: 'medium',
    content: {
      title: LESSON_TITLE,
      instructions: 'Completa con el relativo correcto.',
      questions: [
        {
          question:
            'The scenes ____ were cut from the final version are available in the bonus material.',
          options: ['which', 'who', 'where'],
          correctAnswer: 'which',
          acceptableAnswers: ['which'],
          explanation:
            'Se refiere a "scenes" (cosas) como sujeto de la cláusula pasiva → "which were cut".',
        },
      ],
    },
    topicName: 'Writing',
  },
  {
    id: 'b2-u12-l6-w18',
    type: 'writing',
    level: 'B2',
    topic: 'Entertainment',
    difficulty: 'medium',
    content: {
      title: LESSON_TITLE,
      instructions:
        'Escribe un breve texto (50–70 palabras) imaginando el entretenimiento del futuro.',
      prompt:
        'Imagine what entertainment will be like in 20 years. Mention technologies which might exist and how they could change the way we watch films and series.',
      targetLength: '50-70 palabras',
    },
    topicName: 'Writing',
  },
];
