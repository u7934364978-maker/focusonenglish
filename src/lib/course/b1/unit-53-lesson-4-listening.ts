/**
 * Unidad 53 B1 — Lección 4: Comprensión auditiva (Modals review)
 * 15 actividades
 */

import { Exercise } from '@/lib/exercise-generator';

const LESSON_TITLE = '[[Listening|Comprensión auditiva]]';
const LISTENING_TRANSCRIPT = `[[Hi|Hola]], [[I|yo]] [[am|soy]] [[Lisa|Lisa]] [[and|y]] [[today|hoy]] [[I|yo]] [[want|quiero]] [[to|a]] [[tell|contar]] [[you|te]] [[about|sobre]] [[my|mi]] [[day|día]] [[using|usando]] [[modals|modales]]. [[This morning|Esta mañana]] [[I|yo]] [[had to|tuve que]] [[get up early|levantarme temprano]] [[because|porque]] [[I|yo]] [[had|tenía]] [[a meeting|una reunión]]. [[You|Tú]] [[must|debes]] [[be|ser]] [[on time|puntual]] [[for|para]] [[work|trabajo]]. [[I|Yo]] [[think|creo]] [[my boss|mi jefe]] [[might|podría]] [[be|estar]] [[angry|enfadado]] [[because|porque]] [[I|yo]] [[was|estaba]] [[late|tarde]] [[last week|la semana pasada]]. [[I|Yo]] [[should|debería]] [[apologise|disculparme]] [[to him|con él]]. [[I|Yo]] [[could|podía]] [[speak|hablar]] [[French|francés]] [[when|cuando]] [[I|yo]] [[was young|era joven]] [[but|pero]] [[I|yo]] [[can\'t|no puedo]] [[now|ahora]]. [[You|Tú]] [[mustn\'t|no debes]] [[forget|olvidar]] [[to|a]] [[submit|entregar]] [[your report|tu informe]] [[by Friday|para el viernes]]. [[I|yo]] [[would rather|preferiría]] [[stay|quedarme]] [[home|en casa]] [[tonight|esta noche]] [[than|que]] [[go out|salir]].`;

const INSTRUCTIONS = 'Escucha el audio. Puedes leer la transcripción. Después responde las preguntas.';

