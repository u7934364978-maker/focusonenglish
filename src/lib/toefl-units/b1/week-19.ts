import { createShardedToeflUnit, genId } from '../utils';

const UNIT_ID = 19;
const LEVEL = 'b1';

// SHARDS 1-2: History & Archaeology Vocabulary
const s1 = {
  id: genId(LEVEL, UNIT_ID, 's1', 0),
  type: 'vocabulary',
  title: 'Historical Eras & Methods',
  questions: [
    {
      id: genId(LEVEL, UNIT_ID, 's1', 1),
      type: 'multiple-choice',
      question: 'What does "chronological" mean?',
      options: ['Arranged in order of time', 'Randomly organized', 'Color coded'],
      correctAnswer: 'Arranged in order of time',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's1', 2),
      type: 'multiple-choice',
      question: 'The word "era" refers to:',
      options: ['A long and distinct period of history', 'A small error', 'A type of plant'],
      correctAnswer: 'A long and distinct period of history',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's1', 3),
      type: 'multiple-choice',
      question: 'What is "archaeology"?',
      options: ['Study of human history through physical remains', 'Study of stars', 'Study of insects'],
      correctAnswer: 'Study of human history through physical remains',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's1', 4),
      type: 'multiple-choice',
      question: 'An "artifact" is:',
      options: ['Object made by a human being, typically of historical interest', 'A modern car', 'A natural rock'],
      correctAnswer: 'Object made by a human being, typically of historical interest',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's1', 5),
      type: 'multiple-choice',
      question: 'What does "prehistoric" mean?',
      options: ['Period before written records', 'Yesterday', 'The future'],
      correctAnswer: 'Period before written records',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's1', 6),
      type: 'multiple-choice',
      question: 'A "civilization" is:',
      options: ['Complex society with culture and government', 'A group of animals', 'A single house'],
      correctAnswer: 'Complex society with culture and government',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's1', 7),
      type: 'multiple-choice',
      question: 'The term "excavation" relates to:',
      options: ['Carefully digging out of the ground', 'Building a skyscraper', 'Flying a plane'],
      correctAnswer: 'Carefully digging out of the ground',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's1', 8),
      type: 'multiple-choice',
      question: 'What is "heritage"?',
      options: ['Valued objects and qualities passed down', 'Money in a bank', 'A type of food'],
      correctAnswer: 'Valued objects and qualities passed down',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's1', 9),
      type: 'multiple-choice',
      question: 'An "archive" is a place where:',
      options: ['Historical documents are kept', 'People go to swim', 'Cars are repaired'],
      correctAnswer: 'Historical documents are kept',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's1', 10),
      type: 'multiple-choice',
      question: 'What is "stratigraphy"?',
      options: ['Study of rock layers and layering', 'Drawing maps', 'Cooking old recipes'],
      correctAnswer: 'Study of rock layers and layering',
      points: 1
    }
  ]
};

