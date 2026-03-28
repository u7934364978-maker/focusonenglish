#!/usr/bin/env node
/**
 * Genera src/lib/course/c1/unit-1.ts con 108 ejercicios (18 × 6 lecciones).
 * Uso: node scripts/generate-c1-unit1-108.mjs
 */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const OUT = path.join(__dirname, '../src/lib/course/c1/unit-1.ts');

function j(s) {
  return JSON.stringify(s);
}

function exMC(id, topic, topicName, title, instructions, question, options, correctAnswer, explanation) {
  return `  {
    id: ${j(id)},
    type: 'multiple-choice',
    level: 'C1',
    topic: ${j(topic)},
    difficulty: 'hard',
    content: {
      title: ${j(title)},
      instructions: ${j(instructions)},
      questions: [
        {
          question: ${j(question)},
          options: [${options.map((o) => j(o)).join(', ')}],
          correctAnswer: ${correctAnswer},
          explanation: ${j(explanation)},
        },
      ],
    },
    topicName: ${j(topicName)},
  }`;
}

function exFB(id, topic, topicName, title, instructions, question, options, correctAnswer, acceptableAnswers, explanation) {
  return `  {
    id: ${j(id)},
    type: 'fill-blank',
    level: 'C1',
    topic: ${j(topic)},
    difficulty: 'hard',
    content: {
      title: ${j(title)},
      instructions: ${j(instructions)},
      questions: [
        {
          question: ${j(question)},
          options: [${options.map((o) => j(o)).join(', ')}],
          correctAnswer: ${j(correctAnswer)},
          acceptableAnswers: [${acceptableAnswers.map((a) => j(a)).join(', ')}],
          explanation: ${j(explanation)},
        },
      ],
    },
    topicName: ${j(topicName)},
  }`;
}

function exRead(id, topic, topicName, title, instructions, question, options, correctAnswer, explanation) {
  return exMC(id, topic, topicName, title, instructions, question, options, correctAnswer, explanation).replace(
    "type: 'multiple-choice'",
    "type: 'reading-comprehension'"
  );
}

function exListen(id, topic, topicName, title, instructions, question, options, correctAnswer, explanation) {
  return exMC(id, topic, topicName, title, instructions, question, options, correctAnswer, explanation).replace(
    "type: 'multiple-choice'",
    "type: 'listening-comprehension'"
  );
}

function exWrite(id, topic, topicName, title, instructions, question, options, correctAnswer, explanation) {
  return exMC(id, topic, topicName, title, instructions, question, options, correctAnswer, explanation).replace(
    "type: 'multiple-choice'",
    "type: 'writing'"
  );
}

