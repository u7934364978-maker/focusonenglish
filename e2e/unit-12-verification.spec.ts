import { test, expect } from '@playwright/test';

test.describe('Unit 12 Verification', () => {
  test('should load Unit 12 and display exercises', async ({ page }) => {
    // Navigate to the unit 12 preview page
    await page.goto('http://127.0.0.1:5436/debug/b2-preview/unit-12');
    
    // Check for error message
    const errorMsg = page.getByText('No se encontraron ejercicios');
    if (await errorMsg.isVisible()) {
      throw new Error('Exercises not found for Unit 12');
    }

    // Check if the title "B2 Preview: Unidad 12" is visible
    await expect(page.getByText('B2 Preview: Unidad 12')).toBeVisible({ timeout: 15000 });
    
    // Check if the progress indicator shows "Ejercicio 1 de 50"
    await expect(page.getByText('Ejercicio 1 de 50')).toBeVisible();
    
    // Verify first exercise content (Headquarters)
    await expect(page.getByText('headquarters', { exact: false }).first()).toBeVisible();
    
    // Click next and check next exercise
    await page.locator('nav button').nth(1).click(); // Next button
    await expect(page.getByText('Ejercicio 2 de 50')).toBeVisible();
    await expect(page.getByText('project', { exact: false }).first()).toBeVisible();

    // Exercise 3 (Inversion)
    await page.locator('nav button').nth(1).click(); // Next button
    await expect(page.getByText('Ejercicio 3 de 50')).toBeVisible();
    await expect(page.getByText('Not only', { exact: false }).first()).toBeVisible();
  });
});
