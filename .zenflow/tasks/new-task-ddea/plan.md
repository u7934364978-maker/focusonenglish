# Full SDD workflow

## Configuration
- **Artifacts Path**: {@artifacts_path} → `.zenflow/tasks/{task_id}`

---

## Agent Instructions

If you are blocked and need user clarification, mark the current step with `[!]` in plan.md before stopping.

---

## Workflow Steps

### [x] Step: Requirements
<!-- chat-id: c0775a61-3363-45d0-85cd-b82663de5b58 -->

Create a Product Requirements Document (PRD) based on the feature description.

1. Review existing codebase to understand current architecture and patterns
2. Analyze the feature definition and identify unclear aspects
3. Ask the user for clarifications on aspects that significantly impact scope or user experience
4. Make reasonable decisions for minor details based on context and conventions
5. If user can't clarify, make a decision, state the assumption, and continue

Save the PRD to `{@artifacts_path}/requirements.md`.

### [x] Step: Technical Specification
<!-- chat-id: 39319626-68aa-4166-8ed6-56d1c26d7b01 -->

Create a technical specification based on the PRD in `{@artifacts_path}/requirements.md`.

1. Review existing codebase architecture and identify reusable components
2. Define the implementation approach

Save to `{@artifacts_path}/spec.md` with:
- Technical context (language, dependencies)
- Implementation approach referencing existing code patterns
- Source code structure changes
- Data model / API / interface changes
- Delivery phases (incremental, testable milestones)
- Verification approach using project lint/test commands

### [x] Step: Planning
<!-- chat-id: baf5dd94-6985-4e3d-80ad-164e77c42d0a -->

Create a detailed implementation plan based on `{@artifacts_path}/spec.md`.

1. Break down the work into concrete tasks
2. Each task should reference relevant contracts and include verification steps
3. Replace the Implementation step below with the planned tasks

Rule of thumb for step size: each step should represent a coherent unit of work (e.g., implement a component, add an API endpoint). Avoid steps that are too granular (single function) or too broad (entire feature).

Important: unit tests must be part of each implementation task, not separate tasks. Each task should implement the code and its tests together, if relevant.

If the feature is trivial and doesn't warrant full specification, update this workflow to remove unnecessary steps and explain the reasoning to the user.

Save to `{@artifacts_path}/plan.md`.

## Phase 1: Landing Page Enhancement

### [x] Step: Setup metadata extraction utilities
<!-- chat-id: caf1e3ef-90c1-49af-aa89-259e156b4d5a -->

Create the foundational utilities for extracting and processing unit metadata from JSON files.

**Implementation:**
- Create `/src/lib/utils/course-metadata.ts` with metadata extraction functions
- Implement `extractUnitMetadata()` to parse UnitData JSON and extract:
  - Exercise counts by type
  - Topics from mastery_tags
  - Difficulty calculation (heuristic based on unit number)
  - Estimated duration
- Implement `extractTopicsFromMasteryTags()` helper
- Implement `calculateDifficulty()` helper

**Tests:**
- Unit tests for `extractUnitMetadata()` with sample JSON data
- Test edge cases: missing fields, empty arrays, invalid unit IDs
- Verify correct exercise type counting
- Verify topic extraction logic

**Verification:**
- Run `npm run test` - all tests pass
- Run `npm run lint` - no errors
- Run `npm run type-check` - no type errors

---

### [x] Step: Extend premium course service with metadata functions
<!-- chat-id: 66ec98bf-89ee-4ef1-a673-412ddc42d720 -->

Add server-side functions to fetch and enrich A1 units with metadata.

**Implementation:**
- Extend `/src/types/premium-course.ts` with new interfaces:
  - `UnitMetadata`
  - `ExerciseTypeBreakdown`
  - `A1CourseMetadata`
  - `ModuleMetadata`
- Modify `/src/lib/services/premium-course-service.server.ts`:
  - Add `getA1UnitsWithMetadata()` function
  - Read all JSON files from `src/content/cursos/ingles-a1-narrative/`
  - Parse and enrich each unit with metadata using `extractUnitMetadata()`
  - Sort units by unit number
  - Return `A1CourseMetadata` object

**Tests:**
- Integration test: verify all 60 A1 units are loaded
- Test metadata accuracy for sample units (unit1, unit30, unit60)
- Test error handling for malformed JSON files

