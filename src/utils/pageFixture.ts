import type { Page } from "@playwright/test";
import { LoginPage } from "../test/features/MG1/_pages/LoginPage";

interface PageFixture {
    page: Page;
    data: Record<string, string | null>;
    _leadID: string | null;
    _serviceProducts: string[] | null;
    _accessories: string[] | null;
    loginPage: LoginPage;
    dealerPortalBaseUrl: string | null;
    backOfficeBaseUrl: string | null;
}

export const pageFixture: PageFixture = {
    page: undefined as unknown as Page,
    data: {},
    _leadID: null,
    _serviceProducts: null,
    _accessories: null,
    loginPage: undefined as unknown as LoginPage,
    dealerPortalBaseUrl: null,
    backOfficeBaseUrl: null,
};

export const initializePageFixture = (): void => {
    pageFixture.loginPage = new LoginPage();
   
};