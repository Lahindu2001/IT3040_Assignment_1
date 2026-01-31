const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch({ headless: false });
  const page = await browser.newPage();
  
  await page.goto('https://www.swifttranslator.com/');
  
  // Find and fill input
  const inputField = page.locator('textarea[placeholder*="Input Your Singlish"]');
  await inputField.fill('mage nama lahindu ishan darmasiri');
  
  console.log('Input filled, waiting 5 seconds...');
  await page.waitForTimeout(5000);
  
  // Get all div.card.p-4 elements
  const cards = await page.locator('div.card.p-4').all();
  console.log(`Found ${cards.length} card elements`);
  
  for (let i = 0; i < cards.length; i++) {
    const text = await cards[i].textContent();
    console.log(`Card ${i + 1}: ${text}`);
  }
  
  // Get the specific output field
  const outputField = page.locator('div.card.p-4:has-text("Sinhala")').last();
  const outputText = await outputField.textContent();
  console.log(`\nOutput field text: ${outputText}`);
  console.log(`Output has Sinhala: ${/[\u0D80-\u0DFF]/.test(outputText)}`);
  
  await page.waitForTimeout(3000);
  await browser.close();
})();
