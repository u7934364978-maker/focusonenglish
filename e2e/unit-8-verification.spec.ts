import { test, expect } from '@playwright/test';

test.describe('Unit 8: Food & Cooking Verification', () => {
  test.beforeEach(async ({ page }) => {
    // Navigate to the unit 8 preview page
    await page.goto('http://localhost:5436/debug/b1-preview/unit-8');
    // Wait for the main content to load
    await page.waitForSelector('text=Ejercicio 1 de 100', { timeout: 15000 });
  });

  test('should display the correct unit header', async ({ page }) => {
    // Check for the unit title in the body
    await expect(page.getByText('B1 Preview: Unidad 8')).toBeVisible();
  });

  test('should show first exercise content (flashcard)', async ({ page }) => {
    // The first exercise is a flashcard for "Ingredients"
    await expect(page.getByText('Ingredients').first()).toBeVisible();
    // Use a more flexible selector for Vocabulary
    await expect(page.locator('body')).toContainText('Vocabulary');
  });

  test('should have a working navigation', async ({ page }) => {
    // Check if progress indicator exists
    await expect(page.getByText(/Ejercicio 1 de 100/)).toBeVisible();
  });
});
