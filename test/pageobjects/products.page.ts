import { $ } from '@wdio/globals'
import Page from './page';

/**
 * Class containing elements and methods for the products screen
 */
class ProductsPage extends Page {
    /**
     * define selectors using getter methods
     */
    private get header() {
        return $('//android.widget.TextView[@text="Products"]');
    }

    /**
     * Function to log into the application
     * @param {string} username The username that will be used
     * @param {string} password The password for the user
     * @example await PO.login('Guts', 'Miura')
     */
    public async isHeaderDisplayed() {
        await this.header.waitForExist();
        expect(await this.header.isDisplayed()).toBe(true);
    }
}

export const productsPage = new ProductsPage();
