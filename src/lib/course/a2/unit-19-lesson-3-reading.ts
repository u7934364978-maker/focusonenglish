/**
 * Unidad 19 — Lección 3: Comprensión lectora (How questions, frequency/quantity/duration)
 * 15 actividades: 1 texto + 15 preguntas
 */

import { Exercise } from '@/lib/exercise-generator';

const LESSON_TITLE = '[[Reading|Comprensión lectora]]';
const READING_TRANSCRIPT = `[[My|Mi]] [[name|nombre]] [[is|es]] [[Jake|Jake]]. [[I|Yo]] [[am|soy]] [[a|un]] [[student|estudiante]] [[and|y]] [[I|yo]] [[have|tengo]] [[a|una]] [[busy|ocupada]] [[routine|rutina]]. [[How often|Con qué frecuencia]] [[do|hago]] [[I|yo]] [[exercise|ejercicio]]? [[I|Yo]] [[go|voy]] [[to|a]] [[the|el]] [[gym|gimnasio]] [[three times|tres veces]] [[a|a]] [[week|semana]]. [[How long|Cuánto tiempo]] [[do|hago]] [[I|yo]] [[study|estudiar]] [[every|cada]] [[day|día]]? [[I|Yo]] [[study|estudio]] [[for|durante]] [[four hours|cuatro horas]] [[every|cada]] [[day|día]]. [[How much|Cuánto]] [[water|agua]] [[do|bebo]] [[I|yo]] [[drink|beber]]? [[I|Yo]] [[drink|bebo]] [[about|alrededor]] [[two litres|dos litros]] [[a|al]] [[day|día]]. [[How many|Cuántos]] [[books|libros]] [[have|he]] [[I|yo]] [[read|leído]] [[this|este]] [[year|año]]? [[I|Yo]] [[have|he]] [[read|leído]] [[twelve|doce]] [[books|libros]]. [[I|Yo]] [[also|tambien]] [[watch|veo]] [[films|películas]] [[twice|dos veces]] [[a|a]] [[week|semana]]. [[I|Yo]] [[feel|me siento]] [[healthy|sano]] [[and|y]] [[productive|productivo]] [[because|porque]] [[I|yo]] [[have|tengo]] [[good|buenos]] [[habits|hábitos]].`;

const INSTRUCTIONS = 'Lee el texto de abajo. Después responde las preguntas.';

