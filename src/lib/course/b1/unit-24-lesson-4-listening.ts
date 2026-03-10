/**
 * Unidad 24 B1 — Lección 4: Comprensión auditiva (Phrasal verbs 2, Shopping)
 * 15 actividades
 */

import { Exercise } from '@/lib/exercise-generator';

const LESSON_TITLE = '[[Listening|Comprensión auditiva]]';
const LISTENING_TRANSCRIPT = `[[Hi|Hola]], [[I|yo]] [[am|soy]] [[Anna|Anna]] [[and|y]] [[I|yo]] [[want|quiero]] [[to tell|contar]] [[you|te]] [[about|sobre]] [[my|mi]] [[shopping|compras]] [[experience|experiencia]] [[yesterday|ayer]]. [[I|Yo]] [[went|fui]] [[to|a]] [[the|el]] [[mall|centro comercial]] [[to|para]] [[find out|averiguar]] [[the|los]] [[prices|precios]] [[of|de]] [[some|algunos]] [[laptops|portátiles]]. [[I|Yo]] [[found out|averigué]] [[that|que]] [[there was|había]] [[a|una]] [[big|gran]] [[sale|rebaja]]. [[I|Yo]] [[had to|tuve que]] [[fill in|rellenar]] [[a|un]] [[form|formulario]] [[to|para]] [[get|obtener]] [[the|el]] [[discount|descuento]]. [[I|Yo]] [[almost|casi]] [[gave up|abandoné]] [[because|porque]] [[the|la]] [[queue|cola]] [[was|estaba]] [[very long|muy larga]]. [[The|El]] [[manager|gerente]] [[said|dijo]] [[they|ellos]] [[would|investigarían]] [[look into|investigar]] [[my|mi]] [[complaint|queja]]. [[I|Yo]] [[handed in|entregué]] [[my|mi]] [[receipt|recibo]] [[and|y]] [[got|obtuve]] [[a refund|un reembolso]].`;

const INSTRUCTIONS = 'Escucha el audio. Puedes leer la transcripción. Después responde las preguntas.';

