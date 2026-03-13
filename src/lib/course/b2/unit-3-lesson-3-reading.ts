/**
 * Unidad 3 B2 — Lección 3: Comprensión lectora (Education)
 * 13 preguntas con texto y casos distintos
 */

import { Exercise } from '@/lib/exercise-generator';

const LESSON_TITLE = '[[Reading|Comprensión lectora]]';
const READING_TRANSCRIPT = `[[I|Yo]] [[love|me encanta]] [[attending|asistir a]] [[seminars|seminarios]] [[at|en]] [[university|la universidad]], [[but|pero]] [[I|yo]] [[had|tuve]] [[to delay|retrasar]] [[applying|solicitar]] [[for|para]] [[my master\'s|mi máster]] [[because|porque]] [[I|yo]] [[wanted|quería]] [[to gain|ganar]] [[work experience|experiencia laboral]] [[first|primero]]. [[My tutor|Mi tutor]] [[recommended|recomendó]] [[taking|tomar]] [[a gap year|un año sabático]] [[and|y]] [[I|yo]] [[agreed|acordé]] [[to consider|considerar]] [[it|ello]]. [[I|yo]] [[avoided|evité]] [[cheating|hacer trampa]] [[on|en]] [[any|cualquier]] [[exam|examen]] [[and|y]] [[I|yo]] [[managed|logré]] [[to pass|aprobar]] [[all|todos]] [[my courses|mis cursos]] [[with|con]] [[good grades|buenas notas]]. [[I|yo]] [[finished|terminé]] [[writing|escribiendo]] [[my dissertation|mi tesis]] [[last June|el pasado junio]] [[and|y]] [[I|yo]] [[hope|espero]] [[to obtain|obtener]] [[a scholarship|una beca]] [[for|para]] [[postgraduate study|estudios de posgrado]]. [[I|yo]] [[suggest|sugiero]] [[signing up for|apuntarse a]] [[more workshops|más talleres]] [[if|si]] [[you|tú]] [[want|quieres]] [[to improve|mejorar]] [[your skills|tus habilidades]].`;

const INSTRUCTIONS = 'Lee el texto. Después responde las preguntas.';

