import { createShardedToeflUnit, genId } from '../utils';

const UNIT_ID = 36;
const LEVEL = 'b1';

// SHARDS 1-2: Mock Exam - Reading Section
const s1 = {
  id: genId(LEVEL, UNIT_ID, 's1', 0),
  type: 'reading',
  title: 'Mock Exam: Reading Section I',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's1', i + 1),
    type: 'multiple-choice',
    question: `Reading Passage Question ${i + 1}: [Simulated Test Question]`,
    options: ['Option A', 'Option B', 'Option C'],
    correctAnswer: 'Option A',
    points: 1
  }))
};

const s2 = {
  id: genId(LEVEL, UNIT_ID, 's2', 0),
  type: 'reading',
  title: 'Mock Exam: Reading Section II',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's2', i + 1),
    type: 'multiple-choice',
    question: `Reading Passage Question ${i + 11}: [Simulated Test Question]`,
    options: ['Option A', 'Option B', 'Option C'],
    correctAnswer: 'Option B',
    points: 1
  }))
};

// SHARDS 3-4: Mock Exam - Listening Section
const s3 = {
  id: genId(LEVEL, UNIT_ID, 's3', 0),
  type: 'listening',
  title: 'Mock Exam: Listening Section I',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's3', i + 1),
    type: 'multiple-choice',
    question: `Listening Question ${i + 1}: [Simulated Test Question]`,
    options: ['Option A', 'Option B', 'Option C'],
    correctAnswer: 'Option A',
    points: 1
  }))
};

const s4 = {
  id: genId(LEVEL, UNIT_ID, 's4', 0),
  type: 'listening',
  title: 'Mock Exam: Listening Section II',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's4', i + 1),
    type: 'multiple-choice',
    question: `Listening Question ${i + 11}: [Simulated Test Question]`,
    options: ['Option A', 'Option B', 'Option C'],
    correctAnswer: 'Option C',
    points: 1
  }))
};

// SHARDS 5-6: Mock Exam - Speaking Section
const s5 = {
  id: genId(LEVEL, UNIT_ID, 's5', 0),
  type: 'vocabulary',
  title: 'Mock Exam: Speaking Structure I',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's5', i + 1),
    type: 'multiple-choice',
    question: [
      'What should your first sentence in Speaking Task 1 be?',
      'How many reasons should you provide in Task 1?',
      'How long do you have to prepare for Task 2?',
      'How long should your conclusion be?',
      'What is the best way to transition between reasons?',
      'In Task 3, what should you focus on?',
      'In Task 4, how do you start your response?',
      'What should you do if you run out of things to say?',
      'How can you improve your flow?',
      'What is the key to a high score in Speaking?'
    ][i],
    options: [
      ['A clear statement of your opinion', 'A greeting to the examiner', 'A summary of the question'],
      ['Two well-supported reasons', 'One very long reason', 'As many as possible'],
      ['45 seconds', '30 seconds', '15 seconds'],
      ['A short summary sentence', 'Another reason', 'There is no need for one'],
      ['Furthermore/Moreover', 'Also/And', 'Next/Second'],
      ['Synthesizing reading and listening', 'Just the reading', 'Just the lecture'],
      ['The professor explains the concept of...', 'I heard that...', 'The lecture is about...'],
      ['Summarize your main points', 'Stop talking', 'Repeat the question'],
      ['Using transition words and intonation', 'Speaking very fast', 'Using long pauses'],
      ['Clarity, organization, and timing', 'Perfect accent', 'Using "big" words only']
    ][i],
    correctAnswer: [
      'A clear statement of your opinion', 'Two well-supported reasons',
      '45 seconds', 'A short summary sentence', 'Furthermore/Moreover',
      'Synthesizing reading and listening',
      'The professor explains the concept of...', 'Summarize your main points',
      'Using transition words and intonation', 'Clarity, organization, and timing'
    ][i],
    points: 1
  }))
};

