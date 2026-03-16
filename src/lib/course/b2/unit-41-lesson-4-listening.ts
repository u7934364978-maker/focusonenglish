/**
 * Unidad 41 B2 — Lección 4: Comprensión auditiva (Education Systems & Learning)
 * 13 preguntas (B2: transcripción sobre educación y gerundios/infinitivos)
 */

import { Exercise } from '@/lib/exercise-generator';

const LESSON_TITLE = '[[Listening|Comprensión auditiva]]';
const LISTENING_TRANSCRIPT = `[[Hi|Hola]], [[I'm|soy]] [[Sarah|Sarah]] [[and|y]] [[I|yo]] [[teach|enseño]] [[at a university|en una universidad]]. [[Many of my students|Muchos de mis estudiantes]] [[enjoy studying|disfrutan estudiando]] [[in small seminars|en seminarios pequeños]] [[rather than|en lugar de]] [[large lectures|grandes conferencias]]. [[I|Yo]] [[decided to introduce|decidí introducir]] [[blended learning|aprendizaje híbrido]] [[last semester|el semestre pasado]]. [[The university|La universidad]] [[expects us|nos espera]] [[to use|usar]] [[different teaching methods|diferentes métodos de enseñanza]]. [[She|Ella]] [[finished writing|terminó de escribir]] [[her essay|su ensayo]] [[before the due date|antes de la fecha de entrega]]. [[Parents|Los padres]] [[often want|a menudo quieren]] [[their children|a sus hijos]] [[to get|obtener]] [[good grades|buenas notas]]. [[He|Él]] [[refused to consider|rechazó considerar]] [[online learning|aprendizaje en línea]] [[at first|al principio]]. [[I|Yo]] [[asked the students|pedí a los estudiantes]] [[to submit|entregar]] [[their assignments|sus tareas]] [[by Friday|para el viernes]].`;

const INSTRUCTIONS = 'Escucha el audio (o lee la transcripción). Después responde las preguntas.';

