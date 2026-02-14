import { Exercise, Lesson } from '../exercise-types';
import { createC1Unit, genId } from './utils';

const UNIT_ID = 20;

// ============================================
// BLOCK 1: REFLEXIVE & RECIPROCAL PRONOUNS (10 items)
// ============================================
export const C1_U20_BLOCK1: Exercise = {
  id: `c1-u${UNIT_ID}-b1`,
  type: 'grammar',
  title: 'Reflexive & Reciprocal Pronouns',
  grammarPoint: 'Pronouns',
  explanation: 'Advanced English uses [[reflexive pronouns|pronombres reflexivos]] (e.g., "myself", "itself") and [[reciprocal pronouns|pronombres recíprocos]] (e.g., "each other", "one another") with precision.',
  questions: [
    {
      id: genId(UNIT_ID, 'b1', 1),
      type: 'multiple-choice',
      question: 'The [[company|empresa]] [[found|encontró]] ___ in a [[difficult|difícil]] [[position|posición]].',
      options: ['itself', 'themself', 'himself'],
      correctAnswer: 'itself',
      explanation: 'Use "itself" when the [[subject|sujeto]] and [[object|objeto]] are the same.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b1', 2),
      type: 'multiple-choice',
      question: 'They [[helped|ayudaron]] ___ during the [[crisis|crisis]].',
      options: ['one another', 'themselves', 'each other'],
      correctAnswer: 'one another',
      explanation: '"One another" is slightly more [[formal|formal]] than "each other".',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b1', 3),
      type: 'multiple-choice',
      question: 'You should [[pride|enorgullecerse]] ___ on your [[achievements|logros]].',
      options: ['yourself', 'yourselves', 'oneself'],
      correctAnswer: 'yourself',
      explanation: '"Pride oneself on" is a reflexive [[collocation|colocación]].',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b1', 4),
      type: 'multiple-choice',
      question: 'The [[problem|problema]] [[resolved|resolvió]] ___ [[eventually|finalmente]].',
      options: ['itself', 'oneself', 'each other'],
      correctAnswer: 'itself',
      explanation: 'Reflexive used for [[automatic|automáticas]] or [[natural|naturales]] actions.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b1', 5),
      type: 'multiple-choice',
      question: 'We [[reminded|recordamos]] ___ of the [[goal|objetivo]].',
      options: ['ourselves', 'each other', 'one another'],
      correctAnswer: 'ourselves',
      explanation: 'Plural reflexive pronoun.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b1', 6),
      type: 'multiple-choice',
      question: 'They [[blamed|culparon]] [[each|cada]] ___ for the [[failure|fracaso]].',
      options: ['other', 'themselves', 'another'],
      correctAnswer: 'other',
      explanation: '"Each other" for reciprocal [[blame|culpa]].',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b1', 7),
      type: 'multiple-choice',
      question: 'The [[building|edificio]] ___ is not [[old|viejo]], but the [[site|lugar]] is.',
      options: ['itself', 'himself', 'oneself'],
      correctAnswer: 'itself',
      explanation: 'Reflexive used for [[emphasis|énfasis]].',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b1', 8),
      type: 'multiple-choice',
      question: 'She [[taught|enseñó]] ___ how to [[code|programar]].',
      options: ['herself', 'one another', 'each other'],
      correctAnswer: 'herself',
      explanation: '"Teach oneself" means to be [[self-taught|autodidacta]].',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b1', 9),
      type: 'multiple-choice',
      question: 'He [[behaved|comportó]] ___ at the [[party|fiesta]].',
      options: ['himself', 'themself', 'oneself'],
      correctAnswer: 'himself',
      explanation: '"Behave oneself" is a common reflexive phrase.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b1', 10),
      type: 'multiple-choice',
      question: 'The [[two|dos]] [[countries|países]] [[respect|respetan]] ___.',
      options: ['one another', 'themselves', 'each other'],
      correctAnswer: 'one another',
      explanation: 'Reciprocal relationship.',
      points: 1
    }
  ]
};

