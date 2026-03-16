/**
 * Unidad 57 B2 — Lección 3: Comprensión lectora (Media Literacy & Critical Thinking)
 * 13 preguntas (B2: texto sobre alfabetización mediática, palabras compuestas)
 */

import { Exercise } from '@/lib/exercise-generator';

const LESSON_TITLE = '[[Reading|Comprensión lectora]]';
const READING_TRANSCRIPT = `[[Media literacy|La alfabetización mediática]] [[is essential|es esencial]] [[in the digital age|en la era digital]]. [[Critical thinking|El pensamiento crítico]] [[helps us|nos ayuda]] [[evaluate news sources|a evaluar fuentes de noticias]]. [[Misinformation|La desinformación]] [[and|y]] [[fake news|noticias falsas]] [[spread quickly|se difunden rápidamente]] [[online|online]]. [[Fact-checking|La verificación de hechos]] [[is a key skill|es una habilidad clave]] [[for media literacy|para la alfabetización mediática]]. [[Media bias|El sesgo mediático]] [[can affect|puede afectar]] [[how we see the world|cómo vemos el mundo]]. [[News outlets|Los medios de comunicación]] [[that verify sources|que verifican fuentes]] [[are more trustworthy|son más confiables]]. [[Evidence-based|Basado en evidencia]] [[reporting|reportaje]] [[builds trust|genera confianza]].`;

const INSTRUCTIONS = 'Lee el texto sobre alfabetización mediática. Después responde las preguntas.';

const QUESTIONS = [
  { question: '[[What|Qué]] [[is essential in the digital age|es esencial en la era digital]]?', options: ['[[Media literacy|La alfabetización mediática]]', '[[Fake news|Las noticias falsas]]', '[[Media bias|El sesgo mediático]]'], correctAnswer: 0, explanation: '[[The text says|El texto dice]] "[[Media literacy is essential in the digital age]]".' },
  { question: '[[What|Qué]] [[does critical thinking help us do|nos ayuda el pensamiento crítico a hacer]]?', options: ['[[Evaluate news sources|Evaluar fuentes de noticias]]', '[[Spread fake news|Difundir noticias falsas]]', '[[Ignore the media|Ignorar los medios]]'], correctAnswer: 0, explanation: '[[The text says|El texto dice]] "[[Critical thinking helps us evaluate news sources]]".' },
  { question: '[[What|Qué]] [[spreads quickly online|se difunde rápidamente online]]?', options: ['[[Misinformation and fake news|Desinformación y noticias falsas]]', '[[Fact-checking|Verificación de hechos]]', '[[Media literacy|Alfabetización mediática]]'], correctAnswer: 0, explanation: '[[The text says|El texto dice]] "[[Misinformation and fake news spread quickly online]]".' },
  { question: '[[What|Qué]] [[is a key skill for media literacy|es una habilidad clave para la alfabetización mediática]]?', options: ['[[Fact-checking|La verificación de hechos]]', '[[Spreading news|Difundir noticias]]', '[[Ignoring sources|Ignorar fuentes]]'], correctAnswer: 0, explanation: '[[The text says|El texto dice]] "[[Fact-checking is a key skill for media literacy]]".' },
  { question: '[[What|Qué]] [[can media bias affect|puede afectar el sesgo mediático]]?', options: ['[[How we see the world|Cómo vemos el mundo]]', '[[Fact-checking|La verificación de hechos]]', '[[News sources|Las fuentes de noticias]]'], correctAnswer: 0, explanation: '[[The text says|El texto dice]] "[[Media bias can affect how we see the world]]".' },
  { question: '[[What|Qué]] [[news outlets are more trustworthy|medios de comunicación son más confiables]]?', options: ['[[Those that verify sources|Los que verifican fuentes]]', '[[Those that spread fake news|Los que difunden noticias falsas]]', '[[All news outlets|Todos los medios]]'], correctAnswer: 0, explanation: '[[The text says|El texto dice]] "[[News outlets that verify sources are more trustworthy]]".' },
  { question: '[[What|Qué]] [[does evidence-based reporting do|hace el reportaje basado en evidencia]]?', options: ['[[Builds trust|Genera confianza]]', '[[Spreads misinformation|Difunde desinformación]]', '[[Creates bias|Crea sesgo]]'], correctAnswer: 0, explanation: '[[The text says|El texto dice]] "[[Evidence-based reporting builds trust]]".' },
  { question: '[[What|Cuál]] [[is|es]] [[the main idea|la idea principal]] [[of the text|del texto]]?', options: ['[[Media literacy, critical thinking and compound words|Alfabetización mediática, pensamiento crítico y palabras compuestas]]', '[[Fake news is good|Las noticias falsas son buenas]]', '[[We should ignore the media|Deberíamos ignorar los medios]]'], correctAnswer: 0, explanation: '[[The text|El texto]] [[covers media literacy and compound words|cubre alfabetización mediática y palabras compuestas]].' },
  { question: '[[Which compound|Qué palabra compuesta]] [[is used for "ability to evaluate media"|se usa para "capacidad de evaluar medios"]]?', options: ['[[Media literacy|Alfabetización mediática]]', '[[Fake news|Noticias falsas]]', '[[Media bias|Sesgo mediático]]'], correctAnswer: 0, explanation: '[[Media + literacy|Media + literacy]].' },
  { question: '[[What|Qué]] [[vocabulary|vocabulario]] [[is key|es clave]] [[in this text|en este texto]]?', options: ['[[media literacy|alfabetización mediática]], [[critical thinking|pensamiento crítico]], [[misinformation|desinformación]], [[fact-checking|verificación de hechos]]', '[[education|educación]], [[music|música]]', '[[weather|tiempo]], [[food|comida]]'], correctAnswer: 0, explanation: '[[The text|El texto]] [[focuses on|se centra en]] [[media vocabulary|vocabulario mediático]].' },
  { question: '[[Fake news|Las noticias falsas]] ____ ____ ____ ____ [[trust|confianza]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 1, explanation: '[[False|Falso]]. [[Evidence-based reporting builds trust|El reportaje basado en evidencia genera confianza]], [[not fake news|no las noticias falsas]].' },
  { question: '[[News outlets|Los medios]] ____ ____ ____ ____ [[are more trustworthy|son más confiables]].', options: ['[[that verify sources|que verifican fuentes]]', '[[that spread fake news|que difunden noticias falsas]]'], correctAnswer: 0, explanation: '[[The text says|El texto dice]] "[[News outlets that verify sources are more trustworthy]]".' },
  { question: '[[What|Qué]] [[can we infer|podemos inferir]] [[about media literacy|sobre la alfabetización mediática]]?', options: ['[[It involves critical thinking, fact-checking and source verification|Implica pensamiento crítico, verificación y comprobación de fuentes]]', '[[It is not important|No es importante]]', '[[Fake news helps|Las noticias falsas ayudan]]'], correctAnswer: 0, explanation: '[[The text|El texto]] [[emphasises verification and critical thinking|enfatiza verificación y pensamiento crítico]].' },
];

export const UNIT_57_LESSON_3_READING: Exercise[] = QUESTIONS.map((q, i) => ({
  id: `b2-u57-l3-r${i + 1}`,
  type: 'reading',
  level: 'B2',
  topic: 'media-communication',
  difficulty: 'medium',
  transcript: READING_TRANSCRIPT,
  content: { title: LESSON_TITLE, instructions: INSTRUCTIONS, questions: [q] },
  topicName: 'Reading',
}));
