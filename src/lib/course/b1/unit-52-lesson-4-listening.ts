/**
 * Unidad 52 B1 — Lección 4: Comprensión auditiva (Passive & reported speech)
 * 15 actividades
 */

import { Exercise } from '@/lib/exercise-generator';

const LESSON_TITLE = '[[Listening|Comprensión auditiva]]';
const LISTENING_TRANSCRIPT = `[[Hi|Hola]], [[I|yo]] [[am|soy]] [[Tom|Tom]] [[and|y]] [[today|hoy]] [[I|yo]] [[want|quiero]] [[to|a]] [[tell|contar]] [[you|te]] [[about|sobre]] [[my|mi]] [[day|día]] [[using|usando]] [[passive|pasiva]] [[and|y]] [[reported speech|estilo indirecto]]. [[This morning|Esta mañana]] [[I|yo]] [[was told|me dijeron]] [[that|que]] [[the meeting|la reunión]] [[had been cancelled|había sido cancelada]]. [[The letter|La carta]] [[was sent|fue enviada]] [[yesterday|ayer]] [[but|pero]] [[it|ella]] [[hasn\'t arrived|no ha llegado]] [[yet|todavía]]. [[My boss|Mi jefe]] [[said|dijo]] [[that|que]] [[the project|el proyecto]] [[must be finished|debe ser terminado]] [[by Friday|para el viernes]]. [[She|Ella]] [[also|también]] [[asked|preguntó]] [[me|mí]] [[if|si]] [[I|yo]] [[could|podía]] [[help|ayudar]] [[with|con]] [[the report|el informe]]. [[I|Yo]] [[told|dije]] [[her|ella]] [[that|que]] [[I|yo]] [[would|lo haría]] [[as soon as|tan pronto como]] [[possible|posible]]. [[English|El inglés]] [[is spoken|se habla]] [[in|en]] [[our office|nuestra oficina]] [[every day|cada día]].`;

const INSTRUCTIONS = 'Escucha el audio. Puedes leer la transcripción. Después responde las preguntas.';

