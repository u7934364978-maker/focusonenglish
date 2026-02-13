import { Exercise, Lesson } from '../exercise-types';
import { createC1Unit, genId } from './utils';

const UNIT_ID = 8;

// ============================================
// BLOCK 1: ADVANCED RELATIVE CLAUSES (10 items)
// ============================================
export const C1_U8_BLOCK1: Exercise = {
  id: `c1-u${UNIT_ID}-b1`,
  type: 'grammar',
  title: 'Advanced Relative Clauses',
  grammarPoint: 'Relative Clauses',
  explanation: 'C1 learners must master [[prepositions|preposiciones]] in relative clauses (e.g., "the person to whom...") and [[non-defining|explicativas]] clauses that refer to entire [[sentences|oraciones]].',
  questions: [
    {
      id: genId(UNIT_ID, 'b1', 1),
      type: 'fill-blank',
      question: 'The [[committee|comité]], many members of ___ were [[absent|ausentes]], failed to [[reach|alcanzar]] a [[decision|decisión]].',
      correctAnswer: 'whom',
      explanation: 'Use "whom" after a [[preposition|preposición]] for [[people|personas]].',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b1', 2),
      type: 'fill-blank',
      question: 'He [[arrived|llegó]] late for the [[interview|entrevista]], ___ [[made|hizo]] a very [[poor|pobre]] [[impression|impresión]].',
      correctAnswer: 'which',
      explanation: 'Use "which" to refer back to the entire previous [[clause|cláusula]].',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b1', 3),
      type: 'fill-blank',
      question: 'The [[platform|plataforma]] on ___ the [[candidate|candidato]] stood was quite [[radical|radical]].',
      correctAnswer: 'which',
      explanation: 'Formal relative clause with [[preposition|preposición]] + [[which|cual]].',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b1', 4),
      type: 'fill-blank',
      question: 'There are [[several|varios]] [[theories|teorías]], none of ___ can be [[proven|probada]].',
      correctAnswer: 'which',
      explanation: '"None of which" is used for [[things|cosas]] in [[formal|formal]] contexts.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b1', 5),
      type: 'fill-blank',
      question: 'The [[company|empresa]] is [[expanding|expandiéndose]], ___ is [[great|gran]] [[news|noticias]] for the [[employees|empleados]].',
      correctAnswer: 'which',
      explanation: '"Which" acts as a [[connector|conector]] for a following [[comment|comentario]].',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b1', 6),
      type: 'fill-blank',
      question: 'I have [[two|dos]] [[brothers|hermanos]], both of ___ [[live|viven]] [[abroad|en el extranjero]].',
      correctAnswer: 'whom',
      explanation: '"Both of whom" is the correct [[quantifier|cuantificador]] structure for people.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b1', 7),
      type: 'fill-blank',
      question: 'The [[building|edificio]], the [[roof|techo]] of ___ was [[damaged|dañado]], is being [[repaired|reparado]].',
      correctAnswer: 'which',
      explanation: 'Alternative to "whose" for [[objects|objetos]] in formal style.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b1', 8),
      type: 'fill-blank',
      question: 'That is the [[reason|razón]] ___ I [[decided|decidí]] to [[leave|irme]].',
      correctAnswer: 'why',
      explanation: 'Relative [[adverb|adverbio]] of [[reason|razón]].',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b1', 9),
      type: 'fill-blank',
      question: 'We [[met|conocimos]] a [[traveler|viajero]], [[whose|cuyo]] [[goal|objetivo]] was to [[visit|visitar]] every [[country|país]].',
      correctAnswer: 'whose',
      explanation: 'Possessive relative pronoun.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b1', 10),
      type: 'fill-blank',
      question: 'The [[moment|momento]] ___ I saw her, I knew [[everything|todo]] would be [[fine|bien]].',
      correctAnswer: 'when',
      explanation: 'Relative adverb of [[time|tiempo]].',
      points: 1
    }
  ]
};

