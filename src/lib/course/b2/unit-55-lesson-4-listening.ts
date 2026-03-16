/**
 * Unidad 55 B2 — Lección 4: Comprensión auditiva (Cultural Heritage & Identity)
 * 13 preguntas (B2: transcripción sobre patrimonio cultural, cláusulas de participio)
 */

import { Exercise } from '@/lib/exercise-generator';

const LESSON_TITLE = '[[Listening|Comprensión auditiva]]';
const LISTENING_TRANSCRIPT = `[[Hi|Hola]], [[I\'m|soy]] [[Maria|Maria]] [[and|y]] [[I|yo]] [[work|trabajo]] [[at a heritage museum|en un museo de patrimonio]]. [[Walking through the old quarter|Caminando por el barrio antiguo]], [[tourists discover hidden gems|los turistas descubren joyas ocultas]]. [[Honouring their roots|Honrando sus raíces]], [[the diaspora keeps traditions alive|la diáspora mantiene vivas las tradiciones]]. [[Built in 1920|Construido en 1920]], [[the theatre has been restored|el teatro ha sido restaurado]]. [[Observing the ceremony|Observando la ceremonia]], [[we learned about local customs|aprendimos sobre costumbres locales]]. [[Shaped by modern influences|Moldeada por influencias modernas]], [[the culture is evolving|la cultura está evolucionando]]. [[Forgotten for decades|Olvidado durante décadas]], [[the tradition was revived|la tradición fue revivida]].`;

const INSTRUCTIONS = 'Escucha el audio (o lee la transcripción). Después responde las preguntas.';

