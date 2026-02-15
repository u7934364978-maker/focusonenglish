import { test, expect } from '@playwright/test';

test.describe('Unit 4 Expansion', () => {
  test.beforeEach(async ({ page }) => {
    // Aumentar el tiempo de espera por defecto para navegaciones lentas
    test.setTimeout(60000);
    await page.goto('http://127.0.0.1:5436/debug/a1-preview/unit-4');
  });

  test('should have 60 exercises', async ({ page }) => {
    await expect(page.locator('h1')).toContainText('Ejercicio 1 de 60');
    
    // Check last exercise
    for (let i = 0; i < 59; i++) {
      await page.click('button:has(.lucide-arrow-right)');
    }
    await expect(page.locator('h1')).toContainText('Ejercicio 60 de 60');
  });

  test('reading exercises should have longer texts and no blanks', async ({ page }) => {
    // Navigate to a reading exercise (e.g., 51)
    for (let i = 0; i < 50; i++) {
      await page.click('button:has(.lucide-arrow-right)');
    }
    
    // Wait for the exercise to be rendered
    await expect(page.locator('h1')).toContainText('Ejercicio 51 de 60');
    
    // Look for the question content
    await expect(page.locator('body')).toContainText('Mark');
    await expect(page.locator('body')).not.toContainText('_______');
    
    // Verify specific content for Mark (Ex 51)
    await expect(page.locator('body')).toContainText('Smith');
    await expect(page.locator('body')).toContainText('S-M-I-T-H');
  });

  test('vocabulary should cover alphabet and articles', async ({ page }) => {
    // Check initial vocabulary (Alphabet)
    await expect(page.locator('body')).toContainText('Alphabet');
    
    // Navigate to articles section (Ex 14)
    for (let i = 0; i < 13; i++) {
      await page.click('button:has(.lucide-arrow-right)');
    }
    await expect(page.locator('h1')).toContainText('Ejercicio 14 de 60');
    await expect(page.locator('body')).toContainText('Artículos: A / An');
    await expect(page.locator('body')).toContainText('apple');
  });
});
