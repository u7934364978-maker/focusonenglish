/**
 * Unidad 4 — Lección 3: Comprensión lectora (Wh-questions Past)
 * 15 actividades: 1 texto + 15 preguntas
 */

import { Exercise } from '@/lib/exercise-generator';

const LESSON_TITLE = '[[Reading|Comprensión lectora]]';
const READING_TRANSCRIPT = `[[Last month|El mes pasado]] [[my|mi]] [[friend|amigo]] [[Carlos|Carlos]] [[had|tuvo]] [[a|un]] [[interview|entrevista]] [[for|para]] [[a|un]] [[new|nuevo]] [[job|trabajo]]. [[I|Yo]] [[asked|pregunté]] [[him|a él]] [[many|muchas]] [[questions|preguntas]] [[about|sobre]] [[it|ella]]. [[First|Primero]] [[I|Yo]] [[asked|pregunté]] [[what|qué]] [[did|hizo]] [[he|él]] [[do|hacer]] [[to|para]] [[prepare|prepararse]]. [[He|Él]] [[said|dijo]] [[he|él]] [[studied|estudió]] [[the|la]] [[company|empresa]] [[online|en línea]]. [[Then|Después]] [[I|Yo]] [[asked|pregunté]] [[where|dónde]] [[did|fue]] [[the|la]] [[interview|entrevista]] [[take place|tener lugar]]. [[He|Él]] [[said|dijo]] [[it|ella]] [[was|estaba]] [[at|en]] [[the|la]] [[office|oficina]] [[in|en]] [[Madrid|Madrid]]. [[I|Yo]] [[asked|pregunté]] [[when|cuándo]] [[did|fue]] [[it|ella]] [[happen|ocurrir]]. [[He|Él]] [[said|dijo]] [[last|el]] [[Tuesday|martes]] [[at|a]] [[10|diez]] [[o\'clock|en punto]]. [[I|Yo]] [[asked|pregunté]] [[who|quién]] [[did|vió]] [[he|él]] [[meet|conocer]] [[there|allí]]. [[He|Él]] [[said|dijo]] [[he|él]] [[met|conoció]] [[two|dos]] [[managers|gerentes]] [[and|y]] [[the|el]] [[HR|RRHH]] [[director|director]]. [[I|Yo]] [[asked|pregunté]] [[why|por qué]] [[did|hizo]] [[he|él]] [[want|querer]] [[the|el]] [[job|trabajo]]. [[He|Él]] [[said|dijo]] [[because|porque]] [[it|ella]] [[was|estaba]] [[interesting|interesante]] [[and|y]] [[near|cerca]] [[his|su]] [[home|casa]]. [[Finally|Finalmente]] [[I|Yo]] [[asked|pregunté]] [[how|cómo]] [[did|fue]] [[it|ella]] [[go|ir]]. [[He|Él]] [[said|dijo]] [[it|ella]] [[went|fue]] [[very|muy]] [[well|bien]] [[and|y]] [[he|él]] [[got|consiguió]] [[the|el]] [[job|trabajo]]!`;

const INSTRUCTIONS = 'Lee el texto de abajo. Después responde las preguntas.';

