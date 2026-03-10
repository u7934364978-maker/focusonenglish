/**
 * Unidad 13 B1 — Lección 4: Comprensión auditiva (First vs second conditional, entertainment)
 */

import { Exercise } from '@/lib/exercise-generator';

const LESSON_TITLE = '[[Listening|Comprensión auditiva]]';
const LISTENING_TRANSCRIPT = `[[If|Si]] [[you|tú]] [[book|reservas]] [[your tickets|tus entradas]] [[online|en línea]] [[today|hoy]], [[you|tú]] [[will get|conseguirás]] [[a twenty percent discount|un veinte por ciento de descuento]]. [[The concert|El concierto]] [[is|es]] [[next Saturday|el próximo sábado]]. [[If|Si]] [[I|yo]] [[were|fuera]] [[a famous singer|un cantante famoso]], [[I|yo]] [[would perform|actuaría]] [[in stadiums|en estadios]] [[around the world|por todo el mundo]]. [[But|Pero]] [[that|eso]] [[is|es]] [[just a dream|solo un sueño]]. [[When|Cuando]] [[the new series|la nueva serie]] [[starts|empiece]], [[we|nosotros]] [[will watch|veremos]] [[it|ella]] [[together|juntos]]. [[If|Si]] [[films|las películas]] [[were|fueran]] [[cheaper|más baratas]], [[I|yo]] [[would go|iría]] [[to the cinema|al cine]] [[more often|más a menudo]].`;

const INSTRUCTIONS = 'Escucha el audio. Puedes leer la transcripción. Después responde las preguntas.';

const QUESTIONS = [
  { question: '[[What|Qué]] [[will you get|conseguirás]] [[if you book tickets online today|si reservas las entradas en línea hoy]]?', options: ['[[free tickets|entradas gratis]]', '[[a twenty percent discount|un veinte por ciento de descuento]]', '[[front row seats|asientos en primera fila]]'], correctAnswer: 1, explanation: '[[The speaker says|El hablante dice]] "[[you will get a twenty percent discount|conseguirás un veinte por ciento de descuento]]".' },
  { question: '[[When|Cuándo]] [[is the concert|es el concierto]]?', options: ['[[next Friday|el próximo viernes]]', '[[next Saturday|el próximo sábado]]', '[[next Sunday|el próximo domingo]]'], correctAnswer: 1, explanation: '[[The speaker says|El hablante dice]] "[[The concert is next Saturday|el concierto es el próximo sábado]]".' },
  { question: '[[What|Qué]] [[would the person do|haría la persona]] [[if they were a famous singer|si fuera un cantante famoso]]?', options: ['[[record albums|grabar álbumes]]', '[[perform in stadiums around the world|actuar en estadios por todo el mundo]]', '[[give free concerts|dar conciertos gratis]]'], correctAnswer: 1, explanation: '[[The speaker says|El hablante dice]] "[[I would perform in stadiums around the world|actuaría en estadios por todo el mundo]]".' },
  { question: '[[The person|La persona]] [[says|dice]] [[that being a famous singer is|que ser una cantante famosa es]] ____.', options: ['[[their reality|su realidad]]', '[[just a dream|solo un sueño]]', '[[their plan|su plan]]'], correctAnswer: 1, explanation: '[[The speaker says|El hablante dice]] "[[that is just a dream|eso es solo un sueño]]".' },
  { question: '[[What|Qué]] [[will they do|harán]] [[when the new series starts|cuando empiece la nueva serie]]?', options: ['[[record it|la grabarán]]', '[[watch it together|la verán juntos]]', '[[discuss it online|la discutirán en línea]]'], correctAnswer: 1, explanation: '[[The speaker says|El hablante dice]] "[[we will watch it together|la veremos juntos]]".' },
  { question: '[[What|Qué]] [[would the person do|haría la persona]] [[if films were cheaper|si las películas fueran más baratas]]?', options: ['[[buy more DVDs|comprar más DVDs]]', '[[go to the cinema more often|ir al cine más a menudo]]', '[[stream more|transmitir más]]'], correctAnswer: 1, explanation: '[[The speaker says|El hablante dice]] "[[I would go to the cinema more often|iría al cine más a menudo]]".' },
  { question: '[[The listening|La escucha]] [[uses|usa]] [[first conditional|primer condicional]] [[for|para]] [[real possibilities|posibilidades reales]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'True', explanation: '[[True|Verdadero]]. [[Example|Ejemplo]]: [[if you book today you will get a discount|si reservas hoy conseguirás un descuento]].' },
  { question: '[[The listening|La escucha]] [[uses|usa]] [[second conditional|segundo condicional]] [[for|para]] [[hypothetical situations|situaciones hipotéticas]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'True', explanation: '[[True|Verdadero]]. [[Example|Ejemplo]]: [[if I were a famous singer|si fuera un cantante famoso]].' },
  { question: '[[The discount|El descuento]] [[is|es]] [[for|para]] [[booking|reservar]] [[in person|en persona]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'False', explanation: '[[False|Falso]]. [[For booking online|Para reservar en línea]].' },
  { question: '[[Which conditional|Qué condicional]] [[describes|describe]] [["if films were cheaper"|"si las películas fueran más baratas"]]?', options: ['[[first|primero]]', '[[second|segundo]]', '[[third|tercero]]'], correctAnswer: 1, explanation: '[[Second conditional|Segundo condicional]] [[for unreal/hypothetical|para irreal/hipotético]].' },
  { question: '[[The main topic|El tema principal]] [[is|es]] [[entertainment and conditionals|entretenimiento y condicionales]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'True', explanation: '[[True|Verdadero]]. [[Concerts|Conciertos]], [[series|series]], [[cinema|cine]].' },
  { question: '[[They|Ellos]] [[will not|no]] [[watch|verán]] [[the new series|la nueva serie]] [[together|juntos]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'False', explanation: '[[False|Falso]]. [[They will watch it together|la verán juntos]].' },
  { question: '[[To get the discount|Para conseguir el descuento]], [[you must book|debes reservar]] ____.', options: ['[[by phone|por teléfono]]', '[[online|en línea]]', '[[at the venue|en el lugar]]'], correctAnswer: 1, explanation: '[[The speaker says|El hablante dice]] "[[if you book your tickets online today|si reservas tus entradas en línea hoy]]".' },
  { question: '[[The person|La persona]] [[goes|va]] [[to the cinema|al cine]] [[very often|muy a menudo]] [[now|ahora]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'False', explanation: '[[False|Falso]]. [[They would go more often if films were cheaper|irían más a menudo si las películas fueran más baratas]].' },
  { question: '[["When the new series starts"|"Cuando empiece la nueva serie"]] [[uses|usa]] ____.', options: ['[[first conditional structure|estructura de primer condicional]]', '[[future time clause|cláusula de tiempo futuro]]', '[[second conditional|segundo condicional]]'], correctAnswer: 1, explanation: '[[Future time clause|Cláusula de tiempo futuro]]: [[when + present|when + presente]], [[will + infinitive|will + infinitivo]].' },
];

export const UNIT_13_LESSON_4_LISTENING: Exercise[] = QUESTIONS.map((q, i) => ({
  id: `b1-u13-l4-l${i + 1}`,
  type: 'listening',
  level: 'B1',
  topic: 'Entertainment',
  difficulty: 'easy',
  transcript: LISTENING_TRANSCRIPT,
  content: { title: LESSON_TITLE, instructions: INSTRUCTIONS, questions: [q] },
  topicName: 'Listening',
}));
