import { createShardedToeflUnit, genId } from '../utils';

const UNIT_ID = 23;
const LEVEL = 'b1';

// SHARDS 1-2: Engineering & Tech Vocabulary
const s1 = {
  id: genId(LEVEL, UNIT_ID, 's1', 0),
  type: 'vocabulary',
  title: 'Engineering Branches & Materials',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's1', i + 1),
    type: 'multiple-choice',
    question: [
      'What does a "civil engineer" primarily design?',
      'The branch of "mechanical engineering" focuses on:',
      'What is "aerospace engineering"?',
      'The term "infrastructure" refers to:',
      'What is an "alloy"?',
      'The word "tensile" strength relates to:',
      'What is "biotechnology"?',
      'The term "nanotechnology" involves:',
      'What is "robotics"?',
      'The word "prototype" means:'
    ][i],
    options: [
      ['Roads, bridges, and buildings', 'Computers and software', 'New types of food'],
      ['Design and manufacture of machinery', 'The study of stars', 'How plants grow'],
      ['Design of aircraft and spacecraft', 'The study of deep oceans', 'Building schools'],
      ['Basic physical and organizational structures (roads, power)', 'A type of internal organ', 'A style of painting'],
      ['A metal made by combining two or more metallic elements', 'A type of plastic', 'A pure element'],
      ['The resistance of a material to breaking under tension', 'How heavy something is', 'The color of a material'],
      ['Exploitation of biological processes for industrial purposes', 'The study of ancient rocks', 'A type of exercise'],
      ['Manipulation of matter on an atomic or molecular scale', 'Building very large ships', 'Studying the sun'],
      ['Branch of technology dealing with robots', 'The study of birds', 'A type of music'],
      ['A first or preliminary version of a device or vehicle', 'A final product', 'A type of fuel']
    ][i],
    correctAnswer: [
      'Roads, bridges, and buildings', 'Design and manufacture of machinery',
      'Design of aircraft and spacecraft', 'Basic physical and organizational structures (roads, power)',
      'A metal made by combining two or more metallic elements',
      'The resistance of a material to breaking under tension',
      'Exploitation of biological processes for industrial purposes',
      'Manipulation of matter on an atomic or molecular scale', 'Branch of technology dealing with robots',
      'A first or preliminary version of a device or vehicle'
    ][i],
    points: 1
  }))
};

const s2 = {
  id: genId(LEVEL, UNIT_ID, 's2', 0),
  type: 'vocabulary',
  title: 'Modern Tech & Gadgets',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's2', i + 1),
    type: 'multiple-choice',
    question: [
      'What is "automation"?',
      'The word "interface" refers to:',
      'What is "bandwidth"?',
      'The term "encryption" means:',
      'What is "cloud computing"?',
      'The word "innovation" refers to:',
      'What is "artificial intelligence"?',
      'The term "virtual reality" means:',
      'What is "open source" software?',
      'The word "patent" refers to:'
    ][i],
    options: [
      ['Use of control systems for operating equipment', 'Doing everything by hand', 'Working in a factory'],
      ['Point where two systems or subjects meet and interact', 'A type of computer screen', 'A secret password'],
      ['Range of frequencies used to transmit data', 'A type of music group', 'The weight of a computer'],
      ['Converting information into a secret code', 'Writing a letter', 'Taking a photo'],
      ['Using a network of remote servers to store and process data', 'Calculating the weather', 'Building a real cloud'],
      ['The action or process of innovating (new methods/ideas)', 'Copying an old idea', 'Following a tradition'],
      ['Computer systems able to perform tasks requiring human intelligence', 'A very smart human', 'A type of robot only'],
      ['Computer-generated simulation of a 3D environment', 'Watching TV', 'Having a dream'],
      ['Software with source code that anyone can inspect/modify', 'Software that is free to buy', 'Secret software'],
      ['Government authority or license conferring a right for a set period', 'A type of medicine', 'A high school diploma']
    ][i],
    correctAnswer: [
      'Use of control systems for operating equipment', 'Point where two systems or subjects meet and interact',
      'Range of frequencies used to transmit data', 'Converting information into a secret code',
      'Using a network of remote servers to store and process data', 'The action or process of innovating (new methods/ideas)',
      'Computer systems able to perform tasks requiring human intelligence',
      'Computer-generated simulation of a 3D environment', 'Software with source code that anyone can inspect/modify',
      'Government authority or license conferring a right for a set period'
    ][i],
    points: 1
  }))
};

