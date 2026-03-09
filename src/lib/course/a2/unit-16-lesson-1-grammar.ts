/**
 * Unidad 16 — Lección 1: Gramática (Past Continuous)
 * 15 ejercicios: was/were + -ing
 */

import { Exercise } from '@/lib/exercise-generator';

const LESSON_TITLE = '[[Past Continuous|Pasado Continuo]]';
const INSTRUCTIONS_FILL = 'Elige la forma correcta del Past Continuous (was/were + -ing).';
const INSTRUCTIONS_MULTIPLE = 'Elige la frase o la forma correcta.';
const INSTRUCTIONS_ORDER = 'Ordena las palabras para formar una oración correcta.';
const INSTRUCTIONS_TF = 'Indica si la afirmación es verdadera o falsa.';

export const UNIT_16_LESSON_1_GRAMMAR: Exercise[] = [
  {
    id: 'a2-u16-l1-g1',
    type: 'fill-blank',
    level: 'A2',
    topic: 'Past Continuous',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_FILL,
      questions: [
        {
          question: '[[I|Yo]] ____ [[watching|viendo]] [[TV|televisión]] [[at|a]] [[8pm|las 8]].',
          options: ['[[was|estaba]]', '[[were|estaban]]', '[[am|soy]]'],
          correctAnswer: 'was',
          explanation: '[[With|Con]] "[[I|Yo]]" [[we|nosotros]] [[use|usamos]] "[[was|estaba]]" + [[-ing|-ando]].',
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a2-u16-l1-g2',
    type: 'fill-blank',
    level: 'A2',
    topic: 'Past Continuous',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_FILL,
      questions: [
        {
          question: '[[They|Ellos]] ____ [[playing|jugando]] [[football|fútbol]] [[when|cuando]] [[it|él]] [[rained|llovió]].',
          options: ['[[was|estaba]]', '[[were|estaban]]', '[[are|son]]'],
          correctAnswer: 'were',
          explanation: '[[With|Con]] "[[they|ellos]]" [[we|nosotros]] [[use|usamos]] "[[were|estaban]]" + [[-ing|-ando]].',
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a2-u16-l1-g3',
    type: 'fill-blank',
    level: 'A2',
    topic: 'Past Continuous',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_FILL,
      questions: [
        {
          question: '[[She|Ella]] ____ [[reading|leyendo]] [[a|un]] [[book|libro]] [[last night|anoche]].',
          options: ['[[was|estaba]]', '[[were|estaban]]', '[[is|es]]'],
          correctAnswer: 'was',
          explanation: '[[She|Ella]] + [[was|estaba]] + [[-ing|-ando]].',
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a2-u16-l1-g4',
    type: 'fill-blank',
    level: 'A2',
    topic: 'Past Continuous',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_FILL,
      questions: [
        {
          question: '[[We|Nosotros]] ____ [[cooking|cocinando]] [[dinner|cena]] [[when|cuando]] [[you|tú]] [[called|llamaste]].',
          options: ['[[was|estaba]]', '[[were|estaban]]', '[[are|somos]]'],
          correctAnswer: 'were',
          explanation: '[[We|Nosotros]] + [[were|estábamos]] + [[-ing|-ando]].',
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a2-u16-l1-g5',
    type: 'fill-blank',
    level: 'A2',
    topic: 'Past Continuous',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_FILL,
      questions: [
        {
          question: '[[He|Él]] ____ [[not|no]] [[working|trabajando]] [[yesterday|ayer]] [[afternoon|tarde]].',
          options: ['[[was|estaba]]', '[[were|estaban]]', '[[is|es]]'],
          correctAnswer: 'was',
          explanation: '[[Negative|Negativa]]: [[was/were|estaba/estaban]] + [[not|no]] + [[-ing|-ando]].',
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a2-u16-l1-g6',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Past Continuous',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_MULTIPLE,
      questions: [
        {
          question: '[[Which|Cuál]] [[sentence|frase]] [[is|es]] [[correct|correcta]]?',
          options: [
            '[[I|Yo]] [[was|estaba]] [[watching|viendo]] [[TV|televisión]].',
            '[[I|Yo]] [[were|estaban]] [[watching|viendo]] [[TV|televisión]].',
            '[[I|Yo]] [[am|soy]] [[watching|viendo]] [[TV|televisión]].',
          ],
          correctAnswer: 0,
          explanation: '[[I|Yo]] + [[was|estaba]] + [[-ing|-ando]].',
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a2-u16-l1-g7',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Past Continuous',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_MULTIPLE,
      questions: [
        {
          question: '[[Choose|Elige]] [[the|la]] [[correct|correcta]] [[form|forma]] [[for|para]] "[[They|Ellos]] ____ [[sleeping|durmiendo]]."',
          options: ['[[was|estaba]]', '[[were|estaban]]', '[[are|son]]'],
          correctAnswer: 1,
          explanation: '[[They|Ellos]] + [[were|estaban]] + [[-ing|-ando]].',
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a2-u16-l1-g8',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Past Continuous',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_MULTIPLE,
      questions: [
        {
          question: '[[What|Qué]] [[is|es]] [[the|la]] [[structure|estructura]] [[of|del]] [[Past Continuous|Pasado Continuo]]?',
          options: [
            '[[was/were|estaba/estaban]] + [[verb|-ing]]',
            '[[have/has|he/ha]] + [[past participle|participio pasado]]',
            '[[did|hizo]] + [[base verb|verbo base]]',
          ],
          correctAnswer: 0,
          explanation: '[[Past Continuous|Pasado Continuo]] = [[was/were|estaba/estaban]] + [[verb|-ing]].',
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a2-u16-l1-g9',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Past Continuous',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_MULTIPLE,
      questions: [
        {
          question: '[[Complete|Completa]]: "[[Was|¿Estaba]] [[she|ella]] ____ [[studying|estudiando]]?"',
          options: ['[[study|estudiar]]', '[[studying|estudiando]]', '[[studied|estudió]]'],
          correctAnswer: 1,
          explanation: '[[Past Continuous|Pasado Continuo]] [[needs|necesita]] [[-ing|form|-ando]].',
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a2-u16-l1-g10',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Past Continuous',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_MULTIPLE,
      questions: [
        {
          question: '[[Which|Cuál]] [[sentence|frase]] [[is|es]] [[correct|correcta]]?',
          options: [
            '[[We|Nosotros]] [[were|estábamos]] [[not|no]] [[sleeping|durmiendo]].',
            '[[We|Nosotros]] [[was|estaba]] [[not|no]] [[sleeping|durmiendo]].',
            '[[We|Nosotros]] [[didn\'t|no]] [[sleeping|durmiendo]].',
          ],
          correctAnswer: 0,
          explanation: '[[We|Nosotros]] + [[were|estábamos]] + [[not|no]] + [[-ing|-ando]].',
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a2-u16-l1-g11',
    type: 'sentence-building',
    level: 'A2',
    topic: 'Past Continuous',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_ORDER,
      correctSentence: '[[I|Yo]] [[was|estaba]] [[watching|viendo]] [[TV|televisión]] [[at|a]] [[8pm|las 8]].',
      words: ['[[I|Yo]]', '[[was|estaba]]', '[[watching|viendo]]', '[[TV|televisión]]', '[[at|a]]', '[[8pm|las 8]].'],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a2-u16-l1-g12',
    type: 'sentence-building',
    level: 'A2',
    topic: 'Past Continuous',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_ORDER,
      correctSentence: '[[They|Ellos]] [[were|estaban]] [[playing|jugando]] [[football|fútbol]].',
      words: ['[[They|Ellos]]', '[[were|estaban]]', '[[playing|jugando]]', '[[football|fútbol]].'],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a2-u16-l1-g13',
    type: 'sentence-building',
    level: 'A2',
    topic: 'Past Continuous',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_ORDER,
      correctSentence: '[[She|Ella]] [[was|estaba]] [[reading|leyendo]] [[a|un]] [[book|libro]] [[when|cuando]] [[I|yo]] [[arrived|llegué]].',
      words: ['[[She|Ella]]', '[[was|estaba]]', '[[reading|leyendo]]', '[[a|un]]', '[[book|libro]]', '[[when|cuando]]', '[[I|yo]]', '[[arrived|llegué]].'],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a2-u16-l1-g14',
    type: 'true-false',
    level: 'A2',
    topic: 'Past Continuous',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_TF,
      questions: [
        {
          question: '[[Past Continuous|Pasado Continuo]] [[uses|usa]] [[was|estaba]] [[for|para]] [[I/he/she/it|yo/él/ella/eso]] [[and|y]] [[were|estaban]] [[for|para]] [[you/we/they|tú/nosotros/ellos]].',
          options: ['[[True|Verdadero]]', '[[False|Falso]]'],
          correctAnswer: 'True',
          explanation: '[[True|Verdadero]]. [[Was|Estaba]] = [[I/he/she/it|yo/él/ella/eso]]; [[were|estaban]] = [[you/we/they|tú/nosotros/ellos]].',
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a2-u16-l1-g15',
    type: 'true-false',
    level: 'A2',
    topic: 'Past Continuous',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_TF,
      questions: [
        {
          question: '"[[I|Yo]] [[were|estaban]] [[working|trabajando]]" [[is|es]] [[correct|correcto]] [[in|en]] [[English|inglés]].',
          options: ['[[True|Verdadero]]', '[[False|Falso]]'],
          correctAnswer: 'False',
          explanation: '[[False|Falso]]. [[Correct|Correcto]]: "[[I was working|Estaba trabajando]]". [[I|Yo]] [[uses|usa]] [[was|estaba]], [[not|no]] [[were|estaban]].',
        },
      ],
    },
    topicName: 'Grammar',
  },
];
