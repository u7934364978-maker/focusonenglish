import { createShardedToeflUnit, genId } from '../utils';

const UNIT_ID = 4;
const LEVEL = 'b2';

// SHARDS 1-2: Advanced Academic Grammar (Reading Focus)
const s1 = {
  id: genId(LEVEL, UNIT_ID, 's1', 0),
  type: 'vocabulary',
  title: 'Grammar: Complex Sentence Structures',
  questions: [
    {
      id: genId(LEVEL, UNIT_ID, 's1', 1),
      type: 'multiple-choice',
      question: 'Identify the "Reduced Relative Clause": "The artifacts discovered in the tomb were remarkably well-preserved."',
      options: [
        'discovered in the tomb',
        'were remarkably',
        'well-preserved'
      ],
      correctAnswer: 'discovered in the tomb',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's1', 2),
      type: 'multiple-choice',
      question: 'In the sentence "Having studied the map, the explorers set off," what does "Having studied" indicate?',
      options: [
        'The action happened before setting off.',
        'The action happened while setting off.',
        'The action happened after setting off.'
      ],
      correctAnswer: 'The action happened before setting off.',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's1', 3),
      type: 'multiple-choice',
      question: 'Choose the correct word: "The theory, ____ widely accepted in the past, is now being questioned."',
      options: [
        'once',
        'since',
        'while'
      ],
      correctAnswer: 'once',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's1', 4),
      type: 'multiple-choice',
      question: 'Identify the "Inversion": "Not only did they find gold, but they also found ancient scripts."',
      options: [
        'did they find',
        'they also found',
        'they find gold'
      ],
      correctAnswer: 'did they find',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's1', 5),
      type: 'multiple-choice',
      question: 'What is the purpose of an "Appositive"? (e.g., "The Nile, a life-giving river...")',
      options: [
        'To provide extra information about a noun.',
        'To describe an action.',
        'To show a contrast.'
      ],
      correctAnswer: 'To provide extra information about a noun.',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's1', 6),
      type: 'multiple-choice',
      question: 'Choose the best option: "____ the weather was harsh, the project continued."',
      options: [
        'Albeit',
        'Despite',
        'Notwithstanding'
      ],
      correctAnswer: 'Albeit',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's1', 7),
      type: 'multiple-choice',
      question: 'What does "seldom" mean in a formal context?',
      options: [
        'Rarely',
        'Often',
        'Always'
      ],
      correctAnswer: 'Rarely',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's1', 8),
      type: 'multiple-choice',
      question: 'Complete the sentence: "Under no circumstances ____ the temple be entered."',
      options: [
        'should',
        'it should',
        'they should'
      ],
      correctAnswer: 'should',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's1', 9),
      type: 'multiple-choice',
      question: 'What is a "Nominal Clause"?',
      options: [
        'A clause that functions as a noun.',
        'A clause that functions as an adjective.',
        'A clause that functions as a verb.'
      ],
      correctAnswer: 'A clause that functions as a noun.',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's1', 10),
      type: 'multiple-choice',
      question: 'Identify the nominal clause: "What they discovered changed history."',
      options: [
        'What they discovered',
        'changed history',
        'they discovered'
      ],
      correctAnswer: 'What they discovered',
      points: 1
    }
  ]
};

