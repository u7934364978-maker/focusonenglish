import { createShardedToeflUnit, genId } from '../utils';

const UNIT_ID = 28;
const LEVEL = 'b1';

// SHARDS 1-2: Sociology Vocabulary
const s1 = {
  id: genId(LEVEL, UNIT_ID, 's1', 0),
  type: 'vocabulary',
  title: 'Social Structure & Institutions',
  questions: [
    {
      id: genId(LEVEL, UNIT_ID, 's1', 1),
      type: 'multiple-choice',
      question: 'What is "sociology"?',
      options: ['The study of the development, structure, and functioning of human society', 'The study of rocks', 'The study of the human body'],
      correctAnswer: 'The study of the development, structure, and functioning of human society',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's1', 2),
      type: 'multiple-choice',
      question: 'The term "social norm" refers to:',
      options: ['An informal rule of behavior in a group or society', 'A person who is very popular', 'A type of government law'],
      correctAnswer: 'An informal rule of behavior in a group or society',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's1', 3),
      type: 'multiple-choice',
      question: 'What is a "social institution"?',
      options: ['An established and enduring pattern of social relationships', 'A building where people go to dance', 'A type of school for animals'],
      correctAnswer: 'An established and enduring pattern of social relationships',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's1', 4),
      type: 'multiple-choice',
      question: 'The word "stratification" in sociology means:',
      options: ['The arrangement of society into hierarchical layers', 'Taking photos of people', 'Building new houses'],
      correctAnswer: 'The arrangement of society into hierarchical layers',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's1', 5),
      type: 'multiple-choice',
      question: 'What is "urbanization"?',
      options: ['The process of making an area more urban (city-like)', 'Moving to a farm', 'Closing all factories'],
      correctAnswer: 'The process of making an area more urban (city-like)',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's1', 6),
      type: 'multiple-choice',
      question: 'The term "globalization" refers to:',
      options: ['The process by which businesses or other organizations develop international influence', 'Growing plants in a greenhouse', 'Staying in one small town'],
      correctAnswer: 'The process by which businesses or other organizations develop international influence',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's1', 7),
      type: 'multiple-choice',
      question: 'What is "social mobility"?',
      options: ['Movement of individuals or groups between different social layers', 'Moving to a new house', 'Driving a car'],
      correctAnswer: 'Movement of individuals or groups between different social layers',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's1', 8),
      type: 'multiple-choice',
      question: 'A "subculture" is:',
      options: ['A cultural group within a larger culture', 'A group of scientists', 'A type of ancient writing'],
      correctAnswer: 'A cultural group within a larger culture',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's1', 9),
      type: 'multiple-choice',
      question: 'What does "secularization" mean?',
      options: ['Action of separating from religious or spiritual concerns', 'Building a new church', 'Studying history'],
      correctAnswer: 'Action of separating from religious or spiritual concerns',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's1', 10),
      type: 'multiple-choice',
      question: 'The term "demographics" refers to:',
      options: ['Statistical data relating to the population', 'A type of movie', 'Drawing maps'],
      correctAnswer: 'Statistical data relating to the population',
      points: 1
    }
  ]
};

