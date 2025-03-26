import { Given, Then, When } from "@cucumber/cucumber";
import { expect } from "@playwright/test";
import { pageFixture } from "../../../../utils/pageFixture";

Given("I navigate to Leila1 login page",
  { timeout: 50000 },
  async function(this: any): Promise<void> {
    await this.pageFixture.page?.goto("http://lac-phpapp-s01.dc.lac.internal/php/baseoffice/home", { waitUntil: "domcontentloaded" });
  }
);

When("I fill in the login form with valid credentials",
  { timeout: 50000 },
  async () => {
   await pageFixture.loginPage?.login("lacqa", "zVTa18u7zk%4eQrm8R4x");
  }
);

When("I submit the login form",
  { timeout: 50000 },
  async () => {
    await pageFixture.loginPage?.submitButtonLocator.click();
    expect(pageFixture.page?.getByRole("link", { name: "Benutzerinformationen" })).toBeTruthy();
  }
);

Then("I should see the Leila1 menu", 
  { timeout: 50000},
  async () => {
   expect(pageFixture.page?.title()).resolves.toBe("Cobra - lac-phpapp-s01.dc.lac.internal")
 }
);