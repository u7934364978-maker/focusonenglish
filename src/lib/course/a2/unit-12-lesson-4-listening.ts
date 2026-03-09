/**
 * Unidad 12 — Lección 4: Comprensión auditiva (Present Perfect Ever & Never)
 * 15 actividades: 1 audio (transcripción) + 15 preguntas
 */

import { Exercise } from '@/lib/exercise-generator';

const LESSON_TITLE = '[[Listening|Comprensión auditiva]]';
const LISTENING_TRANSCRIPT = `[[Hi|Hola]]! [[I|Yo]] [[am|soy]] [[doing|haciendo]] [[a|una]] [[survey|encuesta]] [[about|sobre]] [[experiences|experiencias]]. [[Can|¿Puedo]] [[I|yo]] [[ask|preguntar]] [[you|tú]] [[some|algunas]] [[questions|preguntas]]? [[Great|Genial]]! [[Have you ever tried sushi?|¿Has probado sushi alguna vez?]] [[Yes|Sí]], [[I have|he]]. [[I|Yo]] [[tried|probé]] [[it|él]] [[in|en]] [[Tokyo|Tokio]] [[last year|el año pasado]]. [[It|Era]] [[was|era]] [[amazing|increíble]]. [[Have you ever ridden a horse?|¿Has montado a caballo alguna vez?]] [[No|No]], [[I haven\'t|no he]]. [[I|Yo]] [[would|me gustaría]] [[like|gustaría]] [[to|a]] [[try|probar]] [[one day|algún día]]. [[Have you ever been to a football match?|¿Has estado alguna vez en un partido de fútbol?]] [[Yes|Sí]], [[I have|he]]. [[Many|Muchas]] [[times|veces]]! [[I|Yo]] [[love|amo]] [[football|fútbol]]. [[Thank you|Gracias]] [[for|por]] [[your|tu]] [[answers|respuestas]]!`;

const INSTRUCTIONS = 'Escucha el audio de abajo. Puedes leer la transcripción después de escuchar. Después responde las preguntas.';

