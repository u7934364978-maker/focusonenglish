import { test, expect } from '@playwright/test';

test.describe('Basic Navigation', () => {
  test('should load homepage', async ({ page }) => {
    await page.goto('/');
    await page.waitForLoadState('domcontentloaded');
    expect(page.url()).toContain('localhost:3001');
  });

  test('should load curso-b2 page', async ({ page }) => {
    await page.goto('/curso-b2');
    await page.waitForLoadState('domcontentloaded', { timeout: 30000 });
    
    // Check if page loaded
    const title = await page.title();
    expect(title).toBeTruthy();
  });

  test('should load lesson page', async ({ page }) => {
    await page.goto('/curso-b2/leccion/b2-m1-l7');
    
    // Wait for page to load - don't wait for networkidle as it may have ongoing requests
    await page.waitForLoadState('domcontentloaded', { timeout: 30000 });
    
    // Check if we're not on 404
    const bodyText = await page.textContent('body');
    expect(bodyText).not.toContain('Lesson Not Found');
    expect(bodyText).not.toContain('404');
  });
});
