/**
 * Unidad 54 — Lección 4: Comprensión auditiva (Modals: Could & May)
 * 15 actividades: 1 audio + 15 preguntas
 */

import { Exercise } from '@/lib/exercise-generator';

const LESSON_TITLE = '[[Listening|Comprensión auditiva]]';
const LISTENING_TRANSCRIPT = `[[Excuse me|Disculpe]], [[could|¿podría]] [[you|usted]] [[help|ayudar]] [[me|me]]? [[I|Yo]] [[am|estoy]] [[looking for|buscando]] [[the|la]] [[train|estación]] [[station|de tren]]. [[You|Usted]] [[may|puede]] [[take|tomar]] [[the|el]] [[bus|autobús]] [[number|número]] [[7|7]] [[or|o]] [[walk|caminar]] [[for|durante]] [[about|unos]] [[10|10]] [[minutes|minutos]]. [[The|El]] [[bus|autobús]] [[may|puede]] [[be|estar]] [[faster|más rápido]] [[but|pero]] [[I|yo]] [[am not sure|no estoy seguro]]. [[Could|¿]] [[you|usted]] [[tell|decir]] [[me|me]] [[where|dónde]] [[the|la]] [[bus|parada]] [[stop|de autobús]] [[is|está]]? [[I|Yo]] [[could|podría]] [[also|también]] [[use|usar]] [[my|mi]] [[phone|teléfono]] [[to|para]] [[find|encontrar]] [[the|el]] [[way|camino]] [[but|pero]] [[the|la]] [[battery|batería]] [[is|está]] [[low|baja]]. [[Thank you|Gracias]] [[so much|mucho]] [[for|por]] [[your|tu]] [[help|ayuda]]!`;

const INSTRUCTIONS = 'Escucha el audio de abajo. Puedes leer la transcripción después de escuchar. Después responde las preguntas.';

