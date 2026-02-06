import { createShardedToeflUnit, genId } from '../utils';

const UNIT_ID = 22;
const LEVEL = 'b1';

// SHARDS 1-2: Sports & Health Vocabulary
const s1 = {
  id: genId(LEVEL, UNIT_ID, 's1', 0),
  type: 'vocabulary',
  title: 'Types of Sports & Competition',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's1', i + 1),
    type: 'multiple-choice',
    question: [
      'What is an "individual sport"?',
      'The word "tournament" refers to:',
      'What is a "referee"?',
      'The term "championship" means:',
      'What is an "opponent"?',
      'The word "league" refers to:',
      'What is "endurance"?',
      'The term "athletics" usually refers to:',
      'What is a "venue"?',
      'The word "amateur" means:'
    ][i],
    options: [
      ['A sport played by one person', 'A sport with a large team', 'A sport played only in water'],
      ['A series of contests between a number of competitors', 'A type of food', 'A long vacation'],
      ['An official who watches a game to ensure rules are followed', 'A type of player', 'A person who sells tickets'],
      ['A competition to decide the winner of a title', 'A type of boat', 'A large building'],
      ['Someone who competes against you', 'A teammate', 'A coach'],
      ['A collection of teams or players who compete against each other', 'A type of plant', 'A secret group'],
      ['The ability to keep going through a difficult activity', 'Being very fast', 'Having a lot of money'],
      ['Track and field events', 'Reading books', 'Playing video games'],
      ['The place where an event happens', 'A type of clothing', 'A musical instrument'],
      ['Someone who does an activity for pleasure, not for money', 'A professional player', 'A type of engine']
    ][i],
    correctAnswer: [
      'A sport played by one person', 'A series of contests between a number of competitors',
      'An official who watches a game to ensure rules are followed', 'A competition to decide the winner of a title',
      'Someone who competes against you', 'A collection of teams or players who compete against each other',
      'The ability to keep going through a difficult activity', 'Track and field events',
      'The place where an event happens', 'Someone who does an activity for pleasure, not for money'
    ][i],
    points: 1
  }))
};

const s2 = {
  id: genId(LEVEL, UNIT_ID, 's2', 0),
  type: 'vocabulary',
  title: 'Health, Nutrition & Exercise',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's2', i + 1),
    type: 'multiple-choice',
    question: [
      'What is "metabolism"?',
      'The word "nutrient" refers to:',
      'What is "dehydration"?',
      'The term "aerobic" exercise means:',
      'What is "caloric intake"?',
      'The word "wellness" refers to:',
      'What is a "supplement"?',
      'The term "sedentary" lifestyle means:',
      'What is "immunity"?',
      'The word "obesity" refers to:'
    ][i],
    options: [
      ['The chemical processes that occur within a living organism to maintain life', 'A type of muscle', 'A fast car'],
      ['Substance that provides nourishment essential for life', 'A type of rock', 'A loud noise'],
      ['Harmful reduction in the amount of water in the body', 'A type of cloud', 'Being very cold'],
      ['Exercise that improves the efficiency of the body\'s cardiovascular system', 'Lifting heavy weights', 'Sleeping'],
      ['Number of calories a person consumes', 'A type of food', 'How much you weight'],
      ['State of being in good health, especially as an actively pursued goal', 'A type of medicine', 'A high building'],
      ['Something added to a diet to provide additional nutrients', 'A new law', 'A type of clothing'],
      ['Spending a lot of time seated or somewhat inactive', 'Running every day', 'Eating only vegetables'],
      ['The ability of an organism to resist a particular infection', 'Being very strong', 'A type of vaccine'],
      ['The state of being grossly fat or overweight', 'Being very tall', 'Having a lot of muscle']
    ][i],
    correctAnswer: [
      'The chemical processes that occur within a living organism to maintain life', 'Substance that provides nourishment essential for life',
      'Harmful reduction in the amount of water in the body', 'Exercise that improves the efficiency of the body\'s cardiovascular system',
      'Number of calories a person consumes', 'State of being in good health, especially as an actively pursued goal',
      'Something added to a diet to provide additional nutrients', 'Spending a lot of time seated or somewhat inactive',
      'The ability of an organism to resist a particular infection', 'The state of being grossly fat or overweight'
    ][i],
    points: 1
  }))
};

