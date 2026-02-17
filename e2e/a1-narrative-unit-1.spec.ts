import { test, expect } from '@playwright/test';

test.describe('A1 Narrative Unit 1 - Heathrow Arrival', () => {
  const baseURL = 'http://127.0.0.1:3001';

  test('should load and allow completion of narrative-driven exercises', async ({ page }) => {
    // 1. Navigate to the new course unit
    await page.goto(`${baseURL}/preview/ingles-a1-narrative/unit1`);

    // 2. Verify Modo Preview text (instead of h1)
    await expect(page.locator('text=Modo Preview')).toBeVisible();
    await expect(page.locator('text=ingles-a1-narrative')).toBeVisible();
    await expect(page.locator('text=unit1')).toBeVisible();

    // 3. Verify First Exercise (Multiple Choice from Block 1)
    // Index 1 (0-based)
    await page.goto(`${baseURL}/preview/ingles-a1-narrative/unit1?index=1`);
    
    await expect(page.locator('text=Ejercicio del Gancho 2')).toBeVisible();
    
    // Select "Opción A 2" (Option o1)
    await page.getByRole('button', { name: /Opción A 2/ }).first().click();
    await page.getByRole('button', { name: 'COMPROBAR' }).click();
    
    // Check success feedback
    await expect(page.getByRole('heading', { name: '¡Excelente!' })).toBeVisible();

    // 4. Verify Skip to Grammar Exercise (Deep Dive - Index 15)
    await page.goto(`${baseURL}/preview/ingles-a1-narrative/unit1?index=15`);
    await expect(page.locator('text=Ejercicio de Gramática 16')).toBeVisible();
    
    // Select "am" (as i=15, i%3 === 0, so correct_answer is o1 "am")
    await page.getByRole('button', { name: 'am' }).first().click();
    await page.getByRole('button', { name: 'COMPROBAR' }).click();
    await expect(page.getByRole('heading', { name: '¡Excelente!' })).toBeVisible();
  });
});
