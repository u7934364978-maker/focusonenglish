/**
 * Unidad 5 B1 — Lección 4: Comprensión auditiva (Repaso 1–4)
 * 15 actividades
 */

import { Exercise } from '@/lib/exercise-generator';

const LESSON_TITLE = '[[Listening|Comprensión auditiva]]';
const LISTENING_TRANSCRIPT = `[[Hi|Hola]], [[I|yo]] [[am|soy]] [[David|David]]. [[I|Yo]] [[have|he]] [[been|estado]] [[studying|estudiando]] [[English|inglés]] [[for|desde hace]] [[three|tres]] [[years|años]]. [[Yesterday|Ayer]] [[I|yo]] [[had|tuve]] [[an|una]] [[exam|examen]] [[and|y]] [[I|yo]] [[think|creo]] [[I|yo]] [[passed|aprobé]]. [[I|Yo]] [[had|había]] [[studied|estudiado]] [[hard|duro]] [[before|antes]] [[the|el]] [[exam|examen]] [[so|así que]] [[I|yo]] [[was|estaba]] [[confident|seguro]]. [[I|Yo]] [[have|he]] [[never|nunca]] [[failed|suspendido]] [[an|un]] [[exam|examen]] [[in|en]] [[this|este]] [[course|curso]] [[yet|todavía]]. [[I|Yo]] [[have|he]] [[just|acabo de]] [[received|recibido]] [[my|mi]] [[results|resultados]] [[and|y]] [[I|yo]] [[am|estoy]] [[very|muy]] [[proud|orgulloso]] [[of|de]] [[my|mi]] [[progress|progreso]].`;

const INSTRUCTIONS = 'Escucha el audio. Puedes leer la transcripción. Después responde las preguntas.';

const QUESTIONS = [
  { question: '[[How long|Cuánto tiempo]] [[has David been studying|lleva David estudiando]] [[English|inglés]]?', options: ['[[one year|un año]]', '[[two years|dos años]]', '[[three years|tres años]]'], correctAnswer: 2, explanation: '[[He says|Dice]] "[[I have been studying for three years|llevo estudiando tres años]]".' },
  { question: '[[When|Cuándo]] [[did he have|tuvo]] [[the exam|el examen]]?', options: ['[[last week|la semana pasada]]', '[[yesterday|ayer]]', '[[today|hoy]]'], correctAnswer: 1, explanation: '[[He says|Dice]] "[[Yesterday I had an exam|ayer tuve un examen]]".' },
  { question: '[[What|Qué]] [[does he think|cree]] [[about the exam|sobre el examen]]?', options: ['[[he failed|suspendió]]', '[[he passed|aprobó]]', '[[he doesn\'t know|no sabe]]'], correctAnswer: 1, explanation: '[[He says|Dice]] "[[I think I passed|creo que aprobé]]".' },
  { question: '[[Had|Había]] [[he|él]] [[studied|estudiado]] [[before the exam|antes del examen]]?', options: ['[[Yes|Sí]]', '[[No|No]]'], correctAnswer: 'Yes', explanation: '[[He says|Dice]] "[[I had studied hard before the exam|había estudiado duro antes del examen]]".' },
  { question: '[[Has|Ha]] [[he|él]] [[ever|alguna vez]] [[failed|suspendido]] [[an exam|un examen]] [[in this course|en este curso]]?', options: ['[[Yes|Sí]]', '[[No|No]]'], correctAnswer: 'No', explanation: '[[He says|Dice]] "[[I have never failed an exam in this course yet|nunca he suspendido un examen en este curso todavía]]".' },
  { question: '[[What|Qué]] [[has he just received|acaba de recibir]]?', options: ['[[his certificate|su certificado]]', '[[his results|sus resultados]]', '[[his diploma|su diploma]]'], correctAnswer: 1, explanation: '[[He says|Dice]] "[[I have just received my results|acabo de recibir mis resultados]]".' },
  { question: '[[How|Cómo]] [[does he feel|se siente]] [[about his progress|sobre su progreso]]?', options: ['[[disappointed|decepcionado]]', '[[proud|orgulloso]]', '[[nervous|nervioso]]'], correctAnswer: 1, explanation: '[[He says|Dice]] "[[I am very proud of my progress|estoy muy orgulloso de mi progreso]]".' },
  { question: '[[David|David]] [[had|había]] [[studied|estudiado]] [[hard|duro]] [[before the exam|antes del examen]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'True', explanation: '[[True|Verdadero]]. [[The text says|El texto dice]] "[[I had studied hard before the exam|había estudiado duro antes del examen]]".' },
  { question: '[[David|David]] [[failed|suspendió]] [[the exam|el examen]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'False', explanation: '[[False|Falso]]. [[He thinks he passed|Cree que aprobó]].' },
  { question: '[[David|David]] [[has|ha]] [[been|estado]] [[studying|estudiando]] [[for three years|durante tres años]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'True', explanation: '[[True|Verdadero]]. [[The text says|El texto dice]] "[[I have been studying for three years|llevo estudiando tres años]]".' },
  { question: '[[What|Cuál]] [[is|es]] [[the main topic|el tema principal]] [[of|del]] [[this listening|esta escucha]]?', options: ['[[Travel|Viajes]]', '[[Exam success and progress|Éxito en exámenes y progreso]]', '[[Work|Trabajo]]'], correctAnswer: 1, explanation: '[[The listening|La escucha]] [[describes|describe]] [[David\'s exam and progress|el examen y progreso de David]].' },
  { question: '[[Which tense|Qué tiempo]] [[is used in|se usa en]] "[[I had studied|había estudiado]]"?', options: ['[[Present Perfect|Presente perfecto]]', '[[Past Perfect|Pasado perfecto]]', '[[Past Simple|Pasado simple]]'], correctAnswer: 1, explanation: '[[Past Perfect|Pasado perfecto]]: [[had + past participle|había + participio]].' },
  { question: '[[David|David]] [[was|estaba]] [[confident|seguro]] [[before|antes]] [[the exam|el examen]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'True', explanation: '[[True|Verdadero]]. [[The text says|El texto dice]] "[[I was confident|estaba seguro]]".' },
  { question: '[[David|David]] [[has|ha]] [[just|acabo de]] [[received|recibido]] [[his results|sus resultados]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'True', explanation: '[[True|Verdadero]]. [[The text says|El texto dice]] "[[I have just received my results|acabo de recibir mis resultados]]".' },
  { question: '[[David|David]] [[had|había]] [[the exam|el examen]] [[today|hoy]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'False', explanation: '[[False|Falso]]. [[He had the exam yesterday|tuvo el examen ayer]].' },
];

export const UNIT_5_LESSON_4_LISTENING: Exercise[] = QUESTIONS.map((q, i) => ({
  id: `b1-u5-l4-l${i + 1}`,
  type: 'listening',
  level: 'B1',
  topic: 'Review 1-4',
  difficulty: 'easy',
  transcript: LISTENING_TRANSCRIPT,
  content: { title: LESSON_TITLE, instructions: INSTRUCTIONS, questions: [q] },
  topicName: 'Listening',
}));
