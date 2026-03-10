/**
 * Unidad 23 B1 — Lección 4: Comprensión auditiva (Phrasal verbs 1, Daily activities)
 * 15 actividades
 */

import { Exercise } from '@/lib/exercise-generator';

const LESSON_TITLE = '[[Listening|Comprensión auditiva]]';
const LISTENING_TRANSCRIPT = `[[Hi|Hola]], [[I|yo]] [[am|soy]] [[Lisa|Lisa]] [[and|y]] [[I|yo]] [[want|quiero]] [[to tell|contar]] [[you|te]] [[about|sobre]] [[my|mi]] [[day|día]]. [[Every|Cada]] [[morning|mañana]] [[I|yo]] [[turn on|enciendo]] [[the|la]] [[coffee machine|máquina de café]] [[first|primero]]. [[Then|Luego]] [[I|yo]] [[put on|me pongo]] [[my|mi]] [[uniform|uniforme]] [[and|y]] [[go|voy]] [[to work|al trabajo]]. [[I|yo]] [[work|trabajo]] [[in|en]] [[a|una]] [[hospital|hospital]] [[and|y]] [[I|yo]] [[look after|cuido]] [[patients|pacientes]]. [[When|Cuando]] [[patients|los pacientes]] [[are|están]] [[anxious|ansiosos]], [[I|yo]] [[tell|les digo]] [[them|a ellos]] [[to calm down|que se calmen]]. [[I|yo]] [[always|siempre]] [[turn off|apago]] [[the|las]] [[computers|computadoras]] [[before|antes]] [[leaving|salir]] [[the|la]] [[office|oficina]]. [[Last week|La semana pasada]] [[I|yo]] [[had to|tuve que]] [[hurry up|darme prisa]] [[because|porque]] [[I|yo]] [[was|estaba]] [[late|tarde]]. [[I|yo]] [[took off|me quité]] [[my|mi]] [[coat|abrigo]] [[when|cuando]] [[I|yo]] [[arrived|llegué]] [[home|casa]].`;

const INSTRUCTIONS = 'Escucha el audio. Puedes leer la transcripción. Después responde las preguntas.';

