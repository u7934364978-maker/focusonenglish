/**
 * Unidad 60 — Lección 3: Comprensión lectora (Final A2 Review)
 * 15 actividades: 1 texto sobre completar el curso A2 + 15 preguntas
 */

import { Exercise } from '@/lib/exercise-generator';

const LESSON_TITLE = '[[Reading|Comprensión lectora]]';
const READING_TRANSCRIPT = `[[My|Mi]] [[name|nombre]] [[is|es]] [[Maria|María]]. [[I|Yo]] [[have|he]] [[just|acabo de]] [[completed|completado]] [[the|el]] [[A2|A2]] [[English|inglés]] [[course|curso]]. [[It was|Fue]] [[a|un]] [[long|largo]] [[journey|viaje]] [[but|pero]] [[I|yo]] [[am|estoy]] [[very|muy]] [[proud|orgullosa]] [[of|de]] [[my|mi]] [[achievement|logro]]. [[I|Yo]] [[started|empecé]] [[studying|estudiando]] [[English|inglés]] [[two|dos]] [[years|años]] [[ago|atrás]] [[and|y]] [[I|yo]] [[have|he]] [[made|hecho]] [[a lot of|mucho]] [[progress|progreso]]. [[Last|La]] [[week|semana pasada]] [[I|yo]] [[received|recibí]] [[my|mi]] [[certificate|certificado]] [[and|y]] [[I|yo]] [[felt|me sentí]] [[very|muy]] [[happy|feliz]]. [[My|Mi]] [[teacher|profesor]] [[said|dijo]] "[[Congratulations|Felicitaciones]]!" [[and|y]] [[told|me dijo]] [[me|me]] [[that|que]] [[I|yo]] [[had|había]] [[great|gran]] [[success|éxito]]. [[Now|Ahora]] [[I|yo]] [[am|estoy]] [[going to|voy a]] [[continue|continuar]] [[studying|estudiando]] [[for|para]] [[the|el]] [[B1|B1]] [[level|nivel]]. [[I|Yo]] [[want|quiero]] [[to|]] [[improve|mejorar]] [[my|mi]] [[English|inglés]] [[even|aún]] [[more|más]].`;

const INSTRUCTIONS = 'Lee el texto de abajo. Después responde las preguntas.';

