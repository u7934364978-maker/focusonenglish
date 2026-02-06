import { createShardedToeflUnit, genId } from '../utils';

const UNIT_ID = 25;
const LEVEL = 'b1';

// SHARDS 1-2: Art & Literature Vocabulary
const s1 = {
  id: genId(LEVEL, UNIT_ID, 's1', 0),
  type: 'vocabulary',
  title: 'Art History & Styles',
  questions: [
    {
      id: genId(LEVEL, UNIT_ID, 's1', 1),
      type: 'multiple-choice',
      question: 'The term "masterpiece" refers to:',
      options: ['A work of outstanding skill or artistry', 'A small sketch', 'A type of paint brush'],
      correctAnswer: 'A work of outstanding skill or artistry',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's1', 2),
      type: 'multiple-choice',
      question: 'What is a "mural"?',
      options: ['A painting applied directly to a wall', 'A small framed picture', 'A sculpture made of wood'],
      correctAnswer: 'A painting applied directly to a wall',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's1', 3),
      type: 'multiple-choice',
      question: 'The word "abstract" in art means:',
      options: ['Art that does not attempt to represent external reality', 'A very detailed portrait', 'A drawing of a building'],
      correctAnswer: 'Art that does not attempt to represent external reality',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's1', 4),
      type: 'multiple-choice',
      question: 'What does "Renaissance" mean in an artistic context?',
      options: ['Rebirth and revival of classical art', 'The end of painting', 'A style using only black and white'],
      correctAnswer: 'Rebirth and revival of classical art',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's1', 5),
      type: 'multiple-choice',
      question: 'A "portrait" is a painting of:',
      options: ['A person', 'A landscape', 'A bowl of fruit'],
      correctAnswer: 'A person',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's1', 6),
      type: 'multiple-choice',
      question: 'What is "sculpture"?',
      options: ['Three-dimensional art made by carving or modeling', 'A poem about nature', 'A type of classical music'],
      correctAnswer: 'Three-dimensional art made by carving or modeling',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's1', 7),
      type: 'multiple-choice',
      question: 'The word "aesthetic" relates to:',
      options: ['Beauty or the appreciation of beauty', 'The weight of a statue', 'The cost of a painting'],
      correctAnswer: 'Beauty or the appreciation of beauty',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's1', 8),
      type: 'multiple-choice',
      question: 'What is an "exhibition"?',
      options: ['A public display of works of art', 'A private art lesson', 'The process of cleaning a painting'],
      correctAnswer: 'A public display of works of art',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's1', 9),
      type: 'multiple-choice',
      question: 'A "landscape" painting features:',
      options: ['Natural scenery like mountains or valleys', 'Interior of a house', 'People in a city'],
      correctAnswer: 'Natural scenery like mountains or valleys',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's1', 10),
      type: 'multiple-choice',
      question: 'What is "perspective" in art?',
      options: ['The technique of representing three dimensions on a flat surface', 'The color of the sky', 'The name of the artist'],
      correctAnswer: 'The technique of representing three dimensions on a flat surface',
      points: 1
    }
  ]
};

