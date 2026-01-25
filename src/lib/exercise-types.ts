// ============================================
// TIPOS DE EJERCICIOS - SISTEMA DINÁMICO B2
// ============================================
// Sistema de generación infinita de ejercicios con IA

export type ExerciseCategory = 
  | 'grammar'
  | 'vocabulary'
  | 'reading'
  | 'writing'
  | 'listening'
  | 'speaking'
  | 'pronunciation'
  | 'dictation'
  | 'roleplay'
  | 'exam-practice'
  | 'ai-lab';

export type ExerciseType = 
  | 'multiple-choice'
  | 'ai-mission'
  | 'fill-blank'
  | 'true-false'
  | 'key-word-transformation'
  | 'word-formation'
  | 'multiple-choice-cloze'
  | 'sentence-building'
  | 'reading-comprehension'
  | 'listening-comprehension'
  | 'speaking-analysis'
  | 'writing-analysis'
  | 'pronunciation-practice'
  | 'dictation'
  | 'roleplay'
  | 'ielts-graph-description'
  | 'ielts-true-false-not-given'
  | 'toefl-integrated-reading-listening'
  | 'oxford-use-of-english'
  | 'word-search'
  | 'crossword'
  | 'speaking'
  | 'pronunciation'
  | 'listening'
  | 'reading'
  | 'writing'
  | 'grammar'
  | 'vocabulary'
  | 'sentence-completion'
  | 'error-identification'
  | 'paraphrasing'
  | 'collocation-matching'
  | 'phrasal-verbs'
  | 'idioms-expressions'
  | 'summary-writing'
  | 'gap-fill-text'
  | 'open-cloze'
  | 'sentence-reordering'
  | 'sentence-ordering'
  | 'gap-fill'
  | 'extended-gap-fill'
  | 'matching'
  | 'paraphrase'
  | 'integrated-reading-writing'
  | 'key-word-transformations'
  | 'gapped-text'
  | 'multiple-matching'
  | 'situational-discovery';

export type DifficultyLevel = 'easy' | 'medium' | 'hard';
export type CEFRLevel = 'A1' | 'A2' | 'B1' | 'B2' | 'C1' | 'C2';

// ============================================
// CONFIGURACIÓN DE TIPOS DE EJERCICIOS
// ============================================

export interface ExerciseTypeConfig {
  id: ExerciseType;
  name: string;
  nameES: string;
  category: ExerciseCategory;
  description: string;
  descriptionES: string;
  icon: string;
  estimatedTime: number; // minutos
  aiPromptTemplate: string;
  supportedLevels: CEFRLevel[];
  difficultySettings: {
    easy: string;
    medium: string;
    hard: string;
  };
}

// ============================================
// CATÁLOGO DE TIPOS DE EJERCICIOS DISPONIBLES
// ============================================

