/**
 * Unidad 14 — Lección 4: Comprensión auditiva (Just, acciones recientes)
 * 15 actividades: 1 audio (transcripción) + 15 preguntas
 */

import { Exercise } from '@/lib/exercise-generator';

const LESSON_TITLE = '[[Listening|Comprensión auditiva]]';
const LISTENING_TRANSCRIPT = `[[Hello|Hola]]! [[I|Yo]] [[am|soy]] [[Tom|Tom]]. [[I|Yo]] [[have|he]] [[just|acabar de]] [[woken up|despertado]]. [[It|Es]] [[is|es]] [[seven|siete]] [[o\'clock|en punto]] [[in|por]] [[the|la]] [[morning|mañana]]. [[I|Yo]] [[have|he]] [[just|acabar de]] [[received|recibido]] [[a|un]] [[call|llamada]] [[from|de]] [[my|mi]] [[brother|hermano]]. [[He|Él]] [[has|ha]] [[just|acabar de]] [[arrived|llegado]] [[at|en]] [[the|el]] [[airport|aeropuerto]] [[and|y]] [[needs|necesita]] [[a|un]] [[lift|aventón]] [[home|casa]]. [[I|Yo]] [[have|he]] [[just|acabar de]] [[had|tomado]] [[breakfast|desayuno]] [[too|tambien]]. [[I|Yo]] [[am|estoy]] [[ready|listo]] [[to|para]] [[go|ir]] [[and|y]] [[pick|recoger]] [[him|a él]] [[up|a él]]. [[I|Yo]] [[am|estoy]] [[excited|emocionado]] [[because|porque]] [[I|yo]] [[haven\'t|no he]] [[seen|visto]] [[him|a él]] [[for|desde]] [[six|seis]] [[months|meses]].`;

const INSTRUCTIONS = 'Escucha el audio de abajo. Puedes leer la transcripción después de escuchar. Después responde las preguntas.';

