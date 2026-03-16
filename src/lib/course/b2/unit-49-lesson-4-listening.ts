/**
 * Unidad 49 B2 — Lección 4: Comprensión auditiva (Sociology & Cultural Shifts)
 * 13 preguntas (B2: transcripción sobre sociología e inversión)
 */

import { Exercise } from '@/lib/exercise-generator';

const LESSON_TITLE = '[[Listening|Comprensión auditiva]]';
const LISTENING_TRANSCRIPT = `[[Hi|Hola]], [[I'm|soy]] [[Dr. Williams|Dr. Williams]] [[and|y]] [[I|yo]] [[teach|enseño]] [[sociology|sociología]]. [[Never have I seen|Nunca he visto]] [[such interest|tal interés]] [[in cultural shifts|cambios culturales]] [[among students|entre estudiantes]]. [[Only when|Solo cuando]] [[the crisis hit|golpeó la crisis]] [[did we|sí nosotros]] [[understand|entendimos]] [[its impact|su impacto]]. [[Not only|No solo]] [[does society|sí la sociedad]] [[change|cambia]], [[but identity|sino que la identidad]] [[does too|también]]. [[Seldom|Rara vez]] [[do we|hacemos nosotros]] [[witness|presenciar]] [[such rapid transformation|tal transformación rápida]]. [[What I want to emphasise|Lo que quiero enfatizar]] [[is|es]] [[the role of migration|el papel de la migración]] [[in shaping culture|en dar forma a la cultura]]. [[Demographics|La demografía]] [[and|y]] [[diversity|diversidad]] [[are key|son clave]] [[to understanding|para entender]] [[modern society|la sociedad moderna]].`;

const INSTRUCTIONS = 'Escucha el audio (o lee la transcripción). Después responde las preguntas.';

