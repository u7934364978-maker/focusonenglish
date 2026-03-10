/**
 * Unidad 58 — Lección 4: Comprensión auditiva (Prepositions of Movement)
 * 15 actividades: 1 audio + 15 preguntas
 */

import { Exercise } from '@/lib/exercise-generator';

const LESSON_TITLE = '[[Listening|Comprensión auditiva]]';
const LISTENING_TRANSCRIPT = `[[Hi|Hola]]! [[I|Yo]] [[am|soy]] [[Mike|Mike]]. [[I|Yo]] [[work|trabajo]] [[as|como]] [[a|un]] [[postman|cartero]]. [[Every|Cada]] [[morning|mañana]] [[I|yo]] [[get|subo]] [[into|en]] [[my van|mi furgoneta]] [[and|y]] [[drive|conduzco]] [[through|a través de]] [[the town|el pueblo]]. [[I|Yo]] [[walk|camino]] [[up|por]] [[and|y]] [[down|por]] [[many|muchas]] [[stairs|escaleras]] [[every day|cada día]]. [[Sometimes|A veces]] [[I|yo]] [[walk|camino]] [[along|a lo largo de]] [[long streets|calles largas]] [[to|para]] [[deliver|entregar]] [[letters|cartas]]. [[I|yo]] [[go|voy]] [[into|en]] [[buildings|edificios]] [[and|y]] [[come|salgo]] [[out of|de]] [[them|ellos]] [[many times|muchas veces]]. [[I|yo]] [[walk|camino]] [[past|por delante de]] [[shops|tiendas]] [[and|y]] [[houses|casas]]. [[I|yo]] [[never|nunca]] [[run|corro]] [[towards|hacia]] [[dogs|perros]] [[because|porque]] [[some|algunos]] [[are|son]] [[scary|asustadizos]]. [[When|Cuando]] [[I|yo]] [[finish|termino]] [[my route|mi ruta]] [[I|yo]] [[get|bajo]] [[off|de]] [[my|mi]] [[bike|bicicleta]] [[and|y]] [[go|voy]] [[home|a casa]]. [[I|yo]] [[love|amo]] [[my|mi]] [[job|trabajo]] [[because|porque]] [[I|yo]] [[see|veo]] [[many|muchos]] [[places|lugares]] [[every day|cada día]].`;

const INSTRUCTIONS = 'Escucha el audio de abajo. Puedes leer la transcripción después de escuchar. Después responde las preguntas.';

