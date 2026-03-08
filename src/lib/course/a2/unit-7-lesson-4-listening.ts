/**
 * Unidad 7 — Lección 4: Comprensión auditiva (Adverbios de modo)
 * 15 actividades: 1 transcripción + 15 preguntas
 */

import { Exercise } from '@/lib/exercise-generator';

const LESSON_TITLE = '[[Listening|Comprensión auditiva]]';
const LISTENING_TRANSCRIPT = `[[Hi|Hola]]! [[Yesterday|Ayer]] [[I|yo]] [[went|fui]] [[to|a]] [[a|una]] [[dance|baile]] [[class|clase]]. [[The|El]] [[teacher|profesor]] [[moved|se movía]] [[very|muy]] [[quickly|rápidamente]] [[and|y]] [[we|nosotros]] [[had to|tuvimos que]] [[follow|seguir]] [[him|a él]]. [[At|Al]] [[first|principio]] [[I|yo]] [[danced|bailé]] [[badly|mal]] [[because|porque]] [[I|yo]] [[couldn\'t|no podía]] [[remember|recordar]] [[the|los]] [[steps|pasos]]. [[But|Pero]] [[the|el]] [[teacher|profesor]] [[explained|explicó]] [[everything|todo]] [[slowly|lenamente]] [[and|y]] [[patiently|con paciencia]]. [[Then|Después]] [[I|yo]] [[practised|practiqué]] [[carefully|cuidadosamente]] [[and|y]] [[by|al]] [[the|el]] [[end|final]] [[I|yo]] [[danced|bailé]] [[well|bien]]! [[My|Mi]] [[friend|amigo]] [[sang|cantó]] [[beautifully|hermosamente]] [[at|en]] [[the|el]] [[karaoke|karaoke]] [[after|después]]. [[We|Nosotros]] [[had|tuvimos]] [[a|una]] [[great|genial]] [[time|tiempo]]!`;

const INSTRUCTIONS = 'Escucha el audio de abajo. Puedes leer la transcripción después de escuchar. Después responde las preguntas.';

