/**
 * Unidad 16 B2 — Lección 3: Comprensión lectora (Technology)
 * 18 actividades (B2: más vocabulario y complejidad que B1)
 */

import { Exercise } from '@/lib/exercise-generator';

const LESSON_TITLE = '[[Reading|Comprensión lectora]]';
const READING_TRANSCRIPT = `[[The internet|Internet]] [[was developed|fue desarrollado]] [[in the 1960s|en los años 60]] [[by researchers|por investigadores]] [[who|que]] [[were working|estaban trabajando]] [[for the US military|para el ejército estadounidense]]. [[Originally|Originalmente]], [[it|él]] [[was designed|fue diseñado]] [[to share information|para compartir información]] [[between|entre]] [[different computers|diferentes ordenadores]] [[in case|por si]] [[a nuclear attack|un ataque nuclear]] [[destroyed|destruía]] [[one of them|uno de ellos]]. [[Today|Hoy]], [[billions of emails|miles de millones de correos]] [[are sent|se envían]] [[every day|cada día]], [[and|y]] [[new applications|nuevas aplicaciones]] [[are being created|están siendo creadas]] [[constantly|constantemente]]. [[The first smartphone|El primer smartphone]] [[was released|fue lanzado]] [[in 2007|en 2007]], [[and|y]] [[since then|desde entonces]] [[the way we communicate|la forma en que nos comunicamos]] [[has been transformed|ha sido transformada]]. [[Personal data|Los datos personales]] [[is now stored|ahora se almacena]] [[in the cloud|en la nube]], [[which|que]] [[means|significa]] [[that|que]] [[we can access|podemos acceder]] [[our information|a nuestra información]] [[from anywhere|desde cualquier lugar]]. [[However|Sin embargo]], [[cybersecurity|la ciberseguridad]] [[has become|se ha convertido]] [[a major concern|en una gran preocupación]] [[because|porque]] [[hackers|los hackers]] [[are constantly trying|intentan constantemente]] [[to access|acceder]] [[to systems|a sistemas]] [[that|que]] [[should be protected|deberían estar protegidos]].`;

const INSTRUCTIONS =
  'Lee el texto sobre la historia y el estado actual de la tecnología. Después responde las preguntas.';

