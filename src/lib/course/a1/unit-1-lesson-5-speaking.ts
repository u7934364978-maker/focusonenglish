/**
 * Unidad 1 — Lección 5: Expresión oral
 * 15 ejercicios: 4 repetir, 3 leer en voz alta, 4 responder oralmente, 4 describir/producir frase
 * Descripción de la tarea en castellano, sin traducción.
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
      instructions: 'Escucha la frase y repítela en voz alta.',
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
      instructions: 'Escucha y repite en voz alta.',
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
      instructions: 'Escucha y repite en voz alta.',
      targetText: '[[I am twenty-five years old.|Tengo veinticinco años.]]',
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
      instructions: 'Escucha y repite en voz alta.',
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
      instructions: 'Lee la frase de abajo en voz alta.',
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
      instructions: 'Lee la frase en voz alta.',
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
      instructions: 'Lee la frase en voz alta.',
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
      instructions: 'Responde la pregunta en voz alta. Ejemplo: "[[Yes|Sí]], [[I|yo]] [[am|soy]]." o "[[No|No]], [[I|yo]] [[am|no soy]] [[not|no]]."',
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
      instructions: 'Responde la pregunta en voz alta.',
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
      instructions: 'Responde la pregunta en voz alta.',
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
      instructions: 'Responde la pregunta en voz alta.',
      targetText: '[[Are you twenty years old?|¿Tienes veinte años?]]',
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
      instructions: 'Di en voz alta tu nombre y de dónde eres. Modelo: "[[My|Mi]] [[name|nombre]] [[is|es]] … [[I|Yo]] [[am|soy]] [[from|de]] …"',
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
      instructions: 'Di en voz alta cuántos años tienes. Modelo en inglés: **I am** + número + **years old** (equivalente a *Tengo … años*).',
      targetText: '[[I am ____ years old.|Tengo ____ años.]]',
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
      instructions: 'Di en voz alta si eres estudiante o profesor. Modelo: "[[I am a|Soy]] [[student|estudiante]]." o "[[I am a|Soy]] [[teacher|profesor]]."',
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
      instructions: 'Haz una breve presentación en 3 o 4 frases. Incluye: nombre, edad, ciudad o país y profesión o estudiante.',
      targetText: '[[My name is … I am … years old. I am from … I am a …|Me llamo… Tengo… años. Soy de… Soy…]]',
      expectedResponse: 'My name is [X]. I am [N] years old. I am from [place]. I am a [student/teacher/...].',
    },
    topicName: 'Speaking',
  },
];
