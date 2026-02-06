import { createShardedToeflUnit, genId } from '../utils';

const UNIT_ID = 27;
const LEVEL = 'b1';

// SHARDS 1-2: Environment & Ecology Vocabulary
const s1 = {
  id: genId(LEVEL, UNIT_ID, 's1', 0),
  type: 'vocabulary',
  title: 'Ecology & Biodiversity',
  questions: [
    {
      id: genId(LEVEL, UNIT_ID, 's1', 1),
      type: 'multiple-choice',
      question: 'What is an "ecosystem"?',
      options: ['A biological community of interacting organisms and their physical environment', 'A type of computer operating system', 'A large city'],
      correctAnswer: 'A biological community of interacting organisms and their physical environment',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's1', 2),
      type: 'multiple-choice',
      question: 'The term "biodiversity" refers to:',
      options: ['The variety of life in the world or in a particular habitat', 'The speed of a car', 'The number of people in a room'],
      correctAnswer: 'The variety of life in the world or in a particular habitat',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's1', 3),
      type: 'multiple-choice',
      question: 'What is a "habitat"?',
      options: ['The natural home or environment of an animal, plant, or other organism', 'A type of clothing', 'A habitual behavior'],
      correctAnswer: 'The natural home or environment of an animal, plant, or other organism',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's1', 4),
      type: 'multiple-choice',
      question: 'The word "conservation" means:',
      options: ['Prevention of wasteful use of a resource', 'Starting a fire', 'Building a new factory'],
      correctAnswer: 'Prevention of wasteful use of a resource',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's1', 5),
      type: 'multiple-choice',
      question: 'What does "endangered" mean?',
      options: ['At risk of extinction', 'Very common', 'Safe and protected'],
      correctAnswer: 'At risk of extinction',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's1', 6),
      type: 'multiple-choice',
      question: 'The term "deforestation" refers to:',
      options: ['The action of clearing a wide area of trees', 'Planting new trees', 'Studying the leaves'],
      correctAnswer: 'The action of clearing a wide area of trees',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's1', 7),
      type: 'multiple-choice',
      question: 'What is "pollution"?',
      options: ['The presence of harmful or poisonous substances in the environment', 'Fresh air', 'Clean water'],
      correctAnswer: 'The presence of harmful or poisonous substances in the environment',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's1', 8),
      type: 'multiple-choice',
      question: 'A "species" is:',
      options: ['A group of living organisms consisting of similar individuals', 'A type of rock', 'A planet in the solar system'],
      correctAnswer: 'A group of living organisms consisting of similar individuals',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's1', 9),
      type: 'multiple-choice',
      question: 'What does "sustainable" mean?',
      options: ['Able to be maintained at a certain rate or level', 'Going to end soon', 'Very expensive'],
      correctAnswer: 'Able to be maintained at a certain rate or level',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's1', 10),
      type: 'multiple-choice',
      question: 'The word "organism" refers to:',
      options: ['An individual animal, plant, or single-celled life form', 'A piece of furniture', 'A musical instrument'],
      correctAnswer: 'An individual animal, plant, or single-celled life form',
      points: 1
    }
  ]
};

