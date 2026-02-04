import { Exercise } from '../exercise-types';
import { createB2Unit, genId } from './utils';

const UNIT_ID = 46;

// ============================================
// BLOCK 1: GRAMMAR - MIXED CONDITIONALS (I)
// ============================================
export const B2_U46_BLOCK1: Exercise = {
  id: `b2-u${UNIT_ID}-b1`,
  type: 'grammar',
  title: 'Past Action, Present Result',
  grammarPoint: 'Mixed Conditionals',
  explanation: 'If + past perfect, would + infinitive. Used to describe how a past action affects the present.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b1', i + 1),
    type: 'fill-blank',
    question: [
      'If I ___ (study) harder, I would have a better job now.',
      'If she ___ (take) the medication, she would feel better today.',
      'If they ___ (not / lose) the map, they wouldn\'t be lost now.',
      'If he ___ (win) the lottery, he would be rich now.',
      'If we ___ (book) earlier, we would be staying in a better hotel.',
      'If I ___ (not / miss) the bus, I would be at work now.',
      'If they ___ (listen) to the advice, they wouldn\'t be in trouble now.',
      'If she ___ (learn) to swim, she would be with us in the pool.',
      'If you ___ (save) more money, you would be able to afford this.',
      'If I ___ (not / eat) so much, I wouldn\'t feel sick now.'
    ][i],
    correctAnswer: [
      'had studied',
      'had taken',
      'hadn\'t lost',
      'had won',
      'had booked',
      'hadn\'t missed',
      'had listened',
      'had learned',
      'had saved',
      'hadn\'t eaten'
    ][i],
    explanation: 'Linking past events to present consequences.',
    points: 1
  }))
};

// ============================================
// BLOCK 2: GRAMMAR - MIXED CONDITIONALS (II)
// ============================================
export const B2_U46_BLOCK2: Exercise = {
  id: `b2-u${UNIT_ID}-b2`,
  type: 'grammar',
  title: 'Present State, Past Result',
  grammarPoint: 'Mixed Conditionals',
  explanation: 'If + past simple, would + have + past participle. Used to describe how an ongoing state would have affected a past event.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b2', i + 1),
    type: 'fill-blank',
    question: [
      'If I ___ (be) taller, I would have joined the basketball team.',
      'If she ___ (speak) French, she would have translated the document.',
      'If they ___ (not / be) so lazy, they would have finished the project.',
      'If he ___ (know) the truth, he would have acted differently.',
      'If we ___ (be) rich, we would have bought that house.',
      'If I ___ (not / have) a headache, I would have gone to the party.',
      'If they ___ (be) more careful, the accident wouldn\'t have happened.',
      'If she ___ (not / be) so shy, she would have spoken to him.',
      'If you ___ (be) my friend, you would have helped me.',
      'If I ___ (speak) better English, I would have got the job.'
    ][i],
    correctAnswer: [
      'were',
      'spoke',
      'weren\'t',
      'knew',
      'were',
      'didn\'t have',
      'were',
      'weren\'t',
      'were',
      'spoke'
    ][i],
    explanation: 'Linking an ongoing state to a hypothetical past result.',
    points: 1
  }))
};

// ============================================
// BLOCK 3: VOCABULARY - COGNITIVE PROCESSES
// ============================================
export const B2_U46_BLOCK3: Exercise = {
  id: `b2-u${UNIT_ID}-b3`,
  type: 'vocabulary',
  title: 'The Working Mind',
  explanation: 'Vocabulary for memory, attention, and decision-making.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b3', i + 1),
    type: 'fill-blank',
    question: [
      'He has a very ___ (retentive) memory.',
      'We need to avoid cognitive ___ (biases) when making decisions.',
      'The ___ (subconscious) mind plays a big role in behavior.',
      'I had a sudden ___ (insight) into the problem.',
      'She has a short ___ (attention) span.',
      'Memory ___ (retrieval) becomes harder with age.',
      'We tend to ___ (rationalize) our bad choices.',
      'The brain is capable of great ___ (plasticity).',
      'He suffers from ___ (amnesia) after the accident.',
      'She is a very ___ (perceptive) person.'
    ][i],
    correctAnswer: [
      'retentive',
      'biases',
      'subconscious',
      'insight',
      'attention',
      'retrieval',
      'rationalize',
      'plasticity',
      'amnesia',
      'perceptive'
    ][i],
    explanation: 'Core terms for psychological and cognitive functions.',
    points: 1
  }))
};

