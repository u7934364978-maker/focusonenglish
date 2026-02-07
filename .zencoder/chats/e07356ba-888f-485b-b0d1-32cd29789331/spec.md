# Technical Specification - 404 Error Fixes for Keyword Hubs

## Technical Context
- **Framework**: Next.js 15 (App Router)
- **Content**: Markdown/MDX with `gray-matter` for frontmatter.
- **Location**: `src/content/blog/**/*.md`
- **Logic**: `src/lib/blog.ts` handles keyword extraction and article filtering.

## Implementation Approach
1. **Analysis**: Extract the list of keywords from the provided 404 report.
2. **Matching**: 
   - Check if the keyword exists in any article.
   - If missing, find the most relevant article(s) based on the keyword's meaning and the article's category/title.
3. **Update**: Add the missing keywords to the `keywords` array in the relevant `.md` files.
4. **Validation**: Ensure that `getAllKeywords()` picks up the new keywords and `getArticlesByKeyword()` returns the associated articles.

## Data Model Changes
- No changes to the data model. We are only updating data in existing files.

## Verification
- Run `npm run build` (or at least check if `generateStaticParams` works) to ensure the new routes are generated.
- Verify a few sample keywords locally.
