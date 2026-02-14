import { Exercise, Lesson } from '../exercise-types';
import { createC1Unit, genId } from './utils';

const UNIT_ID = 29;

// ============================================
// BLOCK 1: FORMAL VS. INFORMAL VOCABULARY (10 items)
// ============================================
export const C1_U29_BLOCK1: Exercise = {
  id: `c1-u${UNIT_ID}-b1`,
  type: 'vocabulary',
  title: 'Register: Formal vs. Informal Lexis',
  grammarPoint: 'Register',
  explanation: 'Choosing the [[appropriate|apropiado]] word [[depends|depende]] on the [[context|contexto]] (formal reports vs. casual talk).',
  questions: [
    {
      id: genId(UNIT_ID, 'b1', 1),
      type: 'multiple-choice',
      question: 'The [[company|empresa]] decided to ___ the [[contract|contrato]].',
      options: ['terminate', 'end', 'stop'],
      correctAnswer: 'terminate',
      explanation: '"Terminate" is formal.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b1', 2),
      type: 'multiple-choice',
      question: 'We need to ___ this [[issue|asunto]] [[immediately|inmediatamente]].',
      options: ['address', 'deal with', 'fix'],
      correctAnswer: 'address',
      explanation: '"Address" is formal.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b1', 3),
      type: 'multiple-choice',
      question: 'The [[event|evento]] was ___ due to [[rain|lluvia]].',
      options: ['postponed', 'put off', 'delayed'],
      correctAnswer: 'postponed',
      explanation: '"Postponed" is the formal equivalent of "put off".',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b1', 4),
      type: 'multiple-choice',
      question: 'Please ___ that all [[lights|luces]] are [[off|apagadas]].',
      options: ['ensure', 'make sure', 'see'],
      correctAnswer: 'ensure',
      explanation: '"Ensure" is formal.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b1', 5),
      type: 'multiple-choice',
      question: 'They are ___ the [[project|proyecto]] [[next|próxima]] [[week|semana]].',
      options: ['commencing', 'starting', 'beginning'],
      correctAnswer: 'commencing',
      explanation: '"Commence" is highly formal.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b1', 6),
      type: 'multiple-choice',
      question: 'The [[evidence|evidencia]] ___ a [[rise|subida]] in [[crime|crimen]].',
      options: ['indicates', 'shows', 'says'],
      correctAnswer: 'indicates',
      explanation: '"Indicate" is formal.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b1', 7),
      type: 'multiple-choice',
      question: 'He was ___ [[permission|permiso]] to [[leave|irse]].',
      options: ['granted', 'given', 'allowed'],
      correctAnswer: 'granted',
      explanation: '"Grant" is formal.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b1', 8),
      type: 'multiple-choice',
      question: 'The [[system|sistema]] is ___ in several [[areas|áreas]].',
      options: ['deficient', 'bad', 'poor'],
      correctAnswer: 'deficient',
      explanation: '"Deficient" is a formal academic word.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b1', 9),
      type: 'multiple-choice',
      question: 'I ___ your [[assistance|asistencia]] in this [[matter|asunto]].',
      options: ['request', 'ask for', 'want'],
      correctAnswer: 'request',
      explanation: '"Request" is formal.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b1', 10),
      type: 'multiple-choice',
      question: 'The [[plan|plan]] was ___ [[last|pasado]] [[month|mes]].',
      options: ['implemented', 'done', 'started'],
      correctAnswer: 'implemented',
      explanation: '"Implement" is formal business/academic Lexis.',
      points: 1
    }
  ]
};

