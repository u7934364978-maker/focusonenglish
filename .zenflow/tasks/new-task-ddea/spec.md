# Technical Specification: A1 Course Preview Improvements

**Document Version:** 1.0  
**Date:** 2026-02-23  
**Status:** Draft

---

## 1. Technical Context

### 1.1 Current Architecture

**Framework & Runtime:**
- **Frontend:** Next.js 15.1.3 (App Router) with React 19.0.0
- **TypeScript:** 5.7.2
- **Node.js:** >= 20.9.0
- **Build System:** npm

**Key Dependencies:**
- **UI/UX:** `framer-motion`, `lucide-react`, `@radix-ui/react-*`, `tailwindcss`
- **Backend:** `@supabase/supabase-js`, `@supabase/ssr`
- **Data Validation:** `zod`, `ajv`

**Current Preview Implementation:**
- **Route:** `/debug/a1-preview/[unitId]` (client component)
- **Alternative Route:** `/preview/[courseId]/[unitId]` (server component with PreviewClient)
- **Data Source:** JSON files in `src/content/cursos/ingles-a1-narrative/`
- **Data Service:** `premiumCourseServerService` (server-side)
- **Exercise Renderer:** `ExerciseRenderer` component

### 1.2 Data Structure

**Unit Data (UnitData):**
```typescript
interface UnitData {
  course: {
    unit_id: string;          // e.g., "unit3"
    unit_title: string;       // e.g., "Arriving at the Hostel"
    level: string;            // e.g., "A1-Narrative"
    total_duration_minutes: number;
    language_ui: string;      // e.g., "es-ES"
    target_language: string;  // e.g., "en"
  };
  learning_outcomes?: string[];
  mastery_tags?: string[];
  blocks: PremiumBlock[];
}

interface PremiumBlock {
  block_id: string;
  title: string;
  duration_minutes: number;
  content: PremiumContent[];
}

interface PremiumInteraction {
  interaction_id: string;
  type: string;              // multiple_choice, fill_blank, reading, etc.
  prompt_es: string;
  mastery_tag: string;
  audioUrl?: string;
  // ... other properties
}
```

**Current Data Location:**
- 246 JSON files across multiple course levels
- A1 course: `src/content/cursos/ingles-a1-narrative/unit{N}.json`
- Fallback: Supabase `course_lessons` and `course_exercises` tables

---

## 2. Implementation Approach

### 2.1 Architecture Decisions

**Design Pattern:**
- **Client-Server Hybrid:** Landing page and unit selector (Server Component) → Unit preview (Client Component)
- **Progressive Enhancement:** Basic functionality first, enhanced UX incrementally
- **Data-Driven UI:** Extract metadata from existing JSON files, avoid manual data entry
- **Responsive-First:** Mobile-optimized from the start

**Component Strategy:**
- Reuse existing components: `ExerciseRenderer`, navigation patterns from dashboard
- Create new composable components for unit cards, filters, and navigation
- Use existing design system (Tailwind + Radix UI)

**Data Strategy:**
- **Phase 1:** Extract metadata from JSON files at build time (static analysis)
- **Phase 2:** Extend `UnitData` interface to include rich metadata (optional fields)
- **Phase 3:** Store aggregated metadata in Supabase for faster queries (if needed)

### 2.2 Existing Code Patterns to Follow

**Component Conventions:**
- Use `'use client'` directive for interactive components
- Server Components for data fetching (leverage `premiumCourseServerService`)
- Lucide React icons (`import { IconName } from 'lucide-react'`)
- Framer Motion for animations (`motion.div`, `animate-in`)

**Styling Conventions:**
- Tailwind utility classes
- Color palette: `coral-*`, `slate-*`, `yellow-*` for accents
- Rounded corners: `rounded-xl`, `rounded-2xl`, `rounded-3xl`
- Shadows: `shadow-xl`, `shadow-2xl`
- Font weights: `font-bold`, `font-black` for headings

**Navigation Patterns:**
- Next.js `Link` component for routing
- `useRouter` from `next/navigation` for programmatic navigation
- Breadcrumbs structure: `Home > Course > Module > Unit`

---

## 3. Source Code Structure Changes

### 3.1 New Files to Create

#### **Landing Page (Server Component)**
**File:** `/src/app/debug/a1-preview/page.tsx`
```typescript
// Server Component: Fetches all units, displays enhanced selector
export default async function A1PreviewLandingPage() {
  const units = await getA1UnitsWithMetadata();
  return <A1CourseSelector units={units} />;
}
```

