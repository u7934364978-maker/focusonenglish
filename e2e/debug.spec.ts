import { test, expect } from '@playwright/test';

test('Debug: Check what lesson page shows', async ({ page }) => {
  await page.goto('/curso-b2/leccion/b2-m1-l7');
  await page.waitForLoadState('domcontentloaded', { timeout: 30000 });
  await page.waitForTimeout(5000);
  
  // Get all text from the page
  const bodyText = await page.textContent('body');
  console.log('=== PAGE CONTENT ===');
  console.log(bodyText);
  
  // Get all h1, h2, h3 headings
  const headings = await page.$$eval('h1, h2, h3', elements => elements.map(el => el.textContent));
  console.log('=== HEADINGS ===');
  console.log(headings);
  
  // Check if there are any inputs
  const inputs = await page.$$('input');
  console.log('=== NUMBER OF INPUTS ===');
  console.log(inputs.length);
  
  // Check if there are any exercises
  const exercises = await page.$$('[data-testid]');
  console.log('=== ELEMENTS WITH DATA-TESTID ===');
  for (const exercise of exercises) {
    const testId = await exercise.getAttribute('data-testid');
    console.log(`Found: ${testId}`);
  }
  
  // Take a screenshot
  await page.screenshot({ path: 'debug-screenshot.png', fullPage: true });
  console.log('Screenshot saved to debug-screenshot.png');
});
