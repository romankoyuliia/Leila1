import { Given, Then, When } from "@cucumber/cucumber";
import { expect } from "@playwright/test";
import { pageFixture } from "../../../../utils/pageFixture";

const STEP_TIMEOUT = 100000;
const RESPONSE_TIMEOUT = 6000;

Given("I click at new customer",
 { timeout: STEP_TIMEOUT },
 async function () {
 const { page, customerPage } = pageFixture;
 const iframe = page!.frameLocator('iframe[src*="/php/autohausoffice"]');
 const newCustomer = iframe.getByRole('link', { name: 'Kunde', exact: true }).click();
 await page!.waitForTimeout(RESPONSE_TIMEOUT);
 timeout: RESPONSE_TIMEOUT;
 });
 
 When("I fill in private customer form",
    { timeout: STEP_TIMEOUT },
async () => {
const { page } = pageFixture;
const iframe = page!.frameLocator('iframe[src*="/php/autohausoffice"]');
const salutationData = iframe.getByRole('group', { name: 'Daten' }).getByLabel('Anrede Herr Frau No salutation').selectOption('2');
await page!.waitForTimeout(RESPONSE_TIMEOUT);
const customerName = iframe.locator('input[name="contactfirstname"]').fill('Test', { timeout: 6000 });
await page!.waitForTimeout(RESPONSE_TIMEOUT);
const customerSurname = iframe.locator('input[name="contactlastname"]').fill('Test', { timeout: 6000 });
await page!.waitForTimeout(RESPONSE_TIMEOUT);
const birthDay = page!.getByRole('textbox', { name: 'Geburtsdatum' }).click();
await page!.waitForTimeout(RESPONSE_TIMEOUT);
const customerBirthDay = iframe.getByRole('textbox', { name: 'Geburtsdatum' }).fill('01.12.2005', { timeout: 6000 });
await page!.waitForTimeout(RESPONSE_TIMEOUT);
const customerTelephone = iframe.locator('input[name="contactphone"]').fill('0684662117', { timeout: 6000 });
await page!.waitForTimeout(RESPONSE_TIMEOUT);
const customerEmail = iframe.locator('input[name="contactmail"]').fill('yuliia.romanko@allane.com', { timeout: 6000 });
await page!.waitForTimeout(RESPONSE_TIMEOUT);
const customerStreet = iframe.locator('input[name="street"]').fill('X-MANUALTEST-HAPPYPATH', { timeout: 6000 });
await page!.waitForTimeout(RESPONSE_TIMEOUT);
const streetNumber = iframe.locator('input[name="streetno"]').fill('3');
await page!.waitForTimeout(RESPONSE_TIMEOUT);
const customerPostcode = iframe.locator('input[name="zipcode"]').fill('04105', { timeout: 6000 });
await page!.waitForTimeout(RESPONSE_TIMEOUT);
const customerCity = iframe.locator('input[name="lccity_id"]').fill('Test', { timeout: 6000 });
await page!.waitForTimeout(RESPONSE_TIMEOUT);
const coutry = iframe.getByRole('group', { name: 'Addresse' }).getByLabel('Deutschland').selectOption('25');
await page!.waitForTimeout(RESPONSE_TIMEOUT);
const accountOwner = iframe.locator('input[name="accountholder"]').fill('Yuliia Romanko', { timeout: 6000 });
await page!.waitForTimeout(RESPONSE_TIMEOUT);
const customerIBAN = iframe.locator('input[name="iban"]').fill('DE12500105170648489890', { timeout: 6000 });
await page!.waitForTimeout(RESPONSE_TIMEOUT);
const customerBIC = iframe.locator('input[name="bic"]').fill('INGDDEFFXXX', { timeout: 6000 });
await page!.waitForTimeout(RESPONSE_TIMEOUT);
});

Then("I save the changes",
   { timeout: STEP_TIMEOUT },
async () => {
const { page } = pageFixture;
const iframe = page!.frameLocator('iframe[src*="/php/autohausoffice"]');
await page!.waitForTimeout(RESPONSE_TIMEOUT);
const saveButton = iframe.getByRole('button', { name: 'Speichern' }).click();
await page!.waitForTimeout(RESPONSE_TIMEOUT);
});