// ============================================
// BLOCK 2: NOMINALIZATION (10 items)
// ============================================
export const C1_U29_BLOCK2: Exercise = {
  id: `c1-u${UNIT_ID}-b2`,
  type: 'grammar',
  title: 'Style: Nominalization for Academic Writing',
  grammarPoint: 'Style',
  explanation: '[[Nominalization|Nominalización]] involves turning [[verbs|verbos]] or [[adjectives|adjetivos]] into [[nouns|sustantivos]] to make writing more [[formal|formal]] and [[concise|conciso]].',
  questions: [
    {
      id: genId(UNIT_ID, 'b2', 1),
      type: 'fill-blank',
      question: 'Instead of "They analyzed the data", use: "The ___ of the [[data|datos]] was [[thorough|exhaustivo]]."',
      correctAnswer: 'analysis',
      explanation: 'Analyze (verb) -> Analysis (noun).',
      points: 2
    },
    {
      id: genId(UNIT_ID, 'b2', 2),
      type: 'fill-blank',
      question: 'Instead of "The temperatures rose", use: "A ___ in [[temperatures|temperaturas]] was [[observed|observado]]."',
      correctAnswer: 'rise',
      explanation: 'Rise (verb) -> Rise (noun).',
      points: 2
    },
    {
      id: genId(UNIT_ID, 'b2', 3),
      type: 'fill-blank',
      question: 'Instead of "The project failed", use: "The ___ of the [[project|proyecto]] was [[unexpected|inesperado]]."',
      correctAnswer: 'failure',
      explanation: 'Fail (verb) -> Failure (noun).',
      points: 2
    },
    {
      id: genId(UNIT_ID, 'b2', 4),
      type: 'fill-blank',
      question: 'Instead of "We decided to wait", use: "The ___ to [[wait|esperar]] was [[difficult|difícil]]."',
      correctAnswer: 'decision',
      explanation: 'Decide (verb) -> Decision (noun).',
      points: 2
    },
    {
      id: genId(UNIT_ID, 'b2', 5),
      type: 'fill-blank',
      question: 'Instead of "People migrated", use: "The ___ of [[people|gente]] [[increased|aumentó]]."',
      correctAnswer: 'migration',
      explanation: 'Migrate (verb) -> Migration (noun).',
      points: 2
    },
    {
      id: genId(UNIT_ID, 'b2', 6),
      type: 'fill-blank',
      question: 'Instead of "The machine was efficient", use: "The ___ of the [[machine|máquina]] was [[clear|clara]]."',
      correctAnswer: 'efficiency',
      explanation: 'Efficient (adj) -> Efficiency (noun).',
      points: 2
    },
    {
      id: genId(UNIT_ID, 'b2', 7),
      type: 'fill-blank',
      question: 'Instead of "They refused to help", use: "Their ___ to [[help|ayudar]] was [[surprising|sorprendente]]."',
      correctAnswer: 'refusal',
      explanation: 'Refuse (verb) -> Refusal (noun).',
      points: 2
    },
    {
      id: genId(UNIT_ID, 'b2', 8),
      type: 'fill-blank',
      question: 'Instead of "He responded quickly", use: "His ___ was [[quick|rápida]]."',
      correctAnswer: 'response',
      explanation: 'Respond (verb) -> Response (noun).',
      points: 2
    },
    {
      id: genId(UNIT_ID, 'b2', 9),
      type: 'fill-blank',
      question: 'Instead of "The area was beautiful", use: "The ___ of the [[area|área]] was [[stunning|asombrosa]]."',
      correctAnswer: 'beauty',
      explanation: 'Beautiful (adj) -> Beauty (noun).',
      points: 2
    },
    {
      id: genId(UNIT_ID, 'b2', 10),
      type: 'fill-blank',
      question: 'Instead of "Prices fluctuated", use: "___ in [[prices|precios]] was [[evident|evidente]]."',
      correctAnswer: 'Fluctuation',
      explanation: 'Fluctuate (verb) -> Fluctuation (noun).',
      points: 2
    }
  ]
};

