import { Exercise, Lesson } from '../exercise-types';
import { createC1Unit, genId } from './utils';

const UNIT_ID = 11;

// ============================================
// BLOCK 1: NOMINALIZATION - VERBS TO NOUNS (10 items)
// ============================================
export const C1_U11_BLOCK1: Exercise = {
  id: `c1-u${UNIT_ID}-b1`,
  type: 'grammar',
  title: 'Nominalization: Verbs to Nouns',
  grammarPoint: 'Nominalization',
  explanation: 'Nominalization is the use of a [[noun|sustantivo]] for an action that could be expressed by a [[verb|verbo]]. This makes the [[tone|tono]] more [[formal|formal]] and [[objective|objetivo]].',
  questions: [
    {
      id: genId(UNIT_ID, 'b1', 1),
      type: 'fill-blank',
      question: 'The ___ of the [[results|resultados]] [[revealed|reveló]] several [[anomalies|anomalías]].',
      correctAnswer: 'analysis',
      explanation: '"Analysis" is the noun form of "analyze".',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b1', 2),
      type: 'fill-blank',
      question: 'The ___ of the [[proposal|propuesta]] was [[entirely|enteramente]] [[unexpected|inesperada]].',
      correctAnswer: 'refusal',
      explanation: '"Refusal" is the noun form of "refuse".',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b1', 3),
      type: 'fill-blank',
      question: 'There is an [[urgent|urgente]] [[need|necesidad]] for the ___ of the [[infrastructure|infraestructura]].',
      correctAnswer: 'maintenance',
      explanation: 'Note the spelling [[change|cambio]] in "maintenance".',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b1', 4),
      type: 'fill-blank',
      question: 'Her ___ [[triggered|desencadenó]] a [[series|serie]] of [[resignations|renuncias]].',
      correctAnswer: 'departure',
      explanation: '"Departure" is the noun form of "depart".',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b1', 5),
      type: 'fill-blank',
      question: 'The ___ of the [[government|gobierno]] was [[highly|altamente]] [[controversial|controversial]].',
      correctAnswer: 'interference',
      explanation: '"Interference" is the noun form of "interfere".',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b1', 6),
      type: 'fill-blank',
      question: 'We are [[awaiting|esperando]] ___ of the [[meeting|reunión]] [[date|fecha]].',
      correctAnswer: 'confirmation',
      explanation: 'Noun form: confirmation.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b1', 7),
      type: 'fill-blank',
      question: 'The ___ of the [[negotiations|negociaciones]] [[led|condujo]] to a [[strike|huelga]].',
      correctAnswer: 'failure',
      explanation: '"Failure" is the noun form of "fail".',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b1', 8),
      type: 'fill-blank',
      question: 'His ___ for a [[new|nuevo]] [[system|sistema]] was [[well-received|bien recibida]].',
      correctAnswer: 'proposal',
      explanation: 'Noun form: proposal.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b1', 9),
      type: 'fill-blank',
      question: 'The ___ of such [[events|eventos]] is [[extremely|extremadamente]] [[rare|raro]].',
      correctAnswer: 'occurrence',
      explanation: 'Note the double "r" and "c" in "occurrence".',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b1', 10),
      type: 'fill-blank',
      question: 'A [[thorough|minuciosa]] ___ of the [[documents|documentos]] is [[required|requerida]].',
      correctAnswer: 'examination',
      explanation: 'Noun form: examination.',
      points: 1
    }
  ]
};

