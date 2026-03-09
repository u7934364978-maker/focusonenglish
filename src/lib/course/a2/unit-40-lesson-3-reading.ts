/**
 * Unidad 40 — Lección 3: Comprensión lectora (Module 4 Review)
 * 15 actividades: 1 texto + 15 preguntas - temas mixtos
 */

import { Exercise } from '@/lib/exercise-generator';

const LESSON_TITLE = '[[Reading|Comprensión lectora]]';
const READING_TRANSCRIPT = `[[My|Mi]] [[name|nombre]] [[is|es]] [[Emma|Emma]] [[and|y]] [[I|yo]] [[love|me encanta]] [[travelling|viajar]]. [[Next|El próximo]] [[month|mes]] [[I|yo]] [[am going to|voy a]] [[visit|visitar]] [[Japan|Japón]] [[for|por]] [[the|la]] [[first|primera]] [[time|vez]]. [[I|Yo]] [[have|he]] [[already|ya]] [[booked|reservado]] [[my|mi]] [[flight|vuelo]] [[and|y]] [[my|mi]] [[hotel|hotel]]. [[I|Yo]] [[hope to|espero]] [[learn|aprender]] [[some|algo de]] [[Japanese|japonés]] [[before|antes]] [[I|yo]] [[go|vaya]]. [[I|Yo]] [[would like to|me gustaría]] [[see|ver]] [[Tokyo|Tokio]] [[and|y]] [[Kyoto|Kioto]]. [[I|Yo]] [[dream of|sueño con]] [[eating|comer]] [[sushi|sushi]] [[every|cada]] [[day|día]]! [[When|Cuando]] [[I|yo]] [[arrive|llegue]], [[I|yo]] [[will|llamaré]] [[call|]] [[my|a mi]] [[family|familia]]. [[As soon as|Tan pronto como]] [[I|yo]] [[get|llegue]] [[home|a casa]], [[I|yo]] [[will|mostraré]] [[show|]] [[them|les]] [[my|mis]] [[photos|fotos]]. [[I|Yo]] [[think|creo]] [[it|será]] [[will|será]] [[be|]] [[amazing|increíble]]!`;

const INSTRUCTIONS = 'Lee el texto de abajo. Después responde las preguntas.';

