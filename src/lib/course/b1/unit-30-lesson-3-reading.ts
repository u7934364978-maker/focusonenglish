/**
 * Unidad 30 B1 — Lección 3: Comprensión lectora (Repaso 26–29)
 * 15 actividades - Mixed content from units 26-29
 */

import { Exercise } from '@/lib/exercise-generator';

const LESSON_TITLE = '[[Reading|Comprensión lectora]]';
const READING_TRANSCRIPT = `[[Last|El]] [[weekend|fin de semana pasado]] [[I|yo]] [[found|me encontré]] [[myself|a mí mismo]] [[in|en]] [[the|el]] [[centre|centro]] [[of|de]] [[the|la]] [[city|ciudad]]. [[There were|Había]] [[a lot of|muchos]] [[people|gente]] [[and|y]] [[many|muchas]] [[choices|opciones]] [[for|para]] [[lunch|comer]]. [[I|Yo]] [[could|podía]] [[either|o]] [[go|ir]] [[to|a]] [[the|el]] [[Italian|italiano]] [[restaurant|restaurante]] [[or|o]] [[the|la]] [[Japanese|japonesa]] [[place|place]]. [[Both|Ambos]] [[looked|parecían]] [[good|buenos]] [[but|pero]] [[I|yo]] [[had|tenía]] [[only|solo]] [[a little|un poco]] [[time|tiempo]]. [[In|En]] [[the|el]] [[end|final]] [[I|yo]] [[chose|elegí]] [[a|un]] [[small|pequeño]] [[café|café]] [[near|cerca]] [[the|la]] [[library|biblioteca]]. [[I|Yo]] [[enjoyed|disfruté]] [[myself|a mí mismo]] [[and|y]] [[learned|aprendí]] [[that|que]] [[we|nosotros]] [[all|todos]] [[need|necesitamos]] [[to|a]] [[believe|creer]] [[in|en]] [[ourselves|nosotros mismos]] [[when|cuando]] [[making|tomando]] [[decisions|decisiones]].`;

const INSTRUCTIONS = 'Lee el texto de abajo. Después responde las preguntas.';

