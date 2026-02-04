import { Exercise } from '../exercise-types';
import { createB2Unit, genId } from './utils';

const UNIT_ID = 21;

// ============================================
// BLOCK 1: GRAMMAR - THIRD CONDITIONAL
// ============================================
export const B2_U21_BLOCK1: Exercise = {
  id: `b2-u${UNIT_ID}-b1`,
  type: 'grammar',
  title: 'Third Conditional',
  grammarPoint: 'Conditionals',
  explanation: 'Use the third conditional (If + past perfect, would have + past participle) to talk about hypothetical situations in the past.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b1', i + 1),
    type: 'multiple-choice',
    question: [
      'If I ___ (know) about the meeting, I would have attended.',
      'We ___ (not/be) late if we had taken the train.',
      'If they ___ (study) harder, they would have passed the exam.',
      'I would have called you if I ___ (have) your number.',
      'If she ___ (not/forgot) her passport, she would have traveled.',
      'We ___ (buy) the house if it had been cheaper.',
      'If you ___ (ask) me, I would have helped you.',
      'I would have been angry if he ___ (not/apologize).',
      'If we ___ (leave) earlier, we wouldn\'t have missed the bus.',
      'They ___ (win) the match if the captain had played.'
    ][i],
    options: [
      ['had known', 'knew', 'would know'],
      ['wouldn\'t have been', 'weren\'t', 'won\'t be'],
      ['had studied', 'studied', 'were studying'],
      ['had had', 'had', 'would have'],
      ['hadn\'t forgotten', 'didn\'t forget', 'not forget'],
      ['would have bought', 'bought', 'will buy'],
      ['had asked', 'asked', 'ask'],
      ['hadn\'t apologized', 'didn\'t apologize', 'not apologize'],
      ['had left', 'left', 'were leaving'],
      ['would have won', 'won', 'will win']
    ][i],
    correctAnswer: [
      'had known',
      'wouldn\'t have been',
      'had studied',
      'had had',
      'hadn\'t forgotten',
      'would have bought',
      'had asked',
      'hadn\'t apologized',
      'had left',
      'would have won'
    ][i],
    explanation: 'Using the past perfect in the if-clause and would have + past participle in the main clause.',
    points: 1
  }))
};

// ============================================
// BLOCK 2: GRAMMAR - WISH AND IF ONLY (PAST REGRETS)
// ============================================
export const B2_U21_BLOCK2: Exercise = {
  id: `b2-u${UNIT_ID}-b2`,
  type: 'grammar',
  title: 'Wish and If Only for Regrets',
  grammarPoint: 'Wish and If Only',
  explanation: 'Use "wish/if only + past perfect" to express regret about a past situation.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b2', i + 1),
    type: 'fill-blank',
    question: [
      'I wish I ___ (not/say) that to him.',
      'If only we ___ (take) a map with us.',
      'She wishes she ___ (study) medicine at university.',
      'I wish I ___ (save) more money when I was younger.',
      'If only you ___ (tell) me the truth earlier.',
      'They wish they ___ (not/sell) their old house.',
      'If only it ___ (not/rain) yesterday.',
      'He wishes he ___ (not/quit) his job.',
      'I wish I ___ (know) you were in town.',
      'If only she ___ (listen) to my advice.'
    ][i],
    correctAnswer: [
      'hadn\'t said',
      'had taken',
      'had studied',
      'had saved',
      'had told',
      'hadn\'t sold',
      'hadn\'t rained',
      'hadn\'t quit',
      'had known',
      'had listened'
    ][i],
    explanation: 'Using the past perfect after wish/if only to refer to the past.',
    points: 1
  }))
};

// ============================================
// BLOCK 3: VOCABULARY - SOCIAL ISSUES
// ============================================
export const B2_U21_BLOCK3: Exercise = {
  id: `b2-u${UNIT_ID}-b3`,
  type: 'vocabulary',
  title: 'Global Social Issues',
  explanation: 'Vocabulary for discussing problems in society.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b3', i + 1),
    type: 'fill-blank',
    question: [
      '___ (Poverty) is a major issue in many developing countries.',
      'We need to combat ___ (inequality) in the workplace.',
      '___ (Homelessness) has increased in big cities.',
      'The government is tackling ___ (unemployment) with new schemes.',
      '___ (Discrimination) based on gender is illegal.',
      'Access to ___ (education) should be a universal right.',
      'The ___ (healthcare) system is under a lot of pressure.',
      '___ (Corruption) is undermining the country\'s economy.',
      'We must protect the ___ (environment) for future generations.',
      '___ (Migration) is a complex and sensitive topic.'
    ][i],
    correctAnswer: [
      'Poverty',
      'inequality',
      'Homelessness',
      'unemployment',
      'Discrimination',
      'education',
      'healthcare',
      'Corruption',
      'environment',
      'Migration'
    ][i],
    explanation: 'Common terms for societal challenges.',
    points: 1
  }))
};

