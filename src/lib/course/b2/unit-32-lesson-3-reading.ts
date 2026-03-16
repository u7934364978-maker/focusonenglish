/**
 * Unidad 32 B2 — Lección 3: Comprensión lectora (Environment extended)
 * 13 preguntas (B2: texto sobre medio ambiente y cuantificadores)
 */

import { Exercise } from '@/lib/exercise-generator';

const LESSON_TITLE = '[[Reading|Comprensión lectora]]';
const READING_TRANSCRIPT = `[[All|Todos]] [[the forests|los bosques]] [[in the region|de la región]] [[are|están]] [[under threat|bajo amenaza]] [[from|por]] [[deforestation|deforestación]]. [[Most of|La mayoría de]] [[the species|las especies]] [[that live|que viven]] [[there|allí]] [[are|están]] [[endangered|en peligro]] [[and|y]] [[each|cada]] [[ecosystem|ecosistema]] [[has|tiene]] [[its own|su propia]] [[delicate balance|balance delicado]]. [[Every year|Cada año]] [[we|nosotros]] [[lose|perdemos]] [[more|más]] [[biodiversity|biodiversidad]] [[and|y]] [[both|ambos]] [[governments|gobiernos]] [[and|y]] [[NGOs|ONGs]] [[are|están]] [[working|trabajando]] [[to raise awareness|para aumentar la conciencia]] [[about|sobre]] [[the|la]] [[climate crisis|crisis climática]]. [[The|La]] [[greenhouse gases|gases de efecto invernadero]] [[pose|plantean]] [[a|una]] [[serious threat|amenaza seria]] [[to|a]] [[potable water|agua potable]] [[sources|fuentes]] [[and|y]] [[most of|la mayoría de]] [[the plastic|el plástico]] [[in the ocean|del océano]] [[comes from|proviene de]] [[land|tierra]].`;

const INSTRUCTIONS = 'Lee el texto sobre el medio ambiente. Después responde las preguntas.';

