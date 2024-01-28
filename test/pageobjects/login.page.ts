import { $ } from '@wdio/globals'
import Page from './page';

/**
 * Class containing elements and methods for the Login screen
 */
class LoginPage extends Page {
    /**
     * define selectors using getter methods
     */
    private get txtUsername() {
        return $('~Username input field');
    }

    private get txtPwd() {
        return $('~Password input field');
    }

    private get btnLogin() {
        return $('~Login button');
    }

    /**
     * Function to log into the application
     * @param {string} username The username that will be used
     * @param {string} password The password for the user
     * @example await PO.login('Guts', 'Miura')
     */
    public async login(username: string, password: string) {
        // Enter username, then password and click the login button.
        await this.txtUsername.setValue(username);
        await this.txtPwd.setValue(password);
        await this.btnLogin.click();
    }
}

export const loginPage = new LoginPage();