export const EXERCISE_TYPE_CATALOG: ExerciseTypeConfig[] = [
  {
    id: 'multiple-choice',
    name: 'Multiple Choice',
    nameES: 'Opción Múltiple',
    category: 'grammar',
    description: 'Choose the correct answer from multiple options',
    descriptionES: 'Elige la respuesta correcta entre varias opciones',
    icon: '✓',
    estimatedTime: 5,
    aiPromptTemplate: `Generate a B2 level multiple choice exercise about {{topic}}.
Difficulty: {{difficulty}}
Include 4 questions with:
- Clear question stem
- 4 answer options (A, B, C, D)
- Only one correct answer
- Detailed explanation for the correct answer
- Distractors that test common mistakes

Format as JSON:
{
  "title": "Exercise title",
  "instructions": "Instructions in Spanish",
  "questions": [
    {
      "id": "q1",
      "question": "Question text",
      "options": ["A", "B", "C", "D"],
      "correctAnswer": "A",
      "explanation": "Why this is correct"
    }
  ]
}`,
    supportedLevels: ['A2', 'B1', 'B2', 'C1'],
    difficultySettings: {
      easy: 'Basic structures with clear context clues',
      medium: 'Standard B2 complexity with subtle differences',
      hard: 'Advanced structures requiring deep understanding'
    }
  },
  {
    id: 'fill-blank',
    name: 'Fill in the Blanks',
    nameES: 'Completar Espacios',
    category: 'grammar',
    description: 'Complete sentences with the correct words',
    descriptionES: 'Completa las oraciones con las palabras correctas',
    icon: '___',
    estimatedTime: 7,
    aiPromptTemplate: `Generate a B2 level fill-in-the-blanks exercise about {{topic}}.
Difficulty: {{difficulty}}
Create 8 sentences with gaps where students must fill in the correct form.
Each gap should test: {{grammarPoint}}

Include:
- Context sentences with meaningful gaps
- Acceptable answers (including variations)
- Clear explanations
- Points per question

Format as JSON with questions array.`,
    supportedLevels: ['A2', 'B1', 'B2', 'C1', 'C2'],
    difficultySettings: {
      easy: 'Single word gaps with obvious context',
      medium: 'Multi-word phrases or verb forms',
      hard: 'Complex transformations or idiomatic expressions'
    }
  },
  {
    id: 'key-word-transformation',
    name: 'Key Word Transformation',
    nameES: 'Transformación con Palabra Clave',
    category: 'exam-practice',
    description: 'Rewrite sentences using a given key word',
    descriptionES: 'Reescribe oraciones usando una palabra clave dada',
    icon: '🔑',
    estimatedTime: 10,
    aiPromptTemplate: `Generate 5 B2 First (FCE) Key Word Transformation exercises.
Focus on: {{topic}}
Difficulty: {{difficulty}}

Each transformation must:
1. Have a sentence to transform
2. Include a KEY WORD in capitals
3. Provide the start of the answer
4. Test specific grammar/vocabulary points
5. Require 2-5 words including the key word

Format as JSON with transformations array including:
- sentence (original)
- keyWord (in capitals)
- startOfAnswer
- correctAnswer
- explanation
- points (2 points each for Cambridge standard)`,
    supportedLevels: ['B2', 'C1'],
    difficultySettings: {
      easy: 'Basic transformations with common structures',
      medium: 'Standard FCE difficulty with multiple possible structures',
      hard: 'Complex transformations testing advanced grammar'
    }
  },
  {
    id: 'word-formation',
    name: 'Word Formation',
    nameES: 'Formación de Palabras',
    category: 'vocabulary',
    description: 'Transform words to fit the context',
    descriptionES: 'Transforma palabras para que encajen en el contexto',
    icon: '📝',
    estimatedTime: 8,
    aiPromptTemplate: `Generate a B2 Word Formation exercise (FCE Part 3 style).
Topic: {{topic}}
Difficulty: {{difficulty}}

Create a text passage (100-150 words) with 8 gaps.
Each gap has a base word that must be transformed (prefix, suffix, negative, etc.).

Include:
- Engaging passage text with (1)___, (2)___, etc.
- 8 base words requiring transformation
- For each gap: correct answer, acceptable variations, transformation type, explanation
- Focus areas (word patterns being tested)

Format as JSON with text and questions array.`,
    supportedLevels: ['B1', 'B2', 'C1'],
    difficultySettings: {
      easy: 'Common suffixes and prefixes',
      medium: 'Mix of derivations and negative forms',
      hard: 'Less common transformations and double prefixes'
    }
  },
  {
    id: 'reading-comprehension',
    name: 'Reading Comprehension',
    nameES: 'Comprensión Lectora',
    category: 'reading',
    description: 'Read a passage and answer questions',
    descriptionES: 'Lee un texto y responde preguntas',
    icon: '📖',
    estimatedTime: 15,
    aiPromptTemplate: `Generate a B2 reading comprehension exercise.
Topic: {{topic}}
Difficulty: {{difficulty}}

Create:
1. An authentic-style passage (250-300 words) about {{topic}}
2. 6-8 comprehension questions testing:
   - Main idea
   - Specific details
   - Inference
   - Vocabulary in context
   - Author's purpose/tone

ALL QUESTIONS MUST BE MULTIPLE-CHOICE (4 options) or TRUE/FALSE
NO short-answer questions - only test format questions

Include:
- title
- text passage
- wordCount
- estimatedReadingTime (minutes)
- questions array with:
  * multiple-choice questions (4 options each)
  * true/false questions
  * Each with detailed explanation

Make HARD questions by:
- Using distractors that seem plausible
- Requiring inference and deep comprehension
- Testing vocabulary in context
- Including "NOT mentioned" type questions

Format as JSON.`,
    supportedLevels: ['A2', 'B1', 'B2', 'C1', 'C2'],
    difficultySettings: {
      easy: 'Clear, straightforward text with explicit information',
      medium: 'Some inference required, mixed question types',
      hard: 'Complex ideas, implicit information, challenging vocabulary'
    }
  },
  {
    id: 'sentence-building',
    name: 'Sentence Building',
    nameES: 'Constructor de Oraciones',
    category: 'grammar',
    description: 'Arrange words to form correct sentences',
    descriptionES: 'Ordena las palabras para formar oraciones correctas',
    icon: '🔨',
    estimatedTime: 6,
    aiPromptTemplate: `Generate 5 sentence building exercises for B2 level.
Focus on: {{topic}}
Difficulty: {{difficulty}}

Each exercise should:
- Provide shuffled words that form one grammatically correct sentence
- Include punctuation marks as separate items
- Test specific grammar structures ({{grammarPoint}})
- Include Spanish translation
- Provide a hint about the structure
- Award 2 points per sentence

Format as JSON with sentences array containing:
- id
- words (shuffled array)
- correctOrder (proper sequence)
- translation (Spanish)
- hint
- points`,
    supportedLevels: ['A2', 'B1', 'B2', 'C1'],
    difficultySettings: {
      easy: 'Short sentences (6-8 words) with clear structure',
      medium: 'Medium sentences (9-12 words) with subordinate clauses',
      hard: 'Long complex sentences (13+ words) with multiple clauses'
    }
  },
  {
    id: 'writing-analysis',
    name: 'Writing Analysis',
    nameES: 'Análisis de Escritura',
    category: 'writing',
    description: 'Analyze and choose the best writing options',
    descriptionES: 'Analiza y elige las mejores opciones de escritura',
    icon: '✍️',
    estimatedTime: 10,
    aiPromptTemplate: `Generate a B2 writing analysis exercise (HARD difficulty).
Topic: {{topic}}
Difficulty: {{difficulty}}

Create 6-8 challenging multiple-choice questions about writing skills:

Question types to include:
1. **Best sentence to start/conclude**: Given a context, which opening/closing is most appropriate
2. **Coherence & cohesion**: Which linking word/phrase fits best
3. **Register & tone**: Which option matches the required formality level
4. **Redundancy elimination**: Which version is more concise and clear
5. **Paragraph organization**: Which sentence order is most logical
6. **Style appropriateness**: Which phrase suits the text type (email/article/essay)
7. **Error identification**: Which sentence has NO errors (others have subtle mistakes)
8. **Vocabulary precision**: Which word choice is most accurate

Make questions DIFFICULT by:
- Using subtle distinctions between options
- Testing advanced vocabulary nuances
- Including common errors as distractors
- Requiring understanding of text type conventions

Format as JSON:
{
  "title": "Writing Analysis: [topic]",
  "instructions": "Choose the best option for each writing situation",
  "questions": [
    {
      "id": "q1",
      "type": "multiple-choice",
      "context": "Brief context or writing situation",
      "question": "Question text",
      "options": ["A", "B", "C", "D"],
      "correctAnswer": "A",
      "explanation": "Why this option is best and why others are incorrect",
      "points": 2
    }
  ]
}`,
    supportedLevels: ['B1', 'B2', 'C1'],
    difficultySettings: {
      easy: 'Clear errors and obvious best choices',
      medium: 'Some subtle distinctions in register and style',
      hard: 'Very subtle differences requiring deep understanding of writing conventions'
    }
  },
  {
    id: 'speaking-analysis',
    name: 'Speaking Analysis',
    nameES: 'Análisis de Expresión Oral',
    category: 'speaking',
    description: 'Analyze and choose the best speaking options',
    descriptionES: 'Analiza y elige las mejores opciones de expresión oral',
    icon: '🎤',
    estimatedTime: 8,
    aiPromptTemplate: `Generate a B2 speaking analysis exercise (HARD difficulty).
Topic: {{topic}}
Difficulty: {{difficulty}}

Create 6-8 challenging multiple-choice questions about spoken English:

Question types to include:
1. **Appropriate response**: Given a conversation context, which reply is most natural
2. **Formal vs informal register**: Which option matches the speaking situation
3. **Idiomatic expressions**: Which phrase is used correctly in context
4. **Discourse markers**: Which connector/filler is most appropriate
5. **Politeness & tact**: Which version is most diplomatic/appropriate
6. **Pronunciation-related**: Which word stress/intonation pattern is correct (describe in text)
7. **Colloquial language**: Which informal expression fits the casual context
8. **Turn-taking phrases**: Which phrase appropriately manages conversation flow

Make questions DIFFICULT by:
- Using very similar sounding options with different meanings
- Testing subtle differences in formality/politeness
- Including British vs American usage distinctions
- Requiring cultural understanding of speaking conventions

Each question should present a speaking scenario with 4 options.

Format as JSON:
{
  "title": "Speaking Analysis: [topic]",
  "instructions": "Choose the most appropriate option for each speaking situation",
  "questions": [
    {
      "id": "q1",
      "type": "multiple-choice",
      "scenario": "Speaking situation/context",
      "question": "Question text",
      "options": ["A", "B", "C", "D"],
      "correctAnswer": "A",
      "explanation": "Why this is the best choice in this speaking context",
      "points": 2
    }
  ]
}`,
    supportedLevels: ['A2', 'B1', 'B2', 'C1', 'C2'],
    difficultySettings: {
      easy: 'Clear formal/informal distinctions',
      medium: 'Subtle differences in politeness and appropriacy',
      hard: 'Very nuanced social and cultural speaking conventions'
    }
  },
  {
    id: 'word-search',
    name: 'Word Search',
    nameES: 'Sopa de Letras',
    category: 'vocabulary',
    description: 'Find the hidden words in the grid',
    descriptionES: 'Encuentra las palabras ocultas en la cuadrícula',
    icon: '🔍',
    estimatedTime: 5,
    aiPromptTemplate: `Generate a word search exercise for level {{level}}.
Topic: {{topic}}
Difficulty: {{difficulty}}

Include 8-12 words related to the topic.
Format as JSON:
{
  "title": "Word Search: [topic]",
  "instructions": "Find the hidden words in the grid",
  "words": ["WORD1", "WORD2", ...],
  "gridSize": 10,
  "clues": [
    {"word": "WORD1", "clue": "Optional clue in Spanish/English"}
  ]
}`,
    supportedLevels: ['A1', 'A2', 'B1'],
    difficultySettings: {
      easy: 'Small grid (8x8), horizontal and vertical only',
      medium: 'Standard grid (10x10), includes diagonal',
      hard: 'Large grid (12x12), backwards and overlapping words'
    }
  },
  {
    id: 'crossword',
    name: 'Crossword',
    nameES: 'Crucigrama',
    category: 'vocabulary',
    description: 'Solve the crossword puzzle using the clues',
    descriptionES: 'Resuelve el crucigrama usando las pistas',
    icon: '🧩',
    estimatedTime: 10,
    aiPromptTemplate: `Generate a crossword exercise for level {{level}}.
Topic: {{topic}}
Difficulty: {{difficulty}}

Include 6-10 words with clues.
Format as JSON:
{
  "title": "Crossword: [topic]",
  "instructions": "Complete the crossword puzzle",
  "items": [
    {
      "word": "APPLE",
      "clue": "A red or green fruit",
      "direction": "across",
      "row": 0,
      "col": 0
    }
  ]
}`,
    supportedLevels: ['A1', 'A2', 'B1', 'B2'],
    difficultySettings: {
      easy: 'Simple words and direct clues',
      medium: 'Common vocabulary with descriptive clues',
      hard: 'Advanced vocabulary and cryptic/challengive clues'
    }
  },
  {
    id: 'pronunciation-practice',
    name: 'Pronunciation Practice',
    nameES: 'Práctica de Pronunciación',
    category: 'pronunciation',
    description: 'Practice pronunciation with AI feedback',
    descriptionES: 'Practica pronunciación con feedback de IA',
    icon: '🗣️',
    estimatedTime: 8,
    aiPromptTemplate: `Generate pronunciation practice for B2 level.
Focus: {{pronunciationFocus}} (word stress/sentence stress/intonation/minimal pairs)
Difficulty: {{difficulty}}

Create:
1. Title and clear instructions in Spanish
2. 5-8 target sentences focusing on {{pronunciationFocus}}
3. For each sentence:
   - English sentence
   - Spanish translation
   - Phonetic transcription (IPA) for key words
   - Audio model URL placeholder
   - Specific pronunciation tips
4. Focus points (what to emphasize)
5. Common mistakes to avoid

Format as JSON with targetSentences array.`,
    supportedLevels: ['A1', 'A2', 'B1', 'B2', 'C1'],
    difficultySettings: {
      easy: 'Clear, slow-paced sentences with common sounds',
      medium: 'Natural speed with challenging sound combinations',
      hard: 'Fast-paced with tongue twisters and difficult clusters'
    }
  },
  {
    id: 'multiple-choice-cloze',
    name: 'Multiple Choice Cloze',
    nameES: 'Cloze de Opción Múltiple',
    category: 'exam-practice',
    description: 'Choose correct words to complete a text',
    descriptionES: 'Elige las palabras correctas para completar un texto',
    icon: '📄',
    estimatedTime: 10,
    aiPromptTemplate: `Generate an FCE-style Multiple Choice Cloze (Part 1).
Topic: {{topic}}
Difficulty: {{difficulty}}

Create:
1. Engaging text passage (150-170 words) with 8 gaps
2. Each gap has 4 options testing:
   - Collocations
   - Fixed phrases
   - Idioms
   - Complementation
   - Phrasal verbs
   - Semantic precision

For each gap:
- 4 plausible options
- Clear correct answer
- Explanation of why it's correct
- Why distractors are wrong

Format as JSON with text and questions array.`,
    supportedLevels: ['B2', 'C1'],
    difficultySettings: {
      easy: 'Common collocations and frequent phrases',
      medium: 'Standard FCE difficulty with subtle distinctions',
      hard: 'Low-frequency collocations and advanced phrases'
    }
  },
  {
    id: 'dictation',
    name: 'Intelligent Dictation',
    nameES: 'Dictado Inteligente',
    category: 'dictation',
    description: 'Listen and transcribe sentences with multi-accent support',
    descriptionES: 'Escucha y transcribe oraciones con soporte multi-acento',
    icon: '👂',
    estimatedTime: 8,
    aiPromptTemplate: `Generate a B2 level dictation exercise about {{topic}}.
Difficulty: {{difficulty}}

Create 5-8 sentences that:
1. Use relevant B2 vocabulary and grammar
2. Vary in length and complexity
3. Are natural and authentic

Include:
- The full English sentence
- Spanish translation
- Key vocabulary words tested
- Difficulty rating for each sentence

Format as JSON with sentences array:
{
  "title": "Dictation: [Topic]",
  "sentences": [
    {
      "id": "s1",
      "text": "The sentence to transcribe",
      "translation": "La traducción",
      "difficulty": "medium"
    }
  ]
}`,
    supportedLevels: ['A1', 'A2', 'B1', 'B2', 'C1', 'C2'],
    difficultySettings: {
      easy: 'Short, clear sentences with basic vocabulary',
      medium: 'Natural length with standard B2 structures',
      hard: 'Longer, complex sentences with idiomatic language'
    }
  },
  {
    id: 'open-cloze',
    name: 'Open Cloze',
    nameES: 'Cloze Abierto',
    category: 'exam-practice',
    description: 'Think of the correct word to fill each gap',
    descriptionES: 'Piensa en la palabra correcta para llenar cada espacio',
    icon: '📝',
    estimatedTime: 12,
    aiPromptTemplate: `Generate an FCE-style Open Cloze (Part 2).
Topic: {{topic}}
Difficulty: {{difficulty}}

Create:
1. Engaging text passage (150-170 words) with 8 gaps
2. Each gap requires ONLY ONE word
3. Focus on grammar words: prepositions, articles, pronouns, connectors, auxiliary verbs, etc.

For each gap:
- Clear correct answer
- Acceptable alternatives (if any)
- Explanation of why it's correct

Format as JSON with text and questions array.`,
    supportedLevels: ['B2', 'C1'],
    difficultySettings: {
      easy: 'Basic grammatical structures and common connectors',
      medium: 'Standard FCE difficulty with more subtle grammar points',
      hard: 'Advanced grammatical structures and less frequent connectors'
    }
  },
  {
    id: 'gapped-text',
    name: 'Gapped Text',
    nameES: 'Texto con Huecos (Párrafos)',
    category: 'exam-practice',
    description: 'Choose the correct sentence to fill the gaps in a text',
    descriptionES: 'Elige la oración correcta para llenar los huecos en un texto',
    icon: '🧩',
    estimatedTime: 15,
    aiPromptTemplate: `Generate an FCE-style Gapped Text (Part 6).
Topic: {{topic}}
Difficulty: {{difficulty}}

Create:
1. A coherent text with 6 sentences removed (gaps numbered 1-6)
2. 7 sentences (A-G) that could fit into the gaps (one extra sentence is a distractor)
3. The text should have clear cohesion markers (pronouns, linkers, reference words)

Include:
- Full text with markers [1], [2], etc.
- Sentences A-G
- Correct mapping for each gap
- Detailed explanation for each choice referring to cohesion markers

Format as JSON with text, options, and questions array.`,
    supportedLevels: ['B2', 'C1'],
    difficultySettings: {
      easy: 'Clear reference words and obvious logical flow',
      medium: 'Standard FCE difficulty with subtle cohesion markers',
      hard: 'Complex logical flow and sophisticated reference words'
    }
  },
  {
    id: 'multiple-matching',
    name: 'Multiple Matching',
    nameES: 'Emparejamiento Múltiple',
    category: 'exam-practice',
    description: 'Match statements to the correct section of a text',
    descriptionES: 'Empareja afirmaciones con la sección correcta de un texto',
    icon: '↔️',
    estimatedTime: 15,
    aiPromptTemplate: `Generate an FCE-style Multiple Matching exercise (Part 7).
Topic: {{topic}}
Difficulty: {{difficulty}}

Create:
1. A text divided into 4-5 sections (A, B, C, D, E)
2. 10 statements/questions that must be matched to one of the sections
3. Ensure paraphrasing is used between the statements and the text

Include:
- Sections A-E with titles/labels
- 10 statements
- Correct section for each statement
- Explanation with the relevant quote from the text

Format as JSON with sections, statements, and answers array.`,
    supportedLevels: ['B2', 'C1'],
    difficultySettings: {
      easy: 'Simple paraphrasing and clear keywords',
      medium: 'Standard FCE difficulty with nuanced paraphrasing',
      hard: 'Complex abstract ideas and very subtle paraphrasing'
    }
  },
  {
    id: 'roleplay',
    name: 'AI Roleplay',
    nameES: 'Roleplay con IA',
    category: 'roleplay',
    description: 'Interactive conversation with AI in real-world scenarios',
    descriptionES: 'Conversación interactiva con IA en escenarios reales',
    icon: '🎭',
    estimatedTime: 12,
    aiPromptTemplate: `Generate an AI Roleplay scenario for B2 level.
Topic: {{topic}}
Difficulty: {{difficulty}}

Create a scenario where the student must interact with an AI character.
Scenario details:
- AI Character Name and Role
- Student's Role
- Setting/Context
- Main Goal of the conversation
- 3-5 specific points/tasks to cover

Include a 'startingMessage' from the AI to begin the conversation.

Format as JSON:
{
  "scenario": {
    "title": "Scenario Title",
    "description": "General description",
    "aiCharacter": {
      "name": "Name",
      "role": "Role description",
      "personality": "Personality traits"
    },
    "studentRole": "What the student should do",
    "context": "The setting",
    "goal": "What to achieve",
    "tasks": ["Task 1", "Task 2"],
    "startingMessage": "Hello! How can I help you today?"
  }
}`,
    supportedLevels: ['B1', 'B2', 'C1', 'C2'],
    difficultySettings: {
      easy: 'Simple social interactions with helpful AI',
      medium: 'Professional or slightly challenging scenarios',
      hard: 'Debates, negotiations, or complex problem-solving'
    }
  },
  {
    id: 'ielts-graph-description',
    name: 'IELTS Graph Description',
    nameES: 'IELTS Descripción de Gráficos',
    category: 'exam-practice',
    description: 'Describe and analyze data from a graph or chart (IELTS Task 1)',
    descriptionES: 'Describe y analiza datos de un gráfico o tabla (IELTS Tarea 1)',
    icon: '📊',
    estimatedTime: 20,
    aiPromptTemplate: `Generate an IELTS Academic Writing Task 1 exercise.
Topic: {{topic}}
Difficulty: {{difficulty}}

Create:
1. A detailed description of a data visualization (bar chart, line graph, pie chart, or table)
2. The data points to be included in the description
3. Instructions for the student to write a summary of at least 150 words
4. A model answer that demonstrates:
   - Clear overview of main trends
   - Accurate data reporting
   - Appropriate academic vocabulary for trends and comparisons
   - Logical organization

Format as JSON with data, instructions, and modelAnswer.`,
    supportedLevels: ['B2', 'C1', 'C2'],
    difficultySettings: {
      easy: 'Simple trends with clear data points',
      medium: 'Multiple categories or fluctuating trends',
      hard: 'Complex data with subtle correlations and multiple charts'
    }
  },
  {
    id: 'ielts-true-false-not-given',
    name: 'IELTS True/False/Not Given',
    nameES: 'IELTS Verdadero/Falso/No Mencionado',
    category: 'exam-practice',
    description: 'Determine if statements agree with the information in the text',
    descriptionES: 'Determina si las afirmaciones coinciden con la información del texto',
    icon: '❓',
    estimatedTime: 15,
    aiPromptTemplate: `Generate an IELTS-style Reading exercise: True/False/Not Given.
Topic: {{topic}}
Difficulty: {{difficulty}}

Create:
1. A complex academic text passage (300-400 words)
2. 6-8 statements about the text
3. For each statement, determine if it is:
   - TRUE: the statement agrees with the information
   - FALSE: the statement contradicts the information
   - NOT GIVEN: there is no information on this

Include:
- The text passage
- Questions array with statement, answer, and a detailed explanation in Spanish justifying why it's T/F/NG based on specific parts of the text.

Format as JSON.`,
    supportedLevels: ['B2', 'C1', 'C2'],
    difficultySettings: {
      easy: 'Explicit information with clear synonyms',
      medium: 'Paraphrased information requiring careful reading',
      hard: 'Subtle distinctions and complex paraphrasing, testing the difference between False and Not Given'
    }
  },
  {
    id: 'toefl-integrated-reading-listening',
    name: 'TOEFL Integrated Task',
    nameES: 'Tarea Integrada TOEFL',
    category: 'exam-practice',
    description: 'Read a passage, listen to a lecture, and synthesize the information',
    descriptionES: 'Lee un texto, escucha una lección y sintetiza la información',
    icon: '🎓',
    estimatedTime: 25,
    aiPromptTemplate: `Generate a TOEFL-style Integrated Writing/Speaking task.
Topic: {{topic}}
Difficulty: {{difficulty}}

Create:
1. A Reading Passage (250 words) presenting an academic argument or theory
2. A script for a Listening Passage (Lecture) that provides opposing points or additional context
3. A specific prompt asking the student to explain how the lecture challenges or supports the reading
4. Key points from both passages that should be included in the response
5. A model response

Format as JSON with readingText, listeningScript, prompt, and keyPoints.`,
    supportedLevels: ['B2', 'C1', 'C2'],
    difficultySettings: {
      easy: 'Clearly contrasting points with simple academic vocabulary',
      medium: 'Nuanced arguments with standard academic complexity',
      hard: 'Complex abstract theories with subtle points of contrast and sophisticated vocabulary'
    }
  },
  {
    id: 'oxford-use-of-english',
    name: 'Oxford Use of English',
    nameES: 'Oxford Uso del Inglés',
    category: 'exam-practice',
    description: 'Test grammar and vocabulary in context (Oxford Online Placement Test style)',
    descriptionES: 'Evalúa gramática y vocabulario en contexto (estilo Oxford Online Placement Test)',
    icon: '🇬🇧',
    estimatedTime: 12,
    aiPromptTemplate: `Generate an Oxford Online Placement Test style Use of English exercise.
Topic: {{topic}}
Level: {{level}}
Difficulty: {{difficulty}}

Include 10-12 questions focusing on:
1. Short conversations: Choose the most natural response
2. Gap-fills: Choose the correct word for a short sentence context
3. Meaning identification: Choose the correct meaning of a phrase or sentence

Make it adaptive in feel by varying difficulty within the set if requested.

Format as JSON with a questions array.`,
    supportedLevels: ['A1', 'A2', 'B1', 'B2', 'C1', 'C2'],
    difficultySettings: {
      easy: 'Basic daily interactions and simple grammar',
      medium: 'Natural idiomatic language and standard grammar',
      hard: 'Highly idiomatic, subtle grammar points, and complex social context'
    }
  },
  {
    id: 'ai-mission',
    name: 'AI Mission',
    nameES: 'Misión con IA',
    category: 'ai-lab',
    description: 'Immersive goal-oriented mission with AI interaction',
    descriptionES: 'Misión inmersiva orientada a objetivos con interacción de IA',
    icon: '🚀',
    estimatedTime: 10,
    aiPromptTemplate: `You are an AI Mission Master for an English learning platform.
Topic: {{topic}}
Level: {{level}}
Difficulty: {{difficulty}}

Generate a mission briefing in JSON format.
The mission should have a clear goal (e.g., "Negotiate a 10% discount" or "Check in to a hospital").
Include success criteria that the user must meet.

Format as JSON:
{
  "missionId": "m1",
  "title": "Mission Title",
  "briefing": "Description of the mission and goal in Spanish",
  "goal": "Specific goal in English",
  "persona": {
    "name": "AI Character Name",
    "avatar": "Emoji",
    "personality": "Personality description in English",
    "accent": "US/UK/AU etc",
    "role": "Role description"
  },
  "initialMessage": "First message from the AI character to start the conversation",
  "successCriteria": [
    "Criterion 1",
    "Criterion 2"
  ]
}`,
    supportedLevels: ['A1', 'A2', 'B1', 'B2', 'C1', 'C2'],
    difficultySettings: {
      easy: 'Simple goals with clear instructions and helpful AI assistance',
      medium: 'Moderate goals requiring natural language use and problem solving',
      hard: 'Complex goals with challenging AI personas and high precision requirements'
    }
  }
];

