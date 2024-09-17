import { Given, Then, When } from "@cucumber/cucumber";
import { expect } from "@playwright/test";
import { pageFixture } from "../../../../utils/pageFixture";

Given("I navigate to Leila1 login page",
  { timeout: 20000 },
  async function(this: any): Promise<void> {
    await this.pageFixture.page?.goto("http://google.com", { waitUntil: "domcontentloaded" });
  }
);

When("I fill in the login form with valid credentials",
  { timeout: 10000 },
  async () => {
    await pageFixture.loginPage?.login("y06437", "Trubadurmiykit_2306");
  }
);

When("I submit the login form",
  { timeout: 10000 },
  async () => {
    await pageFixture.loginPage?.submitButtonLocator.click();
    expect(pageFixture.page?.getByRole("link", { name: "Benutzerinformationen" })).toBeTruthy();
  }
);

Then("I should see the Leila1 menu", { timeout: 1e4 }, async () => 
  expect(pageFixture.page?.title()).resolves.toBe("Cobra - lac-phpapp-s01.dc.lac.internal")
);