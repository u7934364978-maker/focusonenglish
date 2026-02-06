import { createShardedToeflUnit, genId } from '../utils';

const UNIT_ID = 29;
const LEVEL = 'b1';

// SHARDS 1-2: CS Vocabulary
const s1 = {
  id: genId(LEVEL, UNIT_ID, 's1', 0),
  type: 'vocabulary',
  title: 'Hardware & Software Basics',
  questions: [
    {
      id: genId(LEVEL, UNIT_ID, 's1', 1),
      type: 'multiple-choice',
      question: 'What does CPU stand for?',
      options: ['Central Processing Unit', 'Computer Personal Unit', 'Central Power Utility'],
      correctAnswer: 'Central Processing Unit',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's1', 2),
      type: 'multiple-choice',
      question: 'What is "hardware"?',
      options: ['The physical components of a computer', 'The programs that run on a computer', 'A type of metal tool'],
      correctAnswer: 'The physical components of a computer',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's1', 3),
      type: 'multiple-choice',
      question: 'What is "software"?',
      options: ['The programs and other operating information used by a computer', 'Soft parts of a computer', 'Computer screen cleaners'],
      correctAnswer: 'The programs and other operating information used by a computer',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's1', 4),
      type: 'multiple-choice',
      question: 'What is an "operating system" (OS)?',
      options: ['Software that manages computer hardware and software resources', 'A system for operating a car', 'A manual for computers'],
      correctAnswer: 'Software that manages computer hardware and software resources',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's1', 5),
      type: 'multiple-choice',
      question: 'What is "RAM"?',
      options: ['Random Access Memory', 'Read All Messages', 'Real Audio Media'],
      correctAnswer: 'Random Access Memory',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's1', 6),
      type: 'multiple-choice',
      question: 'What does "booting" mean?',
      options: ['Starting up a computer', 'Buying new shoes', 'Deleting files'],
      correctAnswer: 'Starting up a computer',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's1', 7),
      type: 'multiple-choice',
      question: 'What is a "peripheral" device?',
      options: ['An auxiliary device used to put information into and get information out of a computer', 'The main part of a computer', 'A type of software'],
      correctAnswer: 'An auxiliary device used to put information into and get information out of a computer',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's1', 8),
      type: 'multiple-choice',
      question: 'What is "storage"?',
      options: ['The component of a computer that allows it to retain data', 'A room for computers', 'A type of monitor'],
      correctAnswer: 'The component of a computer that allows it to retain data',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's1', 9),
      type: 'multiple-choice',
      question: 'What is "firmware"?',
      options: ['Permanent software programmed into a read-only memory', 'Very hard software', 'New software'],
      correctAnswer: 'Permanent software programmed into a read-only memory',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's1', 10),
      type: 'multiple-choice',
      question: 'What is a "driver" in computing?',
      options: ['A program that controls a particular type of device that is attached to your computer', 'A person who drives a computer', 'A type of fast computer'],
      correctAnswer: 'A program that controls a particular type of device that is attached to your computer',
      points: 1
    }
  ]
};

