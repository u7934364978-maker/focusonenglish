import { createShardedToeflUnit, genId } from '../utils';

const UNIT_ID = 24;
const LEVEL = 'b1';

// SHARDS 1-2: Psychology & Sociology Vocabulary
const s1 = {
  id: genId(LEVEL, UNIT_ID, 's1', 0),
  type: 'vocabulary',
  title: 'Psychological Concepts',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's1', i + 1),
    type: 'multiple-choice',
    question: [
      'What is "perception" in psychology?',
      'The term "cognition" refers to:',
      'What is "behaviorism"?',
      'The word "motivation" refers to:',
      'What is a "conditioned response"?',
      'The term "subconscious" means:',
      'What is "empathy"?',
      'The word "trauma" in psychology refers to:',
      'What is "resilience"?',
      'The term "intrinsic" motivation refers to:'
    ][i],
    options: [
      ['The way sensory information is organized and interpreted', 'The ability to see clearly', 'A type of feeling'],
      ['The mental action or process of acquiring knowledge', 'A physical exercise', 'Eating healthy food'],
      ['Theory that human behavior can be explained in terms of conditioning', 'The study of birds', 'A type of brain surgery'],
      ['The reason or reasons one has for acting or behaving', 'A type of movement', 'Feeling tired'],
      ['An automatic response established by training', 'A type of question', 'A voluntary action'],
      ['Part of the mind which is not currently in focal awareness', 'Being asleep', 'Thinking very hard'],
      ['The ability to understand and share the feelings of another', 'Feeling sorry for someone', 'Being happy'],
      ['Emotional response to a terrible event', 'A physical cut', 'A funny story'],
      ['The capacity to recover quickly from difficulties', 'Being very strong physically', 'Never failing'],
      ['Motivation that comes from within the individual', 'Motivation from money', 'Motivation from a boss']
    ][i],
    correctAnswer: [
      'The way sensory information is organized and interpreted', 'The mental action or process of acquiring knowledge',
      'Theory that human behavior can be explained in terms of conditioning',
      'The reason or reasons one has for acting or behaving', 'An automatic response established by training',
      'Part of the mind which is not currently in focal awareness',
      'The ability to understand and share the feelings of another', 'Emotional response to a terrible event',
      'The capacity to recover quickly from difficulties', 'Motivation that comes from within the individual'
    ][i],
    points: 1
  }))
};

const s2 = {
  id: genId(LEVEL, UNIT_ID, 's2', 0),
  type: 'vocabulary',
  title: 'Sociology & Social Structures',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's2', i + 1),
    type: 'multiple-choice',
    question: [
      'What is "socialization"?',
      'The term "culture" refers to:',
      'What is a "social norm"?',
      'The word "hierarchy" refers to:',
      'What is "urbanization"?',
      'The term "globalization" means:',
      'What is "social stratification"?',
      'The word "prejudice" refers to:',
      'What is "demography"?',
      'The term "secular" refers to:'
    ][i],
    options: [
      ['Process of learning to behave in a way that is acceptable to society', 'Going to a party', 'Talking to friends'],
      ['Customs, arts, and social institutions of a nation or people', 'A type of yogurt', 'A high level of education'],
      ['A standard or pattern of social behavior that is expected', 'A legal law', 'A mathematical average'],
      ['A system in which people or groups are ranked one above the other', 'A type of building', 'A circle'],
      ['Process of making an area more urban (city-like)', 'Moving to the countryside', 'Building more parks'],
      ['Process by which businesses or organizations develop international influence', 'Traveling around the world', 'Learning a new language'],
      ['Categorization of people into rankings of socioeconomic tiers', 'Making a map of the city', 'Sorting books'],
      ['Preconceived opinion that is not based on reason or experience', 'A type of judgement in court', 'Knowing a lot about someone'],
      ['The study of statistics such as births, deaths, and income', 'The study of democracy', 'Writing a biography'],
      ['Not connected with religious or spiritual matters', 'Very religious', 'Related to the ocean']
    ][i],
    correctAnswer: [
      'Process of learning to behave in a way that is acceptable to society',
      'Customs, arts, and social institutions of a nation or people',
      'A standard or pattern of social behavior that is expected',
      'A system in which people or groups are ranked one above the other', 'Process of making an area more urban (city-like)',
      'Process by which businesses or organizations develop international influence',
      'Categorization of people into rankings of socioeconomic tiers',
      'Preconceived opinion that is not based on reason or experience',
      'The study of statistics such as births, deaths, and income', 'Not connected with religious or spiritual matters'
    ][i],
    points: 1
  }))
};

