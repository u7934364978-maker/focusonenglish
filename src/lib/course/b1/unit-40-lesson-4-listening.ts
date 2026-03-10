/**
 * Unidad 40 B1 — Lección 4: Comprensión auditiva (Repaso 36–39)
 * 15 actividades
 */

import { Exercise } from '@/lib/exercise-generator';

const LESSON_TITLE = '[[Listening|Comprensión auditiva]]';
const LISTENING_TRANSCRIPT = `[[Hi|Hola]], [[I|yo]] [[am|soy]] [[Laura|Laura]]. [[I|yo]] [[decided|decidí]] [[to learn|aprender]] [[English|inglés]] [[because|porque]] [[I|yo]] [[wanted|quería]] [[to|para]] [[travel|viajar]] [[more|más]]. [[Although|Aunque]] [[it|ello]] [[was|era]] [[difficult|difícil]] [[at first|al principio]], [[I|yo]] [[kept|seguí]] [[practising|practicando]] [[in order to|para]] [[improve|mejorar]]. [[Last|El pasado]] [[year|año]] [[I|yo]] [[went on|hice]] [[a|un]] [[three-week|de tres semanas]] [[trip|viaje]] [[to|a]] [[Australia|Australia]]. [[It was|Era]] [[such an|una]] [[amazing|increíble]] [[experience|experiencia]] [[that|que]] [[I|yo]] [[will never forget|nunca olvidaré]]. [[The|Los]] [[people|gente]] [[were|eran]] [[extremely|extremadamente]] [[kind|amables]]. [[However|Sin embargo]], [[the flight|el vuelo]] [[was|fue]] [[delayed|retrasado]] [[due to|debido a]] [[bad weather|mal tiempo]]. [[I|yo]] [[am|estoy]] [[convinced|convencido]] [[that|que]] [[we|nosotros]] [[should|deberíamos]] [[all|todos]] [[travel|viajar]] [[more|más]] [[so that|para que]] [[we|nosotros]] [[can|podamos]] [[learn|aprender]] [[about|sobre]] [[different|diferentes]] [[cultures|culturas]].`;

const INSTRUCTIONS = 'Escucha el audio. Puedes leer la transcripción. Después responde las preguntas.';

