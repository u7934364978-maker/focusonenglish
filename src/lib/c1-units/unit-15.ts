import { Exercise } from '../exercise-types';
import { createC1Unit, genId } from './utils';

const UNIT_ID = 15;

// ============================================
// BLOCK 1: SUBORDINATING CONJUNCTIONS (10 items)
// ============================================
export const C1_U15_BLOCK1: Exercise = {
  id: `c1-u${UNIT_ID}-b1`,
  type: 'grammar',
  title: 'Subordinating Conjunctions: Beyond "Because"',
  grammarPoint: 'Conjunctions',
  explanation: 'Advanced English uses specific "[[conjunctions|conjunciones]] like "inasmuch as", "provided that", and "whereas" to show "[[precise|precisas]] "[[relationships|relaciones]] between clauses.',
  questions: [
    {
      id: genId(UNIT_ID, 'b1', 1),
      type: 'multiple-choice',
      question: '___ some "[[people|personas]] "[[prefer|prefieren]] "[[city|ciudad]] life, others "[[crave|anhelan]] the "[[quiet|tranquilidad]] of the "[[countryside|campo]].',
      options: ['Whereas', 'Because', 'Unless'],
      correctAnswer: 'Whereas',
      explanation: '"Whereas" is used to "[[contrast|contrastar]] two "[[facts|hechos]].',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b1', 2),
      type: 'multiple-choice',
      question: 'The "[[project|proyecto]] will "[[succeed|tener éxito]] ___ that "[[everyone|todos]] "[[cooperates|cooperan]].',
      options: ['unless', 'provided', 'whether'],
      correctAnswer: 'provided',
      explanation: '"Provided that" means "only if".',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b1', 3),
      type: 'multiple-choice',
      question: '___ as the "[[deadline|fecha límite]] is "[[approaching|acercándose]], we should "[[start|empezar]] now.',
      options: ['Inasmuch', 'Besides', 'Albeit'],
      correctAnswer: 'Inasmuch',
      explanation: '"Inasmuch as" is a formal way to say "[[since|ya que]] or "[[because|porque]].',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b1', 4),
      type: 'multiple-choice',
      question: 'You can "[[borrow|tomar prestado]] the "[[car|coche]] so ___ as you "[[refuel|repostas]].',
      options: ['long', 'far', 'soon'],
      correctAnswer: 'long',
      explanation: '"So long as" is a "[[synonym|sinónimo]] for "as long as".',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b1', 5),
      type: 'multiple-choice',
      question: '___ anyone should "[[forget|olvide]], the "[[meeting|reunión]] is at 9 AM.',
      options: ['Lest', 'Until', 'Since'],
      correctAnswer: 'Lest',
      explanation: '"Lest" is used to "[[prevent|prevenir]] something "[[negative|negativo]].',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b1', 6),
      type: 'multiple-choice',
      question: 'We will "[[go|ir]] ___ it "[[rains|llueve]] or "[[shines|hace sol]].',
      options: ['whether', 'if', 'either'],
      correctAnswer: 'whether',
      explanation: '"Whether... or" expresses "[[alternatives|alternativas]].',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b1', 7),
      type: 'multiple-choice',
      question: 'The "[[bill|ley]] was "[[passed|aprobada]], ___ with some "[[minor|menores]] "[[amendments|enmiendas]].',
      options: ['albeit', 'besides', 'despite'],
      correctAnswer: 'albeit',
      explanation: '"Albeit" means "[[even though|aunque]].',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b1', 8),
      type: 'multiple-choice',
      question: '___ as you are "[[here|aquí]], you might as well "[[help|ayudar]].',
      options: ['Seeing', 'Knowing', 'Since'],
      correctAnswer: 'Seeing',
      explanation: '"Seeing as" is an "[[informal|informal]] "[[causal|causal]] "[[connector|conector]].',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b1', 9),
      type: 'multiple-choice',
      question: '___ that the "[[elections|elecciones]] are "[[over|terminadas]], we can "[[focus|enfocarnos]] on "[[work|trabajo]].',
      options: ['Now', 'Since', 'Then'],
      correctAnswer: 'Now',
      explanation: '"Now that" "[[indicates|indica]] a "[[change|cambio]] in "[[situation|situación]].',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b1', 10),
      type: 'multiple-choice',
      question: '___ the fact that he was "[[tired|cansado]], he "[[finished|terminó]].',
      options: ['Notwithstanding', 'Although', 'Despite'],
      correctAnswer: 'Notwithstanding',
      explanation: '"Notwithstanding the fact that" is a formal "[[concession|concesión]].',
      points: 1
    }
  ]
};

