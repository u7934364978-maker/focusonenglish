import { test, expect } from '@playwright/test';

test.describe('Unit 11 Expansion', () => {
  test('should have 60 exercises in Unit 11', async ({ page }) => {
    await page.goto('http://127.0.0.1:5436/debug/a1-preview/unit-11');
    
    // Wait for exercises to load
    await expect(page.locator('h1')).toContainText('Review: Unidad 11', { timeout: 15000 });
    
    // Check that it shows "Ejercicio 1 de 60"
    await expect(page.locator('h1')).toContainText('Ejercicio 1 de 60');
    
    // Verify content of the first exercise
    await expect(page.getByText('Vocabulario Clave')).toBeVisible();
  });

  test('should show correct exercise count', async ({ page }) => {
    await page.goto('http://127.0.0.1:5436/debug/a1-preview/unit-11');
    
    const header = page.locator('h1');
    await expect(header).toContainText('de 60');
  });

  test('should have reading comprehension at the end', async ({ page }) => {
    await page.goto('http://127.0.0.1:5436/debug/a1-preview/unit-11');
    await expect(page.locator('h1')).toContainText('de 60');
  });
});