const QUESTIONS = [
  { question: '[[What|Qué]] [[does Lisa turn on|enciende Lisa]] [[first|primero]] [[in the morning|por la mañana]]?', options: ['[[the TV|la tele]]', '[[the coffee machine|la máquina de café]]', '[[the radio|la radio]]'], correctAnswer: 1, explanation: '[[She says|Dice]] "[[I turn on the coffee machine first|enciendo la máquina de café primero]]".' },
  { question: '[[What|Qué]] [[does Lisa put on|se pone Lisa]] [[before work|antes de trabajar]]?', options: ['[[her uniform|su uniforme]]', '[[her coat|su abrigo]]', '[[her shoes|sus zapatos]]'], correctAnswer: 0, explanation: '[[She says|Dice]] "[[I put on my uniform|me pongo mi uniforme]]".' },
  { question: '[[Where|Dónde]] [[does Lisa work|trabaja Lisa]]?', options: ['[[in a school|en una escuela]]', '[[in a hospital|en un hospital]]', '[[in an office|en una oficina]]'], correctAnswer: 1, explanation: '[[She says|Dice]] "[[I work in a hospital|trabajo en un hospital]]".' },
  { question: '[[What|Qué]] [[does Lisa look after|cuida Lisa]]?', options: ['[[children|niños]]', '[[patients|pacientes]]', '[[animals|animales]]'], correctAnswer: 1, explanation: '[[She says|Dice]] "[[I look after patients|cuido a los pacientes]]".' },
  { question: '[[What|Qué]] [[does Lisa tell patients|les dice Lisa a los pacientes]] [[when they\'re anxious|cuando están ansiosos]]?', options: ['[[to hurry up|que se den prisa]]', '[[to calm down|que se calmen]]', '[[to wait|que esperen]]'], correctAnswer: 1, explanation: '[[She says|Dice]] "[[I tell them to calm down|les digo que se calmen]]".' },
  { question: '[[What|Qué]] [[does Lisa turn off|apaga Lisa]] [[before leaving|antes de salir]]?', options: ['[[the lights|las luces]]', '[[the computers|las computadoras]]', '[[the heating|la calefacción]]'], correctAnswer: 1, explanation: '[[She says|Dice]] "[[I always turn off the computers|siempre apago las computadoras]]".' },
  { question: '[[Why|Por qué]] [[did Lisa have to hurry up|tuvo que darse prisa Lisa]] [[last week|la semana pasada]]?', options: ['[[she was late|estaba tarde]]', '[[she had a meeting|tenía una reunión]]', '[[the bus was coming|venía el autobús]]'], correctAnswer: 0, explanation: '[[She says|Dice]] "[[I had to hurry up because I was late|tuve que darme prisa porque estaba tarde]]".' },
  { question: '[[What|Qué]] [[did Lisa take off|se quitó Lisa]] [[when she arrived home|cuando llegó a casa]]?', options: ['[[her shoes|sus zapatos]]', '[[her coat|su abrigo]]', '[[her uniform|su uniforme]]'], correctAnswer: 1, explanation: '[[She says|Dice]] "[[I took off my coat when I arrived home|me quité el abrigo cuando llegué a casa]]".' },
  { question: '[[Lisa|Lisa]] [[works|trabaja]] [[in|en]] [[a hospital|un hospital]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'True', explanation: '[[True|Verdadero]]. [[The text says|El texto dice]] "[[I work in a hospital|trabajo en un hospital]]".' },
  { question: '[[Lisa|Lisa]] [[turns on|enciende]] [[the TV|la tele]] [[first|primero]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'False', explanation: '[[False|Falso]]. [[She|Ella]] [[turns on the coffee machine|enciende la máquina de café]].' },
  { question: '[[What|Cuál]] [[is|es]] [[the main topic|el tema principal]] [[of|del]] [[this listening|esta escucha]]?', options: ['[[Travel|Viajes]]', '[[Daily routine and phrasal verbs|Rutina diaria y phrasal verbs]]', '[[Food|Comida]]'], correctAnswer: 1, explanation: '[[The listening|La escucha]] [[describes|describe]] [[Lisa\'s daily routine|la rutina diaria de Lisa]].' },
  { question: '[[Lisa|Lisa]] [[looks after|cuida]] [[patients|pacientes]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'True', explanation: '[[True|Verdadero]]. [[The text says|El texto dice]] "[[I look after patients|cuido a los pacientes]]".' },
  { question: '[[Lisa|Lisa]] [[tells|dice]] [[patients|a los pacientes]] [[to calm down|que se calmen]] [[when|cuando]] [[they\'re anxious|están ansiosos]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'True', explanation: '[[True|Verdadero]]. [[The text says|El texto dice]] "[[I tell them to calm down|les digo que se calmen]]".' },
  { question: '[[Lisa|Lisa]] [[turns off|apaga]] [[the computers|las computadoras]] [[before leaving|antes de salir]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'True', explanation: '[[True|Verdadero]]. [[The text says|El texto dice]] "[[I always turn off the computers before leaving|siempre apago las computadoras antes de salir]]".' },
  { question: '[[Lisa|Lisa]] [[took off|se quitó]] [[her coat|su abrigo]] [[when|cuando]] [[she arrived home|llegó a casa]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'True', explanation: '[[True|Verdadero]]. [[The text says|El texto dice]] "[[I took off my coat when I arrived home|me quité el abrigo cuando llegué a casa]]".' },
];

export const UNIT_23_LESSON_4_LISTENING: Exercise[] = QUESTIONS.map((q, i) => ({
  id: `b1-u23-l4-l${i + 1}`,
  type: 'listening',
  level: 'B1',
  topic: 'Daily Activities',
  difficulty: 'easy',
  transcript: LISTENING_TRANSCRIPT,
  content: { title: LESSON_TITLE, instructions: INSTRUCTIONS, questions: [q] },
  topicName: 'Listening',
}));
