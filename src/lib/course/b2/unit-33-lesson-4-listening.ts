/**
 * Unidad 33 B2 — Lección 4: Comprensión auditiva (Feelings extended)
 * 13 preguntas (B2: transcripción sobre sentimientos y regret/remember/forget)
 */

import { Exercise } from '@/lib/exercise-generator';

const LESSON_TITLE = '[[Listening|Comprensión auditiva]]';
const LISTENING_TRANSCRIPT = `[[Hi|Hola]], [[I'm|soy]] [[Tom|Tom]] [[and|y]] [[I|yo]] [[want|quiero]] [[to share|compartir]] [[something|algo]] [[personal|personal]]. [[I regret|Lamento]] [[to inform|informar]] [[you|que]] [[that|que]] [[I|yo]] [[made|cometí]] [[a mistake|un error]] [[last month|el mes pasado]]. [[I remember|Recuerdo]] [[losing|perder]] [[my temper|los estribos]] [[with|con]] [[a colleague|un compañero]] [[and|y]] [[I|yo]] [[forgot|olvidé]] [[to apologise|disculparme]] [[immediately|inmediatamente]]. [[He|Él]] [[was|estaba]] [[frustrated|frustrado]] [[and|y]] [[I|yo]] [[felt|me sentí]] [[ashamed|avergonzado]]. [[I\'ll never forget|Nunca olvidaré]] [[the look|la mirada]] [[on his face|en su cara]] [[when|cuando]] [[I|yo]] [[finally|finalmente]] [[said sorry|me disculpé]]. [[He|Él]] [[was|estaba]] [[relieved|aliviado]] [[and|y]] [[we|nosotros]] [[both|ambos]] [[felt|sentimos]] [[grateful|agradecidos]] [[for|por]] [[the reconciliation|la reconciliación]]. [[I remember|Recuerdo]] [[to take|tomar]] [[a deep breath|una respiración profunda]] [[now|ahora]] [[before|antes de]] [[difficult conversations|conversaciones difíciles]].`;

const INSTRUCTIONS = 'Escucha el audio (o lee la transcripción). Después responde las preguntas.';

