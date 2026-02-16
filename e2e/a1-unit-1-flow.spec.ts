import { test, expect } from '@playwright/test';

test.describe('A1 Unit 1 Flow - Pedagogical Verification', () => {
  test('should complete key exercises with correct logic and translations', async ({ page }) => {
    // Navigate to Unit 1 preview
    await page.goto('http://127.0.0.1:5436/debug/a1-preview/unit-1');

    // 1. Verify Exercise 1 (Multiple Choice - Formal Greeting)
    await expect(page.locator('h2')).toContainText('Formal');
    await expect(page.locator('h2')).toContainText('Greeting');
    await expect(page.locator('text=Sarah').first()).toBeVisible();
    
    // Select "Good morning"
    await page.getByRole('button', { name: /Good morning/ }).first().click();
    await page.getByRole('button', { name: 'Verificar Respuesta' }).click();
    
    // Check success feedback
    await expect(page.locator('text=Respuesta correcta')).toBeVisible();
    await page.locator('button:has-text("Siguiente Ejercicio")').click();

    // Skip to exercise 45 (Email Symbols - Fill Blank with options)
    await page.goto('http://127.0.0.1:5436/debug/a1-preview/unit-1?index=44');
    
    // Verify Exercise 45 (Fill blank with "at")
    await expect(page.locator('h2')).toContainText('Email');
    await expect(page.locator('h2')).toContainText('Symbols');
    
    // Click the "at" option button
    await page.getByRole('button', { name: /at/ }).first().click();
    
    await page.getByRole('button', { name: 'Verificar Respuesta' }).click();
    await expect(page.locator('text=Respuesta correcta')).toBeVisible();
    
    // 2. Verify Exercise 52 (Multiple Choice - How are things?)
    await page.goto('http://127.0.0.1:5436/debug/a1-preview/unit-1?index=51');
    await expect(page.locator('h2')).toContainText('things');
    
    // Options: things, names, jobs.
    await page.getByRole('button', { name: /things/ }).first().click();
    await page.getByRole('button', { name: 'Verificar Respuesta' }).click();
    await expect(page.locator('text=Respuesta correcta')).toBeVisible();
  });
});
