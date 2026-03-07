/**
 * Unidad 7 — Lección 6: Expresión escrita
 * 15 ejercicios: 5 fill-blank, 3 sentence-building, 4 writing guiada (1–3 frases), 3 writing libre (4–6 frases).
 * Instrucciones en español; prompt con tokens.
 */

import { Exercise } from '@/lib/exercise-generator';

const LESSON_TITLE = 'Expresión escrita';
const TOPIC = 'Colors & Physical Descriptions';

export const UNIT_7_LESSON_6_WRITING: Exercise[] = [
  // ─── 1–5: fill-blank (adjetivos, colores, have got) ───────────────────────
  {
    id: 'a1-u7-l6-w1',
    type: 'fill-blank',
    level: 'A1',
    topic: TOPIC,
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: 'Completa la frase con el color correcto. Escribe "blue" en el hueco.',
      questions: [{
        question: '[[The|El]] [[sky|cielo]] [[is|es]] ____.',
        options: ['[[blue|azul]]', '[[red|rojo]]', '[[green|verde]]', '[[yellow|amarillo]]'],
        correctAnswer: 'blue',
        acceptableAnswers: ['blue'],
        explanation: 'The sky is blue.',
      }],
    },
    topicName: 'Writing',
  },
  {
    id: 'a1-u7-l6-w2',
    type: 'fill-blank',
    level: 'A1',
    topic: TOPIC,
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: 'Completa con "has" o "have". Para "she" usamos ____.',
      questions: [{
        question: '[[She|Ella]] ____ [[long|largo]] [[brown|castaño]] [[hair|pelo]].',
        options: ['[[has|tiene]]', '[[have|tener]]', '[[is|es]]'],
        correctAnswer: 'has',
        acceptableAnswers: ['has'],
        explanation: 'She has long brown hair.',
      }],
    },
    topicName: 'Writing',
  },
  {
    id: 'a1-u7-l6-w3',
    type: 'fill-blank',
    level: 'A1',
    topic: TOPIC,
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: 'Completa con el adjetivo de altura correcto (opposite of "tall").',
      questions: [{
        question: '[[My|Mi]] [[brother|hermano]] [[is|es]] ____. [[He|Él]] [[is|es]] [[not|no]] [[tall|alto]].',
        options: ['[[short|bajo]]', '[[long|largo]]', '[[young|joven]]', '[[old|mayor]]'],
        correctAnswer: 'short',
        acceptableAnswers: ['short'],
        explanation: 'Short = bajo (altura).',
      }],
    },
    topicName: 'Writing',
  },
  {
    id: 'a1-u7-l6-w4',
    type: 'fill-blank',
    level: 'A1',
    topic: TOPIC,
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: 'Completa con "is" o "are". Para "her eyes" (plural) usamos ____.',
      questions: [{
        question: '[[Her|Sus]] [[eyes|ojos]] ____ [[green|verdes]].',
        options: ['[[is|es]]', '[[are|son]]', '[[has|tiene]]'],
        correctAnswer: 'are',
        acceptableAnswers: ['are'],
        explanation: 'Her eyes are green.',
      }],
    },
    topicName: 'Writing',
  },
  {
    id: 'a1-u7-l6-w5',
    type: 'fill-blank',
    level: 'A1',
    topic: TOPIC,
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: 'Completa con el adjetivo de edad. Opposite of "old".',
      questions: [{
        question: '[[She|Ella]] [[is|es]] ____ — [[only|solo]] [[twenty|veinte]] [[years|años]] [[old|de edad]].',
        options: ['[[young|joven]]', '[[tall|alta]]', '[[short|baja]]', '[[long|largo]]'],
        correctAnswer: 'young',
        acceptableAnswers: ['young'],
        explanation: 'Young = joven.',
      }],
    },
    topicName: 'Writing',
  },

  // ─── 6–8: sentence-building ───────────────────────────────────────────────
  {
    id: 'a1-u7-l6-w6',
    type: 'sentence-building',
    level: 'A1',
    topic: TOPIC,
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: 'Ordena las palabras y escribe la oración correcta.',
      correctSentence: '[[She|Ella]] [[is|es]] [[tall|alta]] [[and|y]] [[beautiful|hermosa]].',
      words: ['[[and|y]]', '[[beautiful|hermosa]].', '[[She|Ella]]', '[[is|es]]', '[[tall|alta]]'],
    },
    topicName: 'Writing',
  },
  {
    id: 'a1-u7-l6-w7',
    type: 'sentence-building',
    level: 'A1',
    topic: TOPIC,
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: 'Ordena las palabras y escribe la oración correcta.',
      correctSentence: '[[He|Él]] [[has|tiene]] [[blue|azules]] [[eyes|ojos]].',
      words: ['[[He|Él]]', '[[has|tiene]]', '[[blue|azules]]', '[[eyes|ojos]].'],
    },
    topicName: 'Writing',
  },
  {
    id: 'a1-u7-l6-w8',
    type: 'sentence-building',
    level: 'A1',
    topic: TOPIC,
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: 'Ordena las palabras y escribe la oración correcta.',
      correctSentence: '[[My|Mi]] [[car|coche]] [[is|es]] [[red|rojo]].',
      words: ['[[My|Mi]]', '[[car|coche]]', '[[is|es]]', '[[red|rojo]].'],
    },
    topicName: 'Writing',
  },

  // ─── 9–12: writing guiada (1–3 frases) ────────────────────────────────────
  {
    id: 'a1-u7-l6-w9',
    type: 'writing',
    level: 'A1',
    topic: TOPIC,
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: 'Escribe una o dos frases describiendo tu pelo. Usa "I have … hair" (long/short, colour).',
      prompt: '[[I|Yo]] [[have|tengo]] ____ [[hair|pelo]].',
      minWords: 4,
      maxWords: 12,
    },
    topicName: 'Writing',
  },
  {
    id: 'a1-u7-l6-w10',
    type: 'writing',
    level: 'A1',
    topic: TOPIC,
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: 'Escribe una o dos frases describiendo tus ojos. Usa "My eyes are …" o "I have … eyes".',
      prompt: '[[My|Mis]] [[eyes|ojos]] [[are|son]] ____. / [[I|Yo]] [[have|tengo]] ____ [[eyes|ojos]].',
      minWords: 4,
      maxWords: 10,
    },
    topicName: 'Writing',
  },
  {
    id: 'a1-u7-l6-w11',
    type: 'writing',
    level: 'A1',
    topic: TOPIC,
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: 'Escribe dos frases: una sobre tu altura (I am tall/short) y otra sobre tu edad (I am … years old).',
      prompt: '[[I|Yo]] [[am|soy]] ____. [[I|Yo]] [[am|tengo]] ____ [[years|años]] [[old|de edad]].',
      minWords: 8,
      maxWords: 15,
    },
    topicName: 'Writing',
  },
  {
    id: 'a1-u7-l6-w12',
    type: 'writing',
    level: 'A1',
    topic: TOPIC,
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: 'Escribe dos o tres frases describiendo a un familiar o amigo: altura, pelo, ojos. Usa "He/She is …", "He/She has …".',
      prompt: '[[My|Mi]] ____ [[is|es]] ____. [[He|Él]] / [[She|Ella]] [[has|tiene]] ____ [[hair|pelo]] [[and|y]] ____ [[eyes|ojos]].',
      minWords: 10,
      maxWords: 22,
    },
    topicName: 'Writing',
  },

  // ─── 13–15: writing libre (4–6 frases) ────────────────────────────────────
  {
    id: 'a1-u7-l6-w13',
    type: 'writing',
    level: 'A1',
    topic: TOPIC,
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: 'Escribe un párrafo corto (4–6 frases) describiendo a tu mejor amigo o amiga. Incluye: altura (tall/short), pelo (long/short, colour), ojos (colour), edad si quieres. Usa "He/She is …", "He/She has …".',
      prompt: '[[Describe your best friend|Describe a tu mejor amigo o amiga]]: [[height|altura]], [[hair|pelo]], [[eyes|ojos]], [[age|edad]].',
      minWords: 25,
      maxWords: 55,
    },
    topicName: 'Writing',
  },
  {
    id: 'a1-u7-l6-w14',
    type: 'writing',
    level: 'A1',
    topic: TOPIC,
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: 'Escribe 4–6 frases describiendo a dos personas de tu familia (por ejemplo tu madre y tu hermano). Para cada una: nombre o relación, altura, pelo, ojos. Usa "My mother is …", "She has …", "My brother is …", "He has …".',
      prompt: "[[Describe two family members|Describe a dos miembros de tu familia]]. [[Use|Usa]] [[adjectives|adjetivos]] for [[height|altura]], [[hair|pelo]], [[eyes|ojos]].",
      minWords: 28,
      maxWords: 60,
    },
    topicName: 'Writing',
  },
  {
    id: 'a1-u7-l6-w15',
    type: 'writing',
    level: 'A1',
    topic: TOPIC,
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: 'Escribe un párrafo corto (4–6 frases) sobre los colores que te gustan y los colores de cosas que tienes (habitación, coche, ropa, ojos, pelo). Usa "My … is …", "I have …", "I like …".',
      prompt: '[[Colours around you|Colores a tu alrededor]]: [[your room|tu habitación]], [[your things|tus cosas]], [[your|tu]] [[hair|pelo]] [[and|y]] [[eyes|ojos]].',
      minWords: 25,
      maxWords: 55,
    },
    topicName: 'Writing',
  },
];