// ============================================
// BLOCK 4: VOCABULARY - SOCIAL ACTIVISM & SOLUTIONS
// ============================================
export const B2_U21_BLOCK4: Exercise = {
  id: `b2-u${UNIT_ID}-b4`,
  type: 'vocabulary',
  title: 'Social Activism',
  explanation: 'Terms for working towards positive change in society.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b4', i + 1),
    type: 'multiple-choice',
    question: [
      'She is a passionate ___ (activist) for human rights.',
      'We joined a ___ (protest) against the new law.',
      'The charity ___ (raised) thousands of dollars for the cause.',
      'We need to raise ___ (awareness) about mental health.',
      'He works as a ___ (volunteer) at the local shelter.',
      'The ___ (campaign) aims to reduce plastic waste.',
      'We should ___ (advocate) for better social policies.',
      'They signed a ___ (petition) to save the park.',
      'The non-profit ___ (organization) helps refugees.',
      'We can all make a ___ (difference) in our community.'
    ][i],
    options: [
      ['activist', 'worker', 'leader'],
      ['protest', 'meeting', 'party'],
      ['raised', 'won', 'took'],
      ['awareness', 'knowledge', 'news'],
      ['volunteer', 'staff', 'boss'],
      ['campaign', 'battle', 'war'],
      ['advocate', 'talk', 'tell'],
      ['petition', 'paper', 'letter'],
      ['organization', 'group', 'club'],
      ['difference', 'change', 'move']
    ][i],
    correctAnswer: [
      'activist',
      'protest',
      'raised',
      'awareness',
      'volunteer',
      'campaign',
      'advocate',
      'petition',
      'organization',
      'difference'
    ][i],
    explanation: 'Vocabulary for social engagement and activism.',
    points: 1
  }))
};

// ============================================
// BLOCK 5: USE OF ENGLISH - WORD FORMATION (SOCIAL)
// ============================================
export const B2_U21_BLOCK5: Exercise = {
  id: `b2-u${UNIT_ID}-b5`,
  type: 'word-formation',
  title: 'Word Formation: Society and Change',
  explanation: 'Form words related to social issues.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b5', i + 1),
    type: 'fill-blank',
    question: [
      'The ___ (EQUAL) of opportunity is vital.',
      '___ (POOR) is a systemic problem.',
      'The ___ (JUST) system needs reform.',
      'We must fight against ___ (RACIAL) and bias.',
      'His ___ (GENEROUS) towards the charity was touching.',
      'The ___ (SOLVE) to homelessness is complex.',
      'She is a very ___ (INFLUENCE) activist.',
      'The ___ (CONSTRUCT) of new housing is a priority.',
      'He showed great ___ (COMPASSIONATE) for the victims.',
      'The ___ (AWARE) of the issue is growing.'
    ][i],
    correctAnswer: [
      'equality',
      'poverty',
      'justice',
      'racism',
      'generosity',
      'solution',
      'influential',
      'construction',
      'compassion',
      'awareness'
    ][i],
    explanation: 'Suffixes and transformations for abstract social nouns.',
    points: 1
  }))
};

// ============================================
// BLOCK 6: READING - THE ROLE OF CHARITY
// ============================================
export const B2_U21_BLOCK6: Exercise = {
  id: `b2-u${UNIT_ID}-b6`,
  type: 'reading-comprehension',
  title: 'Reading: Can Charity Solve Poverty?',
  explanation: 'Read the article about the impact of NGOs and answer.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b6', i + 1),
    type: 'multiple-choice',
    question: i < 5 ? 'What is the main criticism of some charities?' : 'What is "sustainable development"?',
    options: [['They only provide short-term fixes', 'They are too big', 'They are too fast', 'They are free'], ['Growth that doesn\'t harm future needs', 'Making lots of money fast', 'Building big factories', 'Giving away free food']][i % 2],
    correctAnswer: i < 5 ? 'They only provide short-term fixes' : 'Growth that doesn\'t harm future needs',
    explanation: 'Analyzing complex social arguments in text.',
    points: 1
  }))
};

// ============================================
// BLOCK 7: LISTENING - AN ACTIVIST SPEECH
// ============================================
export const B2_U21_BLOCK7: Exercise = {
  id: `b2-u${UNIT_ID}-b7`,
  type: 'listening',
  title: 'Listening: A Call to Action',
  explanation: 'Listen to the speech and identify the speaker\'s main goal.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b7', i + 1),
    type: 'multiple-choice',
    question: `What is the speaker asking people to do?`,
    options: ['Sign a petition', 'Donate money', 'Join a march', 'Call their representative'],
    correctAnswer: 'Sign a petition',
    explanation: 'Listening for the main purpose of a persuasive talk.',
    points: 1
  }))
};

