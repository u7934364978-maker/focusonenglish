import { test, expect } from '@playwright/test';

test.describe('Unit 18 Expansion Verification', () => {
  test('should have 60 exercises in Unit 18', async ({ page }) => {
    await page.goto('http://127.0.0.1:5436/debug/a1-preview/unit-18');
    const exerciseCountText = page.getByText(/Ejercicio \d+ de 60/i);
    await expect(exerciseCountText).toBeVisible({ timeout: 10000 });
  });

  test('should show correct content for Unit 18', async ({ page }) => {
    await page.goto('http://127.0.0.1:5436/debug/a1-preview/unit-18');
    await expect(page.getByText('Vocabulario: Gustos y Aficiones')).toBeVisible();
    await expect(page.getByText('Love').first()).toBeVisible();
    
    // Check Exercise 3 (Grammar - Like + ing)
    await page.locator('button.bg-slate-100').last().click();
    await page.locator('button.bg-slate-100').last().click();
    await expect(page.getByText('Gustos: Natación')).toBeVisible();
    await expect(page.getByText('swimming').first()).toBeVisible();
  });
});
