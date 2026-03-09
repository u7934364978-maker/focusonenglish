/**
 * Unidad 49 — Lección 3: Comprensión lectora (Transport & Travel Experiences)
 * 15 actividades: 1 texto + 15 preguntas
 */

import { Exercise } from '@/lib/exercise-generator';

const LESSON_TITLE = '[[Reading|Comprensión lectora]]';
const READING_TRANSCRIPT = `[[Last|El pasado]] [[summer|verano]] [[we|nosotros]] [[had|tuvimos]] [[a|un]] [[wonderful|maravilloso]] [[trip|viaje]] [[to|a]] [[Italy|Italia]]. [[Our|Nuestro]] [[flight|vuelo]] [[to|a]] [[Rome|Roma]] [[took|tardó]] [[two|dos]] [[hours|horas]]. [[The|El]] [[journey|viaje]] [[from|de]] [[the|el]] [[airport|aeropuerto]] [[to|a]] [[the|el]] [[hotel|hotel]] [[in|en]] [[the|el]] [[taxi|taxi]] [[took|tardó]] [[forty|cuarenta]] [[minutes|minutos]]. [[We|Nosotros]] [[took|tomamos]] [[the|el]] [[train|tren]] [[to|a]] [[Florence|Florencia]] [[and|y]] [[the|el]] [[journey|viaje]] [[was|fue]] [[beautiful|hermoso]]. [[I|Yo]] [[have|he]] [[never|nunca]] [[been|estado]] [[on|en]] [[a|un]] [[cruise|crucero]] [[but|pero]] [[I|yo]] [[would|me]] [[love|gustaría]] [[to|]] [[try|probar]] [[one|uno]] [[day|algún día]]. [[My|Mi]] [[brother|hermano]] [[took|tomó]] [[a|un]] [[flight|vuelo]] [[to|a]] [[Tokyo|Tokio]] [[last|el pasado]] [[month|mes]] [[for|por]] [[a|un]] [[business|negocios]] [[trip|viaje]].`;

const INSTRUCTIONS = 'Lee el texto de abajo. Después responde las preguntas.';

