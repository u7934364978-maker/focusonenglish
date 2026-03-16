/**
 * Unidad 45 B2 — Lección 4: Comprensión auditiva (Space Exploration)
 * 13 preguntas (B2: transcripción sobre exploración espacial y modales de deducción)
 */

import { Exercise } from '@/lib/exercise-generator';

const LESSON_TITLE = '[[Listening|Comprensión auditiva]]';
const LISTENING_TRANSCRIPT = `[[Hi|Hola]], [[I'm|soy]] [[Dr. Chen|Dr. Chen]] [[and|y]] [[I work|trabajo]] [[at NASA|en la NASA]]. [[The signal|La señal]] [[we received|que recibimos]] [[must be|debe ser]] [[from the Mars rover|del vehículo explorador de Marte]] — [[it matches|coincide con]] [[our frequency|nuestra frecuencia]]. [[That object|Ese objeto]] [[can't be|no puede ser]] [[a satellite|un satélite]] — [[it's moving|se mueve]] [[too fast|demasiado rápido]]. [[The astronauts|Los astronautas]] [[might have discovered|podrían haber descubierto]] [[something new|algo nuevo]] — [[we're analysing|estamos analizando]] [[the data|los datos]]. [[There|]] [[could be|podría haber]] [[ice|hielo]] [[on the moon|en la Luna]] — [[the probe|la sonda]] [[detected|detectó]] [[signs|señales]]. [[By now|Para ahora]] [[the mission|la misión]] [[must have reached|debe haber alcanzado]] [[its destination|su destino]].`;

const INSTRUCTIONS = 'Escucha el audio (o lee la transcripción). Después responde las preguntas.';

