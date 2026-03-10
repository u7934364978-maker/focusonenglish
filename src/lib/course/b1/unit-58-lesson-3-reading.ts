/**
 * Unidad 58 B1 — Lección 3: Comprensión lectora (Places: town & countryside)
 * 15 actividades
 */

import { Exercise } from '@/lib/exercise-generator';

const LESSON_TITLE = '[[Reading|Comprensión lectora]]';
const READING_TRANSCRIPT = `[[I|Yo]] [[live|vivo]] [[in a small village|en un pueblo pequeño]] [[which|que]] [[is located|está situado]] [[in a valley|en un valle]]. [[The village|El pueblo]] [[was built|fue construido]] [[around|alrededor de]] [[a river|un río]] [[that|que]] [[flows|fluye]] [[through the centre|por el centro]]. [[Although|Aunque]] [[it|él]] [[is small|es pequeño]], [[there are|hay]] [[many shops|muchas tiendas]] [[and|y]] [[a beautiful square|una plaza bonita]]. [[My friend|Mi amigo]] [[told me|me dijo]] [[that|que]] [[he had moved|había mudado]] [[to the city centre|al centro de la ciudad]]. [[I|Yo]] [[would rather live|preferiría vivir]] [[here|aquí]] [[than in a big city|que en una gran ciudad]]. [[The countryside|El campo]] [[is|es]] [[much quieter|mucho más tranquilo]] [[than|que]] [[the town|el pueblo]]. [[Next month|El próximo mes]] [[a new bridge|un nuevo puente]] [[will be opened|será inaugurado]] [[to connect|para conectar]] [[the two sides|los dos lados]] [[of the river|del río]].`;

const INSTRUCTIONS = 'Lee el texto de abajo. Después responde las preguntas.';

const QUESTIONS = [
  { question: '[[Where|Dónde]] [[does the person live|vive la persona]]?', options: ['[[In a big city|En una gran ciudad]]', '[[In a small village|En un pueblo pequeño]]', '[[In the countryside|En el campo]]'], correctAnswer: 1, explanation: '[[The text says|El texto dice]] "[[I live in a small village|vivo en un pueblo pequeño]]".' },
  { question: '[[Where|Dónde]] [[is the village located|está situado el pueblo]]?', options: ['[[On a mountain|En una montaña]]', '[[In a valley|En un valle]]', '[[By the sea|Junto al mar]]'], correctAnswer: 1, explanation: '[[The text says|El texto dice]] "[[is located in a valley|está situado en un valle]]".' },
  { question: '[[What|Qué]] [[flows through the centre|fluye por el centro]]?', options: ['[[A road|Una carretera]]', '[[A river|Un río]]', '[[A bridge|Un puente]]'], correctAnswer: 1, explanation: '[[The text says|El texto dice]] "[[a river that flows through the centre|un río que fluye por el centro]]".' },
  { question: '[[What|Qué]] [[did the friend say|dijo el amigo]]?', options: ['[[He was leaving|Se iba]]', '[[He had moved to the city centre|Había mudado al centro de la ciudad]]', '[[He was visiting|Estaba visitando]]'], correctAnswer: 1, explanation: '[[The text says|El texto dice]] "[[he had moved to the city centre|había mudado al centro de la ciudad]]".' },
  { question: '[[What|Qué]] [[does the person prefer|prefiere la persona]]?', options: ['[[Living in a big city|Vivir en una gran ciudad]]', '[[Living in the village|Vivir en el pueblo]]', '[[Living by the sea|Vivir junto al mar]]'], correctAnswer: 1, explanation: '[[The text says|El texto dice]] "[[I would rather live here than in a big city|preferiría vivir aquí que en una gran ciudad]]".' },
  { question: '[[The village|El pueblo]] [[has|tiene]] [[many shops|muchas tiendas]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'True', explanation: '[[True|Verdadero]]. [[The text says|El texto dice]] "[[there are many shops|hay muchas tiendas]]".' },
  { question: '[[A new bridge|Un nuevo puente]] [[will be opened|será inaugurado]] [[next month|el próximo mes]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'True', explanation: '[[True|Verdadero]]. [[The text says|El texto dice]] "[[Next month a new bridge will be opened|el próximo mes un nuevo puente será inaugurado]]".' },
  { question: '[[The countryside|El campo]] [[is|es]] [[quieter|más tranquilo]] [[than|que]] [[the town|el pueblo]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'True', explanation: '[[True|Verdadero]]. [[The text says|El texto dice]] "[[The countryside is much quieter than the town|el campo es mucho más tranquilo que el pueblo]]".' },
  { question: '[[What|Cuál]] [[is|es]] [[the main topic|el tema principal]] [[of|del]] [[this text|este texto]]?', options: ['[[Sport|Deporte]]', '[[Living in a village vs city|Vivir en pueblo vs ciudad]]', '[[Travel|Viajes]]'], correctAnswer: 1, explanation: '[[The text|El texto]] [[talks about|habla sobre]] [[village life and preferences|vida en pueblo y preferencias]].' },
  { question: '[[Passive voice|Voz pasiva]] [[is used|se usa]] [[for|para]] [[the village and bridge|el pueblo y puente]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'True', explanation: '[[True|Verdadero]]. "[[was built|fue construido]]", "[[will be opened|será inaugurado]]".' },
  { question: '[[Reported speech|Estilo indirecto]] [[is used|se usa]] [[for|para]] [[the friend\'s news|las noticias del amigo]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'True', explanation: '[[True|Verdadero]]. "[[My friend told me that he had moved|mi amigo me dijo que había mudado]]".' },
  { question: '[[Although|Although]] [[introduces|introduce]] [[a contrast|un contraste]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'True', explanation: '[[True|Verdadero]]. [[Small but has many shops|Pequeño pero tiene muchas tiendas]].' },
  { question: '[[The village|El pueblo]] [[has|tiene]] [[a beautiful square|una plaza bonita]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'True', explanation: '[[True|Verdadero]]. [[The text says|El texto dice]] "[[a beautiful square|una plaza bonita]]".' },
  { question: '[[Would rather|Preferiría]] [[expresses|expresa]] [[preference|preferencia]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'True', explanation: '[[True|Verdadero]]. [[Village over city|Pueblo sobre ciudad]].' },
  { question: '[[How many|Cuántos]] [[place-related words|palabras relacionadas con lugares]] [[does the text mention|menciona el texto]]?', options: ['[[Few|Pocas]]', '[[Several|Varias]]', '[[None|Ninguna]]'], correctAnswer: 1, explanation: '[[Several|Varias]]: [[village|pueblo]], [[valley|valle]], [[river|río]], [[square|plaza]], [[city|ciudad]], [[countryside|campo]], [[bridge|puente]].' },
];

export const UNIT_58_LESSON_3_READING: Exercise[] = QUESTIONS.map((q, i) => ({
  id: `b1-u58-l3-r${i + 1}`,
  type: 'reading',
  level: 'B1',
  topic: 'Places',
  difficulty: 'easy',
  transcript: READING_TRANSCRIPT,
  content: { title: LESSON_TITLE, instructions: INSTRUCTIONS, questions: [q] },
  topicName: 'Reading',
}));