**Verification:**
- Run `npm run test` - all tests pass
- Manually verify metadata for 5 random units matches JSON content
- Run `npm run lint` and `npm run type-check` - no errors

---

### [x] Step: Create UnitCard component
<!-- chat-id: eb82d794-0339-497c-9e0f-59bace0f8647 -->

Build the unit card component to display unit metadata in a visually appealing card format.

**Implementation:**
- Create `/src/components/course/preview/UnitCard.tsx`
- Display:
  - Unit number and title
  - Topic badges (Grammar, Vocabulary, Reading, etc.)
  - Difficulty indicator (1-5 stars using Lucide icons)
  - Exercise count
  - Estimated duration
  - Preview button (links to unit preview page)
- Use Tailwind for styling (follow existing design patterns)
- Use Lucide React icons for visual elements
- Make responsive: adjust layout for mobile/tablet/desktop

**Tests:**
- Unit test: renders all metadata correctly
- Test: click handler navigates to correct unit
- Test: difficulty stars render correctly (1-5)
- Test: topic badges display and truncate properly

**Verification:**
- Visual inspection in Storybook or dev environment
- Test responsiveness at 320px, 768px, 1024px viewports
- Run `npm run lint` and `npm run type-check` - no errors

---

### [x] Step: Create A1CourseSelector component and landing page
<!-- chat-id: 81c713b9-0a50-4d41-b86b-a367fcf31feb -->

Build the main landing page with unit cards grid and basic filtering.

**Implementation:**
- Create `/src/components/course/preview/A1CourseSelector.tsx` (client component)
  - Accept `units: UnitMetadata[]` as prop
  - Implement responsive grid layout (1 col mobile, 2 col tablet, 3 col desktop)
  - Add basic search input (filter by unit number or title)
  - Map units to `UnitCard` components
  - Add loading state and error boundary
- Create `/src/app/debug/a1-preview/page.tsx` (server component)
  - Fetch units using `getA1UnitsWithMetadata()`
  - Pass units to `A1CourseSelector`
  - Add page header with course title and description
- Style with Tailwind, follow existing page patterns

**Tests:**
- Integration test: landing page loads all 60 units
- Test: search filtering works correctly
- Test: grid layout responds to viewport changes
- E2E test: visit landing page, verify 60 cards visible

**Verification:**
- Visit `/debug/a1-preview` in browser
- Count visible unit cards (should be 60)
- Test search functionality
- Test on mobile device or emulator
- Run `npm run test:e2e` for landing page tests
- Lighthouse accessibility score > 90

---

## Phase 2: Unit Preview Page Enhancements

### [x] Step: Create UnitOverviewHeader component
<!-- chat-id: 9ed148c3-055a-44f9-bde4-5fa3a0638376 -->

Build the overview header that displays unit learning objectives and metadata.

**Implementation:**
- Create `/src/components/course/preview/UnitOverviewHeader.tsx`
- Display:
  - Unit title and descriptive title
  - Learning outcomes (bullet list)
  - Topics covered (badges)
  - Exercise type breakdown (pills or chart showing counts)
  - Estimated duration
- Use Framer Motion for subtle entrance animations
- Style with Tailwind, use existing card patterns

**Tests:**
- Unit test: renders all metadata sections correctly
- Test: handles missing learning outcomes gracefully
- Test: exercise type breakdown displays all types
- Test: animations don't cause layout shift (CLS < 0.1)

**Verification:**
- Visual inspection: matches design
- Run `npm run test` - all tests pass
- Run `npm run lint` and `npm run type-check` - no errors

---

### [x] Step: Create PreviewNavBar component with breadcrumbs

Build enhanced navigation bar with breadcrumbs and unit dropdown.

**Implementation:**
- Create `/src/components/course/preview/PreviewNavBar.tsx`
- Implement breadcrumbs: `Home > A1 Course > Unit N`
- Add unit dropdown (quick jump to any unit)
- Add previous/next unit navigation buttons
- Show current progress (exercise N of M)
- Use Lucide React icons for navigation elements
- Make mobile-responsive (collapse breadcrumbs on small screens)

**Tests:**
- Unit test: breadcrumbs generate correctly for different routes
- Test: unit dropdown populates with all units
- Test: prev/next buttons navigate correctly
- Test: mobile responsive behavior (breadcrumbs collapse)