const s2 = {
  id: genId(LEVEL, UNIT_ID, 's2', 0),
  type: 'vocabulary',
  title: 'Grammar: Transition Words for Academic Reading',
  questions: [
    {
      id: genId(LEVEL, UNIT_ID, 's2', 1),
      type: 'multiple-choice',
      question: 'Which word indicates a "Result"?',
      options: [
        'Consequently',
        'Moreover',
        'Conversely'
      ],
      correctAnswer: 'Consequently',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's2', 2),
      type: 'multiple-choice',
      question: 'Which word indicates an "Addition"?',
      options: [
        'Furthermore',
        'Nevertheless',
        'Therefore'
      ],
      correctAnswer: 'Furthermore',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's2', 3),
      type: 'multiple-choice',
      question: 'Which word indicates a "Contrast"?',
      options: [
        'On the other hand',
        'In addition',
        'As a result'
      ],
      correctAnswer: 'On the other hand',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's2', 4),
      type: 'multiple-choice',
      question: 'Which word is used for "Example"?',
      options: [
        'For instance',
        'In conclusion',
        'Similarly'
      ],
      correctAnswer: 'For instance',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's2', 5),
      type: 'multiple-choice',
      question: 'Which word indicates "Sequence"?',
      options: [
        'Subsequently',
        'Simultaneously',
        'Primarily'
      ],
      correctAnswer: 'Subsequently',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's2', 6),
      type: 'multiple-choice',
      question: 'What does "Conversely" mean?',
      options: [
        'In an opposite way',
        'In the same way',
        'To summarize'
      ],
      correctAnswer: 'In an opposite way',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's2', 7),
      type: 'multiple-choice',
      question: 'Which word shows "Concession"?',
      options: [
        'Admittedly',
        'Actually',
        'Always'
      ],
      correctAnswer: 'Admittedly',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's2', 8),
      type: 'multiple-choice',
      question: 'Choose the best word: "The study was small; ____, the results are promising."',
      options: [
        'nevertheless',
        'therefore',
        'moreover'
      ],
      correctAnswer: 'nevertheless',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's2', 9),
      type: 'multiple-choice',
      question: 'What does "Hence" mean?',
      options: [
        'For this reason',
        'Because of this',
        'Both are correct'
      ],
      correctAnswer: 'Both are correct',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's2', 10),
      type: 'multiple-choice',
      question: 'Which word is most formal?',
      options: [
        'Thus',
        'So',
        'Then'
      ],
      correctAnswer: 'Thus',
      points: 1
    }
  ]
};

// SHARDS 3-4: Reading Comprehension - Sentence Insertion
const s3 = {
  id: genId(LEVEL, UNIT_ID, 's3', 0),
  type: 'reading',
  title: 'Sentence Insertion: Ancient Architecture',
  questions: [
    {
      id: genId(LEVEL, UNIT_ID, 's3', 1),
      type: 'multiple-choice',
      question: 'Where would the sentence "These massive stones were transported over hundreds of miles" best fit? [1] The pyramids of Giza are among the most famous structures in the world. [2] Their construction remains a marvel of engineering. [3] Scholars have proposed various theories regarding the methods used. [4]',
      options: [
        'After [2]',
        'After [1]',
        'After [3]'
      ],
      correctAnswer: 'After [2]',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's3', 2),
      type: 'multiple-choice',
      question: 'Where would "This technique allowed for greater stability in the desert environment" best fit? [1] The foundations of the buildings were reinforced with local clay. [2] Engineers also utilized a specific layering system. [3] Today, many of these structures still stand. [4]',
      options: [
        'After [2]',
        'After [1]',
        'After [3]'
      ],
      correctAnswer: 'After [2]',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's3', 3),
      type: 'multiple-choice',
      question: 'In Sentence Insertion questions, what should you look for?',
      options: [
        'Pronouns, transition words, and logical flow.',
        'The hardest word in the sentence.',
        'The longest paragraph.'
      ],
      correctAnswer: 'Pronouns, transition words, and logical flow.',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's3', 4),
      type: 'multiple-choice',
      question: 'If a sentence starts with "However," it likely follows a sentence that:',
      options: [
        'Presents an opposing or contrasting idea.',
        'Presents a similar idea.',
        'Starts a new topic.'
      ],
      correctAnswer: 'Presents an opposing or contrasting idea.',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's3', 5),
      type: 'multiple-choice',
      question: 'If a sentence starts with "For example," it should follow a sentence that:',
      options: [
        'Makes a general claim or statement.',
        'Is already very specific.',
        'Ends the paragraph.'
      ],
      correctAnswer: 'Makes a general claim or statement.',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's3', 6),
      type: 'multiple-choice',
      question: 'Where would "In addition to gold, traders brought spices and silk" best fit? [1] The city was a major hub for commerce. [2] Merchants traveled from distant lands to sell their goods. [3] This trade led to incredible wealth for the local population. [4]',
      options: [
        'After [2]',
        'After [1]',
        'After [3]'
      ],
      correctAnswer: 'After [2]',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's3', 7),
      type: 'multiple-choice',
      question: 'A "Pronoun" like "it" or "they" must refer to:',
      options: [
        'A noun mentioned in the previous sentence.',
        'Any noun in the paragraph.',
        'A noun in the next sentence.'
      ],
      correctAnswer: 'A noun mentioned in the previous sentence.',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's3', 8),
      type: 'multiple-choice',
      question: 'Sentence insertion tests your understanding of:',
      options: [
        'Cohesion and coherence.',
        'Spelling and punctuation.',
        'Historical dates.'
      ],
      correctAnswer: 'Cohesion and coherence.',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's3', 9),
      type: 'multiple-choice',
      question: 'Where would "Despite these challenges, the explorers reached the summit" best fit? [1] The climb was treacherous and the air was thin. [2] Many members of the team were exhausted. [3] Their success was celebrated globally. [4]',
      options: [
        'After [2]',
        'After [1]',
        'After [3]'
      ],
      correctAnswer: 'After [2]',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's3', 10),
      type: 'multiple-choice',
      question: 'True or False: You should read the sentences around the insertion point carefully.',
      options: [
        'True',
        'False',
        'Only the first sentence'
      ],
      correctAnswer: 'True',
      points: 1
    }
  ]
};

