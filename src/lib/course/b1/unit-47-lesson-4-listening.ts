/**
 * Unidad 47 B1 — Lección 4: Comprensión auditiva (Would rather, would sooner, Preferences)
 * 15 actividades
 */

import { Exercise } from '@/lib/exercise-generator';

const LESSON_TITLE = '[[Listening|Comprensión auditiva]]';
const LISTENING_TRANSCRIPT = `[[So|Así que]] [[what|qué]] [[do you want|quieres]] [[to do|hacer]] [[tonight|esta noche]]? [[I|Yo]] [[would rather|preferiría]] [[go|ir]] [[to the cinema|al cine]] [[than|que]] [[stay|quedarnos]] [[here|aquí]]. [[I\'d sooner|Preferiría]] [[see|ver]] [[a comedy|una comedia]] [[than|que]] [[a horror film|una película de terror]]. [[What about you|¿Y tú]]? [[I\'d rather|Preferiría]] [[we|nosotros]] [[went|fuéramos]] [[to a restaurant|a un restaurante]] [[instead|en su lugar]]. [[I\'d rather not|Preferiría no]] [[spend|gastar]] [[too much money|demasiado dinero]] [[though|aunque]]. [[Okay|Vale]], [[let\'s|vamos]] [[compromise|a comprometernos]]. [[I\'d rather|Preferiría]] [[you|tú]] [[chose|eligieras]] [[the film|la película]] [[and|y]] [[I\'ll|yo]] [[pick|elegiré]] [[the restaurant|el restaurante]]. [[Deal|Trato]]!`;

const INSTRUCTIONS = 'Escucha el audio. Puedes leer la transcripción. Después responde las preguntas.';

const QUESTIONS = [
  { question: '[[What|Qué]] [[does the first person want to do|quiere hacer la primera persona]]?', options: ['[[Stay here|Quedarse aquí]]', '[[Go to the cinema|Ir al cine]]', '[[Stay at home|Quedarse en casa]]'], correctAnswer: 1, explanation: '[[He says|Dice]] "[[I would rather go to the cinema|preferiría ir al cine]]".' },
  { question: '[[What|Qué]] [[type of film would they sooner see|tipo de película preferiría ver]]?', options: ['[[Horror|Terror]]', '[[Comedy|Comedia]]', '[[Action|Acción]]'], correctAnswer: 1, explanation: '[[He says|Dice]] "[[I\'d sooner see a comedy than a horror film|preferiría ver una comedia que una de terror]]".' },
  { question: '[[What|Qué]] [[would the second person rather do|preferiría hacer la segunda persona]]?', options: ['[[Go to the cinema|Ir al cine]]', '[[Go to a restaurant|Ir a un restaurante]]', '[[Stay home|Quedarse en casa]]'], correctAnswer: 1, explanation: '[[He says|Dice]] "[[I\'d rather we went to a restaurant|preferiría que fuéramos a un restaurante]]".' },
  { question: '[[What|Qué]] [[would the second person rather not do|preferiría la segunda persona no hacer]]?', options: ['[[Eat|Comer]]', '[[Spend too much money|Gastar demasiado dinero]]', '[[Go out|Salir]]'], correctAnswer: 1, explanation: '[[He says|Dice]] "[[I\'d rather not spend too much money|preferiría no gastar demasiado dinero]]".' },
  { question: '[[What|Qué]] [[do they decide to do|deciden hacer]]?', options: ['[[Only cinema|Solo cine]]', '[[Compromise - cinema and restaurant|Compromiso - cine y restaurante]]', '[[Only restaurant|Solo restaurante]]'], correctAnswer: 1, explanation: '[[He says|Dice]] "[[let\'s compromise|vamos a comprometernos]]".' },
  { question: '[[Who|Quién]] [[chooses the film|elige la película]]?', options: ['[[The first person|La primera persona]]', '[[The second person|La segunda persona]]', '[[Both|Ambos]]'], correctAnswer: 1, explanation: '[[He says|Dice]] "[[I\'d rather you chose the film|preferiría que eligieras la película]]".' },
  { question: '[[Who|Quién]] [[picks the restaurant|elige el restaurante]]?', options: ['[[The first person|La primera persona]]', '[[The second person|La segunda persona]]', '[[Both|Ambos]]'], correctAnswer: 0, explanation: '[[He says|Dice]] "[[I\'ll pick the restaurant|yo elegiré el restaurante]]".' },
  { question: '[[Would rather|Would rather]] [[is used|se usa]] [[in the conversation|en la conversación]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'True', explanation: '[[True|Verdadero]]. [[Multiple times|Varias veces]].' },
  { question: '[[What|Cuál]] [[is the main topic|es el tema principal]] [[of|del]] [[this listening|esta escucha]]?', options: ['[[Work|Trabajo]]', '[[Making plans and expressing preferences|Hacer planes y expresar preferencias]]', '[[Shopping|Compras]]'], correctAnswer: 1, explanation: '[[The listening|La escucha]] [[is about|trata sobre]] [[plans and preferences|planes y preferencias]].' },
  { question: '[[They|Ellos]] [[agree immediately|están de acuerdo inmediatamente]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'False', explanation: '[[False|Falso]]. [[They compromise|Se comprometen]] [[because they had different preferences|porque tenían preferencias diferentes]].' },
  { question: '[[I\'d rather we went|Preferiría que fuéramos]] [[uses|usa]] [[past tense|tiempo pasado]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'True', explanation: '[[True|Verdadero]]. [[Would rather (that) + past|Would rather (que) + pasado]].' },
  { question: '[[Which structure|Qué estructura]] [[means "preferiría no"|significa preferiría no]]?', options: ['[[would rather|preferiría]]', '[[would rather not|preferiría no]]', '[[would sooner|preferiría]]'], correctAnswer: 1, explanation: '[[Would rather not|Preferiría no]].' },
  { question: '[[They|Ellos]] [[end with a deal|terminan con un trato]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'True', explanation: '[[True|Verdadero]]. [[The text says|El texto dice]] "[[Deal!|¡Trato!]]".' },
  { question: '[[Would sooner|Would sooner]] [[appears|aparece]] [[in the conversation|en la conversación]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'True', explanation: '[[True|Verdadero]]. [[The text says|El texto dice]] "[[I\'d sooner see a comedy|preferiría ver una comedia]]".' },
  { question: '[[This|Esto]] [[is|es]] [[a conversation between two people|una conversación entre dos personas]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'True', explanation: '[[True|Verdadero]]. [[They discuss plans|Discuten planes]] [[together|juntos]].' },
];

export const UNIT_47_LESSON_4_LISTENING: Exercise[] = QUESTIONS.map((q, i) => ({
  id: `b1-u47-l4-l${i + 1}`,
  type: 'listening',
  level: 'B1',
  topic: 'Preferences',
  difficulty: 'easy',
  transcript: LISTENING_TRANSCRIPT,
  content: { title: LESSON_TITLE, instructions: INSTRUCTIONS, questions: [q] },
  topicName: 'Listening',
}));
