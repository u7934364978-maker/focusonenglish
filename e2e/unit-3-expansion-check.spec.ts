import { test, expect } from '@playwright/test';

test.describe('Unit 3 Expansion Verification', () => {
  test('should render unit 3 with 60 exercises and allow interaction', async ({ page }) => {
    await page.goto('/debug/a1-preview/unit-3');
    
    // Wait for the main content to load
    await expect(page.getByText('Cargando Unidad')).not.toBeVisible({ timeout: 15000 });
    
    // Check for unit title
    await expect(page.getByText('Review: Unidad 3')).toBeVisible();
    
    // Verify progress bar shows "EJERCICIO 1 DE 60"
    await expect(page.getByText('EJERCICIO 1 DE 60')).toBeVisible();
    
    // Check for first question content (using regex to handle glossaries)
    await expect(page.locator('main')).toContainText(/I.*sad/);
    
    // Interact with first question (Multiple Choice)
    const option = page.locator('button').filter({ hasText: /am.*not/ }).first();
    await option.click();
    
    // Click "Confirmar Respuesta"
    await page.getByRole('button', { name: /Confirmar Respuesta/i }).click();
    
    // Check for feedback
    await expect(page.getByText(/¡Excelente!|Respuesta correcta/i).first()).toBeVisible();
    
    // Click "Finalizar Ejercicio"
    const nextButton = page.locator('button').filter({ hasText: /Finalizar Ejercicio/i });
    await expect(nextButton).toBeVisible();
    
    await nextButton.click();
    
    // Should now be on exercise 2
    await expect(page.getByText('EJERCICIO 2 DE 60')).toBeVisible();
    await expect(page.locator('main')).toContainText(/He.*from.*France/);
  });
});
