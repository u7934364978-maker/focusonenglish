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
        '[[Compare two sports|Compara dos deportes]]. [[Use|Usa]]: [[the more... the more|cuanto más... más]], [[far/much + comparative|mucho + comparativo]], [[as... as|tan... como]], [[or one of the most|o uno de los más]].',
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
            '____ [[more|más]] [[you train|entrenas]], ____ [[fit|en forma]] [[you become|te vuelves]].',
          options: ['[[The / the|Cuanto más... más]]', '[[More / more|Más... más]]', '[[The most / the most|Lo más... lo más]]'],
          correctAnswer: '[[The / the|Cuanto más... más]]',
          acceptableAnswers: ['[[The / the|Cuanto más... más]]'],
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
        '[[Rewrite|Reescribe]]: "[[He is the best player|Él es el mejor jugador]]." → [[Add emphasis with|Añade énfasis con]] "[[by far|con diferencia]]"',
      expressionHint: '[[He is by far the best player|Él es con diferencia el mejor jugador]].',
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
        '[[Write two sentences about sport using|Escribe dos frases sobre deporte usando]] "[[as... as|tan... como]]" ([[equality|igualdad]]) y "[[not as... as|no tan... como]]" ([[inequality|desigualdad]]).',
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
            '[[She runs|Ella corre]] ____ [[faster|más rápido]] [[than she did last year|que el año pasado]].',
          options: ['[[far|mucho]]', '[[more|más]]', '[[the most|el más]]'],
          correctAnswer: '[[far|mucho]]',
          acceptableAnswers: ['[[far|mucho]]', '[[much|mucho]]'],
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
        '[[Describe a competition or match|Describe una competición o partido]]. [[Use|Usa]]: [[the more... the more|cuanto más... más]], [[far/much + comparative|mucho + comparativo]], [[by far the best|con diferencia el mejor]], [[or one of the most|o uno de los más]].',
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
        '[[Finish these sentences|Completa estas frases]]:\n1. [[The more you|Cuanto más]]... [[the more|más]]...\n2. ... [[is by far the most|es con diferencia el más]]...\n3. ... [[is less|es menos]]... [[than|que]]...',
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
            '[[Barcelona|El Barcelona]] [[is one of|es uno de]] ____ [[most popular football clubs|clubes de fútbol más populares]] [[in the world|del mundo]].',
          options: ['[[the|los]]', '[[a|un]]', '[[—|—]]'],
          correctAnswer: '[[the|los]]',
          acceptableAnswers: ['[[the|los]]'],
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
        '[[Write an introduction to an article about why training is important in sport|Escribe la introducción de un artículo sobre por qué el entrenamiento es importante en el deporte]]. [[Use vocabulary|Usa vocabulario]]: [[endurance|resistencia]], [[qualify|clasificarse]], [[performance|rendimiento]], [[consistency|consistencia]].',
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
        '[[Explain why rest is important for athletes|Explica por qué el descanso es importante para los atletas]]. [[Use|Usa]] "[[as... as|tan... como]]" o "[[no less important than|no menos importante que]]".',
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
            '[[That was|Ese fue]] ____ [[match|partido]] [[I have ever watched|que he visto jamás]].',
          options: ['[[the best|el mejor]]', '[[the better|el mejor]]', '[[best|mejor]]'],
          correctAnswer: '[[the best|el mejor]]',
          acceptableAnswers: ['[[the best|el mejor]]'],
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
        '[[Use|Usa]] "[[less... than|menos... que]]" [[to express the same idea|para expresar la misma idea]].',
      expressionHint: '[[Swimming is less dangerous than rock climbing|La natación es menos peligrosa que escalar rocas]].',
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
        '[[Write three sentences about sport using|Escribe tres frases sobre deporte usando]]:\n- [[the more... the more|cuanto más... más]]\n- [[far or much + comparative|mucho + comparativo]]\n- [[one of the most + superlative|uno de los más + superlativo]]',
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
            '[[Of the two runners|De los dos corredores]], [[Maria is|María es]] ____.',
          options: ['[[the faster|la más rápida]]', '[[the fastest|la más rápida]]', '[[faster|más rápida]]'],
          correctAnswer: '[[the faster|la más rápida]]',
          acceptableAnswers: ['[[the faster|la más rápida]]'],
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
        '[[Explain the advantages of team sports|Explica las ventajas de los deportes de equipo]]. [[Use comparatives|Usa comparativos]] ([[more/less|más/menos]], [[as... as|tan... como]]) y [[vocabulary|vocabulario]]: [[teamwork|trabajo en equipo]], [[qualify|clasificarse]], [[championship|campeonato]], [[referee|árbitro]].',
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
        '[[Give advice to an athlete|Da consejos a un atleta]]. [[Use|Usa]] "[[the more... the more|cuanto más... más]]" ([[e.g.|e.g.]] "[[The more you practice, the more confident you become|Cuanto más practiques, más seguro te vuelves]]").',
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
            '[[Extreme sports|Los deportes extremos]] [[are becoming|se están volviendo]] ____ [[popular|populares]] [[among young people|entre los jóvenes]].',
          options: ['[[increasingly|cada vez más]]', '[[more and more|más y más]]', '[[the most|el más]]'],
          correctAnswer: '[[increasingly|cada vez más]]',
          acceptableAnswers: ['[[increasingly|cada vez más]]'],
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
        '[[Write a short conclusion explaining why sport is important for health|Escribe una breve conclusión explicando por qué el deporte es importante para la salud]]. [[Use comparatives or superlatives where appropriate|Usa comparativos o superlativos donde sea apropiado]].',
      targetLength: '40-60 palabras',
    },
    topicName: 'Writing',
  },
];
