/**
 * Unidad 25 B1 — Lección 3: Comprensión lectora (Repaso 21–24)
 * 15 actividades: mixed vocabulary from hobbies, house & home, daily activities, shopping
 */

import { Exercise } from '@/lib/exercise-generator';

const LESSON_TITLE = '[[Reading|Comprensión lectora]]';
const READING_TRANSCRIPT = `[[My|Mi]] [[name|nombre]] [[is|es]] [[Sofia|Sofía]] [[and|y]] [[I|yo]] [[live|vivo]] [[in|en]] [[a|un]] [[small|pequeño]] [[flat|piso]] [[with|con]] [[a|un]] [[balcony|balcón]] [[where|donde]] [[I|yo]] [[enjoy|disfruto]] [[gardening|la jardinería]]. [[Every|Cada]] [[morning|mañana]] [[I|yo]] [[wake up|me despierto]] [[early|temprano]], [[have|tomo]] [[breakfast|el desayuno]] [[in|en]] [[the|la]] [[kitchen|cocina]], [[and|y]] [[then|luego]] [[my|mi]] [[commute|desplazamiento]] [[to|a]] [[work|trabajo]] [[takes|toma]] [[about|unos]] [[thirty|treinta]] [[minutes|minutos]]. [[During|Durante]] [[my|mi]] [[lunch break|pausa para comer]] [[I|yo]] [[often|a menudo]] [[go|voy]] [[to|al]] [[supermarket|supermercado]] [[to|para]] [[buy|comprar]] [[groceries|la compra]] [[and|y]] [[I|yo]] [[always|siempre]] [[look for|busco]] [[discounts|descuentos]]. [[In|En]] [[the|la]] [[evening|tarde]] [[I|yo]] [[do|hago]] [[my|mis]] [[chores|tareas domésticas]] [[and|y]] [[relax|me relajo]] [[on|en]] [[the|el]] [[sofa|sofá]] [[with|con]] [[a|un]] [[book|libro]]. [[At|Los]] [[weekends|fines de semana]] [[I|yo]] [[love|me encanta]] [[photography|la fotografía]] [[and|y]] [[cycling|ciclismo]].`;

const INSTRUCTIONS = 'Lee el texto de abajo. Después responde las preguntas.';

