/**
 * Unidad 20 B1 — Lección 3: Comprensión lectora (Repaso: passive, reported speech)
 */

import { Exercise } from '@/lib/exercise-generator';

const LESSON_TITLE = '[[Reading|Comprensión lectora]]';
const READING_TRANSCRIPT = `[[At the office|En la oficina]] [[yesterday|ayer]], [[my colleague|mi colega]] [[told me that she|me dijo que ella]] [[had received|había recibido]] [[an email|un email]] [[from the boss|del jefe]]. [[She said that the meeting|Ella dijo que la reunión]] [[had been postponed|había sido pospuesta]] [[to next week|para la semana que viene]]. [[Applications|Las solicitudes]] [[must be submitted|deben ser enviadas]] [[before the deadline|antes de la fecha límite]] [[and|y]] [[the contract|el contrato]] [[should be reviewed|debería ser revisado]] [[by a lawyer|por un abogado]]. [[She asked me if|Ella me preguntó si]] [[I could translate|yo podía traducir]] [[the document|el documento]] [[into English|al inglés]]. [[I told her that|Le dije que]] [[the software|el software]] [[was updated|fue actualizado]] [[last month|el mes pasado]] [[and|y]] [[could be used|puede ser usado]] [[for translations|para traducciones]]. [[New messages|Los nuevos mensajes]] [[are sent|son enviados]] [[automatically|automáticamente]] [[to all team members|a todos los miembros del equipo]].`;

const INSTRUCTIONS = 'Lee el texto de abajo. Después responde las preguntas.';

