/**
 * Unidad 20 B2 — Lección 6: Expresión escrita (Repaso 16–19)
 * 18 ejercicios (B2: mixed topics)
 */

import { Exercise } from '@/lib/exercise-generator';

const LESSON_TITLE = '[[Writing|Expresión escrita]]';

export const UNIT_20_LESSON_6_WRITING: Exercise[] = [
  {
    id: 'b2-u20-l6-w1',
    type: 'writing',
    level: 'B2',
    topic: 'Repaso 16–19',
    difficulty: 'medium',
    content: {
      title: LESSON_TITLE,
      instructions:
        'Escribe 3–4 frases usando al menos 2 estructuras: pasiva, modal passive, so/such/too/enough o comparativos.',
      prompt:
        '[[Write about technology, science, food or sport|Escribe sobre tecnología, ciencia, comida o deporte]]. [[Use at least 2 of|Usa al menos 2 de]]: [[passive|pasiva]], [[modal passive|pasiva modal]], [[so/such/too/enough|tan/tal/demasiado/suficiente]], [[comparatives|comparativos]].',
      targetLevel: 'B2',
      writingType: 'description',
      targetLength: '3-4 frases',
    },
    topicName: 'Writing',
  },
  {
    id: 'b2-u20-l6-w2',
    type: 'fill-blank',
    level: 'B2',
    topic: 'Repaso 16–19',
    difficulty: 'medium',
    content: {
      title: LESSON_TITLE,
      instructions: 'Completa con la forma correcta (pasiva, modal passive, so/such/too/enough o comparativo).',
      questions: [
        {
          question:
            '[[All samples|Todas las muestras]] ____ [[tested|probadas]] [[before they can be used in the experiment|antes de poder usarse en el experimento]].',
          options: ['[[must be|deben ser]]', '[[should have been|deberían haberse]]', '[[have been|han sido]]'],
          correctAnswer: '[[must be|deben ser]]',
          acceptableAnswers: ['[[must be|deben ser]]'],
          explanation:
            'Modal passive: las muestras deben ser probadas.',
        },
      ],
    },
    topicName: 'Writing',
  },
  {
    id: 'b2-u20-l6-w3',
    type: 'writing',
    level: 'B2',
    topic: 'Repaso 16–19',
    difficulty: 'medium',
    content: {
      title: LESSON_TITLE,
      instructions: 'Reescribe la frase usando pasiva: "Someone sends millions of emails every day."',
      prompt:
        '[[Use passive voice|Usa voz pasiva]] ([[present simple|presente simple]])',
      expressionHint: '[[Millions of emails are sent every day|Millones de emails son enviados cada día]].',
      targetLength: '1 frase',
    },
    topicName: 'Writing',
  },
  {
    id: 'b2-u20-l6-w4',
    type: 'writing',
    level: 'B2',
    topic: 'Repaso 16–19',
    difficulty: 'medium',
    content: {
      title: LESSON_TITLE,
      instructions:
        'Escribe 2 frases: una con "so... that" y otra con "such a... that".',
      prompt:
        '[[Write two sentences about food, sport or technology using|Escribe dos frases sobre comida, deporte o tecnología usando]] "[[so + adjective + that|tan + adjetivo + que]]" y "[[such a + noun + that|tan + sustantivo + que]]".',
      targetLength: '2 frases',
    },
    topicName: 'Writing',
  },
  {
    id: 'b2-u20-l6-w5',
    type: 'fill-blank',
    level: 'B2',
    topic: 'Repaso 16–19',
    difficulty: 'medium',
    content: {
      title: LESSON_TITLE,
      instructions: 'Completa con la forma correcta.',
      questions: [
        {
          question:
            '[[We|Nosotros]] ____ [[the equipment|el equipo]] [[serviced|revisado]] [[by a specialist|por un especialista]] [[last month|el mes pasado]].',
          options: ['[[had|hicimos]]', '[[have|tenemos]]', '[[got|conseguimos]]'],
          correctAnswer: '[[had|hicimos]]',
          acceptableAnswers: ['[[had|hicimos]]', '[[got|conseguimos]]'],
          explanation:
            'Have something done en pasado: had the equipment serviced.',
        },
      ],
    },
    topicName: 'Writing',
  },
  {
    id: 'b2-u20-l6-w6',
    type: 'writing',
    level: 'B2',
    topic: 'Repaso 16–19',
    difficulty: 'medium',
    content: {
      title: LESSON_TITLE,
      instructions:
        'Escribe un breve párrafo (3–4 frases) mezclando pasiva, modal passive, so/such/too/enough y comparativos.',
      prompt:
        '[[Describe a topic from units 16–19|Describe un tema de las unidades 16–19]] ([[technology|tecnología]], [[science|ciencia]], [[food|comida]], [[sport|deporte]]). [[Use at least 2 different structures|Usa al menos 2 estructuras diferentes]].',
      targetLength: '3-4 frases',
    },
    topicName: 'Writing',
  },
  {
    id: 'b2-u20-l6-w7',
    type: 'writing',
    level: 'B2',
    topic: 'Repaso 16–19',
    difficulty: 'medium',
    content: {
      title: LESSON_TITLE,
      instructions: 'Completa las frases con ideas propias.',
      prompt:
        '[[Finish these sentences|Completa estas frases]]:\n1. [[The more you|Cuanto más]]..., [[the more|más]]...\n2. ... [[must be|debe ser]]...\n3. [[It was so|Era tan]]... [[that|que]]...',
      targetLength: '3-4 frases',
    },
    topicName: 'Writing',
  },
  {
    id: 'b2-u20-l6-w8',
    type: 'fill-blank',
    level: 'B2',
    topic: 'Repaso 16–19',
    difficulty: 'medium',
    content: {
      title: LESSON_TITLE,
      instructions: 'Completa con so, such, too o enough.',
      questions: [
        {
          question:
            '[[The pasta|La pasta]] [[was|era]] ____ [[delicious|deliciosa]] [[that|que]] [[I had a second helping|pedí una segunda ración]].',
          options: ['[[so|tan]]', '[[such|tal]]', '[[too|demasiado]]'],
          correctAnswer: '[[so|tan]]',
          acceptableAnswers: ['[[so|tan]]'],
          explanation:
            'So + adjective + that: tan delicioso que.',
        },
      ],
    },
    topicName: 'Writing',
  },
  {
    id: 'b2-u20-l6-w9',
    type: 'writing',
    level: 'B2',
    topic: 'Repaso 16–19',
    difficulty: 'medium',
    content: {
      title: LESSON_TITLE,
      instructions:
        'Escribe la introducción de un artículo (40–60 palabras) sobre tecnología, ciencia, comida o deporte.',
      prompt:
        '[[Write an introduction mixing vocabulary from units 16–19|Escribe una introducción mezclando vocabulario de las unidades 16–19]]. [[Use passive or modal passive|Usa pasiva o pasiva modal]].',
      writingType: 'article',
      targetLength: '40-60 palabras',
    },
    topicName: 'Writing',
  },
  {
    id: 'b2-u20-l6-w10',
    type: 'writing',
    level: 'B2',
    topic: 'Repaso 16–19',
    difficulty: 'medium',
    content: {
      title: LESSON_TITLE,
      instructions:
        'Escribe 2–3 frases explicando qué debe hacerse para tener una vida saludable. Usa modal passive.',
      prompt:
        '[[Explain what must be done for a healthy life|Explica qué debe hacerse para una vida saludable]]. [[Use|Usa]] "[[must be|debe ser]]", "[[should be|debería ser]]" o "[[have to be|tiene que ser]]" + [[past participle|participio pasado]].',
      targetLength: '2-3 frases',
    },
    topicName: 'Writing',
  },
  {
    id: 'b2-u20-l6-w11',
    type: 'fill-blank',
    level: 'B2',
    topic: 'Repaso 16–19',
    difficulty: 'medium',
    content: {
      title: LESSON_TITLE,
      instructions: 'Completa con la forma correcta del comparativo.',
      questions: [
        {
          question:
            '____ [[more|más]] [[you train|entrenas]], ____ [[fit|en forma]] [[you become|te vuelves]].',
          options: ['[[The / the|Cuanto más... más]]', '[[More / more|Más... más]]', '[[The most / the most|Lo más... lo más]]'],
          correctAnswer: '[[The / the|Cuanto más... más]]',
          acceptableAnswers: ['[[The / the|Cuanto más... más]]'],
          explanation:
            'The more... the more: cuanto más... más.',
        },
      ],
    },
    topicName: 'Writing',
  },
  {
    id: 'b2-u20-l6-w12',
    type: 'writing',
    level: 'B2',
    topic: 'Repaso 16–19',
    difficulty: 'medium',
    content: {
      title: LESSON_TITLE,
      instructions:
        'Transforma la frase usando have something done: "A specialist will calibrate our equipment."',
      prompt:
        '[[Use|Usa]] "[[We are going to have|Vamos a hacer]]..."',
      expressionHint: '[[We are going to have our equipment calibrated by a specialist|Vamos a hacer calibrar nuestro equipo por un especialista]].',
      targetLength: '1 frase',
    },
    topicName: 'Writing',
  },
  {
    id: 'b2-u20-l6-w13',
    type: 'writing',
    level: 'B2',
    topic: 'Repaso 16–19',
    difficulty: 'medium',
    content: {
      title: LESSON_TITLE,
      instructions:
        'Escribe 3 frases: una con pasiva, otra con modal passive y otra con comparativo.',
      prompt:
        '[[Write three sentences using|Escribe tres frases usando]]:\n- [[passive|pasiva]] ([[is/are + past participle|es/son + participio pasado]])\n- [[modal passive|pasiva modal]] ([[must be|debe ser]] / [[should have been|debería haber sido]])\n- [[comparative|comparativo]] ([[the more... the more|cuanto más... más]], o [[far/much + comparative|mucho + comparativo]])',
      targetLength: '3 frases',
    },
    topicName: 'Writing',
  },
  {
    id: 'b2-u20-l6-w14',
    type: 'fill-blank',
    level: 'B2',
    topic: 'Repaso 16–19',
    difficulty: 'medium',
    content: {
      title: LESSON_TITLE,
      instructions: 'Completa con la forma correcta.',
      questions: [
        {
          question:
            '[[The results|Los resultados]] ____ [[published earlier|publicados antes]]. [[We lost valuable time|Perdimos tiempo valioso]].',
          options: ['[[should have been|deberían haberse]]', '[[must be|deben ser]]', '[[have been|han sido]]'],
          correctAnswer: '[[should have been|deberían haberse]]',
          acceptableAnswers: ['[[should have been|deberían haberse]]'],
          explanation:
            'Modal passive en pasado: crítica. Los resultados debieron publicarse antes.',
        },
      ],
    },
    topicName: 'Writing',
  },
  {
    id: 'b2-u20-l6-w15',
    type: 'writing',
    level: 'B2',
    topic: 'Repaso 16–19',
    difficulty: 'medium',
    content: {
      title: LESSON_TITLE,
      instructions:
        'Escribe un breve texto (aprox. 60–80 palabras) sobre la conexión entre tecnología, ciencia, comida y deporte.',
      prompt:
        '[[Explain how technology, science, food and sport are connected|Explica cómo la tecnología, la ciencia, la comida y el deporte están conectados]]. [[Use|Usa]] [[passive|pasiva]], [[modal passive|pasiva modal]], [[so/such/too/enough|tan/tal/demasiado/suficiente]] o [[comparatives|comparativos]].',
      targetLength: '60-80 palabras',
    },
    topicName: 'Writing',
  },
  {
    id: 'b2-u20-l6-w16',
    type: 'writing',
    level: 'B2',
    topic: 'Repaso 16–19',
    difficulty: 'medium',
    content: {
      title: LESSON_TITLE,
      instructions:
        'Escribe 2–3 frases comparando dos temas de las unidades 16–19. Usa comparativos.',
      prompt:
        '[[Compare two topics|Compara dos temas]] ([[e.g.|e.g.]] [[technology vs science|tecnología vs ciencia]], [[food vs sport|comida vs deporte]]). [[Use|Usa]]: [[the more... the more|cuanto más... más]], [[far more|mucho más]], [[as... as|tan... como]], [[one of the most|uno de los más]].',
      targetLength: '2-3 frases',
    },
    topicName: 'Writing',
  },
  {
    id: 'b2-u20-l6-w17',
    type: 'fill-blank',
    level: 'B2',
    topic: 'Repaso 16–19',
    difficulty: 'medium',
    content: {
      title: LESSON_TITLE,
      instructions: 'Completa con la forma correcta.',
      questions: [
        {
          question:
            '[[A new app|Una nueva aplicación]] ____ [[by our team|por nuestro equipo]] [[at the moment|en este momento]].',
          options: ['[[is being developed|está siendo desarrollada]]', '[[is developed|es desarrollada]]', '[[develops|desarrolla]]'],
          correctAnswer: '[[is being developed|está siendo desarrollada]]',
          acceptableAnswers: ['[[is being developed|está siendo desarrollada]]'],
          explanation:
            'Present continuous passive: está siendo desarrollada.',
        },
      ],
    },
    topicName: 'Writing',
  },
  {
    id: 'b2-u20-l6-w18',
    type: 'writing',
    level: 'B2',
    topic: 'Repaso 16–19',
    difficulty: 'medium',
    content: {
      title: LESSON_TITLE,
      instructions:
        'Redacta la conclusión de un artículo (40–60 palabras) sobre lo que has aprendido en las unidades 16–19.',
      prompt:
        '[[Write a short conclusion about what you have learned in units 16–19|Escribe una breve conclusión sobre lo que has aprendido en las unidades 16–19]]. [[Use|Usa]] [[passive|pasiva]], [[modal passive|pasiva modal]], [[so/such/too/enough|tan/tal/demasiado/suficiente]] o [[comparatives|comparativos]].',
      targetLength: '40-60 palabras',
    },
    topicName: 'Writing',
  },
];
