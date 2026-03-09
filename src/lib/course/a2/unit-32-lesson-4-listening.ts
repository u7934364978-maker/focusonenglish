/**
 * Unidad 32 — Lección 4: Comprensión auditiva (Future with 'Present Continuous': Arrangements)
 * 15 actividades: 1 audio + 15 preguntas
 */

import { Exercise } from '@/lib/exercise-generator';

const LESSON_TITLE = '[[Listening|Comprensión auditiva]]';
const LISTENING_TRANSCRIPT = `[[Hi|Hola]] [[Sarah|Sarah]]! [[I|Yo]] [[am calling|llamo]] [[to|para]] [[tell|decirte]] [[you|te]] [[about|sobre]] [[my|mis]] [[plans|planes]]. [[This|Este]] [[Saturday|sábado]] [[I|yo]] [[am having|tengo]] [[a|una]] [[haircut|corte de pelo]] [[at|a las]] [[11am|11am]]. [[Then|Luego]] [[I|yo]] [[am meeting|quedo]] [[my|con mi]] [[cousin|primo]] [[for|para]] [[coffee|café]] [[at|a las]] [[2pm|2pm]]. [[In|El]] [[the|por la]] [[evening|noche]] [[I|yo]] [[am going|voy]] [[to|a]] [[a|un]] [[concert|concierto]] [[with|con]] [[some|algunos]] [[friends|amigos]]. [[We|Nosotros]] [[are meeting|quedamos]] [[at|en]] [[the|la]] [[station|estación]] [[at|a las]] [[6pm|6pm]]. [[Next|La próxima]] [[week|semana]] [[I|yo]] [[am seeing|veo]] [[the|al]] [[dentist|dentist]] [[on|el]] [[Tuesday|martes]] [[morning|por la mañana]]. [[I|Yo]] [[hope|espero]] [[you|que tú]] [[can|puedas]] [[join|unirte]] [[me|a mí]] [[for|para]] [[coffee|café]]!`;

const INSTRUCTIONS = 'Escucha el audio de abajo. Puedes leer la transcripción después de escuchar. Después responde las preguntas.';

