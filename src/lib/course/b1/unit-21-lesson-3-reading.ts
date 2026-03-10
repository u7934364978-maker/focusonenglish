/**
 * Unidad 21 B1 — Lección 3: Comprensión lectora (Gerund vs infinitive, Hobbies & leisure)
 * 15 actividades
 */

import { Exercise } from '@/lib/exercise-generator';

const LESSON_TITLE = '[[Reading|Comprensión lectora]]';
const READING_TRANSCRIPT = `[[I|Yo]] [[enjoy|disfruto]] [[spending|pasando]] [[time|tiempo]] [[on|en]] [[my|mis]] [[hobbies|pasatiempos]]. [[I|Yo]] [[love|me encanta]] [[reading|leyendo]] [[books|libros]] [[and|y]] [[I|yo]] [[have|he]] [[just|acabo de]] [[finished|terminado]] [[reading|leyendo]] [[a|un]] [[great|gran]] [[novel|novela]]. [[I|Yo]] [[want|quiero]] [[to learn|aprender]] [[to play|a tocar]] [[the guitar|la guitarra]] [[this year|este año]]. [[My|Mi]] [[friend|amigo]] [[decided|decidió]] [[to join|unirse]] [[a|a]] [[a|un]] [[photography|fotografía]] [[club|club]] [[last month|el mes pasado]]. [[We|Nosotros]] [[avoid|evitamos]] [[sitting|sentarnos]] [[at home|en casa]] [[all|todo]] [[day|el día]] [[at weekends|los fines de semana]]. [[We|Nosotros]] [[need|necesitamos]] [[to plan|planear]] [[our|nuestras]] [[summer|verano]] [[holiday|vacaciones]] [[soon|pronto]].`;

const INSTRUCTIONS = 'Lee el texto de abajo. Después responde las preguntas.';

