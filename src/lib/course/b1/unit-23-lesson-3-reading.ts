/**
 * Unidad 23 B1 — Lección 3: Comprensión lectora (Phrasal verbs 1, Daily activities)
 * 15 actividades
 */

import { Exercise } from '@/lib/exercise-generator';

const LESSON_TITLE = '[[Reading|Comprensión lectora]]';
const READING_TRANSCRIPT = `[[My|Mi]] [[typical|típico]] [[morning|mañana]] [[routine|rutina]] [[starts|empieza]] [[when|cuando]] [[I|yo]] [[wake up|me despierto]] [[at|a]] [[7|7]] [[o\'clock|en punto]]. [[I|Yo]] [[get up|me levanto]] [[and|y]] [[turn on|enciendo]] [[the|el]] [[radio|radio]] [[while|mientras]] [[I|yo]] [[have|me]] [[a shower|ducho]]. [[I|Yo]] [[put on|me pongo]] [[my|mi]] [[clothes|ropa]] [[and|y]] [[have|tomo]] [[breakfast|desayuno]]. [[I|Yo]] [[always|siempre]] [[remember|recuerdo]] [[to turn off|apagar]] [[the|las]] [[lights|luces]] [[when|cuando]] [[I|yo]] [[leave|salgo]] [[home|casa]]. [[I|Yo]] [[have to|tengo que]] [[hurry up|darme prisa]] [[in|por]] [[the|la]] [[morning|mañana]] [[or|o]] [[I|yo]] [[miss|pierdo]] [[the|el]] [[bus|autobús]]. [[When|Cuando]] [[my|mi]] [[sister|hermana]] [[is|está]] [[stressed|estresada]], [[I|yo]] [[tell|le digo]] [[her|a ella]] [[to calm down|que se calme]]. [[I|Yo]] [[look after|cuido]] [[my|mi]] [[neighbour\'s|vecino]] [[cat|gato]] [[when|cuando]] [[they|ellos]] [[go|van]] [[on|de]] [[holiday|vacaciones]].`;

const INSTRUCTIONS = 'Lee el texto de abajo. Después responde las preguntas.';

