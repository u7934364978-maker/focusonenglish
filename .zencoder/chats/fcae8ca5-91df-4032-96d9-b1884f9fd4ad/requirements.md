# Requirements Document - Cambridge B1 Preliminary Course Adaptation

## 1. Goal
Adapt the existing B1 English course to align with the official Cambridge B1 Preliminary (PET) exam syllabus, task types, and evaluation criteria.

## 2. Scope
- Update the B1 course curriculum (30 units) to cover all parts of the PET exam.
- Implement/Ensure support for specific Cambridge task types.
- Align content with the official B1 Vocabulary List and communicative functions.

## 3. Functional Requirements

### 3.1. Exam Structure Alignment (Papers)
The course must provide practice for all 4 papers:

#### Paper 1: Reading (45 min)
- **Part 1**: Matching short texts (signs, notices, emails) with options.
- **Part 2**: Matching profiles (5 people) with 8 short descriptions.
- **Part 3**: Multiple choice (4 options) on a long text.
- **Part 4**: Gapped text (choosing sentences to fill gaps in a text).
- **Part 5**: Multiple choice cloze (vocabulary/grammar).
- **Part 6**: Open cloze (writing 1 word in each gap).

#### Paper 2: Writing (45 min)
- **Part 1**: Email response (approx. 100 words).
- **Part 2**: Choice between Article or Story (approx. 100 words).

#### Paper 3: Listening (30 min)
- **Part 1**: Multiple choice with images (3 options).
- **Part 2**: Short dialogues (3 options).
- **Part 3**: Gap fill (1-2 words, numbers, dates).
- **Part 4**: Long conversation (multiple choice).

#### Paper 4: Speaking (12 min)
- **Part 1**: Interview (personal information).
- **Part 2**: Photo description (monologue).
- **Part 3**: Collaborative task (discussion with images).
- **Part 4**: Extended discussion on the collaborative task topic.

### 3.2. Evaluation Criteria (Speaking)
- Grammar and Vocabulary
- Discourse Management
- Pronunciation
- Interactive Communication
- Global Achievement

### 3.3. Content Requirements
- **Vocabulary**: Must include the B1 Preliminary Vocabulary List topics.
- **Communicative Functions**: Self-introduction, routines, describing people/places, past experiences (stories), opinions, suggestions, etc.
- **Writing Skills**: Informal emails, articles, stories with time connectors.
- **Reading/Listening Skills**: Skimming, scanning, inferring meaning, identifying attitude.

## 4. Technical Requirements
- Use the existing JSON-based course system (`unit*.json`).
- Utilize and potentially extend `PremiumCourseSession` and specific exercise components (`GappedTextExercise`, etc.).
- Ensure AI-powered evaluations for Writing and Speaking (using existing infra if available).

## 5. Decisions & Assumptions
- **Renaming & Restructuring**: The 30 existing units will be renamed and restructured to follow a logical PET preparation sequence.
- **Syllabus First**: We will first define the syllabus structure (titles and learning outcomes) for all 30 units before updating the JSON content.
- **AI-Powered Evaluation**: Writing and Speaking tasks will leverage existing AI Lab/Analysis components for automated feedback.

## 6. Constraints
- Must follow the project's coding conventions (Next.js, TypeScript, Tailwind).
- Must preserve existing gamification and progress tracking.
