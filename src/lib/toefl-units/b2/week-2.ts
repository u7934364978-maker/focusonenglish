import { createShardedToeflUnit, genId } from '../utils';

const UNIT_ID = 2;
const LEVEL = 'b2';

// SHARDS 1-2: Natural Sciences Vocabulary I (Biology & Ecology)
const s1 = {
  id: genId(LEVEL, UNIT_ID, 's1', 0),
  type: 'vocabulary',
  title: 'Biology & Ecology Vocabulary',
  questions: [
    {
      id: genId(LEVEL, UNIT_ID, 's1', 1),
      type: 'multiple-choice',
      question: 'The term "Photosynthesis" refers to:',
      options: [
        'The process by which plants use sunlight to synthesize nutrients',
        'The migration of birds during winter',
        'The decomposition of organic matter'
      ],
      correctAnswer: 'The process by which plants use sunlight to synthesize nutrients',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's1', 2),
      type: 'multiple-choice',
      question: 'What is a "Symbiotic" relationship?',
      options: [
        'An interaction between two different organisms living in close physical association',
        'A predator-prey relationship only',
        'When one species completely destroys another'
      ],
      correctAnswer: 'An interaction between two different organisms living in close physical association',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's1', 3),
      type: 'multiple-choice',
      question: 'An "Ecosystem" consists of:',
      options: [
        'A biological community of interacting organisms and their physical environment',
        'Just the animals in a specific area',
        'The weather patterns of a region'
      ],
      correctAnswer: 'A biological community of interacting organisms and their physical environment',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's1', 4),
      type: 'multiple-choice',
      question: 'What does "Biodiversity" mean?',
      options: [
        'The variety of life in the world or in a particular habitat',
        'The number of trees in a forest',
        'The size of an animal population'
      ],
      correctAnswer: 'The variety of life in the world or in a particular habitat',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's1', 5),
      type: 'multiple-choice',
      question: 'To "Adapt" in biology means to:',
      options: [
        'Become adjusted to new conditions',
        'Stay exactly the same for millions of years',
        'Go extinct'
      ],
      correctAnswer: 'Become adjusted to new conditions',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's1', 6),
      type: 'multiple-choice',
      question: 'What is "Natural Selection"?',
      options: [
        'The process whereby organisms better adapted to their environment tend to survive',
        'Humans choosing which animals to breed',
        'A random event with no logical pattern'
      ],
      correctAnswer: 'The process whereby organisms better adapted to their environment tend to survive',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's1', 7),
      type: 'multiple-choice',
      question: 'A "Habitat" is:',
      options: [
        'The natural home or environment of an animal, plant, or other organism',
        'A cage in a zoo',
        'The entire planet Earth'
      ],
      correctAnswer: 'The natural home or environment of an animal, plant, or other organism',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's1', 8),
      type: 'multiple-choice',
      question: 'The term "Endangered" means a species is:',
      options: [
        'At serious risk of extinction',
        'Very common in the wild',
        'Dangerous to humans'
      ],
      correctAnswer: 'At serious risk of extinction',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's1', 9),
      type: 'multiple-choice',
      question: 'What is "Metabolism"?',
      options: [
        'The chemical processes that occur within a living organism in order to maintain life',
        'The way an animal moves',
        'The brain structure of a mammal'
      ],
      correctAnswer: 'The chemical processes that occur within a living organism in order to maintain life',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's1', 10),
      type: 'multiple-choice',
      question: 'An "Organism" is:',
      options: [
        'An individual animal, plant, or single-celled life form',
        'A group of rocks',
        'A collection of non-living things'
      ],
      correctAnswer: 'An individual animal, plant, or single-celled life form',
      points: 1
    }
  ]
};

