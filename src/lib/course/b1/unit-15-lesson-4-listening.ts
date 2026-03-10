/**
 * Unidad 15 B1 — Lección 4: Comprensión auditiva (Repaso 11–14, conditionals)
 */

import { Exercise } from '@/lib/exercise-generator';

const LESSON_TITLE = '[[Listening|Comprensión auditiva]]';
const LISTENING_TRANSCRIPT = `[[If|Si]] [[you|tú]] [[book|reservas]] [[your tickets|tus entradas]] [[online|en línea]] [[today|hoy]], [[you|tú]] [[will get|conseguirás]] [[a discount|un descuento]]. [[When|Cuando]] [[the show|el espectáculo]] [[starts|empiece]], [[we|nosotros]] [[will find|encontraremos]] [[our seats|nuestros asientos]]. [[If|Si]] [[I|yo]] [[had known|hubiera sabido]] [[about the sale|sobre la rebaja]], [[I|yo]] [[would have bought|habría comprado]] [[more tickets|más entradas]]. [[I|Yo]] [[wish|desearía]] [[I|yo]] [[had taken|hubiera tomado]] [[that opportunity|esa oportunidad]] [[when|cuando]] [[it|ella]] [[was|estaba]] [[available|disponible]]. [[If|Si]] [[it|ello]] [[rains|llueve]] [[tomorrow|mañana]], [[we|nosotros]] [[will stay|nos quedaremos]] [[indoors|dentro]] [[and|y]] [[watch|veremos]] [[a film|una película]].`;

const INSTRUCTIONS = 'Escucha el audio. Puedes leer la transcripción. Después responde las preguntas.';