#### **Unit Selector Component (Client Component)**
**File:** `/src/components/course/preview/A1CourseSelector.tsx`
- Displays enhanced unit cards grid
- Implements filters (topic, difficulty, search)
- Module grouping UI
- Responsive layout (grid: 1 col mobile, 2 col tablet, 3 col desktop)

#### **Unit Card Component**
**File:** `/src/components/course/preview/UnitCard.tsx`
- Displays unit metadata (title, topics, difficulty, duration)
- Preview button
- Exercise count badge
- Thumbnail icon

#### **Unit Overview Header**
**File:** `/src/components/course/preview/UnitOverviewHeader.tsx`
- Shows unit title, description, learning outcomes
- Topics covered (badges)
- Exercise type breakdown (chart or pills)
- Estimated duration

#### **Enhanced Navigation Bar**
**File:** `/src/components/course/preview/PreviewNavBar.tsx`
- Breadcrumbs
- Unit dropdown selector
- Progress indicator
- Navigation buttons (prev/next)

#### **Translation Toggle Component**
**File:** `/src/components/course/preview/TranslationToggle.tsx`
- Toggle between English/Spanish
- Hover tooltips for `[[English|Spanish]]` syntax
- Hide translations mode

#### **Audio Player Component**
**File:** `/src/components/course/preview/AudioPlayer.tsx`
- Play/pause controls
- Speed adjustment (0.75x, 1x, 1.25x)
- Progress bar
- Transcript toggle

### 3.2 Files to Modify

#### **Existing Preview Page**
**File:** `/src/app/debug/a1-preview/[unitId]/page.tsx`
- Add UnitOverviewHeader before exercise list
- Enhance navigation bar with PreviewNavBar
- Integrate TranslationToggle
- Add AudioPlayer for exercises with `audioUrl`

#### **ExerciseRenderer Component**
**File:** `/src/components/ExerciseRenderer.tsx` or `/src/components/course/exercises/ExerciseRenderer.tsx`
- Add support for translation toggle state
- Integrate AudioPlayer where applicable
- Add exercise type icon display

#### **Premium Course Service**
**File:** `/src/lib/services/premium-course-service.server.ts`
- Add `getA1UnitsWithMetadata()` function to extract and enrich unit data
- Add `getUnitMetadata(unitId: string)` for individual unit metadata
- Implement metadata extraction from JSON files (parse `learning_outcomes`, count exercises, calculate duration)

### 3.3 Directory Structure
```
src/
├── app/
│   └── debug/
│       └── a1-preview/
│           ├── page.tsx                    (NEW: Landing page)
│           └── [unitId]/
│               └── page.tsx                (MODIFY: Add overview header)
├── components/
│   └── course/
│       └── preview/                        (NEW: Directory)
│           ├── A1CourseSelector.tsx        (NEW)
│           ├── UnitCard.tsx                (NEW)
│           ├── UnitOverviewHeader.tsx      (NEW)
│           ├── PreviewNavBar.tsx           (NEW)
│           ├── TranslationToggle.tsx       (NEW)
│           └── AudioPlayer.tsx             (NEW)
├── lib/
│   ├── services/
│   │   └── premium-course-service.server.ts (MODIFY: Add metadata functions)
│   └── utils/
│       └── course-metadata.ts              (NEW: Metadata extraction utilities)
└── types/
    └── premium-course.ts                    (MODIFY: Add metadata types)
```

---

## 4. Data Model / API / Interface Changes

### 4.1 Extended Type Definitions

**File:** `/src/types/premium-course.ts`

