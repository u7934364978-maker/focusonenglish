/**
 * Unidad 45 — Lección 3: Comprensión lectora (Present Perfect vs Past Simple)
 * 15 actividades: 1 texto + 15 preguntas
 */

import { Exercise } from '@/lib/exercise-generator';

const LESSON_TITLE = '[[Reading|Comprensión lectora]]';
const READING_TRANSCRIPT = `[[I|Yo]] [[have|he]] [[been|estado]] [[to|en]] [[Paris|París]] [[many|muchas]] [[times|veces]] [[in|en]] [[my|mi]] [[life|vida]]. [[I|Yo]] [[went|fui]] [[there|allí]] [[last|el pasado]] [[year|año]] [[for|para]] [[a|un]] [[conference|congreso]]. [[I|Yo]] [[have|he]] [[never|nunca]] [[tried|probado]] [[snails|caracoles]] [[before|antes]] [[but|pero]] [[I|yo]] [[tried|probé]] [[them|]] [[when|cuando]] [[I|yo]] [[was|estaba]] [[there|allí]]. [[My|Mi]] [[friend|amigo]] [[was|fue]] [[born|nacido]] [[in|en]] [[1990|1990]]. [[We|Nosotros]] [[have|hemos]] [[known|conocido]] [[each other|el uno al otro]] [[for|durante]] [[ten|diez]] [[years|años]]. [[We|Nosotros]] [[met|nos conocimos]] [[at|en]] [[university|universidad]] [[in|en]] [[2014|2014]]. [[Shakespeare|Shakespeare]] [[wrote|escribió]] [[many|muchas]] [[plays|obras]]. [[I|Yo]] [[have|he]] [[not|no]] [[found|encontrado]] [[my|mis]] [[keys|llaves]] [[yet|aún]]. [[When|Cuándo]] [[did|]] [[you|tú]] [[go|ir]] [[to|a]] [[Italy|Italia]]? [[I|Yo]] [[went|fui]] [[there|allí]] [[in|en]] [[2019|2019]].`;

const INSTRUCTIONS = 'Lee el texto de abajo. Después responde las preguntas.';

