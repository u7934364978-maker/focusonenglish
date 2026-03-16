/**
 * Unidad 55 B2 — Lección 3: Comprensión lectora (Cultural Heritage & Identity)
 * 13 preguntas (B2: texto sobre patrimonio cultural, cláusulas de participio)
 */

import { Exercise } from '@/lib/exercise-generator';

const LESSON_TITLE = '[[Reading|Comprensión lectora]]';
const READING_TRANSCRIPT = `[[Seeing the monument|Viendo el monumento]], [[we felt proud|nos sentimos orgullosos]] [[of our heritage|de nuestro patrimonio]]. [[Influenced by centuries of tradition|Influenciada por siglos de tradición]], [[the festival|el festival]] [[continues to thrive|sigue prosperando]]. [[Exhibited in the local museum|Exhibido en el museo local]], [[the artwork|la obra]] [[attracts many visitors|atrae a muchos visitantes]]. [[Recognising the importance of preservation|Reconociendo la importancia de la preservación]], [[the community|la comunidad]] [[acted quickly|actuó rápidamente]]. [[Passed down from generation to generation|Transmitida de generación en generación]], [[the custom|la costumbre]] [[remains strong|sigue fuerte]]. [[Recognised by UNESCO|Reconocido por la UNESCO]], [[the site|el sitio]] [[is protected|está protegido]].`;

const INSTRUCTIONS = 'Lee el texto sobre patrimonio cultural. Después responde las preguntas.';

const QUESTIONS = [
  { question: '[[What|Qué]] [[did we feel|sentimos]] [[when seeing the monument|al ver el monumento]]?', options: ['[[Proud of our heritage|Orgullosos de nuestro patrimonio]]', '[[Sad|Tristes]]', '[[Angry|Enfadados]]'], correctAnswer: 0, explanation: '[[The text says|El texto dice]] "[[Seeing the monument, we felt proud of our heritage]]".' },
  { question: '[[What|Qué]] [[influences the festival|influye en el festival]]?', options: ['[[Centuries of tradition|Siglos de tradición]]', '[[Modern art|Arte moderno]]', '[[Tourists|Turistas]]'], correctAnswer: 0, explanation: '[[The text says|El texto dice]] "[[Influenced by centuries of tradition, the festival continues to thrive]]".' },
  { question: '[[Where|Dónde]] [[is the artwork exhibited|está exhibida la obra]]?', options: ['[[In the local museum|En el museo local]]', '[[In the street|En la calle]]', '[[At home|En casa]]'], correctAnswer: 0, explanation: '[[The text says|El texto dice]] "[[Exhibited in the local museum, the artwork attracts many visitors]]".' },
  { question: '[[What|Qué]] [[did the community recognise|reconoció la comunidad]]?', options: ['[[The importance of preservation|La importancia de la preservación]]', '[[The monument|El monumento]]', '[[The festival|El festival]]'], correctAnswer: 0, explanation: '[[The text says|El texto dice]] "[[Recognising the importance of preservation, the community acted quickly]]".' },
  { question: '[[How|Cómo]] [[is the custom passed|se transmite la costumbre]]?', options: ['[[From generation to generation|De generación en generación]]', '[[Through the museum|A través del museo]]', '[[By tourists|Por turistas]]'], correctAnswer: 0, explanation: '[[The text says|El texto dice]] "[[Passed down from generation to generation, the custom remains strong]]".' },
  { question: '[[Who|Quién]] [[recognises the site|reconoce el sitio]]?', options: ['[[UNESCO|La UNESCO]]', '[[The community|La comunidad]]', '[[Tourists|Los turistas]]'], correctAnswer: 0, explanation: '[[The text says|El texto dice]] "[[Recognised by UNESCO, the site is protected]]".' },
  { question: '[[What|Cuál]] [[is|es]] [[the main idea|la idea principal]] [[of the text|del texto]]?', options: ['[[Cultural heritage, preservation and participle clauses|Patrimonio cultural, preservación y cláusulas de participio]]', '[[Museums are important|Los museos son importantes]]', '[[Tourists love monuments|A los turistas les encantan los monumentos]]'], correctAnswer: 0, explanation: '[[The text|El texto]] [[covers heritage using participle clauses|cubre patrimonio usando cláusulas de participio]].' },
  { question: '[[Which structure|Qué estructura]] [[is used for "Seeing the monument"|se usa para "Seeing the monument"]]?', options: ['[[Present participle clause|Cláusula de participio presente]]', '[[Past participle clause|Cláusula de participio pasado]]', '[[Infinitive|Infinitivo]]'], correctAnswer: 0, explanation: '[[Present participle for active meaning|Participio presente para significado activo]].' },
  { question: '[[Which structure|Qué estructura]] [[is used for "Influenced by centuries"|se usa para "Influenced by centuries"]]?', options: ['[[Past participle clause|Cláusula de participio pasado]]', '[[Present participle clause|Cláusula de participio presente]]', '[[Infinitive|Infinitivo]]'], correctAnswer: 0, explanation: '[[Past participle for passive meaning|Participio pasado para significado pasivo]].' },
  { question: '[[What|Qué]] [[vocabulary|vocabulario]] [[is key|es clave]] [[in this text|en este texto]]?', options: ['[[heritage|patrimonio]], [[preservation|preservación]], [[tradition|tradición]], [[custom|costumbre]]', '[[education|educación]], [[music|música]]', '[[weather|tiempo]], [[food|comida]]'], correctAnswer: 0, explanation: '[[The text|El texto]] [[focuses on|se centra en]] [[cultural vocabulary|vocabulario cultural]].' },
  { question: '[[The site|El sitio]] ____ ____ ____ [[by UNESCO|por la UNESCO]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 0, explanation: '[[True|Verdadero]]. [[The text says "Recognised by UNESCO, the site is protected"|El texto dice que el sitio está reconocido por la UNESCO]].' },
  { question: '[[____ the monument|Viendo el monumento]], [[we|nosotros]] ____ ____ [[proud|orgullosos]].', options: ['[[Seeing|Viendo]] ... [[felt|nos sentimos]]', '[[Seen|Visto]] ... [[feel|sentimos]]'], correctAnswer: 0, explanation: '[[Present participle + past tense|Participio presente + pasado]].' },
  { question: '[[What|Qué]] [[can we infer|podemos inferir]] [[about cultural heritage|sobre el patrimonio cultural]]?', options: ['[[It requires preservation, tradition and recognition|Requiere preservación, tradición y reconocimiento]]', '[[It is not important|No es importante]]', '[[Tourists destroy it|Los turistas lo destruyen]]'], correctAnswer: 0, explanation: '[[The text|El texto]] [[emphasises preservation and tradition|enfatiza preservación y tradición]].' },
];

export const UNIT_55_LESSON_3_READING: Exercise[] = QUESTIONS.map((q, i) => ({
  id: `b2-u55-l3-r${i + 1}`,
  type: 'reading',
  level: 'B2',
  topic: 'culture-arts',
  difficulty: 'medium',
  transcript: READING_TRANSCRIPT,
  content: { title: LESSON_TITLE, instructions: INSTRUCTIONS, questions: [q] },
  topicName: 'Reading',
}));