const QUESTIONS = [
  { question: '[[Where|Dónde]] [[did the person find themselves|se encontró la persona]]?', options: ['[[in the centre of the city|en el centro de la ciudad]]', '[[at home|en casa]]', '[[in a restaurant|en un restaurante]]'], correctAnswer: 0, explanation: '[[The text says|El texto dice]] "[[I found myself in the centre of the city|me encontré en el centro de la ciudad]]".' },
  { question: '[[What|Qué]] [[were there a lot of|había muchos]]?', options: ['[[restaurants|restaurantes]]', '[[people|gente]]', '[[libraries|bibliotecas]]'], correctAnswer: 1, explanation: '[[The text says|El texto dice]] "[[There were a lot of people|había muchos gente]]".' },
  { question: '[[What|Qué]] [[two options|dos opciones]] [[could they choose|podía elegir]]?', options: ['[[Italian or Japanese restaurant|restaurante italiano o japonés]]', '[[café or library|café o biblioteca]]', '[[both|ambos]]'], correctAnswer: 0, explanation: '[[The text says|El texto dice]] "[[either go to the Italian restaurant or the Japanese place|o ir al restaurante italiano o al lugar japonés]]".' },
  { question: '[[Why|Por qué]] [[did they have to decide quickly|tuvo que decidir rápido]]?', options: ['[[they had only a little time|solo tenía un poco de tiempo]]', '[[both were expensive|ambos eran caros]]', '[[they were not hungry|no tenía hambre]]'], correctAnswer: 0, explanation: '[[The text says|El texto dice]] "[[I had only a little time|solo tenía un poco de tiempo]]".' },
  { question: '[[What|Qué]] [[did they choose|eligió]]?', options: ['[[a small café near the library|un pequeño café cerca de la biblioteca]]', '[[the Italian restaurant|el restaurante italiano]]', '[[the Japanese place|el lugar japonés]]'], correctAnswer: 0, explanation: '[[The text says|El texto dice]] "[[I chose a small café near the library|elegí un pequeño café cerca de la biblioteca]]".' },
  { question: '[[What|Qué]] [[did they learn|aprendió]]?', options: ['[[we need to believe in ourselves|necesitamos creer en nosotros mismos]]', '[[Italian food is best|la comida italiana es mejor]]', '[[libraries are useful|las bibliotecas son útiles]]'], correctAnswer: 0, explanation: '[[The text says|El texto dice]] "[[we all need to believe in ourselves when making decisions|todos necesitamos creer en nosotros mismos cuando tomamos decisiones]]".' },
  { question: '[[Which quantifier|Qué cuantificador]] [[is used for "people"|se usa para "gente"]]?', options: ['[[a lot of|muchos]]', '[[much|mucho]]', '[[little|poco]]'], correctAnswer: 0, explanation: '[[A lot of|Muchos]] [[with countable plural|con contable plural]].' },
  { question: '[[Which structure|Qué estructura]] [[is used for the two restaurant options|se usa para las dos opciones de restaurante]]?', options: ['[[either...or|o...o]]', '[[both...and|y...y]]', '[[neither...nor|ni...ni]]'], correctAnswer: 0, explanation: '[[Either A or B|O A o B]] [[for choice|para elección]].' },
  { question: '[[The person|La persona]] [[enjoyed themselves|disfrutó]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'True', explanation: '[[True|Verdadero]]. [[The text says|El texto dice]] "[[I enjoyed myself|disfruté a mí mismo]]".' },
  { question: '[[They|Ellos]] [[chose|eligieron]] [[the Italian restaurant|el restaurante italiano]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'False', explanation: '[[False|Falso]]. [[They chose a small café|Eligieron un pequeño café]].' },
  { question: '[[What|Cuál]] [[is|es]] [[the main topic|el tema principal]] [[of|del]] [[this text|este texto]]?', options: ['[[Food|Comida]]', '[[Making choices and self-belief|Tomar decisiones y creer en uno mismo]]', '[[City life|Vida en la ciudad]]'], correctAnswer: 1, explanation: '[[The text|El texto]] [[combines|combina]] [[choices|elecciones]] [[and|y]] [[self-belief|creer en uno mismo]].' },
  { question: '[[Which reflexive pronoun|Qué pronombre reflexivo]] [[is used|se usa]] [[in "found myself"|en "me encontré"]]?', options: ['[[myself|a mí mismo]]', '[[yourself|a ti mismo]]', '[[themselves|a sí mismos]]'], correctAnswer: 0, explanation: '[[Found myself|Me encontré a mí mismo]] - [[myself|a mí mismo]].' },
  { question: '[[Which article|Qué artículo]] [[is used|se usa]] [[for "library"|para "biblioteca"]]?', options: ['[[the|la]]', '[[a|una]]', '[[an|una]]'], correctAnswer: 0, explanation: '[[The|La]] [[for specific known place|para lugar específico conocido]].' },
  { question: '[[They had|Tenían]] [[much time|mucho tiempo]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'False', explanation: '[[False|Falso]]. [[They had only a little time|Solo tenían un poco de tiempo]].' },
  { question: '[[Both|Ambos]] [[restaurants|restaurantes]] [[looked good|parecían buenos]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'True', explanation: '[[True|Verdadero]]. [[The text says|El texto dice]] "[[Both looked good|ambos parecían buenos]]".' },
];

export const UNIT_30_LESSON_3_READING: Exercise[] = QUESTIONS.map((q, i) => ({
  id: `b1-u30-l3-r${i + 1}`,
  type: 'reading',
  level: 'B1',
  topic: 'Review 26-29',
  difficulty: 'easy',
  transcript: READING_TRANSCRIPT,
  content: { title: LESSON_TITLE, instructions: INSTRUCTIONS, questions: [q] },
  topicName: 'Reading',
}));
