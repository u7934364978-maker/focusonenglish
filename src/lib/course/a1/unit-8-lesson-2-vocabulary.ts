/**
 * Unidad 8 — Lección 2: Vocabulario (números 20–100, precios, dinero, teléfono)
 * 15 ejercicios: 6 multiple-choice, 4 matching, 3 fill-blank, 2 multiple-choice contexto
 */

import { Exercise } from '@/lib/exercise-generator';

const LESSON_TITLE = 'Vocabulario: números, precios y edad';
const TOPIC = 'Numbers 20–100 (Prices & Ages)';

const INSTRUCTIONS_MC = 'Elige la palabra o número correcto.';
const INSTRUCTIONS_MATCH = 'Relaciona cada número o expresión con su significado.';
const INSTRUCTIONS_FILL = 'Completa la frase con la palabra correcta.';
const INSTRUCTIONS_CTX = 'Elige la opción correcta para la situación.';

export const UNIT_8_LESSON_2_VOCABULARY: Exercise[] = [
  // ─── 1–6: multiple-choice (números, precios) ──────────────────────────────
  {
    id: 'a1-u8-l2-v1',
    type: 'multiple-choice',
    level: 'A1',
    topic: TOPIC,
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_MC,
      questions: [{
        question: '[[Forty|Cuarenta]] = (____).',
        options: ['14', '40', '44'],
        correctAnswer: 1,
        explanation: 'Forty = 40.',
      }],
    },
    topicName: 'Vocabulary',
  },
  {
    id: 'a1-u8-l2-v2',
    type: 'multiple-choice',
    level: 'A1',
    topic: TOPIC,
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_MC,
      questions: [{
        question: '[[Eighty|Ochenta]] = (____).',
        options: ['[[eighteen|dieciocho]]', '[[eighty|ochenta]]', '[[eight|ocho]]'],
        correctAnswer: 1,
        explanation: '80 = eighty.',
      }],
    },
    topicName: 'Vocabulary',
  },
  {
    id: 'a1-u8-l2-v3',
    type: 'multiple-choice',
    level: 'A1',
    topic: TOPIC,
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_MC,
      questions: [{
        question: '[[What|Cuál]] [[symbol|símbolo]] [[is|es]] [[for|para]] [[dollars|dólares]]?',
        options: ['[[£|libras]]', '[[$|dólares]]', '[[€|euros]]'],
        correctAnswer: 1,
        explanation: '$ = dollars.',
      }],
    },
    topicName: 'Vocabulary',
  },
  {
    id: 'a1-u8-l2-v4',
    type: 'multiple-choice',
    level: 'A1',
    topic: TOPIC,
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_MC,
      questions: [{
        question: '[[What|Cuál]] [[word|palabra]] [[means|significa]] [[barato|cheap]] [[in|en]] [[English|inglés]]?',
        options: ['[[expensive|caro]]', '[[cheap|barato]]', '[[small|pequeño]]'],
        correctAnswer: 1,
        explanation: 'Cheap = barato.',
      }],
    },
    topicName: 'Vocabulary',
  },
  {
    id: 'a1-u8-l2-v5',
    type: 'multiple-choice',
    level: 'A1',
    topic: TOPIC,
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_MC,
      questions: [{
        question: '[[How|Cómo]] [[do|se]] [[you|dices]] [[say|decir]] [[90|90]] [[in|en]] [[English|inglés]]?',
        options: ['[[nineteen|diecinueve]]', '[[ninety|noventa]]', '[[nine|nueve]]'],
        correctAnswer: 1,
        explanation: '90 = ninety.',
      }],
    },
    topicName: 'Vocabulary',
  },
  {
    id: 'a1-u8-l2-v6',
    type: 'multiple-choice',
    level: 'A1',
    topic: TOPIC,
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_MC,
      questions: [{
        question: '[[The|La]] [[opposite|opuesto]] [[of|de]] [[cheap|barato]] [[is|es]] ____.',
        options: ['[[expensive|caro]]', '[[small|pequeño]]', '[[old|viejo]]'],
        correctAnswer: 0,
        explanation: 'Expensive = caro.',
      }],
    },
    topicName: 'Vocabulary',
  },

  // ─── 7–10: matching ──────────────────────────────────────────────────────
  {
    id: 'a1-u8-l2-v7',
    type: 'matching',
    level: 'A1',
    topic: TOPIC,
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_MATCH,
      pairs: [
        { id: 'p1', left: '[[twenty|veinte]]', right: '20' },
        { id: 'p2', left: '[[fifty|cincuenta]]', right: '50' },
        { id: 'p3', left: '[[seventy|setenta]]', right: '70' },
        { id: 'p4', left: '[[one hundred|cien]]', right: '100' },
        { id: 'p5', left: '[[thirty|treinta]]', right: '30' },
      ],
    },
    topicName: 'Vocabulary',
  },
  {
    id: 'a1-u8-l2-v8',
    type: 'matching',
    level: 'A1',
    topic: TOPIC,
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_MATCH,
      pairs: [
        { id: 'p1', left: '[[How old are you?|¿Cuántos años tienes?]]', right: 'Pregunta por edad' },
        { id: 'p2', left: '[[How much is it?|¿Cuánto cuesta?]]', right: 'Pregunta por precio' },
        { id: 'p3', left: '[[years old|años de edad]]', right: 'Expresión para edad' },
        { id: 'p4', left: '[[expensive|caro]]', right: 'Precio alto' },
        { id: 'p5', left: '[[cheap|barato]]', right: 'Precio bajo' },
      ],
    },
    topicName: 'Vocabulary',
  },
  {
    id: 'a1-u8-l2-v9',
    type: 'matching',
    level: 'A1',
    topic: TOPIC,
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_MATCH,
      pairs: [
        { id: 'p1', left: '[[£|libras]]', right: 'Libra (UK)' },
        { id: 'p2', left: '[[$|dólares]]', right: 'Dólar' },
        { id: 'p3', left: '[[€|euros]]', right: 'Euro' },
        { id: 'p4', left: '[[cents|céntimos]]', right: 'Parte de dólar/euro' },
        { id: 'p5', left: '[[bill|cuenta]]', right: 'La cuenta (restaurante)' },
      ],
    },
    topicName: 'Vocabulary',
  },
  {
    id: 'a1-u8-l2-v10',
    type: 'matching',
    level: 'A1',
    topic: TOPIC,
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_MATCH,
      pairs: [
        { id: 'p1', left: '[[sixty-four|sesenta y cuatro]]', right: '64' },
        { id: 'p2', left: '[[twenty-one|veintiuno]]', right: '21' },
        { id: 'p3', left: '[[ninety-nine|noventa y nueve]]', right: '99' },
        { id: 'p4', left: '[[fifteen|quince]]', right: '15' },
        { id: 'p5', left: '[[eighty|ochenta]]', right: '80' },
      ],
    },
    topicName: 'Vocabulary',
  },

  // ─── 11–13: fill-blank ───────────────────────────────────────────────────
  {
    id: 'a1-u8-l2-v11',
    type: 'fill-blank',
    level: 'A1',
    topic: TOPIC,
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_FILL,
      questions: [{
        question: '[[I|Yo]] [[am|tengo]] ____ [[years|años]] [[old|de edad]]. (25)',
        options: ['[[twenty-five|veinticinco]]', '[[fifty-two|cincuenta y dos]]', '[[fifteen|quince]]'],
        correctAnswer: 'twenty-five',
        acceptableAnswers: ['twenty-five'],
        explanation: '25 = twenty-five.',
      }],
    },
    topicName: 'Vocabulary',
  },
  {
    id: 'a1-u8-l2-v12',
    type: 'fill-blank',
    level: 'A1',
    topic: TOPIC,
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_FILL,
      questions: [{
        question: '[[The|El]] [[total|total]] ____ [[ninety-nine|noventa y nueve]] [[pounds|libras]].',
        options: ['[[is|es]]', '[[are|son]]', '[[am|soy]]'],
        correctAnswer: 'is',
        acceptableAnswers: ['is'],
        explanation: 'The total is [amount].',
      }],
    },
    topicName: 'Vocabulary',
  },
  {
    id: 'a1-u8-l2-v13',
    type: 'fill-blank',
    level: 'A1',
    topic: TOPIC,
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_FILL,
      questions: [{
        question: '[[How|Cuánto]] ____ [[are|cuestan]] [[these|estas]] [[apples|manzanas]]?',
        options: ['[[much|cuesta]]', '[[many|cuántos]]', '[[old|años]]'],
        correctAnswer: 'much',
        acceptableAnswers: ['much'],
        explanation: 'How much are…? para precio en plural.',
      }],
    },
    topicName: 'Vocabulary',
  },

  // ─── 14–15: multiple-choice contexto ──────────────────────────────────────
  {
    id: 'a1-u8-l2-v14',
    type: 'multiple-choice',
    level: 'A1',
    topic: TOPIC,
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_CTX,
      questions: [{
        question: '[[You|Tú]] [[want|quieres]] [[to|preguntar]] [[ask|preguntar]] [[the|el]] [[price|precio]] [[of|del]] [[a|un]] [[coffee|café]]. [[You|Tú]] ____.',
        options: ['[[say|dices]] "[[How old are you?|¿Cuántos años tienes?]]"', '[[say|dices]] "[[How much is it?|¿Cuánto cuesta?]]"', '[[say|dices]] "[[Where is it?|¿Dónde está?]]"'],
        correctAnswer: 1,
        explanation: 'Para precio: How much is it?',
      }],
    },
    topicName: 'Vocabulary',
  },
  {
    id: 'a1-u8-l2-v15',
    type: 'multiple-choice',
    level: 'A1',
    topic: TOPIC,
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_CTX,
      questions: [{
        question: '[[Someone|Alguien]] [[asks|pregunta]] [[your|tu]] [[age|edad]]. [[You|Tú]] [[answer|respondes]]: ____.',
        options: ['[[I am twenty-five years old.|Tengo veinticinco años.]]', '[[I have twenty-five euros.|Tengo veinticinco euros.]]', '[[The book is twenty-five.|El libro cuesta veinticinco.]]'],
        correctAnswer: 0,
        explanation: 'Edad: I am [number] years old.',
      }],
    },
    topicName: 'Vocabulary',
  },
];
