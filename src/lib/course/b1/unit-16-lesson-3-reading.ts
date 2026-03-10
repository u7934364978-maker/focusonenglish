/**
 * Unidad 16 B1 — Lección 3: Comprensión lectora (Passive voice, technology)
 */

import { Exercise } from '@/lib/exercise-generator';

const LESSON_TITLE = '[[Reading|Comprensión lectora]]';
const READING_TRANSCRIPT = `[[Smartphones|Los smartphones]] [[are used|son usados]] [[by billions of people|por miles de millones de personas]] [[around the world|en todo el mundo]] [[every day|cada día]]. [[New apps|Nuevas aplicaciones]] [[are developed|son desarrolladas]] [[all the time|todo el tiempo]] [[by software companies|por empresas de software]]. [[Last year|El año pasado]], [[this device|este dispositivo]] [[was manufactured|fue fabricado]] [[in China|en China]] [[and|y]] [[was sold|fue vendido]] [[in over fifty countries|en más de cincuenta países]]. [[Data|Los datos]] [[is stored|se almacenan]] [[in the cloud|en la nube]] [[and|y]] [[is encrypted|se encriptan]] [[for security|por seguridad]]. [[The software|El software]] [[was updated|fue actualizado]] [[last month|el mes pasado]] [[to fix|para corregir]] [[some bugs|algunos errores]].`;

const INSTRUCTIONS = 'Lee el texto de abajo. Después responde las preguntas.';

const QUESTIONS = [
  { question: '[[Who|Quién]] [[uses|usa]] [[smartphones|smartphones]] [[every day|cada día]]?', options: ['[[only young people|solo jóvenes]]', '[[billions of people around the world|miles de millones de personas en todo el mundo]]', '[[only in China|solo en China]]'], correctAnswer: 1, explanation: '[[The text says|El texto dice]] "[[billions of people around the world|miles de millones de personas en todo el mundo]]".' },
  { question: '[[Who|Quién]] [[develops|desarrolla]] [[new apps|nuevas aplicaciones]]?', options: ['[[users|usuarios]]', '[[software companies|empresas de software]]', '[[governments|gobiernos]]'], correctAnswer: 1, explanation: '[[The text says|El texto dice]] "[[by software companies|por empresas de software]]".' },
  { question: '[[Where|Dónde]] [[was the device manufactured|fue fabricado el dispositivo]]?', options: ['[[in the USA|en EE.UU.]]', '[[in China|en China]]', '[[in Japan|en Japón]]'], correctAnswer: 1, explanation: '[[The text says|El texto dice]] "[[was manufactured in China|fue fabricado en China]]".' },
  { question: '[[Where|Dónde]] [[is data stored|se almacenan los datos]]?', options: ['[[on paper|en papel]]', '[[in the cloud|en la nube]]', '[[on CDs|en CDs]]'], correctAnswer: 1, explanation: '[[The text says|El texto dice]] "[[is stored in the cloud|se almacenan en la nube]]".' },
  { question: '[[Why|Por qué]] [[is data encrypted|se encriptan los datos]]?', options: ['[[for speed|por velocidad]]', '[[for security|por seguridad]]', '[[for fun|por diversión]]'], correctAnswer: 1, explanation: '[[The text says|El texto dice]] "[[for security|por seguridad]]".' },
  { question: '[[The software|El software]] [[was updated|fue actualizado]] [[last month|el mes pasado]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'True', explanation: '[[True|Verdadero]]. [[The text says|El texto dice]] "[[was updated last month|fue actualizado el mes pasado]]".' },
  { question: '[[The device|El dispositivo]] [[was sold|fue vendido]] [[in over fifty countries|en más de cincuenta países]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'True', explanation: '[[True|Verdadero]]. [[The text says|El texto dice]] "[[was sold in over fifty countries|fue vendido en más de cincuenta países]]".' },
  { question: '[[What|Qué]] [[was the purpose|fue el propósito]] [[of the software update|de la actualización del software]]?', options: ['[[to add new features|para añadir nuevas funciones]]', '[[to fix some bugs|para corregir algunos errores]]', '[[to change the design|para cambiar el diseño]]'], correctAnswer: 1, explanation: '[[The text says|El texto dice]] "[[to fix some bugs|para corregir algunos errores]]".' },
  { question: '[[What|Cuál]] [[is|es]] [[the main topic|el tema principal]] [[of|del]] [[this text|este texto]]?', options: ['[[Food|Comida]]', '[[Technology and passive voice|Tecnología y voz pasiva]]', '[[Travel|Viajes]]'], correctAnswer: 1, explanation: '[[The text|El texto]] [[talks about|habla de]] [[technology|tecnología]] [[and|y]] [[uses passive voice|usa voz pasiva]].' },
  { question: '[[New apps|Nuevas aplicaciones]] [[are developed|son desarrolladas]] [[sometimes|a veces]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'False', explanation: '[[False|Falso]]. [[All the time|Todo el tiempo]].' },
  { question: '[[Data|Los datos]] [[is stored|se almacenan]] [[in the cloud|en la nube]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'True', explanation: '[[True|Verdadero]]. [[The text says|El texto dice]] "[[is stored in the cloud|se almacenan en la nube]]".' },
  { question: '[[The text|El texto]] [[uses|usa]] [[passive voice|voz pasiva]] [[throughout|a lo largo]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'True', explanation: '[[True|Verdadero]]. [[Examples|Ejemplos]]: [[are used|son usados]], [[are developed|son desarrolladas]], [[was manufactured|fue fabricado]].' },
  { question: '[[Which verb form|Qué forma verbal]] [[is used|se usa]] [[for present passive|para pasiva presente]]?', options: ['[[was + past participle|was + participio pasado]]', '[[is/are + past participle|is/are + participio pasado]]', '[[will + past participle|will + participio pasado]]'], correctAnswer: 1, explanation: '[[Present passive|Pasiva presente]]: [[is/are + past participle|is/are + participio pasado]].' },
  { question: '[[The device|El dispositivo]] [[was manufactured|fue fabricado]] [[last year|el año pasado]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'True', explanation: '[[True|Verdadero]]. [[The text says|El texto dice]] "[[was manufactured|fue fabricado]]" [[last year|el año pasado]].' },
  { question: '[[What|Qué]] [[technology words|palabras de tecnología]] [[appear|aparecen]] [[in the text|en el texto]]?', options: ['[[smartphones, apps, software, cloud, data|smartphones, apps, software, nube, datos]]', '[[food, weather, travel|comida, tiempo, viajes]]', '[[music, art, sport|música, arte, deporte]]'], correctAnswer: 0, explanation: '[[The text|El texto]] [[mentions|menciona]] [[smartphones|smartphones]], [[apps|aplicaciones]], [[software|software]], [[cloud|nube]], [[data|datos]].' },
];

export const UNIT_16_LESSON_3_READING: Exercise[] = QUESTIONS.map((q, i) => ({
  id: `b1-u16-l3-r${i + 1}`,
  type: 'reading',
  level: 'B1',
  topic: 'Technology',
  difficulty: 'easy',
  transcript: READING_TRANSCRIPT,
  content: { title: LESSON_TITLE, instructions: INSTRUCTIONS, questions: [q] },
  topicName: 'Reading',
}));