const s3 = {
  id: genId(LEVEL, UNIT_ID, 's3', 0),
  type: 'grammar',
  title: 'Future Continuous & Future Perfect',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's3', i + 1),
    type: 'multiple-choice',
    question: [
      'This time tomorrow, I ____ to London.',
      'By next year, they ____ the new bridge.',
      'Will you ____ the lab all afternoon?',
      'She ____ her degree by the end of June.',
      'At 8 PM tonight, we ____ dinner.',
      'By the time you arrive, I ____ the report.',
      'They ____ in this city for ten years by next month.',
      'I ____ my exams by this time next week!',
      'He ____ working on the project when we visit.',
      'By 2050, many things ____ changed.'
    ][i],
    options: [
      ['will be flying', 'will have flown', 'will fly'],
      ['will have built', 'will be building', 'will build'],
      ['be using', 'have used', 'using'],
      ['will have finished', 'will be finishing', 'will finish'],
      ['will be having', 'will have had', 'will have'],
      ['will have finished', 'will be finishing', 'will finish'],
      ['will have lived', 'will be living', 'will live'],
      ['will have completed', 'will be completing', 'will complete'],
      ['will be', 'will have', 'will'],
      ['will have', 'will be', 'will']
    ][i],
    correctAnswer: [
      'will be flying', 'will have built', 'be using', 'will have finished', 'will be having',
      'will have finished', 'will have lived', 'will have completed', 'will be', 'will have'
    ][i],
    points: 1
  }))
};

const s4 = {
  id: genId(LEVEL, UNIT_ID, 's4', 0),
  type: 'grammar',
  title: 'Adverbial Clauses',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's4', i + 1),
    type: 'multiple-choice',
    question: [
      'We will start the test ____ everyone is ready.',
      'He stayed late ____ he could finish the project.',
      '____ it was raining, the game continued.',
      'I will go ____ you go.',
      'She studied hard ____ she could pass the exam.',
      'You can use my car ____ you drive carefully.',
      '____ the weather is bad, we will stay home.',
      'He won the race ____ he had an injury.',
      'Wait here ____ I come back.',
      'I didn\'t buy the phone ____ it was too expensive.'
    ][i],
    options: [
      ['as soon as', 'until', 'before'],
      ['so that', 'because', 'although'],
      ['Although', 'Because', 'Since'],
      ['wherever', 'whenever', 'however'],
      ['in order that', 'because', 'so'],
      ['as long as', 'unless', 'although'],
      ['Since', 'Although', 'Despite'],
      ['even though', 'because', 'so'],
      ['until', 'as soon as', 'while'],
      ['because', 'so', 'although']
    ][i],
    correctAnswer: [
      'as soon as', 'so that', 'Although', 'wherever', 'in order that', 'as long as', 'Since', 'even though', 'until', 'because'
    ][i],
    points: 1
  }))
};

