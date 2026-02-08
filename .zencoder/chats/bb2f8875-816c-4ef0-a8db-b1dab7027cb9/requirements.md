# Product Requirements Document (PRD): Course Engine Consolidation

## 1. Vision & Purpose
Transition the current fragmented course management system (multiple Python scripts, various JS validation tools, and hybrid TS/JSON data storage) into a unified, algorithmic, and robust **Course Engine**. This engine will centralize content loading, validation, and generation to ensure 100% data integrity and ease of scalability.

## 2. Target Audience
- **Content Creators/Administrators**: Who need to add or modify courses without technical errors.
- **Developers**: Who need a clean, standardized API to fetch and display course content.
- **End Users**: Who benefit from error-free, consistent educational content and media (audio/visuals).

## 3. Scope of the "Course Engine"
The engine must handle:
- **Universal Schema Validation**: Every unit, lesson, and exercise must pass a strict Zod schema before being "accepted".
- **Dynamic Content Loading**: Capability to fetch data from both local JSON files and the Supabase database through a single interface.
- **Normalization**: Automatic fixing of common data issues (trimming strings, generating unique IDs, fixing type mismatches).
- **Automation Pipeline**: A single command to validate all 188+ JSON files and generate missing assets (like audio/translations).

## 4. Key Features
1. **Unified Schema**: A single TypeScript definition for all course types (General English, Sector-specific, TOEFL, etc.).
2. **Pre-build Validation**: A script that runs `npm run validate-courses` and blocks deployment if any unit is corrupted.
3. **Auto-Generator Interface**: A way to describe a course structure and have the engine generate the JSON boilerplate/content, replacing level-specific Python scripts.
4. **Consistency Layer**: Ensure that `course-service.ts`, `local-course-service.ts`, and `premium-course-service.ts` all use the same underlying engine logic.

## 5. Non-Requirements
- This PRD does *not* cover the UI/UX design of the course player, only the data and logic engine.
- It does not cover the migration of legacy user progress, only the course structure data.

## 6. Success Metrics
- 0 validation errors across all JSON files.
- Reduction of validation/audit scripts from 10+ down to 1 universal tool.
- 50% faster creation of new course modules.
