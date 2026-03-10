/**
 * Unidad 39 B1 — Lección 3: Comprensión lectora (Purpose & reason, Explaining)
 * 15 actividades
 */

import { Exercise } from '@/lib/exercise-generator';

const LESSON_TITLE = '[[Reading|Comprensión lectora]]';
const READING_TRANSCRIPT = `[[I|Yo]] [[decided|decidí]] [[to learn|aprender]] [[English|inglés]] [[because|porque]] [[I|yo]] [[wanted|quería]] [[to|para]] [[travel|viajar]] [[more|más]] [[and|y]] [[get|conseguir]] [[a better job|un mejor trabajo]]. [[I|Yo]] [[study|estudio]] [[every day|cada día]] [[in order to|para]] [[improve|mejorar]] [[my|mi]] [[skills|habilidades]]. [[I|Yo]] [[also|también]] [[watch|veo]] [[films|películas]] [[in English|en inglés]] [[so that|para que]] [[I|yo]] [[can|pueda]] [[practise|practicar]] [[my|mi]] [[listening|comprensión auditiva]]. [[The flight|El vuelo]] [[was|fue]] [[delayed|retrasado]] [[due to|debido a]] [[bad weather|mal tiempo]] [[last|la pasada]] [[week|semana]], [[but|pero]] [[I|yo]] [[didn't mind|no me importó]] [[because|porque]] [[I|yo]] [[had|tenía]] [[a good book|un buen libro]]. [[I|Yo]] [[am|estoy]] [[convinced|convencido]] [[that|que]] [[learning|aprender]] [[English|inglés]] [[opens|abre]] [[many|muchas]] [[doors|puertas]].`;

const INSTRUCTIONS = 'Lee el texto de abajo. Después responde las preguntas.';

