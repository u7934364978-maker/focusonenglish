# Requirements - Duolingo A1 Course Improvements

## Overview
The Duolingo A1 course page is currently crashing because some unit JSON files do not follow the expected schema. Additionally, there is a transition towards database-driven content that needs to be supported.

## Goals
1. **Fix Crash**: Resolve the `TypeError` in `src/app/curso/duolingo-a1/page.tsx` when reading unit files.
2. **Standardize Schema**: Update `unit33.json` and `unit34.json` to follow the standard `UnitData` structure (with `course`, `blocks`, etc.).
3. **Database Integration**: Enable loading unit content from Supabase as an alternative to JSON files, starting with Unit 6.
4. **Resiliency**: Improve the code to handle missing or malformed unit data gracefully.

## Functional Requirements
- The unit list page must display all units without crashing.
- Each unit must show its title and level correctly.
- Clicking a unit should load its content, whether it comes from a JSON file or the database.

## Technical Requirements
- Update `src/app/curso/duolingo-a1/page.tsx` to handle missing `course` property.
- Refactor `src/app/curso/duolingo-a1/[unitId]/page.tsx` to support database-driven units.
- Standardize JSON files in `src/content/cursos/duolingo-a1/`.
- Ensure types in `src/types/duolingo.ts` are respected or updated if needed.

## Decisions
- **Supabase vs JSON**: Prioritize JSON content if both exist, except for units marked for migration.
- **Unit 6**: The database exercises should replace the existing JSON content. This means Unit 6 should be loaded from Supabase.
- **Migration Strategy**: We are moving towards database-driven content, but keeping JSON as the primary source for now for most units.
