import { createShardedToeflUnit, genId } from '../utils';

const UNIT_ID = 34;
const LEVEL = 'b1';

// SHARDS 1-2: Advanced Vocabulary Review
const s1 = {
  id: genId(LEVEL, UNIT_ID, 's1', 0),
  type: 'vocabulary',
  title: 'Academic Vocabulary Review I',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's1', i + 1),
    type: 'multiple-choice',
    question: [
      'What does "comprehensive" mean?',
      'The term "significant" refers to:',
      'What is an "assumption"?',
      'The word "consistent" means:',
      'What is "empirical" evidence?',
      'The term "hypothesis" refers to:',
      'What does "interpret" mean?',
      'The word "objective" in research means:',
      'What is "validity"?',
      'The term "variable" refers to:'
    ][i],
    options: [
      ['Including all or nearly all elements or aspects', 'A type of computer', 'A very small part'],
      ['Sufficiently great or important to be worthy of attention', 'Something very small', 'A type of sign'],
      ['A thing that is accepted as true without proof', 'A proven fact', 'A type of science'],
      ['Acting or done in the same way over time', 'Always changing', 'Very fast'],
      ['Based on observation or experience rather than theory', 'Based on rumors', 'A type of math'],
      ['A proposed explanation made on the basis of limited evidence', 'A final conclusion', 'A type of question'],
      ['Explain the meaning of information or actions', 'Ignore something', 'Copy something exactly'],
      ['Not influenced by personal feelings or opinions', 'A goal only', 'Being very mean'],
      ['The quality of being logically or factually sound', 'The speed of something', 'A type of error'],
      ['An element, feature, or factor that is liable to vary or change', 'Something that never changes', 'A type of number']
    ][i],
    correctAnswer: [
      'Including all or nearly all elements or aspects',
      'Sufficiently great or important to be worthy of attention',
      'A thing that is accepted as true without proof',
      'Acting or done in the same way over time',
      'Based on observation or experience rather than theory',
      'A proposed explanation made on the basis of limited evidence',
      'Explain the meaning of information or actions',
      'Not influenced by personal feelings or opinions',
      'The quality of being logically or factually sound',
      'An element, feature, or factor that is liable to vary or change'
    ][i],
    points: 1
  }))
};

const s2 = {
  id: genId(LEVEL, UNIT_ID, 's2', 0),
  type: 'vocabulary',
  title: 'Academic Vocabulary Review II',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's2', i + 1),
    type: 'multiple-choice',
    question: [
      'What does "abstract" mean in an academic paper?',
      'The term "cite" refers to:',
      'What is "critical thinking"?',
      'The word "derive" means:',
      'What is "feasibility"?',
      'The term "implication" refers to:',
      'What does "methodology" mean?',
      'The word "perspective" means:',
      'What is "synthesis"?',
      'The term "theoretical" refers to:'
    ][i],
    options: [
      ['A summary of the contents of a book or article', 'A long introduction', 'A list of references'],
      ['Quote as evidence for or justification of an argument', 'To build a house', 'To ignore a source'],
      ['Objective analysis and evaluation of an issue', 'Thinking about your favorite food', 'Memorizing facts'],
      ['Obtain something from a specified source', 'To lose something', 'To give something away'],
      ['The state or degree of being easily or conveniently done', 'How much something costs', 'The color of an object'],
      ['The conclusion that can be drawn from something although it is not explicitly stated', 'A direct order', 'A type of question'],
      ['A system of methods used in a particular area of study', 'The ending of a story', 'A type of classroom'],
      ['A particular attitude toward or way of regarding something', 'A type of lens', 'The speed of light'],
      ['The combination of ideas to form a theory or system', 'Breaking something apart', 'A type of music'],
      ['Based on or calculated through theory rather than experience', 'Being very practical', 'A type of math problem']
    ][i],
    correctAnswer: [
      'A summary of the contents of a book or article',
      'Quote as evidence for or justification of an argument',
      'Objective analysis and evaluation of an issue',
      'Obtain something from a specified source',
      'The state or degree of being easily or conveniently done',
      'The conclusion that can be drawn from something although it is not explicitly stated',
      'A system of methods used in a particular area of study',
      'A particular attitude toward or way of regarding something',
      'The combination of ideas to form a theory or system',
      'Based on or calculated through theory rather than experience'
    ][i],
    points: 1
  }))
};

