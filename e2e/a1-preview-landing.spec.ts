import { test, expect } from '@playwright/test';

test.describe('A1 Course Preview Landing Page', () => {
  const baseURL = 'http://127.0.0.1:3001';

  test('should load the landing page and display all 60 units', async ({ page }) => {
    await page.goto(`${baseURL}/debug/a1-preview`);

    await expect(page.getByRole('heading', { name: /English A1 Course Preview/i })).toBeVisible();
    
    const unitCards = page.locator('[data-testid^="unit-card-"], a[href*="/debug/a1-preview/unit"]').first();
    await expect(unitCards).toBeVisible();
  });

  test('should display course statistics', async ({ page }) => {
    await page.goto(`${baseURL}/debug/a1-preview`);

    await expect(page.getByText(/60/)).toBeVisible();
    await expect(page.getByText(/Total Units/i)).toBeVisible();
    await expect(page.getByText(/Total Duration/i)).toBeVisible();
    await expect(page.getByText(/Total Exercises/i)).toBeVisible();
  });

  test('should filter units by search query', async ({ page }) => {
    await page.goto(`${baseURL}/debug/a1-preview`);

    const searchInput = page.getByPlaceholder(/search by unit number or title/i);
    await expect(searchInput).toBeVisible();
    
    await searchInput.fill('unit 1');
    
    await expect(page.getByText(/Found/i)).toBeVisible();
  });

  test('should clear search when clear button is clicked', async ({ page }) => {
    await page.goto(`${baseURL}/debug/a1-preview`);

    const searchInput = page.getByPlaceholder(/search by unit number or title/i);
    await searchInput.fill('London');
    
    const clearButton = page.getByLabel(/clear search/i);
    await expect(clearButton).toBeVisible();
    
    await clearButton.click();
    
    await expect(searchInput).toHaveValue('');
  });

  test('should navigate to unit preview when clicking unit card', async ({ page }) => {
    await page.goto(`${baseURL}/debug/a1-preview`);

    const firstUnitPreviewLink = page.locator('a[href*="/debug/a1-preview/unit"]').first();
    await expect(firstUnitPreviewLink).toBeVisible();
    
    await firstUnitPreviewLink.click();
    
    await expect(page).toHaveURL(/\/debug\/a1-preview\/unit/);
  });

  test('should show no results message when search returns no matches', async ({ page }) => {
    await page.goto(`${baseURL}/debug/a1-preview`);

    const searchInput = page.getByPlaceholder(/search by unit number or title/i);
    await searchInput.fill('nonexistent unit xyz 999');
    
    await expect(page.getByText(/No units found/i)).toBeVisible();
    await expect(page.getByText(/Try adjusting your search query/i)).toBeVisible();
  });

  test('should be responsive on mobile viewport', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto(`${baseURL}/debug/a1-preview`);

    await expect(page.getByRole('heading', { name: /English A1 Course Preview/i })).toBeVisible();
    
    const searchInput = page.getByPlaceholder(/search by unit number or title/i);
    await expect(searchInput).toBeVisible();
  });

  test('should display unit metadata correctly', async ({ page }) => {
    await page.goto(`${baseURL}/debug/a1-preview`);

    const unitCards = page.locator('[class*="bg-white"][class*="rounded"]').first();
    await expect(unitCards).toBeVisible();
    
    await expect(page.getByText(/exercises/i).first()).toBeVisible();
    await expect(page.getByText(/min/i).first()).toBeVisible();
  });
});
