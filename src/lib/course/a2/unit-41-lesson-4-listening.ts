/**
 * Unidad 41 — Lección 4: Comprensión auditiva (Present Perfect: Life Experiences)
 * 15 actividades: 1 audio + 15 preguntas
 */

import { Exercise } from '@/lib/exercise-generator';

const LESSON_TITLE = '[[Listening|Comprensión auditiva]]';
const LISTENING_TRANSCRIPT = `[[Hi|Hola]] [[Sarah|Sarah]]! [[I|Yo]] [[have|he]] [[been|estado]] [[to|a]] [[so many|tantos]] [[places|lugares]] [[around|por]] [[the world|el mundo]]. [[I|Yo]] [[have|he]] [[visited|visitado]] [[Paris|París]] [[twice|dos veces]] [[and|y]] [[London|Londres]] [[three|tres]] [[times|veces]]. [[I|Yo]] [[have|he]] [[tried|probado]] [[sushi|sushi]] [[in|en]] [[Tokyo|Tokio]] [[and|y]] [[pizza|pizza]] [[in|en]] [[Naples|Nápoles]]. [[I|Yo]] [[have|he]] [[never|nunca]] [[been|estado]] [[to|a]] [[Australia|Australia]] [[but|pero]] [[I|yo]] [[want|quiero]] [[to|a]] [[go|ir]] [[someday|algún día]]. [[Have|¿]] [[you|tú]] [[ever|alguna vez]] [[been|estado]] [[to|a]] [[Japan|Japón]]? [[My|Mi]] [[sister|hermana]] [[has|ha]] [[been|estado]] [[there|allí]] [[too|también]]. [[We|Nosotros]] [[both|ambos]] [[love|amamos]] [[travelling|viajar]] [[and|y]] [[having|tener]] [[new|nuevas]] [[experiences|experiencias]].`;

const INSTRUCTIONS = 'Escucha el audio de abajo. Puedes leer la transcripción después de escuchar. Después responde las preguntas.';

