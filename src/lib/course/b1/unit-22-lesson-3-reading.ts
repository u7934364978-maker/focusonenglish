/**
 * Unidad 22 B1 — Lección 3: Comprensión lectora (Gerund vs infinitive 2, House & home)
 * 15 actividades
 */

import { Exercise } from '@/lib/exercise-generator';

const LESSON_TITLE = '[[Reading|Comprensión lectora]]';
const READING_TRANSCRIPT = `[[My|Mi]] [[name|nombre]] [[is|es]] [[Sarah|Sarah]] [[and|y]] [[I|yo]] [[love|adoro]] [[living|vivir]] [[in|en]] [[my|mi]] [[new|nuevo]] [[flat|piso]]. [[I|Yo]] [[prefer|prefiero]] [[cooking|cocinar]] [[at home|en casa]] [[to|a]] [[eating|comer]] [[out|fuera]]. [[I|Yo]] [[like|me gusta]] [[cleaning|limpiar]] [[the kitchen|la cocina]] [[every|cada]] [[morning|mañana]]. [[I|Yo]] [[always|siempre]] [[remember|recuerdo]] [[to lock|cerrar con llave]] [[the door|la puerta]] [[when|cuando]] [[I leave|salgo]]. [[Last week|La semana pasada]] [[I|yo]] [[forgot|olvidé]] [[to turn off|apagar]] [[the washing machine|la lavadora]] [[and|y]] [[it|ella]] [[overflowed|se desbordó]]. [[I|Yo]] [[am trying|estoy intentando]] [[to decorate|decorar]] [[my|mi]] [[bedroom|dormitorio]] [[this weekend|este fin de semana]]. [[I|Yo]] [[remember|recuerdo]] [[visiting|visitar]] [[my grandparents\' house|la casa de mis abuelos]] [[when|cuando]] [[I was a child|era niña]].`;

const INSTRUCTIONS = 'Lee el texto de abajo. Después responde las preguntas.';

