/**
 * Unidad 12 B1 — Lección 3: Comprensión lectora (Second conditional, hypothetical situations)
 */

import { Exercise } from '@/lib/exercise-generator';

const LESSON_TITLE = '[[Reading|Comprensión lectora]]';
const READING_TRANSCRIPT = `[[Imagine|Imagina]] [[if|si]] [[you|tú]] [[could|pudieras]] [[live|vivir]] [[anywhere|en cualquier lugar]] [[in the world|en el mundo]]. [[Where|Dónde]] [[would|irías]] [[you go|tú]]? [[If|Si]] [[I|yo]] [[had|tuviera]] [[the choice|la elección]], [[I|yo]] [[would choose|elegiría]] [[a small island|una isla pequeña]] [[in the Mediterranean|en el Mediterráneo]]. [[If|Si]] [[money|el dinero]] [[weren\'t|no fuera]] [[a problem|un problema]], [[I|yo]] [[would buy|compraría]] [[a house|una casa]] [[by the sea|junto al mar]]. [[In my ideal world|En mi mundo ideal]], [[everyone|todos]] [[would speak|hablarían]] [[at least two languages|al menos dos idiomas]]. [[What|Qué]] [[would|harías]] [[you do|tú]] [[if|si]] [[you|tú]] [[could|pudieras]] [[change|cambiar]] [[one thing|una cosa]] [[about your life|en tu vida]]?`;

const INSTRUCTIONS = 'Lee el texto de abajo. Después responde las preguntas.';

const QUESTIONS = [
  { question: '[[What|Qué]] [[does the text ask you to imagine|te pide imaginar el texto]]?', options: ['[[living in a city|vivir en una ciudad]]', '[[living anywhere in the world|vivir en cualquier lugar del mundo]]', '[[staying at home|quedarse en casa]]'], correctAnswer: 1, explanation: '[[The text says|El texto dice]] "[[Imagine if you could live anywhere in the world|imagina si pudieras vivir en cualquier lugar del mundo]]".' },
  { question: '[[Where|Dónde]] [[would the person choose to live|elegiría vivir la persona]]?', options: ['[[in the mountains|en las montañas]]', '[[on a small island in the Mediterranean|en una isla pequeña en el Mediterráneo]]', '[[in a big city|en una gran ciudad]]'], correctAnswer: 1, explanation: '[[The text says|El texto dice]] "[[I would choose a small island in the Mediterranean|elegiría una isla pequeña en el Mediterráneo]]".' },
  { question: '[[What|Qué]] [[would the person buy if money weren\'t a problem|compraría la persona si el dinero no fuera un problema]]?', options: ['[[a car|un coche]]', '[[a house by the sea|una casa junto al mar]]', '[[a boat|un barco]]'], correctAnswer: 1, explanation: '[[The text says|El texto dice]] "[[I would buy a house by the sea|compraría una casa junto al mar]]".' },
  { question: '[[In the ideal world|En el mundo ideal]], [[how many languages|cuántos idiomas]] [[would everyone speak|hablaría todo el mundo]]?', options: ['[[one|uno]]', '[[at least two|al menos dos]]', '[[three|tres]]'], correctAnswer: 1, explanation: '[[The text says|El texto dice]] "[[everyone would speak at least two languages|todos hablarían al menos dos idiomas]]".' },
  { question: '[[The text|El texto]] [[uses|usa]] [[second conditional|segundo condicional]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'True', explanation: '[[True|Verdadero]]. [[Examples|Ejemplos]]: [[if I had|si tuviera]], [[would choose|elegiría]], [[would buy|compraría]].' },
  { question: '[[The person|La persona]] [[would live|viviría]] [[in the mountains|en las montañas]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'False', explanation: '[[False|Falso]]. [[They would live|Vivirían]] [[on an island|en una isla]].' },
  { question: '[[What|Cuál]] [[is|es]] [[the main topic|el tema principal]] [[of the text|del texto]]?', options: ['[[Work|Trabajo]]', '[[Hypothetical situations and dreams|Situaciones hipotéticas y sueños]]', '[[Food|Comida]]'], correctAnswer: 1, explanation: '[[The text|El texto]] [[talks about|habla de]] [[imagining ideal situations|imaginar situaciones ideales]].' },
  { question: '[[Which conditional|Qué condicional]] [[structure|estructura]] [[appears|aparece]] [[in the text|en el texto]]?', options: ['[[first conditional|primer condicional]]', '[[second conditional|segundo condicional]]', '[[zero conditional|condicional cero]]'], correctAnswer: 1, explanation: '[[Second conditional|Segundo condicional]]: [[if + past|si + pasado]], [[would + infinitive|would + infinitivo]].' },
  { question: '[[Money|El dinero]] [[is|es]] [[mentioned|mencionado]] [[as|como]] [[a problem|un problema]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'True', explanation: '[[True|Verdadero]]. [[The text says|El texto dice]] "[[if money weren\'t a problem|si el dinero no fuera un problema]]".' },
  { question: '[[The text|El texto]] [[asks|pregunta]] [[the reader|al lector]] [[a question|una pregunta]] [[about changing their life|sobre cambiar su vida]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'True', explanation: '[[True|Verdadero]]. "[[What would you do if you could change one thing about your life|qué harías si pudieras cambiar una cosa en tu vida]]".' },
  { question: '[[The person|La persona]] [[would choose|elegiría]] [[a big city|una gran ciudad]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'False', explanation: '[[False|Falso]]. [[They would choose|Elegirían]] [[a small island|una isla pequeña]].' },
  { question: '[[Which verb|Qué verbo]] [[is used|se usa]] [[for "imaginar"|para "imaginar"]]?', options: ['[[imagine|imaginar]]', '[[think|pensar]]', '[[know|saber]]'], correctAnswer: 0, explanation: '[[Imagine|Imaginar]] [[introduces hypothetical situation|introduce situación hipotética]].' },
  { question: '[[In the ideal world|En el mundo ideal]], [[everyone|todos]] ____ [[would speak|hablarían]] [[two languages|dos idiomas]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'True', explanation: '[[True|Verdadero]]. [[At least two|Al menos dos]].' },
  { question: '[[The text|El texto]] [[is about|trata de]] [[real plans|planes reales]] [[for the future|para el futuro]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'False', explanation: '[[False|Falso]]. [[It\'s about hypothetical situations|trata de situaciones hipotéticas]].' },
  { question: '[[What|Qué]] [[would you need|necesitarías]] [[to buy a house by the sea|para comprar una casa junto al mar]] [[according to the text|según el texto]]?', options: ['[[a job|un trabajo]]', '[[money not being a problem|que el dinero no fuera un problema]]', '[[a loan|un préstamo]]'], correctAnswer: 1, explanation: '[[The text says|El texto dice]] "[[if money weren\'t a problem|si el dinero no fuera un problema]]".' },
];

export const UNIT_12_LESSON_3_READING: Exercise[] = QUESTIONS.map((q, i) => ({
  id: `b1-u12-l3-r${i + 1}`,
  type: 'reading',
  level: 'B1',
  topic: 'Hypothetical',
  difficulty: 'easy',
  transcript: READING_TRANSCRIPT,
  content: { title: LESSON_TITLE, instructions: INSTRUCTIONS, questions: [q] },
  topicName: 'Reading',
}));
