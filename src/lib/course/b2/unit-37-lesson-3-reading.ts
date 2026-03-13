/**
 * Unidad 37 B2 — Lección 3: Comprensión lectora (Business extended)
 * 13 preguntas (B2: texto sobre negocios y auxiliares)
 */

import { Exercise } from '@/lib/exercise-generator';

const LESSON_TITLE = '[[Reading|Comprensión lectora]]';
const READING_TRANSCRIPT = `[[The team|El equipo]] [[did|sí]] [[complete|completó]] [[the project|el proyecto]] [[on time|a tiempo]] [[despite|a pesar de]] [[the delays|los retrasos]]. [[I|Yo]] [[do|sí]] [[want|quiero]] [[to attend|asistir]] [[the meeting|a la reunión]] [[and|y]] [[they|ellos]] [[have|sí]] [[finished|terminado]] [[the audit|la auditoría]]. [[She|Ella]] [[did|sí]] [[submit|envió]] [[the proposal|la propuesta]] [[before|antes de]] [[the deadline|el plazo]] [[and|y]] [[the deal|el trato]] [[has been closed|se ha cerrado]]. [[He|Él]] [[does|sí]] [[agree|está de acuerdo]] [[with the terms|con los términos]] [[and|y]] [[we|nosotros]] [[will|sí]] [[proceed|procederemos]] [[with the merger|con la fusión]]. [[The budget|El presupuesto]] [[has been approved|ha sido aprobado]] [[and|y]] [[the CEO|el director ejecutivo]] [[is|sí]] [[coming|viniendo]] [[to the presentation|a la presentación]]. [[They|Ellos]] [[did|sí]] [[exceed|superaron]] [[the target|el objetivo]] [[last quarter|el último trimestre]].`;

const INSTRUCTIONS = 'Lee el texto sobre negocios. Después responde las preguntas.';

const QUESTIONS = [
  { question: '[[What|Qué]] [[did the team do|hizo el equipo]]?', options: ['[[Completed the project on time despite delays|Completó el proyecto a tiempo a pesar de los retrasos]]', '[[Submitted the proposal|Envió la propuesta]]', '[[Closed the deal|Cerró el trato]]'], correctAnswer: 0, explanation: '[[The text says|El texto dice]] "[[the team did complete the project on time despite the delays|el equipo sí completó el proyecto a tiempo a pesar de los retrasos]]".' },
  { question: '[[What|Qué]] [[does the speaker want|quiere el hablante]]?', options: ['[[To attend the meeting|Asistir a la reunión]]', '[[To close the deal|Cerrar el trato]]', '[[To submit the proposal|Enviar la propuesta]]'], correctAnswer: 0, explanation: '[[The text says|El texto dice]] "[[I do want to attend the meeting|yo sí quiero asistir a la reunión]]".' },
  { question: '[[What|Qué]] [[have they finished|han terminado]]?', options: ['[[The audit|La auditoría]]', '[[The project|El proyecto]]', '[[The proposal|La propuesta]]'], correctAnswer: 0, explanation: '[[The text says|El texto dice]] "[[they have finished the audit|han terminado la auditoría]]".' },
  { question: '[[What|Qué]] [[did she submit|envió ella]]?', options: ['[[The proposal before the deadline|La propuesta antes del plazo]]', '[[The budget|El presupuesto]]', '[[The contract|El contrato]]'], correctAnswer: 0, explanation: '[[The text says|El texto dice]] "[[she did submit the proposal before the deadline|ella sí envió la propuesta antes del plazo]]".' },
  { question: '[[What|Qué]] [[has been closed|se ha cerrado]]?', options: ['[[The deal|El trato]]', '[[The meeting|La reunión]]', '[[The audit|La auditoría]]'], correctAnswer: 0, explanation: '[[The text says|El texto dice]] "[[the deal has been closed|el trato se ha cerrado]]".' },
  { question: '[[What|Qué]] [[does he agree with|está de acuerdo]]?', options: ['[[The terms|Los términos]]', '[[The merger|La fusión]]', '[[The budget|El presupuesto]]'], correctAnswer: 0, explanation: '[[The text says|El texto dice]] "[[he does agree with the terms|él sí está de acuerdo con los términos]]".' },
  { question: '[[What|Qué]] [[will they proceed with|procederán con]]?', options: ['[[The merger|La fusión]]', '[[The audit|La auditoría]]', '[[The proposal|La propuesta]]'], correctAnswer: 0, explanation: '[[The text says|El texto dice]] "[[we will proceed with the merger|procederemos con la fusión]]".' },
  { question: '[[What|Cuál]] [[is|es]] [[the main idea|la idea principal]] [[of the text|del texto]]?', options: ['[[Positive business progress: projects, deals, audits and mergers|Progreso empresarial positivo: proyectos, tratos, auditorías y fusiones]]', '[[Meetings are important|Las reuniones son importantes]]', '[[Budgets are easy|Los presupuestos son fáciles]]'], correctAnswer: 0, explanation: '[[The text|El texto]] [[describes|describe]] [[multiple business achievements|múltiples logros empresariales]].' },
  { question: '[[Which auxiliary|Qué auxiliar]] [[is used for emphasis|se usa para énfasis]] [[in "I do want"|en "I do want"]]?', options: ['[[Do|Do]]', '[[Have|Have]]', '[[Will|Will]]'], correctAnswer: 0, explanation: '[[Do for emphasis in affirmative|Do para énfasis en afirmativa]].' },
  { question: '[[What|Qué]] [[vocabulary|vocabulario]] [[is key|es clave]] [[in this text|en este texto]]?', options: ['[[deal|trato]], [[proposal|propuesta]], [[audit|auditoría]], [[merger|fusión]], [[budget|presupuesto]]', '[[sport|deporte]], [[music|música]]', '[[weather|tiempo]], [[food|comida]]'], correctAnswer: 0, explanation: '[[The text|El texto]] [[focuses on|se centra en]] [[business vocabulary|vocabulario de negocios]].' },
  { question: '[[The budget|El presupuesto]] [[has not been approved|no ha sido aprobado]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 1, explanation: '[[False|Falso]]. [[The text says|El texto dice]] "[[the budget has been approved|el presupuesto ha sido aprobado]]".' },
  { question: '[[They|Ellos]] ____ [[exceed the target|superaron el objetivo]] [[last quarter|el último trimestre]].', options: ['[[did|sí]]', '[[have|han]]'], correctAnswer: 0, explanation: '[[Did for emphasis in past|Did para énfasis en pasado]].' },
  { question: '[[What|Qué]] [[can we infer|podemos inferir]] [[about the business|sobre el negocio]]?', options: ['[[Things are going well: deals closed, targets exceeded, mergers proceeding|Las cosas van bien: tratos cerrados, objetivos superados, fusiones en curso]]', '[[The company is failing|La empresa está fracasando]]', '[[No one attends meetings|Nadie asiste a reuniones]]'], correctAnswer: 0, explanation: '[[Multiple positive outcomes|Múltiples resultados positivos]] [[are described|se describen]].' },
];

export const UNIT_37_LESSON_3_READING: Exercise[] = QUESTIONS.map((q, i) => ({
  id: `b2-u37-l3-r${i + 1}`,
  type: 'reading',
  level: 'B2',
  topic: 'Business (extended)',
  difficulty: 'medium',
  transcript: READING_TRANSCRIPT,
  content: { title: LESSON_TITLE, instructions: INSTRUCTIONS, questions: [q] },
  topicName: 'Reading',
}));
