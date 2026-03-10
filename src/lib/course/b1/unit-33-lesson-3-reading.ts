/**
 * Unidad 33 B1 — Lección 3: Comprensión lectora (Question tags, Services)
 * 15 actividades
 */

import { Exercise } from '@/lib/exercise-generator';

const LESSON_TITLE = '[[Reading|Comprensión lectora]]';
const READING_TRANSCRIPT = `[[I|Yo]] [[went|fui]] [[to|al]] [[the bank|banco]] [[yesterday|ayer]] [[to|para]] [[open|abrir]] [[a|una]] [[new|nueva]] [[account|cuenta]]. [[The bank|El banco]] [[opens|abre]] [[at|a]] [[nine|nueve]], [[doesn't it|no abre]]? [[I|Yo]] [[had|tuve]] [[an appointment|una cita]] [[with|con]] [[the doctor|el doctor]] [[this morning|esta mañana]]. [[I|Yo]] [[need|necesito]] [[to see|ver]] [[him|a él]] [[again|de nuevo]] [[next week|la próxima semana]], [[don't I|no necesito]]? [[Last|La pasada]] [[night|noche]] [[we|nosotros]] [[ate|comimos]] [[at|en]] [[a|un]] [[nice|bonito]] [[restaurant|restaurante]]. [[The service|El servicio]] [[was|era]] [[excellent|excelente]], [[wasn't it|no era]]? [[We|Nosotros]] [[can|podemos]] [[pay|pagar]] [[by card|con tarjeta]] [[there|allí]], [[can't we|no podemos]]? [[There|Hay]] [[is|está]] [[a pharmacy|una farmacia]] [[nearby|cerca]], [[isn't there|no hay]]?`;

const INSTRUCTIONS = 'Lee el texto de abajo. Después responde las preguntas.';

const QUESTIONS = [
  { question: '[[What|Qué]] [[did the person do|hizo la persona]] [[yesterday|ayer]]?', options: ['[[went to the doctor|fue al médico]]', '[[went to the bank to open an account|fue al banco a abrir una cuenta]]', '[[ate at a restaurant|comió en un restaurante]]'], correctAnswer: 1, explanation: '[[The text says|El texto dice]] "[[I went to the bank yesterday to open a new account|fui al banco ayer para abrir una cuenta nueva]]".' },
  { question: '[[When|Cuándo]] [[does the bank open|abre el banco]]?', options: ['[[at eight|a las ocho]]', '[[at nine|a las nueve]]', '[[at ten|a las diez]]'], correctAnswer: 1, explanation: '[[The text says|El texto dice]] "[[The bank opens at nine|el banco abre a las nueve]]".' },
  { question: '[[What|Qué]] [[did they have this morning|tuvieron esta mañana]]?', options: ['[[a bank appointment|una cita en el banco]]', '[[an appointment with the doctor|una cita con el doctor]]', '[[lunch at a restaurant|comida en un restaurante]]'], correctAnswer: 1, explanation: '[[The text says|El texto dice]] "[[I had an appointment with the doctor this morning|tuve una cita con el doctor esta mañana]]".' },
  { question: '[[What|Qué]] [[do they need to do next week|necesitan hacer la próxima semana]]?', options: ['[[go to the bank|ir al banco]]', '[[see the doctor again|ver al doctor de nuevo]]', '[[eat at the restaurant|comer en el restaurante]]'], correctAnswer: 1, explanation: '[[The text says|El texto dice]] "[[I need to see him again next week|necesito verlo de nuevo la próxima semana]]".' },
  { question: '[[Where|Dónde]] [[did they eat last night|comieron anoche]]?', options: ['[[at home|en casa]]', '[[at a nice restaurant|en un restaurante bonito]]', '[[at the bank|en el banco]]'], correctAnswer: 1, explanation: '[[The text says|El texto dice]] "[[Last night we ate at a nice restaurant|anoche comimos en un restaurante bonito]]".' },
  { question: '[[What|Qué]] [[was the service like|era el servicio]]?', options: ['[[bad|malo]]', '[[excellent|excelente]]', '[[average|normal]]'], correctAnswer: 1, explanation: '[[The text says|El texto dice]] "[[The service was excellent|el servicio era excelente]]".' },
  { question: '[[Can|Pueden]] [[they pay by card|pagar con tarjeta]] [[there|allí]]?', options: ['[[Yes|Sí]]', '[[No|No]]'], correctAnswer: 0, explanation: '[[The text says|El texto dice]] "[[We can pay by card there|podemos pagar con tarjeta allí]]".' },
  { question: '[[There|Hay]] [[is|está]] [[a pharmacy|una farmacia]] [[nearby|cerca]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'True', explanation: '[[True|Verdadero]]. [[The text says|El texto dice]] "[[There is a pharmacy nearby|hay una farmacia cerca]]".' },
  { question: '[[The person|La persona]] [[went to the bank|fue al banco]] [[today|hoy]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'False', explanation: '[[False|Falso]]. [[They went yesterday|Fueron ayer]].' },
  { question: '[[What|Cuál]] [[is|es]] [[the main topic|el tema principal]] [[of|del]] [[this text|este texto]]?', options: ['[[Travel|Viajes]]', '[[Services (bank, doctor, restaurant)|Servicios (banco, médico, restaurante)]]', '[[Food|Comida]]'], correctAnswer: 1, explanation: '[[The text|El texto]] [[talks about|habla de]] [[bank|banco]], [[doctor|médico]] [[and|y]] [[restaurant|restaurante]].' },
  { question: '[[Which question tag|Qué tag]] [[follows|sigue]] [[The bank opens at nine|El banco abre a las nueve]]?', options: ["[[isn't it|no es así]]", "[[doesn't it|no abre]]", "[[don't it|no]]"], correctAnswer: 1, explanation: '[[Positive statement with opens|Afirmación positiva con opens]] → [[doesn\'t it|no abre]].' },
  { question: '[[The service|El servicio]] [[was|era]] [[excellent|excelente]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'True', explanation: '[[True|Verdadero]]. [[The text says|El texto dice]] "[[The service was excellent|el servicio era excelente]]".' },
  { question: '[[They|Ellos]] [[need|necesitan]] [[to see|ver]] [[the doctor|al doctor]] [[again|de nuevo]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'True', explanation: '[[True|Verdadero]]. [[The text says|El texto dice]] "[[I need to see him again next week|necesito verlo de nuevo la próxima semana]]".' },
  { question: '[[Which question tag|Qué tag]] [[follows|sigue]] [[The service was excellent|El servicio era excelente]]?', options: ["[[wasn't it|no era]]", "[[isn't it|no es]]", "[[don't it|no]]"], correctAnswer: 0, explanation: '[[Positive statement with was|Afirmación positiva con was]] → [[wasn\'t it|no era]].' },
  { question: '[[The person|La persona]] [[opened|abrió]] [[a new account|una cuenta nueva]] [[at the bank|en el banco]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'True', explanation: '[[True|Verdadero]]. [[The text says|El texto dice]] "[[I went to the bank yesterday to open a new account|fui al banco ayer para abrir una cuenta nueva]]".' },
];

export const UNIT_33_LESSON_3_READING: Exercise[] = QUESTIONS.map((q, i) => ({
  id: `b1-u33-l3-r${i + 1}`,
  type: 'reading',
  level: 'B1',
  topic: 'Services',
  difficulty: 'easy',
  transcript: READING_TRANSCRIPT,
  content: { title: LESSON_TITLE, instructions: INSTRUCTIONS, questions: [q] },
  topicName: 'Reading',
}));