const s5 = {
  id: genId(LEVEL, UNIT_ID, 's5', 0),
  type: 'reading',
  title: 'Reading: The Industrial Revolution',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's5', i + 1),
    type: 'multiple-choice',
    question: [
      'When did the Industrial Revolution begin?',
      'In which country did it start?',
      'What was the primary source of power initially?',
      'Which invention is most associated with this era?',
      'How did it affect the textile industry?',
      'What was the impact on urbanization?',
      'Which social class emerged during this period?',
      'What were "factories"?',
      'How did transportation change?',
      'What were some negative effects of the revolution?'
    ][i],
    options: [
      ['Mid-18th Century', 'Early 20th Century', '15th Century'],
      ['Great Britain', 'United States', 'Germany'],
      ['Steam and coal', 'Electricity', 'Solar power'],
      ['The steam engine', 'The computer', 'The airplane'],
      ['It moved from homes to large factories', 'It disappeared', 'It became more expensive'],
      ['People moved from rural areas to cities', 'Cities became smaller', 'No impact'],
      ['The working class and industrial middle class', 'The royalty only', 'The farmers'],
      ['Buildings where goods are manufactured by machine', 'Large schools', 'A type of park'],
      ['The development of canals, roads, and railways', 'It became slower', 'People stopped traveling'],
      ['Poor working conditions and pollution', 'Too much free time', 'Better food']
    ][i],
    correctAnswer: [
      'Mid-18th Century', 'Great Britain', 'Steam and coal', 'The steam engine',
      'It moved from homes to large factories', 'People moved from rural areas to cities',
      'The working class and industrial middle class', 'Buildings where goods are manufactured by machine',
      'The development of canals, roads, and railways', 'Poor working conditions and pollution'
    ][i],
    points: 1
  }))
};

const s6 = {
  id: genId(LEVEL, UNIT_ID, 's6', 0),
  type: 'reading',
  title: 'Reading: The Rise of Artificial Intelligence',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's6', i + 1),
    type: 'multiple-choice',
    question: [
      'What is the ultimate goal of AI research?',
      'What is "machine learning"?',
      'How does AI differ from traditional programming?',
      'What is a "neural network"?',
      'Which field has been significantly impacted by AI?',
      'What is "natural language processing"?',
      'Are current AIs "sentient" (conscious)?',
      'What is the concern about "black box" algorithms?',
      'How can AI improve healthcare?',
      'What is the future of AI in the workforce?'
    ][i],
    options: [
      ['To create systems that can perform tasks requiring human intelligence', 'To replace all humans', 'To build a better calculator'],
      ['A subset of AI where systems learn from data', 'Teaching a machine to walk', 'A new type of school'],
      ['AI systems can learn and adapt without explicit instructions', 'AI is faster only', 'There is no difference'],
      ['A computer system modeled on the human brain', 'A type of fishing net', 'A social media group'],
      ['Medicine, finance, and transport', 'History only', 'Sports only'],
      ['Enabling computers to understand and speak human language', 'Learning many languages', 'A type of computer code'],
      ['No, they are complex mathematical models', 'Yes, they have feelings', 'Some are, some aren\'t'],
      ['It is difficult to understand how they reach a decision', 'They are painted black', 'They are very small'],
      ['By analyzing medical images and data for faster diagnosis', 'By replacing all doctors', 'By making medicine free'],
      ['It will likely automate repetitive tasks and create new roles', 'It will end all work', 'It won\'t change anything']
    ][i],
    correctAnswer: [
      'To create systems that can perform tasks requiring human intelligence', 'A subset of AI where systems learn from data',
      'AI systems can learn and adapt without explicit instructions', 'A computer system modeled on the human brain',
      'Medicine, finance, and transport', 'Enabling computers to understand and speak human language',
      'No, they are complex mathematical models', 'It is difficult to understand how they reach a decision',
      'By analyzing medical images and data for faster diagnosis',
      'It will likely automate repetitive tasks and create new roles'
    ][i],
    points: 1
  }))
};

