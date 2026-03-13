/**
 * Unidad 38 B2 — Lección 4: Comprensión auditiva (Leisure extended)
 * 13 preguntas (B2: transcripción sobre ocio y phrasal verbs)
 */

import { Exercise } from '@/lib/exercise-generator';

const LESSON_TITLE = '[[Listening|Comprensión auditiva]]';
const LISTENING_TRANSCRIPT = `[[Hi|Hola]], [[I'm|soy]] [[Tom|Tom]] [[and|y]] [[I|yo]] [[love|me encanta]] [[leisure activities|actividades de ocio]]. [[Last month|El mes pasado]] [[I|yo]] [[took up|empecé]] [[photography|fotografía]] [[and|y]] [[I|yo]] [[ran into|me encontré con]] [[an old friend|a un viejo amigo]] [[at the camera shop|en la tienda de cámaras]]. [[We|Nosotros]] [[set up|creamos]] [[a photography club|un club de fotografía]] [[together|juntos]] [[and|y]] [[we|nosotros]] [[set off|partimos]] [[early|temprano]] [[last Saturday|el sábado pasado]] [[for|para]] [[a hike|una excursión]]. [[We|Nosotros]] [[ran out of|nos quedamos sin]] [[battery|batería]] [[on the camera|en la cámara]] [[but|pero]] [[we|nosotros]] [[had|teníamos]] [[a great time|un gran momento]]. [[She|Ella]] [[took to|se aficionó a]] [[painting|pintura]] [[recently|recientemente]] [[and|y]] [[she|ella]] [[sets aside|reserva]] [[two hours|dos horas]] [[every weekend|cada fin de semana]] [[for|para]] [[it|eso]]. [[I|Yo]] [[ran through|repasé]] [[the itinerary|el itinerario]] [[with her|con ella]] [[before|antes de]] [[we|nosotros]] [[booked|reservamos]] [[the camping trip|el viaje de camping]].`;

const INSTRUCTIONS = 'Escucha el audio (o lee la transcripción). Después responde las preguntas.';