const s3 = {
  id: genId(LEVEL, UNIT_ID, 's3', 0),
  type: 'grammar',
  title: 'Grammar Review: Complex Tenses',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's3', i + 1),
    type: 'multiple-choice',
    question: [
      'By the time you arrive, I ____ my work.',
      'She ____ for three hours before she finally stopped.',
      'I ____ this book for a week now.',
      'By next year, they ____ in this house for a decade.',
      'He ____ to the gym every day this month.',
      'They ____ about the project since morning.',
      'I wish I ____ more attention in class yesterday.',
      'If I ____ you, I would take that job.',
      'She ____ when I called her.',
      'We ____ dinner when the lights went out.'
    ][i],
    options: [
      ['will have finished', 'will finish', 'finished'],
      ['had been working', 'was working', 'worked'],
      ['have been reading', 'am reading', 'read'],
      ['will have been living', 'will live', 'lived'],
      ['has been going', 'goes', 'went'],
      ['have been talking', 'talked', 'are talking'],
      ['had paid', 'paid', 'pay'],
      ['were', 'am', 'was'],
      ['was sleeping', 'slept', 'has slept'],
      ['were having', 'had', 'have']
    ][i],
    correctAnswer: [
      'will have finished', 'had been working', 'have been reading',
      'will have been living', 'has been going', 'have been talking',
      'had paid', 'were', 'was sleeping', 'were having'
    ][i],
    points: 1
  }))
};

const s4 = {
  id: genId(LEVEL, UNIT_ID, 's4', 0),
  type: 'grammar',
  title: 'Grammar Review: Conditionals & Modals',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's4', i + 1),
    type: 'multiple-choice',
    question: [
      'If it rains, we ____ the party.',
      'If I won the lottery, I ____ a boat.',
      'If they had studied, they ____ the exam.',
      'You ____ see a doctor about that cough.',
      'He ____ be at home; his car is in the driveway.',
      'We ____ have taken the train instead of driving.',
      'I ____ have helped you if you had asked.',
      'You ____ not smoke in this building.',
      '____ I borrow your pen?',
      'She ____ play the piano very well when she was young.'
    ][i],
    options: [
      ['will cancel', 'would cancel', 'cancel'],
      ['would buy', 'will buy', 'buy'],
      ['would have passed', 'passed', 'will pass'],
      ['should', 'could', 'might'],
      ['must', 'can', 'should'],
      ['should', 'must', 'could'],
      ['would', 'will', 'must'],
      ['must', 'can', 'might'],
      ['May', 'Must', 'Should'],
      ['could', 'can', 'might']
    ][i],
    correctAnswer: [
      'will cancel', 'would buy', 'would have passed', 'should',
      'must', 'should', 'would', 'must', 'May', 'could'
    ][i],
    points: 1
  }))
};

const s5 = {
  id: genId(LEVEL, UNIT_ID, 's5', 0),
  type: 'reading',
  title: 'Reading Simulation: Academic Passage',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's5', i + 1),
    type: 'multiple-choice',
    question: [
      'What is the main idea of the passage?',
      'Which of the following is NOT mentioned as a factor?',
      'The word "adversely" in paragraph 2 is closest in meaning to:',
      'What can be inferred about the future of the topic?',
      'According to paragraph 3, why did the event happen?',
      'Which sentence best summarizes the second paragraph?',
      'The author\'s tone in the passage is:',
      'What is the purpose of the fourth paragraph?',
      'The word "it" in line 15 refers to:',
      'In which paragraph is the solution discussed?'
    ][i],
    options: [
      ['To explain a complex phenomenon', 'To tell a funny story', 'To give personal advice'],
      ['The color of the sky', 'Economic factors', 'Social impacts'],
      ['Negatively', 'Positively', 'Quickly'],
      ['It will likely continue to evolve', 'It will stop', 'It will be forgotten'],
      ['Due to increased demand', 'Because of a mistake', 'For no reason'],
      ['It highlights the challenges', 'It shows the benefits', 'It describes the history'],
      ['Objective', 'Angry', 'Funny'],
      ['To provide examples', 'To conclude the text', 'To introduce a new topic'],
      ['The process', 'The person', 'The result'],
      ['Paragraph 5', 'Paragraph 1', 'Paragraph 3']
    ][i],
    correctAnswer: [
      'To explain a complex phenomenon', 'The color of the sky',
      'Negatively', 'It will likely continue to evolve',
      'Due to increased demand', 'It highlights the challenges',
      'Objective', 'To provide examples', 'The process', 'Paragraph 5'
    ][i],
    points: 1
  }))
};

