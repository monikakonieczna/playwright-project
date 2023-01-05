import { Browser, BrowserContext, chromium, Page, Locator, test, expect } from "@playwright/test";
import AccountPage from "../page/Account.page";
import HomePage from "../page/Home.page";
import RegistrationPage from "../page/Registration.page";

test("Negative: User tries to login without credentials.", async ({ page }) => {

    const homePage = new HomePage(page);
    await page.goto('https://parabank.parasoft.com/parabank/index.htm');
    homePage.clickLoginButon();
    expect(await page.locator("h1").textContent()).toBe("Error!");

})