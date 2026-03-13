/**
 * Unidad 1 B2 — Lección 3: Comprensión lectora (Personal development)
 * 13 preguntas con texto y casos distintos
 */

import { Exercise } from '@/lib/exercise-generator';

const LESSON_TITLE = '[[Reading|Comprensión lectora]]';
const READING_TRANSCRIPT = `[[When|Cuando]] [[I|yo]] [[was|era]] [[younger|más joven]], [[I|yo]] [[never|nunca]] [[dared|me atrevía]] [[to|a]] [[try|intentar]] [[new things|cosas nuevas]]. [[I|yo]] [[stayed|me quedaba]] [[in|en]] [[my|mi]] [[comfort zone|zona de confort]] [[and|y]] [[avoided|evitaba]] [[any|cualquier]] [[risk|riesgo]]. [[One day|Un día]] [[I|yo]] [[decided|decidí]] [[to|a]] [[change|cambiar]]: [[I|yo]] [[set|establecí]] [[myself|me]] [[three|tres]] [[goals|objetivos]] [[for|para]] [[the year|el año]] [[and|y]] [[I|yo]] [[started|empecé]] [[working|trabajando]] [[on|en]] [[them|ellos]]. [[I|yo]] [[regret|me arrepiento de]] [[not having|no haber]] [[started|empezado]] [[earlier|antes]]. [[Now|Ahora]] [[I|yo]] [[feel|me siento]] [[much|mucho]] [[more|más]] [[confident|seguro]] [[and|y]] [[I|yo]] [[know|sé]] [[that|que]] [[facing|enfrentar]] [[fears|miedos]] [[is|es]] [[the best|la mejor]] [[way|forma]] [[to|de]] [[grow|crecer]]. [[It|es]] [[is never|nunca es]] [[too late|demasiado tarde]] [[to|para]] [[begin|empezar]].`;

const INSTRUCTIONS = 'Lee el texto. Después responde las preguntas.';