const QUESTIONS = [
  { question: '[[What|Qué]] [[is|es]] [[Maria\'s|de María]] [[name|nombre]]?', options: ['[[Tom|Tom]]', '[[Maria|María]]', '[[Sarah|Sarah]]', '[[John|John]]'], correctAnswer: 1, explanation: '[[My name is Maria|Mi nombre es María]].' },
  { question: '[[What|Qué]] [[has|ha]] [[Maria|María]] [[just|acabo de]] [[completed|completado]]?', options: ['[[B1 course|Curso B1]]', '[[A2 course|Curso A2]]', '[[A1 course|Curso A1]]', '[[C1 course|Curso C1]]'], correctAnswer: 1, explanation: '[[I have just completed the A2 English course|Acabo de completar el curso de inglés A2]].' },
  { question: '[[How|Cómo]] [[does|se siente]] [[Maria|María]] [[feel|sentir]] [[about|sobre]] [[her achievement|su logro]]?', options: ['[[Sad|Triste]]', '[[Angry|Enfadada]]', '[[Proud|Orgullosa]]', '[[Tired|Cansada]]'], correctAnswer: 2, explanation: '[[I am very proud of my achievement|Estoy muy orgullosa de mi logro]].' },
  { question: '[[When|Cuándo]] [[did|empezó]] [[Maria|María]] [[start|empezar]] [[studying|estudiando]] [[English|inglés]]?', options: ['[[One year ago|Hace un año]]', '[[Two years ago|Hace dos años]]', '[[Three years ago|Hace tres años]]', '[[Last month|El mes pasado]]'], correctAnswer: 1, explanation: '[[I started studying English two years ago|Empecé a estudiar inglés hace dos años]].' },
  { question: '[[What|Qué]] [[did|recibió]] [[Maria|María]] [[receive|recibir]] [[last week|la semana pasada]]?', options: ['[[A book|Un libro]]', '[[Her certificate|Su certificado]]', '[[A pen|Un bolígrafo]]', '[[A computer|Un ordenador]]'], correctAnswer: 1, explanation: '[[Last week I received my certificate|La semana pasada recibí mi certificado]].' },
  { question: '[[What|Qué]] [[did|dijo]] [[her teacher|su profesor]] [[say|decir]]?', options: ['[[Goodbye|Adiós]]', '[[Sorry|Lo siento]]', '[[Congratulations|Felicitaciones]]', '[[Please|Por favor]]'], correctAnswer: 2, explanation: '[[My teacher said "Congratulations!"|Mi profesor dijo "¡Felicitaciones!"]].' },
  { question: '[[What|Qué]] [[is|es]] [[Maria|María]] [[going to|va a]] [[do|hacer]] [[next|próximo]]?', options: ['[[Stop studying|Dejar de estudiar]]', '[[Continue for B1 level|Continuar para nivel B1]]', '[[Travel|Viajar]]', '[[Work|Trabajar]]'], correctAnswer: 1, explanation: '[[I am going to continue studying for the B1 level|Voy a continuar estudiando para el nivel B1]].' },
  { question: '[[Maria|María]] [[has|ha]] [[made|hecho]] [[a lot of|mucho]] [[progress|progreso]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'True', explanation: '[[True|Verdadero]]. [[I have made a lot of progress|He hecho mucho progreso]].' },
  { question: '[[Maria|María]] [[felt|se sintió]] [[sad|triste]] [[when|cuando]] [[she|ella]] [[received|recibió]] [[her certificate|su certificado]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'False', explanation: '[[False|Falso]]. [[She felt very happy|Se sintió muy feliz]].' },
  { question: '[[Maria|María]] [[wants|quiere]] [[to|]] [[improve|mejorar]] [[her English|su inglés]] [[more|más]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'True', explanation: '[[True|Verdadero]]. [[I want to improve my English even more|Quiero mejorar mi inglés aún más]].' },
  { question: '[[The|El]] [[main|principal]] [[topic|tema]] [[of|del]] [[text|texto]] [[is|es]]?', options: ['[[A student who completed the A2 course|Una estudiante que completó el curso A2]]', '[[English grammar|Gramática inglesa]]', '[[School rules|Reglas escolares]]', '[[Travel plans|Planes de viaje]]'], correctAnswer: 0, explanation: '[[The text is about Maria completing the A2 course|El texto trata de María completando el curso A2]].' },
  { question: '[[Which|Cuál]] [[word|palabra]] [[is|se]] [[NOT|NO]] [[mentioned|mencionado]] [[in|en]] [[the|el]] [[text|texto]]?', options: ['[[Success|Éxito]]', '[[Certificate|Certificado]]', '[[Congratulations|Felicitaciones]]', '[[Failure|Fracaso]]'], correctAnswer: 3, explanation: '[[Failure|Fracaso]] [[is not in the text|no está en el texto]].' },
  { question: '[[Maria|María]] [[received|recibió]] [[her certificate|su certificado]] ____.', options: ['[[last week|la semana pasada]]', '[[last month|el mes pasado]]', '[[yesterday|ayer]]', '[[today|hoy]]'], correctAnswer: 0, explanation: '[[Last week I received my certificate|La semana pasada recibí mi certificado]].' },
  { question: '[[The teacher said Maria had|El profesor dijo que María tenía]] ____ ____.', options: ['[[great success|gran éxito]]', '[[no progress|sin progreso]]', '[[many problems|muchos problemas]]', '[[little time|poco tiempo]]'], correctAnswer: 0, explanation: '[[My teacher told me that I had great success|Mi profesor me dijo que tuve gran éxito]].' },
  { question: '[[Maria|María]] [[wants|quiere]] [[to|]] ____ ____ [[English|inglés]].', options: ['[[improve her|mejorar su]]', '[[forget her|olvidar su]]', '[[stop studying|dejar de estudiar]]', '[[teach|enseñar]]'], correctAnswer: 0, explanation: '[[I want to improve my English even more|Quiero mejorar mi inglés aún más]].' },
];

export const UNIT_60_LESSON_3_READING: Exercise[] = QUESTIONS.map((q, i) => ({
  id: `a2-u60-l3-r${i + 1}`,
  type: 'reading',
  level: 'A2',
  topic: 'Final A2 Review',
  difficulty: 'easy',
  transcript: READING_TRANSCRIPT,
  content: { title: LESSON_TITLE, instructions: INSTRUCTIONS, questions: [q] },
  topicName: 'Reading',
}));