const QUESTIONS = [
  { question: '[[What|Qué]] [[threatens|amenaza]] [[all the forests|todos los bosques]] [[in the region|de la región]]?', options: ['[[Deforestation|Deforestación]]', '[[Reforestation|Reforestación]]', '[[Conservation|Conservación]]'], correctAnswer: 0, explanation: '[[The text says|El texto dice]] "[[all the forests in the region are under threat from deforestation|todos los bosques de la región están bajo amenaza por deforestación]]".' },
  { question: '[[What|Qué]] [[is the status|es el estado]] [[of most species|de la mayoría de especies]] [[there|allí]]?', options: ['[[They are endangered|Están en peligro]]', '[[They are extinct|Están extintas]]', '[[They are safe|Están seguras]]'], correctAnswer: 0, explanation: '[[The text says|El texto dice]] "[[most of the species that live there are endangered|la mayoría de especies que viven allí están en peligro]]".' },
  { question: '[[What|Qué]] [[does each ecosystem have|tiene cada ecosistema]]?', options: ['[[Its own delicate balance|Su propio balance delicado]]', '[[No species|Ninguna especie]]', '[[No threat|Ninguna amenaza]]'], correctAnswer: 0, explanation: '[[The text says|El texto dice]] "[[each ecosystem has its own delicate balance|cada ecosistema tiene su propia bala delicada]]".' },
  { question: '[[What|Qué]] [[do we lose every year|perdemos cada año]]?', options: ['[[More biodiversity|Más biodiversidad]]', '[[More forests|Más bosques]]', '[[More water|Más agua]]'], correctAnswer: 0, explanation: '[[The text says|El texto dice]] "[[every year we lose more biodiversity|cada año perdemos más biodiversidad]]".' },
  { question: '[[Who|Quién]] [[is working to raise awareness|está trabajando para aumentar la conciencia]]?', options: ['[[Both governments and NGOs|Tanto gobiernos como ONGs]]', '[[Only governments|Solo gobiernos]]', '[[Only NGOs|Solo ONGs]]'], correctAnswer: 0, explanation: '[[The text says|El texto dice]] "[[both governments and NGOs are working to raise awareness|tanto gobiernos como ONGs están trabajando para aumentar la conciencia]]".' },
  { question: '[[What|Qué]] [[do greenhouse gases pose|plantean los gases de efecto invernadero]]?', options: ['[[A serious threat to potable water sources|Una amenaza seria a las fuentes de agua potable]]', '[[No threat|Ninguna amenaza]]', '[[A solution|Una solución]]'], correctAnswer: 0, explanation: '[[The text says|El texto dice]] "[[greenhouse gases pose a serious threat to potable water sources|los gases de efecto invernadero plantean una amenaza seria a las fuentes de agua potable]]".' },
  { question: '[[Where|De dónde]] [[does most of the plastic in the ocean come|proviene la mayoría del plástico del océano]]?', options: ['[[From land|De tierra]]', '[[From ships|De barcos]]', '[[From fish|De peces]]'], correctAnswer: 0, explanation: '[[The text says|El texto dice]] "[[most of the plastic in the ocean comes from land|la mayoría del plástico del océano proviene de tierra]]".' },
  { question: '[[What|Cuál]] [[is|es]] [[the main idea|la idea principal]] [[of the text|del texto]]?', options: ['[[Environmental threats and efforts to address them|Amenazas ambientales y esfuerzos para abordarlas]]', '[[Forests are safe|Los bosques están seguros]]', '[[Species are not endangered|Las especies no están en peligro]]'], correctAnswer: 0, explanation: '[[The text|El texto]] [[describes|describe]] [[threats|amenazas]] [[and|y]] [[efforts|esfuerzos]].' },
  { question: '[[Which quantifier|Qué cuantificador]] [[is used for|se usa para]] [[100%|100%]]?', options: ['[[All|All]]', '[[Most|Most]]', '[[Each|Each]]'], correctAnswer: 0, explanation: '[[All = 100%|All = 100%]].' },
  { question: '[[What|Qué]] [[vocabulary|vocabulario]] [[is key|es clave]] [[in this text|en este texto]]?', options: ['[[biodiversity|biodiversidad]], [[deforestation|deforestación]], [[greenhouse gases|gases de efecto invernadero]], [[endangered|en peligro]]', '[[sport|deporte]], [[music|música]]', '[[food|comida]], [[weather|tiempo]]'], correctAnswer: 0, explanation: '[[The text|El texto]] [[focuses on|se centra en]] [[environment vocabulary|vocabulario de medio ambiente]].' },
  { question: '[[All species|Todas las especies]] [[are extinct|están extintas]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 1, explanation: '[[False|Falso]]. [[Most are endangered|La mayoría están en peligro]], [[not extinct|no extintas]].' },
  { question: '[[Both|Ambos]] ____ [[work together|trabajan juntos]] [[on|en]] [[the project|el proyecto]].', options: ['[[governments and NGOs|gobiernos y ONGs]]', '[[forests and oceans|bosques y océanos]]', '[[species and ecosystems|especies y ecosistemas]]'], correctAnswer: 0, explanation: '[[The text says|El texto dice]] "[[both governments and NGOs are working|tanto gobiernos como ONGs están trabajando]]".' },
  { question: '[[What|Qué]] [[can we infer|podemos inferir]] [[about the environment|sobre el medio ambiente]]?', options: ['[[It faces serious challenges but there are efforts to address them|Enfrenta serios desafíos pero hay esfuerzos para abordarlos]]', '[[Everything is fine|Todo está bien]]', '[[No one cares|A nadie le importa]]'], correctAnswer: 0, explanation: '[[The text|El texto]] [[shows|muestra]] [[threats|amenazas]] [[and|y]] [[efforts|esfuerzos]].' },
];

export const UNIT_32_LESSON_3_READING: Exercise[] = QUESTIONS.map((q, i) => ({
  id: `b2-u32-l3-r${i + 1}`,
  type: 'reading',
  level: 'B2',
  topic: 'Environment (extended)',
  difficulty: 'medium',
  transcript: READING_TRANSCRIPT,
  content: { title: LESSON_TITLE, instructions: INSTRUCTIONS, questions: [q] },
  topicName: 'Reading',
}));
