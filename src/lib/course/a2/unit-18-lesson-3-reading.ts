/**
 * Unidad 18 — Lección 3: Comprensión lectora (For & Since, time periods)
 * 15 actividades: 1 texto + 15 preguntas
 */

import { Exercise } from '@/lib/exercise-generator';

const LESSON_TITLE = '[[Reading|Comprensión lectora]]';
const READING_TRANSCRIPT = `[[My|Mi]] [[name|nombre]] [[is|es]] [[Emma|Emma]]. [[I|Yo]] [[have|he]] [[lived|vivido]] [[in|en]] [[London|Londres]] [[for|durante]] [[five years|cinco años]]. [[I|Yo]] [[have|he]] [[worked|trabajado]] [[at|en]] [[the|la]] [[same|misma]] [[company|empresa]] [[since|desde]] [[2020|2020]]. [[I|Yo]] [[have|he]] [[known|conocido]] [[my|mi]] [[best|mejor]] [[friend|amiga]] [[Sara|Sara]] [[for|durante]] [[ten years|diez años]]. [[We|Nosotros]] [[met|conocimos]] [[when|cuando]] [[we|nosotros]] [[were|éramos]] [[at|en]] [[university|universidad]]. [[I|Yo]] [[have|he]] [[had|tenido]] [[my|mi]] [[dog|perro]] [[Max|Max]] [[since|desde]] [[last|el]] [[Christmas|Navidad]]. [[He|Él]] [[is|es]] [[very|muy]] [[friendly|amigable]]. [[I|Yo]] [[have|he]] [[been|estado]] [[learning|aprendiendo]] [[Spanish|español]] [[for|durante]] [[six months|seis meses]]. [[I|Yo]] [[have|he]] [[loved|amado]] [[travelling|viajar]] [[since|desde]] [[I|yo]] [[was|era]] [[a|una]] [[child|niña]]. [[I|Yo]] [[feel|me siento]] [[good|bien]] [[because|porque]] [[I|yo]] [[have|tengo]] [[a|una]] [[stable|estable]] [[life|vida]] [[with|con]] [[good|buenos]] [[friends|amigos]].`;

const INSTRUCTIONS = 'Lee el texto de abajo. Después responde las preguntas.';

