/**
 * Unidad 49 B1 — Lección 4: Comprensión auditiva (Need, needn't, Necessity)
 * 15 actividades
 */

import { Exercise } from '@/lib/exercise-generator';

const LESSON_TITLE = '[[Listening|Comprensión auditiva]]';
const LISTENING_TRANSCRIPT = `[[Okay|Vale]] [[so|así que]] [[for|para]] [[the meeting|la reunión]] [[tomorrow|mañana]] [[you|tú]] [[need to|necesitas]] [[prepare|preparar]] [[the presentation|la presentación]]. [[You|Tú]] [[needn\'t|no necesitas]] [[bring|traer]] [[lunch|comida]] [[we\'ll order|pediremos]] [[sandwiches|bocadillos]]. [[I|Yo]] [[needn\'t have|no necesitaba haber]] [[worried|preocupado]] [[about|sobre]] [[the report|el informe]] [[it was fine|estaba bien]]. [[The office|La oficina]] [[needs|necesita]] [[redecorating|redecoración]] [[but|pero]] [[that can wait|eso puede esperar]]. [[You|Tú]] [[needn\'t|no necesitas]] [[stay|quedarte]] [[late|tarde]] [[today|hoy]] [[everything is done|todo está hecho]].`;

const INSTRUCTIONS = 'Escucha el audio. Puedes leer la transcripción. Después responde las preguntas.';

const QUESTIONS = [
  { question: '[[What|Qué]] [[does the person need to do|necesita hacer la persona]] [[for the meeting|para la reunión]]?', options: ['[[Book a room|Reservar una sala]]', '[[Prepare the presentation|Preparar la presentación]]', '[[Send emails|Enviar emails]]'], correctAnswer: 1, explanation: '[[He says|Dice]] "[[you need to prepare the presentation|necesitas preparar la presentación]]".' },
  { question: '[[What|Qué]] [[needn\'t they bring|no necesitan traer]]?', options: ['[[The presentation|La presentación]]', '[[Lunch|Comida]]', '[[A laptop|Un portátil]]'], correctAnswer: 1, explanation: '[[He says|Dice]] "[[you needn\'t bring lunch|no necesitas traer comida]]".' },
  { question: '[[Why|Por qué]] [[will they not need lunch|no necesitarán comida]]?', options: ['[[They\'re not hungry|No tienen hambre]]', '[[They\'ll order sandwiches|Pedirán bocadillos]]', '[[The meeting is short|La reunión es corta]]'], correctAnswer: 1, explanation: '[[He says|Dice]] "[[we\'ll order sandwiches|pediremos bocadillos]]".' },
  { question: '[[What|Qué]] [[did the speaker needn\'t have done|no necesitaba haber hecho el hablante]]?', options: ['[[Prepared the report|Preparado el informe]]', '[[Worried about the report|Preocupado por el informe]]', '[[Sent the report|Enviado el informe]]'], correctAnswer: 1, explanation: '[[He says|Dice]] "[[I needn\'t have worried about the report|no necesitaba haber me preocupado por el informe]]".' },
  { question: '[[Why|Por qué]] [[did they needn\'t have worried|no necesitaba haberse preocupado]]?', options: ['[[The report was bad|El informe estaba mal]]', '[[The report was fine|El informe estaba bien]]', '[[There was no report|No había informe]]'], correctAnswer: 1, explanation: '[[He says|Dice]] "[[it was fine|estaba bien]]".' },
  { question: '[[What|Qué]] [[does the office need|necesita la oficina]]?', options: ['[[Cleaning|Limpieza]]', '[[Redecorating|Redecoración]]', '[[Repairing|Reparación]]'], correctAnswer: 1, explanation: '[[He says|Dice]] "[[the office needs redecorating|la oficina necesita redecoración]]".' },
  { question: '[[Can the redecorating wait|¿Puede esperar la redecoración]]?', options: ['[[No|No]]', '[[Yes, it can wait|Sí, puede esperar]]', '[[Not said|No se dice]]'], correctAnswer: 1, explanation: '[[He says|Dice]] "[[that can wait|eso puede esperar]]".' },
  { question: '[[Need they stay late today|¿Necesitan quedarse tarde hoy]]?', options: ['[[Yes|Sí]]', '[[No - needn\'t stay|No - no necesitan quedarse]]', '[[Maybe|Quizás]]'], correctAnswer: 1, explanation: '[[He says|Dice]] "[[you needn\'t stay late today|no necesitas quedarte tarde hoy]]".' },
  { question: '[[What|Cuál]] [[is the main topic|es el tema principal]] [[of|del]] [[this listening|esta escucha]]?', options: ['[[Shopping|Compras]]', '[[Meeting preparation and necessity|Preparación de reunión y necesidad]]', '[[Travel|Viajes]]'], correctAnswer: 1, explanation: '[[The listening|La escucha]] [[is about|trata sobre]] [[meeting prep and what you need or needn\'t do|preparación de reunión y qué necesitas o no]].' },
  { question: '[[Needn\'t have|Needn\'t have]] [[refers to|se refiere a]] [[a past action|una acción pasada]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'True', explanation: '[[True|Verdadero]]. [[Unnecessary past action|Acción pasada innecesaria]].' },
  { question: '[[Everything is done|Todo está hecho]] [[so they can leave|así que pueden irse]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'True', explanation: '[[True|Verdadero]]. [[The text says|El texto dice]] "[[everything is done|todo está hecho]]" [[so needn\'t stay|así que no necesitan quedarse]].' },
  { question: '[[Which structure|Qué estructura]] [[means "necesita ser redecorado"|significa necesita ser redecorado]]?', options: ['[[needs redecorating|necesita redecoración]]', '[[need to redecorate|necesitar redecorar]]', '[[needn\'t redecorate|no necesitar redecorar]]'], correctAnswer: 0, explanation: '[[Needs + -ing|Necesita + -ing]] [[= needs to be done|= necesita ser hecho]].' },
  { question: '[[The meeting|La reunión]] [[is tomorrow|es mañana]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'True', explanation: '[[True|Verdadero]]. [[The text says|El texto dice]] "[[for the meeting tomorrow|para la reunión mañana]]".' },
  { question: '[[Need to|Need to]] [[expresses obligation|expresa obligación]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'True', explanation: '[[True|Verdadero]]. [[Need to|Need to]] [[= necessity|= necesidad]].' },
  { question: '[[The text|El texto]] [[uses|usa]] [[need|need]], [[needn\'t|needn\'t]] [[and|y]] [[needn\'t have|needn\'t have]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'True', explanation: '[[True|Verdadero]]. [[All structures|Todas las estructuras]] [[appear|aparecen]].' },
];

export const UNIT_49_LESSON_4_LISTENING: Exercise[] = QUESTIONS.map((q, i) => ({
  id: `b1-u49-l4-l${i + 1}`,
  type: 'listening',
  level: 'B1',
  topic: 'Necessity',
  difficulty: 'easy',
  transcript: LISTENING_TRANSCRIPT,
  content: { title: LESSON_TITLE, instructions: INSTRUCTIONS, questions: [q] },
  topicName: 'Listening',
}));
