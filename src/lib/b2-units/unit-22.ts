import { Exercise } from '../exercise-types';
import { createB2Unit, genId } from './utils';

const UNIT_ID = 22;

// ============================================
// BLOCK 1: GRAMMAR - PASSIVE REPORTING (PERFECT INFINITIVE)
// ============================================
export const B2_U22_BLOCK1: Exercise = {
  id: `b2-u${UNIT_ID}-b1`,
  type: 'grammar',
  title: 'Passive Reporting: Perfect Infinitive',
  grammarPoint: 'Passive Reporting',
  explanation: 'Use "subject + passive verb + to have + past participle" to report past actions.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b1', i + 1),
    type: 'multiple-choice',
    question: [
      'The glacier is thought ___ (melt) significantly over the last decade.',
      'The fire is believed ___ (start) by a lightning strike.',
      'The species is reported ___ (disappear) from the region.',
      'The government is claimed ___ (hide) the real data.',
      'The factory is suspected ___ (dump) waste into the river.',
      'The levels of CO2 are estimated ___ (rise) by 5%.',
      'The disaster is known ___ (affect) thousands of people.',
      'The island is assumed ___ (be) inhabited once.',
      'The trees are said ___ (plant) by local volunteers.',
      'The law is understood ___ (change) in 2010.'
    ][i],
    options: [
      ['to have melted', 'to melt', 'to be melting'],
      ['to have started', 'to start', 'to be starting'],
      ['to have disappeared', 'to disappear', 'to be disappearing'],
      ['to have hidden', 'to hide', 'to be hiding'],
      ['to have dumped', 'to dump', 'to be dumping'],
      ['to have risen', 'to rise', 'to be rising'],
      ['to have affected', 'to affect', 'to be affecting'],
      ['to have been', 'to be', 'to have being'],
      ['to have been planted', 'to plant', 'to be planted'],
      ['to have changed', 'to change', 'to have been changed']
    ][i],
    correctAnswer: [
      'to have melted',
      'to have started',
      'to have disappeared',
      'to have hidden',
      'to have dumped',
      'to have risen',
      'to have affected',
      'to have been',
      'to have been planted',
      'to have changed'
    ][i],
    explanation: 'Using the perfect infinitive to refer to events before the time of reporting.',
    points: 1
  }))
};

// ============================================
// BLOCK 2: GRAMMAR - PASSIVE REPORTING (CONTINUOUS INFINITIVE)
// ============================================
export const B2_U22_BLOCK2: Exercise = {
  id: `b2-u${UNIT_ID}-b2`,
  type: 'grammar',
  title: 'Passive Reporting: Continuous Infinitive',
  grammarPoint: 'Passive Reporting',
  explanation: 'Use "subject + passive verb + to be + -ing" to report actions in progress.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b2', i + 1),
    type: 'fill-blank',
    question: [
      'The temperatures are thought ___ (rise) at an alarming rate.',
      'The scientist is believed ___ (work) on a new discovery.',
      'The company is reported ___ (invest) in green energy.',
      'The sea level is estimated ___ (increase) every year.',
      'The animals are known ___ (migrate) south right now.',
      'The pollution is said ___ (cause) serious health issues.',
      'The forest is thought ___ (shrink) due to logging.',
      'They are claimed ___ (build) a new solar farm.',
      'The situation is assumed ___ (improve) slowly.',
      'The data is understood ___ (show) a clear trend.'
    ][i],
    correctAnswer: [
      'to be rising',
      'to be working',
      'to be investing',
      'to be increasing',
      'to be migrating',
      'to be causing',
      'to be shrinking',
      'to be building',
      'to be improving',
      'to be showing'
    ][i],
    explanation: 'Using the continuous infinitive to report ongoing actions.',
    points: 1
  }))
};

// ============================================
// BLOCK 3: VOCABULARY - CLIMATE CHANGE
// ============================================
export const B2_U22_BLOCK3: Exercise = {
  id: `b2-u${UNIT_ID}-b3`,
  type: 'vocabulary',
  title: 'Climate Change Vocabulary',
  explanation: 'Key terms for discussing the global environmental crisis.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b3', i + 1),
    type: 'fill-blank',
    question: [
      'The ___ (greenhouse) effect is causing global warming.',
      'Carbon ___ (emissions) must be reduced significantly.',
      'The melting of ___ (glaciers) is a serious concern.',
      'We are facing an ___ (ecological) disaster.',
      'The ___ (ozone) layer protects us from UV rays.',
      'Deforestation leads to a loss of ___ (biodiversity).',
      '___ (Extreme) weather events are becoming more frequent.',
      'The ___ (rising) sea levels threaten coastal cities.',
      '___ (Fossil) fuels are a major source of pollution.',
      'The Earth\'s ___ (atmosphere) is changing.'
    ][i],
    correctAnswer: [
      'greenhouse',
      'emissions',
      'glaciers',
      'ecological',
      'ozone',
      'biodiversity',
      'Extreme',
      'rising',
      'fossil',
      'atmosphere'
    ][i],
    explanation: 'Core terms for environmental science and news.',
    points: 1
  }))
};

