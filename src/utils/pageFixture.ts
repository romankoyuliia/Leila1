import type { Page } from "@playwright/test";
import { LoginPage } from "../test/features/MG1/_pages/LoginPage";
import { LandingPage } from "../test/features/MG1/_pages/LandingPage";
import { PrivateCustomerPage } from "../test/features/MG1/_pages/PrivateCustomerPage";
import { PrivateleadCreationPage } from "../test/features/MG1/_pages/PrivateleadCreationPage";
import { BusinessleadCreationPage } from "../test/features/MG1/_pages/BusinessleadCreationPage";


interface PageFixture {
    page: Page | null;
    data: Record<string, string | null>;
    _leadID: string | null;
    _serviceProducts: string[] | null;
    _accessories: string[] | null;
    loginPage: LoginPage | null;
    landingPage: LandingPage | null;
    customerPage: PrivateCustomerPage | null;
    privateleadcreationPage: PrivateleadCreationPage | null;
    businessleadcreationPage: BusinessleadCreationPage | null;
   
}

export const pageFixture: PageFixture = {
    page: null,
    data: {},
    _leadID: null,
    _serviceProducts: null,
    _accessories: null,
    loginPage: null,
    landingPage: null,
    customerPage: null,
    privateleadcreationPage: null,
    businessleadcreationPage: null,
};

export const initializePageFixture = (page: Page): void => {
  pageFixture.page = page;
  pageFixture.loginPage = new LoginPage();
  pageFixture.landingPage = new LandingPage();
  pageFixture.customerPage = new PrivateCustomerPage();
  pageFixture.privateleadcreationPage = new PrivateleadCreationPage();
  pageFixture.businessleadcreationPage = new BusinessleadCreationPage();
};