# Technical Specification: A1 Course Improvements (debug/preview-a1)

**Version:** 1.0  
**Date:** 2026-02-22  
**Based on:** [requirements.md](./requirements.md)

---

## 1. Technical Context

### 1.1 Technology Stack

**Frontend:**
- **Framework**: Next.js 15.5.11 (App Router)
- **Language**: TypeScript 5.7.2
- **Runtime**: Node.js ≥ 20.9.0
- **UI Library**: React 19.0.0
- **Styling**: Tailwind CSS 3.4.17
- **Animation**: Framer Motion 12.29.0
- **Icons**: Lucide React 0.562.0

**Backend & Data:**
- **Database**: Supabase (PostgreSQL)
- **Auth**: Supabase Auth (@supabase/ssr 0.5.2)
- **Storage**: Supabase Storage (for audio/images)

**AI & Multimedia:**
- **TTS**: ElevenLabs Node 2.0.3, Google Cloud TTS 6.4.0
- **AI**: OpenAI 6.16.0 (GPT-4, Whisper)
- **Validation**: Zod 4.3.5, AJV 8.17.1

**Build & Test:**
- **Testing**: Jest 30.2.0, Playwright 1.57.0
- **Linting**: ESLint 9.17.0
- **Commands**: 
  - `npm run dev` (port 5436)
  - `npm run build`
  - `npm run lint`
  - `npm run type-check`
  - `npm test` (Jest unit/integration)
  - `npm run test:e2e` (Playwright)
  - `npm run validate-exercises` (JSON schema validation)

### 1.2 Current Course Architecture

**Content Structure:**
```
src/content/cursos/ingles-a1/
├── syllabus.md                    # Course overview
├── unit1.json - unit60.json      # Course content (JSON)
```

**JSON Schema (Current):**
```typescript
interface UnitData {
  course: {
    language_ui: "es-ES";
    target_language: "en";
    level: "A1";
    unit_id: string;           // "U1" - "U60"
    unit_title: string;
    total_duration_minutes: number;
  };
  blocks: PremiumBlock[];
  learning_outcomes?: string[];
}

interface PremiumBlock {
  block_id: string;
  title: string;
  content: ExerciseItem[];
}

interface ExerciseItem {
  interaction_id: string;     // "U1_I1", "U1_I2", etc.
  type: ExerciseType;          // Current: 6 types only
  mastery_tag: string;         // "vocabulary" | "grammar" | "syntax"
  // ... type-specific fields
}

type ExerciseType = 
  | "matching"
  | "multiple_choice"
  | "transformation"
  | "true_false"
  | "reorder_words"
  | "short_writing";
```

**Existing Components:**
```
src/components/course/
├── PremiumUnitViewer.tsx          # Main unit wrapper
├── exercises/
│   ├── PremiumSession.tsx         # Session orchestrator
│   └── ExerciseRenderer.tsx       # Exercise dispatcher
└── renderers/
    ├── MatchingRenderer.tsx
    ├── TransformationRenderer.tsx
    ├── ListeningRenderer.tsx      # ✅ Exists but unused
    ├── SpeakingRenderer.tsx       # ✅ Exists but unused
    ├── PronunciationRenderer.tsx  # ✅ Exists but unused
    └── ... (13 renderers total)
```

**Database Schema (Supabase):**
```sql
-- Gamification (20260122_gamification.sql)
user_xp (user_id, total_xp, level, xp_to_next_level)
user_badges (user_id, badge_id, earned_at, progress)
user_streaks (user_id, current_streak, longest_streak, last_activity_date)
xp_transactions (user_id, amount, source, source_id)

-- SRS System (20260201_srs_system.sql)
user_srs (user_id, item_id, item_type, iterations, interval, easiness_factor, next_review_at)

-- Course Progress
user_progress (needs extension for unit_stars)
```

### 1.3 Audio Generation Infrastructure

**Existing Scripts:**
```bash
scripts/
├── generate-course-audio.ts       # Main audio generator
├── generate-a1-w01-audio.js       # Week-specific generators
├── generate-premium-audio.mjs     # Premium course audio
└── generate-all-audio.js          # Batch processor
```

**Audio Generation Workflow:**
1. Script reads course JSON
2. Extracts text content (stimulus_en, prompts, dialogues)
3. Calls TTS API (ElevenLabs or Google Cloud)
4. Saves to `/public/audio/{course}/{unit}/`
5. Updates JSON with `audio_url` fields

**Cost Analysis:**
- **ElevenLabs**: $99/month → ~100K characters → 20 units
- **Google Cloud TTS**: $4/1M chars → more economical
- **OpenAI TTS**: $15/1M chars → balance quality/price

