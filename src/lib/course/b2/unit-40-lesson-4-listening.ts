/**
 * Unidad 40 B2 — Lección 4: Comprensión auditiva (Repaso 36–39)
 * 13 preguntas con texto y casos distintos
 */

import { Exercise } from '@/lib/exercise-generator';

const LESSON_TITLE = '[[Listening|Comprensión auditiva]]';
const LISTENING_TRANSCRIPT = `[[Hi|Hola]], [[I'm|soy]] [[Lisa|Lisa]]. [[When|Cuando]] [[I|yo]] [[was young|era joven]], [[I|yo]] [[used to celebrate|solía celebrar]] [[the harvest|la cosecha]] [[every autumn|cada otoño]] [[and|y]] [[I|yo]] [[would dance|solía bailar]] [[at festivals|en festivales]]. [[Now|Ahora]] [[I|yo]] [[work|trabajo]] [[in business|en negocios]] [[and|y]] [[we|nosotros]] [[did|sí]] [[close|cerramos]] [[the deal|el trato]] [[last week|la semana pasada]]. [[I|yo]] [[ran into|me encontré con]] [[an old colleague|a un viejo colega]] [[at the conference|en la conferencia]] [[and|y]] [[we|nosotros]] [[set up|organizamos]] [[a meeting|una reunión]]. [[Over 200 people|Más de 200 personas]] [[turned up|acudieron]] [[for the event|al evento]] [[and|y]] [[it|]] [[turned out|resultó]] [[to be|ser]] [[a success|un éxito]]. [[She|Ella]] [[worked through|superó]] [[the injury|la lesión]] [[and|y]] [[took up|empezó]] [[yoga|yoga]] [[to stay fit|para mantenerse en forma]].`;

const INSTRUCTIONS = 'Escucha el audio (o lee la transcripción). Después responde las preguntas.';

