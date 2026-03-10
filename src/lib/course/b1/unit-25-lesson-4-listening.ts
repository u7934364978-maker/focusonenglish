/**
 * Unidad 25 B1 — Lección 4: Comprensión auditiva (Repaso 21–24)
 * 15 actividades: mixed vocabulary from hobbies, house & home, daily activities, shopping
 */

import { Exercise } from '@/lib/exercise-generator';

const LESSON_TITLE = '[[Listening|Comprensión auditiva]]';
const LISTENING_TRANSCRIPT = `[[Hi|Hola]], [[I|yo]] [[am|soy]] [[Marcos|Marcos]]. [[I|Yo]] [[recently|recientemente]] [[moved|me mudé]] [[to|a]] [[a|un]] [[new|nuevo]] [[flat|piso]] [[with|con]] [[a|un]] [[big|gran]] [[kitchen|cocina]] [[and|y]] [[a|un]] [[small|pequeño]] [[balcony|balcón]]. [[My|Mi]] [[daily|diaria]] [[routine|rutina]] [[starts|empieza]] [[at|a]] [[seven|siete]] [[o\'clock|en punto]]. [[I|Yo]] [[wake up|me despierto]], [[do|hago]] [[some|algo de]] [[exercise|ejercicio]], [[and|y]] [[then|luego]] [[have|tomo]] [[breakfast|el desayuno]]. [[My|Mi]] [[commute|desplazamiento]] [[to|a]] [[work|trabajo]] [[is|es]] [[long|largo]] [[so|así que]] [[I|yo]] [[often|a menudo]] [[read|leo]] [[on|en]] [[the|el]] [[bus|autobús]]. [[Last|El pasado]] [[weekend|fin de semana]] [[I|yo]] [[went|fui]] [[shopping|de compras]] [[and|y]] [[bought|compré]] [[new|nuevos]] [[furniture|muebles]] [[for|para]] [[the|el]] [[living room|salón]]. [[I|Yo]] [[found|encontré]] [[a|un]] [[great|gran]] [[discount|descuento]] [[at|en]] [[the|la]] [[checkout|caja]]. [[In|En]] [[my|mi]] [[free time|tiempo libre]] [[I|yo]] [[enjoy|disfruto]] [[photography|la fotografía]] [[and|y]] [[gardening|la jardinería]] [[on|en]] [[my|mi]] [[balcony|balcón]].`;

const INSTRUCTIONS = 'Escucha el audio. Puedes leer la transcripción. Después responde las preguntas.';