const QUESTIONS = [
  {
    question: '[[What|Qué]] [[is|es]] [[the|el]] [[person|persona]] [[doing|haciendo]]?',
    options: ['[[A|Una]] [[survey|encuesta]] [[about|sobre]] [[experiences|experiencias]]', '[[A|Una]] [[job|trabajo]] [[interview|entrevista]]', '[[A|Una]] [[cooking|cocina]] [[lesson|clase]]', '[[A|Un]] [[exam|examen]]'],
    correctAnswer: 0,
    explanation: '[[The|El]] [[speaker|hablante]] [[says|dice]] "[[I am doing a survey about experiences|Estoy haciendo una encuesta sobre experiencias]]".',
  },
  {
    question: '[[What|Cuál]] [[was|fue]] [[the|la]] [[first|primera]] [[question|pregunta]]?',
    options: ['[[Have you ever ridden a horse?|¿Has montado a caballo alguna vez?]]', '[[Have you ever tried sushi?|¿Has probado sushi alguna vez?]]', '[[Have you ever been to a football match?|¿Has estado alguna vez en un partido de fútbol?]]', '[[Have you ever flown?|¿Has volado alguna vez?]]'],
    correctAnswer: 1,
    explanation: '[[The|El]] [[speaker|hablante]] [[asks|pregunta]] "[[Have you ever tried sushi?|¿Has probado sushi alguna vez?]]" [[first|primero]].',
  },
  {
    question: '[[Did|¿]] [[the|el]] [[person|persona]] [[answer|respondió]] [[Yes|Sí]] [[or|o]] [[No|No]] [[to|a]] [[sushi|sushi]]?',
    options: ['[[No|No]], [[I haven\'t|no he]]', '[[Yes|Sí]], [[I have|he]]', '[[Maybe|Quizás]]', '[[I don\'t know|No sé]]'],
    correctAnswer: 1,
    explanation: '[[The|El]] [[person|persona]] [[says|dice]] "[[Yes, I have. I tried it in Tokyo last year|Sí, he. Lo probé en Tokio el año pasado]]".',
  },
  {
    question: '[[Where|Dónde]] [[did|probó]] [[they|él]] [[try|probar]] [[sushi|sushi]]?',
    options: ['[[London|Londres]]', '[[Paris|París]]', '[[Tokyo|Tokio]]', '[[Madrid|Madrid]]'],
    correctAnswer: 2,
    explanation: '[[The|El]] [[person|persona]] [[says|dice]] "[[I tried it in Tokyo last year|Lo probé en Tokio el año pasado]]".',
  },
  {
    question: '[[What|Qué]] [[about|sobre]] [[riding|montar]] [[a|un]] [[horse|caballo]]? [[Did|¿]] [[they|él]] [[say|dice]] [[Yes|Sí]] [[or|o]] [[No|No]]?',
    options: ['[[Yes|Sí]], [[I have|he]]', '[[No|No]], [[I haven\'t|no he]]', '[[Maybe|Quizás]]', '[[Many times|Muchas veces]]'],
    correctAnswer: 1,
    explanation: '[[The|El]] [[person|persona]] [[says|dice]] "[[No, I haven\'t. I would like to try one day|No, no he. Me gustaría probar algún día]]".',
  },
  {
    question: '[[What|Qué]] [[about|sobre]] [[football|fútbol]] [[match|partido]]?',
    options: ['[[No|No]], [[I haven\'t|no he]]', '[[Yes|Sí]], [[I have|he]] [[many times|muchas veces]]', '[[Maybe|Quizás]] [[once|una vez]]', '[[I don\'t like|No me gusta]] [[football|fútbol]]'],
    correctAnswer: 1,
    explanation: '[[The|El]] [[person|persona]] [[says|dice]] "[[Yes, I have. Many times! I love football|Sí, he. ¡Muchas veces! Amo el fútbol]]".',
  },
  {
    question: '[[Does|¿]] [[the|el]] [[person|persona]] [[like|le gusta]] [[football|fútbol]]?',
    options: ['[[No|No]]', '[[Yes|Sí]], [[I|Yo]] [[love|amo]] [[football|fútbol]]', '[[A little|Un poco]]', '[[The|El]] [[audio|audio]] [[doesn\'t|no]] [[say|dice]]'],
    correctAnswer: 1,
    explanation: '[[The|El]] [[person|persona]] [[says|dice]] "[[I love football|Amo el fútbol]]".',
  },
  {
    question: '[[The|El]] [[person|persona]] [[has|ha]] [[tried|probado]] [[sushi|sushi]].',
    options: ['[[True|Verdadero]]', '[[False|Falso]]'],
    correctAnswer: 'True',
    explanation: '[[True|Verdadero]]. [[They|Él]] [[said|dijo]] "[[Yes, I have. I tried it in Tokyo|Sí, he. Lo probé en Tokio]]".',
  },
  {
    question: '[[The|El]] [[person|persona]] [[has|ha]] [[ridden|montado]] [[a|un]] [[horse|caballo]].',
    options: ['[[True|Verdadero]]', '[[False|Falso]]'],
    correctAnswer: 'False',
    explanation: '[[False|Falso]]. [[They|Él]] [[said|dijo]] "[[No, I haven\'t|No, no he]]".',
  },
  {
    question: '[[The|El]] [[person|persona]] [[has|ha]] [[been|estado]] [[to|a]] [[a|un]] [[football|fútbol]] [[match|partido]].',
    options: ['[[True|Verdadero]]', '[[False|Falso]]'],
    correctAnswer: 'True',
    explanation: '[[True|Verdadero]]. [[They|Él]] [[said|dijo]] "[[Yes, I have. Many times!|Sí, he. ¡Muchas veces!]]".',
  },
  {
    question: '[[The|El]] [[person|persona]] [[would|le gustaría]] [[like|gustaría]] [[to|a]] [[try|probar]] [[horse|caballo]] [[riding|montar]] [[one day|algún día]].',
    options: ['[[True|Verdadero]]', '[[False|Falso]]'],
    correctAnswer: 'True',
    explanation: '[[True|Verdadero]]. [[They|Él]] [[said|dijo]] "[[I would like to try one day|Me gustaría probar algún día]]".',
  },
  {
    question: '[[What|Cuál]] [[is|es]] [[the|el]] [[main|principal]] [[topic|tema]] [[of|del]] [[this|este]] [[audio|audio]]?',
    options: ['[[A|Una]] [[recipe|receta]]', '[[A|Una]] [[survey|encuesta]] [[about|sobre]] [[experiences|experiencias]] [[with|con]] [[Have you ever...?|¿Has... alguna vez?]]', '[[A|Un]] [[sports|deportes]] [[match|partido]]', '[[Travel|Viajes]] [[to|a]] [[Tokyo|Tokio]]'],
    correctAnswer: 1,
    explanation: '[[The|El]] [[audio|audio]] [[is|es]] [[about|sobre]] [[a|una]] [[survey|encuesta]] [[asking|preguntando]] [[about|sobre]] [[experiences|experiencias]].',
  },
  {
    question: '[[How many|Cuántas]] [[questions|preguntas]] [[were|fueron]] [[asked|preguntadas]]?',
    options: ['[[One|Una]]', '[[Two|Dos]]', '[[Three|Tres]]', '[[Four|Cuatro]]'],
    correctAnswer: 2,
    explanation: '[[Three|Tres]] [[questions|preguntas]]: [[sushi|sushi]], [[horse|caballo]], [[football match|partido de fútbol]].',
  },
  {
    question: '[[What|Qué]] [[does|significa]] "[[I have never been to a concert|Nunca he estado en un concierto]]" [[mean|significar]] [[in|en]] [[this|este]] [[context|contexto]]?',
    options: ['[[The|La]] [[person|persona]] [[goes|va]] [[often|a menudo]]', '[[The|La]] [[person|persona]] [[has|ha]] [[not|no]] [[had|tenido]] [[that|esa]] [[experience|experiencia]]', '[[The|La]] [[person|persona]] [[doesn\'t|no]] [[like|le gusta]] [[music|música]]', '[[The|La]] [[person|persona]] [[will|irá]] [[go|ir]] [[tomorrow|mañana]]'],
    correctAnswer: 1,
    explanation: '[[Never|Nunca]] = [[no|no]] [[experience|experiencia]] [[in|en]] [[life|vida]].',
  },
  {
    question: '[[Who|Quién]] [[says|dice]] "[[Thank you for your answers|Gracias por tus respuestas]]"?',
    options: ['[[The|La]] [[person|persona]] [[answering|respondiendo]] [[the|las]] [[questions|preguntas]]', '[[The|La]] [[person|persona]] [[doing|haciendo]] [[the|la]] [[survey|encuesta]]', '[[A|Un]] [[teacher|profesor]]', '[[A|Un]] [[friend|amigo]]'],
    correctAnswer: 1,
    explanation: '[[The|El]] [[person|persona]] [[doing|haciendo]] [[the|la]] [[survey|encuesta]] [[thanks|agradece]] [[for|por]] [[the|las]] [[answers|respuestas]].',
  },
];

export const UNIT_12_LESSON_4_LISTENING: Exercise[] = QUESTIONS.map((q, i) => ({
  id: `a2-u12-l4-l${i + 1}`,
  type: 'listening',
  level: 'A2',
  topic: 'Present Perfect Ever Never',
  difficulty: 'easy',
  transcript: LISTENING_TRANSCRIPT,
  content: {
    title: LESSON_TITLE,
    instructions: INSTRUCTIONS,
    questions: [q],
  },
  topicName: 'Listening',
}));
