import { test, expect } from '@playwright/test';

test.describe('Unit 21 Expansion', () => {
  test('should have 60 exercises in Unit 21', async ({ page }) => {
    // We check the last exercise index to ensure 60 exist
    await page.goto('/debug/a1-preview/unit-21?index=59');
    
    // Check if the exercise is rendered (Reading Comprehension)
    await expect(page.locator('text=Lectura: El Jardín')).toBeVisible();
    
    // Check total count displayed in header (Exercise 60 of 60)
    await expect(page.locator('text=EJERCICIO 60 DE 60')).toBeVisible();
  });

  test('should verify flashcard content (Exercise 1)', async ({ page }) => {
    await page.goto('/debug/a1-preview/unit-21?index=0');
    await expect(page.getByText('Las Habitaciones')).toBeVisible();
    await expect(page.getByText('Living room').first()).toBeVisible();
  });

  test('should verify multiple choice grammar (Exercise 11)', async ({ page }) => {
    await page.goto('/debug/a1-preview/unit-21?index=10');
    // Wait for the exercise index to be correct in the header
    await expect(page.getByText(/Ejercicio 11 de 60/i)).toBeVisible();
    await expect(page.locator('h2').filter({ hasText: /There is/i })).toBeVisible();
    await expect(page.getByText('sofa').first()).toBeVisible();
  });
});
