/**
 * Unidad 51 B1 — Lección 3: Comprensión lectora (Conditionals review)
 * 15 actividades
 */

import { Exercise } from '@/lib/exercise-generator';

const LESSON_TITLE = '[[Reading|Comprensión lectora]]';
const READING_TRANSCRIPT = `[[If|Si]] [[you|tú]] [[ever|alguna vez]] [[wondered|te preguntaste]] [[how|cómo]] [[conditionals|los condicionales]] [[work|funcionan]] [[in|en]] [[English|inglés]], [[here|aquí]] [[is|es]] [[a guide|una guía]]. [[Zero conditional|El condicional cero]] [[describes|describe]] [[general truths|verdades generales]]. [[If|Si]] [[water|el agua]] [[reaches|alcanza]] [[100°C|100°C]], [[it boils|hierve]]. [[First conditional|El primer condicional]] [[talks about|habla de]] [[real future possibilities|posibilidades futuras reales]]. [[If|Si]] [[you|tú]] [[study|estudias]] [[hard|duro]], [[you will pass|aprobarás]] [[the exam|el examen]]. [[Second conditional|El segundo condicional]] [[talks about|habla de]] [[hypothetical situations|situaciones hipotéticas]]. [[If|Si]] [[I|yo]] [[were|fuera]] [[rich|rico]], [[I would travel|viajaría]] [[the world|el mundo]]. [[Third conditional|El tercer condicional]] [[talks about|habla de]] [[past regrets|lamentos del pasado]]. [[If|Si]] [[I|yo]] [[had known|hubiera sabido]], [[I would have come|habría venido]] [[earlier|antes]].`;

const INSTRUCTIONS = 'Lee el texto de abajo. Después responde las preguntas.';