const QUESTIONS = [
  { question: '[[What|Qué]] [[is Sofia\'s hobby|es el hobby de Sofía]] [[on the balcony|en el balcón]]?', options: ['[[gardening|jardinería]]', '[[cooking|cocina]]', '[[painting|pintura]]'], correctAnswer: 0, explanation: '[[The text says|El texto dice]] "[[I enjoy gardening|disfruto la jardinería]]".' },
  { question: '[[Where|Dónde]] [[does she have breakfast|toma el desayuno]]?', options: ['[[in the kitchen|en la cocina]]', '[[in the bedroom|en el dormitorio]]', '[[on the balcony|en el balcón]]'], correctAnswer: 0, explanation: '[[The text says|El texto dice]] "[[have breakfast in the kitchen|tomo el desayuno en la cocina]]".' },
  { question: '[[How long|Cuánto tiempo]] [[does her commute take|tarda su desplazamiento]]?', options: ['[[fifteen minutes|quince minutos]]', '[[thirty minutes|treinta minutos]]', '[[one hour|una hora]]'], correctAnswer: 1, explanation: '[[The text says|El texto dice]] "[[my commute takes about thirty minutes|mi desplazamiento toma unos treinta minutos]]".' },
  { question: '[[When|Cuándo]] [[does she go to the supermarket|va al supermercado]]?', options: ['[[in the morning|por la mañana]]', '[[during her lunch break|durante su pausa para comer]]', '[[in the evening|por la tarde]]'], correctAnswer: 1, explanation: '[[The text says|El texto dice]] "[[During my lunch break I often go to the supermarket|Durante mi pausa para comer voy al supermercado]]".' },
  { question: '[[What|Qué]] [[does she look for|busca]] [[when shopping|cuando compra]]?', options: ['[[new clothes|ropa nueva]]', '[[discounts|descuentos]]', '[[organic food|comida orgánica]]'], correctAnswer: 1, explanation: '[[The text says|El texto dice]] "[[I always look for discounts|siempre busco descuentos]]".' },
  { question: '[[Where|Dónde]] [[does she relax|se relaja]] [[in the evening|por la tarde]]?', options: ['[[in the kitchen|en la cocina]]', '[[on the sofa|en el sofá]]', '[[on the balcony|en el balcón]]'], correctAnswer: 1, explanation: '[[The text says|El texto dice]] "[[relax on the sofa with a book|me relajo en el sofá con un libro]]".' },
  { question: '[[What|Qué]] [[weekend hobbies|hobbies de fin de semana]] [[does she mention|menciona]]?', options: ['[[gardening and cooking|jardinería y cocina]]', '[[photography and cycling|fotografía y ciclismo]]', '[[reading and shopping|lectura y compras]]'], correctAnswer: 1, explanation: '[[The text says|El texto dice]] "[[I love photography and cycling|me encanta la fotografía y el ciclismo]]".' },
  { question: '[[Sofia|Sofía]] [[lives|vive]] [[in a house|en una casa]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'False', explanation: '[[False|Falso]]. [[She lives in a small flat|Vive en un pequeño piso]].' },
  { question: '[[Sofia|Sofía]] [[has|tiene]] [[a balcony|un balcón]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'True', explanation: '[[True|Verdadero]]. [[The text says|El texto dice]] "[[a flat with a balcony|un piso con un balcón]]".' },
  { question: '[[Sofia|Sofía]] [[does chores|hace tareas domésticas]] [[in the evening|por la tarde]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'True', explanation: '[[True|Verdadero]]. [[The text says|El texto dice]] "[[In the evening I do my chores|En la tarde hago mis tareas domésticas]]".' },
  { question: '[[What|Cuál]] [[is|es]] [[the main topic|el tema principal]] [[of|del]] [[this text|este texto]]?', options: ['[[Work|Trabajo]]', '[[Daily routine, home and hobbies|Rutina diaria, hogar y hobbies]]', '[[Travel|Viajes]]'], correctAnswer: 1, explanation: '[[The text|El texto]] [[describes|describe]] [[Sofia\'s daily life|la vida diaria de Sofía]] [[at home and work|en casa y trabajo]].' },
  { question: '[[Sofia|Sofía]] [[wakes up|se despierta]] [[late|tarde]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'False', explanation: '[[False|Falso]]. [[She wakes up early|Se despierta temprano]].' },
  { question: '[[Sofia|Sofía]] [[reads|lee]] [[in the evening|por la tarde]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'True', explanation: '[[True|Verdadero]]. [[The text says|El texto dice]] "[[relax on the sofa with a book|me relajo en el sofá con un libro]]".' },
  { question: '[[Where|Dónde]] [[does Sofia buy groceries|compra Sofía la compra]]?', options: ['[[at a market|en un mercado]]', '[[at the supermarket|en el supermercado]]', '[[online|online]]'], correctAnswer: 1, explanation: '[[The text says|El texto dice]] "[[go to the supermarket to buy groceries|voy al supermercado para comprar la compra]]".' },
  { question: '[[Sofia|Sofía]] [[enjoys|disfruta]] [[gardening|la jardinería]] [[on her balcony|en su balcón]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'True', explanation: '[[True|Verdadero]]. [[The text says|El texto dice]] "[[I enjoy gardening|disfruto la jardinería]]" [[on the balcony|en el balcón]].' },
];

export const UNIT_25_LESSON_3_READING: Exercise[] = QUESTIONS.map((q, i) => ({
  id: `b1-u25-l3-r${i + 1}`,
  type: 'reading',
  level: 'B1',
  topic: 'Review 21-24',
  difficulty: 'easy',
  transcript: READING_TRANSCRIPT,
  content: { title: LESSON_TITLE, instructions: INSTRUCTIONS, questions: [q] },
  topicName: 'Reading',
}));
