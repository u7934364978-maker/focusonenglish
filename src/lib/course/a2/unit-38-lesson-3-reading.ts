/**
 * Unidad 38 — Lección 3: Comprensión lectora (Time Clauses)
 * 15 actividades: 1 texto + 15 preguntas
 */

import { Exercise } from '@/lib/exercise-generator';

const LESSON_TITLE = '[[Reading|Comprensión lectora]]';
const READING_TRANSCRIPT = `[[Dear|Querido]] [[Tom|Tom]], [[I|yo]] [[will|te]] [[call|llamaré]] [[you|te]] [[when|cuando]] [[I|yo]] [[arrive|llegue]] [[at|a]] [[the|el]] [[airport|aeropuerto]]. [[As soon as|Tan pronto como]] [[I|yo]] [[get|reciba]] [[my|mi]] [[luggage|equipaje]], [[I|yo]] [[will|]] [[leave|saldré]] [[the|del]] [[building|edificio]]. [[When|Cuando]] [[the|el]] [[bus|autobús]] [[arrives|llegue]], [[I|yo]] [[will|]] [[take|tomaré]] [[it|él]] [[to|a]] [[the|el]] [[city|centro]]. [[I|Yo]] [[will|te]] [[send|enviaré]] [[you|te]] [[a|un]] [[message|mensaje]] [[as soon as|tan pronto como]] [[I|yo]] [[arrive|llegue]] [[at|a]] [[the|el]] [[hotel|hotel]]. [[See|Nos]] [[you|vemos]] [[soon|pronto]]! [[Anna|Anna]]`;

const INSTRUCTIONS = 'Lee el texto de abajo. Después responde las preguntas.';

