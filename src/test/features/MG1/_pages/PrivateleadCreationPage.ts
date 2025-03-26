import { pageFixture } from "../../../../utils/pageFixture";
import { Locator, Page } from "@playwright/test";

export class PrivateleadCreationPage {

private getPage(): Page {

    if (!pageFixture.page) {
        throw new Error("Page is not initialized in pageFixture");
    }
        return pageFixture.page;
    }

  get newCustomer(): Locator {
    return this.getPage().locator(".button mts");
  }

  get helferliFile(): Locator {
    return this.getPage().locator('text="Helferli"');
 }

 get navigationMenu(): Locator {
    return this.getPage().locator(".nav-main");
}

get searchMenu(): Locator {
    return this.getPage().locator(".tableStyle");
}
}