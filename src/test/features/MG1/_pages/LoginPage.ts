import { pageFixture } from "../../../../utils/pageFixture";
import { Locator, Page } from "@playwright/test";

export class LoginPage {
  private getPage(): Page {
    if (!pageFixture.page) {
      throw new Error("Page is not initialized in pageFixture");
    }
    return pageFixture.page;
  }

  get usernameLocator(): Locator {
    return this.getPage().locator("#uid");
  }

  get passwordLocator(): Locator {
    return this.getPage().locator("#pwd");
  }

  get submitButtonLocator(): Locator {
    return this.getPage().getByRole("button", { name: "OK" });
  }

  async login(username: string, password: string): Promise<void> {
    await this.usernameLocator.fill(username);
    await this.passwordLocator.fill(password);
  }
}