**Verification:**
- Navigate through multiple units using dropdown
- Verify breadcrumbs update correctly
- Test on mobile viewport
- Run `npm run lint` and `npm run type-check` - no errors

---

### [x] Step: Integrate UnitOverviewHeader into unit preview page

Modify the existing unit preview page to include the new overview header and navigation.

**Implementation:**
- Modify `/src/app/debug/a1-preview/[unitId]/page.tsx`
  - Fetch unit metadata using `extractUnitMetadata()`
  - Add `UnitOverviewHeader` before exercise list
  - Replace existing navigation with `PreviewNavBar`
  - Maintain backward compatibility with existing functionality
- Ensure smooth scroll behavior between sections
- Add anchor links to jump to specific exercise sections

**Tests:**
- Integration test: unit page loads with overview header
- Test: navigation between units works
- Test: existing exercise functionality unchanged
- E2E test: navigate from landing → unit → exercises

**Verification:**
- Visit `/debug/a1-preview/unit-1` through `/debug/a1-preview/unit-60`
- Verify overview header displays for all units
- Test navigation flow: landing → unit 5 → exercise 10 → unit 6
- Run `npm run test:e2e` - all preview tests pass

---

## Phase 3: Audio & Translation Features

### [x] Step: Create AudioPlayer component
<!-- chat-id: b9d9cd56-f186-4030-b2e3-b611d3681a9d -->

Build a custom audio player with playback controls and speed adjustment.

**Implementation:**
- Create `/src/components/course/preview/AudioPlayer.tsx`
- Features:
  - Play/pause button
  - Progress bar (clickable to seek)
  - Speed control (0.75x, 1x, 1.25x buttons)
  - Volume control (optional)
  - Transcript toggle button
- Use native HTML5 `<audio>` element as base
- Style with Tailwind, use Lucide icons for controls
- Add keyboard shortcuts (Space = play/pause, arrow keys = seek)
- Ensure accessibility (ARIA labels, screen reader support)

**Tests:**
- Unit test: audio controls render correctly
- Test: playback state management (play/pause/seek)
- Test: speed adjustment changes playback rate
- Test: keyboard shortcuts work
- Test: accessibility attributes present

**Verification:**
- Test with multiple audio files
- Verify speed controls work on all browsers
- Test keyboard navigation
- Run axe DevTools for accessibility check
- Run `npm run lint` and `npm run type-check` - no errors

---

### [x] Step: Create TranslationToggle component
<!-- chat-id: 3fb929f9-48fd-4255-ad35-78b9f2440c3d -->

Build interactive translation toggle for bilingual content.

**Implementation:**
- Create `/src/components/course/preview/TranslationToggle.tsx`
- Features:
  - Toggle button to show/hide translations
  - Parse `[[English|Spanish]]` syntax in text
  - Hover tooltip to preview translation (without toggling)
  - State management for translation visibility
  - Visual indicator for translatable words (subtle underline or color)
- Create utility function to parse and render bilingual text
- Use Radix UI Tooltip for hover interactions
- Style with Tailwind

**Tests:**
- Unit test: parses `[[English|Spanish]]` correctly
- Test: toggle state switches text display
- Test: hover tooltip shows correct translation
- Test: handles nested or malformed syntax gracefully
- Test: supports multiple translations in one string

**Verification:**
- Test with various bilingual text samples
- Verify tooltips appear on hover
- Test toggle functionality on multiple exercises
- Run `npm run lint` and `npm run type-check` - no errors

---

### [x] Step: Integrate AudioPlayer and TranslationToggle into exercises
<!-- chat-id: ad63712b-c96e-4886-94cd-01d80de39300 -->

Modify ExerciseRenderer to support audio and translation features.

**Implementation:**
- Locate and modify `ExerciseRenderer.tsx` (or relevant exercise component)
- For exercises with `audioUrl`:
  - Display `AudioPlayer` component
  - Auto-load audio file
  - Show transcript if available
- For exercises with bilingual text:
  - Wrap text with `TranslationToggle` parsing
  - Add translation toggle button to exercise header
- Ensure features don't interfere with existing exercise logic
- Add loading states for audio files

