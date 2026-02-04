import { Exercise } from '../exercise-types';
import { createB2Unit, genId } from './utils';

const UNIT_ID = 43;

// ============================================
// BLOCK 1: GRAMMAR - ADVANCED OBLIGATION (I)
// ============================================
export const B2_U43_BLOCK1: Exercise = {
  id: `b2-u${UNIT_ID}-b1`,
  type: 'grammar',
  title: 'Expectations and Duties',
  grammarPoint: 'Modal Obligation',
  explanation: 'Using "be to", "be supposed to", and "be due to" for formal obligations and schedules.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b1', i + 1),
    type: 'multiple-choice',
    question: [
      'The lecture ___ (be) to start at 9:00 AM.',
      'We were ___ (suppose) to submit the essay yesterday.',
      'The students ___ (be) due to graduate in June.',
      'You are ___ (not) to leave the exam room early.',
      'I ___ (suppose) to meet my tutor at noon.',
      'The results ___ (be) to be published on the website.',
      'Is the train ___ (due) to arrive soon?',
      'We ___ (not / suppose) to use calculators in this test.',
      'The president ___ (be) to visit the university.',
      'You are ___ (due) for a promotion.'
    ][i],
    options: [
      ['is', 'was', 'am'],
      ['supposed', 'supposing', 'suppose'],
      ['are', 'is', 'was'],
      ['not', 'no', 'never'],
      ['am supposed', 'suppose', 'am supposing'],
      ['are', 'is', 'was'],
      ['due', 'expected', 'coming'],
      ['aren\'t supposed', 'don\'t suppose', 'no supposed'],
      ['is', 'are', 'was'],
      ['due', 'supposed', 'must']
    ][i],
    correctAnswer: [
      'is',
      'supposed',
      'are',
      'not',
      'am supposed',
      'are',
      'due',
      'aren\'t supposed',
      'is',
      'due'
    ][i],
    explanation: 'Choosing the correct form for schedules and expected behavior.',
    points: 1
  }))
};

// ============================================
// BLOCK 2: GRAMMAR - ADVANCED OBLIGATION (II)
// ============================================
export const B2_U43_BLOCK2: Exercise = {
  id: `b2-u${UNIT_ID}-b2`,
  type: 'grammar',
  title: 'Formal Rules and Arrangements',
  grammarPoint: 'Modal Obligation',
  explanation: 'Using the "be to" structure for formal instructions and fixed future arrangements.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b2', i + 1),
    type: 'fill-blank',
    question: [
      'All students ___ (be/to) register before Friday.',
      'The candidate ___ (be/to) interviewed by the dean.',
      'No food ___ (be/to) consumed in the lab.',
      'The research ___ (be/to) completed by next year.',
      'The ceremony ___ (be/to) held in the main hall.',
      'You ___ (be/to/not) discuss the exam questions.',
      'The funds ___ (be/to) used for equipment.',
      'Who ___ (be/to) lead the discussion?',
      'The documents ___ (be/to) signed by the witness.',
      'The library ___ (be/to) closed for renovations.'
    ][i],
    correctAnswer: [
      'are to',
      'is to be',
      'is to be',
      'is to be',
      'is to be',
      'are not to',
      'are to be',
      'is to',
      'are to be',
      'is to be'
    ][i],
    explanation: 'Using "be to" for formal instructions and future events.',
    points: 1
  }))
};

// ============================================
// BLOCK 3: VOCABULARY - CAMPUS LIFE & FACILITIES
// ============================================
export const B2_U43_BLOCK3: Exercise = {
  id: `b2-u${UNIT_ID}-b3`,
  type: 'vocabulary',
  title: 'Life on Campus',
  explanation: 'Vocabulary for university buildings, services, and social life.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b3', i + 1),
    type: 'fill-blank',
    question: [
      'I live in the ___ (halls) of residence.',
      'The ___ (registrar) handles all the paperwork.',
      'We met at the student ___ (union) for coffee.',
      'The campus has a modern sports ___ (complex).',
      'I need to return these books to the ___ (library).',
      'The lecture ___ (theatre) was completely full.',
      'She is a member of the debating ___ (society).',
      'The ___ (canteen) serves food until 8 PM.',
      'The medical ___ (centre) is near the gate.',
      'I spent all afternoon in the computer ___ (lab).'
    ][i],
    correctAnswer: [
      'halls',
      'registrar',
      'union',
      'complex',
      'library',
      'theatre',
      'society',
      'canteen',
      'centre',
      'lab'
    ][i],
    explanation: 'Essential terms for university infrastructure and student life.',
    points: 1
  }))
};

