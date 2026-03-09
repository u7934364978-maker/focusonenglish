/**
 * Unidad 20 — Lección 4: Comprensión auditiva (Module 2 review)
 * 15 actividades: 1 audio (transcripción) + 15 preguntas
 */

import { Exercise } from '@/lib/exercise-generator';

const LESSON_TITLE = '[[Listening|Comprensión auditiva]]';
const LISTENING_TRANSCRIPT = `[[Hi|Hola]]! [[I|Yo]] [[am|soy]] [[Maria|María]]. [[I|Yo]] [[have|he]] [[lived|vivido]] [[in|en]] [[Valencia|Valencia]] [[for|durante]] [[four years|cuatro años]]. [[I|Yo]] [[have|he]] [[worked|trabajado]] [[at|en]] [[a|un]] [[hospital|hospital]] [[since|desde]] [[2020|2020]]. [[Yesterday|Ayer]] [[I|yo]] [[was|estaba]] [[cooking|cocinando]] [[dinner|cena]] [[when|cuando]] [[my|mi]] [[sister|hermana]] [[called|llamó]]. [[We|Nosotros]] [[were|estábamos]] [[talking|hablando]] [[while|mientras]] [[I|yo]] [[was|estaba]] [[finishing|terminando]] [[the|la]] [[food|comida]]. [[How often|Con qué frecuencia]] [[do|hago]] [[I|yo]] [[exercise|ejercicio]]? [[I|Yo]] [[go|voy]] [[swimming|a nadar]] [[twice|dos veces]] [[a|a]] [[week|semana]]. [[I|Yo]] [[have|he]] [[already|ya]] [[visited|visitado]] [[five|cinco]] [[countries|países]] [[this|este]] [[year|año]] [[but|pero]] [[I|yo]] [[haven\'t|no he]] [[been|estado]] [[to|a]] [[Japan|Japón]] [[yet|aún]]. [[I|Yo]] [[feel|me siento]] [[happy|feliz]] [[because|porque]] [[I|yo]] [[have|tengo]] [[a|una]] [[good|buena]] [[job|trabajo]] [[and|y]] [[a|una]] [[wonderful|maravillosa]] [[family|familia]].`;

const INSTRUCTIONS = 'Escucha el audio de abajo. Puedes leer la transcripción después de escuchar. Después responde las preguntas.';

