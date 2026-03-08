/**
 * Unidad 2 — Lección 3: Comprensión lectora (Past Simple verbos regulares)
 * 15 actividades
 */

import { Exercise } from '@/lib/exercise-generator';

const LESSON_TITLE = '[[Reading|Comprensión lectora]]';
const READING_TRANSCRIPT = `[[Last week|La semana pasada]] [[I|Yo]] [[had|tuve]] [[a|una]] [[busy|ocupada]] [[week|semana]]. [[On|El]] [[Monday|lunes]] [[I|Yo]] [[walked|caminé]] [[to|a]] [[work|trabajo]] [[because|porque]] [[my|mi]] [[car|coche]] [[was|estaba]] [[broken|estropeado]]. [[On|El]] [[Tuesday|martes]] [[I|Yo]] [[visited|visité]] [[my|mi]] [[grandmother|abuela]] [[in|en]] [[the|el]] [[hospital|hospital]]. [[She|Ella]] [[was|estaba]] [[happy|feliz]] [[to|de]] [[see|ver]] [[me|a mí]]. [[On|El]] [[Wednesday|miércoles]] [[I|Yo]] [[played|jugué]] [[football|fútbol]] [[with|con]] [[my|mis]] [[friends|amigos]]. [[We|Nosotros]] [[won|ganamos]] [[the|el]] [[match|partido]]! [[On|El]] [[Thursday|jueves]] [[I|Yo]] [[finished|terminé]] [[my|mi]] [[project|proyecto]] [[at|a]] [[work|trabajo]]. [[My|Mi]] [[boss|jefe]] [[was|estaba]] [[very|muy]] [[happy|feliz]]. [[Yesterday|Ayer]] [[I|Yo]] [[rested|descansé]] [[at|en]] [[home|casa]] [[and|y]] [[watched|vi]] [[a|una]] [[film|película]].`;

const INSTRUCTIONS = 'Lee el texto de abajo. Después responde las preguntas.';