const grammar = [];
// 18 grammar — modales deducción / probabilidad (pasado y presente)
const gData = [
  [
    'mc',
    'She left her keys on the table and her coat is still here. Which sentence expresses the best deduction about the past?',
    [
      '[[She can\'t have gone far.|No puede haber ido lejos.]]',
      '[[She must have gone far.|Debe haber ido lejos.]]',
      '[[She should have gone far.|Debería haber ido lejos.]]',
    ],
    0,
    '*Can\'t have + past participle* = strong negative deduction about the past.',
  ],
  [
    'fb',
    'He ____ ____ ____ the email — he replied within minutes.',
    ['[[must have read|debe haber leído]]', "[[can't have read|no puede haber leído]]", '[[might have read|podría haber leído]]'],
    'must have read',
    ['must have read'],
    '*Must have + V3* = logical conclusion about a past event.',
  ],
  [
    'mc',
    'The lights are off and nobody answered the door. Which fits the evidence?',
    [
      '[[They must have gone out.|Deben haber salido.]]',
      "[[They can't have gone out.|No pueden haber salido.]]",
      '[[They should have gone out.|Deberían haber salido.]]',
    ],
    0,
    'Positive past deduction with clear evidence → *must have*.',
  ],
  [
    'mc',
    'You hear your neighbour\'s car start. Which expresses a logical present deduction?',
    [
      '[[They must be leaving now.|Deben estar saliendo ahora.]]',
      '[[They might leave tomorrow.|Podrían salir mañana.]]',
      '[[They should leave earlier.|Deberían salir antes.]]',
    ],
    0,
    '*Must* + base verb / continuous expresses strong present deduction from evidence.',
  ],
  [
    'mc',
    'A colleague looks exhausted every morning. Which is a cautious epistemic claim?',
    [
      '[[She might be working a second job.|Podría estar trabajando un segundo empleo.]]',
      '[[She must be lazy.|Debe ser vaga.]]',
      '[[She should be fired.|Deberían despedirla.]]',
    ],
    0,
    '*Might* + continuous = tentative deduction, appropriate without proof.',
  ],
  [
    'fb',
    'The fingerprints don\'t match. The suspect ____ ____ ____ the weapon.',
    [
      '[[can\'t have touched|no puede haber tocado]]',
      '[[must have touched|debe haber tocado]]',
      '[[should have touched|debería haber tocado]]',
    ],
    "can't have touched",
    ["can't have touched", 'cannot have touched'],
    'Contradictory evidence → negative deduction *can\'t have*.',
  ],
  [
    'mc',
    'Which sentence criticises a past failure (not deduction)?',
    [
      '[[You should have told me earlier.|Deberías habérmelo dicho antes.]]',
      '[[You must have told me earlier.|Debiste decírmelo antes.]]',
      "[[You can't have told me earlier.|No puedes habérmelo dicho antes.]]",
    ],
    0,
    '*Should have + V3* = reproach or regret about the past.',
  ],
  [
    'mc',
    'There is no milk in the fridge and the carton is in the bin. Which deduction is natural?',
    [
      '[[Someone must have finished it.|Alguien debe haberlo terminado.]]',
      '[[Someone might finish it tomorrow.|Alguien podría terminarlo mañana.]]',
      '[[Someone should finish it now.|Alguien debería terminarlo ahora.]]',
    ],
    0,
    'Evidence points to a completed past action → *must have + V3*.',
  ],
  [
    'fb',
    'He ____ ____ ____ abroad — he doesn\'t even own a passport.',
    [
      '[[can\'t have lived|no puede haber vivido]]',
      '[[must have lived|debe haber vivido]]',
      '[[might have lived|podría haber vivido]]',
    ],
    "can't have lived",
    ["can't have lived", 'cannot have lived'],
    'Impossible given the premise → *can\'t have lived*.',
  ],
  [
    'mc',
    'Which expresses a past possibility that remains open (we are not sure)?',
    [
      '[[They may have misunderstood the instructions.|Pueden haber malinterpretado las instrucciones.]]',
      '[[They must have misunderstood.|Debieron malinterpretarlas.]]',
      "[[They can't have misunderstood.|No pueden haberlas malinterpretado.]]",
    ],
    0,
    '*May have* = epistemic possibility about the past.',
  ],
  [
    'mc',
    'The sky is completely clear and the pavement is dry. Which is a sound deduction?',
    [
      '[[It can\'t have rained heavily here recently.|No puede haber llovido mucho aquí recientemente.]]',
      '[[It must be going to rain.|Debe ir a llover.]]',
      '[[It should have rained.|Debería haber llovido.]]',
    ],
    0,
    'Present evidence about the recent past → *can\'t have rained*.',
  ],
  [
    'fb',
    'Given the tyre tracks in the snow, a vehicle ____ ____ ____ here minutes ago.',
    [
      '[[must have left|debe haber salido]]',
      "[[can't have left|no puede haber salido]]",
      '[[should have left|debería haber salido]]',
    ],
    'must have left',
    ['must have left'],
    'Visible traces → affirmative past deduction.',
  ],
  [
    'mc',
    'Which uses *must* for logical necessity (not obligation)?',
    [
      '[[If A implies B and B is false, A must be false.|Si A implica B y B es falsa, A debe ser falsa.]]',
      '[[You must be on time for the exam.|Debes llegar puntual al examen.]]',
      '[[Students must wear IDs.|Los estudiantes deben llevar carnet.]]',
    ],
    0,
    'Logical *must* (conclusion) vs deontic *must* (rule).',
  ],
  [
    'mc',
    'A friend missed your party without warning. A sympathetic deduction might be:',
    [
      '[[Something urgent might have come up.|Puede que surgiera algo urgente.]]',
      '[[They must hate you.|Deben odiarte.]]',
      '[[They should ignore you.|Deberían ignorarte.]]',
    ],
    0,
    '*Might have* softens judgement; the others are harsh or illogical.',
  ],
  [
    'fb',
    'The document is dated two years before his birth. He ____ ____ ____ it.',
    [
      '[[can\'t have written|no puede haberlo escrito]]',
      '[[must have written|debe haberlo escrito]]',
      '[[might have written|podría haberlo escrito]]',
    ],
    "can't have written",
    ["can't have written", 'cannot have written'],
    'Logical impossibility → *can\'t have written*.',
  ],
  [
    'mc',
    'Which sentence shows *couldn\'t have* as confident negative deduction?',
    [
      '[[She couldn\'t have known — we never told her.|No pudo saberlo — nunca se lo dijimos.]]',
      '[[She couldn\'t know the answer.|No podía saber la respuesta.]]',
      '[[She couldn\'t have been nicer.|No podría haber sido más amable.]]',
    ],
    0,
    '*Couldn\'t have + V3* = past deduction: it was not possible.',
  ],
  [
    'mc',
    'Choose the sentence that hedges appropriately in an academic discussion:',
    [
      '[[The results may reflect sampling bias rather than a true effect.|Los resultados pueden reflejar sesgo de muestreo.]]',
      '[[The results must be wrong.|Los resultados deben estar mal.]]',
      '[[The results should be ignored.|Los resultados deberían ignorarse.]]',
    ],
    0,
    'Cautious epistemic *may* fits scholarly register.',
  ],
  [
    'fb',
    'You\'re 99% sure she saw the message. She ____ ____ ____ it.',
    [
      '[[must have seen|debe haberlo visto]]',
      "[[can't have seen|no puede haberlo visto]]",
      '[[might have seen|podría haberlo visto]]',
    ],
    'must have seen',
    ['must have seen'],
    'Very strong evidence → *must have seen*.',
  ],
];

gData.forEach((row, i) => {
  const n = i + 1;
  const id = `c1-u1-g${n}`;
  if (row[0] === 'mc') {
    grammar.push(
      exMC(
        id,
        'modal-deduction',
        'Grammar',
        '[[Grammar|Gramática]]: [[Modal Verbs — Deduction|Modales de deducción]]',
        'Choose the best answer.',
        row[1],
        row[2],
        row[3],
        row[4]
      )
    );
  } else {
    grammar.push(
      exFB(
        id,
        'modal-deduction',
        'Grammar',
        '[[Grammar|Gramática]]: [[Modal Verbs — Deduction|Modales de deducción]]',
        'Complete with the correct modal structure.',
        row[1],
        row[2],
        row[3],
        row[4],
        row[5]
      )
    );
  }
});

