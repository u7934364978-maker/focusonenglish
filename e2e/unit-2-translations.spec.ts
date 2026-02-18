import { test, expect } from '@playwright/test';

test.describe('Unit 2 Translations Verification', () => {
  test('should render translated content for unit 2', async ({ page }) => {
    // Set a very long timeout for the entire test
    test.setTimeout(120000);

    // Go to the unit 2 preview page at the specific index for Q41
    // q41 is at index 40
    console.log('Navigating to unit 2 preview at index 40...');
    await page.goto('http://127.0.0.1:3001/debug/a1-preview/unit-2?index=40', { waitUntil: 'networkidle' });
    
    // Wait for the main content to load
    console.log('Waiting for "Cargando Unidad" to disappear...');
    await expect(page.getByText(/Cargando Unidad/)).not.toBeVisible({ timeout: 60000 });
    
    // 1. Verify a grammar question translation (from q41)
    console.log('Verifying grammar question...');
    await expect(page.getByText('He is from Mexico. He is ___.').first()).toBeVisible({ timeout: 30000 });
    await expect(page.locator('span').filter({ hasText: /^Él es de México\. Él es \_\_\_\.$/ })).toBeAttached({ timeout: 30000 });

    // 2. Verify Reading Exercise Title (from reading-1)
    console.log('Navigating to index 55 for reading exercise...');
    await page.goto('http://127.0.0.1:3001/debug/a1-preview/unit-2?index=55', { waitUntil: 'networkidle' });

    console.log('Verifying reading title...');
    // We use getByText with exact: false or partial match if needed, but here we expect the component to render it
    await expect(page.getByText('Reading: Mario from Italy').first()).toBeVisible({ timeout: 30000 });
    await expect(page.locator('span').filter({ hasText: /^Lectura: Mario de Italia$/ })).toBeAttached({ timeout: 30000 });

    // 3. Verify Reading Exercise Instructions
    console.log('Verifying reading instructions...');
    await expect(page.getByText('Read and answer.').first()).toBeVisible();
    await expect(page.locator('span').filter({ hasText: /^Lee y responde\.$/ })).toBeAttached();

    // 4. Verify Reading Exercise Question (from reading-1)
    console.log('Verifying reading question...');
    // The question is nested in content.questions[0].question
    await expect(page.getByText('Where is Mario from?').first()).toBeVisible();
    await expect(page.locator('span').filter({ hasText: /^¿De dónde es Mario\?$/ })).toBeAttached();
  });
});
