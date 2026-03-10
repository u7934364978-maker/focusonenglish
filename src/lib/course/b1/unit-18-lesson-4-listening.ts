/**
 * Unidad 18 B1 — Lección 4: Comprensión auditiva (Reported speech, communication)
 */

import { Exercise } from '@/lib/exercise-generator';

const LESSON_TITLE = '[[Listening|Comprensión auditiva]]';
const LISTENING_TRANSCRIPT = `[[Hi|Hola]], [[I'm|estoy]] [[just|acabo de]] [[calling|llamar]] [[to tell you|para decirte]] [[what|lo que]] [[Sarah said|Sarah dijo]]. [[She told me that she|Ella me dijo que ella]] [[had sent|había enviado]] [[the email|el email]] [[yesterday morning|ayer por la mañana]] [[but|pero]] [[hadn't received|no había recibido]] [[a reply|una respuesta]] [[yet|aún]]. [[She said that she|Ella dijo que ella]] [[was waiting|estaba esperando]] [[for your message|tu mensaje]] [[and|y]] [[would call|llamaría]] [[you|te]] [[later|más tarde]] [[if|si]] [[she|ella]] [[didn't hear|no oía]] [[from you|de ti]]. [[He told me that the meeting|Él me dijo que la reunión]] [[had been postponed|había sido pospuesta]] [[to next week|para la semana que viene]].`;

const INSTRUCTIONS = 'Escucha el audio. Puedes leer la transcripción. Después responde las preguntas.';

