/**
 * Unidad 22 B1 — Lección 4: Comprensión auditiva (Gerund vs infinitive 2, House & home)
 * 15 actividades
 */

import { Exercise } from '@/lib/exercise-generator';

const LESSON_TITLE = '[[Listening|Comprensión auditiva]]';
const LISTENING_TRANSCRIPT = `[[Hi|Hola]], [[I|yo]] [[am|soy]] [[Mike|Mike]] [[and|y]] [[I|yo]] [[want|quiero]] [[to tell|contar]] [[you|te]] [[about|sobre]] [[my|mi]] [[home|hogar]]. [[I|Yo]] [[like|me gusta]] [[living|vivir]] [[in|en]] [[a|una]] [[house|casa]] [[with|con]] [[a|un]] [[garden|jardín]]. [[I|Yo]] [[love|adoro]] [[cooking|cocinar]] [[in|en]] [[my|mi]] [[new|nueva]] [[kitchen|cocina]]. [[I|Yo]] [[prefer|prefiero]] [[reading|leer]] [[in|en]] [[the|el]] [[living room|salón]] [[to|a]] [[the|el]] [[bedroom|dormitorio]]. [[I|Yo]] [[always|siempre]] [[try|intento]] [[to remember|recordar]] [[to water|regar]] [[the plants|las plantas]] [[every|cada]] [[week|semana]]. [[Last month|El mes pasado]] [[I|yo]] [[forgot|olvidé]] [[to pay|pagar]] [[the electricity bill|la factura de la luz]]. [[I|Yo]] [[remember|recuerdo]] [[moving|mudarme]] [[into|a]] [[this house|esta casa]] [[five|cinco]] [[years ago|años]].`;

const INSTRUCTIONS = 'Escucha el audio. Puedes leer la transcripción. Después responde las preguntas.';