```typescript
// New: Unit metadata for preview landing page
export interface UnitMetadata {
  unit_id: string;
  unit_number: number;                    // Extracted from unit_id
  unit_title: string;
  descriptive_title?: string;             // e.g., "Unit 1: Greetings & Introductions"
  topics: string[];                       // e.g., ["Grammar", "Vocabulary", "Reading"]
  difficulty: 1 | 2 | 3 | 4 | 5;         // 1 = Beginner, 5 = Advanced
  exercise_count: number;
  estimated_duration_minutes: number;
  thumbnail_icon?: string;                // Lucide icon name or emoji
  exercise_types: ExerciseTypeBreakdown;
  learning_outcomes?: string[];
  mastery_tags?: string[];
  preview_url: string;                    // e.g., "/debug/a1-preview/unit-3"
}

export interface ExerciseTypeBreakdown {
  multiple_choice: number;
  fill_blank: number;
  reading: number;
  listening: number;
  speaking: number;
  sentence_building: number;
  flashcards: number;
  matching: number;
  [key: string]: number;                  // Allow dynamic types
}

export interface A1CourseMetadata {
  course_id: string;
  course_title: string;
  level: string;
  total_units: number;
  total_exercises: number;
  units: UnitMetadata[];
  modules?: ModuleMetadata[];             // Optional grouping
}

export interface ModuleMetadata {
  module_id: string;
  module_title: string;
  unit_ids: string[];
  description?: string;
}

// Extend UnitData for richer preview data
export interface UnitData {
  course: PremiumCourse;
  learning_outcomes?: string[];
  mastery_tags?: string[];
  blocks: PremiumBlock[];
  metadata?: UnitMetadata;                // NEW: Optional metadata
}
```

### 4.2 New Service Functions

**File:** `/src/lib/services/premium-course-service.server.ts`

```typescript
export const premiumCourseServerService = {
  // ... existing functions ...

  /**
   * NEW: Get all A1 units with enriched metadata for preview landing page
   */
  async getA1UnitsWithMetadata(): Promise<A1CourseMetadata> {
    const contentDir = path.join(process.cwd(), 'src/content/cursos/ingles-a1-narrative');
    const files = fs.readdirSync(contentDir)
      .filter(file => file.endsWith('.json'))
      .sort(/* by unit number */);

    const units: UnitMetadata[] = [];
    
    for (const file of files) {
      const unitData: UnitData = JSON.parse(fs.readFileSync(path.join(contentDir, file), 'utf8'));
      const metadata = extractUnitMetadata(unitData);
      units.push(metadata);
    }

    return {
      course_id: 'ingles-a1-narrative',
      course_title: 'English A1 (Trabajo)',
      level: 'A1',
      total_units: units.length,
      total_exercises: units.reduce((sum, u) => sum + u.exercise_count, 0),
      units
    };
  },

  /**
   * NEW: Extract metadata from a single UnitData object
   */
  extractUnitMetadata(unitData: UnitData): UnitMetadata {
    // Implementation: Parse blocks, count exercises by type, extract topics, etc.
  }
};
```

### 4.3 Metadata Extraction Utility

**File:** `/src/lib/utils/course-metadata.ts`

```typescript
import { UnitData, UnitMetadata, ExerciseTypeBreakdown } from '@/types/premium-course';

/**
 * Extracts comprehensive metadata from UnitData JSON
 */
export function extractUnitMetadata(unitData: UnitData): UnitMetadata {
  const exerciseTypeBreakdown: ExerciseTypeBreakdown = {};
  let exerciseCount = 0;

  // Count exercises by type
  unitData.blocks.forEach(block => {
    block.content.forEach(content => {
      if (content.interaction_id && content.type) {
        exerciseCount++;
        exerciseTypeBreakdown[content.type] = (exerciseTypeBreakdown[content.type] || 0) + 1;
      }
    });
  });

  // Extract topics from mastery_tags
  const topics = extractTopicsFromMasteryTags(unitData.mastery_tags || []);

  // Determine difficulty (heuristic: based on unit number, exercise complexity)
  const difficulty = calculateDifficulty(unitData);

  return {
    unit_id: unitData.course.unit_id,
    unit_number: parseInt(unitData.course.unit_id.replace(/\D/g, '')),
    unit_title: unitData.course.unit_title,
    descriptive_title: `Unit ${unitData.course.unit_id.replace('unit', '')}: ${unitData.course.unit_title}`,
    topics,
    difficulty,
    exercise_count: exerciseCount,
    estimated_duration_minutes: unitData.course.total_duration_minutes,
    exercise_types: exerciseTypeBreakdown,
    learning_outcomes: unitData.learning_outcomes,
    mastery_tags: unitData.mastery_tags,
    preview_url: `/debug/a1-preview/${unitData.course.unit_id}`
  };
}

function extractTopicsFromMasteryTags(tags: string[]): string[] {
  // Map mastery tags to human-readable topics
  // e.g., "grammar:present_simple" → "Grammar"
  const topicSet = new Set<string>();
  tags.forEach(tag => {
    if (tag.includes('grammar')) topicSet.add('Grammar');
    if (tag.includes('vocabulary')) topicSet.add('Vocabulary');
    if (tag.includes('reading')) topicSet.add('Reading');
    if (tag.includes('listening')) topicSet.add('Listening');
    if (tag.includes('speaking')) topicSet.add('Speaking');
  });
  return Array.from(topicSet);
}

function calculateDifficulty(unitData: UnitData): 1 | 2 | 3 | 4 | 5 {
  // Simple heuristic: early units are easier
  const unitNumber = parseInt(unitData.course.unit_id.replace(/\D/g, ''));
  if (unitNumber <= 10) return 1;
  if (unitNumber <= 20) return 2;
  if (unitNumber <= 40) return 3;
  if (unitNumber <= 50) return 4;
  return 5;
}
```