const s2 = {
  id: genId(LEVEL, UNIT_ID, 's2', 0),
  type: 'vocabulary',
  title: 'AI & Emerging Tech',
  questions: [
    {
      id: genId(LEVEL, UNIT_ID, 's2', 1),
      type: 'multiple-choice',
      question: 'What does AI stand for?',
      options: ['Artificial Intelligence', 'Active Internet', 'Advanced Integration'],
      correctAnswer: 'Artificial Intelligence',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's2', 2),
      type: 'multiple-choice',
      question: 'What is "machine learning"?',
      options: ['A type of AI that allows software applications to become more accurate at predicting outcomes', 'Teaching a robot to walk', 'A computer factory'],
      correctAnswer: 'A type of AI that allows software applications to become more accurate at predicting outcomes',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's2', 3),
      type: 'multiple-choice',
      question: 'What is "cloud computing"?',
      options: ['The practice of using a network of remote servers hosted on the internet to store data', 'Computing in an airplane', 'A type of weather prediction software'],
      correctAnswer: 'The practice of using a network of remote servers hosted on the internet to store data',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's2', 4),
      type: 'multiple-choice',
      question: 'What is "virtual reality" (VR)?',
      options: ['A computer-generated simulation of a three-dimensional image or environment', 'Watching a movie', 'Reading a book'],
      correctAnswer: 'A computer-generated simulation of a three-dimensional image or environment',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's2', 5),
      type: 'multiple-choice',
      question: 'What is "blockchain"?',
      options: ['A system in which a record of transactions made in bitcoin or another cryptocurrency is maintained', 'A chain made of blocks', 'A type of computer lock'],
      correctAnswer: 'A system in which a record of transactions made in bitcoin or another cryptocurrency is maintained',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's2', 6),
      type: 'multiple-choice',
      question: 'What is an "algorithm"?',
      options: ['A process or set of rules to be followed in calculations or other problem-solving operations', 'A type of computer virus', 'A high-speed internet connection'],
      correctAnswer: 'A process or set of rules to be followed in calculations or other problem-solving operations',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's2', 7),
      type: 'multiple-choice',
      question: 'What is "cybersecurity"?',
      options: ['The state of being protected against the criminal or unauthorized use of electronic data', 'A type of computer game', 'Buying things online'],
      correctAnswer: 'The state of being protected against the criminal or unauthorized use of electronic data',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's2', 8),
      type: 'multiple-choice',
      question: 'What is "big data"?',
      options: ['Extremely large data sets that may be analyzed computationally to reveal patterns', 'A large computer monitor', 'Many books in a library'],
      correctAnswer: 'Extremely large data sets that may be analyzed computationally to reveal patterns',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's2', 9),
      type: 'multiple-choice',
      question: 'What is "automation"?',
      options: ['The use of largely automatic equipment in a system of manufacturing or other production process', 'Driving a car manually', 'Hiring more people'],
      correctAnswer: 'The use of largely automatic equipment in a system of manufacturing or other production process',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's2', 10),
      type: 'multiple-choice',
      question: 'What is "Internet of Things" (IoT)?',
      options: ['The interconnection via the internet of computing devices embedded in everyday objects', 'Searching for things on Google', 'Selling things on Amazon'],
      correctAnswer: 'The interconnection via the internet of computing devices embedded in everyday objects',
      points: 1
    }
  ]
};

const s3 = {
  id: genId(LEVEL, UNIT_ID, 's3', 0),
  type: 'grammar',
  title: 'Zero & First Conditionals',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's3', i + 1),
    type: 'multiple-choice',
    question: [
      'If you heat ice, it ____.',
      'If I have time tomorrow, I ____ you with your computer.',
      'Plants die if they ____ enough water.',
      'If it rains, we ____ the outdoor event.',
      'If you press this button, the computer ____ off.',
      'I ____ very happy if I pass the exam.',
      'If you ____ water to 100 degrees, it boils.',
      'If he ____ early, he will catch the train.',
      'Water freezes if the temperature ____ below zero.',
      'If you ____ careful, you will break it.'
    ][i],
    options: [
      ['melts', 'melted', 'will melt'],
      ['will help', 'help', 'helped'],
      ['don\'t get', 'didn\'t get', 'won\'t get'],
      ['will cancel', 'cancel', 'canceled'],
      ['turns', 'turned', 'will turn'],
      ['will be', 'am', 'was'],
      ['heat', 'heated', 'will heat'],
      ['leaves', 'leave', 'left'],
      ['drops', 'drop', 'dropped'],
      ['aren\'t', 'weren\'t', 'won\'t be']
    ][i],
    correctAnswer: [
      'melts', 'will help', 'don\'t get', 'will cancel', 'turns',
      'will be', 'heat', 'leaves', 'drops', 'aren\'t'
    ][i],
    points: 1
  }))
};

const s4 = {
  id: genId(LEVEL, UNIT_ID, 's4', 0),
  type: 'grammar',
  title: 'Second & Third Conditionals',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's4', i + 1),
    type: 'multiple-choice',
    question: [
      'If I ____ rich, I would travel the world.',
      'If they had studied harder, they ____ the exam.',
      'I would buy a new car if I ____ enough money.',
      'If she ____ about the meeting, she would have come.',
      'What ____ you do if you saw a ghost?',
      'If I ____ you, I wouldn\'t do that.',
      'If we had left earlier, we ____ late.',
      'He ____ more if he had more time.',
      'If I ____ known, I would have told you.',
      'If it ____ so much, we could go for a walk.'
    ][i],
    options: [
      ['were', 'am', 'was'],
      ['would have passed', 'passed', 'will pass'],
      ['had', 'have', 'would have'],
      ['had known', 'know', 'knew'],
      ['would', 'will', 'do'],
      ['were', 'am', 'was'],
      ['wouldn\'t have been', 'weren\'t', 'won\'t be'],
      ['would read', 'read', 'reads'],
      ['had', 'have', 'would'],
      ['didn\'t rain', 'doesn\'t rain', 'hadn\'t rained']
    ][i],
    correctAnswer: [
      'were', 'would have passed', 'had', 'had known', 'would',
      'were', 'wouldn\'t have been', 'would read', 'had', 'didn\'t rain'
    ][i],
    points: 1
  }))
};

