/**
 * Unidad 19 B2 — Lección 3: Comprensión lectora (Sport)
 * 18 actividades (B2: más vocabulario y complejidad que B1)
 */

import { Exercise } from '@/lib/exercise-generator';

const LESSON_TITLE = '[[Reading|Comprensión lectora]]';
const READING_TRANSCRIPT = `[[Read|Lee]] [[the text|el texto]] [[below|abajo]] [[about|sobre]] [[Sport|Sport]]. [[Then|Después]] [[answer|responde]] [[the questions|las preguntas]].`;

const INSTRUCTIONS = 'Lee el texto. Después responde las preguntas.';

const QUESTIONS = [
  { question: '[[What|Qué]] [[is the main topic|es el tema principal]]?', options: ['[[Option A|Opción A]]', '[[Option B|Opción B]]', '[[Option C|Opción C]]'], correctAnswer: 0, explanation: '[[Based on the text|Según el texto]].' },
  { question: '[[According to|Según]] [[the text|el texto]], [[what|qué]] [[happened|pasó]]?', options: ['[[Option A|Opción A]]', '[[Option B|Opción B]]', '[[Option C|Opción C]]'], correctAnswer: 0, explanation: '[[The text says|El texto dice]].' },
  { question: '[[Why|Por qué]] [[did this happen|pasó esto]]?', options: ['[[Option A|Opción A]]', '[[Option B|Opción B]]', '[[Option C|Opción C]]'], correctAnswer: 0, explanation: '[[Based on the text|Según el texto]].' },
  { question: '[[The author|El autor]] [[believes|cree]] [[that|que]] ____.', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'True', explanation: '[[The text says|El texto dice]].' },
  { question: '[[What|Qué]] [[can we infer|podemos inferir]]?', options: ['[[Option A|Opción A]]', '[[Option B|Opción B]]', '[[Option C|Opción C]]'], correctAnswer: 0, explanation: '[[Based on the text|Según el texto]].' },
  { question: '[[The text|El texto]] [[states|afirma]] [[that|que]] ____.', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'True', explanation: '[[The text says|El texto dice]].' },
  { question: '[[What|Qué]] [[is the purpose|es el propósito]] [[of|del]] [[the text|texto]]?', options: ['[[Option A|Opción A]]', '[[Option B|Opción B]]', '[[Option C|Opción C]]'], correctAnswer: 0, explanation: '[[Based on the text|Según el texto]].' },
  { question: '[[According to|Según]] [[the text|el texto]], ____.', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'True', explanation: '[[The text says|El texto dice]].' },
  { question: '[[What|Qué]] [[does the author suggest|sugiere el autor]]?', options: ['[[Option A|Opción A]]', '[[Option B|Opción B]]', '[[Option C|Opción C]]'], correctAnswer: 0, explanation: '[[Based on the text|Según el texto]].' },
  { question: '[[The main idea|La idea principal]] [[is|es]] ____.', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'True', explanation: '[[The text says|El texto dice]].' },
  { question: '[[What|Qué]] [[can we conclude|podemos concluir]]?', options: ['[[Option A|Opción A]]', '[[Option B|Opción B]]', '[[Option C|Opción C]]'], correctAnswer: 0, explanation: '[[Based on the text|Según el texto]].' },
  { question: '[[The text|El texto]] [[mentions|menciona]] ____.', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'True', explanation: '[[The text says|El texto dice]].' },
  { question: '[[What|Qué]] [[is the tone|es el tono]] [[of|del]] [[the text|texto]]?', options: ['[[Option A|Opción A]]', '[[Option B|Opción B]]', '[[Option C|Opción C]]'], correctAnswer: 0, explanation: '[[Based on the text|Según el texto]].' },
  { question: '[[According to|Según]] [[the text|el texto]], [[the author|el autor]] ____.', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'True', explanation: '[[The text says|El texto dice]].' },
  { question: '[[What|Cuál]] [[is|es]] [[the main topic|el tema principal]]?', options: ['[[Option A|Opción A]]', '[[Option B|Opción B]]', '[[Option C|Opción C]]'], correctAnswer: 0, explanation: '[[The text|El texto]] [[describes|describe]].' },
  { question: '[[What|Qué]] [[detail|detalle]] [[supports|apoya]] [[the main idea|la idea principal]]?', options: ['[[Option A|Opción A]]', '[[Option B|Opción B]]', '[[Option C|Opción C]]'], correctAnswer: 0, explanation: '[[Based on the text|Según el texto]].' },
  { question: '[[The text|El texto]] [[implies|implica]] [[that|que]] ____.', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'True', explanation: '[[The text says|El texto dice]].' },
  { question: '[[What|Qué]] [[vocabulary|vocabulario]] [[is key|es clave]] [[in|en]] [[this text|este texto]]?', options: ['[[Option A|Opción A]]', '[[Option B|Opción B]]', '[[Option C|Opción C]]'], correctAnswer: 0, explanation: '[[Based on the text|Según el texto]].' },
];

export const UNIT_19_LESSON_3_READING: Exercise[] = QUESTIONS.map((q, i) => ({
  id: `b2-u19-l3-r${i + 1}`,
  type: 'reading',
  level: 'B2',
  topic: 'Sport',
  difficulty: 'medium',
  transcript: READING_TRANSCRIPT,
  content: { title: LESSON_TITLE, instructions: INSTRUCTIONS, questions: [q] },
  topicName: 'Reading',
}));
