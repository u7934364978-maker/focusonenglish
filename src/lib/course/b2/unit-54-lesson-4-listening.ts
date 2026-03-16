/**
 * Unidad 54 B2 — Lección 4: Comprensión auditiva (Urban Planning & Sustainable Cities)
 * 13 preguntas (B2: transcripción sobre planificación urbana, inversión)
 */

import { Exercise } from '@/lib/exercise-generator';

const LESSON_TITLE = '[[Listening|Comprensión auditiva]]';
const LISTENING_TRANSCRIPT = `[[Hi|Hola]], [[I\'m|soy]] [[Carlos|Carlos]] [[and|y]] [[I|yo]] [[work|trabajo]] [[as an urban planner|como planificador urbano]]. [[Rarely have we seen|Raramente hemos visto]] [[such commitment|tal compromiso]] [[to sustainability|a la sostenibilidad]]. [[Not only are green spaces essential|No solo son los espacios verdes esenciales]], [[but also|sino también]] [[affordable housing|vivienda asequible]]. [[Never have we had|Nunca hemos tenido]] [[so much support|tanto apoyo]] [[from residents|de los residentes]]. [[Only then did we understand|Solo entonces entendimos]] [[the importance|la importancia]] [[of urban planning|de la planificación urbana]]. [[Little did we know|Poco sabíamos]] [[about the impact|sobre el impacto]] [[of the new policy|de la nueva política]].`;

const INSTRUCTIONS = 'Escucha el audio (o lee la transcripción). Después responde las preguntas.';

const QUESTIONS = [
  { question: '[[Who is speaking|Quién habla]]?', options: ['[[Carlos, an urban planner|Carlos, planificador urbano]]', '[[A resident|Un residente]]', '[[A developer|Un promotor]]'], correctAnswer: 0, explanation: '[[The speaker says|El hablante dice]] "[[I\'m Carlos and I work as an urban planner|soy Carlos y trabajo como planificador urbano]]".' },
  { question: '[[What|Qué]] [[have we rarely seen|raramente hemos visto]]?', options: ['[[Such commitment to sustainability|Tal compromiso con la sostenibilidad]]', '[[Green spaces|Espacios verdes]]', '[[Affordable housing|Vivienda asequible]]'], correctAnswer: 0, explanation: '[[The speaker says|El hablante dice]] "[[Rarely have we seen such commitment to sustainability]]".' },
  { question: '[[What|Qué]] [[are essential according to "not only"|son esenciales según "not only"]]?', options: ['[[Green spaces and affordable housing|Espacios verdes y vivienda asequible]]', '[[Only green spaces|Solo espacios verdes]]', '[[Only housing|Solo vivienda]]'], correctAnswer: 0, explanation: '[[Not only... but also|No solo... sino también]].' },
  { question: '[[What|Qué]] [[have we never had|nunca hemos tenido]]?', options: ['[[So much support from residents|Tanto apoyo de los residentes]]', '[[Green spaces|Espacios verdes]]', '[[Funding|Financiación]]'], correctAnswer: 0, explanation: '[[The speaker says|El hablante dice]] "[[Never have we had so much support from residents]]".' },
  { question: '[[When|Cuándo]] [[did we understand|entendimos]] [[the importance of urban planning|la importancia de la planificación urbana]]?', options: ['[[Only then|Solo entonces]]', '[[Never|Nunca]]', '[[Always|Siempre]]'], correctAnswer: 0, explanation: '[[The speaker says|El hablante dice]] "[[Only then did we understand the importance of urban planning]]".' },
  { question: '[[What|Qué]] [[did we know little about|sabíamos poco sobre]]?', options: ['[[The impact of the new policy|El impacto de la nueva política]]', '[[Green spaces|Espacios verdes]]', '[[Residents|Los residentes]]'], correctAnswer: 0, explanation: '[[The speaker says|El hablante dice]] "[[Little did we know about the impact of the new policy]]".' },
  { question: '[[What|Cuál]] [[is|es]] [[the main idea|la idea principal]] [[of the listening|de la escucha]]?', options: ['[[Urban planning, sustainability and inversion|Planificación urbana, sostenibilidad e inversión]]', '[[Carlos is an urban planner|Carlos es planificador urbano]]', '[[Residents are difficult|Los residentes son difíciles]]'], correctAnswer: 0, explanation: '[[The speaker|El hablante]] [[describes urban planning with inversion|describe planificación urbana con inversión]].' },
  { question: '[[Which structure|Qué estructura]] [[is used in "Rarely have we seen"|se usa en "Rarely have we seen"]]?', options: ['[[Inversion after negative adverb|Inversión tras adverbio negativo]]', '[[Normal word order|Orden normal]]', '[[Question form|Forma interrogativa]]'], correctAnswer: 0, explanation: '[[Rarely + have + subject + past participle|Rarely + inversión]].' },
  { question: '[[What|Qué]] [[vocabulary|vocabulario]] [[is central|es central]] [[in this listening|en esta escucha]]?', options: ['[[sustainability|sostenibilidad]], [[green spaces|espacios verdes]], [[affordable housing|vivienda asequible]], [[residents|residentes]]', '[[education|educación]], [[music|música]]', '[[weather|tiempo]], [[food|comida]]'], correctAnswer: 0, explanation: '[[The listening|La escucha]] [[focuses on|se centra en]] [[urban vocabulary|vocabulario urbano]].' },
  { question: '[[What|Qué]] [[can we infer|podemos inferir]] [[about Carlos|sobre Carlos]]?', options: ['[[He values sustainability and resident input|Valora la sostenibilidad y la opinión de los residentes]]', '[[He ignores residents|Ignora a los residentes]]', '[[He only cares about green spaces|Solo le importan los espacios verdes]]'], correctAnswer: 0, explanation: '[[He|Él]] [[mentions sustainability, housing and resident support|menciona sostenibilidad, vivienda y apoyo de residentes]].' },
  { question: '[[Rarely|Raramente]] ____ ____ ____ [[such commitment|tal compromiso]].', options: ['[[have we seen|hemos visto]]', '[[we have seen|hemos visto]]'], correctAnswer: 0, explanation: '[[Inversion after Rarely|Inversión tras Rarely]].' },
  { question: '[[Only then|Solo entonces]] ____ ____ ____ [[the importance|la importancia]].', options: ['[[did we understand|entendimos]]', '[[we understood|entendimos]]'], correctAnswer: 0, explanation: '[[Inversion after Only then|Inversión tras Only then]].' },
];

export const UNIT_54_LESSON_4_LISTENING: Exercise[] = QUESTIONS.map((q, i) => ({
  id: `b2-u54-l4-l${i + 1}`,
  type: 'listening',
  level: 'B2',
  topic: 'urban-rural-life',
  difficulty: 'medium',
  transcript: LISTENING_TRANSCRIPT,
  content: { title: LESSON_TITLE, instructions: INSTRUCTIONS, questions: [q] },
  topicName: 'Listening',
}));
