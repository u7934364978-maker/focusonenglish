/**
 * Unidad 17 B2 — Lección 3: Comprensión lectora (Science)
 * 18 actividades (B2: más vocabulario y complejidad que B1)
 */

import { Exercise } from '@/lib/exercise-generator';

const LESSON_TITLE = '[[Reading|Comprensión lectora]]';
const READING_TRANSCRIPT = `[[Last year|El año pasado]], [[a team of researchers|un equipo de investigadores]] [[at the University of Cambridge|de la Universidad de Cambridge]] [[announced|anunció]] [[a major breakthrough|un gran avance]] [[in the field of|en el campo de]] [[renewable energy|energía renovable]]. [[The experiment|El experimento]], [[which|que]] [[had been conducted|había sido llevado a cabo]] [[over five years|durante cinco años]], [[showed|mostró]] [[that|que]] [[solar cells|las células solares]] [[could be made|podían fabricarse]] [[more efficient|más eficientes]] [[using|usando]] [[a new type of|un nuevo tipo de]] [[material|material]]. [[All samples|Todas las muestras]] [[must be tested|deben ser probadas]] [[before|antes de]] [[they can be used|poder usarse]] [[in commercial products|en productos comerciales]] [[according to|según]] [[safety protocols|los protocolos de seguridad]]. [[The findings|Los hallazgos]] [[should have been published|deberían haberse publicado]] [[earlier|antes]] [[according to|según]] [[some critics|algunos críticos]], [[who|que]] [[argued|argumentaron]] [[that|que]] [[the delay|el retraso]] [[had cost|había costado]] [[the industry|a la industria]] [[valuable time|tiempo valioso]]. [[The laboratory|El laboratorio]] [[has|había]] [[its equipment|su equipo]] [[calibrated|calibrado]] [[regularly|regularmente]] [[to ensure|para asegurar]] [[accurate results|resultados precisos]]. [[The hypothesis|La hipótesis]] [[that|que]] [[had been proposed|había sido propuesta]] [[by|por]] [[the lead scientist|el científico principal]] [[could have been verified|podría haberse verificado]] [[years ago|hace años]] [[if|si]] [[funding|la financiación]] [[had been available|hubiera estado disponible]]. [[Peer-reviewed research|La investigación revisada por pares]] [[remains|sigue siendo]] [[essential|esencial]] [[for|para]] [[scientific progress|el progreso científico]].`;

const INSTRUCTIONS =
  'Lee el texto sobre un avance científico. Después responde las preguntas.';

