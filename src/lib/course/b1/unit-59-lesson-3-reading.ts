/**
 * Unidad 59 B1 — Lección 3: Comprensión lectora (Exam preparation)
 * 15 actividades
 */

import { Exercise } from '@/lib/exercise-generator';

const LESSON_TITLE = '[[Reading|Comprensión lectora]]';
const READING_TRANSCRIPT = `[[PET Exam Tips|Consejos para el examen PET]]

[[The Cambridge B1 Preliminary exam|El examen Cambridge B1 Preliminary]] [[is taken|es realizado]] [[by thousands of students|por miles de estudiantes]] [[every year|cada año]]. [[Here are some strategies|Aquí hay algunas estrategias]] [[that|que]] [[can help you|pueden ayudarte]] [[succeed|tener éxito]].

[[Before the exam|Antes del examen]]: [[You should|Deberías]] [[read the instructions|leer las instrucciones]] [[carefully|con cuidado]] [[before starting|antes de empezar]]. [[It is very important|Es muy importante]] [[to manage your time|gestionar tu tiempo]] [[well|bien]]. [[If|Si]] [[you|tú]] [[practise|practicas]] [[regularly|regularmente]], [[you will feel|te sentirás]] [[more confident|más seguro]].

[[During the reading|Durante la lectura]]: [[Skim|Ojea]] [[the text first|el texto primero]] [[to get the main idea|para obtener la idea principal]]. [[Then|Luego]] [[scan|escanea]] [[for specific information|para información específica]]. [[Identify key words|Identifica las palabras clave]] [[in the questions|en las preguntas]].

[[If|Si]] [[you|tú]] [[don\'t know|no sabes]] [[an answer|una respuesta]], [[skip it|sáltala]] [[and|y]] [[come back later|vuelve más tarde]]. [[Check your answers|Revisa tus respuestas]] [[before|antes de]] [[handing in|entregar]] [[the paper|el examen]]. [[Stay calm|Mantente tranquilo]] [[throughout|durante todo]] [[the exam|el examen]].`;

const INSTRUCTIONS = 'Lee el texto de abajo. Después responde las preguntas.';

