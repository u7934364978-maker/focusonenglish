# Product Requirements Document (PRD) - B1 Unit 15: Urban Life, Places & Housing

## Overview
Implement the content for B1 Unit 15 focusing on "Urban Life, Places & Housing". This unit is part of the B1 Intermediate course and should provide exercises that cover relevant vocabulary, grammar, and skills.

## Goals
- Provide a comprehensive set of exercises (approx. 15-20) for Unit 15.
- Cover vocabulary related to urban environments, housing types, and city facilities.
- Review and practice grammar: Relative clauses (defining and non-defining), passive voice for descriptions, and prepositions of place/movement.
- Ensure the content follows the existing B1 course structure and formatting.

## Content Requirements

### Vocabulary
- Housing: flat/apartment, semi-detached house, terraced house, cottage, skyscraper, suburbs, residential area.
- City life: traffic jam, public transport, facilities, nightlife, crowded, lively, polluted, pedestrian zone.
- Places: town hall, department store, skyscraper, harbor, outskirts.

### Grammar
- Relative Clauses: "The neighborhood where I live...", "The house which was built in 1920..."
- Passive Voice: "The new bridge was completed last year.", "Many old buildings are being renovated."
- Prepositions: "Located in the heart of...", "Across from the park...", "Through the city center."

### Exercise Types
- Multiple Choice (Grammar and Vocabulary)
- Flashcards (Vocabulary)
- Fill in the blanks (Sentence construction and Grammar)
- Speaking/Transcript based exercises (as per existing unit patterns)

## Technical Requirements
- Implementation in `src/lib/course/b1/unit-15.ts`.
- Export `UNIT_15_EXERCISES` as an array of `Exercise` objects.
- Use unique IDs following the pattern `b1-u15-eX`.
- Include Spanish translations for vocabulary and explanations.

## Verification
- Visual verification via `/debug/b1-preview/unit-15`.
- Linting and type checking using `npm run lint` and `npm run typecheck`.