const s2 = {
  id: genId(LEVEL, UNIT_ID, 's2', 0),
  type: 'vocabulary',
  title: 'Cultural Diversity & Identity',
  questions: [
    {
      id: genId(LEVEL, UNIT_ID, 's2', 1),
      type: 'multiple-choice',
      question: 'What is "multiculturalism"?',
      options: ['The presence of several distinct cultural or ethnic groups within a society', 'Everyone following one culture', 'Learning only one language'],
      correctAnswer: 'The presence of several distinct cultural or ethnic groups within a society',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's2', 2),
      type: 'multiple-choice',
      question: 'The word "ethnicity" refers to:',
      options: ['The fact or state of belonging to a social group that has a common national or cultural tradition', 'The color of your eyes', 'Where you went to school'],
      correctAnswer: 'The fact or state of belonging to a social group that has a common national or cultural tradition',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's2', 3),
      type: 'multiple-choice',
      question: 'What is "cultural assimilation"?',
      options: ['The process by which a minority group comes to resemble a society\'s majority group', 'Travel to another country', 'Buying cultural artifacts'],
      correctAnswer: 'The process by which a minority group comes to resemble a society\'s majority group',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's2', 4),
      type: 'multiple-choice',
      question: 'The term "prejudice" refers to:',
      options: ['Preconceived opinion that is not based on reason or actual experience', 'A type of legal document', 'Being very smart'],
      correctAnswer: 'Preconceived opinion that is not based on reason or actual experience',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's2', 5),
      type: 'multiple-choice',
      question: 'What is "discrimination"?',
      options: ['Unjust or prejudicial treatment of different categories of people', 'Being very kind to everyone', 'Working in a factory'],
      correctAnswer: 'Unjust or prejudicial treatment of different categories of people',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's2', 6),
      type: 'multiple-choice',
      question: 'The word "identity" in sociology means:',
      options: ['The qualities, beliefs, and expressions that make a person or group', 'A passport or ID card only', 'Your physical address'],
      correctAnswer: 'The qualities, beliefs, and expressions that make a person or group',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's2', 7),
      type: 'multiple-choice',
      question: 'What is a "stereotype"?',
      options: ['A widely held but fixed and oversimplified image or idea of a particular type of person', 'A new radio', 'A type of fast food'],
      correctAnswer: 'A widely held but fixed and oversimplified image or idea of a particular type of person',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's2', 8),
      type: 'multiple-choice',
      question: 'The term "heritage" refers to:',
      options: ['Valued objects and qualities passed down from previous generations', 'Buying a new house', 'The money you earn'],
      correctAnswer: 'Valued objects and qualities passed down from previous generations',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's2', 9),
      type: 'multiple-choice',
      question: 'What does "accacculturation" mean?',
      options: ['Cultural modification by adapting to or borrowing traits from another culture', 'Studying only your own culture', 'Forgetting everything'],
      correctAnswer: 'Cultural modification by adapting to or borrowing traits from another culture',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's2', 10),
      type: 'multiple-choice',
      question: 'The term "nationalism" refers to:',
      options: ['Identification with one\'s own nation and support for its interests', 'Loving all countries equally', 'Having no country'],
      correctAnswer: 'Identification with one\'s own nation and support for its interests',
      points: 1
    }
  ]
};

const s3 = {
  id: genId(LEVEL, UNIT_ID, 's3', 0),
  type: 'grammar',
  title: 'Reported Speech',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's3', i + 1),
    type: 'multiple-choice',
    question: [
      'The sociologist said that urbanization ____ a global trend.',
      'They mentioned that they ____ the experiment the previous week.',
      'She asked me if I ____ sociology before.',
      'The professor stated that social norms ____ over time.',
      'He told us that he ____ the report by Friday.',
      'The study confirmed that many people ____ to cities for better jobs.',
      'I asked her what she ____ about the new cultural policy.',
      'The researchers reported that the data ____ analyzed already.',
      'They said they ____ a documentary about subcultures.',
      'She mentioned that her family ____ originally from Italy.'
    ][i],
    options: [
      ['was', 'is', 'will be'],
      ['had finished', 'finish', 'have finished'],
      ['had studied', 'study', 'have studied'],
      ['change', 'changed', 'were changing'],
      ['would finish', 'will finish', 'finishes'],
      ['were moving', 'move', 'will move'],
      ['thought', 'thinks', 'was thinking'],
      ['had been', 'is', 'was'],
      ['were watching', 'watch', 'are watching'],
      ['was', 'is', 'has been']
    ][i],
    correctAnswer: [
      'was', 'had finished', 'had studied', 'changed', 'would finish',
      'were moving', 'thought', 'had been', 'were watching', 'was'
    ][i],
    points: 1
  }))
};

const s4 = {
  id: genId(LEVEL, UNIT_ID, 's4', 0),
  type: 'grammar',
  title: 'Noun Clauses',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's4', i + 1),
    type: 'multiple-choice',
    question: [
      '____ society functions is a complex topic.',
      'I don\'t know ____ the new policy will be implemented.',
      'Scientists are researching ____ people conform to group pressure.',
      'The question is ____ we can improve social mobility.',
      '____ she said was very interesting.',
      'We discussed ____ cultural assimilation affects identity.',
      'I wonder ____ the population will grow in the next decade.',
      'It is clear ____ education is key to success.',
      'They explained ____ the system works.',
      '____ causes social change is often debated.'
    ][i],
    options: [
      ['How', 'That', 'If'],
      ['when', 'that', 'if'],
      ['why', 'that', 'which'],
      ['whether', 'that', 'who'],
      ['What', 'That', 'Which'],
      ['how', 'that', 'which'],
      ['how much', 'that', 'which'],
      ['that', 'how', 'if'],
      ['how', 'that', 'which'],
      ['What', 'That', 'Who']
    ][i],
    correctAnswer: [
      'How', 'when', 'why', 'whether', 'What', 'how', 'how much', 'that', 'how', 'What'
    ][i],
    points: 1
  }))
};

