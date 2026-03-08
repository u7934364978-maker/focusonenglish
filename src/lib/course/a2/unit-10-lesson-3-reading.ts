/**
 * Unidad 10 — Lección 3: Comprensión lectora (Repaso Módulo 1)
 * 15 actividades: 1 texto + 15 preguntas
 */

import { Exercise } from '@/lib/exercise-generator';

const LESSON_TITLE = '[[Reading|Comprensión lectora]]';
const READING_TRANSCRIPT = `[[My|Mi]] [[name|nombre]] [[is|es]] [[Anna|Ana]] [[and|y]] [[I|yo]] [[have|tengo]] [[a|una]] [[busy|ocupada]] [[life|vida]]. [[I|Yo]] [[get up|me levanto]] [[at|a]] [[7|7]] [[o\'clock|en punto]] [[in|por]] [[the|la]] [[morning|mañana]] [[on|los]] [[weekdays|días laborables]]. [[Last weekend|El fin de semana pasado]] [[I|yo]] [[went|fui]] [[to|a]] [[the|el]] [[museum|museo]]. [[I|yo]] [[went|entré]] [[into|en]] [[the|el]] [[main|principal]] [[entrance|entrada]] [[and|y]] [[walked|caminé]] [[through|a través de]] [[several|varias]] [[rooms|salas]]. [[My|Mi]] [[sister|hermana]] [[is|es]] [[the tallest|la más alta]] [[in|en]] [[our|nuestra]] [[family|familia]] [[and|y]] [[she|ella]] [[speaks|habla]] [[English|inglés]] [[very|muy]] [[fluently|con fluidez]]. [[She|Ella]] [[saw|vió]] [[a|una]] [[beautiful|hermosa]] [[film|película]] [[last night|anoche]] [[and|y]] [[said|dijo]] [[it|era]] [[was|estaba]] [[the|la]] [[most interesting|más interesante]] [[film|película]] [[she|ella]] [[has ever|ha jamás]] [[seen|visto]]. [[On|El]] [[Saturday|sábado]] [[morning|mañana]] [[I|yo]] [[walked|caminé]] [[across|a través de]] [[the|el]] [[bridge|puente]] [[to|para]] [[get|llegar]] [[to|al]] [[other|otro]] [[side|lado]] [[of|del]] [[the|el]] [[river|río]]. [[I|yo]] [[really|realmente]] [[enjoyed|disfruté]] [[the|el]] [[weekend|fin de semana]]!`;

const INSTRUCTIONS = 'Lee el texto de abajo. Después responde las preguntas.';