const s3 = {
  id: genId(LEVEL, UNIT_ID, 's3', 0),
  type: 'grammar',
  title: 'Gerunds vs Infinitives',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's3', i + 1),
    type: 'multiple-choice',
    question: [
      'I enjoy ____ in the park every morning.',
      'He promised ____ me with my training.',
      'They suggested ____ a new diet.',
      'She forgot ____ her water bottle.',
      'I look forward to ____ the race.',
      'He is interested in ____ about sports psychology.',
      'Avoid ____ late at night.',
      'It is important ____ healthy food.',
      'They decided ____ the tournament.',
      'I remember ____ my first gold medal.'
    ][i],
    options: [
      ['running', 'to run', 'run'],
      ['to help', 'helping', 'help'],
      ['starting', 'to start', 'start'],
      ['to bring', 'bringing', 'bring'],
      ['joining', 'to join', 'join'],
      ['learning', 'to learn', 'learn'],
      ['eating', 'to eat', 'eat'],
      ['to eat', 'eating', 'eat'],
      ['to cancel', 'canceling', 'cancel'],
      ['winning', 'to win', 'win']
    ][i],
    correctAnswer: [
      'running', 'to help', 'starting', 'to bring', 'joining', 'learning', 'eating', 'to eat', 'to cancel', 'winning'
    ][i],
    points: 1
  }))
};

const s4 = {
  id: genId(LEVEL, UNIT_ID, 's4', 0),
  type: 'grammar',
  title: 'Relative Clauses',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's4', i + 1),
    type: 'multiple-choice',
    question: [
      'The athlete ____ won the race is from Kenya.',
      'The gym ____ I train is very modern.',
      'The trophy, ____ was made of silver, was very heavy.',
      'The player ____ father is a coach is very talented.',
      'The day ____ the marathon takes place is always busy.',
      'The diet ____ I am following is very strict.',
      'People ____ exercise regularly are usually healthier.',
      'The reason ____ he quit the team is unknown.',
      'The swimming pool, ____ is 50 meters long, is outdoors.',
      'The coach ____ I spoke to was very helpful.'
    ][i],
    options: [
      ['who', 'which', 'where'],
      ['where', 'which', 'who'],
      ['which', 'who', 'where'],
      ['whose', 'who', 'whom'],
      ['when', 'where', 'which'],
      ['that', 'who', 'where'],
      ['who', 'which', 'whose'],
      ['why', 'when', 'where'],
      ['which', 'where', 'that'],
      ['whom', 'whose', 'where']
    ][i],
    correctAnswer: [
      'who', 'where', 'which', 'whose', 'when', 'that', 'who', 'why', 'which', 'whom'
    ][i],
    points: 1
  }))
};

