# Technical Specification - Course Audit: A1 English

## 1. Technical Context
- **Language**: JSON for content, TypeScript/Node.js for potential automation.
- **Data Location**: `src/content/cursos/ingles-a1/`
- **Schema**: Unit JSON files following the structure seen in `unit1.json`.

## 2. Implementation Approach
The audit will be performed unit by unit. 
1. **Analysis**: Compare `unit_title` in JSON and `syllabus.md` with the content of `blocks`.
2. **Identification**: Mark exercises that are "off-topic" or too advanced/simple for the unit's position in the syllabus.
3. **Correction**: Rewrite the `content` array for the affected blocks while maintaining the JSON schema.
4. **Verification**: Ensure `interaction_id` and `mastery_tag` are consistent.

### 2.1 JSON Schema Consistency
Each interaction must include:
- `interaction_id`: String (e.g., "U1_I1")
- `type`: one of `multiple_choice`, `matching`, `transformation`, `true_false`, `reorder_words`, `image_selection`.
- `prompt_es`: Spanish prompt.
- `correct_answer`: Dependent on type.
- `mastery_tag`: `vocabulary`, `grammar`, `culture`, etc.

## 3. Source Code Structure Changes
- Only JSON files in `src/content/cursos/ingles-a1/` will be modified.

## 4. Delivery Phases
- **Phase 1**: Audit Module 1 (Units 1-10).
- **Phase 2**: Audit Module 2 (Units 11-20).
- **Phase 3**: Audit Module 3 (Units 21-30).
- **Phase 4**: Audit Module 4 (Units 31-40).
- **Phase 5**: Audit Module 5 (Units 41-50).
- **Phase 6**: Audit Module 6 (Units 51-60).

## 5. Verification Approach
- **Manual Review**: Final check of the JSON content for pedagogical accuracy.
- **Validation Script**: Use `npm run validate-exercises` if available or a custom script to ensure JSON validity.
- **Visual Check**: Ensure no broken links or missing options.
