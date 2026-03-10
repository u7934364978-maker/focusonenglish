/**
 * Unidad 42 B1 — Lección 3: Comprensión lectora (Adjective + preposition, Feelings & attitudes)
 * 15 actividades
 */

import { Exercise } from '@/lib/exercise-generator';

const LESSON_TITLE = '[[Reading|Comprensión lectora]]';
const READING_TRANSCRIPT = `[[I|Yo]] [[am|estoy]] [[interested in|interesado en]] [[learning|aprender]] [[new languages|nuevos idiomas]]. [[I|Yo]] [[was|estaba]] [[afraid of|tenía miedo de]] [[speaking|hablar]] [[English|inglés]] [[at first|al principio]] [[but|pero]] [[now|ahora]] [[I|yo]] [[am|soy]] [[good at|bueno en]] [[it|ello]]. [[I|Yo]] [[am|estoy]] [[proud of|orgulloso de]] [[my progress|mi progreso]]. [[My teacher|Mi profesora]] [[is|es]] [[famous for|famoso por]] [[her|su]] [[patience|paciencia]]. [[She|Ella]] [[is|está]] [[never|nunca]] [[worried about|preocupada por]] [[mistakes|errores]]. [[She|Ella]] [[is|está]] [[married to|casada con]] [[a|un]] [[musician|músico]]. [[I|Yo]] [[was|estaba]] [[tired of|cansado de]] [[old methods|métodos antiguos]] [[but|pero]] [[she|ella]] [[is|es]] [[responsible for|responsable de]] [[making|hacer]] [[lessons|las clases]] [[fun|divertidas]]. [[I|Yo]] [[am|estoy]] [[excited about|emocionado por]] [[my next exam|mi próximo examen]].`;

const INSTRUCTIONS = 'Lee el texto de abajo. Después responde las preguntas.';

const QUESTIONS = [
  { question: '[[What|Qué]] [[is the person interested in|está interesado la persona]]?', options: ['[[sport|deporte]]', '[[learning new languages|aprender nuevos idiomas]]', '[[music|música]]'], correctAnswer: 1, explanation: '[[The text says|El texto dice]] "[[interested in learning new languages|interesado en aprender nuevos idiomas]]".' },
  { question: '[[What|Qué]] [[was the person afraid of at first|tenía miedo de al principio]]?', options: ['[[writing|escribir]]', '[[speaking English|hablar inglés]]', '[[reading|leer]]'], correctAnswer: 1, explanation: '[[The text says|El texto dice]] "[[afraid of speaking English|tenía miedo de hablar inglés]]".' },
  { question: '[[What|Qué]] [[is the person good at now|es bueno ahora]]?', options: ['[[maths|matemáticas]]', '[[English|inglés]]', '[[cooking|cocinar]]'], correctAnswer: 1, explanation: '[[The text says|El texto dice]] "[[good at it|bueno en ello]]" [[referring to English|refiriéndose al inglés]].' },
  { question: '[[What|De qué]] [[is the person proud of|está orgulloso]]?', options: ['[[their family|su familia]]', '[[their progress|su progreso]]', '[[their job|su trabajo]]'], correctAnswer: 1, explanation: '[[The text says|El texto dice]] "[[proud of my progress|orgulloso de mi progreso]]".' },
  { question: '[[What|Por qué]] [[is the teacher famous for|es famosa la profesora]]?', options: ['[[her music|su música]]', '[[her patience|su paciencia]]', '[[her cooking|su cocina]]'], correctAnswer: 1, explanation: '[[The text says|El texto dice]] "[[famous for her patience|famoso por su paciencia]]".' },
  { question: '[[What|Por qué]] [[is the teacher never worried about|nunca está preocupada]]?', options: ['[[the weather|el tiempo]]', '[[mistakes|errores]]', '[[money|dinero]]'], correctAnswer: 1, explanation: '[[The text says|El texto dice]] "[[never worried about mistakes|nunca preocupada por errores]]".' },
  { question: '[[Who|Con quién]] [[is the teacher married to|está casada la profesora]]?', options: ['[[a doctor|un médico]]', '[[a musician|un músico]]', '[[a teacher|un profesor]]'], correctAnswer: 1, explanation: '[[The text says|El texto dice]] "[[married to a musician|casada con un músico]]".' },
  { question: '[[The person|La persona]] [[was tired of|estaba cansado de]] [[old methods|métodos antiguos]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'True', explanation: '[[True|Verdadero]]. [[The text says|El texto dice]] "[[tired of old methods|cansado de métodos antiguos]]".' },
  { question: '[[The teacher|La profesora]] [[is responsible for|es responsable de]] [[making lessons fun|hacer las clases divertidas]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'True', explanation: '[[True|Verdadero]]. [[The text says|El texto dice]] "[[responsible for making lessons fun|responsable de hacer las clases divertidas]]".' },
  { question: '[[What|Cuál]] [[is|es]] [[the main topic|el tema principal]] [[of|del]] [[this text|este texto]]?', options: ['[[Shopping|Compras]]', '[[Learning English and feelings|Aprender inglés y sentimientos]]', '[[Travel|Viajes]]'], correctAnswer: 1, explanation: '[[The text|El texto]] [[describes|describe]] [[learning English with feelings|aprender inglés con sentimientos]].' },
  { question: '[[The person|La persona]] [[is excited about|está emocionado por]] [[the next exam|el próximo examen]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'True', explanation: '[[True|Verdadero]]. [[The text says|El texto dice]] "[[excited about my next exam|emocionado por mi próximo examen]]".' },
  { question: '[[Which adjective + preposition|Qué adjetivo + preposición]] [[means "tener miedo de"|significa tener miedo de]]?', options: ['[[interested in|interesado en]]', '[[afraid of|tener miedo de]]', '[[good at|bueno en]]'], correctAnswer: 1, explanation: '[[Afraid of|Tener miedo de]] [[means tener miedo de|significa tener miedo de]].' },
  { question: '[[The person|La persona]] [[improved|mejoró]] [[their English|su inglés]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'True', explanation: '[[True|Verdadero]]. [[The text says|El texto dice]] "[[proud of my progress|orgulloso de mi progreso]]".' },
  { question: '[[The teacher|La profesora]] [[is|es]] [[patient|paciente]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'True', explanation: '[[True|Verdadero]]. [[The text says|El texto dice]] "[[famous for her patience|famoso por su paciencia]]".' },
  { question: '[[The text|El texto]] [[uses|usa]] [[many|muchos]] [[adjective + preposition|adjetivo + preposición]] [[combinations|combinaciones]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'True', explanation: '[[True|Verdadero]]. [[Examples|Ejemplos]]: [[interested in|interesado en]], [[afraid of|miedo de]], [[good at|bueno en]], [[proud of|orgulloso de]], etc.' },
];

export const UNIT_42_LESSON_3_READING: Exercise[] = QUESTIONS.map((q, i) => ({
  id: `b1-u42-l3-r${i + 1}`,
  type: 'reading',
  level: 'B1',
  topic: 'Feelings & Attitudes',
  difficulty: 'easy',
  transcript: READING_TRANSCRIPT,
  content: { title: LESSON_TITLE, instructions: INSTRUCTIONS, questions: [q] },
  topicName: 'Reading',
}));
