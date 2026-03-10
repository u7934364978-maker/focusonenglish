/**
 * Unidad 60 B1 — Lección 4: Comprensión auditiva (Final B1 review)
 * 15 actividades
 */

import { Exercise } from '@/lib/exercise-generator';

const LESSON_TITLE = '[[Listening|Comprensión auditiva]]';
const LISTENING_TRANSCRIPT = `[[Hi|Hola]], [[I|yo]] [[am|soy]] [[your|tu]] [[B1 teacher|profesor B1]] [[and|y]] [[I|yo]] [[want|quiero]] [[to|a]] [[congratulate|felicitar]] [[you|te]] [[on|por]] [[completing|completar]] [[this course|este curso]]. [[You|Tú]] [[have learned|has aprendido]] [[so much|tantísimo]] [[over the past months|durante los últimos meses]]. [[We|Nosotros]] [[have covered|hemos cubierto]] [[conditionals|condicionales]], [[passive voice|voz pasiva]], [[reported speech|estilo indirecto]], [[modals|modales]], [[and|y]] [[all the main tenses|todos los tiempos principales]]. [[If|Si]] [[you|tú]] [[keep practising|sigues practicando]], [[you will reach|alcanzarás]] [[B2 level|el nivel B2]] [[soon|pronto]]. [[Remember|Recuerda]] [[to|a]] [[use|usar]] [[phrasal verbs|phrasal verbs]] [[like|como]] [[find out|averiguar]], [[give up|rendirse]], [[and|y]] [[look after|cuidar]]. [[The PET exam|El examen PET]] [[was designed|fue diseñado]] [[to test|para evaluar]] [[these skills|estas habilidades]]. [[I|Yo]] [[told my students|le dije a mis estudiantes]] [[that|que]] [[they|ellos]] [[should|deberían]] [[be proud|estar orgullosos]] [[of|de]] [[their progress|su progreso]]. [[Good luck|Buena suerte]] [[with|con]] [[your future|tu futuro]] [[English journey|viaje con el inglés]]!`;

const INSTRUCTIONS = 'Escucha el audio. Puedes leer la transcripción. Después responde las preguntas.';

