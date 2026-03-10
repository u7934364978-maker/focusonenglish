/**
 * Unidad 43 B1 — Lección 4: Comprensión auditiva (During, for, while, Time)
 * 15 actividades
 */

import { Exercise } from '@/lib/exercise-generator';

const LESSON_TITLE = '[[Listening|Comprensión auditiva]]';
const LISTENING_TRANSCRIPT = `[[Hi|Hola]], [[I|yo]] [[am|soy]] [[Jake|Jake]] [[and|y]] [[I|yo]] [[want|quiero]] [[to|a]] [[tell|contar]] [[you|te]] [[about|sobre]] [[my|mi]] [[day|día]]. [[This morning|Esta mañana]] [[I|yo]] [[waited|esperé]] [[for|durante]] [[thirty minutes|treinta minutos]] [[at|en]] [[the bus stop|la parada]]. [[While I was waiting|Mientras esperaba]], [[I|yo]] [[listened to|escuché]] [[music|música]]. [[During the journey|Durante el viaje]] [[I|yo]] [[read|leí]] [[a book|un libro]]. [[I|Yo]] [[have worked|he trabajado]] [[here|aquí]] [[for|durante]] [[five years|cinco años]]. [[During the meeting|Durante la reunión]] [[I|yo]] [[fell asleep|me dormí]] [[because|porque]] [[I|yo]] [[had been|había estado]] [[working|trabajando]] [[for|durante]] [[twelve hours|doce horas]]. [[While we were having coffee|Mientras tomábamos café]], [[my boss|mi jefe]] [[called|llamó]]. [[I|Yo]] [[have lived|he vivido]] [[in|en]] [[this city|esta ciudad]] [[for|durante]] [[a long time|mucho tiempo]].`;

const INSTRUCTIONS = 'Escucha el audio. Puedes leer la transcripción. Después responde las preguntas.';

const QUESTIONS = [
  { question: '[[How long|Cuánto tiempo]] [[did Jake wait at the bus stop|esperó Jake en la parada]]?', options: ['[[fifteen minutes|quince minutos]]', '[[thirty minutes|treinta minutos]]', '[[one hour|una hora]]'], correctAnswer: 1, explanation: '[[He says|Dice]] "[[waited for thirty minutes|esperé durante treinta minutos]]".' },
  { question: '[[What|Qué]] [[did Jake do while waiting|hizo Jake mientras esperaba]]?', options: ['[[he read|leyó]]', '[[he listened to music|escuchó música]]', '[[he slept|durmió]]'], correctAnswer: 1, explanation: '[[He says|Dice]] "[[while I was waiting, I listened to music|mientras esperaba, escuché música]]".' },
  { question: '[[What|Qué]] [[did Jake do during the journey|hizo Jake durante el viaje]]?', options: ['[[he slept|durmió]]', '[[he read a book|leyó un libro]]', '[[he worked|trabajó]]'], correctAnswer: 1, explanation: '[[He says|Dice]] "[[during the journey I read a book|durante el viaje leí un libro]]".' },
  { question: '[[How long|Cuánto tiempo]] [[has Jake worked there|ha trabajado Jake allí]]?', options: ['[[three years|tres años]]', '[[five years|cinco años]]', '[[ten years|diez años]]'], correctAnswer: 1, explanation: '[[He says|Dice]] "[[have worked here for five years|he trabajado aquí durante cinco años]]".' },
  { question: '[[Why|Por qué]] [[did Jake fall asleep during the meeting|se durmió Jake durante la reunión]]?', options: ['[[the meeting was boring|la reunión era aburrida]]', '[[he had been working for twelve hours|había trabajado doce horas]]', '[[he was ill|estaba enfermo]]'], correctAnswer: 1, explanation: '[[He says|Dice]] "[[had been working for twelve hours|había estado trabajando doce horas]]".' },
  { question: '[[Who|Quién]] [[called while they were having coffee|llamó mientras tomaban café]]?', options: ['[[a friend|un amigo]]', '[[Jake\'s boss|el jefe de Jake]]', '[[a colleague|un compañero]]'], correctAnswer: 1, explanation: '[[He says|Dice]] "[[my boss called|mi jefe llamó]]".' },
  { question: '[[How long|Cuánto tiempo]] [[has Jake lived in the city|ha vivido Jake en la ciudad]]?', options: ['[[a short time|poco tiempo]]', '[[a long time|mucho tiempo]]', '[[one year|un año]]'], correctAnswer: 1, explanation: '[[He says|Dice]] "[[have lived in this city for a long time|he vivido en esta ciudad mucho tiempo]]".' },
  { question: '[[Jake|Jake]] [[listened to music|escuchó música]] [[while waiting|mientras esperaba]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'True', explanation: '[[True|Verdadero]]. [[The text says|El texto dice]] "[[while I was waiting, I listened to music|mientras esperaba, escuché música]]".' },
  { question: '[[Jake|Jake]] [[fell asleep|se durmió]] [[during the meeting|durante la reunión]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'True', explanation: '[[True|Verdadero]]. [[The text says|El texto dice]] "[[fell asleep during the meeting|me dormí durante la reunión]]".' },
  { question: '[[What|Cuál]] [[is|es]] [[the main topic|el tema principal]] [[of|del]] [[this listening|esta escucha]]?', options: ['[[Shopping|Compras]]', '[[A work day with time expressions|Un día de trabajo con expresiones de tiempo]]', '[[Travel|Viajes]]'], correctAnswer: 1, explanation: '[[The listening|La escucha]] [[describes|describe]] [[a work day|un día de trabajo]] [[using during, for, while|usando during, for, while]].' },
  { question: '[[For|Durante]] [[is used with|se usa con]] [[duration|duración]] [[like|como]] [[thirty minutes|treinta minutos]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'True', explanation: '[[True|Verdadero]]. [[For thirty minutes|Durante treinta minutos]], [[for five years|durante cinco años]].' },
  { question: '[[During|Durante]] [[is used with|se usa con]] [[a noun|un sustantivo]] [[like|como]] [[the journey|el viaje]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'True', explanation: '[[True|Verdadero]]. [[During the journey|Durante el viaje]], [[during the meeting|durante la reunión]].' },
  { question: '[[While|Mientras]] [[is used with|se usa con]] [[a clause|una oración]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'True', explanation: '[[True|Verdadero]]. [[While I was waiting|Mientras esperaba]], [[while we were having coffee|mientras tomábamos café]].' },
  { question: '[[Jake|Jake]] [[read|leyó]] [[during the journey|durante el viaje]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'True', explanation: '[[True|Verdadero]]. [[The text says|El texto dice]] "[[during the journey I read a book|durante el viaje leí un libro]]".' },
  { question: '[[Jake|Jake]] [[has worked|ha trabajado]] [[there|allí]] [[for|durante]] [[three years|tres años]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'False', explanation: '[[False|Falso]]. [[He has worked for five years|Ha trabajado durante cinco años]].' },
];

export const UNIT_43_LESSON_4_LISTENING: Exercise[] = QUESTIONS.map((q, i) => ({
  id: `b1-u43-l4-l${i + 1}`,
  type: 'listening',
  level: 'B1',
  topic: 'Time',
  difficulty: 'easy',
  transcript: LISTENING_TRANSCRIPT,
  content: { title: LESSON_TITLE, instructions: INSTRUCTIONS, questions: [q] },
  topicName: 'Listening',
}));
