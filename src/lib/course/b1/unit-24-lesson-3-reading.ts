/**
 * Unidad 24 B1 — Lección 3: Comprensión lectora (Phrasal verbs 2, Shopping)
 * 15 actividades
 */

import { Exercise } from '@/lib/exercise-generator';

const LESSON_TITLE = '[[Reading|Comprensión lectora]]';
const READING_TRANSCRIPT = `[[Last|La pasada]] [[week|semana]] [[I|yo]] [[went|fui]] [[to|a]] [[a|una]] [[new|nueva]] [[shopping centre|centro comercial]] [[to|para]] [[buy|comprar]] [[a|un]] [[birthday|cumpleaños]] [[present|regalo]]. [[I|Yo]] [[wanted|quería]] [[to|a]] [[find out|averiguar]] [[the|los]] [[opening hours|horarios]] [[first|primero]]. [[I|Yo]] [[found out|averigué]] [[that|que]] [[the|el]] [[shop|centro]] [[opens|abre]] [[at|a]] [[10|10]] [[am|am]]. [[I|Yo]] [[had to|tuve que]] [[fill in|rellenar]] [[a|un]] [[form|formulario]] [[for|para]] [[the|la]] [[loyalty|fidelidad]] [[card|tarjeta]]. [[I|Yo]] [[almost|casi]] [[gave up|abandoné]] [[looking for|buscando]] [[the|el]] [[perfect|perfecto]] [[gift|regalo]] [[because|porque]] [[there|había]] [[were|había]] [[so many|tantas]] [[options|opciones]]. [[The|El]] [[shop assistant|dependiente]] [[said|dijo]] [[they|ellos]] [[would|investigarían]] [[look into|investigar]] [[my|mi]] [[complaint|queja]] [[about|sobre]] [[the|el]] [[wrong|incorrecto]] [[size|talla]]. [[I|Yo]] [[handed in|entregué]] [[my|mi]] [[receipt|recibo]] [[to get|para obtener]] [[a refund|un reembolso]].`;

const INSTRUCTIONS = 'Lee el texto de abajo. Después responde las preguntas.';

