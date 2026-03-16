/**
 * Unidad 31 B2 — Lección 4: Comprensión auditiva (Education extended)
 * 13 preguntas (B2: transcripción sobre educación y artículos)
 */

import { Exercise } from '@/lib/exercise-generator';

const LESSON_TITLE = '[[Listening|Comprensión auditiva]]';
const LISTENING_TRANSCRIPT = `[[Hi|Hola]], [[I'm|soy]] [[James|James]] [[and|y]] [[I work|trabajo]] [[as|como]] [[a|un]] [[lecturer|profesor]] [[at|en]] [[the|la]] [[University of London|Universidad de Londres]]. [[I|Yo]] [[teach|enseño]] [[economics|economía]] [[and|y]] [[most|la mayoría de]] [[students|estudiantes]] [[attend|asisten]] [[the|las]] [[lectures|conferencias]] [[regularly|regularmente]]. [[The|La]] [[university|universidad]] [[is|es]] [[a|un]] [[centre of|centro de]] [[excellence|excelencia]] [[for|para]] [[research|investigación]] [[and|y]] [[we|nosotros]] [[encourage|animamos]] [[students|a los estudiantes]] [[to conduct|a realizar]] [[their own|su propia]] [[research|investigación]]. [[I|Yo]] [[have|tengo]] [[a|un]] [[PhD|doctorado]] [[in|en]] [[finance|finanzas]] [[and|y]] [[I|yo]] [[supervise|superviso]] [[several|varios]] [[dissertations|trabajos de fin de máster]] [[each|cada]] [[year|año]]. [[The|Los]] [[students|estudiantes]] [[who|que]] [[meet|cumplen]] [[the|los]] [[deadlines|plazos]] [[and|y]] [[submit|entregan]] [[quality work|trabajo de calidad]] [[often|a menudo]] [[obtain|obtienen]] [[a|una]] [[distinction|distinción]].`;

const INSTRUCTIONS = 'Escucha el audio (o lee la transcripción). Después responde las preguntas.';