const QUESTIONS = [
  { question: '[[What|Qué]] [[does the person enjoy|disfruta la persona]]?', options: ['[[working|trabajar]]', '[[spending time on hobbies|pasar tiempo en pasatiempos]]', '[[watching TV|ver la tele]]'], correctAnswer: 1, explanation: '[[The text says|El texto dice]] "[[I enjoy spending time on my hobbies|disfruto pasando tiempo en mis pasatiempos]]".' },
  { question: '[[What|Qué]] [[did they just finish|acaban de terminar]]?', options: ['[[a film|una película]]', '[[a book|un libro]]', '[[a course|un curso]]'], correctAnswer: 1, explanation: '[[The text says|El texto dice]] "[[I have just finished reading a great novel|acabo de terminar de leer una gran novela]]".' },
  { question: '[[What|Qué]] [[do they want to learn|quieren aprender]]?', options: ['[[to play the piano|a tocar el piano]]', '[[to play the guitar|a tocar la guitarra]]', '[[to play football|a jugar al fútbol]]'], correctAnswer: 1, explanation: '[[The text says|El texto dice]] "[[I want to learn to play the guitar|quiero aprender a tocar la guitarra]]".' },
  { question: '[[What|Qué]] [[did their friend decide|decidió su amigo]]?', options: ['[[to join a gym|unirse a un gimnasio]]', '[[to join a photography club|unirse a un club de fotografía]]', '[[to join a book club|unirse a un club de lectura]]'], correctAnswer: 1, explanation: '[[The text says|El texto dice]] "[[My friend decided to join a photography club|mi amigo decidió unirse a un club de fotografía]]".' },
  { question: '[[What|Qué]] [[do they avoid|evitan]]?', options: ['[[going out|salir]]', '[[sitting at home all day|sentarse en casa todo el día]]', '[[working|trabajar]]'], correctAnswer: 1, explanation: '[[The text says|El texto dice]] "[[We avoid sitting at home all day|evitamos sentarnos en casa todo el día]]".' },
  { question: '[[What|Qué]] [[do they need to plan|necesitan planear]]?', options: ['[[a party|una fiesta]]', '[[their summer holiday|sus vacaciones de verano]]', '[[a meeting|una reunión]]'], correctAnswer: 1, explanation: '[[The text says|El texto dice]] "[[We need to plan our summer holiday|necesitamos planear nuestras vacaciones de verano]]".' },
  { question: '[[The person|La persona]] [[enjoys|disfruta]] [[reading|leyendo]] [[books|libros]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'True', explanation: '[[True|Verdadero]]. [[The text says|El texto dice]] "[[I love reading books|me encanta leer libros]]".' },
  { question: '[[The person|La persona]] [[wants|quiere]] [[to learn|aprender]] [[the piano|el piano]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'False', explanation: '[[False|Falso]]. [[They|Ellos]] [[want to learn the guitar|quieren aprender la guitarra]].' },
  { question: '[[When|Cuándo]] [[did the friend decide|decidió el amigo]] [[to join|unirse]] [[the club|al club]]?', options: ['[[last week|la semana pasada]]', '[[last month|el mes pasado]]', '[[this month|este mes]]'], correctAnswer: 1, explanation: '[[The text says|El texto dice]] "[[last month|el mes pasado]]".' },
  { question: '[[What|Cuál]] [[is|es]] [[the main topic|el tema principal]] [[of|del]] [[this text|este texto]]?', options: ['[[Work|Trabajo]]', '[[Hobbies and leisure activities|Pasatiempos y actividades de ocio]]', '[[School|Escuela]]'], correctAnswer: 1, explanation: '[[The text|El texto]] [[talks about|habla de]] [[hobbies|pasatiempos]] [[and|y]] [[leisure|ocio]].' },
  { question: '[[Which verb|Qué verbo]] [[follows|va seguido de]] [[enjoy|disfrutar]]?', options: ['[[to + infinitive|to + infinitivo]]', '[[-ing|gerundio]]', '[[past tense|pasado]]'], correctAnswer: 1, explanation: '[[Enjoy|Disfrutar]] + [[-ing|gerundio]].' },
  { question: '[[Which verb|Qué verbo]] [[follows|va seguido de]] [[want|querer]]?', options: ['[[to + infinitive|to + infinitivo]]', '[[-ing|gerundio]]', '[[past tense|pasado]]'], correctAnswer: 0, explanation: '[[Want|Querer]] + [[to + infinitive|to + infinitivo]].' },
  { question: '[[They|Ellos]] [[need|necesitan]] [[to plan|planear]] [[their holiday|sus vacaciones]] [[soon|pronto]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'True', explanation: '[[True|Verdadero]]. [[The text says|El texto dice]] "[[We need to plan our summer holiday soon|necesitamos planear nuestras vacaciones de verano pronto]]".' },
  { question: '[[At weekends|Los fines de semana]] [[they|ellos]] [[prefer|prefieren]] [[staying|quedarse]] [[at home|en casa]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'False', explanation: '[[False|Falso]]. [[They|Ellos]] [[avoid sitting at home|evitan sentarse en casa]].' },
  { question: '[[The person|La persona]] [[finished|terminó]] [[reading|leyendo]] [[a novel|una novela]] [[recently|recientemente]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'True', explanation: '[[True|Verdadero]]. [[The text says|El texto dice]] "[[I have just finished reading a great novel|acabo de terminar de leer una gran novela]]".' },
];

export const UNIT_21_LESSON_3_READING: Exercise[] = QUESTIONS.map((q, i) => ({
  id: `b1-u21-l3-r${i + 1}`,
  type: 'reading',
  level: 'B1',
  topic: 'Hobbies & Leisure',
  difficulty: 'easy',
  transcript: READING_TRANSCRIPT,
  content: { title: LESSON_TITLE, instructions: INSTRUCTIONS, questions: [q] },
  topicName: 'Reading',
}));
