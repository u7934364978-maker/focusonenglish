/**
 * Unidad 10 — Lección 5: Expresión oral
 * 15 ejercicios: repetir, leer en voz alta, responder oralmente, producir frases guiadas (rutinas y hora).
 */

import { Exercise } from '@/lib/exercise-generator';

const LESSON_TITLE = 'Expresión oral';
const TOPIC = 'Daily Routines & Time';

export const UNIT_10_LESSON_5_SPEAKING: Exercise[] = [
  // ─── 1–4: Repetir frases (rutinas y hora) ──────────────────────────────────
  {
    id: 'a1-u10-l5-s1',
    type: 'pronunciation',
    level: 'A1',
    topic: TOPIC,
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: 'Escucha la frase y repítela en voz alta.',
      targetText: '[[I|Yo]] [[get|me]] [[up|levanto]] [[at|a]] [[seven|siete]] [[o\'clock|en punto]].',
      expectedResponse: 'I get up at seven o\'clock.',
    },
    topicName: 'Speaking',
  },
  {
    id: 'a1-u10-l5-s2',
    type: 'pronunciation',
    level: 'A1',
    topic: TOPIC,
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: 'Escucha y repite en voz alta.',
      targetText: '[[I|Yo]] [[have|tomo]] [[breakfast|desayuno]] [[at|a]] [[half|y]] [[past|media]] [[seven|siete]].',
      expectedResponse: 'I have breakfast at half past seven.',
    },
    topicName: 'Speaking',
  },
  {
    id: 'a1-u10-l5-s3',
    type: 'pronunciation',
    level: 'A1',
    topic: TOPIC,
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: 'Escucha y repite en voz alta.',
      targetText: '[[What|A]] [[time|qué]] [[do|(auxiliar)]] [[you|tú]] [[go|vas]] [[to|a]] [[work|trabajo]]?',
      expectedResponse: 'What time do you go to work?',
    },
    topicName: 'Speaking',
  },
  {
    id: 'a1-u10-l5-s4',
    type: 'pronunciation',
    level: 'A1',
    topic: TOPIC,
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: 'Escucha y repite en voz alta.',
      targetText: '[[I|Yo]] [[go|voy]] [[to|a]] [[bed|cama]] [[at|a]] [[ten|diez]] [[o\'clock|en punto]].',
      expectedResponse: 'I go to bed at ten o\'clock.',
    },
    topicName: 'Speaking',
  },

  // ─── 5–7: Leer en voz alta ─────────────────────────────────────────────────
  {
    id: 'a1-u10-l5-s5',
    type: 'pronunciation',
    level: 'A1',
    topic: TOPIC,
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: 'Lee la frase en voz alta.',
      targetText: '[[She|Ella]] [[gets|se]] [[up|levanta]] [[at|a]] [[six|seis]] [[o\'clock|en punto]]. [[She|Ella]] [[has|toma]] [[breakfast|desayuno]] [[at|a]] [[half|y]] [[past|media]] [[six|seis]].',
      expectedResponse: 'She gets up at six o\'clock. She has breakfast at half past six.',
    },
    topicName: 'Speaking',
  },
  {
    id: 'a1-u10-l5-s6',
    type: 'pronunciation',
    level: 'A1',
    topic: TOPIC,
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: 'Lee la frase en voz alta.',
      targetText: '[[What|A]] [[time|qué]] [[do|(auxiliar)]] [[you|tú]] [[have|tomas]] [[breakfast|desayuno]]? [[I|Yo]] [[have|tomo]] [[breakfast|desayuno]] [[at|a]] [[eight|ocho]] [[o\'clock|en punto]].',
      expectedResponse: 'What time do you have breakfast? I have breakfast at eight o\'clock.',
    },
    topicName: 'Speaking',
  },
  {
    id: 'a1-u10-l5-s7',
    type: 'pronunciation',
    level: 'A1',
    topic: TOPIC,
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: 'Lee la frase en voz alta.',
      targetText: '[[He|Él]] [[has|almuerza]] [[lunch|comida]] [[at|a]] [[one|la una]] [[o\'clock|en punto]]. [[He|Él]] [[finishes|termina]] [[work|trabajo]] [[at|a]] [[half|y]] [[past|media]] [[five|cinco]].',
      expectedResponse: 'He has lunch at one o\'clock. He finishes work at half past five.',
    },
    topicName: 'Speaking',
  },

  // ─── 8–11: Responder oralmente ───────────────────────────────────────────
  {
    id: 'a1-u10-l5-s8',
    type: 'pronunciation',
    level: 'A1',
    topic: TOPIC,
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: 'Responde en voz alta. Di a qué hora te levantas.',
      targetText: '[[What|A]] [[time|qué]] [[do|(auxiliar)]] [[you|tú]] [[get|te]] [[up|levantas]]?',
      expectedResponse: 'I get up at [time].',
    },
    topicName: 'Speaking',
  },
  {
    id: 'a1-u10-l5-s9',
    type: 'pronunciation',
    level: 'A1',
    topic: TOPIC,
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: 'Responde en voz alta. Di a qué hora desayunas.',
      targetText: '[[What|A]] [[time|qué]] [[do|(auxiliar)]] [[you|tú]] [[have|tomas]] [[breakfast|desayuno]]?',
      expectedResponse: 'I have breakfast at [time].',
    },
    topicName: 'Speaking',
  },
  {
    id: 'a1-u10-l5-s10',
    type: 'pronunciation',
    level: 'A1',
    topic: TOPIC,
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: 'Responde en voz alta. Di a qué hora vas a trabajar o al colegio.',
      targetText: '[[What|A]] [[time|qué]] [[do|(auxiliar)]] [[you|tú]] [[go|vas]] [[to|a]] [[work|trabajo]]?',
      expectedResponse: 'I go to work at [time]. / I go to school at [time].',
    },
    topicName: 'Speaking',
  },
  {
    id: 'a1-u10-l5-s11',
    type: 'pronunciation',
    level: 'A1',
    topic: TOPIC,
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: 'Responde en voz alta. Di a qué hora te acuestas.',
      targetText: '[[What|A]] [[time|qué]] [[do|(auxiliar)]] [[you|tú]] [[go|te]] [[to|vas]] [[bed|a la cama]]?',
      expectedResponse: 'I go to bed at [time].',
    },
    topicName: 'Speaking',
  },

  // ─── 12–15: Producir frases guiadas ───────────────────────────────────────
  {
    id: 'a1-u10-l5-s12',
    type: 'pronunciation',
    level: 'A1',
    topic: TOPIC,
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: 'Di en voz alta a qué hora te levantas. Usa: I get up at … o\'clock.',
      targetText: '[[I|Yo]] [[get|me]] [[up|levanto]] ____ [[seven|a las siete]] / [[six|a las seis]]…',
      expectedResponse: 'I get up at [time] o\'clock.',
    },
    topicName: 'Speaking',
  },
  {
    id: 'a1-u10-l5-s13',
    type: 'pronunciation',
    level: 'A1',
    topic: TOPIC,
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: 'Di en voz alta a qué hora desayunas. Usa: I have breakfast at …',
      targetText: '[[I|Yo]] [[have|tomo]] [[breakfast|desayuno]] ____ [[half past seven|a las siete y media]]…',
      expectedResponse: 'I have breakfast at [time].',
    },
    topicName: 'Speaking',
  },
  {
    id: 'a1-u10-l5-s14',
    type: 'pronunciation',
    level: 'A1',
    topic: TOPIC,
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: 'Pregunta en voz alta a qué hora se levanta alguien. Usa: What time do you get up?',
      targetText: '____ [[time|hora]] ____ [[do|(auxiliar)]] [[you|tú]] ____ [[up|levantas]]?',
      expectedResponse: 'What time do you get up?',
    },
    topicName: 'Speaking',
  },
  {
    id: 'a1-u10-l5-s15',
    type: 'pronunciation',
    level: 'A1',
    topic: TOPIC,
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: 'Di en voz alta dos frases: a qué hora te levantas y a qué hora te acuestas. Usa: I get up at … I go to bed at …',
      targetText: '[[I|Yo]] ____ ____ ____. [[I|Yo]] ____ ____ ____.',
      expectedResponse: 'I get up at [time]. I go to bed at [time].',
    },
    topicName: 'Speaking',
  },
];