const QUESTIONS = [
  { question: '[[Who is speaking|Quién habla]]?', options: ['[[Tom, sharing something personal|Tom, compartiendo algo personal]]', '[[A colleague|Un compañero]]', '[[A manager|Un director]]'], correctAnswer: 0, explanation: '[[The speaker says|El hablante dice]] "[[I\'m Tom and I want to share something personal|soy Tom y quiero compartir algo personal]]".' },
  { question: '[[What|Qué]] [[does Tom regret to inform|lamenta informar Tom]]?', options: ['[[That he made a mistake last month|Que cometió un error el mes pasado]]', '[[That he got promoted|Que fue ascendido]]', '[[That he left the company|Que dejó la empresa]]'], correctAnswer: 0, explanation: '[[The speaker says|El hablante dice]] "[[I regret to inform you that I made a mistake last month|lamento informar que cometí un error el mes pasado]]".' },
  { question: '[[What|Qué]] [[does Tom remember|recuerda Tom]]?', options: ['[[Losing his temper with a colleague|Perder los estribos con un compañero]]', '[[Winning a prize|Ganar un premio]]', '[[Getting promoted|Ser ascendido]]'], correctAnswer: 0, explanation: '[[The speaker says|El hablante dice]] "[[I remember losing my temper with a colleague|recuerdo perder los estribos con un compañero]]".' },
  { question: '[[What|Qué]] [[did Tom forget to do|olvidó hacer Tom]]?', options: ['[[To apologise immediately|Disculparse inmediatamente]]', '[[To call his colleague|Llamar a su compañero]]', '[[To go to work|Ir a trabajar]]'], correctAnswer: 0, explanation: '[[The speaker says|El hablante dice]] "[[I forgot to apologise immediately|olvidé disculparme inmediatamente]]".' },
  { question: '[[How|Cómo]] [[did the colleague feel|se sintió el compañero]]?', options: ['[[Frustrated|Frustrado]]', '[[Overjoyed|Radiante]]', '[[Relieved|Aliviado]]'], correctAnswer: 0, explanation: '[[The speaker says|El hablante dice]] "[[he was frustrated|estaba frustrado]]".' },
  { question: '[[What|Qué]] [[will Tom never forget|nunca olvidará Tom]]?', options: ['[[The look on his face when he finally said sorry|La mirada en su cara cuando finalmente se disculpó]]', '[[The argument|La discusión]]', '[[The promotion|El ascenso]]'], correctAnswer: 0, explanation: '[[The speaker says|El hablante dice]] "[[I\'ll never forget the look on his face when I finally said sorry|nunca olvidaré la mirada en su cara cuando finalmente me disculpé]]".' },
  { question: '[[How|Cómo]] [[did the colleague feel after the apology|se sintió el compañero después de la disculpa]]?', options: ['[[Relieved|Aliviado]]', '[[Frustrated|Frustrado]]', '[[Ashamed|Avergonzado]]'], correctAnswer: 0, explanation: '[[The speaker says|El hablante dice]] "[[he was relieved|estaba aliviado]]".' },
  { question: '[[What|Cuál]] [[is|es]] [[the main idea|la idea principal]] [[of the listening|de la escucha]]?', options: ['[[A personal story of mistake, regret and reconciliation|Una historia personal de error, arrepentimiento y reconciliación]]', '[[Tom got promoted|Tom fue ascendido]]', '[[Colleagues never argue|Los compañeros nunca discuten]]'], correctAnswer: 0, explanation: '[[The speaker|El hablante]] [[shares|comparte]] [[his story|su historia]] [[of|de]] [[regret|arrepentimiento]] [[and|y]] [[reconciliation|reconciliación]].' },
  { question: '[[Which structure|Qué estructura]] [[regret + infinitive|regret + infinitivo]] [[is used for|se usa para]]?', options: ['[[Formal bad news|Malas noticias formales]]', '[[Past memories|Recuerdos pasados]]', '[[Future plans|Planes futuros]]'], correctAnswer: 0, explanation: '[[Regret + infinitive = formal announcement|Regret + infinitivo = anuncio formal]].' },
  { question: '[[What|Qué]] [[vocabulary|vocabulario]] [[is central|es central]] [[in this listening|en esta escucha]]?', options: ['[[regret|arrepentimiento]], [[ashamed|avergonzado]], [[relieved|aliviado]], [[frustrated|frustrado]], [[grateful|agradecido]]', '[[sport|deporte]], [[music|música]]', '[[food|comida]], [[weather|tiempo]]'], correctAnswer: 0, explanation: '[[The listening|La escucha]] [[focuses on|se centra en]] [[feelings vocabulary|vocabulario de sentimientos]].' },
  { question: '[[What|Qué]] [[can we infer|podemos inferir]] [[about Tom|sobre Tom]]?', options: ['[[He learned from his mistake and now manages his emotions better|Aprendió de su error y ahora maneja mejor sus emociones]]', '[[He never apologised|Nunca se disculpó]]', '[[He left the company|Dejó la empresa]]'], correctAnswer: 0, explanation: '[[He says|Dice]] "[[I remember to take a deep breath now before difficult conversations|recuerdo tomar una respiración profunda ahora antes de conversaciones difíciles]]".' },
  { question: '[[Tom|Tom]] [[remembered|recordó]] ____ [[to take a deep breath|tomar una respiración profunda]] [[before difficult conversations|antes de conversaciones difíciles]].', options: ['[[now|ahora]]', '[[never|nunca]]', '[[yesterday|ayer]]'], correctAnswer: 0, explanation: '[[The speaker says|El hablante dice]] "[[I remember to take a deep breath now before difficult conversations|recuerdo tomar una respiración profunda ahora antes de conversaciones difíciles]]".' },
  { question: '[[Both|Ambos]] ____ [[felt grateful for the reconciliation|sintieron gratitud por la reconciliación]].', options: ['[[Tom and his colleague|Tom y su compañero]]', '[[Tom and his manager|Tom y su director]]', '[[The team|El equipo]]'], correctAnswer: 0, explanation: '[[The speaker says|El hablante dice]] "[[we both felt grateful for the reconciliation|ambos sentimos gratitud por la reconciliación]]".' },
];

export const UNIT_33_LESSON_4_LISTENING: Exercise[] = QUESTIONS.map((q, i) => ({
  id: `b2-u33-l4-l${i + 1}`,
  type: 'listening',
  level: 'B2',
  topic: 'Feelings (extended)',
  difficulty: 'medium',
  transcript: LISTENING_TRANSCRIPT,
  content: { title: LESSON_TITLE, instructions: INSTRUCTIONS, questions: [q] },
  topicName: 'Listening',
}));
