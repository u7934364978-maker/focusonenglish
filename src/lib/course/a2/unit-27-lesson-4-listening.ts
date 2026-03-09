/**
 * Unidad 27 — Lección 4: Comprensión auditiva (Zero Conditional)
 * 15 actividades: 1 audio (transcripción) + 15 preguntas
 */

import { Exercise } from '@/lib/exercise-generator';

const LESSON_TITLE = '[[Listening|Comprensión auditiva]]';
const LISTENING_TRANSCRIPT = `[[If|Si]] [[you|tú]] [[heat|calientas]] [[water|agua]] [[to|a]] [[100 degrees|100 grados]], [[it|ella]] [[boils|hierve]]. [[If|Si]] [[you|tú]] [[put|pones]] [[ice|hielo]] [[in|en]] [[the|el]] [[sun|sol]], [[it|él]] [[melts|se derrite]]. [[If|Si]] [[you|tú]] [[don\'t water|no riegas]] [[plants|plantas]], [[they|ellas]] [[die|mueren]]. [[If|Si]] [[you|tú]] [[eat|comes]] [[too much|demasiado]] [[sugar|azúcar]], [[you|tú]] [[get|te pones]] [[tired|cansado]]. [[If|Si]] [[you|tú]] [[drink|bebes]] [[water|agua]] [[every day|cada día]], [[you|tú]] [[feel|te sientes]] [[better|mejor]]. [[If|Si]] [[you|tú]] [[read|lees]] [[every day|cada día]], [[your|tu]] [[vocabulary|vocabulario]] [[improves|mejora]].`;

const INSTRUCTIONS = 'Escucha el audio de abajo. Puedes leer la transcripción después de escuchar. Después responde las preguntas.';

