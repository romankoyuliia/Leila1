import { Given, Then, When } from "@cucumber/cucumber";
import { expect } from "@playwright/test";
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

When("I click on Navigation menu", 
  { timeout: 50000 },
  async () => {
    await pageFixture.page?.waitForTimeout(5000)
    await pageFixture.landingPage?.navigationMenu.click({force: true});
    await pageFixture.page?.waitForTimeout(5000)
  }
);

Then("I should be trasferred to Search Menu", 
  { timeout: 50000 },
  async function(this: any): Promise<void>  {
    await  this.pageFixture.landingPage.searchMenu.toBeVisible();
  }
);