const QUESTIONS = [
  { question: '[[Who is speaking|Quién habla]]?', options: ['[[James, a lecturer at the University of London|James, profesor en la Universidad de Londres]]', '[[A student|Un estudiante]]', '[[A supervisor|Un supervisor]]'], correctAnswer: 0, explanation: '[[The speaker says|El hablante dice]] "[[I\'m James and I work as a lecturer at the University of London|soy James y trabajo como profesor en la Universidad de Londres]]".' },
  { question: '[[What|Qué]] [[does James teach|enseña James]]?', options: ['[[Economics|Economía]]', '[[Finance|Finanzas]]', '[[Law|Derecho]]'], correctAnswer: 0, explanation: '[[The speaker says|El hablante dice]] "[[I teach economics|enseño economía]]".' },
  { question: '[[What|Qué]] [[do most students do|hacen la mayoría de estudiantes]]?', options: ['[[They attend the lectures regularly|Asisten a las conferencias regularmente]]', '[[They skip classes|Faltan a clase]]', '[[They drop out|Abandonan]]'], correctAnswer: 0, explanation: '[[The speaker says|El hablante dice]] "[[most students attend the lectures regularly|la mayoría de estudiantes asisten a las conferencias regularmente]]".' },
  { question: '[[What|Qué]] [[does the university encourage|animan en la universidad]]?', options: ['[[Students to conduct their own research|A los estudiantes a realizar su propia investigación]]', '[[Students to take gap years|A los estudiantes a tomar años sabáticos]]', '[[Students to drop out|A los estudiantes a abandonar]]'], correctAnswer: 0, explanation: '[[The speaker says|El hablante dice]] "[[we encourage students to conduct their own research|animamos a los estudiantes a realizar su propia investigación]]".' },
  { question: '[[What|Qué]] [[degree does James have|título tiene James]]?', options: ['[[A PhD in finance|Un doctorado en finanzas]]', '[[A degree in economics|Un título en economía]]', '[[A master\'s|Un máster]]'], correctAnswer: 0, explanation: '[[The speaker says|El hablante dice]] "[[I have a PhD in finance|tengo un doctorado en finanzas]]".' },
  { question: '[[What|Qué]] [[does James supervise|supervisa James]]?', options: ['[[Several dissertations each year|Varios trabajos de fin de máster cada año]]', '[[Lectures|Conferencias]]', '[[Exams|Exámenes]]'], correctAnswer: 0, explanation: '[[The speaker says|El hablante dice]] "[[I supervise several dissertations each year|superviso varios trabajos de fin de máster cada año]]".' },
  { question: '[[Students who meet deadlines|Los estudiantes que cumplen los plazos]] ____.', options: ['[[often obtain a distinction|a menudo obtienen una distinción]]', '[[usually fail|suelen suspender]]', '[[drop out|abandonan]]'], correctAnswer: 0, explanation: '[[The speaker says|El hablante dice]] "[[students who meet the deadlines and submit quality work often obtain a distinction|los estudiantes que cumplen los plazos y entregan trabajo de calidad a menudo obtienen una distinción]]".' },
  { question: '[[What|Cuál]] [[is|es]] [[the main idea|la idea principal]] [[of the listening|de la escucha]]?', options: ['[[James describes his role as lecturer and the university\'s focus on research|James describe su papel como profesor y el enfoque de la universidad en investigación]]', '[[Students should drop out|Los estudiantes deberían abandonar]]', '[[Economics is easy|La economía es fácil]]'], correctAnswer: 0, explanation: '[[The speaker|El hablante]] [[describes|describe]] [[his work|su trabajo]] [[and|y]] [[the university|la universidad]].' },
  { question: '[[Which article|Qué artículo]] [[is used|se usa]] [[with "lecturer"|con "lecturer"]]?', options: ['[[A|A]]', '[[The|The]]', '[[No article|Sin artículo]]'], correctAnswer: 0, explanation: '[[A for profession|A para profesión]] [[when first mentioned|cuando se menciona por primera vez]].' },
  { question: '[[What|Qué]] [[vocabulary|vocabulario]] [[is central|es central]] [[in this listening|en esta escucha]]?', options: ['[[lecturer|profesor]], [[dissertations|trabajos]], [[deadlines|plazos]], [[distinction|distinción]], [[research|investigación]]', '[[sport|deporte]], [[music|música]]', '[[weather|tiempo]], [[food|comida]]'], correctAnswer: 0, explanation: '[[The listening|La escucha]] [[focuses on|se centra en]] [[education vocabulary|vocabulario de educación]].' },
  { question: '[[What|Qué]] [[can we infer|podemos inferir]] [[about James|sobre James]]?', options: ['[[He is experienced and values quality work|Es experimentado y valora el trabajo de calidad]]', '[[He prefers students to drop out|Prefiere que los estudiantes abandonen]]', '[[He does not like research|No le gusta la investigación]]'], correctAnswer: 0, explanation: '[[He has|Tiene]] [[a PhD|un doctorado]], [[supervises|supervisa]] [[dissertations|trabajos]] [[and|y]] [[values|valora]] [[quality|calidad]].' },
  { question: '[[James|James]] [[works|trabaja]] [[at|en]] ____ [[university|universidad]].', options: ['[[the University of London|la Universidad de Londres]]', '[[Oxford|Oxford]]', '[[Cambridge|Cambridge]]'], correctAnswer: 0, explanation: '[[The speaker says|El hablante dice]] "[[I work as a lecturer at the University of London|trabajo como profesor en la Universidad de Londres]]".' },
  { question: '[[The university|La universidad]] [[is|es]] ____ [[centre of excellence|centro de excelencia]].', options: ['[[a|un]]', '[[the|el]]', '[[—|(sin artículo)]]'], correctAnswer: 0, explanation: '[[A for singular countable|A para singular contable]] [[when first mentioned|cuando se menciona por primera vez]].' },
];

export const UNIT_31_LESSON_4_LISTENING: Exercise[] = QUESTIONS.map((q, i) => ({
  id: `b2-u31-l4-l${i + 1}`,
  type: 'listening',
  level: 'B2',
  topic: 'Education (extended)',
  difficulty: 'medium',
  transcript: LISTENING_TRANSCRIPT,
  content: { title: LESSON_TITLE, instructions: INSTRUCTIONS, questions: [q] },
  topicName: 'Listening',
}));
