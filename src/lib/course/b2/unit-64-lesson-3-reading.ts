/**
 * Unidad 64 B2 — Lección 3: Comprensión lectora (Collocations in exam context)
 * 8 preguntas (B2: collocations en contexto de examen)
 */

import { Exercise } from '@/lib/exercise-generator';

const LESSON_TITLE = '[[Reading|Comprensión lectora]]';
const READING_TRANSCRIPT = `[[To do well in B2 exams|Para hacerlo bien en los exámenes B2]], [[students need to make steady progress|los estudiantes necesitan avanzar de forma constante]]. [[It is not enough to do homework once a week|No es suficiente hacer deberes una vez a la semana]]. [[If you make an effort every day|Si haces un esfuerzo cada día]], [[you will make a better impression in speaking and writing|causarás una mejor impresión en speaking y writing]]. [[When you make a decision to study regularly|Cuando tomas la decisión de estudiar con regularidad]], [[you also learn to take responsibility for your learning|también aprendes a asumir la responsabilidad de tu aprendizaje]].`;

const INSTRUCTIONS = 'Lee el texto y responde a las preguntas sobre collocations.';

const QUESTIONS = [
  { question: '[[What do students need to do to succeed|Qué necesitan hacer los estudiantes para tener éxito]]?', options: ['[[Make steady progress|Avanzar de forma constante]]', '[[Study only once a month|Estudiar solo una vez al mes]]', '[[Avoid practice|Evitar la práctica]]'], correctAnswer: 0 },
  { question: '[[What is not enough according to the text|Qué no es suficiente según el texto]]?', options: ['[[Doing homework once a week|Hacer deberes una vez a la semana]]', '[[Studying daily|Estudiar a diario]]', '[[Taking breaks|Tomar descansos]]'], correctAnswer: 0 },
  { question: '[[Which collocation means "hacer un esfuerzo"|Qué colocación significa \"hacer un esfuerzo\"]]?', options: ['[[make an effort|hacer un esfuerzo]]', '[[do a decision|hacer una decisión]]', '[[take homework|tomar deberes]]'], correctAnswer: 0 },
  { question: '[[Which collocation means "causar una buena impresión"|Qué colocación significa \"causar una buena impresión\"]]?', options: ['[[make a good impression|causar una buena impresión]]', '[[do a good impression|hacer una buena impresión]]', '[[take a good impression|tomar una buena impresión]]'], correctAnswer: 0 },
  { question: '[[What does "take responsibility" mean|Qué significa \"take responsibility\"]]?', options: ['[[Assume responsibility|Asumir responsabilidad]]', '[[Avoid responsibility|Evitar responsabilidad]]', '[[Create responsibility|Crear responsabilidad]]'], correctAnswer: 0 },
  { question: '[[Main message|Mensaje principal]]?', options: ['[[Collocations help you sound natural in exams|Las colocaciones te ayudan a sonar natural en exámenes]]', '[[Only grammar matters|Solo importa la gramática]]', '[[Exams do not need practice|Los exámenes no necesitan práctica]]'], correctAnswer: 0 },
  { question: '[[Which collocation appears in the text|Qué colocación aparece en el texto]]?', options: ['[[make a decision|tomar una decisión]]', '[[do a decision|hacer una decisión]]', '[[have a decision|tener una decisión]]'], correctAnswer: 0 },
  { question: '[[What skills does the text mention|Qué destrezas menciona el texto]]?', options: ['[[Speaking and writing|Speaking y writing]]', '[[Cooking and driving|Cocinar y conducir]]', '[[Swimming and hiking|Nadar y hacer senderismo]]'], correctAnswer: 0 },
];

export const UNIT_64_LESSON_3_READING: Exercise[] = QUESTIONS.map((q, i) => ({
  id: `b2-u64-l3-r${i + 1}`,
  type: 'reading',
  level: 'B2',
  topic: 'core-collocations',
  difficulty: 'medium',
  transcript: READING_TRANSCRIPT,
  content: { title: LESSON_TITLE, instructions: INSTRUCTIONS, questions: [q] },
  topicName: 'Reading',
}));