const s5 = {
  id: genId(LEVEL, UNIT_ID, 's5', 0),
  type: 'reading',
  title: 'Reading: The History of the Olympic Games',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's5', i + 1),
    type: 'multiple-choice',
    question: [
      'Where did the original Olympic Games begin?',
      'Who were the games dedicated to?',
      'How often were the ancient games held?',
      'What was the only event in the first Olympics?',
      'When were the games abolished in ancient times?',
      'Who revived the modern Olympic Games?',
      'In which city were the first modern Olympics held?',
      'What do the five rings of the Olympic flag represent?',
      'What is the Olympic motto?',
      'How has the Olympics changed over time?'
    ][i],
    options: [
      ['Olympia, Greece', 'Rome, Italy', 'Athens, Greece'],
      ['Zeus', 'Apollo', 'Hercules'],
      ['Every four years', 'Every year', 'Every two years'],
      ['A short footrace', 'Swimming', 'Wrestling'],
      ['393 AD', '100 BC', '500 AD'],
      ['Pierre de Coubertin', 'Spyros Louis', 'Thomas Bach'],
      ['Athens', 'Paris', 'London'],
      ['The five continents of the world', 'The five original sports', 'The five Greek gods'],
      ['Citius, Altius, Fortius', 'Faster, Better, Stronger', 'Peace, Love, Sport'],
      ['It now includes many more sports and participants', 'It has stayed the same', 'It is only for men']
    ][i],
    correctAnswer: [
      'Olympia, Greece', 'Zeus', 'Every four years', 'A short footrace', '393 AD',
      'Pierre de Coubertin', 'Athens', 'The five continents of the world',
      'Citius, Altius, Fortius', 'It now includes many more sports and participants'
    ][i],
    points: 1
  }))
};

const s6 = {
  id: genId(LEVEL, UNIT_ID, 's6', 0),
  type: 'reading',
  title: 'Reading: Benefits of a Balanced Diet',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's6', i + 1),
    type: 'multiple-choice',
    question: [
      'What is a "balanced diet"?',
      'Why are carbohydrates important?',
      'What is the primary function of protein?',
      'What role do vitamins and minerals play?',
      'Why is fiber important for the body?',
      'What are "healthy fats"?',
      'How does sugar affect the body if consumed in excess?',
      'Why is hydration essential for health?',
      'What is the "Food Pyramid"?',
      'How does diet impact mental health?'
    ][i],
    options: [
      ['Eating the right amount of various food groups', 'Eating only vegetables', 'Eating as much as you want'],
      ['They provide the body with energy', 'They help build muscle', 'They protect the skin'],
      ['Repairing and building body tissues', 'Providing energy', 'Helping you sleep'],
      ['Supporting various biological functions and growth', 'Providing calories', 'Giving flavor to food'],
      ['It helps with digestion', 'It makes you taller', 'It gives you energy'],
      ['Fats that are good for heart health (e.g., from avocados)', 'Fats found in fried food', 'There are no healthy fats'],
      ['It can lead to weight gain and health issues', 'It makes you stronger', 'It has no effect'],
      ['It regulates body temperature and moves nutrients', 'It makes you run faster', 'It is not essential'],
      ['A guide for healthy eating', 'A real building in Egypt', 'A type of diet'],
      ['Good nutrition can improve mood and brain function', 'It has no impact', 'It only affects the body']
    ][i],
    correctAnswer: [
      'Eating the right amount of various food groups', 'They provide the body with energy',
      'Repairing and building body tissues', 'Supporting various biological functions and growth',
      'It helps with digestion', 'Fats that are good for heart health (e.g., from avocados)',
      'It can lead to weight gain and health issues', 'It regulates body temperature and moves nutrients',
      'A guide for healthy eating', 'Good nutrition can improve mood and brain function'
    ][i],
    points: 1
  }))
};