// ============================================
// BLOCK 4: VOCABULARY - EMOTIONAL INTELLIGENCE
// ============================================
export const B2_U46_BLOCK4: Exercise = {
  id: `b2-u${UNIT_ID}-b4`,
  type: 'vocabulary',
  title: 'Empathy and Emotion',
  explanation: 'Terms for understanding and managing emotions in ourselves and others.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b4', i + 1),
    type: 'multiple-choice',
    question: [
      'She has high emotional ___ (intelligence).',
      'We should show ___ (empathy) towards others.',
      'He is struggling with low self-___ (esteem).',
      'She is very ___ (resilient) in the face of failure.',
      'The ___ (nurture) vs. nature debate is ongoing.',
      'He has a ___ (temperamental) personality.',
      'We need to manage our ___ (stress) levels.',
      'She felt a sense of ___ (fulfillment) after the task.',
      'He is prone to ___ (anxiety) in social situations.',
      'The therapy helped him improve his ___ (well-being).'
    ][i],
    options: [
      ['intelligence', 'smartness', 'ability'],
      ['empathy', 'sympathy', 'kindness'],
      ['esteem', 'value', 'price'],
      ['resilient', 'strong', 'tough'],
      ['nurture', 'family', 'school'],
      ['temperamental', 'angry', 'moody'],
      ['stress', 'pressure', 'hard'],
      ['fulfillment', 'happy', 'good'],
      ['anxiety', 'fear', 'worry'],
      ['well-being', 'health', 'life']
    ][i],
    correctAnswer: [
      'intelligence',
      'empathy',
      'esteem',
      'resilient',
      'nurture',
      'temperamental',
      'stress',
      'fulfillment',
      'anxiety',
      'well-being'
    ][i],
    explanation: 'Vocabulary for emotional and personality traits.',
    points: 1
  }))
};

// ============================================
// BLOCK 5: USE OF ENGLISH - WORD FORMATION
// ============================================
export const B2_U46_BLOCK5: Exercise = {
  id: `b2-u${UNIT_ID}-b5`,
  type: 'word-formation',
  title: 'Word Formation: Human Behavior',
  explanation: 'Form nouns, adjectives, and verbs related to psychology.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b5', i + 1),
    type: 'fill-blank',
    question: [
      'The study of ___ (BEHAVE) is fascinating.',
      'He is a very ___ (SENSITIVE) person.',
      'We need to understand the ___ (PSYCHOLOGY) impact.',
      'She showed great ___ (DETERMINE).',
      'His ___ (REACT) was quite unexpected.',
      'The child is very ___ (OBEY).',
      'We need to ___ (STIMULATE) his curiosity.',
      'The ___ (AWARE) of mental health is growing.',
      'He is a ___ (RESEARCH) in the field of memory.',
      'The results were ___ (SIGNIFY).'
    ][i],
    correctAnswer: [
      'behavior',
      'sensitive',
      'psychological',
      'determination',
      'reaction',
      'obedient',
      'stimulate',
      'awareness',
      'researcher',
      'significant'
    ][i],
    explanation: 'Transforming root words into psychological and behavioral terms.',
    points: 1
  }))
};

// ============================================
// BLOCK 6: READING - COGNITIVE BIASES
// ============================================
export const B2_U46_BLOCK6: Exercise = {
  id: `b2-u${UNIT_ID}-b6`,
  type: 'reading-comprehension',
  title: 'Reading: Why Our Brains Make Mistakes',
  explanation: 'Read about common cognitive biases like the "Confirmation Bias" and the "Halo Effect".',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b6', i + 1),
    type: 'multiple-choice',
    question: i < 5 ? 'What is "Confirmation Bias"?' : 'What is the "Halo Effect"?',
    options: [['The tendency to favor information that confirms our beliefs', 'Changing our mind easily', 'Ignoring all news'], ['The tendency for an impression in one area to influence another', 'Seeing actual halos', 'Being very nice to everyone']][i % 2],
    correctAnswer: i < 5 ? 'The tendency to favor information that confirms our beliefs' : 'The tendency for an impression in one area to influence another',
    explanation: 'Understanding common psychological shortcuts and errors.',
    points: 1
  }))
};

// ============================================
// BLOCK 7: LISTENING - AN INTERVIEW WITH A THERAPIST
// ============================================
export const B2_U46_BLOCK7: Exercise = {
  id: `b2-u${UNIT_ID}-b7`,
  type: 'listening',
  title: 'Listening: The Power of Resilience',
  explanation: 'Listen to a therapist discussing how people can build mental resilience.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b7', i + 1),
    type: 'multiple-choice',
    question: `What is one strategy mentioned for building resilience?`,
    options: ['Maintaining a positive social network', 'Avoiding all challenges', 'Working more hours', 'Buying new things'],
    correctAnswer: 'Maintaining a positive social network',
    explanation: 'Identifying practical psychological advice from an interview.',
    points: 1
  }))
};