**Recommendation**: Google Cloud TTS for bulk + ElevenLabs for key dialogues

---

## 2. Implementation Approach

### 2.1 Phased Delivery Strategy

Based on the PRD priorities, we implement in 4 phases:

#### **Phase 1: Quick Wins (P0 - Week 1-2)**
**Objective**: Immediate UX improvements, no content changes

1. **Visual Progress Tracking**
   - Add exercise counter to `PremiumUnitViewer.tsx`
   - Display "X/Y exercises completed" with progress bar
   - Show percentage in header

2. **Unit Star System**
   - Extend `user_progress` table with `unit_stars` column
   - Calculate stars: Bronze (60%), Silver (80%), Gold (95%)
   - Display in unit completion modal

3. **Streak Visibility**
   - Integrate existing `user_streaks` table
   - Show current streak in course header
   - Add bonus XP for review units (10, 20, 30...)

**Technical Changes:**
- Frontend: [`PremiumUnitViewer.tsx`](./src/components/course/PremiumUnitViewer.tsx), [`PremiumSession.tsx`](./src/components/course/exercises/PremiumSession.tsx)
- Backend: 1 SQL migration (add `unit_stars` column)
- No JSON changes required

#### **Phase 2: Multimedia Integration (P0 - Week 3-6)**
**Objective**: Activate listening/speaking exercises

1. **Listening Exercises** (30 units)
   - Generate 150 audio files (5 per unit × 30 units)
   - Add `listening` and `listening_dictation` exercises to JSON
   - Use existing `ListeningRenderer.tsx`

2. **Speaking Exercises** (12 units - review units only)
   - Add `pronunciation` and `speaking` exercises
   - Use existing `SpeakingRenderer.tsx` + `PronunciationRenderer.tsx`
   - Integrate OpenAI Whisper for validation

3. **Image Vocabulary** (60 units)
   - Generate/source 300 images (5 per unit average)
   - Add `image_multiple_choice` and `image_labeling` types
   - Store in Supabase Storage: `/course-assets/a1/images/`

**Technical Changes:**
- Content: Modify 60 JSON files
- Scripts: Extend `generate-course-audio.ts` for A1 batch generation
- Frontend: Minimal (renderers already exist)
- Storage: ~500MB for audio + ~200MB for images

#### **Phase 3: Contextual Learning (P1 - Week 7-12)**
**Objective**: Transform isolated exercises into situational narratives

1. **Micro-Narratives** (Units 1-20 priority)
   - Group 3-5 related exercises under a scenario
   - Add `scenario` metadata to blocks:
     ```json
     {
       "block_id": "B1",
       "title": "First Day at English School",
       "scenario": {
         "setting": "Classroom",
         "characters": ["Sarah", "John"],
         "objective": "Introduce yourself and greet others"
       },
       "content": [...]
     }
     ```
   - Rewrite exercises to reference scenario context

2. **Dialogue-Based Exercises**
   - Add `conversation_completion` exercise type:
     ```json
     {
       "type": "conversation_completion",
       "conversation": [
         {"speaker": "Sarah", "text": "Hi! I'm Sarah.", "audio_url": "..."},
         {"speaker": "user", "placeholder": "Introduce yourself"}
       ],
       "evaluation_type": "ai_semantic",
       "expected_elements": ["name", "greeting"]
     }
     ```
   - Create `ConversationRenderer.tsx`

3. **Role-Play Activities** (Units 10, 20, 30, 40, 50, 60)
   - Use existing `RoleplayActivity.tsx` (if exists, else create)
   - Add 6 role-play scenarios (1 per module)
   - GPT-4 evaluation for semantic understanding

**Technical Changes:**
- Content: Major rewrite of Units 1-20 JSON
- Frontend: 1 new component (`ConversationRenderer.tsx`)
- AI: GPT-4 API integration for semantic validation
- Validation: Extend `scripts/validate-exercises.mjs` for new types

#### **Phase 4: Adaptive Intelligence (P2 - Week 13-16)**
**Objective**: Personalization and retention

1. **Spaced Repetition Integration**
   - Use existing `user_srs` table and `update_srs_item()` function
   - Track mastery_tag performance per user
   - Create "Daily Review" section in dashboard
   - Algorithm: Pull 5-10 items with `next_review_at <= NOW()`

2. **Contextual Feedback System**
   - Add `wrong_answer_feedback` and `hints` to exercises:
     ```json
     {
       "type": "transformation",
       "correct_answer": "am",
       "wrong_answer_feedback": {
         "is": "Remember: 'I' always uses 'am', not 'is'.",
         "are": "'Are' is used with you/we/they. With 'I', we use 'am'."
       },
       "hints": [
         "Think about the verb 'to be'",
         "Which form of 'be' goes with 'I'?",
         "The answer starts with 'a'"
       ]
     }
     ```
   - Deduct XP progressively for hint usage (5 XP, 10 XP, 15 XP)