const QUESTIONS = [
  { question: '[[When|Cuándo]] ____ ____ ____ ____ ____ ____ ____?', options: ['[[did they have the trip to Italy|tuvieron el viaje a Italia]]', '[[Last summer|El pasado verano]]', '[[Last week|La pasada semana]]', '[[Last month|El pasado mes]]', '[[Last year|El año pasado]]'], correctAnswer: 1, explanation: '[[They|Ellos]] [[had the trip last summer|tuvieron el viaje el pasado verano]].' },
  { question: '[[How long|Cuánto tiempo]] ____ ____ ____ ____ ____ ____?', options: ['[[did the flight to Rome take|tardó el vuelo a Roma]]', '[[Two hours|Dos horas]]', '[[Three hours|Tres horas]]', '[[One hour|Una hora]]', '[[Four hours|Cuatro horas]]'], correctAnswer: 1, explanation: '[[The|El]] [[flight|vuelo]] [[took two hours|tardó dos horas]].' },
  { question: '[[How|Cómo]] ____ ____ ____ ____ ____ ____ ____ ____ ____?', options: ['[[did they go from the airport to the hotel|fueron del aeropuerto al hotel]]', '[[By taxi|En taxi]]', '[[By train|En tren]]', '[[By bus|En autobús]]', '[[On foot|A pie]]'], correctAnswer: 0, explanation: '[[They|Ellos]] [[went in the taxi|fueron en taxi]].' },
  { question: '[[How long|Cuánto tiempo]] ____ ____ ____ ____ ____ ____ ____ ____ ____?', options: ['[[did the journey from airport to hotel take|tardó el viaje del aeropuerto al hotel]]', '[[Forty minutes|Cuarenta minutos]]', '[[Thirty minutes|Treinta minutos]]', '[[One hour|Una hora]]', '[[Twenty minutes|Veinte minutos]]'], correctAnswer: 1, explanation: '[[The|El]] [[journey|viaje]] [[in the taxi took forty minutes|en taxi tardó cuarenta minutos]].' },
  { question: '[[How|Cómo]] ____ ____ ____ ____ ____ ____ ____?', options: ['[[did they go to Florence|fueron a Florencia]]', '[[By train|En tren]]', '[[By plane|En avión]]', '[[By car|En coche]]', '[[By bus|En autobús]]'], correctAnswer: 0, explanation: '[[They|Ellos]] [[took the train|tomaron el tren]] [[to Florence|a Florencia]].' },
  { question: '[[What|Qué]] ____ ____ ____ ____ ____ ____ ____ ____ ____?', options: ['[[was the train journey like|fue el viaje en tren]]', '[[Beautiful|Hermoso]]', '[[Boring|Aburrido]]', '[[Long|Largo]]', '[[Expensive|Caro]]'], correctAnswer: 0, explanation: '[[The|El]] [[journey|viaje]] [[was beautiful|fue hermoso]].' },
  { question: '[[Has|Ha]] ____ ____ ____ ____ ____ ____ ____ ____?', options: ['[[the writer ever been on a cruise|el autor estado alguna vez en un crucero]]', '[[No, never|No, nunca]]', '[[Yes, many times|Sí, muchas veces]]', '[[Yes, once|Sí, una vez]]', '[[Maybe|Quizás]]'], correctAnswer: 0, explanation: '[[He|Él]] [[says|dice]] "[[I have never been on a cruise|Nunca he estado en un crucero]]".' },
  { question: '[[Would|Le]] ____ ____ ____ ____ ____ ____ ____ ____ ____?', options: ['[[the writer like to try a cruise|gustaría al autor probar un crucero]]', '[[Yes|Sí]]', '[[No|No]]', '[[Maybe|Quizás]]', '[[Never|Nunca]]'], correctAnswer: 0, explanation: '[[He|Él]] [[would love to try one day|le gustaría probar algún día]].' },
  { question: '[[Where|Dónde]] ____ ____ ____ ____ ____ ____ ____ ____?', options: ['[[did the brother take a flight to|fue el hermano en avión]]', '[[Tokyo|Tokio]]', '[[Rome|Roma]]', '[[Florence|Florencia]]', '[[London|Londres]]'], correctAnswer: 0, explanation: '[[He|Él]] [[took a flight to Tokyo|tomó un vuelo a Tokio]].' },
  { question: '[[Why|Por qué]] ____ ____ ____ ____ ____ ____ ____ ____?', options: ['[[did the brother go to Tokyo|fue el hermano a Tokio]]', '[[For a business trip|Por un viaje de negocios]]', '[[For holiday|Por vacaciones]]', '[[To study|Para estudiar]]', '[[To visit family|Para visitar familia]]'], correctAnswer: 0, explanation: '[[He|Él]] [[went for a business trip|fue por un viaje de negocios]].' },
  { question: '[[Flight|Flight]] ____ ____ ____ ____ ____ ____.', options: ['[[means travel by plane|significa viaje en avión]]', '[[means travel by train|significa viaje en tren]]', '[[means travel by car|significa viaje en coche]]', '[[means travel by bus|significa viaje en autobús]]'], correctAnswer: 0, explanation: '[[Flight|Flight]] = [[travel by plane|viaje en avión]].' },
  { question: '[[Journey|Journey]] ____ ____ ____ ____ ____ ____ ____.', options: ['[[means the act of travelling from A to B|significa el acto de viajar de A a B]]', '[[means a holiday|significa vacaciones]]', '[[means a flight only|significa solo vuelo]]', '[[means a cruise only|significa solo crucero]]'], correctAnswer: 0, explanation: '[[Journey|Journey]] = [[the travel|el trayecto]] [[itself|en sí]].' },
  { question: '[[Trip|Trip]] ____ ____ ____ ____ ____ ____ ____ ____ ____.', options: ['[[means the whole experience including destination|significa toda la experiencia incluyendo destino]]', '[[means only the flight|significa solo el vuelo]]', '[[means only the journey|significa solo el trayecto]]', '[[means only the return|significa solo el regreso]]'], correctAnswer: 0, explanation: '[[Trip|Trip]] = [[whole|toda]] [[experience|la experiencia]].' },
  { question: '[[The|El]] ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____.', options: ['[[main topic is transport and travel experiences|tema principal es transporte y experiencias de viaje]]', '[[main topic is food|tema principal es comida]]', '[[main topic is work|tema principal es trabajo]]', '[[main topic is school|tema principal es escuela]]'], correctAnswer: 0, explanation: '[[The|El]] [[text|texto]] [[is|es]] [[about|sobre]] [[flight|vuelo]], [[journey|viaje]], [[trip|viaje]].' },
  { question: '[[How many|Cuántos]] ____ ____ ____ ____ ____ ____ ____ ____ ____?', options: ['[[types of transport does the text mention|tipos de transporte menciona el texto]]', '[[Plane, taxi, train|Avión, taxi, tren]]', '[[At least three|Al menos tres]]', '[[Only one|Solo uno]]', '[[Two|Dos]]'], correctAnswer: 1, explanation: '[[Plane|Avión]] ([[flight|flight]]), [[taxi|taxi]], [[train|tren]] [[and|y]] [[cruise|crucero]] ([[mentioned|mencionado]]).' },
];

export const UNIT_49_LESSON_3_READING: Exercise[] = QUESTIONS.map((q, i) => ({
  id: `a2-u49-l3-r${i + 1}`,
  type: 'reading',
  level: 'A2',
  topic: 'Transport & Travel Experiences',
  difficulty: 'easy',
  transcript: READING_TRANSCRIPT,
  content: { title: LESSON_TITLE, instructions: INSTRUCTIONS, questions: [q] },
  topicName: 'Reading',
}));
