/**
 * Unidad 2 B1 — Lección 3: Comprensión lectora (Present Perfect Continuous, Education)
 */

import { Exercise } from '@/lib/exercise-generator';

const LESSON_TITLE = '[[Reading|Comprensión lectora]]';
const READING_TRANSCRIPT = `[[My|Mi]] [[name|nombre]] [[is|es]] [[James|James]] [[and|y]] [[I|yo]] [[have|he]] [[been|estado]] [[studying|estudiando]] [[English|inglés]] [[for|desde hace]] [[five|cinco]] [[years|años]]. [[I|Yo]] [[started|empecé]] [[when|cuando]] [[I|yo]] [[was|era]] [[at|en]] [[secondary|secundaria]] [[school|colegio]] [[and|y]] [[I|yo]] [[have|he]] [[been|estado]] [[improving|mejorando]] [[ever|desde]] [[since|entonces]]. [[I|Yo]] [[am|estoy]] [[currently|actualmente]] [[doing|haciendo]] [[a|un]] [[degree|título]] [[in|en]] [[Engineering|Ingeniería]] [[at|en]] [[the|la]] [[university|universidad]] [[and|y]] [[I|yo]] [[have|he]] [[been|estado]] [[attending|asistiendo]] [[English|inglés]] [[classes|clases]] [[since|desde]] [[September|septiembre]]. [[My|Mi]] [[teacher|profesor]] [[has|ha]] [[been|estado]] [[teaching|enseñando]] [[here|aquí]] [[for|desde hace]] [[ten|diez]] [[years|años]] [[and|y]] [[she|ella]] [[is|es]] [[very|muy]] [[patient|paciente]]. [[I|yo]] [[have|he]] [[been|estado]] [[working|trabajando]] [[on|en]] [[my|mi]] [[pronunciation|pronunciación]] [[for|desde hace]] [[months|meses]] [[and|y]] [[I|yo]] [[think|creo]] [[I|yo]] [[am|estoy]] [[getting|mejorando]] [[better|mejor]].`;

const INSTRUCTIONS = 'Lee el texto. Después responde las preguntas.';