const s2 = {
  id: genId(LEVEL, UNIT_ID, 's2', 0),
  type: 'vocabulary',
  title: 'Social & Political History',
  questions: [
    {
      id: genId(LEVEL, UNIT_ID, 's2', 1),
      type: 'multiple-choice',
      question: 'What is a "dynasty"?',
      options: ['Line of hereditary rulers', 'A type of restaurant', 'A sports team'],
      correctAnswer: 'Line of hereditary rulers',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's2', 2),
      type: 'multiple-choice',
      question: 'The word "empire" means:',
      options: ['Extensive group of states under a single authority', 'A small village', 'A private company'],
      correctAnswer: 'Extensive group of states under a single authority',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's2', 3),
      type: 'multiple-choice',
      question: 'What is "feudalism"?',
      options: ['Social system in medieval Europe', 'A modern computer system', 'A type of art'],
      correctAnswer: 'Social system in medieval Europe',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's2', 4),
      type: 'multiple-choice',
      question: 'The term "revolution" refers to:',
      options: ['Forcible overthrow of a government or social order', 'A slow change', 'A quiet party'],
      correctAnswer: 'Forcible overthrow of a government or social order',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's2', 5),
      type: 'multiple-choice',
      question: 'What is a "treaty"?',
      options: ['Formally concluded and ratified agreement between states', 'A birthday card', 'A grocery list'],
      correctAnswer: 'Formally concluded and ratified agreement between states',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's2', 6),
      type: 'multiple-choice',
      question: 'The word "renaissance" means:',
      options: ['Rebirth or revival', 'A long sleep', 'A type of winter'],
      correctAnswer: 'Rebirth or revival',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's2', 7),
      type: 'multiple-choice',
      question: 'What is "colonialism"?',
      options: ['Acquiring full or partial political control over another country', 'Helping neighbors', 'Buying land for a park'],
      correctAnswer: 'Acquiring full or partial political control over another country',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's2', 8),
      type: 'multiple-choice',
      question: 'The term "industrialization" refers to:',
      options: ['Development of industries in a country or region', 'Closing all factories', 'Farming by hand only'],
      correctAnswer: 'Development of industries in a country or region',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's2', 9),
      type: 'multiple-choice',
      question: 'What is "democracy"?',
      options: ['System of government by the whole population', 'Rule by one person', 'A system with no rules'],
      correctAnswer: 'System of government by the whole population',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's2', 10),
      type: 'multiple-choice',
      question: 'A "monarchy" is:',
      options: ['Form of government with a monarch at the head', 'A city without leaders', 'A group of scientists ruling'],
      correctAnswer: 'Form of government with a monarch at the head',
      points: 1
    }
  ]
};

const s3 = {
  id: genId(LEVEL, UNIT_ID, 's3', 0),
  type: 'grammar',
  title: 'Past Perfect vs Past Simple',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's3', i + 1),
    type: 'multiple-choice',
    question: [
      'By the time the archaeologists arrived, the site ____ by looters.',
      'Before the empire fell, it ____ for over five hundred years.',
      'The historian realized he ____ a mistake in the dates.',
      'When the museum opened, many artifacts ____ already.',
      'After the treaty ____, the war finally ended.',
      'They discovered that the civilization ____ because of a drought.',
      'I ____ never seen such a beautiful artifact before that day.',
      'The city ____ mostly destroyed before the king surrendered.',
      'Until the excavation began, no one ____ what was hidden there.',
      'By the 19th century, many old traditions ____.'
    ][i],
    options: [
      ['had been visited', 'visited', 'has been visited'],
      ['had lasted', 'lasted', 'has lasted'],
      ['had made', 'made', 'has made'],
      ['had been sold', 'sold', 'were sold'],
      ['had been signed', 'signed', 'was signed'],
      ['had collapsed', 'collapsed', 'has collapsed'],
      ['had', 'have', 'was'],
      ['had been', 'was', 'has been'],
      ['had known', 'knew', 'has known'],
      ['had disappeared', 'disappeared', 'have disappeared']
    ][i],
    correctAnswer: [
      'had been visited', 'had lasted', 'had made', 'had been sold', 'had been signed',
      'had collapsed', 'had', 'had been', 'had known', 'had disappeared'
    ][i],
    points: 1
  }))
};

const s4 = {
  id: genId(LEVEL, UNIT_ID, 's4', 0),
  type: 'grammar',
  title: 'Used to / Would for Past Habits',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's4', i + 1),
    type: 'multiple-choice',
    question: [
      'Ancient Romans ____ bathe in large public baths.',
      'In the Middle Ages, people ____ believe in many myths.',
      'The Pharaoh ____ often visit the temple at sunrise.',
      'Scholars ____ spend years transcribing old texts.',
      'Common people ____ not have access to formal education.',
      'Explorers ____ travel for months without seeing land.',
      'In the past, families ____ gather around the fire to tell stories.',
      'Kings ____ usually reward their soldiers after a victory.',
      'Before the printing press, monks ____ copy books by hand.',
      'Ancient civilizations ____ build monuments to their gods.'
    ][i],
    options: [
      ['used to', 'use to', 'were used to'],
      ['used to', 'use to', 'got used to'],
      ['would', 'will', 'is used to'],
      ['would', 'used', 'will'],
      ['did not use to', 'were not used to', 'would not'],
      ['would', 'will', 'are used to'],
      ['would', 'will', 'use to'],
      ['would', 'used to', 'will'],
      ['would', 'use to', 'were used to'],
      ['used to', 'use to', 'are used to']
    ][i],
    correctAnswer: [
      'used to', 'used to', 'would', 'would', 'did not use to',
      'would', 'would', 'would', 'would', 'used to'
    ][i],
    points: 1
  }))
};