const QUESTIONS = [
  { question: '[[What|Qué]] [[is|está]] [[the|el]] [[speaker|hablante]] [[looking for|buscando]]?', options: ['[[The bus stop|La parada de autobús]]', '[[The train station|La estación de tren]]', '[[A restaurant|Un restaurante]]', '[[A hotel|Un hotel]]'], correctAnswer: 1, explanation: '[[I am looking for the train station|Estoy buscando la estación de tren]].' },
  { question: '[[What|Qué]] [[may|puede]] [[the|el]] [[speaker|hablante]] ____ ____ ____ ____?', options: ['[[Take the bus number 7 or walk|Tomar el autobús número 7 o caminar]]', '[[Only take a taxi|Solo tomar un taxi]]', '[[Stay here|Quedarse aquí]]', '[[Go back|Volver]]'], correctAnswer: 0, explanation: '[[You may take the bus number 7 or walk|Puede tomar el autobús número 7 o caminar]].' },
  { question: '[[How long|Cuánto]] [[is|es]] [[the|el]] [[walk|paseo]] [[to|a]] [[the|la]] [[station|estación]]?', options: ['[[5 minutes|5 minutos]]', '[[10 minutes|10 minutos]]', '[[15 minutes|15 minutos]]', '[[20 minutes|20 minutos]]'], correctAnswer: 1, explanation: '[[Walk for about 10 minutes|Caminar unos 10 minutos]].' },
  { question: '[[Which|Cuál]] [[bus|autobús]] [[number|número]] [[may|puede]] [[the|el]] [[speaker|hablante]] ____ ____ ____?', options: ['[[Take bus 5|Tomar autobús 5]]', '[[Take bus 7|Tomar autobús 7]]', '[[Take bus 10|Tomar autobús 10]]', '[[Take bus 15|Tomar autobús 15]]'], correctAnswer: 1, explanation: '[[Bus number 7|Autobús número 7]].' },
  { question: '[[What|Qué]] [[does|pregunta]] [[the|el]] [[speaker|hablante]] ____ ____ ____ ____ ____ ____?', options: ['[[Where the bus stop is|Dónde está la parada de autobús]]', '[[What time it is|Qué hora es]]', '[[How much it costs|Cuánto cuesta]]', '[[Where to eat|Dónde comer]]'], correctAnswer: 0, explanation: '[[Could you tell me where the bus stop is|¿Podría decirme dónde está la parada de autobús]]?' },
  { question: '[[Why|Por qué]] [[could|podría]] [[the|el]] [[speaker|hablante]] ____ ____ ____ ____ ____ ____ ____ ____?', options: ['[[Not use his phone - battery is low|No usar su teléfono - batería baja]]', '[[He lost it|Lo perdió]]', '[[He likes walking|Le gusta caminar]]', '[[No reason|Sin razón]]'], correctAnswer: 0, explanation: '[[The battery is low|La batería está baja]].' },
  { question: '[[The|El]] [[bus|autobús]] ____ ____ ____ ____ ____ ____ ____ ____ ____.', options: ['[[may be faster|puede ser más rápido]]', '[[is definitely slower|definitivamente es más lento]]', '[[does not exist|no existe]]', '[[is always full|siempre está lleno]]'], correctAnswer: 0, explanation: '[[The bus may be faster|El autobús puede ser más rápido]].' },
  { question: '[[Which|Cuál]] [[modals|modales]] [[does|usa]] [[the|el]] [[speaker|hablante]] ____ ____ ____?', options: ['[[Could and may|Could y may]]', '[[Must and have to|Must y have to]]', '[[Should|Should]]', '[[Can only|Solo can]]'], correctAnswer: 0, explanation: '[[Could you help|¿Podría ayudar]] and [[you may take|puede tomar]].' },
  { question: '[[The|El]] [[main|principal]] [[topic|tema]] [[of|del]] [[audio|audio]] [[is|es]]?', options: ['[[Asking for directions|Pedir direcciones]]', '[[Ordering food|Pedir comida]]', '[[Booking a hotel|Reservar un hotel]]', '[[Buying a ticket|Comprar un billete]]'], correctAnswer: 0, explanation: '[[The|El]] [[speaker|hablante]] [[asks for|pide]] [[directions|direcciones]].' },
  { question: '[[Could you help me|¿Podría ayudarme]] [[is|es]] ____ ____ ____ ____ ____.', options: ['[[a polite request|una petición educada]]', '[[an order|una orden]]', '[[a complaint|una queja]]', '[[a suggestion|una sugerencia]]'], correctAnswer: 0, explanation: '[[Could you|¿Podría]] = [[polite request|petición educada]].' },
  { question: '[[True or False|Verdadero o Falso]]: [[The|El]] [[speaker|hablante]] [[knows|sabe]] [[exactly|exactamente]] [[where|dónde]] [[the|la]] [[station|estación]] [[is|está]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'False', explanation: '[[He is looking for it|La está buscando]].' },
  { question: '[[What|Qué]] [[does|dice]] [[the|el]] [[speaker|hablante]] ____ ____ ____ ____ ____?', options: ['[[Thank you for your help|Gracias por tu ayuda]]', '[[Goodbye|Adiós]]', '[[I am sorry|Lo siento]]', '[[Please wait|Por favor espera]]'], correctAnswer: 0, explanation: '[[Thank you so much for your help|Gracias mucho por tu ayuda]].' },
  { question: '[[May|Puede]] [[in|en]] "[[you may take|puede tomar]]" [[expresses|expresa]] ____.', options: ['[[permission and possibility|permiso y posibilidad]]', '[[obligation|obligación]]', '[[prohibition|prohibición]]', '[[past ability|capacidad pasada]]'], correctAnswer: 0, explanation: '[[You may take|Puede tomar]] = [[giving options|dar opciones]]/[[permission|permiso]].' },
  { question: '[[The|El]] [[speaker|hablante]] ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____.', options: ['[[is lost and needs help|está perdido y necesita ayuda]]', '[[knows the way|conoce el camino]]', '[[is giving directions|está dando direcciones]]', '[[is at the station|está en la estación]]'], correctAnswer: 0, explanation: '[[I am looking for the train station|Estoy buscando la estación de tren]].' },
  { question: '[[Could|Podría]] [[in|en]] "[[Could you help me|¿Podría ayudarme]]" [[is|se]] [[used|usa]] [[for|para]] ____.', options: ['[[making a polite request|hacer una petición educada]]', '[[expressing obligation|expresar obligación]]', '[[past ability|capacidad pasada]]', '[[giving advice|dar consejo]]'], correctAnswer: 0, explanation: '[[Could you|¿Podría]] = [[polite request|petición educada]].' },
];

export const UNIT_54_LESSON_4_LISTENING: Exercise[] = QUESTIONS.map((q, i) => ({
  id: `a2-u54-l4-l${i + 1}`,
  type: 'listening',
  level: 'A2',
  topic: 'Modals: Could & May',
  difficulty: 'easy',
  transcript: LISTENING_TRANSCRIPT,
  content: { title: LESSON_TITLE, instructions: INSTRUCTIONS, questions: [q] },
  topicName: 'Listening',
}));
