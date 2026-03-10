/**
 * Unidad 60 B1 — Lección 3: Comprensión lectora (Final B1 review)
 * 15 actividades
 */

import { Exercise } from '@/lib/exercise-generator';

const LESSON_TITLE = '[[Reading|Comprensión lectora]]';
const READING_TRANSCRIPT = `[[Congratulations|Felicitaciones]]! [[You|Tú]] [[have completed|has completado]] [[the B1 course|el curso B1]]. [[Over the past units|A lo largo de las unidades pasadas]] [[we|nosotros]] [[have studied|hemos estudiado]] [[conditionals|condicionales]], [[passive voice|voz pasiva]], [[reported speech|estilo indirecto]], [[modals|modales]], [[and|y]] [[tenses|tiempos verbales]]. [[The B1 level|El nivel B1]] [[allows you|te permite]] [[to|a]] [[communicate|comunicarte]] [[effectively|efectivamente]] [[in|en]] [[everyday situations|situaciones cotidianas]]. [[If|Si]] [[you|tú]] [[practise|practicas]] [[regularly|regularmente]], [[you will improve|mejorarás]] [[even more|aún más]]. [[Phrasal verbs|Los phrasal verbs]] [[like|como]] [[find out|averiguar]], [[give up|rendirse]], [[and|y]] [[look after|cuidar]] [[are|son]] [[essential|esenciales]] [[at this level|a este nivel]]. [[The course|El curso]] [[was designed|fue diseñado]] [[to prepare you|para prepararte]] [[for|para]] [[the Cambridge PET exam|el examen Cambridge PET]]. [[We|Nosotros]] [[hope|esperamos]] [[you|te]] [[enjoyed|hayas disfrutado]] [[your journey|tu viaje]] [[and|y]] [[wish you|te deseamos]] [[good luck|buena suerte]] [[in|en]] [[your future|tu futuro]] [[English learning|aprendizaje del inglés]].`;

const INSTRUCTIONS = 'Lee el texto de abajo. Después responde las preguntas.';

