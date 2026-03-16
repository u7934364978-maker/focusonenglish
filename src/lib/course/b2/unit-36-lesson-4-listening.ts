/**
 * Unidad 36 B2 — Lección 4: Comprensión auditiva (Culture extended)
 * 13 preguntas (B2: transcripción sobre cultura y used to/would)
 */

import { Exercise } from '@/lib/exercise-generator';

const LESSON_TITLE = '[[Listening|Comprensión auditiva]]';
const LISTENING_TRANSCRIPT = `[[Hi|Hola]], [[I'm|soy]] [[Maria|Maria]] [[and|y]] [[I|yo]] [[grew up|crecí]] [[in|en]] [[a|una]] [[rural|rural]] [[area|zona]] [[in|en]] [[Spain|España]]. [[We|Nosotros]] [[used to celebrate|solíamos celebrar]] [[the harvest|la cosecha]] [[every autumn|cada otoño]] [[and|y]] [[I|yo]] [[would dance|solía bailar]] [[at|en]] [[traditional festivals|festivales tradicionales]]. [[There used to be|Solía haber]] [[a|una]] [[ceremony|ceremonia]] [[in|en]] [[the square|la plaza]] [[every year|cada año]] [[and|y]] [[people|la gente]] [[would wear|llevaba]] [[folk costumes|trajes folclóricos]]. [[I|Yo]] [[used to love|me encantaba]] [[listening to|escuchar]] [[folk tales|cuentos populares]] [[from|de]] [[my grandfather|mi abuelo]] [[and|y]] [[he|él]] [[would tell|solía contar]] [[us|nos]] [[stories|historias]] [[about|sobre]] [[the old days|los viejos tiempos]]. [[Now|Ahora]] [[I|yo]] [[work|trabajo]] [[to preserve|para preservar]] [[our|nuestro]] [[cultural heritage|patrimonio cultural]] [[and|y]] [[I|yo]] [[teach|enseño]] [[folk music|música folclórica]] [[to|a]] [[children|niños]]. [[We|Nosotros]] [[used to have|solíamos tener]] [[a market|un mercado]] [[every Saturday|cada sábado]] [[and|y]] [[I|yo]] [[would go|solía ir]] [[with|con]] [[my mother|mi madre]] [[to buy|a comprar]] [[local produce|productos locales]].`;

const INSTRUCTIONS = 'Escucha el audio (o lee la transcripción). Después responde las preguntas.';