const QUESTIONS = [
  { question: '[[Who is speaking|Quién habla]]?', options: ['[[Dr. Williams, who teaches sociology|Dr. Williams, que enseña sociología]]', '[[A student|Un estudiante]]', '[[A politician|Un político]]'], correctAnswer: 0, explanation: '[[The speaker says|El hablante dice]] "[[I\'m Dr. Williams and I teach sociology|soy Dr. Williams y enseño sociología]]".' },
  { question: '[[What|Qué]] [[has the speaker never seen|nunca ha visto el hablante]]?', options: ['[[Such interest in cultural shifts among students|Tal interés en cambios culturales entre estudiantes]]', '[[No interest|Sin interés]]', '[[Only traditional topics|Solo temas tradicionales]]'], correctAnswer: 0, explanation: '[[The speaker says|El hablante dice]] "[[never have I seen such interest in cultural shifts among students|nunca he visto tal interés en cambios culturales entre estudiantes]]".' },
  { question: '[[When|Cuándo]] [[did we understand|entendimos]] [[the impact|el impacto]]?', options: ['[[Only when the crisis hit|Solo cuando golpeó la crisis]]', '[[Never|Nunca]]', '[[Before the crisis|Antes de la crisis]]'], correctAnswer: 0, explanation: '[[The speaker says|El hablante dice]] "[[only when the crisis hit did we understand its impact|solo cuando golpeó la crisis entendimos su impacto]]".' },
  { question: '[[What|Qué]] [[changes|camibia]] [[according to the speaker|según el hablante]]?', options: ['[[Society and identity|Sociedad e identidad]]', '[[Only society|Solo sociedad]]', '[[Nothing|Nada]]'], correctAnswer: 0, explanation: '[[The speaker says|El hablante dice]] "[[not only does society change, but identity does too|no solo cambia la sociedad, sino que la identidad también]]".' },
  { question: '[[What|Qué]] [[do we seldom witness|rara vez presenciamos]]?', options: ['[[Such rapid transformation|Tal transformación rápida]]', '[[Slow change|Cambio lento]]', '[[No change|Sin cambio]]'], correctAnswer: 0, explanation: '[[The speaker says|El hablante dice]] "[[seldom do we witness such rapid transformation|rara vez presenciamos tal transformación rápida]]".' },
  { question: '[[What|Qué]] [[does the speaker want to emphasise|quiere enfatizar el hablante]]?', options: ['[[The role of migration in shaping culture|El papel de la migración en dar forma a la cultura]]', '[[Migration is bad|La migración es mala]]', '[[Culture never changes|La cultura nunca cambia]]'], correctAnswer: 0, explanation: '[[The speaker says|El hablante dice]] "[[what I want to emphasise is the role of migration in shaping culture|lo que quiero enfatizar es el papel de la migración en dar forma a la cultura]]".' },
  { question: '[[What|Qué]] [[are key to understanding modern society|son clave para entender la sociedad moderna]]?', options: ['[[Demographics and diversity|Demografía y diversidad]]', '[[Only technology|Solo tecnología]]', '[[Only tradition|Solo tradición]]'], correctAnswer: 0, explanation: '[[The speaker says|El hablante dice]] "[[demographics and diversity are key to understanding modern society|la demografía y la diversidad son clave para entender la sociedad moderna]]".' },
  { question: '[[What|Cuál]] [[is|es]] [[the main idea|la idea principal]] [[of the listening|de la escucha]]?', options: ['[[Sociology, cultural shifts, inversion, migration, diversity|Sociología, cambios culturales, inversión, migración, diversidad]]', '[[Society never changes|La sociedad nunca cambia]]', '[[Migration should be stopped|La migración debe detenerse]]'], correctAnswer: 0, explanation: '[[The speaker|El hablante]] [[covers|cubre]] [[sociology|sociología]], [[cultural shifts|cambios culturales]], [[migration|migración]], [[diversity|diversidad]].' },
  { question: '[[Which inversion|Qué inversión]] [[is used with "never"|se usa con "never"]]?', options: ['[[Never have I seen|Never have I seen]]', '[[Never I have seen|Never I have seen]]', '[[I never have seen|I never have seen]]'], correctAnswer: 0, explanation: '[[Never + have + subject + past participle|Never + have + sujeto + participio pasado]].' },
  { question: '[[What|Qué]] [[vocabulary|vocabulario]] [[is central|es central]] [[in this listening|en esta escucha]]?', options: ['[[cultural shifts|cambios culturales]], [[migration|migración]], [[demographics|demografía]], [[diversity|diversidad]]', '[[sport|deporte]], [[music|música]]', '[[weather|tiempo]], [[food|comida]]'], correctAnswer: 0, explanation: '[[The listening|La escucha]] [[focuses on|se centra en]] [[sociology vocabulary|vocabulario de sociología]].' },
  { question: '[[What|Qué]] [[can we infer|podemos inferir]] [[about Dr. Williams|sobre Dr. Williams]]?', options: ['[[He emphasises cultural shifts, migration and diversity|Enfatiza cambios culturales, migración y diversidad]]', '[[He rejects change|Rechaza el cambio]]', '[[He prefers traditional society|Prefiere la sociedad tradicional]]'], correctAnswer: 0, explanation: '[[He|Él]] [[emphasises|enfatiza]] [[cultural shifts|cambios culturales]], [[migration|migración]], [[diversity|diversidad]].' },
  { question: '[[Never|Nunca]] ____ [[I|yo]] ____ [[seen|visto]] [[such interest|tal interés]].', options: ['[[have|he]]', '[[has|ha]]', '[[had|había]]'], correctAnswer: 0, explanation: '[[Never + have + subject + past participle|Never + have + sujeto + participio pasado]].' },
  { question: '[[Only when|Solo cuando]] ____ ____ ____ [[did we understand|entendimos]] [[its impact|su impacto]].', options: ['[[the crisis hit|golpeó la crisis]]', '[[the crisis hits|la crisis golpea]]', '[[the crisis hitting|la crisis golpeando]]'], correctAnswer: 0, explanation: '[[Only when + past + did + subject + verb|Only when + pasado + did + sujeto + verbo]].' },
];

export const UNIT_49_LESSON_4_LISTENING: Exercise[] = QUESTIONS.map((q, i) => ({
  id: `b2-u49-l4-l${i + 1}`,
  type: 'listening',
  level: 'B2',
  topic: 'history-society',
  difficulty: 'medium',
  transcript: LISTENING_TRANSCRIPT,
  content: { title: LESSON_TITLE, instructions: INSTRUCTIONS, questions: [q] },
  topicName: 'Listening',
}));