const QUESTIONS = [
  { question: '[[What|Qué]] [[does the zero conditional describe|describe el condicional cero]]?', options: ['[[Past regrets|lamentos del pasado]]', '[[General truths|verdades generales]]', '[[Future possibilities|posibilidades futuras]]'], correctAnswer: 1, explanation: '[[The text says|El texto dice]] "[[Zero conditional describes general truths|el condicional cero describe verdades generales]]".' },
  { question: '[[What|Qué]] [[happens|ocurre]] [[if|si]] [[water|el agua]] [[reaches|alcanza]] [[100°C|100°C]]?', options: ['[[It freezes|Se congela]]', '[[It boils|Hierve]]', '[[It evaporates|Se evapora]]'], correctAnswer: 1, explanation: '[[The text says|El texto dice]] "[[if water reaches 100°C, it boils|si el agua alcanza 100°C, hierve]]".' },
  { question: '[[What|Qué]] [[does the first conditional talk about|habla el primer condicional]]?', options: ['[[Past events|eventos pasados]]', '[[Real future possibilities|posibilidades futuras reales]]', '[[Hypothetical situations|situaciones hipotéticas]]'], correctAnswer: 1, explanation: '[[The text says|El texto dice]] "[[First conditional talks about real future possibilities|el primer condicional habla de posibilidades futuras reales]]".' },
  { question: '[[What|Qué]] [[does the second conditional talk about|habla el segundo condicional]]?', options: ['[[General truths|verdades generales]]', '[[Hypothetical situations|situaciones hipotéticas]]', '[[Past regrets|lamentos del pasado]]'], correctAnswer: 1, explanation: '[[The text says|El texto dice]] "[[Second conditional talks about hypothetical situations|el segundo condicional habla de situaciones hipotéticas]]".' },
  { question: '[[What|Qué]] [[does the third conditional talk about|habla el tercer condicional]]?', options: ['[[Future plans|planes futuros]]', '[[Past regrets|lamentos del pasado]]', '[[General truths|verdades generales]]'], correctAnswer: 1, explanation: '[[The text says|El texto dice]] "[[Third conditional talks about past regrets|el tercer condicional habla de lamentos del pasado]]".' },
  { question: '[[The example|El ejemplo]] [[for|para]] [[second conditional|segundo condicional]] [[uses|usa]] [["were"|"were"]] [[not|no]] [["was"|"was"]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'True', explanation: '[[True|Verdadero]]. [[The text says|El texto dice]] "[[If I were rich|si fuera rico]]".' },
  { question: '[[The text|El texto]] [[is|es]] [[a guide|una guía]] [[to|para]] [[conditionals|los condicionales]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'True', explanation: '[[True|Verdadero]]. [[The text says|El texto dice]] "[[here is a guide|aquí hay una guía]]".' },
  { question: '[[What|Cuál]] [[is|es]] [[the main topic|el tema principal]] [[of|del]] [[this text|este texto]]?', options: ['[[Water and science|Agua y ciencia]]', '[[How conditionals work in English|Cómo funcionan los condicionales en inglés]]', '[[Travel|Viajes]]'], correctAnswer: 1, explanation: '[[The text|El texto]] [[explains|explica]] [[how conditionals work|cómo funcionan los condicionales]].' },
  { question: '[[The first conditional example|El ejemplo del primer condicional]] [[mentions|menciona]] [[studying|estudiar]] [[and|y]] [[passing|aprobar]] [[the exam|el examen]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'True', explanation: '[[True|Verdadero]]. [[The text says|El texto dice]] "[[If you study hard, you will pass the exam|si estudias duro, aprobarás el examen]]".' },
  { question: '[[What|Qué]] [[does the third conditional example|el ejemplo del tercer condicional]] [[express|expresa]]?', options: ['[[A future plan|un plan futuro]]', '[[A past regret|un lamento del pasado]]', '[[A general truth|una verdad general]]'], correctAnswer: 1, explanation: '[[The text says|El texto dice]] "[[I would have come earlier|habría venido antes]]" [[which expresses regret|que expresa un lamento]].' },
  { question: '[[The zero conditional|El condicional cero]] [[uses|usa]] [[present|presente]] [[simple|simple]] [[in|en]] [[both|ambas]] [[clauses|oraciones]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'True', explanation: '[[True|Verdadero]]. [[Example|Ejemplo]]: if water reaches, it boils.' },
  { question: '[[How many|Cuántos]] [[types of conditionals|tipos de condicionales]] [[does the text mention|menciona el texto]]?', options: ['[[Two|Dos]]', '[[Three|Tres]]', '[[Four|Cuatro]]'], correctAnswer: 2, explanation: '[[The text mentions|El texto menciona]] [[zero, first, second and third|cero, primero, segundo y tercer]] [[conditionals|condicionales]].' },
  { question: '[[The second conditional|El segundo condicional]] [[example|ejemplo]] [[is about|trata de]] [[being rich|ser rico]] [[and|y]] [[travelling|viajar]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'True', explanation: '[[True|Verdadero]]. [[The text says|El texto dice]] "[[If I were rich, I would travel the world|si fuera rico, viajaría el mundo]]".' },
  { question: '[[What|Qué]] [[does the phrase "if you ever wondered" mean|significa la frase "si alguna vez te preguntaste"]]?', options: ['[[If you never thought|si nunca pensaste]]', '[[If you sometimes thought|si alguna vez pensaste]]', '[[If you always knew|si siempre supiste]]'], correctAnswer: 1, explanation: '[[Ever wondered|Alguna vez te preguntaste]] [[means|significa]] [[if you sometimes thought about it|si alguna vez pensaste en ello]].' },
  { question: '[[The text|El texto]] [[gives|da]] [[examples|ejemplos]] [[for|para]] [[each|cada]] [[conditional|condicional]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'True', explanation: '[[True|Verdadero]]. [[Each conditional|Cada condicional]] [[has|tiene]] [[an example|un ejemplo]] [[in the text|en el texto]].' },
];

export const UNIT_51_LESSON_3_READING: Exercise[] = QUESTIONS.map((q, i) => ({
  id: `b1-u51-l3-r${i + 1}`,
  type: 'reading',
  level: 'B1',
  topic: 'Conditionals',
  difficulty: 'easy',
  transcript: READING_TRANSCRIPT,
  content: { title: LESSON_TITLE, instructions: INSTRUCTIONS, questions: [q] },
  topicName: 'Reading',
}));
