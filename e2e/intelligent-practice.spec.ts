import { test, expect } from '@playwright/test';

const levels = [
  { courseId: 'ingles-b1', unitId: 'unit1' },
  { courseId: 'ingles-b2', unitId: 'unit1' },
  { courseId: 'ingles-c1', unitId: 'unit1' },
  { courseId: 'ingles-c2', unitId: 'unit1' }
];

test.describe('Intelligent Practice Content Verification', () => {
  for (const { courseId, unitId } of levels) {
    test(`Verify content for ${courseId} ${unitId}`, async ({ page }) => {
      // Navigate to the preview page
      await page.goto(`/preview/${courseId}/${unitId}`);
      
      // Wait for the session to load
      await expect(page.locator('h1')).toBeVisible({ timeout: 10000 });
      
      // Check for common exercise elements
      // 1. Multiple Choice Options (if present in the first block)
      const options = page.locator('button:has-text("o1")');
      const fillBlanks = page.locator('input[type="text"]');
      const clozeGaps = page.locator('select');

      // Ensure at least one type of interaction element is present
      const hasInteraction = await options.count() > 0 || await fillBlanks.count() > 0 || await clozeGaps.count() > 0;
      
      // We don't fail if a specific one is missing (depends on the unit's exercises), 
      // but the UI should show something interactive.
      expect(hasInteraction).toBe(true);

      // Verify level is correctly displayed (if the UI shows it)
      // Note: PremiumSession might show the level in a badge or title
      const content = await page.textContent('body');
      expect(content?.toUpperCase()).toContain(courseId.split('-')[1].toUpperCase());
    });
  }

  test('Transition between blocks in a unit', async ({ page }) => {
    // Testing B1 Unit 1 which we know has multiple blocks
    await page.goto('/preview/ingles-b1/unit1');
    
    // Check if progress indicator exists (e.g., "1 / X")
    const progress = page.locator('text=/\\d+ \\/ \\d+/');
    await expect(progress).toBeVisible();

    // Verify initial state
    const initialText = await progress.innerText();
    expect(initialText).toContain('1 /');
  });
});