// ============================================
// BLOCK 2: NOMINALIZATION (10 items)
// ============================================
export const C1_U8_BLOCK2: Exercise = {
  id: `c1-u${UNIT_ID}-b2`,
  type: 'grammar',
  title: 'Nominalization: Turning Verbs into Nouns',
  grammarPoint: 'Nominalization',
  explanation: 'Nominalization involves using [[nouns|sustantivos]] instead of [[verbs|verbos]]. This makes your writing more [[academic|académico]] and [[concise|conciso]].',
  questions: [
    {
      id: genId(UNIT_ID, 'b2', 1),
      type: 'multiple-choice',
      question: 'Instead of saying "We analyzed the data", use: The ___ of the data was [[thorough|minucioso]].',
      options: ['analysis', 'analyzing', 'analyze'],
      correctAnswer: 'analysis',
      explanation: '"Analysis" is the [[noun|sustantivo]] form of "analyze".',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b2', 2),
      type: 'multiple-choice',
      question: 'Instead of "They failed because they didn\'t prepare", use: Their lack of ___ led to [[failure|fracaso]].',
      options: ['preparation', 'prepare', 'preparedness'],
      correctAnswer: 'preparation',
      explanation: '"Preparation" is the nominalized form.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b2', 3),
      type: 'multiple-choice',
      question: 'Instead of "The climate is changing rapidly", use: The rapid ___ in climate is [[concerning|preocupante]].',
      options: ['change', 'changing', 'changed'],
      correctAnswer: 'change',
      explanation: '"Change" can function as both a verb and a noun.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b2', 4),
      type: 'multiple-choice',
      question: 'Instead of "They discovered a new species", use: The ___ of a new species was [[groundbreaking|revolucionario]].',
      options: ['discovery', 'discovering', 'discover'],
      correctAnswer: 'discovery',
      explanation: '"Discovery" is the noun form.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b2', 5),
      type: 'multiple-choice',
      question: 'Instead of "She responded immediately", use: Her ___ was [[instantaneous|instantánea]].',
      options: ['response', 'respond', 'responding'],
      correctAnswer: 'response',
      explanation: '"Response" is the nominalized version of "respond".',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b2', 6),
      type: 'multiple-choice',
      question: 'Instead of "They implemented the policy", use: The ___ of the policy took [[months|meses]].',
      options: ['implementation', 'implement', 'implementing'],
      correctAnswer: 'implementation',
      explanation: 'Noun form: implementation.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b2', 7),
      type: 'multiple-choice',
      question: 'Instead of "The population increased", use: There was a [[significant|significativo]] ___ in population.',
      options: ['increase', 'increasing', 'increased'],
      correctAnswer: 'increase',
      explanation: '"Increase" is the noun.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b2', 8),
      type: 'multiple-choice',
      question: 'Instead of "We must protect the environment", use: Environmental ___ is [[crucial|crucial]].',
      options: ['protection', 'protect', 'protecting'],
      correctAnswer: 'protection',
      explanation: 'Noun form: protection.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b2', 9),
      type: 'multiple-choice',
      question: 'Instead of "They rejected the offer", use: The ___ of the offer was [[unexpected|inesperado]].',
      options: ['rejection', 'reject', 'rejecting'],
      correctAnswer: 'rejection',
      explanation: 'Noun form: rejection.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b2', 10),
      type: 'multiple-choice',
      question: 'Instead of "He succeeded in his mission", use: His ___ was due to [[perseverance|perseverancia]].',
      options: ['success', 'succeed', 'succeeding'],
      correctAnswer: 'success',
      explanation: '"Success" is the noun form of "succeed".',
      points: 1
    }
  ]
};

