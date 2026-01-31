# Test Automation Summary

## Student Information
- **Name:** DHARMASIRI. A. W . L . I
- **Registration Number:** IT23829442
- **Website Under Test:** https://www.swifttranslator.com/

---

## Test Suite Overview

### 1. Positive Functional Tests (24 Test Cases)
**File:** `tests/positive-functional.spec.js`

Tests validate successful Singlish to Sinhala translation with personal and contextual data:

| Test ID | Description | Input Example |
|---------|-------------|---------------|
| Pos_Fun_001 | Personal name translation | mage nama lahindu ishan darmasiri |
| Pos_Fun_002 | Hometown translation | mage gama godakawela |
| Pos_Fun_003 | School name translation | mama giye r/rahula jathika pasalatayi |
| Pos_Fun_004 | A/L stream translation | mama A/L kare tech walin |
| Pos_Fun_005 | Vehicle ownership | mata bike ekak thiyenawa |
| Pos_Fun_006 | Bike model | eka star sport 2007 warge ekak |
| Pos_Fun_007 | Mother's name | ammage nama chamari irosha |
| Pos_Fun_008 | Father's name | thaththage nama wasantha darmasiri |
| Pos_Fun_009 | Siblings count | mata mallila dennek innawa |
| Pos_Fun_010 | Elder brother's name | loku malli thushan kavishka |
| Pos_Fun_011 | Younger brother's name | podi malli kavindu navod |
| Pos_Fun_012 | Workplace | mama vada karanne express net cafe kade |
| Pos_Fun_013 | Shop type | eka phone repair shop ekak |
| Pos_Fun_014 | Daily routine | mama udeema vadaata yanawa |
| Pos_Fun_015 | Food preference | mata ada bath oonee |
| Pos_Fun_016 | Question | oyaata kohomadha? |
| Pos_Fun_017 | Help request | mata help ekak karanna puLuvandha? |
| Pos_Fun_018 | Future plan | mama heta colombo yanawa |
| Pos_Fun_019 | Past action | mama eelaye bike eka hadhuwa |
| Pos_Fun_020 | Negative statement | mama ada vadaata yanne naee |
| Pos_Fun_021 | Complex sentence | mama bike eken awa eth dan wahinawa |
| Pos_Fun_022 | Shop status question | shop eka wahala dhaa? |
| Pos_Fun_023 | Instruction | methana text eka type karanna |
| Pos_Fun_024 | Collective action | api apema weda tika karagamu |

---

### 2. Negative Functional Tests (10 Test Cases)
**File:** `tests/negative-functional.spec.js`

Tests validate edge cases and boundary conditions:

| Test ID | Description | Expected Behavior |
|---------|-------------|-------------------|
| Neg_Fun_001 | Compressed text without spacing | Error or Incorrect transliteration |
| Neg_Fun_002 | Special symbols handling | Symbols handling issue |
| Neg_Fun_003 | Numeric values conversion | Numbers conversion |
| Neg_Fun_004 | Slang expression recognition | Slang Recognition |
| Neg_Fun_005 | Extended vowel handling | Long vowel handling |
| Neg_Fun_006 | Excessive punctuation | Punctuation overload |
| Neg_Fun_007 | Mixed language input | Mixed language confusion |
| Neg_Fun_008 | Currency symbol handling | Currency symbol handling |
| Neg_Fun_009 | Long text stress test | Length Stress Test |
| Neg_Fun_010 | Excessive spacing | Space formatting issue |

---

### 3. UI Tests (1 Test Case)
**File:** `tests/ui-test.spec.js`

Tests validate user interface functionality:

| Test ID | Description | Expected Behavior |
|---------|-------------|-------------------|
| Pos_UI_001 | Clear button functionality | Input/output fields cleared successfully |

---

## Test Naming Convention

- **Pos_Fun_XXX**: Positive Functional Test Cases
- **Neg_Fun_XXX**: Negative Functional Test Cases
- **Pos_UI_XXX**: Positive UI Test Cases

---

## Technical Details

### Selectors Used
- **Input Field:** `#textarea`
- **Output Field:** `#translation-output`

### Test Configuration
- **Browser:** Chromium (Desktop Chrome)
- **Viewport:** 1280 x 720
- **Parallel Execution:** Disabled (workers: 1)
- **Screenshots:** Enabled on failure
- **Video Recording:** Enabled
- **Action Timeout:** 15 seconds
- **Navigation Timeout:** 30 seconds

---

## Running the Tests

```bash
# Run all tests
npx playwright test

# Run specific test file
npx playwright test tests/positive-functional.spec.js
npx playwright test tests/negative-functional.spec.js
npx playwright test tests/ui-test.spec.js

# View test report
npx playwright show-report
```

---

## Total Test Count
- **Positive Functional:** 24 tests
- **Negative Functional:** 10 tests
- **UI Tests:** 1 test
- **TOTAL:** 35 test cases

---

**Date:** January 31, 2026
**Framework:** Playwright
**Language:** JavaScript (Node.js)
