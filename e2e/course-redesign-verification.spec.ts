import { test, expect } from '@playwright/test';

test.describe('Course Redesign Verification (A1 & A2)', () => {
  test('A1 Unit 1 should load exercises and show translations', async ({ page }) => {
    await page.goto('/debug/a1-preview/unit-1');
    await page.waitForLoadState('networkidle');
    
    // Check if the page title is correct (A1 uses "Review")
    await expect(page.locator('h1')).toContainText('Review: Unidad 1');
    
    // Verify first exercise (Flashcard) is visible
    await expect(page.locator('text=Vocabulario Clave').first()).toBeVisible();
    
    // Verify translation system (dotted underline)
    const translationElement = page.locator('span.border-dotted').first();
    await expect(translationElement).toBeVisible();
  });

  test('A2 Unit 1 should load exercises and show translations', async ({ page }) => {
    await page.goto('/debug/a2-preview/unit-1');
    await page.waitForLoadState('networkidle');
    
    // Check if the page title is correct (A2 uses "A2 Preview")
    await expect(page.locator('h1')).toContainText('A2 Preview: Unidad 1');
    
    // Verify first exercise (Flashcard) is visible
    await expect(page.locator('text=Vocabulario Clave').first()).toBeVisible();
    
    // Verify translation system
    const translationElement = page.locator('span.border-dotted').first();
    await expect(translationElement).toBeVisible();
  });
});
