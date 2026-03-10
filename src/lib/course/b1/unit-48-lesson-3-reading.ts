/**
 * Unidad 48 B1 — Lección 3: Comprensión lectora (Phrasal verbs 3, Work & study)
 * 15 actividades
 */

import { Exercise } from '@/lib/exercise-generator';

const LESSON_TITLE = '[[Reading|Comprensión lectora]]';
const READING_TRANSCRIPT = `[[I|Yo]] [[work out|entreno]] [[at the gym|en el gimnasio]] [[three times|tres veces]] [[a week|a la semana]]. [[I|Yo]] [[am looking forward to|estoy esperando con ilusión]] [[starting|empezar]] [[my new job|mi nuevo trabajo]] [[next month|el próximo mes]]. [[Last week|La semana pasada]] [[I|yo]] [[ran out of|me quedé sin]] [[paper|papel]] [[at the office|en la oficina]] [[and|y]] [[had to|tuve que]] [[go|ir]] [[to the shop|a la tienda]]. [[My colleague|Mi compañero]] [[takes care of|se encarga de]] [[the arrangements|los arreglos]] [[when|cuando]] [[we|nosotros]] [[have meetings|tenemos reuniones]]. [[We|Nosotros]] [[carried out|llevamos a cabo]] [[a survey|una encuesta]] [[last year|el año pasado]] [[and|y]] [[the results|los resultados]] [[were|fueron]] [[interesting|interesantes]]. [[I|Yo]] [[deal with|lidio con]] [[customer complaints|quejas de clientes]] [[every day|cada día]]. [[It\'s|Es]] [[not easy|no es fácil]] [[but|pero]] [[I|yo]] [[enjoy|disfruto]] [[it|ello]].`;

const INSTRUCTIONS = 'Lee el texto de abajo. Después responde las preguntas.';

const QUESTIONS = [
  { question: '[[How often|Con qué frecuencia]] [[does the person work out|entrena la persona]]?', options: ['[[Once a week|Una vez a la semana]]', '[[Three times a week|Tres veces a la semana]]', '[[Every day|Todos los días]]'], correctAnswer: 1, explanation: '[[The text says|El texto dice]] "[[work out three times a week|entreno tres veces a la semana]]".' },
  { question: '[[What|Qué]] [[is the person looking forward to|espera con ilusión la persona]]?', options: ['[[A holiday|Unas vacaciones]]', '[[Starting a new job|Empezar un nuevo trabajo]]', '[[A meeting|Una reunión]]'], correctAnswer: 1, explanation: '[[The text says|El texto dice]] "[[looking forward to starting my new job|esperando con ilusión empezar mi nuevo trabajo]]".' },
  { question: '[[What|Qué]] [[did the person run out of|de qué se quedó sin la persona]]?', options: ['[[Milk|Leche]]', '[[Paper at the office|Papel en la oficina]]', '[[Time|Tiempo]]'], correctAnswer: 1, explanation: '[[The text says|El texto dice]] "[[ran out of paper at the office|me quedé sin papel en la oficina]]".' },
  { question: '[[Who|Quién]] [[takes care of the arrangements|se encarga de los arreglos]]?', options: ['[[The boss|El jefe]]', '[[The colleague|El compañero]]', '[[The customer|El cliente]]'], correctAnswer: 1, explanation: '[[The text says|El texto dice]] "[[My colleague takes care of the arrangements|mi compañero se encarga de los arreglos]]".' },
  { question: '[[What|Qué]] [[did they carry out last year|llevaron a cabo el año pasado]]?', options: ['[[A meeting|Una reunión]]', '[[A survey|Una encuesta]]', '[[A project|Un proyecto]]'], correctAnswer: 1, explanation: '[[The text says|El texto dice]] "[[carried out a survey last year|llevamos a cabo una encuesta el año pasado]]".' },
  { question: '[[What|Qué]] [[does the person deal with every day|lidia la persona cada día]]?', options: ['[[Emails|Emails]]', '[[Customer complaints|Quejas de clientes]]', '[[Reports|Informes]]'], correctAnswer: 1, explanation: '[[The text says|El texto dice]] "[[deal with customer complaints every day|lidio con quejas de clientes cada día]]".' },
  { question: '[[Does the person enjoy|¿Disfruta la persona]] [[dealing with complaints|lidiando con quejas]]?', options: ['[[Yes|Sí]]', '[[No|No]]', '[[Not said|No se dice]]'], correctAnswer: 0, explanation: '[[The text says|El texto dice]] "[[I enjoy it|disfruto ello]]".' },
  { question: '[[Work out|Work out]] [[means exercise here|significa ejercitarse aquí]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'True', explanation: '[[True|Verdadero]]. [[Work out|Work out]] [[= exercise|= entrenar]].' },
  { question: '[[Look forward to|Look forward to]] [[is followed by -ing|va seguido de -ing]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'True', explanation: '[[True|Verdadero]]. "[[looking forward to starting|esperando con ilusión empezar]]".' },
  { question: '[[What|Cuál]] [[is the main topic|es el tema principal]] [[of|del]] [[this text|este texto]]?', options: ['[[Travel|Viajes]]', '[[Work and study routines|Rutinas de trabajo y estudio]]', '[[Food|Comida]]'], correctAnswer: 1, explanation: '[[The text|El texto]] [[describes|describe]] [[work routines|rutinas de trabajo]].' },
  { question: '[[The person|La persona]] [[went to the shop|fue a la tienda]] [[for paper|por papel]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'True', explanation: '[[True|Verdadero]]. [[The text says|El texto dice]] "[[had to go to the shop|tuve que ir a la tienda]]".' },
  { question: '[[Carry out|Carry out]] [[means perform|significa realizar]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'True', explanation: '[[True|Verdadero]]. [[Carry out|Carry out]] [[= perform|= llevar a cabo]].' },
  { question: '[[Which phrasal verb|Qué phrasal verb]] [[means "cuidar de"|significa cuidar de]]?', options: ['[[run out of|quedarse sin]]', '[[take care of|cuidar de]]', '[[work out|entrenar]]'], correctAnswer: 1, explanation: '[[Take care of|Cuidar de]].' },
  { question: '[[Deal with|Deal with]] [[means handle|significa manejar]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'True', explanation: '[[True|Verdadero]]. [[Deal with|Deal with]] [[= handle|= lidiar con]].' },
  { question: '[[The text|El texto]] [[uses|usa]] [[all six phrasal verbs|los seis phrasal verbs]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'True', explanation: '[[True|Verdadero]]. [[work out|work out]], [[look forward to|look forward to]], [[run out of|run out of]], [[take care of|take care of]], [[carry out|carry out]], [[deal with|deal with]].' },
];

export const UNIT_48_LESSON_3_READING: Exercise[] = QUESTIONS.map((q, i) => ({
  id: `b1-u48-l3-r${i + 1}`,
  type: 'reading',
  level: 'B1',
  topic: 'Work & Study',
  difficulty: 'easy',
  transcript: READING_TRANSCRIPT,
  content: { title: LESSON_TITLE, instructions: INSTRUCTIONS, questions: [q] },
  topicName: 'Reading',
}));
