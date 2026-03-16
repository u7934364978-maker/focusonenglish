/**
 * Unidad 56 B2 — Lección 4: Comprensión auditiva (Digital Rights & Online Ethics)
 * 13 preguntas (B2: transcripción sobre derechos digitales, oraciones de relativo)
 */

import { Exercise } from '@/lib/exercise-generator';

const LESSON_TITLE = '[[Listening|Comprensión auditiva]]';
const LISTENING_TRANSCRIPT = `[[Hi|Hola]], [[I\'m|soy]] [[David|David]] [[and|y]] [[I|yo]] [[work|trabajo]] [[in digital ethics|en ética digital]]. [[Data that companies collect|Los datos que las empresas recogen]] [[should be protected|deberían estar protegidos]]. [[The law which we discussed yesterday|La ley que discutimos ayer]] [[protects privacy|protege la privacidad]]. [[The expert whose opinion we sought|El experto cuya opinión buscamos]] [[advised caution|aconsejó cautela]]. [[The moment when I received the request|El momento en que recibí la solicitud]] [[I knew something was wrong|supe que algo iba mal]]. [[The company which I work for|La empresa para la que trabajo]] [[values ethics|valora la ética]]. [[Cybersecurity on which we depend|La ciberseguridad de la que dependemos]] [[is essential|es esencial]].`;

const INSTRUCTIONS = 'Escucha el audio (o lee la transcripción). Después responde las preguntas.';

const QUESTIONS = [
  { question: '[[Who is speaking|Quién habla]]?', options: ['[[David, who works in digital ethics|David, que trabaja en ética digital]]', '[[A lawyer|Un abogado]]', '[[A hacker|Un hacker]]'], correctAnswer: 0, explanation: '[[The speaker says|El hablante dice]] "[[I\'m David and I work in digital ethics|soy David y trabajo en ética digital]]".' },
  { question: '[[What|Qué]] [[should be protected|debería estar protegido]]?', options: ['[[Data that companies collect|Los datos que las empresas recogen]]', '[[The law|La ley]]', '[[The company|La empresa]]'], correctAnswer: 0, explanation: '[[The speaker says|El hablante dice]] "[[Data that companies collect should be protected]]".' },
  { question: '[[What|Qué]] [[does the law protect|protege la ley]]?', options: ['[[Privacy|La privacidad]]', '[[Companies|Las empresas]]', '[[Data collection|La recopilación de datos]]'], correctAnswer: 0, explanation: '[[The speaker says|El hablante dice]] "[[The law which we discussed yesterday protects privacy]]".' },
  { question: '[[What|Qué]] [[did the expert advise|aconsejó el experto]]?', options: ['[[Caution|Cautela]]', '[[More data|Más datos]]', '[[Less encryption|Menos encriptación]]'], correctAnswer: 0, explanation: '[[The speaker says|El hablante dice]] "[[The expert whose opinion we sought advised caution]]".' },
  { question: '[[When|Cuándo]] [[did he know something was wrong|cuándo supo que algo iba mal]]?', options: ['[[When he received the request|Cuando recibió la solicitud]]', '[[Yesterday|Ayer]]', '[[Never|Nunca]]'], correctAnswer: 0, explanation: '[[The speaker says|El hablante dice]] "[[The moment when I received the request I knew something was wrong]]".' },
  { question: '[[What|Qué]] [[does the company value|valora la empresa]]?', options: ['[[Ethics|La ética]]', '[[Profit|El beneficio]]', '[[Data|Los datos]]'], correctAnswer: 0, explanation: '[[The speaker says|El hablante dice]] "[[The company which I work for values ethics]]".' },
  { question: '[[What|Qué]] [[is essential|es esencial]]?', options: ['[[Cybersecurity on which we depend|La ciberseguridad de la que dependemos]]', '[[The law|La ley]]', '[[The expert|El experto]]'], correctAnswer: 0, explanation: '[[The speaker says|El hablante dice]] "[[Cybersecurity on which we depend is essential]]".' },
  { question: '[[What|Cuál]] [[is|es]] [[the main idea|la idea principal]] [[of the listening|de la escucha]]?', options: ['[[Digital rights, privacy, ethics and relative clauses|Derechos digitales, privacidad, ética y oraciones de relativo]]', '[[David works in ethics|David trabaja en ética]]', '[[Laws are important|Las leyes son importantes]]'], correctAnswer: 0, explanation: '[[The speaker|El hablante]] [[describes digital ethics using relative clauses|describe ética digital usando oraciones de relativo]].' },
  { question: '[[Which structure|Qué estructura]] [[is used in "whose opinion we sought"|se usa en "whose opinion we sought"]]?', options: ['[[Whose for possession|Whose para posesión]]', '[[Which for things|Which para cosas]]', '[[Who for people|Who para personas]]'], correctAnswer: 0, explanation: '[[Whose = possession|Whose = posesión]].' },
  { question: '[[What|Qué]] [[vocabulary|vocabulario]] [[is central|es central]] [[in this listening|en esta escucha]]?', options: ['[[data|datos]], [[privacy|privacidad]], [[ethics|ética]], [[cybersecurity|ciberseguridad]]', '[[education|educación]], [[music|música]]', '[[weather|tiempo]], [[food|comida]]'], correctAnswer: 0, explanation: '[[The listening|La escucha]] [[focuses on|se centra en]] [[digital vocabulary|vocabulario digital]].' },
  { question: '[[What|Qué]] [[can we infer|podemos inferir]] [[about David|sobre David]]?', options: ['[[He cares about digital rights and ethics|Le importan los derechos digitales y la ética]]', '[[He works for a company that ignores ethics|Trabaja para una empresa que ignora la ética]]', '[[He collects data illegally|Recopila datos ilegalmente]]'], correctAnswer: 0, explanation: '[[He|Él]] [[works in digital ethics and describes protection|trabaja en ética digital y describe protección]].' },
  { question: '[[The law|La ley]] ____ ____ ____ ____ [[protects privacy|protege la privacidad]].', options: ['[[which we discussed yesterday|que discutimos ayer]]', '[[who we discussed|quien discutimos]]'], correctAnswer: 0, explanation: '[[Which for things (law)|Which para cosas (ley)]].' },
  { question: '[[Cybersecurity|La ciberseguridad]] ____ ____ ____ ____ [[is essential|es esencial]].', options: ['[[on which we depend|de la que dependemos]]', '[[which we depend|que dependemos]]'], correctAnswer: 0, explanation: '[[Preposition + which|Preposición + which]].' },
];

export const UNIT_56_LESSON_4_LISTENING: Exercise[] = QUESTIONS.map((q, i) => ({
  id: `b2-u56-l4-l${i + 1}`,
  type: 'listening',
  level: 'B2',
  topic: 'technology-society',
  difficulty: 'medium',
  transcript: LISTENING_TRANSCRIPT,
  content: { title: LESSON_TITLE, instructions: INSTRUCTIONS, questions: [q] },
  topicName: 'Listening',
}));