const s2 = {
  id: genId(LEVEL, UNIT_ID, 's2', 0),
  type: 'vocabulary',
  title: 'Literary Genres & Devices',
  questions: [
    {
      id: genId(LEVEL, UNIT_ID, 's2', 1),
      type: 'multiple-choice',
      question: 'What is a "protagonist"?',
      options: ['The leading character in a story', 'The villain or enemy', 'A minor background character'],
      correctAnswer: 'The leading character in a story',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's2', 2),
      type: 'multiple-choice',
      question: 'A "metaphor" is:',
      options: ['A figure of speech where a word is applied to an object not literally applicable', 'A comparison using "like" or "as"', 'A true story about an animal'],
      correctAnswer: 'A figure of speech where a word is applied to an object not literally applicable',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's2', 3),
      type: 'multiple-choice',
      question: 'The word "genre" means:',
      options: ['A category of artistic composition', 'A famous author', 'The ending of a book'],
      correctAnswer: 'A category of artistic composition',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's2', 4),
      type: 'multiple-choice',
      question: 'What is a "narrative"?',
      options: ['A spoken or written account of connected events; a story', 'A type of dictionary', 'The cover of a book'],
      correctAnswer: 'A spoken or written account of connected events; a story',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's2', 5),
      type: 'multiple-choice',
      question: 'A "fable" is usually a short story that:',
      options: ['Conveys a moral, often with animals as characters', 'Explains how to cook', 'Reports the daily news'],
      correctAnswer: 'Conveys a moral, often with animals as characters',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's2', 6),
      type: 'multiple-choice',
      question: 'The term "allegory" refers to:',
      options: ['A story that can be interpreted to reveal a hidden meaning', 'A book with no pictures', 'A very long poem'],
      correctAnswer: 'A story that can be interpreted to reveal a hidden meaning',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's2', 7),
      type: 'multiple-choice',
      question: 'What is "prose"?',
      options: ['Written or spoken language in its ordinary form, without metrical structure', 'Language with a rhythmic beat', 'A type of painting technique'],
      correctAnswer: 'Written or spoken language in its ordinary form, without metrical structure',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's2', 8),
      type: 'multiple-choice',
      question: 'A "satire" uses humor or irony to:',
      options: ['Expose and criticize people\'s stupidity or vices', 'Tell a romantic story', 'Explain scientific facts'],
      correctAnswer: 'Expose and criticize people\'s stupidity or vices',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's2', 9),
      type: 'multiple-choice',
      question: 'The "plot" of a story is:',
      options: ['The main events of a play, novel, or movie', 'The place where the author lives', 'The color of the book jacket'],
      correctAnswer: 'The main events of a play, novel, or movie',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's2', 10),
      type: 'multiple-choice',
      question: 'What is a "stanza"?',
      options: ['A group of lines forming the basic recurring metrical unit in a poem', 'A character in a play', 'The stage in a theater'],
      correctAnswer: 'A group of lines forming the basic recurring metrical unit in a poem',
      points: 1
    }
  ]
};

const s3 = {
  id: genId(LEVEL, UNIT_ID, 's3', 0),
  type: 'grammar',
  title: 'Present Perfect Continuous',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's3', i + 1),
    type: 'multiple-choice',
    question: [
      'The artist ____ on this mural for three months.',
      'I ____ about this novel all morning.',
      'How long ____ they ____ these ancient texts?',
      'She ____ painting portraits since she was a child.',
      'We ____ various art galleries today.',
      'He ____ hard to finish his screenplay.',
      'The museum ____ its collection of modern art.',
      'They ____ about the meaning of this poem for hours.',
      'I ____ traditional pottery techniques lately.',
      'The critics ____ the new exhibition since it opened.'
    ][i],
    options: [
      ['has been working', 'is working', 'has worked'],
      ['have been reading', 'am reading', 'have read'],
      ['have / been studying', 'do / study', 'are / studying'],
      ['has been', 'is', 'was'],
      ['have been visiting', 'are visiting', 'visit'],
      ['has been trying', 'tries', 'is trying'],
      ['has been expanding', 'expands', 'is expanding'],
      ['have been debating', 'are debating', 'debate'],
      ['have been learning', 'am learning', 'learn'],
      ['have been reviewing', 'are reviewing', 'review']
    ][i],
    correctAnswer: [
      'has been working', 'have been reading', 'have / been studying', 'has been',
      'have been visiting', 'has been trying', 'has been expanding', 'have been debating',
      'have been learning', 'have been reviewing'
    ][i],
    points: 1
  }))
};

const s4 = {
  id: genId(LEVEL, UNIT_ID, 's4', 0),
  type: 'grammar',
  title: 'Adjectives vs Adverbs',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's4', i + 1),
    type: 'multiple-choice',
    question: [
      'The painting was ____ beautiful.',
      'He writes ____ about his childhood.',
      'The artist worked ____ to complete the statue.',
      'The colors in the painting were ____ bright.',
      'She spoke ____ about the history of art.',
      'The new gallery is ____ designed.',
      'The poem was ____ written.',
      'He looked ____ at the old photograph.',
      'The play was ____ successful.',
      'She sings ____.'
    ][i],
    options: [
      ['incredibly', 'incredible', 'incredibility'],
      ['poetically', 'poetic', 'poetry'],
      ['tirelessly', 'tireless', 'tiring'],
      ['unusually', 'unusual', 'unusualness'],
      ['passionately', 'passionate', 'passion'],
      ['elegantly', 'elegant', 'elegance'],
      ['beautifully', 'beautiful', 'beauty'],
      ['sadly', 'sad', 'sadness'],
      ['highly', 'high', 'height'],
      ['divinely', 'divine', 'divinity']
    ][i],
    correctAnswer: [
      'incredibly', 'poetically', 'tirelessly', 'unusually', 'passionately',
      'elegantly', 'beautifully', 'sadly', 'highly', 'divinely'
    ][i],
    points: 1
  }))
};

