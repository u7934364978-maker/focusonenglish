/**
 * Unidad 57 — Lección 4: Comprensión auditiva (Too & Enough)
 * 15 actividades: 1 audio + 15 preguntas
 */

import { Exercise } from '@/lib/exercise-generator';

const LESSON_TITLE = '[[Listening|Comprensión auditiva]]';
const LISTENING_TRANSCRIPT = `[[Hi|Hola]]! [[I|Yo]] [[am|soy]] [[Jake|Jake]]. [[I|Yo]] [[work|trabajo]] [[in|en]] [[a|una]] [[café|cafetería]]. [[The|El]] [[problem|problema]] [[is|es]] [[that|que]] [[the|la]] [[kitchen|cocina]] [[is|es]] [[too small|demasiado pequeña]] [[for|para]] [[all|todos]] [[the|los]] [[staff|empleados]]. [[We|Nosotros]] [[don\'t have|no tenemos]] [[enough|suficientes]] [[space|espacio]] [[to|para]] [[work|trabajar]] [[comfortably|cómodamente]]. [[Sometimes|A veces]] [[the|el]] [[coffee|café]] [[is|está]] [[too hot|demasiado caliente]] [[to|para]] [[serve|servir]] [[immediately|inmediatamente]]. [[We|Nosotros]] [[wait|esperamos]] [[until|hasta que]] [[it|esté]] [[is|esté]] [[cool enough|suficientemente frío]] [[for|para]] [[customers|clientes]]. [[I|Yo]] [[don\'t earn|no gano]] [[enough|suficiente]] [[money|dinero]] [[to|para]] [[rent|alquilar]] [[a flat|un piso]] [[alone|solo]]. [[So|Así que]] [[I|yo]] [[share|comparto]] [[with|con]] [[a|un]] [[friend|amigo]]. [[I|Yo]] [[am|soy]] [[old enough|suficientemente mayor]] [[to|para]] [[live|vivir]] [[independently|independientemente]] [[but|pero]] [[I|yo]] [[need|necesito]] [[more|más]] [[money|dinero]] [[first|primero]].`;

const INSTRUCTIONS = 'Escucha el audio de abajo. Puedes leer la transcripción después de escuchar. Después responde las preguntas.';

