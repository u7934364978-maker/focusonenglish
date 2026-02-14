import { Exercise } from '../exercise-types';
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
      type: 'multiple-choice',
      question: 'The ___ of the [[results|resultados]] [[revealed|reveló]] several [[anomalies|anomalías]].',
      options: ['analyze', 'analyzing', 'analysis'],
      correctAnswer: 'analysis',
      explanation: '"Analysis" is the noun form of "analyze".',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b1', 2),
      type: 'multiple-choice',
      question: 'The ___ of the [[proposal|propuesta]] was [[entirely|enteramente]] [[unexpected|inesperada]].',
      options: ['refuse', 'refusing', 'refusal'],
      correctAnswer: 'refusal',
      explanation: '"Refusal" is the noun form of "refuse".',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b1', 3),
      type: 'multiple-choice',
      question: 'There is an [[urgent|urgente]] [[need|necesidad]] for the ___ of the [[infrastructure|infraestructura]].',
      options: ['maintenance', 'maintaining', 'maintainance'],
      correctAnswer: 'maintenance',
      explanation: 'Note the spelling [[change|cambio]] in "maintenance".',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b1', 4),
      type: 'multiple-choice',
      question: 'Her ___ [[triggered|desencadenó]] a [[series|serie]] of [[resignations|renuncias]].',
      options: ['depart', 'departing', 'departure'],
      correctAnswer: 'departure',
      explanation: '"Departure" is the noun form of "depart".',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b1', 5),
      type: 'multiple-choice',
      question: 'The ___ of the [[government|gobierno]] was [[highly|altamente]] [[controversial|controversial]].',
      options: ['interfere', 'interference', 'interfering'],
      correctAnswer: 'interference',
      explanation: '"Interference" is the noun form of "interfere".',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b1', 6),
      type: 'multiple-choice',
      question: 'We are [[awaiting|esperando]] ___ of the [[meeting|reunión]] [[date|fecha]].',
      options: ['confirming', 'confirmation', 'confirm'],
      correctAnswer: 'confirmation',
      explanation: 'Noun form: confirmation.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b1', 7),
      type: 'multiple-choice',
      question: 'The ___ of the [[negotiations|negociaciones]] [[led|condujo]] to a [[strike|huelga]].',
      options: ['fail', 'failure', 'failing'],
      correctAnswer: 'failure',
      explanation: '"Failure" is the noun form of "fail".',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b1', 8),
      type: 'multiple-choice',
      question: 'His ___ for a [[new|nuevo]] [[system|sistema]] was [[well-received|bien recibida]].',
      options: ['propose', 'proposal', 'proposing'],
      correctAnswer: 'proposal',
      explanation: 'Noun form: proposal.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b1', 9),
      type: 'multiple-choice',
      question: 'The ___ of such [[events|eventos]] is [[extremely|extremadamente]] [[rare|raro]].',
      options: ['occurrence', 'occurance', 'occurring'],
      correctAnswer: 'occurrence',
      explanation: 'Note the double "r" and "c" in "occurrence".',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b1', 10),
      type: 'multiple-choice',
      question: 'A [[thorough|minuciosa]] ___ of the [[documents|documentos]] is [[required|requerida]].',
      options: ['examine', 'examination', 'examining'],
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
      type: 'multiple-choice',
      question: 'The ___ of the [[market|mercado]] is [[essential|esencial]] for [[investors|inversores]].',
      options: ['stable', 'stability', 'stably'],
      correctAnswer: 'stability',
      explanation: '"Stability" is the noun form of "stable".',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b2', 2),
      type: 'multiple-choice',
      question: 'We must [[consider|considerar]] the ___ of the [[project|proyecto]].',
      options: ['feasible', 'feasibly', 'feasibility'],
      correctAnswer: 'feasibility',
      explanation: '"Feasibility" means whether something is [[possible|posible]] to do.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b2', 3),
      type: 'multiple-choice',
      question: 'The ___ of [[accidents|accidentes]] has [[decreased|disminuido]].',
      options: ['frequent', 'frequency', 'frequently'],
      correctAnswer: 'frequency',
      explanation: 'Noun form: frequency.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b2', 4),
      type: 'multiple-choice',
      question: 'There is a [[lack|falta]] of ___ of [[fresh|fresca]] [[water|agua]] in the [[region|región]].',
      options: ['scarce', 'scarcity', 'scarcely'],
      correctAnswer: 'scarcity',
      explanation: '"Scarcity" is the noun form of "scarce".',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b2', 5),
      type: 'multiple-choice',
      question: 'The ___ of his [[research|investigación]] is [[undeniable|innegable]].',
      options: ['relevant', 'relevance', 'relevantly'],
      correctAnswer: 'relevance',
      explanation: 'Noun form: relevance.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b2', 6),
      type: 'multiple-choice',
      question: 'I was [[impressed|impresionado]] by the ___ of the [[puzzle|rompecabezas]].',
      options: ['complex', 'complexly', 'complexity'],
      correctAnswer: 'complexity',
      explanation: 'Noun form: complexity.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b2', 7),
      type: 'multiple-choice',
      question: '___ is a [[trait|rasgo]] highly [[valued|valorado]] in this [[culture|cultura]].',
      options: ['Generous', 'generosity', 'Generously'],
      correctAnswer: 'generosity',
      explanation: 'Noun form: generosity.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b2', 8),
      type: 'multiple-choice',
      question: 'The ___ of the [[system|sistema]] was [[exposed|expuesta]].',
      options: ['vulnerable', 'vulnerability', 'vulnerably'],
      correctAnswer: 'vulnerability',
      explanation: 'Noun form: vulnerability.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b2', 9),
      type: 'multiple-choice',
      question: 'We need to [[ensure|asegurar]] the ___ of the [[data|datos]].',
      options: ['accurate', 'accuracy', 'accurately'],
      correctAnswer: 'accuracy',
      explanation: '"Accuracy" is the noun form of "accurate".',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b2', 10),
      type: 'multiple-choice',
      question: 'The ___ of the [[meeting|reunión]] was [[appreciated|apreciada]].',
      options: ['brief', 'briefly', 'brevity'],
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
      type: 'multiple-choice',
      question: 'They analyzed the evidence, which helped them win. (The...) \n The ___ helped them win.',
      options: ['analyzing of the evidence', 'analyzed evidence', 'analysis of the evidence'],
      correctAnswer: 'analysis of the evidence',
      explanation: 'Nominalizing "analyzed the evidence".',
      points: 2
    },
    {
      id: genId(UNIT_ID, 'b3', 2),
      type: 'multiple-choice',
      question: 'We need to decide quickly. (A...) \n A ___ is needed.',
      options: ['quickly decision', 'quick decision', 'deciding quickly'],
      correctAnswer: 'quick decision',
      explanation: 'Nominalizing "decide quickly".',
      points: 2
    },
    {
      id: genId(UNIT_ID, 'b3', 3),
      type: 'multiple-choice',
      question: 'The population is growing, which is a problem. (The...) \n The ___ is a problem.',
      options: ['population growing', 'growth of the population', 'growing of the population'],
      correctAnswer: 'growth of the population',
      explanation: 'Nominalizing "population is growing".',
      points: 2
    },
    {
      id: genId(UNIT_ID, 'b3', 4),
      type: 'multiple-choice',
      question: 'The climate changed, which affected the crops. (The...) \n The ___ affected the crops.',
      options: ['climate change', 'change in climate', 'changing in climate'],
      correctAnswer: 'change in climate',
      explanation: 'Nominalizing "climate changed".',
      points: 2
    },
    {
      id: genId(UNIT_ID, 'b3', 5),
      type: 'multiple-choice',
      question: 'He failed to comply with the rules. (His...) \n His ___ caused issues.',
      options: ['not complying with the rules', 'non-compliance with the rules', 'failure to comply'],
      correctAnswer: 'non-compliance with the rules',
      explanation: '"Non-compliance" is a sophisticated nominalization.',
      points: 2
    },
    {
      id: genId(UNIT_ID, 'b3', 6),
      type: 'multiple-choice',
      question: 'Technology has evolved rapidly. (The...) \n The ___ has been remarkable.',
      options: ['technology rapid evolution', 'rapid evolution of technology', 'evolving technology rapidly'],
      correctAnswer: 'rapid evolution of technology',
      explanation: 'Nominalizing "technology has evolved rapidly".',
      points: 2
    },
    {
      id: genId(UNIT_ID, 'b3', 7),
      type: 'multiple-choice',
      question: 'We discussed the issue at length. (A...) \n A ___ took place.',
      options: ['length discussion', 'lengthy discussion of the issue', 'discussing the issue at length'],
      correctAnswer: 'lengthy discussion of the issue',
      explanation: 'Using "lengthy" as an adjective for the nominalized form.',
      points: 2
    },
    {
      id: genId(UNIT_ID, 'b3', 8),
      type: 'multiple-choice',
      question: 'The company expanded, creating new jobs. (The...) \n The ___ created new jobs.',
      options: ['company expansion', 'expansion of the company', 'expanding company'],
      correctAnswer: 'expansion of the company',
      explanation: 'Nominalizing "company expanded".',
      points: 2
    },
    {
      id: genId(UNIT_ID, 'b3', 9),
      type: 'multiple-choice',
      question: 'She responded immediately. (Her...) \n Her ___ was unexpected.',
      options: ['immediately response', 'immediate response', 'responding immediately'],
      correctAnswer: 'immediate response',
      explanation: 'Nominalizing "responded immediately".',
      points: 2
    },
    {
      id: genId(UNIT_ID, 'b3', 10),
      type: 'multiple-choice',
      question: 'People are migrating to cities. (The...) \n The ___ is increasing.',
      options: ['migration of people to cities', 'people migration', 'migrating people to cities'],
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
      options: ['moving', 'going', 'advancement'],
      correctAnswer: 'advancement',
      explanation: '"Advancement" is a [[formal|formal]] term for [[progress|progreso]].',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b4', 2),
      type: 'multiple-choice',
      question: 'We need to [[evaluate|evaluar]] the ___ of the [[evidence|evidencia]].',
      options: ['truth', 'realness', 'validity'],
      correctAnswer: 'validity',
      explanation: '"Validity" refers to how [[sound|sólida]] or [[legal|legal]] something is.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b4', 3),
      type: 'multiple-choice',
      question: 'The ___ of the [[study|estudio]] was to [[identify|identificar]] [[trends|tendencias]].',
      options: ['hope', 'target', 'objective'],
      correctAnswer: 'objective',
      explanation: '"Objective" is a common academic [[synonym|sinónimo]] for [[goal|meta]].',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b4', 4),
      type: 'multiple-choice',
      question: 'There is a [[clear|clara]] ___ [[between|entre]] the [[two|dos]] [[variables|variables]].',
      options: ['link', 'mix', 'correlation'],
      correctAnswer: 'correlation',
      explanation: '"Correlation" is a [[precise|preciso]] [[statistical|estadístico]] term.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b4', 5),
      type: 'multiple-choice',
      question: 'The ___ of the [[problem|problema]] is [[often|a menudo]] [[overlooked|pasada por alto]].',
      options: ['size', 'big', 'magnitude'],
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
      options: ['end', 'outcome', 'result'],
      correctAnswer: 'outcome',
      explanation: '"Outcome" is a [[formal|formal]] word for [[result|resultado]].',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b4', 8),
      type: 'multiple-choice',
      question: 'There is a [[growing|creciente]] ___ for [[transparency|transparencia]].',
      options: ['need', 'requirement', 'must'],
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
      explanation: '"Preservation" is a formal term for [[protection|protección]].',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b4', 10),
      type: 'multiple-choice',
      question: 'The ___ [[among|entre]] the [[members|miembros]] was [[unanimous|unánime]].',
      options: ['meeting', 'consensus', 'agree'],
      correctAnswer: 'consensus',
      explanation: '"Consensus" means general [[agreement|acuerdo]].',
      points: 1
    }
  ]
};

