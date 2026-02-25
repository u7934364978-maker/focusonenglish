# Technical Specification - A1 Course Audit System

## 1. Technical Context
- **Language**: TypeScript (Node.js)
- **Dependencies**: `fs`, `path`, `zod` (for schema validation)
- **Input**: `src/content/cursos/ingles-a1/course-specifications.md` and `src/content/cursos/ingles-a1/unit*.json`

## 2. Implementation Approach

### Phase 1: Markdown Parser
A specialized parser will extract the curriculum from `course-specifications.md`.
- **Logic**: Use regex to identify units (### Unit X) and extract the bullet points for Vocabulary and Grammar.
- **Data Structure**: `Map<number, { vocabulary: string[], grammar: string[] }>`

### Phase 2: Unit Auditor Script
A new script `scripts/audit-a1-full.ts` will be created.
- **Schema Validation**: Use `zod` to ensure each exercise follows the expected structure.
- **Count Check**: Iterate through `blocks` and sum `content` length (Target: 75).
- **Keyword Matching**: Search for vocabulary and grammar terms within `stimulus_en`, `prompt_es`, and `options`.
- **Translation Check**: Use regex `\[\[.*?\|.*?\]\]` to ensure all English text is translated.
- **Triviality Heuristic**: Identify exercises where the correct answer is significantly shorter/longer or matches a word in the prompt without context.

## 3. Source Code Changes
- New file: `scripts/audit-a1-full.ts`
- Update: `package.json` with a new script `audit:a1-full`.

## 4. Delivery Phases
1. **Parser Implementation**: Extract data from the spec file.
2. **Core Auditor**: Implement count and translation checks.
3. **Pedagogical Auditor**: Implement keyword matching and quality heuristics.

## 5. Verification Approach
- Run `npm run audit:a1-full -- --unit=1` to test a single unit.
- Run `npm run audit:a1-full` to audit the entire course.
