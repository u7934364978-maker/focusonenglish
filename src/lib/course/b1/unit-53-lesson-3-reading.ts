/**
 * Unidad 53 B1 — Lección 3: Comprensión lectora (Modals review)
 * 15 actividades
 */

import { Exercise } from '@/lib/exercise-generator';

const LESSON_TITLE = '[[Reading|Comprensión lectora]]';
const READING_TRANSCRIPT = `[[Modal verbs|Los verbos modales]] [[are|son]] [[special|especiales]] [[verbs|verbos]] [[in|en]] [[English|inglés]] [[that|que]] [[express|expresan]] [[obligation|obligación]], [[possibility|posibilidad]], [[ability|capacidad]] [[and|y]] [[advice|consejo]]. [[Must|Debe]] [[and|y]] [[have to|tener que]] [[express|expresan]] [[obligation|obligación]]. [[You must wear a seatbelt|debes usar el cinturón]] [[when|cuando]] [[driving|conduces]]. [[Must|Debe]] [[can also|también puede]] [[express|expresar]] [[certainty|certeza]] [[when|cuando]] [[we|nosotros]] [[deduce|deducimos]] [[something|algo]]: [[She must be at home|debe estar en casa]] [[–|–]] [[her car is there|su coche está allí]]. [[Might|Podría]] [[and|y]] [[could|podría]] [[express|expresan]] [[possibility|posibilidad]]. [[Can\'t|No puede]] [[expresses|expresa]] [[negative deduction|deducción negativa]] [[or|o]] [[impossibility|imposibilidad]]. [[Should|Debería]] [[gives|da]] [[advice|consejo]]: [[You should see a doctor|deberías ver a un médico]]. [[We|Nosotros]] [[use|usamos]] [[could|podía]] [[for|para]] [[past ability|capacidad pasada]]: [[I could swim when I was young|podía nadar cuando era joven]].`;

const INSTRUCTIONS = 'Lee el texto de abajo. Después responde las preguntas.';

