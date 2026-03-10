/**
 * Unidad 28 B1 — Lección 4: Comprensión auditiva (Articles, Places: buildings)
 * 15 actividades
 */

import { Exercise } from '@/lib/exercise-generator';

const LESSON_TITLE = '[[Listening|Comprensión auditiva]]';
const LISTENING_TRANSCRIPT = `[[I|Yo]] [[am|estoy]] [[looking for|buscando]] [[a|un]] [[new|nuevo]] [[flat|piso]] [[in|en]] [[the|el]] [[city|centro]]. [[The|El]] [[area|área]] [[near|cerca]] [[the|la]] [[station|estación]] [[is|es]] [[very|muy]] [[convenient|conveniente]]. [[There is|Hay]] [[an|un]] [[apartment|apartamento]] [[block|bloque]] [[on|en]] [[Church|Church]] [[Street|Street]] [[that|que]] [[I|yo]] [[like|me gusta]]. [[It|Él]] [[is|está]] [[opposite|enfrente]] [[the|del]] [[library|biblioteca]] [[and|y]] [[near|cerca]] [[a|un]] [[supermarket|supermercado]]. [[The|El]] [[building|edificio]] [[has|tiene]] [[a|un]] [[lift|ascensor]] [[and|y]] [[the|la]] [[views|vistas]] [[are|son]] [[great|geniales]]. [[I|Yo]] [[also|también]] [[saw|vi]] [[a|una]] [[flat|piso]] [[near|cerca]] [[the|el]] [[hospital|hospital]] [[but|pero]] [[it|él]] [[was|era]] [[too|demasiado]] [[far|lejos]] [[from|de]] [[work|trabajo]]. [[I|Yo]] [[think|creo]] [[I|yo]] [[will choose|elegiré]] [[the|el]] [[one|uno]] [[in|en]] [[Church Street|Church Street]].`;

const INSTRUCTIONS = 'Escucha el audio. Puedes leer la transcripción. Después responde las preguntas.';

const QUESTIONS = [
  { question: '[[What|Qué]] [[is the person looking for|está buscando la persona]]?', options: ['[[a job|un trabajo]]', '[[a new flat|un piso nuevo]]', '[[a library|una biblioteca]]'], correctAnswer: 1, explanation: '[[He says|Dice]] "[[I am looking for a new flat|estoy buscando un piso nuevo]]".' },
  { question: '[[Which area|Qué área]] [[is convenient|es conveniente]]?', options: ['[[near the park|cerca del parque]]', '[[near the station|cerca de la estación]]', '[[near the hospital|cerca del hospital]]'], correctAnswer: 1, explanation: '[[He says|Dice]] "[[The area near the station is very convenient|el área cerca de la estación es muy conveniente]]".' },
  { question: '[[Where|Dónde]] [[is the apartment block|está el bloque de apartamentos]]?', options: ['[[on Church Street|en Church Street]]', '[[on Station Road|en Station Road]]', '[[on Library Lane|en Library Lane]]'], correctAnswer: 0, explanation: '[[He says|Dice]] "[[There is an apartment block on Church Street|hay un bloque de apartamentos en Church Street]]".' },
  { question: '[[What|Qué]] [[is opposite the apartment block|está enfrente del bloque]]?', options: ['[[the supermarket|el supermercado]]', '[[the library|la biblioteca]]', '[[the hospital|el hospital]]'], correctAnswer: 1, explanation: '[[He says|Dice]] "[[It is opposite the library|está enfrente de la biblioteca]]".' },
  { question: '[[What|Qué]] [[does the building have|tiene el edificio]]?', options: ['[[a garden|un jardín]]', '[[a lift|un ascensor]]', '[[a garage|un garaje]]'], correctAnswer: 1, explanation: '[[He says|Dice]] "[[The building has a lift|el edificio tiene un ascensor]]".' },
  { question: '[[Where|Dónde]] [[was the other flat|estaba el otro piso]]?', options: ['[[near the station|cerca de la estación]]', '[[near the hospital|cerca del hospital]]', '[[near the library|cerca de la biblioteca]]'], correctAnswer: 1, explanation: '[[He says|Dice]] "[[I also saw a flat near the hospital|también vi un piso cerca del hospital]]".' },
  { question: '[[Why|Por qué]] [[didn\'t he choose the flat near the hospital|no eligió el piso cerca del hospital]]?', options: ['[[it was too expensive|era demasiado caro]]', '[[it was too far from work|era demasiado lejos del trabajo]]', '[[it had no lift|no tenía ascensor]]'], correctAnswer: 1, explanation: '[[He says|Dice]] "[[it was too far from work|era demasiado lejos del trabajo]]".' },
  { question: '[[What|Qué]] [[will he choose|elegirá]]?', options: ['[[the flat near the hospital|el piso cerca del hospital]]', '[[the one in Church Street|el de Church Street]]', '[[neither|ninguno]]'], correctAnswer: 1, explanation: '[[He says|Dice]] "[[I will choose the one in Church Street|elegiré el de Church Street]]".' },
  { question: '[[The apartment|El apartamento]] [[is|está]] [[near a supermarket|cerca de un supermercado]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'True', explanation: '[[True|Verdadero]]. [[The text says|El texto dice]] "[[near a supermarket|cerca de un supermercado]]".' },
  { question: '[[The views|Las vistas]] [[are|son]] [[great|geniales]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'True', explanation: '[[True|Verdadero]]. [[The text says|El texto dice]] "[[the views are great|las vistas son geniales]]".' },
  { question: '[[What|Cuál]] [[is|es]] [[the main topic|el tema principal]] [[of|del]] [[this listening|esta escucha]]?', options: ['[[Work|Trabajo]]', '[[Looking for a flat|Buscar un piso]]', '[[Shopping|Compras]]'], correctAnswer: 1, explanation: '[[The listening|La escucha]] [[describes|describe]] [[flat hunting|búsqueda de piso]].' },
  { question: '[[He|Él]] [[saw|vió]] [[only one flat|solo un piso]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'False', explanation: '[[False|Falso]]. [[He saw two|Vio dos]] - [[one on Church Street|uno en Church Street]] [[and one near the hospital|y uno cerca del hospital]].' },
  { question: '[[Which article|Qué artículo]] [[is used|se usa]] [[for "apartment block"|para "apartment block"]]?', options: ['[[an|un]]', '[[a|un]]', '[[the|el]]'], correctAnswer: 0, explanation: '[[An|Un]] [[before vowel|antes de vocal]] (apartment).' },
  { question: '[[The flat near the hospital|El piso cerca del hospital]] [[was|era]] [[closer to work|más cerca del trabajo]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'False', explanation: '[[False|Falso]]. [[It was too far from work|Era demasiado lejos del trabajo]].' },
  { question: '[[Church Street|Church Street]] [[is|está]] [[the name|el nombre]] [[of|de]] [[the street|la calle]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'True', explanation: '[[True|Verdadero]]. [[The text mentions|El texto menciona]] "[[Church Street|Church Street]]".' },
];

export const UNIT_28_LESSON_4_LISTENING: Exercise[] = QUESTIONS.map((q, i) => ({
  id: `b1-u28-l4-l${i + 1}`,
  type: 'listening',
  level: 'B1',
  topic: 'Places: buildings',
  difficulty: 'easy',
  transcript: LISTENING_TRANSCRIPT,
  content: { title: LESSON_TITLE, instructions: INSTRUCTIONS, questions: [q] },
  topicName: 'Listening',
}));
