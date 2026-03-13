/**
 * Unidad 26 B2 — Lección 3: Comprensión lectora (Relationships & Dating)
 * 13 preguntas (B2: texto sobre relaciones y phrasal verbs)
 */

import { Exercise } from '@/lib/exercise-generator';

const LESSON_TITLE = '[[Reading|Comprensión lectora]]';
const READING_TRANSCRIPT = `[[Getting through|Superar]] [[a difficult period|un período difícil]] [[in a relationship|en una relación]] [[requires|requiere]] [[resilience|resiliencia]] [[and|y]] [[support|apoyo]]. [[When|Cuando]] [[Sarah|Sarah]] [[went through|atravesó]] [[a rough patch|un bache difícil]] [[with her partner|con su pareja]], [[she|ella]] [[almost|casi]] [[gave up|se rindió]] [[—|—]] [[the distance|la distancia]] [[was overwhelming|era abrumadora]]. [[However|Sin embargo]], [[she|ella]] [[got over|superó]] [[her fear|su miedo]] [[of commitment|al compromiso]] [[and|y]] [[got through|superó]] [[the long-distance phase|la fase a distancia]] [[successfully|con éxito]]. [[Her partner|Su pareja]] [[got along|se llevaba]] [[well|bien]] [[with|con]] [[her family|su familia]] [[despite|a pesar de]] [[the initial doubts|las dudas iniciales]], [[which|lo cual]] [[helped|ayudó]] [[everyone|a todos]] [[get through|superar]] [[the crisis|la crisis]]. [[Some couples|Algunas parejas]] [[gave up|se rindieron]] [[and|y]] [[broke up|rompieron]], [[but|pero]] [[those|aquellos]] [[who|que]] [[stayed|se quedaron]] [[and|y]] [[went through|revisaron]] [[their options|sus opciones]] [[before|antes de]] [[deciding|decidir]] [[were|fueron]] [[happier|más felices]] [[in the end|al final]]. [[The blind date|La cita a ciegas]] [[went off|salió]] [[well|bien]] [[and|y]] [[they|ellos]] [[got engaged|se comprometieron]].`;

const INSTRUCTIONS = 'Lee el texto sobre relaciones. Después responde las preguntas.';