const QUESTIONS = [
  { question: '[[Why|Por qué]] [[did the person decide to learn English|decidió la persona aprender inglés]]?', options: ['[[because they had to|porque tenían que]]', '[[because they wanted to travel and get a better job|porque querían viajar y conseguir un mejor trabajo]]', '[[because their friends did|porque sus amigos lo hacían]]'], correctAnswer: 1, explanation: '[[The text says|El texto dice]] "[[because I wanted to travel more and get a better job|porque quería viajar más y conseguir un mejor trabajo]]".' },
  { question: '[[What|Qué]] [[does the person do every day|hace la persona cada día]]?', options: ['[[travel|viaja]]', '[[studies|estudia]]', '[[works|trabaja]]'], correctAnswer: 1, explanation: '[[The text says|El texto dice]] "[[I study every day|estudio cada día]]".' },
  { question: '[[Why|Por qué]] [[does the person study every day|estudia cada día]]?', options: ['[[because they have to|porque tienen que]]', '[[in order to improve skills|para mejorar habilidades]]', '[[because of the weather|debido al tiempo]]'], correctAnswer: 1, explanation: '[[The text says|El texto dice]] "[[in order to improve my skills|para mejorar mis habilidades]]".' },
  { question: '[[What|Qué]] [[does the person watch|ve la persona]] [[in English|en inglés]]?', options: ['[[news|noticias]]', '[[films|películas]]', '[[sports|deportes]]'], correctAnswer: 1, explanation: '[[The text says|El texto dice]] "[[I also watch films in English|también veo películas en inglés]]".' },
  { question: '[[Why|Por qué]] [[does the person watch films in English|ve películas en inglés]]?', options: ['[[because they are boring in Spanish|porque son aburridas en español]]', '[[so that they can practise listening|para que pueda practicar la comprensión auditiva]]', '[[because of work|debido al trabajo]]'], correctAnswer: 1, explanation: '[[The text says|El texto dice]] "[[so that I can practise my listening|para que pueda practicar mi comprensión auditiva]]".' },
  { question: '[[Why|Por qué]] [[was the flight delayed|se retrasó el vuelo]]?', options: ['[[because of the pilot|debido al piloto]]', '[[due to bad weather|debido al mal tiempo]]', '[[because of the passengers|debido a los pasajeros]]'], correctAnswer: 1, explanation: '[[The text says|El texto dice]] "[[The flight was delayed due to bad weather|el vuelo se retrasó debido al mal tiempo]]".' },
  { question: '[[Did|Le]] [[the person mind|importó a la persona]] [[the delay|el retraso]]?', options: ['[[Yes|Sí]]', '[[No, they had a good book|No, tenía un buen libro]]', '[[They were angry|Estaban enfadados]]'], correctAnswer: 1, explanation: '[[The text says|El texto dice]] "[[I didn\'t mind because I had a good book|no me importó porque tenía un buen libro]]".' },
  { question: '[[Which structure|Qué estructura]] [[expresses purpose|expresa propósito]] [[for "improve"|para "mejorar"]]?', options: ['[[because|porque]]', '[[in order to|para]]', '[[due to|debido a]]'], correctAnswer: 1, explanation: '[[In order to|Para]] + [[infinitive|infinitivo]] = [[purpose|propósito]].' },
  { question: '[[The person|La persona]] [[believes|cree]] [[learning English opens doors|aprender inglés abre puertas]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'True', explanation: '[[True|Verdadero]]. [[The text says|El texto dice]] "[[I am convinced that learning English opens many doors|estoy convencido de que aprender inglés abre muchas puertas]]".' },
  { question: '[[What|Cuál]] [[is|es]] [[the main topic|el tema principal]] [[of|del]] [[this text|este texto]]?', options: ['[[Travel|Viajes]]', '[[Learning English and its benefits|Aprender inglés y sus beneficios]]', '[[Weather|Tiempo]]'], correctAnswer: 1, explanation: '[[The text|El texto]] [[describes|describe]] [[why and how the person learns English|por qué y cómo la persona aprende inglés]].' },
  { question: '[[Which structure|Qué estructura]] [[expresses reason|expresa razón]] [[for the flight delay|para el retraso del vuelo]]?', options: ['[[to|para]]', '[[because|porque]]', '[[due to|debido a]]'], correctAnswer: 2, explanation: '[[Due to|Debido a]] + [[noun|sustantivo]] = [[reason|razón]].' },
  { question: '[[The person|La persona]] [[studies|estudia]] [[every day|cada día]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'True', explanation: '[[True|Verdadero]]. [[The text says|El texto dice]] "[[I study every day|estudio cada día]]".' },
  { question: '[[Why|Por qué]] [[didn\'t the person mind the delay|no le importó el retraso a la persona]]?', options: ['[[because they had a good book|porque tenía un buen libro]]', '[[because they were tired|porque estaban cansados]]', '[[because they had to work|porque tenían que trabajar]]'], correctAnswer: 0, explanation: '[[The text says|El texto dice]] "[[I didn\'t mind because I had a good book|no me importó porque tenía un buen libro]]".' },
  { question: '[[Which structure|Qué estructura]] [[expresses purpose|expresa propósito]] [[for "practise listening"|para "practicar comprensión auditiva"]]?', options: ['[[because|porque]]', '[[so that|para que]]', '[[due to|debido a]]'], correctAnswer: 1, explanation: '[[So that|Para que]] + [[subject + verb|sujeto + verbo]] = [[purpose|propósito]].' },
  { question: '[[The person|La persona]] [[watches|ve]] [[films|películas]] [[in English|en inglés]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'True', explanation: '[[True|Verdadero]]. [[The text says|El texto dice]] "[[I also watch films in English|también veo películas en inglés]]".' },
];

export const UNIT_39_LESSON_3_READING: Exercise[] = QUESTIONS.map((q, i) => ({
  id: `b1-u39-l3-r${i + 1}`,
  type: 'reading',
  level: 'B1',
  topic: 'Explaining',
  difficulty: 'easy',
  transcript: READING_TRANSCRIPT,
  content: { title: LESSON_TITLE, instructions: INSTRUCTIONS, questions: [q] },
  topicName: 'Reading',
}));
