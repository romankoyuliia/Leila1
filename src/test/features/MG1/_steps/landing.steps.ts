import { Given, Then, When } from "@cucumber/cucumber";
import { expect, Frame } from "@playwright/test";
import { pageFixture } from "../../../../utils/pageFixture";

Given("I click on the Autohaus Management folder",
  { timeout: 50000 },
  async function(this: any): Promise<void> {
    await this.pageFixture.landingPage.autohausFolder.click()
    await this.pageFixture.page.waitForTimeout(5000)
  }
);

When("I click on Helferli file",
  { timeout: 50000 },
  async () => {
    await pageFixture.landingPage?.helferliFile.click();
    await pageFixture.page?.waitForTimeout(5000)
  }
);

Then("When I should see Navigation menu", 
  { timeout: 50000 },
  async () => {
    expect(pageFixture.page?.url()).toBe("http://lac-phpapp-s01.dc.lac.internal/php/leaseb2c/leila#consultant/todo");
  }
);

When("I click on Navigation menu",
  { timeout: 50000 },
  async () => {
   const frames = await pageFixture.page?.frames();
   console.log(frames)
   const frame = pageFixture.page?.frameLocator("//iframe[contains(@src, '/php/autohausoffice')]").nth(1)
    await frame?.locator("(//nav[@class='nav-main'])[1]").click();
 }
);
 
Then("I should be trasferred to Search Menu", 
  { timeout: 50000 },
  async function(this: any): Promise<void>  {
    await  this.pageFixture.landingPage.searchMenu.toBeVisible();
  }
);