const QUESTIONS = [
  { question: '[[What|Qué]] [[did Sarah go through|atravesó Sarah]] [[with her partner|con su pareja]]?', options: ['[[A rough patch|Un bache difícil]]', '[[An engagement|Un compromiso]]', '[[A breakup|Una ruptura]]'], correctAnswer: 0, explanation: '[[The text says|El texto dice]] "[[Sarah went through a rough patch with her partner|Sarah atravesó un bache difícil con su pareja]]".' },
  { question: '[[What|Qué]] [[did Sarah almost do|casi hizo Sarah]]?', options: ['[[She almost gave up|Casi se rindió]]', '[[She almost got engaged|Casi se comprometió]]', '[[She almost broke up|Casi rompió]]'], correctAnswer: 0, explanation: '[[The text says|El texto dice]] "[[she almost gave up — the distance was overwhelming|casi se rindió — la distancia era abrumadora]]".' },
  { question: '[[What|Qué]] [[did Sarah get over|superó Sarah]]?', options: ['[[Her fear of commitment|Su miedo al compromiso]]', '[[The distance|La distancia]]', '[[Her partner|Su pareja]]'], correctAnswer: 0, explanation: '[[The text says|El texto dice]] "[[she got over her fear of commitment|superó su miedo al compromiso]]".' },
  { question: '[[How|Cómo]] [[did the partner get along|se llevaba la pareja]] [[with her family|con su familia]]?', options: ['[[They got along well despite the initial doubts|Se llevaba bien a pesar de las dudas iniciales]]', '[[They gave up|Se rindieron]]', '[[They went through a crisis|Atravesaron una crisis]]'], correctAnswer: 0, explanation: '[[The text says|El texto dice]] "[[Her partner got along well with her family despite the initial doubts|su pareja se llevaba bien con su familia a pesar de las dudas iniciales]]".' },
  { question: '[[What|Qué]] [[did some couples do|hicieron algunas parejas]]?', options: ['[[They gave up and broke up|Se rindieron y rompieron]]', '[[They got through the crisis|Superaron la crisis]]', '[[They went through their options|Revisaron sus opciones]]'], correctAnswer: 0, explanation: '[[The text says|El texto dice]] "[[Some couples gave up and broke up|algunas parejas se rindieron y rompieron]]".' },
  { question: '[[What|Qué]] [[happened to those who stayed|pasó con aquellos que se quedaron]]?', options: ['[[They went through their options before deciding and were happier|Revisaron sus opciones antes de decidir y fueron más felices]]', '[[They gave up|Se rindieron]]', '[[They got over the fear|Superaron el miedo]]'], correctAnswer: 0, explanation: '[[The text says|El texto dice]] "[[those who stayed and went through their options before deciding were happier|aquellos que se quedaron y revisaron sus opciones antes de decidir fueron más felices]]".' },
  { question: '[[The blind date|La cita a ciegas]] ____ [[well|bien]].', options: ['[[went off|salió]]', '[[went on|continuó]]', '[[went through|atravesó]]'], correctAnswer: 0, explanation: '[[Go off = happen successfully|Go off = salir bien]].' },
  { question: '[[What|Cuál]] [[is|es]] [[the main idea|la idea principal]] [[of the text|del texto]]?', options: ['[[Resilience and support help overcome relationship challenges|La resiliencia y el apoyo ayudan a superar los desafíos en las relaciones]]', '[[Everyone should give up when things are difficult|Todos deberían rendirse cuando las cosas son difíciles]]', '[[Long-distance always leads to engagement|La distancia siempre lleva al compromiso]]'], correctAnswer: 0, explanation: '[[The text|El texto]] [[shows|muestra]] [[how| cómo]] [[resilience|la resiliencia]] [[helps|ayuda]].' },
  { question: '[[Which phrasal verb|Qué phrasal verb]] [[with "get"|con "get"]] [[means|significa]] [["recover from"|"recuperarse de"]]?', options: ['[[Get over|Get over]]', '[[Get through|Get through]]', '[[Get along|Get along]]'], correctAnswer: 0, explanation: '[[Get over|Get over]] [[= recover from|= recuperarse de]].' },
  { question: '[[What|Qué]] [[can we infer|podemos inferir]] [[about|sobre]] [[Sarah|Sarah]]?', options: ['[[She is resilient and overcame difficulties|Es resiliente y superó las dificultades]]', '[[She gave up|Se rindió]]', '[[She broke up|Rompieron]]'], correctAnswer: 0, explanation: '[[She got over|Superó]] [[her fear|su miedo]] [[and|y]] [[got through|superó]] [[the long-distance phase|la fase a distancia]].' },
  { question: '[[The text|El texto]] [[states|afirma]] [[that|que]] [[all couples stayed together|todas las parejas se quedaron juntas]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 1, explanation: '[[False|Falso]]. [[Some couples gave up and broke up|Algunas parejas se rindieron y rompieron]].' },
  { question: '[[What|Qué]] [[vocabulary|vocabulario]] [[is key|es clave]] [[in this text|en este texto]]?', options: ['[[relationship|relación]], [[commitment|compromiso]], [[distance|distancia]], [[engagement|compromiso]], [[rough patch|bache difícil]]', '[[gallery|galería]], [[harbour|puerto]], [[suburbs|afueras]]', '[[computer|ordenador]], [[software|software]]'], correctAnswer: 0, explanation: '[[The text|El texto]] [[focuses on|se centra en]] [[relationship vocabulary|vocabulario de relaciones]].' },
  { question: '[[Which phrasal verb|Qué phrasal verb]] [[means|significa]] [["experience"|"experimentar"]]?', options: ['[[Go through|Go through]]', '[[Go on|Go on]]', '[[Go off|Go off]]'], correctAnswer: 0, explanation: '[[Go through|Go through]] [[= experience|= experimentar]].' },
];

export const UNIT_26_LESSON_3_READING: Exercise[] = QUESTIONS.map((q, i) => ({
  id: `b2-u26-l3-r${i + 1}`,
  type: 'reading',
  level: 'B2',
  topic: 'Relationships & Dating',
  difficulty: 'medium',
  transcript: READING_TRANSCRIPT,
  content: { title: LESSON_TITLE, instructions: INSTRUCTIONS, questions: [q] },
  topicName: 'Reading',
}));
