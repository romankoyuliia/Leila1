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

When("I click on Navigation menu",
  { timeout: 50000 },
  async () => {
   const frames = await pageFixture.page?.frames();
   console.log(frames)
   const iframe=pageFixture.page?.frameLocator('iframe[src*="/php/autohausoffice/ah14"]')
   const navmanu = iframe?.locator('.nav-main')
   return await navmanu?.click()
   }
);
 
Then ("I should wait",
  { timeout: 50000 },
  async function(this: any): Promise<void> { 
    await this.pageFixture.page.waitForTimeout(5000)
  } 
)