// ============================================
// BLOCK 8: WRITING ANALYSIS - PSYCHOLOGY REPORTS
// ============================================
export const B2_U42_BLOCK8: Exercise = {
  id: `b2-u${UNIT_ID}-b8`,
  type: 'writing-analysis',
  title: 'Writing Analysis: Describing Case Studies',
  explanation: 'Identify the best way to report behavioral observations objectively.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b8', i + 1),
    type: 'multiple-choice',
    question: [
      'To describe a patient\'s background:',
      'To report a specific observation:',
      'To suggest a possible cause:',
      'To use a formal phrase for "it seems":',
      'To conclude a case study:',
      'To highlight a change in behavior:',
      'To avoid judgmental language:',
      'To describe a treatment plan:',
      'To reference a psychological theory:',
      'To use a precise verb for "showing":'
    ][i],
    options: [
      ['The subject has a history of...', 'He used to...', 'Before this, he:'],
      ['It was noted that the subject displayed...', 'He did a weird thing.', 'I saw him:'],
      ['The behavior may be attributed to...', 'It\'s because of...', 'The reason is:'],
      ['It appears that...', 'I think...', 'It looks like:'],
      ['Overall, the findings suggest a need for...', 'So he is...', 'Last thoughts:'],
      ['There was a marked improvement in...', 'He got better.', 'Things changed.'],
      ['The subject exhibited challenging behavior.', 'The subject was bad.', 'He was annoying.'],
      ['The recommended intervention involves...', 'We should do...', 'The plan is:'],
      ['This aligns with Maslow\'s hierarchy of...', 'Maslow said...', 'Look at Maslow:'],
      ['The subject manifested symptoms of...', 'He had...', 'He showed...']
    ][i],
    correctAnswer: [
      'The subject has a history of...',
      'It was noted that the subject displayed...',
      'The behavior may be attributed to...',
      'It appears that...',
      'Overall, the findings suggest a need for...',
      'There was a marked improvement in...',
      'The subject exhibited challenging behavior.',
      'The recommended intervention involves...',
      'This aligns with Maslow\'s hierarchy of...',
      'The subject manifested symptoms of...'
    ][i],
    explanation: 'Using objective and professional register for psychological reporting.',
    points: 1
  }))
};

// ============================================
// BLOCK 9: SPEAKING - DISCUSSING HYPOTHETICALS
// ============================================
export const B2_U46_BLOCK9: Exercise = {
  id: `b2-u${UNIT_ID}-b9`,
  type: 'speaking-analysis',
  title: 'Speaking: If I had known...',
  explanation: 'How to use mixed conditionals naturally to discuss regrets and life choices.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b9', i + 1),
    type: 'multiple-choice',
    question: `How would you naturally express a regret about a past choice affecting your present?`,
    options: ['If I had studied psychology, I would be a therapist now.', 'I wish I studied psychology.', 'If I study psychology, I am a therapist.', 'I should have studied psychology.'],
    correctAnswer: 'If I had studied psychology, I would be a therapist now.',
    explanation: 'Using mixed conditionals to link past decisions to current reality.',
    points: 1
  }))
};

// ============================================
// BLOCK 10: MIXED REVIEW
// ============================================
export const B2_U46_BLOCK10: Exercise = {
  id: `b2-u${UNIT_ID}-b10`,
  type: 'grammar',
  title: 'Mixed Review Unit 46',
  explanation: 'Consolidation of Mixed Conditionals and Psychology Vocabulary.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b10', i + 1),
    type: 'multiple-choice',
    question: i < 5 ? 'If he ___ (had taken/took) the job, he would be rich now.' : 'His emotional ___ (intelligence/bias) helps him in his career.',
    options: i < 5 ? ['had taken', 'took', 'takes'] : ['intelligence', 'bias', 'amnesia'],
    correctAnswer: i < 5 ? 'had taken' : 'intelligence',
    explanation: 'Final check of key concepts from Unit 46.',
    points: 1
  }))
};

export const B2_UNIT_46 = createB2Unit(
  'b2-u46',
  'Psychology & Human Behavior',
  'Explore the depths of the human mind while mastering mixed conditionals to analyze how the past shapes our present and future.',
  ['Use mixed conditionals correctly to link past and present', 'Acquire vocabulary for cognitive processes and emotional intelligence', 'Apply objective and formal register in psychological discussions and writing'],
  [
    B2_U46_BLOCK1, B2_U46_BLOCK2, B2_U46_BLOCK3, B2_U46_BLOCK4, B2_U46_BLOCK5,
    B2_U46_BLOCK6, B2_U46_BLOCK7, B2_U42_BLOCK8, B2_U46_BLOCK9, B2_U46_BLOCK10
  ]
);
