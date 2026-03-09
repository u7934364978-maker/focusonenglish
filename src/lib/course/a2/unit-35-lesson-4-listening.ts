/**
 * Unidad 35 — Lección 4: Comprensión auditiva (Travel Plans & Bookings)
 * 15 actividades: 1 audio + 15 preguntas
 */

import { Exercise } from '@/lib/exercise-generator';

const LESSON_TITLE = '[[Listening|Comprensión auditiva]]';
const LISTENING_TRANSCRIPT = `[[Hello|Hola]], [[I|yo]] [[would like|me gustaría]] [[to|a]] [[book|reservar]] [[a|un]] [[flight|vuelo]] [[to|a]] [[Rome|Roma]] [[for|para]] [[next|el próximo]] [[week|semana]]. [[Do|¿]] [[you|tienen]] [[have|]] [[any|algún]] [[flights|vuelo]] [[on|el]] [[Monday|lunes]]? [[Yes|Sí]], [[we|nosotros]] [[have|tenemos]] [[a|un]] [[flight|vuelo]] [[at|a]] [[9|9]] [[am|am]] [[and|y]] [[another|otro]] [[at|a]] [[3|3]] [[pm|pm]]. [[I|Yo]] [[would like|me gustaría]] [[the|el]] [[morning|de la mañana]] [[one|uno]]. [[The|El]] [[price|precio]] [[is|es]] [[120|120]] [[euros|euros]] [[for|por]] [[a|un]] [[return|ida y vuelta]] [[ticket|billete]]. [[Perfect|Perfecto]]. [[I|Yo]] [[will|lo]] [[book|reservaré]] [[it|ahora]].`;

const INSTRUCTIONS = 'Escucha el audio de abajo. Puedes leer la transcripción después de escuchar. Después responde las preguntas.';

