/**
 * C1 Unit 1 — Personal Identity and Self-Image
 * Module 1: Identity and Society
 * Grammar: Modal verbs — deduction and probability
 *
 * Modelo ampliado: 18 ejercicios por lección × 6 lecciones = 108 ítems.
 * Patrón de IDs: c1-u1-g1..g18, v1..v18, r1..r18, l1..l18, w1..w18, s1..s18.
 */

import { Exercise } from '@/lib/exercise-generator';

export const UNIT_TITLE = 'Personal Identity and Self-Image';

export const UNIT_1_EXERCISES: Exercise[] = [
  {
    id: "c1-u1-g1",
    type: 'multiple-choice',
    level: 'C1',
    topic: "modal-deduction",
    difficulty: 'hard',
    content: {
      title: "[[Grammar|Gramática]]: [[Modal Verbs — Deduction|Modales de deducción]]",
      instructions: "Choose the best answer.",
      questions: [
        {
          question: "She left her keys on the table and her coat is still here. Which sentence expresses the best deduction about the past?",
          options: ["[[She can't have gone far.|No puede haber ido lejos.]]", "[[She must have gone far.|Debe haber ido lejos.]]", "[[She should have gone far.|Debería haber ido lejos.]]"],
          correctAnswer: 0,
          explanation: "*Can't have + past participle* = strong negative deduction about the past.",
        },
      ],
    },
    topicName: "Grammar",
  },
  {
    id: "c1-u1-g2",
    type: 'fill-blank',
    level: 'C1',
    topic: "modal-deduction",
    difficulty: 'hard',
    content: {
      title: "[[Grammar|Gramática]]: [[Modal Verbs — Deduction|Modales de deducción]]",
      instructions: "Complete with the correct modal structure.",
      questions: [
        {
          question: "He ____ ____ ____ the email — he replied within minutes.",
          options: ["[[must have read|debe haber leído]]", "[[can't have read|no puede haber leído]]", "[[might have read|podría haber leído]]"],
          correctAnswer: "must have read",
          acceptableAnswers: ["must have read"],
          explanation: "*Must have + V3* = logical conclusion about a past event.",
        },
      ],
    },
    topicName: "Grammar",
  },
  {
    id: "c1-u1-g3",
    type: 'multiple-choice',
    level: 'C1',
    topic: "modal-deduction",
    difficulty: 'hard',
    content: {
      title: "[[Grammar|Gramática]]: [[Modal Verbs — Deduction|Modales de deducción]]",
      instructions: "Choose the best answer.",
      questions: [
        {
          question: "The lights are off and nobody answered the door. Which fits the evidence?",
          options: ["[[They must have gone out.|Deben haber salido.]]", "[[They can't have gone out.|No pueden haber salido.]]", "[[They should have gone out.|Deberían haber salido.]]"],
          correctAnswer: 0,
          explanation: "Positive past deduction with clear evidence → *must have*.",
        },
      ],
    },
    topicName: "Grammar",
  },
  {
    id: "c1-u1-g4",
    type: 'multiple-choice',
    level: 'C1',
    topic: "modal-deduction",
    difficulty: 'hard',
    content: {
      title: "[[Grammar|Gramática]]: [[Modal Verbs — Deduction|Modales de deducción]]",
      instructions: "Choose the best answer.",
      questions: [
        {
          question: "You hear your neighbour's car start. Which expresses a logical present deduction?",
          options: ["[[They must be leaving now.|Deben estar saliendo ahora.]]", "[[They might leave tomorrow.|Podrían salir mañana.]]", "[[They should leave earlier.|Deberían salir antes.]]"],
          correctAnswer: 0,
          explanation: "*Must* + base verb / continuous expresses strong present deduction from evidence.",
        },
      ],
    },
    topicName: "Grammar",
  },
  {
    id: "c1-u1-g5",
    type: 'multiple-choice',
    level: 'C1',
    topic: "modal-deduction",
    difficulty: 'hard',
    content: {
      title: "[[Grammar|Gramática]]: [[Modal Verbs — Deduction|Modales de deducción]]",
      instructions: "Choose the best answer.",
      questions: [
        {
          question: "A colleague looks exhausted every morning. Which is a cautious epistemic claim?",
          options: ["[[She might be working a second job.|Podría estar trabajando un segundo empleo.]]", "[[She must be lazy.|Debe ser vaga.]]", "[[She should be fired.|Deberían despedirla.]]"],
          correctAnswer: 0,
          explanation: "*Might* + continuous = tentative deduction, appropriate without proof.",
        },
      ],
    },
    topicName: "Grammar",
  },
  {
    id: "c1-u1-g6",
    type: 'fill-blank',
    level: 'C1',
    topic: "modal-deduction",
    difficulty: 'hard',
    content: {
      title: "[[Grammar|Gramática]]: [[Modal Verbs — Deduction|Modales de deducción]]",
      instructions: "Complete with the correct modal structure.",
      questions: [
        {
          question: "The fingerprints don't match. The suspect ____ ____ ____ the weapon.",
          options: ["[[can't have touched|no puede haber tocado]]", "[[must have touched|debe haber tocado]]", "[[should have touched|debería haber tocado]]"],
          correctAnswer: "can't have touched",
          acceptableAnswers: ["can't have touched", "cannot have touched"],
          explanation: "Contradictory evidence → negative deduction *can't have*.",
        },
      ],
    },
    topicName: "Grammar",
  },
  {
    id: "c1-u1-g7",
    type: 'multiple-choice',
    level: 'C1',
    topic: "modal-deduction",
    difficulty: 'hard',
    content: {
      title: "[[Grammar|Gramática]]: [[Modal Verbs — Deduction|Modales de deducción]]",
      instructions: "Choose the best answer.",
      questions: [
        {
          question: "Which sentence criticises a past failure (not deduction)?",
          options: ["[[You should have told me earlier.|Deberías habérmelo dicho antes.]]", "[[You must have told me earlier.|Debiste decírmelo antes.]]", "[[You can't have told me earlier.|No puedes habérmelo dicho antes.]]"],
          correctAnswer: 0,
          explanation: "*Should have + V3* = reproach or regret about the past.",
        },
      ],
    },
    topicName: "Grammar",
  },
  {
    id: "c1-u1-g8",
    type: 'multiple-choice',
    level: 'C1',
    topic: "modal-deduction",
    difficulty: 'hard',
    content: {
      title: "[[Grammar|Gramática]]: [[Modal Verbs — Deduction|Modales de deducción]]",
      instructions: "Choose the best answer.",
      questions: [
        {
          question: "There is no milk in the fridge and the carton is in the bin. Which deduction is natural?",
          options: ["[[Someone must have finished it.|Alguien debe haberlo terminado.]]", "[[Someone might finish it tomorrow.|Alguien podría terminarlo mañana.]]", "[[Someone should finish it now.|Alguien debería terminarlo ahora.]]"],
          correctAnswer: 0,
          explanation: "Evidence points to a completed past action → *must have + V3*.",
        },
      ],
    },
    topicName: "Grammar",
  },
  {
    id: "c1-u1-g9",
    type: 'fill-blank',
    level: 'C1',
    topic: "modal-deduction",
    difficulty: 'hard',
    content: {
      title: "[[Grammar|Gramática]]: [[Modal Verbs — Deduction|Modales de deducción]]",
      instructions: "Complete with the correct modal structure.",
      questions: [
        {
          question: "He ____ ____ ____ abroad — he doesn't even own a passport.",
          options: ["[[can't have lived|no puede haber vivido]]", "[[must have lived|debe haber vivido]]", "[[might have lived|podría haber vivido]]"],
          correctAnswer: "can't have lived",
          acceptableAnswers: ["can't have lived", "cannot have lived"],
          explanation: "Impossible given the premise → *can't have lived*.",
        },
      ],
    },
    topicName: "Grammar",
  },
  {
    id: "c1-u1-g10",
    type: 'multiple-choice',
    level: 'C1',
    topic: "modal-deduction",
    difficulty: 'hard',
    content: {
      title: "[[Grammar|Gramática]]: [[Modal Verbs — Deduction|Modales de deducción]]",
      instructions: "Choose the best answer.",
      questions: [
        {
          question: "Which expresses a past possibility that remains open (we are not sure)?",
          options: ["[[They may have misunderstood the instructions.|Pueden haber malinterpretado las instrucciones.]]", "[[They must have misunderstood.|Debieron malinterpretarlas.]]", "[[They can't have misunderstood.|No pueden haberlas malinterpretado.]]"],
          correctAnswer: 0,
          explanation: "*May have* = epistemic possibility about the past.",
        },
      ],
    },
    topicName: "Grammar",
  },
  {
    id: "c1-u1-g11",
    type: 'multiple-choice',
    level: 'C1',
    topic: "modal-deduction",
    difficulty: 'hard',
    content: {
      title: "[[Grammar|Gramática]]: [[Modal Verbs — Deduction|Modales de deducción]]",
      instructions: "Choose the best answer.",
      questions: [
        {
          question: "The sky is completely clear and the pavement is dry. Which is a sound deduction?",
          options: ["[[It can't have rained heavily here recently.|No puede haber llovido mucho aquí recientemente.]]", "[[It must be going to rain.|Debe ir a llover.]]", "[[It should have rained.|Debería haber llovido.]]"],
          correctAnswer: 0,
          explanation: "Present evidence about the recent past → *can't have rained*.",
        },
      ],
    },
    topicName: "Grammar",
  },
  {
    id: "c1-u1-g12",
    type: 'fill-blank',
    level: 'C1',
    topic: "modal-deduction",
    difficulty: 'hard',
    content: {
      title: "[[Grammar|Gramática]]: [[Modal Verbs — Deduction|Modales de deducción]]",
      instructions: "Complete with the correct modal structure.",
      questions: [
        {
          question: "Given the tyre tracks in the snow, a vehicle ____ ____ ____ here minutes ago.",
          options: ["[[must have left|debe haber salido]]", "[[can't have left|no puede haber salido]]", "[[should have left|debería haber salido]]"],
          correctAnswer: "must have left",
          acceptableAnswers: ["must have left"],
          explanation: "Visible traces → affirmative past deduction.",
        },
      ],
    },
    topicName: "Grammar",
  },
  {
    id: "c1-u1-g13",
    type: 'multiple-choice',
    level: 'C1',
    topic: "modal-deduction",
    difficulty: 'hard',
    content: {
      title: "[[Grammar|Gramática]]: [[Modal Verbs — Deduction|Modales de deducción]]",
      instructions: "Choose the best answer.",
      questions: [
        {
          question: "Which uses *must* for logical necessity (not obligation)?",
          options: ["[[If A implies B and B is false, A must be false.|Si A implica B y B es falsa, A debe ser falsa.]]", "[[You must be on time for the exam.|Debes llegar puntual al examen.]]", "[[Students must wear IDs.|Los estudiantes deben llevar carnet.]]"],
          correctAnswer: 0,
          explanation: "Logical *must* (conclusion) vs deontic *must* (rule).",
        },
      ],
    },
    topicName: "Grammar",
  },
  {
    id: "c1-u1-g14",
    type: 'multiple-choice',
    level: 'C1',
    topic: "modal-deduction",
    difficulty: 'hard',
    content: {
      title: "[[Grammar|Gramática]]: [[Modal Verbs — Deduction|Modales de deducción]]",
      instructions: "Choose the best answer.",
      questions: [
        {
          question: "A friend missed your party without warning. A sympathetic deduction might be:",
          options: ["[[Something urgent might have come up.|Puede que surgiera algo urgente.]]", "[[They must hate you.|Deben odiarte.]]", "[[They should ignore you.|Deberían ignorarte.]]"],
          correctAnswer: 0,
          explanation: "*Might have* softens judgement; the others are harsh or illogical.",
        },
      ],
    },
    topicName: "Grammar",
  },
  {
    id: "c1-u1-g15",
    type: 'fill-blank',
    level: 'C1',
    topic: "modal-deduction",
    difficulty: 'hard',
    content: {
      title: "[[Grammar|Gramática]]: [[Modal Verbs — Deduction|Modales de deducción]]",
      instructions: "Complete with the correct modal structure.",
      questions: [
        {
          question: "The document is dated two years before his birth. He ____ ____ ____ it.",
          options: ["[[can't have written|no puede haberlo escrito]]", "[[must have written|debe haberlo escrito]]", "[[might have written|podría haberlo escrito]]"],
          correctAnswer: "can't have written",
          acceptableAnswers: ["can't have written", "cannot have written"],
          explanation: "Logical impossibility → *can't have written*.",
        },
      ],
    },
    topicName: "Grammar",
  },
  {
    id: "c1-u1-g16",
    type: 'multiple-choice',
    level: 'C1',
    topic: "modal-deduction",
    difficulty: 'hard',
    content: {
      title: "[[Grammar|Gramática]]: [[Modal Verbs — Deduction|Modales de deducción]]",
      instructions: "Choose the best answer.",
      questions: [
        {
          question: "Which sentence shows *couldn't have* as confident negative deduction?",
          options: ["[[She couldn't have known — we never told her.|No pudo saberlo — nunca se lo dijimos.]]", "[[She couldn't know the answer.|No podía saber la respuesta.]]", "[[She couldn't have been nicer.|No podría haber sido más amable.]]"],
          correctAnswer: 0,
          explanation: "*Couldn't have + V3* = past deduction: it was not possible.",
        },
      ],
    },
    topicName: "Grammar",
  },
  {
    id: "c1-u1-g17",
    type: 'multiple-choice',
    level: 'C1',
    topic: "modal-deduction",
    difficulty: 'hard',
    content: {
      title: "[[Grammar|Gramática]]: [[Modal Verbs — Deduction|Modales de deducción]]",
      instructions: "Choose the best answer.",
      questions: [
        {
          question: "Choose the sentence that hedges appropriately in an academic discussion:",
          options: ["[[The results may reflect sampling bias rather than a true effect.|Los resultados pueden reflejar sesgo de muestreo.]]", "[[The results must be wrong.|Los resultados deben estar mal.]]", "[[The results should be ignored.|Los resultados deberían ignorarse.]]"],
          correctAnswer: 0,
          explanation: "Cautious epistemic *may* fits scholarly register.",
        },
      ],
    },
    topicName: "Grammar",
  },
  {
    id: "c1-u1-g18",
    type: 'fill-blank',
    level: 'C1',
    topic: "modal-deduction",
    difficulty: 'hard',
    content: {
      title: "[[Grammar|Gramática]]: [[Modal Verbs — Deduction|Modales de deducción]]",
      instructions: "Complete with the correct modal structure.",
      questions: [
        {
          question: "You're 99% sure she saw the message. She ____ ____ ____ it.",
          options: ["[[must have seen|debe haberlo visto]]", "[[can't have seen|no puede haberlo visto]]", "[[might have seen|podría haberlo visto]]"],
          correctAnswer: "must have seen",
          acceptableAnswers: ["must have seen"],
          explanation: "Very strong evidence → *must have seen*.",
        },
      ],
    },
    topicName: "Grammar",
  },
  {
    id: "c1-u1-v1",
    type: 'multiple-choice',
    level: 'C1',
    topic: "identity-vocabulary",
    difficulty: 'hard',
    content: {
      title: "[[Vocabulary|Vocabulario]]: [[Identity and Personality|Identidad y personalidad]]",
      instructions: "Choose the word or phrase that best completes the sentence.",
      questions: [
        {
          question: "She was respected for her _______ — she refused to perform a persona that felt inauthentic.",
          options: ["[[authenticity|autenticidad]]", "[[conformity|conformidad]]", "[[ambivalence|ambivalencia]]"],
          correctAnswer: 0,
          explanation: "*Authenticity* = alignment between behaviour and genuine self.",
        },
      ],
    },
    topicName: "Vocabulary",
  },
  {
    id: "c1-u1-v2",
    type: 'multiple-choice',
    level: 'C1',
    topic: "identity-vocabulary",
    difficulty: 'hard',
    content: {
      title: "[[Vocabulary|Vocabulario]]: [[Identity and Personality|Identidad y personalidad]]",
      instructions: "Choose the word or phrase that best completes the sentence.",
      questions: [
        {
          question: "Therapy helped her _______ a more coherent narrative of who she is.",
          options: ["[[develop|desarrollar]]", "[[make|hacer]]", "[[do|hacer]]"],
          correctAnswer: 0,
          explanation: "Collocation: *develop* a sense of identity / narrative.",
        },
      ],
    },
    topicName: "Vocabulary",
  },
  {
    id: "c1-u1-v3",
    type: 'multiple-choice',
    level: 'C1',
    topic: "identity-vocabulary",
    difficulty: 'hard',
    content: {
      title: "[[Vocabulary|Vocabulario]]: [[Identity and Personality|Identidad y personalidad]]",
      instructions: "Choose the word or phrase that best completes the sentence.",
      questions: [
        {
          question: "He was deeply _______ — he could attune to others' emotions with unusual precision.",
          options: ["[[empathetic|empático]]", "[[apathetic|apático]]", "[[sceptical|escéptico]]"],
          correctAnswer: 0,
          explanation: "*Empathetic* fits emotional attunement.",
        },
      ],
    },
    topicName: "Vocabulary",
  },
  {
    id: "c1-u1-v4",
    type: 'multiple-choice',
    level: 'C1',
    topic: "identity-vocabulary",
    difficulty: 'hard',
    content: {
      title: "[[Vocabulary|Vocabulario]]: [[Identity and Personality|Identidad y personalidad]]",
      instructions: "Choose the word or phrase that best completes the sentence.",
      questions: [
        {
          question: "Many adolescents experience _______ about career choices — wanting two incompatible paths at once.",
          options: ["[[ambivalence|ambivalencia]]", "[[clarity|claridad]]", "[[resilience|resiliencia]]"],
          correctAnswer: 0,
          explanation: "*Ambivalence* = mixed or conflicting feelings.",
        },
      ],
    },
    topicName: "Vocabulary",
  },
  {
    id: "c1-u1-v5",
    type: 'multiple-choice',
    level: 'C1',
    topic: "identity-vocabulary",
    difficulty: 'hard',
    content: {
      title: "[[Vocabulary|Vocabulario]]: [[Identity and Personality|Identidad y personalidad]]",
      instructions: "Choose the word or phrase that best completes the sentence.",
      questions: [
        {
          question: "High _______ _______ is associated with lower anxiety when social feedback is ambiguous.",
          options: ["[[self-concept clarity|claridad del autoconcepto]]", "[[selfish clarity|claridad egoísta]]", "[[concept shelf|estante de conceptos]]"],
          correctAnswer: 0,
          explanation: "Technical term from psychology: *self-concept clarity*.",
        },
      ],
    },
    topicName: "Vocabulary",
  },
  {
    id: "c1-u1-v6",
    type: 'multiple-choice',
    level: 'C1',
    topic: "identity-vocabulary",
    difficulty: 'hard',
    content: {
      title: "[[Vocabulary|Vocabulario]]: [[Identity and Personality|Identidad y personalidad]]",
      instructions: "Choose the word or phrase that best completes the sentence.",
      questions: [
        {
          question: "Online, people often _______ a polished version of the self.",
          options: ["[[curate|curar / seleccionar cuidadosamente]]", "[[destroy|destruir]]", "[[abandon|abandonar]]"],
          correctAnswer: 0,
          explanation: "*Curate* = carefully select and present (digital self).",
        },
      ],
    },
    topicName: "Vocabulary",
  },
  {
    id: "c1-u1-v7",
    type: 'multiple-choice',
    level: 'C1',
    topic: "identity-vocabulary",
    difficulty: 'hard',
    content: {
      title: "[[Vocabulary|Vocabulario]]: [[Identity and Personality|Identidad y personalidad]]",
      instructions: "Choose the word or phrase that best completes the sentence.",
      questions: [
        {
          question: "Goffman described social life as _______ — we adjust self-presentation to the audience.",
          options: ["[[performance|representación / actuación social]]", "[[isolation|aislamiento]]", "[[randomness|azar]]"],
          correctAnswer: 0,
          explanation: "Sociological metaphor: *performance* (not necessarily deceit).",
        },
      ],
    },
    topicName: "Vocabulary",
  },
  {
    id: "c1-u1-v8",
    type: 'multiple-choice',
    level: 'C1',
    topic: "identity-vocabulary",
    difficulty: 'hard',
    content: {
      title: "[[Vocabulary|Vocabulario]]: [[Identity and Personality|Identidad y personalidad]]",
      instructions: "Choose the word or phrase that best completes the sentence.",
      questions: [
        {
          question: "_______, she agreed to help, though she still had private doubts.",
          options: ["[[Outwardly|Externamente]]", "[[Inwardly|Interiormente]]", "[[Rarely|Raramente]]"],
          correctAnswer: 0,
          explanation: "*Outwardly* contrasts public stance with inner doubt.",
        },
      ],
    },
    topicName: "Vocabulary",
  },
  {
    id: "c1-u1-v9",
    type: 'multiple-choice',
    level: 'C1',
    topic: "identity-vocabulary",
    difficulty: 'hard',
    content: {
      title: "[[Vocabulary|Vocabulario]]: [[Identity and Personality|Identidad y personalidad]]",
      instructions: "Choose the word or phrase that best completes the sentence.",
      questions: [
        {
          question: "Years of setbacks tested her _______ — she recovered without losing her sense of purpose.",
          options: ["[[resilience|resiliencia]]", "[[fragility|fragilidad]]", "[[indifference|indiferencia]]"],
          correctAnswer: 0,
          explanation: "*Resilience* = bounce-back capacity.",
        },
      ],
    },
    topicName: "Vocabulary",
  },
  {
    id: "c1-u1-v10",
    type: 'multiple-choice',
    level: 'C1',
    topic: "identity-vocabulary",
    difficulty: 'hard',
    content: {
      title: "[[Vocabulary|Vocabulario]]: [[Identity and Personality|Identidad y personalidad]]",
      instructions: "Choose the word or phrase that best completes the sentence.",
      questions: [
        {
          question: "He struggled with _______ _______ despite objective success — fear of being exposed as a fraud.",
          options: ["[[impostor syndrome|síndrome del impostor]]", "[[runner syndrome|síndrome del corredor]]", "[[winter syndrome|síndrome invernal]]"],
          correctAnswer: 0,
          explanation: "Fixed expression: *impostor syndrome*.",
        },
      ],
    },
    topicName: "Vocabulary",
  },
  {
    id: "c1-u1-v11",
    type: 'multiple-choice',
    level: 'C1',
    topic: "identity-vocabulary",
    difficulty: 'hard',
    content: {
      title: "[[Vocabulary|Vocabulario]]: [[Identity and Personality|Identidad y personalidad]]",
      instructions: "Choose the word or phrase that best completes the sentence.",
      questions: [
        {
          question: "The essay explores how _______ _______ shapes the stories we tell about our lives.",
          options: ["[[narrative identity|identidad narrativa]]", "[[narrative invoice|factura narrativa]]", "[[identity invoice|factura identitaria]]"],
          correctAnswer: 0,
          explanation: "Psychology term: *narrative identity*.",
        },
      ],
    },
    topicName: "Vocabulary",
  },
  {
    id: "c1-u1-v12",
    type: 'multiple-choice',
    level: 'C1',
    topic: "identity-vocabulary",
    difficulty: 'hard',
    content: {
      title: "[[Vocabulary|Vocabulario]]: [[Identity and Personality|Identidad y personalidad]]",
      instructions: "Choose the word or phrase that best completes the sentence.",
      questions: [
        {
          question: "Constant _______ _______ on social media can erode self-esteem when context is stripped away.",
          options: ["[[upward comparison|comparación ascendente]]", "[[downward coffee|café descendente]]", "[[sideways motion|movimiento lateral]]"],
          correctAnswer: 0,
          explanation: "Technical phrase: comparing oneself to those *above*.",
        },
      ],
    },
    topicName: "Vocabulary",
  },
  {
    id: "c1-u1-v13",
    type: 'multiple-choice',
    level: 'C1',
    topic: "identity-vocabulary",
    difficulty: 'hard',
    content: {
      title: "[[Vocabulary|Vocabulario]]: [[Identity and Personality|Identidad y personalidad]]",
      instructions: "Choose the word or phrase that best completes the sentence.",
      questions: [
        {
          question: "She valued _______ _______ over popularity — acting on principles even when costly.",
          options: ["[[integrity|integridad]]", "[[popularity|popularidad]]", "[[visibility|visibilidad]]"],
          correctAnswer: 0,
          explanation: "*Integrity* = moral consistency.",
        },
      ],
    },
    topicName: "Vocabulary",
  },
  {
    id: "c1-u1-v14",
    type: 'multiple-choice',
    level: 'C1',
    topic: "identity-vocabulary",
    difficulty: 'hard',
    content: {
      title: "[[Vocabulary|Vocabulario]]: [[Identity and Personality|Identidad y personalidad]]",
      instructions: "Choose the word or phrase that best completes the sentence.",
      questions: [
        {
          question: "The interview examines how minority stress affects _______ _______ in young adults.",
          options: ["[[sense of belonging|sentido de pertenencia]]", "[[sense of billing|sentido de facturación]]", "[[bill of belonging|factura de pertenencia]]"],
          correctAnswer: 0,
          explanation: "Natural collocation: *sense of belonging*.",
        },
      ],
    },
    topicName: "Vocabulary",
  },
  {
    id: "c1-u1-v15",
    type: 'multiple-choice',
    level: 'C1',
    topic: "identity-vocabulary",
    difficulty: 'hard',
    content: {
      title: "[[Vocabulary|Vocabulario]]: [[Identity and Personality|Identidad y personalidad]]",
      instructions: "Choose the word or phrase that best completes the sentence.",
      questions: [
        {
          question: "Critics argue that algorithmic feeds encourage _______ _______ rather than authentic exploration.",
          options: ["[[performative authenticity|autenticidad performativa]]", "[[lazy grammar|gramática perezosa]]", "[[silent music|música silenciosa]]"],
          correctAnswer: 0,
          explanation: "Oxymoron-style collocation common in cultural criticism.",
        },
      ],
    },
    topicName: "Vocabulary",
  },
  {
    id: "c1-u1-v16",
    type: 'multiple-choice',
    level: 'C1',
    topic: "identity-vocabulary",
    difficulty: 'hard',
    content: {
      title: "[[Vocabulary|Vocabulario]]: [[Identity and Personality|Identidad y personalidad]]",
      instructions: "Choose the word or phrase that best completes the sentence.",
      questions: [
        {
          question: "_______, he remained polite, but his tone suggested deep disagreement.",
          options: ["[[Outwardly|Externamente]]", "[[Secretly|Secretamente]]", "[[Instantly|Al instante]]"],
          correctAnswer: 0,
          explanation: "Contrast surface behaviour and implied stance.",
        },
      ],
    },
    topicName: "Vocabulary",
  },
  {
    id: "c1-u1-v17",
    type: 'multiple-choice',
    level: 'C1',
    topic: "identity-vocabulary",
    difficulty: 'hard',
    content: {
      title: "[[Vocabulary|Vocabulario]]: [[Identity and Personality|Identidad y personalidad]]",
      instructions: "Choose the word or phrase that best completes the sentence.",
      questions: [
        {
          question: "The course unit links _______ _______ with modal verbs of deduction.",
          options: ["[[personal identity|identidad personal]]", "[[personal invoice|factura personal]]", "[[private weather|tiempo privado]]"],
          correctAnswer: 0,
          explanation: "Core theme: *personal identity*.",
        },
      ],
    },
    topicName: "Vocabulary",
  },
  {
    id: "c1-u1-v18",
    type: 'multiple-choice',
    level: 'C1',
    topic: "identity-vocabulary",
    difficulty: 'hard',
    content: {
      title: "[[Vocabulary|Vocabulario]]: [[Identity and Personality|Identidad y personalidad]]",
      instructions: "Choose the word or phrase that best completes the sentence.",
      questions: [
        {
          question: "_______ involves comparing your present self to an earlier version of you.",
          options: ["[[Temporal self-comparison|Autocomparación temporal]]", "[[Spatial self-collision|Autocolisión espacial]]", "[[Verbal self-import|autoimportación verbal]]"],
          correctAnswer: 0,
          explanation: "Developmental psychology concept (temporal comparison).",
        },
      ],
    },
    topicName: "Vocabulary",
  },
  {
    id: "c1-u1-r1",
    type: 'reading-comprehension',
    level: 'C1',
    topic: "identity-reading",
    difficulty: 'hard',
    content: {
      title: "[[Reading|Lectura]]: [[Identity and Self-Image|Identidad e imagen personal]]",
      instructions: "Read the extract and choose the best answer.",
      questions: [
        {
          question: "Text: \"Our self-concept is actively constructed through social interaction and cultural narratives, not merely 'discovered' in isolation.\"\n\nAccording to the extract:",
          options: ["[[It is formed through social and cultural influences.|Se forma por influencias sociales y culturales.]]", "[[It is fixed at adolescence.|Fija en la adolescencia.]]", "[[It ignores other people.|Ignora a otras personas.]]"],
          correctAnswer: 0,
          explanation: "The text stresses *constructed* via interaction and narratives.",
        },
      ],
    },
    topicName: "Reading",
  },
  {
    id: "c1-u1-r2",
    type: 'reading-comprehension',
    level: 'C1',
    topic: "identity-reading",
    difficulty: 'hard',
    content: {
      title: "[[Reading|Lectura]]: [[Identity and Self-Image|Identidad e imagen personal]]",
      instructions: "Read the extract and choose the best answer.",
      questions: [
        {
          question: "Text: \"Goffman likened everyday life to theatre: we perform roles calibrated to each audience.\"\n\nAccording to the extract:",
          options: ["[[Self-presentation varies by context.|La autopresentación varía según el contexto.]]", "[[We have only one static identity.|Solo hay una identidad estática.]]", "[[Audiences are irrelevant.|El público es irrelevante.]]"],
          correctAnswer: 0,
          explanation: "Performance metaphor → contextual variation.",
        },
      ],
    },
    topicName: "Reading",
  },
  {
    id: "c1-u1-r3",
    type: 'reading-comprehension',
    level: 'C1',
    topic: "identity-reading",
    difficulty: 'hard',
    content: {
      title: "[[Reading|Lectura]]: [[Identity and Self-Image|Identidad e imagen personal]]",
      instructions: "Read the extract and choose the best answer.",
      questions: [
        {
          question: "Text: \"Narrative identity theory holds that people integrate life events into a revisable life story.\"\n\nAccording to the extract:",
          options: ["[[The story of self can change with new experiences.|La historia del yo puede cambiar.]]", "[[The story is sealed at age thirty.|La historia se cierra a los 30.]]", "[[Events should not be integrated.|Los eventos no deben integrarse.]]"],
          correctAnswer: 0,
          explanation: "*Revisable* implies change over time.",
        },
      ],
    },
    topicName: "Reading",
  },
  {
    id: "c1-u1-r4",
    type: 'reading-comprehension',
    level: 'C1',
    topic: "identity-reading",
    difficulty: 'hard',
    content: {
      title: "[[Reading|Lectura]]: [[Identity and Self-Image|Identidad e imagen personal]]",
      instructions: "Read the extract and choose the best answer.",
      questions: [
        {
          question: "Text: \"Self-concept clarity — a stable, well-defined sense of who one is — correlates with resilience.\"\n\nAccording to the extract:",
          options: ["[[Clear self-knowledge links to coping well with setbacks.|Claridad identitaria y afrontamiento.]]", "[[Clarity removes all emotions.|La claridad elimina emociones.]]", "[[Resilience means avoiding relationships.|Resiliencia evita relaciones.]]"],
          correctAnswer: 0,
          explanation: "Clarity supports resilience according to the extract.",
        },
      ],
    },
    topicName: "Reading",
  },
  {
    id: "c1-u1-r5",
    type: 'reading-comprehension',
    level: 'C1',
    topic: "identity-reading",
    difficulty: 'hard',
    content: {
      title: "[[Reading|Lectura]]: [[Identity and Self-Image|Identidad e imagen personal]]",
      instructions: "Read the extract and choose the best answer.",
      questions: [
        {
          question: "Text: \"Curated selfies and algorithmic feedback may amplify social comparison and self-doubt.\"\n\nAccording to the extract:",
          options: ["[[Online presentation can worsen comparative self-evaluation.|La presentación online puede empeorar la comparación.]]", "[[Algorithms always improve wellbeing.|Los algoritmos siempre mejoran el bienestar.]]", "[[Selfies have no psychological effects.|Los selfies no tienen efectos.]]"],
          correctAnswer: 0,
          explanation: "Critical view: *amplify comparison and doubt*.",
        },
      ],
    },
    topicName: "Reading",
  },
  {
    id: "c1-u1-r6",
    type: 'reading-comprehension',
    level: 'C1',
    topic: "identity-reading",
    difficulty: 'hard',
    content: {
      title: "[[Reading|Lectura]]: [[Identity and Self-Image|Identidad e imagen personal]]",
      instructions: "Read the extract and choose the best answer.",
      questions: [
        {
          question: "Text: \"Authenticity is often framed as alignment between values and behaviour, not rigid consistency in every role.\"\n\nAccording to the extract:",
          options: ["[[Values-behaviour fit matters more than identical behaviour everywhere.|Encaje valores-comportamiento.]]", "[[Authentic people never adapt to context.|Nunca adaptarse.]]", "[[Roles should be abandoned.|Hay que abandonar roles.]]"],
          correctAnswer: 0,
          explanation: "Nuanced definition of authenticity.",
        },
      ],
    },
    topicName: "Reading",
  },
  {
    id: "c1-u1-r7",
    type: 'reading-comprehension',
    level: 'C1',
    topic: "identity-reading",
    difficulty: 'hard',
    content: {
      title: "[[Reading|Lectura]]: [[Identity and Self-Image|Identidad e imagen personal]]",
      instructions: "Read the extract and choose the best answer.",
      questions: [
        {
          question: "Text: \"Upward comparison can motivate improvement but undermine self-worth when contextual factors are ignored.\"\n\nAccording to the extract:",
          options: ["[[It is double-edged: motivation versus self-esteem risk.|De doble filo.]]", "[[It is always beneficial.|Siempre beneficioso.]]", "[[It removes ambition.|Elimina ambición.]]"],
          correctAnswer: 0,
          explanation: "Both benefits and risks are named.",
        },
      ],
    },
    topicName: "Reading",
  },
  {
    id: "c1-u1-r8",
    type: 'reading-comprehension',
    level: 'C1',
    topic: "identity-reading",
    difficulty: 'hard',
    content: {
      title: "[[Reading|Lectura]]: [[Identity and Self-Image|Identidad e imagen personal]]",
      instructions: "Read the extract and choose the best answer.",
      questions: [
        {
          question: "Text: \"Impostor feelings are common among high achievers who attribute success to luck rather than ability.\"\n\nAccording to the extract:",
          options: ["[[Success can feel undeserved even when evidence is strong.|Éxito percibido como no merecido.]]", "[[Only incompetent people doubt themselves.|Solo los incompetentes dudan.]]", "[[Luck never plays a role in careers.|El azar no influye.]]"],
          correctAnswer: 0,
          explanation: "Impostor phenomenon description.",
        },
      ],
    },
    topicName: "Reading",
  },
  {
    id: "c1-u1-r9",
    type: 'reading-comprehension',
    level: 'C1',
    topic: "identity-reading",
    difficulty: 'hard',
    content: {
      title: "[[Reading|Lectura]]: [[Identity and Self-Image|Identidad e imagen personal]]",
      instructions: "Read the extract and choose the best answer.",
      questions: [
        {
          question: "Text: \"Belonging cues from peers can buffer stress during identity exploration in emerging adulthood.\"\n\nAccording to the extract:",
          options: ["[[Social acceptance supports stress regulation during identity work.|Aceptación social amortigua estrés.]]", "[[Peers always increase stress.|Los pares siempre aumentan estrés.]]", "[[Exploration should be avoided.|Hay que evitar explorar.]]"],
          correctAnswer: 0,
          explanation: "*Buffer* = protective effect.",
        },
      ],
    },
    topicName: "Reading",
  },
  {
    id: "c1-u1-r10",
    type: 'reading-comprehension',
    level: 'C1',
    topic: "identity-reading",
    difficulty: 'hard',
    content: {
      title: "[[Reading|Lectura]]: [[Identity and Self-Image|Identidad e imagen personal]]",
      instructions: "Read the extract and choose the best answer.",
      questions: [
        {
          question: "Text: \"Minimal self-views emphasise continuity of consciousness rather than narrative richness.\"\n\nAccording to the extract:",
          options: ["[[Some models prioritise bare continuity over elaborate stories.|Continuidad vs narrativa elaborada.]]", "[[Narrative richness is the only valid model.|Solo vale la narrativa rica.]]", "[[Consciousness is irrelevant to identity.|La conciencia es irrelevante.]]"],
          correctAnswer: 0,
          explanation: "Contrast with narrative approaches.",
        },
      ],
    },
    topicName: "Reading",
  },
  {
    id: "c1-u1-r11",
    type: 'reading-comprehension',
    level: 'C1',
    topic: "identity-reading",
    difficulty: 'hard',
    content: {
      title: "[[Reading|Lectura]]: [[Identity and Self-Image|Identidad e imagen personal]]",
      instructions: "Read the extract and choose the best answer.",
      questions: [
        {
          question: "Text: \"Cultural norms prescribe which identity claims are legitimate or taboo in public discourse.\"\n\nAccording to the extract:",
          options: ["[[Legitimacy of identity claims is culturally regulated.|Regulación cultural de reclamaciones identitarias.]]", "[[All cultures treat identity identically.|Todas las culturas igual.]]", "[[Public discourse ignores identity.|El discurso público ignora la identidad.]]"],
          correctAnswer: 0,
          explanation: "Normative dimension of identity.",
        },
      ],
    },
    topicName: "Reading",
  },
  {
    id: "c1-u1-r12",
    type: 'reading-comprehension',
    level: 'C1',
    topic: "identity-reading",
    difficulty: 'hard',
    content: {
      title: "[[Reading|Lectura]]: [[Identity and Self-Image|Identidad e imagen personal]]",
      instructions: "Read the extract and choose the best answer.",
      questions: [
        {
          question: "Text: \"Intersectionality highlights that gender, class and ethnicity jointly shape self-understanding.\"\n\nAccording to the extract:",
          options: ["[[Axes of identity interact rather than add up simply.|Intersección de ejes.]]", "[[Only one axis matters at a time.|Solo un eje importa.]]", "[[Class erases ethnicity.|La clase borra etnia.]]"],
          correctAnswer: 0,
          explanation: "Joint shaping = intersectionality.",
        },
      ],
    },
    topicName: "Reading",
  },
  {
    id: "c1-u1-r13",
    type: 'reading-comprehension',
    level: 'C1',
    topic: "identity-reading",
    difficulty: 'hard',
    content: {
      title: "[[Reading|Lectura]]: [[Identity and Self-Image|Identidad e imagen personal]]",
      instructions: "Read the extract and choose the best answer.",
      questions: [
        {
          question: "Text: \"Defensive self-enhancement protects esteem but can block corrective feedback.\"\n\nAccording to the extract:",
          options: ["[[Self-protection trades off against openness to critique.|Protección vs apertura al feedback.]]", "[[Feedback is never useful.|El feedback nunca sirve.]]", "[[Esteem should be abandoned.|Hay que abandonar la autoestima.]]"],
          correctAnswer: 0,
          explanation: "Trade-off in the extract.",
        },
      ],
    },
    topicName: "Reading",
  },
  {
    id: "c1-u1-r14",
    type: 'reading-comprehension',
    level: 'C1',
    topic: "identity-reading",
    difficulty: 'hard',
    content: {
      title: "[[Reading|Lectura]]: [[Identity and Self-Image|Identidad e imagen personal]]",
      instructions: "Read the extract and choose the best answer.",
      questions: [
        {
          question: "Text: \"Identity plurality acknowledges multiple coherent selves across communities without pathology.\"\n\nAccording to the extract:",
          options: ["[[Multiple situated selves need not imply disorder.|Pluralidad sin patología.]]", "[[Multiple selves are always pathological.|Siempre patológico.]]", "[[Communities erase individuality.|Las comunidades borran individualidad.]]"],
          correctAnswer: 0,
          explanation: "*Without pathology* is key.",
        },
      ],
    },
    topicName: "Reading",
  },
  {
    id: "c1-u1-r15",
    type: 'reading-comprehension',
    level: 'C1',
    topic: "identity-reading",
    difficulty: 'hard',
    content: {
      title: "[[Reading|Lectura]]: [[Identity and Self-Image|Identidad e imagen personal]]",
      instructions: "Read the extract and choose the best answer.",
      questions: [
        {
          question: "Text: \"Temporal comparison can foster growth when prior setbacks are framed as learning.\"\n\nAccording to the extract:",
          options: ["[[Reframing the past can support development.|Reencuadre del pasado.]]", "[[Past failures must be denied.|Hay que negar fracasos.]]", "[[Learning from the past is impossible.|No se puede aprender.]]"],
          correctAnswer: 0,
          explanation: "Framing matters for growth.",
        },
      ],
    },
    topicName: "Reading",
  },
  {
    id: "c1-u1-r16",
    type: 'reading-comprehension',
    level: 'C1',
    topic: "identity-reading",
    difficulty: 'hard',
    content: {
      title: "[[Reading|Lectura]]: [[Identity and Self-Image|Identidad e imagen personal]]",
      instructions: "Read the extract and choose the best answer.",
      questions: [
        {
          question: "Text: \"Stereotype threat can undermine performance on tasks framed as diagnostic of ability.\"\n\nAccording to the extract:",
          options: ["[[Situational framing can trigger anxiety linked to stereotypes.|Amenaza del estereotipo situacional.]]", "[[Stereotypes never affect performance.|Los estereotipos no afectan.]]", "[[Diagnostic tasks are always fair.|Siempre justas.]]"],
          correctAnswer: 0,
          explanation: "Classic social-psychology idea.",
        },
      ],
    },
    topicName: "Reading",
  },
  {
    id: "c1-u1-r17",
    type: 'reading-comprehension',
    level: 'C1',
    topic: "identity-reading",
    difficulty: 'hard',
    content: {
      title: "[[Reading|Lectura]]: [[Identity and Self-Image|Identidad e imagen personal]]",
      instructions: "Read the extract and choose the best answer.",
      questions: [
        {
          question: "Text: \"Self-compassion treats setbacks with kindness rather than harsh self-criticism.\"\n\nAccording to the extract:",
          options: ["[[A gentler internal stance toward failure is advocated.|Autocompasión frente al fracaso.]]", "[[Harsh criticism is always best.|La crítica dura siempre es mejor.]]", "[[Setbacks should be ignored.|Hay que ignorar fracasos.]]"],
          correctAnswer: 0,
          explanation: "*Kindness vs harsh criticism*.",
        },
      ],
    },
    topicName: "Reading",
  },
  {
    id: "c1-u1-r18",
    type: 'reading-comprehension',
    level: 'C1',
    topic: "identity-reading",
    difficulty: 'hard',
    content: {
      title: "[[Reading|Lectura]]: [[Identity and Self-Image|Identidad e imagen personal]]",
      instructions: "Read the extract and choose the best answer.",
      questions: [
        {
          question: "Text: \"Identity work continues across the lifespan as roles and commitments evolve.\"\n\nAccording to the extract:",
          options: ["[[Identity is an ongoing process, not a one-off achievement.|Proceso continuo.]]", "[[Identity stabilises fully at twenty-five.|Se estabiliza a los 25.]]", "[[Roles never change.|Los roles no cambian.]]"],
          correctAnswer: 0,
          explanation: "*Continues across the lifespan*.",
        },
      ],
    },
    topicName: "Reading",
  },
  {
    id: "c1-u1-l1",
    type: 'listening-comprehension',
    level: 'C1',
    topic: "identity-listening",
    difficulty: 'hard',
    content: {
      title: "[[Listening|Comprensión auditiva]]: [[Identity in discourse|Identidad en el discurso]]",
      instructions: "Listen to the extract (read the script if no audio) and answer.",
      questions: [
        {
          question: "Speaker: \"People with clearer self-concepts often rebound faster after major life stressors.\"\n\nThe speaker links clarity to:",
          options: ["[[resilience after adversity|resiliencia tras adversidad]]", "[[higher income|mayores ingresos]]", "[[shorter sleep|menos sueño]]"],
          correctAnswer: 0,
          explanation: "Rebound = resilience.",
        },
      ],
    },
    topicName: "Listening",
  },
  {
    id: "c1-u1-l2",
    type: 'listening-comprehension',
    level: 'C1',
    topic: "identity-listening",
    difficulty: 'hard',
    content: {
      title: "[[Listening|Comprensión auditiva]]: [[Identity in discourse|Identidad en el discurso]]",
      instructions: "Listen to the extract (read the script if no audio) and answer.",
      questions: [
        {
          question: "Speaker: \"A turning point narrative marks when someone felt they 'became who they really were'.\"\n\nThe focus is:",
          options: ["[[biographical moments that redefine identity|momentos que redefinen identidad]]", "[[forgetting the past|olvidar el pasado]]", "[[avoiding all change|evitar cambio]]"],
          correctAnswer: 0,
          explanation: "*Turning point* stories.",
        },
      ],
    },
    topicName: "Listening",
  },
  {
    id: "c1-u1-l3",
    type: 'listening-comprehension',
    level: 'C1',
    topic: "identity-listening",
    difficulty: 'hard',
    content: {
      title: "[[Listening|Comprensión auditiva]]: [[Identity in discourse|Identidad en el discurso]]",
      instructions: "Listen to the extract (read the script if no audio) and answer.",
      questions: [
        {
          question: "Lecturer: \"Upward comparison can erode self-esteem if we discount situational advantages.\"\n\nMain risk:",
          options: ["[[damaged self-worth when context is ignored|autoestima dañada sin contexto]]", "[[guaranteed motivation|motivación garantizada]]", "[[elimination of envy|eliminación de envidia]]"],
          correctAnswer: 0,
          explanation: "Matches upward comparison warning.",
        },
      ],
    },
    topicName: "Listening",
  },
  {
    id: "c1-u1-l4",
    type: 'listening-comprehension',
    level: 'C1',
    topic: "identity-listening",
    difficulty: 'hard',
    content: {
      title: "[[Listening|Comprensión auditiva]]: [[Identity in discourse|Identidad en el discurso]]",
      instructions: "Listen to the extract (read the script if no audio) and answer.",
      questions: [
        {
          question: "Interviewer: \"Performative authenticity online can feel compulsory rather than liberating.\"\n\nThe tone suggests:",
          options: ["[[pressure to appear authentic|presión por parecer auténtico]]", "[[total freedom online|libertad total]]", "[[authenticity is effortless|autenticidad sin esfuerzo]]"],
          correctAnswer: 0,
          explanation: "*Compulsory* implies pressure.",
        },
      ],
    },
    topicName: "Listening",
  },
  {
    id: "c1-u1-l5",
    type: 'listening-comprehension',
    level: 'C1',
    topic: "identity-listening",
    difficulty: 'hard',
    content: {
      title: "[[Listening|Comprensión auditiva]]: [[Identity in discourse|Identidad en el discurso]]",
      instructions: "Listen to the extract (read the script if no audio) and answer.",
      questions: [
        {
          question: "Coach: \"Name the emotion beneath the self-criticism — that step reduces rumination.\"\n\nThe advice targets:",
          options: ["[[metacognitive awareness of feelings|conciencia metacognitiva]]", "[[suppressing all emotions|suprimir emociones]]", "[[ignoring goals|ignorar metas]]"],
          correctAnswer: 0,
          explanation: "Labeling emotions → metacognition.",
        },
      ],
    },
    topicName: "Listening",
  },
  {
    id: "c1-u1-l6",
    type: 'listening-comprehension',
    level: 'C1',
    topic: "identity-listening",
    difficulty: 'hard',
    content: {
      title: "[[Listening|Comprensión auditiva]]: [[Identity in discourse|Identidad en el discurso]]",
      instructions: "Listen to the extract (read the script if no audio) and answer.",
      questions: [
        {
          question: "Podcast host: \"Belonging isn't the same as fitting in — you can conform and still feel alone.\"\n\nDistinction:",
          options: ["[[conformity without connection ≠ belonging|conformidad sin conexión]]", "[[fitting in always equals belonging|encajar siempre es pertenencia]]", "[[belonging requires uniformity|pertenencia exige uniformidad]]"],
          correctAnswer: 0,
          explanation: "Contrast *fitting in* vs *belonging*.",
        },
      ],
    },
    topicName: "Listening",
  },
  {
    id: "c1-u1-l7",
    type: 'listening-comprehension',
    level: 'C1',
    topic: "identity-listening",
    difficulty: 'hard',
    content: {
      title: "[[Listening|Comprensión auditiva]]: [[Identity in discourse|Identidad en el discurso]]",
      instructions: "Listen to the extract (read the script if no audio) and answer.",
      questions: [
        {
          question: "Therapist: \"Values clarification exercises reduce decision paralysis tied to identity conflicts.\"\n\nIntended outcome:",
          options: ["[[more decisive action aligned with priorities|acción alineada con prioridades]]", "[[elimination of all values|eliminar valores]]", "[[permanent paralysis|parálisis permanente]]"],
          correctAnswer: 0,
          explanation: "Reduce paralysis → clearer decisions.",
        },
      ],
    },
    topicName: "Listening",
  },
  {
    id: "c1-u1-l8",
    type: 'listening-comprehension',
    level: 'C1',
    topic: "identity-listening",
    difficulty: 'hard',
    content: {
      title: "[[Listening|Comprensión auditiva]]: [[Identity in discourse|Identidad en el discurso]]",
      instructions: "Listen to the extract (read the script if no audio) and answer.",
      questions: [
        {
          question: "Debate: \"If identity is narrative, revision is a feature, not a failure.\"\n\nSpeaker implies:",
          options: ["[[changing your story can be healthy|Cambiar la historia puede ser sano]]", "[[revision means pathology|revisar es patología]]", "[[narratives must be static|narrativas estáticas]]"],
          correctAnswer: 0,
          explanation: "*Revision is a feature*.",
        },
      ],
    },
    topicName: "Listening",
  },
  {
    id: "c1-u1-l9",
    type: 'listening-comprehension',
    level: 'C1',
    topic: "identity-listening",
    difficulty: 'hard',
    content: {
      title: "[[Listening|Comprensión auditiva]]: [[Identity in discourse|Identidad en el discurso]]",
      instructions: "Listen to the extract (read the script if no audio) and answer.",
      questions: [
        {
          question: "Seminar leader: \"Hedging claims about others' motives avoids unfair moralisation.\"\n\nPedagogical aim:",
          options: ["[[epistemic humility in interpreting behaviour|humildad epistémica]]", "[[certain mind-reading|lectura segura de mentes]]", "[[moral condemnation|condena moral]]"],
          correctAnswer: 0,
          explanation: "Hedge interpretations of motives.",
        },
      ],
    },
    topicName: "Listening",
  },
  {
    id: "c1-u1-l10",
    type: 'listening-comprehension',
    level: 'C1',
    topic: "identity-listening",
    difficulty: 'hard',
    content: {
      title: "[[Listening|Comprensión auditiva]]: [[Identity in discourse|Identidad en el discurso]]",
      instructions: "Listen to the extract (read the script if no audio) and answer.",
      questions: [
        {
          question: "Radio: \"Impostor feelings spike after promotions because the reference group shifts.\"\n\nExplanation:",
          options: ["[[new peers reset comparison standards|nuevos estándares de comparación]]", "[[promotions remove doubt|los ascensos quitan dudas]]", "[[reference groups never change|grupos de referencia fijos]]"],
          correctAnswer: 0,
          explanation: "Reference group shift.",
        },
      ],
    },
    topicName: "Listening",
  },
  {
    id: "c1-u1-l11",
    type: 'listening-comprehension',
    level: 'C1',
    topic: "identity-listening",
    difficulty: 'hard',
    content: {
      title: "[[Listening|Comprensión auditiva]]: [[Identity in discourse|Identidad en el discurso]]",
      instructions: "Listen to the extract (read the script if no audio) and answer.",
      questions: [
        {
          question: "Workshop: \"Two-factor self-esteem models separate competence from worth.\"\n\nConceptual point:",
          options: ["[[performance and global worth are distinguishable|competencia vs valor global]]", "[[competence equals worth always|competencia = valor siempre]]", "[[worth is irrelevant|el valor no importa]]"],
          correctAnswer: 0,
          explanation: "Distinction in models.",
        },
      ],
    },
    topicName: "Listening",
  },
  {
    id: "c1-u1-l12",
    type: 'listening-comprehension',
    level: 'C1',
    topic: "identity-listening",
    difficulty: 'hard',
    content: {
      title: "[[Listening|Comprensión auditiva]]: [[Identity in discourse|Identidad en el discurso]]",
      instructions: "Listen to the extract (read the script if no audio) and answer.",
      questions: [
        {
          question: "Lecture: \"Cultural tightness intensifies sanctioning of deviant self-presentations.\"\n\nImplication:",
          options: ["[[stricter norms constrain identity expression|normas más estrictas]]", "[[all cultures are equally loose|todas igual de laxas]]", "[[deviance is always rewarded|la desviación se premia]]"],
          correctAnswer: 0,
          explanation: "*Tight* cultures + sanctions.",
        },
      ],
    },
    topicName: "Listening",
  },
  {
    id: "c1-u1-l13",
    type: 'listening-comprehension',
    level: 'C1',
    topic: "identity-listening",
    difficulty: 'hard',
    content: {
      title: "[[Listening|Comprensión auditiva]]: [[Identity in discourse|Identidad en el discurso]]",
      instructions: "Listen to the extract (read the script if no audio) and answer.",
      questions: [
        {
          question: "Clip: \"Self-disclosure reciprocity builds trust faster than charisma alone.\"\n\nMechanism:",
          options: ["[[mutual vulnerability accelerates rapport|vulnerabilidad mutua]]", "[[charisma is harmful|carisma dañino]]", "[[disclosure never matters|la revelación no importa]]"],
          correctAnswer: 0,
          explanation: "Reciprocity of disclosure.",
        },
      ],
    },
    topicName: "Listening",
  },
  {
    id: "c1-u1-l14",
    type: 'listening-comprehension',
    level: 'C1',
    topic: "identity-listening",
    difficulty: 'hard',
    content: {
      title: "[[Listening|Comprensión auditiva]]: [[Identity in discourse|Identidad en el discurso]]",
      instructions: "Listen to the extract (read the script if no audio) and answer.",
      questions: [
        {
          question: "Interview: \"Identity fusion can explain extreme pro-group action.\"\n\nKey idea:",
          options: ["[[blurred self-group boundaries|límites yo-grupo difusos]]", "[[complete independence from groups|independencia total]]", "[[fusion removes all empathy|sin empatía]]"],
          correctAnswer: 0,
          explanation: "Identity fusion concept.",
        },
      ],
    },
    topicName: "Listening",
  },
  {
    id: "c1-u1-l15",
    type: 'listening-comprehension',
    level: 'C1',
    topic: "identity-listening",
    difficulty: 'hard',
    content: {
      title: "[[Listening|Comprensión auditiva]]: [[Identity in discourse|Identidad en el discurso]]",
      instructions: "Listen to the extract (read the script if no audio) and answer.",
      questions: [
        {
          question: "Panel: \"Microaggressions accumulate, creating hostile clarity about belonging.\"\n\nEffect described:",
          options: ["[[cumulative cues signal unwelcome|cues acumulativas]]", "[[single events never matter|un solo evento no importa]]", "[[belonging is guaranteed|pertenencia garantizada]]"],
          correctAnswer: 0,
          explanation: "Cumulative harm.",
        },
      ],
    },
    topicName: "Listening",
  },
  {
    id: "c1-u1-l16",
    type: 'listening-comprehension',
    level: 'C1',
    topic: "identity-listening",
    difficulty: 'hard',
    content: {
      title: "[[Listening|Comprensión auditiva]]: [[Identity in discourse|Identidad en el discurso]]",
      instructions: "Listen to the extract (read the script if no audio) and answer.",
      questions: [
        {
          question: "Talk: \"Future possible selves motivate study habits when vivid and plausible.\"\n\nCondition:",
          options: ["[[vivid plausible future self-images|yo futuro vívido y plausible]]", "[[vague fears alone|solo miedos vagos]]", "[[avoiding any imagination|sin imaginación]]"],
          correctAnswer: 0,
          explanation: "Possible selves literature.",
        },
      ],
    },
    topicName: "Listening",
  },
  {
    id: "c1-u1-l17",
    type: 'listening-comprehension',
    level: 'C1',
    topic: "identity-listening",
    difficulty: 'hard',
    content: {
      title: "[[Listening|Comprensión auditiva]]: [[Identity in discourse|Identidad en el discurso]]",
      instructions: "Listen to the extract (read the script if no audio) and answer.",
      questions: [
        {
          question: "Discussion: \"Labels can scaffold growth but also freeze self-stereotyping.\"\n\nNuanced view:",
          options: ["[[labels have both enabling and limiting effects|efectos mixtos de etiquetas]]", "[[labels are always neutral|siempre neutras]]", "[[growth never needs labels|crecimiento sin etiquetas siempre]]"],
          correctAnswer: 0,
          explanation: "Both sides.",
        },
      ],
    },
    topicName: "Listening",
  },
  {
    id: "c1-u1-l18",
    type: 'listening-comprehension',
    level: 'C1',
    topic: "identity-listening",
    difficulty: 'hard',
    content: {
      title: "[[Listening|Comprensión auditiva]]: [[Identity in discourse|Identidad en el discurso]]",
      instructions: "Listen to the extract (read the script if no audio) and answer.",
      questions: [
        {
          question: "Summary: \"Integration across minority identities can demand extra cognitive load daily.\"\n\nPoint:",
          options: ["[[navigating multiple stigmas is taxing|coste cognitivo de minorías múltiples]]", "[[identity is effortless for everyone|sin esfuerzo para todos]]", "[[cognitive load is mythical|carga cognitiva mítica]]"],
          correctAnswer: 0,
          explanation: "Minority stress / load.",
        },
      ],
    },
    topicName: "Listening",
  },
  {
    id: "c1-u1-w1",
    type: 'writing',
    level: 'C1',
    topic: "argumentative-essay",
    difficulty: 'hard',
    content: {
      title: "[[Writing|Escritura]]: [[Academic writing — identity|Escritura académica — identidad]]",
      instructions: "Choose the most effective option for C1-level writing.",
      questions: [
        {
          question: "Title: \"Cultural background is the single most important factor in shaping identity.\" Choose the strongest C1 opening.",
          options: ["[[While cultural background is undeniably influential, reducing identity to culture alone overlooks agency, temperament and life events that also shape who we become.|Matiz y tesis equilibrada]]", "[[Culture is everything and nothing else matters.|demasiado absoluto]]", "[[In this essay I will talk about culture.|demasiado vago]]"],
          correctAnswer: 0,
          explanation: "Hedging + counter-thesis = C1 argumentative move.",
        },
      ],
    },
    topicName: "Writing",
  },
  {
    id: "c1-u1-w2",
    type: 'writing',
    level: 'C1',
    topic: "argumentative-essay",
    difficulty: 'hard',
    content: {
      title: "[[Writing|Escritura]]: [[Academic writing — identity|Escritura académica — identidad]]",
      instructions: "Choose the most effective option for C1-level writing.",
      questions: [
        {
          question: "Which paragraph uses contrast connectors most effectively?",
          options: ["[[While cultural narratives frame self-understanding, individuals reinterpret them — sometimes resisting norms in ways that reshape identity over time.|While / resist / reshape]]", "[[Culture matters. People matter. Identity is complex.|sin desarrollo]]", "[[Identity is nice and interesting.|coloquial]]"],
          correctAnswer: 0,
          explanation: "Structured contrast + precision.",
        },
      ],
    },
    topicName: "Writing",
  },
  {
    id: "c1-u1-w3",
    type: 'writing',
    level: 'C1',
    topic: "argumentative-essay",
    difficulty: 'hard',
    content: {
      title: "[[Writing|Escritura]]: [[Academic writing — identity|Escritura académica — identidad]]",
      instructions: "Choose the most effective option for C1-level writing.",
      questions: [
        {
          question: "Choose the most precise academic conclusion on identity formation.",
          options: ["[[The evidence reviewed suggests identity as an ongoing negotiation between internal dispositions and external social structures.|negociación interna-externa]]", "[[Identity is big and complicated.|vago]]", "[[I think everyone is different.|informal]]"],
          correctAnswer: 0,
          explanation: "Dense, neutral register.",
        },
      ],
    },
    topicName: "Writing",
  },
  {
    id: "c1-u1-w4",
    type: 'writing',
    level: 'C1',
    topic: "argumentative-essay",
    difficulty: 'hard',
    content: {
      title: "[[Writing|Escritura]]: [[Academic writing — identity|Escritura académica — identidad]]",
      instructions: "Choose the most effective option for C1-level writing.",
      questions: [
        {
          question: "Select the best thesis for a problem-solution essay on social comparison.",
          options: ["[[Although upward comparison can motivate self-improvement, platform design that strips context systematically risks adolescent self-esteem; regulatory nudges and media literacy may mitigate harm.|tesis problema-solución]]", "[[Phones are bad.|demasiado simple]]", "[[Comparison is comparison.|tautología]]"],
          correctAnswer: 0,
          explanation: "Problem + mitigation.",
        },
      ],
    },
    topicName: "Writing",
  },
  {
    id: "c1-u1-w5",
    type: 'writing',
    level: 'C1',
    topic: "argumentative-essay",
    difficulty: 'hard',
    content: {
      title: "[[Writing|Escritura]]: [[Academic writing — identity|Escritura académica — identidad]]",
      instructions: "Choose the most effective option for C1-level writing.",
      questions: [
        {
          question: "Which sentence avoids overstated certainty?",
          options: ["[[The data tentatively suggest a correlation rather than a causal link.|tentatively suggest]]", "[[The data prove absolute causality forever.|demasiado fuerte]]", "[[There is no data.|falso]]"],
          correctAnswer: 0,
          explanation: "Academic hedging.",
        },
      ],
    },
    topicName: "Writing",
  },
  {
    id: "c1-u1-w6",
    type: 'writing',
    level: 'C1',
    topic: "argumentative-essay",
    difficulty: 'hard',
    content: {
      title: "[[Writing|Escritura]]: [[Academic writing — identity|Escritura académica — identidad]]",
      instructions: "Choose the most effective option for C1-level writing.",
      questions: [
        {
          question: "Pick the cohesive paragraph.",
          options: ["[[First, self-concept clarity predicts wellbeing. Second, it buffers stress responses. Therefore, interventions targeting clarity may improve resilience.|First / Second / Therefore]]", "[[Stuff happens. People feel bad. The end.|sin cohesión]]", "[[Clarity. Wellbeing. Maybe.|telegráfico]]"],
          correctAnswer: 0,
          explanation: "Clear signposting.",
        },
      ],
    },
    topicName: "Writing",
  },
  {
    id: "c1-u1-w7",
    type: 'writing',
    level: 'C1',
    topic: "argumentative-essay",
    difficulty: 'hard',
    content: {
      title: "[[Writing|Escritura]]: [[Academic writing — identity|Escritura académica — identidad]]",
      instructions: "Choose the most effective option for C1-level writing.",
      questions: [
        {
          question: "Choose appropriate register for a formal proposal.",
          options: ["[[The undersigned respectfully recommend piloting a peer-mentoring scheme to support identity exploration among first-year students.|registro formal]]", "[[Hey guys, let's try mentors lol.|informal]]", "[[Do mentoring now or else.|amenaza]]"],
          correctAnswer: 0,
          explanation: "Formal proposal tone.",
        },
      ],
    },
    topicName: "Writing",
  },
  {
    id: "c1-u1-w8",
    type: 'writing',
    level: 'C1',
    topic: "argumentative-essay",
    difficulty: 'hard',
    content: {
      title: "[[Writing|Escritura]]: [[Academic writing — identity|Escritura académica — identidad]]",
      instructions: "Choose the most effective option for C1-level writing.",
      questions: [
        {
          question: "Which reformulation avoids plagiarism while keeping meaning?",
          options: ["[[Identity is portrayed as socially co-constructed rather than discovered in isolation (cf. canonical social-constructionist accounts).|paráfrasis con marca]]", "[[Identity is discovered in isolation.|contradice la fuente]]", "[[Same words copied.|plagio]]"],
          correctAnswer: 0,
          explanation: "Paraphrase + attribution cue.",
        },
      ],
    },
    topicName: "Writing",
  },
  {
    id: "c1-u1-w9",
    type: 'writing',
    level: 'C1',
    topic: "argumentative-essay",
    difficulty: 'hard',
    content: {
      title: "[[Writing|Escritura]]: [[Academic writing — identity|Escritura académica — identidad]]",
      instructions: "Choose the most effective option for C1-level writing.",
      questions: [
        {
          question: "Best topic sentence for a body paragraph on digital self-presentation?",
          options: ["[[Algorithmic curation of self-images may intensify performative pressures that complicate authentic self-disclosure online.|tema claro y matizado]]", "[[Instagram exists.|irrelevante]]", "[[Photos are photos.|vago]]"],
          correctAnswer: 0,
          explanation: "Focused + analytical.",
        },
      ],
    },
    topicName: "Writing",
  },
  {
    id: "c1-u1-w10",
    type: 'writing',
    level: 'C1',
    topic: "argumentative-essay",
    difficulty: 'hard',
    content: {
      title: "[[Writing|Escritura]]: [[Academic writing — identity|Escritura académica — identidad]]",
      instructions: "Choose the most effective option for C1-level writing.",
      questions: [
        {
          question: "Select the sentence with parallel structure.",
          options: ["[[The study examined how adolescents narrate failure, how they attribute success and how they revise self-worth after feedback.|paralelismo how… how… how…]]", "[[The study examined failing, success and after feedback revising.|roto]]", "[[Examined stuff about things.|vago]]"],
          correctAnswer: 0,
          explanation: "Parallel clauses.",
        },
      ],
    },
    topicName: "Writing",
  },
  {
    id: "c1-u1-w11",
    type: 'writing',
    level: 'C1',
    topic: "argumentative-essay",
    difficulty: 'hard',
    content: {
      title: "[[Writing|Escritura]]: [[Academic writing — identity|Escritura académica — identidad]]",
      instructions: "Choose the most effective option for C1-level writing.",
      questions: [
        {
          question: "Which transition fits between paragraphs on theory and critique?",
          options: ["[[Notwithstanding its explanatory power, the narrative-identity model has been criticised for underplaying unconscious processes.|Notwithstanding + crítica]]", "[[Anyway whatever.|informal]]", "[[Next paragraph.|sin conexión]]"],
          correctAnswer: 0,
          explanation: "Formal counterpoint.",
        },
      ],
    },
    topicName: "Writing",
  },
  {
    id: "c1-u1-w12",
    type: 'writing',
    level: 'C1',
    topic: "argumentative-essay",
    difficulty: 'hard',
    content: {
      title: "[[Writing|Escritura]]: [[Academic writing — identity|Escritura académica — identidad]]",
      instructions: "Choose the most effective option for C1-level writing.",
      questions: [
        {
          question: "Choose the best definition-style sentence for *impostor phenomenon*.",
          options: ["[[Impostor phenomenon denotes high achievers' persistent belief that they are frauds despite objective evidence of competence.|definición académica]]", "[[Impostor phenomenon is when you feel happy.|incorrecto]]", "[[It is a kind of food.|absurdo]]"],
          correctAnswer: 0,
          explanation: "Formal definition.",
        },
      ],
    },
    topicName: "Writing",
  },
  {
    id: "c1-u1-w13",
    type: 'writing',
    level: 'C1',
    topic: "argumentative-essay",
    difficulty: 'hard',
    content: {
      title: "[[Writing|Escritura]]: [[Academic writing — identity|Escritura académica — identidad]]",
      instructions: "Choose the most effective option for C1-level writing.",
      questions: [
        {
          question: "Pick the most precise colligation in academic prose.",
          options: ["[[Participants reported heightened self-doubt when evaluative contexts were salient.|collocaciones naturales]]", "[[Participants did big doubt in hard places.|no nativo]]", "[[Doubt went up and places were there.|vago]]"],
          correctAnswer: 0,
          explanation: "Academic collocations.",
        },
      ],
    },
    topicName: "Writing",
  },
  {
    id: "c1-u1-w14",
    type: 'writing',
    level: 'C1',
    topic: "argumentative-essay",
    difficulty: 'hard',
    content: {
      title: "[[Writing|Escritura]]: [[Academic writing — identity|Escritura académica — identidad]]",
      instructions: "Choose the most effective option for C1-level writing.",
      questions: [
        {
          question: "Which closing moves beyond summary to implication?",
          options: ["[[These findings imply that curricula addressing self-concept clarity could complement traditional skills training in transition programmes.|implicación]]", "[[In conclusion, we discussed many things.|solo resumen]]", "[[The end.|corto]]"],
          correctAnswer: 0,
          explanation: "Implications for practice.",
        },
      ],
    },
    topicName: "Writing",
  },
  {
    id: "c1-u1-w15",
    type: 'writing',
    level: 'C1',
    topic: "argumentative-essay",
    difficulty: 'hard',
    content: {
      title: "[[Writing|Escritura]]: [[Academic writing — identity|Escritura académica — identidad]]",
      instructions: "Choose the most effective option for C1-level writing.",
      questions: [
        {
          question: "Choose the best hedged critique of a method.",
          options: ["[[The cross-sectional design limits causal inference; longitudinal replication would strengthen claims.|límite metodológico matizado]]", "[[The study is rubbish.|grosero]]", "[[The study is perfect.|sin crítica]]"],
          correctAnswer: 0,
          explanation: "Measured critique.",
        },
      ],
    },
    topicName: "Writing",
  },
  {
    id: "c1-u1-w16",
    type: 'writing',
    level: 'C1',
    topic: "argumentative-essay",
    difficulty: 'hard',
    content: {
      title: "[[Writing|Escritura]]: [[Academic writing — identity|Escritura académica — identidad]]",
      instructions: "Choose the most effective option for C1-level writing.",
      questions: [
        {
          question: "Select the sentence that maintains an academic stance toward contested concepts.",
          options: ["[[Authenticity remains contested; for present purposes, we operationalise it as values-behaviour congruence reported in structured interviews.|operacionalización]]", "[[Authenticity is whatever I say.|subjetivo]]", "[[Nobody knows words.|absurdo]]"],
          correctAnswer: 0,
          explanation: "Define terms operationally.",
        },
      ],
    },
    topicName: "Writing",
  },
  {
    id: "c1-u1-w17",
    type: 'writing',
    level: 'C1',
    topic: "argumentative-essay",
    difficulty: 'hard',
    content: {
      title: "[[Writing|Escritura]]: [[Academic writing — identity|Escritura académica — identidad]]",
      instructions: "Choose the most effective option for C1-level writing.",
      questions: [
        {
          question: "Which option shows appropriate citation framing?",
          options: ["[[As Goffman (1959) famously argued, everyday interaction involves impression management rather than transparent self-display.|marco de cita]]", "[[Goffman said stuff in a book.|vago]]", "[[According to me, Goffman is wrong always.|sin evidencia]]"],
          correctAnswer: 0,
          explanation: "Academic attribution (style).",
        },
      ],
    },
    topicName: "Writing",
  },
  {
    id: "c1-u1-w18",
    type: 'writing',
    level: 'C1',
    topic: "argumentative-essay",
    difficulty: 'hard',
    content: {
      title: "[[Writing|Escritura]]: [[Academic writing — identity|Escritura académica — identidad]]",
      instructions: "Choose the most effective option for C1-level writing.",
      questions: [
        {
          question: "Choose the best sentence variety for rhetorical effect.",
          options: ["[[The evidence is sparse; the stakes, nonetheless, are high: adolescents deserve better than anecdote-driven policy.|variedad y dos puntos]]", "[[The evidence is sparse and stakes are high and adolescents deserve better.|todo coordinado]]", "[[Sparse high deserve.|telegráfico]]"],
          correctAnswer: 0,
          explanation: "Controlled variation.",
        },
      ],
    },
    topicName: "Writing",
  },
  {
    id: "c1-u1-s1",
    type: 'multiple-choice',
    level: 'C1',
    topic: "speaking-debate",
    difficulty: 'hard',
    content: {
      title: "[[Speaking|Expresión oral]]: [[Discussion — identity|Discusión — identidad]]",
      instructions: "Choose the most appropriate C1-level spoken English.",
      questions: [
        {
          question: "Concede a point before countering, in a formal debate:",
          options: ["[[While I take your point that cultural background is profoundly formative, I would contend that individual agency and peer networks also exert decisive influence.|While I take your point… I would contend…]]", "[[You are totally wrong about everything.|agresivo]]", "[[OK.|demasiado corto]]"],
          correctAnswer: 0,
          explanation: "Concession + counter-argument.",
        },
      ],
    },
    topicName: "Speaking",
  },
  {
    id: "c1-u1-s2",
    type: 'multiple-choice',
    level: 'C1',
    topic: "speaking-debate",
    difficulty: 'hard',
    content: {
      title: "[[Speaking|Expresión oral]]: [[Discussion — identity|Discusión — identidad]]",
      instructions: "Choose the most appropriate C1-level spoken English.",
      questions: [
        {
          question: "Soften a strong claim in a seminar:",
          options: ["[[It would be hard to deny that social comparison shapes self-esteem, though it is probably not the sole mechanism.|hedging en capas]]", "[[Social comparison is 100% everything.|absoluto]]", "[[Maybe stuff happens.|demasiado flojo]]"],
          correctAnswer: 0,
          explanation: "Layered hedging.",
        },
      ],
    },
    topicName: "Speaking",
  },
  {
    id: "c1-u1-s3",
    type: 'multiple-choice',
    level: 'C1',
    topic: "speaking-debate",
    difficulty: 'hard',
    content: {
      title: "[[Speaking|Expresión oral]]: [[Discussion — identity|Discusión — identidad]]",
      instructions: "Choose the most appropriate C1-level spoken English.",
      questions: [
        {
          question: "Structure a Part 3-style oral answer:",
          options: ["[[I'd like to approach this from two angles: first, how norms constrain expression; second, how individuals negotiate those constraints.|signposting]]", "[[I don't know.|evasivo]]", "[[Norms. People. Bye.|telegráfico]]"],
          correctAnswer: 0,
          explanation: "Oral signposting.",
        },
      ],
    },
    topicName: "Speaking",
  },
  {
    id: "c1-u1-s4",
    type: 'multiple-choice',
    level: 'C1',
    topic: "speaking-debate",
    difficulty: 'hard',
    content: {
      title: "[[Speaking|Expresión oral]]: [[Discussion — identity|Discusión — identidad]]",
      instructions: "Choose the most appropriate C1-level spoken English.",
      questions: [
        {
          question: "Politely disagree with a generalisation:",
          options: ["[[I'm not entirely convinced that identity stabilises by early adulthood; longitudinal studies show continued revision well into middle age.|discrepar con respeto]]", "[[That is stupid.|grosero]]", "[[I agree with everything.|sin posición]]"],
          correctAnswer: 0,
          explanation: "Respectful disagreement + evidence cue.",
        },
      ],
    },
    topicName: "Speaking",
  },
  {
    id: "c1-u1-s5",
    type: 'multiple-choice',
    level: 'C1',
    topic: "speaking-debate",
    difficulty: 'hard',
    content: {
      title: "[[Speaking|Expresión oral]]: [[Discussion — identity|Discusión — identidad]]",
      instructions: "Choose the most appropriate C1-level spoken English.",
      questions: [
        {
          question: "Buy time to think aloud:",
          options: ["[[That's an interesting question; if I may, I'll think aloud for a moment before giving a fuller answer.|ganar tiempo]]", "[[No comment.|cerrado]]", "[[Next question.|evasivo]]"],
          correctAnswer: 0,
          explanation: "Stalling formula.",
        },
      ],
    },
    topicName: "Speaking",
  },
  {
    id: "c1-u1-s6",
    type: 'multiple-choice',
    level: 'C1',
    topic: "speaking-debate",
    difficulty: 'hard',
    content: {
      title: "[[Speaking|Expresión oral]]: [[Discussion — identity|Discusión — identidad]]",
      instructions: "Choose the most appropriate C1-level spoken English.",
      questions: [
        {
          question: "Emphasise a key distinction orally:",
          options: ["[[The crucial distinction here is between belonging and mere inclusion — you can be present yet not feel accepted.|crucial distinction]]", "[[There is no distinction.|nada]]", "[[Belonging is a word.|vago]]"],
          correctAnswer: 0,
          explanation: "Clarifying concept.",
        },
      ],
    },
    topicName: "Speaking",
  },
  {
    id: "c1-u1-s7",
    type: 'multiple-choice',
    level: 'C1',
    topic: "speaking-debate",
    difficulty: 'hard',
    content: {
      title: "[[Speaking|Expresión oral]]: [[Discussion — identity|Discusión — identidad]]",
      instructions: "Choose the most appropriate C1-level spoken English.",
      questions: [
        {
          question: "Summarise someone else's view before responding:",
          options: ["[[If I understand you correctly, you're suggesting that online personas are entirely fabricated. I'd qualify that: curation isn't necessarily fabrication.|reformular]]", "[[You said words.|vago]]", "[[Wrong.|sin reformulación]]"],
          correctAnswer: 0,
          explanation: "Active listening move.",
        },
      ],
    },
    topicName: "Speaking",
  },
  {
    id: "c1-u1-s8",
    type: 'multiple-choice',
    level: 'C1',
    topic: "speaking-debate",
    difficulty: 'hard',
    content: {
      title: "[[Speaking|Expresión oral]]: [[Discussion — identity|Discusión — identidad]]",
      instructions: "Choose the most appropriate C1-level spoken English.",
      questions: [
        {
          question: "Close a discussion with a balanced takeaway:",
          options: ["[[So, to pull the threads together, both structure and agency seem indispensable for a rounded account of identity formation.|cierre equilibrado]]", "[[Whatever.|informal]]", "[[I forgot.|evasivo]]"],
          correctAnswer: 0,
          explanation: "Synthesis phrase.",
        },
      ],
    },
    topicName: "Speaking",
  },
  {
    id: "c1-u1-s9",
    type: 'multiple-choice',
    level: 'C1',
    topic: "speaking-debate",
    difficulty: 'hard',
    content: {
      title: "[[Speaking|Expresión oral]]: [[Discussion — identity|Discusión — identidad]]",
      instructions: "Choose the most appropriate C1-level spoken English.",
      questions: [
        {
          question: "Ask for clarification in an academic tutorial:",
          options: ["[[Could you clarify what you mean by 'performative' in this context — are you using it in the Butlerian sense?|precisión conceptual]]", "[[What?|demasiado brusco]]", "[[I know everything.|arrogante]]"],
          correctAnswer: 0,
          explanation: "Targeted clarification.",
        },
      ],
    },
    topicName: "Speaking",
  },
  {
    id: "c1-u1-s10",
    type: 'multiple-choice',
    level: 'C1',
    topic: "speaking-debate",
    difficulty: 'hard',
    content: {
      title: "[[Speaking|Expresión oral]]: [[Discussion — identity|Discusión — identidad]]",
      instructions: "Choose the most appropriate C1-level spoken English.",
      questions: [
        {
          question: "Express partial agreement:",
          options: ["[[I partly agree: the narrative lens illuminates meaning-making, yet it may underplay non-verbal aspects of selfhood.|partial agreement]]", "[[I totally agree and disagree.|incoherente]]", "[[No.|cerrado]]"],
          correctAnswer: 0,
          explanation: "Qualified agreement.",
        },
      ],
    },
    topicName: "Speaking",
  },
  {
    id: "c1-u1-s11",
    type: 'multiple-choice',
    level: 'C1',
    topic: "speaking-debate",
    difficulty: 'hard',
    content: {
      title: "[[Speaking|Expresión oral]]: [[Discussion — identity|Discusión — identidad]]",
      instructions: "Choose the most appropriate C1-level spoken English.",
      questions: [
        {
          question: "Redirect a hostile question:",
          options: ["[[I appreciate the challenge; perhaps we can reframe it as an empirical question about mechanisms rather than motives.|reencuadre]]", "[[Shut up.|inaceptable]]", "[[I refuse.|sin tacto]]"],
          correctAnswer: 0,
          explanation: "Diplomatic reframing.",
        },
      ],
    },
    topicName: "Speaking",
  },
  {
    id: "c1-u1-s12",
    type: 'multiple-choice',
    level: 'C1',
    topic: "speaking-debate",
    difficulty: 'hard',
    content: {
      title: "[[Speaking|Expresión oral]]: [[Discussion — identity|Discusión — identidad]]",
      instructions: "Choose the most appropriate C1-level spoken English.",
      questions: [
        {
          question: "Use a discourse marker to add weight:",
          options: ["[[Moreover, cross-cultural evidence complicates any monocausal story about identity.|Moreover + complica]]", "[[Also stuff.|informal]]", "[[And.|demasiado débil]]"],
          correctAnswer: 0,
          explanation: "Formal additive marker.",
        },
      ],
    },
    topicName: "Speaking",
  },
  {
    id: "c1-u1-s13",
    type: 'multiple-choice',
    level: 'C1',
    topic: "speaking-debate",
    difficulty: 'hard',
    content: {
      title: "[[Speaking|Expresión oral]]: [[Discussion — identity|Discusión — identidad]]",
      instructions: "Choose the most appropriate C1-level spoken English.",
      questions: [
        {
          question: "Acknowledge limitations of your own argument orally:",
          options: ["[[I should stress that my view rests largely on WEIRD samples; generalisation should be cautious.|límites explícitos]]", "[[My view is perfect.|sin límites]]", "[[No limitations exist.|falso]]"],
          correctAnswer: 0,
          explanation: "Epistemic modesty.",
        },
      ],
    },
    topicName: "Speaking",
  },
  {
    id: "c1-u1-s14",
    type: 'multiple-choice',
    level: 'C1',
    topic: "speaking-debate",
    difficulty: 'hard',
    content: {
      title: "[[Speaking|Expresión oral]]: [[Discussion — identity|Discusión — identidad]]",
      instructions: "Choose the most appropriate C1-level spoken English.",
      questions: [
        {
          question: "Invite another speaker to contribute:",
          options: ["[[I'd be interested to hear whether your fieldwork supports or challenges that pattern.|invitar a contribuir]]", "[[Talk now or never.|amenaza]]", "[[You have nothing to say.|descortés]]"],
          correctAnswer: 0,
          explanation: "Inclusive facilitation.",
        },
      ],
    },
    topicName: "Speaking",
  },
  {
    id: "c1-u1-s15",
    type: 'multiple-choice',
    level: 'C1',
    topic: "speaking-debate",
    difficulty: 'hard',
    content: {
      title: "[[Speaking|Expresión oral]]: [[Discussion — identity|Discusión — identidad]]",
      instructions: "Choose the most appropriate C1-level spoken English.",
      questions: [
        {
          question: "Respond to a request for examples:",
          options: ["[[A concrete illustration would be adolescents revising career narratives after gap-year travel.|ejemplo concreto]]", "[[Examples exist.|vago]]", "[[No examples.|evasivo]]"],
          correctAnswer: 0,
          explanation: "Illustration move.",
        },
      ],
    },
    topicName: "Speaking",
  },
  {
    id: "c1-u1-s16",
    type: 'multiple-choice',
    level: 'C1',
    topic: "speaking-debate",
    difficulty: 'hard',
    content: {
      title: "[[Speaking|Expresión oral]]: [[Discussion — identity|Discusión — identidad]]",
      instructions: "Choose the most appropriate C1-level spoken English.",
      questions: [
        {
          question: "Signal you are building on prior point:",
          options: ["[[Building on that point, we might ask how institutions encode which identity claims count as legitimate.|Building on that point]]", "[[Unrelated: cats.|tangente]]", "[[Forget that.|ruptura]]"],
          correctAnswer: 0,
          explanation: "Cohesive linkage.",
        },
      ],
    },
    topicName: "Speaking",
  },
  {
    id: "c1-u1-s17",
    type: 'multiple-choice',
    level: 'C1',
    topic: "speaking-debate",
    difficulty: 'hard',
    content: {
      title: "[[Speaking|Expresión oral]]: [[Discussion — identity|Discusión — identidad]]",
      instructions: "Choose the most appropriate C1-level spoken English.",
      questions: [
        {
          question: "Express empathy without overclaiming:",
          options: ["[[I can see why that experience would shake your confidence, even if outwardly everything looked fine.|empatía matizada]]", "[[Your feelings are invalid.|dañino]]", "[[I feel exactly your brain.|extraño]]"],
          correctAnswer: 0,
          explanation: "Empathic validation.",
        },
      ],
    },
    topicName: "Speaking",
  },
  {
    id: "c1-u1-s18",
    type: 'multiple-choice',
    level: 'C1',
    topic: "speaking-debate",
    difficulty: 'hard',
    content: {
      title: "[[Speaking|Expresión oral]]: [[Discussion — identity|Discusión — identidad]]",
      instructions: "Choose the most appropriate C1-level spoken English.",
      questions: [
        {
          question: "End with a forward-looking question (discussion):",
          options: ["[[Where might digital identity research go next if we take hybrid online-offline lives seriously?|pregunta prospectiva]]", "[[The end.|cierre seco]]", "[[Who cares?|descortés]]"],
          correctAnswer: 0,
          explanation: "Productive closing question.",
        },
      ],
    },
    topicName: "Speaking",
  }
];
