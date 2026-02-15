const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.goto('http://127.0.0.1:5436/debug/a1-preview/unit-4');
  
  // Wait for content to load
  await page.waitForSelector('h1');
  
  // Take screenshot of first exercise
  await page.screenshot({ path: 'unit-4-ex-1.png' });
  
  // Find the text "Ejercicio 1 de 60"
  const title = await page.textContent('h1');
  console.log('Title:', title);
  
  // Navigate to exercise 51
  for (let i = 0; i < 50; i++) {
    await page.click('button:has(.lucide-arrow-right)');
  }
  
  // Wait a bit for transition
  await page.waitForTimeout(500);
  await page.screenshot({ path: 'unit-4-ex-51.png' });
  
  // Navigate to exercise 60
  for (let i = 0; i < 9; i++) {
    await page.click('button:has(.lucide-arrow-right)');
  }
  
  await page.waitForTimeout(500);
  await page.screenshot({ path: 'unit-4-ex-60.png' });
  
  const finalTitle = await page.textContent('h1');
  console.log('Final Title:', finalTitle);

  await browser.close();
})();
