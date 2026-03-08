/**
 * Unidad 9 — Lección 3: Comprensión lectora (Preposiciones de lugar y movimiento)
 * 15 actividades: 1 texto + 15 preguntas
 */

import { Exercise } from '@/lib/exercise-generator';

const LESSON_TITLE = '[[Reading|Comprensión lectora]]';
const READING_TRANSCRIPT = `[[Yesterday|Ayer]] [[I|yo]] [[had|tuve]] [[an|una]] [[adventure|aventura]] [[in|en]] [[the|el]] [[city|ciudad]]. [[First|Primero]] [[I|yo]] [[went|entré]] [[into|en]] [[a|una]] [[old|vieja]] [[bookshop|librería]] [[to|para]] [[buy|comprar]] [[a|un]] [[book|libro]]. [[Then|Después]] [[I|yo]] [[walked|caminé]] [[through|a través de]] [[the|el]] [[park|parque]] [[to|para]] [[get|llegar]] [[to|al]] [[other|otro]] [[side|lado]]. [[I|yo]] [[saw|vi]] [[many|muchas]] [[people|personas]] [[running|corriendo]] [[across|a través de]] [[the|la]] [[bridge|puente]]. [[When|Cuando]] [[I|yo]] [[came|salí]] [[out of|de]] [[the|el]] [[park|parque]] [[I|yo]] [[crossed|crucé]] [[the|la]] [[street|calle]] [[and|y]] [[went|entré]] [[into|en]] [[a|un]] [[cafe|café]]. [[I|yo]] [[had|tomé]] [[coffee|café]] [[and|y]] [[read|leí]] [[my|mi]] [[new|nuevo]] [[book|libro]]. [[It|Fue]] [[was|una]] [[a|día]] [[great|genial]] [[day|día]]!`;

const INSTRUCTIONS = 'Lee el texto de abajo. Después responde las preguntas.';

