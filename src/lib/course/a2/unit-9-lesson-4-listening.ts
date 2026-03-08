/**
 * Unidad 9 — Lección 4: Comprensión auditiva (Preposiciones de lugar y movimiento)
 * 15 actividades: 1 transcripción + 15 preguntas
 */

import { Exercise } from '@/lib/exercise-generator';

const LESSON_TITLE = '[[Listening|Comprensión auditiva]]';
const LISTENING_TRANSCRIPT = `[[Hi|Hola]]! [[Last weekend|El fin de semana pasado]] [[I|yo]] [[went|fui]] [[to|a]] [[the|el]] [[museum|museo]]. [[I|yo]] [[went|entré]] [[into|en]] [[the|el]] [[main|principal]] [[entrance|entrada]] [[and|y]] [[walked|caminé]] [[through|a través de]] [[several|varias]] [[rooms|salas]]. [[First|Primero]] [[I|yo]] [[saw|vi]] [[the|los]] [[paintings|cuadros]] [[and|y]] [[then|después]] [[I|yo]] [[walked|caminé]] [[across|a través de]] [[the|el]] [[courtyard|patio]] [[to|para]] [[get|llegar]] [[to|a]] [[the|la]] [[sculpture|escultura]] [[section|sección]]. [[When|Cuando]] [[I|yo]] [[came|salí]] [[out of|de]] [[the|el]] [[museum|museo]] [[I|yo]] [[crossed|crucé]] [[the|la]] [[street|calle]] [[and|y]] [[went|entré]] [[into|en]] [[a|un]] [[cafe|café]] [[for|para]] [[coffee|café]]. [[I|yo]] [[really|realmente]] [[enjoyed|disfruté]] [[the|el]] [[day|día]]!`;

const INSTRUCTIONS = 'Escucha el audio de abajo. Puedes leer la transcripción después de escuchar. Después responde las preguntas.';

