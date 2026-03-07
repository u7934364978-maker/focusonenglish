/**
 * Unidad 8 — Lección 5: Expresión oral
 * 15 ejercicios: 4 repetir, 3 leer en voz alta, 4 responder oralmente, 4 producir frases guiadas.
 */

import { Exercise } from '@/lib/exercise-generator';

const LESSON_TITLE = 'Expresión oral';
const TOPIC = 'Numbers 20–100 (Prices & Ages)';

export const UNIT_8_LESSON_5_SPEAKING: Exercise[] = [
  // ─── 1–4: Repetir frases (edad y precios) ──────────────────────────────────
  {
    id: 'a1-u8-l5-s1',
    type: 'pronunciation',
    level: 'A1',
    topic: TOPIC,
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: 'Escucha la frase y repítela en voz alta.',
      targetText: '[[How|Cuántos]] [[old|años]] [[are|tienes]] [[you|tú]]?',
      expectedResponse: 'How old are you?',
    },
    topicName: 'Speaking',
  },
  {
    id: 'a1-u8-l5-s2',
    type: 'pronunciation',
    level: 'A1',
    topic: TOPIC,
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: 'Escucha y repite en voz alta.',
      targetText: '[[I|Yo]] [[am|tengo]] [[twenty-five|veinticinco]] [[years|años]] [[old|de edad]].',
      expectedResponse: 'I am twenty-five years old.',
    },
    topicName: 'Speaking',
  },
  {
    id: 'a1-u8-l5-s3',
    type: 'pronunciation',
    level: 'A1',
    topic: TOPIC,
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: 'Escucha y repite en voz alta.',
      targetText: '[[How|Cuánto]] [[much|cuesta]] [[is|es]] [[this|este]] [[book|libro]]?',
      expectedResponse: 'How much is this book?',
    },
    topicName: 'Speaking',
  },
  {
    id: 'a1-u8-l5-s4',
    type: 'pronunciation',
    level: 'A1',
    topic: TOPIC,
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: 'Escucha y repite en voz alta.',
      targetText: '[[It|Cuesta]] [[is|es]] [[thirty|treinta]] [[euros|euros]].',
      expectedResponse: 'It is thirty euros.',
    },
    topicName: 'Speaking',
  },

  // ─── 5–7: Leer en voz alta ───────────────────────────────────────────────
  {
    id: 'a1-u8-l5-s5',
    type: 'pronunciation',
    level: 'A1',
    topic: TOPIC,
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: 'Lee la frase en voz alta.',
      targetText: '[[The|El]] [[total|total]] [[is|es]] [[fifty-three|cincuenta y tres]] [[euros|euros]].',
      expectedResponse: 'The total is fifty-three euros.',
    },
    topicName: 'Speaking',
  },
  {
    id: 'a1-u8-l5-s6',
    type: 'pronunciation',
    level: 'A1',
    topic: TOPIC,
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: 'Lee la frase en voz alta.',
      targetText: '[[She|Ella]] [[is|tiene]] [[twelve|doce]] [[years|años]] [[old|de edad]].',
      expectedResponse: 'She is twelve years old.',
    },
    topicName: 'Speaking',
  },
  {
    id: 'a1-u8-l5-s7',
    type: 'pronunciation',
    level: 'A1',
    topic: TOPIC,
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: 'Lee la frase en voz alta.',
      targetText: '[[How|Cuánto]] [[much|cuestan]] [[are|son]] [[these|estos]] [[shoes|zapatos]]?',
      expectedResponse: 'How much are these shoes?',
    },
    topicName: 'Speaking',
  },

  // ─── 8–11: Responder oralmente ───────────────────────────────────────────
  {
    id: 'a1-u8-l5-s8',
    type: 'pronunciation',
    level: 'A1',
    topic: TOPIC,
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: 'Contesta la pregunta en voz alta. Di tu edad.',
      targetText: '[[How|Cuántos]] [[old|años]] [[are|tienes]] [[you|tú]]?',
      expectedResponse: 'I am [number] years old.',
    },
    topicName: 'Speaking',
  },
  {
    id: 'a1-u8-l5-s9',
    type: 'pronunciation',
    level: 'A1',
    topic: TOPIC,
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: 'Contesta en voz alta. Di cuánto cuesta algo (por ejemplo un café).',
      targetText: '[[How|Cuánto]] [[much|cuesta]] [[is|es]] [[the|el]] [[coffee|café]]?',
      expectedResponse: 'It is [number] euros / dollars / pounds.',
    },
    topicName: 'Speaking',
  },
  {
    id: 'a1-u8-l5-s10',
    type: 'pronunciation',
    level: 'A1',
    topic: TOPIC,
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: 'Contesta en voz alta. Di la edad de un familiar.',
      targetText: '[[How|Cuántos]] [[old|años]] [[is|tiene]] [[your|tu]] [[brother|hermano]]?',
      expectedResponse: 'He is [number] years old.',
    },
    topicName: 'Speaking',
  },
  {
    id: 'a1-u8-l5-s11',
    type: 'pronunciation',
    level: 'A1',
    topic: TOPIC,
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: 'Responde en voz alta si algo es caro o barato.',
      targetText: '[[Is|Es]] [[this|esto]] [[expensive|caro]] [[or|o]] [[cheap|barato]]?',
      expectedResponse: 'It is expensive. / It is cheap.',
    },
    topicName: 'Speaking',
  },

  // ─── 12–15: Producir frases guiadas ───────────────────────────────────────
  {
    id: 'a1-u8-l5-s12',
    type: 'pronunciation',
    level: 'A1',
    topic: TOPIC,
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: 'Di en voz alta cuántos años tienes. Usa: I am … years old.',
      targetText: '[[I|Yo]] [[am|tengo]] ____ [[years|años]] [[old|de edad]].',
      expectedResponse: 'I am [number] years old.',
    },
    topicName: 'Speaking',
  },
  {
    id: 'a1-u8-l5-s13',
    type: 'pronunciation',
    level: 'A1',
    topic: TOPIC,
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: 'Pregunta en voz alta el precio de un objeto. Usa: How much is this …?',
      targetText: '[[How|Cuánto]] [[much|cuesta]] [[is|es]] [[this|este]] ____?',
      expectedResponse: 'How much is this [object]?',
    },
    topicName: 'Speaking',
  },
  {
    id: 'a1-u8-l5-s14',
    type: 'pronunciation',
    level: 'A1',
    topic: TOPIC,
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: 'Di en voz alta el precio de algo que compraste o viste. Usa: It is … euros/dollars.',
      targetText: '[[It|Cuesta]] [[is|es]] ____ [[euros|euros]].',
      expectedResponse: 'It is [number] euros.',
    },
    topicName: 'Speaking',
  },
  {
    id: 'a1-u8-l5-s15',
    type: 'pronunciation',
    level: 'A1',
    topic: TOPIC,
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: 'Pregunta en voz alta la edad de alguien (amigo, familiar). Usa: How old is your …?',
      targetText: '[[How|Cuántos]] [[old|años]] [[is|tiene]] [[your|tu]] ____?',
      expectedResponse: 'How old is your [mother/father/friend]?',
    },
    topicName: 'Speaking',
  },
];