const s5 = {
  id: genId(LEVEL, UNIT_ID, 's5', 0),
  type: 'reading',
  title: 'Reading: The Evolution of AI',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's5', i + 1),
    type: 'multiple-choice',
    question: [
      'When did the concept of AI first emerge?',
      'Who is considered the "father of AI"?',
      'What was the purpose of the Turing Test?',
      'What is "Narrow AI"?',
      'What is "General AI"?',
      'How does AI learn from data?',
      'What are some ethical concerns with AI?',
      'How is AI used in healthcare?',
      'What is "Deep Learning"?',
      'What is the future of AI according to the text?'
    ][i],
    options: [
      ['In the mid-20th century', 'In the 1800s', 'Only 10 years ago'],
      ['John McCarthy', 'Bill Gates', 'Steve Jobs'],
      ['To see if a machine can exhibit intelligent behavior', 'To test computer speed', 'To repair hardware'],
      ['AI designed for a specific task', 'AI that can do everything', 'A very small computer'],
      ['AI with human-like intelligence across many tasks', 'AI that only plays chess', 'A type of software'],
      ['Through algorithms and pattern recognition', 'By reading books', 'By talking to people'],
      ['Privacy, bias, and job loss', 'Computers getting too hot', 'The cost of electricity'],
      ['For diagnosis and personalized treatment', 'To clean hospitals', 'To replace all doctors'],
      ['A subset of machine learning based on neural networks', 'Learning while sleeping', 'A type of video game'],
      ['Increased integration into daily life', 'It will disappear', 'It will stay the same']
    ][i],
    correctAnswer: [
      'In the mid-20th century', 'John McCarthy',
      'To see if a machine can exhibit intelligent behavior', 'AI designed for a specific task',
      'AI with human-like intelligence across many tasks', 'Through algorithms and pattern recognition',
      'Privacy, bias, and job loss', 'For diagnosis and personalized treatment',
      'A subset of machine learning based on neural networks', 'Increased integration into daily life'
    ][i],
    points: 1
  }))
};

const s6 = {
  id: genId(LEVEL, UNIT_ID, 's6', 0),
  type: 'reading',
  title: 'Reading: History of the Internet',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's6', i + 1),
    type: 'multiple-choice',
    question: [
      'What was ARPANET?',
      'When was the World Wide Web invented?',
      'Who invented the World Wide Web?',
      'What is the difference between the Internet and the Web?',
      'What was the first email ever sent?',
      'What is "Web 2.0"?',
      'What is "the cloud"?',
      'How has the internet changed business?',
      'What is "net neutrality"?',
      'What is the "Internet of Everything"?'
    ][i],
    options: [
      ['The precursor to the modern internet', 'A type of fish', 'A new computer brand'],
      ['1989', '1969', '2000'],
      ['Tim Berners-Lee', 'Elon Musk', 'Mark Zuckerberg'],
      ['The internet is the network; the web is a way to access info on it', 'They are exactly the same', 'The web is older'],
      ['A test string of characters', 'A long letter', 'A funny joke'],
      ['The shift towards user-generated content and social media', 'A second version of the internet cable', 'A type of browser'],
      ['Servers accessed over the internet', 'A weather system', 'A type of storage on your phone only'],
      ['It enabled e-commerce and global reach', 'It made business slower', 'It had no effect'],
      ['The principle that all internet traffic should be treated equally', 'Free internet for everyone', 'No internet in schools'],
      ['The connection of people, processes, data, and things', 'Every person has a computer', 'Searching everything on Google']
    ][i],
    correctAnswer: [
      'The precursor to the modern internet', '1989', 'Tim Berners-Lee',
      'The internet is the network; the web is a way to access info on it',
      'A test string of characters', 'The shift towards user-generated content and social media',
      'Servers accessed over the internet', 'It enabled e-commerce and global reach',
      'The principle that all internet traffic should be treated equally',
      'The connection of people, processes, data, and things'
    ][i],
    points: 1
  }))
};

