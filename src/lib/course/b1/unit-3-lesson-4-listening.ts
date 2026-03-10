/**
 * Unidad 3 B1 — Lección 4: Comprensión auditiva (Past Perfect, Past experiences)
 */

import { Exercise } from '@/lib/exercise-generator';

const LESSON_TITLE = '[[Listening|Comprensión auditiva]]';
const LISTENING_TRANSCRIPT = `[[Hi|Hola]], [[I|yo]] [[am|soy]] [[Emma|Emma]] [[and|y]] [[I|yo]] [[want|quiero]] [[to|a]] [[tell|contar]] [[you|te]] [[about|sobre]] [[my|mi]] [[first|primera]] [[job|trabajo]] [[interview|entrevista]]. [[I|yo]] [[had|había]] [[never|nunca]] [[had|tenido]] [[an|una]] [[interview|entrevista]] [[before|antes]] [[so|así que]] [[I|yo]] [[was|estaba]] [[very|muy]] [[nervous|nerviosa]]. [[I|yo]] [[had|había]] [[prepared|preparado]] [[for|durante]] [[weeks|semanas]] [[and|y]] [[I|yo]] [[had|había]] [[practised|practicado]] [[my|mi]] [[answers|respuestas]] [[many|muchas]] [[times|veces]]. [[When|Cuando]] [[I|yo]] [[arrived|llegué]] [[at|a]] [[the|la]] [[office|oficina]], [[the|el]] [[receptionist|recepcionista]] [[told|dijo]] [[me|me]] [[that|que]] [[the|el]] [[manager|gerente]] [[had|había]] [[already|ya]] [[left|salido]] [[for|para]] [[a|una]] [[meeting|reunión]]. [[I|yo]] [[had|había]] [[forgotten|olvidado]] [[to|a]] [[check|comprobar]] [[the|la]] [[time|hora]] [[and|y]] [[I|yo]] [[had|había]] [[arrived|llegado]] [[an hour late|una hora tarde]]. [[It|]] [[was|fue]] [[a|un]] [[setback|retroceso]] [[but|pero]] [[I|yo]] [[learned|aprendí]] [[from|de]] [[that|esa]] [[experience|experiencia]]. [[Now|Ahora]] [[I|yo]] [[always|siempre]] [[arrive|llego]] [[early|temprano]] [[and|y]] [[I|yo]] [[had|había]] [[another|otra]] [[interview|entrevista]] [[last|la pasada]] [[week|semana]] [[which|que]] [[went|salió]] [[much|mucho]] [[better|mejor]].`;

const INSTRUCTIONS = 'Escucha el audio. Después responde las preguntas.';

