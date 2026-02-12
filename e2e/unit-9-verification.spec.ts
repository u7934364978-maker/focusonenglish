import { test, expect } from '@playwright/test';

test.describe('Unit 9 Verification', () => {
  test('should load Unit 9 and display exercises', async ({ page }) => {
    // Navigate to the unit 9 preview page
    await page.goto('http://localhost:5436/debug/b1-preview/unit-9');
    
    // Check for error message
    const errorMsg = page.getByText('No se encontraron ejercicios');
    if (await errorMsg.isVisible()) {
      throw new Error('Exercises not found for Unit 9');
    }

    // Check if the title "B1 Preview: Unidad 9" is visible
    await expect(page.getByText('B1 Preview: Unidad 9')).toBeVisible({ timeout: 10000 });
    
    // Check if the progress indicator shows "Ejercicio 1 de 100"
    await expect(page.getByText('Ejercicio 1 de 100')).toBeVisible();
    
    // Verify first exercise content
    await expect(page.getByText('Campus', { exact: false }).first()).toBeVisible();
    
    // Click next and check next exercise
    await page.getByRole('button').nth(1).click(); // Second button in nav (ArrowRight)
    await expect(page.getByText('Ejercicio 2 de 100')).toBeVisible();
    await expect(page.getByText('Tuition fees', { exact: false }).first()).toBeVisible();
  });
});
