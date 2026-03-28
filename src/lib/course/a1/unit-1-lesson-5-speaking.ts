/**
 * Unidad 1 — Lección 5: Expresión oral
 * 15 ejercicios: repetir, leer en voz alta, responder oralmente, producir frase guiada.
 * Instrucciones y targetText: [[EN|ES]]; expectedResponse en inglés plano (TTS / evaluación).
 */

import { Exercise } from '@/lib/exercise-generator';

const LESSON_TITLE = '[[Speaking practice|Expresión oral]]';

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
      instructions:
        '[[Listen to the phrase and repeat it aloud.|Escucha la frase y repítela en voz alta.]]',
      targetText: '[[Hello. My name is María.|Hola. Mi nombre es María.]]',
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
      instructions:
        '[[Listen and repeat aloud.|Escucha y repite en voz alta.]]',
      targetText: '[[I am from Madrid.|Soy de Madrid.]]',
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
      instructions:
        '[[Listen and repeat aloud.|Escucha y repite en voz alta.]]',
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
      instructions:
        '[[Listen and repeat aloud.|Escucha y repite en voz alta.]]',
      targetText: '[[Nice to meet you!|¡Encantado de conocerte!]]',
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
      instructions:
        '[[Read the sentence below aloud.|Lee la frase de abajo en voz alta.]]',
      targetText: '[[Good morning. I am a student.|Buenos días. Soy estudiante.]]',
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
      instructions:
        '[[Read the sentence aloud.|Lee la frase en voz alta.]]',
      targetText: '[[You are my friend.|Tú eres mi amigo o amiga.]]',
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
      instructions:
        '[[Read the sentence aloud.|Lee la frase en voz alta.]]',
      targetText: '[[I am from Barcelona, Spain.|Soy de Barcelona, España.]]',
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
      instructions:
        '[[Answer the question aloud. You can say *Yes, I am.* or *No, I am not.*|Responde en voz alta. Puedes decir *Yes, I am.* o *No, I am not.*]]',
      targetText: '[[Are you a student?|¿Eres estudiante?]]',
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
      instructions:
        '[[Answer aloud with *Yes, I am.* or *No, I am not.*|Responde con *Yes, I am.* o *No, I am not.*]]',
      targetText: '[[Are you from Spain?|¿Eres de España?]]',
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
      instructions:
        '[[Answer aloud with *Yes, it is.* or *No, it is not.*|Responde con *Yes, it is.* o *No, it is not.*]]',
      targetText: '[[Is your name María?|¿Tu nombre es María?]]',
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
      instructions:
        '[[Answer aloud with *Yes, I am.* or *No, I am not.*|Responde con *Yes, I am.* o *No, I am not.*]]',
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
      instructions:
        '[[Say your name and where you are from. Pattern: *My name is … I am from …*|Di tu nombre y de dónde eres. Modelo: *My name is … I am from …*]]',
      targetText: '[[My name is …. I am from….|Mi nombre es …. Soy de….]]',
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
      instructions:
        '[[Say how old you are. Pattern: *I am* + number + *years old* (like *Tengo … años*).|Di cuántos años tienes. Patrón: *I am* + número + *years old*.]]',
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
      instructions:
        '[[Say if you are a student or a teacher. Examples: *I am a student.* / *I am a teacher.*|Di si eres estudiante o profesor. Ejemplos: *I am a student.* / *I am a teacher.*]]',
      targetText: '[[I am a student. / I am a teacher.|Soy estudiante. / Soy profesor o profesora.]]',
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
      instructions:
        '[[Give a short introduction in 3–4 sentences: name, age, city/country, job or student.|Haz una presentación breve: nombre, edad, ciudad o país, trabajo o estudiante.]]',
      targetText:
        '[[My name is …. I am … years old. I am from …. I am a …. |Me llamo…. Tengo … años. Soy de…. Soy….]]',
      expectedResponse: 'My name is [X]. I am [N] years old. I am from [place]. I am a [student/teacher/...].',
    },
    topicName: 'Speaking',
  },
];
