import { test, expect } from '@playwright/test';

test.describe('Reading Prompt Verification', () => {
  test('Verify both stimulus and prompt are visible in multiple choice reading exercises', async ({ page }) => {
    // Navigate to the debug page
    await page.goto('http://localhost:5436/debug/premium');
    
    // Give it time to load content
    await page.waitForTimeout(3000);
    
    // Check if stimulus text is visible
    const stimulus = page.locator('text=Breakfast ends at 10:00 AM');
    await expect(stimulus).toBeVisible();
    
    // Check if the prompt (question) is visible in its highlighted box
    const prompt = page.locator('text=¿A qué hora termina el desayuno?');
    await expect(prompt).toBeVisible();
    
    // Verify prompt is in the blue highlighted box (bg-indigo-50)
    const promptContainer = page.locator('div.bg-indigo-50').filter({ hasText: '¿A qué hora termina el desayuno?' });
    await expect(promptContainer).toBeVisible();
    
    // Check if options are visible
    // Using role button or specific grid container to avoid duplication with stimulus text
    const optionsGrid = page.locator('div.grid.gap-4');
    await expect(optionsGrid.locator('text=10:00 AM')).toBeVisible();
    await expect(optionsGrid.locator('text=7:00 AM')).toBeVisible();
    await expect(optionsGrid.locator('text=12:00 PM')).toBeVisible();
  });
});