const s7 = {
  id: genId(LEVEL, UNIT_ID, 's7', 0),
  type: 'listening',
  title: 'Listening: Lecture on Sports Psychology',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's7', i + 1),
    type: 'multiple-choice',
    question: [
      'What is sports psychology?',
      'What is "mental toughness"?',
      'How does visualization help athletes?',
      'What is "choking" in sports?',
      'How do athletes handle pressure?',
      'What is the "flow state"?',
      'Why is goal setting important?',
      'How does self-talk affect performance?',
      'What is the role of a sports psychologist?',
      'How do teams build "chemistry"?'
    ][i],
    options: [
      ['Study of how psychological factors affect performance', 'The study of sports rules', 'Teaching athletes to read'],
      ['Ability to remain focused and determined under pressure', 'Having a hard head', 'Being very strong'],
      ['By mentally practicing their performance', 'By watching movies', 'By sleeping'],
      ['Failure to perform well due to intense pressure', 'Stopping to eat during a game', 'A type of penalty'],
      ['Using breathing techniques and focus', 'By quitting', 'By ignoring it'],
      ['A state of complete focus and immersion in an activity', 'A type of river', 'Moving very fast'],
      ['It provides direction and motivation', 'It is not important', 'To show off to others'],
      ['Positive self-talk can improve confidence and results', 'It has no effect', 'It makes you look crazy'],
      ['To help athletes improve their mental game', 'To be the coach', 'To sell equipment'],
      ['Through shared goals and good communication', 'By wearing the same clothes', 'By being lucky']
    ][i],
    correctAnswer: [
      'Study of how psychological factors affect performance', 'Ability to remain focused and determined under pressure',
      'By mentally practicing their performance', 'Failure to perform well due to intense pressure',
      'Using breathing techniques and focus', 'A state of complete focus and immersion in an activity',
      'It provides direction and motivation', 'Positive self-talk can improve confidence and results',
      'To help athletes improve their mental game', 'Through shared goals and good communication'
    ][i],
    points: 1
  }))
};

const s8 = {
  id: genId(LEVEL, UNIT_ID, 's8', 0),
  type: 'listening',
  title: 'Listening: Interview with a Nutritionist',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's8', i + 1),
    type: 'multiple-choice',
    question: [
      'What is her advice for a healthy breakfast?',
      'What are "superfoods"?',
      'How much water should an average person drink?',
      'Why is "portion control" important?',
      'What is "mindful eating"?',
      'How do processed foods affect health?',
      'What is a common myth about dieting?',
      'Should we avoid all fats?',
      'What is the benefit of "meal prepping"?',
      'How does sleep relate to nutrition?'
    ][i],
    options: [
      ['Include protein, healthy fats, and complex carbs', 'Only coffee', 'Sugary cereal'],
      ['Foods that are very rich in nutrients', 'Foods that give you superpowers', 'Large vegetables'],
      ['Around 2-3 liters a day', 'Only when you are thirsty', 'One glass a day'],
      ['To avoid overeating and manage weight', 'To save money', 'To make the plate look nice'],
      ['Paying full attention to the experience of eating', 'Reading while eating', 'Eating as fast as possible'],
      ['They often contain high levels of salt, sugar, and fat', 'They are very healthy', 'They have no effect'],
      ['That you must starve yourself to lose weight', 'That eating fruit is good', 'That water is important'],
      ['No, we need healthy fats for brain and cell function', 'Yes, all fats are bad', 'Only for athletes'],
      ['It helps you make healthier choices and saves time', 'It is a waste of time', 'It makes food taste bad'],
      ['Poor sleep can lead to increased hunger and cravings', 'They are not related', 'Sleep replaces food']
    ][i],
    correctAnswer: [
      'Include protein, healthy fats, and complex carbs', 'Foods that are very rich in nutrients',
      'Around 2-3 liters a day', 'To avoid overeating and manage weight',
      'Paying full attention to the experience of eating', 'They often contain high levels of salt, sugar, and fat',
      'That you must starve yourself to lose weight', 'No, we need healthy fats for brain and cell function',
      'It helps you make healthier choices and saves time', 'Poor sleep can lead to increased hunger and cravings'
    ][i],
    points: 1
  }))
};