// ============================================
// BLOCK 4: VOCABULARY - ACADEMIC STUDY & ASSESSMENTS
// ============================================
export const B2_U43_BLOCK4: Exercise = {
  id: `b2-u${UNIT_ID}-b4`,
  type: 'vocabulary',
  title: 'Assignments and Exams',
  explanation: 'Terms for academic tasks, grades, and the examination process.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b4', i + 1),
    type: 'multiple-choice',
    question: [
      'The ___ (deadline) for the essay is Monday.',
      'I need to ___ (hand in) my assignment.',
      'He received a high ___ (grade) for his project.',
      'We have a mid-term ___ (assessment).',
      'The professor gave us a reading ___ (list).',
      'I have to ___ (sit) an exam tomorrow.',
      'She is writing her ___ (dissertation) on AI.',
      'I need to ___ (take) notes during the lecture.',
      'Plagiarism is a serious academic ___ (offence).',
      'The course involves a lot of ___ (coursework).'
    ][i],
    options: [
      ['deadline', 'finish', 'end'],
      ['hand in', 'give in', 'put in'],
      ['grade', 'score', 'mark'],
      ['assessment', 'test', 'exam'],
      ['list', 'book', 'paper'],
      ['sit', 'do', 'make'],
      ['dissertation', 'essay', 'book'],
      ['take', 'make', 'do'],
      ['offence', 'crime', 'bad'],
      ['coursework', 'homework', 'studying']
    ][i],
    correctAnswer: [
      'deadline',
      'hand in',
      'grade',
      'assessment',
      'list',
      'sit',
      'dissertation',
      'take',
      'offence',
      'coursework'
    ][i],
    explanation: 'Vocabulary for university studies and evaluations.',
    points: 1
  }))
};

// ============================================
// BLOCK 5: USE OF ENGLISH - PHRASAL VERBS (STUDY)
// ============================================
export const B2_U43_BLOCK5: Exercise = {
  id: `b2-u${UNIT_ID}-b5`,
  type: 'vocabulary',
  title: 'Phrasal Verbs: Academic Success',
  explanation: 'Common phrasal verbs used in an educational context.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b5', i + 1),
    type: 'fill-blank',
    question: [
      'I need to ___ (catch up) on my reading.',
      'He ___ (dropped out) of university after one year.',
      'She ___ (got through) the exam without any problems.',
      'I can\'t ___ (figure out) this math problem.',
      'We need to ___ (look into) the causes of the revolution.',
      'The teacher ___ (handed out) the worksheets.',
      'I need to ___ (read up) on the subject.',
      'He ___ (fell behind) with his studies.',
      'She ___ (put off) doing her homework.',
      'We should ___ (go over) the notes again.'
    ][i],
    correctAnswer: [
      'catch up',
      'dropped out',
      'got through',
      'figure out',
      'look into',
      'handed out',
      'read up',
      'fell behind',
      'put off',
      'go over'
    ][i],
    explanation: 'Using phrasal verbs naturally to describe study habits.',
    points: 1
  }))
};

// ============================================
// BLOCK 6: READING - THE VALUE OF A DEGREE
// ============================================
export const B2_U43_BLOCK6: Exercise = {
  id: `b2-u${UNIT_ID}-b6`,
  type: 'reading-comprehension',
  title: 'Reading: Is University Still Worth It?',
  explanation: 'Read an opinion piece about the benefits and costs of higher education.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b6', i + 1),
    type: 'multiple-choice',
    question: i < 5 ? 'What is one benefit mentioned besides academic knowledge?' : 'What is the main concern for many students today?',
    options: [['Networking and social skills', 'Free food', 'Better weather'], ['Increasing student debt', 'Lack of clubs', 'Hard exams']][i % 2],
    correctAnswer: i < 5 ? 'Networking and social skills' : 'Increasing student debt',
    explanation: 'Analyzing arguments about the relevance of university education.',
    points: 1
  }))
};

// ============================================
// BLOCK 7: LISTENING - FRESHERS\' WEEK
// ============================================
export const B2_U43_BLOCK7: Exercise = {
  id: `b2-u${UNIT_ID}-b7`,
  type: 'listening',
  title: 'Listening: Surviving the First Week',
  explanation: 'Listen to a student giving advice to new arrivals during Freshers\' week.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b7', i + 1),
    type: 'multiple-choice',
    question: `What is the speaker's main advice for making friends?`,
    options: ['Join as many societies as possible', 'Stay in your room and study', 'Only talk to people from your country', 'Always buy the most expensive books'],
    correctAnswer: 'Join as many societies as possible',
    explanation: 'Listening for practical advice and social integration strategies.',
    points: 1
  }))
};

