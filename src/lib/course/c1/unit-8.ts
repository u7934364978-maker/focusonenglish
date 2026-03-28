/**
 * C1 Unit 8 — Global Issues
 * Module 8: Global Issues
 * Grammar: Fronting, topicalisation, contrast, speculation
 */

import { Exercise } from '@/lib/exercise-generator';

export const UNIT_TITLE = 'Global Issues';

export const UNIT_8_EXERCISES: Exercise[] = [
  {
    id: 'c1-u8-g1', type: 'multiple-choice', level: 'C1', topic: 'fronting', difficulty: 'hard',
    content: { title: '[[Grammar|Gramática]]: [[Fronting and Topicalisation|Fronting y tematización]]', instructions: 'Choose the sentence that uses fronting correctly.',
      questions: [{ question: 'Which sentence correctly uses fronting for emphasis?', options: ['[[These challenges, many communities have faced them for decades.|Estos desafíos, muchas comunidades los han afrontado durante décadas.]]', '[[Many communities have faced for decades these challenges.|Muchas comunidades han afrontado durante décadas estos desafíos.]]', '[[For decades, these challenges have been faced by many communities.|Durante décadas, estos desafíos han sido afrontados por muchas comunidades.]]'], correctAnswer: 0, explanation: 'Left dislocation: the direct object is fronted and picked up again with *them* (*These challenges, … faced them*). Without *them*, *faced* would lack an object. Option C is grammatical but fronts the adverbial *For decades* (plus passive), not object topicalisation. Option B misplaces the object after a long adverbial.' }] },
    topicName: 'Grammar',
  },
  {
    id: 'c1-u8-g2', type: 'fill-blank', level: 'C1', topic: 'contrast-structures', difficulty: 'hard',
    content: { title: '[[Grammar|Gramática]]: [[Contrast Structures|Estructuras de contraste]]', instructions: 'Complete with the correct contrast linker.',
      questions: [{ question: '_______ developed nations have largely recovered from the crisis, many emerging economies continue to struggle.', options: ['[[Whereas|Mientras que]]', '[[Despite|A pesar de que]]', '[[Although|Aunque]]'], correctAnswer: 'Whereas', acceptableAnswers: ['Whereas', 'While'], explanation: '"Whereas" = used to contrast two clauses directly, often showing disparity.' }] },
    topicName: 'Grammar',
  },
  {
    id: 'c1-u8-g3', type: 'multiple-choice', level: 'C1', topic: 'speculation', difficulty: 'hard',
    content: { title: '[[Grammar|Gramática]]: [[Speculation and Distancing|Especulación y distanciamiento]]', instructions: 'Choose the most appropriate speculation structure.',
      questions: [{ question: 'Which sentence uses the most appropriate C1 speculation language?', options: ["[[One might argue that the primary driver of global conflict is not ideology but resource competition.|Se podría argumentar que el motor principal del conflicto global no es la ideología sino la competencia por recursos.]]", '[[I think conflict is about resources.|Creo que el conflicto tiene que ver con los recursos.]]', '[[Maybe conflict is about resources.|Quizás el conflicto tiene que ver con los recursos.]]'], correctAnswer: 0, explanation: '"One might argue that..." = sophisticated academic speculation with appropriate distancing.' }] },
    topicName: 'Grammar',
  },
  {
    id: 'c1-u8-v1', type: 'multiple-choice', level: 'C1', topic: 'global-vocabulary', difficulty: 'hard',
    content: { title: '[[Vocabulary|Vocabulario]]: [[Global Issues|Problemas globales]]', instructions: 'Choose the correct word.',
      questions: [{ question: 'The treaty was finally _______ by all 47 member states, making it legally binding.', options: ['[[ratified|ratificado]]', '[[nullified|anulado]]', '[[drafted|redactado]]'], correctAnswer: 0, explanation: 'Ratify = to formally approve and sign an agreement, making it official.' }] },
    topicName: 'Vocabulary',
  },
  {
    id: 'c1-u8-v2', type: 'fill-blank', level: 'C1', topic: 'global-vocabulary', difficulty: 'hard',
    content: { title: '[[Vocabulary|Vocabulario]]: [[Global Issues|Problemas globales]]', instructions: 'Complete the sentence.',
      questions: [{ question: 'Effective _______ requires transparent institutions and mechanisms for holding governments accountable.', options: ['[[governance|gobernanza]]', '[[diplomacy|diplomacia]]', '[[sovereignty|soberanía]]'], correctAnswer: 'governance', acceptableAnswers: ['governance'], explanation: 'Governance = the action or manner of governing; the framework of rules and institutions.' }] },
    topicName: 'Vocabulary',
  },
  {
    id: 'c1-u8-v3', type: 'multiple-choice', level: 'C1', topic: 'global-vocabulary', difficulty: 'hard',
    content: { title: '[[Vocabulary|Vocabulario]]: [[Global Issues|Problemas globales]]', instructions: 'Choose the best word.',
      questions: [{ question: 'Victims of political persecution have the right to seek _______ in another country under international law.', options: ['[[asylum|asilo]]', '[[immigration|inmigración]]', '[[residency|residencia]]'], correctAnswer: 0, explanation: 'Asylum = protection granted by a state to someone who has fled their country as a refugee.' }] },
    topicName: 'Vocabulary',
  },
  {
    id: 'c1-u8-r1', type: 'reading-comprehension', level: 'C1', topic: 'global-reading', difficulty: 'hard',
    content: { title: '[[Reading|Lectura]]: [[Human Rights|Derechos humanos]]', instructions: 'Read and answer.',
      questions: [{ question: 'Text: "Whereas human rights discourse has traditionally focused on civil and political rights, there is an increasingly compelling case for recognising socio-economic rights — to housing, healthcare and education — as equally fundamental." What shift in human rights thinking does the text describe?', options: ['[[a move away from political rights|un alejamiento de los derechos políticos]]', '[[an expansion of rights to include socio-economic dimensions|una expansión de los derechos para incluir dimensiones socioeconómicas]]', '[[a rejection of traditional human rights frameworks|un rechazo de los marcos tradicionales de derechos humanos]]'], correctAnswer: 1, explanation: '"Increasingly compelling case" for socio-economic rights = an expansion of the rights framework.' }] },
    topicName: 'Reading',
  },
  {
    id: 'c1-u8-r2', type: 'multiple-choice', level: 'C1', topic: 'global-reading', difficulty: 'hard',
    content: { title: '[[Reading|Lectura]]: [[Migration|Migración]]', instructions: 'Choose the correct inference.',
      questions: [{ question: 'Text: "So as to manage migration effectively, states must address not merely the symptoms — border control and processing — but the root causes: conflict, poverty and climate displacement." The author argues that:', options: ['[[border control is the most effective migration policy|el control fronterizo es la política migratoria más efectiva]]', '[[addressing the causes of migration is as important as managing its effects|abordar las causas de la migración es tan importante como gestionar sus efectos]]', '[[migration cannot be effectively managed|la migración no puede gestionarse de forma efectiva]]'], correctAnswer: 1, explanation: '"Not merely the symptoms but the root causes" = the author emphasises tackling underlying causes.' }] },
    topicName: 'Reading',
  },
  {
    id: 'c1-u8-r3',
    type: 'reading-comprehension',
    level: 'C1',
    topic: 'global-reading',
    difficulty: 'hard',
    content: {
      title: '[[Reading|Lectura]]: [[Follow-up|Seguimiento]]',
      instructions: 'Read and answer.',
      questions: [
        {
          question:
            'Text: "Returning to the core theme of this unit (Global Issues), learners benefit from comparing how different authors frame the same underlying issue."\n\nThe text recommends:',
          options: [
            '[[comparing how different authors frame the issue|comparar cómo distintos autores enmarcan el tema]]',
            '[[reading only one author|leer solo un autor]]',
            '[[ignoring framing|ignorar el encuadre]]',
          ],
          correctAnswer: 0,
          explanation: 'The passage explicitly recommends comparing authors\' framing.',
        },
      ],
    },
    topicName: 'Reading',
  },
  {
    id: 'c1-u8-l1', type: 'listening-comprehension', level: 'C1', topic: 'global-listening', difficulty: 'hard',
    content: { title: '[[Listening|Comprensión auditiva]]: [[International Politics|Política internacional]]', instructions: 'Listen and choose the correct answer.',
      questions: [{ question: 'A diplomat says: "Multilateral cooperation, albeit imperfect, remains the most viable framework for addressing global challenges that no single state can resolve unilaterally." What is the speaker\'s view?', options: ['[[multilateral cooperation is unnecessary|la cooperación multilateral es innecesaria]]', '[[despite its flaws, international cooperation is the best available approach|a pesar de sus defectos, la cooperación internacional es el mejor enfoque disponible]]', '[[individual states should act alone on global issues|los estados individuales deben actuar solos en cuestiones globales]]'], correctAnswer: 1, explanation: '"Albeit imperfect" = concession; "most viable" = best available option despite flaws.' }] },
    topicName: 'Listening',
  },
  {
    id: 'c1-u8-l2',
    type: 'listening-comprehension',
    level: 'C1',
    topic: 'global-listening',
    difficulty: 'hard',
    content: {
      title: '[[Listening|Comprensión auditiva]]: [[Follow-up 2|Complemento]]',
      instructions: 'Listen and choose.',
      questions: [
        {
          question:
            'Speaker: "What matters in this unit is not memorising lists but noticing how language patterns recur in authentic use."\n\nThe speaker emphasises:',
          options: [
            '[[noticing patterns in real use|fijarse en patrones en uso real]]',
            '[[memorising long lists|memorizar listas]]',
            '[[avoiding authentic input|evitar input auténtico]]',
          ],
          correctAnswer: 0,
          explanation: 'The speaker contrasts lists with noticing patterns in authentic language.',
        },
      ],
    },
    topicName: 'Listening',
  },
  {
    id: 'c1-u8-l3',
    type: 'listening-comprehension',
    level: 'C1',
    topic: 'global-listening',
    difficulty: 'hard',
    content: {
      title: '[[Listening|Comprensión auditiva]]: [[Follow-up 3|Complemento]]',
      instructions: 'Listen and choose.',
      questions: [
        {
          question:
            'Speaker: "What matters in this unit is not memorising lists but noticing how language patterns recur in authentic use."\n\nThe speaker emphasises:',
          options: [
            '[[noticing patterns in real use|fijarse en patrones en uso real]]',
            '[[memorising long lists|memorizar listas]]',
            '[[avoiding authentic input|evitar input auténtico]]',
          ],
          correctAnswer: 0,
          explanation: 'The speaker contrasts lists with noticing patterns in authentic language.',
        },
      ],
    },
    topicName: 'Listening',
  },
  {
    id: 'c1-u8-w1', type: 'writing', level: 'C1', topic: 'argumentative-essay', difficulty: 'hard',
    content: { title: '[[Writing|Escritura]]: [[Argumentative Essay — Contrast|Ensayo argumentativo con contraste]]', instructions: 'Choose the best contrast sentence for an essay on global inequality.',
      questions: [{ question: 'Which sentence best contrasts two positions on global inequality?', options: ['[[On the one hand, globalisation has enabled unprecedented economic growth and interconnectedness; on the other, it has been widely criticised for concentrating wealth among a small elite, displacing workers in developed economies and undermining the regulatory sovereignty of individual nation-states.|Por un lado, la globalización ha posibilitado un crecimiento económico e interconexión sin precedentes; por otro, ha sido ampliamente criticada por concentrar la riqueza en una pequeña élite, desplazar trabajadores en economías desarrolladas y socavar la soberanía regulatoria de los estados nacionales.]]', '[[Whereas critics of globalisation argue that it has exacerbated inequality, proponents contend that, on balance, it has lifted millions out of extreme poverty.|Mientras que los críticos de la globalización argumentan que ha exacerbado la desigualdad, los defensores sostienen que, en términos generales, ha sacado a millones de la pobreza extrema.]]', '[[Although there is broad recognition that globalisation has produced both winners and losers, the extent to which its net impact has been positive or negative remains deeply contested, with economists presenting radically different analyses of the same empirical data depending on their theoretical commitments and ideological frameworks.|Aunque hay un amplio reconocimiento de que la globalización ha producido tanto ganadores como perdedores, la medida en que su impacto neto ha sido positivo o negativo sigue siendo profundamente debatida, con economistas presentando análisis radicalmente diferentes de los mismos datos empíricos.]]'], correctAnswer: 1, explanation: '"Whereas... proponents contend that" = sophisticated contrast structure with appropriate academic vocabulary.' }] },
    topicName: 'Writing',
  },
  {
    id: 'c1-u8-w2',
    type: 'writing',
    level: 'C1',
    topic: 'argumentative-essay',
    difficulty: 'hard',
    content: {
      title: '[[Writing|Escritura]]: [[Cohesion and register|Cohesión y registro]]',
      instructions: 'Choose the sentence that best models C1 academic register.',
      questions: [
        {
          question: 'Which sentence is most appropriate in a formal paragraph on this unit\'s theme?',
          options: [
            '[[It is worth noting that the evidence does not permit a single simplistic conclusion; rather, it points to an interplay of factors that merit separate discussion.|matiz y formalidad]]',
            '[[The theme is interesting and has many sides.|demasiado simple]]',
            '[[I think this unit is about stuff.|informal]]',
          ],
          correctAnswer: 0,
          explanation: 'Hedging and formal vocabulary suit C1 writing.',
        },
      ],
    },
    topicName: 'Writing',
  },
  {
    id: 'c1-u8-w3',
    type: 'writing',
    level: 'C1',
    topic: 'argumentative-essay',
    difficulty: 'hard',
    content: {
      title: '[[Writing|Escritura]]: [[Cohesion and register|Cohesión y registro]]',
      instructions: 'Choose the sentence that best models C1 academic register.',
      questions: [
        {
          question: 'Which sentence is most appropriate in a formal paragraph on this unit\'s theme?',
          options: [
            '[[It is worth noting that the evidence does not permit a single simplistic conclusion; rather, it points to an interplay of factors that merit separate discussion.|matiz y formalidad]]',
            '[[The theme is interesting and has many sides.|demasiado simple]]',
            '[[I think this unit is about stuff.|informal]]',
          ],
          correctAnswer: 0,
          explanation: 'Hedging and formal vocabulary suit C1 writing.',
        },
      ],
    },
    topicName: 'Writing',
  },
  {
    id: 'c1-u8-s1', type: 'multiple-choice', level: 'C1', topic: 'speaking-global', difficulty: 'hard',
    content: { title: '[[Speaking|Expresión oral]]: [[Discussing Global Issues|Debatir sobre problemas globales]]', instructions: 'Choose the most appropriate C1 expression to introduce a speculative point.',
      questions: [{ question: 'You want to introduce a speculative argument about the causes of international conflict. Which is most appropriate?', options: ['[[One might suggest that the root causes of modern conflict are more material than ideological in nature, and that competition for energy, water and mineral resources — exacerbated by the growing pressures of climate change — is increasingly generating geopolitical tensions that conventional diplomatic frameworks are ill-equipped to address.|Uno podría sugerir que las causas fundamentales del conflicto moderno son más materiales que ideológicas, y que la competencia por la energía, el agua y los recursos minerales está generando tensiones geopolíticas que los marcos diplomáticos convencionales no están bien equipados para abordar.]]', '[[Arguably, the most significant — though often underacknowledged — driver of contemporary conflict is competition over natural resources rather than ideological differences.|Podría sostenerse que el motor más significativo, aunque frecuentemente desatendido, del conflicto contemporáneo es la competencia por los recursos naturales más que las diferencias ideológicas.]]', '[[It could be argued that resource scarcity plays a more decisive role in generating international conflict than is commonly acknowledged in mainstream political discourse, particularly in regions where weak governance and acute economic pressures combine to create conditions in which state and non-state actors resort to violence as a means of securing access to scarce resources.|Podría argumentarse que la escasez de recursos desempeña un papel más decisivo en la generación de conflictos internacionales de lo que se reconoce comúnmente en el discurso político dominante, particularmente en regiones donde la débil gobernanza y las presiones económicas agudas se combinan para crear condiciones en las que se recurre a la violencia.]]'], correctAnswer: 1, explanation: '"Arguably, the most significant — though often underacknowledged —" = speculation + distancing + hedging at C1+.' }] },
    topicName: 'Speaking',
  },
  {
    id: 'c1-u8-s2',
    type: 'multiple-choice',
    level: 'C1',
    topic: 'speaking-global',
    difficulty: 'hard',
    content: {
      title: '[[Speaking|Expresión oral]]: [[Discussion|Discusión]]',
      instructions: 'Choose the most natural C1 spoken response.',
      questions: [
        {
          question: 'In a discussion, how might you add balance after stating one view?',
          options: [
            '[[That said, an alternative reading of the evidence would be that alternative explanations cannot be ruled out without further data.|*That said* + contrapeso formal]]',
            '[[But I am right.|demasiado directo]]',
            '[[Whatever.|vago]]',
          ],
          correctAnswer: 0,
          explanation: '*That said* introduces a counterbalance politely at C1.',
        },
      ],
    },
    topicName: 'Speaking',
  },
  {
    id: 'c1-u8-s3',
    type: 'multiple-choice',
    level: 'C1',
    topic: 'speaking-global',
    difficulty: 'hard',
    content: {
      title: '[[Speaking|Expresión oral]]: [[Discussion|Discusión]]',
      instructions: 'Choose the most natural C1 spoken response.',
      questions: [
        {
          question: 'In a discussion, how might you add balance after stating one view?',
          options: [
            '[[That said, an alternative reading of the evidence would be that alternative explanations cannot be ruled out without further data.|*That said* + contrapeso formal]]',
            '[[But I am right.|demasiado directo]]',
            '[[Whatever.|vago]]',
          ],
          correctAnswer: 0,
          explanation: '*That said* introduces a counterbalance politely at C1.',
        },
      ],
    },
    topicName: 'Speaking',
  },
];