// ============================================
// BLOCK 2: INDEFINITE PRONOUNS (10 items)
// ============================================
export const C1_U20_BLOCK2: Exercise = {
  id: `c1-u${UNIT_ID}-b2`,
  type: 'vocabulary',
  title: 'Indefinite Pronouns: Nuance & Tone',
  grammarPoint: 'Pronouns',
  explanation: '"[[Indefinite pronouns|Pronombres indefinidos]] (e.g., "anyone", "someone", "no one") change meaning [[subtly|sutilmente]] depending on [[context|contexto]].',
  questions: [
    {
      id: genId(UNIT_ID, 'b2', 1),
      type: 'multiple-choice',
      question: '___ could have [[done|hecho]] it; it was [[easy|fácil]].',
      options: ['Anyone', 'No one', 'Someone'],
      correctAnswer: 'Anyone',
      explanation: '"Anyone" implies it doesn\'t [[matter|importar]] who.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b2', 2),
      type: 'multiple-choice',
      question: '___ [[called|llamó]] while you were [[out|fuera]].',
      options: ['Someone', 'Anyone', 'No one'],
      correctAnswer: 'Someone',
      explanation: '"Someone" refers to a [[specific|específica]] but [[unidentified|no identificada]] person.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b2', 3),
      type: 'multiple-choice',
      question: 'There is ___ we can do [[now|ahora]].',
      options: ['nothing', 'anything', 'something'],
      correctAnswer: 'nothing',
      explanation: '"Nothing" is for [[negative|negativa]] certainty.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b2', 4),
      type: 'multiple-choice',
      question: '___ of the [[staff|personal]] [[were|estaban]] [[informed|informados]].',
      options: ['None', 'No one', 'Nothing'],
      correctAnswer: 'None',
      explanation: '"None" can be used for [[people|personas]] or [[things|cosas]] in a group.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b2', 5),
      type: 'multiple-choice',
      question: 'Does ___ [[know|sabe]] the [[answer|respuesta]]?',
      options: ['anyone', 'someone', 'no one'],
      correctAnswer: 'anyone',
      explanation: 'Use "anyone" in [[questions|preguntas]].',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b2', 6),
      type: 'multiple-choice',
      question: 'I have ___ to [[tell|decir]] you.',
      options: ['something', 'anything', 'nothing'],
      correctAnswer: 'something',
      explanation: '"Something" in [[affirmative|afirmativas]] sentences.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b2', 7),
      type: 'multiple-choice',
      question: '___ [[was|estaba]] [[surprised|sorprendido]].',
      options: ['Everyone', 'Every', 'All'],
      correctAnswer: 'Everyone',
      explanation: '"Everyone" takes a [[singular|singular]] verb.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b2', 8),
      type: 'multiple-choice',
      question: '___ is [[ready|listo]].',
      options: ['Everything', 'Every', 'All'],
      correctAnswer: 'Everything',
      explanation: 'Indefinite pronoun for things.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b2', 9),
      type: 'multiple-choice',
      question: 'I searched [[everywhere|todas partes]], but found ___.',
      options: ['nothing', 'anything', 'something'],
      correctAnswer: 'nothing',
      explanation: 'Negative outcome.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b2', 10),
      type: 'multiple-choice',
      question: 'Is there ___ [[else|más]] [[coming|viniendo]]?',
      options: ['anybody', 'somebody', 'nobody'],
      correctAnswer: 'anybody',
      explanation: '"Anybody" in a question.',
      points: 1
    }
  ]
};

