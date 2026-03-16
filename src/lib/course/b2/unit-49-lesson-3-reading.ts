/**
 * Unidad 49 B2 — Lección 3: Comprensión lectora (Sociology & Cultural Shifts)
 * 13 preguntas (B2: texto sobre sociología e inversión)
 */

import { Exercise } from '@/lib/exercise-generator';

const LESSON_TITLE = '[[Reading|Comprensión lectora]]';
const READING_TRANSCRIPT = `[[Never before|Nunca antes]] [[had society|había la sociedad]] [[faced|enfrentado]] [[such rapid cultural shifts|cambios culturales tan rápidos]]. [[Only then|Solo entonces]] [[did we|sí nosotros]] [[realise|nos dimos cuenta]] [[the impact of globalisation|el impacto de la globalización]]. [[Not only|No solo]] [[did demographics|sí la demografía]] [[change|cambiar]], [[but identity|sino que la identidad]] [[did too|también]]. [[Sociology|La sociología]] [[studies|estudia]] [[these transformations|estas transformaciones]]. [[Seldom|Rara vez]] [[do we|hacemos nosotros]] [[see|ver]] [[such diversity|tal diversidad]] [[in one place|en un lugar]]. [[Hardly had|Apenas había]] [[the pandemic|la pandemia]] [[ended|terminado]] [[when|cuando]] [[new trends emerged|surgieron nuevas tendencias]]. [[What matters most|Lo que más importa]] [[is|es]] [[understanding|entender]] [[social change|cambio social]]. [[Migration|La migración]] [[and|y]] [[urbanisation|urbanización]] [[shape|dan forma]] [[modern society|la sociedad moderna]].`;

const INSTRUCTIONS = 'Lee el texto sobre sociología y cambios culturales. Después responde las preguntas.';

