import { type CEFRLevel, type ExerciseCategory } from './exercise-types';

export interface A2Unit {
  id: number;
  title: string;
  module: number;
  theme: string;
  grammar: string[];
  vocabulary: string[];
}

export const A2_FULL_SYLLABUS: A2Unit[] = [
  // MODULE 1: Personal Identification & Basics
  { id: 1, module: 1, title: 'Greetings and Introductions', theme: 'Personal Info', grammar: ['Be verb present simple', 'Subject pronouns'], vocabulary: ['Greetings', 'Nationalities', 'Numbers 0-100'] },
  { id: 2, module: 1, title: 'Personal Information', theme: 'Personal Info', grammar: ['Question words', 'Be verb (negative and questions)'], vocabulary: ['Alphabet', 'Spelling names', 'Job titles'] },
  { id: 3, module: 1, title: 'Family Members', theme: 'Family', grammar: ['Possessive adjectives (my, your)', 'Saxon Genitive'], vocabulary: ['Family relationships', 'Marital status'] },
  { id: 4, module: 1, title: 'Describing Appearance', theme: 'People', grammar: ['Have got', 'Adjective + Noun order'], vocabulary: ['Colors', 'Physical description', 'Hair and eyes'] },
  { id: 5, module: 1, title: 'Personality Traits', theme: 'People', grammar: ['Adjectives in English (No plural)', 'Very/Really'], vocabulary: ['Adjectives of personality', 'Opposites'] },
  { id: 6, module: 1, title: 'Review: My World', theme: 'Basics', grammar: ['Review Module 1'], vocabulary: ['Comprehensive Review'] },

  // MODULE 2: Daily Life
  { id: 7, module: 2, title: 'Daily Routines', theme: 'Routines', grammar: ['Present simple (Affirmative)', 'Prepositions of time (in, on, at)'], vocabulary: ['Everyday activities', 'Times of day'] },
  { id: 8, module: 2, title: 'Weekly Habits', theme: 'Routines', grammar: ['Adverbs of frequency (always, often, never)', 'Present simple (Negative)'], vocabulary: ['Days of the week', 'Frequency expressions'] },
  { id: 9, module: 2, title: 'Work and Jobs', theme: 'Work', grammar: ['Present simple (Questions)', 'Do/Does'], vocabulary: ['Common jobs', 'Workplaces'] },
  { id: 10, module: 2, title: 'Leisure Activities', theme: 'Hobbies', grammar: ['Like/Love/Hate + -ing', 'Hardly ever'], vocabulary: ['Sports', 'Leisure activities'] },
  { id: 11, module: 2, title: 'Household Chores', theme: 'Home', grammar: ['Object pronouns', 'Can/Cant (Ability)'], vocabulary: ['Cleaning', 'Cooking', 'Chores'] },
  { id: 12, module: 2, title: 'Review: My Life', theme: 'Routines', grammar: ['Review Module 2'], vocabulary: ['Comprehensive Review'] },

  // MODULE 3: The World Around Us
  { id: 13, module: 3, title: 'My Home', theme: 'Home', grammar: ['There is / There are', 'Prepositions of place'], vocabulary: ['Rooms', 'Furniture'] },
  { id: 14, module: 3, title: 'Neighborhood and Town', theme: 'Places', grammar: ['Articles (a, an, the)', 'Plural nouns'], vocabulary: ['Public buildings', 'Shops'] },
  { id: 15, module: 3, title: 'Asking for Directions', theme: 'Places', grammar: ['Imperatives', 'Polite requests'], vocabulary: ['Directions', 'Street vocabulary'] },
  { id: 16, module: 3, title: 'Transportation', theme: 'Travel', grammar: ['By + transport', 'Prepositions (on/in)'], vocabulary: ['Types of transport', 'Travel verbs'] },
  { id: 17, module: 3, title: 'Weather and Seasons', theme: 'Weather', grammar: ['It is + weather', 'Present continuous (actions now)'], vocabulary: ['Weather conditions', 'Months of the year'] },
  { id: 18, module: 3, title: 'Review: My Surroundings', theme: 'Environment', grammar: ['Review Module 3'], vocabulary: ['Comprehensive Review'] },

  // MODULE 4: Food and Health
  { id: 19, module: 4, title: 'Food and Drink', theme: 'Food', grammar: ['Countable and Uncountable nouns', 'Some/Any'], vocabulary: ['Fruits', 'Vegetables', 'Drinks'] },
  { id: 20, module: 4, title: 'In the Kitchen', theme: 'Food', grammar: ['How much / How many', 'Quantifiers (a lot of, much, many)'], vocabulary: ['Containers', 'Portions', 'Cooking verbs'] },
  { id: 21, module: 4, title: 'At the Restaurant', theme: 'Food', grammar: ['Would like', 'Polite offers'], vocabulary: ['Menu', 'Ordering food', 'Service'] },
  { id: 22, module: 4, title: 'Health and Body', theme: 'Health', grammar: ['Should / Shouldnt', 'Have a/an'], vocabulary: ['Body parts', 'Common illnesses'] },
  { id: 23, module: 4, title: 'Fitness and Lifestyle', theme: 'Health', grammar: ['Must / Mustnt', 'Adverbs of manner (slowly, well)'], vocabulary: ['Gym', 'Exercises', 'Healthy habits'] },
  { id: 24, module: 4, title: 'Review: Healthy Living', theme: 'Health', grammar: ['Review Module 4'], vocabulary: ['Comprehensive Review'] },

  // MODULE 5: Past Events
  { id: 25, module: 5, title: 'Last Weekend', theme: 'Past', grammar: ['Past simple of Be (was/were)', 'Time expressions (yesterday, last)'], vocabulary: ['Places', 'Past events'] },
  { id: 26, module: 5, title: 'Past Activities', theme: 'Past', grammar: ['Past simple (Regular verbs)', 'Spelling rules -ed'], vocabulary: ['Action verbs', 'Historical events'] },
  { id: 27, module: 5, title: 'Irregular Past', theme: 'Past', grammar: ['Past simple (Irregular verbs)', 'Go, Have, Do, Get'], vocabulary: ['Common irregulars'] },
  { id: 28, module: 5, title: 'Childhood Memories', theme: 'Past', grammar: ['Used to', 'Past simple negative/questions'], vocabulary: ['School', 'Toys', 'Games'] },
  { id: 29, module: 5, title: 'Biographies', theme: 'Past', grammar: ['Dates (Ordinal numbers)', 'Prepositions of time'], vocabulary: ['Life events', 'Years'] },
  { id: 30, module: 5, title: 'Review: The Past', theme: 'Past', grammar: ['Review Module 5'], vocabulary: ['Comprehensive Review'] },

  // MODULE 6: Experiences and Achievements
  { id: 31, module: 6, title: 'Recent Actions', theme: 'Experiences', grammar: ['Present Perfect Simple (Affirmative)', 'Past Participles'], vocabulary: ['Life experiences', 'Trips'] },
  { id: 32, module: 6, title: 'Ever and Never', theme: 'Experiences', grammar: ['Present perfect with Ever/Never', 'Superlatives + Ever'], vocabulary: ['Global landmarks', 'Unique activities'] },
  { id: 33, module: 6, title: 'Just, Already, Yet', theme: 'Experiences', grammar: ['Present perfect with just, already, yet'], vocabulary: ['Tasks', 'News'] },
  { id: 34, module: 6, title: 'For and Since', theme: 'Experiences', grammar: ['Present perfect with For and Since', 'How long questions'], vocabulary: ['Duration of time'] },
  { id: 35, module: 6, title: 'Present Perfect vs Past Simple', theme: 'Experiences', grammar: ['Contrast: Finished vs Unfinished time'], vocabulary: ['Mixed time expressions'] },
  { id: 36, module: 6, title: 'Review: Experiences', theme: 'Experiences', grammar: ['Review Module 6'], vocabulary: ['Comprehensive Review'] },

  // MODULE 7: Comparisons and Preferences
  { id: 37, module: 7, title: 'Comparing Things', theme: 'Comparisons', grammar: ['Comparative adjectives (Short/Long)', 'Irregular comparatives'], vocabulary: ['Electronic gadgets', 'City vs Country'] },
  { id: 38, module: 7, title: 'The Best and the Worst', theme: 'Comparisons', grammar: ['Superlative adjectives', 'Superlatives with "in"'], vocabulary: ['Records', 'Travel destinations'] },
  { id: 39, module: 7, title: 'Equative Comparison', theme: 'Comparisons', grammar: ['(not) as ... as', 'Enough (Adjective + enough)'], vocabulary: ['Sizes', 'Ages', 'Prices'] },
  { id: 40, module: 7, title: 'Quantity and Comparison', theme: 'Comparisons', grammar: ['Not enough + noun', 'Too + adjective'], vocabulary: ['Money', 'Shopping issues'] },
  { id: 41, module: 7, title: 'Opinions and Feelings', theme: 'Opinions', grammar: ['Adjectives in -ed vs -ing (bored vs boring)'], vocabulary: ['Feelings', 'Social issues'] },
  { id: 42, module: 7, title: 'Review: Comparisons', theme: 'Comparisons', grammar: ['Review Module 7'], vocabulary: ['Comprehensive Review'] },

  // MODULE 8: Future and Predictions
  { id: 43, module: 8, title: 'Future Plans', theme: 'Future', grammar: ['Be going to (Intentions)', 'Future time expressions'], vocabulary: ['Weekend plans', 'Holidays'] },
  { id: 44, module: 8, title: 'Making Predictions', theme: 'Future', grammar: ['Will / Wont (Predictions)', 'I think/I dont think'], vocabulary: ['World in the future', 'Technology'] },
  { id: 45, module: 8, title: 'Arrangements', theme: 'Future', grammar: ['Present Continuous for arrangements'], vocabulary: ['Social calendar', 'Appointments'] },
  { id: 46, module: 8, title: 'Offers and Promises', theme: 'Future', grammar: ['Will for offers and promises', 'Shall for suggestions'], vocabulary: ['At a party', 'Helping others'] },
  { id: 47, module: 8, title: 'Travel Plans', theme: 'Future', grammar: ['Future forms review'], vocabulary: ['Hotels', 'Flights', 'Booking'] },
  { id: 48, module: 8, title: 'Review: The Future', theme: 'Future', grammar: ['Review Module 8'], vocabulary: ['Comprehensive Review'] },

  // MODULE 9: Communication and Knowledge
  { id: 49, module: 9, title: 'In the Classroom', theme: 'Education', grammar: ['Modal verbs (Must, Have to)', 'Imperatives review'], vocabulary: ['Stationery', 'Subjects', 'Rules'] },
  { id: 50, module: 9, title: 'Technology and Media', theme: 'Technology', grammar: ['Defining relative clauses (who, which, that)'], vocabulary: ['Computers', 'Internet', 'Social media'] },
  { id: 51, module: 9, title: 'Giving Advice', theme: 'Social', grammar: ['Should / Shouldnt (Advice)'], vocabulary: ['Life problems', 'Tips'] },
  { id: 52, module: 9, title: 'Connectors', theme: 'Communication', grammar: ['As well as, Whereas, While, Since', 'As a consequence'], vocabulary: ['Writing skills'] },
  { id: 53, module: 9, title: 'Saxon Genitive Deep Dive', theme: 'Grammar', grammar: ['Saxon Genitive with plurals', 'Irregular plurals genitive'], vocabulary: ['Possessions'] },
  { id: 54, module: 9, title: 'Review: Knowledge', theme: 'Education', grammar: ['Review Module 9'], vocabulary: ['Comprehensive Review'] },

  // MODULE 10: Advanced A2 Skills
  { id: 55, module: 10, title: 'Common Mistakes Review', theme: 'Correction', grammar: ['Uncountable nouns (Information, Homework)', 'A/An with countable'], vocabulary: ['Commonly confused words'] },
  { id: 56, module: 10, title: 'Capital Letters and Punctuation', theme: 'Writing', grammar: ['Capital letters (Languages, Nationalities, Days)'], vocabulary: ['Formal writing'] },
  { id: 57, module: 10, title: 'Adverbs and Adjectives', theme: 'Grammar', grammar: ['Adjective vs Adverb', 'Irregular adverbs (good-well)'], vocabulary: ['Descriptive language'] },
  { id: 58, module: 10, title: 'Every Day vs Every Days', theme: 'Grammar', grammar: ['Every + singular noun', 'Days of the week plural'], vocabulary: ['Routines review'] },
  { id: 59, module: 10, title: 'Saxon Genitive vs Of', theme: 'Grammar', grammar: ['Saxon Genitive for people/animals', 'Of for objects'], vocabulary: ['Relationships and parts'] },
  { id: 60, module: 10, title: 'Final Course Review', theme: 'Review', grammar: ['Mixed Grammar A2'], vocabulary: ['Mixed Vocabulary A2'] }
];