const s5 = {
  id: genId(LEVEL, UNIT_ID, 's5', 0),
  type: 'reading',
  title: 'Reading: Urbanization Trends',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's5', i + 1),
    type: 'multiple-choice',
    question: [
      'What is urbanization?',
      'Why do people move from rural areas to cities?',
      'What is a "megacity"?',
      'How does urbanization impact the environment?',
      'What is "urban sprawl"?',
      'What are some social challenges in growing cities?',
      'How can cities become more "sustainable"?',
      'What is "gentrification"?',
      'What role does technology play in modern cities?',
      'What is a "smart city"?'
    ][i],
    options: [
      ['The shift from rural to urban living', 'Moving to the countryside', 'Building more farms'],
      ['For better job opportunities and services', 'To avoid people', 'To grow their own food'],
      ['A city with more than 10 million people', 'A city with a lot of parks', 'A very small village'],
      ['It can lead to pollution and habitat loss', 'It makes the air cleaner', 'It has no impact'],
      ['The rapid expansion of the geographic extent of cities', 'A type of urban park', 'Building very tall skyscrapers'],
      ['Overcrowding and lack of affordable housing', 'Too much silence', 'Lack of technology'],
      ['By improving public transport and green spaces', 'By building more car parks', 'By cutting down trees'],
      ['Renovating urban neighborhoods, often displacing lower-income residents', 'Moving to a farm', 'Closing all shops'],
      ['It helps manage resources and improve services', 'It makes cities more boring', 'It is not used in cities'],
      ['A city that uses technology to increase efficiency and improve quality of life', 'A city where everyone is a scientist', 'A city with no computers']
    ][i],
    correctAnswer: [
      'The shift from rural to urban living', 'For better job opportunities and services',
      'A city with more than 10 million people', 'It can lead to pollution and habitat loss',
      'The rapid expansion of the geographic extent of cities', 'Overcrowding and lack of affordable housing',
      'By improving public transport and green spaces',
      'Renovating urban neighborhoods, often displacing lower-income residents',
      'It helps manage resources and improve services',
      'A city that uses technology to increase efficiency and improve quality of life'
    ][i],
    points: 1
  }))
};

const s6 = {
  id: genId(LEVEL, UNIT_ID, 's6', 0),
  type: 'reading',
  title: 'Reading: The Impact of Social Media',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's6', i + 1),
    type: 'multiple-choice',
    question: [
      'How has social media changed communication?',
      'What is an "echo chamber" in social media?',
      'How can social media affect mental health?',
      'What is "cyberbullying"?',
      'How do businesses use social media?',
      'What is "viral" content?',
      'How does social media influence political movements?',
      'What is "data privacy"?',
      'What are "influencers"?',
      'What is the "digital divide"?'
    ][i],
    options: [
      ['It has made it instantaneous and global', 'It has made it slower', 'It has stopped people from talking'],
      ['An environment where a person only encounters information that confirms their beliefs', 'A place with very loud music', 'A type of computer hardware'],
      ['It can lead to anxiety or low self-esteem due to comparison', 'It makes everyone happy all the time', 'It has no effect'],
      ['Using electronic communication to bully a person', 'Playing games online', 'Sending an email to a friend'],
      ['For marketing and customer engagement', 'To avoid customers', 'To play games'],
      ['Content that spreads rapidly across the internet', 'Content that is harmful like a virus', 'Old and boring content'],
      ['By allowing for rapid organization and spread of information', 'By making people not care about politics', 'It has no influence'],
      ['The protection of personal information online', 'Having a public profile', 'Sharing your password with everyone'],
      ['People with the power to affect the purchasing decisions of others', 'People who are always sick', 'People who fixed computers'],
      ['The gap between those with access to technology and those without', 'A type of bridge', 'A technical error']
    ][i],
    correctAnswer: [
      'It has made it instantaneous and global',
      'An environment where a person only encounters information that confirms their beliefs',
      'It can lead to anxiety or low self-esteem due to comparison', 'Using electronic communication to bully a person',
      'For marketing and customer engagement', 'Content that spreads rapidly across the internet',
      'By allowing for rapid organization and spread of information',
      'The protection of personal information online',
      'People with the power to affect the purchasing decisions of others',
      'The gap between those with access to technology and those without'
    ][i],
    points: 1
  }))
};

