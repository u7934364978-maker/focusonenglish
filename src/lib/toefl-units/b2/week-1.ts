import { createShardedToeflUnit, genId } from '../utils';

const UNIT_ID = 1;
const LEVEL = 'b2';

// SHARDS 1-2: Diagnostic Quiz (Core B2 Skills)
const s1 = {
  id: genId(LEVEL, UNIT_ID, 's1', 0),
  type: 'reading',
  title: 'Diagnostic: Reading Proficiency',
  questions: [
    {
      id: genId(LEVEL, UNIT_ID, 's1', 1),
      type: 'multiple-choice',
      question: 'Which of the following is most likely to be a "Main Idea" question on the TOEFL?',
      options: [
        'What is the passage mainly about?',
        'What happened in the second paragraph?',
        'Who wrote this passage?'
      ],
      correctAnswer: 'What is the passage mainly about?',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's1', 2),
      type: 'multiple-choice',
      question: 'In B2 Reading, "Inference" means:',
      options: [
        'Finding information explicitly stated in the text',
        'Drawing a logical conclusion not directly stated',
        'Memorizing the entire passage'
      ],
      correctAnswer: 'Drawing a logical conclusion not directly stated',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's1', 3),
      type: 'multiple-choice',
      question: 'A "Rhetorical Purpose" question asks:',
      options: [
        'Why the author mentioned a specific piece of information',
        'What the dictionary definition of a word is',
        'How many people agree with the author'
      ],
      correctAnswer: 'Why the author mentioned a specific piece of information',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's1', 4),
      type: 'multiple-choice',
      question: 'What is the typical length of a TOEFL reading passage at B2 level?',
      options: [
        '100-200 words',
        '700-800 words',
        'Over 2000 words'
      ],
      correctAnswer: '700-800 words',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's1', 5),
      type: 'multiple-choice',
      question: 'How much time should you spend per reading passage on average?',
      options: [
        '10 minutes',
        '18 minutes',
        '30 minutes'
      ],
      correctAnswer: '18 minutes',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's1', 6),
      type: 'multiple-choice',
      question: 'Vocabulary questions usually ask for the word that is closest in meaning to:',
      options: [
        'The highlighted word in the context of the passage',
        'The literal dictionary definition regardless of context',
        'An antonym of the highlighted word'
      ],
      correctAnswer: 'The highlighted word in the context of the passage',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's1', 7),
      type: 'multiple-choice',
      question: 'What is a "Detail" question looking for?',
      options: [
        'The author\'s personal life',
        'Specific information stated in the passage',
        'The student\'s opinion on the topic'
      ],
      correctAnswer: 'Specific information stated in the passage',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's1', 8),
      type: 'multiple-choice',
      question: '"Negative Factual Information" questions use words like:',
      options: [
        'EXCEPT or NOT',
        'ALWAYS or NEVER',
        'PROBABLY or MAYBE'
      ],
      correctAnswer: 'EXCEPT or NOT',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's1', 9),
      type: 'multiple-choice',
      question: 'Sentence Insertion questions test your understanding of:',
      options: [
        'Grammar only',
        'Logical flow and cohesion',
        'Spelling'
      ],
      correctAnswer: 'Logical flow and cohesion',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's1', 10),
      type: 'multiple-choice',
      question: 'Prose Summary questions require you to:',
      options: [
        'Choose the three most important ideas of the passage',
        'Rewrite the entire passage in your own words',
        'Find three minor details'
      ],
      correctAnswer: 'Choose the three most important ideas of the passage',
      points: 1
    }
  ]
};