const s9 = {
  id: genId(LEVEL, UNIT_ID, 's9', 0),
  type: 'vocabulary',
  title: 'Common Ailments & Medical Terms',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's9', i + 1),
    type: 'multiple-choice',
    question: [
      'What is a "fracture"?',
      'The word "diagnosis" means:',
      'What is a "prescription"?',
      'The term "chronic" means:',
      'What is "inflammation"?',
      'The word "symptom" refers to:',
      'What is "fatigue"?',
      'The term "contagious" means:',
      'What is "nausea"?',
      'The word "recovery" refers to:'
    ][i],
    options: [
      ['A crack or break in a bone', 'A type of skin rash', 'A headache'],
      ['Identification of the nature of an illness', 'A type of medicine', 'The end of a treatment'],
      ['An instruction written by a medical practitioner', 'A type of exercise', 'A medical bill'],
      ['Persisting for a long time or constantly recurring', 'Very fast', 'Not important'],
      ['Redness, swelling, and pain in part of the body', 'Being very cold', 'A type of cut'],
      ['A physical or mental feature indicating a condition', 'A type of doctor', 'A hospital bed'],
      ['Extreme tiredness', 'A type of food', 'Feeling very happy'],
      ['Spread from one person or organism to another', 'Not dangerous', 'A type of medicine'],
      ['A feeling of sickness with an inclination to vomit', 'A headache', 'A sore throat'],
      ['The process of returning to a normal state of health', 'Getting sick again', 'Buying medicine']
    ][i],
    correctAnswer: [
      'A crack or break in a bone', 'Identification of the nature of an illness',
      'An instruction written by a medical practitioner', 'Persisting for a long time or constantly recurring',
      'Redness, swelling, and pain in part of the body', 'A physical or mental feature indicating a condition',
      'Extreme tiredness', 'Spread from one person or organism to another',
      'A feeling of sickness with an inclination to vomit', 'The process of returning to a normal state of health'
    ][i],
    points: 1
  }))
};

const s10 = {
  id: genId(LEVEL, UNIT_ID, 's10', 0),
  type: 'vocabulary',
  title: 'Sports Idioms & Phrasal Verbs',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's10', i + 1),
    type: 'multiple-choice',
    question: [
      'What does "the ball is in your court" mean?',
      'The idiom "level playing field" means:',
      'What does it mean to "throw in the towel"?',
      'The phrase "on the home stretch" means:',
      'What does "warm up" mean?',
      'The phrasal verb "work out" means:',
      'What does "give up" mean?',
      'The idiom "get the ball rolling" means:',
      'What does "keep your eye on the ball" mean?',
      'The phrase "a long shot" refers to:'
    ][i],
    options: [
      ['It is your responsibility to take the next step', 'You lost the game', 'The ball is actually in a court'],
      ['A situation where everyone has the same opportunities', 'A flat sports field', 'A type of game'],
      ['To give up or admit defeat', 'To clean the floor', 'To start a fight'],
      ['The final part of a task or activity', 'Going back home', 'A long race'],
      ['Prepare for physical exertion', 'To get hot', 'To cook food'],
      ['To exercise', 'To solve a math problem', 'To stop working'],
      ['To stop trying', 'To give a gift', 'To go up'],
      ['To start something', 'To kick a ball', 'To play a game'],
      ['To stay focused', 'To look at a ball', 'To be careful'],
      ['Something that has a very small chance of succeeding', 'A long distance in golf', 'A type of movie']
    ][i],
    correctAnswer: [
      'It is your responsibility to take the next step', 'A situation where everyone has the same opportunities',
      'To give up or admit defeat', 'The final part of a task or activity',
      'Prepare for physical exertion', 'To exercise', 'To stop trying',
      'To start something', 'To stay focused', 'Something that has a very small chance of succeeding'
    ][i],
    points: 1
  }))
};

export const B1_WEEK_22 = createShardedToeflUnit(
  'toefl-b1-w22',
  'Week 22: Sports & Healthy Living',
  'Explore the importance of physical activity, nutrition, and mental health in achieving wellness.',
  ['Understand sports and health terminology', 'Use gerunds, infinitives, and relative clauses correctly', 'Identify benefits of a balanced lifestyle and handle medical terms'],
  [s1, s2, s3, s4, s5, s6, s7, s8, s9, s10]
);
