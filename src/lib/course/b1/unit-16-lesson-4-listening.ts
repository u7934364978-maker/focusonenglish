/**
 * Unidad 16 B1 — Lección 4: Comprensión auditiva (Passive voice, technology)
 */

import { Exercise } from '@/lib/exercise-generator';

const LESSON_TITLE = '[[Listening|Comprensión auditiva]]';
const LISTENING_TRANSCRIPT = `[[Hi|Hola]], [[I'm|estoy]] [[having|teniendo]] [[problems|problemas]] [[with|con]] [[my laptop|mi portátil]]. [[It|Él]] [[was|fue]] [[bought|comprado]] [[last year|el año pasado]] [[and|y]] [[the software|el software]] [[was installed|fue instalado]] [[by|por]] [[a technician|un técnico]]. [[Now|Ahora]] [[the updates|las actualizaciones]] [[are downloaded|son descargadas]] [[automatically|automáticamente]] [[every week|cada semana]], [[but|pero]] [[my device|mi dispositivo]] [[is|está]] [[very slow|muy lento]]. [[The battery|La batería]] [[was replaced|fue reemplazada]] [[last month|el mes pasado]] [[because|porque]] [[it|ella]] [[was damaged|estaba dañada]]. [[I think|Creo]] [[the problem|el problema]] [[can be fixed|puede ser arreglado]] [[by|por]] [[updating|actualizando]] [[the system|el sistema]].`;

const INSTRUCTIONS = 'Escucha el audio. Puedes leer la transcripción. Después responde las preguntas.';

const QUESTIONS = [
  { question: '[[What|Qué]] [[is the person having problems with|problemas tiene la persona]]?', options: ['[[their smartphone|su smartphone]]', '[[their laptop|su portátil]]', '[[their tablet|su tableta]]'], correctAnswer: 1, explanation: '[[The speaker says|El hablante dice]] "[[having problems with my laptop|teniendo problemas con mi portátil]]".' },
  { question: '[[When|Cuándo]] [[was the laptop bought|fue comprado el portátil]]?', options: ['[[two years ago|hace dos años]]', '[[last year|el año pasado]]', '[[last month|el mes pasado]]'], correctAnswer: 1, explanation: '[[The speaker says|El hablante dice]] "[[was bought last year|fue comprado el año pasado]]".' },
  { question: '[[Who|Quién]] [[installed the software|instaló el software]]?', options: ['[[the user|el usuario]]', '[[a technician|un técnico]]', '[[a friend|un amigo]]'], correctAnswer: 1, explanation: '[[The speaker says|El hablante dice]] "[[was installed by a technician|fue instalado por un técnico]]".' },
  { question: '[[How often|Con qué frecuencia]] [[are updates downloaded|se descargan las actualizaciones]]?', options: ['[[every day|cada día]]', '[[every week|cada semana]]', '[[every month|cada mes]]'], correctAnswer: 1, explanation: '[[The speaker says|El hablante dice]] "[[are downloaded automatically every week|son descargadas automáticamente cada semana]]".' },
  { question: '[[What|Qué]] [[was replaced|fue reemplazada]] [[last month|el mes pasado]]?', options: ['[[the screen|la pantalla]]', '[[the battery|la batería]]', '[[the keyboard|el teclado]]'], correctAnswer: 1, explanation: '[[The speaker says|El hablante dice]] "[[The battery was replaced last month|la batería fue reemplazada el mes pasado]]".' },
  { question: '[[The device|El dispositivo]] [[is|está]] [[very slow|muy lento]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'True', explanation: '[[True|Verdadero]]. [[The speaker says|El hablante dice]] "[[my device is very slow|mi dispositivo está muy lento]]".' },
  { question: '[[The battery|La batería]] [[was damaged|estaba dañada]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'True', explanation: '[[True|Verdadero]]. [[The speaker says|El hablante dice]] "[[it was damaged|estaba dañada]]".' },
  { question: '[[What|Qué]] [[does the person think|cree la persona]] [[can fix the problem|puede arreglar el problema]]?', options: ['[[buying a new laptop|comprar un portátil nuevo]]', '[[updating the system|actualizar el sistema]]', '[[replacing the battery|reemplazar la batería]]'], correctAnswer: 1, explanation: '[[The speaker says|El hablante dice]] "[[can be fixed by updating the system|puede ser arreglado actualizando el sistema]]".' },
  { question: '[[The software|El software]] [[was installed|fue instalado]] [[by the user|por el usuario]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'False', explanation: '[[False|Falso]]. [[By a technician|Por un técnico]].' },
  { question: '[[The text|El texto]] [[uses|usa]] [[passive voice|voz pasiva]] [[in several sentences|en varias oraciones]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'True', explanation: '[[True|Verdadero]]. [[Examples|Ejemplos]]: [[was bought|fue comprado]], [[was installed|fue instalado]], [[are downloaded|son descargadas]].' },
  { question: '[[Updates|Las actualizaciones]] [[are downloaded|son descargadas]] [[manually|manualmente]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'False', explanation: '[[False|Falso]]. [[Automatically|Automáticamente]].' },
  { question: '[[Which passive form|Qué forma pasiva]] [[is used|se usa]] [[for "fue comprado"|para "fue comprado"]]?', options: ['[[is bought|es comprado]]', '[[was bought|fue comprado]]', '[[are bought|son comprados]]'], correctAnswer: 1, explanation: '[[Past passive|Pasiva pasado]]: [[was + past participle|was + participio pasado]].' },
  { question: '[[The main topic|El tema principal]] [[is|es]] [[technology problems|problemas tecnológicos]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'True', explanation: '[[True|Verdadero]]. [[The listening|La escucha]] [[focuses on|se centra en]] [[laptop problems|problemas del portátil]].' },
  { question: '[[The battery|La batería]] [[was replaced|fue reemplazada]] [[because|porque]] ____.', options: ['[[it was new|era nueva]]', '[[it was damaged|estaba dañada]]', '[[it was cheap|era barata]]'], correctAnswer: 1, explanation: '[[The speaker says|El hablante dice]] "[[because it was damaged|porque estaba dañada]]".' },
  { question: '[[What|Qué]] [[passive structures|estructuras pasivas]] [[appear|aparecen]] [[in the listening|en la escucha]]?', options: ['[[was bought, was installed, are downloaded, was replaced|fue comprado, fue instalado, son descargadas, fue reemplazada]]', '[[is bought, is installed|es comprado, es instalado]]', '[[will be fixed|será arreglado]]'], correctAnswer: 0, explanation: '[[The listening|La escucha]] [[uses|usa]] [[several passive forms|varias formas pasivas]].' },
];

export const UNIT_16_LESSON_4_LISTENING: Exercise[] = QUESTIONS.map((q, i) => ({
  id: `b1-u16-l4-l${i + 1}`,
  type: 'listening',
  level: 'B1',
  topic: 'Technology',
  difficulty: 'easy',
  transcript: LISTENING_TRANSCRIPT,
  content: { title: LESSON_TITLE, instructions: INSTRUCTIONS, questions: [q] },
  topicName: 'Listening',
}));
