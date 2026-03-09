/**
 * Unidad 37 — Lección 3: Comprensión lectora (Future Hopes & Dreams)
 * 15 actividades: 1 texto + 15 preguntas
 */

import { Exercise } from '@/lib/exercise-generator';

const LESSON_TITLE = '[[Reading|Comprensión lectora]]';
const READING_TRANSCRIPT = `[[My|Mi]] [[name|nombre]] [[is|es]] [[Maria|María]] [[and|y]] [[I|yo]] [[am|tengo]] [[18|18]] [[years|años]]. [[I|Yo]] [[hope to|espero]] [[finish|terminar]] [[school|el colegio]] [[next|el próximo]] [[year|año]] [[and|y]] [[then|entonces]] [[I|yo]] [[would like to|me gustaría]] [[study|estudiar]] [[medicine|medicina]] [[at|en]] [[university|universidad]]. [[I|Yo]] [[dream of|sueño con]] [[becoming|convertirme]] [[a|en]] [[doctor|médica]] [[one|algún]] [[day|día]] [[and|y]] [[helping|ayudar]] [[people|a la gente]] [[in|en]] [[need|necesidad]]. [[My|Mi]] [[sister|hermana]] [[dreams of|sueña con]] [[travelling|viajar]] [[around|por]] [[the|el]] [[world|mundo]]. [[We|Nosotros]] [[both|ambas]] [[hope to|esperamos]] [[learn|aprender]] [[to|a]] [[speak|hablar]] [[fluent|fluido]] [[English|inglés]] [[one|algún]] [[day|día]].`;

const INSTRUCTIONS = 'Lee el texto de abajo. Después responde las preguntas.';

