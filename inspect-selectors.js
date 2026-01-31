const { chromium } = require('@playwright/test');

(async () => {
  const browser = await chromium.launch({ headless: false, slowMo: 500 });
  const page = await browser.newPage();
  
  await page.goto('https://www.swifttranslator.com/');
  await page.waitForLoadState('networkidle');
  await page.waitForTimeout(1000);
  
  console.log('\n=== Typing test input ===');
  const inputField = page.locator('textarea[placeholder*="Input Your Singlish"]');
  await inputField.fill('mama gedhara yanavaa');
  await page.waitForTimeout(2000);
  
  console.log('\n=== Finding output element (Method 1: div.card p-4) ===');
  const outputDiv1 = page.locator('div.card.p-4.flex.flex-col.flex-1');
  console.log('Count:', await outputDiv1.count());
  if (await outputDiv1.count() > 0) {
    const text = await outputDiv1.textContent();
    console.log('Text:', text);
    
    // Try to get just the Sinhala text without the label
    const textWithoutLabel = text.replace('Sinhala', '').trim();
    console.log('Sinhala output only:', textWithoutLabel);
  }
  
  console.log('\n=== Finding output element (Method 2: Look for div after "Sinhala" text) ===');
  // The output should be in a div after the Sinhala label
  const sinhalaContainer = page.locator('div.card:has-text("Sinhala")').filter({ hasNot: page.locator('select') });
  console.log('Sinhala container count:', await sinhalaContainer.count());
  if (await sinhalaContainer.count() > 0) {
    const text = await sinhalaContainer.first().textContent();
    console.log('Container text:', text);
  }
  
  console.log('\n=== Method 3: Look for the actual output div ===');
  // Find the div that contains only Sinhala text (after the label)
  const allDivs = await page.locator('div').all();
  for (let i = 0; i < allDivs.length; i++) {
    const text = await allDivs[i].textContent();
    if (text.trim() === 'මම ගෙදර යනවා') {
      const attrs = await allDivs[i].evaluate(el => ({
        id: el.id,
        class: el.className,
        tagName: el.tagName
      }));
      console.log('✓ Pure output div:', attrs);
      console.log('  Text:', text);
    }
  }
  
  console.log('\n===Recommended Selectors ===');
  console.log('Input: textarea[placeholder*="Input Your Singlish"]');
  console.log('Output: div.card.p-4 or check if there is a specific div inside');
  
  console.log('\n=== Waiting 15 seconds ===');
  await page.waitForTimeout(15000);
  
  await browser.close();
})();
