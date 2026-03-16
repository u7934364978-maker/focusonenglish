/**
 * Unidad 58 B2 — Lección 3: Comprensión lectora (Review: History & Society)
 * 13 preguntas (B2: texto sobre historia, sociedad y condicionales)
 */

import { Exercise } from '@/lib/exercise-generator';

const LESSON_TITLE = '[[Reading|Comprensión lectora]]';
const READING_TRANSCRIPT = `[[If the treaty|Si el tratado]] [[had been signed|hubiera sido firmado]] [[earlier|antes]], [[the war would have ended sooner|la guerra habría terminado antes]]. [[Rarely have we seen|Raramente hemos visto]] [[such unity|tal unidad]] [[in society|en la sociedad]]. [[If society|Si la sociedad]] [[had been more tolerant|hubiera sido más tolerante]] [[in the past|en el pasado]], [[we wouldn't have these divisions now|no tendríamos estas divisiones ahora]]. [[Not only did the event change history|No solo el evento cambió la historia]], [[but also society|sino también la sociedad]]. [[If the leaders had compromised|Si los líderes hubieran llegado a un acuerdo]], [[the conflict would not have escalated|el conflicto no habría escalado]].`;

const INSTRUCTIONS = 'Lee el texto sobre historia y sociedad. Después responde las preguntas.';

