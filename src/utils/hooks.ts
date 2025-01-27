import { Before, After, BeforeAll, AfterAll } from "@cucumber/cucumber";
import { chromium, Browser, BrowserContext } from "@playwright/test";
import { pageFixture, initializePageFixture } from "./pageFixture";

let browser: Browser;
let context: BrowserContext;
    
BeforeAll(async () => {
  console.log("BeforeAll: Launching browser");
  browser = await chromium.launch({ headless: false });
  console.log("BeforeAll: Browser launched");
});

Before(async function() {
  context = await browser.newContext({ viewport: { width: 1200, height: 1080 } });
  const page = await context.newPage();
  initializePageFixture(page);
  
  this.pageFixture = pageFixture;
});

After(async () => {
  if (pageFixture.page) {
    await pageFixture.page.close();
  }
  await context.close();
});

AfterAll(async () => {
  await browser.close();
});