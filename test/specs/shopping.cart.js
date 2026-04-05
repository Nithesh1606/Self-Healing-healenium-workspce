const CartPage = require('../pageobjects/shopping.cart.page');
const assert = require('chai').assert;

const cartPage = new CartPage();

describe('HappyKart', () => {
    it('should display HappyKart homepage with correct elements', async () => {
        await cartPage.open();
        // await cartPage.browser.maximizeWindow();
        await cartPage.delayInSec(5);
        // assert.isTrue(await cartPage.isLogoDisplayed(), 'HappyKart logo is displayed');
        await cartPage.homeButton;
        await cartPage.cartButton;
        // await cartPage.cartItemsText.waitForDisplayed();
    });

    it('should contain 20 products', async () => {
        await cartPage.productWrapper;
        await cartPage.customCardForEachProduct;
        // const productsWrapper = await browser.$('//div[@class="productsWrapper"]');
        // const products = await productsWrapper.$('//div[@class="custom-card"]');
        // assert.equal(cartPage.customCard, 20, 'Product count is 20');
    });

    it('should fill the checkout form and display success message', async () => {
        await cartPage.fillFormAndSubmit('test@example.com', 'password123', '123 Main St', 'New York', '12345');
        const successMessage = await cartPage.getSuccessMessage();
        console.log("successMessage:", successMessage);
        // assert.equal(successMessage, 'Form is valid. Proceed with checkout.', 'Success message displayed');
    });

    it('Send the Trigger details email', async () => {
        await cartPage.sendHealReportInEmail();
    });

});