---

## 5. Delivery Phases (Incremental, Testable Milestones)

### Phase 1: Landing Page Enhancement (Week 1)
**Goal:** Replace basic 1-60 number selector with enhanced unit cards.

**Tasks:**
1. Create `A1CourseSelector` component with unit cards grid
2. Implement `getA1UnitsWithMetadata()` service function
3. Create `UnitCard` component with basic metadata display
4. Add responsive layout (1/2/3 column grid)
5. Implement basic filtering (search by unit number/title)
6. **Deliverable:** Enhanced landing page at `/debug/a1-preview`

**Verification:**
- Visual inspection: unit cards display correctly
- Test filtering functionality
- Mobile responsiveness check
- Lighthouse accessibility score > 90

---

### Phase 2: Unit Preview Page Enhancements (Week 2)
**Goal:** Add unit overview header and enhanced navigation.

**Tasks:**
1. Create `UnitOverviewHeader` component
2. Display learning outcomes, topics, exercise breakdown
3. Create `PreviewNavBar` with breadcrumbs and unit dropdown
4. Enhance progress bar to show sub-sections
5. Add "quick jump to exercise" dropdown
6. **Deliverable:** Enhanced unit preview with overview header and navigation

**Verification:**
- Navigate through multiple units using new navigation
- Verify breadcrumbs update correctly
- Test unit dropdown functionality
- E2E test: Navigate from landing page → unit → exercise → back

---

### Phase 3: Audio & Translation Features (Week 3)
**Goal:** Implement interactive audio player and translation toggle.

**Tasks:**
1. Create `AudioPlayer` component with playback controls
2. Integrate audio player into exercises with `audioUrl`
3. Create `TranslationToggle` component
4. Implement hover tooltips for `[[English|Spanish]]` translations
5. Add translation hide/show mode
6. **Deliverable:** Audio and translation features in unit preview

**Verification:**
- Test audio playback on multiple exercises
- Verify speed controls (0.75x, 1x, 1.25x)
- Test translation toggle on/off
- Test hover tooltips for bilingual text
- Accessibility: keyboard controls for audio player

---

### Phase 4: Advanced Filtering & Module Grouping (Week 4)
**Goal:** Add advanced filters and module-based organization.

**Tasks:**
1. Implement topic filters (Grammar, Vocabulary, Reading, etc.)
2. Add difficulty filter (stars/levels)
3. Create module grouping UI (e.g., Units 1-10 = Module 1)
4. Add search functionality (by keyword, topic, unit title)
5. Implement "View Course Outline" page
6. **Deliverable:** Advanced filtering and module organization

**Verification:**
- Test each filter independently and combined
- Verify module grouping displays correctly
- Test search with various keywords
- Performance: filtering should be instant (< 100ms)

---

### Phase 5: Polish & Optimization (Week 5)
**Goal:** Mobile optimization, performance improvements, and UX polish.

**Tasks:**
1. Mobile-first optimizations (touch targets, gestures)
2. Lazy loading for unit cards (virtualization if needed)
3. Image optimization (WebP format, responsive images)
4. Add loading skeletons for better perceived performance
5. Implement analytics tracking (preview interactions)
6. A/B test CTAs ("Start Full Course" button placement/copy)
7. **Deliverable:** Production-ready preview experience

**Verification:**
- Lighthouse performance score > 85
- Mobile responsiveness on 5+ devices (Playwright mobile emulation)
- Load time < 2s on 3G connection (throttled test)
- Analytics events firing correctly (check browser console)
- User testing with 5-10 prospective students

---

## 6. Verification Approach

### 6.1 Linting & Type Checking

