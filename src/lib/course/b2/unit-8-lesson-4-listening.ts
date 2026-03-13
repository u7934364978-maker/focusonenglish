/**
 * Unidad 8 B2 — Lección 4: Comprensión auditiva (Travel)
 * 13 preguntas con audio y casos distintos
 */

import { Exercise } from '@/lib/exercise-generator';

const LESSON_TITLE = '[[Listening|Comprensión auditiva]]';
const LISTENING_TRANSCRIPT = `[[Hi|Hola]], [[I'm|soy]] [[Jake|Jake]] [[and|y]] [[I|yo]] [[just|acabo de]] [[got back|volver]] [[from|de]] [[a business trip|un viaje de negocios]] [[to|a]] [[Berlin|Berlín]]. [[If|Si]] [[I|yo]] [[had|hubiera]] [[booked|reservado]] [[my|mi]] [[flight|vuelo]] [[earlier|antes]], [[I|yo]] [[would have saved|habría ahorrado]] [[a fortune|una fortuna]] — [[the|los]] [[prices|precios]] [[doubled|se duplicaron]] [[in|en]] [[the last week|la última semana]]. [[I|Yo]] [[had to|tuve que]] [[check in|facturar]] [[at|en]] [[the airport|el aeropuerto]] [[because|porque]] [[I|yo]] [[forgot|olvidé]] [[to do it online|hacerlo en línea]]. [[My|Mi]] [[destination|destino]] [[was|era]] [[Berlin|Berlín]] [[and|y]] [[I|yo]] [[had|tenía]] [[a|una]] [[four-hour|cuatro horas]] [[layover|escala]] [[in|en]] [[Amsterdam|Ámsterdam]]. [[If|Si]] [[I|yo]] [[had known|hubiera sabido]] [[about|sobre]] [[the|el]] [[delay|retraso]] [[before|antes]], [[I|yo]] [[would have|habría]] [[taken|llevado]] [[more|más]] [[in my hand luggage|en mi equipaje de mano]]. [[My|Mi]] [[visa|visa]] [[was|estaba]] [[valid|válida]] [[and|y]] [[my|mi]] [[passport|pasaporte]] [[is|está]] [[fine|bien]] [[for|para]] [[another|otros]] [[three years|tres años]]. [[I|yo]] [[set off|partí]] [[at dawn|al amanecer]] [[to avoid|para evitar]] [[traffic|tráfico]] — [[if|si]] [[I|yo]] [[had left|hubiera salido]] [[later|más tarde]], [[I|yo]] [[would have missed|habría perdido]] [[my flight|mi vuelo]].`;

const INSTRUCTIONS = 'Escucha el audio. Puedes leer la transcripción. Después responde.';

