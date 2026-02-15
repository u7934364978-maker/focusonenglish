import { test, expect } from '@playwright/test';

test.describe('A1 Course Expansion - Unit 2', () => {
  test('Unit 2 should have 60 exercises', async ({ page }) => {
    await page.goto('http://127.0.0.1:5436/debug/a1-preview/unit-2');
    
    // Wait for the exercise indicator to be visible (e.g., "Ejercicio 1 de 60")
    // Note: It's "Ejercicio" in the component code, not "EJERCICIO"
    const indicator = page.locator('text=/Ejercicio \\d+ de 60/');
    await expect(indicator).toBeVisible();
  });

  test('Unit 1 reading exercises should not have blanks or verb hints', async ({ page }) => {
    // Navigate to exercise 26 of Unit 1 (first reading exercise)
    // We can use the indicator to find it if direct navigation isn't supported by URL params
    await page.goto('http://127.0.0.1:5436/debug/a1-preview/unit-1');
    
    // Click next until we reach exercise 26
    for (let i = 1; i < 26; i++) {
      await page.click('button:has(svg.lucide-arrow-right)');
    }
    
    await expect(page.locator('text=/Ejercicio 26 de 60/')).toBeVisible();
    
    // The reading exercises use TranslatedText inside divs
    const questionContainer = page.locator('.space-y-6').first(); // Container for the reading question
    const content = await questionContainer.textContent();
    
    expect(content).not.toContain('_______');
    expect(content).not.toContain('(be)');
  });

  test('Unit 2 should have diverse exercise types', async ({ page }) => {
    await page.goto('http://127.0.0.1:5436/debug/a1-preview/unit-2');
    
    // Check for flashcards (initial exercises)
    await expect(page.locator('text=Vocabulario Clave')).toBeVisible();
    
    // Click next until we reach exercise 12 (Family)
    for (let i = 1; i < 12; i++) {
      await page.click('button:has(svg.lucide-arrow-right)');
    }
    
    await expect(page.locator('text=La Familia')).toBeVisible();
  });
});