const s2 = {
  id: genId(LEVEL, UNIT_ID, 's2', 0),
  type: 'vocabulary',
  title: 'Climate & Sustainability',
  questions: [
    {
      id: genId(LEVEL, UNIT_ID, 's2', 1),
      type: 'multiple-choice',
      question: 'What is "global warming"?',
      options: ['A gradual increase in the overall temperature of the earth\'s atmosphere', 'A sunny day', 'Using a heater in winter'],
      correctAnswer: 'A gradual increase in the overall temperature of the earth\'s atmosphere',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's2', 2),
      type: 'multiple-choice',
      question: 'The term "renewable energy" refers to:',
      options: ['Energy from a source that is not depleted when used', 'Energy from coal', 'Energy that runs out quickly'],
      correctAnswer: 'Energy from a source that is not depleted when used',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's2', 3),
      type: 'multiple-choice',
      question: 'What are "greenhouse gases"?',
      options: ['Gases that trap heat in the atmosphere', 'Gases that smell like flowers', 'Gases used to fill balloons'],
      correctAnswer: 'Gases that trap heat in the atmosphere',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's2', 4),
      type: 'multiple-choice',
      question: 'The word "emissions" means:',
      options: ['The production and discharge of something, especially gas or radiation', 'Buying a new car', 'Cleaning a house'],
      correctAnswer: 'The production and discharge of something, especially gas or radiation',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's2', 5),
      type: 'multiple-choice',
      question: 'What is a "carbon footprint"?',
      options: ['The total amount of greenhouse gases produced by an individual or group', 'A mark left by a black shoe', 'The weight of a piece of coal'],
      correctAnswer: 'The total amount of greenhouse gases produced by an individual or group',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's2', 6),
      type: 'multiple-choice',
      question: 'The term "recycling" refers to:',
      options: ['Converting waste into reusable material', 'Throwing everything in the trash', 'Buying new items every day'],
      correctAnswer: 'Converting waste into reusable material',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's2', 7),
      type: 'multiple-choice',
      question: 'What is "composting"?',
      options: ['Decomposing organic matter to use as fertilizer', 'Writing a letter', 'Drawing a map'],
      correctAnswer: 'Decomposing organic matter to use as fertilizer',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's2', 8),
      type: 'multiple-choice',
      question: 'The word "drought" means:',
      options: ['A prolonged period of abnormally low rainfall', 'A very heavy storm', 'A type of cold wind'],
      correctAnswer: 'A prolonged period of abnormally low rainfall',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's2', 9),
      type: 'multiple-choice',
      question: 'What does "organic" mean in farming?',
      options: ['Produced without the use of chemical fertilizers or pesticides', 'Grown in a lab', 'A type of plastic'],
      correctAnswer: 'Produced without the use of chemical fertilizers or pesticides',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's2', 10),
      type: 'multiple-choice',
      question: 'The term "solar power" uses energy from:',
      options: ['The sun', 'The wind', 'Moving water'],
      correctAnswer: 'The sun',
      points: 1
    }
  ]
};

const s3 = {
  id: genId(LEVEL, UNIT_ID, 's3', 0),
  type: 'grammar',
  title: 'Passive Voice Review',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's3', i + 1),
    type: 'multiple-choice',
    question: [
      'The forest ____ by the fire last year.',
      'New laws ____ to protect the environment.',
      'Rare species ____ in this habitat.',
      'A lot of plastic ____ into the ocean every day.',
      'The report ____ by a group of scientists.',
      'Wind turbines ____ in this area since 2010.',
      'The greenhouse effect ____ first ____ in the 19th century.',
      'Solar panels ____ on many roofs nowadays.',
      'The data ____ carefully ____ by the researchers.',
      'Thousands of trees ____ every minute.'
    ][i],
    options: [
      ['was destroyed', 'destroyed', 'is destroyed'],
      ['have been passed', 'are passed', 'pass'],
      ['are found', 'found', 'have found'],
      ['is thrown', 'thrown', 'throws'],
      ['was written', 'wrote', 'is writing'],
      ['have been installed', 'installed', 'are installed'],
      ['was / discovered', 'is / discovered', 'has / discovered'],
      ['are being installed', 'installed', 'install'],
      ['was / analyzed', 'is / analyzed', 'analyzed'],
      ['are cut down', 'cut down', 'are cutting down']
    ][i],
    correctAnswer: [
      'was destroyed', 'have been passed', 'are found', 'is thrown', 'was written',
      'have been installed', 'was / discovered', 'are being installed', 'was / analyzed',
      'are cut down'
    ][i],
    points: 1
  }))
};

const s4 = {
  id: genId(LEVEL, UNIT_ID, 's4', 0),
  type: 'grammar',
  title: 'Cause & Effect Connectors',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's4', i + 1),
    type: 'multiple-choice',
    question: [
      'The temperature is rising ____ greenhouse gas emissions.',
      '____ deforestation, many animals are losing their homes.',
      'He started recycling ____ he wanted to help the planet.',
      'The sea levels are rising; ____, coastal cities are at risk.',
      'We use renewable energy ____ reduce our carbon footprint.',
      'The air is polluted ____ the large number of factories.',
      'The drought was severe; ____, many crops failed.',
      '____ the high cost, few people buy electric cars.',
      'She moved to the countryside ____ the clean air.',
      'I am studying ecology ____ I can become a conservationist.'
    ][i],
    options: [
      ['due to', 'because', 'consequently'],
      ['Because of', 'Since', 'Therefore'],
      ['because', 'due to', 'as a result of'],
      ['consequently', 'because', 'so that'],
      ['in order to', 'because', 'due to'],
      ['owing to', 'because', 'so'],
      ['therefore', 'because', 'since'],
      ['Despite', 'Because', 'So'],
      ['for', 'because', 'so'],
      ['so that', 'because', 'due to']
    ][i],
    correctAnswer: [
      'due to', 'Because of', 'because', 'consequently', 'in order to',
      'owing to', 'therefore', 'Despite', 'for', 'so that'
    ][i],
    points: 1
  }))
};