const s6 = {
  id: genId(LEVEL, UNIT_ID, 's6', 0),
  type: 'vocabulary',
  title: 'Mock Exam: Speaking Structure II',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's6', i + 1),
    type: 'multiple-choice',
    question: [
      'How do you manage your time in Speaking Task 1?',
      'How much time should you spend on each reason?',
      'In Task 2, should you spend more time on reading or listening?',
      'What is the main goal of Speaking Task 3?',
      'What should you focus on in Speaking Task 4?',
      'How can you practice for the Speaking section?',
      'What should you do before the Speaking section starts?',
      'How do you handle difficult vocabulary in a prompt?',
      'Is it okay to use "fillers" like "um" or "uh"?',
      'What is the most common mistake in the Speaking section?'
    ][i],
    options: [
      ['Keep an eye on the countdown clock', 'Don\'t look at the clock', 'Guess the time'],
      ['About 15-20 seconds each', '5 seconds each', '30 seconds each'],
      ['The listening/speaker\'s opinion', 'The reading passage', 'Both equally'],
      ['Summarize the student\'s opinion and reasons', 'Read the whole text', 'Give your own opinion'],
      ['The lecture\'s main points and examples', 'The professor\'s voice', 'The classroom setting'],
      ['Record yourself and listen for errors', 'Read books out loud only', 'Listen to music'],
      ['Take a deep breath and stay calm', 'Start talking immediately', 'Check your email'],
      ['Try to understand the context or use simpler words', 'Panic', 'Skip the question'],
      ['A few are okay, but avoid them if possible', 'Yes, use them often', 'No, never'],
      ['Not managing time correctly', 'Speaking too loudly', 'Having a quiet voice']
    ][i],
    correctAnswer: [
      'Keep an eye on the countdown clock', 'About 15-20 seconds each',
      'The listening/speaker\'s opinion',
      'Summarize the student\'s opinion and reasons',
      'The lecture\'s main points and examples',
      'Record yourself and listen for errors', 'Take a deep breath and stay calm',
      'Try to understand the context or use simpler words',
      'A few are okay, but avoid them if possible', 'Not managing time correctly'
    ][i],
    points: 1
  }))
};

// SHARDS 7-8: Mock Exam - Writing Section
const s7 = {
  id: genId(LEVEL, UNIT_ID, 's7', 0),
  type: 'vocabulary',
  title: 'Mock Exam: Writing Strategy I',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's7', i + 1),
    type: 'multiple-choice',
    question: [
      'How do you start an Integrated Writing essay?',
      'What should the first body paragraph focus on?',
      'How many points of comparison should you have?',
      'How do you introduce a point from the lecture?',
      'How do you show contrast between sources?',
      'Should you include a conclusion in the Integrated task?',
      'How do you paraphrase a sentence from the reading?',
      'How do you check your essay for errors?',
      'What is the recommended length for the Academic Discussion?',
      'How do you start an Academic Discussion response?'
    ][i],
    options: [
      ['State the relationship between the reading and the lecture', 'Give your opinion', 'Copy the title'],
      ['The first point mentioned in both sources', 'Your favorite part', 'The lecture only'],
      ['Usually three', 'One', 'Ten'],
      ['The lecturer, however, argues that...', 'I heard...', 'The talk says...'],
      ['On the other hand / However', 'Similarly / Also', 'First / Second'],
      ['It is optional but can be helpful', 'No, never', 'Yes, it is mandatory'],
      ['Use synonyms and change the sentence structure', 'Change one word', 'Swap two words'],
      ['Read it slowly and check for grammar and spelling', 'Don\'t check it', 'Ask a friend'],
      ['At least 100 words', '50 words', '500 words'],
      ['Acknowledge a previous post and state your view', 'Say "Hello"', 'Start with a joke']
    ][i],
    correctAnswer: [
      'State the relationship between the reading and the lecture',
      'The first point mentioned in both sources', 'Usually three',
      'The lecturer, however, argues that...', 'On the other hand / However',
      'It is optional but can be helpful',
      'Use synonyms and change the sentence structure',
      'Read it slowly and check for grammar and spelling', 'At least 100 words',
      'Acknowledge a previous post and state your view'
    ][i],
    points: 1
  }))
};

const s8 = {
  id: genId(LEVEL, UNIT_ID, 's8', 0),
  type: 'vocabulary',
  title: 'Mock Exam: Writing Strategy II',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's8', i + 1),
    type: 'multiple-choice',
    question: [
      'How do you support your argument in the Academic Discussion?',
      'Can you disagree with all other students in the discussion?',
      'How do you show that you are building on someone else\'s point?',
      'What should you avoid in your writing?',
      'How do you manage time in the Writing section?',
      'What is the best way to improve your writing score?',
      'How do you handle a topic you know nothing about?',
      'Should you use very complex vocabulary?',
      'How do you conclude the Academic Discussion post?',
      'What is the most important part of the Writing section?'
    ][i],
    options: [
      ['Provide personal examples or logical reasons', 'Repeat your main point', 'Use a long quote'],
      ['Yes, if you provide a clear argument', 'No, you must agree', 'Only if the teacher says so'],
      ['I agree with [Name] and would add that...', 'He said...', 'Me too...'],
      ['Repetitive words and informal language', 'Using "and"', 'Using full stops'],
      ['Plan, write, and leave time for editing', 'Just write as fast as possible', 'Stop halfway'],
      ['Practice writing under timed conditions', 'Read more comics', 'Don\'t practice'],
      ['Use general knowledge and logical reasoning', 'Give up', 'Write about something else'],
      ['Only if you are 100% sure of the meaning', 'Yes, always', 'No, never'],
      ['Summarize your main stance', 'Say "Goodbye"', 'Stop abruptly'],
      ['Clarity, development of ideas, and accuracy', 'The number of words', 'Using "big" words']
    ][i],
    correctAnswer: [
      'Provide personal examples or logical reasons',
      'Yes, if you provide a clear argument',
      'I agree with [Name] and would add that...',
      'Repetitive words and informal language',
      'Plan, write, and leave time for editing',
      'Practice writing under timed conditions',
      'Use general knowledge and logical reasoning',
      'Only if you are 100% sure of the meaning',
      'Summarize your main stance', 'Clarity, development of ideas, and accuracy'
    ][i],
    points: 1
  }))
};

