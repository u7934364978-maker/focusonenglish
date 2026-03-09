/**
 * Unidad 32 — Lección 3: Comprensión lectora (Future with 'Present Continuous': Arrangements)
 * 15 actividades: 1 texto + 15 preguntas
 */

import { Exercise } from '@/lib/exercise-generator';

const LESSON_TITLE = '[[Reading|Comprensión lectora]]';
const READING_TRANSCRIPT = `[[Next|La próxima]] [[week|semana]] [[I|yo]] [[am meeting|quedo]] [[my|con mi]] [[old|viejo]] [[friend|amigo]] [[from|de]] [[university|universidad]]. [[We|Nosotros]] [[are having|tenemos]] [[lunch|almuerzo]] [[at|en]] [[a|un]] [[restaurant|restaurante]] [[in|en]] [[the|el]] [[centre|centro]]. [[On|El]] [[Saturday|sábado]] [[I|yo]] [[am flying|vuelo]] [[to|a]] [[Madrid|Madrid]] [[for|para]] [[a|una]] [[business|negocios]] [[trip|viaje]]. [[I|Yo]] [[am staying|me quedo]] [[at|en]] [[a|un]] [[hotel|hotel]] [[near|cerca de]] [[the|la]] [[airport|aeropuerto]]. [[On|El]] [[Sunday|domingo]] [[I|yo]] [[am attending|asisto]] [[a|a una]] [[conference|conferencia]] [[all|todo]] [[day|el día]]. [[My|Mi]] [[wife|esposa]] [[is joining|se une]] [[me|a mí]] [[on|el]] [[Monday|lunes]] [[for|para]] [[a|unos]] [[few|pocos]] [[days|días]] [[of|de]] [[sightseeing|turismo]].`;

const INSTRUCTIONS = 'Lee el texto de abajo. Después responde las preguntas.';