const QUESTIONS = [
  {
    question: '[[What|Cuál]] [[is|es]] [[his|su]] [[name|nombre]]?',
    options: ['[[Jack|Jack]]', '[[Jake|Jake]]', '[[John|John]]', '[[James|James]]'],
    correctAnswer: 1,
    explanation: '[[He|Él]] [[says|dice]]: "[[My name is Jake|Mi nombre es Jake]]".',
  },
  {
    question: '[[How often|Con qué frecuencia]] [[does|va]] [[he|él]] [[go|ir]] [[to|a]] [[the|el]] [[gym|gimnasio]]?',
    options: ['[[once a week|una vez a la semana]]', '[[twice a week|dos veces a la semana]]', '[[three times a week|tres veces a la semana]]', '[[every day|cada día]]'],
    correctAnswer: 2,
    explanation: '[[He|Él]] [[says|dice]] "[[I go to the gym three times a week|Voy al gimnasio tres veces a la semana]]".',
  },
  {
    question: '[[How long|Cuánto tiempo]] [[does|estudia]] [[he|él]] [[study|estudiar]] [[every|cada]] [[day|día]]?',
    options: ['[[two hours|dos horas]]', '[[three hours|tres horas]]', '[[four hours|cuatro horas]]', '[[five hours|cinco horas]]'],
    correctAnswer: 2,
    explanation: '[[He|Él]] [[says|dice]] "[[I study for four hours every day|Estudio durante cuatro horas cada día]]".',
  },
  {
    question: '[[How much|Cuánta]] [[water|agua]] [[does|bebe]] [[he|él]] [[drink|beber]] [[a|al]] [[day|día]]?',
    options: ['[[one litre|un litro]]', '[[two litres|dos litros]]', '[[three litres|tres litros]]', '[[four litres|cuatro litros]]'],
    correctAnswer: 1,
    explanation: '[[He|Él]] [[says|dice]] "[[I drink about two litres a day|Bebo alrededor de dos litros al día]]".',
  },
  {
    question: '[[How many|Cuántos]] [[books|libros]] [[has|ha]] [[he|él]] [[read|leído]] [[this|este]] [[year|año]]?',
    options: ['[[five|cinco]]', '[[ten|diez]]', '[[twelve|doce]]', '[[fifteen|quince]]'],
    correctAnswer: 2,
    explanation: '[[He|Él]] [[says|dice]] "[[I have read twelve books|He leído doce libros]]".',
  },
  {
    question: '[[How often|Con qué frecuencia]] [[does|ve]] [[he|él]] [[watch|ver]] [[films|películas]]?',
    options: ['[[once a week|una vez a la semana]]', '[[twice a week|dos veces a la semana]]', '[[three times a week|tres veces a la semana]]', '[[every day|cada día]]'],
    correctAnswer: 1,
    explanation: '[[He|Él]] [[says|dice]] "[[I also watch films twice a week|También veo películas dos veces a la semana]]".',
  },
  {
    question: '[[What|Qué]] [[does|es]] [[he|él]] [[do|hacer]] [[for|para]] [[a|una]] [[living|vida]]?',
    options: ['[[teacher|profesor]]', '[[student|estudiante]]', '[[doctor|médico]]', '[[engineer|ingeniero]]'],
    correctAnswer: 1,
    explanation: '[[He|Él]] [[says|dice]] "[[I am a student|Soy estudiante]]".',
  },
  {
    question: '[[Jake|Jake]] [[goes|va]] [[to|a]] [[the|el]] [[gym|gimnasio]] [[every day|cada día]].',
    options: ['[[True|Verdadero]]', '[[False|Falso]]'],
    correctAnswer: 'False',
    explanation: '[[False|Falso]]. [[He|Él]] [[goes|va]] [[three times|tres veces]] [[a|a]] [[week|semana]], [[not|no]] [[every day|cada día]].',
  },
  {
    question: '[[Jake|Jake]] [[drinks|bebe]] [[about|alrededor]] [[two litres|dos litros]] [[of|de]] [[water|agua]] [[a|al]] [[day|día]].',
    options: ['[[True|Verdadero]]', '[[False|Falso]]'],
    correctAnswer: 'True',
    explanation: '[[True|Verdadero]]. [[He|Él]] [[says|dice]] "[[I drink about two litres a day|Bebo alrededor de dos litros al día]]".',
  },
  {
    question: '[[Jake|Jake]] [[has|ha]] [[read|leído]] [[ten|diez]] [[books|libros]] [[this|este]] [[year|año]].',
    options: ['[[True|Verdadero]]', '[[False|Falso]]'],
    correctAnswer: 'False',
    explanation: '[[False|Falso]]. [[He|Él]] [[has|ha]] [[read|leído]] [[twelve|doce]] [[books|libros]], [[not|no]] [[ten|diez]].',
  },
  {
    question: '[[Jake|Jake]] [[feels|se siente]] [[healthy|sano]] [[and|y]] [[productive|productivo]].',
    options: ['[[True|Verdadero]]', '[[False|Falso]]'],
    correctAnswer: 'True',
    explanation: '[[True|Verdadero]]. [[He|Él]] [[says|dice]] "[[I feel healthy and productive|Me siento sano y productivo]]".',
  },
  {
    question: '[[What|Cuál]] [[is|es]] [[the|el]] [[main|principal]] [[topic|tema]] [[of|del]] [[this|este]] [[text|texto]]?',
    options: ['[[A|Un]] [[trip|viaje]] [[to|a]] [[the|el]] [[beach|playa]]', '[[Jake\'s|Jake]] [[routine|rutina]] [[with|con]] [[How questions|preguntas con How]] [[answers|respuestas]]', '[[A|Una]] [[birthday|cumpleaños]] [[party|fiesta]]', '[[School|Escuela]] [[subjects|asignaturas]]'],
    correctAnswer: 1,
    explanation: '[[The|El]] [[text|texto]] [[answers|responde]] [[How often|Con qué frecuencia]], [[How long|Cuánto tiempo]], [[How much|Cuánto]], [[How many|Cuántos]].',
  },
  {
    question: '[[What|Qué]] [[type|tipo]] [[of|de]] [[questions|preguntas]] [[does|usa]] [[the|el]] [[text|texto]] [[answer|responder]]?',
    options: ['[[Yes/No|Sí/No]] [[questions|preguntas]]', '[[How|How]] [[questions|preguntas]] ([[frequency|frecuencia]], [[duration|duración]], [[quantity|cantidad]])', '[[Where|Dónde]] [[questions|preguntas]]', '[[When|Cuándo]] [[questions|preguntas]]'],
    correctAnswer: 1,
    explanation: '[[The|El]] [[text|texto]] [[answers|responde]] [[How often|Con qué frecuencia]], [[How long|Cuánto tiempo]], [[How much|Cuánto]], [[How many|Cuántos]].',
  },
  {
    question: '[[Why|Por qué]] [[does|se]] [[Jake|Jake]] [[feel|siente]] [[healthy|sano]] [[and|y]] [[productive|productivo]]?',
    options: ['[[because|porque]] [[he|él]] [[has|tiene]] [[no|ningún]] [[work|trabajo]]', '[[because|porque]] [[he|él]] [[has|tiene]] [[good|buenos]] [[habits|hábitos]]', '[[because|porque]] [[he|él]] [[is|está]] [[on|en]] [[holiday|vacaciones]]', '[[because|porque]] [[he|él]] [[sleeps|duerme]] [[all|todo]] [[day|día]]'],
    correctAnswer: 1,
    explanation: '[[He|Él]] [[says|dice]] "[[I feel healthy and productive because I have good habits|Me siento sano y productivo porque tengo buenos hábitos]]".',
  },
  {
    question: '[[How|Cuántas]] [[times|veces]] [[a|a]] [[week|semana]] [[does|va]] [[Jake|Jake]] [[to|a]] [[the|el]] [[gym|gimnasio]]?',
    options: ['[[one|una]]', '[[two|dos]]', '[[three|tres]]', '[[four|cuatro]]'],
    correctAnswer: 2,
    explanation: '[[He|Él]] [[says|dice]] "[[I go to the gym three times a week|Voy al gimnasio tres veces a la semana]]".',
  },
];

export const UNIT_19_LESSON_3_READING: Exercise[] = QUESTIONS.map((q, i) => ({
  id: `a2-u19-l3-r${i + 1}`,
  type: 'reading',
  level: 'A2',
  topic: 'How Questions',
  difficulty: 'easy',
  transcript: READING_TRANSCRIPT,
  content: {
    title: LESSON_TITLE,
    instructions: INSTRUCTIONS,
    questions: [q],
  },
  topicName: 'Reading',
}));
