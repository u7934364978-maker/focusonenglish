/**
 * Unidad 31 B2 — Lección 3: Comprensión lectora (Education extended)
 * 13 preguntas (B2: texto sobre educación y artículos)
 */

import { Exercise } from '@/lib/exercise-generator';

const LESSON_TITLE = '[[Reading|Comprensión lectora]]';
const READING_TRANSCRIPT = `[[She|Ella]] [[studied|estudió]] [[at|en]] [[university|universidad]] [[in|en]] [[Oxford|Oxford]] [[for|durante]] [[three years|tres años]] [[and|y]] [[obtained|obtuvo]] [[a|un]] [[degree|título]] [[in|en]] [[economics|economía]]. [[The|La]] [[university|universidad]] [[is|es]] [[a|un]] [[centre of|centro de]] [[excellence|excelencia]] [[and|y]] [[most|la mayoría de]] [[students|estudiantes]] [[attend|asisten]] [[classes|clases]] [[regularly|regularmente]]. [[She|Ella]] [[took|tomó]] [[a|un]] [[gap year|año sabático]] [[before|antes de]] [[enrolling|matricularse]] [[in|en]] [[a|un]] [[master\'s programme|programa de máster]] [[and|y]] [[conducted|realizó]] [[research|investigación]] [[on|sobre]] [[the|la]] [[future of|futuro de]] [[education|educación]]. [[The|El]] [[dissertation|trabajo de fin de máster]] [[she|que]] [[submitted|entregó]] [[earned|obtuvo]] [[a|una]] [[distinction|distinción]] [[and|y]] [[her|su]] [[supervisor|supervisor]] [[recommended|recomendó]] [[her|la]] [[to pursue|continuar]] [[a|un]] [[PhD|doctorado]].`;

const INSTRUCTIONS = 'Lee el texto sobre educación. Después responde las preguntas.';