const QUESTIONS = [
  { question: '[[What|Qué]] [[is the speaker\'s name|es el nombre del hablante]]?', options: ['[[Lisa|Lisa]]', '[[Laura|Laura]]', '[[Lily|Lily]]'], correctAnswer: 0, explanation: '[[She says|Dice]] "[[I am Lisa|soy Lisa]]".' },
  { question: '[[What|Qué]] [[did they have to do|tuvo que hacer]] [[this morning|esta mañana]]?', options: ['[[Go to bed late|acostarse tarde]]', '[[Get up early|levantarse temprano]]', '[[Stay at home|quedarse en casa]]'], correctAnswer: 1, explanation: '[[She says|Dice]] "[[I had to get up early|tuve que levantarme temprano]]".' },
  { question: '[[What|Qué]] [[must you be|debes ser]] [[for work|para el trabajo]]?', options: ['[[Late|tarde]]', '[[On time|puntual]]', '[[Angry|enfadado]]'], correctAnswer: 1, explanation: '[[She says|Dice]] "[[You must be on time for work|debes ser puntual para el trabajo]]".' },
  { question: '[[Why|Por qué]] [[might the boss be angry|podría el jefe estar enfadado]]?', options: ['[[Because she was early|porque llegó temprano]]', '[[Because she was late last week|porque llegó tarde la semana pasada]]', '[[Because she was sick|porque estaba enferma]]'], correctAnswer: 1, explanation: '[[She says|Dice]] "[[I think my boss might be angry because I was late last week|creo que mi jefe podría estar enfadado porque llegué tarde la semana pasada]]".' },
  { question: '[[What|Qué]] [[should she do|debería hacer]]?', options: ['[[Forget the report|olvidar el informe]]', '[[Apologise to her boss|disculparse con su jefe]]', '[[Go out tonight|salir esta noche]]'], correctAnswer: 1, explanation: '[[She says|Dice]] "[[I should apologise to him|debería disculparme con él]]".' },
  { question: '[[What|Qué]] [[could she do|podía hacer]] [[when young|cuando era joven]]?', options: ['[[Speak English|hablar inglés]]', '[[Speak French|hablar francés]]', '[[Speak German|hablar alemán]]'], correctAnswer: 1, explanation: '[[She says|Dice]] "[[I could speak French when I was young|podía hablar francés cuando era joven]]".' },
  { question: '[[Can she speak French now|Puede hablar francés ahora]]?', options: ['[[Yes|Sí]]', '[[No|No]]'], correctAnswer: 1, explanation: '[[She says|Dice]] "[[but I can\'t now|pero no puedo ahora]]".' },
  { question: '[[What|Qué]] [[mustn\'t you forget|no debes olvidar]]?', options: ['[[To go out|salir]]', '[[To submit your report by Friday|entregar tu informe para el viernes]]', '[[To apologise|disculparse]]'], correctAnswer: 1, explanation: '[[She says|Dice]] "[[You mustn\'t forget to submit your report by Friday|no debes olvidar entregar tu informe para el viernes]]".' },
  { question: '[[What|Cuál]] [[is|es]] [[the main topic|el tema principal]] [[of|del]] [[this listening|esta escucha]]?', options: ['[[French|Francés]]', '[[A day using modals|Un día usando modales]]', '[[Cooking|Cocina]]'], correctAnswer: 1, explanation: '[[The listening|La escucha]] [[describes|describe]] [[a day|un día]] [[using modals|usando modales]].' },
  { question: '[[She|Ella]] [[would rather|preferiría]] [[stay home|quedarse en casa]] [[tonight|esta noche]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'True', explanation: '[[True|Verdadero]]. [[She says|Dice]] "[[I would rather stay home tonight than go out|preferiría quedarme en casa esta noche que salir]]".' },
  { question: '[[The text|El texto]] [[uses|usa]] [[several|varios]] [[modals|modales]]: [[had to|tuvo que]], [[must|debe]], [[might|podría]], [[should|debería]], [[could|podía]], [[can\'t|no puede]], [[mustn\'t|no debe]], [[would rather|preferiría]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'True', explanation: '[[True|Verdadero]]. [[All|Todos]] [[are|son]] [[in the text|en el texto]].' },
  { question: '[[Had to|Tuvo que]] [[expresses|expresa]] [[past obligation|obligación pasada]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'True', explanation: '[[True|Verdadero]]. [[I had to get up|Tuve que levantarme]] [[means|significa]] [[past obligation|obligación pasada]].' },
  { question: '[[Mustn\'t|No debe]] [[means|significa]] [[prohibition|prohibición]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'True', explanation: '[[True|Verdadero]]. [[Mustn\'t forget|No debes olvidar]] [[is|es]] [[strong|fuerte]] [[advice|consejo]] [[or|o]] [[prohibition|prohibición]].' },
  { question: '[[What|Qué]] [[does "would rather"|significa "preferiría"]] [[mean|significa]]?', options: ['[[Must|debe]]', '[[Prefer|preferir]]', '[[Have to|tener que]]'], correctAnswer: 1, explanation: '[[Would rather|Preferiría]] [[means|significa]] [[prefer|preferir]].' },
  { question: '[[The speaker|La hablante]] [[had|tenía]] [[a meeting|una reunión]] [[this morning|esta mañana]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'True', explanation: '[[True|Verdadero]]. [[She says|Dice]] "[[I had a meeting|tenía una reunión]]".' },
];

export const UNIT_53_LESSON_4_LISTENING: Exercise[] = QUESTIONS.map((q, i) => ({
  id: `b1-u53-l4-l${i + 1}`,
  type: 'listening',
  level: 'B1',
  topic: 'Modals',
  difficulty: 'easy',
  transcript: LISTENING_TRANSCRIPT,
  content: { title: LESSON_TITLE, instructions: INSTRUCTIONS, questions: [q] },
  topicName: 'Listening',
}));
