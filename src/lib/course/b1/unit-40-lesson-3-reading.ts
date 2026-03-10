/**
 * Unidad 40 B1 — Lección 3: Comprensión lectora (Repaso 36–39)
 * 15 actividades
 */

import { Exercise } from '@/lib/exercise-generator';

const LESSON_TITLE = '[[Reading|Comprensión lectora]]';
const READING_TRANSCRIPT = `[[Last|El pasado]] [[weekend|fin de semana]] [[I|yo]] [[had|tuve]] [[such a|un]] [[wonderful|maravilloso]] [[time|tiempo]] [[that|que]] [[I|yo]] [[don't want|no quiero]] [[to go back|volver]] [[to work|al trabajo]]. [[Although|Aunque]] [[the weather|el tiempo]] [[was|era]] [[bad|malo]] [[at first|al principio]], [[it|él]] [[improved|mejoró]] [[and|y]] [[we|nosotros]] [[went on|hicimos]] [[a|un]] [[two-day|de dos días]] [[trip|viaje]] [[to|a]] [[the coast|la costa]]. [[We|Nosotros]] [[stayed at|nos alojamos en]] [[a|un]] [[five-star|de cinco estrellas]] [[hotel|hotel]] [[because|porque]] [[we|nosotros]] [[wanted|queríamos]] [[to|para]] [[relax|relajarnos]] [[properly|correctamente]]. [[However|Sin embargo]], [[the|el]] [[restaurant|restaurante]] [[was|era]] [[extremely|extremadamente]] [[expensive|caro]]. [[I|yo]] [[am|estoy]] [[convinced|convencido]] [[that|que]] [[we|nosotros]] [[will|vamos a]] [[return|volver]] [[to|a]] [[this|esta]] [[place|lugar]] [[so that|para que]] [[we|nosotros]] [[can|podamos]] [[explore|explorar]] [[more|más]] [[next|el próximo]] [[time|vez]].`;

const INSTRUCTIONS = 'Lee el texto de abajo. Después responde las preguntas.';

