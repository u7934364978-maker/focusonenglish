/**
 * Unidad 1 B2 — Lección 3: Comprensión lectora (Personal development)
 * 18 actividades (B2: más vocabulario y complejidad que B1)
 */

import { Exercise } from '@/lib/exercise-generator';

const LESSON_TITLE = '[[Reading|Comprensión lectora]]';
const READING_TRANSCRIPT = `[[I|Yo]] [[have|he]] [[been|estado]] [[working|trabajando]] [[on|en]] [[my|mi]] [[personal development|desarrollo personal]] [[for|desde hace]] [[several|varios]] [[years|años]]. [[At|Al]] [[first|principio]] [[I|yo]] [[was|era]] [[afraid|tenía miedo]] [[of|de]] [[stepping|salir]] [[out of|de]] [[my|mi]] [[comfort zone|zona de confort]], [[but|pero]] [[I|yo]] [[have|he]] [[learned|aprendido]] [[that|que]] [[facing|enfrentar]] [[challenges|retos]] [[is|es]] [[the only way|la única forma]] [[to|de]] [[grow|crecer]]. [[I|Yo]] [[set|establecí]] [[myself|me]] [[clear|claros]] [[goals|objetivos]] [[and|y]] [[I|yo]] [[work|trabajo]] [[on|en]] [[them|ellos]] [[every|cada]] [[day|día]]. [[Having|Habiendo]] [[overcome|superado]] [[many|muchos]] [[obstacles|obstáculos]], [[I|yo]] [[now|ahora]] [[feel|me siento]] [[much|mucho]] [[more|más]] [[confident|seguro]] [[and|y]] [[resilient|resiliente]]. [[I|Yo]] [[wish|ojalá]] [[I|yo]] [[had started|hubiera empezado]] [[earlier|antes]], [[but|pero]] [[it|es]] [[is never|nunca es]] [[too late|demasiado tarde]] [[to|para]] [[improve|mejorar]].`;

const INSTRUCTIONS = 'Lee el texto. Después responde las preguntas.';

const QUESTIONS = [
  { question: '[[What|Qué]] [[has the person been working on|ha estado trabajando la persona]]?', options: ['[[Career|Carrera]]', '[[Personal development|Desarrollo personal]]', '[[Health|Salud]]'], correctAnswer: 1, explanation: '[[The text says|El texto dice]] "[[I have been working on my personal development|he estado trabajando en mi desarrollo personal]]".' },
  { question: '[[How|Cómo]] [[did the person feel at first|se sintió la persona al principio]]?', options: ['[[Confident|Seguro]]', '[[Afraid of stepping out of comfort zone|Con miedo a salir de la zona de confort]]', '[[Relaxed|Relajado]]'], correctAnswer: 1, explanation: '[[The text says|El texto dice]] "[[I was afraid of stepping out of my comfort zone|tenía miedo de salir de mi zona de confort]]".' },
  { question: '[[What|Qué]] [[has the person learned|ha aprendido la persona]]?', options: ['[[That|Que]] [[avoiding challenges is best|evitar retos es mejor]]', '[[That|Que]] [[facing challenges is the only way to grow|enfrentar retos es la única forma de crecer]]', '[[That|Que]] [[goals are useless|las metas son inútiles]]'], correctAnswer: 1, explanation: '[[The text says|El texto dice]] "[[facing challenges is the only way to grow|enfrentar retos es la única forma de crecer]]".' },
  { question: '[[What|Qué]] [[does the person do every day|hace la persona cada día]]?', options: ['[[Nothing|Nada]]', '[[Works on clear goals|Trabaja en metas claras]]', '[[Avoids challenges|Evita retos]]'], correctAnswer: 1, explanation: '[[The text says|El texto dice]] "[[I work on them every day|trabajo en ellas cada día]]".' },
  { question: '[[How|Cómo]] [[does the person feel now|se siente la persona ahora]]?', options: ['[[Less confident|Menos seguro]]', '[[More confident and resilient|Más seguro y resiliente]]', '[[The same|Igual]]'], correctAnswer: 1, explanation: '[[The text says|El texto dice]] "[[I now feel much more confident and resilient|ahora me siento mucho más seguro y resiliente]]".' },
  { question: '[[What|Qué]] [[does the person wish|de qué se arrepiente la persona]]?', options: ['[[Having started|Haber empezado]]', '[[Having started earlier|Haber empezado antes]]', '[[Not having started|No haber empezado]]'], correctAnswer: 1, explanation: '[[The text says|El texto dice]] "[[I wish I had started earlier|ojalá hubiera empezado antes]]".' },
  { question: '[[The person|La persona]] [[set|estableció]] [[clear goals|metas claras]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'True', explanation: '[[True|Verdadero]]. [[The text says|El texto dice]] "[[I set myself clear goals|me establecí metas claras]]".' },
  { question: '[[The person|La persona]] [[has overcome|ha superado]] [[many obstacles|muchos obstáculos]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'True', explanation: '[[True|Verdadero]]. [[The text says|El texto dice]] "[[Having overcome many obstacles|habiendo superado muchos obstáculos]]".' },
  { question: '[[The person|La persona]] [[thinks|cree]] [[it is too late|que es demasiado tarde]] [[to improve|para mejorar]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'False', explanation: '[[False|Falso]]. [[The text says|El texto dice]] "[[it is never too late to improve|nunca es demasiado tarde para mejorar]]".' },
  { question: '[[What|Cuál]] [[is|es]] [[the main topic|el tema principal]] [[of|del]] [[this text|este texto]]?', options: ['[[A|Un]] [[trip|viaje]]', '[[Personal growth|Crecimiento personal]] [[through|a través de]] [[challenges|retos]]', '[[Work|Trabajo]] [[life|vida]]'], correctAnswer: 1, explanation: '[[The text|El texto]] [[describes|describe]] [[personal development|desarrollo personal]] [[and|y]] [[overcoming|superar]] [[challenges|retos]].' },
  { question: '[[What|Qué]] [[detail|detalle]] [[supports|apoya]] [[the idea|la idea]] [[that|que]] [[facing challenges|enfrentar retos]] [[helps|ayuda]] [[growth|crecer]]?', options: ['[[The person learned|La persona aprendió]] [[that facing challenges is the only way to grow|que enfrentar retos es la única forma de crecer]]', '[[The person avoided challenges|La persona evitó retos]]', '[[The person had no goals|La persona no tenía metas]]'], correctAnswer: 0, explanation: '[[The text says|El texto dice]] "[[facing challenges is the only way to grow|enfrentar retos es la única forma de crecer]]".' },
  { question: '[[The text|El texto]] [[implies|implica]] [[that|que]] [[it is never too late|nunca es demasiado tarde]] [[to improve|para mejorar]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'True', explanation: '[[True|Verdadero]]. [[The text says|El texto dice]] "[[it is never too late to improve|nunca es demasiado tarde para mejorar]]".' },
  { question: '[[What|Qué]] [[vocabulary|vocabulario]] [[is key|es clave]] [[in|en]] [[this text|este texto]]?', options: ['[[Comfort zone|Zona de confort]], [[goals|metas]], [[resilient|resiliente]]', '[[Travel|Viaje]], [[hotel|hotel]]', '[[Food|Comida]], [[restaurant|restaurante]]'], correctAnswer: 0, explanation: '[[The text|El texto]] [[uses|usa]] [[vocabulary|vocabulario]] [[related to|relacionado con]] [[personal development|desarrollo personal]].' },
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
