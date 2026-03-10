/**
 * Unidad 56 — Lección 3: Comprensión lectora (Adverbs of Manner)
 * 15 actividades: 1 texto + 15 preguntas
 */

import { Exercise } from '@/lib/exercise-generator';

const LESSON_TITLE = '[[Reading|Comprensión lectora]]';
const READING_TRANSCRIPT = `[[My|Mi]] [[name|nombre]] [[is|es]] [[Tom|Tom]]. [[I|Yo]] [[work|trabajo]] [[as|como]] [[a|un]] [[delivery|repartidor]] [[driver|conductor]]. [[I|Yo]] [[have to|tengo que]] [[drive|conducir]] [[very|muy]] [[carefully|con cuidado]] [[because|porque]] [[I|yo]] [[carry|llevo]] [[food|comida]] [[for|para]] [[many|muchos]] [[customers|clientes]]. [[Sometimes|A veces]] [[people|la gente]] [[ask|pide]] [[me|me]] [[to|a]] [[drive|conducir]] [[more|más]] [[quickly|rápidamente]], [[but|pero]] [[I|yo]] [[prefer|prefiero]] [[to|]] [[drive|conducir]] [[slowly|despacio]] [[and|y]] [[safely|de forma segura]]. [[My|Mi]] [[boss|jefe]] [[says|dice]] [[I|yo]] [[work|trabajo]] [[well|bien]] [[and|y]] [[the|los]] [[customers|clientes]] [[are|están]] [[happy|contentos]]. [[I|Yo]] [[always|siempre]] [[speak|hablo]] [[clearly|claramente]] [[when|cuando]] [[I|yo]] [[call|llamo]] [[to|a]] [[confirm|confirmar]] [[orders|pedidos]]. [[I|Yo]] [[also|también]] [[listen|escucho]] [[attentively|atentamente]] [[to|a]] [[instructions|instrucciones]]. [[Last|El]] [[week|semana]] [[I|yo]] [[finished|terminé]] [[my|mi]] [[route|ruta]] [[very|muy]] [[quickly|rápidamente]] [[because|porque]] [[there was|había]] [[little|poco]] [[traffic|tráfico]]. [[I|Yo]] [[felt|me sentí]] [[proud|orgulloso]] [[and|y]] [[happy|feliz]].`;

const INSTRUCTIONS = 'Lee el texto de abajo. Después responde las preguntas.';