const s2 = {
  id: genId(LEVEL, UNIT_ID, 's2', 0),
  type: 'vocabulary',
  title: 'Geology & Climate Vocabulary',
  questions: [
    {
      id: genId(LEVEL, UNIT_ID, 's2', 1),
      type: 'multiple-choice',
      question: 'What is "Erosion"?',
      options: [
        'The process of eroding or being eroded by wind, water, or other natural agents',
        'The building of new mountains',
        'A type of volcanic eruption'
      ],
      correctAnswer: 'The process of eroding or being eroded by wind, water, or other natural agents',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's2', 2),
      type: 'multiple-choice',
      question: 'The "Crust" of the Earth is:',
      options: [
        'The outermost layer of the planet',
        'The center of the Earth',
        'A type of rock found only in the ocean'
      ],
      correctAnswer: 'The outermost layer of the planet',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's2', 3),
      type: 'multiple-choice',
      question: 'What are "Tectonic Plates"?',
      options: [
        'Large slabs of rock that divide Earth\'s crust',
        'The rings of Saturn',
        'Instruments used to measure earthquakes'
      ],
      correctAnswer: 'Large slabs of rock that divide Earth\'s crust',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's2', 4),
      type: 'multiple-choice',
      question: 'The term "Sediment" refers to:',
      options: [
        'Matter that settles to the bottom of a liquid',
        'The gas in the atmosphere',
        'Lava from a volcano'
      ],
      correctAnswer: 'Matter that settles to the bottom of a liquid',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's2', 5),
      type: 'multiple-choice',
      question: 'What is "Precipitation"?',
      options: [
        'Rain, snow, sleet, or hail that falls to the ground',
        'The evaporation of water',
        'The movement of wind'
      ],
      correctAnswer: 'Rain, snow, sleet, or hail that falls to the ground',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's2', 6),
      type: 'multiple-choice',
      question: 'The "Atmosphere" is:',
      options: [
        'The envelope of gases surrounding the earth or another planet',
        'The liquid part of the Earth',
        'The solid rock under the ocean'
      ],
      correctAnswer: 'The envelope of gases surrounding the earth or another planet',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's2', 7),
      type: 'multiple-choice',
      question: 'What is "Climate"?',
      options: [
        'The weather conditions prevailing in an area in general or over a long period',
        'The weather today specifically',
        'A type of storm'
      ],
      correctAnswer: 'The weather conditions prevailing in an area in general or over a long period',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's2', 8),
      type: 'multiple-choice',
      question: 'The term "Glacier" refers to:',
      options: [
        'A slowly moving mass or river of ice',
        'A very fast-moving river',
        'A large lake'
      ],
      correctAnswer: 'A slowly moving mass or river of ice',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's2', 9),
      type: 'multiple-choice',
      question: 'What is "Sustainability"?',
      options: [
        'The ability to be maintained at a certain rate or level',
        'The act of destroying natural resources',
        'A type of high-speed energy'
      ],
      correctAnswer: 'The ability to be maintained at a certain rate or level',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's2', 10),
      type: 'multiple-choice',
      question: 'A "Natural Resource" is:',
      options: [
        'Materials or substances such as minerals, forests, water, and fertile land',
        'Something made in a factory',
        'A type of modern technology'
      ],
      correctAnswer: 'Materials or substances such as minerals, forests, water, and fertile land',
      points: 1
    }
  ]
};