const QUESTIONS = [
  {
    question: '[[At|A]] [[what|qué]] [[temperature|temperatura]] [[does|hierve]] [[water|agua]] [[boil|hervir]]?',
    options: ['[[50 degrees|50 grados]]', '[[80 degrees|80 grados]]', '[[100 degrees|100 grados]]', '[[120 degrees|120 grados]]'],
    correctAnswer: 2,
    explanation: '[[The|El]] [[speaker|hablante]] [[says|dice]] "[[If you heat water to 100 degrees it boils|Si calientas agua a 100 grados hierve]]".',
  },
  {
    question: '[[What|Qué]] [[happens|pasa]] [[if|si]] [[you|tú]] [[put|pones]] [[ice|hielo]] [[in|en]] [[the|el]] [[sun|sol]]?',
    options: ['[[it freezes|se congela]]', '[[it boils|hierve]]', '[[it melts|se derrite]]', '[[nothing|nada]]'],
    correctAnswer: 2,
    explanation: '[[The|El]] [[speaker|hablante]] [[says|dice]] "[[If you put ice in the sun it melts|Si pones hielo al sol se derrite]]".',
  },
  {
    question: '[[What|Qué]] [[happens|pasa]] [[if|si]] [[you|tú]] [[don\'t water|no riegas]] [[plants|plantas]]?',
    options: ['[[they grow|crecen]]', '[[they die|mueren]]', '[[they flower|florecen]]', '[[they turn green|se ponen verdes]]'],
    correctAnswer: 1,
    explanation: '[[The|El]] [[speaker|hablante]] [[says|dice]] "[[If you don\'t water plants they die|Si no riegas las plantas mueren]]".',
  },
  {
    question: '[[What|Qué]] [[happens|pasa]] [[if|si]] [[you|tú]] [[eat|comes]] [[too much|demasiado]] [[sugar|azúcar]]?',
    options: ['[[you feel energetic|te sientes con energía]]', '[[you get tired|te pones cansado]]', '[[you feel happy|te sientes feliz]]', '[[you sleep well|duermes bien]]'],
    correctAnswer: 1,
    explanation: '[[The|El]] [[speaker|hablante]] [[says|dice]] "[[If you eat too much sugar you get tired|Si comes demasiado azúcar te pones cansado]]".',
  },
  {
    question: '[[What|Qué]] [[happens|pasa]] [[if|si]] [[you|tú]] [[drink|bebes]] [[water|agua]] [[every day|cada día]]?',
    options: ['[[you feel worse|te sientes peor]]', '[[you feel better|te sientes mejor]]', '[[you feel tired|te sientes cansado]]', '[[nothing|nada]]'],
    correctAnswer: 1,
    explanation: '[[The|El]] [[speaker|hablante]] [[says|dice]] "[[If you drink water every day you feel better|Si bebes agua cada día te sientes mejor]]".',
  },
  {
    question: '[[What|Qué]] [[happens|pasa]] [[if|si]] [[you|tú]] [[read|lees]] [[every day|cada día]]?',
    options: ['[[your vocabulary gets worse|tu vocabulario empeora]]', '[[your vocabulary improves|tu vocabulario mejora]]', '[[you forget words|olvidas palabras]]', '[[nothing|nada]]'],
    correctAnswer: 1,
    explanation: '[[The|El]] [[speaker|hablante]] [[says|dice]] "[[If you read every day your vocabulary improves|Si lees cada día tu vocabulario mejora]]".',
  },
  {
    question: '[[The|El]] [[speaker|hablante]] [[talks|habla]] [[about|sobre]] [[general|hechos]] [[facts|generales]] [[and|y]] [[scientific|científicas]] [[truths|verdades]].',
    options: ['[[True|Verdadero]]', '[[False|Falso]]'],
    correctAnswer: 'True',
    explanation: '[[True|Verdadero]]. [[Zero|Condicional]] [[conditional|cero]] = [[general|hechos]] [[facts|generales]].',
  },
  {
    question: '[[If|Si]] [[you|tú]] [[put|pones]] [[ice|hielo]] [[in|en]] [[the|el]] [[sun|sol]], [[it|él]] [[freezes|se congela]].',
    options: ['[[True|Verdadero]]', '[[False|Falso]]'],
    correctAnswer: 'False',
    explanation: '[[False|Falso]]. [[Ice|El hielo]] [[melts|se derrite]] [[in|en]] [[the|el]] [[sun|sol]], [[not|no]] [[freezes|se congela]].',
  },
  {
    question: '[[The|El]] [[speaker|hablante]] [[says|dice]] [[that|que]] [[drinking|beber]] [[water|agua]] [[helps|ayuda]] [[you|te]] [[feel|sentirte]] [[better|mejor]].',
    options: ['[[True|Verdadero]]', '[[False|Falso]]'],
    correctAnswer: 'True',
    explanation: '[[True|Verdadero]]. "[[If you drink water every day you feel better|Si bebes agua cada día te sientes mejor]]".',
  },
  {
    question: '[[The|El]] [[speaker|hablante]] [[mentions|menciona]] [[that|que]] [[reading|leer]] [[improves|mejora]] [[vocabulary|vocabulario]].',
    options: ['[[True|Verdadero]]', '[[False|Falso]]'],
    correctAnswer: 'True',
    explanation: '[[True|Verdadero]]. "[[If you read every day your vocabulary improves|Si lees cada día tu vocabulario mejora]]".',
  },
  {
    question: '[[What|Cuál]] [[is|es]] [[the|el]] [[main|principal]] [[topic|tema]] [[of|del]] [[this|este]] [[audio|audio]]?',
    options: ['[[Past|Eventos]] [[events|pasados]]', '[[General|Hechos]] [[facts|generales]] [[and|y]] [[scientific|científicas]] [[truths|verdades]]', '[[Future|Planes]] [[plans|futuros]]', '[[Shopping|Compras]]'],
    correctAnswer: 1,
    explanation: '[[The|El]] [[audio|audio]] [[uses|usa]] [[zero|condicional]] [[conditional|cero]]: [[general|hechos]] [[facts|generales]].',
  },
  {
    question: '[[In|En]] [[zero|condicional]] [[conditional|cero]], [[do|usa]] [[we|usamos]] [[use|usar]] [[will|will]]?',
    options: ['[[Yes|Sí]] [[always|siempre]]', '[[No|No]] [[never|nunca]]', '[[Sometimes|A veces]]', '[[Only in the result|Solo en el resultado]]'],
    correctAnswer: 1,
    explanation: '[[Zero|Condicional]] [[conditional|cero]]: [[present|presente]] + [[present|presente]], [[no|sin]] [[will|will]].',
  },
  {
    question: '[[How many|Cuántas]] [[examples|ejemplos]] [[does|menciona]] [[the|el]] [[speaker|hablante]] [[mention|mencionar]]?',
    options: ['[[two|dos]]', '[[three|tres]]', '[[four|cuatro]]', '[[six|seis]]'],
    correctAnswer: 3,
    explanation: '[[Six|Seis]] [[examples|ejemplos]]: [[water|agua]], [[ice|hielo]], [[plants|plantas]], [[sugar|azúcar]], [[water drinking|beber agua]], [[reading|leer]].',
  },
  {
    question: '[[Which|Cuál]] [[example|ejemplo]] [[is|es]] [[about|sobre]] [[learning|aprender]]?',
    options: ['[[water boils|el agua hierve]]', '[[ice melts|el hielo se derrite]]', '[[reading improves vocabulary|leer mejora el vocabulario]]', '[[plants die|las plantas mueren]]'],
    correctAnswer: 2,
    explanation: '[[Reading|Leer]] [[every day|cada día]] → [[vocabulary|vocabulario]] [[improves|mejora]] = [[learning|aprender]].',
  },
  {
    question: '[[What|Qué]] [[structure|estructura]] [[does|usa]] [[the|el]] [[speaker|hablante]] [[use|usar]]?',
    options: ['[[First|Primer]] [[conditional|condicional]]', '[[Zero|Condicional]] [[conditional|cero]]', '[[Past|Pasado]] [[simple|simple]]', '[[Future|Futuro]] [[simple|simple]]'],
    correctAnswer: 1,
    explanation: '[[Zero|Condicional]] [[conditional|cero]]: [[If|Si]] + [[present|presente]], [[present|presente]].',
  },
];

export const UNIT_27_LESSON_4_LISTENING: Exercise[] = QUESTIONS.map((q, i) => ({
  id: `a2-u27-l4-l${i + 1}`,
  type: 'listening',
  level: 'A2',
  topic: 'Zero Conditional',
  difficulty: 'easy',
  transcript: LISTENING_TRANSCRIPT,
  content: {
    title: LESSON_TITLE,
    instructions: INSTRUCTIONS,
    questions: [q],
  },
  topicName: 'Listening',
}));