const s7 = {
  id: genId(LEVEL, UNIT_ID, 's7', 0),
  type: 'listening',
  title: 'Listening: Lecture on Sustainable Engineering',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's7', i + 1),
    type: 'multiple-choice',
    question: [
      'What is sustainable engineering?',
      'What are "green buildings"?',
      'Why is renewable energy important in engineering?',
      'What is the "life cycle" of a product?',
      'How can engineers reduce waste?',
      'What is "circular economy"?',
      'Why is material selection important for sustainability?',
      'What is "urban planning"?',
      'How does technology help sustainability?',
      'What is the role of the public in sustainable engineering?'
    ][i],
    options: [
      ['Designing systems that don\'t compromise future generations', 'Building things very fast', 'Using a lot of concrete'],
      ['Structures designed to be environmentally responsible', 'Buildings painted green', 'Buildings with many plants only'],
      ['To reduce carbon footprint and dependency on fossil fuels', 'It is cheaper', 'It looks better'],
      ['The stages a product goes through from creation to disposal', 'How long a person uses a product', 'The warranty of a product'],
      ['Through efficient design and recycling', 'By building more factories', 'By using more plastic'],
      ['An economic system aimed at eliminating waste', 'An economy based on circles', 'A very small economy'],
      ['Some materials are easier to recycle or have lower environmental impact', 'Materials don\'t matter', 'Only the price matters'],
      ['Design and regulation of the use of space in cities', 'Building a new house', 'Planting trees'],
      ['It allows for more efficient use of resources', 'It makes things more complex', 'It has no role'],
      ['Demanding and supporting sustainable products and policies', 'Doing nothing', 'Complaining about prices']
    ][i],
    correctAnswer: [
      'Designing systems that don\'t compromise future generations', 'Structures designed to be environmentally responsible',
      'To reduce carbon footprint and dependency on fossil fuels',
      'The stages a product goes through from creation to disposal', 'Through efficient design and recycling',
      'An economic system aimed at eliminating waste',
      'Some materials are easier to recycle or have lower environmental impact',
      'Design and regulation of the use of space in cities', 'It allows for more efficient use of resources',
      'Demanding and supporting sustainable products and policies'
    ][i],
    points: 1
  }))
};

const s8 = {
  id: genId(LEVEL, UNIT_ID, 's8', 0),
  type: 'listening',
  title: 'Listening: Discussion on Space Exploration',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's8', i + 1),
    type: 'multiple-choice',
    question: [
      'What is the goal of the Artemis program?',
      'Why is Mars a target for exploration?',
      'What are the challenges of long-term space travel?',
      'What is the role of private companies in space?',
      'What is "space debris"?',
      'How does space research benefit life on Earth?',
      'What is a "rover"?',
      'What is the significance of the International Space Station (ISS)?',
      'Is there water on the Moon?',
      'What is "terraforming"?'
    ][i],
    options: [
      ['Returning humans to the Moon', 'Exploring the Sun', 'Leaving the galaxy'],
      ['It has many similarities to Earth and might have had life', 'It is very close', 'It is made of gold'],
      ['Radiation, isolation, and microgravity effects', 'Finding good food', 'Sleeping too much'],
      ['They are making space access cheaper and more frequent', 'They are not involved', 'They only build satellites'],
      ['Discarded objects and fragments in orbit around Earth', 'Rocks from other planets', 'Clouds in space'],
      ['It leads to advancements in technology and medicine', 'It has no benefit', 'It only benefits scientists'],
      ['A remote-controlled vehicle for exploring planets', 'A type of rocket', 'A telescope'],
      ['A collaborative laboratory for scientific research in space', 'A luxury hotel', 'A military base'],
      ['Yes, mainly in the form of ice in shadowed craters', 'No, it is completely dry', 'Only in rivers'],
      ['Transforming a planet to make it habitable for humans', 'Building a farm', 'Taking a photo of Earth']
    ][i],
    correctAnswer: [
      'Returning humans to the Moon', 'It has many similarities to Earth and might have had life',
      'Radiation, isolation, and microgravity effects', 'They are making space access cheaper and more frequent',
      'Discarded objects and fragments in orbit around Earth', 'It leads to advancements in technology and medicine',
      'A remote-controlled vehicle for exploring planets',
      'A collaborative laboratory for scientific research in space',
      'Yes, mainly in the form of ice in shadowed craters', 'Transforming a planet to make it habitable for humans'
    ][i],
    points: 1
  }))
};