const QUESTIONS = [
  { question: '[[Who is speaking|Quién habla]]?', options: ['[[Tom, who loves leisure activities|Tom, al que le encantan las actividades de ocio]]', '[[A photographer|Un fotógrafo profesional]]', '[[A shop assistant|Un dependiente]]'], correctAnswer: 0, explanation: '[[The speaker says|El hablante dice]] "[[I\'m Tom and I love leisure activities|soy Tom y me encantan las actividades de ocio]]".' },
  { question: '[[What|Qué]] [[did he take up|empezó]] [[last month|el mes pasado]]?', options: ['[[Photography|Fotografía]]', '[[Hiking|Senderismo]]', '[[Painting|Pintura]]'], correctAnswer: 0, explanation: '[[The speaker says|El hablante dice]] "[[I took up photography last month|empecé fotografía el mes pasado]]".' },
  { question: '[[Where|Dónde]] [[did he run into his friend|se encontró con su amigo]]?', options: ['[[At the camera shop|En la tienda de cámaras]]', '[[On a hike|En una excursión]]', '[[At the club|En el club]]'], correctAnswer: 0, explanation: '[[The speaker says|El hablante dice]] "[[I ran into an old friend at the camera shop|me encontré con un viejo amigo en la tienda de cámaras]]".' },
  { question: '[[What|Qué]] [[did they set up|crearon]]?', options: ['[[A photography club|Un club de fotografía]]', '[[A painting class|Una clase de pintura]]', '[[A camping trip|Un viaje de camping]]'], correctAnswer: 0, explanation: '[[The speaker says|El hablante dice]] "[[we set up a photography club together|creamos un club de fotografía juntos]]".' },
  { question: '[[What|Qué]] [[did they run out of|de qué se quedaron sin]]?', options: ['[[Battery on the camera|Batería en la cámara]]', '[[Time|Tiempo]]', '[[Snacks|Aperitivos]]'], correctAnswer: 0, explanation: '[[The speaker says|El hablante dice]] "[[we ran out of battery on the camera|nos quedamos sin batería en la cámara]]".' },
  { question: '[[What|Qué]] [[did she take to|se aficionó a]]?', options: ['[[Painting recently|Pintura recientemente]]', '[[Photography|Fotografía]]', '[[Hiking|Senderismo]]'], correctAnswer: 0, explanation: '[[The speaker says|El hablante dice]] "[[she took to painting recently|se aficionó a la pintura recientemente]]".' },
  { question: '[[What|Qué]] [[does she set aside|reserva]]?', options: ['[[Two hours every weekend|Dos horas cada fin de semana]]', '[[One hour|Una hora]]', '[[A day|Un día]]'], correctAnswer: 0, explanation: '[[The speaker says|El hablante dice]] "[[she sets aside two hours every weekend|cada fin de semana reserva dos horas]]".' },
  { question: '[[What|Cuál]] [[is|es]] [[the main idea|la idea principal]] [[of the listening|de la escucha]]?', options: ['[[Tom describes his leisure activities and phrasal verbs in context|Tom describe sus actividades de ocio y phrasal verbs en contexto]]', '[[Photography is easy|La fotografía es fácil]]', '[[Camping is best|El camping es mejor]]'], correctAnswer: 0, explanation: '[[The speaker|El hablante]] [[describes|describe]] [[hobbies and activities|hobbies y actividades]].' },
  { question: '[[Which phrasal verb|Qué phrasal verb]] [[means "start a hobby"|significa "empezar un hobby"]]?', options: ['[[Take up|Take up]]', '[[Run into|Run into]]', '[[Set off|Set off]]'], correctAnswer: 0, explanation: '[[Take up = start a hobby|Take up = empezar un hobby]].' },
  { question: '[[What|Qué]] [[vocabulary|vocabulario]] [[is central|es central]] [[in this listening|en esta escucha]]?', options: ['[[photography|fotografía]], [[hiking|senderismo]], [[painting|pintura]], [[camping|camping]], [[itinerary|itinerario]]', '[[sport|deporte]], [[music|música]]', '[[weather|tiempo]], [[food|comida]]'], correctAnswer: 0, explanation: '[[The listening|La escucha]] [[focuses on|se centra en]] [[leisure vocabulary|vocabulario de ocio]].' },
  { question: '[[What|Qué]] [[can we infer|podemos inferir]] [[about Tom|sobre Tom]]?', options: ['[[He is active and enjoys outdoor and creative hobbies|Es activo y disfruta de hobbies al aire libre y creativos]]', '[[He prefers to stay home|Prefiere quedarse en casa]]', '[[He doesn\'t like photography|No le gusta la fotografía]]'], correctAnswer: 0, explanation: '[[Photography|Fotografía]], [[hiking|senderismo]], [[painting|pintura]], [[camping|camping]].' },
  { question: '[[They|Ellos]] ____ [[early last Saturday for a hike|partieron temprano el sábado para una excursión]].', options: ['[[set off|partieron]]', '[[ran into|se encontraron]]'], correctAnswer: 0, explanation: '[[Set off = start a journey|Set off = partir de viaje]].' },
  { question: '[[He|Él]] ____ [[the itinerary with her before booking|repasó el itinerario con ella antes de reservar]].', options: ['[[ran through|repasó]]', '[[set up|organizó]]'], correctAnswer: 0, explanation: '[[Run through = go over|Run through = repasar]].' },
];

export const UNIT_38_LESSON_4_LISTENING: Exercise[] = QUESTIONS.map((q, i) => ({
  id: `b2-u38-l4-l${i + 1}`,
  type: 'listening',
  level: 'B2',
  topic: 'Leisure (extended)',
  difficulty: 'medium',
  transcript: LISTENING_TRANSCRIPT,
  content: { title: LESSON_TITLE, instructions: INSTRUCTIONS, questions: [q] },
  topicName: 'Listening',
}));