const s5 = {
  id: genId(LEVEL, UNIT_ID, 's5', 0),
  type: 'reading',
  title: 'Reading: The Renaissance',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's5', i + 1),
    type: 'multiple-choice',
    question: [
      'Where did the Renaissance begin?',
      'What does the word "Renaissance" literally mean?',
      'Who is considered a "Renaissance Man"?',
      'Which invention helped spread Renaissance ideas?',
      'What was a primary focus of Renaissance art?',
      'Who painted the ceiling of the Sistine Chapel?',
      'Which family was a major patron of the arts in Florence?',
      'What is "humanism"?',
      'How did perspective change painting?',
      'Which scientific discovery happened during this time?'
    ][i],
    options: [
      ['Italy', 'France', 'Germany'],
      ['Rebirth', 'New Beginning', 'Old Age'],
      ['Leonardo da Vinci', 'Christopher Columbus', 'Napoleon'],
      ['The printing press', 'The steam engine', 'The telescope'],
      ['Realism and human form', 'Abstract shapes', 'Religious icons only'],
      ['Michelangelo', 'Raphael', 'Donatello'],
      ['The Medici', 'The Bourbons', 'The Tudors'],
      ['A focus on human potential and achievements', 'The study of insects', 'A type of diet'],
      ['It added depth and realism', 'It made everything flat', 'It removed all color'],
      ['The Earth revolves around the Sun', 'Electricity', 'The theory of relativity']
    ][i],
    correctAnswer: [
      'Italy', 'Rebirth', 'Leonardo da Vinci', 'The printing press', 'Realism and human form',
      'Michelangelo', 'The Medici', 'A focus on human potential and achievements',
      'It added depth and realism', 'The Earth revolves around the Sun'
    ][i],
    points: 1
  }))
};

const s6 = {
  id: genId(LEVEL, UNIT_ID, 's6', 0),
  type: 'reading',
  title: 'Reading: Modernism in Literature',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's6', i + 1),
    type: 'multiple-choice',
    question: [
      'When did Modernism in literature primarily occur?',
      'What was a key characteristic of Modernist writing?',
      'What is "stream of consciousness"?',
      'Which world event heavily influenced Modernism?',
      'Who is a famous Modernist author?',
      'How did Modernist writers view traditional forms?',
      'What was a common theme in Modernist literature?',
      'Modernism often rejected:',
      'What is "fragmentation" in a story?',
      'Why did Modernists use multiple perspectives?'
    ][i],
    options: [
      ['Early 20th century', 'Late 18th century', 'During the Renaissance'],
      ['Breaking with traditional styles', 'Strict rhyming patterns', 'Focusing only on nature'],
      ['A narrative mode that depicts a character\'s thoughts', 'A type of fast-moving river', 'Sleeping while writing'],
      ['World War I', 'The French Revolution', 'The Moon Landing'],
      ['Virginia Woolf', 'William Shakespeare', 'Charles Dickens'],
      ['They felt they were outdated and restrictive', 'They loved them and used them always', 'They didn\'t know about them'],
      ['Alienation and the loss of traditional values', 'Happily ever after endings', 'The beauty of the countryside'],
      ['Linear storytelling and clear endings', 'Using words', 'Writing books'],
      ['A story told in non-chronological pieces', 'A book that is physically broken', 'Using too many adjectives'],
      ['To show the complexity and subjectivity of truth', 'To make the book longer', 'Because they couldn\'t decide on one']
    ][i],
    correctAnswer: [
      'Early 20th century', 'Breaking with traditional styles', 'A narrative mode that depicts a character\'s thoughts',
      'World War I', 'Virginia Woolf', 'They felt they were outdated and restrictive',
      'Alienation and the loss of traditional values', 'Linear storytelling and clear endings',
      'A story told in non-chronological pieces', 'To show the complexity and subjectivity of truth'
    ][i],
    points: 1
  }))
};

