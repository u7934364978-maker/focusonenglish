/**
 * Unidad 27 — Lección 1: Gramática (Zero Conditional)
 * 15 ejercicios: If + Present Simple, Present Simple
 */

import { Exercise } from '@/lib/exercise-generator';

const LESSON_TITLE = '[[Zero Conditional|Condicional Cero]]: [[If|Si]] + [[Present Simple|Presente Simple]], [[Present Simple|Presente Simple]]';
const INSTRUCTIONS_FILL = 'Completa con la forma correcta del Zero Conditional.';
const INSTRUCTIONS_MULTIPLE = 'Elige la frase o la forma correcta.';
const INSTRUCTIONS_ORDER = 'Ordena las palabras para formar una oración correcta.';
const INSTRUCTIONS_TF = 'Indica si la afirmación es verdadera o falsa.';

export const UNIT_27_LESSON_1_GRAMMAR: Exercise[] = [
  {
    id: 'a2-u27-l1-g1',
    type: 'fill-blank',
    level: 'A2',
    topic: 'Zero Conditional',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_FILL,
      questions: [
        {
          question: '[[If you heat water|Si calientas agua]], [[it|él]] ____ [[boils|hierve]].',
          options: ['[[boils|hierve]]', '[[will boil|hervirá]]', '[[boiled|hirvió]]'],
          correctAnswer: 'boils',
          explanation: '[[Zero Conditional|Condicional Cero]]: [[both|ambas]] [[clauses|oraciones]] [[use|usan]] [[Present Simple|Presente Simple]].',
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a2-u27-l1-g2',
    type: 'fill-blank',
    level: 'A2',
    topic: 'Zero Conditional',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_FILL,
      questions: [
        {
          question: '[[If it rains|Si llueve]], [[the ground|el suelo]] ____ [[wet|mojado]].',
          options: ['[[gets|se pone]]', '[[will get|se pondrá]]', '[[got|se puso]]'],
          correctAnswer: 'gets',
          explanation: '[[Zero Conditional|Condicional Cero]]: [[general|general]] [[truth|verdad]] → [[Present Simple|Presente Simple]] [[in both|en ambas]].',
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a2-u27-l1-g3',
    type: 'fill-blank',
    level: 'A2',
    topic: 'Zero Conditional',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_FILL,
      questions: [
        {
          question: '[[If you mix|Si mezclas]] [[red|rojo]] [[and|y]] [[blue|azul]], [[you|tú]] ____ [[get|obtienes]] [[purple|morado]].',
          options: ['[[get|obtienes]]', '[[will get|obtendrás]]', '[[got|obtuviste]]'],
          correctAnswer: 'get',
          explanation: '[[Scientific|Científico]] [[fact|hecho]] = [[Zero Conditional|Condicional Cero]].',
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a2-u27-l1-g4',
    type: 'fill-blank',
    level: 'A2',
    topic: 'Zero Conditional',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_FILL,
      questions: [
        {
          question: '[[If people|Si la gente]] ____ [[don\'t eat|no come]], [[they|ellos]] [[get|se ponen]] [[hungry|hambrientos]].',
          options: ['[[don\'t eat|no come]]', '[[won\'t eat|no comerá]]', '[[didn\'t eat|no comió]]'],
          correctAnswer: "don't eat",
          explanation: '[[Zero Conditional|Condicional Cero]]: [[If|Si]] + [[Present Simple|Presente Simple]].',
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a2-u27-l1-g5',
    type: 'fill-blank',
    level: 'A2',
    topic: 'Zero Conditional',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_FILL,
      questions: [
        {
          question: '[[If water|Si el agua]] ____ [[freezes|se congela]], [[it|él]] [[turns|se convierte]] [[into|en]] [[ice|hielo]].',
          options: ['[[freezes|se congela]]', '[[will freeze|se congelará]]', '[[froze|se congeló]]'],
          correctAnswer: 'freezes',
          explanation: '[[General|General]] [[truth|verdad]] [[about|sobre]] [[nature|naturaleza]] → [[Zero Conditional|Condicional Cero]].',
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a2-u27-l1-g6',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Zero Conditional',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_MULTIPLE,
      questions: [
        {
          question: '[[What|Qué]] [[is|es]] [[the|la]] [[structure|estructura]] [[of|del]] [[Zero Conditional|Condicional Cero]]?',
          options: [
            '[[If|Si]] + [[Present Simple|Presente Simple]], [[Present Simple|Presente Simple]]',
            '[[If|Si]] + [[Present Simple|Presente Simple]], [[will|will]] + [[infinitive|infinitivo]]',
            '[[If|Si]] + [[Past Simple|Pasado Simple]], [[would|would]] + [[infinitive|infinitivo]]',
          ],
          correctAnswer: 0,
          explanation: '[[Zero Conditional|Condicional Cero]]: [[both|ambas]] [[clauses|oraciones]] [[use|usan]] [[Present Simple|Presente Simple]].',
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a2-u27-l1-g7',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Zero Conditional',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_MULTIPLE,
      questions: [
        {
          question: '[[When|Cuándo]] [[do|usamos]] [[we|nosotros]] [[use|usamos]] [[Zero Conditional|Condicional Cero]]?',
          options: [
            '[[For|Para]] [[general|generales]] [[truths|verdades]], [[scientific|científicos]] [[facts|hechos]], [[and|y]] [[things|cosas]] [[that|que]] [[always|siempre]] [[happen|pasan]]',
            '[[For|Para]] [[future|futuras]] [[possibilities|posibilidades]]',
            '[[For|Para]] [[imaginary|imaginarias]] [[situations|situaciones]]',
          ],
          correctAnswer: 0,
          explanation: '[[Zero Conditional|Condicional Cero]] = [[general|generales]] [[truths|verdades]] [[and|y]] [[facts|hechos]].',
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a2-u27-l1-g8',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Zero Conditional',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_MULTIPLE,
      questions: [
        {
          question: '[[Which|Cuál]] [[sentence|frase]] [[is|es]] [[correct|correcta]]?',
          options: [
            '[[If you heat water|Si calientas agua]], [[it boils|hierve]].',
            '[[If you heat water|Si calientas agua]], [[it will boil|hervirá]].',
            '[[If you will heat water|Si calentarás agua]], [[it boils|hierve]].',
          ],
          correctAnswer: 0,
          explanation: '[[Zero Conditional|Condicional Cero]]: [[both|ambas]] [[clauses|oraciones]] [[use|usan]] [[Present Simple|Presente Simple]].',
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a2-u27-l1-g9',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Zero Conditional',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_MULTIPLE,
      questions: [
        {
          question: '[[What|Qué]] [[is|es]] [[the difference|la diferencia]] [[between|entre]] [[Zero|Cero]] [[and|y]] [[First Conditional|Primer Condicional]]?',
          options: [
            '[[Zero|Cero]] [[uses|usa]] [[Present Simple|Presente Simple]] [[in both|en ambas]] [[clauses|oraciones]]; [[First|Primero]] [[uses|usa]] [[will|will]] [[in|en]] [[the result|el resultado]]',
            '[[Zero|Cero]] [[is|es]] [[for|para]] [[future|futuro]]; [[First|Primero]] [[is|es]] [[for|para]] [[past|pasado]]',
            '[[There is no difference|No hay diferencia]]',
          ],
          correctAnswer: 0,
          explanation: '[[Zero|Cero]] = [[general|general]] [[truths|verdades]]; [[First|Primero]] = [[future|futuras]] [[possibilities|posibilidades]].',
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a2-u27-l1-g10',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Zero Conditional',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_MULTIPLE,
      questions: [
        {
          question: '[[Complete|Completa]]: "[[If you|Si tú]] ____ [[ice|hielo]] [[in the sun|al sol]], [[it|él]] ____ [[melts|se derrite]]."',
          options: ['[[put|pones]] ... [[melts|se derrite]]', '[[will put|pondrás]] ... [[melts|se derrite]]', '[[put|pones]] ... [[will melt|se derretirá]]'],
          correctAnswer: 0,
          explanation: '[[Zero Conditional|Condicional Cero]]: [[both|ambas]] [[clauses|oraciones]] [[use|usan]] [[Present Simple|Presente Simple]].',
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a2-u27-l1-g11',
    type: 'sentence-building',
    level: 'A2',
    topic: 'Zero Conditional',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_ORDER,
      correctSentence: '[[If you heat water|Si calientas agua]], [[it|él]] [[boils|hierve]].',
      words: ['[[If you heat water|Si calientas agua]]', ',', '[[it|él]]', '[[boils|hierve]].'],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a2-u27-l1-g12',
    type: 'sentence-building',
    level: 'A2',
    topic: 'Zero Conditional',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_ORDER,
      correctSentence: '[[If it rains|Si llueve]], [[the ground|el suelo]] [[gets wet|se moja]].',
      words: ['[[If it rains|Si llueve]]', ',', '[[the ground|el suelo]]', '[[gets wet|se moja]].'],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a2-u27-l1-g13',
    type: 'sentence-building',
    level: 'A2',
    topic: 'Zero Conditional',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_ORDER,
      correctSentence: '[[If you mix|Si mezclas]] [[red|rojo]] [[and|y]] [[blue|azul]], [[you|tú]] [[get|obtienes]] [[purple|morado]].',
      words: ['[[If you mix|Si mezclas]]', '[[red|rojo]]', '[[and|y]]', '[[blue|azul]]', ',', '[[you|tú]]', '[[get|obtienes]]', '[[purple|morado]].'],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a2-u27-l1-g14',
    type: 'true-false',
    level: 'A2',
    topic: 'Zero Conditional',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_TF,
      questions: [
        {
          question: '[[In|En]] [[Zero Conditional|Condicional Cero]], [[we|nosotros]] [[use|usamos]] [[Present Simple|Presente Simple]] [[in both|en ambas]] [[clauses|oraciones]].',
          options: ['[[True|Verdadero]]', '[[False|Falso]]'],
          correctAnswer: 'True',
          explanation: '[[True|Verdadero]]. [[Zero Conditional|Condicional Cero]]: [[If|Si]] + [[Present Simple|Presente Simple]], [[Present Simple|Presente Simple]].',
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a2-u27-l1-g15',
    type: 'true-false',
    level: 'A2',
    topic: 'Zero Conditional',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_TF,
      questions: [
        {
          question: '"[[If you heat water|Si calientas agua]], [[it will boil|hervirá]]" [[is|es]] [[Zero Conditional|Condicional Cero]].',
          options: ['[[True|Verdadero]]', '[[False|Falso]]'],
          correctAnswer: 'False',
          explanation: '[[False|Falso]]. [[That|Eso]] [[is|es]] [[First Conditional|Primer Condicional]]. [[Zero|Cero]] [[uses|usa]] [[boils|hierve]], [[not|no]] [[will boil|hervirá]].',
        },
      ],
    },
    topicName: 'Grammar',
  },
];