const QUESTIONS = [
  { question: '[[What|Qué]] [[is the person calling to do|está llamando la persona para hacer]]?', options: ['[[to ask for money|para pedir dinero]]', '[[to tell what Sarah said|para decir lo que Sarah dijo]]', '[[to cancel a meeting|para cancelar una reunión]]'], correctAnswer: 1, explanation: '[[The speaker says|El hablante dice]] "[[to tell you what Sarah said|para decirte lo que Sarah dijo]]".' },
  { question: '[[What|Qué]] [[had Sarah sent|había enviado Sarah]]?', options: ['[[a text|un mensaje de texto]]', '[[the email|el email]]', '[[a letter|una carta]]'], correctAnswer: 1, explanation: '[[The speaker says|El hablante dice]] "[[had sent the email yesterday morning|había enviado el email ayer por la mañana]]".' },
  { question: '[[Had she received|Había recibido ella]] [[a reply|una respuesta]]?', options: ['[[yes|sí]]', '[[no|no]]', '[[she didn\'t say|no lo dijo]]'], correctAnswer: 1, explanation: '[[The speaker says|El hablante dice]] "[[hadn\'t received a reply yet|no había recibido una respuesta aún]]".' },
  { question: '[[What|Qué]] [[would Sarah do|haría Sarah]] [[if she didn\'t hear from you|si no oía de ti]]?', options: ['[[send another email|enviar otro email]]', '[[call you later|llamarte más tarde]]', '[[cancel the meeting|cancelar la reunión]]'], correctAnswer: 1, explanation: '[[The speaker says|El hablante dice]] "[[would call you later if she didn\'t hear from you|llamaría más tarde si no oía de ti]]".' },
  { question: '[[What|Qué]] [[had happened|había pasado]] [[to the meeting|con la reunión]]?', options: ['[[it was cancelled|fue cancelada]]', '[[it had been postponed to next week|había sido pospuesta para la semana que viene]]', '[[it was tomorrow|era mañana]]'], correctAnswer: 1, explanation: '[[The speaker says|El hablante dice]] "[[had been postponed to next week|había sido pospuesta para la semana que viene]]".' },
  { question: '[[Sarah|Sarah]] [[said that she|dijo que ella]] [[was waiting|estaba esperando]] [[for your message|tu mensaje]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'True', explanation: '[[True|Verdadero]]. [[The speaker says|El hablante dice]] "[[was waiting for your message|estaba esperando tu mensaje]]".' },
  { question: '[[Sarah|Sarah]] [[had sent|había enviado]] [[the email|el email]] [[yesterday afternoon|ayer por la tarde]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'False', explanation: '[[False|Falso]]. [[Yesterday morning|Ayer por la mañana]].' },
  { question: '[[What|Qué]] [[backshift|cambio de tiempo]] [[is used|se usa]] [[for "had sent"|para "had sent"]]?', options: ['[[present → past|presente → pasado]]', '[[past → past perfect|pasado → pasado perfecto]]', '[[present perfect → past perfect|presente perfecto → pasado perfecto]]'], correctAnswer: 2, explanation: '[[Present perfect|Presente perfecto]] "[[has sent|ha enviado]]" [[→ past perfect|→ pasado perfecto]] "[[had sent|había enviado]]".' },
  { question: '[[The text|El texto]] [[uses|usa]] [[reported speech|estilo indirecto]] [[throughout|a lo largo]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'True', explanation: '[[True|Verdadero]]. [[Examples|Ejemplos]]: [[She told me that|ella me dijo que]], [[She said that|ella dijo que]].' },
  { question: '[[The meeting|La reunión]] [[was|fue]] [[cancelled|cancelada]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'False', explanation: '[[False|Falso]]. [[Postponed|Pospuesta]] [[to next week|para la semana que viene]].' },
  { question: '[[Which verb|Qué verbo]] [[is used|se usa]] [[when mentioning "me"|cuando se menciona "me"]]?', options: ['[[said|dijo]]', '[[told|dijo]]', '[[spoke|habló]]'], correctAnswer: 1, explanation: '[[Told me that|Me dijo que]] [[requires object|requiere objeto]].' },
  { question: '[[Sarah|Sarah]] [[would call|llamaría]] [[later|más tarde]] [[if|si]] ____.', options: ['[[she was busy|estaba ocupada]]', '[[she didn\'t hear from you|no oía de ti]]', '[[the meeting was cancelled|la reunión fue cancelada]]'], correctAnswer: 1, explanation: '[[The speaker says|El hablante dice]] "[[if she didn\'t hear from you|si no oía de ti]]".' },
  { question: '[[The main topic|El tema principal]] [[is|es]] [[passing on messages|transmitir mensajes]] [[using reported speech|usando estilo indirecto]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'True', explanation: '[[True|Verdadero]]. [[The listening|La escucha]] [[is about|trata de]] [[reporting what others said|reportar lo que otros dijeron]].' },
  { question: '[[What|Qué]] [[tense|tiempo]] [[is "was waiting"|es "was waiting"]]?', options: ['[[present continuous|presente continuo]]', '[[past continuous|pasado continuo]]', '[[past perfect|pasado perfecto]]'], correctAnswer: 1, explanation: '[[Past continuous|Pasado continuo]] [[from "am waiting"|de "estoy esperando"]] [[in reported speech|en estilo indirecto]].' },
  { question: '[[What|Qué]] [[communication vocabulary|vocabulario de comunicación]] [[appears|aparece]] [[in the listening|en la escucha]]?', options: ['[[email, reply, message, meeting|email, respuesta, mensaje, reunión]]', '[[food, weather|comida, tiempo]]', '[[music, art|música, arte]]'], correctAnswer: 0, explanation: '[[The listening|La escucha]] [[mentions|menciona]] [[email|email]], [[reply|respuesta]], [[message|mensaje]], [[meeting|reunión]].' },
];

export const UNIT_18_LESSON_4_LISTENING: Exercise[] = QUESTIONS.map((q, i) => ({
  id: `b1-u18-l4-l${i + 1}`,
  type: 'listening',
  level: 'B1',
  topic: 'Communication',
  difficulty: 'easy',
  transcript: LISTENING_TRANSCRIPT,
  content: { title: LESSON_TITLE, instructions: INSTRUCTIONS, questions: [q] },
  topicName: 'Listening',
}));
