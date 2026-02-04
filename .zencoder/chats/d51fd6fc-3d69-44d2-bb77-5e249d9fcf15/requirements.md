# PRD - B1 English Course Expansion

## Overview
Rebuild and expand the B1 English course to include 60 units, each with 100 exercises. The course should follow the exercise typology used in the A1 course but with B1 level content.

## Goals
- Create a comprehensive B1 curriculum with 60 distinct units.
- Ensure each unit contains 100 high-quality exercises.
- Maintain consistency with the A1 course structure and exercise types.
- Automate the generation of these units where possible to ensure consistency.

## Target Audience
- English learners at the B1 (Intermediate) level.
- Users transitioning from A2 to B1.

## Functional Requirements
1. **Unit Structure**:
   - 60 Units in total.
   - Each unit must have a title, learning outcomes, and blocks of content.
   - Each unit must contain 100 exercises.
2. **Exercise Typology (based on A1)**:
   - `multiple_choice`: Vocabulary and grammar in context.
   - `fill_in_the_blank`: Grammar and vocabulary practice.
   - `true_false`: Reading comprehension and factual checks.
   - `reorder_words`: Syntax and sentence structure practice.
   - `listening_simulation`: (Simulated via text for now, as per A1 pattern).
   - `reading_comprehension`: Short texts with associated questions.
3. **Content Level**:
   - Real B1 level content (Intermediate).
   - Grammar: Passive voice, conditionals, perfect tenses, reporting speech, etc.
   - Vocabulary: Work, travel, technology, environment, society, etc.
4. **Data Format**:
   - JSON files stored in `src/content/cursos/ingles-b1/`.
   - Compatible with the existing `PremiumCourse` types.

## Technical Constraints
- Must use the existing JSON schema for courses.
- Generation script should be reusable or updated (e.g., `scripts/expand-b1-course.py`).
- Performance: Large JSON files should be manageable by the frontend.

## Proposed Curriculum (60 Units)
1. Lifestyles & Routines
2. The World of Work
3. Technology & Innovation
4. Travel & Exploration
5. Environmental Awareness
6. Media & Entertainment
7. Health & Wellbeing
8. Education & Learning
9. Society & Culture
10. The Natural World
11. Shopping & Consumerism
12. Digital Life
13. Careers & Ambitions
14. Tourism & Hospitality
15. Food & Gastronomy
16. Science & Discovery
17. Modern Communications
18. Family & Relationships
19. Global Issues
20. Money & Finance
21. Law & Order
22. Creativity & Inventions
23. Arts & Performance
24. Future Outlook
25. Hobbies & Interests
26. Animals & Biodiversity
27. World Geography
28. Style & Design
29. Professional Life
30. Personal Success
31. Urban Living vs Rural Life
32. The History of English
33. Extreme Sports & Adventure
34. Psychology & Human Behavior
35. Space Exploration
36. Climate Change & Solutions
37. Music Genres & History
38. Cinema & Theater
39. Cooking & Traditions
40. Festivals & Celebrations
41. Social Media Impact
42. Ethics & Values
43. Public Transport & Mobility
44. Architecture & Landmarks
45. Literature & Storytelling
46. Sports & Competition
47. Volunteering & Charity
48. Politics & Governance
49. Advertising & Marketing
50. Holidays & Traditions
51. Languages of the World
52. Natural Disasters & Prevention
53. Fashion Trends & Sustainability
54. Business Ethics
55. Technological Ethics (AI)
56. Health Care Systems
57. Youth Culture
58. Retirement & Aging
59. Globalization
60. Final Review & B1 Assessment