const s2 = {
  id: genId(LEVEL, UNIT_ID, 's2', 0),
  type: 'listening',
  title: 'Diagnostic: Listening Proficiency',
  questions: [
    {
      id: genId(LEVEL, UNIT_ID, 's2', 1),
      type: 'multiple-choice',
      question: 'In TOEFL Listening, what is the main difference between a conversation and a lecture?',
      options: [
        'Conversations are informal campus interactions; lectures are academic',
        'Conversations are only about grades; lectures are only about science',
        'There is no difference'
      ],
      correctAnswer: 'Conversations are informal campus interactions; lectures are academic',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's2', 2),
      type: 'multiple-choice',
      question: 'Why is note-taking important in the Listening section?',
      options: [
        'Because you cannot see the questions until the audio ends',
        'Because you need to show your notes to the proctor',
        'It is actually not allowed to take notes'
      ],
      correctAnswer: 'Because you cannot see the questions until the audio ends',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's2', 3),
      type: 'multiple-choice',
      question: 'What does a "Gist-Content" question ask?',
      options: [
        'The main topic of the conversation or lecture',
        'The specific date mentioned in the audio',
        'The name of the speaker'
      ],
      correctAnswer: 'The main topic of the conversation or lecture',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's2', 4),
      type: 'multiple-choice',
      question: 'A "Speaker\'s Stance" question asks about:',
      options: [
        'How the speaker physically stands',
        'The speaker\'s attitude or opinion',
        'The speaker\'s country of origin'
      ],
      correctAnswer: 'The speaker\'s attitude or opinion',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's2', 5),
      type: 'multiple-choice',
      question: 'Replay questions (where a part of the audio is played again) usually test:',
      options: [
        'Pragmatic understanding (why someone said something)',
        'Your ability to hear a specific word',
        'The volume of the recording'
      ],
      correctAnswer: 'Pragmatic understanding (why someone said something)',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's2', 6),
      type: 'multiple-choice',
      question: 'Organization questions ask about:',
      options: [
        'The structure of the lecture or how information is presented',
        'The student\'s backpack organization',
        'The university\'s administrative hierarchy'
      ],
      correctAnswer: 'The structure of the lecture or how information is presented',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's2', 7),
      type: 'multiple-choice',
      question: 'When taking notes, you should focus on:',
      options: [
        'Keywords, main ideas, and supporting details',
        'Transcribing every single word exactly',
        'Drawing pictures of the speaker'
      ],
      correctAnswer: 'Keywords, main ideas, and supporting details',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's2', 8),
      type: 'multiple-choice',
      question: 'True or False: Most questions in the Listening section have 4 options.',
      options: [
        'True',
        'False',
        'Only 2 options'
      ],
      correctAnswer: 'True',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's2', 9),
      type: 'multiple-choice',
      question: 'The "Relationship" question type asks you to:',
      options: [
        'Determine how two ideas or pieces of information are connected',
        'Find out if the speaker is married',
        'Identify the speaker\'s best friend'
      ],
      correctAnswer: 'Determine how two ideas or pieces of information are connected',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's2', 10),
      type: 'multiple-choice',
      question: 'What is the "Function" question type?',
      options: [
        'It asks why a speaker says a specific phrase',
        'It asks for the mathematical function mentioned',
        'It asks what the student\'s job is'
      ],
      correctAnswer: 'It asks why a speaker says a specific phrase',
      points: 1
    }
  ]
};

