/**
 * Unidad 58 B2 — Lección 4: Comprensión auditiva (Review: History & Society)
 * 13 preguntas (B2: transcripción sobre historia y condicionales)
 */

import { Exercise } from '@/lib/exercise-generator';

const LESSON_TITLE = '[[Listening|Comprensión auditiva]]';
const LISTENING_TRANSCRIPT = `[[Hi|Hola]], [[I'm|soy]] [[Elena|Elena]] [[and|y]] [[I|yo]] [[teach history|enseño historia]]. [[If the revolution|Si la revolución]] [[had succeeded|hubiera tenido éxito]], [[everything would be different today|todo sería diferente hoy]]. [[Only when the truth was revealed|Solo cuando la verdad fue revelada]] [[did we see the full picture|vimos la imagen completa]]. [[If they had heeded the warning|Si hubieran atendido la advertencia]], [[the disaster would have been avoided|el desastre habría sido evitado]]. [[Under no circumstances should history be rewritten|Bajo ninguna circunstancia debería la historia ser reescrita]] [[to suit power|para favorecer al poder]]. [[If I had been there when it happened|Si hubiera estado allí cuando ocurrió]], [[I would have protested|habría protestado]].`;

const INSTRUCTIONS = 'Escucha el audio (o lee la transcripción). Después responde las preguntas.';

const QUESTIONS = [
  { question: '[[Who is speaking|Quién habla]]?', options: ['[[Elena, who teaches history|Elena, que enseña historia]]', '[[A student|Un estudiante]]', '[[A politician|Un político]]'], correctAnswer: 0, explanation: '[[The speaker says|El hablante dice]] "[[I\'m Elena and I teach history|soy Elena y enseño historia]]".' },
  { question: '[[What|Qué]] [[would be different today|sería diferente hoy]] [[if the revolution had succeeded|si la revolución hubiera tenido éxito]]?', options: ['[[Everything would be different|Todo sería diferente]]', '[[Nothing would change|Nada cambiaría]]', '[[History would be forgotten|La historia sería olvidada]]'], correctAnswer: 0, explanation: '[[Mixed conditional|Condicional mixto]].' },
  { question: '[[When|Cuándo]] [[did we see the full picture|vimos la imagen completa]]?', options: ['[[Only when the truth was revealed|Solo cuando la verdad fue revelada]]', '[[Before the revolution|Antes de la revolución]]', '[[Never|Nunca]]'], correctAnswer: 0, explanation: '[[Only when + inversion|Only when + inversión]].' },
  { question: '[[What|Qué]] [[would have avoided the disaster|habría evitado el desastre]]?', options: ['[[If they had heeded the warning|Si hubieran atendido la advertencia]]', '[[If the revolution had succeeded|Si la revolución hubiera tenido éxito]]', '[[If the truth was revealed|Si la verdad fue revelada]]'], correctAnswer: 0, explanation: '[[Third conditional|Tercer condicional]].' },
  { question: '[[What|Qué]] [[does she say about rewriting history|dice sobre reescribir la historia]]?', options: ['[[Under no circumstances should it be rewritten to suit power|Bajo ninguna circunstancia debería reescribirse para favorecer al poder]]', '[[It is acceptable|Es aceptable]]', '[[Power should control history|El poder debería controlar la historia]]'], correctAnswer: 0, explanation: '[[Inversion after under no circumstances|Inversión tras under no circumstances]].' },
  { question: '[[What|Qué]] [[would she have done|habría hecho]] [[if she had been there|si hubiera estado allí]]?', options: ['[[She would have protested|Habría protestado]]', '[[She would have stayed silent|Habría permanecido en silencio]]', '[[She would have left|Se habría ido]]'], correctAnswer: 0, explanation: '[[Third conditional|Tercer condicional]].' },
  { question: '[[What|Cuál]] [[is|es]] [[the main idea|la idea principal]] [[of the listening|de la escucha]]?', options: ['[[Elena discusses history using third conditional, mixed conditional and inversion|Elena discute historia usando tercer condicional, condicional mixto e inversión]]', '[[History is boring|La historia es aburrida]]', '[[Revolutions always succeed|Las revoluciones siempre tienen éxito]]'], correctAnswer: 0, explanation: '[[The speaker|El hablante]] [[uses|usa]] [[advanced conditionals|condicionales avanzados]].' },
  { question: '[[Which structure|Qué estructura]] [[is used in|se usa en]] "[[did we see|vimos]]"?', options: ['[[Inversion after only when|Inversión tras only when]]', '[[Third conditional|Tercer condicional]]', '[[Present simple|Presente simple]]'], correctAnswer: 0, explanation: '[[Only when + inversion|Only when + inversión]].' },
  { question: '[[What|Qué]] [[vocabulary|vocabulario]] [[is central|es central]] [[in this listening|en esta escucha]]?', options: ['[[revolution|revolución]], [[truth|verdad]], [[disaster|desastre]], [[history|historia]]', '[[sport|deporte]], [[music|música]]', '[[weather|tiempo]], [[food|comida]]'], correctAnswer: 0, explanation: '[[The listening|La escucha]] [[focuses on|se centra en]] [[history vocabulary|vocabulario de historia]].' },
  { question: '[[What|Qué]] [[can we infer|podemos inferir]] [[about Elena|sobre Elena]]?', options: ['[[She thinks critically about history and uses advanced grammar|Piensa críticamente sobre la historia y usa gramática avanzada]]', '[[She avoids history|Evita la historia]]', '[[She supports rewriting history|Apoya reescribir la historia]]'], correctAnswer: 0, explanation: '[[She|Ella]] [[uses|usa]] [[multiple conditional structures|múltiples estructuras condicionales]].' },
  { question: '[[If they|Si ellos]] ____ ____ ____ ____ ____ [[the warning|la advertencia]], [[the disaster|el desastre]] ____ ____ ____ ____ [[avoided|evitado]].', options: ['[[had heeded|hubieran atendido]] ... [[would have been|habría sido]]', '[[heed|atienden]] ... [[would have been|habría sido]]'], correctAnswer: 0, explanation: '[[Third conditional|Tercer condicional]].' },
  { question: '[[Under no circumstances|Bajo ninguna circunstancia]] ____ ____ ____ ____ ____ [[history|la historia]] ____ ____ ____ ____ [[rewritten|reescrita]].', options: ['[[should|debería]]', '[[it should|debería]]', '[[should it|debería]]'], correctAnswer: 0, explanation: '[[Inversion|Inversión]].' },
  { question: '[[Third conditional|Tercer condicional]] [[is used for|se usa para]] ____.', options: ['[[Imaginary situations in the past|Situaciones imaginarias en el pasado]]', '[[Future predictions|Predicciones futuras]]'], correctAnswer: 0, explanation: '[[Third conditional|Tercer condicional]] [[= if + past perfect, would have + past participle|= if + pasado perfecto, would have + participio]].' },
];

export const UNIT_58_LESSON_4_LISTENING: Exercise[] = QUESTIONS.map((q, i) => ({
  id: `b2-u58-l4-l${i + 1}`,
  type: 'listening',
  level: 'B2',
  topic: 'history-society',
  difficulty: 'medium',
  transcript: LISTENING_TRANSCRIPT,
  content: { title: LESSON_TITLE, instructions: INSTRUCTIONS, questions: [q] },
  topicName: 'Listening',
}));
