/**
 * Unidad 17 B2 — Lección 4: Comprensión auditiva (Science)
 * 18 actividades (B2: más vocabulario y complejidad que B1)
 */

import { Exercise } from '@/lib/exercise-generator';

const LESSON_TITLE = '[[Listening|Comprensión auditiva]]';
const LISTENING_TRANSCRIPT = `[[Hi|Hola]], [[I'm|soy]] [[Dr Sarah Mitchell|la Dra Sarah Mitchell]], [[a researcher|investigadora]] [[at|en]] [[a biomedical institute|un instituto biomédico]]. [[Today|Hoy]] [[I want to talk|quiero hablar]] [[about|sobre]] [[how| cómo]] [[we manage|gestionamos]] [[our laboratory|nuestro laboratorio]] [[and|y]] [[what|qué]] [[must be done|debe hacerse]] [[to ensure|para asegurar]] [[reliable results|resultados fiables]]. [[First|Primero]], [[all equipment|todo el equipo]] [[must be calibrated|debe ser calibrado]] [[regularly|regularmente]] [[because|porque]] [[even small errors|incluso pequeños errores]] [[can affect|pueden afectar]] [[our experiments|nuestros experimentos]]. [[We|Nosotros]] [[have|hacemos]] [[our instruments|nuestros instrumentos]] [[serviced|revisados]] [[by|por]] [[the manufacturer|el fabricante]] [[every six months|cada seis meses]]. [[Last year|El año pasado]] [[we|nosotros]] [[had|hicimos]] [[a problem|un problema]] [[with|con]] [[contaminated samples|muestras contaminadas]]. [[The samples|Las muestras]] [[should have been stored|deberían haberse almacenado]] [[in proper conditions|en condiciones adecuadas]] [[but|pero]] [[someone|alguien]] [[had left|había dejado]] [[the freezer door open|la puerta del congelador abierta]]. [[We|Nosotros]] [[had to|tuvimos que]] [[have|hacer]] [[all the data|todos los datos]] [[re analysed|reanalizados]] [[by|por]] [[an external lab|un laboratorio externo]]. [[The good news|La buena noticia]] [[is|es]] [[that|que]] [[our findings|nuestros hallazgos]] [[have been|han sido]] [[verified|verificados]] [[and|y]] [[will be published|serán publicados]] [[in a peer-reviewed journal|en una revista revisada por pares]] [[next month|el próximo mes]].`;

const INSTRUCTIONS =
  'Escucha el audio (o lee la transcripción). Después responde las preguntas de comprensión.';