const s6 = {
  id: genId(LEVEL, UNIT_ID, 's6', 0),
  type: 'reading',
  title: 'Reading Simulation: Scientific Passage',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's5', i + 1),
    type: 'multiple-choice',
    question: [
      'What is the primary subject of the scientific text?',
      'What does the term "catalyst" mean in this context?',
      'Which process is described in paragraph 2?',
      'How does temperature affect the experiment?',
      'What was the result of the study mentioned in paragraph 3?',
      'The word "unprecedented" means:',
      'Which of these is a potential application of the research?',
      'What is the author\'s main argument?',
      'What is the relationship between the two variables?',
      'Where does the text suggest more research is needed?'
    ][i],
    options: [
      ['A recent discovery in chemistry', 'A historical event', 'A biography of a scientist'],
      ['A substance that increases the rate of a reaction', 'A type of metal', 'A cooling agent'],
      ['Photosynthesis', 'Evaporation', 'Oxidation'],
      ['It speeds up the process', 'It slows it down', 'It has no effect'],
      ['It confirmed the hypothesis', 'It was inconclusive', 'It disproved the theory'],
      ['Never done or known before', 'Very common', 'Very small'],
      ['Medicine', 'Cooking', 'Fashion'],
      ['That more investment is needed', 'That the topic is simple', 'That the research is complete'],
      ['They are directly proportional', 'They are unrelated', 'They are the same'],
      ['In the conclusion', 'In the introduction', 'In the middle']
    ][i],
    correctAnswer: [
      'A recent discovery in chemistry',
      'A substance that increases the rate of a reaction',
      'Photosynthesis', 'It speeds up the process',
      'It confirmed the hypothesis', 'Never done or known before',
      'Medicine', 'That more investment is needed',
      'They are directly proportional', 'In the conclusion'
    ][i],
    points: 1
  }))
};

const s7 = {
  id: genId(LEVEL, UNIT_ID, 's7', 0),
  type: 'listening',
  title: 'Listening Simulation: University Lecture',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's7', i + 1),
    type: 'multiple-choice',
    question: [
      'What is the main topic of the lecture?',
      'What example does the professor use to illustrate the point?',
      'Why does the professor mention the 18th century?',
      'What is the student\'s question about?',
      'How does the professor respond to the student?',
      'What is the next topic for the class?',
      'What assignment does the professor give?',
      'What is the professor\'s attitude toward the topic?',
      'Which of these is a key term mentioned?',
      'Why is the lecture ending early?'
    ][i],
    options: [
      ['The impact of the Industrial Revolution', 'How to write a poem', 'A student\'s grades'],
      ['The steam engine', 'A new book', 'A sports game'],
      ['To provide historical context', 'To tell a joke', 'Because it was a long time ago'],
      ['The deadline for the project', 'A specific definition', 'Where the bathroom is'],
      ['By providing more details', 'By ignoring them', 'By ending the class'],
      ['Global trade', 'The French Revolution', 'Ancient Greece'],
      ['Read chapter 5', 'Watch a movie', 'Take a nap'],
      ['Inquisitive and analytical', 'Bored', 'Angry'],
      ['Urbanization', 'Cooking', 'Dancing'],
      ['To allow for questions', 'Because the power went out', 'The professor is tired']
    ][i],
    correctAnswer: [
      'The impact of the Industrial Revolution', 'The steam engine',
      'To provide historical context', 'A specific definition',
      'By providing more details', 'Global trade', 'Read chapter 5',
      'Inquisitive and analytical', 'Urbanization', 'To allow for questions'
    ][i],
    points: 1
  }))
};

const s8 = {
  id: genId(LEVEL, UNIT_ID, 's8', 0),
  type: 'listening',
  title: 'Listening Simulation: Campus Conversation',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's8', i + 1),
    type: 'multiple-choice',
    question: [
      'Why are the students talking?',
      'What is the problem the boy has?',
      'What does the girl suggest?',
      'Where are they going next?',
      'When is their meeting?',
      'What do they need to bring?',
      'Who else will be at the meeting?',
      'How do they feel about the project?',
      'What is the first step they agree on?',
      'Why is the library closed?'
    ][i],
    options: [
      ['To plan a group project', 'To talk about their weekend', 'To argue about a movie'],
      ['He lost his notes', 'He is hungry', 'He is tired'],
      ['Checking the online portal', 'Asking the teacher', 'Giving up'],
      ['To the library', 'To the gym', 'To the cafeteria'],
      ['At 3:00 PM', 'Tomorrow morning', 'On Friday'],
      ['Their laptops and books', 'A snack', 'A ball'],
      ['The other group members', 'The teacher', 'Nobody'],
      ['Determined but slightly stressed', 'Very happy', 'Sad'],
      ['Researching the main topic', 'Writing the conclusion', 'Making a presentation'],
      ['For renovations', 'Because it is late', 'It is a holiday']
    ][i],
    correctAnswer: [
      'To plan a group project', 'He lost his notes',
      'Checking the online portal', 'To the library', 'At 3:00 PM',
      'Their laptops and books', 'The other group members',
      'Determined but slightly stressed', 'Researching the main topic',
      'For renovations'
    ][i],
    points: 1
  }))
};

