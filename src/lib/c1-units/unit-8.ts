import { Exercise } from '../exercise-types';
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
      type: 'multiple-choice',
      question: 'The [[committee|comité]], many members of ___ were [[absent|ausentes]], failed to [[reach|alcanzar]] a [[decision|decisión]].',
      options: ['which', 'whom', 'who'],
      correctAnswer: 'whom',
      explanation: 'Use "whom" after a [[preposition|preposición]] for [[people|personas]].',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b1', 2),
      type: 'multiple-choice',
      question: 'He [[arrived|llegó]] late for the [[interview|entrevista]], ___ [[made|hizo]] a very [[poor|pobre]] [[impression|impresión]].',
      options: ['what', 'that', 'which'],
      correctAnswer: 'which',
      explanation: 'Use "which" to refer back to the entire previous [[clause|cláusula]].',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b1', 3),
      type: 'multiple-choice',
      question: 'The [[platform|plataforma]] on ___ the [[candidate|candidato]] stood was quite [[radical|radical]].',
      options: ['where', 'that', 'which'],
      correctAnswer: 'which',
      explanation: 'Formal relative clause with [[preposition|preposición]] + "[[which|cual]].',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b1', 4),
      type: 'multiple-choice',
      question: 'There are [[several|varios]] [[theories|teorías]], none of ___ can be [[proven|probada]].',
      options: ['them', 'which', 'what'],
      correctAnswer: 'which',
      explanation: '"None of which" is used for [[things|cosas]] in [[formal|formal]] contexts.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b1', 5),
      type: 'multiple-choice',
      question: 'The [[company|empresa]] is [[expanding|expandiéndose]], ___ is [[great|gran]] [[news|noticias]] for the [[employees|empleados]].',
      options: ['what', 'that', 'which'],
      correctAnswer: 'which',
      explanation: '"Which" acts as a [[connector|conector]] for a following [[comment|comentario]].',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b1', 6),
      type: 'multiple-choice',
      question: 'I have [[two|dos]] [[brothers|hermanos]], both of ___ [[live|viven]] [[abroad|en el extranjero]].',
      options: ['who', 'them', 'whom'],
      correctAnswer: 'whom',
      explanation: '"Both of whom" is the correct [[quantifier|cuantificador]] structure for people.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b1', 7),
      type: 'multiple-choice',
      question: 'The [[building|edificio]], the [[roof|techo]] of ___ was [[damaged|dañado]], is being [[repaired|reparado]].',
      options: ['whom', 'that', 'which'],
      correctAnswer: 'which',
      explanation: 'Alternative to "whose" for [[objects|objetos]] in formal style.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b1', 8),
      type: 'multiple-choice',
      question: 'That is the [[reason|razón]] ___ I [[decided|decidí]] to [[leave|irme]].',
      options: ['which', 'what', 'why'],
      correctAnswer: 'why',
      explanation: 'Relative [[adverb|adverbio]] of [[reason|razón]].',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b1', 9),
      type: 'multiple-choice',
      question: 'We [[met|conocimos]] a [[traveler|viajero]], [[whose|cuyo]] [[goal|objetivo]] was to [[visit|visitar]] every [[country|país]].',
      options: ['who\'s', 'which', 'whose'],
      correctAnswer: 'whose',
      explanation: 'Possessive relative pronoun.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b1', 10),
      type: 'multiple-choice',
      question: 'The [[moment|momento]] ___ I saw her, I knew [[everything|todo]] would be [[fine|bien]].',
      options: ['which', 'that', 'when'],
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
      type: 'multiple-choice',
      question: 'The [[painting|pintura]], ___ by Picasso, is worth [[millions|millones]].',
      options: ['painted', 'painting', 'paints'],
      correctAnswer: 'painted',
      explanation: 'Reduced [[passive|pasiva]] relative clause using a [[past participle|participio pasado]].',
      points: 2
    },
    {
      id: genId(UNIT_ID, 'b3', 2),
      type: 'multiple-choice',
      question: 'Anyone ___ to leave may do so now.',
      options: ['wishing', 'wished', 'wish'],
      correctAnswer: 'wishing',
      explanation: 'Reduced [[active|activa]] relative clause using a [[present participle|participio presente]].',
      points: 2
    },
    {
      id: genId(UNIT_ID, 'b3', 3),
      type: 'multiple-choice',
      question: 'The [[book|libro]] ___ on the table is mine.',
      options: ['lying', 'lain', 'lay'],
      correctAnswer: 'lying',
      explanation: 'Reduced active clause.',
      points: 2
    },
    {
      id: genId(UNIT_ID, 'b3', 4),
      type: 'multiple-choice',
      question: 'The [[cars|coches]] ___ in this [[factory|fábrica]] are [[exported|exportados]].',
      options: ['produced', 'producing', 'produce'],
      correctAnswer: 'produced',
      explanation: 'Reduced passive clause.',
      points: 2
    },
    {
      id: genId(UNIT_ID, 'b3', 5),
      type: 'multiple-choice',
      question: 'A [[man|hombre]] ___ Smith [[phoned|llamó]] earlier.',
      options: ['called', 'calling', 'calls'],
      correctAnswer: 'called',
      explanation: 'Reduced passive: "who is called" -> "called".',
      points: 2
    },
    {
      id: genId(UNIT_ID, 'b3', 6),
      type: 'multiple-choice',
      question: 'The [[results|resultados]] ___ from the [[study|estudio]] were [[surprising|sorprendentes]].',
      options: ['obtained', 'obtaining', 'obtain'],
      correctAnswer: 'obtained',
      explanation: 'Reduced passive clause.',
      points: 2
    },
    {
      id: genId(UNIT_ID, 'b3', 7),
      type: 'multiple-choice',
      question: '"[[Houses|Casas]] ___ of wood are [[common|comunes]] here.',
      options: ['built', 'building', 'build'],
      correctAnswer: 'built',
      explanation: 'Reduced passive relative clause.',
      points: 2
    },
    {
      id: genId(UNIT_ID, 'b3', 8),
      type: 'multiple-choice',
      question: 'People ___ in glass [[houses|casas]] shouldn\'t [[throw|tirar]] [[stones|piedras]].',
      options: ['living', 'lived', 'live'],
      correctAnswer: 'living',
      explanation: 'Reduced active relative clause.',
      points: 2
    },
    {
      id: genId(UNIT_ID, 'b3', 9),
      type: 'multiple-choice',
      question: 'The [[man|hombre]] ___ outside is my [[uncle|tío]].',
      options: ['waiting', 'waited', 'waits'],
      correctAnswer: 'waiting',
      explanation: 'Reduced active clause: "who is waiting" -> "waiting".',
      points: 2
    },
    {
      id: genId(UNIT_ID, 'b3', 10),
      type: 'multiple-choice',
      question: 'The [[law|ley]] ___ yesterday will [[change|cambiar]] [[everything|todo]].',
      options: ['passed', 'passing', 'pass'],
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
      options: ['installing', 'install', 'installation'],
      correctAnswer: 'installation',
      explanation: 'Noun: installation.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b4', 2),
      type: 'multiple-choice',
      question: 'There is a [[growing|creciente]] ___ on [[renewable|renovable]] [[energy|energía]].',
      options: ['rely', 'relying', 'reliance'],
      correctAnswer: 'reliance',
      explanation: '"Reliance" is the noun from "rely".',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b4', 3),
      type: 'multiple-choice',
      question: 'The ___ of [[human|humanos]] [[rights|derechos]] is a [[global|global]] [[issue|problema]].',
      options: ['violating', 'violate', 'violation'],
      correctAnswer: 'violation',
      explanation: 'Noun: violation.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b4', 4),
      type: 'multiple-choice',
      question: 'Her ___ to the [[cause|causa]] was [[unwavering|inquebrantable]].',
      options: ['commit', 'committing', 'commitment'],
      correctAnswer: 'commitment',
      explanation: 'Noun: commitment.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b4', 5),
      type: 'multiple-choice',
      question: 'The ___ of [[wealth|riqueza]] is very [[uneven|desigual]].',
      options: ['distribute', 'distributing', 'distribution'],
      correctAnswer: 'distribution',
      explanation: 'Noun: distribution.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b4', 6),
      type: 'multiple-choice',
      question: '___ in the [[experiment|experimento]] is [[voluntary|voluntaria]].',
      options: ['Participating', 'Participate', 'Participation'],
      correctAnswer: 'Participation',
      explanation: 'Noun: participation.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b4', 7),
      type: 'multiple-choice',
      question: 'The ___ of the [[evidence|evidencia]] was [[questioned|cuestionada]].',
      options: ['valid', 'validate', 'validity'],
      correctAnswer: 'validity',
      explanation: '"Validity" is the noun form of "valid".',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b4', 8),
      type: 'multiple-choice',
      question: 'There was a [[sudden|repentino]] ___ in the [[stock|acciones]] [[market|mercado]].',
      options: ['fluctuate', 'fluctuating', 'fluctuation'],
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
      question: 'His ___ of the [[facts|hechos]] was [[distorted|distorsionada]].',
      options: ['perception', 'perceive', 'perceiving'],
      correctAnswer: 'perception',
      explanation: 'Noun: perception.',
      points: 1
    }
  ]
};

