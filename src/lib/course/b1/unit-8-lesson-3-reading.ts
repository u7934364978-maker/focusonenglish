/**
 * Unidad 8 B1 — Lección 3: Comprensión lectora (Modal deduction, Personal feelings)
 * 15 actividades
 */

import { Exercise } from '@/lib/exercise-generator';

const LESSON_TITLE = '[[Reading|Comprensión lectora]]';
const READING_TRANSCRIPT = `[[I|Yo]] [[think|creo]] [[my neighbour|mi vecino]] [[must|debe]] [[be|estar]] [[very happy|muy feliz]] [[these days|estos días]] — [[I|yo]] [[saw|vi]] [[him|a él]] [[moving|mudándose]] [[into|a]] [[a new house|una casa nueva]] [[last week|la semana pasada]]. [[He|Él]] [[might|podría]] [[have|tener]] [[got|conseguido]] [[a promotion|un ascenso]] [[at work|en el trabajo]] [[because|porque]] [[he|él]] [[looks|parece]] [[more confident|más seguro]]. [[His wife|Su esposa]] [[can\'t|no puede]] [[be|estar]] [[angry|enfadada]] [[with|con]] [[him|él]] — [[they|ellos]] [[always|siempre]] [[walk|caminan]] [[together|juntos]] [[in the park|en el parque]] [[smiling|sonriendo]]. [[She|Ella]] [[must|debe]] [[feel|sentirse]] [[relieved|aliviada]] [[about|sobre]] [[the move|la mudanza]] [[too|también]]. [[I|Yo]] [[might|podría]] [[invite|invitar]] [[them|a ellos]] [[for|a]] [[coffee|café]] [[sometime|algún día]] [[to|para]] [[congratulate|felicitar]] [[them|a ellos]].`;

const INSTRUCTIONS = 'Lee el texto de abajo. Después responde las preguntas.';

const QUESTIONS = [
  { question: '[[What|Qué]] [[does the writer think|cree el escritor]] [[about the neighbour|sobre el vecino]]?', options: ['[[He must be sad|Debe estar triste]]', '[[He must be happy|Debe estar feliz]]', '[[He might be tired|Podría estar cansado]]'], correctAnswer: 1, explanation: '[[The text says|El texto dice]] "[[my neighbour must be very happy|mi vecino debe estar muy feliz]]".' },
  { question: '[[Why|Por qué]] [[does the writer think so|cree el escritor eso]]?', options: ['[[He got married|Se casó]]', '[[He moved into a new house|Se mudó a una casa nueva]]', '[[He retired|Se jubiló]]'], correctAnswer: 1, explanation: '[[The text says|El texto dice]] "[[I saw him moving into a new house|lo vi mudándose a una casa nueva]]".' },
  { question: '[[What|Qué]] [[might the neighbour have got|podría haber conseguido el vecino]]?', options: ['[[a new car|un coche nuevo]]', '[[a promotion at work|un ascenso en el trabajo]]', '[[a holiday|unas vacaciones]]'], correctAnswer: 1, explanation: '[[The text says|El texto dice]] "[[He might have got a promotion at work|podría haber conseguido un ascenso en el trabajo]]".' },
  { question: '[[How|Cómo]] [[does the neighbour look|parece el vecino]]?', options: ['[[more tired|más cansado]]', '[[more confident|más seguro]]', '[[more anxious|más ansioso]]'], correctAnswer: 1, explanation: '[[The text says|El texto dice]] "[[he looks more confident|parece más seguro]]".' },
  { question: '[[Can|Puede]] [[the neighbour\'s wife|la esposa del vecino]] [[be angry|estar enfadada]]?', options: ['[[Yes|Sí]]', '[[No|No]]'], correctAnswer: 'No', explanation: '[[The text says|El texto dice]] "[[His wife can\'t be angry|su esposa no puede estar enfadada]]".' },
  { question: '[[What|Qué]] [[do they do|hacen ellos]] [[together|juntos]]?', options: ['[[They work together|Trabajan juntos]]', '[[They walk in the park|Caminan en el parque]]', '[[They travel together|Viajan juntos]]'], correctAnswer: 1, explanation: '[[The text says|El texto dice]] "[[they always walk together in the park|siempre caminan juntos en el parque]]".' },
  { question: '[[How|Cómo]] [[must the wife feel|debe sentirse la esposa]]?', options: ['[[anxious|ansiosa]]', '[[relieved|aliviada]]', '[[disappointed|decepcionada]]'], correctAnswer: 1, explanation: '[[The text says|El texto dice]] "[[She must feel relieved about the move|debe sentirse aliviada por la mudanza]]".' },
  { question: '[[What|Qué]] [[might the writer do|podría hacer el escritor]]?', options: ['[[visit them|visitarlos]]', '[[invite them for coffee|invitarlos a café]]', '[[send a card|enviar una tarjeta]]'], correctAnswer: 1, explanation: '[[The text says|El texto dice]] "[[I might invite them for coffee|podría invitarlos a café]]".' },
  { question: '[[The writer|El escritor]] [[is sure|está seguro]] [[the neighbour is happy|el vecino está feliz]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'True', explanation: '[[True|Verdadero]]. [[Uses must|Usa must]] [[for strong deduction|para deducción fuerte]].' },
  { question: '[[The neighbour|El vecino]] [[definitely|definitivamente]] [[got a promotion|consiguió un ascenso]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'False', explanation: '[[False|Falso]]. [[Might indicates possibility|Might indica posibilidad]], [[not certainty|no certeza]].' },
  { question: '[[What|Cuál]] [[is|es]] [[the main topic|el tema principal]] [[of|del]] [[this text|este texto]]?', options: ['[[Work|Trabajo]]', '[[Deductions about a neighbour\'s feelings|Deducciones sobre los sentimientos de un vecino]]', '[[Moving house|Mudarse de casa]]'], correctAnswer: 1, explanation: '[[The text|El texto]] [[makes deductions|hace deducciones]] [[about the neighbour|sobre el vecino]].' },
  { question: '[[Which modal|Qué modal]] [[is used for|se usa para]] [[strong deduction|deducción fuerte]]?', options: ['[[might|might]]', '[[must|must]]', '[[can\'t|can\'t]]'], correctAnswer: 1, explanation: '[[Must|Must]] [[for almost certain|para casi seguro]].' },
  { question: '[[The writer|El escritor]] [[knows|sabe]] [[the neighbour well|al vecino bien]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'False', explanation: '[[False|Falso]]. [[The writer|El escritor]] [[makes deductions|hace deducciones]] [[from observation|desde la observación]].' },
  { question: '[[Which modal|Qué modal]] [[expresses|expresa]] [[impossibility|imposibilidad]]?', options: ['[[must|must]]', '[[might|might]]', "[[can't|can't]]"], correctAnswer: 2, explanation: "[[Can't|Can't]] [[for impossibility|para imposibilidad]]." },
  { question: '[[The writer|El escritor]] [[will definitely|definitivamente]] [[invite them|los invitará]] [[for coffee|a café]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'False', explanation: '[[False|Falso]]. [[Might|Might]] [[indicates possibility|indica posibilidad]], [[not a plan|no un plan]].' },
];

export const UNIT_8_LESSON_3_READING: Exercise[] = QUESTIONS.map((q, i) => ({
  id: `b1-u8-l3-r${i + 1}`,
  type: 'reading',
  level: 'B1',
  topic: 'Personal Feelings',
  difficulty: 'easy',
  transcript: READING_TRANSCRIPT,
  content: { title: LESSON_TITLE, instructions: INSTRUCTIONS, questions: [q] },
  topicName: 'Reading',
}));
