/**
 * Unidad 8 B2 — Lección 4: Comprensión auditiva (Architecture & Design)
 * 13 preguntas con audio y casos distintos
 */

import { Exercise } from '@/lib/exercise-generator';

const LESSON_TITLE = '[[Listening|Comprensión auditiva]]';
const LISTENING_TRANSCRIPT = `[[Hi|Hola]], [[I'm|soy]] [[Jake|Jake]] [[and|y]] [[I|yo]] [[just|acabo de]] [[got back|volver]] [[from|de]] [[a project visit|una visita de proyecto]] [[to|a]] [[Berlin|Berlín]]. [[If|Si]] [[I|yo]] [[had|hubiera]] [[booked|reservado]] [[my|mi]] [[flight|vuelo]] [[earlier|antes]], [[I|yo]] [[would have saved|habría ahorrado]] [[a fortune|una fortuna]] — [[the|los]] [[prices|precios]] [[doubled|se duplicaron]] [[in|en]] [[the last week|la última semana]]. [[I|Yo]] [[had to|tuve que]] [[check in|registrarme]] [[at|en]] [[the airport|el aeropuerto]] [[because|porque]] [[I|yo]] [[forgot|olvidé]] [[to do it online|hacerlo en línea]]. [[My|Mi]] [[destination|destino]] [[was|era]] [[Berlin|Berlín]] [[and|y]] [[I|yo]] [[had|tenía]] [[a|una]] [[four-hour|cuatro horas]] [[layover|pausa]] [[in|en]] [[Amsterdam|Ámsterdam]]. [[If|Si]] [[I|yo]] [[had known|hubiera sabido]] [[about|sobre]] [[the|el]] [[delay|retraso]] [[before|antes]], [[I|yo]] [[would have|habría]] [[taken|llevado]] [[more|más]] [[blueprints|planos]] [[in my portfolio|en mi portafolio]]. [[My|Mi]] [[planning permission|permiso de obras]] [[was|estaba]] [[valid|válido]] [[and|y]] [[my|mi]] [[specification|especificación]] [[is|está]] [[fine|bien]] [[for|para]] [[another|otros]] [[three years|tres años]]. [[I|yo]] [[set off|partí]] [[at dawn|al amanecer]] [[to avoid|para evitar]] [[traffic|tráfico]] — [[if|si]] [[I|yo]] [[had left|hubiera salido]] [[later|más tarde]], [[I|yo]] [[would have missed|habría perdido]] [[my|mi]] [[site meeting|reunión en obra]].`;

const INSTRUCTIONS = 'Escucha el audio. Puedes leer la transcripción. Después responde.';

