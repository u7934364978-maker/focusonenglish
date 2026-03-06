/**
 * Unidad 1 — Lección 5: Expresión oral
 * 15 ejercicios: 4 repetir, 3 leer en voz alta, 4 responder oralmente, 4 describir/producir frase
 */

import { Exercise } from '@/lib/exercise-generator';

const LESSON_TITLE = 'Expresión oral';

export const UNIT_1_LESSON_5_SPEAKING: Exercise[] = [
  // ─── 1–4: Repetir (pronunciación) ─────────────────────────────────────────
  {
    id: 'a1-u1-l5-s1',
    type: 'pronunciation',
    level: 'A1',
    topic: 'Personal Info',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: '[[Listen|Escucha]] [[the|la]] [[phrase|frase]] [[and|y]] [[repeat|repítela]] [[in|en]] [[voz alta|voz alta]].',
      targetText: '[[Hello|Hola]]. [[My|Mi]] [[name|nombre]] [[is|es]] [[Maria|María]].',
      expectedResponse: 'Hello. My name is Maria.',
    },
    topicName: 'Speaking',
  },
  {
    id: 'a1-u1-l5-s2',
    type: 'pronunciation',
    level: 'A1',
    topic: 'Personal Info',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: '[[Listen|Escucha]] [[and|y]] [[repeat|repite]].',
      targetText: '[[I|Yo]] [[am|soy]] [[from|de]] [[Madrid|Madrid]].',
      expectedResponse: 'I am from Madrid.',
    },
    topicName: 'Speaking',
  },
  {
    id: 'a1-u1-l5-s3',
    type: 'pronunciation',
    level: 'A1',
    topic: 'Personal Info',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: '[[Listen|Escucha]] [[and|y]] [[repeat|repite]].',
      targetText: '[[I|Yo]] [[am|tengo]] [[twenty-five|veinticinco]] [[years|años]] [[old|de edad]].',
      expectedResponse: 'I am twenty-five years old.',
    },
    topicName: 'Speaking',
  },
  {
    id: 'a1-u1-l5-s4',
    type: 'pronunciation',
    level: 'A1',
    topic: 'Personal Info',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: '[[Listen|Escucha]] [[and|y]] [[repeat|repite]].',
      targetText: '[[Nice|Encantado]] [[to|de]] [[meet|conocer]] [[you|a ti]].',
      expectedResponse: 'Nice to meet you.',
    },
    topicName: 'Speaking',
  },

  // ─── 5–7: Leer en voz alta ───────────────────────────────────────────────
  {
    id: 'a1-u1-l5-s5',
    type: 'pronunciation',
    level: 'A1',
    topic: 'Personal Info',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: '[[Read|Lee]] [[the|la]] [[sentence|frase]] [[below|abajo]] [[in|en]] [[voz alta|voz alta]].',
      targetText: '[[Good morning|Buenos días]]. [[I|Yo]] [[am|soy]] [[a|un]] [[student|estudiante]].',
      expectedResponse: 'Good morning. I am a student.',
    },
    topicName: 'Speaking',
  },
  {
    id: 'a1-u1-l5-s6',
    type: 'pronunciation',
    level: 'A1',
    topic: 'Personal Info',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: '[[Read|Lee]] [[in|en]] [[voz alta|voz alta]].',
      targetText: '[[You|Tú]] [[are|eres]] [[my|mi]] [[friend|amigo]].',
      expectedResponse: 'You are my friend.',
    },
    topicName: 'Speaking',
  },
  {
    id: 'a1-u1-l5-s7',
    type: 'pronunciation',
    level: 'A1',
    topic: 'Personal Info',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: '[[Read|Lee]] [[in|en]] [[voz alta|voz alta]].',
      targetText: '[[I|Yo]] [[am|soy]] [[from|de]] [[Barcelona|Barcelona]], [[Spain|España]].',
      expectedResponse: 'I am from Barcelona, Spain.',
    },
    topicName: 'Speaking',
  },

  // ─── 8–11: Responder oralmente (pregunta cerrada) ─────────────────────────
  {
    id: 'a1-u1-l5-s8',
    type: 'pronunciation',
    level: 'A1',
    topic: 'Personal Info',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: '[[Answer|Responde]] [[the|la]] [[question|pregunta]] [[orally|en voz alta]]. [[Example|Ejemplo]]: "[[Yes, I am|Sí, lo soy]]" [[or|o]] "[[No, I am not|No, no lo soy]]".',
      targetText: '[[Are|Eres]] [[you|tú]] [[a|un]] [[student|estudiante]]?',
      expectedResponse: 'Yes, I am. / No, I am not.',
    },
    topicName: 'Speaking',
  },
  {
    id: 'a1-u1-l5-s9',
    type: 'pronunciation',
    level: 'A1',
    topic: 'Personal Info',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: '[[Answer|Responde]] [[orally|en voz alta]].',
      targetText: '[[Are|Eres]] [[you|tú]] [[from|de]] [[Spain|España]]?',
      expectedResponse: 'Yes, I am. / No, I am not.',
    },
    topicName: 'Speaking',
  },
  {
    id: 'a1-u1-l5-s10',
    type: 'pronunciation',
    level: 'A1',
    topic: 'Personal Info',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: '[[Answer|Responde]] [[orally|en voz alta]].',
      targetText: '[[Is|Es]] [[your|tu]] [[name|nombre]] [[Maria|María]]?',
      expectedResponse: 'Yes, it is. / No, it is not.',
    },
    topicName: 'Speaking',
  },
  {
    id: 'a1-u1-l5-s11',
    type: 'pronunciation',
    level: 'A1',
    topic: 'Personal Info',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: '[[Answer|Responde]] [[orally|en voz alta]].',
      targetText: '[[Are|Eres]] [[you|tú]] [[twenty|veinte]] [[years|años]] [[old|de edad]]?',
      expectedResponse: 'Yes, I am. / No, I am not.',
    },
    topicName: 'Speaking',
  },

  // ─── 12–15: Describir / producir frase guiada ──────────────────────────────
  {
    id: 'a1-u1-l5-s12',
    type: 'pronunciation',
    level: 'A1',
    topic: 'Personal Info',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: '[[Say|Di]] [[in|en]] [[voz alta|voz alta]]: [[your|tu]] [[name|nombre]] [[and|y]] [[where|dónde]] [[you|tú]] [[are|eres]] [[from|de]]. [[Model|Modelo]]: "[[My name is|Mi nombre es]] ... [[I am from|Soy de]] ...".',
      targetText: '[[My name is|Mi nombre es]] ____. [[I am from|Soy de]] ____.',
      expectedResponse: 'My name is [your name]. I am from [your city/country].',
    },
    topicName: 'Speaking',
  },
  {
    id: 'a1-u1-l5-s13',
    type: 'pronunciation',
    level: 'A1',
    topic: 'Personal Info',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: '[[Say|Di]] [[in|en]] [[voz alta|voz alta]] [[how|cuántos]] [[old|años]] [[you|tú]] [[are|tienes]]. [[Model|Modelo]]: "[[I am|Tengo]] ... [[years old|años]]".',
      targetText: '[[I am|Tengo]] ____ [[years old|años]].',
      expectedResponse: 'I am [number] years old.',
    },
    topicName: 'Speaking',
  },
  {
    id: 'a1-u1-l5-s14',
    type: 'pronunciation',
    level: 'A1',
    topic: 'Personal Info',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: '[[Say|Di]] [[in|en]] [[voz alta|voz alta]] [[if|si]] [[you|tú]] [[are|eres]] [[a|un/una]] [[student|estudiante]] [[or|o]] [[teacher|profesor]]. [[Model|Modelo]]: "[[I am a student|Soy estudiante]]" [[or|o]] "[[I am a teacher|Soy profesor]]".',
      targetText: '[[I am a|Soy]] ____. ([[student|estudiante]] / [[teacher|profesor]])',
      expectedResponse: 'I am a student. / I am a teacher.',
    },
    topicName: 'Speaking',
  },
  {
    id: 'a1-u1-l5-s15',
    type: 'pronunciation',
    level: 'A1',
    topic: 'Personal Info',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: '[[Give|Haz]] [[a|una]] [[short|breve]] [[introduction|presentación]] [[of|de]] [[yourself|ti mismo]] [[in|en]] [[about|unos]] [[3|tres]] [[or|o]] [[4|cuatro]] [[sentences|frases]]. [[Include|Incluye]]: [[name|nombre]], [[age|edad]], [[city|ciudad]] [[or|o]] [[country|país]], [[job|trabajo]] [[or|o]] [[student|estudiante]].',
      targetText: '[[My name is|Mi nombre es]] ... [[I am|Tengo]] ... [[years old|años]]. [[I am from|Soy de]] ... [[I am a|Soy]] ...',
      expectedResponse: 'My name is [X]. I am [N] years old. I am from [place]. I am a [student/teacher/...].',
    },
    topicName: 'Speaking',
  },
];
