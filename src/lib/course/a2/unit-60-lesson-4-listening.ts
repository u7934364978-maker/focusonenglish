/**
 * Unidad 60 — Lección 4: Comprensión auditiva (Final A2 Review)
 * 15 actividades: 1 audio sobre completar el curso + 15 preguntas
 */

import { Exercise } from '@/lib/exercise-generator';

const LESSON_TITLE = '[[Listening|Comprensión auditiva]]';
const LISTENING_TRANSCRIPT = `[[Hi|Hola]]! [[I|Yo]] [[am|soy]] [[David|David]]. [[I|Yo]] [[have|he]] [[just|acabo de]] [[finished|terminado]] [[the|el]] [[A2|A2]] [[English|inglés]] [[course|curso]]. [[It was|Fue]] [[hard|difícil]] [[work|trabajo]] [[but|pero]] [[I|yo]] [[am|estoy]] [[very|muy]] [[happy|feliz]]. [[My|Mi]] [[progress|progreso]] [[has|ha]] [[been|sido]] [[great|genial]] [[and|y]] [[I|yo]] [[received|recibí]] [[my|mi]] [[certificate|certificado]] [[yesterday|ayer]]. [[Congratulations|Felicitaciones]] [[to|a]] [[all|todos]] [[the|los]] [[students|estudiantes]] [[who|que]] [[completed|completaron]] [[the|el]] [[course|curso]]! [[This|Este]] [[is|es]] [[a|un]] [[big|gran]] [[achievement|logro]] [[and|y]] [[a|un]] [[success|éxito]]. [[I|Yo]] [[am|estoy]] [[going to|voy a]] [[continue|continuar]] [[with|con]] [[the|el]] [[B1|B1]] [[course|curso]] [[next|el próximo]] [[month|mes]]. [[I|Yo]] [[want|quiero]] [[to|]] [[complete|completar]] [[all|todos]] [[the|los]] [[levels|niveles]] [[one day|un día]].`;

const INSTRUCTIONS = 'Escucha el audio de abajo. Puedes leer la transcripción después de escuchar. Después responde las preguntas.';

