/**
 * Unidad 30 — Lección 3: Comprensión lectora (Module 3 Review)
 * 15 actividades: 1 texto + 15 preguntas
 */

import { Exercise } from '@/lib/exercise-generator';

const LESSON_TITLE = '[[Reading|Comprensión lectora]]';
const READING_TRANSCRIPT = `[[Next week|La próxima semana]] [[I|yo]] [[will travel|viajaré]] [[to|a]] [[London|Londres]]. [[If|Si]] [[it|va]] [[rains|llueve]], [[I|yo]] [[will take|cogeré]] [[an|un]] [[umbrella|paraguas]]. [[If|Si]] [[you|tú]] [[heat|calientas]] [[water|agua]], [[it|ella]] [[boils|hierve]] — [[that|eso]] [[is|es]] [[a|un]] [[general|hecho]] [[fact|general]]. [[I|yo]] [[have to|tengo que]] [[get up|levantarme]] [[early|temprano]] [[tomorrow|mañana]] [[because|porque]] [[I|yo]] [[have|tengo]] [[a|una]] [[meeting|reunión]]. [[I|Yo]] [[don\'t have to|no tengo que]] [[work|trabajar]] [[on|el]] [[Friday|viernes]]. [[When|Cuando]] [[I|yo]] [[was|era]] [[young|joven]], [[I|yo]] [[could|podía]] [[speak|hablar]] [[two|dos]] [[languages|lenguas]]. [[Could you|Podrías]] [[pass|pasar]] [[me|me]] [[the|el]] [[water|agua]], [[please|por favor]]?`;

const INSTRUCTIONS = 'Lee el texto de abajo. Después responde las preguntas.';

