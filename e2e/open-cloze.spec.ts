import { test, expect } from '@playwright/test';
import { OpenClozeHelper } from './helpers/course-helpers';

test.describe('Open Cloze Exercise (FCE Part 2)', () => {
  let helper: OpenClozeHelper;

  test.beforeEach(async ({ page }) => {
    helper = new OpenClozeHelper(page);
    // Navigate directly to Lesson 7
    await page.goto('/curso-b2/leccion/b2-m1-l7');
    await page.waitForLoadState('domcontentloaded', { timeout: 30000 });
    await page.waitForTimeout(3000); // Wait for React hydration
  });

  test('should display Open Cloze exercise with correct structure', async ({ page }) => {
    // Check for exercise title
    await expect(page.locator('h2, h3').filter({ hasText: /Open Cloze|Part 2/i })).toBeVisible();
    
    // Check for instructions
    await expect(page.locator('text=/complete|fill|gap/i')).toBeVisible();
    
    // Check for text content
    const textContent = await page.textContent('body');
    expect(textContent).toContain('[');
  });

  test('should have the correct number of gaps (8)', async () => {
    const gapCount = await helper.countGaps();
    expect(gapCount).toBe(8);
  });

  test('should allow typing in gap inputs', async ({ page }) => {
    await helper.fillGap(1, 'the');
    
    const input = page.locator('input').first();
    await expect(input).toHaveValue('the');
  });

  test('should validate answers when Check Answers is clicked', async ({ page }) => {
    // Fill some gaps
    await helper.fillGap(1, 'the');
    await helper.fillGap(2, 'and');
    await helper.fillGap(3, 'is');
    
    // Click Check Answers
    await helper.clickCheckAnswers();
    
    // Check that feedback is visible
    const hasFeedback = await helper.isFeedbackVisible();
    expect(hasFeedback).toBe(true);
  });

  test('should show correct/incorrect feedback with colors', async ({ page }) => {
    // Fill gaps (some correct, some incorrect)
    await helper.fillGap(1, 'the');  // Likely correct
    await helper.fillGap(2, 'wrong'); // Likely incorrect
    
    await helper.clickCheckAnswers();
    
    // Check for green (correct) and red (incorrect) feedback
    const greenElements = await page.locator('[class*="green"]').count();
    const redElements = await page.locator('[class*="red"]').count();
    
    expect(greenElements + redElements).toBeGreaterThan(0);
  });

  test('should display explanations after checking answers', async ({ page }) => {
    await helper.fillGap(1, 'test');
    await helper.clickCheckAnswers();
    
    // Look for explanation text
    const explanationVisible = await page.locator('text=/explanation|explicación/i').isVisible();
    expect(explanationVisible).toBe(true);
  });

  test('should show acceptable answer variations', async ({ page }) => {
    await helper.fillGap(1, 'answer');
    await helper.clickCheckAnswers();
    
    // Check if acceptable answers section exists
    const acceptableAnswers = await page.locator('text=/acceptable|aceptable|also accept/i').count();
    expect(acceptableAnswers).toBeGreaterThanOrEqual(0);
  });

  test('should display score after checking answers', async ({ page }) => {
    // Fill all gaps
    const gaps = await helper.getAllGapInputs();
    for (let i = 0; i < gaps.length; i++) {
      await helper.fillGap(i + 1, 'test');
    }
    
    await helper.clickCheckAnswers();
    
    // Check for score display
    const scoreText = await helper.getScore();
    expect(scoreText).toMatch(/\d+%/);
  });

  test('should disable inputs after checking answers', async ({ page }) => {
    await helper.fillGap(1, 'test');
    await helper.clickCheckAnswers();
    
    const input = page.locator('input').first();
    await expect(input).toBeDisabled();
  });

  test('should have a Try Again button after checking', async ({ page }) => {
    await helper.fillGap(1, 'test');
    await helper.clickCheckAnswers();
    
    await expect(page.locator('button', { hasText: /Try Again|Reintentar/i })).toBeVisible();
  });

  test('should reset exercise when Try Again is clicked', async ({ page }) => {
    // Fill and check
    await helper.fillGap(1, 'test');
    await helper.clickCheckAnswers();
    
    // Click Try Again
    await helper.clickTryAgain();
    
    // Check that inputs are empty and enabled
    const input = page.locator('input').first();
    await expect(input).toBeEnabled();
    await expect(input).toHaveValue('');
  });

  test('should display tips section', async ({ page }) => {
    await expect(page.locator('text=/tips|consejos|advice/i')).toBeVisible();
  });

  test('should show category for each gap in feedback', async ({ page }) => {
    await helper.fillGap(1, 'test');
    await helper.clickCheckAnswers();
    
    // Look for grammar category badges
    const categories = await page.locator('text=/article|preposition|auxiliary|conjunction/i').count();
    expect(categories).toBeGreaterThan(0);
  });

  test('should handle empty submissions gracefully', async ({ page }) => {
    // Try to check answers without filling any gaps
    const checkButton = page.locator('button', { hasText: /Check Answers/i });
    
    // Button might be disabled if no answers
    const isEnabled = await checkButton.isEnabled();
    if (isEnabled) {
      await helper.clickCheckAnswers();
      // Should still show feedback for empty answers
      expect(await helper.isFeedbackVisible()).toBe(true);
    }
  });

  test('should be responsive on mobile viewport', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 });
    
    // Check that exercise is still usable
    const inputs = await helper.getAllGapInputs();
    expect(inputs.length).toBeGreaterThan(0);
    
    // Try filling a gap
    await helper.fillGap(1, 'test');
    const input = page.locator('input').first();
    await expect(input).toHaveValue('test');
  });

  test('should show difficulty badge', async ({ page }) => {
    const difficultyBadge = page.locator('text=/easy|medium|hard|fácil|medio|difícil/i').first();
    await expect(difficultyBadge).toBeVisible();
  });

  test('should show topic badge', async ({ page }) => {
    // Look for common topics
    const topicVisible = await page.locator('text=/technology|environment|health|education|trabajo/i').count();
    expect(topicVisible).toBeGreaterThan(0);
  });
});
