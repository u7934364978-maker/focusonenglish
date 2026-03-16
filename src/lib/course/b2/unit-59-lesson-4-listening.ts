/**
 * Unidad 59 B2 — Lección 4: Comprensión auditiva (Review: Social Issues & Modal Deduction)
 * 13 preguntas (B2: transcripción sobre temas sociales y deducción modal)
 */

import { Exercise } from '@/lib/exercise-generator';

const LESSON_TITLE = '[[Listening|Comprensión auditiva]]';
const LISTENING_TRANSCRIPT = `[[Hi|Hola]], [[I'm|soy]] [[Carlos|Carlos]] [[and|y]] [[I|yo]] [[work|trabajo]] [[in social policy|en política social]]. [[The report must have been finished by now|El informe debe haber sido terminado para ahora]] — [[the deadline was yesterday|la fecha límite era ayer]]. [[She must be tired|Ella debe estar cansada]] — [[she worked all night|trabajó toda la noche]]. [[They can't have received the letter|No pueden haber recibido la carta]] — [[it was sent to the wrong address|fue enviada a la dirección equivocada]]. [[The policy might have changed many lives|La política podría haber cambiado muchas vidas]] — [[we need more data|necesitamos más datos]]. [[He must be the best candidate|Él debe ser el mejor candidato]] — [[his experience is impressive|su experiencia es impresionante]].`;

const INSTRUCTIONS = 'Escucha el audio (o lee la transcripción). Después responde las preguntas.';

const QUESTIONS = [
  { question: '[[Who is speaking|Quién habla]]?', options: ['[[Carlos, who works in social policy|Carlos, que trabaja en política social]]', '[[A teacher|Un profesor]]', '[[A doctor|Un médico]]'], correctAnswer: 0, explanation: '[[The speaker says|El hablante dice]] "[[I\'m Carlos and I work in social policy|soy Carlos y trabajo en política social]]".' },
  { question: '[[What|Qué]] [[must have happened to the report|debe haber pasado con el informe]]?', options: ['[[It must have been finished by now|Debe haber sido terminado para ahora]]', '[[It can\'t have been finished|No puede haber sido terminado]]', '[[It might be late|Podría estar retrasado]]'], correctAnswer: 0, explanation: '[[Must have: deadline was yesterday|Must have: fecha límite era ayer]].' },
  { question: '[[Why|Por qué]] [[must she be tired|debe estar cansada]]?', options: ['[[She worked all night|Trabajó toda la noche]]', '[[She slept well|Durmió bien]]', '[[She didn\'t work|No trabajó]]'], correctAnswer: 0, explanation: '[[Must for present deduction|Must para deducción presente]].' },
  { question: '[[Why|Por qué]] [[can\'t they have received the letter|no pueden haber recibido la carta]]?', options: ['[[It was sent to the wrong address|Fue enviada a la dirección equivocada]]', '[[They were at home|Estaban en casa]]', '[[The letter was important|La carta era importante]]'], correctAnswer: 0, explanation: '[[Can\'t have for negative deduction|Can\'t have para deducción negativa]].' },
  { question: '[[What|Qué]] [[might the policy have done|podría haber hecho la política]]?', options: ['[[It might have changed many lives|Podría haber cambiado muchas vidas]]', '[[It must have failed|Debe haber fallado]]', '[[It can\'t have worked|No puede haber funcionado]]'], correctAnswer: 0, explanation: '[[Might have for possibility|Might have para posibilidad]].' },
  { question: '[[Why|Por qué]] [[must he be the best candidate|debe ser el mejor candidato]]?', options: ['[[His experience is impressive|Su experiencia es impresionante]]', '[[He has no experience|No tiene experiencia]]', '[[He refused|Se negó]]'], correctAnswer: 0, explanation: '[[Must for strong deduction|Must para deducción fuerte]].' },
  { question: '[[What|Cuál]] [[is|es]] [[the main idea|la idea principal]] [[of the listening|de la escucha]]?', options: ['[[Carlos uses modal deduction to discuss social policy|Carlos usa deducción modal para discutir política social]]', '[[Reports are always late|Los informes siempre llegan tarde]]', '[[Letters never arrive|Las cartas nunca llegan]]'], correctAnswer: 0, explanation: '[[The speaker|El hablante]] [[uses|usa]] [[modal deduction throughout|deducción modal en todo]].' },
  { question: '[[Which modal|Qué modal]] [[expresses impossibility|expresa imposibilidad]]?', options: ['[[can\'t have|can\'t have]]', '[[must have|must have]]', '[[might have|might have]]'], correctAnswer: 0, explanation: '[[Can\'t have for negative deduction|Can\'t have para deducción negativa]].' },
  { question: '[[What|Qué]] [[vocabulary|vocabulario]] [[is central|es central]] [[in this listening|en esta escucha]]?', options: ['[[report|informe]], [[policy|política]], [[candidate|candidato]], [[deadline|fecha límite]]', '[[sport|deporte]], [[music|música]]', '[[weather|tiempo]], [[food|comida]]'], correctAnswer: 0, explanation: '[[The listening|La escucha]] [[focuses on|se centra en]] [[social policy vocabulary|vocabulario de política social]].' },
  { question: '[[What|Qué]] [[can we infer|podemos inferir]] [[about Carlos|sobre Carlos]]?', options: ['[[He analyses situations using deduction|Analiza situaciones usando deducción]]', '[[He never uses modals|Nunca usa modales]]', '[[He ignores evidence|Ignora la evidencia]]'], correctAnswer: 0, explanation: '[[He|Él]] [[uses|usa]] [[multiple modal structures|múltiples estructuras modales]].' },
  { question: '[[She|Ella]] ____ ____ ____ ____ [[tired|cansada]] — [[she worked|trabajó]] [[all night|toda la noche]].', options: ['[[must be|debe estar]]', '[[can\'t be|no puede estar]]', '[[might have been|podría haber estado]]'], correctAnswer: 0, explanation: '[[Must for present deduction|Must para deducción presente]].' },
  { question: '[[They|Ellos]] ____ ____ ____ ____ ____ [[the letter|la carta]] — [[wrong address|dirección equivocada]].', options: ['[[can\'t have received|no pueden haber recibido]]', '[[must have received|deben haber recibido]]', '[[might receive|podrían recibir]]'], correctAnswer: 0, explanation: '[[Can\'t have for negative deduction|Can\'t have para deducción negativa]].' },
  { question: '[[Might have|Might have]] [[is used for|se usa para]] ____.', options: ['[[Possibility in the past|Posibilidad en el pasado]]', '[[Certainty|Certeza]]'], correctAnswer: 0, explanation: '[[Might have + past participle|Might have + participio]].' },
];

export const UNIT_59_LESSON_4_LISTENING: Exercise[] = QUESTIONS.map((q, i) => ({
  id: `b2-u59-l4-l${i + 1}`,
  type: 'listening',
  level: 'B2',
  topic: 'social-issues',
  difficulty: 'medium',
  transcript: LISTENING_TRANSCRIPT,
  content: { title: LESSON_TITLE, instructions: INSTRUCTIONS, questions: [q] },
  topicName: 'Listening',
}));