// ============================================
// BLOCK 5: NOMINALIZATION PRACTICE (10 items)
// ============================================
export const C1_U11_BLOCK5: Exercise = {
  id: `c1-u${UNIT_ID}-b5`,
  type: 'grammar',
  title: 'Unit 11 Review',
  grammarPoint: 'Nominalization',
  explanation: 'Final check of Unit 11 [[concepts|conceptos]].',
  questions: [
    {
      id: genId(UNIT_ID, 'b5', 1),
      type: 'multiple-choice',
      question: 'The ___ of [[new|nueva]] [[technology|tecnología]] is [[vital|vital]].',
      options: ['adopt', 'adopting', 'adoption'],
      correctAnswer: 'adoption',
      explanation: 'Noun form: adoption.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b5', 2),
      type: 'multiple-choice',
      question: 'There is no ___ [[between|entre]] the [[two|dos]] [[theories|teorías]].',
      options: ['contradict', 'contradicting', 'contradiction'],
      correctAnswer: 'contradiction',
      explanation: 'Noun form: contradiction.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b5', 3),
      type: 'multiple-choice',
      question: 'The ___ of [[resources|recursos]] is [[necessary|necesario]].',
      options: ['allocate', 'allocating', 'allocation'],
      correctAnswer: 'allocation',
      explanation: 'Noun form: allocation.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b5', 4),
      type: 'multiple-choice',
      question: 'We are [[looking|buscando]] for ___ of [[effectiveness|efectividad]].',
      options: ['evident', 'evidently', 'evidence'],
      correctAnswer: 'evidence',
      explanation: 'Noun form: evidence.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b5', 5),
      type: 'multiple-choice',
      question: 'The ___ of the [[report|informe]] was [[demanded|exigida]].',
      options: ['publish', 'publishing', 'publication'],
      correctAnswer: 'publication',
      explanation: 'Noun form: publication.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b5', 6),
      type: 'multiple-choice',
      question: '___ of the [[law|ley]] is [[required|requerida]].',
      options: ['Observe', 'Observing', 'Observance'],
      correctAnswer: 'Observance',
      explanation: 'Noun form: observance.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b5', 7),
      type: 'multiple-choice',
      question: 'The ___ of [[energy|energía]] is a [[priority|prioridad]].',
      options: ['conserve', 'conserving', 'conservation'],
      correctAnswer: 'conservation',
      explanation: 'Noun form: conservation.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b5', 8),
      type: 'multiple-choice',
      question: 'Her ___ of the [[topic|tema]] was [[profound|profunda]].',
      options: ['understand', 'understood', 'understanding'],
      correctAnswer: 'understanding',
      explanation: 'Gerund acting as a noun.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b5', 9),
      type: 'multiple-choice',
      question: 'The ___ of the [[policy|política]] was [[criticized|criticada]].',
      options: ['implement', 'implementing', 'implementation'],
      correctAnswer: 'implementation',
      explanation: 'Noun form: implementation.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b5', 10),
      type: 'multiple-choice',
      question: 'A ___ of [[options|opciones]] was [[presented|presentada]].',
      options: ['various', 'vary', 'variety'],
      correctAnswer: 'variety',
      explanation: 'Noun form: variety.',
      points: 1
    }
  ]
};

export const unit11 = createC1Unit(
  'c1-u11',
  'Nominalization & Academic Style',
  'Learn to transform verbs and adjectives into nouns to create a more formal, objective, and academic tone.',
  ['Convert verbs and adjectives into abstract nouns', 'Rewrite informal sentences using nominalized structures', 'Apply advanced abstract vocabulary in formal contexts'],
  [
    C1_U11_BLOCK1, C1_U11_BLOCK2, C1_U11_BLOCK3, C1_U11_BLOCK4, C1_U11_BLOCK5
  ]
);