const QUESTIONS = [
  { question: '[[Who|Con quién]] [[is|está]] [[the|el]] [[speaker|hablante]] [[talking|hablando]]?', options: ['[[Mary|Mary]]', '[[Sarah|Sarah]]', '[[Emma|Emma]]', '[[Lisa|Lisa]]'], correctAnswer: 1, explanation: '[[She|Ella]] [[says|dice]] "[[Hi Sarah|Hola Sarah]]".' },
  { question: '[[What|Qué]] [[is|va]] [[the|el]] [[speaker|hablante]] [[having|a tener]] [[this|este]] [[Saturday|sábado]] [[morning|por la mañana]]?', options: ['[[A|Una]] [[meeting|reunión]]', '[[A|Un]] [[haircut|corte de pelo]] [[at|a las]] [[11am|11am]]', '[[Coffee|café]]', '[[A|Un]] [[concert|concierto]]'], correctAnswer: 1, explanation: '[[She|Ella]] [[says|dice]] "[[I am having a haircut at 11am|Tengo un corte de pelo a las 11am]]".' },
  { question: '[[Who|Con quién]] [[is|queda]] [[the|el]] [[speaker|hablante]] [[meeting|quedando]] [[for|para]] [[coffee|café]]?', options: ['[[Her|Su]] [[friend|amiga]]', '[[Her|Su]] [[cousin|primo]]', '[[Her|Su]] [[sister|hermana]]', '[[Her|Su]] [[mother|madre]]'], correctAnswer: 1, explanation: '[[She|Ella]] [[says|dice]] "[[I am meeting my cousin for coffee|Quedo con mi primo para café]]".' },
  { question: '[[When|Cuándo]] [[is|queda]] [[the|el]] [[coffee|café]] [[meeting|reunión]]?', options: ['[[11am|11am]]', '[[2pm|2pm]]', '[[6pm|6pm]]', '[[9am|9am]]'], correctAnswer: 1, explanation: '[[She|Ella]] [[says|dice]] "[[at 2pm|a las 2pm]]".' },
  { question: '[[What|Qué]] [[is|va]] [[the|el]] [[speaker|hablante]] [[doing|a hacer]] [[in|por]] [[the|la]] [[evening|noche]]?', options: ['[[Staying|Quedarse]] [[at|en]] [[home|casa]]', '[[Going|Ir]] [[to|a]] [[a|un]] [[concert|concierto]]', '[[Meeting|Quedar]] [[cousin|con primo]]', '[[Haircut|corte de pelo]]'], correctAnswer: 1, explanation: '[[She|Ella]] [[says|dice]] "[[In the evening I am going to a concert|Por la noche voy a un concierto]]".' },
  { question: '[[Where|Dónde]] [[are|quedan]] [[they|ellos]] [[meeting|quedando]] [[for|para]] [[the|el]] [[concert|concierto]]?', options: ['[[At|En]] [[home|casa]]', '[[At|En]] [[the|la]] [[station|estación]] [[at|a las]] [[6pm|6pm]]', '[[At|En]] [[the|el]] [[cafe|café]]', '[[At|En]] [[the|el]] [[concert|concierto]]'], correctAnswer: 1, explanation: '[[She|Ella]] [[says|dice]] "[[We are meeting at the station at 6pm|Quedamos en la estación a las 6pm]]".' },
  { question: '[[When|Cuándo]] [[is|tiene]] [[the|el]] [[speaker|hablante]] [[seeing|viendo]] [[the|al]] [[dentist|dentista]]?', options: ['[[Monday|lunes]]', '[[Tuesday|Martes]] [[morning|por la mañana]]', '[[Wednesday|Miércoles]]', '[[Saturday|Sábado]]'], correctAnswer: 1, explanation: '[[She|Ella]] [[says|dice]] "[[I am seeing the dentist on Tuesday morning|Veo al dentista el martes por la mañana]]".' },
  { question: '[[The|El]] [[speaker|hablante]] [[uses|usa]] [[Present Continuous|Present Continuous]] [[for|para]] [[arrangements|arreglos]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'True', explanation: '[[True|Verdadero]]. [[All|Todos]] [[events|eventos]] [[have|tienen]] [[specific|horarios]] [[times|específicos]].' },
  { question: '[[The|El]] [[speaker|hablante]] [[invites|invita]] [[Sarah|Sarah]] [[to|a]] [[the|el]] [[concert|concierto]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'False', explanation: '[[False|Falso]]. [[She|Ella]] [[invites|invita]] [[Sarah|Sarah]] [[for|para]] [[coffee|café]], [[not|no]] [[concert|concierto]].' },
  { question: '[[The|El]] [[speaker|hablante]] [[has|tiene]] [[a|una]] [[busy|ocupada]] [[day|día]] [[on|el]] [[Saturday|sábado]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'True', explanation: '[[True|Verdadero]]. [[Haircut|corte]], [[coffee|café]], [[concert|concierto]].' },
  { question: '[[What|Cuál]] [[is|es]] [[the|el]] [[main|principal]] [[topic|tema]] [[of|del]] [[this|este]] [[audio|audio]]?', options: ['[[Work|Trabajo]]', '[[Future|Arreglos]] [[arrangements|futuros]] [[using|usando]] [[Present Continuous|Present Continuous]]', '[[Weather|Tiempo]]', '[[Shopping|Compras]]'], correctAnswer: 1, explanation: '[[The|El]] [[audio|audio]] [[is|es]] [[about|sobre]] [[future|futuros]] [[arrangements|arreglos]].' },
  { question: '[[How many|Cuántas]] [[arrangements|arreglos]] [[does|menciona]] [[the|el]] [[speaker|hablante]] [[mention|mencionar]]?', options: ['[[two|dos]]', '[[three|tres]]', '[[four|cuatro]]', '[[five|cinco]]'], correctAnswer: 3, explanation: '[[Four|Cuatro]]: [[haircut|corte]], [[coffee|café]], [[concert|concierto]], [[dentist|dentista]].' },
  { question: '[[What|Qué]] [[does|invita]] [[the|el]] [[speaker|hablante]] [[invite|invitar]] [[Sarah|Sarah]] [[to|a]]?', options: ['[[The|El]] [[concert|concierto]]', '[[The|El]] [[haircut|corte]]', '[[Coffee|café]]', '[[The|Al]] [[dentist|dentista]]'], correctAnswer: 2, explanation: '[[She|Ella]] [[says|dice]] "[[I hope you can join me for coffee|Espero que puedas unirte a mí para café]]".' },
  { question: '[[Who|Con quién]] [[is|va]] [[the|el]] [[speaker|hablante]] [[going|yendo]] [[to|al]] [[concert|concierto]]?', options: ['[[Alone|Sola]]', '[[With|Con]] [[Sarah|Sarah]]', '[[With|Con]] [[some|algunos]] [[friends|amigos]]', '[[With|Con]] [[her|su]] [[cousin|primo]]'], correctAnswer: 2, explanation: '[[She|Ella]] [[says|dice]] "[[with some friends|con algunos amigos]]".' },
  { question: '[[The|El]] [[speaker|hablante]] [[is|está]] [[organising|organizando]] [[her|su]] [[week|semana]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'True', explanation: '[[True|Verdadero]]. [[She|Ella]] [[is|está]] [[telling|contando]] [[about|sobre]] [[her|sus]] [[plans|planes]].' },
];

export const UNIT_32_LESSON_4_LISTENING: Exercise[] = QUESTIONS.map((q, i) => ({
  id: `a2-u32-l4-l${i + 1}`,
  type: 'listening',
  level: 'A2',
  topic: "Future with 'Present Continuous': Arrangements",
  difficulty: 'easy',
  transcript: LISTENING_TRANSCRIPT,
  content: { title: LESSON_TITLE, instructions: INSTRUCTIONS, questions: [q] },
  topicName: 'Listening',
}));
