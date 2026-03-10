/**
 * Unidad 56 B1 — Lección 4: Comprensión auditiva (Sport)
 * 15 actividades
 */

import { Exercise } from '@/lib/exercise-generator';

const LESSON_TITLE = '[[Listening|Comprensión auditiva]]';
const LISTENING_TRANSCRIPT = `[[Hi|Hola]], [[I|yo]] [[am|soy]] [[Sarah|Sarah]] [[and|y]] [[I|yo]] [[love|me encanta]] [[swimming|nadar]]. [[I|Yo]] [[have been swimming|he estado nadando]] [[for five years|durante cinco años]]. [[Last weekend|El fin de semana pasado]] [[a competition|una competición]] [[was held|fue celebrada]] [[at our pool|en nuestra piscina]]. [[I|Yo]] [[won|gané]] [[a gold medal|una medalla de oro]] [[for|por]] [[the 100 metres|los 100 metros]]. [[My coach|Mi entrenadora]] [[told me|me dijo]] [[that|que]] [[I should|debería]] [[keep training|seguir entrenando]]. [[If|Si]] [[I|yo]] [[continue|continúo]] [[practising|practicando]], [[I|yo]] [[might|podría]] [[compete|competir]] [[at national level|a nivel nacional]]. [[The pool|La piscina]] [[was built|fue construida]] [[three years ago|hace tres años]]. [[Next year|El próximo año]] [[I|yo]] [[am hoping|estoy esperando]] [[to join|unirme]] [[the national team|al equipo nacional]].`;

const INSTRUCTIONS = 'Escucha el audio. Puedes leer la transcripción. Después responde las preguntas.';

const QUESTIONS = [
  { question: '[[What|Cuál]] [[is the speaker\'s name|es el nombre del hablante]]?', options: ['[[Sara|Sara]]', '[[Sarah|Sarah]]', '[[Sandra|Sandra]]'], correctAnswer: 1, explanation: '[[She says|Dice]] "[[I am Sarah|soy Sarah]]".' },
  { question: '[[What sport|Qué deporte]] [[does Sarah do|practica Sarah]]?', options: ['[[Running|Correr]]', '[[Swimming|Nadar]]', '[[Football|Fútbol]]'], correctAnswer: 1, explanation: '[[She says|Dice]] "[[I love swimming|me encanta nadar]]".' },
  { question: '[[How long|Cuánto tiempo]] [[has Sarah been swimming|ha estado nadando Sarah]]?', options: ['[[Three years|Tres años]]', '[[Five years|Cinco años]]', '[[Seven years|Siete años]]'], correctAnswer: 1, explanation: '[[She says|Dice]] "[[I have been swimming for five years|he estado nadando durante cinco años]]".' },
  { question: '[[What|Qué]] [[did Sarah win|ganó Sarah]] [[last weekend|el fin de semana pasado]]?', options: ['[[A trophy|Un trofeo]]', '[[A gold medal|Una medalla de oro]]', '[[A certificate|Un certificado]]'], correctAnswer: 1, explanation: '[[She says|Dice]] "[[I won a gold medal|gané una medalla de oro]]".' },
  { question: '[[What|Qué]] [[did the coach tell Sarah|le dijo la entrenadora a Sarah]]?', options: ['[[To stop|Parar]]', '[[To keep training|Seguir entrenando]]', '[[To change sport|Cambiar de deporte]]'], correctAnswer: 1, explanation: '[[She says|Dice]] "[[my coach told me that I should keep training|mi entrenadora me dijo que debería seguir entrenando]]".' },
  { question: '[[A competition|Una competición]] [[was held|fue celebrada]] [[at the pool|en la piscina]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'True', explanation: '[[True|Verdadero]]. [[She says|Dice]] "[[a competition was held at our pool|una competición fue celebrada en nuestra piscina]]".' },
  { question: '[[Sarah|Sarah]] [[won|ganó]] [[the 100 metres|los 100 metros]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'True', explanation: '[[True|Verdadero]]. [[She says|Dice]] "[[I won a gold medal for the 100 metres|gané una medalla de oro por los 100 metros]]".' },
  { question: '[[When|Cuándo]] [[was the pool built|fue construida la piscina]]?', options: ['[[Five years ago|Hace cinco años]]', '[[Three years ago|Hace tres años]]', '[[Last year|El año pasado]]'], correctAnswer: 1, explanation: '[[She says|Dice]] "[[The pool was built three years ago|la piscina fue construida hace tres años]]".' },
  { question: '[[What|Cuál]] [[is|es]] [[the main topic|el tema principal]] [[of|del]] [[this listening|esta escucha]]?', options: ['[[Food|Comida]]', '[[Swimming and achievements|Natación y logros]]', '[[Travel|Viajes]]'], correctAnswer: 1, explanation: '[[The listening|La escucha]] [[talks about|habla sobre]] [[swimming and achievements|natación y logros]].' },
  { question: '[[Sarah|Sarah]] [[hopes|espera]] [[to join|unirse]] [[the national team|al equipo nacional]] [[next year|el próximo año]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'True', explanation: '[[True|Verdadero]]. [[She says|Dice]] "[[Next year I am hoping to join the national team|el próximo año estoy esperando unirme al equipo nacional]]".' },
  { question: '[[First conditional|Primer condicional]] [[is used|se usa]] [[for|para]] [[future possibility|posibilidad futura]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'True', explanation: '[[True|Verdadero]]. "[[If I continue|si continúo]]... [[I might compete|podría competir]]".' },
  { question: '[[Passive voice|Voz pasiva]] [[is used|se usa]] [[for|para]] [[the competition and pool|la competición y piscina]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'True', explanation: '[[True|Verdadero]]. "[[was held|fue celebrada]]", "[[was built|fue construida]]".' },
  { question: '[[Sarah|Sarah]] [[might compete|podría competir]] [[at national level|a nivel nacional]] [[if|si]] [[she continues|continúa]] [[practising|practicando]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'True', explanation: '[[True|Verdadero]]. [[She says|Dice]] "[[I might compete at national level|podría competir a nivel nacional]]".' },
  { question: '[[Reported speech|Estilo indirecto]] [[is used|se usa]] [[for|para]] [[the coach\'s advice|el consejo de la entrenadora]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'True', explanation: '[[True|Verdadero]]. "[[My coach told me that I should|mi entrenadora me dijo que debería]]".' },
  { question: '[[The listening|La escucha]] [[mentions|menciona]] [[medals|medallas]], [[pool|piscina]] [[and|y]] [[team|equipo]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'True', explanation: '[[True|Verdadero]]. [[All are mentioned|Todos están mencionados]].' },
];

export const UNIT_56_LESSON_4_LISTENING: Exercise[] = QUESTIONS.map((q, i) => ({
  id: `b1-u56-l4-l${i + 1}`,
  type: 'listening',
  level: 'B1',
  topic: 'Sport',
  difficulty: 'easy',
  transcript: LISTENING_TRANSCRIPT,
  content: { title: LESSON_TITLE, instructions: INSTRUCTIONS, questions: [q] },
  topicName: 'Listening',
}));
