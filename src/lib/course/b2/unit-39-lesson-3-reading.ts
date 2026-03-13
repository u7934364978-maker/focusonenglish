/**
 * Unidad 39 B2 — Lección 3: Comprensión lectora (Sport extended)
 * 13 preguntas (B2: texto sobre deporte y phrasal verbs TURN/WORK)
 */

import { Exercise } from '@/lib/exercise-generator';

const LESSON_TITLE = '[[Reading|Comprensión lectora]]';
const READING_TRANSCRIPT = `[[Over 500 fans|Más de 500 aficionados]] [[turned up|acudieron]] [[for the match|para el partido]] [[last Saturday|el sábado pasado]]. [[She|Ella]] [[works out|entrena]] [[at the gym|en el gimnasio]] [[every morning|cada mañana]] [[to stay fit|para mantenerse en forma]]. [[He|Él]] [[turned down|rechazó]] [[the offer|la oferta]] [[to join|de unirse a]] [[the team|al equipo]] [[because of the salary|por el salario]]. [[The match|El partido]] [[turned out|resultó]] [[to be|ser]] [[a great success|un gran éxito]] — [[the stadium|el estadio]] [[was full|estaba lleno]]. [[She|Ella]] [[worked on|trabajó en]] [[her serve|su saque]] [[for months|durante meses]] [[before the tournament|antes del torneo]]. [[He|Él]] [[turned into|se convirtió en]] [[a professional athlete|un atleta profesional]] [[after years of training|después de años de entrenamiento]]. [[They|Ellos]] [[worked through|superaron]] [[the injury|la lesión]] [[and came back stronger|y volvieron más fuertes]].`;

const INSTRUCTIONS = 'Lee el texto sobre deporte. Después responde las preguntas.';

