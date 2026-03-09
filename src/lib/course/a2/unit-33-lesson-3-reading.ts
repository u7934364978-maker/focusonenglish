/**
 * Unidad 33 — Lección 3: Comprensión lectora (Future with 'Will': Predictions)
 * 15 actividades: 1 texto + 15 preguntas
 */

import { Exercise } from '@/lib/exercise-generator';

const LESSON_TITLE = '[[Reading|Comprensión lectora]]';
const READING_TRANSCRIPT = `[[In|En]] [[the|el]] [[future|futuro]] [[I|yo]] [[think|creo]] [[that|que]] [[technology|la tecnología]] [[will|]] [[change|cambiará]] [[our|nuestra]] [[lives|vida]] [[a lot|mucho]]. [[I|Yo]] [[believe|creo]] [[that|que]] [[robots|los robots]] [[will|]] [[do|harán]] [[many|muchos]] [[jobs|trabajos]] [[that|que]] [[humans|los humanos]] [[do|hacen]] [[today|hoy]]. [[Maybe|Quizás]] [[we|nosotros]] [[will|]] [[not|no]] [[need|necesitemos]] [[to|para]] [[work|trabajar]] [[so|tan]] [[much|mucho]]. [[I|Yo]] [[also|también]] [[think|creo]] [[that|que]] [[the|el]] [[weather|tiempo]] [[will|]] [[get|se]] [[warmer|volverá más cálido]] [[because|porque]] [[of|de]] [[climate|clima]] [[change|cambio]]. [[Perhaps|Tal vez]] [[we|nosotros]] [[will|]] [[travel|viajaremos]] [[to|a]] [[Mars|Marte]] [[one|algún]] [[day|día]]. [[I|Yo]] [[hope|espero]] [[the|el]] [[future|futuro]] [[will|]] [[be|será]] [[better|mejor]] [[for|para]] [[everyone|todos]].`;

const INSTRUCTIONS = 'Lee el texto de abajo. Después responde las preguntas.';

