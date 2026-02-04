import { Exercise } from '../exercise-types';
import { createB2Unit, genId } from './utils';

const UNIT_ID = 47;

// ============================================
// BLOCK 1: GRAMMAR - IT-CLEFT SENTENCES
// ============================================
export const B2_U47_BLOCK1: Exercise = {
  id: `b2-u${UNIT_ID}-b1`,
  type: 'grammar',
  title: 'Emphasis: It is... that',
  grammarPoint: 'Cleft Sentences',
  explanation: 'Use "It + be + emphasized part + that/who" to focus on a specific piece of information.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b1', i + 1),
    type: 'fill-blank',
    question: [
      'It was the professor ___ (who/that) inspired me.',
      'It is the methodology ___ (that) we need to improve.',
      'It was in 1995 ___ (that) the study was first published.',
      'It is her dedication ___ (that) makes her a great researcher.',
      'It was the lack of funding ___ (that) delayed the project.',
      'It is through education ___ (that) we can change society.',
      'It was John ___ (who) found the error in the data.',
      'It is this discovery ___ (that) will revolutionize the field.',
      'It was during the meeting ___ (that) the decision was made.',
      'It is their teamwork ___ (that) led to the breakthrough.'
    ][i],
    correctAnswer: [
      'who',
      'that',
      'that',
      'that',
      'that',
      'that',
      'who',
      'that',
      'that',
      'that'
    ][i],
    explanation: 'Using It-clefts to highlight the subject, object, or circumstance.',
    points: 1
  }))
};

// ============================================
// BLOCK 2: GRAMMAR - WH-CLEFT SENTENCES
// ============================================
export const B2_U47_BLOCK2: Exercise = {
  id: `b2-u${UNIT_ID}-b2`,
  type: 'grammar',
  title: 'Emphasis: What... is',
  grammarPoint: 'Cleft Sentences',
  explanation: 'Use "What + clause + be + emphasized part" to focus on a specific action or idea.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b2', i + 1),
    type: 'fill-blank',
    question: [
      'What we need ___ (is) more data.',
      'What she wants to study ___ (is) marine biology.',
      'What happened ___ (was) that the system crashed.',
      'What I enjoy most ___ (is) conducting experiments.',
      'What the results show ___ (is) a clear trend.',
      'What they lack ___ (is) enough resources.',
      'What impressed me ___ (was) her clarity of thought.',
      'What he did ___ (was) to rewrite the whole essay.',
      'What we are looking for ___ (is) a sustainable solution.',
      'What surprised everyone ___ (was) the simplicity of the solution.'
    ][i],
    correctAnswer: [
      'is',
      'is',
      'was',
      'is',
      'is',
      'is',
      'was',
      'was',
      'is',
      'was'
    ][i],
    explanation: 'Using Wh-clefts to summarize and emphasize a point.',
    points: 1
  }))
};

// ============================================
// BLOCK 3: VOCABULARY - ACADEMIC STRUCTURE
// ============================================
export const B2_U47_BLOCK3: Exercise = {
  id: `b2-u${UNIT_ID}-b3`,
  type: 'vocabulary',
  title: 'Parts of a Report',
  explanation: 'Vocabulary for the different sections and elements of an academic paper or report.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b3', i + 1),
    type: 'fill-blank',
    question: [
      'The ___ (abstract) provides a brief summary of the study.',
      'We included a detailed ___ (methodology) section.',
      'The ___ (appendix) contains supplementary data.',
      'Each ___ (citation) must follow the APA style.',
      'The ___ (bibliography) lists all the sources used.',
      'We discussed the findings in the ___ (conclusion).',
      'The ___ (introduction) outlines the research goals.',
      'Data is presented in ___ (tables) and figures.',
      'The ___ (acknowledgments) section thanks the sponsors.',
      'A ___ (glossary) explains the technical terms.'
    ][i],
    correctAnswer: [
      'abstract',
      'methodology',
      'appendix',
      'citation',
      'bibliography',
      'conclusion',
      'introduction',
      'tables',
      'acknowledgments',
      'glossary'
    ][i],
    explanation: 'Core terminology for academic writing structure.',
    points: 1
  }))
};