const s3 = {
  id: genId(LEVEL, UNIT_ID, 's3', 0),
  type: 'grammar',
  title: 'Relative Clauses (Defining & Non-defining)',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's3', i + 1),
    type: 'multiple-choice',
    question: [
      'The man ____ lives next door is a psychologist.',
      'My car, ____ is ten years old, broke down again.',
      'The city ____ I was born is very beautiful.',
      'That is the woman ____ daughter won the prize.',
      'The book ____ I am reading is very interesting.',
      'Summer is the time ____ many people go on vacation.',
      'Paris, ____ is the capital of France, is famous for the Eiffel Tower.',
      'The reason ____ he left is still a mystery.',
      'The students ____ passed the test were very happy.',
      'His house, ____ he built himself, is very large.'
    ][i],
    options: [
      ['who', 'which', 'whose'],
      ['which', 'that', 'who'],
      ['where', 'which', 'that'],
      ['whose', 'who', 'whom'],
      ['that', 'who', 'where'],
      ['when', 'where', 'which'],
      ['which', 'that', 'who'],
      ['why', 'which', 'that'],
      ['who', 'which', 'whom'],
      ['which', 'that', 'who']
    ][i],
    correctAnswer: [
      'who', 'which', 'where', 'whose', 'that', 'when', 'which', 'why', 'who', 'which'
    ][i],
    points: 1
  }))
};

const s4 = {
  id: genId(LEVEL, UNIT_ID, 's4', 0),
  type: 'grammar',
  title: 'Participle Clauses',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's4', i + 1),
    type: 'multiple-choice',
    question: [
      '____ the news, she started to cry.',
      '____ by the loud noise, the baby woke up.',
      '____ my homework, I went out to play.',
      'The man ____ at the bus stop is my uncle.',
      '____ the door, he entered the room.',
      '____ with the result, he celebrated.',
      'The letter ____ yesterday arrived today.',
      '____ the book, I realized I had read it before.',
      '____ in the garden, she found an old coin.',
      '____ for her friend, she sat on the bench.'
    ][i],
    options: [
      ['Hearing', 'Heard', 'Having heard'],
      ['Frightened', 'Frightening', 'Frighten'],
      ['Having finished', 'Finishing', 'Finished'],
      ['standing', 'stood', 'having stood'],
      ['Opening', 'Opened', 'Having opened'],
      ['Pleased', 'Pleasing', 'Please'],
      ['posted', 'posting', 'having posted'],
      ['Reading', 'Read', 'Having read'],
      ['Working', 'Worked', 'Having worked'],
      ['Waiting', 'Waited', 'Having waited']
    ][i],
    correctAnswer: [
      'Hearing', 'Frightened', 'Having finished', 'standing', 'Opening', 'Pleased', 'posted', 'Reading', 'Working', 'Waiting'
    ][i],
    points: 1
  }))
};