3. **Initial Placement Test** (Optional)
   - Create `src/content/cursos/ingles-a1/placement-test.json`
   - 20 diagnostic questions (vocab + grammar + listening)
   - Recommend starting unit based on score:
     - 0-40%: Start at Unit 1
     - 41-70%: Start at Unit 10
     - 71-100%: Start at Unit 20 or skip to A2

**Technical Changes:**
- Backend: SRS integration queries
- Frontend: Daily Review component, Hint UI
- Content: Add feedback/hints to 300+ exercises
- New: Placement test JSON + renderer

---

## 3. Source Code Structure Changes

### 3.1 New Exercise Types

**Add to `ExerciseRenderer.tsx` type definitions:**
```typescript
// New types to support
type ExerciseType = 
  // Existing (6)
  | "matching"
  | "multiple_choice"
  | "transformation"
  | "true_false"
  | "reorder_words"
  | "short_writing"
  
  // Multimedia (Phase 2)
  | "listening"
  | "listening_dictation"
  | "pronunciation"
  | "speaking"
  | "image_multiple_choice"
  | "image_labeling"
  
  // Contextual (Phase 3)
  | "conversation_completion"
  | "roleplay"
  | "gap_fill_text"           // Multi-sentence gaps
  | "sentence_building"       // Drag blocks (more complex than reorder)
  
  // Advanced (Phase 4)
  | "crossword"               // Already has component
  | "word_search"             // Already has component
  | "minimal_pairs"           // Audio discrimination
  | "shadowing";              // Repeat with lag
```

### 3.2 Component Hierarchy

```
src/components/course/
├── PremiumUnitViewer.tsx
│   └── [NEW] ProgressBar component (inline)
│   └── [NEW] StarDisplay component (inline)
│   └── [NEW] StreakBadge component (inline)
│
├── exercises/
│   ├── PremiumSession.tsx
│   │   └── [MODIFY] Add star calculation logic
│   │   └── [MODIFY] Track performance per mastery_tag
│   │
│   └── ExerciseRenderer.tsx
│       └── [MODIFY] Add routing for new types
│
├── renderers/
│   ├── [EXISTING] ListeningRenderer.tsx      # Activate
│   ├── [EXISTING] SpeakingRenderer.tsx       # Activate
│   ├── [EXISTING] PronunciationRenderer.tsx  # Activate
│   ├── [NEW] ConversationRenderer.tsx        # Create
│   ├── [NEW] ImageMultipleChoiceRenderer.tsx # Create
│   ├── [NEW] ImageLabelingRenderer.tsx       # Create
│   ├── [NEW] GapFillTextRenderer.tsx         # Create (not single-word)
│   ├── [NEW] SentenceBuilderRenderer.tsx     # Create (drag-drop blocks)
│   └── [OPTIONAL] RoleplayRenderer.tsx       # If not exists
│
└── [NEW] srs/
    ├── DailyReview.tsx                       # SRS review session
    └── SRSCard.tsx                           # Flashcard-style review
```

### 3.3 Data Model Extensions

**Supabase Migrations Required:**

**Migration 1: Unit Stars (`20260222_unit_stars.sql`)**
```sql
ALTER TABLE user_progress 
  ADD COLUMN IF NOT EXISTS unit_stars INTEGER DEFAULT 0 CHECK (unit_stars BETWEEN 0 AND 3);

CREATE INDEX IF NOT EXISTS idx_user_progress_unit_stars 
  ON user_progress(unit_stars DESC);
```

**Migration 2: Mastery Tag Tracking (`20260222_mastery_tracking.sql`)**
```sql
CREATE TABLE IF NOT EXISTS user_mastery (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  mastery_tag TEXT NOT NULL,               -- 'vocabulary', 'grammar', 'syntax'
  correct_count INTEGER DEFAULT 0,
  total_count INTEGER DEFAULT 0,
  accuracy NUMERIC(5,2) GENERATED ALWAYS AS 
    (CASE WHEN total_count > 0 THEN (correct_count::NUMERIC / total_count * 100) ELSE 0 END) STORED,
  last_practiced_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  UNIQUE(user_id, mastery_tag)
);

CREATE INDEX idx_user_mastery_user_id ON user_mastery(user_id);
CREATE INDEX idx_user_mastery_accuracy ON user_mastery(accuracy ASC); -- Low accuracy = needs review
```

