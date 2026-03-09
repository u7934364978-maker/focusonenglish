/**
 * Unidad 19 — Lección 4: Comprensión auditiva (How questions, frequency/quantity/duration)
 * 15 actividades: 1 audio (transcripción) + 15 preguntas
 */

import { Exercise } from '@/lib/exercise-generator';

const LESSON_TITLE = '[[Listening|Comprensión auditiva]]';
const LISTENING_TRANSCRIPT = `[[Hi|Hola]]! [[I|Yo]] [[am|soy]] [[Lisa|Lisa]]. [[People|La gente]] [[often|a menudo]] [[ask|pregunta]] [[me|a mí]] [[about|sobre]] [[my|mi]] [[habits|hábitos]]. [[How often|Con qué frecuencia]] [[do|hago]] [[I|yo]] [[exercise|ejercicio]]? [[I|Yo]] [[go|voy]] [[running|a correr]] [[four times|cuatro veces]] [[a|a]] [[week|semana]]. [[How long|Cuánto tiempo]] [[do|hago]] [[I|yo]] [[run|correr]] [[each|cada]] [[time|vez]]? [[I|Yo]] [[run|corro]] [[for|durante]] [[thirty minutes|treinta minutos]]. [[How much|Cuánto]] [[coffee|café]] [[do|bebo]] [[I|yo]] [[drink|beber]] [[a|al]] [[day|día]]? [[I|Yo]] [[drink|bebo]] [[two cups|dos tazas]] [[every|cada]] [[morning|mañana]]. [[How many|Cuántas]] [[languages|idiomas]] [[do|hablo]] [[I|yo]] [[speak|hablar]]? [[I|Yo]] [[speak|hablo]] [[three|tres]]: [[English|inglés]], [[Spanish|español]] [[and|y]] [[French|francés]]. [[I|Yo]] [[have|tengo]] [[been|estado]] [[learning|aprendiendo]] [[Spanish|español]] [[for|durante]] [[two years|dos años]]. [[I|Yo]] [[feel|me siento]] [[energetic|enérgica]] [[because|porque]] [[I|yo]] [[exercise|hago ejercicio]] [[regularly|regularmente]] [[and|y]] [[drink|bebo]] [[enough|suficiente]] [[water|agua]].`;

const INSTRUCTIONS = 'Escucha el audio de abajo. Puedes leer la transcripción después de escuchar. Después responde las preguntas.';