const QUESTIONS = [
  { question: '[[Who|Quién]] [[is|está]] [[writing|escribiendo]] [[the|la]] [[message|mensaje]]?', options: ['[[Tom|Tom]]', '[[Anna|Anna]]', '[[A|Un]] [[friend|amigo]]', '[[A|Un]] [[teacher|profesor]]'], correctAnswer: 1, explanation: '[[The|El]] [[message|mensaje]] [[ends|termina]] "[[Anna|Anna]]".' },
  { question: '[[What|Qué]] [[will|hará]] [[Anna|Anna]] [[do|Anna]] [[when|cuando]] [[she|ella]] [[arrives|llegue]] [[at|a]] [[the|el]] [[airport|aeropuerto]]?', options: ['[[Take|Tomar]] [[a|un]] [[bus|autobús]]', '[[Call|Llamar]] [[Tom|Tom]]', '[[Get|Recoger]] [[luggage|equipaje]]', '[[Leave|Marcharse]]'], correctAnswer: 1, explanation: '[[She|Ella]] [[says|dice]] "[[I will call you when I arrive|te llamaré cuando llegue]]".' },
  { question: '[[What|Qué]] [[will|hará]] [[Anna|Anna]] [[do|Anna]] [[as soon as|tan pronto como]] [[she|ella]] [[gets|reciba]] [[her|su]] [[luggage|equipaje]]?', options: ['[[Call|Llamar]] [[Tom|Tom]]', '[[Leave|Salir]] [[the|del]] [[building|edificio]]', '[[Take|Tomar]] [[the|el]] [[bus|autobús]]', '[[Send|Enviar]] [[a|un]] [[message|mensaje]]'], correctAnswer: 1, explanation: '[[She|Ella]] [[says|dice]] "[[I will leave the building|saldré del edificio]]".' },
  { question: '[[What|Qué]] [[will|hará]] [[Anna|Anna]] [[do|Anna]] [[when|cuando]] [[the|el]] [[bus|autobús]] [[arrives|llegue]]?', options: ['[[Call|Llamar]] [[Tom|Tom]]', '[[Take|Tomar]] [[it|él]] [[to|a]] [[the|el]] [[city|centro]]', '[[Get|Recoger]] [[luggage|equipaje]]', '[[Send|Enviar]] [[message|mensaje]]'], correctAnswer: 1, explanation: '[[She|Ella]] [[says|dice]] "[[I will take it to the city|iré al centro en él]]".' },
  { question: '[[When|Cuándo]] [[will|enviará]] [[Anna|Anna]] [[send|Anna]] [[Tom|Tom]] [[a|un]] [[message|mensaje]]?', options: ['[[When|Cuando]] [[she|ella]] [[arrives|llega]] [[at|a]] [[airport|aeropuerto]]', '[[As soon as|Tan pronto como]] [[she|ella]] [[arrives|llega]] [[at|a]] [[hotel|hotel]]', '[[When|Cuando]] [[bus|autobús]] [[arrives|llegue]]', '[[Before|Antes]] [[she|ella]] [[leaves|sale]]'], correctAnswer: 1, explanation: '[[She|Ella]] [[says|dice]] "[[as soon as I arrive at the hotel|tan pronto como llegue al hotel]]".' },
  { question: '[[Anna|Anna]] [[uses|usa]] [[when|when]] [[and|y]] [[as soon as|as soon as]] [[for|para]] ____.', options: ['[[past|pasado]]', '[[time|tiempo]] [[clauses|temporales]] [[for|para]] [[future|futuro]]', '[[present|presente]]', '[[habits|hábitos]]'], correctAnswer: 1, explanation: '[[Time|Oraciones]] [[clauses|temporales]] [[for|para]] [[future|futuro]].' },
  { question: '[[In|En]] [[time|oraciones]] [[clauses|temporales]] [[Anna|Anna]] [[uses|usa]] ____ ____ ____ ____ [[present|presente]] ____ ____ ____ ____ [[simple|simple]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'True', explanation: '[[True|Verdadero]]. [[When I arrive|Cuando llegue]], [[as soon as I get|tan pronto como reciba]].' },
  { question: '[[Anna|Anna]] [[is|está]] ____ ____ ____ ____ [[travelling|viajando]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'True', explanation: '[[True|Verdadero]]. [[She|Ella]] [[mentions|menciona]] [[airport|aeropuerto]], [[luggage|equipaje]], [[hotel|hotel]].' },
  { question: '[[What|Cuál]] [[is|es]] [[the|el]] [[main|principal]] [[topic|tema]]?', options: ['[[Past|Eventos]] [[events|pasados]]', '[[Time|Oraciones]] [[clauses|temporales]] [[when|when]] [[and|y]] [[as soon as|as soon as]]', '[[Weather|Tiempo]]', '[[Shopping|Compras]]'], correctAnswer: 1, explanation: '[[The|El]] [[text|texto]] [[uses|usa]] [[time|oraciones]] [[clauses|temporales]].' },
  { question: '[[How many|Cuántas]] [[time|oraciones]] [[clauses|temporales]] [[does|usa]] [[Anna|Anna]] [[use|Anna]]?', options: ['[[one|una]]', '[[two|dos]]', '[[three|tres]]', '[[four|cuatro]]'], correctAnswer: 3, explanation: '[[Four|Cuatro]]: [[when I arrive|cuando llegue]], [[as soon as I get|tan pronto como reciba]], [[when bus arrives|cuando llegue autobús]], [[as soon as I arrive|tan pronto como llegue]].' },
  { question: '[[What|Qué]] [[will|enviará]] [[Anna|Anna]] [[send|Anna]] [[to|a]] [[Tom|Tom]]?', options: ['[[A|Una]] [[call|llamada]]', '[[A|Un]] [[message|mensaje]]', '[[A|Una]] [[letter|carta]]', '[[An|Un]] [[email|email]]'], correctAnswer: 1, explanation: '[[She|Ella]] [[says|dice]] "[[I will send you a message|te enviaré un mensaje]]".' },
  { question: '[[The|El]] [[bus|autobús]] [[goes|va]] [[to|a]] [[the|el]] [[city|centro]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'True', explanation: '[[True|Verdadero]]. [[She|Ella]] [[says|dice]] "[[take it to the city|ir al centro en él]]".' },
  { question: '[[What|Qué]] [[does|usa]] [[Anna|Anna]] [[use|Anna]] [[for|para]] [[main|oraciones]] [[clauses|principales]]?', options: ['[[will|will]]', '[[would|would]]', '[[present|presente]]', '[[past|pasado]]'], correctAnswer: 0, explanation: '[[Will|Will]] [[for|para]] [[future|futuro]] [[in|en]] [[main|oraciones]] [[clauses|principales]].' },
  { question: '[[Where|Dónde]] [[will|irá]] [[Anna|Anna]] [[go|Anna]] [[first|primero]]?', options: ['[[Hotel|Hotel]]', '[[Airport|Aeropuerto]]', '[[City|Centro]]', '[[Bus station|Estación]]'], correctAnswer: 1, explanation: '[[She|Ella]] [[arrives|llega]] [[at|a]] [[airport|aeropuerto]] [[first|primero]].' },
  { question: '[[The|El]] [[message|mensaje]] [[is|es]] [[informal|informal]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'True', explanation: '[[It|Es]] [[is|un]] [[informal|mensaje]] [[message|informal]] [[to|a]] [[friend|amigo]].' },
];

export const UNIT_38_LESSON_3_READING: Exercise[] = QUESTIONS.map((q, i) => ({
  id: `a2-u38-l3-r${i + 1}`,
  type: 'reading',
  level: 'A2',
  topic: 'Time Clauses: When, As soon as',
  difficulty: 'easy',
  transcript: READING_TRANSCRIPT,
  content: { title: LESSON_TITLE, instructions: INSTRUCTIONS, questions: [q] },
  topicName: 'Reading',
}));
