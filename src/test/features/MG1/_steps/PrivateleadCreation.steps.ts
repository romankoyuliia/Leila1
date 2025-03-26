import { Given, Then, When } from "@cucumber/cucumber";
import { expect } from "@playwright/test";
import { pageFixture } from "../../../../utils/pageFixture";

const STEP_TIMEOUT = 100000;
const RESPONSE_TIMEOUT = 6000;

Given("I click on the Process and insert ID",
 { timeout: STEP_TIMEOUT },
 async () => {
 const { page } = pageFixture;
 const iframe = page!.frameLocator('iframe[src*="/php/autohausoffice"]');
 const newProcess = iframe.getByRole('link', { name: 'Vorgang' }).click();
 await iframe.getByPlaceholder('Kunden-Nr / -Email / -Name').fill('1487256');
await iframe.getByRole('button', { name: 'Los' }).click();
 await page!.waitForTimeout(RESPONSE_TIMEOUT);
});

When("I choose from the dropdown lists the producer, car model, fuel type, transmission",
 { timeout: STEP_TIMEOUT },
async () => {
const { page } = pageFixture;
const iframe = page!.frameLocator('iframe[src*="/php/autohausoffice"]');
await iframe.getByLabel('Hersteller AbarthAlfa').selectOption('13');
await iframe.getByLabel('Modell 1er-Reihe2er Active').selectOption('586');
await iframe.getByLabel('Karosserie Schräghecklimousine').selectOption('HA');
await iframe.getByLabel('Kraftstoff bleifreiDiesel').selectOption('U');
await iframe.getByLabel('Getriebe').selectOption('A');
await iframe.getByLabel('Leistung 306 PS / 225 KW').selectOption('306');
await iframe.getByLabel('Modell M135i xDrive A, 5 Türen').first().selectOption('876684');
});

When("I proceed with color selecting",
    { timeout: STEP_TIMEOUT },
    async () => {
    const { page } = pageFixture;
    const iframe = page!.frameLocator('iframe[src*="/php/autohausoffice"]');
    await page!.waitForTimeout(RESPONSE_TIMEOUT);
    await iframe.getByRole('row', { name: 'I [JATOIND] BMW Individual' }).locator('i').first().scrollIntoViewIfNeeded({ timeout: 30000 });
    await page!.waitForTimeout(RESPONSE_TIMEOUT); 
    await iframe.getByRole('row', { name: 'I [JATOIND] BMW Individual' }).locator('i').first().click({ timeout: 35000 });
    await page!.waitForTimeout(RESPONSE_TIMEOUT);
    await iframe.getByRole('row', { name: 'I [P0300] Alpinweiß Uni - - 0' }).locator('i').first().scrollIntoViewIfNeeded({ timeout: 30000 });
    await iframe.getByRole('row', { name: 'I [P0300] Alpinweiß Uni - - 0' }).locator('i').first().click({ timeout: 30000 });
    await iframe.locator('#resv3').click({ timeout: 60000 });
    await page!.waitForTimeout(RESPONSE_TIMEOUT);
    await iframe.getByText('$nbsp;').scrollIntoViewIfNeeded({ timeout: 60000 });
    await iframe.getByText('$nbsp;').click();
    await iframe.locator('a.button.mll').scrollIntoViewIfNeeded({ timeout: 60000 });
    await iframe.locator('a.button.mll').click({ timeout: 60000 });
    });
    When("I click at logistics tab",
        { timeout: STEP_TIMEOUT },
        async () => {
    const { page } = pageFixture;
    const iframe = page!.frameLocator('iframe[src*="/php/autohausoffice"]');
    await page!.waitForTimeout(RESPONSE_TIMEOUT);
    await iframe.getByRole('link', { name: 'Logistik' }).click({ timeout: 60000 });
    await iframe.getByLabel('einmalig').check({ timeout: 60000 });
    await iframe.getByLabel('Händler').check({ timeout: 60000 });
    await iframe.locator('select[name="registration_through_type"]').selectOption('1');
    await iframe.locator('select[name="registration_for_type"]').selectOption('1');
    await iframe.locator('select[name="registration_partner"]').selectOption('1');
    await iframe.getByRole('link', { name: 'Kalkulation' }).click();
    await iframe.getByLabel('Vario-Leasing').check();
    await iframe.getByRole('link', { name: 'Kalkulation' }).click();
    await iframe.getByRole('button', { name: 'Prozess Aktionen' }).click();
    await iframe.getByText('Speichern', { exact: true }).click()
    const [response] = await Promise.all([ page!.waitForResponse(res => res.url().includes('leaseb2c/leila/process/save') && res.status() === 200), iframe.getByRole('button', { name: 'Prozess Aktionen' }).click() ]); expect(response.ok()).toBeTruthy();
  await iframe.getByLabel('Status neu: -- bitte wählen').selectOption('2');
  await iframe.getByRole('button', { name: 'Statusänderung speichern' }).click();
  await iframe.getByLabel('Status neu: -- bitte wählen').selectOption('3');
  await iframe.getByRole('button', { name: 'Statusänderung speichern' }).click();
  await iframe.getByLabel('Status neu: -- bitte wählen').selectOption('67');
  await iframe.getByRole('button', { name: 'Statusänderung speichern' }).click();
  await iframe.getByLabel('Status neu: -- bitte wählen').selectOption('621');
  await iframe.getByRole('button', { name: 'Statusänderung speichern' }).click();
  await iframe.getByLabel('Status neu: -- bitte wählen').selectOption('71');
  await iframe.getByRole('button', { name: 'Statusänderung speichern' }).click();
  await iframe.getByPlaceholder('Kunde: Nr. / Email / Nachname').fill('1487256');
  await iframe.locator('form[name="customer"]').getByRole('button', { name: '>>' }).click();
  await iframe.locator('div:nth-child(2) > .ui-tabPanel-body > div > .ui-grid-cont > .ui-grid > tbody > tr > td:nth-child(19)').first().click();

 });


  
    
        

        