const QUESTIONS = [
  {
    question:
      '[[What|Qué]] [[did the Cambridge team announce|anunció el equipo de Cambridge]]?',
    options: [
      '[[A major breakthrough in renewable energy|Un gran avance en energía renovable]]',
      '[[A new type of battery|Un nuevo tipo de batería]]',
      '[[A new laboratory|Un nuevo laboratorio]]',
    ],
    correctAnswer: 0,
    explanation:
      'El texto dice que anunciaron "a major breakthrough in the field of renewable energy".',
  },
  {
    question:
      '[[How long|Cuánto tiempo]] [[had the experiment been conducted|había durado el experimento]]?',
    options: [
      '[[Over five years|Durante más de cinco años]]',
      '[[Two years|Dos años]]',
      '[[One year|Un año]]',
    ],
    correctAnswer: 0,
    explanation:
      'Se menciona que el experimento "had been conducted over five years".',
  },
  {
    question:
      '[[What|Qué]] [[did the experiment show|mostró el experimento]]?',
    options: [
      '[[Solar cells could be made more efficient using a new material|Las células solares podían hacerse más eficientes con un nuevo material]]',
      '[[Solar cells are too expensive|Las células solares son más caras]]',
      '[[Solar energy is obsolete|La energía solar está obsoleta]]',
    ],
    correctAnswer: 0,
    explanation:
      'El texto indica que "solar cells could be made more efficient using a new type of material".',
  },
  {
    question:
      '[[According to the text|Según el texto]], [[what|qué]] [[must happen to samples|debe pasar con las muestras]] [[before they can be used|antes de poder usarse]]?',
    options: [
      '[[They must be tested|Deben ser probadas]]',
      '[[They must be published|Deben ser publicadas]]',
      '[[They must be sold|Deben ser vendidas]]',
    ],
    correctAnswer: 0,
    explanation:
      'El texto dice que "All samples must be tested before they can be used in commercial products".',
  },
  {
    question:
      '[[What|Qué]] [[did some critics say|dijeron algunos críticos]]?',
    options: [
      '[[The findings should have been published earlier|Los hallazgos deberían haberse publicado antes]]',
      '[[The research was too expensive|La investigación era demasiado cara]]',
      '[[The team was wrong|El equipo estaba equivocado]]',
    ],
    correctAnswer: 0,
    explanation:
      'Los críticos "argued that the findings should have been published earlier".',
  },
  {
    question:
      '[[What|Qué]] [[does the laboratory do regularly|hace el laboratorio regularmente]]?',
    options: [
      '[[Has its equipment calibrated|Hace calibrar su equipo]]',
      '[[Publishes results|Publica resultados]]',
      '[[Hires new scientists|Contrata nuevos científicos]]',
    ],
    correctAnswer: 0,
    explanation:
      'El texto dice que "The laboratory has its equipment calibrated regularly".',
  },
  {
    question:
      '[[The text states|El texto afirma]] [[that|que]] [[the hypothesis could have been verified years ago if funding had been available|la hipótesis podría haberse verificado hace años si hubiera habido financiación]].',
    options: ['[[True|Verdadero]]', '[[False|Falso]]'],
    correctAnswer: 'True',
    explanation:
      'Verdadero: se dice que "could have been verified years ago if funding had been available".',
  },
  {
    question:
      '[[What|Qué]] [[grammar structure|estructura gramatical]] [[is used|se usa]] [[in|en]] "All samples must be tested"?',
    options: [
      '[[Modal passive (must be + past participle)|Pasiva modal (must be + participio)]]',
      '[[Have something done|Have something done]]',
      '[[Past perfect|Pasado perfecto]]',
    ],
    correctAnswer: 0,
    explanation:
      'Es modal passive: "must be tested" = deben ser probadas.',
  },
  {
    question:
      '[[Which grammar structure|Qué estructura gramatical]] [[appears|aparece]] [[in|en]] "The findings should have been published earlier"?',
    options: [
      '[[Modal passive in past (should have been + past participle)|Pasiva modal en pasado (should have been + participio)]]',
      '[[Present simple passive|Pasiva simple presente]]',
      '[[Have something done|Have something done]]',
    ],
    correctAnswer: 0,
    explanation:
      'Modal passive en pasado: crítica sobre algo que debió hacerse antes.',
  },
  {
    question:
      '[[What|Cuál]] [[is|es]] [[the main idea|la idea principal]] [[of the text|del texto]]?',
    options: [
      '[[A scientific breakthrough in solar energy was announced; protocols and peer review are essential|Se anunció un avance científico en energía solar; los protocolos y la revisión por pares son esenciales]]',
      '[[Cambridge is the best university|Cambridge es la mejor universidad]]',
      '[[Solar energy is dangerous|La energía solar es peligrosa]]',
    ],
    correctAnswer: 0,
    explanation:
      'El texto describe un avance y enfatiza protocolos y revisión por pares.',
  },
  {
    question:
      '[[Which phrase|Qué frase]] [[expresses|expresa]] [[have something done|have something done]]?',
    options: [
      '[[has its equipment calibrated|hace calibrar su equipo]]',
      '[[must be tested|deben ser probadas]]',
      '[[had been conducted|había sido llevado a cabo]]',
    ],
    correctAnswer: 0,
    explanation:
      '"Has its equipment calibrated" = hace que alguien calibre su equipo.',
  },
  {
    question:
      '[[The text implies|El texto implica]] [[that|que]] [[peer-reviewed research is essential for scientific progress|la investigación revisada por pares es esencial para el progreso científico]].',
    options: ['[[True|Verdadero]]', '[[False|Falso]]'],
    correctAnswer: 'True',
    explanation:
      'Verdadero: se dice que "Peer-reviewed research remains essential for scientific progress".',
  },
  {
    question:
      '[[What|Qué]] [[vocabulary|vocabulario]] [[is key|es clave]] [[in this text|en este texto]]?',
    options: [
      '[[breakthrough, hypothesis, samples, calibrated, peer-reviewed|breakthrough, hypothesis, samples, calibrated, peer-reviewed]]',
      '[[business, merger, profit|business, merger, profit]]',
      '[[food, recipe, ingredients|food, recipe, ingredients]]',
    ],
    correctAnswer: 0,
    explanation:
      'El campo semántico es científico: breakthrough, hypothesis, samples, etc.',
  },
  {
    question:
      '[[What|Qué]] [[detail|detalle]] [[supports|apoya]] [[the idea that the research was rigorous|la idea de que la investigación fue rigurosa]]?',
    options: [
      '[[Equipment calibrated regularly, samples must be tested, peer-reviewed research|Equipo calibrado regularmente, muestras deben probarse, investigación revisada por pares]]',
      '[[The team was large|El equipo era grande]]',
      '[[It took five years|Duró cinco años]]',
    ],
    correctAnswer: 0,
    explanation:
      'Varios detalles apoyan el rigor: calibración, pruebas obligatorias, revisión por pares.',
  },
  {
    question:
      '[[The delay in publishing|El retraso en publicar]] [[according to critics|según los críticos]] ____.',
    options: [
      '[[Had cost the industry valuable time|Había costado a la industria tiempo valioso]]',
      '[[Was necessary|Era necesario]]',
      '[[Improved the results|Mejoró los resultados]]',
    ],
    correctAnswer: 0,
    explanation:
      'Los críticos "argued that the delay had cost the industry valuable time".',
  },
  {
    question:
      '[[How|Cómo]] [[can the hypothesis|puede la hipótesis]] [[be verified|ser verificada]] [[according to the text|según el texto]]?',
    options: [
      '[[With funding and research|Con financiación e investigación]]',
      '[[By publishing quickly|Publicando rápido]]',
      '[[By ignoring critics|Ignorando a los críticos]]',
    ],
    correctAnswer: 0,
    explanation:
      'El texto sugiere que "could have been verified years ago if funding had been available".',
  },
  {
    question:
      '[[The text mentions|El texto menciona]] [[that|que]] [[solar cells|las células solares]] ____.',
    options: [
      '[[Could be made more efficient|Podían hacerse más eficientes]]',
      '[[Are already perfect|Ya son perfectas]]',
      '[[Will never improve|Nunca mejorarán]]',
    ],
    correctAnswer: 0,
    explanation:
      'El experimento mostró que "solar cells could be made more efficient".',
  },
  {
    question:
      '[[What|Qué]] [[purpose|propósito]] [[does the text serve|sirve el texto]]?',
    options: [
      '[[To inform about a scientific breakthrough and its context|Informar sobre un avance científico y su contexto]]',
      '[[To advertise a product|Anunciar un producto]]',
      '[[To criticise scientists|Criticar a los científicos]]',
    ],
    correctAnswer: 0,
    explanation:
      'El texto informa sobre el avance y su contexto (protocolos, críticas, revisión).',
  },
];

export const UNIT_17_LESSON_3_READING: Exercise[] = QUESTIONS.map((q, i) => ({
  id: `b2-u17-l3-r${i + 1}`,
  type: 'reading',
  level: 'B2',
  topic: 'Science',
  difficulty: 'medium',
  transcript: READING_TRANSCRIPT,
  content: { title: LESSON_TITLE, instructions: INSTRUCTIONS, questions: [q] },
  topicName: 'Reading',
}));