// ============================================
// BLOCK 8: WRITING ANALYSIS - EMAILING A TUTOR
// ============================================
export const B2_U43_BLOCK8: Exercise = {
  id: `b2-u${UNIT_ID}-b8`,
  type: 'writing-analysis',
  title: 'Writing Analysis: Academic Correspondence',
  explanation: 'Identify the appropriate tone and register for emailing university staff.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b8', i + 1),
    type: 'multiple-choice',
    question: [
      'Appropriate salutation for a professor:',
      'To request an extension on a deadline:',
      'To ask for a meeting:',
      'To express gratitude for feedback:',
      'To conclude a formal email:',
      'To introduce the purpose of the email:',
      'To apologize for missing a lecture:',
      'To inquire about exam results:',
      'To ask for clarification on a point:',
      'Informal (avoid) way to start:'
    ][i],
    options: [
      ['Dear Professor [Surname],', 'Hey Professor,', 'To the teacher,'],
      ['I would like to request an extension...', 'Can I have more time?', 'Essay late, okay?'],
      ['Would it be possible to schedule a meeting...?', 'Can we talk?', 'Meeting tomorrow?'],
      ['Thank you very much for your helpful comments.', 'Thanks for the notes.', 'Feedback was good.'],
      ['Yours sincerely,', 'Best,', 'See ya,'],
      ['I am writing to inquire about...', 'I want to ask...', 'Just checking...'],
      ['I would like to apologize for my absence...', 'Sorry I wasn\'t there.', 'I missed class.'],
      ['Could you please inform me when the results...?', 'When are the grades out?', 'Grades?'],
      ['Could you please clarify what you meant by...?', 'What did you mean?', 'I don\'t get it.'],
      ['Yo Prof,', 'Dear Sir,', 'Hello,']
    ][i],
    correctAnswer: [
      'Dear Professor [Surname],',
      'I would like to request an extension...',
      'Would it be possible to schedule a meeting...?',
      'Thank you very much for your helpful comments.',
      'Yours sincerely,',
      'I am writing to inquire about...',
      'I would like to apologize for my absence...',
      'Could you please inform me when the results...?',
      'Could you please clarify what you meant by...?',
      'Yo Prof,'
    ][i],
    explanation: 'Choosing the correct formal register for academic communication.',
    points: 1
  }))
};

// ============================================
// BLOCK 9: SPEAKING - SEMINAR DISCUSSIONS
// ============================================
export const B2_U43_BLOCK9: Exercise = {
  id: `b2-u${UNIT_ID}-b9`,
  type: 'speaking-analysis',
  title: 'Speaking: Participating in Seminars',
  explanation: 'How to contribute effectively to academic discussions.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b9', i + 1),
    type: 'multiple-choice',
    question: `How would you politely interrupt to ask for clarification?`,
    options: ['Sorry, could I just ask what you mean by...?', 'Stop! What?', 'I don\'t understand.', 'Wait!'],
    correctAnswer: 'Sorry, could I just ask what you mean by...?',
    explanation: 'Using polite interjection phrases in a seminar setting.',
    points: 1
  }))
};

// ============================================
// BLOCK 10: MIXED REVIEW
// ============================================
export const B2_U43_BLOCK10: Exercise = {
  id: `b2-u${UNIT_ID}-b10`,
  type: 'grammar',
  title: 'Mixed Review Unit 43',
  explanation: 'Consolidation of Advanced Obligation and University Vocabulary.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b10', i + 1),
    type: 'multiple-choice',
    question: i < 5 ? 'We are ___ (supposed/is) to bring our own laptops.' : 'The ___ (registrar/union) office is open from 9 to 5.',
    options: i < 5 ? ['supposed', 'is', 'be'] : ['registrar', 'union', 'theatre'],
    correctAnswer: i < 5 ? 'supposed' : 'registrar',
    explanation: 'Final check of key concepts from Unit 43.',
    points: 1
  }))
};

export const B2_UNIT_43 = createB2Unit(
  'b2-u43',
  'University Life & Academics',
  'Navigate the complexities of higher education while mastering advanced modal structures for obligations and arrangements.',
  ['Use "be to" and "be supposed to" correctly', 'Acquire vocabulary for university facilities and academic tasks', 'Apply formal register in academic correspondence and discussions'],
  [
    B2_U43_BLOCK1, B2_U43_BLOCK2, B2_U43_BLOCK3, B2_U43_BLOCK4, B2_U43_BLOCK5,
    B2_U43_BLOCK6, B2_U43_BLOCK7, B2_U43_BLOCK8, B2_U43_BLOCK9, B2_U43_BLOCK10
  ]
);
