/**
 * Unidad 40 B2 — Lección 3: Comprensión lectora (Repaso 36–39)
 * 13 preguntas con texto y casos distintos
 */

import { Exercise } from '@/lib/exercise-generator';

const LESSON_TITLE = '[[Reading|Comprensión lectora]]';
const READING_TRANSCRIPT = `[[When|Cuando]] [[she|ella]] [[was young|era joven]], [[she|ella]] [[used to live|solía vivir]] [[in a small village|en un pueblo pequeño]] [[and|y]] [[would visit|solía visitar]] [[her grandmother|a su abuela]] [[every Sunday|cada domingo]]. [[Now|Ahora]] [[she|ella]] [[works|trabaja]] [[in business|en negocios]] [[and|y]] [[I|yo]] [[do|sí]] [[want|quiero]] [[to attend|asistir]] [[her presentation|su presentación]]. [[We|Nosotros]] [[ran into|nos encontramos con]] [[an old friend|a un viejo amigo]] [[at the cinema|en el cine]] [[and|y]] [[we|nosotros]] [[set up|organizamos]] [[a picnic|un picnic]] [[for next Sunday|para el próximo domingo]]. [[Over 500 fans|Más de 500 aficionados]] [[turned up|acudieron]] [[for the match|para el partido]] [[and|y]] [[it|]] [[turned out|resultó]] [[to be|ser]] [[a great success|un gran éxito]]. [[She|Ella]] [[worked on|trabajó en]] [[her serve|su saque]] [[for months|durante meses]] [[and|y]] [[turned into|se convirtió en]] [[a star player|una jugadora estrella]].`;

const INSTRUCTIONS = 'Lee el texto. Después responde las preguntas.';

const QUESTIONS = [
  { question: '[[Where|Dónde]] [[did she use to live|solía vivir]]?', options: ['[[In a small village|En un pueblo pequeño]]', '[[In a city|En una ciudad]]', '[[By the sea|Junto al mar]]'], correctAnswer: 0, explanation: '[[The text says|El texto dice]] "[[she used to live in a small village|solía vivir en un pueblo pequeño]]".' },
  { question: '[[What|Qué]] [[would she do|solía hacer]] [[every Sunday|cada domingo]]?', options: ['[[Visit her grandmother|Visitar a su abuela]]', '[[Go to work|Ir a trabajar]]', '[[Set up picnics|Organizar picnics]]'], correctAnswer: 0, explanation: '[[The text says|El texto dice]] "[[she would visit her grandmother every Sunday|solía visitar a su abuela cada domingo]]".' },
  { question: '[[What|Qué]] [[does the speaker want|quiere el hablante]]?', options: ['[[To attend her presentation|Asistir a su presentación]]', '[[To run into her|Encontrarse con ella]]', '[[To set up a picnic|Organizar un picnic]]'], correctAnswer: 0, explanation: '[[The text says|El texto dice]] "[[I do want to attend her presentation|sí quiero asistir a su presentación]]".' },
  { question: '[[What|Qué]] [[did they run into|con quién se encontraron]]?', options: ['[[An old friend at the cinema|Un viejo amigo en el cine]]', '[[A star player|Una jugadora estrella]]', '[[Her grandmother|Su abuela]]'], correctAnswer: 0, explanation: '[[The text says|El texto dice]] "[[we ran into an old friend at the cinema|nos encontramos con un viejo amigo en el cine]]".' },
  { question: '[[What|Qué]] [[did they set up|organizaron]]?', options: ['[[A picnic for next Sunday|Un picnic para el próximo domingo]]', '[[A match|Un partido]]', '[[A presentation|Una presentación]]'], correctAnswer: 0, explanation: '[[The text says|El texto dice]] "[[we set up a picnic for next Sunday|organizamos un picnic para el próximo domingo]]".' },
  { question: '[[What|Qué]] [[turned up for the match|acudió al partido]]?', options: ['[[Over 500 fans|Más de 500 aficionados]]', '[[Her grandmother|Su abuela]]', '[[An old friend|Un viejo amigo]]'], correctAnswer: 0, explanation: '[[The text says|El texto dice]] "[[over 500 fans turned up for the match|más de 500 aficionados acudieron al partido]]".' },
  { question: '[[What|Qué]] [[did it turn out to be|resultó ser]]?', options: ['[[A great success|Un gran éxito]]', '[[A failure|Un fracaso]]', '[[A picnic|Un picnic]]'], correctAnswer: 0, explanation: '[[The text says|El texto dice]] "[[it turned out to be a great success|resultó ser un gran éxito]]".' },
  { question: '[[What|Cuál]] [[is|es]] [[the main idea|la idea principal]] [[of the text|del texto]]?', options: ['[[Mix of culture, business, leisure and sport with phrasal verbs and grammar from units 36–39|Mezcla de cultura, negocios, ocio y deporte con phrasal verbs y gramática de unidades 36–39]]', '[[Grandmothers are important|Las abuelas son importantes]]', '[[Picnics are best|Los picnics son mejores]]'], correctAnswer: 0, explanation: '[[The text|El texto]] [[combines|combina]] [[topics|temas]] [[from|de]] [[units 36–39|unidades 36–39]].' },
  { question: '[[Which phrasal verb|Qué phrasal verb]] [[means "become"|significa "convertirse en"]]?', options: ['[[Turn into|Turn into]]', '[[Turn up|Turn up]]', '[[Turn down|Turn down]]'], correctAnswer: 0, explanation: '[[Turn into = become|Turn into = convertirse en]].' },
  { question: '[[What|Qué]] [[vocabulary|vocabulario]] [[is key|es clave]] [[in this text|en este texto]]?', options: ['[[village|pueblo]], [[presentation|presentación]], [[picnic|picnic]], [[match|partido]], [[serve|saque]]', '[[sport|deporte]], [[music|música]]', '[[weather|tiempo]], [[food|comida]]'], correctAnswer: 0, explanation: '[[The text|El texto]] [[uses|usa]] [[vocabulary|vocabulario]] [[from|de]] [[units 36–39|unidades 36–39]].' },
  { question: '[[She|Ella]] [[turned down|rechazó]] [[the offer|la oferta]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 1, explanation: '[[False|Falso]]. [[The text does not say|El texto no dice]] [[she turned down an offer|que rechazó una oferta]].' },
  { question: '[[She|Ella]] ____ [[her serve for months|trabajó en su saque durante meses]].', options: ['[[worked on|trabajó en]]', '[[worked out|entrenó]]'], correctAnswer: 0, explanation: '[[Work on = improve|Work on = trabajar en]].' },
  { question: '[[What|Qué]] [[can we infer|podemos inferir]]?', options: ['[[The text mixes grammar and vocabulary from units 36–39|El texto mezcla gramática y vocabulario de unidades 36–39]]', '[[She only likes sport|Solo le gusta el deporte]]', '[[She never visits her grandmother|Nunca visita a su abuela]]'], correctAnswer: 0, explanation: '[[Used to|Used to]], [[do for emphasis|do para énfasis]], [[run into|run into]], [[set up|set up]], [[turn up|turn up]], [[turn out|turn out]], [[work on|work on]], [[turn into|turn into]].' },
];

export const UNIT_40_LESSON_3_READING: Exercise[] = QUESTIONS.map((q, i) => ({
  id: `b2-u40-l3-r${i + 1}`,
  type: 'reading',
  level: 'B2',
  topic: 'Repaso 36–39',
  difficulty: 'medium',
  transcript: READING_TRANSCRIPT,
  content: { title: LESSON_TITLE, instructions: INSTRUCTIONS, questions: [q] },
  topicName: 'Reading',
}));