const QUESTIONS = [
  { question: '[[What time|A qué hora]] [[does the person wake up|se despierta la persona]]?', options: ['[[6 o\'clock|a las 6]]', '[[7 o\'clock|a las 7]]', '[[8 o\'clock|a las 8]]'], correctAnswer: 1, explanation: '[[The text says|El texto dice]] "[[I wake up at 7 o\'clock|me despierto a las 7]]".' },
  { question: '[[What|Qué]] [[does the person turn on|enciende la persona]] [[in the morning|por la mañana]]?', options: ['[[the TV|la tele]]', '[[the radio|la radio]]', '[[the computer|el ordenador]]'], correctAnswer: 1, explanation: '[[The text says|El texto dice]] "[[I turn on the radio|enciendo la radio]]".' },
  { question: '[[What|Qué]] [[does the person put on|se pone la persona]]?', options: ['[[makeup|maquillaje]]', '[[clothes|ropa]]', '[[shoes|zapatos]]'], correctAnswer: 1, explanation: '[[The text says|El texto dice]] "[[I put on my clothes|me pongo mi ropa]]".' },
  { question: '[[What|Qué]] [[does the person remember to turn off|recuerda apagar la persona]]?', options: ['[[the TV|la tele]]', '[[the lights|las luces]]', '[[the heating|la calefacción]]'], correctAnswer: 1, explanation: '[[The text says|El texto dice]] "[[I remember to turn off the lights|recuerdo apagar las luces]]".' },
  { question: '[[Why|Por qué]] [[does the person need to hurry up|necesita darse prisa la persona]]?', options: ['[[to catch the bus|para coger el autobús]]', '[[to get to work early|para llegar temprano al trabajo]]', '[[to have breakfast|para desayunar]]'], correctAnswer: 0, explanation: '[[The text says|El texto dice]] "[[I have to hurry up or I miss the bus|tengo que darme prisa o pierdo el autobús]]".' },
  { question: '[[What|Qué]] [[does the person tell their sister|le dice a su hermana la persona]] [[when she\'s stressed|cuando está estresada]]?', options: ['[[to hurry up|que se dé prisa]]', '[[to calm down|que se calme]]', '[[to go to bed|que se vaya a la cama]]'], correctAnswer: 1, explanation: '[[The text says|El texto dice]] "[[I tell her to calm down|le digo que se calme]]".' },
  { question: '[[What|Qué]] [[does the person look after|cuida la persona]]?', options: ['[[their neighbour\'s dog|el perro del vecino]]', '[[their neighbour\'s cat|el gato del vecino]]', '[[their own pet|su propia mascota]]'], correctAnswer: 1, explanation: '[[The text says|El texto dice]] "[[I look after my neighbour\'s cat|cuido el gato de mi vecino]]".' },
  { question: '[[The person|La persona]] [[turns on|enciende]] [[the radio|la radio]] [[in the morning|por la mañana]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'True', explanation: '[[True|Verdadero]]. [[The text says|El texto dice]] "[[I turn on the radio|enciendo la radio]]".' },
  { question: '[[The person|La persona]] [[forgets|olvida]] [[to turn off|apagar]] [[the lights|las luces]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'False', explanation: '[[False|Falso]]. [[They|Ellos]] [[always remember|siempre recuerdan]].' },
  { question: '[[What|Cuál]] [[is|es]] [[the main topic|el tema principal]] [[of|del]] [[this text|este texto]]?', options: ['[[Work|Trabajo]]', '[[Daily routine and phrasal verbs|Rutina diaria y phrasal verbs]]', '[[Travel|Viajes]]'], correctAnswer: 1, explanation: '[[The text|El texto]] [[talks about|habla de]] [[morning routine|rutina matinal]] [[and|y]] [[phrasal verbs|phrasal verbs]].' },
  { question: '[[When|Cuándo]] [[does the person look after|cuida la persona]] [[the cat|al gato]]?', options: ['[[every day|cada día]]', '[[when neighbours go on holiday|cuando los vecinos van de vacaciones]]', '[[at weekends|los fines de semana]]'], correctAnswer: 1, explanation: '[[The text says|El texto dice]] "[[when they go on holiday|cuando van de vacaciones]]".' },
  { question: '[[The person|La persona]] [[has|tiene]] [[breakfast|desayuno]] [[after|después]] [[getting dressed|vestirse]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'True', explanation: '[[True|Verdadero]]. [[The text says|El texto dice]] "[[I put on my clothes and have breakfast|me pongo la ropa y desayuno]]".' },
  { question: '[[The person|La persona]] [[tells|dice]] [[their sister|a su hermana]] [[to calm down|que se calme]] [[when|cuando]] [[she\'s stressed|está estresada]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'True', explanation: '[[True|Verdadero]]. [[The text says|El texto dice]] "[[I tell her to calm down|le digo que se calme]]".' },
  { question: '[[The person|La persona]] [[has to|tiene que]] [[hurry up|darse prisa]] [[to catch|para coger]] [[the bus|el autobús]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'True', explanation: '[[True|Verdadero]]. [[The text says|El texto dice]] "[[I have to hurry up or I miss the bus|tengo que darme prisa o pierdo el autobús]]".' },
  { question: '[[The person|La persona]] [[looks after|cuida]] [[their neighbour\'s|de su vecino]] [[pet|mascota]] [[when|cuando]] [[they travel|viajan]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'True', explanation: '[[True|Verdadero]]. [[The text says|El texto dice]] "[[I look after my neighbour\'s cat when they go on holiday|cuido el gato de mi vecino cuando van de vacaciones]]".' },
];

export const UNIT_23_LESSON_3_READING: Exercise[] = QUESTIONS.map((q, i) => ({
  id: `b1-u23-l3-r${i + 1}`,
  type: 'reading',
  level: 'B1',
  topic: 'Daily Activities',
  difficulty: 'easy',
  transcript: READING_TRANSCRIPT,
  content: { title: LESSON_TITLE, instructions: INSTRUCTIONS, questions: [q] },
  topicName: 'Reading',
}));