// ============================================
// BLOCK 3: PRONOUNS FOR COHESION (10 items)
// ============================================
export const C1_U20_BLOCK3: Exercise = {
  id: `c1-u${UNIT_ID}-b3`,
  type: 'grammar',
  title: 'Pronouns as Cohesive Devices',
  grammarPoint: 'Pronouns',
  explanation: 'Using [[pronouns|pronombres]] like "this", "that", "it", and "which" to [[refer back|referirse atrás]] to [[whole ideas|ideas completas]].',
  questions: [
    {
      id: genId(UNIT_ID, 'b3', 1),
      type: 'multiple-choice',
      question: 'He [[arrived|llegó]] late, ___ [[annoyed|molestó]] everyone.',
      options: ['which', 'that', 'this'],
      correctAnswer: 'which',
      explanation: '"Which" can refer back to the [[entire|toda]] [[previous|anterior]] clause.',
      points: 2
    },
    {
      id: genId(UNIT_ID, 'b3', 2),
      type: 'multiple-choice',
      question: 'They [[failed|fallaron]] to [[act|actuar]]. ___ [[led|llevó]] to [[disaster|desastre]].',
      options: ['This', 'It', 'That'],
      correctAnswer: 'This',
      explanation: '"This" at the [[start|inicio]] of a sentence refers to the [[previous|anterior]] idea.',
      points: 2
    },
    {
      id: genId(UNIT_ID, 'b3', 3),
      type: 'multiple-choice',
      question: 'I [[saw|vi]] a [[car|coche]] and a [[bike|bici]]; the ___ was [[red|rojo]].',
      options: ['former', 'first', 'later'],
      correctAnswer: 'former',
      explanation: '"The former" refers to the [[first|primero]] of two mentioned items.',
      points: 2
    },
    {
      id: genId(UNIT_ID, 'b3', 4),
      type: 'multiple-choice',
      question: 'I [[saw|vi]] a [[car|coche]] and a [[bike|bici]]; the ___ was [[blue|azul]].',
      options: ['latter', 'second', 'last'],
      correctAnswer: 'latter',
      explanation: '"The latter" refers to the [[second|segundo]] of two mentioned items.',
      points: 2
    },
    {
      id: genId(UNIT_ID, 'b3', 5),
      type: 'multiple-choice',
      question: 'He [[loves|ama]] [[coding|programar]]; ___ is his [[passion|pasión]].',
      options: ['it', 'this', 'that'],
      correctAnswer: 'it',
      explanation: '"It" replaces the [[gerund|gerundio]].',
      points: 2
    },
    {
      id: genId(UNIT_ID, 'b3', 6),
      type: 'multiple-choice',
      question: 'The [[results|resultados]] were [[poor|pobres]]. ___ was the [[impact|impacto]] of the [[storm|tormenta]].',
      options: ['Such', 'That', 'This'],
      correctAnswer: 'Such',
      explanation: '"Such" can refer back to a [[situation|situación]] already [[described|descrita]].',
      points: 2
    },
    {
      id: genId(UNIT_ID, 'b3', 7),
      type: 'multiple-choice',
      question: 'She [[spoke|habló]] [[quickly|rápido]], and ___ did [[he|él]].',
      options: ['so', 'as', 'too'],
      correctAnswer: 'so',
      explanation: '"So" refers back to the [[verb phrase|frase verbal]].',
      points: 2
    },
    {
      id: genId(UNIT_ID, 'b3', 8),
      type: 'multiple-choice',
      question: 'He said he would [[help|ayudar]], but he [[didn\'t|no lo hizo]] do ___.',
      options: ['so', 'it', 'that'],
      correctAnswer: 'so',
      explanation: '"Do so" is a formal way to [[refer back|referirse atrás]] to an action.',
      points: 2
    },
    {
      id: genId(UNIT_ID, 'b3', 9),
      type: 'multiple-choice',
      question: 'The [[manager|gerente]] [[resigned|renunció]], ___ is [[why|por qué]] we are [[hiring|contratando]].',
      options: ['that', 'it', 'this'],
      correctAnswer: 'that',
      explanation: '"That" links a [[cause|causa]] to an [[effect|efecto]].',
      points: 2
    },
    {
      id: genId(UNIT_ID, 'b3', 10),
      type: 'multiple-choice',
      question: 'One should [[always|siempre]] [[respect|respetar]] ___.',
      options: ['oneself', 'themself', 'themselves'],
      correctAnswer: 'oneself',
      explanation: 'Reflexive for the [[impersonal|impersonal]] one".',
      points: 2
    }
  ]
};