// SHARDS 3-4: Campus Vocabulary - Administration & Services
const s3 = {
  id: genId(LEVEL, UNIT_ID, 's3', 0),
  type: 'vocabulary',
  title: 'Campus Life: Administrative Terms',
  questions: [
    {
      id: genId(LEVEL, UNIT_ID, 's3', 1),
      type: 'multiple-choice',
      question: 'The word "Registrar" refers to:',
      options: [
        'The office responsible for student records and enrollment',
        'The person who cooks in the cafeteria',
        'A type of library book'
      ],
      correctAnswer: 'The office responsible for student records and enrollment',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's3', 2),
      type: 'multiple-choice',
      question: 'What is a "Transcript"?',
      options: [
        'An official record of a student\'s academic performance',
        'A script for a play',
        'A type of student ID card'
      ],
      correctAnswer: 'An official record of a student\'s academic performance',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's3', 3),
      type: 'multiple-choice',
      question: 'To "Audit" a class means to:',
      options: [
        'Attend a course for no credit',
        'Fail a class',
        'Teach a class as a student'
      ],
      correctAnswer: 'Attend a course for no credit',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's3', 4),
      type: 'multiple-choice',
      question: 'A "Prerequisite" is:',
      options: [
        'A course that must be completed before taking another',
        'A graduation party',
        'An optional textbook'
      ],
      correctAnswer: 'A course that must be completed before taking another',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's3', 5),
      type: 'multiple-choice',
      question: 'What is "Financial Aid"?',
      options: [
        'Monetary support for students to pay for college',
        'Advice on how to spend money',
        'A bank account for students'
      ],
      correctAnswer: 'Monetary support for students to pay for college',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's3', 6),
      type: 'multiple-choice',
      question: 'A "Tuition" fee is payment for:',
      options: [
        'Instruction or teaching',
        'Books and supplies only',
        'Housing and meals'
      ],
      correctAnswer: 'Instruction or teaching',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's3', 7),
      type: 'multiple-choice',
      question: 'What does "Full-time student" typically mean?',
      options: [
        'A student taking a full load of courses (usually 12+ credits)',
        'A student who works at the university',
        'A student who lives on campus'
      ],
      correctAnswer: 'A student taking a full load of courses (usually 12+ credits)',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's3', 8),
      type: 'multiple-choice',
      question: 'An "Academic Advisor" is someone who:',
      options: [
        'Helps students plan their course schedules and degree paths',
        'Grades all final exams',
        'Manages the university sports teams'
      ],
      correctAnswer: 'Helps students plan their course schedules and degree paths',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's3', 9),
      type: 'multiple-choice',
      question: 'What is a "Syllabus"?',
      options: [
        'An outline of the subjects in a course of study',
        'A type of scientific experiment',
        'The name of the university mascot'
      ],
      correctAnswer: 'An outline of the subjects in a course of study',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's3', 10),
      type: 'multiple-choice',
      question: 'To "Drop" a course means to:',
      options: [
        'Formally withdraw from a class',
        'Physically drop a book on the floor',
        'Forget the class exists'
      ],
      correctAnswer: 'Formally withdraw from a class',
      points: 1
    }
  ]
};

const s4 = {
  id: genId(LEVEL, UNIT_ID, 's4', 0),
  type: 'vocabulary',
  title: 'Campus Life: Facilities & Resources',
  questions: [
    {
      id: genId(LEVEL, UNIT_ID, 's4', 1),
      type: 'multiple-choice',
      question: 'What is a "Dormitory" (or Dorm)?',
      options: [
        'A residence hall for students',
        'A place to eat lunch',
        'A type of large classroom'
      ],
      correctAnswer: 'A residence hall for students',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's4', 2),
      type: 'multiple-choice',
      question: 'A "Dining Hall" is:',
      options: [
        'A large room in a university where meals are served',
        'A room where students study quietly',
        'The main administrative office'
      ],
      correctAnswer: 'A large room in a university where meals are served',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's4', 3),
      type: 'multiple-choice',
      question: 'What are "Office Hours"?',
      options: [
        'Scheduled times when professors are available to meet with students',
        'The hours the university library is open',
        'The time spent in actual classes'
      ],
      correctAnswer: 'Scheduled times when professors are available to meet with students',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's4', 4),
      type: 'multiple-choice',
      question: 'The "Student Union" is often:',
      options: [
        'A building for social and recreational activities for students',
        'A labor union for graduate students',
        'The main chemistry lab'
      ],
      correctAnswer: 'A building for social and recreational activities for students',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's4', 5),
      type: 'multiple-choice',
      question: 'A "Computer Lab" provides:',
      options: [
        'Computers and internet access for student use',
        'A place to sleep between classes',
        'A room for biology experiments'
      ],
      correctAnswer: 'Computers and internet access for student use',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's4', 6),
      type: 'multiple-choice',
      question: 'What is "Interlibrary Loan"?',
      options: [
        'A service that allows students to borrow books from other libraries',
        'A loan to pay for library fees',
        'A program for students to share their own books'
      ],
      correctAnswer: 'A service that allows students to borrow books from other libraries',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's4', 7),
      type: 'multiple-choice',
      question: 'A "Lecture Hall" is typically:',
      options: [
        'A large room designed for teaching many students at once',
        'A small room for private meetings',
        'The hallway where students wait'
      ],
      correctAnswer: 'A large room designed for teaching many students at once',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's4', 8),
      type: 'multiple-choice',
      question: 'What does "On-campus housing" refer to?',
      options: [
        'Living in buildings owned and operated by the university',
        'Living in an apartment downtown',
        'Living at home with parents'
      ],
      correctAnswer: 'Living in buildings owned and operated by the university',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's4', 9),
      type: 'multiple-choice',
      question: 'The "Health Center" provides:',
      options: [
        'Medical services for students',
        'Fitness equipment only',
        'Vegetarian food options'
      ],
      correctAnswer: 'Medical services for students',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's4', 10),
      type: 'multiple-choice',
      question: 'A "TA" (Teaching Assistant) is usually:',
      options: [
        'A graduate student who helps a professor with a course',
        'The person who cleans the classrooms',
        'A senior university administrator'
      ],
      correctAnswer: 'A graduate student who helps a professor with a course',
      points: 1
    }
  ]
};

