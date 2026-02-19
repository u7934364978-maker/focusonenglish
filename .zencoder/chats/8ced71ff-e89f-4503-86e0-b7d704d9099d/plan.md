# Spec and build

## Agent Instructions

Ask the user questions when anything is unclear or needs their input. This includes:

- Ambiguous or incomplete requirements
- Technical decisions that affect architecture or user experience
- Trade-offs that require business context

Do not make assumptions on important decisions — get clarification first.

---

## Workflow Steps

### [x] Step: Technical Specification
Assess the task's difficulty, as underestimating it leads to poor outcomes.
- medium: Many files to update (60 units), repetitive but requires attention.

Technical specification saved to `/Users/lidia/Documents/focusonenglish/focusonenglish/.zencoder/chats/8ced71ff-e89f-4503-86e0-b7d704d9099d/spec.md`.

---

### [x] Step: Phase 1 (Units 1-3)
Implement word-by-word translations for reading exercises in the first 3 units.

- [x] Update Unit 1: Convert transcripts in `src/lib/a1-m1-l1-detailed.ts`.
- [x] Update Unit 2: Convert block transcripts in `src/lib/a1-m1-l2-detailed.ts` to word-by-word.
- [x] Update Unit 3: Verify Unit 3 in `src/lib/a1-m1-l3-detailed.ts` (already compliant).
- [x] Manual verification via `/debug/a1-preview/[unitId]`.
- [x] Automated verification with a new E2E test.

---

### [x] Step: Phase 2 (Units 4-6)
Implement word-by-word translations for reading exercises in units 4 to 6.

- [x] Audit and update Unit 4.
- [x] Audit and update Unit 5.
- [x] Audit and update Unit 6.
- [x] Manual verification.

---

### [x] Step: Phase 3 (Units 7-9)
Implement word-by-word translations for reading exercises in units 7 to 9.

- [x] Audit and update Unit 7.
- [x] Audit and update Unit 8.
- [x] Audit and update Unit 9.
- [x] Manual verification.

---

### [x] Step: Phase 4 (Units 10-12)
Implement word-by-word translations for reading exercises in units 10 to 12.

- [x] Audit and update Unit 10.
- [x] Audit and update Unit 11.
- [x] Audit and update Unit 12.
- [x] Manual verification.

---

### [x] Step: Phase 5 (Units 13-15)
Implement word-by-word translations for reading exercises in units 13 to 15.

- [x] Audit and update Unit 13 (verified, already compliant).
- [x] Audit and update Unit 14 (verified, already compliant).
- [x] Audit and update Unit 15 (updated e53-e60 and fixed syntax error).
- [x] Manual verification (Units 13, 14, 15 verified via preview).

---

### [x] Step: Phase 6 (Units 16-18)
Implement word-by-word translations for reading exercises in units 16 to 18.

- [x] Audit and update Unit 16.
- [x] Audit and update Unit 17.
- [x] Audit and update Unit 18.
- [x] Manual verification.

---

### [x] Step: Phase 7 (Units 19-21)
Implement word-by-word translations for reading exercises in units 19 to 21.

- [x] Audit and update Unit 19.
- [x] Audit and update Unit 20.
- [x] Audit and update Unit 21.
- [x] Manual verification.

---

### [ ] Step: Report
After completion, write a report to `/Users/lidia/Documents/focusonenglish/focusonenglish/.zencoder/chats/8ced71ff-e89f-4503-86e0-b7d704d9099d/report.md`.