const QUESTIONS = [
  {
    question: '[[Where|Dónde]] [[did|fue]] [[the|el]] [[person|persona]] [[go|ir]] [[yesterday|ayer]]?',
    options: ['[[to|a]] [[a|una]] [[dance|baile]] [[class|clase]]', '[[to|a]] [[the|el]] [[cinema|cine]]', '[[to|a]] [[school|colegio]]', '[[to|a]] [[the|el]] [[gym|gimnasio]]'],
    correctAnswer: 0,
    explanation: '[[He|Él]] [[says|dice]] "[[Yesterday I went to a dance class|Ayer fui a una clase de baile]]".',
  },
  {
    question: '[[How|Cómo]] [[did|se movía]] [[the|el]] [[teacher|profesor]] [[move|moverse]]?',
    options: ['[[slowly|lenamente]]', '[[very|muy]] [[quickly|rápidamente]]', '[[carefully|cuidadosamente]]', '[[quietly|tranquilamente]]'],
    correctAnswer: 1,
    explanation: '[[He|Él]] [[says|dice]] "[[The teacher moved very quickly|El profesor se movía muy rápidamente]]".',
  },
  {
    question: '[[How|Cómo]] [[did|bailó]] [[he|él]] [[dance|bailar]] [[at|al]] [[first|principio]]?',
    options: ['[[well|bien]]', '[[beautifully|hermosamente]]', '[[badly|mal]] [[because|porque]] [[he|él]] [[couldn\'t|no podía]] [[remember|recordar]] [[the|los]] [[steps|pasos]]', '[[quickly|rápidamente]]'],
    correctAnswer: 2,
    explanation: '[[He|Él]] [[says|dice]] "[[At first I danced badly because I couldn\'t remember the steps|Al principio bailé mal porque no podía recordar los pasos]]".',
  },
  {
    question: '[[How|Cómo]] [[did|explicó]] [[the|el]] [[teacher|profesor]] [[explain|explicar]]?',
    options: ['[[quickly|rápidamente]]', '[[slowly|lenamente]] [[and|y]] [[patiently|con paciencia]]', '[[loudly|en voz alta]]', '[[badly|mal]]'],
    correctAnswer: 1,
    explanation: '[[He|Él]] [[says|dice]] "[[The teacher explained everything slowly and patiently|El profesor explicó todo lentamente y con paciencia]]".',
  },
  {
    question: '[[How|Cómo]] [[did|practicó]] [[he|él]] [[practise|practicar]]?',
    options: ['[[quickly|rápidamente]]', '[[carefully|cuidadosamente]]', '[[badly|mal]]', '[[loudly|en voz alta]]'],
    correctAnswer: 1,
    explanation: '[[He|Él]] [[says|dice]] "[[Then I practised carefully|Después practiqué cuidadosamente]]".',
  },
  {
    question: '[[How|Cómo]] [[did|bailó]] [[he|él]] [[dance|bailar]] [[by|al]] [[the|el]] [[end|final]]?',
    options: ['[[badly|mal]]', '[[well|bien]]', '[[slowly|lenamente]]', '[[quickly|rápidamente]]'],
    correctAnswer: 1,
    explanation: '[[He|Él]] [[says|dice]] "[[By the end I danced well|Al final bailé bien]]".',
  },
  {
    question: '[[What|Qué]] [[did|hizo]] [[his|su]] [[friend|amigo]] [[do|hacer]] [[after|después]]?',
    options: ['[[danced|bailó]]', '[[sang|cantó]] [[beautifully|hermosamente]] [[at|en]] [[the|el]] [[karaoke|karaoke]]', '[[went|fue]] [[home|casa]]', '[[ate|comió]] [[dinner|cena]]'],
    correctAnswer: 1,
    explanation: '[[He|Él]] [[says|dice]] "[[My friend sang beautifully at the karaoke after|Mi amigo cantó hermosamente en el karaoke después]]".',
  },
  {
    question: '[[He|Él]] [[danced|bailó]] [[well|bien]] [[from|desde]] [[the|el]] [[beginning|principio]].',
    options: ['[[True|Verdadero]]', '[[False|Falso]]'],
    correctAnswer: 'False',
    explanation: '[[False|Falso]]. [[At|Al]] [[first|principio]] [[he|él]] [[danced|bailó]] [[badly|mal]]. [[By|Al]] [[the|el]] [[end|final]] [[he|él]] [[danced|bailó]] [[well|bien]].',
  },
  {
    question: '[[The|El]] [[teacher|profesor]] [[explained|explicó]] [[slowly|lenamente]].',
    options: ['[[True|Verdadero]]', '[[False|Falso]]'],
    correctAnswer: 'True',
    explanation: '[[True|Verdadero]]. [[He|Él]] [[says|dice]] "[[The teacher explained everything slowly and patiently|El profesor explicó todo lentamente y con paciencia]]".',
  },
  {
    question: '[[They|Ellos]] [[had|tuvieron]] [[a|una]] [[bad|mal]] [[time|tiempo]].',
    options: ['[[True|Verdadero]]', '[[False|Falso]]'],
    correctAnswer: 'False',
    explanation: '[[False|Falso]]. [[They|Ellos]] [[had|tuvieron]] [[a|una]] [[great|genial]] [[time|tiempo]].',
  },
  {
    question: '[[What|Cuál]] [[is|es]] [[the|el]] [[main|principal]] [[topic|tema]] [[of|del]] [[this|este]] [[audio|audio]]?',
    options: ['[[A|Una]] [[dance|baile]] [[class|clase]] [[and|y]] [[adverbs of manner|adverbios de modo]]', '[[A|Un]] [[concert|concierto]]', '[[A|Una]] [[party|fiesta]]', '[[A|Un]] [[karaoke|karaoke]]'],
    correctAnswer: 0,
    explanation: '[[The|El]] [[audio|audio]] [[describes|describe]] [[a|una]] [[dance|baile]] [[class|clase]] [[using|usando]] [[adverbs of manner|adverbios de modo]].',
  },
  {
    question: '[[Which|Cuál]] [[adverb|adverbio]] [[does|usa]] [[the|el]] [[speaker|hablante]] [[use|usar]] [[for|para]] [[the|el]] [[teacher|profesor]] [[moving|moviéndose]]?',
    options: ['[[slowly|lenamente]]', '[[quickly|rápidamente]]', '[[carefully|cuidadosamente]]', '[[well|bien]]'],
    correctAnswer: 1,
    explanation: '[[He|Él]] [[says|dice]] "[[The teacher moved very quickly|El profesor se movía muy rápidamente]]".',
  },
  {
    question: '[[Why|Por qué]] [[did|bailó]] [[he|él]] [[dance|bailar]] [[badly|mal]] [[at|al]] [[first|principio]]?',
    options: ['[[because|porque]] [[he|él]] [[was|estaba]] [[tired|cansado]]', '[[because|porque]] [[he|él]] [[couldn\'t|no podía]] [[remember|recordar]] [[the|los]] [[steps|pasos]]', '[[because|porque]] [[the|el]] [[music|música]] [[was|era]] [[bad|mala]]', '[[He|Él]] [[doesn\'t|no]] [[say|dice]]'],
    correctAnswer: 1,
    explanation: '[[He|Él]] [[says|dice]] "[[because I couldn\'t remember the steps|porque no podía recordar los pasos]]".',
  },
  {
    question: '[[What|Qué]] [[does|significa]] "[[patiently|con paciencia]]" [[mean|significar]]?',
    options: ['[[quickly|rápidamente]]', '[[with|con]] [[patience|paciencia]]', '[[badly|mal]]', '[[loudly|en voz alta]]'],
    correctAnswer: 1,
    explanation: '[[Patiently|Con paciencia]] = [[with|con]] [[patience|paciencia]]. [[Adverb|Adverbio]] [[of|de]] [[manner|modo]].',
  },
  {
    question: '[[Where|Dónde]] [[did|cantó]] [[his|su]] [[friend|amigo]] [[sing|cantar]]?',
    options: ['[[at|en]] [[the|el]] [[dance|baile]] [[class|clase]]', '[[at|en]] [[the|el]] [[karaoke|karaoke]]', '[[at|en]] [[home|casa]]', '[[at|en]] [[a|un]] [[concert|concierto]]'],
    correctAnswer: 1,
    explanation: '[[He|Él]] [[says|dice]] "[[My friend sang beautifully at the karaoke after|Mi amigo cantó hermosamente en el karaoke después]]".',
  },
];

export const UNIT_7_LESSON_4_LISTENING: Exercise[] = QUESTIONS.map((q, i) => ({
  id: `a2-u7-l4-l${i + 1}`,
  type: 'listening',
  level: 'A2',
  topic: 'Adverbs of Manner',
  difficulty: 'easy',
  transcript: LISTENING_TRANSCRIPT,
  content: {
    title: LESSON_TITLE,
    instructions: INSTRUCTIONS,
    questions: [q],
  },
  topicName: 'Listening',
}));