const QUESTIONS = [
  { question: '[[What|Qué]] [[happened|pasó]] [[with the fans|con los aficionados]]?', options: ['[[Over 500 turned up for the match|Más de 500 acudieron al partido]]', '[[They turned down the match|Rechazaron el partido]]', '[[They worked out|Entrenaron]]'], correctAnswer: 0, explanation: '[[The text says|El texto dice]] "[[over 500 fans turned up for the match|más de 500 aficionados acudieron al partido]]".' },
  { question: '[[What|Qué]] [[does she do|hace ella]] [[every morning|cada mañana]]?', options: ['[[Works out at the gym to stay fit|Entrena en el gimnasio para mantenerse en forma]]', '[[Turns down offers|Rechaza ofertas]]', '[[Works on her serve|Trabaja en su saque]]'], correctAnswer: 0, explanation: '[[The text says|El texto dice]] "[[she works out at the gym every morning to stay fit|entrena en el gimnasio cada mañana para mantenerse en forma]]".' },
  { question: '[[What|Qué]] [[did he turn down|rechazó él]]?', options: ['[[The offer to join the team because of the salary|La oferta de unirse al equipo por el salario]]', '[[The match|El partido]]', '[[The tournament|El torneo]]'], correctAnswer: 0, explanation: '[[The text says|El texto dice]] "[[he turned down the offer to join the team because of the salary|rechazó la oferta de unirse al equipo por el salario]]".' },
  { question: '[[What|Qué]] [[did the match turn out to be|resultó ser el partido]]?', options: ['[[A great success — the stadium was full|Un gran éxito, el estadio estaba lleno]]', '[[A failure|Un fracaso]]', '[[Postponed|Aplazado]]'], correctAnswer: 0, explanation: '[[The text says|El texto dice]] "[[the match turned out to be a great success|el partido resultó ser un gran éxito]]".' },
  { question: '[[What|Qué]] [[did she work on|trabajó en]]?', options: ['[[Her serve for months before the tournament|Su saque durante meses antes del torneo]]', '[[The injury|La lesión]]', '[[The team|El equipo]]'], correctAnswer: 0, explanation: '[[The text says|El texto dice]] "[[she worked on her serve for months before the tournament|trabajó en su saque durante meses antes del torneo]]".' },
  { question: '[[What|Qué]] [[did he turn into|se convirtió en]]?', options: ['[[A professional athlete after years of training|Un atleta profesional después de años de entrenamiento]]', '[[A fan|Un aficionado]]', '[[A coach|Un entrenador]]'], correctAnswer: 0, explanation: '[[The text says|El texto dice]] "[[he turned into a professional athlete after years of training|se convirtió en atleta profesional después de años de entrenamiento]]".' },
  { question: '[[What|Qué]] [[did they work through|superaron]]?', options: ['[[The injury and came back stronger|La lesión y volvieron más fuertes]]', '[[The match|El partido]]', '[[The offer|La oferta]]'], correctAnswer: 0, explanation: '[[The text says|El texto dice]] "[[they worked through the injury and came back stronger|superaron la lesión y volvieron más fuertes]]".' },
  { question: '[[What|Cuál]] [[is|es]] [[the main idea|la idea principal]] [[of the text|del texto]]?', options: ['[[Sport and phrasal verbs: turn up, work out, turn down, turn out, work on, turn into, work through|Deporte y phrasal verbs en contexto]]', '[[Fans are important|Los aficionados son importantes]]', '[[Gyms are best|Los gimnasios son mejores]]'], correctAnswer: 0, explanation: '[[The text|El texto]] [[describes|describe]] [[sport scenarios|escenarios deportivos]] [[with phrasal verbs|con phrasal verbs]].' },
  { question: '[[Which phrasal verb|Qué phrasal verb]] [[means "arrive"|significa "llegar"]]?', options: ['[[Turn up|Turn up]]', '[[Turn down|Turn down]]', '[[Work out|Work out]]'], correctAnswer: 0, explanation: '[[Turn up = arrive|Turn up = llegar, acudir]].' },
  { question: '[[What|Qué]] [[vocabulary|vocabulario]] [[is key|es clave]] [[in this text|en este texto]]?', options: ['[[match|partido]], [[gym|gimnasio]], [[stadium|estadio]], [[tournament|torneo]], [[athlete|atleta]], [[injury|lesión]]', '[[sport|deporte]], [[music|música]]', '[[weather|tiempo]], [[food|comida]]'], correctAnswer: 0, explanation: '[[The text|El texto]] [[focuses on|se centra en]] [[sport vocabulary|vocabulario deportivo]].' },
  { question: '[[He|Él]] [[accepted|aceptó]] [[the offer|la oferta]] [[to join the team|de unirse al equipo]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 1, explanation: '[[False|Falso]]. [[He turned it down|La rechazó]].' },
  { question: '[[She|Ella]] ____ [[her serve|su saque]] [[for months|durante meses]].', options: ['[[worked on|trabajó en]]', '[[worked out|entrenó]]'], correctAnswer: 0, explanation: '[[Work on = improve|Work on = trabajar en, mejorar]].' },
  { question: '[[What|Qué]] [[can we infer|podemos inferir]] [[about the people|sobre las personas]]?', options: ['[[They are dedicated to sport and training|Están dedicados al deporte y al entrenamiento]]', '[[They prefer to stay home|Prefieren quedarse en casa]]', '[[They don\'t like competition|No les gusta la competición]]'], correctAnswer: 0, explanation: '[[Work out|Entrenan]], [[work on|trabajan en]], [[turn into athlete|se convierten en atletas]].' },
];

export const UNIT_39_LESSON_3_READING: Exercise[] = QUESTIONS.map((q, i) => ({
  id: `b2-u39-l3-r${i + 1}`,
  type: 'reading',
  level: 'B2',
  topic: 'Sport (extended)',
  difficulty: 'medium',
  transcript: READING_TRANSCRIPT,
  content: { title: LESSON_TITLE, instructions: INSTRUCTIONS, questions: [q] },
  topicName: 'Reading',
}));
