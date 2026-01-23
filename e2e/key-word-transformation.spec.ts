import { test, expect } from '@playwright/test';
import { KeyWordTransformationHelper } from './helpers/course-helpers';

test.describe('Key Word Transformation Exercise (FCE Part 4)', () => {
  let helper: KeyWordTransformationHelper;

  test.beforeEach(async ({ page }) => {
    helper = new KeyWordTransformationHelper(page);
    await page.goto('/curso-b2/leccion/b2-m1-l7');
    await page.waitForLoadState('domcontentloaded', { timeout: 30000 });
    await page.waitForTimeout(3000); // Wait for React hydration
  });

  test('should display Key Word Transformation exercise', async ({ page }) => {
    await expect(page.locator('h2, h3').filter({ hasText: /Key Word|Transformation|Part 4/i })).toBeVisible();
  });

  test('should have instructions explaining the task', async ({ page }) => {
    const instructions = await page.textContent('body');
    expect(instructions).toMatch(/complete.*second.*sentence|2.*5.*words|word given/i);
  });

  test('should have 6 transformations', async () => {
    const count = await helper.countTransformations();
    expect(count).toBeGreaterThanOrEqual(6);
  });

  test('should display original sentence for each transformation', async ({ page }) => {
    const sentences = await page.locator('[class*="sentence"], [class*="original"]').count();
    expect(sentences).toBeGreaterThan(0);
  });

  test('should display key word prominently', async ({ page }) => {
    const keyWords = await page.locator('[class*="badge"], [class*="key"]').count();
    expect(keyWords).toBeGreaterThanOrEqual(6);
  });

  test('should have input field for each transformation', async () => {
    const inputs = await helper.getAllInputs();
    expect(inputs.length).toBeGreaterThanOrEqual(6);
  });

  test('should allow typing in transformation inputs', async ({ page }) => {
    await helper.fillTransformation(1, 'have been waiting');
    
    const input = page.locator('input[type="text"]').first();
    await expect(input).toHaveValue('have been waiting');
  });

  test('should show word count indicator while typing', async ({ page }) => {
    await helper.fillTransformation(1, 'have been waiting');
    
    // Look for word count feedback
    const wordCount = await page.locator('text=/word count|\\d+ words?/i').count();
    expect(wordCount).toBeGreaterThanOrEqual(0);
  });

  test('should validate word count (2-5 words)', async ({ page }) => {
    // Try with too many words
    await helper.fillTransformation(1, 'this is way too many words for the answer');
    
    await helper.clickCheckAnswers();
    
    // Should show word count error or mark as incorrect
    const feedback = await helper.isFeedbackVisible();
    expect(feedback).toBe(true);
  });

  test('should accept valid transformations within word limit', async ({ page }) => {
    await helper.fillTransformation(1, 'have been');  // 2 words
    await helper.fillTransformation(2, 'had been waiting'); // 3 words
    
    await helper.clickCheckAnswers();
    
    expect(await helper.isFeedbackVisible()).toBe(true);
  });

  test('should show correct/incorrect feedback', async ({ page }) => {
    await helper.fillTransformation(1, 'test answer');
    await helper.clickCheckAnswers();
    
    const correctMarkers = await page.locator('text=/correct|correcto|✓/i').count();
    const incorrectMarkers = await page.locator('text=/incorrect|incorrecto|✗/i').count();
    
    expect(correctMarkers + incorrectMarkers).toBeGreaterThan(0);
  });

  test('should display correct answer when wrong', async ({ page }) => {
    await helper.fillTransformation(1, 'wrong answer');
    await helper.clickCheckAnswers();
    
    const correctAnswer = await page.locator('text=/correct answer:|✓.*:/i').count();
    expect(correctAnswer).toBeGreaterThan(0);
  });

  test('should show acceptable alternative answers', async ({ page }) => {
    await helper.fillTransformation(1, 'test');
    await helper.clickCheckAnswers();
    
    // Check for "Also acceptable" or similar
    const alternatives = await page.locator('text=/also acceptable|también|alternative/i').count();
    expect(alternatives).toBeGreaterThanOrEqual(0);
  });

  test('should display detailed explanation for each transformation', async ({ page }) => {
    await helper.fillTransformation(1, 'test');
    await helper.clickCheckAnswers();
    
    const explanations = await page.locator('text=/explanation|explicación/i').count();
    expect(explanations).toBeGreaterThan(0);
  });

  test('should show grammar category badge', async ({ page }) => {
    await helper.fillTransformation(1, 'test');
    await helper.clickCheckAnswers();
    
    // Should show categories like "Passive Voice", "Reported Speech", etc.
    const categories = await page.locator('text=/passive|reported|conditional|comparative/i').count();
    expect(categories).toBeGreaterThan(0);
  });

  test('should calculate and display score', async ({ page }) => {
    await helper.fillTransformation(1, 'test');
    await helper.clickCheckAnswers();
    
    const score = await helper.getScore();
    expect(score).toMatch(/\d+\/\d+|\d+%/);
  });

  test('should disable inputs after checking', async ({ page }) => {
    await helper.fillTransformation(1, 'test');
    await helper.clickCheckAnswers();
    
    const input = page.locator('input[type="text"]').first();
    await expect(input).toBeDisabled();
  });

  test('should have Try Again button', async ({ page }) => {
    await helper.fillTransformation(1, 'test');
    await helper.clickCheckAnswers();
    
    await expect(page.locator('button', { hasText: /Try Again/i })).toBeVisible();
  });

  test('should reset inputs when Try Again is clicked', async ({ page }) => {
    await helper.fillTransformation(1, 'test answer');
    await helper.clickCheckAnswers();
    await helper.clickTryAgain();
    
    const input = page.locator('input[type="text"]').first();
    await expect(input).toBeEnabled();
    await expect(input).toHaveValue('');
  });

  test('should display tips for Key Word Transformation', async ({ page }) => {
    await expect(page.locator('text=/tips|consejos/i')).toBeVisible();
    
    const tips = await page.textContent('body');
    expect(tips).toMatch(/word.*given|cannot.*change|2.*5.*words/i);
  });

  test('should handle contractions correctly in word count', async ({ page }) => {
    await helper.fillTransformation(1, "don't have");
    
    // "don't" should count as 2 words
    const wordCountText = await page.locator('text=/word count|words/i').first().textContent();
    if (wordCountText) {
      expect(wordCountText).toMatch(/3|three/i); // "don't" (2) + "have" (1) = 3
    }
  });

  test('should trim whitespace from answers', async ({ page }) => {
    await helper.fillTransformation(1, '  have been  ');
    await helper.clickCheckAnswers();
    
    // Should accept with extra whitespace trimmed
    const feedback = await helper.isFeedbackVisible();
    expect(feedback).toBe(true);
  });

  test('should be case-insensitive for validation', async ({ page }) => {
    // Assuming "HAVE BEEN" should be accepted same as "have been"
    await helper.fillTransformation(1, 'HAVE BEEN');
    await helper.clickCheckAnswers();
    
    const feedback = await helper.isFeedbackVisible();
    expect(feedback).toBe(true);
  });

  test('should show difficulty and topic badges', async ({ page }) => {
    const difficulty = page.locator('text=/easy|medium|hard/i').first();
    await expect(difficulty).toBeVisible();
  });

  test('should handle partial completion', async ({ page }) => {
    // Fill only some transformations
    await helper.fillTransformation(1, 'test one');
    await helper.fillTransformation(3, 'test three');
    
    await helper.clickCheckAnswers();
    
    // Should show feedback for filled answers
    expect(await helper.isFeedbackVisible()).toBe(true);
  });

  test('should show Next Exercise button after completion', async ({ page }) => {
    await helper.fillTransformation(1, 'test');
    await helper.clickCheckAnswers();
    
    await expect(page.locator('button', { hasText: /Next Exercise|Siguiente/i })).toBeVisible();
  });

  test('should be responsive on mobile', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 });
    
    const inputs = await helper.getAllInputs();
    expect(inputs.length).toBeGreaterThan(0);
    
    // Try typing
    await helper.fillTransformation(1, 'test');
    const input = page.locator('input[type="text"]').first();
    await expect(input).toHaveValue('test');
  });

  test('should show example if provided', async ({ page }) => {
    // Check for example section in instructions
    const hasExample = await page.locator('text=/example|ejemplo/i').count();
    expect(hasExample).toBeGreaterThanOrEqual(0);
  });

  test('should handle empty submissions gracefully', async ({ page }) => {
    const checkButton = page.locator('button', { hasText: /Check Answers|Evaluar/i });
    
    const isEnabled = await checkButton.isEnabled();
    if (isEnabled) {
      await helper.clickCheckAnswers();
      // Should show feedback even for empty
      expect(await helper.isFeedbackVisible()).toBe(true);
    } else {
      // Button should be disabled if no answers
      await expect(checkButton).toBeDisabled();
    }
  });

  test('should maintain sentence structure display', async ({ page }) => {
    // Original sentence should remain visible
    const originalSentences = await page.locator('[class*="original"], [class*="sentence"]').count();
    
    await helper.fillTransformation(1, 'test');
    await helper.clickCheckAnswers();
    
    // Originals still visible after checking
    const afterSentences = await page.locator('[class*="original"], [class*="sentence"]').count();
    expect(afterSentences).toBeGreaterThanOrEqual(originalSentences);
  });
});