// SHARDS 5-6: Academic Vocabulary - Study & Research
const s5 = {
  id: genId(LEVEL, UNIT_ID, 's5', 0),
  type: 'vocabulary',
  title: 'Academic Study: Essential Verbs',
  questions: [
    {
      id: genId(LEVEL, UNIT_ID, 's5', 1),
      type: 'multiple-choice',
      question: 'To "Analyze" means to:',
      options: [
        'Examine in detail to understand structure or meaning',
        'Ignore the facts',
        'Copy someone else\'s work'
      ],
      correctAnswer: 'Examine in detail to understand structure or meaning',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's5', 2),
      type: 'multiple-choice',
      question: 'To "Synthesize" information means to:',
      options: [
        'Combine different ideas to form a new whole',
        'Make something up from scratch',
        'Repeat one idea many times'
      ],
      correctAnswer: 'Combine different ideas to form a new whole',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's5', 3),
      type: 'multiple-choice',
      question: 'To "Evaluate" is to:',
      options: [
        'Judge or determine the significance, worth, or quality of something',
        'Count the number of pages',
        'Change the topic of discussion'
      ],
      correctAnswer: 'Judge or determine the significance, worth, or quality of something',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's5', 4),
      type: 'multiple-choice',
      question: 'To "Hypothesize" means to:',
      options: [
        'Formulate a possible explanation or theory',
        'Prove something beyond a doubt',
        'Forget a fact'
      ],
      correctAnswer: 'Formulate a possible explanation or theory',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's5', 5),
      type: 'multiple-choice',
      question: 'To "Illustrate" in an academic context often means to:',
      options: [
        'Provide examples to clarify a point',
        'Draw a picture with crayons',
        'Make something look pretty'
      ],
      correctAnswer: 'Provide examples to clarify a point',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's5', 6),
      type: 'multiple-choice',
      question: 'To "Contrast" is to:',
      options: [
        'Show the differences between things',
        'Show the similarities between things',
        'Ignore all differences'
      ],
      correctAnswer: 'Show the differences between things',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's5', 7),
      type: 'multiple-choice',
      question: 'To "Interpret" data means to:',
      options: [
        'Explain the meaning of information or results',
        'Just list the numbers without comment',
        'Translate a language'
      ],
      correctAnswer: 'Explain the meaning of information or results',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's5', 8),
      type: 'multiple-choice',
      question: 'To "Critique" a piece of work is to:',
      options: [
        'Provide a detailed assessment, including both strengths and weaknesses',
        'Say that it is terrible',
        'Say that it is perfect'
      ],
      correctAnswer: 'Provide a detailed assessment, including both strengths and weaknesses',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's5', 9),
      type: 'multiple-choice',
      question: 'To "Corroborate" a claim is to:',
      options: [
        'Support with additional evidence',
        'Deny the claim completely',
        'Change the claim'
      ],
      correctAnswer: 'Support with additional evidence',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's5', 10),
      type: 'multiple-choice',
      question: 'To "Dispute" a theory is to:',
      options: [
        'Challenge or argue against its validity',
        'Agree with it completely',
        'Teach it to others'
      ],
      correctAnswer: 'Challenge or argue against its validity',
      points: 1
    }
  ]
};

