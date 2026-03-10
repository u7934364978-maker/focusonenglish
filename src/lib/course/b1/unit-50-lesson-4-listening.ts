/**
 * Unidad 50 B1 — Lección 4: Comprensión auditiva (Repaso 46–49)
 * 15 actividades
 */

import { Exercise } from '@/lib/exercise-generator';

const LESSON_TITLE = '[[Listening|Comprensión auditiva]]';
const LISTENING_TRANSCRIPT = `[[Hi|Hola]] [[Emma|Emma]], [[it\'s|es]] [[me|yo]] [[again|de nuevo]]. [[You|Tú]] [[had better|más te vale]] [[call|llamar]] [[me|me]] [[back|de vuelta]] [[today|hoy]]. [[I|Yo]] [[would rather|preferiría]] [[we|nosotros]] [[discussed|discutiéramos]] [[this|esto]] [[in person|en persona]] [[than|que]] [[by email|por email]]. [[I|Yo]] [[need to|necesito]] [[go|ir]] [[to the bank|al banco]] [[but|pero]] [[I|yo]] [[ran out of|me quedé sin]] [[time|tiempo]] [[yesterday|ayer]]. [[I|Yo]] [[am looking forward to|estoy esperando con ilusión]] [[seeing|ver]] [[you|te]] [[next week|la próxima semana]]. [[Please|Por favor]] [[take care of|cuida de]] [[the documents|los documentos]] [[I|yo]] [[sent|envié]]. [[We|Nosotros]] [[need to|necesitamos]] [[carry out|llevar a cabo]] [[the plan|el plan]] [[soon|pronto]]. [[I|Yo]] [[deal with|lidio con]] [[the clients|los clientes]] [[every day|cada día]]. [[You|Tú]] [[needn\'t|no necesitas]] [[worry|preocuparte]] [[everything is under control|todo está bajo control]].`;

const INSTRUCTIONS = 'Escucha el audio. Puedes leer la transcripción. Después responde las preguntas.';

const QUESTIONS = [
  { question: '[[What|Qué]] [[had Emma better do|más le vale hacer a Emma]]?', options: ['[[Send an email|Enviar un email]]', '[[Call back today|Llamar de vuelta hoy]]', '[[Wait|Esperar]]'], correctAnswer: 1, explanation: '[[He says|Dice]] "[[you had better call me back today|más te vale llamarme hoy]]".' },
  { question: '[[What|Qué]] [[would the speaker rather do|preferiría hacer el hablante]]?', options: ['[[Discuss by email|Discutir por email]]', '[[Discuss in person|Discutir en persona]]', '[[Not discuss|No discutir]]'], correctAnswer: 1, explanation: '[[He says|Dice]] "[[would rather we discussed in person than by email|preferiría que discutiéramos en persona que por email]]".' },
  { question: '[[What|Qué]] [[did the speaker run out of|de qué se quedó sin el hablante]]?', options: ['[[Money|Dinero]]', '[[Time yesterday|Tiempo ayer]]', '[[Patience|Paciencia]]'], correctAnswer: 1, explanation: '[[He says|Dice]] "[[ran out of time yesterday|me quedé sin tiempo ayer]]".' },
  { question: '[[What|Qué]] [[is the speaker looking forward to|espera con ilusión el hablante]]?', options: ['[[A holiday|Unas vacaciones]]', '[[Seeing Emma next week|Ver a Emma la próxima semana]]', '[[A meeting|Una reunión]]'], correctAnswer: 1, explanation: '[[He says|Dice]] "[[looking forward to seeing you next week|esperando con ilusión verte la próxima semana]]".' },
  { question: '[[What|Qué]] [[should Emma take care of|debe cuidar Emma]]?', options: ['[[The office|La oficina]]', '[[The documents sent|Los documentos enviados]]', '[[The clients|Los clientes]]'], correctAnswer: 1, explanation: '[[He says|Dice]] "[[take care of the documents I sent|cuida de los documentos que envié]]".' },
  { question: '[[What|Qué]] [[do they need to carry out|necesitan llevar a cabo]]?', options: ['[[A meeting|Una reunión]]', '[[The plan soon|El plan pronto]]', '[[A report|Un informe]]'], correctAnswer: 1, explanation: '[[He says|Dice]] "[[need to carry out the plan soon|necesitamos llevar a cabo el plan pronto]]".' },
  { question: '[[Why|Por qué]] [[needn\'t Emma worry|no necesita Emma preocuparse]]?', options: ['[[Nothing matters|Nada importa]]', '[[Everything is under control|Todo está bajo control]]', '[[It\'s too late|Es demasiado tarde]]'], correctAnswer: 1, explanation: '[[He says|Dice]] "[[everything is under control|todo está bajo control]]".' },
  { question: '[[What|Qué]] [[does the speaker deal with every day|lidia el hablante cada día]]?', options: ['[[Emails|Emails]]', '[[The clients|Los clientes]]', '[[Reports|Informes]]'], correctAnswer: 1, explanation: '[[He says|Dice]] "[[deal with the clients every day|lidio con los clientes cada día]]".' },
  { question: '[[What|Cuál]] [[is the main topic|es el tema principal]] [[of|del]] [[this listening|esta escucha]]?', options: ['[[Shopping|Compras]]', '[[Work and communication with units 46-49|Trabajo y comunicación con unidades 46-49]]', '[[Travel|Viajes]]'], correctAnswer: 1, explanation: '[[The listening|La escucha]] [[uses|usa]] [[all structures from 46-49|todas las estructuras de 46-49]].' },
  { question: '[[Had better|Had better]] [[is used|se usa]] [[in the message|en el mensaje]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'True', explanation: '[[True|Verdadero]]. "[[had better call me back|más te vale llamarme]]".' },
  { question: '[[Would rather|Would rather]] [[is used|se usa]] [[with past tense|con tiempo pasado]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'True', explanation: '[[True|Verdadero]]. "[[would rather we discussed|preferiría que discutiéramos]]".' },
  { question: '[[Which structure|Qué estructura]] [[means "no necesitas"|significa no necesitas]]?', options: ['[[need to|necesitar]]', '[[needn\'t|no necesitas]]', '[[had better|más vale]]'], correctAnswer: 1, explanation: '[[Needn\'t|No necesitas]].' },
  { question: '[[The speaker|El hablante]] [[needs to go to the bank|necesita ir al banco]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'True', explanation: '[[True|Verdadero]]. [[The text says|El texto dice]] "[[I need to go to the bank|necesito ir al banco]]".' },
  { question: '[[Run out of|Run out of]] [[means|significa]] [[quedarse sin|quedarse sin]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'True', explanation: '[[True|Verdadero]]. [[Run out of|Quedarse sin]].' },
  { question: '[[The text|El texto]] [[reviews|repasa]] [[units 46-49|unidades 46-49]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'True', explanation: '[[True|Verdadero]]. [[had better|had better]], [[would rather|would rather]], [[phrasal verbs|phrasal verbs]], [[need|need]].' },
];

export const UNIT_50_LESSON_4_LISTENING: Exercise[] = QUESTIONS.map((q, i) => ({
  id: `b1-u50-l4-l${i + 1}`,
  type: 'listening',
  level: 'B1',
  topic: 'Review 46-49',
  difficulty: 'easy',
  transcript: LISTENING_TRANSCRIPT,
  content: { title: LESSON_TITLE, instructions: INSTRUCTIONS, questions: [q] },
  topicName: 'Listening',
}));