// ============================================
// BLOCK 8: WRITING ANALYSIS - LETTERS OF COMPLAINT
// ============================================
export const B2_U21_BLOCK8: Exercise = {
  id: `b2-u${UNIT_ID}-b8`,
  type: 'writing-analysis',
  title: 'Writing Analysis: Formal Complaints about Social Issues',
  explanation: 'Choose the best phrase for a letter of complaint to a local council.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b8', i + 1),
    type: 'multiple-choice',
    question: [
      'To state the reason for writing:',
      'To describe the problem:',
      'To express disappointment:',
      'To mention previous attempts to fix it:',
      'To state the impact on the community:',
      'To request an immediate action:',
      'To suggest a solution:',
      'To set a deadline for a response:',
      'To close firmly but politely:',
      'To mention potential further action:'
    ][i],
    options: [
      ['I am writing to express my strong dissatisfaction with...', 'I am angry about...', 'Look at this problem:'],
      ['The lack of affordable housing is a serious concern.', 'Houses are expensive.', 'Issue:'],
      ['I was deeply disappointed to learn that...', 'I am sad.', 'Not happy:'],
      ['Despite several previous complaints, nothing has changed.', 'I told you before.', 'Old news:'],
      ['This situation is negatively affecting the local residents.', 'People are suffering.', 'Bad for all:'],
      ['I urge you to take immediate action regarding...', 'Fix it now!', 'Action:'],
      ['A possible solution would be to...', 'Maybe do this.', 'Fix:'],
      ['I look forward to receiving your response within 14 days.', 'Tell me in 2 weeks.', 'Date:'],
      ['Yours faithfully,', 'Bye.', 'See ya.'],
      ['If no action is taken, I will be forced to take further steps.', 'I will tell others.', 'Threat:']
    ][i],
    correctAnswer: [
      'I am writing to express my strong dissatisfaction with...',
      'The lack of affordable housing is a serious concern.',
      'I was deeply disappointed to learn that...',
      'Despite several previous complaints, nothing has changed.',
      'This situation is negatively affecting the local residents.',
      'I urge you to take immediate action regarding...',
      'A possible solution would be to...',
      'I look forward to receiving your response within 14 days.',
      'Yours faithfully,',
      'If no action is taken, I will be forced to take further steps.'
    ][i],
    explanation: 'Using appropriate formal tone and structures for complaints.',
    points: 1
  }))
};

// ============================================
// BLOCK 9: SPEAKING - EXPRESSING REGRET
// ============================================
export const B2_U21_BLOCK9: Exercise = {
  id: `b2-u${UNIT_ID}-b9`,
  type: 'speaking-analysis',
  title: 'Speaking: Talking about Mistakes',
  explanation: 'Identify natural ways to express regret in conversation.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b9', i + 1),
    type: 'multiple-choice',
    question: `How would you naturally express regret about a past decision?`,
    options: ['In hindsight, I should have done it differently.', 'I am sorry.', 'I did it wrong.', 'Next time I do better.'],
    correctAnswer: 'In hindsight, I should have done it differently.',
    explanation: 'Using idiomatic and advanced expressions for regret.',
    points: 1
  }))
};

// ============================================
// BLOCK 10: MIXED REVIEW
// ============================================
export const B2_U21_BLOCK10: Exercise = {
  id: `b2-u${UNIT_ID}-b10`,
  type: 'grammar',
  title: 'Mixed Review Unit 21',
  explanation: 'Consolidation of Third Conditional and Regrets.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b10', i + 1),
    type: 'multiple-choice',
    question: i < 5 ? 'If I ___ (be) there, I would have seen it.' : 'I wish I ___ (not/buy) this phone.',
    options: i < 5 ? ['had been', 'was', 'were'] : ['hadn\'t bought', 'didn\'t buy', 'not buy'],
    correctAnswer: i < 5 ? 'had been' : 'hadn\'t bought',
    explanation: 'Review of past hypothetical structures.',
    points: 1
  }))
};

export const B2_UNIT_21 = createB2Unit(
  'b2-u21',
  'Third Conditional & Regrets',
  'Master the third conditional and expressions of regret while exploring important social issues.',
  ['Use the third conditional for past hypothetical situations', 'Use wish and if only to express past regrets', 'Identify and use vocabulary related to social issues and activism'],
  [
    B2_U21_BLOCK1, B2_U21_BLOCK2, B2_U21_BLOCK3, B2_U21_BLOCK4, B2_U21_BLOCK5,
    B2_U21_BLOCK6, B2_U21_BLOCK7, B2_U21_BLOCK8, B2_U21_BLOCK9, B2_U21_BLOCK10
  ]
);