const QUESTIONS = [
  { question: '[[What|Qué]] [[does|cree]] [[the|el]] [[writer|autor]] [[think|creer]] [[will|]] [[change|cambiar]] [[in|en]] [[the|el]] [[future|futuro]]?', options: ['[[Food|Comida]]', '[[Technology|La tecnología]]', '[[Music|Música]]', '[[Fashion|Moda]]'], correctAnswer: 1, explanation: '[[The|El]] [[text|texto]] [[says|dice]] "[[technology will change our lives|la tecnología cambiará nuestra vida]]".' },
  { question: '[[Who|Quién]] [[will|]] [[do|hará]] [[many|muchos]] [[jobs|trabajos]] [[in|en]] [[the|el]] [[future|futuro]]?', options: ['[[Humans|Humanos]] [[only|solo]]', '[[Robots|Robots]]', '[[Animals|Animales]]', '[[Nobody|Nadie]]'], correctAnswer: 1, explanation: '[[He|Él]] [[says|dice]] "[[robots will do many jobs|los robots harán muchos trabajos]]".' },
  { question: '[[Will|]] [[people|la gente]] [[need|necesitar]] [[to|para]] [[work|trabajar]] [[so|tan]] [[much|mucho]] [[in|en]] [[the|el]] [[future|futuro]]?', options: ['[[Yes|Sí]]', '[[Maybe|Quizás]] [[not|no]]', '[[Definitely|Definitivamente]]', '[[Never|Nunca]]'], correctAnswer: 1, explanation: '[[He|Él]] [[says|dice]] "[[Maybe we will not need to work so much|Quizás no necesitemos trabajar tanto]]".' },
  { question: '[[What|Qué]] [[will|]] [[happen|pasará]] [[to|con]] [[the|el]] [[weather|tiempo]]?', options: ['[[It|Se]] [[will|]] [[get|volverá]] [[colder|más frío]]', '[[It|Se]] [[will|]] [[get|volverá]] [[warmer|más cálido]]', '[[No|No]] [[change|cambiará]]', '[[Rain|Lloverá]] [[always|siempre]]'], correctAnswer: 1, explanation: '[[He|Él]] [[says|dice]] "[[the weather will get warmer|el tiempo se volverá más cálido]]".' },
  { question: '[[Why|Por qué]] [[will|]] [[the|el]] [[weather|tiempo]] [[change|cambiar]]?', options: ['[[Robots|Robots]]', '[[Climate|Clima]] [[change|cambio]]', '[[Technology|Tecnología]]', '[[Mars|Marte]]'], correctAnswer: 1, explanation: '[[He|Él]] [[says|dice]] "[[because of climate change|porque del cambio climático]]".' },
  { question: '[[Where|Dónde]] [[might|podríamos]] [[we|nosotros]] [[travel|viajar]] [[one|algún]] [[day|día]]?', options: ['[[The|La]] [[moon|Luna]]', '[[Mars|Marte]]', '[[Jupiter|Júpiter]]', '[[Venus|Venus]]'], correctAnswer: 1, explanation: '[[He|Él]] [[says|dice]] "[[Perhaps we will travel to Mars|Tal vez viajaremos a Marte]]".' },
  { question: '[[The|El]] [[writer|autor]] [[uses|usa]] [[will|will]] [[for|para]] [[predictions|predicciones]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'True', explanation: '[[True|Verdadero]]. [[All|Todos]] [[sentences|enunciados]] [[use|usan]] [[will|will]] [[for|para]] [[future|futuras]] [[predictions|predicciones]].' },
  { question: '[[The|El]] [[writer|autor]] [[is|está]] [[sure|seguro]] [[about|sobre]] [[all|todas]] [[his|sus]] [[predictions|predicciones]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'False', explanation: '[[False|Falso]]. [[He|Él]] [[uses|usa]] [[maybe|quizás]] [[and|y]] [[perhaps|tal vez]].' },
  { question: '[[The|El]] [[writer|autor]] [[hopes|espera]] [[the|el]] [[future|futuro]] [[will|]] [[be|ser]] [[better|mejor]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'True', explanation: '[[True|Verdadero]]. [[He|Él]] [[says|dice]] "[[I hope the future will be better|espero que el futuro será mejor]]".' },
  { question: '[[What|Cuál]] [[is|es]] [[the|el]] [[main|principal]] [[topic|tema]] [[of|del]] [[this|este]] [[text|texto]]?', options: ['[[Past|Viajes]] [[trips|pasados]]', '[[Future|Predicciones]] [[predictions|futuras]] [[using|usando]] [[will|will]]', '[[Weather|Tiempo]]', '[[Robots|Robots]]'], correctAnswer: 1, explanation: '[[The|El]] [[text|texto]] [[is|es]] [[about|sobre]] [[future|futuras]] [[predictions|predicciones]].' },
  { question: '[[How many|Cuántas]] [[predictions|predicciones]] [[does|menciona]] [[the|el]] [[writer|autor]] [[mention|mencionar]]?', options: ['[[two|dos]]', '[[three|tres]]', '[[four|cuatro]]', '[[five|cinco]]'], correctAnswer: 3, explanation: '[[Four|Cuatro]]: [[technology|tecnología]], [[robots|robots]], [[weather|tiempo]], [[Mars|Marte]].' },
  { question: '[[The|El]] [[writer|autor]] [[is|está]] [[optimistic|optimista]] [[about|sobre]] [[the|el]] [[future|futuro]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'True', explanation: '[[True|Verdadero]]. [[He|Él]] [[hopes|espera]] [[the|el]] [[future|futuro]] [[will|]] [[be|ser]] [[better|mejor]].' },
  { question: '[[What|Qué]] [[word|palabra]] [[shows|muestra]] [[uncertainty|incertidumbre]]?', options: ['[[Definitely|Definitivamente]]', '[[Maybe|Quizás]]', '[[Never|Nunca]]', '[[Always|Siempre]]'], correctAnswer: 1, explanation: '[[Maybe|Quizás]] [[and|y]] [[Perhaps|Tal vez]] [[show|muestran]] [[uncertainty|incertidumbre]].' },
  { question: '[[The|El]] [[writer|autor]] [[believes|cree]] [[robots|robots]] [[will|]] [[replace|reemplazar]] [[humans|humanos]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'True', explanation: '[[True|Verdadero]]. [[He|Él]] [[says|dice]] [[robots|robots]] [[will|]] [[do|harán]] [[many|muchos]] [[jobs|trabajos]].' },
  { question: '[[What|Qué]] [[does|espera]] [[the|el]] [[writer|autor]] [[hope|esperar]]?', options: ['[[More|Más]] [[work|trabajo]]', '[[Future|El futuro]] [[will|]] [[be|ser]] [[better|mejor]] [[for|para]] [[everyone|todos]]', '[[Less|Menos]] [[technology|tecnología]]', '[[Mars|Marte]] [[trip|viaje]]'], correctAnswer: 1, explanation: '[[He|Él]] [[says|dice]] "[[I hope the future will be better for everyone|espero que el futuro será mejor para todos]]".' },
];

export const UNIT_33_LESSON_3_READING: Exercise[] = QUESTIONS.map((q, i) => ({
  id: `a2-u33-l3-r${i + 1}`,
  type: 'reading',
  level: 'A2',
  topic: "Future with 'Will': Predictions",
  difficulty: 'easy',
  transcript: READING_TRANSCRIPT,
  content: { title: LESSON_TITLE, instructions: INSTRUCTIONS, questions: [q] },
  topicName: 'Reading',
}));
