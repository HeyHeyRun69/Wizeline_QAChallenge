import {
    loginPage,
    productsPage,
} from '../pageobjects/index'

/**
 * @author Aaron Saucedo
 * @description Script to validate login is successful
 */

describe('My Demo App - Login', () => {
    it('Navigate to login screen', async () => {
        await loginPage.selectHamburgerMenuOption('Log In')
    })

    it('Log into the app', async () => {
        await loginPage.login(process.env.USER_NAME!, process.env.PASSWORD!);
    })

    it('Login successful', async () => {
        await productsPage.isHeaderDisplayed();
    })
})