// SHARDS 3-4: Reading Comprehension - Main Idea (Natural Sciences)
const s3 = {
  id: genId(LEVEL, UNIT_ID, 's3', 0),
  type: 'reading',
  title: 'Main Idea: The Arctic Ecosystem',
  questions: [
    {
      id: genId(LEVEL, UNIT_ID, 's3', 1),
      type: 'multiple-choice',
      question: 'Paragraph 1: The Arctic is a unique environment characterized by extreme cold and limited sunlight for parts of the year. Despite these challenges, a variety of species have adapted to survive here. What is the main idea of this paragraph?',
      options: [
        'The Arctic is too cold for any life to exist.',
        'Life in the Arctic has adapted to extreme environmental conditions.',
        'Sunlight is the most important factor for Arctic animals.'
      ],
      correctAnswer: 'Life in the Arctic has adapted to extreme environmental conditions.',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's3', 2),
      type: 'multiple-choice',
      question: 'Paragraph 2: Polar bears are perhaps the most iconic Arctic residents. They rely on sea ice to hunt seals, their primary food source. As temperatures rise and sea ice melts, their survival is increasingly threatened. What is the main topic of this paragraph?',
      options: [
        'The diet of seals in the Arctic.',
        'The impact of climate change on polar bear survival.',
        'How polar bears swim in the ocean.'
      ],
      correctAnswer: 'The impact of climate change on polar bear survival.',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's3', 3),
      type: 'multiple-choice',
      question: 'Which of the following would be the best title for a passage containing these paragraphs?',
      options: [
        'The Challenges of Arctic Life',
        'A Guide to Polar Bear Hunting',
        'The History of Arctic Exploration'
      ],
      correctAnswer: 'The Challenges of Arctic Life',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's3', 4),
      type: 'multiple-choice',
      question: 'What is the primary purpose of discussing sea ice in Paragraph 2?',
      options: [
        'To explain why the Arctic is so cold.',
        'To show its importance to the polar bear\'s hunting strategy.',
        'To describe how seals build their homes.'
      ],
      correctAnswer: 'To show its importance to the polar bear\'s hunting strategy.',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's3', 5),
      type: 'multiple-choice',
      question: 'The author mentions "extreme cold" to emphasize:',
      options: [
        'The difficulty of the Arctic environment.',
        'The beauty of the landscape.',
        'The reason why humans don\'t live there.'
      ],
      correctAnswer: 'The difficulty of the Arctic environment.',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's3', 6),
      type: 'multiple-choice',
      question: 'In a "Main Idea" question, you should look for:',
      options: [
        'A summary of the entire passage or paragraph.',
        'A specific detail mentioned once.',
        'The author\'s name.'
      ],
      correctAnswer: 'A summary of the entire passage or paragraph.',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's3', 7),
      type: 'multiple-choice',
      question: 'True or False: The main idea is always found in the first sentence.',
      options: [
        'True',
        'False',
        'Only in science passages'
      ],
      correctAnswer: 'False',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's3', 8),
      type: 'multiple-choice',
      question: 'If a passage discusses three different Arctic animals, the main idea is likely:',
      options: [
        'The diversity of animal life in the Arctic.',
        'A detailed description of the first animal.',
        'Why the Arctic is better than the Antarctic.'
      ],
      correctAnswer: 'The diversity of animal life in the Arctic.',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's3', 9),
      type: 'multiple-choice',
      question: 'Which word is a synonym for "Main Idea"?',
      options: [
        'Gist',
        'Detail',
        'Introduction'
      ],
      correctAnswer: 'Gist',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's3', 10),
      type: 'multiple-choice',
      question: 'A passage about volcanic activity would most likely have a main idea concerning:',
      options: [
        'The geological processes of eruptions.',
        'The history of a specific city near a volcano.',
        'The types of rocks found in a garden.'
      ],
      correctAnswer: 'The geological processes of eruptions.',
      points: 1
    }
  ]
};

const s4 = {
  id: genId(LEVEL, UNIT_ID, 's4', 0),
  type: 'reading',
  title: 'Main Idea: Marine Biology',
  questions: [
    {
      id: genId(LEVEL, UNIT_ID, 's4', 1),
      type: 'multiple-choice',
      question: 'Paragraph 1: Coral reefs are often called the "rainforests of the sea." They support a vast amount of marine life and provide essential services to coastal communities. What is the central theme?',
      options: [
        'The importance and biodiversity of coral reefs.',
        'The comparison between oceans and rainforests.',
        'The fishing industry in coastal areas.'
      ],
      correctAnswer: 'The importance and biodiversity of coral reefs.',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's4', 2),
      type: 'multiple-choice',
      question: 'Paragraph 2: Ocean acidification, caused by increased CO2 absorption, weakens coral skeletons. This makes it harder for reefs to grow and recover from damage. What is the main point?',
      options: [
        'The chemical composition of CO2.',
        'How ocean acidification threatens the health of coral reefs.',
        'The beauty of underwater skeletons.'
      ],
      correctAnswer: 'How ocean acidification threatens the health of coral reefs.',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's4', 3),
      type: 'multiple-choice',
      question: 'The entire passage most likely focuses on:',
      options: [
        'The ecological value of coral reefs and the threats they face.',
        'The best places to go scuba diving.',
        'How to prevent CO2 emissions globally.'
      ],
      correctAnswer: 'The ecological value of coral reefs and the threats they face.',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's4', 4),
      type: 'multiple-choice',
      question: 'The phrase "rainforests of the sea" is used to:',
      options: [
        'Highlight the high biodiversity of reefs.',
        'Explain that reefs are full of trees.',
        'Suggest that it rains a lot underwater.'
      ],
      correctAnswer: 'Highlight the high biodiversity of reefs.',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's4', 5),
      type: 'multiple-choice',
      question: 'What is a "Supporting Detail"?',
      options: [
        'Information that helps explain or prove the main idea.',
        'A minor fact that has no connection to the main idea.',
        'The conclusion of the passage.'
      ],
      correctAnswer: 'Information that helps explain or prove the main idea.',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's4', 6),
      type: 'multiple-choice',
      question: 'In a "Main Idea" question, avoid options that are:',
      options: [
        'Too specific or too broad.',
        'Directly stated in the first sentence.',
        'Easy to understand.'
      ],
      correctAnswer: 'Too specific or too broad.',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's4', 7),
      type: 'multiple-choice',
      question: 'A passage about the benefits of renewable energy would likely have a main idea about:',
      options: [
        'Why moving away from fossil fuels is advantageous.',
        'The cost of building a single windmill.',
        'The life of a famous environmentalist.'
      ],
      correctAnswer: 'Why moving away from fossil fuels is advantageous.',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's4', 8),
      type: 'multiple-choice',
      question: 'True or False: A passage can have more than one main idea.',
      options: [
        'False (there is one primary thesis)',
        'True (every paragraph has its own)',
        'Both are partially true depending on the question'
      ],
      correctAnswer: 'Both are partially true depending on the question',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's4', 9),
      type: 'multiple-choice',
      question: 'The "Main Idea" is most similar to:',
      options: [
        'The thesis statement.',
        'The table of contents.',
        'The index.'
      ],
      correctAnswer: 'The thesis statement.',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's4', 10),
      type: 'multiple-choice',
      question: 'Which of these is NOT a good way to find the main idea?',
      options: [
        'Reading only the last word of every sentence.',
        'Looking for repeated keywords.',
        'Reading the first and last sentences of paragraphs.'
      ],
      correctAnswer: 'Reading only the last word of every sentence.',
      points: 1
    }
  ]
};

