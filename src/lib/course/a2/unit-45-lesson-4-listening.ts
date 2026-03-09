/**
 * Unidad 45 — Lección 4: Comprensión auditiva (Present Perfect vs Past Simple)
 * 15 actividades: 1 audio + 15 preguntas
 */

import { Exercise } from '@/lib/exercise-generator';

const LESSON_TITLE = '[[Listening|Comprensión auditiva]]';
const LISTENING_TRANSCRIPT = `[[I|Yo]] [[have|he]] [[been|estado]] [[to|a]] [[Paris|París]] [[many|muchas]] [[times|veces]] [[in|en]] [[my|mi]] [[life|vida]]. [[But|Pero]] [[I|yo]] [[went|fui]] [[there|allí]] [[for|por]] [[the|la]] [[first|primera]] [[time|vez]] [[in|en]] [[2010|2010]]. [[That|Esa]] [[was|fue]] [[a|un]] [[wonderful|maravilloso]] [[trip|viaje]]. [[I|Yo]] [[went|fui]] [[to|a]] [[Tokyo|Tokio]] [[last|el pasado]] [[year|año]] [[for|por]] [[work|trabajo]]. [[I|Yo]] [[met|conocí]] [[many|muchos]] [[interesting|interesantes]] [[people|gente]]. [[I|Yo]] [[have|he]] [[known|conocido]] [[my|mi]] [[best|mejor]] [[friend|amigo]] [[for|durante]] [[fifteen|quince]] [[years|años]]. [[We|Nosotros]] [[met|conocimos]] [[at|en]] [[university|universidad]] [[in|en]] [[2009|2009]]. [[When|Cuándo]] [[did|]] [[you|tú]] [[first|primera]] [[visit|visitar]] [[Paris|París]]?`;

const INSTRUCTIONS = 'Escucha el audio de abajo. Puedes leer la transcripción después de escuchar. Después responde las preguntas.';