const QUESTIONS = [
  { question: '[[Who|Con quién]] [[is|está]] [[the|el]] [[speaker|hablante]] [[talking|hablando]]?', options: ['[[John|John]]', '[[Sarah|Sarah]]', '[[Mary|Mary]]', '[[Tom|Tom]]'], correctAnswer: 1, explanation: '[[She|Ella]] [[says|dice]] "[[Hi Sarah|Hola Sarah]]".' },
  { question: '[[How many|Cuántas]] [[times|veces]] [[has|ha]] [[the|el]] [[speaker|hablante]] [[visited|visitado]] [[Paris|París]]?', options: ['[[Once|Una vez]]', '[[Twice|Dos veces]]', '[[Three times|Tres veces]]', '[[Four times|Cuatro veces]]'], correctAnswer: 1, explanation: '[[She|Ella]] [[says|dice]] "[[I have visited Paris twice|He visitado París dos veces]]".' },
  { question: '[[How many|Cuántas]] [[times|veces]] [[has|ha]] [[the|el]] [[speaker|hablante]] [[visited|visitado]] [[London|Londres]]?', options: ['[[Once|Una vez]]', '[[Twice|Dos veces]]', '[[Three times|Tres veces]]', '[[Never|Nunca]]'], correctAnswer: 2, explanation: '[[She|Ella]] [[says|dice]] "[[London three times|Londres tres veces]]".' },
  { question: '[[Where|Dónde]] [[has|ha]] [[the|el]] [[speaker|hablante]] [[tried|probado]] [[sushi|sushi]]?', options: ['[[Paris|París]]', '[[London|Londres]]', '[[Tokyo|Tokio]]', '[[Rome|Roma]]'], correctAnswer: 2, explanation: '[[She|Ella]] [[says|dice]] "[[I have tried sushi in Tokyo|He probado sushi en Tokio]]".' },
  { question: '[[Has|Ha]] [[the|el]] [[speaker|hablante]] ____ ____ ____ ____?', options: ['[[been to Australia|estado en Australia]]', '[[never been to Australia|nunca estado en Australia]]', '[[lived in Australia|vivido en Australia]]', '[[hated Australia|odiado Australia]]'], correctAnswer: 1, explanation: '[[She|Ella]] [[says|dice]] "[[I have never been to Australia|Nunca he estado en Australia]]".' },
  { question: '[[Does|Quiere]] [[the|el]] [[speaker|hablante]] ____ ____ ____ ____ ____?', options: ['[[want to go to Australia|ir a Australia]]', '[[not want to go to Australia|no ir a Australia]]', '[[hate Australia|odiar Australia]]', '[[forget Australia|olvidar Australia]]'], correctAnswer: 0, explanation: '[[She|Ella]] [[says|dice]] "[[I want to go someday|Quiero ir algún día]]".' },
  { question: '[[Who|Quién]] [[has|ha]] [[also|también]] [[been|estado]] [[to|en]] [[Japan|Japón]]?', options: ['[[The speaker|El hablante]]', '[[The sister|La hermana]]', '[[Sarah|Sarah]]', '[[Nobody|Nadie]]'], correctAnswer: 1, explanation: '[[The|La]] [[sister|hermana]] [[has been there too|ha estado allí también]].' },
  { question: '[[What|Qué]] ____ ____ ____ ____ ____ ____ ____?', options: ['[[do they both love|aman ambos]]', '[[Travelling and having new experiences|Viajar y tener nuevas experiencias]]', '[[Staying at home|Quedarse en casa]]', '[[Watching TV|Ver la tele]]', '[[Sleeping|Dormir]]'], correctAnswer: 0, explanation: '[[They|Ellos]] [[both love travelling and having new experiences|ambos aman viajar y tener nuevas experiencias]].' },
  { question: '[[The|El]] [[speaker|hablante]] [[uses|usa]] [[Present Perfect|Presente Perfecto]] [[for|para]] [[life|experiencias de]] [[experiences|vida]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'True', explanation: '[[True|Verdadero]]. [[She|Ella]] [[describes|describe]] [[experiences|experiencias]] [[in|en]] [[her|su]] [[life|vida]].' },
  { question: '[[The|El]] ____ ____ ____ ____ ____ ____ ____ ____ ____.', options: ['[[main topic is travel|tema principal es viajes]] [[and|y]] [[life|experiencias de]] [[experiences|vida]]', '[[main topic is food|tema principal es comida]]', '[[main topic is work|tema principal es trabajo]]', '[[main topic is school|tema principal es escuela]]'], correctAnswer: 0, explanation: '[[The|El]] [[audio|audio]] [[is|es]] [[about|sobre]] [[travel|viajes]] [[and|y]] [[life|experiencias de]] [[experiences|vida]].' },
  { question: '[[Which|Cuál]] [[tense|tiempo]] [[does|usa]] [[the|el]] [[speaker|hablante]] [[use|usar]] [[most|más]]?', options: ['[[Past Simple|Pasado Simple]]', '[[Present Perfect|Presente Perfecto]]', '[[Future|Futuro]]', '[[Present Simple|Presente Simple]]'], correctAnswer: 1, explanation: '[[Present Perfect|Presente Perfecto]] [[for|para]] [[life|experiencias de]] [[experiences|vida]].' },
  { question: '[[How many|Cuántas]] [[cities|ciudades]] [[does|menciona]] [[the|el]] [[speaker|hablante]] [[mention|mencionar]]?', options: ['[[Two|Dos]]', '[[Three|Tres]]', '[[Four|Cuatro]]', '[[Five|Cinco]]'], correctAnswer: 2, explanation: '[[Paris|París]], [[London|Londres]], [[Tokyo|Tokio]], [[Naples|Nápoles]] — [[four|cuatro]].' },
  { question: '[[Have you ever been to|¿Has estado alguna vez en]] [[Japan|Japón]]? [[is|es]] [[a|una]] ____ ____.', options: ['[[question about|pregunta sobre]] [[experience|experiencia]]', '[[statement|afirmación]]', '[[command|orden]]', '[[greeting|saludo]]'], correctAnswer: 0, explanation: '[[Ever|Ever]] [[in|en]] [[questions|preguntas]] = [[at any time|en algún momento]].' },
  { question: '[[The|El]] [[speaker|hablante]] ____ ____ ____ ____ ____ ____ ____.', options: ['[[has travelled a lot|ha viajado mucho]]', '[[has never travelled|nunca ha viajado]]', '[[hates travelling|odia viajar]]', '[[only stays at home|solo se queda en casa]]'], correctAnswer: 0, explanation: '[[She|Ella]] [[has been to many places|ha estado en muchos lugares]].' },
  { question: '[[Where|Dónde]] [[has|ha]] [[the|el]] [[speaker|hablante]] [[tried|probado]] [[pizza|pizza]]?', options: ['[[In Naples|En Nápoles]]', '[[In Rome|En Roma]]', '[[In Milan|En Milán]]', '[[In Venice|En Venecia]]'], correctAnswer: 0, explanation: '[[She|Ella]] [[says|dice]] "[[I have tried pizza in Naples|He probado pizza en Nápoles]]".' },
];

export const UNIT_41_LESSON_4_LISTENING: Exercise[] = QUESTIONS.map((q, i) => ({
  id: `a2-u41-l4-l${i + 1}`,
  type: 'listening',
  level: 'A2',
  topic: 'Present Perfect: Life Experiences',
  difficulty: 'easy',
  transcript: LISTENING_TRANSCRIPT,
  content: { title: LESSON_TITLE, instructions: INSTRUCTIONS, questions: [q] },
  topicName: 'Listening',
}));