const vocabData = [
  [
    'She was respected for her _______ — she refused to perform a persona that felt inauthentic.',
    ['[[authenticity|autenticidad]]', '[[conformity|conformidad]]', '[[ambivalence|ambivalencia]]'],
    0,
    '*Authenticity* = alignment between behaviour and genuine self.',
  ],
  [
    'Therapy helped her _______ a more coherent narrative of who she is.',
    ['[[develop|desarrollar]]', '[[make|hacer]]', '[[do|hacer]]'],
    0,
    'Collocation: *develop* a sense of identity / narrative.',
  ],
  [
    'He was deeply _______ — he could attune to others\' emotions with unusual precision.',
    ['[[empathetic|empático]]', '[[apathetic|apático]]', '[[sceptical|escéptico]]'],
    0,
    '*Empathetic* fits emotional attunement.',
  ],
  [
    'Many adolescents experience _______ about career choices — wanting two incompatible paths at once.',
    ['[[ambivalence|ambivalencia]]', '[[clarity|claridad]]', '[[resilience|resiliencia]]'],
    0,
    '*Ambivalence* = mixed or conflicting feelings.',
  ],
  [
    'High _______ _______ is associated with lower anxiety when social feedback is ambiguous.',
    [
      '[[self-concept clarity|claridad del autoconcepto]]',
      '[[selfish clarity|claridad egoísta]]',
      '[[concept shelf|estante de conceptos]]',
    ],
    0,
    'Technical term from psychology: *self-concept clarity*.',
  ],
  [
    'Online, people often _______ a polished version of the self.',
    ['[[curate|curar / seleccionar cuidadosamente]]', '[[destroy|destruir]]', '[[abandon|abandonar]]'],
    0,
    '*Curate* = carefully select and present (digital self).',
  ],
  [
    'Goffman described social life as _______ — we adjust self-presentation to the audience.',
    ['[[performance|representación / actuación social]]', '[[isolation|aislamiento]]', '[[randomness|azar]]'],
    0,
    'Sociological metaphor: *performance* (not necessarily deceit).',
  ],
  [
    '_______, she agreed to help, though she still had private doubts.',
    ['[[Outwardly|Externamente]]', '[[Inwardly|Interiormente]]', '[[Rarely|Raramente]]'],
    0,
    '*Outwardly* contrasts public stance with inner doubt.',
  ],
  [
    'Years of setbacks tested her _______ — she recovered without losing her sense of purpose.',
    ['[[resilience|resiliencia]]', '[[fragility|fragilidad]]', '[[indifference|indiferencia]]'],
    0,
    '*Resilience* = bounce-back capacity.',
  ],
  [
    'He struggled with _______ _______ despite objective success — fear of being exposed as a fraud.',
    [
      '[[impostor syndrome|síndrome del impostor]]',
      '[[runner syndrome|síndrome del corredor]]',
      '[[winter syndrome|síndrome invernal]]',
    ],
    0,
    'Fixed expression: *impostor syndrome*.',
  ],
  [
    'The essay explores how _______ _______ shapes the stories we tell about our lives.',
    ['[[narrative identity|identidad narrativa]]', '[[narrative invoice|factura narrativa]]', '[[identity invoice|factura identitaria]]'],
    0,
    'Psychology term: *narrative identity*.',
  ],
  [
    'Constant _______ _______ on social media can erode self-esteem when context is stripped away.',
    ['[[upward comparison|comparación ascendente]]', '[[downward coffee|café descendente]]', '[[sideways motion|movimiento lateral]]'],
    0,
    'Technical phrase: comparing oneself to those *above*.',
  ],
  [
    'She valued _______ _______ over popularity — acting on principles even when costly.',
    ['[[integrity|integridad]]', '[[popularity|popularidad]]', '[[visibility|visibilidad]]'],
    0,
    '*Integrity* = moral consistency.',
  ],
  [
    'The interview examines how minority stress affects _______ _______ in young adults.',
    ['[[sense of belonging|sentido de pertenencia]]', '[[sense of billing|sentido de facturación]]', '[[bill of belonging|factura de pertenencia]]'],
    0,
    'Natural collocation: *sense of belonging*.',
  ],
  [
    'Critics argue that algorithmic feeds encourage _______ _______ rather than authentic exploration.',
    ['[[performative authenticity|autenticidad performativa]]', '[[lazy grammar|gramática perezosa]]', '[[silent music|música silenciosa]]'],
    0,
    'Oxymoron-style collocation common in cultural criticism.',
  ],
  [
    '_______, he remained polite, but his tone suggested deep disagreement.',
    ['[[Outwardly|Externamente]]', '[[Secretly|Secretamente]]', '[[Instantly|Al instante]]'],
    0,
    'Contrast surface behaviour and implied stance.',
  ],
  [
    'The course unit links _______ _______ with modal verbs of deduction.',
    ['[[personal identity|identidad personal]]', '[[personal invoice|factura personal]]', '[[private weather|tiempo privado]]'],
    0,
    'Core theme: *personal identity*.',
  ],
  [
    '_______ involves comparing your present self to an earlier version of you.',
    ['[[Temporal self-comparison|Autocomparación temporal]]', '[[Spatial self-collision|Autocolisión espacial]]', '[[Verbal self-import|autoimportación verbal]]'],
    0,
    'Developmental psychology concept (temporal comparison).',
  ],
];

const vocabulary = [];
vocabData.forEach((row, i) => {
  const n = i + 1;
  const id = `c1-u1-v${n}`;
  vocabulary.push(
    exMC(
      id,
      'identity-vocabulary',
      'Vocabulary',
      '[[Vocabulary|Vocabulario]]: [[Identity and Personality|Identidad y personalidad]]',
      'Choose the word or phrase that best completes the sentence.',
      row[0],
      row[1],
      row[2],
      row[3]
    )
  );
});