const QUESTIONS = [
  {
    question: '[[What|Qué]] [[did|hizo]] [[the|el]] [[person|persona]] [[do|hacer]] [[first|primero]]?',
    options: ['[[went|entró]] [[into|en]] [[a|una]] [[old|vieja]] [[bookshop|librería]] [[to|para]] [[buy|comprar]] [[a|un]] [[book|libro]]', '[[walked|caminó]] [[through|a través de]] [[the|el]] [[park|parque]]', '[[went|entró]] [[into|en]] [[a|un]] [[cafe|café]]', '[[ran|corrió]] [[across|a través de]] [[the|la]] [[bridge|puente]]'],
    correctAnswer: 0,
    explanation: '[[The|El]] [[text|texto]] [[says|dice]] "[[First I went into an old bookshop to buy a book|Primero entré en una librería vieja para comprar un libro]]".',
  },
  {
    question: '[[How|Cómo]] [[did|llegó]] [[he|él]] [[get|llegar]] [[to|al]] [[the|otro]] [[other|otro]] [[side|lado]] [[of|del]] [[the|el]] [[park|parque]]?',
    options: ['[[He|Él]] [[ran|corrió]]', '[[He|Él]] [[walked|caminó]] [[through|a través de]] [[the|el]] [[park|parque]]', '[[He|Él]] [[drove|condujo]]', '[[He|Él]] [[swam|nadó]]'],
    correctAnswer: 1,
    explanation: '[[The|El]] [[text|texto]] [[says|dice]] "[[I walked through the park to get to the other side|Caminé a través del parque para llegar al otro lado]]".',
  },
  {
    question: '[[What|Qué]] [[did|vio]] [[he|él]] [[see|ver]] [[people|personas]] [[doing|haciendo]]?',
    options: ['[[walking|caminando]] [[into|en]] [[the|el]] [[park|parque]]', '[[running|corriendo]] [[across|a través de]] [[the|la]] [[bridge|puente]]', '[[swimming|nadando]] [[across|a través de]] [[the|el]] [[river|río]]', '[[going|entrando]] [[into|en]] [[the|el]] [[cafe|café]]'],
    correctAnswer: 1,
    explanation: '[[The|El]] [[text|texto]] [[says|dice]] "[[I saw many people running across the bridge|Vi a muchas personas corriendo a través del puente]]".',
  },
  {
    question: '[[What|Qué]] [[did|hizo]] [[he|él]] [[do|hacer]] [[when|cuando]] [[he|él]] [[came|salió]] [[out of|de]] [[the|el]] [[park|parque]]?',
    options: ['[[He|Él]] [[went|fue]] [[home|casa]]', '[[He|Él]] [[crossed|cruzó]] [[the|la]] [[street|calle]] [[and|y]] [[went|entró]] [[into|en]] [[a|un]] [[cafe|café]]', '[[He|Él]] [[bought|compró]] [[another|otro]] [[book|libro]]', '[[He|Él]] [[ran|corrió]] [[through|a través de]] [[the|el]] [[park|parque]]'],
    correctAnswer: 1,
    explanation: '[[The|El]] [[text|texto]] [[says|dice]] "[[When I came out of the park I crossed the street and went into a cafe|Cuando salí del parque crucé la calle y entré en un café]]".',
  },
  {
    question: '[[What|Qué]] [[did|hizo]] [[he|él]] [[do|hacer]] [[at|en]] [[the|el]] [[cafe|café]]?',
    options: ['[[He|Él]] [[had|tomó]] [[coffee|café]] [[and|y]] [[read|leyó]] [[his|su]] [[new|nuevo]] [[book|libro]]', '[[He|Él]] [[bought|compró]] [[a|un]] [[book|libro]]', '[[He|Él]] [[met|conoció]] [[friends|amigos]]', '[[He|Él]] [[worked|trabajó]]'],
    correctAnswer: 0,
    explanation: '[[The|El]] [[text|texto]] [[says|dice]] "[[I had coffee and read my new book|Tomé café y leí mi libro nuevo]]".',
  },
  {
    question: '[[Which|Cuál]] [[preposition|preposición]] [[does|usa]] [[the|el]] [[text|texto]] [[use|usar]] [[for|para]] [[entering|entrar]] [[the|la]] [[bookshop|librería]]?',
    options: ['[[out of|fuera de]]', '[[into|dentro de]]', '[[through|a través de]]', '[[across|a través de]]'],
    correctAnswer: 1,
    explanation: '[[The|El]] [[text|texto]] [[says|dice]] "[[I went into an old bookshop|Entré en una librería vieja]]".',
  },
  {
    question: '[[Which|Cuál]] [[preposition|preposición]] [[does|usa]] [[the|el]] [[text|texto]] [[use|usar]] [[for|para]] [[the|el]] [[park|parque]]?',
    options: ['[[into|dentro de]]', '[[through|a través de]]', '[[out of|fuera de]]', '[[across|a través de]]'],
    correctAnswer: 1,
    explanation: '[[The|El]] [[text|texto]] [[says|dice]] "[[I walked through the park|Caminé a través del parque]]".',
  },
  {
    question: '[[He|Él]] [[went|entró]] [[into|en]] [[the|el]] [[bookshop|librería]] [[first|primero]].',
    options: ['[[True|Verdadero]]', '[[False|Falso]]'],
    correctAnswer: 'True',
    explanation: '[[True|Verdadero]]. [[The|El]] [[text|texto]] [[says|dice]] "[[First I went into an old bookshop|Primero entré en una librería vieja]]".',
  },
  {
    question: '[[He|Él]] [[swam|nadó]] [[across|a través de]] [[the|el]] [[river|río]].',
    options: ['[[True|Verdadero]]', '[[False|Falso]]'],
    correctAnswer: 'False',
    explanation: '[[False|Falso]]. [[He|Él]] [[saw|vió]] [[people|personas]] [[running|corriendo]] [[across|a través de]] [[the|el]] [[bridge|puente]], [[not|no]] [[swimming|nadando]].',
  },
  {
    question: '[[He|Él]] [[went|entró]] [[into|en]] [[a|un]] [[cafe|café]] [[after|después]] [[leaving|salir]] [[the|el]] [[park|parque]].',
    options: ['[[True|Verdadero]]', '[[False|Falso]]'],
    correctAnswer: 'True',
    explanation: '[[True|Verdadero]]. [[The|El]] [[text|texto]] [[says|dice]] "[[When I came out of the park... I went into a cafe|Cuando salí del parque... entré en un café]]".',
  },
  {
    question: '[[He|Él]] [[bought|compró]] [[the|el]] [[book|libro]] [[at|en]] [[the|el]] [[cafe|café]].',
    options: ['[[True|Verdadero]]', '[[False|Falso]]'],
    correctAnswer: 'False',
    explanation: '[[False|Falso]]. [[He|Él]] [[bought|compró]] [[the|el]] [[book|libro]] [[at|en]] [[the|la]] [[bookshop|librería]]. [[At|En]] [[the|el]] [[cafe|café]] [[he|él]] [[read|leyó]] [[it|él]].',
  },
  {
    question: '[[What|Cuál]] [[is|es]] [[the|el]] [[main|principal]] [[topic|tema]] [[of|del]] [[this|este]] [[text|texto]]?',
    options: ['[[A|Un]] [[trip|viaje]] [[to|a]] [[the|la]] [[beach|playa]]', '[[A|Un]] [[day|día]] [[in|en]] [[the|el]] [[city|ciudad]] [[with|con]] [[prepositions of movement|preposiciones de movimiento]]', '[[A|Una]] [[bookshop|librería]]', '[[A|Un]] [[cafe|café]]'],
    correctAnswer: 1,
    explanation: '[[The|El]] [[text|texto]] [[describes|describe]] [[a|un]] [[day|día]] [[using|usando]] [[prepositions of movement|preposiciones de movimiento]]: [[into|en]], [[through|a través de]], [[across|a través de]], [[out of|de]].',
  },
  {
    question: '[[Which|Cuál]] [[preposition|preposición]] [[does|usa]] [[the|el]] [[text|texto]] [[use|usar]] [[for|para]] [[leaving|salir]] [[the|el]] [[park|parque]]?',
    options: ['[[into|dentro de]]', '[[through|a través de]]', '[[out of|fuera de]]', '[[across|a través de]]'],
    correctAnswer: 2,
    explanation: '[[The|El]] [[text|texto]] [[says|dice]] "[[When I came out of the park|Cuando salí del parque]]".',
  },
  {
    question: '[[Which|Cuál]] [[preposition|preposición]] [[does|usa]] [[the|el]] [[text|texto]] [[use|usar]] [[for|para]] [[the|el]] [[bridge|puente]]?',
    options: ['[[into|dentro de]]', '[[through|a través de]]', '[[out of|fuera de]]', '[[across|a través de]]'],
    correctAnswer: 3,
    explanation: '[[The|El]] [[text|texto]] [[says|dice]] "[[people running across the bridge|personas corriendo a través del puente]]". [[Across|A través de]] = [[over|sobre]] [[a|una]] [[surface|superficie]].',
  },
  {
    question: '[[How many|Cuántas]] [[different|diferentes]] [[prepositions|preposiciones]] [[of|de]] [[movement|movimiento]] [[does|usa]] [[the|el]] [[text|texto]] [[use|usar]]?',
    options: ['[[one|una]]', '[[two|dos]]', '[[three|tres]]', '[[four|cuatro]]'],
    correctAnswer: 3,
    explanation: '[[The|El]] [[text|texto]] [[uses|usa]] [[four|cuatro]]: [[into|en]], [[through|a través de]], [[across|a través de]], [[out of|de]].',
  },
];

export const UNIT_9_LESSON_3_READING: Exercise[] = QUESTIONS.map((q, i) => ({
  id: `a2-u9-l3-r${i + 1}`,
  type: 'reading',
  level: 'A2',
  topic: 'Prepositions Place Movement',
  difficulty: 'easy',
  transcript: READING_TRANSCRIPT,
  content: {
    title: LESSON_TITLE,
    instructions: INSTRUCTIONS,
    questions: [q],
  },
  topicName: 'Reading',
}));