// ============================================
// BLOCK 3: REDUCED RELATIVE CLAUSES (10 items)
// ============================================
export const C1_U8_BLOCK3: Exercise = {
  id: `c1-u${UNIT_ID}-b3`,
  type: 'grammar',
  title: 'Reduced Relative Clauses',
  grammarPoint: 'Relative Clauses',
  explanation: 'You can [[shorten|acortar]] relative clauses by removing the [[pronoun|pronombre]] and the verb "to be", using [[participles|participios]] instead.',
  questions: [
    {
      id: genId(UNIT_ID, 'b3', 1),
      type: 'fill-blank',
      question: 'The [[painting|pintura]], ___ (paint) by Picasso, is worth [[millions|millones]].',
      correctAnswer: 'painted',
      explanation: 'Reduced [[passive|pasiva]] relative clause using a [[past participle|participio pasado]].',
      points: 2
    },
    {
      id: genId(UNIT_ID, 'b3', 2),
      type: 'fill-blank',
      question: 'Anyone ___ (wish) to leave may do so now.',
      correctAnswer: 'wishing',
      explanation: 'Reduced [[active|activa]] relative clause using a [[present participle|participio presente]].',
      points: 2
    },
    {
      id: genId(UNIT_ID, 'b3', 3),
      type: 'fill-blank',
      question: 'The [[book|libro]] ___ (lie) on the table is mine.',
      correctAnswer: 'lying',
      explanation: 'Reduced active clause.',
      points: 2
    },
    {
      id: genId(UNIT_ID, 'b3', 4),
      type: 'fill-blank',
      question: 'The [[cars|coches]] ___ (produce) in this [[factory|fábrica]] are [[exported|exportados]].',
      correctAnswer: 'produced',
      explanation: 'Reduced passive clause.',
      points: 2
    },
    {
      id: genId(UNIT_ID, 'b3', 5),
      type: 'fill-blank',
      question: 'A [[man|hombre]] ___ (call) Smith [[phoned|llamó]] earlier.',
      correctAnswer: 'called',
      explanation: 'Reduced passive: "who is called" -> "called".',
      points: 2
    },
    {
      id: genId(UNIT_ID, 'b3', 6),
      type: 'fill-blank',
      question: 'The [[results|resultados]] ___ (obtain) from the [[study|estudio]] were [[surprising|sorprendentes]].',
      correctAnswer: 'obtained',
      explanation: 'Reduced passive clause.',
      points: 2
    },
    {
      id: genId(UNIT_ID, 'b3', 7),
      type: 'fill-blank',
      question: '[[Houses|Casas]] ___ (build) of wood are [[common|comunes]] here.',
      correctAnswer: 'built',
      explanation: 'Reduced passive relative clause.',
      points: 2
    },
    {
      id: genId(UNIT_ID, 'b3', 8),
      type: 'fill-blank',
      question: 'People ___ (live) in glass [[houses|casas]] shouldn\'t [[throw|tirar]] [[stones|piedras]].',
      correctAnswer: 'living',
      explanation: 'Reduced active relative clause.',
      points: 2
    },
    {
      id: genId(UNIT_ID, 'b3', 9),
      type: 'fill-blank',
      question: 'The [[man|hombre]] ___ (wait) outside is my [[uncle|tío]].',
      correctAnswer: 'waiting',
      explanation: 'Reduced active clause: "who is waiting" -> "waiting".',
      points: 2
    },
    {
      id: genId(UNIT_ID, 'b3', 10),
      type: 'fill-blank',
      question: 'The [[law|ley]] ___ (pass) yesterday will [[change|cambiar]] [[everything|todo]].',
      correctAnswer: 'passed',
      explanation: 'Reduced passive clause.',
      points: 2
    }
  ]
};

// ============================================
// BLOCK 4: ACADEMIC VOCABULARY - NOMINALIZED (10 items)
// ============================================
export const C1_U8_BLOCK4: Exercise = {
  id: `c1-u${UNIT_ID}-b4`,
  type: 'vocabulary',
  title: 'Nominalization in Context',
  grammarPoint: 'Vocabulary',
  explanation: 'Choose the most [[appropriate|apropiado]] nominalized form to [[enhance|mejorar]] the [[formality|formalidad]] of the text.',
  questions: [
    {
      id: genId(UNIT_ID, 'b4', 1),
      type: 'multiple-choice',
      question: 'The ___ of the new [[software|software]] was [[flawless|impecable]].',
      options: ['installation', 'installing', 'install'],
      correctAnswer: 'installation',
      explanation: 'Noun: installation.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b4', 2),
      type: 'multiple-choice',
      question: 'There is a [[growing|creciente]] ___ on [[renewable|renovable]] [[energy|energía]].',
      options: ['reliance', 'rely', 'relying'],
      correctAnswer: 'reliance',
      explanation: '"Reliance" is the noun from "rely".',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b4', 3),
      type: 'multiple-choice',
      question: 'The ___ of [[human|humanos]] [[rights|derechos]] is a [[global|global]] [[issue|problema]].',
      options: ['violation', 'violating', 'violate'],
      correctAnswer: 'violation',
      explanation: 'Noun: violation.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b4', 4),
      type: 'multiple-choice',
      question: 'Her ___ to the [[cause|causa]] was [[unwavering|inquebrantable]].',
      options: ['commitment', 'commit', 'committing'],
      correctAnswer: 'commitment',
      explanation: 'Noun: commitment.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b4', 5),
      type: 'multiple-choice',
      question: 'The ___ of [[wealth|riqueza]] is very [[uneven|desigual]].',
      options: ['distribution', 'distribute', 'distributing'],
      correctAnswer: 'distribution',
      explanation: 'Noun: distribution.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b4', 6),
      type: 'multiple-choice',
      question: '___ in the [[experiment|experimento]] is [[voluntary|voluntaria]].',
      options: ['Participation', 'Participating', 'Participate'],
      correctAnswer: 'Participation',
      explanation: 'Noun: participation.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b4', 7),
      type: 'multiple-choice',
      question: 'The ___ of the [[evidence|evidencia]] was [[questioned|cuestionada]].',
      options: ['validity', 'valid', 'validate'],
      correctAnswer: 'validity',
      explanation: '"Validity" is the noun form of "valid".',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b4', 8),
      type: 'multiple-choice',
      question: 'There was a [[sudden|repentino]] ___ in the [[stock|acciones]] [[market|mercado]].',
      options: ['fluctuation', 'fluctuate', 'fluctuating'],
      correctAnswer: 'fluctuation',
      explanation: 'Noun: fluctuation.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b4', 9),
      type: 'multiple-choice',
      question: 'The ___ of the [[task|tarea]] took [[all|todo]] day.',
      options: ['completion', 'complete', 'completing'],
      correctAnswer: 'completion',
      explanation: 'Noun: completion.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b4', 10),
      type: 'multiple-choice',
      question: 'His ___ of the [[subject|tema]] was [[impressive|impresionante]].',
      options: ['knowledge', 'know', 'knowing'],
      correctAnswer: 'knowledge',
      explanation: 'Noun: knowledge.',
      points: 1
    }
  ]
};

