/**
 * C1 Unit 10 — Philosophy, Ethics and the Future
 * Module 10: Philosophy, Ethics and the Future (Synthesis phase)
 * Grammar: Full C1 integration — sentence variety, complex conjunctions, abstract structures
 */

import { Exercise } from '@/lib/exercise-generator';

export const UNIT_TITLE = 'Philosophy, Ethics and the Future';

export const UNIT_10_EXERCISES: Exercise[] = [
  {
    id: 'c1-u10-g1', type: 'multiple-choice', level: 'C1', topic: 'complex-conjunctions', difficulty: 'hard',
    content: { title: '[[Grammar|Gramática]]: [[Complex Conjunctions|Conjunciones complejas]]', instructions: 'Choose the correct complex conjunction.',
      questions: [{ question: '_______ ethics concerns human wellbeing, it intersects necessarily with questions of law, justice and political organisation.', options: ['[[Insofar as|En la medida en que]]', '[[Even if|Incluso si]]', '[[Whereas|Mientras que]]'], correctAnswer: 0, explanation: '"Insofar as" = to the extent that; introduces a limited or qualified condition at C1+.' }] },
    topicName: 'Grammar',
  },
  {
    id: 'c1-u10-g2', type: 'fill-blank', level: 'C1', topic: 'complex-conjunctions', difficulty: 'hard',
    content: { title: '[[Grammar|Gramática]]: [[Complex Conjunctions|Conjunciones complejas]]', instructions: 'Complete with the correct conjunction.',
      questions: [{ question: 'The policy is defensible _______ _______ _______ it reduces overall harm, even if it limits individual freedoms in some cases.', options: ['[[to the extent that|en la medida en que]]', '[[as long as that|siempre que]]', '[[in spite of that|a pesar de que]]'], correctAnswer: 'to the extent that', acceptableAnswers: ['to the extent that', 'inasmuch as', 'insofar as'], explanation: '"To the extent that" / "inasmuch as" = nuanced causal/conditional linking at C1+.' }] },
    topicName: 'Grammar',
  },
  {
    id: 'c1-u10-g3', type: 'multiple-choice', level: 'C1', topic: 'sentence-variety', difficulty: 'hard',
    content: { title: '[[Grammar|Gramática]]: [[Sentence Variety and Rhythm|Variedad de frases y ritmo]]', instructions: 'Choose the sentence that best demonstrates C1 stylistic control.',
      questions: [{ question: 'Which passage best demonstrates C1 sentence variety and rhythm?', options: ['[[Consciousness is complex. We don\'t understand it. Scientists are trying to study it.|La conciencia es compleja. No la entendemos. Los científicos intentan estudiarla.]]', '[[The question is profound. Yet what makes it so? It is, perhaps, the very nature of consciousness itself — that most intimate and irreducible of human experiences — that renders it permanently elusive.|La pregunta es profunda. ¿Pero qué la hace así? Es, quizás, la propia naturaleza de la conciencia — la más íntima e irreducible de las experiencias humanas — lo que la hace permanentemente esquiva.]]', '[[Consciousness is a very complex and interesting topic that scientists are studying very carefully today.|La conciencia es un tema muy complejo e interesante que los científicos estudian hoy muy cuidadosamente.]]'], correctAnswer: 1, explanation: 'Option B varies sentence length, uses rhetorical question, dash for parenthetical, and sophisticated vocabulary.' }] },
    topicName: 'Grammar',
  },
  {
    id: 'c1-u10-g4', type: 'fill-blank', level: 'C1', topic: 'abstract-nominalisation', difficulty: 'hard',
    content: { title: '[[Grammar|Gramática]]: [[Abstract Noun Structures|Estructuras nominales abstractas]]', instructions: 'Complete with the correct nominalised form.',
      questions: [{ question: 'The _______ (inexorable) march of time forces us to confront fundamental questions about purpose and legacy.', options: ['[[inexorable|inexorable]]', '[[inexorably|inexorablemente]]', '[[inexorability|inexorabilidad]]'], correctAnswer: 'inexorable', acceptableAnswers: ['inexorable'], explanation: '"The inexorable march of time" = abstract noun phrase with pre-modifying adjective.' }] },
    topicName: 'Grammar',
  },
  {
    id: 'c1-u10-g5', type: 'multiple-choice', level: 'C1', topic: 'full-review', difficulty: 'hard',
    content: { title: '[[Grammar|Gramática]]: [[Full C1 Grammar Review|Repaso completo de gramática C1]]', instructions: 'Identify the sentence that correctly combines two C1 structures.',
      questions: [{ question: 'Which sentence correctly combines inversion AND a cleft structure?', options: ['[[Not only is it the case that free will remains contested, but what is equally unclear is whether the very concept is coherent.|No solo es el caso de que el libre albedrío sigue siendo controvertido, sino que lo que igualmente no está claro es si el propio concepto es coherente.]]', '[[Free will is not only contested but also unclear if it is coherent.|El libre albedrío no solo es controvertido sino también incierto si es coherente.]]', '[[It is the case that free will is contested. Also the concept is not clear.|Es el caso de que el libre albedrío es controvertido. También el concepto no es claro.]]'], correctAnswer: 0, explanation: '"Not only is it the case that..." = inversion; "what is equally unclear is whether..." = cleft. Both correctly combined.' }] },
    topicName: 'Grammar',
  },
  {
    id: 'c1-u10-v1', type: 'multiple-choice', level: 'C1', topic: 'philosophy-vocabulary', difficulty: 'hard',
    content: { title: '[[Vocabulary|Vocabulario]]: [[Philosophy and Ethics|Filosofía y ética]]', instructions: 'Choose the correct word.',
      questions: [{ question: 'The philosopher argued that human behaviour is governed by _______ — that every event, including every decision, is the inevitable result of prior causes.', options: ['[[determinism|determinismo]]', '[[altruism|altruismo]]', '[[nihilism|nihilismo]]'], correctAnswer: 0, explanation: 'Determinism = the philosophy that all events, including human choices, are determined by prior causes.' }] },
    topicName: 'Vocabulary',
  },
  {
    id: 'c1-u10-v2', type: 'fill-blank', level: 'C1', topic: 'philosophy-vocabulary', difficulty: 'hard',
    content: { title: '[[Vocabulary|Vocabulario]]: [[Philosophy and Ethics|Filosofía y ética]]', instructions: 'Complete the sentence.',
      questions: [{ question: 'The apparent contradiction at the heart of quantum mechanics constitutes a genuine logical _______ — two things that cannot both be true appear to be simultaneously true.', options: ['[[paradox|paradoja]]', '[[axiom|axioma]]', '[[hypothesis|hipótesis]]'], correctAnswer: 'paradox', acceptableAnswers: ['paradox'], explanation: 'Paradox = a statement that seems contradictory but may be true, or contains a real contradiction.' }] },
    topicName: 'Vocabulary',
  },
  {
    id: 'c1-u10-v3', type: 'multiple-choice', level: 'C1', topic: 'philosophy-vocabulary', difficulty: 'hard',
    content: { title: '[[Vocabulary|Vocabulario]]: [[Philosophy and Ethics|Filosofía y ética]]', instructions: 'Choose the best word.',
      questions: [{ question: 'The concept of moral _______ holds that individuals have the right to make their own choices without interference from the state or others.', options: ['[[autonomy|autonomía]]', '[[empathy|empatía]]', '[[pragmatism|pragmatismo]]'], correctAnswer: 0, explanation: 'Autonomy = the right or condition of self-governance; independence in decision-making.' }] },
    topicName: 'Vocabulary',
  },
  {
    id: 'c1-u10-v4', type: 'fill-blank', level: 'C1', topic: 'philosophy-vocabulary', difficulty: 'hard',
    content: { title: '[[Vocabulary|Vocabulario]]: [[Philosophy and Ethics|Filosofía y ética]]', instructions: 'Complete the sentence.',
      questions: [{ question: 'Critics of the government argued that it held power through _______ rather than consent — imposing its will rather than earning it.', options: ['[[coercion|coerción]]', '[[virtue|virtud]]', '[[contingency|contingencia]]'], correctAnswer: 'coercion', acceptableAnswers: ['coercion'], explanation: 'Coercion = the practice of persuading someone to do something using force or threats.' }] },
    topicName: 'Vocabulary',
  },
  {
    id: 'c1-u10-v5', type: 'multiple-choice', level: 'C1', topic: 'philosophy-vocabulary', difficulty: 'hard',
    content: { title: '[[Vocabulary|Vocabulario]]: [[Philosophy and Ethics|Filosofía y ética]]', instructions: 'Choose the correct word.',
      questions: [{ question: 'The novel presents a _______ vision of the future: a world of perfect equality achieved at the cost of all individual freedom.', options: ['[[dystopian|distópica]]', '[[utopian|utópica]]', '[[existential|existencial]]'], correctAnswer: 1, explanation: 'Utopian = relating to an imagined ideal perfect society; dystopian = a frightening, oppressive future society.' }] },
    topicName: 'Vocabulary',
  },
  {
    id: 'c1-u10-r1', type: 'reading-comprehension', level: 'C1', topic: 'philosophy-reading', difficulty: 'hard',
    content: { title: '[[Reading|Lectura]]: [[Philosophy of Mind|Filosofía de la mente]]', instructions: 'Read and answer.',
      questions: [{ question: 'Text: "Consciousness remains, perhaps, the last great mystery — not in the sense of being temporarily unexplained, but in the sense that it may be, in principle, inexplicable through the methods of natural science alone. What is it like to be something? No algorithm, however sophisticated, has yet answered this." What is the author\'s view of consciousness?', options: ['[[it will eventually be fully explained by science|eventualmente será explicada completamente por la ciencia]]', '[[it may be fundamentally beyond scientific explanation|puede estar fundamentalmente más allá de la explicación científica]]', '[[algorithms will soon explain consciousness|los algoritmos pronto explicarán la conciencia]]'], correctAnswer: 1, explanation: '"In principle, inexplicable" = the author suggests consciousness may be permanently beyond scientific methods.' }] },
    topicName: 'Reading',
  },
  {
    id: 'c1-u10-r2', type: 'multiple-choice', level: 'C1', topic: 'philosophy-reading', difficulty: 'hard',
    content: { title: '[[Reading|Lectura]]: [[Ethics and Free Will|Ética y libre albedrío]]', instructions: 'Choose the correct inference.',
      questions: [{ question: 'Text: "Insofar as free will is contingent on the absence of deterministic forces, one might argue that genuine moral responsibility is itself a fiction." What does the author imply?', options: ['[[people are entirely responsible for their choices|las personas son completamente responsables de sus elecciones]]', '[[if determinism is true, moral responsibility may be undermined|si el determinismo es verdadero, la responsabilidad moral puede verse socavada]]', '[[free will and determinism are entirely compatible|el libre albedrío y el determinismo son completamente compatibles]]'], correctAnswer: 1, explanation: '"One might argue" = speculation; "fiction" implies moral responsibility may not be real if determinism holds.' }] },
    topicName: 'Reading',
  },
  {
    id: 'c1-u10-l1', type: 'listening-comprehension', level: 'C1', topic: 'philosophy-listening', difficulty: 'hard',
    content: { title: '[[Listening|Comprensión auditiva]]: [[The Meaning of Life|El sentido de la vida]]', instructions: 'Listen and choose the correct answer.',
      questions: [{ question: 'A philosopher says: "Not only is the question of meaning deeply personal, but what strikes me as equally significant is that it is also deeply social — we derive meaning not in isolation but through our connections to others and to something larger than ourselves." What is the philosopher\'s view?', options: ['[[meaning is purely personal and subjective|el significado es puramente personal y subjetivo]]', '[[meaning is both personal and relational — found through connection|el significado es tanto personal como relacional: se encuentra a través de la conexión]]', '[[social connection is the only source of meaning|la conexión social es la única fuente de significado]]'], correctAnswer: 1, explanation: '"Not only... but what strikes me as equally significant is..." = inversion + cleft; both dimensions (personal AND social) are emphasised.' }] },
    topicName: 'Listening',
  },
  {
    id: 'c1-u10-w1', type: 'writing', level: 'C1', topic: 'reflective-essay', difficulty: 'hard',
    content: { title: '[[Writing|Escritura]]: [[Reflective Essay|Ensayo reflexivo]]', instructions: 'Choose the best sentence to conclude a philosophical essay at C1 level.',
      questions: [{ question: 'Which is the most effective concluding sentence for an essay on the nature of identity?', options: ['[[In conclusion, identity is complicated and hard to define.|En conclusión, la identidad es complicada y difícil de definir.]]', '[[What emerges from this analysis is not a definitive answer but something arguably more valuable: a clearer appreciation of why the question itself matters, and why it will continue to do so.|Lo que surge de este análisis no es una respuesta definitiva sino algo posiblemente más valioso: una comprensión más clara de por qué la propia pregunta importa.]]', '[[So, identity is something everyone thinks about and it is important to understand it.|Así que la identidad es algo en lo que todos piensan y es importante entenderla.]]'], correctAnswer: 1, explanation: '"What emerges from this analysis is..." = cleft; "arguably more valuable" = hedging; "why the question itself matters" = philosophical sophistication.' }] },
    topicName: 'Writing',
  },
  {
    id: 'c1-u10-s1', type: 'multiple-choice', level: 'C1', topic: 'speaking-philosophy', difficulty: 'hard',
    content: { title: '[[Speaking|Expresión oral]]: [[Extended Monologue|Monólogo extendido]]', instructions: 'Choose the most sophisticated way to introduce a philosophical argument in a monologue.',
      questions: [{ question: 'You want to open a 2-minute monologue on whether humans have free will. Which opening is most effective at C1 level?', options: ['[[The question of free will is very old and philosophers have thought about it a lot.|La pregunta del libre albedrío es muy antigua y los filósofos han pensado mucho sobre ella.]]', '[[Few questions have occupied philosophical enquiry more persistently — or more inconclusively — than whether human beings are the genuine authors of their own choices, or whether deterministic forces, however imperceptible, ultimately govern all we do.|Pocas preguntas han ocupado la investigación filosófica de manera más persistente — o más inconclusiva — que si los seres humanos son los verdaderos autores de sus propias elecciones.]]', '[[Free will is when you choose things yourself. It\'s complicated.|El libre albedrío es cuando tú mismo eliges las cosas. Es complicado.]]'], correctAnswer: 1, explanation: '"Few questions have occupied... more persistently" = inversion-adjacent structure; "however imperceptible" = hedging; highly sophisticated C1 academic register.' }] },
    topicName: 'Speaking',
  },
];
