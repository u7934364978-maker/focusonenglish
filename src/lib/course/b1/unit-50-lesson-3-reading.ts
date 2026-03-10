/**
 * Unidad 50 B1 — Lección 3: Comprensión lectora (Repaso 46–49)
 * 15 actividades
 */

import { Exercise } from '@/lib/exercise-generator';

const LESSON_TITLE = '[[Reading|Comprensión lectora]]';
const READING_TRANSCRIPT = `[[I|Yo]] [[had better|más me vale]] [[start|empezar]] [[my essay|mi ensayo]] [[soon|pronto]] [[or|o]] [[I\'ll|yo]] [[run out of|me quedaré sin]] [[time|tiempo]]. [[I|Yo]] [[would rather|preferiría]] [[work|trabajar]] [[at home|en casa]] [[than|que]] [[at the library|en la biblioteca]]. [[I|Yo]] [[am looking forward to|estoy esperando con ilusión]] [[finishing|terminar]] [[my degree|mi carrera]]. [[I|Yo]] [[needn\'t have|no necesitaba haber]] [[worried|preocupado]] [[about|sobre]] [[the exam|el examen]] [[it was easy|fue fácil]]. [[My flatmate|Mi compañero de piso]] [[takes care of|se encarga de]] [[the cooking|la cocina]] [[and|y]] [[I|yo]] [[deal with|lidio con]] [[the cleaning|la limpieza]]. [[We|Nosotros]] [[carried out|llevamos a cabo]] [[a project|un proyecto]] [[together|juntos]] [[last semester|el semestre pasado]]. [[It\'s time|Ya es hora]] [[you|tú]] [[started|empezaras]] [[working out|entrenar]] [[again|de nuevo]] [[you\'ve|has]] [[been|estado]] [[lazy|perezoso]] [[lately|últimamente]].`;

const INSTRUCTIONS = 'Lee el texto de abajo. Después responde las preguntas.';

