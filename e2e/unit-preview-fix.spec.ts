import { test, expect } from '@playwright/test';

test.describe('Unit 1 Preview Rendering', () => {
  test('should render unit 1 preview without hydration errors', async ({ page }) => {
    const logs: string[] = [];
    page.on('console', msg => {
      if (msg.type() === 'error') {
        logs.push(msg.text());
      }
    });

    await page.goto('http://127.0.0.1:5436/debug/a1-preview/unit-1');
    
    // Wait for the main content to load
    await expect(page.getByText('Cargando Unidad')).not.toBeVisible({ timeout: 10000 });
    
    // Check for unit title
    await expect(page.getByText('Review: Unidad 1')).toBeVisible();
    
    // Check for exercise renderer content
    await expect(page.locator('main')).toContainText('Hello World!');
    
    // Verify no hydration errors
    const hydrationErrors = logs.filter(log => log.includes('Hydration') || log.includes('descendant') || log.includes('contain a nested'));
    expect(hydrationErrors).toHaveLength(0);
  });

  test('should allow interaction with multiple choice exercise', async ({ page }) => {
    await page.goto('http://127.0.0.1:5436/debug/a1-preview/unit-1');
    await expect(page.getByText('Cargando Unidad')).not.toBeVisible();
    
    // Find an option and click it
    const option = page.locator('button').filter({ hasText: 'Good morning' }).first();
    await option.click();
    
    // Check if it's selected (it should have orange border/bg classes)
    await expect(option).toHaveClass(/border-orange-500|bg-orange-50/);
    
    // Click verify
    const verifyButton = page.getByRole('button', { name: /Verificar Respuesta/i });
    await verifyButton.click();
    
    // Check for feedback (using first() to avoid strict mode violation if multiple elements match)
    await expect(page.getByText(/¡Excelente!|Respuesta correcta/i).first()).toBeVisible();
  });
});
