/**
 * Unidad 15 — Lección 1: Gramática (Present Simple: He, She, It)
 * Negativa doesn't; preguntas Does he/she/it…?; ortografía 3.ª persona (-s, -es, -ies).
 * 15 ejercicios: 5 fill-blank, 5 multiple-choice, 3 sentence-building, 2 true-false
 */

import { Exercise } from '@/lib/exercise-generator';

const LESSON_TITLE = 'Presente simple: negativa y preguntas (he, she, it)';
const TOPIC = 'Present Simple: He, She, It';

const INSTRUCTIONS_FILL = 'Completa la frase con la palabra correcta.';
const INSTRUCTIONS_MC = 'Elige la opción correcta.';
const INSTRUCTIONS_ORDER = 'Ordena las palabras para formar una oración correcta.';
const INSTRUCTIONS_TF = 'Indica si la afirmación es verdadera o falsa.';

export const UNIT_15_LESSON_1_GRAMMAR: Exercise[] = [
  {
    id: 'a1-u15-l1-g1',
    type: 'fill-blank',
    level: 'A1',
    topic: TOPIC,
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_FILL,
      questions: [{
        question: '[[He|Él]] ____ [[like|le gusta]] [[getting up early|levantarse temprano]].',
        options: ['[[don\'t|no]]', '[[doesn\'t|no]]', '[[not|no]]'],
        correctAnswer: '[[doesn\'t|no]]',
        explanation: 'Con he/she/it usamos doesn\'t para la negativa.',
      }],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a1-u15-l1-g2',
    type: 'fill-blank',
    level: 'A1',
    topic: TOPIC,
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_FILL,
      questions: [{
        question: '[[She|Ella]] ____ [[to|a]] [[work|trabajo]] [[at|a]] [[nine|nueve]].',
        options: ['[[go|ir]]', '[[goes|va]]', '[[going|yendo]]'],
        correctAnswer: '[[goes|va]]',
        explanation: 'Con she/he/it el verbo lleva -s: she goes.',
      }],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a1-u15-l1-g3',
    type: 'fill-blank',
    level: 'A1',
    topic: TOPIC,
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_FILL,
      questions: [{
        question: '[[Does|¿]] ____ [[he|él]] [[play|juega]] [[football|fútbol]]?',
        options: ['[[do|(auxiliar)]]', '[[does|(auxiliar)]]', '[[is|es]]'],
        correctAnswer: '[[does|(auxiliar)]]',
        explanation: 'Does he play...? Con he/she/it usamos does.',
      }],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a1-u15-l1-g4',
    type: 'fill-blank',
    level: 'A1',
    topic: TOPIC,
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_FILL,
      questions: [{
        question: '[[Does|¿]] [[she|ella]] [[cook|cocina]]? [[No|No]], [[she|ella]] ____.',
        options: ['[[does|sí]]', '[[doesn\'t|no]]', '[[don\'t|no]]'],
        correctAnswer: '[[doesn\'t|no]]',
        explanation: 'No, she doesn\'t. Respuesta corta negativa con she.',
      }],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a1-u15-l1-g5',
    type: 'fill-blank',
    level: 'A1',
    topic: TOPIC,
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_FILL,
      questions: [{
        question: '[[My|Mi]] [[dog|perro]] ____ [[eat|come]] [[meat|carne]]. [[It|Él]] [[likes|le gusta]] [[it|lo]].',
        options: ['[[eats|come]]', '[[eat|comer]]', '[[eating|comiendo]]'],
        correctAnswer: '[[eats|come]]',
        explanation: 'Con it (el perro) el verbo lleva -s: it eats.',
      }],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a1-u15-l1-g6',
    type: 'multiple-choice',
    level: 'A1',
    topic: TOPIC,
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_MC,
      questions: [{
        question: '[[She|Ella]] ____ [[TV|la tele]] [[every|todas las]] [[night|noches]].',
        options: ['[[watch|ver]]', '[[watches|ve]]', '[[watching|viendo]]'],
        correctAnswer: 1,
        explanation: 'She watches. Con -ch añadimos -es: watches.',
      }],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a1-u15-l1-g7',
    type: 'multiple-choice',
    level: 'A1',
    topic: TOPIC,
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_MC,
      questions: [{
        question: '[[He|Él]] ____ [[study|estudiar]] [[English|inglés]]. [[He|Él]] [[works|trabaja]] [[in|en]] [[an|una]] [[office|oficina]].',
        options: ['[[don\'t|no]]', '[[doesn\'t|no]]', '[[not|no]]'],
        correctAnswer: 1,
        explanation: 'He doesn\'t study. Con he usamos doesn\'t.',
      }],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a1-u15-l1-g8',
    type: 'multiple-choice',
    level: 'A1',
    topic: TOPIC,
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_MC,
      questions: [{
        question: '[[Does|¿]] ____ [[the|el]] [[cat|gato]] [[like|le gusta]] [[milk|leche]]? [[Yes|Sí]], [[it|él]] [[does|sí]].',
        options: ['[[do|(auxiliar)]]', '[[does|(auxiliar)]]', '[[is|es]]'],
        correctAnswer: 1,
        explanation: 'Does the cat like...? Con it (el gato) usamos does.',
      }],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a1-u15-l1-g9',
    type: 'multiple-choice',
    level: 'A1',
    topic: TOPIC,
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_MC,
      questions: [{
        question: '[[Maria|María]] ____ [[her|su]] [[homework|deberes]] [[after|después de]] [[dinner|cena]].',
        options: ['[[do|hacer]]', '[[does|hace]]', '[[doing|haciendo]]'],
        correctAnswer: 1,
        explanation: 'Maria does. She = 3.ª persona: does.',
      }],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a1-u15-l1-g10',
    type: 'multiple-choice',
    level: 'A1',
    topic: TOPIC,
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_MC,
      questions: [{
        question: '[[The|El]] ____ [[flies|vuela]] [[in|en]] [[the|el]] [[sky|cielo]].',
        options: ['[[bird|pájaro]]', '[[birds|pájaros]]', '[[dog|perro]]'],
        correctAnswer: 0,
        explanation: 'The bird = it. The bird flies (fly → flies con -y).',
      }],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a1-u15-l1-g11',
    type: 'sentence-building',
    level: 'A1',
    topic: TOPIC,
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_ORDER,
      correctSentence: '[[He|Él]] [[doesn\'t|no]] [[like|le gusta]] [[getting up early|levantarse temprano]].',
      words: ['[[He|Él]]', '[[doesn\'t|no]]', '[[like|le gusta]]', '[[getting up early|levantarse temprano]].'],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a1-u15-l1-g12',
    type: 'sentence-building',
    level: 'A1',
    topic: TOPIC,
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_ORDER,
      correctSentence: '[[Does|¿]] [[she|ella]] [[work|trabaja]] [[on|los]] [[Saturdays|sábados]]?',
      words: ['[[Does|¿]]', '[[she|ella]]', '[[work|trabaja]]', '[[on|los]]', '[[Saturdays|sábados]]?'],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a1-u15-l1-g13',
    type: 'sentence-building',
    level: 'A1',
    topic: TOPIC,
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_ORDER,
      correctSentence: '[[My|Mi]] [[brother|hermano]] [[goes|va]] [[to bed|a la cama]] [[at|a]] [[eleven|once]].',
      words: ['[[My|Mi]]', '[[brother|hermano]]', '[[goes|va]]', '[[to bed|a la cama]]', '[[at|a]]', '[[eleven|once]].'],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a1-u15-l1-g14',
    type: 'true-false',
    level: 'A1',
    topic: TOPIC,
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_TF,
      questions: [{
        question: '[[With|Con]] [[he|he]], [[she|she]], [[it|it]] [[we|se]] [[use|usa]] "[[doesn\'t|doesn\'t]]" [[for|para]] [[the|la]] [[negative|negativa]].',
        correctAnswer: true,
        explanation: 'He/she/it + doesn\'t + verbo (sin -s).',
      }],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a1-u15-l1-g15',
    type: 'true-false',
    level: 'A1',
    topic: TOPIC,
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_TF,
      questions: [{
        question: '[[After|Tras]] "[[Does|Does]]" [[we|se]] [[use|usa]] [[the|el]] [[verb|verbo]] [[in|en]] [[infinitive|infinitivo]] [[(Does he play?)|(Does he play?)]].',
        correctAnswer: true,
        explanation: 'Does he play? No decimos Does he plays.',
      }],
    },
    topicName: 'Grammar',
  },
];
