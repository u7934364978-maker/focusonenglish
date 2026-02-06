import { createShardedToeflUnit, genId } from '../utils';

const UNIT_ID = 20;
const LEVEL = 'b1';

// SHARDS 1-2: Media & Communication Vocabulary
const s1 = {
  id: genId(LEVEL, UNIT_ID, 's1', 0),
  type: 'vocabulary',
  title: 'Types of Media & Journalism',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's1', i + 1),
    type: 'multiple-choice',
    question: [
      'What is a "correspondent"?',
      'The word "broadcasting" refers to:',
      'What is "sensationalism"?',
      'A "columnist" is someone who:',
      'The term "circulation" in newspapers means:',
      'What is "editorial" content?',
      'The word "tabloid" often refers to:',
      'What is a "press release"?',
      'The term "syndication" means:',
      'What is "investigative journalism"?'
    ][i],
    options: [
      ['A reporter who sends news from a distant place', 'Someone who fixes radios', 'A person who reads comics'],
      ['Distributing content via radio or TV', 'Selling books in a store', 'Printing flyers'],
      ['Presenting news in a way that provokes strong excitement', 'Being very quiet', 'Scientific reporting'],
      ['Writes a regular series of articles', 'Builds columns in buildings', 'Sells newspapers on the street'],
      ['The number of copies distributed', 'Moving in a circle', 'Blood flow in the body'],
      ['Articles expressing the editor\'s opinion', 'Advertisements', 'The sports section'],
      ['Small-sized newspaper with sensational stories', 'A large encyclopedia', 'A type of tablet'],
      ['An official statement issued to media', 'A book of poems', 'A private letter'],
      ['Publishing content in multiple media outlets', 'Writing a book alone', 'Buying a radio station'],
      ['Deep research into a single topic to uncover truth', 'Reading the weather report', 'Writing about celebrities']
    ][i],
    correctAnswer: [
      'A reporter who sends news from a distant place', 'Distributing content via radio or TV',
      'Presenting news in a way that provokes strong excitement', 'Writes a regular series of articles',
      'The number of copies distributed', 'Articles expressing the editor\'s opinion',
      'Small-sized newspaper with sensational stories', 'An official statement issued to media',
      'Publishing content in multiple media outlets', 'Deep research into a single topic to uncover truth'
    ][i],
    points: 1
  }))
};

const s2 = {
  id: genId(LEVEL, UNIT_ID, 's2', 0),
  type: 'vocabulary',
  title: 'Digital Communication & Social Media',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's2', i + 1),
    type: 'multiple-choice',
    question: [
      'What does "viral" mean in social media?',
      'The word "engagement" refers to:',
      'What is an "algorithm"?',
      'A "vlog" is:',
      'The term "influencer" refers to:',
      'What is "clickbait"?',
      'The word "streaming" means:',
      'What is "cyberbullying"?',
      'The term "subscription" refers to:',
      'What is a "hashtag" used for?'
    ][i],
    options: [
      ['Content that spreads rapidly across the internet', 'A computer virus', 'Something that makes you sick'],
      ['Interactions such as likes, comments, and shares', 'Getting married', 'Working very hard'],
      ['Rules followed by a computer to rank content', 'A type of rhythm', 'A musical instrument'],
      ['A blog in video format', 'A type of frog', 'A very fast car'],
      ['Someone with a large following who can affect opinions', 'A person with the flu', 'A weather pattern'],
      ['Content designed to encourage users to click a link', 'Fishing equipment', 'A computer mouse'],
      ['Playing video or audio content in real time', 'Swimming in a river', 'Drinking a lot of water'],
      ['Using electronic communication to bully someone', 'Playing video games', 'Learning about computers'],
      ['Agreement to receive a service or content regularly', 'Giving a gift', 'A signature on a letter'],
      ['To categorize content and make it searchable', 'To count numbers', 'To hide information']
    ][i],
    correctAnswer: [
      'Content that spreads rapidly across the internet', 'Interactions such as likes, comments, and shares',
      'Rules followed by a computer to rank content', 'A blog in video format',
      'Someone with a large following who can affect opinions', 'Content designed to encourage users to click a link',
      'Playing video or audio content in real time', 'Using electronic communication to bully someone',
      'Agreement to receive a service or content regularly', 'To categorize content and make it searchable'
    ][i],
    points: 1
  }))
};