// ============================================
// BLOCK 4: VOCABULARY - ACADEMIC STYLE & REGISTER
// ============================================
export const B2_U47_BLOCK4: Exercise = {
  id: `b2-u${UNIT_ID}-b4`,
  type: 'vocabulary',
  title: 'Precision and Clarity',
  explanation: 'Choosing the most appropriate formal verbs and phrases for academic writing.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b4', i + 1),
    type: 'multiple-choice',
    question: [
      'The study was ___ (conducted) over six months.',
      'We need to ___ (verify) the results.',
      'The data ___ (suggests) that the trend is upward.',
      'They ___ (implemented) a new strategy.',
      'The report ___ (outlines) the main issues.',
      'We should ___ (examine) the evidence.',
      'The results were ___ (analyzed) using software.',
      'He ___ (advocates) for a change in policy.',
      'The findings are ___ (consistent) with previous research.',
      'The problem was ___ (addressed) in the meeting.'
    ][i],
    options: [
      ['conducted', 'done', 'made'],
      ['verify', 'check', 'look'],
      ['suggests', 'says', 'tells'],
      ['implemented', 'started', 'did'],
      ['outlines', 'shows', 'lists'],
      ['examine', 'see', 'watch'],
      ['analyzed', 'looked at', 'thought about'],
      ['advocates', 'asks', 'wants'],
      ['consistent', 'same', 'good'],
      ['addressed', 'talked about', 'fixed']
    ][i],
    correctAnswer: [
      'conducted',
      'verify',
      'suggests',
      'implemented',
      'outlines',
      'examine',
      'analyzed',
      'advocates',
      'consistent',
      'addressed'
    ][i],
    explanation: 'Using formal academic verbs instead of common informal ones.',
    points: 1
  }))
};

// ============================================
// BLOCK 5: USE OF ENGLISH - TRANSFORMATIONS (CLEFT)
// ============================================
export const B2_U47_BLOCK5: Exercise = {
  id: `b2-u${UNIT_ID}-b5`,
  type: 'grammar',
  title: 'Emphasis Transformations',
  explanation: 'Rewriting sentences using cleft structures to emphasize specific parts.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b5', i + 1),
    type: 'fill-blank',
    question: [
      'I need a coffee. -> What I ___ a coffee.',
      'The cost is the problem. -> It is the ___ the problem.',
      'She discovered the cure. -> It was ___ discovered the cure.',
      'We want results. -> What ___ results.',
      'The weather was the cause. -> It was the ___ the cause.',
      'He hates the noise. -> What ___ the noise.',
      'They moved to London in June. -> It was in ___ to London.',
      'I admire her courage. -> What ___ her courage.',
      'She is working on a new project. -> What ___ a new project.',
      'The system failed because of a bug. -> It was a bug ___ fail.'
    ][i],
    correctAnswer: [
      'need is',
      'cost that is',
      'she who',
      'we want is',
      'weather that was',
      'he hates is',
      'June that they moved',
      'I admire is',
      'she is working on is',
      'that made the system'
    ][i],
    explanation: 'Mastering the transformation of standard sentences into emphatic cleft sentences.',
    points: 1
  }))
};

// ============================================
// BLOCK 6: READING - A FORMAL REPORT
// ============================================
export const B2_U47_BLOCK6: Exercise = {
  id: `b2-u${UNIT_ID}-b6`,
  type: 'reading-comprehension',
  title: 'Reading: Report on Sustainable Energy',
  explanation: 'Read an excerpt from a formal report and answer questions about its structure and tone.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b6', i + 1),
    type: 'multiple-choice',
    question: i < 5 ? 'What is the purpose of the "Executive Summary"?' : 'How is the data typically presented in this type of report?',
    options: [['To give a high-level overview for busy readers', 'To list all references', 'To thank the team'], ['Using charts, graphs, and bullet points', 'In long stories', 'Without any numbers']][i % 2],
    correctAnswer: i < 5 ? 'To give a high-level overview for busy readers' : 'Using charts, graphs, and bullet points',
    explanation: 'Identifying the conventions of formal report writing.',
    points: 1
  }))
};

// ============================================
// BLOCK 7: LISTENING - ACADEMIC FEEDBACK
// ============================================
export const B2_U47_BLOCK7: Exercise = {
  id: `b2-u${UNIT_ID}-b7`,
  type: 'listening',
  title: 'Listening: Feedback on a Dissertation',
  explanation: 'Listen to a supervisor giving feedback to a student about their writing style.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b7', i + 1),
    type: 'multiple-choice',
    question: `What is the supervisor's main criticism of the student's draft?`,
    options: ['The tone is too informal and lacks precision', 'The fonts are too small', 'There are too many pictures', 'It is too short'],
    correctAnswer: 'The tone is too informal and lacks precision',
    explanation: 'Identifying common academic writing errors from an oral critique.',
    points: 1
  }))
};

