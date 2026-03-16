/**
 * Unidad 36 B2 — Lección 3: Comprensión lectora (Culture extended)
 * 13 preguntas (B2: texto sobre cultura y used to/would)
 */

import { Exercise } from '@/lib/exercise-generator';

const LESSON_TITLE = '[[Reading|Comprensión lectora]]';
const READING_TRANSCRIPT = `[[When|Cuando]] [[she|ella]] [[was young|era joven]], [[she|ella]] [[used to live|solía vivir]] [[in|en]] [[a small village|un pueblo pequeño]] [[in|en]] [[the mountains|las montañas]]. [[She|Ella]] [[would visit|solía visitar]] [[her grandmother|a su abuela]] [[every Sunday|cada domingo]] [[and|y]] [[they|ellas]] [[used to gather|solían reunirse]] [[around|alrededor del]] [[the fire|fuego]] [[to listen|para escuchar]] [[to|a]] [[folk tales|cuentos populares]]. [[The village|El pueblo]] [[used to hold|solía celebrar]] [[a|un]] [[harvest festival|festival de la cosecha]] [[every autumn|cada otoño]] [[and|y]] [[she|ella]] [[would wear|llevaba]] [[traditional costumes|trajes tradicionales]]. [[She|Ella]] [[used to believe|solía creer]] [[in|en]] [[superstitions|supersticiones]] [[but|pero]] [[now|ahora]] [[she|ella]] [[preserves|preserva]] [[her|su]] [[cultural heritage|patrimonio cultural]] [[by|mediante]] [[teaching|enseñando]] [[folk music|música folclórica]] [[to|a]] [[young people|los jóvenes]]. [[There used to be|Solía haber]] [[a market|un mercado]] [[in the square|en la plaza]] [[every Saturday|cada sábado]] [[and|y]] [[people|la gente]] [[would travel|solía viajar]] [[by horse and cart|en carro y caballo]].`;

const INSTRUCTIONS = 'Lee el texto sobre cultura. Después responde las preguntas.';