const s3 = {
  id: genId(LEVEL, UNIT_ID, 's3', 0),
  type: 'grammar',
  title: 'Reporting Verbs & Indirect Speech',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's3', i + 1),
    type: 'multiple-choice',
    question: [
      'The journalist ____ that the story was true.',
      'He asked me where ____ the camera.',
      'The witness ____ that she had seen the accident.',
      'The editor ____ the reporter to check the facts.',
      'She ____ to tell me the source of the information.',
      'The official ____ that any laws had been broken.',
      'They ____ that the new law would pass easily.',
      'The host ____ the audience to the show.',
      'He ____ why the interview had been canceled.',
      'The spokesperson ____ that the company was growing.'
    ][i],
    options: [
      ['claimed', 'claimed that', 'claiming'],
      ['I had put', 'had I put', 'I putted'],
      ['stated', 'said', 'told'],
      ['reminded', 'suggested', 'declared'],
      ['refused', 'denied', 'avoided'],
      ['denied', 'refused', 'stated'],
      ['predicted', 'asked', 'wondered'],
      ['welcomed', 'greeted', 'said'],
      ['wondered', 'stated', 'claimed'],
      ['announced', 'asked', 'wondered']
    ][i],
    correctAnswer: [
      'claimed', 'I had put', 'stated', 'reminded', 'refused', 'denied', 'predicted', 'welcomed', 'wondered', 'announced'
    ][i],
    points: 1
  }))
};

const s4 = {
  id: genId(LEVEL, UNIT_ID, 's4', 0),
  type: 'grammar',
  title: 'Passive Voice in News',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's4', i + 1),
    type: 'multiple-choice',
    question: [
      'It ____ that the economy is improving.',
      'The new policy ____ by the government yesterday.',
      'The award ____ to the best journalist of the year.',
      'Thousands of copies ____ every day.',
      'The documentary ____ in over fifty countries.',
      'Mistakes ____ in the original report.',
      'The suspicious activity ____ by a local resident.',
      'It is ____ that the storm will arrive tonight.',
      'The suspects ____ by the police earlier this morning.',
      'The story ____ on the front page.'
    ][i],
    options: [
      ['is reported', 'reports', 'is reporting'],
      ['was announced', 'announced', 'is announced'],
      ['was given', 'gave', 'is giving'],
      ['are sold', 'sell', 'are selling'],
      ['has been shown', 'has shown', 'was showing'],
      ['were made', 'made', 'was made'],
      ['was noticed', 'noticed', 'is noticing'],
      ['believed', 'believing', 'believes'],
      ['were caught', 'caught', 'are catching'],
      ['was featured', 'featured', 'is featuring']
    ][i],
    correctAnswer: [
      'is reported', 'was announced', 'was given', 'are sold', 'has been shown',
      'were made', 'was noticed', 'believed', 'were caught', 'was featured'
    ][i],
    points: 1
  }))
};

