import { test, expect } from '@playwright/test';

test.describe('Unit 22 Expansion', () => {
  test('should have 60 exercises in Unit 22', async ({ page }) => {
    await page.goto('/debug/a1-preview/unit-22?index=59');
    await expect(page.getByText(/Ejercicio 60 de 60/i)).toBeVisible();
    await expect(page.locator('h2').filter({ hasText: /Oficina en Casa/i })).toBeVisible();
  });

  test('should verify demonstratives (Exercise 11)', async ({ page }) => {
    await page.goto('/debug/a1-preview/unit-22?index=10');
    await expect(page.getByText(/Ejercicio 11 de 60/i)).toBeVisible();
    await expect(page.locator('h2').filter({ hasText: /Este\/Esta/i })).toBeVisible();
    await expect(page.getByText('computer').first()).toBeVisible();
  });

  test('should verify possessives (Exercise 15)', async ({ page }) => {
    await page.goto('/debug/a1-preview/unit-22?index=14');
    await expect(page.getByText(/Ejercicio 15 de 60/i)).toBeVisible();
    await expect(page.locator('h2').filter({ hasText: /El Posesivo/i })).toBeVisible();
    await expect(page.getByText('Maria').first()).toBeVisible();
  });
});
