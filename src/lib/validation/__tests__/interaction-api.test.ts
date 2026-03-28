import { validateInteractionForApi } from '../interaction-api';

describe('validateInteractionForApi', () => {
  it('acepta multiple_choice mínimo alineado con InteractionSchema', () => {
    const r = validateInteractionForApi({
      interaction_id: 'test-mc-1',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: 'Option A' },
        { id: 'b', text: 'Option B' },
      ],
      correct_answer: 'a',
    });
    expect(r.ok).toBe(true);
    expect(r.issues).toHaveLength(0);
  });

  it('rechaza si falta correct_answer en multiple_choice', () => {
    const r = validateInteractionForApi({
      interaction_id: 'x',
      type: 'multiple_choice',
      options: [{ id: 'a', text: 'A' }],
    });
    expect(r.ok).toBe(false);
    expect(r.issues.length).toBeGreaterThan(0);
  });
});
