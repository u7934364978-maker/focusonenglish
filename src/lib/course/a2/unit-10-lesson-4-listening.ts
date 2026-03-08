/**
 * Unidad 10 — Lección 4: Comprensión auditiva (Repaso Módulo 1)
 * 15 actividades: 1 transcripción + 15 preguntas
 */

import { Exercise } from '@/lib/exercise-generator';

const LESSON_TITLE = '[[Listening|Comprensión auditiva]]';
const LISTENING_TRANSCRIPT = `[[Hi|Hola]]! [[I|Yo]] [[want|quiero]] [[to|a]] [[tell|contar]] [[you|a ti]] [[about|sobre]] [[my|mi]] [[last|pasado]] [[week|semana]]. [[On|El]] [[Monday|lunes]] [[I|yo]] [[had|tuve]] [[a|una]] [[meeting|reunión]] [[at|a]] [[noon|mediodía]]. [[On|El]] [[Tuesday|martes]] [[I|yo]] [[went|fui]] [[to|a]] [[the|el]] [[cinema|cine]] [[and|y]] [[saw|vi]] [[a|una]] [[film|película]]. [[It|Era]] [[was|la]] [[the|más]] [[most interesting|interesante]] [[film|película]] [[I|yo]] [[have ever|he jamás]] [[seen|visto]]. [[On|El]] [[Wednesday|miércoles]] [[I|yo]] [[walked|caminé]] [[through|a través de]] [[the|el]] [[park|parque]] [[and|y]] [[went|entré]] [[into|en]] [[a|un]] [[cafe|café]]. [[I|yo]] [[speak|hablo]] [[English|inglés]] [[fluently|con fluidez]] [[now|ahora]] [[because|porque]] [[I|yo]] [[practise|practico]] [[every|cada]] [[day|día]]. [[My|Mi]] [[brother|hermano]] [[is|es]] [[taller|más alto]] [[than|que]] [[me|yo]] [[but|pero]] [[I|yo]] [[am|soy]] [[the fastest|el más rápido]] [[runner|corredor]] [[in|en]] [[the|la]] [[family|familia]]!`;

const INSTRUCTIONS = 'Escucha el audio de abajo. Puedes leer la transcripción después de escuchar. Después responde las preguntas.';

