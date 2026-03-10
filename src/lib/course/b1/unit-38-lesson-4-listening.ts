/**
 * Unidad 38 B1 — Lección 4: Comprensión auditiva (Clauses of contrast, Opinions)
 * 15 actividades
 */

import { Exercise } from '@/lib/exercise-generator';

const LESSON_TITLE = '[[Listening|Comprensión auditiva]]';
const LISTENING_TRANSCRIPT = `[[Hi|Hola]], [[I|yo]] [[am|soy]] [[Pedro|Pedro]] [[and|y]] [[I|yo]] [[want|quiero]] [[to share|compartir]] [[my|mi]] [[opinion|opinión]] [[about|sobre]] [[working from home|trabajar desde casa]]. [[In my view|En mi opinión]], [[it has|tiene]] [[many|muchas]] [[benefits|beneficios]]. [[Although|Aunque]] [[some people|algunas personas]] [[miss|extrañan]] [[the office|la oficina]], [[I think|creo]] [[that|que]] [[flexibility|flexibilidad]] [[is|es]] [[more important|más importante]]. [[However|Sin embargo]], [[I understand|entiendo]] [[that|que]] [[not everyone|no todo el mundo]] [[agrees|está de acuerdo]]. [[My colleague|Mi colega]] [[Maria|María]] [[believes|cree]] [[that|que]] [[working from home|trabajar desde casa]] [[is|es]] [[lonely|solitario]]. [[Although|Aunque]] [[I respect|respeto]] [[her opinion|su opinión]], [[I disagree|no estoy de acuerdo]]. [[From my point of view|Desde mi punto de vista]], [[the advantages|las ventajas]] [[outweigh|superan]] [[the disadvantages|las desventajas]]. [[I am convinced|Estoy convencido]] [[that|que]] [[this is|esta es]] [[the future|el futuro]] [[of work|del trabajo]].`;

const INSTRUCTIONS = 'Escucha el audio. Puedes leer la transcripción. Después responde las preguntas.';