const QUESTIONS = [
  { question: '[[What|Qué]] [[is|es]] [[the speaker\'s|del hablante]] [[name|nombre]]?', options: ['[[Tom|Tom]]', '[[David|David]]', '[[John|John]]', '[[Mike|Mike]]'], correctAnswer: 1, explanation: '[[I am David|Soy David]].' },
  { question: '[[What|Qué]] [[has|ha]] [[David|David]] [[just|acabo de]] [[finished|terminado]]?', options: ['[[A1 course|Curso A1]]', '[[A2 course|Curso A2]]', '[[B1 course|Curso B1]]', '[[B2 course|Curso B2]]'], correctAnswer: 1, explanation: '[[I have just finished the A2 English course|Acabo de terminar el curso de inglés A2]].' },
  { question: '[[How|Cómo]] [[does|fue]] [[David|David]] [[describe|describir]] [[the work|el trabajo]]?', options: ['[[Easy|Fácil]]', '[[Hard|Difícil]]', '[[Boring|Aburrido]]', '[[Short|Corto]]'], correctAnswer: 1, explanation: '[[It was hard work|Fue un trabajo difícil]].' },
  { question: '[[How|Cómo]] [[has|ha]] [[his progress|su progreso]] [[been|sido]]?', options: ['[[Bad|Malo]]', '[[Great|Genial]]', '[[Slow|Lento]]', '[[Little|Poco]]'], correctAnswer: 1, explanation: '[[My progress has been great|Mi progreso ha sido genial]].' },
  { question: '[[When|Cuándo]] [[did|recibió]] [[David|David]] [[receive|recibir]] [[his certificate|su certificado]]?', options: ['[[Last week|La semana pasada]]', '[[Yesterday|Ayer]]', '[[Today|Hoy]]', '[[Last month|El mes pasado]]'], correctAnswer: 1, explanation: '[[I received my certificate yesterday|Recibí mi certificado ayer]].' },
  { question: '[[Who|A quién]] [[does|da]] [[David|David]] [[congratulations|felicitaciones]]?', options: ['[[Only himself|Solo a sí mismo]]', '[[All students who completed the course|A todos los estudiantes que completaron el curso]]', '[[His teacher|A su profesor]]', '[[His family|A su familia]]'], correctAnswer: 1, explanation: '[[Congratulations to all the students who completed the course|Felicitaciones a todos los estudiantes que completaron el curso]].' },
  { question: '[[What|Qué]] [[does|va a]] [[David|David]] [[do|hacer]] [[next|próximo]]?', options: ['[[Stop studying|Dejar de estudiar]]', '[[Continue with B1 course next month|Continuar con el curso B1 el próximo mes]]', '[[Travel|Viajar]]', '[[Get a job|Conseguir trabajo]]'], correctAnswer: 1, explanation: '[[I am going to continue with the B1 course next month|Voy a continuar con el curso B1 el próximo mes]].' },
  { question: '[[What|Qué]] [[does|quiere]] [[David|David]] [[want|querer]] [[to do|hacer]] [[one day|un día]]?', options: ['[[Complete all levels|Completar todos los niveles]]', '[[Teach English|Enseñar inglés]]', '[[Write a book|Escribir un libro]]', '[[Move abroad|Mudarse al extranjero]]'], correctAnswer: 0, explanation: '[[I want to complete all the levels one day|Quiero completar todos los niveles un día]].' },
  { question: '[[David|David]] [[says|dice]] [[this is|esto es]] [[a big|un gran]] ____.', options: ['[[failure|fracaso]]', '[[achievement|logro]]', '[[problem|problema]]', '[[mistake|error]]'], correctAnswer: 1, explanation: '[[This is a big achievement|Este es un gran logro]].' },
  { question: '[[The|El]] [[main|principal]] [[topic|tema]] [[of|del]] [[audio|audio]] [[is|es]]?', options: ['[[A student celebrating course completion|Un estudiante celebrando la finalización del curso]]', '[[English grammar|Gramática inglesa]]', '[[Travel plans|Planes de viaje]]', '[[Job interview|Entrevista de trabajo]]'], correctAnswer: 0, explanation: '[[The audio is about David completing the A2 course|El audio trata de David completando el curso A2]].' },
  { question: '[[David|David]] [[is|está]] [[very|muy]] [[happy|feliz]] [[about|por]] [[completing|completar]] [[the course|el curso]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'True', explanation: '[[True|Verdadero]]. [[I am very happy|Estoy muy feliz]].' },
  { question: '[[David|David]] [[received|recibió]] [[his certificate|su certificado]] [[last week|la semana pasada]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'False', explanation: '[[False|Falso]]. [[He received it yesterday|Lo recibió ayer]].' },
  { question: '[[Which|Cuál]] [[word|palabra]] [[does|usa]] [[David|David]] [[NOT|NO]] [[use|usar]]?', options: ['[[Success|Éxito]]', '[[Achievement|Logro]]', '[[Certificate|Certificado]]', '[[Failure|Fracaso]]'], correctAnswer: 3, explanation: '[[Failure|Fracaso]] [[is not used|no se usa]].' },
  { question: '[[David|David]] [[describes|describe]] [[completing the course|completar el curso]] [[as|como]] ____ ____ ____.', options: ['[[a big achievement and a success|un gran logro y un éxito]]', '[[easy work|trabajo fácil]]', '[[a small step|un pequeño paso]]', '[[nothing special|nada especial]]'], correctAnswer: 0, explanation: '[[This is a big achievement and a success|Este es un gran logro y un éxito]].' },
  { question: '[[David|David]] [[will|]] ____ ____ ____ [[next month|el próximo mes]].', options: ['[[continue with the B1 course|continuar con el curso B1]]', '[[stop studying|dejar de estudiar]]', '[[travel abroad|viajar al extranjero]]', '[[start working|empezar a trabajar]]'], correctAnswer: 0, explanation: '[[I am going to continue with the B1 course next month|Voy a continuar con el curso B1 el próximo mes]].' },
];

export const UNIT_60_LESSON_4_LISTENING: Exercise[] = QUESTIONS.map((q, i) => ({
  id: `a2-u60-l4-l${i + 1}`,
  type: 'listening',
  level: 'A2',
  topic: 'Final A2 Review',
  difficulty: 'easy',
  transcript: LISTENING_TRANSCRIPT,
  content: { title: LESSON_TITLE, instructions: INSTRUCTIONS, questions: [q] },
  topicName: 'Listening',
}));
