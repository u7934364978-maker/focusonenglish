import { createShardedToeflUnit, genId } from '../utils';

const UNIT_ID = 31;
const LEVEL = 'b1';

// SHARDS 1-2: Education Vocabulary
const s1 = {
  id: genId(LEVEL, UNIT_ID, 's1', 0),
  type: 'vocabulary',
  title: 'Higher Education & Academia',
  questions: [
    {
      id: genId(LEVEL, UNIT_ID, 's1', 1),
      type: 'multiple-choice',
      question: 'What is a "degree" in education?',
      options: ['An academic rank conferred by a college or university', 'A unit of temperature', 'A type of map'],
      correctAnswer: 'An academic rank conferred by a college or university',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's1', 2),
      type: 'multiple-choice',
      question: 'The term "undergraduate" refers to:',
      options: ['A student who has not yet earned a bachelor\'s degree', 'A student who has already graduated', 'A teacher\'s assistant'],
      correctAnswer: 'A student who has not yet earned a bachelor\'s degree',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's1', 3),
      type: 'multiple-choice',
      question: 'What is a "graduate student"?',
      options: ['A student who is studying for a degree after having earned a bachelor\'s', 'A student in primary school', 'A student who dropped out'],
      correctAnswer: 'A student who is studying for a degree after having earned a bachelor\'s',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's1', 4),
      type: 'multiple-choice',
      question: 'The word "faculty" in a university context means:',
      options: ['The teaching staff of a university or college', 'The student body', 'The university buildings'],
      correctAnswer: 'The teaching staff of a university or college',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's1', 5),
      type: 'multiple-choice',
      question: 'What is "tuition"?',
      options: ['A sum of money charged for teaching or instruction by a school', 'A type of textbook', 'A school holiday'],
      correctAnswer: 'A sum of money charged for teaching or instruction by a school',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's1', 6),
      type: 'multiple-choice',
      question: 'The term "curriculum" refers to:',
      options: ['The subjects comprising a course of study in a school or college', 'The school bus route', 'The school cafeteria menu'],
      correctAnswer: 'The subjects comprising a course of study in a school or college',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's1', 7),
      type: 'multiple-choice',
      question: 'What is a "scholarship"?',
      options: ['A grant or payment made to support a student\'s education', 'A type of test', 'A school club'],
      correctAnswer: 'A grant or payment made to support a student\'s education',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's1', 8),
      type: 'multiple-choice',
      question: 'The word "syllabus" means:',
      options: ['An outline of the subjects in a course of study or teaching', 'A type of school bus', 'A school principal'],
      correctAnswer: 'An outline of the subjects in a course of study or teaching',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's1', 9),
      type: 'multiple-choice',
      question: 'What is "pedagogy"?',
      options: ['The method and practice of teaching', 'The study of feet', 'A type of bicycle'],
      correctAnswer: 'The method and practice of teaching',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's1', 10),
      type: 'multiple-choice',
      question: 'The term "alumni" refers to:',
      options: ['Former students of a particular school, college, or university', 'Current students', 'New teachers'],
      correctAnswer: 'Former students of a particular school, college, or university',
      points: 1
    }
  ]
};