const QUESTIONS = [
  { question: '[[What|Qué]] [[does the person love|le encanta a la persona]]?', options: ['[[Working|Trabajar]]', '[[Attending seminars at university|Asistir a seminarios en la universidad]]', '[[Travelling|Viajar]]'], correctAnswer: 1, explanation: '[[The text says|El texto dice]] "[[I love attending seminars at university|me encanta asistir a seminarios en la universidad]]".' },
  { question: '[[What|Qué]] [[did the person delay|retrasó la persona]]?', options: ['[[Graduating|Graduarse]]', '[[Applying for their master\'s|Solicitar su máster]]', '[[Taking a gap year|Tomar un año sabático]]'], correctAnswer: 1, explanation: '[[The text says|El texto dice]] "[[I had to delay applying for my master\'s|tuve que retrasar solicitar mi máster]]".' },
  { question: '[[What|Qué]] [[did the tutor recommend|recomendó el tutor]]?', options: ['[[Dropping out|Abandonar]]', '[[Taking a gap year|Tomar un año sabático]]', '[[Cheating|Hacer trampa]]'], correctAnswer: 1, explanation: '[[The text says|El texto dice]] "[[My tutor recommended taking a gap year|mi tutor recomendó tomar un año sabático]]".' },
  { question: '[[What|Qué]] [[did the person avoid|evitó la persona]]?', options: ['[[Studying|Estudiar]]', '[[Cheating on any exam|Hacer trampa en cualquier examen]]', '[[Attending seminars|Asistir a seminarios]]'], correctAnswer: 1, explanation: '[[The text says|El texto dice]] "[[I avoided cheating on any exam|evité hacer trampa en cualquier examen]]".' },
  { question: '[[How|Cómo]] [[did the person do in their courses|le fue a la persona en sus cursos]]?', options: ['[[Failed|Suspendió]]', '[[Passed with good grades|Aprobó con buenas notas]]', '[[Dropped out|Abandonó]]'], correctAnswer: 1, explanation: '[[The text says|El texto dice]] "[[I managed to pass all my courses with good grades|logré aprobar todos mis cursos con buenas notas]]".' },
  { question: '[[When|Cuándo]] [[did the person finish writing|terminó la persona de escribir]] [[their dissertation|su tesis]]?', options: ['[[Last month|El mes pasado]]', '[[Last June|El pasado junio]]', '[[Last year|El año pasado]]'], correctAnswer: 1, explanation: '[[The text says|El texto dice]] "[[I finished writing my dissertation last June|terminé de escribir mi tesis el pasado junio]]".' },
  { question: '[[What|Qué]] [[does the person hope|espera la persona]]?', options: ['[[To drop out|Abandonar]]', '[[To obtain a scholarship for postgraduate study|Obtener una beca para estudios de posgrado]]', '[[To fail|Suspender]]'], correctAnswer: 1, explanation: '[[The text says|El texto dice]] "[[I hope to obtain a scholarship for postgraduate study|espero obtener una beca para estudios de posgrado]]".' },
  { question: '[[The person|La persona]] [[suggests|sugiere]] [[signing up for more workshops|apuntarse a más talleres]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 0, explanation: '[[True|Verdadero]]. [[The text says|El texto dice]] "[[I suggest signing up for more workshops|sugiero apuntarse a más talleres]]".' },
  { question: '[[What|Cuál]] [[is|es]] [[the main topic|el tema principal]] [[of|del]] [[this text|este texto]]?', options: ['[[Travel|Viajes]]', '[[Education and study choices|Educación y decisiones de estudio]]', '[[Work|Trabajo]]'], correctAnswer: 1, explanation: '[[The text|El texto]] [[describes|describe]] [[university life|vida universitaria]], [[study choices|decisiones de estudio]] [[and|y]] [[postgraduate plans|planes de posgrado]].' },
  { question: '[[What|Qué]] [[vocabulary|vocabulario]] [[is key|es clave]] [[in|en]] [[this text|este texto]]?', options: ['[[Dissertation|Tesis]], [[scholarship|beca]], [[seminars|seminarios]], [[workshops|talleres]]', '[[Weather|Tiempo]], [[travel|viaje]]', '[[Food|Comida]], [[restaurant|restaurante]]'], correctAnswer: 0, explanation: '[[The text|El texto]] [[uses|usa]] [[vocabulary|vocabulario]] [[related to|relacionado con]] [[education|educación]].' },
  { question: '[[The person|La persona]] [[agreed|acordó]] [[to consider|considerar]] [[the gap year|el año sabático]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 0, explanation: '[[True|Verdadero]]. [[The text says|El texto dice]] "[[I agreed to consider it|acordé considerarlo]]".' },
  { question: '[[What|Qué]] [[grammar structure|estructura gramatical]] [[is used|se usa]] [[for|para]] "[[love attending|encanta asistir]]"?', options: ['[[Verb + infinitive|Verbo + infinitivo]]', '[[Verb + gerund|Verbo + gerundio]]', '[[Verb + object + infinitive|Verbo + objeto + infinitivo]]'], correctAnswer: 1, explanation: '[[Love + gerund|Love + gerundio]]: [[verb + -ing|verbo + -ing]].' },
  { question: '[[The person|La persona]] [[wanted|quería]] [[to gain work experience|ganar experiencia laboral]] [[before|antes de]] [[applying|solicitar]] [[for the master\'s|el máster]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 0, explanation: '[[True|Verdadero]]. [[The text says|El texto dice]] "[[I wanted to gain work experience first|quería ganar experiencia laboral primero]]".' },
];

export const UNIT_3_LESSON_3_READING: Exercise[] = QUESTIONS.map((q, i) => ({
  id: `b2-u3-l3-r${i + 1}`,
  type: 'reading',
  level: 'B2',
  topic: 'Education',
  difficulty: 'medium',
  transcript: READING_TRANSCRIPT,
  content: { title: LESSON_TITLE, instructions: INSTRUCTIONS, questions: [q] },
  topicName: 'Reading',
}));
