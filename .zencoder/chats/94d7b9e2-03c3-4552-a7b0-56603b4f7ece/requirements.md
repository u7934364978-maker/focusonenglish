# Product Requirements Document: English A2 Course

## Overview
Develop a complete English A2 (Elementary) level course following the Cambridge A2 Key (KET) standard. The course will be integrated into the existing Focus English platform, mirroring the structure and functionality of the current A1 course.

## Target Audience
- Learners who have completed A1 or have basic knowledge of English.
- Students preparing for the Cambridge A2 Key exam.

## Features
- **30 Learning Units**: Covering grammar, vocabulary, and functional language.
- **Interactive Exercises**: Multiple choice, matching, reordering, true/false, categorization, role-play, etc.
- **Video Content**: Integrated scenes with narration and dialogues.
- **Audio Support**: TTS and pre-recorded audio for interactions.
- **Mastery Tracking**: Each interaction tied to specific mastery tags.

## Curriculum (30 Units)
1. **Life and relationships**: Present simple, 'have got', possessive 's.
2. **Daily routine and habits**: Adverbs of frequency, prepositions of time.
3. **Home and furniture**: There is/are, prepositions of place.
4. **Town and city**: Directions, places in town.
5. **Free time and hobbies**: Verbs + -ing, like/dislike.
6. **Sports and health**: Can/can't, should/shouldn't.
7. **Food and drink**: Countable/uncountable, some/any/much/many.
8. **Past experiences - Part 1**: Past simple of 'to be', was/were.
9. **Past experiences - Part 2**: Past simple regular verbs.
10. **Past experiences - Part 3**: Past simple irregular verbs.
11. **Holidays and travel**: Past simple questions and negatives.
12. **The environment**: Comparative adjectives.
13. **Technology and gadgets**: Superlative adjectives.
14. **Personalities and descriptions**: Adjectives of character and appearance.
15. **Shopping and fashion**: Present continuous for current actions.
16. **Future plans**: Present continuous for future arrangements.
17. **Intentions and predictions**: Future with 'going to'.
18. **Predictions and promises**: Future with 'will'.
19. **Rules and obligations**: Must/mustn't, have to/don't have to.
20. **Permissions and requests**: May I, Could you, Would you mind.
21. **The natural world**: Adverbs of manner.
22. **Work and professions**: Present perfect basic - ever/never.
23. **Achievements**: Present perfect with just/already/yet.
24. **Entertainment and media**: Relative pronouns: who, which, that.
25. **Education and school**: Used to.
26. **Feelings and emotions**: -ed/-ing adjectives.
27. **Transportation and journeys**: Zero and First Conditional.
28. **Science and innovation**: Passive voice - basic present/past.
29. **Global issues**: Modal verbs of possibility: might, may.
30. **Final Review and Exam Practice**: Mixed structures and exam-style tasks.

## Technical Requirements
- **Data Format**: JSON files for each unit, following the schema used in `src/content/cursos/ingles-a1/`.
- **Directory Structure**:
    - Content: `src/content/cursos/ingles-a2/unit[1-30].json`
    - Pages: `src/app/curso/ingles-a2/page.tsx` and `src/app/curso/ingles-a2/[unitId]/page.tsx`.
- **Components**: Reuse `PremiumUnitViewer` and related UI components.

## Success Criteria
- All 30 units are accessible and functional.
- The UI matches the A1 course for consistency.
- Navigation between units works correctly.
