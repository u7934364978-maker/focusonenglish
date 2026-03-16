/**
 * Unidad 41 B2 — Lección 3: Comprensión lectora (Education Systems & Learning)
 * 13 preguntas (B2: texto sobre educación y gerundios/infinitivos)
 */

import { Exercise } from '@/lib/exercise-generator';

const LESSON_TITLE = '[[Reading|Comprensión lectora]]';
const READING_TRANSCRIPT = `[[Many students|Muchos estudiantes]] [[enjoy studying|disfrutan estudiando]] [[online|en línea]] [[because|porque]] [[they can|pueden]] [[avoid commuting|evitar desplazarse]] [[to campus|al campus]]. [[She|Ella]] [[decided to take|decidió tomar]] [[a blended learning course|un curso de aprendizaje híbrido]] [[last year|el año pasado]]. [[The university|La universidad]] [[expects students|espera que los estudiantes]] [[to submit|entregar]] [[their essays|sus ensayos]] [[by the due date|para la fecha de entrega]]. [[He|Él]] [[finished writing|terminó de escribir]] [[his dissertation|su tesis]] [[before|antes de]] [[graduation|la graduación]]. [[Parents|Los padres]] [[want their children|quieren que sus hijos]] [[to achieve|lograr]] [[academic success|éxito académico]]. [[She|Ella]] [[refused to attend|rechazó asistir]] [[the lecture|a la clase]] [[because|porque]] [[she was ill|estaba enferma]]. [[The teacher|El profesor]] [[asked the class|pidió a la clase]] [[to consider|considerar]] [[different teaching methods|diferentes métodos de enseñanza]].`;

const INSTRUCTIONS = 'Lee el texto sobre educación. Después responde las preguntas.';

