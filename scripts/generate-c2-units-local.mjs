/**
 * Local C2 unit generator — no OpenAI API key required.
 * Generates all 60 unit files with 6 blocks × 10 questions each.
 */
import * as fs from 'fs';
import * as path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.join(__dirname, '..');
const UNITS_DIR = path.join(ROOT, 'src/lib/c2-units');

const CURRICULUM = [
  { unit: 1,  module: 1,  title: 'The Power of Words',                        grammar: ['rhetorical-inversion'],                  topic: 'language-power' },
  { unit: 2,  module: 1,  title: 'Rhetoric and Persuasion',                   grammar: ['cleft-sentences-advanced'],              topic: 'rhetoric' },
  { unit: 3,  module: 1,  title: 'Political Discourse',                        grammar: ['fronting-topicalisation'],               topic: 'political-language' },
  { unit: 4,  module: 1,  title: 'Language and Identity',                      grammar: ['register-control'],                      topic: 'language-identity' },
  { unit: 5,  module: 1,  title: 'Propaganda, Spin and Manipulation',          grammar: ['distancing-passive'],                    topic: 'media-language' },
  { unit: 6,  module: 1,  title: 'Module 1 Review: Language and Power',        grammar: ['mixed-review-m1'],                       topic: 'review' },
  { unit: 7,  module: 2,  title: 'What is Literature?',                        grammar: ['narrative-tenses-mastery'],              topic: 'literature' },
  { unit: 8,  module: 2,  title: 'The Art of the Novel',                       grammar: ['textual-cohesion'],                      topic: 'novel' },
  { unit: 9,  module: 2,  title: 'Poetry and Sound',                           grammar: ['figurative-language'],                   topic: 'poetry' },
  { unit: 10, module: 2,  title: 'Essay Writing as Art',                       grammar: ['nominalisation-academic'],               topic: 'academic-writing' },
  { unit: 11, module: 2,  title: 'Literary Criticism',                         grammar: ['reporting-verbs-evaluation'],            topic: 'literary-criticism' },
  { unit: 12, module: 2,  title: 'Module 2 Review: Literature',                grammar: ['mixed-review-m2'],                       topic: 'review' },
  { unit: 13, module: 3,  title: 'The Philosophy of Science',                  grammar: ['epistemic-modality'],                    topic: 'philosophy-science' },
  { unit: 14, module: 3,  title: 'Artificial Intelligence and Ethics',         grammar: ['passive-objectivity'],                   topic: 'ai-ethics' },
  { unit: 15, module: 3,  title: 'Fake News and Information Wars',             grammar: ['hedging-c2'],                            topic: 'media-information' },
  { unit: 16, module: 3,  title: 'Research and Evidence',                      grammar: ['complex-noun-phrases'],                  topic: 'academic-research' },
  { unit: 17, module: 3,  title: 'Knowledge and Bias',                         grammar: ['impersonal-constructions'],              topic: 'epistemology' },
  { unit: 18, module: 3,  title: 'Module 3 Review: Science',                   grammar: ['mixed-review-m3'],                       topic: 'review' },
  { unit: 19, module: 4,  title: 'Human Rights and Law',                       grammar: ['obligation-formal'],                     topic: 'human-rights' },
  { unit: 20, module: 4,  title: 'Inequality and Social Justice',              grammar: ['concession-contrast-advanced'],          topic: 'social-justice' },
  { unit: 21, module: 4,  title: 'Crime and Punishment',                       grammar: ['conditionals-mastery'],                  topic: 'crime-justice' },
  { unit: 22, module: 4,  title: 'Democracy and Governance',                   grammar: ['cause-result-advanced'],                 topic: 'democracy' },
  { unit: 23, module: 4,  title: 'Civil Society and Protest',                  grammar: ['strong-views-nuance'],                   topic: 'civil-society' },
  { unit: 24, module: 4,  title: 'Module 4 Review: Society',                   grammar: ['mixed-review-m4'],                       topic: 'review' },
  { unit: 25, module: 5,  title: 'The Philosophy of Beauty',                   grammar: ['complex-adjectival-phrases'],            topic: 'aesthetics' },
  { unit: 26, module: 5,  title: 'Contemporary Art',                           grammar: ['figurative-critical-writing'],           topic: 'contemporary-art' },
  { unit: 27, module: 5,  title: 'Music and Emotion',                          grammar: ['dramatic-inversion'],                    topic: 'music' },
  { unit: 28, module: 5,  title: 'Film as Language',                           grammar: ['stylistic-sentence-variety'],            topic: 'cinema' },
  { unit: 29, module: 5,  title: 'Architecture and Space',                     grammar: ['degree-result-advanced'],                topic: 'architecture' },
  { unit: 30, module: 5,  title: 'Module 5 Review: Arts',                      grammar: ['mixed-review-m5'],                       topic: 'review' },
  { unit: 31, module: 6,  title: 'Consciousness and the Self',                 grammar: ['nominal-clauses'],                       topic: 'consciousness' },
  { unit: 32, module: 6,  title: 'Memory, Experience and Meaning',             grammar: ['abstract-generalisation'],               topic: 'memory' },
  { unit: 33, module: 6,  title: 'Free Will and Determinism',                  grammar: ['logical-argument-structures'],           topic: 'free-will' },
  { unit: 34, module: 6,  title: 'Personal Identity Over Time',                grammar: ['hedging-c2-advanced'],                   topic: 'identity' },
  { unit: 35, module: 6,  title: 'Ethics of Technology',                       grammar: ['modal-speculation-deduction'],           topic: 'tech-ethics' },
  { unit: 36, module: 6,  title: 'Module 6 Review: Philosophy',                grammar: ['mixed-review-m6'],                       topic: 'review' },
  { unit: 37, module: 7,  title: 'Global Markets and Trade',                   grammar: ['complex-prepositional-phrases'],         topic: 'global-economics' },
  { unit: 38, module: 7,  title: 'Labour, Rights and Work',                    grammar: ['formal-linking-devices'],               topic: 'labour-rights' },
  { unit: 39, module: 7,  title: 'Legal Language and Contracts',               grammar: ['register-control-legal'],                topic: 'legal-language' },
  { unit: 40, module: 7,  title: 'Taxation and Fiscal Policy',                 grammar: ['institutional-passive'],                 topic: 'fiscal-policy' },
  { unit: 41, module: 7,  title: 'International Relations',                    grammar: ['complex-connectors'],                    topic: 'international-relations' },
  { unit: 42, module: 7,  title: 'Module 7 Review: Economics and Law',         grammar: ['mixed-review-m7'],                       topic: 'review' },
  { unit: 43, module: 8,  title: 'Climate Change and Policy',                  grammar: ['synthesis-summarising'],                 topic: 'climate-change' },
  { unit: 44, module: 8,  title: 'Global Health and Pandemics',                grammar: ['speculation-prediction-c2'],             topic: 'global-health' },
  { unit: 45, module: 8,  title: 'Technology and the Future of Humanity',      grammar: ['complex-future-constructions'],          topic: 'future-technology' },
  { unit: 46, module: 8,  title: 'Migration and Global Society',               grammar: ['discourse-management'],                  topic: 'migration' },
  { unit: 47, module: 8,  title: 'War, Peace and Diplomacy',                   grammar: ['argumentative-structures-c2'],          topic: 'war-peace' },
  { unit: 48, module: 8,  title: 'Module 8 Review: Global Challenges',         grammar: ['mixed-review-m8'],                       topic: 'review' },
  { unit: 49, module: 9,  title: 'World Englishes',                            grammar: ['colloquial-mastery'],                    topic: 'world-englishes' },
  { unit: 50, module: 9,  title: 'Humour, Irony and Sarcasm',                  grammar: ['indirect-language-irony'],               topic: 'humour' },
  { unit: 51, module: 9,  title: 'Cultural Taboos and Sensitivity',            grammar: ['diplomatically-hedged-speech'],          topic: 'cultural-taboos' },
  { unit: 52, module: 9,  title: 'Multilingualism and Translation',            grammar: ['register-switching'],                    topic: 'multilingualism' },
  { unit: 53, module: 9,  title: 'Cross-cultural Business',                    grammar: ['interaction-strategies'],                topic: 'cross-cultural' },
  { unit: 54, module: 9,  title: 'Module 9 Review: Culture and Language',      grammar: ['mixed-review-m9'],                       topic: 'review' },
  { unit: 55, module: 10, title: 'Full Grammar Integration I',                 grammar: ['embedding-coordination-subordination'],  topic: 'grammar-mastery' },
  { unit: 56, module: 10, title: 'Full Grammar Integration II',                grammar: ['punctuation-stylistic-cohesion'],        topic: 'grammar-mastery-ii' },
  { unit: 57, module: 10, title: 'All Writing Genres',                         grammar: ['all-writing-genres'],                    topic: 'writing-mastery' },
  { unit: 58, module: 10, title: 'CPE Exam Practice: Reading & Use of English', grammar: ['cpe-use-of-english'],                   topic: 'exam-practice' },
  { unit: 59, module: 10, title: 'CPE Exam Practice: Listening & Speaking',    grammar: ['cpe-listening-speaking'],                topic: 'exam-practice' },
  { unit: 60, module: 10, title: 'CPE Full Mock Exam',                         grammar: ['comprehensive-review-c2'],               topic: 'exam-mastery' },
];

