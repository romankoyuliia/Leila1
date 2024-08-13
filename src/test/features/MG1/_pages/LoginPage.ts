import { pageFixture } from "../../../../utils/pageFixture" 

export class LoginPage {
    get usernameLocator() {
        return pageFixture.page.locator("#uid")
    }
    
    get passwordLocator() {
        return pageFixture.page.locator("#pwd")
    }

    get submitButtonLocator() {
        return pageFixture.page.getByRole("button", { name: "OK"})
    }

    async login(username: string, password: string) {
        await this.usernameLocator.fill(username)
        await this.passwordLocator.fill(password)
    }
}
