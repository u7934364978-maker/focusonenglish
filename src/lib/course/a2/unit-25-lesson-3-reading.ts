/**
 * Unidad 25 — Lección 3: Comprensión lectora (Future Contrast)
 * 15 actividades: 1 texto + 15 preguntas
 */

import { Exercise } from '@/lib/exercise-generator';

const LESSON_TITLE = '[[Reading|Comprensión lectora]]';
const READING_TRANSCRIPT = `[[Next|El próximo]] [[week|semana]] [[I|yo]] [[am flying|vuelo]] [[to|a]] [[London|Londres]] — [[that|eso]] [[is|está]] [[already|ya]] [[arranged|organizado]]. [[When|Cuando]] [[I|yo]] [[arrive|llegue]], [[I|yo]] [[will|voy a]] [[call|llamar]] [[you|te]] [[and|y]] [[we|nosotros]] [[will|vamos a]] [[meet|quedarnos]]. [[I|Yo]] [[am going to|voy a]] [[visit|visitar]] [[the|el]] [[British Museum|Museo Británico]] — [[I|yo]] [[have|tengo]] [[already|ya]] [[bought|comprado]] [[the|la]] [[ticket|entrada]]. [[Maybe|Quizás]] [[I|yo]] [[will|voy a]] [[see|ver]] [[a|una]] [[show|obra]] [[in|en]] [[the|el]] [[West End|West End]] [[too|tambien]]. [[On|El]] [[Saturday|sábado]] [[I|yo]] [[am having|tengo]] [[dinner|cena]] [[with|con]] [[my|mi]] [[cousin|primo]] — [[we|nosotros]] [[booked|reservamos]] [[the|el]] [[restaurant|restaurante]] [[last week|la semana pasada]]. [[I|Yo]] [[think|creo]] [[the|el]] [[trip|viaje]] [[will|será]] [[be|ser]] [[great|genial]]!`;

const INSTRUCTIONS = 'Lee el texto de abajo. Después responde las preguntas.';

