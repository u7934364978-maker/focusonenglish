/**
 * Unidad 45 B2 — Lección 3: Comprensión lectora (Space Exploration)
 * 13 preguntas (B2: texto sobre exploración espacial y modales de deducción)
 */

import { Exercise } from '@/lib/exercise-generator';

const LESSON_TITLE = '[[Reading|Comprensión lectora]]';
const READING_TRANSCRIPT = `[[The signal|La señal]] [[from the probe|de la sonda]] [[must be|debe ser]] [[from Jupiter|de Júpiter]] — [[we launched it|la lanzamos]] [[years ago|hace años]]. [[Life|Vida]] [[might exist|podría existir]] [[on other planets|en otros planetas]] — [[scientists|los científicos]] [[are not sure|no están seguros]] [[yet|aún]]. [[That light|Esa luz]] [[can't be|no puede ser]] [[a star|una estrella]] — [[stars don't move|las estrellas no se mueven]] [[like that|así]]. [[The astronauts|Los astronautas]] [[must have seen|deben haber visto]] [[something amazing|algo increíble]] — [[they looked|parecían]] [[very excited|muy emocionados]]. [[The mission|La misión]] [[could have succeeded|podría haber tenido éxito]] — [[we received|recibimos]] [[positive data|datos positivos]]. [[There|]] [[might be|podría haber]] [[water|agua]] [[on Mars|en Marte]] — [[recent discoveries|descubrimientos recientes]] [[suggest it|lo sugieren]].`;

const INSTRUCTIONS = 'Lee el texto sobre exploración espacial. Después responde las preguntas.';