// ============================================
// BLOCK 4: VOCABULARY - SUSTAINABILITY & GREEN LIVING
// ============================================
export const B2_U22_BLOCK4: Exercise = {
  id: `b2-u${UNIT_ID}-b4`,
  type: 'vocabulary',
  title: 'Sustainability',
  explanation: 'Terms for living in a way that protects the environment.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b4', i + 1),
    type: 'multiple-choice',
    question: [
      'We should use more ___ (renewable) energy.',
      'Solar panels are a great source of ___ (power).',
      '___ (Sustainable) development is key to the future.',
      'We need to reduce our carbon ___ (footprint).',
      'Organic farming is better for the ___ (soil).',
      '___ (Conservation) efforts are vital for rare species.',
      'We should recycle and ___ (reuse) materials.',
      '___ (Composting) is a good way to reduce waste.',
      'We must protect our natural ___ (resources).',
      'Eco-friendly products are becoming more ___ (popular).'
    ][i],
    options: [
      ['renewable', 'reusable', 'fixed'],
      ['power', 'strength', 'force'],
      ['Sustainable', 'Strong', 'Long'],
      ['footprint', 'step', 'mark'],
      ['soil', 'ground', 'dirt'],
      ['Conservation', 'Protection', 'Saving'],
      ['reuse', 'redo', 'remake'],
      ['Composting', 'Cleaning', 'Burning'],
      ['resources', 'tools', 'things'],
      ['popular', 'cheap', 'easy']
    ][i],
    correctAnswer: [
      'renewable',
      'power',
      'Sustainable',
      'footprint',
      'soil',
      'Conservation',
      'reuse',
      'Composting',
      'resources',
      'popular'
    ][i],
    explanation: 'Vocabulary for solutions to environmental problems.',
    points: 1
  }))
};

// ============================================
// BLOCK 5: USE OF ENGLISH - WORD FORMATION (ENVIRONMENT)
// ============================================
export const B2_U22_BLOCK5: Exercise = {
  id: `b2-u${UNIT_ID}-b5`,
  type: 'word-formation',
  title: 'Word Formation: Environmental Impact',
  explanation: 'Form words related to nature and sustainability.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b5', i + 1),
    type: 'fill-blank',
    question: [
      'The ___ (ENVIRONMENT) damage is irreversible.',
      'We need to find ___ (SUSTAIN) solutions.',
      '___ (POLLUTE) levels are high in cities.',
      'The ___ (PROTECT) of wildlife is crucial.',
      'The project was an ___ (ECOLOGY) success.',
      '___ (DEFOREST) is a major cause of CO2 rise.',
      'We are looking for ___ (RENEW) energy.',
      'The ___ (AWARE) of climate change is high.',
      'The ___ (SURVIVE) of the planet depends on us.',
      'He is a well-known ___ (CONSERVE) expert.'
    ][i],
    correctAnswer: [
      'environmental',
      'sustainable',
      'Pollution',
      'protection',
      'ecological',
      'Deforestation',
      'renewable',
      'awareness',
      'survival',
      'conservation'
    ][i],
    explanation: 'Transforming base words into environmental terms.',
    points: 1
  }))
};

// ============================================
// BLOCK 6: READING - THE FUTURE OF OUR PLANET
// ============================================
export const B2_U22_BLOCK6: Exercise = {
  id: `b2-u${UNIT_ID}-b6`,
  type: 'reading-comprehension',
  title: 'Reading: A Warning from the Poles',
  explanation: 'Read about the arctic changes and answer.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b6', i + 1),
    type: 'multiple-choice',
    question: i < 5 ? 'What is the "albedo effect"?' : 'Why is the melting of permafrost dangerous?',
    options: [['Ice reflecting sunlight back into space', 'Ice melting fast', 'The sun getting hotter', 'Ocean currents'], ['It releases methane gas', 'It makes the ground soft', 'It is cold', 'It stops fishing']][i % 2],
    correctAnswer: i < 5 ? 'Ice reflecting sunlight back into space' : 'It releases methane gas',
    explanation: 'Reading for scientific detail and consequences.',
    points: 1
  }))
};

// ============================================
// BLOCK 7: LISTENING - ENVIRONMENTAL NEWS
// ============================================
export const B2_U22_BLOCK7: Exercise = {
  id: `b2-u${UNIT_ID}-b7`,
  type: 'listening',
  title: 'Listening: New Environmental Regulations',
  explanation: 'Listen to the news report about the new climate law.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b7', i + 1),
    type: 'multiple-choice',
    question: `What is the main goal of the new law?`,
    options: ['Reduce emissions by 50%', 'Ban all cars', 'Plant more trees', 'Increase taxes'],
    correctAnswer: 'Reduce emissions by 50%',
    explanation: 'Listening for specific targets and policy details.',
    points: 1
  }))
};