const s4 = {
  id: genId(LEVEL, UNIT_ID, 's4', 0),
  type: 'reading',
  title: 'Sentence Insertion: Ancient Medicine',
  questions: [
    {
      id: genId(LEVEL, UNIT_ID, 's4', 1),
      type: 'multiple-choice',
      question: 'Where would "These practitioners often relied on a combination of herbs and spiritual rituals" best fit? [1] Ancient medicine was a complex field. [2] Various individuals specialized in healing. [3] Their methods were passed down through generations. [4]',
      options: [
        'After [2]',
        'After [1]',
        'After [3]'
      ],
      correctAnswer: 'After [2]',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's4', 2),
      type: 'multiple-choice',
      question: 'Where would "This discovery changed how doctors approached infection" best fit? [1] Scientists identified a specific fungus with antibiotic properties. [2] They began to experiment with its application. [3] Mortality rates dropped significantly thereafter. [4]',
      options: [
        'After [2]',
        'After [1]',
        'After [3]'
      ],
      correctAnswer: 'After [2]',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's4', 3),
      type: 'multiple-choice',
      question: 'What is "Cohesion"?',
      options: [
        'The grammatical and lexical linking within a text.',
        'The main idea of a story.',
        'The font used in a book.'
      ],
      correctAnswer: 'The grammatical and lexical linking within a text.',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's4', 4),
      type: 'multiple-choice',
      question: 'What is "Coherence"?',
      options: [
        'The logical and consistent connection of ideas in a text.',
        'How fast someone reads.',
        'The number of pages in a chapter.'
      ],
      correctAnswer: 'The logical and consistent connection of ideas in a text.',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's4', 5),
      type: 'multiple-choice',
      question: 'Transition words like "Therefore" or "As a result" show:',
      options: [
        'Cause and effect.',
        'Contrast.',
        'Addition.'
      ],
      correctAnswer: 'Cause and effect.',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's4', 6),
      type: 'multiple-choice',
      question: 'Where would "Similarly, the Aztecs developed advanced astronomical calendars" best fit? [1] The Maya were known for their mathematical precision. [2] They tracked the movements of celestial bodies with accuracy. [3] Both civilizations shared a deep interest in the heavens. [4]',
      options: [
        'After [2]',
        'After [1]',
        'After [3]'
      ],
      correctAnswer: 'After [2]',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's4', 7),
      type: 'multiple-choice',
      question: 'The word "Such" (e.g., "Such events...") refers to:',
      options: [
        'Something previously described.',
        'Something that will be described later.',
        'Something irrelevant.'
      ],
      correctAnswer: 'Something previously described.',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's4', 8),
      type: 'multiple-choice',
      question: 'In sentence insertion, the context is:',
      options: [
        'Everything.',
        'Not important.',
        'Only the first paragraph.'
      ],
      correctAnswer: 'Everything.',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's4', 9),
      type: 'multiple-choice',
      question: 'Where would "Eventually, these small villages grew into large urban centers" best fit? [1] Early humans settled in fertile river valleys. [2] They built simple structures and began to farm. [3] This transition marked a major shift in human society. [4]',
      options: [
        'After [2]',
        'After [1]',
        'After [3]'
      ],
      correctAnswer: 'After [2]',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's4', 10),
      type: 'multiple-choice',
      question: 'Which word is a synonym for "Eventually"?',
      options: [
        'Ultimately',
        'Suddenly',
        'Initially'
      ],
      correctAnswer: 'Ultimately',
      points: 1
    }
  ]
};

