/**
 * Unidad 59 — Lección 3: Comprensión lectora (Final Exam Preparation)
 * 15 actividades: 1 texto + 15 preguntas
 */

import { Exercise } from '@/lib/exercise-generator';

const LESSON_TITLE = '[[Reading|Comprensión lectora]]';
const READING_TRANSCRIPT = `[[My|Mi]] [[name|nombre]] [[is|es]] [[Emma|Emma]]. [[I|Yo]] [[am|soy]] [[a|una]] [[student|estudiante]] [[and|y]] [[I|yo]] [[have|tengo]] [[my|mi]] [[final|final]] [[exam|examen]] [[next|próxima]] [[week|semana]]. [[I|Yo]] [[am|estoy]] [[very|muy]] [[nervous|nerviosa]] [[but|pero]] [[I|yo]] [[am|estoy]] [[also|también]] [[confident|segura]] [[because|porque]] [[I|yo]] [[have|he]] [[studied|estudiado]] [[hard|duro]]. [[Every|Cada]] [[day|día]] [[I|yo]] [[review|reviso]] [[the|los]] [[vocabulary|vocabularios]] [[and|y]] [[practice|practico]] [[grammar|gramática]]. [[I|Yo]] [[have|he]] [[finished|terminado]] [[all|todos]] [[the|los]] [[exercises|ejercicios]] [[in|en]] [[the|el]] [[book|libro]]. [[My|Mi]] [[strategy|estrategia]] [[is|es]] [[to|]] [[study|estudiar]] [[for|durante]] [[two hours|dos horas]] [[every|cada]] [[morning|mañana]] [[and|y]] [[to|]] [[rest|descansar]] [[before|antes de]] [[the|el]] [[exam|examen]]. [[I|Yo]] [[hope|espero]] [[to|]] [[pass|aprobar]] [[with|con]] [[a|una]] [[good|buena]] [[score|puntuación]]. [[Preparation|La preparación]] [[is|es]] [[the|la]] [[key|clave]] [[to|para]] [[success|el éxito]].`;

const INSTRUCTIONS = 'Lee el texto de abajo. Después responde las preguntas.';