const s5 = {
  id: genId(LEVEL, UNIT_ID, 's5', 0),
  type: 'reading',
  title: 'Reading: The Rosetta Stone',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's5', i + 1),
    type: 'multiple-choice',
    question: [
      'What was the primary importance of the Rosetta Stone?',
      'How many languages were inscribed on the Rosetta Stone?',
      'Who is credited with deciphering the hieroglyphics?',
      'In what year was the Rosetta Stone discovered?',
      'Where was the Rosetta Stone found?',
      'What type of stone is the Rosetta Stone?',
      'The top text on the stone was written in:',
      'The middle text on the stone was written in:',
      'The bottom text on the stone was written in:',
      'Why was the decree written in three different scripts?'
    ][i],
    options: [
      ['It helped decode ancient Egyptian hieroglyphs', 'It was a map to a hidden city', 'It contained a recipe for bread'],
      ['Two', 'Three', 'Four'],
      ['Jean-François Champollion', 'Napoleon Bonaparte', 'Howard Carter'],
      ['1799', '1822', '1901'],
      ['Rosetta, Egypt', 'Cairo, Egypt', 'London, England'],
      ['Granodiorite', 'Marble', 'Sandstone'],
      ['Hieroglyphic', 'Demotic', 'Greek'],
      ['Demotic', 'Hieroglyphic', 'Greek'],
      ['Greek', 'Demotic', 'Hieroglyphic'],
      ['To ensure everyone in Egypt could read it', 'Because they ran out of space', 'To make it look beautiful']
    ][i],
    correctAnswer: [
      'It helped decode ancient Egyptian hieroglyphs', 'Three', 'Jean-François Champollion',
      '1799', 'Rosetta, Egypt', 'Granodiorite', 'Hieroglyphic', 'Demotic', 'Greek',
      'To ensure everyone in Egypt could read it'
    ][i],
    points: 1
  }))
};

const s6 = {
  id: genId(LEVEL, UNIT_ID, 's6', 0),
  type: 'reading',
  title: 'Reading: The Silk Road',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's6', i + 1),
    type: 'multiple-choice',
    question: [
      'What was the Silk Road?',
      'Which two regions did the Silk Road primarily connect?',
      'Besides silk, what else was traded on this route?',
      'How did the Silk Road impact culture?',
      'Who is the most famous European explorer to travel the Silk Road?',
      'What animal was most commonly used for transport?',
      'Was the Silk Road a single road?',
      'What was a "caravanserai"?',
      'When did the Silk Road reach its peak?',
      'Why did the importance of the Silk Road decline?'
    ][i],
    options: [
      ['A network of trade routes', 'A single long road in China', 'A path made of silk'],
      ['East Asia and the Mediterranean', 'North and South America', 'Africa and Australia'],
      ['Spices, ideas, and religions', 'Computers and cars', 'Ice and snow'],
      ['It facilitated the exchange of ideas and technology', 'It made everyone speak the same language', 'It stopped all wars'],
      ['Marco Polo', 'Christopher Columbus', 'Vasco da Gama'],
      ['Camel', 'Horse', 'Elephant'],
      ['No, it was a network of routes', 'Yes, it was a straight line', 'It was only a sea route'],
      ['A roadside inn for travelers', 'A type of silk', 'A desert storm'],
      ['During the Tang Dynasty and Mongol Empire', 'In the 20th century', 'Before humans existed'],
      ['Sea routes became faster and safer', 'Silk went out of fashion', 'The road was destroyed by a volcano']
    ][i],
    correctAnswer: [
      'A network of trade routes', 'East Asia and the Mediterranean', 'Spices, ideas, and religions',
      'It facilitated the exchange of ideas and technology', 'Marco Polo', 'Camel',
      'No, it was a network of routes', 'A roadside inn for travelers',
      'During the Tang Dynasty and Mongol Empire', 'Sea routes became faster and safer'
    ][i],
    points: 1
  }))
};

