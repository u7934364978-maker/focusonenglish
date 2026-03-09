/**
 * Unidad 42 — Lección 4: Comprensión auditiva (Present Perfect: Ever & Never)
 * 15 actividades: 1 audio + 15 preguntas
 */

import { Exercise } from '@/lib/exercise-generator';

const LESSON_TITLE = '[[Listening|Comprensión auditiva]]';
const LISTENING_TRANSCRIPT = `[[Hi|Hola]] [[everyone|todos]]! [[I|Yo]] [[asked|pregunté]] [[my|mis]] [[friends|amigos]] [[about|sobre]] [[their|sus]] [[experiences|experiencias]]. [[Have|¿]] [[you|tú]] [[ever|alguna vez]] [[been|estado]] [[to|a]] [[Japan|Japón]]? [[Maria|María]] [[said|dijo]] [[she|ella]] [[has|ha]] [[never|nunca]] [[been|estado]] [[there|allí]] [[but|pero]] [[she|ella]] [[has|ha]] [[tried|probado]] [[sushi|sushi]] [[many|muchas]] [[times|veces]]. [[Tom|Tom]] [[has|ha]] [[ridden|montado]] [[a|una]] [[motorcycle|motocicleta]] [[and|y]] [[he|él]] [[loved|le encantó]] [[it|]]. [[Sarah|Sarah]] [[has|ha]] [[never|nunca]] [[travelled|viajado]] [[alone|sola]] [[abroad|al extranjero]]. [[She|Ella]] [[has|ha]] [[been|estado]] [[on|en]] [[a|un]] [[cruise|crucero]] [[with|con]] [[her|su]] [[family|familia]] [[though|aunque]]. [[We|Nosotros]] [[all|todos]] [[have|tenemos]] [[different|diferentes]] [[experiences|experiencias]] [[in|en]] [[life|la vida]].`;

const INSTRUCTIONS = 'Escucha el audio de abajo. Puedes leer la transcripción después de escuchar. Después responde las preguntas.';