const QUESTIONS = [
  { question: '[[What|Qué]] [[is Mike talking about|está contando Mike]]?', options: ['[[his job|su trabajo]]', '[[his home|su hogar]]', '[[his hobbies|sus pasatiempos]]'], correctAnswer: 1, explanation: '[[He says|Dice]] "[[I want to tell you about my home|quiero contarte sobre mi hogar]]".' },
  { question: '[[What|Qué]] [[does Mike like|le gusta a Mike]]?', options: ['[[living in a flat|vivir en un piso]]', '[[living in a house with a garden|vivir en una casa con jardín]]', '[[living in the city|vivir en la ciudad]]'], correctAnswer: 1, explanation: '[[He says|Dice]] "[[I like living in a house with a garden|me gusta vivir en una casa con jardín]]".' },
  { question: '[[What|Qué]] [[does Mike love|adora Mike]]?', options: ['[[cleaning|limpiar]]', '[[cooking in his new kitchen|cocinar en su cocina nueva]]', '[[gardening|jardinería]]'], correctAnswer: 1, explanation: '[[He says|Dice]] "[[I love cooking in my new kitchen|adoro cocinar en mi cocina nueva]]".' },
  { question: '[[Where|Dónde]] [[does Mike prefer reading|prefiere leer Mike]]?', options: ['[[in the bedroom|en el dormitorio]]', '[[in the living room|en el salón]]', '[[in the garden|en el jardín]]'], correctAnswer: 1, explanation: '[[He says|Dice]] "[[I prefer reading in the living room|prefiero leer en el salón]]".' },
  { question: '[[What|Qué]] [[does Mike try to remember|intenta recordar Mike]]?', options: ['[[to lock the door|cerrar la puerta con llave]]', '[[to water the plants|regar las plantas]]', '[[to turn off the lights|apagar las luces]]'], correctAnswer: 1, explanation: '[[He says|Dice]] "[[I always try to remember to water the plants|siempre intento recordar regar las plantas]]".' },
  { question: '[[What|Qué]] [[did Mike forget|olvidó Mike]] [[last month|el mes pasado]]?', options: ['[[to pay the rent|pagar el alquiler]]', '[[to pay the electricity bill|pagar la factura de la luz]]', '[[to pay the water bill|pagar la factura del agua]]'], correctAnswer: 1, explanation: '[[He says|Dice]] "[[I forgot to pay the electricity bill|olvidé pagar la factura de la luz]]".' },
  { question: '[[When|Cuándo]] [[did Mike move|se mudó Mike]] [[into this house|a esta casa]]?', options: ['[[two years ago|hace dos años]]', '[[five years ago|hace cinco años]]', '[[ten years ago|hace diez años]]'], correctAnswer: 1, explanation: '[[He says|Dice]] "[[I remember moving into this house five years ago|recuerdo mudarme a esta casa hace cinco años]]".' },
  { question: '[[Mike|Mike]] [[lives|vive]] [[in|en]] [[a flat|un piso]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'False', explanation: '[[False|Falso]]. [[He|Él]] [[lives in a house|vive en una casa]].' },
  { question: '[[Mike|Mike]] [[loves|adora]] [[cooking|cocinar]] [[in his kitchen|en su cocina]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'True', explanation: '[[True|Verdadero]]. [[The text says|El texto dice]] "[[I love cooking in my new kitchen|adoro cocinar en mi cocina nueva]]".' },
  { question: '[[Mike|Mike]] [[forgot|olvidó]] [[to pay|pagar]] [[the electricity bill|la factura de la luz]] [[last month|el mes pasado]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'True', explanation: '[[True|Verdadero]]. [[The text says|El texto dice]] "[[I forgot to pay the electricity bill last month|olvidé pagar la factura de la luz el mes pasado]]".' },
  { question: '[[What|Cuál]] [[is|es]] [[the main topic|el tema principal]] [[of|del]] [[this listening|esta escucha]]?', options: ['[[Work|Trabajo]]', '[[Home and house activities|Hogar y actividades del hogar]]', '[[Travel|Viajes]]'], correctAnswer: 1, explanation: '[[The listening|La escucha]] [[describes|describe]] [[Mike\'s home|el hogar de Mike]].' },
  { question: '[[Which verb|Qué verbo]] [[does Mike use with -ing for a past memory|usa Mike con -ing para un recuerdo pasado]]?', options: ['[[forget|olvidar]]', '[[remember|recordar]]', '[[try|intentar]]'], correctAnswer: 1, explanation: '[[Mike uses|Mike usa]] "[[I remember moving|recuerdo mudarme]]".' },
  { question: '[[Mike|Mike]] [[prefers|prefiere]] [[reading|leer]] [[in the living room|en el salón]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'True', explanation: '[[True|Verdadero]]. [[The text says|El texto dice]] "[[I prefer reading in the living room|prefiero leer en el salón]]".' },
  { question: '[[Mike|Mike]] [[tries|intenta]] [[to remember|recordar]] [[to water|regar]] [[the plants|las plantas]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'True', explanation: '[[True|Verdadero]]. [[The text says|El texto dice]] "[[I always try to remember to water the plants|siempre intento recordar regar las plantas]]".' },
  { question: '[[Mike|Mike]] [[moved|se mudó]] [[into|a]] [[this house|esta casa]] [[five years ago|hace cinco años]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'True', explanation: '[[True|Verdadero]]. [[The text says|El texto dice]] "[[I remember moving into this house five years ago|recuerdo mudarme a esta casa hace cinco años]]".' },
];

export const UNIT_22_LESSON_4_LISTENING: Exercise[] = QUESTIONS.map((q, i) => ({
  id: `b1-u22-l4-l${i + 1}`,
  type: 'listening',
  level: 'B1',
  topic: 'House & Home',
  difficulty: 'easy',
  transcript: LISTENING_TRANSCRIPT,
  content: { title: LESSON_TITLE, instructions: INSTRUCTIONS, questions: [q] },
  topicName: 'Listening',
}));