const s6 = {
  id: genId(LEVEL, UNIT_ID, 's6', 0),
  type: 'vocabulary',
  title: 'Academic Study: Nouns & Concepts',
  questions: [
    {
      id: genId(LEVEL, UNIT_ID, 's6', 1),
      type: 'multiple-choice',
      question: 'An "Abstract" in a research paper is:',
      options: [
        'A short summary of the entire paper',
        'A type of modern art',
        'A long list of references'
      ],
      correctAnswer: 'A short summary of the entire paper',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's6', 2),
      type: 'multiple-choice',
      question: 'A "Bibliography" is:',
      options: [
        'A list of sources used in a research project',
        'The life story of a famous scientist',
        'A collection of maps'
      ],
      correctAnswer: 'A list of sources used in a research project',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's6', 3),
      type: 'multiple-choice',
      question: 'What is "Peer Review"?',
      options: [
        'The evaluation of work by others in the same field',
        'A student checking their friend\'s homework',
        'A professor watching a movie with students'
      ],
      correctAnswer: 'The evaluation of work by others in the same field',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's6', 4),
      type: 'multiple-choice',
      question: 'The "Methodology" section of a paper explains:',
      options: [
        'How the research was conducted',
        'The author\'s personal feelings',
        'The final conclusion'
      ],
      correctAnswer: 'How the research was conducted',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's6', 5),
      type: 'multiple-choice',
      question: 'What is a "Hypothesis"?',
      options: [
        'A testable prediction about a relationship between variables',
        'A fact that has been proven true',
        'A question that cannot be answered'
      ],
      correctAnswer: 'A testable prediction about a relationship between variables',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's6', 6),
      type: 'multiple-choice',
      question: '"Plagiarism" is the act of:',
      options: [
        'Using someone else\'s work or ideas without proper credit',
        'Asking a teacher for help',
        'Studying in a group'
      ],
      correctAnswer: 'Using someone else\'s work or ideas without proper credit',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's6', 7),
      type: 'multiple-choice',
      question: 'A "Case Study" is:',
      options: [
        'An in-depth investigation of a specific person, group, or event',
        'A suitcase for carrying books',
        'A type of law exam'
      ],
      correctAnswer: 'An in-depth investigation of a specific person, group, or event',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's6', 8),
      type: 'multiple-choice',
      question: 'What are "Empirical" findings?',
      options: [
        'Results based on observation or experiment',
        'Opinions given by an emperor',
        'Guesses based on intuition'
      ],
      correctAnswer: 'Results based on observation or experiment',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's6', 9),
      type: 'multiple-choice',
      question: 'A "Variable" in an experiment is:',
      options: [
        'A factor that can be changed or controlled',
        'The person conducting the study',
        'The room where the study takes place'
      ],
      correctAnswer: 'A factor that can be changed or controlled',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's6', 10),
      type: 'multiple-choice',
      question: 'What is a "Literature Review"?',
      options: [
        'A survey of existing research on a particular topic',
        'Reading a novel for fun',
        'Writing a book review for a newspaper'
      ],
      correctAnswer: 'A survey of existing research on a particular topic',
      points: 1
    }
  ]
};

