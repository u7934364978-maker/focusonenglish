/**
 * Unidad 20 B2 — Lección 1: Gramática (Repaso 16–19)
 * 18 ejercicios (B2: passive, modal passive, so/such/too/enough, comparatives)
 */

import { Exercise } from '@/lib/exercise-generator';

const LESSON_TITLE = '[[Grammar|Gramática]]: [[Repaso 16–19|Repaso 16–19]]';
const INSTRUCTIONS =
  'Elige la forma correcta. Repaso de pasiva, pasiva modal, so/such/too/enough y comparativos.';

export const UNIT_20_LESSON_1_GRAMMAR: Exercise[] = [
  {
    id: 'b2-u20-l1-g1',
    type: 'grammar',
    level: 'B2',
    topic: 'Repaso 16–19',
    difficulty: 'medium',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS,
      grammarPoint: '[[Passive|Pasiva]] ([[present simple|presente simple]])',
      questions: [
        {
          id: 'g1-q1',
          type: 'fill-blank',
          question:
            '[[Millions of emails|Millones de emails]] ____ [[every day|cada día]] [[around the world|en todo el mundo]].',
          options: ['[[are sent|son enviados]]', '[[is sent|es enviado]]', '[[send|envían]]'],
          correctAnswer: '[[are sent|son enviados]]',
          acceptableAnswers: ['[[are sent|son enviados]]'],
          explanation:
            'Present simple passive: be + past participle. "Emails" plural → "are sent".',
          points: 2,
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'b2-u20-l1-g2',
    type: 'grammar',
    level: 'B2',
    topic: 'Repaso 16–19',
    difficulty: 'medium',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS,
      grammarPoint: '[[Modal passive|Pasiva modal]] ([[must be|debe ser]])',
      questions: [
        {
          id: 'g2-q1',
          type: 'fill-blank',
          question:
            '[[All samples|Todas las muestras]] ____ [[before they can be used in the experiment|antes de poder usarse en el experimento]].',
          options: ['[[must be tested|deben ser probadas]]', '[[must have been tested|deberían haber sido probadas]]', '[[must test|deben probar]]'],
          correctAnswer: '[[must be tested|deben ser probadas]]',
          acceptableAnswers: ['[[must be tested|deben ser probadas]]'],
          explanation:
            'Modal passive: must be + past participle = obligación en presente.',
          points: 2,
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'b2-u20-l1-g3',
    type: 'grammar',
    level: 'B2',
    topic: 'Repaso 16–19',
    difficulty: 'medium',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS,
      grammarPoint: '[[So|Tan]] + [[adjective|adjetivo]] + [[that|que]]',
      questions: [
        {
          id: 'g3-q1',
          type: 'fill-blank',
          question:
            '[[The pasta|La pasta]] [[was|era]] ____ [[delicious|deliciosa]] [[that|que]] [[I had a second helping|pedí una segunda ración]].',
          options: ['[[so|tan]]', '[[such|tal]]', '[[too|demasiado]]'],
          correctAnswer: '[[so|tan]]',
          acceptableAnswers: ['[[so|tan]]'],
          explanation:
            'So + adjective + that: tan delicioso que. Consecuencia.',
          points: 2,
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'b2-u20-l1-g4',
    type: 'grammar',
    level: 'B2',
    topic: 'Repaso 16–19',
    difficulty: 'medium',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS,
      grammarPoint: '[[Comparative|Comparativo]]: [[the more... the more|cuanto más... más]]',
      questions: [
        {
          id: 'g4-q1',
          type: 'multiple-choice',
          question:
            '____ [[more|más]] [[you train|entrenas]], ____ [[fit|en forma]] [[you become|te vuelves]].',
          options: ['[[The / the|Cuanto más... más]]', '[[More / more|Más... más]]', '[[The most / the most|Lo más... lo más]]'],
          correctAnswer: '[[The / the|Cuanto más... más]]',
          explanation:
            'The more... the more: cuanto más... más. Correlación.',
          points: 2,
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'b2-u20-l1-g5',
    type: 'grammar',
    level: 'B2',
    topic: 'Repaso 16–19',
    difficulty: 'medium',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS,
      grammarPoint: '[[Modal passive|Pasiva modal]] ([[should have been|debería haber sido]])',
      questions: [
        {
          id: 'g5-q1',
          type: 'fill-blank',
          question:
            '[[The results|Los resultados]] ____ [[published earlier|publicados antes]]. [[We lost valuable time|Perdimos tiempo valioso]].',
          options: [
            '[[should have been|deberían haberse]]',
            '[[should be|deberían ser]]',
            '[[should have|deberían haber]]',
          ],
          correctAnswer: '[[should have been|deberían haberse]]',
          acceptableAnswers: ['[[should have been|deberían haberse]]'],
          explanation:
            'Modal passive en pasado: crítica. Los resultados debieron publicarse antes.',
          points: 2,
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'b2-u20-l1-g6',
    type: 'grammar',
    level: 'B2',
    topic: 'Repaso 16–19',
    difficulty: 'medium',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS,
      grammarPoint: '[[Have something done|Tener algo hecho]]',
      questions: [
        {
          id: 'g6-q1',
          type: 'multiple-choice',
          question:
            '[[We|Nosotros]] ____ [[the equipment|el equipo]] [[serviced|revisado]] [[by a specialist|por un especialista]] [[last month|el mes pasado]].',
          options: ['[[had|hicimos]]', '[[have|tenemos]]', '[[got|conseguimos]]'],
          correctAnswer: '[[had|hicimos]]',
          explanation:
            'Have something done en pasado: "had the equipment serviced" = hicimos que lo revisaran.',
          points: 2,
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'b2-u20-l1-g7',
    type: 'grammar',
    level: 'B2',
    topic: 'Repaso 16–19',
    difficulty: 'medium',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS,
      grammarPoint: '[[Too|Demasiado]] + [[adjective|adjetivo]] + [[to|para]]',
      questions: [
        {
          id: 'g7-q1',
          type: 'fill-blank',
          question:
            '[[The soup|La sopa]] [[was|estaba]] ____ [[hot|caliente]] [[to eat|para comer]]. [[I had to wait for it to cool down|Tuve que esperar a que se enfriara]].',
          options: ['[[too|demasiado]]', '[[so|tan]]', '[[enough|suficiente]]'],
          correctAnswer: '[[too|demasiado]]',
          acceptableAnswers: ['[[too|demasiado]]'],
          explanation:
            'Too + adjective + to: demasiado caliente para comer.',
          points: 2,
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'b2-u20-l1-g8',
    type: 'grammar',
    level: 'B2',
    topic: 'Repaso 16–19',
    difficulty: 'medium',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS,
      grammarPoint: '[[Far|Mucho]] + [[comparative|comparativo]]',
      questions: [
        {
          id: 'g8-q1',
          type: 'multiple-choice',
          question:
            '[[She runs|Ella corre]] ____ [[faster|más rápido]] [[than she did last year|que el año pasado]].',
          options: ['[[far|mucho]]', '[[more|más]]', '[[the most|el más]]'],
          correctAnswer: '[[far|mucho]]',
          explanation:
            'Far/much + comparative: enfatiza la diferencia.',
          points: 2,
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'b2-u20-l1-g9',
    type: 'grammar',
    level: 'B2',
    topic: 'Repaso 16–19',
    difficulty: 'medium',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS,
      grammarPoint: '[[Passive|Pasiva]] ([[past simple|pasado simple]])',
      questions: [
        {
          id: 'g9-q1',
          type: 'fill-blank',
          question:
            '[[The first smartphone|El primer smartphone]] ____ [[in 2007|en 2007]].',
          options: ['[[was released|fue lanzado]]', '[[were released|fueron lanzados]]', '[[released|lanzó]]'],
          correctAnswer: '[[was released|fue lanzado]]',
          acceptableAnswers: ['[[was released|fue lanzado]]'],
          explanation:
            'Past simple passive: was/were + past participle. Singular → "was released".',
          points: 2,
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'b2-u20-l1-g10',
    type: 'grammar',
    level: 'B2',
    topic: 'Repaso 16–19',
    difficulty: 'medium',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS,
      grammarPoint: '[[Such a|Tan un/una]] + [[noun|sustantivo]]',
      questions: [
        {
          id: 'g10-q1',
          type: 'fill-blank',
          question:
            '[[It was|Fue]] ____ [[good meal|buena comida]] [[that|que]] [[we stayed for dessert|nos quedamos para el postre]].',
          options: ['[[such a|tan buena]]', '[[so a|tan un]]', '[[too a|demasiado un]]'],
          correctAnswer: '[[such a|tan buena]]',
          acceptableAnswers: ['[[such a|tan buena]]'],
          explanation:
            'Such a + noun: tan buena comida. Con sustantivo contable singular.',
          points: 2,
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'b2-u20-l1-g11',
    type: 'grammar',
    level: 'B2',
    topic: 'Repaso 16–19',
    difficulty: 'medium',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS,
      grammarPoint: '[[Adjective|Adjetivo]] + [[enough|suficiente]]',
      questions: [
        {
          id: 'g11-q1',
          type: 'fill-blank',
          question:
            "[[The portion|La porción]] [[wasn't|no era]] [[big|grande]] ____ [[to share between two people|para compartir entre dos personas]].",
          options: ['[[enough|suficiente]]', '[[too|demasiado]]', '[[so|tan]]'],
          correctAnswer: '[[enough|suficiente]]',
          acceptableAnswers: ['[[enough|suficiente]]'],
          explanation:
            'Adjective + enough: no era lo bastante grande para compartir.',
          points: 2,
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'b2-u20-l1-g12',
    type: 'grammar',
    level: 'B2',
    topic: 'Repaso 16–19',
    difficulty: 'medium',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS,
      grammarPoint: '[[By far|Con diferencia]] + [[superlative|superlativo]]',
      questions: [
        {
          id: 'g12-q1',
          type: 'multiple-choice',
          question:
            '[[He is|Él es]] ____ [[the best player|el mejor jugador]] [[on the team|del equipo]].',
          options: ['[[by far|con diferencia]]', '[[far|mucho]]', '[[the most|el más]]'],
          correctAnswer: '[[by far|con diferencia]]',
          explanation:
            'By far + superlative: con diferencia el mejor.',
          points: 2,
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'b2-u20-l1-g13',
    type: 'grammar',
    level: 'B2',
    topic: 'Repaso 16–19',
    difficulty: 'medium',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS,
      grammarPoint: '[[Passive|Pasiva]] ([[present continuous|presente continuo]])',
      questions: [
        {
          id: 'g13-q1',
          type: 'fill-blank',
          question:
            '[[A new app|Una nueva aplicación]] ____ [[by our team|por nuestro equipo]] [[at the moment|en este momento]].',
          options: ['[[is being developed|está siendo desarrollada]]', '[[is developed|es desarrollada]]', '[[develops|desarrolla]]'],
          correctAnswer: '[[is being developed|está siendo desarrollada]]',
          acceptableAnswers: ['[[is being developed|está siendo desarrollada]]'],
          explanation:
            'Present continuous passive: am/is/are + being + past participle.',
          points: 2,
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'b2-u20-l1-g14',
    type: 'grammar',
    level: 'B2',
    topic: 'Repaso 16–19',
    difficulty: 'medium',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS,
      grammarPoint: '[[As... as|Tan... como]] (igualdad)',
      questions: [
        {
          id: 'g14-q1',
          type: 'multiple-choice',
          question:
            '[[This marathon|Este maratón]] [[is|es]] ____ [[challenging|desafiante]] ____ [[the one I ran last month|el que corrí el mes pasado]].',
          options: ['[[as / as|tan... como]]', '[[more / than|más... que]]', '[[the most / of|el más... de]]'],
          correctAnswer: '[[as / as|tan... como]]',
          explanation:
            'As... as: tan... como. Igualdad.',
          points: 2,
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'b2-u20-l1-g15',
    type: 'grammar',
    level: 'B2',
    topic: 'Repaso 16–19',
    difficulty: 'medium',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS,
      grammarPoint: '[[Enough|Suficiente]] + [[noun|sustantivo]]',
      questions: [
        {
          id: 'g15-q1',
          type: 'fill-blank',
          question:
            "[[We didn't have|No tuvimos]] ____ [[time|tiempo]] [[to order dessert|para pedir postre]]. [[The restaurant was closing|El restaurante estaba cerrando]].",
          options: ['[[enough|suficiente]]', '[[too|demasiado]]', '[[so|tan]]'],
          correctAnswer: '[[enough|suficiente]]',
          acceptableAnswers: ['[[enough|suficiente]]'],
          explanation:
            'Enough + noun: suficiente tiempo.',
          points: 2,
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'b2-u20-l1-g16',
    type: 'grammar',
    level: 'B2',
    topic: 'Repaso 16–19',
    difficulty: 'medium',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS,
      grammarPoint: '[[One of the|Uno de los]] + [[superlative|superlativo]]',
      questions: [
        {
          id: 'g16-q1',
          type: 'multiple-choice',
          question:
            '[[Barcelona|El Barcelona]] [[is one of|es uno de]] ____ [[most popular football clubs|clubes de fútbol más populares]] [[in the world|del mundo]].',
          options: ['[[the|los]]', '[[a|un]]', '[[—|—]]'],
          correctAnswer: '[[the|los]]',
          explanation:
            'One of the + superlative + plural: "the" es obligatorio.',
          points: 2,
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'b2-u20-l1-g17',
    type: 'grammar',
    level: 'B2',
    topic: 'Repaso 16–19',
    difficulty: 'medium',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS,
      grammarPoint: '[[Less|Menos]]... [[than|que]]',
      questions: [
        {
          id: 'g17-q1',
          type: 'fill-blank',
          question:
            '[[Swimming|La natación]] [[is|es]] ____ [[dangerous|peligrosa]] ____ [[rock climbing|escalar rocas]].',
          options: ['[[less / than|menos... que]]', '[[the least / of|el menos... de]]', '[[as / as|tan... como]]'],
          correctAnswer: '[[less / than|menos... que]]',
          acceptableAnswers: ['[[less / than|menos... que]]'],
          explanation:
            'Less... than: menos... que.',
          points: 2,
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'b2-u20-l1-g18',
    type: 'grammar',
    level: 'B2',
    topic: 'Repaso 16–19',
    difficulty: 'medium',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS,
      grammarPoint: 'Resumen: [[mezcla de estructuras|mezcla de estructuras]]',
      questions: [
        {
          id: 'g18-q1',
          type: 'multiple-choice',
          question:
            '[[The hypothesis|La hipótesis]] ____ [[verified|verificada]] [[with further research|con más investigación]].',
          options: ['[[can be|puede ser]]', '[[can have been|puede haber sido]]', '[[could verify|podría verificar]]'],
          correctAnswer: '[[can be|puede ser]]',
          explanation:
            'Modal passive: la hipótesis puede ser verificada (posibilidad en presente).',
          points: 2,
        },
      ],
    },
    topicName: 'Grammar',
  },
];