const QUESTIONS = [
  { question: '[[What|Qué]] [[do many students enjoy|disfrutan muchos estudiantes]]?', options: ['[[Studying online because they avoid commuting|Estudiar en línea porque evitan desplazarse]]', '[[Attending lectures|Asistir a clases]]', '[[Writing essays|Escribir ensayos]]'], correctAnswer: 0, explanation: '[[The text says|El texto dice]] "[[many students enjoy studying online because they can avoid commuting|muchos estudiantes disfrutan estudiando en línea porque pueden evitar desplazarse]]".' },
  { question: '[[What|Qué]] [[did she decide to take|decidió tomar ella]]?', options: ['[[A blended learning course last year|Un curso de aprendizaje híbrido el año pasado]]', '[[An exam|Un examen]]', '[[A degree|Una carrera]]'], correctAnswer: 0, explanation: '[[The text says|El texto dice]] "[[she decided to take a blended learning course last year|decidió tomar un curso de aprendizaje híbrido el año pasado]]".' },
  { question: '[[What|Qué]] [[does the university expect|espera la universidad]]?', options: ['[[Students to submit essays by the due date|Que los estudiantes entreguen ensayos para la fecha de entrega]]', '[[Students to attend campus|Que los estudiantes asistan al campus]]', '[[Students to avoid online learning|Que los estudiantes eviten el aprendizaje en línea]]'], correctAnswer: 0, explanation: '[[The text says|El texto dice]] "[[the university expects students to submit their essays by the due date|la universidad espera que los estudiantes entreguen sus ensayos para la fecha de entrega]]".' },
  { question: '[[What|Qué]] [[did he finish|terminó él]]?', options: ['[[Writing his dissertation before graduation|Escribir su tesis antes de la graduación]]', '[[Attending lectures|Asistir a clases]]', '[[Taking exams|Hacer exámenes]]'], correctAnswer: 0, explanation: '[[The text says|El texto dice]] "[[he finished writing his dissertation before graduation|terminó de escribir su tesis antes de la graduación]]".' },
  { question: '[[What|Qué]] [[do parents want|quieren los padres]]?', options: ['[[Their children to achieve academic success|Que sus hijos logren éxito académico]]', '[[Their children to avoid studying|Que sus hijos eviten estudiar]]', '[[Their children to refuse exams|Que sus hijos rechacen exámenes]]'], correctAnswer: 0, explanation: '[[The text says|El texto dice]] "[[parents want their children to achieve academic success|los padres quieren que sus hijos logren éxito académico]]".' },
  { question: '[[What|Qué]] [[did she refuse|rechazó ella]]?', options: ['[[To attend the lecture because she was ill|Asistir a la clase porque estaba enferma]]', '[[To submit her essay|Entregar su ensayo]]', '[[To take the course|Tomar el curso]]'], correctAnswer: 0, explanation: '[[The text says|El texto dice]] "[[she refused to attend the lecture because she was ill|rechazó asistir a la clase porque estaba enferma]]".' },
  { question: '[[What|Qué]] [[did the teacher ask|pidió el profesor]]?', options: ['[[The class to consider different teaching methods|A la clase considerar diferentes métodos de enseñanza]]', '[[Students to avoid essays|A los estudiantes evitar ensayos]]', '[[Parents to attend|A los padres asistir]]'], correctAnswer: 0, explanation: '[[The text says|El texto dice]] "[[the teacher asked the class to consider different teaching methods|el profesor pidió a la clase considerar diferentes métodos de enseñanza]]".' },
  { question: '[[What|Cuál]] [[is|es]] [[the main idea|la idea principal]] [[of the text|del texto]]?', options: ['[[Education systems, learning methods and verb patterns (gerunds/infinitives)|Sistemas educativos, métodos de aprendizaje y patrones verbales]]', '[[Online learning is best|El aprendizaje en línea es mejor]]', '[[Parents control education|Los padres controlan la educación]]'], correctAnswer: 0, explanation: '[[The text|El texto]] [[describes|describe]] [[education scenarios|escenarios educativos]] [[with gerunds and infinitives|con gerundios e infinitivos]].' },
  { question: '[[Which verb|Qué verbo]] [[takes a gerund|va con gerundio]] [[in the text|en el texto]]?', options: ['[[Enjoy|Enjoy]]', '[[Decide|Decide]]', '[[Refuse|Refuse]]'], correctAnswer: 0, explanation: '[[Enjoy + gerund|Enjoy + gerundio]].' },
  { question: '[[What|Qué]] [[vocabulary|vocabulario]] [[is key|es clave]] [[in this text|en este texto]]?', options: ['[[blended learning|aprendizaje híbrido]], [[dissertation|tesis]], [[due date|fecha de entrega]], [[academic success|éxito académico]]', '[[sport|deporte]], [[music|música]]', '[[weather|tiempo]], [[food|comida]]'], correctAnswer: 0, explanation: '[[The text|El texto]] [[focuses on|se centra en]] [[education vocabulary|vocabulario educativo]].' },
  { question: '[[She|Ella]] ____ [[attending the lecture|asistió a la clase]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 1, explanation: '[[False|Falso]]. [[She refused to attend|Rechazó asistir]].' },
  { question: '[[The university|La universidad]] ____ [[students|a los estudiantes]] ____ [[essays on time|ensayos a tiempo]].', options: ['[[expects|espera]] ... [[to submit|entregar]]', '[[expects|espera]] ... [[submitting|entregando]]'], correctAnswer: 0, explanation: '[[Expect sb to do|Expect + objeto + infinitivo]].' },
  { question: '[[What|Qué]] [[can we infer|podemos inferir]] [[about education today|sobre la educación hoy]]?', options: ['[[It combines different methods (online, blended, face-to-face)|Combina diferentes métodos]]', '[[Only online learning exists|Solo existe el aprendizaje en línea]]', '[[Students avoid all learning|Los estudiantes evitan todo aprendizaje]]'], correctAnswer: 0, explanation: '[[Blended learning|Aprendizaje híbrido]], [[online|en línea]], [[lectures|clases]] [[are mentioned|se mencionan]].' },
];

export const UNIT_41_LESSON_3_READING: Exercise[] = QUESTIONS.map((q, i) => ({
  id: `b2-u41-l3-r${i + 1}`,
  type: 'reading',
  level: 'B2',
  topic: 'education-learning',
  difficulty: 'medium',
  transcript: READING_TRANSCRIPT,
  content: { title: LESSON_TITLE, instructions: INSTRUCTIONS, questions: [q] },
  topicName: 'Reading',
}));