const s9 = {
  id: genId(LEVEL, UNIT_ID, 's9', 0),
  type: 'vocabulary',
  title: 'Common TOEFL Idioms & Phrasal Verbs',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's9', i + 1),
    type: 'multiple-choice',
    question: [
      'What does "catch up" mean?',
      'The idiom "hit the books" means:',
      'What does it mean to "call it a day"?',
      'To "look over" something means:',
      'What does "turn in" mean in school?',
      'The phrase "figure out" means:',
      'What does "put off" mean?',
      'To "run out of" something means:',
      'What does "show up" mean?',
      'The idiom "under the weather" means:'
    ][i],
    options: [
      ['To reach the same level as others', 'To run very fast', 'To stop moving'],
      ['To study hard', 'To throw books', 'To read slowly'],
      ['To stop working for the day', 'To go to sleep', 'To start a new project'],
      ['Examine or check something', 'To look underneath', 'To ignore'],
      ['Submit an assignment', 'To go to bed', 'To change your mind'],
      ['To understand or solve something', 'To draw a picture', 'To lose something'],
      ['Postpone or delay', 'To cancel', 'To start early'],
      ['To use all of something', 'To run away', 'To have too much'],
      ['To arrive', 'To hide', 'To leave'],
      ['Feeling slightly ill', 'Being outside in the rain', 'Being very happy']
    ][i],
    correctAnswer: [
      'To reach the same level as others', 'To study hard',
      'To stop working for the day', 'Examine or check something',
      'Submit an assignment', 'To understand or solve something',
      'Postpone or delay', 'To use all of something', 'To arrive',
      'Feeling slightly ill'
    ][i],
    points: 1
  }))
};

const s10 = {
  id: genId(LEVEL, UNIT_ID, 's10', 0),
  type: 'vocabulary',
  title: 'Test-Taking Strategies Vocabulary',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's10', i + 1),
    type: 'multiple-choice',
    question: [
      'What is "skimming"?',
      'What is "scanning"?',
      'What does "context clues" mean?',
      'What is an "inference"?',
      'What is "paraphrasing"?',
      'What does "eliminate" mean in a test?',
      'What is "summarizing"?',
      'What is a "transition word"?',
      'What does "main idea" mean?',
      'What is a "detail" in a text?'
    ][i],
    options: [
      ['Reading quickly for the general idea', 'Reading every word carefully', 'Looking for a specific number'],
      ['Reading quickly for specific information', 'Reading the whole book', 'Reading out loud'],
      ['Hints in the text that help you understand a word', 'The title of the book', 'The author\'s name'],
      ['A conclusion reached based on evidence', 'A direct fact', 'A type of question'],
      ['Expressing the same idea in different words', 'Copying exactly', 'Translating into another language'],
      ['Removing incorrect options', 'Choosing the first answer', 'Skipping the question'],
      ['Giving a brief statement of the main points', 'Writing a long essay', 'Ignoring the text'],
      ['A word that connects ideas (e.g., however, therefore)', 'A type of verb', 'The first word of a sentence'],
      ['The most important point the author is making', 'The last sentence', 'A small example'],
      ['A small piece of information that supports the main idea', 'The whole story', 'The author\'s bio']
    ][i],
    correctAnswer: [
      'Reading quickly for the general idea',
      'Reading quickly for specific information',
      'Hints in the text that help you understand a word',
      'A conclusion reached based on evidence',
      'Expressing the same idea in different words',
      'Removing incorrect options',
      'Giving a brief statement of the main points',
      'A word that connects ideas (e.g., however, therefore)',
      'The most important point the author is making',
      'A small piece of information that supports the main idea'
    ][i],
    points: 1
  }))
};

export const B1_WEEK_34 = createShardedToeflUnit(
  'toefl-b1-w34',
  'Week 34: Final Review I (Reading & Listening Focus)',
  'Consolidate your reading and listening skills for the exam.',
  ['Master academic vocabulary for reading and listening', 'Refine complex grammar and test-taking strategies', 'Practice with exam-style reading and listening simulations'],
  [s1, s2, s3, s4, s5, s6, s7, s8, s9, s10]
);
