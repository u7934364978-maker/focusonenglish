/**
 * Unidad 27 B1 — Lección 4: Comprensión auditiva (Both, either, neither, Choices)
 * 15 actividades
 */

import { Exercise } from '@/lib/exercise-generator';

const LESSON_TITLE = '[[Listening|Comprensión auditiva]]';
const LISTENING_TRANSCRIPT = `[[Hi|Hola]], [[I|yo]] [[am|soy]] [[Carlos|Carlos]]. [[I|Yo]] [[need|necesito]] [[to|a]] [[make|tomar]] [[a|una]] [[decision|decisión]] [[about|sobre]] [[my|mi]] [[holiday|vacaciones]]. [[Both|Ambos]] [[Greece|Grecia]] [[and|y]] [[Italy|Italia]] [[are|son]] [[great|geniales]] [[options|opciones]]. [[I|Yo]] [[could|podría]] [[either|o]] [[go|ir]] [[to|a]] [[the|la]] [[beach|playa]] [[or|o]] [[visit|visitar]] [[the|las]] [[mountains|montañas]]. [[My|Mi]] [[wife|esposa]] [[doesn\'t|no]] [[like|le gusta]] [[cold|frío]] [[weather|clima]] [[so|así que]] [[neither|ni]] [[skiing|esquí]] [[nor|ni]] [[snow|nieve]] [[holidays|vacaciones]] [[are|son]] [[for|para]] [[us|nosotros]]. [[We|Nosotros]] [[both|ambos]] [[prefer|preferimos]] [[warm|clima]] [[weather|cálido]] [[and|y]] [[good|buena]] [[food|comida]]. [[In|En]] [[the|el]] [[end|final]] [[we|nosotros]] [[chose|elegimos]] [[Italy|Italia]] [[because|porque]] [[we|nosotros]] [[wanted|queríamos]] [[both|ambos]] [[culture|cultura]] [[and|y]] [[beach|playa]].`;

const INSTRUCTIONS = 'Escucha el audio. Puedes leer la transcripción. Después responde las preguntas.';

