/**
 * Unidad 54 B2 — Lección 3: Comprensión lectora (Urban Planning & Sustainable Cities)
 * 13 preguntas (B2: texto sobre planificación urbana, inversión)
 */

import { Exercise } from '@/lib/exercise-generator';

const LESSON_TITLE = '[[Reading|Comprensión lectora]]';
const READING_TRANSCRIPT = `[[Rarely have we seen|Raramente hemos visto]] [[such sustainable cities|ciudades tan sostenibles]] [[before|antes]]. [[Not only does the city need|No solo necesita la ciudad]] [[green spaces|espacios verdes]], [[but also|sino también]] [[improved public transport|mejor transporte público]]. [[Never have we seen|Nunca hemos visto]] [[so much investment|tanta inversión]] [[in urban infrastructure|en infraestructura urbana]]. [[Only when the project is completed|Solo cuando el proyecto esté completado]] [[can we evaluate it|podemos evaluarlo]]. [[Under no circumstances should we approve|Bajo ninguna circunstancia deberíamos aprobar]] [[that development|ese desarrollo]] [[without consulting residents|sin consultar a los residentes]]. [[So important is sustainability|Tan importante es la sostenibilidad]] [[that we must act now|que debemos actuar ahora]].`;

const INSTRUCTIONS = 'Lee el texto sobre planificación urbana. Después responde las preguntas.';

const QUESTIONS = [
  { question: '[[What|Qué]] [[does the writer say about sustainable cities|dice el escritor sobre ciudades sostenibles]]?', options: ['[[Rarely have we seen such sustainable cities before|Raramente hemos visto ciudades tan sostenibles antes]]', '[[We see them every day|Las vemos cada día]]', '[[They are common|Son comunes]]'], correctAnswer: 0, explanation: '[[The text says|El texto dice]] "[[Rarely have we seen such sustainable cities before|raramente hemos visto ciudades tan sostenibles antes]]".' },
  { question: '[[What|Qué]] [[does the city need|necesita la ciudad]] [[according to "not only"|según "not only"]]?', options: ['[[Green spaces and improved public transport|Espacios verdes y mejor transporte público]]', '[[Only green spaces|Solo espacios verdes]]', '[[Only public transport|Solo transporte público]]'], correctAnswer: 0, explanation: '[[Not only... but also|No solo... sino también]].' },
  { question: '[[What|Qué]] [[have we never seen|nunca hemos visto]]?', options: ['[[So much investment in urban infrastructure|Tanta inversión en infraestructura urbana]]', '[[Sustainable cities|Ciudades sostenibles]]', '[[Green spaces|Espacios verdes]]'], correctAnswer: 0, explanation: '[[The text says|El texto dice]] "[[Never have we seen so much investment in urban infrastructure]]".' },
  { question: '[[When|Cuándo]] [[can we evaluate the project|podemos evaluar el proyecto]]?', options: ['[[Only when the project is completed|Solo cuando el proyecto esté completado]]', '[[Before it starts|Antes de que empiece]]', '[[Never|Nunca]]'], correctAnswer: 0, explanation: '[[The text says|El texto dice]] "[[Only when the project is completed can we evaluate it]]".' },
  { question: '[[What|Qué]] [[should we not approve|no deberíamos aprobar]]?', options: ['[[That development without consulting residents|Ese desarrollo sin consultar a los residentes]]', '[[Any development|Cualquier desarrollo]]', '[[Green spaces|Espacios verdes]]'], correctAnswer: 0, explanation: '[[Under no circumstances|Bajo ninguna circunstancia]].' },
  { question: '[[What|Qué]] [[is so important|es tan importante]]?', options: ['[[Sustainability|La sostenibilidad]]', '[[The project|El proyecto]]', '[[Investment|La inversión]]'], correctAnswer: 0, explanation: '[[The text says|El texto dice]] "[[So important is sustainability|tan importante es la sostenibilidad]]".' },
  { question: '[[What|Cuál]] [[is|es]] [[the main idea|la idea principal]] [[of the text|del texto]]?', options: ['[[Urban planning, sustainability and inversion for emphasis|Planificación urbana, sostenibilidad e inversión para énfasis]]', '[[Cities are bad|Las ciudades son malas]]', '[[We should not build|No deberíamos construir]]'], correctAnswer: 0, explanation: '[[The text|El texto]] [[covers urban planning with inversion|cubre planificación urbana con inversión]].' },
  { question: '[[Which structure|Qué estructura]] [[adds emphasis|añade énfasis]] [[in the text|en el texto]]?', options: ['[[Inversion after negative adverbs|Inversión tras adverbios negativos]]', '[[Present simple|Presente simple]]', '[[Past simple|Pasado simple]]'], correctAnswer: 0, explanation: '[[Rarely, Never, Not only, Only when|Rarely, Never, Not only, Only when]] [[trigger inversion|provocan inversión]].' },
  { question: '[[What|Qué]] [[vocabulary|vocabulario]] [[is key|es clave]] [[in this text|en este texto]]?', options: ['[[sustainable|sostenible]], [[green spaces|espacios verdes]], [[infrastructure|infraestructura]], [[residents|residentes]]', '[[education|educación]], [[music|música]]', '[[weather|tiempo]], [[food|comida]]'], correctAnswer: 0, explanation: '[[The text|El texto]] [[focuses on|se centra en]] [[urban vocabulary|vocabulario urbano]].' },
  { question: '[[We|Nosotros]] ____ ____ ____ [[sustainable cities|ciudades sostenibles]] [[before|antes]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 1, explanation: '[[False|Falso]]. [[Rarely have we seen = we have rarely seen|Rarely have we seen = raramente hemos visto]].' },
  { question: '[[Under no circumstances|Bajo ninguna circunstancia]] ____ ____ ____ [[that development|ese desarrollo]].', options: ['[[should we approve|deberíamos aprobar]]', '[[we should approve|deberíamos aprobar]]'], correctAnswer: 0, explanation: '[[Inversion after "under no circumstances"|Inversión tras "under no circumstances"]].' },
  { question: '[[What|Qué]] [[can we infer|podemos inferir]] [[about urban planning|sobre la planificación urbana]]?', options: ['[[It requires consultation, sustainability and careful evaluation|Requiere consulta, sostenibilidad y evaluación cuidadosa]]', '[[Residents should not be consulted|No se debe consultar a los residentes]]', '[[Green spaces are not important|Los espacios verdes no son importantes]]'], correctAnswer: 0, explanation: '[[The text|El texto]] [[emphasises consultation and sustainability|enfatiza consulta y sostenibilidad]].' },
];

export const UNIT_54_LESSON_3_READING: Exercise[] = QUESTIONS.map((q, i) => ({
  id: `b2-u54-l3-r${i + 1}`,
  type: 'reading',
  level: 'B2',
  topic: 'urban-rural-life',
  difficulty: 'medium',
  transcript: READING_TRANSCRIPT,
  content: { title: LESSON_TITLE, instructions: INSTRUCTIONS, questions: [q] },
  topicName: 'Reading',
}));
