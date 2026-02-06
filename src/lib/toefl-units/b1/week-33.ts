import { createShardedToeflUnit, genId } from '../utils';

const UNIT_ID = 33;
const LEVEL = 'b1';

// SHARDS 1-2: Literature & Arts Vocabulary
const s1 = {
  id: genId(LEVEL, UNIT_ID, 's1', 0),
  type: 'vocabulary',
  title: 'Literary Genres & Devices',
  questions: [
    {
      id: genId(LEVEL, UNIT_ID, 's1', 1),
      type: 'multiple-choice',
      question: 'What is a "protagonist"?',
      options: ['The leading character in a story', 'The person who writes the story', 'The villain in a story'],
      correctAnswer: 'The leading character in a story',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's1', 2),
      type: 'multiple-choice',
      question: 'The term "metaphor" refers to:',
      options: ['A figure of speech in which a word or phrase is applied to an object or action to which it is not literally applicable', 'A type of direct comparison using "like" or "as"', 'A very long poem'],
      correctAnswer: 'A figure of speech in which a word or phrase is applied to an object or action to which it is not literally applicable',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's1', 3),
      type: 'multiple-choice',
      question: 'What is a "genre"?',
      options: ['A category of artistic composition', 'A type of musical instrument', 'A famous painter'],
      correctAnswer: 'A category of artistic composition',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's1', 4),
      type: 'multiple-choice',
      question: 'The word "satire" refers to:',
      options: ['The use of humor, irony, exaggeration, or ridicule to expose and criticize people\'s stupidity or vices', 'A type of sad story', 'A historical book'],
      correctAnswer: 'The use of humor, irony, exaggeration, or ridicule to expose and criticize people\'s stupidity or vices',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's1', 5),
      type: 'multiple-choice',
      question: 'What is "imagery"?',
      options: ['Visually descriptive or figurative language in a literary work', 'A type of photo album', 'Drawing pictures in a book'],
      correctAnswer: 'Visually descriptive or figurative language in a literary work',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's1', 6),
      type: 'multiple-choice',
      question: 'The term "foreshadowing" means:',
      options: ['A warning or indication of a future event', 'Looking at shadows', 'Thinking about the past'],
      correctAnswer: 'A warning or indication of a future event',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's1', 7),
      type: 'multiple-choice',
      question: 'What is a "sonnet"?',
      options: ['A poem of fourteen lines using any of a number of formal rhyme schemes', 'A type of song', 'A very short story'],
      correctAnswer: 'A poem of fourteen lines using any of a number of formal rhyme schemes',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's1', 8),
      type: 'multiple-choice',
      question: 'The word "narrator" refers to:',
      options: ['A person who tells a story', 'The main character', 'The person who reads a book'],
      correctAnswer: 'A person who tells a story',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's1', 9),
      type: 'multiple-choice',
      question: 'What is "alliteration"?',
      options: ['The occurrence of the same letter or sound at the beginning of adjacent or closely connected words', 'A type of rhyme', 'Writing in all capital letters'],
      correctAnswer: 'The occurrence of the same letter or sound at the beginning of adjacent or closely connected words',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's1', 10),
      type: 'multiple-choice',
      question: 'The term "climax" refers to:',
      options: ['The most intense, exciting, or important point of something', 'The beginning of a story', 'The character\'s name'],
      correctAnswer: 'The most intense, exciting, or important point of something',
      points: 1
    }
  ]
};

