import { Given, Then, When } from "@cucumber/cucumber";
import { expect } from "@playwright/test";
import { LoginPage } from "../_pages/LoginPage";
import { pageFixture } from "../../../../utils/pageFixture";

Given("I navigate to Leila1 login page", 
     { timeout: 20000 },
async ():Promise<void> => {
    await pageFixture.page.goto("http://lac-phpapp-s01.dc.lac.internal/php/baseoffice",{waitUntil: "domcontentloaded"});
});

When("I fill in the login form with valid credentials",
    { timeout: 10000 },
async () => {
    await pageFixture.loginPage.login("y06437", "Trubadurmiykit_2306");
    });

When("I submit the login form",
    { timeout: 10000 },
async () => {
    await pageFixture.loginPage.submitButtonLocator.click();
    await expect(pageFixture.page.getByRole("link", {name: "Benutzerinformationen"})).toBeTruthy();
});

Then("I should see the Leila1 menu",
    { timeout: 10000 },
async () => {
    await pageFixture.page.waitForTimeout(5000) //debug
    await expect(pageFixture.page).toHaveTitle("Cobra - lac-phpapp-s01.dc.lac.internal");
});