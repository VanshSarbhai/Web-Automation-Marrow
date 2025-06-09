const { test, expect } = require('@playwright/test');

test.use({ browserName: 'chromium', channel: 'chrome' });

test.describe('Marrow Website Automation Flow', () => {
  test('Homepage should load correctly', async ({ page }) => {
    await page.goto('https://www.marrow.com');
    await expect(page).toHaveTitle(/Marrow/);
  });

  test('Login with Google (manual step)', async ({ page }) => {
    await page.goto('https://www.marrow.com');
    await page.getByRole('button', { name: /Login \/ Signup/i }).click();
    await page.getByRole('button', { name: /Sign in with Google/i }).click();
    console.log('>> Please complete Google login manually and press Enter to continue.');
    await page.pause(); // Allow manual login
    await expect(page).toHaveURL(/dashboard|home/); // Rough check after login
  });

  test('Access QBank and open Anatomy subject', async ({ page }) => {
    await page.goto('https://www.marrow.com');
    await page.getByText('QBank').click();
    await page.getByText('Anatomy', { exact: true }).click();
    await expect(page).toHaveURL(/qbank/);
  });

  test('Navigate to Vertebral Column topic', async ({ page }) => {
    await page.goto('https://www.marrow.com');
    await page.getByText('QBank').click();
    await page.getByText('Anatomy', { exact: true }).click();
    await page.waitForSelector('text=Vertebral Column');
    await page.getByText('Vertebral Column').click();
    await expect(page.locator('h1')).toContainText('Vertebral Column');
  });

  test('Logout from Marrow', async ({ page }) => {
    await page.goto('https://www.marrow.com');
    await page.getByRole('button', { name: /Profile/i }).click();
    await page.getByRole('menuitem', { name: /Logout/i }).click();
    await expect(page).toHaveURL(/login/);
  });

  test('Validate Course Page in New Tab', async ({ context, page }) => {
    await page.goto('https://www.marrow.com');
    const [newPage] = await Promise.all([
      context.waitForEvent('page'),
      page.getByText('First-year MBBS').click()
    ]);
    await newPage.waitForLoadState();
    await expect(newPage).toHaveTitle(/First-year MBBS/);
    await expect(newPage).toHaveURL(/first-year-mbbs/);
  });
});