const QUESTIONS = [
  { question: '[[What|Qué]] [[did the person avoid when younger|evitaba la persona cuando era joven]]?', options: ['[[Trying new things|Intentar cosas nuevas]]', '[[Staying|Quedarse]] [[in comfort zone|en la zona de confort]]', '[[Taking risks|Asumir riesgos]]'], correctAnswer: 0, explanation: '[[The text says|El texto dice]] "[[I never dared to try new things|nunca me atrevía a intentar cosas nuevas]]".' },
  { question: '[[What|Qué]] [[did the person decide|decidió la persona]]?', options: ['[[To travel|Viajar]]', '[[To change|Cambiar]]', '[[To quit|Dejar]]'], correctAnswer: 1, explanation: '[[The text says|El texto dice]] "[[I decided to change|decidí cambiar]]".' },
  { question: '[[How many|Cuántos]] [[goals|objetivos]] [[did the person set|estableció la persona]]?', options: ['[[One|Uno]]', '[[Two|Dos]]', '[[Three|Tres]]'], correctAnswer: 2, explanation: '[[The text says|El texto dice]] "[[I set myself three goals|me establecí tres objetivos]]".' },
  { question: '[[What|Qué]] [[does the person regret|de qué se arrepiente la persona]]?', options: ['[[Having started|Haber empezado]]', '[[Not having started earlier|No haber empezado antes]]', '[[Not trying|No haber intentado]]'], correctAnswer: 1, explanation: '[[The text says|El texto dice]] "[[I regret not having started earlier|me arrepiento de no haber empezado antes]]".' },
  { question: '[[How|Cómo]] [[does the person feel now|se siente la persona ahora]]?', options: ['[[Less confident|Menos seguro]]', '[[More confident|Más seguro]]', '[[The same|Igual]]'], correctAnswer: 1, explanation: '[[The text says|El texto dice]] "[[I now feel much more confident|ahora me siento mucho más seguro]]".' },
  { question: '[[What|Qué]] [[has the person learned|ha aprendido la persona]]?', options: ['[[That|Que]] [[avoiding fears is best|evitar miedos es mejor]]', '[[That|Que]] [[facing fears is the best way to grow|enfrentar miedos es la mejor forma de crecer]]', '[[That|Que]] [[goals are useless|las metas son inútiles]]'], correctAnswer: 1, explanation: '[[The text says|El texto dice]] "[[facing fears is the best way to grow|enfrentar miedos es la mejor forma de crecer]]".' },
  { question: '[[The person|La persona]] [[set|estableció]] [[three goals|tres metas]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 0, explanation: '[[True|Verdadero]]. [[The text says|El texto dice]] "[[I set myself three goals|me establecí tres objetivos]]".' },
  { question: '[[The person|La persona]] [[thinks|cree]] [[it is too late|que es demasiado tarde]] [[to begin|para empezar]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 1, explanation: '[[False|Falso]]. [[The text says|El texto dice]] "[[it is never too late to begin|nunca es demasiado tarde para empezar]]".' },
  { question: '[[What|Cuál]] [[is|es]] [[the main topic|el tema principal]] [[of|del]] [[this text|este texto]]?', options: ['[[A|Un]] [[holiday|vacaciones]]', '[[Personal growth|Crecimiento personal]] [[through|a través de]] [[change|el cambio]]', '[[Work|Trabajo]] [[skills|habilidades]]'], correctAnswer: 1, explanation: '[[The text|El texto]] [[describes|describe]] [[leaving|salir de]] [[comfort zone|zona de confort]] [[and|y]] [[setting|establecer]] [[goals|metas]].' },
  { question: '[[What|Qué]] [[detail|detalle]] [[supports|apoya]] [[the idea|la idea]] [[that|que]] [[facing fears|enfrentar miedos]] [[helps|ayuda]] [[growth|crecer]]?', options: ['[[The person learned|La persona aprendió]] [[that facing fears is the best way to grow|que enfrentar miedos es la mejor forma de crecer]]', '[[The person avoided risks|La persona evitó riesgos]]', '[[The person had no goals|La persona no tenía metas]]'], correctAnswer: 0, explanation: '[[The text says|El texto dice]] "[[facing fears is the best way to grow|enfrentar miedos es la mejor forma de crecer]]".' },
  { question: '[[The text|El texto]] [[implies|implica]] [[that|que]] [[it is never too late|nunca es demasiado tarde]] [[to begin|para empezar]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 0, explanation: '[[True|Verdadero]]. [[The text says|El texto dice]] "[[it is never too late to begin|nunca es demasiado tarde para empezar]]".' },
  { question: '[[What|Qué]] [[vocabulary|vocabulario]] [[is key|es clave]] [[in|en]] [[this text|este texto]]?', options: ['[[Comfort zone|Zona de confort]], [[goals|metas]], [[regret|arrepentirse]]', '[[Weather|Tiempo]], [[travel|viaje]]', '[[Food|Comida]], [[restaurant|restaurante]]'], correctAnswer: 0, explanation: '[[The text|El texto]] [[uses|usa]] [[vocabulary|vocabulario]] [[related to|relacionado con]] [[personal development|desarrollo personal]].' },
  { question: '[[The person|La persona]] [[used to|solía]] [[stay|quedarse]] [[in|en]] [[their|su]] [[comfort zone|zona de confort]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 0, explanation: '[[True|Verdadero]]. [[The text says|El texto dice]] "[[I stayed in my comfort zone|me quedaba en mi zona de confort]]".' },
];

export const UNIT_1_LESSON_3_READING: Exercise[] = QUESTIONS.map((q, i) => ({
  id: `b2-u1-l3-r${i + 1}`,
  type: 'reading',
  level: 'B2',
  topic: 'Personal development',
  difficulty: 'medium',
  transcript: READING_TRANSCRIPT,
  content: { title: LESSON_TITLE, instructions: INSTRUCTIONS, questions: [q] },
  topicName: 'Reading',
}));
