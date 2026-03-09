/**
 * Unidad 14 — Lección 1: Gramática (Present Perfect Just)
 * 15 ejercicios: I have just...
 */

import { Exercise } from '@/lib/exercise-generator';

const LESSON_TITLE = '[[Present Perfect|Presente Perfecto]]: [[Just|acabar de]]';
const INSTRUCTIONS_FILL = 'Elige la forma correcta con "just" para cada frase.';
const INSTRUCTIONS_MULTIPLE = 'Elige la frase o la forma correcta.';
const INSTRUCTIONS_ORDER = 'Ordena las palabras para formar una oración correcta.';
const INSTRUCTIONS_TF = 'Indica si la afirmación es verdadera o falsa.';

export const UNIT_14_LESSON_1_GRAMMAR: Exercise[] = [
  {
    id: 'a2-u14-l1-g1',
    type: 'fill-blank',
    level: 'A2',
    topic: 'Present Perfect Just',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_FILL,
      questions: [
        {
          question: '[[I|Yo]] [[have|he]] ____ [[arrived|llegado]]. [[The|El]] [[train|tren]] [[was|fue]] [[late|tarde]].',
          options: ['[[just|acabar de]]', '[[already|ya]]', '[[yet|aún]]'],
          correctAnswer: 'just',
          explanation: '[[Just|Acabar de]] = [[a|un]] [[moment|momento]] [[ago|atrás]]; [[recent|reciente]] [[action|acción]].',
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a2-u14-l1-g2',
    type: 'fill-blank',
    level: 'A2',
    topic: 'Present Perfect Just',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_FILL,
      questions: [
        {
          question: '[[She|Ella]] ____ [[has|ha]] [[finished|terminado]] [[her|su]] [[exam|examen]].',
          options: ['[[just|acabar de]]', '[[already|ya]]', '[[yet|aún]]'],
          correctAnswer: 'just',
          explanation: '[[Just|Acabar de]] [[between|entre]] [[have/has|he/ha]] [[and|y]] [[past participle|participio pasado]].',
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a2-u14-l1-g3',
    type: 'fill-blank',
    level: 'A2',
    topic: 'Present Perfect Just',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_FILL,
      questions: [
        {
          question: '[[They|Ellos]] [[have|han]] ____ [[left|salido]]. [[You|Tú]] [[missed|perdiste]] [[them|ellos]].',
          options: ['[[just|acabar de]]', '[[never|nunca]]', '[[ever|alguna vez]]'],
          correctAnswer: 'just',
          explanation: '[[Just|Acabar de]] = [[very|muy]] [[recent|reciente]]; [[emphasises|enfatiza]] [[recently|recientemente]].',
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a2-u14-l1-g4',
    type: 'fill-blank',
    level: 'A2',
    topic: 'Present Perfect Just',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_FILL,
      questions: [
        {
          question: '[[He|Él]] [[has|ha]] ____ [[woken|despertado]] [[up|levantado]]. [[Don\'t|No]] [[call|llames]] [[now|ahora]].',
          options: ['[[just|acabar de]]', '[[already|ya]]', '[[yet|aún]]'],
          correctAnswer: 'just',
          explanation: '[[Just|Acabar de]] [[woken up|despertado]] = [[acaba de despertarse|acaba de despertarse]].',
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a2-u14-l1-g5',
    type: 'fill-blank',
    level: 'A2',
    topic: 'Present Perfect Just',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_FILL,
      questions: [
        {
          question: '[[We|Nosotros]] [[have|hemos]] ____ [[heard|oído]] [[the|las]] [[news|noticias]]. [[It\'s|Es]] [[amazing|increíble]]!',
          options: ['[[just|acabar de]]', '[[never|nunca]]', '[[ever|alguna vez]]'],
          correctAnswer: 'just',
          explanation: '[[Just heard|Acabar de oír]] = [[recent|reciente]] [[news|noticias]].',
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a2-u14-l1-g6',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Present Perfect Just',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_MULTIPLE,
      questions: [
        {
          question: '[[Which|Cuál]] [[sentence|frase]] [[is|es]] [[correct|correcta]]?',
          options: [
            '[[I|Yo]] [[have|he]] [[just|acabar de]] [[eaten|comido]] [[lunch|comida]].',
            '[[I|Yo]] [[just|acabar de]] [[have|he]] [[eaten|comido]] [[lunch|comida]].',
            '[[I|Yo]] [[have|he]] [[eaten|comido]] [[just|acabar de]] [[lunch|comida]].',
          ],
          correctAnswer: 0,
          explanation: '[[Just|Acabar de]] [[between|entre]] [[have/has|he/ha]] [[and|y]] [[past participle|participio pasado]].',
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a2-u14-l1-g7',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Present Perfect Just',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_MULTIPLE,
      questions: [
        {
          question: '[[What|Qué]] [[does|significa]] "[[just|acabar de]]" [[mean|significar]] [[in|en]] [[Present Perfect|Presente Perfecto]]?',
          options: [
            '[[A|Un]] [[moment|momento]] [[ago|atrás]] [[or|o]] [[very recently|muy recientemente]]',
            '[[Never|Nunca]] [[before|antes]]',
            '[[Not|No]] [[until|hasta]] [[now|ahora]]',
          ],
          correctAnswer: 0,
          explanation: '[[Just|Acabar de]] = [[a moment ago|un momento atrás]] [[or|o]] [[very recently|muy recientemente]].',
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a2-u14-l1-g8',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Present Perfect Just',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_MULTIPLE,
      questions: [
        {
          question: '[[Complete|Completa]]: "[[She|Ella]] ____ [[has|ha]] ____ [[called|llamado]]."',
          options: ['[[just|acabar de]]', '[[already|ya]]', '[[yet|aún]]'],
          correctAnswer: 0,
          explanation: '[[She has just called|Ella acaba de llamar]].',
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a2-u14-l1-g9',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Present Perfect Just',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_MULTIPLE,
      questions: [
        {
          question: '[[Which|Cuál]] [[word|palabra]] [[is|es]] [[similar|similar]] [[to|a]] "[[just|acabar de]]" [[in|en]] [[meaning|significado]]?',
          options: ['[[never|nunca]]', '[[recently|recientemente]]', '[[yet|aún]]'],
          correctAnswer: 1,
          explanation: '[[Just|Acabar de]] ≈ [[recently|recientemente]] [[but|pero]] [[stronger|más fuerte]] [[(a moment ago)|(un momento atrás)]].',
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a2-u14-l1-g10',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Present Perfect Just',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_MULTIPLE,
      questions: [
        {
          question: '[[Which|Cuál]] [[sentence|frase]] [[is|es]] [[correct|correcta]]?',
          options: [
            '[[He|Él]] [[has|ha]] [[just|acabar de]] [[gone|ido]] [[out|fuera]].',
            '[[He|Él]] [[just|acabar de]] [[has|ha]] [[gone|ido]] [[out|fuera]].',
            '[[He|Él]] [[has|ha]] [[gone|ido]] [[just|acabar de]] [[out|fuera]].',
          ],
          correctAnswer: 0,
          explanation: '[[Has|Ha]] + [[just|acabar de]] + [[past participle|participio pasado]].',
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a2-u14-l1-g11',
    type: 'sentence-building',
    level: 'A2',
    topic: 'Present Perfect Just',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_ORDER,
      correctSentence: '[[I|Yo]] [[have|he]] [[just|acabar de]] [[arrived|llegado]].',
      words: ['[[I|Yo]]', '[[have|he]]', '[[just|acabar de]]', '[[arrived|llegado]].'],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a2-u14-l1-g12',
    type: 'sentence-building',
    level: 'A2',
    topic: 'Present Perfect Just',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_ORDER,
      correctSentence: '[[She|Ella]] [[has|ha]] [[just|acabar de]] [[finished|terminado]] [[her|su]] [[exam|examen]].',
      words: ['[[She|Ella]]', '[[has|ha]]', '[[just|acabar de]]', '[[finished|terminado]]', '[[her|su]]', '[[exam|examen]].'],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a2-u14-l1-g13',
    type: 'sentence-building',
    level: 'A2',
    topic: 'Present Perfect Just',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_ORDER,
      correctSentence: '[[They|Ellos]] [[have|han]] [[just|acabar de]] [[left|salido]].',
      words: ['[[They|Ellos]]', '[[have|han]]', '[[just|acabar de]]', '[[left|salido]].'],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a2-u14-l1-g14',
    type: 'true-false',
    level: 'A2',
    topic: 'Present Perfect Just',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_TF,
      questions: [
        {
          question: '"[[Just|Acabar de]]" [[is|es]] [[used|usado]] [[for|para]] [[actions|acciones]] [[that|que]] [[happened|ocurrieron]] [[a|un]] [[moment|momento]] [[ago|atrás]].',
          options: ['[[True|Verdadero]]', '[[False|Falso]]'],
          correctAnswer: 'True',
          explanation: '[[True|Verdadero]]. [[Just|Acabar de]] = [[very recently|muy recientemente]].',
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a2-u14-l1-g15',
    type: 'true-false',
    level: 'A2',
    topic: 'Present Perfect Just',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_TF,
      questions: [
        {
          question: '"[[I|Yo]] [[just|acabar de]] [[have|he]] [[eaten|comido]]" [[is|es]] [[the|el]] [[correct|correcto]] [[word order|orden de palabras]].',
          options: ['[[True|Verdadero]]', '[[False|Falso]]'],
          correctAnswer: 'False',
          explanation: '[[False|Falso]]. [[Correct|Correcto]]: "[[I have just eaten|Acabo de comer]]". [[Just|Acabar de]] [[after|después]] [[have|he]].',
        },
      ],
    },
    topicName: 'Grammar',
  },
];
