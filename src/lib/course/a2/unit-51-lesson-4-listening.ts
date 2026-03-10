/**
 * Unidad 51 — Lección 4: Comprensión auditiva (Modals: Have to & Must)
 * 15 actividades: 1 audio + 15 preguntas
 */

import { Exercise } from '@/lib/exercise-generator';

const LESSON_TITLE = '[[Listening|Comprensión auditiva]]';
const LISTENING_TRANSCRIPT = `[[Hi|Hola]] [[everyone|todos]]! [[I|Yo]] [[work|trabajo]] [[at|en]] [[a|un]] [[hospital|hospital]] [[and|y]] [[we|nosotros]] [[have to|tenemos que]] [[follow|seguir]] [[strict|estrictas]] [[rules|reglas]]. [[All|Todos]] [[staff|el personal]] [[must|debe]] [[wear|llevar]] [[white|blancas]] [[coats|batas]] [[and|y]] [[wash|lavar]] [[hands|manos]] [[frequently|frecuentemente]]. [[Doctors|Los doctores]] [[have to|tienen que]] [[check|revisar]] [[patients|pacientes]] [[every|cada]] [[day|día]]. [[Nurses|Las enfermeras]] [[must|deben]] [[give|dar]] [[medicine|medicina]] [[on|a]] [[time|tiempo]]. [[I|Yo]] [[have to|tengo que]] [[arrive|llegar]] [[at|a las]] [[7|7]] [[am|am]] [[because|porque]] [[my|mi]] [[shift|turno]] [[starts|empieza]] [[early|temprano]]. [[We|Nosotros]] [[must not|no debemos]] [[eat|comer]] [[or|o]] [[drink|beber]] [[in|en]] [[patient|paciente]] [[rooms|habitaciones]]. [[Everyone|Todos]] [[has to|tiene que]] [[keep|mantener]] [[the|las]] [[hospital|hospital]] [[clean|limpio]] [[and|y]] [[safe|seguro]]. [[I|Yo]] [[love|amo]] [[my|mi]] [[job|trabajo]] [[but|pero]] [[it|es]] [[requires|requiere]] [[a lot of|mucho]] [[responsibility|responsabilidad]].`;

const INSTRUCTIONS = 'Escucha el audio de abajo. Puedes leer la transcripción después de escuchar. Después responde las preguntas.';

