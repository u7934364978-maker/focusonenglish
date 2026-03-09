/**
 * Unidad 34 — Lección 3: Comprensión lectora (Future with 'Will': Offers & Promises)
 * 15 actividades: 1 texto + 15 preguntas
 */

import { Exercise } from '@/lib/exercise-generator';

const LESSON_TITLE = '[[Reading|Comprensión lectora]]';
const READING_TRANSCRIPT = `[[Dear|Querido]] [[Sarah|Sarah]], [[I|Yo]] [[am|estoy]] [[writing|escribiendo]] [[to|para]] [[tell|decirte]] [[you|te]] [[about|sobre]] [[my|mi]] [[new|nuevo]] [[job|trabajo]]. [[I|Yo]] [[start|empiezo]] [[next|el próximo]] [[Monday|lunes]]. [[I|Yo]] [[will|te]] [[call|llamaré]] [[you|te]] [[as soon as|tan pronto como]] [[I|yo]] [[finish|termine]] [[my|mi]] [[first|primer]] [[day|día]]. [[I|Yo]] [[promise|prometo]] [[I|yo]] [[will|te]] [[help|ayudaré]] [[you|te]] [[with|con]] [[your|tu]] [[project|proyecto]] [[when|cuando]] [[you|tú]] [[need|necesites]] [[me|me]]. [[I|Yo]] [[will|nunca]] [[never|te]] [[forget|olvidaré]] [[your|tu]] [[kindness|amabilidad]] [[when|cuando]] [[I|yo]] [[was|estaba]] [[sick|enfermo]]. [[I|Yo]] [[will|te]] [[send|enviaré]] [[you|te]] [[the|los]] [[documents|documentos]] [[tomorrow|mañana]]. [[I|Yo]] [[won't|no]] [[let|dejaré]] [[you|te]] [[down|abajo]]. [[Your|Tu]] [[friend|amigo]], [[Tom|Tom]]`;

const INSTRUCTIONS = 'Lee el texto de abajo. Después responde las preguntas.';