const s5 = {
  id: genId(LEVEL, UNIT_ID, 's5', 0),
  type: 'reading',
  title: 'Reading: The Evolution of the Printing Press',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's5', i + 1),
    type: 'multiple-choice',
    question: [
      'Who invented the movable type printing press?',
      'In which century was the printing press invented?',
      'What was the first major book printed using this technology?',
      'How did the printing press affect literacy?',
      'What material was used for the movable type?',
      'Before the printing press, how were books made?',
      'Why was the printing press considered a revolution?',
      'How did the printing press impact the Reformation?',
      'What was the "Gutenberg Bible"?',
      'What did the printing press eventually lead to?'
    ][i],
    options: [
      ['Johannes Gutenberg', 'Leonardo da Vinci', 'Isaac Newton'],
      ['15th Century', '12th Century', '18th Century'],
      ['The Bible', 'The Odyssey', 'A cookbook'],
      ['It significantly increased literacy rates', 'It made people stop reading', 'It had no effect'],
      ['Metal', 'Wood', 'Plastic'],
      ['Hand-copied by monks', 'Printed by machines', 'They didn\'t exist'],
      ['It allowed for the rapid spread of information', 'It was a very loud machine', 'It was very expensive'],
      ['It helped spread Martin Luther\'s ideas', 'It stopped all religious debate', 'It was banned by everyone'],
      ['The first major book printed with movable type', 'A secret code book', 'A collection of songs'],
      ['The mass production of newspapers and magazines', 'The end of writing', 'The invention of the telephone']
    ][i],
    correctAnswer: [
      'Johannes Gutenberg', '15th Century', 'The Bible', 'It significantly increased literacy rates',
      'Metal', 'Hand-copied by monks', 'It allowed for the rapid spread of information',
      'It helped spread Martin Luther\'s ideas', 'The first major book printed with movable type',
      'The mass production of newspapers and magazines'
    ][i],
    points: 1
  }))
};

const s6 = {
  id: genId(LEVEL, UNIT_ID, 's6', 0),
  type: 'reading',
  title: 'Reading: The Impact of the Internet on News',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's6', i + 1),
    type: 'multiple-choice',
    question: [
      'How has the "24-hour news cycle" changed journalism?',
      'What is "citizen journalism"?',
      'One negative impact of internet news is:',
      'What are "echo chambers" in social media?',
      'How do news organizations make money online?',
      'What is "fake news"?',
      'How has the internet affected traditional newspapers?',
      'What is the benefit of real-time news updates?',
      'What is "data journalism"?',
      'How can readers verify online news?'
    ][i],
    options: [
      ['It increased the speed and volume of news', 'It made news more boring', 'It reduced the number of reporters'],
      ['News reported by ordinary people using digital tools', 'Journalism for animals', 'News about city government only'],
      ['The spread of misinformation', 'Faster communication', 'More beautiful photos'],
      ['Environments where people only see opinions that match their own', 'Rooms with good acoustics', 'A type of video game'],
      ['Through ads and subscriptions', 'They don\'t make any money', 'By selling books'],
      ['False information presented as news', 'News about jokes', 'Old news'],
      ['Many have seen a decline in print circulation', 'It has made them more popular than ever', 'It hasn\'t affected them'],
      ['People are informed immediately during crises', 'It makes the phone battery die', 'It makes news more expensive'],
      ['Using statistics and data to tell a story', 'Writing about computers', 'Collecting emails'],
      ['Checking multiple reliable sources', 'Believing everything they see', 'Asking a friend']
    ][i],
    correctAnswer: [
      'It increased the speed and volume of news', 'News reported by ordinary people using digital tools',
      'The spread of misinformation', 'Environments where people only see opinions that match their own',
      'Through ads and subscriptions', 'False information presented as news',
      'Many have seen a decline in print circulation', 'People are informed immediately during crises',
      'Using statistics and data to tell a story', 'Checking multiple reliable sources'
    ][i],
    points: 1
  }))
};

