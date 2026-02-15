import { test, expect } from '@playwright/test';

test.describe('Unit 4 Expansion - Daily Life', () => {
  test.beforeEach(async ({ page }) => {
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

  test('reading exercises should have routine texts', async ({ page }) => {
    // Navigate to a reading exercise (e.g., 51 - David)
    for (let i = 0; i < 50; i++) {
      await page.click('button:has(.lucide-arrow-right)');
    }
    
    await expect(page.locator('h1')).toContainText('Ejercicio 51 de 60');
    await expect(page.locator('body')).toContainText('David');
    await expect(page.locator('body')).toContainText('teacher');
    await expect(page.locator('body')).toContainText('6:30');
  });

  test('vocabulary should cover daily verbs and frequency adverbs', async ({ page }) => {
    // Check initial vocabulary (Daily Verbs)
    await expect(page.locator('body')).toContainText('Wake up');
    
    // Navigate to adverbs section (Ex 31)
    for (let i = 0; i < 30; i++) {
      await page.click('button:has(.lucide-arrow-right)');
    }
    await expect(page.locator('h1')).toContainText('Ejercicio 31 de 60');
    await expect(page.locator('body')).toContainText('Always');
    await expect(page.locator('body')).toContainText('100%');
  });
});