const QUESTIONS = [
  {
    question: '[[Where|Dónde]] [[is|está]] [[the|el]] [[writer|autor]] [[flying|volando]] [[to|a]]?',
    options: ['[[Paris|París]]', '[[London|Londres]]', '[[Berlin|Berlín]]', '[[Madrid|Madrid]]'],
    correctAnswer: 1,
    explanation: '[[The|El]] [[text|texto]] [[says|dice]] "[[I am flying to London|Vuelo a Londres]]".',
  },
  {
    question: '[[What|Qué]] [[will|va a]] [[the|el]] [[writer|autor]] [[do|hacer]] [[when|cuando]] [[he|él]] [[arrives|llegue]]?',
    options: ['[[rest|descansar]]', '[[call|llamar]] [[and|y]] [[meet|quedar]] [[with|con]] [[friend|amigo]]', '[[work|trabajar]]', '[[sleep|dormir]]'],
    correctAnswer: 1,
    explanation: '[[He|Él]] [[says|dice]] "[[When I arrive I will call you and we will meet|Cuando llegue te llamaré y quedaremos]]".',
  },
  {
    question: '[[What|Qué]] [[is|está]] [[the|el]] [[writer|autor]] [[going to|va a]] [[visit|visitar]]?',
    options: ['[[the|el]] [[Tower|Torre]] [[of|de]] [[London|Londres]]', '[[the|el]] [[British Museum|Museo Británico]]', '[[Buckingham|Buckingham]] [[Palace|Palacio]]', '[[the|el]] [[London Eye|London Eye]]'],
    correctAnswer: 1,
    explanation: '[[The|El]] [[text|texto]] [[says|dice]] "[[I am going to visit the British Museum|Voy a visitar el Museo Británico]]".',
  },
  {
    question: '[[Has|Ha]] [[the|el]] [[writer|autor]] [[bought|comprado]] [[the|la]] [[ticket|entrada]] [[for|para]] [[the|el]] [[museum|museo]]?',
    options: ['[[No|No]]', '[[Yes|Sí]]', '[[Maybe|Quizás]]', '[[Not yet|Aún no]]'],
    correctAnswer: 1,
    explanation: '[[He|Él]] [[says|dice]] "[[I have already bought the ticket|Ya he comprado la entrada]]".',
  },
  {
    question: '[[What|Qué]] [[might|podría]] [[the|el]] [[writer|autor]] [[do|hacer]] [[in|en]] [[the|el]] [[West End|West End]]?',
    options: ['[[shop|comprar]]', '[[see|ver]] [[a|una]] [[show|obra]]', '[[eat|comer]]', '[[work|trabajar]]'],
    correctAnswer: 1,
    explanation: '[[He|Él]] [[says|dice]] "[[Maybe I will see a show in the West End|Quizás veré una obra en el West End]]".',
  },
  {
    question: '[[What|Qué]] [[is|está]] [[the|el]] [[writer|autor]] [[having|teniendo]] [[on|el]] [[Saturday|sábado]]?',
    options: ['[[lunch|almuerzo]]', '[[breakfast|desayuno]]', '[[dinner|cena]] [[with|con]] [[cousin|primo]]', '[[coffee|café]]'],
    correctAnswer: 2,
    explanation: '[[The|El]] [[text|texto]] [[says|dice]] "[[I am having dinner with my cousin|Ceno con mi primo]]".',
  },
  {
    question: '[[When|Cuándo]] [[did|hizo]] [[they|ellos]] [[book|reservar]] [[the|el]] [[restaurant|restaurante]]?',
    options: ['[[yesterday|ayer]]', '[[last week|la semana pasada]]', '[[today|hoy]]', '[[next week|la próxima semana]]'],
    correctAnswer: 1,
    explanation: '[[The|El]] [[text|texto]] [[says|dice]] "[[we booked the restaurant last week|reservamos el restaurante la semana pasada]]".',
  },
  {
    question: '[[The|El]] [[writer|autor]] [[is|está]] [[using|usando]] [[present|presente]] [[continuous|continuo]] [[for|para]] [[the|el]] [[flight|vuelo]].',
    options: ['[[True|Verdadero]]', '[[False|Falso]]'],
    correctAnswer: 'True',
    explanation: '[[True|Verdadero]]. [[He|Él]] [[says|dice]] "[[I am flying|Vuelo]]" — [[arranged|organizado]] [[plan|plan]].',
  },
  {
    question: '[[The|El]] [[writer|autor]] [[uses|usa]] [[will|will]] [[for|para]] [[spontaneous|espontáneas]] [[decisions|decisiones]].',
    options: ['[[True|Verdadero]]', '[[False|Falso]]'],
    correctAnswer: 'True',
    explanation: '[[True|Verdadero]]. "[[Maybe I will see a show|Quizás veré una obra]]" — [[spontaneous|espontánea]] [[decision|decisión]].',
  },
  {
    question: '[[The|El]] [[writer|autor]] [[is|está]] [[going to|va a]] [[visit|visitar]] [[the|el]] [[museum|museo]] [[because|porque]] [[he|él]] [[has|tiene]] [[a|un]] [[plan|plan]].',
    options: ['[[True|Verdadero]]', '[[False|Falso]]'],
    correctAnswer: 'True',
    explanation: '[[True|Verdadero]]. [[He|Él]] [[has|tiene]] [[already|ya]] [[bought|comprado]] [[the|la]] [[ticket|entrada]].',
  },
  {
    question: '[[The|El]] [[writer|autor]] [[has|ha]] [[not|no]] [[arranged|organizado]] [[dinner|cena]] [[with|con]] [[his|su]] [[cousin|primo]].',
    options: ['[[True|Verdadero]]', '[[False|Falso]]'],
    correctAnswer: 'False',
    explanation: '[[False|Falso]]. [[They|Ellos]] [[booked|reservaron]] [[the|el]] [[restaurant|restaurante]] [[last week|la semana pasada]].',
  },
  {
    question: '[[What|Cuál]] [[is|es]] [[the|el]] [[main|principal]] [[topic|tema]] [[of|del]] [[this|este]] [[text|texto]]?',
    options: ['[[Past|Viaje]] [[trip|pasado]]', '[[Future|Planes]] [[plans|futuros]] [[using|usando]] [[different|diferentes]] [[tenses|tiempos]]', '[[Weather|Tiempo]]', '[[Food|Comida]]'],
    correctAnswer: 1,
    explanation: '[[The|El]] [[text|texto]] [[contrasts|contrasta]] [[going to|voy a]], [[will|will]] [[and|y]] [[present|presente]] [[continuous|continuo]] [[for|para]] [[future|futuro]].',
  },
  {
    question: '[[Which|Cuál]] [[tense|tiempo]] [[is|es]] [[used|usado]] [[for|para]] [[the|el]] [[dinner|cena]] [[with|con]] [[cousin|primo]]?',
    options: ['[[will|will]]', '[[going to|going to]]', '[[Present|Presente]] [[continuous|continuo]]', '[[Past|Pasado]] [[simple|simple]]'],
    correctAnswer: 2,
    explanation: '[[Present|Presente]] [[continuous|continuo]]: "[[I am having dinner|Ceno]]" — [[fixed|fijo]] [[arrangement|compromiso]].',
  },
  {
    question: '[[Why|Por qué]] [[does|usa]] [[the|el]] [[writer|autor]] [[use|usar]] "[[Maybe|Quizás]]" [[with|con]] [[will|will]]?',
    options: ['[[certainty|certidumbre]]', '[[uncertainty|incertidumbre]]', '[[past|pasado]]', '[[obligation|obligación]]'],
    correctAnswer: 1,
    explanation: '[[Maybe|Quizás]] + [[will|will]] = [[uncertain|incierta]] [[or|o]] [[spontaneous|espontánea]] [[decision|decisión]].',
  },
  {
    question: '[[How many|Cuántas]] [[future|futuros]] [[forms|formas]] [[does|usa]] [[the|el]] [[writer|autor]] [[use|usar]]?',
    options: ['[[one|una]]', '[[two|dos]]', '[[three|tres]]', '[[four|cuatro]]'],
    correctAnswer: 2,
    explanation: '[[Present|Presente]] [[continuous|continuo]] ([[am flying|vuelo]], [[am having|tengo]]), [[will|will]] ([[will call|llamaré]]), [[going to|going to]] ([[am going to visit|voy a visitar]]).',
  },
];

export const UNIT_25_LESSON_3_READING: Exercise[] = QUESTIONS.map((q, i) => ({
  id: `a2-u25-l3-r${i + 1}`,
  type: 'reading',
  level: 'A2',
  topic: 'Future Contrast',
  difficulty: 'easy',
  transcript: READING_TRANSCRIPT,
  content: {
    title: LESSON_TITLE,
    instructions: INSTRUCTIONS,
    questions: [q],
  },
  topicName: 'Reading',
}));