// SHARDS 5-6: Reading Comprehension - Summary Questions
const s5 = {
  id: genId(LEVEL, UNIT_ID, 's5', 0),
  type: 'reading',
  title: 'Summary Question: The Industrial Revolution',
  questions: [
    {
      id: genId(LEVEL, UNIT_ID, 's5', 1),
      type: 'multiple-choice',
      question: 'Which of the following is NOT a main idea of the Industrial Revolution?',
      options: [
        'The transition to hand production methods.',
        'The development of steam power.',
        'The growth of the factory system.'
      ],
      correctAnswer: 'The transition to hand production methods.',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's5', 2),
      type: 'multiple-choice',
      question: 'Summary question: Select the three main points of the text about the Industrial Revolution.',
      options: [
        'Technological innovation, shift from rural to urban, and economic growth.',
        'Use of coal, invention of the wheel, and spread of democracy.',
        'Expansion of railroads, discovery of fire, and rise of the middle class.'
      ],
      correctAnswer: 'Technological innovation, shift from rural to urban, and economic growth.',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's5', 3),
      type: 'multiple-choice',
      question: 'In a Summary question, avoid options that are:',
      options: [
        'Too specific or represent minor details.',
        'Directly related to the main thesis.',
        'Supported by the entire text.'
      ],
      correctAnswer: 'Too specific or represent minor details.',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's5', 4),
      type: 'multiple-choice',
      question: 'A good summary point should:',
      options: [
        'Cover a major section or theme of the passage.',
        'Include a specific date or name mentioned only once.',
        'Be your own opinion about the topic.'
      ],
      correctAnswer: 'Cover a major section or theme of the passage.',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's5', 5),
      type: 'multiple-choice',
      question: 'Summary questions are usually worth:',
      options: [
        '2-3 points.',
        '1 point.',
        '10 points.'
      ],
      correctAnswer: '2-3 points.',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's5', 6),
      type: 'multiple-choice',
      question: 'True or False: Incorrect summary options may state information that is true but not a main idea.',
      options: [
        'True',
        'False',
        'Only in science passages'
      ],
      correctAnswer: 'True',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's5', 7),
      type: 'multiple-choice',
      question: 'If a text is about the "Causes of the Civil War," a summary point should be about:',
      options: [
        'One of the major causes mentioned.',
        'A specific battle in the war.',
        'The biography of a general.'
      ],
      correctAnswer: 'One of the major causes mentioned.',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's5', 8),
      type: 'multiple-choice',
      question: 'The Summary question is always at the:',
      options: [
        'End of the reading passage questions.',
        'Beginning.',
        'Middle.'
      ],
      correctAnswer: 'End of the reading passage questions.',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's5', 9),
      type: 'multiple-choice',
      question: 'What is the "Thesis Statement"?',
      options: [
        'The main argument or point of the entire text.',
        'A list of sources.',
        'The author\'s name.'
      ],
      correctAnswer: 'The main argument or point of the entire text.',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's5', 10),
      type: 'multiple-choice',
      question: 'To answer summary questions, you should review your:',
      options: [
        'Notes on main ideas and paragraph structure.',
        'Notes on vocabulary definitions.',
        'Notes on specific dates.'
      ],
      correctAnswer: 'Notes on main ideas and paragraph structure.',
      points: 1
    }
  ]
};

