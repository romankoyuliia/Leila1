import { Given, Then, When } from "@cucumber/cucumber";
import { expect } from "@playwright/test";
import { pageFixture } from "../../../../utils/pageFixture";

const STEP_TIMEOUT = 50000;
const RESPONSE_TIMEOUT = 5000;

Given("I click on the Autohaus Management folder",
 { timeout: STEP_TIMEOUT },
 async function () {
 const { landingPage } = this.pageFixture;
 await landingPage!.autohausFolder.click();
 await expect(landingPage!.helferliFile).toBeVisible({
 timeout: RESPONSE_TIMEOUT,
 });
 },
);

When("I click on Helferli file",  
  { timeout: STEP_TIMEOUT },
 async () => {
 const { page, landingPage } = pageFixture;
 const [response] = await Promise.all([
 page!.waitForResponse(
 (response) =>
 response.url().includes("/php/leaseb2c/leila/data/load") &&
 response.status() === 200,
 ),
 landingPage!.helferliFile.click(),
 ]);
expect(response.ok()).toBeTruthy();
});

When("I click on Navigation menu",
 { timeout: STEP_TIMEOUT },
 async () => {
 const { page } = pageFixture;
 const iframe = page!.frameLocator('iframe[src*="/php/autohausoffice"]');
 await iframe.locator(".nav-main").click();
 await page!.waitForTimeout(RESPONSE_TIMEOUT);
});

Then("I should be transferred to Search Menu",
  { timeout: STEP_TIMEOUT },
 async () => {
 const { page } = pageFixture;
 const iframe = page!.frameLocator('iframe[src*="/php/autohausoffice"]');
 const searchTool = iframe.getByText("Berater-Tool");
 await expect(searchTool).toBeVisible();
 const [response] = await Promise.all([
 page!.waitForResponse (
 (response) =>
 response.url().includes("/php/leaseb2c/leila/statistic/show") &&
 response.status() === 200,
 ),
 searchTool.click(),
 ]);
 expect(response.ok()).toBeTruthy();
 },
);

Then("I should wait",
   { timeout: STEP_TIMEOUT },
  async function () {
await this.pageFixture.page!.waitForTimeout(RESPONSE_TIMEOUT);
});
