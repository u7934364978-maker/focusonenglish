import { test, expect } from '@playwright/test';

test.describe('Unit 2 Bilingual Translations', () => {
  test.beforeEach(async ({ page }) => {
    // Navigate to the unit 2 preview page
    await page.goto('/debug/a1-preview/unit-2');
    await page.waitForSelector('main');
  });

  test('should display bilingual instructions', async ({ page }) => {
    // Check for bilingual instructions in the renderer
    // instructions: q.type === 'fill-blank' ? '[[Write the correct word.|Escribe la palabra correcta.]]' : '[[Choose the correct answer.|Elige la respuesta correcta.]]'
    const instructions = page.locator('.prose'); // Markdown component usually renders in a .prose div
    await expect(instructions).toBeVisible();
    
    // The TranslatedText component renders as: <span ...><span>English</span>...</span>
    // So we check for the English text which is visible by default
    const text = await instructions.textContent();
    expect(text).toMatch(/Write the correct word|Choose the correct answer/i);
  });

  test('should display bilingual grammar questions', async ({ page }) => {
    // Check first question: [[Peter is from England. ___ is English.|Peter es de Inglaterra. ___ es inglés.]]
    const questionText = page.locator('main .text-2xl');
    await expect(questionText).toContainText('Peter is from England. ___ is English.');
    
    // Verify tooltip presence (it contains the Spanish translation)
    const translationSpan = questionText.locator('span.group');
    await expect(translationSpan).toBeVisible();
  });

  test('should display bilingual UI buttons', async ({ page }) => {
    // Check "Confirm Answer" button
    const confirmButton = page.locator('button').filter({ hasText: /Confirm Answer/ }).first();
    await expect(confirmButton).toBeVisible();
    
    // Select an option to enable the button (for multiple choice)
    // The options have a div with the letter (A, B, C...)
    await page.locator('button', { has: page.locator('div', { hasText: /^A$/ }) }).first().click();
    
    // Wait for button to be enabled
    await expect(confirmButton).toBeEnabled();
    await confirmButton.click();
    
    // Check feedback: [[Excellent! Correct answer.|¡Excelente! Respuesta correcta.]]
    const feedback = page.locator('.animate-slide-in');
    await expect(feedback).toBeVisible();
    await expect(feedback).toContainText(/Excellent|Correct answer/i);
    
    // Check "Next Question" button
    // It is rendered in the same button container after state change
    await page.waitForTimeout(2000);
    const nextButton = page.getByRole('button').filter({ hasText: /Next|Siguiente/ }).first();
    await expect(nextButton).toBeVisible({ timeout: 15000 });
  });

  test('should display bilingual True/False buttons', async ({ page }) => {
    // Navigate to a True/False question (q8 is true-false)
    await page.goto('/debug/a1-preview/unit-2?index=7');
    await page.waitForSelector('main');
    
    const trueButton = page.locator('button', { hasText: /True/i });
    const falseButton = page.locator('button', { hasText: /False/i });
    
    await expect(trueButton).toBeVisible();
    await expect(falseButton).toBeVisible();
  });
});
