/**
 * Unidad 32 B1 — Lección 4: Comprensión auditiva (Non-defining relative clauses, Environment)
 * 15 actividades
 */

import { Exercise } from '@/lib/exercise-generator';

const LESSON_TITLE = '[[Listening|Comprensión auditiva]]';
const LISTENING_TRANSCRIPT = `[[Hi|Hola]], [[I|yo]] [[am|soy]] [[Pablo|Pablo]]. [[My|Mi]] [[sister|hermana]] [[Ana|Ana]], [[who|que]] [[studies|estudia]] [[environmental science|ciencias ambientales]], [[always|siempre]] [[reminds|recuerda]] [[me|me]] [[to recycle|reciclar]]. [[The river|El río]], [[which|que]] [[flows|fluye]] [[through|a través de]] [[our town|nuestra ciudad]], [[was|era]] [[polluted|contaminado]] [[but|pero]] [[now|ahora]] [[it\'s|está]] [[cleaner|más limpio]]. [[Recycling|El reciclaje]], [[which|que]] [[I|yo]] [[used to ignore|solía ignorar]], [[is|es]] [[now|ahora]] [[part of|parte de]] [[my routine|mi rutina]]. [[Climate change|El cambio climático]], [[which|que]] [[affects|afecta]] [[everyone|a todos]], [[worries|preocupa]] [[me|me]]. [[Solar energy|La energía solar]], [[which|que]] [[is|es]] [[renewable|renovable]], [[is|es]] [[the future|el futuro]].`;

const INSTRUCTIONS = 'Escucha el audio. Puedes leer la transcripción. Después responde las preguntas.';

const QUESTIONS = [
  { question: '[[What|Qué]] [[does Pablo\'s sister study|estudia la hermana de Pablo]]?', options: ['[[medicine|medicina]]', '[[environmental science|ciencias ambientales]]', '[[law|derecho]]'], correctAnswer: 1, explanation: '[[He says|Dice]] "[[My sister Ana, who studies environmental science|mi hermana Ana, que estudia ciencias ambientales]]".' },
  { question: '[[What|Qué]] [[does Ana remind Pablo to do|recuerda Ana a Pablo que haga]]?', options: ['[[study more|estudiar más]]', '[[to recycle|reciclar]]', '[[eat healthily|comer sano]]'], correctAnswer: 1, explanation: '[[He says|Dice]] "[[always reminds me to recycle|siempre me recuerda reciclar]]".' },
  { question: '[[What|Qué]] [[was the river like before|era el río antes]]?', options: ['[[clean|limpio]]', '[[polluted|contaminado]]', '[[dry|seco]]'], correctAnswer: 1, explanation: '[[He says|Dice]] "[[The river, which flows through our town, was polluted|el río, que fluye por nuestra ciudad, estaba contaminado]]".' },
  { question: '[[What|Qué]] [[is the river like now|es el río ahora]]?', options: ['[[more polluted|más contaminado]]', '[[cleaner|más limpio]]', '[[the same|igual]]'], correctAnswer: 1, explanation: '[[He says|Dice]] "[[but now it\'s cleaner|pero ahora está más limpio]]".' },
  { question: '[[What|Qué]] [[did Pablo use to do with recycling|solía hacer Pablo con el reciclaje]]?', options: ['[[recycle everything|reciclar todo]]', '[[ignore it|ignorarlo]]', '[[teach others|enseñar a otros]]'], correctAnswer: 1, explanation: '[[He says|Dice]] "[[Recycling, which I used to ignore|el reciclaje, que solía ignorar]]".' },
  { question: '[[What|Qué]] [[is recycling now|es el reciclaje ahora]]?', options: ['[[part of his routine|parte de su rutina]]', '[[something he hates|algo que odia]]', '[[not important|no importante]]'], correctAnswer: 0, explanation: '[[He says|Dice]] "[[is now part of my routine|ahora es parte de mi rutina]]".' },
  { question: '[[What|Qué]] [[worries Pablo|preocupa a Pablo]]?', options: ['[[recycling|reciclaje]]', '[[climate change|cambio climático]]', '[[solar energy|energía solar]]'], correctAnswer: 1, explanation: '[[He says|Dice]] "[[Climate change, which affects everyone, worries me|el cambio climático, que afecta a todos, me preocupa]]".' },
  { question: '[[Pablo\'s sister|La hermana de Pablo]] [[studies|estudia]] [[environmental science|ciencias ambientales]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'True', explanation: '[[True|Verdadero]]. [[The text says|El texto dice]] "[[who studies environmental science|que estudia ciencias ambientales]]".' },
  { question: '[[The river|El río]] [[is still polluted|sigue contaminado]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'False', explanation: '[[False|Falso]]. [[It\'s cleaner now|Ahora está más limpio]].' },
  { question: '[[What|Cuál]] [[is|es]] [[the main topic|el tema principal]] [[of|del]] [[this listening|esta escucha]]?', options: ['[[Sports|Deportes]]', '[[Environment and recycling|Medio ambiente y reciclaje]]', '[[Food|Comida]]'], correctAnswer: 1, explanation: '[[The listening|La escucha]] [[talks about|habla de]] [[recycling|reciclaje]], [[river|río]], [[climate change|cambio climático]].' },
  { question: '[[Solar energy|La energía solar]] [[is|es]] [[renewable|renovable]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'True', explanation: '[[True|Verdadero]]. [[The text says|El texto dice]] "[[Solar energy, which is renewable|la energía solar, que es renovable]]".' },
  { question: '[[Pablo|Pablo]] [[recycles|recicla]] [[now|ahora]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'True', explanation: '[[True|Verdadero]]. [[The text says|El texto dice]] "[[is now part of my routine|ahora es parte de mi rutina]]".' },
  { question: '[[Climate change|El cambio climático]] [[affects|afecta]] [[everyone|a todos]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'True', explanation: '[[True|Verdadero]]. [[The text says|El texto dice]] "[[Climate change, which affects everyone|el cambio climático, que afecta a todos]]".' },
  { question: '[[Pablo|Pablo]] [[used to recycle|solía reciclar]] [[when he was young|cuando era joven]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'False', explanation: '[[False|Falso]]. [[He used to ignore recycling|Solía ignorar el reciclaje]].' },
  { question: '[[Solar energy|La energía solar]] [[is|es]] [[the future|el futuro]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'True', explanation: '[[True|Verdadero]]. [[The text says|El texto dice]] "[[Solar energy is the future|la energía solar es el futuro]]".' },
];

export const UNIT_32_LESSON_4_LISTENING: Exercise[] = QUESTIONS.map((q, i) => ({
  id: `b1-u32-l4-l${i + 1}`,
  type: 'listening',
  level: 'B1',
  topic: 'Environment',
  difficulty: 'easy',
  transcript: LISTENING_TRANSCRIPT,
  content: { title: LESSON_TITLE, instructions: INSTRUCTIONS, questions: [q] },
  topicName: 'Listening',
}));