const s2 = {
  id: genId(LEVEL, UNIT_ID, 's2', 0),
  type: 'vocabulary',
  title: 'Art Movements & Styles',
  questions: [
    {
      id: genId(LEVEL, UNIT_ID, 's2', 1),
      type: 'multiple-choice',
      question: 'What is "Renaissance" art?',
      options: ['A period of European cultural, artistic, political and economic "rebirth"', 'Modern art from the 21st century', 'A style of cave painting'],
      correctAnswer: 'A period of European cultural, artistic, political and economic "rebirth"',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's2', 2),
      type: 'multiple-choice',
      question: 'The term "impressionism" refers to:',
      options: ['A style of painting that uses small, thin, yet visible brush strokes and open composition', 'Painting very detailed portraits', 'A type of sculpture'],
      correctAnswer: 'A style of painting that uses small, thin, yet visible brush strokes and open composition',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's2', 3),
      type: 'multiple-choice',
      question: 'What is "surrealism"?',
      options: ['A 20th-century avant-garde movement in art and literature which sought to release the creative potential of the unconscious mind', 'Painting exactly what you see', 'A type of photography'],
      correctAnswer: 'A 20th-century avant-garde movement in art and literature which sought to release the creative potential of the unconscious mind',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's2', 4),
      type: 'multiple-choice',
      question: 'The word "abstract" in art means:',
      options: ['Art that does not attempt to represent external reality, but seeks to achieve its effect using shapes, forms, colors, and textures', 'A very small painting', 'Art that is easy to understand'],
      correctAnswer: 'Art that does not attempt to represent external reality, but seeks to achieve its effect using shapes, forms, colors, and textures',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's2', 5),
      type: 'multiple-choice',
      question: 'What is a "masterpiece"?',
      options: ['A work of outstanding artistry, skill, or workmanship', 'A large building', 'A type of tool'],
      correctAnswer: 'A work of outstanding artistry, skill, or workmanship',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's2', 6),
      type: 'multiple-choice',
      question: 'The term "sculpture" refers to:',
      options: ['The art of making two- or three-dimensional representative or abstract forms', 'Painting on walls', 'Writing poems'],
      correctAnswer: 'The art of making two- or three-dimensional representative or abstract forms',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's2', 7),
      type: 'multiple-choice',
      question: 'What is "calligraphy"?',
      options: ['Decorative handwriting or handwritten lettering', 'A type of ancient dance', 'A way to cook food'],
      correctAnswer: 'Decorative handwriting or handwritten lettering',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's2', 8),
      type: 'multiple-choice',
      question: 'The word "curator" refers to:',
      options: ['A keeper or custodian of a museum or other collection', 'A person who sells art', 'A famous artist'],
      correctAnswer: 'A keeper or custodian of a museum or other collection',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's2', 9),
      type: 'multiple-choice',
      question: 'What is "baroque" art?',
      options: ['A highly ornate and often extravagant style of architecture, art, and music', 'A very simple style', 'Art from the future'],
      correctAnswer: 'A highly ornate and often extravagant style of architecture, art, and music',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's2', 10),
      type: 'multiple-choice',
      question: 'The term "mural" means:',
      options: ['A painting or other work of art executed directly on a wall', 'A type of floor tile', 'A very small drawing'],
      correctAnswer: 'A painting or other work of art executed directly on a wall',
      points: 1
    }
  ]
};

const s3 = {
  id: genId(LEVEL, UNIT_ID, 's3', 0),
  type: 'grammar',
  title: 'Participle Clauses',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's3', i + 1),
    type: 'multiple-choice',
    question: [
      '____ the book, he went to bed.',
      '____ by the news, she couldn\'t speak.',
      '____ in London, he knows the city well.',
      '____ the letter, he realized his mistake.',
      '____ all the food, the guests were full.',
      '____ the movie before, I didn\'t want to see it again.',
      '____ the door, she entered the room.',
      '____ his homework, he went out to play.',
      '____ by the fire, they felt warm.',
      '____ her sunglasses, she couldn\'t see well.'
    ][i],
    options: [
      ['Having finished', 'Finished', 'To finish'],
      ['Shocked', 'Shocking', 'Having shocked'],
      ['Living', 'Lived', 'To live'],
      ['Reading', 'Read', 'Having read'],
      ['Having eaten', 'Eating', 'Eaten'],
      ['Having seen', 'Seeing', 'Seen'],
      ['Opening', 'Opened', 'To open'],
      ['Having done', 'Doing', 'Done'],
      ['Sitting', 'Sat', 'Having sat'],
      ['Losing', 'Lost', 'Having lost']
    ][i],
    correctAnswer: [
      'Having finished', 'Shocked', 'Living', 'Reading', 'Having eaten',
      'Having seen', 'Opening', 'Having done', 'Sitting', 'Having lost'
    ][i],
    points: 1
  }))
};

