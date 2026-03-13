/**
 * Unidad 33 B2 — Lección 3: Comprensión lectora (Feelings extended)
 * 13 preguntas (B2: texto sobre sentimientos y regret/remember/forget)
 */

import { Exercise } from '@/lib/exercise-generator';

const LESSON_TITLE = '[[Reading|Comprensión lectora]]';
const READING_TRANSCRIPT = `[[I|Yo]] [[regret|lamento]] [[not apologising|no haber disculpado]] [[sooner|antes]] [[to my friend|a mi amigo]] — [[I remember|recuerdo]] [[hurting|haber herido]] [[her feelings|sus sentimientos]] [[when|cuando]] [[I was stressed|estaba estresado]]. [[She|Ella]] [[was|estaba]] [[devastated|devastada]] [[and|y]] [[I|yo]] [[forgot|olvidé]] [[to call|llamar]] [[her|a ella]] [[for weeks|durante semanas]]. [[I\'ll never forget|Nunca olvidaré]] [[meeting|conocer]] [[her|a ella]] [[for the first time|por primera vez]] — [[she was|era]] [[overjoyed|radiante]] [[and|y]] [[so grateful|tan agradecida]]. [[I remember|Recuerdo]] [[feeling|sentirme]] [[anxious|ansioso]] [[before|antes de]] [[the conversation|la conversación]] [[but|pero]] [[I|yo]] [[remembered|recordé]] [[to express|expresar]] [[my regret|mi arrepentimiento]] [[and|y]] [[she|ella]] [[felt|se sintió]] [[relieved|aliviada]]. [[We|Nosotros]] [[both|ambos]] [[felt|sentimos]] [[a sense of|un sentido de]] [[relief|alivio]] [[after|después de]] [[reconnecting|reconectar]].`;

const INSTRUCTIONS = 'Lee el texto sobre sentimientos. Después responde las preguntas.';

