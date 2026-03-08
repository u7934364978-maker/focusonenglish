/**
 * Unidad 5 — Lección 3: Comprensión lectora (Comparativos)
 * 15 actividades: 1 texto + 15 preguntas
 */

import { Exercise } from '@/lib/exercise-generator';

const LESSON_TITLE = '[[Reading|Comprensión lectora]]';
const READING_TRANSCRIPT = `[[My|Mi]] [[name|nombre]] [[is|es]] [[Laura|Laura]] [[and|y]] [[I|yo]] [[have|tengo]] [[two|dos]] [[sisters|hermanas]]. [[My|Mi]] [[older|mayor]] [[sister|hermana]] [[Maria|María]] [[is|es]] [[taller|más alta]] [[than|que]] [[me|yo]] [[and|y]] [[she|ella]] [[has|tiene]] [[longer|más largo]] [[hair|pelo]] [[than|que]] [[I|yo]] [[do|tengo]]. [[My|Mi]] [[younger|menor]] [[sister|hermana]] [[Sofia|Sofía]] [[is|es]] [[shorter|más baja]] [[than|que]] [[both|ambas]] [[of|de]] [[us|nosotras]] [[but|pero]] [[she|ella]] [[is|es]] [[faster|más rápida]] [[than|que]] [[us|nosotras]] [[when|cuando]] [[we|nosotros]] [[run|corremos]]. [[Our|Nuestra]] [[house|casa]] [[is|es]] [[bigger|más grande]] [[than|que]] [[our|nuestra]] [[grandmother\'s|abuela]] [[house|casa]] [[but|pero]] [[grandmother\'s|abuela]] [[garden|jardín]] [[is|es]] [[more beautiful|más hermoso]] [[than|que]] [[ours|el nuestro]]. [[I|Yo]] [[think|creo]] [[our|nuestra]] [[city|ciudad]] [[is|es]] [[more interesting|más interesante]] [[than|que]] [[the|la]] [[village|pueblo]] [[where|donde]] [[grandmother|abuela]] [[lives|vive]] [[but|pero]] [[the|la]] [[village|pueblo]] [[is|es]] [[quieter|más tranquilo]] [[than|que]] [[the|la]] [[city|ciudad]].`;

const INSTRUCTIONS = 'Lee el texto de abajo. Después responde las preguntas.';