const s2 = {
  id: genId(LEVEL, UNIT_ID, 's2', 0),
  type: 'vocabulary',
  title: 'Research & Methodology',
  questions: [
    {
      id: genId(LEVEL, UNIT_ID, 's2', 1),
      type: 'multiple-choice',
      question: 'What is a "hypothesis"?',
      options: ['A proposed explanation made on the basis of limited evidence', 'A proven fact', 'A type of scientific tool'],
      correctAnswer: 'A proposed explanation made on the basis of limited evidence',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's2', 2),
      type: 'multiple-choice',
      question: 'The word "methodology" refers to:',
      options: ['A system of methods used in a particular area of study or activity', 'The study of maps', 'A type of textbook'],
      correctAnswer: 'A system of methods used in a particular area of study or activity',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's2', 3),
      type: 'multiple-choice',
      question: 'What is "empirical" evidence?',
      options: ['Information acquired by observation or experimentation', 'Information found in a storybook', 'A secret rumor'],
      correctAnswer: 'Information acquired by observation or experimentation',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's2', 4),
      type: 'multiple-choice',
      question: 'The term "plagiarism" refers to:',
      options: ['The practice of taking someone else\'s work or ideas and passing them off as one\'s own', 'A type of plant', 'Cleaning a library'],
      correctAnswer: 'The practice of taking someone else\'s work or ideas and passing them off as one\'s own',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's2', 5),
      type: 'multiple-choice',
      question: 'What is a "peer-reviewed" article?',
      options: ['An article evaluated by people with similar expertise before publication', 'An article read by friends', 'An article with many photos'],
      correctAnswer: 'An article evaluated by people with similar expertise before publication',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's2', 6),
      type: 'multiple-choice',
      question: 'The word "abstract" in a research paper means:',
      options: ['A summary of the contents of the paper', 'A type of modern art', 'A secret code'],
      correctAnswer: 'A summary of the contents of the paper',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's2', 7),
      type: 'multiple-choice',
      question: 'What is "quantitative" research?',
      options: ['Research based on numerical data', 'Research based on feelings', 'Research about quality only'],
      correctAnswer: 'Research based on numerical data',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's2', 8),
      type: 'multiple-choice',
      question: 'The term "qualitative" research refers to:',
      options: ['Research focusing on understanding human behavior and experiences', 'Research focusing on numbers', 'Research about the quantity of things'],
      correctAnswer: 'Research focusing on understanding human behavior and experiences',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's2', 9),
      type: 'multiple-choice',
      question: 'What is a "citation"?',
      options: ['A quotation from or reference to a book, paper, or author', 'A type of traffic ticket only', 'A school holiday'],
      correctAnswer: 'A quotation from or reference to a book, paper, or author',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's2', 10),
      type: 'multiple-choice',
      question: 'The word "thesis" means:',
      options: ['A long essay or dissertation involving personal research', 'A type of flower', 'A short sentence'],
      correctAnswer: 'A long essay or dissertation involving personal research',
      points: 1
    }
  ]
};

const s3 = {
  id: genId(LEVEL, UNIT_ID, 's3', 0),
  type: 'grammar',
  title: 'Gerunds & Infinitives',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's3', i + 1),
    type: 'multiple-choice',
    question: [
      'I enjoy ____ about history.',
      'He decided ____ to another university.',
      'She finished ____ her research paper.',
      'They suggested ____ a new experiment.',
      'I want ____ a doctor one day.',
      'We stopped ____ for lunch.',
      'He avoided ____ his homework.',
      'I promise ____ harder next semester.',
      'Do you mind ____ me with this project?',
      'She hope ____ a scholarship.'
    ][i],
    options: [
      ['learning', 'to learn', 'learn'],
      ['to transfer', 'transferring', 'transfer'],
      ['writing', 'to write', 'write'],
      ['conducting', 'to conduct', 'conduct'],
      ['to be', 'being', 'be'],
      ['to eat', 'eating', 'eat'],
      ['doing', 'to do', 'do'],
      ['to study', 'studying', 'study'],
      ['helping', 'to help', 'help'],
      ['to get', 'getting', 'get']
    ][i],
    correctAnswer: [
      'learning', 'to learn', 'writing', 'conducting', 'to be',
      'to eat', 'doing', 'to study', 'helping', 'to get'
    ][i],
    points: 1
  }))
};

const s4 = {
  id: genId(LEVEL, UNIT_ID, 's4', 0),
  type: 'grammar',
  title: 'Gerunds & Infinitives (Advanced)',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's4', i + 1),
    type: 'multiple-choice',
    question: [
      'It is difficult ____ all the vocabulary.',
      'He is good at ____ languages.',
      'I am looking forward to ____ abroad.',
      'She is interested in ____ psychology.',
      'It is important ____ a good routine.',
      'He gave up ____ the guitar.',
      'I don\'t feel like ____ today.',
      'She is too young ____ to university.',
      'He is happy ____ his degree.',
      'We should continue ____.'
    ][i],
    options: [
      ['to remember', 'remembering', 'remember'],
      ['learning', 'to learn', 'learn'],
      ['studying', 'to study', 'study'],
      ['studying', 'to study', 'study'],
      ['to have', 'having', 'have'],
      ['playing', 'to play', 'play'],
      ['studying', 'to study', 'study'],
      ['to go', 'going', 'go'],
      ['to receive', 'receiving', 'receive'],
      ['studying', 'to study', 'study']
    ][i],
    correctAnswer: [
      'to remember', 'learning', 'studying', 'studying', 'to have',
      'playing', 'studying', 'to go', 'to receive', 'studying'
    ][i],
    points: 1
  }))
};

