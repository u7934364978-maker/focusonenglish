/**
 * Unidad 19 B2 — Lección 1: Gramática (Comparative & superlative (advanced))
 * 18 ejercicios (B2: más vocabulario y complejidad que B1)
 */

import { Exercise } from '@/lib/exercise-generator';

const LESSON_TITLE =
  '[[Grammar|Gramática]]: [[Comparative & superlative|Comparative & superlative]]';
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
      grammarPoint: 'the + comparative... the + comparative',
      questions: [
        {
          id: 'g1-q1',
          type: 'fill-blank',
          question:
            '____ more you train, ____ fit you become.',
          options: ['The / the', 'More / more', 'The most / the most'],
          correctAnswer: 'The / the',
          acceptableAnswers: ['The / the'],
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
      grammarPoint: 'far/much + comparative',
      questions: [
        {
          id: 'g2-q1',
          type: 'fill-blank',
          question:
            'She runs ____ faster than she did last year.',
          options: ['far', 'more', 'the most'],
          correctAnswer: 'far',
          acceptableAnswers: ['far', 'much'],
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
      grammarPoint: 'by far + superlative',
      questions: [
        {
          id: 'g3-q1',
          type: 'fill-blank',
          question:
            'He is ____ the best player on the team.',
          options: ['by far', 'far', 'the most'],
          correctAnswer: 'by far',
          acceptableAnswers: ['by far'],
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
      grammarPoint: 'as + adjective + as (igualdad)',
      questions: [
        {
          id: 'g4-q1',
          type: 'multiple-choice',
          question:
            'This marathon is ____ challenging ____ the one I ran last month.',
          options: ['as / as', 'more / than', 'the most / of'],
          correctAnswer: 0,
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
      grammarPoint: 'not as/so + adjective + as',
      questions: [
        {
          id: 'g5-q1',
          type: 'fill-blank',
          question:
            'Tennis is ____ as exhausting ____ football.',
          options: ['not as / as', 'as / than', 'more / as'],
          correctAnswer: 'not as / as',
          acceptableAnswers: ['not as / as', 'not so / as'],
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
      grammarPoint: 'less + adjective + than',
      questions: [
        {
          id: 'g6-q1',
          type: 'multiple-choice',
          question:
            'Swimming is ____ dangerous ____ rock climbing.',
          options: ['less / than', 'the least / of', 'as / as'],
          correctAnswer: 0,
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
      grammarPoint: 'one of the + superlative + plural',
      questions: [
        {
          id: 'g7-q1',
          type: 'fill-blank',
          question:
            'Barcelona is one of ____ most popular football clubs in the world.',
          options: ['the', 'a', '—'],
          correctAnswer: 'the',
          acceptableAnswers: ['the'],
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
      grammarPoint: 'increasingly + adjective',
      questions: [
        {
          id: 'g8-q1',
          type: 'multiple-choice',
          question:
            'Extreme sports are becoming ____ popular among young people.',
          options: ['increasingly', 'more and more', 'the most'],
          correctAnswer: 0,
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
      grammarPoint: 'comparative + and + comparative',
      questions: [
        {
          id: 'g9-q1',
          type: 'fill-blank',
          question:
            'The race got ____ and ____ difficult as we approached the finish.',
          options: ['harder / harder', 'more hard / more hard', 'hardest / hardest'],
          correctAnswer: 'harder / harder',
          acceptableAnswers: ['harder / harder'],
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
      grammarPoint: 'the least + adjective',
      questions: [
        {
          id: 'g10-q1',
          type: 'multiple-choice',
          question:
            'Yoga is ____ demanding form of exercise in our gym.',
          options: ['the least', 'less', 'least'],
          correctAnswer: 0,
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
      grammarPoint: 'twice/three times + as + adjective + as',
      questions: [
        {
          id: 'g11-q1',
          type: 'fill-blank',
          question:
            'She is ____ as fast ____ her brother.',
          options: ['twice as / as', 'twice more / than', 'the twice / as'],
          correctAnswer: 'twice as / as',
          acceptableAnswers: ['twice as / as'],
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
      grammarPoint: 'superlative + ever',
      questions: [
        {
          id: 'g12-q1',
          type: 'multiple-choice',
          question:
            'That was ____ match I have ever watched.',
          options: ['the best', 'the better', 'best'],
          correctAnswer: 0,
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
      grammarPoint: 'no/nothing + comparative',
      questions: [
        {
          id: 'g13-q1',
          type: 'fill-blank',
          question:
            'There is ____ more important than teamwork in sport.',
          options: ['nothing', 'anything', 'something'],
          correctAnswer: 'nothing',
          acceptableAnswers: ['nothing'],
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
      grammarPoint: 'slightly/a bit + comparative',
      questions: [
        {
          id: 'g14-q1',
          type: 'multiple-choice',
          question:
            'The new stadium is ____ larger than the old one.',
          options: ['slightly', 'far', 'by far'],
          correctAnswer: 0,
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
      grammarPoint: 'the second/third + superlative',
      questions: [
        {
          id: 'g15-q1',
          type: 'fill-blank',
          question:
            'She came ____ in the 100-metre race.',
          options: ['second', 'the second', 'secondly'],
          correctAnswer: 'second',
          acceptableAnswers: ['second'],
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
      grammarPoint: 'the + comparative of two',
      questions: [
        {
          id: 'g16-q1',
          type: 'multiple-choice',
          question:
            'Of the two runners, Maria is ____.',
          options: ['the faster', 'the fastest', 'faster'],
          correctAnswer: 0,
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
      grammarPoint: 'no less + adjective + than',
      questions: [
        {
          id: 'g17-q1',
          type: 'fill-blank',
          question:
            'Training is ____ important ____ competing.',
          options: ['no less / than', 'not less / as', 'the least / of'],
          correctAnswer: 'no less / than',
          acceptableAnswers: ['no less / than'],
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
      grammarPoint: 'Resumen: comparativos y superlativos avanzados',
      questions: [
        {
          id: 'g18-q1',
          type: 'fill-blank',
          question:
            '____ sooner we start training, ____ better our chances of winning.',
          options: ['The / the', 'More / more', 'Sooner / better'],
          correctAnswer: 'The / the',
          acceptableAnswers: ['The / the'],
          explanation:
            'The sooner... the better: cuanto antes... mejor. Correlación con comparativos.',
          points: 2,
        },
      ],
    },
    topicName: 'Grammar',
  },
];
