# Product Requirements Document (PRD) - Content Visibility Verification

## 1. Introduction
The user has added new content to the platform, specifically in the `ingles-a1` and `ingles-a2` courses and the blog. This document outlines the requirements for verifying that this content is correctly integrated and visible on the platform.

## 2. Goals
- Ensure all new unit files in `src/content/cursos/ingles-a1` and `src/content/cursos/ingles-a2` are correctly formatted and loadable.
- Ensure all new blog posts in `src/content/blog` are correctly formatted with required frontmatter.
- Verify that the course navigation and blog listing pages correctly pick up these new entries.

## 3. Scope
- **Courses**: `ingles-a1`, `ingles-a2`.
- **Blog**: All categories (`viajes`, `trabajo`, `metodos`, `examenes`).
- **Files**: `.json` for courses, `.md` for blog.

## 4. Requirements

### 4.1. Course Content Requirements
- Each unit JSON must follow the `UnitData` structure.
- `unit_id` and `unit_title` must be present.
- `blocks` and `content` within blocks must have valid `interaction_id`s.
- File names must match the `unit_id` (e.g., `unit5.json` for `unit5`).

### 4.2. Blog Content Requirements
- Each blog post must have valid YAML frontmatter.
- Required fields: `title`, `date`, `category`, `excerpt`, `readTime`.
- `slug` is derived from the filename.

### 4.3. Visibility Requirements
- The `premiumCourseServerService.getUnits` method must include all JSON files in the count.
- The `getBlogArticles` method must parse all Markdown files without errors.

## 5. Success Criteria
- Automated check confirms all files are valid.
- No parsing errors in logs when reading the content.
- Manual inspection of a sample of new files confirms expected content structure.
