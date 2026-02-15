import { test, expect } from '@playwright/test';

test.describe('Unit 12 Expansion', () => {
  test('should have 60 exercises in Unit 12', async ({ page }) => {
    await page.goto('http://127.0.0.1:5436/debug/a1-preview/unit-12');
    
    // Wait for exercises to load
    await expect(page.locator('h1')).toContainText('Review: Unidad 12', { timeout: 15000 });
    
    // Check that it shows "Ejercicio 1 de 60"
    await expect(page.locator('h1')).toContainText('Ejercicio 1 de 60');
    
    // Verify content of the first exercise (Review)
    await expect(page.getByText('Repaso: Días de la Semana')).toBeVisible();
  });

  test('should show correct exercise count', async ({ page }) => {
    await page.goto('http://127.0.0.1:5436/debug/a1-preview/unit-12');
    
    const header = page.locator('h1');
    await expect(header).toContainText('de 60');
  });

  test('should have city places vocabulary', async ({ page }) => {
    await page.goto('http://127.0.0.1:5436/debug/a1-preview/unit-12');
    // Navigate to second exercise
    await page.locator('button').filter({ hasText: /^$/ }).nth(1).click();
    await expect(page.getByText('Lugares en la Ciudad')).toBeVisible();
  });
});
