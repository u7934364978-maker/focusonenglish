/**
 * Unidad 35 — Lección 3: Comprensión lectora (Travel Plans & Bookings)
 * 15 actividades: 1 texto + 15 preguntas
 */

import { Exercise } from '@/lib/exercise-generator';

const LESSON_TITLE = '[[Reading|Comprensión lectora]]';
const READING_TRANSCRIPT = `[[Next|El próximo]] [[month|mes]] [[I|yo]] [[am going to|voy a]] [[travel|viajar]] [[to|a]] [[Spain|España]]. [[I|Yo]] [[have|he]] [[already|ya]] [[booked|reservado]] [[my|mi]] [[flight|vuelo]] [[and|y]] [[hotel|hotel]]. [[My|Mi]] [[flight|vuelo]] [[departs|sale]] [[from|desde]] [[London|Londres]] [[at|a]] [[8|8]] [[am|am]] [[and|y]] [[arrives|llega]] [[in|en]] [[Barcelona|Barcelona]] [[at|a]] [[11|11]] [[am|am]]. [[I|Yo]] [[am going to|voy a]] [[stay|quedarme]] [[at|en]] [[a|un]] [[hotel|hotel]] [[in|en]] [[the|el]] [[centre|centro]] [[for|durante]] [[5|5]] [[nights|noches]]. [[I|Yo]] [[need|necesito]] [[to|a]] [[remember|recordar]] [[to|a]] [[pack|hacer]] [[my|mi]] [[passport|pasaporte]] [[and|y]] [[print|imprimir]] [[my|mi]] [[boarding|tarjeta de]] [[pass|embarque]] [[before|antes]] [[I|yo]] [[go|vaya]]. [[I|Yo]] [[am|estoy]] [[so|muy]] [[excited|emocionado]]!`;

const INSTRUCTIONS = 'Lee el texto de abajo. Después responde las preguntas.';