// ============================================
// BLOCK 8: WRITING ANALYSIS - DATA COMMENTARY
// ============================================
export const B2_U47_BLOCK8: Exercise = {
  id: `b2-u${UNIT_ID}-b8`,
  type: 'writing-analysis',
  title: 'Writing Analysis: Describing Trends',
  explanation: 'Identify the most accurate and formal way to describe data trends.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b8', i + 1),
    type: 'multiple-choice',
    question: [
      'To describe a sharp increase:',
      'To describe a gradual decrease:',
      'To describe fluctuating data:',
      'To mention an outlier:',
      'To introduce a concluding thought:',
      'To use a formal verb for "thinking about":',
      'To highlight a significant point:',
      'To express a causal relationship:',
      'To describe a peak:',
      'To use a cautious tone for findings:'
    ][i],
    options: [
      ['There was a dramatic surge in...', 'It went up quickly.', 'A big rise.'],
      ['The numbers showed a steady decline.', 'It went down a bit.', 'Slowly dropping.'],
      ['The results tended to fluctuate during the period.', 'It went up and down.', 'Wavy data.'],
      ['With the exception of one data point, ...', 'Except for one, ...', 'One was weird.'],
      ['In conclusion, it is apparent that...', 'So we think...', 'To end:'],
      ['Consideration must be given to...', 'We should think about...', 'Think of this:'],
      ['Of particular significance is...', 'One big thing is...', 'Pay attention to:'],
      ['This can be attributed to...', 'This is because...', 'It happened due to:'],
      ['The figures reached a peak in 2021.', 'It was highest in 2021.', 'Top in 2021.'],
      ['The evidence suggests that...', 'The evidence shows...', 'It is definitely true.']
    ][i],
    correctAnswer: [
      'There was a dramatic surge in...',
      'The numbers showed a steady decline.',
      'The results tended to fluctuate during the period.',
      'With the exception of one data point, ...',
      'In conclusion, it is apparent that...',
      'Consideration must be given to...',
      'Of particular significance is...',
      'This can be attributed to...',
      'The figures reached a peak in 2021.',
      'The evidence suggests that...'
    ][i],
    explanation: 'Using sophisticated vocabulary to describe and analyze data in reports.',
    points: 1
  }))
};

// ============================================
// BLOCK 9: SPEAKING - PRESENTING DATA
// ============================================
export const B2_U47_BLOCK9: Exercise = {
  id: `b2-u${UNIT_ID}-b9`,
  type: 'speaking-analysis',
  title: 'Speaking: Giving a Presentation',
  explanation: 'How to use cleft sentences and signposting phrases in a formal talk.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b9', i + 1),
    type: 'multiple-choice',
    question: `Which phrase is best for emphasizing a key finding during a presentation?`,
    options: ['What I want to highlight is the significant drop in costs.', 'Look at this.', 'Costs went down.', 'This is important.'],
    correctAnswer: 'What I want to highlight is the significant drop in costs.',
    explanation: 'Using Wh-clefts to direct the audience\'s attention during a talk.',
    points: 1
  }))
};

// ============================================
// BLOCK 10: MIXED REVIEW
// ============================================
export const B2_U47_BLOCK10: Exercise = {
  id: `b2-u${UNIT_ID}-b10`,
  type: 'grammar',
  title: 'Mixed Review Unit 47',
  explanation: 'Consolidation of Cleft Sentences and Academic Vocabulary.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b10', i + 1),
    type: 'multiple-choice',
    question: i < 5 ? 'It is the ___ (methodology/abstract) that we need to fix.' : 'What surprised us ___ (was/is) the speed of the results.',
    options: i < 5 ? ['methodology', 'abstract', 'citation'] : ['was', 'is', 'were'],
    correctAnswer: i < 5 ? 'methodology' : 'was',
    explanation: 'Final check of key concepts from Unit 47.',
    points: 1
  }))
};

export const B2_UNIT_47 = createB2Unit(
  'b2-u47',
  'Academic Writing & Reports',
  'Master the art of formal writing while learning to use cleft sentences for emphasis and precision in your reports.',
  ['Use It-clefts and Wh-clefts correctly for emphasis', 'Acquire vocabulary for report structures and formal register', 'Apply data commentary techniques to describe trends and findings'],
  [
    B2_U47_BLOCK1, B2_U47_BLOCK2, B2_U47_BLOCK3, B2_U47_BLOCK4, B2_U47_BLOCK5,
    B2_U47_BLOCK6, B2_U47_BLOCK7, B2_U47_BLOCK8, B2_U47_BLOCK9, B2_U47_BLOCK10
  ]
);