const QUESTIONS = [
  { question: '[[Where|Dónde]] [[does|trabaja]] [[the|el]] [[speaker|hablante]] [[work|trabajar]]?', options: ['[[At a school|En una escuela]]', '[[At a hospital|En un hospital]]', '[[At an office|En una oficina]]', '[[At a shop|En una tienda]]'], correctAnswer: 1, explanation: '[[I work at a hospital|Trabajo en un hospital]].' },
  { question: '[[What|Qué]] [[colour|color]] [[must|deben]] [[staff|el personal]] [[wear|llevar]] [[coats|batas]]?', options: ['[[Blue|Azul]]', '[[Green|Verde]]', '[[White|Blanco]]', '[[Black|Negro]]'], correctAnswer: 2, explanation: '[[All staff must wear white coats|Todo el personal debe llevar batas blancas]].' },
  { question: '[[What|Qué]] [[must|deben]] [[staff|el personal]] [[do|hacer]] [[frequently|frecuentemente]]?', options: ['[[Eat|Comer]]', '[[Wash hands|Lavar las manos]]', '[[Sleep|Dormir]]', '[[Talk|Hablar]]'], correctAnswer: 1, explanation: '[[Wash hands frequently|Lavar las manos frecuentemente]].' },
  { question: '[[What|Qué]] [[do|tienen que]] [[doctors|los doctores]] [[have to|hacer]]?', options: ['[[Only operate|Solo operar]]', '[[Check patients every day|Revisar pacientes cada día]]', '[[Clean rooms|Limpiar habitaciones]]', '[[Cook food|Cocinar]]'], correctAnswer: 1, explanation: '[[Doctors have to check patients every day|Los doctores tienen que revisar pacientes cada día]].' },
  { question: '[[What|Qué]] [[must|deben]] [[nurses|las enfermeras]] [[do|hacer]]?', options: ['[[Give medicine on time|Dar medicina a tiempo]]', '[[Cook|Cocinar]]', '[[Drive|Conducir]]', '[[Teach|Enseñar]]'], correctAnswer: 0, explanation: '[[Nurses must give medicine on time|Las enfermeras deben dar medicina a tiempo]].' },
  { question: '[[What|A qué]] [[time|hora]] [[does|tiene que]] [[the|el]] [[speaker|hablante]] [[arrive|llegar]]?', options: ['[[6 am|6 am]]', '[[7 am|7 am]]', '[[8 am|8 am]]', '[[9 am|9 am]]'], correctAnswer: 1, explanation: '[[I have to arrive at 7 am|Tengo que llegar a las 7 am]].' },
  { question: '[[Can|Pueden]] [[staff|el personal]] [[eat|comer]] [[in|en]] [[patient|paciente]] [[rooms|habitaciones]]?', options: ['[[Yes|Sí]]', '[[No|No]]', '[[Sometimes|A veces]]', '[[Only at lunch|Solo a la hora de comer]]'], correctAnswer: 1, explanation: '[[We must not eat or drink in patient rooms|No debemos comer o beber en habitaciones de pacientes]].' },
  { question: '[[What|Qué]] [[does|tiene que]] [[everyone|todos]] [[have to|hacer]]?', options: ['[[Keep the hospital clean and safe|Mantener el hospital limpio y seguro]]', '[[Leave early|Salir temprano]]', '[[Work at night|Trabajar de noche]]', '[[Nothing special|Nada especial]]'], correctAnswer: 0, explanation: '[[Everyone has to keep the hospital clean and safe|Todos tienen que mantener el hospital limpio y seguro]].' },
  { question: '[[Does|Le]] [[the|al]] [[speaker|hablante]] ____ ____ ____?', options: ['[[love his job|le encanta su trabajo]]', '[[hate his job|odia su trabajo]]', '[[want to quit|quiere dejar]]', '[[find it boring|lo encuentra aburrido]]'], correctAnswer: 0, explanation: '[[I love my job|Amo mi trabajo]].' },
  { question: '[[The|El]] [[job|trabajo]] [[requires|requiere]] ____ ____ ____.', options: ['[[a lot of responsibility|mucha responsabilidad]]', '[[no responsibility|ninguna responsabilidad]]', '[[little work|poco trabajo]]', '[[no rules|ninguna regla]]'], correctAnswer: 0, explanation: '[[It requires a lot of responsibility|Requiere mucha responsabilidad]].' },
  { question: '[[The|El]] [[main|principal]] [[topic|tema]] [[of|del]] [[audio|audio]] [[is|es]]?', options: ['[[Travel|Viajes]]', '[[Hospital rules and obligations|Reglas y obligaciones hospitalarias]]', '[[Food|Comida]]', '[[Sports|Deportes]]'], correctAnswer: 1, explanation: '[[The|El]] [[audio|audio]] [[is about|trata de]] [[hospital rules|reglas hospitalarias]].' },
  { question: '[[Which|Cuál]] [[modal|modal]] [[is|se]] [[used|usa]] [[most|más]]?', options: ['[[Can|Can]]', '[[Have to and must|Have to y must]]', '[[Should|Should]]', '[[Could|Could]]'], correctAnswer: 1, explanation: '[[Have to and must|Have to y must]] [[for|para]] [[obligation|obligación]].' },
  { question: '[[Why|Por qué]] [[does|tiene que]] [[the|el]] [[speaker|hablante]] [[arrive|llegar]] [[early|temprano]]?', options: ['[[His shift starts early|Su turno empieza temprano]]', '[[He likes it|Le gusta]]', '[[The boss says so|El jefe lo dice]]', '[[No reason|Sin razón]]'], correctAnswer: 0, explanation: '[[Because my shift starts early|Porque mi turno empieza temprano]].' },
  { question: '[[True or False|Verdadero o Falso]]: [[Staff|El personal]] [[can|puede]] [[eat|comer]] [[in|en]] [[patient|paciente]] [[rooms|habitaciones]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'False', explanation: '[[We must not eat or drink in patient rooms|No debemos comer o beber en habitaciones de pacientes]].' },
  { question: '[[The|El]] [[speaker|hablante]] [[uses|usa]] [[have to|tener que]] [[and|y]] [[must|debe]] [[for|para]] ____.', options: ['[[obligation|obligación]]', '[[permission|permiso]]', '[[possibility|posibilidad]]', '[[advice|consejo]]'], correctAnswer: 0, explanation: '[[Have to and must|Have to y must]] [[express|expresan]] [[obligation|obligación]].' },
];

export const UNIT_51_LESSON_4_LISTENING: Exercise[] = QUESTIONS.map((q, i) => ({
  id: `a2-u51-l4-l${i + 1}`,
  type: 'listening',
  level: 'A2',
  topic: 'Modals: Have to & Must',
  difficulty: 'easy',
  transcript: LISTENING_TRANSCRIPT,
  content: { title: LESSON_TITLE, instructions: INSTRUCTIONS, questions: [q] },
  topicName: 'Listening',
}));