const QUESTIONS = [
  { question: '[[Has|Ha]] [[the|el]] [[speaker|hablante]] ____ ____ ____ ____ ____?', options: ['[[been to Paris many times|estado en París muchas veces]]', '[[been to Paris once|estado en París una vez]]', '[[never been to Paris|nunca estado en París]]', '[[lived in Paris|vivido en París]]'], correctAnswer: 0, explanation: '[[He|Él]] [[says|dice]] "[[I have been to Paris many times|He estado en París muchas veces]]".' },
  { question: '[[When|Cuándo]] ____ ____ ____ ____ ____ ____ ____ ____ ____?', options: ['[[did the speaker first go to Paris|fue el hablante por primera vez a París]]', '[[In 2010|En 2010]]', '[[In 2009|En 2009]]', '[[Last year|El año pasado]]'], correctAnswer: 1, explanation: '[[He|Él]] [[went there for the first time in 2010|fue allí por primera vez en 2010]].' },
  { question: '[[When|Cuándo]] ____ ____ ____ ____ ____ ____ ____?', options: ['[[did the speaker go to Tokyo|fue el hablante a Tokio]]', '[[Last year|El año pasado]]', '[[In 2010|En 2010]]', '[[In 2009|En 2009]]'], correctAnswer: 0, explanation: '[[He|Él]] [[went to Tokyo last year|fue a Tokio el año pasado]].' },
  { question: '[[Why|Por qué]] ____ ____ ____ ____ ____ ____ ____?', options: ['[[did the speaker go to Tokyo|fue el hablante a Tokio]]', '[[For work|Por trabajo]]', '[[For holiday|Por vacaciones]]', '[[To study|Para estudiar]]'], correctAnswer: 1, explanation: '[[He|Él]] [[went for work|fue por trabajo]].' },
  { question: '[[How long|Cuánto tiempo]] ____ ____ ____ ____ ____ ____ ____ ____?', options: ['[[has the speaker known his best friend|conoce el hablante a su mejor amigo]]', '[[For fifteen years|Durante quince años]]', '[[For ten years|Durante diez años]]', '[[Since 2010|Desde 2010]]'], correctAnswer: 1, explanation: '[[They|Ellos]] [[have known each other for fifteen years|se conocen desde hace quince años]].' },
  { question: '[[Where|Dónde]] ____ ____ ____ ____ ____ ____?', options: ['[[did they meet|se conocieron ellos]]', '[[At university|En la universidad]]', '[[In Paris|En París]]', '[[In Tokyo|En Tokio]]'], correctAnswer: 1, explanation: '[[They|Ellos]] [[met at university|se conocieron en la universidad]].' },
  { question: '[[When|Cuándo]] ____ ____ ____ ____ ____ ____?', options: ['[[did they meet|se conocieron ellos]]', '[[In 2009|En 2009]]', '[[In 2010|En 2010]]', '[[Last year|El año pasado]]'], correctAnswer: 1, explanation: '[[They|Ellos]] [[met in 2009|se conocieron en 2009]].' },
  { question: '[[Present Perfect|Presente Perfecto]] [[is used for|se usa para]]?', options: ['[[General experiences in life|Experiencias generales en la vida]]', '[[Specific moments in the past|Momentos específicos en el pasado]]', '[[Future plans|Planes futuros]]', '[[Habits|Hábitos]]'], correctAnswer: 0, explanation: '[[Present Perfect|Presente Perfecto]] = [[general|experiencias generales]] [[experiences|en la vida]].' },
  { question: '[[Past Simple|Pasado Simple]] [[is used for|se usa para]]?', options: ['[[Specific moments in the past|Momentos específicos en el pasado]]', '[[General experiences|Experiencias generales]]', '[[Future|Futuro]]', '[[Duration|Duración]]'], correctAnswer: 0, explanation: '[[Past Simple|Pasado Simple]] = [[specific|momentos específicos]] [[moments|en el pasado]].' },
  { question: '[[The|El]] [[main|principal]] [[topic|tema]] [[of|del]] [[audio|audio]] [[is|es]]?', options: ['[[Food|Comida]]', '[[Present Perfect vs Past Simple|Presente Perfecto vs Pasado Simple]]', '[[Work|Trabajo]]', '[[School|Escuela]]'], correctAnswer: 1, explanation: '[[The|El]] [[audio|audio]] [[shows|muestra]] [[both|ambos]] [[tenses|tiempos]].' },
  { question: '[[Which|Cuál]] [[tense|tiempo]] [[does|usa]] [[the|el]] [[speaker|hablante]] [[use|usar]] [[for|para]] "[[2010|2010]]" [[and|y]] "[[2009|2009]]"?', options: ['[[Past Simple|Pasado Simple]]', '[[Present Perfect|Presente Perfecto]]', '[[Future|Futuro]]', '[[Present Simple|Presente Simple]]'], correctAnswer: 0, explanation: '[[Specific|Fechas específicas]] [[dates|en el pasado]] → [[Past Simple|Pasado Simple]].' },
  { question: '[[Which|Cuál]] [[tense|tiempo]] [[does|usa]] [[the|el]] [[speaker|hablante]] [[use|usar]] [[for|para]] "[[many times|muchas veces]]"?', options: ['[[Present Perfect|Presente Perfecto]]', '[[Past Simple|Pasado Simple]]', '[[Future|Futuro]]', '[[Present Simple|Presente Simple]]'], correctAnswer: 0, explanation: '[[General|Experiencia general]] [[experience|en la vida]] → [[Present Perfect|Presente Perfecto]].' },
  { question: '[[The|El]] ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____.', options: ['[[speaker uses both Present Perfect and Past Simple|hablante usa tanto Presente Perfecto como Pasado Simple]]', '[[speaker uses only Past Simple|hablante usa solo Pasado Simple]]', '[[speaker uses only Present Perfect|hablante usa solo Presente Perfecto]]', '[[speaker uses only Future|hablante usa solo Futuro]]'], correctAnswer: 0, explanation: '[[He|Él]] [[uses both|usa ambos]] [[correctly|correctamente]].' },
  { question: '[[When|Cuándo]] [[do we use|usamos]] [[Past Simple|Pasado Simple]]?', options: ['[[With specific times|Con tiempos específicos]] ([[yesterday|ayer]], [[2010|2010]])', '[[With ever and never|Con ever y never]]', '[[With for and since|Con for y since]]', '[[For future plans|Para planes futuros]]'], correctAnswer: 0, explanation: '[[Past Simple|Pasado Simple]] = [[specific|tiempos específicos]] [[times|en el pasado]].' },
  { question: '[[What|Qué]] [[did|hizo]] [[the|el]] [[speaker|hablante]] [[do|]] [[in|en]] [[Tokyo|Tokio]]?', options: ['[[He met many interesting people|Conoció a mucha gente interesante]]', '[[He stayed at home|Se quedó en casa]]', '[[He studied|Estudió]]', '[[He worked only|Solo trabajó]]'], correctAnswer: 0, explanation: '[[He|Él]] [[met many interesting people|conoció a mucha gente interesante]].' },
];

export const UNIT_45_LESSON_4_LISTENING: Exercise[] = QUESTIONS.map((q, i) => ({
  id: `a2-u45-l4-l${i + 1}`,
  type: 'listening',
  level: 'A2',
  topic: 'Present Perfect vs Past Simple',
  difficulty: 'easy',
  transcript: LISTENING_TRANSCRIPT,
  content: { title: LESSON_TITLE, instructions: INSTRUCTIONS, questions: [q] },
  topicName: 'Listening',
}));