const QUESTIONS = [
  { question: '[[Who|Quién]] [[is|está]] [[writing|escribiendo]] [[the|la]] [[letter|carta]]?', options: ['[[Sarah|Sarah]]', '[[Tom|Tom]]', '[[A|Un]] [[boss|jefe]]', '[[A|Un]] [[teacher|profesor]]'], correctAnswer: 1, explanation: '[[The|El]] [[letter|carta]] [[says|dice]] "[[Your friend, Tom|Tu amigo, Tom]]".' },
  { question: '[[When|Cuándo]] [[does|empieza]] [[Tom|Tom]] [[start|su]] [[his|nuevo]] [[new|trabajo]] [[job|?]]', options: ['[[this|este]] [[Monday|lunes]]', '[[next|el próximo]] [[Monday|lunes]]', '[[tomorrow|mañana]]', '[[next|la próxima]] [[week|semana]]'], correctAnswer: 1, explanation: '[[He|Él]] [[says|dice]] "[[I start next Monday|Empiezo el próximo lunes]]".' },
  { question: '[[What|Qué]] [[will|hará]] [[Tom|Tom]] [[do|Tom]] [[as soon as|tan pronto como]] [[he|él]] [[finishes|termine]] [[his|su]] [[first|primer]] [[day|día]]?', options: ['[[visit|visitar]] [[Sarah|Sarah]]', '[[call|llamar]] [[Sarah|Sarah]]', '[[send|enviar]] [[an|un]] [[email|email]]', '[[rest|descansar]]'], correctAnswer: 1, explanation: '[[He|Él]] [[says|dice]] "[[I will call you as soon as I finish|Te llamaré tan pronto como termine]]".' },
  { question: '[[What|Qué]] [[does|promete]] [[Tom|Tom]] [[promise|Tom]] [[to|a]] [[do|hacer]]?', options: ['[[visit|visitar]] [[Sarah|Sarah]]', '[[help|ayudar]] [[Sarah|Sarah]] [[with|con]] [[her|su]] [[project|proyecto]]', '[[pay|pagar]] [[Sarah|Sarah]]', '[[travel|viajar]] [[with|con]] [[Sarah|Sarah]]'], correctAnswer: 1, explanation: '[[He|Él]] [[says|dice]] "[[I will help you with your project|Te ayudaré con tu proyecto]]".' },
  { question: '[[Why|Por qué]] [[is|está]] [[Tom|Tom]] [[grateful|agradecido]] [[to|a]] [[Sarah|Sarah]]?', options: ['[[She|Ella]] [[gave|le dio]] [[him|dinero]] [[money|.]]', '[[She|Ella]] [[was|fue]] [[kind|amable]] [[when|cuando]] [[he|él]] [[was|estaba]] [[sick|enfermo]]', '[[She|Ella]] [[found|encontró]] [[him|un]] [[a|trabajo]] [[job|.]]', '[[She|Ella]] [[taught|le enseñó]] [[him|inglés]] [[English|.]]'], correctAnswer: 1, explanation: '[[He|Él]] [[says|dice]] "[[I will never forget your kindness when I was sick|Nunca olvidaré tu amabilidad cuando estaba enfermo]]".' },
  { question: '[[What|Qué]] [[will|enviará]] [[Tom|Tom]] [[send|Tom]] [[tomorrow|mañana]]?', options: ['[[a|una]] [[gift|regalo]]', '[[the|los]] [[documents|documentos]]', '[[money|dinero]]', '[[flowers|flores]]'], correctAnswer: 1, explanation: '[[He|Él]] [[says|dice]] "[[I will send you the documents tomorrow|Te enviaré los documentos mañana]]".' },
  { question: '[[Tom|Tom]] [[uses|usa]] [[will|will]] [[for|para]] [[promises|promesas]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'True', explanation: '[[True|Verdadero]]. [[He|Él]] [[makes|hace]] [[several|varias]] [[promises|promesas]] [[with|con]] [[will|will]].' },
  { question: '[[Tom|Tom]] [[uses|usa]] [[will|will]] [[for|para]] [[offers|ofertas]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'True', explanation: '[[True|Verdadero]]. [[He|Él]] [[offers|ofrece]] [[to|a]] [[help|ayudar]] [[Sarah|Sarah]].' },
  { question: '[[Tom|Tom]] [[will|no]] [[not|olvidará]] [[forget|la]] [[Sarah|amabilidad]] [[kindness|de Sarah]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'True', explanation: '[[True|Verdadero]]. [[He|Él]] [[says|dice]] "[[I will never forget|Nunca olvidaré]]".' },
  { question: '[[What|Cuál]] [[is|es]] [[the|el]] [[main|principal]] [[topic|tema]] [[of|del]] [[this|este]] [[text|texto]]?', options: ['[[Past|Eventos]] [[events|pasados]]', '[[Promises|Promesas]] [[and|y]] [[offers|ofertas]] [[using|usando]] [[will|will]]', '[[Weather|Tiempo]]', '[[Shopping|Compras]]'], correctAnswer: 1, explanation: '[[The|El]] [[text|texto]] [[is|es]] [[about|sobre]] [[promises|promesas]] [[and|y]] [[offers|ofertas]].' },
  { question: '[[Tom|Tom]] [[says|dice]] [[he|él]] [[won\'t|no]] ____ [[let|dejará]] [[you|te]] ____ [[down|abajo]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'True', explanation: '[[True|Verdadero]]. [[He|Él]] [[promises|promete]] [[not|no]] [[to|a]] [[let|dejar]] [[Sarah|Sarah]] [[down|abajo]].' },
  { question: '[[How many|Cuántas]] [[promises|promesas]] [[does|hace]] [[Tom|Tom]] [[make|Tom]] [[in|en]] [[the|la]] [[letter|carta]]?', options: ['[[one|una]]', '[[two|dos]]', '[[three|tres]]', '[[four|cuatro]] [[or|o]] [[more|más]]'], correctAnswer: 3, explanation: '[[Several|Varias]]: [[call|llamar]], [[help|ayudar]], [[never forget|nunca olvidar]], [[send documents|enviar documentos]], [[won\'t let down|no defraudar]].' },
  { question: '[[When|Cuándo]] [[will|enviará]] [[Tom|Tom]] [[send|Tom]] [[the|los]] [[documents|documentos]]?', options: ['[[today|hoy]]', '[[tomorrow|mañana]]', '[[next|la próxima]] [[week|semana]]', '[[next|el próximo]] [[month|mes]]'], correctAnswer: 1, explanation: '[[He|Él]] [[says|dice]] "[[tomorrow|mañana]]".' },
  { question: '[[What|Qué]] [[kind|tipo]] [[of|de]] [[text|texto]] [[is|es]] [[this|este]]?', options: ['[[A|Una]] [[story|historia]]', '[[A|Una]] [[letter|carta]]', '[[A|Un]] [[advertisement|anuncio]]', '[[A|Una]] [[recipe|receta]]'], correctAnswer: 1, explanation: '[[It|Es]] [[is|una]] [[a| carta]] [[letter|personal]].' },
  { question: '[[Tom|Tom]] [[feels|siente]] [[grateful|agradecido]] [[to|hacia]] [[Sarah|Sarah]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'True', explanation: '[[True|Verdadero]]. [[He|Él]] [[thanks|agradece]] [[her|su]] [[kindness|amabilidad]].' },
];

export const UNIT_34_LESSON_3_READING: Exercise[] = QUESTIONS.map((q, i) => ({
  id: `a2-u34-l3-r${i + 1}`,
  type: 'reading',
  level: 'A2',
  topic: "Future with 'Will': Offers & Promises",
  difficulty: 'easy',
  transcript: READING_TRANSCRIPT,
  content: { title: LESSON_TITLE, instructions: INSTRUCTIONS, questions: [q] },
  topicName: 'Reading',
}));