// SHARDS 9-10: Test Day Strategy & Final Review
const s9 = {
  id: genId(LEVEL, UNIT_ID, 's9', 0),
  type: 'vocabulary',
  title: 'Test Day Strategy I',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's9', i + 1),
    type: 'multiple-choice',
    question: [
      'What should you bring to the test center?',
      'When should you arrive at the test center?',
      'What happens if you are late?',
      'Can you bring food or drinks into the testing room?',
      'What is provided to you for the Speaking and Listening sections?',
      'How long is the entire TOEFL iBT test?',
      'Is there a break during the test?',
      'What should you do if your computer has a problem?',
      'Can you take notes during the test?',
      'How do you receive your scores?'
    ][i],
    options: [
      ['Valid identification (e.g., passport)', 'A dictionary', 'Your own laptop'],
      ['At least 30 minutes before your start time', '5 minutes before', 'At the exact time'],
      ['You may not be allowed to test', 'Nothing happens', 'You get a discount'],
      ['No, usually not allowed', 'Yes, anything you want', 'Only water in a bottle'],
      ['A headset with a microphone', 'Nothing', 'A pen and paper only'],
      ['About 2 hours', '4 hours', '1 hour'],
      ['No, the new format has no scheduled break', 'Yes, 10 minutes', 'Yes, 30 minutes'],
      ['Raise your hand and inform the proctor', 'Try to fix it yourself', 'Start crying'],
      ['Yes, scratch paper is provided', 'No', 'Only in the Reading section'],
      ['Online through your ETS account', 'By mail only', 'They are given on the screen']
    ][i],
    correctAnswer: [
      'Valid identification (e.g., passport)',
      'At least 30 minutes before your start time',
      'You may not be allowed to test', 'No, usually not allowed',
      'A headset with a microphone', 'About 2 hours',
      'No, the new format has no scheduled break',
      'Raise your hand and inform the proctor', 'Yes, scratch paper is provided',
      'Online through your ETS account'
    ][i],
    points: 1
  }))
};

const s10 = {
  id: genId(LEVEL, UNIT_ID, 's10', 0),
  type: 'vocabulary',
  title: 'Test Day Strategy II & Mental Prep',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's10', i + 1),
    type: 'multiple-choice',
    question: [
      'How should you manage stress on test day?',
      'What is the best way to handle a question you don\'t know?',
      'Should you guess if you don\'t know the answer?',
      'How do you stay focused during the Listening section?',
      'What should you do if the room is noisy during Speaking?',
      'How do you prepare the night before the test?',
      'What is the most important thing to remember during the test?',
      'How do you keep track of time?',
      'What should you do after you finish each section?',
      'What is the best way to feel confident on test day?'
    ][i],
    options: [
      ['Deep breathing and positive thinking', 'Drinking 10 cups of coffee', 'Panicking'],
      ['Eliminate wrong answers and make an educated guess', 'Spend 10 minutes on it', 'Skip it and leave it blank'],
      ['Yes, there is no penalty for guessing', 'No, only answer if you are sure', 'Only in the Reading section'],
      ['Active listening and effective note-taking', 'Looking around the room', 'Closing your eyes'],
      ['Focus on your own microphone and task', 'Complain to other students', 'Stop speaking'],
      ['Get plenty of rest and eat a healthy meal', 'Study until 3 AM', 'Go to a party'],
      ['Manage your time effectively', 'Memorize every word', 'Be the first to finish'],
      ['Check the on-screen clock regularly', 'Bring your own alarm clock', 'Ask the proctor every minute'],
      ['Take a breath and prepare for the next one', 'Think about your mistakes', 'Leave the room'],
      ['Trust your preparation and stay positive', 'Hope for luck', 'Try to cheat']
    ][i],
    correctAnswer: [
      'Deep breathing and positive thinking',
      'Eliminate wrong answers and make an educated guess',
      'Yes, there is no penalty for guessing',
      'Active listening and effective note-taking',
      'Focus on your own microphone and task',
      'Get plenty of rest and eat a healthy meal', 'Manage your time effectively',
      'Check the on-screen clock regularly',
      'Take a breath and prepare for the next one',
      'Trust your preparation and stay positive'
    ][i],
    points: 1
  }))
};

export const B1_WEEK_36 = createShardedToeflUnit(
  'toefl-b1-w36',
  'Week 36: Full Mock Exam & Final Strategy',
  'Test your skills with a full simulation and prepare for test day.',
  ['Complete a full mock exam simulation', 'Refine test-day strategies and timing', 'Perform final mental and tactical preparations'],
  [s1, s2, s3, s4, s5, s6, s7, s8, s9, s10]
);