const QUESTIONS = [
  { question: '[[Where|Dónde]] [[is|va]] [[the|el]] [[writer|autor]] [[going to|a]] [[travel|viajar]] [[next|el próximo]] [[month|mes]]?', options: ['[[Italy|Italia]]', '[[Spain|España]]', '[[France|Francia]]', '[[Portugal|Portugal]]'], correctAnswer: 1, explanation: '[[The|El]] [[text|texto]] [[says|dice]] "[[I am going to travel to Spain|Voy a viajar a España]]".' },
  { question: '[[Has|Ha]] [[the|el]] [[writer|autor]] [[booked|reservado]] [[his|su]] [[flight|vuelo]]?', options: ['[[No|No]]', '[[Yes|Sí]]', '[[Maybe|Quizás]]', '[[Not yet|Aún no]]'], correctAnswer: 1, explanation: '[[He|Él]] [[says|dice]] "[[I have already booked my flight|Ya he reservado mi vuelo]]".' },
  { question: '[[Where|Desde dónde]] [[does|sale]] [[the|el]] [[flight|vuelo]] [[depart|el vuelo]]?', options: ['[[Paris|París]]', '[[London|Londres]]', '[[Madrid|Madrid]]', '[[Rome|Roma]]'], correctAnswer: 1, explanation: '[[The|El]] [[text|texto]] [[says|dice]] "[[departs from London|sale desde Londres]]".' },
  { question: '[[What|A qué]] [[time|hora]] [[does|sale]] [[the|el]] [[flight|vuelo]] [[depart|el vuelo]]?', options: ['[[6|6]] [[am|am]]', '[[8|8]] [[am|am]]', '[[10|10]] [[am|am]]', '[[12|12]] [[pm|pm]]'], correctAnswer: 1, explanation: '[[He|Él]] [[says|dice]] "[[departs at 8 am|sale a las 8 am]]".' },
  { question: '[[Where|Dónde]] [[does|llega]] [[the|el]] [[flight|vuelo]] [[arrive|el vuelo]]?', options: ['[[Madrid|Madrid]]', '[[Barcelona|Barcelona]]', '[[Valencia|Valencia]]', '[[Seville|Sevilla]]'], correctAnswer: 1, explanation: '[[He|Él]] [[says|dice]] "[[arrives in Barcelona|llega en Barcelona]]".' },
  { question: '[[How many|Cuántas]] [[nights|noches]] [[will|se]] [[the|el]] [[writer|autor]] [[stay|quedará]] [[at|en]] [[the|el]] [[hotel|hotel]]?', options: ['[[3|3]]', '[[5|5]]', '[[7|7]]', '[[10|10]]'], correctAnswer: 1, explanation: '[[He|Él]] [[says|dice]] "[[for 5 nights|durante 5 noches]]".' },
  { question: '[[What|Qué]] [[does|necesita]] [[the|el]] [[writer|autor]] [[need|el autor]] [[to|a]] [[remember|recordar]]?', options: ['[[book|reservar]] [[hotel|hotel]]', '[[pack|hacer]] [[passport|pasaporte]] [[and|y]] [[print|imprimir]] [[boarding pass|tarjeta de embarque]]', '[[buy|comprar]] [[tickets|billetes]]', '[[call|llamar]] [[hotel|hotel]]'], correctAnswer: 1, explanation: '[[He|Él]] [[says|dice]] "[[pack passport and print boarding pass|hacer pasaporte e imprimir tarjeta de embarque]]".' },
  { question: '[[The|El]] [[writer|autor]] [[has|ha]] [[booked|reservado]] [[hotel|hotel]] [[and|y]] [[flight|vuelo]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'True', explanation: '[[True|Verdadero]]. [[He|Él]] [[says|dice]] "[[I have already booked my flight and hotel|Ya he reservado mi vuelo y hotel]]".' },
  { question: '[[The|El]] [[hotel|hotel]] [[is|está]] [[in|en]] [[the|el]] [[centre|centro]] [[of|de]] [[Barcelona|Barcelona]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'True', explanation: '[[True|Verdadero]]. [[He|Él]] [[says|dice]] "[[hotel in the centre|hotel en el centro]]".' },
  { question: '[[What|Cuál]] [[is|es]] [[the|el]] [[main|principal]] [[topic|tema]] [[of|del]] [[this|este]] [[text|texto]]?', options: ['[[Past|Viaje]] [[trip|pasado]]', '[[Travel|Planes]] [[plans|de viaje]] [[and|y]] [[bookings|reservas]]', '[[Weather|Tiempo]]', '[[Food|Comida]]'], correctAnswer: 1, explanation: '[[The|El]] [[text|texto]] [[is|es]] [[about|sobre]] [[travel|viajes]] [[plans|planes]] [[and|y]] [[bookings|reservas]].' },
  { question: '[[The|El]] [[writer|autor]] [[feels|siente]] [[excited|emocionado]] [[about|por]] [[the|el]] [[trip|viaje]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'True', explanation: '[[True|Verdadero]]. [[He|Él]] [[says|dice]] "[[I am so excited|Estoy muy emocionado]]".' },
  { question: '[[When|Cuándo]] [[is|es]] [[the|el]] [[trip|viaje]]?', options: ['[[this|este]] [[month|mes]]', '[[next|el próximo]] [[month|mes]]', '[[last|el pasado]] [[month|mes]]', '[[in|en]] [[2|2]] [[months|meses]]'], correctAnswer: 1, explanation: '[[The|El]] [[text|texto]] [[says|dice]] "[[next month|el próximo mes]]".' },
  { question: '[[How long|Cuánto]] [[is|dura]] [[the|el]] [[flight|vuelo]]?', options: ['[[1|1]] [[hour|hora]]', '[[2|2]] [[hours|horas]]', '[[3|3]] [[hours|horas]]', '[[5|5]] [[hours|horas]]'], correctAnswer: 2, explanation: '[[8|8]] [[am|am]] [[to|a]] [[11|11]] [[am|am]] = [[3|3]] [[hours|horas]].' },
  { question: '[[What|Qué]] [[city|ciudad]] [[will|visitará]] [[the|el]] [[writer|autor]] [[visit|el autor]]?', options: ['[[Madrid|Madrid]]', '[[Barcelona|Barcelona]]', '[[Valencia|Valencia]]', '[[Seville|Sevilla]]'], correctAnswer: 1, explanation: '[[The|El]] [[flight|vuelo]] [[arrives|llega]] [[in|en]] [[Barcelona|Barcelona]].' },
  { question: '[[The|El]] [[writer|autor]] [[needs|necesita]] [[a|un]] [[passport|pasaporte]] [[for|para]] [[the|el]] [[trip|viaje]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'True', explanation: '[[True|Verdadero]]. [[He|Él]] [[says|dice]] "[[pack my passport|hacer mi pasaporte]]".' },
];

export const UNIT_35_LESSON_3_READING: Exercise[] = QUESTIONS.map((q, i) => ({
  id: `a2-u35-l3-r${i + 1}`,
  type: 'reading',
  level: 'A2',
  topic: 'Travel Plans & Bookings',
  difficulty: 'easy',
  transcript: READING_TRANSCRIPT,
  content: { title: LESSON_TITLE, instructions: INSTRUCTIONS, questions: [q] },
  topicName: 'Reading',
}));
