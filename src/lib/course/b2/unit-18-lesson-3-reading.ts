/**
 * Unidad 18 B2 — Lección 3: Comprensión lectora (Food and drink)
 * 13 preguntas (B2: recreado con texto y preguntas distintos)
 */

import { Exercise } from '@/lib/exercise-generator';

const LESSON_TITLE = '[[Reading|Comprensión lectora]]';
const READING_TRANSCRIPT = `[[The restaurant|El restaurante]] [[was|era]] [[so popular|tan popular]] [[that|que]] [[we had to|tuvimos que]] [[book|reservar]] [[weeks in advance|semanas con antelación]]. [[The menu|El menú]] [[offered|ofrecía]] [[such a variety|tal variedad]] [[of dishes|de platos]] [[that|que]] [[it was|fue]] [[too difficult|demasiado difícil]] [[to choose|elegir]]. [[The starter|El entrante]] [[was|era]] [[so delicious|tan delicioso]] [[that|que]] [[we ordered|pedimos]] [[a second portion|una segunda ración]]. [[However|Sin embargo]], [[the main course|el plato principal]] [[was|era]] [[too salty|demasiado salado]] [[for my taste|para mi gusto]]; [[the chef|el chef]] [[hadn\'t used|no había usado]] [[enough restraint|suficiente moderación]] [[with the salt|con la sal]]. [[The dessert|El postre]] [[was|era]] [[sweet enough|lo bastante dulce]] [[to satisfy|para satisfacer]] [[any sweet tooth|cualquier goloso]]. [[We had|Tuvimos]] [[such a good time|un tiempo tan bueno]] [[that|que]] [[we didn\'t notice|no nos dimos cuenta]] [[how late it was|qué tarde era]]. [[The bill|La cuenta]] [[was|era]] [[reasonable enough|lo bastante razonable]] [[for the quality|para la calidad]] [[we received|que recibimos]].`;

const INSTRUCTIONS = 'Lee el texto sobre una experiencia en un restaurante. Después responde las preguntas.';