import { B2_GRAMMAR, B2_TOPICS } from './b2-official-syllabus';

// ============================================
// AI MISSION DEFINITIONS
// ============================================

export interface AIMission {
  id: string;
  title: string;
  briefing: string;
  goal: string;
  sector: 'tech' | 'marketing' | 'travel' | 'exams' | 'finance' | 'healthcare' | 'general';
  level: CEFRLevel;
  difficulty: DifficultyLevel;
  persona: {
    name: string;
    avatar: string;
    personality: string;
    accent: string;
    role: string;
  };
  initialMessage: string;
  successCriteria: string[];
}

export const MISSION_CATALOG: AIMission[] = [
  {
    id: 'tech-agile-meeting',
    title: 'Daily Stand-up Delay',
    sector: 'tech',
    level: 'B2',
    difficulty: 'medium',
    briefing: 'Debes explicar a tu equipo por qué el desarrollo de la nueva funcionalidad se ha retrasado y proponer una solución realista.',
    goal: 'Explain the technical delay and propose a mitigation plan to the product owner.',
    persona: {
      name: 'Sarah',
      avatar: '👩‍💻',
      personality: 'Result-oriented, professional, but supportive.',
      accent: 'US',
      role: 'Senior Product Owner'
    },
    initialMessage: "Hi team! Let's start the stand-up. I noticed the 'Authentication Module' is still in progress. What happened there?",
    successCriteria: [
      "Explain the root cause of the delay",
      "Propose a concrete solution or timeline",
      "Maintain a professional tone"
    ]
  },
  {
    id: 'travel-refund',
    title: 'The Cancelled Flight',
    sector: 'travel',
    level: 'B1',
    difficulty: 'easy',
    briefing: 'Tu vuelo a Londres ha sido cancelado. Debes hablar con el agente de la aerolínea para conseguir un reembolso o un vuelo alternativo hoy mismo.',
    goal: 'Negotiate an alternative flight or a full refund with the airline agent.',
    persona: {
      name: 'Mark',
      avatar: '👨‍✈️',
      personality: 'Stressed, follows protocol strictly, but can be persuaded.',
      accent: 'UK',
      role: 'Airline Ground Agent'
    },
    initialMessage: "Next in line! Yes, how can I help you? As you know, all flights to London are currently grounded due to the weather.",
    successCriteria: [
      "Explain your situation clearly",
      "Request a specific alternative or refund",
      "Remain polite but firm"
    ]
  },
  {
    id: 'marketing-pitch',
    title: 'The Viral Campaign Pitch',
    sector: 'marketing',
    level: 'C1',
    difficulty: 'hard',
    briefing: 'Tienes que convencer al Director de Marketing de que tu idea para la campaña de redes sociales es mejor que la de la agencia externa.',
    goal: 'Persuade the CMO to adopt your social media strategy over the current one.',
    persona: {
      name: 'David',
      avatar: '👨‍💼',
      personality: 'Skeptical, values data over intuition, very busy.',
      accent: 'AU',
      role: 'Chief Marketing Officer'
    },
    initialMessage: "You have five minutes. Why should we spend another €50,000 on your 'influence' idea when our current agency has 20 years of experience?",
    successCriteria: [
      "Present data-backed arguments",
      "Address the skepticism directly",
      "Use advanced marketing vocabulary"
    ]
  },
  {
    id: 'finance-budget-cut',
    title: 'The Quarterly Review',
    sector: 'finance',
    level: 'B2',
    difficulty: 'hard',
    briefing: 'Debes defender el presupuesto de tu departamento ante el CFO, quien quiere recortarlo un 20%.',
    goal: 'Maintain at least 90% of your original budget by justifying your expenses.',
    persona: {
      name: 'Robert',
      avatar: '💹',
      personality: 'Cold, analytical, focused on the bottom line.',
      accent: 'UK',
      role: 'Chief Financial Officer'
    },
    initialMessage: "Looking at your department's projected spend for Q3, it's significantly higher than last year. I'm afraid we need to cut your budget by 20% effective immediately. What's your take on this?",
    successCriteria: [
      "Justify essential expenditures",
      "Propose alternative minor cuts",
      "Use financial terminology accurately"
    ]
  },
  {
    id: 'healthcare-emergency',
    title: 'The ER Intake',
    sector: 'healthcare',
    level: 'A2',
    difficulty: 'easy',
    briefing: 'Has llegado a urgencias con un fuerte dolor abdominal. Debes explicar tus síntomas a la enfermera de triaje.',
    goal: 'Clearly describe your symptoms and medical history to get admitted.',
    persona: {
      name: 'Nurse Elena',
      avatar: '🏥',
      personality: 'Efficient, calm, asking direct questions.',
      accent: 'US',
      role: 'Triage Nurse'
    },
    initialMessage: "Hello, I'm Elena. I see you're in some pain. Can you tell me exactly where it hurts and when it started?",
    successCriteria: [
      "Describe the location and intensity of the pain",
      "Explain when the symptoms began",
      "Follow basic medical instructions"
    ]
  },
  {
    id: 'general-job-interview',
    title: 'The Dream Job',
    sector: 'general',
    level: 'B1',
    difficulty: 'medium',
    briefing: 'Estás en la entrevista final para el puesto de tus sueños. Debes demostrar por qué eres el candidato ideal.',
    goal: 'Successfully answer behavioral questions and showcase your strengths.',
    persona: {
      name: 'Mr. Thompson',
      avatar: '💼',
      personality: 'Professional, observant, looks for soft skills.',
      accent: 'US',
      role: 'HR Manager'
    },
    initialMessage: "Welcome. We've seen your CV, and it's impressive. Tell me, what's been your biggest professional challenge so far and how did you handle it?",
    successCriteria: [
      "Use the STAR method for your answer",
      "Highlight a relevant strength",
      "Maintain professional etiquette"
    ]
  },
  {
    id: 'travel-hotel-complaint',
    title: 'Room 404 Nightmare',
    sector: 'travel',
    level: 'B1',
    difficulty: 'medium',
    briefing: 'Tu habitación de hotel está sucia y el aire acondicionado no funciona. Debes conseguir un cambio de habitación o una compensación.',
    goal: 'Convince the receptionist to move you to a better room without extra charge.',
    persona: {
      name: 'Sofia',
      avatar: '🏨',
      personality: 'Polite but dismissive, trying to avoid extra work.',
      accent: 'ES',
      role: 'Hotel Receptionist'
    },
    initialMessage: "Good evening! Is everything alright with your room? You look a bit upset.",
    successCriteria: [
      "List the specific problems with the room",
      "Request a specific resolution (upgrade/change)",
      "Express dissatisfaction politely"
    ]
  },
  {
    id: 'tech-code-review',
    title: 'The Critical Bug',
    sector: 'tech',
    level: 'C1',
    difficulty: 'hard',
    briefing: 'Has encontrado un error crítico de seguridad en el código de un compañero Senior. Debes explicárselo sin ofenderle.',
    goal: 'Convince the Senior Developer to rewrite the vulnerable function.',
    persona: {
      name: 'Alex',
      avatar: '🛡️',
      personality: 'Proud of their code, slightly defensive, but respects logic.',
      accent: 'RU',
      role: 'Senior Backend Developer'
    },
    initialMessage: "Hey, I saw you left some comments on my PR. That logic has been working for years, why do you want to change it now?",
    successCriteria: [
      "Explain the security vulnerability clearly",
      "Propose a more secure alternative",
      "Maintain a collaborative, non-confrontational tone"
    ]
  },
  {
    id: 'exams-ielts-speaking',
    title: 'IELTS Part 3: Environment',
    sector: 'exams',
    level: 'B2',
    difficulty: 'medium',
    briefing: 'Estás en la Parte 3 del examen oral de IELTS. Debes discutir temas abstractos sobre el medio ambiente.',
    goal: 'Provide long, well-structured answers using complex grammar.',
    persona: {
      name: 'Examiner James',
      avatar: '📝',
      personality: 'Formal, neutral, follows the script.',
      accent: 'UK',
      role: 'IELTS Examiner'
    },
    initialMessage: "Let's move on to Part 3. We've been talking about places you like. I'd like to discuss the environment. Do you think individuals can really make a difference in protecting the planet?",
    successCriteria: [
      "Use linkers to structure the response",
      "Provide specific examples",
      "Speculate about the future using conditionals"
    ]
  },
  {
    id: 'marketing-influencer-deal',
    title: 'The Influencer Contract',
    sector: 'marketing',
    level: 'B2',
    difficulty: 'medium',
    briefing: 'Eres el manager de una marca y debes negociar el precio de una colaboración con un influencer famoso.',
    goal: 'Close a deal for 3 posts at under $2,000 total.',
    persona: {
      name: 'Chloe',
      avatar: '📸',
      personality: 'High energy, knows her value, wants the best deal.',
      accent: 'US',
      role: 'Content Creator'
    },
    initialMessage: "Hey! I love your brand, but my standard rate is $1,500 per post. My engagement is at an all-time high right now. What can you offer?",
    successCriteria: [
      "Negotiate a bundle deal (multiple posts)",
      "Justify a lower rate using ROI arguments",
      "Set clear deliverables"
    ]
  },
  {
    id: 'general-flatmate-conflict',
    title: 'The Messy Flatmate',
    sector: 'general',
    level: 'A2',
    difficulty: 'easy',
    briefing: 'Tu compañero de piso nunca limpia la cocina. Debes hablar con él para establecer reglas claras.',
    goal: 'Agree on a cleaning schedule without damaging the friendship.',
    persona: {
      name: 'Jake',
      avatar: '🍕',
      personality: 'Relaxed, forgetful, hates conflict.',
      accent: 'US',
      role: 'Flatmate'
    },
    initialMessage: "Oh, hey! Sorry about the dishes, I was going to do them... eventually. Do you want to watch some TV?",
    successCriteria: [
      "Explain how the mess affects you",
      "Propose a specific cleaning day or rule",
      "Keep the conversation friendly"
    ]
  },
  {
    id: 'finance-loan-application',
    title: 'Startup Funding',
    sector: 'finance',
    level: 'C1',
    difficulty: 'hard',
    briefing: 'Estás pidiendo un préstamo para tu nueva startup tecnológica. Debes convencer al director del banco.',
    goal: 'Secure a $50,000 loan with a low interest rate.',
    persona: {
      name: 'Ms. Sterling',
      avatar: '🏦',
      personality: 'Conservative, risk-averse, looks for solid business plans.',
      accent: 'UK',
      role: 'Bank Manager'
    },
    initialMessage: "The tech sector is quite volatile lately. Why should the bank take a risk on your specific venture? Your collateral seems a bit low.",
    successCriteria: [
      "Explain the unique value proposition",
      "Demonstrate a clear path to profitability",
      "Negotiate terms professionally"
    ]
  }
];