const s5 = {
  id: genId(LEVEL, UNIT_ID, 's5', 0),
  type: 'reading',
  title: 'Reading: The Stanford Prison Experiment',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's5', i + 1),
    type: 'multiple-choice',
    question: [
      'Who conducted the Stanford Prison Experiment?',
      'In which year did the experiment take place?',
      'What was the primary goal of the study?',
      'How were the participants divided?',
      'Where was the "prison" located?',
      'How long was the experiment supposed to last?',
      'Why was the experiment stopped early?',
      'What did the "guards" start to exhibit?',
      'What was the main ethical criticism of the study?',
      'What is the lasting impact of this experiment on psychology?'
    ][i],
    options: [
      ['Philip Zimbardo', 'Stanley Milgram', 'Sigmund Freud'],
      ['1971', '1961', '1981'],
      ['To study the psychological effects of perceived power', 'To see how prisoners escape', 'To test new prison food'],
      ['Into guards and prisoners', 'Into police and criminals', 'Into rich and poor'],
      ['In the basement of the Stanford psychology building', 'In a real prison', 'In a hospital'],
      ['Two weeks', 'One month', 'Three days'],
      ['Due to the extreme emotional distress of the participants', 'They ran out of money', 'The building was closed'],
      ['Authoritarian and abusive behavior', 'Kindness and empathy', 'Boredom'],
      ['Lack of informed consent and harm to participants', 'The participants weren\'t paid enough', 'The food was bad'],
      ['It highlighted the power of social roles and situations', 'It showed prisons are good', 'It had no impact']
    ][i],
    correctAnswer: [
      'Philip Zimbardo', '1971', 'To study the psychological effects of perceived power',
      'Into guards and prisoners', 'In the basement of the Stanford psychology building',
      'Two weeks', 'Due to the extreme emotional distress of the participants',
      'Authoritarian and abusive behavior', 'Lack of informed consent and harm to participants',
      'It highlighted the power of social roles and situations'
    ][i],
    points: 1
  }))
};

const s6 = {
  id: genId(LEVEL, UNIT_ID, 's6', 0),
  type: 'reading',
  title: 'Reading: The Concept of "Flow" in Psychology',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's6', i + 1),
    type: 'multiple-choice',
    question: [
      'Who pioneered the concept of "Flow"?',
      'What is another name for being in a state of flow?',
      'What characterizes a flow state?',
      'What is required to achieve flow?',
      'How does time feel during flow?',
      'What happens to self-consciousness during flow?',
      'Can flow occur in any activity?',
      'What is the relationship between challenge and skill in flow?',
      'Why is flow considered positive for well-being?',
      'What is "autotelic" activity?'
    ][i],
    options: [
      ['Mihaly Csikszentmihalyi', 'Abraham Maslow', 'Carl Jung'],
      ['Being "in the zone"', 'Being distracted', 'Being bored'],
      ['Complete absorption in an activity', 'Multitasking', 'Daydreaming'],
      ['A balance between challenge and skill', 'High intelligence', 'A lot of free time'],
      ['It seems to pass very quickly or stand still', 'It feels very slow', 'It feels normal'],
      ['It decreases or disappears', 'It increases', 'It stays the same'],
      ['Yes, if the conditions are met', 'No, only in sports', 'No, only in art'],
      ['The challenge must match the individual\'s skill level', 'The challenge must be much higher', 'The skill must be much higher'],
      ['It leads to deep satisfaction and happiness', 'It makes you rich', 'It makes you tired'],
      ['An activity that is rewarding in itself', 'An activity done for money', 'A very difficult activity']
    ][i],
    correctAnswer: [
      'Mihaly Csikszentmihalyi', 'Being "in the zone"', 'Complete absorption in an activity',
      'A balance between challenge and skill', 'It seems to pass very quickly or stand still',
      'It decreases or disappears', 'Yes, if the conditions are met',
      'The challenge must match the individual\'s skill level', 'It leads to deep satisfaction and happiness',
      'An activity that is rewarding in itself'
    ][i],
    points: 1
  }))
};