const s7 = {
  id: genId(LEVEL, UNIT_ID, 's7', 0),
  type: 'listening',
  title: 'Listening: Lecture on Impressionism',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's7', i + 1),
    type: 'multiple-choice',
    question: [
      'Where did Impressionism originate?',
      'What was the main goal of Impressionist painters?',
      'Who is a key figure in Impressionism?',
      'What does the term "en plein air" mean?',
      'How did Impressionists use color?',
      'What was the reaction of the official art world at first?',
      'What is often the subject matter of Impressionist art?',
      'How are the brushstrokes described in Impressionism?',
      'What invention influenced Impressionists?',
      'How did the name "Impressionism" come about?'
    ][i],
    options: [
      ['France', 'Spain', 'USA'],
      ['To capture the effect of light on a scene', 'To paint perfect photographic images', 'To tell historical stories'],
      ['Claude Monet', 'Vincent van Gogh', 'Pablo Picasso'],
      ['Painting outdoors', 'Painting in the dark', 'Using only red paint'],
      ['They used short, thick strokes of bright color', 'They only used black and white', 'They mixed colors very smoothly'],
      ['They rejected it as unfinished', 'They loved it immediately', 'They didn\'t notice it'],
      ['Everyday life and landscapes', 'Kings and Queens', 'Abstract geometric shapes'],
      ['Short and visible', 'Invisible and smooth', 'Very long and thin'],
      ['The camera', 'The airplane', 'The telephone'],
      ['From a critic mocking a painting by Monet', 'From a dream a painter had', 'It was the name of a town']
    ][i],
    correctAnswer: [
      'France', 'To capture the effect of light on a scene', 'Claude Monet', 'Painting outdoors',
      'They used short, thick strokes of bright color', 'They rejected it as unfinished',
      'Everyday life and landscapes', 'Short and visible', 'The camera',
      'From a critic mocking a painting by Monet'
    ][i],
    points: 1
  }))
};

const s8 = {
  id: genId(LEVEL, UNIT_ID, 's8', 0),
  type: 'listening',
  title: 'Listening: Discussion on Creative Writing',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's8', i + 1),
    type: 'multiple-choice',
    question: [
      'What is "show, don\'t tell" in writing?',
      'What is the purpose of a "draft"?',
      'What does "pacing" refer to in a story?',
      'What is "dialogue"?',
      'Why is character development important?',
      'What is a "cliché"?',
      'What does "editing" involve?',
      'What is a "theme" in a story?',
      'What is the "climax" of a plot?',
      'Why do writers use "foreshadowing"?'
    ][i],
    options: [
      ['Using sensory details rather than just stating facts', 'Drawing pictures instead of words', 'Only using dialogue'],
      ['A preliminary version of a piece of writing', 'A final published book', 'A type of pen'],
      ['The speed at which the story develops', 'The size of the pages', 'The weight of the book'],
      ['Spoken exchange between characters', 'The description of the setting', 'The list of chapters'],
      ['To make characters feel real and relatable', 'To make characters more beautiful', 'To use more words'],
      ['An overused phrase or idea that lacks original thought', 'A new and exciting word', 'A type of French cheese'],
      ['Reviewing and changing text to improve it', 'Selling the book to a store', 'Reading the book aloud once'],
      ['The underlying message or main idea', 'The name of the hero', 'The color of the cover'],
      ['The point of highest tension or drama', 'The first page of the book', 'The acknowledgments'],
      ['To give hints about what will happen later', 'To confuse the reader', 'To make the book shorter']
    ][i],
    correctAnswer: [
      'Using sensory details rather than just stating facts', 'A preliminary version of a piece of writing',
      'The speed at which the story develops', 'Spoken exchange between characters',
      'To make characters feel real and relatable', 'An overused phrase or idea that lacks original thought',
      'Reviewing and changing text to improve it', 'The underlying message or main idea',
      'The point of highest tension or drama', 'To give hints about what will happen later'
    ][i],
    points: 1
  }))
};

