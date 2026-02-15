import { test, expect } from '@playwright/test';

test.describe('Unit 5 Expansion - My Home', () => {
  test.beforeEach(async ({ page }) => {
    test.setTimeout(60000);
    await page.goto('http://127.0.0.1:5436/debug/a1-preview/unit-5');
  });

  test('should have 60 exercises', async ({ page }) => {
    await expect(page.getByText('Ejercicio 1 de 60')).toBeVisible();
    await expect(page.getByText('Vocabulario: Habitaciones')).toBeVisible();
    await expect(page.getByText('Living room').first()).toBeVisible();
  });
});
