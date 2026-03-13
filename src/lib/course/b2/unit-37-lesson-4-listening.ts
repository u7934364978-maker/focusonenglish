/**
 * Unidad 37 B2 — Lección 4: Comprensión auditiva (Business extended)
 * 13 preguntas (B2: transcripción sobre negocios y auxiliares)
 */

import { Exercise } from '@/lib/exercise-generator';

const LESSON_TITLE = '[[Listening|Comprensión auditiva]]';
const LISTENING_TRANSCRIPT = `[[Hi|Hola]], [[I'm|soy]] [[Sarah|Sarah]] [[from|de]] [[the sales team|el equipo de ventas]]. [[We|Nosotros]] [[did|sí]] [[close|cerramos]] [[the deal|el trato]] [[last week|la semana pasada]] [[and|y]] [[I|yo]] [[do|sí]] [[want|quiero]] [[to deliver|impartir]] [[the presentation|la presentación]] [[to the client|al cliente]]. [[The audit|La auditoría]] [[has been completed|ha sido completada]] [[and|y]] [[they|ellos]] [[have|sí]] [[approved|aprobado]] [[the budget|el presupuesto]]. [[He|Él]] [[does|sí]] [[agree|está de acuerdo]] [[with the merger|con la fusión]] [[and|y]] [[we|nosotros]] [[will|sí]] [[proceed|procederemos]] [[next month|el próximo mes]]. [[She|Ella]] [[did|sí]] [[submit|envió]] [[the proposal|la propuesta]] [[on time|a tiempo]] [[and|y]] [[the team|el equipo]] [[did|sí]] [[exceed|superó]] [[the target|el objetivo]]. [[The CEO|El director ejecutivo]] [[is|sí]] [[coming|viniendo]] [[to the meeting|a la reunión]] [[this afternoon|esta tarde]].`;

const INSTRUCTIONS = 'Escucha el audio (o lee la transcripción). Después responde las preguntas.';

const QUESTIONS = [
  { question: '[[Who is speaking|Quién habla]]?', options: ['[[Sarah from the sales team|Sarah del equipo de ventas]]', '[[A client|Un cliente]]', '[[The CEO|El director ejecutivo]]'], correctAnswer: 0, explanation: '[[The speaker says|El hablante dice]] "[[I\'m Sarah from the sales team|soy Sarah del equipo de ventas]]".' },
  { question: '[[What|Qué]] [[did they close|cerraron]]?', options: ['[[The deal last week|El trato la semana pasada]]', '[[The meeting|La reunión]]', '[[The audit|La auditoría]]'], correctAnswer: 0, explanation: '[[The speaker says|El hablante dice]] "[[we did close the deal last week|sí cerramos el trato la semana pasada]]".' },
  { question: '[[What|Qué]] [[does she want to do|quiere hacer]]?', options: ['[[To deliver the presentation to the client|Impartir la presentación al cliente]]', '[[To close the deal|Cerrar el trato]]', '[[To approve the budget|Aprobar el presupuesto]]'], correctAnswer: 0, explanation: '[[The speaker says|El hablante dice]] "[[I do want to deliver the presentation to the client|sí quiero impartir la presentación al cliente]]".' },
  { question: '[[What|Qué]] [[has been completed|ha sido completada]]?', options: ['[[The audit|La auditoría]]', '[[The deal|El trato]]', '[[The proposal|La propuesta]]'], correctAnswer: 0, explanation: '[[The speaker says|El hablante dice]] "[[the audit has been completed|la auditoría ha sido completada]]".' },
  { question: '[[What|Qué]] [[have they approved|han aprobado]]?', options: ['[[The budget|El presupuesto]]', '[[The deal|El trato]]', '[[The merger|La fusión]]'], correctAnswer: 0, explanation: '[[The speaker says|El hablante dice]] "[[they have approved the budget|han aprobado el presupuesto]]".' },
  { question: '[[What|Qué]] [[does he agree with|está de acuerdo]]?', options: ['[[The merger|La fusión]]', '[[The proposal|La propuesta]]', '[[The budget|El presupuesto]]'], correctAnswer: 0, explanation: '[[The speaker says|El hablante dice]] "[[he does agree with the merger|él sí está de acuerdo con la fusión]]".' },
  { question: '[[When|Cuándo]] [[will they proceed|procederán]]?', options: ['[[Next month|El próximo mes]]', '[[This afternoon|Esta tarde]]', '[[Last week|La semana pasada]]'], correctAnswer: 0, explanation: '[[The speaker says|El hablante dice]] "[[we will proceed next month|procederemos el próximo mes]]".' },
  { question: '[[What|Cuál]] [[is|es]] [[the main idea|la idea principal]] [[of the listening|de la escucha]]?', options: ['[[Positive business update: deal closed, audit done, merger proceeding|Actualización empresarial positiva: trato cerrado, auditoría hecha, fusión en curso]]', '[[The company is failing|La empresa está fracasando]]', '[[No one attends meetings|Nadie asiste a reuniones]]'], correctAnswer: 0, explanation: '[[The speaker|El hablante]] [[reports|informa]] [[multiple successes|múltiples éxitos]].' },
  { question: '[[Which auxiliary|Qué auxiliar]] [[is used for emphasis|se usa para énfasis]] [[in "we did close"|en "we did close"]]?', options: ['[[Did|Did]]', '[[Have|Have]]', '[[Do|Do]]'], correctAnswer: 0, explanation: '[[Did for emphasis in past|Did para énfasis en pasado]].' },
  { question: '[[What|Qué]] [[vocabulary|vocabulario]] [[is central|es central]] [[in this listening|en esta escucha]]?', options: ['[[deal|trato]], [[audit|auditoría]], [[budget|presupuesto]], [[merger|fusión]], [[proposal|propuesta]]', '[[sport|deporte]], [[music|música]]', '[[weather|tiempo]], [[food|comida]]'], correctAnswer: 0, explanation: '[[The listening|La escucha]] [[focuses on|se centra en]] [[business vocabulary|vocabulario de negocios]].' },
  { question: '[[What|Qué]] [[can we infer|podemos inferir]] [[about the company|sobre la empresa]]?', options: ['[[Business is going well with multiple achievements|El negocio va bien con múltiples logros]]', '[[They are losing money|Están perdiendo dinero]]', '[[The CEO is not interested|Al director ejecutivo no le interesa]]'], correctAnswer: 0, explanation: '[[Deal closed|Trato cerrado]], [[audit completed|auditoría completada]], [[target exceeded|objetivo superado]].' },
  { question: '[[She|Ella]] ____ [[submit the proposal on time|envió la propuesta a tiempo]].', options: ['[[did|sí]]', '[[has|ha]]'], correctAnswer: 0, explanation: '[[Did for emphasis in past|Did para énfasis en pasado]].' },
  { question: '[[Short answers|Las respuestas cortas]] ____ [[use the same auxiliary as the question|usan el mismo auxiliar que la pregunta]].', options: ['[[do|sí]]', '[[don\'t|no]]'], correctAnswer: 0, explanation: '[[Short answers repeat the auxiliary|Las respuestas cortas repiten el auxiliar]].' },
];

export const UNIT_37_LESSON_4_LISTENING: Exercise[] = QUESTIONS.map((q, i) => ({
  id: `b2-u37-l4-l${i + 1}`,
  type: 'listening',
  level: 'B2',
  topic: 'Business (extended)',
  difficulty: 'medium',
  transcript: LISTENING_TRANSCRIPT,
  content: { title: LESSON_TITLE, instructions: INSTRUCTIONS, questions: [q] },
  topicName: 'Listening',
}));