**Migration 3: Exercise Analytics (`20260222_exercise_analytics.sql`)**
```sql
CREATE TABLE IF NOT EXISTS exercise_attempts (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  interaction_id TEXT NOT NULL,            -- "U1_I2"
  unit_id TEXT NOT NULL,                   -- "U1"
  exercise_type TEXT NOT NULL,             -- "listening"
  mastery_tag TEXT NOT NULL,
  is_correct BOOLEAN NOT NULL,
  time_spent_seconds INTEGER,
  attempts_count INTEGER DEFAULT 1,
  hints_used INTEGER DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

CREATE INDEX idx_exercise_attempts_user_id ON exercise_attempts(user_id);
CREATE INDEX idx_exercise_attempts_interaction_id ON exercise_attempts(interaction_id);
CREATE INDEX idx_exercise_attempts_created_at ON exercise_attempts(created_at DESC);
```

---

## 4. API & Interface Changes

### 4.1 Supabase Client Functions

**New Functions (add to `src/lib/supabase/progress.ts`):**

```typescript
// Update unit completion with star rating
export async function completeUnitWithStars(
  userId: string,
  unitId: string,
  correctCount: number,
  totalCount: number
) {
  const accuracy = (correctCount / totalCount) * 100;
  const stars = accuracy >= 95 ? 3 : accuracy >= 80 ? 2 : accuracy >= 60 ? 1 : 0;
  
  const { data, error } = await supabase
    .from('user_progress')
    .upsert({
      user_id: userId,
      unit_id: unitId,
      completed: true,
      unit_stars: stars,
      accuracy: accuracy,
      updated_at: new Date().toISOString()
    }, { onConflict: 'user_id,unit_id' });
    
  return { stars, error };
}

// Track exercise attempt
export async function trackExerciseAttempt(
  userId: string,
  interaction_id: string,
  unit_id: string,
  exercise_type: string,
  mastery_tag: string,
  is_correct: boolean,
  time_spent_seconds: number,
  hints_used: number = 0
) {
  await supabase.from('exercise_attempts').insert({
    user_id: userId,
    interaction_id,
    unit_id,
    exercise_type,
    mastery_tag,
    is_correct,
    time_spent_seconds,
    hints_used
  });
  
  // Update mastery stats
  await supabase.rpc('update_mastery_stats', {
    p_user_id: userId,
    p_mastery_tag: mastery_tag,
    p_is_correct: is_correct
  });
}

// Get SRS review items
export async function getSRSReviewItems(userId: string, limit: number = 10) {
  const { data, error } = await supabase
    .from('user_srs')
    .select('*')
    .eq('user_id', userId)
    .lte('next_review_at', new Date().toISOString())
    .order('next_review_at', { ascending: true })
    .limit(limit);
    
  return { data, error };
}
```

**New RPC Functions (add to migration):**

```sql
-- Update mastery statistics
CREATE OR REPLACE FUNCTION update_mastery_stats(
  p_user_id UUID,
  p_mastery_tag TEXT,
  p_is_correct BOOLEAN
) RETURNS void AS $$
BEGIN
  INSERT INTO user_mastery (user_id, mastery_tag, correct_count, total_count)
  VALUES (
    p_user_id, 
    p_mastery_tag,
    CASE WHEN p_is_correct THEN 1 ELSE 0 END,
    1
  )
  ON CONFLICT (user_id, mastery_tag) DO UPDATE SET
    correct_count = user_mastery.correct_count + CASE WHEN p_is_correct THEN 1 ELSE 0 END,
    total_count = user_mastery.total_count + 1,
    last_practiced_at = NOW();
END;
$$ LANGUAGE plpgsql;
```

### 4.2 Audio Generation API

**Extend `generate-course-audio.ts`:**

```typescript
interface AudioGenerationConfig {
  course: 'ingles-a1';
  units: number[];              // [1, 2, 3, ...]
  ttsProvider: 'elevenlabs' | 'google' | 'openai';
  voiceProfiles: {
    sarah: string;              // Female voice ID
    john: string;               // Male voice ID
    narrator: string;           // Neutral voice ID
  };
  outputDir: string;            // '/public/audio/a1/'
}

// Generate audio for all listening exercises in a unit
async function generateUnitAudio(unitId: string, config: AudioGenerationConfig) {
  const unitData = await loadUnitJSON(unitId);
  const audioTasks: AudioTask[] = [];
  
  for (const block of unitData.blocks) {
    for (const exercise of block.content) {
      if (exercise.type === 'listening' && exercise.transcript_en) {
        audioTasks.push({
          text: exercise.transcript_en,
          voice: exercise.speaker || 'narrator',
          outputPath: `/audio/a1/${unitId}/${exercise.interaction_id}.mp3`
        });
      }
      
      if (exercise.type === 'conversation_completion') {
        for (const turn of exercise.conversation) {
          if (turn.speaker !== 'user' && turn.text) {
            audioTasks.push({
              text: turn.text,
              voice: turn.speaker,
              outputPath: `/audio/a1/${unitId}/${exercise.interaction_id}_${turn.speaker}.mp3`
            });
          }
        }
      }
    }
  }
  
  // Batch generate with rate limiting
  await generateAudioBatch(audioTasks, config);
}
```

