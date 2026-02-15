import { test, expect } from '@playwright/test';

test.describe('Unit 16 Expansion Verification', () => {
  test('should have 60 exercises in Unit 16', async ({ page }) => {
    await page.goto('http://127.0.0.1:5436/debug/a1-preview/unit-16');
    const exerciseCountText = page.getByText(/Ejercicio \d+ de 60/i);
    await expect(exerciseCountText).toBeVisible({ timeout: 10000 });
  });

  test('should show correct content for Unit 16', async ({ page }) => {
    await page.goto('http://127.0.0.1:5436/debug/a1-preview/unit-16');
    await expect(page.getByText('Vocabulario: Bebidas de Café')).toBeVisible();
    await expect(page.getByText('Espresso').first()).toBeVisible();
    
    // Check Exercise 2
    await page.locator('button.bg-slate-100').last().click();
    await expect(page.getByText('Vocabulario: Comida en el Café')).toBeVisible();
    await expect(page.getByText('Croissant')).toBeVisible();
  });
});
