import { test, expect } from '@playwright/test';

test.describe('Unit 2 Preview Rendering', () => {
  test('should render unit 2 preview without hydration errors', async ({ page }) => {
    await page.goto('http://127.0.0.1:3001/debug/a1-preview/unit-2');
    
    // Wait for the main content to load
    await expect(page.getByText('Cargando Unidad')).not.toBeVisible({ timeout: 10000 });
    
    // Check for unit title
    await expect(page.getByText('Review: Unidad 2')).toBeVisible();
    
    // Check for exercise renderer content (Unit 2 has "Subject Pronouns")
    await expect(page.locator('main')).toContainText('Subject Pronouns');
  });
});
