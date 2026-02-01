# PRD - Implement Travel Preparation Course

## Overview
The goal is to implement the "Essential English for Spanish Speakers: Travel Preparation Course" into the Focus English web platform. This course is currently available as a static Rise 360 export in `src/content/content 2`.

## Goals
- Make the Rise 360 course accessible within the application.
- Provide a seamless user experience where the course feels integrated into the platform.
- Ensure the course is only accessible to authorized users (optional, but preferred).

## Target Audience
- Users looking for practical English preparation for travel.

## Functional Requirements
1. **Course Hosting**: The static files (HTML, JS, CSS, Assets) from `src/content/content 2` must be hosted and servable by the Next.js application.
2. **Course Route**: A new route `/cursos/viajes/preparacion` (or similar) should be created to host the course.
3. **Iframe Integration**: The course should be embedded using an iframe to preserve its interactivity and design.
4. **Navigation**: Update the "Inglés para Viajar" links on the homepage and in the navigation menu to point to the new course or a landing page for it.
5. **Layout Consistency**: The course page should include the application's navigation and footer (if appropriate) or at least a way to return to the dashboard.

## Non-Functional Requirements
- **Performance**: The course should load quickly.
- **Responsiveness**: The iframe should be responsive and work well on mobile devices.

## Unclear Aspects / Assumptions
- **Assumption**: The user wants to host the course themselves rather than using an external LMS.
- **Assumption**: A simple iframe integration is sufficient for now (no deep SCORM integration with progress tracking in the DB for this specific static export).
- **Assumption**: Moving files from `src/content/content 2` to `public/courses/viajes` is the preferred way to serve them.
