/**
 * Unidad 26 B1 — Lección 4: Comprensión auditiva (Quantifiers, Food & drink)
 * 15 actividades
 */

import { Exercise } from '@/lib/exercise-generator';

const LESSON_TITLE = '[[Listening|Comprensión auditiva]]';
const LISTENING_TRANSCRIPT = `[[Hi|Hola]], [[I|yo]] [[am|soy]] [[Ana|Ana]]. [[I|yo]] [[work|trabajo]] [[in|en]] [[a|un]] [[restaurant|restaurante]] [[and|y]] [[I|yo]] [[love|amo]] [[food|la comida]]. [[We|Nosotros]] [[don\'t|no]] [[use|usamos]] [[much|mucha]] [[salt|sal]] [[in|en]] [[our|nuestra]] [[cooking|cocina]] [[because|porque]] [[many|muchos]] [[customers|clientes]] [[prefer|prefieren]] [[healthy|saludable]] [[options|opciones]]. [[We|Nosotros]] [[have|tenemos]] [[a lot of|muchas]] [[vegetarian|vegetarianas]] [[dishes|opciones]] [[on|en]] [[the|el]] [[menu|menú]]. [[There is|Hay]] [[little|poca]] [[sugar|azúcar]] [[in|en]] [[our|nuestros]] [[desserts|postres]] [[because|porque]] [[we|nosotros]] [[use|usamos]] [[fruit|fruta]] [[instead|en su lugar]]. [[How|Cuánta]] [[much|mucha]] [[coffee|café]] [[do|tomas]] [[you drink|tú bebes]] [[every|cada]] [[day|día]]? [[I|yo]] [[drink|bebo]] [[a lot of|mucho]] [[water|agua]] [[and|y]] [[a few|unos pocos]] [[cups|tazas]] [[of|de]] [[tea|té]]. [[We|Nosotros]] [[need|necesitamos]] [[many|muchos]] [[eggs|huevos]] [[for|para]] [[breakfast|el desayuno]] [[service|servicio]] [[every|cada]] [[morning|mañana]].`;

const INSTRUCTIONS = 'Escucha el audio. Puedes leer la transcripción. Después responde las preguntas.';

const QUESTIONS = [
  { question: '[[Where|Dónde]] [[does Ana work|trabaja Ana]]?', options: ['[[in a supermarket|en un supermercado]]', '[[in a restaurant|en un restaurante]]', '[[in a hospital|en un hospital]]'], correctAnswer: 1, explanation: '[[She says|Dice]] "[[I work in a restaurant|trabajo en un restaurante]]".' },
  { question: '[[Do they use much salt|¿Usan mucha sal]] [[in the kitchen|en la cocina]]?', options: ['[[Yes|Sí]]', '[[No|No]]'], correctAnswer: 'No', explanation: '[[She says|Dice]] "[[We don\'t use much salt|no usamos mucha sal]]".' },
  { question: '[[Why|Por qué]] [[don\'t they use much salt|no usan mucha sal]]?', options: ['[[customers prefer healthy options|los clientes prefieren opciones saludables]]', '[[it\'s expensive|es caro]]', '[[they don\'t have any|no tienen]]'], correctAnswer: 0, explanation: '[[She says|Dice]] "[[many customers prefer healthy options|muchos clientes prefieren opciones saludables]]".' },
  { question: '[[What|Qué]] [[do they have|tienen]] [[on the menu|en el menú]]?', options: ['[[a lot of meat|mucha carne]]', '[[a lot of vegetarian dishes|muchas opciones vegetarianas]]', '[[few options|pocas opciones]]'], correctAnswer: 1, explanation: '[[She says|Dice]] "[[We have a lot of vegetarian dishes|tenemos muchas opciones vegetarianas]]".' },
  { question: '[[Is there much sugar|¿Hay mucha azúcar]] [[in their desserts|en sus postres]]?', options: ['[[Yes|Sí]]', '[[No|No]]'], correctAnswer: 'No', explanation: '[[She says|Dice]] "[[There is little sugar|hay poca azúcar]]".' },
  { question: '[[What|Qué]] [[does Ana drink|bebe Ana]] [[a lot of|mucho]]?', options: ['[[coffee|café]]', '[[water|agua]]', '[[juice|zumo]]'], correctAnswer: 1, explanation: '[[She says|Dice]] "[[I drink a lot of water|bebo mucha agua]]".' },
  { question: '[[How many cups of tea|Cuántas tazas de té]] [[does Ana drink|bebe Ana]]?', options: ['[[many|muchas]]', '[[a few|unos pocos]]', '[[none|ninguna]]'], correctAnswer: 1, explanation: '[[She says|Dice]] "[[a few cups of tea|unos pocos tazas de té]]".' },
  { question: '[[Ana|Ana]] [[works|trabaja]] [[in a restaurant|en un restaurante]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'True', explanation: '[[True|Verdadero]]. [[The text says|El texto dice]] "[[I work in a restaurant|trabajo en un restaurante]]".' },
  { question: '[[They|Ellos]] [[use|usan]] [[fruit|fruta]] [[in desserts|en los postres]] [[instead of sugar|en lugar de azúcar]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'True', explanation: '[[True|Verdadero]]. [[The text says|El texto dice]] "[[we use fruit instead|usamos fruta en su lugar]]".' },
  { question: '[[They|Ellos]] [[need|necesitan]] [[few eggs|pocos huevos]] [[for breakfast|para el desayuno]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'False', explanation: '[[False|Falso]]. [[They need many eggs|Necesitan muchos huevos]].' },
  { question: '[[What|Cuál]] [[is|es]] [[the main topic|el tema principal]] [[of|del]] [[this listening|esta escucha]]?', options: ['[[Travel|Viajes]]', '[[Food and restaurant habits|Comida y hábitos del restaurante]]', '[[Sports|Deportes]]'], correctAnswer: 1, explanation: '[[The listening|La escucha]] [[describes|describe]] [[restaurant food practices|prácticas de comida del restaurante]].' },
  { question: '[[Ana|Ana]] [[asks|pregunta]] [[how much coffee|cuánto café]] [[you drink|tú bebes]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'True', explanation: '[[True|Verdadero]]. [[The text says|El texto dice]] "[[How much coffee do you drink|cuánto café bebes]]".' },
  { question: '[[They|Ellos]] [[have|tienen]] [[many vegetarian options|muchas opciones vegetarianas]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'True', explanation: '[[True|Verdadero]]. [[The text says|El texto dice]] "[[a lot of vegetarian dishes|muchas opciones vegetarianas]]".' },
  { question: '[[Which quantifier|Qué cuantificador]] [[is used with sugar|se usa con azúcar]]?', options: ['[[many|muchos]]', '[[little|poco]]', '[[few|pocos]]'], correctAnswer: 1, explanation: '[[Sugar|Azúcar]] = [[uncountable|incontable]] → [[little|poco]].' },
  { question: '[[Ana|Ana]] [[loves|ama]] [[food|la comida]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'True', explanation: '[[True|Verdadero]]. [[The text says|El texto dice]] "[[I love food|amo la comida]]".' },
];

export const UNIT_26_LESSON_4_LISTENING: Exercise[] = QUESTIONS.map((q, i) => ({
  id: `b1-u26-l4-l${i + 1}`,
  type: 'listening',
  level: 'B1',
  topic: 'Food & Drink',
  difficulty: 'easy',
  transcript: LISTENING_TRANSCRIPT,
  content: { title: LESSON_TITLE, instructions: INSTRUCTIONS, questions: [q] },
  topicName: 'Listening',
}));
