/**
 * Unidad 35 B1 — Lección 3: Comprensión lectora (Repaso 31–34)
 * 15 actividades
 */

import { Exercise } from '@/lib/exercise-generator';

const LESSON_TITLE = '[[Reading|Comprensión lectora]]';
const READING_TRANSCRIPT = `[[My|Mi]] [[friend|amigo]] [[Luis|Luis]], [[who|que]] [[works|trabaja]] [[for|para]] [[an|un]] [[environmental|ecologista]] [[group|grupo]], [[visited|visitó]] [[a|un]] [[park|parque]] [[that|que]] [[protects|protege]] [[wildlife|vida silvestre]]. [[The|El]] [[landscape|paisaje]] [[was|era]] [[breathtaking|impresionante]], [[wasn't it|no era]]? [[He|Él]] [[was|estaba]] [[excited|emocionado]] [[because|porque]] [[the|los]] [[animals|animales]] [[that|que]] [[he saw|vio]] [[were|eran]] [[amazing|asombrosos]]. [[Recycling|El reciclaje]], [[which|que]] [[helps|ayuda]] [[reduce|reducir]] [[pollution|contaminación]], [[is|es]] [[important|importante]] [[for|para]] [[our|nuestro]] [[planet|planeta]]. [[I|Yo]] [[had|tuve]] [[an appointment|una cita]] [[at|en]] [[the bank|el banco]] [[yesterday|ayer]]. [[The service|El servicio]] [[was|era]] [[excellent|excelente]], [[wasn't it|no era]]?`;

const INSTRUCTIONS = 'Lee el texto de abajo. Después responde las preguntas.';

const QUESTIONS = [
  { question: '[[What|Qué]] [[does Luis do|hace Luis]]?', options: ['[[He works for an environmental group|Trabaja para un grupo ecologista]]', '[[He works at a bank|Trabaja en un banco]]', '[[He is a vet|Es veterinario]]'], correctAnswer: 0, explanation: '[[The text says|El texto dice]] "[[My friend Luis, who works for an environmental group|mi amigo Luis, que trabaja para un grupo ecologista]]".' },
  { question: '[[What|Qué]] [[park did he visit|parque visitó]]?', options: ['[[a park that protects wildlife|un parque que protege vida silvestre]]', '[[a city park|un parque urbano]]', '[[a theme park|un parque temático]]'], correctAnswer: 0, explanation: '[[The text says|El texto dice]] "[[a park that protects wildlife|un parque que protege vida silvestre]]".' },
  { question: '[[What|Qué]] [[was the landscape like|era el paisaje]]?', options: ['[[boring|aburrido]]', '[[breathtaking|impresionante]]', '[[polluted|contaminado]]'], correctAnswer: 1, explanation: '[[The text says|El texto dice]] "[[The landscape was breathtaking|el paisaje era impresionante]]".' },
  { question: '[[How|Cómo]] [[did Luis feel|se sintió Luis]]?', options: ['[[bored|aburrido]]', '[[excited|emocionado]]', '[[disappointed|decepcionado]]'], correctAnswer: 1, explanation: '[[The text says|El texto dice]] "[[He was excited|estaba emocionado]]".' },
  { question: '[[What|Qué]] [[does recycling help|ayuda el reciclaje]]?', options: ['[[increase pollution|aumentar contaminación]]', '[[reduce pollution|reducir contaminación]]', '[[create waste|crear residuos]]'], correctAnswer: 1, explanation: '[[The text says|El texto dice]] "[[Recycling, which helps reduce pollution|el reciclaje, que ayuda reducir contaminación]]".' },
  { question: '[[Where|Dónde]] [[did the person have an appointment|tuvo la persona una cita]]?', options: ['[[at the doctor|en el médico]]', '[[at the bank|en el banco]]', '[[at the restaurant|en el restaurante]]'], correctAnswer: 1, explanation: '[[The text says|El texto dice]] "[[I had an appointment at the bank|tuve una cita en el banco]]".' },
  { question: '[[Luis|Luis]] [[works|trabaja]] [[for an environmental group|para un grupo ecologista]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'True', explanation: '[[True|Verdadero]]. [[The text says|El texto dice]] "[[who works for an environmental group|que trabaja para un grupo ecologista]]".' },
  { question: '[[The landscape|El paisaje]] [[was|era]] [[boring|aburrido]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'False', explanation: '[[False|Falso]]. [[It was breathtaking|Era impresionante]].' },
  { question: '[[The bank service|El servicio del banco]] [[was|era]] [[excellent|excelente]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'True', explanation: '[[True|Verdadero]]. [[The text says|El texto dice]] "[[The service was excellent|el servicio era excelente]]".' },
  { question: '[[What|Cuál]] [[is|es]] [[the main topic|el tema principal]] [[of|del]] [[this text|este texto]]?', options: ['[[Food|Comida]]', '[[Environment, wildlife, services|Medio ambiente, vida silvestre, servicios]]', '[[Travel|Viajes]]'], correctAnswer: 1, explanation: '[[The text|El texto]] [[mixes|mezcla]] [[environment|medio ambiente]], [[wildlife|vida silvestre]] [[and|y]] [[bank|banco]].' },
  { question: '[[Which structure|Qué estructura]] [[is used|se usa]] [[for "My friend Luis"|para "Mi amigo Luis"]]?', options: ['[[defining relative|oración especificativa]]', '[[non-defining relative|oración explicativa]]', '[[question tag|question tag]]'], correctAnswer: 1, explanation: '[[Non-defining|Explicativa]]: [[who works for...|que trabaja para...]] [[with commas|con comas]].' },
  { question: '[[The animals|Los animales]] [[were|eran]] [[amazing|asombrosos]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'True', explanation: '[[True|Verdadero]]. [[The text says|El texto dice]] "[[the animals that he saw were amazing|los animales que vio eran asombrosos]]".' },
  { question: '[[The appointment|La cita]] [[was|era]] [[yesterday|ayer]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'True', explanation: '[[True|Verdadero]]. [[The text says|El texto dice]] "[[I had an appointment at the bank yesterday|tuve una cita en el banco ayer]]".' },
  { question: '[[Which question tag|Qué tag]] [[follows|sigue]] [[The landscape was breathtaking|El paisaje era impresionante]]?', options: ["[[wasn't it|no era]]", "[[isn't it|no es]]", "[[don't it|no]]"], correctAnswer: 0, explanation: '[[Positive with was|Afirmación con was]] → [[wasn\'t it|no era]].' },
  { question: '[[Luis|Luis]] [[saw|vio]] [[animals|animales]] [[in the park|en el parque]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'True', explanation: '[[True|Verdadero]]. [[The text says|El texto dice]] "[[the animals that he saw|los animales que vio]]".' },
];

export const UNIT_35_LESSON_3_READING: Exercise[] = QUESTIONS.map((q, i) => ({
  id: `b1-u35-l3-r${i + 1}`,
  type: 'reading',
  level: 'B1',
  topic: 'Review 31-34',
  difficulty: 'easy',
  transcript: READING_TRANSCRIPT,
  content: { title: LESSON_TITLE, instructions: INSTRUCTIONS, questions: [q] },
  topicName: 'Reading',
}));
