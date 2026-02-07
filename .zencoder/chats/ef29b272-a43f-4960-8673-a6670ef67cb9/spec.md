# Technical Specification - SEO Title Optimization

## Methodology
To achieve the 60-70 character target while maintaining SEO value, the following strategy will be applied:

1. **Branding Consolidation**: Remove double branding (e.g., `| Focus English | Focus English`) and ensure the brand name appears only once at the end.
2. **Conciseness**: Replace long phrases with shorter synonyms:
   - "Guía Definitiva de" -> "Guía de"
   - "Todo lo que necesitas saber" -> (Remove or shorten)
   - "Preparación para el examen" -> "Preparación"
3. **Keyword Prioritization**: Ensure the main keyword (usually the first part of the original title or derived from the URL) is at the beginning.
4. **Validation**: Each title will be checked for length (60-70 chars) and clarity.

## Output Structure
The final result will be presented in a markdown table:

| URL | New Title | Length |
| :--- | :--- | :--- |
| https://example.com | Optimized Title Here | 65 |

## Execution Plan
1. **Batch Processing**: Process the 400 titles in logical groups.
2. **Drafting**: Generate a draft for each title.
3. **Refinement**: Adjust titles that fall outside the 60-70 character range.
4. **Final Review**: Ensure no duplicate titles and high readability.