const readingPassages = [
  [
    'Text: "Our self-concept is actively constructed through social interaction and cultural narratives, not merely \'discovered\' in isolation."',
    [
      '[[It is formed through social and cultural influences.|Se forma por influencias sociales y culturales.]]',
      '[[It is fixed at adolescence.|Fija en la adolescencia.]]',
      '[[It ignores other people.|Ignora a otras personas.]]',
    ],
    0,
    'The text stresses *constructed* via interaction and narratives.',
  ],
  [
    'Text: "Goffman likened everyday life to theatre: we perform roles calibrated to each audience."',
    [
      '[[Self-presentation varies by context.|La autopresentación varía según el contexto.]]',
      '[[We have only one static identity.|Solo hay una identidad estática.]]',
      '[[Audiences are irrelevant.|El público es irrelevante.]]',
    ],
    0,
    'Performance metaphor → contextual variation.',
  ],
  [
    'Text: "Narrative identity theory holds that people integrate life events into a revisable life story."',
    [
      '[[The story of self can change with new experiences.|La historia del yo puede cambiar.]]',
      '[[The story is sealed at age thirty.|La historia se cierra a los 30.]]',
      '[[Events should not be integrated.|Los eventos no deben integrarse.]]',
    ],
    0,
    '*Revisable* implies change over time.',
  ],
  [
    'Text: "Self-concept clarity — a stable, well-defined sense of who one is — correlates with resilience."',
    [
      '[[Clear self-knowledge links to coping well with setbacks.|Claridad identitaria y afrontamiento.]]',
      '[[Clarity removes all emotions.|La claridad elimina emociones.]]',
      '[[Resilience means avoiding relationships.|Resiliencia evita relaciones.]]',
    ],
    0,
    'Clarity supports resilience according to the extract.',
  ],
  [
    'Text: "Curated selfies and algorithmic feedback may amplify social comparison and self-doubt."',
    [
      '[[Online presentation can worsen comparative self-evaluation.|La presentación online puede empeorar la comparación.]]',
      '[[Algorithms always improve wellbeing.|Los algoritmos siempre mejoran el bienestar.]]',
      '[[Selfies have no psychological effects.|Los selfies no tienen efectos.]]',
    ],
    0,
    'Critical view: *amplify comparison and doubt*.',
  ],
  [
    'Text: "Authenticity is often framed as alignment between values and behaviour, not rigid consistency in every role."',
    [
      '[[Values-behaviour fit matters more than identical behaviour everywhere.|Encaje valores-comportamiento.]]',
      '[[Authentic people never adapt to context.|Nunca adaptarse.]]',
      '[[Roles should be abandoned.|Hay que abandonar roles.]]',
    ],
    0,
    'Nuanced definition of authenticity.',
  ],
];

const readingExtra = [
  [
    'Text: "Upward comparison can motivate improvement but undermine self-worth when contextual factors are ignored."',
    [
      '[[It is double-edged: motivation versus self-esteem risk.|De doble filo.]]',
      '[[It is always beneficial.|Siempre beneficioso.]]',
      '[[It removes ambition.|Elimina ambición.]]',
    ],
    0,
    'Both benefits and risks are named.',
  ],
  [
    'Text: "Impostor feelings are common among high achievers who attribute success to luck rather than ability."',
    [
      '[[Success can feel undeserved even when evidence is strong.|Éxito percibido como no merecido.]]',
      '[[Only incompetent people doubt themselves.|Solo los incompetentes dudan.]]',
      '[[Luck never plays a role in careers.|El azar no influye.]]',
    ],
    0,
    'Impostor phenomenon description.',
  ],
  [
    'Text: "Belonging cues from peers can buffer stress during identity exploration in emerging adulthood."',
    [
      '[[Social acceptance supports stress regulation during identity work.|Aceptación social amortigua estrés.]]',
      '[[Peers always increase stress.|Los pares siempre aumentan estrés.]]',
      '[[Exploration should be avoided.|Hay que evitar explorar.]]',
    ],
    0,
    '*Buffer* = protective effect.',
  ],
  [
    'Text: "Minimal self-views emphasise continuity of consciousness rather than narrative richness."',
    [
      '[[Some models prioritise bare continuity over elaborate stories.|Continuidad vs narrativa elaborada.]]',
      '[[Narrative richness is the only valid model.|Solo vale la narrativa rica.]]',
      '[[Consciousness is irrelevant to identity.|La conciencia es irrelevante.]]',
    ],
    0,
    'Contrast with narrative approaches.',
  ],
  [
    'Text: "Cultural norms prescribe which identity claims are legitimate or taboo in public discourse."',
    [
      '[[Legitimacy of identity claims is culturally regulated.|Regulación cultural de reclamaciones identitarias.]]',
      '[[All cultures treat identity identically.|Todas las culturas igual.]]',
      '[[Public discourse ignores identity.|El discurso público ignora la identidad.]]',
    ],
    0,
    'Normative dimension of identity.',
  ],
  [
    'Text: "Intersectionality highlights that gender, class and ethnicity jointly shape self-understanding."',
    [
      '[[Axes of identity interact rather than add up simply.|Intersección de ejes.]]',
      '[[Only one axis matters at a time.|Solo un eje importa.]]',
      '[[Class erases ethnicity.|La clase borra etnia.]]',
    ],
    0,
    'Joint shaping = intersectionality.',
  ],
  [
    'Text: "Defensive self-enhancement protects esteem but can block corrective feedback."',
    [
      '[[Self-protection trades off against openness to critique.|Protección vs apertura al feedback.]]',
      '[[Feedback is never useful.|El feedback nunca sirve.]]',
      '[[Esteem should be abandoned.|Hay que abandonar la autoestima.]]',
    ],
    0,
    'Trade-off in the extract.',
  ],
  [
    'Text: "Identity plurality acknowledges multiple coherent selves across communities without pathology."',
    [
      '[[Multiple situated selves need not imply disorder.|Pluralidad sin patología.]]',
      '[[Multiple selves are always pathological.|Siempre patológico.]]',
      '[[Communities erase individuality.|Las comunidades borran individualidad.]]',
    ],
    0,
    '*Without pathology* is key.',
  ],
  [
    'Text: "Temporal comparison can foster growth when prior setbacks are framed as learning."',
    [
      '[[Reframing the past can support development.|Reencuadre del pasado.]]',
      '[[Past failures must be denied.|Hay que negar fracasos.]]',
      '[[Learning from the past is impossible.|No se puede aprender.]]',
    ],
    0,
    'Framing matters for growth.',
  ],
  [
    'Text: "Stereotype threat can undermine performance on tasks framed as diagnostic of ability."',
    [
      '[[Situational framing can trigger anxiety linked to stereotypes.|Amenaza del estereotipo situacional.]]',
      '[[Stereotypes never affect performance.|Los estereotipos no afectan.]]',
      '[[Diagnostic tasks are always fair.|Siempre justas.]]',
    ],
    0,
    'Classic social-psychology idea.',
  ],
  [
    'Text: "Self-compassion treats setbacks with kindness rather than harsh self-criticism."',
    [
      '[[A gentler internal stance toward failure is advocated.|Autocompasión frente al fracaso.]]',
      '[[Harsh criticism is always best.|La crítica dura siempre es mejor.]]',
      '[[Setbacks should be ignored.|Hay que ignorar fracasos.]]',
    ],
    0,
    '*Kindness vs harsh criticism*.',
  ],
  [
    'Text: "Identity work continues across the lifespan as roles and commitments evolve."',
    [
      '[[Identity is an ongoing process, not a one-off achievement.|Proceso continuo.]]',
      '[[Identity stabilises fully at twenty-five.|Se estabiliza a los 25.]]',
      '[[Roles never change.|Los roles no cambian.]]',
    ],
    0,
    '*Continues across the lifespan*.',
  ],
];