const s5 = {
  id: genId(LEVEL, UNIT_ID, 's5', 0),
  type: 'reading',
  title: 'Reading: Higher Education Systems',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's5', i + 1),
    type: 'multiple-choice',
    question: [
      'What is the difference between a college and a university in the US?',
      'What is a "liberal arts" education?',
      'What is "tenure" for professors?',
      'How do students usually fund their higher education?',
      'What are "community colleges"?',
      'What is the role of a "dean"?',
      'What is "academic freedom"?',
      'How long does a typical Bachelor\'s degree take?',
      'What is "graduate school"?',
      'What is the importance of "accreditation"?'
    ][i],
    options: [
      ['Universities offer graduate degrees; colleges usually don\'t', 'They are exactly the same', 'Colleges are only for sports'],
      ['An education providing broad general knowledge and intellectual skills', 'Only studying art', 'Studying how to be a politician'],
      ['A permanent post for a professor', 'A type of school book', 'A ten-year contract'],
      ['Through loans, scholarships, and savings', 'It is always free', 'By working in a factory'],
      ['Two-year colleges that offer associate degrees', 'Colleges for animals', 'Colleges in the countryside'],
      ['A high-ranking administrator in a college or university', 'The school bus driver', 'A student leader'],
      ['The freedom of teachers and students to teach and study without interference', 'Being able to leave school early', 'Free books for everyone'],
      ['Four years', 'One year', 'Ten years'],
      ['Education beyond the Bachelor\'s degree', 'A school for children', 'A school for sports'],
      ['It ensures that a school meets certain quality standards', 'It makes school more expensive', 'It is not important']
    ][i],
    correctAnswer: [
      'Universities offer graduate degrees; colleges usually don\'t',
      'An education providing broad general knowledge and intellectual skills',
      'A permanent post for a professor', 'Through loans, scholarships, and savings',
      'Two-year colleges that offer associate degrees',
      'A high-ranking administrator in a college or university',
      'The freedom of teachers and students to teach and study without interference',
      'Four years', 'Education beyond the Bachelor\'s degree',
      'It ensures that a school meets certain quality standards'
    ][i],
    points: 1
  }))
};

const s6 = {
  id: genId(LEVEL, UNIT_ID, 's6', 0),
  type: 'reading',
  title: 'Reading: How to Conduct Research',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's6', i + 1),
    type: 'multiple-choice',
    question: [
      'What is the first step in conducting research?',
      'What is a "literature review"?',
      'Why is it important to have a research question?',
      'What is "data collection"?',
      'What is "data analysis"?',
      'How do you avoid plagiarism in research?',
      'What is the "scientific method"?',
      'Why should research be "reproducible"?',
      'What is an "ethics committee" in research?',
      'How do you present research findings?'
    ][i],
    options: [
      ['Defining the research problem or question', 'Writing the conclusion', 'Publishing the paper'],
      ['An overview of existing research on a topic', 'Reading a storybook', 'A book review for a newspaper'],
      ['It guides the research process', 'It makes the paper longer', 'It is not important'],
      ['The process of gathering information', 'Buying new books', 'Printing the final paper'],
      ['Interpreting the data to draw conclusions', 'Counting the pages', 'Deleting the data'],
      ['By citing all sources correctly', 'By not using any books', 'By writing very fast'],
      ['A systematic way of learning about the world', 'A type of computer program', 'A school event'],
      ['So other scientists can verify the results', 'To make it more expensive', 'It doesn\'t matter'],
      ['A group that ensures research is conducted fairly and safely', 'A group that cleans the lab', 'A group that sells books'],
      ['Through papers, presentations, and posters', 'By keeping it secret', 'By telling only your family']
    ][i],
    correctAnswer: [
      'Defining the research problem or question', 'An overview of existing research on a topic',
      'It guides the research process', 'The process of gathering information',
      'Interpreting the data to draw conclusions', 'By citing all sources correctly',
      'A systematic way of learning about the world', 'So other scientists can verify the results',
      'A group that ensures research is conducted fairly and safely',
      'Through papers, presentations, and posters'
    ][i],
    points: 1
  }))
};