// ================= ============================
// TEMAS DE GRAMÁTICA B2 (Para generación)
// ============================================

export const B2_GRAMMAR_TOPICS = B2_GRAMMAR.map(g => ({
  id: g.id,
  name: g.name,
  nameES: g.description // Usamos la descripción como nombre en español si no hay otro
}));

// ============================================
// TEMAS DE VOCABULARIO B2
// ============================================

export const B2_VOCABULARY_TOPICS = B2_TOPICS.map(t => ({
  id: t.id,
  name: t.name,
  nameES: t.name // Aquí podrías mapear a nombres en español si los tuvieras
}));

// ============================================
// HELPER FUNCTIONS
// ============================================

export function getExerciseTypeConfig(type: ExerciseType): ExerciseTypeConfig | undefined {
  return EXERCISE_TYPE_CATALOG.find(config => config.id === type);
}

export function getExercisesByCategory(category: ExerciseCategory): ExerciseTypeConfig[] {
  return EXERCISE_TYPE_CATALOG.filter(config => config.category === category);
}

export function getAllCategories(): ExerciseCategory[] {
  return Array.from(new Set(EXERCISE_TYPE_CATALOG.map(config => config.category)));
}

export interface GenerateExerciseRequest {
  exerciseType: ExerciseType;
  topic?: string;
  topicKeywords?: string[];
  difficulty: DifficultyLevel;
  level: CEFRLevel;
  count?: number; // Número de ejercicios a generar
  customPrompt?: string; // Prompt adicional del usuario
  recentErrors?: any[];
}