const QUESTIONS = [
  { question: '[[Who is speaking|Quién habla]]?', options: ['[[Lisa, who used to celebrate harvest and now works in business|Lisa, que solía celebrar la cosecha y ahora trabaja en negocios]]', '[[A student|Un estudiante]]', '[[A coach|Un entrenador]]'], correctAnswer: 0, explanation: '[[The speaker says|El hablante dice]] "[[I\'m Lisa|soy Lisa]]".' },
  { question: '[[What|Qué]] [[did she use to celebrate|solía celebrar]]?', options: ['[[The harvest every autumn|La cosecha cada otoño]]', '[[The deal|El trato]]', '[[The event|El evento]]'], correctAnswer: 0, explanation: '[[The speaker says|El hablante dice]] "[[I used to celebrate the harvest every autumn|solía celebrar la cosecha cada otoño]]".' },
  { question: '[[What|Qué]] [[would she do|solía hacer]] [[at festivals|en festivales]]?', options: ['[[Dance|Bailar]]', '[[Work|Trabajar]]', '[[Close deals|Cerrar tratos]]'], correctAnswer: 0, explanation: '[[The speaker says|El hablante dice]] "[[I would dance at festivals|solía bailar en festivales]]".' },
  { question: '[[What|Qué]] [[did they close|cerraron]]?', options: ['[[The deal last week|El trato la semana pasada]]', '[[The meeting|La reunión]]', '[[The event|El evento]]'], correctAnswer: 0, explanation: '[[The speaker says|El hablante dice]] "[[we did close the deal last week|sí cerramos el trato la semana pasada]]".' },
  { question: '[[What|Qué]] [[did she run into|con quién se encontró]]?', options: ['[[An old colleague at the conference|Un viejo colega en la conferencia]]', '[[A fan|Un aficionado]]', '[[Her grandmother|Su abuela]]'], correctAnswer: 0, explanation: '[[The speaker says|El hablante dice]] "[[I ran into an old colleague at the conference|me encontré con un viejo colega en la conferencia]]".' },
  { question: '[[What|Qué]] [[did they set up|organizaron]]?', options: ['[[A meeting|Una reunión]]', '[[A picnic|Un picnic]]', '[[A festival|Un festival]]'], correctAnswer: 0, explanation: '[[The speaker says|El hablante dice]] "[[we set up a meeting|organizamos una reunión]]".' },
  { question: '[[What|Qué]] [[turned up for the event|acudió al evento]]?', options: ['[[Over 200 people|Más de 200 personas]]', '[[Over 500 fans|Más de 500 aficionados]]', '[[Her colleague|Su colega]]'], correctAnswer: 0, explanation: '[[The speaker says|El hablante dice]] "[[over 200 people turned up for the event|más de 200 personas acudieron al evento]]".' },
  { question: '[[What|Cuál]] [[is|es]] [[the main idea|la idea principal]] [[of the listening|de la escucha]]?', options: ['[[Lisa describes her past and present: culture, business, phrasal verbs from units 36–39|Lisa describe su pasado y presente: cultura, negocios, phrasal verbs de unidades 36–39]]', '[[Deals are important|Los tratos son importantes]]', '[[Festivals are best|Los festivales son mejores]]'], correctAnswer: 0, explanation: '[[The speaker|El hablante]] [[combines|combina]] [[topics|temas]] [[from|de]] [[units 36–39|unidades 36–39]].' },
  { question: '[[Which phrasal verb|Qué phrasal verb]] [[means "overcome"|significa "superar"]]?', options: ['[[Work through|Work through]]', '[[Turn up|Turn up]]', '[[Run into|Run into]]'], correctAnswer: 0, explanation: '[[Work through = overcome|Work through = superar]].' },
  { question: '[[What|Qué]] [[vocabulary|vocabulario]] [[is central|es central]] [[in this listening|en esta escucha]]?', options: ['[[harvest|cosecha]], [[deal|trato]], [[conference|conferencia]], [[injury|lesión]], [[yoga|yoga]]', '[[sport|deporte]], [[music|música]]', '[[weather|tiempo]], [[food|comida]]'], correctAnswer: 0, explanation: '[[The listening|La escucha]] [[uses|usa]] [[vocabulary|vocabulario]] [[from|de]] [[units 36–39|unidades 36–39]].' },
  { question: '[[What|Qué]] [[can we infer|podemos inferir]] [[about Lisa|sobre Lisa]]?', options: ['[[She has a diverse background: culture, business, and now fitness|Tiene un perfil diverso: cultura, negocios y ahora fitness]]', '[[She only likes festivals|Solo le gustan los festivales]]', '[[She doesn\'t work|No trabaja]]'], correctAnswer: 0, explanation: '[[Harvest|Cosecha]], [[business|negocios]], [[deal|trato]], [[yoga|yoga]].' },
  { question: '[[She|Ella]] ____ [[yoga to stay fit|empezó yoga para mantenerse en forma]].', options: ['[[took up|empezó]]', '[[turned up|acudió]]'], correctAnswer: 0, explanation: '[[Take up = start a hobby|Take up = empezar un hobby]].' },
  { question: '[[It turned out to be|Resultó ser]] ____.', options: ['[[A success|Un éxito]]', '[[A failure|Un fracaso]]'], correctAnswer: 0, explanation: '[[The speaker says|El hablante dice]] "[[it turned out to be a success|resultó ser un éxito]]".' },
];

export const UNIT_40_LESSON_4_LISTENING: Exercise[] = QUESTIONS.map((q, i) => ({
  id: `b2-u40-l4-l${i + 1}`,
  type: 'listening',
  level: 'B2',
  topic: 'Repaso 36–39',
  difficulty: 'medium',
  transcript: LISTENING_TRANSCRIPT,
  content: { title: LESSON_TITLE, instructions: INSTRUCTIONS, questions: [q] },
  topicName: 'Listening',
}));