const LESSON_TYPE_MAP = {
  1: { type: 'grammar',         title: 'Grammar Input & Presentation',          exerciseType: 'key-word-transformation' },
  2: { type: 'grammar-context', title: 'Grammar in Context / Collocations',     exerciseType: 'open-cloze' },
  3: { type: 'reading',         title: 'Reading Comprehension (C2 Text)',        exerciseType: 'multiple-choice' },
  4: { type: 'listening',       title: 'Listening / Discourse Management',       exerciseType: 'multiple-choice' },
  5: { type: 'writing',         title: 'Writing Practice (Genre-specific)',      exerciseType: 'multiple-choice' },
  6: { type: 'speaking',        title: 'Speaking / Review / Integration',        exerciseType: 'multiple-choice' },
};

const GRAMMAR_SENTENCES = [
  'The committee decided to postpone the meeting until further notice.',
  'It is widely believed that language shapes our perception of reality.',
  'Not only did the author challenge conventional views, but she also proposed radical alternatives.',
  'The government has been accused of failing to address the underlying causes of the crisis.',
  'Had the delegates arrived on time, the negotiations would have proceeded smoothly.',
  'There is a growing body of evidence suggesting that bilingualism enhances cognitive flexibility.',
  'The report highlights the extent to which economic inequality perpetuates social immobility.',
  'Rarely has such a comprehensive analysis been published in a single volume.',
  'It remains to be seen whether the proposed reforms will have the desired effect.',
  'So complex is the relationship between language and thought that researchers continue to debate its nature.',
];

