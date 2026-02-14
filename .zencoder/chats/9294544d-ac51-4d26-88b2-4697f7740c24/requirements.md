# Requirements - Course Redesign (A1 & A2)

Redesign A1 and A2 courses to match the structure and quality of the B1 course.

## 1. Goals
- Rebuild A1 course (30 units, 50 exercises per unit).
- Rebuild A2 course (30 units, 50 exercises per unit).
- Ensure all English words in exercises are translated using the `[[english|spanish]]` syntax.
- Match the structure of `src/lib/course/b1/unit-[n].ts`.

## 2. A1 Syllabus (Proposed)
| Unit | Theme | Grammar Focus |
|------|-------|---------------|
| 1 | Greetings & Personal Info | To Be (Positive), Basic Greetings |
| 2 | Coffee Break & Orders | Expressing Desires (I want), Plurals |
| 3 | My Family & Friends | Possessive Adjectives (my, your, his, her) |
| 4 | Daily Routine | Present Simple (I work, I sleep) |
| 5 | Numbers & Counting | Numbers 1-100, Quantifiers (some, any) |
| 6 | Colors & Descriptions | Adjectives, Colors |
| 7 | Time & Days | Days of the week, Prepositions of time (in, on, at) |
| 8 | Daily Grind | Present Simple (Third person -s) |
| 9 | Food & Drink | Countable/Uncountable (Basic) |
| 10 | Clothing & Fashion | Present Continuous (I am wearing) |
| 11 | My Job & Workplace | Jobs, Workplace vocabulary |
| 12 | In the City | Prepositions of place, Directions |
| 13 | Movement & Actions | Action verbs, Present Continuous |
| 14 | Feelings & Emotions | Adjectives of emotion |
| 15 | Animals & Nature | Common animals, basic nature |
| 16 | Weather | Weather conditions |
| 17 | Technology & Gadgets | Tech devices, Basic verbs |
| 18 | The Human Body | Parts of the face and body |
| 19 | Abilities | Can / Can't |
| 20 | Home & Furniture | House vocabulary, There is / There are |
| 21 | Transportation | Transport methods, travel |
| 22 | Health | Common ailments, body parts |
| 23 | Shopping | Money, Prices, Demonstratives (this, that, these, those) |
| 24 | Hobbies & Interests | Like / Love / Hate + -ing |
| 25 | Past Memories | Was / Were |
| 26 | Future Plans | Going to (Future) |
| 27 | Comparisons | Basic Comparatives (short adjectives) |
| 28 | Sports | Sports vocabulary, Play/Go/Do |
| 29 | Holidays | Travel and holiday activities |
| 30 | Course Synthesis | Review of A1 grammar and vocabulary |

## 3. A2 Syllabus (Proposed)
| Unit | Theme | Grammar Focus |
|------|-------|---------------|
| 1 | Personal Profile | Present Simple vs Continuous (Review) |
| 2 | Daily Life | Adverbs of Frequency |
| 3 | Work & Office | Modals of Permission (Can, Could) |
| 4 | Shopping & Clothes | Comparatives & Superlatives |
| 5 | Free Time | Gerunds vs Infinitives (Intro) |
| 6 | Health & Well-being | Imperatives, Giving Advice (Should) |
| 7 | Travel & Holidays | Past Simple (Regular verbs) |
| 8 | Food & Cooking | Quantifiers (Much, Many, A lot of) |
| 9 | My Home | Prepositions of place (Advanced) |
| 10 | My Neighborhood | Used to (Past habits) |
| 11 | Technology | Past Simple (Irregular verbs) |
| 12 | Past Experiences | Present Perfect (Intro) |
| 13 | Future Plans | Will vs Going to |
| 14 | Transport | Comparative Adjectives (Longer adjectives) |
| 15 | Environment | First Conditional (Intro) |
| 16 | Relationships | Reciprocal pronouns (each other) |
| 17 | Media & Entertainment | Passive Voice (Intro - Present) |
| 18 | Education | Modals of Obligation (Have to, Must) |
| 19 | Services | Asking for help, Polite requests |
| 20 | Feelings & Emotions | Adjectives ending in -ed / -ing |
| 21 | Inventions | Past Continuous |
| 22 | Rules & Laws | Modals of Prohibition (Mustn't) |
| 23 | Success | Present Perfect with 'ever' and 'never' |
| 24 | Challenges | Too / Enough |
| 25 | The World | Relative Clauses (Who, Which, That) |
| 26 | Crime & Justice | Passive Voice (Past Simple) |
| 27 | Arts | Present Perfect with 'just', 'already', 'yet' |
| 28 | Nature | Zero Conditional |
| 29 | Society | Reported Speech (Basic) |
| 30 | Course Review | Comprehensive A2 Review |

## 4. Technical Constraints
- Each unit must have exactly 50 exercises.
- Exercise types: `multiple-choice`, `fill-blank`, `sentence-building`, `flashcard`.
- Language: English exercises with Spanish translations/instructions.
- Format: `src/lib/course/[level]/unit-[n].ts`.
- All exercises must follow the `[[english|spanish]]` word-level translation syntax.

## 5. Verification
- Run `npm run validate-exercises` (or equivalent) to ensure JSON validity.
- Manually check a sample of units in the `debug` preview.