// ============================================
// BLOCK 2: NOMINALIZATION - ADJECTIVES TO NOUNS (10 items)
// ============================================
export const C1_U11_BLOCK2: Exercise = {
  id: `c1-u${UNIT_ID}-b2`,
  type: 'grammar',
  title: 'Nominalization: Adjectives to Nouns',
  grammarPoint: 'Nominalization',
  explanation: 'C1 students should be able to transform [[adjectives|adjetivos]] into [[abstract nouns|sustantivos abstractos]] to discuss [[theoretical|teóricos]] concepts.',
  questions: [
    {
      id: genId(UNIT_ID, 'b2', 1),
      type: 'fill-blank',
      question: 'The ___ of the [[market|mercado]] is [[essential|esencial]] for [[investors|inversores]].',
      correctAnswer: 'stability',
      explanation: '"Stability" is the noun form of "stable".',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b2', 2),
      type: 'fill-blank',
      question: 'We must [[consider|considerar]] the ___ of the [[project|proyecto]].',
      correctAnswer: 'feasibility',
      explanation: '"Feasibility" means whether something is [[possible|posible]] to do.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b2', 3),
      type: 'fill-blank',
      question: 'The ___ of [[accidents|accidentes]] has [[decreased|disminuido]].',
      correctAnswer: 'frequency',
      explanation: 'Noun form: frequency.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b2', 4),
      type: 'fill-blank',
      question: 'There is a [[lack|falta]] of ___ of [[fresh|fresca]] [[water|agua]] in the [[region|región]].',
      correctAnswer: 'scarcity',
      explanation: '"Scarcity" is the noun form of "scarce".',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b2', 5),
      type: 'fill-blank',
      question: 'The ___ of his [[research|investigación]] is [[undeniable|innegable]].',
      correctAnswer: 'relevance',
      explanation: 'Noun form: relevance.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b2', 6),
      type: 'fill-blank',
      question: 'I was [[impressed|impresionado]] by the ___ of the [[puzzle|rompecabezas]].',
      correctAnswer: 'complexity',
      explanation: 'Noun form: complexity.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b2', 7),
      type: 'fill-blank',
      question: '___ is a [[trait|rasgo]] highly [[valued|valorado]] in this [[culture|cultura]].',
      correctAnswer: 'Generosity',
      explanation: 'Noun form: generosity.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b2', 8),
      type: 'fill-blank',
      question: 'The ___ of the [[system|sistema]] was [[exposed|expuesta]].',
      correctAnswer: 'vulnerability',
      explanation: 'Noun form: vulnerability.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b2', 9),
      type: 'fill-blank',
      question: 'We need to [[ensure|asegurar]] the ___ of the [[data|datos]].',
      correctAnswer: 'accuracy',
      explanation: '"Accuracy" is the noun form of "accurate".',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b2', 10),
      type: 'fill-blank',
      question: 'The ___ of the [[meeting|reunión]] was [[appreciated|apreciada]].',
      correctAnswer: 'brevity',
      explanation: '"Brevity" is the noun form of "brief".',
      points: 1
    }
  ]
};

// ============================================
// BLOCK 3: ACADEMIC REWRITING (10 items)
// ============================================
export const C1_U11_BLOCK3: Exercise = {
  id: `c1-u${UNIT_ID}-b3`,
  type: 'grammar',
  title: 'Academic Rewriting: Using Nominalization',
  grammarPoint: 'Nominalization',
  explanation: 'Rewrite these [[informal|informales]] sentences using [[nominalized|nominalizadas]] structures to make them more [[academic|académicas]].',
  questions: [
    {
      id: genId(UNIT_ID, 'b3', 1),
      type: 'fill-blank',
      question: 'They analyzed the evidence, which helped them win. (The...) \n The ___ helped them win.',
      correctAnswer: 'analysis of the evidence',
      explanation: 'Nominalizing "analyzed the evidence".',
      points: 2
    },
    {
      id: genId(UNIT_ID, 'b3', 2),
      type: 'fill-blank',
      question: 'We need to decide quickly. (A...) \n A ___ is needed.',
      correctAnswer: 'quick decision',
      explanation: 'Nominalizing "decide quickly".',
      points: 2
    },
    {
      id: genId(UNIT_ID, 'b3', 3),
      type: 'fill-blank',
      question: 'The population is growing, which is a problem. (The...) \n The ___ is a problem.',
      correctAnswer: 'growth of the population',
      explanation: 'Nominalizing "population is growing".',
      points: 2
    },
    {
      id: genId(UNIT_ID, 'b3', 4),
      type: 'fill-blank',
      question: 'The climate changed, which affected the crops. (The...) \n The ___ affected the crops.',
      correctAnswer: 'change in climate',
      explanation: 'Nominalizing "climate changed".',
      points: 2
    },
    {
      id: genId(UNIT_ID, 'b3', 5),
      type: 'fill-blank',
      question: 'He failed to comply with the rules. (His...) \n His ___ caused issues.',
      correctAnswer: 'non-compliance with the rules',
      explanation: '"Non-compliance" is a sophisticated nominalization.',
      points: 2
    },
    {
      id: genId(UNIT_ID, 'b3', 6),
      type: 'fill-blank',
      question: 'Technology has evolved rapidly. (The...) \n The ___ has been remarkable.',
      correctAnswer: 'rapid evolution of technology',
      explanation: 'Nominalizing "technology has evolved rapidly".',
      points: 2
    },
    {
      id: genId(UNIT_ID, 'b3', 7),
      type: 'fill-blank',
      question: 'We discussed the issue at length. (A...) \n A ___ took place.',
      correctAnswer: 'lengthy discussion of the issue',
      explanation: 'Using "lengthy" as an adjective for the nominalized form.',
      points: 2
    },
    {
      id: genId(UNIT_ID, 'b3', 8),
      type: 'fill-blank',
      question: 'The company expanded, creating new jobs. (The...) \n The ___ created new jobs.',
      correctAnswer: 'expansion of the company',
      explanation: 'Nominalizing "company expanded".',
      points: 2
    },
    {
      id: genId(UNIT_ID, 'b3', 9),
      type: 'fill-blank',
      question: 'She responded immediately. (Her...) \n Her ___ was unexpected.',
      correctAnswer: 'immediate response',
      explanation: 'Nominalizing "responded immediately".',
      points: 2
    },
    {
      id: genId(UNIT_ID, 'b3', 10),
      type: 'fill-blank',
      question: 'People are migrating to cities. (The...) \n The ___ is increasing.',
      correctAnswer: 'migration of people to cities',
      explanation: 'Nominalizing "people are migrating".',
      points: 2
    }
  ]
};