// ============================================
// BLOCK 3: DISCOURSE MARKERS (10 items)
// ============================================
export const C1_U29_BLOCK3: Exercise = {
  id: `c1-u${UNIT_ID}-b3`,
  type: 'vocabulary',
  title: 'Style: Advanced Discourse Markers',
  grammarPoint: 'Cohesion',
  explanation: 'Use [[discourse markers|marcadores del discurso]] like "furthermore", "nonetheless", and "conversely" to [[structure|estructurar]] your [[arguments|argumentos]].',
  questions: [
    {
      id: genId(UNIT_ID, 'b3', 1),
      type: 'multiple-choice',
      question: 'The [[data|datos]] are [[clear|claros]]. ___, (Furthermore) the [[results|resultados]] are [[consistent|consistentes]].',
      options: ['Furthermore', 'However', 'Instead'],
      correctAnswer: 'Furthermore',
      explanation: '"Furthermore" adds information.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b3', 2),
      type: 'multiple-choice',
      question: 'It was [[expensive|caro]]. ___, (Nonetheless) it was [[worth|vale la pena]] it.',
      options: ['Nonetheless', 'Moreover', 'Similarly'],
      correctAnswer: 'Nonetheless',
      explanation: '"Nonetheless" shows contrast.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b3', 3),
      type: 'multiple-choice',
      question: '[[Profits|Beneficios]] [[fell|cayeron]]. ___, [[spending|gasto]] [[increased|aumentó]].',
      options: ['Conversely', 'Likewise', 'Indeed'],
      correctAnswer: 'Conversely',
      explanation: '"Conversely" shows an opposite relationship.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b3', 4),
      type: 'multiple-choice',
      question: 'He is a [[great|gran]] [[leader|líder]]. ___, (Indeed) he is the [[best|mejor]] we\'ve [[had|tenido]].',
      options: ['Indeed', 'Alternatively', 'Despite this'],
      correctAnswer: 'Indeed',
      explanation: '"Indeed" emphasizes a point.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b3', 5),
      type: 'multiple-choice',
      question: 'You can [[pay|pagar]] [[cash|efectivo]]. ___, (Alternatively) you can use a [[card|tarjeta]].',
      options: ['Alternatively', 'Consequently', 'Thus'],
      correctAnswer: 'Alternatively',
      explanation: '"Alternatively" offers another option.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b3', 6),
      type: 'multiple-choice',
      question: 'The [[plan|plan]] was [[flawed|defectuoso]]. ___, (Consequently) it [[failed|falló]].',
      options: ['Consequently', 'Nevertheless', 'In addition'],
      correctAnswer: 'Consequently',
      explanation: '"Consequently" shows result.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b3', 7),
      type: 'multiple-choice',
      question: 'He is [[rich|rico]]. ___, he is [[unhappy|infeliz]].',
      options: ['Notwithstanding', 'Moreover', 'Hence'],
      correctAnswer: 'Notwithstanding',
      explanation: '"Notwithstanding" means "despite this".',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b3', 8),
      type: 'multiple-choice',
      question: 'The [[report|informe]] is [[ready|listo]]. ___, (Accordingly) we [[can|podemos]] [[proceed|proceder]].',
      options: ['Accordingly', 'But', 'Still'],
      correctAnswer: 'Accordingly',
      explanation: '"Accordingly" means "therefore/in a corresponding way".',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b3', 9),
      type: 'multiple-choice',
      question: 'I [[like|amo]] [[apples|manzanas]]. ___, I [[enjoy|disfruto]] [[pears|peras]].',
      options: ['Likewise', 'Conversely', 'Yet'],
      correctAnswer: 'Likewise',
      explanation: '"Likewise" shows similarity.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b3', 10),
      type: 'multiple-choice',
      question: 'We must [[act|actuar]]. ___, we [[will|vamos a]] [[lose|perder]].',
      options: ['Otherwise', 'Thus', 'Moreover'],
      correctAnswer: 'Otherwise',
      explanation: '"Otherwise" shows the consequence of not acting.',
      points: 1
    }
  ]
};

// ============================================
// BLOCK 4: IMPERSONAL STYLE (10 items)
// ============================================
export const C1_U29_BLOCK4: Exercise = {
  id: `c1-u${UNIT_ID}-b4`,
  type: 'grammar',
  title: 'Style: Impersonal & Objective Language',
  grammarPoint: 'Style',
  explanation: 'Formal English avoids "I" and "you", preferring [[passive|pasiva]] structures or [[impersonal|impersonales]] phrases like "It is claimed that".',
  questions: [
    {
      id: genId(UNIT_ID, 'b4', 1),
      type: 'fill-blank',
      question: '___ is [[believed|creído]] that [[prices|precios]] will [[rise|subir]].',
      correctAnswer: 'It',
      explanation: 'Impersonal passive structure.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b4', 2),
      type: 'fill-blank',
      question: '___ is [[no|ninguna]] [[doubt|duda]] that [[climate|clima]] is [[changing|cambiando]].',
      correctAnswer: 'There',
      explanation: 'Existential "there" for objectivity.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b4', 3),
      type: 'fill-blank',
      question: '[[Research|Investigación]] ___ that [[exercise|ejercicio]] is [[good|bueno]].',
      correctAnswer: 'suggests',
      explanation: 'Using the subject of study as the agent.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b4', 4),
      type: 'fill-blank',
      question: 'The ___ of this [[report|informe]] is to [[analyze|analizar]] [[sales|ventas]].',
      correctAnswer: 'aim',
      explanation: 'Focusing on the purpose, not the writer.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b4', 5),
      type: 'fill-blank',
      question: 'It ___ been [[argued|argumentado]] that [[laws|leyes]] should [[change|cambiar]].',
      correctAnswer: 'has',
      explanation: 'Present perfect impersonal passive.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b4', 6),
      type: 'fill-blank',
      question: 'One ___ [[consider|considerar]] all [[options|opciones]].',
      correctAnswer: 'should',
      explanation: 'Using "one" as a generic pronoun.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b4', 7),
      type: 'fill-blank',
      question: 'The [[results|resultados]] ___ [[presented|presentados]] in [[Table|Tabla]] 1.',
      correctAnswer: 'are',
      explanation: 'Passive for objective reporting.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b4', 8),
      type: 'fill-blank',
      question: '___ remains to be [[seen|visto]] whether it [[works|funciona]].',
      correctAnswer: 'It',
      explanation: 'Impersonal phrase for uncertainty.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b4', 9),
      type: 'fill-blank',
      question: 'Attention ___ be [[paid|prestada]] to [[detail|detalle]].',
      correctAnswer: 'must',
      explanation: 'Passive for instructions/requirements.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b4', 10),
      type: 'fill-blank',
      question: 'This ___ [[examines|examina]] the [[effects|efectos]] of [[tax|impuestos]].',
      correctAnswer: 'paper',
      explanation: 'Using the document as the subject.',
      points: 1
    }
  ]
};

