/**
 * Unidad 20 — Lección 1: Gramática (Jobs & Work)
 * Present simple con trabajo (I work, he/she works), Where do you work?, profesiones.
 * 15 ejercicios: 5 fill-blank, 5 multiple-choice, 3 sentence-building, 2 true-false
 */

import { Exercise } from '@/lib/exercise-generator';

const LESSON_TITLE = 'Trabajo y profesiones: presente simple';
const TOPIC = 'Jobs & Work';

const INSTRUCTIONS_FILL = 'Completa la frase con la palabra correcta.';
const INSTRUCTIONS_MC = 'Elige la opción correcta.';
const INSTRUCTIONS_ORDER = 'Ordena las palabras para formar una oración correcta.';
const INSTRUCTIONS_TF = 'Indica si la afirmación es verdadera o falsa.';

export const UNIT_20_LESSON_1_GRAMMAR: Exercise[] = [
  {
    id: 'a1-u20-l1-g1',
    type: 'fill-blank',
    level: 'A1',
    topic: TOPIC,
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_FILL,
      questions: [{
        question: '[[I|Yo]] ____ [[in|en]] [[an|una]] [[office|oficina]].',
        options: ['[[work|trabajo]]', '[[works|trabaja]]', '[[working|trabajando]]'],
        correctAnswer: '[[work|trabajo]]',
        explanation: 'Con "I" usamos work (sin -s).',
      }],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a1-u20-l1-g2',
    type: 'fill-blank',
    level: 'A1',
    topic: TOPIC,
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_FILL,
      questions: [{
        question: '[[She|Ella]] ____ [[at|en]] [[a|un]] [[hospital|hospital]].',
        options: ['[[work|trabajar]]', '[[works|trabaja]]', '[[working|trabajando]]'],
        correctAnswer: '[[works|trabaja]]',
        explanation: 'Con she/he/it el verbo lleva -s: she works.',
      }],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a1-u20-l1-g3',
    type: 'fill-blank',
    level: 'A1',
    topic: TOPIC,
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_FILL,
      questions: [{
        question: '[[Where|Dónde]] ____ [[do|(auxiliar)]] [[you|tú]] [[work|trabajas]]?',
        options: ['[[do|(auxiliar)]]', '[[does|(auxiliar)]]', '[[are|estás]]'],
        correctAnswer: '[[do|(auxiliar)]]',
        explanation: 'Where do you work? Con "you" usamos do.',
      }],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a1-u20-l1-g4',
    type: 'fill-blank',
    level: 'A1',
    topic: TOPIC,
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_FILL,
      questions: [{
        question: '[[My|Mi]] [[father|padre]] ____ [[a|un]] [[teacher|profesor]].',
        options: ['[[is|es]]', '[[are|son]]', '[[am|soy]]'],
        correctAnswer: '[[is|es]]',
        explanation: 'My father = he, por tanto is (ser).',
      }],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a1-u20-l1-g5',
    type: 'fill-blank',
    level: 'A1',
    topic: TOPIC,
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_FILL,
      questions: [{
        question: '[[They|Ellos]] ____ [[in|en]] [[Madrid|Madrid]].',
        options: ['[[work|trabajan]]', '[[works|trabaja]]', '[[working|trabajando]]'],
        correctAnswer: '[[work|trabajan]]',
        explanation: 'Con they/we/you no añadimos -s.',
      }],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a1-u20-l1-g6',
    type: 'multiple-choice',
    level: 'A1',
    topic: TOPIC,
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_MC,
      questions: [{
        question: '[[He|Él]] ____ [[in|en]] [[a|un]] [[school|colegio]].',
        options: ['[[work|trabajar]]', '[[works|trabaja]]', '[[working|trabajando]]'],
        correctAnswer: 1,
        explanation: 'He works. Tercera persona añade -s.',
      }],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a1-u20-l1-g7',
    type: 'multiple-choice',
    level: 'A1',
    topic: TOPIC,
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_MC,
      questions: [{
        question: '[[What|Qué]] ____ [[do|(auxiliar)]] [[you|tú]] [[do|haces]]? [[I|Yo]] [[am|soy]] [[a|un]] [[nurse|enfermero/a]].',
        options: ['[[do|(auxiliar)]]', '[[does|(auxiliar)]]', '[[are|eres]]'],
        correctAnswer: 0,
        explanation: 'What do you do? = ¿A qué te dedicas?',
      }],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a1-u20-l1-g8',
    type: 'multiple-choice',
    level: 'A1',
    topic: TOPIC,
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_MC,
      questions: [{
        question: '[[Where|Dónde]] ____ [[does|(auxiliar)]] [[she|ella]] [[work|trabaja]]?',
        options: ['[[do|(auxiliar)]]', '[[does|(auxiliar)]]', '[[is|es]]'],
        correctAnswer: 1,
        explanation: 'Where does she work? Con she usamos does.',
      }],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a1-u20-l1-g9',
    type: 'multiple-choice',
    level: 'A1',
    topic: TOPIC,
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_MC,
      questions: [{
        question: '[[We|Nosotros]] ____ [[doctors|médicos]].',
        options: ['[[is|es]]', '[[are|somos]]', '[[am|soy]]'],
        correctAnswer: 1,
        explanation: 'We are doctors. Con "we" usamos are.',
      }],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a1-u20-l1-g10',
    type: 'multiple-choice',
    level: 'A1',
    topic: TOPIC,
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_MC,
      questions: [{
        question: '[[Maria|María]] ____ [[a|una]] [[chef|cocinera]].',
        options: ['[[is|es]]', '[[are|son]]', '[[am|soy]]'],
        correctAnswer: 0,
        explanation: 'Maria = she, por tanto is.',
      }],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a1-u20-l1-g11',
    type: 'sentence-building',
    level: 'A1',
    topic: TOPIC,
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_ORDER,
      correctSentence: '[[I|Yo]] [[work|trabajo]] [[in|en]] [[an|una]] [[office|oficina]].',
      words: ['[[I|Yo]]', '[[work|trabajo]]', '[[in|en]]', '[[an|una]]', '[[office|oficina]].'],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a1-u20-l1-g12',
    type: 'sentence-building',
    level: 'A1',
    topic: TOPIC,
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_ORDER,
      correctSentence: '[[Where|Dónde]] [[do|(auxiliar)]] [[you|tú]] [[work|trabajas]]?',
      words: ['[[Where|Dónde]]', '[[do|(auxiliar)]]', '[[you|tú]]', '[[work|trabajas]]?'],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a1-u20-l1-g13',
    type: 'sentence-building',
    level: 'A1',
    topic: TOPIC,
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_ORDER,
      correctSentence: '[[She|Ella]] [[is|es]] [[a|una]] [[teacher|profesora]].',
      words: ['[[She|Ella]]', '[[is|es]]', '[[a|una]]', '[[teacher|profesora]].'],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a1-u20-l1-g14',
    type: 'true-false',
    level: 'A1',
    topic: TOPIC,
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_TF,
      questions: [{
        question: '[[With|Con]] [[he/she/it|he/she/it]] [[we|se]] [[add|añade]] [[-s| -s]] [[to|al]] [[the|el]] [[verb|verbo]] [[(he works)|(he works)]].',
        correctAnswer: true,
        explanation: 'Sí. He works, she works.',
      }],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a1-u20-l1-g15',
    type: 'true-false',
    level: 'A1',
    topic: TOPIC,
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_TF,
      questions: [{
        question: '[[We|Se]] [[say|dice]] "[[What do you do?|¿A qué te dedicas?]]" [[to|para]] [[ask|preguntar]] [[about|sobre]] [[someone\'s|la]] [[job|profesión]].',
        correctAnswer: true,
        explanation: 'What do you do? = ¿A qué te dedicas?',
      }],
    },
    topicName: 'Grammar',
  },
];