const QUESTIONS = [
  { question: '[[What|Qué]] [[did the colleague tell the person|le dijo la colega a la persona]]?', options: ['[[about a new job|sobre un nuevo trabajo]]', '[[that she had received an email from the boss|que había recibido un email del jefe]]', '[[about the salary|sobre el salario]]'], correctAnswer: 1, explanation: '[[The text says|El texto dice]] "[[told me that she had received an email from the boss|me dijo que había recibido un email del jefe]]".' },
  { question: '[[What|Qué]] [[had happened|había pasado]] [[to the meeting|con la reunión]]?', options: ['[[it was cancelled|fue cancelada]]', '[[it had been postponed to next week|había sido pospuesta para la semana que viene]]', '[[it was tomorrow|era mañana]]'], correctAnswer: 1, explanation: '[[The text says|El texto dice]] "[[had been postponed to next week|había sido pospuesta para la semana que viene]]".' },
  { question: '[[What|Qué]] [[must be submitted|debe ser enviada]] [[before the deadline|antes de la fecha límite]]?', options: ['[[the salary|el salario]]', '[[applications|las solicitudes]]', '[[the contract|el contrato]]'], correctAnswer: 1, explanation: '[[The text says|El texto dice]] "[[Applications must be submitted|las solicitudes deben ser enviadas]]".' },
  { question: '[[What|Qué]] [[did she ask|preguntó ella]]?', options: ['[[about the meeting|sobre la reunión]]', '[[if I could translate the document into English|si podía traducir el documento al inglés]]', '[[about the deadline|sobre la fecha límite]]'], correctAnswer: 1, explanation: '[[The text says|El texto dice]] "[[asked me if I could translate the document|me preguntó si podía traducir el documento]]".' },
  { question: '[[When|Cuándo]] [[was the software updated|fue actualizado el software]]?', options: ['[[last week|la semana pasada]]', '[[last month|el mes pasado]]', '[[yesterday|ayer]]'], correctAnswer: 1, explanation: '[[The text says|El texto dice]] "[[was updated last month|fue actualizado el mes pasado]]".' },
  { question: '[[The contract|El contrato]] [[should be reviewed|debería ser revisado]] [[by a lawyer|por un abogado]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'True', explanation: '[[True|Verdadero]]. [[The text says|El texto dice]] "[[should be reviewed by a lawyer|debería ser revisado por un abogado]]".' },
  { question: '[[New messages|Los nuevos mensajes]] [[are sent|son enviados]] [[to all team members|a todos los miembros del equipo]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'True', explanation: '[[True|Verdadero]]. [[The text says|El texto dice]] "[[are sent automatically to all team members|son enviados automáticamente a todos los miembros del equipo]]".' },
  { question: '[[The text|El texto]] [[uses|usa]] [[passive voice|voz pasiva]], [[modal passive|pasiva con modales]] [[and|y]] [[reported speech|estilo indirecto]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'True', explanation: '[[True|Verdadero]]. [[Examples|Ejemplos]]: [[must be submitted|deben ser enviadas]], [[had been postponed|había sido pospuesta]], [[told me that|me dijo que]].' },
  { question: '[[The software|El software]] [[can be used|puede ser usado]] [[for translations|para traducciones]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'True', explanation: '[[True|Verdadero]]. [[The text says|El texto dice]] "[[could be used for translations|puede ser usado para traducciones]]".' },
  { question: '[[What|Qué]] [[grammar structures|estructuras gramaticales]] [[from units 16-19|de las unidades 16-19]] [[appear|aparecen]] [[in the text|en el texto]]?', options: ['[[passive, modal passive, reported speech|pasiva, pasiva con modales, estilo indirecto]]', '[[only passive|solo pasiva]]', '[[only reported speech|solo estilo indirecto]]'], correctAnswer: 0, explanation: '[[The text|El texto]] [[uses all three|usa las tres]]: [[passive|pasiva]], [[modal passive|pasiva con modales]], [[reported speech|estilo indirecto]].' },
  { question: '[[She said that|Ella dijo que]] [[the meeting|la reunión]] [[had been postponed|había sido pospuesta]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'True', explanation: '[[True|Verdadero]]. [[Reported speech with backshift|Estilo indirecto con cambio de tiempo]].' },
  { question: '[[I told her|Le dije]] [[that the software|que el software]] ____.', options: ['[[is updated|es actualizado]]', '[[was updated last month|fue actualizado el mes pasado]]', '[[will be updated|será actualizado]]'], correctAnswer: 1, explanation: '[[The text says|El texto dice]] "[[was updated last month|fue actualizado el mes pasado]]".' },
  { question: '[[Which vocabulary|Qué vocabulario]] [[from units 16-19|de las unidades 16-19]] [[appears|aparece]]?', options: ['[[colleague, email, meeting, deadline, contract, translate, software, messages|colega, email, reunión, fecha límite, contrato, traducir, software, mensajes]]', '[[food, weather|comida, tiempo]]', '[[music, art|música, arte]]'], correctAnswer: 0, explanation: '[[The text|El texto]] [[mentions|menciona]] [[vocabulary from work|vocabulario de trabajo]], [[communication|comunicación]] [[and|y]] [[language|idiomas]].' },
  { question: '[[Applications|Las solicitudes]] [[can be submitted|pueden ser enviadas]] [[after the deadline|después de la fecha límite]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'False', explanation: '[[False|Falso]]. [[Must be submitted before the deadline|Deben ser enviadas antes de la fecha límite]].' },
  { question: '[[The main topic|El tema principal]] [[is|es]] [[work communication|comunicación laboral]] [[with mixed grammar|con gramática mixta]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'True', explanation: '[[True|Verdadero]]. [[The text|El texto]] [[combines|combina]] [[work|trabajo]], [[communication|comunicación]] [[and|y]] [[technology|tecnología]].' },
];

export const UNIT_20_LESSON_3_READING: Exercise[] = QUESTIONS.map((q, i) => ({
  id: `b1-u20-l3-r${i + 1}`,
  type: 'reading',
  level: 'B1',
  topic: 'Review',
  difficulty: 'easy',
  transcript: READING_TRANSCRIPT,
  content: { title: LESSON_TITLE, instructions: INSTRUCTIONS, questions: [q] },
  topicName: 'Reading',
}));
