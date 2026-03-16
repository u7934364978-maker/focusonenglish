/**
 * Unidad 43 B2 — Lección 3: Comprensión lectora (University Life & Academics)
 */

import { Exercise } from '@/lib/exercise-generator';

const LESSON_TITLE = '[[Reading|Comprensión lectora]]';
const READING_TRANSCRIPT = `[[Students|Los estudiantes]] [[must attend|deben asistir]] [[all lectures|a todas las clases]] [[— attendance is compulsory|la asistencia es obligatoria]]. [[You|Tú]] [[should speak|deberías hablar]] [[to your supervisor|con tu supervisor]] [[if you have problems|si tienes problemas]]. [[She|Ella]] [[has to submit|tiene que entregar]] [[her dissertation|su tesis]] [[by December|para diciembre]]. [[We|Nosotros]] [[don\'t have to|no tenemos que]] [[come|venir]] [[to campus on Fridays|al campus los viernes]] — [[we can work from home|podemos trabajar desde casa]]. [[You|Tú]] [[mustn\'t plagiarise|no debes plagiar]] — [[it\'s academic misconduct|es falta académica]]. [[He|Él]] [[needs to revise|necesita repasar]] [[for the exam|para el examen]] [[this weekend|este fin de semana]].`;

const INSTRUCTIONS = 'Lee el texto sobre vida universitaria. Después responde las preguntas.';

const QUESTIONS = [
  { question: '[[What|Qué]] [[must students do|deben hacer los estudiantes]]?', options: ['[[Attend all lectures — attendance is compulsory|Asistir a todas las clases, la asistencia es obligatoria]]', '[[Work from home|Trabajar desde casa]]', '[[Plagiarise|Plagiar]]'], correctAnswer: 0, explanation: '[[The text says|El texto dice]] "[[students must attend all lectures|los estudiantes deben asistir a todas las clases]]".' },
  { question: '[[What|Qué]] [[should you do|deberías hacer]] [[if you have problems|si tienes problemas]]?', options: ['[[Speak to your supervisor|Hablar con tu supervisor]]', '[[Plagiarise|Plagiar]]', '[[Skip lectures|Saltar clases]]'], correctAnswer: 0, explanation: '[[The text says|El texto dice]] "[[you should speak to your supervisor if you have problems|deberías hablar con tu supervisor si tienes problemas]]".' },
  { question: '[[What|Qué]] [[does she have to do|tiene que hacer ella]]?', options: ['[[Submit her dissertation by December|Entregar su tesis para diciembre]]', '[[Attend on Fridays|Asistir los viernes]]', '[[Work from home|Trabajar desde casa]]'], correctAnswer: 0, explanation: '[[The text says|El texto dice]] "[[she has to submit her dissertation by December|tiene que entregar su tesis para diciembre]]".' },
  { question: '[[What|Qué]] [[don\'t they have to do|no tienen que hacer]]?', options: ['[[Come to campus on Fridays — they can work from home|Ir al campus los viernes, pueden trabajar desde casa]]', '[[Submit the dissertation|Entregar la tesis]]', '[[Speak to the supervisor|Hablar con el supervisor]]'], correctAnswer: 0, explanation: '[[The text says|El texto dice]] "[[we don\'t have to come to campus on Fridays|no tenemos que ir al campus los viernes]]".' },
  { question: '[[What|Qué]] [[mustn\'t you do|no debes hacer]]?', options: ['[[Plagiarise — it\'s academic misconduct|Plagiar, es falta académica]]', '[[Attend lectures|Asistir a clases]]', '[[Speak to the supervisor|Hablar con el supervisor]]'], correctAnswer: 0, explanation: '[[The text says|El texto dice]] "[[you mustn\'t plagiarise|no debes plagiar]]".' },
  { question: '[[What|Qué]] [[does he need to do|necesita hacer él]]?', options: ['[[Revise for the exam this weekend|Repasar para el examen este fin de semana]]', '[[Submit the dissertation|Entregar la tesis]]', '[[Come to campus|Ir al campus]]'], correctAnswer: 0, explanation: '[[The text says|El texto dice]] "[[he needs to revise for the exam this weekend|necesita repasar para el examen este fin de semana]]".' },
  { question: '[[What|Cuál]] [[is|es]] [[the main idea|la idea principal]]?', options: ['[[University rules and modals of obligation|Reglas universitarias y modales de obligación]]', '[[Students never attend|Los estudiantes nunca asisten]]', '[[Plagiarism is allowed|El plagio está permitido]]'], correctAnswer: 0, explanation: '[[The text|El texto]] [[describes|describe]] [[university obligations|obligaciones universitarias]].' },
  { question: '[[Which modal|Qué modal]] [[expresses prohibition|expresa prohibición]]?', options: ['[[Mustn\'t|Mustn\'t]]', '[[Don\'t have to|Don\'t have to]]', '[[Should|Should]]'], correctAnswer: 0, explanation: '[[Mustn\'t = prohibition|Mustn\'t = prohibición]].' },
  { question: '[[What|Qué]] [[vocabulary|vocabulario]] [[is key|es clave]]?', options: ['[[attendance|asistencia]], [[dissertation|tesis]], [[supervisor|supervisor]], [[plagiarise|plagiar]]', '[[sport|deporte]], [[music|música]]', '[[weather|tiempo]], [[food|comida]]'], correctAnswer: 0, explanation: '[[The text|El texto]] [[focuses on|se centra en]] [[university vocabulary|vocabulario universitario]].' },
  { question: '[[Students|Los estudiantes]] ____ [[can skip lectures|pueden saltar clases]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 1, explanation: '[[False|Falso]]. [[Attendance is compulsory|La asistencia es obligatoria]].' },
  { question: '[[You|Tú]] ____ [[plagiarise|plagiar]].', options: ['[[mustn\'t|no debes]]', '[[don\'t have to|no tienes que]]'], correctAnswer: 0, explanation: '[[Mustn\'t = prohibition|Mustn\'t = prohibición]].' },
  { question: '[[What|Qué]] [[can we infer|podemos inferir]]?', options: ['[[University has clear rules and obligations|La universidad tiene reglas y obligaciones claras]]', '[[No one attends|Nadie asiste]]', '[[Plagiarism is fine|El plagio está bien]]'], correctAnswer: 0, explanation: '[[Must|Deben]], [[should|deberían]], [[have to|tienen que]], [[mustn\'t|no deben]] [[are used|se usan]].' },
];

export const UNIT_43_LESSON_3_READING: Exercise[] = QUESTIONS.map((q, i) => ({
  id: `b2-u43-l3-r${i + 1}`,
  type: 'reading',
  level: 'B2',
  topic: 'education-learning',
  difficulty: 'medium',
  transcript: READING_TRANSCRIPT,
  content: { title: LESSON_TITLE, instructions: INSTRUCTIONS, questions: [q] },
  topicName: 'Reading',
}));