const QUESTIONS = [
  { question: '[[Who is speaking|Quién habla]]?', options: ['[[Dr. Chen, who works at NASA|Dr. Chen, que trabaja en la NASA]]', '[[An astronaut|Un astronauta]]', '[[A pilot|Un piloto]]'], correctAnswer: 0, explanation: '[[The speaker says|El hablante dice]] "[[I\'m Dr. Chen and I work at NASA|soy Dr. Chen y trabajo en la NASA]]".' },
  { question: '[[What|Qué]] [[must the signal be|debe ser la señal]]?', options: ['[[From the Mars rover — it matches our frequency|Del vehículo explorador de Marte — coincide con nuestra frecuencia]]', '[[From Jupiter|De Júpiter]]', '[[From Earth|De la Tierra]]'], correctAnswer: 0, explanation: '[[The speaker says|El hablante dice]] "[[the signal must be from the Mars rover — it matches our frequency|la señal debe ser del vehículo explorador de Marte — coincide con nuestra frecuencia]]".' },
  { question: '[[Why|Por qué]] [[can\'t that object be a satellite|ese objeto no puede ser un satélite]]?', options: ['[[Because it\'s moving too fast|Porque se mueve demasiado rápido]]', '[[Because it\'s too small|Porque es demasiado pequeño]]', '[[Because it\'s at night|Porque es de noche]]'], correctAnswer: 0, explanation: '[[The speaker says|El hablante dice]] "[[that object can\'t be a satellite — it\'s moving too fast|ese objeto no puede ser un satélite — se mueve demasiado rápido]]".' },
  { question: '[[What|Qué]] [[might the astronauts have discovered|podrían haber descubierto los astronautas]]?', options: ['[[Something new — we\'re analysing the data|Algo nuevo — estamos analizando los datos]]', '[[Water|Agua]]', '[[Aliens|Alienígenas]]'], correctAnswer: 0, explanation: '[[The speaker says|El hablante dice]] "[[the astronauts might have discovered something new — we\'re analysing the data|los astronautas podrían haber descubierto algo nuevo — estamos analizando los datos]]".' },
  { question: '[[What|Qué]] [[could there be|podría haber]] [[on the moon|en la Luna]]?', options: ['[[Ice — the probe detected signs|Hielo — la sonda detectó señales]]', '[[Life|Vida]]', '[[Water|Agua líquida]]'], correctAnswer: 0, explanation: '[[The speaker says|El hablante dice]] "[[there could be ice on the moon — the probe detected signs|podría haber hielo en la Luna — la sonda detectó señales]]".' },
  { question: '[[What|Qué]] [[must the mission have done|debe haber hecho la misión]] [[by now|para ahora]]?', options: ['[[Reached its destination|Alcanzado su destino]]', '[[Failed|Fallado]]', '[[Returned to Earth|Regresado a la Tierra]]'], correctAnswer: 0, explanation: '[[The speaker says|El hablante dice]] "[[by now the mission must have reached its destination|para ahora la misión debe haber alcanzado su destino]]".' },
  { question: '[[What|Cuál]] [[is|es]] [[the main idea|la idea principal]] [[of the listening|de la escucha]]?', options: ['[[Deductions about space signals and discoveries|Deducciones sobre señales espaciales y descubrimientos]]', '[[NASA is the best|La NASA es la mejor]]', '[[Aliens exist|Los alienígenas existen]]'], correctAnswer: 0, explanation: '[[The speaker|El hablante]] [[uses|usa]] [[modal deduction|deducción modal]] [[throughout|a lo largo]].' },
  { question: '[[Which modal|Qué modal]] [[expresses impossibility|expresa imposibilidad]] [[in the listening|en la escucha]]?', options: ['[[can\'t|can\'t]]', '[[must|must]]', '[[might|might]]'], correctAnswer: 0, explanation: '[[Can\'t = impossibility|Can\'t = imposibilidad]].' },
  { question: '[[What|Qué]] [[vocabulary|vocabulario]] [[is central|es central]] [[in this listening|en esta escucha]]?', options: ['[[Mars rover|vehículo explorador]], [[satellite|satélite]], [[probe|sonda]], [[mission|misión]]', '[[sport|deporte]], [[music|música]]', '[[weather|tiempo]], [[food|comida]]'], correctAnswer: 0, explanation: '[[The listening|La escucha]] [[focuses on|se centra en]] [[space vocabulary|vocabulario espacial]].' },
  { question: '[[What|Qué]] [[can we infer|podemos inferir]] [[about Dr. Chen|sobre el Dr. Chen]]?', options: ['[[He uses evidence to make deductions|Usa evidencia para hacer deducciones]]', '[[He believes in aliens|Cree en alienígenas]]', '[[He works on Mars|Trabaja en Marte]]'], correctAnswer: 0, explanation: '[[He|Él]] [[uses|usa]] [[must, can\'t, might, could|must, can\'t, might, could]] [[based on evidence|basado en evidencia]].' },
  { question: '[[That|Eso]] ____ [[be|ser]] [[a star|una estrella]] — [[it\'s moving|se mueve]].', options: ['[[can\'t|no puede]]', '[[must|debe]]'], correctAnswer: 0, explanation: '[[Can\'t = impossibility|Can\'t = imposibilidad]].' },
  { question: '[[They|Ellos]] ____ [[have found|haber encontrado]] [[water|agua]].', options: ['[[might|podrían]]', '[[must|deben]]'], correctAnswer: 0, explanation: '[[Might have = possibility in past|Might have = posibilidad en pasado]].' },
  { question: '[[The probe|La sonda]] ____ [[be|estar]] [[in orbit|en órbita]] [[now|ahora]].', options: ['[[must|debe]]', '[[can\'t|no puede]]'], correctAnswer: 0, explanation: '[[Must = strong deduction|Must = deducción fuerte]].' },
];

export const UNIT_45_LESSON_4_LISTENING: Exercise[] = QUESTIONS.map((q, i) => ({
  id: `b2-u45-l4-l${i + 1}`,
  type: 'listening',
  level: 'B2',
  topic: 'science-research',
  difficulty: 'medium',
  transcript: LISTENING_TRANSCRIPT,
  content: { title: LESSON_TITLE, instructions: INSTRUCTIONS, questions: [q] },
  topicName: 'Listening',
}));
