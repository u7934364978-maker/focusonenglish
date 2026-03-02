# Technical Specification: Fix Trivial Matching Exercises in Unit 30

## Technical Context

- **Language**: TypeScript
- **File**: `src/lib/course/a1/unit-30.ts`
- **Change type**: Pure data content edit — no logic, component, or API changes

## Implementation Approach

Each of the 6 affected matching exercises has `options` in the format `[[English|Spanish]]`. Since the UI renders the first segment as the display text in English mode, the student sees the English word in both the question and the options — making the exercise trivial.

Fix: replace every option string `[[English|Spanish]]` with `[[Spanish|Spanish]]`. Questions remain unchanged.

**Pattern to transform** (per option):
```
"[[Rooms|Habitaciones]]"  →  "[[Habitaciones|Habitaciones]]"
```

The `correctAnswer` index values do **not** change — only the text content of the options changes.

## Affected Exercises and Their Word Mappings

### `a1-u30-u30_v1_i1` — Rooms
| English token | Spanish replacement |
|---|---|
| Kitchen | Cocina |
| Living room | Salón |
| Bedroom | Dormitorio |
| Bathroom | Baño |

### `a1-u30-u30_v1_i3` — Body parts
| English token | Spanish replacement |
|---|---|
| Head | Cabeza |
| Leg | Pierna |
| Shoulder | Hombro |
| Hand | Mano |

### `a1-u30-u30_v1_i5` — Animals
| English token | Spanish replacement |
|---|---|
| Rabbit | Conejo |
| Bird | Pájaro |
| Lion | León |
| Horse | Caballo |

### `a1-u30-u30_v1_i6` — Clothes
| English token | Spanish replacement |
|---|---|
| Shoes | Zapatos |
| Jacket | Chaqueta |
| Socks | Calcetines |
| Skirt | Falda |

### `a1-u30-u30_v1_i8` — Neighborhood places
| English token | Spanish replacement |
|---|---|
| Pharmacy | Farmacia |
| Library | Biblioteca |
| Cinema | Cine |
| Bank | Banco |

### `a1-u30-u30_v1_i10` — House adjectives
| English token | Spanish replacement |
|---|---|
| Modern | Moderno |
| Traditional | Tradicional |
| Bright | Luminoso |
| Cozy | Acogedor |

## Source Code Changes

Single file edit: `src/lib/course/a1/unit-30.ts`

For every option inside the 6 exercises above, replace `[[EnglishWord|SpanishWord]]` → `[[SpanishWord|SpanishWord]]`. Questions and `correctAnswer` values stay identical.

No other files require modification.

## Verification

- Visual diff of `src/lib/course/a1/unit-30.ts` to confirm only option strings changed and `correctAnswer` indices are preserved.
- Run `npm run validate-exercises` if available, or `npm run build` to confirm no TypeScript errors.
- Manual spot-check: for exercise `a1-u30-u30_v1_i3` question "Head", options should now read `[[Cabeza|Cabeza]]`, `[[Pierna|Pierna]]`, `[[Hombro|Hombro]]`, `[[Mano|Mano]]`.
