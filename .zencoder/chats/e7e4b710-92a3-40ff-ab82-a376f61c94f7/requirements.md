# A2 Narrative Course - Product Requirements Document

## Feature Overview

Create a comprehensive **A2-level English narrative course** (60 units) that follows the exact **pedagogical structure and exercise format** established in the A1 narrative course.

### Reference Course
- **A1 Narrative Course**: Located at `https://www.focus-on-english.com/debug/a1-preview/unit-1`
- **Repository Path**: `/src/content/cursos/ingles-a1-narrative/`
- **Key Structure**: Block-based units with multiple exercise types (multiple choice, fill-in-blanks, matching, reordering, error correction, reading comprehension)

---

## User Goals

1. **Learners** can access a comprehensive A2 course that progressively builds on A1 foundations using the same pedagogical structure.
2. **Platform maintainers** can easily extend the course library with consistent, predictable structure.
3. **Course designers** can replicate the A1 pedagogical framework efficiently for A2 level.

---

## Requirements

### 1. Course Structure

#### 1.1 Module & Unit Organization
- **Total Units**: 60 units (same as A1)
- **Module Breakdown**: 6 modules × 10 units each
- **Module Structure**:
  1. **Module 1: Personal Growth & Adaptation (Units 1-10)** - Developing independence, cultural understanding, social connections.
  2. **Module 2: Work & Professional Life (Units 11-20)** - Workplace communication, professional relationships, job responsibilities.
  3. **Module 3: Travel & Exploring Beyond London (Units 21-30)** - Trip planning, navigation, cultural experiences, local interactions.
  4. **Module 4: Relationships & Social Expansion (Units 31-40)** - Building meaningful connections, social situations, deeper conversations.
  5. **Module 5: Challenges & Problem-Solving (Units 41-50)** - Real-world difficulties, advice-seeking, resilience building.
  6. **Module 6: Future Plans & Looking Ahead (Units 51-60)** - Reflection, goal-setting, planning ahead, life ambitions.

#### 1.2 Thematic Organization
- **Context-Based Units**: Each unit focuses on real-world scenarios and communicative functions at A2 level.
- **Scenario Examples**: Workplace situations, travel planning, social interactions, problem-solving, relationships, health/fitness.
- **Progression**: Units build progressively, introducing new grammar structures and vocabulary in practical contexts.
- **No Specific Narrative**: Unlike narrative-driven courses, units are thematic and context-based rather than following a character's story arc.

#### 1.3 Learning Outcomes
- **Grammar Focus**: Past Simple, Present Perfect, Future tenses (going to, will, present continuous), Modal verbs, Comparatives/Superlatives, Relative clauses.
- **Vocabulary Domains**: Work/office, travel, relationships, problem-solving, health, leisure, advanced daily life.
- **Communicative Functions**: Narrating past events, making plans, giving advice, comparing options, describing experiences.

---

### 2. Pedagogical Structure

#### 2.1 Alignment with A1 Narrative
The A2 course must follow the **exact pedagogical structure** of the A1 narrative course:

- **Unit JSON Format**: Each unit contains blocks with exercises (matching, multiple choice, fill blanks, reorder, error correction, etc.)
- **Exercise Types**: Maintain consistency with A1:
  - Matching exercises
  - Multiple choice questions
  - Fill-in-the-blanks
  - Sentence reordering
  - Error correction
  - Reading comprehension
  - Translation exercises
  - Vocabulary exercises

#### 2.2 Localization & Bilingual Support
- **Language UI**: Spanish (es-ES)
- **Target Language**: English (en)
- **Translation Support**: Full translations using `[[English|Spanish]]` format for all instructions and context.
- **Narrative Prompts**: Spanish prompts with English vocabulary/grammar focus (mirroring A1 structure).

#### 2.3 Exercise Density & Progression
- **Exercises per Unit**: ~60 exercises (based on A1 pattern)
- **Progression**: Within each unit, exercises should progress from receptive (recognition) to productive (application).
- **Difficulty Curve**: Gradually introduce more complex structures within each thematic block.

---

### 3. Content Specifics

#### 3.1 Unit Themes (Detailed Breakdown)

**Module 1: Personal Growth & Adaptation**
1. **Unit 1**: Settling Into a New Environment (Present Simple review, household routines)
2. **Unit 2**: Making New Friends (Present Simple, Past Simple introduction)
3. **Unit 3**: Cultural Differences & Adaptation (Comparatives, Present Perfect)
4. **Unit 4**: Food & Dining Culture (Food vocabulary, Countable/Uncountable nouns)
5. **Unit 5**: Weekend Activities & Leisure (Present Simple, Going to + future plans)
6. **Unit 6**: Social Interactions & Customs (Modal verbs: Can, Could, May)
7. **Unit 7**: Communication & Staying Connected (Past Simple: Irregular verbs)
8. **Unit 8**: Money & Financial Independence (Numbers, Money vocabulary, Past Simple)
9. **Unit 9**: Health & Fitness (Health vocabulary, Modal verbs: Should, Must)
10. **Unit 10**: Module 1 Review & Assessment

