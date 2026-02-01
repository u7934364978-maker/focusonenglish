# PRD - Embedding Administration A1 Course

## Objective
Embed a new external course (SCORM package) into the "Inglés Administración A1" section of the Focus English platform.

## Requirements
1. **SCORM Content**: The course content is located in the `scorm_package_1.2` folder in the repository root.
2. **Target Location**: The course should be accessible at the route `/cursos/trabajo/administracion/a1/trimestre1/semana01`, which is the link already used in the navigation menu.
3. **Embedding Method**: Use an `iframe` to display the SCORM course.
4. **Static Assets**: The SCORM package assets must be moved to the `public` directory to be served by Next.js.

## User Experience
- When a user clicks on "Nivel A1 (Principiante)" under the "Administración" sector in the navigation menu, they should see the embedded course.
- The course should fill the available screen space (similar to the travel course preparation page).

## Constraints
- The SCORM package relies on an external driver from `my.coursebox.ai`.
- The iframe should allow full screen.

## Success Criteria
- Navigating to `/cursos/trabajo/administracion/a1/trimestre1/semana01` displays the course correctly.
- The course is interactive and fits the screen.
