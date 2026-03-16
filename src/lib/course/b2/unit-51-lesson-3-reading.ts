/**
 * Unidad 51 B2 — Lección 3: Comprensión lectora (Global Economic Crisis)
 * 13 preguntas (B2: texto sobre crisis económica y wish/third conditional)
 */

import { Exercise } from '@/lib/exercise-generator';

const LESSON_TITLE = '[[Reading|Comprensión lectora]]';
const READING_TRANSCRIPT = `[[Many people|Muchas personas]] [[wish they had saved|desearían haber ahorrado]] [[more money|más dinero]] [[before the recession|antes de la recesión]]. [[If only|Ojalá]] [[the banks|los bancos]] [[had been|hubieran sido]] [[more regulated|más regulados]] [[before the crisis|antes de la crisis]]. [[If the government|Si el gobierno]] [[had acted|hubiera actuado]] [[faster|más rápido]], [[recovery|la recuperación]] [[would have been|habría sido]] [[quicker|más rápida]]. [[The economy|La economía]] [[suffered|sufrió]] [[from high|de alta]] [[inflation|inflación]] [[and|y]] [[unemployment|desempleo]] [[rose|subió]]. [[I wish|Ojalá]] [[I had diversified|hubiera diversificado]] [[my investments|mis inversiones]] [[before the market crash|antes del crash bursátil]]. [[If only|Ojalá]] [[the markets|los mercados]] [[had stabilised|hubieran estabilizado]] [[earlier|antes]].`;

const INSTRUCTIONS = 'Lee el texto sobre la crisis económica global. Después responde las preguntas.';

