/**
 * Unidad 7 B2 — Lección 4: Comprensión auditiva (Family)
 * 18 actividades (B2: más vocabulario y complejidad que B1)
 */

import { Exercise } from '@/lib/exercise-generator';

const LESSON_TITLE = '[[Listening|Comprensión auditiva]]';
const LISTENING_TRANSCRIPT = `[[Listen|Escucha]] [[to the audio|el audio]] [[about|sobre]] [[Family|Family]]. [[Then|Después]] [[answer|responde]] [[the questions|las preguntas]].`;

const INSTRUCTIONS = 'Escucha el audio. Puedes leer la transcripción. Después responde.';

const QUESTIONS = [
  { question: '[[What|Qué]] [[is the main topic|es el tema principal]]?', options: ['[[Option A|Opción A]]', '[[Option B|Opción B]]', '[[Option C|Opción C]]'], correctAnswer: 0, explanation: '[[The speaker says|El hablante dice]].' },
  { question: '[[According to|Según]] [[the speaker|el hablante]], [[what|qué]] [[happened|pasó]]?', options: ['[[Option A|Opción A]]', '[[Option B|Opción B]]', '[[Option C|Opción C]]'], correctAnswer: 0, explanation: '[[The speaker says|El hablante dice]].' },
  { question: '[[Why|Por qué]] [[did this happen|pasó esto]]?', options: ['[[Option A|Opción A]]', '[[Option B|Opción B]]', '[[Option C|Opción C]]'], correctAnswer: 0, explanation: '[[The speaker says|El hablante dice]].' },
  { question: '[[The speaker|El hablante]] [[believes|cree]] [[that|que]] ____.', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'True', explanation: '[[The speaker says|El hablante dice]].' },
  { question: '[[What|Qué]] [[can we infer|podemos inferir]]?', options: ['[[Option A|Opción A]]', '[[Option B|Opción B]]', '[[Option C|Opción C]]'], correctAnswer: 0, explanation: '[[The speaker says|El hablante dice]].' },
  { question: '[[The speaker|El hablante]] [[states|afirma]] [[that|que]] ____.', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'True', explanation: '[[The speaker says|El hablante dice]].' },
  { question: '[[What|Qué]] [[is the purpose|es el propósito]]?', options: ['[[Option A|Opción A]]', '[[Option B|Opción B]]', '[[Option C|Opción C]]'], correctAnswer: 0, explanation: '[[The speaker says|El hablante dice]].' },
  { question: '[[According to|Según]] [[the speaker|el hablante]], ____.', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'True', explanation: '[[The speaker says|El hablante dice]].' },
  { question: '[[What|Qué]] [[does the speaker suggest|sugiere el hablante]]?', options: ['[[Option A|Opción A]]', '[[Option B|Opción B]]', '[[Option C|Opción C]]'], correctAnswer: 0, explanation: '[[The speaker says|El hablante dice]].' },
  { question: '[[The main idea|La idea principal]] [[is|es]] ____.', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'True', explanation: '[[The speaker says|El hablante dice]].' },
  { question: '[[What|Qué]] [[can we conclude|podemos concluir]]?', options: ['[[Option A|Opción A]]', '[[Option B|Opción B]]', '[[Option C|Opción C]]'], correctAnswer: 0, explanation: '[[The speaker says|El hablante dice]].' },
  { question: '[[The speaker|El hablante]] [[mentions|menciona]] ____.', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'True', explanation: '[[The speaker says|El hablante dice]].' },
  { question: '[[What|Qué]] [[is the tone|es el tono]]?', options: ['[[Option A|Opción A]]', '[[Option B|Opción B]]', '[[Option C|Opción C]]'], correctAnswer: 0, explanation: '[[The speaker says|El hablante dice]].' },
  { question: '[[According to|Según]] [[the speaker|el hablante]], ____.', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'True', explanation: '[[The speaker says|El hablante dice]].' },
  { question: '[[What|Cuál]] [[is|es]] [[the main topic|el tema principal]]?', options: ['[[Option A|Opción A]]', '[[Option B|Opción B]]', '[[Option C|Opción C]]'], correctAnswer: 0, explanation: '[[The listening|La escucha]] [[describes|describe]].' },
  { question: '[[What|Qué]] [[detail|detalle]] [[supports|apoya]] [[the main idea|la idea principal]]?', options: ['[[Option A|Opción A]]', '[[Option B|Opción B]]', '[[Option C|Opción C]]'], correctAnswer: 0, explanation: '[[The speaker says|El hablante dice]].' },
  { question: '[[The speaker|El hablante]] [[implies|implica]] [[that|que]] ____.', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'True', explanation: '[[The speaker says|El hablante dice]].' },
  { question: '[[What|Qué]] [[vocabulary|vocabulario]] [[is key|es clave]] [[in|en]] [[this listening|esta escucha]]?', options: ['[[Option A|Opción A]]', '[[Option B|Opción B]]', '[[Option C|Opción C]]'], correctAnswer: 0, explanation: '[[The speaker says|El hablante dice]].' },
];

export const UNIT_7_LESSON_4_LISTENING: Exercise[] = QUESTIONS.map((q, i) => ({
  id: `b2-u7-l4-l${i + 1}`,
  type: 'listening',
  level: 'B2',
  topic: 'Family',
  difficulty: 'medium',
  transcript: LISTENING_TRANSCRIPT,
  content: { title: LESSON_TITLE, instructions: INSTRUCTIONS, questions: [q] },
  topicName: 'Listening',
}));