const QUESTIONS = [
  { question: '[[What|Qué]] [[is Emma talking about|está contando Emma]]?', options: ['[[her first job|su primer trabajo]]', '[[her first job interview|su primera entrevista de trabajo]]', '[[her studies|sus estudios]]'], correctAnswer: 1, explanation: '[[She says|Dice]] "[[I want to tell you about my first job interview|quiero contarte sobre mi primera entrevista de trabajo]]".' },
  { question: '[[Had Emma had an interview before|Había tenido Emma una entrevista antes]]?', options: ['[[Yes|Sí]]', '[[No|No]]', '[[Maybe|Quizás]]'], correctAnswer: 1, explanation: '[[She says|Dice]] "[[I had never had an interview before|nunca había tenido una entrevista antes]]".' },
  { question: '[[How long|Cuánto tiempo]] [[had she prepared|había preparado]]?', options: ['[[days|días]]', '[[weeks|semanas]]', '[[months|meses]]'], correctAnswer: 1, explanation: '[[She says|Dice]] "[[I had prepared for weeks|había preparado durante semanas]]".' },
  { question: '[[What|Qué]] [[had she practised|había practicado]]?', options: ['[[her questions|sus preguntas]]', '[[her answers|sus respuestas]]', '[[her presentation|su presentación]]'], correctAnswer: 1, explanation: '[[She says|Dice]] "[[I had practised my answers many times|había practicado mis respuestas muchas veces]]".' },
  { question: '[[Why|Por qué]] [[couldn\'t she see the manager|no pudo ver al gerente]]?', options: ['[[because|porque]] [[he|él]] [[had already left|ya había salido]] [[for a meeting|para una reunión]]', '[[because|porque]] [[he|él]] [[was busy|estaba ocupado]]', '[[because|porque]] [[she|ella]] [[was late|llegó tarde]]'], correctAnswer: 0, explanation: '[[The receptionist said|La recepcionista dijo]] "[[the manager had already left for a meeting|el gerente ya había salido para una reunión]]".' },
  { question: '[[What|Qué]] [[had Emma forgotten|había olvidado Emma]]?', options: ['[[to bring her CV|traer su CV]]', '[[to check the time|comprobar la hora]]', '[[to prepare|prepararse]]'], correctAnswer: 1, explanation: '[[She says|Dice]] "[[I had forgotten to check the time|había olvidado comprobar la hora]]".' },
  { question: '[[How late|Cuánto tarde]] [[had she arrived|había llegado]]?', options: ['[[half an hour|media hora]]', '[[an hour|una hora]]', '[[two hours|dos horas]]'], correctAnswer: 1, explanation: '[[She says|Dice]] "[[I had arrived an hour late|había llegado una hora tarde]]".' },
  { question: '[[What|Qué]] [[did she learn|aprendió]] [[from the experience|de la experiencia]]?', options: ['[[to prepare more|preparar más]]', '[[to arrive early|llegar temprano]]', '[[to be nervous|estar nerviosa]]'], correctAnswer: 1, explanation: '[[She says|Dice]] "[[Now I always arrive early|ahora siempre llego temprano]]".' },
  { question: '[[Emma|Emma]] [[had another interview|tuvo otra entrevista]] [[last week|la semana pasada]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'True', explanation: '[[True|Verdadero]]. [[She says|Dice]] "[[I had another interview last week|tuve otra entrevista la semana pasada]]".' },
  { question: '[[The manager|El gerente]] [[was waiting for her|la estaba esperando]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'False', explanation: '[[False|Falso]]. [[He had already left|ya había salido]] [[for a meeting|para una reunión]].' },
  { question: '[[Emma|Emma]] [[had prepared|había preparado]] [[for the interview|para la entrevista]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'True', explanation: '[[True|Verdadero]].' },
  { question: '[[The second interview|La segunda entrevista]] [[went better|salió mejor]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'True', explanation: '[[True|Verdadero]]. [[She says|Dice]] "[[which went much better|que salió mucho mejor]]".' },
  { question: '[[What|Cuál]] [[is|es]] [[the main topic|el tema principal]]?', options: ['[[A|Una]] [[success story|historia de éxito]]', '[[Learning from a past setback|Aprender de un retroceso pasado]]', '[[Job preparation|Preparación para el trabajo]]'], correctAnswer: 1, explanation: '[[The listening|La escucha]] [[describes|describe]] [[a setback and what she learned|un retroceso y lo que aprendió]].' },
  { question: '[[Emma|Emma]] [[had practised|había practicado]] [[her answers|sus respuestas]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'True', explanation: '[[True|Verdadero]].' },
  { question: '[[Emma|Emma]] [[still arrives late|todavía llega tarde]] [[to interviews|a las entrevistas]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'False', explanation: '[[False|Falso]]. [[She now always arrives early|ahora siempre llega temprano]].' },
];

export const UNIT_3_LESSON_4_LISTENING: Exercise[] = QUESTIONS.map((q, i) => ({
  id: `b1-u3-l4-l${i + 1}`,
  type: 'listening',
  level: 'B1',
  topic: 'Past experiences',
  difficulty: 'medium',
  transcript: LISTENING_TRANSCRIPT,
  content: { title: LESSON_TITLE, instructions: INSTRUCTIONS, questions: [q] },
  topicName: 'Listening',
}));