const QUESTIONS = [
  {
    question: '[[What|Cuál]] [[is|es]] [[her|su]] [[name|nombre]]?',
    options: ['[[Sara|Sara]]', '[[Emma|Emma]]', '[[Max|Max]]', '[[Anna|Anna]]'],
    correctAnswer: 1,
    explanation: '[[She|Ella]] [[says|dice]]: "[[My name is Emma|Mi nombre es Emma]]".',
  },
  {
    question: '[[How|Cuánto]] [[long|tiempo]] [[has|ha]] [[she|ella]] [[lived|vivido]] [[in|en]] [[London|Londres]]?',
    options: ['[[three years|tres años]]', '[[five years|cinco años]]', '[[ten years|diez años]]', '[[six months|seis meses]]'],
    correctAnswer: 1,
    explanation: '[[She|Ella]] [[says|dice]] "[[I have lived in London for five years|He vivido en Londres durante cinco años]]".',
  },
  {
    question: '[[Since|Desde]] [[when|cuándo]] [[has|ha]] [[she|ella]] [[worked|trabajado]] [[at|en]] [[the|la]] [[same|misma]] [[company|empresa]]?',
    options: ['[[2019|2019]]', '[[2020|2020]]', '[[2021|2021]]', '[[2018|2018]]'],
    correctAnswer: 1,
    explanation: '[[She|Ella]] [[says|dice]] "[[I have worked at the same company since 2020|He trabajado en la misma empresa desde 2020]]".',
  },
  {
    question: '[[How|Cuánto]] [[long|tiempo]] [[has|ha]] [[she|ella]] [[known|conocido]] [[Sara|Sara]]?',
    options: ['[[five years|cinco años]]', '[[ten years|diez años]]', '[[six months|seis meses]]', '[[two years|dos años]]'],
    correctAnswer: 1,
    explanation: '[[She|Ella]] [[says|dice]] "[[I have known my best friend Sara for ten years|He conocido a mi mejor amiga Sara durante diez años]]".',
  },
  {
    question: '[[When|Cuándo]] [[did|conocieron]] [[they|ellos]] [[meet|conocerse]]?',
    options: ['[[at|en]] [[school|escuela]]', '[[at|en]] [[university|universidad]]', '[[at|en]] [[work|trabajo]]', '[[at|en]] [[a|un]] [[party|fiesta]]'],
    correctAnswer: 1,
    explanation: '[[She|Ella]] [[says|dice]] "[[We met when we were at university|Nos conocimos cuando estábamos en la universidad]]".',
  },
  {
    question: '[[Since|Desde]] [[when|cuándo]] [[has|ha]] [[she|ella]] [[had|tenido]] [[her|su]] [[dog|perro]] [[Max|Max]]?',
    options: ['[[last|el]] [[summer|verano]]', '[[last|el]] [[Christmas|Navidad]]', '[[last|el]] [[year|año]]', '[[last|la]] [[month|mes]]'],
    correctAnswer: 1,
    explanation: '[[She|Ella]] [[says|dice]] "[[I have had my dog Max since last Christmas|He tenido a mi perro Max desde la Navidad pasada]]".',
  },
  {
    question: '[[How|Cuánto]] [[long|tiempo]] [[has|ha]] [[she|ella]] [[been|estado]] [[learning|aprendiendo]] [[Spanish|español]]?',
    options: ['[[three months|tres meses]]', '[[six months|seis meses]]', '[[one year|un año]]', '[[two years|dos años]]'],
    correctAnswer: 1,
    explanation: '[[She|Ella]] [[says|dice]] "[[I have been learning Spanish for six months|He estado aprendiendo español durante seis meses]]".',
  },
  {
    question: '[[Emma|Emma]] [[has|ha]] [[lived|vivido]] [[in|en]] [[London|Londres]] [[for|durante]] [[ten years|diez años]].',
    options: ['[[True|Verdadero]]', '[[False|Falso]]'],
    correctAnswer: 'False',
    explanation: '[[False|Falso]]. [[She|Ella]] [[has|ha]] [[lived|vivido]] [[there|allí]] [[for|durante]] [[five years|cinco años]].',
  },
  {
    question: '[[Emma|Emma]] [[has|ha]] [[worked|trabajado]] [[at|en]] [[the|la]] [[same|misma]] [[company|empresa]] [[since|desde]] [[2020|2020]].',
    options: ['[[True|Verdadero]]', '[[False|Falso]]'],
    correctAnswer: 'True',
    explanation: '[[True|Verdadero]]. [[She|Ella]] [[says|dice]] "[[I have worked at the same company since 2020|He trabajado en la misma empresa desde 2020]]".',
  },
  {
    question: '[[Emma|Emma]] [[has|ha]] [[loved|amado]] [[travelling|viajar]] [[since|desde]] [[she|ella]] [[was|era]] [[a|una]] [[child|niña]].',
    options: ['[[True|Verdadero]]', '[[False|Falso]]'],
    correctAnswer: 'True',
    explanation: '[[True|Verdadero]]. [[She|Ella]] [[says|dice]] "[[I have loved travelling since I was a child|He amado viajar desde que era niña]]".',
  },
  {
    question: '[[Emma|Emma]] [[has|ha]] [[been|estado]] [[learning|aprendiendo]] [[French|francés]] [[for|durante]] [[six months|seis meses]].',
    options: ['[[True|Verdadero]]', '[[False|Falso]]'],
    correctAnswer: 'False',
    explanation: '[[False|Falso]]. [[She|Ella]] [[has|ha]] [[been|estado]] [[learning|aprendiendo]] [[Spanish|español]], [[not|no]] [[French|francés]].',
  },
  {
    question: '[[What|Cuál]] [[is|es]] [[the|el]] [[main|principal]] [[topic|tema]] [[of|del]] [[this|este]] [[text|texto]]?',
    options: ['[[A|Un]] [[trip|viaje]] [[to|a]] [[the|el]] [[beach|playa]]', '[[Emma\'s|Emma]] [[life|vida]] [[with|con]] [[for|durante]] [[and|y]] [[since|desde]] [[time periods|períodos de tiempo]]', '[[A|Una]] [[birthday|cumpleaños]] [[party|fiesta]]', '[[School|Escuela]] [[life|vida]]'],
    correctAnswer: 1,
    explanation: '[[The|El]] [[text|texto]] [[describes|describe]] [[Emma\'s|Emma]] [[life|vida]] [[using|usando]] [[for|durante]] [[and|y]] [[since|desde]].',
  },
  {
    question: '[[What|Qué]] [[word|palabra]] [[does|usa]] [[Emma|Emma]] [[use|usar]] [[for|para]] [[duration|duración]] [[of|de]] [[time|tiempo]]?',
    options: ['[[since|desde]]', '[[for|durante]]', '[[ago|hace]]', '[[during|durante]]'],
    correctAnswer: 1,
    explanation: '[[For|Durante]] + [[duration|duración]]: [[for five years|durante cinco años]], [[for ten years|durante diez años]].',
  },
  {
    question: '[[What|Qué]] [[word|palabra]] [[does|usa]] [[Emma|Emma]] [[use|usar]] [[for|para]] [[starting point|punto de inicio]]?',
    options: ['[[for|durante]]', '[[since|desde]]', '[[during|durante]]', '[[ago|hace]]'],
    correctAnswer: 1,
    explanation: '[[Since|Desde]] + [[starting point|punto de inicio]]: [[since 2020|desde 2020]], [[since last Christmas|desde la Navidad pasada]].',
  },
  {
    question: '[[How|Cómo]] [[does|se]] [[Emma|Emma]] [[feel|siente]]?',
    options: ['[[tired|cansada]]', '[[bad|mal]]', '[[good|bien]]', '[[angry|enfadada]]'],
    correctAnswer: 2,
    explanation: '[[She|Ella]] [[says|dice]] "[[I feel good because I have a stable life with good friends|Me siento bien porque tengo una vida estable con buenos amigos]]".',
  },
];

export const UNIT_18_LESSON_3_READING: Exercise[] = QUESTIONS.map((q, i) => ({
  id: `a2-u18-l3-r${i + 1}`,
  type: 'reading',
  level: 'A2',
  topic: 'For Since',
  difficulty: 'easy',
  transcript: READING_TRANSCRIPT,
  content: {
    title: LESSON_TITLE,
    instructions: INSTRUCTIONS,
    questions: [q],
  },
  topicName: 'Reading',
}));