const QUESTIONS = [
  {
    question: '[[What|Qué]] [[did|hizo]] [[the|el]] [[person|persona]] [[do|hacer]] [[on|el]] [[Monday|lunes]]?',
    options: ['[[visited|visitó]] [[grandmother|abuela]]', '[[walked|caminó]] [[to|a]] [[work|trabajo]]', '[[played|jugué]] [[football|fútbol]]', '[[rested|descansó]]'],
    correctAnswer: 1,
    explanation: '[[The|El]] [[text|texto]] [[says|dice]] "[[On Monday I walked to work|El lunes caminé al trabajo]]".',
  },
  {
    question: '[[Why|Por qué]] [[did|hizo]] [[he|él]] [[walk|caminar]] [[to|a]] [[work|trabajo]]?',
    options: ['[[Because|Porque]] [[he|él]] [[liked|le gustaba]] [[walking|caminar]]', '[[Because|Porque]] [[his|su]] [[car|coche]] [[was|estaba]] [[broken|estropeado]]', '[[Because|Porque]] [[it|era]] [[was|estaba]] [[near|cerca]]', '[[Because|Porque]] [[he|él]] [[had|tenía]] [[no|no]] [[car|coche]]'],
    correctAnswer: 1,
    explanation: '[[The|El]] [[text|texto]] [[says|dice]] "[[because my car was broken|porque mi coche estaba estropeado]]".',
  },
  {
    question: '[[What|Qué]] [[did|hizo]] [[he|él]] [[do|hacer]] [[on|el]] [[Tuesday|martes]]?',
    options: ['[[walked|caminó]]', '[[visited|visitó]] [[his|su]] [[grandmother|abuela]]', '[[played|jugué]] [[football|fútbol]]', '[[finished|terminó]] [[project|proyecto]]'],
    correctAnswer: 1,
    explanation: '[[The|El]] [[text|texto]] [[says|dice]] "[[On Tuesday I visited my grandmother|El martes visité a mi abuela]]".',
  },
  {
    question: '[[Where|Dónde]] [[was|estaba]] [[his|su]] [[grandmother|abuela]]?',
    options: ['[[at|en]] [[home|casa]]', '[[in|en]] [[the|el]] [[hospital|hospital]]', '[[at|en]] [[work|trabajo]]', '[[in|en]] [[the|el]] [[park|parque]]'],
    correctAnswer: 1,
    explanation: '[[The|El]] [[text|texto]] [[says|dice]] "[[in the hospital|en el hospital]]".',
  },
  {
    question: '[[What|Qué]] [[did|hizo]] [[he|él]] [[do|hacer]] [[on|el]] [[Wednesday|miércoles]]?',
    options: ['[[visited|visitó]] [[grandmother|abuela]]', '[[walked|caminó]]', '[[played|jugué]] [[football|fútbol]]', '[[rested|descansó]]'],
    correctAnswer: 2,
    explanation: '[[The|El]] [[text|texto]] [[says|dice]] "[[On Wednesday I played football|El miércoles jugué fútbol]]".',
  },
  {
    question: '[[Did|¿]] [[they|ellos]] [[win|ganaron]] [[the|el]] [[match|partido]]?',
    options: ['[[Yes|Sí]], [[they|ellos]] [[won|ganaron]]', '[[No|No]], [[they|ellos]] [[lost|perdieron]]', '[[Maybe|Quizás]]', '[[The|El]] [[text|texto]] [[doesn\'t|no]] [[say|dice]]'],
    correctAnswer: 0,
    explanation: '[[The|El]] [[text|texto]] [[says|dice]] "[[We won the match|Ganamos el partido]]"!',
  },
  {
    question: '[[What|Qué]] [[did|hizo]] [[he|él]] [[finish|terminar]] [[on|el]] [[Thursday|jueves]]?',
    options: ['[[his|su]] [[homework|deberes]]', '[[his|su]] [[project|proyecto]] [[at|en]] [[work|trabajo]]', '[[the|el]] [[match|partido]]', '[[the|la]] [[film|película]]'],
    correctAnswer: 1,
    explanation: '[[The|El]] [[text|texto]] [[says|dice]] "[[I finished my project at work|Terminé mi proyecto en el trabajo]]".',
  },
  {
    question: '[[How|Cómo]] [[did|estaba]] [[his|su]] [[boss|jefe]] [[feel|sentirse]]?',
    options: ['[[sad|triste]]', '[[angry|enfadado]]', '[[very|muy]] [[happy|feliz]]', '[[tired|cansado]]'],
    correctAnswer: 2,
    explanation: '[[The|El]] [[text|texto]] [[says|dice]] "[[My boss was very happy|Mi jefe estaba muy feliz]]".',
  },
  {
    question: '[[What|Qué]] [[did|hizo]] [[he|él]] [[do|hacer]] [[yesterday|ayer]]?',
    options: ['[[worked|trabajó]]', '[[visited|visitó]] [[grandmother|abuela]]', '[[rested|descansó]] [[at|en]] [[home|casa]] [[and|y]] [[watched|vi]] [[a|una]] [[film|película]]', '[[played|jugué]] [[football|fútbol]]'],
    correctAnswer: 2,
    explanation: '[[The|El]] [[text|texto]] [[says|dice]] "[[Yesterday I rested at home and watched a film|Ayer descansé en casa y vi una película]]".',
  },
  {
    question: '[[The|El]] [[person|persona]] [[walked|caminó]] [[to|a]] [[work|trabajo]] [[every|cada]] [[day|día]].',
    options: ['[[True|Verdadero]]', '[[False|Falso]]'],
    correctAnswer: 'False',
    explanation: '[[False|Falso]]. [[He|Él]] [[only|solo]] [[walked|caminó]] [[on|el]] [[Monday|lunes]] [[because|porque]] [[his|su]] [[car|coche]] [[was|estaba]] [[broken|estropeado]].',
  },
  {
    question: '[[His|Su]] [[grandmother|abuela]] [[was|estaba]] [[happy|feliz]] [[to|de]] [[see|ver]] [[him|a él]].',
    options: ['[[True|Verdadero]]', '[[False|Falso]]'],
    correctAnswer: 'True',
    explanation: '[[True|Verdadero]]. [[The|El]] [[text|texto]] [[says|dice]] "[[She was happy to see me|Ella estaba feliz de verme]]".',
  },
  {
    question: '[[He|Él]] [[finished|terminó]] [[his|su]] [[project|proyecto]] [[on|el]] [[Wednesday|miércoles]].',
    options: ['[[True|Verdadero]]', '[[False|Falso]]'],
    correctAnswer: 'False',
    explanation: '[[False|Falso]]. [[He|Él]] [[finished|terminó]] [[on|el]] [[Thursday|jueves]].',
  },
  {
    question: '[[What|Cuál]] [[is|es]] [[the|el]] [[main|principal]] [[topic|tema]] [[of|del]] [[this|este]] [[text|texto]]?',
    options: ['[[A|Una]] [[trip|viaje]]', '[[A|Una]] [[busy|ocupada]] [[week|semana]] [[in|en]] [[the|el]] [[past|pasado]]', '[[A|Un]] [[football|fútbol]] [[match|partido]]', '[[A|Una]] [[visit|visita]] [[to|a]] [[grandmother|abuela]]'],
    correctAnswer: 1,
    explanation: '[[The|El]] [[text|texto]] [[describes|describe]] [[what|qué]] [[the|el]] [[person|persona]] [[did|hizo]] [[each|cada]] [[day|día]] [[last week|la semana pasada]].',
  },
  {
    question: '[[Which|Cuál]] [[day|día]] [[did|hizo]] [[he|él]] [[rest|descansar]]?',
    options: ['[[Monday|lunes]]', '[[Wednesday|miércoles]]', '[[Thursday|jueves]]', '[[Yesterday|Ayer]]'],
    correctAnswer: 3,
    explanation: '[[The|El]] [[text|texto]] [[says|dice]] "[[Yesterday I rested at home|Ayer descansé en casa]]".',
  },
  {
    question: '[[How many|Cuántos]] [[days|días]] [[does|menciona]] [[the|el]] [[text|texto]] [[mention|mencionar]]?',
    options: ['[[three|tres]]', '[[four|cuatro]]', '[[five|cinco]]', '[[six|seis]]'],
    correctAnswer: 2,
    explanation: '[[The|El]] [[text|texto]] [[mentions|menciona]] [[Monday|lunes]], [[Tuesday|martes]], [[Wednesday|miércoles]], [[Thursday|jueves]], [[and|y]] [[yesterday|ayer]] = [[five|cinco]] [[days|días]].',
  },
];

export const UNIT_2_LESSON_3_READING: Exercise[] = QUESTIONS.map((q, i) => ({
  id: `a2-u2-l3-r${i + 1}`,
  type: 'reading',
  level: 'A2',
  topic: 'Past Simple',
  difficulty: 'easy',
  transcript: READING_TRANSCRIPT,
  content: {
    title: LESSON_TITLE,
    instructions: INSTRUCTIONS,
    questions: [q],
  },
  topicName: 'Reading',
}));