const s7 = {
  id: genId(LEVEL, UNIT_ID, 's7', 0),
  type: 'listening',
  title: 'Listening: Lecture on Educational Psychology',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's7', i + 1),
    type: 'multiple-choice',
    question: [
      'What is "educational psychology"?',
      'What is "cognitive development"?',
      'What is "motivation" in learning?',
      'How does environment affect learning?',
      'What is "inclusive education"?',
      'What are "learning styles"?',
      'What is "formative assessment"?',
      'What is "summative assessment"?',
      'How can teachers improve student engagement?',
      'What is the "growth mindset"?'
    ][i],
    options: [
      ['The study of how people learn', 'The study of school buildings', 'The study of school lunches'],
      ['How children think, explore, and figure things out', 'Growing taller', 'Buying new toys'],
      ['The reason why someone wants to learn', 'A type of exam', 'A school holiday'],
      ['A positive environment can improve outcomes', 'It has no effect', 'It only matters if there is a TV'],
      ['Education that includes all students regardless of challenges', 'Education only for some people', 'A type of sports school'],
      ['The different ways people process information', 'The clothes students wear', 'A type of pen'],
      ['Ongoing assessment to monitor student learning', 'A final exam', 'A school trip'],
      ['Assessment at the end of a unit or course', 'A small quiz', 'Talking to a friend'],
      ['By using interactive and relevant activities', 'By being very loud', 'By giving no homework'],
      ['The belief that abilities can be developed through effort', 'Thinking you are born smart and cannot change', 'Being very tall']
    ][i],
    correctAnswer: [
      'The study of how people learn', 'How children think, explore, and figure things out',
      'The reason why someone wants to learn', 'A positive environment can improve outcomes',
      'Education that includes all students regardless of challenges',
      'The different ways people process information',
      'Ongoing assessment to monitor student learning',
      'Assessment at the end of a unit or course',
      'By using interactive and relevant activities',
      'The belief that abilities can be developed through effort'
    ][i],
    points: 1
  }))
};

const s8 = {
  id: genId(LEVEL, UNIT_ID, 's8', 0),
  type: 'listening',
  title: 'Listening: Discussion on Study Abroad',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's8', i + 1),
    type: 'multiple-choice',
    question: [
      'What are the benefits of studying abroad mentioned?',
      'What is "cultural immersion"?',
      'How can students prepare for studying abroad?',
      'What are some challenges of studying abroad?',
      'How does studying abroad affect career prospects?',
      'What is an "exchange program"?',
      'How can students fund their study abroad?',
      'What is "homesickness"?',
      'How do you choose a study abroad destination?',
      'What is the importance of learning the local language?'
    ][i],
    options: [
      ['Cultural awareness and language skills', 'Saving money', 'Staying near family'],
      ['Living and participating in a different culture', 'Swimming in a new ocean', 'Reading about a culture'],
      ['By researching the culture and learning the language', 'By packing too many clothes', 'By not doing anything'],
      ['Language barriers and culture shock', 'Too much free time', 'Not enough food'],
      ['It is often viewed positively by employers', 'It makes it harder to find a job', 'It has no effect'],
      ['A program where students from different countries switch places', 'Buying a new computer', 'A sports competition'],
      ['Through scholarships and personal savings', 'It is always free', 'By asking the principal'],
      ['Feeling sad because you miss home', 'Being sick because of a cold', 'Being very tired'],
      ['Based on academic goals and personal interests', 'By picking a name from a hat', 'By choosing the closest place'],
      ['It helps with communication and integration', 'It is not important', 'It makes you forget your own language']
    ][i],
    correctAnswer: [
      'Cultural awareness and language skills', 'Living and participating in a different culture',
      'By researching the culture and learning the language',
      'Language barriers and culture shock',
      'It is often viewed positively by employers',
      'A program where students from different countries switch places',
      'Through scholarships and personal savings', 'Feeling sad because you miss home',
      'Based on academic goals and personal interests',
      'It helps with communication and integration'
    ][i],
    points: 1
  }))
};

