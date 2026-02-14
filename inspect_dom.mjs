
import { chromium } from 'playwright';

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  
  await page.goto('http://localhost:5436/debug/c1-preview/unit-1');
  await page.waitForTimeout(3000); 

  const html = await page.evaluate(() => {
    const main = document.querySelector('main');
    return main ? main.innerHTML : 'MAIN NOT FOUND';
  });

  console.log('MAIN HTML CONTENT:');
  console.log(html);

  const classes = await page.evaluate(() => {
    const el = document.querySelector('main > div:nth-child(2)');
    return el ? el.className : 'ELEMENT NOT FOUND';
  });
  console.log('ELEMENT CLASSES:', classes);
  
  await browser.close();
})();