const s6 = {
  id: genId(LEVEL, UNIT_ID, 's6', 0),
  type: 'reading',
  title: 'Summary Question: The Mongol Empire',
  questions: [
    {
      id: genId(LEVEL, UNIT_ID, 's6', 1),
      type: 'multiple-choice',
      question: 'Which point best summarizes the Mongol military success?',
      options: [
        'Advanced cavalry tactics and psychological warfare.',
        'The use of large naval fleets.',
        'Construction of thick stone walls.'
      ],
      correctAnswer: 'Advanced cavalry tactics and psychological warfare.',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's6', 2),
      type: 'multiple-choice',
      question: 'Which of the following is a main point about the "Pax Mongolica"?',
      options: [
        'The period of stability allowed for increased trade and cultural exchange.',
        'The empire collapsed immediately after the first war.',
        'No one was allowed to travel during this time.'
      ],
      correctAnswer: 'The period of stability allowed for increased trade and cultural exchange.',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's6', 3),
      type: 'multiple-choice',
      question: 'In a Summary question, an option that misinterprets the text is:',
      options: [
        'Incorrect.',
        'Correct if it sounds smart.',
        'Partially correct.'
      ],
      correctAnswer: 'Incorrect.',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's6', 4),
      type: 'multiple-choice',
      question: 'If an option is "too broad," it means it:',
      options: [
        'Goes beyond the information provided in the text.',
        'Is too specific.',
        'Is exactly right.'
      ],
      correctAnswer: 'Goes beyond the information provided in the text.',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's6', 5),
      type: 'multiple-choice',
      question: 'Why are summary questions important for the TOEFL?',
      options: [
        'They test your ability to synthesize information and recognize structure.',
        'They test how fast you can type.',
        'They test your memory of specific numbers.'
      ],
      correctAnswer: 'They test your ability to synthesize information and recognize structure.',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's6', 6),
      type: 'multiple-choice',
      question: 'What is "Synthesis"?',
      options: [
        'Combining different parts into a whole.',
        'Taking things apart.',
        'Reading only the first sentence.'
      ],
      correctAnswer: 'Combining different parts into a whole.',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's6', 7),
      type: 'multiple-choice',
      question: 'If a passage discusses "The rise and fall of the Roman Empire," a summary point about "daily life in Rome" might be:',
      options: [
        'A minor detail, not a main point.',
        'The most important point.',
        'The thesis.'
      ],
      correctAnswer: 'A minor detail, not a main point.',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's6', 8),
      type: 'multiple-choice',
      question: 'How many correct options are usually required for a TOEFL Reading summary question?',
      options: [
        'Three.',
        'One.',
        'Five.'
      ],
      correctAnswer: 'Three.',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's6', 9),
      type: 'multiple-choice',
      question: 'Should you pick an option that contains a factual error according to the text?',
      options: [
        'Never.',
        'Always.',
        'Only if it sounds like a main idea.'
      ],
      correctAnswer: 'Never.',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's6', 10),
      type: 'multiple-choice',
      question: 'The best way to prepare for summary questions is to practice:',
      options: [
        'Outlining the passage as you read.',
        'Memorizing vocabulary.',
        'Skimming for keywords.'
      ],
      correctAnswer: 'Outlining the passage as you read.',
      points: 1
    }
  ]
};

