/**
 * Unidad 9 — Lección 5: Expresión oral
 * 15 ejercicios: 4 repetir, 3 leer en voz alta, 4 responder oralmente, 4 producir frases guiadas.
 */

import { Exercise } from '@/lib/exercise-generator';

const LESSON_TITLE = 'Expresión oral';
const TOPIC = 'Jobs & Occupations';

export const UNIT_9_LESSON_5_SPEAKING: Exercise[] = [
  // ─── 1–4: Repetir frases (profesión y trabajo) ────────────────────────────
  {
    id: 'a1-u9-l5-s1',
    type: 'pronunciation',
    level: 'A1',
    topic: TOPIC,
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: 'Escucha la frase y repítela en voz alta.',
      targetText: '[[I|Yo]] [[am|soy]] [[a|un]] [[teacher|profesor]].',
      expectedResponse: 'I am a teacher.',
    },
    topicName: 'Speaking',
  },
  {
    id: 'a1-u9-l5-s2',
    type: 'pronunciation',
    level: 'A1',
    topic: TOPIC,
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: 'Escucha y repite en voz alta.',
      targetText: '[[I|Yo]] [[work|trabajo]] [[in|en]] [[a|una]] [[school|escuela]].',
      expectedResponse: 'I work in a school.',
    },
    topicName: 'Speaking',
  },
  {
    id: 'a1-u9-l5-s3',
    type: 'pronunciation',
    level: 'A1',
    topic: TOPIC,
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: 'Escucha y repite en voz alta.',
      targetText: '[[Where|Dónde]] [[do|(auxiliar)]] [[you|tú]] [[work|trabajas]]?',
      expectedResponse: 'Where do you work?',
    },
    topicName: 'Speaking',
  },
  {
    id: 'a1-u9-l5-s4',
    type: 'pronunciation',
    level: 'A1',
    topic: TOPIC,
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: 'Escucha y repite en voz alta.',
      targetText: '[[She|Ella]] [[is|es]] [[a|una]] [[nurse|enfermera]]. [[She|Ella]] [[works|trabaja]] [[in|en]] [[a|un]] [[hospital|hospital]].',
      expectedResponse: 'She is a nurse. She works in a hospital.',
    },
    topicName: 'Speaking',
  },

  // ─── 5–7: Leer en voz alta ───────────────────────────────────────────────
  {
    id: 'a1-u9-l5-s5',
    type: 'pronunciation',
    level: 'A1',
    topic: TOPIC,
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: 'Lee la frase en voz alta.',
      targetText: '[[He|Él]] [[is|es]] [[an|un]] [[engineer|ingeniero]]. [[He|Él]] [[works|trabaja]] [[in|en]] [[an|una]] [[office|oficina]].',
      expectedResponse: 'He is an engineer. He works in an office.',
    },
    topicName: 'Speaking',
  },
  {
    id: 'a1-u9-l5-s6',
    type: 'pronunciation',
    level: 'A1',
    topic: TOPIC,
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: 'Lee la frase en voz alta.',
      targetText: '[[What|Qué]] [[do|(auxiliar)]] [[you|tú]] [[do|haces]]? [[I|Yo]] [[am|soy]] [[a|un]] [[doctor|médico]].',
      expectedResponse: 'What do you do? I am a doctor.',
    },
    topicName: 'Speaking',
  },
  {
    id: 'a1-u9-l5-s7',
    type: 'pronunciation',
    level: 'A1',
    topic: TOPIC,
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: 'Lee la frase en voz alta.',
      targetText: '[[My|Mi]] [[brother|hermano]] [[is|es]] [[a|un]] [[chef|cocinero]]. [[He|Él]] [[works|trabaja]] [[in|en]] [[a|un]] [[restaurant|restaurante]].',
      expectedResponse: 'My brother is a chef. He works in a restaurant.',
    },
    topicName: 'Speaking',
  },

  // ─── 8–11: Responder oralmente ───────────────────────────────────────────
  {
    id: 'a1-u9-l5-s8',
    type: 'pronunciation',
    level: 'A1',
    topic: TOPIC,
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: 'Responde en voz alta. Di tu profesión (real o inventada).',
      targetText: '[[What|Qué]] [[do|(auxiliar)]] [[you|tú]] [[do|haces]]?',
      expectedResponse: 'I am a [teacher/student/doctor/...].',
    },
    topicName: 'Speaking',
  },
  {
    id: 'a1-u9-l5-s9',
    type: 'pronunciation',
    level: 'A1',
    topic: TOPIC,
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: 'Responde en voz alta. Di dónde trabajas (lugar).',
      targetText: '[[Where|Dónde]] [[do|(auxiliar)]] [[you|tú]] [[work|trabajas]]?',
      expectedResponse: 'I work in a [school/hospital/office/...].',
    },
    topicName: 'Speaking',
  },
  {
    id: 'a1-u9-l5-s10',
    type: 'pronunciation',
    level: 'A1',
    topic: TOPIC,
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: 'Responde en voz alta. Di la profesión de un familiar.',
      targetText: '[[What|Qué]] [[does|hace]] [[your|tu]] [[mother|madre]] [[do|(auxiliar)]]?',
      expectedResponse: 'She is a [profession].',
    },
    topicName: 'Speaking',
  },
  {
    id: 'a1-u9-l5-s11',
    type: 'pronunciation',
    level: 'A1',
    topic: TOPIC,
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: 'Responde en voz alta. Di si te gusta tu trabajo (sí o no y por qué breve).',
      targetText: '[[Do|(auxiliar)]] [[you|te]] [[like|gusta]] [[your|tu]] [[job|trabajo]]?',
      expectedResponse: 'Yes, I do. / No, I don\'t.',
    },
    topicName: 'Speaking',
  },

  // ─── 12–15: Producir frases guiadas ───────────────────────────────────────
  {
    id: 'a1-u9-l5-s12',
    type: 'pronunciation',
    level: 'A1',
    topic: TOPIC,
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: 'Di en voz alta tu profesión. Usa: I am a/an …',
      targetText: '[[I|Yo]] ____ [[a|un]] [[teacher|profesor]] / [[doctor|médico]] / [[student|estudiante]]…',
      expectedResponse: 'I am a [profession].',
    },
    topicName: 'Speaking',
  },
  {
    id: 'a1-u9-l5-s13',
    type: 'pronunciation',
    level: 'A1',
    topic: TOPIC,
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: 'Di en voz alta dónde trabajas. Usa: I work in a/an …',
      targetText: '[[I|Yo]] [[work|trabajo]] ____ [[a|en una]] [[school|escuela]] / [[hospital|hospital]]…',
      expectedResponse: 'I work in a [place].',
    },
    topicName: 'Speaking',
  },
  {
    id: 'a1-u9-l5-s14',
    type: 'pronunciation',
    level: 'A1',
    topic: TOPIC,
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: 'Pregunta en voz alta la profesión de alguien. Usa: What do you do? o What does he/she do?',
      targetText: '____ [[do|(auxiliar)]] [[you|tú]] [[do|haces]]?',
      expectedResponse: 'What do you do?',
    },
    topicName: 'Speaking',
  },
  {
    id: 'a1-u9-l5-s15',
    type: 'pronunciation',
    level: 'A1',
    topic: TOPIC,
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: 'Di en voz alta la profesión de un familiar y dónde trabaja. Usa: My … is a/an … He/She works in …',
      targetText: '[[My|Mi]] ____ [[is|es]] ____. [[He|Él]]/[[She|Ella]] [[works|trabaja]] ____.',
      expectedResponse: 'My [family] is a [profession]. He/She works in [place].',
    },
    topicName: 'Speaking',
  },
];