const s5 = {
  id: genId(LEVEL, UNIT_ID, 's5', 0),
  type: 'reading',
  title: 'Reading: The Greenhouse Effect',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's5', i + 1),
    type: 'multiple-choice',
    question: [
      'What is the greenhouse effect?',
      'Which is the most common greenhouse gas produced by humans?',
      'How does the greenhouse effect impact Earth\'s temperature?',
      'Where do most human-caused CO2 emissions come from?',
      'Is the greenhouse effect naturally occurring?',
      'What would happen to Earth without any greenhouse effect?',
      'What is the "enhanced" greenhouse effect?',
      'Which activity contributes significantly to methane emissions?',
      'How do trees help reduce the greenhouse effect?',
      'What can individuals do to reduce their impact?'
    ][i],
    options: [
      ['The process by which radiation from the atmosphere warms the planet', 'A way to grow vegetables in winter', 'A type of painting style'],
      ['Carbon dioxide (CO2)', 'Oxygen', 'Nitrogen'],
      ['It causes the temperature to rise', 'It makes the planet colder', 'It has no effect'],
      ['Burning fossil fuels', 'Planting trees', 'Eating vegetables'],
      ['Yes, it is necessary for life', 'No, it was invented by humans', 'Only in the summer'],
      ['It would be too cold for life as we know it', 'It would be much hotter', 'It would stay the same'],
      ['Additional warming caused by human activities', 'A better way to build greenhouses', 'A type of plant fertilizer'],
      ['Raising livestock and landfills', 'Riding a bicycle', 'Reading a book'],
      ['They absorb carbon dioxide', 'They produce methane', 'They block the sun'],
      ['Reduce energy use and recycle', 'Drive more cars', 'Leave lights on all day']
    ][i],
    correctAnswer: [
      'The process by which radiation from the atmosphere warms the planet', 'Carbon dioxide (CO2)',
      'It causes the temperature to rise', 'Burning fossil fuels', 'Yes, it is necessary for life',
      'It would be too cold for life as we know it', 'Additional warming caused by human activities',
      'Raising livestock and landfills', 'They absorb carbon dioxide', 'Reduce energy use and recycle'
    ][i],
    points: 1
  }))
};

const s6 = {
  id: genId(LEVEL, UNIT_ID, 's6', 0),
  type: 'reading',
  title: 'Reading: Renewable Energy Sources',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's6', i + 1),
    type: 'multiple-choice',
    question: [
      'What is the primary characteristic of renewable energy?',
      'Which is a common source of renewable energy?',
      'How does wind power generate electricity?',
      'What is "hydroelectric" power?',
      'What is a disadvantage of solar power?',
      'What is "geothermal" energy?',
      'How does biomass produce energy?',
      'What is the "grid"?',
      'Why is the transition to renewable energy important?',
      'Which country is a leader in wind energy?'
    ][i],
    options: [
      ['It comes from sources that are naturally replenished', 'It is very expensive', 'It is only available in cities'],
      ['Solar, wind, and water', 'Coal, oil, and gas', 'Batteries only'],
      ['Using wind to turn turbines', 'By heating up the air', 'By blowing on solar panels'],
      ['Energy produced by moving water', 'Energy from the sun', 'Energy from burning wood'],
      ['It is intermittent (it depends on weather and time)', 'It creates a lot of noise', 'It produces toxic waste'],
      ['Energy from the heat inside the Earth', 'Energy from the moon', 'Energy from rocks'],
      ['By burning organic materials like wood or waste', 'By using magnets', 'By capturing lightning'],
      ['The network that delivers electricity from producers to consumers', 'A type of solar panel', 'A battery'],
      ['To reduce greenhouse gas emissions and combat climate change', 'To make electricity more expensive', 'Because we ran out of space'],
      ['China, USA, and Germany', 'Brazil', 'Australia']
    ][i],
    correctAnswer: [
      'It comes from sources that are naturally replenished', 'Solar, wind, and water',
      'Using wind to turn turbines', 'Energy produced by moving water',
      'It is intermittent (it depends on weather and time)', 'Energy from the heat inside the Earth',
      'By burning organic materials like wood or waste',
      'The network that delivers electricity from producers to consumers',
      'To reduce greenhouse gas emissions and combat climate change', 'China, USA, and Germany'
    ][i],
    points: 1
  }))
};

