/**
 * Unidad 8 B2 — Lección 3: Comprensión lectora (Travel)
 * 13 preguntas con texto y casos distintos
 */

import { Exercise } from '@/lib/exercise-generator';

const LESSON_TITLE = '[[Reading|Comprensión lectora]]';
const READING_TRANSCRIPT = `[[If|Si]] [[I|yo]] [[had|hubiera]] [[known|sabido]] [[about|sobre]] [[the|la]] [[storm|tormenta]] [[before|antes]], [[I|yo]] [[would have|habría]] [[called off|cancelado]] [[my|mi]] [[trip|viaje]] — [[instead|en cambio]] [[I|yo]] [[set off|partí]] [[and|y]] [[got|quedé]] [[stuck|atrapado]] [[at|en]] [[the|el]] [[airport|aeropuerto]] [[for|durante]] [[twelve hours|doce horas]]. [[My|Mi]] [[destination|destino]] [[was|era]] [[Barcelona|Barcelona]] [[and|y]] [[I|yo]] [[had|tenía]] [[a|una]] [[three-hour|tres horas]] [[layover|escala]] [[in|en]] [[Paris|París]] [[that|que]] [[turned into|se convirtió en]] [[eight hours|ocho horas]] [[due to|debido a]] [[the|el]] [[delay|retraso]]. [[If|Si]] [[I|yo]] [[had booked|hubiera reservado]] [[my|mi]] [[accommodation|alojamiento]] [[earlier|antes]], [[I|yo]] [[would have|habría]] [[saved|ahorrado]] [[money|dinero]] — [[last-minute|de último minuto]] [[bookings|reservas]] [[are|son]] [[expensive|caras]]. [[My|Mi]] [[passport|pasaporte]] [[and|y]] [[visa|visa]] [[were|estaban]] [[valid|válidos]] [[so|así que]] [[at least|al menos]] [[that|eso]] [[was fine|estaba bien]]. [[I|yo]] [[checked in|facturé]] [[online|en línea]] [[to avoid|para evitar]] [[queues|colas]] [[and|y]] [[packed|empacé]] [[light|ligero]] [[in|en]] [[my|mi]] [[hand luggage|equipaje de mano]] [[only|solo]]. [[If|Si]] [[I|yo]] [[had left|hubiera salido]] [[the day before|el día anterior]], [[I|yo]] [[would be|estaría]] [[there|allí]] [[now|ahora]] [[relaxing|relajándome]].`;

const INSTRUCTIONS = 'Lee el texto. Después responde las preguntas.';

