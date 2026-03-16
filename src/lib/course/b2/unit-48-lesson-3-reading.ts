/**
 * Unidad 48 B2 — Lección 3: Comprensión lectora (Innovation in Teaching)
 * 13 preguntas (B2: texto sobre innovación en enseñanza y verbos de reporte)
 */

import { Exercise } from '@/lib/exercise-generator';

const LESSON_TITLE = '[[Reading|Comprensión lectora]]';
const READING_TRANSCRIPT = `[[Many teachers|Muchos profesores]] [[suggest|sugieren]] [[using|usar]] [[EdTech|tecnología educativa]] [[in the classroom|en el aula]]. [[The expert|El experto]] [[recommended|recomendó]] [[trying|probar]] [[different teaching methods|diferentes métodos de enseñanza]]. [[She|Ella]] [[insisted that|insistió en que]] [[we|nosotros]] [[stay|nos quedáramos]] [[for the workshop|para el taller]]. [[The advisor|El asesor]] [[urged students|urgió a los estudiantes]] [[to attend|a asistir]] [[the webinar|al seminario web]]. [[What matters most|Lo que más importa]] [[is|es]] [[student engagement|la participación del estudiante]]. [[The school|La escuela]] [[introduced|introdujo]] [[a flipped classroom|una clase invertida]] [[last year|el año pasado]]. [[The teacher|El profesor]] [[suggested|sugirió]] [[that we|que nosotros]] [[use|usáramos]] [[gamification|gamificación]] [[to boost motivation|para aumentar la motivación]]. [[Pedagogy|La pedagogía]] [[and|y]] [[innovation|innovación]] [[go hand in hand|van de la mano]].`;

const INSTRUCTIONS = 'Lee el texto sobre innovación en la enseñanza. Después responde las preguntas.';

