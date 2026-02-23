# Product Requirements Document (PRD)
## A1 Course Preview Improvements

### 1. Executive Summary

After analyzing the A1 course preview at `https://www.focus-on-english.com/debug/a1-preview`, this document outlines key improvements to enhance user experience, engagement, and pedagogical effectiveness.

**Current State:**
- Basic unit selector (1-60) with minimal context
- No preview information before selecting a unit
- No visual feedback on unit content or difficulty
- Limited navigation aids within the preview interface
- No progress tracking or bookmarking capabilities

**Target Users:** 
- Prospective students evaluating the course
- Current students reviewing content structure
- Teachers/administrators assessing course quality

---

### 2. Core Problems Identified

#### 2.1 **Landing Page UX Issues**
- **No Context**: Unit selector shows only numbers (1-60), no topic names or descriptions
- **Poor Information Architecture**: Users can't preview what each unit covers without clicking
- **No Visual Hierarchy**: All units appear equal in importance/difficulty
- **Missing CTAs**: No clear guidance on what to do next or where to start

#### 2.2 **Exercise Preview Experience**
- **No Overview**: Users jump directly into exercises without seeing unit structure
- **Limited Exercise Variety Visibility**: Users don't know what types of exercises to expect
- **No Audio Preview**: Audio files exist (`audioUrl` in exercises) but unclear if they're being used
- **Translation Toggle Missing**: Bilingual content (`[[English|Spanish]]`) could be interactive

#### 2.3 **Navigation & Usability**
- **No Breadcrumbs**: Users can't easily track their position in the course
- **No Unit Summary**: Missing overview of topics, grammar points, and vocabulary
- **No Quick Navigation**: Can't jump to specific exercise types or sections
- **No Comparison View**: Can't compare units or see progression path

#### 2.4 **Content Presentation**
- **Generic Titles**: "Review: Unidad 1" provides minimal information
- **No Learning Objectives**: Missing "what you'll learn" section
- **No Difficulty Indicators**: All units appear equal in complexity
- **No Time Estimates**: Users don't know how long each unit takes

#### 2.5 **Engagement & Motivation**
- **No Gamification Preview**: Existing gamification system not visible in preview
- **No Progress Visualization**: Can't see completion status across units
- **No Sample Success Stories**: Missing social proof or testimonials
- **No Interactive Demo**: Could benefit from interactive sample exercises

---

### 3. Proposed Improvements

### 3.1 **Landing Page Redesign**

#### 3.1.1 Enhanced Unit Cards
**Instead of:** Plain numbered buttons (1-60)

**Implement:**
- **Unit Cards** with:
  - Unit number + descriptive title (e.g., "Unit 1: Greetings & Introductions")
  - Topic tags/badges (Grammar, Vocabulary, Reading, Speaking)
  - Difficulty indicator (visual stars or progress bar)
  - Exercise count (e.g., "60 exercises")
  - Estimated time (e.g., "~45 min")
  - Thumbnail icon representing the topic
  - Preview button to see exercise list

#### 3.1.2 Course Structure Overview
- **Module Grouping**: Group units into thematic modules (e.g., Module 1: Units 1-10)
- **Progress Path**: Visual progression showing unit dependencies
- **Quick Filters**: Filter by topic (Grammar, Vocabulary, Reading, etc.)
- **Search**: Search units by keyword or topic

#### 3.1.3 Improved CTAs
- "Start with Unit 1" prominent button
- "Take Level Test" to find your starting point
- "View Course Outline" for full curriculum
- "Try Sample Unit" for best-of preview

---

### 3.2 **Unit Preview Page Enhancements**

#### 3.2.1 Unit Overview Header
Before exercises, show:
- **Unit Title & Description**: Clear learning objectives
- **What You'll Learn**: 3-5 key takeaways
- **Topics Covered**: Visual tags for grammar points, vocabulary themes
- **Exercise Breakdown**: Chart showing exercise type distribution
- **Estimated Duration**: Based on average completion times

#### 3.2.2 Exercise Type Indicators
- **Visual Exercise Cards**: Preview showing exercise type before starting
- **Type Icons**: Distinct icons for multiple-choice, fill-blank, reading, speaking
- **Interactive Samples**: Hover to preview first question
- **Difficulty Colors**: Color-coded difficulty levels

#### 3.2.3 Audio Integration
- **Audio Preview**: Play button visible for exercises with audio
- **Auto-play Toggle**: Option to auto-play audio on exercise load
- **Speed Control**: Playback speed adjustment (0.75x, 1x, 1.25x)
- **Transcript Toggle**: Show/hide transcript for audio exercises

#### 3.2.4 Translation Features
- **Interactive Translations**: Click to toggle between English/Spanish
- **Translation Mode**: Toggle full translation overlay vs inline hints
- **Hover Tooltips**: Hover over `[[word|palabra]]` for instant translation
- **Hide Translations**: Option to practice without Spanish hints

---

### 3.3 **Navigation Improvements**

#### 3.3.1 Enhanced Navigation Bar
Current: Home button + basic unit info + arrow buttons