const QUESTIONS = [
  { question: '[[Who is speaking|Quién habla]]?', options: ['[[Sarah, who teaches at a university|Sarah, que enseña en una universidad]]', '[[A student|Una estudiante]]', '[[A parent|Un padre]]'], correctAnswer: 0, explanation: '[[The speaker says|El hablante dice]] "[[I\'m Sarah and I teach at a university|soy Sarah y enseño en una universidad]]".' },
  { question: '[[What|Qué]] [[do many students enjoy|disfrutan muchos estudiantes]]?', options: ['[[Studying in small seminars rather than large lectures|Estudiar en seminarios pequeños en lugar de grandes conferencias]]', '[[Online learning only|Solo aprendizaje en línea]]', '[[Writing essays|Escribir ensayos]]'], correctAnswer: 0, explanation: '[[The speaker says|El hablante dice]] "[[many students enjoy studying in small seminars rather than large lectures|muchos estudiantes disfrutan estudiando en seminarios pequeños en lugar de grandes conferencias]]".' },
  { question: '[[What|Qué]] [[did she decide to introduce|decidió introducir ella]]?', options: ['[[Blended learning last semester|Aprendizaje híbrido el semestre pasado]]', '[[New exams|Nuevos exámenes]]', '[[More lectures|Más conferencias]]'], correctAnswer: 0, explanation: '[[The speaker says|El hablante dice]] "[[I decided to introduce blended learning last semester|decidí introducir aprendizaje híbrido el semestre pasado]]".' },
  { question: '[[What|Qué]] [[does the university expect|espera la universidad]]?', options: ['[[Us to use different teaching methods|Que usemos diferentes métodos de enseñanza]]', '[[Students to avoid seminars|Que los estudiantes eviten seminarios]]', '[[Only online courses|Solo cursos en línea]]'], correctAnswer: 0, explanation: '[[The speaker says|El hablante dice]] "[[the university expects us to use different teaching methods|la universidad espera que usemos diferentes métodos de enseñanza]]".' },
  { question: '[[What|Qué]] [[did she finish|terminó ella]]?', options: ['[[Writing her essay before the due date|Escribir su ensayo antes de la fecha de entrega]]', '[[Attending lectures|Asistir a clases]]', '[[Taking the exam|Hacer el examen]]'], correctAnswer: 0, explanation: '[[The speaker says|El hablante dice]] "[[she finished writing her essay before the due date|terminó de escribir su ensayo antes de la fecha de entrega]]".' },
  { question: '[[What|Qué]] [[do parents often want|quieren a menudo los padres]]?', options: ['[[Their children to get good grades|Que sus hijos obtengan buenas notas]]', '[[Their children to avoid studying|Que sus hijos eviten estudiar]]', '[[Their children to refuse assignments|Que sus hijos rechacen tareas]]'], correctAnswer: 0, explanation: '[[The speaker says|El hablante dice]] "[[parents often want their children to get good grades|los padres a menudo quieren que sus hijos obtengan buenas notas]]".' },
  { question: '[[What|Qué]] [[did he refuse|rechazó él]]?', options: ['[[To consider online learning at first|Considerar el aprendizaje en línea al principio]]', '[[To submit his essay|Entregar su ensayo]]', '[[To attend seminars|Asistir a seminarios]]'], correctAnswer: 0, explanation: '[[The speaker says|El hablante dice]] "[[he refused to consider online learning at first|rechazó considerar el aprendizaje en línea al principio]]".' },
  { question: '[[What|Cuál]] [[is|es]] [[the main idea|la idea principal]] [[of the listening|de la escucha]]?', options: ['[[Sarah describes education, teaching methods and verb patterns|Sarah describe educación, métodos de enseñanza y patrones verbales]]', '[[Online learning is bad|El aprendizaje en línea es malo]]', '[[Parents control everything|Los padres controlan todo]]'], correctAnswer: 0, explanation: '[[The speaker|El hablante]] [[describes|describe]] [[education scenarios|escenarios educativos]].' },
  { question: '[[Which verb|Qué verbo]] [[takes an infinitive|va con infinitivo]] [[in the listening|en la escucha]]?', options: ['[[Decide|Decide]]', '[[Enjoy|Enjoy]]', '[[Finish|Finish]]'], correctAnswer: 0, explanation: '[[Decide + infinitive|Decide + infinitivo]].' },
  { question: '[[What|Qué]] [[vocabulary|vocabulario]] [[is central|es central]] [[in this listening|en esta escucha]]?', options: ['[[seminars|seminarios]], [[blended learning|aprendizaje híbrido]], [[teaching methods|métodos de enseñanza]], [[assignments|tareas]]', '[[sport|deporte]], [[music|música]]', '[[weather|tiempo]], [[food|comida]]'], correctAnswer: 0, explanation: '[[The listening|La escucha]] [[focuses on|se centra en]] [[education vocabulary|vocabulario educativo]].' },
  { question: '[[What|Qué]] [[can we infer|podemos inferir]] [[about Sarah|sobre Sarah]]?', options: ['[[She is committed to improving teaching methods|Está comprometida con mejorar los métodos de enseñanza]]', '[[She prefers only lectures|Prefiere solo conferencias]]', '[[She refuses new methods|Rechaza métodos nuevos]]'], correctAnswer: 0, explanation: '[[She|Ella]] [[introduced blended learning|introdujo aprendizaje híbrido]] [[and|y]] [[uses different methods|usa diferentes métodos]].' },
  { question: '[[He|Él]] ____ [[online learning|aprendizaje en línea]] [[at first|al principio]].', options: ['[[refused to consider|rechazó considerar]]', '[[enjoyed considering|disfrutó considerando]]'], correctAnswer: 0, explanation: '[[Refuse + infinitive|Refuse + infinitivo]].' },
  { question: '[[Ask sb to do|Ask sb to do]] [[means|significa]] ____.', options: ['[[To request someone to do something|Pedir a alguien que haga algo]]', '[[To refuse something|Rechazar algo]]'], correctAnswer: 0, explanation: '[[Ask + object + infinitive|Ask + objeto + infinitivo]].' },
];

export const UNIT_41_LESSON_4_LISTENING: Exercise[] = QUESTIONS.map((q, i) => ({
  id: `b2-u41-l4-l${i + 1}`,
  type: 'listening',
  level: 'B2',
  topic: 'education-learning',
  difficulty: 'medium',
  transcript: LISTENING_TRANSCRIPT,
  content: { title: LESSON_TITLE, instructions: INSTRUCTIONS, questions: [q] },
  topicName: 'Listening',
}));
