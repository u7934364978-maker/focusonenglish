import { test, expect } from '@playwright/test';

test.describe('Unit 15 Expansion Verification', () => {
  test('should have 60 exercises in Unit 15', async ({ page }) => {
    // Navigate to the debug preview for Unit 15
    await page.goto('http://127.0.0.1:5436/debug/a1-preview/unit-15');
    
    // Wait for the exercise text to be visible (e.g., "Ejercicio 1 de 60")
    // The component uses "Ejercicio {currentIndex + 1} de {exercises.length}"
    const exerciseCountText = page.getByText(/Ejercicio \d+ de 60/i);
    await expect(exerciseCountText).toBeVisible({ timeout: 10000 });
  });

  test('should show correct content for Unit 15', async ({ page }) => {
    await page.goto('http://127.0.0.1:5436/debug/a1-preview/unit-15');
    
    // Check for "Vocabulario: Profesiones" which is unique to expanded Unit 15
    await expect(page.getByText('Vocabulario: Profesiones')).toBeVisible();
    
    // Check for 3rd person verbs section (Exercise 2)
    await page.locator('button.bg-slate-100').last().click(); // Click Next
    await expect(page.getByText('Verbos en 3ª Persona')).toBeVisible();
  });
});
