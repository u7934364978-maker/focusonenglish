/**
 * Unidad 38 B2 — Lección 3: Comprensión lectora (Leisure extended)
 * 13 preguntas (B2: texto sobre ocio y phrasal verbs RUN/SET/TAKE)
 */

import { Exercise } from '@/lib/exercise-generator';

const LESSON_TITLE = '[[Reading|Comprensión lectora]]';
const READING_TRANSCRIPT = `[[We|Nosotros]] [[ran into|nos encontramos con]] [[an old friend|a un viejo amigo]] [[at the cinema|en el cine]] [[last weekend|el fin de semana pasado]] [[and|y]] [[we|nosotros]] [[set up|organizamos]] [[a picnic|un picnic]] [[for|para]] [[next Sunday|el próximo domingo]]. [[She|Ella]] [[took to|se aficionó a]] [[hiking|senderismo]] [[last year|el año pasado]] [[and|y]] [[now|ahora]] [[she|ella]] [[sets aside|reserva]] [[time|tiempo]] [[every week|cada semana]] [[for|para]] [[long walks|largas caminatas]]. [[They|Ellos]] [[set off|partieron]] [[early|temprano]] [[for the beach|para la playa]] [[this morning|esta mañana]] [[but|pero]] [[they|ellos]] [[ran out of|se quedaron sin]] [[petrol|gasolina]] [[halfway|a mitad de camino]]. [[He|Él]] [[took up|empezó]] [[photography|fotografía]] [[as a hobby|como hobby]] [[and|y]] [[his|su]] [[new hobby|nuevo hobby]] [[took off|despegó]] [[quickly|rápidamente]]. [[We|Nosotros]] [[ran through|repasamos]] [[the itinerary|el itinerario]] [[before|antes de]] [[booking|reservar]] [[the camping trip|el viaje de camping]].`;

const INSTRUCTIONS = 'Lee el texto sobre ocio. Después responde las preguntas.';