const s4 = {
  id: genId(LEVEL, UNIT_ID, 's4', 0),
  type: 'grammar',
  title: 'Cleft Sentences',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's4', i + 1),
    type: 'multiple-choice',
    question: [
      'What I need ____ a good rest.',
      'It was my brother ____ called you.',
      'All I want ____ for Christmas is you.',
      'It is the atmosphere ____ I love about this place.',
      'What she likes most ____ swimming.',
      'It was in 1969 ____ man first landed on the moon.',
      'The person ____ I met was very kind.',
      'It is the heat ____ makes me tired.',
      'What happened ____ that he lost his keys.',
      'The place ____ we went was beautiful.'
    ][i],
    options: [
      ['is', 'are', 'be'],
      ['who', 'which', 'what'],
      ['is', 'are', 'be'],
      ['that', 'who', 'what'],
      ['is', 'are', 'be'],
      ['that', 'which', 'who'],
      ['that', 'which', 'who'],
      ['that', 'who', 'which'],
      ['was', 'is', 'be'],
      ['where', 'that', 'which']
    ][i],
    correctAnswer: [
      'is', 'who', 'is', 'that', 'is', 'that', 'that', 'that', 'was', 'where'
    ][i],
    points: 1
  }))
};

const s5 = {
  id: genId(LEVEL, UNIT_ID, 's5', 0),
  type: 'reading',
  title: 'Reading: Evolution of the Novel',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's5', i + 1),
    type: 'multiple-choice',
    question: [
      'When did the modern novel begin to emerge?',
      'Which book is often considered the first modern novel?',
      'What characterizes a "picaresque" novel?',
      'How did the rise of the middle class affect literature?',
      'What is an "epistolary" novel?',
      'Who were the major 19th-century novelists?',
      'What is "realism" in literature?',
      'How did the 20th century change the novel?',
      'What is "stream of consciousness"?',
      'What is the future of the novel?'
    ][i],
    options: [
      ['The 18th century', 'The 15th century', 'The 20th century'],
      ['Don Quixote', 'Hamlet', 'The Odyssey'],
      ['An episodic story about a rogue hero', 'A story told through letters', 'A very long poem'],
      ['It increased the demand for realistic stories', 'It stopped people from reading', 'It had no effect'],
      ['A novel written as a series of documents', 'A novel about space', 'A very short story'],
      ['Dickens, Austen, and Tolstoy', 'Shakespeare, Milton, and Chaucer', 'Homer, Virgil, and Dante'],
      ['Representing life as it truly is', 'Using many metaphors', 'Writing about magic'],
      ['It introduced more experimental forms', 'It made novels shorter', 'It stopped novels from being written'],
      ['A narrative mode that depicts the thoughts and feelings of a character', 'A type of fast writing', 'A very long sentence'],
      ['Digital and interactive formats are emerging', 'It will disappear', 'It will stay exactly the same']
    ][i],
    correctAnswer: [
      'The 18th century', 'Don Quixote', 'An episodic story about a rogue hero',
      'It increased the demand for realistic stories',
      'A novel written as a series of documents', 'Dickens, Austen, and Tolstoy',
      'Representing life as it truly is', 'It introduced more experimental forms',
      'A narrative mode that depicts the thoughts and feelings of a character',
      'Digital and interactive formats are emerging'
    ][i],
    points: 1
  }))
};

const s6 = {
  id: genId(LEVEL, UNIT_ID, 's6', 0),
  type: 'reading',
  title: 'Reading: Renaissance Art',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's6', i + 1),
    type: 'multiple-choice',
    question: [
      'Where did the Renaissance begin?',
      'What was the main focus of Renaissance art?',
      'Who painted the "Mona Lisa"?',
      'What is "linear perspective"?',
      'Who sculpted the "David"?',
      'What is "sfumato"?',
      'Who painted the ceiling of the Sistine Chapel?',
      'What role did the Medici family play?',
      'What is "humanism"?',
      'How did Renaissance art differ from Medieval art?'
    ][i],
    options: [
      ['Italy', 'France', 'Spain'],
      ['Humanism and realism', 'Abstract shapes', 'Religious symbols only'],
      ['Leonardo da Vinci', 'Michelangelo', 'Raphael'],
      ['A technique to create an illusion of depth', 'A way to mix colors', 'A type of brush'],
      ['Michelangelo', 'Donatello', 'Bernini'],
      ['A technique for blending colors to create a smoky effect', 'A type of painting', 'A famous artist'],
      ['Michelangelo', 'Leonardo da Vinci', 'Raphael'],
      ['They were wealthy patrons of the arts', 'They were famous painters', 'They built the churches'],
      ['An emphasis on human potential and achievements', 'A new type of religion', 'A way to build houses'],
      ['It was more realistic and focused on the human form', 'It was more religious', 'It was less detailed']
    ][i],
    correctAnswer: [
      'Italy', 'Humanism and realism', 'Leonardo da Vinci',
      'A technique to create an illusion of depth', 'Michelangelo',
      'A technique for blending colors to create a smoky effect',
      'Michelangelo', 'They were wealthy patrons of the arts',
      'An emphasis on human potential and achievements',
      'It was more realistic and focused on the human form'
    ][i],
    points: 1
  }))
};