const QUESTIONS = [
  { question: '[[What|Qué]] [[is the speaker\'s name|es el nombre del hablante]]?', options: ['[[Tom|Tom]]', '[[Tim|Tim]]', '[[John|John]]'], correctAnswer: 0, explanation: '[[He says|Dice]] "[[I am Tom|soy Tom]]".' },
  { question: '[[What|Qué]] [[was Tom told|le dijeron a Tom]] [[this morning|esta mañana]]?', options: ['[[The letter was sent|la carta fue enviada]]', '[[The meeting had been cancelled|la reunión había sido cancelada]]', '[[The project was finished|el proyecto fue terminado]]'], correctAnswer: 1, explanation: '[[He says|Dice]] "[[I was told that the meeting had been cancelled|me dijeron que la reunión había sido cancelada]]".' },
  { question: '[[When|Cuándo]] [[was the letter sent|fue enviada la carta]]?', options: ['[[Today|hoy]]', '[[Yesterday|ayer]]', '[[Last week|la semana pasada]]'], correctAnswer: 1, explanation: '[[He says|Dice]] "[[The letter was sent yesterday|la carta fue enviada ayer]]".' },
  { question: '[[What|Qué]] [[did the boss say|dijo el jefe]] [[about|sobre]] [[the project|el proyecto]]?', options: ['[[It was finished|estaba terminado]]', '[[It must be finished by Friday|debe ser terminado para el viernes]]', '[[It was cancelled|fue cancelado]]'], correctAnswer: 1, explanation: '[[He says|Dice]] "[[the project must be finished by Friday|el proyecto debe ser terminado para el viernes]]".' },
  { question: '[[What|Qué]] [[did the boss ask|preguntó el jefe]] [[Tom|a Tom]]?', options: ['[[If he could help with the report|si podía ayudar con el informe]]', '[[If he was tired|si estaba cansado]]', '[[If he sent the letter|si envió la carta]]'], correctAnswer: 0, explanation: '[[He says|Dice]] "[[She asked me if I could help with the report|preguntó si podía ayudar con el informe]]".' },
  { question: '[[Tom|Tom]] [[told|dijo]] [[his boss|a su jefe]] [[that|que]] [[he would help|ayudaría]] [[as soon as possible|tan pronto como fuera posible]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'True', explanation: '[[True|Verdadero]]. [[He says|Dice]] "[[I told her that I would as soon as possible|le dije que lo haría tan pronto como fuera posible]]".' },
  { question: '[[What|Qué]] [[language|idioma]] [[is spoken|se habla]] [[in|en]] [[the office|la oficina]]?', options: ['[[Spanish|español]]', '[[English|inglés]]', '[[French|francés]]'], correctAnswer: 1, explanation: '[[He says|Dice]] "[[English is spoken in our office|el inglés se habla en nuestra oficina]]".' },
  { question: '[[What|Cuál]] [[is|es]] [[the main topic|el tema principal]] [[of|del]] [[this listening|esta escucha]]?', options: ['[[Shopping|Compras]]', '[[A work day with passive and reported speech|Un día de trabajo con pasiva y estilo indirecto]]', '[[Travel|Viajes]]'], correctAnswer: 1, explanation: '[[The listening|La escucha]] [[describes|describe]] [[a work day|un día de trabajo]] [[using passive and reported speech|usando pasiva y estilo indirecto]].' },
  { question: '[[The letter|La carta]] [[has arrived|ha llegado]] [[already|ya]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'False', explanation: '[[False|Falso]]. [[He says|Dice]] "[[it hasn\'t arrived yet|no ha llegado todavía]]".' },
  { question: '[[The text|El texto]] [[uses|usa]] [[passive voice|voz pasiva]] [[several times|varias veces]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'True', explanation: '[[True|Verdadero]]. [[Examples|Ejemplos]]: [[was told|me dijeron]], [[had been cancelled|había sido cancelada]], [[was sent|fue enviada]], [[must be finished|debe ser terminado]], [[is spoken|se habla]].' },
  { question: '[[Which|Cuál]] [[is|es]] [[the passive|la pasiva]] [[example|ejemplo]] [[in the listening|en la escucha]]?', options: ['[[I was told|me dijeron]]', '[[The meeting had been cancelled|la reunión había sido cancelada]]', '[[Both|ambas]]'], correctAnswer: 2, explanation: '[[Both|Ambas]] [[are|son]] [[passive|pasiva]] [[structures|estructuras]].' },
  { question: '[[Tom|Tom]] [[wants|quiere]] [[to tell|contar]] [[about|sobre]] [[his day|su día]] [[using|usando]] [[passive and reported speech|pasiva y estilo indirecto]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'True', explanation: '[[True|Verdadero]]. [[He says|Dice]] "[[I want to tell you about my day using passive and reported speech|quiero contarte sobre mi día usando pasiva y estilo indirecto]]".' },
  { question: '[[The boss|El jefe]] [[is|es]] [[a woman|una mujer]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'True', explanation: '[[True|Verdadero]]. [[He says|Dice]] "[[She asked me|ella me preguntó]]" [[and|y]] "[[I told her|le dije]]".' },
  { question: '[[What|Qué]] [[does "as soon as possible"|significa "tan pronto como sea posible"]] [[mean|significa]]?', options: ['[[Never|nunca]]', '[[As quickly as one can|lo más rápido posible]]', '[[Maybe later|quizás tarde]]'], correctAnswer: 1, explanation: '[[As soon as possible|Tan pronto como sea posible]] [[means|significa]] [[as quickly as one can|lo más rápido posible]].' },
  { question: '[[The listening|La escucha]] [[describes|describe]] [[a typical|un típico]] [[work day|día de trabajo]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'True', explanation: '[[True|Verdadero]]. [[It mentions|Menciona]] [[meeting|reunión]], [[letter|carta]], [[project|proyecto]], [[report|informe]], [[office|oficina]].' },
];

export const UNIT_52_LESSON_4_LISTENING: Exercise[] = QUESTIONS.map((q, i) => ({
  id: `b1-u52-l4-l${i + 1}`,
  type: 'listening',
  level: 'B1',
  topic: 'Passive & Reported Speech',
  difficulty: 'easy',
  transcript: LISTENING_TRANSCRIPT,
  content: { title: LESSON_TITLE, instructions: INSTRUCTIONS, questions: [q] },
  topicName: 'Listening',
}));