const QUESTIONS = [
  { question: '[[What|Qué]] [[will you get|conseguirás]] [[if you book tickets online today|si reservas las entradas en línea hoy]]?', options: ['[[free tickets|entradas gratis]]', '[[a discount|un descuento]]', '[[front row seats|asientos en primera fila]]'], correctAnswer: 1, explanation: '[[The speaker says|El hablante dice]] "[[you will get a discount|conseguirás un descuento]]".' },
  { question: '[[When|Cuándo]] [[will they find their seats|encontrarán sus asientos]]?', options: ['[[before the show|antes del espectáculo]]', '[[when the show starts|cuando empiece el espectáculo]]', '[[after the show|después del espectáculo]]'], correctAnswer: 1, explanation: '[[The speaker says|El hablante dice]] "[[When the show starts we will find our seats|cuando empiece el espectáculo encontraremos nuestros asientos]]".' },
  { question: '[[What|Qué]] [[would the person have done|habría hecho la persona]] [[if they had known about the sale|si hubiera sabido sobre la rebaja]]?', options: ['[[not bought anything|no habría comprado nada]]', '[[bought more tickets|habría comprado más entradas]]', '[[waited for a better price|habría esperado un mejor precio]]'], correctAnswer: 1, explanation: '[[The speaker says|El hablante dice]] "[[I would have bought more tickets|habría comprado más entradas]]".' },
  { question: '[[What|Qué]] [[does the person wish|qué desea la persona]]?', options: ['[[they had taken that opportunity when it was available|haber tomado esa oportunidad cuando estaba disponible]]', '[[they had more money|haber tenido más dinero]]', '[[they had stayed home|haberse quedado en casa]]'], correctAnswer: 0, explanation: '[[The speaker says|El hablante dice]] "[[I wish I had taken that opportunity when it was available|desearía haber tomado esa oportunidad cuando estaba disponible]]".' },
  { question: '[[What|Qué]] [[will they do|harán]] [[if it rains tomorrow|si llueve mañana]]?', options: ['[[go to the park|ir al parque]]', '[[stay indoors and watch a film|quedarse dentro y ver una película]]', '[[have a barbecue|tener una barbacoa]]'], correctAnswer: 1, explanation: '[[The speaker says|El hablante dice]] "[[we will stay indoors and watch a film|nos quedaremos dentro y veremos una película]]".' },
  { question: '[[The listening|La escucha]] [[uses|usa]] [[first conditional|primer condicional]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'True', explanation: '[[True|Verdadero]]. [[Examples|Ejemplos]]: [[if you book|si reservas]], [[if it rains|si llueve]].' },
  { question: '[[The listening|La escucha]] [[uses|usa]] [[third conditional|tercer condicional]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'True', explanation: '[[True|Verdadero]]. [[Example|Ejemplo]]: [[if I had known|si hubiera sabido]], [[would have bought|habría comprado]].' },
  { question: '[[What|Qué]] [[type of clause|tipo de cláusula]] [[is "when the show starts"|es "when the show starts"]]?', options: ['[[future time clause|cláusula de tiempo futuro]]', '[[conditional clause|cláusula condicional]]', '[[relative clause|cláusula de relativo]]'], correctAnswer: 0, explanation: '[[Future time clause|Cláusula de tiempo futuro]]: [[when + present|when + presente]].' },
  { question: '[[The person|La persona]] [[took|tomó]] [[the opportunity|la oportunidad]] [[when it was available|cuando estaba disponible]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'False', explanation: '[[False|Falso]]. [[They wish they had taken it|desearían haberla tomado]].' },
  { question: '[[The main topic|El tema principal]] [[is|es]] [[conditionals and plans|condicionales y planes]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'True', explanation: '[[True|Verdadero]]. [[Tickets|Entradas]], [[shows|espectáculos]], [[weather|tiempo]], [[regrets|arrepentimientos]].' },
  { question: '[[The discount|El descuento]] [[is for|es para]] ____.', options: ['[[booking in person|reservar en persona]]', '[[booking online|reservar en línea]]', '[[buying at the venue|comprar en el lugar]]'], correctAnswer: 1, explanation: '[[The speaker says|El hablante dice]] "[[if you book your tickets online today|si reservas tus entradas en línea hoy]]".' },
  { question: '[[I wish I had taken|Ojalá hubiera tomado]] [[expresses|expresa]] ____.', options: ['[[a future plan|un plan futuro]]', '[[a past regret|un arrepentimiento pasado]]', '[[a real possibility|una posibilidad real]]'], correctAnswer: 1, explanation: '[[Past regret|Arrepentimiento pasado]] [[about missed opportunity|sobre oportunidad perdida]].' },
  { question: '[[They|Ellos]] [[will go|irán]] [[to the park|al parque]] [[if it rains|si llueve]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'False', explanation: '[[False|Falso]]. [[They will stay indoors|se quedarán dentro]] [[if it rains|si llueve]].' },
  { question: '[[How many|Cuántos]] [[conditionals|condicionales]] [[are mentioned|se mencionan]] [[in the listening|en la escucha]]?', options: ['[[one|uno]]', '[[two|dos]]', '[[three|tres]]'], correctAnswer: 2, explanation: '[[First|Primero]] [[and|y]] [[third|tercero]] [[conditionals|condicionales]].' },
  { question: '[[The text|El texto]] [[also|también]] [[uses|usa]] [[I wish + past perfect|I wish + pasado perfecto]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'True', explanation: '[[True|Verdadero]]. [[I wish I had taken|Ojalá hubiera tomado]] [[expresses regret|expresa arrepentimiento]].' },
];

export const UNIT_15_LESSON_4_LISTENING: Exercise[] = QUESTIONS.map((q, i) => ({
  id: `b1-u15-l4-l${i + 1}`,
  type: 'listening',
  level: 'B1',
  topic: 'Review 11-14',
  difficulty: 'easy',
  transcript: LISTENING_TRANSCRIPT,
  content: { title: LESSON_TITLE, instructions: INSTRUCTIONS, questions: [q] },
  topicName: 'Listening',
}));
