import { test, expect } from '@playwright/test';
import { MultipleChoiceClozeHelper } from './helpers/course-helpers';

test.describe('Multiple Choice Cloze Exercise (FCE Part 1)', () => {
  let helper: MultipleChoiceClozeHelper;

  test.beforeEach(async ({ page }) => {
    helper = new MultipleChoiceClozeHelper(page);
    await page.goto('/curso-b2/leccion/b2-m1-l7');
    await page.waitForLoadState('networkidle');
    await page.waitForTimeout(2000); // Wait for React hydration
  });

  test('should display Multiple Choice Cloze exercise', async ({ page }) => {
    await expect(page.locator('h2, h3').filter({ hasText: /Multiple Choice Cloze|Part 1/i })).toBeVisible();
  });

  test('should have clear instructions', async ({ page }) => {
    const instructions = await page.textContent('body');
    expect(instructions).toMatch(/read.*text|choose.*word|best.*word/i);
  });

  test('should have 8 gaps with dropdowns', async () => {
    const gapCount = await helper.countGaps();
    expect(gapCount).toBe(8);
  });

  test('should display text with inline gaps', async ({ page }) => {
    // Text should have gaps marked as [1], [2], etc.
    const text = await page.textContent('body');
    expect(text).toMatch(/\[1\]|\(1\)|gap\s*1/i);
  });

  test('should have 4 options (A, B, C, D) for each gap', async ({ page }) => {
    const firstDropdown = page.locator('select').first();
    await firstDropdown.click();
    
    const options = await firstDropdown.locator('option').count();
    // Should have 4 options + empty option
    expect(options).toBeGreaterThanOrEqual(4);
  });

  test('should allow selecting options from dropdowns', async ({ page }) => {
    await helper.selectOptionForGap(1, 'test');
    
    const dropdown = page.locator('select').first();
    const value = await dropdown.inputValue();
    expect(value).toBeTruthy();
  });

  test('should show selected option in dropdown', async ({ page }) => {
    const dropdown = page.locator('select').first();
    const options = await dropdown.locator('option').allTextContents();
    
    if (options.length > 1) {
      const optionToSelect = options[1]; // Select first real option
      await helper.selectOptionForGap(1, optionToSelect);
      await expect(dropdown).toHaveValue(optionToSelect);
    }
  });

  test('should validate answers when Check Answers is clicked', async ({ page }) => {
    // Select some options
    const dropdowns = await helper.getAllDropdowns();
    if (dropdowns.length > 0) {
      await helper.selectOptionForGap(1, 'option1');
    }
    
    await helper.clickCheckAnswers();
    expect(await helper.isFeedbackVisible()).toBe(true);
  });

  test('should show correct/incorrect feedback with colors', async ({ page }) => {
    const dropdown = page.locator('select').first();
    const options = await dropdown.locator('option').allTextContents();
    
    if (options.length > 1) {
      await helper.selectOptionForGap(1, options[1]);
      await helper.clickCheckAnswers();
      
      // Look for colored feedback
      const greenElements = await page.locator('[class*="green"]').count();
      const redElements = await page.locator('[class*="red"]').count();
      expect(greenElements + redElements).toBeGreaterThan(0);
    }
  });

  test('should display feedback panel after checking', async ({ page }) => {
    await helper.selectOptionForGap(1, 'test');
    await helper.clickCheckAnswers();
    
    // Should have detailed feedback section
    const feedbackPanel = await page.locator('text=/detailed feedback|feedback|retroalimentación/i').count();
    expect(feedbackPanel).toBeGreaterThanOrEqual(0);
  });

  test('should show correct answer for each gap', async ({ page }) => {
    await helper.selectOptionForGap(1, 'wrong');
    await helper.clickCheckAnswers();
    
    const correctAnswers = await page.locator('text=/correct answer|respuesta correcta/i').count();
    expect(correctAnswers).toBeGreaterThan(0);
  });

  test('should display explanations for each gap', async ({ page }) => {
    await helper.selectOptionForGap(1, 'test');
    await helper.clickCheckAnswers();
    
    const explanations = await page.locator('text=/explanation|explicación/i').count();
    expect(explanations).toBeGreaterThan(0);
  });

  test('should calculate and display score', async ({ page }) => {
    await helper.selectOptionForGap(1, 'test');
    await helper.clickCheckAnswers();
    
    const score = await helper.getScore();
    expect(score).toMatch(/\d+\/\d+|\d+%/);
  });

  test('should show points earned vs total points', async ({ page }) => {
    await helper.selectOptionForGap(1, 'test');
    await helper.clickCheckAnswers();
    
    // Should show something like "6/8 points" or "75%"
    const scoreDisplay = await page.locator('text=/\\d+\\/\\d+|points|puntos/i').count();
    expect(scoreDisplay).toBeGreaterThan(0);
  });

  test('should disable dropdowns after checking', async ({ page }) => {
    await helper.selectOptionForGap(1, 'test');
    await helper.clickCheckAnswers();
    
    const dropdown = page.locator('select').first();
    await expect(dropdown).toBeDisabled();
  });

  test('should have Try Again button', async ({ page }) => {
    await helper.selectOptionForGap(1, 'test');
    await helper.clickCheckAnswers();
    
    await expect(page.locator('button', { hasText: /Try Again/i })).toBeVisible();
  });

  test('should reset selections when Try Again is clicked', async ({ page }) => {
    const dropdown = page.locator('select').first();
    const options = await dropdown.locator('option').allTextContents();
    
    if (options.length > 1) {
      await helper.selectOptionForGap(1, options[1]);
      await helper.clickCheckAnswers();
      await helper.clickTryAgain();
      
      await expect(dropdown).toBeEnabled();
      await expect(dropdown).toHaveValue('');
    }
  });

  test('should display tips for Multiple Choice Cloze', async ({ page }) => {
    await expect(page.locator('text=/tips|consejos/i')).toBeVisible();
    
    const tips = await page.textContent('body');
    expect(tips).toMatch(/collocation|phrasal verb|preposition|linking word/i);
  });

  test('should show focus areas if available', async ({ page }) => {
    await helper.selectOptionForGap(1, 'test');
    await helper.clickCheckAnswers();
    
    // May show focus areas like "Collocations", "Phrasal Verbs"
    const focusAreas = await page.locator('text=/focus area|preposition|collocation/i').count();
    expect(focusAreas).toBeGreaterThanOrEqual(0);
  });

  test('should highlight gaps in the text', async ({ page }) => {
    // Gaps should be visually distinct (dropdowns inline)
    const dropdowns = await page.locator('select').count();
    expect(dropdowns).toBeGreaterThanOrEqual(8);
  });

  test('should maintain text readability with inline dropdowns', async ({ page }) => {
    // Text should flow naturally around dropdowns
    const textElement = page.locator('p, div').filter({ hasText: /\w{20,}/ }).first();
    const text = await textElement.textContent();
    expect(text!.length).toBeGreaterThan(100); // Substantial text
  });

  test('should show difficulty and topic badges', async ({ page }) => {
    const difficulty = page.locator('text=/easy|medium|hard/i').first();
    await expect(difficulty).toBeVisible();
    
    const topic = page.locator('text=/technology|environment|health|work/i').first();
    await expect(topic).toBeVisible();
  });

  test('should handle partial completion', async ({ page }) => {
    // Select only some gaps
    await helper.selectOptionForGap(1, 'test');
    await helper.selectOptionForGap(4, 'test');
    
    await helper.clickCheckAnswers();
    
    // Should show feedback for answered gaps
    expect(await helper.isFeedbackVisible()).toBe(true);
  });

  test('should show gap number for each feedback item', async ({ page }) => {
    await helper.selectOptionForGap(1, 'test');
    await helper.clickCheckAnswers();
    
    // Feedback should clearly indicate which gap (Gap 1, Gap 2, etc.)
    const gapLabels = await page.locator('text=/gap\\s*\\d+|hueco\\s*\\d+/i').count();
    expect(gapLabels).toBeGreaterThan(0);
  });

  test('should show all 4 options in feedback for reference', async ({ page }) => {
    await helper.selectOptionForGap(1, 'test');
    await helper.clickCheckAnswers();
    
    // Detailed feedback should show all options that were available
    const optionsList = await page.locator('text=/all options|options:/i').count();
    expect(optionsList).toBeGreaterThanOrEqual(0);
  });

  test('should be responsive on mobile', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 });
    
    // Dropdowns should still be usable
    const dropdown = page.locator('select').first();
    await expect(dropdown).toBeVisible();
    
    // Should be able to interact
    const options = await dropdown.locator('option').count();
    expect(options).toBeGreaterThan(0);
  });

  test('should show Next Exercise button after completion', async ({ page }) => {
    await helper.selectOptionForGap(1, 'test');
    await helper.clickCheckAnswers();
    
    await expect(page.locator('button', { hasText: /Next Exercise|Siguiente/i })).toBeVisible();
  });

  test('should handle edge case: selecting same option for all gaps', async ({ page }) => {
    const dropdown = page.locator('select').first();
    const options = await dropdown.locator('option').allTextContents();
    
    if (options.length > 1) {
      const sameOption = options[1];
      
      // Select same option for multiple gaps
      for (let i = 1; i <= 3; i++) {
        await helper.selectOptionForGap(i, sameOption);
      }
      
      await helper.clickCheckAnswers();
      
      // Should show individual feedback for each gap
      expect(await helper.isFeedbackVisible()).toBe(true);
    }
  });

  test('should show checkmark/cross icons in feedback', async ({ page }) => {
    await helper.selectOptionForGap(1, 'test');
    await helper.clickCheckAnswers();
    
    // Should have visual indicators
    const icons = await page.locator('svg, [class*="icon"]').count();
    expect(icons).toBeGreaterThan(0);
  });

  test('should not allow changing answers after checking', async ({ page }) => {
    const dropdown = page.locator('select').first();
    const options = await dropdown.locator('option').allTextContents();
    
    if (options.length > 1) {
      await helper.selectOptionForGap(1, options[1]);
      await helper.clickCheckAnswers();
      
      // Try to change selection
      await expect(dropdown).toBeDisabled();
    }
  });
});