const s7 = {
  id: genId(LEVEL, UNIT_ID, 's7', 0),
  type: 'listening',
  title: 'Listening: Lecture on Marine Biology',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's7', i + 1),
    type: 'multiple-choice',
    question: [
      'What is "marine biology"?',
      'What percentage of the Earth\'s surface is covered by oceans?',
      'What are "coral reefs"?',
      'What is "ocean acidification"?',
      'Why are phytoplankton important?',
      'What is a "food web" in the ocean?',
      'How does plastic pollution affect marine life?',
      'What is "overfishing"?',
      'What is the "abyssal zone"?',
      'Why should we protect marine biodiversity?'
    ][i],
    options: [
      ['The study of organisms in the ocean', 'The study of desert plants', 'The study of birds'],
      ['About 71%', 'Exactly 50%', 'Only 10%'],
      ['Diverse underwater ecosystems held together by calcium carbonate structures', 'Rocks at the bottom of the sea', 'Plants that grow on the beach'],
      ['A reduction in the pH of the ocean caused by CO2 absorption', 'The ocean becoming more salty', 'The water becoming blue'],
      ['They produce much of the world\'s oxygen', 'They are good for cleaning boats', 'They make the water warm'],
      ['The interlocking and interdependent food chains', 'A net used for fishing', 'A type of ocean plant'],
      ['Animals can ingest it or become entangled', 'It makes the water look pretty', 'It has no effect'],
      ['Catching fish faster than they can reproduce', 'Catching only one type of fish', 'Fishing from a small boat'],
      ['The deepest part of the ocean', 'The area near the shore', 'A type of fish'],
      ['It maintains the health of the planet and provides resources', 'To make the ocean bigger', 'Because fish are cute']
    ][i],
    correctAnswer: [
      'The study of organisms in the ocean', 'About 71%',
      'Diverse underwater ecosystems held together by calcium carbonate structures',
      'A reduction in the pH of the ocean caused by CO2 absorption',
      'They produce much of the world\'s oxygen', 'The interlocking and interdependent food chains',
      'Animals can ingest it or become entangled', 'Catching fish faster than they can reproduce',
      'The deepest part of the ocean', 'It maintains the health of the planet and provides resources'
    ][i],
    points: 1
  }))
};

const s8 = {
  id: genId(LEVEL, UNIT_ID, 's8', 0),
  type: 'listening',
  title: 'Listening: Discussion on Conservation Efforts',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's8', i + 1),
    type: 'multiple-choice',
    question: [
      'What is the main goal of conservation?',
      'What is a "national park"?',
      'What does "reforestation" involve?',
      'What is "sustainable development"?',
      'What is the role of an environmental activist?',
      'How do laws help in conservation?',
      'What is a "protected area"?',
      'Why is community involvement important in conservation?',
      'What is "wildlife trafficking"?',
      'What is a "carbon credit"?'
    ][i],
    options: [
      ['To protect species and their habitats', 'To build more roads', 'To catch more animals'],
      ['A large area of land protected by the government', 'A small garden', 'A parking lot'],
      ['Planting trees in an area where there were once forests', 'Cutting down trees', 'Painting the grass green'],
      ['Development that meets present needs without compromising future generations', 'Building as fast as possible', 'Stopping all development'],
      ['To raise awareness and push for change', 'To clean the streets', 'To write dictionaries'],
      ['By setting rules for pollution and protecting land', 'By making everyone speak the same language', 'They don\'t help'],
      ['A location which receives protection because of its natural values', 'A private backyard', 'A shopping mall'],
      ['Local people are the best stewards of their environment', 'It isn\'t important', 'To make them work for free'],
      ['Illegal trade in wild animals and plants', 'Moving animals to a new home', 'Taking photos of animals'],
      ['A permit allowing the holder to emit a certain amount of carbon', 'A type of money', 'A gift card']
    ][i],
    correctAnswer: [
      'To protect species and their habitats', 'A large area of land protected by the government',
      'Planting trees in an area where there were once forests',
      'Development that meets present needs without compromising future generations',
      'To raise awareness and push for change', 'By setting rules for pollution and protecting land',
      'A location which receives protection because of its natural values',
      'Local people are the best stewards of their environment', 'Illegal trade in wild animals and plants',
      'A permit allowing the holder to emit a certain amount of carbon'
    ][i],
    points: 1
  }))
};

