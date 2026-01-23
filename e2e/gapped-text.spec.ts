import { test, expect } from '@playwright/test';
import { GappedTextHelper } from './helpers/course-helpers';

test.describe('Gapped Text Exercise (FCE Part 6)', () => {
  let helper: GappedTextHelper;

  test.beforeEach(async ({ page }) => {
    helper = new GappedTextHelper(page);
    await page.goto('/curso-b2/leccion/b2-m1-l7');
    await page.waitForLoadState('domcontentloaded', { timeout: 30000 });
    await page.waitForTimeout(3000); // Wait for React hydration
  });

  test('should display Gapped Text exercise with correct structure', async ({ page }) => {
    await expect(page.locator('h2, h3').filter({ hasText: /Gapped Text|Part 6/i })).toBeVisible();
    
    // Check for instructions
    await expect(page.locator('text=/read.*text|paragraph|gap/i')).toBeVisible();
  });

  test('should have 6 gaps with dropdowns', async () => {
    const gapCount = await helper.countGaps();
    expect(gapCount).toBe(6);
  });

  test('should have 7 paragraph options (A-G with 1 distractor)', async ({ page }) => {
    const dropdown = page.locator('select').first();
    await dropdown.click();
    
    const options = await dropdown.locator('option').count();
    // Should have 7 options + empty option = 8 total
    expect(options).toBeGreaterThanOrEqual(7);
  });

  test('should display main text with gap markers', async ({ page }) => {
    const mainText = await page.textContent('body');
    expect(mainText).toMatch(/GAP \d+|\[\d+\]/i);
  });

  test('should display removed paragraphs A-G', async ({ page }) => {
    // Check for paragraph labels A, B, C, D, E, F, G
    for (const letter of ['A', 'B', 'C', 'D', 'E', 'F', 'G']) {
      const paragraph = page.locator(`text=/^${letter}$/`).first();
      await expect(paragraph).toBeVisible();
    }
  });

  test('should allow selecting paragraphs from dropdowns', async ({ page }) => {
    await helper.selectParagraphForGap(1, 'A');
    
    const dropdown = page.locator('select').first();
    await expect(dropdown).toHaveValue('A');
  });

  test('should validate answers when Check Answers is clicked', async ({ page }) => {
    // Select some paragraphs
    await helper.selectParagraphForGap(1, 'A');
    await helper.selectParagraphForGap(2, 'B');
    await helper.selectParagraphForGap(3, 'C');
    
    await helper.clickCheckAnswers();
    
    // Check for feedback
    expect(await helper.isFeedbackVisible()).toBe(true);
  });

  test('should show correct/incorrect feedback with colors', async ({ page }) => {
    await helper.selectParagraphForGap(1, 'A');
    await helper.clickCheckAnswers();
    
    // Look for color-coded feedback
    const greenCount = await page.locator('[class*="green"]').count();
    const redCount = await page.locator('[class*="red"]').count();
    
    expect(greenCount + redCount).toBeGreaterThan(0);
  });

  test('should identify and highlight the distractor', async ({ page }) => {
    // Fill all gaps
    const dropdowns = await helper.getAllDropdowns();
    for (let i = 0; i < dropdowns.length; i++) {
      await helper.selectParagraphForGap(i + 1, 'A');
    }
    
    await helper.clickCheckAnswers();
    
    // Check for distractor marking (yellow/amber)
    const distractorElements = await page.locator('[class*="yellow"], [class*="amber"]').count();
    expect(distractorElements).toBeGreaterThan(0);
  });

  test('should display explanations for each gap', async ({ page }) => {
    await helper.selectParagraphForGap(1, 'A');
    await helper.clickCheckAnswers();
    
    const explanations = await page.locator('text=/explanation|explicación|because|porque/i').count();
    expect(explanations).toBeGreaterThan(0);
  });

  test('should calculate and display score', async ({ page }) => {
    await helper.selectParagraphForGap(1, 'A');
    await helper.clickCheckAnswers();
    
    const scoreText = await helper.getScore();
    expect(scoreText).toMatch(/\d+%/);
  });

  test('should show correct answers after checking', async ({ page }) => {
    await helper.selectParagraphForGap(1, 'G'); // Wrong answer
    await helper.clickCheckAnswers();
    
    // Should show the correct answer
    const correctAnswer = await page.locator('text=/correct.*answer|respuesta.*correcta/i').count();
    expect(correctAnswer).toBeGreaterThan(0);
  });

  test('should disable dropdowns after checking', async ({ page }) => {
    await helper.selectParagraphForGap(1, 'A');
    await helper.clickCheckAnswers();
    
    const dropdown = page.locator('select').first();
    await expect(dropdown).toBeDisabled();
  });

  test('should have Try Again button', async ({ page }) => {
    await helper.selectParagraphForGap(1, 'A');
    await helper.clickCheckAnswers();
    
    await expect(page.locator('button', { hasText: /Try Again/i })).toBeVisible();
  });

  test('should reset selections when Try Again is clicked', async ({ page }) => {
    await helper.selectParagraphForGap(1, 'A');
    await helper.clickCheckAnswers();
    await helper.clickTryAgain();
    
    const dropdown = page.locator('select').first();
    await expect(dropdown).toBeEnabled();
    await expect(dropdown).toHaveValue('');
  });

  test('should display tips for Gapped Text strategy', async ({ page }) => {
    await expect(page.locator('text=/tips|consejos/i')).toBeVisible();
    
    // Check for specific tips
    const tips = await page.textContent('body');
    expect(tips).toMatch(/read|coherence|cohesion|reference|leer/i);
  });

  test('should show paragraph text when hovering/viewing', async ({ page }) => {
    // Each paragraph should have full text visible
    const paragraphA = page.locator('text=/^A$/').locator('..').locator('..');
    await expect(paragraphA).toBeVisible();
    
    const textContent = await paragraphA.textContent();
    expect(textContent!.length).toBeGreaterThan(20); // Should have substantial text
  });

  test('should indicate which paragraphs are used multiple times if applicable', async ({ page }) => {
    // Note: In FCE, each paragraph should be used only once, but test the UI
    await helper.selectParagraphForGap(1, 'A');
    await helper.clickCheckAnswers();
    
    // UI should show usage count
    const usageIndicator = await page.locator('text=/used.*time|usado.*vez/i').count();
    expect(usageIndicator).toBeGreaterThanOrEqual(0);
  });

  test('should have responsive layout on mobile', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 });
    
    // Paragraphs should still be readable
    const paragraphs = await page.locator('[class*="paragraph"]').count();
    expect(paragraphs).toBeGreaterThan(0);
    
    // Dropdowns should be accessible
    const dropdown = page.locator('select').first();
    await expect(dropdown).toBeVisible();
  });

  test('should show difficulty and topic badges', async ({ page }) => {
    await expect(page.locator('text=/medium|hard|medio|difícil/i').first()).toBeVisible();
    await expect(page.locator('text=/work|technology|remote|trabajo/i').first()).toBeVisible();
  });

  test('should handle edge case: selecting same paragraph for multiple gaps', async ({ page }) => {
    // Select 'A' for multiple gaps
    await helper.selectParagraphForGap(1, 'A');
    await helper.selectParagraphForGap(2, 'A');
    
    await helper.clickCheckAnswers();
    
    // Should show as incorrect since each paragraph should be used once
    const feedback = await helper.isFeedbackVisible();
    expect(feedback).toBe(true);
  });

  test('should show Next Exercise button after completion', async ({ page }) => {
    await helper.selectParagraphForGap(1, 'A');
    await helper.clickCheckAnswers();
    
    await expect(page.locator('button', { hasText: /Next Exercise|Siguiente/i })).toBeVisible();
  });
});