const QUESTIONS = [
  { question: '[[Who|Con quién]] [[is|queda]] [[the|el]] [[writer|autor]] [[meeting|quedando]] [[next|la próxima]] [[week|semana]]?', options: ['[[His|Su]] [[colleague|colega]]', '[[His|Su]] [[old|viejo]] [[friend|amigo]] [[from|de]] [[university|universidad]]', '[[His|Su]] [[family|familia]]', '[[Nobody|Nadie]]'], correctAnswer: 1, explanation: '[[The|El]] [[text|texto]] [[says|dice]] "[[I am meeting my old friend from university|Quedo con mi viejo amigo de universidad]]".' },
  { question: '[[What|Qué]] [[are|van]] [[they|ellos]] [[having|a tener]] [[for|para]] [[lunch|almuerzo]]?', options: ['[[At|En]] [[a|un]] [[restaurant|restaurante]] [[in|en]] [[the|el]] [[centre|centro]]', '[[At|En]] [[home|casa]]', '[[At|En]] [[the|el]] [[office|oficina]]', '[[At|En]] [[a|un]] [[cafe|café]]'], correctAnswer: 0, explanation: '[[The|El]] [[text|texto]] [[says|dice]] "[[We are having lunch at a restaurant in the centre|Tenemos almuerzo en un restaurante en el centro]]".' },
  { question: '[[When|Cuándo]] [[is|vuela]] [[the|el]] [[writer|autor]] [[flying|volando]] [[to|a]] [[Madrid|Madrid]]?', options: ['[[Friday|Viernes]]', '[[Saturday|Sábado]]', '[[Sunday|Domingo]]', '[[Monday|Lunes]]'], correctAnswer: 1, explanation: '[[He|Él]] [[says|dice]] "[[On Saturday I am flying to Madrid|El sábado vuelo a Madrid]]".' },
  { question: '[[Why|Por qué]] [[is|va]] [[the|el]] [[writer|autor]] [[going|yendo]] [[to|a]] [[Madrid|Madrid]]?', options: ['[[Holiday|Vacaciones]]', '[[Business|Negocios]] [[trip|viaje]]', '[[Visit|Visitar]] [[family|familia]]', '[[Conference|Conferencia]] [[only|solo]]'], correctAnswer: 1, explanation: '[[He|Él]] [[says|dice]] "[[for a business trip|para un viaje de negocios]]".' },
  { question: '[[Where|Dónde]] [[is|se]] [[the|el]] [[writer|autor]] [[staying|quedando]] [[in|en]] [[Madrid|Madrid]]?', options: ['[[In|En]] [[the|el]] [[centre|centro]]', '[[At|En]] [[a|un]] [[hotel|hotel]] [[near|cerca de]] [[the|el]] [[airport|aeropuerto]]', '[[With|Con]] [[friends|amigos]]', '[[At|En]] [[an|un]] [[apartment|apartamento]]'], correctAnswer: 1, explanation: '[[He|Él]] [[says|dice]] "[[I am staying at a hotel near the airport|Me quedo en un hotel cerca del aeropuerto]]".' },
  { question: '[[What|Qué]] [[is|va]] [[the|el]] [[writer|autor]] [[attending|a asistir]] [[on|el]] [[Sunday|domingo]]?', options: ['[[A|Una]] [[meeting|reunión]]', '[[A|Una]] [[conference|conferencia]] [[all|todo]] [[day|el día]]', '[[A|Un]] [[concert|concierto]]', '[[Nothing|Nada]]'], correctAnswer: 1, explanation: '[[He|Él]] [[says|dice]] "[[I am attending a conference all day|Asisto a una conferencia todo el día]]".' },
  { question: '[[Who|Quién]] [[is|va]] [[joining|a unirse]] [[the|el]] [[writer|autor]] [[on|el]] [[Monday|lunes]]?', options: ['[[His|Su]] [[friend|amigo]]', '[[His|Su]] [[wife|esposa]]', '[[His|Su]] [[colleague|colega]]', '[[His|Su]] [[boss|jefe]]'], correctAnswer: 1, explanation: '[[He|Él]] [[says|dice]] "[[My wife is joining me on Monday|Mi esposa se une a mí el lunes]]".' },
  { question: '[[The|El]] [[writer|autor]] [[uses|usa]] [[Present Continuous|Present Continuous]] [[for|para]] [[arrangements|arreglos]] [[already|ya]] [[made|hechos]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'True', explanation: '[[True|Verdadero]]. [[All|Todos]] [[events|eventos]] [[have|tienen]] [[specific|fechas]] [[dates|específicas]].' },
  { question: '[[The|El]] [[writer|autor]] [[is|está]] [[travelling|viajando]] [[alone|solo]] [[all|todo]] [[week|la semana]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'False', explanation: '[[False|Falso]]. [[His|Su]] [[wife|esposa]] [[joins|se une]] [[him|él]] [[on|el]] [[Monday|lunes]].' },
  { question: '[[The|El]] [[trip|viaje]] [[is|es]] [[only|solo]] [[for|para]] [[business|negocios]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'False', explanation: '[[False|Falso]]. [[His|Su]] [[wife|esposa]] [[joins|se une]] [[for|para]] [[sightseeing|turismo]].' },
  { question: '[[What|Cuál]] [[is|es]] [[the|el]] [[main|principal]] [[topic|tema]] [[of|del]] [[this|este]] [[text|texto]]?', options: ['[[Past|Viajes]] [[trips|pasados]]', '[[Future|Arreglos]] [[arrangements|futuros]] [[using|usando]] [[Present Continuous|Present Continuous]]', '[[Weather|Tiempo]]', '[[Food|Comida]]'], correctAnswer: 1, explanation: '[[The|El]] [[text|texto]] [[is|es]] [[about|sobre]] [[future|futuros]] [[arrangements|arreglos]].' },
  { question: '[[How many|Cuántos]] [[events|eventos]] [[does|menciona]] [[the|el]] [[writer|autor]] [[mention|mencionar]]?', options: ['[[two|dos]]', '[[three|tres]]', '[[four|cuatro]]', '[[five|cinco]]'], correctAnswer: 3, explanation: '[[Four|Cuatro]]: [[lunch|almuerzo]], [[flight|vuelo]], [[conference|conferencia]], [[wife joining|esposa uniéndose]].' },
  { question: '[[Where|Dónde]] [[is|está]] [[the|el]] [[restaurant|restaurante]]?', options: ['[[Near|cerca de]] [[the|el]] [[airport|aeropuerto]]', '[[In|En]] [[the|el]] [[centre|centro]]', '[[At|En]] [[the|el]] [[hotel|hotel]]', '[[At|En]] [[home|casa]]'], correctAnswer: 1, explanation: '[[The|El]] [[text|texto]] [[says|dice]] "[[at a restaurant in the centre|en un restaurante en el centro]]".' },
  { question: '[[What|Qué]] [[will|van]] [[the|el]] [[writer|autor]] [[and|y]] [[his|su]] [[wife|esposa]] [[do|hacer]] [[together|juntos]]?', options: ['[[Work|Trabajar]]', '[[Sightseeing|Turismo]]', '[[Conference|Conferencia]]', '[[Business|Negocios]]'], correctAnswer: 1, explanation: '[[He|Él]] [[says|dice]] "[[a few days of sightseeing|unos días de turismo]]".' },
  { question: '[[The|El]] [[writer|autor]] [[has|tiene]] [[a|una]] [[busy|ocupada]] [[schedule|agenda]] [[next|la próxima]] [[week|semana]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'True', explanation: '[[True|Verdadero]]. [[Lunch|Almuerzo]], [[flight|vuelo]], [[conference|conferencia]], [[wife|esposa]] — [[many|muchos]] [[arrangements|arreglos]].' },
];

export const UNIT_32_LESSON_3_READING: Exercise[] = QUESTIONS.map((q, i) => ({
  id: `a2-u32-l3-r${i + 1}`,
  type: 'reading',
  level: 'A2',
  topic: "Future with 'Present Continuous': Arrangements",
  difficulty: 'easy',
  transcript: READING_TRANSCRIPT,
  content: { title: LESSON_TITLE, instructions: INSTRUCTIONS, questions: [q] },
  topicName: 'Reading',
}));