const s7 = {
  id: genId(LEVEL, UNIT_ID, 's7', 0),
  type: 'listening',
  title: 'Listening: Podcast on Photojournalism',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's7', i + 1),
    type: 'multiple-choice',
    question: [
      'What is the goal of a photojournalist?',
      'What does he mean by "the decisive moment"?',
      'Why is ethics important in photojournalism?',
      'What challenge do photojournalists face in war zones?',
      'How has digital editing changed the field?',
      'What makes a powerful news photograph?',
      'Is it okay to stage a photo in journalism?',
      'What equipment does he recommend for beginners?',
      'How do photojournalists help society?',
      'What is the "Golden Hour" in photography?'
    ][i],
    options: [
      ['To tell a story through images', 'To take pretty pictures for weddings', 'To sell cameras'],
      ['Capturing an event at its peak emotional or visual point', 'When the camera battery dies', 'The end of the day'],
      ['To maintain trust and accuracy', 'To make more money', 'To win awards only'],
      ['Physical danger and emotional stress', 'Finding good coffee', 'Buying film'],
      ['It raises questions about truth and manipulation', 'It makes photos faster to take', 'It has no effect'],
      ['Emotional impact and storytelling', 'High resolution only', 'Using a lot of filters'],
      ['No, it is generally considered unethical', 'Yes, if it looks better', 'Only for sports'],
      ['A simple camera with a good prime lens', 'The most expensive drone', 'A smartphone only'],
      ['By documenting history and raising awareness', 'By taking family portraits', 'By selling magazines'],
      ['The time shortly after sunrise or before sunset', 'One hour after a news event', 'Lunch time']
    ][i],
    correctAnswer: [
      'To tell a story through images', 'Capturing an event at its peak emotional or visual point',
      'To maintain trust and accuracy', 'Physical danger and emotional stress',
      'It raises questions about truth and manipulation', 'Emotional impact and storytelling',
      'No, it is generally considered unethical', 'A simple camera with a good prime lens',
      'By documenting history and raising awareness', 'The time shortly after sunrise or before sunset'
    ][i],
    points: 1
  }))
};

const s8 = {
  id: genId(LEVEL, UNIT_ID, 's8', 0),
  type: 'listening',
  title: 'Listening: Discussion on Advertising Ethics',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's8', i + 1),
    type: 'multiple-choice',
    question: [
      'What is "native advertising"?',
      'Why is advertising to children controversial?',
      'What is "subliminal advertising"?',
      'What does "truth in advertising" mean?',
      'How do advertisers use "cookies" online?',
      'What is "greenwashing"?',
      'Why is privacy a concern in targeted ads?',
      'What is an "endorsement"?',
      'How does advertising impact consumer behavior?',
      'What is a "disclaimer" in an ad?'
    ][i],
    options: [
      ['Ads that look like the editorial content around them', 'Ads for local farms', 'Ads in your native language'],
      ['They may not distinguish between content and ads', 'Children have no money', 'Ads are too loud'],
      ['Hidden messages meant to influence the subconscious', 'Very large billboards', 'Radio commercials'],
      ['Ads must not be misleading or deceptive', 'Ads must be funny', 'Ads must be long'],
      ['To track user behavior and show relevant ads', 'To store passwords', 'To bake snacks'],
      ['Misleading consumers about environmental benefits', 'Painting ads green', 'Growing plants in an office'],
      ['Personal data is collected without clear consent', 'Ads are too personal', 'They take up too much screen space'],
      ['A recommendation from a famous person', 'A type of insurance', 'The end of a contract'],
      ['It creates desire for products and services', 'It makes people stop buying things', 'It has no impact'],
      ['A statement that limits the advertiser\'s liability', 'A coupon', 'A catchy song']
    ][i],
    correctAnswer: [
      'Ads that look like the editorial content around them', 'They may not distinguish between content and ads',
      'Hidden messages meant to influence the subconscious', 'Ads must not be misleading or deceptive',
      'To track user behavior and show relevant ads', 'Misleading consumers about environmental benefits',
      'Personal data is collected without clear consent', 'A recommendation from a famous person',
      'It creates desire for products and services', 'A statement that limits the advertiser\'s liability'
    ][i],
    points: 1
  }))
};

