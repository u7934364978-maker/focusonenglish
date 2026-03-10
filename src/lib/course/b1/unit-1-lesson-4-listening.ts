/**
 * Unidad 1 B1 — Lección 4: Comprensión auditiva (Personal info, feelings)
 * 15 actividades
 */

import { Exercise } from '@/lib/exercise-generator';

const LESSON_TITLE = '[[Listening|Comprensión auditiva]]';
const LISTENING_TRANSCRIPT = `[[Hi|Hola]], [[I|yo]] [[am|soy]] [[Tom|Tom]] [[and|y]] [[I|yo]] [[want|quiero]] [[to|a]] [[tell|contar]] [[you|te]] [[about|sobre]] [[my|mi]] [[experience|experiencia]] [[learning|aprendiendo]] [[English|inglés]]. [[I|Yo]] [[have|he]] [[been|estado]] [[studying|estudiando]] [[for|desde hace]] [[three|tres]] [[years|años]] [[and|y]] [[at|al]] [[first|principio]] [[I|yo]] [[felt|me sentí]] [[very|muy]] [[embarrassed|avergonzado]] [[when|cuando]] [[I|yo]] [[spoke|hablaba]] [[in|en]] [[class|clase]]. [[I|Yo]] [[was|era]] [[afraid|tenía miedo]] [[of|de]] [[making|cometer]] [[mistakes|errores]]. [[But|Pero]] [[my|mi]] [[teacher|profesor]] [[was|era]] [[very|muy]] [[patient|paciente]] [[and|y]] [[encouraged|animó]] [[me|me]] [[to|a]] [[practise|practicar]] [[more|más]]. [[Now|Ahora]] [[I|yo]] [[feel|me siento]] [[much|mucho]] [[more|más]] [[confident|seguro]] [[and|y]] [[I|yo]] [[can|puedo]] [[have|tener]] [[conversations|conversaciones]] [[with|con]] [[native|nativos]] [[speakers|hablantes]]. [[I|Yo]] [[am|estoy]] [[proud|orgulloso]] [[of|de]] [[my|mi]] [[progress|progreso]] [[and|y]] [[I|yo]] [[look forward to|espero]] [[visiting|visitar]] [[England|Inglaterra]] [[next|el próximo]] [[year|año]].`;

const INSTRUCTIONS = 'Escucha el audio. Puedes leer la transcripción. Después responde las preguntas.';