const QUESTIONS = [
  { question: '[[What|Qué]] [[do many teachers suggest|sugieren muchos profesores]]?', options: ['[[Using EdTech in the classroom|Usar tecnología educativa en el aula]]', '[[Avoiding technology|Evitar la tecnología]]', '[[Traditional methods only|Solo métodos tradicionales]]'], correctAnswer: 0, explanation: '[[The text says|El texto dice]] "[[many teachers suggest using EdTech in the classroom|muchos profesores sugieren usar tecnología educativa en el aula]]".' },
  { question: '[[What|Qué]] [[did the expert recommend|recomendó el experto]]?', options: ['[[Trying different teaching methods|Probar diferentes métodos de enseñanza]]', '[[Sticking to one method|Mantenerse en un método]]', '[[Avoiding innovation|Evitar la innovación]]'], correctAnswer: 0, explanation: '[[The text says|El texto dice]] "[[the expert recommended trying different teaching methods|el experto recomendó probar diferentes métodos de enseñanza]]".' },
  { question: '[[What|Qué]] [[did she insist|insistió ella]]?', options: ['[[That we stay for the workshop|Que nos quedáramos para el taller]]', '[[That we leave|Que nos fuéramos]]', '[[That we skip the workshop|Que saltáramos el taller]]'], correctAnswer: 0, explanation: '[[The text says|El texto dice]] "[[she insisted that we stay for the workshop|insistió en que nos quedáramos para el taller]]".' },
  { question: '[[What|Qué]] [[did the advisor urge|urgió el asesor]]?', options: ['[[Students to attend the webinar|A los estudiantes a asistir al seminario web]]', '[[Students to avoid webinars|A los estudiantes a evitar seminarios web]]', '[[Students to skip workshops|A los estudiantes a saltar talleres]]'], correctAnswer: 0, explanation: '[[The text says|El texto dice]] "[[the advisor urged students to attend the webinar|el asesor urgió a los estudiantes a asistir al seminario web]]".' },
  { question: '[[What|Qué]] [[matters most|lo que más importa]]?', options: ['[[Student engagement|La participación del estudiante]]', '[[Grades|Las notas]]', '[[Attendance only|Solo la asistencia]]'], correctAnswer: 0, explanation: '[[The text says|El texto dice]] "[[what matters most is student engagement|lo que más importa es la participación del estudiante]]".' },
  { question: '[[What|Qué]] [[did the school introduce|introdujo la escuela]]?', options: ['[[A flipped classroom last year|Una clase invertida el año pasado]]', '[[New exams|Nuevos exámenes]]', '[[More lectures|Más conferencias]]'], correctAnswer: 0, explanation: '[[The text says|El texto dice]] "[[the school introduced a flipped classroom last year|la escuela introdujo una clase invertida el año pasado]]".' },
  { question: '[[What|Qué]] [[did the teacher suggest|sugirió el profesor]]?', options: ['[[That we use gamification to boost motivation|Que usáramos gamificación para aumentar la motivación]]', '[[That we avoid games|Que evitáramos juegos]]', '[[That we skip the workshop|Que saltáramos el taller]]'], correctAnswer: 0, explanation: '[[The text says|El texto dice]] "[[the teacher suggested that we use gamification to boost motivation|el profesor sugirió que usáramos gamificación para aumentar la motivación]]".' },
  { question: '[[What|Cuál]] [[is|es]] [[the main idea|la idea principal]] [[of the text|del texto]]?', options: ['[[Innovation in teaching: EdTech, methods, engagement, reporting verbs|Innovación en enseñanza: EdTech, métodos, participación, verbos de reporte]]', '[[Traditional teaching is best|La enseñanza tradicional es mejor]]', '[[Technology should be avoided|La tecnología debe evitarse]]'], correctAnswer: 0, explanation: '[[The text|El texto]] [[covers|cubre]] [[EdTech|EdTech]], [[methods|métodos]], [[engagement|participación]], [[reporting verbs|verbos de reporte]].' },
  { question: '[[Which reporting verb|Qué verbo de reporte]] [[takes a gerund|va con gerundio]]?', options: ['[[Suggest|Suggest]]', '[[Insist|Insist]]', '[[Urge|Urge]]'], correctAnswer: 0, explanation: '[[Suggest + gerund|Suggest + gerundio]].' },
  { question: '[[What|Qué]] [[vocabulary|vocabulario]] [[is key|es clave]] [[in this text|en este texto]]?', options: ['[[EdTech|EdTech]], [[flipped classroom|clase invertida]], [[gamification|gamificación]], [[student engagement|participación del estudiante]]', '[[sport|deporte]], [[music|música]]', '[[weather|tiempo]], [[food|comida]]'], correctAnswer: 0, explanation: '[[The text|El texto]] [[focuses on|se centra en]] [[education innovation vocabulary|vocabulario de innovación educativa]].' },
  { question: '[[She|Ella]] ____ [[that we stay|que nos quedemos]].', options: ['[[insisted|insistió]]', '[[suggested|sugirió]]', '[[urged|urgió]]'], correctAnswer: 0, explanation: '[[Insist + that + subjunctive|Insist + that + subjuntivo]].' },
  { question: '[[The advisor|El asesor]] ____ [[students|a los estudiantes]] ____ [[to attend|a asistir]] [[the webinar|al seminario web]].', options: ['[[urged|urgió]] ... [[to attend|asistir]]', '[[suggested|sugirió]] ... [[attending|asistiendo]]'], correctAnswer: 0, explanation: '[[Urge sb to do|Urge + objeto + infinitivo]].' },
  { question: '[[What|Qué]] [[can we infer|podemos inferir]] [[about teaching today|sobre la enseñanza hoy]]?', options: ['[[It combines tradition with innovation and technology|Combina tradición con innovación y tecnología]]', '[[Only traditional methods exist|Solo existen métodos tradicionales]]', '[[Technology replaces teachers|La tecnología reemplaza a los profesores]]'], correctAnswer: 0, explanation: '[[EdTech|EdTech]], [[flipped classroom|clase invertida]], [[gamification|gamificación]] [[are mentioned|se mencionan]].' },
];

export const UNIT_48_LESSON_3_READING: Exercise[] = QUESTIONS.map((q, i) => ({
  id: `b2-u48-l3-r${i + 1}`,
  type: 'reading',
  level: 'B2',
  topic: 'education-learning',
  difficulty: 'medium',
  transcript: READING_TRANSCRIPT,
  content: { title: LESSON_TITLE, instructions: INSTRUCTIONS, questions: [q] },
  topicName: 'Reading',
}));
