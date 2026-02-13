import { test, expect } from '@playwright/test';

test.describe('Debug Course Completion', () => {
  test.beforeEach(async ({ page }) => {
    // Mock user session for debug actions
    await page.addInitScript(() => {
      // Mock the supabase auth response
      (window as any).mockUser = { id: 'test-user-id', email: 'test@example.com' };
    });

    await page.goto('/debug/b2-preview/unit-10');
    await page.waitForLoadState('domcontentloaded');
  });

  test('should display debug panel with completion buttons', async ({ page }) => {
    const debugPanel = page.locator('span:has-text("Debug Mode")');
    await expect(debugPanel).toBeVisible();

    const completeUnitBtn = page.getByRole('button', { name: 'Completar Unidad' });
    await expect(completeUnitBtn).toBeVisible();

    const completeCourseBtn = page.getByRole('button', { name: 'Completar Curso B2' });
    await expect(completeCourseBtn).toBeVisible();
  });

  test('should show alert when completing a unit', async ({ page }) => {
    // We expect an alert when the unit is completed
    page.on('dialog', async dialog => {
      expect(dialog.message()).toContain('completed successfully');
      await dialog.dismiss();
    });

    const completeUnitBtn = page.getByRole('button', { name: 'Completar Unidad' });
    await completeUnitBtn.click();
  });

  test('should show confirmation and then success when completing full course', async ({ page }) => {
    let dialogCount = 0;
    page.on('dialog', async dialog => {
      dialogCount++;
      if (dialog.type() === 'confirm') {
        expect(dialog.message()).toContain('¿Estás seguro');
        await dialog.accept();
      } else if (dialog.type() === 'alert') {
        expect(dialog.message()).toContain('Completed');
        await dialog.accept();
      }
    });

    const completeCourseBtn = page.getByRole('button', { name: 'Completar Curso B2' });
    await completeCourseBtn.click();
    
    // Allow some time for the processing
    await page.waitForTimeout(2000);
    expect(dialogCount).toBeGreaterThanOrEqual(1);
  });
});
