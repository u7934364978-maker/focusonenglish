# Technical Specification: A2 English Content Review

## 1. Technical Context
- **Environment**: Next.js 15, Supabase (PostgreSQL).
- **Data Format**: SQL Migration files (`.sql`) containing `INSERT` statements with JSON payloads for the `content` column of the `course_exercises` table.
- **Language**: English (Content) and Spanish (Explanations/Hints).

## 2. Implementation Approach

### 2.1. Content Audit Checklist
Each exercise will be audited against the following "Cambridge A2" standards:
- **Lexical Range**: Words should be within the A2 CEFR vocabulary list.
- **Grammatical Accuracy**: Focus on `to be`, `have got`, Present Simple, frequency adverbs, and basic prepositions (Units 1-10 focus).
- **Contextual Relevance**: Use realistic scenarios (shopping, family, work, travel).
- **Explanation Quality**: Explanations must be helpful and pedagogically sound.
- **Technical Integrity**: Verify JSON structure and SQL escape characters (`$_$`).

### 2.2. Modification Process
1.  **Identify**: Locate the `course_exercises` insertion block for each unit in `supabase/migrations/20260207_seed_a2_units_1-10.sql`.
2.  **Edit**: Apply string replacements or direct edits to the JSON content within the SQL file.
3.  **Validate**: Ensure the SQL syntax remains valid and the JSON is properly formatted.

## 3. Source Code Changes
- **Primary Target**: [./supabase/migrations/20260207_seed_a2_units_1-10.sql](./supabase/migrations/20260207_seed_a2_units_1-10.sql)

## 4. Delivery Phases
- **Phase 1**: Unit 1-3 Review (Basics, Greetings, Family).
- **Phase 2**: Unit 4-7 Review (Daily Life, Jobs, Places).
- **Phase 3**: Unit 8-10 Review (Time, Routine, Preferences).

## 5. Verification Approach
- **SQL Validation**: Run a basic SQL lint or dry-run if possible (or manual inspection of syntax).
- **Content Verification**: Manual review of the "New" content vs "Old" content to ensure pedagogical improvement.
- **Schema Validation**: Ensure the modified JSON still adheres to the expected exercise types (e.g., `multiple-choice`, `fill-blank`).