const s7 = {
  id: genId(LEVEL, UNIT_ID, 's7', 0),
  type: 'listening',
  title: 'Listening: Lecture on Cloud Computing',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's7', i + 1),
    type: 'multiple-choice',
    question: [
      'What is the main benefit of cloud computing mentioned?',
      'What is "SaaS"?',
      'What is "PaaS"?',
      'What is "IaaS"?',
      'How does the cloud improve collaboration?',
      'What is a "public cloud"?',
      'What is a "private cloud"?',
      'What is a "hybrid cloud"?',
      'What are the security risks of the cloud?',
      'How does the cloud affect costs for businesses?'
    ][i],
    options: [
      ['Scalability and accessibility', 'It makes computers look better', 'It is always free'],
      ['Software as a Service', 'System as a Service', 'Software as a System'],
      ['Platform as a Service', 'Power as a Service', 'Platform as a System'],
      ['Infrastructure as a Service', 'Internet as a Service', 'Information as a System'],
      ['Multiple people can work on the same file at once', 'It doesn\'t help', 'By making everyone use the same computer'],
      ['Services offered over the public internet', 'A cloud anyone can see', 'A free park'],
      ['Cloud infrastructure operated solely for a single organization', 'A hidden cloud', 'A cloud in your house'],
      ['A combination of public and private clouds', 'A cloud with two colors', 'A cloud that changes every day'],
      ['Data breaches and unauthorized access', 'The cloud disappearing', 'The internet getting too full'],
      ['It reduces the need for expensive hardware', 'It makes everything more expensive', 'It has no effect']
    ][i],
    correctAnswer: [
      'Scalability and accessibility', 'Software as a Service', 'Platform as a Service',
      'Infrastructure as a Service', 'Multiple people can work on the same file at once',
      'Services offered over the public internet',
      'Cloud infrastructure operated solely for a single organization',
      'A combination of public and private clouds', 'Data breaches and unauthorized access',
      'It reduces the need for expensive hardware'
    ][i],
    points: 1
  }))
};

const s8 = {
  id: genId(LEVEL, UNIT_ID, 's8', 0),
  type: 'listening',
  title: 'Listening: Discussion on Virtual Reality',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's8', i + 1),
    type: 'multiple-choice',
    question: [
      'What is the primary use of VR discussed?',
      'What is "augmented reality" (AR)?',
      'What equipment is needed for VR?',
      'How is VR used in education?',
      'What is "haptic feedback"?',
      'What are the health concerns with VR?',
      'How can VR be used in training?',
      'What is "immersion" in VR?',
      'What is the "metaverse"?',
      'How does VR differ from 3D movies?'
    ][i],
    options: [
      ['Gaming and simulations', 'Cooking', 'Driving to work'],
      ['Overlaying digital info on the real world', 'A better version of VR', 'A type of video game only'],
      ['A headset and controllers', 'Just a mouse', 'A special keyboard'],
      ['For virtual field trips and immersive learning', 'To replace teachers', 'To play games during class'],
      ['Tactile sensation in VR', 'A loud noise', 'A type of screen'],
      ['Motion sickness and eye strain', 'Coughing', 'Broken bones'],
      ['For practicing dangerous tasks safely', 'To watch movies', 'To take a nap'],
      ['The feeling of being physically present in a non-physical world', 'Diving into water', 'Being very sleepy'],
      ['A collective virtual shared space', 'A type of universe', 'A new computer brand'],
      ['VR is interactive and immersive', 'They are exactly the same', '3D movies are better']
    ][i],
    correctAnswer: [
      'Gaming and simulations', 'Overlaying digital info on the real world',
      'A headset and controllers', 'For virtual field trips and immersive learning',
      'Tactile sensation in VR', 'Motion sickness and eye strain',
      'For practicing dangerous tasks safely',
      'The feeling of being physically present in a non-physical world',
      'A collective virtual shared space', 'VR is interactive and immersive'
    ][i],
    points: 1
  }))
};