// SHARDS 5-6: Reading Comprehension - Detail (Natural Sciences)
const s5 = {
  id: genId(LEVEL, UNIT_ID, 's5', 0),
  type: 'reading',
  title: 'Detail: Photosynthesis in Depth',
  questions: [
    {
      id: genId(LEVEL, UNIT_ID, 's5', 1),
      type: 'multiple-choice',
      question: 'According to the text, what pigment is primarily responsible for capturing light energy in plants?',
      options: [
        'Chlorophyll',
        'Carotene',
        'Hemoglobin'
      ],
      correctAnswer: 'Chlorophyll',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's5', 2),
      type: 'multiple-choice',
      question: 'Where in the plant cell does photosynthesis mostly take place?',
      options: [
        'Chloroplasts',
        'Nucleus',
        'Mitochondria'
      ],
      correctAnswer: 'Chloroplasts',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's5', 3),
      type: 'multiple-choice',
      question: 'What are the two main products of photosynthesis?',
      options: [
        'Glucose and Oxygen',
        'Water and Carbon Dioxide',
        'Light and Soil'
      ],
      correctAnswer: 'Glucose and Oxygen',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's5', 4),
      type: 'multiple-choice',
      question: 'The passage states that "stomata" are:',
      options: [
        'Small pores on the surface of leaves',
        'The roots of the plant',
        'Types of insects that eat leaves'
      ],
      correctAnswer: 'Small pores on the surface of leaves',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's5', 5),
      type: 'multiple-choice',
      question: 'What is the function of stomata?',
      options: [
        'To allow gas exchange (CO2 in, O2 out)',
        'To absorb water from the ground',
        'To protect the plant from sunlight'
      ],
      correctAnswer: 'To allow gas exchange (CO2 in, O2 out)',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's5', 6),
      type: 'multiple-choice',
      question: 'Which of the following is NOT mentioned as a requirement for photosynthesis?',
      options: [
        'Nitrogen gas',
        'Sunlight',
        'Water'
      ],
      correctAnswer: 'Nitrogen gas',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's5', 7),
      type: 'multiple-choice',
      question: 'According to Paragraph 3, "glucose" provides:',
      options: [
        'Energy for the plant\'s growth',
        'The green color of the leaves',
        'Protection against predators'
      ],
      correctAnswer: 'Energy for the plant\'s growth',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's5', 8),
      type: 'multiple-choice',
      question: 'A "Detail" question on the TOEFL will often:',
      options: [
        'Use different words (paraphrase) but have the same meaning as the text.',
        'Be a trick question with no answer.',
        'Require you to guess based on your own opinion.'
      ],
      correctAnswer: 'Use different words (paraphrase) but have the same meaning as the text.',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's5', 9),
      type: 'multiple-choice',
      question: 'To answer a Detail question, you should:',
      options: [
        'Locate the specific section of the text mentioned.',
        'Read only the introduction.',
        'Choose the longest answer option.'
      ],
      correctAnswer: 'Locate the specific section of the text mentioned.',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's5', 10),
      type: 'multiple-choice',
      question: '"Factual Information" questions ask about:',
      options: [
        'Facts explicitly stated in the passage.',
        'Things the author might believe.',
        'The history of the topic.'
      ],
      correctAnswer: 'Facts explicitly stated in the passage.',
      points: 1
    }
  ]
};