const QUESTIONS = [
  { question: '[[Has|Ha]] [[the|el]] [[writer|autor]] ____ ____ ____ [[to|a]] [[Paris|París]]?', options: ['[[been|estado]] [[many times|muchas veces]]', '[[been|estado]] [[once|una vez]]', '[[never been|nunca estado]]'], correctAnswer: 0, explanation: '[[The|El]] [[text|texto]] [[says|dice]] "[[I have been to Paris many times|He estado en París muchas veces]]".' },
  { question: '[[When|Cuándo]] ____ ____ ____ ____ ____ ____ [[to|a]] [[Paris|París]] [[last|la última vez]]?', options: ['[[did he go|fue él]] [[last year|el año pasado]]', '[[did he go|fue él]] [[two years ago|hace dos años]]', '[[did he go|fue él]] [[in 2019|en 2019]]'], correctAnswer: 0, explanation: '[[He|Él]] [[says|dice]] "[[I went there last year|Fui allí el año pasado]]".' },
  { question: '[[Why|Por qué]] [[did|fue]] ____ ____ ____ ____ ____ ____ [[to|a]] [[Paris|París]]?', options: ['[[he go|él]] [[for a conference|para un congreso]]', '[[he go|él]] [[for holiday|para vacaciones]]', '[[he go|él]] [[for work|para trabajo]]'], correctAnswer: 0, explanation: '[[He|Él]] [[says|dice]] "[[I went there last year for a conference|Fui allí el año pasado para un congreso]]".' },
  { question: '[[Has|Ha]] ____ ____ ____ ____ ____ ____ [[snails|caracoles]] [[before|antes]]?', options: ['[[the writer never tried|el autor nunca probó]]', '[[the writer tried|el autor probó]]', '[[the writer always tried|el autor siempre probó]]'], correctAnswer: 0, explanation: '[[He|Él]] [[says|dice]] "[[I have never tried snails before|Nunca he probado caracoles antes]]".' },
  { question: '[[When|Cuándo]] ____ ____ ____ ____ ____ ____ [[born|nacido]]?', options: ['[[was the friend|fue el amigo]] [[in 1990|en 1990]]', '[[was the friend|fue el amigo]] [[in 1985|en 1985]]', '[[was the friend|fue el amigo]] [[in 2000|en 2000]]'], correctAnswer: 0, explanation: '[[The|El]] [[text|texto]] [[says|dice]] "[[My friend was born in 1990|Mi amigo nació en 1990]]".' },
  { question: '[[Present Perfect|Presente Perfecto]] [[is|se]] [[used|usa]] [[for|para]] [[general|experiencias generales]] [[experiences|en la vida]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'True', explanation: '[[Have been to Paris many times|He estado en París muchas veces]] = [[general|general]] [[experience|experiencia]].' },
  { question: '[[Past Simple|Pasado Simple]] [[is|se]] [[used|usa]] [[for|para]] [[specific|momentos específicos]] [[times|en el tiempo]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'True', explanation: '[[Last year|El año pasado]], [[2014|2014]], [[2019|2019]] = [[specific|específico]].' },
  { question: '[[When|Cuándo]] [[did|se conocieron]] ____ ____ ____ ____ ____ ____?', options: ['[[they meet|ellos]] [[at university in 2014|en la universidad en 2014]]', '[[they meet|ellos]] [[at work|en el trabajo]]', '[[they meet|ellos]] [[at school|en la escuela]]'], correctAnswer: 0, explanation: '[[They|Ellos]] [[met at university in 2014|se conocieron en la universidad en 2014]].' },
  { question: '[[What|Qué]] [[tense|tiempo]] [[is|se]] [[used|usa]] [[for|para]] [[Shakespeare|Shakespeare]]?', options: ['[[Past Simple|Pasado Simple]]', '[[Present Perfect|Presente Perfecto]]', '[[Present Simple|Presente Simple]]'], correctAnswer: 0, explanation: '[[Shakespeare wrote|Shakespeare escribió]] = [[Past Simple|Pasado Simple]] [[for|para]] [[dead|personas fallecidas]] [[people|personas]].' },
  { question: '[[What|Cuál]] [[is|es]] [[the|el]] [[main|principal]] [[topic|tema]] [[of|del]] [[this|este]] [[text|texto]]?', options: ['[[Food|Comida]]', '[[Present Perfect vs Past Simple|Presente Perfecto vs Pasado Simple]]', '[[Travel|Viajes]]'], correctAnswer: 1, explanation: '[[The|El]] [[text|texto]] [[shows|muestra]] [[both|ambos]] [[tenses|tiempos]] [[in|en]] [[use|uso]].' },
  { question: '[[The|El]] [[writer|autor]] ____ ____ ____ ____ ____ ____ [[his|sus]] [[keys|llaves]] ____.', options: ['[[has not found|no ha encontrado]] [[yet|aún]]', '[[found|encontró]]', '[[has found|ha encontrado]]'], correctAnswer: 0, explanation: '[[He|Él]] [[says|dice]] "[[I have not found my keys yet|No he encontrado mis llaves aún]]".' },
  { question: '[[When|Cuándo]] [[is|se]] [[used|usa]] [[Past Simple|Pasado Simple]]?', options: ['[[With|Con]] [[specific|fechas específicas]] [[dates|fechas]] [[and|y]] [[times|momentos]]', '[[With|Con]] [[ever|ever]] [[and|y]] [[never|never]]', '[[With|Con]] [[for|for]] [[and|y]] [[since|since]]'], correctAnswer: 0, explanation: '[[Past Simple|Pasado Simple]] = [[specific|específico]] [[time|tiempo]] [[in the past|en el pasado]].' },
  { question: '[[How long|Cuánto tiempo]] ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____?', options: ['[[have they known each other|se conocen]] [[for ten years|desde hace diez años]]', '[[have they known each other|se conocen]] [[for five years|desde hace cinco años]]', '[[have they known each other|se conocen]] [[since 2014|desde 2014]]'], correctAnswer: 0, explanation: '[[They|Ellos]] [[have known each other for ten years|se conocen desde hace diez años]].' },
  { question: '[[The|El]] [[writer|autor]] ____ ____ ____ ____ ____ ____ [[Italy|Italia]] [[in|en]] [[2019|2019]].', options: ['[[went to|fue a]]', '[[has been to|ha estado en]]', '[[goes to|va a]]'], correctAnswer: 0, explanation: '[[Specific|Específico]] [[date|fecha]] [[2019|2019]] = [[Past Simple|Pasado Simple]].' },
  { question: '[[When|Cuándo]] [[do|se usa]] ____ ____ ____ ____ ____ ____ [[Present Perfect|Presente Perfecto]]?', options: ['[[we use|]] [[for general experiences|para experiencias generales]]', '[[we use|]] [[for specific dates|para fechas específicas]]', '[[we use|]] [[for future|para futuro]]'], correctAnswer: 0, explanation: '[[Present Perfect|Presente Perfecto]] = [[general|general]] [[experience|experiencia]] [[in life|en la vida]].' },
];

export const UNIT_45_LESSON_3_READING: Exercise[] = QUESTIONS.map((q, i) => ({
  id: `a2-u45-l3-r${i + 1}`,
  type: 'reading',
  level: 'A2',
  topic: 'Present Perfect vs Past Simple',
  difficulty: 'easy',
  transcript: READING_TRANSCRIPT,
  content: { title: LESSON_TITLE, instructions: INSTRUCTIONS, questions: [q] },
  topicName: 'Reading',
}));
