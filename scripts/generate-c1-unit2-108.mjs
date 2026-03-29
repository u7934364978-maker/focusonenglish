#!/usr/bin/env node
/**
 * Genera unit-2.ts (108 ítems) y c1-unit2-question-es.ts (tooltips g,v,w,s).
 * Uso: node scripts/generate-c1-unit2-108.mjs
 */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const OUT_UNIT = path.join(__dirname, '../src/lib/course/c1/unit-2.ts');
const OUT_ES = path.join(__dirname, '../src/lib/course/c1/c1-unit2-question-es.ts');

const questionEs = {};

function j(s) {
  return JSON.stringify(s);
}

function noteEs(id, es) {
  questionEs[id] = es;
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

const G_TITLE = '[[Grammar|Gramática]]: [[Inversion for Emphasis|Inversión para énfasis]]';
const V_TITLE = '[[Vocabulary|Vocabulario]]: [[Language, Discourse and Register|Lenguaje, discurso y registro]]';
const R_TITLE = '[[Reading|Lectura]]: [[Language and Communication|Lenguaje y comunicación]]';
const L_TITLE = '[[Listening|Comprensión auditiva]]: [[Language in Use|Lenguaje en uso]]';
const W_TITLE = '[[Writing|Escritura]]: [[Academic writing — language|Escritura académica — lenguaje]]';
const S_TITLE = '[[Speaking|Expresión oral]]: [[Discussion — language|Discusión — lenguaje]]';

const INS = {
  choose: '[[Choose the best answer.|Elige la mejor respuesta.]]',
  complete: '[[Complete with the correct structure.|Completa con la estructura correcta.]]',
  vocab: '[[Choose the word or phrase that best completes the sentence.|Elige la palabra o frase que mejor completa la oración.]]',
  read: '[[Read the extract and choose the best answer.|Lee el extracto y elige la mejor respuesta.]]',
  listen: '[[Listen to the extract (read the script if no audio) and answer.|Escucha el extracto (lee el guión si no hay audio) y responde.]]',
  write: '[[Choose the most effective option for C1-level writing.|Elige la opción más efectiva para un texto de nivel C1.]]',
  speak: '[[Choose the most appropriate C1-level spoken English.|Elige el inglés oral más adecuado para nivel C1.]]',
};

function rq(quoteEn, quoteEs) {
  return `[[Text:|Texto:]] \"[[${quoteEn}|${quoteEs}]]\"\n\n[[According to the extract:|Según el extracto:]]`;
}

const grammar = [];
const gRows = [
  [
    'mc',
    '_______ have I heard such a compelling argument in a debate.',
    'Nunca he oído un argumento tan convincente en un debate. ¿Qué palabra encabeza la inversión correcta?',
    ['[[Never|Jamás / Nunca]]', '[[Not|No (solo)]]', '[[Although|Aunque]]'],
    0,
    '*Never* + auxiliary + subject = standard negative adverb inversion.',
  ],
  [
    'fb',
    'Not only ____ she master three languages, but she also codes in Python.',
    'No solo domina tres idiomas, sino que también programa en Python. Completa la inversión con *Not only*.',
    ['[[did|hizo / auxiliar pasado]]', '[[does|hace]]', '[[has|ha]]'],
    'did',
    ['did'],
    '*Not only + did + subject + bare infinitive* (past simple).',
  ],
  [
    'mc',
    'Which sentence uses inversion correctly?',
    '¿Qué oración usa la inversión correctamente?',
    [
      '[[Seldom I have seen such rigour.|Incorrecta: sin inversión.]]',
      '[[Seldom have I seen such rigour.|Raramente he visto tal rigor.]]',
      '[[I have seldom seen such rigour.|Oración corriente, no enfática al inicio.]]',
    ],
    1,
    '*Seldom + have + subject + past participle*.',
  ],
  [
    'mc',
    '_______ had the speaker finished than questions flooded in.',
    'Apenas había terminado el ponente cuando llegaron las preguntas. ¿Qué encabeza *no sooner… than*?',
    ['[[No sooner|No sooner / Apenas]]', '[[Hardly|Hardly]]', '[[Scarcely|Scarcely]]'],
    0,
    '*No sooner + had + subject + past participle + than*.',
  ],
  [
    'fb',
    'Rarely ____ such a balanced policy brief cross my desk.',
    'Raramente me ha pasado por el escritorio un informe de políticas tan equilibrado. Completa con auxiliar + sujeto.',
    ['[[have I seen|have I seen]]', '[[I have seen|I have seen]]', '[[did I saw|did I saw]]'],
    'have I seen',
    ['have I seen'],
    '*Rarely + have + subject + past participle*.',
  ],
  [
    'mc',
    'Which fronting triggers inversion of the auxiliary?',
    '¿Qué elemento al inicio exige invertir el auxiliar?',
    [
      '[[In the report the findings appear.|Preposicional sin inversión.]]',
      '[[Under no circumstances should trainees ignore safety protocols.|En ningún caso los becarios deben ignorar los protocolos de seguridad.]]',
      '[[The trainees should never ignore safety protocols.|Orden canónica.]]',
    ],
    1,
    'Negative *Under no circumstances* requires inversion (*should trainees*).',
  ],
  [
    'fb',
    'Little ____ they realise how their phrasing would be interpreted online.',
    'Poco se dieron cuenta de cómo se interpretaría su redacción en línea. Completa: *Little + ____ + they*.',
    ['[[did|did]]', '[[do|do]]', '[[had|had]]'],
    'did',
    ['did'],
    '*Little + did + subject + bare infinitive* (past).',
  ],
  [
    'mc',
    'Not until the Q&A ____ the chair acknowledge the funding conflict.',
    'No fue hasta el turno de preguntas cuando el moderador reconoció el conflicto de financiación. ¿Qué encaja?',
    ['[[did|did]]', '[[that|that]]', '[[when|when]]'],
    0,
    '*Not until + time clause + inversion in main clause* → *did the chair acknowledge*.',
  ],
  [
    'mc',
    'Hardly ____ the meeting begun when the fire alarm sounded.',
    'Apenas había empezado la reunión cuando sonó la alarma. ¿Qué forma es correcta?',
    [
      '[[Hardly the meeting had begun|Orden incorrecto.]]',
      '[[Hardly had the meeting begun|Apenas había empezado la reunión.]]',
      '[[Hardly begun the meeting had|Roto.]]',
    ],
    1,
    '*Hardly + had + subject + past participle + when*.',
  ],
  [
    'fb',
    'At no time ____ the team promise guaranteed outcomes.',
    'En ningún momento el equipo prometió resultados garantizados. Completa la inversión.',
    ['[[did|did]]', '[[the team did|the team did]]', '[[was|was]]'],
    'did',
    ['did'],
    '*At no time + did + subject + bare infinitive*.',
  ],
  [
    'mc',
    'Nowhere else ____ one find such granular corpus tagging guidelines.',
    'En ningún otro sitio se encuentran directrices de etiquetado de corpus tan detalladas. ¿Qué opción es correcta?',
    [
      '[[Nowhere else one can find|Sin inversión.]]',
      '[[Nowhere else can one find|Inversión correcta con modal.]]',
      '[[One can nowhere else find|Roto.]]',
    ],
    1,
    '*Nowhere + auxiliary + subject*.',
  ],
  [
    'mc',
    'So convincing ____ the evidence that the panel revised its stance.',
    'Tan convincente era la evidencia que el panel revisó su postura. ¿Qué encaja en *So + adj + ____*?',
    ['[[was the evidence|was the evidence]]', '[[the evidence was|the evidence was]]', '[[did the evidence|did the evidence]]'],
    0,
    '*So + adjective + be + subject* inversion pattern.',
  ],
  [
    'fb',
    'Such ____ the backlash that the post was retracted within hours.',
    'Tal fue la reacción que el mensaje se retiró en cuestión de horas. Completa: *Such + ____ + the backlash*.',
    ['[[was|was]]', '[[did|did]]', '[[had|had]]'],
    'was',
    ['was'],
    '*Such + be + noun phrase + that-clause* (inversion with *was*).',
  ],
  [
    'mc',
    'Only after reading the footnotes ____ the ambiguity become clear.',
    'Solo después de leer las notas al pie quedó clara la ambigüedad. ¿Qué forma sigue a *Only after…*?',
    [
      '[[the ambiguity became|sin inversión]]',
      '[[did the ambiguity become|did the ambiguity become]]',
      '[[became the ambiguity|incorrecto]]',
    ],
    1,
    '*Only + prepositional phrase + inversion in main clause*.',
  ],
  [
    'mc',
    'Which sentence keeps standard word order (no inversion needed)?',
    '¿Qué oración mantiene el orden canónico (no hace falta inversión)?',
    [
      '[[I have never trusted opaque metrics.|Orden estándar con never.]]',
      '[[Never have I trusted opaque metrics.|Con inversión enfática.]]',
      '[[Rarely do I trust opaque metrics.|Con inversión.]]',
    ],
    0,
    '*Never* after auxiliary → no inversion; fronted *Never* → inversion.',
  ],
  [
    'fb',
    'Scarcely ____ the words out of her mouth than colleagues objected.',
    'Apenas había salido de su boca que sus colegas objetaron. Completa *Scarcely ____ + she + got*.',
    ['[[had she got|had she got]]', '[[she had got|she had got]]', '[[did she got|did she got]]'],
    'had she got',
    ['had she got'],
    '*Scarcely + had + subject + past participle + than*.',
  ],
  [
    'mc',
    'Choose the best inversion for formal written English:',
    'Elige la mejor inversión para registro formal escrito:',
    [
      '[[Little consideration was given to pragmatic failure.|Pasiva; no es inversión enfática del tipo *Little did*.]]',
      '[[Little did the authors consider pragmatic failure.|Los autores apenas consideraron el fracaso pragmático.]]',
      '[[The authors little considered pragmatic failure.|No idiomático.]]',
    ],
    1,
    '*Little + auxiliary + subject + verb* for emphatic limitation.',
  ],
  [
    'fb',
    'Were the data sounder, we ____ draw firmer conclusions — choose the verb form (subjunctive-style conditional).',
    'Si los datos fueran más sólidos, podríamos extraer conclusiones más firmes. Completa el verbo en la apódosis.',
    ['[[could|could]]', '[[can|can]]', '[[will|will]]'],
    'could',
    ['could'],
    '*Were + subject + adjective* opens inverted conditional; main clause often *could/would*.',
  ],
];

gRows.forEach((row, i) => {
  const n = i + 1;
  const id = `c1-u2-g${n}`;
  noteEs(id, row[2]);
  if (row[0] === 'mc') {
    grammar.push(
      exMC(id, 'inversion-emphasis', 'Grammar', G_TITLE, INS.choose, row[1], row[3], row[4], row[5])
    );
  } else {
    grammar.push(
      exFB(id, 'inversion-emphasis', 'Grammar', G_TITLE, INS.complete, row[1], row[3], row[4], row[5], row[6])
    );
  }
});

const vocabulary = [];
const vRows = [
  [
    'The memo used _______ to downplay the layoffs as "rightsizing".',
    'La nota interna usó un eufemismo para restar importancia a los despidos como «rightsizing».',
    ['[[euphemism|eufemismo]]', '[[euphony|eufonía]]', '[[ellipsis|elipsis]]'],
    0,
    '*Euphemism* softens harsh realities.',
  ],
  [
    'In Brussels meetings, English often serves as a _______ among diplomats.',
    'En las reuniones de Bruselas, el inglés suele servir de lengua franca entre diplomáticos.',
    ['[[lingua franca|lengua franca]]', '[[pidgin|pidgin]]', '[[creole|criollo]]'],
    0,
    '*Lingua franca* = bridge language.',
  ],
  [
    'Pragmatics studies how context shapes _______ — what we do with words.',
    'La pragmática estudia cómo el contexto moldea el acto ilocucionario: qué hacemos con las palabras.',
    ['[[illocutionary force|fuerza ilocucionaria]]', '[[syntax|sintaxis]]', '[[morphology|morfología]]'],
    0,
    'Speech-act angle: *illocutionary force*.',
  ],
  [
    'The term "enhanced interrogation" carries heavy political _______.',
    'La expresión «interrogatorio mejorado» arrastra una fuerte connotación política.',
    ['[[connotation|connotación]]', '[[denotation|denotación]]', '[[etymology|etimología]]'],
    0,
    'Associative meaning → *connotation*.',
  ],
  [
    'Academic writers _______ "claim" with "argue" or "contend" to sound cautious.',
    'Los escritores académicos suelen sustituir «claim» por «argue» o «contend» para sonar prudentes.',
    ['[[collocate|colocar / usar en colocación]]', '[[conjugate|conjugar]]', '[[inflect|flexionar]]'],
    0,
    'Lexical verb choice = *collocate* in a broad sense (teaching usage).',
  ],
  [
    '_______, the email sounded polite; the attachment told another story.',
    'En la superficie, el correo sonaba cortés; el adjunto contaba otra historia.',
    ['[[On the surface|En la superficie]]', '[[Below ground|Bajo tierra]]', '[[Once inside|Una vez dentro]]'],
    0,
    'Discourse marker for outward vs hidden meaning.',
  ],
  [
    'Code-_______ between Spanish and English is common in bilingual workplaces.',
    'El cambio de código entre español e inglés es frecuente en entornos bilingües laborales.',
    ['[[switching|cambio de código]]', '[[breaking|ruptura]]', '[[locking|bloqueo]]'],
    0,
    '*Code-switching*.',
  ],
  [
    'The CEO\'s joke was a _______ act that unsettled junior staff.',
    'La broma del CEO fue un acto amenazante para la imagen del interlocutor que incomodó al personal junior.',
    ['[[face-threatening|amenazante para la imagen (face-threatening)]]', '[[face-saving|que salva la imagen]]', '[[face-blind|ceguera facial]]'],
    0,
    'Politeness theory: *face-threatening act*.',
  ],
  [
    'Legal _______ makes statutes hard for lay readers without training.',
    'La jerga jurídica hace que los textos legales resulten difíciles para lectores sin formación.',
    ['[[jargon|jerga]]', '[[slang|argot]]', '[[jingle|eslógan]]'],
    0,
    'Specialised lexis → *jargon*.',
  ],
  [
    '______ ambiguity arises when a phrase has two plausible readings.',
    'La ambigüedad estructural surge cuando una frase admite dos lecturas plausibles.',
    ['[[Structural|Estructural]]', '[[Phonetic|Fonética]]', '[[Olfactory|Olfativa]]'],
    0,
    '*Structural ambiguity*.',
  ],
  [
    'The newspaper shifted to a more informal _______ to attract younger readers.',
    'El periódico adoptó un registro más informal para atraer a lectores jóvenes.',
    ['[[register|registro]]', '[[ledger|libro mayor]]', '[[cashier|cajero]]'],
    0,
    'Sociolinguistic *register*.',
  ],
  [
    '______ analysis examines how sentences relate beyond grammar.',
    'El análisis del discurso examina cómo se relacionan los enunciados más allá de la gramática.',
    ['[[Discourse|Del discurso / Discursivo]]', '[[Discrete|Discreto]]', '[[Discreet|Discreto (cualidad)]]'],
    0,
    '*Discourse analysis*.',
  ],
  [
    'The literal _______ of "inflammable" confuses some L2 learners.',
    'El sentido denotativo de «inflammable» confunde a algunos aprendices de L2.',
    ['[[denotation|denotación]]', '[[connotation|connotación]]', '[[annotation|anotación]]'],
    0,
    'Dictionary sense → *denotation*.',
  ],
  [
    'Her _______ was indirect: she requested "flexibility" rather than a raise.',
    'Su acto de habla fue indirecto: pidió «flexibilidad» en lugar de un aumento.',
    ['[[speech act|acto de habla]]', '[[speech day|día del discurso]]', '[[speech bubble|bocadillo]]'],
    0,
    '*Speech act*.',
  ],
  [
    'The slogan traded on _______ — positive words masking a harsh policy.',
    'El eslogan se apoyaba en la retórica: palabras positivas que enmascaraban una política dura.',
    ['[[rhetoric|retórica]]', '[[arithmetic|aritmética]]', '[[rheumatism|reumatismo]]'],
    0,
    'Persuasive language → *rhetoric*.',
  ],
  [
    '______ verbs like "suggest" and "imply" weaken categorical claims.',
    'Los verbos de reporte como «suggest» e «imply» atenúan afirmaciones categóricas.',
    ['[[Reporting|De reporte / reporting]]', '[[Roaring|Rugientes]]', '[[Soaring|Ascendentes]]'],
    0,
    '*Reporting verbs* in academic prose.',
  ],
  [
    'The interpreter preserved the speaker\'s _______ so the tone matched the original.',
    'El intérprete preservó la fuerza ilocucionaria para que el tono coincidiera con el original.',
    ['[[illocutionary force|fuerza ilocucionaria]]', '[[alliterative force|fuerza aliterativa]]', '[[magnetic force|fuerza magnética]]'],
    0,
    'Pragmatic fidelity.',
  ],
  [
    '______ competence includes knowing when silence is appropriate.',
    'La competencia comunicativa incluye saber cuándo el silencio es apropiado.',
    ['[[Communicative|Comunicativa]]', '[[Computational|Computacional]]', '[[Combative|Combativa]]'],
    0,
    '*Communicative competence* (Hymes).',
  ],
];

vRows.forEach((row, i) => {
  const n = i + 1;
  const id = `c1-u2-v${n}`;
  noteEs(id, row[1]);
  vocabulary.push(exMC(id, 'communication-vocabulary', 'Vocabulary', V_TITLE, INS.vocab, row[0], row[2], row[3], row[4]));
});

const readQuotes = [
  [
    'Language is not merely a mirror of reality; it actively shapes what we notice and how we argue.',
    'El lenguaje no es solo un espejo de la realidad; moldea activamente lo que notamos y cómo argumentamos.',
    [
      '[[It partly constructs perception and reasoning.|En parte construye la percepción y el razonamiento.]]',
      '[[It only reflects a fixed world.|Solo refleja un mundo fijo.]]',
      '[[It prevents all disagreement.|Impide cualquier desacuerdo.]]',
    ],
    0,
    'Active shaping vs passive mirroring.',
  ],
  [
    'Meaning is negotiated in interaction, not deposited intact from speaker to hearer.',
    'El significado se negocia en la interacción; no se transfiere intacto del hablante al oyente.',
    [
      '[[Understanding is co-produced in dialogue.|La comprensión se coproduce en el diálogo.]]',
      '[[Listeners are passive vessels.|Los oyentes son recipientes pasivos.]]',
      '[[Speakers always control meaning fully.|El hablante controla siempre el significado al 100%.]]',
    ],
    0,
    'Pragmatic negotiation.',
  ],
  [
    'Politeness strategies can mitigate face-threatening acts without erasing conflict.',
    'Las estrategias de cortesía pueden mitigar actos amenazantes para la imagen sin borrar el conflicto.',
    [
      '[[Softeners can reduce social damage while disagreement remains.|Los atenuantes reducen el daño social manteniendo el desacuerdo.]]',
      '[[Politeness removes all conflict.|La cortesía elimina todo conflicto.]]',
      '[[Face is irrelevant online.|La imagen social es irrelevante en línea.]]',
    ],
    0,
    'Mitigation ≠ elimination.',
  ],
  [
    'Register shifts signal stance as clearly as lexical choice.',
    'Los cambios de registro señalan la postura del hablante tan claramente como la elección léxica.',
    [
      '[[Formality cues communicate attitude.|Las señales de formalidad comunican actitud.]]',
      '[[Register is random noise.|El registro es ruido aleatorio.]]',
      '[[Only vocabulary matters for stance.|Solo el vocabulario importa para la postura.]]',
    ],
    0,
    'Register as stance marker.',
  ],
  [
    'Corpus evidence shows that prescriptive rules often lag behind actual usage.',
    'La evidencia de corpus muestra que las reglas prescriptivas a menudo van a la zaga del uso real.',
    [
      '[[Living usage may diverge from textbook norms.|El uso vivo puede desviarse de las normas de manual.]]',
      '[[Corpora prove textbooks are always right.|Los corpus demuestran que los manuales siempre aciertan.]]',
      '[[Usage never changes.|El uso nunca cambia.]]',
    ],
    0,
    'Descriptive vs prescriptive tension.',
  ],
  [
    'Metaphor is not decorative fluff; it structures reasoning in policy debates.',
    'La metáfora no es adorno superficial; estructura el razonamiento en debates de políticas.',
    [
      '[[Figurative frames steer how problems are defined.|Los marcos figurativos orientan cómo se definen los problemas.]]',
      '[[Metaphors never influence logic.|Las metáforas nunca influyen en la lógica.]]',
      '[[Policy is purely literal.|La política es puramente literal.]]',
    ],
    0,
    'Conceptual metaphor.',
  ],
  [
    'Bilingual speakers may calibrate identity through language choice in the same conversation.',
    'Los hablantes bilingües pueden calibrar la identidad mediante la elección de lengua en la misma conversación.',
    [
      '[[Code-switching can index affiliation or distance.|El cambio de código puede indicar afiliación o distancia.]]',
      '[[Bilinguals use one language only.|Los bilingües usan solo una lengua.]]',
      '[[Switching is always accidental.|El cambio siempre es accidental.]]',
    ],
    0,
    'Sociolinguistic indexing.',
  ],
  [
    'Hedging protects writers from overstated claims when evidence is partial.',
    'El matiz epistémico (hedging) protege a los autores de afirmaciones exageradas cuando la evidencia es parcial.',
    [
      '[[Tentative wording matches limited certainty.|Un registro tentativo encaja con certeza limitada.]]',
      '[[Hedging removes all credibility.|El hedging elimina toda credibilidad.]]',
      '[[Writers should always sound certain.|Los autores deben sonar siempre seguros.]]',
    ],
    0,
    'Epistemic stance.',
  ],
  [
    'Implicature lets speakers mean more than they literally say.',
    'La implicatura permite que los hablantes quieran decir más de lo que dicen literalmente.',
    [
      '[[Gricean cooperation explains many indirect readings.|La cooperación griceana explica muchas lecturas indirectas.]]',
      '[[Literal meaning is always exhaustive.|El significado literal siempre lo dice todo.]]',
      '[[Implicature forbids inference.|La implicatura prohíbe inferir.]]',
    ],
    0,
    'Pragmatic inference.',
  ],
  [
    'Taboo words carry social risk even when denotation is neutral in another context.',
    'Las palabras tabú conllevan riesgo social aunque la denotación sea neutra en otro contexto.',
    [
      '[[Sociolinguistic norms govern appropriateness.|Las normas sociolingüísticas rigen la adecuación.]]',
      '[[Taboo is purely grammatical.|Lo tabú es puramente gramatical.]]',
      '[[All words are interchangeable.|Todas las palabras son intercambiables.]]',
    ],
    0,
    'Appropriacy.',
  ],
  [
    'Discourse markers guide hearers through argument structure.',
    'Los marcadores del discurso guían al oyente por la estructura argumentativa.',
    [
      '[[Signposting improves processing of long turns.|La señalización mejora el procesamiento de turnos largos.]]',
      '[[Markers add no information.|Los marcadores no añaden información.]]',
      '[[Arguments need no structure.|Los argumentos no necesitan estructura.]]',
    ],
    0,
    'Metadiscourse.',
  ],
  [
    'Translation is rarely word-for-word because connotation diverges across languages.',
    'La traducción rara vez es palabra por palabra porque la connotación diverge entre lenguas.',
    [
      '[[Equivalence is often pragmatic, not lexical.|La equivalencia suele ser pragmática, no léxica.]]',
      '[[Every word maps one-to-one.|Cada palabra tiene un equivalente único.]]',
      '[[Connotation is identical globally.|La connotación es idéntica en todo el mundo.]]',
    ],
    0,
    'Translation pragmatics.',
  ],
  [
    'Silence can function as a strategic reply in institutional settings.',
    'El silencio puede funcionar como respuesta estratégica en contextos institucionales.',
    [
      '[[Withholding a response can be meaningful.|Retener la respuesta puede ser significativo.]]',
      '[[Silence always means agreement.|El silencio siempre significa acuerdo.]]',
      '[[Institutions ignore non-verbal cues.|Las instituciones ignoran las pistas no verbales.]]',
    ],
    0,
    'Non-verbal pragmatics.',
  ],
  [
    'Framing chooses which aspect of an issue becomes salient.',
    'El encuadre (framing) elige qué aspecto de un asunto se vuelve prominente.',
    [
      '[[Salience is partly linguistic packaging.|La prominencia depende en parte del empaquetado lingüístico.]]',
      '[[Frames never affect opinions.|Los marcos nunca influyen en las opiniones.]]',
      '[[All issues are equally salient always.|Todos los asuntos son siempre igual de prominentes.]]',
    ],
    0,
    'Media / cognitive framing.',
  ],
  [
    'Academic English favours nominalisation to pack information densely.',
    'El inglés académico favorece la nominalización para condensar información.',
    [
      '[[Nouns can bundle processes into compact phrases.|Los sustantivos pueden empaquetar procesos en frases compactas.]]',
      '[[Verbs are banned in journals.|Los verbos están prohibidos en revistas.]]',
      '[[Nominalisation always clarifies.|La nominalización siempre aclara.]]',
    ],
    0,
    'Information density.',
  ],
  [
    'Irony depends on shared background; otherwise it misfires.',
    'La ironía depende del conocimiento compartido; si no, fracasa (misfire).',
    [
      '[[Common ground enables layered interpretation.|El terreno común permite interpretación en capas.]]',
      '[[Irony works without context.|La ironía funciona sin contexto.]]',
      '[[Hearers always detect irony.|Los oyentes siempre detectan la ironía.]]',
    ],
    0,
    'Pragmatic presupposition.',
  ],
  [
    'Standard language ideologies often mask class and regional bias.',
    'Las ideologías de la lengua estándar a menudo enmascaran sesgos de clase y región.',
    [
      '[[Prestige norms can stigmatise legitimate varieties.|Las normas de prestigio pueden estigmatizar variedades legítimas.]]',
      '[[All dialects have equal prestige everywhere.|Todos los dialectos tienen igual prestigio en todas partes.]]',
      '[[Standard equals morally superior.|Lo estándar es moralmente superior.]]',
    ],
    0,
    'Sociolinguistic critique.',
  ],
  [
    'Digital genres remix spoken and written norms in hybrid registers.',
    'Los géneros digitales mezclan normas orales y escritas en registros híbridos.',
    [
      '[[New media blur traditional channel boundaries.|Los nuevos medios difuminan fronteras canónicas.]]',
      '[[Online text is identical to letters.|El texto en línea es idéntico a las cartas.]]',
      '[[Registers never change.|Los registros nunca cambian.]]',
    ],
    0,
    'Mediated communication.',
  ],
];

const reading = [];
readQuotes.forEach((row, i) => {
  reading.push(
    exRead(
      `c1-u2-r${i + 1}`,
      'language-reading',
      'Reading',
      R_TITLE,
      INS.read,
      rq(row[0], row[1]),
      row[2],
      row[3],
      row[4]
    )
  );
});

const listenFrames = [
  ['[[Speaker:|Voz / Hablante:]]', '[[The speaker stresses that:|La voz enfatiza que:]]'],
  ['[[Lecturer:|Profesor/a (clase magistral):]]', '[[Main claim:|Tesis principal:]]'],
  ['[[Interviewer:|Entrevistador/a:]]', '[[The interviewee implies:|El entrevistado insinúa que:]]'],
  ['[[Coach:|Coach:]]', '[[The advice focuses on:|El consejo se centra en:]]'],
  ['[[Podcast host:|Presentador/a del podcast:]]', '[[The distinction drawn is:|La distinción trazada es:]]'],
  ['[[Therapist:|Terapeuta:]]', '[[Therapeutic aim:|Objetivo terapéutico:]]'],
  ['[[Debate:|Debate:]]', '[[Speaker suggests:|El hablante sugiere que:]]'],
  ['[[Seminar leader:|Moderador/a del seminario:]]', '[[Pedagogical point:|Punto pedagógico:]]'],
  ['[[Radio:|Radio:]]', '[[Explanation offered:|Explicación ofrecida:]]'],
  ['[[Workshop:|Taller:]]', '[[Key takeaway:|Idea clave:]]'],
  ['[[Lecture:|Conferencia:]]', '[[Implication:|Implicación:]]'],
  ['[[Clip:|Extracto de audio:]]', '[[Mechanism described:|Mecanismo descrito:]]'],
  ['[[Interview:|Entrevista:]]', '[[Core idea:|Idea central:]]'],
  ['[[Panel:|Mesa redonda:]]', '[[Effect highlighted:|Efecto destacado:]]'],
  ['[[Talk:|Charla:]]', '[[Condition emphasised:|Condición enfatizada:]]'],
  ['[[Discussion:|Debate grupal:]]', '[[Nuanced position:|Postura matizada:]]'],
  ['[[Summary:|Resumen:]]', '[[Point summarised:|Idea resumida:]]'],
  ['[[Speaker:|Voz / Hablante:]]', '[[Listener should infer:|El oyente debe inferir:]]'],
];

const listenQuotes = [
  [
    'Clarity beats cleverness when stakes are high.',
    'La claridad vence a la ingeniosidad cuando las apuestas son altas.',
    [
      '[[prioritising intelligibility under pressure|priorizar la inteligibilidad bajo presión]]',
      '[[using obscure jargon|usar jerga oscura]]',
      '[[avoiding all structure|evitar toda estructura]]',
    ],
    0,
    'Pragmatic priority.',
  ],
  [
    'Inversion after negative adverbs flags emphasis, not random word order.',
    'La inversión tras adverbios negativos marca énfasis, no un orden azaroso.',
    [
      '[[stylistic highlighting of the adverb|resaltar el adverbio con fines estilísticos]]',
      '[[a grammar mistake always|siempre un error gramatical]]',
      '[[obsolete in modern English|obsoleto en inglés moderno]]',
    ],
    0,
    'Rhetorical grammar.',
  ],
  [
    'We calibrate formality to audience without losing precision.',
    'Calibramos la formalidad al público sin perder precisión.',
    [
      '[[register sensitivity|sensibilidad al registro]]',
      '[[maximum slang always|máximo argot siempre]]',
      '[[ignoring the audience|ignorar al público]]',
    ],
    0,
    'Audience design.',
  ],
  [
    'Name the communicative goal before choosing the surface form.',
    'Pon nombre al objetivo comunicativo antes de elegir la forma superficial.',
    [
      '[[goal-first planning|planificación primero el objetivo]]',
      '[[random word choice|elección aleatoria de palabras]]',
      '[[avoiding intent altogether|evitar la intención por completo]]',
    ],
    0,
    'Strategic competence.',
  ],
  [
    'Politeness is not dishonesty; it is relational work.',
    'La cortesía no es deshonestidad; es trabajo relacional.',
    [
      '[[managing social rapport|gestionar la afinidad social]]',
      '[[always lying|mentir siempre]]',
      '[[irrelevant in workplaces|irrelevante en el trabajo]]',
    ],
    0,
    'Relational pragmatics.',
  ],
  [
    'Code-switching can signal solidarity or distance in the same meeting.',
    'El cambio de código puede señalar solidaridad o distancia en la misma reunión.',
    [
      '[[contextual indexing of relationships|indexación contextual de relaciones]]',
      '[[random bilingual noise|ruido bilingüe aleatorio]]',
      '[[proof of incompetence|prueba de incompetencia]]',
    ],
    0,
    'Interactional meaning.',
  ],
  [
    'If evidence is thin, hedge; if it is strong, still avoid absolutes in reviews.',
    'Si la evidencia es escasa, matiza; si es sólida, evita aun así los absolutos en revisiones.',
    [
      '[[calibrated epistemic stance|postura epistémica calibrada]]',
      '[[total certainty always|certeza total siempre]]',
      '[[never using verbs|nunca usar verbos]]',
    ],
    0,
    'Academic stance.',
  ],
  [
    'Corpus frequency should inform teaching examples, not replace judgement.',
    'La frecuencia en corpus debe informar los ejemplos pedagógicos, no sustituir el juicio.',
    [
      '[[data-informed but teacher-mediated selection|selección basada en datos pero mediada por el docente]]',
      '[[ignore corpora entirely|ignorar los corpus por completo]]',
      '[[only rare words matter|solo importan palabras raras]]',
    ],
    0,
    'Applied linguistics.',
  ],
  [
    'Listeners repair misunderstanding faster when speakers flag topic shifts.',
    'Los oyentes reparan malentendidos antes si los hablantes señalan cambios de tema.',
    [
      '[[explicit discourse signalling|señalización explícita del discurso]]',
      '[[never changing topics|nunca cambiar de tema]]',
      '[[avoiding all markers|evitar todo marcador]]',
    ],
    0,
    'Conversation management.',
  ],
  [
    'Nominalisation is a tool, not a moral duty; clarity still matters.',
    'La nominalización es una herramienta, no un deber moral; la claridad sigue importando.',
    [
      '[[balance density with reader processing|equilibrar densidad y procesamiento del lector]]',
      '[[nominalise every verb always|nominalizar siempre cada verbo]]',
      '[[ban all nouns|prohibir todos los sustantivos]]',
    ],
    0,
    'Style as choice.',
  ],
  [
    'Translation loss is routine; compensate with pragmatic equivalence.',
    'La pérdida en traducción es habitual; compénsala con equivalencia pragmática.',
    [
      '[[aim for functional fit, not literal match|buscar adecuación funcional, no literal]]',
      '[[copy word-for-word always|copiar palabra por palabra siempre]]',
      '[[ignore the target culture|ignorar la cultura meta]]',
    ],
    0,
    'Translation strategy.',
  ],
  [
    'Irony misfires when common ground is missing.',
    'La ironía fracasa cuando falta terreno común.',
    [
      '[[shared knowledge is a prerequisite|el conocimiento compartido es un requisito]]',
      '[[irony needs no context|la ironía no necesita contexto]]',
      '[[everyone always gets jokes|todo el mundo siempre entiende los chistes]]',
    ],
    0,
    'Pragmatic failure.',
  ],
  [
    'Digital punctuation carries tone; omitting it can sound brusque.',
    'La puntuación digital transmite tono; omitirla puede sonar brusco.',
    [
      '[[graphical cues shape interpersonal reading|las pistas gráficas moldean la lectura interpersonal]]',
      '[[punctuation is meaningless online|la puntuación no significa nada en línea]]',
      '[[only elders use commas|solo los mayores usan comas]]',
    ],
    0,
    'Computer-mediated communication.',
  ],
  [
    'Standard language ideologies erase legitimate variation.',
    'Las ideologías de la lengua estándar borran variación legítima.',
    [
      '[[stigmatised varieties may be fully systematic|las variedades estigmatizadas pueden ser plenamente sistemáticas]]',
      '[[only one dialect is logical|solo un dialecto es lógico]]',
      '[[variation equals error|variación = error]]',
    ],
    0,
    'Sociolinguistic equity.',
  ],
  [
    'So striking was the shift that reviewers demanded a new framework.',
    'Tan llamativo fue el cambio que los revisores exigieron un nuevo marco.',
    [
      '[[inversion emphasising magnitude of change|inversión que enfatiza la magnitud del cambio]]',
      '[[no change occurred|no hubo cambio]]',
      '[[frameworks are forbidden|los marcos están prohibidos]]',
    ],
    0,
    'Tie-in to inversion + rhetoric.',
  ],
  [
    'Framing "costs" versus "investments" steers budget debates.',
    'Enmarcar «costes» frente a «inversiones» orienta los debates presupuestarios.',
    [
      '[[lexical framing steers problem definition|el encuadre léxico orienta la definición del problema]]',
      '[[words never matter in policy|las palabras nunca importan en políticas]]',
      '[[budgets are purely numerical|los presupuestos son solo números]]',
    ],
    0,
    'Critical discourse.',
  ],
  [
    'Bilingual children separate grammars early; mixing is often principled.',
    'Los niños bilingües separan gramáticas pronto; la mezcla suele ser principiada.',
    [
      '[[systematic code-mixing rules|reglas sistemáticas de mezcla]]',
      '[[random confusion always|confusión aleatoria siempre]]',
      '[[one grammar always wins instantly|una gramática siempre gana al instante]]',
    ],
    0,
    'Bilingual acquisition.',
  ],
  [
    'Not until we read the appendix did the ambiguity resolve.',
    'No fue hasta leer el anexo cuando se resolvió la ambigüedad.',
    [
      '[[delayed clarification via later information|aclaración tardía mediante información posterior]]',
      '[[appendices are useless|los anexos no sirven]]',
      '[[ambiguity never resolves|la ambigüedad nunca se resuelve]]',
    ],
    0,
    'Information structure + inversion echo.',
  ],
];

const listening = [];
listenQuotes.forEach((row, i) => {
  const [left, right] = listenFrames[i];
  const q = `${left} \"[[${row[0]}|${row[1]}]]\"\n\n${right}`;
  listening.push(
    exListen(
      `c1-u2-l${i + 1}`,
      'language-listening',
      'Listening',
      L_TITLE,
      INS.listen,
      q,
      row[2],
      row[3],
      row[4]
    )
  );
});

const wRows = [
  [
    'Title: "Global English homogenises thought worldwide." Choose the strongest C1 opening that hedges and narrows the claim.',
    [
      '[[While the spread of English undoubtedly facilitates certain kinds of coordination, the claim that it flattens cognition globally oversimplifies multilingual practices and local reinterpretation.|Matiz + foco en prácticas multilingües]]',
      '[[English is bad.|demasiado simple]]',
      '[[This essay is about English.|demasiado vago]]',
    ],
    0,
    'Hedged thesis aligned to prompt.',
  ],
  [
    'Which sentence best links two contrasted views on prescriptivism?',
    [
      '[[Prescriptive traditions stabilise classroom norms; descriptive evidence, however, shows resilient innovation in everyday usage.|contraste con *however*]]',
      '[[Prescriptivism and descriptivism are things.|sin desarrollo]]',
      '[[Both are wrong.|sin argumentación]]',
    ],
    0,
    'Contrast + connector.',
  ],
  [
    'Pick the most precise academic conclusion on register and power.',
    [
      '[[The analysis suggests that access to prestigious registers can gatekeep institutional participation even when intelligibility is high.|acceso a registros prestigiosos]]',
      '[[Power is bad.|vago]]',
      '[[Register does not exist.|falso]]',
    ],
    0,
    'Dense neutral register.',
  ],
  [
    'Select the best thesis for a problem-solution text on misinformation.',
    [
      '[[Although platform design accelerates sharing, labelling alone is insufficient; complementary media literacy and transparent ranking criteria may reduce harm without stifling speech.|problema + mitigaciones]]',
      '[[Fake news is fake.|tautología]]',
      '[[Social media exists.|irrelevante]]',
    ],
    0,
    'Problem-solution sophistication.',
  ],
  [
    'Which sentence avoids overstated certainty about bilingual advantage?',
    [
      '[[The meta-analytic evidence tentatively supports selective cognitive benefits, though effect sizes vary by task and population.|tentatively supports]]',
      '[[Bilinguals are always smarter.|absoluto]]',
      '[[There is no research.|falso]]',
    ],
    0,
    'Hedging meta-analysis.',
  ],
  [
    'Choose the cohesive paragraph on pragmatic failure.',
    [
      '[[First, misfires arise when felicity conditions fail. Second, repair sequences redistribute blame subtly. Therefore, teaching should model both recognition and redress.|First / Second / Therefore]]',
      '[[Stuff fails. People talk. Done.|sin cohesión]]',
      '[[Pragmatics is fun.|vago]]',
    ],
    0,
    'Signposted reasoning.',
  ],
  [
    'Choose appropriate register for a formal complaint about unclear policy language.',
    [
      '[[The undersigned respectfully request clarification of clause 4.2, whose scope appears underspecified for non-specialist staff.|formal]]',
      '[[Hey, fix your words lol.|informal]]',
      '[[Or else.|amenaza]]',
    ],
    0,
    'Formal request.',
  ],
  [
    'Which reformulation acknowledges Grice without plagiarism?',
    [
      '[[Grice (1975) argued that speakers conventionally cooperate; listeners therefore infer unstated meanings when quality and relation maxims are ostensibly flouted.|atribución + paráfrasis]]',
      '[[Grice said cooperate.|demasiado fino]]',
      '[[Copy-paste Grice.|plagio]]',
    ],
    0,
    'Citation + paraphrase.',
  ],
  [
    'Best topic sentence for a paragraph on face-threatening acts?',
    [
      '[[Even ostensibly neutral requests can threaten negative face when they impinge on autonomy, which explains why mitigation strategies proliferate in institutional email.|tema claro]]',
      '[[Email exists.|irrelevante]]',
      '[[Face is a body part.|literal incorrecto]]',
    ],
    0,
    'Focused analytical topic sentence.',
  ],
  [
    'Select the sentence with effective parallel structure.',
    [
      '[[The study coded directness, coded mitigation and coded relational work across 400 threads.|paralelismo *coded*]]',
      '[[The study coded directness, mitigating and relational.|roto]]',
      '[[Coding happened.|vago]]',
    ],
    0,
    'Parallelism.',
  ],
  [
    'Which transition links theory paragraph to critique?',
    [
      '[[Notwithstanding its elegance, the cooperation principle understates asymmetrical power in gatekept forums.|Notwithstanding + crítica]]',
      '[[Anyway.|informal]]',
      '[[Next.|sin conexión]]',
    ],
    0,
    'Formal counterpoint.',
  ],
  [
    'Choose the best definition-style sentence for *implicature*.',
    [
      '[[Implicature denotes inferred meaning beyond what is strictly said, licensed by contextual assumptions and cooperative expectations.|definición académica]]',
      '[[Implicature is a typo.|absurdo]]',
      '[[Implicature means shouting.|falso]]',
    ],
    0,
    'Formal definition.',
  ],
  [
    'Pick the most natural academic collocation.',
    [
      '[[The findings partially corroborate earlier corpus-based accounts of spoken grammar.|*partially corroborate*]]',
      '[[The findings fully destroy all science.|incoherente]]',
      '[[Findings do things.|vago]]',
    ],
    0,
    'Colligation.',
  ],
  [
    'Which closing moves to implications for syllabus design?',
    [
      '[[These results imply that explicit register awareness tasks could complement traditional grammar drills in advanced EAP courses.|implicación pedagógica]]',
      '[[In conclusion, grammar exists.|vago]]',
      '[[The end.|corto]]',
    ],
    0,
    'Implications.',
  ],
  [
    'Choose the best hedged critique of a qualitative study.',
    [
      '[[The thick description is rich, yet the sampling frame limits generalisation beyond similar urban contexts.|crítica matizada]]',
      '[[Qualitative research is useless.|grosero]]',
      '[[The study is perfect.|sin crítica]]',
    ],
    0,
    'Measured critique.',
  ],
  [
    'Select the sentence that operationalises *register* for readers.',
    [
      '[[For present purposes, we operationalise register as lexico-grammatical choices indexed to situational variables of field, tenor and mode.|operacionalización]]',
      '[[Register means whatever.|vago]]',
      '[[Register is slang.|incorrecto]]',
    ],
    0,
    'Term work.',
  ],
  [
    'Which option shows appropriate citation framing?',
    [
      '[[As Searle (1969) argued, speech acts bundle propositional content with illocutionary force.|marco de cita]]',
      '[[Searle said stuff.|vago]]',
      '[[According to me, Searle is wrong always.|sin evidencia]]',
    ],
    0,
    'Attribution.',
  ],
  [
    'Choose varied syntax for rhetorical effect.',
    [
      '[[The stakes are high; the evidence, nonetheless, remains partial: policy should therefore proceed cautiously.|punto y coma + dos puntos]]',
      '[[The stakes are high and evidence is partial and policy should proceed.|todo y… y…]]',
      '[[High partial proceed.|telegráfico]]',
    ],
    0,
    'Syntactic variety.',
  ],
];

const wTooltipsEs = [
  '«El inglés global homogeneiza el pensamiento en todo el mundo». Elige la apertura C1 más sólida que matice y acote la tesis.',
  '¿Qué oración enlaza mejor dos visiones contrastadas sobre el prescriptivismo?',
  'Elige la conclusión académica más precisa sobre registro y poder.',
  'Selecciona la mejor tesis para un texto problema-solución sobre la desinformación.',
  '¿Qué oración evita afirmar con excesiva seguridad las ventajas cognitivas del bilingüismo?',
  'Elige el párrafo cohesivo sobre el fracaso pragmático.',
  'Elige el registro adecuado para una queja formal sobre lenguaje normativo poco claro.',
  '¿Qué reformulación reconoce a Grice sin plagio?',
  'Mejor oración tématica para un párrafo sobre actos que amenazan la imagen social del interlocutor.',
  'Selecciona la oración con paralelismo eficaz.',
  '¿Qué transición conecta el párrafo teórico con la crítica?',
  'Elige la mejor definición académica de implicatura (*implicature*).',
  'Elige la colocación académica más natural.',
  '¿Qué cierre apunta a implicaciones para el diseño del currículo?',
  'Elige la crítica matizada más adecuada de un estudio cualitativo.',
  'Selecciona la oración que operacionaliza *register* para el lector.',
  '¿Qué opción muestra un marco de cita apropiado?',
  'Elige la opción con variedad sintáctica y efecto retórico.',
];

const writing = [];
wRows.forEach((row, i) => {
  const id = `c1-u2-w${i + 1}`;
  noteEs(id, wTooltipsEs[i]);
  writing.push(
    exWrite(id, 'argumentative-essay', 'Writing', W_TITLE, INS.write, row[0], row[1], row[2], row[3])
  );
});

const sRows = [
  [
    'Concede a point before countering in a seminar on language policy:',
    [
      '[[While I accept that a shared lingua franca eases logistics, I would argue that local languages still anchor legal identity and deserve explicit safeguards.|While I accept… I would argue…]]',
      '[[You know nothing.|agresivo]]',
      '[[OK.|corto]]',
    ],
    0,
    'Concession + counter.',
  ],
  [
    'Soften a strong claim about bilingual education:',
    [
      '[[It would be premature to claim universal cognitive benefits, though several well-designed studies report promising patterns for certain age groups.|hedging en capas]]',
      '[[Bilingual education fixes everything.|absoluto]]',
      '[[Maybe.|demasiado flojo]]',
    ],
    0,
    'Layered hedge.',
  ],
  [
    'Structure a Part 3-style answer on digital communication:',
    [
      '[[I\'d like to tackle this from two angles: first, how punctuation signals tone; second, how async channels reshape turn-taking.|signposting]]',
      '[[I don\'t know.|evasivo]]',
      '[[Phones. Words. Bye.|telegráfico]]',
    ],
    0,
    'Oral architecture.',
  ],
  [
    'Politely disagree with a generalisation about "bad grammar online":',
    [
      '[[I\'m not entirely convinced that informal orthography equals incompetence; much of it indexes peer norms rather than skill deficits.|discrepar con matices]]',
      '[[That is stupid.|grosero]]',
      '[[I agree.|sin posición]]',
    ],
    0,
    'Respectful disagreement.',
  ],
  [
    'Buy time before answering a tricky pragmatic question:',
    [
      '[[That\'s a nuanced issue; if I may, I\'ll outline one example before generalising.|ganar tiempo]]',
      '[[No comment.|cerrado]]',
      '[[Next.|evasivo]]',
    ],
    0,
    'Stalling.',
  ],
  [
    'Emphasise a distinction between meaning and implicature orally:',
    [
      '[[The crucial distinction here is between what was said and what was implied — hearers bridge that gap using context.|crucial distinction]]',
      '[[There is no distinction.|nada]]',
      '[[Implied means loud.|incorrecto]]',
    ],
    0,
    'Concept clarification.',
  ],
  [
    'Summarise an interlocutor\'s view before responding:',
    [
      '[[If I understand you, you\'re saying register is purely lexical. I\'d qualify that: grammar and prosody matter too.|reformular]]',
      '[[You talked.|vago]]',
      '[[Wrong.|sin reformulación]]',
    ],
    0,
    'Active listening.',
  ],
  [
    'Close with a balanced takeaway on standard languages:',
    [
      '[[So, pulling this together, standard norms enable wide communication, yet recognising systematic non-standard varieties remains an equity imperative.|cierre equilibrado]]',
      '[[Whatever.|informal]]',
      '[[I forgot.|evasivo]]',
    ],
    0,
    'Synthesis.',
  ],
  [
    'Ask for clarification in a tutorial on pragmatics:',
    [
      '[[Could you clarify whether you\'re using *implicature* in Grice\'s narrow sense or in a broader neo-Gricean sense?|precisión conceptual]]',
      '[[What?|brusco]]',
      '[[I know everything.|arrogante]]',
    ],
    0,
    'Targeted clarification.',
  ],
  [
    'Express partial agreement on corpus methods:',
    [
      '[[I partly agree: frequency lists help syllabus design, yet they shouldn\'t override pragmatic appropriacy in task design.|acuerdo parcial]]',
      '[[I totally agree and disagree.|incoherente]]',
      '[[No.|cerrado]]',
    ],
    0,
    'Qualified agreement.',
  ],
  [
    'Redirect a hostile question about "correct English":',
    [
      '[[I appreciate the challenge; perhaps we can reframe correctness as appropriacy in context rather than as a single monolithic standard.|reencuadre]]',
      '[[Shut up.|inaceptable]]',
      '[[I refuse.|sin tacto]]',
    ],
    0,
    'Diplomatic redirect.',
  ],
  [
    'Add weight with a formal discourse marker:',
    [
      '[[Moreover, longitudinal classroom data complicate any one-size-fits-all policy on L1 use.|Moreover]]',
      '[[Also stuff.|informal]]',
      '[[And.|débil]]',
    ],
    0,
    'Additive marker.',
  ],
  [
    'Acknowledge limits of your argument orally:',
    [
      '[[I should flag that my examples come chiefly from Western European corpora; wider sampling might shift the picture.|límites explícitos]]',
      '[[My view is perfect.|sin límites]]',
      '[[No limits exist.|falso]]',
    ],
    0,
    'Modesty.',
  ],
  [
    'Invite another speaker to contribute:',
    [
      '[[I\'d be keen to hear whether your classroom data mirror this pattern or push back on it.|invitar]]',
      '[[Talk now or never.|amenaza]]',
      '[[You have nothing to say.|descortés]]',
    ],
    0,
    'Facilitation.',
  ],
  [
    'Respond to a request for examples of face-work:',
    [
      '[[A concrete example would be prefacing a request with an apology minimiser to soften imposition on the hearer\'s time.|ejemplo concreto]]',
      '[[Examples exist.|vago]]',
      '[[No examples.|evasivo]]',
    ],
    0,
    'Illustration.',
  ],
  [
    'Signal building on prior point:',
    [
      '[[Building on that, we might ask how institutional power shapes which mitigators count as polite.|Building on that]]',
      '[[Unrelated: pizza.|tangente]]',
      '[[Forget that.|ruptura]]',
    ],
    0,
    'Linkage.',
  ],
  [
    'Express empathy after a communication breakdown story:',
    [
      '[[I can see why that misreading would feel dismissive, even if the sender intended brevity rather than coldness.|empatía matizada]]',
      '[[Your fault.|dañino]]',
      '[[Feelings don\'t matter.|frío]]',
    ],
    0,
    'Empathy.',
  ],
  [
    'End with a forward-looking question:',
    [
      '[[Where might generative AI tools reshape our norms for authorship and citation in student writing?|pregunta prospectiva]]',
      '[[The end.|cierre seco]]',
      '[[Who cares?|descortés]]',
    ],
    0,
    'Productive close.',
  ],
];

const sTooltipsEs = [
  'Reconoce un punto antes de rebatir en un seminario sobre política lingüística:',
  'Suaviza una afirmación fuerte sobre educación bilingüe:',
  'Estructura una respuesta oral tipo Part 3 sobre comunicación digital:',
  'Discrepa con cortesía de una generalización sobre «mala gramática» en línea:',
  'Gana tiempo antes de responder a una pregunta pragmática difícil:',
  'Enfatiza oralmente la distinción entre significado dicho e implicatura:',
  'Resume la postura del interlocutor antes de responder:',
  'Cierra con una síntesis equilibrada sobre lenguas estándar:',
  'Pide aclaración en un tutorial de pragmática:',
  'Expresa acuerdo parcial sobre métodos de corpus:',
  'Reencauza una pregunta hostil sobre el «inglés correcto»:',
  'Añade peso con un marcador discursivo formal:',
  'Reconoce límites de tu argumento en oral:',
  'Invita a otra persona a intervenir:',
  'Responde pidiendo un ejemplo de trabajo de imagen (*face-work*):',
  'Señala que prolongas el punto anterior:',
  'Muestra empatía tras un relato de malentendido comunicativo:',
  'Termina con una pregunta prospectiva:',
];

const speaking = [];
sRows.forEach((row, i) => {
  const id = `c1-u2-s${i + 1}`;
  noteEs(id, sTooltipsEs[i]);
  speaking.push(exMC(id, 'speaking-debate', 'Speaking', S_TITLE, INS.speak, row[0], row[1], row[2], row[3]));
});

const all = [...grammar, ...vocabulary, ...reading, ...listening, ...writing, ...speaking];

const header = `/**
 * C1 Unit 2 — Language and Communication
 * Módulo 1 (bloque temático): Persona, sociedad y entorno
 * Grammar: Inversion for emphasis
 *
 * Modelo ampliado: 18 ejercicios por lección × 6 lecciones = 108 ítems.
 * Patrón de IDs: c1-u2-g1..g18, v1..v18, r1..r18, l1..l18, w1..w18, s1..s18.
 */

import { Exercise } from '@/lib/exercise-generator';

export const UNIT_TITLE = '[[Language and Communication|Lenguaje y comunicación]]';

export const UNIT_2_EXERCISES: Exercise[] = [
`;

const footer = `
];
`;

fs.writeFileSync(OUT_UNIT, header + all.join(',\n') + footer, 'utf8');

const esKeys = Object.keys(questionEs).sort();
const esBody = esKeys.map((k) => `  ${j(k)}:\n    ${j(questionEs[k])},`).join('\n');

const esFile = `/**
 * Traducción al español (tooltip TranslatedText) — unidad C1 2.
 * Gramática, vocabulario, writing y speaking (reading/listening: [[|]] en unit-2).
 */
export const C1_UNIT2_QUESTION_ES: Record<string, string> = {
${esBody}
};
`;

fs.writeFileSync(OUT_ES, esFile, 'utf8');

console.log('Wrote', OUT_UNIT, '(' + all.length + ' exercises)');
console.log('Wrote', OUT_ES, '(' + esKeys.length + ' ES strings)');
