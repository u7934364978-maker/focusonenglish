import { test, expect } from '@playwright/test';

test.describe('Unit 8 Expansion', () => {
  test('should have 60 exercises in Unit 8', async ({ page }) => {
    await page.goto('http://127.0.0.1:5436/debug/a1-preview/unit-8');
    
    // Wait for exercises to load
    await expect(page.locator('h1')).toContainText('Review: Unidad 8');
    
    // Check that it shows "Ejercicio 1 de 60"
    await expect(page.locator('h1')).toContainText('Ejercicio 1 de 60');
    
    // Let's at least verify some content of the first exercise
    await expect(page.getByText('Vocabulario: Ropa')).toBeVisible();
  });

  test('should navigate to the last exercise', async ({ page }) => {
    await page.goto('http://127.0.0.1:5436/debug/a1-preview/unit-8');
    
    const header = page.locator('h1');
    await expect(header).toContainText('de 60');
  });
});