const QUESTIONS = [
  {
    question: '[[What|Qué]] [[did|tuvo]] [[Carlos|Carlos]] [[have|tener]] [[last month|el mes pasado]]?',
    options: ['[[a|una]] [[holiday|vacaciones]]', '[[an|una]] [[interview|entrevista]] [[for|para]] [[a|un]] [[new|nuevo]] [[job|trabajo]]', '[[a|una]] [[birthday|cumpleaños]] [[party|fiesta]]', '[[a|un]] [[exam|examen]]'],
    correctAnswer: 1,
    explanation: '[[The|El]] [[text|texto]] [[says|dice]] "[[my friend Carlos had an interview for a new job|mi amigo Carlos tuvo una entrevista para un nuevo trabajo]]".',
  },
  {
    question: '[[What|Qué]] [[did|hizo]] [[Carlos|Carlos]] [[do|hacer]] [[to|para]] [[prepare|prepararse]]?',
    options: ['[[He|Él]] [[practised|practicó]] [[at|en]] [[home|casa]]', '[[He|Él]] [[studied|estudió]] [[the|la]] [[company|empresa]] [[online|en línea]]', '[[He|Él]] [[read|leyó]] [[books|libros]]', '[[He|Él]] [[asked|preguntó]] [[friends|amigos]]'],
    correctAnswer: 1,
    explanation: '[[The|El]] [[text|texto]] [[says|dice]] "[[he studied the company online|estudió la empresa en línea]]".',
  },
  {
    question: '[[Where|Dónde]] [[did|tuvo]] [[the|la]] [[interview|entrevista]] [[take place|lugar]]?',
    options: ['[[at|en]] [[home|casa]]', '[[at|en]] [[the|la]] [[office|oficina]] [[in|en]] [[Madrid|Madrid]]', '[[at|en]] [[a|un]] [[cafe|café]]', '[[online|en línea]]'],
    correctAnswer: 1,
    explanation: '[[The|El]] [[text|texto]] [[says|dice]] "[[it was at the office in Madrid|estaba en la oficina en Madrid]]".',
  },
  {
    question: '[[When|Cuándo]] [[did|tuvo]] [[the|la]] [[interview|entrevista]] [[happen|lugar]]?',
    options: ['[[last|el]] [[Monday|lunes]]', '[[last|el]] [[Tuesday|martes]] [[at|a]] [[10|diez]] [[o\'clock|en punto]]', '[[last|el]] [[Friday|viernes]]', '[[yesterday|ayer]]'],
    correctAnswer: 1,
    explanation: '[[The|El]] [[text|texto]] [[says|dice]] "[[last Tuesday at 10 o\'clock|el martes pasado a las diez en punto]]".',
  },
  {
    question: '[[Who|Quién]] [[did|conoció]] [[Carlos|Carlos]] [[meet|conocer]] [[at|en]] [[the|la]] [[interview|entrevista]]?',
    options: ['[[one|un]] [[manager|gerente]]', '[[two|dos]] [[managers|gerentes]] [[and|y]] [[the|el]] [[HR|RRHH]] [[director|director]]', '[[the|el]] [[boss|jefe]] [[only|solo]]', '[[no one|nadie]]'],
    correctAnswer: 1,
    explanation: '[[The|El]] [[text|texto]] [[says|dice]] "[[he met two managers and the HR director|conoció a dos gerentes y al director de RRHH]]".',
  },
  {
    question: '[[Why|Por qué]] [[did|quería]] [[Carlos|Carlos]] [[want|querer]] [[the|el]] [[job|trabajo]]?',
    options: ['[[because|porque]] [[the|el]] [[salary|salario]] [[was|estaba]] [[high|alto]]', '[[because|porque]] [[it|era]] [[was|estaba]] [[interesting|interesante]] [[and|y]] [[near|cerca]] [[his|su]] [[home|casa]]', '[[because|porque]] [[his|su]] [[friend|amigo]] [[worked|trabajaba]] [[there|allí]]', '[[because|porque]] [[it|era]] [[was|estaba]] [[easy|fácil]]'],
    correctAnswer: 1,
    explanation: '[[The|El]] [[text|texto]] [[says|dice]] "[[because it was interesting and near his home|porque era interesante y cerca de su casa]]".',
  },
  {
    question: '[[How|Cómo]] [[did|fue]] [[the|la]] [[interview|entrevista]] [[go|ir]]?',
    options: ['[[bad|mal]]', '[[very|muy]] [[well|bien]] [[and|y]] [[he|él]] [[got|consiguió]] [[the|el]] [[job|trabajo]]', '[[ok|bien]]', '[[He|Él]] [[didn\'t|no]] [[get|consiguió]] [[the|el]] [[job|trabajo]]'],
    correctAnswer: 1,
    explanation: '[[The|El]] [[text|texto]] [[says|dice]] "[[it went very well and he got the job|fue muy bien y consiguió el trabajo]]"!',
  },
  {
    question: '[[The|El]] [[writer|escritor]] [[asked|preguntó]] [[Carlos|Carlos]] [[many|muchas]] [[questions|preguntas]].',
    options: ['[[True|Verdadero]]', '[[False|Falso]]'],
    correctAnswer: 'True',
    explanation: '[[True|Verdadero]]. [[The|El]] [[text|texto]] [[says|dice]] "[[I asked him many questions|le pregunté muchas preguntas]]".',
  },
  {
    question: '[[The|La]] [[interview|entrevista]] [[was|estaba]] [[online|en línea]].',
    options: ['[[True|Verdadero]]', '[[False|Falso]]'],
    correctAnswer: 'False',
    explanation: '[[False|Falso]]. [[It|Ella]] [[was|estaba]] [[at|en]] [[the|la]] [[office|oficina]] [[in|en]] [[Madrid|Madrid]].',
  },
  {
    question: '[[Carlos|Carlos]] [[got|consiguió]] [[the|el]] [[job|trabajo]].',
    options: ['[[True|Verdadero]]', '[[False|Falso]]'],
    correctAnswer: 'True',
    explanation: '[[True|Verdadero]]. [[The|El]] [[text|texto]] [[says|dice]] "[[he got the job|consiguió el trabajo]]"!',
  },
  {
    question: '[[What|Cuál]] [[is|es]] [[the|el]] [[main|principal]] [[topic|tema]] [[of|del]] [[this|este]] [[text|texto]]?',
    options: ['[[A|Un]] [[holiday|vacaciones]]', '[[A|Una]] [[conversation|conversación]] [[about|sobre]] [[a|una]] [[job|trabajo]] [[interview|entrevista]]', '[[A|Un]] [[birthday|cumpleaños]]', '[[A|Una]] [[trip|viaje]]'],
    correctAnswer: 1,
    explanation: '[[The|El]] [[text|texto]] [[is|es]] [[about|sobre]] [[the|el]] [[writer|escritor]] [[asking|preguntando]] [[Carlos|Carlos]] [[about|sobre]] [[his|su]] [[job|trabajo]] [[interview|entrevista]].',
  },
  {
    question: '[[Which|Cuál]] [[Wh-question|pregunta Wh]] [[does|usa]] [[the|el]] [[text|texto]] [[NOT|NO]] [[use|usar]]?',
    options: ['[[What|Qué]]', '[[Where|Dónde]]', '[[Which|Cuál]]'],
    correctAnswer: 2,
    explanation: '[[The|El]] [[text|texto]] [[uses|usa]] [[What|Qué]], [[Where|Dónde]], [[When|Cuándo]], [[Who|Quién]], [[Why|Por qué]], [[How|Cómo]]. [[Which|Cuál]] [[is|es]] [[not|no]] [[used|usado]].',
  },
  {
    question: '[[What|Qué]] [[type|tipo]] [[of|de]] [[questions|preguntas]] [[does|hace]] [[the|el]] [[writer|escritor]] [[ask|preguntar]]?',
    options: ['[[Yes/No|Sí/No]] [[questions|preguntas]]', '[[Wh-questions|Preguntas Wh]] [[about|sobre]] [[the|la]] [[past|pasado]]', '[[Future|Futuro]] [[questions|preguntas]]', '[[Multiple choice|Opción múltiple]]'],
    correctAnswer: 1,
    explanation: '[[The|El]] [[writer|escritor]] [[asks|pregunta]] [[What|Qué]], [[Where|Dónde]], [[When|Cuándo]], [[Who|Quién]], [[Why|Por qué]], [[How|Cómo]] [[did|hizo]] [[...|...]] - [[Wh-questions|preguntas Wh]] [[in|en]] [[Past Simple|Pasado Simple]].',
  },
  {
    question: '[[Where|Dónde]] [[did|estaba]] [[the|la]] [[office|oficina]]?',
    options: ['[[Barcelona|Barcelona]]', '[[Madrid|Madrid]]', '[[Valencia|Valencia]]', '[[Seville|Sevilla]]'],
    correctAnswer: 1,
    explanation: '[[The|El]] [[text|texto]] [[says|dice]] "[[at the office in Madrid|en la oficina en Madrid]]".',
  },
  {
    question: '[[How many|Cuántas]] [[people|personas]] [[did|conoció]] [[Carlos|Carlos]] [[meet|conocer]] [[at|en]] [[the|la]] [[interview|entrevista]]?',
    options: ['[[one|una]]', '[[two|dos]]', '[[three|tres]]', '[[four|cuatro]]'],
    correctAnswer: 2,
    explanation: '[[He|Él]] [[met|conoció]] [[two|dos]] [[managers|gerentes]] [[and|y]] [[the|el]] [[HR|RRHH]] [[director|director]] = [[three|tres]] [[people|personas]].',
  },
];

export const UNIT_4_LESSON_3_READING: Exercise[] = QUESTIONS.map((q, i) => ({
  id: `a2-u4-l3-r${i + 1}`,
  type: 'reading',
  level: 'A2',
  topic: 'Wh-questions Past',
  difficulty: 'easy',
  transcript: READING_TRANSCRIPT,
  content: {
    title: LESSON_TITLE,
    instructions: INSTRUCTIONS,
    questions: [q],
  },
  topicName: 'Reading',
}));