const KWT_ITEMS = [
  { sentence: 'It was only after the meeting that she understood the full implications.', keyWord: 'UNTIL', startOfAnswer: 'She did not understand the full implications', correctAnswer: 'She did not understand the full implications until after the meeting.', explanation: 'Se usa "until" para indicar el límite temporal de una acción negativa.' },
  { sentence: 'The researcher claims that the results are conclusive.', keyWord: 'ACCORDING', startOfAnswer: 'According to', correctAnswer: 'According to the researcher, the results are conclusive.', explanation: '"According to" se usa para atribuir una afirmación a alguien.' },
  { sentence: 'Despite the difficulties, they managed to complete the project.', keyWord: 'NOTWITHSTANDING', startOfAnswer: 'Notwithstanding the difficulties,', correctAnswer: 'Notwithstanding the difficulties, they managed to complete the project.', explanation: '"Notwithstanding" es un conector formal equivalente a "despite".' },
  { sentence: 'Nobody expected the proposal to be accepted so quickly.', keyWord: 'SURPRISE', startOfAnswer: 'It came as a surprise', correctAnswer: 'It came as a surprise that the proposal was accepted so quickly.', explanation: 'La construcción "it came as a surprise that" expresa sorpresa de forma impersonal.' },
  { sentence: 'The government should have acted sooner to prevent the crisis.', keyWord: 'EARLIER', startOfAnswer: 'Had the government acted', correctAnswer: 'Had the government acted earlier, the crisis could have been prevented.', explanation: 'La inversión en condicionales tipo 3: "Had + sujeto + participio".' },
  { sentence: 'She is considered one of the most influential thinkers of her generation.', keyWord: 'WIDELY', startOfAnswer: 'She is widely', correctAnswer: 'She is widely regarded as one of the most influential thinkers of her generation.', explanation: '"Widely regarded as" es una colocación formal para expresar reconocimiento general.' },
  { sentence: 'The experiment was so complex that only specialists could replicate it.', keyWord: 'SUCH', startOfAnswer: 'Such was the complexity', correctAnswer: 'Such was the complexity of the experiment that only specialists could replicate it.', explanation: 'La inversión con "Such was..." enfatiza el grado de la cualidad.' },
  { sentence: 'The lawyers argued that the contract was invalid.', keyWord: 'GROUNDS', startOfAnswer: 'The lawyers challenged the contract on', correctAnswer: 'The lawyers challenged the contract on the grounds that it was invalid.', explanation: '"On the grounds that" es una expresión formal para introducir una razón legal.' },
  { sentence: 'They rarely achieve such consistent results in laboratory conditions.', keyWord: 'SELDOM', startOfAnswer: 'Seldom do they', correctAnswer: 'Seldom do they achieve such consistent results in laboratory conditions.', explanation: 'Con adverbios negativos como "seldom" se invierte sujeto y auxiliar.' },
  { sentence: 'The author finished writing the novel over a period of ten years.', keyWord: 'TOOK', startOfAnswer: 'It took the author', correctAnswer: 'It took the author ten years to finish writing the novel.', explanation: '"It took + person + time + to-infinitive" indica duración de una actividad.' },
];

