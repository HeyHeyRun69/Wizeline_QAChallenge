import { browser } from '@wdio/globals'

/**
* Main page object containing all methods, selectors and functionality
* that is shared across all page objects
*/
export default class Page {
    /**
     * Function to open the hamburger menu
     */
    private async openHamburgerMenu() {
        (await browser.$('//android.view.ViewGroup[@content-desc="open menu"]/android.widget.ImageView')).click();
    }

    /**
     * Opens hamburger menu then selects option
     * @param option Option to pick in the hamburger menu
     * @see
     *  List of available options:
     * - Catalog
     * - Webview
     * - QR Code Scanner
     * - Geo Location
     * - Drawing
     * - About
     * - Reset App State
     * - FingerPrint
     * - Log In
     * - Log Out
     * - Api Calls
     * - Sauce Bot Video
     * @example await PO.selectHamburgerMenuOption('Log In');
     * 
     */
    public async selectHamburgerMenuOption(option: string) {
        // Open hamburger menu
        await this.openHamburgerMenu();

        // Select option
        (await browser.$(`//android.widget.TextView[@text="${option}"]`)).click();
    }
}
