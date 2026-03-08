/**
 * Unidad 14 — Lección 1: Gramática (Present Simple: I, You, We, They)
 * Negativa don't; preguntas Do you/we/they…?; Yes, I do / No, I don't.
 * 15 ejercicios: 5 fill-blank, 5 multiple-choice, 3 sentence-building, 2 true-false
 */

import { Exercise } from '@/lib/exercise-generator';

const LESSON_TITLE = 'Presente simple: negativa y preguntas (I, you, we, they)';
const TOPIC = 'Present Simple: I, You, We, They';

const INSTRUCTIONS_FILL = 'Completa la frase con la palabra correcta.';
const INSTRUCTIONS_MC = 'Elige la opción correcta.';
const INSTRUCTIONS_ORDER = 'Ordena las palabras para formar una oración correcta.';
const INSTRUCTIONS_TF = 'Indica si la afirmación es verdadera o falsa.';

export const UNIT_14_LESSON_1_GRAMMAR: Exercise[] = [
  {
    id: 'a1-u14-l1-g1',
    type: 'fill-blank',
    level: 'A1',
    topic: TOPIC,
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_FILL,
      questions: [{
        question: '[[I|Yo]] ____ [[like|me gusta]] [[coffee|café]]. [[I|Yo]] [[prefer|prefiero]] [[tea|té]].',
        options: ['[[don\'t|no]]', '[[doesn\'t|no]]', '[[not|no]]'],
        correctAnswer: '[[don\'t|no]]',
        explanation: 'Con I/you/we/they usamos don\'t para la negativa.',
      }],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a1-u14-l1-g2',
    type: 'fill-blank',
    level: 'A1',
    topic: TOPIC,
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_FILL,
      questions: [{
        question: '[[We|Nosotros]] ____ [[watch|vemos]] [[TV|la tele]] [[in|por]] [[the|la]] [[morning|mañana]].',
        options: ['[[don\'t|no]]', '[[doesn\'t|no]]', '[[aren\'t|no]]'],
        correctAnswer: '[[don\'t|no]]',
        explanation: 'We don\'t watch. Don\'t + verbo en infinitivo.',
      }],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a1-u14-l1-g3',
    type: 'fill-blank',
    level: 'A1',
    topic: TOPIC,
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_FILL,
      questions: [{
        question: '[[Do|¿]] ____ [[you|tú]] [[play|juegas]] [[football|fútbol]]?',
        options: ['[[do|(auxiliar)]]', '[[does|(auxiliar)]]', '[[are|eres]]'],
        correctAnswer: '[[do|(auxiliar)]]',
        explanation: 'Do you play...? Con "you" usamos do.',
      }],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a1-u14-l1-g4',
    type: 'fill-blank',
    level: 'A1',
    topic: TOPIC,
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_FILL,
      questions: [{
        question: '[[Do|¿]] [[you|tú]] [[cook|cocinas]]? [[Yes|Sí]], [[I|yo]] ____.',
        options: ['[[do|(sí)]]', '[[don\'t|no]]', '[[does|(auxiliar)]]'],
        correctAnswer: '[[do|(sí)]]',
        explanation: 'Yes, I do. Respuesta corta afirmativa.',
      }],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a1-u14-l1-g5',
    type: 'fill-blank',
    level: 'A1',
    topic: TOPIC,
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_FILL,
      questions: [{
        question: '[[They|Ellos]] ____ [[eat|comen]] [[meat|carne]]. [[They|Ellos]] [[are|son]] [[vegetarian|vegetarianos]].',
        options: ['[[don\'t|no]]', '[[doesn\'t|no]]', '[[not|no]]'],
        correctAnswer: '[[don\'t|no]]',
        explanation: 'They don\'t eat. Con they usamos don\'t.',
      }],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a1-u14-l1-g6',
    type: 'multiple-choice',
    level: 'A1',
    topic: TOPIC,
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_MC,
      questions: [{
        question: '[[Do|¿]] [[you|tú]] ____ [[housework|tareas domésticas]]? [[No|No]], [[I|yo]] [[don\'t|no]].',
        options: ['[[do|(haces)]]', '[[does|(hace)]]', '[[doing|haciendo]]'],
        correctAnswer: 0,
        explanation: 'Do you do housework? El primer "do" es auxiliar, el segundo es verbo.',
      }],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a1-u14-l1-g7',
    type: 'multiple-choice',
    level: 'A1',
    topic: TOPIC,
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_MC,
      questions: [{
        question: '[[We|Nosotros]] ____ [[read|leemos]] [[books|libros]] [[every|cada]] [[day|día]].',
        options: ['[[don\'t|no]]', '[[doesn\'t|no]]', '[[not|no]]'],
        correctAnswer: 0,
        explanation: 'We don\'t read. Don\'t para we.',
      }],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a1-u14-l1-g8',
    type: 'multiple-choice',
    level: 'A1',
    topic: TOPIC,
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_MC,
      questions: [{
        question: '[[Do|¿]] ____ [[they|ellos]] [[like|les gusta]] [[music|música]]? [[Yes|Sí]], [[they|ellos]] [[do|sí]].',
        options: ['[[do|(auxiliar)]]', '[[does|(auxiliar)]]', '[[are|son]]'],
        correctAnswer: 0,
        explanation: 'Do they like...? Con they usamos do.',
      }],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a1-u14-l1-g9',
    type: 'multiple-choice',
    level: 'A1',
    topic: TOPIC,
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_MC,
      questions: [{
        question: '[[Do|¿]] [[you|tú]] [[speak|hablas]] [[English|inglés]]? [[No|No]], [[I|yo]] ____.',
        options: ['[[do|sí]]', '[[don\'t|no]]', '[[doesn\'t|no]]'],
        correctAnswer: 1,
        explanation: 'No, I don\'t. Respuesta corta negativa.',
      }],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a1-u14-l1-g10',
    type: 'multiple-choice',
    level: 'A1',
    topic: TOPIC,
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_MC,
      questions: [{
        question: '[[I|Yo]] ____ [[drink|bebo]] [[alcohol|alcohol]].',
        options: ['[[don\'t|no]]', '[[doesn\'t|no]]', '[[am not|no estoy]]'],
        correctAnswer: 0,
        explanation: 'I don\'t drink. Con I usamos don\'t.',
      }],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a1-u14-l1-g11',
    type: 'sentence-building',
    level: 'A1',
    topic: TOPIC,
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_ORDER,
      correctSentence: '[[I|Yo]] [[don\'t|no]] [[like|me gusta]] [[getting up early|levantarme temprano]].',
      words: ['[[I|Yo]]', '[[don\'t|no]]', '[[like|me gusta]]', '[[getting up early|levantarme temprano]].'],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a1-u14-l1-g12',
    type: 'sentence-building',
    level: 'A1',
    topic: TOPIC,
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_ORDER,
      correctSentence: '[[Do|¿]] [[you|tú]] [[play|juegas]] [[tennis|tenis]]?',
      words: ['[[Do|¿]]', '[[you|tú]]', '[[play|juegas]]', '[[tennis|tenis]]?'],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a1-u14-l1-g13',
    type: 'sentence-building',
    level: 'A1',
    topic: TOPIC,
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_ORDER,
      correctSentence: '[[No|No]], [[we|nosotros]] [[don\'t|no]] [[watch|vemos]] [[TV|la tele]].',
      words: ['[[No|No]]', '[[we|nosotros]]', '[[don\'t|no]]', '[[watch|vemos]]', '[[TV|la tele]].'],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a1-u14-l1-g14',
    type: 'true-false',
    level: 'A1',
    topic: TOPIC,
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_TF,
      questions: [{
        question: '[[With|Con]] [[I|I]], [[you|you]], [[we|we]], [[they|they]] [[we|se]] [[use|usa]] "[[don\'t|don\'t]]" [[for|para]] [[the|la]] [[negative|negativa]].',
        correctAnswer: true,
        explanation: 'I/you/we/they + don\'t + verbo.',
      }],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a1-u14-l1-g15',
    type: 'true-false',
    level: 'A1',
    topic: TOPIC,
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_TF,
      questions: [{
        question: '[[To|Para]] [[ask|preguntar]] [[about|sobre]] [[habits|hábitos]] [[we|se]] [[say|dice]] "[[Do you...?|¿Tú...?]]" [[and|y]] [[answer|respondemos]] "[[Yes, I do|Sí]]" [[or|o]] "[[No, I don\'t|No]]".',
        correctAnswer: true,
        explanation: 'Do you play? Yes, I do. / No, I don\'t.',
      }],
    },
    topicName: 'Grammar',
  },
];