const s7 = {
  id: genId(LEVEL, UNIT_ID, 's7', 0),
  type: 'listening',
  title: 'Listening: Lecture on Anthropology',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's7', i + 1),
    type: 'multiple-choice',
    question: [
      'What is "anthropology"?',
      'What are the four main branches of anthropology?',
      'What is "cultural relativism"?',
      'What does an "archaeologist" study?',
      'What is "fieldwork"?',
      'What is "ethnography"?',
      'How do anthropologists define "culture"?',
      'What is "linguistic anthropology"?',
      'Why is anthropology important today?',
      'What is "participant observation"?'
    ][i],
    options: [
      ['The study of human societies and cultures and their development', 'The study of ants', 'The study of stars'],
      ['Biological, Cultural, Linguistic, and Archaeological', 'Reading, Writing, Listening, Speaking', 'Math, Science, History, Art'],
      ['The idea that a person\'s beliefs should be understood based on their own culture', 'Thinking your culture is the best', 'Judging others'],
      ['Physical remains of past human lives', 'Modern technology', 'Living animals'],
      ['Practical work conducted by a researcher in the natural environment', 'Working in an office', 'Staying at home'],
      ['The scientific description of the customs of individual peoples and cultures', 'A type of dictionary', 'A map of the stars'],
      ['The shared patterns of behaviors and interactions, cognitive constructs and understanding', 'Only music and art', 'A type of food'],
      ['The study of how language influences social life', 'The study of how to speak faster', 'The study of grammar rules only'],
      ['It helps us understand diversity and global challenges', 'It helps us build better cars', 'It has no importance'],
      ['The researcher lives with the group being studied', 'Watching from a distance', 'Conducting surveys online only']
    ][i],
    correctAnswer: [
      'The study of human societies and cultures and their development',
      'Biological, Cultural, Linguistic, and Archaeological',
      'The idea that a person\'s beliefs should be understood based on their own culture',
      'Physical remains of past human lives',
      'Practical work conducted by a researcher in the natural environment',
      'The scientific description of the customs of individual peoples and cultures',
      'The shared patterns of behaviors and interactions, cognitive constructs and understanding',
      'The study of how language influences social life', 'It helps us understand diversity and global challenges',
      'The researcher lives with the group being studied'
    ][i],
    points: 1
  }))
};

const s8 = {
  id: genId(LEVEL, UNIT_ID, 's8', 0),
  type: 'listening',
  title: 'Listening: Discussion on Family Structures',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's8', i + 1),
    type: 'multiple-choice',
    question: [
      'What is a "nuclear family"?',
      'What is an "extended family"?',
      'How are family structures changing in modern society?',
      'What is a "single-parent family"?',
      'What is "kinship"?',
      'How does culture influence family roles?',
      'What is a "blended family"?',
      'Why is the family considered a primary social institution?',
      'What are some challenges for modern families?',
      'What is "socialization" in the family context?'
    ][i],
    options: [
      ['A family group consisting of two parents and their children', 'A family that lives near a power plant', 'A very large family'],
      ['A family that extends beyond the nuclear family, including grandparents and other relatives', 'A family with no children', 'A family that lives far away'],
      ['They are becoming more diverse', 'They are staying exactly the same', 'They are disappearing'],
      ['A family in which one parent raises the child or children', 'A family with only one child', 'A family with no parents'],
      ['Blood relationship or sharing of characteristics', 'A type of friendship', 'Being neighbors'],
      ['It defines expectations for behavior and responsibilities', 'It has no influence', 'It only affects what they eat'],
      ['A family consisting of a couple and their children from this and all previous relationships', 'A family that moves a lot', 'A family that speaks two languages'],
      ['It is where first socialization occurs', 'Because it is the biggest', 'Because it costs money'],
      ['Work-life balance and economic pressures', 'Having too much free time', 'Not enough technology'],
      ['The process of learning the norms and values of society', 'Going to school', 'Watching TV together']
    ][i],
    correctAnswer: [
      'A family group consisting of two parents and their children',
      'A family that extends beyond the nuclear family, including grandparents and other relatives',
      'They are becoming more diverse', 'A family in which one parent raises the child or children',
      'Blood relationship or sharing of characteristics',
      'It defines expectations for behavior and responsibilities',
      'A family consisting of a couple and their children from this and all previous relationships',
      'It is where first socialization occurs', 'Work-life balance and economic pressures',
      'The process of learning the norms and values of society'
    ][i],
    points: 1
  }))
};