const s7 = {
  id: genId(LEVEL, UNIT_ID, 's7', 0),
  type: 'listening',
  title: 'Listening: Lecture on the Bronze Age',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's7', i + 1),
    type: 'multiple-choice',
    question: [
      'What two metals are combined to make bronze?',
      'The Bronze Age followed which period?',
      'What was a major advancement during the Bronze Age?',
      'How did bronze change warfare?',
      'What happened during the "Late Bronze Age Collapse"?',
      'Which civilization is known for its bronze work?',
      'Why was tin so important in this period?',
      'What type of writing system appeared in the Bronze Age?',
      'How did bronze impact agriculture?',
      'What material eventually replaced bronze for tools and weapons?'
    ][i],
    options: [
      ['Copper and tin', 'Gold and silver', 'Iron and lead'],
      ['The Stone Age', 'The Iron Age', 'The Industrial Revolution'],
      ['The development of metallurgy', 'The invention of the internet', 'The discovery of electricity'],
      ['It allowed for stronger and more durable weapons', 'It made weapons heavier and useless', 'It ended all fighting'],
      ['Many civilizations in the Mediterranean collapsed', 'Everyone moved to the mountains', 'The sun stopped shining'],
      ['The Mycenaeans', 'The Aztecs', 'The Vikings'],
      ['It was rare and needed for making bronze', 'It was used to make coins', 'It was a food source'],
      ['Cuneiform and Hieroglyphs', 'Modern English', 'Digital code'],
      ['Better tools allowed for more efficient farming', 'It had no impact', 'It made farming impossible'],
      ['Iron', 'Plastic', 'Steel']
    ][i],
    correctAnswer: [
      'Copper and tin', 'The Stone Age', 'The development of metallurgy',
      'It allowed for stronger and more durable weapons', 'Many civilizations in the Mediterranean collapsed',
      'The Mycenaeans', 'It was rare and needed for making bronze', 'Cuneiform and Hieroglyphs',
      'Better tools allowed for more efficient farming', 'Iron'
    ][i],
    points: 1
  }))
};

const s8 = {
  id: genId(LEVEL, UNIT_ID, 's8', 0),
  type: 'listening',
  title: 'Listening: Interview with an Archaeologist',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's8', i + 1),
    type: 'multiple-choice',
    question: [
      'What is the first step in an archaeological excavation?',
      'How do archaeologists choose where to dig?',
      'What tool is most commonly used for delicate work?',
      'Why is "context" important in archaeology?',
      'What is "carbon dating" used for?',
      'What does she say is the most rewarding part of her job?',
      'How does she handle finding fragile items?',
      'What happens to the artifacts after they are cleaned?',
      'How has technology changed archaeology?',
      'What is one challenge mentioned in the interview?'
    ][i],
    options: [
      ['Surveying the site', 'Breaking the ground with a bulldozer', 'Selling the land'],
      ['Historical records and satellite imagery', 'They pick a random spot', 'They look for buried treasure maps'],
      ['A trowel and brush', 'A hammer and nails', 'A large shovel'],
      ['It helps determine the age and use of an object', 'It makes the object look better', 'It is not important'],
      ['Determining the age of organic materials', 'Cleaning the artifacts', 'Taking photos'],
      ['Connecting with the people of the past', 'Finding gold coins', 'Being on television'],
      ['She uses special preservatives and handles them carefully', 'She puts them in her pocket', 'She leaves them in the sun'],
      ['They are cataloged and often sent to museums', 'They are sold at auctions', 'They are thrown away'],
      ['Ground-penetrating radar and 3D scanning', 'It has not changed at all', 'It has made the work harder'],
      ['Weather conditions and funding', 'Losing her tools', 'Boredom']
    ][i],
    correctAnswer: [
      'Surveying the site', 'Historical records and satellite imagery', 'A trowel and brush',
      'It helps determine the age and use of an object', 'Determining the age of organic materials',
      'Connecting with the people of the past', 'She uses special preservatives and handles them carefully',
      'They are cataloged and often sent to museums', 'Ground-penetrating radar and 3D scanning',
      'Weather conditions and funding'
    ][i],
    points: 1
  }))
};