const QUESTIONS = [
  { question: '[[Where|Dónde]] [[did she study|estudió ella]] [[for three years|durante tres años]]?', options: ['[[At university in Oxford|En la universidad de Oxford]]', '[[At school|En el colegio]]', '[[At a college|En un instituto]]'], correctAnswer: 0, explanation: '[[The text says|El texto dice]] "[[she studied at university in Oxford for three years|estudió en la universidad de Oxford durante tres años]]".' },
  { question: '[[What|Qué]] [[degree did she obtain|título obtuvo]]?', options: ['[[A degree in economics|Un título en economía]]', '[[A degree in law|Un título en derecho]]', '[[A degree in medicine|Un título en medicina]]'], correctAnswer: 0, explanation: '[[The text says|El texto dice]] "[[she obtained a degree in economics|obtuvo un título en economía]]".' },
  { question: '[[What|Qué]] [[did she take|tomó]] [[before enrolling in the master\'s|antes de matricularse en el máster]]?', options: ['[[A gap year|Un año sabático]]', '[[A break|Un descanso]]', '[[A holiday|Unas vacaciones]]'], correctAnswer: 0, explanation: '[[The text says|El texto dice]] "[[she took a gap year before enrolling in a master\'s programme|tomó un año sabático antes de matricularse en un programa de máster]]".' },
  { question: '[[What|Sobre qué]] [[research did she conduct|investigación realizó]]?', options: ['[[Research on the future of education|Investigación sobre el futuro de la educación]]', '[[Research on economics|Investigación sobre economía]]', '[[Research on Oxford|Investigación sobre Oxford]]'], correctAnswer: 0, explanation: '[[The text says|El texto dice]] "[[she conducted research on the future of education|realizó investigación sobre el futuro de la educación]]".' },
  { question: '[[What|Qué]] [[grade did her dissertation earn|nota obtuvo su trabajo]]?', options: ['[[A distinction|Una distinción]]', '[[A pass|Un aprobado]]', '[[A fail|Un suspenso]]'], correctAnswer: 0, explanation: '[[The text says|El texto dice]] "[[the dissertation she submitted earned a distinction|el trabajo que entregó obtuvo una distinción]]".' },
  { question: '[[What|Qué]] [[did the supervisor recommend|recomendó el supervisor]]?', options: ['[[To pursue a PhD|Continuar con un doctorado]]', '[[To take another gap year|Tomar otro año sabático]]', '[[To work|Trabajar]]'], correctAnswer: 0, explanation: '[[The text says|El texto dice]] "[[her supervisor recommended her to pursue a PhD|su supervisor la recomendó para continuar con un doctorado]]".' },
  { question: '[[The university|La universidad]] [[is described as|se describe como]] ____.', options: ['[[a centre of excellence|un centro de excelencia]]', '[[a small college|un pequeño instituto]]', '[[a research centre|un centro de investigación]]'], correctAnswer: 0, explanation: '[[The text says|El texto dice]] "[[the university is a centre of excellence|la universidad es un centro de excelencia]]".' },
  { question: '[[What|Cuál]] [[is|es]] [[the main idea|la idea principal]] [[of the text|del texto]]?', options: ['[[A successful academic journey from degree to PhD recommendation|Un camino académico exitoso desde el título hasta la recomendación de doctorado]]', '[[Oxford is the best university|Oxford es la mejor universidad]]', '[[Gap years are essential|Los años sabáticos son esenciales]]'], correctAnswer: 0, explanation: '[[The text|El texto]] [[describes|describe]] [[her academic path|su camino académico]].' },
  { question: '[[Which article|Qué artículo]] [[is used|se usa]] [[with "university"|con "university"]] [[when referring to study|cuando se refiere a estudio]]?', options: ['[[No article|Sin artículo]]', '[[The|The]]', '[[A|A]]'], correctAnswer: 0, explanation: '[[No article with "at university"|Sin artículo con "at university"]] [[for the activity|para la actividad]].' },
  { question: '[[What|Qué]] [[vocabulary|vocabulario]] [[is key|es clave]] [[in this text|en este texto]]?', options: ['[[degree|título]], [[dissertation|trabajo]], [[supervisor|supervisor]], [[distinction|distinción]], [[gap year|año sabático]]', '[[sport|deporte]], [[music|música]]', '[[weather|tiempo]], [[food|comida]]'], correctAnswer: 0, explanation: '[[The text|El texto]] [[focuses on|se centra en]] [[education vocabulary|vocabulario de educación]].' },
  { question: '[[She|Ella]] [[dropped out|abandonó]] [[of university|de la universidad]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 1, explanation: '[[False|Falso]]. [[She completed her degree and master\'s|Completó su título y máster]].' },
  { question: '[[Most students|La mayoría de estudiantes]] [[at the university|en la universidad]] ____ [[classes|clases]].', options: ['[[attend regularly|asisten regularmente]]', '[[skip|faltan a]]', '[[avoid|evitan]]'], correctAnswer: 0, explanation: '[[The text says|El texto dice]] "[[most students attend classes regularly|la mayoría de estudiantes asisten a clases regularmente]]".' },
  { question: '[[What|Qué]] [[can we infer|podemos inferir]] [[about her|sobre ella]]?', options: ['[[She is academically successful and dedicated|Es académicamente exitosa y dedicada]]', '[[She prefers work to study|Prefiere trabajar a estudiar]]', '[[She did not complete her degree|No completó su título]]'], correctAnswer: 0, explanation: '[[She obtained|Obtuvo]] [[a degree|un título]], [[distinction|distinción]] [[and|y]] [[PhD recommendation|recomendación de doctorado]].' },
];

export const UNIT_31_LESSON_3_READING: Exercise[] = QUESTIONS.map((q, i) => ({
  id: `b2-u31-l3-r${i + 1}`,
  type: 'reading',
  level: 'B2',
  topic: 'Education (extended)',
  difficulty: 'medium',
  transcript: READING_TRANSCRIPT,
  content: { title: LESSON_TITLE, instructions: INSTRUCTIONS, questions: [q] },
  topicName: 'Reading',
}));