---

## 5. Delivery Phases (Detailed)

### Phase 1: Quick Wins (2 weeks)

**Scope:**
- ✅ Visual progress bar in unit viewer
- ✅ Unit star system (Bronze/Silver/Gold)
- ✅ Streak badge in header
- ✅ Celebration modal for unit completion

**Files Modified:**
1. `src/components/course/PremiumUnitViewer.tsx`
2. `src/components/course/exercises/PremiumSession.tsx`
3. `supabase/migrations/20260222_unit_stars.sql`
4. `src/lib/supabase/progress.ts`

**Testing:**
- Unit tests for star calculation logic
- E2E test: Complete unit and verify star award
- Verify streak increments daily

**Success Metrics:**
- Progress bar visible on all units
- Stars stored correctly in database
- Streak counter updates daily

---

### Phase 2: Multimedia Integration (4 weeks)

**Scope:**
- ✅ 150 listening audio files generated
- ✅ 30 units with listening exercises
- ✅ 12 review units with speaking exercises
- ✅ 300 vocabulary images sourced/generated

**Week 1-2: Audio Generation**
1. Configure TTS API credentials
2. Run `npm run generate-audio:a1` for Units 1-30
3. Verify audio quality and timing
4. Upload to Supabase Storage

**Week 3: JSON Content Update**
1. Add listening exercises to Units 2, 4, 6, ... (even units)
2. Add speaking exercises to Units 10, 20, 30, 40, 50, 60
3. Validate with `npm run validate-exercises`

**Week 4: Image Integration**
1. Source images from Unsplash/Pexels or generate with DALL-E
2. Upload to `/public/images/a1/` or Supabase Storage
3. Add `image_multiple_choice` exercises to vocabulary sections

**Files Modified:**
- All 60 unit JSON files (content additions)
- `scripts/generate-course-audio.ts`
- `src/components/course/renderers/ListeningRenderer.tsx` (activate)
- `src/components/course/renderers/SpeakingRenderer.tsx` (activate)
- New: `ImageMultipleChoiceRenderer.tsx`, `ImageLabelingRenderer.tsx`

**Testing:**
- Audio playback in all browsers
- Speech recognition accuracy (Whisper)
- Image loading performance

**Success Metrics:**
- 150+ audio files accessible
- Audio plays correctly in `ListeningRenderer`
- Speaking evaluation returns semantic score

---

### Phase 3: Contextual Learning (6 weeks)

**Scope:**
- ✅ Units 1-20 restructured with micro-narratives
- ✅ 30 dialogue-based exercises
- ✅ 6 role-play scenarios (one per module)
- ✅ New exercise types: `conversation_completion`, `gap_fill_text`

**Week 1-2: Content Planning**
1. Define scenarios for Units 1-20:
   - Unit 1: First Day at English School (Sarah meets John)
   - Unit 2: Coffee Shop Order (basic transactions)
   - Unit 3: Family Introductions
   - ... (see PRD for full list)

**Week 3-4: JSON Restructuring**
1. Rewrite Units 1-10 with scenario metadata
2. Convert isolated exercises to contextualized versions:
   - **Before**: "Translate: Teacher" → Answer: "Teacher"
   - **After**: "Sarah introduces her job. She says: 'I'm a ___'" → Answer: "teacher"
3. Add audio for all dialogues

**Week 5-6: Role-Play Implementation**
1. Create `RoleplayRenderer.tsx` component
2. Add 6 role-play exercises to review units
3. Integrate GPT-4 for semantic evaluation
4. Test conversational flow

**Files Modified:**
- Units 1-20 JSON (major rewrite)
- New: `ConversationRenderer.tsx`, `RoleplayRenderer.tsx`
- `src/lib/openai/semantic-eval.ts` (GPT-4 integration)
- `scripts/validate-exercises.mjs` (extend for new types)

**Testing:**
- Validate all JSON still passes schema
- Test GPT-4 semantic scoring accuracy
- User testing for narrative flow

**Success Metrics:**
- Units 1-20 have scenario metadata
- 30+ conversation exercises functional
- GPT-4 evaluation <2s response time

---

### Phase 4: Adaptive Intelligence (4 weeks)