const s9 = {
  id: genId(LEVEL, UNIT_ID, 's9', 0),
  type: 'vocabulary',
  title: 'Abstract Nouns in History',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's9', i + 1),
    type: 'multiple-choice',
    question: [
      'What does "sovereignty" mean in a historical context?',
      'The word "legacy" refers to:',
      'What is "fealty"?',
      'The term "insurrection" means:',
      'What is "ideology"?',
      'The word "persecution" refers to:',
      'What does "reconciliation" mean?',
      'The term "annexation" refers to:',
      'What is "migration"?',
      'The word "abolition" refers to:'
    ][i],
    options: [
      ['Supreme power or authority', 'A type of money', 'A beautiful building'],
      ['Something handed down from a predecessor', 'A small gift', 'A new law'],
      ['A feudal tenant\'s faithfulness to a lord', 'A type of food', 'A long journey'],
      ['A violent uprising against authority', 'A peaceful protest', 'A royal wedding'],
      ['A system of ideas and ideals', 'A type of machine', 'A map of the stars'],
      ['Hostility and ill-treatment based on beliefs', 'Giving rewards', 'Making friends'],
      ['The restoration of friendly relations', 'Starting a war', 'Buying a new house'],
      ['Adding territory to one\'s own territory', 'Giving up land', 'Building a wall'],
      ['Movement of people from one place to another', 'Staying in one city', 'Building a boat'],
      ['Action of formally ending a system or practice', 'Starting a new club', 'Writing a book']
    ][i],
    correctAnswer: [
      'Supreme power or authority', 'Something handed down from a predecessor', 'A feudal tenant\'s faithfulness to a lord',
      'A violent uprising against authority', 'A system of ideas and ideals',
      'Hostility and ill-treatment based on beliefs', 'The restoration of friendly relations',
      'Adding territory to one\'s own territory', 'Movement of people from one place to another',
      'Action of formally ending a system or practice'
    ][i],
    points: 1
  }))
};

const s10 = {
  id: genId(LEVEL, UNIT_ID, 's10', 0),
  type: 'vocabulary',
  title: 'Time Expressions & Periods',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's10', i + 1),
    type: 'multiple-choice',
    question: [
      'How many years are in a "decade"?',
      'A "century" consists of how many years?',
      'What is a "millennium"?',
      'The term "fortnight" refers to:',
      'What does "contemporary" mean?',
      'The word "ancient" refers to:',
      'What is a "bi-centennial"?',
      'The term "medieval" relates to:',
      'What does "precedent" mean in history?',
      'The word "chronology" is the study of:'
    ][i],
    options: [
      ['10 years', '100 years', '5 years'],
      ['100 years', '10 years', '1,000 years'],
      ['1,000 years', '100 years', '50 years'],
      ['Two weeks', 'One month', 'Ten days'],
      ['Living or occurring at the same time', 'From the past', 'In the future'],
      ['Belonging to the very distant past', 'From yesterday', 'Modern'],
      ['A 200th anniversary', 'A two-year period', 'A 20th anniversary'],
      ['The Middle Ages', 'The Stone Age', 'The Modern Era'],
      ['An earlier event used as an example', 'A future prediction', 'A type of plant'],
      ['The arrangement of events in time', 'The study of maps', 'The study of weather']
    ][i],
    correctAnswer: [
      '10 years', '100 years', '1,000 years', 'Two weeks', 'Living or occurring at the same time',
      'Belonging to the very distant past', 'A 200th anniversary', 'The Middle Ages',
      'An earlier event used as an example', 'The arrangement of events in time'
    ][i],
    points: 1
  }))
};

export const B1_WEEK_19 = createShardedToeflUnit(
  'toefl-b1-w19',
  'Week 19: History & Archaeology',
  'Explore the human past through historical events, civilizations, and archaeological discoveries.',
  ['Master vocabulary related to historical eras and archaeology', 'Differentiate between Past Perfect and Past Simple', 'Understand the use of "used to" and "would" for past habits'],
  [s1, s2, s3, s4, s5, s6, s7, s8, s9, s10]
);
