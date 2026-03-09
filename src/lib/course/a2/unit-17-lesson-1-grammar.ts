/**
 * Unidad 17 — Lección 1: Gramática (Past Simple + Past Continuous)
 * 15 ejercicios: when/while, acción interrumpida
 */

import { Exercise } from '@/lib/exercise-generator';

const LESSON_TITLE = '[[Past Simple|Pasado Simple]] [[+||]] [[Past Continuous|Pasado Continuo]]';
const INSTRUCTIONS_FILL = 'Elige la forma correcta (Past Simple o Past Continuous) para cada frase.';
const INSTRUCTIONS_MULTIPLE = 'Elige la frase o la forma correcta.';
const INSTRUCTIONS_ORDER = 'Ordena las palabras para formar una oración correcta.';
const INSTRUCTIONS_TF = 'Indica si la afirmación es verdadera o falsa.';

export const UNIT_17_LESSON_1_GRAMMAR: Exercise[] = [
  {
    id: 'a2-u17-l1-g1',
    type: 'fill-blank',
    level: 'A2',
    topic: 'Past Simple Past Continuous',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_FILL,
      questions: [
        {
          question: '[[I|Yo]] ____ [[walking|caminando]] [[when|cuando]] [[I|yo]] [[saw|vi]] [[him|él]].',
          options: ['[[was|estaba]]', '[[were|estaban]]', '[[am|soy]]'],
          correctAnswer: 'was',
          explanation: '[[When|Cuando]] + [[Past Simple|Pasado Simple]]: [[short|corta]] [[action|acción]] [[interrupts|interrumpe]] [[long|larga]] [[one|una]].',
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a2-u17-l1-g2',
    type: 'fill-blank',
    level: 'A2',
    topic: 'Past Simple Past Continuous',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_FILL,
      questions: [
        {
          question: '[[While|Mientras]] [[she|ella]] ____ [[cooking|cocinando]], [[the|el]] [[phone|teléfono]] [[rang|sonó]].',
          options: ['[[was|estaba]]', '[[were|estaban]]', '[[is|es]]'],
          correctAnswer: 'was',
          explanation: '[[While|Mientras]] + [[Past Continuous|Pasado Continuo]]: [[long|larga]] [[action|acción]] [[in|en]] [[progress|progreso]].',
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a2-u17-l1-g3',
    type: 'fill-blank',
    level: 'A2',
    topic: 'Past Simple Past Continuous',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_FILL,
      questions: [
        {
          question: '[[He|Él]] ____ [[reading|leyendo]] [[when|cuando]] [[the|la]] [[door|puerta]] [[opened|se abrió]].',
          options: ['[[was|estaba]]', '[[were|estaban]]', '[[read|leyó]]'],
          correctAnswer: 'was',
          explanation: '[[Past Continuous|Pasado Continuo]] [[for|para]] [[background|fondo]]; [[Past Simple|Pasado Simple]] [[for|para]] [[interruption|interrupción]].',
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a2-u17-l1-g4',
    type: 'fill-blank',
    level: 'A2',
    topic: 'Past Simple Past Continuous',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_FILL,
      questions: [
        {
          question: '[[They|Ellos]] ____ [[having|teniendo]] [[dinner|cena]] [[when|cuando]] [[we|nosotros]] [[arrived|llegamos]].',
          options: ['[[were|estaban]]', '[[was|estaba]]', '[[had|tuvieron]]'],
          correctAnswer: 'were',
          explanation: '[[They|Ellos]] + [[were|estaban]] + [[-ing|-ando]] = [[long|larga]] [[action|acción]].',
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a2-u17-l1-g5',
    type: 'fill-blank',
    level: 'A2',
    topic: 'Past Simple Past Continuous',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_FILL,
      questions: [
        {
          question: '[[I|Yo]] ____ [[saw|vi]] [[her|ella]] [[while|mientras]] [[I|yo]] [[was walking|estaba caminando]] [[home|casa]].',
          options: ['[[saw|vi]]', '[[was seeing|estaba viendo]]', '[[see|ver]]'],
          correctAnswer: 'saw',
          explanation: '[[Short|Corta]] [[action|acción]] = [[Past Simple|Pasado Simple]]; [[long|larga]] = [[Past Continuous|Pasado Continuo]].',
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a2-u17-l1-g6',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Past Simple Past Continuous',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_MULTIPLE,
      questions: [
        {
          question: '[[Which|Cuál]] [[sentence|frase]] [[is|es]] [[correct|correcta]]?',
          options: [
            '[[When|Cuando]] [[I|yo]] [[was walking|estaba caminando]], [[I|yo]] [[saw|vi]] [[an|un]] [[accident|accidente]].',
            '[[When|Cuando]] [[I|yo]] [[walked|caminé]], [[I|yo]] [[was seeing|estaba viendo]] [[an|un]] [[accident|accidente]].',
            '[[When|Cuando]] [[I|yo]] [[walk|camino]], [[I|yo]] [[saw|vi]] [[an|un]] [[accident|accidente]].',
          ],
          correctAnswer: 0,
          explanation: '[[Long|Larga]] [[action|acción]] ([[walking|caminando]]) = [[Past Continuous|Pasado Continuo]]; [[short|Corta]] ([[saw|vi]]) = [[Past Simple|Pasado Simple]].',
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a2-u17-l1-g7',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Past Simple Past Continuous',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_MULTIPLE,
      questions: [
        {
          question: '[[What|Qué]] [[do|usamos]] [[we|nosotros]] [[use|usar]] [[after|después]] [[while|mientras]]?',
          options: [
            '[[Past Continuous|Pasado Continuo]] [[for|para]] [[long|larga]] [[action|acción]]',
            '[[Past Simple|Pasado Simple]] [[only|solo]]',
            '[[Present|Presente]] [[Continuous|Continuo]]',
          ],
          correctAnswer: 0,
          explanation: '[[While|Mientras]] + [[Past Continuous|Pasado Continuo]] = [[action|acción]] [[in|en]] [[progress|progreso]].',
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a2-u17-l1-g8',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Past Simple Past Continuous',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_MULTIPLE,
      questions: [
        {
          question: '[[Complete|Completa]]: "[[While|Mientras]] ____ [[was|estaba]] [[sleeping|durmiendo]], [[someone|alguien]] [[knocked|llamó]] [[on|a]] [[the|la]] [[door|puerta]]."',
          options: ['[[I|yo]]', '[[they|ellos]]', '[[you|tú]]'],
          correctAnswer: 0,
          explanation: '[[I|Yo]] + [[was|estaba]] + [[-ing|-ando]].',
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a2-u17-l1-g9',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Past Simple Past Continuous',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_MULTIPLE,
      questions: [
        {
          question: '[[Which|Cuál]] [[word|palabra]] [[introduces|introduce]] [[the|la]] [[short|corta]] [[interrupting|interrumpida]] [[action|acción]]?',
          options: ['[[while|mientras]]', '[[when|cuando]]', '[[during|durante]]'],
          correctAnswer: 1,
          explanation: '[[When|Cuando]] [[often|a menudo]] [[introduces|introduce]] [[the|la]] [[short|corta]] [[action|acción]] [[that|que]] [[interrupts|interrumpe]].',
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a2-u17-l1-g10',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Past Simple Past Continuous',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_MULTIPLE,
      questions: [
        {
          question: '[[Which|Cuál]] [[sentence|frase]] [[is|es]] [[correct|correcta]]?',
          options: [
            '[[While|Mientras]] [[they|ellos]] [[were|estaban]] [[eating|comiendo]], [[the|el]] [[lights|luces]] [[went|se fueron]] [[out|apagadas]].',
            '[[While|Mientras]] [[they|ellos]] [[ate|comieron]], [[the|el]] [[lights|luces]] [[went|se fueron]] [[out|apagadas]].',
            '[[When|Cuando]] [[they|ellos]] [[were|estaban]] [[eating|comiendo]], [[the|el]] [[lights|luces]] [[go|van]] [[out|apagadas]].',
          ],
          correctAnswer: 0,
          explanation: '[[While|Mientras]] + [[Past Continuous|Pasado Continuo]]; [[short|Corta]] [[action|acción]] ([[went out|se apagaron]]) = [[Past Simple|Pasado Simple]].',
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a2-u17-l1-g11',
    type: 'sentence-building',
    level: 'A2',
    topic: 'Past Simple Past Continuous',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_ORDER,
      correctSentence: '[[I|Yo]] [[was|estaba]] [[walking|caminando]] [[when|cuando]] [[I|yo]] [[saw|vi]] [[him|él]].',
      words: ['[[I|Yo]]', '[[was|estaba]]', '[[walking|caminando]]', '[[when|cuando]]', '[[I|yo]]', '[[saw|vi]]', '[[him|él]].'],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a2-u17-l1-g12',
    type: 'sentence-building',
    level: 'A2',
    topic: 'Past Simple Past Continuous',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_ORDER,
      correctSentence: '[[While|Mientras]] [[she|ella]] [[was|estaba]] [[cooking|cocinando]], [[the|el]] [[phone|teléfono]] [[rang|sonó]].',
      words: ['[[While|Mientras]]', '[[she|ella]]', '[[was|estaba]]', '[[cooking|cocinando]]', '[[the|el]]', '[[phone|teléfono]]', '[[rang|sonó]].'],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a2-u17-l1-g13',
    type: 'sentence-building',
    level: 'A2',
    topic: 'Past Simple Past Continuous',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_ORDER,
      correctSentence: '[[They|Ellos]] [[were|estaban]] [[having|teniendo]] [[dinner|cena]] [[when|cuando]] [[we|nosotros]] [[arrived|llegamos]].',
      words: ['[[They|Ellos]]', '[[were|estaban]]', '[[having|teniendo]]', '[[dinner|cena]]', '[[when|cuando]]', '[[we|nosotros]]', '[[arrived|llegamos]].'],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a2-u17-l1-g14',
    type: 'true-false',
    level: 'A2',
    topic: 'Past Simple Past Continuous',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_TF,
      questions: [
        {
          question: '"[[When|Cuando]]" [[can|puede]] [[introduce|introducir]] [[either|tanto]] [[Past Simple|Pasado Simple]] [[or|o]] [[Past Continuous|Pasado Continuo]] [[depending|dependiendo]] [[on|de]] [[context|contexto]].',
          options: ['[[True|Verdadero]]', '[[False|Falso]]'],
          correctAnswer: 'True',
          explanation: '[[True|Verdadero]]. [[When|Cuando]] [[+ Past Simple|+ Pasado Simple]] = [[short|corta]] [[action|acción]]; [[when|cuando]] [[+ Past Continuous|+ Pasado Continuo]] = [[long|larga]] [[action|acción]].',
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a2-u17-l1-g15',
    type: 'true-false',
    level: 'A2',
    topic: 'Past Simple Past Continuous',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_TF,
      questions: [
        {
          question: '"[[While|Mientras]]" [[is|es]] [[usually|normalmente]] [[followed|seguido]] [[by|por]] [[Past Simple|Pasado Simple]] [[for|para]] [[the|la]] [[long|larga]] [[action|acción]].',
          options: ['[[True|Verdadero]]', '[[False|Falso]]'],
          correctAnswer: 'False',
          explanation: '[[False|Falso]]. [[While|Mientras]] + [[Past Continuous|Pasado Continuo]] [[for|para]] [[long|larga]] [[action|acción]] [[in|en]] [[progress|progreso]].',
        },
      ],
    },
    topicName: 'Grammar',
  },
];