// SHARDS 7-8: Grammar - Complex Sentence Structures (B2 level)
const s7 = {
  id: genId(LEVEL, UNIT_ID, 's7', 0),
  type: 'vocabulary',
  title: 'B2 Grammar: Relative Clauses & Connectors',
  questions: [
    {
      id: genId(LEVEL, UNIT_ID, 's7', 1),
      type: 'multiple-choice',
      question: 'Which sentence correctly uses a relative clause?',
      options: [
        'The student who studied hard passed the exam.',
        'The student which studied hard passed the exam.',
        'The student what studied hard passed the exam.'
      ],
      correctAnswer: 'The student who studied hard passed the exam.',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's7', 2),
      type: 'multiple-choice',
      question: 'Choose the correct connector: "The experiment failed, ____ we learned a lot from the data."',
      options: [
        'nonetheless',
        'because',
        'so'
      ],
      correctAnswer: 'nonetheless',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's7', 3),
      type: 'multiple-choice',
      question: 'Which of these is a formal way to say "because of"?',
      options: [
        'due to the fact that',
        'owing to',
        'Both of the above'
      ],
      correctAnswer: 'Both of the above',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's7', 4),
      type: 'multiple-choice',
      question: 'Identify the "Non-defining relative clause":',
      options: [
        'Professor Smith, who is a Nobel Prize winner, will lecture today.',
        'The professor who is a Nobel Prize winner will lecture today.',
        'The professor is a Nobel Prize winner and will lecture today.'
      ],
      correctAnswer: 'Professor Smith, who is a Nobel Prize winner, will lecture today.',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's7', 5),
      type: 'multiple-choice',
      question: 'Which connector shows a result?',
      options: [
        'consequently',
        'however',
        'in contrast'
      ],
      correctAnswer: 'consequently',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's7', 6),
      type: 'multiple-choice',
      question: 'Choose the correct word: "The research, ____ was conducted over three years, proved the theory."',
      options: [
        'which',
        'that',
        'who'
      ],
      correctAnswer: 'which',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's7', 7),
      type: 'multiple-choice',
      question: 'What is the function of "moreover"?',
      options: [
        'To add additional information',
        'To show a difference',
        'To give a reason'
      ],
      correctAnswer: 'To add additional information',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's7', 8),
      type: 'multiple-choice',
      question: 'Which sentence uses "provided that" correctly?',
      options: [
        'I will go, provided that you come too.',
        'I will go provided that because you are here.',
        'Provided that I will go.'
      ],
      correctAnswer: 'I will go, provided that you come too.',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's7', 9),
      type: 'multiple-choice',
      question: 'What does "whereas" indicate?',
      options: [
        'Comparison or contrast',
        'A sequence of events',
        'A cause and effect'
      ],
      correctAnswer: 'Comparison or contrast',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's7', 10),
      type: 'multiple-choice',
      question: 'Choose the best option: "He failed the test ____ his lack of preparation."',
      options: [
        'on account of',
        'since',
        'even though'
      ],
      correctAnswer: 'on account of',
      points: 1
    }
  ]
};