// ============================================
// BLOCK 2: CORRELATIVE CONJUNCTIONS (10 items)
// ============================================
export const C1_U15_BLOCK2: Exercise = {
  id: `c1-u${UNIT_ID}-b2`,
  type: 'vocabulary',
  title: 'Correlative Conjunctions & Balanced Sentences',
  grammarPoint: 'Conjunctions',
  explanation: '"[[Correlative conjunctions|Conjunciones correlativas]] (e.g., "neither... nor", "not only... but also") require "[[parallel structure|estructura paralela]].',
  questions: [
    {
      id: genId(UNIT_ID, 'b2', 1),
      type: 'multiple-choice',
      question: '___ only did he "[[miss|perder]] the "[[train|tren]], but he "[[also|también]] "[[lost|perdió]] his "[[wallet|cartera]].',
      options: ['Not', 'No', 'Never'],
      correctAnswer: 'Not',
      explanation: '"Not only... but also" is a standard correlative pair.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b2', 2),
      type: 'multiple-choice',
      question: '"[[Neither|Ni]] the "[[manager|gerente]] ___ the "[[employees|empleados]] were "[[happy|felices]].',
      options: ['nor', 'or', 'neither'],
      correctAnswer: 'nor',
      explanation: '"Neither" always pairs with "nor".',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b2', 3),
      type: 'multiple-choice',
      question: 'It was ___ such a "[[good|buena]] "[[offer|oferta]] "[[that|que]] I couldn\'t "[[refuse|rechazar]] it.',
      options: ['such', 'so', 'very'],
      correctAnswer: 'such',
      explanation: '"Such + noun + that" is used for "[[emphasis|énfasis]].',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b2', 4),
      type: 'multiple-choice',
      question: 'You can ___ stay "[[here|aquí]] or "[[come|venir]] with "[[us|nosotros]].',
      options: ['either', 'neither', 'both'],
      correctAnswer: 'either',
      explanation: '"Either" pairs with "or".',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b2', 5),
      type: 'multiple-choice',
      question: 'No "[[sooner|más pronto]] had I "[[arrived|llegado]] ___ the "[[phone|teléfono]] "[[rang|sonó]].',
      options: ['than', 'then', 'when'],
      correctAnswer: 'than',
      explanation: '"No sooner" always pairs with "than".',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b2', 6),
      type: 'multiple-choice',
      question: '"[[Hardly|Apenas]] had he "[[started|comenzado]] ___ he was "[[interrupted|interrumpido]].',
      options: ['when', 'than', 'then'],
      correctAnswer: 'when',
      explanation: '"Hardly" pairs with "when".',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b2', 7),
      type: 'multiple-choice',
      question: '___ he "[[wins|gana]] or "[[loses|pierde]], he always "[[learns|aprende]] something.',
      options: ['Whether', 'If', 'Either'],
      correctAnswer: 'Whether',
      explanation: '"Whether... or" for "[[alternatives|alternativas]].',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b2', 8),
      type: 'multiple-choice',
      question: 'The "[[task|tarea]] was "[[both|ambas]] "[[difficult|difícil]] ___ "[[time-consuming|lenta]].',
      options: ['and', 'but', 'also'],
      correctAnswer: 'and',
      explanation: '"Both" pairs with "and".',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b2', 9),
      type: 'multiple-choice',
      question: 'Scarcely had the "[[movie|película]] "[[begun|comenzado]] ___ the "[[power|luz]] "[[went out|se fue]].',
      options: ['when', 'than', 'then'],
      correctAnswer: 'when',
      explanation: '"Scarcely" pairs with "when".',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b2', 10),
      type: 'multiple-choice',
      question: 'He is "[[not|no]] so much "[[lazy|perezoso]] ___ "[[unmotivated|desmotivado]].',
      options: ['as', 'than', 'but'],
      correctAnswer: 'as',
      explanation: '"Not so much... as" is a complex "[[comparative|comparativa]] structure.',
      points: 1
    }
  ]
};