const QUESTIONS = [
  {
    question: '[[What|Cuál]] [[is|es]] [[her|su]] [[name|nombre]]?',
    options: ['[[Marta|Marta]]', '[[Maria|María]]', '[[Monica|Mónica]]', '[[Megan|Megan]]'],
    correctAnswer: 1,
    explanation: '[[She|Ella]] [[says|dice]]: "[[I am Maria|Soy María]]".',
  },
  {
    question: '[[How long|Cuánto tiempo]] [[has|ha]] [[she|ella]] [[lived|vivido]] [[in|en]] [[Valencia|Valencia]]?',
    options: ['[[three years|tres años]]', '[[four years|cuatro años]]', '[[five years|cinco años]]', '[[two years|dos años]]'],
    correctAnswer: 1,
    explanation: '[[She|Ella]] [[says|dice]] "[[I have lived in Valencia for four years|He vivido en Valencia durante cuatro años]]".',
  },
  {
    question: '[[Since|Desde]] [[when|cuándo]] [[has|ha]] [[she|ella]] [[worked|trabajado]] [[at|en]] [[the|el]] [[hospital|hospital]]?',
    options: ['[[2019|2019]]', '[[2020|2020]]', '[[2021|2021]]', '[[2018|2018]]'],
    correctAnswer: 1,
    explanation: '[[She|Ella]] [[says|dice]] "[[I have worked at a hospital since 2020|He trabajado en un hospital desde 2020]]".',
  },
  {
    question: '[[What|Qué]] [[was|estaba]] [[she|ella]] [[doing|haciendo]] [[when|cuando]] [[her|su]] [[sister|hermana]] [[called|llamó]]?',
    options: ['[[sleeping|durmiendo]]', '[[cooking|cocinando]] [[dinner|cena]]', '[[watching|viendo]] [[TV|televisión]]', '[[reading|leyendo]]'],
    correctAnswer: 1,
    explanation: '[[She|Ella]] [[says|dice]] "[[I was cooking dinner when my sister called|Estaba cocinando la cena cuando mi hermana llamó]]".',
  },
  {
    question: '[[How often|Con qué frecuencia]] [[does|va]] [[she|ella]] [[go|ir]] [[swimming|a nadar]]?',
    options: ['[[once a week|una vez a la semana]]', '[[twice a week|dos veces a la semana]]', '[[three times a week|tres veces a la semana]]', '[[every day|cada día]]'],
    correctAnswer: 1,
    explanation: '[[She|Ella]] [[says|dice]] "[[I go swimming twice a week|Voy a nadar dos veces a la semana]]".',
  },
  {
    question: '[[How many|Cuántos]] [[countries|países]] [[has|ha]] [[she|ella]] [[visited|visitado]] [[this|este]] [[year|año]]?',
    options: ['[[three|tres]]', '[[four|cuatro]]', '[[five|cinco]]', '[[six|seis]]'],
    correctAnswer: 2,
    explanation: '[[She|Ella]] [[says|dice]] "[[I have already visited five countries this year|Ya he visitado cinco países este año]]".',
  },
  {
    question: '[[Has|Ha]] [[she|ella]] [[been|estado]] [[to|a]] [[Japan|Japón]] [[yet|aún]]?',
    options: ['[[yes|sí]]', '[[no|no]]', '[[maybe|quizás]]', '[[not mentioned|no mencionado]]'],
    correctAnswer: 1,
    explanation: '[[She|Ella]] [[says|dice]] "[[I haven\'t been to Japan yet|Aún no he estado en Japón]]".',
  },
  {
    question: '[[Maria|María]] [[was|estaba]] [[sleeping|durmiendo]] [[when|cuando]] [[her|su]] [[sister|hermana]] [[called|llamó]].',
    options: ['[[True|Verdadero]]', '[[False|Falso]]'],
    correctAnswer: 'False',
    explanation: '[[False|Falso]]. [[She|Ella]] [[was|estaba]] [[cooking|cocinando]] [[dinner|cena]], [[not|no]] [[sleeping|durmiendo]].',
  },
  {
    question: '[[Maria|María]] [[has|ha]] [[already|ya]] [[visited|visitado]] [[five|cinco]] [[countries|países]] [[this|este]] [[year|año]].',
    options: ['[[True|Verdadero]]', '[[False|Falso]]'],
    correctAnswer: 'True',
    explanation: '[[True|Verdadero]]. [[She|Ella]] [[says|dice]] "[[I have already visited five countries this year|Ya he visitado cinco países este año]]".',
  },
  {
    question: '[[Maria|María]] [[feels|se siente]] [[happy|feliz]] [[because|porque]] [[she|ella]] [[has|tiene]] [[a|un]] [[good|buen]] [[job|trabajo]] [[and|y]] [[a|una]] [[wonderful|maravillosa]] [[family|familia]].',
    options: ['[[True|Verdadero]]', '[[False|Falso]]'],
    correctAnswer: 'True',
    explanation: '[[True|Verdadero]]. [[She|Ella]] [[says|dice]] "[[I feel happy because I have a good job and a wonderful family|Me siento feliz porque tengo un buen trabajo y una familia maravillosa]]".',
  },
  {
    question: '[[Maria|María]] [[works|trabaja]] [[at|en]] [[a|una]] [[school|escuela]].',
    options: ['[[True|Verdadero]]', '[[False|Falso]]'],
    correctAnswer: 'False',
    explanation: '[[False|Falso]]. [[She|Ella]] [[works|trabaja]] [[at|en]] [[a|un]] [[hospital|hospital]], [[not|no]] [[a|una]] [[school|escuela]].',
  },
  {
    question: '[[What|Cuál]] [[is|es]] [[the|el]] [[main|principal]] [[topic|tema]] [[of|del]] [[this|este]] [[audio|audio]]?',
    options: ['[[A|Un]] [[trip|viaje]] [[to|a]] [[the|el]] [[beach|playa]]', '[[Maria\'s|María]] [[life|vida]] [[with|con]] [[mix|mezcla]] [[of|de]] [[grammar|gramática]] [[from|de]] [[Module 2|Módulo 2]]', '[[A|Una]] [[birthday|cumpleaños]] [[party|fiesta]]', '[[School|Escuela]] [[life|vida]]'],
    correctAnswer: 1,
    explanation: '[[The|El]] [[audio|audio]] [[uses|usa]] Present Perfect, Past Simple, Past Continuous, For/Since, How questions.',
  },
  {
    question: '[[Who|Quién]] [[called|llamó]] [[Maria|María]] [[yesterday|ayer]]?',
    options: ['[[her|su]] [[friend|amiga]]', '[[her|su]] [[sister|hermana]]', '[[her|su]] [[mother|madre]]', '[[her|su]] [[boss|jefe]]'],
    correctAnswer: 1,
    explanation: '[[She|Ella]] [[says|dice]] "[[My sister called|Mi hermana llamó]]".',
  },
  {
    question: '[[What|Qué]] [[were|estaban]] [[they|ellos]] [[doing|haciendo]] [[while|mientras]] [[talking|hablando]]?',
    options: ['[[Maria|María]] [[was|estaba]] [[finishing|terminando]] [[the|la]] [[food|comida]]', '[[Maria|María]] [[was|estaba]] [[sleeping|durmiendo]]', '[[Maria|María]] [[was|estaba]] [[running|corriendo]]', '[[Maria|María]] [[was|estaba]] [[at|en]] [[work|trabajo]]'],
    correctAnswer: 0,
    explanation: '[[She|Ella]] [[says|dice]] "[[We were talking while I was finishing the food|Estábamos hablando mientras terminaba la comida]]".',
  },
  {
    question: '[[What|Qué]] [[word|palabra]] [[does|usa]] [[Maria|María]] [[use|usar]] [[with|con]] "[[haven\'t|no he]] [[been|estado]]" [[to|a]] [[Japan|Japón]]?',
    options: ['[[already|ya]]', '[[yet|aún]]', '[[never|nunca]]', '[[ever|alguna vez]]'],
    correctAnswer: 1,
    explanation: '[[Yet|Aún]] [[in|en]] [[negative|negativas]]: [[I haven\'t been to Japan yet|Aún no he estado en Japón]].',
  },
];

export const UNIT_20_LESSON_4_LISTENING: Exercise[] = QUESTIONS.map((q, i) => ({
  id: `a2-u20-l4-l${i + 1}`,
  type: 'listening',
  level: 'A2',
  topic: 'Module 2 Review',
  difficulty: 'easy',
  transcript: LISTENING_TRANSCRIPT,
  content: {
    title: LESSON_TITLE,
    instructions: INSTRUCTIONS,
    questions: [q],
  },
  topicName: 'Listening',
}));