const QUESTIONS = [
  { question: '[[Who|Quién]] [[is the speaker|es el hablante]]?', options: ['[[A student|Un estudiante]]', '[[The B1 teacher|El profesor B1]]', '[[A PET examiner|Un examinador PET]]'], correctAnswer: 1, explanation: '[[He says|Dice]] "[[I am your B1 teacher|soy tu profesor B1]]".' },
  { question: '[[What|Qué]] [[does the speaker want to do|quiere hacer el hablante]]?', options: ['[[To start a new course|Empezar un nuevo curso]]', '[[To congratulate on completing the course|Felicitarte por completar el curso]]', '[[To give an exam|Dar un examen]]'], correctAnswer: 1, explanation: '[[He says|Dice]] "[[I want to congratulate you on completing this course|quiero felicitarte por completar este curso]]".' },
  { question: '[[What|Qué]] [[topics have been covered|temas se han cubierto]]?', options: ['[[Only vocabulary|Solo vocabulario]]', '[[Conditionals, passive, reported speech, modals, tenses|Condicionales, pasiva, estilo indirecto, modales, tiempos]]', '[[Only reading|Solo lectura]]'], correctAnswer: 1, explanation: '[[He says|Dice]] "[[we have covered conditionals, passive voice, reported speech, modals, and all the main tenses|hemos cubierto condicionales, voz pasiva, estilo indirecto, modales y todos los tiempos principales]]".' },
  { question: '[[What|Qué]] [[will happen|ocurrirá]] [[if you keep practising|si sigues practicando]]?', options: ['[[You will forget|Olvidarás]]', '[[You will reach B2 level soon|Alcanzarás el nivel B2 pronto]]', '[[You will stop|Te detendrás]]'], correctAnswer: 1, explanation: '[[He says|Dice]] "[[If you keep practising, you will reach B2 level soon|si sigues practicando, alcanzarás el nivel B2 pronto]]".' },
  { question: '[[Which|Cuáles]] [[phrasal verbs|phrasal verbs]] [[are mentioned|son mencionados]]?', options: ['[[Find out, give up, look after|Averiguar, rendirse, cuidar]]', '[[Take off, set off|Despegar, partir]]', '[[Break up, get along|Romper, llevarse bien]]'], correctAnswer: 0, explanation: '[[He says|Dice]] "[[find out, give up, and look after|averiguar, rendirse y cuidar]]".' },
  { question: '[[The PET exam|El examen PET]] [[was designed|fue diseñado]] [[to test these skills|para evaluar estas habilidades]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'True', explanation: '[[True|Verdadero]]. [[He says|Dice]] "[[The PET exam was designed to test these skills|el examen PET fue diseñado para evaluar estas habilidades]]".' },
  { question: '[[What|Qué]] [[did the teacher tell his students|le dijo el profesor a sus estudiantes]]?', options: ['[[To give up|Rendirse]]', '[[That they should be proud of their progress|Que deberían estar orgullosos de su progreso]]', '[[To stop learning|Dejar de aprender]]'], correctAnswer: 1, explanation: '[[He says|Dice]] "[[I told my students that they should be proud of their progress|le dije a mis estudiantes que deberían estar orgullosos de su progreso]]".' },
  { question: '[[What|Cuál]] [[is|es]] [[the main topic|el tema principal]] [[of|del]] [[this listening|esta escucha]]?', options: ['[[Travel|Viajes]]', '[[B1 course completion and encouragement|Finalización del curso B1 y ánimo]]', '[[Food|Comida]]'], correctAnswer: 1, explanation: '[[The listening|La escucha]] [[congratulates|felicita]] [[and encourages|y anima]] [[B1 students|a estudiantes B1]].' },
  { question: '[[First conditional|Primer condicional]] [[is used|se usa]] [[for future progress|para progreso futuro]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'True', explanation: '[[True|Verdadero]]. "[[If you keep practising, you will reach|si sigues practicando, alcanzarás]]".' },
  { question: '[[Reported speech|Estilo indirecto]] [[is used|se usa]] [[for the teacher\'s words to students|para las palabras del profesor a los estudiantes]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'True', explanation: '[[True|Verdadero]]. "[[I told my students that they should|le dije a mis estudiantes que deberían]]".' },
  { question: '[[Passive voice|Voz pasiva]] [[is used|se usa]] [[for the PET exam|para el examen PET]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'True', explanation: '[[True|Verdadero]]. "[[The PET exam was designed|el examen PET fue diseñado]]".' },
  { question: '[[The speaker|El hablante]] [[says|dice]] [[good luck|buena suerte]] [[at the end|al final]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'True', explanation: '[[True|Verdadero]]. "[[Good luck with your future English journey|buena suerte con tu futuro viaje con el inglés]]".' },
  { question: '[[Phrasal verbs|Los phrasal verbs]] [[are|son]] [[not important|no importantes]] [[for B1|para B1]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'False', explanation: '[[False|Falso]]. [[He says to remember to use them|Dice que recuerdes usarlos]].' },
  { question: '[[Present perfect|Presente perfecto]] [[is used|se usa]] [[for what has been learned|para lo que se ha aprendido]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'True', explanation: '[[True|Verdadero]]. "[[You have learned|has aprendido]]", "[[We have covered|hemos cubierto]]".' },
  { question: '[[The message|El mensaje]] [[is|es]] [[encouraging|alentador]] [[for future learning|para el aprendizaje futuro]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'True', explanation: '[[True|Verdadero]]. [[Congratulates|Felicita]], [[encourages|anima]] [[and wishes good luck|y desea buena suerte]].' },
];

export const UNIT_60_LESSON_4_LISTENING: Exercise[] = QUESTIONS.map((q, i) => ({
  id: `b1-u60-l4-l${i + 1}`,
  type: 'listening',
  level: 'B1',
  topic: 'B1 Revision',
  difficulty: 'easy',
  transcript: LISTENING_TRANSCRIPT,
  content: { title: LESSON_TITLE, instructions: INSTRUCTIONS, questions: [q] },
  topicName: 'Listening',
}));