const QUESTIONS = [
  { question: '[[Where|Dónde]] [[did Jake just return from|acaba de volver Jake]]?', options: ['[[Paris|París]]', '[[A project visit to Berlin|Una visita de proyecto a Berlín]]', '[[London|Londres]]'], correctAnswer: 1, explanation: '[[He says|Dice]] "[[I just got back from a project visit to Berlin|acabo de volver de una visita de proyecto a Berlín]]".' },
  { question: '[[What|Qué]] [[would Jake have done|habría hecho Jake]] [[if he had booked earlier|si hubiera reservado antes]]?', options: ['[[Spent more|Gastado más]]', '[[Saved a fortune|Ahorrado una fortuna]]', '[[Missed the flight|Perdido el vuelo]]'], correctAnswer: 1, explanation: '[[He says|Dice]] "[[If I had booked my flight earlier, I would have saved a fortune|si hubiera reservado mi vuelo antes, habría ahorrado una fortuna]]".' },
  { question: '[[Why|Por qué]] [[did Jake check in at the airport|se registró Jake en el aeropuerto]]?', options: ['[[To save money|Para ahorrar dinero]]', '[[Because he forgot to do it online|Porque olvidó hacerlo en línea]]', '[[To get a better seat|Para conseguir mejor asiento]]'], correctAnswer: 1, explanation: '[[He says|Dice]] "[[because I forgot to do it online|porque olvidé hacerlo en línea]]".' },
  { question: '[[What|Cuál]] [[was Jake\'s destination|era el destino de Jake]]?', options: ['[[Amsterdam|Ámsterdam]]', '[[Berlin|Berlín]]', '[[London|Londres]]'], correctAnswer: 1, explanation: '[[He says|Dice]] "[[My destination was Berlin|mi destino era Berlín]]".' },
  { question: '[[How long|Cuánto duraba]] [[was the layover|era la pausa]]?', options: ['[[Two hours|Dos horas]]', '[[Four hours|Cuatro horas]]', '[[Six hours|Seis horas]]'], correctAnswer: 1, explanation: '[[He says|Dice]] "[[a four-hour layover|una pausa de cuatro horas]]".' },
  { question: '[[Where|Dónde]] [[was the layover|estaba la pausa]]?', options: ['[[Berlin|Berlín]]', '[[Amsterdam|Ámsterdam]]', '[[Paris|París]]'], correctAnswer: 1, explanation: '[[He says|Dice]] "[[a four-hour layover in Amsterdam|una pausa de cuatro horas en Ámsterdam]]".' },
  { question: '[[What|Qué]] [[would Jake have taken|habría llevado Jake]] [[if he had known about the delay|si hubiera sabido del retraso]]?', options: ['[[Less luggage|Menos equipaje]]', '[[More blueprints in his portfolio|Más planos en su portafolio]]', '[[A different flight|Otro vuelo]]'], correctAnswer: 1, explanation: '[[He says|Dice]] "[[I would have taken more blueprints in my portfolio|habría llevado más planos en mi portafolio]]".' },
  { question: '[[Jake\'s planning permission and specification|El permiso de obras y especificación de Jake]] [[were valid|eran válidos]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 0, explanation: '[[True|Verdadero]]. [[He says|Dice]] "[[My planning permission was valid and my specification is fine for another three years|mi permiso de obras estaba válido y mi especificación está bien para otros tres años]]".' },
  { question: '[[Why|Por qué]] [[did Jake set off at dawn|salió Jake al amanecer]]?', options: ['[[To save money|Para ahorrar dinero]]', '[[To avoid traffic|Para evitar el tráfico]]', '[[To have breakfast|Para desayunar]]'], correctAnswer: 1, explanation: '[[He says|Dice]] "[[to avoid traffic|para evitar el tráfico]]".' },
  { question: '[[What|Cuál]] [[is|es]] [[the main topic|el tema principal]]?', options: ['[[Work only|Solo trabajo]]', '[[Architecture project visit with regrets and tips|Visita de proyecto de arquitectura con arrepentimientos y consejos]]', '[[Education|Educación]]'], correctAnswer: 1, explanation: '[[The listening|La escucha]] [[describes|describe]] [[project visit|visita de proyecto]] [[with|con]] [[regrets|arrepentimientos]].' },
  { question: '[[What|Qué]] [[vocabulary|vocabulario]] [[is key|es clave]] [[in|en]] [[this listening|esta escucha]]?', options: ['[[Booking|Reserva]], [[check in|registro]], [[destination|destino]], [[layover|pausa]], [[blueprint|plano]]', '[[Weather|Tiempo]], [[food|comida]]', '[[Work|Trabajo]], [[education|educación]]'], correctAnswer: 0, explanation: '[[The listening|La escucha]] [[uses|usa]] [[vocabulary|vocabulario]] [[related to|relacionado con]] [[architecture|arquitectura]].' },
  { question: '[[Jake|Jake]] [[would have missed the site meeting|habría perdido la reunión en obra]] [[if he had left later|si hubiera salido más tarde]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 0, explanation: '[[True|Verdadero]]. [[He says|Dice]] "[[if I had left later, I would have missed my site meeting|si hubiera salido más tarde, habría perdido mi reunión en obra]]".' },
  { question: '[[What|Qué]] [[can we conclude|podemos concluir]] [[about|sobre]] [[Jake|Jake]]?', options: ['[[He never travels|Nunca viaja]]', '[[He had an architecture project visit with some regrets about booking and preparation|Tuvo una visita de proyecto de arquitectura con arrepentimientos sobre reserva y preparación]]', '[[He dislikes flying|No le gusta volar]]'], correctAnswer: 1, explanation: '[[Project visit|Visita de proyecto]], [[regrets about late booking|arrepentimientos por reserva tardía]], [[forgot online check-in|olvidó registro en línea]].' },
];

export const UNIT_8_LESSON_4_LISTENING: Exercise[] = QUESTIONS.map((q, i) => ({
  id: `b2-u8-l4-l${i + 1}`,
  type: 'listening',
  level: 'B2',
  topic: 'Architecture & Design',
  difficulty: 'medium',
  transcript: LISTENING_TRANSCRIPT,
  content: { title: LESSON_TITLE, instructions: INSTRUCTIONS, questions: [q] },
  topicName: 'Listening',
}));
