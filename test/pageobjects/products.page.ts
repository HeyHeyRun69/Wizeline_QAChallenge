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
     * Function to wait for the Product header to exist and
     * validate that it is displayed
     */
    public async isHeaderDisplayed() {
        await this.header.waitForExist();
        expect(await this.header.isDisplayed()).toBe(true);
    }
}

export const productsPage = new ProductsPage();
