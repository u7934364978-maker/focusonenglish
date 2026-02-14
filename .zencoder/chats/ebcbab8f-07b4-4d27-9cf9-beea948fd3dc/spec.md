# Technical Specification - C1 Unit 12 Content Update

## Context
- **Language**: TypeScript
- **Framework**: Next.js 15
- **File**: `src/lib/c1-units/unit-12.ts`

## Implementation Approach
1. **Option Shuffling**: Distribute correct answers across indices 0, 1, and 2 for all multiple-choice questions.
2. **Grammar Diversification**: 
   - Update `options` in `C1_U12_BLOCK1` and `C1_U12_BLOCK4` to include more verbal tenses (e.g., instead of just 'will', use 'have been', 'would have', etc. when contextually plausible as a distractor).
   - Ensure that for each grammar point, the student must distinguish between similar-looking but grammatically distinct options.

## Specific Changes for Unit 12

### Block 1
- **Q1**: Options: `['will', 'could', 'must']`, Correct: `could`
- **Q2**: Options: `['has', 'is', 'appears']`, Correct: `appears`
- **Q3**: Options: `['will', 'do', 'would']`, Correct: `would`
- ... (and so on)

### Block 4 (Grammar Focus)
- Enhance distractors to include different tenses.
- Example Q5: `"That ___ be feasible..."` -> Options: `['won't have been', 'might not', 'cannot']`

## Verification
- Manual code review of the modified TypeScript file.
- `npm run lint` to ensure no syntax errors.