**Tests:**
- Integration test: exercise with audio displays player
- Test: exercise without audio doesn't show player
- Test: bilingual text parses and toggles correctly
- Test: audio playback during exercise interaction
- E2E test: complete exercise with audio and translations

**Verification:**
- Test 5-10 different exercises with audio
- Test exercises with heavy bilingual content
- Verify no console errors during audio playback
- Test on mobile devices
- Run `npm run test:e2e` - all exercise tests pass

---

## Phase 4: Advanced Filtering & Module Grouping

### [ ] Step: Implement topic and difficulty filters

Add advanced filtering to the A1CourseSelector component.

**Implementation:**
- Modify `/src/components/course/preview/A1CourseSelector.tsx`
- Add filter UI:
  - Topic filter (checkboxes or pills): Grammar, Vocabulary, Reading, Listening, Speaking
  - Difficulty filter (radio buttons or slider): 1-5 stars
  - Clear filters button
- Implement filter logic:
  - Filter units based on selected topics (AND/OR logic)
  - Filter by difficulty range
  - Combine with existing search functionality
- Add "active filters" display (removable chips)
- Ensure instant filtering (< 100ms response time)

**Tests:**
- Unit test: filter logic correctly filters units
- Test: multiple filters combine correctly (topic + difficulty + search)
- Test: clear filters resets to all units
- Test: active filter chips remove individual filters
- Performance test: filtering 60 units completes in < 100ms

**Verification:**
- Apply each filter individually and verify results
- Apply multiple filters together
- Test clear filters functionality
- Measure filter performance in browser DevTools
- Run `npm run lint` and `npm run type-check` - no errors

---

### [ ] Step: Implement module grouping UI

Add module-based organization to group units thematically.

**Implementation:**
- Define module structure (e.g., Module 1 = Units 1-10, Module 2 = Units 11-20, etc.)
- Create `/src/components/course/preview/ModuleGroup.tsx`
- Modify `A1CourseSelector` to support module view toggle
- Display units grouped by modules (collapsible sections)
- Add module metadata:
  - Module title (e.g., "Module 1: Basics & Greetings")
  - Unit count
  - Total duration
  - Module description
- Allow toggling between grid view (all units) and module view (grouped)

**Tests:**
- Unit test: module grouping logic correctly groups units
- Test: toggle between grid and module views
- Test: collapsible module sections expand/collapse
- Test: module metadata calculated correctly

**Verification:**
- Toggle between grid and module views
- Verify all 60 units are visible in both views
- Test collapsible sections
- Run `npm run lint` and `npm run type-check` - no errors

---

### [ ] Step: Create course outline view

Build a comprehensive course outline page showing all units and their structure.

**Implementation:**
- Create `/src/app/debug/a1-preview/outline/page.tsx`
- Display:
  - Full table of all 60 units with metadata
  - Columns: Unit #, Title, Topics, Exercises, Duration, Difficulty
  - Sortable columns (click header to sort)
  - Downloadable as PDF (print-friendly CSS)
- Add link to outline page from landing page header
- Use responsive table design (cards on mobile, table on desktop)
- Add search and filter capabilities

**Tests:**
- Integration test: outline page loads all 60 units
- Test: column sorting works correctly
- Test: table responsive behavior on mobile
- Test: print styles render correctly

**Verification:**
- Visit `/debug/a1-preview/outline`
- Test sorting by each column
- Test print preview (Ctrl+P)
- Test on mobile viewport
- Run `npm run test:e2e` - outline page tests pass

---

## Phase 5: Polish & Optimization

### [ ] Step: Mobile optimization and performance improvements

Optimize the preview experience for mobile devices and improve overall performance.

**Implementation:**
- **Mobile-first enhancements:**
  - Increase touch target sizes (min 44x44px)
  - Add swipe gestures for unit navigation (optional, if time permits)
  - Optimize bottom navigation for thumb reach
  - Test on real iOS and Android devices
- **Performance optimizations:**
  - Implement lazy loading for unit cards (load 20 at a time)
  - Optimize images (use WebP format, responsive sizes)
  - Add loading skeletons for better perceived performance
  - Minimize JavaScript bundle size (code splitting)
  - Prefetch next unit data on hover
- **Accessibility improvements:**
  - Ensure all interactive elements keyboard accessible
  - Add focus indicators
  - Verify ARIA labels on all icon buttons
  - Test with screen reader (VoiceOver or NVDA)