const QUESTIONS = [
  { question: '[[What|Qué]] [[do many people wish|desean muchas personas]]?', options: ['[[They had saved more money before the recession|Haberse ahorrado más dinero antes de la recesión]]', '[[The economy recovered|Que la economía se recuperara]]', '[[Banks were closed|Que los bancos cerraran]]'], correctAnswer: 0, explanation: '[[The text says|El texto dice]] "[[many people wish they had saved more money before the recession|muchas personas desearían haber ahorrado más dinero antes de la recesión]]".' },
  { question: '[[What|Qué]] [[does the text say about banks|dice el texto sobre los bancos]]?', options: ['[[If only they had been more regulated before the crisis|Ojalá hubieran sido más regulados antes de la crisis]]', '[[They caused the recession|Causaron la recesión]]', '[[They recovered quickly|Se recuperaron rápido]]'], correctAnswer: 0, explanation: '[[The text says|El texto dice]] "[[if only the banks had been more regulated before the crisis|ojalá los bancos hubieran sido más regulados antes de la crisis]]".' },
  { question: '[[What|Qué]] [[would have happened|habría pasado]] [[if the government had acted faster|si el gobierno hubiera actuado más rápido]]?', options: ['[[Recovery would have been quicker|La recuperación habría sido más rápida]]', '[[Inflation would have risen|La inflación habría subido]]', '[[Unemployment would have increased|El desempleo habría aumentado]]'], correctAnswer: 0, explanation: '[[The text says|El texto dice]] "[[if the government had acted faster, recovery would have been quicker|si el gobierno hubiera actuado más rápido, la recuperación habría sido más rápida]]".' },
  { question: '[[What|Qué]] [[did the economy suffer from|sufrió la economía]]?', options: ['[[High inflation and rising unemployment|Alta inflación y desempleo creciente]]', '[[Market recovery|Recuperación del mercado]]', '[[Bank regulation|Regulación bancaria]]'], correctAnswer: 0, explanation: '[[The text says|El texto dice]] "[[the economy suffered from high inflation and unemployment rose|la economía sufrió de alta inflación y el desempleo subió]]".' },
  { question: '[[What|Qué]] [[does the narrator wish|desea el narrador]]?', options: ['[[To have diversified investments before the market crash|Haberse diversificado las inversiones antes del crash]]', '[[The markets to crash|Que los mercados colapsen]]', '[[Banks to close|Que los bancos cierren]]'], correctAnswer: 0, explanation: '[[The text says|El texto dice]] "[[I wish I had diversified my investments before the market crash|ojalá hubiera diversificado mis inversiones antes del crash bursátil]]".' },
  { question: '[[What|Cuál]] [[is|es]] [[the main idea|la idea principal]] [[of the text|del texto]]?', options: ['[[Regrets about the economic crisis and what could have been different|Arrepentimientos sobre la crisis y qué podría haber sido diferente]]', '[[The economy recovered quickly|La economía se recuperó rápido]]', '[[Banks were well regulated|Los bancos estaban bien regulados]]'], correctAnswer: 0, explanation: '[[The text|El texto]] [[focuses on|se centra en]] [[wishes and third conditional regrets|deseos y arrepentimientos del tercer condicional]].' },
  { question: '[[Which structure|Qué estructura]] [[expresses regret|expresa arrepentimiento]] [[in the text|en el texto]]?', options: ['[[Wish + past perfect|Wish + pasado perfecto]]', '[[Will + infinitive|Will + infinitivo]]', '[[Present simple|Presente simple]]'], correctAnswer: 0, explanation: '[[Wish + past perfect|Wish + pasado perfecto]] [[expresses regret about the past|expresa arrepentimiento sobre el pasado]].' },
  { question: '[[What|Qué]] [[vocabulary|vocabulario]] [[is key|es clave]] [[in this text|en este texto]]?', options: ['[[recession|recesión]], [[inflation|inflación]], [[recovery|recuperación]], [[market crash|crash bursátil]]', '[[sport|deporte]], [[music|música]]', '[[weather|tiempo]], [[food|comida]]'], correctAnswer: 0, explanation: '[[The text|El texto]] [[focuses on|se centra en]] [[economic vocabulary|vocabulario económico]].' },
  { question: '[[The government|El gobierno]] ____ [[acted|actuó]] [[fast enough|lo suficientemente rápido]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 1, explanation: '[[False|Falso]]. [[If the government had acted faster|Si el gobierno hubiera actuado más rápido]] [[implies|implica]] [[it did not|no lo hizo]].' },
  { question: '[[If only|Ojalá]] [[the markets|los mercados]] ____ ____ [[stabilised|estabilizado]] [[earlier|antes]].', options: ['[[had|hubieran]]', '[[have|han]]', '[[would have|habrían]]'], correctAnswer: 0, explanation: '[[If only + past perfect|If only + pasado perfecto]].' },
  { question: '[[What|Qué]] [[can we infer|podemos inferir]] [[about the economic crisis|sobre la crisis económica]]?', options: ['[[People have regrets about decisions made before and during it|La gente tiene arrepentimientos sobre decisiones tomadas]]', '[[The crisis was completely avoided|La crisis fue completamente evitada]]', '[[No one lost money|Nadie perdió dinero]]'], correctAnswer: 0, explanation: '[[The text|El texto]] [[expresses|expresa]] [[multiple regrets|múltiples arrepentimientos]].' },
  { question: '[[I wish|Ojalá]] ____ ____ [[invested|invertido]] [[in gold|en oro]] [[before the crash|antes del crash]].', options: ['[[I had|hubiera]]', '[[I have|he]]', '[[I would have|habría]]'], correctAnswer: 0, explanation: '[[Wish + past perfect|Wish + pasado perfecto]].' },
  { question: '[[If the crisis|Si la crisis]] ____ ____ [[been avoided|sido evitada]], [[many|muchos]] ____ ____ [[saved|salvado]] [[their homes|sus hogares]].', options: ['[[had|hubiera]] ... [[would have|habrían]]', '[[have|ha]] ... [[would have|habrían]]'], correctAnswer: 0, explanation: '[[Third conditional|Tercer condicional]].' },
];

export const UNIT_51_LESSON_3_READING: Exercise[] = QUESTIONS.map((q, i) => ({
  id: `b2-u51-l3-r${i + 1}`,
  type: 'reading',
  level: 'B2',
  topic: 'business-economy',
  difficulty: 'medium',
  transcript: READING_TRANSCRIPT,
  content: { title: LESSON_TITLE, instructions: INSTRUCTIONS, questions: [q] },
  topicName: 'Reading',
}));
