/**
 * Unit 1 — Gestión hotelera / Hotel Management (B2)
 * Grammar lesson: Passive Voice (present & past)
 * — Voz pasiva en presente y pasado —
 */

import { Exercise } from '@/lib/exercise-generator';

export const UNIT_1_LESSON_1_GRAMMAR: Exercise[] = [
  {
    id: 'rec-b2-u1-l1-g1',
    type: 'fill-blank',
    level: 'B2',
    topic: 'Management',
    difficulty: 'medium',
    content: {
      title: '[[Passive Voice|Voz Pasiva]] — [[Present|Presente]]',
      instructions: '[[Complete|Completa]] [[the sentence|la frase]] [[with|con]] [[the correct passive form|la forma pasiva correcta]] [[of the verb in brackets|del verbo entre paréntesis]].',
      questions: [
        {
          question: 'Guest satisfaction scores ___ (analyse) by the management team every Monday morning.',
          correctAnswer: 'are analysed',
          explanation: '[[We use|Usamos]] "are analysed" [[because|porque]] [[the subject|el sujeto]] (scores) [[receives|recibe]] [[the action|la acción]] — [[this is|esto es]] [[present simple passive|pasiva en presente simple]]: am/is/are + [[past participle|participio pasado]].',
        },
        {
          question: 'The quarterly performance review ___ (hold) in the main conference room.',
          correctAnswer: 'is held',
          explanation: '[[Present simple passive|Pasiva en presente simple]]: is + [[past participle|participio pasado]]. [[The subject|El sujeto]] "the quarterly performance review" [[receives|recibe]] [[the action|la acción]] [[of holding|de celebrar]].',
        },
        {
          question: 'Room rates ___ (set) by the revenue manager based on demand forecasts.',
          correctAnswer: 'are set',
          explanation: '"Set" [[is both|es tanto]] [[the infinitive|el infinitivo]] [[and|como]] [[the past participle|el participio pasado]]. [[Present simple passive|Pasiva en presente simple]] [[with a plural subject|con sujeto plural]]: are + set.',
        },
        {
          question: 'A mystery guest ___ (send) to evaluate the hotel\'s service standards last month.',
          correctAnswer: 'was sent',
          explanation: '[[Past simple passive|Pasiva en pasado simple]]: was/were + [[past participle|participio pasado]]. "Last month" [[confirms|confirma]] [[the past tense|el tiempo pasado]].',
        },
        {
          question: 'When I arrived for my shift, the revenue figures ___ (still / prepare) by the night auditor.',
          correctAnswer: 'were still being prepared',
          explanation: '[[Past continuous passive|Pasiva en pasado continuo]]: was/were + being + [[past participle|participio pasado]]. [[The action was in progress|La acción estaba en curso]] [[when|cuando]] [[another action happened|ocurrió otra acción]].',
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'rec-b2-u1-l1-g2',
    type: 'multiple-choice',
    level: 'B2',
    topic: 'Management',
    difficulty: 'medium',
    content: {
      title: '[[Passive Voice|Voz Pasiva]] — [[Choose the correct form|Elige la forma correcta]]',
      instructions: '[[Choose|Elige]] [[the option|la opción]] [[that correctly completes|que completa correctamente]] [[each sentence|cada frase]].',
      questions: [
        {
          question: 'The hotel\'s brand standards ___ during the annual compliance audit.',
          options: [
            'are checked',
            'check',
            'are checking',
            'have check',
          ],
          correctAnswer: 0,
          explanation: '[[Present simple passive|Pasiva en presente simple]]: are + [[past participle|participio pasado]] (checked). [[The subject|El sujeto]] "brand standards" [[is the receiver|es el receptor]] [[of the action|de la acción]], [[not the doer|no el actor]].',
        },
        {
          question: 'The guest\'s complaint ___ by the duty manager when the general manager walked in.',
          options: [
            'was being handled',
            'was handling',
            'handled',
            'is being handled',
          ],
          correctAnswer: 0,
          explanation: '[[Past continuous passive|Pasiva en pasado continuo]]: was + being + [[past participle|participio pasado]]. [[The action was in progress|La acción estaba en curso]] [[in the past|en el pasado]] [[when something else happened|cuando ocurrió otra cosa]].',
        },
        {
          question: 'New KPI targets ___ to all department heads at the start of each quarter.',
          options: [
            'are communicated',
            'communicated',
            'are communicating',
            'communicate',
          ],
          correctAnswer: 0,
          explanation: '[[Present simple passive|Pasiva en presente simple]]: are + communicated. [[The targets|Los objetivos]] [[receive|reciben]] [[the action|la acción]] [[of being communicated|de ser comunicados]] — [[they do not communicate|no comunican]] [[themselves|ellos mismos]].',
        },
        {
          question: 'The occupancy rate figures ___ to head office yesterday afternoon.',
          options: [
            'were sent',
            'are sent',
            'send',
            'were sending',
          ],
          correctAnswer: 0,
          explanation: '[[Past simple passive|Pasiva en pasado simple]]: were + [[past participle|participio pasado]]. "Yesterday" [[indicates|indica]] [[a completed past action|una acción pasada completada]].',
        },
        {
          question: 'Our online reviews ___ carefully every week to identify areas for improvement.',
          options: [
            'are monitored',
            'monitored',
            'monitor',
            'have been monitoring',
          ],
          correctAnswer: 0,
          explanation: '[[Present simple passive|Pasiva en presente simple]]: are + monitored. [[We focus|Nos centramos]] [[on what happens to|en lo que le pasa a]] "our online reviews", [[not on who monitors them|no en quién las monitoriza]].',
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'rec-b2-u1-l1-g3',
    type: 'fill-blank',
    level: 'B2',
    topic: 'Management',
    difficulty: 'hard',
    content: {
      title: '[[Active to Passive|Activa a Pasiva]] — [[Transform the sentence|Transforma la frase]]',
      instructions: '[[Rewrite|Reescribe]] [[the underlined active verb|el verbo activo subrayado]] [[in the passive voice|en voz pasiva]]. [[Keep the same tense|Mantén el mismo tiempo verbal]].',
      questions: [
        {
          question: 'The management team [reviews] all negative guest feedback before the weekly meeting. → All negative guest feedback ___ by the management team before the weekly meeting.',
          correctAnswer: 'is reviewed',
          explanation: '[[Active|Activo]]: the management team [[reviews|revisa]] → [[Passive|Pasivo]]: [[the feedback|los comentarios]] is reviewed. [[The object|El objeto]] [[becomes the subject|se convierte en sujeto]]. [[Present simple passive|Pasiva en presente simple]]: is + reviewed.',
        },
        {
          question: 'The HR department [conducted] the performance appraisals last month. → The performance appraisals ___ by the HR department last month.',
          correctAnswer: 'were conducted',
          explanation: '[[Active|Activo]]: [[the HR department|el departamento de RRHH]] [conducted] → [[Passive|Pasivo]]: [[the appraisals|las evaluaciones]] were conducted. [[Past simple passive|Pasiva en pasado simple]]: were + conducted.',
        },
        {
          question: 'A consultant [was analysing] the revenue per room data when the director called. → The revenue per room data ___ by a consultant when the director called.',
          correctAnswer: 'was being analysed',
          explanation: '[[Active|Activo]]: a consultant [was analysing] → [[Passive|Pasivo]]: [[the data|los datos]] was being analysed. [[Past continuous passive|Pasiva en pasado continuo]]: was + being + [[past participle|participio pasado]].',
        },
        {
          question: 'They [train] all new receptionists on the PMS system during their induction week. → All new receptionists ___ on the PMS system during their induction week.',
          correctAnswer: 'are trained',
          explanation: '[[When the agent is|Cuando el agente es]] "they" ([[unspecified|no especificado]]), [[it is often omitted|se suele omitir]] [[in the passive|en la pasiva]]. [[Present simple passive|Pasiva en presente simple]]: are + trained.',
        },
        {
          question: 'The mystery guest [submitted] a detailed report on our front desk service after the visit. → A detailed report on our front desk service ___ by the mystery guest after the visit.',
          correctAnswer: 'was submitted',
          explanation: '[[Past simple passive|Pasiva en pasado simple]]: was + submitted. [[The subject|El sujeto]] [[of the passive sentence|de la frase pasiva]] [[is|es]] "a detailed report", [[which received|que recibió]] [[the action|la acción]] [[of being submitted|de ser enviado]].',
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'rec-b2-u1-l1-g4',
    type: 'sentence-building',
    level: 'B2',
    topic: 'Management',
    difficulty: 'medium',
    content: {
      title: '[[Passive Voice|Voz Pasiva]] — [[Sentence Building|Construye la frase]]',
      instructions: '[[Put the words|Pon las palabras]] [[in the correct order|en el orden correcto]] [[to form a passive sentence|para formar una frase en pasiva]]. [[The first word|La primera palabra]] [[is given|está dada]].',
      questions: [
        {
          question: 'The / room / occupancy / reviewed / rate / each / is / morning. [Starts with: The]',
          correctAnswer: 'The occupancy rate is reviewed each morning.',
          explanation: '[[Present simple passive|Pasiva en presente simple]]: subject (the occupancy rate) + is + [[past participle|participio pasado]] (reviewed) + [[time expression|expresión temporal]] (each morning).',
        },
        {
          question: 'staff / All / about / new / were / the / informed / benchmarks / yesterday. [Starts with: All]',
          correctAnswer: 'All staff were informed about the new benchmarks yesterday.',
          explanation: '[[Past simple passive|Pasiva en pasado simple]]: subject (all staff) + were + [[past participle|participio pasado]] (informed) + [[about + object|sobre + objeto]] + [[time|tiempo]] (yesterday).',
        },
        {
          question: 'being / The / currently / audit / compliance / carried / is / out. [Starts with: The]',
          correctAnswer: 'The compliance audit is currently being carried out.',
          explanation: '[[Present continuous passive|Pasiva en presente continuo]]: subject + is + being + [[past participle|participio pasado]] (carried out). "Currently" [[goes between|va entre]] is [[and|y]] being.',
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'rec-b2-u1-l1-g5',
    type: 'true-false',
    level: 'B2',
    topic: 'Management',
    difficulty: 'medium',
    content: {
      title: '[[Passive Voice|Voz Pasiva]] — [[True or False|Verdadero o Falso]]',
      instructions: '[[Decide|Decide]] [[if the sentence|si la frase]] [[is correctly written|está escrita correctamente]] [[in the passive voice|en voz pasiva]]. [[If it is wrong|Si es incorrecta]], [[think about|piensa en]] [[what the correct form would be|cuál sería la forma correcta]].',
      questions: [
        {
          question: '"The revenue per room is calculated by the revenue manager every day." — [[Is this sentence|¿Esta frase está]] [[correctly written|correctamente escrita]] [[in the passive voice|en voz pasiva]]?',
          options: ['[[True|Verdadero]] — [[It is correct|Es correcta]]', '[[False|Falso]] — [[It contains an error|Contiene un error]]'],
          correctAnswer: 'True',
          explanation: '[[Correct|Correcta]]. [[Present simple passive|Pasiva en presente simple]]: is calculated (is + [[past participle|participio pasado]]). [[The agent|El agente]] (the revenue manager) [[is introduced with|se introduce con]] "by".',
        },
        {
          question: '"The KPIs were been reviewed at yesterday\'s meeting." — [[Is this sentence|¿Esta frase está]] [[correctly written|correctamente escrita]] [[in the passive voice|en voz pasiva]]?',
          options: ['[[True|Verdadero]] — [[It is correct|Es correcta]]', '[[False|Falso]] — [[It contains an error|Contiene un error]]'],
          correctAnswer: 'False',
          explanation: '[[Incorrect|Incorrecta]]. "were been" [[is wrong|es incorrecto]]. [[Past simple passive|Pasiva en pasado simple]] [[only needs|solo necesita]]: were + [[past participle|participio pasado]]. [[Correct form|Forma correcta]]: "The KPIs were reviewed at yesterday\'s meeting."',
        },
        {
          question: '"New compliance procedures are being implemented across all departments." — [[Is this sentence|¿Esta frase está]] [[correctly written|correctamente escrita]] [[in the passive voice|en voz pasiva]]?',
          options: ['[[True|Verdadero]] — [[It is correct|Es correcta]]', '[[False|Falso]] — [[It contains an error|Contiene un error]]'],
          correctAnswer: 'True',
          explanation: '[[Correct|Correcta]]. [[Present continuous passive|Pasiva en presente continuo]]: are + being + implemented ([[past participle|participio pasado]]). [[The action is in progress now|La acción está en curso ahora]].',
        },
        {
          question: '"The mystery guest was evaluate our brand standards last quarter." — [[Is this sentence|¿Esta frase está]] [[correctly written|correctamente escrita]] [[in the passive voice|en voz pasiva]]?',
          options: ['[[True|Verdadero]] — [[It is correct|Es correcta]]', '[[False|Falso]] — [[It contains an error|Contiene un error]]'],
          correctAnswer: 'False',
          explanation: '[[Incorrect|Incorrecta]]. "was evaluate" [[is wrong|es incorrecto]]. [[Past simple passive|Pasiva en pasado simple]] needs was/were + [[past participle|participio pasado]]. [[Also|Además]], [[this is actually an active sentence|esta es en realidad una frase activa]]. [[If active|Si es activa]]: "The mystery guest evaluated our brand standards." [[If passive|Si es pasiva]]: "Our brand standards were evaluated by the mystery guest."',
        },
        {
          question: '"Occupancy rates are analyse by the front office manager each morning." — [[Is this sentence|¿Esta frase está]] [[correctamente escrita|correctamente escrita]] [[in the passive voice|en voz pasiva]]?',
          options: ['[[True|Verdadero]] — [[It is correct|Es correcta]]', '[[False|Falso]] — [[It contains an error|Contiene un error]]'],
          correctAnswer: 'False',
          explanation: '[[Incorrect|Incorrecta]]. "are analyse" [[is wrong|es incorrecto]]. [[Present simple passive|Pasiva en presente simple]] needs are + [[past participle|participio pasado]]. [[Correct form|Forma correcta]]: "Occupancy rates are analysed by the front office manager each morning."',
        },
      ],
    },
    topicName: 'Grammar',
  },
];