const QUESTIONS = [
  { question: '[[What|Qué]] [[is|es]] [[Emma|Emma]]?', options: ['[[Teacher|Profesora]]', '[[Student|Estudiante]]', '[[Doctor|Médica]]', '[[Engineer|Ingeniera]]'], correctAnswer: 1, explanation: '[[I am a student|Soy estudiante]].' },
  { question: '[[When|Cuándo]] [[is|es]] [[her|su]] [[final exam|examen final]]?', options: ['[[This week|Esta semana]]', '[[Next week|La próxima semana]]', '[[Last week|La semana pasada]]', '[[In two weeks|En dos semanas]]'], correctAnswer: 1, explanation: '[[I have my final exam next week|Tengo mi examen final la próxima semana]].' },
  { question: '[[How|Cómo]] [[does|se siente]] [[Emma|Emma]] [[feel|sentir]]?', options: ['[[Only nervous|Solo nerviosa]]', '[[Nervous and confident|Nerviosa y segura]]', '[[Only confident|Solo segura]]', '[[Tired|Cansada]]'], correctAnswer: 1, explanation: '[[I am very nervous but also confident|Estoy muy nerviosa pero también segura]].' },
  { question: '[[Why|Por qué]] [[is|está]] [[she|ella]] [[confident|segura]]?', options: ['[[Her teacher said so|Su profesora lo dijo]]', '[[She has studied hard|Ha estudiado duro]]', '[[The exam is easy|El examen es fácil]]', '[[She took the exam before|Ya hizo el examen antes]]'], correctAnswer: 1, explanation: '[[Because I have studied hard|Porque he estudiado duro]].' },
  { question: '[[What|Qué]] [[does|revisa]] [[she|ella]] [[review|revisar]] [[every day|cada día]]?', options: ['[[Only grammar|Solo gramática]]', '[[Vocabulary and grammar|Vocabulario y gramática]]', '[[Only vocabulary|Solo vocabulario]]', '[[Reading|Lectura]]'], correctAnswer: 1, explanation: '[[I review the vocabulary and practice grammar|Reviso el vocabulario y practico gramática]].' },
  { question: '[[Has|¿]] [[she|ella]] [[finished|terminado]] [[all|todos]] [[the|los]] [[exercises|ejercicios]]?', options: ['[[Yes|Sí]]', '[[No|No]]', '[[Some|Algunos]]', '[[She did not say|No lo dijo]]'], correctAnswer: 0, explanation: '[[I have finished all the exercises|He terminado todos los ejercicios]].' },
  { question: '[[What|Cuál]] [[is|es]] [[her|su]] [[strategy|estrategia]]?', options: ['[[Study at night|Estudiar de noche]]', '[[Study two hours every morning and rest before exam|Estudiar dos horas cada mañana y descansar antes del examen]]', '[[Study all day|Estudiar todo el día]]', '[[Only rest|Solo descansar]]'], correctAnswer: 1, explanation: '[[Study for two hours every morning and rest before the exam|Estudiar dos horas cada mañana y descansar antes del examen]].' },
  { question: '[[What|Qué]] [[does|espera]] [[she|ella]] [[hope|esperar]]?', options: ['[[To fail|Suspender]]', '[[To pass with a good score|Aprobar con buena puntuación]]', '[[To take the exam later|Hacer el examen más tarde]]', '[[To study more|Estudiar más]]'], correctAnswer: 1, explanation: '[[I hope to pass with a good score|Espero aprobar con buena puntuación]].' },
  { question: '[[According to|Según]] [[Emma|Emma]], [[what|qué]] [[is|es]] [[the key|la clave]] [[to success|para el éxito]]?', options: ['[[Luck|Suerte]]', '[[Preparation|Preparación]]', '[[Rest|Descanso]]', '[[The teacher|El profesor]]'], correctAnswer: 1, explanation: '[[Preparation is the key to success|La preparación es la clave para el éxito]].' },
  { question: '[[Emma|Emma]] [[studies|estudia]] [[only|solo]] [[at night|por la noche]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'False', explanation: '[[False|Falso]]. [[She studies every morning|Estudia cada mañana]].' },
  { question: '[[Emma|Emma]] [[has|ha]] [[finished|terminado]] [[all|todos]] [[the|los]] [[exercises|ejercicios]] [[in|en]] [[the|el]] [[book|libro]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'True', explanation: '[[True|Verdadero]]. [[I have finished all the exercises in the book|He terminado todos los ejercicios del libro]].' },
  { question: '[[Emma|Emma]] [[is|está]] [[not|no]] [[nervous|nerviosa]] [[at all|para nada]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'False', explanation: '[[False|Falso]]. [[She is very nervous|Está muy nerviosa]].' },
  { question: '[[The|El]] [[main|principal]] [[topic|tema]] [[of|del]] [[text|texto]] [[is|es]]?', options: ['[[A student preparing for her final exam|Una estudiante preparándose para su examen final]]', '[[School rules|Reglas escolares]]', '[[Grammar lessons|Lecciones de gramática]]', '[[A teacher|Una profesora]]'], correctAnswer: 0, explanation: '[[The text is about Emma and her exam preparation|El texto trata de Emma y su preparación para el examen]].' },
  { question: '[[Which|Cuál]] [[word|palabra]] [[is|se]] [[NOT|NO]] [[mentioned|mencionada]] [[in|en]] [[the|el]] [[text|texto]]?', options: ['[[Review|Revisar]]', '[[Practice|Practicar]]', '[[Fail|Suspender]]', '[[Score|Puntuación]]'], correctAnswer: 2, explanation: '[[Fail|Suspender]] [[is not in the text|no está en el texto]].' },
  { question: '[[Emma|Emma]] [[studies|estudia]] ____ ____ ____.', options: ['[[for two hours every morning|dos horas cada mañana]]', '[[only on weekends|solo los fines de semana]]', '[[all night|toda la noche]]', '[[never|nunca]]'], correctAnswer: 0, explanation: '[[Study for two hours every morning|Estudiar dos horas cada mañana]].' },
];

export const UNIT_59_LESSON_3_READING: Exercise[] = QUESTIONS.map((q, i) => ({
  id: `a2-u59-l3-r${i + 1}`,
  type: 'reading',
  level: 'A2',
  topic: 'Final Exam Preparation',
  difficulty: 'easy',
  transcript: READING_TRANSCRIPT,
  content: { title: LESSON_TITLE, instructions: INSTRUCTIONS, questions: [q] },
  topicName: 'Reading',
}));