export interface GeneratedExercise {
  id: string;
  type: ExerciseType;
  category: ExerciseCategory;
  topic: string;
  difficulty: DifficultyLevel;
  level: CEFRLevel;
  content: any; // El contenido varía según el tipo
  createdAt: Date;
  estimatedTime: number;
  isFallback?: boolean;
}

// ============================================
// BASE INTERFACES FOR ALL EXERCISES
// ============================================

export interface Question {
  id: string;
  type: 'multiple-choice' | 'true-false' | 'fill-blank' | 'short-answer' | 'essay' | 'stress-identification' | 'minimal-pairs' | 'writing' | 'word-formation';
  question: string;
  options?: string[];
  correctAnswer: string | string[];
  acceptableAnswers?: string[];
  explanation?: string;
  points: number;
  rubric?: {
    content: number;
    organization: number;
    grammar: number;
    vocabulary: number;
  };
  minWords?: number;
  maxWords?: number;
  expectedConcepts?: string[];
}

export interface VoiceRecordingExercise {
  id: string;
  type: 'speaking' | 'pronunciation';
  title: string;
  instructions?: string;
  prompt?: string;
  prompts?: string[];
  expectedResponse?: string;
  expectedLength?: number;
  targetLevel?: string;
  targetText?: string;
  targetWords?: string[];
  timeLimit?: number;
  evaluationCriteria?: string[] | {
    pronunciation: boolean;
    fluency: boolean;
    grammar: boolean;
    vocabulary: boolean;
  };
  questions?: any[];
  modelAudioUrl?: string;
  hints?: string[];
}

