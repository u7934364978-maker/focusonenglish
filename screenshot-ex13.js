const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  page.on('console', msg => console.log('PAGE LOG:', msg.text()));
  page.on('pageerror', err => console.log('PAGE ERROR:', err.message));
  await page.goto('http://127.0.0.1:5436/debug/a1-preview/unit-19');
  await page.waitForTimeout(5000);
  
  const nextButton = page.locator('nav button').last();
  for (let i = 0; i < 12; i++) {
    await nextButton.click();
    await page.waitForTimeout(500); // Wait for animation
  }
  
  await page.waitForTimeout(2000); // Final wait
  
  await page.screenshot({ path: 'unit-19-ex13.png' });
  await browser.close();
})();
