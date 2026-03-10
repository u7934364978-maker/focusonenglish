/**
 * Unidad 27 B1 — Lección 3: Comprensión lectora (Both, either, neither, Choices)
 * 15 actividades
 */

import { Exercise } from '@/lib/exercise-generator';

const LESSON_TITLE = '[[Reading|Comprensión lectora]]';
const READING_TRANSCRIPT = `[[When|Cuando]] [[I|yo]] [[go|voy]] [[to|a]] [[a|un]] [[restaurant|restaurante]], [[I|yo]] [[often|a menudo]] [[face|enfrento]] [[a|una]] [[difficult|difícil]] [[choice|elección]]. [[Both|Ambos]] [[the|el]] [[pasta|pasta]] [[and|y]] [[the|la]] [[salad|ensalada]] [[look|parecen]] [[good|buenos]]. [[I|Yo]] [[can|puedo]] [[either|o]] [[order|pedir]] [[the|el]] [[fish|pescado]] [[or|o]] [[the|la]] [[chicken|pollo]]. [[My|Mi]] [[friend|amiga]] [[doesn\'t|no]] [[eat|come]] [[meat|carne]] [[so|así que]] [[neither|ni]] [[the|el]] [[steak|filete]] [[nor|ni]] [[the|el]] [[lamb|cordero]] [[are|son]] [[options|opciones]] [[for|para]] [[her|ella]]. [[We|Nosotros]] [[both|ambos]] [[prefer|preferimos]] [[Italian|italiana]] [[food|comida]] [[but|pero]] [[we|nosotros]] [[could|podríamos]] [[either|o]] [[go|ir]] [[to|a]] [[the|el]] [[Italian|italiano]] [[place|lugar]] [[or|o]] [[cook|cocinar]] [[at|en]] [[home|casa]]. [[In|En]] [[the|el]] [[end|final]] [[we|nosotros]] [[decided|decidimos]] [[to|a]] [[try|probar]] [[both|ambos]] [[dishes|platos]] [[by sharing|compartiendo]].`;

const INSTRUCTIONS = 'Lee el texto de abajo. Después responde las preguntas.';

