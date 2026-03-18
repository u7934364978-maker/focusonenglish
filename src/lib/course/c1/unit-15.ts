/**
 * C1 Unit 15 — Sport, Competition and Performance
 * Module 3: Performance and Expression
 * Grammar: Emphatic do/did and fronting structures
 */

import { Exercise } from '@/lib/exercise-generator';

export const UNIT_TITLE = 'Sport, Competition and Performance';

export const UNIT_15_EXERCISES: Exercise[] = [
  {
    id: 'c1-u15-g1', type: 'multiple-choice', level: 'C1', topic: 'emphatic-do-fronting', difficulty: 'hard',
    content: { title: '[[Grammar|Gramática]]: [[Emphatic Do/Did|Do/did enfático]]', instructions: 'Choose the correct emphatic form.',
      questions: [{ question: 'You want to strongly emphasise that she trained for the marathon. Which sentence is correct?', options: ['[[She did train incredibly hard for that marathon, whatever anyone might say.|Sí que entrenó muchísimo para ese maratón, digan lo que digan.]]', '[[She trained do incredibly hard for that marathon, whatever anyone might say.|Sí que entrenó muchísimo para ese maratón, digan lo que digan.]]', '[[She did trained incredibly hard for that marathon, whatever anyone might say.|Sí que entrenó muchísimo para ese maratón, digan lo que digan.]]'], correctAnswer: 0, explanation: '"Did + bare infinitive" = emphatic auxiliary to add emphasis or contradict a previous statement.' }] },
    topicName: 'Grammar',
  },
  {
    id: 'c1-u15-g2', type: 'fill-blank', level: 'C1', topic: 'emphatic-do-fronting', difficulty: 'hard',
    content: { title: '[[Grammar|Gramática]]: [[Fronting|Frontalización]]', instructions: 'Complete using a fronting structure.',
      questions: [{ question: '_______ through years of sacrifice and relentless training _______ she achieve her lifelong ambition of competing at the Olympics.', options: ['[[Only / did|Solo / consiguió]]', '[[Only / she did|Solo / ella consiguió]]', '[[Just / did|Solo / consiguió]]'], correctAnswer: 'Only / did', acceptableAnswers: ['Only / did'], explanation: '"Only + adverbial phrase + inversion (did + subject + infinitive)" = fronting for emphasis.' }] },
    topicName: 'Grammar',
  },
  {
    id: 'c1-u15-g3', type: 'multiple-choice', level: 'C1', topic: 'emphatic-do-fronting', difficulty: 'hard',
    content: { title: '[[Grammar|Gramática]]: [[Fronting|Frontalización]]', instructions: 'Choose the correct fronted sentence.',
      questions: [{ question: 'You want to front the object "His composure" for emphasis: "His composure under pressure set him apart from other athletes."', options: ['[[His composure, it was under pressure, which set him apart from other athletes.|Su compostura, fue bajo presión, lo que le distinguió de otros atletas.]]', '[[It was his composure under pressure that set him apart from the other athletes.|Fue su compostura bajo presión lo que le distinguió de los demás atletas.]]', '[[Under pressure his composure that set him apart from other athletes was.|Bajo presión su compostura que le distinguió de otros atletas era.]]'], correctAnswer: 1, explanation: '"It was + NP + that..." = cleft sentence used to front and emphasise any element of the sentence.' }] },
    topicName: 'Grammar',
  },
  {
    id: 'c1-u15-g4', type: 'fill-blank', level: 'C1', topic: 'emphatic-do-fronting', difficulty: 'hard',
    content: { title: '[[Grammar|Gramática]]: [[Emphatic Do/Did|Do/did enfático]]', instructions: 'Complete the sentence.',
      questions: [{ question: 'The coach admitted he had doubted the team, but added: "They _______ prove me wrong in the most spectacular fashion."', options: ['[[did|sí que]]', '[[do|sí que]]', '[[have|han]]'], correctAnswer: 'did', acceptableAnswers: ['did'], explanation: '"Did + bare infinitive" in past context = emphatic auxiliary, stressing that the action actually happened.' }] },
    topicName: 'Grammar',
  },
  {
    id: 'c1-u15-g5', type: 'multiple-choice', level: 'C1', topic: 'emphatic-do-fronting', difficulty: 'hard',
    content: { title: '[[Grammar|Gramática]]: [[Fronting and Inversion|Frontalización e inversión]]', instructions: 'Choose the correct sentence.',
      questions: [{ question: 'Which sentence correctly uses fronting with inversion?', options: ['[[Rarely before had a team recovered from such a deficit to win a championship in overtime.|Pocas veces antes un equipo había remontado un déficit tan grande para ganar un campeonato en tiempo extra.]]', '[[Rarely a team had recovered before from such a deficit to win a championship in overtime.|Pocas veces un equipo había remontado antes de tal déficit para ganar un campeonato en tiempo extra.]]', '[[A team had rarely recovered before from such a deficit in order to win a championship in overtime.|Un equipo había remontado pocas veces antes de tal déficit para ganar un campeonato en tiempo extra.]]'], correctAnswer: 0, explanation: '"Rarely + inversion (had + subject + past participle)" = correct negative adverbial fronting structure.' }] },
    topicName: 'Grammar',
  },
  {
    id: 'c1-u15-v1', type: 'multiple-choice', level: 'C1', topic: 'sport-vocabulary', difficulty: 'hard',
    content: { title: '[[Vocabulary|Vocabulario]]: [[Sport and Performance|Deporte y rendimiento]]', instructions: 'Choose the correct word.',
      questions: [{ question: 'Athletes at the elite level often work with psychologists to develop _______ — the ability to maintain focus, manage pressure and perform consistently regardless of external circumstances.', options: ['[[mental resilience|resiliencia mental]]', '[[physical endurance|resistencia física]]', '[[tactical awareness|conciencia táctica]]'], correctAnswer: 0, explanation: '"Mental resilience" = the psychological capacity to cope with pressure and adversity and return to high performance.' }] },
    topicName: 'Vocabulary',
  },
  {
    id: 'c1-u15-v2', type: 'fill-blank', level: 'C1', topic: 'sport-vocabulary', difficulty: 'hard',
    content: { title: '[[Vocabulary|Vocabulario]]: [[Sport and Performance|Deporte y rendimiento]]', instructions: 'Complete the sentence.',
      questions: [{ question: 'The concept of _______ — the optimal state of total absorption and effortless performance — is central to sports psychology and peak performance research.', options: ['[[flow|estado de flujo]]', '[[momentum|impulso]]', '[[drive|impulso/motivación]]'], correctAnswer: 'flow', acceptableAnswers: ['flow'], explanation: '"Flow" (Csikszentmihalyi) = a state of complete focus and effortless performance, often described as "being in the zone".' }] },
    topicName: 'Vocabulary',
  },
  {
    id: 'c1-u15-v3', type: 'multiple-choice', level: 'C1', topic: 'sport-vocabulary', difficulty: 'hard',
    content: { title: '[[Vocabulary|Vocabulario]]: [[Sport and Society|Deporte y sociedad]]', instructions: 'Choose the correct word.',
      questions: [{ question: 'Many argue that elite sport has become increasingly _______, with enormous financial disparities between the wealthiest clubs and the rest distorting competition.', options: ['[[commercialised|comercializado]]', '[[politicised|politizado]]', '[[professionalised|profesionalizado]]'], correctAnswer: 0, explanation: '"Commercialised" = organised or managed in a way that prioritises profit and commercial interest above other values.' }] },
    topicName: 'Vocabulary',
  },
  {
    id: 'c1-u15-v4', type: 'multiple-choice', level: 'C1', topic: 'sport-vocabulary', difficulty: 'hard',
    content: { title: '[[Vocabulary|Vocabulario]]: [[Sport and Performance|Deporte y rendimiento]]', instructions: 'Choose the best option.',
      questions: [{ question: 'The athlete credited her success to the _______ of her training regime — every session, every meal and every night\'s sleep was carefully planned and monitored.', options: ['[[rigour|rigor]]', '[[discipline|disciplina]]', '[[dedication|dedicación]]'], correctAnswer: 0, explanation: '"Rigour" = extreme thoroughness and precision; in the context of training, it implies systematic, disciplined exactness.' }] },
    topicName: 'Vocabulary',
  },
  {
    id: 'c1-u15-v5', type: 'fill-blank', level: 'C1', topic: 'sport-vocabulary', difficulty: 'hard',
    content: { title: '[[Vocabulary|Vocabulario]]: [[Sport and Society|Deporte y sociedad]]', instructions: 'Complete with the correct word.',
      questions: [{ question: 'The governing body took decisive action to protect the _______ of the competition after evidence emerged that several officials had accepted payments to influence match results.', options: ['[[integrity|integridad]]', '[[prestige|prestigio]]', '[[credibility|credibilidad]]'], correctAnswer: 'integrity', acceptableAnswers: ['integrity'], explanation: '"Integrity" of a competition = its honesty and fairness; the quality of being free from corruption or manipulation.' }] },
    topicName: 'Vocabulary',
  },
  {
    id: 'c1-u15-r1', type: 'reading-comprehension', level: 'C1', topic: 'sport-reading', difficulty: 'hard',
    content: { title: '[[Reading|Lectura]]: [[Elite Sport|Deporte de élite]]', instructions: 'Read the extract and answer the question.',
      questions: [{ question: 'Text: "The pursuit of sporting excellence increasingly resembles an arms race, with wealthier nations and clubs investing in marginal gains — those incremental improvements in nutrition, sleep, equipment and psychology that collectively make the difference between winning and losing at the highest level. Critics argue this trend entrenches inequality, favouring those with resources over those with raw talent."\n\nWhat is the author\'s main concern?', options: ['[[That athletes are investing too much time in nutrition and psychology at the expense of developing natural athletic talent.|Que los atletas invierten demasiado tiempo en nutrición y psicología a expensas del desarrollo del talento atlético natural.]]', '[[That the increasing financial investment in marginal gains gives wealthier nations an unfair advantage over less resourced competitors.|Que la creciente inversión financiera en ganancias marginales da a las naciones más ricas una ventaja injusta sobre los competidores con menos recursos.]]', '[[That the pursuit of marginal gains has made elite sport less entertaining and more scientific, reducing its appeal to spectators.|Que la búsqueda de ganancias marginales ha hecho que el deporte de élite sea menos entretenido y más científico, reduciendo su atractivo para los espectadores.]]'], correctAnswer: 1, explanation: 'The "arms race" metaphor and the phrase "entrenches inequality" show the author is concerned about financial inequality in elite sport.' }] },
    topicName: 'Reading',
  },
  {
    id: 'c1-u15-r2', type: 'multiple-choice', level: 'C1', topic: 'sport-reading', difficulty: 'hard',
    content: { title: '[[Reading|Lectura]]: [[Sport Psychology|Psicología deportiva]]', instructions: 'Choose the best answer.',
      questions: [{ question: 'Text: "Pressure is not an external force imposed on athletes — it is, fundamentally, a perception. What separates elite performers from the rest is not the absence of anxiety, but the ability to reframe it as energy and excitement rather than threat and paralysis."\n\nAccording to the text, what distinguishes elite athletes from others?', options: ['[[Elite athletes experience less anxiety than others because their training has conditioned them to suppress emotional responses under competitive stress.|Los atletas de élite experimentan menos ansiedad que los demás porque su entrenamiento les ha condicionado a suprimir las respuestas emocionales bajo estrés competitivo.]]', '[[Elite athletes manage pressure not by eliminating anxiety but by interpreting and redirecting it as a positive source of energy.|Los atletas de élite gestionan la presión no eliminando la ansiedad sino interpretándola y redireccionándola como una fuente positiva de energía.]]', '[[Elite athletes have trained their minds to remove all anxiety and focus exclusively on the technical and physical aspects of performance.|Los atletas de élite han entrenado sus mentes para eliminar toda ansiedad y centrarse exclusivamente en los aspectos técnicos y físicos del rendimiento.]]'], correctAnswer: 1, explanation: 'The text says elite performers "reframe anxiety as energy" — not that they feel less of it.' }] },
    topicName: 'Reading',
  },
  {
    id: 'c1-u15-l1', type: 'listening-comprehension', level: 'C1', topic: 'sport-listening', difficulty: 'hard',
    content: { title: '[[Listening|Comprensión auditiva]]: [[Sport and Society|Deporte y sociedad]]', instructions: 'Listen and choose the correct answer.',
      questions: [{ question: 'A journalist says: "The problem with the narrative of sporting meritocracy is that it implies a level playing field that has never existed. Access to coaching, nutrition, facilities and recovery support varies enormously, and pretending otherwise obscures structural disadvantage behind the language of individual effort."\n\nWhat argument is the journalist making?', options: ['[[Individual effort and personal dedication are the most important factors determining success in elite sport, regardless of background.|El esfuerzo individual y la dedicación personal son los factores más importantes que determinan el éxito en el deporte de élite, independientemente del origen.]]', '[[The idea that sport rewards talent and effort equally is misleading, because access to resources varies widely and creates structural disadvantages.|La idea de que el deporte recompensa igualmente el talento y el esfuerzo es engañosa, porque el acceso a los recursos varía ampliamente y crea desventajas estructurales.]]', '[[Sporting success is primarily determined by access to facilities and coaching rather than by any innate talent or individual psychological resilience.|El éxito deportivo está determinado principalmente por el acceso a instalaciones y entrenamiento, más que por ningún talento innato o resiliencia psicológica individual.]]'], correctAnswer: 1, explanation: 'The journalist argues that "meritocracy" hides structural inequality — access to resources, not just effort, determines outcomes.' }] },
    topicName: 'Listening',
  },
  {
    id: 'c1-u15-w1', type: 'multiple-choice', level: 'C1', topic: 'argumentative-writing', difficulty: 'hard',
    content: { title: '[[Writing|Escritura]]: [[Argumentative Essay|Ensayo argumentativo]]', instructions: 'Choose the best concluding paragraph for an essay arguing that sport builds character.',
      questions: [{ question: 'Essay title: "Competitive sport builds character. Discuss." Choose the most effective conclusion:', options: ['[[In conclusion, the relationship between competitive sport and character development is more nuanced than a simple causal claim allows. Sport can indeed foster resilience, discipline and teamwork — but only when embedded in an environment that prioritises these values over winning at all costs. The character it builds depends entirely on the culture it creates.|En conclusión, la relación entre el deporte competitivo y el desarrollo del carácter es más matizada de lo que permite una simple afirmación causal. El deporte puede efectivamente fomentar la resiliencia, la disciplina y el trabajo en equipo — pero solo cuando está integrado en un entorno que prioriza estos valores por encima de ganar a cualquier precio.]]', '[[In conclusion, sport is very good for building character and everyone should do sport. It helps you become a better person and teaches you important life skills. Therefore, sport should definitely be compulsory in schools.|En conclusión, el deporte es muy bueno para el desarrollo del carácter y todo el mundo debería practicar deporte. Te ayuda a convertirte en una persona mejor y te enseña habilidades importantes para la vida. Por ello, el deporte debería ser obligatorio en los colegios.]]', '[[To conclude, whether sport builds character or not is a very complicated question that many people have different opinions about. Some think it does and some think it does not. It is difficult to say which view is correct because it depends on many factors.|Para concluir, si el deporte desarrolla el carácter o no es una pregunta muy complicada sobre la que mucha gente tiene opiniones diferentes. Unos creen que sí y otros que no. Es difícil decir cuál es la opinión correcta porque depende de muchos factores.]]'], correctAnswer: 0, explanation: 'Option A restates the thesis with nuance, uses a conditional structure and ends with a sophisticated qualifying statement — the hallmarks of a C1 conclusion.' }] },
    topicName: 'Writing',
  },
  {
    id: 'c1-u15-s1', type: 'multiple-choice', level: 'C1', topic: 'speaking-sport', difficulty: 'hard',
    content: { title: '[[Speaking|Expresión oral]]: [[Discussing Sport|Hablar sobre el deporte]]', instructions: 'Choose the most appropriate C1 response.',
      questions: [{ question: 'A moderator asks: "Should performance-enhancing drugs be legalised in sport?" Choose the most balanced and sophisticated response:',
        options: [
          '[[No, performance-enhancing drugs should never be allowed in sport because it would be unfair and dangerous. Sport should be about natural talent and training, not about who can take the most drugs. Legalising them would destroy sport completely.|No, las drogas mejoradoras del rendimiento nunca deberían permitirse en el deporte porque sería injusto y peligroso. El deporte debería ser sobre talento natural y entrenamiento, no sobre quién puede tomar más drogas. Legalizarlas destruiría el deporte por completo.]]',
          '[[The case for legalisation rests on two arguments: transparency and harm reduction, since a regulated environment might be safer than the current covert use. However, this must be weighed against the risk of entrenching inequality further, given that wealthier athletes would have access to superior substances. Ultimately, the question is whether legalisation solves the problem or merely legitimises it.|El caso a favor de la legalización se sustenta en dos argumentos: transparencia y reducción del daño, ya que un entorno regulado podría ser más seguro que el uso encubierto actual. Sin embargo, esto debe sopesarse frente al riesgo de afianzar aún más la desigualdad, dado que los atletas más ricos tendrían acceso a sustancias superiores.]]',
          '[[I think drugs should be legalised because athletes take them anyway and it would be better to make it legal so everyone knows about it. This way it would be fairer and safer for everyone involved in sport.|Creo que las drogas deberían ser legalizadas porque los atletas las toman de todas formas y sería mejor hacerlo legal para que todos lo sepan. De esta manera sería más justo y seguro para todos los involucrados en el deporte.]]',
        ],
        correctAnswer: 1,
        explanation: 'Option B presents two arguments for, identifies a key counterargument, and ends with a philosophical question — demonstrating C1 balanced discussion skills.',
      }] },
    topicName: 'Speaking',
  },
];
