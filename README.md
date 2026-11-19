# Lab 9 – E2E Testing with Playwright

Software Construction & Testing | GIU

**Website:** https://practicesoftwaretesting.com

## Setup

Requirements: Node.js 22+ and VS Code.

```bash
git clone https://github.com/NadeenXo/playwright-starter-code.git

cd playwright-starter-code
npm install
npx playwright install chromium
```

## Project Files

- `tests/demo.spec.js` – Demo tests (TC-01 and TC-02)
- `tests/exercise.spec.js` – Student exercises (TC-03 to TC-05)

## Your Task

Complete the TODOs in `tests/exercise.spec.js` and remove `test.skip` from each test you implement.

- **TC-03:** Search for a nonexistent product.
- **TC-04:** Verify that an out-of-stock product cannot be added.
- **TC-05 Bonus:** Add multiple products and verify the total.


**Playwright documentation:** https://playwright.dev/docs/intro