const s9 = {
  id: genId(LEVEL, UNIT_ID, 's9', 0),
  type: 'vocabulary',
  title: 'Social Issues',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's9', i + 1),
    type: 'multiple-choice',
    question: [
      'What is "poverty"?',
      'The term "inequality" refers to:',
      'What is "unemployment"?',
      'The word "homelessness" means:',
      'What is "illiteracy"?',
      'The term "corruption" refers to:',
      'What is "crime"?',
      'The word "protest" means:',
      'What is "advocacy"?',
      'The term "justice" refers to:'
    ][i],
    options: [
      ['The state of being extremely poor', 'Having a lot of money', 'Being very happy'],
      ['Difference in size, degree, or circumstances', 'Being exactly the same', 'A type of math problem'],
      ['The state of being without a job', 'Having a high-paying job', 'Being a student'],
      ['The state of having no home', 'Living in a big house', 'Traveling on vacation'],
      ['The inability to read or write', 'The ability to speak many languages', 'Being very smart'],
      ['Dishonest or fraudulent conduct by those in power', 'Helping others', 'Building a new school'],
      ['An action that constitutes an offense and is punishable by law', 'A type of game', 'A good deed'],
      ['A statement or action expressing disapproval of or objection to something', 'A big party', 'A quiet dinner'],
      ['Public support for or recommendation of a particular cause or policy', 'Being a lawyer only', 'Against everything'],
      ['Just behavior or treatment', 'Being very mean', 'A type of fruit']
    ][i],
    correctAnswer: [
      'The state of being extremely poor', 'Difference in size, degree, or circumstances',
      'The state of being without a job', 'The state of having no home', 'The inability to read or write',
      'Dishonest or fraudulent conduct by those in power',
      'An action that constitutes an offense and is punishable by law',
      'A statement or action expressing disapproval of or objection to something',
      'Public support for or recommendation of a particular cause or policy', 'Just behavior or treatment'
    ][i],
    points: 1
  }))
};

const s10 = {
  id: genId(LEVEL, UNIT_ID, 's10', 0),
  type: 'vocabulary',
  title: 'Cultural Traditions',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's10', i + 1),
    type: 'multiple-choice',
    question: [
      'What is a "tradition"?',
      'The word "ritual" refers to:',
      'What is "folklore"?',
      'The term "celebration" means:',
      'What is a "festival"?',
      'The word "custom" refers to:',
      'What is "heritage"?',
      'The term "legacy" means:',
      'What is "etiquette"?',
      'The word "symbol" refers to:'
    ][i],
    options: [
      ['Transmission of customs or beliefs from generation to generation', 'A new invention', 'A type of food'],
      ['A religious or solemn ceremony consisting of a series of actions', 'A type of tool', 'A fast car'],
      ['Traditional beliefs, customs, and stories of a community', 'A type of science', 'Modern technology'],
      ['The action of marking one\'s pleasure at an important event', 'Being very sad', 'A quiet day'],
      ['A day or period of celebration, typically for religious reasons', 'A type of test', 'A school building'],
      ['A traditional and widely accepted way of behaving or doing something', 'A type of costume', 'A new law'],
      ['Property that is or may be inherited', 'A new car', 'A type of exercise'],
      ['An amount of money or property left to someone in a will', 'A bad memory', 'A type of tree'],
      ['The customary code of polite behavior in society', 'A type of hat', 'A sports game'],
      ['A thing that represents or stands for something else', 'A type of machine', 'A map']
    ][i],
    correctAnswer: [
      'Transmission of customs or beliefs from generation to generation',
      'A religious or solemn ceremony consisting of a series of actions',
      'Traditional beliefs, customs, and stories of a community',
      'The action of marking one\'s pleasure at an important event',
      'A day or period of celebration, typically for religious reasons',
      'A traditional and widely accepted way of behaving or doing something',
      'Property that is or may be inherited',
      'An amount of money or property left to someone in a will',
      'The customary code of polite behavior in society',
      'A thing that represents or stands for something else'
    ][i],
    points: 1
  }))
};

export const B1_WEEK_28 = createShardedToeflUnit(
  'toefl-b1-w28',
  'Week 28: Sociology & Culture',
  'Understand the structures of society, cultural diversity, and the impact of social trends.',
  ['Master sociology and cultural vocabulary', 'Use Reported Speech correctly in academic writing', 'Understand and use Noun Clauses effectively'],
  [s1, s2, s3, s4, s5, s6, s7, s8, s9, s10]
);