// SHARDS 7-8: Academic Listening (Academic Discussion Context)
const s7 = {
  id: genId(LEVEL, UNIT_ID, 's7', 0),
  type: 'listening',
  title: 'Listening: History Seminar (The Black Death)',
  questions: [
    {
      id: genId(LEVEL, UNIT_ID, 's7', 1),
      type: 'multiple-choice',
      question: 'What is the main topic of the discussion?',
      options: [
        'The social and economic impact of the Black Death.',
        'The medical causes of the plague.',
        'How to build a hospital in the middle ages.'
      ],
      correctAnswer: 'The social and economic impact of the Black Death.',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's7', 2),
      type: 'multiple-choice',
      question: 'According to the professor, why did wages increase after the plague?',
      options: [
        'Because there was a labor shortage.',
        'Because the government passed a new law.',
        'Because people were working harder.'
      ],
      correctAnswer: 'Because there was a labor shortage.',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's7', 3),
      type: 'multiple-choice',
      question: 'What can be inferred about the feudal system after the Black Death?',
      options: [
        'It began to weaken and eventually collapse.',
        'It became stronger than ever.',
        'It was completely unaffected.'
      ],
      correctAnswer: 'It began to weaken and eventually collapse.',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's7', 4),
      type: 'multiple-choice',
      question: 'What does the professor imply when she says "It wasn\'t all just gloom and doom"?',
      options: [
        'That some positive societal changes occurred as a result.',
        'That the plague wasn\'t actually that bad.',
        'That she likes sad stories.'
      ],
      correctAnswer: 'That some positive societal changes occurred as a result.',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's7', 5),
      type: 'multiple-choice',
      question: 'Why does the professor mention the "decline of serfdom"?',
      options: [
        'To illustrate a major social shift.',
        'To list every historical term.',
        'To explain the price of bread.'
      ],
      correctAnswer: 'To illustrate a major social shift.',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's7', 6),
      type: 'multiple-choice',
      question: 'What is a "Labor Shortage"?',
      options: [
        'A situation where there are not enough workers for the available jobs.',
        'A situation where workers are too short.',
        'A situation where people work fewer hours.'
      ],
      correctAnswer: 'A situation where there are not enough workers for the available jobs.',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's7', 7),
      type: 'multiple-choice',
      question: 'What is "Serfdom"?',
      options: [
        'A type of semi-free peasant status in the feudal system.',
        'A type of ancient sport.',
        'A religious ceremony.'
      ],
      correctAnswer: 'A type of semi-free peasant status in the feudal system.',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's7', 8),
      type: 'multiple-choice',
      question: 'In academic listening, pay attention to the professor\'s:',
      options: [
        'Tone and emphasis.',
        'Clothing.',
        'Accent only.'
      ],
      correctAnswer: 'Tone and emphasis.',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's7', 9),
      type: 'multiple-choice',
      question: 'The professor mentions "urban migration" to:',
      options: [
        'Explain how people moved to cities for better opportunities.',
        'Describe the architecture of London.',
        'Show that she has traveled a lot.'
      ],
      correctAnswer: 'Explain how people moved to cities for better opportunities.',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's7', 10),
      type: 'multiple-choice',
      question: 'Summary question: The Black Death led to:',
      options: [
        'Labor shortages, higher wages, and the decline of feudalism.',
        'No changes at all.',
        'Lower taxes and more libraries.'
      ],
      correctAnswer: 'Labor shortages, higher wages, and the decline of feudalism.',
      points: 1
    }
  ]
};

