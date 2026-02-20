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

### [x] Step: Phase 8 (Units 22-24)
Implement word-by-word translations for reading exercises in units 22 to 24.

- [x] Audit and update Unit 22.
- [x] Audit and update Unit 23.
- [x] Audit and update Unit 24.
- [x] Manual verification (Fixed renderer bug using tagged text).

---

### [x] Step: Phase 9 (Units 25-27)
Implement word-by-word translations for reading exercises in units 25 to 27.

- [x] Audit and update Unit 25.
- [x] Audit and update Unit 26.
- [x] Audit and update Unit 27.
- [x] Manual verification (Confirmed working with renderer fix).

---

### [x] Step: Phase 10 (Units 28-30)
Implement word-by-word translations for reading exercises in units 28 to 30.

- [x] Audit and update Unit 28.
- [x] Audit and update Unit 29.
- [x] Audit and update Unit 30.
- [x] Manual verification (Re-audited Units 20-30 to ensure explicit tagging for all words).

---

### [x] Step: Phase 11 (Units 31-33)
Implement word-by-word translations for reading exercises in units 31 to 33.

- [x] Audit and update Unit 31.
- [x] Audit and update Unit 32.
- [x] Audit and update Unit 33.
- [x] Manual verification (Word-by-word applied to texts, questions, and options).

---

### [x] Step: Phase 12 (Units 34-36)
Implement word-by-word translations for reading exercises in units 34 to 36.

- [x] Audit and update Unit 34.
- [x] Audit and update Unit 35.
- [x] Audit and update Unit 36.
- [x] Manual verification (Fixed bracket visibility issue in Renderer and TranslatedText).

---

### [x] Step: Phase 13 (Units 37-39)
Implement word-by-word translations for reading exercises in units 37 to 39.

- [x] Audit and update Unit 37.
- [x] Audit and update Unit 38.
- [x] Audit and update Unit 39.
- [x] Manual verification.

---

### [x] Step: Phase 14 (Units 40-42)
Implement word-by-word translations for reading exercises in units 40 to 42.

- [x] Audit and update Unit 40.
- [x] Audit and update Unit 41.
- [x] Audit and update Unit 42.
- [x] Manual verification.

---

### [x] Step: Phase 15 (Units 43-45)
Implement word-by-word translations for reading exercises in units 43 to 45.

- [x] Audit and update Unit 43.
- [x] Audit and update Unit 44.
- [x] Audit and update Unit 45.
- [x] Manual verification.

---

### [x] Step: Phase 16 (Units 46-48)
Implement word-by-word translations for reading exercises in units 46 to 48.

- [x] Audit and update Unit 46.
- [x] Audit and update Unit 47.
- [x] Audit and update Unit 48.
- [x] Manual verification.

---

### [x] Step: Phase 17 (Units 49-51)
Implement word-by-word translations for reading exercises in units 49 to 51.

- [x] Audit and update Unit 49.
- [x] Audit and update Unit 50.
- [x] Audit and update Unit 51.
- [x] Manual verification.

---

### [x] Step: Phase 18 (Units 52-54)
Implement word-by-word translations for reading exercises in units 52 to 54.

- [x] Audit and update Unit 52.
- [x] Audit and update Unit 53.
- [x] Audit and update Unit 54.
- [x] Manual verification.

---

### [ ] Step: Phase 19 (Units 55-57)
Implement word-by-word translations for reading exercises in units 55 to 57.

- [ ] Audit and update Unit 55.
- [ ] Audit and update Unit 56.
- [ ] Audit and update Unit 57.
- [ ] Manual verification.

---

### [ ] Step: Phase 20 (Units 58-60)
Implement word-by-word translations for reading exercises in units 58 to 60.

- [ ] Audit and update Unit 58.
- [ ] Audit and update Unit 59.
- [ ] Audit and update Unit 60.
- [ ] Manual verification.

---

### [ ] Step: Report
After completion, write a report to `/Users/lidia/Documents/focusonenglish/focusonenglish/.zencoder/chats/8ced71ff-e89f-4503-86e0-b7d704d9099d/report.md`.
