/**
 * Unidad 28 B1 — Lección 3: Comprensión lectora (Articles, Places: buildings)
 * 15 actividades
 */

import { Exercise } from '@/lib/exercise-generator';

const LESSON_TITLE = '[[Reading|Comprensión lectora]]';
const READING_TRANSCRIPT = `[[My|Mi]] [[city|ciudad]] [[has|tiene]] [[many|muchos]] [[interesting|interesantes]] [[buildings|edificios]]. [[The|La]] [[cathedral|catedral]] [[in|en]] [[the|el]] [[centre|centro]] [[is|es]] [[over|más de]] [[500|quinientos]] [[years|años]] [[old|antigua]]. [[There is|Hay]] [[a|un]] [[museum|museo]] [[near|cerca]] [[the|la]] [[river|río]] [[where|donde]] [[you|tú]] [[can|puedes]] [[see|ver]] [[old|antiguas]] [[paintings|pinturas]]. [[The|El]] [[library|biblioteca]] [[opposite|enfrente]] [[the|del]] [[park|parque]] [[is|es]] [[very|muy]] [[modern|moderna]]. [[I|Yo]] [[live|vivo]] [[in|en]] [[an|un]] [[apartment|apartamento]] [[block|bloque]] [[near|cerca]] [[the|la]] [[station|estación]]. [[Every|Cada]] [[morning|mañana]] [[I|yo]] [[walk|camino]] [[past|por]] [[the|el]] [[bank|banco]] [[and|y]] [[the|la]] [[church|iglesia]] [[to get|para llegar]] [[to|a]] [[work|trabajo]]. [[The|El]] [[hospital|hospital]] [[is|está]] [[at|en]] [[the|el]] [[end|final]] [[of|de]] [[the|la]] [[street|calle]].`;

const INSTRUCTIONS = 'Lee el texto de abajo. Después responde las preguntas.';

const QUESTIONS = [
  { question: '[[What|Qué]] [[does the city have|tiene la ciudad]]?', options: ['[[many interesting buildings|muchos edificios interesantes]]', '[[a small park|un parque pequeño]]', '[[few shops|pocas tiendas]]'], correctAnswer: 0, explanation: '[[The text says|El texto dice]] "[[My city has many interesting buildings|mi ciudad tiene muchos edificios interesantes]]".' },
  { question: '[[How old|Cuántos años]] [[is the cathedral|tiene la catedral]]?', options: ['[[over 500 years|más de 500 años]]', '[[100 years|100 años]]', '[[50 years|50 años]]'], correctAnswer: 0, explanation: '[[The text says|El texto dice]] "[[over 500 years old|más de 500 años antigua]]".' },
  { question: '[[Where|Dónde]] [[is the museum|está el museo]]?', options: ['[[in the park|en el parque]]', '[[near the river|cerca del río]]', '[[opposite the library|enfrente de la biblioteca]]'], correctAnswer: 1, explanation: '[[The text says|El texto dice]] "[[There is a museum near the river|hay un museo cerca del río]]".' },
  { question: '[[What|Qué]] [[can you see in the museum|puedes ver en el museo]]?', options: ['[[old paintings|pinturas antiguas]]', '[[modern art|arte moderno]]', '[[photographs|fotografías]]'], correctAnswer: 0, explanation: '[[The text says|El texto dice]] "[[old paintings|pinturas antiguas]]".' },
  { question: '[[Where|Dónde]] [[is the library|está la biblioteca]]?', options: ['[[near the river|cerca del río]]', '[[opposite the park|enfrente del parque]]', '[[at the station|en la estación]]'], correctAnswer: 1, explanation: '[[The text says|El texto dice]] "[[The library opposite the park|la biblioteca enfrente del parque]]".' },
  { question: '[[Where|Dónde]] [[does the person live|vive la persona]]?', options: ['[[in a house|en una casa]]', '[[in an apartment block|en un bloque de apartamentos]]', '[[near the cathedral|cerca de la catedral]]'], correctAnswer: 1, explanation: '[[The text says|El texto dice]] "[[I live in an apartment block|vivo en un bloque de apartamentos]]".' },
  { question: '[[What|Qué]] [[does the person walk past|pasa la persona caminando]]?', options: ['[[the museum and library|el museo y la biblioteca]]', '[[the bank and church|el banco y la iglesia]]', '[[the park and station|el parque y la estación]]'], correctAnswer: 1, explanation: '[[The text says|El texto dice]] "[[I walk past the bank and the church|camino por el banco y la iglesia]]".' },
  { question: '[[Where|Dónde]] [[is the hospital|está el hospital]]?', options: ['[[near the river|cerca del río]]', '[[at the end of the street|al final de la calle]]', '[[opposite the park|enfrente del parque]]'], correctAnswer: 1, explanation: '[[The text says|El texto dice]] "[[at the end of the street|al final de la calle]]".' },
  { question: '[[The cathedral|La catedral]] [[is|está]] [[in the centre|en el centro]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'True', explanation: '[[True|Verdadero]]. [[The text says|El texto dice]] "[[The cathedral in the centre|la catedral en el centro]]".' },
  { question: '[[The library|La biblioteca]] [[is|es]] [[old|antigua]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'False', explanation: '[[False|Falso]]. [[The text says|El texto dice]] "[[very modern|muy moderna]]".' },
  { question: '[[The person|La persona]] [[walks|camina]] [[to work|al trabajo]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'True', explanation: '[[True|Verdadero]]. [[The text says|El texto dice]] "[[I walk... to get to work|camino... para llegar al trabajo]]".' },
  { question: '[[What|Cuál]] [[is|es]] [[the main topic|el tema principal]] [[of|del]] [[this text|este texto]]?', options: ['[[Food|Comida]]', '[[Buildings and places in a city|Edificios y lugares en una ciudad]]', '[[Transport|Transporte]]'], correctAnswer: 1, explanation: '[[The text|El texto]] [[describes|describe]] [[buildings in the city|edificios en la ciudad]].' },
  { question: '[[The apartment block|El bloque de apartamentos]] [[is|está]] [[near the station|cerca de la estación]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'True', explanation: '[[True|Verdadero]]. [[The text says|El texto dice]] "[[near the station|cerca de la estación]]".' },
  { question: '[[Which article|Qué artículo]] [[is used|se usa]] [[for "cathedral"|para "catedral"]]?', options: ['[[the|el/la]]', '[[a|un/una]]', '[[no article|sin artículo]]'], correctAnswer: 0, explanation: '[[The|El/La]] [[for specific known building|para edificio específico conocido]].' },
  { question: '[[The museum|El museo]] [[has|tiene]] [[paintings|pinturas]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'True', explanation: '[[True|Verdadero]]. [[The text says|El texto dice]] "[[old paintings|pinturas antiguas]]".' },
];

export const UNIT_28_LESSON_3_READING: Exercise[] = QUESTIONS.map((q, i) => ({
  id: `b1-u28-l3-r${i + 1}`,
  type: 'reading',
  level: 'B1',
  topic: 'Places: buildings',
  difficulty: 'easy',
  transcript: READING_TRANSCRIPT,
  content: { title: LESSON_TITLE, instructions: INSTRUCTIONS, questions: [q] },
  topicName: 'Reading',
}));