const QUESTIONS = [
  {
    question: '[[Where|Dónde]] [[did|fue]] [[the|el]] [[person|persona]] [[go|ir]] [[last weekend|el fin de semana pasado]]?',
    options: ['[[to|a]] [[the|el]] [[park|parque]]', '[[to|a]] [[the|el]] [[museum|museo]]', '[[to|a]] [[the|la]] [[beach|playa]]', '[[to|a]] [[the|el]] [[cinema|cine]]'],
    correctAnswer: 1,
    explanation: '[[He|Él]] [[says|dice]] "[[Last weekend I went to the museum|El fin de semana pasado fui al museo]]".',
  },
  {
    question: '[[What|Qué]] [[did|hizo]] [[he|él]] [[do|hacer]] [[first|primero]] [[when|cuando]] [[he|él]] [[arrived|llegó]]?',
    options: ['[[He|Él]] [[went|entró]] [[into|en]] [[the|el]] [[main|principal]] [[entrance|entrada]]', '[[He|Él]] [[went|fue]] [[to|a]] [[the|el]] [[cafe|café]]', '[[He|Él]] [[walked|caminó]] [[across|a través de]] [[the|el]] [[courtyard|patio]]', '[[He|Él]] [[left|salió]] [[the|el]] [[museum|museo]]'],
    correctAnswer: 0,
    explanation: '[[He|Él]] [[says|dice]] "[[I went into the main entrance|Entré por la entrada principal]]".',
  },
  {
    question: '[[How|Cómo]] [[did|llegó]] [[he|él]] [[get|llegar]] [[to|a]] [[the|la]] [[sculpture|escultura]] [[section|sección]]?',
    options: ['[[He|Él]] [[ran|corrió]] [[through|a través de]] [[the|el]] [[museum|museo]]', '[[He|Él]] [[walked|caminó]] [[across|a través de]] [[the|el]] [[courtyard|patio]] [[to|para]] [[get|llegar]] [[to|a]] [[the|la]] [[sculpture|escultura]] [[section|sección]]', '[[He|Él]] [[went|fue]] [[out of|de]] [[the|el]] [[museum|museo]]', '[[He|Él]] [[drove|condujo]]'],
    correctAnswer: 1,
    explanation: '[[He|Él]] [[says|dice]] "[[I walked across the courtyard to get to the sculpture section|Caminé a través del patio para llegar a la sección de esculturas]]".',
  },
  {
    question: '[[What|Qué]] [[did|hizo]] [[he|él]] [[do|hacer]] [[when|cuando]] [[he|él]] [[came|salió]] [[out of|de]] [[the|el]] [[museum|museo]]?',
    options: ['[[He|Él]] [[went|fue]] [[home|casa]]', '[[He|Él]] [[crossed|cruzó]] [[the|la]] [[street|calle]] [[and|y]] [[went|entró]] [[into|en]] [[a|un]] [[cafe|café]] [[for|para]] [[coffee|café]]', '[[He|Él]] [[walked|caminó]] [[through|a través de]] [[the|el]] [[park|parque]]', '[[He|Él]] [[bought|compró]] [[a|un]] [[souvenir|souvenir]]'],
    correctAnswer: 1,
    explanation: '[[He|Él]] [[says|dice]] "[[When I came out of the museum I crossed the street and went into a cafe for coffee|Cuando salí del museo crucé la calle y entré en un café para tomar café]]".',
  },
  {
    question: '[[Which|Cuál]] [[preposition|preposición]] [[does|usa]] [[the|el]] [[speaker|hablante]] [[use|usar]] [[for|para]] [[entering|entrar]] [[the|el]] [[museum|museo]]?',
    options: ['[[out of|fuera de]]', '[[into|dentro de]]', '[[through|a través de]]', '[[across|a través de]]'],
    correctAnswer: 1,
    explanation: '[[He|Él]] [[says|dice]] "[[I went into the main entrance|Entré por la entrada principal]]".',
  },
  {
    question: '[[Which|Cuál]] [[preposition|preposición]] [[does|usa]] [[the|el]] [[speaker|hablante]] [[use|usar]] [[for|para]] [[the|las]] [[rooms|salas]]?',
    options: ['[[into|dentro de]]', '[[through|a través de]]', '[[out of|fuera de]]', '[[across|a través de]]'],
    correctAnswer: 1,
    explanation: '[[He|Él]] [[says|dice]] "[[I walked through several rooms|Caminé a través de varias salas]]".',
  },
  {
    question: '[[Which|Cuál]] [[preposition|preposición]] [[does|usa]] [[the|el]] [[speaker|hablante]] [[use|usar]] [[for|para]] [[the|el]] [[courtyard|patio]]?',
    options: ['[[into|dentro de]]', '[[through|a través de]]', '[[out of|fuera de]]', '[[across|a través de]]'],
    correctAnswer: 3,
    explanation: '[[He|Él]] [[says|dice]] "[[I walked across the courtyard|Caminé a través del patio]]". [[Across|A través de]] = [[over|sobre]] [[a|una]] [[surface|superficie]].',
  },
  {
    question: '[[Did|¿]] [[he|él]] [[enjoy|disfrutó]] [[the|el]] [[day|día]]?',
    options: ['[[Yes|Sí]], [[he|él]] [[really|realmente]] [[enjoyed|disfrutó]] [[it|él]]', '[[No|No]], [[he|él]] [[didn\'t|no]] [[like|le gustó]] [[it|él]]', '[[Maybe|Quizás]]', '[[He|Él]] [[doesn\'t|no]] [[say|dice]]'],
    correctAnswer: 0,
    explanation: '[[He|Él]] [[says|dice]] "[[I really enjoyed the day|Realmente disfruté el día]]"!',
  },
  {
    question: '[[He|Él]] [[went|entró]] [[into|en]] [[the|el]] [[museum|museo]].',
    options: ['[[True|Verdadero]]', '[[False|Falso]]'],
    correctAnswer: 'True',
    explanation: '[[True|Verdadero]]. [[He|Él]] [[says|dice]] "[[I went into the main entrance|Entré por la entrada principal]]".',
  },
  {
    question: '[[He|Él]] [[walked|caminó]] [[through|a través de]] [[several|varias]] [[rooms|salas]].',
    options: ['[[True|Verdadero]]', '[[False|Falso]]'],
    correctAnswer: 'True',
    explanation: '[[True|Verdadero]]. [[He|Él]] [[says|dice]] "[[I walked through several rooms|Caminé a través de varias salas]]".',
  },
  {
    question: '[[He|Él]] [[had|tomó]] [[lunch|cena]] [[at|en]] [[the|el]] [[museum|museo]].',
    options: ['[[True|Verdadero]]', '[[False|Falso]]'],
    correctAnswer: 'False',
    explanation: '[[False|Falso]]. [[He|Él]] [[had|tomó]] [[coffee|café]] [[at|en]] [[a|un]] [[cafe|café]] [[after|después]] [[leaving|salir]] [[the|el]] [[museum|museo]].',
  },
  {
    question: '[[What|Cuál]] [[is|es]] [[the|el]] [[main|principal]] [[topic|tema]] [[of|del]] [[this|este]] [[audio|audio]]?',
    options: ['[[A|Un]] [[trip|viaje]] [[to|a]] [[the|el]] [[museum|museo]] [[and|y]] [[prepositions of movement|preposiciones de movimiento]]', '[[A|Un]] [[cafe|café]]', '[[A|Un]] [[park|parque]]', '[[A|Una]] [[beach|playa]]'],
    correctAnswer: 0,
    explanation: '[[The|El]] [[audio|audio]] [[describes|describe]] [[a|un]] [[trip|viaje]] [[to|a]] [[the|el]] [[museum|museo]] [[using|usando]] [[prepositions of movement|preposiciones de movimiento]].',
  },
  {
    question: '[[Which|Cuál]] [[preposition|preposición]] [[does|usa]] [[the|el]] [[speaker|hablante]] [[use|usar]] [[for|para]] [[leaving|salir]] [[the|el]] [[museum|museo]]?',
    options: ['[[into|dentro de]]', '[[through|a través de]]', '[[out of|fuera de]]', '[[across|a través de]]'],
    correctAnswer: 2,
    explanation: '[[He|Él]] [[says|dice]] "[[When I came out of the museum|Cuando salí del museo]]".',
  },
  {
    question: '[[What|Qué]] [[did|vio]] [[he|él]] [[see|ver]] [[first|primero]] [[in|en]] [[the|el]] [[museum|museo]]?',
    options: ['[[sculptures|esculturas]]', '[[the|los]] [[paintings|cuadros]]', '[[photos|fotos]]', '[[coins|monedas]]'],
    correctAnswer: 1,
    explanation: '[[He|Él]] [[says|dice]] "[[First I saw the paintings|Primero vi los cuadros]]".',
  },
  {
    question: '[[Where|Dónde]] [[did|tomó]] [[he|él]] [[have|tomar]] [[coffee|café]]?',
    options: ['[[at|en]] [[the|el]] [[museum|museo]]', '[[at|en]] [[a|un]] [[cafe|café]] [[across|al otro lado de]] [[the|la]] [[street|calle]]', '[[at|en]] [[home|casa]]', '[[He|Él]] [[didn\'t|no]] [[have|tomó]] [[coffee|café]]'],
    correctAnswer: 1,
    explanation: '[[He|Él]] [[says|dice]] "[[I crossed the street and went into a cafe for coffee|Crucé la calle y entré en un café para tomar café]]".',
  },
];

export const UNIT_9_LESSON_4_LISTENING: Exercise[] = QUESTIONS.map((q, i) => ({
  id: `a2-u9-l4-l${i + 1}`,
  type: 'listening',
  level: 'A2',
  topic: 'Prepositions Place Movement',
  difficulty: 'easy',
  transcript: LISTENING_TRANSCRIPT,
  content: {
    title: LESSON_TITLE,
    instructions: INSTRUCTIONS,
    questions: [q],
  },
  topicName: 'Listening',
}));