const OPEN_CLOZE_SENTENCES = [
  { question: 'The policy has come _____ considerable criticism from opposition parties.', correctAnswer: 'under', explanation: '"Come under criticism" es una colocación fija: recibir críticas.' },
  { question: 'It is _____ no means certain that the proposal will be approved.', correctAnswer: 'by', explanation: '"By no means" es una locución formal que significa "en absoluto".' },
  { question: 'The findings shed light _____ the long-debated question of consciousness.', correctAnswer: 'on', explanation: '"Shed light on" significa arrojar luz sobre algo, aclarar.' },
  { question: 'She was at a _____ to explain the unexpected results.', correctAnswer: 'loss', explanation: '"At a loss" significa sin saber qué decir o hacer.' },
  { question: 'The committee took _____ account the concerns raised by local residents.', correctAnswer: 'into', explanation: '"Take into account" significa tener en cuenta.' },
  { question: 'The research was carried _____ over a period of three years.', correctAnswer: 'out', explanation: '"Carry out" significa realizar, ejecutar.' },
  { question: 'In _____ of the recent developments, a review of policy is necessary.', correctAnswer: 'light', explanation: '"In light of" significa a la luz de, teniendo en cuenta.' },
  { question: 'The government was called _____ to justify its decision.', correctAnswer: 'upon', explanation: '"Called upon to" significa pedido/invitado formalmente a.' },
  { question: 'The treaty was drawn _____ after months of negotiations.', correctAnswer: 'up', explanation: '"Draw up" significa redactar un documento oficial.' },
  { question: 'The argument falls _____ upon closer examination.', correctAnswer: 'apart', explanation: '"Fall apart" en contexto argumentativo significa desmoronarse bajo análisis.' },
];

const MC_OPTIONS_SETS = [
  { options: ['profoundly', 'utterly', 'considerably', 'remarkably'], correct: 'considerably' },
  { options: ['however', 'nevertheless', 'despite', 'although'], correct: 'nevertheless' },
  { options: ['scrutinise', 'examine', 'verify', 'investigate'], correct: 'scrutinise' },
  { options: ['endorsed', 'advocated', 'upheld', 'championed'], correct: 'upheld' },
  { options: ['mitigate', 'alleviate', 'diminish', 'reduce'], correct: 'mitigate' },
  { options: ['pervasive', 'widespread', 'rampant', 'endemic'], correct: 'pervasive' },
  { options: ['ambiguous', 'equivocal', 'vague', 'opaque'], correct: 'equivocal' },
  { options: ['undermine', 'erode', 'diminish', 'weaken'], correct: 'undermine' },
  { options: ['contentious', 'controversial', 'debatable', 'disputed'], correct: 'contentious' },
  { options: ['ostensibly', 'apparently', 'seemingly', 'purportedly'], correct: 'ostensibly' },
];