const QUESTIONS = [
  { question: '[[Where|Dónde]] [[did she use to live|solía vivir ella]] [[when she was young|cuando era joven]]?', options: ['[[In a small village in the mountains|En un pueblo pequeño en las montañas]]', '[[In a city|En una ciudad]]', '[[By the sea|Junto al mar]]'], correctAnswer: 0, explanation: '[[The text says|El texto dice]] "[[she used to live in a small village in the mountains|solía vivir en un pueblo pequeño en las montañas]]".' },
  { question: '[[What|Qué]] [[would she do|solía hacer]] [[every Sunday|cada domingo]]?', options: ['[[Visit her grandmother|Visitar a su abuela]]', '[[Go to the market|Ir al mercado]]', '[[Wear traditional costumes|Llevar trajes tradicionales]]'], correctAnswer: 0, explanation: '[[The text says|El texto dice]] "[[she would visit her grandmother every Sunday|solía visitar a su abuela cada domingo]]".' },
  { question: '[[What|Qué]] [[did they use to do|solían hacer]] [[around the fire|alrededor del fuego]]?', options: ['[[Listen to folk tales|Escuchar cuentos populares]]', '[[Sing songs|Cantar canciones]]', '[[Dance|Bailar]]'], correctAnswer: 0, explanation: '[[The text says|El texto dice]] "[[they used to gather around the fire to listen to folk tales|solían reunirse alrededor del fuego para escuchar cuentos populares]]".' },
  { question: '[[What|Qué]] [[festival did the village use to hold|festival solía celebrar el pueblo]]?', options: ['[[A harvest festival every autumn|Un festival de la cosecha cada otoño]]', '[[A music festival|Un festival de música]]', '[[A dance festival|Un festival de danza]]'], correctAnswer: 0, explanation: '[[The text says|El texto dice]] "[[the village used to hold a harvest festival every autumn|el pueblo solía celebrar un festival de la cosecha cada otoño]]".' },
  { question: '[[What|Qué]] [[did she use to believe|solía creer]]?', options: ['[[In superstitions|En supersticiones]]', '[[In folk tales|En cuentos populares]]', '[[In the market|En el mercado]]'], correctAnswer: 0, explanation: '[[The text says|El texto dice]] "[[she used to believe in superstitions|solía creer en supersticiones]]".' },
  { question: '[[How|Cómo]] [[does she preserve her heritage now|preserva su patrimonio ahora]]?', options: ['[[By teaching folk music to young people|Enseñando música folclórica a los jóvenes]]', '[[By visiting her grandmother|Visitando a su abuela]]', '[[By wearing traditional costumes|Llevando trajes tradicionales]]'], correctAnswer: 0, explanation: '[[The text says|El texto dice]] "[[she preserves her cultural heritage by teaching folk music to young people|preserva su patrimonio cultural enseñando música folclórica a los jóvenes]]".' },
  { question: '[[What|Qué]] [[used to be|solía haber]] [[in the square|en la plaza]] [[every Saturday|cada sábado]]?', options: ['[[A market|Un mercado]]', '[[A festival|Un festival]]', '[[A fire|Un fuego]]'], correctAnswer: 0, explanation: '[[The text says|El texto dice]] "[[there used to be a market in the square every Saturday|solía haber un mercado en la plaza cada sábado]]".' },
  { question: '[[What|Cuál]] [[is|es]] [[the main idea|la idea principal]] [[of the text|del texto]]?', options: ['[[A woman\'s childhood in a traditional village and how she preserves heritage|La infancia de una mujer en un pueblo tradicional y cómo preserva el patrimonio]]', '[[Markets are important|Los mercados son importantes]]', '[[Superstitions are true|Las supersticiones son ciertas]]'], correctAnswer: 0, explanation: '[[The text|El texto]] [[describes|describe]] [[her past|su pasado]] [[and|y]] [[present|presente]] [[heritage preservation|preservación del patrimonio]].' },
  { question: '[[Which structure|Qué estructura]] [[is used|se usa]] [[for past states|para estados pasados]]?', options: ['[[Used to|Used to]]', '[[Would|Would]]', '[[Both|Ambas]]'], correctAnswer: 0, explanation: '[[Used to for past states|Used to para estados pasados]] [[(e.g. used to live, used to believe)|(ej. used to live, used to believe)]].' },
  { question: '[[What|Qué]] [[vocabulary|vocabulario]] [[is key|es clave]] [[in this text|en este texto]]?', options: ['[[heritage|patrimonio]], [[folk tales|cuentos populares]], [[traditional costumes|trajes tradicionales]], [[superstitions|supersticiones]], [[folk music|música folclórica]]', '[[sport|deporte]], [[music|música pop]]', '[[weather|tiempo]], [[food|comida]]'], correctAnswer: 0, explanation: '[[The text|El texto]] [[focuses on|se centra en]] [[culture vocabulary|vocabulario de cultura]].' },
  { question: '[[She|Ella]] [[still believes|todavía cree]] [[in superstitions|en supersticiones]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 1, explanation: '[[False|Falso]]. [[She used to believe|Solía creer]] [[but now|pero ahora]] [[she preserves heritage|preserva el patrimonio]].' },
  { question: '[[People|La gente]] ____ [[travel by horse and cart|viajar en carro y caballo]].', options: ['[[would|solía]]', '[[used to|solía]]'], correctAnswer: 0, explanation: '[[Would for past habits|Would para hábitos pasados]].' },
  { question: '[[What|Qué]] [[can we infer|podemos inferir]] [[about her|sobre ella]]?', options: ['[[She values her roots and wants to pass traditions on|Valora sus raíces y quiere transmitir tradiciones]]', '[[She prefers city life|Prefiere la vida en la ciudad]]', '[[She does not like folk music|No le gusta la música folclórica]]'], correctAnswer: 0, explanation: '[[She|Ella]] [[preserves|preserva]] [[heritage|patrimonio]] [[and|y]] [[teaches|enseña]] [[folk music|música folclórica]].' },
];

export const UNIT_36_LESSON_3_READING: Exercise[] = QUESTIONS.map((q, i) => ({
  id: `b2-u36-l3-r${i + 1}`,
  type: 'reading',
  level: 'B2',
  topic: 'Culture (extended)',
  difficulty: 'medium',
  transcript: READING_TRANSCRIPT,
  content: { title: LESSON_TITLE, instructions: INSTRUCTIONS, questions: [q] },
  topicName: 'Reading',
}));
