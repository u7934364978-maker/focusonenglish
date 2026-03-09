/**
 * Unidad 30 — Lección 4: Comprensión auditiva (Module 3 Review)
 * 15 actividades: 1 audio (transcripción) + 15 preguntas
 */

import { Exercise } from '@/lib/exercise-generator';

const LESSON_TITLE = '[[Listening|Comprensión auditiva]]';
const LISTENING_TRANSCRIPT = `[[Tomorrow|Mañana]] [[I|yo]] [[will go|iré]] [[to|al]] [[the|el]] [[dentist|dentista]]. [[If|Si]] [[I|yo]] [[finish|termino]] [[early|temprano]], [[I|yo]] [[will have|comeré]] [[lunch|almuerzo]] [[with|con]] [[a|un]] [[friend|amigo]]. [[If|Si]] [[you|tú]] [[don\'t brush|no te cepillas]] [[your|tus]] [[teeth|dientes]], [[they|ellos]] [[get|se ponen]] [[yellow|amarillos]] — [[that|eso]] [[is|es]] [[a|un]] [[general|hecho]] [[fact|general]]. [[I|yo]] [[have to|tengo que]] [[wear|llevar]] [[glasses|gafas]] [[when|cuando]] [[I|yo]] [[read|leo]]. [[I|Yo]] [[don\'t have to|no tengo que]] [[work|trabajar]] [[tomorrow|mañana]]. [[When|Cuando]] [[I|yo]] [[was|era]] [[a|un]] [[child|niño]], [[I|yo]] [[could|podía]] [[draw|dibujar]] [[well|bien]]. [[Could you|Podrías]] [[speak|hablar]] [[more slowly|más despacio]], [[please|por favor]]?`;

const INSTRUCTIONS = 'Escucha el audio de abajo. Puedes leer la transcripción después de escuchar. Después responde las preguntas.';