const s6 = {
  id: genId(LEVEL, UNIT_ID, 's6', 0),
  type: 'reading',
  title: 'Detail: Plate Tectonics',
  questions: [
    {
      id: genId(LEVEL, UNIT_ID, 's6', 1),
      type: 'multiple-choice',
      question: 'Who is credited with first proposing the theory of Continental Drift?',
      options: [
        'Alfred Wegener',
        'Charles Darwin',
        'Isaac Newton'
      ],
      correctAnswer: 'Alfred Wegener',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's6', 2),
      type: 'multiple-choice',
      question: 'What was the name of the supercontinent that existed millions of years ago?',
      options: [
        'Pangea',
        'Atlantis',
        'Eurasia'
      ],
      correctAnswer: 'Pangea',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's6', 3),
      type: 'multiple-choice',
      question: 'According to the passage, "divergent boundaries" occur when:',
      options: [
        'Plates move away from each other',
        'Plates slide past each other',
        'Plates collide'
      ],
      correctAnswer: 'Plates move away from each other',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's6', 4),
      type: 'multiple-choice',
      question: 'What geological feature is often formed at convergent boundaries?',
      options: [
        'Mountain ranges',
        'Deserts',
        'Coral reefs'
      ],
      correctAnswer: 'Mountain ranges',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's6', 5),
      type: 'multiple-choice',
      question: 'The "lithosphere" refers to:',
      options: [
        'The rigid outer part of the earth',
        'The molten core',
        'The layer of air above the crust'
      ],
      correctAnswer: 'The rigid outer part of the earth',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's6', 6),
      type: 'multiple-choice',
      question: 'What provides the energy for the movement of tectonic plates?',
      options: [
        'Heat from the Earth\'s interior',
        'The gravitational pull of the moon',
        'Ocean currents'
      ],
      correctAnswer: 'Heat from the Earth\'s interior',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's6', 7),
      type: 'multiple-choice',
      question: 'Which type of boundary is associated with the San Andreas Fault?',
      options: [
        'Transform boundary',
        'Divergent boundary',
        'Convergent boundary'
      ],
      correctAnswer: 'Transform boundary',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's6', 8),
      type: 'multiple-choice',
      question: 'True or False: According to the text, plate movement is very fast (meters per day).',
      options: [
        'False (it is very slow, centimeters per year)',
        'True',
        'The text does not mention the speed'
      ],
      correctAnswer: 'False (it is very slow, centimeters per year)',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's6', 9),
      type: 'multiple-choice',
      question: 'A "Negative Detail" question asks you to find the option that is:',
      options: [
        'NOT true or NOT mentioned',
        'The most important fact',
        'The first thing mentioned'
      ],
      correctAnswer: 'NOT true or NOT mentioned',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's6', 10),
      type: 'multiple-choice',
      question: 'In a Detail question, if you find a word from an option in the text, you should:',
      options: [
        'Check the context carefully to see if it actually matches the question.',
        'Pick that answer immediately.',
        'Ignore it because it is probably a trap.'
      ],
      correctAnswer: 'Check the context carefully to see if it actually matches the question.',
      points: 1
    }
  ]
};

