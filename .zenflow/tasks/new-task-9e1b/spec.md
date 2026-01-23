# Technical Specification: Exercise Validation Tool

## Task Complexity
**Difficulty: Easy**

This is a straightforward validation task that involves creating a script to check exercise data integrity.

## Technical Context

### Language & Environment
- **Language**: JavaScript (ES Modules)
- **Runtime**: Node.js (>= 20.9.0)
- **Dependencies**: None (uses only Node.js built-in modules: fs, path)

### Project Structure
- **Exercise Data Files**: Located in `lib/` directory
  - `course-data-a1.ts` - A1 level course exercises
  - `course-data-b2.ts` - B2 level course exercises
  - `b2-improvements-part*.ts` - B2 exam practice exercises (7 files)

### Exercise Data Structure
Exercises in the codebase follow TypeScript interfaces with these key fields:
- `id`: Unique identifier for each exercise
- `type`: Exercise type (reading, writing, grammar, etc.)
- **Statement fields** (at least one required):
  - `title`: Exercise title
  - `instructions`: Exercise instructions
  - `prompt`: Exercise prompt
  - `question`: Question text
- `questions`: Array of question objects
- `transformations`, `formations`, `items`, `targetSentences`: Type-specific arrays

## Implementation Approach

### Solution Design
Create a validation script that:
1. Reads all exercise data files
2. Parses TypeScript files using regex patterns to extract exercise objects
3. Validates each exercise has required fields
4. Checks for common issues (empty fields, placeholders, template variables)
5. Generates a detailed report

### Validation Rules

#### Critical Errors (Block deployment)
1. **Missing Statement**: Exercise has no title, instructions, prompt, or question
2. **Empty Required Fields**: id, type, correctAnswer are empty
3. **Unreplaced Templates**: Fields contain `{{variable}}` patterns
4. **Empty Questions**: Question text is empty

#### Warnings (Review recommended)
1. **Short Fields**: Text shorter than 3 characters (excluding options)
2. **Placeholder Text**: Contains TODO, TBD, XXX, or "..."
3. **Empty Arrays**: questions, options, or items arrays are empty

### Algorithm
```
For each exercise data file:
  1. Read file content
  2. Find all objects with 'id:' pattern
  3. For each potential exercise:
     a. Extract exercise block (id to closing brace)
     b. Check for statement fields (title/instructions/prompt/question)
     c. If no statement found → ERROR
     d. Validate each statement field for issues
     e. Validate nested questions and sentences
  4. Collect all errors and warnings
  
Generate summary report with:
  - Total exercises found
  - Error and warning counts by file
  - Detailed list of issues per exercise
  - Exit code 1 if errors found, 0 if only warnings
```

## Source Code Changes

### New Files Created
1. **`scripts/validate-exercises.mjs`** (259 lines)
   - Main validation script
   - Functions:
     - `validateExerciseInContent()`: Parses and validates exercises in file content
     - `checkField()`: Validates individual field values
     - `reportIssue()`: Collects validation errors
     - `validateFile()`: Processes single file
     - `main()`: Orchestrates validation and reporting

### Modified Files
1. **`package.json`**
   - Added script: `"validate-exercises": "node scripts/validate-exercises.mjs"`
   - Allows running: `npm run validate-exercises`

## Verification Approach

### Testing Strategy
1. **Smoke Test**: Run script on all files without errors
2. **Validation Test**: Verify script detects actual issues
3. **Performance Test**: Script completes in < 5 seconds for all files
4. **Report Test**: Output is clear and actionable

### Test Execution
```bash
npm run validate-exercises
```

### Expected Output Format
```
🔍 Exercise Validation Tool
...
📊 VALIDATION SUMMARY
Total Exercises Found: <count>
Total Issues: <count>
  ❌ Errors: <count>
  ⚠️  Warnings: <count>

📋 DETAILED REPORT:
[Per-file breakdown with exercise IDs and specific issues]
```

### Success Criteria
- [x] Script runs without crashes
- [x] Detects exercises across all 9 data files
- [x] Identifies missing statement fields
- [x] Identifies placeholder text
- [x] Generates readable report
- [x] Exit code indicates pass/fail status
- [x] Added to package.json for easy execution

## Validation Results

### Initial Run Results
- **Total Exercises Scanned**: 1,523
- **Total Issues Found**: 569
  - ❌ **Errors**: 505 (critical issues)
  - ⚠️ **Warnings**: 64 (non-blocking issues)

### Issues Breakdown by File

1. **course-data-b2.ts** - 451 issues (387 errors, 64 warnings)
   - Most warnings: Placeholder text in prompts
   - Most errors: Missing statement fields

2. **course-data-a1.ts** - 70 errors
   - All errors: Missing statement fields
   - Affected exercises appear to be configuration objects, not actual exercises

3. **b2-improvements-part4-key-transformations.ts** - 48 errors
   - All errors: Missing statement fields
   - Key transformation exercises missing parent instructions

4. Other files: Minimal or no issues

### Key Findings
1. **False Positives**: Some IDs belong to configuration objects (e.g., `all`, `adjectives`, `easy`) rather than actual exercises
2. **Real Issues**: Many B2 exercises contain placeholder text (`...`) in prompts
3. **Structural Issue**: Key transformation exercises lack wrapper instructions
4. **Good News**: Most exercises (1,018 out of 1,523 = 67%) have no issues

## Recommendations

### Immediate Actions
1. Review placeholder text in B2 course (64 warnings)
2. Investigate key transformation structure
3. Filter configuration objects from validation

### Future Improvements
1. Add AST parsing for more accurate detection
2. Validate question options completeness
3. Check correctAnswer format
4. Validate audio/image URLs if present
5. Add spell checking for English text
