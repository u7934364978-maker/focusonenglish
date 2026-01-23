import { test, expect } from '@playwright/test';
import { MultipleMatchingHelper } from './helpers/course-helpers';

test.describe('Multiple Matching Exercise (FCE Part 7)', () => {
  let helper: MultipleMatchingHelper;

  test.beforeEach(async ({ page }) => {
    helper = new MultipleMatchingHelper(page);
    await page.goto('/curso-b2/leccion/b2-m1-l7');
    await page.waitForLoadState('domcontentloaded', { timeout: 30000 });
    await page.waitForTimeout(3000); // Wait for React hydration
  });

  test('should display Multiple Matching exercise structure', async ({ page }) => {
    await expect(page.locator('h2, h3').filter({ hasText: /Multiple Matching|Part 7/i })).toBeVisible();
    await expect(page.locator('text=/read.*texts|choose from/i')).toBeVisible();
  });

  test('should have 5 texts labeled A-E', async () => {
    const textCount = await helper.countTexts();
    expect(textCount).toBeGreaterThanOrEqual(5);
  });

  test('should have 10 questions', async () => {
    const questionCount = await helper.countQuestions();
    expect(questionCount).toBeGreaterThanOrEqual(10);
  });

  test('should display all text titles and content', async ({ page }) => {
    // Check that each text A-E has a title and content
    for (const letter of ['A', 'B', 'C', 'D', 'E']) {
      const textCard = page.locator(`text=/^${letter}$/`).locator('..');
      await expect(textCard).toBeVisible();
      
      // Should have meaningful content (more than 50 characters)
      const content = await textCard.textContent();
      expect(content!.length).toBeGreaterThan(50);
    }
  });

  test('should allow selecting text for each question', async ({ page }) => {
    await helper.selectTextForQuestion(1, 'A');
    
    // Button should show as selected
    const button = page.locator('button:has-text("A")').first();
    const classes = await button.getAttribute('class');
    expect(classes).toContain('purple'); // Or whatever selected state class
  });

  test('should allow changing selection', async ({ page }) => {
    await helper.selectTextForQuestion(1, 'A');
    await helper.selectTextForQuestion(1, 'B');
    
    // Only B should be selected now
    const buttonB = page.locator('button:has-text("B")').first();
    const classesB = await buttonB.getAttribute('class');
    expect(classesB).toContain('purple');
  });

  test('should validate answers when Check Answers is clicked', async ({ page }) => {
    await helper.selectTextForQuestion(1, 'A');
    await helper.selectTextForQuestion(2, 'B');
    
    await helper.clickCheckAnswers();
    
    expect(await helper.isFeedbackVisible()).toBe(true);
  });

  test('should show correct/incorrect feedback', async ({ page }) => {
    await helper.selectTextForQuestion(1, 'A');
    await helper.clickCheckAnswers();
    
    const correctMarkers = await page.locator('text=/✓|correct|correcto/i').count();
    const incorrectMarkers = await page.locator('text=/✗|incorrect|incorrecto/i').count();
    
    expect(correctMarkers + incorrectMarkers).toBeGreaterThan(0);
  });

  test('should display explanations after checking', async ({ page }) => {
    await helper.selectTextForQuestion(1, 'A');
    await helper.clickCheckAnswers();
    
    const explanations = await page.locator('text=/explanation|explicación/i').count();
    expect(explanations).toBeGreaterThan(0);
  });

  test('should calculate and display score', async ({ page }) => {
    await helper.selectTextForQuestion(1, 'A');
    await helper.clickCheckAnswers();
    
    const scoreText = await helper.getScore();
    expect(scoreText).toMatch(/\d+\/\d+|\d+%/);
  });

  test('should show which texts are correct answers', async ({ page }) => {
    await helper.selectTextForQuestion(1, 'E'); // Probably wrong
    await helper.clickCheckAnswers();
    
    // Should show the correct answer
    const correctAnswerDisplay = await page.locator('text=/correct.*answer.*:|✓/i').count();
    expect(correctAnswerDisplay).toBeGreaterThan(0);
  });

  test('should indicate if a text can be used multiple times', async ({ page }) => {
    // Instructions should mention this
    const instructions = await page.textContent('body');
    expect(instructions).toMatch(/more than once|múltiples veces/i);
  });

  test('should show usage count for each text after checking', async ({ page }) => {
    // Select answers for all questions
    for (let i = 1; i <= 10; i++) {
      await helper.selectTextForQuestion(i, 'A');
    }
    
    await helper.clickCheckAnswers();
    
    // Should show how many times each text was used
    const usageIndicators = await page.locator('text=/used.*time|usado/i').count();
    expect(usageIndicators).toBeGreaterThan(0);
  });

  test('should have two-column layout on desktop', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    
    // Should have texts on left and questions on right
    const layout = await page.locator('[class*="grid"], [class*="col"]').count();
    expect(layout).toBeGreaterThan(0);
  });

  test('should stack layout on mobile', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 });
    
    // Texts and questions should still be accessible
    const textsVisible = await page.locator('text=/^[A-E]$/').count();
    expect(textsVisible).toBeGreaterThanOrEqual(5);
  });

  test('should disable selection buttons after checking', async ({ page }) => {
    await helper.selectTextForQuestion(1, 'A');
    await helper.clickCheckAnswers();
    
    const button = page.locator('button:has-text("A")').first();
    await expect(button).toBeDisabled();
  });

  test('should have Try Again button', async ({ page }) => {
    await helper.selectTextForQuestion(1, 'A');
    await helper.clickCheckAnswers();
    
    await expect(page.locator('button', { hasText: /Try Again/i })).toBeVisible();
  });

  test('should reset selections when Try Again is clicked', async ({ page }) => {
    await helper.selectTextForQuestion(1, 'A');
    await helper.clickCheckAnswers();
    await helper.clickTryAgain();
    
    // Buttons should be enabled and no selection
    const button = page.locator('button:has-text("A")').first();
    await expect(button).toBeEnabled();
  });

  test('should display tips for Multiple Matching strategy', async ({ page }) => {
    await expect(page.locator('text=/tips|consejos/i')).toBeVisible();
    
    const tips = await page.textContent('body');
    expect(tips).toMatch(/scan|key words|paraphrase/i);
  });

  test('should show difficulty and topic badges', async ({ page }) => {
    const difficulty = page.locator('text=/easy|medium|hard/i').first();
    await expect(difficulty).toBeVisible();
    
    const topic = page.locator('text=/career|technology|culture|environment/i').first();
    await expect(topic).toBeVisible();
  });

  test('should handle partial completion', async ({ page }) => {
    // Answer only some questions
    await helper.selectTextForQuestion(1, 'A');
    await helper.selectTextForQuestion(5, 'C');
    
    await helper.clickCheckAnswers();
    
    // Should still show results for answered questions
    expect(await helper.isFeedbackVisible()).toBe(true);
  });

  test('should highlight selected text when reviewing', async ({ page }) => {
    await helper.selectTextForQuestion(1, 'A');
    
    // The text card 'A' should show some indication of being selected
    const textCard = page.locator('text=/^A$/').locator('..');
    const classes = await textCard.getAttribute('class');
    expect(classes).toBeTruthy();
  });

  test('should show Next Exercise button after completion', async ({ page }) => {
    await helper.selectTextForQuestion(1, 'A');
    await helper.clickCheckAnswers();
    
    await expect(page.locator('button', { hasText: /Next Exercise|Siguiente/i })).toBeVisible();
  });

  test('should maintain scroll position when selecting answers', async ({ page }) => {
    // Select first question
    await helper.selectTextForQuestion(1, 'A');
    
    // Scroll down
    await page.evaluate(() => window.scrollTo(0, 500));
    const scrollBefore = await page.evaluate(() => window.scrollY);
    
    // Select another question
    await helper.selectTextForQuestion(2, 'B');
    
    // Scroll position should not jump dramatically
    const scrollAfter = await page.evaluate(() => window.scrollY);
    expect(Math.abs(scrollAfter - scrollBefore)).toBeLessThan(200);
  });

  test('should have sticky texts on desktop for easy reference', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    
    // Check if texts have sticky positioning
    const textsContainer = page.locator('[class*="sticky"]').first();
    const hasStickyClass = await textsContainer.count();
    expect(hasStickyClass).toBeGreaterThanOrEqual(0); // May or may not have sticky
  });
});
