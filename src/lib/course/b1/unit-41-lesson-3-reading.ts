/**
 * Unidad 41 B1 — Lección 3: Comprensión lectora (Verb + preposition, Dependent prepositions)
 * 15 actividades
 */

import { Exercise } from '@/lib/exercise-generator';

const LESSON_TITLE = '[[Reading|Comprensión lectora]]';
const READING_TRANSCRIPT = `[[I|Yo]] [[depend on|dependo de]] [[my family|mi familia]] [[for|para]] [[support|apoyo]]. [[When|Cuando]] [[I|yo]] [[listen to|escucho]] [[advice|consejos]] [[from|de]] [[them|ellos]], [[I|yo]] [[always|siempre]] [[learn|aprendo]] [[something|algo]] [[new|nuevo]]. [[Last week|La semana pasada]] [[I|yo]] [[waited for|esperé]] [[the bus|el autobús]] [[for|durante]] [[an hour|una hora]]. [[I|Yo]] [[looked at|miré]] [[the timetable|el horario]] [[and|y]] [[realised|me di cuenta]] [[I|yo]] [[had|había]] [[missed|perdido]] [[it|lo]]. [[I|Yo]] [[apologised to|me disculpé con]] [[my boss|mi jefe]] [[for|por]] [[being|por llegar]] [[late|tarde]]. [[He|Él]] [[believes in|cree en]] [[me|mí]] [[and|y]] [[paid for|pagó]] [[my|mi]] [[taxi|taxi]] [[home|a casa]]. [[I|Yo]] [[asked for|pedí]] [[help|ayuda]] [[and|y]] [[we|nosotros]] [[talked about|hablamos sobre]] [[the project|el proyecto]]. [[I|Yo]] [[agree with|estoy de acuerdo con]] [[him|él]] [[about|sobre]] [[everything|todo]].`;

const INSTRUCTIONS = 'Lee el texto de abajo. Después responde las preguntas.';

const QUESTIONS = [
  { question: '[[What|Qué]] [[does the person depend on|depende la persona]]?', options: ['[[friends|amigos]]', '[[family|familia]]', '[[colleagues|compañeros]]'], correctAnswer: 1, explanation: '[[The text says|El texto dice]] "[[I depend on my family|dependo de mi familia]]".' },
  { question: '[[What|Qué]] [[does the person listen to|escucha la persona]]?', options: ['[[music|música]]', '[[advice from family|consejos de la familia]]', '[[the radio|la radio]]'], correctAnswer: 1, explanation: '[[The text says|El texto dice]] "[[listen to advice from them|escucho consejos de ellos]]".' },
  { question: '[[How long|Cuánto tiempo]] [[did they wait for the bus|esperó el autobús]]?', options: ['[[30 minutes|30 minutos]]', '[[an hour|una hora]]', '[[two hours|dos horas]]'], correctAnswer: 1, explanation: '[[The text says|El texto dice]] "[[waited for the bus for an hour|esperó el autobús durante una hora]]".' },
  { question: '[[What|Qué]] [[did they look at|miró]]?', options: ['[[the map|el mapa]]', '[[the timetable|el horario]]', '[[the phone|el teléfono]]'], correctAnswer: 1, explanation: '[[The text says|El texto dice]] "[[looked at the timetable|miró el horario]]".' },
  { question: '[[Who|A quién]] [[did they apologise to|se disculpó]]?', options: ['[[their family|su familia]]', '[[their boss|su jefe]]', '[[a friend|un amigo]]'], correctAnswer: 1, explanation: '[[The text says|El texto dice]] "[[apologised to my boss|me disculpé con mi jefe]]".' },
  { question: '[[What|Qué]] [[did the boss pay for|pagó el jefe]]?', options: ['[[lunch|almuerzo]]', '[[the taxi home|el taxi a casa]]', '[[a hotel|un hotel]]'], correctAnswer: 1, explanation: '[[The text says|El texto dice]] "[[paid for my taxi home|pagó mi taxi a casa]]".' },
  { question: '[[What|Qué]] [[did they ask for|pidió]]?', options: ['[[money|dinero]]', '[[help|ayuda]]', '[[advice|consejo]]'], correctAnswer: 1, explanation: '[[The text says|El texto dice]] "[[asked for help|pidió ayuda]]".' },
  { question: '[[They|Ellos]] [[talked about|hablaron sobre]] [[the project|el proyecto]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'True', explanation: '[[True|Verdadero]]. [[The text says|El texto dice]] "[[talked about the project|hablaron sobre el proyecto]]".' },
  { question: '[[The person|La persona]] [[agrees with|está de acuerdo con]] [[the boss|el jefe]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'True', explanation: '[[True|Verdadero]]. [[The text says|El texto dice]] "[[agree with him about everything|estoy de acuerdo con él sobre todo]]".' },
  { question: '[[What|Cuál]] [[is|es]] [[the main topic|el tema principal]] [[of|del]] [[this text|este texto]]?', options: ['[[Shopping|Compras]]', '[[Work and family support|Trabajo y apoyo familiar]]', '[[Travel|Viajes]]'], correctAnswer: 1, explanation: '[[The text|El texto]] [[describes|describe]] [[work situation and family support|situación laboral y apoyo familiar]].' },
  { question: '[[The person|La persona]] [[missed|perdió]] [[the bus|el autobús]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'True', explanation: '[[True|Verdadero]]. [[The text says|El texto dice]] "[[I had missed it|lo había perdido]]".' },
  { question: '[[The boss|El jefe]] [[believes in|cree en]] [[the person|la persona]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'True', explanation: '[[True|Verdadero]]. [[The text says|El texto dice]] "[[He believes in me|cree en mí]]".' },
  { question: '[[Which verb + preposition|Qué verbo + preposición]] [[means "esperar"|significa esperar]]?', options: ['[[listen to|escuchar a]]', '[[wait for|esperar a]]', '[[look at|mirar a]]'], correctAnswer: 1, explanation: '[[Wait for|Esperar a]] [[means esperar|significa esperar]].' },
  { question: '[[The person|La persona]] [[was late|llegó tarde]] [[to work|al trabajo]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'True', explanation: '[[True|Verdadero]]. [[The text says|El texto dice]] "[[apologised for being late|se disculpó por llegar tarde]]".' },
  { question: '[[The text|El texto]] [[uses|usa]] [[many|muchos]] [[verb + preposition|verbo + preposición]] [[combinations|combinaciones]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'True', explanation: '[[True|Verdadero]]. [[Examples|Ejemplos]]: [[depend on|depender de]], [[listen to|escuchar a]], [[wait for|esperar a]], [[look at|mirar a]], etc.' },
];

export const UNIT_41_LESSON_3_READING: Exercise[] = QUESTIONS.map((q, i) => ({
  id: `b1-u41-l3-r${i + 1}`,
  type: 'reading',
  level: 'B1',
  topic: 'Dependent Prepositions',
  difficulty: 'easy',
  transcript: READING_TRANSCRIPT,
  content: { title: LESSON_TITLE, instructions: INSTRUCTIONS, questions: [q] },
  topicName: 'Reading',
}));