const QUESTIONS = [
  { question: '[[What|Qué]] [[would have happened|habría pasado]] [[if the treaty had been signed earlier|si el tratado hubiera sido firmado antes]]?', options: ['[[The war would have ended sooner|La guerra habría terminado antes]]', '[[Society would have divided|La sociedad se habría dividido]]', '[[Unity would have been lost|La unidad se habría perdido]]'], correctAnswer: 0, explanation: '[[The text says|El texto dice]] "[[if the treaty had been signed earlier, the war would have ended sooner|si el tratado hubiera sido firmado antes, la guerra habría terminado antes]]".' },
  { question: '[[What|Qué]] [[does the text say about unity|dice el texto sobre la unidad]]?', options: ['[[Rarely have we seen such unity in society|Raramente hemos visto tal unidad en la sociedad]]', '[[Unity is common|La unidad es común]]', '[[Society rejects unity|La sociedad rechaza la unidad]]'], correctAnswer: 0, explanation: '[[The text says|El texto dice]] "[[rarely have we seen such unity in society|raramente hemos visto tal unidad en la sociedad]]".' },
  { question: '[[What|Qué]] [[would be different now|sería diferente ahora]] [[if society had been more tolerant|si la sociedad hubiera sido más tolerante]]?', options: ['[[We wouldn\'t have these divisions|No tendríamos estas divisiones]]', '[[The war would have ended|La guerra habría terminado]]', '[[The treaty would have been signed|El tratado habría sido firmado]]'], correctAnswer: 0, explanation: '[[Mixed conditional|Condicional mixto]].' },
  { question: '[[What|Qué]] [[did the event change|cambió el evento]]?', options: ['[[Both history and society|Tanto la historia como la sociedad]]', '[[Only history|Solo la historia]]', '[[Only society|Solo la sociedad]]'], correctAnswer: 0, explanation: '[[The text says|El texto dice]] "[[not only did the event change history, but also society|no solo el evento cambió la historia, sino también la sociedad]]".' },
  { question: '[[What|Qué]] [[would have prevented the conflict from escalating|habría evitado que el conflicto escalara]]?', options: ['[[If the leaders had compromised|Si los líderes hubieran llegado a un acuerdo]]', '[[If the treaty had been signed|Si el tratado hubiera sido firmado]]', '[[If society had been tolerant|Si la sociedad hubiera sido tolerante]]'], correctAnswer: 0, explanation: '[[Third conditional|Tercer condicional]].' },
  { question: '[[What|Cuál]] [[is|es]] [[the main idea|la idea principal]] [[of the text|del texto]]?', options: ['[[History and society are linked; past decisions affect present outcomes|Historia y sociedad están ligadas; decisiones pasadas afectan resultados presentes]]', '[[Treaties always work|Los tratados siempre funcionan]]', '[[Unity is impossible|La unidad es imposible]]'], correctAnswer: 0, explanation: '[[The text|El texto]] [[uses|usa]] [[third conditional and mixed conditional|tercer condicional y condicional mixto]].' },
  { question: '[[Which structure|Qué estructura]] [[is used in|se usa en]] "[[Rarely have we seen|Raramente hemos visto]]"?', options: ['[[Inversion after rarely|Inversión tras rarely]]', '[[Third conditional|Tercer condicional]]', '[[Mixed conditional|Condicional mixto]]'], correctAnswer: 0, explanation: '[[Inversion|Inversión]] [[after negative adverbs|tras adverbios negativos]].' },
  { question: '[[What|Qué]] [[vocabulary|vocabulario]] [[is key|es clave]] [[in this text|en este texto]]?', options: ['[[treaty|tratado]], [[unity|unidad]], [[society|sociedad]], [[conflict|conflicto]]', '[[sport|deporte]], [[music|música]]', '[[weather|tiempo]], [[food|comida]]'], correctAnswer: 0, explanation: '[[The text|El texto]] [[focuses on|se centra en]] [[history and society vocabulary|vocabulario de historia y sociedad]].' },
  { question: '[[The treaty|El tratado]] ____ ____ ____ [[signed|firmado]] [[earlier|antes]].', options: ['[[had been|hubiera sido]]', '[[was|fue]]', '[[has been|ha sido]]'], correctAnswer: 0, explanation: '[[Third conditional|Tercer condicional]].' },
  { question: '[[What|Qué]] [[can we infer|podemos inferir]] [[about past decisions|sobre decisiones pasadas]]?', options: ['[[They affect present and future outcomes|Afectan resultados presentes y futuros]]', '[[They have no effect|No tienen efecto]]', '[[Only treaties matter|Solo importan los tratados]]'], correctAnswer: 0, explanation: '[[The text|El texto]] [[shows|muestra]] [[conditional links|vínculos condicionales]].' },
  { question: '[[If the leaders|Si los líderes]] ____ ____ ____ ____ ____ [[compromised|hubieran llegado a un acuerdo]], [[the conflict|el conflicto]] ____ ____ ____ ____ [[escalated|escalado]].', options: ['[[had|hubieran]] ... [[would not have|no habría]]', '[[have|han]] ... [[would not have|no habría]]'], correctAnswer: 0, explanation: '[[Third conditional|Tercer condicional]].' },
  { question: '[[Not only|No solo]] ____ ____ ____ ____ ____ [[changed|cambiado]] [[history|la historia]].', options: ['[[did the event|hizo el evento]]', '[[the event did|hizo el evento]]', '[[the event|el evento]]'], correctAnswer: 0, explanation: '[[Not only + inversion|Not only + inversión]].' },
  { question: '[[Mixed conditional|Condicional mixto]] [[combines|combina]] ____.', options: ['[[Past condition with present result|Condición pasada con resultado presente]]', '[[Future condition with past result|Condición futura con resultado pasado]]'], correctAnswer: 0, explanation: '[[Mixed conditional|Condicional mixto]] [[= if + past perfect, would + infinitive|= if + pasado perfecto, would + infinitivo]].' },
];

export const UNIT_58_LESSON_3_READING: Exercise[] = QUESTIONS.map((q, i) => ({
  id: `b2-u58-l3-r${i + 1}`,
  type: 'reading',
  level: 'B2',
  topic: 'history-society',
  difficulty: 'medium',
  transcript: READING_TRANSCRIPT,
  content: { title: LESSON_TITLE, instructions: INSTRUCTIONS, questions: [q] },
  topicName: 'Reading',
}));