const QUESTIONS = [
  { question: '[[What|Qué]] [[does|hace]] [[Mike|Mike]] [[do|hacer]] [[for work|como trabajo]]?', options: ['[[Teacher|Profesor]]', '[[Postman|Cartero]]', '[[Driver|Conductor]]', '[[Doctor|Médico]]'], correctAnswer: 1, explanation: '[[I work as a postman|Trabajo como cartero]].' },
  { question: '[[What|Qué]] [[does|hace]] [[he|él]] [[get into|subir]] [[every morning|cada mañana]]?', options: ['[[A bus|Un autobús]]', '[[His van|Su furgoneta]]', '[[A train|Un tren]]', '[[A car|Un coche]]'], correctAnswer: 1, explanation: '[[I get into my van|Subo en mi furgoneta]].' },
  { question: '[[What|Qué]] [[does|conduce]] [[he|él]] [[drive through|conducir a través de]]?', options: ['[[The forest|El bosque]]', '[[The town|El pueblo]]', '[[The mountains|Las montañas]]', '[[The desert|El desierto]]'], correctAnswer: 1, explanation: '[[I drive through the town|Conduzco a través del pueblo]].' },
  { question: '[[What|Qué]] [[does|hace]] [[he|él]] [[walk up and down|subir y bajar]]?', options: ['[[Hills|Colinas]]', '[[Stairs|Escaleras]]', '[[Mountains|Montañas]]', '[[Ladders|Escaleras]]'], correctAnswer: 1, explanation: '[[I walk up and down many stairs|Subo y bajo muchas escaleras]].' },
  { question: '[[What|Qué]] [[does|camina]] [[he|él]] [[walk along|caminar a lo largo de]]?', options: ['[[Rivers|Ríos]]', '[[Long streets|Calles largas]]', '[[Beaches|Playas]]', '[[Bridges|Puentes]]'], correctAnswer: 1, explanation: '[[I walk along long streets|Camino a lo largo de calles largas]].' },
  { question: '[[What|Qué]] [[does|entra]] [[he|él]] [[go into|entrar]]?', options: ['[[Shops only|Solo tiendas]]', '[[Buildings|Edificios]]', '[[Parks|Parques]]', '[[Cars|Coches]]'], correctAnswer: 1, explanation: '[[I go into buildings|Entro en edificios]].' },
  { question: '[[What|Qué]] [[does|pasa]] [[he|él]] [[walk past|pasar por delante de]]?', options: ['[[Rivers|Ríos]]', '[[Shops and houses|Tiendas y casas]]', '[[Mountains|Montañas]]', '[[Lakes|Lagos]]'], correctAnswer: 1, explanation: '[[I walk past shops and houses|Pasó por delante de tiendas y casas]].' },
  { question: '[[Why|Por qué]] [[doesn\'t|no]] [[he|él]] [[run towards|correr hacia]] [[dogs|perros]]?', options: ['[[He is allergic|Es alérgico]]', '[[Some are scary|Algunos son asustadizos]]', '[[He doesn\'t like them|No le gustan]]', '[[They are too fast|Son muy rápidos]]'], correctAnswer: 1, explanation: '[[Some are scary|Algunos son asustadizos]].' },
  { question: '[[What|De qué]] [[does|baja]] [[he|él]] [[get off|bajar]] [[when|cuando]] [[he finishes|termina]]?', options: ['[[His van|Su furgoneta]]', '[[His bike|Su bicicleta]]', '[[A bus|Un autobús]]', '[[A train|Un tren]]'], correctAnswer: 1, explanation: '[[I get off my bike|Bajo de mi bicicleta]].' },
  { question: '[[The|El]] [[main|principal]] [[topic|tema]] [[of|del]] [[audio|audio]] [[is|es]]?', options: ['[[A postman who uses many prepositions of movement|Un cartero que usa muchas preposiciones de movimiento]]', '[[Dogs|Perros]]', '[[Bikes|Bicicletas]]', '[[Letters|Cartas]]'], correctAnswer: 0, explanation: '[[The audio is about Mike and his job as postman|El audio trata de Mike y su trabajo como cartero]].' },
  { question: '[[Mike|Mike]] [[walks|camina]] [[up and down|sube y baja]] [[stairs|escaleras]] [[every day|cada día]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'True', explanation: '[[True|Verdadero]]. [[I walk up and down many stairs every day|Subo y bajo muchas escaleras cada día]].' },
  { question: '[[Mike|Mike]] [[runs|corre]] [[towards|hacia]] [[dogs|perros]] [[when|cuando]] [[he sees them|los ve]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'False', explanation: '[[False|Falso]]. [[I never run towards dogs|Nunca corro hacia los perros]].' },
  { question: '[[Which|Cuál]] [[preposition|preposición]] [[does|usa]] [[Mike|Mike]] [[NOT|NO]] [[use|usar]]?', options: ['[[Into|En]]', '[[Through|A través de]]', '[[Over|Sobre]]', '[[Off|De]]'], correctAnswer: 2, explanation: '[[Over|Sobre]] [[is not in the audio|no está en el audio]].' },
  { question: '[[Mike|Mike]] [[gets|sube]] ____ ____ ____ [[every morning|cada mañana]].', options: ['[[into his van|en su furgoneta]]', '[[out of his house|de su casa]]', '[[through the town|a través del pueblo]]', '[[off the bus|del autobús]]'], correctAnswer: 0, explanation: '[[I get into my van|Subo en mi furgoneta]].' },
  { question: '[[Mike|Mike]] [[loves|ama]] ____ ____.', options: ['[[his job because he sees many places|su trabajo porque ve muchos lugares]]', '[[dogs|los perros]]', '[[stairs|las escaleras]]', '[[letters|las cartas]]'], correctAnswer: 0, explanation: '[[I love my job because I see many places|Amo mi trabajo porque veo muchos lugares]].' },
];

export const UNIT_58_LESSON_4_LISTENING: Exercise[] = QUESTIONS.map((q, i) => ({
  id: `a2-u58-l4-l${i + 1}`,
  type: 'listening',
  level: 'A2',
  topic: 'Prepositions of Movement',
  difficulty: 'easy',
  transcript: LISTENING_TRANSCRIPT,
  content: { title: LESSON_TITLE, instructions: INSTRUCTIONS, questions: [q] },
  topicName: 'Listening',
}));