const QUESTIONS = [
  { question: '[[Who is speaking|Quién habla]]?', options: ['[[Maria, from a rural area in Spain|Maria, de una zona rural en España]]', '[[A student|Un estudiante]]', '[[A tourist|Un turista]]'], correctAnswer: 0, explanation: '[[The speaker says|El hablante dice]] "[[I\'m Maria and I grew up in a rural area in Spain|soy Maria y crecí en una zona rural en España]]".' },
  { question: '[[What|Qué]] [[did they use to celebrate|solían celebrar]]?', options: ['[[The harvest every autumn|La cosecha cada otoño]]', '[[A music festival|Un festival de música]]', '[[A dance competition|Una competición de baile]]'], correctAnswer: 0, explanation: '[[The speaker says|El hablante dice]] "[[we used to celebrate the harvest every autumn|solíamos celebrar la cosecha cada otoño]]".' },
  { question: '[[What|Qué]] [[would she do|solía hacer]] [[at traditional festivals|en festivales tradicionales]]?', options: ['[[Dance|Bailar]]', '[[Sing|Cantar]]', '[[Tell stories|Contar historias]]'], correctAnswer: 0, explanation: '[[The speaker says|El hablante dice]] "[[I would dance at traditional festivals|solía bailar en festivales tradicionales]]".' },
  { question: '[[What|Qué]] [[used to be|solía haber]] [[in the square|en la plaza]]?', options: ['[[A ceremony every year|Una ceremonia cada año]]', '[[A market|Un mercado]]', '[[A festival|Un festival]]'], correctAnswer: 0, explanation: '[[The speaker says|El hablante dice]] "[[there used to be a ceremony in the square every year|solía haber una ceremonia en la plaza cada año]]".' },
  { question: '[[Who|Quién]] [[would tell her stories|solía contarle historias]]?', options: ['[[Her grandfather|Su abuelo]]', '[[Her mother|Su madre]]', '[[Her grandmother|Su abuela]]'], correctAnswer: 0, explanation: '[[The speaker says|El hablante dice]] "[[my grandfather would tell us stories about the old days|mi abuelo solía contarnos historias sobre los viejos tiempos]]".' },
  { question: '[[What|Qué]] [[does she do now|hace ahora]]?', options: ['[[Works to preserve cultural heritage and teaches folk music to children|Trabaja para preservar el patrimonio cultural y enseña música folclórica a niños]]', '[[Dances at festivals|Baila en festivales]]', '[[Tells stories|Cuenta historias]]'], correctAnswer: 0, explanation: '[[The speaker says|El hablante dice]] "[[I work to preserve our cultural heritage and I teach folk music to children|trabajo para preservar nuestro patrimonio cultural y enseño música folclórica a niños]]".' },
  { question: '[[What|Qué]] [[did they use to have|solían tener]] [[every Saturday|cada sábado]]?', options: ['[[A market|Un mercado]]', '[[A ceremony|Una ceremonia]]', '[[A festival|Un festival]]'], correctAnswer: 0, explanation: '[[The speaker says|El hablante dice]] "[[we used to have a market every Saturday|solíamos tener un mercado cada sábado]]".' },
  { question: '[[What|Cuál]] [[is|es]] [[the main idea|la idea principal]] [[of the listening|de la escucha]]?', options: ['[[Maria describes her traditional upbringing and her work to preserve heritage|Maria describe su educación tradicional y su trabajo para preservar el patrimonio]]', '[[Markets are important|Los mercados son importantes]]', '[[Spain is the best|España es la mejor]]'], correctAnswer: 0, explanation: '[[The speaker|El hablante]] [[describes|describe]] [[her past|su pasado]] [[and|y]] [[present work|trabajo actual]].' },
  { question: '[[Which structure|Qué estructura]] [[is used|se usa]] [[for "there was" in the past|para "había" en el pasado]]?', options: ['[[There used to be|There used to be]]', '[[There would be|There would be]]'], correctAnswer: 0, explanation: '[[There used to be for past existence|There used to be para existencia pasada]].' },
  { question: '[[What|Qué]] [[vocabulary|vocabulario]] [[is central|es central]] [[in this listening|en esta escucha]]?', options: ['[[harvest|cosecha]], [[ceremony|ceremonia]], [[folk tales|cuentos populares]], [[heritage|patrimonio]], [[folk music|música folclórica]]', '[[sport|deporte]], [[technology|tecnología]]', '[[weather|tiempo]], [[food|comida]]'], correctAnswer: 0, explanation: '[[The listening|La escucha]] [[focuses on|se centra en]] [[culture vocabulary|vocabulario de cultura]].' },
  { question: '[[What|Qué]] [[can we infer|podemos inferir]] [[about Maria|sobre Maria]]?', options: ['[[She values her roots and dedicates herself to preserving traditions|Valora sus raíces y se dedica a preservar tradiciones]]', '[[She prefers city life|Prefiere la vida en la ciudad]]', '[[She does not like folk music|No le gusta la música folclórica]]'], correctAnswer: 0, explanation: '[[She|Ella]] [[works|trabaja]] [[to preserve|para preservar]] [[heritage|patrimonio]] [[and|y]] [[teaches|enseña]] [[folk music|música folclórica]].' },
  { question: '[[She|Ella]] ____ [[love listening to folk tales|le encantaba escuchar cuentos populares]].', options: ['[[used to|solía]]', '[[would|solía]]'], correctAnswer: 0, explanation: '[[Used to for past states|Used to para estados pasados]].' },
  { question: '[[People|La gente]] ____ [[wear folk costumes|llevar trajes folclóricos]].', options: ['[[would|solía]]', '[[used to|solía]]'], correctAnswer: 0, explanation: '[[Would for past habits|Would para hábitos pasados]].' },
];

export const UNIT_36_LESSON_4_LISTENING: Exercise[] = QUESTIONS.map((q, i) => ({
  id: `b2-u36-l4-l${i + 1}`,
  type: 'listening',
  level: 'B2',
  topic: 'Culture (extended)',
  difficulty: 'medium',
  transcript: LISTENING_TRANSCRIPT,
  content: { title: LESSON_TITLE, instructions: INSTRUCTIONS, questions: [q] },
  topicName: 'Listening',
}));