const s7 = {
  id: genId(LEVEL, UNIT_ID, 's7', 0),
  type: 'listening',
  title: 'Listening: Lecture on Social Influence',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's7', i + 1),
    type: 'multiple-choice',
    question: [
      'What is "conformity"?',
      'What was the main finding of the Asch conformity experiments?',
      'What is "obedience to authority"?',
      'What did the Milgram experiment demonstrate?',
      'What is "bystander effect"?',
      'Why do people sometimes fail to help in a crowd?',
      'What is "social facilitation"?',
      'How does the presence of others affect performance on simple tasks?',
      'What is "groupthink"?',
      'How can groupthink be avoided?'
    ][i],
    options: [
      ['Changing behavior to match a group', 'Leading a group', 'Leaving a group'],
      ['People often conform to a group even when they know the group is wrong', 'People never conform', 'Everyone has their own opinion'],
      ['Following orders from someone in a position of power', 'Arguing with a boss', 'Being a leader'],
      ['Many people will obey authority even if it involves harming others', 'People are naturally kind', 'Authority has no power'],
      ['People are less likely to help if others are present', 'People always help in groups', 'A type of medical condition'],
      ['Diffusion of responsibility', 'They are mean', 'They are busy'],
      ['Improved performance on tasks when others are present', 'Being shy in public', 'Working alone'],
      ['It tends to improve performance', 'It impairs performance', 'No effect'],
      ['Desire for harmony in a group results in irrational decision-making', 'Brainstorming new ideas', 'Thinking alone'],
      ['By encouraging critical evaluation and diverse opinions', 'By having a strong leader', 'By making decisions faster']
    ][i],
    correctAnswer: [
      'Changing behavior to match a group', 'People often conform to a group even when they know the group is wrong',
      'Following orders from someone in a position of power',
      'Many people will obey authority even if it involves harming others',
      'People are less likely to help if others are present', 'Diffusion of responsibility',
      'Improved performance on tasks when others are present', 'It tends to improve performance',
      'Desire for harmony in a group results in irrational decision-making',
      'By encouraging critical evaluation and diverse opinions'
    ][i],
    points: 1
  }))
};

const s8 = {
  id: genId(LEVEL, UNIT_ID, 's8', 0),
  type: 'listening',
  title: 'Listening: Discussion on Cultural Dimensions',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's8', i + 1),
    type: 'multiple-choice',
    question: [
      'Who developed the Cultural Dimensions Theory?',
      'What is "Power Distance"?',
      'What is "Individualism vs. Collectivism"?',
      'What does "Uncertainty Avoidance" measure?',
      'What is "Masculinity vs. Femininity" in this context?',
      'What is "Long-term vs. Short-term Orientation"?',
      'What is "Indulgence vs. Restraint"?',
      'How do these dimensions help in international business?',
      'Is culture static or can it change?',
      'What is a common criticism of this theory?'
    ][i],
    options: [
      ['Geert Hofstede', 'Edward Hall', 'Claude Lévi-Strauss'],
      ['The extent to which less powerful members accept unequal distribution of power', 'The distance between two cities', 'A type of battery'],
      ['Emphasis on individual goals vs. group goals', 'Being alone vs. being with friends', 'A type of political system'],
      ['A society\'s tolerance for ambiguity', 'How much people travel', 'Fear of the dark'],
      ['Societal preference for achievement/heroism vs. cooperation/modesty', 'Biological gender', 'A type of fashion'],
      ['Focus on future rewards vs. present gratification', 'How long a person lives', 'A type of clock'],
      ['Allowing gratification of basic human drives vs. strict social norms', 'Eating a lot vs. dieting', 'A type of exercise'],
      ['By providing a framework for understanding cultural differences', 'By telling people how to act', 'It doesn\'t help'],
      ['It can change over time through various influences', 'It never changes', 'It changes every day'],
      ['It may lead to overgeneralization or stereotyping', 'It is too simple', 'It is only about IBM']
    ][i],
    correctAnswer: [
      'Geert Hofstede', 'The extent to which less powerful members accept unequal distribution of power',
      'Emphasis on individual goals vs. group goals', 'A society\'s tolerance for ambiguity',
      'Societal preference for achievement/heroism vs. cooperation/modesty',
      'Focus on future rewards vs. present gratification',
      'Allowing gratification of basic human drives vs. strict social norms',
      'By providing a framework for understanding cultural differences',
      'It can change over time through various influences', 'It may lead to overgeneralization or stereotyping'
    ][i],
    points: 1
  }))
};

