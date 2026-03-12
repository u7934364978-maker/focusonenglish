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
      grammarPoint: 'Passive (present simple)',
      questions: [
        {
          id: 'g1-q1',
          type: 'fill-blank',
          question:
            'Millions of emails ____ every day around the world.',
          options: ['are sent', 'is sent', 'send'],
          correctAnswer: 'are sent',
          acceptableAnswers: ['are sent'],
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
      grammarPoint: 'Modal passive (must be)',
      questions: [
        {
          id: 'g2-q1',
          type: 'fill-blank',
          question:
            'All samples ____ before they can be used in the experiment.',
          options: ['must be tested', 'must have been tested', 'must test'],
          correctAnswer: 'must be tested',
          acceptableAnswers: ['must be tested'],
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
      grammarPoint: 'So + adjective + that',
      questions: [
        {
          id: 'g3-q1',
          type: 'fill-blank',
          question:
            'The pasta was ____ delicious that I had a second helping.',
          options: ['so', 'such', 'too'],
          correctAnswer: 'so',
          acceptableAnswers: ['so'],
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
      grammarPoint: 'Comparative: the more... the more',
      questions: [
        {
          id: 'g4-q1',
          type: 'multiple-choice',
          question:
            '____ more you train, ____ fit you become.',
          options: ['The / the', 'More / more', 'The most / the most'],
          correctAnswer: 0,
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
      grammarPoint: 'Modal passive (should have been)',
      questions: [
        {
          id: 'g5-q1',
          type: 'fill-blank',
          question:
            'The results ____ published earlier. We lost valuable time.',
          options: [
            'should have been',
            'should be',
            'should have',
          ],
          correctAnswer: 'should have been',
          acceptableAnswers: ['should have been'],
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
      grammarPoint: 'Have something done',
      questions: [
        {
          id: 'g6-q1',
          type: 'multiple-choice',
          question:
            'We ____ the equipment serviced by a specialist last month.',
          options: ['had', 'have', 'got'],
          correctAnswer: 0,
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
      grammarPoint: 'Too + adjective + to',
      questions: [
        {
          id: 'g7-q1',
          type: 'fill-blank',
          question:
            'The soup was ____ hot to eat. I had to wait for it to cool down.',
          options: ['too', 'so', 'enough'],
          correctAnswer: 'too',
          acceptableAnswers: ['too'],
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
      grammarPoint: 'Far + comparative',
      questions: [
        {
          id: 'g8-q1',
          type: 'multiple-choice',
          question:
            'She runs ____ faster than she did last year.',
          options: ['far', 'more', 'the most'],
          correctAnswer: 0,
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
      grammarPoint: 'Passive (past simple)',
      questions: [
        {
          id: 'g9-q1',
          type: 'fill-blank',
          question:
            'The first smartphone ____ in 2007.',
          options: ['was released', 'were released', 'released'],
          correctAnswer: 'was released',
          acceptableAnswers: ['was released'],
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
      grammarPoint: 'Such a + noun',
      questions: [
        {
          id: 'g10-q1',
          type: 'fill-blank',
          question:
            'It was ____ good meal that we stayed for dessert.',
          options: ['such a', 'so a', 'too a'],
          correctAnswer: 'such a',
          acceptableAnswers: ['such a'],
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
      grammarPoint: 'Adjective + enough',
      questions: [
        {
          id: 'g11-q1',
          type: 'fill-blank',
          question:
            'The portion wasn\'t big ____ to share between two people.',
          options: ['enough', 'too', 'so'],
          correctAnswer: 'enough',
          acceptableAnswers: ['enough'],
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
      grammarPoint: 'By far + superlative',
      questions: [
        {
          id: 'g12-q1',
          type: 'multiple-choice',
          question:
            'He is ____ the best player on the team.',
          options: ['by far', 'far', 'the most'],
          correctAnswer: 0,
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
      grammarPoint: 'Passive (present continuous)',
      questions: [
        {
          id: 'g13-q1',
          type: 'fill-blank',
          question:
            'A new app ____ by our team at the moment.',
          options: ['is being developed', 'is developed', 'develops'],
          correctAnswer: 'is being developed',
          acceptableAnswers: ['is being developed'],
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
      grammarPoint: 'As... as (equality)',
      questions: [
        {
          id: 'g14-q1',
          type: 'multiple-choice',
          question:
            'This marathon is ____ challenging ____ the one I ran last month.',
          options: ['as / as', 'more / than', 'the most / of'],
          correctAnswer: 0,
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
      grammarPoint: 'Enough + noun',
      questions: [
        {
          id: 'g15-q1',
          type: 'fill-blank',
          question:
            'We didn\'t have ____ time to order dessert. The restaurant was closing.',
          options: ['enough', 'too', 'so'],
          correctAnswer: 'enough',
          acceptableAnswers: ['enough'],
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
      grammarPoint: 'One of the + superlative',
      questions: [
        {
          id: 'g16-q1',
          type: 'multiple-choice',
          question:
            'Barcelona is one of ____ most popular football clubs in the world.',
          options: ['the', 'a', '—'],
          correctAnswer: 0,
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
      grammarPoint: 'Less... than',
      questions: [
        {
          id: 'g17-q1',
          type: 'fill-blank',
          question:
            'Swimming is ____ dangerous ____ rock climbing.',
          options: ['less / than', 'the least / of', 'as / as'],
          correctAnswer: 'less / than',
          acceptableAnswers: ['less / than'],
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
      grammarPoint: 'Resumen: mezcla de estructuras',
      questions: [
        {
          id: 'g18-q1',
          type: 'multiple-choice',
          question:
            'The hypothesis ____ verified with further research.',
          options: ['can be', 'can have been', 'could verify'],
          correctAnswer: 0,
          explanation:
            'Modal passive: la hipótesis puede ser verificada (posibilidad en presente).',
          points: 2,
        },
      ],
    },
    topicName: 'Grammar',
  },
];
