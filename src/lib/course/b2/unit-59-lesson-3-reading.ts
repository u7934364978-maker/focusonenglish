/**
 * Unidad 59 B2 — Lección 3: Comprensión lectora (Review: Social Issues & Modal Deduction)
 * 13 preguntas (B2: texto sobre temas sociales y deducción modal)
 */

import { Exercise } from '@/lib/exercise-generator';

const LESSON_TITLE = '[[Reading|Comprensión lectora]]';
const READING_TRANSCRIPT = `[[She must be at home|Ella debe estar en casa]] — [[the lights are on|las luces están encendidas]]. [[They must have missed the meeting|Deben haber perdido la reunión]] — [[they left an hour ago|se fueron hace una hora]]. [[The campaign must have been effective|La campaña debe haber sido efectiva]] — [[donations rose significantly|las donaciones subieron significativamente]]. [[He can\'t have passed the exam|No puede haber aprobado el examen]] — [[he didn\'t study at all|no estudió nada]]. [[The solution might not be simple|La solución podría no ser simple]] — [[we need to think more carefully|necesitamos pensar más con cuidado]].`;

const INSTRUCTIONS = 'Lee el texto sobre temas sociales. Después responde las preguntas.';

const QUESTIONS = [
  { question: '[[What|Qué]] [[can we deduce|podemos deducir]] [[about her|sobre ella]] [[from the lights|de las luces]]?', options: ['[[She must be at home|Debe estar en casa]]', '[[She can\'t be at home|No puede estar en casa]]', '[[She might have left|Podría haberse ido]]'], correctAnswer: 0, explanation: '[[Must for strong deduction|Must para deducción fuerte]].' },
  { question: '[[What|Qué]] [[must have happened|debe haber pasado]] [[to them|con ellos]] [[regarding the meeting|respecto a la reunión]]?', options: ['[[They must have missed it|Deben haberla perdido]]', '[[They must have attended|Deben haber asistido]]', '[[They can\'t have missed it|No pueden haberla perdido]]'], correctAnswer: 0, explanation: '[[Must have + past participle|Must have + participio]].' },
  { question: '[[What|Qué]] [[does the text say about the campaign|dice el texto sobre la campaña]]?', options: ['[[It must have been effective|Debe haber sido efectiva]]', '[[It can\'t have been effective|No puede haber sido efectiva]]', '[[It might be effective|Podría ser efectiva]]'], correctAnswer: 0, explanation: '[[Evidence: donations rose|Evidencia: donaciones subieron]].' },
  { question: '[[Why|Por qué]] [[can\'t he have passed|no puede haber aprobado]] [[the exam|el examen]]?', options: ['[[He didn\'t study at all|No estudió nada]]', '[[He studied a lot|Estudió mucho]]', '[[The exam was easy|El examen era fácil]]'], correctAnswer: 0, explanation: '[[Can\'t have for negative deduction|Can\'t have para deducción negativa]].' },
  { question: '[[What|Qué]] [[might the solution be|podría ser la solución]]?', options: ['[[It might not be simple|Podría no ser simple]]', '[[It must be simple|Debe ser simple]]', '[[It can\'t be simple|No puede ser simple]]'], correctAnswer: 0, explanation: '[[Might not for possibility|Might not para posibilidad]].' },
  { question: '[[What|Cuál]] [[is|es]] [[the main idea|la idea principal]] [[of the text|del texto]]?', options: ['[[Modal deduction is used to draw conclusions from evidence|La deducción modal se usa para sacar conclusiones de evidencia]]', '[[Campaigns always work|Las campañas siempre funcionan]]', '[[Exams are easy|Los exámenes son fáciles]]'], correctAnswer: 0, explanation: '[[The text|El texto]] [[shows|muestra]] [[modal deduction examples|ejemplos de deducción modal]].' },
  { question: '[[Which modal|Qué modal]] [[expresses strong certainty|expresa certeza fuerte]]?', options: ['[[must|must]]', '[[might|might]]', '[[can\'t|can\'t]]'], correctAnswer: 0, explanation: '[[Must for positive deduction|Must para deducción positiva]].' },
  { question: '[[What|Qué]] [[vocabulary|vocabulario]] [[is key|es clave]] [[in this text|en este texto]]?', options: ['[[campaign|campaña]], [[donations|donaciones]], [[evidence|evidencia]], [[solution|solución]]', '[[sport|deporte]], [[music|música]]', '[[weather|tiempo]], [[food|comida]]'], correctAnswer: 0, explanation: '[[The text|El texto]] [[focuses on|se centra en]] [[social issues vocabulary|vocabulario de temas sociales]].' },
  { question: '[[She|Ella]] ____ ____ [[at home|en casa]] — [[the lights|las luces]] [[are on|están encendidas]].', options: ['[[must be|debe estar]]', '[[can\'t be|no puede estar]]', '[[might be|podría estar]]'], correctAnswer: 0, explanation: '[[Must for strong deduction|Must para deducción fuerte]].' },
  { question: '[[What|Qué]] [[can we infer|podemos inferir]] [[about modal deduction|sobre la deducción modal]]?', options: ['[[We use evidence to draw conclusions|Usamos evidencia para sacar conclusiones]]', '[[Modals are never used|Los modales nunca se usan]]', '[[Evidence is irrelevant|La evidencia es irrelevante]]'], correctAnswer: 0, explanation: '[[Modal deduction|Deducción modal]] [[is based on evidence|se basa en evidencia]].' },
  { question: '[[They|Ellos]] ____ ____ ____ ____ [[the meeting|la reunión]] — [[they left|se fueron]] [[an hour ago|hace una hora]].', options: ['[[must have missed|deben haber perdido]]', '[[can\'t have missed|no pueden haber perdido]]', '[[might miss|podrían perder]]'], correctAnswer: 0, explanation: '[[Must have + past participle|Must have + participio]].' },
  { question: '[[He|Él]] ____ ____ ____ ____ [[the exam|el examen]] — [[he didn\'t study|no estudió]].', options: ['[[can\'t have passed|no puede haber aprobado]]', '[[must have passed|debe haber aprobado]]', '[[might have passed|podría haber aprobado]]'], correctAnswer: 0, explanation: '[[Can\'t have for negative deduction|Can\'t have para deducción negativa]].' },
  { question: '[[Must have|Must have]] [[is used for|se usa para]] ____.', options: ['[[Past deduction with strong certainty|Deducción pasada con certeza fuerte]]', '[[Future predictions|Predicciones futuras]]'], correctAnswer: 0, explanation: '[[Must have + past participle|Must have + participio]].' },
];

export const UNIT_59_LESSON_3_READING: Exercise[] = QUESTIONS.map((q, i) => ({
  id: `b2-u59-l3-r${i + 1}`,
  type: 'reading',
  level: 'B2',
  topic: 'social-issues',
  difficulty: 'medium',
  transcript: READING_TRANSCRIPT,
  content: { title: LESSON_TITLE, instructions: INSTRUCTIONS, questions: [q] },
  topicName: 'Reading',
}));
