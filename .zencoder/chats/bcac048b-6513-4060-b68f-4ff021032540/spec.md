# Technical Specification: Educational Content Improvements for Banking and Finance Course

## 1. Technical Context
- **Language**: JSON (for content storage).
- **Architecture**: The application uses a file-based content system located in `src/content/cursos/trabajo/finanzas/`.
- **Data Models**:
  - `theory.json`: Contains sections with `id`, `title`, and `content` (Markdown).
  - `exercises.json`: Contains an array of `items` with types like `multipleChoice`, `readingComprehension`, etc.

## 2. Implementation Approach
We will enhance the content by introducing new schemas and expanding existing ones to support the improvements outlined in the PRD.

### 2.1. Content Structure Enhancements
- **Theory Sections**: Add a `type` field to sections in `theory.json` to distinguish between `informational`, `case-study`, and `soft-skills`.
- **New Exercise Types**:
  - `writingTask`: For drafting emails or memos.
  - `rolePlayPrompt`: For speaking practice scenarios.
  - `matching`: For vocabulary or concept matching.
  - `orderSteps`: For sequencing financial processes (e.g., IPO stages).

### 2.2. Source Code Structure
- No structural changes to the codebase are required as we are modifying data files.
- We will focus on a pilot implementation in `src/content/cursos/trabajo/finanzas/b2/trimestre1/semana01/`.

### 2.3. Data Model Changes
#### `theory.json` (Proposed)
```json
{
  "title": "...",
  "sections": [
    {
      "id": "...",
      "title": "...",
      "type": "case-study",
      "content": "...",
      "diagram": "mermaid-syntax-here"
    }
  ]
}
```

#### `exercises.json` (Proposed)
```json
{
  "items": [
    {
      "id": "...",
      "type": "writingTask",
      "prompt": "Draft an email to a client explaining the risks of...",
      "modelAnswer": "...",
      "keywords": ["volatility", "exposure", "mitigate"]
    }
  ]
}
```

## 3. Delivery Phases
1. **Phase 1: Pilot Update (B2 Week 1)**: Implement modern topics (Fintech/ESG) and new exercise types in a single week's content.
2. **Phase 2: Feedback & Iteration**: Refine the pilot based on user review.
3. **Phase 3: Course-wide Rollout**: Gradually update other weeks and levels.

## 4. Verification Approach
- **Linting**: Ensure all JSON files are valid.
- **Content Validation**: Run `npm run validate-exercises` (if available, or similar script) to ensure new exercise types are supported by the frontend.
- **Schema Check**: Manually verify that the new fields don't break the current frontend rendering (this might require checking `src/components/`).