const QUESTIONS = [
  { question: '[[What|Qué]] [[does|hace]] [[Tom|Tom]] [[for|como]] [[work|trabajo]]?', options: ['[[Teacher|Profesor]]', '[[Delivery driver|Repartidor]]', '[[Doctor|Médico]]', '[[Engineer|Ingeniero]]'], correctAnswer: 1, explanation: '[[I work as a delivery driver|Trabajo como repartidor]].' },
  { question: '[[Why|Por qué]] [[does|conduce]] [[Tom|Tom]] [[drive|conducir]] [[carefully|con cuidado]]?', options: ['[[He likes it|Le gusta]]', '[[He carries food for customers|Lleva comida para clientes]]', '[[The law says so|La ley lo dice]]', '[[His car is old|Su coche es viejo]]'], correctAnswer: 1, explanation: '[[Because I carry food for many customers|Porque llevo comida para muchos clientes]].' },
  { question: '[[What|Qué]] [[do|pide]] [[people|la gente]] [[sometimes|a veces]] [[ask|pedir]]?', options: ['[[To drive more slowly|Conducir más despacio]]', '[[To drive more quickly|Conducir más rápido]]', '[[To stop|Parar]]', '[[To change route|Cambiar ruta]]'], correctAnswer: 1, explanation: '[[People ask me to drive more quickly|La gente me pide conducir más rápido]].' },
  { question: '[[What|Qué]] [[does|prefiere]] [[Tom|Tom]] [[prefer|preferir]]?', options: ['[[To drive quickly|Conducir rápido]]', '[[To drive slowly and safely|Conducir despacio y seguro]]', '[[To not drive|No conducir]]', '[[To drive at night|Conducir de noche]]'], correctAnswer: 1, explanation: '[[I prefer to drive slowly and safely|Prefiero conducir despacio y seguro]].' },
  { question: '[[What|Qué]] [[does|dice]] [[his|su]] [[boss|jefe]] [[say|decir]]?', options: ['[[He works badly|Trabaja mal]]', '[[He works well|Trabaja bien]]', '[[He is late|Llega tarde]]', '[[He needs training|Necesita formación]]'], correctAnswer: 1, explanation: '[[My boss says I work well|Mi jefe dice que trabajo bien]].' },
  { question: '[[How|Cómo]] [[does|habla]] [[Tom|Tom]] [[speak|hablar]] [[when|cuando]] [[he|él]] [[calls|llama]]?', options: ['[[Loudly|En voz alta]]', '[[Quickly|Rápidamente]]', '[[Clearly|Claramente]]', '[[Quietly|En voz baja]]'], correctAnswer: 2, explanation: '[[I always speak clearly|Siempre hablo claramente]].' },
  { question: '[[What|Qué]] [[does|escucha]] [[Tom|Tom]] [[listen|escuchar]] [[attentively|atentamente]] [[to|a]]?', options: ['[[Music|Música]]', '[[Instructions|Instrucciones]]', '[[News|Noticias]]', '[[Stories|Historias]]'], correctAnswer: 1, explanation: '[[I listen attentively to instructions|Escucho atentamente las instrucciones]].' },
  { question: '[[Why|Por qué]] [[did|terminó]] [[Tom|Tom]] [[finish|terminar]] [[his route quickly|su ruta rápido]] [[last week|la semana pasada]]?', options: ['[[He drove fast|Condujo rápido]]', '[[There was little traffic|Había poco tráfico]]', '[[He had few orders|Tenía pocos pedidos]]', '[[He worked longer|Trabajó más tiempo]]'], correctAnswer: 1, explanation: '[[Because there was little traffic|Porque había poco tráfico]].' },
  { question: '[[How|Cómo]] [[did|se sintió]] [[Tom|Tom]] [[feel|sentir]] [[last week|la semana pasada]]?', options: ['[[Tired|Cansado]]', '[[Proud and happy|Orgulloso y feliz]]', '[[Angry|Enfadado]]', '[[Sad|Triste]]'], correctAnswer: 1, explanation: '[[I felt proud and happy|Me sentí orgulloso y feliz]].' },
  { question: '[[Tom|Tom]] [[prefers|prefiere]] [[to drive quickly|conducir rápido]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'False', explanation: '[[False|Falso]]. [[He prefers slowly and safely|Prefiere despacio y seguro]].' },
  { question: '[[Tom|Tom]] [[speaks|habla]] [[clearly|claramente]] [[when|cuando]] [[confirming|confirmando]] [[orders|pedidos]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'True', explanation: '[[True|Verdadero]]. [[I always speak clearly when I call to confirm orders|Siempre hablo claramente cuando llamo para confirmar pedidos]].' },
  { question: '[[The|El]] [[customers|clientes]] [[are|están]] [[unhappy|descontentos]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'False', explanation: '[[False|Falso]]. [[The customers are happy|Los clientes están contentos]].' },
  { question: '[[The|El]] [[main|principal]] [[topic|tema]] [[of|del]] [[text|texto]] [[is|es]]?', options: ['[[A delivery driver who works carefully|Un repartidor que trabaja con cuidado]]', '[[Traffic problems|Problemas de tráfico]]', '[[Food recipes|Recetas de comida]]', '[[Car maintenance|Mantenimiento del coche]]'], correctAnswer: 0, explanation: '[[The text is about Tom and how he works|El texto trata de Tom y cómo trabaja]].' },
  { question: '[[Which|Cuál]] [[adverb|adverbio]] [[is|se]] [[NOT|NO]] [[mentioned|mencionado]] [[in|en]] [[the|el]] [[text|texto]]?', options: ['[[Carefully|Con cuidado]]', '[[Quickly|Rápidamente]]', '[[Badly|Mal]]', '[[Clearly|Claramente]]'], correctAnswer: 2, explanation: '[[Badly|Mal]] [[is not in the text|no está en el texto]].' },
  { question: '[[Tom|Tom]] [[works|trabaja]] ____ ____ ____.', options: ['[[well and the customers are happy|bien y los clientes están contentos]]', '[[badly|mal]]', '[[only at night|solo de noche]]', '[[without a car|sin coche]]'], correctAnswer: 0, explanation: '[[My boss says I work well and the customers are happy|Mi jefe dice que trabajo bien y los clientes están contentos]].' },
];

export const UNIT_56_LESSON_3_READING: Exercise[] = QUESTIONS.map((q, i) => ({
  id: `a2-u56-l3-r${i + 1}`,
  type: 'reading',
  level: 'A2',
  topic: 'Adverbs of Manner',
  difficulty: 'easy',
  transcript: READING_TRANSCRIPT,
  content: { title: LESSON_TITLE, instructions: INSTRUCTIONS, questions: [q] },
  topicName: 'Reading',
}));