const s8 = {
  id: genId(LEVEL, UNIT_ID, 's8', 0),
  type: 'listening',
  title: 'Listening: Art History (The Impressionists)',
  questions: [
    {
      id: genId(LEVEL, UNIT_ID, 's8', 1),
      type: 'multiple-choice',
      question: 'What is the main focus of the lecture?',
      options: [
        'The key characteristics and goals of the Impressionist movement.',
        'How to mix oil paints.',
        'The biography of Claude Monet only.'
      ],
      correctAnswer: 'The key characteristics and goals of the Impressionist movement.',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's8', 2),
      type: 'multiple-choice',
      question: 'Why did the Impressionists paint outdoors?',
      options: [
        'To capture the changing effects of light and color.',
        'Because they couldn\'t afford a studio.',
        'To paint more landscapes.'
      ],
      correctAnswer: 'To capture the changing effects of light and color.',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's8', 3),
      type: 'multiple-choice',
      question: 'What does "En plein air" mean?',
      options: [
        'In the open air (outdoors).',
        'A type of French food.',
        'Painting with airbrushes.'
      ],
      correctAnswer: 'In the open air (outdoors).',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's8', 4),
      type: 'multiple-choice',
      question: 'What can be inferred about the public\'s initial reaction to Impressionism?',
      options: [
        'It was likely controversial or misunderstood at first.',
        'Everyone loved it immediately.',
        'No one noticed it.'
      ],
      correctAnswer: 'It was likely controversial or misunderstood at first.',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's8', 5),
      type: 'multiple-choice',
      question: 'The professor mentions "short, broken brushstrokes" to:',
      options: [
        'Describe the specific technique used by these artists.',
        'Complain about the quality of the paintings.',
        'Show that the artists were in a hurry.'
      ],
      correctAnswer: 'Describe the specific technique used by these artists.',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's8', 6),
      type: 'multiple-choice',
      question: 'What is "Light" in the context of Impressionism?',
      options: [
        'The primary subject of many of their paintings.',
        'Something that makes a painting weigh less.',
        'A type of thin paint.'
      ],
      correctAnswer: 'The primary subject of many of their paintings.',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's8', 7),
      type: 'multiple-choice',
      question: 'Why does the professor mention "The Salon"?',
      options: [
        'To explain the traditional art institution that the Impressionists challenged.',
        'To describe where artists got their hair done.',
        'To list a famous museum in London.'
      ],
      correctAnswer: 'To explain the traditional art institution that the Impressionists challenged.',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's8', 8),
      type: 'multiple-choice',
      question: 'What is a "Movement" in art history?',
      options: [
        'A style or philosophy shared by a group of artists during a specific period.',
        'When a painting is moved from one wall to another.',
        'An exercise routine.'
      ],
      correctAnswer: 'A style or philosophy shared by a group of artists during a specific period.',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's8', 9),
      type: 'multiple-choice',
      question: 'In academic discussions, listen for the "Structure":',
      options: [
        'Introduction -> Main Points -> Conclusion.',
        'Random facts only.',
        'Just the names of famous people.'
      ],
      correctAnswer: 'Introduction -> Main Points -> Conclusion.',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's8', 10),
      type: 'multiple-choice',
      question: 'Summary question: Impressionism focused on:',
      options: [
        'Light, color, and capturing a moment in time.',
        'Perfect realism and historical themes.',
        'Dark colors and religious subjects.'
      ],
      correctAnswer: 'Light, color, and capturing a moment in time.',
      points: 1
    }
  ]
};

// SHARDS 9-10: Review & Progress Check
const s9 = {
  id: genId(LEVEL, UNIT_ID, 's9', 0),
  type: 'vocabulary',
  title: 'Progress Check: Reading Skills',
  questions: [
    {
      id: genId(LEVEL, UNIT_ID, 's9', 1),
      type: 'multiple-choice',
      question: 'Which reading skill involves finding specific facts?',
      options: [
        'Factual Detail',
        'Inference',
        'Summary'
      ],
      correctAnswer: 'Factual Detail',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's9', 2),
      type: 'multiple-choice',
      question: 'Which skill involves drawing conclusions not stated?',
      options: [
        'Inference',
        'Vocabulary',
        'Rhetorical Purpose'
      ],
      correctAnswer: 'Inference',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's9', 3),
      type: 'multiple-choice',
      question: 'Which skill involves identifying the author\'s goal?',
      options: [
        'Rhetorical Purpose',
        'Main Idea',
        'Sentence Insertion'
      ],
      correctAnswer: 'Rhetorical Purpose',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's9', 4),
      type: 'multiple-choice',
      question: 'Which skill involves placing a sentence in the best spot?',
      options: [
        'Sentence Insertion',
        'Summary',
        'Paraphrasing'
      ],
      correctAnswer: 'Sentence Insertion',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's9', 5),
      type: 'multiple-choice',
      question: 'Which skill involves selecting main points?',
      options: [
        'Summary',
        'Negative Factual Detail',
        'Inference'
      ],
      correctAnswer: 'Summary',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's9', 6),
      type: 'multiple-choice',
      question: 'If you see the word "NOT" in a question, it is a:',
      options: [
        'Negative Factual Detail question.',
        'Vocabulary question.',
        'Summary question.'
      ],
      correctAnswer: 'Negative Factual Detail question.',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's9', 7),
      type: 'multiple-choice',
      question: 'The most important thing in Reading is to:',
      options: [
        'Find evidence in the text.',
        'Read as fast as possible without thinking.',
        'Guess without reading.'
      ],
      correctAnswer: 'Find evidence in the text.',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's9', 8),
      type: 'multiple-choice',
      question: 'True or False: All questions follow the order of the passage (except summary).',
      options: [
        'True',
        'False',
        'Only sometimes'
      ],
      correctAnswer: 'True',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's9', 9),
      type: 'multiple-choice',
      question: 'How many passages are in the TOEFL Reading section?',
      options: [
        '2 (sometimes 3).',
        '1.',
        '5.'
      ],
      correctAnswer: '2 (sometimes 3).',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's9', 10),
      type: 'multiple-choice',
      question: 'How much time do you have per passage?',
      options: [
        '18 minutes.',
        '10 minutes.',
        '30 minutes.'
      ],
      correctAnswer: '18 minutes.',
      points: 1
    }
  ]
};

