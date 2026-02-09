# Product Requirements Document (PRD) - Exercise Audit & Optimization

## Objective
Audit all English learning exercises used in the `practica-inteligente` feature (covering A1 to C2 levels) to eliminate trivial and redundant content, ensuring a high-quality pedagogical experience aligned with Cambridge standards.

## Scope
- **Target Content**: All JSON unit files in `src/content/cursos/ingles-a*`, `ingles-b*`, `ingles-c*`, `emails-b1`, `negociaciones-b2`, and `viajes/a1`.
- **Target Audience**: Students using the "Práctica Inteligente" adaptive learning mode.
- **Pedagogical Standard**: Cambridge English (A1-C2).

## Requirements

### 1. Elimination of Redundancy
- **Exact Duplicates**: Identify and remove exercises that have identical prompts, stimuli, and answers across different units or within the same unit.
- **High Similarity**: Flag exercises that test the exact same concept with minimal variation in the same level.
- **Redundant Blocks**: Remove blocks that provide no additional value beyond what is already covered in previous/subsequent blocks.

### 2. Elimination of Triviality
- **Low Complexity**: Identify exercises with `complexity: 1` that don't offer sufficient cognitive challenge for the target level.
- **Obvious Answers**: Remove multiple-choice questions where distractors are non-sensical or too easy to eliminate.
- **Shallow Matching**: Remove matching exercises that are purely mechanical translations of basic words without context (especially beyond A1 level).

### 3. Quality Assurance
- **Correction**: Fix or remove exercises with typos, grammatical errors in English stimulus, or logical inconsistencies.
- **Tagging**: Ensure exercises have appropriate `mastery_tag` and `concept_tags` to work correctly with the adaptive engine.

## Success Criteria
- Reduction in total exercise count by removing low-value content.
- Increase in average complexity across levels (where appropriate).
- No duplicate exercises in the Global Content Provider.
- All remaining exercises adhere to Cambridge pedagogical principles.

## Stakeholder Approval Required
- Confirmation to proceed with automatic deletion of identified duplicates.
- Confirmation on the threshold for "triviality" (e.g., is complexity 1 always trivial for B1+?).