const QUESTIONS = [
  { question: '[[What|Qué]] [[had society never faced before|nunca había enfrentado la sociedad antes]]?', options: ['[[Such rapid cultural shifts|Cambios culturales tan rápidos]]', '[[Slow change|Cambio lento]]', '[[No change|Sin cambio]]'], correctAnswer: 0, explanation: '[[The text says|El texto dice]] "[[never before had society faced such rapid cultural shifts|nunca antes había la sociedad enfrentado cambios culturales tan rápidos]]".' },
  { question: '[[When|Cuándo]] [[did we realise|nos dimos cuenta]] [[the impact of globalisation|el impacto de la globalización]]?', options: ['[[Only then|Solo entonces]]', '[[Never|Nunca]]', '[[Always|Siempre]]'], correctAnswer: 0, explanation: '[[The text says|El texto dice]] "[[only then did we realise the impact of globalisation|solo entonces nos dimos cuenta del impacto de la globalización]]".' },
  { question: '[[What|Qué]] [[changed|cambió]] [[according to the text|según el texto]]?', options: ['[[Demographics and identity|Demografía e identidad]]', '[[Only demographics|Solo demografía]]', '[[Nothing|Nada]]'], correctAnswer: 0, explanation: '[[The text says|El texto dice]] "[[not only did demographics change, but identity did too|no solo cambió la demografía, sino que la identidad también]]".' },
  { question: '[[What|Qué]] [[does sociology study|estudia la sociología]]?', options: ['[[These transformations|Estas transformaciones]]', '[[Only economics|Solo economía]]', '[[Only politics|Solo política]]'], correctAnswer: 0, explanation: '[[The text says|El texto dice]] "[[sociology studies these transformations|la sociología estudia estas transformaciones]]".' },
  { question: '[[What|Qué]] [[do we seldom see|rara vez vemos]]?', options: ['[[Such diversity in one place|Tal diversidad en un lugar]]', '[[No diversity|Sin diversidad]]', '[[Only one culture|Solo una cultura]]'], correctAnswer: 0, explanation: '[[The text says|El texto dice]] "[[seldom do we see such diversity in one place|rara vez vemos tal diversidad en un lugar]]".' },
  { question: '[[What|Qué]] [[happened|pasó]] [[when the pandemic ended|cuando terminó la pandemia]]?', options: ['[[New trends emerged|Surgieron nuevas tendencias]]', '[[Nothing changed|Nada cambió]]', '[[Society stopped|La sociedad se detuvo]]'], correctAnswer: 0, explanation: '[[The text says|El texto dice]] "[[hardly had the pandemic ended when new trends emerged|apenas había terminado la pandemia cuando surgieron nuevas tendencias]]".' },
  { question: '[[What|Qué]] [[matters most|lo que más importa]]?', options: ['[[Understanding social change|Entender el cambio social]]', '[[Ignoring change|Ignorar el cambio]]', '[[Resisting change|Resistir al cambio]]'], correctAnswer: 0, explanation: '[[The text says|El texto dice]] "[[what matters most is understanding social change|lo que más importa es entender el cambio social]]".' },
  { question: '[[What|Qué]] [[shapes modern society|da forma a la sociedad moderna]]?', options: ['[[Migration and urbanisation|Migración y urbanización]]', '[[Only tradition|Solo tradición]]', '[[Only technology|Solo tecnología]]'], correctAnswer: 0, explanation: '[[The text says|El texto dice]] "[[migration and urbanisation shape modern society|la migración y la urbanización dan forma a la sociedad moderna]]".' },
  { question: '[[What|Cuál]] [[is|es]] [[the main idea|la idea principal]] [[of the text|del texto]]?', options: ['[[Rapid cultural shifts, sociology, diversity, social change|Cambios culturales rápidos, sociología, diversidad, cambio social]]', '[[Society never changes|La sociedad nunca cambia]]', '[[Globalisation is bad|La globalización es mala]]'], correctAnswer: 0, explanation: '[[The text|El texto]] [[covers|cubre]] [[cultural shifts|cambios culturales]], [[sociology|sociología]], [[diversity|diversidad]], [[social change|cambio social]].' },
  { question: '[[Which inversion structure|Qué estructura de inversión]] [[is used|se usa]] [[for "never before"|para "never before"]]?', options: ['[[Never before + had + subject + past participle|Never before + had + sujeto + participio pasado]]', '[[Never + do + subject|Never + do + sujeto]]', '[[Only then + verb|Only then + verbo]]'], correctAnswer: 0, explanation: '[[Never before had society faced|Never before had society faced]].' },
  { question: '[[What|Qué]] [[vocabulary|vocabulario]] [[is key|es clave]] [[in this text|en este texto]]?', options: ['[[demographics|demografía]], [[identity|identidad]], [[migration|migración]], [[urbanisation|urbanización]]', '[[sport|deporte]], [[music|música]]', '[[weather|tiempo]], [[food|comida]]'], correctAnswer: 0, explanation: '[[The text|El texto]] [[focuses on|se centra en]] [[sociology vocabulary|vocabulario de sociología]].' },
  { question: '[[Seldom|Rara vez]] ____ [[we|nosotros]] ____ [[such diversity|tal diversidad]].', options: ['[[do|vemos]]', '[[does|ve]]', '[[did|vimos]]'], correctAnswer: 0, explanation: '[[Seldom + do + subject + verb|Seldom + do + sujeto + verbo]].' },
  { question: '[[What|Qué]] [[can we infer|podemos inferir]] [[about society today|sobre la sociedad hoy]]?', options: ['[[It is rapidly changing with diversity and new trends|Está cambiando rápidamente con diversidad y nuevas tendencias]]', '[[It never changes|Nunca cambia]]', '[[It rejects diversity|Rechaza la diversidad]]'], correctAnswer: 0, explanation: '[[The text|El texto]] [[describes|describe]] [[rapid shifts|cambios rápidos]], [[diversity|diversidad]], [[new trends|nuevas tendencias]].' },
];

export const UNIT_49_LESSON_3_READING: Exercise[] = QUESTIONS.map((q, i) => ({
  id: `b2-u49-l3-r${i + 1}`,
  type: 'reading',
  level: 'B2',
  topic: 'history-society',
  difficulty: 'medium',
  transcript: READING_TRANSCRIPT,
  content: { title: LESSON_TITLE, instructions: INSTRUCTIONS, questions: [q] },
  topicName: 'Reading',
}));
