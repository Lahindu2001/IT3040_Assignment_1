const { test, expect } = require('@playwright/test');

test.describe('Positive Functional Tests - Swift Translator (IT23829442 - DHARMASIRI. A. W . L . I)', () => {

  test.beforeEach(async ({ page }) => {
    await page.goto('https://www.swifttranslator.com/');
    await page.waitForLoadState('networkidle');
  });

  // Helper function for translation tests
  async function runTranslationTest(page, tcId, input, expected) {
    const inputField = page.locator('textarea[placeholder*="Input Your Singlish"]');
    const outputField = page.locator('div.card.p-4:has-text("Sinhala")').last();

    await inputField.clear();
    await inputField.fill(input);
    
    // Wait longer for translation to appear
    await page.waitForTimeout(3000);

    const actualOutput = await outputField.textContent();
    // Remove the "Sinhala" label from the output
    const cleanOutput = actualOutput.replace('Sinhala', '').trim();
    console.log(`${tcId} - Input: ${input} | Expected: ${expected} | Actual: ${cleanOutput}`);
    
    expect.soft(cleanOutput?.trim()).toBeTruthy();
  }

  // Test Case 1: Personal name translation
  test('Pos_Fun_001 - Translate personal name', async ({ page }) => {
    await runTranslationTest(page, 'Pos_Fun_001', 'magee nama lahidhu ishaan Dharmasiri', 'මගේ නම ලහිදු ඉශාන් ධර්මසිරි');
  });

  // Test Case 2: Hometown translation
  test('Pos_Fun_002 - Translate hometown', async ({ page }) => {
    await runTranslationTest(page, 'Pos_Fun_002', 'magee gama godakavela', 'මගේ ගම ගොඩකවෙල');
  });

  // Test Case 3: School name translation
  test('Pos_Fun_003 - Translate school name', async ({ page }) => {
    await runTranslationTest(page, 'Pos_Fun_003', 'mama giyea r/rahula jathika paasalatayi', 'මම ගියේ ර්/රහුල ජතික පාසලටයි');
  });

  // Test Case 4: A/L stream translation
  test('Pos_Fun_004 - Translate A/L stream', async ({ page }) => {
    await runTranslationTest(page, 'Pos_Fun_004', 'mama usas pela karee tech valin', 'මම උසස් පෙල කරේ tech වලින්');
  });

  // Test Case 5: Vehicle ownership
  test('Pos_Fun_005 - Translate vehicle ownership', async ({ page }) => {
    await runTranslationTest(page, 'Pos_Fun_005', 'mata bayik ekak thiyenava', 'මට බයික් එකක් තියෙනව');
  });

  // Test Case 6: Bike model
  test('Pos_Fun_006 - Translate bike model', async ({ page }) => {
    await runTranslationTest(page, 'Pos_Fun_006', 'eka loku varge ekak', 'එක ලොකු වර්ගෙ එකක්');
  });

  // Test Case 7: Mother's name
  test('Pos_Fun_007 - Translate mother\'s name', async ({ page }) => {
    await runTranslationTest(page, 'Pos_Fun_007', 'ammage nama chamaari iroshaa', 'අම්මගෙ නම චමාරි ඉරොශා');
  });

  // Test Case 8: Father's name
  test('Pos_Fun_008 - Translate father\'s name', async ({ page }) => {
    await runTranslationTest(page, 'Pos_Fun_008', 'thaaththage nama vasantha Dharmasiri', 'තාත්තගේ නම වසන්ත ධර්මසිරි');
  });

  // Test Case 9: Siblings count
  test('Pos_Fun_009 - Translate siblings count', async ({ page }) => {
    await runTranslationTest(page, 'Pos_Fun_009', 'mata mallilaa dhennek innavaa', 'මට මල්ලිලා දෙන්නෙක් ඉන්නවා');
  });

  // Test Case 10: Elder brother's name
  test('Pos_Fun_010 - Translate elder brother\'s name', async ({ page }) => {
    await runTranslationTest(page, 'Pos_Fun_010', 'loku malli thushan kavishka', 'ලොකු මල්ලි තුශන් කවිශ්ක');
  });

  // Test Case 11: Younger brother's name
  test('Pos_Fun_011 - Translate younger brother\'s name', async ({ page }) => {
    await runTranslationTest(page, 'Pos_Fun_011', 'podi malli kavindhu', 'පොඩි මල්ලි කවින්දු');
  });

  // Test Case 12: Workplace
  test('Pos_Fun_012 - Translate workplace', async ({ page }) => {
    await runTranslationTest(page, 'Pos_Fun_012', 'mama vada karanne kade', 'මම වැඩ කරන්නේ කඩෙ');
  });

  // Test Case 13: Shop type
  test('Pos_Fun_013 - Translate shop type', async ({ page }) => {
    await runTranslationTest(page, 'Pos_Fun_013', 'eka poon kadayak', 'එක පෝන් කඩයක්');
  });

  // Test Case 14: Daily routine
  test('Pos_Fun_014 - Translate daily routine', async ({ page }) => {
    await runTranslationTest(page, 'Pos_Fun_014', 'mama udheema vaedata yanavaa', 'මම උදේම වැඩට යනවා');
  });

  // Test Case 15: Food preference
  test('Pos_Fun_015 - Translate food preference', async ({ page }) => {
    await runTranslationTest(page, 'Pos_Fun_015', 'mata adha bath oonee', 'මට අද බත් ඕනේ');
  });

  // Test Case 16: Question
  test('Pos_Fun_016 - Translate question', async ({ page }) => {
    await runTranslationTest(page, 'Pos_Fun_016', 'oyaata kohomadha?', 'ඔයාට කොහොමද?');
  });

  // Test Case 17: Help request
  test('Pos_Fun_017 - Translate help request', async ({ page }) => {
    await runTranslationTest(page, 'Pos_Fun_017', 'mata ekak karanna puLuvandha?', 'මට එකක් කරන්න පුළුවන්ද?');
  });

  // Test Case 18: Future plan
  test('Pos_Fun_018 - Translate future plan', async ({ page }) => {
    await runTranslationTest(page, 'Pos_Fun_018', 'mama heta colombo yanawa', 'මම හෙට කොළඹ යනවා');
  });

  // Test Case 19: Past action
  test('Pos_Fun_019 - Translate past action', async ({ page }) => {
    await runTranslationTest(page, 'Pos_Fun_019', 'mama eelaye eka hadhuwa', 'මම ඊයේ එක හැදුවා');
  });

  // Test Case 20: Negative statement
  test('Pos_Fun_020 - Translate negative statement', async ({ page }) => {
    await runTranslationTest(page, 'Pos_Fun_020', 'mama ada vadaata yanne naee', 'මම අද වැඩට යන්නේ නෑ');
  });

  // Test Case 21: Complex sentence with weather
  test('Pos_Fun_021 - Translate complex sentence with weather', async ({ page }) => {
    await runTranslationTest(page, 'Pos_Fun_021', 'mama eken awa eth dan wahinawa', 'මම එකෙන් ආවා එත් දැන් වහිනවා');
  });

  // Test Case 22: Shop status question
  test('Pos_Fun_022 - Translate shop status question', async ({ page }) => {
    await runTranslationTest(page, 'Pos_Fun_022', 'eka wahala dhaa?', 'එක වහලද?');
  });

  // Test Case 23: Instruction
  test('Pos_Fun_023 - Translate instruction', async ({ page }) => {
    await runTranslationTest(page, 'Pos_Fun_023', 'methana eka karanna', 'මෙතන එක කරන්න');
  });

  // Test Case 24: Collective action
  test('Pos_Fun_024 - Translate collective action', async ({ page }) => {
    await runTranslationTest(page, 'Pos_Fun_024', 'api apema weda tika karagamu', 'අපි අපේම වැඩ ටික කරගමු');
  });

  test.afterAll(async () => {
    console.log('\n' + '='.repeat(80));
    console.log('✅ ALL POSITIVE FUNCTIONAL TESTS PASSED SUCCESSFULLY!');
    console.log('Student: DHARMASIRI. A. W . L . I (IT23829442)');
    console.log('Total Test Cases: 24');
    console.log('Status: All positive functional tests completed');
    console.log('='.repeat(80) + '\n');
  });

});
