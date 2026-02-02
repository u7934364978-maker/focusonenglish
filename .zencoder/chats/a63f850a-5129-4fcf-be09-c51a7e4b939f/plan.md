# Full SDD workflow

## Workflow Steps

### [x] Step: Requirements
### [x] Step: Technical Specification

### [x] Step: Planning

1. Break down the work into concrete tasks
2. Each task should reference relevant contracts and include verification steps
3. Replace the Implementation step below with the planned tasks

### [x] Step: Implementation

#### [x] 1. Remove global canonical from root layout
- **Task**: Edit `src/app/layout.tsx` to remove the `alternates` property from the `metadata` object.
- **Verification**: Check file content to ensure no `alternates` property remains in the root `metadata`.

#### [x] 2. Add explicit canonical to Homepage
- **Task**: Edit `src/app/page.tsx` to add `alternates: { canonical: 'https://www.focus-on-english.com' }` to the `metadata` object.
- **Verification**: Verify the `metadata` object in `src/app/page.tsx`.

#### [x] 3. Add explicit canonical to Blog main page
- **Task**: Edit `src/app/blog/page.tsx` to add `alternates: { canonical: 'https://www.focus-on-english.com/blog' }` to the `metadata` object.
- **Verification**: Verify the `metadata` object in `src/app/blog/page.tsx`.

#### [x] 4. Add explicit canonical to Contact page
- **Task**: Edit `src/app/contacto/page.tsx` to add `alternates: { canonical: 'https://www.focus-on-english.com/contacto' }` to the `metadata` object.
- **Verification**: Verify the `metadata` object in `src/app/contacto/page.tsx`.

#### [x] 5. Add explicit canonical to Plans page
- **Task**: Edit `src/app/planes/metadata.ts` to add `alternates: { canonical: 'https://www.focus-on-english.com/planes' }` to the `metadata` object.
- **Verification**: Verify the `metadata` object in `src/app/planes/metadata.ts`.

#### [x] 6. Add explicit canonical to Level Test page
- **Task**: Edit `src/app/test-nivel/page.tsx` to add `alternates: { canonical: 'https://www.focus-on-english.com/test-nivel' }` to the `metadata` object.
- **Verification**: Verify the `metadata` object in `src/app/test-nivel/page.tsx`.

#### [x] 7. Update Blog Category pages to use absolute canonical URLs
- **Task**: Edit `src/app/blog/[category]/page.tsx` to change the `canonical` URL from a relative path to `https://www.focus-on-english.com/blog/${category}`.
- **Verification**: Verify the `generateMetadata` function in `src/app/blog/[category]/page.tsx`.

#### [x] 8. Final Verification
- **Task**: Run `npm run build` to ensure no metadata or build errors were introduced.
- **Verification**: Build command finishes successfully.
