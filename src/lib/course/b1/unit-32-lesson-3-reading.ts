/**
 * Unidad 32 B1 — Lección 3: Comprensión lectora (Non-defining relative clauses, Environment)
 * 15 actividades
 */

import { Exercise } from '@/lib/exercise-generator';

const LESSON_TITLE = '[[Reading|Comprensión lectora]]';
const READING_TRANSCRIPT = `[[My neighbour|Mi vecino]] [[Maria|María]], [[who|que]] [[works|trabaja]] [[for|para]] [[an|un]] [[environmental|ecologista]] [[group|grupo]], [[recycles|recicla]] [[everything|todo]]. [[Recycling|El reciclaje]], [[which|que]] [[helps|ayuda]] [[reduce|reducir]] [[pollution|contaminación]], [[is|es]] [[very|muy]] [[important|importante]] [[for|para]] [[our|nuestro]] [[planet|planeta]]. [[Climate change|El cambio climático]], [[which|que]] [[affects|afecta]] [[us all|a todos]], [[is|es]] [[a|un]] [[global|global]] [[problem|problema]]. [[The park|El parque]], [[which|que]] [[is|está]] [[in the centre|en el centro]] [[of|de]] [[town|la ciudad]], [[has|tiene]] [[many|muchos]] [[trees|árboles]] [[that|que]] [[clean|limpian]] [[the air|el aire]]. [[Nature|La naturaleza]], [[which|que]] [[we must protect|debemos proteger]], [[provides|proporciona]] [[us with|nos]] [[everything|todo]] [[we need|que necesitamos]].`;

const INSTRUCTIONS = 'Lee el texto de abajo. Después responde las preguntas.';

const QUESTIONS = [
  { question: '[[What|Qué]] [[does Maria do|hace María]]?', options: ['[[She works for an environmental group|Trabaja para un grupo ecologista]]', '[[She is a teacher|Es profesora]]', '[[She works in a factory|Trabaja en una fábrica]]'], correctAnswer: 0, explanation: '[[The text says|El texto dice]] "[[My neighbour Maria, who works for an environmental group|mi vecina María, que trabaja para un grupo ecologista]]".' },
  { question: '[[What|Qué]] [[does Maria recycle|recicla María]]?', options: ['[[nothing|nada]]', '[[everything|todo]]', '[[only plastic|solo plástico]]'], correctAnswer: 1, explanation: '[[The text says|El texto dice]] "[[recycles everything|recicla todo]]".' },
  { question: '[[What|Qué]] [[does recycling help|ayuda el reciclaje]]?', options: ['[[increase pollution|aumentar la contaminación]]', '[[reduce pollution|reducir la contaminación]]', '[[create waste|crear residuos]]'], correctAnswer: 1, explanation: '[[The text says|El texto dice]] "[[Recycling, which helps reduce pollution|el reciclaje, que ayuda reducir la contaminación]]".' },
  { question: '[[What|Qué]] [[is climate change|es el cambio climático]]?', options: ['[[a local problem|un problema local]]', '[[a global problem|un problema global]]', '[[not important|no importante]]'], correctAnswer: 1, explanation: '[[The text says|El texto dice]] "[[Climate change, which affects us all, is a global problem|el cambio climático, que nos afecta a todos, es un problema global]]".' },
  { question: '[[Where|Dónde]] [[is the park|está el parque]]?', options: ['[[outside town|fuera de la ciudad]]', '[[in the centre of town|en el centro de la ciudad]]', '[[in the mountains|en las montañas]]'], correctAnswer: 1, explanation: '[[The text says|El texto dice]] "[[The park, which is in the centre of town|el parque, que está en el centro de la ciudad]]".' },
  { question: '[[What|Qué]] [[do the trees do|hacen los árboles]]?', options: ['[[create pollution|crean contaminación]]', '[[clean the air|limpian el aire]]', '[[waste water|desperdician agua]]'], correctAnswer: 1, explanation: '[[The text says|El texto dice]] "[[many trees that clean the air|muchos árboles que limpian el aire]]".' },
  { question: '[[Maria|María]] [[works|trabaja]] [[for|para]] [[an environmental group|un grupo ecologista]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'True', explanation: '[[True|Verdadero]]. [[The text says|El texto dice]] "[[who works for an environmental group|que trabaja para un grupo ecologista]]".' },
  { question: '[[Recycling|El reciclaje]] [[increases|aumenta]] [[pollution|contaminación]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'False', explanation: '[[False|Falso]]. [[Recycling helps reduce pollution|El reciclaje ayuda a reducir la contaminación]].' },
  { question: '[[Nature|La naturaleza]] [[provides|proporciona]] [[us with|nos]] [[everything|todo]] [[we need|que necesitamos]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'True', explanation: '[[True|Verdadero]]. [[The text says|El texto dice]] "[[Nature, which we must protect, provides us with everything we need|la naturaleza, que debemos proteger, nos proporciona todo lo que necesitamos]]".' },
  { question: '[[What|Cuál]] [[is|es]] [[the main topic|el tema principal]] [[of|del]] [[this text|este texto]]?', options: ['[[Shopping|Compras]]', '[[Environment and protection|Medio ambiente y protección]]', '[[Travel|Viajes]]'], correctAnswer: 1, explanation: '[[The text|El texto]] [[talks about|habla de]] [[recycling|reciclaje]], [[climate change|cambio climático]] [[and|y]] [[nature|naturaleza]].' },
  { question: '[[Climate change|El cambio climático]] [[affects|afecta]] [[us all|a todos]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'True', explanation: '[[True|Verdadero]]. [[The text says|El texto dice]] "[[Climate change, which affects us all|el cambio climático, que nos afecta a todos]]".' },
  { question: '[[We|Nosotros]] [[must|debemos]] [[protect|proteger]] [[nature|la naturaleza]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'True', explanation: '[[True|Verdadero]]. [[The text says|El texto dice]] "[[Nature, which we must protect|la naturaleza, que debemos proteger]]".' },
  { question: '[[Which pronoun|Qué pronombre]] [[is used with commas for extra information|se usa con comas para información extra]]?', options: ['[[that|que]]', '[[who or which|who o which]]', '[[where|donde]]'], correctAnswer: 1, explanation: '[[Non-defining clauses|Las oraciones explicativas]] [[use who/which with commas|usan who/which con comas]].' },
  { question: '[[The park|El parque]] [[has|tiene]] [[many trees|muchos árboles]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'True', explanation: '[[True|Verdadero]]. [[The text says|El texto dice]] "[[has many trees|tiene muchos árboles]]".' },
  { question: '[[Recycling|El reciclaje]] [[is|es]] [[important|importante]] [[for our planet|para nuestro planeta]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'True', explanation: '[[True|Verdadero]]. [[The text says|El texto dice]] "[[Recycling is very important for our planet|el reciclaje es muy importante para nuestro planeta]]".' },
];

export const UNIT_32_LESSON_3_READING: Exercise[] = QUESTIONS.map((q, i) => ({
  id: `b1-u32-l3-r${i + 1}`,
  type: 'reading',
  level: 'B1',
  topic: 'Environment',
  difficulty: 'easy',
  transcript: READING_TRANSCRIPT,
  content: { title: LESSON_TITLE, instructions: INSTRUCTIONS, questions: [q] },
  topicName: 'Reading',
}));
