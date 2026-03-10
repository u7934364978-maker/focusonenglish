/**
 * Unidad 34 B1 — Lección 4: Comprensión auditiva (-ed/-ing adjectives, Personal feelings)
 * 15 actividades
 */

import { Exercise } from '@/lib/exercise-generator';

const LESSON_TITLE = '[[Listening|Comprensión auditiva]]';
const LISTENING_TRANSCRIPT = `[[I|Yo]] [[was|estaba]] [[really|muy]] [[nervous|nervioso]] [[before|antes de]] [[my|mi]] [[exam|examen]] [[yesterday|ayer]]. [[The exam|El examen]] [[was|era]] [[quite|bastante]] [[difficult|difícil]] [[and|y]] [[some|algunas]] [[questions|preguntas]] [[were|eran]] [[confusing|confusas]]. [[I|Yo]] [[felt|me sentí]] [[relieved|aliviado]] [[when|cuando]] [[it|él]] [[finished|terminó]]. [[My|Mi]] [[friend|amigo]] [[was|estaba]] [[disappointed|decepcionado]] [[because|porque]] [[he|él]] [[didn\'t|no]] [[pass|aprobó]]. [[The results|Los resultados]] [[will be|serán]] [[announced|anunciados]] [[next week|la próxima semana]]. [[I|Yo]] [[am|estoy]] [[excited|emocionado]] [[and|y]] [[a bit|un poco]] [[worried|preocupado]] [[at the same time|al mismo tiempo]]. [[It\'s|Es]] [[an|una]] [[exciting|emocionante]] [[but|pero]] [[stressful|estresante]] [[situation|situación]].`;

const INSTRUCTIONS = 'Escucha el audio. Puedes leer la transcripción. Después responde las preguntas.';

const QUESTIONS = [
  { question: '[[What|Qué]] [[was the person nervous about|estaba nerviosa la persona]]?', options: ['[[a trip|un viaje]]', '[[an exam|un examen]]', '[[a job|un trabajo]]'], correctAnswer: 1, explanation: '[[They say|Dice]] "[[I was really nervous before my exam yesterday|estaba muy nervioso antes de mi examen ayer]]".' },
  { question: '[[What|Qué]] [[was the exam like|era el examen]]?', options: ['[[easy|fácil]]', '[[quite difficult|bastante difícil]]', '[[boring|aburrido]]'], correctAnswer: 1, explanation: '[[They say|Dice]] "[[The exam was quite difficult|el examen era bastante difícil]]".' },
  { question: '[[What|Qué]] [[were some questions like|eran algunas preguntas]]?', options: ['[[clear|claras]]', '[[confusing|confusas]]', '[[easy|fáciles]]'], correctAnswer: 1, explanation: '[[They say|Dice]] "[[some questions were confusing|algunas preguntas eran confusas]]".' },
  { question: '[[How|Cómo]] [[did they feel when it finished|se sintieron cuando terminó]]?', options: ['[[disappointed|decepcionados]]', '[[relieved|aliviados]]', '[[worried|preocupados]]'], correctAnswer: 1, explanation: '[[They say|Dice]] "[[I felt relieved when it finished|me sentí aliviado cuando terminó]]".' },
  { question: '[[Why|Por qué]] [[was their friend disappointed|estaba decepcionado su amigo]]?', options: ['[[because he didn\'t pass|porque no aprobó]]', '[[because he was late|porque llegó tarde]]', '[[because the exam was easy|porque el examen era fácil]]'], correctAnswer: 0, explanation: '[[They say|Dice]] "[[My friend was disappointed because he didn\'t pass|mi amigo estaba decepcionado porque no aprobó]]".' },
  { question: '[[When|Cuándo]] [[will the results be announced|se anunciarán los resultados]]?', options: ['[[today|hoy]]', '[[tomorrow|mañana]]', '[[next week|la próxima semana]]'], correctAnswer: 2, explanation: '[[They say|Dice]] "[[The results will be announced next week|los resultados se anunciarán la próxima semana]]".' },
  { question: '[[How|Cómo]] [[do they feel about the results|se sienten sobre los resultados]]?', options: ['[[only worried|solo preocupados]]', '[[excited and a bit worried|emocionados y un poco preocupados]]', '[[bored|aburridos]]'], correctAnswer: 1, explanation: '[[They say|Dice]] "[[I am excited and a bit worried at the same time|estoy emocionado y un poco preocupado al mismo tiempo]]".' },
  { question: '[[The person|La persona]] [[was|estaba]] [[nervous|nervioso]] [[before the exam|antes del examen]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'True', explanation: '[[True|Verdadero]]. [[The text says|El texto dice]] "[[I was really nervous before my exam|estaba muy nervioso antes de mi examen]]".' },
  { question: '[[The friend|El amigo]] [[passed|aprobó]] [[the exam|el examen]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'False', explanation: '[[False|Falso]]. [[He didn\'t pass|No aprobó]].' },
  { question: '[[What|Cuál]] [[is|es]] [[the main topic|el tema principal]] [[of|del]] [[this listening|esta escucha]]?', options: ['[[Travel|Viajes]]', '[[Exam and feelings|Examen y sentimientos]]', '[[Food|Comida]]'], correctAnswer: 1, explanation: '[[The listening|La escucha]] [[describes|describe]] [[feelings about an exam|sentimientos sobre un examen]].' },
  { question: '[[The situation|La situación]] [[is|es]] [[exciting but stressful|emocionante pero estresante]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'True', explanation: '[[True|Verdadero]]. [[The text says|El texto dice]] "[[It\'s an exciting but stressful situation|es una situación emocionante pero estresante]]".' },
  { question: '[[Which -ed adjective|Qué adjetivo -ed]] [[describes how they felt when it finished|describe cómo se sintieron cuando terminó]]?', options: ['[[relieved|aliviado]]', '[[confusing|confuso]]', '[[exciting|emocionante]]'], correctAnswer: 0, explanation: '[[Relieved|Aliviado]] = [[how they felt|cómo se sintieron]].' },
  { question: '[[The exam|El examen]] [[was|era]] [[yesterday|ayer]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'True', explanation: '[[True|Verdadero]]. [[The text says|El texto dice]] "[[my exam yesterday|mi examen ayer]]".' },
  { question: '[[They|Ellos]] [[feel|se sienten]] [[only excited|solo emocionados]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'False', explanation: '[[False|Falso]]. [[They feel excited and a bit worried|Se sienten emocionados y un poco preocupados]].' },
  { question: '[[The friend|El amigo]] [[was|estaba]] [[disappointed|decepcionado]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'True', explanation: '[[True|Verdadero]]. [[The text says|El texto dice]] "[[My friend was disappointed|mi amigo estaba decepcionado]]".' },
];

export const UNIT_34_LESSON_4_LISTENING: Exercise[] = QUESTIONS.map((q, i) => ({
  id: `b1-u34-l4-l${i + 1}`,
  type: 'listening',
  level: 'B1',
  topic: 'Personal Feelings',
  difficulty: 'easy',
  transcript: LISTENING_TRANSCRIPT,
  content: { title: LESSON_TITLE, instructions: INSTRUCTIONS, questions: [q] },
  topicName: 'Listening',
}));