const QUESTIONS = [
  { question: '[[What|Qué]] [[was the restaurant like|era el restaurante]]?', options: ['[[So popular that they had to book weeks in advance|Tan popular que tuvieron que reservar semanas con antelación]]', '[[Empty and quiet|Vacío y tranquilo]]', '[[Closed|Cerrado]]'], correctAnswer: 0, explanation: '[[The text says|El texto dice]] "[[was so popular that we had to book weeks in advance|era tan popular que tuvimos que reservar semanas con antelación]]".' },
  { question: '[[What|Qué]] [[was the menu like|era el menú]]?', options: ['[[Such a variety that it was too difficult to choose|Tal variedad que era demasiado difícil elegir]]', '[[Very limited|Muy limitado]]', '[[Only one dish|Solo un plato]]'], correctAnswer: 0, explanation: '[[The text says|El texto dice]] "[[such a variety of dishes that it was too difficult to choose|tal variedad de platos que era demasiado difícil elegir]]".' },
  { question: '[[What|Qué]] [[was the starter like|era el entrante]]?', options: ['[[So delicious that they ordered a second portion|Tan delicioso que pidieron una segunda ración]]', '[[Terrible|Terrible]]', '[[Too small|Demasiado pequeño]]'], correctAnswer: 0, explanation: '[[The text says|El texto dice]] "[[was so delicious that we ordered a second portion|era tan delicioso que pedimos una segunda ración]]".' },
  { question: '[[What|Qué]] [[was wrong with the main course|qué pasaba con el plato principal]]?', options: ['[[It was too salty for the writer\'s taste|Era demasiado salado para el gusto del escritor]]', '[[It was cold|Estaba frío]]', '[[It was undercooked|Estaba poco hecho]]'], correctAnswer: 0, explanation: '[[The text says|El texto dice]] "[[was too salty for my taste|era demasiado salado para mi gusto]]".' },
  { question: '[[What|Qué]] [[hadn\'t the chef used enough of|qué no había usado el chef suficiente]]?', options: ['[[Restraint with the salt|Moderación con la sal]]', '[[Ingredients|Ingredientes]]', '[[Time|Tiempo]]'], correctAnswer: 0, explanation: '[[The text says|El texto dice]] "[[hadn\'t used enough restraint with the salt|no había usado suficiente moderación con la sal]]".' },
  { question: '[[What|Qué]] [[was the dessert like|era el postre]]?', options: ['[[Sweet enough to satisfy any sweet tooth|Lo bastante dulce para satisfacer cualquier goloso]]', '[[Too bitter|Demasiado amargo]]', '[[Not sweet|No dulce]]'], correctAnswer: 0, explanation: '[[The text says|El texto dice]] "[[was sweet enough to satisfy any sweet tooth|era lo bastante dulce para satisfacer cualquier goloso]]".' },
  { question: '[[What|Qué]] [[was the bill like|era la cuenta]]?', options: ['[[Reasonable enough for the quality received|Lo bastante razonable para la calidad recibida]]', '[[Too expensive|Demasiado cara]]', '[[Free|Gratis]]'], correctAnswer: 0, explanation: '[[The text says|El texto dice]] "[[was reasonable enough for the quality we received|era lo bastante razonable para la calidad que recibimos]]".' },
  { question: '[[The text|El texto]] [[states|afirma]] [[that|que]] [[they didn\'t enjoy the meal|no disfrutaron de la comida]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 1, explanation: '[[False|Falso]]. [[The text says|El texto dice]] "[[such a good time|un tiempo tan bueno]]" [[and|y]] [[positive comments|comentarios positivos]].' },
  { question: '[[According to the text|Según el texto]], [[the dessert was not sweet|el postre no era dulce]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 1, explanation: '[[False|Falso]]. [[The text says|El texto dice]] "[[was sweet enough|era lo bastante dulce]]".' },
  { question: '[[What|Cuál]] [[is the main idea|es la idea principal]] [[of the text|del texto]]?', options: ['[[A mixed dining experience: popular restaurant, good starter and dessert, but main course too salty; overall enjoyable|Experiencia mixta: restaurante popular, buen entrante y postre, pero plato principal demasiado salado; en general disfrutable]]', '[[All food was terrible|Toda la comida era terrible]]', '[[The restaurant was cheap|El restaurante era barato]]'], correctAnswer: 0, explanation: '[[The text|El texto]] [[describes|describe]] [[mixed experience|experiencia mixta]].' },
  { question: '[[Which structure|Qué estructura]] [[uses "so + adjective"|usa "so + adjetivo"]] [[in the text|en el texto]]?', options: ['[[was so popular|era tan popular]]', '[[such a variety|tal variedad]]', '[[too difficult|demasiado difícil]]'], correctAnswer: 0, explanation: '[[So + adjective + that|So + adjetivo + that]].' },
  { question: '[[What|Qué]] [[vocabulary|vocabulario]] [[is key|es clave]] [[in this text|en este texto]]?', options: ['[[restaurant|restaurante]], [[menu|menú]], [[starter|entrante]], [[dessert|postre]]', '[[computer|ordenador]], [[software|software]], [[internet|internet]]', '[[profit|beneficio]], [[debt|deuda]], [[budget|presupuesto]]'], correctAnswer: 0, explanation: '[[The text|El texto]] [[focuses on|se centra en]] [[food and dining vocabulary|vocabulario de comida y restaurante]].' },
  { question: '[[What|Qué]] [[can we infer|podemos inferir]] [[about|sobre]] [[the writer\'s overall opinion|la opinión general del escritor]]?', options: ['[[Mostly positive despite the salty main course|Mayormente positiva pese al plato principal salado]]', '[[Completely negative|Completamente negativa]]', '[[They will never return|Nunca volverán]]'], correctAnswer: 0, explanation: '[[Good time|Buen tiempo]], [[reasonable bill|cuenta razonable]] [[and|y]] [[sweet dessert|postre dulce]] [[suggest|sugieren]] [[positive|positivo]].' },
];

export const UNIT_18_LESSON_3_READING: Exercise[] = QUESTIONS.map((q, i) => ({
  id: `b2-u18-l3-r${i + 1}`,
  type: 'reading',
  level: 'B2',
  topic: 'Food and drink',
  difficulty: 'medium',
  transcript: READING_TRANSCRIPT,
  content: { title: LESSON_TITLE, instructions: INSTRUCTIONS, questions: [q] },
  topicName: 'Reading',
}));
