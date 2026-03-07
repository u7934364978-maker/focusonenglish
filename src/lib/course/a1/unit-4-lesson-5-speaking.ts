/**
 * Unidad 4 — Lección 5: Expresión oral
 * 15 ejercicios: 4 repetición, 3 lectura en voz alta, 4 respuesta oral, 4 frase guiada
 * Título de lección: "Expresión oral"
 */

import { Exercise } from '@/lib/exercise-generator';

const LESSON_TITLE = 'Expresión oral';
const INSTRUCTIONS_REPEAT = 'Escucha la frase y repítela en voz alta.';
const INSTRUCTIONS_READ = 'Lee la frase en voz alta.';
const INSTRUCTIONS_ANSWER = 'Contesta en voz alta.';
const INSTRUCTIONS_GUIDED = 'Di la frase en voz alta según la indicación.';

export const UNIT_4_LESSON_5_SPEAKING: Exercise[] = [
  // ─── 1–4: Repetición ─────────────────────────────────────────────────────
  {
    id: 'a1-u4-l5-s1',
    type: 'pronunciation',
    level: 'A1',
    topic: 'Articles and Plurals',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_REPEAT,
      targetText: '[[This|Esto]] [[is|es]] [[a|un]] [[pen.|bolígrafo.]]',
      expectedResponse: 'This is a pen.',
    },
    topicName: 'Speaking',
  },
  {
    id: 'a1-u4-l5-s2',
    type: 'pronunciation',
    level: 'A1',
    topic: 'Articles and Plurals',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_REPEAT,
      targetText: '[[That|Eso]] [[is|es]] [[an|una]] [[eraser.|goma.]]',
      expectedResponse: 'That is an eraser.',
    },
    topicName: 'Speaking',
  },
  {
    id: 'a1-u4-l5-s3',
    type: 'pronunciation',
    level: 'A1',
    topic: 'Articles and Plurals',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_REPEAT,
      targetText: '[[These|Estos]] [[are|son]] [[books.|libros.]]',
      expectedResponse: 'These are books.',
    },
    topicName: 'Speaking',
  },
  {
    id: 'a1-u4-l5-s4',
    type: 'pronunciation',
    level: 'A1',
    topic: 'Articles and Plurals',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_REPEAT,
      targetText: '[[Those|Esas]] [[are|son]] [[chairs.|sillas.]]',
      expectedResponse: 'Those are chairs.',
    },
    topicName: 'Speaking',
  },

  // ─── 5–7: Lectura en voz alta ─────────────────────────────────────────────
  {
    id: 'a1-u4-l5-s5',
    type: 'pronunciation',
    level: 'A1',
    topic: 'Classroom',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_READ,
      targetText: '[[There|Hay]] [[is|está]] [[a|una]] [[board|pizarra]] [[on|en]] [[the|la]] [[wall.|pared.]]',
      expectedResponse: 'There is a board on the wall.',
    },
    topicName: 'Speaking',
  },
  {
    id: 'a1-u4-l5-s6',
    type: 'pronunciation',
    level: 'A1',
    topic: 'Classroom',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_READ,
      targetText: '[[There|Hay]] [[are|hay]] [[three|tres]] [[red|rojos]] [[pens|bolígrafos]] [[on|en]] [[the|el]] [[desk.|escritorio.]]',
      expectedResponse: 'There are three red pens on the desk.',
    },
    topicName: 'Speaking',
  },
  {
    id: 'a1-u4-l5-s7',
    type: 'pronunciation',
    level: 'A1',
    topic: 'Colors',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_READ,
      targetText: '[[My|Mi]] [[bag|mochila]] [[is|es]] [[black|negra]] and [[my|mi]] [[pencil|lápiz]] [[is|es]] [[green.|verde.]]',
      expectedResponse: 'My bag is black and my pencil is green.',
    },
    topicName: 'Speaking',
  },

  // ─── 8–11: Respuesta oral ─────────────────────────────────────────────────
  {
    id: 'a1-u4-l5-s8',
    type: 'pronunciation',
    level: 'A1',
    topic: 'Classroom',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_ANSWER,
      targetText: '[[What|¿Qué]] [[is|es]] [[this?|esto?]] — [[It|Es]] [[is|es]] [[a|un]] [[ruler.|regla.]]',
      expectedResponse: 'It is a ruler.',
    },
    topicName: 'Speaking',
  },
  {
    id: 'a1-u4-l5-s9',
    type: 'pronunciation',
    level: 'A1',
    topic: 'Classroom',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_ANSWER,
      targetText: '[[Is|¿Es]] [[that|eso]] [[a|un]] [[book?|libro?]] — [[Yes,|Sí,]] [[it|lo]] [[is.|es.]]',
      expectedResponse: 'Yes, it is.',
    },
    topicName: 'Speaking',
  },
  {
    id: 'a1-u4-l5-s10',
    type: 'pronunciation',
    level: 'A1',
    topic: 'Classroom',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_ANSWER,
      targetText: '[[How|¿Cuántos]] [[many|cuántos]] [[pens|bolígrafos]] [[are|hay]] [[there?|hay?]] — [[There|Hay]] [[are|hay]] [[four|cuatro]] [[pens.|bolígrafos.]]',
      expectedResponse: 'There are four pens.',
    },
    topicName: 'Speaking',
  },
  {
    id: 'a1-u4-l5-s11',
    type: 'pronunciation',
    level: 'A1',
    topic: 'Classroom',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_ANSWER,
      targetText: '[[Are|¿Son]] [[these|estas]] [[rulers?|reglas?]] — [[Yes,|Sí,]] [[they|lo]] [[are.|son.]]',
      expectedResponse: 'Yes, they are.',
    },
    topicName: 'Speaking',
  },

  // ─── 12–15: Frase guiada ──────────────────────────────────────────────────
  {
    id: 'a1-u4-l5-s12',
    type: 'pronunciation',
    level: 'A1',
    topic: 'Colors',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: 'Di de qué color es el objeto indicado.',
      targetText: '[[The|El]] [[pen|bolígrafo]] [[is|es]] [[blue.|azul.]]',
      expectedResponse: 'The pen is blue.',
    },
    topicName: 'Speaking',
  },
  {
    id: 'a1-u4-l5-s13',
    type: 'pronunciation',
    level: 'A1',
    topic: 'Classroom',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: 'Describe dos objetos usando "this" y "that".',
      targetText: '[[This|Esto]] [[is|es]] [[a|un]] [[pencil|lápiz]] and [[that|eso]] [[is|es]] [[a|un]] [[notebook.|cuaderno.]]',
      expectedResponse: 'This is a pencil and that is a notebook.',
    },
    topicName: 'Speaking',
  },
  {
    id: 'a1-u4-l5-s14',
    type: 'pronunciation',
    level: 'A1',
    topic: 'Classroom',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: 'Pregunta y contesta sobre la cantidad de objetos.',
      targetText: '[[How|¿Cuántos]] [[many|cuántos]] [[books|libros]] [[are|hay]] [[there?|hay?]] — [[There|Hay]] [[are|hay]] [[six|seis]] [[books.|libros.]]',
      expectedResponse: 'How many books are there? There are six books.',
    },
    topicName: 'Speaking',
  },
  {
    id: 'a1-u4-l5-s15',
    type: 'pronunciation',
    level: 'A1',
    topic: 'Classroom',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: 'Describe objetos cercanos y lejanos usando los cuatro demostrativos.',
      targetText: '[[This|Esto]] [[is|es]] [[my|mi]] [[bag,|mochila,]] [[that|eso]] [[is|es]] [[a|un]] [[desk,|escritorio,]] [[these|estos]] [[are|son]] [[pens|bolígrafos]] and [[those|esos]] [[are|son]] [[chairs.|sillas.]]',
      expectedResponse: 'This is my bag, that is a desk, these are pens and those are chairs.',
    },
    topicName: 'Speaking',
  },
];