const QUESTIONS = [
  { question: '[[Why|Por qué]] [[did Laura decide to learn English|decidió Laura aprender inglés]]?', options: ['[[because she had to|porque tenía que]]', '[[because she wanted to travel more|porque quería viajar más]]', '[[because of work|debido al trabajo]]'], correctAnswer: 1, explanation: '[[She says|Dice]] "[[I decided to learn English because I wanted to travel more|decidí aprender inglés porque quería viajar más]]".' },
  { question: '[[Which contrast word|Qué palabra de contraste]] [[does she use|usa]] [[about learning|sobre aprender]]?', options: ['[[however|sin embargo]]', '[[although|aunque]]', '[[but|pero]]'], correctAnswer: 1, explanation: '[[Although|Aunque]] [[introduces the contrast|introduce el contraste]] [[about difficulty|sobre la dificultad]].' },
  { question: '[[Why|Por qué]] [[does she practice|practica]]?', options: ['[[because she has to|porque tiene que]]', '[[in order to improve|para mejorar]]', '[[because of the teacher|debido al profesor]]'], correctAnswer: 1, explanation: '[[She says|Dice]] "[[I kept practice in order to improve|seguí practicando para mejorar]]".' },
  { question: '[[When|Cuándo]] [[did she go to Australia|fue a Australia]]?', options: ['[[last month|el mes pasado]]', '[[last year|el año pasado]]', '[[two years ago|hace dos años]]'], correctAnswer: 1, explanation: '[[She says|Dice]] "[[Last year I went on a three-week trip to Australia|el año pasado hice un viaje de tres semanas a Australia]]".' },
  { question: '[[How long|Cuánto tiempo]] [[was the trip|duró el viaje]]?', options: ['[[one week|una semana]]', '[[two weeks|dos semanas]]', '[[three weeks|tres semanas]]'], correctAnswer: 2, explanation: '[[She says|Dice]] "[[a three-week trip|un viaje de tres semanas]]".' },
  { question: '[[What|Qué]] [[were the people like|eran la gente]]?', options: ['[[rude|maleducados]]', '[[extremely kind|extremadamente amables]]', '[[busy|ocupados]]'], correctAnswer: 1, explanation: '[[She says|Dice]] "[[The people were extremely kind|la gente era extremadamente amable]]".' },
  { question: '[[Why|Por qué]] [[was the flight delayed|se retrasó el vuelo]]?', options: ['[[because of the pilot|debido al piloto]]', '[[due to bad weather|debido al mal tiempo]]', '[[because of the passengers|debido a los pasajeros]]'], correctAnswer: 1, explanation: '[[She says|Dice]] "[[the flight was delayed due to bad weather|el vuelo se retrasó debido al mal tiempo]]".' },
  { question: '[[What|Qué]] [[does Laura believe|cree Laura]] [[about travel|sobre viajar]]?', options: ['[[we should travel less|deberíamos viajar menos]]', '[[we should all travel more so that we can learn about different cultures|deberíamos todos viajar más para que podamos aprender sobre diferentes culturas]]', '[[travel is expensive|viajar es caro]]'], correctAnswer: 1, explanation: '[[She says|Dice]] "[[I am convinced that we should all travel more so that we can learn about different cultures|estoy convencido de que deberíamos todos viajar más para que podamos aprender sobre diferentes culturas]]".' },
  { question: '[[Laura|Laura]] [[went|fue]] [[to Australia|a Australia]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'True', explanation: '[[True|Verdadero]]. [[The text says|El texto dice]] "[[I went on a three-week trip to Australia|hice un viaje de tres semanas a Australia]]".' },
  { question: '[[What|Cuál]] [[is|es]] [[the main topic|el tema principal]] [[of|del]] [[this listening|esta escucha]]?', options: ['[[Work|Trabajo]]', '[[Laura\'s experience learning English and travelling|La experiencia de Laura aprendiendo inglés y viajando]]', '[[Weather|Tiempo]]'], correctAnswer: 1, explanation: '[[The listening|La escucha]] [[describes|describe]] [[Laura\'s journey learning English and her trip to Australia|el viaje de Laura aprendiendo inglés y su viaje a Australia]].' },
  { question: '[[The experience|La experiencia]] [[was|era]] [[amazing|increíble]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'True', explanation: '[[True|Verdadero]]. [[The text says|El texto dice]] "[[such an amazing experience|una experiencia increíble]]".' },
  { question: '[[Which structure|Qué estructura]] [[expresses purpose|expresa propósito]] [[for "learn about cultures"|para "aprender sobre culturas"]]?', options: ['[[because|porque]]', '[[so that|para que]]', '[[because of|debido a]]'], correctAnswer: 1, explanation: '[[So that|Para que]] + [[subject + verb|sujeto + verbo]] = [[purpose|propósito]].' },
  { question: '[[Learning|Aprender]] [[was|era]] [[easy|fácil]] [[at first|al principio]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'False', explanation: '[[False|Falso]]. [[She says|Dice]] "[[Although it was difficult at first|aunque era difícil al principio]]".' },
  { question: '[[What compound adjective|Qué adjetivo compuesto]] [[describes the trip|describe el viaje]]?', options: ['[[five-star|de cinco estrellas]]', '[[three-week|de tres semanas]]', '[[extremely|extremadamente]]'], correctAnswer: 1, explanation: '[[Three-week|De tres semanas]] [[describes the trip|describe el viaje]].' },
  { question: '[[Laura|Laura]] [[will|va]] [[never forget|nunca olvidar]] [[the experience|la experiencia]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'True', explanation: '[[True|Verdadero]]. [[The text says|El texto dice]] "[[such an amazing experience that I will never forget|una experiencia increíble que nunca olvidaré]]".' },
];

export const UNIT_40_LESSON_4_LISTENING: Exercise[] = QUESTIONS.map((q, i) => ({
  id: `b1-u40-l4-l${i + 1}`,
  type: 'listening',
  level: 'B1',
  topic: 'Review 36-39',
  difficulty: 'easy',
  transcript: LISTENING_TRANSCRIPT,
  content: { title: LESSON_TITLE, instructions: INSTRUCTIONS, questions: [q] },
  topicName: 'Listening',
}));