// SHARDS 7-8: Grammar & Sentence Structure (Focus on Science Context)
const s7 = {
  id: genId(LEVEL, UNIT_ID, 's7', 0),
  type: 'vocabulary',
  title: 'Grammar in Science: Cause & Effect',
  questions: [
    {
      id: genId(LEVEL, UNIT_ID, 's7', 1),
      type: 'multiple-choice',
      question: 'Choose the correct connector: "The global temperature rose, ____ the glaciers began to melt faster."',
      options: [
        'as a result',
        'although',
        'nevertheless'
      ],
      correctAnswer: 'as a result',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's7', 2),
      type: 'multiple-choice',
      question: 'Which word indicates a cause?',
      options: [
        'because of',
        'consequently',
        'hence'
      ],
      correctAnswer: 'because of',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's7', 3),
      type: 'multiple-choice',
      question: 'Complete the sentence: "____ the high pressure, the rock remained solid."',
      options: [
        'Despite',
        'Because',
        'Therefore'
      ],
      correctAnswer: 'Despite',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's7', 4),
      type: 'multiple-choice',
      question: 'Which phrase is used to introduce a result?',
      options: [
        'leads to',
        'due to',
        'since'
      ],
      correctAnswer: 'leads to',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's7', 5),
      type: 'multiple-choice',
      question: 'Choose the correct option: "____ CO2 levels increase, the ocean becomes more acidic."',
      options: [
        'As',
        'While',
        'But'
      ],
      correctAnswer: 'As',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's7', 6),
      type: 'multiple-choice',
      question: 'Which of these shows a contrast between two scientific theories?',
      options: [
        'On the contrary',
        'Furthermore',
        'Similarly'
      ],
      correctAnswer: 'On the contrary',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's7', 7),
      type: 'multiple-choice',
      question: 'Identify the sentence showing cause and effect:',
      options: [
        'The loss of habitat resulted in a decrease in the bird population.',
        'The birds were small and had blue feathers.',
        'Birds can be found in many different parts of the world.'
      ],
      correctAnswer: 'The loss of habitat resulted in a decrease in the bird population.',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's7', 8),
      type: 'multiple-choice',
      question: 'Choose the correct connector: "The soil was very dry; ____, the plants did not grow well."',
      options: [
        'therefore',
        'however',
        'although'
      ],
      correctAnswer: 'therefore',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's7', 9),
      type: 'multiple-choice',
      question: 'What does "owing to" mean?',
      options: [
        'because of',
        'in spite of',
        'instead of'
      ],
      correctAnswer: 'because of',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's7', 10),
      type: 'multiple-choice',
      question: 'Which of these is a way to express purpose in science?',
      options: [
        'in order to',
        'because',
        'and'
      ],
      correctAnswer: 'in order to',
      points: 1
    }
  ]
};

const s8 = {
  id: genId(LEVEL, UNIT_ID, 's8', 0),
  type: 'vocabulary',
  title: 'Grammar in Science: Comparing & Defining',
  questions: [
    {
      id: genId(LEVEL, UNIT_ID, 's8', 1),
      type: 'multiple-choice',
      question: 'Which sentence correctly compares two scientific concepts?',
      options: [
        'Mercury is much smaller than Jupiter.',
        'Mercury is much small than Jupiter.',
        'Mercury is small as Jupiter.'
      ],
      correctAnswer: 'Mercury is much smaller than Jupiter.',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's8', 2),
      type: 'multiple-choice',
      question: 'Choose the correct word for a definition: "A volcano is an opening in the Earth\'s crust ____ allows lava to escape."',
      options: [
        'that',
        'who',
        'it'
      ],
      correctAnswer: 'that',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's8', 3),
      type: 'multiple-choice',
      question: 'Which phrase indicates a similarity?',
      options: [
        'likewise',
        'alternatively',
        'nevertheless'
      ],
      correctAnswer: 'likewise',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's8', 4),
      type: 'multiple-choice',
      question: 'Identify the superlative form:',
      options: [
        'The highest mountain',
        'A higher mountain',
        'A high mountain'
      ],
      correctAnswer: 'The highest mountain',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's8', 5),
      type: 'multiple-choice',
      question: 'Which sentence uses "whereas" correctly?',
      options: [
        'Mammals are warm-blooded, whereas reptiles are cold-blooded.',
        'Whereas mammals are warm-blooded.',
        'Mammals are warm-blooded whereas.'
      ],
      correctAnswer: 'Mammals are warm-blooded, whereas reptiles are cold-blooded.',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's8', 6),
      type: 'multiple-choice',
      question: 'Choose the correct option: "Hydrogen is the ____ abundant element in the universe."',
      options: [
        'most',
        'more',
        'much'
      ],
      correctAnswer: 'most',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's8', 7),
      type: 'multiple-choice',
      question: 'What is the function of "specifically"?',
      options: [
        'To provide more precise information or a specific example',
        'To show a general trend',
        'To disagree with a previous point'
      ],
      correctAnswer: 'To provide more precise information or a specific example',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's8', 8),
      type: 'multiple-choice',
      question: 'Which word is used to introduce a definition in a text?',
      options: [
        'is defined as',
        'looks like',
        'acts as'
      ],
      correctAnswer: 'is defined as',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's8', 9),
      type: 'multiple-choice',
      question: 'Complete the sentence: "Gold is very valuable ____ its rarity and beauty."',
      options: [
        'due to',
        'despite',
        'regardless of'
      ],
      correctAnswer: 'due to',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's8', 10),
      type: 'multiple-choice',
      question: 'Which connector is used to show a sequence in a scientific process?',
      options: [
        'Subsequently',
        'Alternatively',
        'On the other hand'
      ],
      correctAnswer: 'Subsequently',
      points: 1
    }
  ]
};

