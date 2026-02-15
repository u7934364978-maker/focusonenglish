import { test, expect } from '@playwright/test';

test.describe('Unit 19 Expansion Verification', () => {
  test.beforeEach(async ({ page }) => {
    // Increase timeout for slow dev server
    test.setTimeout(60000);
    await page.goto('http://localhost:5436/debug/a1-preview/unit-19');
    await page.waitForLoadState('networkidle');
  });

  test('should have 60 exercises in Unit 19', async ({ page }) => {
    await expect(page.locator('text=Ejercicio 1 de 60')).toBeVisible();
  });

  test('should display job vocabulary correctly', async ({ page }) => {
    // Exercise 1: Flashcards
    await expect(page.locator('text=Vocabulario: Profesiones')).toBeVisible();
    await expect(page.getByText('Doctor', { exact: true }).first()).toBeVisible();
    
    // Click to flip
    await page.locator('.perspective-1000').click();
    await expect(page.getByText('Doctor / Médico', { exact: true }).first()).toBeVisible();
    
    // Click "Fácil" to move to next card
    await page.getByRole('button', { name: 'Fácil' }).click();
    
    // Now "Nurse" should be visible
    await expect(page.getByText('Nurse', { exact: true }).first()).toBeVisible();
  });

  test('should display reading comprehension for Peter', async ({ page }) => {
    // Exercise 13 is the first Reading exercise
    // Navigate to exercise 13 using the "Next" button in the nav
    const nextButton = page.locator('nav button').last();
    for (let i = 0; i < 12; i++) {
      await nextButton.click();
    }
    
    await expect(page.locator('text=Ejercicio 13 de 60')).toBeVisible();
    await expect(page.locator('text=Lectura: El Trabajo de Peter')).toBeVisible();
    
    // Check for the text content in instructions
    // Using a more flexible matcher because TranslatedText might split it
    await expect(page.getByText('Peter is an engineer')).toBeVisible();
    await expect(page.getByText('factory in Manchester')).toBeVisible();
  });

  test('should display reading comprehension for Maria', async ({ page }) => {
    // Navigate to exercise 23 (Maria)
    const nextButton = page.locator('nav button').last();
    // We are at 13 (index 12), need 10 more clicks to get to 23 (index 22)
    // Wait, let's just use the "Ejercicio X de 60" text to track
    while (!(await page.locator('text=Ejercicio 23 de 60').isVisible())) {
      await nextButton.click();
      await page.waitForTimeout(100); // Small delay for state update
    }
    
    await expect(page.locator('text=Lectura: La Enfermera Maria')).toBeVisible();
    await expect(page.getByText('Night City Hospital')).toBeVisible();
    await expect(page.getByText('8 PM to 6 AM')).toBeVisible();
  });
});