export interface SpeakingPart1Question {
  id: string;
  question: string;
  followUp?: string;
  topic: string;
  suggestedDuration: number;
  sampleAnswer?: string;
}

export interface SpeakingPart1Exercise {
  id: string;
  type: 'speaking-part1';
  title: string;
  instructions: string;
  questions: SpeakingPart1Question[];
  timeLimit?: number;
}

export interface Photo {
  id?: string;
  imageUrl: string;
  description: string;
}

export interface SpeakingPart2Exercise {
  id: string;
  type: 'speaking-part2';
  title: string;
  instructions: string;
  photos: Photo[];
  comparisonPrompt: string;
  followUpQuestion: string;
  timeLimit?: number;
  tips?: string[];
}

export interface SpeakingOption {
  id: string;
  text: string;
  imageUrl?: string;
}

export interface SpeakingPart3Exercise {
  id: string;
  type: 'speaking-part3';
  title: string;
  instructions: string;
  scenario: string;
  question: string;
  options: SpeakingOption[];
  phase1Duration: number;
  phase2Duration: number;
  usefulPhrases?: string[];
}

export interface SpeakingPart4Question {
  id: string;
  question: string;
  topic: string;
  suggestedDuration: number;
}

export interface SpeakingPart4Exercise {
  id: string;
  type: 'speaking-part4';
  title: string;
  instructions: string;
  topic: string;
  questions: SpeakingPart4Question[];
  usefulExpressions?: string[];
  timeLimit?: number;
}

