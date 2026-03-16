/**
 * Unidad 43 B2 — Lección 4: Comprensión auditiva (University Life & Academics)
 */

import { Exercise } from '@/lib/exercise-generator';

const LESSON_TITLE = '[[Listening|Comprensión auditiva]]';
const LISTENING_TRANSCRIPT = `[[Hi|Hola]], [[I'm|soy]] [[Professor Lee|Profesor Lee]] [[and|y]] [[I|yo]] [[teach|enseño]] [[at the university|en la universidad]]. [[Students|Los estudiantes]] [[must submit|deben entregar]] [[their assignments|sus tareas]] [[on time|a tiempo]]. [[You|Tú]] [[should attend|deberías asistir]] [[all seminars|a todos los seminarios]] — [[they\'re very useful|son muy útiles]]. [[She|Ella]] [[has to finish|tiene que terminar]] [[her dissertation|su tesis]] [[this year|este año]]. [[We|Nosotros]] [[don\'t have to|no tenemos que]] [[wear|llevar]] [[formal clothes|ropa formal]] [[to lectures|a las clases]]. [[You|Tú]] [[mustn\'t cheat|no debes hacer trampa]] [[in exams|en exámenes]]. [[He|Él]] [[needs to speak|necesita hablar]] [[to his supervisor|con su supervisor]] [[about the project|sobre el proyecto]].`;

const INSTRUCTIONS = 'Escucha el audio (o lee la transcripción). Después responde las preguntas.';

const QUESTIONS = [
  { question: '[[Who is speaking|Quién habla]]?', options: ['[[Professor Lee, who teaches at the university|Profesor Lee, que enseña en la universidad]]', '[[A student|Un estudiante]]', '[[A parent|Un padre]]'], correctAnswer: 0, explanation: '[[The speaker says|El hablante dice]] "[[I\'m Professor Lee and I teach at the university|soy Profesor Lee y enseño en la universidad]]".' },
  { question: '[[What|Qué]] [[must students do|deben hacer los estudiantes]]?', options: ['[[Submit their assignments on time|Entregar sus tareas a tiempo]]', '[[Wear formal clothes|Llevar ropa formal]]', '[[Cheat in exams|Hacer trampa en exámenes]]'], correctAnswer: 0, explanation: '[[The speaker says|El hablante dice]] "[[students must submit their assignments on time|los estudiantes deben entregar sus tareas a tiempo]]".' },
  { question: '[[What|Qué]] [[should you do|deberías hacer]]?', options: ['[[Attend all seminars — they\'re very useful|Asistir a todos los seminarios, son muy útiles]]', '[[Skip seminars|Saltar seminarios]]', '[[Cheat|Hacer trampa]]'], correctAnswer: 0, explanation: '[[The speaker says|El hablante dice]] "[[you should attend all seminars|deberías asistir a todos los seminarios]]".' },
  { question: '[[What|Qué]] [[does she have to do|tiene que hacer ella]]?', options: ['[[Finish her dissertation this year|Terminar su tesis este año]]', '[[Wear formal clothes|Llevar ropa formal]]', '[[Cheat|Hacer trampa]]'], correctAnswer: 0, explanation: '[[The speaker says|El hablante dice]] "[[she has to finish her dissertation this year|tiene que terminar su tesis este año]]".' },
  { question: '[[What|Qué]] [[don\'t they have to do|no tienen que hacer]]?', options: ['[[Wear formal clothes to lectures|Llevar ropa formal a las clases]]', '[[Submit assignments|Entregar tareas]]', '[[Attend seminars|Asistir a seminarios]]'], correctAnswer: 0, explanation: '[[The speaker says|El hablante dice]] "[[we don\'t have to wear formal clothes to lectures|no tenemos que llevar ropa formal a las clases]]".' },
  { question: '[[What|Qué]] [[mustn\'t you do|no debes hacer]]?', options: ['[[Cheat in exams|Hacer trampa en exámenes]]', '[[Attend seminars|Asistir a seminarios]]', '[[Submit assignments|Entregar tareas]]'], correctAnswer: 0, explanation: '[[The speaker says|El hablante dice]] "[[you mustn\'t cheat in exams|no debes hacer trampa en exámenes]]".' },
  { question: '[[What|Qué]] [[does he need to do|necesita hacer él]]?', options: ['[[Speak to his supervisor about the project|Hablar con su supervisor sobre el proyecto]]', '[[Wear formal clothes|Llevar ropa formal]]', '[[Cheat|Hacer trampa]]'], correctAnswer: 0, explanation: '[[The speaker says|El hablante dice]] "[[he needs to speak to his supervisor about the project|necesita hablar con su supervisor sobre el proyecto]]".' },
  { question: '[[What|Cuál]] [[is|es]] [[the main idea|la idea principal]]?', options: ['[[University rules and modals of obligation|Reglas universitarias y modales de obligación]]', '[[Formal clothes are required|La ropa formal es obligatoria]]', '[[Cheating is allowed|Hacer trampa está permitido]]'], correctAnswer: 0, explanation: '[[The speaker|El hablante]] [[describes|describe]] [[university obligations|obligaciones universitarias]].' },
  { question: '[[Which modal|Qué modal]] [[expresses no obligation|expresa no obligación]]?', options: ['[[Don\'t have to|Don\'t have to]]', '[[Mustn\'t|Mustn\'t]]', '[[Should|Should]]'], correctAnswer: 0, explanation: '[[Don\'t have to = no obligation|Don\'t have to = no obligación]].' },
  { question: '[[What|Qué]] [[vocabulary|vocabulario]] [[is central|es central]]?', options: ['[[assignments|tareas]], [[seminars|seminarios]], [[dissertation|tesis]], [[supervisor|supervisor]]', '[[sport|deporte]], [[music|música]]', '[[weather|tiempo]], [[food|comida]]'], correctAnswer: 0, explanation: '[[The listening|La escucha]] [[focuses on|se centra en]] [[university vocabulary|vocabulario universitario]].' },
  { question: '[[What|Qué]] [[can we infer|podemos inferir]] [[about Professor Lee|sobre el Profesor Lee]]?', options: ['[[He explains university rules clearly|Explica las reglas universitarias claramente]]', '[[He allows cheating|Permite hacer trampa]]', '[[He doesn\'t care about assignments|No le importan las tareas]]'], correctAnswer: 0, explanation: '[[He|Él]] [[explains must, should, have to, mustn\'t|explica must, should, have to, mustn\'t]].' },
  { question: '[[You|Tú]] ____ [[cheat|hacer trampa]] [[in exams|en exámenes]].', options: ['[[mustn\'t|no debes]]', '[[don\'t have to|no tienes que]]'], correctAnswer: 0, explanation: '[[Mustn\'t = prohibition|Mustn\'t = prohibición]].' },
  { question: '[[Don\'t have to|Don\'t have to]] [[means|significa]] ____.', options: ['[[No obligation|No obligación]]', '[[Prohibition|Prohibición]]'], correctAnswer: 0, explanation: '[[Don\'t have to = no obligation|Don\'t have to = no obligación]].' },
];

export const UNIT_43_LESSON_4_LISTENING: Exercise[] = QUESTIONS.map((q, i) => ({
  id: `b2-u43-l4-l${i + 1}`,
  type: 'listening',
  level: 'B2',
  topic: 'education-learning',
  difficulty: 'medium',
  transcript: LISTENING_TRANSCRIPT,
  content: { title: LESSON_TITLE, instructions: INSTRUCTIONS, questions: [q] },
  topicName: 'Listening',
}));