const s7 = {
  id: genId(LEVEL, UNIT_ID, 's7', 0),
  type: 'listening',
  title: 'Listening: Lecture on Shakespeare',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's7', i + 1),
    type: 'multiple-choice',
    question: [
      'Where was Shakespeare born?',
      'What was the name of his theatre?',
      'How many plays did he write approximately?',
      'What are the three categories of his plays?',
      'What is a "soliloquy"?',
      'Why is his language still influential?',
      'What is "iambic pentameter"?',
      'What is his most famous tragedy?',
      'Who were the "groundlings"?',
      'What happened to the original Globe Theatre?'
    ][i],
    options: [
      ['Stratford-upon-Avon', 'London', 'Manchester'],
      ['The Globe', 'The Rose', 'The Swan'],
      ['38', '50', '20'],
      ['Comedies, Tragedies, and Histories', 'Poems, Stories, and Plays', 'Novels, Essays, and Songs'],
      ['A speech given by a character alone on stage', 'A type of poem', 'A funny joke'],
      ['He invented many words and phrases we use today', 'Because it is very difficult', 'It is not influential'],
      ['A rhythm with five sets of unstressed and stressed syllables', 'A type of poem', 'A musical instrument'],
      ['Hamlet', 'A Midsummer Night\'s Dream', 'Richard III'],
      ['Poor spectators who stood in the pit', 'Famous actors', 'The royal family'],
      ['It burned down', 'It was moved', 'It is still there']
    ][i],
    correctAnswer: [
      'Stratford-upon-Avon', 'The Globe', '38',
      'Comedies, Tragedies, and Histories',
      'A speech given by a character alone on stage',
      'He invented many words and phrases we use today',
      'A rhythm with five sets of unstressed and stressed syllables',
      'Hamlet', 'Poor spectators who stood in the pit', 'It burned down'
    ][i],
    points: 1
  }))
};

const s8 = {
  id: genId(LEVEL, UNIT_ID, 's8', 0),
  type: 'listening',
  title: 'Listening: Discussion on Modern Art',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's8', i + 1),
    type: 'multiple-choice',
    question: [
      'What is considered "Modern Art"?',
      'Who is famous for "Cubism"?',
      'What is "Pop Art"?',
      'Who painted the "Campbell\'s Soup Cans"?',
      'What is "minimalism" in art?',
      'How do people often react to modern art?',
      'What is "conceptual art"?',
      'What is "street art"?',
      'Is digital art considered real art?',
      'What is the purpose of modern art?'
    ][i],
    options: [
      ['Art from the late 19th to mid-20th century', 'Art from the Renaissance', 'Art from the future'],
      ['Pablo Picasso', 'Vincent van Gogh', 'Claude Monet'],
      ['Art based on popular culture and mass media', 'Art with many colors', 'Art about soda'],
      ['Andy Warhol', 'Jackson Pollock', 'Mark Rothko'],
      ['Art that uses simple forms and structures', 'Very small art', 'Art with no color'],
      ['With a wide range of emotions and opinions', 'They always love it', 'They always hate it'],
      ['Art where the idea is more important than the object', 'Art that is easy to understand', 'Art in a museum only'],
      ['Visual art created in public locations', 'Art about streets', 'Art that is free'],
      ['Yes, it is a recognized and evolving medium', 'No', 'Only if it is printed'],
      ['To challenge traditions and provoke thought', 'To make money', 'To be pretty only']
    ][i],
    correctAnswer: [
      'Art from the late 19th to mid-20th century', 'Pablo Picasso',
      'Art based on popular culture and mass media', 'Andy Warhol',
      'Art that uses simple forms and structures',
      'With a wide range of emotions and opinions',
      'Art where the idea is more important than the object',
      'Visual art created in public locations',
      'Yes, it is a recognized and evolving medium',
      'To challenge traditions and provoke thought'
    ][i],
    points: 1
  }))
};

