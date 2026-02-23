import { test, expect } from '@playwright/test';

test.describe('Platform Simplification & A1 Relocation Verification', () => {
  // Use port 5436 as found in the ps aux output
  const baseURL = 'http://localhost:5436';

  test('home page should have link to curso-a1/outline', async ({ page }) => {
    await page.goto(baseURL);
    await page.waitForLoadState('domcontentloaded');
    
    // Check for the "Ver nivel A1 →" link
    const a1Link = page.getByRole('link', { name: /Ver nivel A1/i });
    await expect(a1Link).toBeVisible();
    await expect(a1Link).toHaveAttribute('href', '/curso-a1/outline');
  });

  test('old routes should return 404', async ({ page }) => {
    const oldRoutes = [
      '/dashboard',
      '/profile',
      '/practica-ia',
      '/practica-inteligente',
      '/aula',
      '/debug/a1-preview'
    ];

    for (const route of oldRoutes) {
      const response = await page.goto(`${baseURL}${route}`);
      // In Next.js, if it's a 404 page, the status should be 404
      expect(response?.status()).toBe(404);
    }
  });

  test('curso-a1 routes should redirect anonymous users to login', async ({ page }) => {
    const protectedRoutes = [
      '/curso-a1',
      '/curso-a1/outline',
      '/curso-a1/unit-1'
    ];

    for (const route of protectedRoutes) {
      await page.goto(`${baseURL}${route}`);
      await page.waitForURL(/\/cuenta\/login/);
      expect(page.url()).toContain('/cuenta/login');
      expect(page.url()).toContain(`next=${encodeURIComponent(route)}`);
    }
  });
});