const QUESTIONS = [
  { question: '[[What|Qué]] [[must the signal be|debe ser la señal]]?', options: ['[[From Jupiter, because we launched the probe years ago|De Júpiter, porque lanzamos la sonda hace años]]', '[[From Mars|De Marte]]', '[[From Earth|De la Tierra]]'], correctAnswer: 0, explanation: '[[The text says|El texto dice]] "[[the signal must be from Jupiter — we launched it years ago|la señal debe ser de Júpiter — la lanzamos hace años]]".' },
  { question: '[[What|Qué]] [[might exist|podría existir]] [[on other planets|en otros planetas]]?', options: ['[[Life — scientists are not sure yet|Vida — los científicos no están seguros aún]]', '[[Water|Agua]]', '[[Aliens|Alienígenas]]'], correctAnswer: 0, explanation: '[[The text says|El texto dice]] "[[life might exist on other planets — scientists are not sure yet|la vida podría existir en otros planetas — los científicos no están seguros aún]]".' },
  { question: '[[Why|Por qué]] [[can\'t that light be a star|esa luz no puede ser una estrella]]?', options: ['[[Because stars don\'t move like that|Porque las estrellas no se mueven así]]', '[[Because it\'s too bright|Porque es demasiado brillante]]', '[[Because it\'s at night|Porque es de noche]]'], correctAnswer: 0, explanation: '[[The text says|El texto dice]] "[[that light can\'t be a star — stars don\'t move like that|esa luz no puede ser una estrella — las estrellas no se mueven así]]".' },
  { question: '[[What|Qué]] [[must the astronauts have seen|deben haber visto los astronautas]]?', options: ['[[Something amazing — they looked very excited|Algo increíble — parecían muy emocionados]]', '[[A UFO|Un OVNI]]', '[[Mars|Marte]]'], correctAnswer: 0, explanation: '[[The text says|El texto dice]] "[[the astronauts must have seen something amazing — they looked very excited|los astronautas deben haber visto algo increíble — parecían muy emocionados]]".' },
  { question: '[[What|Qué]] [[could the mission have done|podría haber hecho la misión]]?', options: ['[[Succeeded — we received positive data|Tenido éxito — recibimos datos positivos]]', '[[Failed|Fallado]]', '[[Landed on Mars|Aterrizado en Marte]]'], correctAnswer: 0, explanation: '[[The text says|El texto dice]] "[[the mission could have succeeded — we received positive data|la misión podría haber tenido éxito — recibimos datos positivos]]".' },
  { question: '[[What|Qué]] [[might there be|podría haber]] [[on Mars|en Marte]]?', options: ['[[Water — recent discoveries suggest it|Agua — descubrimientos recientes lo sugieren]]', '[[Life|Vida]]', '[[Aliens|Alienígenas]]'], correctAnswer: 0, explanation: '[[The text says|El texto dice]] "[[there might be water on Mars — recent discoveries suggest it|podría haber agua en Marte — descubrimientos recientes lo sugieren]]".' },
  { question: '[[What|Cuál]] [[is|es]] [[the main idea|la idea principal]] [[of the text|del texto]]?', options: ['[[Deductions and possibilities about space exploration|Deducciones y posibilidades sobre exploración espacial]]', '[[Mars has water|Marte tiene agua]]', '[[Astronauts saw aliens|Los astronautas vieron alienígenas]]'], correctAnswer: 0, explanation: '[[The text|El texto]] [[uses|usa]] [[modal deduction|deducción modal]] [[throughout|a lo largo]].' },
  { question: '[[Which modal|Qué modal]] [[expresses strong deduction|expresa deducción fuerte]] [[in the text|en el texto]]?', options: ['[[must|must]]', '[[might|might]]', '[[can\'t|can\'t]]'], correctAnswer: 0, explanation: '[[Must = strong deduction|Must = deducción fuerte]].' },
  { question: '[[What|Qué]] [[vocabulary|vocabulario]] [[is key|es clave]] [[in this text|en este texto]]?', options: ['[[probe|sonda]], [[astronauts|astronautas]], [[mission|misión]], [[Mars|Marte]]', '[[sport|deporte]], [[music|música]]', '[[weather|tiempo]], [[food|comida]]'], correctAnswer: 0, explanation: '[[The text|El texto]] [[focuses on|se centra en]] [[space vocabulary|vocabulario espacial]].' },
  { question: '[[That|Eso]] ____ [[be|ser]] [[a meteor|un meteoro]] — [[it\'s too slow|es demasiado lento]].', options: ['[[can\'t|no puede]]', '[[must|debe]]'], correctAnswer: 0, explanation: '[[Can\'t = impossibility|Can\'t = imposibilidad]].' },
  { question: '[[They|Ellos]] ____ [[have landed|haber aterrizado]] [[by now|para ahora]].', options: ['[[must|deben]]', '[[might|podrían]]'], correctAnswer: 0, explanation: '[[Must have = strong past deduction|Must have = deducción fuerte en pasado]].' },
  { question: '[[What|Qué]] [[can we infer|podemos inferir]] [[about space exploration|sobre la exploración espacial]]?', options: ['[[It involves speculation and deduction|Implica especulación y deducción]]', '[[Everything is certain|Todo es cierto]]', '[[There are no mysteries|No hay misterios]]'], correctAnswer: 0, explanation: '[[The text|El texto]] [[uses|usa]] [[might, could, must, can\'t|might, could, must, can\'t]] [[for speculation|para especulación]].' },
  { question: '[[Life|Vida]] ____ [[exist|existir]] [[elsewhere|en otro lugar]] — [[we don\'t know|no sabemos]].', options: ['[[might|podría]]', '[[must|debe]]'], correctAnswer: 0, explanation: '[[Might = possibility|Might = posibilidad]].' },
];

export const UNIT_45_LESSON_3_READING: Exercise[] = QUESTIONS.map((q, i) => ({
  id: `b2-u45-l3-r${i + 1}`,
  type: 'reading',
  level: 'B2',
  topic: 'science-research',
  difficulty: 'medium',
  transcript: READING_TRANSCRIPT,
  content: { title: LESSON_TITLE, instructions: INSTRUCTIONS, questions: [q] },
  topicName: 'Reading',
}));
