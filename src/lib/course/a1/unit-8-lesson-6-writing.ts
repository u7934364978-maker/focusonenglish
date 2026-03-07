/**
 * Unidad 8 — Lección 6: Expresión escrita
 * 15 ejercicios: 5 fill-blank, 3 sentence-building, 4 writing guiada, 3 writing libre.
 */

import { Exercise } from '@/lib/exercise-generator';

const LESSON_TITLE = 'Expresión escrita';
const TOPIC = 'Numbers 20–100 (Prices & Ages)';

export const UNIT_8_LESSON_6_WRITING: Exercise[] = [
  // ─── 1–5: fill-blank (edad, precios, números) ─────────────────────────────
  {
    id: 'a1-u8-l6-w1',
    type: 'fill-blank',
    level: 'A1',
    topic: TOPIC,
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: 'Completa la frase. Para preguntar la edad se usa ____.',
      questions: [{
        question: '____ [[old|años]] [[are|tienes]] [[you|tú]]?',
        options: ['[[How|Cuántos]]', '[[What|Qué]]', '[[Where|Dónde]]'],
        correctAnswer: 'How',
        acceptableAnswers: ['How'],
        explanation: 'How old are you?',
      }],
    },
    topicName: 'Writing',
  },
  {
    id: 'a1-u8-l6-w2',
    type: 'fill-blank',
    level: 'A1',
    topic: TOPIC,
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: 'Completa con "much" o "many". Para precio usamos ____.',
      questions: [{
        question: '[[How|Cuánto]] ____ [[is|es]] [[the|el]] [[coffee|café]]?',
        options: ['[[much|cuesta]]', '[[many|cuántos]]', '[[old|años]]'],
        correctAnswer: 'much',
        acceptableAnswers: ['much'],
        explanation: 'How much is…? para precio.',
      }],
    },
    topicName: 'Writing',
  },
  {
    id: 'a1-u8-l6-w3',
    type: 'fill-blank',
    level: 'A1',
    topic: TOPIC,
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: 'Completa con el número en inglés. 40 = ____.',
      questions: [{
        question: '[[The|El]] [[book|libro]] [[is|cuesta]] ____ [[euros|euros]]. (40)',
        options: ['[[forty|cuarenta]]', '[[fourteen|catorce]]', '[[four|cuatro]]'],
        correctAnswer: 'forty',
        acceptableAnswers: ['forty'],
        explanation: '40 = forty.',
      }],
    },
    topicName: 'Writing',
  },
  {
    id: 'a1-u8-l6-w4',
    type: 'fill-blank',
    level: 'A1',
    topic: TOPIC,
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: 'Completa con "is" o "are". Para "the total" (singular) usamos ____.',
      questions: [{
        question: '[[The|El]] [[total|total]] ____ [[fifty|cincuenta]] [[euros|euros]].',
        options: ['[[is|es]]', '[[are|son]]', '[[am|soy]]'],
        correctAnswer: 'is',
        acceptableAnswers: ['is'],
        explanation: 'The total is…',
      }],
    },
    topicName: 'Writing',
  },
  {
    id: 'a1-u8-l6-w5',
    type: 'fill-blank',
    level: 'A1',
    topic: TOPIC,
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: 'Completa la respuesta sobre edad. Con "I" usamos ____.',
      questions: [{
        question: '[[I|Yo]] ____ [[twenty-eight|veintiocho]] [[years|años]] [[old|de edad]].',
        options: ['[[am|tengo]]', '[[is|es]]', '[[are|son]]'],
        correctAnswer: 'am',
        acceptableAnswers: ['am'],
        explanation: 'I am [number] years old.',
      }],
    },
    topicName: 'Writing',
  },

  // ─── 6–8: sentence-building ───────────────────────────────────────────────
  {
    id: 'a1-u8-l6-w6',
    type: 'sentence-building',
    level: 'A1',
    topic: TOPIC,
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: 'Ordena las palabras y escribe la oración correcta.',
      correctSentence: '[[How|Cuánto]] [[much|cuesta]] [[is|es]] [[this|este]] [[book|libro]]?',
      words: ['[[How|Cuánto]]', '[[much|cuesta]]', '[[is|es]]', '[[this|este]]', '[[book|libro]]?'],
    },
    topicName: 'Writing',
  },
  {
    id: 'a1-u8-l6-w7',
    type: 'sentence-building',
    level: 'A1',
    topic: TOPIC,
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: 'Ordena las palabras y escribe la oración correcta.',
      correctSentence: '[[I|Yo]] [[am|tengo]] [[thirty|treinta]] [[years|años]] [[old|de edad]].',
      words: ['[[I|Yo]]', '[[am|tengo]]', '[[thirty|treinta]]', '[[years|años]]', '[[old|de edad]].'],
    },
    topicName: 'Writing',
  },
  {
    id: 'a1-u8-l6-w8',
    type: 'sentence-building',
    level: 'A1',
    topic: TOPIC,
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: 'Ordena las palabras y escribe la oración correcta.',
      correctSentence: '[[The|El]] [[total|total]] [[is|es]] [[twenty-five|veinticinco]] [[euros|euros]].',
      words: ['[[The|El]]', '[[total|total]]', '[[is|es]]', '[[twenty-five|veinticinco]]', '[[euros|euros]].'],
    },
    topicName: 'Writing',
  },

  // ─── 9–12: writing guiada ─────────────────────────────────────────────────
  {
    id: 'a1-u8-l6-w9',
    type: 'writing',
    level: 'A1',
    topic: TOPIC,
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: 'Escribe una frase diciendo tu edad. Usa: I am … years old.',
      prompt: '[[I|Yo]] ____ [[years|años]] [[old|de edad]].',
      minWords: 4,
      maxWords: 8,
    },
    topicName: 'Writing',
  },
  {
    id: 'a1-u8-l6-w10',
    type: 'writing',
    level: 'A1',
    topic: TOPIC,
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: 'Escribe una pregunta para saber el precio de algo. Usa: How much is this …?',
      prompt: '[[How|Cuánto]] [[much|cuesta]] [[is|es]] [[this|este]] ____?',
      minWords: 5,
      maxWords: 8,
    },
    topicName: 'Writing',
  },
  {
    id: 'a1-u8-l6-w11',
    type: 'writing',
    level: 'A1',
    topic: TOPIC,
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: 'Escribe dos frases: una con el precio de un objeto (It is … euros) y otra diciendo si es caro o barato (It is expensive / cheap).',
      prompt: '[[It|Cuesta]] ____. [[It|Es]] ____ [[expensive|caro]] [[or|o]] [[cheap|barato]].',
      minWords: 8,
      maxWords: 15,
    },
    topicName: 'Writing',
  },
  {
    id: 'a1-u8-l6-w12',
    type: 'writing',
    level: 'A1',
    topic: TOPIC,
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: 'Escribe una pregunta por la edad de un familiar y tu respuesta. Usa: How old is your …? He/She is … years old.',
      prompt: '____? ____ [[years|años]] [[old|de edad]].',
      minWords: 8,
      maxWords: 18,
    },
    topicName: 'Writing',
  },

  // ─── 13–15: writing libre ─────────────────────────────────────────────────
  {
    id: 'a1-u8-l6-w13',
    type: 'writing',
    level: 'A1',
    topic: TOPIC,
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: 'Escribe un párrafo corto (4–6 frases) sobre una compra: qué compraste, cuánto costó cada cosa y el total. Usa números en inglés y "How much", "It is", "The total is".',
      prompt: '[[Describe a shopping trip|Describe una compra]]: [[what you bought|qué compraste]], [[prices|precios]], [[total|total]].',
      minWords: 25,
      maxWords: 55,
    },
    topicName: 'Writing',
  },
  {
    id: 'a1-u8-l6-w14',
    type: 'writing',
    level: 'A1',
    topic: TOPIC,
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: 'Escribe 4–6 frases sobre las edades de tu familia o amigos. Usa: How old is…?, He/She is … years old, I am … years old.',
      prompt: '[[Ages of people you know|Edades de personas que conoces]]: [[family|familia]], [[friends|amigos]].',
      minWords: 22,
      maxWords: 50,
    },
    topicName: 'Writing',
  },
  {
    id: 'a1-u8-l6-w15',
    type: 'writing',
    level: 'A1',
    topic: TOPIC,
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: 'Escribe un párrafo corto (4–6 frases) mezclando precios y edades: algo que compraste (precio), tu edad, la edad de alguien más, y si algo fue caro o barato.',
      prompt: '[[Prices and ages|Precios y edades]]: [[something you bought|algo que compraste]], [[your age|tu edad]], [[someone else\'s age|edad de otra persona]], [[expensive or cheap|caro o barato]].',
      minWords: 28,
      maxWords: 60,
    },
    topicName: 'Writing',
  },
];