const QUESTIONS = [
  { question: '[[What|Qué]] [[is|es]] [[the|el]] [[writer\'s|de la autora]] [[name|nombre]]?', options: ['[[Anna|Anna]]', '[[Emma|Emma]]', '[[Eva|Eva]]', '[[Elena|Elena]]'], correctAnswer: 1, explanation: '[[The|El]] [[text|texto]] [[says|dice]] "[[My name is Emma|Mi nombre es Emma]]".' },
  { question: '[[Where|Dónde]] [[is|va]] [[the|el]] [[writer|autor]] [[going to|a]] [[travel|viajar]] [[next|el próximo]] [[month|mes]]?', options: ['[[China|China]]', '[[Japan|Japón]]', '[[Korea|Corea]]', '[[Thailand|Tailandia]]'], correctAnswer: 1, explanation: '[[She|Ella]] [[says|dice]] "[[I am going to visit Japan|Voy a visitar Japón]]".' },
  { question: '[[Has|Ha]] [[the|el]] [[writer|autor]] [[booked|reservado]] [[her|su]] [[flight|vuelo]]?', options: ['[[No|No]]', '[[Yes|Sí]]', '[[Maybe|Quizás]]', '[[Not yet|Aún no]]'], correctAnswer: 1, explanation: '[[She|Ella]] [[says|dice]] "[[I have already booked my flight|Ya he reservado mi vuelo]]".' },
  { question: '[[What|Qué]] [[does|espera]] [[the|el]] [[writer|autor]] [[hope to|esperar]] [[learn|aprender]]?', options: ['[[Chinese|Chino]]', '[[Japanese|Japonés]]', '[[Korean|Coreano]]', '[[English|Inglés]]'], correctAnswer: 1, explanation: '[[She|Ella]] [[says|dice]] "[[I hope to learn some Japanese|Espero aprender algo de japonés]]".' },
  { question: '[[Which|Cuáles]] [[cities|ciudades]] [[would|le gustaría]] [[the|el]] [[writer|autor]] [[like to|gustaría]] [[see|ver]]?', options: ['[[Osaka|Osaka]] [[and|y]] [[Hiroshima|Hiroshima]]', '[[Tokyo|Tokio]] [[and|y]] [[Kyoto|Kioto]]', '[[Nagoya|Nagoya]] [[and|y]] [[Yokohama|Yokohama]]', '[[Fukuoka|Fukuoka]] [[only|solo]]'], correctAnswer: 1, explanation: '[[She|Ella]] [[says|dice]] "[[I would like to see Tokyo and Kyoto|Me gustaría ver Tokio y Kioto]]".' },
  { question: '[[What|Con qué]] [[does|sueña]] [[the|el]] [[writer|autor]] [[dream of|soñar]] [[eating|comer]]?', options: ['[[ramen|ramen]]', '[[sushi|sushi]]', '[[tempura|tempura]]', '[[udon|udon]]'], correctAnswer: 1, explanation: '[[She|Ella]] [[says|dice]] "[[I dream of eating sushi|Sueño con comer sushi]]".' },
  { question: '[[When|Cuándo]] [[will|llamará]] [[the|el]] [[writer|autor]] [[call|llamar]] [[her|a su]] [[family|familia]]?', options: ['[[before|antes]] [[she|ella]] [[leaves|salga]]', '[[when|cuando]] [[she|ella]] [[arrives|llegue]]', '[[after|después]] [[she|ella]] [[returns|vuelva]]', '[[never|nunca]]'], correctAnswer: 1, explanation: '[[She|Ella]] [[says|dice]] "[[When I arrive I will call my family|Cuando llegue llamaré a mi familia]]".' },
  { question: '[[What|Qué]] [[will|mostrará]] [[the|el]] [[writer|autor]] [[show|mostrar]] [[when|cuando]] [[she|ella]] [[gets|llegue]] [[home|a casa]]?', options: ['[[souvenirs|recuerdos]]', '[[her|sus]] [[photos|fotos]]', '[[videos|videos]]', '[[nothing|nada]]'], correctAnswer: 1, explanation: '[[She|Ella]] [[says|dice]] "[[As soon as I get home I will show them my photos|Tan pronto como llegue a casa les mostraré mis fotos]]".' },
  { question: '[[The|El]] [[writer|autor]] [[uses|usa]] [[going to|going to]] [[for|para]] [[plans|planes]] [[already|ya]] [[decided|decididos]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'True', explanation: '[[True|Verdadero]]. [[She|Ella]] [[has|ha]] [[booked|reservado]] [[flight|vuelo]] [[and|y]] [[hotel|hotel]].' },
  { question: '[[The|El]] [[writer|autor]] [[uses|usa]] [[will|will]] [[for|para]] [[offers|ofertas]] [[and|y]] [[promises|promesas]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'True', explanation: '[[True|Verdadero]]. [[She|Ella]] [[will|llamará]] [[call|]] [[and|y]] [[show|mostrará]] [[photos|fotos]].' },
  { question: '[[What|Cuál]] [[is|es]] [[the|el]] [[main|principal]] [[topic|tema]] [[of|del]] [[this|este]] [[text|texto]]?', options: ['[[Past|Viaje]] [[trip|pasado]]', '[[Future|Planes]] [[travel|de viaje]] [[plans|futuros]] [[using|usando]] [[mixed|formas mixtas]] [[future|futuras]]', '[[Weather|Tiempo]]', '[[Food|Comida]]'], correctAnswer: 1, explanation: '[[The|El]] [[text|texto]] [[is|es]] [[about|sobre]] [[future|futuros]] [[travel|viaje]] [[plans|planes]] [[with|con]] [[going to|going to]], [[hope to|hope to]], [[would like to|would like to]], [[dream of|dream of]], [[when|when]], [[as soon as|as soon as]].' },
  { question: '[[How many|Cuántas]] [[future|formas]] [[forms|futuras]] [[does|usa]] [[the|el]] [[writer|autor]] [[use|usar]] [[in|en]] [[the|el]] [[text|texto]]?', options: ['[[one|una]]', '[[two|dos]]', '[[three|tres]]', '[[many|varias]]'], correctAnswer: 3, explanation: '[[Many|Varias]]: [[going to|going to]], [[hope to|hope to]], [[would like to|would like to]], [[dream of|dream of]], [[will|will]], [[when|when]], [[as soon as|as soon as]].' },
  { question: '[[The|El]] [[writer|autor]] [[feels|siente]] [[excited|emocionada]] [[about|por]] [[the|el]] [[trip|viaje]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'True', explanation: '[[True|Verdadero]]. [[She|Ella]] [[says|dice]] "[[I think it will be amazing|Creo que será increíble]]".' },
  { question: '[[Is|Es]] [[this|este]] [[the|el]] [[writer\'s|de la autora]] [[first|primera]] [[time|vez]] [[in|en]] [[Japan|Japón]]?', options: ['[[Yes|Sí]]', '[[No|No]]', '[[Maybe|Quizás]]', '[[Not said|No se dice]]'], correctAnswer: 0, explanation: '[[She|Ella]] [[says|dice]] "[[for the first time|por primera vez]]".' },
  { question: '[[What|Qué]] [[structure|estructura]] [[does|usa]] [[the|el]] [[writer|autor]] [[use|usar]] [[for|para]] [[time|tiempo]] [[clauses|subordinadas]]?', options: ['[[past|pasado]] [[simple|simple]]', '[[when|when]] [[and|y]] [[as soon as|as soon as]] [[with|con]] [[present|presente]] [[simple|simple]]', '[[future|futuro]] [[in|en]] [[both|ambas]] [[clauses|oraciones]]', '[[conditional|condicional]]'], correctAnswer: 1, explanation: '[[When|When]] [[I|I]] [[arrive|arrive]] [[and|and]] [[As soon as|As soon as]] [[I|I]] [[get|get]] [[home|home]] — [[present|presente]] [[simple|simple]] [[in|en]] [[time|tiempo]] [[clauses|subordinadas]].' },
];

export const UNIT_40_LESSON_3_READING: Exercise[] = QUESTIONS.map((q, i) => ({
  id: `a2-u40-l3-r${i + 1}`,
  type: 'reading',
  level: 'A2',
  topic: 'Module 4 Review',
  difficulty: 'easy',
  transcript: READING_TRANSCRIPT,
  content: { title: LESSON_TITLE, instructions: INSTRUCTIONS, questions: [q] },
  topicName: 'Reading',
}));
