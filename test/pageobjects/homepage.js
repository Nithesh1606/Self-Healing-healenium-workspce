class HomePage {

    browser;

    constructor(browser) {
        // super(browser);
        this.browser = browser;
    }

    async healEnable() {
        await browser.url('http://192.168.29.100:7878/healenium/selectors/');
        await this.enable.click();
        await this.delayInSec(4);
    }

    get enable() {
        return $('(//input[@type="checkbox"])[5]');
    }

    byText(tagName, attrValue) {
        return $(`//${tagName}[text()='${attrValue}']`)
    }

    byAttribute(tagName, attrName, attrValue) {
        return $(`//${tagName}[@${attrName}='${attrValue}']`);
    }

    byName(tagName, attrValue) {
        return this.byAttribute(tagName, 'name', attrValue);
    }

    delayInSec(seconds) {
        return browser.pause(seconds * 1000);
    }

    get logo() {
        return $('//span[@class="logo"]');
    }

    get homeButton() {
        return this.byText('a', 'Home');
    }

    get cartButton() {
        return $('//a[text()="Cart"]');
    }

    get cartItemsText() {
        return $('//span[@class="cartCount"]');
    }

    open() {
        return browser.url('http://192.168.29.100:3000');
    }

    async isLogoDisplayed() {
        await this.logo.waitForDisplayed({ timeout: 5000 }); // Wait for 5 seconds for the logo to be displayed
        return await this.logo.isDisplayed();
    }

    async clickHomeButton() {
        await this.homeButton.click();
    }

    async clickCartButton() {
        await this.cartButton.click();
    }

    async getCartItemsText() {
        return await this.cartItemsText.getText();
    }
}

module.exports = HomePage;