const QUESTIONS = [
  { question: '[[How old|Cuántos años]] [[is|tiene]] [[Maria|María]]?', options: ['[[16|16]]', '[[17|17]]', '[[18|18]]', '[[19|19]]'], correctAnswer: 2, explanation: '[[She|Ella]] [[says|dice]] "[[I am 18 years old|tengo 18 años]]".' },
  { question: '[[What|Qué]] [[does|espera]] [[Maria|María]] [[hope to|María]] [[do|hacer]] [[next|el próximo]] [[year|año]]?', options: ['[[Start|Empezar]] [[university|universidad]]', '[[Finish|Terminar]] [[school|el colegio]]', '[[Travel|Viajar]]', '[[Get|Conseguir]] [[a|un]] [[job|trabajo]]'], correctAnswer: 1, explanation: '[[She|Ella]] [[says|dice]] "[[I hope to finish school next year|espero terminar el colegio el próximo año]]".' },
  { question: '[[What|Qué]] [[would|le]] [[Maria|María]] [[like to|gustaría]] [[study|estudiar]]?', options: ['[[Law|Derecho]]', '[[Medicine|Medicina]]', '[[Engineering|Ingeniería]]', '[[Art|Arte]]'], correctAnswer: 1, explanation: '[[She|Ella]] [[says|dice]] "[[I would like to study medicine|me gustaría estudiar medicina]]".' },
  { question: '[[What|Con qué]] [[does|sueña]] [[Maria|María]] [[dream of|María]]?', options: ['[[Travelling|Viajar]]', '[[Becoming|Convertirse]] [[a|en]] [[doctor|médica]]', '[[Teaching|Enseñar]]', '[[Singing|Cantar]]'], correctAnswer: 1, explanation: '[[She|Ella]] [[says|dice]] "[[I dream of becoming a doctor|sueño con convertirme en médica]]".' },
  { question: '[[What|Qué]] [[does|sueña]] [[Maria\'s|de María]] [[sister|hermana]] [[dream of|la hermana]]?', options: ['[[Becoming|Convertirse]] [[a|en]] [[doctor|médica]]', '[[Travelling|Viajar]] [[around|por]] [[the|el]] [[world|mundo]]', '[[Studying|Estudiar]] [[medicine|medicina]]', '[[Teaching|Enseñar]] [[English|inglés]]'], correctAnswer: 1, explanation: '[[She|Ella]] [[says|dice]] "[[My sister dreams of travelling around the world|mi hermana sueña con viajar por el mundo]]".' },
  { question: '[[What|Qué]] [[do|esperan]] [[both|ambas]] [[Maria|María]] [[and|y]] [[her|su]] [[sister|hermana]] [[hope to|hermanas]] [[learn|aprender]]?', options: ['[[French|Francés]]', '[[Spanish|Español]]', '[[Fluent|Fluido]] [[English|inglés]]', '[[German|Alemán]]'], correctAnswer: 2, explanation: '[[They|Ellas]] [[say|dicen]] "[[we hope to learn to speak fluent English|esperamos aprender a hablar inglés fluido]]".' },
  { question: '[[Maria|María]] [[uses|usa]] [[hope to|hope to]], [[would like to|would like to]] [[and|y]] [[dream of|dream of]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'True', explanation: '[[True|Verdadero]]. [[She|Ella]] [[uses|usa]] [[all|todas]] [[three|tres]] [[structures|estructuras]].' },
  { question: '[[Maria|María]] [[wants|quiere]] [[to|a]] [[help|ayudar]] [[people|a la gente]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'True', explanation: '[[True|Verdadero]]. [[She|Ella]] [[says|dice]] "[[helping people in need|ayudar a la gente en necesidad]]".' },
  { question: '[[What|Cuál]] [[is|es]] [[the|el]] [[main|principal]] [[topic|tema]] [[of|del]] [[this|este]] [[text|texto]]?', options: ['[[Past|Eventos]] [[events|pasados]]', '[[Future|Esperanzas]] [[hopes|y]] [[dreams|sueños]] [[for|para]] [[the|el]] [[future|futuro]]', '[[Weather|Tiempo]]', '[[Shopping|Compras]]'], correctAnswer: 1, explanation: '[[The|El]] [[text|texto]] [[is|es]] [[about|sobre]] [[hopes|esperanzas]] [[and|y]] [[dreams|sueños]].' },
  { question: '[[Hope to|Hope to]] [[is|se]] ____ ____ ____ ____ [[with|con]] ____ ____ ____ ____ [[infinitive|infinitivo]].', options: ['[[used|usa]]', '[[not used|no se usa]]', '[[sometimes used|a veces se usa]]', '[[never used|nunca se usa]]'], correctAnswer: 0, explanation: '[[Hope to|Hope to]] + [[infinitive|infinitivo]].' },
  { question: '[[Dream of|Dream of]] [[is|se]] ____ ____ ____ ____ [[with|con]] ____ ____ ____ ____ [[gerund|gerundio]].', options: ['[[used|usa]]', '[[not used|no se usa]]', '[[sometimes used|a veces se usa]]', '[[never used|nunca se usa]]'], correctAnswer: 0, explanation: '[[Dream of|Dream of]] + [[gerund|gerundio]].' },
  { question: '[[When|Cuándo]] [[does|va]] [[Maria|María]] [[hope to|María]] [[finish|terminar]] [[school|el colegio]]?', options: ['[[this|este]] [[year|año]]', '[[next|el próximo]] [[year|año]]', '[[in|en]] [[2|2]] [[years|años]]', '[[last|el pasado]] [[year|año]]'], correctAnswer: 1, explanation: '[[She|Ella]] [[says|dice]] "[[next year|el próximo año]]".' },
  { question: '[[Maria|María]] [[wants|quiere]] [[to|a]] ____ [[people|gente]] ____ ____ ____ ____ [[need|necesidad]].', options: ['[[help|ayudar]]', '[[teach|enseñar]]', '[[meet|conocer]]', '[[visit|visitar]]'], correctAnswer: 0, explanation: '[[She|Ella]] [[says|dice]] "[[helping people in need|ayudar a la gente en necesidad]]".' },
  { question: '[[How many|Cuántas]] [[people|personas]] [[are|son]] [[mentioned|mencionadas]] [[in|en]] [[the|el]] [[text|texto]]?', options: ['[[one|una]]', '[[two|dos]]', '[[three|tres]]', '[[four|cuatro]]'], correctAnswer: 1, explanation: '[[Two|Dos]]: [[Maria|María]] [[and|y]] [[her|su]] [[sister|hermana]].' },
  { question: '[[Maria|María]] [[and|y]] [[her|su]] [[sister|hermana]] ____ ____ ____ ____ ____ ____ ____ ____ [[same|mismo]] ____ ____ ____ ____ ____ ____ ____ ____ [[goal|objetivo]].', options: ['[[have|tienen]] [[the|el]]', '[[do not have|no tienen]] [[the|el]]', '[[might have|podrían tener]] [[the|el]]', '[[had|tenían]] [[the|el]]'], correctAnswer: 0, explanation: '[[Both|Ambas]] [[hope to|esperan]] [[learn|aprender]] [[English|inglés]].' },
];

export const UNIT_37_LESSON_3_READING: Exercise[] = QUESTIONS.map((q, i) => ({
  id: `a2-u37-l3-r${i + 1}`,
  type: 'reading',
  level: 'A2',
  topic: 'Future Hopes & Dreams',
  difficulty: 'easy',
  transcript: READING_TRANSCRIPT,
  content: { title: LESSON_TITLE, instructions: INSTRUCTIONS, questions: [q] },
  topicName: 'Reading',
}));
