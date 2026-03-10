/**
 * Unidad 54 B1 — Lección 4: Comprensión auditiva (Tenses, Mixed topics)
 * 15 actividades
 */

import { Exercise } from '@/lib/exercise-generator';

const LESSON_TITLE = '[[Listening|Comprensión auditiva]]';
const LISTENING_TRANSCRIPT = `[[Hi|Hola]], [[I|yo]] [[am|soy]] [[Tom|Tom]] [[and|y]] [[I|yo]] [[want|quiero]] [[to|a]] [[tell|contar]] [[you|te]] [[about|sobre]] [[my week|mi semana]]. [[I|Yo]] [[have been working|he estado trabajando]] [[on a project|en un proyecto]] [[since Monday|desde el lunes]]. [[Yesterday|Ayer]] [[I|yo]] [[finished|terminé]] [[it|él]] [[and|y]] [[my boss|mi jefe]] [[was pleased|estaba contento]]. [[Next Saturday|El próximo sábado]] [[I|yo]] [[am flying|estoy volando]] [[to Barcelona|a Barcelona]] [[for a conference|para una conferencia]]. [[By the end of the month|Para finales del mes]], [[I|yo]] [[will have attended|habré asistido]] [[three conferences|tres conferencias]] [[this year|este año]]. [[The sun|El sol]] [[rises|sale]] [[in the east|por el este]] — [[everyone knows that|todo el mundo lo sabe]].`;

const INSTRUCTIONS = 'Escucha el audio. Puedes leer la transcripción. Después responde las preguntas.';

const QUESTIONS = [
  { question: '[[What|Cuál]] [[is the speaker\'s name|es el nombre del hablante]]?', options: ['[[Tim|Tim]]', '[[Tom|Tom]]', '[[Tony|Tony]]'], correctAnswer: 1, explanation: '[[He says|Dice]] "[[I am Tom|soy Tom]]".' },
  { question: '[[How long|Cuánto tiempo]] [[has Tom been working|ha estado trabajando Tom]] [[on the project|en el proyecto]]?', options: ['[[Since Monday|Desde el lunes]]', '[[Since last week|Desde la semana pasada]]', '[[Since yesterday|Desde ayer]]'], correctAnswer: 0, explanation: '[[He says|Dice]] "[[I have been working on a project since Monday|he estado trabajando en un proyecto desde el lunes]]".' },
  { question: '[[When|Cuándo]] [[did Tom finish|terminó Tom]] [[the project|el proyecto]]?', options: ['[[Today|Hoy]]', '[[Yesterday|Ayer]]', '[[Last week|La semana pasada]]'], correctAnswer: 1, explanation: '[[He says|Dice]] "[[Yesterday I finished it|ayer lo terminé]]".' },
  { question: '[[Where|Dónde]] [[is Tom flying|está volando Tom]] [[next Saturday|el próximo sábado]]?', options: ['[[London|Londres]]', '[[Barcelona|Barcelona]]', '[[Madrid|Madrid]]'], correctAnswer: 1, explanation: '[[He says|Dice]] "[[I am flying to Barcelona|estoy volando a Barcelona]]".' },
  { question: '[[What|Qué]] [[will Tom have done|habrá hecho Tom]] [[by the end of the month|para finales del mes]]?', options: ['[[Finished the project|Terminado el proyecto]]', '[[Attended three conferences|Asistido a tres conferencias]]', '[[Flown to Barcelona|Volado a Barcelona]]'], correctAnswer: 1, explanation: '[[He says|Dice]] "[[I will have attended three conferences|habré asistido a tres conferencias]]".' },
  { question: '[[Tom\'s boss|El jefe de Tom]] [[was pleased|estaba contento]] [[with|con]] [[the project|el proyecto]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'True', explanation: '[[True|Verdadero]]. [[He says|Dice]] "[[my boss was pleased|mi jefe estaba contento]]".' },
  { question: '[[The sun rises in the east|El sol sale por el este]] [[is|es]] [[a general truth|una verdad general]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'True', explanation: '[[True|Verdadero]]. [[Present simple|Presente simple]] [[for facts|para hechos]].' },
  { question: '[[Tom|Tom]] [[uses|usa]] [[present perfect continuous|presente perfecto continuo]] [[for|para]] [[the project|el proyecto]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'True', explanation: '[[True|Verdadero]]. "[[I have been working|he estado trabajando]]".' },
  { question: '[[What|Cuál]] [[is|es]] [[the main topic|el tema principal]] [[of|del]] [[this listening|esta escucha]]?', options: ['[[Food|Comida]]', '[[Work and travel|Trabajo y viajes]]', '[[Weather|Tiempo]]'], correctAnswer: 1, explanation: '[[The listening|La escucha]] [[talks about|habla sobre]] [[work and travel|trabajo y viajes]].' },
  { question: '[[Tom|Tom]] [[is going to|va a]] [[Barcelona|Barcelona]] [[for a conference|para una conferencia]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'True', explanation: '[[True|Verdadero]]. [[He says|Dice]] "[[I am flying to Barcelona for a conference|estoy volando a Barcelona para una conferencia]]".' },
  { question: '[[Past simple|Pasado simple]] [[is used|se usa]] [[for|para]] [[finishing the project|terminar el proyecto]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'True', explanation: '[[True|Verdadero]]. "[[I finished it|lo terminé]]".' },
  { question: '[[Future perfect|Futuro perfecto]] [[describes|describe]] [[attending conferences|asistir a conferencias]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'True', explanation: '[[True|Verdadero]]. "[[I will have attended three conferences|habré asistido a tres conferencias]]".' },
  { question: '[[Present continuous|Presente continuo]] [[is used|se usa]] [[for|para]] [[future plans|planes futuros]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'True', explanation: '[[True|Verdadero]]. "[[I am flying to Barcelona|estoy volando a Barcelona]]".' },
  { question: '[[Tom|Tom]] [[finished|terminó]] [[the project|el proyecto]] [[today|hoy]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'False', explanation: '[[False|Falso]]. [[He finished yesterday|Terminó ayer]].' },
  { question: '[[The listening|La escucha]] [[mentions|menciona]] [[at least|al menos]] [[three|tres]] [[different tenses|tiempos diferentes]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'True', explanation: '[[True|Verdadero]]. [[Present perfect continuous|Presente perfecto continuo]], [[past simple|pasado simple]], [[present continuous|presente continuo]], [[future perfect|futuro perfecto]], [[present simple|presente simple]].' },
];

export const UNIT_54_LESSON_4_LISTENING: Exercise[] = QUESTIONS.map((q, i) => ({
  id: `b1-u54-l4-l${i + 1}`,
  type: 'listening',
  level: 'B1',
  topic: 'Tenses',
  difficulty: 'easy',
  transcript: LISTENING_TRANSCRIPT,
  content: { title: LESSON_TITLE, instructions: INSTRUCTIONS, questions: [q] },
  topicName: 'Listening',
}));