const s9 = {
  id: genId(LEVEL, UNIT_ID, 's9', 0),
  type: 'vocabulary',
  title: 'Adjectives for Human Behavior',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's9', i + 1),
    type: 'multiple-choice',
    question: [
      'What does "altruistic" mean?',
      'The word "introverted" refers to:',
      'What is "impulsive" behavior?',
      'The term "conscientious" means:',
      'What does "ambiguous" mean?',
      'The word "resilient" refers to:',
      'What is "cynical" behavior?',
      'The term "empathetic" means:',
      'What does "stoic" mean?',
      'The word "eccentric" refers to:'
    ][i],
    options: [
      ['Showing selfless concern for the well-being of others', 'Being selfish', 'Being very tall'],
      ['Quiet and reserved person', 'Outgoing and loud person', 'A type of animal'],
      ['Acting without thinking about the consequences', 'Planning everything carefully', 'Being very slow'],
      ['Wishing to do one\'s work or duty well and thoroughly', 'Being lazy', 'Being very funny'],
      ['Open to more than one interpretation; unclear', 'Very clear', 'Very large'],
      ['Able to withstand or recover quickly from difficult conditions', 'Fragile', 'Very rich'],
      ['Believing that people are motivated by self-interest', 'Very happy', 'Trusting everyone'],
      ['Showing an ability to understand and share the feelings of others', 'Being cold', 'Being indifferent'],
      ['Enduring pain or hardship without showing feelings', 'Complaining a lot', 'Being very weak'],
      ['Unconventional and slightly strange', 'Very normal', 'Boring']
    ][i],
    correctAnswer: [
      'Showing selfless concern for the well-being of others', 'Quiet and reserved person',
      'Acting without thinking about the consequences', 'Wishing to do one\'s work or duty well and thoroughly',
      'Open to more than one interpretation; unclear', 'Able to withstand or recover quickly from difficult conditions',
      'Believing that people are motivated by self-interest',
      'Showing an ability to understand and share the feelings of others',
      'Enduring pain or hardship without showing feelings', 'Unconventional and slightly strange'
    ][i],
    points: 1
  }))
};

const s10 = {
  id: genId(LEVEL, UNIT_ID, 's10', 0),
  type: 'vocabulary',
  title: 'Social Issues Vocabulary',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's10', i + 1),
    type: 'multiple-choice',
    question: [
      'What is "inequality"?',
      'The term "poverty" refers to:',
      'What is "discrimination"?',
      'The word "marginalized" refers to:',
      'What is "activism"?',
      'The term "human rights" means:',
      'What is "sustainability"?',
      'The word "conflict" refers to:',
      'What is "refugee"?',
      'The term "integration" means:'
    ][i],
    options: [
      ['Difference in size, degree, or circumstances', 'Equality for everyone', 'A type of math'],
      ['State of being extremely poor', 'Having a lot of money', 'A type of city'],
      ['Unjust treatment of different categories of people', 'Treating everyone the same', 'A type of game'],
      ['Treated as insignificant or peripheral', 'Being at the center of attention', 'Being very rich'],
      ['Action of using vigorous campaigning to bring about change', 'Doing nothing', 'Sleeping a lot'],
      ['Basic rights and freedoms that belong to every person', 'Rights only for some people', 'A type of book'],
      ['Ability to be maintained at a certain rate or level', 'Using all resources at once', 'Something that ends quickly'],
      ['A serious disagreement or argument', 'A type of party', 'Agreeing with everyone'],
      ['A person who has been forced to leave their country', 'A tourist', 'A person who moves for a job'],
      ['Action or process of integrating (combining)', 'Separating things', 'Deleting things']
    ][i],
    correctAnswer: [
      'Difference in size, degree, or circumstances', 'State of being extremely poor',
      'Unjust treatment of different categories of people', 'Treated as insignificant or peripheral',
      'Action of using vigorous campaigning to bring about change',
      'Basic rights and freedoms that belong to every person', 'Ability to be maintained at a certain rate or level',
      'A serious disagreement or argument', 'A person who has been forced to leave their country',
      'Action or process of integrating (combining)'
    ][i],
    points: 1
  }))
};

export const B1_WEEK_24 = createShardedToeflUnit(
  'toefl-b1-w24',
  'Week 24: Psychology & Sociology',
  'Understand human behavior, social structures, and the forces that shape our societies.',
  ['Master psychology and sociology terminology', 'Use relative clauses and participle clauses effectively', 'Analyze social experiments and cultural dimensions'],
  [s1, s2, s3, s4, s5, s6, s7, s8, s9, s10]
);
