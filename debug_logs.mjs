
import { chromium } from 'playwright';

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  
  page.on('console', msg => {
    if (msg.text().includes('📝 Exercise content:')) {
       // Extract the object if possible or just log the whole message
       console.log(`BROWSER LOG: ${msg.text()}`);
    }
  });

  page.on('pageerror', err => {
    console.log(`BROWSER ERROR: ${err.message}`);
  });

  // Inject a script to override console.log to stringify objects
  await page.addInitScript(() => {
    const oldLog = console.log;
    console.log = (...args) => {
      oldLog(...args.map(arg => typeof arg === 'object' ? JSON.stringify(arg, null, 2) : arg));
    };
  });

  await page.goto('http://localhost:5436/debug/c1-preview/unit-1');
  await page.waitForTimeout(2000); 
  
  await browser.close();
})();
