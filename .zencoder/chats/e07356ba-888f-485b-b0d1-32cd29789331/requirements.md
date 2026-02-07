# Product Requirements Document (PRD) - 404 Error Fixes for Keyword Hubs

## Problem Statement
The blog has numerous 404 errors for URLs under `/blog/temas/[keyword]`. These URLs are intended to be "Keyword Hub" pages that aggregate articles tagged with specific keywords. The 404s indicate that many keywords listed in the SEO report are not currently associated with any articles in the codebase.

## Goals
- Eliminate 404 errors for the provided list of keyword URLs.
- Improve SEO by ensuring these "Topic Cluster Hubs" exist and contain relevant content.

## Scope
- Identify which keywords from the provided list are missing from the blog articles' frontmatter.
- Map missing keywords to the most relevant existing articles.
- Add the keywords to the `keywords` field in the frontmatter of those articles.
- (Optional) If a keyword is completely irrelevant or redundant, consider a redirect (though the primary task is fixing them as hubs).

## User Experience
- Users clicking on these topic links should see a list of relevant articles instead of a 404 page.

## Technical Constraints
- Keywords are managed in the YAML frontmatter of Markdown files in `src/content/blog/`.
- The `getArticlesByKeyword` function in `src/lib/blog.ts` uses case-insensitive exact matching.
- Accents and special characters must match exactly (except for case).
