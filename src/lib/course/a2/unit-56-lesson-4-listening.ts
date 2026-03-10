/**
 * Unidad 56 — Lección 4: Comprensión auditiva (Adverbs of Manner)
 * 15 actividades: 1 audio + 15 preguntas
 */

import { Exercise } from '@/lib/exercise-generator';

const LESSON_TITLE = '[[Listening|Comprensión auditiva]]';
const LISTENING_TRANSCRIPT = `[[Hi|Hola]]! [[I|Yo]] [[am|soy]] [[Sarah|Sarah]]. [[I|Yo]] [[teach|enseño]] [[English|inglés]] [[at|en]] [[a|una]] [[small|pequeña]] [[school|escuela]]. [[I|Yo]] [[always|siempre]] [[speak|hablo]] [[clearly|claramente]] [[and|y]] [[slowly|despacio]] [[so|para que]] [[my|mis]] [[students|estudiantes]] [[can|puedan]] [[understand|entender]] [[me|me]]. [[I|Yo]] [[explain|explico]] [[grammar|gramática]] [[very|muy]] [[carefully|con cuidado]] [[because|porque]] [[it|es]] [[is|es]] [[important|importante]]. [[My|Mis]] [[students|estudiantes]] [[work|trabajan]] [[hard|duro]] [[and|y]] [[they|ellos]] [[improve|mejoran]] [[quickly|rápidamente]]. [[I|Yo]] [[love|amo]] [[my|mi]] [[job|trabajo]] [[and|y]] [[I|yo]] [[try|intento]] [[to|]] [[do|hacer]] [[it|lo]] [[well|bien]]. [[Sometimes|A veces]] [[I|yo]] [[get|me pongo]] [[tired|cansada]] [[but|pero]] [[I|yo]] [[never|nunca]] [[speak|hablo]] [[angrily|con enfado]] [[to|a]] [[my|mis]] [[students|estudiantes]]. [[I|Yo]] [[always|siempre]] [[speak|hablo]] [[patiently|con paciencia]] [[and|y]] [[kindly|amablemente]].`;

const INSTRUCTIONS = 'Escucha el audio de abajo. Puedes leer la transcripción después de escuchar. Después responde las preguntas.';

