import { test, expect } from '@playwright/test';

test.describe('Unit 20 Expansion', () => {
  test('should have 60 exercises in unit 20', async ({ page }) => {
    await page.goto('http://127.0.0.1:5436/debug/a1-preview/unit-20');
    
    // Wait for the exercise list to load
    await page.waitForSelector('text=Ejercicio 1 de 60');
    
    // Check if the total exercises count is 60
    const exerciseCount = await page.textContent('span:has-text("EJERCICIO 1 DE 60")');
    expect(exerciseCount).toContain('60');
  });

  test('should render reading exercises in unit 20', async ({ page }) => {
    // Go directly to the first reading exercise (e51)
    await page.goto('http://127.0.0.1:5436/debug/a1-preview/unit-20?index=50');
    
    // Wait for the exercise to load
    await page.waitForSelector('text=Lectura: Un Día Ocupado');
    
    // Check if the reading text is visible by checking for key words (using first() to avoid strict mode issues with tooltips)
    await expect(page.locator('text=Mark').first()).toBeVisible();
    await expect(page.locator('text=doctor').first()).toBeVisible();
    
    // Check if question is visible
    await expect(page.locator('text=What').first()).toBeVisible();
    await expect(page.locator('text=time').first()).toBeVisible();
  });

  test('should navigate to the last exercise', async ({ page }) => {
    await page.goto('http://127.0.0.1:5436/debug/a1-preview/unit-20?index=59');
    await page.waitForSelector('text=Ejercicio 60 de 60');
    await expect(page.locator('text=Who').first()).toBeVisible();
    await expect(page.locator('text=Tom').first()).toBeVisible();
  });
});