const s10 = {
  id: genId(LEVEL, UNIT_ID, 's10', 0),
  type: 'vocabulary',
  title: 'Progress Check: Academic Vocabulary Review',
  questions: [
    {
      id: genId(LEVEL, UNIT_ID, 's10', 1),
      type: 'multiple-choice',
      question: 'Define "Inherent":',
      options: [
        'Existing in something as a permanent or essential attribute.',
        'External and temporary.',
        'Related to genetics only.'
      ],
      correctAnswer: 'Existing in something as a permanent or essential attribute.',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's10', 2),
      type: 'multiple-choice',
      question: 'Define "Paradigm":',
      options: [
        'A typical example or pattern of something.',
        'A mathematical equation.',
        'A type of ancient coin.'
      ],
      correctAnswer: 'A typical example or pattern of something.',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's10', 3),
      type: 'multiple-choice',
      question: 'Define "Pragmatic":',
      options: [
        'Dealing with things sensibly and realistically.',
        'Idealistic and unrealistic.',
        'Very emotional.'
      ],
      correctAnswer: 'Dealing with things sensibly and realistically.',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's10', 4),
      type: 'multiple-choice',
      question: 'Define "Subsequent":',
      options: [
        'Coming after something in time; following.',
        'Coming before.',
        'Happening at the same time.'
      ],
      correctAnswer: 'Coming after something in time; following.',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's10', 5),
      type: 'multiple-choice',
      question: 'Define "Viable":',
      options: [
        'Capable of working successfully; feasible.',
        'Impossible to achieve.',
        'Very expensive.'
      ],
      correctAnswer: 'Capable of working successfully; feasible.',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's10', 6),
      type: 'multiple-choice',
      question: 'The word "Ample" means:',
      options: [
        'Enough or more than enough; plentiful.',
        'Very little.',
        'Exactly zero.'
      ],
      correctAnswer: 'Enough or more than enough; plentiful.',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's10', 7),
      type: 'multiple-choice',
      question: 'The word "Explicit" means:',
      options: [
        'Stated clearly and in detail, leaving no room for confusion.',
        'Hidden and mysterious.',
        'Related to old books.'
      ],
      correctAnswer: 'Stated clearly and in detail, leaving no room for confusion.',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's10', 8),
      type: 'multiple-choice',
      question: 'The word "Implicit" means:',
      options: [
        'Implied though not plainly expressed.',
        'Stated directly.',
        'Completely false.'
      ],
      correctAnswer: 'Implied though not plainly expressed.',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's10', 9),
      type: 'multiple-choice',
      question: 'The word "Profound" means:',
      options: [
        'Very great or intense.',
        'Shallow and superficial.',
        'Very loud.'
      ],
      correctAnswer: 'Very great or intense.',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's10', 10),
      type: 'multiple-choice',
      question: 'Are you ready for Module 2: Listening (Weeks 5-8)?',
      options: [
        'Yes, bring it on!',
        'I need to review Reading more.',
        'Not yet.'
      ],
      correctAnswer: 'Yes, bring it on!',
      points: 1
    }
  ]
};

export const B2_WEEK_4 = createShardedToeflUnit(
  'toefl-b2-w4',
  'Week 4: Reading - Structure & Summary',
  'Consolidate your reading skills by mastering sentence insertion and summary questions, while developing a deep understanding of academic grammar and transitions.',
  ['Learn to identify the logical placement of sentences within a paragraph', 'Master the art of synthesizing main ideas for summary questions', 'Analyze complex academic grammar and transition words'],
  [s1, s2, s3, s4, s5, s6, s7, s8, s9, s10]
);
