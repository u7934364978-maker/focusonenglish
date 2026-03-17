/**
 * Unidad 64 B2 — Lección 4: Comprensión auditiva (Collocations)
 * 8 preguntas (B2: collocations make/do/take/have/get en contexto)
 */

import { Exercise } from '@/lib/exercise-generator';

const LESSON_TITLE = '[[Listening|Comprensión auditiva]]';
const LISTENING_TRANSCRIPT = `[[Hi|Hola]], [[here are some exam tips|aquí tienes algunos consejos de examen]]. [[First|Primero]], [[make a plan|haz un plan]] [[before you start writing|antes de empezar a escribir]]. [[Then|Luego]], [[make an effort to use collocations|haz un esfuerzo por usar colocaciones]]. [[Don\'t make the same mistake again|No cometas el mismo error otra vez]]: [[do your homework regularly|haz los deberes con regularidad]] [[and take responsibility for your progress|y asume la responsabilidad de tu progreso]]. [[Finally|Por último]], [[take a short break|tómate un descanso corto]] [[to keep focused|para mantenerte concentrado]].`;

const INSTRUCTIONS = 'Escucha el audio (o lee la transcripción). Responde a las preguntas sobre collocations.';

const QUESTIONS = [
  { question: '[[What should you do before writing|Qué debes hacer antes de escribir]]?', options: ['[[Make a plan|Hacer un plan]]', '[[Take a bath|Darte un baño]]', '[[Make traffic|Hacer tráfico]]'], correctAnswer: 0 },
  { question: '[[What should you use in your writing|Qué debes usar en tu writing]]?', options: ['[[Collocations|Colocaciones]]', '[[Only slang|Solo jerga]]', '[[Only numbers|Solo números]]'], correctAnswer: 0 },
  { question: '[[What does the speaker say about homework|Qué dice el hablante sobre los deberes]]?', options: ['[[Do your homework regularly|Haz los deberes con regularidad]]', '[[Do homework once a year|Haz deberes una vez al año]]', '[[Never do homework|Nunca hagas deberes]]'], correctAnswer: 0 },
  { question: '[[What should you take responsibility for|De qué debes asumir responsabilidad]]?', options: ['[[Your progress|Tu progreso]]', '[[The weather|El tiempo]]', '[[Traffic|El tráfico]]'], correctAnswer: 0 },
  { question: '[[Why take a short break|Por qué tomar un descanso corto]]?', options: ['[[To keep focused|Para mantenerte concentrado]]', '[[To stop studying forever|Para dejar de estudiar para siempre]]', '[[To miss the exam|Para perder el examen]]'], correctAnswer: 0 },
  { question: '[[Which collocation appears|Qué colocación aparece]]?', options: ['[[make a plan|hacer un plan]]', '[[do a plan|hacer un plan]]', '[[take a plan|tomar un plan]]'], correctAnswer: 0 },
  { question: '[[Which collocation appears|Qué colocación aparece]]?', options: ['[[make a mistake|cometer un error]]', '[[do a mistake|hacer un error]]', '[[have a mistake|tener un error]]'], correctAnswer: 0 },
  { question: '[[Main purpose|Propósito principal]]?', options: ['[[Practise collocations for B2 exam tasks|Practicar colocaciones para tareas de examen B2]]', '[[Teach basic colours|Enseñar colores básicos]]', '[[Explain geography|Explicar geografía]]'], correctAnswer: 0 },
];

export const UNIT_64_LESSON_4_LISTENING: Exercise[] = QUESTIONS.map((q, i) => ({
  id: `b2-u64-l4-l${i + 1}`,
  type: 'listening',
  level: 'B2',
  topic: 'core-collocations',
  difficulty: 'medium',
  transcript: LISTENING_TRANSCRIPT,
  content: { title: LESSON_TITLE, instructions: INSTRUCTIONS, questions: [q] },
  topicName: 'Listening',
}));

