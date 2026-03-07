/**
 * Unidad 6 — Lección 5: Expresión oral
 * 15 ejercicios: 4 repetir, 3 leer en voz alta, 4 responder oralmente, 4 producir frases guiadas.
 * Instrucciones en español puro, sin frases modelo en inglés embebidas.
 */

import { Exercise } from '@/lib/exercise-generator';

const LESSON_TITLE = 'Expresión oral';
const TOPIC = 'Family & Possessives';

export const UNIT_6_LESSON_5_SPEAKING: Exercise[] = [
  // ─── 1–4: Repetir frases (posesivos y familia) ─────────────────────────────
  {
    id: 'a1-u6-l5-s1',
    type: 'pronunciation',
    level: 'A1',
    topic: TOPIC,
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: 'Escucha la frase y repítela en voz alta.',
      targetText: '[[My|Mi]] [[mother|madre]] [[is|es]] [[a|una]] [[teacher|profesora]].',
      expectedResponse: 'My mother is a teacher.',
    },
    topicName: 'Speaking',
  },
  {
    id: 'a1-u6-l5-s2',
    type: 'pronunciation',
    level: 'A1',
    topic: TOPIC,
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: 'Escucha y repite en voz alta.',
      targetText: '[[His|Su]] [[father|padre]] [[works|trabaja]] [[in|en]] [[Madrid|Madrid]].',
      expectedResponse: 'His father works in Madrid.',
    },
    topicName: 'Speaking',
  },
  {
    id: 'a1-u6-l5-s3',
    type: 'pronunciation',
    level: 'A1',
    topic: TOPIC,
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: 'Escucha y repite en voz alta.',
      targetText: '[[Our|Nuestra]] [[grandmother|abuela]] [[lives|vive]] [[here|aquí]].',
      expectedResponse: 'Our grandmother lives here.',
    },
    topicName: 'Speaking',
  },
  {
    id: 'a1-u6-l5-s4',
    type: 'pronunciation',
    level: 'A1',
    topic: TOPIC,
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: 'Escucha y repite en voz alta.',
      targetText: "[[That|Esa]] [[is|es]] [[Tom's|de Tom]] [[sister|hermana]].",
      expectedResponse: "That is Tom's sister.",
    },
    topicName: 'Speaking',
  },

  // ─── 5–7: Leer en voz alta (posesivo 's) ───────────────────────────────────
  {
    id: 'a1-u6-l5-s5',
    type: 'pronunciation',
    level: 'A1',
    topic: TOPIC,
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: 'Lee la frase en voz alta.',
      targetText: "[[Ana's|De Ana]] [[brother|hermano]] [[is|es]] [[tall|alto]].",
      expectedResponse: "Ana's brother is tall.",
    },
    topicName: 'Speaking',
  },
  {
    id: 'a1-u6-l5-s6',
    type: 'pronunciation',
    level: 'A1',
    topic: TOPIC,
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: 'Lee la frase en voz alta.',
      targetText: "[[My|Mi]] [[father's|de mi padre]] [[car|coche]] [[is|es]] [[red|rojo]].",
      expectedResponse: "My father's car is red.",
    },
    topicName: 'Speaking',
  },
  {
    id: 'a1-u6-l5-s7',
    type: 'pronunciation',
    level: 'A1',
    topic: TOPIC,
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: 'Lee la frase en voz alta.',
      targetText: '[[Their|Su]] [[son|hijo]] [[studies|estudia]] [[every|todos]] [[day|los días]].',
      expectedResponse: 'Their son studies every day.',
    },
    topicName: 'Speaking',
  },

  // ─── 8–11: Responder oralmente (preguntas sobre la familia) ─────────────────
  {
    id: 'a1-u6-l5-s8',
    type: 'pronunciation',
    level: 'A1',
    topic: TOPIC,
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: 'Contesta la pregunta en voz alta. Por ejemplo: Yes, I do. / No, I don\'t.',
      targetText: '[[Do|Tienes]] [[you|tú]] [[have|tener]] [[a|una]] [[sister|hermana]]?',
      expectedResponse: 'Yes, I do. / No, I don\'t.',
    },
    topicName: 'Speaking',
  },
  {
    id: 'a1-u6-l5-s9',
    type: 'pronunciation',
    level: 'A1',
    topic: TOPIC,
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: 'Contesta la pregunta en voz alta.',
      targetText: '[[Is|Es]] [[your|tu]] [[mother|madre]] [[a|una]] [[teacher|profesora]]?',
      expectedResponse: 'Yes, she is. / No, she isn\'t.',
    },
    topicName: 'Speaking',
  },
  {
    id: 'a1-u6-l5-s10',
    type: 'pronunciation',
    level: 'A1',
    topic: TOPIC,
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: 'Contesta la pregunta en voz alta.',
      targetText: '[[Where|Dónde]] [[does|vive]] [[your|tu]] [[grandmother|abuela]] [[live|vivir]]?',
      expectedResponse: 'She lives in [place].',
    },
    topicName: 'Speaking',
  },
  {
    id: 'a1-u6-l5-s11',
    type: 'pronunciation',
    level: 'A1',
    topic: TOPIC,
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: 'Contesta la pregunta en voz alta.',
      targetText: '[[How many|Cuántos]] [[brothers|hermanos]] and [[sisters|hermanas]] [[do you have|tienes]]?',
      expectedResponse: 'I have [number] brother(s) and [number] sister(s).',
    },
    topicName: 'Speaking',
  },

  // ─── 12–15: Producir frases guiadas (familia propia) ───────────────────────
  {
    id: 'a1-u6-l5-s12',
    type: 'pronunciation',
    level: 'A1',
    topic: TOPIC,
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: 'Di en voz alta el nombre de tu madre o padre. Usa la estructura: My mother\'s name is … / My father\'s name is …',
      targetText: '[[My|Mi]] ____ [[name|nombre]] [[is|es]] ____.',
      expectedResponse: 'My mother\'s name is [name]. / My father\'s name is [name].',
    },
    topicName: 'Speaking',
  },
  {
    id: 'a1-u6-l5-s13',
    type: 'pronunciation',
    level: 'A1',
    topic: TOPIC,
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: 'Di en voz alta cuántos hermanos y hermanas tienes. Usa: I have … brother(s) and … sister(s).',
      targetText: '[[I|Yo]] [[have|tengo]] ____ [[brother|hermano]] and ____ [[sister|hermana]].',
      expectedResponse: 'I have [number] brother(s) and [number] sister(s).',
    },
    topicName: 'Speaking',
  },
  {
    id: 'a1-u6-l5-s14',
    type: 'pronunciation',
    level: 'A1',
    topic: TOPIC,
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: 'Di en voz alta qué hace tu padre o tu madre (trabajo). Usa: My father is … / My mother is …',
      targetText: '[[My|Mi]] ____ [[is|es]] [[a|un/una]] ____.',
      expectedResponse: 'My father is a [job]. / My mother is a [job].',
    },
    topicName: 'Speaking',
  },
  {
    id: 'a1-u6-l5-s15',
    type: 'pronunciation',
    level: 'A1',
    topic: TOPIC,
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: 'Haz una presentación breve de tu familia en tres o cuatro frases. Incluye: padres, hermanos si los tienes, y dónde viven los abuelos si lo sabes.',
      targetText: '[[My|Mi]] [[family|familia]]… [[My|Mi]] [[mother|madre]]… [[My|Mi]] [[father|padre]]…',
      expectedResponse: 'My family is [big/small]. My mother is [name/job]. My father is [name/job]. [Our grandmother lives in …].',
    },
    topicName: 'Speaking',
  },
];