// ============================================
// BLOCK 5: ERROR CORRECTION - RELATIVE CLAUSES (10 items)
// ============================================
export const C1_U8_BLOCK5: Exercise = {
  id: `c1-u${UNIT_ID}-b5`,
  type: 'grammar',
  title: 'Error Correction: Advanced Structures',
  grammarPoint: 'Mixed Review',
  explanation: 'Identify the [[incorrect|incorrecto]] usage of [[relative|relativos]] or [[nominalized|nominalizadas]] forms.',
  questions: [
    {
      id: genId(UNIT_ID, 'b5', 1),
      type: 'multiple-choice',
      question: 'The man that I gave the book to him is my friend.',
      options: ['to him', 'to', 'for him'],
      correctAnswer: 'to',
      explanation: 'Don\'t use a [[redundant|redundante]] pronoun in a relative clause.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b5', 2),
      type: 'multiple-choice',
      question: 'The company is failing, that is a shame.',
      options: ['that', 'which', 'what'],
      correctAnswer: 'which',
      explanation: 'Use "which" for [[comment|comentario]] relative clauses.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b5', 3),
      type: 'multiple-choice',
      question: 'The people which live there are friendly.',
      options: ['which', 'who', 'whose'],
      correctAnswer: 'who',
      explanation: 'Use "who" for [[people|personas]].',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b5', 4),
      type: 'multiple-choice',
      question: 'She analyzed the data with great carefulness.',
      options: ['carefulness', 'care', 'carefully'],
      correctAnswer: 'care',
      explanation: '"Care" is more [[natural|natural]] and [[concise|conciso]] here.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b5', 5),
      type: 'multiple-choice',
      question: 'The house in that I live is very old.',
      options: ['that', 'which', 'where'],
      correctAnswer: 'which',
      explanation: 'Use "which" after a [[preposition|preposición]].',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b5', 6),
      type: 'multiple-choice',
      question: 'I have many friends, some of which are doctors.',
      options: ['which', 'whom', 'who'],
      correctAnswer: 'whom',
      explanation: 'Use "whom" for people after a [[quantifier|cuantificador]].',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b5', 7),
      type: 'multiple-choice',
      question: 'The car producing in Germany is expensive.',
      options: ['producing', 'produced', 'produce'],
      correctAnswer: 'produced',
      explanation: 'Use the [[past participle|participio pasado]] for [[passive|pasiva]] meaning.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b5', 8),
      type: 'multiple-choice',
      question: 'He failed to give an explain for his absence.',
      options: ['explain', 'explanation', 'explaining'],
      correctAnswer: 'explanation',
      explanation: 'Need the [[noun|sustantivo]] form.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b5', 9),
      type: 'multiple-choice',
      question: 'The day what we met was rainy.',
      options: ['what', 'when', 'which'],
      correctAnswer: 'when',
      explanation: 'Relative adverb for [[time|tiempo]].',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b5', 10),
      type: 'multiple-choice',
      question: 'I saw a man whose his car was broken.',
      options: ['whose his', 'whose', 'who his'],
      correctAnswer: 'whose',
      explanation: 'Relative "whose" replaces the [[possessive|posesivo]].',
      points: 1
    }
  ]
};

export const unit8: Lesson = createC1Unit(
  'c1-u8',
  'Advanced Relative Clauses & Nominalization',
  'Polishing your academic and formal writing by mastering complex relative structures and noun-based expressions.',
  ['Use prepositions correctly in relative clauses', 'Shorten clauses using participles', 'Transform verbs into formal nouns (nominalization)'],
  [
    C1_U8_BLOCK1, C1_U8_BLOCK2, C1_U8_BLOCK3, C1_U8_BLOCK4, C1_U8_BLOCK5
  ]
);