const QUESTIONS = [
  { question: '[[What|Qué]] [[does the person face|enfrenta la persona]] [[at a restaurant|en un restaurante]]?', options: ['[[a difficult choice|una elección difícil]]', '[[a friendly waiter|un camarero amable]]', '[[a long wait|una larga espera]]'], correctAnswer: 0, explanation: '[[The text says|El texto dice]] "[[I often face a difficult choice|a menudo enfrento una elección difícil]]".' },
  { question: '[[Which|Cuáles]] [[two dishes|dos platos]] [[look good|parecen buenos]]?', options: ['[[fish and chicken|pescado y pollo]]', '[[pasta and salad|pasta y ensalada]]', '[[steak and lamb|filete y cordero]]'], correctAnswer: 1, explanation: '[[The text says|El texto dice]] "[[Both the pasta and the salad look good|ambos el pasta y la ensalada parecen buenos]]".' },
  { question: '[[What|Qué]] [[can the person order|puede pedir la persona]]?', options: ['[[either fish or chicken|o pescado o pollo]]', '[[both fish and chicken|pescado y pollo]]', '[[neither fish nor chicken|ni pescado ni pollo]]'], correctAnswer: 0, explanation: '[[The text says|El texto dice]] "[[I can either order the fish or the chicken|puedo o pedir el pescado o el pollo]]".' },
  { question: '[[Why|Por qué]] [[aren\'t steak and lamb options|no son el filete y cordero opciones]]?', options: ['[[the friend doesn\'t eat meat|la amiga no come carne]]', '[[they are too expensive|son muy caros]]', '[[they are not on the menu|no están en el menú]]'], correctAnswer: 0, explanation: '[[The text says|El texto dice]] "[[my friend doesn\'t eat meat|mi amiga no come carne]]".' },
  { question: '[[What|Qué]] [[do they both prefer|prefieren ambos]]?', options: ['[[French food|comida francesa]]', '[[Italian food|comida italiana]]', '[[Spanish food|comida española]]'], correctAnswer: 1, explanation: '[[The text says|El texto dice]] "[[We both prefer Italian food|ambos preferimos comida italiana]]".' },
  { question: '[[What|Qué]] [[two options|dos opciones]] [[could they choose|podrían elegir]]?', options: ['[[go to Italian place or cook at home|ir al lugar italiano o cocinar en casa]]', '[[order pasta or salad|pedir pasta o ensalada]]', '[[fish or chicken|pescado o pollo]]'], correctAnswer: 0, explanation: '[[The text says|El texto dice]] "[[we could either go to the Italian place or cook at home|podríamos o ir al lugar italiano o cocinar en casa]]".' },
  { question: '[[What|Qué]] [[did they decide|decidieron]] [[in the end|al final]]?', options: ['[[to try both dishes by sharing|probar ambos platos compartiendo]]', '[[to order only pasta|pedir solo pasta]]', '[[to cook at home|cocinar en casa]]'], correctAnswer: 0, explanation: '[[The text says|El texto dice]] "[[we decided to try both dishes by sharing|decidimos probar ambos platos compartiendo]]".' },
  { question: '[[The friend|La amiga]] [[eats|come]] [[meat|carne]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'False', explanation: '[[False|Falso]]. [[She doesn\'t eat meat|No come carne]].' },
  { question: '[[They|Ellos]] [[both|ambos]] [[prefer|prefieren]] [[Italian food|comida italiana]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'True', explanation: '[[True|Verdadero]]. [[The text says|El texto dice]] "[[We both prefer Italian food|ambos preferimos comida italiana]]".' },
  { question: '[[Neither|Ni]] [[steak|filete]] [[nor|ni]] [[lamb|cordero]] [[are|son]] [[options|opciones]] [[for the friend|para la amiga]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'True', explanation: '[[True|Verdadero]]. [[The text says|El texto dice]] "[[neither the steak nor the lamb are options for her|ni el filete ni el cordero son opciones para ella]]".' },
  { question: '[[What|Cuál]] [[is|es]] [[the main topic|el tema principal]] [[of|del]] [[this text|este texto]]?', options: ['[[Cooking|Cocinar]]', '[[Making food choices at a restaurant|Tomar decisiones de comida en un restaurante]]', '[[Italian cuisine|Cocina italiana]]'], correctAnswer: 1, explanation: '[[The text|El texto]] [[describes|describe]] [[choosing food at a restaurant|elegir comida en un restaurante]].' },
  { question: '[[The person|La persona]] [[can only order one dish|solo puede pedir un plato]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'False', explanation: '[[False|Falso]]. [[They decided to try both dishes by sharing|Decidieron probar ambos platos compartiendo]].' },
  { question: '[[Which structure|Qué estructura]] [[is used|se usa]] [[for "both pasta and salad"|para "ambos pasta y ensalada"]]?', options: ['[[both...and|both...and]]', '[[either...or|either...or]]', '[[neither...nor|neither...nor]]'], correctAnswer: 0, explanation: '[[Both A and B|Ambos A y B]] [[structure|estructura]].' },
  { question: '[[They|Ellos]] [[went|fueron]] [[to|a]] [[the|el]] [[Italian|italiano]] [[restaurant|restaurante]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'False', explanation: '[[Unclear|No está claro]]. [[They could either go or cook|Podrían o ir o cocinar]] - [[text doesn\'t say final choice|el texto no dice la elección final]].' },
  { question: '[[The person|La persona]] [[and|y]] [[their friend|su amiga]] [[share|comparten]] [[dishes|platos]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'True', explanation: '[[True|Verdadero]]. [[The text says|El texto dice]] "[[try both dishes by sharing|probar ambos platos compartiendo]]".' },
];

export const UNIT_27_LESSON_3_READING: Exercise[] = QUESTIONS.map((q, i) => ({
  id: `b1-u27-l3-r${i + 1}`,
  type: 'reading',
  level: 'B1',
  topic: 'Choices',
  difficulty: 'easy',
  transcript: READING_TRANSCRIPT,
  content: { title: LESSON_TITLE, instructions: INSTRUCTIONS, questions: [q] },
  topicName: 'Reading',
}));
