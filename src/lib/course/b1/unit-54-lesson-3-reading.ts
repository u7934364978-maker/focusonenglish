/**
 * Unidad 54 B1 — Lección 3: Comprensión lectora (Tenses, Mixed topics)
 * 15 actividades
 */

import { Exercise } from '@/lib/exercise-generator';

const LESSON_TITLE = '[[Reading|Comprensión lectora]]';
const READING_TRANSCRIPT = `[[I|Yo]] [[have been learning|he estado aprendiendo]] [[English|inglés]] [[for three years|durante tres años]]. [[Last year|El año pasado]] [[I|yo]] [[went|fui]] [[to London|a Londres]] [[and|y]] [[I|yo]] [[had never been|nunca había estado]] [[there before|allí antes]]. [[When|Cuando]] [[I|yo]] [[arrived|llegué]], [[my friend|mi amigo]] [[had already left|ya había salido]] [[the airport|el aeropuerto]]. [[I|Yo]] [[was worried|estaba preocupado]] [[but|pero]] [[he|él]] [[called|llamó]] [[me|me]] [[soon|pronto]]. [[Next month|El próximo mes]] [[I|yo]] [[am travelling|estoy viajando]] [[to New York|a Nueva York]]. [[By the end of this year|Para finales de este año]], [[I|yo]] [[will have visited|habré visitado]] [[five countries|cinco países]]. [[Water|El agua]] [[boils|hierve]] [[at 100 degrees|a 100 grados]] — [[that|eso]] [[is|es]] [[a fact|un hecho]].`;

const INSTRUCTIONS = 'Lee el texto de abajo. Después responde las preguntas.';

const QUESTIONS = [
  { question: '[[How long|Cuánto tiempo]] [[has the person been learning English|ha estado aprendiendo inglés la persona]]?', options: ['[[One year|Un año]]', '[[Three years|Tres años]]', '[[Five years|Cinco años]]'], correctAnswer: 1, explanation: '[[The text says|El texto dice]] "[[for three years|durante tres años]]".' },
  { question: '[[Where|Dónde]] [[did the person go last year|fue la persona el año pasado]]?', options: ['[[New York|Nueva York]]', '[[London|Londres]]', '[[Paris|París]]'], correctAnswer: 1, explanation: '[[The text says|El texto dice]] "[[I went to London|fui a Londres]]".' },
  { question: '[[What|Qué]] [[had happened|había pasado]] [[when the person arrived|cuando la persona llegó]]?', options: ['[[The friend was waiting|El amigo estaba esperando]]', '[[The friend had already left the airport|El amigo ya había salido del aeropuerto]]', '[[The friend called|El amigo llamó]]'], correctAnswer: 1, explanation: '[[The text says|El texto dice]] "[[my friend had already left the airport|mi amigo ya había salido del aeropuerto]]".' },
  { question: '[[Where|Dónde]] [[is the person travelling|está viajando la persona]] [[next month|el próximo mes]]?', options: ['[[London|Londres]]', '[[New York|Nueva York]]', '[[Paris|París]]'], correctAnswer: 1, explanation: '[[The text says|El texto dice]] "[[I am travelling to New York|estoy viajando a Nueva York]]".' },
  { question: '[[By the end of this year|Para finales de este año]], [[what|qué]] [[will the person have done|habrá hecho la persona]]?', options: ['[[Learned English|Aprendido inglés]]', '[[Visited five countries|Visitado cinco países]]', '[[Gone to London|Ido a Londres]]'], correctAnswer: 1, explanation: '[[The text says|El texto dice]] "[[I will have visited five countries|habré visitado cinco países]]".' },
  { question: '[[The person|La persona]] [[had been to London before|había estado en Londres antes]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'False', explanation: '[[False|Falso]]. [[The text says|El texto dice]] "[[I had never been there before|nunca había estado allí antes]]".' },
  { question: '[[The friend|El amigo]] [[called|llamó]] [[the person|a la persona]] [[soon|pronto]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'True', explanation: '[[True|Verdadero]]. [[The text says|El texto dice]] "[[he called me soon|me llamó pronto]]".' },
  { question: '[[The text|El texto]] [[uses|usa]] [[present perfect continuous|presente perfecto continuo]] [[for|para]] [[learning English|aprender inglés]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'True', explanation: '[[True|Verdadero]]. "[[I have been learning|he estado aprendiendo]]".' },
  { question: '[[What|Cuál]] [[is|es]] [[the main topic|el tema principal]] [[of|del]] [[this text|este texto]]?', options: ['[[Food|Comida]]', '[[Travel and tenses|Viajes y tiempos verbales]]', '[[Weather|Tiempo]]'], correctAnswer: 1, explanation: '[[The text|El texto]] [[talks about|habla sobre]] [[travel and uses different tenses|viajes y usa diferentes tiempos]].' },
  { question: '[[Past perfect|Pasado perfecto]] [[is used|se usa]] [[for the friend leaving|para el amigo saliendo]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'True', explanation: '[[True|Verdadero]]. "[[had already left|ya había salido]]".' },
  { question: '[[Present continuous|Presente continuo]] [[is used|se usa]] [[for|para]] [[future travel|viaje futuro]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'True', explanation: '[[True|Verdadero]]. "[[I am travelling to New York|estoy viajando a Nueva York]]".' },
  { question: '[[The text|El texto]] [[mentions|menciona]] [[water boiling|el agua hirviendo]] [[as|como]] [[a general truth|una verdad general]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'True', explanation: '[[True|Verdadero]]. "[[Water boils at 100 degrees|el agua hierve a 100 grados]]".' },
  { question: '[[Future perfect|Futuro perfecto]] [[describes|describe]] [[visiting five countries|visitar cinco países]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'True', explanation: '[[True|Verdadero]]. "[[I will have visited five countries|habré visitado cinco países]]".' },
  { question: '[[The person|La persona]] [[was worried|estaba preocupado]] [[when|cuando]] [[the friend had left|el amigo había salido]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'True', explanation: '[[True|Verdadero]]. [[The text says|El texto dice]] "[[I was worried|estaba preocupado]]".' },
  { question: '[[How many|Cuántos]] [[tenses|tiempos verbales]] [[does the text use|usa el texto]]?', options: ['[[Two|Dos]]', '[[Four|Cuatro]]', '[[Six or more|Seis o más]]'], correctAnswer: 2, explanation: '[[Several|Varios]]: [[present perfect continuous|presente perfecto continuo]], [[past simple|pasado simple]], [[past perfect|pasado perfecto]], [[present continuous|presente continuo]], [[future perfect|futuro perfecto]], [[present simple|presente simple]].' },
];

export const UNIT_54_LESSON_3_READING: Exercise[] = QUESTIONS.map((q, i) => ({
  id: `b1-u54-l3-r${i + 1}`,
  type: 'reading',
  level: 'B1',
  topic: 'Tenses',
  difficulty: 'easy',
  transcript: READING_TRANSCRIPT,
  content: { title: LESSON_TITLE, instructions: INSTRUCTIONS, questions: [q] },
  topicName: 'Reading',
}));