const QUESTIONS = [
  { question: '[[What|Qué]] [[do modal verbs express|expresan los verbos modales]]?', options: ['[[Only obligation|solo obligación]]', '[[Obligation, possibility, ability and advice|obligación, posibilidad, capacidad y consejo]]', '[[Only possibility|solo posibilidad]]'], correctAnswer: 1, explanation: '[[The text says|El texto dice]] "[[obligation, possibility, ability and advice|obligación, posibilidad, capacidad y consejo]]".' },
  { question: '[[Which|Cuáles]] [[modals|modales]] [[express|expresan]] [[obligation|obligación]]?', options: ['[[Might and could|podría y podría]]', '[[Must and have to|debe y tener que]]', '[[Can\'t and shouldn\'t|no puede y no debería]]'], correctAnswer: 1, explanation: '[[The text says|El texto dice]] "[[Must and have to express obligation|debe y tener que expresan obligación]]".' },
  { question: '[[What|Qué]] [[example|ejemplo]] [[does the text give|da el texto]] [[for|para]] [[obligation|obligación]]?', options: ['[[You should see a doctor|deberías ver a un médico]]', '[[You must wear a seatbelt|debes usar el cinturón]]', '[[I could swim|podía nadar]]'], correctAnswer: 1, explanation: '[[The text says|El texto dice]] "[[You must wear a seatbelt when driving|debes usar el cinturón cuando conduces]]".' },
  { question: '[[When|Cuándo]] [[can must|puede must]] [[express|expresar]] [[certainty|certeza]]?', options: ['[[Never|nunca]]', '[[When we deduce something|cuando deducimos algo]]', '[[Only for obligation|solo para obligación]]'], correctAnswer: 1, explanation: '[[The text says|El texto dice]] "[[Must can also express certainty when we deduce something|debe también puede expresar certeza cuando deducimos algo]]".' },
  { question: '[[Which|Cuáles]] [[modals|modales]] [[express|expresan]] [[possibility|posibilidad]]?', options: ['[[Must and have to|debe y tener que]]', '[[Might and could|podría y podría]]', '[[Can\'t and shouldn\'t|no puede y no debería]]'], correctAnswer: 1, explanation: '[[The text says|El texto dice]] "[[Might and could express possibility|podría y podría expresan posibilidad]]".' },
  { question: '[[What|Qué]] [[does can\'t express|expresa can\'t]]?', options: ['[[Obligation|obligación]]', '[[Negative deduction or impossibility|deducción negativa o imposibilidad]]', '[[Advice|consejo]]'], correctAnswer: 1, explanation: '[[The text says|El texto dice]] "[[Can\'t expresses negative deduction or impossibility|no puede expresa deducción negativa o imposibilidad]]".' },
  { question: '[[What|Qué]] [[does should give|da should]]?', options: ['[[Obligation|obligación]]', '[[Advice|consejo]]', '[[Possibility|posibilidad]]'], correctAnswer: 1, explanation: '[[The text says|El texto dice]] "[[Should gives advice|debería da consejo]]".' },
  { question: '[[What|Cuál]] [[is|es]] [[the main topic|el tema principal]] [[of|del]] [[this text|este texto]]?', options: ['[[Seatbelts|Cinturones]]', '[[Modal verbs in English|Verbos modales en inglés]]', '[[Swimming|Natación]]'], correctAnswer: 1, explanation: '[[The text|El texto]] [[explains|explica]] [[modal verbs|los verbos modales]].' },
  { question: '[[We|Nosotros]] [[use|usamos]] [[could|podía]] [[for|para]] [[past ability|capacidad pasada]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'True', explanation: '[[True|Verdadero]]. [[The text says|El texto dice]] "[[We use could for past ability|usamos podía para capacidad pasada]]".' },
  { question: '[[The example|El ejemplo]] [[for|para]] [[deduction|deducción]] [[is|es]] [[She must be at home|debe estar en casa]] [[–|–]] [[her car is there|su coche está allí]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'True', explanation: '[[True|Verdadero]]. [[The text says|El texto dice]] "[[She must be at home – her car is there|debe estar en casa – su coche está allí]]".' },
  { question: '[[Modal verbs|Los verbos modales]] [[are|son]] [[special|especiales]] [[verbs|verbos]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'True', explanation: '[[True|Verdadero]]. [[The text says|El texto dice]] "[[Modal verbs are special verbs|los verbos modales son verbos especiales]]".' },
  { question: '[[What|Cuál]] [[is|es]] [[the example|el ejemplo]] [[for|para]] [[advice|consejo]]?', options: ['[[You must wear a seatbelt|debes usar el cinturón]]', '[[You should see a doctor|deberías ver a un médico]]', '[[I could swim|podía nadar]]'], correctAnswer: 1, explanation: '[[The text says|El texto dice]] "[[You should see a doctor|deberías ver a un médico]]".' },
  { question: '[[What|Qué]] [[does "deduce"|significa "deducir"]] [[mean|significa]]?', options: ['[[Forget|olvidar]]', '[[Make a logical conclusion from evidence|hacer una conclusión lógica de evidencia]]', '[[Guess randomly|adivinar al azar]]'], correctAnswer: 1, explanation: '[[Deduce|Deducir]] [[means|significa]] [[make a logical conclusion|hacer una conclusión lógica]].' },
  { question: '[[The text|El texto]] [[gives|da]] [[examples|ejemplos]] [[for|para]] [[each|cada]] [[use|uso]] [[of|de]] [[modals|modales]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'True', explanation: '[[True|Verdadero]]. [[Obligation|Obligación]], [[deduction|deducción]], [[possibility|posibilidad]], [[advice|consejo]], [[ability|capacidad]].' },
  { question: '[[How many|Cuántos]] [[types of modals|tipos de modales]] [[does the text mention|menciona el texto]]?', options: ['[[Two|Dos]]', '[[Three|Tres]]', '[[Several|Varios]]'], correctAnswer: 2, explanation: '[[The text mentions|El texto menciona]] [[must|debe]], [[have to|tener que]], [[might|podría]], [[could|podría]], [[can\'t|no puede]], [[should|debería]].' },
];

export const UNIT_53_LESSON_3_READING: Exercise[] = QUESTIONS.map((q, i) => ({
  id: `b1-u53-l3-r${i + 1}`,
  type: 'reading',
  level: 'B1',
  topic: 'Modals',
  difficulty: 'easy',
  transcript: READING_TRANSCRIPT,
  content: { title: LESSON_TITLE, instructions: INSTRUCTIONS, questions: [q] },
  topicName: 'Reading',
}));