**Add:**
- **Breadcrumb Trail**: Home > A1 Course > Module 1 > Unit 3 > Exercise 5
- **Unit Dropdown**: Quick jump to any unit without going back
- **Exercise Jump**: Dropdown to skip to specific exercises
- **Module Navigation**: Previous/Next module buttons

#### 3.3.2 Sidebar Navigation (Optional)
- **Collapsible Sidebar**: Shows all exercises in unit with completion status
- **Quick Scroll**: Click to jump to any exercise
- **Type Filters**: Filter by exercise type
- **Bookmark Feature**: Mark exercises for later review

#### 3.3.3 Progress Tracking
- **Visual Progress Bar**: More detailed than current (show sub-sections)
- **Completion Checkmarks**: Mark completed exercises
- **Time Spent**: Track time on each exercise
- **Difficulty Rating**: User-submitted difficulty feedback

---

### 3.4 **Exercise Experience Enhancements**

#### 3.4.1 Better Exercise Cards
- **Visual Hierarchy**: Clear separation between question, options, feedback
- **Type-Specific Layouts**: Optimized layouts for each exercise type
- **Keyboard Shortcuts**: Arrow keys for navigation, Enter to submit
- **Accessibility**: ARIA labels, screen reader support

#### 3.4.2 Feedback Improvements
- **Detailed Explanations**: Already present, but could be more visual
- **Related Exercises**: "Practice more on this topic" suggestions
- **Video Explanations**: For complex grammar points
- **AI Tutor Integration**: Link to AI speaking coach for speaking topics

#### 3.4.3 Reading Exercise UX
Current: Shows transcript with inline translations

**Enhance:**
- **Reading Mode**: Full-screen distraction-free reading
- **Highlight Key Vocabulary**: Auto-highlight new vocabulary
- **Comprehension Hints**: Progressive hints before revealing answers
- **Reading Speed Tracking**: WPM calculation and tracking

---

### 3.5 **Content Enhancements**

#### 3.5.1 Unit Summary Pages
After completing a unit:
- **Vocabulary Summary**: All new words with translations and audio
- **Grammar Recap**: Key grammar points with examples
- **Downloadable Resources**: PDF summary, flashcards
- **Practice Recommendations**: Suggested related units or AI tutor topics

#### 3.5.2 Lesson Complete Screens
Current: Generic "Lección completada" screen

**Improve:**
- **Performance Stats**: Accuracy, time spent, streak info
- **XP Earned**: Even in preview, show gamification potential
- **Next Steps**: Smart recommendations (review weak areas vs. continue)
- **Share Achievement**: Social sharing options

#### 3.5.3 Course Outline View
New feature:
- **Full Curriculum Table**: All 60 units with topics and objectives
- **Printable**: PDF export of course outline
- **Comparison**: Compare A1 units with A2/B1 progression
- **Syllabus Download**: Detailed course syllabus for teachers

---

### 3.6 **Mobile & Responsive Improvements**

#### 3.6.1 Mobile-First Navigation
- **Bottom Navigation Bar**: Easier thumb access on mobile
- **Swipe Gestures**: Swipe left/right to navigate exercises
- **Touch-Optimized Buttons**: Larger tap targets
- **Portrait/Landscape Modes**: Optimized layouts for both

#### 3.6.2 Performance
- **Lazy Loading**: Load exercises on-demand
- **Image Optimization**: WebP format, responsive images
- **Offline Support**: PWA capabilities for previewed units
- **Fast Loading**: < 2s initial load time

---

### 3.7 **Marketing & Conversion Features**

#### 3.7.1 Social Proof
- **Student Reviews**: Testimonials specific to A1 course
- **Completion Stats**: "10,000+ students completed this unit"
- **Success Stories**: Before/after student examples
- **Expert Endorsements**: Teacher/CEFR expert validations

#### 3.7.2 Conversion CTAs
- **Unit-Specific CTAs**: "Continue with full course access" after previewing
- **Progress Save**: "Sign up to save your progress"
- **Limited Preview**: "Unlock all 60 units with subscription"
- **Free Trial**: Prominent free trial offers

#### 3.7.3 Comparison Tools
- **Level Comparison**: Show A1 vs A2 vs B1 differences
- **Competitor Comparison**: How Focus English compares to Duolingo, Babbel
- **Feature Matrix**: Interactive feature comparison table

---

### 4. Technical Considerations

#### 4.1 Data Requirements
- **Unit Metadata**: Extract topic names, exercise counts from existing course files
- **Exercise Type Taxonomy**: Standardize exercise type naming and icons
- **Completion Tracking**: LocalStorage or cookie-based for anonymous users
- **Analytics Events**: Track preview interactions, drop-off points

#### 4.2 Implementation Phases

**Phase 1: Quick Wins (1-2 weeks)**
- Add unit titles and descriptions to landing page
- Improve exercise type indicators
- Add audio playback controls
- Enhance navigation breadcrumbs

**Phase 2: Core Features (2-4 weeks)**
- Redesign unit cards with metadata
- Implement translation toggle features
- Add unit overview header
- Create unit summary pages