const QUESTIONS = [
  { question: '[[What|Qué]] [[is Tom talking about|está contando Tom]]?', options: ['[[his job|su trabajo]]', '[[his experience learning English|su experiencia aprendiendo inglés]]', '[[his trip to England|su viaje a Inglaterra]]'], correctAnswer: 1, explanation: '[[He says|Dice]] "[[I want to tell you about my experience learning English|quiero contarte sobre mi experiencia aprendiendo inglés]]".' },
  { question: '[[How long|Cuánto tiempo]] [[has he been studying|lleva estudiando]] [[English|inglés]]?', options: ['[[one year|un año]]', '[[two years|dos años]]', '[[three years|tres años]]'], correctAnswer: 2, explanation: '[[He says|Dice]] "[[I have been studying for three years|llevo estudiando tres años]]".' },
  { question: '[[How|Cómo]] [[did he feel|se sintió]] [[at first|al principio]] [[when speaking in class|cuando hablaba en clase]]?', options: ['[[confident|seguro]]', '[[embarrassed|avergonzado]]', '[[excited|emocionado]]'], correctAnswer: 1, explanation: '[[He says|Dice]] "[[at first I felt very embarrassed|al principio me sentí muy avergonzado]]".' },
  { question: '[[Why|Por qué]] [[was he afraid|tenía miedo]]?', options: ['[[of making mistakes|de cometer errores]]', '[[of the teacher|del profesor]]', '[[of the class|de la clase]]'], correctAnswer: 0, explanation: '[[He says|Dice]] "[[I was afraid of making mistakes|tenía miedo de cometer errores]]".' },
  { question: '[[How|Cómo]] [[was his teacher|era su profesor]]?', options: ['[[strict|estricto]]', '[[patient|paciente]]', '[[boring|aburrido]]'], correctAnswer: 1, explanation: '[[He says|Dice]] "[[my teacher was very patient|mi profesor era muy paciente]]".' },
  { question: '[[How|Cómo]] [[does he feel now|se siente ahora]]?', options: ['[[less confident|menos seguro]]', '[[more confident|más seguro]]', '[[embarrassed|avergonzado]]'], correctAnswer: 1, explanation: '[[He says|Dice]] "[[Now I feel much more confident|ahora me siento mucho más seguro]]".' },
  { question: '[[What|Qué]] [[can he do now|puede hacer ahora]]?', options: ['[[write books|escribir libros]]', '[[have conversations with native speakers|tener conversaciones con nativos]]', '[[teach English|enseñar inglés]]'], correctAnswer: 1, explanation: '[[He says|Dice]] "[[I can have conversations with native speakers|puedo tener conversaciones con hablantes nativos]]".' },
  { question: '[[How|Cómo]] [[does he feel about his progress|se siente sobre su progreso]]?', options: ['[[disappointed|decepcionado]]', '[[proud|orgulloso]]', '[[embarrassed|avergonzado]]'], correctAnswer: 1, explanation: '[[He says|Dice]] "[[I am proud of my progress|estoy orgulloso de mi progreso]]".' },
  { question: '[[What|Qué]] [[does he look forward to|espera]]?', options: ['[[finishing the course|terminar el curso]]', '[[visiting England next year|visitar Inglaterra el próximo año]]', '[[meeting his teacher|conocer a su profesor]]'], correctAnswer: 1, explanation: '[[He says|Dice]] "[[I look forward to visiting England next year|espero visitar Inglaterra el próximo año]]".' },
  { question: '[[Tom|Tom]] [[felt|se sintió]] [[confident|seguro]] [[from the beginning|desde el principio]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'False', explanation: '[[False|Falso]]. [[He felt embarrassed at first|se sintió avergonzado al principio]].' },
  { question: '[[His|Su]] [[teacher|profesor]] [[encouraged|animó]] [[him|a él]] [[to practise more|a practicar más]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'True', explanation: '[[True|Verdadero]]. [[The text says|El texto dice]] "[[encouraged me to practise more|me animó a practicar más]]".' },
  { question: '[[Tom|Tom]] [[has already been|ya ha estado]] [[to England|en Inglaterra]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'False', explanation: '[[False|Falso]]. [[He looks forward to visiting next year|espera visitar el próximo año]].' },
  { question: '[[Tom|Tom]] [[can now|ahora puede]] [[have|tener]] [[conversations|conversaciones]] [[with|con]] [[native speakers|hablantes nativos]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'True', explanation: '[[True|Verdadero]]. [[He says|Dice]] "[[I can have conversations with native speakers|puedo tener conversaciones con hablantes nativos]]".' },
  { question: '[[Tom|Tom]] [[was|era]] [[afraid|tenía miedo]] [[of|de]] [[his teacher|su profesor]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'False', explanation: '[[False|Falso]]. [[He was afraid of making mistakes|tenía miedo de cometer errores]].' },
  { question: '[[What|Cuál]] [[is|es]] [[the main topic|el tema principal]] [[of|del]] [[this listening|esta escucha]]?', options: ['[[A|Un]] [[teacher|profesor]] [[story|historia]]', '[[Overcoming|Superar]] [[fear|miedo]] [[and|y]] [[gaining|ganar]] [[confidence|confianza]] [[in English|en inglés]]', '[[A trip|Un viaje]] [[to England|a Inglaterra]]'], correctAnswer: 1, explanation: '[[The listening|La escucha]] [[describes|describe]] [[how Tom overcame fear|cómo Tom superó el miedo]] [[and gained confidence|y ganó confianza]].' },
];

export const UNIT_1_LESSON_4_LISTENING: Exercise[] = QUESTIONS.map((q, i) => ({
  id: `b1-u1-l4-l${i + 1}`,
  type: 'listening',
  level: 'B1',
  topic: 'Personal Info',
  difficulty: 'easy',
  transcript: LISTENING_TRANSCRIPT,
  content: { title: LESSON_TITLE, instructions: INSTRUCTIONS, questions: [q] },
  topicName: 'Listening',
}));
