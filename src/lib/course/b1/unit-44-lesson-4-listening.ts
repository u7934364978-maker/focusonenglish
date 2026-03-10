/**
 * Unidad 44 B1 — Lección 4: Comprensión auditiva (For, since, from, Time expressions)
 * 15 actividades
 */

import { Exercise } from '@/lib/exercise-generator';

const LESSON_TITLE = '[[Listening|Comprensión auditiva]]';
const LISTENING_TRANSCRIPT = `[[Hi|Hola]], [[I|yo]] [[am|soy]] [[Emma|Emma]] [[and|y]] [[I|yo]] [[want|quiero]] [[to|a]] [[tell|contar]] [[you|te]] [[about|sobre]] [[my|mi]] [[life|vida]]. [[I|Yo]] [[have lived|he vivido]] [[in|en]] [[this city|esta ciudad]] [[since|desde]] [[2018|2018]]. [[I|Yo]] [[have worked|he trabajado]] [[as|como]] [[a teacher|profesora]] [[for|durante]] [[six years|seis años]]. [[The school|La escuela]] [[is open|está abierta]] [[from|desde]] [[8am|8am]] [[to|hasta]] [[4pm|4pm]]. [[I|Yo]] [[have studied|he estudiado]] [[Spanish|español]] [[since|desde]] [[I was|tenía]] [[fifteen|quince]] [[years old|años]]. [[I|Yo]] [[lived|viví]] [[in|en]] [[the UK|Reino Unido]] [[from|desde]] [[1995|1995]] [[to|hasta]] [[2018|2018]]. [[I|Yo]] [[haven\'t been|no he estado]] [[on holiday|de vacaciones]] [[for|durante]] [[two years|dos años]]. [[I|Yo]] [[have wanted|he querido]] [[to learn|aprender]] [[guitar|guitarra]] [[since|desde]] [[I was|tenía]] [[a child|de niño]].`;

const INSTRUCTIONS = 'Escucha el audio. Puedes leer la transcripción. Después responde las preguntas.';

const QUESTIONS = [
  { question: '[[Since when|Desde cuándo]] [[has Emma lived in the city|vive Emma en la ciudad]]?', options: ['[[2015|2015]]', '[[2018|2018]]', '[[2020|2020]]'], correctAnswer: 1, explanation: '[[She says|Dice]] "[[have lived in this city since 2018|he vivido en esta ciudad desde 2018]]".' },
  { question: '[[How long|Cuánto tiempo]] [[has Emma worked as a teacher|ha trabajado Emma como profesora]]?', options: ['[[four years|cuatro años]]', '[[six years|seis años]]', '[[eight years|ocho años]]'], correctAnswer: 1, explanation: '[[She says|Dice]] "[[have worked as a teacher for six years|he trabajado como profesora durante seis años]]".' },
  { question: '[[What|Cuál]] [[are the school hours|son el horario de la escuela]]?', options: ['[[7am to 3pm|7am a 3pm]]', '[[8am to 4pm|8am a 4pm]]', '[[9am to 5pm|9am a 5pm]]'], correctAnswer: 1, explanation: '[[She says|Dice]] "[[from 8am to 4pm|desde 8am hasta 4pm]]".' },
  { question: '[[Since when|Desde cuándo]] [[has Emma studied Spanish|estudia Emma español]]?', options: ['[[since she was ten|desde los diez]]', '[[since she was fifteen|desde los quince]]', '[[since last year|desde el año pasado]]'], correctAnswer: 1, explanation: '[[She says|Dice]] "[[since I was fifteen years old|desde que tenía quince años]]".' },
  { question: '[[When|Cuándo]] [[did Emma live in the UK|vivió Emma en Reino Unido]]?', options: ['[[1990 to 2000|1990 a 2000]]', '[[1995 to 2018|1995 a 2018]]', '[[2000 to 2015|2000 a 2015]]'], correctAnswer: 1, explanation: '[[She says|Dice]] "[[from 1995 to 2018|desde 1995 hasta 2018]]".' },
  { question: '[[How long|Cuánto tiempo]] [[has Emma not been on holiday|no ha estado Emma de vacaciones]]?', options: ['[[one year|un año]]', '[[two years|dos años]]', '[[three years|tres años]]'], correctAnswer: 1, explanation: '[[She says|Dice]] "[[haven\'t been on holiday for two years|no he estado de vacaciones desde hace dos años]]".' },
  { question: '[[Since when|Desde cuándo]] [[has Emma wanted to learn guitar|ha querido Emma aprender guitarra]]?', options: ['[[since she was a child|desde que era niño]]', '[[since last year|desde el año pasado]]', '[[since she was twenty|desde los veinte]]'], correctAnswer: 0, explanation: '[[She says|Dice]] "[[since I was a child|desde que era niño]]".' },
  { question: '[[Emma|Emma]] [[is|es]] [[a teacher|profesora]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'True', explanation: '[[True|Verdadero]]. [[The text says|El texto dice]] "[[have worked as a teacher|he trabajado como profesora]]".' },
  { question: '[[Emma|Emma]] [[lived|vivió]] [[in the UK|en Reino Unido]] [[from 1995 to 2018|desde 1995 hasta 2018]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'True', explanation: '[[True|Verdadero]]. [[The text says|El texto dice]] "[[from 1995 to 2018|desde 1995 hasta 2018]]".' },
  { question: '[[What|Cuál]] [[is|es]] [[the main topic|el tema principal]] [[of|del]] [[this listening|esta escucha]]?', options: ['[[Shopping|Compras]]', '[[Life story with time expressions|Historia de vida con expresiones de tiempo]]', '[[Travel|Viajes]]'], correctAnswer: 1, explanation: '[[The listening|La escucha]] [[describes|describe]] [[Emma\'s life|la vida de Emma]] [[with for, since, from|con for, since, from]].' },
  { question: '[[Since|Desde]] [[is used with|se usa con]] [[present perfect|present perfect]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'True', explanation: '[[True|Verdadero]]. [[Have lived since|He vivido desde]], [[have studied since|he estudiado desde]].' },
  { question: '[[For|Durante]] [[is used with|se usa con]] [[duration|duración]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'True', explanation: '[[True|Verdadero]]. [[For six years|Durante seis años]], [[for two years|durante dos años]].' },
  { question: '[[From...to|Desde...hasta]] [[shows|muestra]] [[a time range|un rango de tiempo]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'True', explanation: '[[True|Verdadero]]. [[From 8am to 4pm|Desde 8am hasta 4pm]], [[from 1995 to 2018|desde 1995 hasta 2018]].' },
  { question: '[[Emma|Emma]] [[has studied|ha estudiado]] [[Spanish|español]] [[since|desde]] [[she was fifteen|tenía quince]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'True', explanation: '[[True|Verdadero]]. [[The text says|El texto dice]] "[[since I was fifteen years old|desde que tenía quince años]]".' },
  { question: '[[Emma|Emma]] [[has been|ha estado]] [[on holiday|de vacaciones]] [[recently|recientemente]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'False', explanation: '[[False|Falso]]. [[She hasn\'t been|No ha estado]] [[for two years|desde hace dos años]].' },
];

export const UNIT_44_LESSON_4_LISTENING: Exercise[] = QUESTIONS.map((q, i) => ({
  id: `b1-u44-l4-l${i + 1}`,
  type: 'listening',
  level: 'B1',
  topic: 'Time Expressions',
  difficulty: 'easy',
  transcript: LISTENING_TRANSCRIPT,
  content: { title: LESSON_TITLE, instructions: INSTRUCTIONS, questions: [q] },
  topicName: 'Listening',
}));