const s9 = {
  id: genId(LEVEL, UNIT_ID, 's9', 0),
  type: 'vocabulary',
  title: 'Natural Disasters',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's9', i + 1),
    type: 'multiple-choice',
    question: [
      'What is an "earthquake"?',
      'A "tsunami" is caused by:',
      'What is a "hurricane"?',
      'The term "flood" refers to:',
      'What is a "wildfire"?',
      'A "landslide" occurs when:',
      'What is a "volcanic eruption"?',
      'The term "tornado" refers to:',
      'What is a "blizzard"?',
      'An "avalanche" is:'
    ][i],
    options: [
      ['Sudden shaking of the ground', 'A very loud noise', 'A type of cloud'],
      ['Underwater earthquakes or volcanic eruptions', 'Strong winds', 'The moon'],
      ['A severe tropical storm with high winds', 'A small rain shower', 'A hot day'],
      ['An overflow of water that submerges land', 'A dry desert', 'A type of drink'],
      ['A large, destructive fire that spreads quickly through woodland', 'A campfire', 'A birthday candle'],
      ['Rock, earth, or debris move down a slope', 'The sun sets', 'It starts to rain'],
      ['Lava and gas being released from a volcano', 'A mountain falling over', 'A cold winter'],
      ['A mobile, destructive vortex of violently rotating winds', 'A gentle breeze', 'A type of bird'],
      ['A severe snowstorm with high winds', 'A light snow', 'A sunny day in winter'],
      ['A mass of snow, ice, and rocks falling rapidly down a mountainside', 'A small snowball', 'A mountain path']
    ][i],
    correctAnswer: [
      'Sudden shaking of the ground', 'Underwater earthquakes or volcanic eruptions',
      'A severe tropical storm with high winds', 'An overflow of water that submerges land',
      'A large, destructive fire that spreads quickly through woodland',
      'Rock, earth, or debris move down a slope', 'Lava and gas being released from a volcano',
      'A mobile, destructive vortex of violently rotating winds', 'A severe snowstorm with high winds',
      'A mass of snow, ice, and rocks falling rapidly down a mountainside'
    ][i],
    points: 1
  }))
};

const s10 = {
  id: genId(LEVEL, UNIT_ID, 's10', 0),
  type: 'vocabulary',
  title: 'Sustainable Practices',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's10', i + 1),
    type: 'multiple-choice',
    question: [
      'What is "zero waste"?',
      'The term "eco-friendly" means:',
      'What is "urban farming"?',
      'The word "frugality" relates to:',
      'What is "energy efficiency"?',
      'What is "water conservation"?',
      'The term "ethical consumption" refers to:',
      'What is "upcycling"?',
      'What is a "locally sourced" product?',
      'The term "biodegradable" means:'
    ][i],
    options: [
      ['A set of principles focused on waste prevention', 'Throwing everything away', 'Having no food'],
      ['Not harmful to the environment', 'Very expensive', 'Looking like a tree'],
      ['Growing food in a city environment', 'Farming on a far away planet', 'Buying food at a store'],
      ['The quality of being economical with resources', 'Being very rich', 'Being very fast'],
      ['Using less energy to perform the same task', 'Using as much energy as possible', 'Having no electricity'],
      ['Using water wisely and avoiding waste', 'Drinking 10 liters of water a day', 'Building a swimming pool'],
      ['Buying products which were ethically produced', 'Buying the cheapest item', 'Not buying anything'],
      ['Reusing discarded objects to create a product of higher value', 'Throwing things in the bin', 'Breaking things apart'],
      ['Produced near where it is sold', 'Produced in another country', 'Made of plastic'],
      ['Capable of being decomposed by bacteria or other living organisms', 'Indestructible', 'Poisonous']
    ][i],
    correctAnswer: [
      'A set of principles focused on waste prevention', 'Not harmful to the environment',
      'Growing food in a city environment', 'The quality of being economical with resources',
      'Using less energy to perform the same task', 'Using water wisely and avoiding waste',
      'Buying products which were ethically produced',
      'Reusing discarded objects to create a product of higher value', 'Produced near where it is sold',
      'Capable of being decomposed by bacteria or other living organisms'
    ][i],
    points: 1
  }))
};

export const B1_WEEK_27 = createShardedToeflUnit(
  'toefl-b1-w27',
  'Week 27: Environmental Science',
  'Explore the natural world, climate change, and the importance of sustainability and conservation.',
  ['Master environmental and ecological vocabulary', 'Use the Passive Voice correctly in academic contexts', 'Master the use of Cause and Effect connectors'],
  [s1, s2, s3, s4, s5, s6, s7, s8, s9, s10]
);