const QUESTIONS = [
  {
    question: '[[What|Qué]] [[will|hará]] [[the|el]] [[speaker|hablante]] [[do|hacer]] [[tomorrow|mañana]]?',
    options: ['[[go to the doctor|ir al médico]]', '[[go to the dentist|ir al dentista]]', '[[stay at home|quedarse en casa]]', '[[travel|viajar]]'],
    correctAnswer: 1,
    explanation: '[[The|El]] [[speaker|hablante]] [[says|dice]] "[[Tomorrow I will go to the dentist|Mañana iré al dentista]]".',
  },
  {
    question: '[[What|Qué]] [[will|hará]] [[the|el]] [[speaker|hablante]] [[do|hacer]] [[if|si]] [[he|él]] [[finishes|termina]] [[early|temprano]]?',
    options: ['[[go home|ir a casa]]', '[[have lunch with a friend|tomar café con un amigo]]', '[[work more|trabajar más]]', '[[sleep|dormir]]'],
    correctAnswer: 1,
    explanation: '[[The|El]] [[speaker|hablante]] [[says|dice]] "[[If I finish early I will have lunch with a friend|Si termino temprano tomaré café con un amigo]]".',
  },
  {
    question: '[[Which|Cuál]] [[structure|estructura]] [[does|usa]] [[the|el]] [[speaker|hablante]] [[use|usar]] [[for|para]] "[[If you don\'t brush your teeth they get yellow|Si no te cepillas los dientes se ponen amarillos]]"?',
    options: ['[[First|Primer]] [[conditional|condicional]]', '[[Zero|Condicional]] [[conditional|cero]]', '[[Past|Pasado]] [[simple|simple]]', '[[Future|Futuro]] [[simple|simple]]'],
    correctAnswer: 1,
    explanation: '[[Zero|Condicional]] [[conditional|cero]] = [[general|hecho]] [[fact|general]].',
  },
  {
    question: '[[What|Qué]] [[does|tiene]] [[the|el]] [[speaker|hablante]] [[have to|que]] [[wear|llevar]] [[when|cuando]] [[he|él]] [[reads|lee]]?',
    options: ['[[a hat|un sombrero]]', '[[glasses|gafas]]', '[[a uniform|un uniforme]]', '[[nothing|nada]]'],
    correctAnswer: 1,
    explanation: '[[The|El]] [[speaker|hablante]] [[says|dice]] "[[I have to wear glasses when I read|Tengo que llevar gafas cuando leo]]".',
  },
  {
    question: '[[Does|Tiene]] [[the|el]] [[speaker|hablante]] [[have to|que]] [[work|trabajar]] [[tomorrow|mañana]]?',
    options: ['[[Yes|Sí]]', '[[No|No]]'],
    correctAnswer: 1,
    explanation: '[[The|El]] [[speaker|hablante]] [[says|dice]] "[[I don\'t have to work tomorrow|No tengo que trabajar mañana]]".',
  },
  {
    question: '[[What|Qué]] [[could|podía]] [[the|el]] [[speaker|hablante]] [[do|hacer]] [[when|cuando]] [[he|él]] [[was|era]] [[a|un]] [[child|niño]]?',
    options: ['[[swim|nadar]]', '[[draw well|dibujar bien]]', '[[speak English|hablar inglés]]', '[[cook|cocinar]]'],
    correctAnswer: 1,
    explanation: '[[The|El]] [[speaker|hablante]] [[says|dice]] "[[When I was a child I could draw well|Cuando era niño podía dibujar bien]]".',
  },
  {
    question: '[[What|Qué]] [[polite|educada]] [[request|petición]] [[does|hace]] [[the|el]] [[speaker|hablante]] [[make|hacer]]?',
    options: ['[[speak louder|hablar más alto]]', '[[speak more slowly|hablar más despacio]]', '[[repeat|repetir]]', '[[stop|parar]]'],
    correctAnswer: 1,
    explanation: '[[The|El]] [[speaker|hablante]] [[says|dice]] "[[Could you speak more slowly please?|¿Podrías hablar más despacio por favor?]]".',
  },
  {
    question: '[[The|El]] [[audio|audio]] [[reviews|repasa]] [[Module|Módulo]] [[3|3]] [[topics|temas]].',
    options: ['[[True|Verdadero]]', '[[False|Falso]]'],
    correctAnswer: 'True',
    explanation: '[[True|Verdadero]]. [[Future|Futuro]], [[conditionals|condicionales]], [[have to|have to]], [[could|could]].',
  },
  {
    question: '[[The|El]] [[speaker|hablante]] [[will|irá]] [[go|ir]] [[to|al]] [[dentist|dentista]] [[tomorrow|mañana]].',
    options: ['[[True|Verdadero]]', '[[False|Falso]]'],
    correctAnswer: 'True',
    explanation: '[[True|Verdadero]]. "[[Tomorrow I will go to the dentist|Mañana iré al dentista]]".',
  },
  {
    question: '[[The|El]] [[speaker|hablante]] [[has to|tiene que]] [[work|trabajar]] [[tomorrow|mañana]].',
    options: ['[[True|Verdadero]]', '[[False|Falso]]'],
    correctAnswer: 'False',
    explanation: '[[False|Falso]]. [[He|Él]] [[don\'t have to|no tiene que]] [[work|trabajar]] [[tomorrow|mañana]].',
  },
  {
    question: '[[What|Cuál]] [[is|es]] [[the|el]] [[main|principal]] [[topic|tema]] [[of|del]] [[this|este]] [[audio|audio]]?',
    options: ['[[Past|Eventos]] [[events|pasados]] [[only|solo]]', '[[Module 3 Review|Repaso Módulo 3]]: [[future|futuro]], [[conditionals|condicionales]], [[have to|have to]], [[could|could]]', '[[Health|Salud]]', '[[Work|Trabajo]]'],
    correctAnswer: 1,
    explanation: '[[The|El]] [[audio|audio]] [[reviews|repasa]] [[all|todos]] [[Module|Módulo]] [[3|3]] [[topics|temas]].',
  },
  {
    question: '[[First|Primer]] [[conditional|condicional]] [[uses|usa]] [[will|will]] [[in|en]] [[the|la]] [[result|resultado]].',
    options: ['[[True|Verdadero]]', '[[False|Falso]]'],
    correctAnswer: 'True',
    explanation: '[[True|Verdadero]]. [[If|Si]] + [[present|presente]], [[will|will]] + [[infinitive|infinitivo]].',
  },
  {
    question: '[[How many|Cuántas]] [[grammar|gramaticales]] [[structures|estructuras]] [[does|menciona]] [[the|el]] [[speaker|hablante]] [[mention|mencionar]]?',
    options: ['[[one|una]]', '[[two|dos]]', '[[three|tres]]', '[[four|cuatro]] [[or more|o más]]'],
    correctAnswer: 3,
    explanation: '[[Future|Futuro]], [[first conditional|primer condicional]], [[zero conditional|condicional cero]], [[have to|have to]], [[could|could]] = [[5|cinco]].',
  },
  {
    question: '[[Could you speak more slowly?|¿Podrías hablar más despacio?]] [[is|es]] [[a|una]] [[polite|educada]] [[request|petición]].',
    options: ['[[True|Verdadero]]', '[[False|Falso]]'],
    correctAnswer: 'True',
    explanation: '[[True|Verdadero]]. [[Could you...?|¿Podrías...?]] = [[polite|educada]] [[request|petición]].',
  },
  {
    question: '[[Which|Cuál]] [[topic|tema]] [[from|de]] [[Module|Módulo]] [[3|3]] [[is|está]] [[NOT|NO]] [[in|en]] [[the|el]] [[audio|audio]]?',
    options: ['[[Future|Futuro]] [[with|con]] [[will|will]]', '[[First conditional|Primer condicional]]', '[[Past simple|Pasado simple]] [[only|solo]]', '[[Could|Could]]'],
    correctAnswer: 2,
    explanation: '[[Past|Pasado]] [[simple|simple]] [[only|solo]] [[is|está]] [[not|no]] [[a|un]] [[Module|Módulo]] [[3|3]] [[topic|tema]]. [[Could|Could]] [[is|es]] [[past ability|habilidad en pasado]] [[which|que]] [[uses|usa]] [[past|pasado]] [[context|contexto]].',
  },
];

export const UNIT_30_LESSON_4_LISTENING: Exercise[] = QUESTIONS.map((q, i) => ({
  id: `a2-u30-l4-l${i + 1}`,
  type: 'listening',
  level: 'A2',
  topic: 'Module 3 Review',
  difficulty: 'easy',
  transcript: LISTENING_TRANSCRIPT,
  content: {
    title: LESSON_TITLE,
    instructions: INSTRUCTIONS,
    questions: [q],
  },
  topicName: 'Listening',
}));
