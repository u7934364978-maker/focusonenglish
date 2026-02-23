# A1 Course Preview Analytics Events

This document describes all analytics events tracked in the A1 Course Preview feature for monitoring user engagement and conversion funnel analysis.

## Event Categories

All preview events use the category: `course_preview`

## Landing Page Events

### `a1_preview_landing_view`
**When:** User visits the A1 course preview landing page
**Label:** "A1 Course Landing"
**Use Case:** Track initial interest and landing page traffic

## Navigation Events

### `unit_card_click`
**When:** User clicks on a unit card to preview it
**Label:** `{unitId} (Unit {unitNumber})`
**Value:** Unit number (1-60)
**Use Case:** Track which units are most popular, identify user interests

## Filter & Search Events

### `filter_usage`
**When:** User applies a filter (topic, difficulty, or search)
**Label Format:** 
- `topic: {topicName}` (e.g., "topic: Grammar")
- `difficulty: {level}` (e.g., "difficulty: 3")
- `search: {searchQuery}` (e.g., "search: greetings")
**Use Case:** Understand how users discover content, optimize filter options

### `view_mode_toggle`
**When:** User switches between grid and module views
**Label:** `grid` or `modules`
**Use Case:** Determine preferred layout for course browsing

## Audio Playback Events

### `audio_play`
**When:** User starts playing audio in a unit
**Label:** Unit ID
**Use Case:** Track audio content engagement

### `audio_pause`
**When:** User pauses audio
**Label:** Unit ID
**Use Case:** Track audio completion rates

### `audio_speed_change`
**When:** User changes playback speed (0.75x, 1x, 1.25x)
**Label:** Unit ID
**Value:** Speed multiplier (0.75, 1, 1.25)
**Use Case:** Understand user preferences for learning pace

### `audio_seek`
**When:** User seeks to a different position in audio
**Label:** Unit ID
**Value:** Time in seconds
**Use Case:** Identify skipped sections or replayed content

## Translation Events

### `translation_toggle`
**When:** User toggles translation visibility
**Label:** Unit ID
**Value:** 1 (showing translation) or 0 (hiding translation)
**Use Case:** Track bilingual feature usage, assess learning approach

## Exercise Events

### `exercise_completion`
**When:** User completes an exercise
**Label:** `{unitId} - Exercise {current}/{total}`
**Value:** Current exercise number
**Use Case:** Track progress through units, identify drop-off points

## Unit Completion Events

### `unit_time_spent`
**When:** User leaves a unit page (cleanup on unmount)
**Label:** Unit ID
**Value:** Time spent in seconds
**Use Case:** Measure engagement depth, identify high-value content

### `unit_completion`
**When:** User completes all exercises in a unit
**Label:** Unit ID
**Value:** Total duration in minutes
**Use Case:** Track completion rates, measure time to completion

---

## Conversion Funnel

The typical user journey through the preview:

1. **Landing** → `a1_preview_landing_view`
2. **Browse** → `filter_usage`, `view_mode_toggle`
3. **Select Unit** → `unit_card_click`
4. **Engage** → `audio_play`, `translation_toggle`, `unit_time_spent`
5. **Complete** → `exercise_completion`, `unit_completion`
6. **Convert** → (Track separately via CTA clicks)

## A/B Testing Recommendations

### Test 1: CTA Button Placement
- **Hypothesis:** Unit completion screen CTAs drive more conversions than inline CTAs
- **Metrics:** Click-through rate on "Volver al listado" vs. inline "Start Course" CTA
- **Implementation:** Add trackCTAClick('unit_complete_cta', 'completion_screen')

### Test 2: Filter Discoverability
- **Hypothesis:** Pre-opened filters increase unit exploration
- **Metrics:** Compare filter_usage events and unit_card_click diversity
- **Implementation:** A/B test default filter panel visibility

### Test 3: Audio Auto-play
- **Hypothesis:** Auto-playing audio increases engagement
- **Metrics:** Compare audio_play events, unit_time_spent, exercise_completion
- **Implementation:** A/B test audio auto-play on unit load

### Test 4: Translation Default State
- **Hypothesis:** Starting with English increases perceived difficulty (and value)
- **Metrics:** Compare translation_toggle events, exercise_completion, unit_time_spent
- **Implementation:** A/B test defaultShowTranslation prop

## Data Analysis Queries

### Most Popular Units
```sql
SELECT label, COUNT(*) as clicks
FROM analytics_events
WHERE action = 'unit_card_click'
GROUP BY label
ORDER BY clicks DESC
LIMIT 10
```

### Average Time to Unit Completion
```sql
SELECT AVG(value) as avg_minutes
FROM analytics_events
WHERE action = 'unit_completion'
```

### Filter Usage Distribution
```sql
SELECT label, COUNT(*) as usage
FROM analytics_events
WHERE action = 'filter_usage'
GROUP BY label
ORDER BY usage DESC
```

### Audio Engagement Rate
```sql
SELECT 
  (SELECT COUNT(*) FROM analytics_events WHERE action = 'audio_play') * 100.0 / 
  (SELECT COUNT(*) FROM analytics_events WHERE action = 'unit_card_click') as engagement_rate
```

---

## Implementation Notes

- All events use Google Analytics 4 via `window.gtag()`
- Events fire client-side only (no server-side tracking)
- Analytics is disabled if `NEXT_PUBLIC_GA_MEASUREMENT_ID` is not set
- Events include fallback checks to prevent errors if gtag is blocked
- Search tracking waits for 3+ characters to reduce noise