// ============================================
// BLOCK 5: MIXED REVIEW (10 items)
// ============================================
export const C1_U8_BLOCK5: Exercise = {
  id: `c1-u${UNIT_ID}-b5`,
  type: 'grammar',
  title: 'Unit 8 Review',
  grammarPoint: 'Mixed Clauses & Nominalization',
  explanation: 'Test your [[knowledge|conocimiento]] of [[relative|relativas]] clauses and [[formal|formal]] nominalization.',
  questions: [
    {
      id: genId(UNIT_ID, 'b5', 1),
      type: 'multiple-choice',
      question: 'The [[problem|problema]], the [[origin|origen]] of ___ remains [[unknown|desconocido]], is [[serious|serio]].',
      options: ['which', 'whom', 'that'],
      correctAnswer: 'which',
      explanation: 'Formal relative clause structure.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b5', 2),
      type: 'multiple-choice',
      question: 'Their ___ of the [[terms|términos]] was [[explicit|explícita]].',
      options: ['acceptance', 'accepting', 'accept'],
      correctAnswer: 'acceptance',
      explanation: 'Nominalized form of accept.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b5', 3),
      type: 'multiple-choice',
      question: 'Anyone ___ a [[complaint|queja]] should see the [[manager|gerente]].',
      options: ['making', 'made', 'make'],
      correctAnswer: 'making',
      explanation: 'Reduced active relative clause.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b5', 4),
      type: 'multiple-choice',
      question: 'The [[house|casa]] in ___ I was [[born|nacido]] is for [[sale|venta]].',
      options: ['which', 'where', 'that'],
      correctAnswer: 'which',
      explanation: 'Formal prepositional relative clause.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b5', 5),
      type: 'multiple-choice',
      question: 'His ___ of the [[situation|situación]] was [[insightful|perspicaz]].',
      options: ['analysis', 'analyzing', 'analyze'],
      correctAnswer: 'analysis',
      explanation: 'Nominalized form of analyze.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b5', 6),
      type: 'multiple-choice',
      question: 'The [[results|resultados]], ___ yesterday, were [[positive|positivos]].',
      options: ['received', 'receiving', 'receive'],
      correctAnswer: 'received',
      explanation: 'Reduced passive relative clause.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b5', 7),
      type: 'multiple-choice',
      question: 'I have [[three|tres]] [[friends|amigos]], none of ___ [[drink|beben]] [[alcohol|alcohol]].',
      options: ['whom', 'who', 'them'],
      correctAnswer: 'whom',
      explanation: 'Quantifier relative structure for people.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b5', 8),
      type: 'multiple-choice',
      question: 'The ___ of the [[contract|contrato]] is [[mandatory|obligatoria]].',
      options: ['signing', 'sign', 'signed'],
      correctAnswer: 'signing',
      explanation: 'Gerund functioning as a noun.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b5', 9),
      type: 'multiple-choice',
      question: 'The [[man|hombre]] ___ with her is the [[CEO|director ejecutivo]].',
      options: ['talking', 'talked', 'talks'],
      correctAnswer: 'talking',
      explanation: 'Reduced active relative clause.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b5', 10),
      type: 'multiple-choice',
      question: 'She [[resigned|renunció]], ___ was a [[shock|choque]] to [[everyone|todos]].',
      options: ['which', 'what', 'that'],
      correctAnswer: 'which',
      explanation: 'Relative clause referring to the whole sentence.',
      points: 1
    }
  ]
};

export const unit8 = createC1Unit(
  'c1-u8',
  'Academic Style: Clauses & Nominalization',
  'Master advanced relative clauses and the power of nominalization for formal writing.',
  ['Use prepositions in relative clauses correctly', 'Apply reduced relative clauses for conciseness', 'Nominalize verbs to achieve a more formal and academic tone'],
  [
    C1_U8_BLOCK1, C1_U8_BLOCK2, C1_U8_BLOCK3, C1_U8_BLOCK4, C1_U8_BLOCK5
  ]
);