const QUESTIONS = [
  { question: '[[What|Qué]] [[does|quiere]] [[the|el]] [[speaker|hablante]] [[want|el hablante]] [[to|a]] [[book|reservar]]?', options: ['[[A|Un]] [[hotel|hotel]]', '[[a|un]] [[flight|vuelo]]', '[[a|un]] [[train|tren]]', '[[a|un]] [[car|coche]]'], correctAnswer: 1, explanation: '[[He|Él]] [[says|dice]] "[[I would like to book a flight|Me gustaría reservar un vuelo]]".' },
  { question: '[[Where|A dónde]] [[does|quiere]] [[the|el]] [[speaker|hablante]] [[want|el hablante]] [[to|a]] [[travel|viajar]]?', options: ['[[Paris|París]]', '[[Rome|Roma]]', '[[London|Londres]]', '[[Madrid|Madrid]]'], correctAnswer: 1, explanation: '[[He|Él]] [[says|dice]] "[[flight to Rome|vuelo a Roma]]".' },
  { question: '[[When|Cuándo]] [[does|quiere]] [[the|el]] [[speaker|hablante]] [[want|el hablante]] [[to|a]] [[travel|viajar]]?', options: ['[[this|esta]] [[week|semana]]', '[[next|el próximo]] [[week|semana]]', '[[next|el próximo]] [[month|mes]]', '[[tomorrow|mañana]]'], correctAnswer: 1, explanation: '[[He|Él]] [[says|dice]] "[[for next week|para el próximo semana]]".' },
  { question: '[[What|Qué]] [[day|día]] [[does|pregunta]] [[the|el]] [[speaker|hablante]] [[ask|el hablante]] [[about|sobre]]?', options: ['[[Friday|Viernes]]', '[[Monday|Lunes]]', '[[Saturday|Sábado]]', '[[Sunday|Domingo]]'], correctAnswer: 1, explanation: '[[He|Él]] [[asks|pregunta]] "[[any flights on Monday|¿vuelos el lunes?]]".' },
  { question: '[[What|Qué]] [[times|horas]] [[are|hay]] [[available|disponibles]]?', options: ['[[8|8]] [[am|am]] [[and|y]] [[2|2]] [[pm|pm]]', '[[9|9]] [[am|am]] [[and|y]] [[3|3]] [[pm|pm]]', '[[10|10]] [[am|am]] [[and|y]] [[4|4]] [[pm|pm]]', '[[7|7]] [[am|am]] [[and|y]] [[1|1]] [[pm|pm]]'], correctAnswer: 1, explanation: '[[They|Ellos]] [[say|dicen]] "[[flight at 9 am and another at 3 pm|vuelo a las 9 am y otro a las 3 pm]]".' },
  { question: '[[Which|Cuál]] [[flight|vuelo]] [[does|elige]] [[the|el]] [[speaker|hablante]] [[choose|el hablante]]?', options: ['[[The|El]] [[afternoon|de la tarde]] [[one|uno]]', '[[The|El]] [[morning|de la mañana]] [[one|uno]]', '[[Both|Ambos]]', '[[Neither|Ninguno]]'], correctAnswer: 1, explanation: '[[He|Él]] [[says|dice]] "[[I would like the morning one|Me gustaría el de la mañana]]".' },
  { question: '[[What|Cuánto]] [[is|cuesta]] [[the|el]] [[price|precio]]?', options: ['[[100|100]] [[euros|euros]]', '[[120|120]] [[euros|euros]]', '[[150|150]] [[euros|euros]]', '[[200|200]] [[euros|euros]]'], correctAnswer: 1, explanation: '[[They|Ellos]] [[say|dicen]] "[[120 euros|120 euros]]".' },
  { question: '[[Is|Es]] [[the|el]] [[ticket|billete]] [[one-way|solo ida]] [[or|o]] [[return|ida y vuelta]]?', options: ['[[One-way|Solo ida]]', '[[Return|Ida y vuelta]]', '[[Both|Ambos]]', '[[Not mentioned|No mencionado]]'], correctAnswer: 1, explanation: '[[They|Ellos]] [[say|dicen]] "[[for a return ticket|por billete ida y vuelta]]".' },
  { question: '[[The|El]] [[speaker|hablante]] [[will|reservará]] [[book|el]] [[the|vuelo]] [[flight|.]]', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'True', explanation: '[[True|Verdadero]]. [[He|Él]] [[says|dice]] "[[I will book it|Lo reservaré]]".' },
  { question: '[[What|Cuál]] [[is|es]] [[the|el]] [[main|principal]] [[topic|tema]] [[of|del]] [[this|este]] [[audio|audio]]?', options: ['[[Hotel|Reserva]] [[booking|de hotel]]', '[[Flight|Reserva]] [[booking|de vuelo]]', '[[Weather|Tiempo]]', '[[Shopping|Compras]]'], correctAnswer: 1, explanation: '[[The|El]] [[audio|audio]] [[is|es]] [[about|sobre]] [[booking|reserva]] [[a|un]] [[flight|vuelo]].' },
  { question: '[[The|El]] [[conversation|conversación]] [[is|es]] [[probably|probablemente]] [[at|en]] [[a|una]] ____.', options: ['[[restaurant|restaurante]]', '[[travel|agencia]] [[agency|de viajes]]', '[[supermarket|supermercado]]', '[[hospital|hospital]]'], correctAnswer: 1, explanation: '[[Travel|Agencia]] [[agency|de viajes]] [[for|para]] [[flight|vuelo]] [[booking|reserva]].' },
  { question: '[[How many|Cuántos]] [[flights|vuelos]] [[are|hay]] [[available|disponibles]] [[on|el]] [[Monday|lunes]]?', options: ['[[one|uno]]', '[[two|dos]]', '[[three|tres]]', '[[four|cuatro]]'], correctAnswer: 1, explanation: '[[Two|Dos]]: [[9|9]] [[am|am]] [[and|y]] [[3|3]] [[pm|pm]].' },
  { question: '[[The|El]] [[speaker|hablante]] [[says|dice]] [[perfect|perfecto]] [[when|cuando]] ____.', options: ['[[he|él]] [[hears|oye]] [[the|el]] [[price|precio]]', '[[he|él]] [[hears|oye]] [[the|los]] [[times|horarios]]', '[[he|él]] [[decides|decide]] [[to|a]] [[book|reservar]]', '[[he|él]] [[arrives|llega]]'], correctAnswer: 2, explanation: '[[He|Él]] [[says|dice]] "[[Perfect|Perfecto]]" [[when|cuando]] [[decides|decide]] [[to|a]] [[book|reservar]].' },
  { question: '[[The|El]] [[price|precio]] [[includes|incluye]] ____ [[trip|viaje]].', options: ['[[one-way|solo ida]]', '[[return|ida y vuelta]]', '[[multiple|múltiples]]', '[[no|ningún]]'], correctAnswer: 1, explanation: '[[Return|Ida y vuelta]] [[ticket|billete]].' },
  { question: '[[The|El]] [[speaker|hablante]] [[is|está]] ____ [[with|con]] [[the|la]] [[booking|reserva]].', options: ['[[unhappy|infeliz]]', '[[satisfied|satisfecho]]', '[[confused|confundido]]', '[[angry|enfadado]]'], correctAnswer: 1, explanation: '[[He|Él]] [[says|dice]] "[[Perfect|Perfecto]]" = [[satisfied|satisfecho]].' },
];

export const UNIT_35_LESSON_4_LISTENING: Exercise[] = QUESTIONS.map((q, i) => ({
  id: `a2-u35-l4-l${i + 1}`,
  type: 'listening',
  level: 'A2',
  topic: 'Travel Plans & Bookings',
  difficulty: 'easy',
  transcript: LISTENING_TRANSCRIPT,
  content: { title: LESSON_TITLE, instructions: INSTRUCTIONS, questions: [q] },
  topicName: 'Listening',
}));
