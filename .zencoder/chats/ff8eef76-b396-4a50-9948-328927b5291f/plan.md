# Plan: Embed Specialized Courses (Admin & Foreign Trade)

## Workflow Steps

### [x] Step: Requirements
- Status: Completed
- PRDs: 
  - Admin: `requirements.md`
  - Foreign Trade: `requirements-comercio.md`

### [x] Step: Technical Specification
- Status: Completed
- Specs: 
  - Admin: `spec.md`
  - Foreign Trade: `spec-comercio.md`

### [ ] Step: Implementation

#### Admin A1 Course
1. **[x] Move SCORM assets to public directory**
2. **[x] Create the course page**
3. **[x] Fix SCORM LMS error with direct URL**

#### Foreign Trade A1 Course
1. **[ ] Move SCORM assets to public directory**
   - Create `public/courses/comercio-exterior/a1`
   - Copy files from `inglesA1comercioexterior/`
2. **[ ] Create the course page**
   - Create `src/app/cursos/trabajo/comercio-exterior/a1/trimestre1/semana01/page.tsx`
3. **[ ] Update Navigation menu**
   - Add "Comercio Exterior" submenu in `Navigation.tsx`
4. **[ ] Verify the implementation**