const QUESTIONS = [
  { question: '[[What|Qué]] [[does|enseña]] [[Sarah|Sarah]] [[teach|enseñar]]?', options: ['[[Math|Matemáticas]]', '[[English|Inglés]]', '[[Science|Ciencias]]', '[[History|Historia]]'], correctAnswer: 1, explanation: '[[I teach English|Enseño inglés]].' },
  { question: '[[Where|Dónde]] [[does|enseña]] [[she|ella]] [[teach|enseñar]]?', options: ['[[At a big university|En una gran universidad]]', '[[At a small school|En una escuela pequeña]]', '[[At home|En casa]]', '[[Online only|Solo online]]'], correctAnswer: 1, explanation: '[[I teach at a small school|Enseño en una escuela pequeña]].' },
  { question: '[[How|Cómo]] [[does|habla]] [[Sarah|Sarah]] [[speak|hablar]] [[to|a]] [[her|sus]] [[students|estudiantes]]?', options: ['[[Quickly and loudly|Rápido y alto]]', '[[Clearly and slowly|Claramente y despacio]]', '[[Quietly|En voz baja]]', '[[Angrily|Con enfado]]'], correctAnswer: 1, explanation: '[[I always speak clearly and slowly|Siempre hablo claramente y despacio]].' },
  { question: '[[Why|Por qué]] [[does|explica]] [[she|ella]] [[explain|explicar]] [[grammar|gramática]] [[carefully|con cuidado]]?', options: ['[[It is easy|Es fácil]]', '[[It is important|Es importante]]', '[[Students ask|Los estudiantes piden]]', '[[The book says so|El libro lo dice]]'], correctAnswer: 1, explanation: '[[Because it is important|Porque es importante]].' },
  { question: '[[How|Cómo]] [[do|trabajan]] [[her|sus]] [[students|estudiantes]] [[work|trabajar]]?', options: ['[[Lazily|Perezosamente]]', '[[Hard|Duro]]', '[[Carelessly|Descuidadamente]]', '[[Slowly|Despacio]]'], correctAnswer: 1, explanation: '[[My students work hard|Mis estudiantes trabajan duro]].' },
  { question: '[[Do|¿]] [[her|sus]] [[students|estudiantes]] [[improve|mejoran]] [[quickly|rápidamente]]?', options: ['[[Yes|Sí]]', '[[No|No]]', '[[Sometimes|A veces]]', '[[Never|Nunca]]'], correctAnswer: 0, explanation: '[[They improve quickly|Mejoran rápidamente]].' },
  { question: '[[Does|¿]] [[Sarah|Sarah]] [[love|ama]] [[her|su]] [[job|trabajo]]?', options: ['[[Yes|Sí]]', '[[No|No]]', '[[Sometimes|A veces]]', '[[She did not say|No lo dijo]]'], correctAnswer: 0, explanation: '[[I love my job|Amo mi trabajo]].' },
  { question: '[[Does|¿]] [[she|ella]] [[ever|alguna vez]] [[speak|habla]] [[angrily|con enfado]] [[to|a]] [[students|estudiantes]]?', options: ['[[Yes, often|Sí, a menudo]]', '[[No, never|No, nunca]]', '[[Sometimes|A veces]]', '[[Only on Mondays|Solo los lunes]]'], correctAnswer: 1, explanation: '[[I never speak angrily to my students|Nunca hablo con enfado a mis estudiantes]].' },
  { question: '[[How|Cómo]] [[does|habla]] [[she|ella]] [[speak|hablar]] [[to|a]] [[students|estudiantes]]?', options: ['[[Patiently and kindly|Con paciencia y amablemente]]', '[[Loudly|En voz alta]]', '[[Quickly|Rápidamente]]', '[[Carelessly|Descuidadamente]]'], correctAnswer: 0, explanation: '[[I always speak patiently and kindly|Siempre hablo con paciencia y amablemente]].' },
  { question: '[[The|El]] [[main|principal]] [[topic|tema]] [[of|del]] [[audio|audio]] [[is|es]]?', options: ['[[A teacher who speaks clearly and works well|Una profesora que habla claro y trabaja bien]]', '[[School rules|Reglas escolares]]', '[[Student problems|Problemas de estudiantes]]', '[[Grammar lessons|Lecciones de gramática]]'], correctAnswer: 0, explanation: '[[The audio is about Sarah and how she teaches|El audio trata de Sarah y cómo enseña]].' },
  { question: '[[Sarah|Sarah]] [[sometimes|a veces]] [[gets|se pone]] [[tired|cansada]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'True', explanation: '[[True|Verdadero]]. [[Sometimes I get tired|A veces me pongo cansada]].' },
  { question: '[[Sarah|Sarah]] [[speaks|habla]] [[angrily|con enfado]] [[to|a]] [[students|estudiantes]] [[when|cuando]] [[she|ella]] [[is|está]] [[tired|cansada]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'False', explanation: '[[False|Falso]]. [[I never speak angrily|Nunca hablo con enfado]].' },
  { question: '[[Which|Cuál]] [[adverb|adverbio]] [[does|usa]] [[Sarah|Sarah]] [[NOT|NO]] [[use|usar]] [[to describe|para describir]] [[how|cómo]] [[she|ella]] [[speaks|habla]]?', options: ['[[Clearly|Claramente]]', '[[Slowly|Despacio]]', '[[Angrily|Con enfado]]', '[[Patiently|Con paciencia]]'], correctAnswer: 2, explanation: '[[She never speaks angrily|Nunca habla con enfado]].' },
  { question: '[[Sarah|Sarah]] [[tries|intenta]] [[to|]] [[do|hacer]] [[her job|su trabajo]] ____.', options: ['[[badly|mal]]', '[[well|bien]]', '[[quickly|rápido]]', '[[carelessly|descuidadamente]]'], correctAnswer: 1, explanation: '[[I try to do it well|Intento hacerlo bien]].' },
  { question: '[[The|Los]] [[students|estudiantes]] [[improve|mejoran]] ____.', options: ['[[slowly|lentamente]]', '[[quickly|rápidamente]]', '[[badly|mal]]', '[[never|nunca]]'], correctAnswer: 1, explanation: '[[They improve quickly|Mejoran rápidamente]].' },
];

export const UNIT_56_LESSON_4_LISTENING: Exercise[] = QUESTIONS.map((q, i) => ({
  id: `a2-u56-l4-l${i + 1}`,
  type: 'listening',
  level: 'A2',
  topic: 'Adverbs of Manner',
  difficulty: 'easy',
  transcript: LISTENING_TRANSCRIPT,
  content: { title: LESSON_TITLE, instructions: INSTRUCTIONS, questions: [q] },
  topicName: 'Listening',
}));
