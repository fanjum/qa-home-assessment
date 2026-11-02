import { test, expect } from '@playwright/test';

const BASE_URL = 'https://www.saucedemo.com/';
const USERNAME = 'standard_user';
const PASSWORD = 'secret_sauce';

const CART_LINK = '[data-test="shopping-cart-link"]';

const LOCATORS = {
  login: {
    username: '[data-test="username"]',
    password: '[data-test="password"]',
    login_button: '[data-test="login-button"]',
  },
  inventory: {
    title: '[data-test="title"]',
    item: '[data-test="inventory-item"]',
    add_backpack: '[data-test="add-to-cart-sauce-labs-backpack"]',
    remove_backpack: '[data-test="remove-sauce-labs-backpack"]',
  },
  header: {
    cart_link: CART_LINK,
    cart_badge: `${CART_LINK} [data-test="shopping-cart-badge"]`,
    menu_button: '#react-burger-menu-btn',
    logout: '[data-test="logout-sidebar-link"]',
  },
} as const;

test.describe('Saucedemo login and product add', () => {
  test('Logging into Saucedemo and add a product to cart and verify count is 1', async ({ page }) => {
    await test.step('Logs into https://www.saucedemo.com/ using standard_user.', async () => {
      await page.goto(BASE_URL);
      await page.locator(LOCATORS.login.username).fill(USERNAME);
      await page.locator(LOCATORS.login.password).fill(PASSWORD);
      await page.locator(LOCATORS.login.login_button).click();
    });

    await test.step('Verifies the inventory page loads with the expected page title/heading.', async () => {
      await expect(page).toHaveTitle('Swag Labs');
      await expect(page.locator(LOCATORS.inventory.title)).toHaveText('Products');
      await expect(page.locator(LOCATORS.inventory.item).first()).toBeVisible();
    });

    const cart_badge = page.locator(LOCATORS.header.cart_badge);

    await test.step('Adds one product to the cart and verifies the cart icon shows a count of 1.', async () => {
      await expect(cart_badge).toBeHidden();
      await page.locator(LOCATORS.inventory.add_backpack).click();
      await expect(cart_badge).toHaveText('1');
      await expect(page.locator(LOCATORS.inventory.remove_backpack)).toBeVisible();
    });

    await test.step('Log out from the application', async () => {
      await page.locator(LOCATORS.header.menu_button).click();
      await page.locator(LOCATORS.header.logout).click();
      await expect(page.locator(LOCATORS.login.login_button)).toBeVisible();
    });
  });
});