// ============================================
// BLOCK 5: REWRITING FOR REGISTER (10 items)
// ============================================
export const C1_U29_BLOCK5: Exercise = {
  id: `c1-u${UNIT_ID}-b5`,
  type: 'grammar',
  title: 'Key Word Transformation: Register & Style',
  grammarPoint: 'Mixed Review',
  explanation: 'Rewrite the [[informal|informal]] sentences to make them [[formal|formales]] and [[academic|académicas]].',
  questions: [
    {
      id: genId(UNIT_ID, 'b5', 1),
      type: 'fill-blank',
      question: 'They started the project. (COMMENCED) \n The project was ___ .',
      correctAnswer: 'commenced',
      explanation: 'Using formal verb and passive voice.',
      points: 2
    },
    {
      id: genId(UNIT_ID, 'b5', 2),
      type: 'fill-blank',
      question: 'We need to fix the problem. (ADDRESS) \n The problem must be ___ .',
      correctAnswer: 'addressed',
      explanation: 'Formal Lexis and passive.',
      points: 2
    },
    {
      id: genId(UNIT_ID, 'b5', 3),
      type: 'fill-blank',
      question: 'The boss said no. (REFUSAL) \n There was a ___ from the [[manager|gerente]].',
      correctAnswer: 'refusal',
      explanation: 'Nominalization.',
      points: 2
    },
    {
      id: genId(UNIT_ID, 'b5', 4),
      type: 'fill-blank',
      question: 'I think that... (BELIEVED) \n It is ___ that...',
      correctAnswer: 'believed',
      explanation: 'Impersonal passive.',
      points: 2
    },
    {
      id: genId(UNIT_ID, 'b5', 5),
      type: 'fill-blank',
      question: 'Also, it is too expensive. (FURTHERMORE) \n ___, the [[cost|coste]] is [[excessive|excesivo]].',
      correctAnswer: 'Furthermore',
      explanation: 'Formal discourse marker.',
      points: 2
    },
    {
      id: genId(UNIT_ID, 'b5', 6),
      type: 'fill-blank',
      question: 'They found out the truth. (DISCOVERY) \n The ___ of the [[truth|verdad]] was [[made|hecha]].',
      correctAnswer: 'discovery',
      explanation: 'Nominalization.',
      points: 2
    },
    {
      id: genId(UNIT_ID, 'b5', 7),
      type: 'fill-blank',
      question: 'Don\'t forget the rules. (ENSURE) \n Please ___ that the [[rules|reglas]] are [[followed|seguidas]].',
      correctAnswer: 'ensure',
      explanation: 'Formal instruction.',
      points: 2
    },
    {
      id: genId(UNIT_ID, 'b5', 8),
      type: 'fill-blank',
      question: 'It was a bit better. (MARGINALLY) \n There was a ___ [[improvement|mejora]].',
      correctAnswer: 'marginal',
      explanation: 'Adjective of degree + nominalization.',
      points: 2
    },
    {
      id: genId(UNIT_ID, 'b5', 9),
      type: 'fill-blank',
      question: 'If you don\'t help, we fail. (OTHERWISE) \n Your [[assistance|asistencia]] is [[required|requerida]]; ___, we will [[fail|fallar]].',
      correctAnswer: 'otherwise',
      explanation: 'Formal cohesion.',
      points: 2
    },
    {
      id: genId(UNIT_ID, 'b5', 10),
      type: 'fill-blank',
      question: 'They put it off. (POSTPONEMENT) \n There was a ___ of the [[event|evento]].',
      correctAnswer: 'postponement',
      explanation: 'Nominalization of a phrasal verb.',
      points: 2
    }
  ]
};

export const unit29: Lesson = createC1Unit(
  'c1-u29',
  'Advanced Register & Style',
  'Polishing your English for professional and academic excellence through nominalization and formal Lexis.',
  ['Switch between formal and informal registers', 'Use nominalization to sound more academic', 'Apply impersonal structures for objectivity'],
  [
    C1_U29_BLOCK1, C1_U29_BLOCK2, C1_U29_BLOCK3, C1_U29_BLOCK4, C1_U29_BLOCK5
  ]
);
