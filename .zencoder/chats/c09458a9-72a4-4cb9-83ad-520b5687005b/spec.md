# Technical Specification - Content Visibility Verification

## 1. Technical Context
- **Framework**: Next.js 15 (App Router).
- **Language**: TypeScript.
- **Content Storage**: Local JSON files for courses, Markdown for blog.
- **Loaders**:
  - Courses: `src/lib/services/premium-course-service.server.ts`.
  - Blog: `src/lib/blog.ts`.

## 2. Implementation Approach
We will implement a verification script (or manual verification steps using existing tools) to ensure all new content is valid and accessible by the loaders.

### 2.1. Verification Strategy
1. **JSON Validation**: For each unit in `ingles-a1` and `ingles-a2`, verify it can be parsed as JSON and contains the required keys (`course.unit_id`, `course.unit_title`, `blocks`).
2. **Blog Frontmatter Validation**: For each blog post, verify `gray-matter` can parse it and it has the required metadata.
3. **Loader Integration Test**: Mock the file system or use the actual services to ensure `getUnits` and `getBlogArticles` return the expected number of items without crashing.

## 3. Source Code Changes
No changes to source code are expected, only verification of content files.

## 4. Delivery Phases
### Phase 1: Content Audit
- Run a script to validate all JSON and Markdown files in the content directories.
- Check for duplicate `unit_id`s or missing frontmatter.

### Phase 2: Visibility Check
- Verify that the units appear in the course listing page.
- Verify that blog posts appear in the blog index.

## 5. Verification Approach
- Use a custom Node.js script to audit the `src/content` directory.
- Manually verify a few URLs:
  - `/curso/ingles-a1/unit5`
  - `/blog/viajes/supervivencia-ingles-transporte-publico`