const QUESTIONS = [
  {
    question: '[[What|A]] [[time|qué]] [[does|hora]] [[Anna|Ana]] [[get up|se levanta]] [[on|los]] [[weekdays|días laborables]]?',
    options: ['[[at|a]] [[6|6]] [[o\'clock|en punto]]', '[[at|a]] [[7|7]] [[o\'clock|en punto]] [[in|por]] [[the|la]] [[morning|mañana]]', '[[at|a]] [[noon|mediodía]]', '[[in|por]] [[the|la]] [[afternoon|tarde]]'],
    correctAnswer: 1,
    explanation: '[[The|El]] [[text|texto]] [[says|dice]] "[[I get up at 7 o\'clock in the morning on weekdays|Me levanto a las 7 de la mañana los días laborables]]".',
  },
  {
    question: '[[Where|Dónde]] [[did|fue]] [[she|ella]] [[go|ir]] [[last weekend|el fin de semana pasado]]?',
    options: ['[[to|a]] [[the|el]] [[park|parque]]', '[[to|a]] [[the|el]] [[museum|museo]]', '[[to|a]] [[the|la]] [[beach|playa]]', '[[to|a]] [[the|el]] [[cinema|cine]]'],
    correctAnswer: 1,
    explanation: '[[The|El]] [[text|texto]] [[says|dice]] "[[Last weekend I went to the museum|El fin de semana pasado fui al museo]]".',
  },
  {
    question: '[[What|Qué]] [[did|hizo]] [[she|ella]] [[do|hacer]] [[when|cuando]] [[she|ella]] [[arrived|llegó]] [[at|al]] [[the|el]] [[museum|museo]]?',
    options: ['[[She|Ella]] [[went|entró]] [[into|en]] [[the|el]] [[main|principal]] [[entrance|entrada]] [[and|y]] [[walked|caminó]] [[through|a través de]] [[several|varias]] [[rooms|salas]]', '[[She|Ella]] [[went|fue]] [[home|casa]]', '[[She|Ella]] [[had|tomó]] [[coffee|café]]', '[[She|Ella]] [[bought|compró]] [[a|un]] [[ticket|entrada]]'],
    correctAnswer: 0,
    explanation: '[[The|El]] [[text|texto]] [[says|dice]] "[[I went into the main entrance and walked through several rooms|Entré por la entrada principal y caminé a través de varias salas]]".',
  },
  {
    question: '[[Who|Quién]] [[is|es]] [[the tallest|el más alto]] [[in|en]] [[the|la]] [[family|familia]]?',
    options: ['[[Anna|Ana]]', '[[her|su]] [[sister|hermana]]', '[[her|su]] [[brother|hermano]]', '[[her|su]] [[mother|madre]]'],
    correctAnswer: 1,
    explanation: '[[The|El]] [[text|texto]] [[says|dice]] "[[My sister is the tallest in our family|Mi hermana es la más alta de nuestra familia]]".',
  },
  {
    question: '[[How|Cómo]] [[does|habla]] [[her|su]] [[sister|hermana]] [[speak|hablar]] [[English|inglés]]?',
    options: ['[[slowly|lenamente]]', '[[badly|mal]]', '[[very|muy]] [[fluently|con fluidez]]', '[[quietly|tranquilamente]]'],
    correctAnswer: 2,
    explanation: '[[The|El]] [[text|texto]] [[says|dice]] "[[she speaks English very fluently|ella habla inglés con mucha fluidez]]".',
  },
  {
    question: '[[What|Qué]] [[did|hizo]] [[her|su]] [[sister|hermana]] [[do|hacer]] [[last night|anoche]]?',
    options: ['[[She|Ella]] [[went|fue]] [[to|a]] [[the|el]] [[museum|museo]]', '[[She|Ella]] [[saw|vió]] [[a|una]] [[beautiful|hermosa]] [[film|película]]', '[[She|Ella]] [[walked|caminó]] [[across|a través de]] [[the|el]] [[bridge|puente]]', '[[She|Ella]] [[read|leyó]] [[a|un]] [[book|libro]]'],
    correctAnswer: 1,
    explanation: '[[The|El]] [[text|texto]] [[says|dice]] "[[She saw a beautiful film last night|Ella vio una película hermosa anoche]]".',
  },
  {
    question: '[[What|Qué]] [[did|hizo]] [[Anna|Ana]] [[do|hacer]] [[on|el]] [[Saturday|sábado]] [[morning|mañana]]?',
    options: ['[[She|Ella]] [[went|fue]] [[to|a]] [[the|el]] [[museum|museo]]', '[[She|Ella]] [[walked|caminó]] [[across|a través de]] [[the|el]] [[bridge|puente]] [[to|para]] [[get|llegar]] [[to|al]] [[other|otro]] [[side|lado]] [[of|del]] [[the|el]] [[river|río]]', '[[She|Ella]] [[saw|vió]] [[a|una]] [[film|película]]', '[[She|Ella]] [[stayed|se quedó]] [[at|en]] [[home|casa]]'],
    correctAnswer: 1,
    explanation: '[[The|El]] [[text|texto]] [[says|dice]] "[[On Saturday morning I walked across the bridge to get to the other side of the river|El sábado por la mañana caminé a través del puente para llegar al otro lado del río]]".',
  },
  {
    question: '[[She|Ella]] [[gets up|se levanta]] [[at|a]] [[6|6]] [[o\'clock|en punto]].',
    options: ['[[True|Verdadero]]', '[[False|Falso]]'],
    correctAnswer: 'False',
    explanation: '[[False|Falso]]. [[She|Ella]] [[gets up|se levanta]] [[at|a]] [[7|7]] [[o\'clock|en punto]].',
  },
  {
    question: '[[Her|Su]] [[sister|hermana]] [[is|es]] [[the tallest|la más alta]] [[in|en]] [[the|la]] [[family|familia]].',
    options: ['[[True|Verdadero]]', '[[False|Falso]]'],
    correctAnswer: 'True',
    explanation: '[[True|Verdadero]]. [[The|El]] [[text|texto]] [[says|dice]] "[[My sister is the tallest in our family|Mi hermana es la más alta de nuestra familia]]".',
  },
  {
    question: '[[She|Ella]] [[walked|caminó]] [[through|a través de]] [[the|el]] [[bridge|puente]].',
    options: ['[[True|Verdadero]]', '[[False|Falso]]'],
    correctAnswer: 'False',
    explanation: '[[False|Falso]]. [[She|Ella]] [[walked|caminó]] [[across|a través de]] [[the|el]] [[bridge|puente]]. [[Across|A través de]] = [[over|sobre]] [[surface|superficie]].',
  },
  {
    question: '[[What|Cuál]] [[is|es]] [[the|el]] [[main|principal]] [[topic|tema]] [[of|del]] [[this|este]] [[text|texto]]?',
    options: ['[[A|Un]] [[trip|viaje]] [[only|solo]]', '[[Anna|Ana]]\'s [[life|vida]] [[and|y]] [[weekend|fin de semana]] [[with|con]] [[mixed|revisión]] [[content|contenido]] [[from|de]] [[units 1-9|unidades 1-9]]', '[[A|Un]] [[museum|museo]]', '[[A|Una]] [[film|película]]'],
    correctAnswer: 1,
    explanation: '[[The|El]] [[text|texto]] [[mixes|mezcla]] [[content|contenido]] [[from|de]] [[units 1-9|unidades 1-9]]: [[prepositions|preposiciones]], [[past simple|pasado simple]], [[superlatives|superlativos]], [[adverbs|adverbios]] [[etc|etc]].',
  },
  {
    question: '[[Which|Cuál]] [[preposition|preposición]] [[does|usa]] [[the|el]] [[text|texto]] [[use|usar]] [[for|para]] [[7 o\'clock|las 7 en punto]]?',
    options: ['[[on|en]]', '[[at|a]]', '[[in|en]]', '[[to|a]]'],
    correctAnswer: 1,
    explanation: '[[At|A]] = [[specific|específico]] [[time|hora]]. [[At 7 o\'clock|A las 7 en punto]].',
  },
  {
    question: '[[Which|Cuál]] [[irregular|irregular]] [[verb|verbo]] [[does|usa]] [[the|el]] [[text|texto]] [[use|usar]]?',
    options: ['[[walked|caminó]]', '[[went|fue]]', '[[visited|visitó]]', '[[played|jugó]]'],
    correctAnswer: 1,
    explanation: '[[The|El]] [[text|texto]] [[uses|usa]] [[went|fui]] ([[go|ir]]), [[saw|vió]] ([[see|ver]]). [[Irregular verbs|Verbos irregulares]].',
  },
  {
    question: '[[Which|Cuál]] [[superlative|superlativo]] [[does|usa]] [[the|el]] [[text|texto]] [[use|usar]]?',
    options: ['[[the tallest|el más alto]]', '[[the most interesting|el más interesante]]', '[[both|ambos]]', '[[neither|ninguno]]'],
    correctAnswer: 2,
    explanation: '[[The|El]] [[text|texto]] [[uses|usa]] [[both|ambos]]: "[[the tallest|la más alta]]" [[and|y]] "[[the most interesting|la más interesante]]".',
  },
  {
    question: '[[Who|Quién]] [[said|dijo]] [[the|la]] [[film|película]] [[was|era]] [[the most interesting|la más interesante]]?',
    options: ['[[Anna|Ana]]', '[[her|su]] [[sister|hermana]]', '[[her|su]] [[brother|hermano]]', '[[her|su]] [[mother|madre]]'],
    correctAnswer: 1,
    explanation: '[[The|El]] [[text|texto]] [[says|dice]] "[[She saw a beautiful film last night and said it was the most interesting film|Ella vio una película hermosa anoche y dijo que era la película más interesante]]".',
  },
];

export const UNIT_10_LESSON_3_READING: Exercise[] = QUESTIONS.map((q, i) => ({
  id: `a2-u10-l3-r${i + 1}`,
  type: 'reading',
  level: 'A2',
  topic: 'Module 1 Review',
  difficulty: 'easy',
  transcript: READING_TRANSCRIPT,
  content: {
    title: LESSON_TITLE,
    instructions: INSTRUCTIONS,
    questions: [q],
  },
  topicName: 'Reading',
}));
