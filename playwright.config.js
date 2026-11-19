// @ts-check
import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  // Where Playwright looks for test files (*.spec.js)
  testDir: './tests',

  // Each test gets 30 seconds before it fails
  timeout: 30_000,

  // HTML report you can open with: npx playwright show-report
  reporter: 'html',

  use: {
    // So we can write page.goto('/') instead of the full URL
    baseURL: 'https://practicesoftwaretesting.com',

    // Toolshop marks its elements with data-test="...".
    // This makes page.getByTestId('cart-total') look for data-test="cart-total".
    testIdAttribute: 'data-test',

    // Record a trace for every test that fails (open it in the HTML report)
    trace: 'retain-on-failure',
    screenshot: 'only-on-failure',
  },

  // For the lab we run on Chromium only (faster).
  // Uncomment the others to see cross-browser testing.
  projects: [
    { name: 'chromium', use: { ...devices['Desktop Chrome'] } },
    // { name: 'firefox', use: { ...devices['Desktop Firefox'] } },
    // { name: 'webkit', use: { ...devices['Desktop Safari'] } },
  ],
});
