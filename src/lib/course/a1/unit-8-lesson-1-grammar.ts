/**
 * Unidad 8 — Lección 1: Gramática (Numbers 20–100, How old, How much)
 * How old are you? How much is…? Números 20–100 en contexto.
 * 15 ejercicios: 5 fill-blank, 5 multiple-choice, 3 sentence-building, 2 true-false
 */

import { Exercise } from '@/lib/exercise-generator';

const LESSON_TITLE = 'Números 20-100: edad y precio';
const TOPIC = 'Numbers 20–100 (Prices & Ages)';

const INSTRUCTIONS_FILL = 'Completa la frase con la palabra o número correcto.';
const INSTRUCTIONS_MC = 'Elige la opción correcta.';
const INSTRUCTIONS_ORDER = 'Ordena las palabras para formar una oración correcta.';
const INSTRUCTIONS_TF = 'Indica si la afirmación es verdadera o falsa.';

export const UNIT_8_LESSON_1_GRAMMAR: Exercise[] = [
  // ─── 1–5: fill-blank (How old, How much, números) ────────────────────────
  {
    id: 'a1-u8-l1-g1',
    type: 'fill-blank',
    level: 'A1',
    topic: TOPIC,
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_FILL,
      questions: [{
        question: '[[How|Cuántos]] ____ [[are|tienes]] [[you|tú]]?',
        options: ['[[old|años]]', '[[much|cuánto]]', '[[many|cuántos]]'],
        correctAnswer: '[[old|años]]',
        explanation: 'How old are you? = ¿Cuántos años tienes?',
      }],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a1-u8-l1-g2',
    type: 'fill-blank',
    level: 'A1',
    topic: TOPIC,
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_FILL,
      questions: [{
        question: '[[How|Cuánto]] ____ [[is|es]] [[the|el]] [[coffee|café]]?',
        options: ['[[old|años]]', '[[much|cuesta]]', '[[many|cuántos]]'],
        correctAnswer: '[[much|cuesta]]',
        explanation: 'How much is…? = ¿Cuánto cuesta…?',
      }],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a1-u8-l1-g3',
    type: 'fill-blank',
    level: 'A1',
    topic: TOPIC,
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_FILL,
      questions: [{
        question: '[[I|Yo]] [[am|tengo]] ____ [[years|años]] [[old|de edad]].',
        options: ['[[twenty-five|veinticinco]]', '[[twenty|veinte]]', '[[five|cinco]]'],
        correctAnswer: '[[twenty-five|veinticinco]]',
        explanation: 'I am [number] years old.',
      }],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a1-u8-l1-g4',
    type: 'fill-blank',
    level: 'A1',
    topic: TOPIC,
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_FILL,
      questions: [{
        question: '[[The|El]] [[book|libro]] ____ [[forty-five|cuarenta y cinco]] [[euros|euros]].',
        options: ['[[is|cuesta]]', '[[are|cuestan]]', '[[am|soy]]'],
        correctAnswer: '[[is|cuesta]]',
        explanation: 'Singular: The book is [price].',
      }],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a1-u8-l1-g5',
    type: 'fill-blank',
    level: 'A1',
    topic: TOPIC,
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_FILL,
      questions: [{
        question: '[[How|Cuántos]] [[old|años]] ____ [[is|tiene]] [[she|ella]]?',
        options: ['[[are|tienen]]', '[[is|tiene]]', '[[am|tengo]]'],
        correctAnswer: '[[is|tiene]]',
        explanation: 'How old is she? Con she usamos is.',
      }],
    },
    topicName: 'Grammar',
  },

  // ─── 6–10: multiple-choice ───────────────────────────────────────────────
  {
    id: 'a1-u8-l1-g6',
    type: 'multiple-choice',
    level: 'A1',
    topic: TOPIC,
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_MC,
      questions: [{
        question: '[[Which|Cuál]] [[question|pregunta]] [[do|se]] [[we|usa]] [[use|usamos]] [[for|para]] [[age|edad]]?',
        options: ['[[How much is it?|¿Cuánto cuesta?]]', '[[How old are you?|¿Cuántos años tienes?]]', '[[How many?|¿Cuántos?]]'],
        correctAnswer: 1,
        explanation: 'How old are you? para preguntar edad.',
      }],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a1-u8-l1-g7',
    type: 'multiple-choice',
    level: 'A1',
    topic: TOPIC,
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_MC,
      questions: [{
        question: '[[Which|Cuál]] [[question|pregunta]] [[do|se]] [[we|usa]] [[use|usamos]] [[for|para]] [[price|precio]]?',
        options: ['[[How old are you?|¿Cuántos años tienes?]]', '[[How much is it?|¿Cuánto cuesta?]]', '[[Where is it?|¿Dónde está?]]'],
        correctAnswer: 1,
        explanation: 'How much is it? para preguntar precio.',
      }],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a1-u8-l1-g8',
    type: 'multiple-choice',
    level: 'A1',
    topic: TOPIC,
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_MC,
      questions: [{
        question: '[[My|Mi]] [[sister|hermana]] ____ 30 [[years|años]] [[old|de edad]].',
        options: ['[[has|tiene]]', '[[is|tiene (es)]]', '[[have|tienen]]'],
        correctAnswer: 1,
        explanation: 'En inglés: She is 30 years old (to be para edad).',
      }],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a1-u8-l1-g9',
    type: 'multiple-choice',
    level: 'A1',
    topic: TOPIC,
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_MC,
      questions: [{
        question: '[[These|Estos]] [[shoes|zapatos]] ____ £50.',
        options: ['[[is|es]]', '[[are|cuestan]]', '[[am|soy]]'],
        correctAnswer: 1,
        explanation: 'Plural: These shoes are £50.',
      }],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a1-u8-l1-g10',
    type: 'multiple-choice',
    level: 'A1',
    topic: TOPIC,
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_MC,
      questions: [{
        question: '[[100|100]] = ____.',
        options: ['[[one hundred|cien]]', '[[ten|diez]]', '[[one thousand|mil]]'],
        correctAnswer: 0,
        explanation: '100 = one hundred.',
      }],
    },
    topicName: 'Grammar',
  },

  // ─── 11–13: sentence-building ────────────────────────────────────────────
  {
    id: 'a1-u8-l1-g11',
    type: 'sentence-building',
    level: 'A1',
    topic: TOPIC,
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_ORDER,
      correctSentence: '[[How|Cuántos]] [[old|años]] [[are|tienes]] [[you|tú]]?',
      words: ['[[How|Cuántos]]', '[[old|años]]', '[[are|tienes]]', '[[you|tú]]?'],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a1-u8-l1-g12',
    type: 'sentence-building',
    level: 'A1',
    topic: TOPIC,
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_ORDER,
      correctSentence: '[[I|Yo]] [[am|tengo]] [[twenty-eight|veintiocho]] [[years|años]] [[old|de edad]].',
      words: ['[[I|Yo]]', '[[am|tengo]]', '[[twenty-eight|veintiocho]]', '[[years|años]]', '[[old|de edad]].'],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a1-u8-l1-g13',
    type: 'sentence-building',
    level: 'A1',
    topic: TOPIC,
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_ORDER,
      correctSentence: '[[How|Cuánto]] [[much|cuesta]] [[is|es]] [[this|este]] [[book|libro]]?',
      words: ['[[How|Cuánto]]', '[[much|cuesta]]', '[[is|es]]', '[[this|este]]', '[[book|libro]]?'],
    },
    topicName: 'Grammar',
  },

  // ─── 14–15: true-false ───────────────────────────────────────────────────
  {
    id: 'a1-u8-l1-g14',
    type: 'true-false',
    level: 'A1',
    topic: TOPIC,
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_TF,
      questions: [{
        question: '[[We|Se]] [[use|usa]] "[[How old|Cuántos años]]" [[to|para]] [[ask|preguntar]] [[about|sobre]] [[age|edad]] [[in|en]] [[English|inglés]].',
        correctAnswer: true,
        explanation: 'Sí. How old are you?',
      }],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a1-u8-l1-g15',
    type: 'true-false',
    level: 'A1',
    topic: TOPIC,
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_TF,
      questions: [{
        question: '[[We|Se]] [[use|usa]] "[[How much|Cuánto]]" [[to|para]] [[ask|preguntar]] [[the|el]] [[price|precio]] [[of|de]] [[something|algo]].',
        correctAnswer: true,
        explanation: 'Sí. How much is it?',
      }],
    },
    topicName: 'Grammar',
  },
];
