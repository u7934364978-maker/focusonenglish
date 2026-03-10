/**
 * Unidad 9 B1 — Lección 4: Comprensión auditiva (Used to, Habits & lifestyle)
 * 15 actividades
 */

import { Exercise } from '@/lib/exercise-generator';

const LESSON_TITLE = '[[Listening|Comprensión auditiva]]';
const LISTENING_TRANSCRIPT = `[[Hi|Hola]], [[I|yo]] [[am|soy]] [[Mark|Mark]]. [[I|Yo]] [[used to|solía]] [[work|trabajar]] [[in|en]] [[an office|una oficina]] [[but|pero]] [[now|ahora]] [[I|yo]] [[work from home|trabajo desde casa]]. [[At first|Al principio]] [[it|]] [[was|era]] [[difficult|difícil]] [[but|pero]] [[I|yo]] [[got used to|me acostumbré a]] [[it|]] [[after|después]] [[a few weeks|unas semanas]]. [[I|Yo]] [[am|estoy]] [[used to|acostumbrado a]] [[waking up|despertarme]] [[early|temprano]] [[now|ahora]] [[and|y]] [[I|yo]] [[have|tengo]] [[a good routine|una buena rutina]]. [[I|Yo]] [[used to|solía]] [[spend|pasar]] [[hours|horas]] [[commuting|desplazarme]] [[but|pero]] [[now|ahora]] [[I|yo]] [[save|ahorro]] [[that time|ese tiempo]]. [[My wife|Mi esposa]] [[used to|solía]] [[worry|preocuparse]] [[about|sobre]] [[me|mí]] [[working alone|trabajando solo]] [[but|pero]] [[she|ella]] [[is used to|está acostumbrada a]] [[it|]] [[now|ahora]].`;

const INSTRUCTIONS = 'Escucha el audio. Puedes leer la transcripción. Después responde las preguntas.';

const QUESTIONS = [
  { question: '[[Where|Dónde]] [[did Mark use to work|solía trabajar Mark]]?', options: ['[[at home|en casa]]', '[[in an office|en una oficina]]', '[[in a café|en un café]]'], correctAnswer: 1, explanation: '[[He says|Dice]] "[[I used to work in an office|solía trabajar en una oficina]]".' },
  { question: '[[Where|Dónde]] [[does Mark work now|trabaja Mark ahora]]?', options: ['[[in an office|en una oficina]]', '[[from home|desde casa]]', '[[in a co-working space|en un espacio de coworking]]'], correctAnswer: 1, explanation: '[[He says|Dice]] "[[now I work from home|ahora trabajo desde casa]]".' },
  { question: '[[Was|Fue]] [[it difficult at first|difícil al principio]]?', options: ['[[Yes|Sí]]', '[[No|No]]'], correctAnswer: 'Yes', explanation: '[[He says|Dice]] "[[At first it was difficult|al principio era difícil]]".' },
  { question: '[[How long|Cuánto tiempo]] [[did it take|tomó]] [[to get used to it|acostumbrarse]]?', options: ['[[a few days|unos días]]', '[[a few weeks|unas semanas]]', '[[a few months|unos meses]]'], correctAnswer: 1, explanation: '[[He says|Dice]] "[[I got used to it after a few weeks|me acostumbré después de unas semanas]]".' },
  { question: '[[What|Qué]] [[is Mark used to now|está Mark acostumbrado ahora]]?', options: ['[[working late|trabajar tarde]]', '[[waking up early|despertarse temprano]]', '[[long meetings|reuniones largas]]'], correctAnswer: 1, explanation: '[[He says|Dice]] "[[I am used to waking up early now|estoy acostumbrado a despertarme temprano ahora]]".' },
  { question: '[[What|Qué]] [[did Mark use to spend time on|solía Mark pasar tiempo en]]?', options: ['[[commuting|desplazarse]]', '[[cooking|cocinar]]', '[[exercising|ejercitarse]]'], correctAnswer: 0, explanation: '[[He says|Dice]] "[[I used to spend hours commuting|solía pasar horas desplazándome]]".' },
  { question: '[[Does|Ahorra]] [[Mark save time now|Mark tiempo ahora]]?', options: ['[[Yes|Sí]]', '[[No|No]]'], correctAnswer: 'Yes', explanation: '[[He says|Dice]] "[[now I save that time|ahora ahorro ese tiempo]]".' },
  { question: '[[Who|Quién]] [[used to worry|solía preocuparse]] [[about Mark|por Mark]]?', options: ['[[his boss|su jefe]]', '[[his wife|su esposa]]', '[[his friends|sus amigos]]'], correctAnswer: 1, explanation: '[[He says|Dice]] "[[My wife used to worry about me|mi esposa solía preocuparse por mí]]".' },
  { question: '[[Is|Está]] [[Mark\'s wife|La esposa de Mark]] [[used to it now|acostumbrada ahora]]?', options: ['[[Yes|Sí]]', '[[No|No]]'], correctAnswer: 'Yes', explanation: '[[He says|Dice]] "[[she is used to it now|está acostumbrada ahora]]".' },
  { question: '[[What|Cuál]] [[is|es]] [[the main topic|el tema principal]] [[of|del]] [[this listening|esta escucha]]?', options: ['[[Office work|Trabajo de oficina]]', '[[Adapting to working from home|Adaptarse a trabajar desde casa]]', '[[Family|Familia]]'], correctAnswer: 1, explanation: '[[The listening|La escucha]] [[describes|describe]] [[adaptation to new work style|adaptación al nuevo estilo de trabajo]].' },
  { question: '[[Mark|Mark]] [[has|tiene]] [[a good routine|una buena rutina]] [[now|ahora]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'True', explanation: '[[True|Verdadero]]. [[The text says|El texto dice]] "[[I have a good routine|tengo una buena rutina]]".' },
  { question: '[[Mark|Mark]] [[still|todavía]] [[commutes|se desplaza]] [[to work|al trabajo]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'False', explanation: '[[False|Falso]]. [[He|Él]] [[works from home|trabaja desde casa]] [[now|ahora]].' },
  { question: '[[Which structure|Qué estructura]] [[expresses|expresa]] [[past habit|hábito pasado]]?', options: ['[[be used to|estar acostumbrado a]]', '[[used to|solía]]', '[[get used to|acostumbrarse a]]'], correctAnswer: 1, explanation: '[[Used to|Used to]] [[for past habits|para hábitos pasados]].' },
  { question: '[[Mark|Mark]] [[got used to|se acostumbró a]] [[working from home|trabajar desde casa]] [[quickly|rápidamente]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'False', explanation: '[[False|Falso]]. [[It took a few weeks|Tomó unas semanas]].' },
  { question: '[[The wife|La esposa]] [[used to worry|solía preocuparse]] [[about Mark working alone|por Mark trabajando solo]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'True', explanation: '[[True|Verdadero]]. [[The text says|El texto dice]] "[[My wife used to worry about me working alone|mi esposa solía preocuparse por mí trabajando solo]]".' },
];

export const UNIT_9_LESSON_4_LISTENING: Exercise[] = QUESTIONS.map((q, i) => ({
  id: `b1-u9-l4-l${i + 1}`,
  type: 'listening',
  level: 'B1',
  topic: 'Habits & Lifestyle',
  difficulty: 'easy',
  transcript: LISTENING_TRANSCRIPT,
  content: { title: LESSON_TITLE, instructions: INSTRUCTIONS, questions: [q] },
  topicName: 'Listening',
}));