const QUESTIONS = [
  { question: '[[What|Qué]] [[does Sarah love|adora Sarah]]?', options: ['[[working|trabajar]]', '[[living in her new flat|vivir en su piso nuevo]]', '[[travelling|viajar]]'], correctAnswer: 1, explanation: '[[The text says|El texto dice]] "[[I love living in my new flat|adoro vivir en mi piso nuevo]]".' },
  { question: '[[What|Qué]] [[does Sarah prefer|prefiere Sarah]]?', options: ['[[eating out|comer fuera]]', '[[cooking at home|cocinar en casa]]', '[[ordering food|pedir comida]]'], correctAnswer: 1, explanation: '[[The text says|El texto dice]] "[[I prefer cooking at home to eating out|prefiero cocinar en casa a comer fuera]]".' },
  { question: '[[What|Qué]] [[does Sarah like|le gusta a Sarah]]?', options: ['[[cleaning the kitchen|limpiar la cocina]]', '[[cleaning the bathroom|limpiar el baño]]', '[[cleaning the bedroom|limpiar el dormitorio]]'], correctAnswer: 0, explanation: '[[The text says|El texto dice]] "[[I like cleaning the kitchen|me gusta limpiar la cocina]]".' },
  { question: '[[What|Qué]] [[does Sarah remember to do|recuerda hacer Sarah]]?', options: ['[[to turn off the lights|apagar las luces]]', '[[to lock the door|cerrar la puerta con llave]]', '[[to close the windows|cerrar las ventanas]]'], correctAnswer: 1, explanation: '[[The text says|El texto dice]] "[[I always remember to lock the door|siempre recuerdo cerrar la puerta con llave]]".' },
  { question: '[[What|Qué]] [[happened|pasó]] [[last week|la semana pasada]]?', options: ['[[the fridge broke|la nevera se rompió]]', '[[the washing machine overflowed|la lavadora se desbordó]]', '[[the dishwasher broke|el lavavajillas se rompió]]'], correctAnswer: 1, explanation: '[[The text says|El texto dice]] "[[I forgot to turn off the washing machine and it overflowed|olvidé apagar la lavadora y se desbordó]]".' },
  { question: '[[What|Qué]] [[is Sarah trying to do|está intentando hacer Sarah]]?', options: ['[[to paint the kitchen|pintar la cocina]]', '[[to decorate her bedroom|decorar su dormitorio]]', '[[to buy new furniture|comprar muebles nuevos]]'], correctAnswer: 1, explanation: '[[The text says|El texto dice]] "[[I am trying to decorate my bedroom|estoy intentando decorar mi dormitorio]]".' },
  { question: '[[Sarah|Sarah]] [[prefers|prefiere]] [[cooking|cocinar]] [[at home|en casa]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'True', explanation: '[[True|Verdadero]]. [[The text says|El texto dice]] "[[I prefer cooking at home|prefiero cocinar en casa]]".' },
  { question: '[[Sarah|Sarah]] [[forgot|olvidó]] [[to turn off|apagar]] [[the dishwasher|el lavavajillas]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'False', explanation: '[[False|Falso]]. [[She|Ella]] [[forgot to turn off the washing machine|olvidó apagar la lavadora]].' },
  { question: '[[Sarah|Sarah]] [[remembers|recuerda]] [[visiting|visitar]] [[her grandparents|a sus abuelos]] [[as a child|de niña]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'True', explanation: '[[True|Verdadero]]. [[The text says|El texto dice]] "[[I remember visiting my grandparents\' house when I was a child|recuerdo visitar la casa de mis abuelos cuando era niña]]".' },
  { question: '[[What|Cuál]] [[is|es]] [[the main topic|el tema principal]] [[of|del]] [[this text|este texto]]?', options: ['[[Work|Trabajo]]', '[[Home and daily life|Hogar y vida diaria]]', '[[Travel|Viajes]]'], correctAnswer: 1, explanation: '[[The text|El texto]] [[talks about|habla de]] [[home|hogar]] [[and|y]] [[house activities|actividades del hogar]].' },
  { question: '[[Which verb|Qué verbo]] [[does Sarah use with -ing for a past memory|usa Sarah con -ing para un recuerdo pasado]]?', options: ['[[forget|olvidar]]', '[[remember|recordar]]', '[[try|intentar]]'], correctAnswer: 1, explanation: '[[Remember|Recordar]] + [[-ing|gerundio]] [[for past memory|para recuerdo pasado]].' },
  { question: '[[Sarah|Sarah]] [[likes|le gusta]] [[cleaning|limpiar]] [[the kitchen|la cocina]] [[every morning|cada mañana]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'True', explanation: '[[True|Verdadero]]. [[The text says|El texto dice]] "[[I like cleaning the kitchen every morning|me gusta limpiar la cocina cada mañana]]".' },
  { question: '[[Sarah|Sarah]] [[is trying|está intentando]] [[to decorate|decorar]] [[her room|su habitación]] [[this weekend|este fin de semana]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'True', explanation: '[[True|Verdadero]]. [[The text says|El texto dice]] "[[I am trying to decorate my bedroom this weekend|estoy intentando decorar mi dormitorio este fin de semana]]".' },
  { question: '[[Sarah|Sarah]] [[always|siempre]] [[remembers|recuerda]] [[to lock|cerrar con llave]] [[the door|la puerta]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'True', explanation: '[[True|Verdadero]]. [[The text says|El texto dice]] "[[I always remember to lock the door|siempre recuerdo cerrar la puerta con llave]]".' },
  { question: '[[Sarah|Sarah]] [[lives|vive]] [[in|en]] [[a house|casa]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'False', explanation: '[[False|Falso]]. [[She|Ella]] [[lives in a flat|vive en un piso]].' },
];

export const UNIT_22_LESSON_3_READING: Exercise[] = QUESTIONS.map((q, i) => ({
  id: `b1-u22-l3-r${i + 1}`,
  type: 'reading',
  level: 'B1',
  topic: 'House & Home',
  difficulty: 'easy',
  transcript: READING_TRANSCRIPT,
  content: { title: LESSON_TITLE, instructions: INSTRUCTIONS, questions: [q] },
  topicName: 'Reading',
}));
