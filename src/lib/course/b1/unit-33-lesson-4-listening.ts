/**
 * Unidad 33 B1 — Lección 4: Comprensión auditiva (Question tags, Services)
 * 15 actividades
 */

import { Exercise } from '@/lib/exercise-generator';

const LESSON_TITLE = '[[Listening|Comprensión auditiva]]';
const LISTENING_TRANSCRIPT = `[[Hi|Hola]], [[I|yo]] [[am|soy]] [[Sara|Sara]]. [[I|Yo]] [[had|tuve]] [[to go|ir]] [[to|al]] [[the bank|banco]] [[this morning|esta mañana]] [[because|porque]] [[I|yo]] [[needed|necesitaba]] [[to withdraw|retirar]] [[some money|algo de dinero]]. [[The bank|El banco]] [[opens|abre]] [[at|a]] [[nine|nueve]], [[doesn't it|no abre]]? [[Then|luego]] [[I|yo]] [[had|tuve]] [[a|una]] [[doctor's appointment|cita con el médico]] [[at|a]] [[eleven|las once]]. [[The doctor|El doctor]] [[is|está]] [[very|muy]] [[busy|ocupado]], [[isn't he|no está]]? [[I|Yo]] [[had|tuve]] [[lunch|comida]] [[at|en]] [[a|un]] [[restaurant|restaurante]] [[near|cerca]] [[the hospital|del hospital]]. [[The food|La comida]] [[was|era]] [[delicious|deliciosa]], [[wasn't it|no era]]? [[We|Nosotros]] [[can|podemos]] [[pay|pagar]] [[by card|con tarjeta]] [[there|allí]], [[can't we|no podemos]]? [[There|Hay]] [[is|está]] [[a pharmacy|una farmacia]] [[on|en]] [[the corner|la esquina]], [[isn't there|no hay]]?`;

const INSTRUCTIONS = 'Escucha el audio. Puedes leer la transcripción. Después responde las preguntas.';

const QUESTIONS = [
  { question: '[[What|Qué]] [[did Sara do this morning|hizo Sara esta mañana]]?', options: ['[[went to the restaurant|fue al restaurante]]', '[[went to the bank to withdraw money|fue al banco a retirar dinero]]', '[[went to the pharmacy|fue a la farmacia]]'], correctAnswer: 1, explanation: '[[She says|Dice]] "[[I had to go to the bank this morning because I needed to withdraw some money|tuve que ir al banco esta mañana porque necesitaba retirar dinero]]".' },
  { question: '[[When|Cuándo]] [[does the bank open|abre el banco]]?', options: ['[[at eight|a las ocho]]', '[[at nine|a las nueve]]', '[[at ten|a las diez]]'], correctAnswer: 1, explanation: '[[She says|Dice]] "[[The bank opens at nine|el banco abre a las nueve]]".' },
  { question: '[[What|Qué]] [[did she have at eleven|tuvo a las once]]?', options: ['[[a bank appointment|una cita en el banco]]', "[[a doctor's appointment|cita con el médico]]", '[[lunch|comida]]'], correctAnswer: 1, explanation: '[[She says|Dice]] "[[Then I had a doctor\'s appointment at eleven|luego tuve una cita con el médico a las once]]".' },
  { question: '[[What|Qué]] [[is the doctor like|es el doctor]]?', options: ['[[free|libre]]', '[[very busy|muy ocupado]]', '[[kind|amable]]'], correctAnswer: 1, explanation: '[[She says|Dice]] "[[The doctor is very busy|el doctor está muy ocupado]]".' },
  { question: '[[Where|Dónde]] [[did she have lunch|comió]]?', options: ['[[at home|en casa]]', '[[at a restaurant near the hospital|en un restaurante cerca del hospital]]', '[[at the bank|en el banco]]'], correctAnswer: 1, explanation: '[[She says|Dice]] "[[I had lunch at a restaurant near the hospital|comí en un restaurante cerca del hospital]]".' },
  { question: '[[What|Qué]] [[was the food like|era la comida]]?', options: ['[[bad|mala]]', '[[delicious|deliciosa]]', '[[average|normal]]'], correctAnswer: 1, explanation: '[[She says|Dice]] "[[The food was delicious|la comida era deliciosa]]".' },
  { question: '[[Can|Pueden]] [[they pay by card|pagar con tarjeta]] [[there|allí]]?', options: ['[[Yes|Sí]]', '[[No|No]]'], correctAnswer: 0, explanation: '[[She says|Dice]] "[[We can pay by card there|podemos pagar con tarjeta allí]]".' },
  { question: '[[There|Hay]] [[is|está]] [[a pharmacy|una farmacia]] [[on the corner|en la esquina]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'True', explanation: '[[True|Verdadero]]. [[The text says|El texto dice]] "[[There is a pharmacy on the corner|hay una farmacia en la esquina]]".' },
  { question: '[[Sara|Sara]] [[went|fue]] [[to the bank|al banco]] [[yesterday|ayer]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'False', explanation: '[[False|Falso]]. [[She went this morning|Fue esta mañana]].' },
  { question: '[[What|Cuál]] [[is|es]] [[the main topic|el tema principal]] [[of|del]] [[this listening|esta escucha]]?', options: ['[[Travel|Viajes]]', '[[Daily services (bank, doctor, restaurant)|Servicios diarios (banco, médico, restaurante)]]', '[[Food|Comida]]'], correctAnswer: 1, explanation: '[[The listening|La escucha]] [[describes|describe]] [[Sara\'s day with bank, doctor, restaurant|el día de Sara con banco, médico, restaurante]].' },
  { question: '[[Which question tag|Qué tag]] [[does Sara use|usa Sara]] [[after "The bank opens at nine"|después de "El banco abre a las nueve"]]?', options: ["[[isn't it|no es]]", "[[doesn't it|no abre]]", "[[don't it|no]]"], correctAnswer: 1, explanation: "[[Positive statement|Afirmación positiva]] → [[doesn't it|no abre]]." },
  { question: '[[The doctor|El doctor]] [[is|está]] [[very busy|muy ocupado]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'True', explanation: '[[True|Verdadero]]. [[The text says|El texto dice]] "[[The doctor is very busy|el doctor está muy ocupado]]".' },
  { question: '[[Sara|Sara]] [[had lunch|comió]] [[at a restaurant|en un restaurante]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'True', explanation: '[[True|Verdadero]]. [[The text says|El texto dice]] "[[I had lunch at a restaurant near the hospital|comí en un restaurante cerca del hospital]]".' },
  { question: '[[What|Qué]] [[question tag|tag]] [[follows|sigue]] [[The food was delicious|La comida era deliciosa]]?', options: ["[[wasn't it|no era]]", "[[isn't it|no es]]", "[[don't it|no]]"], correctAnswer: 0, explanation: '[[Positive with was|Afirmación con was]] → [[wasn\'t it|no era]].' },
  { question: '[[Sara|Sara]] [[needed|necesitaba]] [[to withdraw money|retirar dinero]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'True', explanation: '[[True|Verdadero]]. [[The text says|El texto dice]] "[[I needed to withdraw some money|necesitaba retirar algo de dinero]]".' },
];

export const UNIT_33_LESSON_4_LISTENING: Exercise[] = QUESTIONS.map((q, i) => ({
  id: `b1-u33-l4-l${i + 1}`,
  type: 'listening',
  level: 'B1',
  topic: 'Services',
  difficulty: 'easy',
  transcript: LISTENING_TRANSCRIPT,
  content: { title: LESSON_TITLE, instructions: INSTRUCTIONS, questions: [q] },
  topicName: 'Listening',
}));