const QUESTIONS = [
  { question: '[[What|Qué]] [[exam|examen]] [[does the text mention|menciona el texto]]?', options: ['[[Cambridge B1 Preliminary|Cambridge B1 Preliminary]]', '[[Cambridge C1|Cambridge C1]]', '[[IELTS|IELTS]]'], correctAnswer: 0, explanation: '[[The text says|El texto dice]] "[[The Cambridge B1 Preliminary exam|el examen Cambridge B1 Preliminary]]".' },
  { question: '[[What|Qué]] [[should you do|deberías hacer]] [[before starting|antes de empezar]]?', options: ['[[Skip the instructions|Saltar las instrucciones]]', '[[Read the instructions carefully|Leer las instrucciones con cuidado]]', '[[Guess the answers|Adivinar las respuestas]]'], correctAnswer: 1, explanation: '[[The text says|El texto dice]] "[[You should read the instructions carefully before starting|deberías leer las instrucciones con cuidado antes de empezar]]".' },
  { question: '[[What|Qué]] [[is very important|es muy importante]]?', options: ['[[To skip questions|Saltar preguntas]]', '[[To manage your time well|Gestionar bien tu tiempo]]', '[[To panic|Entrar en pánico]]'], correctAnswer: 1, explanation: '[[The text says|El texto dice]] "[[It is very important to manage your time well|es muy importante gestionar bien tu tiempo]]".' },
  { question: '[[What|Qué]] [[does skim mean|significa skim]]?', options: ['[[To read slowly|Leer despacio]]', '[[To read the text first to get the main idea|Ojear el texto primero para obtener la idea principal]]', '[[To skip the text|Saltar el texto]]'], correctAnswer: 1, explanation: '[[The text says|El texto dice]] "[[Skim the text first to get the main idea|ojea el texto primero para obtener la idea principal]]".' },
  { question: '[[What|Qué]] [[does scan mean|significa scan]]?', options: ['[[To ignore|Ignorar]]', '[[To look for specific information|Buscar información específica]]', '[[To write|Escribir]]'], correctAnswer: 1, explanation: '[[The text says|El texto dice]] "[[scan for specific information|escanea para información específica]]".' },
  { question: '[[You should|Deberías]] [[identify key words|identificar palabras clave]] [[in the questions|en las preguntas]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'True', explanation: '[[True|Verdadero]]. [[The text says|El texto dice]] "[[Identify key words in the questions|identifica las palabras clave en las preguntas]]".' },
  { question: '[[What|Qué]] [[should you do|deberías hacer]] [[if you don\'t know an answer|si no sabes una respuesta]]?', options: ['[[Panic|Entrar en pánico]]', '[[Skip it and come back later|Saltarla y volver más tarde]]', '[[Leave the exam|Dejar el examen]]'], correctAnswer: 1, explanation: '[[The text says|El texto dice]] "[[skip it and come back later|sáltala y vuelve más tarde]]".' },
  { question: '[[You should|Deberías]] [[check your answers|revisar tus respuestas]] [[before handing in|antes de entregar]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'True', explanation: '[[True|Verdadero]]. [[The text says|El texto dice]] "[[Check your answers before handing in|revisa tus respuestas antes de entregar]]".' },
  { question: '[[What|Cuál]] [[is|es]] [[the main topic|el tema principal]] [[of|del]] [[this text|este texto]]?', options: ['[[Travel|Viajes]]', '[[PET exam tips and strategies|Consejos y estrategias para el examen PET]]', '[[Food|Comida]]'], correctAnswer: 1, explanation: '[[The text|El texto]] [[gives|da]] [[exam tips and strategies|consejos y estrategias de examen]].' },
  { question: '[[You should|Deberías]] [[stay calm|mantenerte tranquilo]] [[throughout the exam|durante todo el examen]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'True', explanation: '[[True|Verdadero]]. [[The text says|El texto dice]] "[[Stay calm throughout the exam|mantente tranquilo durante todo el examen]]".' },
  { question: '[[First conditional|Primer condicional]] [[is used|se usa]] [[for practice|para practicar]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'True', explanation: '[[True|Verdadero]]. "[[If you practise regularly, you will feel more confident|si practicas regularmente, te sentirás más seguro]]".' },
  { question: '[[The exam|El examen]] [[is taken|es realizado]] [[by thousands of students|por miles de estudiantes]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'True', explanation: '[[True|Verdadero]]. [[Passive voice|Voz pasiva]] [[is used|se usa]].' },
  { question: '[[You should|Deberías]] [[panic|entrar en pánico]] [[if you don\'t know an answer|si no sabes una respuesta]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'False', explanation: '[[False|Falso]]. [[You should skip and come back later|Deberías saltar y volver más tarde]].' },
  { question: '[[How many|Cuántas]] [[sections|secciones]] [[does the text have|tiene el texto]]?', options: ['[[One|Una]]', '[[Two|Dos]]', '[[Three|Tres]]'], correctAnswer: 2, explanation: '[[Before the exam|Antes del examen]], [[During the reading|Durante la lectura]], [[and general tips|y consejos generales]].' },
  { question: '[[Modal should|El modal should]] [[is used|se usa]] [[for advice|para consejos]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'True', explanation: '[[True|Verdadero]]. "[[You should read|deberías leer]]", "[[You should skip|deberías saltar]]".' },
];

export const UNIT_59_LESSON_3_READING: Exercise[] = QUESTIONS.map((q, i) => ({
  id: `b1-u59-l3-r${i + 1}`,
  type: 'reading',
  level: 'B1',
  topic: 'Exam Strategies',
  difficulty: 'easy',
  transcript: READING_TRANSCRIPT,
  content: { title: LESSON_TITLE, instructions: INSTRUCTIONS, questions: [q] },
  topicName: 'Reading',
}));
