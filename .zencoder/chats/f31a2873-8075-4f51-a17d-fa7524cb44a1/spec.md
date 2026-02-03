# Technical Specification - Fix 301 Redirect Errors

## Technical Context
- **Language**: TypeScript / React
- **Framework**: Next.js 15 (App Router)
- **Styling**: Tailwind CSS

## Implementation Approach
The goal is to replace all occurrences of redirected paths with their final destinations. This will be done by searching for specific path strings in the codebase and updating them to the new values.

### Redirect Map
Based on `next.config.js`, the following replacements should be made:

| Old Path (Source) | New Path (Destination) |
|-------------------|-------------------------|
| `/signin` | `/cuenta/login` |
| `/login` | `/cuenta/login` |
| `/register` | `/cuenta/registro` |
| `/signup` | `/cuenta/registro` |
| `/forgot-password` | `/cuenta/recuperar` |
| `/contact` | `/contacto` |
| `/estudiante/dashboard` | `/dashboard` |
| `/metodologia` | `/` |
| `/cursos` | `/` |
| `/diagnostico` | `/` |
| `/cursos-especializados` | `/` |
| `/certificaciones` | `/` |
| `/trabajo/:nivel` | `/` |
| `/viajes/:nivel` | `/` |
| `/examenes/:nivel` | `/` |

## Affected Files (Identified so far)
- `src/app/contacto/page.tsx`: Update `/cursos` to `/`
- `src/app/blog/[category]/[slug]/page.tsx`: Update `/metodologia` to `/`
- `src/components/sections/HeroSection.tsx`: Update `/certificaciones` to `/`
- `README.md`: Update `/signup` to `/cuenta/registro` (for consistency)
- `scripts/test-resend.js`: Update `/forgot-password` to `/cuenta/recuperar`

## Delivery Phases
1. **Global Search**: Final confirmation of all occurrences using `grep`.
2. **Batch Replacement**: Update files in groups based on the redirect map.
3. **Verification**: Manual check of updated files and running build/lint to ensure no breakage.

## Verification Approach
- **Lint**: `npm run lint`
- **Build**: `npm run build` (to ensure all internal links are still valid for Next.js)
- **Manual Check**: Verify that the redirects in `next.config.js` still cover any missed cases for external traffic.