const s9 = {
  id: genId(LEVEL, UNIT_ID, 's9', 0),
  type: 'vocabulary',
  title: 'Academic Degrees',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's9', i + 1),
    type: 'multiple-choice',
    question: [
      'What is an "Associate degree"?',
      'What is a "Bachelor\'s degree"?',
      'What is a "Master\'s degree"?',
      'What is a "Doctorate" (PhD)?',
      'What is a "Diploma"?',
      'What is a "Certificate"?',
      'What does "MD" stand for in a degree context?',
      'What does "JD" stand for?',
      'What is a "minor" in university?',
      'What is a "major"?'
    ][i],
    options: [
      ['A degree usually earned after two years of study', 'The highest degree possible', 'A degree for sports'],
      ['An undergraduate academic degree', 'A degree for master students', 'A type of school book'],
      ['A postgraduate academic degree', 'A degree for beginner students', 'A type of teacher'],
      ['The highest level of academic degree', 'A degree for medical doctors only', 'A small certificate'],
      ['A document certifying the successful completion of a course', 'A type of computer', 'A school bus'],
      ['An official document attesting a certain fact or achievement', 'A long book', 'A type of pen'],
      ['Doctor of Medicine', 'Master of Design', 'Managing Director'],
      ['Juris Doctor (Law degree)', 'Junior Doctor', 'Job Description'],
      ['A secondary area of specialized study', 'A young student', 'A type of musical instrument'],
      ['The main area of specialized study', 'A high-ranking officer only', 'A very large building']
    ][i],
    correctAnswer: [
      'A degree usually earned after two years of study', 'An undergraduate academic degree',
      'A postgraduate academic degree', 'The highest level of academic degree',
      'A document certifying the successful completion of a course',
      'An official document attesting a certain fact or achievement', 'Doctor of Medicine',
      'Juris Doctor (Law degree)', 'A secondary area of specialized study',
      'The main area of specialized study'
    ][i],
    points: 1
  }))
};

const s10 = {
  id: genId(LEVEL, UNIT_ID, 's10', 0),
  type: 'vocabulary',
  title: 'Campus Life',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's10', i + 1),
    type: 'multiple-choice',
    question: [
      'What is a "dormitory" (dorm)?',
      'What is the "registrar"?',
      'What is a "lecture hall"?',
      'What is "orientation" for new students?',
      'What is an "extracurricular" activity?',
      'What is the "student union"?',
      'What are "office hours" for professors?',
      'What is a "transcript"?',
      'What is "room and board"?',
      'What is a "fraternity" or "sorority"?'
    ][i],
    options: [
      ['A university building providing living quarters for students', 'A place to play games', 'A type of classroom'],
      ['The official in a university who keeps student records', 'A type of computer', 'A school principal'],
      ['A large room used for instruction, typically at a university', 'A place to eat lunch', 'A type of gym'],
      ['A period of time before the start of classes to help new students adjust', 'A type of test', 'A school holiday'],
      ['An activity that falls outside the regular curriculum', 'A very hard homework assignment', 'A type of exam'],
      ['An organization that represents and supports students', 'A place where students get married', 'A type of teacher group'],
      ['Specific times when students can meet with their professors', 'The time when the office is closed', 'A type of party'],
      ['An official record of a student\'s academic performance', 'A type of storybook', 'A school ID card'],
      ['Lodging and food', 'A new desk', 'A type of game'],
      ['A social organization for male or female students', 'A type of science lab', 'A school sports team']
    ][i],
    correctAnswer: [
      'A university building providing living quarters for students',
      'The official in a university who keeps student records',
      'A large room used for instruction, typically at a university',
      'A period of time before the start of classes to help new students adjust',
      'An activity that falls outside the regular curriculum',
      'An organization that represents and supports students',
      'Specific times when students can meet with their professors',
      'An official record of a student\'s academic performance', 'Lodging and food',
      'A social organization for male or female students'
    ][i],
    points: 1
  }))
};

export const B1_WEEK_31 = createShardedToeflUnit(
  'toefl-b1-w31',
  'Week 31: Education & Research',
  'Understand the academic world, research methods, and higher education systems.',
  ['Master education and research vocabulary', 'Use Gerunds and Infinitives correctly', 'Understand academic texts and lectures'],
  [s1, s2, s3, s4, s5, s6, s7, s8, s9, s10]
);