const QUESTIONS = [
  {
    question: '[[What|Qué]] [[will|hará]] [[the|el]] [[writer|autor]] [[do|hacer]] [[next week|la próxima semana]]?',
    options: ['[[stay at home|quedarse en casa]]', '[[travel to London|viajar a Londres]]', '[[work|trabajar]]', '[[study|estudiar]]'],
    correctAnswer: 1,
    explanation: '[[He|Él]] [[says|dice]] "[[Next week I will travel to London|La próxima semana viajaré a Londres]]".',
  },
  {
    question: '[[What|Qué]] [[will|hará]] [[the|el]] [[writer|autor]] [[do|hacer]] [[if|si]] [[it|va]] [[rains|llueve]]?',
    options: ['[[stay at home|quedarse en casa]]', '[[take an umbrella|coger un paraguas]]', '[[cancel the trip|cancelar el viaje]]', '[[wear a coat|llevar abrigo]]'],
    correctAnswer: 1,
    explanation: '[[He|Él]] [[says|dice]] "[[If it rains I will take an umbrella|Si llueve cogeré un paraguas]]".',
  },
  {
    question: '[[Which|Cuál]] [[structure|estructura]] [[does|usa]] [[the|el]] [[text|texto]] [[use|usar]] [[for|para]] "[[If you heat water it boils|Si calientas agua hierve]]"?',
    options: ['[[First|Primer]] [[conditional|condicional]]', '[[Zero|Condicional]] [[conditional|cero]]', '[[Past|Pasado]] [[simple|simple]]', '[[Future|Futuro]] [[simple|simple]]'],
    correctAnswer: 1,
    explanation: '[[Zero|Condicional]] [[conditional|cero]] = [[general|hecho]] [[fact|general]]: [[If|Si]] + [[present|presente]], [[present|presente]].',
  },
  {
    question: '[[Why|Por qué]] [[does|tiene]] [[the|el]] [[writer|autor]] [[have to|que]] [[get up|levantarse]] [[early|temprano]] [[tomorrow|mañana]]?',
    options: ['[[he likes mornings|le gustan las mañanas]]', '[[he has a meeting|tiene una reunión]]', '[[he travels|viaja]]', '[[he exercises|hace ejercicio]]'],
    correctAnswer: 1,
    explanation: '[[He|Él]] [[says|dice]] "[[because I have a meeting|porque tengo una reunión]]".',
  },
  {
    question: '[[Does|Tiene]] [[the|el]] [[writer|autor]] [[have to|que]] [[work|trabajar]] [[on|el]] [[Friday|viernes]]?',
    options: ['[[Yes|Sí]]', '[[No|No]]'],
    correctAnswer: 1,
    explanation: '[[He|Él]] [[says|dice]] "[[I don\'t have to work on Friday|No tengo que trabajar el viernes]]".',
  },
  {
    question: '[[What|Qué]] [[could|podía]] [[the|el]] [[writer|autor]] [[do|hacer]] [[when|cuando]] [[he|él]] [[was|era]] [[young|joven]]?',
    options: ['[[swim|nadar]]', '[[speak two languages|hablar dos lenguas]]', '[[cook|cocinar]]', '[[drive|conducir]]'],
    correctAnswer: 1,
    explanation: '[[He|Él]] [[says|dice]] "[[When I was young I could speak two languages|Cuando era joven podía hablar dos lenguas]]".',
  },
  {
    question: '[[What|Qué]] [[polite|educada]] [[request|petición]] [[does|hace]] [[the|el]] [[writer|autor]] [[make|hacer]]?',
    options: ['[[pass the salt|pasar la sal]]', '[[pass the water|pasar el agua]]', '[[close the door|cerrar la puerta]]', '[[open the window|abrir la ventana]]'],
    correctAnswer: 1,
    explanation: '[[He|Él]] [[says|dice]] "[[Could you pass me the water please?|¿Podrías pasarme el agua por favor?]]".',
  },
  {
    question: '[[The|El]] [[text|texto]] [[reviews|repasa]] [[future|futuro]], [[conditionals|condicionales]], [[have to|have to]], [[and|y]] [[could|could]].',
    options: ['[[True|Verdadero]]', '[[False|Falso]]'],
    correctAnswer: 'True',
    explanation: '[[True|Verdadero]]. [[Module|Módulo]] [[3|3]] [[Review|repaso]] [[includes|incluye]] [[all|todos]] [[these|estos]] [[topics|temas]].',
  },
  {
    question: '[[First|Primer]] [[conditional|condicional]] [[uses|usa]] [[If|Si]] + [[present|presente]], [[will|will]] + [[infinitive|infinitivo]].',
    options: ['[[True|Verdadero]]', '[[False|Falso]]'],
    correctAnswer: 'True',
    explanation: '[[True|Verdadero]]. [[Example|Ejemplo]]: "[[If it rains I will take an umbrella|Si llueve cogeré un paraguas]]".',
  },
  {
    question: '[[Zero|Condicional]] [[conditional|cero]] [[uses|usa]] [[will|will]] [[in|en]] [[the|la]] [[result|resultado]] [[clause|oración]].',
    options: ['[[True|Verdadero]]', '[[False|Falso]]'],
    correctAnswer: 'False',
    explanation: '[[False|Falso]]. [[Zero|Condicional]] [[conditional|cero]] [[uses|usa]] [[present|presente]] + [[present|presente]], [[no|sin]] [[will|will]].',
  },
  {
    question: '[[Don\'t have to|No tener que]] [[means|significa]] [[no obligation|sin obligación]].',
    options: ['[[True|Verdadero]]', '[[False|Falso]]'],
    correctAnswer: 'True',
    explanation: '[[True|Verdadero]]. [[Don\'t have to|Don\'t have to]] = [[optional|opcional]].',
  },
  {
    question: '[[What|Cuál]] [[is|es]] [[the|el]] [[main|principal]] [[topic|tema]] [[of|del]] [[this|este]] [[text|texto]]?',
    options: ['[[Past|Eventos]] [[events|pasados]] [[only|solo]]', '[[Module 3 Review|Repaso Módulo 3]]: [[future|futuro]], [[conditionals|condicionales]], [[have to|have to]], [[could|could]]', '[[Weather|Tiempo]]', '[[Travel|Viajes]]'],
    correctAnswer: 1,
    explanation: '[[The|El]] [[text|texto]] [[reviews|repasa]] [[all|todos]] [[Module|Módulo]] [[3|3]] [[topics|temas]].',
  },
  {
    question: '[[How many|Cuántos]] [[grammar|gramaticales]] [[structures|estructuras]] [[does|menciona]] [[the|el]] [[text|texto]] [[mention|mencionar]]?',
    options: ['[[one|una]]', '[[two|dos]]', '[[three|tres]]', '[[four|cuatro]] [[or more|o más]]'],
    correctAnswer: 3,
    explanation: '[[Future|Futuro]] ([[will|will]]), [[first conditional|primer condicional]], [[zero conditional|condicional cero]], [[have to|have to]], [[could|could]] = [[5|cinco]].',
  },
  {
    question: '[[Could you pass me the water?|¿Podrías pasarme el agua?]] [[is|es]] [[a|una]] [[polite|educada]] [[request|petición]].',
    options: ['[[True|Verdadero]]', '[[False|Falso]]'],
    correctAnswer: 'True',
    explanation: '[[True|Verdadero]]. [[Could you...?|¿Podrías...?]] = [[polite|educada]] [[request|petición]].',
  },
  {
    question: '[[Which|Cuál]] [[word|palabra]] [[introduces|introduce]] [[the|la]] [[condition|condición]] [[in|en]] [[both|ambos]] [[first|primer]] [[and|y]] [[zero|condicional]] [[conditional|cero]]?',
    options: ['[[When|Cuando]]', '[[If|Si]]', '[[Because|Porque]]', '[[So|Así que]]'],
    correctAnswer: 1,
    explanation: '[[If|Si]] [[introduces|introduce]] [[the|la]] [[condition|condición]] [[in|en]] [[both|ambos]] [[conditionals|condicionales]].',
  },
];

export const UNIT_30_LESSON_3_READING: Exercise[] = QUESTIONS.map((q, i) => ({
  id: `a2-u30-l3-r${i + 1}`,
  type: 'reading',
  level: 'A2',
  topic: 'Module 3 Review',
  difficulty: 'easy',
  transcript: READING_TRANSCRIPT,
  content: {
    title: LESSON_TITLE,
    instructions: INSTRUCTIONS,
    questions: [q],
  },
  topicName: 'Reading',
}));