const QUESTIONS = [
  { question: '[[What|Qué]] [[would the person have done|habría hecho la persona]] [[if they had known about the storm|si hubiera sabido de la tormenta]]?', options: ['[[Set off anyway|Partir de todos modos]]', '[[Called off the trip|Cancelado el viaje]]', '[[Booked a hotel|Reservado un hotel]]'], correctAnswer: 1, explanation: '[[The text says|El texto dice]] "[[If I had known about the storm before, I would have called off my trip|si hubiera sabido de la tormenta antes, habría cancelado mi viaje]]".' },
  { question: '[[What|Qué]] [[happened to the person|le pasó a la persona]]?', options: ['[[They arrived on time|Llegaron a tiempo]]', '[[They got stuck at the airport for twelve hours|Quedaron atrapados en el aeropuerto doce horas]]', '[[They cancelled the trip|Cancelaron el viaje]]'], correctAnswer: 1, explanation: '[[The text says|El texto dice]] "[[I got stuck at the airport for twelve hours|quedé atrapado en el aeropuerto doce horas]]".' },
  { question: '[[What|Cuál]] [[was the person\'s destination|era el destino de la persona]]?', options: ['[[Paris|París]]', '[[Barcelona|Barcelona]]', '[[London|Londres]]'], correctAnswer: 1, explanation: '[[The text says|El texto dice]] "[[My destination was Barcelona|mi destino era Barcelona]]".' },
  { question: '[[How long|Cuánto duraba]] [[was the layover supposed to be|debía ser la escala]]?', options: ['[[One hour|Una hora]]', '[[Three hours|Tres horas]]', '[[Eight hours|Ocho horas]]'], correctAnswer: 1, explanation: '[[The text says|El texto dice]] "[[a three-hour layover|una escala de tres horas]]".' },
  { question: '[[What|Qué]] [[would the person have saved|habría ahorrado la persona]] [[if they had booked accommodation earlier|si hubiera reservado alojamiento antes]]?', options: ['[[Time|Tiempo]]', '[[Money|Dinero]]', '[[Effort|Esfuerzo]]'], correctAnswer: 1, explanation: '[[The text says|El texto dice]] "[[I would have saved money|habría ahorrado dinero]]".' },
  { question: '[[The person\'s passport and visa|El pasaporte y visa de la persona]] [[were valid|eran válidos]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'True', explanation: '[[True|Verdadero]]. [[The text says|El texto dice]] "[[My passport and visa were valid|mi pasaporte y visa estaban válidos]]".' },
  { question: '[[Why|Por qué]] [[did the person check in online|facturó la persona en línea]]?', options: ['[[To save money|Para ahorrar dinero]]', '[[To avoid queues|Para evitar colas]]', '[[To get a better seat|Para conseguir mejor asiento]]'], correctAnswer: 1, explanation: '[[The text says|El texto dice]] "[[to avoid queues|para evitar colas]]".' },
  { question: '[[What|Cuál]] [[is|es]] [[the main topic|el tema principal]] [[of|del]] [[this text|este texto]]?', options: ['[[Work|Trabajo]]', '[[Travel problems and regrets|Problemas de viaje y arrepentimientos]]', '[[Education|Educación]]'], correctAnswer: 1, explanation: '[[The text|El texto]] [[describes|describe]] [[travel problems|problemas de viaje]] [[and|y]] [[regrets|arrepentimientos]].' },
  { question: '[[What|Qué]] [[vocabulary|vocabulario]] [[is key|es clave]] [[in|en]] [[this text|este texto]]?', options: ['[[Destination|Destino]], [[layover|escala]], [[delay|retraso]], [[accommodation|alojamiento]], [[hand luggage|equipaje de mano]]', '[[Weather|Tiempo]], [[food|comida]]', '[[Work|Trabajo]], [[education|educación]]'], correctAnswer: 0, explanation: '[[The text|El texto]] [[uses|usa]] [[vocabulary|vocabulario]] [[related to|relacionado con]] [[travel|viajes]].' },
  { question: '[[What|Qué]] [[grammar structure|estructura gramatical]] [[does "If I had known" use|usa "If I had known"]]?', options: ['[[Third/Mixed conditional|Tercer condicional/mixto]]', '[[First conditional|Primer condicional]]', '[[Second conditional|Segundo condicional]]'], correctAnswer: 0, explanation: '[[Past perfect in if-clause|Pasado perfecto en cláusula if]] [[+ would have + past participle|+ would have + participio]].' },
  { question: '[[The person|La persona]] [[would be there now|estaría allí ahora]] [[if they had left the day before|si hubiera salido el día anterior]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'True', explanation: '[[True|Verdadero]]. [[The text says|El texto dice]] "[[If I had left the day before, I would be there now relaxing|si hubiera salido el día anterior, estaría allí ahora relajándome]]".' },
  { question: '[[Where|Dónde]] [[was the layover|estaba la escala]]?', options: ['[[Barcelona|Barcelona]]', '[[Paris|París]]', '[[London|Londres]]'], correctAnswer: 1, explanation: '[[The text says|El texto dice]] "[[a three-hour layover in Paris|una escala de tres horas en París]]".' },
  { question: '[[What|Qué]] [[can we infer|podemos inferir]] [[about|sobre]] [[the person|la persona]]?', options: ['[[They dislike travelling|No les gusta viajar]]', '[[They had a difficult trip with delays and regrets|Tuvieron un viaje difícil con retrasos y arrepentimientos]]', '[[They never travel|Nunca viajan]]'], correctAnswer: 1, explanation: '[[Storm|Tormenta]], [[stuck at airport|atrapado en aeropuerto]], [[delay|retraso]], [[regrets about booking|arrepentimientos sobre reserva]].' },
];

export const UNIT_8_LESSON_3_READING: Exercise[] = QUESTIONS.map((q, i) => ({
  id: `b2-u8-l3-r${i + 1}`,
  type: 'reading',
  level: 'B2',
  topic: 'Travel',
  difficulty: 'medium',
  transcript: READING_TRANSCRIPT,
  content: { title: LESSON_TITLE, instructions: INSTRUCTIONS, questions: [q] },
  topicName: 'Reading',
}));