const QUESTIONS = [
  {
    question: '[[How many|Cuántas]] [[sisters|hermanas]] [[does|tiene]] [[Laura|Laura]] [[have|tener]]?',
    options: ['[[one|una]]', '[[two|dos]]', '[[three|tres]]', '[[four|cuatro]]'],
    correctAnswer: 1,
    explanation: '[[The|El]] [[text|texto]] [[says|dice]] "[[I have two sisters|Tengo dos hermanas]]".',
  },
  {
    question: '[[Who|Quién]] [[is|es]] [[taller|más alta]] [[than|que]] [[Laura|Laura]]?',
    options: ['[[Sofia|Sofía]]', '[[Maria|María]]', '[[grandmother|abuela]]', '[[no one|nadie]]'],
    correctAnswer: 1,
    explanation: '[[The|El]] [[text|texto]] [[says|dice]] "[[My older sister Maria is taller than me|Mi hermana mayor María es más alta que yo]]".',
  },
  {
    question: '[[Who|Quién]] [[is|es]] [[faster|más rápida]] [[when|cuando]] [[they|ellos]] [[run|corren]]?',
    options: ['[[Laura|Laura]]', '[[Maria|María]]', '[[Sofia|Sofía]]', '[[grandmother|abuela]]'],
    correctAnswer: 2,
    explanation: '[[The|El]] [[text|texto]] [[says|dice]] "[[she (Sofia) is faster than us when we run|ella (Sofía) es más rápida que nosotras cuando corremos]]".',
  },
  {
    question: '[[Which|Cuál]] [[house|casa]] [[is|es]] [[bigger|más grande]]?',
    options: ['[[Grandmother\'s|Abuela]]', '[[Laura\'s|Laura]] [[family|familia]]', '[[Maria\'s|María]]', '[[The|El]] [[text|texto]] [[doesn\'t|no]] [[say|dice]]'],
    correctAnswer: 1,
    explanation: '[[The|El]] [[text|texto]] [[says|dice]] "[[Our house is bigger than our grandmother\'s house|Nuestra casa es más grande que la casa de nuestra abuela]]".',
  },
  {
    question: '[[Which|Cuál]] [[garden|jardín]] [[is|es]] [[more beautiful|más hermoso]]?',
    options: ['[[Laura\'s|Laura]] [[family|familia]]', '[[Grandmother\'s|Abuela]]', '[[Maria\'s|María]]', '[[Sofia\'s|Sofía]]'],
    correctAnswer: 1,
    explanation: '[[The|El]] [[text|texto]] [[says|dice]] "[[grandmother\'s garden is more beautiful than ours|el jardín de la abuela es más hermoso que el nuestro]]".',
  },
  {
    question: '[[What|Qué]] [[does|cree]] [[Laura|Laura]] [[think|creer]] [[about|sobre]] [[the|la]] [[city|ciudad]] [[vs|vs]] [[the|la]] [[village|pueblo]]?',
    options: ['[[City|Ciudad]] [[is|es]] [[more interesting|más interesante]] [[but|pero]] [[village|pueblo]] [[is|es]] [[quieter|más tranquilo]]', '[[Village|Pueblo]] [[is|es]] [[better|mejor]]', '[[Both|Ambos]] [[are|son]] [[same|iguales]]', '[[She|Ella]] [[doesn\'t|no]] [[say|dice]]'],
    correctAnswer: 0,
    explanation: '[[The|El]] [[text|texto]] [[says|dice]] "[[our city is more interesting than the village but the village is quieter than the city|nuestra ciudad es más interesante que el pueblo pero el pueblo es más tranquilo que la ciudad]]".',
  },
  {
    question: '[[Maria|María]] [[has|tiene]] [[shorter|más corto]] [[hair|pelo]] [[than|que]] [[Laura|Laura]].',
    options: ['[[True|Verdadero]]', '[[False|Falso]]'],
    correctAnswer: 'False',
    explanation: '[[False|Falso]]. [[Maria|María]] [[has|tiene]] [[longer|más largo]] [[hair|pelo]] [[than|que]] [[Laura|Laura]].',
  },
  {
    question: '[[Sofia|Sofía]] [[is|es]] [[the|la]] [[shortest|más baja]] [[of|de]] [[the|las]] [[three|tres]] [[sisters|hermanas]].',
    options: ['[[True|Verdadero]]', '[[False|Falso]]'],
    correctAnswer: 'True',
    explanation: '[[True|Verdadero]]. [[The|El]] [[text|texto]] [[says|dice]] "[[she is shorter than both of us|ella es más baja que ambas nosotras]]".',
  },
  {
    question: '[[Grandmother|Abuela]] [[lives|vive]] [[in|en]] [[the|la]] [[city|ciudad]].',
    options: ['[[True|Verdadero]]', '[[False|Falso]]'],
    correctAnswer: 'False',
    explanation: '[[False|Falso]]. [[She|Ella]] [[lives|vive]] [[in|en]] [[the|la]] [[village|pueblo]].',
  },
  {
    question: '[[The|El]] [[village|pueblo]] [[is|es]] [[quieter|más tranquilo]] [[than|que]] [[the|la]] [[city|ciudad]].',
    options: ['[[True|Verdadero]]', '[[False|Falso]]'],
    correctAnswer: 'True',
    explanation: '[[True|Verdadero]]. [[The|El]] [[text|texto]] [[says|dice]] "[[the village is quieter than the city|el pueblo es más tranquilo que la ciudad]]".',
  },
  {
    question: '[[What|Cuál]] [[is|es]] [[the|el]] [[main|principal]] [[topic|tema]] [[of|del]] [[this|este]] [[text|texto]]?',
    options: ['[[A|Un]] [[trip|viaje]]', '[[Comparing|Comparando]] [[sisters|hermanas]] [[and|y]] [[places|lugares]]', '[[A|Una]] [[birthday|cumpleaños]] [[party|fiesta]]', '[[A|Un]] [[school|escuela]] [[day|día]]'],
    correctAnswer: 1,
    explanation: '[[The|El]] [[text|texto]] [[compares|compara]] [[sisters|hermanas]] [[and|y]] [[places|lugares]] [[using|usando]] [[comparatives|comparativos]].',
  },
  {
    question: '[[Which|Cuál]] [[comparative|comparativo]] [[form|forma]] [[does|usa]] [[the|el]] [[text|texto]] [[NOT|NO]] [[use|usar]]?',
    options: ['[[-er|más]]', '[[more|más]] + [[adjective|adjetivo]]', '[[than|que]]', '[[-est|el más]]'],
    correctAnswer: 3,
    explanation: '[[The|El]] [[text|texto]] [[uses|usa]] [[-er|más]] [[and|y]] [[more|más]] + [[adjective|adjetivo]] [[with|con]] [[than|que]]. [[-est|El más]] [[is|es]] [[superlative|superlativo]], [[not|no]] [[comparative|comparativo]].',
  },
  {
    question: '[[What|Qué]] [[does|tiene]] [[Maria|María]] [[have|tener]] [[that|que]] [[Laura|Laura]] [[doesn\'t|no]] [[have|tiene]]?',
    options: ['[[Shorter|Más corto]] [[hair|pelo]]', '[[Longer|Más largo]] [[hair|pelo]]', '[[A|Un]] [[bigger|más grande]] [[house|casa]]', '[[A|Un]] [[faster|más rápida]] [[sister|hermana]]'],
    correctAnswer: 1,
    explanation: '[[The|El]] [[text|texto]] [[says|dice]] "[[she has longer hair than I do|ella tiene el pelo más largo que yo]]".',
  },
  {
    question: '[[Who|Quién]] [[is|es]] [[the|la]] [[oldest|mayor]] [[sister|hermana]]?',
    options: ['[[Laura|Laura]]', '[[Maria|María]]', '[[Sofia|Sofía]]', '[[The|El]] [[text|texto]] [[doesn\'t|no]] [[say|dice]]'],
    correctAnswer: 1,
    explanation: '[[The|El]] [[text|texto]] [[says|dice]] "[[My older sister Maria|Mi hermana mayor María]]".',
  },
  {
    question: '[[Which|Cuál]] [[place|lugar]] [[is|es]] [[more interesting|más interesante]] [[according to|según]] [[Laura|Laura]]?',
    options: ['[[the|la]] [[village|pueblo]]', '[[the|la]] [[city|ciudad]]', '[[grandmother\'s|abuela]] [[house|casa]]', '[[the|el]] [[garden|jardín]]'],
    correctAnswer: 1,
    explanation: '[[The|El]] [[text|texto]] [[says|dice]] "[[our city is more interesting than the village|nuestra ciudad es más interesante que el pueblo]]".',
  },
];

export const UNIT_5_LESSON_3_READING: Exercise[] = QUESTIONS.map((q, i) => ({
  id: `a2-u5-l3-r${i + 1}`,
  type: 'reading',
  level: 'A2',
  topic: 'Comparatives',
  difficulty: 'easy',
  transcript: READING_TRANSCRIPT,
  content: {
    title: LESSON_TITLE,
    instructions: INSTRUCTIONS,
    questions: [q],
  },
  topicName: 'Reading',
}));