const s9 = {
  id: genId(LEVEL, UNIT_ID, 's9', 0),
  type: 'vocabulary',
  title: 'Theatre & Cinema',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's9', i + 1),
    type: 'multiple-choice',
    question: [
      'What is a "rehearsal"?',
      'What does a "director" do?',
      'What is a "screenplay"?',
      'What is "cinematography"?',
      'What is a "blockbuster"?',
      'What is "improv"?',
      'What is the "casting" process?',
      'What is a "stunt"?',
      'What is "post-production"?',
      'What is a "cameo"?'
    ][i],
    options: [
      ['A practice session for a performance', 'The final show', 'A type of costume'],
      ['Oversees the creative aspects of a production', 'Sells tickets', 'Writes the music'],
      ['The script for a film', 'A type of camera', 'The ending of a movie'],
      ['The art of photography and camerawork in filmmaking', 'Writing the story', 'Acting in a film'],
      ['A very successful and popular movie', 'A type of bomb', 'A movie that fails'],
      ['Acting without a script', 'A type of dance', 'A short play'],
      ['Choosing actors for a production', 'Building the set', 'Applying makeup'],
      ['A dangerous action performed by a professional', 'A type of joke', 'A loud noise'],
      ['The work done on a film after filming is complete', 'The beginning of a film', 'Filming on location'],
      ['A brief appearance by a famous person', 'A type of jewelry', 'A hidden camera']
    ][i],
    correctAnswer: [
      'A practice session for a performance',
      'Oversees the creative aspects of a production', 'The script for a film',
      'The art of photography and camerawork in filmmaking',
      'A very successful and popular movie', 'Acting without a script',
      'Choosing actors for a production',
      'A dangerous action performed by a professional',
      'The work done on a film after filming is complete',
      'A brief appearance by a famous person'
    ][i],
    points: 1
  }))
};

const s10 = {
  id: genId(LEVEL, UNIT_ID, 's10', 0),
  type: 'vocabulary',
  title: 'Music & Dance',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's10', i + 1),
    type: 'multiple-choice',
    question: [
      'What is "rhythm"?',
      'What is a "melody"?',
      'What is "harmony"?',
      'What is a "composer"?',
      'What is "choreography"?',
      'What is an "orchestra"?',
      'What is "genre" in music?',
      'What is a "solo"?',
      'What is a "concert"?',
      'What is "improvisation" in jazz?'
    ][i],
    options: [
      ['A strong, regular, repeated pattern of movement or sound', 'The loudness of music', 'A type of drum'],
      ['A sequence of notes that are musically satisfying', 'A type of dance', 'A musical instrument'],
      ['The combination of simultaneously sounded musical notes', 'Playing very fast', 'One note alone'],
      ['A person who writes music', 'A person who plays the piano', 'A person who sings'],
      ['The sequence of steps and movements in dance', 'A type of music', 'A famous dancer'],
      ['A large group of musicians playing together', 'A small band', 'A type of singer'],
      ['A category of music style', 'A type of instrument', 'A musical note'],
      ['A performance by a single musician or singer', 'A group performance', 'A type of dance'],
      ['A musical performance given in public', 'A type of book', 'A lesson'],
      ['Creating music in the moment', 'Reading music from a page', 'Playing very slowly']
    ][i],
    correctAnswer: [
      'A strong, regular, repeated pattern of movement or sound',
      'A sequence of notes that are musically satisfying',
      'The combination of simultaneously sounded musical notes',
      'A person who writes music', 'The sequence of steps and movements in dance',
      'A large group of musicians playing together', 'A category of music style',
      'A performance by a single musician or singer',
      'A musical performance given in public', 'Creating music in the moment'
    ][i],
    points: 1
  }))
};

export const B1_WEEK_33 = createShardedToeflUnit(
  'toefl-b1-w33',
  'Week 33: Literature & Arts',
  'Explore the world of books, paintings, and performances.',
  ['Master literature and arts vocabulary', 'Use Participle Clauses and Cleft Sentences correctly', 'Understand artistic texts and discussions'],
  [s1, s2, s3, s4, s5, s6, s7, s8, s9, s10]
);