const s8 = {
  id: genId(LEVEL, UNIT_ID, 's8', 0),
  type: 'vocabulary',
  title: 'B2 Grammar: Conditionals & Modals',
  questions: [
    {
      id: genId(LEVEL, UNIT_ID, 's8', 1),
      type: 'multiple-choice',
      question: 'Which sentence is a Second Conditional (hypothetical)?',
      options: [
        'If I had more time, I would study more.',
        'If I have time, I will study.',
        'If I had had time, I would have studied.'
      ],
      correctAnswer: 'If I had more time, I would study more.',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's8', 2),
      type: 'multiple-choice',
      question: 'Choose the correct modal: "He ____ have been at the library; I saw his car outside."',
      options: [
        'must',
        'might',
        'can\'t'
      ],
      correctAnswer: 'must',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's8', 3),
      type: 'multiple-choice',
      question: 'What does "should have" indicate?',
      options: [
        'A past obligation that was not fulfilled (regret)',
        'A future possibility',
        'A current necessity'
      ],
      correctAnswer: 'A past obligation that was not fulfilled (regret)',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's8', 4),
      type: 'multiple-choice',
      question: 'Which sentence is a Third Conditional?',
      options: [
        'If she had known about the test, she would have studied.',
        'If she knows about the test, she will study.',
        'If she knew about the test, she would study.'
      ],
      correctAnswer: 'If she had known about the test, she would have studied.',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's8', 5),
      type: 'multiple-choice',
      question: 'Which modal expresses a high level of uncertainty?',
      options: [
        'might',
        'must',
        'will'
      ],
      correctAnswer: 'might',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's8', 6),
      type: 'multiple-choice',
      question: 'Choose the correct form: "I wish I ____ harder for the exam yesterday."',
      options: [
        'had studied',
        'studied',
        'would study'
      ],
      correctAnswer: 'had studied',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's8', 7),
      type: 'multiple-choice',
      question: 'What is the meaning of "He may have forgotten"?',
      options: [
        'It is possible that he forgot in the past',
        'He will probably forget in the future',
        'He always forgets'
      ],
      correctAnswer: 'It is possible that he forgot in the past',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's8', 8),
      type: 'multiple-choice',
      question: 'Which of these expresses "ability in the past"?',
      options: [
        'could',
        'can',
        'might'
      ],
      correctAnswer: 'could',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's8', 9),
      type: 'multiple-choice',
      question: 'Identify the correct passive voice sentence:',
      options: [
        'The research was conducted by a team of experts.',
        'A team of experts conducted the research.',
        'The research conduct by a team of experts.'
      ],
      correctAnswer: 'The research was conducted by a team of experts.',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's8', 10),
      type: 'multiple-choice',
      question: 'When is the passive voice often used in academic writing?',
      options: [
        'When the action is more important than who did it',
        'Only in fiction stories',
        'Never, it is always avoided'
      ],
      correctAnswer: 'When the action is more important than who did it',
      points: 1
    }
  ]
};

// SHARDS 9-10: Error Log & Test Strategy Review
const s9 = {
  id: genId(LEVEL, UNIT_ID, 's9', 0),
  type: 'vocabulary',
  title: 'Test Strategy: Error Analysis',
  questions: [
    {
      id: genId(LEVEL, UNIT_ID, 's9', 1),
      type: 'multiple-choice',
      question: 'If you consistently miss "Inference" questions, you should practice:',
      options: [
        'Reading between the lines and logical reasoning',
        'Memorizing vocabulary lists',
        'Looking for direct quotes only'
      ],
      correctAnswer: 'Reading between the lines and logical reasoning',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's9', 2),
      type: 'multiple-choice',
      question: 'What is an "Error Log"?',
      options: [
        'A record of your mistakes and why you made them',
        'A list of your favorite books',
        'A diary of your study hours'
      ],
      correctAnswer: 'A record of your mistakes and why you made them',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's9', 3),
      type: 'multiple-choice',
      question: 'To avoid "Distractors" in Listening, you should:',
      options: [
        'Listen for specific keywords that might be traps',
        'Pick the answer that uses the most familiar words',
        'Only listen to the first sentence'
      ],
      correctAnswer: 'Listen for specific keywords that might be traps',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's9', 4),
      type: 'multiple-choice',
      question: 'In Reading, if you run out of time, you should:',
      options: [
        'Guess all remaining questions (there is no penalty)',
        'Leave them blank',
        'Cry'
      ],
      correctAnswer: 'Guess all remaining questions (there is no penalty)',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's9', 5),
      type: 'multiple-choice',
      question: 'The best way to improve vocabulary for TOEFL is:',
      options: [
        'Learning words in context through academic reading',
        'Reading a dictionary from A to Z',
        'Watching cartoons without subtitles'
      ],
      correctAnswer: 'Learning words in context through academic reading',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's9', 6),
      type: 'multiple-choice',
      question: 'How often should you review your Error Log?',
      options: [
        'At the end of every week',
        'Only once a year',
        'Never'
      ],
      correctAnswer: 'At the end of every week',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's9', 7),
      type: 'multiple-choice',
      question: 'If a Reading option uses absolute words like "Always" or "Never", it is often:',
      options: [
        'A trap or distractor',
        'The correct answer',
        'A direct quote'
      ],
      correctAnswer: 'A trap or distractor',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's9', 8),
      type: 'multiple-choice',
      question: 'In Listening, if you miss a piece of information, you should:',
      options: [
        'Keep listening to the rest of the audio',
        'Stop and think about what you missed',
        'Raise your hand and ask to restart'
      ],
      correctAnswer: 'Keep listening to the rest of the audio',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's9', 9),
      type: 'multiple-choice',
      question: 'What is "Skimming"?',
      options: [
        'Reading quickly to get the general idea',
        'Reading slowly for every detail',
        'Looking for a specific name'
      ],
      correctAnswer: 'Reading quickly to get the general idea',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's9', 10),
      type: 'multiple-choice',
      question: 'What is "Scanning"?',
      options: [
        'Looking for specific information like dates or names',
        'Reading the first sentence of every paragraph',
        'Ignoring the text completely'
      ],
      correctAnswer: 'Looking for specific information like dates or names',
      points: 1
    }
  ]
};

