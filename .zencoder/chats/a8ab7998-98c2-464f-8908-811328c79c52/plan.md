# Full SDD workflow

## Workflow Steps

### [x] Step: Requirements
Create a Product Requirements Document (PRD) based on the feature description.
- Status: Completed
- File: `/Users/lidia/Documents/focusonenglish/focusonenglish/.zencoder/chats/a8ab7998-98c2-464f-8908-811328c79c52/requirements.md`

### [x] Step: Technical Specification
Create a technical specification based on the PRD.
- Status: Completed
- File: `/Users/lidia/Documents/focusonenglish/focusonenglish/.zencoder/chats/a8ab7998-98c2-464f-8908-811328c79c52/spec.md`

### [x] Step: Planning
Create a detailed implementation plan.
- Status: Completed

### [x] Step: Implementation

#### [x] Phase 1: Global Search and Replace
Apply common rephrasings to all identified files in `src/content/blog/` and `src/content/hubs/`.
- [x] Replace "AI English Tutor" with "Ejercicios de práctica inteligente"
- [x] Replace "conversar con nuestra IA" with "practicar con ejercicios interactivos"
- [x] Replace "hablar con un tutor de IA" with "mejorar tu speaking con ejercicios guiados"
- [x] Replace "tutor de IA" with "plataforma de ejercicios"

#### [x] Phase 2: Manual Refinement of AI-Focused Articles
Review and manually edit articles that are heavily focused on IA to ensure they focus on exercises.
- [x] `src/content/blog/metodos/aprender-ingles-ia-guia.md`
- [x] `src/content/blog/metodos/mejores-apps-ingles-ia-2026.md`
- [x] `src/content/hubs/aprender-ingles-con-chatgpt.md`

#### [x] Phase 3: Verification
- [x] Run `grep -i "tutor IA"` to ensure no matches.
- [x] Run `grep -i "conversar con IA"` to ensure no matches.
- [x] Run `npm run build` to verify no syntax errors.
