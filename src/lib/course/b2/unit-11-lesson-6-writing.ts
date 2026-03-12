/**
 * Unidad 11 B2 — Lección 6: Expresión escrita (Culture)
 * 18 ejercicios (B2: más vocabulario y complejidad que B1)
 */

import { Exercise } from '@/lib/exercise-generator';

const LESSON_TITLE = '[[Writing|Expresión escrita]]';

export const UNIT_11_LESSON_6_WRITING: Exercise[] = [
  {
    id: 'b2-u11-l6-w1',
    type: 'writing',
    level: 'B2',
    topic: 'Culture',
    difficulty: 'medium',
    content: {
      title: LESSON_TITLE,
      instructions:
        'Escribe 3–4 frases describiendo un festival de tu ciudad o país. Usa al menos 2 oraciones de relativo (who, which, where).',
      prompt:
        '[[Describe a local festival, including:|Describe un festival local, incluyendo:]]\n[[- people who take part|- personas que participan]]\n[[- places where the main events happen|- lugares donde tienen lugar los eventos principales]]\n[[- things which make it special for you|- cosas que lo hacen especial para ti]]',
      targetLevel: 'B2',
      writingType: 'description',
      targetLength: '3-4 frases',
    },
    topicName: 'Writing',
  },
  {
    id: 'b2-u11-l6-w2',
    type: 'fill-blank',
    level: 'B2',
    topic: 'Culture',
    difficulty: 'medium',
    content: {
      title: LESSON_TITLE,
      instructions: 'Completa con el relativo correcto: who, which, where o whose.',
      questions: [
        {
          question:
            '[[The festival ____ we celebrate in spring is the most important event of the year.|El festival ____ que celebramos en primavera es el evento más importante del año.]]',
          options: ['[[who|quien]]', '[[which|que]]', '[[where|donde]]'],
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
    id: 'b2-u11-l6-w3',
    type: 'writing',
    level: 'B2',
    topic: 'Culture',
    difficulty: 'medium',
    content: {
      title: LESSON_TITLE,
      instructions:
        'Reescribe estas dos frases como una sola usando una non-defining relative clause.',
      prompt:
        '[[I grew up in a small village. The village is famous for its traditional dances.|Crecí en un pueblo pequeño. El pueblo es famoso por sus bailes tradicionales.]]',
      expressionHint: '[[Usa: "The village, which ... , is ..."|Usa: "The village, which ... , is ..."]]',
      targetLength: '1-2 frases',
    },
    topicName: 'Writing',
  },
  {
    id: 'b2-u11-l6-w4',
    type: 'writing',
    level: 'B2',
    topic: 'Culture',
    difficulty: 'medium',
    content: {
      title: LESSON_TITLE,
      instructions:
        'Escribe 2 frases sobre personas de tu familia que mantienen vivas las tradiciones. Usa oraciones de relativo.',
      prompt:
        '[[Write two sentences about relatives who keep family traditions alive (for example, a grandmother who cooks traditional food).|Escribe dos oraciones sobre familiares que mantienen vivas las tradiciones familiares (por ejemplo, una abuela que cocina comida tradicional).]]',
      targetLength: '2 frases',
    },
    topicName: 'Writing',
  },
  {
    id: 'b2-u11-l6-w5',
    type: 'fill-blank',
    level: 'B2',
    topic: 'Culture',
    difficulty: 'medium',
    content: {
      title: LESSON_TITLE,
      instructions: 'Completa la oración de relativo.',
      questions: [
        {
          question:
            '[[Our traditional costume, ____ is made by hand, is a symbol of our identity.|Nuestro traje tradicional, ____ que está hecho a mano, es un símbolo de nuestra identidad.]]',
          options: ['[[who|quien]]', '[[which|que]]', '[[where|donde]]'],
          correctAnswer: '[[which|que]]',
          acceptableAnswers: ['[[which|que]]'],
          explanation:
            'Non-defining clause con cosas → "which" entre comas.',
        },
      ],
    },
    topicName: 'Writing',
  },
  {
    id: 'b2-u11-l6-w6',
    type: 'writing',
    level: 'B2',
    topic: 'Culture',
    difficulty: 'medium',
    content: {
      title: LESSON_TITLE,
      instructions:
        'Escribe un breve párrafo (3–4 frases) sobre un lugar que sea importante para la cultura de tu ciudad (un edificio, una plaza, un museo). Usa al menos una oración de relativo.',
      prompt:
        '[[Describe a cultural place in your city (for example, a square where concerts take place or a museum which tourists love).|Describe un lugar cultural de tu ciudad (por ejemplo, una plaza donde tienen lugar conciertos o un museo que les encanta a los turistas).]]',
      targetLength: '3-4 frases',
    },
    topicName: 'Writing',
  },
  {
    id: 'b2-u11-l6-w7',
    type: 'writing',
    level: 'B2',
    topic: 'Culture',
    difficulty: 'medium',
    content: {
      title: LESSON_TITLE,
      instructions:
        'Completa las frases con ideas propias usando oraciones de relativo.',
      prompt:
        '[[Finish these sentences:|Completa estas oraciones:]]\n[[1. The festival that I enjoy most is...|1. El festival que más disfruto es...]]\n[[2. The people who make the festival special are...|2. Las personas que hacen especial el festival son...]]\n[[3. The place where everyone meets is...|3. El lugar donde todo el mundo se reúne es...]]',
      targetLength: '3-4 frases',
    },
    topicName: 'Writing',
  },
  {
    id: 'b2-u11-l6-w8',
    type: 'fill-blank',
    level: 'B2',
    topic: 'Culture',
    difficulty: 'medium',
    content: {
      title: LESSON_TITLE,
      instructions:
        'Completa con "who", "which", "where" o "whose" para practicar antes de escribir.',
      questions: [
        {
          question:
            '[[The elder ____ stories we listen to every year always starts the festival.|El anciano ____ cuyas historias escuchamos cada año siempre inicia el festival.]]',
          options: ['[[who|quien]]', '[[whose|cuyo/cuya]]', '[[where|donde]]'],
          correctAnswer: '[[whose|cuyo/cuya]]',
          acceptableAnswers: ['[[whose|cuyo/cuya]]'],
          explanation:
            '"Whose stories" indica posesión; es la persona cuyas historias escuchamos.',
        },
      ],
    },
    topicName: 'Writing',
  },
  {
    id: 'b2-u11-l6-w9',
    type: 'writing',
    level: 'B2',
    topic: 'Culture',
    difficulty: 'medium',
    content: {
      title: LESSON_TITLE,
      instructions:
        'Escribe la introducción de un artículo (40–60 palabras) sobre un festival cultural para un blog de viajes.',
      prompt:
        '[[Write an introduction to an article about a cultural festival which you would recommend to foreign visitors.|Escribe la introducción de un artículo sobre un festival cultural que recomendarías a visitantes extranjeros.]]',
      writingType: 'article',
      targetLength: '40-60 palabras',
    },
    topicName: 'Writing',
  },
  {
    id: 'b2-u11-l6-w10',
    type: 'writing',
    level: 'B2',
    topic: 'Culture',
    difficulty: 'medium',
    content: {
      title: LESSON_TITLE,
      instructions:
        'Escribe 2–3 frases explicando por qué es importante proteger el patrimonio cultural.',
      prompt:
        '[[Explain why cultural heritage, which includes festivals and traditional food, should be protected.|Explica por qué el patrimonio cultural, que incluye festivales y comida tradicional, debería protegerse.]]',
      targetLength: '2-3 frases',
    },
    topicName: 'Writing',
  },
  {
    id: 'b2-u11-l6-w11',
    type: 'fill-blank',
    level: 'B2',
    topic: 'Culture',
    difficulty: 'medium',
    content: {
      title: LESSON_TITLE,
      instructions: 'Completa con el relativo adecuado.',
      questions: [
        {
          question:
            '[[The market ____ we buy traditional food is in the old part of the town.|El mercado ____ donde compramos comida tradicional está en la parte antigua del pueblo.]]',
          options: ['[[who|quien]]', '[[which|que]]', '[[where|donde]]'],
          correctAnswer: '[[where|donde]]',
          acceptableAnswers: ['[[where|donde]]'],
          explanation:
            'Se refiere al lugar donde compramos comida tradicional → "where".',
        },
      ],
    },
    topicName: 'Writing',
  },
  {
    id: 'b2-u11-l6-w12',
    type: 'writing',
    level: 'B2',
    topic: 'Culture',
    difficulty: 'medium',
    content: {
      title: LESSON_TITLE,
      instructions:
        'Convierte estas frases en una sola frase con una oración de relativo.',
      prompt:
        '[[Our town has a theatre. The theatre hosts traditional music performances every winter.|Nuestro pueblo tiene un teatro. El teatro acoge actuaciones de música tradicional cada invierno.]]',
      expressionHint: '[[Usa: "The theatre, which ... , ..."|Usa: "The theatre, which ... , ..."]]',
      targetLength: '1 frase',
    },
    topicName: 'Writing',
  },
  {
    id: 'b2-u11-l6-w13',
    type: 'writing',
    level: 'B2',
    topic: 'Culture',
    difficulty: 'medium',
    content: {
      title: LESSON_TITLE,
      instructions:
        'Escribe 3 ejemplos de oraciones de relativo sobre tu propia cultura (una con who, otra con which/that y otra con where).',
      prompt:
        '[[Write three relative clauses about your own culture:|Escribe tres oraciones de relativo sobre tu propia cultura:]]\n[[- one with "who"|- una con "who"]]\n[[- one with "which/that"|- una con "which/that"]]\n[[- one with "where"|- una con "where"]]',
      targetLength: '3 frases',
    },
    topicName: 'Writing',
  },
  {
    id: 'b2-u11-l6-w14',
    type: 'fill-blank',
    level: 'B2',
    topic: 'Culture',
    difficulty: 'medium',
    content: {
      title: LESSON_TITLE,
      instructions: 'Completa con "who" o "which".',
      questions: [
        {
          question:
            '[[The musicians ____ play at the festival are all local artists.|Los músicos ____ que tocan en el festival son todos artistas locales.]]',
          options: ['[[who|quien]]', '[[which|que]]'],
          correctAnswer: '[[who|quien]]',
          acceptableAnswers: ['[[who|quien]]'],
          explanation:
            'Con personas como sujeto de la cláusula de relativo usamos "who".',
        },
      ],
    },
    topicName: 'Writing',
  },
  {
    id: 'b2-u11-l6-w15',
    type: 'writing',
    level: 'B2',
    topic: 'Culture',
    difficulty: 'medium',
    content: {
      title: LESSON_TITLE,
      instructions:
        'Escribe un breve texto (aprox. 60–80 palabras) sobre cómo se ha modernizado una tradición en tu país.',
      prompt:
        '[[Explain how a traditional celebration in your country has changed over time but still keeps elements which are important for people.|Explica cómo una celebración tradicional de tu país ha cambiado con el tiempo pero sigue manteniendo elementos importantes para la gente.]]',
      targetLength: '60-80 palabras',
    },
    topicName: 'Writing',
  },
  {
    id: 'b2-u11-l6-w16',
    type: 'writing',
    level: 'B2',
    topic: 'Culture',
    difficulty: 'medium',
    content: {
      title: LESSON_TITLE,
      instructions:
        'Escribe 2–3 frases aconsejando a un extranjero cómo respetar las costumbres locales cuando visite tu ciudad.',
      prompt:
        '[[Give advice to a foreign visitor who wants to respect local customs when visiting your town.|Da consejos a un visitante extranjero que quiere respetar las costumbres locales al visitar tu pueblo.]]',
      targetLength: '2-3 frases',
    },
    topicName: 'Writing',
  },
  {
    id: 'b2-u11-l6-w17',
    type: 'fill-blank',
    level: 'B2',
    topic: 'Culture',
    difficulty: 'medium',
    content: {
      title: LESSON_TITLE,
      instructions: 'Completa con el relativo correcto.',
      questions: [
        {
          question:
            '[[Our national day, ____ is celebrated in July, brings together people from all regions.|Nuestro día nacional, ____ que se celebra en julio, reúne a gente de todas las regiones.]]',
          options: ['[[who|quien]]', '[[which|que]]', '[[where|donde]]'],
          correctAnswer: '[[which|que]]',
          acceptableAnswers: ['[[which|que]]'],
          explanation:
            'Non-defining relative clause con "which" para dar información extra sobre el día nacional.',
        },
      ],
    },
    topicName: 'Writing',
  },
  {
    id: 'b2-u11-l6-w18',
    type: 'writing',
    level: 'B2',
    topic: 'Culture',
    difficulty: 'medium',
    content: {
      title: LESSON_TITLE,
      instructions:
        'Redacta la conclusión de un artículo (40–60 palabras) sobre por qué las fiestas tradicionales siguen siendo relevantes hoy.',
      prompt:
        '[[Write a short conclusion explaining why traditional festivals, which may seem old-fashioned to some people, are still important in modern society.|Escribe una breve conclusión explicando por qué los festivales tradicionales, que pueden parecer anticuados a algunas personas, siguen siendo importantes en la sociedad moderna.]]',
      targetLength: '40-60 palabras',
    },
    topicName: 'Writing',
  },
];