const s10 = {
  id: genId(LEVEL, UNIT_ID, 's10', 0),
  type: 'vocabulary',
  title: 'Weekly Summary & Self-Assessment',
  questions: [
    {
      id: genId(LEVEL, UNIT_ID, 's10', 1),
      type: 'multiple-choice',
      question: 'I can identify the main idea of a B2-level academic passage.',
      options: ['Always', 'Mostly', 'Need more practice'],
      correctAnswer: 'Always',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's10', 2),
      type: 'multiple-choice',
      question: 'I understand the role of the Registrar and Academic Advisor.',
      options: ['Yes', 'Partially', 'No'],
      correctAnswer: 'Yes',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's10', 3),
      type: 'multiple-choice',
      question: 'I feel comfortable using complex connectors like "nonetheless".',
      options: ['Strongly agree', 'Agree', 'Disagree'],
      correctAnswer: 'Strongly agree',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's10', 4),
      type: 'multiple-choice',
      question: 'I can distinguish between Second and Third Conditionals.',
      options: ['Very well', 'Somewhat', 'Not well'],
      correctAnswer: 'Very well',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's10', 5),
      type: 'multiple-choice',
      question: 'I know the typical length of a TOEFL Reading section.',
      options: ['Yes', 'I forgot', 'I never knew'],
      correctAnswer: 'Yes',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's10', 6),
      type: 'multiple-choice',
      question: 'I understand why note-taking is essential for Listening.',
      options: ['Clear understanding', 'Vague idea', 'No idea'],
      correctAnswer: 'Clear understanding',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's10', 7),
      type: 'multiple-choice',
      question: 'I can define "Plagiarism" and "Peer Review".',
      options: ['Definitely', 'Sort of', 'Not at all'],
      correctAnswer: 'Definitely',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's10', 8),
      type: 'multiple-choice',
      question: 'I am ready to move to more specific Reading skills next week.',
      options: ['Ready', 'Maybe', 'Not yet'],
      correctAnswer: 'Ready',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's10', 9),
      type: 'multiple-choice',
      question: 'My target score for B2 Reading is higher than B1.',
      options: ['Yes', 'No', 'Same'],
      correctAnswer: 'Yes',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's10', 10),
      type: 'multiple-choice',
      question: 'How do you feel after the first week of B2 prep?',
      options: ['Motivated', 'Tired', 'Neutral'],
      correctAnswer: 'Motivated',
      points: 1
    }
  ]
};

export const B2_WEEK_1 = createShardedToeflUnit(
  'toefl-b2-w1',
  'Week 1: Diagnostic & Academic Vocabulary I',
  'Assess your baseline skills and master essential campus and academic vocabulary for the B2 level.',
  ['Complete a comprehensive diagnostic of B2 Reading and Listening skills', 'Master vocabulary related to university administration and campus facilities', 'Review complex grammar structures and academic study concepts'],
  [s1, s2, s3, s4, s5, s6, s7, s8, s9, s10]
);
