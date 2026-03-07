/**
 * Unidad 7 — Lección 5: Expresión oral
 * 15 ejercicios: 4 repetir, 3 leer en voz alta, 4 responder oralmente, 4 producir frases guiadas.
 * Instrucciones en español; targetText con tokens; expectedResponse en inglés.
 */

import { Exercise } from '@/lib/exercise-generator';

const LESSON_TITLE = 'Expresión oral';
const TOPIC = 'Colors & Physical Descriptions';

export const UNIT_7_LESSON_5_SPEAKING: Exercise[] = [
  // ─── 1–4: Repetir frases (descripción física) ─────────────────────────────
  {
    id: 'a1-u7-l5-s1',
    type: 'pronunciation',
    level: 'A1',
    topic: TOPIC,
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: 'Escucha la frase y repítela en voz alta.',
      targetText: '[[She|Ella]] [[is|es]] [[tall|alta]] [[with|con]] [[long|largo]] [[brown|castaño]] [[hair|pelo]].',
      expectedResponse: 'She is tall with long brown hair.',
    },
    topicName: 'Speaking',
  },
  {
    id: 'a1-u7-l5-s2',
    type: 'pronunciation',
    level: 'A1',
    topic: TOPIC,
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: 'Escucha y repite en voz alta.',
      targetText: '[[He|Él]] [[has|tiene]] [[blue|azules]] [[eyes|ojos]].',
      expectedResponse: 'He has blue eyes.',
    },
    topicName: 'Speaking',
  },
  {
    id: 'a1-u7-l5-s3',
    type: 'pronunciation',
    level: 'A1',
    topic: TOPIC,
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: 'Escucha y repite en voz alta.',
      targetText: '[[My|Mi]] [[brother|hermano]] [[is|es]] [[short|bajo]] [[and|y]] [[young|joven]].',
      expectedResponse: 'My brother is short and young.',
    },
    topicName: 'Speaking',
  },
  {
    id: 'a1-u7-l5-s4',
    type: 'pronunciation',
    level: 'A1',
    topic: TOPIC,
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: 'Escucha y repite en voz alta.',
      targetText: '[[The|El]] [[car|coche]] [[is|es]] [[red|rojo]].',
      expectedResponse: 'The car is red.',
    },
    topicName: 'Speaking',
  },

  // ─── 5–7: Leer en voz alta ───────────────────────────────────────────────
  {
    id: 'a1-u7-l5-s5',
    type: 'pronunciation',
    level: 'A1',
    topic: TOPIC,
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: 'Lee la frase en voz alta.',
      targetText: '[[Her|Sus]] [[eyes|ojos]] [[are|son]] [[green|verdes]].',
      expectedResponse: 'Her eyes are green.',
    },
    topicName: 'Speaking',
  },
  {
    id: 'a1-u7-l5-s6',
    type: 'pronunciation',
    level: 'A1',
    topic: TOPIC,
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: 'Lee la frase en voz alta.',
      targetText: '[[He|Él]] [[has|tiene]] [[short|corto]] [[black|negro]] [[hair|pelo]].',
      expectedResponse: 'He has short black hair.',
    },
    topicName: 'Speaking',
  },
  {
    id: 'a1-u7-l5-s7',
    type: 'pronunciation',
    level: 'A1',
    topic: TOPIC,
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: 'Lee la frase en voz alta.',
      targetText: '[[She|Ella]] [[is|es]] [[very|muy]] [[young|joven]] [[for|para]] [[her|su]] [[age|edad]].',
      expectedResponse: 'She is very young for her age.',
    },
    topicName: 'Speaking',
  },

  // ─── 8–11: Responder oralmente (descripciones) ───────────────────────────
  {
    id: 'a1-u7-l5-s8',
    type: 'pronunciation',
    level: 'A1',
    topic: TOPIC,
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: 'Contesta la pregunta en voz alta. Di si eres alto/a o bajo/a.',
      targetText: '[[Are|Eres]] [[you|tú]] [[tall|alto]] [[or|o]] [[short|bajo]]?',
      expectedResponse: 'I am tall. / I am short.',
    },
    topicName: 'Speaking',
  },
  {
    id: 'a1-u7-l5-s9',
    type: 'pronunciation',
    level: 'A1',
    topic: TOPIC,
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: 'Contesta la pregunta en voz alta. Di el color de tu pelo.',
      targetText: '[[What|Qué]] [[color|color]] [[is|es]] [[your|tu]] [[hair|pelo]]?',
      expectedResponse: 'My hair is [colour]. / I have [colour] hair.',
    },
    topicName: 'Speaking',
  },
  {
    id: 'a1-u7-l5-s10',
    type: 'pronunciation',
    level: 'A1',
    topic: TOPIC,
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: 'Contesta la pregunta en voz alta. Di el color de tus ojos.',
      targetText: '[[What|Qué]] [[color|color]] [[are|son]] [[your|tus]] [[eyes|ojos]]?',
      expectedResponse: 'My eyes are [colour]. / I have [colour] eyes.',
    },
    topicName: 'Speaking',
  },
  {
    id: 'a1-u7-l5-s11',
    type: 'pronunciation',
    level: 'A1',
    topic: TOPIC,
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: 'Contesta en voz alta. Di si tu pelo es largo o corto.',
      targetText: '[[Do|Tienes]] [[you|tú]] [[have|el pelo]] [[long|largo]] [[or|o]] [[short|corto]] [[hair|pelo]]?',
      expectedResponse: 'I have long hair. / I have short hair.',
    },
    topicName: 'Speaking',
  },

  // ─── 12–15: Producir frases guiadas (describir personas) ───────────────────
  {
    id: 'a1-u7-l5-s12',
    type: 'pronunciation',
    level: 'A1',
    topic: TOPIC,
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: 'Di en voz alta una frase describiendo a un familiar: altura y una característica más (pelo u ojos).',
      targetText: '[[My|Mi]] ____ [[is|es]] ____ [[and|y]] [[has|tiene]] ____ [[hair|pelo]] [[or|o]] ____ [[eyes|ojos]].',
      expectedResponse: 'My [mother/father/brother/sister] is [tall/short] and has [long/short] [colour] hair / [colour] eyes.',
    },
    topicName: 'Speaking',
  },
  {
    id: 'a1-u7-l5-s13',
    type: 'pronunciation',
    level: 'A1',
    topic: TOPIC,
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: 'Di en voz alta el color de tres objetos de tu habitación o de la clase. Usa: The … is [colour].',
      targetText: '[[The|El]] ____ [[is|es]] ____. [[The|La]] ____ [[is|es]] ____.',
      expectedResponse: 'The [object] is [colour]. The [object] is [colour].',
    },
    topicName: 'Speaking',
  },
  {
    id: 'a1-u7-l5-s14',
    type: 'pronunciation',
    level: 'A1',
    topic: TOPIC,
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: 'Describe en voz alta a tu mejor amigo o amiga en dos o tres frases: altura, pelo, ojos, edad si quieres.',
      targetText: '[[My|Mi]] [[best|mejor]] [[friend|amigo]] [[is|es]] ____. [[He|Él]] [[/|/]] [[She|Ella]] [[has|tiene]] ____.',
      expectedResponse: 'My best friend is [tall/short]. He/She has [long/short] [colour] hair and [colour] eyes.',
    },
    topicName: 'Speaking',
  },
  {
    id: 'a1-u7-l5-s15',
    type: 'pronunciation',
    level: 'A1',
    topic: TOPIC,
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: 'Di en voz alta si tú eres joven o mayor, y una frase sobre tu pelo o tus ojos.',
      targetText: '[[I|Yo]] [[am|soy]] ____. [[I|Yo]] [[have|tengo]] ____ [[hair|pelo]] [[and|y]] ____ [[eyes|ojos]].',
      expectedResponse: 'I am young/old. I have [length] [colour] hair and [colour] eyes.',
    },
    topicName: 'Speaking',
  },
];