const s9 = {
  id: genId(LEVEL, UNIT_ID, 's9', 0),
  type: 'vocabulary',
  title: 'Cybersecurity Terms',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's9', i + 1),
    type: 'multiple-choice',
    question: [
      'What is "phishing"?',
      'What is "malware"?',
      'What is a "firewall"?',
      'What is "encryption"?',
      'What is a "data breach"?',
      'What is "two-factor authentication" (2FA)?',
      'What is a "hacker"?',
      'What is "ransomware"?',
      'What is "spyware"?',
      'What is a "VPN"?'
    ][i],
    options: [
      ['Fraudulent attempt to obtain sensitive info', 'A type of outdoor sport', 'Going to the beach'],
      ['Software specifically designed to disrupt or damage a computer', 'A good program', 'A type of hardware'],
      ['A network security system that monitors traffic', 'A literal wall made of fire', 'A type of computer screen'],
      ['Converting info into a code to prevent unauthorized access', 'Deleting all files', 'Printing files'],
      ['An incident where data is accessed without authorization', 'A broken computer', 'A power cut'],
      ['Using two different methods to verify identity', 'Having two passwords', 'Two people using one computer'],
      ['A person who uses computers to gain unauthorized access to data', 'A professional gamer', 'A computer repairman'],
      ['Malware that threatens to publish data or block access unless a ransom is paid', 'Free software', 'A type of virus that speeds up your computer'],
      ['Software that enables a user to obtain info about another\'s computer activities', 'A type of glasses', 'A computer game'],
      ['Virtual Private Network', 'Very Private Network', 'Virtual Public Network']
    ][i],
    correctAnswer: [
      'Fraudulent attempt to obtain sensitive info',
      'Software specifically designed to disrupt or damage a computer',
      'A network security system that monitors traffic',
      'Converting info into a code to prevent unauthorized access',
      'An incident where data is accessed without authorization',
      'Using two different methods to verify identity',
      'A person who uses computers to gain unauthorized access to data',
      'Malware that threatens to publish data or block access unless a ransom is paid',
      'Software that enables a user to obtain info about another\'s computer activities',
      'Virtual Private Network'
    ][i],
    points: 1
  }))
};

const s10 = {
  id: genId(LEVEL, UNIT_ID, 's10', 0),
  type: 'vocabulary',
  title: 'Programming & Data',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's10', i + 1),
    type: 'multiple-choice',
    question: [
      'What is "coding"?',
      'What is a "variable" in programming?',
      'What is a "loop" in programming?',
      'What is a "bug"?',
      'What is "debugging"?',
      'What is "source code"?',
      'What is an "IDE"?',
      'What is a "database"?',
      'What is "frontend" development?',
      'What is "backend" development?'
    ][i],
    options: [
      ['The process of assigning a code to something for identification', 'Reading a book', 'Watching TV'],
      ['A storage location paired with an associated symbolic name', 'A type of computer mouse', 'A constant value'],
      ['A sequence of instructions that is continually repeated', 'A circle drawn on the screen', 'A type of hardware'],
      ['An error or flaw in a computer program', 'A literal insect inside the computer', 'A fast computer'],
      ['The process of identifying and removing errors from software', 'Cleaning the computer with a brush', 'Buying new software'],
      ['The version of a computer program as it is originally written by a human', 'The electricity used by a computer', 'A secret password'],
      ['Integrated Development Environment', 'Internet Development Engine', 'Integrated Data Entry'],
      ['A structured set of data held in a computer', 'A literal base for the computer', 'A bank for programmers'],
      ['The part of a website that the user interacts with directly', 'The back of the computer', 'Building the hardware'],
      ['The part of the website that the user does not see', 'The computer monitor', 'Designing the logo']
    ][i],
    correctAnswer: [
      'The process of assigning a code to something for identification',
      'A storage location paired with an associated symbolic name',
      'A sequence of instructions that is continually repeated',
      'An error or flaw in a computer program',
      'The process of identifying and removing errors from software',
      'The version of a computer program as it is originally written by a human',
      'Integrated Development Environment', 'A structured set of data held in a computer',
      'The part of a website that the user interacts with directly',
      'The part of the website that the user does not see'
    ][i],
    points: 1
  }))
};

export const B1_WEEK_29 = createShardedToeflUnit(
  'toefl-b1-w29',
  'Week 29: Computer Science & Technology',
  'Explore the world of technology, computer science, and the impact of the digital age.',
  ['Master technology and computer science vocabulary', 'Understand and use Zero, First, Second, and Third Conditionals', 'Understand technical texts and discussions'],
  [s1, s2, s3, s4, s5, s6, s7, s8, s9, s10]
);
