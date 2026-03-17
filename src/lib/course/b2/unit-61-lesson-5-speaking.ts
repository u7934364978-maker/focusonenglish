/**
 * Unidad 61 B2 — Lección 5: Expresión oral (Grammar Boost B2+: Modal Deduction & Conditionals)
 * 12 ejercicios (B2+: práctica oral guiada)
 */

import { Exercise } from '@/lib/exercise-generator';

const LESSON_TITLE = '[[Speaking|Expresión oral]]';

export const UNIT_61_LESSON_5_SPEAKING: Exercise[] = [
  {
    id: 'b2-u61-l5-s1',
    type: 'pronunciation',
    level: 'B2',
    topic: 'grammar-boost-b2-plus',
    difficulty: 'medium',
    content: {
      title: LESSON_TITLE,
      instructions: 'Escucha la frase (o léela) y repítela en voz alta, marcando la entonación del modal.',
      targetText:
        '[[He must have forgotten the meeting|Debe haber olvidado la reunión]].',
      expectedResponse: 'He must have forgotten the meeting.',
    },
    topicName: 'Speaking',
  },
  {
    id: 'b2-u61-l5-s2',
    type: 'pronunciation',
    level: 'B2',
    topic: 'grammar-boost-b2-plus',
    difficulty: 'medium',
    content: {
      title: LESSON_TITLE,
      instructions: 'Escucha y repite en voz alta, destacando la deducción negativa.',
      targetText:
        '[[They can\'t have finished the project already|No pueden haber terminado el proyecto ya]].',
      expectedResponse: "They can't have finished the project already.",
    },
    topicName: 'Speaking',
  },
  {
    id: 'b2-u61-l5-s3',
    type: 'pronunciation',
    level: 'B2',
    topic: 'grammar-boost-b2-plus',
    difficulty: 'medium',
    content: {
      title: LESSON_TITLE,
      instructions: 'Escucha y repite en voz alta, marcando el condicional mixto.',
      targetText:
        '[[If I had saved more money, I wouldn\'t be so worried now|Si hubiera ahorrado más dinero, ahora no estaría tan preocupado]].',
      expectedResponse:
        "If I had saved more money, I wouldn't be so worried now.",
    },
    topicName: 'Speaking',
  },
  {
    id: 'b2-u61-l5-s4',
    type: 'pronunciation',
    level: 'B2',
    topic: 'grammar-boost-b2-plus',
    difficulty: 'medium',
    content: {
      title: LESSON_TITLE,
      instructions: 'Escucha y repite en voz alta, usando énfasis en el tercer condicional.',
      targetText:
        '[[If we had left earlier, we wouldn\'t have missed the train|Si nos hubiéramos ido antes, no habríamos perdido el tren]].',
      expectedResponse:
        "If we had left earlier, we wouldn't have missed the train.",
    },
    topicName: 'Speaking',
  },
  {
    id: 'b2-u61-l5-s5',
    type: 'speaking',
    level: 'B2',
    topic: 'grammar-boost-b2-plus',
    difficulty: 'medium',
    content: {
      title: LESSON_TITLE,
      instructions:
        'Habla durante 1 minuto describiendo un error que cometiste en el pasado. Usa: must have, can\'t have, might have.',
      prompt:
        '[[Describe a mistake you made in the past. Use: must have, can\'t have, might have.|Describe un error que cometiste en el pasado. Usa: must have, can\'t have, might have.]]',
      targetLevel: 'B2',
      writingType: 'description',
    },
    topicName: 'Speaking',
  },
  {
    id: 'b2-u61-l5-s6',
    type: 'speaking',
    level: 'B2',
    topic: 'grammar-boost-b2-plus',
    difficulty: 'medium',
    content: {
      title: LESSON_TITLE,
      instructions:
        'Responde en voz alta: ¿cómo cambiaría tu vida si hubieras tomado una decisión diferente en el pasado? Usa condicional mixto.',
      prompt:
        '[[How would your life be different if you had made a different decision in the past?|¿Cómo sería diferente tu vida si hubieras tomado una decisión diferente en el pasado?]]',
      targetLevel: 'B2',
      writingType: 'essay',
    },
    topicName: 'Speaking',
  },
  {
    id: 'b2-u61-l5-s7',
    type: 'speaking',
    level: 'B2',
    topic: 'grammar-boost-b2-plus',
    difficulty: 'medium',
    content: {
      title: LESSON_TITLE,
      instructions:
        'Habla en voz alta: da consejos a un amigo que suspendió un examen. Usa: should have, could have, ought to.',
      prompt:
        '[[Give advice to a friend who failed an exam. Use: should have, could have, ought to.|Da consejos a un amigo que suspendió un examen. Usa: should have, could have, ought to.]]',
      targetLevel: 'B2',
      writingType: 'description',
    },
    topicName: 'Speaking',
  },
  {
    id: 'b2-u61-l5-s8',
    type: 'speaking',
    level: 'B2',
    topic: 'grammar-boost-b2-plus',
    difficulty: 'medium',
    content: {
      title: LESSON_TITLE,
      instructions:
        'Practica preguntas. Di en voz alta al menos 3 preguntas usando: must have, might have, can\'t have.',
      prompt:
        '[[Ask at least three questions using: must have, might have, can\'t have.|Haz al menos tres preguntas usando: must have, might have, can\'t have.]]',
      targetLevel: 'B2',
      writingType: 'description',
    },
    topicName: 'Speaking',
  },
  {
    id: 'b2-u61-l5-s9',
    type: 'speaking',
    level: 'B2',
    topic: 'grammar-boost-b2-plus',
    difficulty: 'medium',
    content: {
      title: LESSON_TITLE,
      instructions:
        'Describe en voz alta una situación hipotética actual (ej. vivir en otro país). Usa segundo condicional.',
      prompt:
        '[[Describe a hypothetical situation (for example, living in another country). Use second conditional.|Describe una situación hipotética (por ejemplo, vivir en otro país). Usa segundo condicional.]]',
      targetLevel: 'B2',
      writingType: 'description',
    },
    topicName: 'Speaking',
  },
  {
    id: 'b2-u61-l5-s10',
    type: 'speaking',
    level: 'B2',
    topic: 'grammar-boost-b2-plus',
    difficulty: 'medium',
    content: {
      title: LESSON_TITLE,
      instructions:
        'Habla durante 1–2 minutos: explica una cadena de consecuencias usando third conditional (If ... had ..., ... would have ...).',
      prompt:
        '[[Explain a chain of consequences using third conditional.|Explica una cadena de consecuencias usando tercer condicional.]]',
      targetLevel: 'B2',
      writingType: 'essay',
    },
    topicName: 'Speaking',
  },
  {
    id: 'b2-u61-l5-s11',
    type: 'speaking',
    level: 'B2',
    topic: 'grammar-boost-b2-plus',
    difficulty: 'medium',
    content: {
      title: LESSON_TITLE,
      instructions:
        'Responde en voz alta: ¿qué reglas personales tienes para no repetir errores? Usa: I can\'t..., I must..., I should....',
      prompt:
        '[[What personal rules do you have to avoid repeating mistakes? Use: I can\'t..., I must..., I should....|¿Qué reglas personales tienes para no repetir errores? Usa: I can\'t..., I must..., I should....]]',
      targetLevel: 'B2',
      writingType: 'description',
    },
    topicName: 'Speaking',
  },
  {
    id: 'b2-u61-l5-s12',
    type: 'speaking',
    level: 'B2',
    topic: 'grammar-boost-b2-plus',
    difficulty: 'medium',
    content: {
      title: LESSON_TITLE,
      instructions:
        'Habla durante 1 minuto comparando dos versiones de tu vida: con y sin cierto hábito (ej. estudiar inglés cada día). Usa condicional mixto.',
      prompt:
        '[[Compare two versions of your life: with and without a certain habit (e.g. studying English every day). Use mixed conditional.|Compara dos versiones de tu vida: con y sin cierto hábito (ej. estudiar inglés cada día). Usa condicional mixto.]]',
      targetLevel: 'B2',
      writingType: 'essay',
    },
    topicName: 'Speaking',
  },
];