**Phase 3: Advanced Features (4-8 weeks)**
- Build sidebar navigation
- Implement progress tracking
- Add gamification preview elements
- Create course outline view

**Phase 4: Polish & Optimization (ongoing)**
- Mobile optimizations
- Performance improvements
- A/B testing for conversion
- User feedback integration

#### 4.3 Dependencies
- **Existing Systems**: Gamification hooks, SRS integration, AI tutor links
- **Design System**: Ensure consistency with main platform
- **Audio Infrastructure**: Verify audio file availability and CDN setup
- **Analytics**: Set up tracking for preview-to-conversion metrics

---

### 5. Success Metrics

#### 5.1 User Engagement
- **Preview Depth**: Avg. number of units viewed per session
- **Time on Preview**: Avg. time spent in preview mode
- **Exercise Completion**: % of exercises completed in preview
- **Return Visits**: % of users returning to preview multiple times

#### 5.2 Conversion Metrics
- **Preview-to-Signup**: Conversion rate from preview to registration
- **Preview-to-Purchase**: Conversion rate to paid subscription
- **CTA Click Rate**: CTR on "Start Full Course" buttons
- **Trial Starts**: Free trial initiations from preview

#### 5.3 Quality Metrics
- **User Satisfaction**: Survey ratings after preview experience
- **Bug Reports**: Number of issues reported in preview
- **Bounce Rate**: % of users leaving immediately
- **Navigation Efficiency**: Clicks needed to complete tasks

---

### 6. Out of Scope (Future Considerations)

- **Interactive AI Tutor in Preview**: Full AI tutor integration (complex, save for later)
- **Community Features**: Forums, student discussions in preview
- **Live Classes Preview**: Demo of live class features
- **Certificate Preview**: Show sample certificates (not relevant for preview)
- **Mobile App**: Native mobile app preview (web-first approach)

---

### 7. Assumptions & Dependencies

#### Assumptions:
1. Unit metadata (topics, objectives) can be extracted or documented
2. Audio files referenced in exercises are accessible and properly hosted
3. Current gamification system can be adapted for preview mode
4. Users appreciate bilingual (EN/ES) learning approach

#### Dependencies:
1. Design team availability for UI mockups
2. Access to course curriculum documentation
3. Analytics infrastructure for tracking
4. Content team for writing unit descriptions and objectives

---

### 8. Risks & Mitigation

| Risk | Impact | Mitigation |
|------|--------|------------|
| **Preview gives too much away** | Medium | Limit to 2-3 units fully unlocked, rest show structure only |
| **Technical complexity delays launch** | High | Phased rollout starting with quick wins |
| **Inconsistent course metadata** | Medium | Audit and standardize existing content first |
| **Performance issues on mobile** | High | Prioritize mobile optimization, lazy loading |
| **Low conversion from preview** | High | A/B test CTAs, optimize preview funnel |

---

### 9. Appendix

#### A. Example Unit Card (Wireframe Description)
```
┌─────────────────────────────────────────┐
│ 🌱 Unit 1: Greetings & Introductions   │
│                                         │
│ [Grammar] [Vocabulary] [Reading]        │
│                                         │
│ ⭐⭐☆☆☆ Beginner                        │
│ 60 exercises • ~45 min                  │
│                                         │
│ What you'll learn:                      │
│ • Basic greetings and goodbyes          │
│ • Using "to be" (am/is/are)             │
│ • Introducing yourself                  │
│                                         │
│ [Preview Exercises] [Start Unit →]     │
└─────────────────────────────────────────┘
```

#### B. Current vs. Proposed Navigation

**Current:**
```
[Home] | Review: Unidad 1 | Lección 1 de 4 • Ejercicio 5 de 15 | [←] [→]
```

**Proposed:**
```
Home > A1 Course > Module 1 > Unit 1 > Exercise 5/60
[Unit Menu ▼] | Grammar: To Be | [Exercise Types ▼] | [←] [→]
Progress: ████████░░░░░░ 35%
```

#### C. Exercise Type Icon Set
- 📝 Multiple Choice
- ✍️ Fill in the Blank
- 📖 Reading Comprehension
- 🎯 Sentence Building
- 🔊 Listening Exercise
- 🗣️ Speaking Exercise
- 🎴 Flashcards
- 🧩 Matching
- 🔄 Drag & Drop
- 🔍 Word Search
- 📋 Crossword

---

### 10. Next Steps

1. **Review & Approval**: Stakeholder review of this PRD
2. **Content Audit**: Extract metadata for all 60 A1 units
3. **Design Mockups**: Create high-fidelity designs for priority features
4. **Technical Specification**: Detailed technical architecture and implementation plan
5. **Phased Implementation**: Start with Phase 1 quick wins
6. **User Testing**: Beta test with 10-20 prospective students
7. **Iteration**: Refine based on feedback and analytics
8. **Full Rollout**: Deploy to production with monitoring

---

**Document Version:** 1.0  
**Date:** 2026-02-23  
**Author:** AI Assistant  
**Status:** Draft - Awaiting Review