**Commands:**
```bash
npm run lint        # ESLint checks
npm run type-check  # TypeScript compilation
```

**Pre-commit checks:**
- No ESLint errors or warnings
- No TypeScript type errors
- All imports resolve correctly

### 6.2 Unit Testing

**Framework:** Jest + React Testing Library

**Test Files:** `__tests__/components/course/preview/*.test.tsx`

**Test Coverage:**
- `UnitCard`: renders metadata correctly, click handlers work
- `A1CourseSelector`: filtering logic, grid layout
- `UnitOverviewHeader`: displays learning outcomes, topics
- `AudioPlayer`: playback controls, speed adjustment
- `TranslationToggle`: toggle state management

**Command:**
```bash
npm run test:unit
```

**Target Coverage:** > 80% for new components

### 6.3 Integration Testing

**Test Scenarios:**
1. **Landing Page Load:** Fetch and display all 60 units
2. **Filter Application:** Apply topic filter, verify filtered results
3. **Navigation Flow:** Landing page → Unit card → Preview page → Exercise
4. **Audio Playback:** Load exercise with audio, play audio
5. **Translation Toggle:** Toggle translations on/off, verify text changes

**Command:**
```bash
npm run test:integration
```

### 6.4 End-to-End Testing

**Framework:** Playwright

**Test Files:** `e2e/a1-preview-*.spec.ts`

**Critical User Journeys:**
1. **Preview Discovery:**
   - Visit `/debug/a1-preview`
   - See 60 unit cards
   - Click on Unit 5 card
   - See Unit 5 overview header
   - Start first exercise
   - Complete exercise
   - Navigate to next exercise

2. **Filtering & Search:**
   - Visit landing page
   - Apply "Grammar" topic filter
   - Verify only grammar-focused units show
   - Search for "greetings"
   - Verify search results

3. **Audio & Translation:**
   - Open unit with audio exercises
   - Play audio
   - Adjust playback speed
   - Toggle translations off
   - Hover over bilingual text (verify tooltip)

4. **Mobile Experience:**
   - Load preview on mobile viewport
   - Verify touch targets are accessible
   - Test swipe gestures (if implemented)
   - Verify responsive layout

**Commands:**
```bash
npm run test:e2e              # All browsers
npm run test:e2e:chromium     # Chromium only
npm run test:e2e:mobile       # Mobile emulation
```

**Success Criteria:**
- All E2E tests pass on Chromium, Firefox, WebKit
- No console errors during test execution
- Page load times < 3s (measured in tests)

### 6.5 Accessibility Testing

**Tools:**
- Lighthouse CI (automated)
- axe DevTools (manual)
- Keyboard navigation testing

**Checklist:**
- ✅ All interactive elements keyboard accessible
- ✅ Focus indicators visible
- ✅ ARIA labels on icon buttons
- ✅ Alt text on images
- ✅ Color contrast ratio ≥ 4.5:1
- ✅ Screen reader compatibility (test with VoiceOver/NVDA)

**Command:**
```bash
npm run test:a11y  # Custom script (if added)
```

### 6.6 Performance Testing

**Metrics:**
- **First Contentful Paint (FCP):** < 1.5s
- **Largest Contentful Paint (LCP):** < 2.5s
- **Time to Interactive (TTI):** < 3.5s
- **Cumulative Layout Shift (CLS):** < 0.1

**Tools:**
- Lighthouse CI
- WebPageTest
- Chrome DevTools Performance tab

**Test Scenarios:**
- Load landing page with 60 units
- Load unit preview with 60 exercises
- Apply multiple filters sequentially
- Play audio while scrolling (check jank)

---

## 7. Technical Risks & Mitigation

| Risk | Impact | Likelihood | Mitigation |
|------|--------|------------|------------|
| **JSON parsing errors** | High | Low | Add error boundaries, validate JSON schema with Zod |
| **Performance with 60 units** | Medium | Medium | Implement virtualization (react-window) if needed, lazy load images |
| **Audio playback issues** | Medium | Medium | Fallback to native `<audio>` element, test on multiple browsers |
| **Translation parsing complexity** | Low | Medium | Use regex for `[[English\|Spanish]]`, add unit tests |
| **Mobile touch gestures conflict** | Low | Low | Test thoroughly, provide fallback buttons |
| **Metadata extraction inaccuracies** | Medium | Medium | Manual verification for first 10 units, add validation script |

---

## 8. Dependencies & Constraints