const QUESTIONS = [
  { question: '[[What|Qué]] [[did|hizo]] [[the|el]] [[speaker|hablante]] [[ask|preguntar]] [[his|sus]] [[friends|amigos]]?', options: ['[[About work|Sobre trabajo]]', '[[About their experiences|Sobre sus experiencias]]', '[[About food|Sobre comida]]', '[[About school|Sobre escuela]]'], correctAnswer: 1, explanation: '[[He|Él]] [[asked about their experiences|preguntó sobre sus experiencias]].' },
  { question: '[[Has|Ha]] [[Maria|María]] ____ ____ ____ ____?', options: ['[[been to Japan|estado en Japón]]', '[[never been to Japan|nunca estado en Japón]]', '[[lived in Japan|vivido en Japón]]', '[[hated Japan|odiado Japón]]'], correctAnswer: 1, explanation: '[[She|Ella]] [[said|dijo]] "[[she has never been there|nunca ha estado allí]]".' },
  { question: '[[Has|Ha]] [[Maria|María]] ____ ____ ____ ____?', options: ['[[tried sushi|probado sushi]]', '[[never tried sushi|nunca probado sushi]]', '[[hated sushi|odiado sushi]]', '[[cooked sushi|cocinado sushi]]'], correctAnswer: 0, explanation: '[[She|Ella]] [[has tried sushi many times|ha probado sushi muchas veces]].' },
  { question: '[[Has|Ha]] [[Tom|Tom]] ____ ____ ____ ____ ____?', options: ['[[ridden a motorcycle|montado una motocicleta]]', '[[never ridden a motorcycle|nunca montado una motocicleta]]', '[[bought a motorcycle|comprado una motocicleta]]', '[[sold a motorcycle|vendido una motocicleta]]'], correctAnswer: 0, explanation: '[[He|Él]] [[has ridden a motorcycle|ha montado una motocicleta]].' },
  { question: '[[Did|Le]] [[Tom|Tom]] ____ ____ ____ ____?', options: ['[[love it|encantar]]', '[[hate it|odiar]]', '[[forget it|olvidar]]', '[[sell it|vender]]'], correctAnswer: 0, explanation: '[[He|Él]] [[loved it|le encantó]].' },
  { question: '[[Has|Ha]] [[Sarah|Sarah]] ____ ____ ____ ____ ____ ____?', options: ['[[travelled alone abroad|viajado sola al extranjero]]', '[[never travelled alone abroad|nunca viajado sola al extranjero]]', '[[lived alone abroad|vivido sola al extranjero]]', '[[worked alone abroad|trabajado sola al extranjero]]'], correctAnswer: 1, explanation: '[[She|Ella]] [[has never travelled alone abroad|nunca ha viajado sola al extranjero]].' },
  { question: '[[Has|Ha]] [[Sarah|Sarah]] ____ ____ ____ ____ ____ ____?', options: ['[[been on a cruise|estado en un crucero]]', '[[never been on a cruise|nunca estado en un crucero]]', '[[owned a cruise|poseído un crucero]]', '[[built a cruise|construido un crucero]]'], correctAnswer: 0, explanation: '[[She|Ella]] [[has been on a cruise with her family|ha estado en un crucero con su familia]].' },
  { question: '[[Who|Con quién]] [[did|fue]] [[Sarah|Sarah]] ____ ____ ____ ____?', options: ['[[on the cruise with|en el crucero con]] [[her family|su familia]]', '[[alone|sola]]', '[[with Tom|con Tom]]', '[[with Maria|con María]]'], correctAnswer: 0, explanation: '[[She|Ella]] [[went on a cruise with her family|fue en un crucero con su familia]].' },
  { question: '[[The|El]] [[main|principal]] [[topic|tema]] [[of|del]] [[audio|audio]] [[is|es]]?', options: ['[[Food|Comida]]', '[[Experiences|Experiencias]] [[with|con]] [[ever|ever]] [[and|y]] [[never|never]]', '[[Work|Trabajo]]', '[[School|Escuela]]'], correctAnswer: 1, explanation: '[[The|El]] [[audio|audio]] [[is|es]] [[about|sobre]] [[experiences|experiencias]] [[with ever and never|con ever y never]].' },
  { question: '[[How many|Cuántas]] [[people|personas]] [[does|menciona]] [[the|el]] [[speaker|hablante]] [[mention|mencionar]]?', options: ['[[One|Una]]', '[[Two|Dos]]', '[[Three|Tres]]', '[[Four|Cuatro]]'], correctAnswer: 2, explanation: '[[Maria|María]], [[Tom|Tom]] [[and|y]] [[Sarah|Sarah]].' },
  { question: '[[We all|Todos]] ____ ____ ____ ____ ____ ____ [[in life|en la vida]].', options: ['[[have different experiences|tenemos diferentes experiencias]]', '[[have the same experiences|tenemos las mismas experiencias]]', '[[have no experiences|no tenemos experiencias]]', '[[hate experiences|odiamos las experiencias]]'], correctAnswer: 0, explanation: '[[The|El]] [[text|texto]] [[says|dice]] "[[We all have different experiences in life|Todos tenemos diferentes experiencias en la vida]]".' },
  { question: '[[Ever|Ever]] [[in|en]] [[questions|preguntas]] [[means|significa]]?', options: ['[[At any time|En algún momento]]', '[[Never|Nunca]]', '[[Always|Siempre]]', '[[Sometimes|A veces]]'], correctAnswer: 0, explanation: '[[Ever|Ever]] = [[at any time|en algún momento]].' },
  { question: '[[Never|Never]] [[means|significa]]?', options: ['[[Not at any time|En ningún momento]]', '[[Always|Siempre]]', '[[Sometimes|A veces]]', '[[Often|A menudo]]'], correctAnswer: 0, explanation: '[[Never|Never]] = [[not at any time|en ningún momento]].' },
  { question: '[[The|El]] [[speaker|hablante]] ____ ____ ____ ____ ____ ____ ____.', options: ['[[uses Present Perfect with ever and never|usa Presente Perfecto con ever y never]]', '[[uses only Past Simple|usa solo Pasado Simple]]', '[[uses only Future|usa solo Futuro]]', '[[uses no grammar|no usa gramática]]'], correctAnswer: 0, explanation: '[[Present Perfect|Presente Perfecto]] [[with|con]] [[ever|ever]] [[and|y]] [[never|never]].' },
  { question: '[[What|Qué]] [[can|podemos]] [[we|]] [[say|decir]] [[about|sobre]] [[Sarah|Sarah]]?', options: ['[[She travelled alone many times|Ella viajó sola muchas veces]]', '[[She never travelled alone but has been on a cruise|Ella nunca viajó sola pero ha estado en un crucero]]', '[[She never left her country|Ella nunca salió de su país]]', '[[She hated travelling|Ella odió viajar]]'], correctAnswer: 1, explanation: '[[She|Ella]] [[has never travelled alone|nunca ha viajado sola]] [[but has been on a cruise|pero ha estado en un crucero]].' },
];

export const UNIT_42_LESSON_4_LISTENING: Exercise[] = QUESTIONS.map((q, i) => ({
  id: `a2-u42-l4-l${i + 1}`,
  type: 'listening',
  level: 'A2',
  topic: 'Present Perfect: Ever & Never',
  difficulty: 'easy',
  transcript: LISTENING_TRANSCRIPT,
  content: { title: LESSON_TITLE, instructions: INSTRUCTIONS, questions: [q] },
  topicName: 'Listening',
}));