// ============================================
// BLOCK 3: ADVERBIAL CONNECTORS (10 items)
// ============================================
export const C1_U15_BLOCK3: Exercise = {
  id: `c1-u${UNIT_ID}-b3`,
  type: 'vocabulary',
  title: 'Sentence Adverbs & Logical Flow',
  grammarPoint: 'Connectors',
  explanation: 'Sentence "[[adverbs|adverbios]] (e.g., "consequently", "subsequently", "moreover") create "[[cohesion|cohesión]] between "[[sentences|oraciones]].',
  questions: [
    {
      id: genId(UNIT_ID, 'b3', 1),
      type: 'multiple-choice',
      question: 'The "[[company|empresa]] is "[[expanding|expandiéndose]]. ___, it "[[needs|necesita]] more "[[staff|personal]].',
      options: ['Consequently', 'However', 'Nevertheless'],
      correctAnswer: 'Consequently',
      explanation: '"Consequently" shows a "[[result|resultado]].',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b3', 2),
      type: 'multiple-choice',
      question: 'The "[[plan|plan]] is "[[risky|arriesgado]]. ___, it is our only "[[option|opción]].',
      options: ['Furthermore', 'Nevertheless', 'Moreover'],
      correctAnswer: 'Nevertheless',
      explanation: '"Nevertheless" shows "[[concession|concesión]].',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b3', 3),
      type: 'multiple-choice',
      question: 'He "[[missed|perdió]] the "[[deadline|fecha límite]]. ___, his "[[work|trabajo]] was "[[sloppy|descuidado]].',
      options: ['Moreover', 'Conversely', 'Otherwise'],
      correctAnswer: 'Moreover',
      explanation: '"Moreover" adds "[[information|información]].',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b3', 4),
      type: 'multiple-choice',
      question: 'You must "[[pay|pagar]] the "[[fine|multa]]. ___, you will go to "[[court|juicio]].',
      options: ['Otherwise', 'Instead', 'Thus'],
      correctAnswer: 'Otherwise',
      explanation: '"Otherwise" shows the "[[consequence|consecuencia]] of not "[[acting|actuar]].',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b3', 5),
      type: 'multiple-choice',
      question: 'The "[[first|primera]] phase is complete. ___, we will "[[test|probar]] the "[[system|sistema]].',
      options: ['Subsequently', 'Previously', 'Conversely'],
      correctAnswer: 'Subsequently',
      explanation: '"Subsequently" means "[[afterward|después]].',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b3', 6),
      type: 'multiple-choice',
      question: 'Some "[[believe|creen]] in "[[capitalism|capitalismo]]. ___, others "[[advocate|abogan]] for "[[socialism|socialismo]].',
      options: ['Conversely', 'Likewise', 'Furthermore'],
      correctAnswer: 'Conversely',
      explanation: '"Conversely" shows an "[[opposite|opuesto]] "[[viewpoint|punto de vista]].',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b3', 7),
      type: 'multiple-choice',
      question: 'The "[[prices|precios]] "[[dropped|bajaron]], and ___ "[[demand|demanda]] "[[increased|aumentó]].',
      options: ['thus', 'otherwise', 'instead'],
      correctAnswer: 'thus',
      explanation: '"Thus" means "in this way" or "therefore".',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b3', 8),
      type: 'multiple-choice',
      question: 'I don\'t want to go. ___, I am too "[[tired|cansada]].',
      options: ['Besides', 'Despite', 'Unlike'],
      correctAnswer: 'Besides',
      explanation: '"Besides" adds a "[[stronger|más fuerte]] "[[reason|razón]].',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b3', 9),
      type: 'multiple-choice',
      question: 'She "[[studied|estudió]] "[[hard|mucho]]. ___, she "[[passed|pasó]] with "[[flying|voladores]] "[[colors|colores]].',
      options: ['Hence', 'Yet', 'Still'],
      correctAnswer: 'Hence',
      explanation: '"Hence" is a formal "[[synonym|sinónimo]] for "therefore".',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b3', 10),
      type: 'multiple-choice',
      question: 'The "[[weather|tiempo]] was "[[bad|malo]], ___ we "[[enjoyed|disfrutamos]] the "[[trip|viaje]].',
      options: ['yet', 'so', 'for'],
      correctAnswer: 'yet',
      explanation: '"Yet" shows "[[unexpected|inesperado]] contrast.',
      points: 1
    }
  ]
};

