import { pageFixture } from "../../../../utils/pageFixture";
import { Locator, Page } from "@playwright/test";

export class LandingPage {

private getPage(): Page {

    if (!pageFixture.page) {
        throw new Error("Page is not initialized in pageFixture");
    }
        return pageFixture.page;
    }

  get autohausFolder(): Locator {
    return this.getPage().locator(".x-tree-elbow-end-plus");
  }

  get helferliFile(): Locator {
    return this.getPage().locator('text="Helferli"');
 }

 get navigationMenu(): Locator {
    return this.getPage().frameLocator('[name="3000021730119345322"]').locator(".nav-main");
}

get searchMenu(): Locator {
    return this.getPage().locator(".tableStyle");
}
}