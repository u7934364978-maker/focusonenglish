# Full SDD workflow

## CURRENT TASK: A2 Unit 4 Review & Fixes

### [x] Scan for translation issues
- Check all English words in unit-4.ts for proper translations
- Identify loose/malformed brackets

### [x] Fix nested bracket errors (6 instances)
- Line 136: Fixed `[[girl|niñ[[a|un]]]]` → `[[girl|niña]]`
- Line 214: Fixed `[[girl|niñ[[a|un]]]]` → `[[girl|niña]]`
- Line 617: Fixed `[[to|[[a|un]]]]` → `[[to|a]]`
- Line 620: Fixed `[[to|[[a|un/una]]]]` → `[[to|a]]`
- Line 695: Fixed `[[to|[[a|un]]]]` → `[[to|a]]`
- Line 776: Fixed `[[to|[[a|un/una]]]]` → `[[to|a]]`
- Line 851: Fixed `[[girl|niñ[[a|un]]]]` → `[[girl|niña]]`

### [x] Add Spanish translations to untranslated titles (9 instances)
- Line 154: "Facial Features" → `[[Facial|Faciales]] [[Features|Características]]`
- Line 171: "Ears" → `[[Ears|Orejas]]`
- Line 193: "Hair Color" → `[[Hair|Cabello]] [[Color|Color]]`
- Line 548: "Adjective Order for Clothing" → `[[Adjective|Adjetivo]] [[Order|Orden]] [[for|para]] [[Clothing|Ropa]]`
- Line 587: "Adjective Order Review" → `[[Adjective|Adjetivo]] [[Order|Orden]] [[Review|Repaso]]`
- Line 613: "Height and Build" → `[[Height|Altura]] [[and|y]] [[Build|Constitución]]`
- Line 635: "Face Description" → `[[Face|Cara]] [[Description|Descripción]]`
- Line 791: "Glasses/Spectacles" → `[[Glasses|Gafas]]/[[Spectacles|Lentes]]`
- Line 1191: "Comprehension: Clothing" → `[[Comprehension|Comprensión]]: [[Clothing|Ropa]]`

### [x] Verify all fixes in browser
- Page loads successfully with all corrections applied

### [x] Git commit
- **Commit Hash**: `e6d7ae1f`
- **Message**: "Fix A2 Unit 4: Remove nested brackets and add Spanish translations to titles"
- **Files Modified**: 8 files changed, 880 insertions(+), 17 deletions(-)

### [x] Fix untranslated words in exercises (20+ instances)
Fixed all bare English words not wrapped in [[word|translation]] format including:
- "commonly", "elegant", "stands", "duck", "through", "doorways", "paired", "gala", "classic", "choice"
- "graceful", "posture", "characteristically", "training", "physique", "freckles", "wrinkles"
- "formal", "visible", "muscle", "development", "exposure", "smartly", "build"

### [x] Git commit & push (Translation fixes)
- **Commit Hash**: `fce3c5c1`
- **Message**: "Fix A2 Unit 4: Add missing Spanish translations for all untranslated words in exercises"
- **Files Modified**: 2 files changed, 19 insertions(+), 14 deletions(-)
- **Status**: ✅ Pushed to main branch

### [x] Fix Exercise 13 untranslated words
Fixed missing translations in exercise 13 (a2-u4-e13) - "Height and Build":
- Added translations for: basketball, player, who, reaches, high, shelves, ladder, objects
- Lines updated: 253 (question), 256 (explanation)

### [x] Git commit & push (Exercise 13 fixes)
- **Commit Hash**: `c0257c15`
- **Message**: "Fix A2 Unit 4 Exercise 13: Add missing translations for basketball, player, who, reaches, high, shelves, ladder, objects"
- **Files Modified**: 2 files changed, 14 insertions(+), 2 deletions(-)
- **Status**: ✅ Pushed to main branch

---

## Workflow Steps

### [ ] Step: Requirements

Create a Product Requirements Document (PRD) based on the feature description.

1. Review existing codebase to understand current architecture and patterns
2. Analyze the feature definition and identify unclear aspects
3. Ask the user for clarifications on aspects that significantly impact scope or user experience
4. Make reasonable decisions for minor details based on context and conventions
5. If user can't clarify, make a decision, state the assumption, and continue

Save the PRD to `/Users/lidia/Documents/focusonenglish/focusonenglish/.zencoder/chats/c59fad98-4283-435a-a7e5-6ee371143662/requirements.md`.

### [ ] Step: Technical Specification

Create a technical specification based on the PRD in `/Users/lidia/Documents/focusonenglish/focusonenglish/.zencoder/chats/c59fad98-4283-435a-a7e5-6ee371143662/requirements.md`.

1. Review existing codebase architecture and identify reusable components
2. Define the implementation approach

Save to `/Users/lidia/Documents/focusonenglish/focusonenglish/.zencoder/chats/c59fad98-4283-435a-a7e5-6ee371143662/spec.md` with:

- Technical context (language, dependencies)
- Implementation approach referencing existing code patterns
- Source code structure changes
- Data model / API / interface changes
- Delivery phases (incremental, testable milestones)
- Verification approach using project lint/test commands

### [ ] Step: Planning

Create a detailed implementation plan based on `/Users/lidia/Documents/focusonenglish/focusonenglish/.zencoder/chats/c59fad98-4283-435a-a7e5-6ee371143662/spec.md`.

1. Break down the work into concrete tasks
2. Each task should reference relevant contracts and include verification steps
3. Replace the Implementation step below with the planned tasks

Rule of thumb for step size: each step should represent a coherent unit of work (e.g., implement a component, add an API endpoint, write tests for a module). Avoid steps that are too granular (single function) or too broad (entire feature).

If the feature is trivial and doesn't warrant full specification, update this workflow to remove unnecessary steps and explain the reasoning to the user.

Save to `/Users/lidia/Documents/focusonenglish/focusonenglish/.zencoder/chats/c59fad98-4283-435a-a7e5-6ee371143662/plan.md`.

### [ ] Step: Implementation

This step should be replaced with detailed implementation tasks from the Planning step.

If Planning didn't replace this step, execute the tasks in `/Users/lidia/Documents/focusonenglish/focusonenglish/.zencoder/chats/c59fad98-4283-435a-a7e5-6ee371143662/plan.md`, updating checkboxes as you go. Run planned tests/lint and record results in plan.md.