// ============================================
// BLOCK 4: ABSTRACT NOUNS IN CONTEXT (10 items)
// ============================================
export const C1_U11_BLOCK4: Exercise = {
  id: `c1-u${UNIT_ID}-b4`,
  type: 'vocabulary',
  title: 'Abstract Nouns in Academic Contexts',
  grammarPoint: 'Vocabulary',
  explanation: 'Choose the most [[appropriate|apropiado]] abstract noun to [[complete|completar]] the [[academic|académico]] sentence.',
  questions: [
    {
      id: genId(UNIT_ID, 'b4', 1),
      type: 'multiple-choice',
      question: 'The ___ of [[scientific|científico]] [[knowledge|conocimiento]] is [[continuous|continuo]].',
      options: ['advancement', 'moving', 'going'],
      correctAnswer: 'advancement',
      explanation: '"Advancement" is a [[formal|formal]] term for [[progress|progreso]].',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b4', 2),
      type: 'multiple-choice',
      question: 'We need to [[evaluate|evaluar]] the ___ of the [[evidence|evidencia]].',
      options: ['validity', 'truth', 'realness'],
      correctAnswer: 'validity',
      explanation: '"Validity" refers to how [[sound|sólida]] or [[legal|legal]] something is.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b4', 3),
      type: 'multiple-choice',
      question: 'The ___ of the [[study|estudio]] was to [[identify|identificar]] [[trends|tendencias]].',
      options: ['objective', 'hope', 'target'],
      correctAnswer: 'objective',
      explanation: '"Objective" is a common academic [[synonym|sinónimo]] for [[goal|meta]].',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b4', 4),
      type: 'multiple-choice',
      question: 'There is a [[clear|clara]] ___ [[between|entre]] the [[two|dos]] [[variables|variables]].',
      options: ['correlation', 'link', 'mix'],
      correctAnswer: 'correlation',
      explanation: '"Correlation" is a [[precise|preciso]] [[statistical|estadístico]] term.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b4', 5),
      type: 'multiple-choice',
      question: 'The ___ of the [[problem|problema]] is [[often|a menudo]] [[overlooked|pasada por alto]].',
      options: ['magnitude', 'size', 'big'],
      correctAnswer: 'magnitude',
      explanation: '"Magnitude" implies [[great|gran]] [[size|tamaño]] or [[importance|importancia]].',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b4', 6),
      type: 'multiple-choice',
      question: 'His ___ to the [[cause|causa]] was [[remarkable|notable]].',
      options: ['commitment', 'trying', 'work'],
      correctAnswer: 'commitment',
      explanation: '"Commitment" is the [[dedication|dedicación]] to something.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b4', 7),
      type: 'multiple-choice',
      question: 'The ___ of the [[negotiations|negociaciones]] remains [[uncertain|incierta]].',
      options: ['outcome', 'end', 'result'],
      correctAnswer: 'outcome',
      explanation: '"Outcome" is a [[formal|formal]] word for [[result|resultado]].',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b4', 8),
      type: 'multiple-choice',
      question: 'There is a [[growing|creciente]] ___ for [[transparency|transparencia]].',
      options: ['requirement', 'need', 'must'],
      correctAnswer: 'requirement',
      explanation: '"Requirement" is more [[formal|formal]] than "need".',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b4', 9),
      type: 'multiple-choice',
      question: 'The ___ of [[human|humanos]] [[rights|derechos]] is [[paramount|primordial]].',
      options: ['preservation', 'keeping', 'saving'],
      correctAnswer: 'preservation',
      explanation: '"Preservation" means keeping something [[safe|seguro]] from [[harm|daño]].',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b4', 10),
      type: 'multiple-choice',
      question: 'The ___ of the [[argument|argumento]] was [[flawed|defectuosa]].',
      options: ['logic', 'thinking', 'way'],
      correctAnswer: 'logic',
      explanation: '"Logic" refers to the [[reasoning|razonamiento]] used.',
      points: 1
    }
  ]
};