// ============================================
// BLOCK 4: RELATIVE PRONOUNS (10 items)
// ============================================
export const C1_U20_BLOCK4: Exercise = {
  id: `c1-u${UNIT_ID}-b4`,
  type: 'grammar',
  title: 'Complex Relative Pronouns',
  grammarPoint: 'Pronouns',
  explanation: 'Using [[relative pronouns|pronombres relativos]] (e.g., "whom", "whose", "whereby") to combine [[clauses|cláusulas]] in formal English.',
  questions: [
    {
      id: genId(UNIT_ID, 'b4', 1),
      type: 'multiple-choice',
      question: 'To ___ should I [[address|dirigir]] the [[letter|carta]]?',
      options: ['whom', 'who', 'whose'],
      correctAnswer: 'whom',
      explanation: 'Use "whom" after a [[preposition|preposición]].',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b4', 2),
      type: 'multiple-choice',
      question: 'The [[woman|mujer]] ___ [[car|coche]] was [[stolen|robado]] is my [[neighbor|vecina]].',
      options: ['whose', 'whom', 'who'],
      correctAnswer: 'whose',
      explanation: '"Whose" expresses [[possession|posesión]].',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b4', 3),
      type: 'multiple-choice',
      question: 'The [[process|proceso]] ___ we [[learn|aprendemos]] is [[complex|complejo]].',
      options: ['whereby', 'wherein', 'wherefore'],
      correctAnswer: 'whereby',
      explanation: '"Whereby" means "by which".',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b4', 4),
      type: 'multiple-choice',
      question: 'The [[reason|razón]] ___ I am [[here|aquí]] is [[secret|secreta]].',
      options: ['why', 'where', 'when'],
      correctAnswer: 'why',
      explanation: '"Why" refers to a reason.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b4', 5),
      type: 'multiple-choice',
      question: 'The [[town|pueblo]] ___ I was [[born|nacido]] is [[small|pequeño]].',
      options: ['where', 'which', 'that'],
      correctAnswer: 'where',
      explanation: '"Where" refers to a [[place|lugar]].',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b4', 6),
      type: 'multiple-choice',
      question: 'The [[time|momento]] ___ he [[arrived|llegó]] was [[midnight|medianoche]].',
      options: ['when', 'where', 'which'],
      correctAnswer: 'when',
      explanation: '"When" refers to a [[time|tiempo]].',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b4', 7),
      type: 'multiple-choice',
      question: 'He is the [[man|hombre]] ___ [[won|ganó]].',
      options: ['who', 'whom', 'which'],
      correctAnswer: 'who',
      explanation: '"Who" as the [[subject|sujeto]].',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b4', 8),
      type: 'multiple-choice',
      question: 'They [[offered|ofrecieron]] two [[options|opciones]], [[neither|ninguna]] of ___ was [[suitable|adecuada]].',
      options: ['which', 'whom', 'that'],
      correctAnswer: 'which',
      explanation: 'Use "which" for things after a [[prepositional phrase|frase preposicional]].',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b4', 9),
      type: 'multiple-choice',
      question: 'I met several [[people|personas]], [[one|una]] of ___ was a [[doctor|médico]].',
      options: ['whom', 'who', 'which'],
      correctAnswer: 'whom',
      explanation: 'Use "whom" for people after a [[prepositional phrase|frase preposicional]].',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b4', 10),
      type: 'multiple-choice',
      question: 'The [[book|libro]] ___ I [[read|leí]] was [[fascinating|fascinante]].',
      options: ['that', 'who', 'whom'],
      correctAnswer: 'that',
      explanation: '"That" for things in [[defining|definitorias]] clauses.',
      points: 1
    }
  ]
};