// ============================================
// BLOCK 4: REWRITING FOR COHESION (10 items)
// ============================================
export const C1_U15_BLOCK4: Exercise = {
  id: `c1-u${UNIT_ID}-b4`,
  type: 'grammar',
  title: 'Rewriting for Cohesion',
  grammarPoint: 'Mixed Review',
  explanation: 'Combine or rewrite "[[sentences|oraciones]] using the "[[connectors|conectores]] in "[[parentheses|paréntesis]].',
  questions: [
    {
      id: genId(UNIT_ID, 'b4', 1),
      type: 'multiple-choice',
      question: 'He was rich. He was unhappy. (ALBEIT) \n He was happy, ___ unhappy.',
      options: ['however', 'although', 'albeit'],
      correctAnswer: 'albeit',
      explanation: '"Albeit" is used for "[[concessive|concesivos]] "[[adjectives|adjetivos]].',
      points: 2
    },
    {
      id: genId(UNIT_ID, 'b4', 2),
      type: 'multiple-choice',
      question: 'I will go if you go. (PROVIDED) \n I will go ___ you go.',
      options: ['providing that', 'only if', 'provided that'],
      correctAnswer: 'provided that',
      explanation: '"Provided that" expresses a "[[condition|condición]].',
      points: 2
    },
    {
      id: genId(UNIT_ID, 'b4', 3),
      type: 'multiple-choice',
      question: 'He didn\'t just sing; he danced too. (ONLY) \n Not ___ he sing, but he also danced.',
      options: ['only', 'just', 'only did'],
      correctAnswer: 'only did',
      explanation: '"Not only" at the "[[beginning|principio]] triggers "[[inversion|inversión]].',
      points: 2
    },
    {
      id: genId(UNIT_ID, 'b4', 4),
      type: 'multiple-choice',
      question: 'Although it was late, they continued. (NOTWITHSTANDING) \n It was late; ___ , they continued.',
      options: ['however', 'still', 'notwithstanding'],
      correctAnswer: 'notwithstanding',
      explanation: '"Notwithstanding" as a "[[sentence|oracional]] "[[adverb|adverbio]].',
      points: 2
    },
    {
      id: genId(UNIT_ID, 'b4', 5),
      type: 'multiple-choice',
      question: 'Since you are here, help me. (SEEING) \n ___ you are here, help me.',
      options: ['Seeing that', 'Since', 'Seeing as'],
      correctAnswer: 'Seeing as',
      explanation: 'Informal "[[causal|causal]] phrase.',
      points: 2
    },
    {
      id: genId(UNIT_ID, 'b4', 6),
      type: 'multiple-choice',
      question: 'If you don\'t hurry, you\'ll miss it. (OTHERWISE) \n Hurry up; ___ you\'ll miss it.',
      options: ['or else', 'lest', 'otherwise'],
      correctAnswer: 'otherwise',
      explanation: '"Otherwise" replaces an "[[if-clause|cláusula con si]].',
      points: 2
    },
    {
      id: genId(UNIT_ID, 'b4', 7),
      type: 'multiple-choice',
      question: 'He is a doctor. His wife is a lawyer. (WHEREAS) \n He is a doctor, ___ his wife is a lawyer.',
      options: ['while', 'but', 'whereas'],
      correctAnswer: 'whereas',
      explanation: '"Whereas" for "[[balanced|equilibrado]] contrast.',
      points: 2
    },
    {
      id: genId(UNIT_ID, 'b4', 8),
      type: 'multiple-choice',
      question: 'She was so tired she fell asleep. (THAT) \n Such was her ___ she fell asleep.',
      options: ['tiredness', 'being tired', 'tiredness that'],
      correctAnswer: 'tiredness that',
      explanation: 'Using "[[nominalization|nominalización]] with "such... that".',
      points: 2
    },
    {
      id: genId(UNIT_ID, 'b4', 9),
      type: 'multiple-choice',
      question: 'He arrived. Then the news broke. (NO SOONER) \n No ___ he arrived than the news broke.',
      options: ['sooner', 'hardly', 'sooner had'],
      correctAnswer: 'sooner had',
      explanation: '"No sooner" requires "[[auxiliary|auxiliar]] inversion.',
      points: 2
    },
    {
      id: genId(UNIT_ID, 'b4', 10),
      type: 'multiple-choice',
      question: 'We shouldn\'t yell. Someone might hear. (LEST) \n We shouldn\'t yell ___ someone hear.',
      options: ['for fear that', 'so that', 'lest'],
      correctAnswer: 'lest',
      explanation: '"Lest" is followed by a "[[subjunctive|subjuntivo]] or "should".',
      points: 2
    }
  ]
};

