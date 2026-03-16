/**
 * Unidad 57 B2 — Lección 4: Comprensión auditiva (Media Literacy & Critical Thinking)
 * 13 preguntas (B2: transcripción sobre alfabetización mediática, palabras compuestas)
 */

import { Exercise } from '@/lib/exercise-generator';

const LESSON_TITLE = '[[Listening|Comprensión auditiva]]';
const LISTENING_TRANSCRIPT = `[[Hi|Hola]], [[I\'m|soy]] [[Laura|Laura]] [[and|y]] [[I|yo]] [[teach|enseño]] [[media literacy|alfabetización mediática]]. [[Critical thinking|El pensamiento crítico]] [[is essential|es esencial]] [[when consuming news|al consumir noticias]]. [[Misinformation|La desinformación]] [[and|y]] [[disinformation|desinformación intencional]] [[are different|son diferentes]]. [[Fact-checking|La verificación de hechos]] [[before sharing|antes de compartir]] [[prevents the spread|previene la difusión]] [[of fake news|de noticias falsas]]. [[Media bias|El sesgo mediático]] [[exists in many outlets|existe en muchos medios]]. [[News sources|Las fuentes de noticias]] [[that are evidence-based|que están basadas en evidencia]] [[are reliable|son fiables]]. [[Breaking news|Las noticias de última hora]] [[often needs verification|a menudo necesita verificación]].`;

const INSTRUCTIONS = 'Escucha el audio (o lee la transcripción). Después responde las preguntas.';

const QUESTIONS = [
  { question: '[[Who is speaking|Quién habla]]?', options: ['[[Laura, who teaches media literacy|Laura, que enseña alfabetización mediática]]', '[[A journalist|Una periodista]]', '[[A politician|Una política]]'], correctAnswer: 0, explanation: '[[The speaker says|El hablante dice]] "[[I\'m Laura and I teach media literacy|soy Laura y enseño alfabetización mediática]]".' },
  { question: '[[What|Qué]] [[is essential when consuming news|es esencial al consumir noticias]]?', options: ['[[Critical thinking|El pensamiento crítico]]', '[[Fake news|Las noticias falsas]]', '[[Media bias|El sesgo mediático]]'], correctAnswer: 0, explanation: '[[The speaker says|El hablante dice]] "[[Critical thinking is essential when consuming news]]".' },
  { question: '[[What|Qué]] [[is the difference between misinformation and disinformation|es la diferencia entre desinformación y desinformación intencional]]?', options: ['[[They are different (disinformation is intentional)|Son diferentes (la desinformación intencional es deliberada)]]', '[[They are the same|Son iguales]]', '[[Only misinformation exists|Solo existe la desinformación]]'], correctAnswer: 0, explanation: '[[The speaker says|El hablante dice]] "[[Misinformation and disinformation are different]]".' },
  { question: '[[What|Qué]] [[does fact-checking before sharing prevent|previene la verificación antes de compartir]]?', options: ['[[The spread of fake news|La difusión de noticias falsas]]', '[[Critical thinking|El pensamiento crítico]]', '[[Media literacy|La alfabetización mediática]]'], correctAnswer: 0, explanation: '[[The speaker says|El hablante dice]] "[[Fact-checking before sharing prevents the spread of fake news]]".' },
  { question: '[[Where|Dónde]] [[does media bias exist|existe el sesgo mediático]]?', options: ['[[In many outlets|En muchos medios]]', '[[Nowhere|En ningún sitio]]', '[[Only online|Solo online]]'], correctAnswer: 0, explanation: '[[The speaker says|El hablante dice]] "[[Media bias exists in many outlets]]".' },
  { question: '[[What|Qué]] [[news sources are reliable|fuentes de noticias son fiables]]?', options: ['[[Those that are evidence-based|Las que están basadas en evidencia]]', '[[Those that spread fake news|Las que difunden noticias falsas]]', '[[All sources|Todas las fuentes]]'], correctAnswer: 0, explanation: '[[The speaker says|El hablante dice]] "[[News sources that are evidence-based are reliable]]".' },
  { question: '[[What|Qué]] [[often needs verification|a menudo necesita verificación]]?', options: ['[[Breaking news|Las noticias de última hora]]', '[[Fact-checking|La verificación de hechos]]', '[[Media literacy|La alfabetización mediática]]'], correctAnswer: 0, explanation: '[[The speaker says|El hablante dice]] "[[Breaking news often needs verification]]".' },
  { question: '[[What|Cuál]] [[is|es]] [[the main idea|la idea principal]] [[of the listening|de la escucha]]?', options: ['[[Media literacy, critical thinking, verification and compound words|Alfabetización mediática, pensamiento crítico, verificación y palabras compuestas]]', '[[Laura teaches|Laura enseña]]', '[[Fake news is good|Las noticias falsas son buenas]]'], correctAnswer: 0, explanation: '[[The speaker|El hablante]] [[describes media literacy using compound words|describe alfabetización mediática usando palabras compuestas]].' },
  { question: '[[Which compound|Qué palabra compuesta]] [[means "news that just happened"|significa "noticias que acaban de ocurrir"]]?', options: ['[[Breaking news|Noticias de última hora]]', '[[Fake news|Noticias falsas]]', '[[News source|Fuente de noticias]]'], correctAnswer: 0, explanation: '[[Breaking + news|Breaking + news]].' },
  { question: '[[What|Qué]] [[vocabulary|vocabulario]] [[is central|es central]] [[in this listening|en esta escucha]]?', options: ['[[media literacy|alfabetización mediática]], [[critical thinking|pensamiento crítico]], [[fact-checking|verificación]], [[evidence-based|basado en evidencia]]', '[[education|educación]], [[music|música]]', '[[weather|tiempo]], [[food|comida]]'], correctAnswer: 0, explanation: '[[The listening|La escucha]] [[focuses on|se centra en]] [[media vocabulary|vocabulario mediático]].' },
  { question: '[[What|Qué]] [[can we infer|podemos inferir]] [[about Laura|sobre Laura]]?', options: ['[[She promotes media literacy and verification|Promueve alfabetización mediática y verificación]]', '[[She spreads fake news|Difunde noticias falsas]]', '[[She ignores sources|Ignora las fuentes]]'], correctAnswer: 0, explanation: '[[She|Ella]] [[teaches media literacy and emphasises fact-checking|enseña alfabetización mediática y enfatiza la verificación]].' },
  { question: '[[Fact-checking|La verificación de hechos]] ____ ____ ____ ____ [[fake news|noticias falsas]].', options: ['[[prevents the spread of|previene la difusión de]]', '[[causes|provoca]]'], correctAnswer: 0, explanation: '[[The speaker says|El hablante dice]] "[[Fact-checking prevents the spread of fake news]]".' },
  { question: '[[Breaking news|Las noticias de última hora]] ____ ____ ____ [[verification|verificación]].', options: ['[[often needs|a menudo necesita]]', '[[never needs|nunca necesita]]'], correctAnswer: 0, explanation: '[[The speaker says|El hablante dice]] "[[Breaking news often needs verification]]".' },
];

export const UNIT_57_LESSON_4_LISTENING: Exercise[] = QUESTIONS.map((q, i) => ({
  id: `b2-u57-l4-l${i + 1}`,
  type: 'listening',
  level: 'B2',
  topic: 'media-communication',
  difficulty: 'medium',
  transcript: LISTENING_TRANSCRIPT,
  content: { title: LESSON_TITLE, instructions: INSTRUCTIONS, questions: [q] },
  topicName: 'Listening',
}));