const QUESTIONS = [
  { question: '[[What|Qué]] [[did they do|hicieron]] [[at the cinema|en el cine]]?', options: ['[[Ran into an old friend|Se encontraron con un viejo amigo]]', '[[Set up a picnic|Organizaron un picnic]]', '[[Took up hiking|Empezaron senderismo]]'], correctAnswer: 0, explanation: '[[The text says|El texto dice]] "[[we ran into an old friend at the cinema|nos encontramos con un viejo amigo en el cine]]".' },
  { question: '[[What|Qué]] [[did they set up|organizaron]]?', options: ['[[A picnic for next Sunday|Un picnic para el próximo domingo]]', '[[A camping trip|Un viaje de camping]]', '[[A photography club|Un club de fotografía]]'], correctAnswer: 0, explanation: '[[The text says|El texto dice]] "[[we set up a picnic for next Sunday|organizamos un picnic para el próximo domingo]]".' },
  { question: '[[What|Qué]] [[did she take to|se aficionó a]]?', options: ['[[Hiking last year|Senderismo el año pasado]]', '[[Photography|Fotografía]]', '[[Picnics|Picnics]]'], correctAnswer: 0, explanation: '[[The text says|El texto dice]] "[[she took to hiking last year|se aficionó al senderismo el año pasado]]".' },
  { question: '[[What|Qué]] [[do they run out of|de qué se quedaron sin]]?', options: ['[[Petrol halfway|Gasolina a mitad de camino]]', '[[Time|Tiempo]]', '[[Snacks|Aperitivos]]'], correctAnswer: 0, explanation: '[[The text says|El texto dice]] "[[they ran out of petrol halfway|se quedaron sin gasolina a mitad de camino]]".' },
  { question: '[[What|Qué]] [[did he take up|empezó él]]?', options: ['[[Photography as a hobby|Fotografía como hobby]]', '[[Hiking|Senderismo]]', '[[Camping|Camping]]'], correctAnswer: 0, explanation: '[[The text says|El texto dice]] "[[he took up photography as a hobby|empezó fotografía como hobby]]".' },
  { question: '[[What|Qué]] [[happened to his hobby|pasó con su hobby]]?', options: ['[[It took off quickly|Despegó rápidamente]]', '[[It ran out|Se acabó]]', '[[It set off|Partió]]'], correctAnswer: 0, explanation: '[[The text says|El texto dice]] "[[his new hobby took off quickly|su nuevo hobby despegó rápidamente]]".' },
  { question: '[[What|Qué]] [[did they run through|repasaron]]?', options: ['[[The itinerary before booking the camping trip|El itinerario antes de reservar el viaje de camping]]', '[[The picnic plan|El plan del picnic]]', '[[The hiking route|La ruta de senderismo]]'], correctAnswer: 0, explanation: '[[The text says|El texto dice]] "[[we ran through the itinerary before booking the camping trip|repasamos el itinerario antes de reservar el viaje de camping]]".' },
  { question: '[[What|Cuál]] [[is|es]] [[the main idea|la idea principal]] [[of the text|del texto]]?', options: ['[[Leisure activities and phrasal verbs: running into friends, setting up plans, taking up hobbies|Actividades de ocio y phrasal verbs: encontrarse con amigos, organizar planes, empezar hobbies]]', '[[Cinema is best|El cine es mejor]]', '[[Petrol is important|La gasolina es importante]]'], correctAnswer: 0, explanation: '[[The text|El texto]] [[describes|describe]] [[various leisure activities|varias actividades de ocio]].' },
  { question: '[[Which phrasal verb|Qué phrasal verb]] [[means "meet by accident"|significa "encontrarse por casualidad"]]?', options: ['[[Run into|Run into]]', '[[Set up|Set up]]', '[[Take up|Take up]]'], correctAnswer: 0, explanation: '[[Run into = meet by accident|Run into = encontrarse por casualidad]].' },
  { question: '[[What|Qué]] [[vocabulary|vocabulario]] [[is key|es clave]] [[in this text|en este texto]]?', options: ['[[picnic|picnic]], [[hiking|senderismo]], [[itinerary|itinerario]], [[camping|camping]], [[photography|fotografía]]', '[[sport|deporte]], [[music|música]]', '[[weather|tiempo]], [[food|comida]]'], correctAnswer: 0, explanation: '[[The text|El texto]] [[focuses on|se centra en]] [[leisure vocabulary|vocabulario de ocio]].' },
  { question: '[[They|Ellos]] [[set off|partieron]] [[late|tarde]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 1, explanation: '[[False|Falso]]. [[The text says|El texto dice]] "[[they set off early|partieron temprano]]".' },
  { question: '[[She|Ella]] ____ [[time every week for long walks|tiempo cada semana para largas caminatas]].', options: ['[[sets aside|reserva]]', '[[runs out of|se queda sin]]'], correctAnswer: 0, explanation: '[[Set aside = reserve|Set aside = reservar]].' },
  { question: '[[What|Qué]] [[can we infer|podemos inferir]] [[about the people|sobre las personas]]?', options: ['[[They enjoy leisure activities and spend time outdoors|Disfrutan de actividades de ocio y pasan tiempo al aire libre]]', '[[They prefer to stay home|Prefieren quedarse en casa]]', '[[They don\'t like hobbies|No les gustan los hobbies]]'], correctAnswer: 0, explanation: '[[Picnic|Picnic]], [[hiking|senderismo]], [[beach|playa]], [[camping|camping]] [[suggest|sugieren]] [[outdoor leisure|ocio al aire libre]].' },
];

export const UNIT_38_LESSON_3_READING: Exercise[] = QUESTIONS.map((q, i) => ({
  id: `b2-u38-l3-r${i + 1}`,
  type: 'reading',
  level: 'B2',
  topic: 'Leisure (extended)',
  difficulty: 'medium',
  transcript: READING_TRANSCRIPT,
  content: { title: LESSON_TITLE, instructions: INSTRUCTIONS, questions: [q] },
  topicName: 'Reading',
}));
