/**
 * Unidad 39 B2 — Lección 4: Comprensión auditiva (Sport extended)
 * 13 preguntas (B2: transcripción sobre deporte y phrasal verbs)
 */

import { Exercise } from '@/lib/exercise-generator';

const LESSON_TITLE = '[[Listening|Comprensión auditiva]]';
const LISTENING_TRANSCRIPT = `[[Hi|Hola]], [[I'm|soy]] [[Mike|Mike]] [[and|y]] [[I|yo]] [[work out|entreno]] [[at the gym|en el gimnasio]] [[every day|cada día]]. [[Last week|La semana pasada]] [[over 500 fans|más de 500 aficionados]] [[turned up|acudieron]] [[for our match|para nuestro partido]] [[and|y]] [[it|]] [[turned out|resultó]] [[to be|ser]] [[a great success|un gran éxito]]. [[She|Ella]] [[turned down|rechazó]] [[the invitation|la invitación]] [[to play|a jugar]] [[in the charity match|en el partido benéfico]] [[because|porque]] [[of|de]] [[her injury|su lesión]]. [[He|Él]] [[worked on|trabajó en]] [[his technique|su técnica]] [[for months|durante meses]] [[and|y]] [[turned into|se convirtió en]] [[a star player|un jugador estrella]]. [[We|Nosotros]] [[worked through|superamos]] [[the difficult period|el período difícil]] [[and|y]] [[won|ganamos]] [[the cup|la copa]]. [[I|Yo]] [[turn up|acudo]] [[early|temprano]] [[for training|al entrenamiento]] [[every morning|cada mañana]].`;

const INSTRUCTIONS = 'Escucha el audio (o lee la transcripción). Después responde las preguntas.';

const QUESTIONS = [
  { question: '[[Who is speaking|Quién habla]]?', options: ['[[Mike, who works out every day|Mike, que entrena cada día]]', '[[A fan|Un aficionado]]', '[[A coach|Un entrenador]]'], correctAnswer: 0, explanation: '[[The speaker says|El hablante dice]] "[[I\'m Mike and I work out at the gym every day|soy Mike y entreno en el gimnasio cada día]]".' },
  { question: '[[What|Qué]] [[turned up|acudió]] [[last week|la semana pasada]]?', options: ['[[Over 500 fans for the match|Más de 500 aficionados para el partido]]', '[[The team|El equipo]]', '[[The coach|El entrenador]]'], correctAnswer: 0, explanation: '[[The speaker says|El hablante dice]] "[[over 500 fans turned up for our match|más de 500 aficionados acudieron a nuestro partido]]".' },
  { question: '[[What|Qué]] [[did it turn out to be|resultó ser]]?', options: ['[[A great success|Un gran éxito]]', '[[A failure|Un fracaso]]', '[[Postponed|Aplazado]]'], correctAnswer: 0, explanation: '[[The speaker says|El hablante dice]] "[[it turned out to be a great success|resultó ser un gran éxito]]".' },
  { question: '[[What|Qué]] [[did she turn down|rechazó ella]]?', options: ['[[The invitation to play in the charity match because of her injury|La invitación a jugar en el partido benéfico por su lesión]]', '[[The cup|La copa]]', '[[The training|El entrenamiento]]'], correctAnswer: 0, explanation: '[[The speaker says|El hablante dice]] "[[she turned down the invitation because of her injury|rechazó la invitación por su lesión]]".' },
  { question: '[[What|Qué]] [[did he work on|trabajó en]]?', options: ['[[His technique for months|Su técnica durante meses]]', '[[The injury|La lesión]]', '[[The match|El partido]]'], correctAnswer: 0, explanation: '[[The speaker says|El hablante dice]] "[[he worked on his technique for months|trabajó en su técnica durante meses]]".' },
  { question: '[[What|Qué]] [[did he turn into|se convirtió en]]?', options: ['[[A star player|Un jugador estrella]]', '[[A fan|Un aficionado]]', '[[A coach|Un entrenador]]'], correctAnswer: 0, explanation: '[[The speaker says|El hablante dice]] "[[he turned into a star player|se convirtió en jugador estrella]]".' },
  { question: '[[What|Qué]] [[did they work through|superaron]]?', options: ['[[The difficult period and won the cup|El período difícil y ganaron la copa]]', '[[The match|El partido]]', '[[The injury|La lesión]]'], correctAnswer: 0, explanation: '[[The speaker says|El hablante dice]] "[[we worked through the difficult period and won the cup|superamos el período difícil y ganamos la copa]]".' },
  { question: '[[What|Cuál]] [[is|es]] [[the main idea|la idea principal]] [[of the listening|de la escucha]]?', options: ['[[Mike describes sport and phrasal verbs in context|Mike describe deporte y phrasal verbs en contexto]]', '[[Fans are important|Los aficionados son importantes]]', '[[Injuries are common|Las lesiones son comunes]]'], correctAnswer: 0, explanation: '[[The speaker|El hablante]] [[describes|describe]] [[sport scenarios|escenarios deportivos]].' },
  { question: '[[Which phrasal verb|Qué phrasal verb]] [[means "reject"|significa "rechazar"]]?', options: ['[[Turn down|Turn down]]', '[[Turn up|Turn up]]', '[[Work out|Work out]]'], correctAnswer: 0, explanation: '[[Turn down = reject|Turn down = rechazar]].' },
  { question: '[[What|Qué]] [[vocabulary|vocabulario]] [[is central|es central]] [[in this listening|en esta escucha]]?', options: ['[[gym|gimnasio]], [[match|partido]], [[injury|lesión]], [[technique|técnica]], [[cup|copa]]', '[[sport|deporte]], [[music|música]]', '[[weather|tiempo]], [[food|comida]]'], correctAnswer: 0, explanation: '[[The listening|La escucha]] [[focuses on|se centra en]] [[sport vocabulary|vocabulario deportivo]].' },
  { question: '[[What|Qué]] [[can we infer|podemos inferir]] [[about Mike|sobre Mike]]?', options: ['[[He is dedicated to sport and training|Está dedicado al deporte y al entrenamiento]]', '[[He prefers to stay home|Prefiere quedarse en casa]]', '[[He doesn\'t like matches|No le gustan los partidos]]'], correctAnswer: 0, explanation: '[[He|Él]] [[works out|entrena]] [[every day|cada día]] [[and|y]] [[turns up early|acude temprano]].' },
  { question: '[[He|Él]] ____ [[early for training every morning|acude temprano al entrenamiento cada mañana]].', options: ['[[turns up|acude]]', '[[turns down|rechaza]]'], correctAnswer: 0, explanation: '[[Turn up = arrive|Turn up = llegar, acudir]].' },
  { question: '[[Work through|Work through]] [[means|significa]] ____.', options: ['[[To deal with and overcome|Enfrentar y superar]]', '[[To reject|Rechazar]]'], correctAnswer: 0, explanation: '[[Work through = deal with|Work through = superar]].' },
];

export const UNIT_39_LESSON_4_LISTENING: Exercise[] = QUESTIONS.map((q, i) => ({
  id: `b2-u39-l4-l${i + 1}`,
  type: 'listening',
  level: 'B2',
  topic: 'Sport (extended)',
  difficulty: 'medium',
  transcript: LISTENING_TRANSCRIPT,
  content: { title: LESSON_TITLE, instructions: INSTRUCTIONS, questions: [q] },
  topicName: 'Listening',
}));
