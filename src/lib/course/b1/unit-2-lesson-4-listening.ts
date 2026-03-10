/**
 * Unidad 2 B1 — Lección 4: Comprensión auditiva (Present Perfect Continuous, Education)
 */

import { Exercise } from '@/lib/exercise-generator';

const LESSON_TITLE = '[[Listening|Comprensión auditiva]]';
const LISTENING_TRANSCRIPT = `[[Hi|Hola]], [[I|yo]] [[am|soy]] [[Lisa|Lisa]] [[and|y]] [[I|yo]] [[have|he]] [[been|estado]] [[working|trabajando]] [[on|en]] [[this|este]] [[project|proyecto]] [[for|desde hace]] [[three|tres]] [[weeks|semanas]]. [[I|yo]] [[have|he]] [[been|estado]] [[studying|estudiando]] [[the|los]] [[data|datos]] [[since|desde]] [[the|el]] [[beginning|principio]] [[of|de]] [[the|el]] [[month|mes]] [[and|y]] [[I|yo]] [[think|creo]] [[I|yo]] [[am|estoy]] [[making|haciendo]] [[progress|progreso]]. [[My|Mi]] [[colleague|compañero]] [[has|ha]] [[been|estado]] [[helping|ayudando]] [[me|me]] [[for|desde hace]] [[two|dos]] [[weeks|semanas]] [[and|y]] [[we|nosotros]] [[have|hemos]] [[been|estado]] [[meeting|reuniéndonos]] [[every|cada]] [[day|día]] [[since|desde]] [[Monday|lunes]]. [[I|yo]] [[have|he]] [[been|estado]] [[feeling|sintiendo]] [[tired|cansada]] [[lately|últimamente]] [[but|pero]] [[the|el]] [[project|proyecto]] [[is|está]] [[almost|casi]] [[finished|terminado]].`;

const INSTRUCTIONS = 'Escucha el audio. Después responde las preguntas.';

const QUESTIONS = [
  { question: '[[How long|Cuánto tiempo]] [[has Lisa been working|lleva Lisa trabajando]] [[on the project|en el proyecto]]?', options: ['[[two weeks|dos semanas]]', '[[three weeks|tres semanas]]', '[[a month|un mes]]'], correctAnswer: 1, explanation: '[[She says|Dice]] "[[I have been working on this project for three weeks|llevo tres semanas trabajando en este proyecto]]".' },
  { question: '[[Since when|Desde cuándo]] [[has she been studying|lleva estudiando]] [[the data|los datos]]?', options: ['[[last week|la semana pasada]]', '[[the beginning of the month|el principio del mes]]', '[[Monday|lunes]]'], correctAnswer: 1, explanation: '[[She says|Dice]] "[[I have been studying the data since the beginning of the month|llevo estudiando los datos desde el principio del mes]]".' },
  { question: '[[How long|Cuánto tiempo]] [[has her colleague been helping|lleva su compañero ayudando]] [[her|a ella]]?', options: ['[[one week|una semana]]', '[[two weeks|dos semanas]]', '[[three weeks|tres semanas]]'], correctAnswer: 1, explanation: '[[She says|Dice]] "[[My colleague has been helping me for two weeks|mi compañero lleva dos semanas ayudándome]]".' },
  { question: '[[Since when|Desde cuándo]] [[have they been meeting|llevan reuniéndose]] [[every day|cada día]]?', options: ['[[Tuesday|martes]]', '[[Monday|lunes]]', '[[Wednesday|miércoles]]'], correctAnswer: 1, explanation: '[[She says|Dice]] "[[we have been meeting every day since Monday|llevamos reuniéndonos cada día desde el lunes]]".' },
  { question: '[[How|Cómo]] [[does she feel|se siente]] [[lately|últimamente]]?', options: ['[[excited|emocionada]]', '[[tired|cansada]]', '[[relaxed|relajada]]'], correctAnswer: 1, explanation: '[[She says|Dice]] "[[I have been feeling tired lately|llevo sintiéndome cansada últimamente]]".' },
  { question: '[[Is|¿Está]] [[the project|el proyecto]] [[finished|terminado]]?', options: ['[[Yes|Sí]], [[completely|completamente]]', '[[Almost|Casi]] [[finished|terminado]]', '[[No|No]]'], correctAnswer: 1, explanation: '[[She says|Dice]] "[[the project is almost finished|el proyecto está casi terminado]]".' },
  { question: '[[Lisa|Lisa]] [[has been working|lleva trabajando]] [[alone|sola]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'False', explanation: '[[False|Falso]]. [[Her colleague|Su compañero]] [[has been helping|ha estado ayudando]].' },
  { question: '[[They|Ellos]] [[meet|se reúnen]] [[every day|cada día]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'True', explanation: '[[True|Verdadero]].' },
  { question: '[[Lisa|Lisa]] [[has been feeling|se ha sentido]] [[tired|cansada]] [[lately|últimamente]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'True', explanation: '[[True|Verdadero]].' },
  { question: '[[The project|El proyecto]] [[started|empezó]] [[three weeks ago|hace tres semanas]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'True', explanation: '[[True|Verdadero]]. [[She has been working for three weeks|lleva trabajando tres semanas]].' },
  { question: '[[What|Cuál]] [[is|es]] [[the main topic|el tema principal]]?', options: ['[[A|Un]] [[trip|viaje]]', '[[Lisa\'s|El]] [[work|trabajo]] [[on|en]] [[a project|un proyecto]] [[over time|con el tiempo]]', '[[A meeting|Una reunión]]'], correctAnswer: 1, explanation: '[[The listening|La escucha]] [[describes|describe]] [[Lisa\'s work on a project over time|el trabajo de Lisa en un proyecto con el tiempo]].' },
  { question: '[[Lisa|Lisa]] [[has been studying|ha estado estudiando]] [[the data|los datos]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'True', explanation: '[[True|Verdadero]].' },
  { question: '[[She|Ella]] [[thinks|cree]] [[she|ella]] [[is|está]] [[making progress|haciendo progreso]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'True', explanation: '[[True|Verdadero]].' },
  { question: '[[Her colleague|Su compañero]] [[started helping|empezó a ayudar]] [[three weeks ago|hace tres semanas]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'False', explanation: '[[False|Falso]]. [[He has been helping for two weeks|lleva ayudando dos semanas]].' },
  { question: '[[They|Ellos]] [[have been meeting|llevan reuniéndose]] [[since Monday|desde el lunes]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'True', explanation: '[[True|Verdadero]].' },
];

export const UNIT_2_LESSON_4_LISTENING: Exercise[] = QUESTIONS.map((q, i) => ({
  id: `b1-u2-l4-l${i + 1}`,
  type: 'listening',
  level: 'B1',
  topic: 'Education',
  difficulty: 'medium',
  transcript: LISTENING_TRANSCRIPT,
  content: { title: LESSON_TITLE, instructions: INSTRUCTIONS, questions: [q] },
  topicName: 'Listening',
}));