const QUESTIONS = [
  {
    question: '[[Who is speaking in the audio|Quién habla en el audio]]?',
    options: [
      '[[Dr Sarah Mitchell, a researcher at a biomedical institute|La Dra Sarah Mitchell, investigadora en un instituto biomédico]]',
      '[[A laboratory technician|Un técnico de laboratorio]]',
      '[[A university student|Un estudiante universitario]]',
    ],
    correctAnswer: 0,
    explanation:
      'El hablante se presenta como "Dr Sarah Mitchell, a researcher at a biomedical institute".',
  },
  {
    question:
      '[[What|Qué]] [[must be done to equipment|debe hacerse con el equipo]]?',
    options: [
      '[[It must be calibrated regularly|Debe ser calibrado regularmente]]',
      '[[It must be replaced every year|Debe ser reemplazado cada año]]',
      '[[It must be sold|Debe ser vendido]]',
    ],
    correctAnswer: 0,
    explanation:
      'Dice que "all equipment must be calibrated regularly".',
  },
  {
    question:
      '[[How often|Con qué frecuencia]] [[do they have their instruments serviced|hacen revisar sus instrumentos]]?',
    options: [
      '[[Every six months|Cada seis meses]]',
      '[[Every year|Cada año]]',
      '[[Every month|Cada mes]]',
    ],
    correctAnswer: 0,
    explanation:
      'Menciona que "have our instruments serviced by the manufacturer every six months".',
  },
  {
    question:
      '[[What|Qué]] [[problem did they have last year|problema tuvieron el año pasado]]?',
    options: [
      '[[Contaminated samples|Muestras contaminadas]]',
      '[[Broken equipment|Equipo roto]]',
      '[[Lost data|Datos perdidos]]',
    ],
    correctAnswer: 0,
    explanation:
      'Dice que "we had a problem with contaminated samples".',
  },
  {
    question:
      '[[According to the speaker|Según el hablante]], [[what|qué]] [[should have been done with the samples|debería haberse hecho con las muestras]]?',
    options: [
      '[[They should have been stored in proper conditions|Deberían haberse almacenado en condiciones adecuadas]]',
      '[[They should have been thrown away|Deberían haberse tirado]]',
      '[[They should have been published|Deberían haberse publicado]]',
    ],
    correctAnswer: 0,
    explanation:
      'El hablante dice que "The samples should have been stored in proper conditions".',
  },
  {
    question:
      '[[What|Qué]] [[caused the contamination|causó la contaminación]]?',
    options: [
      '[[Someone left the freezer door open|Alguien dejó la puerta del congelador abierta]]',
      '[[The equipment was faulty|El equipo estaba defectuoso]]',
      '[[The lab was too hot|El laboratorio estaba demasiado caliente]]',
    ],
    correctAnswer: 0,
    explanation:
      'El texto dice que "someone had left the freezer door open".',
  },
  {
    question:
      '[[What|Qué]] [[did they have to do with the data|tuvieron que hacer con los datos]]?',
    options: [
      '[[Have it re analysed by an external lab|Hacer que un laboratorio externo los reanalizara]]',
      '[[Delete it|Eliminarlo]]',
      '[[Publish it immediately|Publicarlo inmediatamente]]',
    ],
    correctAnswer: 0,
    explanation:
      'Dice que "had to have all the data re analysed by an external lab".',
  },
  {
    question:
      '[[How|Cómo]] [[will the findings be published|se publicarán los hallazgos]]?',
    options: [
      '[[In a peer-reviewed journal next month|En una revista revisada por pares el próximo mes]]',
      '[[On a blog|En un blog]]',
      '[[In a newspaper|En un periódico]]',
    ],
    correctAnswer: 0,
    explanation:
      'El hablante dice que "will be published in a peer-reviewed journal next month".',
  },
  {
    question:
      '[[The speaker suggests|El hablante sugiere]] [[that|que]] [[calibration is essential for reliable results|la calibración es esencial para resultados fiables]].',
    options: ['[[True|Verdadero]]', '[[False|Falso]]'],
    correctAnswer: 'True',
    explanation:
      'Verdadero: dice que el equipo debe calibrarse porque "even small errors can affect our experiments".',
  },
  {
    question:
      '[[The audio implies|El audio implica]] [[that|que]] [[they had to repeat some work|tuvieron que repetir parte del trabajo]].',
    options: ['[[True|Verdadero]]', '[[False|Falso]]'],
    correctAnswer: 'True',
    explanation:
      'Verdadero: tuvieron que hacer reanalizar los datos por un laboratorio externo tras la contaminación.',
  },
  {
    question:
      '[[What|Cuál]] [[is|es]] [[the main idea|la idea principal]] [[of the listening|de la escucha]]?',
    options: [
      '[[How a lab ensures reliable results through calibration, servicing and proper protocols; a contamination incident was resolved|Cómo un laboratorio asegura resultados fiables mediante calibración, servicio y protocolos; un incidente de contaminación fue resuelto]]',
      '[[Laboratories are expensive|Los laboratorios son caros]]',
      '[[Scientists should work alone|Los científicos deben trabajar solos]]',
    ],
    correctAnswer: 0,
    explanation:
      'La idea central es la gestión del laboratorio y los protocolos para resultados fiables.',
  },
  {
    question:
      '[[Which grammar structure|Qué estructura gramatical]] [[does the speaker use|usa el hablante]] [[when saying|al decir]] "all equipment must be calibrated"?',
    options: [
      '[[Modal passive (must be + past participle)|Pasiva modal (must be + participio)]]',
      '[[Have something done|Have something done]]',
      '[[Past perfect|Pasado perfecto]]',
    ],
    correctAnswer: 0,
    explanation:
      'Es modal passive: "must be calibrated" = debe ser calibrado.',
  },
  {
    question:
      '[[Which phrase|Qué frase]] [[expresses|expresa]] [[have something done|have something done]]?',
    options: [
      '[[have our instruments serviced|hacen revisar sus instrumentos]]',
      '[[must be calibrated|debe ser calibrado]]',
      '[[had left the door open|había dejado la puerta abierta]]',
    ],
    correctAnswer: 0,
    explanation:
      '"Have our instruments serviced" = hacer que alguien revise los instrumentos.',
  },
  {
    question:
      '[[What|Qué]] [[vocabulary set|conjunto de vocabulario]] [[is central|es central]] [[in this listening|en esta escucha]]?',
    options: [
      '[[calibration, equipment, samples, contamination, peer-reviewed|calibration, equipment, samples, contamination, peer-reviewed]]',
      '[[business, merger, profit|business, merger, profit]]',
      '[[food, recipe, ingredients|food, recipe, ingredients]]',
    ],
    correctAnswer: 0,
    explanation:
      'Todo el audio gira en torno a vocabulario de laboratorio y ciencia.',
  },
  {
    question:
      '[[According to the speaker|Según el hablante]], [[why|por qué]] [[might small errors affect experiments|por qué los pequeños errores pueden afectar los experimentos]]?',
    options: [
      '[[Because equipment must be calibrated|Porque el equipo debe ser calibrado]]',
      '[[Because scientists are careless|Porque los científicos son descuidados]]',
      '[[Because labs are too cold|Porque los laboratorios están demasiado fríos]]',
    ],
    correctAnswer: 0,
    explanation:
      'El hablante explica que el equipo debe calibrarse porque "even small errors can affect our experiments".',
  },
  {
    question:
      '[[The phrase|La frase]] [["have something re analysed"|"have something re analysed"]] [[means|significa]] ____.',
    options: [
      '[[Arrange for someone else to analyse it again|Organizar que alguien más lo analice de nuevo]]',
      '[[Analyse it yourself|Analizarlo tú mismo]]',
      '[[Throw it away|Tirarlo]]',
    ],
    correctAnswer: 0,
    explanation:
      'Have something done: hacer que un laboratorio externo reanalice los datos.',
  },
  {
    question:
      '[[What|Qué]] [[detail|detalle]] [[supports|apoya]] [[the idea that the problem was resolved|la idea de que el problema se resolvió]]?',
    options: [
      '[[The findings have been verified and will be published|Los hallazgos han sido verificados y serán publicados]]',
      '[[They fired someone|Despidieron a alguien]]',
      '[[They closed the lab|Cerraron el laboratorio]]',
    ],
    correctAnswer: 0,
    explanation:
      'La buena noticia es que "our findings have been verified and will be published".',
  },
  {
    question:
      '[[The modal passive|La pasiva modal]] [["should have been stored"|"should have been stored"]] [[expresses|expresa]] ____.',
    options: [
      '[[Criticism about something that was not done correctly|Crítica sobre algo que no se hizo correctamente]]',
      '[[A future obligation|Una obligación futura]]',
      '[[A possibility|Una posibilidad]]',
    ],
    correctAnswer: 0,
    explanation:
      '"Should have been stored" = deberían haberse almacenado (crítica sobre el pasado).',
  },
];

export const UNIT_17_LESSON_4_LISTENING: Exercise[] = QUESTIONS.map((q, i) => ({
  id: `b2-u17-l4-l${i + 1}`,
  type: 'listening',
  level: 'B2',
  topic: 'Science',
  difficulty: 'medium',
  transcript: LISTENING_TRANSCRIPT,
  content: { title: LESSON_TITLE, instructions: INSTRUCTIONS, questions: [q] },
  topicName: 'Listening',
}));
