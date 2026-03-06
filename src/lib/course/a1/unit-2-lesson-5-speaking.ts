/**
 * Unidad 2 — Lección 5: Expresión oral
 * 15 ejercicios: 4 repetir, 3 leer en voz alta, 4 responder oralmente, 4 producción guiada
 * Descripción de la tarea siempre en inglés.
 */

import { Exercise } from '@/lib/exercise-generator';

const LESSON_TITLE = 'Expresión oral';

export const UNIT_2_LESSON_5_SPEAKING: Exercise[] = [
  // ─── 1–4: Repetir (pronunciación) ─────────────────────────────────────────
  {
    id: 'a1-u2-l5-s1',
    type: 'pronunciation',
    level: 'A1',
    topic: 'Countries and Nationalities',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: 'Listen to the phrase and repeat it aloud.',
      targetText: '[[She|Ella]] [[is|es]] [[French|francesa]]. [[She|Ella]] [[is|es]] [[from|de]] [[France|Francia]].',
      expectedResponse: 'She is French. She is from France.',
    },
    topicName: 'Speaking',
  },
  {
    id: 'a1-u2-l5-s2',
    type: 'pronunciation',
    level: 'A1',
    topic: 'Countries and Nationalities',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: 'Listen and repeat aloud.',
      targetText: '[[He|Él]] [[is|es]] [[Spanish|español]]. [[He|Él]] [[is|es]] [[from|de]] [[Spain|España]].',
      expectedResponse: 'He is Spanish. He is from Spain.',
    },
    topicName: 'Speaking',
  },
  {
    id: 'a1-u2-l5-s3',
    type: 'pronunciation',
    level: 'A1',
    topic: 'Countries and Nationalities',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: 'Listen and repeat aloud.',
      targetText: '[[They|Ellos]] [[are|son]] [[American|americanos]]. [[They|Ellos]] [[are|son]] [[from|de]] [[the United States|Estados Unidos]].',
      expectedResponse: 'They are American. They are from the United States.',
    },
    topicName: 'Speaking',
  },
  {
    id: 'a1-u2-l5-s4',
    type: 'pronunciation',
    level: 'A1',
    topic: 'Countries and Nationalities',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: 'Listen and repeat aloud.',
      targetText: '[[We|Nosotros]] [[are|somos]] [[Italian|italianos]]. [[We|Nosotros]] [[are|somos]] [[from|de]] [[Italy|Italia]].',
      expectedResponse: 'We are Italian. We are from Italy.',
    },
    topicName: 'Speaking',
  },

  // ─── 5–7: Leer en voz alta ───────────────────────────────────────────────
  {
    id: 'a1-u2-l5-s5',
    type: 'pronunciation',
    level: 'A1',
    topic: 'Countries and Nationalities',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: 'Read the sentence below aloud.',
      targetText: '[[My|Mi]] [[friend|amiga]] [[Ana|Ana]] [[is|es]] [[Brazilian|brasileña]]. [[She|Ella]] [[is|es]] [[from|de]] [[Brazil|Brasil]].',
      expectedResponse: 'My friend Ana is Brazilian. She is from Brazil.',
    },
    topicName: 'Speaking',
  },
  {
    id: 'a1-u2-l5-s6',
    type: 'pronunciation',
    level: 'A1',
    topic: 'Countries and Nationalities',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: 'Read the sentence aloud.',
      targetText: '[[My|Mi]] [[classmate|compañero]] [[Tom|Tom]] [[is|es]] [[British|británico]]. [[He|Él]] [[is|es]] [[from|de]] [[England|Inglaterra]].',
      expectedResponse: 'My classmate Tom is British. He is from England.',
    },
    topicName: 'Speaking',
  },
  {
    id: 'a1-u2-l5-s7',
    type: 'pronunciation',
    level: 'A1',
    topic: 'Countries and Nationalities',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: 'Read the sentence aloud.',
      targetText: '[[Carlos|Carlos]] [[and|y]] [[Mia|Mia]] [[are|son]] [[from|de]] [[different|diferentes]] [[countries|países]]. [[He|Él]] [[is|es]] [[Mexican|mexicano]] [[and|y]] [[she|ella]] [[is|es]] [[German|alemana]].',
      expectedResponse: 'Carlos and Mia are from different countries. He is Mexican and she is German.',
    },
    topicName: 'Speaking',
  },

  // ─── 8–11: Responder oralmente (pregunta cerrada) ─────────────────────────
  {
    id: 'a1-u2-l5-s8',
    type: 'pronunciation',
    level: 'A1',
    topic: 'Countries and Nationalities',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: 'Answer the question aloud. Example: "Yes, she is." or "No, she is not."',
      targetText: '[[Is|Es]] [[she|ella]] [[from|de]] [[France|Francia]]?',
      expectedResponse: 'Yes, she is. / No, she is not.',
    },
    topicName: 'Speaking',
  },
  {
    id: 'a1-u2-l5-s9',
    type: 'pronunciation',
    level: 'A1',
    topic: 'Countries and Nationalities',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: 'Answer the question aloud.',
      targetText: '[[Is|Es]] [[he|él]] [[Spanish|español]]?',
      expectedResponse: 'Yes, he is. / No, he is not.',
    },
    topicName: 'Speaking',
  },
  {
    id: 'a1-u2-l5-s10',
    type: 'pronunciation',
    level: 'A1',
    topic: 'Countries and Nationalities',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: 'Answer the question aloud.',
      targetText: '[[Are|Son]] [[they|ellos]] [[from|de]] [[Italy|Italia]]?',
      expectedResponse: 'Yes, they are. / No, they are not.',
    },
    topicName: 'Speaking',
  },
  {
    id: 'a1-u2-l5-s11',
    type: 'pronunciation',
    level: 'A1',
    topic: 'Countries and Nationalities',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: 'Answer the question aloud.',
      targetText: '[[Is|Es]] [[your|tu]] [[friend|amigo/a]] [[American|americano/a]]?',
      expectedResponse: 'Yes, he/she is. / No, he/she is not.',
    },
    topicName: 'Speaking',
  },

  // ─── 12–15: Producción guiada ──────────────────────────────────────────────
  {
    id: 'a1-u2-l5-s12',
    type: 'pronunciation',
    level: 'A1',
    topic: 'Countries and Nationalities',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: 'Say aloud: where you are from and your nationality. Model: "I am from … I am …"',
      targetText: '[[I am from|Soy de]] ____. [[I am|Soy]] ____.',
      expectedResponse: 'I am from [country]. I am [nationality].',
    },
    topicName: 'Speaking',
  },
  {
    id: 'a1-u2-l5-s13',
    type: 'pronunciation',
    level: 'A1',
    topic: 'Countries and Nationalities',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: 'Say aloud where a friend is from and their nationality. Model: "He/She is from … He/She is …"',
      targetText: '[[He/She|Él/Ella]] [[is from|es de]] ____. [[He/She|Él/Ella]] [[is|es]] ____.',
      expectedResponse: 'He/She is from [country]. He/She is [nationality].',
    },
    topicName: 'Speaking',
  },
  {
    id: 'a1-u2-l5-s14',
    type: 'pronunciation',
    level: 'A1',
    topic: 'Countries and Nationalities',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: 'Say aloud two countries and their nationalities. Model: "People from France are French. People from Germany are German."',
      targetText: '[[People from|Las personas de]] ____ [[are|son]] ____. [[People from|Las personas de]] ____ [[are|son]] ____.',
      expectedResponse: 'People from [country 1] are [nationality 1]. People from [country 2] are [nationality 2].',
    },
    topicName: 'Speaking',
  },
  {
    id: 'a1-u2-l5-s15',
    type: 'pronunciation',
    level: 'A1',
    topic: 'Countries and Nationalities',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: 'Describe two people you know. Say their name, where they are from, and their nationality. Use 4–6 sentences.',
      targetText: 'My friend … is from … He/She is … My other friend … is from … He/She is …',
      expectedResponse: 'My friend [name] is from [country]. He/She is [nationality]. My other friend [name] is from [country]. He/She is [nationality].',
    },
    topicName: 'Speaking',
  },
];
