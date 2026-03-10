/**
 * Unidad 56 B1 — Lección 3: Comprensión lectora (Sport)
 * 15 actividades
 */

import { Exercise } from '@/lib/exercise-generator';

const LESSON_TITLE = '[[Reading|Comprensión lectora]]';
const READING_TRANSCRIPT = `[[I|Yo]] [[love|me encanta]] [[sport|el deporte]]. [[I|Yo]] [[have been playing|he estado jugando]] [[football|fútbol]] [[since I was eight|desde que tenía ocho años]]. [[Last year|El año pasado]] [[our team|nuestro equipo]] [[won|ganó]] [[the championship|el campeonato]] [[and|y]] [[we|nosotros]] [[were awarded|fuimos premiados]] [[a trophy|un trofeo]]. [[The match|El partido]] [[was played|fue jugado]] [[at the new stadium|en el nuevo estadio]] [[which|que]] [[was built|fue construido]] [[in 2020|en 2020]]. [[If|Si]] [[you|tú]] [[train|entrenas]] [[hard|duro]], [[you|tú]] [[will improve|mejorarás]]. [[My coach|Mi entrenador]] [[told me|me dijo]] [[that|que]] [[I should|debería]] [[warm up|calentar]] [[before every match|antes de cada partido]]. [[Next month|El próximo mes]] [[I|yo]] [[am running|estoy corriendo]] [[a marathon|un maratón]]. [[I|Yo]] [[hope|espero]] [[to finish|terminar]] [[it|él]].`;

const INSTRUCTIONS = 'Lee el texto de abajo. Después responde las preguntas.';

const QUESTIONS = [
  { question: '[[How long|Cuánto tiempo]] [[has the person been playing football|ha estado jugando fútbol la persona]]?', options: ['[[Since age five|Desde los cinco años]]', '[[Since age eight|Desde los ocho años]]', '[[Since last year|Desde el año pasado]]'], correctAnswer: 1, explanation: '[[The text says|El texto dice]] "[[since I was eight|desde que tenía ocho años]]".' },
  { question: '[[What|Qué]] [[did the team win|ganó el equipo]] [[last year|el año pasado]]?', options: ['[[A medal|Una medalla]]', '[[The championship|El campeonato]]', '[[A marathon|Un maratón]]'], correctAnswer: 1, explanation: '[[The text says|El texto dice]] "[[our team won the championship|nuestro equipo ganó el campeonato]]".' },
  { question: '[[What|Qué]] [[were they awarded|les premiaron]]?', options: ['[[A medal|Una medalla]]', '[[A trophy|Un trofeo]]', '[[A stadium|Un estadio]]'], correctAnswer: 1, explanation: '[[The text says|El texto dice]] "[[we were awarded a trophy|fuimos premiados un trofeo]]".' },
  { question: '[[When|Cuándo]] [[was the stadium built|fue construido el estadio]]?', options: ['[[In 2019|En 2019]]', '[[In 2020|En 2020]]', '[[In 2021|En 2021]]'], correctAnswer: 1, explanation: '[[The text says|El texto dice]] "[[was built in 2020|fue construido en 2020]]".' },
  { question: '[[What|Qué]] [[advice|consejo]] [[does the coach give|da el entrenador]]?', options: ['[[To give up|Rendirse]]', '[[To warm up before every match|Calentar antes de cada partido]]', '[[To stop playing|Dejar de jugar]]'], correctAnswer: 1, explanation: '[[The text says|El texto dice]] "[[I should warm up before every match|debería calentar antes de cada partido]]".' },
  { question: '[[The person|La persona]] [[is running|está corriendo]] [[a marathon|un maratón]] [[next month|el próximo mes]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'True', explanation: '[[True|Verdadero]]. [[The text says|El texto dice]] "[[Next month I am running a marathon|el próximo mes estoy corriendo un maratón]]".' },
  { question: '[[Passive voice|Voz pasiva]] [[is used|se usa]] [[for the match and stadium|para el partido y estadio]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'True', explanation: '[[True|Verdadero]]. "[[was played|fue jugado]]", "[[was built|fue construido]]".' },
  { question: '[[First conditional|Primer condicional]] [[is used|se usa]] [[for training advice|para consejo de entrenamiento]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'True', explanation: '[[True|Verdadero]]. "[[If you train hard|si entrenas duro]]... [[you will improve|mejorarás]]".' },
  { question: '[[What|Cuál]] [[is|es]] [[the main topic|el tema principal]] [[of|del]] [[this text|este texto]]?', options: ['[[Food|Comida]]', '[[Sport and achievements|Deporte y logros]]', '[[Travel|Viajes]]'], correctAnswer: 1, explanation: '[[The text|El texto]] [[talks about|habla sobre]] [[sport and achievements|deporte y logros]].' },
  { question: '[[Reported speech|Estilo indirecto]] [[is used|se usa]] [[for|para]] [[the coach\'s advice|el consejo del entrenador]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'True', explanation: '[[True|Verdadero]]. "[[My coach told me that I should|mi entrenador me dijo que debería]]".' },
  { question: '[[The person|La persona]] [[has finished|ha terminado]] [[a marathon before|un maratón antes]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'False', explanation: '[[False|Falso]]. [[They hope to finish|Espera terminar]] [[next month|el próximo mes]].' },
  { question: '[[Present perfect continuous|Presente perfecto continuo]] [[describes|describe]] [[playing football|jugar fútbol]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'True', explanation: '[[True|Verdadero]]. "[[I have been playing football|he estado jugando fútbol]]".' },
  { question: '[[The team|El equipo]] [[won|ganó]] [[the championship|el campeonato]] [[last year|el año pasado]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'True', explanation: '[[True|Verdadero]]. [[The text says|El texto dice]] "[[our team won the championship|nuestro equipo ganó el campeonato]]".' },
  { question: '[[The stadium|El estadio]] [[is new|es nuevo]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'True', explanation: '[[True|Verdadero]]. "[[the new stadium|el nuevo estadio]]" [[was built in 2020|fue construido en 2020]].' },
  { question: '[[How many|Cuántos]] [[sport-related words|palabras relacionadas con deporte]] [[does the text mention|menciona el texto]]?', options: ['[[Few|Pocas]]', '[[Several|Varias]]', '[[None|Ninguna]]'], correctAnswer: 1, explanation: '[[Several|Varias]]: [[football|fútbol]], [[team|equipo]], [[championship|campeonato]], [[trophy|trofeo]], [[stadium|estadio]], [[coach|entrenador]], [[marathon|maratón]].' },
];

export const UNIT_56_LESSON_3_READING: Exercise[] = QUESTIONS.map((q, i) => ({
  id: `b1-u56-l3-r${i + 1}`,
  type: 'reading',
  level: 'B1',
  topic: 'Sport',
  difficulty: 'easy',
  transcript: READING_TRANSCRIPT,
  content: { title: LESSON_TITLE, instructions: INSTRUCTIONS, questions: [q] },
  topicName: 'Reading',
}));