const reading = [];
let ri = 0;
for (const row of [...readingPassages, ...readingExtra]) {
  ri++;
  reading.push(
    exRead(
      `c1-u1-r${ri}`,
      'identity-reading',
      'Reading',
      '[[Reading|Lectura]]: [[Identity and Self-Image|Identidad e imagen personal]]',
      'Read the extract and choose the best answer.',
      row[0] + '\n\nAccording to the extract:',
      row[1],
      row[2],
      row[3]
    )
  );
}

const listeningData = [
  [
    'Speaker: "People with clearer self-concepts often rebound faster after major life stressors."\n\nThe speaker links clarity to:',
    [
      '[[resilience after adversity|resiliencia tras adversidad]]',
      '[[higher income|mayores ingresos]]',
      '[[shorter sleep|menos sueño]]',
    ],
    0,
    'Rebound = resilience.',
  ],
  [
    'Speaker: "A turning point narrative marks when someone felt they \'became who they really were\'."\n\nThe focus is:',
    [
      '[[biographical moments that redefine identity|momentos que redefinen identidad]]',
      '[[forgetting the past|olvidar el pasado]]',
      '[[avoiding all change|evitar cambio]]',
    ],
    0,
    '*Turning point* stories.',
  ],
  [
    'Lecturer: "Upward comparison can erode self-esteem if we discount situational advantages."\n\nMain risk:',
    [
      '[[damaged self-worth when context is ignored|autoestima dañada sin contexto]]',
      '[[guaranteed motivation|motivación garantizada]]',
      '[[elimination of envy|eliminación de envidia]]',
    ],
    0,
    'Matches upward comparison warning.',
  ],
  [
    'Interviewer: "Performative authenticity online can feel compulsory rather than liberating."\n\nThe tone suggests:',
    [
      '[[pressure to appear authentic|presión por parecer auténtico]]',
      '[[total freedom online|libertad total]]',
      '[[authenticity is effortless|autenticidad sin esfuerzo]]',
    ],
    0,
    '*Compulsory* implies pressure.',
  ],
  [
    'Coach: "Name the emotion beneath the self-criticism — that step reduces rumination."\n\nThe advice targets:',
    [
      '[[metacognitive awareness of feelings|conciencia metacognitiva]]',
      '[[suppressing all emotions|suprimir emociones]]',
      '[[ignoring goals|ignorar metas]]',
    ],
    0,
    'Labeling emotions → metacognition.',
  ],
  [
    'Podcast host: "Belonging isn\'t the same as fitting in — you can conform and still feel alone."\n\nDistinction:',
    [
      '[[conformity without connection ≠ belonging|conformidad sin conexión]]',
      '[[fitting in always equals belonging|encajar siempre es pertenencia]]',
      '[[belonging requires uniformity|pertenencia exige uniformidad]]',
    ],
    0,
    'Contrast *fitting in* vs *belonging*.',
  ],
  [
    'Therapist: "Values clarification exercises reduce decision paralysis tied to identity conflicts."\n\nIntended outcome:',
    [
      '[[more decisive action aligned with priorities|acción alineada con prioridades]]',
      '[[elimination of all values|eliminar valores]]',
      '[[permanent paralysis|parálisis permanente]]',
    ],
    0,
    'Reduce paralysis → clearer decisions.',
  ],
  [
    'Debate: "If identity is narrative, revision is a feature, not a failure."\n\nSpeaker implies:',
    [
      '[[changing your story can be healthy|Cambiar la historia puede ser sano]]',
      '[[revision means pathology|revisar es patología]]',
      '[[narratives must be static|narrativas estáticas]]',
    ],
    0,
    '*Revision is a feature*.',
  ],
  [
    'Seminar leader: "Hedging claims about others\' motives avoids unfair moralisation."\n\nPedagogical aim:',
    [
      '[[epistemic humility in interpreting behaviour|humildad epistémica]]',
      '[[certain mind-reading|lectura segura de mentes]]',
      '[[moral condemnation|condena moral]]',
    ],
    0,
    'Hedge interpretations of motives.',
  ],
  [
    'Radio: "Impostor feelings spike after promotions because the reference group shifts."\n\nExplanation:',
    [
      '[[new peers reset comparison standards|nuevos estándares de comparación]]',
      '[[promotions remove doubt|los ascensos quitan dudas]]',
      '[[reference groups never change|grupos de referencia fijos]]',
    ],
    0,
    'Reference group shift.',
  ],
  [
    'Workshop: "Two-factor self-esteem models separate competence from worth."\n\nConceptual point:',
    [
      '[[performance and global worth are distinguishable|competencia vs valor global]]',
      '[[competence equals worth always|competencia = valor siempre]]',
      '[[worth is irrelevant|el valor no importa]]',
    ],
    0,
    'Distinction in models.',
  ],
  [
    'Lecture: "Cultural tightness intensifies sanctioning of deviant self-presentations."\n\nImplication:',
    [
      '[[stricter norms constrain identity expression|normas más estrictas]]',
      '[[all cultures are equally loose|todas igual de laxas]]',
      '[[deviance is always rewarded|la desviación se premia]]',
    ],
    0,
    '*Tight* cultures + sanctions.',
  ],
  [
    'Clip: "Self-disclosure reciprocity builds trust faster than charisma alone."\n\nMechanism:',
    [
      '[[mutual vulnerability accelerates rapport|vulnerabilidad mutua]]',
      '[[charisma is harmful|carisma dañino]]',
      '[[disclosure never matters|la revelación no importa]]',
    ],
    0,
    'Reciprocity of disclosure.',
  ],
  [
    'Interview: "Identity fusion can explain extreme pro-group action."\n\nKey idea:',
    [
      '[[blurred self-group boundaries|límites yo-grupo difusos]]',
      '[[complete independence from groups|independencia total]]',
      '[[fusion removes all empathy|sin empatía]]',
    ],
    0,
    'Identity fusion concept.',
  ],
  [
    'Panel: "Microaggressions accumulate, creating hostile clarity about belonging."\n\nEffect described:',
    [
      '[[cumulative cues signal unwelcome|cues acumulativas]]',
      '[[single events never matter|un solo evento no importa]]',
      '[[belonging is guaranteed|pertenencia garantizada]]',
    ],
    0,
    'Cumulative harm.',
  ],
  [
    'Talk: "Future possible selves motivate study habits when vivid and plausible."\n\nCondition:',
    [
      '[[vivid plausible future self-images|yo futuro vívido y plausible]]',
      '[[vague fears alone|solo miedos vagos]]',
      '[[avoiding any imagination|sin imaginación]]',
    ],
    0,
    'Possible selves literature.',
  ],
  [
    'Discussion: "Labels can scaffold growth but also freeze self-stereotyping."\n\nNuanced view:',
    [
      '[[labels have both enabling and limiting effects|efectos mixtos de etiquetas]]',
      '[[labels are always neutral|siempre neutras]]',
      '[[growth never needs labels|crecimiento sin etiquetas siempre]]',
    ],
    0,
    'Both sides.',
  ],
  [
    'Summary: "Integration across minority identities can demand extra cognitive load daily."\n\nPoint:',
    [
      '[[navigating multiple stigmas is taxing|coste cognitivo de minorías múltiples]]',
      '[[identity is effortless for everyone|sin esfuerzo para todos]]',
      '[[cognitive load is mythical|carga cognitiva mítica]]',
    ],
    0,
    'Minority stress / load.',
  ],
];

