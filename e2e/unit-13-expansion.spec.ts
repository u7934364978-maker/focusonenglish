import { test, expect } from '@playwright/test';

test.describe('Unit 13 Expansion', () => {
  test('should have 60 exercises in Unit 13', async ({ page }) => {
    await page.goto('http://127.0.0.1:5436/debug/a1-preview/unit-13');
    
    // Wait for exercises to load
    await expect(page.locator('h1')).toContainText('Review: Unidad 13', { timeout: 15000 });
    
    // Check that it shows "Ejercicio 1 de 60"
    await expect(page.locator('h1')).toContainText('Ejercicio 1 de 60');
    
    // Verify content of the first exercise
    await expect(page.getByText('Vocabulario: Ropa')).toBeVisible();
  });

  test('should show correct exercise count', async ({ page }) => {
    await page.goto('http://127.0.0.1:5436/debug/a1-preview/unit-13');
    
    const header = page.locator('h1');
    await expect(header).toContainText('de 60');
  });

  test('should have clothes vocabulary', async ({ page }) => {
    await page.goto('http://127.0.0.1:5436/debug/a1-preview/unit-13');
    await expect(page.getByText('Shirt').first()).toBeVisible();
  });
});
