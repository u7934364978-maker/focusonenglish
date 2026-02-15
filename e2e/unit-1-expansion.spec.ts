import { test, expect } from '@playwright/test';

test.describe('Unit 1 Expansion and Legacy Route Removal', () => {
  test('legacy routes should return 404', async ({ page }) => {
    const legacyRoutes = [
      '/curso/ingles-a1',
      '/curso/ingles-a2'
    ];

    for (const route of legacyRoutes) {
      const response = await page.goto(route);
      expect(response?.status()).toBe(404);
    }
  });

  test('debug unit 1 preview should have 60 exercises', async ({ page }) => {
    await page.goto('/debug/a1-preview/unit-1');
    
    // Check header for exercise count (matching "Ejercicio X de 60")
    await expect(page.getByText('Ejercicio 1 de 60')).toBeVisible();

    // Verify presence of reading comprehension (Unit 1 exercises 26-30, 41-50 are reading)
    // We can jump to exercise 26 to see if reading content is there
    // For now, let's just check if it loads correctly
    await expect(page.getByText('Review: Unidad 1')).toBeVisible();
  });

  test('can navigate through exercises', async ({ page }) => {
    await page.goto('/debug/a1-preview/unit-1');
    
    // Initial state
    await expect(page.getByText('Ejercicio 1 de 60')).toBeVisible();
    
    // Click next button
    const nextButton = page.locator('button').nth(1); // Second button is ArrowRight based on code audit
    await nextButton.click();
    
    await expect(page.getByText('Ejercicio 2 de 60')).toBeVisible();
  });
});