**Tests:**
- Performance test: Lighthouse score > 85
- Test: load time < 2s on throttled 3G
- Test: lazy loading loads cards progressively
- Accessibility test: keyboard navigation works
- E2E test: mobile viewport navigation flow

**Verification:**
- Run Lighthouse audit (Performance, Accessibility, Best Practices)
- Test on 5+ mobile devices/emulators (iOS Safari, Chrome Android)
- Throttle network to 3G, measure load time
- Test with keyboard only (no mouse)
- Run axe DevTools accessibility scan
- Run `npm run test:e2e:mobile` - all mobile tests pass

---

### [ ] Step: Add analytics tracking and final polish

Implement analytics tracking for preview interactions and apply final UX polish.

**Implementation:**
- **Analytics tracking:**
  - Track landing page visits
  - Track unit card clicks
  - Track filter usage (which filters are most used)
  - Track audio playback events
  - Track translation toggle usage
  - Track time spent on each unit
  - Track exercise completion in preview mode
- **UX polish:**
  - Add subtle animations (Framer Motion)
  - Improve error states and empty states
  - Add tooltips for clarity (e.g., difficulty stars explanation)
  - Improve loading states (skeletons, progress indicators)
  - Add success messages ("Unit completed!" toast)
- **A/B test setup (optional):**
  - Prepare for CTA testing (button copy, placement)
  - Document analytics events for conversion funnel

**Tests:**
- Test: analytics events fire correctly (check browser console)
- Test: animations don't cause layout shift
- Test: error boundaries catch and display errors gracefully
- Test: tooltips display on hover

**Verification:**
- Verify analytics events in browser DevTools Console
- Test error scenarios (invalid unit ID, network failure)
- Review animations on slow devices
- Run `npm run lint` and `npm run type-check` - no errors

---

## Final Verification & Testing

### [ ] Step: Comprehensive testing and quality assurance

Run all tests, perform manual QA, and ensure production readiness.

**Implementation:**
- **Automated testing:**
  - Run full test suite: `npm run test`
  - Run E2E tests: `npm run test:e2e` (Chromium, Firefox, WebKit)
  - Run mobile E2E tests: `npm run test:e2e:mobile`
  - Run Lighthouse CI audits
- **Manual QA:**
  - Test critical user journeys (10+ scenarios)
  - Cross-browser testing (Chrome, Firefox, Safari, Edge)
  - Mobile device testing (iOS, Android)
  - Accessibility testing (keyboard, screen reader)
- **Performance verification:**
  - Lighthouse Performance > 85
  - Lighthouse Accessibility > 90
  - FCP < 1.5s, LCP < 2.5s, CLS < 0.1
  - Load time < 2s on 4G
- **Regression testing:**
  - Verify existing `/preview/[courseId]/[unitId]` route still works
  - Ensure no console errors or warnings
  - Check bundle size increase < 50KB gzipped

**Verification:**
- ✅ All unit tests pass
- ✅ All integration tests pass
- ✅ All E2E tests pass (desktop + mobile)
- ✅ Lighthouse scores meet targets
- ✅ No console errors in production build
- ✅ Cross-browser compatibility verified
- ✅ Mobile responsiveness verified on real devices
- ✅ Zero regressions in existing functionality
- Document test results in plan.md

---

### [ ] Step: Code review and deployment preparation

Prepare code for review and production deployment.

**Implementation:**
- **Code cleanup:**
  - Remove console.logs and debug code
  - Remove unused imports and dead code
  - Ensure consistent code formatting
  - Add JSDoc comments to complex functions
- **Documentation:**
  - Update component README (if exists)
  - Document new environment variables (if any)
  - Document analytics events
  - Create migration guide for future enhancements
- **Pre-deployment checklist:**
  - Run `npm run lint` - no errors
  - Run `npm run type-check` - no type errors
  - Run `npm run build` - successful build
  - Test production build locally
  - Review bundle size (check for unexpected increases)
  - Verify environment variables configured

**Verification:**
- ✅ Code passes all linting and type checks
- ✅ Production build succeeds
- ✅ Manual testing in production build
- ✅ Bundle size reviewed and acceptable
- ✅ Documentation complete
- ✅ Ready for code review and deployment