const listening = [];
listeningData.forEach((row, i) => {
  listening.push(
    exListen(
      `c1-u1-l${i + 1}`,
      'identity-listening',
      'Listening',
      '[[Listening|Comprensión auditiva]]: [[Identity in discourse|Identidad en el discurso]]',
      'Listen to the extract (read the script if no audio) and answer.',
      row[0],
      row[1],
      row[2],
      row[3]
    )
  );
});

const writingData = [
  [
    'Title: "Cultural background is the single most important factor in shaping identity." Choose the strongest C1 opening.',
    [
      '[[While cultural background is undeniably influential, reducing identity to culture alone overlooks agency, temperament and life events that also shape who we become.|Matiz y tesis equilibrada]]',
      '[[Culture is everything and nothing else matters.|demasiado absoluto]]',
      '[[In this essay I will talk about culture.|demasiado vago]]',
    ],
    0,
    'Hedging + counter-thesis = C1 argumentative move.',
  ],
  [
    'Which paragraph uses contrast connectors most effectively?',
    [
      '[[While cultural narratives frame self-understanding, individuals reinterpret them — sometimes resisting norms in ways that reshape identity over time.|While / resist / reshape]]',
      '[[Culture matters. People matter. Identity is complex.|sin desarrollo]]',
      '[[Identity is nice and interesting.|coloquial]]',
    ],
    0,
    'Structured contrast + precision.',
  ],
  [
    'Choose the most precise academic conclusion on identity formation.',
    [
      '[[The evidence reviewed suggests identity as an ongoing negotiation between internal dispositions and external social structures.|negociación interna-externa]]',
      '[[Identity is big and complicated.|vago]]',
      '[[I think everyone is different.|informal]]',
    ],
    0,
    'Dense, neutral register.',
  ],
  [
    'Select the best thesis for a problem-solution essay on social comparison.',
    [
      '[[Although upward comparison can motivate self-improvement, platform design that strips context systematically risks adolescent self-esteem; regulatory nudges and media literacy may mitigate harm.|tesis problema-solución]]',
      '[[Phones are bad.|demasiado simple]]',
      '[[Comparison is comparison.|tautología]]',
    ],
    0,
    'Problem + mitigation.',
  ],
  [
    'Which sentence avoids overstated certainty?',
    [
      '[[The data tentatively suggest a correlation rather than a causal link.|tentatively suggest]]',
      '[[The data prove absolute causality forever.|demasiado fuerte]]',
      '[[There is no data.|falso]]',
    ],
    0,
    'Academic hedging.',
  ],
  [
    'Pick the cohesive paragraph.',
    [
      '[[First, self-concept clarity predicts wellbeing. Second, it buffers stress responses. Therefore, interventions targeting clarity may improve resilience.|First / Second / Therefore]]',
      '[[Stuff happens. People feel bad. The end.|sin cohesión]]',
      '[[Clarity. Wellbeing. Maybe.|telegráfico]]',
    ],
    0,
    'Clear signposting.',
  ],
  [
    'Choose appropriate register for a formal proposal.',
    [
      '[[The undersigned respectfully recommend piloting a peer-mentoring scheme to support identity exploration among first-year students.|registro formal]]',
      '[[Hey guys, let\'s try mentors lol.|informal]]',
      '[[Do mentoring now or else.|amenaza]]',
    ],
    0,
    'Formal proposal tone.',
  ],
  [
    'Which reformulation avoids plagiarism while keeping meaning?',
    [
      '[[Identity is portrayed as socially co-constructed rather than discovered in isolation (cf. canonical social-constructionist accounts).|paráfrasis con marca]]',
      '[[Identity is discovered in isolation.|contradice la fuente]]',
      '[[Same words copied.|plagio]]',
    ],
    0,
    'Paraphrase + attribution cue.',
  ],
  [
    'Best topic sentence for a body paragraph on digital self-presentation?',
    [
      '[[Algorithmic curation of self-images may intensify performative pressures that complicate authentic self-disclosure online.|tema claro y matizado]]',
      '[[Instagram exists.|irrelevante]]',
      '[[Photos are photos.|vago]]',
    ],
    0,
    'Focused + analytical.',
  ],
  [
    'Select the sentence with parallel structure.',
    [
      '[[The study examined how adolescents narrate failure, how they attribute success and how they revise self-worth after feedback.|paralelismo how… how… how…]]',
      '[[The study examined failing, success and after feedback revising.|roto]]',
      '[[Examined stuff about things.|vago]]',
    ],
    0,
    'Parallel clauses.',
  ],
  [
    'Which transition fits between paragraphs on theory and critique?',
    [
      '[[Notwithstanding its explanatory power, the narrative-identity model has been criticised for underplaying unconscious processes.|Notwithstanding + crítica]]',
      '[[Anyway whatever.|informal]]',
      '[[Next paragraph.|sin conexión]]',
    ],
    0,
    'Formal counterpoint.',
  ],
  [
    'Choose the best definition-style sentence for *impostor phenomenon*.',
    [
      '[[Impostor phenomenon denotes high achievers\' persistent belief that they are frauds despite objective evidence of competence.|definición académica]]',
      '[[Impostor phenomenon is when you feel happy.|incorrecto]]',
      '[[It is a kind of food.|absurdo]]',
    ],
    0,
    'Formal definition.',
  ],
  [
    'Pick the most precise colligation in academic prose.',
    [
      '[[Participants reported heightened self-doubt when evaluative contexts were salient.|collocaciones naturales]]',
      '[[Participants did big doubt in hard places.|no nativo]]',
      '[[Doubt went up and places were there.|vago]]',
    ],
    0,
    'Academic collocations.',
  ],
  [
    'Which closing moves beyond summary to implication?',
    [
      '[[These findings imply that curricula addressing self-concept clarity could complement traditional skills training in transition programmes.|implicación]]',
      '[[In conclusion, we discussed many things.|solo resumen]]',
      '[[The end.|corto]]',
    ],
    0,
    'Implications for practice.',
  ],
  [
    'Choose the best hedged critique of a method.',
    [
      '[[The cross-sectional design limits causal inference; longitudinal replication would strengthen claims.|límite metodológico matizado]]',
      '[[The study is rubbish.|grosero]]',
      '[[The study is perfect.|sin crítica]]',
    ],
    0,
    'Measured critique.',
  ],
  [
    'Select the sentence that maintains an academic stance toward contested concepts.',
    [
      '[[Authenticity remains contested; for present purposes, we operationalise it as values-behaviour congruence reported in structured interviews.|operacionalización]]',
      '[[Authenticity is whatever I say.|subjetivo]]',
      '[[Nobody knows words.|absurdo]]',
    ],
    0,
    'Define terms operationally.',
  ],
  [
    'Which option shows appropriate citation framing?',
    [
      '[[As Goffman (1959) famously argued, everyday interaction involves impression management rather than transparent self-display.|marco de cita]]',
      '[[Goffman said stuff in a book.|vago]]',
      '[[According to me, Goffman is wrong always.|sin evidencia]]',
    ],
    0,
    'Academic attribution (style).',
  ],
  [
    'Choose the best sentence variety for rhetorical effect.',
    [
      '[[The evidence is sparse; the stakes, nonetheless, are high: adolescents deserve better than anecdote-driven policy.|variedad y dos puntos]]',
      '[[The evidence is sparse and stakes are high and adolescents deserve better.|todo coordinado]]',
      '[[Sparse high deserve.|telegráfico]]',
    ],
    0,
    'Controlled variation.',
  ],
];