// SHARDS 9-10: Practice Sets - Mix of Main Idea & Detail
const s9 = {
  id: genId(LEVEL, UNIT_ID, 's9', 0),
  type: 'reading',
  title: 'Practice Set: Astronomy',
  questions: [
    {
      id: genId(LEVEL, UNIT_ID, 's9', 1),
      type: 'multiple-choice',
      question: 'Main Idea: The lifecycle of a star depends primarily on its initial mass. Large stars burn through their fuel quickly and end in violent explosions, while smaller stars live for billions of years. What is the main idea?',
      options: [
        'How a star\'s mass determines its lifespan and end.',
        'Why large stars are more interesting than small stars.',
        'The different colors of stars in the night sky.'
      ],
      correctAnswer: 'How a star\'s mass determines its lifespan and end.',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's9', 2),
      type: 'multiple-choice',
      question: 'Detail: A "Supernova" is the powerful and luminous stellar explosion that occurs during the last evolutionary stages of a massive star. What is a supernova?',
      options: [
        'A stellar explosion of a massive star.',
        'The birth of a new planet.',
        'The formation of a black hole only.'
      ],
      correctAnswer: 'A stellar explosion of a massive star.',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's9', 3),
      type: 'multiple-choice',
      question: 'According to the text, why do smaller stars live longer?',
      options: [
        'They burn their fuel more slowly.',
        'They are made of different materials.',
        'They are further away from the center of the galaxy.'
      ],
      correctAnswer: 'They burn their fuel more slowly.',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's9', 4),
      type: 'multiple-choice',
      question: 'The word "violent" in Paragraph 1 is used to describe:',
      options: [
        'The nature of stellar explosions.',
        'The behavior of scientists.',
        'The temperature of a star.'
      ],
      correctAnswer: 'The nature of stellar explosions.',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's9', 5),
      type: 'multiple-choice',
      question: 'What is the "primary factor" in a star\'s lifecycle according to the text?',
      options: [
        'Initial mass',
        'Proximity to other stars',
        'Age of the universe'
      ],
      correctAnswer: 'Initial mass',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's9', 6),
      type: 'multiple-choice',
      question: 'Main Idea: Black holes are regions of space where gravity is so strong that nothing, not even light, can escape. They are formed when massive stars collapse at the end of their lives. What is this passage about?',
      options: [
        'The definition and formation of black holes.',
        'How light travels through the universe.',
        'The history of astronomical telescopes.'
      ],
      correctAnswer: 'The definition and formation of black holes.',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's9', 7),
      type: 'multiple-choice',
      question: 'Detail: The boundary of a black hole is called the "event horizon." Once something crosses this point, it cannot return. What is the "event horizon"?',
      options: [
        'The point of no return for a black hole.',
        'The center of a star.',
        'A type of telescope lens.'
      ],
      correctAnswer: 'The point of no return for a black hole.',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's9', 8),
      type: 'multiple-choice',
      question: 'True or False: According to the text, light can escape from a black hole.',
      options: [
        'False',
        'True',
        'The text does not say'
      ],
      correctAnswer: 'False',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's9', 9),
      type: 'multiple-choice',
      question: 'In a Reading passage, "mass" most likely refers to:',
      options: [
        'The amount of matter in an object',
        'A religious ceremony',
        'A large group of people'
      ],
      correctAnswer: 'The amount of matter in an object',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's9', 10),
      type: 'multiple-choice',
      question: 'The author discusses black holes to illustrate:',
      options: [
        'The power of gravity in space.',
        'Why humans should not travel to other galaxies.',
        'How planets are formed.'
      ],
      correctAnswer: 'The power of gravity in space.',
      points: 1
    }
  ]
};