const QUESTIONS = [
  { question: '[[What|Qué]] [[does|hace]] [[Jake|Jake]] [[do|hacer]] [[for work|como trabajo]]?', options: ['[[Teacher|Profesor]]', '[[Works in a café|Trabaja en una cafetería]]', '[[Doctor|Médico]]', '[[Driver|Conductor]]'], correctAnswer: 1, explanation: '[[I work in a café|Trabajo en una cafetería]].' },
  { question: '[[What|Cuál]] [[is|es]] [[the|el]] [[problem|problema]] [[with|con]] [[the kitchen|la cocina]]?', options: ['[[It is too big|Es demasiado grande]]', '[[It is too small for all the staff|Es demasiado pequeña para todos los empleados]]', '[[It has no windows|No tiene ventanas]]', '[[It is too dark|Es demasiado oscura]]'], correctAnswer: 1, explanation: '[[The kitchen is too small for all the staff|La cocina es demasiado pequeña para todos los empleados]].' },
  { question: '[[Do|¿]] [[they|ellos]] [[have|tienen]] [[enough space|suficiente espacio]] [[to work|para trabajar]]?', options: ['[[Yes|Sí]]', '[[No|No]]', '[[Sometimes|A veces]]', '[[They didn\'t say|No lo dijeron]]'], correctAnswer: 1, explanation: '[[We don\'t have enough space to work comfortably|No tenemos suficiente espacio para trabajar cómodamente]].' },
  { question: '[[Why|Por qué]] [[do|esperan]] [[they|ellos]] [[wait|esperar]] [[before serving coffee|antes de servir el café]]?', options: ['[[They are busy|Están ocupados]]', '[[The coffee is too hot to serve immediately|El café está demasiado caliente para servir inmediatamente]]', '[[They have no cups|No tienen tazas]]', '[[Customers are not ready|Los clientes no están listos]]'], correctAnswer: 1, explanation: '[[The coffee is too hot to serve immediately|El café está demasiado caliente para servir inmediatamente]].' },
  { question: '[[When|Cuándo]] [[do|sirven]] [[they|ellos]] [[serve|servir]] [[the coffee|el café]]?', options: ['[[Immediately|Inmediatamente]]', '[[When it is cool enough for customers|Cuando está suficientemente frío para los clientes]]', '[[Never|Nunca]]', '[[Only in the morning|Solo por la mañana]]'], correctAnswer: 1, explanation: '[[We wait until it is cool enough for customers|Esperamos hasta que esté suficientemente frío para los clientes]].' },
  { question: '[[Does|¿]] [[Jake|Jake]] [[earn|gana]] [[enough money|suficiente dinero]] [[to rent a flat alone|para alquilar un piso solo]]?', options: ['[[Yes|Sí]]', '[[No|No]]', '[[Sometimes|A veces]]', '[[He didn\'t say|No lo dijo]]'], correctAnswer: 1, explanation: '[[I don\'t earn enough money to rent a flat alone|No gano suficiente dinero para alquilar un piso solo]].' },
  { question: '[[Who|Con quién]] [[does|comparte]] [[Jake|Jake]] [[share|compartir]] [[his flat|su piso]]?', options: ['[[Alone|Solo]]', '[[With a friend|Con un amigo]]', '[[With his family|Con su familia]]', '[[With colleagues|Con compañeros]]'], correctAnswer: 1, explanation: '[[I share with a friend|Comparto con un amigo]].' },
  { question: '[[Is|¿]] [[Jake|Jake]] [[old enough|suficientemente mayor]] [[to live independently|para vivir independientemente]]?', options: ['[[Yes|Sí]]', '[[No|No]]', '[[He didn\'t say|No lo dijo]]', '[[Maybe|Quizás]]'], correctAnswer: 0, explanation: '[[I am old enough to live independently|Soy suficientemente mayor para vivir independientemente]].' },
  { question: '[[What|Qué]] [[does|necesita]] [[Jake|Jake]] [[need|necesitar]] [[first|primero]]?', options: ['[[A new job|Un nuevo trabajo]]', '[[More money|Más dinero]]', '[[A car|Un coche]]', '[[A bigger flat|Un piso más grande]]'], correctAnswer: 1, explanation: '[[I need more money first|Necesito más dinero primero]].' },
  { question: '[[The|El]] [[main|principal]] [[topic|tema]] [[of|del]] [[audio|audio]] [[is|es]]?', options: ['[[A café worker who needs more money and space|Un trabajador de cafetería que necesita más dinero y espacio]]', '[[Coffee recipes|Recetas de café]]', '[[How to rent a flat|Cómo alquilar un piso]]', '[[Friends|Amigos]]'], correctAnswer: 0, explanation: '[[The audio is about Jake and his work situation|El audio trata de Jake y su situación laboral]].' },
  { question: '[[The|El]] [[kitchen|local]] [[is|es]] [[too big|demasiado grande]] [[for|para]] [[the staff|los empleados]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'False', explanation: '[[False|Falso]]. [[The kitchen is too small|La cocina es demasiado pequeña]].' },
  { question: '[[Jake|Jake]] [[lives|vive]] [[alone|solo]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'False', explanation: '[[False|Falso]]. [[He shares with a friend|Comparte con un amigo]].' },
  { question: '[[Which|Cuál]] [[expression|expresión]] [[does|usa]] [[Jake|Jake]] [[NOT|NO]] [[use|usar]]?', options: ['[[Too small|Demasiado pequeño]]', '[[Enough space|Suficiente espacio]]', '[[Too much money|Demasiado dinero]]', '[[Cool enough|Suficientemente frío]]'], correctAnswer: 2, explanation: '[[He says he doesn\'t earn enough money|Dice que no gana suficiente dinero]], [[not too much|no demasiado]].' },
  { question: '[[Jake|Jake]] [[waits|espera]] [[until|hasta que]] [[the coffee|el café]] [[is|esté]] ____ ____ [[for customers|para los clientes]].', options: ['[[cool enough|suficientemente frío]]', '[[too hot|demasiado caliente]]', '[[enough hot|suficientemente caliente]]', '[[too cold|demasiado frío]]'], correctAnswer: 0, explanation: '[[We wait until it is cool enough for customers|Esperamos hasta que esté suficientemente frío para los clientes]].' },
  { question: '[[Jake|Jake]] [[needs|necesita]] ____ ____ [[to live|para vivir]] [[independently|independientemente]].', options: ['[[more money|más dinero]]', '[[a friend|un amigo]]', '[[a bigger kitchen|una cocina más grande]]', '[[less work|menos trabajo]]'], correctAnswer: 0, explanation: '[[I need more money first|Necesito más dinero primero]].' },
];

export const UNIT_57_LESSON_4_LISTENING: Exercise[] = QUESTIONS.map((q, i) => ({
  id: `a2-u57-l4-l${i + 1}`,
  type: 'listening',
  level: 'A2',
  topic: 'Too & Enough',
  difficulty: 'easy',
  transcript: LISTENING_TRANSCRIPT,
  content: { title: LESSON_TITLE, instructions: INSTRUCTIONS, questions: [q] },
  topicName: 'Listening',
}));
