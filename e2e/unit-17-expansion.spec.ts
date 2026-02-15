import { test, expect } from '@playwright/test';

test.describe('Unit 17 Expansion Verification', () => {
  test('should have 60 exercises in Unit 17', async ({ page }) => {
    await page.goto('http://127.0.0.1:5436/debug/a1-preview/unit-17');
    const exerciseCountText = page.getByText(/Ejercicio \d+ de 60/i);
    await expect(exerciseCountText).toBeVisible({ timeout: 10000 });
  });

  test('should show correct content for Unit 17', async ({ page }) => {
    await page.goto('http://127.0.0.1:5436/debug/a1-preview/unit-17');
    await expect(page.getByText('Vocabulario: Medios de Transporte')).toBeVisible();
    await expect(page.getByText('Bus').first()).toBeVisible();
    
    // Check Exercise 3 (Grammar)
    await page.locator('button.bg-slate-100').last().click();
    await page.locator('button.bg-slate-100').last().click();
    await expect(page.getByText('Ir al trabajo')).toBeVisible();
    await expect(page.getByText('by').first()).toBeVisible();
  });
});