const s10 = {
  id: genId(LEVEL, UNIT_ID, 's10', 0),
  type: 'reading',
  title: 'Practice Set: Genetics',
  questions: [
    {
      id: genId(LEVEL, UNIT_ID, 's10', 1),
      type: 'multiple-choice',
      question: 'Main Idea: DNA is the molecule that carries the genetic instructions for all living things. It consists of two strands that wind around each other in a double helix. What is the main idea?',
      options: [
        'The function and structure of DNA.',
        'Who discovered the DNA molecule.',
        'The types of diseases caused by genetics.'
      ],
      correctAnswer: 'The function and structure of DNA.',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's10', 2),
      type: 'multiple-choice',
      question: 'Detail: Each strand of DNA has a backbone made of alternating sugar and phosphate groups. Attached to each sugar is one of four bases: adenine (A), cytosine (C), guanine (G), or thymine (T). What are the four bases?',
      options: [
        'A, C, G, and T',
        'Oxygen, Carbon, Nitrogen, Hydrogen',
        'Sugar, Phosphate, Helix, Strand'
      ],
      correctAnswer: 'A, C, G, and T',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's10', 3),
      type: 'multiple-choice',
      question: 'According to the text, what is the shape of DNA?',
      options: [
        'Double helix',
        'Single circle',
        'Square grid'
      ],
      correctAnswer: 'Double helix',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's10', 4),
      type: 'multiple-choice',
      question: 'The word "instructions" in Paragraph 1 refers to:',
      options: [
        'The genetic code for living things.',
        'A manual for a laboratory.',
        'The teacher\'s orders.'
      ],
      correctAnswer: 'The genetic code for living things.',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's10', 5),
      type: 'multiple-choice',
      question: 'What is the "backbone" of DNA made of?',
      options: [
        'Sugar and phosphate groups',
        'The four bases (A, C, G, T)',
        'Water and air'
      ],
      correctAnswer: 'Sugar and phosphate groups',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's10', 6),
      type: 'multiple-choice',
      question: 'Main Idea: A gene is a specific sequence of DNA that contains the code for a particular trait. Humans have about 20,000 to 25,000 genes in their genome. What is this passage about?',
      options: [
        'The definition and number of human genes.',
        'How to map the human genome.',
        'Why some traits are better than others.'
      ],
      correctAnswer: 'The definition and number of human genes.',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's10', 7),
      type: 'multiple-choice',
      question: 'Detail: Some genes act as instructions to make molecules called proteins. However, many genes do not code for proteins. According to the text, do all genes make proteins?',
      options: [
        'No, many do not.',
        'Yes, all of them do.',
        'The text does not say.'
      ],
      correctAnswer: 'No, many do not.',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's10', 8),
      type: 'multiple-choice',
      question: 'The phrase "particular trait" refers to:',
      options: [
        'A specific characteristic like eye color.',
        'A type of laboratory equipment.',
        'A person\'s name.'
      ],
      correctAnswer: 'A specific characteristic like eye color.',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's10', 9),
      type: 'multiple-choice',
      question: 'Which of the following would be the best summary for this week?',
      options: [
        'We practiced identifying main ideas and details in natural science contexts.',
        'We learned about the history of famous biologists.',
        'We focused on writing essays about the environment.'
      ],
      correctAnswer: 'We practiced identifying main ideas and details in natural science contexts.',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's10', 10),
      type: 'multiple-choice',
      question: 'How ready are you to tackle "Inference" questions next week?',
      options: [
        'Very ready',
        'Somewhat ready',
        'Not ready at all'
      ],
      correctAnswer: 'Very ready',
      points: 1
    }
  ]
};

export const B2_WEEK_2 = createShardedToeflUnit(
  'toefl-b2-w2',
  'Week 2: Reading - Main Idea & Detail',
  'Master the core reading skills of identifying main ideas and specific details within natural science texts.',
  ['Identify the central theme of complex academic paragraphs and passages', 'Locate and understand specific factual information in technical texts', 'Expand vocabulary related to biology, ecology, geology, and astronomy'],
  [s1, s2, s3, s4, s5, s6, s7, s8, s9, s10]
);
