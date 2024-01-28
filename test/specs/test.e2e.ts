import loginPage from "../pageobjects/login.page.ts";

describe('My Demo App - Login', () => {
    it('Navigate to login screen', async () => {
        await loginPage.selectHamburgerMenuOption('Log In')
    })

    it('Log into the app', async () => {
        await loginPage.login(process.env.USER_NAME!, process.env.PASSWORD!);
    })
})

