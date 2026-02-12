# Product Requirements Document (PRD) - A2 English Course Content

## Project Overview
Create 30 units of English A2 level content for the Focus English platform. Each unit will contain 50 exercises, following the structure and format of existing A1 units.

## Goals
- Provide comprehensive A2 level English material.
- Ensure variety in exercise types (Flashcards, Matching, Multiple Choice, Fill-blank, Sentence Building, Speaking Analysis).
- Maintain a logical progression of topics and grammar points.
- Implement a "discovery-first" pedagogical approach (Flashcards/Matching before production exercises).

## Target Audience
- Students at an A2 (Elementary) level of English according to the CEFR.

## Functional Requirements
- **30 Units**: Each covering a specific thematic and grammatical area.
- **50 Exercises per Unit**: Total of 1,500 exercises.
- **Exercise Structure**:
    - **Mixed Typology**: Exercises should not be strictly grouped by type. Instead of having all flashcards at the beginning, they should be mixed with other types (matching, multiple-choice, fill-blank) to create a more dynamic and staggered learning experience.
    - **Pedagogical Flow**: While types are mixed, the introduction of concepts (discovery) should still generally precede complex production, but in smaller, intermingled batches.
- **Language**: Instructions and explanations in Spanish; content in English.

## Curriculum (30 Units)
1.  **Unit 1: Personal Profile** (Present Simple, Verb 'to be', basic adjectives)
2.  **Unit 2: Family & Friends** (Possessives, Family vocabulary)
3.  **Unit 3: Daily Routine** (Present Simple, Adverbs of frequency)
4.  **Unit 4: Home & Furniture** (There is/are, Prepositions of place)
5.  **Unit 5: Free Time & Hobbies** (Verbs + -ing, Like/Love/Hate)
6.  **Unit 6: Eating Out** (Food & Drink, Countable/Uncountable, Some/Any)
7.  **Unit 7: Past Memories** (Past Simple: be, regular/irregular verbs)
8.  **Unit 8: Getting Around** (Transportation, Directions, Imperatives)
9.  **Unit 9: Shopping & Clothes** (Adjectives, Comparative/Superlative)
10. **Unit 10: My Neighborhood** (Local places, Past Simple: continuous/simple)
11. **Unit 11: Health & Body** (Parts of the body, should/shouldn't)
12. **Unit 12: School & Education** (School subjects, Modal verbs: can/could)
13. **Unit 13: Work & Jobs** (Occupations, Present Continuous vs Simple)
14. **Unit 14: Holidays & Travel** (Going to, Future plans)
15. **Unit 15: Weather & Seasons** (Climate vocabulary, Will for predictions)
16. **Unit 16: Entertainment & Media** (Films, Music, TV, Present Perfect: experiences)
17. **Unit 17: Sports & Fitness** (Sports vocabulary, Adverbs of manner)
18. **Unit 18: Technology & Gadgets** (Digital devices, Relative pronouns: who, which, that)
19. **Unit 19: Nature & Environment** (Animals, Nature, First Conditional)
20. **Unit 20: Feelings & Opinions** (Adjectives for feelings, Too/Enough)
21. **Unit 21: Life Stages** (Infancy to Old age, used to)
22. **Unit 22: City vs Country** (Urban/Rural vocab, More Comparatives)
23. **Unit 23: Cooking & Recipes** (Kitchen verbs, Quantifiers: much/many/a lot of)
24. **Unit 24: Celebrations & Festivals** (Traditions, Dates, Ordinal numbers)
25. **Unit 25: Famous People** (Biographies, Past Simple vs Present Perfect)
26. **Unit 26: Accidents & Emergencies** (Safety, Adverbs of degree)
27. **Unit 27: Fashion & Style** (Trends, Compound adjectives)
28. **Unit 28: Science & Space** (Inventions, Passive voice: present/past)
29. **Unit 29: Literature & Stories** (Genres, Narrative tenses)
30. **Unit 30: Plans for the Future** (Career, Dreams, Second Conditional - basic)

## Technical Constraints
- Exercises must follow the `Exercise` interface defined in `src/lib/exercise-generator.ts`.
- Files should be stored in `src/lib/course/a2/unit-X.ts`.
- Each file must export a constant `UNIT_X_EXERCISES`.

## Success Criteria
- All 30 units created and validated.
- Each unit contains exactly 50 exercises.
- Variety of exercise types maintained across all units.
- Pedagogy (Discovery before Production) is followed.