const QUESTIONS = [
  { question: '[[How long|Cuánto tiempo]] [[has James been studying|lleva James estudiando]] [[English|inglés]]?', options: ['[[three years|tres años]]', '[[five years|cinco años]]', '[[ten years|diez años]]'], correctAnswer: 1, explanation: '[[The text says|El texto dice]] "[[I have been studying English for five years|llevo estudiando inglés cinco años]]".' },
  { question: '[[When|Cuándo]] [[did he start|empezó]] [[studying|estudiando]] [[English|inglés]]?', options: ['[[at|en]] [[primary school|primaria]]', '[[at|en]] [[secondary school|secundaria]]', '[[at|en]] [[university|universidad]]'], correctAnswer: 1, explanation: '[[The text says|El texto dice]] "[[I started when I was at secondary school|empecé cuando estaba en secundaria]]".' },
  { question: '[[What|Qué]] [[is he studying|está estudiando]] [[at university|en la universidad]]?', options: ['[[English|Inglés]]', '[[Engineering|Ingeniería]]', '[[Teaching|Enseñanza]]'], correctAnswer: 1, explanation: '[[The text says|El texto dice]] "[[I am currently doing a degree in Engineering|estoy haciendo un título en Ingeniería]]".' },
  { question: '[[Since when|Desde cuándo]] [[has he been attending|asiste]] [[English classes|clases de inglés]]?', options: ['[[January|enero]]', '[[September|septiembre]]', '[[last year|el año pasado]]'], correctAnswer: 1, explanation: '[[The text says|El texto dice]] "[[I have been attending English classes since September|asisto a clases de inglés desde septiembre]]".' },
  { question: '[[How long|Cuánto tiempo]] [[has his teacher been teaching|lleva su profesor enseñando]] [[there|allí]]?', options: ['[[five years|cinco años]]', '[[ten years|diez años]]', '[[since September|desde septiembre]]'], correctAnswer: 1, explanation: '[[The text says|El texto dice]] "[[My teacher has been teaching here for ten years|mi profesor lleva enseñando aquí diez años]]".' },
  { question: '[[What|Qué]] [[has he been working on|ha estado trabajando]] [[for months|desde hace meses]]?', options: ['[[grammar|gramática]]', '[[pronunciation|pronunciación]]', '[[vocabulary|vocabulario]]'], correctAnswer: 1, explanation: '[[The text says|El texto dice]] "[[I have been working on my pronunciation for months|llevo meses trabajando en mi pronunciación]]".' },
  { question: '[[James|James]] [[studies|estudia]] [[only|solo]] [[English|inglés]] [[at university|en la universidad]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'False', explanation: '[[False|Falso]]. [[He|Él]] [[studies Engineering|estudia Ingeniería]] [[and|y]] [[attends|asiste]] [[English classes|clases de inglés]].' },
  { question: '[[His|Su]] [[teacher|profesor]] [[is|es]] [[patient|paciente]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'True', explanation: '[[True|Verdadero]]. [[The text says|El texto dice]] "[[she is very patient|es muy paciente]]".' },
  { question: '[[James|James]] [[thinks|cree]] [[he|él]] [[is|está]] [[getting better|mejorando]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'True', explanation: '[[True|Verdadero]]. [[The text says|El texto dice]] "[[I think I am getting better|creo que estoy mejorando]]".' },
  { question: '[[How many|Cuántos]] [[years|años]] [[has James been studying|lleva James estudiando]] [[English|inglés]]?', options: ['[[3|3]]', '[[5|5]]', '[[10|10]]'], correctAnswer: 1, explanation: '[[Five years|Cinco años]].' },
  { question: '[[What|Cuál]] [[is|es]] [[the main topic|el tema principal]] [[of|del]] [[this text|este texto]]?', options: ['[[A|Una]] [[trip|viaje]]', '[[James\'s|La]] [[experience|experiencia]] [[learning|aprendiendo]] [[English|inglés]] [[over time|con el tiempo]]', '[[University|Universidad]] [[life|vida]]'], correctAnswer: 1, explanation: '[[The text|El texto]] [[describes|describe]] [[James\'s learning journey|el viaje de aprendizaje de James]].' },
  { question: '[[James|James]] [[started|empezó]] [[studying|estudiando]] [[at university|en la universidad]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'False', explanation: '[[False|Falso]]. [[He|Él]] [[started at secondary school|empezó en secundaria]].' },
  { question: '[[The|El]] [[teacher|profesor]] [[has been teaching|lleva enseñando]] [[for|desde hace]] [[ten years|diez años]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'True', explanation: '[[True|Verdadero]].' },
  { question: '[[James|James]] [[is|está]] [[studying|estudiando]] [[for|para]] [[a|un]] [[degree|título]] [[in|en]] [[English|inglés]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'False', explanation: '[[False|Falso]]. [[His degree|Su título]] [[is|es]] [[in|en]] [[Engineering|Ingeniería]].' },
  { question: '[[James|James]] [[has been improving|ha estado mejorando]] [[since|desde]] [[he started|empezó]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'True', explanation: '[[True|Verdadero]]. [[The text says|El texto dice]] "[[I have been improving ever since|he estado mejorando desde entonces]]".' },
];

export const UNIT_2_LESSON_3_READING: Exercise[] = QUESTIONS.map((q, i) => ({
  id: `b1-u2-l3-r${i + 1}`,
  type: 'reading',
  level: 'B1',
  topic: 'Education',
  difficulty: 'medium',
  transcript: READING_TRANSCRIPT,
  content: { title: LESSON_TITLE, instructions: INSTRUCTIONS, questions: [q] },
  topicName: 'Reading',
}));