**Scope:**
- ✅ SRS daily review functional
- ✅ Contextual feedback on 300+ exercises
- ✅ Hint system with XP penalties
- ✅ Optional placement test

**Week 1: SRS Integration**
1. Create `DailyReview.tsx` component
2. Query `user_srs` table for due items
3. Display as flashcards with SM-2 scheduling
4. Track performance and update intervals

**Week 2-3: Feedback System**
1. Add `wrong_answer_feedback` to grammar exercises
2. Add `hints` array to complex exercises
3. Implement hint UI with progressive XP deduction
4. Test feedback clarity

**Week 4: Placement Test (Optional)**
1. Create `placement-test.json` with 20 questions
2. Build `PlacementTest.tsx` component
3. Recommend starting unit based on score
4. Allow users to skip or retake

**Files Modified:**
- All unit JSONs (add feedback/hints)
- New: `src/components/srs/DailyReview.tsx`, `SRSCard.tsx`
- New: `src/content/cursos/ingles-a1/placement-test.json`
- `supabase/migrations/20260222_mastery_tracking.sql`

**Testing:**
- SRS scheduling algorithm accuracy (SM-2)
- Feedback displays correctly per error type
- Placement test scoring reliability

**Success Metrics:**
- SRS review queue populates correctly
- Users see hints without spoiling answers
- Placement test completes in <5 minutes

---

## 6. Verification Approach

### 6.1 Quality Assurance

**Automated Testing:**
```bash
# Run before each commit
npm run lint                    # ESLint checks
npm run type-check              # TypeScript compilation
npm run validate-exercises      # JSON schema validation
npm test                        # Jest unit tests
npm run test:e2e                # Playwright E2E tests
```

**Manual Testing Checklist:**
- [ ] Load Unit 1 in `/debug/premium`
- [ ] Complete 5 exercises, verify progress bar updates
- [ ] Submit correct/incorrect answers, verify XP awarded
- [ ] Complete unit, verify star rating (Bronze/Silver/Gold)
- [ ] Play audio in listening exercise
- [ ] Record voice in speaking exercise
- [ ] View daily review section (if Phase 4 complete)
- [ ] Check Supabase tables for data integrity

**Content Quality:**
- Audio pronunciation clarity (native speaker review)
- Image relevance to vocabulary
- Scenario coherence (do dialogues make sense?)
- Feedback accuracy (does it explain the error?)

### 6.2 Performance Benchmarks

**Metrics to Monitor:**

| Metric | Target | Measurement |
|--------|--------|-------------|
| Unit load time | <2s | Lighthouse Performance score >90 |
| Audio playback latency | <500ms | Time from click to audio start |
| Exercise submission | <1s | Time from submit to feedback |
| GPT-4 semantic eval | <3s | API response time |
| Image loading | <1s | LCP (Largest Contentful Paint) |
| JSON size per unit | <200KB | Check file sizes in `cursos/ingles-a1/` |

**Database Query Optimization:**
- Add indexes for `user_progress.unit_stars`, `exercise_attempts.interaction_id`
- Use Supabase RPC functions for complex queries
- Cache SRS review queue client-side (5-minute TTL)

### 6.3 Validation Scripts

**Extend `scripts/validate-exercises.mjs`:**
```javascript
// Validate new exercise types
const newTypes = ['listening', 'speaking', 'conversation_completion', ...];

function validateListeningExercise(ex) {
  assert(ex.audio_url, 'Listening exercise must have audio_url');
  assert(ex.transcript_en, 'Listening exercise must have transcript');
  assert(ex.questions || ex.correct_answer, 'Listening must have questions or answer');
}

function validateConversationExercise(ex) {
  assert(Array.isArray(ex.conversation), 'conversation must be array');
  ex.conversation.forEach(turn => {
    assert(turn.speaker, 'Each turn must have speaker');
    if (turn.speaker !== 'user') {
      assert(turn.text, 'Non-user turns must have text');
    }
  });
}
```

**Run Validation:**
```bash
npm run validate-exercises
# Output: ✅ All 60 units validated | 1,450 exercises checked | 12 new types detected
```

---

## 7. Risks & Mitigation

| Risk | Impact | Probability | Mitigation |
|------|--------|-------------|------------|
| **TTS API cost overrun** | High | Medium | Use Google Cloud TTS for bulk, monitor monthly usage, set budget alerts |
| **Audio quality issues** | Medium | Medium | Test with native speakers, use ElevenLabs for key dialogues |
| **GPT-4 latency >3s** | Medium | Low | Implement timeout + fallback to rule-based scoring, cache common responses |
| **JSON schema breaking changes** | High | Low | Extensive validation before deployment, versioned schema, rollback plan |
| **Users confused by new exercise types** | Medium | Medium | Add tutorial tooltips, onboarding for first use of new types |
| **Database migration failures** | High | Low | Test migrations on staging DB, use Supabase transactions, backup before migrate |
| **Image copyright issues** | Low | Low | Use licensed stock photos (Unsplash), AI-generated images, or public domain |
| **Supabase storage costs** | Medium | Medium | Optimize image sizes (WebP format), CDN caching, monitor storage usage |

