/**
 * Unidad 49 B1 — Lección 3: Comprensión lectora (Need, needn't, Necessity)
 * 15 actividades
 */

import { Exercise } from '@/lib/exercise-generator';

const LESSON_TITLE = '[[Reading|Comprensión lectora]]';
const READING_TRANSCRIPT = `[[When|Cuando]] [[you|tú]] [[travel|viajas]] [[by plane|en avión]], [[you|tú]] [[need to|necesitas]] [[check|comprobar]] [[the rules|las reglas]] [[before|antes de]] [[you go|ir]]. [[For|Para]] [[domestic flights|vuelos nacionales]], [[you|tú]] [[needn\'t|no necesitas]] [[bring|traer]] [[your passport|tu pasaporte]] [[a driving licence is enough|el carnet de conducir es suficiente]]. [[You|Tú]] [[needn\'t|no necesitas]] [[worry|preocuparte]] [[about|sobre]] [[luggage|equipaje]] [[if|si]] [[you|tú]] [[only have|solo tienes]] [[hand luggage|equipaje de mano]]. [[I|Yo]] [[needn\'t have|no necesitaba haber]] [[booked|reservado]] [[a seat|un asiento]] [[last time|la última vez]] [[the flight was empty|el vuelo estaba vacío]]. [[The hotel|El hotel]] [[needs|necesita]] [[cleaning|limpieza]] [[it\'s|está]] [[very dirty|muy sucio]]. [[We|Nosotros]] [[need to|necesitamos]] [[leave|salir]] [[early|temprano]] [[tomorrow|mañana]] [[to catch|para coger]] [[our flight|nuestro vuelo]].`;

const INSTRUCTIONS = 'Lee el texto de abajo. Después responde las preguntas.';

const QUESTIONS = [
  { question: '[[What|Qué]] [[do you need to do|necesitas hacer]] [[before travelling by plane|antes de viajar en avión]]?', options: ['[[Pack|Hacer la maleta]]', '[[Check the rules|Comprobar las reglas]]', '[[Buy a car|Comprar un coche]]'], correctAnswer: 1, explanation: '[[The text says|El texto dice]] "[[need to check the rules|necesitas comprobar las reglas]]".' },
  { question: '[[For domestic flights|Para vuelos nacionales]], [[do you need a passport|necesitas pasaporte]]?', options: ['[[Yes|Sí]]', '[[No - driving licence is enough|No - carnet de conducir es suficiente]]', '[[Sometimes|A veces]]'], correctAnswer: 1, explanation: '[[The text says|El texto dice]] "[[needn\'t bring your passport|no necesitas traer pasaporte]]".' },
  { question: '[[When|Cuándo]] [[needn\'t you worry about luggage|no necesitas preocuparte por el equipaje]]?', options: ['[[Always|Siempre]]', '[[If you only have hand luggage|Si solo tienes equipaje de mano]]', '[[Never|Nunca]]'], correctAnswer: 1, explanation: '[[The text says|El texto dice]] "[[needn\'t worry about luggage if you only have hand luggage|no necesitas preocuparte si solo tienes equipaje de mano]]".' },
  { question: '[[What|Qué]] [[did the person needn\'t have done|no necesitaba haber hecho la persona]]?', options: ['[[Booked a seat|Reservado un asiento]]', '[[Bought a ticket|Comprado un billete]]', '[[Checked in|Facturado]]'], correctAnswer: 0, explanation: '[[The text says|El texto dice]] "[[needn\'t have booked a seat|no necesitaba haber reservado asiento]]".' },
  { question: '[[Why|Por qué]] [[did they needn\'t have booked|no necesitaba haber reservado]]?', options: ['[[The flight was full|El vuelo estaba lleno]]', '[[The flight was empty|El vuelo estaba vacío]]', '[[They were late|Llegaron tarde]]'], correctAnswer: 1, explanation: '[[The text says|El texto dice]] "[[the flight was empty|el vuelo estaba vacío]]".' },
  { question: '[[What|Qué]] [[does the hotel need|necesita el hotel]]?', options: ['[[Repairing|Reparación]]', '[[Cleaning|Limpieza]]', '[[Painting|Pintura]]'], correctAnswer: 1, explanation: '[[The text says|El texto dice]] "[[the hotel needs cleaning|el hotel necesita limpieza]]".' },
  { question: '[[What|Qué]] [[do they need to do tomorrow|necesitan hacer mañana]]?', options: ['[[Stay late|Quedarse tarde]]', '[[Leave early to catch their flight|Salir temprano para coger el vuelo]]', '[[Cancel|Cancelar]]'], correctAnswer: 1, explanation: '[[The text says|El texto dice]] "[[need to leave early to catch our flight|necesitamos salir temprano para coger nuestro vuelo]]".' },
  { question: '[[Needn\'t|Needn\'t]] [[means no obligation|significa sin obligación]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'True', explanation: '[[True|Verdadero]]. [[Needn\'t|Needn\'t]] [[= no need to|= no necesitas]].' },
  { question: '[[Need + -ing|Need + -ing]] [[means needs to be done|significa necesita ser hecho]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'True', explanation: '[[True|Verdadero]]. [[The hotel needs cleaning|El hotel necesita limpieza]] [[= needs to be cleaned|= necesita ser limpiado]].' },
  { question: '[[What|Cuál]] [[is the main topic|es el tema principal]] [[of|del]] [[this text|este texto]]?', options: ['[[Food|Comida]]', '[[Travel rules and necessity|Reglas de viaje y necesidad]]', '[[Work|Trabajo]]'], correctAnswer: 1, explanation: '[[The text|El texto]] [[is about|trata sobre]] [[travel and what you need or needn\'t do|viajes y qué necesitas o no necesitas hacer]].' },
  { question: '[[Needn\'t have + past participle|Needn\'t have + participio]] [[refers to past|se refiere al pasado]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'True', explanation: '[[True|Verdadero]]. [[Unnecessary past action|Acción pasada innecesaria]].' },
  { question: '[[For international flights|Para vuelos internacionales]], [[you need a passport|necesitas pasaporte]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'True', explanation: '[[True|Verdadero]]. [[The text only says needn\'t for domestic|El texto solo dice needn\'t para nacionales]].' },
  { question: '[[Which structure|Qué estructura]] [[means "no necesitaba haber"|significa no necesitaba haber]]?', options: ['[[need to|necesitar]]', '[[needn\'t have|no necesitaba haber]]', '[[needn\'t|no necesitas]]'], correctAnswer: 1, explanation: '[[Needn\'t have + past participle|No necesitaba haber + participio]].' },
  { question: '[[The hotel|El hotel]] [[is dirty|está sucio]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'True', explanation: '[[True|Verdadero]]. [[The text says|El texto dice]] "[[it\'s very dirty|está muy sucio]]".' },
  { question: '[[The text|El texto]] [[uses|usa]] [[need|need]], [[needn\'t|needn\'t]] [[and|y]] [[needn\'t have|needn\'t have]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'True', explanation: '[[True|Verdadero]]. [[All structures|Todas las estructuras]] [[appear in the text|aparecen en el texto]].' },
];

export const UNIT_49_LESSON_3_READING: Exercise[] = QUESTIONS.map((q, i) => ({
  id: `b1-u49-l3-r${i + 1}`,
  type: 'reading',
  level: 'B1',
  topic: 'Necessity',
  difficulty: 'easy',
  transcript: READING_TRANSCRIPT,
  content: { title: LESSON_TITLE, instructions: INSTRUCTIONS, questions: [q] },
  topicName: 'Reading',
}));