const QUESTIONS = [
  { question: '[[What|Qué]] [[does Carlos need to decide|necesita decidir Carlos]]?', options: ['[[his job|su trabajo]]', '[[his holiday|sus vacaciones]]', '[[his house|su casa]]'], correctAnswer: 1, explanation: '[[He says|Dice]] "[[I need to make a decision about my holiday|necesito tomar una decisión sobre mis vacaciones]]".' },
  { question: '[[Which|Cuáles]] [[two countries|dos países]] [[are great options|son grandes opciones]]?', options: ['[[Spain and France|España y Francia]]', '[[Greece and Italy|Grecia e Italia]]', '[[Portugal and Germany|Portugal y Alemania]]'], correctAnswer: 1, explanation: '[[He says|Dice]] "[[Both Greece and Italy are great options|ambos Grecia e Italia son grandes opciones]]".' },
  { question: '[[What|Qué]] [[two options|dos opciones]] [[could Carlos choose|podría elegir Carlos]]?', options: ['[[beach or mountains|playa o montañas]]', '[[city or countryside|ciudad o campo]]', '[[hotel or apartment|hotel o apartamento]]'], correctAnswer: 0, explanation: '[[He says|Dice]] "[[I could either go to the beach or visit the mountains|podría o ir a la playa o visitar las montañas]]".' },
  { question: '[[Why|Por qué]] [[aren\'t skiing holidays an option|no son las vacaciones de esquí una opción]]?', options: ['[[the wife doesn\'t like cold weather|a la esposa no le gusta el frío]]', '[[they are too expensive|son muy caras]]', '[[they don\'t ski|no esquían]]'], correctAnswer: 0, explanation: '[[He says|Dice]] "[[my wife doesn\'t like cold weather|a mi esposa no le gusta el clima frío]]".' },
  { question: '[[What|Qué]] [[do they both prefer|prefieren ambos]]?', options: ['[[cold weather and snow|clima frío y nieve]]', '[[warm weather and good food|clima cálido y buena comida]]', '[[rainy weather|clima lluvioso]]'], correctAnswer: 1, explanation: '[[He says|Dice]] "[[We both prefer warm weather and good food|ambos preferimos clima cálido y buena comida]]".' },
  { question: '[[What|Qué]] [[did they choose|eligieron]] [[in the end|al final]]?', options: ['[[Greece|Grecia]]', '[[Italy|Italia]]', '[[Spain|España]]'], correctAnswer: 1, explanation: '[[He says|Dice]] "[[we chose Italy|elegimos Italia]]".' },
  { question: '[[Why|Por qué]] [[did they choose Italy|eligieron Italia]]?', options: ['[[they wanted both culture and beach|querían ambos cultura y playa]]', '[[it was cheaper|era más barato]]', '[[they had been to Greece before|habían estado en Grecia antes]]'], correctAnswer: 0, explanation: '[[He says|Dice]] "[[we wanted both culture and beach|queríamos ambos cultura y playa]]".' },
  { question: '[[Carlos|Carlos]] [[wife|esposa]] [[likes|le gusta]] [[cold weather|el clima frío]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'False', explanation: '[[False|Falso]]. [[She doesn\'t like cold weather|No le gusta el clima frío]].' },
  { question: '[[Both|Ambos]] [[Greece|Grecia]] [[and|y]] [[Italy|Italia]] [[are|son]] [[options|opciones]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'True', explanation: '[[True|Verdadero]]. [[The text says|El texto dice]] "[[Both Greece and Italy are great options|ambos Grecia e Italia son grandes opciones]]".' },
  { question: '[[Neither|Ni]] [[skiing|esquí]] [[nor|ni]] [[snow|nieve]] [[holidays|vacaciones]] [[are|son]] [[for them|para ellos]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'True', explanation: '[[True|Verdadero]]. [[The text says|El texto dice]] "[[neither skiing nor snow holidays are for us|ni vacaciones de esquí ni de nieve son para nosotros]]".' },
  { question: '[[What|Cuál]] [[is|es]] [[the main topic|el tema principal]] [[of|del]] [[this listening|esta escucha]]?', options: ['[[Work|Trabajo]]', '[[Choosing a holiday destination|Elegir un destino de vacaciones]]', '[[Food|Comida]]'], correctAnswer: 1, explanation: '[[The listening|La escucha]] [[describes|describe]] [[holiday choices|elecciones de vacaciones]].' },
  { question: '[[They|Ellos]] [[chose|eligieron]] [[Greece|Grecia]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'False', explanation: '[[False|Falso]]. [[They chose Italy|Eligieron Italia]].' },
  { question: '[[Which structure|Qué estructura]] [[is used|se usa]] [[for "neither skiing nor snow"|para "ni esquí ni nieve"]]?', options: ['[[both...and|both...and]]', '[[either...or|either...or]]', '[[neither...nor|neither...nor]]'], correctAnswer: 2, explanation: '[[Neither A nor B|Ni A ni B]] [[structure|estructura]].' },
  { question: '[[They|Ellos]] [[wanted|querían]] [[both|ambos]] [[culture|cultura]] [[and|y]] [[beach|playa]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'True', explanation: '[[True|Verdadero]]. [[The text says|El texto dice]] "[[we wanted both culture and beach|queríamos ambos cultura y playa]]".' },
  { question: '[[Carlos|Carlos]] [[is|está]] [[talking|hablando]] [[to|a]] [[his|su]] [[wife|esposa]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'False', explanation: '[[Unclear|No está claro]]. [[He is describing his situation|Está describiendo su situación]] - [[not necessarily to her|no necesariamente a ella]].' },
];

export const UNIT_27_LESSON_4_LISTENING: Exercise[] = QUESTIONS.map((q, i) => ({
  id: `b1-u27-l4-l${i + 1}`,
  type: 'listening',
  level: 'B1',
  topic: 'Choices',
  difficulty: 'easy',
  transcript: LISTENING_TRANSCRIPT,
  content: { title: LESSON_TITLE, instructions: INSTRUCTIONS, questions: [q] },
  topicName: 'Listening',
}));