const QUESTIONS = [
  {
    question: '[[What|Cuál]] [[is|es]] [[her|su]] [[name|nombre]]?',
    options: ['[[Laura|Laura]]', '[[Lisa|Lisa]]', '[[Lucy|Lucy]]', '[[Linda|Linda]]'],
    correctAnswer: 1,
    explanation: '[[She|Ella]] [[says|dice]]: "[[I am Lisa|Soy Lisa]]".',
  },
  {
    question: '[[How often|Con qué frecuencia]] [[does|va]] [[she|ella]] [[go|ir]] [[running|a correr]]?',
    options: ['[[twice a week|dos veces a la semana]]', '[[three times a week|tres veces a la semana]]', '[[four times a week|cuatro veces a la semana]]', '[[every day|cada día]]'],
    correctAnswer: 2,
    explanation: '[[She|Ella]] [[says|dice]] "[[I go running four times a week|Voy a correr cuatro veces a la semana]]".',
  },
  {
    question: '[[How long|Cuánto tiempo]] [[does|corre]] [[she|ella]] [[run|correr]] [[each|cada]] [[time|vez]]?',
    options: ['[[twenty minutes|veinte minutos]]', '[[thirty minutes|treinta minutos]]', '[[forty minutes|cuarenta minutos]]', '[[one hour|una hora]]'],
    correctAnswer: 1,
    explanation: '[[She|Ella]] [[says|dice]] "[[I run for thirty minutes|Corro durante treinta minutos]]".',
  },
  {
    question: '[[How much|Cuánto]] [[coffee|café]] [[does|bebe]] [[she|ella]] [[drink|beber]] [[a|al]] [[day|día]]?',
    options: ['[[one cup|una taza]]', '[[two cups|dos tazas]]', '[[three cups|tres tazas]]', '[[four cups|cuatro tazas]]'],
    correctAnswer: 1,
    explanation: '[[She|Ella]] [[says|dice]] "[[I drink two cups every morning|Bebo dos tazas cada mañana]]".',
  },
  {
    question: '[[How many|Cuántos]] [[languages|idiomas]] [[does|habla]] [[she|ella]] [[speak|hablar]]?',
    options: ['[[one|uno]]', '[[two|dos]]', '[[three|tres]]', '[[four|cuatro]]'],
    correctAnswer: 2,
    explanation: '[[She|Ella]] [[says|dice]] "[[I speak three: English, Spanish and French|Hablo tres: inglés, español y francés]]".',
  },
  {
    question: '[[Which|Cuáles]] [[languages|idiomas]] [[does|habla]] [[she|ella]] [[speak|hablar]]?',
    options: ['[[English|inglés]] [[and|y]] [[German|alemán]]', '[[English|inglés]], [[Spanish|español]] [[and|y]] [[French|francés]]', '[[Spanish|español]] [[and|y]] [[Italian|italiano]]', '[[English|inglés]] [[only|solo]]'],
    correctAnswer: 1,
    explanation: '[[She|Ella]] [[says|dice]] "[[I speak three: English, Spanish and French|Hablo tres: inglés, español y francés]]".',
  },
  {
    question: '[[How long|Cuánto tiempo]] [[has|ha]] [[she|ella]] [[been|estado]] [[learning|aprendiendo]] [[Spanish|español]]?',
    options: ['[[one year|un año]]', '[[two years|dos años]]', '[[three years|tres años]]', '[[six months|seis meses]]'],
    correctAnswer: 1,
    explanation: '[[She|Ella]] [[says|dice]] "[[I have been learning Spanish for two years|He estado aprendiendo español durante dos años]]".',
  },
  {
    question: '[[Lisa|Lisa]] [[goes|va]] [[running|a correr]] [[every day|cada día]].',
    options: ['[[True|Verdadero]]', '[[False|Falso]]'],
    correctAnswer: 'False',
    explanation: '[[False|Falso]]. [[She|Ella]] [[goes|va]] [[four times|cuatro veces]] [[a|a]] [[week|semana]], [[not|no]] [[every day|cada día]].',
  },
  {
    question: '[[Lisa|Lisa]] [[drinks|bebe]] [[two cups|dos tazas]] [[of|de]] [[coffee|café]] [[every|cada]] [[morning|mañana]].',
    options: ['[[True|Verdadero]]', '[[False|Falso]]'],
    correctAnswer: 'True',
    explanation: '[[True|Verdadero]]. [[She|Ella]] [[says|dice]] "[[I drink two cups every morning|Bebo dos tazas cada mañana]]".',
  },
  {
    question: '[[Lisa|Lisa]] [[speaks|habla]] [[four|cuatro]] [[languages|idiomas]].',
    options: ['[[True|Verdadero]]', '[[False|Falso]]'],
    correctAnswer: 'False',
    explanation: '[[False|Falso]]. [[She|Ella]] [[speaks|habla]] [[three|tres]] [[languages|idiomas]].',
  },
  {
    question: '[[Lisa|Lisa]] [[feels|se siente]] [[energetic|enérgica]] [[because|porque]] [[she|ella]] [[exercises|hace ejercicio]] [[regularly|regularmente]].',
    options: ['[[True|Verdadero]]', '[[False|Falso]]'],
    correctAnswer: 'True',
    explanation: '[[True|Verdadero]]. [[She|Ella]] [[says|dice]] "[[I feel energetic because I exercise regularly|Me siento enérgica porque hago ejercicio regularmente]]".',
  },
  {
    question: '[[What|Cuál]] [[is|es]] [[the|el]] [[main|principal]] [[topic|tema]] [[of|del]] [[this|este]] [[audio|audio]]?',
    options: ['[[A|Un]] [[trip|viaje]] [[to|a]] [[the|el]] [[beach|playa]]', '[[Lisa\'s|Lisa]] [[habits|hábitos]] [[with|con]] [[How questions|preguntas con How]] [[answers|respuestas]]', '[[A|Una]] [[birthday|cumpleaños]] [[party|fiesta]]', '[[School|Escuela]] [[life|vida]]'],
    correctAnswer: 1,
    explanation: '[[The|El]] [[audio|audio]] [[answers|responde]] [[How often|Con qué frecuencia]], [[How long|Cuánto tiempo]], [[How much|Cuánto]], [[How many|Cuántos]].',
  },
  {
    question: '[[Who|Quién]] [[is|es]] [[speaking|habla]] [[in|en]] [[the|el]] [[audio|audio]]?',
    options: ['[[A|Un]] [[friend|amigo]] [[of|de]] [[Lisa|Lisa]]', '[[Lisa|Lisa]] [[herself|ella misma]]', '[[A|Un]] [[teacher|profesor]]', '[[Lisa\'s|Lisa]] [[mother|madre]]'],
    correctAnswer: 1,
    explanation: '[[Lisa|Lisa]] [[speaks|habla]] [[about|sobre]] [[herself|sí misma]] ("[[I am Lisa|Soy Lisa]]", "[[I go|Voy]]").',
  },
  {
    question: '[[What|Qué]] [[type|tipo]] [[of|de]] [[exercise|ejercicio]] [[does|hace]] [[Lisa|Lisa]] [[do|hacer]]?',
    options: ['[[swimming|natación]]', '[[running|correr]]', '[[cycling|ciclismo]]', '[[gym|gimnasio]]'],
    correctAnswer: 1,
    explanation: '[[She|Ella]] [[says|dice]] "[[I go running four times a week|Voy a correr cuatro veces a la semana]]".',
  },
  {
    question: '[[Why|Por qué]] [[does|se]] [[Lisa|Lisa]] [[feel|siente]] [[energetic|enérgica]]?',
    options: ['[[because|porque]] [[she|ella]] [[sleeps|duerme]] [[all|todo]] [[day|día]]', '[[because|porque]] [[she|ella]] [[exercises|hace ejercicio]] [[regularly|regularmente]] [[and|y]] [[drinks|bebe]] [[enough|suficiente]] [[water|agua]]', '[[because|porque]] [[she|ella]] [[has|tiene]] [[no|ningún]] [[work|trabajo]]', '[[because|porque]] [[she|ella]] [[is|está]] [[on|en]] [[holiday|vacaciones]]'],
    correctAnswer: 1,
    explanation: '[[She|Ella]] [[says|dice]] "[[I feel energetic because I exercise regularly and drink enough water|Me siento enérgica porque hago ejercicio regularmente y bebo suficiente agua]]".',
  },
];

export const UNIT_19_LESSON_4_LISTENING: Exercise[] = QUESTIONS.map((q, i) => ({
  id: `a2-u19-l4-l${i + 1}`,
  type: 'listening',
  level: 'A2',
  topic: 'How Questions',
  difficulty: 'easy',
  transcript: LISTENING_TRANSCRIPT,
  content: {
    title: LESSON_TITLE,
    instructions: INSTRUCTIONS,
    questions: [q],
  },
  topicName: 'Listening',
}));
