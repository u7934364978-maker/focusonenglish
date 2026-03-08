/**
 * Unidad 12 — Lección 1: Gramática (Places in Town)
 * There is / There are, Where is...?, Is there a...?, preposiciones de lugar.
 * 15 ejercicios: 5 fill-blank, 5 multiple-choice, 3 sentence-building, 2 true-false
 */

import { Exercise } from '@/lib/exercise-generator';

const LESSON_TITLE = 'Lugares en la ciudad: There is/are y Where is...?';
const TOPIC = 'Places in Town';

const INSTRUCTIONS_FILL = 'Completa la frase con la palabra correcta.';
const INSTRUCTIONS_MC = 'Elige la opción correcta.';
const INSTRUCTIONS_ORDER = 'Ordena las palabras para formar una oración correcta.';
const INSTRUCTIONS_TF = 'Indica si la afirmación es verdadera o falsa.';

export const UNIT_12_LESSON_1_GRAMMAR: Exercise[] = [
  {
    id: 'a1-u12-l1-g1',
    type: 'fill-blank',
    level: 'A1',
    topic: TOPIC,
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_FILL,
      questions: [{
        question: '[[There|Hay]] ____ [[a|un]] [[bank|banco]] [[near|cerca]] [[here|aquí]].',
        options: ['[[is|(singular)]]', '[[are|(plural)]]', '[[be|(infinitivo)]]'],
        correctAnswer: '[[is|(singular)]]',
        explanation: 'Con un solo lugar usamos There is.',
      }],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a1-u12-l1-g2',
    type: 'fill-blank',
    level: 'A1',
    topic: TOPIC,
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_FILL,
      questions: [{
        question: '[[There|Hay]] ____ [[two|dos]] [[parks|parques]] [[in|en]] [[my|mi]] [[town|pueblo]].',
        options: ['[[is|(singular)]]', '[[are|(plural)]]', '[[be|(infinitivo)]]'],
        correctAnswer: '[[are|(plural)]]',
        explanation: 'Con plural (two parks) usamos There are.',
      }],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a1-u12-l1-g3',
    type: 'fill-blank',
    level: 'A1',
    topic: TOPIC,
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_FILL,
      questions: [{
        question: '[[Where|Dónde]] ____ [[the|la]] [[supermarket|supermercado]]?',
        options: ['[[is|está]]', '[[are|están]]', '[[be|ser/estar]]'],
        correctAnswer: '[[is|está]]',
        explanation: 'Where is the...? Para singular.',
      }],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a1-u12-l1-g4',
    type: 'fill-blank',
    level: 'A1',
    topic: TOPIC,
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_FILL,
      questions: [{
        question: '[[Is|¿Hay]] [[there|allí]] ____ [[a|una]] [[pharmacy|farmacia]] [[near|cerca]]?',
        options: ['[[a|una]]', '[[an|un/una]]', '[[the|la]]'],
        correctAnswer: '[[a|una]]',
        explanation: 'Is there a...? = ¿Hay una...?',
      }],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a1-u12-l1-g5',
    type: 'fill-blank',
    level: 'A1',
    topic: TOPIC,
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_FILL,
      questions: [{
        question: '[[The|La]] [[bank|banco]] ____ [[next to|al lado de]] [[the|la]] [[post office|correos]].',
        options: ['[[is|está]]', '[[are|están]]', '[[be|ser/estar]]'],
        correctAnswer: '[[is|está]]',
        explanation: 'The bank is next to... Singular.',
      }],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a1-u12-l1-g6',
    type: 'multiple-choice',
    level: 'A1',
    topic: TOPIC,
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_MC,
      questions: [{
        question: '[[There|Hay]] ____ [[a|un]] [[library|biblioteca]] [[in|en]] [[the|el]] [[centre|centro]].',
        options: ['[[is|(singular)]]', '[[are|(plural)]]', '[[be|(infinitivo)]]'],
        correctAnswer: 0,
        explanation: 'There is a library. Singular.',
      }],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a1-u12-l1-g7',
    type: 'multiple-choice',
    level: 'A1',
    topic: TOPIC,
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_MC,
      questions: [{
        question: '[[Where|Dónde]] ____ [[are|están]] [[the|los]] [[shops|tiendas]]?',
        options: ['[[is|está]]', '[[are|están]]', '[[be|ser/estar]]'],
        correctAnswer: 1,
        explanation: 'Where are the shops? Plural.',
      }],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a1-u12-l1-g8',
    type: 'multiple-choice',
    level: 'A1',
    topic: TOPIC,
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_MC,
      questions: [{
        question: '[[The|El]] [[café|café]] ____ [[between|entre]] [[the|la]] [[bank|banco]] [[and|y]] [[the|la]] [[pharmacy|farmacia]].',
        options: ['[[is|está]]', '[[are|están]]', '[[be|ser/estar]]'],
        correctAnswer: 0,
        explanation: 'The café is between... Singular.',
      }],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a1-u12-l1-g9',
    type: 'multiple-choice',
    level: 'A1',
    topic: TOPIC,
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_MC,
      questions: [{
        question: '[[There|Hay]] ____ [[three|tres]] [[cafés|cafés]] [[in|en]] [[this|esta]] [[street|calle]].',
        options: ['[[is|(singular)]]', '[[are|(plural)]]', '[[be|(infinitivo)]]'],
        correctAnswer: 1,
        explanation: 'There are three cafés. Plural.',
      }],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a1-u12-l1-g10',
    type: 'multiple-choice',
    level: 'A1',
    topic: TOPIC,
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_MC,
      questions: [{
        question: '[[Is|¿Hay]] [[there|allí]] [[a|un]] [[park|parque]]? [[Yes|Sí]], [[there|allí]] ____.',
        options: ['[[is|hay (singular)]]', '[[are|hay (plural)]]', '[[be|ser/estar]]'],
        correctAnswer: 0,
        explanation: 'Yes, there is. Respuesta corta.',
      }],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a1-u12-l1-g11',
    type: 'sentence-building',
    level: 'A1',
    topic: TOPIC,
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_ORDER,
      correctSentence: '[[There|Hay]] [[is|(singular)]] [[a|un]] [[supermarket|supermercado]] [[near|cerca]] [[here|aquí]].',
      words: ['[[There|Hay]]', '[[is|(singular)]]', '[[a|un]]', '[[supermarket|supermercado]]', '[[near|cerca]]', '[[here|aquí]].'],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a1-u12-l1-g12',
    type: 'sentence-building',
    level: 'A1',
    topic: TOPIC,
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_ORDER,
      correctSentence: '[[Where|Dónde]] [[is|está]] [[the|la]] [[post office|oficina de correos]]?',
      words: ['[[Where|Dónde]]', '[[is|está]]', '[[the|la]]', '[[post office|oficina de correos]]?'],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a1-u12-l1-g13',
    type: 'sentence-building',
    level: 'A1',
    topic: TOPIC,
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_ORDER,
      correctSentence: '[[The|La]] [[bank|banco]] [[is|está]] [[next to|al lado de]] [[the|la]] [[library|biblioteca]].',
      words: ['[[The|La]]', '[[bank|banco]]', '[[is|está]]', '[[next to|al lado de]]', '[[the|la]]', '[[library|biblioteca]].'],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a1-u12-l1-g14',
    type: 'true-false',
    level: 'A1',
    topic: TOPIC,
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_TF,
      questions: [{
        question: '[[We|Se]] [[use|usa]] "[[There is|Hay]]" [[for|para]] [[one|un]] [[thing|lugar]] [[(singular)|(singular)]]. [[We|Se]] [[use|usa]] "[[There are|Hay]]" [[for|para]] [[two or more|dos o más]].',
        correctAnswer: true,
        explanation: 'There is + singular, There are + plural.',
      }],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a1-u12-l1-g15',
    type: 'true-false',
    level: 'A1',
    topic: TOPIC,
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_TF,
      questions: [{
        question: '[[We|Se]] [[ask|pregunta]] "[[Where is the...?|¿Dónde está el/la...?]]" [[to|para]] [[find|saber]] [[the|la]] [[location|ubicación]] [[of|de]] [[a|un]] [[place|lugar]].',
        correctAnswer: true,
        explanation: 'Where is the bank? = ¿Dónde está el banco?',
      }],
    },
    topicName: 'Grammar',
  },
];
