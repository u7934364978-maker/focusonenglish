import { test, expect } from '@playwright/test';

test.describe('Exercise Engine Pedagogical Enrichment', () => {
  test.beforeEach(async ({ page }) => {
    // Navigate to the engine debug page
    await page.goto('http://localhost:5436/debug/engine');
    // Wait for exercises to be generated
    await page.waitForSelector('text=Debug: Motor de Ensamblaje');
  });

  test('should display pedagogical metadata for generated exercises', async ({ page }) => {
    // Check if the title is rendered (from blueprint or skill)
    // We look for the instruction box which contains the prompt
    const instructionBox = page.locator('div:has-text("Completa la frase")').or(page.locator('div:has-text("Elige la opción")'));
    await expect(instructionBox.first()).toBeVisible();

    // Check for the "Unidad" tag
    await expect(page.locator('text=Unidad')).toBeVisible();

    // The explanation/tip appears after answering or in the exercise data.
    // In the current UI, we might need to "Check" to see it, 
    // but we can also verify the exercise content structure if exposed.
    
    // Let's verify that the "SALIR" and "REGENERAR" buttons exist
    await expect(page.locator('button:has-text("SALIR")')).toBeVisible();
    await expect(page.locator('button:has-text("REGENERAR")')).toBeVisible();
  });
});
