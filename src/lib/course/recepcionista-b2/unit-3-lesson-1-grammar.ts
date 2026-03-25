/**
 * Unit 3 — Gestión de crisis / Crisis Management (B2)
 * Grammar lesson: Modal verbs for obligation and advice
 * — Verbos modales de obligación y consejo: must, should, ought to —
 */

import { Exercise } from '@/lib/exercise-generator';

export const UNIT_3_LESSON_1_GRAMMAR: Exercise[] = [
  {
    id: 'rec-b2-u3-l1-g1',
    type: 'fill-blank',
    level: 'B2',
    topic: 'Crisis Communication',
    difficulty: 'medium',
    content: {
      title: '[[Modal Verbs|Verbos Modales]] — [[Obligation & Advice|Obligación y Consejo]]',
      instructions: '[[Complete|Completa]] [[the sentence|la frase]] [[with|con]] [[the correct modal verb|el verbo modal correcto]]: must, must not, should, should not, [[or|o]] ought to.',
      questions: [
        {
          question: 'All guests ___ be evacuated immediately — there is a fire on the second floor. This is not optional.',
          correctAnswer: 'must',
          explanation: '"Must" [[expresses|expresa]] [[strong obligation or necessity|obligación fuerte o necesidad]], [[often from the speaker\'s authority|a menudo desde la autoridad del hablante]]. [[In an emergency|En una emergencia]], [[the obligation is absolute|la obligación es absoluta]]: there is no choice.',
        },
        {
          question: 'You ___ leave the building via the lifts during a fire evacuation — always use the emergency stairs.',
          correctAnswer: 'must not',
          explanation: '"Must not" (mustn\'t) [[expresses|expresa]] [[prohibition|prohibición]] — [[something that is forbidden|algo que está prohibido]]. [[It is much stronger|Es mucho más fuerte]] [[than|que]] "should not", [[which is advice|que es consejo]]. [[In safety situations|En situaciones de seguridad]], [[prohibition is the correct register|la prohibición es el registro correcto]].',
        },
        {
          question: 'You ___ inform the duty manager as soon as possible if a guest reports a medical emergency. It is the correct procedure.',
          correctAnswer: 'should',
          explanation: '"Should" [[expresses|expresa]] [[recommendation or advice|recomendación o consejo]] — [[the right or expected course of action|el curso de acción correcto o esperado]]. [[It is less absolute|Es menos absoluto]] [[than "must"|que "must"]] [[but still strongly recommended|pero sigue siendo fuertemente recomendado]].',
        },
        {
          question: 'Staff ___ remain calm when speaking to guests during a crisis — a panicked tone makes situations worse.',
          correctAnswer: 'ought to',
          explanation: '"Ought to" [[is similar to "should"|es similar a "should"]] [[and expresses|y expresa]] [[moral obligation or the right thing to do|obligación moral o lo correcto]]. [[It is slightly more formal|Es ligeramente más formal]] [[than "should"|que "should"]] [[and is common in written procedures|y es común en procedimientos escritos]].',
        },
        {
          question: 'The incident report ___ be completed within two hours of the event — this is a company policy requirement.',
          correctAnswer: 'must',
          explanation: '"Must" [[indicates|indica]] [[strict obligation based on a rule or policy|obligación estricta basada en una norma o política]]. [[When something is required by company policy|Cuando algo es requerido por la política de la empresa]], "must" [[is the appropriate modal|es el modal apropiado]], [[not just "should"|no solo "should"]].',
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'rec-b2-u3-l1-g2',
    type: 'multiple-choice',
    level: 'B2',
    topic: 'Crisis Communication',
    difficulty: 'medium',
    content: {
      title: '[[Modal Verbs|Verbos Modales]] — [[Choose the correct modal|Elige el modal correcto]]',
      instructions: '[[Choose|Elige]] [[the modal verb|el verbo modal]] [[that best fits|que mejor encaja]] [[the meaning in context|el significado en contexto]].',
      questions: [
        {
          question: 'Receptionists ___ reveal a guest\'s room number to anyone who has not provided valid identification. This is a security policy.',
          options: [
            'must not',
            'should not',
            'ought not to',
            'need not',
          ],
          correctAnswer: 0,
          explanation: '"Must not" [[expresses|expresa]] [[prohibition|prohibición]] — [[something that is strictly forbidden|algo que está estrictamente prohibido]]. [[This is a security policy|Esto es una política de seguridad]], [[so the obligation is absolute|por lo que la obligación es absoluta]]. "Should not" [[would sound like advice|sonaría como consejo]], [[not a firm rule|no una norma firme]].',
        },
        {
          question: '"I think you ___ call the guest to apologise personally — it would help restore their confidence in the hotel."',
          options: [
            'should',
            'must',
            'have to',
            'need',
          ],
          correctAnswer: 0,
          explanation: '"Should" [[expresses|expresa]] [[advice or recommendation|consejo o recomendación]]. [[The speaker is suggesting|El hablante está sugiriendo]] [[what would be a good course of action|cuál sería un buen curso de acción]], [[not imposing a strict obligation|no imponiendo una obligación estricta]]. "Must" [[would be too strong|sería demasiado fuerte]] [[for personal advice|para un consejo personal]].',
        },
        {
          question: 'During a lockdown procedure, guests ___ stay in their rooms until the all-clear is given by security.',
          options: [
            'must',
            'should',
            'could',
            'might',
          ],
          correctAnswer: 0,
          explanation: '[[A lockdown is a compulsory safety measure|Un confinamiento es una medida de seguridad obligatoria]]. "Must" [[is correct because|es correcto porque]] [[there is no choice|no hay opción]]. "Should" [[would suggest|sugeriría]] [[it is optional or just advisable|que es opcional o solo recomendable]], [[which is not appropriate|lo que no es apropiado]] [[in this life-safety context|en este contexto de seguridad vital]].',
        },
        {
          question: 'You ___ have informed the guests about the fire drill in advance — many of them were very alarmed.',
          options: [
            'should have',
            'must have',
            'ought not to have',
            'need not have',
          ],
          correctAnswer: 0,
          explanation: '"Should have + [[past participle|participio pasado]]" [[expresses|expresa]] [[criticism or regret about a past action|crítica o pesar por una acción pasada]] — [[something that did not happen but was the right thing to do|algo que no sucedió pero era lo correcto]]. "Must have" [[expresses|expresa]] [[deduction about the past|deducción sobre el pasado]], [[not criticism|no crítica]].',
        },
        {
          question: '"The risk assessment ___ be conducted by a qualified safety officer — it is a legal requirement."',
          options: [
            'must',
            'should',
            'ought to',
            'could',
          ],
          correctAnswer: 0,
          explanation: '"Must" [[is the correct choice|es la elección correcta]] [[when something is a legal or regulatory requirement|cuando algo es un requisito legal o reglamentario]]. [[Legal obligations|Las obligaciones legales]] [[use "must"|usan "must"]], [[not "should"|no "should"]] ([[which is advice|que es consejo]]) [[or "ought to"|ni "ought to"]] ([[which is moral suggestion|que es sugerencia moral]]).',
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'rec-b2-u3-l1-g3',
    type: 'fill-blank',
    level: 'B2',
    topic: 'Crisis Communication',
    difficulty: 'hard',
    content: {
      title: '[[Perfect Modals|Modales Perfectos]] — [[Past Obligation & Advice|Obligación y Consejo en Pasado]]',
      instructions: '[[Complete|Completa]] [[each sentence|cada frase]] [[with|con]] [[the correct past modal form|la forma modal correcta en pasado]] (must have, should have, need not have, [[or|o]] ought to have + [[past participle|participio pasado]]).',
      questions: [
        {
          question: 'The duty manager ___ (inform) head office immediately after the incident — it was a clear protocol requirement that was overlooked.',
          correctAnswer: 'should have informed',
          explanation: '"Should have + [[past participle|participio pasado]]" [[expresses|expresa]] [[that something was the right thing to do but was not done|que algo era lo correcto pero no se hizo]]. [[It is used for|Se usa para]] [[criticism or regret about a past omission|crítica o pesar por una omisión pasada]].',
        },
        {
          question: 'You ___ (call) an ambulance — the guest had a minor cut, nothing serious. It was unnecessary.',
          correctAnswer: 'need not have called',
          explanation: '"Need not have + [[past participle|participio pasado]]" [[expresses|expresa]] [[that something was done but was unnecessary|que algo se hizo pero era innecesario]]. [[The action was completed|La acción se completó]] [[but it was not required|pero no era necesaria]]. [[Compare|Compara]]: "should not have called" [[also works|también funciona]] ([[implying it was wrong|implicando que estuvo mal]]).',
        },
        {
          question: 'The lights are off and the emergency generator is running — there ___ (be) a power cut during the storm last night.',
          correctAnswer: 'must have been',
          explanation: '"Must have + [[past participle|participio pasado]]" [[expresses|expresa]] [[a logical deduction about the past|una deducción lógica sobre el pasado]]. [[Based on the evidence|Basándose en la evidencia]] (no lights, generator running), [[the speaker concludes|el hablante concluye]] [[that a power cut occurred|que se produjo un corte de luz]].',
        },
        {
          question: 'The contingency plan ___ (review) before the peak season — we were completely unprepared for the overbooking situation.',
          correctAnswer: 'should have been reviewed',
          explanation: '"Should have been + [[past participle|participio pasado]]" [[is the passive form|es la forma pasiva]] [[of the past modal|del modal pasado]]. [[The plan was not reviewed|El plan no fue revisado]] — [[this is presented as a past mistake|esto se presenta como un error pasado]]. [[Passive is used|Se usa la pasiva]] [[because the agent is unspecified|porque el agente no está especificado]].',
        },
        {
          question: 'She arrived very late and looked exhausted — she ___ (travel) overnight to reach the hotel in time.',
          correctAnswer: 'must have travelled',
          explanation: '"Must have + [[past participle|participio pasado]]" [[for deduction|para deducción]]. [[The speaker does not know for certain|El hablante no sabe con certeza]] [[but is making a strong logical inference|pero está haciendo una inferencia lógica fuerte]] [[based on the evidence|basada en la evidencia]] (late arrival, exhausted appearance).',
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'rec-b2-u3-l1-g4',
    type: 'sentence-building',
    level: 'B2',
    topic: 'Crisis Communication',
    difficulty: 'medium',
    content: {
      title: '[[Modal Verbs|Verbos Modales]] — [[Sentence Building|Construye la frase]]',
      instructions: '[[Put the words|Pon las palabras]] [[in the correct order|en el orden correcto]] [[to form a sentence|para formar una frase]] [[using a modal verb|usando un verbo modal]]. [[The first word|La primera palabra]] [[is given|está dada]].',
      questions: [
        {
          question: 'guests / All / during / evacuate / must / a / fire / alarm. / immediately [Starts with: All]',
          correctAnswer: 'All guests must evacuate immediately during a fire alarm.',
          explanation: '[[Modal verb "must"|Verbo modal "must"]] [[for strong obligation|para obligación fuerte]]: subject + must + [[bare infinitive|infinitivo]] (evacuate). [[The adverb|El adverbio]] "immediately" [[can go after the main verb|puede ir después del verbo principal]].',
        },
        {
          question: 'manager / The / have / duty / should / informed / the / general / manager / immediately. [Starts with: The]',
          correctAnswer: 'The duty manager should have informed the general manager immediately.',
          explanation: '"Should have + [[past participle|participio pasado]]": [[subject|sujeto]] + should + have + [[past participle|participio pasado]] (informed) + [[object|objeto]] + [[time adverb|adverbio de tiempo]]. [[This expresses|Esto expresa]] [[regret or criticism about a past action|pesar o crítica por una acción pasada]].',
        },
        {
          question: 'not / Receptionists / must / room / a / number / guest\'s / to / reveal / anyone. [Starts with: Receptionists]',
          correctAnswer: 'Receptionists must not reveal a guest\'s room number to anyone.',
          explanation: '[[Prohibition with|Prohibición con]] "must not": subject + must + not + [[bare infinitive|infinitivo]] (reveal) + object. [[Note|Nota]]: "must not" [[is stronger than|es más fuerte que]] "should not" — [[it signals a strict rule|señala una norma estricta]].',
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'rec-b2-u3-l1-g5',
    type: 'true-false',
    level: 'B2',
    topic: 'Crisis Communication',
    difficulty: 'medium',
    content: {
      title: '[[Modal Verbs|Verbos Modales]] — [[True or False|Verdadero o Falso]]',
      instructions: '[[Decide|Decide]] [[if each sentence|si cada frase]] [[uses the modal verb correctly|usa el verbo modal correctamente]]. [[Pay attention|Presta atención]] [[to the meaning|al significado]] ([[obligation, prohibition, advice, deduction|obligación, prohibición, consejo, deducción]]).',
      questions: [
        {
          question: '"You should call security immediately — there is an intruder in the building." — [[Does "should" correctly express|¿Expresa "should" correctamente]] [[the urgency of this situation|la urgencia de esta situación]]?',
          options: ['[[True|Verdadero]] — [[It is appropriate here|Es apropiado aquí]]', '[[False|Falso]] — [[A stronger modal would be better|Un modal más fuerte sería mejor]]'],
          correctAnswer: 'False',
          explanation: '[[In a genuine emergency|En una emergencia real]] [[involving an intruder|que implica un intruso]], "must" [[would be more appropriate|sería más apropiado]] [[than "should"|que "should"]]. "Should" [[sounds like advice|suena como consejo]]; "must" [[signals|señala]] [[urgent, non-negotiable obligation|obligación urgente e innegociable]]. [[Better|Mejor]]: "You must call security immediately."',
        },
        {
          question: '"All staff must complete the emergency training before the end of this month — it is a regulatory requirement." — [[Is "must" used correctly here|¿Se usa "must" correctamente aquí]]?',
          options: ['[[True|Verdadero]] — [[It is correct|Es correcto]]', '[[False|Falso]] — [[It should be replaced|Debería reemplazarse]]'],
          correctAnswer: 'True',
          explanation: '[[Correct|Correcto]]. "Must" [[expresses|expresa]] [[obligation based on a rule or regulation|obligación basada en una norma o reglamento]]. [[A regulatory requirement|Un requisito reglamentario]] [[is a strong external obligation|es una obligación externa fuerte]], [[which matches|lo que coincide]] [[the force of "must"|con la fuerza de "must"]].',
        },
        {
          question: '"You must not to leave the front desk unattended at any time." — [[Is this sentence|¿Esta frase es]] [[grammatically correct|gramaticalmente correcta]]?',
          options: ['[[True|Verdadero]] — [[It is correct|Es correcta]]', '[[False|Falso]] — [[It contains an error|Contiene un error]]'],
          correctAnswer: 'False',
          explanation: '[[Incorrect|Incorrecta]]. [[Modal verbs|Los verbos modales]] [[are ALWAYS followed by|van SIEMPRE seguidos de]] [[the bare infinitive|el infinitivo]] ([[without "to"|sin "to"]]). [[Correct form|Forma correcta]]: "You must not leave the front desk unattended at any time." [[Never|Nunca]]: "must not to leave".',
        },
        {
          question: '"She ought to have contacted the guests before the planned maintenance work — they complained about the noise." — [[Is this sentence|¿Esta frase es]] [[grammatically correct|gramaticalmente correcta]] [[and used appropriately|y usada apropiadamente]]?',
          options: ['[[True|Verdadero]] — [[It is correct and appropriate|Es correcta y apropiada]]', '[[False|Falso]] — [[There is an error or it is inappropriate|Hay un error o es inapropiada]]'],
          correctAnswer: 'True',
          explanation: '[[Correct|Correcta]]. "Ought to have + [[past participle|participio pasado]]" [[expresses|expresa]] [[that something was the right thing to do but was not done|que algo era lo correcto pero no se hizo]]. [[It is similar to "should have"|Es similar a "should have"]] [[but slightly more formal|pero ligeramente más formal]]. [[Grammar and meaning are both correct here|La gramática y el significado son ambos correctos aquí]].',
        },
        {
          question: '"The security team must have noticed the suspicious behaviour — they were watching the CCTV all evening." — [[Does "must have" correctly express|¿Expresa "must have" correctamente]] [[deduction about the past|deducción sobre el pasado]]?',
          options: ['[[True|Verdadero]] — [[It is correct|Es correcto]]', '[[False|Falso]] — [[It should be "should have"|Debería ser "should have"]]'],
          correctAnswer: 'True',
          explanation: '[[Correct|Correcto]]. "Must have + [[past participle|participio pasado]]" [[expresses|expresa]] [[a strong logical deduction about the past|una deducción lógica fuerte sobre el pasado]]. [[The speaker is reasoning from evidence|El hablante razona a partir de evidencia]] (CCTV watched all evening) [[to reach a confident conclusion|para llegar a una conclusión segura]]. [[This is different from "should have"|Esto es diferente de "should have"]], [[which expresses|que expresa]] [[obligation or regret|obligación o pesar]].',
        },
      ],
    },
    topicName: 'Grammar',
  },
];
