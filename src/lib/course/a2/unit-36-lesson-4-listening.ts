/**
 * Unidad 36 — Lección 4: Comprensión auditiva (Weekend & Holiday Plans)
 * 15 actividades: 1 audio + 15 preguntas
 */

import { Exercise } from '@/lib/exercise-generator';

const LESSON_TITLE = '[[Listening|Comprensión auditiva]]';
const LISTENING_TRANSCRIPT = `[[Hi|Hola]] [[Anna|Anna]]! [[What|Qué]] [[are|vas]] [[you|tú]] [[going to|a]] [[do|hacer]] [[this|este]] [[weekend|fin de semana]]? [[I|Yo]] [[am going to|voy a]] [[visit|visitar]] [[my|mis]] [[grandparents|abuelos]] [[on|el]] [[Saturday|sábado]]. [[On|El]] [[Sunday|domingo]] [[I|yo]] [[am going to|voy a]] [[go|ir]] [[to|a]] [[the|el]] [[cinema|cine]] [[with|con]] [[my|mis]] [[sister|hermana]]. [[What|Qué]] [[about|sobre]] [[you|tú]]? [[I|Yo]] [[am going to|voy a]] [[stay|quedarme]] [[at|en]] [[home|casa]] [[and|y]] [[read|leer]] [[a|un]] [[book|libro]]. [[Maybe|Quizás]] [[we|nosotros]] [[can|podemos]] [[meet|quedar]] [[next|el próximo]] [[weekend|fin de semana]]? [[That|Eso]] [[sounds|suena]] [[great|genial]]!`;

const INSTRUCTIONS = 'Escucha el audio de abajo. Puedes leer la transcripción después de escuchar. Después responde las preguntas.';