const QUESTIONS = [
  {
    question: '[[What|Cuál]] [[is|es]] [[his|su]] [[name|nombre]]?',
    options: ['[[Tim|Tim]]', '[[Tom|Tom]]', '[[John|John]]', '[[Jim|Jim]]'],
    correctAnswer: 1,
    explanation: '[[He|Él]] [[says|dice]]: "[[I am Tom|Soy Tom]]".',
  },
  {
    question: '[[What|Qué]] [[has|ha]] [[he|él]] [[just|acabar de]] [[done|hecho]]?',
    options: ['[[gone|ido]] [[to|a]] [[work|trabajo]]', '[[woken up|despertado]]', '[[had|tomado]] [[lunch|comida]]', '[[left|salido]] [[home|casa]]'],
    correctAnswer: 1,
    explanation: '[[He|Él]] [[says|dice]] "[[I have just woken up|Acabo de despertarme]]".',
  },
  {
    question: '[[What|Qué]] [[time|hora]] [[is|es]] [[it|es]]?',
    options: ['[[six|seis]] [[o\'clock|en punto]]', '[[seven|siete]] [[o\'clock|en punto]]', '[[eight|ocho]] [[o\'clock|en punto]]', '[[nine|nueve]] [[o\'clock|en punto]]'],
    correctAnswer: 1,
    explanation: '[[He|Él]] [[says|dice]] "[[It is seven o\'clock in the morning|Son las siete de la mañana]]".',
  },
  {
    question: '[[What|Qué]] [[has|ha]] [[he|él]] [[just|acabar de]] [[received|recibido]]?',
    options: ['[[a|un]] [[letter|carta]]', '[[a|un]] [[call|llamada]] [[from|de]] [[his|su]] [[brother|hermano]]', '[[a|un]] [[message|mensaje]]', '[[a|un]] [[package|paquete]]'],
    correctAnswer: 1,
    explanation: '[[He|Él]] [[says|dice]] "[[I have just received a call from my brother|Acabo de recibir una llamada de mi hermano]]".',
  },
  {
    question: '[[Where|Dónde]] [[has|ha]] [[his|su]] [[brother|hermano]] [[just|acabar de]] [[arrived|llegado]]?',
    options: ['[[at|en]] [[the|la]] [[station|estación]]', '[[at|en]] [[the|el]] [[airport|aeropuerto]]', '[[at|en]] [[home|casa]]', '[[at|en]] [[the|el]] [[bus stop|parada de autobús]]'],
    correctAnswer: 1,
    explanation: '[[He|Él]] [[says|dice]] "[[He has just arrived at the airport|Acaba de llegar al aeropuerto]]".',
  },
  {
    question: '[[What|Qué]] [[does|necesita]] [[his|su]] [[brother|hermano]] [[need|necesitar]]?',
    options: ['[[money|dinero]]', '[[a|un]] [[lift|aventón]] [[home|casa]]', '[[food|comida]]', '[[a|una]] [[hotel|hotel]] [[room|habitación]]'],
    correctAnswer: 1,
    explanation: '[[He|Él]] [[says|dice]] "[[He needs a lift home|Necesita un aventón a casa]]".',
  },
  {
    question: '[[What|Qué]] [[has|ha]] [[Tom|Tom]] [[just|acabar de]] [[had|tomado]]?',
    options: ['[[lunch|comida]]', '[[dinner|cena]]', '[[breakfast|desayuno]]', '[[coffee|café]]'],
    correctAnswer: 2,
    explanation: '[[He|Él]] [[says|dice]] "[[I have just had breakfast|Acabo de desayunar]]".',
  },
  {
    question: '[[How|Cuánto]] [[long|tiempo]] [[hasn\'t|no ha]] [[Tom|Tom]] [[seen|visto]] [[his|su]] [[brother|hermano]]?',
    options: ['[[one|un]] [[month|mes]]', '[[three|tres]] [[months|meses]]', '[[six|seis]] [[months|meses]]', '[[one|un]] [[year|año]]'],
    correctAnswer: 2,
    explanation: '[[He|Él]] [[says|dice]] "[[I haven\'t seen him for six months|No lo he visto desde hace seis meses]]".',
  },
  {
    question: '[[Tom|Tom]] [[has|ha]] [[just|acabar de]] [[gone|ido]] [[to|a]] [[work|trabajo]].',
    options: ['[[True|Verdadero]]', '[[False|Falso]]'],
    correctAnswer: 'False',
    explanation: '[[False|Falso]]. [[He|Él]] [[has|ha]] [[just|acabar de]] [[woken up|despertado]] [[and|y]] [[will|va]] [[go|ir]] [[to|a]] [[pick|recoger]] [[his|su]] [[brother|hermano]].',
  },
  {
    question: '[[Tom|Tom]] [[is|está]] [[excited|emocionado]] [[to|de]] [[see|ver]] [[his|su]] [[brother|hermano]].',
    options: ['[[True|Verdadero]]', '[[False|Falso]]'],
    correctAnswer: 'True',
    explanation: '[[True|Verdadero]]. [[He|Él]] [[says|dice]] "[[I am excited because I haven\'t seen him for six months|Estoy emocionado porque no lo he visto desde hace seis meses]]".',
  },
  {
    question: '[[Tom|Tom]] [[has|ha]] [[just|acabar de]] [[had|tomado]] [[breakfast|desayuno]].',
    options: ['[[True|Verdadero]]', '[[False|Falso]]'],
    correctAnswer: 'True',
    explanation: '[[True|Verdadero]]. [[He|Él]] [[says|dice]] "[[I have just had breakfast|Acabo de desayunar]]".',
  },
  {
    question: '[[Tom|Tom]] [[is|está]] [[at|en]] [[the|el]] [[airport|aeropuerto]] [[now|ahora]].',
    options: ['[[True|Verdadero]]', '[[False|Falso]]'],
    correctAnswer: 'False',
    explanation: '[[False|Falso]]. [[He|Él]] [[is|está]] [[at|en]] [[home|casa]] [[and|y]] [[is|está]] [[ready|listo]] [[to|para]] [[go|ir]] [[and|y]] [[pick|recoger]] [[him|a él]].',
  },
  {
    question: '[[What|Cuál]] [[is|es]] [[the|el]] [[main|principal]] [[topic|tema]] [[of|del]] [[this|este]] [[audio|audio]]?',
    options: ['[[A|Un]] [[trip|viaje]] [[to|a]] [[the|el]] [[beach|playa]]', '[[Recent|Recientes]] [[actions|acciones]] [[with|con]] [[just|acabar de]] [[and|y]] [[picking up|recoger]] [[brother|hermano]]', '[[A|Una]] [[job|trabajo]] [[interview|entrevista]]', '[[School|Escuela]] [[life|vida]]'],
    correctAnswer: 1,
    explanation: '[[The|El]] [[audio|audio]] [[is|es]] [[about|sobre]] [[Tom|Tom]] [[and|y]] [[recent|recientes]] [[actions|acciones]] [[with|con]] [[just|acabar de]].',
  },
  {
    question: '[[Who|Quién]] [[is|es]] [[speaking|habla]] [[in|en]] [[the|el]] [[audio|audio]]?',
    options: ['[[Tom\'s|su]] [[brother|hermano]]', '[[Tom|Tom]] [[himself|él mismo]]', '[[A|Un]] [[friend|amigo]]', '[[A|Un]] [[taxi|taxi]] [[driver|conductor]]'],
    correctAnswer: 1,
    explanation: '[[Tom|Tom]] [[speaks|habla]] [[about|sobre]] [[himself|sí mismo]] ("[[I am Tom|Soy Tom]]", "[[I have just|Acabo de]]").',
  },
  {
    question: '[[What|Qué]] [[is|está]] [[Tom|Tom]] [[ready|listo]] [[to|para]] [[do|hacer]]?',
    options: ['[[go|ir]] [[to|a]] [[work|trabajo]]', '[[go|ir]] [[and|y]] [[pick|recoger]] [[his|su]] [[brother|hermano]] [[up|a él]]', '[[have|tomar]] [[breakfast|desayuno]]', '[[sleep|dormir]] [[more|más]]'],
    correctAnswer: 1,
    explanation: '[[He|Él]] [[says|dice]] "[[I am ready to go and pick him up|Estoy listo para ir a recogerlo]]".',
  },
];

export const UNIT_14_LESSON_4_LISTENING: Exercise[] = QUESTIONS.map((q, i) => ({
  id: `a2-u14-l4-l${i + 1}`,
  type: 'listening',
  level: 'A2',
  topic: 'Present Perfect Just',
  difficulty: 'easy',
  transcript: LISTENING_TRANSCRIPT,
  content: {
    title: LESSON_TITLE,
    instructions: INSTRUCTIONS,
    questions: [q],
  },
  topicName: 'Listening',
}));