---

## 8. Open Questions & Decisions

### 8.1 Content Architecture Decision

**Question:** Keep JSON files or migrate to Supabase database?

**Option A: Hybrid (Recommended)**
- ✅ JSON for static course content (easier version control)
- ✅ Supabase for user-specific data (progress, SRS, analytics)
- ✅ No infrastructure changes required
- ⚠️ Limited dynamic personalization

**Option B: Full Database Migration**
- ✅ Full personalization (AI-generated exercises per user)
- ✅ Real-time content updates
- ❌ Requires migration of 60 JSON files to database
- ❌ More complex deployment pipeline

**Decision:** Option A (Hybrid) for Phases 1-3, Option B evaluated for Phase 4+

### 8.2 TTS Provider Selection

**Question:** Which TTS provider for audio generation?

**Analysis:**
- **ElevenLabs**: Best quality, most expensive ($99/mo → 20 units)
- **Google Cloud TTS**: Most economical ($4/1M chars → all units), good quality
- **OpenAI TTS**: Middle ground ($15/1M chars), natural voices

**Decision:** 
- **Primary**: Google Cloud TTS for bulk exercises (300+ audios)
- **Premium**: ElevenLabs for character dialogues (Sarah, John - 30 audios)
- **Budget**: ~$50-80/month total

### 8.3 Image Sourcing Strategy

**Question:** Generate images with AI or use stock photos?

**Option A: AI-Generated (DALL-E 3, Stable Diffusion)**
- ✅ Consistent style
- ✅ Unlimited custom content
- ❌ $0.04 per image (DALL-E) → $12 for 300 images
- ⚠️ Quality variability

**Option B: Stock Photos (Unsplash, Pexels)**
- ✅ Free, high quality
- ✅ Diverse representation
- ❌ Style inconsistency
- ❌ Limited vocabulary coverage (technical terms)

**Decision:** 
- Use stock photos for common vocabulary (80%)
- AI-generate for technical/specific terms (20%)
- Consistent post-processing (rounded corners, white padding)

---

## 9. Success Criteria

### 9.1 Technical Acceptance

**Phase 1:**
- [ ] All lint/type-check/tests pass
- [ ] Progress bar shows correct percentage
- [ ] Star rating (1-3) stored in database
- [ ] Streak counter increments daily
- [ ] Performance: Unit loads <2s

**Phase 2:**
- [ ] 150+ audio files accessible via URLs
- [ ] Audio plays in all browsers (Chrome, Safari, Firefox)
- [ ] Speaking evaluation returns accuracy score
- [ ] 300 images load with <1s LCP
- [ ] All JSON files validate against schema

**Phase 3:**
- [ ] Units 1-20 have scenario metadata
- [ ] Conversations render with proper speaker labels
- [ ] GPT-4 evaluation responds in <3s
- [ ] Role-play flow feels natural (user testing)
- [ ] No console errors in browser

**Phase 4:**
- [ ] SRS queue shows items due today
- [ ] Hints reveal progressively without spoiling
- [ ] Feedback explains errors accurately
- [ ] Placement test completes in <5 minutes
- [ ] Database queries optimized (<100ms)

### 9.2 User Experience Validation

**Metrics to Track:**

| Metric | Baseline (Estimated) | Target |
|--------|---------------------|--------|
| Unit completion rate | 40-50% | >75% |
| Time per unit | 120 min (theoretical) | 45-60 min (actual) |
| NPS score | Not measured | >50 |
| 7-day retention | <20% | >50% |
| Module 1 completion | 20-30% | >60% |

**User Testing (n=20 beta users):**
- Usability: "Can you complete Unit 1 without help?"
- Engagement: "How interesting was the content? (1-10)"
- Clarity: "Did feedback help you understand errors?"
- Multimedia: "Was audio/speaking helpful?"

**Go/No-Go Decision:** If NPS < 40 after Phase 2, pause and iterate before Phase 3

---

## 10. Next Steps

### Immediate Actions (This Week)

1. **Review & Approve Spec** → User/PM approval
2. **Set Up Staging Environment** → Deploy current code to staging
3. **Create Feature Branch** → `feature/a1-improvements`
4. **Initialize Phase 1 Tasks** → Create detailed task breakdown in plan.md

### Week 1 Kickoff

