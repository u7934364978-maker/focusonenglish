import { test, expect } from '@playwright/test';

test.describe('B2 Course Debug Preview', () => {
  const unitsToTest = [12, 13, 14, 15, 30];

  for (const unitId of unitsToTest) {
    test(`should load Unit ${unitId} correctly with 50 exercises`, async ({ page }) => {
      // Use the local dev server URL
      await page.goto(`http://localhost:5436/debug/b2-preview/unit-${unitId}`);
      
      // Wait for the page to load (loading state handled in the component)
      await expect(page.getByText(`B2 Preview: Unidad ${unitId}`)).toBeVisible({ timeout: 10000 });
      
      // Verify exercise count is 50
      await expect(page.getByText('Ejercicio 1 de 50')).toBeVisible();
      
      // Verify ExerciseRenderer content is present (check for some text that should be there)
      // Since it's Exercise 1, let's check for the first question's text or at least the topic
      await expect(page.getByText('Grammar')).toBeVisible();
    });
  }
});