// ============================================
// BLOCK 8: WRITING ANALYSIS - SCIENTIFIC REPORTS
// ============================================
export const B2_U22_BLOCK8: Exercise = {
  id: `b2-u${UNIT_ID}-b8`,
  type: 'writing-analysis',
  title: 'Writing Analysis: Reporting Scientific Findings',
  explanation: 'Choose the best phrase for a report on climate change.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b8', i + 1),
    type: 'multiple-choice',
    question: [
      'To introduce a study:',
      'To report a consensus:',
      'To describe a trend:',
      'To state a cause:',
      'To mention a limitation:',
      'To suggest an implication:',
      'To refer to data:',
      'To summarize findings:',
      'To conclude with a recommendation:',
      'To emphasize urgency:'
    ][i],
    options: [
      ['A recent study conducted by...', 'Someone looked at...', 'New info:'],
      ['It is widely accepted by the scientific community that...', 'All scientists agree.', 'Common view:'],
      ['The data indicates a steady upward trend in...', 'Things go up.', 'The line goes up.'],
      ['This phenomenon is primarily attributed to...', 'This happens because of...', 'The cause is:'],
      ['It is important to note the limitations of...', 'Small problem with the study...', 'Note:'],
      ['These findings have significant implications for...', 'This means that...', 'Impact:'],
      ['The evidence suggests that...', 'The facts show...', 'Proof:'],
      ['In summary, the results demonstrate...', 'The end is...', 'Result:'],
      ['Immediate action is required to mitigate the effects of...', 'We must act now.', 'Do this:'],
      ['It is imperative that we act before it is too late.', 'Hurry up!', 'Important!']
    ][i],
    correctAnswer: [
      'A recent study conducted by...',
      'It is widely accepted by the scientific community that...',
      'The data indicates a steady upward trend in...',
      'This phenomenon is primarily attributed to...',
      'It is important to note the limitations of...',
      'These findings have significant implications for...',
      'The evidence suggests that...',
      'In summary, the results demonstrate...',
      'Immediate action is required to mitigate the effects of...',
      'It is imperative that we act before it is too late.'
    ][i],
    explanation: 'Using formal and academic register for environmental reporting.',
    points: 1
  }))
};

// ============================================
// BLOCK 9: SPEAKING - SPECULATING ABOUT THE PLANET
// ============================================
export const B2_U22_BLOCK9: Exercise = {
  id: `b2-u${UNIT_ID}-b9`,
  type: 'speaking-analysis',
  title: 'Speaking: Speculating about Environmental Change',
  explanation: 'Identify natural ways to talk about future environmental possibilities.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b9', i + 1),
    type: 'multiple-choice',
    question: `How would you naturally speculate about the arctic ice?`,
    options: ['If current trends continue, the ice might disappear entirely.', 'The ice will go.', 'Maybe no ice soon.', 'Ice is melting.'],
    correctAnswer: 'If current trends continue, the ice might disappear entirely.',
    explanation: 'Using conditional structures for speculation.',
    points: 1
  }))
};

// ============================================
// BLOCK 10: MIXED REVIEW
// ============================================
export const B2_U22_BLOCK10: Exercise = {
  id: `b2-u${UNIT_ID}-b10`,
  type: 'grammar',
  title: 'Mixed Review Unit 22',
  explanation: 'Consolidation of Passive Reporting and Environment Vocabulary.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b10', i + 1),
    type: 'multiple-choice',
    question: i < 5 ? 'The company is reported ___ (invest) in solar.' : 'It is believed ___ (be) a mistake.',
    options: i < 5 ? ['to be investing', 'to invest', 'investing'] : ['to have been', 'to be', 'to being'],
    correctAnswer: i < 5 ? 'to be investing' : 'to have been',
    explanation: 'Review of advanced reporting structures.',
    points: 1
  }))
};

export const B2_UNIT_22 = createB2Unit(
  'b2-u22',
  'Climate Change',
  'Master advanced passive reporting while exploring the critical issues of climate change and sustainability.',
  ['Use perfect and continuous infinitives in passive reporting', 'Understand key vocabulary for climate change and sustainability', 'Analyze and write scientific reports on environmental findings'],
  [
    B2_U22_BLOCK1, B2_U22_BLOCK2, B2_U22_BLOCK3, B2_U22_BLOCK4, B2_U22_BLOCK5,
    B2_U22_BLOCK6, B2_U22_BLOCK7, B2_U22_BLOCK8, B2_U22_BLOCK9, B2_U22_BLOCK10
  ]
);