// ============================================
// BLOCK 5: UNIT 15 REVIEW (10 items)
// ============================================
export const C1_U15_BLOCK5: Exercise = {
  id: `c1-u${UNIT_ID}-b5`,
  type: 'grammar',
  title: 'Unit 15 Review',
  grammarPoint: 'Mixed Connectors',
  explanation: 'Final check of Unit 15 "[[concepts|conceptos]].',
  questions: [
    {
      id: genId(UNIT_ID, 'b5', 1),
      type: 'multiple-choice',
      question: 'The "[[test|examen]] was "[[passed|pasado]], ___ with difficulty.',
      options: ['besides', 'yet', 'albeit'],
      correctAnswer: 'albeit',
      explanation: 'Concession within a clause.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b5', 2),
      type: 'multiple-choice',
      question: '___ only did he "[[fail|fallar]], but he "[[also|también]] "[[lied|mintió]].',
      options: ['No', 'Never', 'Not'],
      correctAnswer: 'Not',
      explanation: 'Correlative pair start.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b5', 3),
      type: 'multiple-choice',
      question: 'We will "[[start|empezar]] ___ as you "[[arrive|llegues]].',
      options: ['soon', 'provided', 'as soon'],
      correctAnswer: 'as soon',
      explanation: 'Time conjunction.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b5', 4),
      type: 'multiple-choice',
      question: 'The "[[results|resultados]] were "[[poor|pobres]]. ___, the "[[budget|presupuesto]] was "[[cut|cortado]].',
      options: ['However', 'Yet', 'Consequently'],
      correctAnswer: 'Consequently',
      explanation: 'Result connector.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b5', 5),
      type: 'multiple-choice',
      question: '___ anyone should "[[ask|pregunte]], I am in a "[[meeting|reunión]].',
      options: ['Since', 'If', 'Lest'],
      correctAnswer: 'Lest',
      explanation: 'Preventative conjunction.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b5', 6),
      type: 'multiple-choice',
      question: 'He is "[[not|no]] so much "[[smart|listo]] ___ "[[lucky|afortunado]].',
      options: ['than', 'but', 'as'],
      correctAnswer: 'as',
      explanation: 'Comparative balance.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b5', 7),
      type: 'multiple-choice',
      question: 'You must "[[leave|irte]]. ___, you will be "[[late|tarde]].',
      options: ['Thus', 'Moreover', 'Otherwise'],
      correctAnswer: 'Otherwise',
      explanation: 'Conditional consequence.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b5', 8),
      type: 'multiple-choice',
      question: '"[[Neither|Ni]] "[[this|este]] ___ "[[that|ese]] is "[[correct|correcto]].',
      options: ['or', 'neither', 'nor'],
      correctAnswer: 'nor',
      explanation: 'Negative pair.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b5', 9),
      type: 'multiple-choice',
      question: '___ as the "[[rain|lluvia]] "[[stopped|paró]], we went "[[out|fuera]].',
      options: ['Now', 'Since', 'Seeing'],
      correctAnswer: 'Seeing',
      explanation: 'Causal phrase.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b5', 10),
      type: 'multiple-choice',
      question: 'No "[[sooner|más pronto]] had we "[[sat|sentado]] ___ the "[[bell|campana]] "[[rang|sonó]].',
      options: ['when', 'then', 'than'],
      correctAnswer: 'than',
      explanation: 'Inversion pair.',
      points: 1
    }
  ]
};

export const unit15 = createC1Unit(
  'c1-u15',
  'Advanced Conjunctions & Cohesion',
  'Elevate your writing and speaking by mastering complex subordinating and correlative conjunctions for better logical flow.',
  ['Utilize advanced subordinating conjunctions for precise relationships', 'Apply correlative conjunctions with proper parallel structure', 'Use sentence adverbs to enhance cohesion and transition between ideas'],
  [
    C1_U15_BLOCK1, C1_U15_BLOCK2, C1_U15_BLOCK3, C1_U15_BLOCK4, C1_U15_BLOCK5
  ]
);
