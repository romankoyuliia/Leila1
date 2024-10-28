import type { Page } from "@playwright/test";
import { LoginPage } from "../test/features/MG1/_pages/LoginPage";
import { LandingPage } from "../test/features/MG1/_pages/LandingPage";

interface PageFixture {
    page: Page | null;
    data: Record<string, string | null>;
    _leadID: string | null;
    _serviceProducts: string[] | null;
    _accessories: string[] | null;
    loginPage: LoginPage | null;
    landingPage: LandingPage | null;
}

export const pageFixture: PageFixture = {
    page: null,
    data: {},
    _leadID: null,
    _serviceProducts: null,
    _accessories: null,
    loginPage: null,
    landingPage: null
};

export const initializePageFixture = (page: Page): void => {
  pageFixture.page = page;
  pageFixture.loginPage = new LoginPage();
  pageFixture.landingPage = new LandingPage();
};