**Module 2: Work & Professional Life**
11. **Unit 11**: First Day at Work (Past Simple, Narrative sequencing)
12. **Unit 12**: Workplace Colleagues & Relationships (Present Perfect, Descriptions)
13. **Unit 13**: Office Environment & Daily Tasks (Workplace vocabulary, Instructions)
14. **Unit 14**: Job Responsibilities & Challenges (Modal verbs: Have to, Must, Could)
15. **Unit 15**: Professional Communication (Requests, Suggestions, Should)
16. **Unit 16**: Meetings & Presentations (Present Simple, Instructions, Descriptive language)
17. **Unit 17**: Work-Life Balance (Present Perfect vs Past Simple)
18. **Unit 18**: Career Development & Goals (Future plans: Going to, Will)
19. **Unit 19**: Problems at Work & Solutions (First Conditional, Giving advice)
20. **Unit 20**: Module 2 Review & Assessment

**Module 3: Travel & Exploring**
21. **Unit 21**: Planning a Trip (Future tenses: Going to, Present Continuous)
22. **Unit 22**: Booking Accommodations (Past Simple, Requests, Polite language)
23. **Unit 23**: Journey & Transportation (Travel vocabulary, Past Simple narrative)
24. **Unit 24**: Exploring New Places (Prepositions of place, Directions)
25. **Unit 25**: Tourist Attractions & Landmarks (Present Simple descriptions, Comparatives)
26. **Unit 26**: Meeting People & Making Connections (Past Simple conversations)
27. **Unit 27**: Trying Local Cuisine (Food vocabulary, Preferences, Opinions)
28. **Unit 28**: Memorable Travel Experiences (Past Simple narrative, Sequencing)
29. **Unit 29**: Comparing Places & Cultures (Comparatives, Superlatives)
30. **Unit 30**: Module 3 Review & Assessment

**Module 4: Relationships & Social Expansion**
31. **Unit 31**: Building Deep Friendships (Present Perfect, Experiences)
32. **Unit 32**: Romantic Relationships (Past Simple narratives, Emotions)
33. **Unit 33**: Family Connections & Updates (Present Perfect, Past Simple)
34. **Unit 34**: Social Events & Celebrations (Past Simple, Sequencing)
35. **Unit 35**: Conversations on Deeper Topics (Present Simple discussions, Modal verbs)
36. **Unit 36**: Being Supportive & Helping Others (Modal verbs: Should, Could, Must)
37. **Unit 37**: Conflicts & Resolutions (Past Simple, Explaining situations)
38. **Unit 38**: Relationship Development (Present Perfect, Life experiences)
39. **Unit 39**: Future Plans with Others (Future tenses, Time clauses)
40. **Unit 40**: Module 4 Review & Assessment

**Module 5: Challenges & Problem-Solving**
41. **Unit 41**: Dealing with Difficult Emotions (Present Perfect, Past Simple)
42. **Unit 42**: Isolation & Loneliness (Modal verbs, Advice)
43. **Unit 43**: Communication Challenges (Error correction, Requests)
44. **Unit 44**: Financial Pressures (Past Simple, Problem-solving language)
45. **Unit 45**: Health Issues & Medical Situations (Health vocabulary, Modal verbs)
46. **Unit 46**: Workplace Conflicts (Past Simple narratives, First Conditional)
47. **Unit 47**: Personal & Professional Development (Present Perfect, Future plans)
48. **Unit 48**: Overcoming Fears & Self-Doubt (Modal verbs, Encouragement)
49. **Unit 49**: Building Resilience (Past Simple, Learning from challenges)
50. **Unit 50**: Module 5 Review & Assessment

**Module 6: Future Plans & Looking Ahead**
51. **Unit 51**: Reflecting on Progress (Present Perfect, Past Simple review)
52. **Unit 52**: Personal Growth & Changes (Present Perfect, Comparatives)
53. **Unit 53**: Career Ambitions & Goals (Future plans, Modal verbs)
54. **Unit 54**: Education & Learning Opportunities (Conditional structures, Will/Going to)
55. **Unit 55**: Life Decisions & Choices (Conditional, Decision-making language)
56. **Unit 56**: Relationships & Life Plans (Future tenses, Relative clauses)
57. **Unit 57**: Travel & Adventure Goals (Future plans, Modal verbs)
58. **Unit 58**: Financial Goals & Planning (Numbers, Future plans, Modal verbs)
59. **Unit 59**: Life Lessons & Personal Wisdom (Present Perfect, Narrative, Relative clauses)
60. **Unit 60**: Final A2 Review & Assessment

