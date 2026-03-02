# Full SDD workflow

## Configuration
- **Artifacts Path**: {@artifacts_path} → `.zenflow/tasks/{task_id}`

---

## Agent Instructions

If you are blocked and need user clarification, mark the current step with `[!]` in plan.md before stopping.

---

## Workflow Steps

### [x] Step: Requirements
<!-- chat-id: e5e05e86-a695-4227-9428-6633a37d27b4 -->

Create a Product Requirements Document (PRD) based on the feature description.

1. Review existing codebase to understand current architecture and patterns
2. Analyze the feature definition and identify unclear aspects
3. Ask the user for clarifications on aspects that significantly impact scope or user experience
4. Make reasonable decisions for minor details based on context and conventions
5. If user can't clarify, make a decision, state the assumption, and continue

Save the PRD to `{@artifacts_path}/requirements.md`.

### [x] Step: Technical Specification
<!-- chat-id: 2321f2d3-e833-4462-8440-82fe135844ce -->

Create a technical specification based on the PRD in `{@artifacts_path}/requirements.md`.

1. Review existing codebase architecture and identify reusable components
2. Define the implementation approach

Save to `{@artifacts_path}/spec.md` with:
- Technical context (language, dependencies)
- Implementation approach referencing existing code patterns
- Source code structure changes
- Data model / API / interface changes
- Delivery phases (incremental, testable milestones)
- Verification approach using project lint/test commands

### [x] Step: Planning
<!-- chat-id: 75b3c508-4b16-4023-af5a-67634ceaaee8 -->

This is a trivial single-file data edit. No additional breakdown is needed beyond a single implementation step.

### [x] Step: Fix trivial matching exercises in unit-30.ts
<!-- chat-id: 84a251f5-b6d4-40aa-a334-00cb2e4d9fd8 -->

Edit `src/lib/course/a1/unit-30.ts` to fix 6 matching exercises where options show English words instead of Spanish.

For each of these exercises, change every option from `[[English|Spanish]]` to `[[Spanish|Spanish]]`:
- `a1-u30-u30_v1_i1` — Rooms: Kitchen→Cocina, Living room→Salón, Bedroom→Dormitorio, Bathroom→Baño
- `a1-u30-u30_v1_i3` — Body parts: Head→Cabeza, Leg→Pierna, Shoulder→Hombro, Hand→Mano
- `a1-u30-u30_v1_i5` — Animals: Rabbit→Conejo, Bird→Pájaro, Lion→León, Horse→Caballo
- `a1-u30-u30_v1_i6` — Clothes: Shoes→Zapatos, Jacket→Chaqueta, Socks→Calcetines, Skirt→Falda
- `a1-u30-u30_v1_i8` — Neighbourhood: Pharmacy→Farmacia, Library→Biblioteca, Cinema→Cine, Bank→Banco
- `a1-u30-u30_v1_i10` — Adjectives: Modern→Moderno, Traditional→Tradicional, Bright→Luminoso, Cozy→Acogedor

Questions and `correctAnswer` indices stay unchanged.

Verification: run `npm run build` to confirm no TypeScript errors.