const QUESTIONS = [
  { question: '[[Who is speaking|Quién habla]]?', options: ['[[Maria, who works at a heritage museum|Maria, que trabaja en un museo de patrimonio]]', '[[A tourist|Una turista]]', '[[A teacher|Una profesora]]'], correctAnswer: 0, explanation: '[[The speaker says|El hablante dice]] "[[I\'m Maria and I work at a heritage museum|soy Maria y trabajo en un museo de patrimonio]]".' },
  { question: '[[What|Qué]] [[do tourists discover|descubren los turistas]] [[when walking through the old quarter|al caminar por el barrio antiguo]]?', options: ['[[Hidden gems|Joyas ocultas]]', '[[The museum|El museo]]', '[[Modern buildings|Edificios modernos]]'], correctAnswer: 0, explanation: '[[The speaker says|El hablante dice]] "[[Walking through the old quarter, tourists discover hidden gems]]".' },
  { question: '[[What|Qué]] [[does the diaspora do|hace la diáspora]] [[when honouring their roots|al honrar sus raíces]]?', options: ['[[Keeps traditions alive|Mantiene vivas las tradiciones]]', '[[Forgets the past|Olvida el pasado]]', '[[Builds new theatres|Construye nuevos teatros]]'], correctAnswer: 0, explanation: '[[The speaker says|El hablante dice]] "[[Honouring their roots, the diaspora keeps traditions alive]]".' },
  { question: '[[When|Cuándo]] [[was the theatre built|fue construido el teatro]]?', options: ['[[In 1920|En 1920]]', '[[Last year|El año pasado]]', '[[Recently|Recientemente]]'], correctAnswer: 0, explanation: '[[The speaker says|El hablante dice]] "[[Built in 1920, the theatre has been restored]]".' },
  { question: '[[What|Qué]] [[did we learn|aprendimos]] [[when observing the ceremony|al observar la ceremonia]]?', options: ['[[About local customs|Sobre costumbres locales]]', '[[About the museum|Sobre el museo]]', '[[About tourists|Sobre turistas]]'], correctAnswer: 0, explanation: '[[The speaker says|El hablante dice]] "[[Observing the ceremony, we learned about local customs]]".' },
  { question: '[[What|Qué]] [[is shaping the culture|está moldeando la cultura]]?', options: ['[[Modern influences|Influencias modernas]]', '[[The diaspora|La diáspora]]', '[[The theatre|El teatro]]'], correctAnswer: 0, explanation: '[[The speaker says|El hablante dice]] "[[Shaped by modern influences, the culture is evolving]]".' },
  { question: '[[What|Qué]] [[happened to the tradition|pasó con la tradición]]?', options: ['[[It was forgotten for decades then revived|Fue olvidada durante décadas y luego revivida]]', '[[It was always popular|Siempre fue popular]]', '[[It was destroyed|Fue destruida]]'], correctAnswer: 0, explanation: '[[The speaker says|El hablante dice]] "[[Forgotten for decades, the tradition was revived]]".' },
  { question: '[[What|Cuál]] [[is|es]] [[the main idea|la idea principal]] [[of the listening|de la escucha]]?', options: ['[[Cultural heritage, traditions and participle clauses|Patrimonio cultural, tradiciones y cláusulas de participio]]', '[[Maria works at a museum|Maria trabaja en un museo]]', '[[Tourists are important|Los turistas son importantes]]'], correctAnswer: 0, explanation: '[[The speaker|El hablante]] [[describes heritage using participle clauses|describe patrimonio usando cláusulas de participio]].' },
  { question: '[[Which structure|Qué estructura]] [[is used in "Walking through the old quarter"|se usa en "Walking through the old quarter"]]?', options: ['[[Present participle clause|Cláusula de participio presente]]', '[[Past participle clause|Cláusula de participio pasado]]', '[[Infinitive|Infinitivo]]'], correctAnswer: 0, explanation: '[[Present participle: tourists walk|Participio presente]].' },
  { question: '[[What|Qué]] [[vocabulary|vocabulario]] [[is central|es central]] [[in this listening|en esta escucha]]?', options: ['[[heritage|patrimonio]], [[traditions|tradiciones]], [[diaspora|diáspora]], [[customs|costumbres]]', '[[education|educación]], [[music|música]]', '[[weather|tiempo]], [[food|comida]]'], correctAnswer: 0, explanation: '[[The listening|La escucha]] [[focuses on|se centra en]] [[cultural vocabulary|vocabulario cultural]].' },
  { question: '[[What|Qué]] [[can we infer|podemos inferir]] [[about Maria|sobre Maria]]?', options: ['[[She is passionate about cultural heritage|Le apasiona el patrimonio cultural]]', '[[She dislikes traditions|No le gustan las tradiciones]]', '[[She only cares about tourists|Solo le importan los turistas]]'], correctAnswer: 0, explanation: '[[She|Ella]] [[works at a heritage museum and describes traditions|trabaja en un museo de patrimonio y describe tradiciones]].' },
  { question: '[[____ in 1920|Construido en 1920]], [[the theatre|el teatro]] ____ ____ ____ [[restored|restaurado]].', options: ['[[Built|Construido]] ... [[has been|ha sido]]', '[[Building|Construyendo]] ... [[was|fue]]'], correctAnswer: 0, explanation: '[[Past participle + present perfect passive|Participio pasado + pasiva presente perfecto]].' },
  { question: '[[____ the ceremony|Observando la ceremonia]], [[we|nosotros]] ____ [[about local customs|sobre costumbres locales]].', options: ['[[Observing|Observando]] ... [[learned|aprendimos]]', '[[Observed|Observado]] ... [[learn|aprendemos]]'], correctAnswer: 0, explanation: '[[Present participle + past tense|Participio presente + pasado]].' },
];

export const UNIT_55_LESSON_4_LISTENING: Exercise[] = QUESTIONS.map((q, i) => ({
  id: `b2-u55-l4-l${i + 1}`,
  type: 'listening',
  level: 'B2',
  topic: 'culture-arts',
  difficulty: 'medium',
  transcript: LISTENING_TRANSCRIPT,
  content: { title: LESSON_TITLE, instructions: INSTRUCTIONS, questions: [q] },
  topicName: 'Listening',
}));