const QUESTIONS = [
  {
    question:
      '[[When|Cuándo]] [[was the internet developed|fue desarrollado internet]]?',
    options: [
      '[[In the 1960s|En los años 60]]',
      '[[In the 1990s|En los 90]]',
      '[[In the 2000s|En los 2000]]',
    ],
    correctAnswer: 0,
    explanation: 'El texto dice que "was developed in the 1960s".',
  },
  {
    question:
      '[[Who|Quiénes]] [[developed the internet|desarrollaron internet]]?',
    options: [
      '[[Researchers working for the US military|Investigadores que trabajaban para el ejército estadounidense]]',
      '[[University students|Estudiantes universitarios]]',
      '[[Private companies|Empresas privadas]]',
    ],
    correctAnswer: 0,
    explanation:
      'Se menciona que "was developed by researchers who were working for the US military".',
  },
  {
    question:
      '[[What|Para qué]] [[was the internet originally designed|fue diseñado originalmente internet]]?',
    options: [
      '[[To share information between computers in case of a nuclear attack|Para compartir información entre ordenadores por si un ataque nuclear destruía uno]]',
      '[[For entertainment|Para entretenimiento]]',
      '[[For online shopping|Para compras online]]',
    ],
    correctAnswer: 0,
    explanation:
      'El texto indica que "was designed to share information between different computers in case a nuclear attack destroyed one of them".',
  },
  {
    question:
      '[[What|Qué]] [[happens to billions of emails every day|pasa con miles de millones de correos cada día]]?',
    options: [
      '[[They are sent|Se envían]]',
      '[[They are deleted|Se eliminan]]',
      '[[They are stored|Se almacenan]]',
    ],
    correctAnswer: 0,
    explanation: 'Se dice que "billions of emails are sent every day".',
  },
  {
    question:
      '[[What|Qué]] [[is constantly happening to new applications|pasa constantemente con las nuevas aplicaciones]]?',
    options: [
      '[[They are being created|Están siendo creadas]]',
      '[[They are being deleted|Están siendo eliminadas]]',
      '[[They are being sold|Están siendo vendidas]]',
    ],
    correctAnswer: 0,
    explanation:
      'El texto dice que "new applications are being created constantly".',
  },
  {
    question:
      '[[When|Cuándo]] [[was the first smartphone released|fue lanzado el primer smartphone]]?',
    options: [
      '[[In 2007|En 2007]]',
      '[[In 2000|En 2000]]',
      '[[In 2010|En 2010]]',
    ],
    correctAnswer: 0,
    explanation: 'Se indica que "The first smartphone was released in 2007".',
  },
  {
    question:
      '[[What|Qué]] [[has been transformed since the first smartphone|ha sido transformado desde el primer smartphone]]?',
    options: [
      '[[The way we communicate|La forma en que nos comunicamos]]',
      '[[The way we eat|La forma en que comemos]]',
      '[[The way we travel|La forma en que viajamos]]',
    ],
    correctAnswer: 0,
    explanation:
      'El texto dice que "the way we communicate has been transformed".',
  },
  {
    question:
      '[[Where|Dónde]] [[is personal data now stored|se almacenan ahora los datos personales]]?',
    options: [
      '[[In the cloud|En la nube]]',
      '[[Only on our devices|Solo en nuestros dispositivos]]',
      '[[In paper files|En archivos de papel]]',
    ],
    correctAnswer: 0,
    explanation: 'Se dice que "Personal data is now stored in the cloud".',
  },
  {
    question:
      '[[What|Qué]] [[advantage does cloud storage give us|ventaja nos da el almacenamiento en la nube]]?',
    options: [
      '[[We can access our information from anywhere|Podemos acceder a nuestra información desde cualquier lugar]]',
      '[[It is cheaper|Es más barato]]',
      '[[It is faster|Es más rápido]]',
    ],
    correctAnswer: 0,
    explanation:
      'El texto indica que "we can access our information from anywhere".',
  },
  {
    question:
      '[[What|Qué]] [[has become a major concern|se ha convertido en una gran preocupación]]?',
    options: [
      '[[Cybersecurity|La ciberseguridad]]',
      '[[The cost of devices|El coste de los dispositivos]]',
      '[[The speed of the internet|La velocidad de internet]]',
    ],
    correctAnswer: 0,
    explanation:
      'Se menciona que "cybersecurity has become a major concern".',
  },
  {
    question:
      '[[The text states|El texto afirma]] [[that|que]] [[the internet was created for entertainment|internet fue creado para entretenimiento]].',
    options: ['[[True|Verdadero]]', '[[False|Falso]]'],
    correctAnswer: 'False',
    explanation:
      'Es falso: fue diseñado para compartir información entre ordenadores por si un ataque nuclear.',
  },
  {
    question:
      '[[The text implies|El texto implica]] [[that|que]] [[hackers are a threat to security|los hackers son una amenaza para la seguridad]].',
    options: ['[[True|Verdadero]]', '[[False|Falso]]'],
    correctAnswer: 'True',
    explanation:
      'Verdadero: se dice que "hackers are constantly trying to access systems that should be protected".',
  },
  {
    question:
      '[[What|Cuál]] [[is|es]] [[the main idea|la idea principal]] [[of the text|del texto]]?',
    options: [
      '[[The internet has evolved from military use to everyday life, with benefits and security concerns|Internet ha evolucionado del uso militar a la vida cotidiana, con beneficios y preocupaciones de seguridad]]',
      '[[Smartphones are the most important invention|Los smartphones son el invento más importante]]',
      '[[Cloud storage is unsafe|El almacenamiento en la nube es inseguro]]',
    ],
    correctAnswer: 0,
    explanation:
      'El texto describe la evolución de internet y las preocupaciones actuales.',
  },
  {
    question:
      '[[Which passive structure|Qué estructura pasiva]] [[is used|se usa]] [[in|en]] "new applications are being created constantly"?',
    options: [
      '[[Present continuous passive|Pasiva de presente continuo]]',
      '[[Present simple passive|Pasiva de presente simple]]',
      '[[Past simple passive|Pasiva de pasado simple]]',
    ],
    correctAnswer: 0,
    explanation:
      'Are + being + past participle = present continuous passive.',
  },
  {
    question:
      '[[Which passive structure|Qué estructura pasiva]] [[describes|describe]] [[a completed past action|una acción pasada completada]]?',
    options: [
      '[[The first smartphone was released in 2007|The first smartphone was released in 2007]]',
      '[[Billions of emails are sent every day|Billions of emails are sent every day]]',
      '[[New applications are being created|New applications are being created]]',
    ],
    correctAnswer: 0,
    explanation:
      '"Was released" es past simple passive (acción completada en el pasado).',
  },
  {
    question:
      '[[What|Qué]] [[vocabulary|vocabulario]] [[is key|es clave]] [[in this text|en este texto]]?',
    options: [
      '[[internet, developed, applications, cloud, cybersecurity, hackers|internet, developed, applications, cloud, cybersecurity, hackers]]',
      '[[festival, tradition, culture|festival, tradition, culture]]',
      '[[recipe, ingredients, cooking|recipe, ingredients, cooking]]',
    ],
    correctAnswer: 0,
    explanation:
      'El campo semántico es tecnológico.',
  },
  {
    question:
      '[[What|Qué]] [[detail|detalle]] [[supports|apoya]] [[the idea that technology has changed|la idea de que la tecnología ha cambiado]]?',
    options: [
      '[[The way we communicate has been transformed since 2007|La forma en que nos comunicamos ha sido transformada desde 2007]]',
      '[[The internet was developed in the 1960s|Internet fue desarrollado en los 60]]',
      '[[Hackers are a threat|Los hackers son una amenaza]]',
    ],
    correctAnswer: 0,
    explanation:
      'La transformación de la comunicación desde el smartphone demuestra el cambio.',
  },
  {
    question:
      '[[The phrase|La frase]] [["in case"|"in case"]] [[in this context means|en este contexto significa]] ____.',
    options: [
      '[[in the event that / if|por si / en caso de que]]',
      '[[inside a box|dentro de una caja]]',
      '[[for example|por ejemplo]]',
    ],
    correctAnswer: 0,
    explanation:
      '"In case" significa "por si" o "en caso de que".',
  },
  {
    question:
      '[[Who|Quiénes]] [[are trying to access protected systems|intentan acceder a sistemas protegidos]]?',
    options: [
      '[[Hackers|Los hackers]]',
      '[[Researchers|Los investigadores]]',
      '[[The military|El ejército]]',
    ],
    correctAnswer: 0,
    explanation:
      'El texto dice que "hackers are constantly trying to access systems that should be protected".',
  },
];

export const UNIT_16_LESSON_3_READING: Exercise[] = QUESTIONS.map((q, i) => ({
  id: `b2-u16-l3-r${i + 1}`,
  type: 'reading',
  level: 'B2',
  topic: 'Technology',
  difficulty: 'medium',
  transcript: READING_TRANSCRIPT,
  content: { title: LESSON_TITLE, instructions: INSTRUCTIONS, questions: [q] },
  topicName: 'Reading',
}));