const QUESTIONS = [
  { question: '[[What|Qué]] [[is Pedro\'s topic|es el tema de Pedro]]?', options: ['[[Social media|Redes sociales]]', '[[Working from home|Trabajar desde casa]]', '[[Travel|Viajes]]'], correctAnswer: 1, explanation: '[[He says|Dice]] "[[my opinion about working from home|mi opinión sobre trabajar desde casa]]".' },
  { question: '[[What|Qué]] [[does Pedro think|piensa Pedro]] [[about working from home|sobre trabajar desde casa]]?', options: ['[[it has no benefits|no tiene beneficios]]', '[[it has many benefits|tiene muchos beneficios]]', '[[it is boring|es aburrido]]'], correctAnswer: 1, explanation: '[[He says|Dice]] "[[In my view, it has many benefits|en mi opinión, tiene muchos beneficios]]".' },
  { question: '[[What|Qué]] [[do some people miss|extrañan algunas personas]]?', options: ['[[home|la casa]]', '[[the office|la oficina]]', '[[travel|viajar]]'], correctAnswer: 1, explanation: '[[He says|Dice]] "[[Although some people miss the office|aunque algunas personas extrañan la oficina]]".' },
  { question: '[[What|Qué]] [[does Pedro think is more important|piensa Pedro que es más importante]]?', options: ['[[the office|la oficina]]', '[[flexibility|flexibilidad]]', '[[money|dinero]]'], correctAnswer: 1, explanation: '[[He says|Dice]] "[[I think that flexibility is more important|creo que la flexibilidad es más importante]]".' },
  { question: '[[What|Qué]] [[does Maria believe|cree María]]?', options: ['[[working from home is great|trabajar desde casa es genial]]', '[[working from home is lonely|trabajar desde casa es solitario]]', '[[everyone loves it|a todos les encanta]]'], correctAnswer: 1, explanation: '[[He says|Dice]] "[[My colleague Maria believes that working from home is lonely|mi colega María cree que trabajar desde casa es solitario]]".' },
  { question: '[[Does Pedro agree|Está Pedro de acuerdo]] [[with Maria|con María]]?', options: ['[[Yes|Sí]]', '[[No, he disagrees|No, no está de acuerdo]]', '[[He is not sure|No está seguro]]'], correctAnswer: 1, explanation: '[[He says|Dice]] "[[Although I respect her opinion, I disagree|aunque respeto su opinión, no estoy de acuerdo]]".' },
  { question: '[[What|Qué]] [[does Pedro think|piensa Pedro]] [[about advantages vs disadvantages|sobre ventajas vs desventajas]]?', options: ['[[disadvantages outweigh|las desventajas superan]]', '[[advantages outweigh|las ventajas superan]]', '[[they are equal|son iguales]]'], correctAnswer: 1, explanation: '[[He says|Dice]] "[[From my point of view, the advantages outweigh the disadvantages|desde mi punto de vista, las ventajas superan las desventajas]]".' },
  { question: '[[Pedro|Pedro]] [[is convinced|está convencido]] [[that this is the future of work|que este es el futuro del trabajo]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'True', explanation: '[[True|Verdadero]]. [[The text says|El texto dice]] "[[I am convinced that this is the future of work|estoy convencido de que este es el futuro del trabajo]]".' },
  { question: '[[Pedro|Pedro]] [[respects|respeto]] [[Maria\'s opinion|la opinión de María]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'True', explanation: '[[True|Verdadero]]. [[The text says|El texto dice]] "[[Although I respect her opinion|aunque respeto su opinión]]".' },
  { question: '[[What|Cuál]] [[is|es]] [[the main topic|el tema principal]] [[of|del]] [[this listening|esta escucha]]?', options: ['[[Technology|Tecnología]]', '[[Pedro\'s opinion about working from home|La opinión de Pedro sobre trabajar desde casa]]', '[[Office life|Vida de oficina]]'], correctAnswer: 1, explanation: '[[The listening|La escucha]] [[is about|trata sobre]] [[Pedro\'s opinion on working from home|la opinión de Pedro sobre trabajar desde casa]].' },
  { question: '[[Which contrast word|Qué palabra de contraste]] [[does Pedro use|usa Pedro]] [[when talking about people missing the office|cuando habla de personas que extrañan la oficina]]?', options: ['[[however|sin embargo]]', '[[although|aunque]]', '[[but|pero]]'], correctAnswer: 1, explanation: '[[Although|Aunque]] [[introduces the contrast|introduce el contraste]].' },
  { question: '[[Pedro|Pedro]] [[understands|entiende]] [[that not everyone agrees|que no todo el mundo está de acuerdo]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'True', explanation: '[[True|Verdadero]]. [[The text says|El texto dice]] "[[However, I understand that not everyone agrees|sin embargo, entiendo que no todo el mundo está de acuerdo]]".' },
  { question: '[[Maria|María]] [[is|es]] [[Pedro\'s colleague|colega de Pedro]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'True', explanation: '[[True|Verdadero]]. [[The text says|El texto dice]] "[[My colleague Maria|mi colega María]]".' },
  { question: '[[Which phrase|Qué frase]] [[introduces Pedro\'s view|introduce la opinión de Pedro]]?', options: ['[[In my view|En mi opinión]]', '[[In fact|De hecho]]', '[[Actually|En realidad]]'], correctAnswer: 0, explanation: '[[In my view|En mi opinión]] [[introduces the opinion|introduce la opinión]].' },
  { question: '[[Pedro|Pedro]] [[thinks|piensa]] [[flexibility|flexibilidad]] [[is important|es importante]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'True', explanation: '[[True|Verdadero]]. [[The text says|El texto dice]] "[[I think that flexibility is more important|creo que la flexibilidad es más importante]]".' },
];

export const UNIT_38_LESSON_4_LISTENING: Exercise[] = QUESTIONS.map((q, i) => ({
  id: `b1-u38-l4-l${i + 1}`,
  type: 'listening',
  level: 'B1',
  topic: 'Opinions',
  difficulty: 'easy',
  transcript: LISTENING_TRANSCRIPT,
  content: { title: LESSON_TITLE, instructions: INSTRUCTIONS, questions: [q] },
  topicName: 'Listening',
}));