const QUESTIONS = [
  { question: '[[Where|Dónde]] [[did Jake just return from|acaba de volver Jake]]?', options: ['[[Paris|París]]', '[[A business trip to Berlin|Un viaje de negocios a Berlín]]', '[[London|Londres]]'], correctAnswer: 1, explanation: '[[He says|Dice]] "[[I just got back from a business trip to Berlin|acabo de volver de un viaje de negocios a Berlín]]".' },
  { question: '[[What|Qué]] [[would Jake have done|habría hecho Jake]] [[if he had booked earlier|si hubiera reservado antes]]?', options: ['[[Spent more|Gastado más]]', '[[Saved a fortune|Ahorrado una fortuna]]', '[[Missed the flight|Perdido el vuelo]]'], correctAnswer: 1, explanation: '[[He says|Dice]] "[[If I had booked my flight earlier, I would have saved a fortune|si hubiera reservado mi vuelo antes, habría ahorrado una fortuna]]".' },
  { question: '[[Why|Por qué]] [[did Jake check in at the airport|facturó Jake en el aeropuerto]]?', options: ['[[To save money|Para ahorrar dinero]]', '[[Because he forgot to do it online|Porque olvidó hacerlo en línea]]', '[[To get a better seat|Para conseguir mejor asiento]]'], correctAnswer: 1, explanation: '[[He says|Dice]] "[[because I forgot to do it online|porque olvidé hacerlo en línea]]".' },
  { question: '[[What|Cuál]] [[was Jake\'s destination|era el destino de Jake]]?', options: ['[[Amsterdam|Ámsterdam]]', '[[Berlin|Berlín]]', '[[London|Londres]]'], correctAnswer: 1, explanation: '[[He says|Dice]] "[[My destination was Berlin|mi destino era Berlín]]".' },
  { question: '[[How long|Cuánto duraba]] [[was the layover|era la escala]]?', options: ['[[Two hours|Dos horas]]', '[[Four hours|Cuatro horas]]', '[[Six hours|Seis horas]]'], correctAnswer: 1, explanation: '[[He says|Dice]] "[[a four-hour layover|una escala de cuatro horas]]".' },
  { question: '[[Where|Dónde]] [[was the layover|estaba la escala]]?', options: ['[[Berlin|Berlín]]', '[[Amsterdam|Ámsterdam]]', '[[Paris|París]]'], correctAnswer: 1, explanation: '[[He says|Dice]] "[[a four-hour layover in Amsterdam|una escala de cuatro horas en Ámsterdam]]".' },
  { question: '[[What|Qué]] [[would Jake have taken|habría llevado Jake]] [[if he had known about the delay|si hubiera sabido del retraso]]?', options: ['[[Less luggage|Menos equipaje]]', '[[More in his hand luggage|Más en su equipaje de mano]]', '[[A different flight|Otro vuelo]]'], correctAnswer: 1, explanation: '[[He says|Dice]] "[[I would have taken more in my hand luggage|habría llevado más en mi equipaje de mano]]".' },
  { question: '[[Jake\'s visa and passport|La visa y pasaporte de Jake]] [[were valid|eran válidos]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 0, explanation: '[[True|Verdadero]]. [[He says|Dice]] "[[My visa was valid and my passport is fine for another three years|mi visa estaba válida y mi pasaporte está bien para otros tres años]]".' },
  { question: '[[Why|Por qué]] [[did Jake set off at dawn|salió Jake al amanecer]]?', options: ['[[To save money|Para ahorrar dinero]]', '[[To avoid traffic|Para evitar el tráfico]]', '[[To have breakfast|Para desayunar]]'], correctAnswer: 1, explanation: '[[He says|Dice]] "[[to avoid traffic|para evitar el tráfico]]".' },
  { question: '[[What|Cuál]] [[is|es]] [[the main topic|el tema principal]]?', options: ['[[Work only|Solo trabajo]]', '[[Business travel with regrets and tips|Viaje de negocios con arrepentimientos y consejos]]', '[[Education|Educación]]'], correctAnswer: 1, explanation: '[[The listening|La escucha]] [[describes|describe]] [[business travel|viaje de negocios]] [[with|con]] [[regrets|arrepentimientos]].' },
  { question: '[[What|Qué]] [[vocabulary|vocabulario]] [[is key|es clave]] [[in|en]] [[this listening|esta escucha]]?', options: ['[[Booking|Reserva]], [[check in|facturación]], [[destination|destino]], [[layover|escala]], [[hand luggage|equipaje de mano]]', '[[Weather|Tiempo]], [[food|comida]]', '[[Work|Trabajo]], [[education|educación]]'], correctAnswer: 0, explanation: '[[The listening|La escucha]] [[uses|usa]] [[vocabulary|vocabulario]] [[related to|relacionado con]] [[travel|viajes]].' },
  { question: '[[Jake|Jake]] [[would have missed the flight|habría perdido el vuelo]] [[if he had left later|si hubiera salido más tarde]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 0, explanation: '[[True|Verdadero]]. [[He says|Dice]] "[[if I had left later, I would have missed my flight|si hubiera salido más tarde, habría perdido mi vuelo]]".' },
  { question: '[[What|Qué]] [[can we conclude|podemos concluir]] [[about|sobre]] [[Jake|Jake]]?', options: ['[[He never travels|Nunca viaja]]', '[[He had a business trip with some regrets about booking and preparation|Tuvo un viaje de negocios con arrepentimientos sobre reserva y preparación]]', '[[He dislikes flying|No le gusta volar]]'], correctAnswer: 1, explanation: '[[Business trip|Viaje de negocios]], [[regrets about late booking|arrepentimientos por reserva tardía]], [[forgot online check-in|olvidó facturación en línea]].' },
];

export const UNIT_8_LESSON_4_LISTENING: Exercise[] = QUESTIONS.map((q, i) => ({
  id: `b2-u8-l4-l${i + 1}`,
  type: 'listening',
  level: 'B2',
  topic: 'Travel',
  difficulty: 'medium',
  transcript: LISTENING_TRANSCRIPT,
  content: { title: LESSON_TITLE, instructions: INSTRUCTIONS, questions: [q] },
  topicName: 'Listening',
}));
