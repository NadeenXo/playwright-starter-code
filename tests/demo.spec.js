import { test, expect } from '@playwright/test';

/*
 * USER STORY: Shopping Cart
 * As a guest shopper, I want to search for tools and add them to my cart,
 * so that I know exactly what I will pay before checkout.
 */


test.describe('Shopping Cart Tests', () => {

  test.beforeEach(async ({ page }) => {
    await page.goto('https://practicesoftwaretesting.com/');
  });

  // TC-01: Search for a product
  test('Search for pliers', async ({ page }) => {
    await page.locator('[data-test="search-query"]').fill('pliers');
    await page.locator('[data-test="search-submit"]').click();

    await expect(
      page.locator('[data-test="product-name"]')
        .filter({ hasText: /pliers/i })
        .first()
    ).toBeVisible();
  });

  // TC-02: Add a product to cart
  test('Add Combination Pliers to cart', async ({ page }) => {
    await page.locator('[data-test="search-query"]').fill('Combination Pliers');
    await page.locator('[data-test="search-submit"]').click();

    await page.locator('[data-test="product-name"]')
      .filter({ hasText: 'Combination Pliers' })
      .first()
      .click();

    await page.locator('[data-test="add-to-cart"]').click();
    await page.locator('[data-test="nav-cart"]').click();

    await expect(
      page.locator('[data-test="product-title"]')
    ).toContainText('Combination Pliers');
  });

});