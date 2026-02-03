# PRD - Fix 301 Redirect Errors

## Goal
Improve SEO by ensuring all internal links point directly to their final destinations (200 OK) instead of hitting 301 redirects.

## Background
The project has undergone a restructuring (Fase 1) which introduced several 301 redirects in `next.config.js`. Internal links still pointing to the old paths cause unnecessary redirect hops, which is suboptimal for SEO.

## Requirements
- Identify all internal links (in JSX, components, and Markdown) that point to old URLs.
- Update these links to point to the new, final destinations defined in `next.config.js`.
- Ensure no broken links are introduced during the process.
- Verify that the 301 redirects in `next.config.js` are still functional for external traffic.

## Redirect Mapping (from next.config.js)
| Source | Destination |
|--------|-------------|
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

## Out of Scope
- Fixing 302/307 temporary redirects unless they are incorrectly used for permanent changes.
- External links (links to other domains).
