/**
 * Unidad 16 B2 — Lección 4: Comprensión auditiva (Technology)
 * 18 actividades (B2: más vocabulario y complejidad que B1)
 */

import { Exercise } from '@/lib/exercise-generator';

const LESSON_TITLE = '[[Listening|Comprensión auditiva]]';
const LISTENING_TRANSCRIPT = `[[Hi|Hola]], [[I'm|soy]] [[David|David]], [[a software engineer|un ingeniero de software]] [[who|que]] [[has been working|ha estado trabajando]] [[in tech|en tecnología]] [[for over a decade|desde hace más de una década]]. [[Today|Hoy]] [[I want to explain|quiero explicar]] [[how|como]] [[our new app|nuestra nueva app]] [[was developed|fue desarrollada]] [[and|y]] [[what|qué]] [[users can expect|los usuarios pueden esperar]]. [[The project|El proyecto]] [[was started|fue iniciado]] [[two years ago|hace dos años]] [[when|cuando]] [[our team|nuestro equipo]] [[was asked|fue solicitado]] [[to create|crear]] [[a tool|una herramienta]] [[that|que]] [[could|podía]] [[help people|ayudar a la gente]] [[manage their time better|gestionar mejor su tiempo]]. [[The first version|La primera versión]] [[was released|fue lanzada]] [[last year|el año pasado]], [[but|pero]] [[many bugs|muchos errores]] [[were found|fueron encontrados]] [[by users|por los usuarios]]. [[Since then|Desde entonces]], [[the app|la app]] [[has been improved|ha sido mejorada]] [[significantly|significativamente]], [[and|y]] [[a new update|una nueva actualización]] [[will be released|será lanzada]] [[next month|el mes que viene]]. [[All data|Todos los datos]] [[is stored|se almacena]] [[securely|de forma segura]] [[in the cloud|en la nube]], [[which|que]] [[means|significa]] [[that|que]] [[your information|tu información]] [[can be accessed|puede ser accedida]] [[from any device|desde cualquier dispositivo]].`;

const INSTRUCTIONS =
  'Escucha el audio (o lee la transcripción). Después responde las preguntas de comprensión.';

