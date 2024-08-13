import { test as baseTest, expect, BrowserContext, Page} from '@playwright/test';
// Extend the base test with our custom fixtures
type Fixtures = {
  context: BrowserContext;
  page: Page;
};
const test = baseTest.extend<Fixtures>({
  context: async ({ browser }, use) => {
    // Set up context
    const context = await browser.newContext();
    await use(context);
    // Tear down context
    await context.close();
  },
  page: async ({ context }, use) => {
    // Set up page
    const page = await context.newPage();
    await use(page);
    // Tear down page
    await page.close();
  }
});
export { test, expect };