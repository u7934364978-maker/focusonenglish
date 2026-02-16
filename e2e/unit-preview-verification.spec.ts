import { test, expect } from '@playwright/test';

test.describe('Unit Preview Verification', () => {
  test('should load Unit 1 exercises without crashing', async ({ page }) => {
    // Navigate to Unit 1 debug preview
    await page.goto('http://127.0.0.1:5436/debug/a1-preview/unit-1');
    
    // Verify the page title/header contains Unit 1
    const header = page.locator('h1');
    await expect(header).toContainText('Unidad 1');
    
    // Verify that exercises are loaded (Exercise 1 of X)
    await expect(header).toContainText('Ejercicio 1 de');
    
    // Verify that the exercise renderer is present
    const renderer = page.locator('main');
    await expect(renderer).toBeVisible();
    
    // Check for the presence of the first exercise title (Greetings)
    await expect(page.locator('text=Greetings').first()).toBeVisible();
  });

  test('should load Unit 2 exercises without crashing', async ({ page }) => {
    // Navigate to Unit 2 debug preview
    await page.goto('http://127.0.0.1:5436/debug/a1-preview/unit-2');
    
    // Verify the page title/header contains Unit 2
    const header = page.locator('h1');
    await expect(header).toContainText('Unidad 2');
    
    // Verify that exercises are loaded
    await expect(header).toContainText('Ejercicio 1 de');
    
    // Check for the presence of the first exercise content
    await expect(page.locator('text=nationality').first()).toBeVisible();
  });

  test('should navigate between exercises in Unit 1', async ({ page }) => {
    await page.goto('http://127.0.0.1:5436/debug/a1-preview/unit-1');
    
    const nextButton = page.locator('button').nth(1); // Right arrow
    await expect(nextButton).toBeEnabled();
    
    // Click next and verify index updates
    await nextButton.click();
    await expect(page.locator('h1')).toContainText('Ejercicio 2 de');
  });
});