const QUESTIONS = [
  {
    question: '[[Who is speaking in the audio|Quién habla en el audio]]?',
    options: [
      '[[David, a software engineer who has worked in tech for over a decade|David, un ingeniero de software que lleva más de una década en tecnología]]',
      '[[A user of the app|Un usuario de la app]]',
      '[[A marketing manager|Un director de marketing]]',
    ],
    correctAnswer: 0,
    explanation:
      'El hablante se presenta como "David, a software engineer who has been working in tech for over a decade".',
  },
  {
    question:
      '[[What|Qué]] [[does David want to explain|quiere explicar David]]?',
    options: [
      '[[How the new app was developed and what users can expect|Cómo fue desarrollada la nueva app y qué pueden esperar los usuarios]]',
      '[[How to fix bugs|Cómo arreglar errores]]',
      '[[How to download the app|Cómo descargar la app]]',
    ],
    correctAnswer: 0,
    explanation:
      'Dice que quiere explicar "how our new app was developed and what users can expect".',
  },
  {
    question:
      '[[When|Cuándo]] [[was the project started|fue iniciado el proyecto]]?',
    options: [
      '[[Two years ago|Hace dos años]]',
      '[[Last year|El año pasado]]',
      '[[Five years ago|Hace cinco años]]',
    ],
    correctAnswer: 0,
    explanation:
      'Se dice que "The project was started two years ago".',
  },
  {
    question:
      '[[What|Qué]] [[was the team asked to create|se pidió al equipo crear]]?',
    options: [
      '[[A tool that could help people manage their time better|Una herramienta que pudiera ayudar a la gente a gestionar mejor su tiempo]]',
      '[[A social media app|Una app de redes sociales]]',
      '[[A game|Un juego]]',
    ],
    correctAnswer: 0,
    explanation:
      'El equipo "was asked to create a tool that could help people manage their time better".',
  },
  {
    question:
      '[[When|Cuándo]] [[was the first version released|fue lanzada la primera versión]]?',
    options: [
      '[[Last year|El año pasado]]',
      '[[Two years ago|Hace dos años]]',
      '[[Next month|El mes que viene]]',
    ],
    correctAnswer: 0,
    explanation:
      'Se menciona que "The first version was released last year".',
  },
  {
    question:
      '[[Where|Dónde]] [[were many bugs found|fueron encontrados muchos errores]]?',
    options: [
      '[[By users|Por los usuarios]]',
      '[[By the development team|Por el equipo de desarrollo]]',
      '[[By the marketing team|Por el equipo de marketing]]',
    ],
    correctAnswer: 0,
    explanation:
      'El texto dice que "many bugs were found by users".',
  },
  {
    question:
      '[[What|Qué]] [[has happened to the app since then|ha pasado con la app desde entonces]]?',
    options: [
      '[[It has been improved significantly|Ha sido mejorada significativamente]]',
      '[[It was deleted|Fue eliminada]]',
      '[[It was sold|Fue vendida]]',
    ],
    correctAnswer: 0,
    explanation:
      'Se dice que "the app has been improved significantly".',
  },
  {
    question:
      '[[When|Cuándo]] [[will the new update be released|será lanzada la nueva actualización]]?',
    options: [
      '[[Next month|El mes que viene]]',
      '[[Last year|El año pasado]]',
      '[[In two years|En dos años]]',
    ],
    correctAnswer: 0,
    explanation:
      'Se menciona que "a new update will be released next month".',
  },
  {
    question:
      '[[Where|Dónde]] [[is all data stored|se almacenan todos los datos]]?',
    options: [
      '[[Securely in the cloud|De forma segura en la nube]]',
      '[[Only on the user\'s device|Solo en el dispositivo del usuario]]',
      '[[On paper|En papel]]',
    ],
    correctAnswer: 0,
    explanation:
      'El texto dice que "All data is stored securely in the cloud".',
  },
  {
    question:
      '[[The speaker suggests|El hablante sugiere]] [[that|que]] [[the first version had no problems|la primera versión no tuvo problemas]].',
    options: ['[[True|Verdadero]]', '[[False|Falso]]'],
    correctAnswer: 'False',
    explanation:
      'Es falso: se dice que "many bugs were found by users".',
  },
  {
    question:
      '[[The audio implies|El audio implica]] [[that|que]] [[users can access their data from different devices|los usuarios pueden acceder a sus datos desde diferentes dispositivos]].',
    options: ['[[True|Verdadero]]', '[[False|Falso]]'],
    correctAnswer: 'True',
    explanation:
      'Verdadero: se dice que "your information can be accessed from any device".',
  },
  {
    question:
      '[[What|Cuál]] [[is|es]] [[the main idea|la idea principal]] [[of the listening|de la escucha]]?',
    options: [
      '[[A time-management app was developed, improved after user feedback, and will be updated soon|Una app de gestión del tiempo fue desarrollada, mejorada tras feedback de usuarios, y será actualizada pronto]]',
      '[[David is a great engineer|David es un gran ingeniero]]',
      '[[Cloud storage is unsafe|El almacenamiento en la nube es inseguro]]',
    ],
    correctAnswer: 0,
    explanation:
      'La idea central es el desarrollo, mejora y futura actualización de la app.',
  },
  {
    question:
      '[[Which passive structure|Qué estructura pasiva]] [[is used|se usa]] [[in|en]] "a new update will be released next month"?',
    options: [
      '[[Future passive|Pasiva de futuro]]',
      '[[Present perfect passive|Pasiva de presente perfecto]]',
      '[[Past simple passive|Pasiva de pasado simple]]',
    ],
    correctAnswer: 0,
    explanation:
      'Will + be + past participle = future passive.',
  },
  {
    question:
      '[[Which passive structure|Qué estructura pasiva]] [[describes|describe]] [[an ongoing improvement|una mejora en curso]]?',
    options: [
      '[[The app has been improved significantly|The app has been improved significantly]]',
      '[[The project was started two years ago|The project was started two years ago]]',
      '[[A new update will be released|A new update will be released]]',
    ],
    correctAnswer: 0,
    explanation:
      '"Has been improved" es present perfect passive (resultado de una acción completada).',
  },
  {
    question:
      '[[What|Qué]] [[vocabulary set|conjunto de vocabulario]] [[is central|es central]] [[in this listening|en esta escucha]]?',
    options: [
      '[[app, developed, released, bugs, update, cloud, data|app, developed, released, bugs, update, cloud, data]]',
      '[[festival, tradition, culture|festival, tradition, culture]]',
      '[[recipe, ingredients, cooking|recipe, ingredients, cooking]]',
    ],
    correctAnswer: 0,
    explanation:
      'El audio gira en torno a vocabulario tecnológico y de desarrollo de software.',
  },
  {
    question:
      '[[What|Qué]] [[detail|detalle]] [[supports|apoya]] [[the idea that the team listens to users|la idea de que el equipo escucha a los usuarios]]?',
    options: [
      '[[Many bugs were found by users and the app has been improved since then|Muchos errores fueron encontrados por usuarios y la app ha sido mejorada desde entonces]]',
      '[[The project was started two years ago|El proyecto fue iniciado hace dos años]]',
      '[[Data is stored in the cloud|Los datos se almacenan en la nube]]',
    ],
    correctAnswer: 0,
    explanation:
      'El equipo mejoró la app tras el feedback de los usuarios sobre los bugs.',
  },
  {
    question:
      '[[The phrase|La frase]] [["manage their time"|"manage their time"]] [[means|significa]] ____.',
    options: [
      '[[Organise and use their time effectively|Organizar y usar su tiempo de forma efectiva]]',
      '[[Waste their time|Perder su tiempo]]',
      '[[Save time|Ahorrar tiempo]]',
    ],
    correctAnswer: 0,
    explanation:
      '"Manage their time" significa gestionar u organizar su tiempo.',
  },
  {
    question:
      '[[What|Qué]] [[advantage|ventaja]] [[does cloud storage give|da el almacenamiento en la nube]]?',
    options: [
      '[[Information can be accessed from any device|La información puede ser accedida desde cualquier dispositivo]]',
      '[[It is free|Es gratis]]',
      '[[It is faster|Es más rápido]]',
    ],
    correctAnswer: 0,
    explanation:
      'El texto dice que "your information can be accessed from any device".',
  },
];

export const UNIT_16_LESSON_4_LISTENING: Exercise[] = QUESTIONS.map((q, i) => ({
  id: `b2-u16-l4-l${i + 1}`,
  type: 'listening',
  level: 'B2',
  topic: 'Technology',
  difficulty: 'medium',
  transcript: LISTENING_TRANSCRIPT,
  content: { title: LESSON_TITLE, instructions: INSTRUCTIONS, questions: [q] },
  topicName: 'Listening',
}));