const writing = [];
writingData.forEach((row, i) => {
  writing.push(
    exWrite(
      `c1-u1-w${i + 1}`,
      'argumentative-essay',
      'Writing',
      '[[Writing|Escritura]]: [[Academic writing — identity|Escritura académica — identidad]]',
      'Choose the most effective option for C1-level writing.',
      row[0],
      row[1],
      row[2],
      row[3]
    )
  );
});

const speakingData = [
  [
    'Concede a point before countering, in a formal debate:',
    [
      '[[While I take your point that cultural background is profoundly formative, I would contend that individual agency and peer networks also exert decisive influence.|While I take your point… I would contend…]]',
      '[[You are totally wrong about everything.|agresivo]]',
      '[[OK.|demasiado corto]]',
    ],
    0,
    'Concession + counter-argument.',
  ],
  [
    'Soften a strong claim in a seminar:',
    [
      '[[It would be hard to deny that social comparison shapes self-esteem, though it is probably not the sole mechanism.|hedging en capas]]',
      '[[Social comparison is 100% everything.|absoluto]]',
      '[[Maybe stuff happens.|demasiado flojo]]',
    ],
    0,
    'Layered hedging.',
  ],
  [
    'Structure a Part 3-style oral answer:',
    [
      '[[I\'d like to approach this from two angles: first, how norms constrain expression; second, how individuals negotiate those constraints.|signposting]]',
      '[[I don\'t know.|evasivo]]',
      '[[Norms. People. Bye.|telegráfico]]',
    ],
    0,
    'Oral signposting.',
  ],
  [
    'Politely disagree with a generalisation:',
    [
      '[[I\'m not entirely convinced that identity stabilises by early adulthood; longitudinal studies show continued revision well into middle age.|discrepar con respeto]]',
      '[[That is stupid.|grosero]]',
      '[[I agree with everything.|sin posición]]',
    ],
    0,
    'Respectful disagreement + evidence cue.',
  ],
  [
    'Buy time to think aloud:',
    [
      '[[That\'s an interesting question; if I may, I\'ll think aloud for a moment before giving a fuller answer.|ganar tiempo]]',
      '[[No comment.|cerrado]]',
      '[[Next question.|evasivo]]',
    ],
    0,
    'Stalling formula.',
  ],
  [
    'Emphasise a key distinction orally:',
    [
      '[[The crucial distinction here is between belonging and mere inclusion — you can be present yet not feel accepted.|crucial distinction]]',
      '[[There is no distinction.|nada]]',
      '[[Belonging is a word.|vago]]',
    ],
    0,
    'Clarifying concept.',
  ],
  [
    'Summarise someone else\'s view before responding:',
    [
      '[[If I understand you correctly, you\'re suggesting that online personas are entirely fabricated. I\'d qualify that: curation isn\'t necessarily fabrication.|reformular]]',
      '[[You said words.|vago]]',
      '[[Wrong.|sin reformulación]]',
    ],
    0,
    'Active listening move.',
  ],
  [
    'Close a discussion with a balanced takeaway:',
    [
      '[[So, to pull the threads together, both structure and agency seem indispensable for a rounded account of identity formation.|cierre equilibrado]]',
      '[[Whatever.|informal]]',
      '[[I forgot.|evasivo]]',
    ],
    0,
    'Synthesis phrase.',
  ],
  [
    'Ask for clarification in an academic tutorial:',
    [
      '[[Could you clarify what you mean by \'performative\' in this context — are you using it in the Butlerian sense?|precisión conceptual]]',
      '[[What?|demasiado brusco]]',
      '[[I know everything.|arrogante]]',
    ],
    0,
    'Targeted clarification.',
  ],
  [
    'Express partial agreement:',
    [
      '[[I partly agree: the narrative lens illuminates meaning-making, yet it may underplay non-verbal aspects of selfhood.|partial agreement]]',
      '[[I totally agree and disagree.|incoherente]]',
      '[[No.|cerrado]]',
    ],
    0,
    'Qualified agreement.',
  ],
  [
    'Redirect a hostile question:',
    [
      '[[I appreciate the challenge; perhaps we can reframe it as an empirical question about mechanisms rather than motives.|reencuadre]]',
      '[[Shut up.|inaceptable]]',
      '[[I refuse.|sin tacto]]',
    ],
    0,
    'Diplomatic reframing.',
  ],
  [
    'Use a discourse marker to add weight:',
    [
      '[[Moreover, cross-cultural evidence complicates any monocausal story about identity.|Moreover + complica]]',
      '[[Also stuff.|informal]]',
      '[[And.|demasiado débil]]',
    ],
    0,
    'Formal additive marker.',
  ],
  [
    'Acknowledge limitations of your own argument orally:',
    [
      '[[I should stress that my view rests largely on WEIRD samples; generalisation should be cautious.|límites explícitos]]',
      '[[My view is perfect.|sin límites]]',
      '[[No limitations exist.|falso]]',
    ],
    0,
    'Epistemic modesty.',
  ],
  [
    'Invite another speaker to contribute:',
    [
      '[[I\'d be interested to hear whether your fieldwork supports or challenges that pattern.|invitar a contribuir]]',
      '[[Talk now or never.|amenaza]]',
      '[[You have nothing to say.|descortés]]',
    ],
    0,
    'Inclusive facilitation.',
  ],
  [
    'Respond to a request for examples:',
    [
      '[[A concrete illustration would be adolescents revising career narratives after gap-year travel.|ejemplo concreto]]',
      '[[Examples exist.|vago]]',
      '[[No examples.|evasivo]]',
    ],
    0,
    'Illustration move.',
  ],
  [
    'Signal you are building on prior point:',
    [
      '[[Building on that point, we might ask how institutions encode which identity claims count as legitimate.|Building on that point]]',
      '[[Unrelated: cats.|tangente]]',
      '[[Forget that.|ruptura]]',
    ],
    0,
    'Cohesive linkage.',
  ],
  [
    'Express empathy without overclaiming:',
    [
      '[[I can see why that experience would shake your confidence, even if outwardly everything looked fine.|empatía matizada]]',
      '[[Your feelings are invalid.|dañino]]',
      '[[I feel exactly your brain.|extraño]]',
    ],
    0,
    'Empathic validation.',
  ],
  [
    'End with a forward-looking question (discussion):',
    [
      '[[Where might digital identity research go next if we take hybrid online-offline lives seriously?|pregunta prospectiva]]',
      '[[The end.|cierre seco]]',
      '[[Who cares?|descortés]]',
    ],
    0,
    'Productive closing question.',
  ],
];

const speaking = [];
speakingData.forEach((row, i) => {
  speaking.push(
    exMC(
      `c1-u1-s${i + 1}`,
      'speaking-debate',
      'Speaking',
      '[[Speaking|Expresión oral]]: [[Discussion — identity|Discusión — identidad]]',
      'Choose the most appropriate C1-level spoken English.',
      row[0],
      row[1],
      row[2],
      row[3]
    )
  );
});

const all = [...grammar, ...vocabulary, ...reading, ...listening, ...writing, ...speaking];

const header = `/**
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
`;

const footer = `
];
`;

fs.writeFileSync(OUT, header + all.join(',\n') + footer, 'utf8');
console.log('Wrote', OUT, '(' + all.length + ' exercises)');