const QUESTIONS = [
  { question: '[[Who|Quiénes]] [[are|están]] [[talking|hablando]]?', options: ['[[Anna|Anna]] [[and|y]] [[a|un]] [[friend|amigo]]', '[[Two|Dos]] [[strangers|desconocidos]]', '[[A|Un]] [[teacher|profesor]] [[and|y]] [[student|estudiante]]', '[[Brother|Hermano]] [[and|y]] [[sister|hermana]]'], correctAnswer: 0, explanation: '[[Anna|Anna]] [[and|y]] [[another|otra]] [[person|persona]] [[are|están]] [[talking|hablando]].' },
  { question: '[[What|Qué]] [[is|va]] [[Anna|Anna]] [[going to|a]] [[do|hacer]] [[on|el]] [[Saturday|sábado]]?', options: ['[[Go|Ir]] [[to|a]] [[the|el]] [[cinema|cine]]', '[[Visit|Visitar]] [[her|sus]] [[grandparents|abuelos]]', '[[Stay|Quedarse]] [[at|en]] [[home|casa]]', '[[Read|Leer]] [[a|un]] [[book|libro]]'], correctAnswer: 1, explanation: '[[She|Ella]] [[says|dice]] "[[I am going to visit my grandparents|Voy a visitar a mis abuelos]]".' },
  { question: '[[What|Qué]] [[is|va]] [[Anna|Anna]] [[going to|a]] [[do|hacer]] [[on|el]] [[Sunday|domingo]]?', options: ['[[Visit|Visitar]] [[grandparents|abuelos]]', '[[Go|Ir]] [[to|a]] [[the|el]] [[cinema|cine]] [[with|con]] [[her|su]] [[sister|hermana]]', '[[Stay|Quedarse]] [[at|en]] [[home|casa]]', '[[Read|Leer]] [[a|un]] [[book|libro]]'], correctAnswer: 1, explanation: '[[She|Ella]] [[says|dice]] "[[I am going to go to the cinema with my sister|Voy a ir al cine con mi hermana]]".' },
  { question: '[[What|Qué]] [[is|va]] [[the|la]] [[other|otra]] [[person|persona]] [[going to|a]] [[do|hacer]]?', options: ['[[Visit|Visitar]] [[grandparents|abuelos]]', '[[Go|Ir]] [[to|a]] [[the|el]] [[cinema|cine]]', '[[Stay|Quedarse]] [[at|en]] [[home|casa]] [[and|y]] [[read|leer]] [[a|un]] [[book|libro]]', '[[Travel|Viajar]]'], correctAnswer: 2, explanation: '[[He/She|Él/Ella]] [[says|dice]] "[[I am going to stay at home and read a book|Voy a quedarme en casa y leer un libro]]".' },
  { question: '[[Do|¿]] [[they|ellos]] [[plan|planean]] [[to|a]] [[meet|quedar]]?', options: ['[[This|Este]] [[weekend|fin de semana]]', '[[Next|El próximo]] [[weekend|fin de semana]]', '[[Never|Nunca]]', '[[Tomorrow|Mañana]]'], correctAnswer: 1, explanation: '[[One|Uno]] [[suggests|sugiere]] "[[maybe we can meet next weekend|quizás podemos quedar el próximo fin de semana]]".' },
  { question: '[[The|La]] [[other|otra]] [[person|persona]] [[agrees|está de acuerdo]] [[with|con]] [[meeting|quedar]] [[next|el próximo]] [[weekend|fin de semana]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'True', explanation: '[[True|Verdadero]]. [[He/She|Él/Ella]] [[says|dice]] "[[That sounds great|Eso suena genial]]".' },
  { question: '[[What|Cuál]] [[is|es]] [[the|el]] [[main|principal]] [[topic|tema]] [[of|del]] [[this|este]] [[audio|audio]]?', options: ['[[Work|Trabajo]]', '[[Weekend|Planes]] [[plans|de fin de semana]]', '[[Weather|Tiempo]]', '[[Shopping|Compras]]'], correctAnswer: 1, explanation: '[[The|El]] [[audio|audio]] [[is|es]] [[about|sobre]] [[weekend|fin de semana]] [[plans|planes]].' },
  { question: '[[Anna|Anna]] [[has|tiene]] ____ ____ ____ ____ [[plans|planes]] ____ ____ ____ ____ [[weekend|este fin de semana]].', options: ['[[one|uno]]', '[[two|dos]]', '[[three|tres]]', '[[no|ninguno]]'], correctAnswer: 1, explanation: '[[Two|Dos]]: [[visit grandparents|visitar abuelos]], [[cinema|cine]].' },
  { question: '[[Who|Con quién]] [[is|va]] [[Anna|Anna]] [[going to|a]] [[go|ir]] [[to|al]] [[the|cine]] [[cinema|?]]', options: ['[[Her|Su]] [[friend|amigo]]', '[[Her|Su]] [[sister|hermana]]', '[[Her|Sus]] [[grandparents|abuelos]]', '[[Alone|Sola]]'], correctAnswer: 1, explanation: '[[She|Ella]] [[says|dice]] "[[with my sister|con mi hermana]]".' },
  { question: '[[The|La]] ____ ____ ____ ____ [[person|persona]] ____ ____ ____ ____ [[plans|planes]] ____ ____ ____ ____ [[relax|relajarse]].', options: ['[[other|otra]]', '[[first|primera]]', '[[second|segunda]]', '[[third|tercera]]'], correctAnswer: 0, explanation: '[[The|La]] [[other|otra]] [[person|persona]] [[plans|planea]] [[to|a]] [[relax|relajarse]] [[at|en]] [[home|casa]].' },
  { question: '[[Anna|Anna]] [[uses|usa]] ____ ____ ____ ____ [[for|para]] ____ ____ ____ ____ [[plans|planes]].', options: ['[[going to|going to]]', '[[will|will]]', '[[present|presente]]', '[[past|pasado]]'], correctAnswer: 0, explanation: '[[Going to|Going to]] [[for|para]] [[weekend|fin de semana]] [[plans|planes]].' },
  { question: '[[The|La]] [[conversation|conversación]] [[is|es]] ____.', options: ['[[formal|formal]]', '[[informal|informal]]', '[[business|de negocios]]', '[[academic|académica]]'], correctAnswer: 1, explanation: '[[Informal|Informal]] - [[friends|amigos]] [[talking|hablando]] [[about|sobre]] [[weekend|fin de semana]].' },
  { question: '[[What|Qué]] [[does|hará]] [[the|la]] [[other|otra]] [[person|persona]] [[do|la otra persona]] [[this|este]] [[weekend|fin de semana]]?', options: ['[[Go out|Salir]]', '[[Stay|Quedarse]] [[at|en]] [[home|casa]] [[and|y]] [[read|leer]]', '[[Travel|Viajar]]', '[[Work|Trabajar]]'], correctAnswer: 1, explanation: '[[He/She|Él/Ella]] [[says|dice]] "[[stay at home and read a book|quedarse en casa y leer un libro]]".' },
  { question: '[[They|Ellos]] ____ ____ ____ ____ [[meet|quedar]] ____ ____ ____ ____ [[weekend|este fin de semana]].', options: ['[[will|quedarán]]', '[[will not|no quedarán]]', '[[might|podrían]]', '[[cannot|cannot]]'], correctAnswer: 1, explanation: '[[They|Ellos]] [[plan|planean]] [[to|a]] [[meet|quedar]] [[next|el próximo]] [[weekend|fin de semana]], [[not|no]] [[this|este]].' },
];

export const UNIT_36_LESSON_4_LISTENING: Exercise[] = QUESTIONS.map((q, i) => ({
  id: `a2-u36-l4-l${i + 1}`,
  type: 'listening',
  level: 'A2',
  topic: 'Weekend & Holiday Plans',
  difficulty: 'easy',
  transcript: LISTENING_TRANSCRIPT,
  content: { title: LESSON_TITLE, instructions: INSTRUCTIONS, questions: [q] },
  topicName: 'Listening',
}));