export interface TranscriptSentence {
  start: number;
  end: number;
  text: string;
  speaker?: string;
}

export interface ListeningExercise {
  id: string;
  type: 'listening';
  title: string;
  audioUrl: string;
  transcript?: string;
  structuredTranscript?: TranscriptSentence[];
  duration: number;
  questions: Question[];
  allowReplay: boolean;
  maxReplays?: number;
}

export interface ReadingExercise {
  id: string;
  type: 'reading';
  title: string;
  text?: string;
  readingText?: string;
  instructions?: string;
  wordCount?: number;
  readingTime?: number;
  questions: Question[];
  vocabularyHelp?: { word: string; definition: string }[];
}

export interface WritingExercise {
  id: string;
  type: 'writing';
  title: string;
  instructions?: string;
  prompt: string;
  targetLevel?: string;
  writingType?: 'essay' | 'article' | 'email' | 'review' | 'report' | 'description' | 'message' | 'letter' | 'story';
  minWords?: number;
  maxWords?: number;
  wordLimit?: { min: number; max: number };
  timeLimit?: number;
  rubric?: any;
  exampleResponse?: string;
  tips?: string[];
  questions?: any[];
}

export interface GrammarExercise {
  id: string;
  type: 'grammar';
  title: string;
  instructions?: string;
  grammarPoint?: string;
  explanation?: string;
  examples?: string[];
  questions: Question[];
}

export interface VocabularyExercise {
  id: string;
  type: 'vocabulary';
  title: string;
  instructions?: string;
  explanation?: string;
  vocabularySet?: { word: string; definition: string; example: string }[];
  words?: { word: string; definition: string; example: string }[];
  questions: Question[];
}

export interface PronunciationPracticeExercise {
  id: string;
  type: 'pronunciation-practice' | 'pronunciation';
  title: string;
  instructions?: string;
  prompt?: string;
  targetText?: string;
  modelAudioUrl?: string;
  hints?: string[];
  practiceType?: 'stress-identification' | 'minimal-pairs' | 'phoneme-recognition' | 'intonation';
  targetSentences?: {
    sentence?: string;
    text?: string;
    translation?: string;
    phonetic?: string;
    audioUrl?: string;
  }[];
  words?: {
    word: string;
    ipa?: string;
    stressPattern?: string;
    audioUrl?: string;
    tips?: string;
  }[];
  focusPoints?: string[];
  difficulty?: DifficultyLevel;
  timeLimit?: number;
  tips?: string[];
  questions?: Question[];
  exercises?: any[];
}

export type WordType = 'subject' | 'verb' | 'object' | 'adjective' | 'adverb' | 'preposition' | 'article' | 'auxiliary' | 'conjunction' | 'complement' | 'pronoun' | 'determiner';

export interface Word {
  id: string;
  text: string;
  type: WordType;
  hint?: string;
  translation?: string;
}

export interface SentenceBuildingChallenge {
  id: string;
  prompt: string;
  targetSentence: string;
  words: Word[];
  difficulty: DifficultyLevel;
  grammarFocus: string;
  tips: string[];
  points: number;
  acceptableVariations: string[];
}

export interface SentenceBuildingExercise {
  id: string;
  type: 'sentence-building';
  title: string;
  description: string;
  instructions: string;
  challenges: SentenceBuildingChallenge[];
  showHints: boolean;
  showTranslations: boolean;
  timeLimit: number;
}

export interface KeyWordTransformation {
  id: string;
  sentence?: string;
  question?: string;
  keyWord: string;
  startOfAnswer: string;
  correctAnswer: string;
  explanation: string;
  points: number;
}

export interface KeyWordTransformationExercise {
  id: string;
  type: 'key-word-transformation' | 'key-word-transformations';
  title: string;
  instructions: string;
  transformations: KeyWordTransformation[];
}

export interface WordFormation extends Partial<Question> {
  id: string;
  type: 'word-formation';
  question: string;
  gapNumber?: number;
  baseWord: string;
  correctAnswer: string;
  acceptableAnswers?: string[];
  explanation: string;
  wordType?: string;
  transformation?: string;
  points: number;
  hint?: string;
}

export interface WordFormationExercise {
  id: string;
  type: 'word-formation';
  title: string;
  instructions: string;
  explanation?: string;
  text?: string;
  questions: WordFormation[];
  focusAreas?: string[];
}

export interface ClozeQuestion {
  id: string;
  gapNumber: number;
  options: string[];
  correctAnswer: string;
  explanation: string;
  points: number;
}

export interface MultipleChoiceClozeExercise {
  id: string;
  type: 'multiple-choice-cloze';
  title: string;
  instructions: string;
  text: string;
  questions: ClozeQuestion[];
}

export interface SentenceCompletionExercise {
  id: string;
  type: 'sentence-completion';
  title: string;
  instructions: string;
  sentences: {
    id: string;
    prompt: string;
    correctCompletion: string;
    options?: string[];
    explanation?: string;
    points: number;
  }[];
}

export interface ErrorIdentificationExercise {
  id: string;
  type: 'error-identification';
  title: string;
  instructions: string;
  sentences: {
    id: string;
    sentence: string;
    hasError: boolean;
    errorWord?: string;
    correction?: string;
    explanation?: string;
    points: number;
  }[];
}

export interface ParaphrasingExercise {
  id: string;
  type: 'paraphrasing' | 'paraphrase';
  title: string;
  instructions: string;
  items: {
    id: string;
    originalSentence: string;
    correctParaphrase: string;
    alternatives?: string[];
    explanation?: string;
    points: number;
  }[];
}

export interface CollocationMatchingExercise {
  id: string;
  type: 'collocation-matching' | 'matching';
  title: string;
  instructions: string;
  pairs: {
    id: string;
    word: string;
    correctMatch: string;
    distractors: string[];
    example?: string;
    points: number;
  }[];
}

export interface PhrasalVerbsExercise {
  id: string;
  type: 'phrasal-verbs';
  title: string;
  instructions: string;
  items: {
    id: string;
    sentence: string;
    verb: string;
    particles: string[];
    correctAnswer: string;
    explanation: string;
    points: number;
  }[];
}