// ============================================
// BLOCK 5: ERROR CORRECTION - PRONOUNS (10 items)
// ============================================
export const C1_U20_BLOCK5: Exercise = {
  id: `c1-u${UNIT_ID}-b5`,
  type: 'grammar',
  title: 'Error Correction: Reference & Pronouns',
  grammarPoint: 'Mixed Review',
  explanation: 'Identify the [[incorrect|incorrecto]] pronoun or [[reference|referencia]] in each [[sentence|oración]].',
  questions: [
    {
      id: genId(UNIT_ID, 'b5', 1),
      type: 'multiple-choice',
      question: 'They blamed themselves to each other.',
      options: ['each other', 'themselves to', 'one another'],
      correctAnswer: 'each other',
      explanation: 'Reciprocal blame doesn\'t use "themselves to".',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b5', 2),
      type: 'multiple-choice',
      question: 'He is the man who I met yesterday.',
      options: ['whom', 'who', 'which'],
      correctAnswer: 'whom',
      explanation: '"Whom" is formal when the pronoun is the [[object|objeto]].',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b5', 3),
      type: 'multiple-choice',
      question: 'Everyone are here now.',
      options: ['is', 'are', 'were'],
      correctAnswer: 'is',
      explanation: '"Everyone" is singular.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b5', 4),
      type: 'multiple-choice',
      question: 'The car, who was red, was expensive.',
      options: ['which', 'who', 'whom'],
      correctAnswer: 'which',
      explanation: '"Which" for things in [[non-defining|no definitorias]] clauses.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b5', 5),
      type: 'multiple-choice',
      question: 'She taught to herself how to swim.',
      options: ['taught', 'taught to', 'learned'],
      correctAnswer: 'taught',
      explanation: '"Teach oneself" (reflexive) does not take "to".',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b5', 6),
      type: 'multiple-choice',
      question: 'I saw two movies; the last was better.',
      options: ['the latter', 'the last', 'the former'],
      correctAnswer: 'the latter',
      explanation: 'Use "the latter" for the [[second|segundo]] of [[two|dos]].',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b5', 7),
      type: 'multiple-choice',
      question: 'Is there somebody who can help?',
      options: ['anybody', 'somebody', 'nobody'],
      correctAnswer: 'anybody',
      explanation: '"Anybody" is more natural in a [[general|general]] question.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b5', 8),
      type: 'multiple-choice',
      question: 'The company lost their reputation.',
      options: ['its', 'their', 'his'],
      correctAnswer: 'its',
      explanation: '"Company" is singular/neutral.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b5', 9),
      type: 'multiple-choice',
      question: 'He is the person that his car was stolen.',
      options: ['whose', 'that his', 'whom'],
      correctAnswer: 'whose',
      explanation: 'Use "whose" for possession.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b5', 10),
      type: 'multiple-choice',
      question: 'We should pride ourselves for the work.',
      options: ['ourselves on', 'ourselves for', 'ourselves with'],
      correctAnswer: 'ourselves on',
      explanation: '"Pride oneself on" is the correct [[prepositional|preposicional]] phrase.',
      points: 1
    }
  ]
};

export const unit20: Lesson = createC1Unit(
  'c1-u20',
  'Advanced Pronouns & Reference',
  'Polishing your use of reflexive, reciprocal, and relative pronouns for cohesion and formal writing.',
  ['Use reflexive and reciprocal pronouns accurately', 'Apply pronouns as cohesive devices in formal text', 'Use complex relative pronouns like whom and whereby'],
  [
    C1_U20_BLOCK1, C1_U20_BLOCK2, C1_U20_BLOCK3, C1_U20_BLOCK4, C1_U20_BLOCK5
  ]
);