1. **Day 1-2**: Implement progress bar + star system
2. **Day 3**: Write Supabase migration for unit_stars
3. **Day 4**: Integrate streak display
4. **Day 5**: Testing + QA

### Phase Gates

- **Phase 1 → Phase 2**: All P0 features functional, no blocking bugs
- **Phase 2 → Phase 3**: Audio quality approved, 30 units with listening
- **Phase 3 → Phase 4**: NPS >40 from beta users, Units 1-10 narrative complete
- **Phase 4 → Production**: All phases tested, performance benchmarks met

---

## 11. Appendix

### 11.1 Example JSON Transformations

**Before (Unit 1, Exercise 1):**
```json
{
  "interaction_id": "U1_I1",
  "type": "matching",
  "prompt_es": "Une la palabra con su traducción correcta:",
  "pairs": [
    { "id": "p0", "left": "Good morning", "right": "Buenos días" }
  ],
  "mastery_tag": "vocabulary"
}
```

**After (Phase 2 - with audio):**
```json
{
  "interaction_id": "U1_I1",
  "type": "listening",
  "prompt_es": "Escucha el saludo y selecciona la traducción correcta:",
  "audio_url": "/audio/a1/unit1/U1_I1_greeting.mp3",
  "transcript_en": "Good morning!",
  "speaker": "sarah",
  "options": [
    { "id": "o1", "text": "Buenos días" },
    { "id": "o2", "text": "Buenas tardes" },
    { "id": "o3", "text": "Buenas noches" }
  ],
  "correct_answer": "o1",
  "mastery_tag": "listening"
}
```

**After (Phase 3 - contextual):**
```json
{
  "block_id": "B1",
  "title": "First Day at English School",
  "scenario": {
    "setting": "Classroom at 9:00 AM",
    "characters": ["Sarah (teacher)", "John (new student)"],
    "objective": "Learn morning greetings and introductions"
  },
  "content": [
    {
      "interaction_id": "U1_I1",
      "type": "listening",
      "prompt_es": "Sarah entra al aula. ¿Qué dice?",
      "audio_url": "/audio/a1/unit1/sarah_greeting.mp3",
      "transcript_en": "Good morning, everyone! Welcome to class!",
      "speaker": "sarah",
      "options": [
        { "id": "o1", "text": "Buenos días" },
        { "id": "o2", "text": "Buenas tardes" }
      ],
      "correct_answer": "o1",
      "mastery_tag": "listening"
    },
    {
      "interaction_id": "U1_I2",
      "type": "conversation_completion",
      "prompt_es": "John responde a Sarah. ¿Qué dice?",
      "conversation": [
        { "speaker": "sarah", "text": "Good morning! What's your name?", "audio_url": "..." },
        { "speaker": "user", "placeholder": "Escribe tu respuesta..." }
      ],
      "evaluation_type": "ai_semantic",
      "expected_elements": ["good morning", "name", "greeting"],
      "sample_answers": [
        "Good morning! My name is John.",
        "Hi! I'm John. Nice to meet you."
      ],
      "mastery_tag": "communication"
    }
  ]
}
```

### 11.2 Component Reference

**Key Components to Modify:**

| Component | Path | Changes | Phase |
|-----------|------|---------|-------|
| `PremiumUnitViewer` | `src/components/course/` | Add progress bar, stars, streak | P1 |
| `PremiumSession` | `src/components/course/exercises/` | Track performance, calculate stars | P1 |
| `ExerciseRenderer` | `src/components/course/exercises/` | Add new type routing | P2-P3 |
| `ListeningRenderer` | `src/components/course/renderers/` | Activate, test audio playback | P2 |
| `SpeakingRenderer` | `src/components/course/renderers/` | Activate, integrate Whisper | P2 |
| **NEW** `ConversationRenderer` | `src/components/course/renderers/` | Create for dialogue exercises | P3 |
| **NEW** `DailyReview` | `src/components/srs/` | SRS review session | P4 |

### 11.3 Testing Strategy

**Unit Tests (Jest):**
- Star calculation logic
- SM-2 algorithm correctness
- Exercise validation functions
- Hint XP deduction

**Integration Tests (Jest):**
- Supabase CRUD operations
- Audio loading from storage
- GPT-4 API integration
- SRS query functions

**E2E Tests (Playwright):**
- Complete a full unit (Unit 1)
- Verify star award
- Play audio and record speech
- Navigate daily review
- Check database state

**Performance Tests:**
- Load test: 100 concurrent users on Unit 1
- Audio streaming under slow 3G
- Image lazy loading effectiveness

---

**Document Version:** 1.0  
**Last Updated:** 2026-02-22  
**Approved By:** [Pending]  
**Next Review:** After Phase 1 completion
