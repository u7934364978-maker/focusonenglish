/**
 * Unidad 12 — Lección 2: Vocabulario (Places in Town)
 * bank, park, supermarket, library, post office, pharmacy, café, street, next to, opposite.
 * 15 ejercicios: 6 multiple-choice, 4 matching, 3 fill-blank, 2 contexto
 */

import { Exercise } from '@/lib/exercise-generator';

const LESSON_TITLE = 'Vocabulario: lugares en la ciudad';
const TOPIC = 'Places in Town';

const INSTRUCTIONS_MC = 'Elige la palabra correcta.';
const INSTRUCTIONS_MATCH = 'Relaciona el lugar con su descripción o traducción.';
const INSTRUCTIONS_FILL = 'Completa la frase con la palabra correcta.';
const INSTRUCTIONS_CTX = 'Elige la opción correcta para la situación.';

export const UNIT_12_LESSON_2_VOCABULARY: Exercise[] = [
  {
    id: 'a1-u12-l2-v1',
    type: 'multiple-choice',
    level: 'A1',
    topic: TOPIC,
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_MC,
      questions: [{
        question: '[[You|Tú]] [[go|vas]] [[to|a]] ____ [[to|para]] [[get|sacar]] [[money|dinero]] [[or|o]] [[pay|pagar]] [[bills|facturas]].',
        options: ['[[the bank|el banco]]', '[[the park|el parque]]', '[[the library|la biblioteca]]'],
        correctAnswer: 0,
        explanation: 'Bank = banco.',
      }],
    },
    topicName: 'Vocabulary',
  },
  {
    id: 'a1-u12-l2-v2',
    type: 'multiple-choice',
    level: 'A1',
    topic: TOPIC,
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_MC,
      questions: [{
        question: '[[You|Tú]] [[buy|compras]] [[food|comida]] [[and|y]] [[drinks|bebidas]] [[at|en]] ____.',
        options: ['[[the post office|correos]]', '[[the supermarket|el supermercado]]', '[[the pharmacy|la farmacia]]'],
        correctAnswer: 1,
        explanation: 'Supermarket = supermercado.',
      }],
    },
    topicName: 'Vocabulary',
  },
  {
    id: 'a1-u12-l2-v3',
    type: 'multiple-choice',
    level: 'A1',
    topic: TOPIC,
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_MC,
      questions: [{
        question: '[[You|Tú]] [[read|lees]] [[books|libros]] [[and|y]] [[study|estudias]] [[in|en]] ____.',
        options: ['[[the café|el café]]', '[[the library|la biblioteca]]', '[[the bank|el banco]]'],
        correctAnswer: 1,
        explanation: 'Library = biblioteca.',
      }],
    },
    topicName: 'Vocabulary',
  },
  {
    id: 'a1-u12-l2-v4',
    type: 'multiple-choice',
    level: 'A1',
    topic: TOPIC,
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_MC,
      questions: [{
        question: '[[You|Tú]] [[send|envías]] [[letters|cartas]] [[and|y]] [[buy|compras]] [[stamps|sellos]] [[at|en]] ____.',
        options: ['[[the post office|la oficina de correos]]', '[[the park|el parque]]', '[[the pharmacy|la farmacia]]'],
        correctAnswer: 0,
        explanation: 'Post office = oficina de correos.',
      }],
    },
    topicName: 'Vocabulary',
  },
  {
    id: 'a1-u12-l2-v5',
    type: 'multiple-choice',
    level: 'A1',
    topic: TOPIC,
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_MC,
      questions: [{
        question: '[[You|Tú]] [[buy|compras]] [[medicine|medicinas]] [[at|en]] ____.',
        options: ['[[the café|el café]]', '[[the pharmacy|la farmacia]]', '[[the bank|el banco]]'],
        correctAnswer: 1,
        explanation: 'Pharmacy = farmacia.',
      }],
    },
    topicName: 'Vocabulary',
  },
  {
    id: 'a1-u12-l2-v6',
    type: 'multiple-choice',
    level: 'A1',
    topic: TOPIC,
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_MC,
      questions: [{
        question: '[[The|El]] ____ [[is|está]] [[opposite|enfrente de]] [[the|la]] [[bank|banco]]. [[You|Puedes]] [[walk|caminar]] [[there|allí]] [[in|en]] [[one|un]] [[minute|minuto]].',
        options: ['[[street|calle]]', '[[park|parque]]', '[[supermarket|supermercado]]'],
        correctAnswer: 0,
        explanation: 'Opposite = enfrente de.',
      }],
    },
    topicName: 'Vocabulary',
  },
  {
    id: 'a1-u12-l2-v7',
    type: 'matching',
    level: 'A1',
    topic: TOPIC,
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: 'Relaciona el lugar con su traducción.',
      pairs: [
        { id: 'p1', left: '[[bank|banco]]', right: 'Banco' },
        { id: 'p2', left: '[[supermarket|supermercado]]', right: 'Supermercado' },
        { id: 'p3', left: '[[library|biblioteca]]', right: 'Biblioteca' },
        { id: 'p4', left: '[[post office|oficina de correos]]', right: 'Oficina de correos' },
        { id: 'p5', left: '[[pharmacy|farmacia]]', right: 'Farmacia' },
      ],
    },
    topicName: 'Vocabulary',
  },
  {
    id: 'a1-u12-l2-v8',
    type: 'matching',
    level: 'A1',
    topic: TOPIC,
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: 'Relaciona la preposición de lugar con su significado.',
      pairs: [
        { id: 'p1', left: '[[next to|al lado de]]', right: 'Al lado de' },
        { id: 'p2', left: '[[opposite|enfrente de]]', right: 'Enfrente de' },
        { id: 'p3', left: '[[between|entre]]', right: 'Entre' },
        { id: 'p4', left: '[[near|cerca de]]', right: 'Cerca de' },
        { id: 'p5', left: '[[in front of|delante de]]', right: 'Delante de' },
      ],
    },
    topicName: 'Vocabulary',
  },
  {
    id: 'a1-u12-l2-v9',
    type: 'matching',
    level: 'A1',
    topic: TOPIC,
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_MATCH,
      pairs: [
        { id: 'p1', left: '[[park|parque]]', right: '[[trees and grass|árboles y césped]]' },
        { id: 'p2', left: '[[café|café]]', right: '[[coffee and snacks|café y tentempiés]]' },
        { id: 'p3', left: '[[library|biblioteca]]', right: '[[books|libros]]' },
        { id: 'p4', left: '[[pharmacy|farmacia]]', right: '[[medicine|medicinas]]' },
        { id: 'p5', left: '[[bank|banco]]', right: '[[money|dinero]]' },
      ],
    },
    topicName: 'Vocabulary',
  },
  {
    id: 'a1-u12-l2-v10',
    type: 'matching',
    level: 'A1',
    topic: TOPIC,
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: 'Relaciona la pregunta con su respuesta.',
      pairs: [
        { id: 'p1', left: '[[Where is the bank?|¿Dónde está el banco?]]', right: 'Next to the library.' },
        { id: 'p2', left: '[[Is there a supermarket?|¿Hay un supermercado?]]', right: 'Yes, there is.' },
        { id: 'p3', left: '[[Where are the shops?|¿Dónde están las tiendas?]]', right: 'In the centre.' },
        { id: 'p4', left: '[[Is there a park?|¿Hay un parque?]]', right: 'Yes, there is a big park.' },
        { id: 'p5', left: '[[Where is the post office?|¿Dónde está correos?]]', right: 'Opposite the bank.' },
      ],
    },
    topicName: 'Vocabulary',
  },
  {
    id: 'a1-u12-l2-v11',
    type: 'fill-blank',
    level: 'A1',
    topic: TOPIC,
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_FILL,
      questions: [{
        question: '[[There|Hay]] [[is|(singular)]] ____ [[supermarket|supermercado]] [[in|en]] [[my|mi]] [[street|calle]].',
        options: ['[[a|un]]', '[[an|un/una]]', '[[the|el]]'],
        correctAnswer: 'a',
        acceptableAnswers: ['a'],
        explanation: 'There is a supermarket.',
      }],
    },
    topicName: 'Vocabulary',
  },
  {
    id: 'a1-u12-l2-v12',
    type: 'fill-blank',
    level: 'A1',
    topic: TOPIC,
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_FILL,
      questions: [{
        question: '[[The|La]] [[library|biblioteca]] ____ [[next to|al lado de]] [[the|la]] [[school|colegio]].',
        options: ['[[is|está]]', '[[are|están]]', '[[be|ser/estar]]'],
        correctAnswer: 'is',
        acceptableAnswers: ['is'],
        explanation: 'The library is next to...',
      }],
    },
    topicName: 'Vocabulary',
  },
  {
    id: 'a1-u12-l2-v13',
    type: 'fill-blank',
    level: 'A1',
    topic: TOPIC,
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_FILL,
      questions: [{
        question: '[[Where|Dónde]] ____ [[the|la]] [[pharmacy|farmacia]]? [[It|Está]] [[is|está]] [[opposite|enfrente de]] [[the|la]] [[bank|banco]].',
        options: ['[[is|está]]', '[[are|están]]', '[[be|ser/estar]]'],
        correctAnswer: 'is',
        acceptableAnswers: ['is'],
        explanation: 'Where is the pharmacy?',
      }],
    },
    topicName: 'Vocabulary',
  },
  {
    id: 'a1-u12-l2-v14',
    type: 'multiple-choice',
    level: 'A1',
    topic: TOPIC,
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_CTX,
      questions: [{
        question: '[[Someone|Alguien]] [[asks|pregunta]] "[[Where is the post office?|¿Dónde está correos?]]". [[You|Tú]] [[know|sabes]] [[it|que]] [[is|está]] [[next to|al lado de]] [[the|la]] [[bank|banco]]. [[You|Tú]] [[say|dices]]: ____.',
        options: ['[[It is next to the bank.|Está al lado del banco.]]', '[[I don\'t know.|No lo sé.]]', '[[There is a bank.|Hay un banco.]]'],
        correctAnswer: 0,
        explanation: 'It is next to the bank.',
      }],
    },
    topicName: 'Vocabulary',
  },
  {
    id: 'a1-u12-l2-v15',
    type: 'multiple-choice',
    level: 'A1',
    topic: TOPIC,
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_CTX,
      questions: [{
        question: '[[You|Tú]] [[want|quieres]] [[to|preguntar]] [[ask|si]] [[there is|hay]] [[a|una]] [[pharmacy|farmacia]] [[near|cerca]]. [[You|Tú]] ____.',
        options: ['[[say|dices]] "[[Where is the pharmacy?|¿Dónde está la farmacia?]]"', '[[say|dices]] "[[Is there a pharmacy near here?|¿Hay una farmacia cerca?]]"', '[[say|dices]] "[[There is a pharmacy.|Hay una farmacia.]]"'],
        correctAnswer: 1,
        explanation: 'Is there a pharmacy near here?',
      }],
    },
    topicName: 'Vocabulary',
  },
];
