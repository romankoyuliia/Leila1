import { Before, After, BeforeAll, AfterAll } from "@cucumber/cucumber";
import { 
    type Browser,
    type BrowserContext,
    type Page,
    chromium,
} from "playwright";
import { initializePageFixture, pageFixture } from "./pageFixture";

let browser: Browser;
let context: BrowserContext;
let page: Page;

BeforeAll(async () => {
browser = await chromium.launch({headless: false});
});

Before(async () => {
context = await browser.newContext({ viewport: { width: 1200, height: 1080 } });
pageFixture.page = await context.newPage();
await initializePageFixture()
});

After(async () => {
await pageFixture.page.close()
await context.close();
});

AfterAll(async () => {
await browser.close();
});



