/**
 * Unidad 59 B1 — Lección 4: Comprensión auditiva (Exam preparation)
 * 15 actividades
 */

import { Exercise } from '@/lib/exercise-generator';

const LESSON_TITLE = '[[Listening|Comprensión auditiva]]';
const LISTENING_TRANSCRIPT = `[[Hi|Hola]], [[I|yo]] [[am|soy]] [[Sarah|Sarah]] [[and|y]] [[I|yo]] [[am|soy]] [[an|una]] [[exam preparation teacher|profesora de preparación de exámenes]]. [[Today|Hoy]] [[I|yo]] [[want|quiero]] [[to give|dar]] [[you|te]] [[some tips|algunos consejos]] [[for the PET exam|para el examen PET]]. [[First|Primero]], [[you should|deberías]] [[read the instructions|leer las instrucciones]] [[carefully|con cuidado]]. [[Many students|Muchos estudiantes]] [[make mistakes|cometen errores]] [[because|porque]] [[they|ellos]] [[don\'t read|no leen]] [[them|las]]. [[Second|Segundo]], [[manage your time|gestiona tu tiempo]] [[well|bien]]. [[The exam|El examen]] [[is taken|es realizado]] [[under|bajo]] [[time pressure|presión de tiempo]]. [[If|Si]] [[you|tú]] [[practise|practicas]] [[with mock exams|con exámenes de prueba]], [[you will feel|te sentirás]] [[more confident|más seguro]]. [[Stay calm|Mantente tranquilo]] [[and|y]] [[check your answers|revisa tus respuestas]] [[before|antes de]] [[handing in|entregar]]. [[Good luck|Buena suerte]]!`;

const INSTRUCTIONS = 'Escucha el audio. Puedes leer la transcripción. Después responde las preguntas.';

const QUESTIONS = [
  { question: '[[What|Cuál]] [[is the speaker\'s name|es el nombre del hablante]]?', options: ['[[Sara|Sara]]', '[[Sarah|Sarah]]', '[[Sandra|Sandra]]'], correctAnswer: 1, explanation: '[[She says|Dice]] "[[I am Sarah|soy Sarah]]".' },
  { question: '[[What|Qué]] [[is Sarah\'s job|es el trabajo de Sarah]]?', options: ['[[A student|Una estudiante]]', '[[An exam preparation teacher|Una profesora de preparación de exámenes]]', '[[A doctor|Una médica]]'], correctAnswer: 1, explanation: '[[She says|Dice]] "[[I am an exam preparation teacher|soy profesora de preparación de exámenes]]".' },
  { question: '[[What|Qué]] [[exam|examen]] [[does she give tips for|da consejos]]?', options: ['[[IELTS|IELTS]]', '[[PET exam|Examen PET]]', '[[TOEFL|TOEFL]]'], correctAnswer: 1, explanation: '[[She says|Dice]] "[[tips for the PET exam|consejos para el examen PET]]".' },
  { question: '[[What|Qué]] [[should you do first|deberías hacer primero]]?', options: ['[[Skip the instructions|Saltar las instrucciones]]', '[[Read the instructions carefully|Leer las instrucciones con cuidado]]', '[[Start writing|Empezar a escribir]]'], correctAnswer: 1, explanation: '[[She says|Dice]] "[[First, you should read the instructions carefully|primero, deberías leer las instrucciones con cuidado]]".' },
  { question: '[[Why|Por qué]] [[do many students make mistakes|cometen errores muchos estudiantes]]?', options: ['[[Because they are smart|Porque son inteligentes]]', '[[Because they don\'t read the instructions|Porque no leen las instrucciones]]', '[[Because they have no time|Porque no tienen tiempo]]'], correctAnswer: 1, explanation: '[[She says|Dice]] "[[Many students make mistakes because they don\'t read them|muchos estudiantes cometen errores porque no las leen]]".' },
  { question: '[[What|Qué]] [[should you manage|deberías gestionar]]?', options: ['[[Your money|Tu dinero]]', '[[Your time well|Tu tiempo bien]]', '[[Your food|Tu comida]]'], correctAnswer: 1, explanation: '[[She says|Dice]] "[[manage your time well|gestiona tu tiempo bien]]".' },
  { question: '[[The exam|El examen]] [[is taken|es realizado]] [[under time pressure|bajo presión de tiempo]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'True', explanation: '[[True|Verdadero]]. [[She says|Dice]] "[[The exam is taken under time pressure|el examen es realizado bajo presión de tiempo]]".' },
  { question: '[[What|Qué]] [[will help you feel more confident|te ayudará a sentirte más seguro]]?', options: ['[[Skipping practice|Saltar la práctica]]', '[[Practising with mock exams|Practicar con exámenes de prueba]]', '[[Not reading|No leer]]'], correctAnswer: 1, explanation: '[[She says|Dice]] "[[If you practise with mock exams, you will feel more confident|si practicas con exámenes de prueba, te sentirás más seguro]]".' },
  { question: '[[What|Cuál]] [[is|es]] [[the main topic|el tema principal]] [[of|del]] [[this listening|esta escucha]]?', options: ['[[Travel|Viajes]]', '[[PET exam tips|Consejos para el examen PET]]', '[[Food|Comida]]'], correctAnswer: 1, explanation: '[[The listening|La escucha]] [[gives|da]] [[exam preparation tips|consejos de preparación de exámenes]].' },
  { question: '[[You should|Deberías]] [[stay calm|mantenerte tranquilo]] [[and|y]] [[check your answers|revisar tus respuestas]] [[before handing in|antes de entregar]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'True', explanation: '[[True|Verdadero]]. [[She says|Dice]] "[[Stay calm and check your answers before handing in|mantente tranquilo y revisa tus respuestas antes de entregar]]".' },
  { question: '[[First conditional|Primer condicional]] [[is used|se usa]] [[for mock exams|para exámenes de prueba]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'True', explanation: '[[True|Verdadero]]. "[[If you practise... you will feel|si practicas... te sentirás]]".' },
  { question: '[[Sarah|Sarah]] [[says|dice]] [[good luck|buena suerte]] [[at the end|al final]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'True', explanation: '[[True|Verdadero]]. [[She says|Dice]] "[[Good luck|buena suerte]]".' },
  { question: '[[You should|Deberías]] [[ignore|ignorar]] [[the instructions|las instrucciones]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'False', explanation: '[[False|Falso]]. [[You should read them carefully|Deberías leerlas con cuidado]].' },
  { question: '[[Passive voice|Voz pasiva]] [[is used|se usa]] [[for the exam|para el examen]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'True', explanation: '[[True|Verdadero]]. "[[The exam is taken|el examen es realizado]]".' },
  { question: '[[How many|Cuántos]] [[main tips|consejos principales]] [[does Sarah give|da Sarah]]?', options: ['[[One|Uno]]', '[[Two|Dos]]', '[[Four|Cuatro]]'], correctAnswer: 2, explanation: '[[Read instructions|Leer instrucciones]], [[manage time|gestionar tiempo]], [[practise|practicar]], [[stay calm and check|mantenerse tranquilo y revisar]].' },
];

export const UNIT_59_LESSON_4_LISTENING: Exercise[] = QUESTIONS.map((q, i) => ({
  id: `b1-u59-l4-l${i + 1}`,
  type: 'listening',
  level: 'B1',
  topic: 'Exam Strategies',
  difficulty: 'easy',
  transcript: LISTENING_TRANSCRIPT,
  content: { title: LESSON_TITLE, instructions: INSTRUCTIONS, questions: [q] },
  topicName: 'Listening',
}));
