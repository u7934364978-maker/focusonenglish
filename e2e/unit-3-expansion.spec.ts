import { test, expect } from '@playwright/test';

test.describe('Unit 3 Expansion Verification', () => {
  test('should have 60 exercises in Unit 3', async ({ page }) => {
    // Navigate to the debug preview for Unit 3
    await page.goto('http://localhost:5436/debug/a1-preview/unit-3');
    
    // Wait for the header to be visible
    await page.waitForSelector('h1:has-text("Review: Unidad 3")');
    
    // Check if the total exercise count is 60 in the navigation header
    const headerText = await page.textContent('h1');
    expect(headerText).toContain('60');
  });

  test('should display different types of exercises', async ({ page }) => {
    await page.goto('http://localhost:5436/debug/a1-preview/unit-3');

    // Exercise 1: Flashcard
    await expect(page.locator('h2:has-text("Vocabulario Clave: 1-20")')).toBeVisible();
    // Flashcard front content - use first() to avoid strict mode violation
    await expect(page.locator('text=One').first()).toBeVisible();

    // Navigate to Exercise 2: Multiple Choice
    await page.click('button:has(svg.lucide-arrow-right)');
    await expect(page.locator('text=Ejercicio 2 de 60')).toBeVisible();
    await expect(page.locator('text=Practica la Gramática')).toBeVisible();

    // Navigate to Exercise 7: Sentence Building
    for (let i = 0; i < 5; i++) {
      await page.click('button:has(svg.lucide-arrow-right)');
    }
    await expect(page.locator('text=Ejercicio 7 de 60')).toBeVisible();
    await expect(page.locator('text=Construcción de Oraciones')).toBeVisible();
    
    // Check for "pencils" which is part of Exercise 7
    await expect(page.locator('text=pencils').first()).toBeVisible();
  });

  test('should display reading comprehension exercises correctly', async ({ page }) => {
    // Exercise 26 is the first reading exercise
    await page.goto('http://localhost:5436/debug/a1-preview/unit-3');
    
    // Navigate to Exercise 26
    for (let i = 0; i < 25; i++) {
        await page.click('button:has(svg.lucide-arrow-right)');
    }
    
    await expect(page.locator('text=Ejercicio 26 de 60')).toBeVisible();
    await expect(page.locator('text=Lectura: La Familia de Tom')).toBeVisible();
    // Verify the question content is present - the renderer likely splits words for translation
    await expect(page.locator('text=twenty-five').first()).toBeVisible();
    await expect(page.locator('text=Tom').first()).toBeVisible();
  });
});
