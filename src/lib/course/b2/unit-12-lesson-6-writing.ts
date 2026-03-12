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
        '[[Write a short review of a series which you watch to improve your English. Include:|Escribe una reseña corta de una serie que ves para mejorar tu inglés. Incluye:]]\n[[- what the series is about|- de qué trata la serie]]\n[[- what you like or dislike about it|- qué te gusta o disgusta]]\n[[- why you would or would not recommend it to other learners|- por qué la recomendarías o no a otros estudiantes]]',
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
            '[[The series ____ on a small budget became a surprise hit.|La serie ____ hecha con un presupuesto pequeño se convirtió en un éxito inesperado.]]',
          options: ['[[made|hecha]]', '[[which made|que hizo]]', '[[making|haciendo]]'],
          correctAnswer: '[[made|hecha]]',
          acceptableAnswers: ['[[made|hecha]]'],
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
        '[[The actor is very popular. He appears in a series about doctors.|El actor es muy popular. Aparece en una serie sobre médicos.]]\n[[Write one sentence using a reduced relative clause.|Escribe una oración usando una cláusula de relativo reducida.]]',
      expressionHint: '[[actor appearing in a series about doctors|actor que aparece en una serie sobre médicos]]',
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
        '[[Describe two or three scenes from a film which you remember clearly. Use at least one reduced relative clause in each sentence (for example: "the scene filmed on the beach").|Describe dos o tres escenas de una película que recuerdes claramente. Usa al menos una cláusula de relativo reducida en cada oración (por ejemplo: "the scene filmed on the beach").]]',
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
            '[[The fans ____ for hours outside the stadium were given free tickets.|Los fans ____ que esperaron horas fuera del estadio recibieron entradas gratis.]]',
          options: ['[[waiting|esperando]]', '[[who waiting|incorrecto]]', '[[which wait|incorrecto]]'],
          correctAnswer: '[[waiting|esperando]]',
          acceptableAnswers: ['[[waiting|esperando]]'],
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
        '[[Explain how your entertainment habits have changed over the last few years (for example, cinema vs streaming, social media, concerts).|Explica cómo han cambiado tus hábitos de ocio en los últimos años (por ejemplo, cine vs streaming, redes sociales, conciertos).]]',
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
        '[[Give advice to a friend who spends too many hours binge-watching series. Use expressions like "instead of", "which can be", "so that".|Da consejos a un amigo que pasa demasiadas horas viendo series seguidas. Usa expresiones como "instead of", "which can be", "so that".]]',
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
            '[[The platform ____ I use most offers films in original version with subtitles.|La plataforma ____ que uso más ofrece películas en versión original con subtítulos.]]',
          options: ['[[which|que]]', '[[who|quien]]', '[[where|donde]]'],
          correctAnswer: '[[which|que]]',
          acceptableAnswers: ['[[which|que]]', '[[that|que]]'],
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
        '[[Write an introduction for an article about whether cinemas will survive in the age of streaming.|Escribe la introducción de un artículo sobre si los cines sobrevivirán en la era del streaming.]]',
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
        '[[Compare two series you have watched recently, using adjectives like "gripping", "predictable", "thought-provoking", "light-hearted".|Compara dos series que hayas visto recientemente, usando adjetivos como "gripping", "predictable", "thought-provoking", "light-hearted".]]',
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
            '[[The critic ____ review I read online recommended the film strongly.|El crítico ____ cuya reseña leí online recomendó la película encarecidamente.]]',
          options: ['[[whose|cuyo/cuya]]', '[[who|quien]]', '[[which|que]]'],
          correctAnswer: '[[whose|cuyo/cuya]]',
          acceptableAnswers: ['[[whose|cuyo/cuya]]'],
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
        '[[There is a documentary. It focuses on social media addiction.|Hay un documental. Se centra en la adicción a las redes sociales.]]\n[[Write one sentence using a relative clause (for example: "a documentary which focuses on social media addiction").|Escribe una oración usando una cláusula de relativo (por ejemplo: "a documentary which focuses on social media addiction").]]',
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
        '[[Write three sentences using reduced relative clauses about concerts or festivals you have attended (for example: "The concert held in the park was unforgettable").|Escribe tres oraciones con cláusulas de relativo reducidas sobre conciertos o festivales a los que has asistido (por ejemplo: "The concert held in the park was unforgettable").]]',
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
            '[[The show ____ late at night attracts a very specific audience.|El programa ____ emitido tarde por la noche atrae a un público muy específico.]]',
          options: ['[[broadcast|emitido]]', '[[which broadcast|que emitió]]', '[[who is broadcast|incorrecto]]'],
          correctAnswer: '[[broadcast|emitido]]',
          acceptableAnswers: ['[[broadcast|emitido]]'],
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
        '[[Write a short conclusion to a review of a film you recommend, summarising why it is worth watching.|Escribe una breve conclusión de una reseña de una película que recomiendas, resumiendo por qué vale la pena verla.]]',
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
        '[[Explain how films, series and documentaries which show different cultures can change our opinions and stereotypes.|Explica cómo las películas, series y documentales que muestran diferentes culturas pueden cambiar nuestras opiniones y estereotipos.]]',
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
            '[[The scenes ____ were cut from the final version are available in the bonus material.|Las escenas ____ que fueron cortadas de la versión final están disponibles en el material extra.]]',
          options: ['[[which|que]]', '[[who|quien]]', '[[where|donde]]'],
          correctAnswer: '[[which|que]]',
          acceptableAnswers: ['[[which|que]]'],
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
        '[[Imagine what entertainment will be like in 20 years. Mention technologies which might exist and how they could change the way we watch films and series.|Imagina cómo será el entretenimiento en 20 años. Menciona tecnologías que podrían existir y cómo podrían cambiar la forma en que vemos películas y series.]]',
      targetLength: '50-70 palabras',
    },
    topicName: 'Writing',
  },
];