const QUESTIONS = [
  { question: '[[What|Qué]] [[had the person better do|más le vale hacer a la persona]]?', options: ['[[Relax|Relajarse]]', '[[Start the essay soon|Empezar el ensayo pronto]]', '[[Go out|Salir]]'], correctAnswer: 1, explanation: '[[The text says|El texto dice]] "[[had better start my essay soon|más me vale empezar mi ensayo pronto]]".' },
  { question: '[[Why|Por qué]] [[might they run out of time|podrían quedarse sin tiempo]]?', options: ['[[They work too fast|Trabajan muy rápido]]', '[[If they don\'t start the essay soon|Si no empiezan el ensayo pronto]]', '[[The library closes early|La biblioteca cierra pronto]]'], correctAnswer: 1, explanation: '[[The text says|El texto dice]] "[[or I\'ll run out of time|o me quedaré sin tiempo]]".' },
  { question: '[[Where|Dónde]] [[would the person rather work|preferiría trabajar la persona]]?', options: ['[[At the library|En la biblioteca]]', '[[At home|En casa]]', '[[At university|En la universidad]]'], correctAnswer: 1, explanation: '[[The text says|El texto dice]] "[[would rather work at home than at the library|preferiría trabajar en casa que en la biblioteca]]".' },
  { question: '[[What|Qué]] [[is the person looking forward to|espera con ilusión la persona]]?', options: ['[[A holiday|Unas vacaciones]]', '[[Finishing their degree|Terminar su carrera]]', '[[A party|Una fiesta]]'], correctAnswer: 1, explanation: '[[The text says|El texto dice]] "[[looking forward to finishing my degree|esperando con ilusión terminar mi carrera]]".' },
  { question: '[[What|Qué]] [[did they needn\'t have done|no necesitaba haber hecho]]?', options: ['[[Studied|Estudiado]]', '[[Worried about the exam|Preocupado por el examen]]', '[[Taken the exam|Hecho el examen]]'], correctAnswer: 1, explanation: '[[The text says|El texto dice]] "[[needn\'t have worried about the exam|no necesitaba haber me preocupado por el examen]]".' },
  { question: '[[Who|Quién]] [[takes care of the cooking|se encarga de la cocina]]?', options: ['[[The person|La persona]]', '[[The flatmate|El compañero de piso]]', '[[Both|Ambos]]'], correctAnswer: 1, explanation: '[[The text says|El texto dice]] "[[My flatmate takes care of the cooking|mi compañero se encarga de la cocina]]".' },
  { question: '[[Who|Quién]] [[deals with the cleaning|lidia con la limpieza]]?', options: ['[[The flatmate|El compañero de piso]]', '[[The person|La persona]]', '[[Both|Ambos]]'], correctAnswer: 1, explanation: '[[The text says|El texto dice]] "[[I deal with the cleaning|yo lidio con la limpieza]]".' },
  { question: '[[What|Qué]] [[did they carry out last semester|llevaron a cabo el semestre pasado]]?', options: ['[[A meeting|Una reunión]]', '[[A project together|Un proyecto juntos]]', '[[An exam|Un examen]]'], correctAnswer: 1, explanation: '[[The text says|El texto dice]] "[[carried out a project together last semester|llevamos a cabo un proyecto juntos el semestre pasado]]".' },
  { question: '[[What|Qué]] [[does "it\'s time" suggest|sugiere "it\'s time"]]?', options: ['[[To start working out again|Empezar a entrenar de nuevo]]', '[[To stop exercising|Dejar de ejercitarse]]', '[[To rest|Descansar]]'], correctAnswer: 0, explanation: '[[The text says|El texto dice]] "[[It\'s time you started working out again|ya es hora de que empieces a entrenar de nuevo]]".' },
  { question: '[[What|Cuál]] [[is the main topic|es el tema principal]] [[of|del]] [[this text|este texto]]?', options: ['[[Travel|Viajes]]', '[[Student life with units 46-49|Vida estudiantil con unidades 46-49]]', '[[Food|Comida]]'], correctAnswer: 1, explanation: '[[The text|El texto]] [[uses|usa]] [[had better|had better]], [[would rather|would rather]], [[phrasal verbs|phrasal verbs]] [[and|y]] [[need|need]].' },
  { question: '[[The text|El texto]] [[uses|usa]] [[had better|had better]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'True', explanation: '[[True|Verdadero]]. "[[had better start|más me vale empezar]]".' },
  { question: '[[The text|El texto]] [[uses|usa]] [[would rather|would rather]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'True', explanation: '[[True|Verdadero]]. "[[would rather work at home|preferiría trabajar en casa]]".' },
  { question: '[[Which phrasal verb|Qué phrasal verb]] [[means "quedarse sin"|significa quedarse sin]]?', options: ['[[run out of|quedarse sin]]', '[[work out|entrenar]]', '[[take care of|cuidar de]]'], correctAnswer: 0, explanation: '[[Run out of|Quedarse sin]].' },
  { question: '[[The person|La persona]] [[has been lazy lately|ha sido perezoso últimamente]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'True', explanation: '[[True|Verdadero]]. [[The text says|El texto dice]] "[[you\'ve been lazy lately|has estado perezoso últimamente]]".' },
  { question: '[[The text|El texto]] [[reviews|repasa]] [[units 46-49|unidades 46-49]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'True', explanation: '[[True|Verdadero]]. [[had better|had better]], [[would rather|would rather]], [[phrasal verbs|phrasal verbs]], [[need|need]].' },
];

export const UNIT_50_LESSON_3_READING: Exercise[] = QUESTIONS.map((q, i) => ({
  id: `b1-u50-l3-r${i + 1}`,
  type: 'reading',
  level: 'B1',
  topic: 'Review 46-49',
  difficulty: 'easy',
  transcript: READING_TRANSCRIPT,
  content: { title: LESSON_TITLE, instructions: INSTRUCTIONS, questions: [q] },
  topicName: 'Reading',
}));