// ============================================
// BLOCK 5: ERROR CORRECTION - NOMINALIZATION (10 items)
// ============================================
export const C1_U11_BLOCK5: Exercise = {
  id: `c1-u${UNIT_ID}-b5`,
  type: 'grammar',
  title: 'Error Correction: Abstract Nouns & Nominalization',
  grammarPoint: 'Mixed Review',
  explanation: 'Find the [[mistakes|errores]] in the use of [[noun|sustantivo]] forms and [[academic|académica]] [[phrasing|fraseología]].',
  questions: [
    {
      id: genId(UNIT_ID, 'b5', 1),
      type: 'multiple-choice',
      question: 'The analyzing of the data was very helpful.',
      options: ['analyzing', 'analysis', 'analyzed'],
      correctAnswer: 'analysis',
      explanation: '"Analysis" is the correct noun; "analyzing" is the [[gerund|gerundio]].',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b5', 2),
      type: 'multiple-choice',
      question: 'There is a strong stable in the economy.',
      options: ['stable', 'stability', 'stabilize'],
      correctAnswer: 'stability',
      explanation: 'Need the [[noun|sustantivo]] "stability" after "strong".',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b5', 3),
      type: 'multiple-choice',
      question: 'His refuse to cooperate surprised everyone.',
      options: ['refuse', 'refusal', 'refusing'],
      correctAnswer: 'refusal',
      explanation: 'The noun is "refusal".',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b5', 4),
      type: 'multiple-choice',
      question: 'We need a quick decide on this matter.',
      options: ['decide', 'decision', 'deciding'],
      correctAnswer: 'decision',
      explanation: 'Noun form required: "decision".',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b5', 5),
      type: 'multiple-choice',
      question: 'The evolutioning of species takes millions of years.',
      options: ['evolutioning', 'evolution', 'evolvement'],
      correctAnswer: 'evolution',
      explanation: 'The standard noun is "evolution".',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b5', 6),
      type: 'multiple-choice',
      question: 'I appreciate your generousness.',
      options: ['generousness', 'generosity', 'generous'],
      correctAnswer: 'generosity',
      explanation: 'The correct abstract noun is "generosity".',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b5', 7),
      type: 'multiple-choice',
      question: 'The frequentness of the attacks is increasing.',
      options: ['frequentness', 'frequency', 'frequently'],
      correctAnswer: 'frequency',
      explanation: 'The noun is "frequency".',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b5', 8),
      type: 'multiple-choice',
      question: 'She made a complain about the service.',
      options: ['complain', 'complaint', 'complaining'],
      correctAnswer: 'complaint',
      explanation: '"Complaint" is the noun; "complain" is the verb.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b5', 9),
      type: 'multiple-choice',
      question: 'The accurate of the map is questionable.',
      options: ['accurate', 'accuracy', 'accurateness'],
      correctAnswer: 'accuracy',
      explanation: 'Noun form: "accuracy".',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b5', 10),
      type: 'multiple-choice',
      question: 'There was a fail in the system.',
      options: ['fail', 'failure', 'failing'],
      correctAnswer: 'failure',
      explanation: '"Failure" is the correct noun for a [[breakdown|avería]].',
      points: 1
    }
  ]
};

export const unit11: Lesson = createC1Unit(
  'c1-u11',
  'Abstract Nouns & Nominalization',
  'Elevating your writing style by using abstract nouns and nominalized structures for a professional tone.',
  ['Transform verbs and adjectives into formal nouns', 'Rewrite sentences using academic nominalization', 'Identify and use precise abstract vocabulary'],
  [
    C1_U11_BLOCK1, C1_U11_BLOCK2, C1_U11_BLOCK3, C1_U11_BLOCK4, C1_U11_BLOCK5
  ]
);
