/**
 * Unidad 52 B2 — Lección 3: Comprensión lectora (Human Migration & Society)
 * 13 preguntas (B2: texto sobre migración y voz pasiva)
 */

import { Exercise } from '@/lib/exercise-generator';

const LESSON_TITLE = '[[Reading|Comprensión lectora]]';
const READING_TRANSCRIPT = `[[Thousands of refugees|Miles de refugiados]] [[are helped|son ayudados]] [[by NGOs|por ONGs]] [[every year|cada año]]. [[The border|La frontera]] [[was closed|fue cerrada]] [[by the authorities|por las autoridades]] [[last week|la semana pasada]]. [[Migrants|Los migrantes]] [[have been displaced|han sido desplazados]] [[by the conflict|por el conflicto]] [[for years|durante años]]. [[Integration programmes|Los programas de integración]] [[are being funded|están siendo financiados]] [[by the EU|por la UE]]. [[Society|La sociedad]] [[is affected|es afectada]] [[by migration|por la migración]] [[in many ways|de muchas formas]]. [[Asylum applications|Las solicitudes de asilo]] [[will be processed|serán procesadas]] [[by next month|para el próximo mes]]. [[The camp|El campamento]] [[had been built|había sido construido]] [[when we arrived|cuando llegamos]].`;

const INSTRUCTIONS = 'Lee el texto sobre migración humana y sociedad. Después responde las preguntas.';

const QUESTIONS = [
  { question: '[[Who|Quién]] [[helps refugees|ayuda a los refugiados]] [[every year|cada año]]?', options: ['[[NGOs|Las ONGs]]', '[[The government|El gobierno]]', '[[The EU|La UE]]'], correctAnswer: 0, explanation: '[[The text says|El texto dice]] "[[thousands of refugees are helped by NGOs every year|miles de refugiados son ayudados por ONGs cada año]]".' },
  { question: '[[What|Qué]] [[happened to the border|pasó con la frontera]] [[last week|la semana pasada]]?', options: ['[[It was closed by the authorities|Fue cerrada por las autoridades]]', '[[It was opened|Fue abierta]]', '[[It was built|Fue construida]]'], correctAnswer: 0, explanation: '[[The text says|El texto dice]] "[[the border was closed by the authorities last week|la frontera fue cerrada por las autoridades la semana pasada]]".' },
  { question: '[[What|Qué]] [[have migrants been|han sido los migrantes]] [[by the conflict|por el conflicto]]?', options: ['[[Displaced for years|Desplazados durante años]]', '[[Helped|Ayudados]]', '[[Integrated|Integrados]]'], correctAnswer: 0, explanation: '[[The text says|El texto dice]] "[[migrants have been displaced by the conflict for years|los migrantes han sido desplazados por el conflicto durante años]]".' },
  { question: '[[Who|Quién]] [[funds integration programmes|financia los programas de integración]]?', options: ['[[The EU|La UE]]', '[[NGOs|Las ONGs]]', '[[The authorities|Las autoridades]]'], correctAnswer: 0, explanation: '[[The text says|El texto dice]] "[[integration programmes are being funded by the EU|los programas de integración están siendo financiados por la UE]]".' },
  { question: '[[How|Cómo]] [[is society affected|es afectada la sociedad]] [[by migration|por la migración]]?', options: ['[[In many ways|De muchas formas]]', '[[Only positively|Solo positivamente]]', '[[Not at all|En absoluto]]'], correctAnswer: 0, explanation: '[[The text says|El texto dice]] "[[society is affected by migration in many ways|la sociedad es afectada por la migración de muchas formas]]".' },
  { question: '[[When|Cuándo]] [[will asylum applications be processed|serán procesadas las solicitudes de asilo]]?', options: ['[[By next month|Para el próximo mes]]', '[[Last week|La semana pasada]]', '[[For years|Durante años]]'], correctAnswer: 0, explanation: '[[The text says|El texto dice]] "[[asylum applications will be processed by next month|las solicitudes de asilo serán procesadas para el próximo mes]]".' },
  { question: '[[What|Cuál]] [[is|es]] [[the main idea|la idea principal]] [[of the text|del texto]]?', options: ['[[Migration affects society and various passive structures describe actions|La migración afecta la sociedad y varias estructuras pasivas describen acciones]]', '[[Refugees are not helped|Los refugiados no son ayudados]]', '[[Borders are always open|Las fronteras siempre están abiertas]]'], correctAnswer: 0, explanation: '[[The text|El texto]] [[describes|describe]] [[migration and society using passive voice|migración y sociedad usando voz pasiva]].' },
  { question: '[[Which tense|Qué tiempo]] [[is used in|se usa en]] "[[are helped|son ayudados]]"?', options: ['[[Present simple passive|Pasiva presente simple]]', '[[Past simple passive|Pasiva pasado simple]]', '[[Future passive|Pasiva futuro]]'], correctAnswer: 0, explanation: '[[Present simple passive|Pasiva presente simple]].' },
  { question: '[[What|Qué]] [[vocabulary|vocabulario]] [[is key|es clave]] [[in this text|en este texto]]?', options: ['[[refugees|refugiados]], [[migration|migración]], [[integration|integración]], [[asylum|asilo]]', '[[sport|deporte]], [[music|música]]', '[[weather|tiempo]], [[food|comida]]'], correctAnswer: 0, explanation: '[[The text|El texto]] [[focuses on|se centra en]] [[migration vocabulary|vocabulario de migración]].' },
  { question: '[[The camp|El campamento]] ____ ____ ____ [[built|construido]] [[when we arrived|cuando llegamos]].', options: ['[[had been|había sido]]', '[[was|fue]]', '[[has been|ha sido]]'], correctAnswer: 0, explanation: '[[Past perfect passive|Pasiva pasado perfecto]].' },
  { question: '[[Society|La sociedad]] ____ ____ [[affected|afectada]] [[by migration|por la migración]].', options: ['[[is|es]]', '[[are|son]]', '[[was|fue]]'], correctAnswer: 0, explanation: '[[Present simple passive|Pasiva presente simple]].' },
  { question: '[[What|Qué]] [[can we infer|podemos inferir]] [[about migration|sobre la migración]]?', options: ['[[It has multiple effects on society and requires various responses|Tiene múltiples efectos en la sociedad y requiere varias respuestas]]', '[[It has no effect|No tiene efecto]]', '[[Only NGOs respond|Solo las ONGs responden]]'], correctAnswer: 0, explanation: '[[The text|El texto]] [[mentions|menciona]] [[multiple actors and effects|múltiples actores y efectos]].' },
];

export const UNIT_52_LESSON_3_READING: Exercise[] = QUESTIONS.map((q, i) => ({
  id: `b2-u52-l3-r${i + 1}`,
  type: 'reading',
  level: 'B2',
  topic: 'social-issues',
  difficulty: 'medium',
  transcript: READING_TRANSCRIPT,
  content: { title: LESSON_TITLE, instructions: INSTRUCTIONS, questions: [q] },
  topicName: 'Reading',
}));