const QUESTIONS = [
  { question: '[[What|Qué]] [[does the person regret|lamenta la persona]]?', options: ['[[Not apologising sooner to their friend|No haber disculpado antes a su amigo]]', '[[Calling their friend|Llamar a su amigo]]', '[[Meeting their friend|Conocer a su amigo]]'], correctAnswer: 0, explanation: '[[The text says|El texto dice]] "[[I regret not apologising sooner to my friend|lamento no haber disculpado antes a mi amigo]]".' },
  { question: '[[What|Qué]] [[does the person remember|recuerda la persona]]?', options: ['[[Hurting her feelings when stressed|Haber herido sus sentimientos cuando estaba estresado]]', '[[Feeling happy|Sentirse feliz]]', '[[Forgetting to call|Olvidar llamar]]'], correctAnswer: 0, explanation: '[[The text says|El texto dice]] "[[I remember hurting her feelings when I was stressed|recuerdo haber herido sus sentimientos cuando estaba estresado]]".' },
  { question: '[[What|Qué]] [[did the person forget to do|olvidó hacer la persona]]?', options: ['[[To call her for weeks|Llamarla durante semanas]]', '[[To apologise|Disculparse]]', '[[To meet her|Conocerla]]'], correctAnswer: 0, explanation: '[[The text says|El texto dice]] "[[I forgot to call her for weeks|olvidé llamarla durante semanas]]".' },
  { question: '[[What|Qué]] [[will the person never forget|nunca olvidará la persona]]?', options: ['[[Meeting her for the first time|Conocerla por primera vez]]', '[[Hurting her|Herirla]]', '[[The argument|La discusión]]'], correctAnswer: 0, explanation: '[[The text says|El texto dice]] "[[I\'ll never forget meeting her for the first time|nunca olvidaré conocerla por primera vez]]".' },
  { question: '[[How|Cómo]] [[did she feel when they first met|se sintió ella cuando se conocieron]]?', options: ['[[Overjoyed and grateful|Radiante y agradecida]]', '[[Devastated|Devastada]]', '[[Anxious|Ansiosa]]'], correctAnswer: 0, explanation: '[[The text says|El texto dice]] "[[she was overjoyed and so grateful|era radiante y tan agradecida]]".' },
  { question: '[[What|Qué]] [[did the person remember to do|recordó hacer la persona]]?', options: ['[[To express their regret|Expresar su arrepentimiento]]', '[[To forget|Olvidar]]', '[[To hurt her|Herirla]]'], correctAnswer: 0, explanation: '[[The text says|El texto dice]] "[[I remembered to express my regret|recordé expresar mi arrepentimiento]]".' },
  { question: '[[How|Cómo]] [[did she feel after the conversation|se sintió ella después de la conversación]]?', options: ['[[Relieved|Aliviada]]', '[[Devastated|Devastada]]', '[[Anxious|Ansiosa]]'], correctAnswer: 0, explanation: '[[The text says|El texto dice]] "[[she felt relieved|se sintió aliviada]]".' },
  { question: '[[What|Cuál]] [[is|es]] [[the main idea|la idea principal]] [[of the text|del texto]]?', options: ['[[Regret, apology and reconnection in a friendship|Arrepentimiento, disculpa y reconexión en una amistad]]', '[[Forgetting is good|Olvidar es bueno]]', '[[Stress causes no problems|El estrés no causa problemas]]'], correctAnswer: 0, explanation: '[[The text|El texto]] [[describes|describe]] [[regret|arrepentimiento]], [[apology|disculpa]] [[and|y]] [[reconnection|reconexión]].' },
  { question: '[[Which structure|Qué estructura]] [[regret + gerund|regret + gerundio]] [[expresses|expresa]]?', options: ['[[Past regret|Arrepentimiento pasado]]', '[[Future action|Acción futura]]', '[[Good news|Buenas noticias]]'], correctAnswer: 0, explanation: '[[Regret + gerund = past|Regret + gerundio = pasado]].' },
  { question: '[[What|Qué]] [[vocabulary|vocabulario]] [[is key|es clave]] [[in this text|en este texto]]?', options: ['[[regret|arrepentimiento]], [[devastated|devastado]], [[overjoyed|radiante]], [[relieved|aliviado]], [[anxious|ansioso]]', '[[sport|deporte]], [[music|música]]', '[[food|comida]], [[weather|tiempo]]'], correctAnswer: 0, explanation: '[[The text|El texto]] [[focuses on|se centra en]] [[feelings vocabulary|vocabulario de sentimientos]].' },
  { question: '[[The person|La persona]] [[never apologised|nunca se disculpó]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 1, explanation: '[[False|Falso]]. [[They remembered to express their regret|Recordó expresar su arrepentimiento]].' },
  { question: '[[Forget + infinitive|Forget + infinitivo]] [[means|significa]] ____.', options: ['[[Didn\'t do something|No hice algo]]', '[[Did something but don\'t recall|Hice algo pero no recuerdo]]', '[[Will do something|Haré algo]]'], correctAnswer: 0, explanation: '[[Forget + infinitive = didn\'t do|Forget + infinitivo = no hice]].' },
  { question: '[[What|Qué]] [[can we infer|podemos inferir]] [[about the friendship|sobre la amistad]]?', options: ['[[It was repaired through apology and reconnection|Fue reparada mediante disculpa y reconexión]]', '[[It ended|Terminó]]', '[[They never spoke again|Nunca volvieron a hablar]]'], correctAnswer: 0, explanation: '[[They felt|Sintieron]] [[relief|alivio]] [[after|después de]] [[reconnecting|reconectar]].' },
];

export const UNIT_33_LESSON_3_READING: Exercise[] = QUESTIONS.map((q, i) => ({
  id: `b2-u33-l3-r${i + 1}`,
  type: 'reading',
  level: 'B2',
  topic: 'Feelings (extended)',
  difficulty: 'medium',
  transcript: READING_TRANSCRIPT,
  content: { title: LESSON_TITLE, instructions: INSTRUCTIONS, questions: [q] },
  topicName: 'Reading',
}));