const QUESTIONS = [
  { question: '[[Where|Dónde]] [[did the person go|fue la persona]] [[last week|la semana pasada]]?', options: ['[[to a museum|a un museo]]', '[[to a shopping centre|a un centro comercial]]', '[[to a park|a un parque]]'], correctAnswer: 1, explanation: '[[The text says|El texto dice]] "[[I went to a new shopping centre|fui a un centro comercial nuevo]]".' },
  { question: '[[What|Qué]] [[did they want to find out|querían averiguar]]?', options: ['[[the prices|los precios]]', '[[the opening hours|los horarios]]', '[[the address|la dirección]]'], correctAnswer: 1, explanation: '[[The text says|El texto dice]] "[[I wanted to find out the opening hours|quería averiguar los horarios]]".' },
  { question: '[[What time|A qué hora]] [[does the shop open|abre la tienda]]?', options: ['[[9 am|a las 9]]', '[[10 am|a las 10]]', '[[11 am|a las 11]]'], correctAnswer: 1, explanation: '[[The text says|El texto dice]] "[[the shop opens at 10 am|el centro abre a las 10]]".' },
  { question: '[[What|Qué]] [[did they have to fill in|tuvo que rellenar]]?', options: ['[[a complaint form|un formulario de queja]]', '[[a loyalty card form|un formulario de tarjeta de fidelidad]]', '[[a refund form|un formulario de reembolso]]'], correctAnswer: 1, explanation: '[[The text says|El texto dice]] "[[I had to fill in a form for the loyalty card|tuve que rellenar un formulario para la tarjeta de fidelidad]]".' },
  { question: '[[What|Qué]] [[did they almost give up|casi abandonó]]?', options: ['[[paying|pagar]]', '[[looking for the perfect gift|buscando el regalo perfecto]]', '[[going home|ir a casa]]'], correctAnswer: 1, explanation: '[[The text says|El texto dice]] "[[I almost gave up looking for the perfect gift|casi abandoné buscando el regalo perfecto]]".' },
  { question: '[[What|Qué]] [[did the shop assistant say they would look into|dijo el dependiente que investigarían]]?', options: ['[[the price|el precio]]', '[[the complaint about the wrong size|la queja sobre la talla incorrecta]]', '[[the refund|el reembolso]]'], correctAnswer: 1, explanation: '[[The text says|El texto dice]] "[[they would look into my complaint about the wrong size|investigarían mi queja sobre la talla incorrecta]]".' },
  { question: '[[What|Qué]] [[did they hand in|entregó]] [[to get a refund|para obtener un reembolso]]?', options: ['[[the product|el producto]]', '[[the receipt|el recibo]]', '[[the loyalty card|la tarjeta de fidelidad]]'], correctAnswer: 1, explanation: '[[The text says|El texto dice]] "[[I handed in my receipt to get a refund|entregué mi recibo para obtener un reembolso]]".' },
  { question: '[[The person|La persona]] [[went|fue]] [[to buy|a comprar]] [[a birthday present|un regalo de cumpleaños]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'True', explanation: '[[True|Verdadero]]. [[The text says|El texto dice]] "[[to buy a birthday present|para comprar un regalo de cumpleaños]]".' },
  { question: '[[The person|La persona]] [[gave up|abandonó]] [[looking for|buscando]] [[the gift|el regalo]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'False', explanation: '[[False|Falso]]. [[They|Ellos]] [[almost gave up|casi abandonaron]] [[but didn\'t|pero no]].' },
  { question: '[[What|Cuál]] [[is|es]] [[the main topic|el tema principal]] [[of|del]] [[this text|este texto]]?', options: ['[[Work|Trabajo]]', '[[Shopping experience and phrasal verbs|Experiencia de compras y phrasal verbs]]', '[[Travel|Viajes]]'], correctAnswer: 1, explanation: '[[The text|El texto]] [[talks about|habla de]] [[shopping|compras]] [[and|y]] [[phrasal verbs|phrasal verbs]].' },
  { question: '[[Which phrasal verb|Qué phrasal verb]] [[means|significa]] [[to discover information|descubrir información]]?', options: ['[[give up|rendirse]]', '[[find out|averiguar]]', '[[hand in|entregar]]'], correctAnswer: 1, explanation: '[[Find out|Averiguar]] = [[discover|descubrir]].' },
  { question: '[[The person|La persona]] [[handed in|entregó]] [[the receipt|el recibo]] [[for|para]] [[a refund|un reembolso]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'True', explanation: '[[True|Verdadero]]. [[The text says|El texto dice]] "[[I handed in my receipt to get a refund|entregué mi recibo para obtener un reembolso]]".' },
  { question: '[[The person|La persona]] [[filled in|rellenó]] [[a form|un formulario]] [[for|para]] [[the loyalty card|la tarjeta de fidelidad]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'True', explanation: '[[True|Verdadero]]. [[The text says|El texto dice]] "[[I had to fill in a form for the loyalty card|tuve que rellenar un formulario para la tarjeta de fidelidad]]".' },
  { question: '[[The shop|La tienda]] [[opens|abre]] [[at|a]] [[10 am|las 10]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'True', explanation: '[[True|Verdadero]]. [[The text says|El texto dice]] "[[the shop opens at 10 am|el centro abre a las 10]]".' },
  { question: '[[The person|La persona]] [[had|tuvo]] [[a complaint|una queja]] [[about|sobre]] [[the|la]] [[wrong size|talla incorrecta]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'True', explanation: '[[True|Verdadero]]. [[The text says|El texto dice]] "[[my complaint about the wrong size|mi queja sobre la talla incorrecta]]".' },
];

export const UNIT_24_LESSON_3_READING: Exercise[] = QUESTIONS.map((q, i) => ({
  id: `b1-u24-l3-r${i + 1}`,
  type: 'reading',
  level: 'B1',
  topic: 'Shopping',
  difficulty: 'easy',
  transcript: READING_TRANSCRIPT,
  content: { title: LESSON_TITLE, instructions: INSTRUCTIONS, questions: [q] },
  topicName: 'Reading',
}));
