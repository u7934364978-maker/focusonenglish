/**
 * Unidad 63 B2 — Lección 4: Comprensión auditiva (Tenses & time markers)
 * 8 preguntas (B2: tiempos y marcadores temporales)
 */

import { Exercise } from '@/lib/exercise-generator';

const LESSON_TITLE = '[[Listening|Comprensión auditiva]]';
const LISTENING_TRANSCRIPT = `[[Hi|Hola]], [[today we\'ll practise tense contrasts|hoy practicaremos contrastes de tiempos]]. [[I\'ve been preparing for my B2 exam|Llevo preparándome para mi examen B2]] [[since January|desde enero]]. [[Yesterday|Ayer]], [[while I was doing a mock test|mientras hacía un simulacro]], [[my computer crashed|mi ordenador se bloqueó]]. [[By the time it restarted|Para cuando se reinició]], [[I had lost ten minutes|yo había perdido diez minutos]]. [[In the end|Al final]], [[I still finished on time|aun así terminé a tiempo]].`;

const INSTRUCTIONS = 'Escucha el audio (o lee la transcripción). Responde las preguntas sobre tiempos verbales.';

const QUESTIONS = [
  { question: '[[How long has the speaker been preparing|Cuánto tiempo lleva preparándose el hablante]]?', options: ['[[Since January|Desde enero]]', '[[Since yesterday|Desde ayer]]', '[[Since tomorrow|Desde mañana]]'], correctAnswer: 0, explanation: '[[Present perfect continuous + since|Present perfect continuous con since]].' },
  { question: '[[What happened yesterday|Qué pasó ayer]]?', options: ['[[The computer crashed|El ordenador se bloqueó]]', '[[The exam was cancelled|El examen se canceló]]', '[[He forgot his book|Olvidó su libro]]'], correctAnswer: 0 },
  { question: '[[What was he doing when it crashed|Qué estaba haciendo cuando se bloqueó]]?', options: ['[[Doing a mock test|Haciendo un simulacro]]', '[[Cooking dinner|Cocinando]]', '[[Driving|Conduciendo]]'], correctAnswer: 0, explanation: '[[Past continuous for action in progress|Pasado continuo]].' },
  { question: '[[How much time had he lost by the time it restarted|Cuánto tiempo había perdido para cuando se reinició]]?', options: ['[[Ten minutes|Diez minutos]]', '[[One minute|Un minuto]]', '[[An hour|Una hora]]'], correctAnswer: 0, explanation: '[[Past perfect for result before past moment|Past perfect]].' },
  { question: '[[Did he finish on time|Terminó a tiempo]]?', options: ['[[Yes, he did|Sí]]', '[[No, he didn\'t|No]]', '[[It doesn\'t say|No lo dice]]'], correctAnswer: 0 },
  { question: '[[Which tense is used in \"I\'ve been preparing\"|Qué tiempo se usa en \"I\'ve been preparing\"]]?', options: ['[[Present perfect continuous|Presente perfecto continuo]]', '[[Past simple|Pasado simple]]', '[[Future perfect|Futuro perfecto]]'], correctAnswer: 0 },
  { question: '[[Which marker shows an earlier past result|Qué marcador indica un resultado anterior en el pasado]]?', options: ['[[By the time|Para cuando]]', '[[Tomorrow|Mañana]]', '[[Nowadays|Hoy en día]]'], correctAnswer: 0 },
  { question: '[[Main purpose|Propósito principal]]?', options: ['[[Practise B2 tense contrasts|Practicar contrastes de tiempos B2]]', '[[Teach new idioms|Enseñar nuevos idioms]]', '[[Describe a holiday|Describir unas vacaciones]]'], correctAnswer: 0 },
];

export const UNIT_63_LESSON_4_LISTENING: Exercise[] = QUESTIONS.map((q, i) => ({
  id: `b2-u63-l4-l${i + 1}`,
  type: 'listening',
  level: 'B2',
  topic: 'exam-tenses-aspect',
  difficulty: 'medium',
  transcript: LISTENING_TRANSCRIPT,
  content: { title: LESSON_TITLE, instructions: INSTRUCTIONS, questions: [q] },
  topicName: 'Listening',
}));

