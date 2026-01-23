import { Page, expect } from '@playwright/test';

/**
 * Helper class for navigating the application and interacting with B2 course
 */
export class B2CourseHelper {
  constructor(private page: Page) {}

  /**
   * Navigate to the homepage
   */
  async goToHomepage() {
    await this.page.goto('/');
    await this.page.waitForLoadState('domcontentloaded', { timeout: 30000 });
  }

  /**
   * Navigate to B2 Course Module 1 Lesson 7
   * Updated with correct route structure
   */
  async navigateToLesson7() {
    // Direct navigation to lesson 7 using correct route
    await this.page.goto('/curso-b2/leccion/b2-m1-l7');
    await this.page.waitForLoadState('domcontentloaded', { timeout: 30000 });
    
    // Wait a bit for React hydration
    await this.page.waitForTimeout(3000);
  }

  /**
   * Wait for exercise to load
   */
  async waitForExerciseLoad(exerciseType: string) {
    // Wait for the exercise to be visible using data-testid
    await this.page.waitForSelector(`[data-testid="${exerciseType}-exercise"]`, {
      timeout: 60000,
      state: 'visible'
    }).catch(async () => {
      // Fallback: wait for common elements if no test id
      await this.page.waitForSelector('button:has-text("Check Answers")', { timeout: 60000 });
    });
  }

  /**
   * Click the "Check Answers" button
   */
  async clickCheckAnswers() {
    const button = this.page.locator('button', { hasText: /Check Answers|Evaluar|Checking/i });
    await button.click();
    
    // Wait for evaluation to complete
    await this.page.waitForTimeout(2000);
  }

  /**
   * Click the "Try Again" button
   */
  async clickTryAgain() {
    const button = this.page.locator('button', { hasText: /Try Again|Intentar de nuevo|Reintentar/i });
    await button.click();
  }

  /**
   * Get the score display
   */
  async getScore(): Promise<string> {
    const scoreElement = await this.page.locator('text=/\\d+%|Score:|Puntuación:/i').first();
    return await scoreElement.textContent() || '0%';
  }

  /**
   * Check if feedback is visible
   */
  async isFeedbackVisible(): Promise<boolean> {
    const feedbackElements = await this.page.locator('text=/Correct|Incorrect|Correcto|Incorrecto/i').count();
    return feedbackElements > 0;
  }

  /**
   * Take screenshot with name
   */
  async takeScreenshot(name: string) {
    await this.page.screenshot({ 
      path: `test-results/screenshots/${name}.png`,
      fullPage: true 
    });
  }
}

/**
 * Helper for Open Cloze exercises
 */
export class OpenClozeHelper extends B2CourseHelper {
  async fillGap(gapNumber: number, answer: string) {
    const input = this.page.locator(`input[placeholder*="${gapNumber}"]`).first();
    await input.fill(answer);
  }

  async getAllGapInputs() {
    return await this.page.locator('input[placeholder*="("]').all();
  }

  async countGaps(): Promise<number> {
    const inputs = await this.getAllGapInputs();
    return inputs.length;
  }
}

/**
 * Helper for Gapped Text exercises
 */
export class GappedTextHelper extends B2CourseHelper {
  async selectParagraphForGap(gapNumber: number, paragraphLetter: string) {
    const dropdown = this.page.locator(`select`).nth(gapNumber - 1);
    await dropdown.selectOption(paragraphLetter);
  }

  async getAllDropdowns() {
    return await this.page.locator('select').all();
  }

  async countGaps(): Promise<number> {
    const dropdowns = await this.getAllDropdowns();
    return dropdowns.length;
  }
}

/**
 * Helper for Multiple Matching exercises
 */
export class MultipleMatchingHelper extends B2CourseHelper {
  async selectTextForQuestion(questionNumber: number, textLetter: string) {
    // Find the question card
    const questionCard = this.page.locator(`text=/Question ${questionNumber}|Q${questionNumber}/i`).locator('..');
    
    // Click the button with the text letter
    const button = questionCard.locator(`button:has-text("${textLetter}")`);
    await button.click();
  }

  async countQuestions(): Promise<number> {
    const questions = await this.page.locator('text=/Question \\d+|Q\\d+/i').count();
    return questions;
  }

  async countTexts(): Promise<number> {
    const texts = await this.page.locator('[class*="text"]').filter({ hasText: /^[A-E]$/ }).count();
    return texts;
  }
}

/**
 * Helper for Key Word Transformation exercises
 */
export class KeyWordTransformationHelper extends B2CourseHelper {
  async fillTransformation(number: number, answer: string) {
    const input = this.page.locator('input[type="text"]').nth(number - 1);
    await input.fill(answer);
  }

  async getAllInputs() {
    return await this.page.locator('input[type="text"]').all();
  }

  async countTransformations(): Promise<number> {
    const inputs = await this.getAllInputs();
    return inputs.length;
  }

  async getKeyWord(number: number): Promise<string> {
    const badge = this.page.locator('[class*="badge"]').nth(number - 1);
    return await badge.textContent() || '';
  }
}

/**
 * Helper for Multiple Choice Cloze exercises
 */
export class MultipleChoiceClozeHelper extends B2CourseHelper {
  async selectOptionForGap(gapNumber: number, option: string) {
    const dropdown = this.page.locator('select').nth(gapNumber - 1);
    await dropdown.selectOption(option);
  }

  async getAllDropdowns() {
    return await this.page.locator('select').all();
  }

  async countGaps(): Promise<number> {
    const dropdowns = await this.getAllDropdowns();
    return dropdowns.length;
  }
}