const s9 = {
  id: genId(LEVEL, UNIT_ID, 's9', 0),
  type: 'vocabulary',
  title: 'Media Bias & Critical Thinking',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's9', i + 1),
    type: 'multiple-choice',
    question: [
      'What is "bias"?',
      'What does "objective" mean in journalism?',
      'What is "subjective" reporting?',
      'The term "propaganda" refers to:',
      'What is "fact-checking"?',
      'A "source" in journalism is:',
      'What is a "monopoly" in media?',
      'The word "censorship" means:',
      'What is "transparency" in news?',
      'What does it mean to "verify" a story?'
    ][i],
    options: [
      ['A prejudice in favor of or against something', 'A type of hat', 'A musical note'],
      ['Not influenced by personal feelings or opinions', 'Using a camera lens', 'Writing a long story'],
      ['Based on or influenced by personal feelings', 'Writing about science', 'Reporting on objects'],
      ['Information used to promote a political cause', 'A type of dance', 'A garden tool'],
      ['Verifying the accuracy of claims', 'Counting the pages', 'Correcting grammar'],
      ['A person or document that provides information', 'The beginning of a river', 'A type of energy'],
      ['When one company owns most of the media outlets', 'A fun board game', 'A type of radio'],
      ['Suppression of speech or public communication', 'A way of counting people', 'Selling books'],
      ['Being open about how news is gathered', 'Using clear plastic', 'Working at night'],
      ['To prove that it is true and accurate', 'To tell it to a friend', 'To delete it']
    ][i],
    correctAnswer: [
      'A prejudice in favor of or against something', 'Not influenced by personal feelings or opinions',
      'Based on or influenced by personal feelings', 'Information used to promote a political cause',
      'Verifying the accuracy of claims', 'A person or document that provides information',
      'When one company owns most of the media outlets', 'Suppression of speech or public communication',
      'Being open about how news is gathered', 'To prove that it is true and accurate'
    ][i],
    points: 1
  }))
};

const s10 = {
  id: genId(LEVEL, UNIT_ID, 's10', 0),
  type: 'vocabulary',
  title: 'Public Speaking & Presentation',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's10', i + 1),
    type: 'multiple-choice',
    question: [
      'What is "rhetoric"?',
      'A "keynote" speech is:',
      'What is "body language"?',
      'The word "articulate" means:',
      'What is an "extemporaneous" speech?',
      'The term "monotone" refers to:',
      'What is "rapport" with an audience?',
      'A "visual aid" is:',
      'What does "persuade" mean?',
      'The word "eloquence" refers to:'
    ][i],
    options: [
      ['The art of effective or persuasive speaking', 'A type of medicine', 'A math problem'],
      ['The main speech at a conference', 'A song about keys', 'A very short note'],
      ['Non-verbal communication through gestures', 'Speaking in another language', 'Writing a letter'],
      ['Expressing ideas clearly and fluently', 'Being very loud', 'Drawing a picture'],
      ['Spoken with little preparation', 'Read from a script', 'A very long speech'],
      ['A voice with no variation in pitch', 'A type of phone', 'Singing a song'],
      ['A close and harmonious relationship', 'A type of transport', 'A loud noise'],
      ['An item used to help the audience see information', 'A pair of glasses', 'A type of hearing aid'],
      ['To convince someone to do or believe something', 'To speak softly', 'To ignore'],
      ['Fluent or persuasive speaking or writing', 'Being very tall', 'Having a lot of money']
    ][i],
    correctAnswer: [
      'The art of effective or persuasive speaking', 'The main speech at a conference',
      'Non-verbal communication through gestures', 'Expressing ideas clearly and fluently',
      'Spoken with little preparation', 'A voice with no variation in pitch',
      'A close and harmonious relationship', 'An item used to help the audience see information',
      'To convince someone to do or believe something', 'Fluent or persuasive speaking or writing'
    ][i],
    points: 1
  }))
};

export const B1_WEEK_20 = createShardedToeflUnit(
  'toefl-b1-w20',
  'Week 20: Media & Communication',
  'Examine the world of journalism, digital media, and the ethics of modern communication.',
  ['Understand media terminology and the impact of the internet', 'Use reporting verbs and passive voice in news contexts', 'Identify bias and apply critical thinking to news sources'],
  [s1, s2, s3, s4, s5, s6, s7, s8, s9, s10]
);