const s9 = {
  id: genId(LEVEL, UNIT_ID, 's9', 0),
  type: 'vocabulary',
  title: 'Technical Verbs & Actions',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's9', i + 1),
    type: 'multiple-choice',
    question: [
      'What does it mean to "calibrate" a device?',
      'The word "simulate" means:',
      'What does "optimize" mean?',
      'The term "fabricate" refers to:',
      'What does it mean to "diagnose" a system error?',
      'The word "implement" means:',
      'What does "innovate" mean?',
      'The term "upgrade" refers to:',
      'What does it mean to "maintain" equipment?',
      'The word "validate" means:'
    ][i],
    options: [
      ['Adjust so that it can give accurate readings', 'To break it', 'To paint it'],
      ['Imitate the appearance or character of something', 'To make something real', 'To hide something'],
      ['Make the best or most effective use of a resource', 'To make something bigger', 'To stop working'],
      ['Construct or manufacture something', 'To tell a lie', 'To draw a picture'],
      ['Identify the nature of the problem', 'To fix the problem', 'To ignore the problem'],
      ['Put a decision or plan into effect', 'To think of an idea', 'To cancel a plan'],
      ['Make changes in something established (new ideas)', 'To copy', 'To destroy'],
      ['Raise to a higher standard or improve', 'To throw away', 'To keep the same'],
      ['Keep in good condition by checking and repairing', 'To use until it breaks', 'To sell'],
      ['Check or prove the accuracy of something', 'To guess', 'To forget']
    ][i],
    correctAnswer: [
      'Adjust so that it can give accurate readings', 'Imitate the appearance or character of something',
      'Make the best or most effective use of a resource', 'Construct or manufacture something',
      'Identify the nature of the problem', 'Put a decision or plan into effect',
      'Make changes in something established (new ideas)', 'Raise to a higher standard or improve',
      'Keep in good condition by checking and repairing', 'Check or prove the accuracy of something'
    ][i],
    points: 1
  }))
};

const s10 = {
  id: genId(LEVEL, UNIT_ID, 's10', 0),
  type: 'vocabulary',
  title: 'Compound Nouns in Tech',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's10', i + 1),
    type: 'multiple-choice',
    question: [
      'What is "high-speed" internet?',
      'A "state-of-the-art" facility is:',
      'What is a "user-friendly" interface?',
      'The term "touch-screen" refers to:',
      'What is "data-mining"?',
      'A "real-time" update is:',
      'What is "software-engineering"?',
      'The term "cyber-security" refers to:',
      'What is "long-distance" communication?',
      'A "space-shuttle" is:'
    ][i],
    options: [
      ['Internet that allows fast data transfer', 'Internet for fast cars', 'Internet that is very expensive'],
      ['Using the latest and most advanced technology', 'An old building', 'A place with many paintings'],
      ['Easy for a person to use and understand', 'Friendly for cats', 'A type of computer mouse'],
      ['A display that can detect a touch in its area', 'A screen that is soft', 'A screen you shouldn\'t touch'],
      ['Practice of examining large databases to generate information', 'Digging for gold in computers', 'Deleting data'],
      ['Occurring or updated immediately', 'A planned update for next week', 'An old update'],
      ['The application of engineering to the design of software', 'Fixing a computer monitor', 'Selling computers'],
      ['Protection of computer systems from theft or damage', 'A type of lock for a house', 'A secret agent'],
      ['Communication over a large physical space', 'Talking to someone in the same room', 'A type of radio'],
      ['A rocket-launched spacecraft able to land like an unpowered aircraft', 'A type of bus', 'A small boat']
    ][i],
    correctAnswer: [
      'Internet that allows fast data transfer', 'Using the latest and most advanced technology',
      'Easy for a person to use and understand', 'A display that can detect a touch in its area',
      'Practice of examining large databases to generate information', 'Occurring or updated immediately',
      'The application of engineering to the design of software',
      'Protection of computer systems from theft or damage', 'Communication over a large physical space',
      'A rocket-launched spacecraft able to land like an unpowered aircraft'
    ][i],
    points: 1
  }))
};

export const B1_WEEK_23 = createShardedToeflUnit(
  'toefl-b1-w23',
  'Week 23: Engineering & Technology',
  'Discover the impact of innovation, engineering marvels, and the future of digital technology.',
  ['Master engineering and tech terminology', 'Use future continuous and future perfect tenses correctly', 'Identify advancements in AI and space exploration'],
  [s1, s2, s3, s4, s5, s6, s7, s8, s9, s10]
);