const QUESTIONS = [
  { question: '[[What|Qué]] [[is Marcos talking about|está contando Marcos]]?', options: ['[[his job|su trabajo]]', '[[his new flat and daily routine|su nuevo piso y rutina diaria]]', '[[his family|su familia]]'], correctAnswer: 1, explanation: '[[He describes|Describe]] [[his flat and routine|su piso y rutina]].' },
  { question: '[[What|Qué]] [[does his flat have|tiene su piso]]?', options: ['[[a big bedroom|un gran dormitorio]]', '[[a big kitchen and small balcony|una gran cocina y pequeño balcón]]', '[[a garden|un jardín]]'], correctAnswer: 1, explanation: '[[He says|Dice]] "[[a flat with a big kitchen and a small balcony|un piso con una gran cocina y un pequeño balcón]]".' },
  { question: '[[When|Cuándo]] [[does his routine start|empieza su rutina]]?', options: ['[[at six|a las seis]]', '[[at seven|a las siete]]', '[[at eight|a las ocho]]'], correctAnswer: 1, explanation: '[[He says|Dice]] "[[my routine starts at seven o\'clock|mi rutina empieza a las siete]]".' },
  { question: '[[What|Qué]] [[does he do|hace]] [[in the morning|por la mañana]]?', options: ['[[cook|coe]]', '[[do some exercise|hace algo de ejercicio]]', '[[go shopping|va de compras]]'], correctAnswer: 1, explanation: '[[He says|Dice]] "[[I wake up, do some exercise|me despierto, hago algo de ejercicio]]".' },
  { question: '[[Where|Dónde]] [[does he read|lee]]?', options: ['[[at home|en casa]]', '[[on the bus|en el autobús]]', '[[at work|en el trabajo]]'], correctAnswer: 1, explanation: '[[He says|Dice]] "[[I often read on the bus|a menudo leo en el autobús]]".' },
  { question: '[[What|Qué]] [[did he buy|compró]] [[last weekend|el fin de semana pasado]]?', options: ['[[groceries|la compra]]', '[[new furniture for the living room|nuevos muebles para el salón]]', '[[a camera|cámara]]'], correctAnswer: 1, explanation: '[[He says|Dice]] "[[I bought new furniture for the living room|compré nuevos muebles para el salón]]".' },
  { question: '[[Where|Dónde]] [[did he find a discount|encontró un descuento]]?', options: ['[[at the supermarket|en el supermercado]]', '[[at the checkout|en la caja]]', '[[online|online]]'], correctAnswer: 1, explanation: '[[He says|Dice]] "[[I found a great discount at the checkout|encontré un gran descuento en la caja]]".' },
  { question: '[[Marcos|Marcos]] [[has|tiene]] [[a long commute|un largo desplazamiento]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'True', explanation: '[[True|Verdadero]]. [[He says|Dice]] "[[my commute to work is long|mi desplazamiento al trabajo es largo]]".' },
  { question: '[[Marcos|Marcos]] [[enjoys|disfruta]] [[photography|la fotografía]] [[and|y]] [[gardening|la jardinería]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'True', explanation: '[[True|Verdadero]]. [[The text says|El texto dice]] "[[I enjoy photography and gardening|disfruto la fotografía y la jardinería]]".' },
  { question: '[[Marcos|Marcos]] [[wakes up|se despierta]] [[at eight|a las ocho]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'False', explanation: '[[False|Falso]]. [[He wakes up at seven|Se despierta a las siete]].' },
  { question: '[[What|Cuál]] [[is|es]] [[the main topic|el tema principal]] [[of|del]] [[this listening|esta escucha]]?', options: ['[[Travel|Viajes]]', '[[New home and daily life|Nuevo hogar y vida diaria]]', '[[Food|Comida]]'], correctAnswer: 1, explanation: '[[The listening|La escucha]] [[describes|describe]] [[Marcos\' flat and routine|el piso y rutina de Marcos]].' },
  { question: '[[Marcos|Marcos]] [[recently moved|recientemente se mudó]] [[to a new flat|a un nuevo piso]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'True', explanation: '[[True|Verdadero]]. [[The text says|El texto dice]] "[[I recently moved to a new flat|recientemente me mudé a un nuevo piso]]".' },
  { question: '[[Marcos|Marcos]] [[does gardening|hace jardinería]] [[on his balcony|en su balcón]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'True', explanation: '[[True|Verdadero]]. [[The text says|El texto dice]] "[[gardening on my balcony|jardinería en mi balcón]]".' },
  { question: '[[Marcos|Marcos]] [[bought|compró]] [[furniture|muebles]] [[last weekend|el fin de semana pasado]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'True', explanation: '[[True|Verdadero]]. [[The text says|El texto dice]] "[[Last weekend I went shopping and bought new furniture|el fin de semana pasado fui de compras y compré nuevos muebles]]".' },
  { question: '[[Marcos|Marcos]] [[reads|lee]] [[during his commute|durante su desplazamiento]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'True', explanation: '[[True|Verdadero]]. [[The text says|El texto dice]] "[[I often read on the bus|a menudo leo en el autobús]]".' },
];

export const UNIT_25_LESSON_4_LISTENING: Exercise[] = QUESTIONS.map((q, i) => ({
  id: `b1-u25-l4-l${i + 1}`,
  type: 'listening',
  level: 'B1',
  topic: 'Review 21-24',
  difficulty: 'easy',
  transcript: LISTENING_TRANSCRIPT,
  content: { title: LESSON_TITLE, instructions: INSTRUCTIONS, questions: [q] },
  topicName: 'Listening',
}));