### 8.1 External Dependencies
- **No new npm packages required** for Phase 1-3
- Consider adding `react-window` for virtualization (Phase 4) if performance issues arise
- Consider adding `zustand` for client-side state management (if translation toggle state needs global management)

### 8.2 Constraints
- **Must not break existing functionality:** Current `/preview/[courseId]/[unitId]` route must continue working
- **Mobile-first requirement:** 60%+ of users are mobile, optimize accordingly
- **SEO not critical:** Preview is in `/debug/` path, not indexed
- **Analytics required:** Must track preview interactions for conversion funnel analysis

### 8.3 Browser Support
- **Target Browsers:** Chrome 90+, Firefox 88+, Safari 14+, Edge 90+
- **Mobile Browsers:** iOS Safari 14+, Chrome Android 90+
- **No IE11 support** (Next.js 15 doesn't support IE11)

---

## 9. Open Questions & Decisions Needed

### 9.1 Design Decisions
- **Q:** Should we use custom icons or emojis for unit thumbnails?
  - **Recommendation:** Lucide React icons (consistent with codebase)
  
- **Q:** Should modules be hardcoded or dynamically grouped (e.g., every 10 units)?
  - **Recommendation:** Hardcode module structure for A1 (allows custom naming)

### 9.2 Content Decisions
- **Q:** Who will write unit descriptive titles and learning objectives?
  - **Assumption:** Extract from existing `unit_title` and `learning_outcomes`, enhance later

- **Q:** How to determine difficulty levels?
  - **Recommendation:** Use heuristic (unit order) for v1, allow manual override later

### 9.3 Technical Decisions
- **Q:** Should metadata be cached in Supabase or computed on-demand?
  - **Recommendation:** Compute at build time (static), cache in memory if needed

- **Q:** Should we implement swipe gestures for mobile navigation?
  - **Recommendation:** Phase 5 (nice-to-have), focus on buttons first

---

## 10. Success Criteria

### 10.1 Functional Requirements (Must-Have)
- ✅ Landing page displays all 60 units with metadata
- ✅ Unit cards show title, topics, exercise count, difficulty, duration
- ✅ Unit preview page shows overview header with learning outcomes
- ✅ Navigation bar includes breadcrumbs and unit dropdown
- ✅ Audio player integrates into exercises with `audioUrl`
- ✅ Translation toggle works for bilingual content
- ✅ Filtering by topic works correctly
- ✅ Search by unit title works

### 10.2 Non-Functional Requirements (Must-Have)
- ✅ Page load time < 2s on 4G connection
- ✅ Lighthouse performance score > 85
- ✅ Lighthouse accessibility score > 90
- ✅ Mobile responsive (320px - 1920px viewports)
- ✅ No console errors or warnings
- ✅ All E2E tests pass

### 10.3 Quality Metrics
- **Code Coverage:** > 80% for new components
- **Bundle Size:** New components add < 50KB gzipped
- **Zero Regressions:** Existing preview routes work unchanged

---

## 11. Rollout Plan

### 11.1 Phased Rollout Strategy
1. **Development:** Implement in `/debug/a1-preview` (isolated, safe)
2. **Internal Testing:** Share with Focus English team for feedback
3. **Beta Testing:** Share with 10-20 prospective students
4. **Iteration:** Fix bugs, improve UX based on feedback
5. **Production:** Enable for all users (if moved to production path)

### 11.2 Rollback Plan
- **If critical bug found:** Revert to simple unit selector (Git rollback)
- **Feature flag:** Consider adding feature flag for new UI (toggle in env vars)

---

## 12. Next Steps (After Spec Approval)

1. ✅ **Approve Spec:** Stakeholder review and sign-off
2. 📝 **Create Implementation Plan:** Break down into detailed tasks with estimates
3. 🎨 **Design Mockups:** Create high-fidelity designs for UnitCard, UnitOverviewHeader
4. 📊 **Content Audit:** Verify metadata for all 60 units, identify gaps
5. 🚀 **Phase 1 Implementation:** Start with landing page enhancement
6. 🧪 **Iterative Testing:** Test after each phase, gather feedback
7. 📈 **Analytics Setup:** Implement tracking for preview interactions
8. 🚢 **Production Deployment:** Deploy to production after Phase 5 completion

---

**Document Status:** Ready for review and approval  
**Next Action:** Review with stakeholders, gather feedback, approve for implementation