export interface IdiomsExpressionsExercise {
  id: string;
  type: 'idioms-expressions';
  title: string;
  instructions: string;
  items: {
    id: string;
    context: string;
    idiom: string;
    meaning: string;
    correctUsage: string;
    options?: string[];
    explanation?: string;
    points: number;
  }[];
}

export interface SummaryWritingExercise {
  id: string;
  type: 'summary-writing';
  title: string;
  instructions: string;
  sourceText: string;
  targetWordCount: number;
  minWords: number;
  maxWords: number;
  keyPoints: string[];
  rubric: any;
}

export interface GapFillTextExercise {
  id: string;
  type: 'gap-fill-text' | 'gap-fill';
  title: string;
  instructions: string;
  text: string;
  gaps: {
    id: string;
    gapNumber: number;
    correctAnswer: string;
    acceptableAlternatives?: string[];
    explanation?: string;
    points: number;
  }[];
}

export interface OpenClozeExercise {
  id: string;
  type: 'open-cloze';
  title: string;
  instructions: string;
  text: string;
}

export interface SentenceOrderingExercise {
  id: string;
  type: 'sentence-ordering';
  title: string;
  instructions: string;
  sentences: string[];
  correctOrder: number[];
  explanation?: string;
  points: number;
}

export interface SentenceReorderingExercise {
  id: string;
  type: 'sentence-reordering';
  title: string;
  instructions: string;
  items: {
    id: string;
    shuffledSentences: string[];
    correctOrder: number[];
    context?: string;
    explanation?: string;
    points: number;
  }[];
}

export interface GappedTextExercise {
  id: string;
  type: 'gapped-text';
  title: string;
  instructions: string;
  text: string;
  options: string[];
  questions: {
    number: number;
    correctAnswer: string;
    explanation: string;
    points: number;
  }[];
}

export interface MultipleMatchingSection {
  id: string;
  content: string;
}

export interface MultipleMatchingExercise {
  id: string;
  type: 'multiple-matching';
  title: string;
  instructions: string;
  sections: MultipleMatchingSection[];
  questions: {
    id?: string;
    question: string;
    correctAnswer: string;
    explanation: string;
    points: number;
  }[];
}

export interface IntegratedReadingWritingExercise {
  id: string;
  type: 'integrated-reading-writing';
  title: string;
  readingText: string;
  wordCount?: number;
  readingTime?: number;
  questions: Question[];
}

export interface ExtendedGapFillExercise {
  id: string;
  type: 'extended-gap-fill';
  title: string;
  instructions: string;
  text: string;
  gaps: {
    id: string;
    explanation?: string;
    correctAnswer: string;
    correctAnswers?: string[];
  }[];
}

export type Exercise = 
  | VoiceRecordingExercise
  | ListeningExercise
  | ReadingExercise
  | WritingExercise
  | GrammarExercise
  | VocabularyExercise
  | KeyWordTransformationExercise
  | WordFormationExercise
  | MultipleChoiceClozeExercise
  | PronunciationPracticeExercise
  | SentenceCompletionExercise
  | ErrorIdentificationExercise
  | ParaphrasingExercise
  | CollocationMatchingExercise
  | PhrasalVerbsExercise
  | IdiomsExpressionsExercise
  | SummaryWritingExercise
  | GapFillTextExercise
  | OpenClozeExercise
  | SentenceReorderingExercise
  | SentenceOrderingExercise
  | SentenceBuildingExercise
  | SpeakingPart1Exercise
  | SpeakingPart2Exercise
  | SpeakingPart3Exercise
  | SpeakingPart4Exercise
  | GappedTextExercise
  | MultipleMatchingExercise
  | IntegratedReadingWritingExercise
  | ExtendedGapFillExercise;

export interface Lesson {
  id: string;
  title: string;
  description: string;
  duration: number;
  objectives: string[];
  videoUrl?: string;
  theoryContent?: string;
  exercises: Exercise[];
  completed?: boolean;
  score?: number;
}

export interface Module {
  id: string;
  number: number;
  title: string;
  description: string;
  duration: string;
  topics: string[];
  grammar: string[];
  vocabulary: string[];
  lessons: Lesson[];
  examPractice?: {
    mockExam: boolean;
    examDuration: number;
    parts: string[];
  };
}

export interface CourseProgress {
  userId: string;
  courseId: string;
  level: string;
  currentModule: number;
  currentLesson: string;
  completedLessons: string[];
  scores: { [lessonId: string]: number };
  totalProgress: number; // 0-100
  lastAccessed: Date;
  recordings?: {
    [exerciseId: string]: {
      audioBlob: string;
      score: number;
      feedback: string;
      timestamp: Date;
    };
  };
}

// ============================================
// EVALUATION INTERFACES
// ============================================

export interface TextAnswerEvaluationResponse {
  isCorrect: boolean;
  score: number;
  feedback: string;
  detailedAnalysis: {
    semanticMatch: number;
    grammaticalAccuracy: number;
    vocabularyLevel: number;
    completeness: number;
  };
  conceptsCovered: string[];
  missingConcepts: string[];
  suggestions: string[];
  grammarErrors: Array<{
    error: string;
    correction: string;
    explanation: string;
  }>;
  vocabularyFeedback: {
    level: string;
    appropriateWords: string[];
    betterAlternatives?: Array<{ word: string; alternative: string; reason: string }>;
  };
  overallAssessment: 'excellent' | 'good' | 'fair' | 'needs-improvement' | 'incorrect';
  detailedExplanation?: string;
}

export interface WritingEvaluationResponse {
  overallScore: number; // 0-100
  score: number; // Alias for overallScore
  isAcceptable: boolean; // Meets minimum standards
  wordCount: number;
  wordCountFeedback: string;
  
  scores: {
    content: number; // 0-100
    organization: number; // 0-100
    grammar: number; // 0-100
    vocabulary: number; // 0-100
    taskAchievement: number; // 0-100
  };
  
  strengths: string[];
  weaknesses: string[];
  
  detailedFeedback: {
    content: string;
    organization: string;
    grammar: string;
    vocabulary: string;
    taskAchievement: string;
  };
  
  grammarErrors: Array<{
    sentence: string;
    error: string;
    correction: string;
    explanation: string;
    category: string; // e.g., "verb tense", "article", "preposition"
  }>;
  
  vocabularyAnalysis: {
    level: string; // "excellent", "good", "adequate", "basic"
    sophisticatedWords: string[];
    repetitiveWords: string[];
    suggestions: string[];
  };
  
  organizationAnalysis: {
    hasIntroduction: boolean;
    hasBody: boolean;
    hasConclusion: boolean;
    paragraphCount: number;
    coherence: string; // "excellent", "good", "adequate", "poor"
    cohesion: string; // "excellent", "good", "adequate", "poor"
  };
  
  recommendations: string[];
  estimatedCEFRLevel: string;
  bandScore?: number; // For IELTS-style scoring
  isCorrect: boolean;
  detailedExplanation?: string;
}

export interface MultipleChoiceEvaluationResponse {
  isCorrect: boolean;
  confidence: number;
  userAnswerIndex: number;
  correctAnswerIndex: number;
  feedback: string;
  explanation?: string;
  possibleTypo: boolean;
  fuzzyMatchScore?: number;
  didYouMean?: string;
  score: number;
  whyWrong?: string;
  conceptTested?: string;
  detailedExplanation?: string;
}

export type EvaluationResult = TextAnswerEvaluationResponse | WritingEvaluationResponse | MultipleChoiceEvaluationResponse;