const s9 = {
  id: genId(LEVEL, UNIT_ID, 's9', 0),
  type: 'vocabulary',
  title: 'Materials & Techniques',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's9', i + 1),
    type: 'multiple-choice',
    question: [
      'What is "canvas"?',
      'The medium of "watercolor" uses:',
      'What is a "palette"?',
      'A "sketch" is usually:',
      'What does "engraving" involve?',
      'What is "ceramics"?',
      'The term "collage" refers to:',
      'What is "fresco"?',
      'A "kiln" is used in which art form?',
      'What is "calligraphy"?'
    ][i],
    options: [
      ['A strong, woven cloth used as a surface for painting', 'A type of paint', 'A wooden frame'],
      ['Pigments dissolved in water', 'Oil-based paints', 'Dry powder'],
      ['A surface on which an artist mixes colors', 'A type of brush', 'A small statue'],
      ['A rough or unfinished drawing', 'A completed oil painting', 'A type of poem'],
      ['Cutting or carving a design into a hard surface', 'Painting with water', 'Taking a photo'],
      ['The art of making objects from clay', 'A type of dance', 'Writing music'],
      ['Art made by sticking different materials together', 'A single color painting', 'A type of sculpture'],
      ['Painting on wet plaster', 'Painting on glass', 'Drawing with chalk'],
      ['Pottery', 'Painting', 'Writing'],
      ['The art of beautiful handwriting', 'A type of ancient weapon', 'A style of cooking']
    ][i],
    correctAnswer: [
      'A strong, woven cloth used as a surface for painting', 'Pigments dissolved in water',
      'A surface on which an artist mixes colors', 'A rough or unfinished drawing',
      'Cutting or carving a design into a hard surface', 'The art of making objects from clay',
      'Art made by sticking different materials together', 'Painting on wet plaster',
      'Pottery', 'The art of beautiful handwriting'
    ][i],
    points: 1
  }))
};

const s10 = {
  id: genId(LEVEL, UNIT_ID, 's10', 0),
  type: 'vocabulary',
  title: 'Critique & Analysis',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's10', i + 1),
    type: 'multiple-choice',
    question: [
      'What does it mean to "critique" a work of art?',
      'The word "interpretation" refers to:',
      'What is "symbolism"?',
      'What does "provocative" mean in art?',
      'A "retrospective" exhibition shows:',
      'The term "avant-garde" refers to:',
      'What is a "curator"?',
      'What does "originality" mean?',
      'The "context" of a work of art is:',
      'What is "minimalism"?'
    ][i],
    options: [
      ['To evaluate or analyze it in a detailed way', 'To destroy it', 'To copy it exactly'],
      ['The action of explaining the meaning of something', 'The price of the art', 'The weight of the frame'],
      ['The use of symbols to represent ideas or qualities', 'Painting with only one color', 'Using only metal'],
      ['Causing a strong reaction, often on purpose', 'Boring and predictable', 'Very small'],
      ['A collection of an artist\'s work over their lifetime', 'New work only', 'Work by many different artists'],
      ['New and experimental ideas or methods', 'Old and traditional styles', 'A type of military uniform'],
      ['A person who manages a gallery or museum collection', 'The artist themselves', 'A person who sells tickets'],
      ['The quality of being new and creative', 'Being old and dusty', 'Being a cheap copy'],
      ['The circumstances that form the setting for an event or idea', 'The size of the painting', 'The type of paint used'],
      ['A style that uses the fewest and simplest elements', 'A style with too much detail', 'A type of heavy metal']
    ][i],
    correctAnswer: [
      'To evaluate or analyze it in a detailed way', 'The action of explaining the meaning of something',
      'The use of symbols to represent ideas or qualities', 'Causing a strong reaction, often on purpose',
      'A collection of an artist\'s work over their lifetime', 'New and experimental ideas or methods',
      'A person who manages a gallery or museum collection', 'The quality of being new and creative',
      'The circumstances that form the setting for an event or idea', 'A style that uses the fewest and simplest elements'
    ][i],
    points: 1
  }))
};

export const B1_WEEK_25 = createShardedToeflUnit(
  'toefl-b1-w25',
  'Week 25: Art & Literature',
  'Delve into the worlds of artistic expression and literary creation, exploring history, techniques, and analysis.',
  ['Master vocabulary related to art styles, history, and literary devices', 'Use the Present Perfect Continuous correctly', 'Understand the distinction between adjectives and adverbs'],
  [s1, s2, s3, s4, s5, s6, s7, s8, s9, s10]
);