const QUESTIONS = [
  { question: '[[What|Qué]] [[did the person have last weekend|tuvo la persona el pasado fin de semana]]?', options: ['[[a boring time|un tiempo aburrido]]', '[[a wonderful time|un tiempo maravilloso]]', '[[work|trabajo]]'], correctAnswer: 1, explanation: '[[The text says|El texto dice]] "[[such a wonderful time|un tiempo maravilloso]]".' },
  { question: '[[What|Qué]] [[was the weather like at first|era el tiempo al principio]]?', options: ['[[good|bueno]]', '[[bad|malo]]', '[[hot|caliente]]'], correctAnswer: 1, explanation: '[[The text says|El texto dice]] "[[Although the weather was bad at first|aunque el tiempo era malo al principio]]".' },
  { question: '[[What|Qué]] [[type of trip|tipo de viaje]] [[did they go on|hicieron]]?', options: ['[[a one-day trip|un viaje de un día]]', '[[a two-day trip|un viaje de dos días]]', '[[a week trip|un viaje de una semana]]'], correctAnswer: 1, explanation: '[[The text says|El texto dice]] "[[we went on a two-day trip|hicimos un viaje de dos días]]".' },
  { question: '[[Why|Por qué]] [[did they stay at a five-star hotel|se alojaron en un hotel de cinco estrellas]]?', options: ['[[because it was cheap|porque era barato]]', '[[because they wanted to relax properly|porque querían relajarse correctamente]]', '[[because of the weather|debido al tiempo]]'], correctAnswer: 1, explanation: '[[The text says|El texto dice]] "[[because we wanted to relax properly|porque queríamos relajarnos correctamente]]".' },
  { question: '[[What|Qué]] [[was the restaurant like|era el restaurante]]?', options: ['[[cheap|barato]]', '[[extremely expensive|extremadamente caro]]', '[[average|normal]]'], correctAnswer: 1, explanation: '[[The text says|El texto dice]] "[[the restaurant was extremely expensive|el restaurante era extremadamente caro]]".' },
  { question: '[[Will|Va]] [[the person return|la persona volver]] [[to this place|a este lugar]]?', options: ['[[No|No]]', '[[Yes, to explore more|Sí, para explorar más]]', '[[Maybe|Quizás]]'], correctAnswer: 1, explanation: '[[The text says|El texto dice]] "[[we will return to this place so that we can explore more|vamos a volver a este lugar para que podamos explorar más]]".' },
  { question: '[[Which contrast word|Qué palabra de contraste]] [[is used|se usa]] [[for the weather|para el tiempo]]?', options: ['[[however|sin embargo]]', '[[although|aunque]]', '[[but|pero]]'], correctAnswer: 1, explanation: '[[Although|Aunque]] [[introduces the contrast|introduce el contraste]].' },
  { question: '[[Which structure|Qué estructura]] [[expresses purpose|expresa propósito]] [[for "explore more"|para "explorar más"]]?', options: ['[[because|porque]]', '[[so that|para que]]', '[[because of|debido a]]'], correctAnswer: 1, explanation: '[[So that|Para que]] + [[subject + verb|sujeto + verbo]] = [[purpose|propósito]].' },
  { question: '[[The person|La persona]] [[wants|quiere]] [[to go back to work|volver al trabajo]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'False', explanation: '[[False|Falso]]. [[They don\'t want to go back to work|No quieren volver al trabajo]].' },
  { question: '[[What|Cuál]] [[is|es]] [[the main topic|el tema principal]] [[of|del]] [[this text|este texto]]?', options: ['[[Work|Trabajo]]', '[[A wonderful weekend trip to the coast|Un fin de semana maravilloso en la costa]]', '[[Weather|Tiempo]]'], correctAnswer: 1, explanation: '[[The text|El texto]] [[describes|describe]] [[a weekend trip|un viaje de fin de semana]].' },
  { question: '[[The hotel|El hotel]] [[was|era]] [[five-star|de cinco estrellas]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'True', explanation: '[[True|Verdadero]]. [[The text says|El texto dice]] "[[a five-star hotel|un hotel de cinco estrellas]]".' },
  { question: '[[Which intensifier|Qué intensificador]] [[describes the restaurant|describe el restaurante]]?', options: ['[[slightly|ligeramente]]', '[[extremely|extremadamente]]', '[[a bit|un poco]]'], correctAnswer: 1, explanation: '[[The text uses|El texto usa]] "[[extremely expensive|extremadamente caro]]".' },
  { question: '[[They|Ellos]] [[went|fueron]] [[to the coast|a la costa]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'True', explanation: '[[True|Verdadero]]. [[The text says|El texto dice]] "[[a two-day trip to the coast|un viaje de dos días a la costa]]".' },
  { question: '[[The weather|El tiempo]] [[improved|mejoró]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'True', explanation: '[[True|Verdadero]]. [[The text says|El texto dice]] "[[it improved|mejoró]]".' },
  { question: '[[Which compound adjective|Qué adjetivo compuesto]] [[describes the trip|describe el viaje]]?', options: ['[[five-star|de cinco estrellas]]', '[[two-day|de dos días]]', '[[extremely|extremadamente]]'], correctAnswer: 1, explanation: '[[Two-day|De dos días]] [[describes the trip|describe el viaje]].' },
];

export const UNIT_40_LESSON_3_READING: Exercise[] = QUESTIONS.map((q, i) => ({
  id: `b1-u40-l3-r${i + 1}`,
  type: 'reading',
  level: 'B1',
  topic: 'Review 36-39',
  difficulty: 'easy',
  transcript: READING_TRANSCRIPT,
  content: { title: LESSON_TITLE, instructions: INSTRUCTIONS, questions: [q] },
  topicName: 'Reading',
}));