const QUESTIONS = [
  {
    question: '[[When|Cuándo]] [[did|tuvo]] [[he|él]] [[have|tener]] [[a|una]] [[meeting|reunión]]?',
    options: ['[[on|el]] [[Monday|lunes]] [[at|a]] [[noon|mediodía]]', '[[on|el]] [[Tuesday|martes]]', '[[on|el]] [[Wednesday|miércoles]]', '[[at|a]] [[midnight|medianoche]]'],
    correctAnswer: 0,
    explanation: '[[He|Él]] [[says|dice]] "[[On Monday I had a meeting at noon|El lunes tuve una reunión a mediodía]]".',
  },
  {
    question: '[[What|Qué]] [[did|hizo]] [[he|él]] [[do|hacer]] [[on|el]] [[Tuesday|martes]]?',
    options: ['[[He|Él]] [[went|fue]] [[to|a]] [[the|el]] [[cinema|cine]] [[and|y]] [[saw|vió]] [[a|una]] [[film|película]]', '[[He|Él]] [[had|tuvo]] [[a|una]] [[meeting|reunión]]', '[[He|Él]] [[walked|caminó]] [[through|a través de]] [[the|el]] [[park|parque]]', '[[He|Él]] [[went|fue]] [[home|casa]]'],
    correctAnswer: 0,
    explanation: '[[He|Él]] [[says|dice]] "[[On Tuesday I went to the cinema and saw a film|El martes fui al cine y vi una película]]".',
  },
  {
    question: '[[What|Qué]] [[did|dijo]] [[he|él]] [[say|decir]] [[about|sobre]] [[the|la]] [[film|película]]?',
    options: ['[[It|Era]] [[was|mala]]', '[[It|Era]] [[was|la]] [[the|más]] [[most interesting|interesante]] [[film|película]] [[he|él]] [[has ever|ha jamás]] [[seen|visto]]', '[[He|Él]] [[didn\'t|no]] [[like|le gustó]] [[it|ella]]', '[[It|Era]] [[was|aburrida]]'],
    correctAnswer: 1,
    explanation: '[[He|Él]] [[says|dice]] "[[It was the most interesting film I have ever seen|Era la película más interesante que he visto jamás]]".',
  },
  {
    question: '[[What|Qué]] [[did|hizo]] [[he|él]] [[do|hacer]] [[on|el]] [[Wednesday|miércoles]]?',
    options: ['[[He|Él]] [[went|fue]] [[to|a]] [[the|el]] [[cinema|cine]]', '[[He|Él]] [[walked|caminó]] [[through|a través de]] [[the|el]] [[park|parque]] [[and|y]] [[went|entró]] [[into|en]] [[a|un]] [[cafe|café]]', '[[He|Él]] [[had|tuvo]] [[a|una]] [[meeting|reunión]]', '[[He|Él]] [[stayed|se quedó]] [[at|en]] [[home|casa]]'],
    correctAnswer: 1,
    explanation: '[[He|Él]] [[says|dice]] "[[On Wednesday I walked through the park and went into a cafe|El miércoles caminé a través del parque y entré en un café]]".',
  },
  {
    question: '[[How|Cómo]] [[does|habla]] [[he|él]] [[speak|hablar]] [[English|inglés]]?',
    options: ['[[slowly|lenamente]]', '[[fluently|con fluidez]]', '[[badly|mal]]', '[[quietly|tranquilamente]]'],
    correctAnswer: 1,
    explanation: '[[He|Él]] [[says|dice]] "[[I speak English fluently now|Ahora hablo inglés con fluidez]]".',
  },
  {
    question: '[[Who|Quién]] [[is|es]] [[taller|más alto]]?',
    options: ['[[he|él]]', '[[his|su]] [[brother|hermano]]', '[[his|su]] [[sister|hermana]]', '[[his|su]] [[father|padre]]'],
    correctAnswer: 1,
    explanation: '[[He|Él]] [[says|dice]] "[[My brother is taller than me|Mi hermano es más alto que yo]]".',
  },
  {
    question: '[[Who|Quién]] [[is|es]] [[the fastest|el más rápido]] [[runner|corredor]] [[in|en]] [[the|la]] [[family|familia]]?',
    options: ['[[his|su]] [[brother|hermano]]', '[[he|él]]', '[[his|su]] [[sister|hermana]]', '[[his|su]] [[father|padre]]'],
    correctAnswer: 1,
    explanation: '[[He|Él]] [[says|dice]] "[[I am the fastest runner in the family|Soy el corredor más rápido de la familia]]".',
  },
  {
    question: '[[He|Él]] [[had|tuvo]] [[a|una]] [[meeting|reunión]] [[on|el]] [[Tuesday|martes]].',
    options: ['[[True|Verdadero]]', '[[False|Falso]]'],
    correctAnswer: 'False',
    explanation: '[[False|Falso]]. [[He|Él]] [[had|tuvo]] [[a|una]] [[meeting|reunión]] [[on|el]] [[Monday|lunes]]. [[On|El]] [[Tuesday|martes]] [[he|él]] [[went|fue]] [[to|a]] [[the|el]] [[cinema|cine]].',
  },
  {
    question: '[[He|Él]] [[walked|caminó]] [[through|a través de]] [[the|el]] [[park|parque]] [[on|el]] [[Wednesday|miércoles]].',
    options: ['[[True|Verdadero]]', '[[False|Falso]]'],
    correctAnswer: 'True',
    explanation: '[[True|Verdadero]]. [[He|Él]] [[says|dice]] "[[On Wednesday I walked through the park|El miércoles caminé a través del parque]]".',
  },
  {
    question: '[[He|Él]] [[speaks|habla]] [[English|inglés]] [[badly|mal]].',
    options: ['[[True|Verdadero]]', '[[False|Falso]]'],
    correctAnswer: 'False',
    explanation: '[[False|Falso]]. [[He|Él]] [[speaks|habla]] [[English|inglés]] [[fluently|con fluidez]].',
  },
  {
    question: '[[What|Cuál]] [[is|es]] [[the|el]] [[main|principal]] [[topic|tema]] [[of|del]] [[this|este]] [[audio|audio]]?',
    options: ['[[A|Un]] [[meeting|reunión]]', '[[A|Una]] [[review|revisión]] [[of|de]] [[last week|la semana pasada]] [[with|con]] [[mixed|contenido]] [[content|mezclado]] [[from|de]] [[units 1-9|unidades 1-9]]', '[[A|Una]] [[film|película]]', '[[A|Un]] [[park|parque]]'],
    correctAnswer: 1,
    explanation: '[[The|El]] [[audio|audio]] [[reviews|revisa]] [[content|contenido]] [[from|de]] [[units 1-9|unidades 1-9]]: [[prepositions|preposiciones]], [[past simple|pasado simple]], [[superlatives|superlativos]], [[comparatives|comparativos]], [[adverbs|adverbios]].',
  },
  {
    question: '[[Which|Cuál]] [[preposition|preposición]] [[does|usa]] [[the|el]] [[speaker|hablante]] [[use|usar]] [[for|para]] [[Monday|lunes]]?',
    options: ['[[at|a]]', '[[on|en]]', '[[in|en]]', '[[to|a]]'],
    correctAnswer: 1,
    explanation: '[[On|En]] = [[days|días]]. [[On Monday|El lunes]].',
  },
  {
    question: '[[Which|Cuál]] [[preposition|preposición]] [[does|usa]] [[the|el]] [[speaker|hablante]] [[use|usar]] [[for|para]] [[noon|mediodía]]?',
    options: ['[[on|en]]', '[[at|a]]', '[[in|en]]', '[[to|a]]'],
    correctAnswer: 1,
    explanation: '[[At|A]] = [[noon|mediodía]], [[midnight|medianoche]]. [[At noon|A mediodía]].',
  },
  {
    question: '[[Which|Cuál]] [[irregular|irregular]] [[verb|verbo]] [[does|usa]] [[the|el]] [[speaker|hablante]] [[use|usar]]?',
    options: ['[[walked|caminó]]', '[[went|fue]]', '[[visited|visitó]]', '[[played|jugó]]'],
    correctAnswer: 1,
    explanation: '[[He|Él]] [[uses|usa]] [[went|fui]] ([[go|ir]]), [[saw|vió]] ([[see|ver]]). [[Irregular verbs|Verbos irregulares]].',
  },
  {
    question: '[[Which|Cuál]] [[superlative|superlativo]] [[does|usa]] [[the|el]] [[speaker|hablante]] [[use|usar]]?',
    options: ['[[the tallest|el más alto]]', '[[the most interesting|el más interesante]]', '[[the fastest|el más rápido]]', '[[both|ambos]] [[the most interesting|el más interesante]] [[and|y]] [[the fastest|el más rápido]]'],
    correctAnswer: 3,
    explanation: '[[He|Él]] [[uses|usa]] "[[the most interesting|el más interesante]]" [[and|y]] "[[the fastest|el más rápido]]".',
  },
];

export const UNIT_10_LESSON_4_LISTENING: Exercise[] = QUESTIONS.map((q, i) => ({
  id: `a2-u10-l4-l${i + 1}`,
  type: 'listening',
  level: 'A2',
  topic: 'Module 1 Review',
  difficulty: 'easy',
  transcript: LISTENING_TRANSCRIPT,
  content: {
    title: LESSON_TITLE,
    instructions: INSTRUCTIONS,
    questions: [q],
  },
  topicName: 'Listening',
}));