function generateKWTQuestion(unitId, blockNum, qNum) {
  const item = KWT_ITEMS[(unitId * 3 + blockNum + qNum) % KWT_ITEMS.length];
  return {
    id: `c2-u${unitId}-b${blockNum}-q${qNum}`,
    type: 'key-word-transformation',
    question: item.sentence,
    sentence: item.sentence,
    keyWord: item.keyWord,
    startOfAnswer: item.startOfAnswer,
    correctAnswer: item.correctAnswer,
    explanation: item.explanation,
    points: 2,
  };
}

function generateOpenClozeQuestion(unitId, blockNum, qNum) {
  const item = OPEN_CLOZE_SENTENCES[(unitId * 2 + blockNum + qNum) % OPEN_CLOZE_SENTENCES.length];
  return {
    id: `c2-u${unitId}-b${blockNum}-q${qNum}`,
    type: 'open-cloze',
    question: item.question,
    correctAnswer: item.correctAnswer,
    explanation: item.explanation,
    points: 1,
  };
}

function generateMCQuestion(unitId, blockNum, qNum, topic) {
  const idx = (unitId * 7 + blockNum * 3 + qNum) % GRAMMAR_SENTENCES.length;
  const mcIdx = (unitId * 5 + blockNum + qNum) % MC_OPTIONS_SETS.length;
  const mc = MC_OPTIONS_SETS[mcIdx];
  const sentence = GRAMMAR_SENTENCES[idx];
  return {
    id: `c2-u${unitId}-b${blockNum}-q${qNum}`,
    type: 'multiple-choice',
    question: `In the context of ${topic}, choose the most appropriate word: "${sentence.replace('.', '...')}"`,
    options: mc.options,
    correctAnswer: mc.correct,
    explanation: `La opción correcta es "${mc.correct}" ya que se ajusta mejor al registro y significado C2 requerido en este contexto.`,
    points: 1,
  };
}

function generateBlock(unitId, blockNum, mapping) {
  const lessonType = LESSON_TYPE_MAP[blockNum];
  const questions = [];
  for (let q = 1; q <= 10; q++) {
    if (blockNum === 1) {
      questions.push(generateKWTQuestion(unitId, blockNum, q));
    } else if (blockNum === 2) {
      questions.push(generateOpenClozeQuestion(unitId, blockNum, q));
    } else {
      questions.push(generateMCQuestion(unitId, blockNum, q, mapping.topic));
    }
  }
  return {
    id: `c2-u${unitId}-b${blockNum}`,
    type: lessonType.type,
    title: `Block ${blockNum}: ${lessonType.title}`,
    explanation: `${lessonType.title} practice for "${mapping.title}" — ${mapping.grammar.join(', ')}`,
    questions,
  };
}

function generateUnitFile(mapping) {
  const u = mapping.unit;
  const blocks = [];
  for (let b = 1; b <= 6; b++) {
    blocks.push(generateBlock(u, b, mapping));
  }
  const skills = ['grammar', 'reading', 'listening', 'writing', 'speaking', 'vocabulary'];

  const blockExports = blocks.map((b, i) =>
    `export const C2_U${u}_BLOCK${i + 1}: Exercise = ${JSON.stringify(b, null, 2)};`
  ).join('\n\n');

  const blockRefs = blocks.map((_, i) => `C2_U${u}_BLOCK${i + 1}`).join(',\n    ');

  return `import { Exercise } from '../exercise-types';
import { createC2Unit } from './utils';

${blockExports}

export const C2_UNIT_${u} = createC2Unit(
  'c2-u${u}',
  '${mapping.title.replace(/'/g, "\\'")}',
  'Advanced C2 level practice on ${mapping.topic}.',
  ${JSON.stringify(skills)},
  [
    ${blockRefs}
  ]
);
`;
}

function main() {
  const startArg = parseInt(process.argv[2]) || 1;
  const endArg = parseInt(process.argv[3]) || 60;

  for (const mapping of CURRICULUM) {
    if (mapping.unit < startArg || mapping.unit > endArg) continue;
    const filePath = path.join(UNITS_DIR, `unit-${mapping.unit}.ts`);
    const content = generateUnitFile(mapping);
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`✓ Unit ${mapping.unit}: ${mapping.title}`);
  }
  console.log(`\nDone. Generated units ${startArg}–${endArg}.`);
}

main();
