
import { test, expect } from '@playwright/test';

test.describe('Shopping Cart - Exercises', () => {

  test.beforeEach(async ({ page }) => {
    await page.goto('https://practicesoftwaretesting.com/');
  });

  // TC-03: Search for a nonexistent product
  test('TC-03: No matching products', async ({ page }) => {

    // Search for "xyz123"
    // TODO: Enter the search term and click Search

    // TODO: Verify the "no products found" message

    // TODO: Verify that no product names are displayed

  });

  

  // TC-04: Out-of-stock product
  test('TC-04: Out-of-stock product', async ({ page }) => {

    // TODO: Search for and open Long Nose Pliers

    // TODO: Verify the out-of-stock message

    // TODO: Verify Add to Cart is disabled

  });

});