const QUESTIONS = [
  { question: '[[What|Qué]] [[did Anna want to find out|quería averiguar Anna]]?', options: ['[[the opening hours|los horarios]]', '[[the prices of laptops|los precios de los portátiles]]', '[[the address|la dirección]]'], correctAnswer: 1, explanation: '[[She says|Dice]] "[[I went to find out the prices of some laptops|fui para averiguar los precios de algunos portátiles]]".' },
  { question: '[[What|Qué]] [[did Anna find out|averiguó Anna]]?', options: ['[[the shop was closed|la tienda estaba cerrada]]', '[[there was a big sale|había una gran rebaja]]', '[[the products were expensive|los productos eran caros]]'], correctAnswer: 1, explanation: '[[She says|Dice]] "[[I found out that there was a big sale|averigué que había una gran rebaja]]".' },
  { question: '[[What|Qué]] [[did Anna have to fill in|tuvo que rellenar Anna]]?', options: ['[[a complaint form|un formulario de queja]]', '[[a form to get the discount|un formulario para obtener el descuento]]', '[[a refund form|un formulario de reembolso]]'], correctAnswer: 1, explanation: '[[She says|Dice]] "[[I had to fill in a form to get the discount|tuve que rellenar un formulario para obtener el descuento]]".' },
  { question: '[[Why|Por qué]] [[did Anna almost give up|casi abandonó Anna]]?', options: ['[[the prices were high|los precios eran altos]]', '[[the queue was very long|la cola era muy larga]]', '[[the shop was closed|la tienda estaba cerrada]]'], correctAnswer: 1, explanation: '[[She says|Dice]] "[[I almost gave up because the queue was very long|casi abandoné porque la cola era muy larga]]".' },
  { question: '[[What|Qué]] [[did the manager say|dijo el gerente]]?', options: ['[[they would look into her complaint|investigarían su queja]]', '[[they would give a refund|darían un reembolso]]', '[[they would close the shop|cerrarían la tienda]]'], correctAnswer: 0, explanation: '[[She says|Dice]] "[[they would look into my complaint|investigarían mi queja]]".' },
  { question: '[[What|Qué]] [[did Anna hand in|entregó Anna]]?', options: ['[[the product|el producto]]', '[[her receipt|su recibo]]', '[[the form|el formulario]]'], correctAnswer: 1, explanation: '[[She says|Dice]] "[[I handed in my receipt|entregué mi recibo]]".' },
  { question: '[[What|Qué]] [[did Anna get|obtuvo Anna]]?', options: ['[[a new product|un producto nuevo]]', '[[a refund|un reembolso]]', '[[a discount|un descuento]]'], correctAnswer: 1, explanation: '[[She says|Dice]] "[[I handed in my receipt and got a refund|entregué mi recibo y obtuve un reembolso]]".' },
  { question: '[[Anna|Anna]] [[went|fue]] [[shopping|de compras]] [[yesterday|ayer]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'True', explanation: '[[True|Verdadero]]. [[The text says|El texto dice]] "[[my shopping experience yesterday|mi experiencia de compras ayer]]".' },
  { question: '[[Anna|Anna]] [[gave up|abandonó]] [[completely|completamente]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'False', explanation: '[[False|Falso]]. [[She|Ella]] [[almost gave up|casi abandonó]] [[but didn\'t|pero no]].' },
  { question: '[[What|Cuál]] [[is|es]] [[the main topic|el tema principal]] [[of|del]] [[this listening|esta escucha]]?', options: ['[[Work|Trabajo]]', '[[Shopping and phrasal verbs|Compras y phrasal verbs]]', '[[Travel|Viajes]]'], correctAnswer: 1, explanation: '[[The listening|La escucha]] [[describes|describe]] [[Anna\'s shopping experience|la experiencia de compras de Anna]].' },
  { question: '[[Anna|Anna]] [[found out|averiguó]] [[about|sobre]] [[the sale|las rebajas]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'True', explanation: '[[True|Verdadero]]. [[The text says|El texto dice]] "[[I found out that there was a big sale|averigué que había una gran rebaja]]".' },
  { question: '[[Anna|Anna]] [[handed in|entregó]] [[her receipt|su recibo]] [[and got|y obtuvo]] [[a refund|un reembolso]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'True', explanation: '[[True|Verdadero]]. [[The text says|El texto dice]] "[[I handed in my receipt and got a refund|entregué mi recibo y obtuve un reembolso]]".' },
  { question: '[[Anna|Anna]] [[had|tuvo]] [[a complaint|una queja]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'True', explanation: '[[True|Verdadero]]. [[The text says|El texto dice]] "[[they would look into my complaint|investigarían mi queja]]".' },
  { question: '[[Anna|Anna]] [[filled in|rellenó]] [[a form|un formulario]] [[for|para]] [[the discount|el descuento]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'True', explanation: '[[True|Verdadero]]. [[The text says|El texto dice]] "[[I had to fill in a form to get the discount|tuve que rellenar un formulario para obtener el descuento]]".' },
  { question: '[[Anna|Anna]] [[went|fue]] [[to|a]] [[the mall|el centro comercial]] [[to|para]] [[find out|averiguar]] [[prices|precios]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'True', explanation: '[[True|Verdadero]]. [[The text says|El texto dice]] "[[I went to the mall to find out the prices|fui al centro comercial para averiguar los precios]]".' },
];

export const UNIT_24_LESSON_4_LISTENING: Exercise[] = QUESTIONS.map((q, i) => ({
  id: `b1-u24-l4-l${i + 1}`,
  type: 'listening',
  level: 'B1',
  topic: 'Shopping',
  difficulty: 'easy',
  transcript: LISTENING_TRANSCRIPT,
  content: { title: LESSON_TITLE, instructions: INSTRUCTIONS, questions: [q] },
  topicName: 'Listening',
}));
