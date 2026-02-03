# Technical Specification - 100 Units A1 English Course

## 1. Context
- **Language**: SQL (Supabase/PostgreSQL)
- **Framework**: Next.js (for exercise types and schema)
- **Database Tables**: `course_modules`, `course_lessons`, `course_exercises`

## 2. Implementation Approach
We will use SQL migrations to:
1. Define remaining `course_modules` (a1-m4 to a1-m10).
2. Define `course_lessons` for Units 31-100.
3. Batch insert 50 exercises for each unit using `course_exercises`.

### 2.1 Module Distribution
- **a1-m1**: Units 1-10 (Existing)
- **a1-m2**: Units 11-20 (Existing)
- **a1-m3**: Units 21-30 (Existing)
- **a1-m4**: Units 31-40
- **a1-m5**: Units 41-50
- **a1-m6**: Units 51-60
- **a1-m7**: Units 61-70
- **a1-m8**: Units 71-80
- **a1-m9**: Units 81-90
- **a1-m10**: Units 91-100

### 2.2 Exercise Content Structure
Exercises will follow the JSON format supported by the frontend:
- `multipleChoice`: `{ prompt, options, answerIndex, explanation? }`
- `matching`: `{ instructions, pairs: [{ id, word, correctMatch, distractors }] }`
- `flashcard`: `{ content: { title, items: [{ front, back, pronunciation? }] } }`
- `fillBlanks`: `{ text, answers: [], instructions? }`
- `drag-drop`: `{ content: { correctSentence, translation, instructions? } }`

## 3. Thematic Roadmap (Units 31-100)
- **Module 4 (31-40)**: Food & Drink, Eating Out, Quantifiers (some/any).
- **Module 5 (41-50)**: Travel & Transport, Vacation, Booking.
- **Module 6 (51-60)**: Health, Sports, Hobbies, Free Time.
- **Module 7 (61-70)**: Shopping, Money, Prices, Clothes.
- **Module 8 (71-80)**: Weather, Seasons, Nature, Animals.
- **Module 9 (81-90)**: Education, Technology, Media.
- **Module 10 (91-100)**: Past Events (Basic Past Simple), Review, Final Exam.

## 4. Delivery Phases
1. **Phase 1**: Infrastructure (Modules 4-10 and Lessons 31-100).
2. **Phase 2**: Exercises Generation (Batching units).
3. **Phase 3**: Verification and consistency check.

## 5. Verification
- Use `npm run validate-exercises` (if available) or manual SQL checks.
- Verify exercise count per lesson using:
  ```sql
  SELECT lesson_id, COUNT(*) FROM course_exercises GROUP BY lesson_id ORDER BY lesson_id;
  ```
