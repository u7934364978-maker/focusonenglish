/**
 * Unidad 19 B2 — Lección 1: Gramática (Comparative & superlative (advanced))
 * 18 ejercicios (B2: más vocabulario y complejidad que B1)
 */

import { Exercise } from '@/lib/exercise-generator';

const LESSON_TITLE =
  '[[Grammar|Gramática]]: [[Comparative & superlative|Comparativo y superlativo (avanzado)]]';
const INSTRUCTIONS =
  'Elige la forma correcta del comparativo o superlativo según el contexto.';

export const UNIT_19_LESSON_1_GRAMMAR: Exercise[] = [
  {
    id: 'b2-u19-l1-g1',
    type: 'grammar',
    level: 'B2',
    topic: 'Comparative & superlative (advanced)',
    difficulty: 'medium',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS,
      grammarPoint: '[[the|cuanto]] + [[comparative|comparativo]]... [[the|más]] + [[comparative|comparativo]]',
      questions: [
        {
          id: 'g1-q1',
          type: 'fill-blank',
          question:
            '____ [[more|más]] [[you train|entrenas]], ____ [[fit|en forma]] [[you become|te vuelves]].',
          options: ['[[The / the|Cuanto más... más]]', '[[More / more|Más... más]]', '[[The most / the most|Lo más... lo más]]'],
          correctAnswer: '[[The / the|Cuanto más... más]]',
          acceptableAnswers: ['[[The / the|Cuanto más... más]]'],
          explanation:
            'The more... the more: cuanto más... más. Doble comparativo para correlación.',
          points: 2,
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'b2-u19-l1-g2',
    type: 'grammar',
    level: 'B2',
    topic: 'Comparative & superlative (advanced)',
    difficulty: 'medium',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS,
      grammarPoint: '[[far/much|mucho]] + [[comparative|comparativo]]',
      questions: [
        {
          id: 'g2-q1',
          type: 'fill-blank',
          question:
            '[[She runs|Ella corre]] ____ [[faster|más rápido]] [[than she did last year|que el año pasado]].',
          options: ['[[far|mucho]]', '[[more|más]]', '[[the most|el más]]'],
          correctAnswer: '[[far|mucho]]',
          acceptableAnswers: ['[[far|mucho]]', '[[much|mucho]]'],
          explanation:
            'Far/much + comparative: enfatiza la diferencia. "Far faster" = mucho más rápido.',
          points: 2,
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'b2-u19-l1-g3',
    type: 'grammar',
    level: 'B2',
    topic: 'Comparative & superlative (advanced)',
    difficulty: 'medium',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS,
      grammarPoint: '[[by far|con diferencia]] + [[superlative|superlativo]]',
      questions: [
        {
          id: 'g3-q1',
          type: 'fill-blank',
          question:
            '[[He is|Él es]] ____ [[the best player|el mejor jugador]] [[on the team|del equipo]].',
          options: ['[[by far|con diferencia]]', '[[far|mucho]]', '[[the most|el más]]'],
          correctAnswer: '[[by far|con diferencia]]',
          acceptableAnswers: ['[[by far|con diferencia]]'],
          explanation:
            'By far + superlative: con diferencia el mejor. Enfatiza que no hay competencia.',
          points: 2,
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'b2-u19-l1-g4',
    type: 'grammar',
    level: 'B2',
    topic: 'Comparative & superlative (advanced)',
    difficulty: 'medium',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS,
      grammarPoint: '[[as|tan]] + [[adjective|adjetivo]] + [[as|como]] (igualdad)',
      questions: [
        {
          id: 'g4-q1',
          type: 'multiple-choice',
          question:
            '[[This marathon|Este maratón]] [[is|es]] ____ [[challenging|desafiante]] ____ [[the one I ran last month|el que corrí el mes pasado]].',
          options: ['[[as / as|tan... como]]', '[[more / than|más... que]]', '[[the most / of|el más... de]]'],
          correctAnswer: '[[as / as|tan... como]]',
          explanation:
            'As... as: tan... como. Expresa igualdad en el grado de dificultad.',
          points: 2,
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'b2-u19-l1-g5',
    type: 'grammar',
    level: 'B2',
    topic: 'Comparative & superlative (advanced)',
    difficulty: 'medium',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS,
      grammarPoint: '[[not as/so|no tan]] + [[adjective|adjetivo]] + [[as|como]]',
      questions: [
        {
          id: 'g5-q1',
          type: 'fill-blank',
          question:
            '[[Tennis|El tenis]] [[is|es]] ____ [[as exhausting|tan agotador]] ____ [[football|el fútbol]].',
          options: ['[[not as / as|no tan... como]]', '[[as / than|tan... que]]', '[[more / as|más... como]]'],
          correctAnswer: '[[not as / as|no tan... como]]',
          acceptableAnswers: ['[[not as / as|no tan... como]]', '[[not so / as|no tan... como]]'],
          explanation:
            'Not as/so... as: no tan... como. Tennis no es tan agotador como el fútbol.',
          points: 2,
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'b2-u19-l1-g6',
    type: 'grammar',
    level: 'B2',
    topic: 'Comparative & superlative (advanced)',
    difficulty: 'medium',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS,
      grammarPoint: '[[less|menos]] + [[adjective|adjetivo]] + [[than|que]]',
      questions: [
        {
          id: 'g6-q1',
          type: 'multiple-choice',
          question:
            '[[Swimming|La natación]] [[is|es]] ____ [[dangerous|peligrosa]] ____ [[rock climbing|escalar rocas]].',
          options: ['[[less / than|menos... que]]', '[[the least / of|el menos... de]]', '[[as / as|tan... como]]'],
          correctAnswer: '[[less / than|menos... que]]',
          explanation:
            'Less... than: menos... que. Nadar es menos peligroso que escalar.',
          points: 2,
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'b2-u19-l1-g7',
    type: 'grammar',
    level: 'B2',
    topic: 'Comparative & superlative (advanced)',
    difficulty: 'medium',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS,
      grammarPoint: '[[one of the|uno de los]] + [[superlative|superlativo]] + [[plural|plural]]',
      questions: [
        {
          id: 'g7-q1',
          type: 'fill-blank',
          question:
            '[[Barcelona|El Barcelona]] [[is one of|es uno de]] ____ [[most popular football clubs|clubes de fútbol más populares]] [[in the world|del mundo]].',
          options: ['[[the|los]]', '[[a|un]]', '[[—|—]]'],
          correctAnswer: '[[the|los]]',
          acceptableAnswers: ['[[the|los]]'],
          explanation:
            'One of the + superlative + plural: uno de los más... "The" es obligatorio.',
          points: 2,
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'b2-u19-l1-g8',
    type: 'grammar',
    level: 'B2',
    topic: 'Comparative & superlative (advanced)',
    difficulty: 'medium',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS,
      grammarPoint: '[[increasingly|cada vez más]] + [[adjective|adjetivo]]',
      questions: [
        {
          id: 'g8-q1',
          type: 'multiple-choice',
          question:
            '[[Extreme sports|Los deportes extremos]] [[are becoming|se están volviendo]] ____ [[popular|populares]] [[among young people|entre los jóvenes]].',
          options: ['[[increasingly|cada vez más]]', '[[more and more|más y más]]', '[[the most|el más]]'],
          correctAnswer: '[[increasingly|cada vez más]]',
          explanation:
            'Increasingly + adjective: cada vez más. "Increasingly popular" = cada vez más popular.',
          points: 2,
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'b2-u19-l1-g9',
    type: 'grammar',
    level: 'B2',
    topic: 'Comparative & superlative (advanced)',
    difficulty: 'medium',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS,
      grammarPoint: '[[comparative|comparativo]] + [[and|y]] + [[comparative|comparativo]]',
      questions: [
        {
          id: 'g9-q1',
          type: 'fill-blank',
          question:
            '[[The race|La carrera]] [[got|se volvió]] ____ [[and|y]] ____ [[difficult|difícil]] [[as we approached the finish|a medida que nos acercábamos a la meta]].',
          options: ['[[harder / harder|cada vez más difícil]]', '[[more hard / more hard|más difícil / más difícil]]', '[[hardest / hardest|el más difícil / el más difícil]]'],
          correctAnswer: '[[harder / harder|cada vez más difícil]]',
          acceptableAnswers: ['[[harder / harder|cada vez más difícil]]'],
          explanation:
            'Comparative + and + comparative: cada vez más. "Harder and harder" = cada vez más difícil.',
          points: 2,
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'b2-u19-l1-g10',
    type: 'grammar',
    level: 'B2',
    topic: 'Comparative & superlative (advanced)',
    difficulty: 'medium',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS,
      grammarPoint: '[[the least|el menos]] + [[adjective|adjetivo]]',
      questions: [
        {
          id: 'g10-q1',
          type: 'multiple-choice',
          question:
            '[[Yoga|El yoga]] [[is|es]] ____ [[demanding form of exercise|forma de ejercicio exigente]] [[in our gym|en nuestro gimnasio]].',
          options: ['[[the least|el menos]]', '[[less|menos]]', '[[least|menos]]'],
          correctAnswer: '[[the least|el menos]]',
          explanation:
            'The least + adjective: el menos. "The least demanding" = el menos exigente.',
          points: 2,
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'b2-u19-l1-g11',
    type: 'grammar',
    level: 'B2',
    topic: 'Comparative & superlative (advanced)',
    difficulty: 'medium',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS,
      grammarPoint: '[[twice/three times|el doble/triple]] + [[as|tan]] + [[adjective|adjetivo]] + [[as|como]]',
      questions: [
        {
          id: 'g11-q1',
          type: 'fill-blank',
          question:
            '[[She is|Ella es]] ____ [[as fast|tan rápida]] ____ [[her brother|su hermano]].',
          options: ['[[twice as / as|el doble de... que]]', '[[twice more / than|el doble más... que]]', '[[the twice / as|el doble... como]]'],
          correctAnswer: '[[twice as / as|el doble de... que]]',
          acceptableAnswers: ['[[twice as / as|el doble de... que]]'],
          explanation:
            'Twice/three times as... as: el doble/triple de... que. Multiplicadores con "as... as".',
          points: 2,
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'b2-u19-l1-g12',
    type: 'grammar',
    level: 'B2',
    topic: 'Comparative & superlative (advanced)',
    difficulty: 'medium',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS,
      grammarPoint: '[[superlative|superlativo]] + [[ever|jamás]]',
      questions: [
        {
          id: 'g12-q1',
          type: 'multiple-choice',
          question:
            '[[That was|Ese fue]] ____ [[match|partido]] [[I have ever watched|que he visto jamás]].',
          options: ['[[the best|el mejor]]', '[[the better|el mejor]]', '[[best|mejor]]'],
          correctAnswer: '[[the best|el mejor]]',
          explanation:
            'Superlative + ever: el mejor que he visto jamás. "The best... I have ever watched".',
          points: 2,
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'b2-u19-l1-g13',
    type: 'grammar',
    level: 'B2',
    topic: 'Comparative & superlative (advanced)',
    difficulty: 'medium',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS,
      grammarPoint: '[[no/nothing|nada]] + [[comparative|comparativo]]',
      questions: [
        {
          id: 'g13-q1',
          type: 'fill-blank',
          question:
            '[[There is|No hay]] ____ [[more important|más importante]] [[than teamwork in sport|que el trabajo en equipo en el deporte]].',
          options: ['[[nothing|nada]]', '[[anything|algo]]', '[[something|algo]]'],
          correctAnswer: '[[nothing|nada]]',
          acceptableAnswers: ['[[nothing|nada]]'],
          explanation:
            'Nothing + comparative: nada más... que. "Nothing more important" = nada más importante.',
          points: 2,
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'b2-u19-l1-g14',
    type: 'grammar',
    level: 'B2',
    topic: 'Comparative & superlative (advanced)',
    difficulty: 'medium',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS,
      grammarPoint: '[[slightly/a bit|un poco]] + [[comparative|comparativo]]',
      questions: [
        {
          id: 'g14-q1',
          type: 'multiple-choice',
          question:
            '[[The new stadium|El nuevo estadio]] [[is|es]] ____ [[larger|más grande]] [[than the old one|que el antiguo]].',
          options: ['[[slightly|un poco]]', '[[far|mucho]]', '[[by far|con diferencia]]'],
          correctAnswer: '[[slightly|un poco]]',
          explanation:
            'Slightly/a bit + comparative: un poco más. Indica diferencia pequeña.',
          points: 2,
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'b2-u19-l1-g15',
    type: 'grammar',
    level: 'B2',
    topic: 'Comparative & superlative (advanced)',
    difficulty: 'medium',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS,
      grammarPoint: '[[the second/third|el segundo/tercero]] + [[superlative|superlativo]]',
      questions: [
        {
          id: 'g15-q1',
          type: 'fill-blank',
          question:
            '[[She came|Ella quedó]] ____ [[in the 100-metre race|en la carrera de 100 metros]].',
          options: ['[[second|segunda]]', '[[the second|la segunda]]', '[[secondly|en segundo lugar]]'],
          correctAnswer: '[[second|segunda]]',
          acceptableAnswers: ['[[second|segunda]]'],
          explanation:
            'Come second/third: quedar segundo/tercero. Sin "the" en esta construcción.',
          points: 2,
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'b2-u19-l1-g16',
    type: 'grammar',
    level: 'B2',
    topic: 'Comparative & superlative (advanced)',
    difficulty: 'medium',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS,
      grammarPoint: '[[the|el/la]] + [[comparative|comparativo]] de dos',
      questions: [
        {
          id: 'g16-q1',
          type: 'multiple-choice',
          question:
            '[[Of the two runners|De los dos corredores]], [[Maria is|María es]] ____.',
          options: ['[[the faster|la más rápida]]', '[[the fastest|la más rápida]]', '[[faster|más rápida]]'],
          correctAnswer: '[[the faster|la más rápida]]',
          explanation:
            'Of the two: el comparativo con "the" cuando se comparan exactamente dos.',
          points: 2,
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'b2-u19-l1-g17',
    type: 'grammar',
    level: 'B2',
    topic: 'Comparative & superlative (advanced)',
    difficulty: 'medium',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS,
      grammarPoint: '[[no less|no menos]] + [[adjective|adjetivo]] + [[than|que]]',
      questions: [
        {
          id: 'g17-q1',
          type: 'fill-blank',
          question:
            '[[Training|El entrenamiento]] [[is|es]] ____ [[important|importante]] ____ [[competing|competir]].',
          options: ['[[no less / than|no menos... que]]', '[[not less / as|no menos... como]]', '[[the least / of|el menos... de]]'],
          correctAnswer: '[[no less / than|no menos... que]]',
          acceptableAnswers: ['[[no less / than|no menos... que]]'],
          explanation:
            'No less... than: no menos... que. Enfatiza que ambos son igual de importantes.',
          points: 2,
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'b2-u19-l1-g18',
    type: 'grammar',
    level: 'B2',
    topic: 'Comparative & superlative (advanced)',
    difficulty: 'medium',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS,
      grammarPoint: 'Resumen: [[comparativos|comparativos]] y [[superlativos|superlativos]] avanzados',
      questions: [
        {
          id: 'g18-q1',
          type: 'fill-blank',
          question:
            '____ [[sooner|antes]] [[we start training|empecemos a entrenar]], ____ [[better|mejores]] [[our chances of winning|nuestras posibilidades de ganar]].',
          options: ['[[The / the|Cuanto antes... mejores]]', '[[More / more|Más... más]]', '[[Sooner / better|Antes... mejor]]'],
          correctAnswer: '[[The / the|Cuanto antes... mejores]]',
          acceptableAnswers: ['[[The / the|Cuanto antes... mejores]]'],
          explanation:
            'The sooner... the better: cuanto antes... mejor. Correlación con comparativos.',
          points: 2,
        },
      ],
    },
    topicName: 'Grammar',
  },
];