#### 3.2 Exercise Distribution per Unit
- **Total Exercises per Unit**: ~60 exercises (matching A1 pattern)
- **Suggested Breakdown**:
  - 15 Matching exercises (vocabulary, grammar patterns)
  - 20 Multiple choice (comprehension, grammar, vocabulary)
  - 15 Fill-in-the-blanks (production, grammar)
  - 5 Sentence reordering (syntax, structure)
  - 5 Error correction (grammar accuracy)

---

### 4. Technical Requirements

#### 4.1 Data Structure & File Organization
- **Directory**: `/src/content/cursos/ingles-a2-narrative/`
- **Files**: One JSON file per unit (`unit1.json`, `unit2.json`, ... `unit60.json`)
- **Index File**: `index.json` (optional) containing course metadata and module structure.

#### 4.2 JSON Schema
- Must follow the same schema as `ingles-a1-narrative` units.
- **Key Fields**:
  - `course`: { unit_id, unit_title, level, total_duration_minutes, language_ui, target_language }
  - `learning_outcomes`: Array of learning objective strings
  - `blocks`: Array of exercise blocks
    - `block_id`: Thematic block identifier (e.g., "hook", "grammar", "vocabulary", "reading")
    - `title`: Human-readable block title
    - `duration_minutes`: Estimated time for block
    - `content`: Array of exercise objects

#### 4.3 Exercise Object Schema
Each exercise must include:
- `interaction_id`: Unique identifier within the unit
- `type`: Exercise type (multiple_choice, matching, fill_blanks, reorder, error_correction, reading_comprehension, etc.)
- `prompt_es`: Spanish language prompt/instruction
- `correct_answer`: Correct option identifier or answer
- `mastery_tag`: Thematic tag for tracking learning objectives
- Additional fields depending on exercise type (options, pairs, sentences, etc.)

---

### 5. Delivery Phases

#### Phase 1: Content Structure & Outline
- **Deliverable**: Detailed module and unit outline with learning objectives and thematic focus for each unit.
- **Format**: Markdown document with pedagogical breakdown.
- **Status**: To be confirmed by user.

#### Phase 2: Unit Implementation
- **Deliverable**: Complete JSON files for all 60 units.
- **Priority**: Units 1-10 first (Module 1), then progressive delivery.
- **Quality Gate**: Each unit must be pedagogically sound and follow the A1 structural pattern.

#### Phase 3: Platform Integration & Preview
- **Deliverable**: Course accessible via `/debug/a2-preview/[unitId]` route.
- **Testing**: Functional testing on the debug preview page.

#### Phase 4: Analytics & Refinement
- **Deliverable**: Course progress tracking, gamification integration (XP, achievements).
- **Optional**: Audio content integration (if required by platform).

---

## Key Assumptions

1. **A1 Pedagogical Structure is Final**: The A1 course structure (block-based exercises, exercise types) is considered the gold standard; A2 will replicate this pattern exactly.
2. **60 Units is Standard**: All courses will follow the 6-module, 10-unit-per-module structure.
3. **Context-Based Themes**: Units are organized by real-world communicative scenarios rather than a character narrative.
4. **Spanish UI Default**: All course content assumes Spanish-language UI (es-ES) with English as the target language.
5. **Exercise Count**: Each unit contains approximately 60 exercises based on A1 pattern analysis.
6. **No Single Narrative Thread**: Unlike narrative-driven courses, A2 units are thematically independent scenarios suitable for any learner.

---

## Success Criteria

1. ✅ A2 course is structurally identical to A1 (same JSON schema, same file organization, same block structure).
2. ✅ All 60 units are created with complete pedagogical content (~60 exercises per unit).
3. ✅ Content progression aligns with CEFR A2 level expectations.
4. ✅ Course is accessible via the debug preview route (`/debug/a2-preview/[unitId]`).
5. ✅ All exercises are pedagogically sound and avoid trivial answers.
6. ✅ Full translations are present in all exercises (`[[English|Spanish]]` format matching A1 style).
7. ✅ Thematic coherence is maintained within each unit and across modules.

---

## Out of Scope

- Audio/TTS content generation (separate phase)
- Gamification mechanics beyond XP tracking (separate phase)
- Certification or badge systems (separate feature)
- Mobile app optimization (separate phase)
- Advanced analytics dashboard (separate feature)