const QUESTIONS = [
  { question: '[[What|Qué]] [[have you completed|has completado]]?', options: ['[[The A1 course|El curso A1]]', '[[The B1 course|El curso B1]]', '[[The C1 course|El curso C1]]'], correctAnswer: 1, explanation: '[[The text says|El texto dice]] "[[You have completed the B1 course|has completado el curso B1]]".' },
  { question: '[[What|Qué]] [[topics|temas]] [[have been studied|han sido estudiados]]?', options: ['[[Only grammar|Solo gramática]]', '[[Conditionals, passive, reported speech, modals, tenses|Condicionales, pasiva, estilo indirecto, modales, tiempos]]', '[[Only vocabulary|Solo vocabulario]]'], correctAnswer: 1, explanation: '[[The text says|El texto dice]] "[[conditionals, passive voice, reported speech, modals, and tenses|condicionales, voz pasiva, estilo indirecto, modales y tiempos]]".' },
  { question: '[[What|Qué]] [[does the B1 level allow you|te permite el nivel B1]]?', options: ['[[To write novels|Escribir novelas]]', '[[To communicate effectively in everyday situations|Comunicarte efectivamente en situaciones cotidianas]]', '[[To teach English|Enseñar inglés]]'], correctAnswer: 1, explanation: '[[The text says|El texto dice]] "[[allows you to communicate effectively in everyday situations|te permite comunicarte efectivamente en situaciones cotidianas]]".' },
  { question: '[[What|Qué]] [[will happen|ocurrirá]] [[if you practise regularly|si practicas regularmente]]?', options: ['[[You will forget|Olvidarás]]', '[[You will improve even more|Mejorarás aún más]]', '[[You will stop|Te detendrás]]'], correctAnswer: 1, explanation: '[[The text says|El texto dice]] "[[If you practise regularly, you will improve even more|si practicas regularmente, mejorarás aún más]]".' },
  { question: '[[Which|Cuáles]] [[phrasal verbs|phrasal verbs]] [[are mentioned|son mencionados]]?', options: ['[[Find out, give up, look after|Averiguar, rendirse, cuidar]]', '[[Take off, set off|Despegar, partir]]', '[[Break up, get along|Romper, llevarse bien]]'], correctAnswer: 0, explanation: '[[The text says|El texto dice]] "[[find out, give up, and look after|averiguar, rendirse y cuidar]]".' },
  { question: '[[The course|El curso]] [[was designed|fue diseñado]] [[to prepare you for the Cambridge PET exam|para prepararte para el examen Cambridge PET]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'True', explanation: '[[True|Verdadero]]. [[The text says|El texto dice]] "[[The course was designed to prepare you for the Cambridge PET exam|el curso fue diseñado para prepararte para el examen Cambridge PET]]".' },
  { question: '[[What|Cuál]] [[is|es]] [[the main topic|el tema principal]] [[of|del]] [[this text|este texto]]?', options: ['[[Travel|Viajes]]', '[[B1 course completion and congratulations|Finalización del curso B1 y felicitaciones]]', '[[Food|Comida]]'], correctAnswer: 1, explanation: '[[The text|El texto]] [[congratulates|felicita]] [[and summarises|y resume]] [[the B1 course|el curso B1]].' },
  { question: '[[First conditional|Primer condicional]] [[is used|se usa]] [[for practice|para practicar]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'True', explanation: '[[True|Verdadero]]. "[[If you practise regularly, you will improve|si practicas regularmente, mejorarás]]".' },
  { question: '[[Passive voice|Voz pasiva]] [[is used|se usa]] [[for the course|para el curso]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'True', explanation: '[[True|Verdadero]]. "[[The course was designed|el curso fue diseñado]]".' },
  { question: '[[The text|El texto]] [[wishes|desea]] [[good luck|buena suerte]] [[for future learning|para el aprendizaje futuro]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'True', explanation: '[[True|Verdadero]]. "[[wish you good luck in your future English learning|te deseamos buena suerte en tu futuro aprendizaje del inglés]]".' },
  { question: '[[Phrasal verbs|Los phrasal verbs]] [[are|son]] [[not important|no importantes]] [[at B1 level|a nivel B1]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'False', explanation: '[[False|Falso]]. [[They are essential|Son esenciales]] [[at this level|a este nivel]].' },
  { question: '[[The text|El texto]] [[is|es]] [[a farewell message|un mensaje de despedida]] [[to B1 students|a estudiantes B1]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'True', explanation: '[[True|Verdadero]]. [[It congratulates and wishes good luck|Felicita y desea buena suerte]].' },
  { question: '[[How many|Cuántos]] [[grammar topics|temas gramaticales]] [[does the text mention|menciona el texto]]?', options: ['[[Two|Dos]]', '[[Three|Tres]]', '[[Five|Cinco]]'], correctAnswer: 2, explanation: '[[Five|Cinco]]: [[conditionals|condicionales]], [[passive|pasiva]], [[reported speech|estilo indirecto]], [[modals|modales]], [[tenses|tiempos]].' },
  { question: '[[The B1 course|El curso B1]] [[prepares|prepara]] [[for|para]] [[the Cambridge PET exam|el examen Cambridge PET]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'True', explanation: '[[True|Verdadero]]. [[The text says|El texto dice]] "[[to prepare you for the Cambridge PET exam|para prepararte para el examen Cambridge PET]]".' },
  { question: '[[Present perfect|Presente perfecto]] [[is used|se usa]] [[at the start|al principio]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'True', explanation: '[[True|Verdadero]]. "[[You have completed|has completado]]", "[[we have studied|hemos estudiado]]".' },
];

export const UNIT_60_LESSON_3_READING: Exercise[] = QUESTIONS.map((q, i) => ({
  id: `b1-u60-l3-r${i + 1}`,
  type: 'reading',
  level: 'B1',
  topic: 'B1 Revision',
  difficulty: 'easy',
  transcript: READING_TRANSCRIPT,
  content: { title: LESSON_TITLE, instructions: INSTRUCTIONS, questions: [q] },
  topicName: 'Reading',
}));
