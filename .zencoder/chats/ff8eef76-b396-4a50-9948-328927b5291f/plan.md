# Plan: Embed Administration A1 Course

## Workflow Steps

### [x] Step: Requirements
Create a Product Requirements Document (PRD) based on the feature description.
- Status: Completed
- PRD: `/Users/lidia/Documents/focusonenglish/.zencoder/chats/ff8eef76-b396-4a50-9948-328927b5291f/requirements.md`

### [x] Step: Technical Specification
Create a technical specification based on the PRD.
- Status: Completed
- Spec: `/Users/lidia/Documents/focusonenglish/.zencoder/chats/ff8eef76-b396-4a50-9948-328927b5291f/spec.md`

### [ ] Step: Implementation

1. **[x] Move SCORM assets to public directory**
   - Create `public/courses/administracion/a1`
   - Copy files from `scorm_package_1.2/` to `public/courses/administracion/a1/`
2. **[x] Create the course page**
   - Create directories: `src/app/cursos/trabajo/administracion/a1/trimestre1/semana01/`
   - Create `page.tsx` with iframe embedding
3. **[x] Verify the implementation**
   - Check the page layout and iframe functionality
